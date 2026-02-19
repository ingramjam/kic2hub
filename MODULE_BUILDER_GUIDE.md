# Custom Module Structure Guide

Based on your Hubspot Design Manager setup, here's the EXACT structure for fully editable, globally manageable modules.

## Module Anatomy (Like "Snap Panels")

Each module you create in Hubspot Design Manager has this structure:

### File Structure
```
module-name.module/
├── module.html          # Module markup & content editing fields
├── meta.json           # Module metadata & field definitions
└── module.css          # Module styles (optional)
```

### Example: "Snap Panels" Module Structure

#### `snap-panels.module/module.html`
```html
<div class="snap-panels {{ module.alignment }}">
  
  <!-- CONTENT TAB FIELDS -->
  {% if module.heading %}
    <h2 class="snap-panels__heading">{{ module.heading }}</h2>
  {% endif %}

  {% if module.description %}
    <p class="snap-panels__description">{{ module.description }}</p>
  {% endif %}

  <!-- Smart Rules - Repeatable Panels -->
  {% for panel in module.panels %}
    <div class="snap-panel">
      <div class="snap-panel__header">
        <h3 class="snap-panel__title">{{ panel.title }}</h3>
        {% if panel.icon %}
          <i class="snap-panel__icon {{ panel.icon }}"></i>
        {% endif %}
      </div>
      
      {% if panel.content %}
        <div class="snap-panel__content">
          {{ panel.content }}
        </div>
      {% endif %}

      {% if panel.link_url %}
        <a href="{{ panel.link_url }}" class="snap-panel__link">
          {{ panel.link_text | default('Learn More') }}
        </a>
      {% endif %}
    </div>
  {% endfor %}

</div>
```

#### `snap-panels.module/meta.json`
```json
{
  "name": "snap_panels",
  "label": "Snap Panels",
  "help_text": "Create customizable panels with icon, title, content, and link",
  "icon": "icons-window-panels",
  "display": "inline",
  "css_assets": [],
  "external_js": [],
  "host_template_types": [
    "page"
  ],
  "fields": [
    {
      "name": "heading",
      "label": "Section Heading",
      "description": "Main heading for all panels",
      "type": "text",
      "display": "text"
    },
    {
      "name": "description",
      "label": "Section Description",
      "description": "Introductory text above panels",
      "type": "richtext",
      "display": "textarea"
    },
    {
      "name": "alignment",
      "label": "Panel Layout",
      "description": "How panels display",
      "type": "choice",
      "choices": [
        ["grid-2", "2 Columns"],
        ["grid-3", "3 Columns"],
        ["grid-4", "4 Columns"],
        ["stacked", "Stacked"]
      ],
      "default": "grid-3",
      "display": "radio"
    },
    {
      "name": "panels",
      "label": "Panels",
      "description": "Individual panel content",
      "type": "repeater",
      "children": [
        {
          "name": "title",
          "label": "Panel Title",
          "type": "text",
          "display": "text"
        },
        {
          "name": "icon",
          "label": "Icon Class",
          "type": "text",
          "display": "text",
          "placeholder": "fa-star"
        },
        {
          "name": "content",
          "label": "Panel Content",
          "type": "richtext",
          "display": "textarea"
        },
        {
          "name": "link_url",
          "label": "Link URL",
          "type": "text",
          "display": "text"
        },
        {
          "name": "link_text",
          "label": "Link Text",
          "type": "text",
          "display": "text",
          "default": "Learn More"
        }
      ]
    }
  ],
  "smart_rules": [
    {
      "name": "panel_count",
      "description": "Number of panels",
      "condition": "equals",
      "value": "{% set panel_count = module.panels | length %}{{ panel_count }}"
    }
  ]
}
```

#### `snap-panels.module/module.css`
```css
/* Snap Panels Module */

.snap-panels {
  width: 100%;
  padding: 2rem 0;
}

.snap-panels__heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-heading, #333);
}

.snap-panels__description {
  font-size: 1rem;
  color: var(--color-text, #666);
  margin-bottom: 2rem;
}

/* Layout Variations */
.snap-panels.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.snap-panels.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.snap-panels.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.snap-panels.stacked { display: flex; flex-direction: column; gap: 1rem; }

/* Individual Panel */
.snap-panel {
  padding: 1.5rem;
  border: 1px solid var(--color-border, #ddd);
  border-radius: 8px;
  background: var(--color-bg-panel, #fff);
  transition: all 0.3s ease;
}

.snap-panel:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.snap-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.snap-panel__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading, #333);
  margin: 0;
}

.snap-panel__icon {
  font-size: 1.5rem;
  color: var(--color-primary, #0052cc);
}

.snap-panel__content {
  color: var(--color-text, #666);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.snap-panel__link {
  display: inline-block;
  color: var(--color-primary, #0052cc);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.snap-panel__link:hover {
  color: var(--color-primary-dark, #003a99);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .snap-panels.grid-2 { grid-template-columns: 1fr; }
  .snap-panels.grid-3 { grid-template-columns: 1fr; }
  .snap-panels.grid-4 { grid-template-columns: repeat(2, 1fr); }
  
  .snap-panel {
    padding: 1rem;
  }
  
  .snap-panel__title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .snap-panels {
    padding: 1rem 0;
  }
  
  .snap-panels.grid-4 { grid-template-columns: 1fr; }
  
  .snap-panel {
    padding: 0.75rem;
  }
}
```

---

## Global Editability Pattern

To make everything globally editable like your screenshot shows, use these Hubspot field types:

### Content Tab Fields
```json
{
  "name": "field_name",
  "label": "Display Label",
  "type": "text|richtext|link|choice|repeater",
  "display": "text|textarea|select|radio|checkbox"
}
```

### Styles Tab Fields (Optional)
```json
{
  "name": "style_background",
  "label": "Background Color",
  "type": "color",
  "default": "#ffffff"
},
{
  "name": "style_padding",
  "label": "Padding",
  "type": "number",
  "suffix": "px",
  "default": 20
}
```

### Smart Rules
```json
{
  "smart_rules": [
    {
      "name": "rule_name",
      "description": "What this does",
      "condition": "field_matches_condition",
      "value": "computed_value"
    }
  ]
}
```

---

## Your Module List

**Please provide the exact names of your custom modules:**

From your screenshot, I see:
- ✓ `snap-panels` (confirmed from your screenshot)
- ? (Other modules...)

**Tell me the others and I'll create complete editable module templates for each one!**

---

## How to Use This Structure

### Step 1: Create Module Locally
Create folder: `snap-panels.module/`
Add files:
- `module.html` (markup with HubL)
- `meta.json` (field definitions)
- `module.css` (optional, but recommended)

### Step 2: Add to Your Hubspot Portal
Use: `npm run hs:upload` to push to portal

### Step 3: Make Globally Editable
- Fields in `meta.json` appear as editable form in Content tab
- Smart rules auto-update based on field changes
- Repeaters let users add/remove items
- Choices create dropdown/radio selections

### Step 4: Use in Templates
Templates reference modules like:
```html
{% module "module_name" %}
```

---

## Next Steps

1. **Tell me your actual module names** - I'll create proper templates
2. **Send me screenshot of module fields** - I'll match the exact structure
3. **Describe how each module should work** - I'll code the full implementation

This way, everything will be fully editable in Hubspot Design Manager globally, just like your "Snap Panels" example! 🎯
