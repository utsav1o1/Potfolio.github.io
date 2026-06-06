# 🚀 PORTFOLIO BUILD BRIEF — UTSAV KARKI

Build a complete, production-ready single-page portfolio website for Utsav Karki using the specifications in this document. Output a single `index.html` file with embedded CSS in a `<style>` tag and JavaScript in a `<script>` tag at the bottom. Follow the design spec, include all 10 sections, all 8 projects, all 6 services, the SEO meta tags, schema markup, and mobile responsiveness. Use Google Fonts from CDN. Make it deployable directly to GitHub Pages with zero configuration.

## 🧠 CONTEXT — WHO IS THIS FOR?

**Name:** Utsav Karki  
**Title:** Full-Stack Web Developer & Server Administrator  
**Location:** Itahari/Biratnagar, Nepal (works with UK, US, and global clients)  
**Primary Market:** UK-based SMBs and e-commerce businesses  
**Freelance Platform:** PeoplePerHour (primary), also GitHub profile: utsav1o1  
**Key Differentiator:** One of very few developers in Nepal offering NopCommerce + VPS Server Administration as a combined service, with proven UK client portfolio

**Tone of the site:** Clean, professional, trustworthy. NOT flashy or gimmicky. This portfolio targets UK business owners who value reliability and competence over visual flair. Think: confident, experienced, no-nonsense professional.

---

## 🎨 DESIGN SPECIFICATION

### Color Palette
```
Primary Background:  #0F172A  (Dark Slate — sophisticated, professional)
Card/Surface:        #1E293B  (Slightly lighter slate for cards)
Primary Accent:      #6366F1  (Indigo — tech-forward, trustworthy)
Secondary Accent:    #22D3EE  (Cyan — highlights, links, tags)
Success/Green:       #10B981  (Emerald — stats, badges)
Text Primary:        #F8FAFC  (Near white)
Text Secondary:      #94A3B8  (Muted slate)
Border/Divider:      #334155  (Subtle borders)
```

### Typography
```
Headings:   'Sora' or 'DM Sans' (700/800 weight) — import from Google Fonts
Body:       'Inter' or 'Plus Jakarta Sans' (400/500 weight)
Code/Tech:  'JetBrains Mono' — for tech stack labels and code snippets
```

### Design Style
- **Dark mode** throughout
- **Glassmorphism cards** — `backdrop-filter: blur(10px)` with subtle border
- **Clean grid layouts** — no chaotic designs; structured and scannable
- **Gradient accents** — indigo-to-cyan gradients on CTAs and highlights
- **Subtle animations** — fade-in on scroll (IntersectionObserver), no aggressive effects
- **Professional, not trendy** — UK clients want to trust you, not be impressed by flashy UI

---

## 📐 PAGE STRUCTURE — BUILD ALL SECTIONS

### SECTION 1: Navigation (Sticky)
```
Logo: "UK" monogram or "Utsav Karki" wordmark (left aligned)
Nav Links: Services | Projects | About | Contact
CTA Button: "Hire Me on PPH" → links to PeoplePerHour profile
Mobile: Hamburger menu with smooth slide-down
Sticky on scroll with slight blur backdrop
```

### SECTION 2: Hero
```
LEFT COLUMN (60%):
  - Small tag: "Available for Freelance Work 🟢"
  - H1: "Full-Stack Developer & Server Admin"
  - H2 subtitle: "Building reliable web solutions for UK businesses since 2019"
  - Body: 2-3 sentence description (see copy below)
  - CTA Primary: "View My Work" → scrolls to Projects
  - CTA Secondary: "Get Free Quote" → scrolls to Contact

RIGHT COLUMN (40%):
  - Animated code block / terminal aesthetic showing tech stack
  - OR professional photo placeholder with gradient border

STATS BAR (below hero, full width):
  - 50+ Projects Delivered
  - 5+ Years Experience  
  - 10+ UK Clients Served
  - 4.9★ on PeoplePerHour
```

**Hero Copy:**
> "I specialise in Laravel, WordPress, NopCommerce, and VPS server management — helping UK businesses build faster, more reliable web platforms. Based in Nepal, working globally."

