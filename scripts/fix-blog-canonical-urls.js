#!/usr/bin/env node

/**
 * Fix blog post canonical URLs by removing hardcoded canonical URLs
 * and letting BlogPostPage.tsx handle canonical URL generation properly
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

// Function to remove hardcoded canonical URLs from blog post components
function removeHardcodedCanonical(content, fileName) {
  let updatedContent = content;
  let changesMade = false;
  
  // Remove canonical link tags with hardcoded URLs (including conditional expressions)
  const canonicalRegex = /<link\s+rel="canonical"\s+href=\{[^}]*\?\s*[^}]*:\s*[^}]*\}\s*\/>/gi;
  const canonicalMatches = updatedContent.match(canonicalRegex);

  if (canonicalMatches) {
    canonicalMatches.forEach(match => {
      console.log(`   Removing conditional canonical: ${match.substring(0, 60)}...`);
      updatedContent = updatedContent.replace(match, '');
      changesMade = true;
    });
  }

  // Remove simple canonical link tags with hardcoded URLs
  const simpleCanonicalRegex = /<link\s+rel="canonical"\s+href=\{[^}]+\}\s*\/>/gi;
  const simpleCanonicalMatches = updatedContent.match(simpleCanonicalRegex);

  if (simpleCanonicalMatches) {
    simpleCanonicalMatches.forEach(match => {
      console.log(`   Removing simple canonical: ${match.substring(0, 60)}...`);
      updatedContent = updatedContent.replace(match, '');
      changesMade = true;
    });
  }
  
  // Remove canonical link tags with static URLs
  const staticCanonicalRegex = /<link\s+rel="canonical"\s+href="[^"]+"\s*\/>/gi;
  const staticCanonicalMatches = updatedContent.match(staticCanonicalRegex);
  
  if (staticCanonicalMatches) {
    staticCanonicalMatches.forEach(match => {
      console.log(`   Removing static canonical: ${match.substring(0, 60)}...`);
      updatedContent = updatedContent.replace(match, '');
      changesMade = true;
    });
  }
  
  // Remove og:url meta tags with hardcoded URLs (including conditional expressions)
  const ogUrlRegex = /<meta\s+property="og:url"\s+content=\{[^}]*\?\s*[^}]*:\s*[^}]*\}\s*\/>/gi;
  const ogUrlMatches = updatedContent.match(ogUrlRegex);

  if (ogUrlMatches) {
    ogUrlMatches.forEach(match => {
      console.log(`   Removing conditional og:url: ${match.substring(0, 60)}...`);
      updatedContent = updatedContent.replace(match, '');
      changesMade = true;
    });
  }

  // Remove simple og:url meta tags
  const simpleOgUrlRegex = /<meta\s+property="og:url"\s+content=\{[^}]+\}\s*\/>/gi;
  const simpleOgUrlMatches = updatedContent.match(simpleOgUrlRegex);

  if (simpleOgUrlMatches) {
    simpleOgUrlMatches.forEach(match => {
      console.log(`   Removing simple og:url: ${match.substring(0, 60)}...`);
      updatedContent = updatedContent.replace(match, '');
      changesMade = true;
    });
  }
  
  // Clean up any empty lines left behind
  if (changesMade) {
    // Remove multiple consecutive empty lines
    updatedContent = updatedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up any trailing whitespace in Helmet blocks
    updatedContent = updatedContent.replace(/(\s*)<\/Helmet>/g, '\n      </Helmet>');
  }
  
  return { content: updatedContent, changed: changesMade };
}

// Function to check if blog post component should be processed
function shouldProcessFile(content, fileName) {
  // Skip files that don't have hardcoded canonical URLs
  const hasCanonical = content.includes('rel="canonical"') || content.includes('property="og:url"');
  
  // Skip files that are already using SEO component properly (without hardcoded URLs)
  const usesSEOComponent = content.includes('<SEO ') && !content.includes('rel="canonical"');
  
  if (usesSEOComponent) {
    console.log(`   Already uses SEO component properly, skipping`);
    return false;
  }
  
  if (!hasCanonical) {
    console.log(`   No hardcoded canonical URLs found, skipping`);
    return false;
  }
  
  return true;
}

// Main execution
console.log('🔧 Fixing blog post canonical URLs...\n');
console.log('Removing hardcoded canonical URLs to let BlogPostPage.tsx handle them properly\n');

const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
let totalFixed = 0;
let totalSkipped = 0;

console.log(`📁 Found ${blogFiles.length} blog post files\n`);

for (const filePath of blogFiles) {
  const fileName = path.basename(filePath);
  console.log(`🔍 Processing: ${fileName}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  if (!shouldProcessFile(content, fileName)) {
    totalSkipped++;
    console.log('');
    continue;
  }
  
  const result = removeHardcodedCanonical(content, fileName);
  
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
console.log(`⏭️  Files skipped: ${totalSkipped}`);
console.log(`📁 Total files processed: ${blogFiles.length}`);

if (totalFixed > 0) {
  console.log('\n🎉 Blog post canonical URL fixes completed successfully!');
  console.log('📝 Removed hardcoded canonical URLs from blog post components');
  console.log('🔗 BlogPostPage.tsx will now handle all canonical URLs properly');
  console.log('✅ Canonical URLs will now match actual page URLs based on blog post data');
} else {
  console.log('\n✅ All blog posts already have proper canonical URL handling!');
}

console.log('\n🚀 Ready for deployment with proper self-canonical URLs!');
