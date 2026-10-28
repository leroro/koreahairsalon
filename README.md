# koreahairsalon

준오헤어 강남우성사거리점 원본 사이트를 Next.js 정적 사이트로 이식하는 프로젝트다.

[GitHub Pages](https://leroro.github.io/koreahairsalon/ko/) · [원본](https://www.koreahairsalon.kr/ko)

## 구현 범위

2026-10-28 원본 사이트맵 및 내부 링크 기준으로 84개 URL을 수집했다. 국문·영문·일문·중문 각각 21개 페이지를 생성하며 원본 번체 중국어, 사진, 영상, 폰트, 디자인, 본문을 보존한다. 상세 경로에는 서비스 4개, 디자이너 개인 소개 10개, 갤러리, 방문 안내, 리뷰, FAQ가 포함된다.

예약·문의 채널 메뉴, 모바일 탐색 메뉴, FAQ, 릴스 재생·음소거·가로 이동, 메인 사진 전환, 지도 링크와 언어 전환을 지원한다. 실제 예약 접수·메시지 전송·회원·관리자 기능은 원본과 마찬가지로 이 사이트에서 처리하지 않는다.

## 실행

Node.js 22 이상에서 아래 명령을 실행한다.

```sh
npm ci
npm run dev
npm run build:check
```

개발 주소는 `http://localhost:3000/koreahairsalon/ko/`다. 배포 결과는 `out/`에 생성된다. 빌드는 저장된 콘텐츠와 자산을 사용하므로 원본 사이트에 접속하지 않는다.

```sh
BUILD_LOCALES=ko npm run build:check
BUILD_LOCALES=ko,en npm run build:check
BUILD_LOCALES=ko,en,ja npm run build:check
npm run build:check
```

Windows PowerShell에서는 `$env:BUILD_LOCALES="ko"`로 환경변수를 지정한다. 마지막에는 `Remove-Item Env:BUILD_LOCALES`로 전체 언어 빌드를 실행한다.

## 문서와 데이터

- [원본 콘텐츠·기능 분석](docs/SOURCE_AUDIT.md)
- [실제 84개 URL 사이트맵](docs/SITEMAP.md)
- [다국어 SEO 및 배포 정책](docs/SEO_MIGRATION.md)
- [검증 결과](docs/VALIDATION.md)
- [남은 제한 사항](docs/IMPLEMENTATION_GAPS.md)
- `docs/source/` 원본 XML·robots·페이지별 본문·메타데이터·이미지 목록
- `lib/source-pages.json` Next.js에서 렌더링하는 원본 추출 데이터
- `public/source-assets/` 로컬 이미지·영상·CSS·폰트
- `scripts/` 수집·변환·사이트맵 생성·출력 검증 도구

## 배포

main에 푸시하면 GitHub Actions에서 `npm ci`, `npm run build:check`를 실행한다. 성공한 `out/`만 GitHub Pages에 업로드·배포한다. 빌드나 검증 실패 시 배포 작업은 진행하지 않는다.

GitHub Pages는 검토용 복제본이다. 기존 정책대로 noindex를 유지하며 운영 도메인·DNS를 변경하지 않는다. 원본 서버의 React 소스를 확보한 것은 아니며, 원본 서버 렌더링 HTML을 보존하고 상호작용을 별도로 구현한 방식이다. 기능 차이와 실제 검증 상태는 위 문서에서 명시한다.
