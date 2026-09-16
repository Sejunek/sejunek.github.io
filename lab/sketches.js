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
