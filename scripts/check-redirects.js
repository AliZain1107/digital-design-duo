#!/usr/bin/env node

/**
 * Check Redirects Configuration
 * Analyzes _redirects file for issues that could affect Google indexing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function analyzeRedirects() {
  console.log('🔄 REDIRECTS ANALYSIS FOR INDEXING ISSUES');
  console.log('=========================================\n');

  const redirectsPath = path.join(__dirname, '../public/_redirects');
  
  if (!fs.existsSync(redirectsPath)) {
    console.log('❌ _redirects file not found');
    return;
  }

  const content = fs.readFileSync(redirectsPath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('#'));

  // Parse redirects
  const redirects = [];
  const prerenderRules = [];
  const spaFallback = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const parts = trimmed.split(/\s+/);

    if (trimmed.includes('301!')) {
      redirects.push({
        from: parts[0],
        to: parts[1],
        status: '301',
        line: index + 1,
        rule: trimmed
      });
    } else if (trimmed.includes('200') && trimmed.includes('index.html')) {
      prerenderRules.push({
        from: parts[0],
        to: parts[1],
        line: index + 1,
        rule: trimmed
      });
    } else if (trimmed.includes('/* /index.html 200')) {
      spaFallback.push({
        rule: trimmed,
        line: index + 1
      });
    }
  });

  console.log('📊 **REDIRECT STATISTICS**');
  console.log('--------------------------');
  console.log(`Total 301 redirects: ${redirects.length}`);
  console.log(`Prerender rules (200): ${prerenderRules.length}`);
  console.log(`SPA fallback rules: ${spaFallback.length}`);
  console.log('');

  // Check for duplicates
  console.log('🔍 **CHECKING FOR DUPLICATE REDIRECTS**');
  console.log('---------------------------------------');
  const fromPaths = redirects.map(r => r.from);
  const duplicates = fromPaths.filter((path, index) => fromPaths.indexOf(path) !== index);
  
  if (duplicates.length > 0) {
    console.log('❌ DUPLICATE REDIRECTS FOUND:');
    [...new Set(duplicates)].forEach(dup => {
      const matching = redirects.filter(r => r.from === dup);
      console.log(`   ${dup}:`);
      matching.forEach(r => console.log(`     Line ${r.line}: ${r.rule}`));
    });
  } else {
    console.log('✅ No duplicate redirects found');
  }

  // Check critical pages
  console.log('\n🎯 **CRITICAL PAGES REDIRECT ANALYSIS**');
  console.log('---------------------------------------');
  
  const criticalPages = [
    '/services-api',
    '/pricing', 
    '/upload',
    '/styly-pro',
    '/collaborateurs',
    '/blog'
  ];

  criticalPages.forEach(page => {
    console.log(`\n**${page}:**`);
    
    // Check trailing slash redirect
    const trailingSlashRedirect = redirects.find(r => r.from === `${page}/`);
    if (trailingSlashRedirect) {
      console.log(`  ✅ Trailing slash redirect: ${page}/ → ${trailingSlashRedirect.to}`);
    } else {
      console.log(`  ⚠️  No trailing slash redirect for ${page}/`);
    }
    
    // Check prerender rule
    const prerenderRule = prerenderRules.find(r => r.from === page);
    if (prerenderRule) {
      console.log(`  ✅ Prerender rule: ${page} → ${prerenderRule.to}`);
    } else {
      console.log(`  ❌ Missing prerender rule for ${page}`);
    }
  });

  // Check redirect chains
  console.log('\n🔗 **CHECKING FOR REDIRECT CHAINS**');
  console.log('-----------------------------------');
  
  let chainsFound = false;
  redirects.forEach(redirect => {
    const chainTarget = redirects.find(r => r.from === redirect.to);
    if (chainTarget) {
      console.log(`❌ Redirect chain: ${redirect.from} → ${redirect.to} → ${chainTarget.to}`);
      chainsFound = true;
    }
  });
  
  if (!chainsFound) {
    console.log('✅ No redirect chains found');
  }

  // Check for conflicting rules
  console.log('\n⚠️  **CHECKING FOR CONFLICTING RULES**');
  console.log('-------------------------------------');
  
  let conflictsFound = false;
  
  // Check if any 301 redirects conflict with 200 prerender rules
  redirects.forEach(redirect => {
    const conflictingPrerender = prerenderRules.find(pr => pr.from === redirect.to);
    if (conflictingPrerender) {
      console.log(`⚠️  Potential conflict:`);
      console.log(`     301: ${redirect.from} → ${redirect.to}`);
      console.log(`     200: ${conflictingPrerender.from} → ${conflictingPrerender.to}`);
      conflictsFound = true;
    }
  });

  if (!conflictsFound) {
    console.log('✅ No obvious conflicts found');
  }

  // Summary and recommendations
  console.log('\n🎯 **SUMMARY & RECOMMENDATIONS**');
  console.log('================================');
  
  if (duplicates.length === 0 && !chainsFound && !conflictsFound) {
    console.log('✅ **REDIRECTS CONFIGURATION LOOKS GOOD**');
    console.log('');
    console.log('Your redirects are properly configured for SEO:');
    console.log('  ✅ No duplicate rules');
    console.log('  ✅ No redirect chains');
    console.log('  ✅ No obvious conflicts');
    console.log('  ✅ Prerender rules in place');
    console.log('');
    console.log('If Google still sees "one domain", the issue is likely:');
    console.log('  1. 🕷️  Google\'s SPA detection algorithms');
    console.log('  2. ⏰ Google hasn\'t re-crawled since fixes');
    console.log('  3. 🌐 CDN/caching serving old content');
  } else {
    console.log('⚠️  **ISSUES FOUND THAT COULD AFFECT INDEXING**');
    console.log('');
    if (duplicates.length > 0) {
      console.log('🔧 Fix duplicate redirects to avoid confusion');
    }
    if (chainsFound) {
      console.log('🔧 Eliminate redirect chains for better performance');
    }
    if (conflictsFound) {
      console.log('🔧 Resolve conflicting rules');
    }
  }

  console.log('\n🚀 **NEXT STEPS FOR INDEXING**');
  console.log('==============================');
  console.log('1. Deploy the fixed _redirects file');
  console.log('2. Test URLs directly in browser');
  console.log('3. Submit individual URLs to Google Search Console');
  console.log('4. Use URL Inspection Tool to check Google\'s view');
  console.log('5. Monitor indexing improvements over 24-48 hours');

  return {
    duplicates: duplicates.length,
    chains: chainsFound,
    conflicts: conflictsFound,
    totalRedirects: redirects.length,
    prerenderRules: prerenderRules.length
  };
}

// Run analysis
analyzeRedirects();
