# Korea Hair Salon — JUNO HAIR Gangnam Woosung

Rebuild of https://www.koreahairsalon.kr, under personal GitHub account `leroro`.

> **Status: research and incomplete preview.** Do not consider this a verified clone or a production replacement. Next.js build and GitHub Pages deployment have not been confirmed successful.

## Documentation / 분석 자료
- [Original-site sitemap and URL matrix](docs/SITEMAP.md) — 언어별 사이트맵, 확인 여부, URL 구조
- [Source website content audit](docs/SOURCE_AUDIT.md) — 홈 섹션, 서비스 가격, 디자이너, 이미지·리뷰·FAQ, 누락 사항
- [SEO migration plan](docs/SEO_MIGRATION.md) — canonical, hreflang, sitemap.xml, 리디렉션, 검색 이전
- [Build and release audit](BUILD_AUDIT.md) — 검증 상태 및 배포 통과 기준
- [Initial SEO checklist](SEO_AUDIT.md)

## Working sitemap (not a verified full crawl)
```text
/{locale}/                   Home
/{locale}/services/          All services
/{locale}/services/cut/      Cut & styling
/{locale}/services/perm/     Perm
/{locale}/services/color/    Color
/{locale}/services/treatment/ Treatment & scalp care
/{locale}/designers/         Team
/{locale}/about/             Brand
/{locale}/location/          Directions
/{locale}/faq/               FAQ
```
Locales: `ko`, `en`, `ja`, `zh`. This is the current implementation's 10 route patterns × 4 languages, **not evidence that all 40 original URLs exist**. Consult the sitemap matrix for independently confirmed paths.

## Development
```bash
npm install
npm run dev
npm run build
```
Build is not yet verified. Static export uses Next.js and `basePath: '/koreahairsalon'`.

## Preview
Expected URL after successful GitHub Pages deployment: https://leroro.github.io/koreahairsalon/

GitHub Pages source must be **GitHub Actions**. The preview is intentionally noindex. Verify deployment before sharing as working.

## Release requirements
Complete the full source crawl, capture licensed original assets, reconcile 4-language copy, verify local build, audit SEO and mobile, and confirm live Pages response before production cutover.
