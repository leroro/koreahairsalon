# Build and release audit — 2026-10-28

## Stage 1: environment and repository inspection

- Repository: leroro/koreahairsalon, main.
- Node 22.16.0 and TypeScript CLI 5.8.3 are available in the local working environment.
- The environment cannot resolve registry.npmjs.org. Next.js is not installed locally, so **npm install, npm run build and end-to-end validation have NOT passed**.
- A prior GitHub Actions run was shown as failed by the repository owner. Exact failed job log has not yet been retrieved.
- The last commit changed static route parameter generation, but the change has not been confirmed by a successful build.
- Do not claim the site is deployed until an Actions success and live HTTP response are verified.

## Stage 2: source-site baseline

- Source: https://www.koreahairsalon.kr/en
- Four locales: ko, en, ja, zh.
- Identified routes: locale home; services; services/cut, services/perm, services/color, services/treatment; designers; about; location; faq.
- Service price data was checked against indexed source pages on 2026-10-28.
- Existing homepage contains video/reels, women/men portfolio images, reviews, navigation links and more detailed FAQ not yet recreated.
- Current GitHub implementation is an incomplete preview, not a faithful reproduction.

## Release gates

1. Capture full source inventory and assets; reconcile route count and content.
2. Compile TypeScript and run Next.js production build in a network-enabled environment.
3. Inspect generated out/ files and all locale routes.
4. Check metadata, hreflang, canonical, robots noindex for preview, and basePath.
5. Commit verified build; confirm successful GitHub Pages workflow.
6. Open deployed site and inspect responsive pages, links and images.
