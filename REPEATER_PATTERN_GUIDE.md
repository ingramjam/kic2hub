# Hubspot Module Repeater Pattern Guide

## Overview
This guide documents how to convert static grouped fields (testimonial_1, testimonial_2, testimonial_3) into dynamic repeating groups that allow unlimited items in Hubspot Design Manager.

## Why Use Repeaters?

**Static Groups (Current):**
- Fixed number of items (e.g., 3 testimonials, 4 cards)
- Requires duplicating HTML for each item
- Harder to maintain
- No flexibility for users

**Repeating Groups (Goal):**
- Users can add/remove items dynamically
- Single template handles all items via loop
- Cleaner, more maintainable code
- Professional, modern Design Manager UX

---

## Step-by-Step Conversion Process

### 1. **Identify Your Module Structure**

Example: KICA-Testimonials with 3 static items
```json
{
  "name": "testimonial_1",
  "label": "Testimonial 1",
  "type": "group",
  "children": [
    { "name": "quote", "label": "Quote", "type": "richtext" },
    { "name": "author_info", "label": "Author", "type": "text" },
    { "name": "author_image", "label": "Image", "type": "image" }
  ]
}
```

### 2. **Convert to Repeater in fields.json**

**Change these properties:**
```json
{
  "name": "testimonials",           // Rename to plural
  "label": "Testimonials",
  "type": "repeater",               // Change from "group" to "repeater"
  "occurrence": {
    "min": 1,                        // Minimum items required
    "max": null                      // No limit (null = unlimited)
  },
  "children": [
    // Keep all the same child fields
  ]
}
```

