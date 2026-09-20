/* ============================================================
   lab-embed.js — 인터랙티브 스케치를 iframe 으로 안전하게 얹기

   왜 iframe 인가
   · p5.js / Processing.js 스케치는 전역(window)을 통째로 쓰는 경우가 많아,
     한 페이지에 여러 개를 올리면 서로 충돌합니다. iframe 이면 격리됩니다.
   · 예전에 만든 .pde / 스케치 코드를 "고치지 않고" 그대로 올릴 수 있습니다.
   · 무거운 렌더링이 본문 스크롤을 방해하지 않습니다.
   · 클릭해야 실행되므로 첫 진입 속도와 모바일 배터리에 유리합니다.

   사용법 (HTML)
   <div class="embed" data-embed data-src="sketches/grid-field.html">
     <button class="embed__cover" type="button"> ... </button>
   </div>
   ============================================================ */
(function () {
  'use strict';

  var boxes = document.querySelectorAll('[data-embed]');
  if (!boxes.length) return;

  Array.prototype.forEach.call(boxes, function (box) {
    var src = box.getAttribute('data-src');
    var cover = box.querySelector('.embed__cover');
    var frame = null;

    function run() {
      if (frame) return;
      frame = document.createElement('iframe');
      frame.src = src;
      frame.title = box.getAttribute('data-title') || 'Interactive sketch';
      frame.setAttribute('loading', 'lazy');
      frame.setAttribute('allowfullscreen', '');
      // 같은 출처의 우리 파일이므로 스크립트는 허용하되, 폼 전송·팝업은 막습니다.
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-pointer-lock');
      box.appendChild(frame);
      if (cover) cover.remove();
      box.setAttribute('data-running', 'true');
      addShield();
    }

    /* ---- 터치 기기용 가림막 ----------------------------------------
       스케치 캔버스는 touch-action:none 이라 손가락이 그 위에 닿으면
       페이지가 스크롤되지 않습니다. 스케치가 화면의 절반을 차지하니
       위로 되돌아갈 때 스크롤이 막힌 것처럼 느껴집니다.
       그래서 기본은 '가림막이 덮인 상태'로 두고, 한 번 눌러야
       조작이 시작되게 합니다. 마우스 환경에서는 CSS 로 숨겨집니다. */
    function addShield() {
      if (box.querySelector('.embed__shield')) return;

      var shield = document.createElement('button');
      shield.className = 'embed__shield t-mono';
      shield.type = 'button';
      shield.innerHTML = '<span>탭해서 조작하기</span>';

      var unlock = document.createElement('button');
      unlock.className = 'embed__unlock t-mono';
      unlock.type = 'button';
      unlock.textContent = '스크롤';

      shield.addEventListener('click', function () {
        box.setAttribute('data-interactive', 'true');
      });
      unlock.addEventListener('click', function () {
        box.removeAttribute('data-interactive');
      });

      box.appendChild(shield);
      box.appendChild(unlock);
    }

    if (cover) cover.addEventListener('click', run);

    // 컨트롤 버튼 (있을 때만)
    var wrap = box.parentNode;
    var restart = wrap.querySelector('[data-action="restart"]');
    var full = wrap.querySelector('[data-action="fullscreen"]');

    if (restart) {
      restart.addEventListener('click', function () {
        if (!frame) { run(); return; }
        frame.src = frame.src;             // 리로드
      });
    }
    if (full) {
      full.addEventListener('click', function () {
        if (!frame) run();
        var el = box;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      });
    }
  });
})();
