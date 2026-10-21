# Henrik Portfolio — Cloudflare-ready

This version is structured for Cloudflare Workers static assets.

## Repository structure

```text
henrik-portfolio/
├── public/
│   ├── index.html
│   ├── assets/
│   └── work/
├── wrangler.jsonc
├── .gitignore
└── README.md
```

## Cloudflare deploy command

```bash
npx wrangler deploy
```

Wrangler reads `wrangler.jsonc` and deploys only the `public/` directory.


## v2 changes
- More restrained hero scaling on wide displays.
- Contact navigation now scrolls to an on-page contact section.
- Email and phone rows copy to clipboard instead of opening external apps.