**Key differences:**
- `type: "repeater"` instead of `type: "group"`
- Add `occurrence` object with `min` and `max`
- Fields inside `children` array remain unchanged
- Remove `tab` property (repeaters don't use tabs)
- Remove `group_occurrence_meta`

### 3. **Update Template (module.html)**

**Before (Static Loop):**
```html
{% if module.testimonial_1.quote %}
    <div class="card">
        <p>{{ module.testimonial_1.quote }}</p>
        <p>{{ module.testimonial_1.author_info }}</p>
    </div>
{% endif %}

{% if module.testimonial_2.quote %}
    <!-- Repeat same HTML -->
{% endif %}

{% if module.testimonial_3.quote %}
    <!-- Repeat same HTML -->
{% endif %}
```

**After (Dynamic Loop):**
```html
{% if module.testimonials %}
    {% for testimonial in module.testimonials %}
        {% if testimonial.quote %}
            <div class="card">
                <p>{{ testimonial.quote }}</p>
                <p>{{ testimonial.author_info }}</p>
            </div>
        {% endif %}
    {% endfor %}
{% endif %}
```

**Benefits:**
- ✅ Single template for all items
- ✅ Works with any number of testimonials
- ✅ Less code duplication
- ✅ Easier to update styling

### 4. **Update JavaScript (module.js) - If Needed**

**Before (Targeting specific items):**
```javascript
const video1 = moduleElement.querySelector('[data-module-id="{{name}}"] .testimonial-1-video');
const video2 = moduleElement.querySelector('[data-module-id="{{name}}"] .testimonial-2-video');
// etc...
```

**After (Dynamic selector):**
```javascript
const videos = moduleElement.querySelectorAll('.testimonial-video');
videos.forEach(video => {
    // Apply logic to each video
    video.autoplay = true;
});
```

---

## Modules Ready for Conversion

### 1. **KICA-Testimonials** ✅ (Ready)
- **Current:** testimonial_1, testimonial_2, testimonial_3
- **Fields per testimonial:** quote, author_info, author_image, video_url, autoplay
- **Suggested min:** 1
- **Suggested max:** null (unlimited)

### 2. **KICA-4-Card**
- **Current:** card_1, card_2, card_3, card_4
- **Fields per card:** headline, icon_class, description, link, background_color
- **Suggested min:** 1
- **Suggested max:** null or maybe 6

### 3. **KICA-3-Step-Plan**
- **Current:** step_1, step_2, step_3
- **Fields per step:** front_image, step_title, back_text
- **Suggested min:** 1
- **Suggested max:** null

### 4. **KICA-Snap-Scroll**
- **Current:** panel_1, panel_2, panel_3, panel_4, panel_5 (varies)
- **Fields per panel:** about, button_link, button_text, description, headline
- **Suggested min:** 1
- **Suggested max:** null (already uses many panels)

### 5. **KICA - Video Feature**
- **Current:** Single item (no repeater needed)
- **Status:** Skip - not suitable for repeater

### 6. **Interactive Quit Planner**
- **Current:** Empty fields.json
- **Status:** Review after content is added

---

## JSON Structure Reference

### Repeater Field Template
```json
{
  "id": "unique-uuid-here",
  "name": "items",                    // plural name
  "label": "Items",                   // User-friendly label
  "required": false,
  "locked": false,
  "type": "repeater",                 // Key: "repeater" not "group"
  "display_width": null,
  "occurrence": {
    "min": 1,                         // At least 1 item
    "max": null                       // Unlimited (or set number)
  },
  "children": [
    {
      "id": "field-id-1",
      "name": "fieldName",
      "label": "Field Label",
      "type": "text",                 // Any field type
      "required": false,
      "locked": false,
      "display_width": null
    }
    // ... more child fields
  ]
}
```

### Occurrence Options

| max value | Behavior |
|-----------|----------|
| `null` | Unlimited items (most flexible) |
| `6` | Maximum 6 items |
| `1` | Only 1 item (effectively static) |

---

## HubL Loop Syntax

### Basic Loop
```html
{% for item in module.items %}
    <!-- item.fieldName accesses child fields -->
    <p>{{ item.fieldName }}</p>
{% endfor %}
```

### Conditional Loop
```html
{% if module.items %}
    {% for item in module.items %}
        {% if item.quote %}  <!-- Only render if field has content -->
            <div>{{ item.quote }}</div>
        {% endif %}
    {% endfor %}
{% endif %}
```

### Loop Counter
```html
{% for item in module.items %}
    <div class="item-{{ loop.index }}">  <!-- 1, 2, 3... -->
        {{ item.name }}
    </div>
{% endfor %}
```

### Reverse Loop
```html
{% for item in module.items | reverse %}
    <p>{{ item.name }}</p>
{% endfor %}
```

---

## Troubleshooting

### Issue: Hubspot won't accept the repeater JSON
**Solution:**
- Ensure `type: "repeater"` (not "group")
- Verify `occurrence` object exists with `min` and `max`
- Remove `tab`, `group_occurrence_meta`, `expanded` properties
- Validate JSON syntax with `python3 -m json.tool fields.json`

### Issue: Template shows nothing
**Solution:**
- Check loop variable matches: `module.testimonials` (repeater name)
- Verify `{% for testimonial in module.testimonials %}` syntax
- Ensure field access uses loop variable: `testimonial.fieldName` (not `module.testimonial.fieldName`)
- Add debug: `{{ module.testimonials | json }}` to see actual data

### Issue: Old static version still showing in Design Manager
**Solution:**
- Hard refresh: Cmd+Shift+R (or Ctrl+Shift+R)
- Check published vs draft version
- Verify upload was successful: check Hubspot CLI output
- Re-upload module: `hs cms upload --src [path] --dest /[module]`

---

## Performance Considerations

**Repeaters can handle:**
- ✅ 50+ items without performance issues (for most cases)
- ✅ Dynamic add/remove operations
- ✅ Drag-to-reorder functionality (in Design Manager)

**Optimization tips:**
- Lazy-load images in items if > 20 items
- Use CSS classes for styling instead of inline styles
- Cache jQuery selectors in JavaScript
- Limit excessive DOM manipulation

---

## Implementation Timeline

### Phase 1: Documentation & Testing (Current)
- ✅ Create this guide
- ⏳ Test repeater conversion in dev module

### Phase 2: KICA-Testimonials
- ⏳ Convert to repeater
- ⏳ Test in Design Manager
- ⏳ Update Git

### Phase 3: KICA-4-Card
- ⏳ Convert to repeater
- ⏳ Test scrolling with many cards
- ⏳ Update Git

### Phase 4: KICA-3-Step-Plan & KICA-Snap-Scroll
- ⏳ Convert both
- ⏳ Final testing
- ⏳ Deploy

---

## Example: Complete Repeater Conversion

### Before (fields.json - Static)
```json
[
  {
    "name": "testimonial_1",
    "type": "group",
    "children": [
      { "name": "quote", "type": "richtext" },
      { "name": "author", "type": "text" }
    ]
  },
  {
    "name": "testimonial_2",
    "type": "group",
    "children": [
      { "name": "quote", "type": "richtext" },
      { "name": "author", "type": "text" }
    ]
  },
  {
    "name": "testimonial_3",
    "type": "group",
    "children": [
      { "name": "quote", "type": "richtext" },
      { "name": "author", "type": "text" }
    ]
  }
]
```

### After (fields.json - Repeater)
```json
[
  {
    "name": "testimonials",
    "label": "Testimonials",
    "type": "repeater",
    "occurrence": { "min": 1, "max": null },
    "children": [
      { "name": "quote", "label": "Quote", "type": "richtext" },
      { "name": "author", "label": "Author", "type": "text" }
    ]
  }
]
```

### Before (module.html - Static)
```html
{% if module.testimonial_1.quote %}
    <div>{{ module.testimonial_1.quote }}<br>{{ module.testimonial_1.author }}</div>
{% endif %}
{% if module.testimonial_2.quote %}
    <div>{{ module.testimonial_2.quote }}<br>{{ module.testimonial_2.author }}</div>
{% endif %}
{% if module.testimonial_3.quote %}
    <div>{{ module.testimonial_3.quote }}<br>{{ module.testimonial_3.author }}</div>
{% endif %}
```

### After (module.html - Repeater)
```html
{% for testimonial in module.testimonials %}
    {% if testimonial.quote %}
        <div>{{ testimonial.quote }}<br>{{ testimonial.author }}</div>
    {% endif %}
{% endfor %}
```

---

## References

- [Hubspot Custom Modules Documentation](https://developers.hubspot.com/docs/cms/building-blocks/modules)
- [HubL Templating Language Guide](https://developers.hubspot.com/docs/cms/hubl/intro)
- [Repeater Field Type](https://developers.hubspot.com/docs/cms/building-blocks/fields/repeater)

