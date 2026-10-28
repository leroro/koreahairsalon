# 다국어 SEO 및 배포 경로

원본 84개 페이지의 title, description, keywords, OG, Twitter 메타데이터, canonical, hreflang과 JSON-LD를 조사했다. 원본 값은 `source/inventory.json`과 `lib/source-pages.json`에서 확인할 수 있다.

복제본은 Next.js 정적 HTML로 각 페이지의 본문, 제목, 설명, 헤딩, JSON-LD를 생성한다. 서버 없이 직접 URL 진입이 가능하다. 언어별 html lang은 ko-KR, en, ja, zh-Hant이며 각 언어 본문의 원본 lang도 보존한다.

GitHub Pages의 프로젝트 경로 `/koreahairsalon`과 디렉터리형 URL의 마지막 슬래시를 사용한다. canonical과 hreflang은 복제본 주소를 가리킨다. 원본의 브랜드 식별자와 JSON-LD 내 사업장 URL은 원본을 유지한다.

현재 배포는 검토용 복제본으로 noindex,nofollow를 유지한다. 이는 기존 저장소의 정책을 보존한 것이며 운영 도메인의 검색 노출을 중복시키지 않기 위한 설정이다. 원본 도메인 이전·DNS 변경은 수행하지 않는다. 실제 운영 전환 시 도메인 확정, 색인 허용, canonical 및 sitemap 도메인 변경, 기존 URL 리디렉션을 함께 검토해야 한다.

원본과 동일한 SEO 문구에 있는 반복 키워드, 리뷰 점수, 상대 날짜, 다국어 내 위치 설명 불일치는 임의로 수정하지 않았다. 향후 콘텐츠 교정은 사실 확인 후 별도 진행한다.
