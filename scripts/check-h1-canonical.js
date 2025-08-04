#!/usr/bin/env node

/**
 * Script to check all blog posts for:
 * 1. Missing H1 tags
 * 2. Incorrect canonical URLs
 * 3. SEO structure issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_PAGES_DIR = path.join(__dirname, '../src/blogPages');

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

// Function to check H1 tags in a blog post
function checkH1Tags(filePath, content) {
  const fileName = path.basename(filePath);
  const issues = [];
  
  // Check for H1 tags
  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gi);
  
  if (!h1Matches || h1Matches.length === 0) {
    issues.push('❌ NO H1 TAG FOUND');
  } else if (h1Matches.length > 1) {
    issues.push(`⚠️  MULTIPLE H1 TAGS (${h1Matches.length})`);
  } else {
    // Check if H1 is properly structured
    const h1Content = h1Matches[0];
    if (!h1Content.includes('className') && !h1Content.includes('class')) {
      issues.push('⚠️  H1 missing CSS classes');
    }
  }
  
  return issues;
}

// Function to check canonical URLs
function checkCanonicalUrls(filePath, content) {
  const fileName = path.basename(filePath);
  const issues = [];
  
  // Check for canonical URLs
  const canonicalMatches = content.match(/rel="canonical"[^>]*href="([^"]+)"/gi);
  
  if (!canonicalMatches || canonicalMatches.length === 0) {
    issues.push('❌ NO CANONICAL URL FOUND');
  } else {
    canonicalMatches.forEach((match, index) => {
      const url = match.match(/href="([^"]+)"/i)?.[1];
      if (url) {
        if (!url.startsWith('https://www.styly.fr/')) {
          issues.push(`❌ WRONG DOMAIN: ${url}`);
        }
        if (url.includes('styly.io')) {
          issues.push(`❌ OLD DOMAIN: ${url}`);
        }
        if (url.endsWith('/')) {
          issues.push(`⚠️  TRAILING SLASH: ${url}`);
        }
      }
    });
  }
  
  return issues;
}

// Function to check SEO structure
function checkSEOStructure(filePath, content) {
  const fileName = path.basename(filePath);
  const issues = [];
  
  // Check if uses Helmet or SEO component
  const usesHelmet = content.includes('<Helmet>') || content.includes('from "react-helmet"');
  const usesSEOComponent = content.includes('<SEO ') || content.includes('from "@/components/layout/SEO"');
  
  if (!usesHelmet && !usesSEOComponent) {
    issues.push('❌ NO SEO IMPLEMENTATION');
  }
  
  // Check for meta description
  const hasMetaDescription = content.includes('meta name="description"') || content.includes('description=');
  if (!hasMetaDescription) {
    issues.push('⚠️  NO META DESCRIPTION');
  }
  
  // Check for title tag
  const hasTitle = content.includes('<title>') || content.includes('title=');
  if (!hasTitle) {
    issues.push('⚠️  NO TITLE TAG');
  }
  
  return issues;
}

// Main execution
console.log('🔍 Checking all blog posts for H1 tags and canonical URLs...\n');

const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
const results = [];

console.log(`📁 Found ${blogFiles.length} blog post files\n`);

for (const filePath of blogFiles) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const h1Issues = checkH1Tags(filePath, content);
  const canonicalIssues = checkCanonicalUrls(filePath, content);
  const seoIssues = checkSEOStructure(filePath, content);
  
  const allIssues = [...h1Issues, ...canonicalIssues, ...seoIssues];
  
  if (allIssues.length > 0) {
    console.log(`🔍 ${fileName}:`);
    allIssues.forEach(issue => console.log(`   ${issue}`));
    console.log('');
    
    results.push({
      file: fileName,
      path: filePath,
      issues: allIssues
    });
  } else {
    console.log(`✅ ${fileName}: All checks passed`);
  }
}

// Summary
console.log('\n📊 SUMMARY:');
console.log(`✅ Files with no issues: ${blogFiles.length - results.length}`);
console.log(`⚠️  Files with issues: ${results.length}`);

if (results.length > 0) {
  console.log('\n🔧 FILES NEEDING FIXES:');
  results.forEach(result => {
    console.log(`   ${result.file}: ${result.issues.length} issues`);
  });
}

console.log('\n🚀 Check completed!');
