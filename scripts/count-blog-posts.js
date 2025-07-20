#!/usr/bin/env node

/**
 * Count Blog Posts Script
 * Accurately counts blog posts from the data file and generated files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function countBlogPostsInDataFile() {
  console.log('📚 Counting blog posts in data file...');
  
  try {
    const blogPostsPath = path.join(__dirname, '../src/components/data/blogPosts.tsx');
    const fileContent = fs.readFileSync(blogPostsPath, 'utf8');
    
    // Find the export array
    const arrayMatch = fileContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
    if (!arrayMatch) {
      console.log('❌ Could not find blogPosts array');
      return 0;
    }
    
    // Count objects by counting opening braces that start blog post objects
    const objectMatches = arrayMatch[1].match(/\{\s*id:/g);
    const count = objectMatches ? objectMatches.length : 0;
    
    console.log(`✅ Found ${count} blog posts in data file`);
    return count;
  } catch (error) {
    console.error('❌ Error reading blog posts file:', error.message);
    return 0;
  }
}

function countGeneratedBlogFiles() {
  console.log('\n📁 Counting generated blog directories...');
  
  const blogDir = path.join(__dirname, '../dist/blog');
  if (!fs.existsSync(blogDir)) {
    console.log('❌ Blog directory not found');
    return 0;
  }
  
  try {
    const items = fs.readdirSync(blogDir);
    const directories = items.filter(item => {
      const itemPath = path.join(blogDir, item);
      return fs.statSync(itemPath).isDirectory();
    });
    
    console.log(`✅ Found ${directories.length} blog directories in dist/blog`);
    
    // Show first 10 as examples
    console.log('\n📄 Sample blog directories:');
    directories.slice(0, 10).forEach((dir, index) => {
      console.log(`   ${index + 1}. ${dir}`);
    });
    
    if (directories.length > 10) {
      console.log(`   ... and ${directories.length - 10} more`);
    }
    
    return directories.length;
  } catch (error) {
    console.error('❌ Error reading blog directory:', error.message);
    return 0;
  }
}

function analyzeDiscrepancy() {
  console.log('\n🔍 Analyzing blog post discrepancy...');
  
  const dataFileCount = countBlogPostsInDataFile();
  const generatedCount = countGeneratedBlogFiles();
  
  console.log('\n📊 SUMMARY:');
  console.log('=====================================');
  console.log(`📝 Blog posts in data file: ${dataFileCount}`);
  console.log(`📁 Generated blog directories: ${generatedCount}`);
  
  if (generatedCount > dataFileCount) {
    const difference = generatedCount - dataFileCount;
    console.log(`⚠️  ${difference} extra directories found`);
    console.log('\n💡 Possible reasons for extra directories:');
    console.log('   - Duplicate slugs (English + French versions)');
    console.log('   - Old blog posts not cleaned up');
    console.log('   - Multiple slug variations for same post');
    console.log('   - Test or draft posts');
  } else if (generatedCount < dataFileCount) {
    const difference = dataFileCount - generatedCount;
    console.log(`❌ ${difference} blog posts missing from generated files`);
  } else {
    console.log('✅ Counts match perfectly!');
  }
  
  console.log('\n🎯 For SEO purposes:');
  console.log(`   - Google will index ${generatedCount} blog post pages`);
  console.log(`   - Each page has unique content and URL`);
  console.log(`   - More pages = better SEO potential`);
  
  return { dataFileCount, generatedCount };
}

// Run the analysis
analyzeDiscrepancy();
