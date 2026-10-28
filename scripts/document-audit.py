from pathlib import Path
import json,re
R=Path(__file__).resolve().parents[1];records=json.loads((R/'docs/source/inventory.json').read_text())
md=['# 원본 사이트 전체 URL 조사','', '조사일 2026-10-28 · 원본 https://www.koreahairsalon.kr', '', '원본 XML 사이트맵 84개 URL과 HTML 내부 링크를 크롤링했다. 4개 언어 각각 21개 페이지이며 모두 HTTP 200이다. 사이트맵 외 추가 페이지는 발견되지 않았다. 이는 공개 사이트맵과 링크 기준이며 링크되지 않은 숨은 URL까지 존재하지 않는다는 뜻은 아니다.', '', '| URL | HTTP | 제목 | 이미지 수 |', '| --- | --- | --- | --- |']
for p in sorted(records,key=lambda x:x['path']):md.append(f"| [{p['path']}]({p['url']}) | {p['status']} | {' '.join(p['title']).replace('|','／')} | {len(p['images'])} |")
md+=['','원본 XML은 `source/sitemap.xml`, 원본 robots는 `source/robots.txt`, 페이지별 전체 본문·제목·메타태그·헤딩·링크·이미지·미디어는 `source/inventory.json`에 저장했다.','', '기존 문서에 추정했던 `/about`, `/location`은 실제 사이트맵 경로가 아니다. 브랜드 소개는 홈의 `#story`, 방문 안내는 `/visit`이다. 디자이너 목록과 10개 개인 페이지, 갤러리, 리뷰를 누락 없이 포함했다.']
(R/'docs/SITEMAP.md').write_text('\n'.join(md)+'\n')
