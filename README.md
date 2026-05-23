# AMR Sales CRM v2.0

## 로컬 실행 (VSCode)
```bash
npm install
npm start
# http://localhost:3000 접속
```

## Railway 배포
1. GitHub에 이 폴더를 push
2. railway.app → New Project → Deploy from GitHub
3. 자동 배포 완료 (PORT 환경변수 자동 설정)

## 파일 구조
```
crm/
├── server.js       # Express 서버
├── package.json    # 의존성
├── public/
│   └── index.html  # 전체 앱 (React 인라인)
└── README.md
```

## 데이터 저장
- 브라우저 localStorage에 자동 저장
- 최초 실행 시 13개 기존 딜 자동 로드
- 팀 공유가 필요하면 백엔드 DB 연동 필요 (추후 개발)