### SECTION 3: Services (Core Offering Grid)
```
6 service cards in a 3×2 grid:

1. 🌐 Web Development
   Laravel · PHP · Next.js · React
   "Custom web applications built for performance and scalability"

2. 🛒 WordPress & WooCommerce
   Custom Themes · Plugins · WooCommerce · Maintenance
   "Full-service WordPress development, from setup to long-term support"

3. 🏪 NopCommerce Development
   [HIGHLIGHT AS SPECIALIST — add "Specialist" badge]
   Custom Plugins · Razor Views · Lucene Search · Brevo Integration
   "One of the few Nepal-based developers with hands-on NopCommerce experience"

4. 🖥️ VPS & Server Administration
   [HIGHLIGHT AS SPECIALIST — add "Specialist" badge]
   Virtualmin · CloudPanel · CyberPanel · Nginx · Ubuntu
   "Full VPS migrations, server setup, security hardening, and ongoing maintenance"

5. 📧 Email Marketing & Automation
   Brevo · SMTP Setup · Campaign Automation · List Management
   "End-to-end email marketing systems including deliverability optimization"

6. 🐍 Python & Automation
   Web Scraping · API Automation · Custom Scripts · Gemini AI Integration
   "Workflow automation and data scripts to save you hours every week"
```

### SECTION 4: Tech Stack
```
Visual grid of technology icons/badges with category labels:

FRONTEND
  Next.js · React · HTML/CSS · Tailwind CSS · JavaScript

BACKEND
  Laravel · PHP · Node.js · Python · REST APIs

CMS & E-COMMERCE
  WordPress · WooCommerce · NopCommerce · OpenCart

DATABASES
  MySQL · PostgreSQL · MongoDB

SERVER & DEVOPS
  Ubuntu · Nginx · Apache · Docker · Virtualmin · CloudPanel · CyberPanel

TOOLS & PLATFORMS
  Git · Cloudflare · Brevo · cPanel · WHM · Linux

CLOUD & HOSTING
  Leaseweb VPS · StackCP · GitHub Pages · Vercel
```

### SECTION 5: Featured Projects
```
Display 6 projects in a masonry or card grid.
Each card shows:
  - Project name
  - Tech stack tags (pill badges)
  - Brief 1-line description
  - Category badge (Laravel / WordPress / NopCommerce / VPS / Python)
  - "View Details" link (can be a modal or expand)

PROJECT LIST (use these real projects):

1. Solware UK — NopCommerce Platform
   Tags: NopCommerce · C# · Brevo · Email Automation
   "Bulk email campaign system with Brevo integration, contact sync, and staged rollout for a UK electronics client"
   Category: NopCommerce

2. G. Shepherd Animal Health — VPS Migration
   Tags: Virtualmin · Nginx · OpenCart · Cloudflare · DKIM/SPF
   "Full VPS migration from Plesk to Leaseweb, email setup, DNS config, and OpenCart database migration"
   Category: VPS / Server

3. MW Truck Parts — WooCommerce Performance Fix
   Tags: WordPress · WooCommerce · PHP-FPM · Cloudflare WAF
   "Resolved severe performance issues via PHP-FPM tuning, plugin audit, and Cloudflare WAF rules"
   Category: WordPress

4. The London Electrical Compliance Co. — VPS Migration
   Tags: CyberPanel · Leaseweb · WordPress · DNS
   "Full server migration to Leaseweb VPS with CyberPanel, SSL, and DNS cutover"
   Category: VPS / Server

5. Beaumont Abroad Study — WordPress Migration
   Tags: CloudPanel · WordPress · DNS · SSL
   "Site migration to CloudPanel server with full DNS and SSL configuration for a Nepal-based education client"
   Category: WordPress

6. Willy Wonka VIP — Next.js Deployment
   Tags: Next.js · PM2 · StackCP · Git
   "Next.js deployment workflow on StackCP hosting including PM2 process management and port configuration"
   Category: Next.js

7. SEO Health Check — SaaS Tool (Personal Project)
   Tags: PHP · Laravel · SEO · SaaS
   "seohealthcheck.co.uk — a personal SaaS project providing automated SEO health analysis"
   Category: SaaS / PHP

8. PSA Pokémon Card Hunter — Python Automation
   Tags: Python · Gemini AI · eBay API · Computer Vision
   "Automated PSA-graded card hunting system using Gemini Vision API and eBay scraping with whitening detection"
   Category: Python / AI
```

### SECTION 6: Why Choose Me (USPs)
```
4-column horizontal layout or 2×2 grid:

✅ UK Market Experience
"I've worked with 10+ UK businesses and understand the standards, timelines, and communication style UK clients expect."

🔧 Full-Stack + DevOps
"I don't just build your site — I can deploy it, migrate it, secure it, and maintain the server it runs on."

🏪 NopCommerce Specialist
"Rare expertise outside of expensive agencies. I offer NopCommerce customization at freelance rates."

⚡ Fast, Transparent Communication
"Regular updates, honest timelines, and no disappearing acts. Verified reviews on PeoplePerHour."
```

