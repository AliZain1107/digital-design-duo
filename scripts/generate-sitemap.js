#!/usr/bin/env node

/**
 * French-Focused Sitemap Generator for Styly.fr
 * Generates French-only sitemap aligned with French-first strategy
 * Excludes English URLs as they are not actively used and disallowed in robots.txt
 * Reads from actual blog posts data and ensures proper hreflang implementation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.styly.fr';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Function to extract canonical URLs from CSV redirect file
function getCanonicalUrlsFromCSV() {
  try {
    const csvPath = path.join(OUTPUT_DIR, 'canonical-redirects.csv');
    if (!fs.existsSync(csvPath)) {
      console.log('📚 Canonical redirects CSV file not found, using fallback blog posts data');
      return getFallbackBlogPosts();
    }

    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvContent.split('\n').slice(1); // Skip header

    const canonicalUrls = [];
    const blogPosts = [];

    lines.forEach(line => {
      if (!line.trim()) return;

      const columns = line.split(',');
      const sourceUrl = columns[1];
      const redirectUrl = columns[7];

      // Skip English URLs (contain /en/)
      if (sourceUrl && sourceUrl.includes('/en/')) return;

      // Skip problematic redirects to styly.io
      if (redirectUrl && redirectUrl.includes('styly.io')) return;

      // Process French URLs
      if (sourceUrl && sourceUrl.includes('www.styly.fr') && !sourceUrl.includes('/en/')) {
        // Extract clean URL without trailing slash for processing
        const cleanUrl = sourceUrl.replace(/\/$/, '');

        // Extract blog posts
        if (cleanUrl.includes('/blog/') && !cleanUrl.endsWith('/blog')) {
          const slug = cleanUrl.split('/blog/')[1];
          if (slug) {
            blogPosts.push({
              slug: slug,
              slugFr: slug,
              lastmod: new Date().toISOString().split('T')[0]
            });
          }
        }

        canonicalUrls.push(cleanUrl);
      }
    });

    console.log(`📚 Extracted ${blogPosts.length} blog posts from canonical redirects CSV`);
    console.log(`📊 Total canonical URLs found: ${canonicalUrls.length}`);

    return blogPosts.length > 0 ? blogPosts : getFallbackBlogPosts();
  } catch (error) {
    console.log('📚 Error reading canonical redirects CSV, using fallback blog posts data:', error.message);
    return getFallbackBlogPosts();
  }
}

// Function to get blog posts - now uses CSV data first, fallback second
function getBlogPostsFromDataFile() {
  return getCanonicalUrlsFromCSV();
}

// Convert date formats to ISO
function convertDateToISO(dateStr) {
  try {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

// Enhanced blog posts data with all the missing entries
function getFallbackBlogPosts() {
  return [
    {
      slug: "science-couleur-design-comment-ia-aide-choisir-palette-parfaite",
      slugFr: "science-couleur-design-comment-ia-aide-choisir-palette-parfaite",
      slugEn: "the-science-of-color-in-design-how-ai-helps-you-choose-the-perfect-palette",
      lastmod: "2025-06-28"
    },
    {
      slug: "comment-generation-images-ia-peut-inspirer-design-interieur-2024",
      slugFr: "comment-generation-images-ia-peut-inspirer-design-interieur-2024",
      slugEn: "how-ai-powered-image-generation-can-inspire-your-interior-design-in-2024",
      lastmod: "2025-06-26"
    },
    {
      slug: "10-conseils-experts-economiser-decoration-interieure-2025",
      slugFr: "10-conseils-experts-economiser-decoration-interieure-2025",
      slugEn: "10-expert-tips-to-save-big-on-home-interiors-in-2025",
      lastmod: "2025-06-24"
    },
    {
      slug: "chatgpt-peut-il-concevoir-votre-maison-ia-design-interieur",
      slugFr: "chatgpt-peut-il-concevoir-votre-maison-ia-design-interieur",
      slugEn: "can-chatgpt-design-your-home-ai-interior-design",
      lastmod: "2025-06-17"
    },
    {
      slug: "styly-viva-technology-avenir-design-ia",
      slugFr: "styly-viva-technology-avenir-design-ia",
      slugEn: "styly-viva-technology-future-ai-design",
      lastmod: "2025-06-16"
    },
    {
      slug: "concevoir-mise-en-scene-interieure-ia-aws-styly",
      slugFr: "concevoir-mise-en-scene-interieure-ia-aws-styly",
      slugEn: "designing-ai-interior-staging-aws-styly",
      lastmod: "2025-06-15"
    },
    {
      slug: "tendances-design-interieur-2025",
      slugFr: "tendances-design-interieur-2025",
      slugEn: "2025-interior-design-trends",
      lastmod: "2025-06-10"
    },
    {
      slug: "logiciel-gratuit-design-interieur-ia",
      slugFr: "logiciel-gratuit-design-interieur-ia",
      slugEn: "free-ai-interior-design-software",
      lastmod: "2025-06-01"
    },
    {
      slug: "impact-ia-role-designer-interieur",
      slugFr: "impact-ia-role-designer-interieur",
      slugEn: "impact-ai-role-interior-designer",
      lastmod: "2025-05-15"
    },
    {
      slug: "assistant-ia-design-interieur-prompts-chatgpt",
      slugFr: "assistant-ia-design-interieur-prompts-chatgpt",
      slugEn: "ai-assistant-interior-design-chatgpt-prompts",
      lastmod: "2025-05-10"
    },
    {
      slug: "intersection-ia-realite-virtuelle-design",
      slugFr: "intersection-ia-realite-virtuelle-design",
      slugEn: "intersection-ai-virtual-reality-design",
      lastmod: "2025-05-10"
    },
    {
      slug: "design-durabilite-ia-espaces-eco-responsables",
      slugFr: "design-durabilite-ia-espaces-eco-responsables",
      slugEn: "sustainable-design-ai-eco-friendly-spaces",
      lastmod: "2025-05-08"
    },
    {
      slug: "role-donnees-design-alimente-ia",
      slugFr: "role-donnees-design-alimente-ia",
      slugEn: "role-data-ai-powered-design",
      lastmod: "2025-05-05"
    },
    {
      slug: "design-famille-moderne-ia-maisons-fonctionnelles",
      slugFr: "design-famille-moderne-ia-maisons-fonctionnelles",
      slugEn: "modern-family-design-ai-functional-homes",
      lastmod: "2025-05-03"
    },
    {
      slug: "6-prompts-viraux-design-chambre-ia-styly",
      slugFr: "6-prompts-viraux-design-chambre-ia-styly",
      slugEn: "6-viral-ai-room-design-prompts-create-dream-bedroom-styly",
      lastmod: "2025-05-01"
    },
    {
      slug: "ia-design-accessible-espaces-inclusifs",
      slugFr: "ia-design-accessible-espaces-inclusifs",
      slugEn: "ai-accessible-design-inclusive-spaces",
      lastmod: "2025-04-28"
    },
    {
      slug: "comment-ia-generative-revolutionne-design-interieur",
      slugFr: "comment-ia-generative-revolutionne-design-interieur",
      slugEn: "how-generative-ai-revolutionizing-interior-design",
      lastmod: "2024-06-23"
    }
  ];
}

// Function to extract main pages from canonical redirects CSV file
function getMainPagesFromCSV() {
  try {
    const csvPath = path.join(OUTPUT_DIR, 'canonical-redirects.csv');
    if (!fs.existsSync(csvPath)) {
      return getDefaultMainPages();
    }

    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvContent.split('\n').slice(1); // Skip header

    const mainPages = [];

    lines.forEach(line => {
      if (!line.trim()) return;

      const columns = line.split(',');
      const sourceUrl = columns[1];

      // Skip English URLs and problematic redirects
      if (!sourceUrl || sourceUrl.includes('/en/') || sourceUrl.includes('styly.io')) return;

      // Process French main pages (not blog posts)
      if (sourceUrl.includes('www.styly.fr') && !sourceUrl.includes('/blog/')) {
        const cleanUrl = sourceUrl.replace(/\/$/, '');
        const path = cleanUrl.replace('https://www.styly.fr/', '');

        if (path && path !== 'www.styly.fr' && !path.includes('http')) {
          // Determine priority and changefreq based on page type
          let priority = '0.7';
          let changefreq = 'monthly';

          if (path === 'upload') priority = '0.9';
          else if (['pricing', 'get-started', 'styly-pro'].includes(path)) priority = '0.8';
          else if (path === 'blog') { priority = '0.8'; changefreq = 'weekly'; }
          else if (['conditions', 'confidentialite'].includes(path)) { priority = '0.5'; changefreq = 'yearly'; }
          else if (path === 'video') priority = '0.6';

          mainPages.push({ path, priority, changefreq });
        }
      }
    });

    console.log(`📊 Extracted ${mainPages.length} main pages from canonical redirects CSV`);
    return mainPages.length > 0 ? mainPages : getDefaultMainPages();
  } catch (error) {
    console.log('📊 Error extracting main pages from canonical redirects CSV, using defaults:', error.message);
    return getDefaultMainPages();
  }
}

// Default main pages fallback
function getDefaultMainPages() {
  return [
    { path: 'upload', priority: '0.9', changefreq: 'monthly' },
    { path: 'pricing', priority: '0.8', changefreq: 'monthly' },
    { path: 'get-started', priority: '0.8', changefreq: 'monthly' },
    { path: 'styly-pro', priority: '0.8', changefreq: 'monthly' },
    { path: 'services-api', priority: '0.7', changefreq: 'monthly' },
    { path: 'blog', priority: '0.8', changefreq: 'weekly' },
    { path: 'conditions', priority: '0.5', changefreq: 'yearly' },
    { path: 'confidentialite', priority: '0.5', changefreq: 'yearly' },
    { path: 'video', priority: '0.6', changefreq: 'monthly' },
    { path: 'collaborateurs', priority: '0.7', changefreq: 'monthly' }
  ];
}

function generateSitemapXML(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  const footer = `
</urlset>`;

  const urlEntries = urls.map(url => {
    let entry = `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <mobile:mobile/>`;

    if (url.hreflang) {
      url.hreflang.forEach(hreflang => {
        entry += `
    <xhtml:link rel="alternate" hreflang="${hreflang.lang}" href="${hreflang.href}"/>`;
      });
    }

    if (url.image) {
      entry += `
    <image:image>
      <image:loc>${url.image.loc}</image:loc>
      <image:title>${url.image.title}</image:title>
      <image:caption>${url.image.caption}</image:caption>
    </image:image>`;
    }

    entry += `
  </url>`;
    return entry;
  }).join('');

  return header + urlEntries + footer;
}

// Main sitemap generation function (French-focused with CSV canonical URLs)
function generateMainSitemap() {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // Get blog posts and main pages from CSV redirect file
  const blogPosts = getBlogPostsFromDataFile();
  const mainPages = getMainPagesFromCSV();

  // Add root page (French only)
  urls.push({
    loc: `${DOMAIN}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0',
    hreflang: [
      { lang: 'fr', href: `${DOMAIN}/` },
      { lang: 'x-default', href: `${DOMAIN}/` }
    ]
  });

  // Add French main pages only (from CSV canonical URLs)
  mainPages.forEach(page => {
    urls.push({
      loc: `${DOMAIN}/${page.path}`,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
      hreflang: [
        { lang: 'fr', href: `${DOMAIN}/${page.path}` },
        { lang: 'x-default', href: `${DOMAIN}/${page.path}` }
      ]
    });
  });

  // Add French blog posts only (from CSV canonical URLs)
  blogPosts.forEach(post => {
    urls.push({
      loc: `${DOMAIN}/blog/${post.slugFr || post.slug}`,
      lastmod: post.lastmod,
      changefreq: 'monthly',
      priority: '0.8',
      hreflang: [
        { lang: 'fr', href: `${DOMAIN}/blog/${post.slugFr || post.slug}` },
        { lang: 'x-default', href: `${DOMAIN}/blog/${post.slugFr || post.slug}` }
      ]
    });
  });

  return generateSitemapXML(urls);
}



// Generate French-focused sitemap
console.log('Generating French-focused sitemap...');

const sitemap = generateMainSitemap();

// Write sitemap file
fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap);

console.log('✅ French-focused sitemap generated successfully!');
console.log(`📁 Sitemap: ${path.join(OUTPUT_DIR, 'sitemap.xml')}`);
