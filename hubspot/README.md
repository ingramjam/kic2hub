# Hubspot Design Manager Structure

Organized folder structure for managing all Kick It Ca to Hubspot integration assets.

## Directory Organization

```
hubspot/
├── design-assets/              # Theme design system (Hubspot marketplace template)
│   ├── css/                    # Theme stylesheets (13 files)
│   │   ├── components/         # Reusable component styles
│   │   ├── elements/           # Base element styles
│   │   ├── generic/            # Normalize, reset
│   │   ├── objects/            # Layout objects
│   │   ├── templates/          # Template-specific styles
│   │   ├── tools/              # Mixins, helpers
│   │   ├── main.css            # Main theme stylesheet
│   │   ├── theme-overrides.css # Theme customizations
│   │   ├── popup.css           # Popup styling
│   │   ├── slick.css           # Carousel styles
│   │   └── font-awesome.min.css
│   ├── js/                     # Theme JavaScript (4 files)
│   │   ├── main.js             # Main theme script
│   │   ├── popup.js            # Popup functionality
│   │   ├── slick.js            # Carousel library
│   │   └── jquery.js           # jQuery library
│   ├── images/                 # Theme images & template previews
│   ├── templates/              # HTML page templates
│   │   ├── partials/           # Reusable template partials (header, footer)
│   │   ├── layouts/            # Layout templates
│   │   ├── system/             # System pages (404, login, etc)
│   │   └── [Page-Name].html    # Individual page templates
│   ├── modules/                # Reusable theme modules (8 modules)
│   │   ├── Blog_Section.module/
│   │   ├── Contact_Form.module/
│   │   ├── CTA_Button.module/
│   │   ├── Header_Menu.module/
│   │   ├── Hero_Section.module/
│   │   ├── Logo_Module.module/
│   │   ├── Product_Feature.module/
│   │   └── Social_Follow.module/
│   ├── fields.json             # Theme global fields configuration
│   └── theme.json              # Theme metadata
│
├── kica-modules/               # Custom Kick It Ca modules (6 modules)
│   ├── KICA-Testimonials-module.module/  # ✅ Repeater pattern (unlimited items)
│   ├── KICA-4-Card.module/               # ⏳ 4-card layout (static groups)
│   ├── KICA-3-Step-Plan.module/          # ⏳ 3-step flow (static groups)
│   ├── KICA-Snap-Scroll.module/          # ⏳ Scroll snap layout
│   ├── KICA - Video Feature.module/      # ✅ Video embeddings
│   └── Interactive Quit Planner.module/  # ✅ Interactive quiz form
│
├── hubspot.config.yml          # Hubspot CLI configuration
└── README.md                   # This file
```

## Module Categories

### Theme Modules (design-assets/modules/)
Reusable components from the Hubspot marketplace theme. Used across multiple pages.

| Module | Purpose | Status |
|--------|---------|--------|
| `Social_Follow.module` | Social media icon links | ✅ 28px white icons, coral red hover |
| `Hero_Section.module` | Hero banner with background | Active |
| `Blog_Section.module` | Blog post listing & filtering | Active |
| `Contact_Form.module` | Contact form with validation | Active |
| `Header_Menu.module` | Navigation menu | Active |
| `Logo_Module.module` | Logo display | Active |
| `Product_Feature.module` | Feature showcase | Active |
| `CTA_Button.module` | Call-to-action button | Active |

### Custom KICA Modules (kica-modules/)
Purpose-built modules for Kick It Ca site. Contains quiz integration, testimonials, and custom layouts.

| Module | Purpose | Status |
|--------|---------|--------|
| `KICA-Testimonials-module` | Client testimonials with video | ✅ REPEATER - unlimited items with "Add +" button |
| `KICA-4-Card` | 4-card section layout | ⏳ Candidate for repeater conversion |
| `KICA-3-Step-Plan` | 3-step process flow | ⏳ Candidate for repeater conversion |
| `KICA-Snap-Scroll` | Scroll-snap card carousel | ⏳ Candidate for repeater conversion |
| `KICA - Video Feature` | Embedded video sections | ✅ Complete |
| `Interactive Quit Planner` | Multi-step quiz form | ✅ Complete |

## Key Design Updates

| File | Update | Status |
|------|--------|--------|
| `design-assets/css/components/_footer.css` | Modern CSS Grid layout, dark blue background (#0f1419) | ✅ Complete |
| `design-assets/templates/partials/footer.html` | Semantic BEM classes, restructured markup | ✅ Complete |
| `design-assets/modules/Social_Follow.module/` | Removed circular backgrounds, 28px white icons | ✅ Complete |
| `design-assets/css/theme-overrides.css` | Theme color customizations | Active |
| `design-assets/js/main.js` | Theme functionality & interactions | Active |

## Recent Commits

```
6f36258 - Add system-level custom CSS file for kick-it-2 site
560530b - Clean up Social_Follow module (remove circular backgrounds)
d08167e - Update footer background color to dark blue
b5cbb11 - Modernize footer with CSS Grid layout and semantic markup
7191835 - Convert KICA-Testimonials to repeater pattern
```

## Hubspot Sync Commands

```bash
# Upload entire folder to Hubspot marketplace theme
hs cms upload hubspot/design-assets/ "/@marketplace/FastestThemes/Dark_free_Theme/"

# Upload single file
hs cms upload hubspot/design-assets/css/components/_footer.css

# Fetch from Hubspot
hs cms fetch "/@marketplace/FastestThemes/Dark_free_Theme/css/components/_footer.css"

# Watch for changes (auto-upload)
hs cms watch hubspot/
```

## Next Steps

- [ ] Convert `KICA-4-Card` to repeater pattern
- [ ] Convert `KICA-3-Step-Plan` to repeater pattern
- [ ] Convert `KICA-Snap-Scroll` to repeater pattern
- [ ] Optimize theme CSS (remove unused styles)
- [ ] Add theme color system documentation

See `REPEATER_PATTERN_GUIDE.md` for module conversion documentation.
