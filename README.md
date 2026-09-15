# Portfolio — 퍼블리싱 세트

Figma `Web-MCP / Claude's Workplace` 시안 기준으로 퍼블리싱한 정적 사이트입니다.
빌드 도구 · 라이브러리 없음. 파일 그대로 올리면 동작합니다.

```
portfolio/
├─ index.html                  메인 (프로젝트 리스트)
├─ projects/
│   └─ medical-vr.html         프로젝트 상세 템플릿 ← 복사해서 늘리세요
├─ lab/                        인터랙티브 스케치 (Canvas · p5 · three · Processing)
│   ├─ index.html              LAB 목록
│   ├─ grid-field.html         체험 페이지 예시
│   ├─ sketches/               실제 스케치 파일 + .pde 원본
│   └─ README.md               스케치 추가 방법 ← 여기 참고
├─ assets/
│   ├─ css/style.css           토큰 · 레이아웃 · 카드 · 반응형 전부
│   ├─ js/main.js              필터 탭 + 스크롤 등장 (의존성 없음)
│   ├─ js/lab-embed.js         스케치 iframe 실행기
│   └─ img/                    여기에 이미지 넣기
└─ README.md
```

---

## 1. 프로젝트 추가하기

### 메인 카드
`index.html` 의 `<a class="card reveal">` 블록을 통째로 복사해서 아래 4개만 바꿉니다.

| 바꿀 것 | 위치 |
|---|---|
| `href` | `projects/파일명.html` |
| `data-category` | `uxui` / `vr3d` / `visual` / `lab` 중 하나 (필터 키) |
| `.card__panel` 안 카테고리 · 제목 | 호버 시 보이는 텍스트 |
| `.card__caption` 안 제목 · 메타 | 카드 아래 상시 노출 텍스트 |

카테고리를 새로 만들려면 `.tabs` 에 버튼을 하나 추가하고 `data-filter` 값을 카드의
`data-category` 와 똑같이 맞추면 끝입니다. JS는 손댈 필요 없습니다.
탭 옆 숫자(`.tab__count`)는 수동입니다 — 프로젝트 수가 바뀌면 같이 고쳐주세요.

### 상세 페이지
`projects/medical-vr.html` 을 복사 → 파일명 변경 → 제목 · 메타 4줄 · 이미지 스택만 교체.

---

## 2. 이미지 넣기 (가장 중요)

**두 세트만 준비합니다.**

| 용도 | 가로 | 파일명 |
|---|---|---|
| PC | 1920px | `medicalvr_01_main.jpg` |
| 모바일 | 750px | `medicalvr_01_main@mo.jpg` |

- 순번은 2자리 고정. 나중에 중간 삽입이 필요하면 `05a` 로 처리.
- 세로 길이는 두 세트가 달라도 됩니다. 모바일은 오히려 더 길게 잘라 쓰는 게 맞습니다.
- 스위칭 기준점은 **768px** 입니다.

`projects/*.html` 의 `.stack` 안에 있는 회색 `<div class="stack__ph">` 를 지우고,
바로 위 주석 처리된 `<picture>` 를 살리면 됩니다.

```html
<picture>
  <source media="(max-width: 767px)" srcset="../assets/img/medicalvr/medicalvr_01_main@mo.jpg">
  <img src="../assets/img/medicalvr/medicalvr_01_main.jpg"
       alt="Medical VR Simulator 메인 화면"
       width="1920" height="1080" loading="lazy" decoding="async">
</picture>
```

지켜야 할 것 세 가지:

1. **`width` / `height` 를 PC 이미지의 실제 픽셀값으로 명시.** 안 넣으면 스크롤 중 레이아웃이 밀립니다(CLS).
2. **첫 번째 이미지만 `loading="eager"`**, 나머지는 `lazy`.
3. **JS로 `src` 를 갈아끼우지 마세요.** 두 장을 다 받아버리거나 초기 렌더가 비어 보입니다. `<picture>` 가 브라우저에게 한 장만 받게 하는 유일한 방법입니다.

