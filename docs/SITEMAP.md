# Source website sitemap — research inventory
Audit date: 2026-10-28. Source: https://www.koreahairsalon.kr

## Language roots confirmed from search-indexed content
- /ko — Korean
- /en — English
- /ja — Japanese
- /zh — Chinese (source uses Traditional Chinese phrasing, not simplified)

## Route matrix
Legend: V = indexed URL/content observed; P = expected from shared site navigation or implementation, not independently verified.

| Route suffix | ko | en | ja | zh | Purpose |
| --- | --- | --- | --- | --- | --- |
| / | V | V | V | V | Homepage: hero, reels, services, team, portfolio, location, reviews, FAQ |
| /services | V | V | P | P | Full price menu |
| /services/cut | P | P | P | P | Cut and styling |
| /services/perm | P | V | P | P | Perm prices |
| /services/color | P | V | P | P | Color and bleach prices |
| /services/treatment | P | V | P | P | Treatment and scalp care |
| /designers | P | P | P | P | Team overview |
| /about | P | P | P | P | Brand introduction |
| /location | P | P | P | P | Access and contact |
| /faq | P | V | V | P | FAQs |

**Do not interpret the 40 matrix cells as 40 confirmed live URLs.** This is a working hypothesis to verify via source links, original sitemap and direct HTTP checks. More routes may exist.

## Information architecture
Home → Services → Cut / Perm / Color / Treatment
Home → Designers
Home → About
Home → Location
Home → FAQ
Global language switch: ko / en / ja / zh

## Source checks and limitations
- Verified indexed URLs: https://www.koreahairsalon.kr/en, /ko, /ja, /zh, /en/services, /ko/services, /en/services/perm, /en/services/color, /en/services/treatment, /en/faq, /ja/faq.
- Attempts to fetch https://koreahairsalon.kr/sitemap.xml failed through the available browser source; its presence/content are **unknown**.
- The complete internal-link graph, robots.txt, canonical, hreflang, redirects and asset URLs are **not yet inspected**.
- Existing source paths omit trailing slash; preview uses Next.js trailingSlash=true. Production migration must preserve or redirect old paths.
- Source URL mapping must be completed before replacing the production site.
