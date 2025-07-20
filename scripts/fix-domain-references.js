#!/usr/bin/env node

/**
 * Script to fix all styly.io domain references to styly.fr
 * in all page files (not blog posts)
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

// Function to fix domain references
function fixDomainReferences(content, fileName) {
  let updatedContent = content;
  let changesMade = false;
  
  // Fix styly.io to styly.fr in URLs
  const oldContent = updatedContent;
  updatedContent = updatedContent.replace(/https:\/\/styly\.io\//g, 'https://www.styly.fr/');
  if (updatedContent !== oldContent) {
    changesMade = true;
    console.log(`   Fixed https://styly.io/ → https://www.styly.fr/`);
  }
  
  // Fix styly.io domain references in text
  const beforeTextFix = updatedContent;
  updatedContent = updatedContent.replace(/Styly\.io/g, 'Styly.fr');
  if (updatedContent !== beforeTextFix) {
    changesMade = true;
    console.log(`   Fixed Styly.io → Styly.fr in text`);
  }
  
  // Fix styly.io in meta descriptions and titles
  const beforeMetaFix = updatedContent;
  updatedContent = updatedContent.replace(/styly\.io/g, 'styly.fr');
  if (updatedContent !== beforeMetaFix) {
    changesMade = true;
    console.log(`   Fixed styly.io → styly.fr in meta tags`);
  }
  
  return { content: updatedContent, changed: changesMade };
}

// Main execution
console.log('🔧 Fixing domain references in all pages...\n');

const pageFiles = getTsxFiles(PAGES_DIR);
let totalFixed = 0;

console.log(`📁 Found ${pageFiles.length} page files\n`);

for (const filePath of pageFiles) {
  const fileName = path.basename(filePath);
  console.log(`🔍 Processing: ${fileName}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const result = fixDomainReferences(content, fileName);
  
  if (result.changed) {
    fs.writeFileSync(filePath, result.content, 'utf8');
    totalFixed++;
    console.log(`   ✅ Fixed and saved`);
  } else {
    console.log(`   ✅ No changes needed`);
  }
  
  console.log('');
}

console.log('📊 SUMMARY:');
console.log(`✅ Files fixed: ${totalFixed}`);
console.log(`📁 Total files processed: ${pageFiles.length}`);

if (totalFixed > 0) {
  console.log('\n🎉 Domain reference fixes completed successfully!');
  console.log('📝 All pages now use styly.fr domain consistently');
} else {
  console.log('\n✅ All pages were already using correct domain!');
}

console.log('\n🚀 Ready for deployment with consistent domain references!');
