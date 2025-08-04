#!/usr/bin/env node

/**
 * Verify Prerendered Files Script
 * Checks if all expected prerendered HTML files exist
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');

// Expected prerendered files
const expectedFiles = [
  'index.html',                           // Homepage
  'blog/index.html',                      // Blog listing
  'pricing/index.html',                   // Pricing page
  'upload/index.html',                    // Upload page
  'collaborateurs/index.html',            // Collaborateurs page
  'services-api/index.html',              // Services API page
  'styly-pro/index.html',                 // Styly Pro page
  'get-started/index.html',               // Get Started page
  'video/index.html',                     // Video page
  'conditions/index.html',                // Conditions page
  'confidentialite/index.html',           // Confidentialite page
];

// Sample blog posts to check
const sampleBlogPosts = [
  'blog/tendances-design-interieur-2025/index.html',
  'blog/comment-construire-votre-maison-outils-ia-conception-porche/index.html',
  'blog/besoin-salle-bain-luxueuse-budget-voici-comment/index.html'
];

function verifyFile(filePath) {
  const fullPath = path.join(DIST_DIR, filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${filePath} (${sizeKB} KB)`);
    return true;
  } else {
    console.log(`❌ ${filePath} - MISSING`);
    return false;
  }
}

function verifyPrerenderedFiles() {
  console.log('🔍 Verifying prerendered files...\n');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Dist directory not found. Please run "npm run build:seo" first.');
    process.exit(1);
  }
  
  console.log('📄 Core Pages:');
  let allFilesExist = true;
  
  for (const file of expectedFiles) {
    if (!verifyFile(file)) {
      allFilesExist = false;
    }
  }
  
  console.log('\n📚 Sample Blog Posts:');
  for (const file of sampleBlogPosts) {
    if (!verifyFile(file)) {
      allFilesExist = false;
    }
  }
  
  // Count total blog posts
  const blogDir = path.join(DIST_DIR, 'blog');
  if (fs.existsSync(blogDir)) {
    const blogPosts = fs.readdirSync(blogDir).filter(item => {
      const itemPath = path.join(blogDir, item);
      return fs.statSync(itemPath).isDirectory() && 
             fs.existsSync(path.join(itemPath, 'index.html'));
    });
    console.log(`\n📊 Total blog posts prerendered: ${blogPosts.length}`);
  }
  
  if (allFilesExist) {
    console.log('\n🎉 All prerendered files verified successfully!');
    console.log('✅ Ready for deployment to AWS Amplify');
  } else {
    console.log('\n❌ Some prerendered files are missing');
    console.log('💡 Run "npm run build:seo" to regenerate files');
    process.exit(1);
  }
}

// Run verification
verifyPrerenderedFiles();
