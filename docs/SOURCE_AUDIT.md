# Existing site content audit
Date: 2026-10-28
Original: https://www.koreahairsalon.kr
Status: **partial evidence-based inventory**, not a full browser crawl.

## Homepage sections observed
1. Hero: JUNO HAIR / SINCE 1982, Gangnam premium salon, Gangnam Station Exit 4, 3-minute walk, 10:00–20:30 daily.
2. Reels/video salon section (clearly present on Korean home).
3. Service and price overview: Cut & Styling (4), Perm (6), Color (4), Treatment & Scalp Care (6), total 20 listed services.
4. Designers: 10 members with roles and specializations; individual social/profile links need inspection.
5. Brand story: 1982 founding, Gangnam Woosung Intersection, director Im Chong.
6. Portfolio: 8 women's hairstyle images and 8 men's hairstyle images in English homepage text; actual asset URLs and dimensions not yet captured.
7. Directions/location: SM Tower 2F, 334 Gangnam-daero, Seoul, phone 02-537-0605, email junogn3@naver.com, Google/Naver directions, transit and parking.
8. Google review section: score and review snippets displayed on source; must verify whether embedded, fetched, or static, and licensing/attribution before reproducing.
9. Booking CTA: phone, Naver, Instagram; FAQ also mentions WhatsApp and LINE.
10. FAQ: reservation, directions, hours, language support, scalp treatment, parking, discovery/search question.

## Service inventory (KRW; ~ means starting price)
| Category | Service (English) | Price |
| --- | --- | ---: |
| Cut | Cut | 35,000~ |
| Cut | Blow Dry | 35,000~ |
| Cut | Styling | 25,000~ |
| Cut | Shampoo | 20,000~ |
| Perm | Design Perm | 198,000~ |
| Perm | Basic Women's Perm | 198,000~ |
| Perm | Basic Men's Perm | 158,000~ |
| Perm | Digital / Setting Perm | 250,000~ |
| Perm | Volume Magic (Women) | 250,000~ |
| Perm | Root Perm | 120,000~ |
| Color | Root Color | 90,000~ |
| Color | Personal Color | 150,000~ |
| Color | Design Color (Ombré/Highlight) | 200,000~ |
| Color | Bleach | 160,000~ |
| Care | Signature Treatment | 128,000 |
| Care | Premium Treatment | 198,000 |
| Care | Rebuild Care | 220,000~ |
| Care | Hinoki Scalp Clinic | 158,000 |
| Care | Head Spa | 198,000 |
| Care | Head Spa Plus | 238,000 |

Membership displayed: BLACK 20%, RED 15%, BLUE 10%, exclusions for cut/dry/partial services. Verify current terms before launch.

## Designer names from English homepage
Im Chong (Director), Noah (Deputy Director), Yuri (Deputy Director), Hankyeol (Chief Stylist), Haneul (Chief Stylist), Sugyeong (Chief Stylist), Soyeon (Chief Stylist), Jenny (Designer), Jiyeon (Designer), Gangsan (Chief Stylist). Source also lists individual specialties. Verify photos and Instagram links.

## Locale/content observations
- /ko: Korean page; prominent reels section.
- /en: English page; includes hair salon near me, scalp treatment seoul, 美容院 phrases.
- /ja: Japanese page; at least homepage and FAQ indexed.
- /zh: Traditional Chinese wording (e.g., 髮, 燙, 預約). **Current repository zh content is simplified Chinese and needs correction.**
- FAQ inconsistency: Japanese FAQ search excerpt mentions Gangnam Exit 11 in one answer while homepage says Exit 4. Resolve against business source before replication.

## Important implementation gaps
- Current preview omits reels, portfolio photos, review section and original outbound booking links.
- Current preview contains shortened FAQ, simplified Chinese translations, invented marketing wording and incomplete metadata.
- Exact image and video file URLs, typography, layout geometry, responsive behavior, menu states and accessibility require browser inspection.
- Existing source may contain more pages than the 10 route patterns currently assumed. No claim of full crawl.
- Metadata on preview must not use the live domain as its canonical while preview is noindex; check behavior before release.

## Evidence URLs
- https://www.koreahairsalon.kr/en
- https://www.koreahairsalon.kr/ko
- https://www.koreahairsalon.kr/ja
- https://www.koreahairsalon.kr/zh
- https://www.koreahairsalon.kr/en/services
- https://www.koreahairsalon.kr/en/services/perm
- https://www.koreahairsalon.kr/en/services/color
- https://www.koreahairsalon.kr/en/services/treatment
- https://www.koreahairsalon.kr/en/faq
- https://www.koreahairsalon.kr/ja/faq

## Next audit tasks
1. Obtain original sitemap.xml and robots.txt or perform complete internal-link crawl.
2. Enumerate all distinct URLs including query strings and alternate language paths.
3. Capture full HTML metadata and heading structure per URL.
4. Inventory media with original paths, alt text, usage rights and dimensions.
5. Capture mobile/desktop screenshots and interactions.
6. Compare every source page against rebuilt preview and record gaps.
