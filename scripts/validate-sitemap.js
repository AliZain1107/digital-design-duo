#!/usr/bin/env node

/**
 * Sitemap Validation Script
 * Validates sitemap.xml for duplicate URLs and structure issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

function validateSitemap() {
  console.log('🔍 Validating sitemap.xml...\n');

  // Read sitemap
  const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  
  // Extract all URLs
  const urlMatches = content.match(/<loc>(.*?)<\/loc>/g);
  if (!urlMatches) {
    console.log('❌ No URLs found in sitemap');
    return false;
  }

  const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
  
  console.log(`📊 Total URLs found: ${urls.length}`);
  
  // Check for duplicates
  const urlCounts = {};
  const duplicates = [];
  
  urls.forEach(url => {
    urlCounts[url] = (urlCounts[url] || 0) + 1;
    if (urlCounts[url] > 1 && !duplicates.includes(url)) {
      duplicates.push(url);
    }
  });
  
  if (duplicates.length > 0) {
    console.log('❌ DUPLICATE URLs FOUND:');
    duplicates.forEach(url => {
      console.log(`   ${url}: ${urlCounts[url]} times`);
    });
    return false;
  } else {
    console.log('✅ No duplicate URLs found');
  }
  
  // Check URL structure consistency
  const blogUrls = urls.filter(url => url.includes('/blog/'));
  const inconsistentUrls = blogUrls.filter(url => 
    url.includes('/fr/blog/') || url.includes('/en/blog/')
  );
  
  if (inconsistentUrls.length > 0) {
    console.log('⚠️  INCONSISTENT URL STRUCTURE:');
    inconsistentUrls.forEach(url => console.log(`   ${url}`));
  } else {
    console.log('✅ URL structure is consistent');
  }
  
  // Check for trailing slashes
  const trailingSlashUrls = urls.filter(url => url.endsWith('/') && url !== 'https://www.styly.fr/');
  
  if (trailingSlashUrls.length > 0) {
    console.log('⚠️  URLs with trailing slashes:');
    trailingSlashUrls.forEach(url => console.log(`   ${url}`));
  } else {
    console.log('✅ No unexpected trailing slashes');
  }
  
  // Summary
  console.log('\n📋 VALIDATION SUMMARY:');
  console.log(`   Total URLs: ${urls.length}`);
  console.log(`   Blog URLs: ${blogUrls.length}`);
  console.log(`   Duplicates: ${duplicates.length}`);
  console.log(`   Inconsistent structure: ${inconsistentUrls.length}`);
  console.log(`   Trailing slashes: ${trailingSlashUrls.length}`);
  
  const isValid = duplicates.length === 0 && inconsistentUrls.length === 0;
  
  if (isValid) {
    console.log('\n🎉 SITEMAP IS VALID - No duplication issues detected!');
  } else {
    console.log('\n❌ SITEMAP HAS ISSUES - Please fix the problems above');
  }
  
  return isValid;
}

// Run validation
const isValid = validateSitemap();
process.exit(isValid ? 0 : 1);
