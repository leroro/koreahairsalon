# SEO and migration plan
Status: not implemented / not verified.

## Before cutover
- Extract full original URL list, titles, descriptions, H1, canonical, robots, structured data, image alt text and hreflang.
- Verify whether original canonical host is www.koreahairsalon.kr and whether paths are slashless.
- Map every old URL to the equivalent new URL. Preserve URLs where possible; use 301 redirects otherwise.
- Preserve search content intentionally; do not invent keyword stuffing.
- Keep GitHub Pages preview noindex. Confirm HTTP response and rendered meta robots.
- Do not submit preview sitemap to search engines.

## Production release
- Use actual production hostname for canonical and hreflang (never point preview alternates to unverified routes).
- Include self-referential canonical and reciprocal hreflang for ko, en, ja, zh and optionally x-default.
- Generate XML sitemap from confirmed canonical production URLs only.
- Check language-region and Traditional Chinese tagging.
- Validate structured data for salon/location using sourced business details.
- Audit internal links, image loading, accessibility, redirects and Core Web Vitals.
- Submit production sitemap to Google Search Console and Naver Search Advisor after cutover.

## Known blocker
Original sitemap.xml could not be fetched using available browser source, so the full indexed URL inventory is not confirmed.
