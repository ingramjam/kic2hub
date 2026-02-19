# Hubspot Code Inventory & Fetch Plan

**Portal:** kicform.org (131650)  
**Analysis Date:** February 18, 2026  
**Purpose:** Document existing code to be fetched and managed locally

## What You Already Have in Hubspot Design Manager

### 1. Templates (`.html` files)

Based on the page analysis, you likely have:

```
templates/
├── about-us-page.html
│   └── Full About page template with custom sections
│
├── landing-page-main.html
│   └── Primary landing/home page (kick-it-2)
│   └── Contains: All 9 major sections
│   └── Features: Quiz, calculator, testimonials, timeline
│
├── service-page-template.html
│   └── Used by: phone-coaching, text-program, mobile-app, etc.
│   └── Layout: Reusable service detail page
│
├── product-pathway-page.html
│   └── Used by: quit-smoking, quit-vaping, quit-smokeless, marijuana
│   └── Features: Personalized messaging per product
│
├── blog-list-page.html
│   └── Blog hub listing all articles
│   └── Features: Article cards, pagination
│
└── blog-post-template.html
    └── Individual blog post layout
    └── Features: Article content, author info, related posts
```

### 2. Modules (Reusable Components)

```
modules/
├── text-with-image.module/
│   ├── module.html
│   ├── meta.json
│   └── module.css
│
├── image-text-card.module/
│   └── Service showcase cards (Phone Coaching, Text, App)
│
├── value-pillar-card.module/
│   └── Four feature cards (Free, Experts, Personalized, Support)
│
├── product-pathway-card.module/
│   └── Four quit pathway cards (Smoking, Vaping, Smokeless, Marijuana)
│
├── blog-article-card.module/
│   └── Blog featured articles with images
│
├── cudit-quiz-form.module/
│   ├── module.html (Quiz structure)
│   ├── module.css (Quiz styling)
│   └── Progressive question form
│
├── cost-calculator.module/
│   ├── Form fields & logic
│   └── Interactive calculator display
│
├── audio-player.module/
│   └── Three audio sample players
│   └── Vimeo integration
│
├── testimonial-carousel.module/
│   └── Real Stories section
│   └── Multiple testimonials
│
├── timeline-section.module/
│   └── Historical timeline visualization
│   └── 5 era descriptions
│
├── navigation.module/
│   ├── Main navigation bar
│   ├── Mobile menu toggle
│   └── Responsive design
│
└── footer.module/
    ├── Contact info (dual language)
    ├── Social links
    └── Copyright & funding info
```

### 3. Stylesheets

```
custom/system/css/
├── new_kic_ji.css ⭐ MAIN STYLESHEET
│   ├── Theme system (light/dark)
│   ├── Quiz styling
│   ├── Layout utilities
│   ├── Navigation styles
│   ├── Component styles
│   └── Responsive breakpoints
│
└── (potentially other CSS files)
```

### 4. JavaScript Files

#### Page-level JavaScript (in template footer HTML)

Located in: **About-Us-Page.html footer** (based on your previous share)

```javascript
// 1. CUDIT Quiz Controller (initializeCuditQuizInstance)
   ├── Multi-question form management
   ├── Score calculation
   ├── Risk level categorization
   ├── Result messaging
   └── Retake functionality

// 2. Theme Switcher
   ├── Light/dark mode toggle
   ├── localStorage persistence
   ├── System preference detection
   ├── Dynamic icon switching
   └── Root element class management

// 3. Scroll Animations
   ├── IntersectionObserver setup
   ├── Progressive reveal effects
   └── Performance optimization

// 4. Navigation Utilities
   ├── Mobile menu toggle
   ├── ARIA attributes
   ├── Icon state management
   └── Active states

// 5. Utility Functions
   └── Current year auto-update
```

#### Head HTML

```html
<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<!-- Hubspot Tracking -->
<script async defer src="//js-na2.hs-scripts.com/131650.js"></script>
```

#### Footer HTML

```html
<!-- Vimeo Player API -->
<script src="https://player.vimeo.com/api/player.js"></script>

<!-- All custom JavaScript (see above) -->
```

## What `npm run hs:fetch` Will Download

When you run the fetch command, the directory structure will look like:

```
hubspot/
├── templates/
│   ├── [template-slug].html
│   ├── [template-slug].meta.json
│   └── ... (all your templates)
│
├── modules/
│   ├── [module-name].module/
│   │   ├── module.html
│   │   ├── meta.json
│   │   ├── module.css
│   │   └── fields.json
│   └── ... (all your modules)
│
├── css/
│   ├── custom/
│   │   └── system/
│   │       └── css/
│   │           ├── new_kic_ji.css
│   │           └── ... (other CSS files)
│   └── ...
│
├── js/
│   ├── custom/
│   └── ... (any custom JavaScript files)
│
└── hubspot.config.yml
    └── Portal configuration
```

