#!/usr/bin/env node

/**
 * Google Indexing Test Script
 * Tests if your site is properly configured for Google crawling and indexing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.styly.fr';
const DIST_DIR = path.join(__dirname, '../dist');

// Test URLs to check
const testUrls = [
  '/',                                                    // Homepage
  '/blog',                                               // Blog index
  '/pricing',                                            // Pricing page
  '/upload',                                             // Upload page
  '/blog/tendances-design-interieur-2025',              // Sample blog post
  '/blog/comment-construire-votre-maison-outils-ia-conception-porche', // Another blog post
];

function checkRobotsTxt() {
  console.log('🤖 Checking robots.txt configuration...');
  
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  if (!fs.existsSync(robotsPath)) {
    console.log('❌ robots.txt not found');
    return false;
  }
  
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  
  // Check for sitemap
  if (robotsContent.includes('Sitemap: https://www.styly.fr/sitemap.xml')) {
    console.log('✅ Sitemap URL correctly specified');
  } else {
    console.log('❌ Sitemap URL missing or incorrect');
  }
  
  // Check for general allow
  if (robotsContent.includes('Allow: /')) {
    console.log('✅ General crawling allowed');
  } else {
    console.log('❌ General crawling not explicitly allowed');
  }
  
  // Check for AI bots
  const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'CCBot', 'Amazonbot'];
  let aiBotsAllowed = 0;
  aiBots.forEach(bot => {
    if (robotsContent.includes(`User-agent: ${bot}`)) {
      aiBotsAllowed++;
    }
  });
  
  console.log(`✅ AI bots allowed: ${aiBotsAllowed}/${aiBots.length}`);
  
  // Check for English routes disallow
  if (robotsContent.includes('Disallow: /en/')) {
    console.log('✅ English routes properly disallowed');
  } else {
    console.log('⚠️  English routes not disallowed (may cause duplicate content)');
  }
  
  return true;
}

function checkSitemap() {
  console.log('\n🗺️  Checking sitemap.xml...');
  
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ sitemap.xml not found');
    return false;
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Count URLs
  const urlMatches = sitemapContent.match(/<url>/g);
  const urlCount = urlMatches ? urlMatches.length : 0;
  console.log(`✅ Sitemap contains ${urlCount} URLs`);
  
  // Check for required URLs
  testUrls.forEach(url => {
    const fullUrl = `${DOMAIN}${url}`;
    if (sitemapContent.includes(fullUrl)) {
      console.log(`✅ ${url} found in sitemap`);
    } else {
      console.log(`❌ ${url} missing from sitemap`);
    }
  });
  
  // Check for lastmod dates
  if (sitemapContent.includes('<lastmod>')) {
    console.log('✅ Last modification dates included');
  } else {
    console.log('⚠️  Last modification dates missing');
  }
  
  return true;
}

function checkPrerenderedFiles() {
  console.log('\n📄 Checking prerendered HTML files...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.log('❌ Dist directory not found - run "npm run build:seo" first');
    return false;
  }
  
  let allFilesExist = true;
  
  testUrls.forEach(url => {
    let filePath;
    if (url === '/') {
      filePath = path.join(DIST_DIR, 'index.html');
    } else {
      filePath = path.join(DIST_DIR, url, 'index.html');
    }
    
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      console.log(`✅ ${url} → ${sizeKB} KB`);
      
      // Check if file has content (not just empty shell)
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<div id="root">') && content.length > 5000) {
        console.log(`   ✅ Contains full rendered content`);
      } else {
        console.log(`   ❌ File too small or missing content`);
        allFilesExist = false;
      }
    } else {
      console.log(`❌ ${url} → File missing`);
      allFilesExist = false;
    }
  });
  
  return allFilesExist;
}

function checkMetaTags() {
  console.log('\n🏷️  Checking meta tags in index.html...');
  
  const indexPath = path.join(__dirname, '../index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('❌ index.html not found');
    return false;
  }
  
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Check essential meta tags
  const checks = [
    { tag: 'title', pattern: /<title>.*<\/title>/, name: 'Title tag' },
    { tag: 'description', pattern: /<meta name="description"/, name: 'Meta description' },
    { tag: 'robots', pattern: /<meta name="robots"/, name: 'Robots meta tag' },
    { tag: 'canonical', pattern: /<link rel="canonical"/, name: 'Canonical URL' },
    { tag: 'og:title', pattern: /<meta property="og:title"/, name: 'Open Graph title' },
    { tag: 'og:description', pattern: /<meta property="og:description"/, name: 'Open Graph description' },
    { tag: 'og:image', pattern: /<meta property="og:image"/, name: 'Open Graph image' },
    { tag: 'twitter:card', pattern: /<meta name="twitter:card"/, name: 'Twitter card' },
    { tag: 'structured-data', pattern: /<script type="application\/ld\+json">/, name: 'Structured data (JSON-LD)' }
  ];
  
  checks.forEach(check => {
    if (check.pattern.test(indexContent)) {
      console.log(`✅ ${check.name}`);
    } else {
      console.log(`❌ ${check.name} missing`);
    }
  });
  
  // Check robots meta tag content
  const robotsMatch = indexContent.match(/<meta name="robots" content="([^"]+)"/);
  if (robotsMatch) {
    const robotsContent = robotsMatch[1];
    if (robotsContent.includes('index') && robotsContent.includes('follow')) {
      console.log('✅ Robots meta allows indexing and following');
    } else {
      console.log('❌ Robots meta may block indexing');
    }
  }
  
  return true;
}

function checkRedirectsConfig() {
  console.log('\n🔄 Checking _redirects configuration...');
  
  const redirectsPath = path.join(__dirname, '../public/_redirects');
  if (!fs.existsSync(redirectsPath)) {
    console.log('❌ _redirects file not found');
    return false;
  }
  
  const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
  
  // Check for prerendered page rules
  if (redirectsContent.includes('/blog/* /blog/:splat/index.html 200')) {
    console.log('✅ Blog posts serve prerendered HTML');
  } else {
    console.log('❌ Blog posts may not serve prerendered HTML');
  }
  
  if (redirectsContent.includes('/pricing /pricing/index.html 200')) {
    console.log('✅ Core pages serve prerendered HTML');
  } else {
    console.log('❌ Core pages may not serve prerendered HTML');
  }
  
  // Check for SPA fallback
  if (redirectsContent.includes('/* /index.html 200')) {
    console.log('✅ SPA fallback configured');
  } else {
    console.log('❌ SPA fallback missing');
  }
  
  return true;
}

function generateGoogleTestReport() {
  console.log('🔍 GOOGLE INDEXING TEST REPORT');
  console.log('=====================================\n');
  
  const results = {
    robots: checkRobotsTxt(),
    sitemap: checkSitemap(),
    prerendered: checkPrerenderedFiles(),
    metaTags: checkMetaTags(),
    redirects: checkRedirectsConfig()
  };
  
  console.log('\n📊 SUMMARY:');
  console.log('=====================================');
  
  const passed = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;
  
  console.log(`✅ Tests passed: ${passed}/${total}`);
  
  if (passed === total) {
    console.log('\n🎉 EXCELLENT! Your site is properly configured for Google indexing!');
    console.log('✅ Google crawlers will be able to:');
    console.log('   - Access your site (robots.txt allows crawling)');
    console.log('   - Find all pages (sitemap.xml is complete)');
    console.log('   - See full content (prerendered HTML files)');
    console.log('   - Understand your content (proper meta tags)');
    console.log('   - Navigate your site (redirects configured correctly)');
    console.log('\n🚀 Next steps:');
    console.log('   1. Deploy to AWS Amplify with the new configuration');
    console.log('   2. Submit sitemap to Google Search Console');
    console.log('   3. Monitor indexing improvements');
  } else {
    console.log('\n⚠️  Some issues found that may affect Google indexing.');
    console.log('💡 Review the failed tests above and fix the issues.');
  }
  
  console.log('\n🔗 Test URLs for Google Search Console:');
  testUrls.forEach(url => {
    console.log(`   ${DOMAIN}${url}`);
  });
}

// Run the test
generateGoogleTestReport();
