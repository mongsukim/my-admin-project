# Admin Dashboard

관리자 대시보드 프로젝트

## 📚 기술 스택

| 카테고리 | 기술 스택 | 용도/이유 |
|---------|----------|-----------|
| **프레임워크** | React 18 + TypeScript | UI 구축, 타입 안정성 |
| **빌드 툴** | Vite | 빠른 개발 서버, HMR |
| **라우팅** | React Router v6 | 페이지 이동, 중첩 라우팅 |
| **상태 관리** | TanStack Query + Zustand | 서버/클라이언트 상태 분리 관리 |
| **UI 라이브러리** | Ant Design | 어드민 특화 컴포넌트, 빠른 개발 |
| **스타일링** | Ant Design (CSS-in-JS) | UI 라이브러리 내장 스타일 |
| **폼 관리** | Ant Design Form | 유효성 검사, 에러 처리 자동화 |
| **HTTP 클라이언트** | Axios | 인터셉터, 에러 처리, 토큰 관리 |
| **인증** | JWT (Access + Refresh Token) | Stateless 인증, 자동 토큰 갱신 |
| **날짜 처리** | Day.js | 가벼움(2KB), 간단한 API |
| **차트/그래프** | Recharts | 데이터 시각화 |
| **테이블** | Ant Design Table | 정렬, 필터링, 페이지네이션 내장 |
| **코드 품질** | ESLint + Prettier | 코드 스타일 통일, 자동 포맷팅 |

## 🚀 시작하기

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn
 
# 의존성 설치
npm install

프로젝트 구조 

my-admin-project/
├── public/              # 정적 파일
├── src/
│   ├── api/            # Axios 인스턴스 및 API 호출
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── pages/          # 페이지 컴포넌트
│   ├── stores/         # Zustand 스토어
│   ├── types/          # TypeScript 타입 정의
│   ├── utils/          # 유틸리티 함수
│   ├── App.tsx         # 메인 앱 컴포넌트
│   └── main.tsx        # 앱 엔트리 포인트
├── .env.example        # 환경 변수 템플릿
├── .eslintrc.cjs       # ESLint 설정
├── .prettierrc         # Prettier 설정
├── package.json
├── tsconfig.json       # TypeScript 설정
└── vite.config.ts      # Vite 설정



### 스크린샷 섹션
```markdown
## 📸 스크린샷

### 대시보드
![Dashboard](./docs/images/dashboard.png)

### 로그인
![Login](./docs/images/login.png)


# Admin Dashboard

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.22.5-blue)
![License](https://img.shields.io/badge/License-MIT-green)