GIF는 용량이 큽니다. `mp4` / `webm` 으로 변환 후 이렇게 쓰는 걸 권합니다.

```html
<video src="../assets/img/medicalvr/medicalvr_04_motion.mp4"
       width="1920" height="1080" autoplay muted loop playsinline preload="metadata"></video>
```

메인 카드 썸네일도 같은 원리입니다. `.card__ph` 를 지우고 주석의 `<img class="card__thumb">` 를 살리세요.
썸네일은 **768 × 1056** (384×528의 2배) 로 뽑으면 전 구간에서 선명합니다.

---

## 3. 반응형 동작

| 구간 | 레이아웃 |
|---|---|
| 1601px ~ | 좌측 레일 600 고정(sticky) + 3열 (카드 384) |
| 1024 ~ 1600 | 레일 440 + 3열 (카드 288) |
| 768 ~ 1023 | 레일 해제 → 상단 스택, 2열, 탭 가로 스크롤 |
| ~ 767 | 2열, 여백 20, 타이포 축소 |

카드는 `aspect-ratio: 384/528` 로 잠겨 있어 폭만 바뀌고 비율은 전 구간 동일합니다.

---

## 4. 인터랙션

- **카드 호버** — 포인트 컬러 패널이 좌→우 wipe in (360ms, `cubic-bezier(.215,.61,.355,1)`) + 썸네일 `scale(1.04)` + 텍스트 60ms 지연 등장. `@media (hover: hover)` 로 감싸서 모바일에서는 발생하지 않습니다.
- **필터** — fade out 120ms → 재배치 → stagger 30ms 로 복귀. URL에 `?filter=uxui` 가 남아 뒤로가기로 복원됩니다.
- **스크롤 등장** — IntersectionObserver, 카드당 1회만.
- **`prefers-reduced-motion: reduce`** 이면 전부 비활성화됩니다.

---

## 5. 폰트 교체

지금은 Google Fonts의 `Archivo`(라틴) + `IBM Plex Sans KR`(한글)입니다.
한글을 Pretendard로 바꾸려면 `<head>` 에 아래를 추가하고,

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">
```

`style.css` 의 `--font-kr` 첫 항목을 `"Pretendard Variable"` 로 바꾸면 됩니다. 그 외에는 손댈 곳이 없습니다.

---

## 6. 배포

정적 파일이라 어디든 올라갑니다.

- **GitHub Pages** — 저장소에 올리고 Settings → Pages → Branch `main` / `/root`
- **Netlify · Vercel** — 폴더를 드래그 앤 드롭 (빌드 명령 없음)
- **웹호스팅(카페24 등)** — FTP로 `public_html` 에 폴더째 업로드

배포 전 체크: `og:image` 채우기, 파비콘 추가, `BEHANCE / NOTION / LINKEDIN` 의 `href="#"` 실제 주소로 교체.


---

## 7. LAB (인터랙티브 스케치)

예전 Processing(.pde) 파일이나 p5.js · three.js 스케치를 **고치지 않고 그대로** 올려서
방문자가 직접 만져볼 수 있는 공간입니다. 자세한 방법은 `lab/README.md` 를 보세요.

핵심만 요약하면,

- 스케치는 전부 **iframe 안에서 독립 실행**됩니다. p5 / Processing 이 전역을 점유해도 서로 안 싸웁니다.
- **클릭해야 실행**됩니다. 첫 진입 속도와 모바일 배터리를 지키기 위해서입니다.
- `.pde` 는 `lab/sketches/pde/` 에 넣고 `_pde.html?file=파일명.pde` 로 링크하면 끝입니다.
  단, XHR로 읽어오므로 **http(s)로 올린 뒤에만 동작**합니다 (파일 더블클릭으로는 안 됩니다).
