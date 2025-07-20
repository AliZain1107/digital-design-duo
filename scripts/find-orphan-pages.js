#!/usr/bin/env node

/**
 * Script to identify orphan pages - pages that exist but aren't linked to from anywhere
 * Checks navigation, sitemap, blog listings, and internal links
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');
const BLOG_PAGES_DIR = path.join(__dirname, '../src/blogPages');
const COMPONENTS_DIR = path.join(__dirname, '../src/components');

// Function to get all .tsx files
function getTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to extract all existing pages
function getAllExistingPages() {
  const pages = [];
  
  // Get regular pages
  const pageFiles = getTsxFiles(PAGES_DIR);
  pageFiles.forEach(filePath => {
    const fileName = path.basename(filePath, '.tsx');
    pages.push({
      type: 'page',
      fileName,
      filePath,
      expectedUrl: getExpectedPageUrl(fileName)
    });
  });
  
  // Get blog posts
  const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
  blogFiles.forEach(filePath => {
    const fileName = path.basename(filePath, '.tsx');
    pages.push({
      type: 'blog',
      fileName,
      filePath,
      expectedUrl: getExpectedBlogUrl(fileName)
    });
  });
  
  return pages;
}

// Function to get expected URL for a page
function getExpectedPageUrl(fileName) {
  const pageMap = {
    'Index': '/',
    'Blog': '/blog',
    'Privacy': '/confidentialite',
    'Terms': '/conditions',
    'Pricing': '/pricing',
    'Upload': '/upload',
    'VideoGuide': '/video',
    'Collaborators': '/collaborateurs',
    'ServicesAPI': '/services-api',
    'Docs': '/docs',
    'NotFound': '/404'
  };
  
  return pageMap[fileName] || `/${fileName.toLowerCase()}`;
}

// Function to get expected URL for a blog post
function getExpectedBlogUrl(fileName) {
  const slug = fileName
    .replace(/([A-Z])/g, '-$1')
    .replace(/^-/, '')
    .toLowerCase();
  
  return `/blog/${slug}`;
}

// Function to check if page is linked in navigation
function checkNavigationLinks(pages) {
  const navbarPath = path.join(COMPONENTS_DIR, 'layout/Navbar.tsx');
  const footerPath = path.join(COMPONENTS_DIR, 'layout/Footer.tsx');
  
  let navContent = '';
  let footerContent = '';
  
  if (fs.existsSync(navbarPath)) {
    navContent = fs.readFileSync(navbarPath, 'utf8');
  }
  
  if (fs.existsSync(footerPath)) {
    footerContent = fs.readFileSync(footerPath, 'utf8');
  }
  
  const navigationContent = navContent + footerContent;
  
  pages.forEach(page => {
    page.linkedInNavigation = false;
    
    // Check for various link patterns
    const linkPatterns = [
      `to="${page.expectedUrl}"`,
      `to='${page.expectedUrl}'`,
      `href="${page.expectedUrl}"`,
      `href='${page.expectedUrl}'`,
      `"${page.expectedUrl}"`,
      `'${page.expectedUrl}'`
    ];
    
    for (const pattern of linkPatterns) {
      if (navigationContent.includes(pattern)) {
        page.linkedInNavigation = true;
        break;
      }
    }
  });
}

// Function to check if page is in sitemap
function checkSitemapInclusion(pages) {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  let sitemapContent = '';
  if (fs.existsSync(sitemapPath)) {
    sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  }
  
  pages.forEach(page => {
    page.inSitemap = sitemapContent.includes(page.expectedUrl);
  });
}

// Function to check if blog post is in blog listing
function checkBlogListing(pages) {
  const blogPostsPath = path.join(COMPONENTS_DIR, 'data/blogPosts.tsx');
  
  let blogPostsContent = '';
  if (fs.existsSync(blogPostsPath)) {
    blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');
  }
  
  pages.forEach(page => {
    if (page.type === 'blog') {
      // Check if blog post component is imported/referenced
      page.inBlogListing = blogPostsContent.includes(page.fileName);
    } else {
      page.inBlogListing = true; // Not applicable for regular pages
    }
  });
}

// Function to check App.tsx routing
function checkAppRouting(pages) {
  const appPath = path.join(__dirname, '../src/App.tsx');
  
  let appContent = '';
  if (fs.existsSync(appPath)) {
    appContent = fs.readFileSync(appPath, 'utf8');
  }
  
  pages.forEach(page => {
    page.hasRoute = false;
    
    // Check for route patterns
    const routePatterns = [
      `path="${page.expectedUrl}"`,
      `path='${page.expectedUrl}'`,
      `element={<${page.fileName}`,
      page.fileName
    ];
    
    for (const pattern of routePatterns) {
      if (appContent.includes(pattern)) {
        page.hasRoute = true;
        break;
      }
    }
  });
}

// Function to check internal links from other pages
function checkInternalLinks(pages) {
  const allFiles = [
    ...getTsxFiles(PAGES_DIR),
    ...getTsxFiles(BLOG_PAGES_DIR),
    ...getTsxFiles(COMPONENTS_DIR)
  ];
  
  let allContent = '';
  allFiles.forEach(filePath => {
    try {
      allContent += fs.readFileSync(filePath, 'utf8') + '\n';
    } catch (error) {
      // Skip files that can't be read
    }
  });
  
  pages.forEach(page => {
    page.hasInternalLinks = false;
    
    // Check for various link patterns
    const linkPatterns = [
      `to="${page.expectedUrl}"`,
      `to='${page.expectedUrl}'`,
      `href="${page.expectedUrl}"`,
      `href='${page.expectedUrl}'`,
      `"${page.expectedUrl}"`,
      `'${page.expectedUrl}'`
    ];
    
    for (const pattern of linkPatterns) {
      if (allContent.includes(pattern)) {
        page.hasInternalLinks = true;
        break;
      }
    }
  });
}

// Main execution
console.log('🔍 ORPHAN PAGES AUDIT\n');
console.log('Identifying pages that exist but aren\'t properly linked...\n');

const allPages = getAllExistingPages();

console.log(`📁 Found ${allPages.length} total pages:`);
console.log(`   📄 Regular pages: ${allPages.filter(p => p.type === 'page').length}`);
console.log(`   📝 Blog posts: ${allPages.filter(p => p.type === 'blog').length}\n`);

// Run all checks
console.log('🔍 Checking navigation links...');
checkNavigationLinks(allPages);

console.log('🔍 Checking sitemap inclusion...');
checkSitemapInclusion(allPages);

console.log('🔍 Checking blog listing...');
checkBlogListing(allPages);

console.log('🔍 Checking App.tsx routing...');
checkAppRouting(allPages);

console.log('🔍 Checking internal links...');
checkInternalLinks(allPages);

// Identify orphan pages
const orphanPages = allPages.filter(page => {
  if (page.type === 'page') {
    // Regular pages are orphaned if they lack navigation links AND routes
    return !page.linkedInNavigation && !page.hasRoute;
  } else {
    // Blog posts are orphaned if they're not in the blog listing
    return !page.inBlogListing;
  }
});

const potentialOrphans = allPages.filter(page => {
  if (page.type === 'page') {
    // Pages with routes but no navigation links
    return page.hasRoute && !page.linkedInNavigation && !page.hasInternalLinks;
  } else {
    // Blog posts in listing but not in sitemap
    return page.inBlogListing && !page.inSitemap;
  }
});

// Results
console.log('\n📊 ORPHAN PAGES ANALYSIS:\n');

if (orphanPages.length > 0) {
  console.log(`🚨 CRITICAL ORPHAN PAGES (${orphanPages.length}):`);
  orphanPages.forEach(page => {
    console.log(`   ❌ ${page.fileName} (${page.type})`);
    console.log(`      Expected URL: ${page.expectedUrl}`);
    console.log(`      Issues: ${getIssuesList(page)}`);
    console.log('');
  });
} else {
  console.log('✅ No critical orphan pages found!');
}

if (potentialOrphans.length > 0) {
  console.log(`⚠️  POTENTIAL ORPHAN PAGES (${potentialOrphans.length}):`);
  potentialOrphans.forEach(page => {
    console.log(`   ⚠️  ${page.fileName} (${page.type})`);
    console.log(`      Expected URL: ${page.expectedUrl}`);
    console.log(`      Issues: ${getIssuesList(page)}`);
    console.log('');
  });
}

function getIssuesList(page) {
  const issues = [];
  if (!page.linkedInNavigation) issues.push('No navigation links');
  if (!page.hasRoute) issues.push('No route in App.tsx');
  if (!page.inSitemap) issues.push('Not in sitemap');
  if (!page.inBlogListing && page.type === 'blog') issues.push('Not in blog listing');
  if (!page.hasInternalLinks) issues.push('No internal links');
  return issues.join(', ');
}

console.log('\n📈 SUMMARY:');
console.log(`✅ Well-linked pages: ${allPages.length - orphanPages.length - potentialOrphans.length}`);
console.log(`⚠️  Potential orphans: ${potentialOrphans.length}`);
console.log(`❌ Critical orphans: ${orphanPages.length}`);

console.log('\n🚀 Audit completed!');
