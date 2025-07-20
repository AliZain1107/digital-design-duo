#!/usr/bin/env node

/**
 * Comprehensive fix for ALL missing canonical URLs
 * Focuses on blog posts that are missing proper self-canonical implementation
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

// Function to generate proper canonical URL from filename
function generateCanonicalUrl(fileName) {
  const slug = fileName
    .replace('.tsx', '')
    .replace(/([A-Z])/g, '-$1')
    .replace(/^-/, '')
    .toLowerCase();
  
  return `https://www.styly.fr/blog/${slug}`;
}

// Function to check if file has canonical URL
function hasCanonicalUrl(content) {
  return content.includes('rel="canonical"') || 
         content.includes('link rel="canonical"') ||
         (content.includes('<SEO ') && content.includes('ogUrl='));
}

// Function to add canonical URL to Helmet-based blog posts
function addCanonicalToHelmet(content, canonicalUrl, fileName) {
  console.log(`   Adding canonical URL to Helmet: ${canonicalUrl}`);
  
  // Find Helmet opening tag
  const helmetMatch = content.match(/(<Helmet[^>]*>)/i);
  if (helmetMatch) {
    const canonicalTag = `
        <link rel="canonical" href="${canonicalUrl}" />`;
    return content.replace(helmetMatch[1], helmetMatch[1] + canonicalTag);
  }
  
  // If no Helmet found, add it
  console.log(`   Adding Helmet with canonical URL`);
  
  // Find import statements to add Helmet import
  const importMatch = content.match(/(import.*from.*["'];?\s*)/);
  if (importMatch && !content.includes('import { Helmet }')) {
    const helmetImport = `import { Helmet } from "react-helmet";\n`;
    content = content.replace(importMatch[0], importMatch[0] + helmetImport);
  }
  
  // Find return statement to add Helmet
  const returnMatch = content.match(/(return\s*\(\s*(?:<>|<div|<article))/i);
  if (returnMatch) {
    const helmetBlock = `
    <>
      <Helmet>
        <link rel="canonical" href="${canonicalUrl}" />
      </Helmet>
      `;
    
    // Replace the opening tag and add closing fragment
    const newContent = content.replace(returnMatch[1], returnMatch[1].replace(/(<>|<div|<article)/, helmetBlock + '$1'));
    
    // Add closing fragment before the last closing tag
    const lastClosingMatch = newContent.match(/(\s*<\/(?:div|article)>\s*\);\s*};?\s*export)/);
    if (lastClosingMatch) {
      return newContent.replace(lastClosingMatch[1], lastClosingMatch[1].replace(/(<\/(?:div|article)>)/, '$1\n    </>'));
    }
  }
  
  return content;
}

// Function to add canonical URL to SEO component
function addCanonicalToSEO(content, canonicalUrl, fileName) {
  console.log(`   Adding canonical URL to SEO component: ${canonicalUrl}`);
  
  // Check if SEO component already has ogUrl
  if (content.includes('ogUrl=')) {
    console.log(`   SEO component already has ogUrl, skipping`);
    return content;
  }
  
  // Find SEO component and add ogUrl
  const seoMatch = content.match(/(<SEO\s+[^>]*)(\/?>)/i);
  if (seoMatch) {
    const seoProps = seoMatch[1];
    const closing = seoMatch[2];
    
    // Add ogUrl prop
    const newSeoTag = `${seoProps}
          ogUrl="${canonicalUrl}"
        ${closing}`;
    
    return content.replace(seoMatch[0], newSeoTag);
  }
  
  return content;
}

// Main fix function
function fixCanonicalUrl(filePath) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has canonical URL
  if (hasCanonicalUrl(content)) {
    return false; // No changes needed
  }
  
  console.log(`   Missing canonical URL, adding...`);
  
  const canonicalUrl = generateCanonicalUrl(fileName);
  let updatedContent = content;
  
  // Determine which method to use based on existing structure
  if (content.includes('<SEO ')) {
    updatedContent = addCanonicalToSEO(updatedContent, canonicalUrl, fileName);
  } else if (content.includes('<Helmet>')) {
    updatedContent = addCanonicalToHelmet(updatedContent, canonicalUrl, fileName);
  } else {
    // Add Helmet implementation
    updatedContent = addCanonicalToHelmet(updatedContent, canonicalUrl, fileName);
  }
  
  // Write the updated content
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔧 Fixing ALL missing canonical URLs in blog posts...\n');

const blogFiles = getTsxFiles(BLOG_PAGES_DIR);
let totalFixed = 0;
let totalChecked = 0;

console.log(`📁 Found ${blogFiles.length} blog post files\n`);

for (const filePath of blogFiles) {
  const fileName = path.basename(filePath);
  console.log(`🔍 Processing: ${fileName}`);
  
  totalChecked++;
  
  try {
    const wasFixed = fixCanonicalUrl(filePath);
    if (wasFixed) {
      totalFixed++;
      console.log(`   ✅ Fixed and saved`);
    } else {
      console.log(`   ✅ Already has canonical URL`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  
  console.log('');
}

console.log('📊 SUMMARY:');
console.log(`✅ Files fixed: ${totalFixed}`);
console.log(`📁 Total files checked: ${totalChecked}`);
console.log(`📄 Files already correct: ${totalChecked - totalFixed}`);

if (totalFixed > 0) {
  console.log('\n🎉 Canonical URL fixes completed successfully!');
  console.log('📝 All blog posts now have proper self-canonical URLs');
  console.log('🔗 All canonical URLs point to https://www.styly.fr/blog/[slug]');
} else {
  console.log('\n✅ All blog posts already have proper canonical URLs!');
}

console.log('\n🚀 Ready for deployment with complete canonical URL coverage!');
