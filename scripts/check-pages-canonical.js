#!/usr/bin/env node

/**
 * Script to check all non-blog pages for:
 * 1. Canonical URL issues
 * 2. Domain consistency (styly.fr vs styly.io)
 * 3. Self-canonical implementation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');

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

// Function to check canonical URLs in pages
function checkCanonicalUrls(filePath, content) {
  const fileName = path.basename(filePath);
  const issues = [];
  
  // Check for canonical URLs in various formats
  const canonicalMatches = content.match(/rel="canonical"[^>]*href="([^"]+)"/gi) || [];
  const ogUrlMatches = content.match(/ogUrl=\{?["']([^"']+)["']?\}?/gi) || [];
  const currentUrlMatches = content.match(/currentUrl\s*=\s*["']([^"']+)["']/gi) || [];
  
  // Check direct canonical links
  if (canonicalMatches.length === 0) {
    // Check if using SEO component (which should handle canonical)
    const usesSEOComponent = content.includes('<SEO ') || content.includes('import SEO');
    if (!usesSEOComponent) {
      issues.push('❌ NO CANONICAL URL FOUND');
    }
  } else {
    canonicalMatches.forEach((match) => {
      const url = match.match(/href="([^"]+)"/i)?.[1];
      if (url) {
        if (url.includes('styly.io')) {
          issues.push(`❌ OLD DOMAIN IN CANONICAL: ${url}`);
        }
        if (!url.startsWith('https://www.styly.fr/') && !url.includes('SITE_CONFIG')) {
          issues.push(`❌ WRONG DOMAIN IN CANONICAL: ${url}`);
        }
      }
    });
  }
  
  // Check ogUrl prop
  ogUrlMatches.forEach((match) => {
    const url = match.match(/["']([^"']+)["']/)?.[1];
    if (url && url.includes('styly.io')) {
      issues.push(`❌ OLD DOMAIN IN OG_URL: ${url}`);
    }
  });
  
  // Check currentUrl variable
  currentUrlMatches.forEach((match) => {
    const url = match.match(/["']([^"']+)["']/)?.[1];
    if (url && url.includes('styly.io')) {
      issues.push(`❌ OLD DOMAIN IN CURRENT_URL: ${url}`);
    }
  });
  
  // Check for hardcoded styly.io references
  const stylyIoMatches = content.match(/styly\.io/g);
  if (stylyIoMatches && stylyIoMatches.length > 0) {
    issues.push(`⚠️  CONTAINS ${stylyIoMatches.length} STYLY.IO REFERENCES`);
  }
  
  return issues;
}

// Function to check SEO implementation
function checkSEOImplementation(filePath, content) {
  const fileName = path.basename(filePath);
  const issues = [];
  
  // Check if uses SEO component
  const usesSEOComponent = content.includes('<SEO ') || content.includes('import SEO');
  const usesHelmet = content.includes('<Helmet>') || content.includes('import { Helmet }');
  
  if (!usesSEOComponent && !usesHelmet) {
    issues.push('⚠️  NO SEO IMPLEMENTATION');
  }
  
  // Check for title
  const hasTitle = content.includes('title=') || content.includes('<title>');
  if (!hasTitle) {
    issues.push('⚠️  NO TITLE TAG');
  }
  
  // Check for meta description
  const hasDescription = content.includes('description=') || content.includes('name="description"');
  if (!hasDescription) {
    issues.push('⚠️  NO META DESCRIPTION');
  }
  
  return issues;
}

// Main execution
console.log('🔍 Checking all pages for canonical URLs and domain consistency...\n');

const pageFiles = getTsxFiles(PAGES_DIR);
const results = [];

console.log(`📁 Found ${pageFiles.length} page files\n`);

for (const filePath of pageFiles) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const canonicalIssues = checkCanonicalUrls(filePath, content);
  const seoIssues = checkSEOImplementation(filePath, content);
  
  const allIssues = [...canonicalIssues, ...seoIssues];
  
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
console.log(`✅ Pages with no issues: ${pageFiles.length - results.length}`);
console.log(`⚠️  Pages with issues: ${results.length}`);

if (results.length > 0) {
  console.log('\n🔧 PAGES NEEDING FIXES:');
  results.forEach(result => {
    console.log(`   ${result.file}: ${result.issues.length} issues`);
  });
  
  // Count specific issue types
  let oldDomainCount = 0;
  let noCanonicalCount = 0;
  let noSeoCount = 0;
  
  results.forEach(result => {
    result.issues.forEach(issue => {
      if (issue.includes('OLD DOMAIN')) oldDomainCount++;
      if (issue.includes('NO CANONICAL')) noCanonicalCount++;
      if (issue.includes('NO SEO IMPLEMENTATION')) noSeoCount++;
    });
  });
  
  console.log('\n📈 ISSUE BREAKDOWN:');
  if (oldDomainCount > 0) console.log(`   🔗 Old domain references: ${oldDomainCount}`);
  if (noCanonicalCount > 0) console.log(`   📄 Missing canonical URLs: ${noCanonicalCount}`);
  if (noSeoCount > 0) console.log(`   🎯 Missing SEO implementation: ${noSeoCount}`);
}

console.log('\n🚀 Check completed!');