### SECTION 7: Client Testimonials
```
Carousel or 3-column card grid.
Use placeholder structure (client to fill real testimonials):

PLACEHOLDER STRUCTURE:
[Client Name], [Company], UK
[Project Type]
"[Quote about the work quality, communication, and results]"
★★★★★ — via PeoplePerHour

Add note: "All reviews verifiable on PeoplePerHour profile"
Add PPH profile link/badge prominently
```

### SECTION 8: About Me
```
Two-column layout:

LEFT: Photo area (placeholder circle with gradient)

RIGHT:
  H2: "About Utsav"
  
  Paragraph 1:
  "I'm a full-stack web developer and server administrator based in Itahari, Nepal, 
  with over 5 years of experience building and maintaining web platforms for clients 
  in the UK and beyond."
  
  Paragraph 2:
  "My work spans custom web development (Laravel, PHP, Next.js), e-commerce 
  (WordPress/WooCommerce, NopCommerce, OpenCart), and full VPS server management. 
  I operate M65 SEO Agency and own seohealthcheck.co.uk as a SaaS project."
  
  Paragraph 3:
  "I'm also a BSc CSIT graduate with hands-on experience in Python automation, 
  AI integrations, and server hardening. I've helped UK businesses migrate servers, 
  fix performance issues, and build scalable systems — reliably and within budget."

  Links/Badges:
  - 🔗 PeoplePerHour Profile
  - 💻 GitHub: utsav1o1
  - 🌐 seohealthcheck.co.uk
  - 📍 Nepal (UTC+5:45)
```

### SECTION 9: Contact
```
Two-column:

LEFT: Contact form
  - Name (text input)
  - Email (email input)
  - Project type (select: Web Dev / WordPress / NopCommerce / VPS / Python / Other)
  - Budget range (select: <$500 / $500-$1000 / $1000-$2500 / $2500+)
  - Message (textarea)
  - Submit button: "Send Message"

RIGHT: Direct contact options
  - 📧 Email: [placeholder]
  - 💬 WhatsApp: [placeholder — floating button too]
  - 🔗 PeoplePerHour: Hire via PPH (prominent)
  - ⏰ Timezone: Nepal Time (UTC+5:45) — "Usually responds within 24 hours"

Availability badge: "🟢 Currently available for new projects"
```

### SECTION 10: Footer
```
4 columns:
  1. Logo + 1-line bio + social icons
  2. Services list (links)
  3. Quick Links (Projects, About, Contact, Blog)
  4. Tech Stack tags

Bottom bar:
  "© 2026 Utsav Karki · Full-Stack Developer & VPS Specialist · Nepal"
  "Serving UK clients via PeoplePerHour"
```

---

## 🔍 SEO REQUIREMENTS

### Meta Tags (put in `<head>`)
```html
<title>Utsav Karki — Full-Stack Developer & VPS Specialist | Laravel, WordPress, NopCommerce</title>
<meta name="description" content="Freelance full-stack web developer based in Nepal, specialising in Laravel, WordPress, NopCommerce, and VPS server management for UK businesses. Hire on PeoplePerHour.">
<meta name="keywords" content="full stack developer Nepal, Laravel developer, NopCommerce developer, VPS server management Nepal, WordPress developer Nepal, hire developer PeoplePerHour">

<!-- Open Graph -->
<meta property="og:title" content="Utsav Karki — Full-Stack Developer & VPS Specialist">
<meta property="og:description" content="Laravel, WordPress, NopCommerce & VPS expert. 5+ years. UK clients. Hire on PeoplePerHour.">
<meta property="og:type" content="website">

<!-- Canonical -->
<link rel="canonical" href="https://utsav1o1.github.io/">
```

