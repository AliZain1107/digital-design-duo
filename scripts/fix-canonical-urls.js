#!/usr/bin/env node

/**
 * Fix Canonical URLs Script
 * Updates all blog posts to use correct www.styly.fr domain
 * instead of old styly.io domain
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_PAGES_DIR = path.join(__dirname, '../src/blogPages');

// Function to recursively get all .tsx files in a directory
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

// Function to fix canonical URLs in a file
function fixCanonicalUrls(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace styly.io with www.styly.fr in canonical URLs and alternate URLs
  let newContent = content.replace(/https:\/\/styly\.io\//g, 'https://www.styly.fr/');
  
  if (newContent !== content) {
    modified = true;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fixed canonical URLs in: ${path.basename(filePath)}`);
  }
  
  return modified;
}

// Function to ensure blog posts use SEO component properly
function ensureSEOComponent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  // Check if file uses SEO component
  const usesSEOComponent = content.includes('import SEO from') || content.includes('<SEO ');
  const usesHelmet = content.includes('<Helmet>');
  
  if (usesHelmet && !usesSEOComponent) {
    console.log(`⚠️  ${fileName} uses Helmet directly instead of SEO component`);
    return false;
  }
  
  if (usesSEOComponent) {
    console.log(`✅ ${fileName} properly uses SEO component`);
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔧 Starting canonical URL fixes...\n');

const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
let totalFixed = 0;
let seoComponentIssues = 0;

console.log(`📁 Found ${blogFiles.length} blog post files\n`);

for (const filePath of blogFiles) {
  const fileName = path.basename(filePath);
  console.log(`🔍 Checking: ${fileName}`);
  
  // Fix canonical URLs
  const wasFixed = fixCanonicalUrls(filePath);
  if (wasFixed) {
    totalFixed++;
  }
  
  // Check SEO component usage
  const usesSEOProperly = ensureSEOComponent(filePath);
  if (!usesSEOProperly) {
    seoComponentIssues++;
  }
  
  console.log(''); // Empty line for readability
}

console.log('📊 Summary:');
console.log(`✅ Files with canonical URLs fixed: ${totalFixed}`);
console.log(`⚠️  Files with SEO component issues: ${seoComponentIssues}`);
console.log(`📁 Total files processed: ${blogFiles.length}`);

if (totalFixed > 0) {
  console.log('\n🎉 Canonical URL fixes completed successfully!');
  console.log('📝 All blog posts now use https://www.styly.fr domain');
} else {
  console.log('\n✅ All canonical URLs were already correct!');
}

if (seoComponentIssues > 0) {
  console.log('\n⚠️  Some blog posts use Helmet directly instead of SEO component.');
  console.log('💡 Consider updating them to use the centralized SEO component for consistency.');
}

console.log('\n🚀 Ready for deployment with correct canonical URLs!');
