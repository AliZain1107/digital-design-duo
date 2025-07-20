#!/usr/bin/env node

/**
 * Comprehensive Indexing Issues Diagnostic
 * Identifies why Google can't index individual pages/slugs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.styly.fr';

// Test URLs that should be indexed
const TEST_URLS = [
  { path: '/', description: 'Homepage' },
  { path: '/blog', description: 'Blog index' },
  { path: '/pricing', description: 'Pricing page' },
  { path: '/upload', description: 'Upload page' },
  { path: '/blog/tendances-design-interieur-2025', description: 'Sample blog post' },
  { path: '/styly-pro', description: 'Styly Pro page' },
  { path: '/services-api', description: 'Services API page' }
];

function checkCriticalIssues() {
  console.log('🚨 CRITICAL INDEXING ISSUES DIAGNOSTIC');
  console.log('=====================================\n');

  const issues = [];
  const warnings = [];

  // 1. Check if prerendered files exist
  console.log('📁 1. CHECKING PRERENDERED FILES...');
  const distDir = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    issues.push('❌ CRITICAL: dist/ directory missing - prerendered files not generated');
    console.log('❌ dist/ directory not found');
  } else {
    console.log('✅ dist/ directory exists');
    
    TEST_URLS.forEach(url => {
      let filePath;
      if (url.path === '/') {
        filePath = path.join(distDir, 'index.html');
      } else {
        filePath = path.join(distDir, url.path, 'index.html');
      }
      
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`✅ ${url.path} → ${sizeKB} KB`);
        
        if (sizeKB < 5) {
          warnings.push(`⚠️  ${url.path} file is very small (${sizeKB} KB) - may be empty shell`);
        }
      } else {
        issues.push(`❌ CRITICAL: ${url.path} prerendered file missing`);
        console.log(`❌ ${url.path} → File missing`);
      }
    });
  }

  // 2. Check _redirects configuration
  console.log('\n🔄 2. CHECKING _REDIRECTS CONFIGURATION...');
  const redirectsPath = path.join(__dirname, '../public/_redirects');
  
  if (!fs.existsSync(redirectsPath)) {
    issues.push('❌ CRITICAL: _redirects file missing');
  } else {
    const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
    
    // Check for prerendered rules
    if (redirectsContent.includes('/blog/* /blog/:splat/index.html 200')) {
      console.log('✅ Blog posts prerender rule exists');
    } else {
      issues.push('❌ CRITICAL: Blog posts prerender rule missing');
    }
    
    if (redirectsContent.includes('/pricing /pricing/index.html 200')) {
      console.log('✅ Core pages prerender rules exist');
    } else {
      issues.push('❌ CRITICAL: Core pages prerender rules missing');
    }
    
    if (redirectsContent.includes('/* /index.html 200')) {
      console.log('✅ SPA fallback rule exists');
    } else {
      issues.push('❌ CRITICAL: SPA fallback rule missing');
    }
  }

  // 3. Check AWS Amplify configuration
  console.log('\n☁️  3. CHECKING AWS AMPLIFY CONFIGURATION...');
  const amplifyPath = path.join(__dirname, '../amplify.yml');
  
  if (!fs.existsSync(amplifyPath)) {
    warnings.push('⚠️  amplify.yml missing - Amplify may use default build');
  } else {
    const amplifyContent = fs.readFileSync(amplifyPath, 'utf8');
    
    if (amplifyContent.includes('npm run build:seo')) {
      console.log('✅ Amplify configured to run build:seo');
    } else {
      issues.push('❌ CRITICAL: Amplify not configured to run build:seo');
    }
    
    if (amplifyContent.includes('baseDirectory: dist')) {
      console.log('✅ Amplify configured to serve from dist/');
    } else {
      issues.push('❌ CRITICAL: Amplify not configured to serve from dist/');
    }
  }

  // 4. Check sitemap
  console.log('\n🗺️  4. CHECKING SITEMAP...');
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    issues.push('❌ CRITICAL: sitemap.xml missing');
  } else {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    TEST_URLS.forEach(url => {
      const fullUrl = `${DOMAIN}${url.path}`;
      if (sitemapContent.includes(fullUrl)) {
        console.log(`✅ ${url.path} in sitemap`);
      } else {
        warnings.push(`⚠️  ${url.path} missing from sitemap`);
      }
    });
  }

  // 5. Check robots.txt
  console.log('\n🤖 5. CHECKING ROBOTS.TXT...');
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    warnings.push('⚠️  robots.txt missing');
  } else {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    
    if (robotsContent.includes('Allow: /')) {
      console.log('✅ General crawling allowed');
    } else {
      issues.push('❌ CRITICAL: General crawling not allowed');
    }
    
    if (robotsContent.includes('Disallow: /')) {
      const disallowLines = robotsContent.match(/Disallow: \/[^\s]*/g) || [];
      const criticalBlocks = disallowLines.filter(line => 
        !line.includes('/admin') && 
        !line.includes('/api') && 
        !line.includes('/node_modules') &&
        !line.includes('/en/')
      );
      
      if (criticalBlocks.length > 0) {
        warnings.push(`⚠️  Potentially blocking important content: ${criticalBlocks.join(', ')}`);
      }
    }
  }

  // 6. Summary and recommendations
  console.log('\n📊 DIAGNOSTIC SUMMARY');
  console.log('====================');
  
  if (issues.length === 0 && warnings.length === 0) {
    console.log('🎉 NO CRITICAL ISSUES FOUND!');
    console.log('Your configuration appears correct for Google indexing.');
    console.log('\n🔍 If Google still can\'t index your pages, the issue might be:');
    console.log('   1. AWS Amplify hasn\'t deployed the new configuration yet');
    console.log('   2. Google hasn\'t re-crawled your site since the fixes');
    console.log('   3. There\'s a server-side issue on AWS Amplify');
  } else {
    console.log(`❌ CRITICAL ISSUES: ${issues.length}`);
    console.log(`⚠️  WARNINGS: ${warnings.length}`);
    
    if (issues.length > 0) {
      console.log('\n🚨 CRITICAL ISSUES TO FIX:');
      issues.forEach(issue => console.log(`   ${issue}`));
    }
    
    if (warnings.length > 0) {
      console.log('\n⚠️  WARNINGS TO REVIEW:');
      warnings.forEach(warning => console.log(`   ${warning}`));
    }
  }

  console.log('\n🎯 NEXT STEPS:');
  console.log('==============');
  console.log('1. Fix any critical issues listed above');
  console.log('2. Run "npm run build:seo" to regenerate files');
  console.log('3. Deploy to AWS Amplify');
  console.log('4. Test URLs directly in browser');
  console.log('5. Submit sitemap to Google Search Console');
  console.log('6. Use Google\'s URL Inspection Tool to test indexing');

  return { issues, warnings };
}

// Run diagnostic
checkCriticalIssues();
