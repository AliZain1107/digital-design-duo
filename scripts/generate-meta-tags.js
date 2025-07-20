#!/usr/bin/env node

/**
 * Meta Tags Generator for Better SEO
 * Generates proper meta tags for each route to improve Google indexing
 * This complements the prerendering solution
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.styly.fr';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Function to get blog posts from data file
function getBlogPostsData() {
  try {
    const blogPostsPath = path.join(__dirname, '../src/components/data/blogPosts.tsx');
    const fileContent = fs.readFileSync(blogPostsPath, 'utf8');
    
    // Extract blog post objects
    const blogPostsMatch = fileContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
    if (!blogPostsMatch) {
      console.log('⚠️  Could not parse blogPosts.tsx');
      return [];
    }

    const postsContent = blogPostsMatch[1];
    const postObjects = postsContent.split(/},\s*{/).map((post, index, array) => {
      if (index === 0) return post + '}';
      if (index === array.length - 1) return '{' + post;
      return '{' + post + '}';
    });

    const posts = [];
    for (let i = 0; i < postObjects.length; i++) {
      const postContent = postObjects[i];

      // Extract post data
      const idMatch = postContent.match(/id:\s*(\d+)/);
      const slugFrMatch = postContent.match(/slugFr:\s*"([^"]+)"/);
      const slugMatch = postContent.match(/slug:\s*"([^"]+)"/);
      const titleFrMatch = postContent.match(/titleFr:\s*"([^"]+)"/);
      const titleMatch = postContent.match(/title:\s*"([^"]+)"/);
      const excerptFrMatch = postContent.match(/excerptFr:\s*"([^"]+)"/);
      const excerptMatch = postContent.match(/excerpt:\s*"([^"]+)"/);
      const dateMatch = postContent.match(/date:\s*"([^"]+)"/);
      const imageMatch = postContent.match(/image:\s*"([^"]+)"/);

      if (idMatch && (slugFrMatch || slugMatch)) {
        const id = parseInt(idMatch[1]);
        const slug = slugFrMatch ? slugFrMatch[1] : slugMatch[1];
        const title = titleFrMatch ? titleFrMatch[1] : (titleMatch ? titleMatch[1] : 'STYLY Blog Post');
        const excerpt = excerptFrMatch ? excerptFrMatch[1] : (excerptMatch ? excerptMatch[1] : 'Découvrez nos conseils en design d\'intérieur avec l\'IA');
        const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
        const image = imageMatch ? imageMatch[1] : '/aiinterior.png';

        posts.push({
          id,
          slug,
          title,
          excerpt,
          date,
          image
        });
      }
    }

    console.log(`📚 Successfully parsed ${posts.length} blog posts`);
    return posts;
  } catch (error) {
    console.warn('⚠️  Could not extract blog posts:', error.message);
    return [];
  }
}

// Generate meta tags for a page
function generateMetaTags(page) {
  const { url, title, description, image, type = 'website', publishedTime, modifiedTime } = page;
  
  return `
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta name="keywords" content="design intérieur, IA, STYLY, décoration, architecture">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${DOMAIN}${image}">
    <meta property="og:site_name" content="STYLY">
    <meta property="og:locale" content="fr_FR">
    ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}">` : ''}
    ${modifiedTime ? `<meta property="article:modified_time" content="${modifiedTime}">` : ''}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${url}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
    <meta property="twitter:image" content="${DOMAIN}${image}">
    <meta property="twitter:site" content="@StylyDesign">
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="STYLY">
    <meta name="language" content="French">
    <link rel="canonical" href="${url}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "${type === 'article' ? 'BlogPosting' : 'WebPage'}",
      "headline": "${title}",
      "description": "${description}",
      "image": "${DOMAIN}${image}",
      "url": "${url}",
      "publisher": {
        "@type": "Organization",
        "name": "STYLY",
        "logo": {
          "@type": "ImageObject",
          "url": "${DOMAIN}/logo.svg"
        }
      }${publishedTime ? `,
      "datePublished": "${publishedTime}",
      "dateModified": "${modifiedTime || publishedTime}"` : ''}
    }
    </script>
  `.trim();
}

// Generate meta tags for all pages
function generateAllMetaTags() {
  console.log('🏷️  Generating meta tags for SEO optimization...');
  
  const blogPosts = getBlogPostsData();
  const metaData = {};
  
  // Homepage
  metaData['/'] = generateMetaTags({
    url: `${DOMAIN}/`,
    title: 'STYLY - Plateforme IA de Design Intérieur et Extérieur | Crédits Gratuits',
    description: 'Transformez vos espaces vides en intérieurs époustouflants avec STYLY. Design alimenté par l\'IA pour l\'immobilier, la rénovation et le retail. Aucune compétence technique requise.',
    image: '/aiinterior.png'
  });
  
  // Blog index
  metaData['/blog'] = generateMetaTags({
    url: `${DOMAIN}/blog`,
    title: 'Blog STYLY - Conseils Design Intérieur IA | Tendances et Astuces',
    description: 'Découvrez nos derniers articles sur le design d\'intérieur avec l\'IA, les tendances déco 2025, et nos conseils d\'experts pour transformer vos espaces.',
    image: '/ai-interior-design-technology.webp'
  });
  
  // Static pages
  const staticPages = [
    {
      path: '/upload',
      title: 'Télécharger Photo - STYLY IA Design Intérieur',
      description: 'Téléchargez votre photo d\'espace vide et laissez notre IA créer un design d\'intérieur personnalisé en quelques secondes.',
      image: '/ai-room-designer-before-after.webp'
    },
    {
      path: '/pricing',
      title: 'Tarifs STYLY - Plans Design Intérieur IA | Essai Gratuit',
      description: 'Découvrez nos plans tarifaires pour le design d\'intérieur IA. Commencez gratuitement et choisissez l\'offre qui correspond à vos besoins.',
      image: '/ai-room-planner-budget-optimization.webp'
    },
    {
      path: '/styly-pro',
      title: 'STYLY Pro - Solution Professionnelle Design IA | Collaborateurs',
      description: 'Solution professionnelle STYLY pour les architectes, designers et agences immobilières. Outils avancés et collaboration en équipe.',
      image: '/ai-project-management-design.webp'
    },
    {
      path: '/services-api',
      title: 'API STYLY - Intégration Design IA | Services Développeurs',
      description: 'Intégrez la puissance du design IA STYLY dans vos applications avec notre API. Documentation complète et support développeur.',
      image: '/ai-interior-design-technology.webp'
    }
  ];
  
  staticPages.forEach(page => {
    metaData[page.path] = generateMetaTags({
      url: `${DOMAIN}${page.path}`,
      title: page.title,
      description: page.description,
      image: page.image
    });
  });
  
  // Blog posts
  blogPosts.forEach(post => {
    metaData[`/blog/${post.slug}`] = generateMetaTags({
      url: `${DOMAIN}/blog/${post.slug}`,
      title: `${post.title} | Blog STYLY`,
      description: post.excerpt,
      image: post.image,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString()
    });
  });
  
  // Save meta data to JSON file for use in prerendering
  const metaFilePath = path.join(OUTPUT_DIR, 'meta-tags.json');
  fs.writeFileSync(metaFilePath, JSON.stringify(metaData, null, 2));
  
  console.log(`✅ Generated meta tags for ${Object.keys(metaData).length} pages`);
  console.log(`📁 Meta tags saved to: ${metaFilePath}`);
  
  return metaData;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateAllMetaTags();
}

export { generateAllMetaTags, generateMetaTags };