## Code Statistics (Estimated)

| Type | Count | Size |
|------|-------|------|
| Templates | 6-8 | 10-15 KB each |
| Modules | 12-15 | 2-5 KB each |
| CSS Files | 1-2 | 5-10 KB total |
| JavaScript | 1 file | 10-15 KB |
| Images | 20+ | Varies |
| **Total** | **50+ files** | **200-300 KB** |

## Fetch Command Checklist

```bash
# Step 1: Make sure you're authenticated
npm run hs:auth

# Step 2: Fetch everything
npm run hs:fetch

# Step 3: Verify fetch was successful
ls -la hubspot/
# Should show: css/, js/, modules/, templates/, hubspot.config.yml
```

## What to Do After Fetching

### 1. Review Template Structure
```bash
cd hubspot/templates/
ls -la
# Examine main landing page template
cat [main-landing-template].html
```

### 2. Review Modules
```bash
cd hubspot/modules/
ls -la
# Look for quiz, calculator, card modules
```

### 3. Review CSS
```bash
cd hubspot/css/custom/system/css/
cat new_kic_ji.css | head -50
# See theme system and utilities
```

### 4. Commit Everything to Git
```bash
cd /Users/James/KIC2HUB
git add .
git commit -m "Initial fetch of Hubspot portal code"
git push
```

### 5. Start Development
```bash
# Run in watch mode for auto-sync
npm run hs:watch

# Make changes locally, they sync automatically
# Test in browser at https://kicform.org/kick-it-2
```

## Key Files to Examine First

After fetching, prioritize reviewing:

1. **Main landing template** (`kick-it-2` or similar)
   - Contains all 9 sections
   - Houses quiz and calculator logic
   - Shows module composition

2. **CUDIT Quiz Module** (`cudit-quiz-form.module`)
   - Quiz HTML structure
   - CSS for styling
   - JavaScript validation logic

3. **Cost Calculator Module** (`cost-calculator.module`)
   - Form structure
   - Calculation logic
   - Display formats

4. **Main CSS file** (`new_kic_ji.css`)
   - Theme system implementation
   - Component classes
   - Responsive design patterns

5. **Navigation Module** (`navigation.module`)
   - Menu structure
   - Mobile toggle implementation
   - Accessibility attributes

## Integration Points for Kick It Ca

After reviewing fetched code, you'll need to:

### 1. Identify Quiz Form ID
```javascript
// Find in quiz module:
const form = document.getElementById('cuditQuizForm-[ID]');
// Will use this in your integration
```

### 2. Locate Result Container ID
```javascript
// Find in quiz module:
const resultDiv = document.getElementById('quizResult-[ID]');
// Where results display
```

### 3. Map Form Field Names
```html
<!-- Find in calculator module -->
<input name="product-selector">
<input name="packs-per-day">
<!-- Will use for tracking -->
```

### 4. Understand Module File Structure
```json
{
  "name": "module-name",
  "label": "Human Readable Name",
  "fields": [
    {
      "name": "field_id",
      "label": "Field Label",
      "type": "field_type"
    }
  ]
}
```

## Version Control Strategy

After fetching:

```bash
# Create feature branch for integration work
git checkout -b feature/kickitca-integration

# Make changes to templates/modules
# Test locally with npm run hs:watch

# Commit incrementally
git add hubspot/templates/[modified].html
git commit -m "Update quiz to track Kick It Ca submissions"

# Push to branch
git push origin feature/kickitca-integration

# When ready, merge to main
git checkout main
git merge feature/kickitca-integration
git push origin main
```

## Expected Fetch Output

When successful, you'll see:

```
✓ Fetching from portal 131650...
✓ Downloaded templates/
✓ Downloaded modules/
✓ Downloaded css/
✓ Updated hubspot.config.yml
✓ Fetch complete - [X] files synced
```

## Troubleshooting Fetch Issues

```bash
# If fetch fails, check authentication
npm run hs:auth

# If auth expires, re-authenticate
npm run hs:auth

# Check config is correct
cat hubspot.config.yml

# Try fetch again
npm run hs:fetch

# If files corrupted, clean and retry
rm -rf hubspot/
npm run hs:fetch
```

---

**Ready to proceed?** Run:
```bash
npm run hs:auth
npm run hs:fetch
```

Then review the fetched code and start your Kick It Ca integration!
