# Nil Patel — AI Developer & Full-Stack Engineer

> Official portfolio website of **Nil Patel** — AI-Augmented Software Engineer & AI Search Visibility Consultant, Hugging Face Certified Agent Developer, based in Vadodara, Gujarat, India.

🌐 **Live Portfolio**: [nilpatel.snpsolutions.co.nz](https://nilpatel.snpsolutions.co.nz)
📄 **Resume**: [nilpatel.snpsolutions.co.nz/Nil_Patel_Resume.pdf](https://nilpatel.snpsolutions.co.nz/Nil_Patel_Resume.pdf)
🤖 **LLM Index**: [nilpatel.snpsolutions.co.nz/llms.txt](https://nilpatel.snpsolutions.co.nz/llms.txt)

---

## 🏗️ About This Repository

This is a fully static, high-performance portfolio website built with semantic HTML5, vanilla CSS3, and vanilla JavaScript — no frameworks, no build steps, no dependencies. It is engineered for maximum readability, fast loading, and discovery by both human visitors and AI/LLM-powered search crawlers (Google AI Overviews, Perplexity, ChatGPT Search).

### Key Design Principles

- **Zero-dependency**: Pure HTML + CSS + JS — no npm, no bundler, no framework overhead
- **Performance-first**: Sub-1s TTFB on static hosting; no client-side rendering delays
- **Crawler-optimized**: Structured JSON-LD schemas, `llms.txt`, explicit `robots.txt` directives
- **Aesthetic excellence**: Warm off-white palette, terracotta (#E8572A) + cobalt (#2A6DE8) accent system, custom animated cursor, Fraunces editorial serif headlines

---

## 🚀 Features

| Feature | Details |
|---|---|
| **SEO / AEO / GEO** | JSON-LD schemas: `Person`, `ProfilePage`, `Organization`, `FAQPage`, `Service`, `ImageObject` |
| **AI Search Visibility** | `llms.txt` + `llms-full.txt` for LLM crawler/agent indexing, entity graph markup |
| **Structured FAQ** | Answer-first markup optimized for voice search, featured snippets, and LLM extraction |
| **Interactive Bento Grid** | Filterable project cards with category-based JavaScript filtering |
| **Animated Hero** | 2-column hero grid with live right-column console visualizers on every subpage |
| **Infinite Marquees** | 4× duplicated text marquees with CSS `@keyframes` scroll, zero empty space |
| **Custom Cursor** | Terracotta dot + lagged ring cursor with magnetic button hover effect |
| **Scroll-Reveal System** | IntersectionObserver-based staggered entrance animations on all sections |
| **WhatsApp Contact Forms** | Forms route to WhatsApp API with pre-formatted structured message |
| **Sitemap + robots.txt** | Image sitemaps with Google Image namespace; explicit bot permission lists |

---

## 📂 Repository Structure

```
portfolio/
├── index.html                  # Main homepage (hero, about, services, case studies, projects, contact)
├── ai-agents.html              # Service: Autonomous AI Agent Development
├── ai-chatbots.html            # Service: AI Chatbot Development
├── n8n-automation.html         # Service: n8n Workflow Automation
├── rag-development.html        # Service: RAG (Vector Search) Development
├── ai-search-visibility.html   # Service: AI Search Visibility & GEO/AEO Consulting
├── faq.html                    # Comprehensive FAQ with structured schema
├── knowledge-hub.html          # Filterable AI/Laravel/n8n/GEO article library
│
├── css/
│   └── style.css               # Global design system: tokens, components, utilities, responsive
│
├── images/
│   ├── goswamisangath.webp     # Project screenshot — Goswami Sangath
│   ├── suyoglife.webp          # Project screenshot — Suyog Life
│   ├── celsrs.webp             # Project screenshot — Creative Engineering SRS
│   ├── enterprisehrms.webp     # Project screenshot — B2B HRMS
│   ├── trustlineenergy.webp    # Project screenshot — TrustLine Energy
│   ├── leadgenpro.png          # Project screenshot — LeadGen Pro
│   ├── nilleads.png            # Project screenshot — NilLeads AI
│   ├── watermarkremover.png    # Project screenshot — Video Watermark Remover
│   ├── ytautomation.png        # Project screenshot — YouTube Automation Agent
│   ├── zorocaptions.png        # Project screenshot — Zoro Caption Generator Pro
│   ├── yukti_ai.png            # Project screenshot — Yukti_AI
│   ├── hf-certificate.png      # Hugging Face certification
│   ├── logo-gemini.svg         # Google Gemini logo
│   ├── logo-google-cloud.svg   # Google Cloud logo
│   ├── logo-google.svg         # Google logo
│   ├── logo-huggingface.svg    # Hugging Face logo
│   └── logo-be10x.png          # Be10x certification logo
│
├── headshot.jpg                # Professional headshot (schema-indexed)
├── Nil_Patel_Resume.pdf        # Downloadable resume
│
├── robots.txt                  # Search engine + AI bot crawl rules
├── sitemap.xml                 # XML sitemap with image namespace entries
├── llms.txt                    # LLM-readable concise summary (for AI crawlers)
├── llms-full.txt               # LLM-readable full detailed brief
│
├── vercel.json                 # Vercel deployment config (cleanUrls: true)
├── .gitignore                  # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: auto-deploy to cPanel FTP on push to main
│
└── googlebf41262ae2c9b2b4.html # Google Search Console site ownership verification
```

---

## 🌐 Live Pages

| URL | Description | Priority |
|---|---|---|
| `/` | Main portfolio homepage | 1.0 |
| `/ai-agents` | AI Agent Development service page | 0.9 |
| `/n8n-automation` | n8n Workflow Automation service page | 0.9 |
| `/rag-development` | RAG (Vector Search) Development service page | 0.9 |
| `/ai-chatbots` | AI Chatbot Development service page | 0.9 |
| `/ai-search-visibility` | AI Search Visibility & GEO/AEO Consulting | 0.9 |
| `/faq` | Frequently asked questions (schema-marked) | 0.8 |
| `/knowledge-hub` | Filterable article library | 0.8 |
| `/llms.txt` | LLM/AI crawler index file | 0.8 |
| `/llms-full.txt` | Extended LLM specification file | 0.8 |
| `/Nil_Patel_Resume.pdf` | Downloadable CV/Resume | 0.8 |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | Semantic HTML5 (`<section>`, `<nav>`, `<article>`, `<footer>`, `<main>`) |
| **Styling** | Vanilla CSS3 — custom properties, grid, flexbox, keyframe animations |
| **Scripting** | Vanilla JavaScript — IntersectionObserver, WhatsApp API, custom cursor, scroll reveal |
| **Fonts** | `Fraunces` (editorial display) + `Cabinet Grotesk` (UI sans-serif) + `Departure Mono` (monospace) via Google Fonts |
| **Icons** | Inline SVG paths (no external icon library) |
| **Deployment** | Static site on shared cPanel hosting + Vercel (clean URLs) |
| **CI/CD** | GitHub Actions → FTP Deploy on push to `main` branch |
| **Schema** | JSON-LD: `Person`, `ProfilePage`, `Organization`, `FAQPage`, `Service`, `ImageObject` |

---

## 🤖 SEO, AEO & GEO Indexing

This portfolio is engineered for three layers of search discovery:

### 1. Traditional SEO (Search Engine Optimization)

- **`sitemap.xml`**: Comprehensive XML sitemap referencing all 8 HTML pages + PDF resume + LLM files, with Google Image namespace for all project screenshots
- **`robots.txt`**: Explicitly allows all standard search crawlers + all major AI bots
- **Canonical URLs**: Every page has a canonical `<link>` tag + `og:url` meta
- **Open Graph + Twitter Cards**: Structured social share metadata on all pages
- **Image Alt Tags**: Descriptive alt text on all content images

### 2. AEO (Answer Engine Optimization)

- **`FAQPage` JSON-LD schema** on `index.html` and `faq.html` — structured QA pairs for direct Google/Bing snippet extraction
- **Answer-first paragraphs**: All FAQ answers lead with a direct declarative answer before elaborating
- **Heading hierarchy**: Single `<h1>` per page, then `<h2>` → `<h3>` sectioning for crawler parsing
- **Breadcrumb trails**: Navigation structure maps service hierarchy for answer engine crawls

### 3. GEO (Generative Engine Optimization)

- **`llms.txt`**: The [llms.txt standard](https://llmstxt.org/) — a machine-readable plain-text file at the domain root summarizing Nil's identity, credentials, skills, and projects for LLM scrapers
- **`llms-full.txt`**: Extended GEO specification with detailed project briefs, verified metrics, client work, and education timeline
- **Explicit AI bot allowance** in `robots.txt` for: `GPTBot`, `ChatGPT-User`, `Google-Extended`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Applebot-Extended`
- **Entity-first copy**: All pages identify Nil Patel as a named entity with verifiable properties (location, credentials, specializations)
- **`Service` schema objects**: Each service page is described in a `Service` JSON-LD block on the homepage schema

### robots.txt Quick Reference

```
User-agent: *             → Allow all (global)
User-agent: GPTBot        → Explicitly allowed
User-agent: Google-Extended → Explicitly allowed
User-agent: ClaudeBot     → Explicitly allowed
User-agent: PerplexityBot → Explicitly allowed
Disallow: /tmp/ /vendor/  → Blocked paths

Sitemap: https://nilpatel.snpsolutions.co.nz/sitemap.xml
```

---

## 🚢 Deployment & CI/CD

### Deployment Targets

| Target | URL | Method |
|---|---|---|
| **cPanel Shared Hosting** | `nilpatel.snpsolutions.co.nz` | GitHub Actions → FTP Deploy |
| **Vercel** | Vercel preview / backup | Git integration (optional) |

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

Every push to the `main` branch triggers an automatic FTP deployment to the cPanel server:

```yaml
on:
  push:
    branches: [main]

steps:
  - Checkout latest code
  - Sync via FTP (SamKirkland/FTP-Deploy-Action@v4.3.5)

Excluded from deploy:
  - .git* and .git*/**   (Git metadata)
  - .vercel/**           (Vercel config)
  - vercel.json          (Vercel config)
  - README.md            (Developer-only documentation)
```

### Required GitHub Secrets

Set the following in **Settings → Secrets → Actions**:

| Secret | Description |
|---|---|
| `FTP_SERVER` | cPanel FTP hostname (e.g., `ftp.yourdomain.com`) |
| `FTP_USERNAME` | cPanel FTP account username |
| `FTP_PASSWORD` | cPanel FTP account password |

### Vercel Config (`vercel.json`)

```json
{
  "version": 2,
  "cleanUrls": true,
  "framework": null,
  "buildCommand": null,
  "installCommand": null,
  "outputDirectory": "."
}
```

`cleanUrls: true` strips `.html` extensions so `/ai-agents.html` is served at `/ai-agents`.

---

## 💻 Local Development

No build tools or package managers required. Simply serve the folder with any static HTTP server:

```bash
# Python (built-in)
python -m http.server 8000

# Node.js (via npx)
npx serve .

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

### Browser Testing Checklist

- [ ] Custom cursor follows mouse and grows on hover
- [ ] Marquee loops infinitely with no gaps
- [ ] Scroll-reveal animations trigger on scroll (not on page load)
- [ ] FAQ accordion opens/closes correctly
- [ ] Project filter tabs show/hide correct cards
- [ ] Contact form routes to WhatsApp on submit
- [ ] Footer "Back to Top" arrow scrolls to `#hero`
- [ ] All footer links resolve (Home, About, Work, FAQs, Hub, AI Search, Email)
- [ ] Responsive layout at 320px, 768px, 1024px, 1440px

---

## 📦 Shipped Projects

| # | Project | Category | Links |
|---|---|---|---|
| 1 | **LeadGen Pro Architect** | AI & Automation | [GitHub](https://github.com/nilpatel7530/leadgen-pro-by-nil) |
| 2 | **Goswami Sangath Matrimonial** | SaaS | [Demo](https://goswamisangath.in/admin) |
| 3 | **Suyog Matrimonial Platform** | SaaS | [Live](https://www.suyog.life/) |
| 4 | **Creative Engineering SRS (ERM)** | CRM / ERP | [Demo](https://srs.developmentdemo.co.in/login) |
| 5 | **B2B HRMS Dashboard** | SaaS | [Demo](https://hrms.developmentdemo.co.in/login) |
| 6 | **TrustLine Energy Platform** | Web | [Live](https://trustlineenergy.com/) |
| 7 | **NilLeads — AI Client Finder** | AI & Automation | [GitHub](https://github.com/nilpatel7530/leadscraper) |
| 8 | **Video Watermark Remover** | Automation Tool | [GitHub](https://github.com/nilpatel7530/video_watermark_remover_by_Nil_Patel) |
| 9 | **YouTube Automation Agent** | AI & Automation | [GitHub](https://github.com/nilpatel7530/youtube-automation-agent) |
| 10 | **Zoro Caption Generator Pro** | AI & Automation | [GitHub](https://github.com/nilpatel7530/zoro-caption-generator-pro) |
| 11 | **Yukti_AI** | AI OS / Multi-Agent | [GitHub](https://github.com/nilpatel7530/Yukti_AI) |

---

## 🏅 Certifications

| Credential | Issuer | Issued | Verify |
|---|---|---|---|
| AI Agents Fundamentals | Hugging Face | Apr 2026 | [Certificate](https://nilpatel.snpsolutions.co.nz/images/hf-certificate.png) |
| Cloud Technical Series — AI in Action | Google Cloud APAC | Apr 2026 | [Accredible](https://googlecloudapac.accredible.com/e96cc411-9ac9-4bc1-8140-ed758129fdd0) |
| AI Tools Workshop | Be10x | Feb 2026 | [CertX](https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971049973) |
| Cloud Technical Series — Gemini at Work | ULSA | Nov 2025 | [Accredible](https://googlecloudapac.accredible.com/90f104f9-57c1-4700-9778-aaeb69786e1d) |
| Cloud ADK Builder's Badge | ULSA | Nov 2025 | [Credly](https://www.credly.com/badges/7b5173b9-f59b-4138-b6e5-ad07bdf5dd75/linked_in_profile) |
| Prompt Design in Vertex AI | Google | Oct 2025 | [Credly](https://www.credly.com/badges/d2b63ee7-ed47-4724-9625-d725fef04fd6/linked_in_profile) |

---

## 🔗 Connect

| Channel | Link |
|---|---|
| 📧 Email | [nilpatel7530@gmail.com](mailto:nilpatel7530@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/nilpatel7530](https://linkedin.com/in/nilpatel7530) |
| 🐙 GitHub | [github.com/nilpatel7530](https://github.com/nilpatel7530) |
| 🌐 Portfolio | [nilpatel.snpsolutions.co.nz](https://nilpatel.snpsolutions.co.nz) |

---

## 📝 Contributing / Editing

This is a personal portfolio repository. Direct contributions are not accepted, but if you notice a broken link or factual error, feel free to open an issue.

### Making Changes

1. Edit the relevant `.html` file or `css/style.css`
2. Test locally with `python -m http.server 8000`
3. Push to `main` — GitHub Actions will auto-deploy via FTP within ~60 seconds

### CSS Design Tokens (in `css/style.css`)

```css
:root {
  --accent:      #E8572A;  /* Terracotta — primary CTA, highlights */
  --accent-2:    #2A6DE8;  /* Cobalt — technical, secondary pop */
  --page-bg:     #F7F4EF;  /* Warm off-white background */
  --ink:         #0F0F0D;  /* Primary text */
  --font-display: 'Fraunces', Georgia, serif;
  --font-sans:    'Cabinet Grotesk', sans-serif;
  --font-mono:    'Departure Mono', monospace;
}
```

---

*Made with [Antigravity](https://antigravity.dev)*
