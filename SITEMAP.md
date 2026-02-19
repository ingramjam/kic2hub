# Kick It California Website Sitemap

**Portal:** Hubspot Portal ID 131650  
**Primary Domain:** kicform.org  
**Analysis Date:** February 18, 2026

## Site Structure

```
kicform.org/
│
├── kick-it-2/ ⭐ MAIN LANDING PAGE
│   ├── Sections:
│   │   ├── Hero (Mission statement)
│   │   ├── Services Overview (3 options)
│   │   ├── The Science (Value props + Testimonials)
│   │   ├── Choose Your Path (4 product routes)
│   │   ├── Cost Calculator (Interactive)
│   │   ├── Marijuana Education
│   │   ├── Audio Samples
│   │   ├── Cannabis Quiz (CUDIT-R)
│   │   ├── Timeline/History
│   │   ├── Blog Section
│   │   └── Contact/Footer
│   │
│   └── Features:
│       ├── Interactive Quiz (CUDIT-R assessment)
│       ├── Cost Savings Calculator
│       ├── Audio player (3 sample calls)
│       ├── Theme switcher (Light/Dark)
│       ├── Scroll animations
│       ├── Mobile-responsive nav
│       └── Intake form anchor (#intake)
│
├── about/ — About Kick It California
│   └── Link: "LEARN MORE ABOUT KICK IT"
│
├── phone-coaching/ — Phone Coaching Service Details
│   └── Link: "LEARN ABOUT PHONE COACHING"
│   └── Features: One-on-one certified coaches
│
├── text-program/ — Text Support Program
│   └── Link: "ENROLL IN TEXT SUPPORT"
│   └── Features: Daily motivational messages & tips
│
├── mobile-app/ — Kick It Quit Mobile Application
│   └── Link: "DISCOVER THE APP"
│   └── Features: Progress tracking, cravings management
│
├── quit-smoking/ — Smoking Cessation Pathway
│   └── From: "Choose Your Path" section
│   └── Focus: Personalized smoking cessation
│   └── CTA: Call coaches for quit plan
│
├── quit-vaping/ — Vaping Cessation Pathway
│   └── From: "Choose Your Path" section
│   └── Focus: Vaping-specific support
│   └── CTA: Download mobile app
│
├── quit-smokeless/ — Smokeless Tobacco Cessation
│   └── From: "Choose Your Path" section
│   └── Focus: Smokeless tobacco support
│   └── CTA: Enroll in text program
│
├── marijuana/ — Marijuana Support & Resources
│   └── From: "Choose Your Path" section
│   └── Focus: Cannabis use support
│   └── CTA: Live chat with counselor
│
├── program-details/ — Full Program Information
│   └── Link: "COMPLETELY FREE ALL SERVICES"
│   └── Content: Service details & benefits
│
├── coaches/ — Meet the Coaches
│   └── Link: "EXPERT COACHES"
│   └── Content: Coach profiles & credentials
│
├── quit-plan/ — Personalized Quit Plan Information
│   └── Link: "PERSONALIZED PLANS"
│   └── Content: How quit plans work
│
├── support/ — Support & Resources
│   └── Link: "UNWAVERING SUPPORT"
│   └── Content: Support options & resources
│
├── blog/ — Blog Hub
│   └── From: "Kickin' It Blog" section
│   │
│   ├── heated-tobacco-products-risks-myths-and-california-quit-resources/
│   │   └── "Heated Tobacco Products: Risks, Myths, and California Quit Resources"
│   │   └── Featured on main landing
│   │
│   ├── marijuana-vs.-tobacco-understanding-use-risks-and-health/
│   │   └── "Marijuana vs. Tobacco: Understanding Use, Risks, and Health"
│   │   └── Featured on main landing
│   │
│   └── oral-nicotine-pouches-new-laws-and-what-to-know/
│       └── "Oral Nicotine Pouches: New Laws and What to Know"
│       └── Featured on main landing
│
├── Mobile App Page
│   └── Cross-domain link: 131650.hs-sites-na2.com/mobile-app
│   └── UTM tracked: ?hsLang=en
│
└── Footer
    ├── Contact Information
    │   ├── English: 1-800-300-8086
    │   ├── Spanish: 1-800-600-8191
    │   └── Other languages available
    │
    ├── Funding & Copyright
    │   ├── California Department of Public Health
    │   ├── First 5 California
    │   └── © 2025 The Regents of the University of California
    │
    └── Social Media
        ├── Facebook
        ├── LinkedIn
        ├── Twitter
        ├── Instagram
        └── Dev footer: kickitca-dev.ucsd.edu
```

## Content Hierarchy

