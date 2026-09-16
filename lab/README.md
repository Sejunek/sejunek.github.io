# LAB — 인터랙티브 스케치

```
lab/
├─ index.html              목록 (카드는 sketches.js 에서 자동 생성 — 손대지 않음)
├─ view.html               공용 뷰어 — view.html?s=<slug>
├─ sketches.js             ★ 스케치 목록. 추가할 땐 여기 맨 아래 한 줄
├─ AGENTS.md               ★ AI에게 시킬 때 먼저 읽히는 규약
└─ sketches/
    ├─ grid-field.html     스케치 본체
    ├─ making/             제작 기록 (AI 제작물)
    │   └─ grid-field.md
    ├─ template-p5.html    p5.js 템플릿
    ├─ template-three.html three.js 템플릿
    ├─ pde-runner.html     Processing.js 러너
    └─ pde/sample.pde
```

## 스케치 하나 추가 = 파일 3개 새로 만들고, 한 줄 덧붙이기

| 만드는 것 | 경로 |
|---|---|
| 스케치 본체 | `lab/sketches/<slug>.html` |
| 카드 이미지 | `assets/img/lab/<slug>-card.png` (1200×750) |
| 커버 이미지 | `assets/img/lab/<slug>-cover.png` (1600×900) |
| 제작 기록 | `lab/sketches/making/<slug>.md` (AI 제작일 때) |
| **목록 등록** | `lab/sketches.js` **맨 아래에 `LAB_ADD({...})` 한 줄** |

새로 만드는 파일은 서로 겹치지 않으므로 충돌이 나지 않습니다.
**충돌이 날 수 있는 곳은 `sketches.js` 한 곳뿐**이고, 그마저도 해결은 항상
"두 변경 사항 모두 수락" 입니다.

AI에게 시킬 때는 **`lab/AGENTS.md` 를 먼저 읽으라고 하세요.** 기술 요구사항,
제작 기록 형식, 커밋 규칙이 전부 거기 있습니다.

---

## 왜 iframe 인가

스케치는 전부 **iframe 안에서 각자 독립 실행**됩니다. 이게 이 구조의 핵심입니다.

- p5.js와 Processing.js는 `setup()` / `draw()` 같은 함수를 **전역에 등록**합니다. 한 페이지에 두 개를 올리면 서로 덮어써서 둘 다 깨집니다. iframe이면 각자 자기 window를 가집니다.
- 덕분에 **예전에 만든 코드를 한 글자도 안 고치고** 그대로 올릴 수 있습니다.
- 무거운 렌더링 루프가 본문 스크롤을 붙잡지 않습니다.
- 클릭해야 실행되므로 첫 진입이 가볍고, 모바일 배터리를 아낍니다.

---

## 1. 새 스케치 추가하기

**① 스케치 파일** — `lab/sketches/<slug>.html`
`template-p5.html` / `template-three.html` 을 복사해서 내용만 바꾸거나,
라이브러리 없이 Canvas만 쓸 거면 `grid-field.html` 을 참고하세요.
CSS·JS를 파일 안에 넣은 **단일 HTML 한 장**이어야 합니다.

**② 포스터 이미지 2장** — 스케치를 실행해서 가장 잘 나온 순간을 캡처
`assets/img/lab/<slug>-card.png` (1200×750) / `<slug>-cover.png` (1600×900)

**③ 목록에 등록** — `lab/sketches.js` 맨 아래에 한 줄

```js
LAB_ADD({
  slug: "flow-field", title: "Flow Field", tech: "p5.js", year: "2026",
  by: "ai", model: "GPT-5",
  summary: "한두 문장.",
  making: true
});
```

끝입니다. `lab/index.html` 이나 `view.html` 은 **건드리지 않습니다.**
카드도 상세 페이지도 이 한 줄에서 자동으로 만들어집니다.

`by` 가 `"ai"` / `"pair"` 면 카드에 **AI-MADE 배지**가 붙고,
`making: true` 면 `lab/sketches/making/<slug>.md` 를 제작 기록으로 렌더합니다.

---

## 2. 예전 Processing(.pde) 파일 올리기

1. `.pde` 파일을 `lab/sketches/pde/` 에 넣습니다.
2. 링크를 이렇게 걸면 끝입니다.
   `sketches/pde-runner.html?file=내스케치.pde`

**주의 두 가지**

