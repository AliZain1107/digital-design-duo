#!/usr/bin/env node

/**
 * Fix SPA Indexing Issues
 * Ensures Google sees individual pages instead of one single domain
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');

function analyzeSPAIndexingIssue() {
  console.log('🔍 SPA INDEXING ISSUE ANALYSIS');
  console.log('==============================\n');

  console.log('🚨 **THE PROBLEM: Google Sees One Single Domain**');
  console.log('------------------------------------------------');
  console.log('Your React SPA serves the same index.html for all routes:');
  console.log('   www.styly.fr/ → index.html');
  console.log('   www.styly.fr/pricing → index.html (same file!)');
  console.log('   www.styly.fr/blog/post → index.html (same file!)');
  console.log('');
  console.log('Result: Google thinks everything is the same page.\n');

  // Check if prerendered files are actually different
  console.log('📊 **CHECKING IF PRERENDERED FILES ARE UNIQUE**');
  console.log('-----------------------------------------------');

  const testFiles = [
    { path: 'index.html', description: 'Homepage' },
    { path: 'pricing/index.html', description: 'Pricing page' },
    { path: 'blog/index.html', description: 'Blog index' },
    { path: 'blog/tendances-design-interieur-2025/index.html', description: 'Blog post' }
  ];

  const fileHashes = {};
  const fileTitles = {};
  const fileDescriptions = {};

  testFiles.forEach(file => {
    const filePath = path.join(DIST_DIR, file.path);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract title
      const titleMatch = content.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'No title';
      
      // Extract description
      const descMatch = content.match(/<meta name="description" content="(.*?)"/);
      const description = descMatch ? descMatch[1] : 'No description';
      
      // Create content hash (simplified)
      const contentHash = content.length + '_' + title.substring(0, 20);
      
      fileHashes[file.path] = contentHash;
      fileTitles[file.path] = title;
      fileDescriptions[file.path] = description;
      
      console.log(`✅ ${file.description}:`);
      console.log(`   Title: "${title}"`);
      console.log(`   Size: ${Math.round(content.length / 1024)} KB`);
      console.log(`   Unique: ${contentHash}`);
      console.log('');
    } else {
      console.log(`❌ ${file.description}: File missing`);
    }
  });

  // Check for duplicates
  const hashValues = Object.values(fileHashes);
  const uniqueHashes = [...new Set(hashValues)];
  
  console.log('🎯 **UNIQUENESS ANALYSIS**');
  console.log('-------------------------');
  if (hashValues.length === uniqueHashes.length) {
    console.log('✅ All prerendered files are UNIQUE');
    console.log('   Google should see them as different pages');
  } else {
    console.log('❌ Some prerendered files are IDENTICAL');
    console.log('   Google will see them as the same page');
  }

  console.log('\n🔧 **SOLUTIONS TO FIX SPA INDEXING**');
  console.log('====================================');

  console.log('**Option 1: Enhanced Prerendering (Current Approach)**');
  console.log('✅ Pros: Keeps current React architecture');
  console.log('✅ Pros: Each page has unique HTML content');
  console.log('⚠️  Cons: Requires build-time generation');
  console.log('⚠️  Cons: May still have SPA detection issues');
  console.log('');

  console.log('**Option 2: Server-Side Rendering (SSR)**');
  console.log('✅ Pros: Perfect for Google indexing');
  console.log('✅ Pros: Dynamic content generation');
  console.log('❌ Cons: Requires major architecture change');
  console.log('❌ Cons: Need Node.js server');
  console.log('');

  console.log('**Option 3: Static Site Generation (SSG)**');
  console.log('✅ Pros: Best SEO performance');
  console.log('✅ Pros: Fast loading times');
  console.log('⚠️  Cons: Content updates require rebuilds');
  console.log('⚠️  Cons: Less dynamic functionality');
  console.log('');

  console.log('🎯 **RECOMMENDED IMMEDIATE FIXES**');
  console.log('==================================');
  console.log('1. **Ensure unique meta tags** for each prerendered page');
  console.log('2. **Add structured data** specific to each page type');
  console.log('3. **Implement proper canonical URLs** for each page');
  console.log('4. **Add page-specific content** that differs significantly');
  console.log('5. **Submit individual URLs** to Google Search Console');
  console.log('');

  console.log('🚀 **TESTING GOOGLE\'S PERCEPTION**');
  console.log('==================================');
  console.log('Test these URLs in Google Search Console URL Inspection:');
  console.log('   1. https://www.styly.fr/');
  console.log('   2. https://www.styly.fr/pricing');
  console.log('   3. https://www.styly.fr/blog/tendances-design-interieur-2025');
  console.log('');
  console.log('Expected: Each should show different content and meta tags');
  console.log('If they look identical: SPA indexing issue confirmed');

  return {
    uniqueFiles: hashValues.length === uniqueHashes.length,
    fileCount: testFiles.length,
    uniqueCount: uniqueHashes.length
  };
}

function generateSPAFixRecommendations() {
  console.log('\n📋 **STEP-BY-STEP SPA INDEXING FIX**');
  console.log('====================================');

  console.log('**Phase 1: Immediate Fixes (Current Architecture)**');
  console.log('1. Ensure each prerendered page has unique:');
  console.log('   - Title tags');
  console.log('   - Meta descriptions');
  console.log('   - H1 headings');
  console.log('   - Structured data');
  console.log('');

  console.log('2. Add page-specific content that differs significantly');
  console.log('3. Implement proper internal linking between pages');
  console.log('4. Submit sitemap and individual URLs to Google');
  console.log('');

  console.log('**Phase 2: Enhanced SEO (If Phase 1 Doesn\'t Work)**');
  console.log('1. Consider migrating to Next.js for SSR/SSG');
  console.log('2. Implement dynamic meta tag generation');
  console.log('3. Add server-side rendering for critical pages');
  console.log('');

  console.log('**Phase 3: Alternative Solutions**');
  console.log('1. Use a headless CMS with static generation');
  console.log('2. Implement a hybrid approach (SSR for SEO pages)');
  console.log('3. Consider using Gatsby or similar SSG framework');
}

// Run analysis
const results = analyzeSPAIndexingIssue();
generateSPAFixRecommendations();

console.log('\n🎯 **CONCLUSION**');
console.log('================');
if (results.uniqueFiles) {
  console.log('✅ Your prerendered files are unique - technical setup is correct');
  console.log('⚠️  If Google still sees "one domain", the issue is:');
  console.log('   1. Google hasn\'t re-crawled since your fixes');
  console.log('   2. CDN/caching serving old content');
  console.log('   3. Google\'s SPA detection algorithms');
} else {
  console.log('❌ Your prerendered files are not sufficiently unique');
  console.log('🔧 Fix: Ensure each page has significantly different content');
}

export { analyzeSPAIndexingIssue };