### Level 1: Main Landing Page
- **kick-it-2/** - Primary entry point with all major CTAs

### Level 2: Service Pages (Product Routes)
- **quit-smoking/** - Smoking cessation
- **quit-vaping/** - Vaping cessation
- **quit-smokeless/** - Smokeless tobacco
- **marijuana/** - Cannabis support

### Level 2: Feature Pages
- **phone-coaching/** - Service details
- **text-program/** - Service details
- **mobile-app/** - App information
- **about/** - Organization info

### Level 3: Deep Dive Pages
- **program-details/** - Full program overview
- **coaches/** - Coach information
- **quit-plan/** - Quit plan methodology
- **support/** - Support resources

### Level 4: Blog & Resources
- **blog/** - Blog hub
- **blog/[article-slug]/** - Individual articles

## Forms & Lead Capture Points

### Form 1: Cannabis Self-Assessment Quiz
```
Location: kick-it-2/ (Section 7)
Type: Progressive multi-step form
Questions: CUDIT-R modified version
Questions about frequency:
  - Never
  - Monthly or less
  - 2 to 4 times a month
  - 2 to 3 times a week
  - 4 or more times a week

Results Categories:
  - 0-7: Low Risk
  - 8-11: Hazardous Use Pattern
  - 12+: Possible Cannabis Use Disorder

Lead Capture: Email/contact on results
Routing: Links to #intake form
```

### Form 2: Cost Savings Calculator
```
Location: kick-it-2/ (Section 4)
Type: Interactive calculator
Fields:
  - Product selector (dropdown)
  - Packs/day input
  - Price per pack input
  - Days sober input

Calculation: (packs/day) × (price/pack) × (days sober)
Example: 1 × $11.50 × 365 = $4,197.50/year

Display: Savings results
Lead Capture: Potential email for results
```

### Form 3: Intake/Enrollment
```
Location: Anchor (#intake)
Type: Full contact form
Purpose: Program enrollment
Fields: Standard Hubspot contact creation fields
Routing: Directs to program of choice
```

## URL Parameters & Tracking

### Language Parameter
- `?hsLang=en` - English (default)
- `?hsLang=es` - Spanish (inferred)

### Tracking Cookies (Hubspot)
- `__hstc` - Primary tracker
- `__hssc` - Session identifier  
- `__hsfp` - First-party identifier

### Analytics Events (Inferred)
- Quiz completion
- Calculator usage
- Audio play events
- Page scroll depth
- Button clicks
- Form submissions

## Module Inventory (Estimated)

### Custom Modules
```
20+ modules across the page:
  ├── 3x Service showcase cards
  ├── 4x Value pillar cards
  ├── 4x Product pathway cards
  ├── 1x Cost calculator form
  ├── 1x Audio player
  ├── 1x Quiz/assessment form
  ├── 1x Testimonial carousel
  ├── 1x Timeline visualization
  ├── 3x Blog article cards
  ├── Multiple rich text blocks
  └── Navigation & footer modules
```

### CSS Framework
- **Utility-first approach** (similar to Tailwind)
- **Theme system** (light/dark mode)
- **Custom component classes**
- **Responsive design**

### JavaScript Components
- Quiz controller
- Theme switcher
- Scroll observer
- Navigation toggle
- Calculator logic
- Form validation

## Site Statistics

- **Total Pages**: 12+ main pages
- **Internal Links**: 30+
- **External Links**: 5 (social)
- **Interactive Forms**: 2 (quiz + calculator)
- **Blog Articles**: 3 (featured)
- **Call-to-Action Buttons**: 15+
- **Custom Modules**: 20+
- **Service Pathways**: 4

## Key Features Summary

| Feature | Location | Type | Impact |
|---------|----------|------|--------|
| CUDIT-R Quiz | Section 7 | Form | High (lead gen) |
| Cost Calculator | Section 4 | Form | Medium (engagement) |
| Audio Samples | Section 6 | Media | Medium (trust) |
| Theme Switcher | Header/Footer | UX | Low (preference) |
| Scroll Animation | All sections | UX | Low (polish) |
| Mobile Nav | Header | UX | High (mobile UX) |
| Testimonials | Section 2 | Social Proof | High (conversion) |
| Timeline | Section 8 | Content | Medium (trust) |
| Blog Section | Section 9 | Content | Medium (SEO) |

## Integration Points for Kick It Ca

### 1. Quiz → Backend
```
Quiz Result → POST /api/quiz-results
  ├── Score
  ├── Risk Level
  ├── Timestamp
  ├── Page URL
  └── User email (if captured)
```

### 2. Calculator → Analytics
```
Calculator Usage → Track
  ├── Product selected
  ├── Usage amount
  ├── Estimated savings
  └── Engagement signal
```

### 3. Form → CRM Sync
```
Intake Form → Hubspot Contact → Kick It Ca
  ├── Create contact
  ├── Add form submission
  ├── Tag by pathway
  ├── Trigger workflow
  └── Sync to Kick It Ca
```

### 4. Blog → SEO/Content
```
Blog Articles → Search Traffic → Landing Page
  ├── Organic traffic
  ├── Keyword ranking
  ├── Backlinks
  └── Content authority
```

---

**Next Step:** Fetch full site structure with `npm run hs:fetch` to examine actual module code and CSS implementations.
