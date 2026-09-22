/* ============================================================
   LAB 스케치 목록 — 이 파일이 유일한 원본입니다.

   새 스케치를 추가할 때는 **이 파일 맨 아래에 LAB_ADD 한 줄만** 덧붙이세요.
   목록 페이지(index.html)와 뷰어(view.html)가 여기서 읽어갑니다.
   카드 HTML을 손으로 쓰지 않습니다.

   ── 필드 ────────────────────────────────────────────────
   slug     필수. 영문 소문자·숫자·하이픈. 파일 이름의 기준이 됩니다.
            sketches/<slug>.html           스케치 본체
            ../assets/img/lab/<slug>-card.png    목록 카드 (1200×750)
            ../assets/img/lab/<slug>-cover.png   실행 전 커버 (1600×900)
            sketches/making/<slug>.md      제작 기록 (making: true 일 때)
   title    필수. 화면에 보이는 제목
   tech     필수. "CANVAS 2D" / "p5.js" / "three.js" / "PROCESSING" 등
   year     필수. "2026"
   by       필수. "human" | "ai" | "pair"
            human — 직접 작성      ai — AI가 작성      pair — 함께 작업
   model    by 가 "ai" 또는 "pair" 일 때 필수. "Claude Opus 5", "GPT-5" 등
   summary  필수. 한두 문장
   making   선택. true 면 sketches/making/<slug>.md 를 뷰어에 렌더합니다
   card     선택. 카드 이미지 경로를 직접 지정할 때만
   cover    선택. 커버 이미지 경로를 직접 지정할 때만
   ─────────────────────────────────────────────────────────

   ⚠ 충돌 방지 — 반드시 맨 아래에 추가하세요.
     중간에 끼워 넣으면 다른 AI가 추가한 줄과 부딪힙니다.
     혹시 충돌이 나도 해결은 항상 "두 변경 사항 모두 수락" 입니다.
     두 줄 다 살리면 그게 정답입니다.
   ============================================================ */

window.LAB_SKETCHES = window.LAB_SKETCHES || [];
function LAB_ADD(s) { window.LAB_SKETCHES.push(s); }

/* ---------- 여기서부터 목록 ---------- */

LAB_ADD({
  slug: "grid-field",
  title: "Grid Field",
  tech: "CANVAS 2D",
  year: "2026",
  by: "ai",
  model: "Claude Opus 5",
  summary: "포트폴리오의 그리드 시스템을 물성으로 바꾼 스케치. 커서가 다가오면 격자가 밀려나고 스프링으로 제자리를 찾아갑니다.",
  making: true
});

/* 새 스케치는 이 아래에 ↓ */
LAB_ADD({ slug: "memory-surface", title: "Memory Surface", tech: "CANVAS 2D", year: "2026", by: "ai", model: "GPT-6", summary: "손끝의 압력을 잠시 기억하는 푸른 표면. 눌러 형태를 만들고, 놓아 파동을 전하세요.", making: true });
LAB_ADD({ slug: "moire-lens", title: "Moiré Lens", tech: "CANVAS 2D", year: "2026", by: "ai", model: "GPT-6 Astra Light", summary: "같은 선, 다른 각도. 렌즈를 옮기고 각도를 바꾸면 두 겹의 선 사이에서 새로운 무늬가 나타납니다.", making: true });
LAB_ADD({ slug: "laputa-skyward", title: "Laputa / Skyward", tech: "three.js", year: "2026", by: "pair", model: "GPT-6 Astra Light", summary: "구름 사이를 돌아 하늘 위 성으로 다가갑니다. 느린 하늘과 함께 라퓨타를 탐색하는 두 번째 장면.", making: true });
LAB_ADD({ slug: "star-counting-night", title: "별 헤는 밤", tech: "CANVAS 2D", year: "2026", by: "pair", model: "GPT-6 Astra Light · Claude Opus 5", summary: "윤동주의 시에서 시작한 밤하늘. 누른 자리를 2~3초 지키면 희미한 별들이 모여 형상이 맺히고, 손을 떼면 그대로 천천히 옅어지며 밝은 별 하나와 시구 한 줄이 남습니다.", making: true });
LAB_ADD({ slug: "borrowed-gravity", title: "Borrowed Gravity", tech: "CANVAS 2D", year: "2026", by: "ai", model: "GPT-6", summary: "손끝에 잠시 빌려온 중력. 푸른 잉크의 흐름을 끌어당기고, 모으고, 놓아보세요.", making: true });
LAB_ADD({ slug: "fireworks", title: "Fireworks", tech: "CANVAS 2D", year: "2020", by: "human", summary: "대학 시절 Processing 으로 만든 스케치를 웹으로 옮겼습니다. 누른 자리에서 색색의 불꽃이 사방으로 퍼집니다." });
LAB_ADD({ slug: "point-of-view", title: "Van Gogh's Perspective", tech: "CANVAS 2D", year: "2020", by: "human", summary: "사진 한 장을 올리거나 찍으면, 반 고흐의 붓질처럼 짧은 선 수천 개로 다시 그립니다. 선은 커서를 바라보고, 누르고 있으면 천천히 일렁입니다." });
LAB_ADD({ slug: "sulky-ball", title: "Sulky Ball", tech: "CANVAS 2D", year: "2020", by: "pair", model: "Claude Opus 5", summary: "커서를 따라오는 공. 누르면 맞은 것처럼 튕겨나가고, 다섯 번 맞으면 삐져서 피합니다. 빈 곳을 열 번 눌러 달래면 다시 따라옵니다." });
