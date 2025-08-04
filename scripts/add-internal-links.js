#!/usr/bin/env node

/**
 * Internal Links Strategy for SEO
 * Generates internal linking recommendations for better Google indexing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Internal linking strategy
const INTERNAL_LINKS = {
  // Core service pages that should be linked from blog posts
  corePages: [
    { url: '/upload', anchor: 'Essayez STYLY gratuitement', description: 'Upload your space photo' },
    { url: '/pricing', anchor: 'Voir nos tarifs', description: 'View pricing plans' },
    { url: '/styly-pro', anchor: 'STYLY Pro pour professionnels', description: 'Professional solution' },
    { url: '/services-api', anchor: 'API STYLY', description: 'Developer API' },
    { url: '/blog', anchor: 'Découvrez plus d\'articles', description: 'Blog index' }
  ],

  // Related blog post categories for internal linking
  blogCategories: {
    'design-trends': [
      'tendances-design-interieur-2025',
      'styles-design-interieur-futuriste-ia-styly',
      'idees-rampes-escalier-interieur-innovantes-ia-styly'
    ],
    'ai-technology': [
      'debloquer-puissance-ia-design-interieur-innovations',
      'personnalisation-ia-avenir-design-interieur',
      'comment-construire-votre-maison-outils-ia-conception-porche'
    ],
    'budget-tips': [
      'besoin-salle-bain-luxueuse-budget-voici-comment',
      'comment-agents-immobiliers-augmentent-ventes-staging-virtuel-ia-2025'
    ]
  }
};

function generateInternalLinkingStrategy() {
  console.log('🔗 INTERNAL LINKING STRATEGY FOR SEO');
  console.log('=====================================\n');

  console.log('📋 **PRIORITY 1: Add Links to Blog Posts**');
  console.log('-------------------------------------------');
  console.log('Each blog post should include 2-3 internal links:');
  console.log('');
  
  INTERNAL_LINKS.corePages.forEach((page, index) => {
    console.log(`${index + 1}. **${page.anchor}** → \`${page.url}\``);
    console.log(`   Context: ${page.description}`);
    console.log('');
  });

  console.log('📋 **PRIORITY 2: Cross-Link Related Blog Posts**');
  console.log('------------------------------------------------');
  console.log('Link related blog posts within the same category:');
  console.log('');

  Object.entries(INTERNAL_LINKS.blogCategories).forEach(([category, posts]) => {
    console.log(`**${category.toUpperCase()}:**`);
    posts.forEach(post => {
      console.log(`   - /blog/${post}`);
    });
    console.log('');
  });

  console.log('📋 **PRIORITY 3: Service Page Cross-Links**');
  console.log('-------------------------------------------');
  console.log('Add these links to service pages:');
  console.log('');
  console.log('**Pricing Page (`/pricing`):**');
  console.log('   - Link to `/upload` → "Commencez gratuitement"');
  console.log('   - Link to `/styly-pro` → "Solution professionnelle"');
  console.log('   - Link to `/blog` → "Conseils design"');
  console.log('');
  console.log('**Upload Page (`/upload`):**');
  console.log('   - Link to `/pricing` → "Voir tous les plans"');
  console.log('   - Link to `/blog` → "Inspiration design"');
  console.log('   - Link to `/video` → "Guide vidéo"');
  console.log('');
  console.log('**Styly Pro Page (`/styly-pro`):**');
  console.log('   - Link to `/services-api` → "Intégration API"');
  console.log('   - Link to `/pricing` → "Tarifs professionnels"');
  console.log('   - Link to `/blog` → "Cas d\'usage professionnels"');

  console.log('\n📋 **PRIORITY 4: Blog Index Improvements**');
  console.log('------------------------------------------');
  console.log('Add to blog index page (`/blog`):');
  console.log('   - "Articles populaires" section with top 5 posts');
  console.log('   - "Derniers articles" with newest posts');
  console.log('   - Category filters linking to related posts');
  console.log('   - "Commencer avec STYLY" CTA linking to `/upload`');

  console.log('\n🎯 **SEO BENEFITS:**');
  console.log('===================');
  console.log('✅ **Better crawlability** - Google discovers all pages');
  console.log('✅ **Page authority distribution** - Link juice flows between pages');
  console.log('✅ **Lower bounce rate** - Users stay longer on site');
  console.log('✅ **Better user experience** - Easy navigation between related content');
  console.log('✅ **Keyword reinforcement** - Anchor text helps with rankings');

  console.log('\n📊 **IMPLEMENTATION PRIORITY:**');
  console.log('===============================');
  console.log('1. **HIGH**: Add 2-3 internal links to each blog post');
  console.log('2. **MEDIUM**: Cross-link related blog posts');
  console.log('3. **MEDIUM**: Add service page cross-links');
  console.log('4. **LOW**: Enhance blog index with featured sections');

  console.log('\n🔧 **TECHNICAL IMPLEMENTATION:**');
  console.log('================================');
  console.log('Add these components to your blog posts:');
  console.log('');
  console.log('```jsx');
  console.log('// Internal Links Component');
  console.log('<section className="bg-gray-50 p-6 rounded-lg my-8">');
  console.log('  <h3 className="text-lg font-semibold mb-4">Ressources utiles</h3>');
  console.log('  <div className="space-y-2">');
  console.log('    <Link to="/upload" className="text-purple-600 hover:underline">');
  console.log('      → Essayez STYLY gratuitement');
  console.log('    </Link>');
  console.log('    <Link to="/pricing" className="text-purple-600 hover:underline">');
  console.log('      → Voir nos tarifs');
  console.log('    </Link>');
  console.log('  </div>');
  console.log('</section>');
  console.log('```');

  return INTERNAL_LINKS;
}

// Generate the strategy
generateInternalLinkingStrategy();
