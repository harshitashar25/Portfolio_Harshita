# Harshita Sharma — Portfolio

A frontend-only, static portfolio for an AI / Software Engineer: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion. No backend, no database, no server-side code.

Live: https://harshitashar25.netlify.app/

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build
```

Requires Node 18+ (Node 20 recommended).

## Deploy on Netlify

`netlify.toml` is already configured (build `npm run build`, publish `dist`, SPA fallback).

1. Push this branch / merge to `main`.
2. In Netlify: **Add new site → Import from Git**, choose the repo. Settings are read from `netlify.toml`.
   If you are re-using the existing `harshitashar25` site, update its **Base directory** to empty (the app is now at the repo root, not `client/`) and remove any server/env settings.
3. Deploy. No environment variables are needed.

## Where the content lives

All copy is in typed static files under `src/data/`; components only render it.

| File | Contents |
| --- | --- |
| `profile.ts` | Identity, links, summary, stats, philosophy |
| `experience.ts` | Internship case studies |
| `projects.ts` | Project case studies, architecture diagrams, MacMind permission model, “lab notes” |
| `skills.ts` | Skill clusters and the system-diagram lanes |
| `achievements.ts` | Hackathons, scholarship, certification |

Other pieces: `src/lib/github.ts` (browser-side GitHub public API + localStorage cache + static fallback snapshot), `src/components/Doodles.tsx` (all hand-drawn SVG illustrations), `public/` (resume PDF, favicon, OG image, robots, sitemap).

## Notes

- The resume is `public/Harshita_Sharma_Resume.pdf`. Replace the file (keep the name) to update the download.
- Contact uses a `mailto:` link and a copy-to-clipboard button — there is no form backend.
- The GitHub section calls the public GitHub API from the browser (no token). If it is rate-limited or offline it falls back to an audited snapshot. The contribution calendar uses a public mirror (`github-contributions-api.jogruber.de`) and simply hides itself if unavailable.
- The previous Express/MongoDB server and the old `client/` app were removed from the working tree; they remain in Git history.
