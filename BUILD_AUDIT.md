# 빌드 검증

최신 검증 결과는 [docs/VALIDATION.md](docs/VALIDATION.md)를 참고한다.

기존 GitHub Actions run 40632884839는 `/robots.txt` 경로에 정적 생성 선언이 없어 실패했다. `app/robots.ts`에 `dynamic = 'force-static'`을 추가하여 해결했다.

빌드와 출력 검증은 `npm run build:check`로 함께 실행한다. CI는 검사 실패 시 배포하지 않는다.