### Schema Markup (put before `</body>`)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Utsav Karki",
  "jobTitle": "Full-Stack Web Developer & Server Administrator",
  "url": "https://utsav1o1.github.io",
  "sameAs": [
    "https://github.com/utsav1o1",
    "https://www.peopleperhour.com/freelancer/utsav"
  ],
  "knowsAbout": ["Laravel", "WordPress", "NopCommerce", "VPS Management", "PHP", "Next.js", "Python"],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NP",
    "addressRegion": "Koshi"
  }
}
```

---

## ⚙️ TECHNICAL REQUIREMENTS

### Stack
```
- Pure HTML5 + CSS3 + Vanilla JavaScript (NO frameworks required)
- All in a single index.html file OR cleanly split into index.html + styles.css + main.js
- Google Fonts import (Sora/DM Sans + JetBrains Mono)
- Font Awesome or Heroicons for icons (CDN link)
- NO build tools, NO npm — must work as static files on GitHub Pages
- Cloudflare compatible (no server-side code)
```

### Performance
```
- Lazy load all images
- Minified CSS (or clean and production-ready)
- defer all non-critical JS
- IntersectionObserver for scroll animations (no jQuery)
- All images must have alt text
- Responsive: works on 320px → 2560px screens
- Target: Lighthouse score 90+ on Performance, SEO, Accessibility
```

### Animations
```
- On-scroll fade-in for cards and sections (CSS + IntersectionObserver)
- Smooth scroll for nav links
- Hover transitions on cards (subtle lift + border glow)
- Stats counter animation (count up on scroll)
- NO heavy libraries (no GSAP, no Three.js)
```

### Mobile
```
- Hamburger nav on mobile
- Single column layout on mobile
- Touch-friendly tap targets (48px minimum)
- WhatsApp floating button bottom-right
- No horizontal scroll
```

---

## 📋 COMPLETE COPY / TEXT CONTENT

### Hero Section
**H1:** Full-Stack Developer & Server Administrator  
**H2:** Building reliable web solutions for UK businesses  
**Body:** I specialise in Laravel, WordPress, NopCommerce, and VPS server management. With 5+ years of experience and a strong track record on PeoplePerHour, I help UK businesses build, migrate, and scale their web platforms — reliably and within budget.  
**CTA1:** View My Work  
**CTA2:** Get a Free Quote  

### Services Section Heading
**H2:** What I Do  
**Subtitle:** End-to-end web development and server management — from first line of code to live server.

### Projects Section Heading
**H2:** Featured Work  
**Subtitle:** Real projects, real clients, real results.

### Testimonials Section Heading
**H2:** Client Feedback  
**Subtitle:** Verified reviews from PeoplePerHour and direct clients.

### About Section Heading
**H2:** About Utsav  

### Contact Section Heading
**H2:** Let's Work Together  
**Subtitle:** Currently available for new projects. Response within 24 hours.

---

## 🚫 WHAT NOT TO DO

- ❌ Do NOT use Bootstrap (too generic)
- ❌ Do NOT use purple gradient on white — overused AI aesthetic
- ❌ Do NOT add animations that block content or feel gimmicky
- ❌ Do NOT use fake testimonials — use placeholder text clearly labeled as "[Client testimonial — to be replaced]"
- ❌ Do NOT use fake project screenshots — use colored gradient placeholders
- ❌ Do NOT inflate stats — only use the numbers specified in this brief
- ❌ Do NOT use jQuery
- ❌ Do NOT add a blog section — skip it for now
- ❌ Do NOT make the footer overly complex

---

## ✅ FINAL CHECKLIST BEFORE DELIVERING

The AI/developer should verify:

- [ ] All 10 sections built and visible
- [ ] Navigation links work (smooth scroll)
- [ ] Mobile layout tested at 375px width
- [ ] All 6 service cards rendered
- [ ] All 8 projects shown with correct tech tags
- [ ] Stats counter visible in hero
- [ ] NopCommerce and VPS marked as "Specialist"
- [ ] Schema JSON in `<script type="application/ld+json">`
- [ ] All meta tags present in `<head>`
- [ ] WhatsApp floating button present
- [ ] Footer has copyright and PPH mention
- [ ] Scroll animations work
- [ ] No placeholder links (use `#` for unset links)
- [ ] Google Fonts loaded via CDN
- [ ] Lighthouse SEO score: target 95+

---

## 💬 PROMPT TO PASTE TO AI

> **Copy and paste this to your AI of choice:**
>
> "Build a complete, production-ready single-page portfolio website for Utsav Karki using the specifications in this document. Output a single `index.html` file with embedded CSS in a `<style>` tag and JavaScript in a `<script>` tag at the bottom. Follow the design spec, include all 10 sections, all 8 projects, all 6 services, the SEO meta tags, schema markup, and mobile responsiveness. Use Google Fonts from CDN. Make it deployable directly to GitHub Pages with zero configuration."

---

*Brief prepared: June 2026 | For: utsav1o1.github.io | Stack: Static HTML/CSS/JS*