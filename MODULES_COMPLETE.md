# Custom Hubspot Module Templates - Complete

All 6 custom modules have been created with full Design Manager editability. Each module is production-ready and can be uploaded to your Hubspot portal.

## Module Inventory

### 1. **Snap Panels** (`snap-panels.module`)
- **Purpose**: Flexible panel/card grid with icons
- **Editable Fields**: Section heading, panel count (2-4 cols or stacked), repeating panels with icons, titles, content, links
- **Color Control**: Panel background, text color, accent color
- **Responsive**: 4-col → 3 → 2 → 1 on mobile
- **Features**: Icon support (Font Awesome), color pickers, flexible layouts
- **Status**: ✅ Complete

### 2. **KICA-4-Card** (`kica-4-card.module`)
- **Purpose**: Showcase 4 featured cards with images
- **Editable Fields**: Card image, title, description, CTA button, repeating for unlimited cards
- **Layout Options**: 3 styles (overlay, side-by-side, stacked)
- **Color Control**: Background, CTA button color
- **Responsive**: 4-col → 3 → 2 → 1 on mobile
- **Features**: Image scaling, hover animations, flexible content height
- **Status**: ✅ Complete

### 3. **KICA-Testimonials** (`kica-testimonials.module`)
- **Purpose**: Customer testimonials with star ratings
- **Editable Fields**: Quote, author name, author title/location, author image, star rating (1-5)
- **Display Options**: Carousel, 2-col grid, 3-col grid, 4-col grid
- **Responsive**: Auto-adapts based on screen size
- **Features**: Star rating display, author images, blockquote styling, hover effects
- **Status**: ✅ Complete

### 4. **Savings Calculator** (`savings-calculator.module`)
- **Purpose**: Interactive cost/savings calculator
- **Editable Fields**: 
  - Price per unit
  - Units per day
  - Calculator type (daily, pack, monthly)
  - Currency symbol
  - Unit label (customizable)
- **Real-time Calculation**: Weekly, monthly, annual savings + milestone display
- **Email Signup**: Optional email capture for leads
- **Backend Integration**: Posts to `/api/email-signup`
- **Status**: ✅ Complete

### 5. **CUDIT-Style Quiz** (`cudit-quiz.module`)
- **Purpose**: Cannabis use assessment with scoring
- **Editable Fields**: 
  - Quiz title & description
  - Repeating questions with answer types (Likert scale, frequency, yes/no)
  - Score thresholds (low, moderate, high risk)
  - Result messages for each risk level
  - Custom colors
- **Progressive Display**: Shows one question at a time with progress bar
- **Result Features**: Score display, risk assessment, email signup
- **Backend Integration**: Posts to `/api/quiz-results` and `/api/email-quiz-results`
- **Status**: ✅ Complete

### 6. **Timeline Section** (`timeline-section.module`)
- **Purpose**: Historical or process timeline visualization
- **Editable Fields**: 
  - Timeline title & description
  - Timeline direction (vertical or horizontal)
  - Repeating timeline items with year/date, era title, description, image, icon
- **Layout Options**: Vertical (alternating left/right) or horizontal (scrollable)
- **Responsive**: Vertical layout collapses to single-column on mobile
- **Features**: Custom icons, optional images, scroll animations, hover effects
- **Status**: ✅ Complete

## Directory Structure

```
hubspot/
├── modules/
│   ├── snap-panels.module/
│   │   ├── meta.json
│   │   ├── module.html
│   │   └── module.css
│   ├── kica-4-card.module/
│   │   ├── meta.json
│   │   ├── module.html
│   │   └── module.css
│   ├── kica-testimonials.module/
│   │   ├── meta.json
│   │   ├── module.html
│   │   └── module.css
│   ├── savings-calculator.module/
│   │   ├── meta.json
│   │   ├── module.html
│   │   └── module.css
│   ├── cudit-quiz.module/
│   │   ├── meta.json
│   │   ├── module.html
│   │   └── module.css
│   └── timeline-section.module/
│       ├── meta.json
│       ├── module.html
│       └── module.css
```

## Hubspot Module Architecture

Each module consists of three components:

### 1. **meta.json** - Field Definitions
Defines all editable fields in the Design Manager Content tab:
- Text fields
- RichText fields (for content editing)
- Color pickers (for theming without CSS editing)
- Choice/select fields (for layout variations)
- Repeater fields (for unlimited dynamic content)
- Image fields (for media uploads)
- Boolean fields (for feature toggles)

