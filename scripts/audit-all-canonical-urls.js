#!/usr/bin/env node

/**
 * Comprehensive audit of ALL canonical URLs across the entire site
 * Checks both blog posts and regular pages for proper self-canonical implementation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');
const BLOG_PAGES_DIR = path.join(__dirname, '../src/blogPages');

// Function to get all .tsx files recursively
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

// Function to extract canonical URLs from content
function extractCanonicalInfo(content, fileName, isPage = false) {
  const issues = [];
  const info = {
    hasCanonical: false,
    canonicalUrls: [],
    usesSEOComponent: false,
    usesHelmet: false,
    ogUrls: [],
    currentUrls: []
  };
  
  // Check for SEO component usage
  info.usesSEOComponent = content.includes('<SEO ') || content.includes('import SEO');
  info.usesHelmet = content.includes('<Helmet>') || content.includes('import { Helmet }');
  
  // Extract canonical URLs from various sources
  const canonicalMatches = content.match(/rel="canonical"[^>]*href=["']([^"']+)["']/gi) || [];
  const ogUrlMatches = content.match(/ogUrl=\{?["']([^"']+)["']?\}?/gi) || [];
  const currentUrlMatches = content.match(/currentUrl\s*=\s*["']([^"']+)["']/gi) || [];
  const seoUrlMatches = content.match(/ogUrl=\{([^}]+)\}/gi) || [];
  
  // Process canonical URLs
  canonicalMatches.forEach(match => {
    const url = match.match(/href=["']([^"']+)["']/i)?.[1];
    if (url) {
      info.canonicalUrls.push(url);
      info.hasCanonical = true;
      
      // Check for issues
      if (url.includes('styly.io')) {
        issues.push(`❌ OLD DOMAIN IN CANONICAL: ${url}`);
      }
      if (!url.startsWith('https://www.styly.fr/') && !url.includes('SITE_CONFIG') && !url.includes('language')) {
        issues.push(`❌ WRONG DOMAIN IN CANONICAL: ${url}`);
      }
      if (url.endsWith('/') && url !== 'https://www.styly.fr/') {
        issues.push(`⚠️  TRAILING SLASH IN CANONICAL: ${url}`);
      }
    }
  });
  
  // Process ogUrl props
  ogUrlMatches.forEach(match => {
    const url = match.match(/["']([^"']+)["']/)?.[1];
    if (url) {
      info.ogUrls.push(url);
      if (url.includes('styly.io')) {
        issues.push(`❌ OLD DOMAIN IN OG_URL: ${url}`);
      }
    }
  });
  
  // Process currentUrl variables
  currentUrlMatches.forEach(match => {
    const url = match.match(/["']([^"']+)["']/)?.[1];
    if (url) {
      info.currentUrls.push(url);
      if (url.includes('styly.io')) {
        issues.push(`❌ OLD DOMAIN IN CURRENT_URL: ${url}`);
      }
    }
  });
  
  // Check for missing canonical
  if (!info.hasCanonical && !info.usesSEOComponent) {
    issues.push('❌ NO CANONICAL URL FOUND');
  }
  
  // Check for proper SEO implementation
  if (!info.usesSEOComponent && !info.usesHelmet) {
    issues.push('⚠️  NO SEO IMPLEMENTATION');
  }
  
  return { info, issues };
}

// Function to determine expected canonical URL for a file
function getExpectedCanonicalUrl(fileName, isPage = false) {
  if (isPage) {
    // Handle regular pages
    const pageMap = {
      'Index.tsx': '/',
      'Blog.tsx': '/blog',
      'Privacy.tsx': '/confidentialite',
      'Terms.tsx': '/conditions',
      'Pricing.tsx': '/pricing',
      'Upload.tsx': '/upload',
      'VideoGuide.tsx': '/video',
      'Collaborators.tsx': '/collaborateurs',
      'ServicesAPI.tsx': '/services-api',
      'Docs.tsx': '/docs',
      'NotFound.tsx': '/404'
    };
    
    const path = pageMap[fileName] || `/${fileName.replace('.tsx', '').toLowerCase()}`;
    return `https://www.styly.fr${path}`;
  } else {
    // Handle blog posts - convert filename to slug
    const slug = fileName
      .replace('.tsx', '')
      .replace(/([A-Z])/g, '-$1')
      .replace(/^-/, '')
      .toLowerCase();
    
    return `https://www.styly.fr/blog/${slug}`;
  }
}

// Main audit function
function auditFiles(files, isPage = false) {
  const results = [];
  const fileType = isPage ? 'PAGE' : 'BLOG POST';
  
  console.log(`\n🔍 AUDITING ${fileType}S (${files.length} files):\n`);
  
  for (const filePath of files) {
    const fileName = path.basename(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const { info, issues } = extractCanonicalInfo(content, fileName, isPage);
    const expectedUrl = getExpectedCanonicalUrl(fileName, isPage);
    
    if (issues.length > 0) {
      console.log(`🔍 ${fileName}:`);
      issues.forEach(issue => console.log(`   ${issue}`));
      
      if (info.canonicalUrls.length > 0) {
        console.log(`   📍 Current canonical: ${info.canonicalUrls.join(', ')}`);
      }
      console.log(`   ✅ Expected canonical: ${expectedUrl}`);
      console.log('');
      
      results.push({
        file: fileName,
        path: filePath,
        issues,
        currentCanonicals: info.canonicalUrls,
        expectedCanonical: expectedUrl,
        info
      });
    } else {
      console.log(`✅ ${fileName}: All checks passed`);
    }
  }
  
  return results;
}

// Main execution
console.log('🔍 COMPREHENSIVE CANONICAL URL AUDIT\n');
console.log('Checking ALL pages and blog posts for proper self-canonical URLs...');

// Audit regular pages
const pageFiles = getTsxFiles(PAGES_DIR);
const pageResults = auditFiles(pageFiles, true);

// Audit blog posts
const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
const blogResults = auditFiles(blogFiles, false);

// Summary
const totalFiles = pageFiles.length + blogFiles.length;
const totalIssues = pageResults.length + blogResults.length;

console.log('\n📊 COMPREHENSIVE SUMMARY:');
console.log(`📁 Total files audited: ${totalFiles}`);
console.log(`✅ Files with no issues: ${totalFiles - totalIssues}`);
console.log(`⚠️  Files with issues: ${totalIssues}`);
console.log(`   📄 Pages with issues: ${pageResults.length}/${pageFiles.length}`);
console.log(`   📝 Blog posts with issues: ${blogResults.length}/${blogFiles.length}`);

if (totalIssues > 0) {
  console.log('\n🔧 ISSUES BREAKDOWN:');
  
  let oldDomainCount = 0;
  let noCanonicalCount = 0;
  let wrongDomainCount = 0;
  let trailingSlashCount = 0;
  
  [...pageResults, ...blogResults].forEach(result => {
    result.issues.forEach(issue => {
      if (issue.includes('OLD DOMAIN')) oldDomainCount++;
      if (issue.includes('NO CANONICAL')) noCanonicalCount++;
      if (issue.includes('WRONG DOMAIN')) wrongDomainCount++;
      if (issue.includes('TRAILING SLASH')) trailingSlashCount++;
    });
  });
  
  if (oldDomainCount > 0) console.log(`   🔗 Old domain references: ${oldDomainCount}`);
  if (noCanonicalCount > 0) console.log(`   📄 Missing canonical URLs: ${noCanonicalCount}`);
  if (wrongDomainCount > 0) console.log(`   🌐 Wrong domain in canonical: ${wrongDomainCount}`);
  if (trailingSlashCount > 0) console.log(`   📐 Trailing slash issues: ${trailingSlashCount}`);
}

console.log('\n🚀 Audit completed!');
