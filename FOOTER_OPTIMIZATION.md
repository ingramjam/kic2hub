# Footer Optimization Plan

## Current Footer Structure
- **Location**: `/hubspot/templates/templates/partials/footer.html`
- **Files to Update**:
  - `/hubspot/templates/css/components/_footer.css` (main footer styles)
  - `/hubspot/templates/css/theme-overrides.css` (theme variables for footer)
  - `/hubspot/templates/templates/partials/footer.html` (HTML structure)

## Current Footer Issues
1. **Layout**: Using old Bootstrap grid (col-md-5, col-md-6)
2. **Spacing**: Inconsistent padding (50px 0px 20px)
3. **Typography**: Basic font sizes, limited hierarchy
4. **Social Icons**: Small, basic styling
5. **Copyright**: Centered, minimal styling
6. **Menu**: Inline display, basic styling

## Footer Components
1. **Logo Section** - Dark-logo-small.png with contact text
2. **Menu Section** - "About Us" heading with footer menu
3. **Social Icons** - Facebook, LinkedIn, Twitter, Instagram
4. **Copyright** - Year and rights reserved text

## Improvements Needed
- [ ] Modern grid layout (CSS Grid or Flexbox)
- [ ] Better typography hierarchy
- [ ] Improved spacing and padding
- [ ] Professional social icon styling
- [ ] Responsive design improvements
- [ ] Brand color integration
- [ ] Better link states (hover, focus, active)
- [ ] Accessibility improvements

## Next Steps
1. Review current footer on live site
2. Decide on new layout approach
3. Update HTML structure if needed
4. Update CSS styling
5. Test responsive behavior
6. Upload and commit changes
