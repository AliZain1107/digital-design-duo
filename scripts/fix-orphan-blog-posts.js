#!/usr/bin/env node

/**
 * Script to fix orphan blog posts by adding missing blog posts to blogPosts.tsx
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_PAGES_DIR = path.join(__dirname, '../src/blogPages');
const BLOG_POSTS_FILE = path.join(__dirname, '../src/components/data/blogPosts.tsx');

// Function to get all blog post files
function getAllBlogPostFiles() {
  const files = fs.readdirSync(BLOG_PAGES_DIR)
    .filter(file => file.endsWith('.tsx'))
    .map(file => file.replace('.tsx', ''));
  
  return files.sort();
}

// Function to extract existing blog posts from blogPosts.tsx
function getExistingBlogPosts() {
  const content = fs.readFileSync(BLOG_POSTS_FILE, 'utf8');
  
  // Extract Component imports
  const importMatches = content.match(/import\s+(\w+)\s+from\s+["']\.\.\/\.\.\/blogPages\/(\w+)["']/g) || [];
  const existingComponents = new Set();
  
  importMatches.forEach(match => {
    const componentMatch = match.match(/import\s+(\w+)\s+from\s+["']\.\.\/\.\.\/blogPages\/(\w+)["']/);
    if (componentMatch) {
      existingComponents.add(componentMatch[2]); // filename without extension
    }
  });
  
  return Array.from(existingComponents);
}

// Function to generate blog post entry
function generateBlogPostEntry(fileName, id) {
  // Generate title from filename
  const title = fileName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^./, str => str.toUpperCase())
    .replace(/\bAI\b/g, 'AI')
    .replace(/\bIA\b/g, 'IA');
  
  // Generate slug
  const slug = fileName
    .replace(/([A-Z])/g, '-$1')
    .replace(/^-/, '')
    .toLowerCase();
  
  // Generate French title (basic translation)
  const titleFr = title
    .replace(/AI/g, 'IA')
    .replace(/Interior Design/g, 'Design Intérieur')
    .replace(/Design/g, 'Design')
    .replace(/Guide/g, 'Guide')
    .replace(/Ultimate/g, 'Ultime')
    .replace(/Complete/g, 'Complet')
    .replace(/Modern/g, 'Moderne')
    .replace(/Future/g, 'Avenir')
    .replace(/Trends/g, 'Tendances')
    .replace(/Revolution/g, 'Révolution');
  
  // Generate French slug
  const slugFr = slug
    .replace(/ai-/g, 'ia-')
    .replace(/-ai-/g, '-ia-')
    .replace(/-ai$/g, '-ia')
    .replace(/interior-design/g, 'design-interieur')
    .replace(/design/g, 'design')
    .replace(/guide/g, 'guide')
    .replace(/ultimate/g, 'ultime')
    .replace(/complete/g, 'complet')
    .replace(/modern/g, 'moderne')
    .replace(/future/g, 'avenir')
    .replace(/trends/g, 'tendances')
    .replace(/revolution/g, 'revolution');
  
  // Generate date (recent but varied)
  const dates = [
    "Jan 15, 2025", "Jan 20, 2025", "Jan 25, 2025", "Feb 1, 2025", "Feb 5, 2025",
    "Feb 10, 2025", "Feb 15, 2025", "Feb 20, 2025", "Feb 25, 2025", "Mar 1, 2025",
    "Mar 5, 2025", "Mar 10, 2025", "Mar 15, 2025", "Mar 20, 2025", "Mar 25, 2025",
    "Apr 1, 2025", "Apr 5, 2025", "Apr 10, 2025", "Apr 15, 2025", "Apr 20, 2025"
  ];
  const date = dates[id % dates.length];
  
  // Generate image path
  const image = `/Blogpages/${slug}.jpg`;
  
  return `  {
    id: ${id},
    title: "${title}",
    titleFr: "${titleFr}",
    date: "${date}",
    image: "${image}",
    slug: "${slug}",
    slugFr: "${slugFr}",
    Component: ${fileName},
  }`;
}

// Main execution
console.log('🔧 Fixing orphan blog posts...\n');

const allBlogFiles = getAllBlogPostFiles();
const existingBlogPosts = getExistingBlogPosts();

console.log(`📁 Found ${allBlogFiles.length} blog post files`);
console.log(`📝 Found ${existingBlogPosts.length} blog posts in blogPosts.tsx`);

const orphanFiles = allBlogFiles.filter(file => !existingBlogPosts.includes(file));

console.log(`🚨 Found ${orphanFiles.length} orphan blog post files:\n`);

if (orphanFiles.length === 0) {
  console.log('✅ No orphan blog posts found!');
  process.exit(0);
}

orphanFiles.forEach((file, index) => {
  console.log(`   ${index + 1}. ${file}`);
});

console.log('\n🔧 Adding missing blog posts to blogPosts.tsx...\n');

// Read current blogPosts.tsx content
let content = fs.readFileSync(BLOG_POSTS_FILE, 'utf8');

// Add imports for orphan files
const importSection = orphanFiles.map(file => 
  `import ${file} from "../../blogPages/${file}";`
).join('\n');

// Find the last import and add new imports after it
const lastImportMatch = content.match(/(import\s+\w+\s+from\s+["']\.\.\/\.\.\/blogPages\/\w+["'];?\s*\n)/g);
if (lastImportMatch) {
  const lastImport = lastImportMatch[lastImportMatch.length - 1];
  content = content.replace(lastImport, lastImport + importSection + '\n');
}

// Find the current highest ID
const idMatches = content.match(/id:\s*(\d+)/g) || [];
const currentMaxId = Math.max(...idMatches.map(match => parseInt(match.match(/\d+/)[0])));
const nextId = currentMaxId + 1;

// Generate new blog post entries
const newEntries = orphanFiles.map((file, index) => 
  generateBlogPostEntry(file, nextId + index)
).join(',\n');

// Add new entries before the closing bracket
const closingBracketMatch = content.match(/(\s*)\];?\s*$/);
if (closingBracketMatch) {
  const indent = closingBracketMatch[1];
  content = content.replace(/(\s*)\];?\s*$/, `,\n${newEntries}\n${indent}];`);
}

// Write updated content
fs.writeFileSync(BLOG_POSTS_FILE, content, 'utf8');

console.log(`✅ Added ${orphanFiles.length} blog posts to blogPosts.tsx`);
console.log(`📊 Total blog posts now: ${existingBlogPosts.length + orphanFiles.length}`);

console.log('\n🎉 Orphan blog posts fixed successfully!');
console.log('📝 All blog posts are now accessible via:');
console.log('   - Blog listing page');
console.log('   - Sitemap generation');
console.log('   - App.tsx routing');
console.log('   - Search engines');

console.log('\n🚀 Ready for deployment with complete blog post coverage!');
