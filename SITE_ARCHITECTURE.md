# Kick It California Website - Site Architecture & Setup Analysis

**Live Site:** https://kicform.org/kick-it-2  
**Hubspot Portal ID:** 131650  
**Analysis Date:** February 18, 2026

## Page Overview

The `/kick-it-2` page is your main landing page that showcases Kick It California's cessation programs with integrated features for lead generation and user engagement.

## Site Architecture

### Core Sections (Page Layout)

```
Header
├── Navigation Bar
├── Hero Section (Mission-focused)
│
Main Content (Vertical Stack)
├── 1. Service Overview Section
│   ├── Phone Coaching
│   ├── Text Program
│   ├── Mobile App
│   └── LEARN MORE buttons
│
├── 2. The Science Section
│   ├── Four value pillars (cards)
│   │   ├── Completely Free
│   │   ├── Expert Coaches
│   │   ├── Personalized Plans
│   │   └── Unwavering Support
│   ├── Real Stories/Testimonials (Carousel or Tabs)
│   └── Mission Statement
│
├── 3. Choose Your Path Section
│   ├── Four product cards
│   │   ├── Quit Smoking
│   │   ├── Quit Vaping
│   │   ├── Quit Smokeless
│   │   └── Quit Marijuana
│   └── Links to dedicated landing pages
│
├── 4. Cost Calculator Section
│   ├── Interactive form
│   ├── Product selector
│   ├── Price inputs
│   ├── Calculate button
│   └── Savings display
│
├── 5. Marijuana Education Section
│   ├── "Is Marijuana Addictive?" content block
│   ├── Risk factor checklist
│   │   ✅ Starting as teenager
│   │   ✅ Heavy user (more days than not)
│   │   ✅ High THC content
│   └── Related information
│
├── 6. Audio Sample Section
│   ├── "Listen to a Sample Call" feature
│   ├── Three audio players
│   │   ├── Smoking (7:27)
│   │   ├── Vaping (7:27)
│   │   └── Smokeless (7:27)
│   └── Hero image (street photography)
│
├── 7. Cannabis Self-Assessment Quiz
│   ├── Modified CUDIT-R questionnaire
│   ├── Questions about frequency
│   ├── Single question visible (multi-step)
│   ├── NEXT button for progression
│   └── Results (confidential)
│
├── 8. Timeline/History Section
│   ├── "A Legacy of Helping Californians Thrive"
│   ├── Timeline visualization
│   │   ├── 1992 - Foundation
│   │   ├── 2000s - Expansion
│   │   ├── 2010s - Research & Leadership
│   │   ├── 2020s - New Challenges
│   │   └── Recent - Holistic Support
│   └── Descriptive text per era
│
├── 9. Blog/Resources Section
│   ├── "Kickin' It Blog" heading
│   ├── Three featured articles (cards)
│   │   ├── Heated Tobacco Products
│   │   ├── Marijuana vs. Tobacco
│   │   └── Oral Nicotine Pouches
│   ├── Article images
│   ├── Article links
│   └── "See More" link
│
└── Footer/Contact Section
    ├── "Contact Kick It" heading
    ├── Promotional banner (Free Nicotine Patches)
    ├── Phone numbers (English/Spanish)
    ├── Other languages note
    ├── Copyright & funding info
    ├── Social media links (FB, LinkedIn, Twitter, Instagram)
    └── Navigation links
```

## Hubspot Modules & Components Used

Based on the page structure, your implementation uses these Hubspot components:

### 1. **Rich Text Modules**
- Service descriptions
- Mission statement
- Educational content blocks
- Timeline descriptions

### 2. **Custom Card/Tile Modules**
- Service cards (Phone Coaching, Text Program, Mobile App)
- Value pillars (4 feature cards)
- Product path cards (Quit Smoking/Vaping/Smokeless/Marijuana)
- Blog article cards

### 3. **Form Modules**
- Cost Calculator form
  - Dropdown: Product selector
  - Number inputs: Packs/day, Price/pack, Days sober
  - Button: Calculate Savings
  - Display: Savings result

