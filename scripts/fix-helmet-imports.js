#!/usr/bin/env node

/**
 * Script to fix incorrect react-helmet-async imports to react-helmet
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

// Function to fix helmet imports in a file
function fixHelmetImports(filePath) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file has incorrect import
  if (!content.includes('react-helmet-async')) {
    return false;
  }
  
  console.log(`   Fixing: ${fileName}`);
  
  // Replace react-helmet-async with react-helmet
  const updatedContent = content.replace(/from ["']react-helmet-async["']/g, 'from "react-helmet"');
  
  // Write back the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  return true;
}

// Main execution
console.log('🔧 Fixing incorrect react-helmet-async imports...\n');

const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
let totalFixed = 0;

console.log(`📁 Found ${blogFiles.length} blog post files\n`);

for (const filePath of blogFiles) {
  const wasFixed = fixHelmetImports(filePath);
  if (wasFixed) {
    totalFixed++;
  }
}

console.log(`\n✅ Fixed ${totalFixed} files with incorrect helmet imports`);

if (totalFixed > 0) {
  console.log('🎉 All react-helmet-async imports fixed to react-helmet!');
} else {
  console.log('✅ No incorrect helmet imports found!');
}

console.log('\n🚀 Ready to build without import errors!');
