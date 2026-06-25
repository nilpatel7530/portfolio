/**
 * ============================================================
 *  CENTRALIZED JSON-LD SCHEMA GENERATOR
 *  Nil Patel Portfolio — nilpatel.snpsolutions.co.nz
 * ============================================================
 *
 *  HOW TO USE ON A NEW PAGE:
 *  1. Add a config script BEFORE this script:
 *       <script>
 *         window.PAGE_SCHEMA = {
 *           type: 'service',   // 'homepage' | 'service' | 'faq' | 'knowledgeHub'
 *           slug: 'ai-agents', // URL slug (no leading slash)
 *           title: 'AI Agent Development Services',
 *           description: '...',
 *           faqs: [{ q: '...', a: '...' }],
 *           offerDescription: '...'
 *         };
 *       </script>
 *  2. Link this script:  <script src="js/schema.js"></script>
 *
 *  The generator injects a single <script type="application/ld+json">
 *  into <head> with all relevant Schema.org types, correctly linked
 *  via @id cross-references per the Google Entity Graph spec.
 * ============================================================
 */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     SHARED CONSTANTS
  ────────────────────────────────────────────────────────── */
  var BASE = 'https://nilpatel.snpsolutions.co.nz';
  var AREA_SERVED = ['IN', 'NZ', 'AU'];

  /* ── Nil Patel — canonical Person entity ── */
  var PERSON = {
    '@type': 'Person',
    '@id': BASE + '/#person',
    'name': 'Nil Patel',
    'alternateName': ['Nil Patel Vadodara', 'Nil Patel AI', 'Nil Patel Software Engineer'],
    'givenName': 'Nil',
    'familyName': 'Patel',
    'gender': 'http://schema.org/Male',
    'jobTitle': 'AI-Augmented Engineer & AI Search Visibility Consultant',
    'image': BASE + '/headshot.jpg',
    'description': 'AI-Augmented Software Engineer & AI Search Visibility Consultant. Hugging Face Certified Agent Developer specializing in multi-agent workflows, scalable Laravel SaaS platforms, custom RAG architectures, and search visibility optimization (SEO, AEO, and GEO) serving clients globally across India, NZ, and Australia.',
    'url': BASE,
    'email': 'nilpatel7530@gmail.com',
    'knowsAbout': [
      'Artificial Intelligence', 'Generative Engine Optimization', 'GEO', 'LLM Optimization',
      'LLMO', 'AI SEO', 'Search Everywhere Optimization', 'Full-Stack Web Development',
      'Laravel MVC', 'Next.js', 'RAG Architecture', 'LangChain', 'LangGraph',
      'Google Gemini', 'Gemma', 'n8n Workflow Automation', 'Software Architecture',
      'Multi-tenant SaaS', 'Database Optimization', 'E-E-A-T Optimization'
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Vadodara',
      'addressRegion': 'Gujarat',
      'addressCountry': 'IN'
    },
    'alumniOf': {
      '@type': 'EducationalOrganization',
      'name': 'Gujarat University System',
      'description': 'Bachelor of Computer Applications (BCA) in Software Development'
    },
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'AI Agents Fundamentals',
        'credentialCategory': 'Certification',
        'credentialId': 'nilpatel7530',
        'url': BASE + '/images/hf-certificate.png',
        'recognizedBy': { '@type': 'Organization', 'name': 'Hugging Face' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Cloud Technical Series: AI in Action',
        'credentialCategory': 'Certification',
        'credentialId': '178814351',
        'url': 'https://googlecloudapac.accredible.com/e96cc411-9ac9-4bc1-8140-ed758129fdd0',
        'recognizedBy': { '@type': 'Organization', 'name': 'Google Cloud Asia Pacific' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'AI Tools Workshop',
        'credentialCategory': 'Certification',
        'credentialId': '0270772f-3809-4400-b29b-1e1c61cd09971049973',
        'url': 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971049973',
        'recognizedBy': { '@type': 'Organization', 'name': 'Be10x' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Cloud Technical Series: Gemini at Work Edition',
        'credentialCategory': 'Certification',
        'credentialId': '166910245',
        'url': 'https://googlecloudapac.accredible.com/90f104f9-57c1-4700-9778-aaeb69786e1d#acc.V8oWFid7',
        'recognizedBy': { '@type': 'Organization', 'name': 'United Latino Students Association' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': "Cloud Technical Series: ADK Builder's Badge",
        'credentialCategory': 'Certification',
        'url': 'https://www.credly.com/badges/7b5173b9-f59b-4138-b6e5-ad07bdf5dd75/linked_in_profile',
        'recognizedBy': { '@type': 'Organization', 'name': 'United Latino Students Association' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Prompt Design in Vertex AI Skill Badge',
        'credentialCategory': 'Certification',
        'url': 'https://www.credly.com/badges/d2b63ee7-ed47-4724-9625-d725fef04fd6/linked_in_profile',
        'recognizedBy': { '@type': 'Organization', 'name': 'Google' }
      }
    ],
    'sameAs': [
      'https://github.com/nilpatel7530',
      'https://linkedin.com/in/nilpatel7530'
    ],
    'worksFor': { '@id': BASE + '/#org' },
    'publishingPrinciples': BASE
  };

  /* ── Seer IT Solutions — canonical Organization entity ── */
  var ORGANIZATION = {
    '@type': 'Organization',
    '@id': BASE + '/#org',
    'name': 'Seer IT Solutions',
    'location': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Vadodara',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN'
      }
    }
  };

  /* ── WebSite entity ── */
  var WEBSITE = {
    '@type': 'WebSite',
    '@id': BASE + '/#website',
    'name': 'Nil Patel — AI Developer & Full-Stack Engineer',
    'url': BASE,
    'publisher': { '@id': BASE + '/#person' },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': BASE + '/?s={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    'inLanguage': 'en'
  };

  /* ── Person reference (pointer only — no duplication) ── */
  var PERSON_REF = { '@id': BASE + '/#person' };

  /* ── Shared FAQ builder helper ── */
  function buildFAQItems(faqs) {
    return faqs.map(function (f) {
      return {
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
      };
    });
  }

  /* ──────────────────────────────────────────────────────────
     HOMEPAGE SCHEMA
     Types: ProfilePage, Person (full), WebSite, Organization,
            FAQPage, Service × 5
  ────────────────────────────────────────────────────────── */
  function buildHomepage() {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': BASE + '/#profile',
        'url': BASE + '/',
        'name': 'Nil Patel — AI Developer & Full-Stack Engineer Portfolio',
        'description': 'Official portfolio of Nil Patel, AI-Augmented Software Engineer & AI Search Visibility Consultant based in Vadodara, India.',
        'inLanguage': 'en',
        'isPartOf': { '@id': BASE + '/#website' },
        'mainEntity': PERSON
      },
      assign({ '@context': 'https://schema.org' }, ORGANIZATION),
      assign({ '@context': 'https://schema.org' }, WEBSITE),
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': BASE + '/#faq',
        'mainEntity': buildFAQItems([
          {
            q: 'Who is Nil Patel and what is his technical specialization?',
            a: 'Nil Patel is an AI-Augmented Software Engineer & AI Search Visibility Consultant. He specializes in designing multi-agent workflows, scalable Laravel SaaS platforms, custom RAG architectures, and search visibility optimization (SEO, AEO, and GEO) serving clients globally across India, NZ, and Australia.'
          },
          {
            q: 'What is your engineering philosophy as an AI-augmented developer?',
            a: 'My philosophy is that AI accelerates development but human engineering ensures production readiness. I leverage multi-agent loops to write tests, write documentation, and generate boilerplate code quickly (reducing time-to-market), while personally auditing the critical layers AI cannot reliably solve: scalable system architecture, granular security schemas, API caching, database optimization, and high-performance server configurations.'
          },
          {
            q: 'What is AI Search Visibility (AEO/GEO) and how does it benefit my business?',
            a: 'AI Search Visibility (SEO + AEO + GEO) is a unified strategy that ensures your business profile, services, and content are crawled, indexed, and cited by AI-powered search engines (like ChatGPT Search, Gemini, Claude, Perplexity, and Google AI Overviews). By implementing structured schema markup, entity optimization, and machine-readable files (like llms.txt), we ensure AI engines recommend your business as the primary solution for search queries in your domain.'
          },
          {
            q: 'Who is your target client and what projects do you build?',
            a: 'I work with founders, startups, agencies, SMEs, and enterprise companies. I build custom multi-role SaaS platforms, autonomous workflow automations (n8n, CRM/ERP integrations), vector-based data systems (RAG), and comprehensive AI search visibility setups designed to scale securely under real production loads.'
          },
          {
            q: 'What certifications and authority signals back your expertise?',
            a: 'Nil Patel holds 6 major technical certifications: AI Agents Fundamentals (Hugging Face), Cloud Technical Series - AI in Action (Google Cloud APAC), AI Tools Workshop (Be10x), Cloud Technical Series - Gemini at Work Edition (ULSA), Cloud Technical Series: ADK Builder\'s Badge (ULSA), and Prompt Design in Vertex AI Skill Badge (Google). All certifications are fully verified with official IDs and public verification links.'
          }
        ])
      },
      buildService({
        name: 'AI Search Visibility Consulting',
        description: 'Technical consulting to optimize web discoverability on AI answer engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews using structured schema markup, entity linking, and GEO content tuning.',
        url: BASE + '/ai-search-visibility'
      }),
      buildService({
        name: 'AI Agent Development Services',
        description: 'Custom autonomous AI Agent development featuring system prompt engineering, multi-agent frameworks (LangGraph, Autogen), and integrations with n8n and local Gemma model structures.',
        url: BASE + '/ai-agents'
      }),
      buildService({
        name: 'n8n Workflow Automation',
        description: 'Business automation services integrating CRMs, marketing channels, email delivery, and custom database APIs using self-hosted n8n workflows.',
        url: BASE + '/n8n-automation'
      }),
      buildService({
        name: 'RAG Development Services',
        description: 'Retrieval-Augmented Generation (RAG) applications using Pinecone, ChromaDB, and Weaviate vectors to connect custom business documentation databases to LLMs safely.',
        url: BASE + '/rag-development'
      }),
      buildService({
        name: 'Laravel SaaS Development',
        description: 'High-performance multi-tenant SaaS dashboards, database caching, and custom ERP integrations using Laravel framework.',
        url: BASE
      })
    ];
  }

  /* ──────────────────────────────────────────────────────────
     SERVICE PAGE SCHEMA
     Types: WebPage, BreadcrumbList, Service, FAQPage
     cfg: { slug, title, pageTitle, description, faqs[], offerDescription }
  ────────────────────────────────────────────────────────── */
  function buildServicePage(cfg) {
    var pageUrl = BASE + '/' + cfg.slug;
    var result = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': pageUrl + '#page',
        'url': pageUrl,
        'name': cfg.pageTitle || cfg.title,
        'description': cfg.description,
        'inLanguage': 'en',
        'isPartOf': { '@id': BASE + '/#website' },
        'author': PERSON_REF,
        'breadcrumb': { '@id': pageUrl + '#breadcrumb' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': pageUrl + '#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': BASE + '/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': cfg.title,
            'item': pageUrl
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': pageUrl + '#service',
        'name': cfg.title,
        'description': cfg.description,
        'url': pageUrl,
        'provider': PERSON_REF,
        'areaServed': AREA_SERVED,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'USD',
          'description': cfg.offerDescription || 'Contact for custom pricing.'
        }
      }
    ];

    if (cfg.faqs && cfg.faqs.length > 0) {
      result.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': pageUrl + '#faq',
        'mainEntity': buildFAQItems(cfg.faqs)
      });
    }

    return result;
  }

  /* ──────────────────────────────────────────────────────────
     FAQ PAGE SCHEMA
     Types: FAQPage, WebPage, BreadcrumbList
  ────────────────────────────────────────────────────────── */
  function buildFAQPage(cfg) {
    var pageUrl = BASE + '/faq';
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': pageUrl + '#page',
        'url': pageUrl,
        'name': 'Frequently Asked Questions | Nil Patel AI & Automation',
        'description': 'Clear structured answers about AI engineering, n8n automation, RAG systems, Laravel SaaS, and custom software development by Nil Patel.',
        'inLanguage': 'en',
        'isPartOf': { '@id': BASE + '/#website' },
        'author': PERSON_REF,
        'breadcrumb': { '@id': pageUrl + '#breadcrumb' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': pageUrl + '#breadcrumb',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE + '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'FAQ', 'item': pageUrl }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': pageUrl + '#faq',
        'mainEntity': buildFAQItems(cfg.faqs || [])
      }
    ];
  }

  /* ──────────────────────────────────────────────────────────
     KNOWLEDGE HUB SCHEMA
     Types: CollectionPage, Blog, BreadcrumbList
  ────────────────────────────────────────────────────────── */
  function buildKnowledgeHub() {
    var pageUrl = BASE + '/knowledge-hub';
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': pageUrl + '#page',
        'url': pageUrl,
        'name': 'Knowledge Hub | AI Automation, n8n, RAG & Laravel Articles',
        'description': 'Expert articles and guides on AI Agent workflows, n8n automation, RAG search systems, Laravel SaaS development, and GEO/AEO optimization by Nil Patel.',
        'inLanguage': 'en',
        'isPartOf': { '@id': BASE + '/#website' },
        'author': PERSON_REF,
        'breadcrumb': { '@id': pageUrl + '#breadcrumb' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': pageUrl + '#blog',
        'name': 'Nil Patel Knowledge Hub',
        'description': 'Educational blog covering Generative AI integration, workflow automation, backend architectures, and search optimizations.',
        'url': pageUrl,
        'publisher': PERSON_REF,
        'author': PERSON_REF,
        'inLanguage': 'en',
        'blogPost': [
          {
            '@type': 'BlogPosting',
            'name': 'What is AI Automation?',
            'url': pageUrl + '#what-is-ai-automation',
            'author': PERSON_REF,
            'datePublished': '2026-06-01',
            'description': 'A complete guide to AI automation: what it is, how it works, and when to use it for business workflows.'
          },
          {
            '@type': 'BlogPosting',
            'name': 'AI Agents vs Chatbots: Key Differences Explained',
            'url': pageUrl + '#ai-agents-vs-chatbots',
            'author': PERSON_REF,
            'datePublished': '2026-06-01',
            'description': 'Understand the architecture and capability differences between traditional chatbots and autonomous AI agents.'
          },
          {
            '@type': 'BlogPosting',
            'name': 'n8n vs Zapier: Which Automation Tool Wins?',
            'url': pageUrl + '#n8n-vs-zapier',
            'author': PERSON_REF,
            'datePublished': '2026-06-01',
            'description': 'Side-by-side comparison of n8n and Zapier for enterprise workflow automation, cost, and self-hosting.'
          },
          {
            '@type': 'BlogPosting',
            'name': 'What is GEO (Generative Engine Optimization)?',
            'url': pageUrl + '#what-is-geo',
            'author': PERSON_REF,
            'datePublished': '2026-06-01',
            'description': 'How to optimize your content to appear in AI-generated search summaries from ChatGPT, Perplexity, and Gemini.'
          },
          {
            '@type': 'BlogPosting',
            'name': 'What is AEO (Answer Engine Optimization)?',
            'url': pageUrl + '#what-is-aeo',
            'author': PERSON_REF,
            'datePublished': '2026-06-01',
            'description': 'Answer Engine Optimization strategies for featured snippets, voice search, and structured FAQ markup.'
          },
          {
            '@type': 'BlogPosting',
            'name': 'Laravel vs Node.js for SaaS: Choosing the Right Backend',
            'url': pageUrl + '#laravel-vs-nodejs',
            'author': PERSON_REF,
            'datePublished': '2026-06-01',
            'description': 'A practical engineering guide comparing Laravel and Node.js for multi-tenant SaaS product development.'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': pageUrl + '#breadcrumb',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE + '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Knowledge Hub', 'item': pageUrl }
        ]
      }
    ];
  }

  /* ──────────────────────────────────────────────────────────
     HELPERS
  ────────────────────────────────────────────────────────── */
  function buildService(opts) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': opts.name,
      'description': opts.description,
      'url': opts.url,
      'provider': PERSON_REF,
      'areaServed': AREA_SERVED
    };
  }

  /* Simple shallow-merge (IE11-safe alternative to Object.assign) */
  function assign(target, source) {
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
    return target;
  }

  /* ──────────────────────────────────────────────────────────
     INJECT SCHEMA INTO <head>
  ────────────────────────────────────────────────────────── */
  function inject(schemaArray) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    try {
      script.textContent = JSON.stringify(schemaArray, null, 2);
    } catch (e) {
      script.text = JSON.stringify(schemaArray);
    }
    document.head.appendChild(script);
  }

  /* ──────────────────────────────────────────────────────────
     INIT — reads window.PAGE_SCHEMA and dispatches to builder
  ────────────────────────────────────────────────────────── */
  function init() {
    var cfg = window.PAGE_SCHEMA;

    if (!cfg || !cfg.type) {
      console.warn('[schema.js] window.PAGE_SCHEMA not defined or missing type.');
      return;
    }

    var schema;
    switch (cfg.type) {
      case 'homepage':
        schema = buildHomepage();
        break;
      case 'service':
        schema = buildServicePage(cfg);
        break;
      case 'faq':
        schema = buildFAQPage(cfg);
        break;
      case 'knowledgeHub':
        schema = buildKnowledgeHub();
        break;
      default:
        console.warn('[schema.js] Unknown page type: ' + cfg.type);
        return;
    }

    inject(schema);
  }

  /* Run immediately — <script> is placed at end of <head>, so
     PAGE_SCHEMA is already defined when this executes. */
  init();

})();
