#!/usr/bin/env node

/**
 * URL Health Check Script for Styly.fr
 * Automated nightly check to ensure all URLs return 200
 * Generates error reports and alerts for broken links
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.styly.fr';
const MAX_CONCURRENT_REQUESTS = 10;
const TIMEOUT = 10000; // 10 seconds
const OUTPUT_DIR = path.join(__dirname, '../');

// URLs to check (based on our sitemap)
const urlsToCheck = [
  // Main pages
  '',
  'en',
  'upload',
  'pricing',
  'get-started',
  'styly-pro',
  'services-api',
  'blog',
  'en/blog',
  'conditions',
  'confidentialite',
  'privacy',
  'terms',
  'en/terms',
  'en/privacy',
  'video',
  'collaborateurs',
  'en/collaborateurs',
  'en/styly-pro',
  'en/services-api',
  'en/upload',
  'en/pricing',
  'en/get-started',
  
  // Sample blog posts (add more as needed)
  'blog/chatgpt-peut-il-concevoir-votre-maison-ia-design-interieur',
  'en/blog/can-chatgpt-design-your-home-ai-interior-design',
  'blog/styly-viva-technology-avenir-design-ia',
  'en/blog/styly-viva-technology-future-ai-design',
  'blog/concevoir-mise-en-scene-interieure-ia-aws-styly',
  'en/blog/designing-ai-interior-staging-aws-styly'
];

// Test both with and without trailing slashes
const allUrls = [];
urlsToCheck.forEach(path => {
  const baseUrl = path === '' ? DOMAIN : `${DOMAIN}/${path}`;
  allUrls.push(baseUrl);
  if (path !== '') {
    allUrls.push(`${baseUrl}/`); // Test trailing slash version
  }
});

class URLChecker {
  constructor() {
    this.results = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  async checkURL(url) {
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      const request = https.get(url, {
        timeout: TIMEOUT,
        headers: {
          'User-Agent': 'Styly-Health-Check/1.0'
        }
      }, (response) => {
        const responseTime = Date.now() - startTime;
        
        let redirectChain = [];
        let currentResponse = response;
        
        // Follow redirects manually to track chain
        const handleResponse = (res) => {
          redirectChain.push({
            statusCode: res.statusCode,
            location: res.headers.location || null
          });
          
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            // This is a redirect
            const redirectUrl = new URL(res.headers.location, url).href;
            
            if (redirectChain.length > 5) {
              resolve({
                url,
                status: 'error',
                error: 'Too many redirects',
                responseTime,
                redirectChain
              });
              return;
            }
            
            // Follow redirect
            https.get(redirectUrl, { timeout: TIMEOUT }, handleResponse).on('error', (error) => {
              resolve({
                url,
                status: 'error',
                error: error.message,
                responseTime,
                redirectChain
              });
            });
          } else {
            // Final response
            resolve({
              url,
              status: res.statusCode >= 200 && res.statusCode < 300 ? 'success' : 'error',
              statusCode: res.statusCode,
              responseTime,
              redirectChain,
              finalUrl: redirectChain.length > 1 ? redirectChain[redirectChain.length - 1].location : url
            });
          }
        };
        
        handleResponse(response);
      });

      request.on('timeout', () => {
        request.destroy();
        resolve({
          url,
          status: 'error',
          error: 'Timeout',
          responseTime: TIMEOUT
        });
      });

      request.on('error', (error) => {
        resolve({
          url,
          status: 'error',
          error: error.message,
          responseTime: Date.now() - startTime
        });
      });
    });
  }

  async checkAllURLs() {
    console.log(`🔍 Starting health check for ${allUrls.length} URLs...`);
    
    // Process URLs in batches to avoid overwhelming the server
    const batches = [];
    for (let i = 0; i < allUrls.length; i += MAX_CONCURRENT_REQUESTS) {
      batches.push(allUrls.slice(i, i + MAX_CONCURRENT_REQUESTS));
    }

    for (const batch of batches) {
      const promises = batch.map(url => this.checkURL(url));
      const batchResults = await Promise.all(promises);
      this.results.push(...batchResults);
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.analyzeResults();
    this.generateReport();
  }

  analyzeResults() {
    // Separate successful redirects from actual failures
    const successful = this.results.filter(r => r.status === 'success');
    const redirects = this.results.filter(r => r.redirectChain && r.redirectChain.length > 1);

    // Trailing slash redirects are EXPECTED and should be considered successful
    const trailingSlashRedirects = redirects.filter(r => {
      const original = r.url;
      const final = r.finalUrl;
      return original.endsWith('/') && final === original.slice(0, -1);
    });

    // Only consider actual failures (not expected trailing slash redirects)
    const actualFailures = this.results.filter(r => {
      if (r.status === 'success') return false;

      // If it's a trailing slash redirect that works, don't count as failure
      if (r.url.endsWith('/') && r.finalUrl && r.finalUrl === r.url.slice(0, -1)) {
        return false;
      }

      return true;
    });

    const totalSuccessful = successful.length + trailingSlashRedirects.length;

    console.log(`\n📊 Health Check Results:`);
    console.log(`✅ Successful: ${successful.length}`);
    console.log(`🔄 Trailing Slash Redirects (Working): ${trailingSlashRedirects.length}`);
    console.log(`✅ Total Working URLs: ${totalSuccessful}`);
    console.log(`❌ Actual Failures: ${actualFailures.length}`);

    if (actualFailures.length > 0) {
      console.log(`\n❌ Failed URLs:`);
      actualFailures.forEach(result => {
        console.log(`  ${result.url} - ${result.error || result.statusCode}`);
        this.errors.push({
          url: result.url,
          error: result.error || `HTTP ${result.statusCode}`,
          timestamp: new Date().toISOString()
        });
      });
    }

    if (trailingSlashRedirects.length > 0) {
      console.log(`\n✅ Working Trailing Slash Redirects:`);
      trailingSlashRedirects.forEach(result => {
        console.log(`  ${result.url} → ${result.finalUrl} (301)`);
      });
    }
  }

  generateReport() {
    const successful = this.results.filter(r => r.status === 'success').length;
    const trailingSlashRedirects = this.results.filter(r => {
      return r.url.endsWith('/') && r.finalUrl && r.finalUrl === r.url.slice(0, -1);
    }).length;

    const report = {
      timestamp: new Date().toISOString(),
      totalUrls: allUrls.length,
      successful: successful,
      trailingSlashRedirects: trailingSlashRedirects,
      totalWorking: successful + trailingSlashRedirects,
      actualFailures: this.errors.length,
      errors: this.errors,
      executionTime: Date.now() - this.startTime,
      results: this.results
    };

    // Save detailed report
    const reportPath = path.join(OUTPUT_DIR, 'url-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Save CSV for easy analysis
    if (this.errors.length > 0) {
      const csvHeader = 'URL,Error,Timestamp\n';
      const csvContent = this.errors.map(error => 
        `"${error.url}","${error.error}","${error.timestamp}"`
      ).join('\n');
      
      const csvPath = path.join(OUTPUT_DIR, 'url-errors.csv');
      fs.writeFileSync(csvPath, csvHeader + csvContent);
      
      console.log(`\n📄 Error report saved to: ${csvPath}`);
    }

    console.log(`📄 Full report saved to: ${reportPath}`);
    
    // Exit with error code if there are failures
    if (this.errors.length > 0) {
      console.log(`\n🚨 Health check failed with ${this.errors.length} errors!`);
      process.exit(1);
    } else {
      console.log(`\n✅ All URLs are healthy!`);
      process.exit(0);
    }
  }
}

// Run the health check
const checker = new URLChecker();
checker.checkAllURLs().catch(error => {
  console.error('Health check failed:', error);
  process.exit(1);
});
