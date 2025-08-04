#!/usr/bin/env node

/**
 * Prerender Script for SEO Optimization
 * Generates static HTML files for all routes to improve Google indexing
 * This solves the client-side routing indexing problem
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('🚀 Prerender script starting...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:8080'; // Development server
const OUTPUT_DIR = path.join(__dirname, '../dist');
const TIMEOUT = 30000; // 30 seconds timeout

// Function to get blog posts from data file
function getBlogSlugs() {
  console.log('📚 Extracting blog slugs...');
  try {
    const blogPostsPath = path.join(__dirname, '../src/components/data/blogPosts.tsx');
    console.log('📁 Reading blog posts from:', blogPostsPath);
    const fileContent = fs.readFileSync(blogPostsPath, 'utf8');

    // Extract French slugs (slugFr) and regular slugs
    const slugFrMatches = fileContent.match(/slugFr:\s*"([^"]+)"/g) || [];
    const slugMatches = fileContent.match(/slug:\s*"([^"]+)"/g) || [];

    const slugs = [
      ...slugFrMatches.map(match => match.replace(/slugFr:\s*"([^"]+)"/, '$1')),
      ...slugMatches.map(match => match.replace(/slug:\s*"([^"]+)"/, '$1'))
    ];

    // Remove duplicates and return
    const uniqueSlugs = [...new Set(slugs)];
    console.log(`✅ Found ${uniqueSlugs.length} unique blog slugs`);
    return uniqueSlugs;
  } catch (error) {
    console.warn('⚠️  Could not extract blog slugs:', error.message);
    return [];
  }
}

// Define all routes to prerender
function getRoutesToPrerender() {
  console.log('🗺️  Getting routes to prerender...');
  const blogSlugs = getBlogSlugs();

  const staticRoutes = [
    '/',
    '/blog',
    '/upload',
    '/pricing',
    '/get-started',
    '/styly-pro',
    '/collaborateurs',
    '/services-api',
    '/video',
    '/conditions',
    '/confidentialite'
  ];

  // Add blog post routes
  const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

  console.log(`📚 Found ${blogSlugs.length} blog posts to prerender`);
  console.log(`📄 Total routes: ${staticRoutes.length + blogRoutes.length}`);

  return [...staticRoutes, ...blogRoutes];
}

// Prerender a single page
async function prerenderPage(browser, route) {
  const page = await browser.newPage();
  
  try {
    console.log(`🔄 Prerendering: ${route}`);
    
    // Navigate to the page
    await page.goto(`${BASE_URL}${route}`, {
      waitUntil: 'networkidle0',
      timeout: TIMEOUT
    });
    
    // Wait for React to fully render
    await page.waitForSelector('body', { timeout: 5000 });

    // Wait a bit more for dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get the rendered HTML
    const html = await page.content();
    
    // Create the output path
    const outputPath = route === '/' 
      ? path.join(OUTPUT_DIR, 'index.html')
      : path.join(OUTPUT_DIR, route, 'index.html');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the HTML file
    fs.writeFileSync(outputPath, html);
    
    console.log(`✅ Prerendered: ${route} → ${outputPath}`);
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route}:`, error.message);
  } finally {
    await page.close();
  }
}

// Main prerender function
async function prerenderSite() {
  console.log('🚀 Starting prerender process...');

  // Check if dist directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    console.error('❌ Dist directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  const routes = getRoutesToPrerender();
  console.log(`📄 Prerendering ${routes.length} routes...`);
  console.log('Routes to prerender:', routes);

  // Check if dev server is running (simplified check)
  console.log(`🔍 Checking if dev server is running at ${BASE_URL}...`);

  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Prerender all routes
    for (const route of routes) {
      await prerenderPage(browser, route);
    }

    console.log('✅ Prerendering completed successfully!');
    console.log(`📁 Static HTML files generated in: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run if called directly
console.log('🔍 Checking if script is called directly...');
console.log('import.meta.url:', import.meta.url);
console.log('process.argv[1]:', process.argv[1]);

// Always run for now (simplified)
console.log('▶️  Starting prerender process...');
prerenderSite().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

export { prerenderSite, getRoutesToPrerender };
