# Kick It Ca to Hubspot Integration

## Overview

This project manages your Hubspot custom build (modules, templates, CSS, JS) alongside a Kick It Ca integration system. The code is version-controlled in Git and synced to your Hubspot portal using the Hubspot CLI.

## Project Structure

```
/
├── hubspot/                    # Hubspot portal code (synced via CLI)
│   ├── modules/               # Custom modules
│   ├── templates/             # Custom templates
│   ├── css/                   # Custom CSS files
│   └── js/                    # Custom JavaScript files
├── src/                       # Integration code & utilities
│   ├── index.js
│   └── services/
├── package.json               # Dependencies & CLI commands
├── .env.example               # Environment variables template
└── README.md
```

## Setup Instructions

### 1. Authenticate with Hubspot

First, authenticate your Hubspot account with the CLI:

```bash
npm run hs:auth
```

This will open a browser window for you to authorize the CLI with your Hubspot account.

### 2. Fetch Your Existing Hubspot Code

Pull your existing custom modules, templates, and code from Hubspot:

```bash
npm run hs:fetch
```

This will download everything into a `hubspot/` folder with your portal structure.

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Update `.env` with your API keys:
- `HUBSPOT_API_KEY` - Your Hubspot API key
- `KICKITCA_API_URL` - Kick It Ca API endpoint
- `KICKITCA_API_KEY` - Kick It Ca API key

### 4. Install Dependencies

```bash
npm install
```

## Development Workflow

### Working with Hubspot Code

#### Watch for Changes (Auto-sync to Hubspot)
```bash
npm run hs:watch
```
This watches your local files and automatically uploads changes to Hubspot.

#### Manual Upload
```bash
npm run hs:upload
```

#### Manual Fetch
```bash
npm run hs:fetch
```

### Running the Integration Server

```bash
npm run dev
```

Starts the development server with auto-reload for your integration code.

## Git Workflow

All your Hubspot code is now version-controlled. Recommended workflow:

```bash
# Make changes locally
# ...

# Commit to Git
git add .
git commit -m "Update: description of changes"

# Sync to Hubspot (watch mode or manual upload)
npm run hs:watch
# or
npm run hs:upload

# Push to remote
git push
```

## Next Steps

1. ✅ Set up Hubspot CLI authentication
2. ✅ Fetch your existing Hubspot code
3. ⏳ Configure Kick It Ca integration
4. ⏳ Set up data sync between Kick It Ca and Hubspot

## Resources

- [Hubspot CLI Docs](https://developers.hubspot.com/docs/cms/developer-reference/local-development)
- [Hubspot API Reference](https://developers.hubspot.com/docs/api)

## License

MIT
