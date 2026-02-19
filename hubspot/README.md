# Existing Hubspot Build

This directory will contain your existing Hubspot custom build code fetched via the Hubspot CLI.

## What's Included

- **Templates/** - Your custom page templates (e.g., About-Us-Page.html)
- **Modules/** - Custom Hubspot modules
- **CSS/** - Custom stylesheets (e.g., new_kic_ji.css)
- **JS/** - Custom JavaScript files and page-specific scripts

## Current Pages & Features

### About-Us-Page.html
- Custom CSS: `custom/system/css/new_kic_ji.css`
- Advanced quiz functionality with scoring system
- Theme switching (light/dark mode)
- Scroll animations
- Global navigation utilities
- Year auto-update in footer

## Fetching Your Code

To pull your existing Hubspot build into this directory, run:

```bash
npm run hs:fetch
```

This will maintain your portal's folder structure and make all code available locally.

## Syncing Back to Hubspot

After making changes, sync back to your portal:

```bash
# Watch mode - auto-syncs on file changes
npm run hs:watch

# Manual upload
npm run hs:upload
```
