# Quick Start Guide

Get your Kick It Ca + Hubspot integration up and running in 5 steps.

## Step 1: Install Dependencies

```bash
cd /Users/James/KIC2HUB
npm install
```

## Step 2: Authenticate with Hubspot

```bash
npm run hs:auth
```

A browser window will open. Log in to authorize the CLI with your Hubspot account.

## Step 3: Fetch Your Existing Hubspot Build

```bash
npm run hs:fetch
```

This downloads your custom modules, templates, CSS, and JavaScript into the `hubspot/` folder.

## Step 4: Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
- `HUBSPOT_API_KEY` - Get from Hubspot Settings → Integrations → Private Apps
- `KICKITCA_API_URL` - Your Kick It Ca API endpoint
- `KICKITCA_API_KEY` - Your Kick It Ca API key

## Step 5: Start Development

```bash
npm run dev
```

Your integration server is now running on `http://localhost:3000`

---

## Now What?

### Development Workflow

1. **Make changes to Hubspot code locally** in the `hubspot/` folder
2. **Test locally** with `npm run dev`
3. **Commit to Git** when ready:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   ```
4. **Sync to Hubspot** (choose one):
   - Auto-sync on changes: `npm run hs:watch`
   - Manual upload: `npm run hs:upload`
5. **Push to remote**: `git push`

### Quiz Integration

Your About-Us-Page quiz is ready to sync results to Kick It Ca. See [KIC_QUIZ_INTEGRATION.md](./KIC_QUIZ_INTEGRATION.md) for implementation details.

### Available Commands

```bash
npm start              # Start production server
npm run dev            # Start dev server with auto-reload
npm run hs:auth        # Authenticate with Hubspot
npm run hs:fetch       # Fetch Hubspot portal code
npm run hs:watch       # Watch & auto-sync to Hubspot
npm run hs:upload      # Manual upload to Hubspot
npm test               # Run tests
npm run lint           # Run ESLint
```

## Project Structure

```
/Users/James/KIC2HUB/
├── hubspot/                    # Your Hubspot portal code
│   ├── templates/             # Page templates
│   ├── modules/               # Custom modules
│   ├── css/                   # Stylesheets
│   └── js/                    # JavaScript files
├── src/                       # Integration backend
│   ├── index.js              # Express server
│   ├── routes/
│   │   └── quizRoutes.js     # Quiz API endpoints
│   ├── services/
│   │   ├── hubspot.js        # Hubspot API client
│   │   └── kickItCa.js       # Kick It Ca API client
│   └── quiz-integration.js   # Client-side quiz tracker
├── package.json              # Dependencies & scripts
├── .env                      # Environment variables (create from .env.example)
├── README.md                 # Full documentation
├── KIC_QUIZ_INTEGRATION.md   # Quiz integration guide
└── .gitignore               # Git ignore rules
```

## Troubleshooting

**"Command not found: hs"**
- Run `npm install` to install Hubspot CLI locally

**"Not authenticated with Hubspot"**
- Run `npm run hs:auth` to authenticate

**"Cannot find module 'express'"**
- Run `npm install` to install dependencies

**Port 3000 already in use?**
- Change PORT in `.env`: `PORT=3001`
- Or kill the process: `lsof -ti:3000 | xargs kill -9`

## Resources

- [Hubspot CLI Documentation](https://developers.hubspot.com/docs/cms/developer-reference/local-development)
- [Kick It Ca Integration Details](./KIC_QUIZ_INTEGRATION.md)
- [Full README](./README.md)

---

**Ready to get started?** Run: `npm install && npm run dev`
