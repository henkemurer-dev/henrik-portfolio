# Henrik portfolio mockup

A dependency-free portfolio prototype built with HTML, CSS and vanilla JavaScript.

## Open locally

Double-click `index.html`.

For the most reliable local setup, use VS Code + the Live Server extension.

## Structure

```text
henrik-portfolio-mockup/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── media/
│       └── README.md
└── work/
    └── absolute-arif/
        └── index.html
```

## Adding a project

1. Duplicate `work/absolute-arif/`.
2. Rename the folder, e.g. `work/julemusikk/`.
3. Replace copy/media.
4. Change the matching home-page project link.
5. Put optimized images/video inside `assets/media/<project-name>/`.

## Recommended media

- Still images: AVIF or WebP.
- Hover loops: short muted MP4/WebM, ideally only a few MB.
- Long films/showreels: Vimeo/YouTube or external media storage.
- Avoid shipping huge source renders directly with the site.

## Next development step

Once the visual direction is approved, this structure can be migrated to Astro:
- one reusable ProjectCard component
- one reusable project-case layout
- project metadata stored in a data file
- automatic project pages
- Cloudflare Pages deployment