- `.pde` 는 XHR로 읽어오기 때문에 **파일을 더블클릭해서 여는 방식(file://)으로는 동작하지 않습니다.** GitHub Pages에 올린 뒤에 확인하세요. 로컬에서 보고 싶으면 폴더에서 `python -m http.server` 를 띄우고 `localhost:8000` 으로 접속하면 됩니다.
- Processing.js는 2018년에 개발이 중단된 라이브러리입니다. 예전 작업물을 **보존해서 보여주는 용도**로는 충분하지만, 일부 최신 문법이나 라이브러리 의존 스케치는 안 돌 수 있습니다. 새로 만드실 거라면 p5.js를 권합니다.

---

## 3. 포스터 이미지

카드와 실행 전 커버에 들어가는 정지 이미지입니다. 없으면 회색 판으로 나옵니다.
스케치를 실행한 뒤 **가장 잘 나온 순간을 캡처**해서 쓰면 됩니다.

| 용도 | 크기 |
|---|---|
| 메인 페이지 카드 | 768 × 1056 |
| LAB 목록 카드 | 1200 × 750 |
| 실행 전 커버 | 1600 × 900 |

---

## 4. 성능 체크리스트

새 스케치를 올릴 때 이것만 확인하면 대부분의 사고를 막습니다.

- [ ] `devicePixelRatio` 에 상한(2)을 뒀는가 — 안 두면 레티나에서 4배 픽셀을 그립니다
- [ ] 탭이 백그라운드로 갈 때 루프를 멈추는가 (`visibilitychange`)
- [ ] `prefers-reduced-motion: reduce` 일 때 움직임을 끄는가
- [ ] 창 크기 변경(`resize`)에 대응하는가
- [ ] 모바일에서 `touch-action: none` 으로 스크롤 충돌을 막았는가


---

## 5. 파일 어떻게 주면 되나

기존 작업물을 올릴 때, 아래만 챙겨주시면 제가 붙여넣고 동작까지 확인합니다.
**어떤 경우든 "실행했을 때 이렇게 보여야 한다"는 스크린샷이나 영상 한 개**를 같이 주세요.
코드만 보고는 의도한 모습인지 판단할 수가 없습니다.

### p5.js

- `sketch.js` (또는 `setup()` / `draw()` 가 들어있는 코드 전체). 파일이 여러 개면 폴더째
- 이미지 · 폰트 · 사운드를 불러온다면 **그 파일들과 폴더 구조 그대로** (`loadImage('data/cat.png')` 의 `data/` 폴더까지)
- **애드온을 쓰는지** — `p5.sound`, `p5.dom` 등. 이게 있으면 스크립트를 하나 더 불러와야 합니다
- `createCanvas(800, 600)` 처럼 크기가 고정이면 그대로 둘지, 화면에 꽉 채울지

### three.js

- 씬 코드(.js)
- 3D 모델 — `.glb` 를 가장 권합니다. `.gltf` 면 **텍스처 폴더까지 통째로**. `.fbx` / `.obj` 는 변환이 한 단계 더 필요합니다
- **three 버전과 import 방식** — 이게 제일 중요합니다. `import * as THREE from 'three'` 로 시작하는 최신 모듈 코드인지, `<script>` 로 불러 `THREE.` 를 쓰는 예전 방식인지. 둘은 로더 세팅이 완전히 다릅니다
- `OrbitControls` 같은 addon 을 쓰는지

### Processing (.pde)

- `.pde` 파일 **전부** (Processing 에디터에서 탭이 여러 개였다면 그 탭들 모두)
- `data/` 폴더 통째로 (이미지 · 폰트 · csv)
- **외부 라이브러리를 쓰는지 — 이게 성패를 가릅니다.** `minim`(사운드), `controlP5`(UI), `peasycam` 같은 걸 import 했다면 Processing.js 에서는 돌지 않습니다. 이 경우 두 가지 중에 고르면 됩니다.
  - 영상으로 녹화해서 올리기 (가장 확실합니다)
  - p5.js 로 옮기기 — 제가 변환해 드릴 수 있습니다. 코드 길이에 따라 다르지만 보통 어렵지 않습니다
- `size(1280, 720)` 의 값

### 그 외 (Canvas · WebGL · GLSL 등)

돌아가는 HTML 한 장이면 그대로 올라갑니다. 외부에서 불러오는 게 있으면 그 목록만 알려주세요.
