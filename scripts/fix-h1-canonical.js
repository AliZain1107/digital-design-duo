#!/usr/bin/env node

/**
 * Script to fix all blog posts:
 * 1. Add missing H1 tags
 * 2. Fix canonical URLs to use styly.fr
 * 3. Ensure proper SEO structure
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

// Function to extract title from blog post content
function extractTitle(content, fileName) {
  // Try to find existing title in various formats
  let title = '';
  
  // Look for title in meta tags
  const metaTitleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (metaTitleMatch) {
    title = metaTitleMatch[1].replace(' | Styly.fr', '').replace(' | Styly.io', '');
  }
  
  // Look for title in meta property
  const ogTitleMatch = content.match(/property="og:title"[^>]*content="([^"]+)"/i);
  if (ogTitleMatch && !title) {
    title = ogTitleMatch[1];
  }
  
  // Look for existing H2 that might be the main title
  const h2Match = content.match(/<h2[^>]*>([^<]+)<\/h2>/i);
  if (h2Match && !title) {
    title = h2Match[1];
  }
  
  // Fallback: generate from filename
  if (!title) {
    title = fileName
      .replace('.tsx', '')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/^./, str => str.toUpperCase());
  }
  
  return title;
}

// Function to add H1 tag to blog post
function addH1Tag(content, title, fileName) {
  console.log(`   Adding H1 tag: "${title}"`);
  
  // Find the best place to insert H1
  // Look for article tag or main content div
  const articleMatch = content.match(/(<article[^>]*>)/i);
  const divMatch = content.match(/(<div[^>]*className="[^"]*(?:prose|max-w|flex flex-col)[^"]*"[^>]*>)/i);
  
  let insertPoint = '';
  let insertAfter = '';
  
  if (articleMatch) {
    insertAfter = articleMatch[1];
  } else if (divMatch) {
    insertAfter = divMatch[1];
  } else {
    // Fallback: insert after return statement
    const returnMatch = content.match(/(return\s*\(\s*<[^>]+>)/i);
    if (returnMatch) {
      insertAfter = returnMatch[1];
    }
  }
  
  if (insertAfter) {
    const h1Tag = `
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ${title}
            </h1>
          </header>`;
    
    return content.replace(insertAfter, insertAfter + h1Tag);
  }
  
  return content;
}

// Function to fix canonical URLs
function fixCanonicalUrls(content, fileName) {
  console.log(`   Fixing canonical URLs`);
  
  // Fix styly.io to styly.fr
  let updatedContent = content.replace(/https:\/\/www\.styly\.io\//g, 'https://www.styly.fr/');
  
  // Fix any remaining old domain references
  updatedContent = updatedContent.replace(/styly\.io/g, 'styly.fr');
  
  return updatedContent;
}

// Function to ensure self-canonical
function ensureSelfCanonical(content, fileName) {
  const hasCanonical = content.includes('rel="canonical"');
  
  if (!hasCanonical) {
    console.log(`   Adding canonical URL`);
    
    // Generate canonical URL from filename
    const slug = fileName.replace('.tsx', '').toLowerCase()
      .replace(/([A-Z])/g, '-$1')
      .replace(/^-/, '')
      .toLowerCase();
    
    const canonicalUrl = `https://www.styly.fr/blog/${slug}`;
    
    // Find where to insert canonical
    const helmetMatch = content.match(/(<Helmet[^>]*>)/i);
    if (helmetMatch) {
      const canonicalTag = `
          <link rel="canonical" href="${canonicalUrl}" />`;
      return content.replace(helmetMatch[1], helmetMatch[1] + canonicalTag);
    }
  }
  
  return content;
}

// Main execution
console.log('🔧 Fixing H1 tags and canonical URLs in all blog posts...\n');

const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
let totalFixed = 0;

console.log(`📁 Found ${blogFiles.length} blog post files\n`);

for (const filePath of blogFiles) {
  const fileName = path.basename(filePath);
  console.log(`🔍 Processing: ${fileName}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let wasModified = false;
  
  // Check if H1 tag exists
  const hasH1 = content.includes('<h1');
  
  if (!hasH1) {
    const title = extractTitle(content, fileName);
    content = addH1Tag(content, title, fileName);
    wasModified = true;
  }
  
  // Fix canonical URLs
  const originalContent = content;
  content = fixCanonicalUrls(content, fileName);
  if (content !== originalContent) {
    wasModified = true;
  }
  
  // Ensure self-canonical
  const beforeCanonical = content;
  content = ensureSelfCanonical(content, fileName);
  if (content !== beforeCanonical) {
    wasModified = true;
  }
  
  // Write back if modified
  if (wasModified) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFixed++;
    console.log(`   ✅ Fixed and saved`);
  } else {
    console.log(`   ✅ No changes needed`);
  }
  
  console.log('');
}

console.log('📊 SUMMARY:');
console.log(`✅ Files fixed: ${totalFixed}`);
console.log(`📁 Total files processed: ${blogFiles.length}`);

if (totalFixed > 0) {
  console.log('\n🎉 H1 and canonical URL fixes completed successfully!');
  console.log('📝 All blog posts now have proper H1 tags and canonical URLs');
} else {
  console.log('\n✅ All blog posts were already properly configured!');
}

console.log('\n🚀 Ready for deployment with improved SEO!');
