# Implementation gap register (2026-10-28)

## Source-access verification
Attempted direct requests to /ko and /sitemap.xml and preview /ko using available web reader. All returned inaccessible/cache-miss; no complete crawl or media download could be performed. **Do not call the sitemap exhaustive.**

## Repository code review
- `app/[locale]/[[...slug]]/page.tsx` renders 10 route patterns from one generic template.
- `lib/content.ts` holds hard-coded locale strings and price arrays.
- Original hero images, designer portraits, portfolios, reels and review widgets are absent.
- Current Chinese content uses Simplified Chinese; source appears Traditional Chinese.
- Existing preview metadata alternates link to the production host despite preview noindex.
- `next.config.ts` exports static files to `/koreahairsalon` base path.
- `package.json` has no typecheck or test scripts and no lockfile confirmed.
- Build status and Pages publication are unverified.

## Priority and gates
P0: obtain a successful reproducible build and retrieve Actions failure log; verify generated static route paths.
P1: full source URL/link crawl; download/verify image and video assets and permissions.
P2: build pixel-accurate Korean site from captured references; verify all links and mobile behavior.
P3: translate and validate EN, JA, Traditional Chinese with locale-specific URLs.
P4: metadata, hreflang, robots, XML sitemap, accessibility, link validation.
P5: deploy, verify actual HTTPS response, capture screenshots and document deviations.

**Blocked:** original website pages and XML sitemap inaccessible in current web reader. Build tooling dependency installation also unavailable locally. This document records observed limitations rather than claiming completion.