### 4. **Interactive Elements**
- Audio player module (3 samples)
- Quiz/Assessment form (progressive questions)
- Calculator with dynamic results

### 5. **Image Modules**
- Hero images
- Timeline graphics
- Blog featured images
- Social proof images

### 6. **Carousel/Slider Modules**
- Testimonial carousel (Real Stories)
- Blog articles carousel

### 7. **Call-to-Action (CTA) Modules**
- LEARN MORE buttons
- Action links ("ENROLL IN TEXT SUPPORT", "DISCOVER THE APP", etc.)
- NEXT buttons for progressive forms

### 8. **Navigation & Menu**
- Main navigation bar
- Internal page links
- Footer navigation

## Custom CSS Classes Identified

From your stylesheet (`custom/system/css/new_kic_ji.css`):

```css
/* Layout & Structure */
.scroll-animate          /* Scroll animation trigger */
.is-visible              /* Animation active state */
.hidden                  /* Display: none utility */
.active                  /* Active state for elements */

/* Theme System */
.light, .dark            /* Theme classes */
html.light, html.dark    /* Root theme selector */
.bg-app-promo-light      /* Theme-specific background */
.bg-app-promo-dark

/* Quiz Styling */
.quiz-container          /* Main quiz wrapper */
.quiz-question           /* Question wrapper */
.quiz-question.active    /* Currently visible question */
.quiz-error-message      /* Error message display */
.quiz-error-message.hidden
.cuditQuizForm           /* Quiz form element */
.retake-quiz-button      /* Retake button styling */

/* Results Display */
#quizResult              /* Results container */
.result-title            /* Result heading */
.result-score            /* Score display */
.result-actions          /* Actions after results */

/* Theme Links */
.text-theme-link         /* Contextual link styling */
.underline               /* Underline utility */

/* Button/Form Elements */
.cta-button              /* Call-to-action button */
.learn-more              /* Learn more button variant */
.mt-6                    /* Margin-top utility */
.text-lg                 /* Large text utility */

/* Navigation */
.menu-toggle             /* Mobile menu toggle */
.nav-open                /* Navigation open state */
#mainNav                 /* Main navigation */
#navToggle               /* Nav toggle button */
```

## JavaScript Functionality

Your footer HTML includes global scripts for:

### 1. **Quiz System (CUDIT)**
- Multi-question progressive form
- Question validation
- Score calculation
- Risk level categorization:
  - **0-7:** Low Risk
  - **8-11:** Hazardous Use Pattern
  - **12+:** Possible Cannabis Use Disorder
- Result messaging with links to intake form
- Retake functionality

### 2. **Theme Switcher**
- Light/Dark mode toggle
- localStorage persistence
- System preference detection
- Dynamic class application
- Icon switching (fa-sun/fa-moon)

### 3. **Scroll Animations**
- IntersectionObserver for fade-in effects
- Viewport detection
- Progressive reveal of elements

### 4. **Navigation Utilities**
- Mobile menu toggle
- ARIA attributes for accessibility
- Icon state changes

### 5. **Utility Functions**
- Current year auto-update in footer

## Data Tracking & Integrations

### Hubspot Integration
- Hubspot tracking code in head
- Portal ID: `131650`
- UTM parameter tracking (`?hsLang=en`)
- Session tracking via cookies (`__hstc`, `__hssc`, `__hsfp`)

### Analytics Signals
- Page sections suggest funnel stages
- Multiple CTAs for conversion
- Quiz results likely tied to contact creation
- Cost calculator engagement tracking

## Forms & Lead Capture Points

1. **Cannabis Assessment Quiz (CUDIT-R)**
   - Progressive multi-step form
   - Modified version of Cannabis Use Disorders Identification Test - Revised
   - Questions about frequency/quantity
   - Email/contact likely required on submission
   - Results tied to Hubspot contacts

2. **Cost Calculator**
   - Product selection (dropdown)
   - Usage metrics input (packs/day)
   - Price per pack input
   - Automatic savings calculation
   - Potential email capture for results

3. **Intake Form Anchor**
   - Referenced as `#intake` in quiz results
   - Full contact/enrollment form likely below fold
   - Direct pathway from quiz results