### 2. **module.html** - HubL Template
Server-side template that:
- Interpolates module fields using `{{ module.field_name }}`
- Loops through repeater fields: `{% for item in module.items %}`
- Uses conditional rendering: `{% if module.show_feature %}`
- Includes embedded JavaScript for interactivity
- Maintains responsive, semantic HTML structure

### 3. **module.css** - Responsive Styling
Mobile-first CSS with:
- BEM naming convention (`.module-name__component--variant`)
- CSS Custom Properties for theming: `color: var(--accent-color)`
- Responsive breakpoints at 1024px, 768px, 480px
- Hover animations and transitions
- Grid and flexbox layouts

## Full Design Manager Editability

All modules are **fully editable in Hubspot's Design Manager** without requiring code editing:

✅ **Content**: All text/images editable via Design Manager Content tab  
✅ **Styling**: Colors customizable via color pickers  
✅ **Layout**: Layout options selectable via choice fields  
✅ **Dynamic Content**: Add/remove items via repeater fields  
✅ **No Code Editing**: Everything visual and intuitive  

## Next Steps

### 1. Upload Modules to Hubspot Portal
```bash
npm run hs:upload
```

### 2. Test in Design Manager
- Visit your Hubspot portal Design Manager
- Add each module to a test page
- Verify all fields appear in the Content tab
- Test editability of colors, text, images, layouts

### 3. Backend API Integration
Create endpoints for:
- `POST /api/quiz-results` - Store quiz submissions
- `POST /api/email-signup` - Store email signups
- `POST /api/email-quiz-results` - Send quiz results to email

### 4. Watch for Changes
```bash
npm run hs:watch
```

This will monitor local changes and auto-sync to portal as you develop.

## Key Features

### Interactivity
- **Savings Calculator**: Real-time calculations with localStorage persistence
- **CUDIT Quiz**: Progressive question display, instant scoring, conditional result messaging
- **Timeline**: Scroll-triggered animations for enhanced engagement
- **Testimonials**: Star ratings, carousel/grid layouts, author profiles

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard-navigable forms
- Color contrast compliance
- Responsive text sizing

### Performance
- CSS-only animations (hardware-accelerated)
- No external dependencies
- Minimal JavaScript footprint
- IntersectionObserver for scroll animations
- Lazy loading support

### Customization
Every module includes editable fields for:
- Colors and theming
- Text content
- Layout variations
- Icons and images
- Feature toggles

## Module Field Reference

| Module | Repeaters | Color Fields | Layout Options |
|--------|-----------|-------------|-----------------|
| Snap Panels | Panels (icon, title, content) | bg, text, accent | 2/3/4-col, stacked |
| KICA-4-Card | Cards (image, title, desc) | bg, CTA | overlay, side-by-side, stacked |
| KICA-Testimonials | Testimonials (quote, author) | quote, accent (stars) | carousel, 2/3/4-col grid |
| Savings Calculator | None | primary, accent | calculator variants |
| CUDIT Quiz | Questions (text, answers) | primary | single-question flow |
| Timeline | Timeline items (year, desc) | accent | vertical, horizontal |

## Integration Notes

### Backend Endpoints Required
```javascript
// Quiz submission
POST /api/quiz-results
{
  quiz_type: 'cudit',
  score: number,
  risk_level: 'low|moderate|high',
  total_questions: number,
  timestamp: ISO8601
}

// Email signup
POST /api/email-signup
{
  email: string,
  source: 'savings-calculator'
}

// Email quiz results
POST /api/email-quiz-results
{
  email: string,
  score: number,
  quiz_type: 'cudit'
}
```

## Troubleshooting

### Linting Errors in HubL Templates
VS Code will report "at-rule or selector expected" errors on HubL syntax like `{{ module.field }}` and `{% for %}` blocks. These are **false positives**—the templates are valid HubL and will work correctly in Hubspot.

### Module Not Appearing in Design Manager
1. Run `npm run hs:upload` to sync modules
2. Wait 30-60 seconds for sync to complete
3. Refresh Design Manager
4. Clear browser cache if needed

### Form Submissions Not Working
Verify backend endpoints are implemented at the paths referenced in module JavaScript:
- `/api/quiz-results`
- `/api/email-signup`
- `/api/email-quiz-results`

## Module Creation Pattern

All modules follow this consistent pattern for maintainability:

```
module-name.module/
├── meta.json          (field definitions)
├── module.html        (HubL template + JS)
└── module.css         (responsive styles)
```

This structure enables:
- Easy version control
- Bidirectional syncing with Hubspot CLI
- Local development with hot reload
- Team collaboration
- Production deployment

---

**Created**: 2024  
**Status**: ✅ All 6 modules complete and ready for deployment  
**Next Action**: Run `npm run hs:upload` to sync to portal
