#!/usr/bin/env node

/**
 * French-First Sitemap Generator for Styly.fr
 * Generates sitemap focused on French content only
 * English URLs redirect to styly.io so they should not be in sitemap
 * This prevents confusing hreflang signals for Google indexing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.styly.fr';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Function to get blog posts from actual data file
function getBlogPostsFromDataFile() {
  try {
    // Read the actual blogPosts.tsx file
    const blogPostsPath = path.join(__dirname, '../src/components/data/blogPosts.tsx');
    const fileContent = fs.readFileSync(blogPostsPath, 'utf8');

    // Extract blog posts data using regex
    const blogPostsMatch = fileContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
    if (!blogPostsMatch) {
      console.log('⚠️  Could not parse blogPosts.tsx, using fallback data');
      return getFallbackBlogPosts();
    }

    // Extract individual blog post objects
    const blogPostsContent = blogPostsMatch[1];
    const posts = [];

    // Split by blog post objects (each starts with id:)
    const postObjects = blogPostsContent.split(/\{\s*id:\s*\d+/).slice(1); // Remove first empty element

    for (let i = 0; i < postObjects.length; i++) {
      const postContent = postObjects[i];

      // Extract id, slugFr (or slug if no slugFr), and date
      const idMatch = postContent.match(/^[^}]*?(\d+)/);
      const slugFrMatch = postContent.match(/slugFr:\s*"([^"]+)"/);
      const slugMatch = postContent.match(/slug:\s*"([^"]+)"/);
      const dateMatch = postContent.match(/date:\s*"([^"]+)"/);

      if (idMatch && dateMatch && (slugFrMatch || slugMatch)) {
        const id = parseInt(idMatch[1]);
        const slugFr = slugFrMatch ? slugFrMatch[1] : slugMatch[1];
        const date = dateMatch[1];

        posts.push({
          id: id,
          slugFr: slugFr,
          slug: slugFr, // Use French slug as primary
          lastmod: convertDateToISO(date)
        });
      }
    }

    console.log(`📚 Successfully parsed ${posts.length} blog posts from blogPosts.tsx`);

    // Only use fallback if we got zero posts (parsing completely failed)
    if (posts.length === 0) {
      console.log('⚠️  No posts found in parsed data, using fallback');
      return getFallbackBlogPosts();
    }

    // Remove duplicates by slug to prevent sitemap duplication
    const uniquePosts = [];
    const seenSlugs = new Set();

    for (const post of posts) {
      const slug = post.slugFr || post.slug;
      if (!seenSlugs.has(slug)) {
        seenSlugs.add(slug);
        uniquePosts.push(post);
      } else {
        console.log(`🔄 Skipping duplicate slug: ${slug}`);
      }
    }

    console.log(`✅ Returning ${uniquePosts.length} unique blog posts (removed ${posts.length - uniquePosts.length} duplicates)`);
    return uniquePosts;

  } catch (error) {
    console.log('⚠️  Error reading blogPosts.tsx:', error.message);
    console.log('📚 Using fallback blog posts data for sitemap generation');
    return getFallbackBlogPosts();
  }
}

// Convert date formats to ISO
function convertDateToISO(dateStr) {
  try {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

// Minimal fallback blog posts data (only used if parsing completely fails)
function getFallbackBlogPosts() {
  console.log('🚨 WARNING: Using fallback data - this should not happen if blogPosts.tsx is properly formatted');
  return [
    // Minimal fallback - only one entry to prevent empty sitemap
    {
      slug: "science-couleur-design-comment-ia-aide-choisir-palette-parfaite",
      slugFr: "science-couleur-design-comment-ia-aide-choisir-palette-parfaite",
      lastmod: "2025-06-28"
    }
  ];
}

// Main pages that exist (excluding root and 'en' as they're handled separately)
const mainPages = [
  { path: 'upload', priority: '0.9', changefreq: 'monthly' },
  { path: 'pricing', priority: '0.8', changefreq: 'monthly' },
  { path: 'get-started', priority: '0.8', changefreq: 'monthly' },
  { path: 'styly-pro', priority: '0.8', changefreq: 'monthly' },
  { path: 'services-api', priority: '0.7', changefreq: 'monthly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'conditions', priority: '0.5', changefreq: 'yearly' },
  { path: 'confidentialite', priority: '0.5', changefreq: 'yearly' },
  { path: 'video', priority: '0.6', changefreq: 'monthly' },
  { path: 'collaborateurs', priority: '0.7', changefreq: 'monthly' }
];

function generateSitemapXML(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  const footer = `
</urlset>`;

  const urlEntries = urls.map(url => {
    let entry = `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <mobile:mobile/>`;

    if (url.hreflang) {
      url.hreflang.forEach(hreflang => {
        entry += `
    <xhtml:link rel="alternate" hreflang="${hreflang.lang}" href="${hreflang.href}"/>`;
      });
    }

    if (url.image) {
      entry += `
    <image:image>
      <image:loc>${url.image.loc}</image:loc>
      <image:title>${url.image.title}</image:title>
      <image:caption>${url.image.caption}</image:caption>
    </image:image>`;
    }

    entry += `
  </url>`;
    return entry;
  }).join('');

  return header + urlEntries + footer;
}

function generateMainSitemap() {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // Get blog posts from actual data file
  const blogPosts = getBlogPostsFromDataFile();

  // Add root page (French only - English redirects to styly.io)
  urls.push({
    loc: `${DOMAIN}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0'
    // No hreflang - English URLs redirect to external domain
  });

  // Add other pages (French only - English URLs redirect to styly.io)
  mainPages.forEach(page => {
    const frenchUrl = `${DOMAIN}/${page.path}`;

    // French version only
    urls.push({
      loc: frenchUrl,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority
      // No hreflang - English URLs redirect to external domain
    });
  });

  // Add blog posts (French only - English URLs redirect to styly.io)
  blogPosts.forEach(post => {
    const slug = post.slugFr || post.slug;

    // French blog post only (without trailing slash - canonical version)
    urls.push({
      loc: `${DOMAIN}/blog/${slug}`,
      lastmod: post.lastmod,
      changefreq: 'monthly',
      priority: '0.8'
      // No hreflang - English URLs redirect to external domain
    });
  });

  return generateSitemapXML(urls);
}

// Removed generateFrenchSitemap function - now using single consolidated sitemap

// Generate single consolidated sitemap
console.log('Generating consolidated French sitemap...');

const mainSitemap = generateMainSitemap();

// Write single sitemap file
fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), mainSitemap);

console.log('✅ Consolidated sitemap generated successfully!');
console.log(`📁 Sitemap: ${path.join(OUTPUT_DIR, 'sitemap.xml')}`);
console.log('🎯 Contains only French URLs - no duplicate or conflicting sitemaps');