## Page Links & Navigation Structure

**Internal Navigation:**
- `/about` - About page
- `/phone-coaching` - Phone coaching details
- `/text-program` - Text program info
- `/mobile-app` - Mobile app info
- `/quit-smoking` - Smoking pathway (personalized)
- `/quit-vaping` - Vaping pathway (personalized)
- `/quit-smokeless` - Smokeless pathway (personalized)
- `/marijuana` - Marijuana support page
- `/program-details` - Program details
- `/coaches` - Coach information
- `/quit-plan` - Quit plan details
- `/support` - Support resources
- `/blog/*` - Blog articles

**External Links:**
- Social media (Facebook, LinkedIn, Twitter, Instagram)
- Phone: 1-800-300-8086 (English)
- Phone: 1-800-600-8191 (Spanish)
- Multilingual support available

## Estimated Module Inventory

- **20+ custom modules/sections** (cards, forms, quiz, etc.)
- **8+ main content sections**
- **3+ unique form implementations**
- **2+ interactive components** (calculator, quiz)
- **Custom CSS framework** with theme system
- **Advanced JavaScript** for functionality
- **3 different service pathways** (UI variations)
- **Real testimonials/social proof** section

## Key Features to Preserve/Enhance

✅ **Progressive CUDIT-R Quiz** - Multi-step cannabis assessment  
✅ **Theme System** - Light/dark mode with persistence  
✅ **Cost Calculator** - Interactive savings estimator  
✅ **Audio Players** - Sample call listening (Vimeo integrated)  
✅ **Responsive Navigation** - Mobile-friendly menu toggle  
✅ **Scroll Animations** - Progressive reveal effects  
✅ **Accessibility** - ARIA attributes, semantic HTML  
✅ **Multilingual Support** - English/Spanish with extensible structure  
✅ **Real Stories** - Testimonial carousel  
✅ **Timeline/Heritage** - Historical narrative  

## Technology Stack Identified

### Frontend
- **HTML/CSS/JavaScript** (Hubspot native)
- **Font Awesome 6.5.2** - Icon library
- **Vimeo Player API** - Audio/video embedding
- **IntersectionObserver API** - Scroll animations
- **localStorage** - Client-side persistence

### Backend
- **Hubspot CRM** - Contact management
- **Hubspot CMS** - Page hosting
- **Design Manager** - Template building
- **Custom Modules** - Reusable components

### Tracking & Analytics
- **Hubspot Analytics** - Event tracking
- **Session Cookies** - User tracking
- **UTM Parameters** - Campaign attribution

## Integration Opportunities with Kick It Ca

1. **Quiz Results → CRM Sync**
   - Auto-create contacts from quiz scores
   - Tag by risk level (Low/Moderate/High)
   - Trigger follow-up workflows
   - Send results to Kick It Ca intake

2. **Cost Calculator Analytics**
   - Track savings calculations
   - Product preference data (Smoking/Vaping/Smokeless/Marijuana)
   - Engagement metrics
   - Lead scoring based on engagement

3. **Form Submissions**
   - Route quiz completions to Kick It Ca system
   - Link contacts across platforms
   - Auto-enroll based on product selection
   - Trigger welcome sequences

4. **Lead Scoring & Routing**
   - Quiz engagement = high intent
   - Cost calculator use = consideration stage
   - Product selection = pathway indicator
   - Risk level = prioritization score

5. **Cross-Platform Analytics**
   - Track user journey from Hubspot → Kick It Ca
   - Measure conversion rates per pathway
   - Identify drop-off points
   - Optimize messaging per product type

## Next Steps for Local Development

1. **Fetch full template** with `npm run hs:fetch`
2. **Export modules** to Git for version control
3. **Document custom CSS** thoroughly
4. **Test quiz integration** with Kick It Ca backend
5. **Enhance with additional tracking** for lead quality
6. **Set up automated syncs** to CRM
7. **Create module library** documentation

---

**Analysis complete!** Your Hubspot build is sophisticated with multiple interactive components, a strong lead-gen focus, and clear conversion pathways. Ready to integrate with Kick It Ca backend.
