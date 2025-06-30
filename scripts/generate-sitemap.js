#!/usr/bin/env node

/**
 * Sitemap Generator for Styly.fr
 * Generates accurate sitemaps with only existing URLs
 * Ensures no trailing slashes and proper hreflang tags
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.styly.fr';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Blog posts data - this should match your actual blog posts
const blogPosts = [
  {
    slug: "comment-agents-immobiliers-augmentent-ventes-staging-virtuel-ia-2025",
    slugEn: "how-real-estate-agents-are-boosting-sales-with-ai-powered-virtual-staging-the-2025-market-reality",
    lastmod: "2025-06-18"
  },
  {
    slug: "guide-ultime-generation-z-interieurs-dignes-instagram",
    slugEn: "gen-z-s-ultimate-guide-to-instagram-worthy-interiors",
    lastmod: "2025-06-18"
  },
  {
    slug: "comment-construire-maison-outils-ia-design-porche",
    slugEn: "how-to-build-your-own-house-with-ai-tools-including-porch-design",
    lastmod: "2025-06-18"
  },
  {
    slug: "guide-ultime-outils-design-interieur-ia-2025",
    slugEn: "the-ultimate-guide-to-ai-interior-design-tools-in-2025",
    lastmod: "2025-06-18"
  },
  {
    slug: "chatgpt-peut-il-concevoir-votre-maison-ia-design-interieur",
    slugEn: "can-chatgpt-design-your-home-ai-interior-design",
    lastmod: "2025-06-17"
  },
  {
    slug: "styly-viva-technology-avenir-design-ia",
    slugEn: "styly-viva-technology-future-ai-design",
    lastmod: "2025-06-16"
  },
  {
    slug: "concevoir-mise-en-scene-interieure-ia-aws-styly",
    slugEn: "designing-ai-interior-staging-aws-styly",
    lastmod: "2025-06-15"
  },
  {
    slug: "comment-ia-generative-revolutionne-design-interieur",
    slugEn: "how-generative-ai-revolutionizing-interior-design",
    lastmod: "2024-06-23"
  },
  {
    slug: "assistant-ia-design-interieur-prompts-chatgpt",
    slugEn: "ai-assistant-interior-design-chatgpt-prompts",
    lastmod: "2024-05-12"
  }
];

// Main pages that exist (excluding root and 'en' as they're handled separately)
const mainPages = [
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

function generateMainSitemap() {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // Add root pages first
  urls.push({
    loc: `${DOMAIN}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0',
    hreflang: [
      { lang: 'fr', href: `${DOMAIN}/` },
      { lang: 'en', href: `${DOMAIN}/en` },
      { lang: 'x-default', href: `${DOMAIN}/` }
    ]
  });

  urls.push({
    loc: `${DOMAIN}/en`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0',
    hreflang: [
      { lang: 'fr', href: `${DOMAIN}/` },
      { lang: 'en', href: `${DOMAIN}/en` },
      { lang: 'x-default', href: `${DOMAIN}/` }
    ]
  });

  // Add other pages
  mainPages.forEach(page => {
    const basePath = page.path;
    const frenchUrl = `${DOMAIN}/${basePath}`;
    const englishUrl = `${DOMAIN}/en/${basePath}`;

    // French version
    urls.push({
      loc: frenchUrl,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
      hreflang: [
        { lang: 'fr', href: frenchUrl },
        { lang: 'en', href: englishUrl },
        { lang: 'x-default', href: frenchUrl }
      ]
    });

    // English version
    urls.push({
      loc: englishUrl,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
      hreflang: [
        { lang: 'fr', href: frenchUrl },
        { lang: 'en', href: englishUrl },
        { lang: 'x-default', href: frenchUrl }
      ]
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    // French blog post
    urls.push({
      loc: `${DOMAIN}/blog/${post.slug}`,
      lastmod: post.lastmod,
      changefreq: 'monthly',
      priority: '0.8',
      hreflang: [
        { lang: 'fr', href: `${DOMAIN}/blog/${post.slug}` },
        { lang: 'en', href: `${DOMAIN}/en/blog/${post.slugEn}` },
        { lang: 'x-default', href: `${DOMAIN}/blog/${post.slug}` }
      ]
    });

    // English blog post
    urls.push({
      loc: `${DOMAIN}/en/blog/${post.slugEn}`,
      lastmod: post.lastmod,
      changefreq: 'monthly',
      priority: '0.8',
      hreflang: [
        { lang: 'fr', href: `${DOMAIN}/blog/${post.slug}` },
        { lang: 'en', href: `${DOMAIN}/en/blog/${post.slugEn}` },
        { lang: 'x-default', href: `${DOMAIN}/blog/${post.slug}` }
      ]
    });
  });

  return generateSitemapXML(urls);
}

function generateFrenchSitemap() {
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  // Add French main pages only
  mainPages.forEach(page => {
    urls.push({
      loc: `${DOMAIN}/${page.path}`,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
      hreflang: [
        { lang: 'fr', href: `${DOMAIN}/${page.path}` },
        { lang: 'en', href: `${DOMAIN}/en/${page.path}` },
        { lang: 'x-default', href: `${DOMAIN}/${page.path}` }
      ]
    });
  });

  // Add French blog posts only
  blogPosts.forEach(post => {
    urls.push({
      loc: `${DOMAIN}/blog/${post.slug}`,
      lastmod: post.lastmod,
      changefreq: 'monthly',
      priority: '0.8',
      hreflang: [
        { lang: 'fr', href: `${DOMAIN}/blog/${post.slug}` },
        { lang: 'en', href: `${DOMAIN}/en/blog/${post.slugEn}` },
        { lang: 'x-default', href: `${DOMAIN}/blog/${post.slug}` }
      ]
    });
  });

  return generateSitemapXML(urls);
}

// Generate sitemaps
console.log('Generating sitemaps...');

const mainSitemap = generateMainSitemap();
const frenchSitemap = generateFrenchSitemap();

// Write files
fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), mainSitemap);
fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-fr.xml'), frenchSitemap);

console.log('✅ Sitemaps generated successfully!');
console.log(`📁 Main sitemap: ${path.join(OUTPUT_DIR, 'sitemap.xml')}`);
console.log(`📁 French sitemap: ${path.join(OUTPUT_DIR, 'sitemap-fr.xml')}`);
