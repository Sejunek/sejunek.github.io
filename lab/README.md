# LAB — 인터랙티브 스케치 올리는 법

```
lab/
├─ index.html              LAB 목록 (카드 추가는 여기)
├─ grid-field.html         체험 페이지 예시 ← 복사해서 늘리세요
└─ sketches/
    ├─ grid-field.html     실제 스케치 (라이브러리 없음, Canvas 2D)
    ├─ template-p5.html     p5.js 템플릿
    ├─ template-three.html  three.js 템플릿
    ├─ pde-runner.html      Processing.js 러너
    └─ pde/
        └─ sample.pde      .pde 파일은 여기에
```

---

## 왜 iframe 인가

스케치는 전부 **iframe 안에서 각자 독립 실행**됩니다. 이게 이 구조의 핵심입니다.

- p5.js와 Processing.js는 `setup()` / `draw()` 같은 함수를 **전역에 등록**합니다. 한 페이지에 두 개를 올리면 서로 덮어써서 둘 다 깨집니다. iframe이면 각자 자기 window를 가집니다.
- 덕분에 **예전에 만든 코드를 한 글자도 안 고치고** 그대로 올릴 수 있습니다.
- 무거운 렌더링 루프가 본문 스크롤을 붙잡지 않습니다.
- 클릭해야 실행되므로 첫 진입이 가볍고, 모바일 배터리를 아낍니다.

---

## 1. 새 스케치 추가하기

**① 스케치 파일을 만듭니다** — `lab/sketches/내스케치.html`

`template-p5.html` / `template-three.html` 중 맞는 걸 복사해서 내용만 바꾸면 됩니다.
라이브러리 없이 Canvas만 쓸 거면 `grid-field.html` 을 참고하세요.

**② 체험 페이지를 만듭니다** — `lab/내스케치.html`

`grid-field.html` 을 복사한 뒤 네 군데만 고칩니다.

| 고칠 것 | 위치 |
|---|---|
| 제목 · 설명 | `.lab-intro` |
| `data-src` | `sketches/내스케치.html` |
| 포스터 이미지 | `.embed__poster` 의 `src` (없으면 태그째 삭제) |
| 기술 노트 3칸 | `.lab-notes` |

**③ 목록에 카드를 추가합니다** — `lab/index.html` 의 `<a class="card card--wide">` 복사

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
