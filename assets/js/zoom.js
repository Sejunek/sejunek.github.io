/* ============================================================
   zoom.js — 상세 페이지 이미지 탭/클릭 확대

   왜 필요한가
   · 가로 1920px 로 만든 상세 이미지를 375px 화면에 그대로 넣으면
     약 19% 로 줄어듭니다. 원본에서 46px 이던 글자가 9px 이 되는 셈이라,
     글자가 들어간 장표는 사실상 읽을 수 없습니다.
   · 이미지를 모바일용으로 다시 짜는 게 정석이지만,
     그 전까지는 "탭하면 원본 크기로 본다" 로 읽을 수는 있게 해둡니다.

   @mo 이미지가 따로 있는 장은 이미 모바일에 맞게 짜여 있으므로
   확대가 필요 없지만, 켜져 있어도 방해되지 않습니다.
   ============================================================ */
(function () {
  'use strict';

  var imgs = document.querySelectorAll('.stack img');
  if (!imgs.length) return;

  var overlay = null;
  var lastFocus = null;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'zoom';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', '이미지 확대 보기');
    overlay.innerHTML =
      '<div class="zoom__scroll"><img class="zoom__img" alt=""></div>' +
      '<button class="zoom__close t-mono" type="button" aria-label="닫기">CLOSE &times;</button>';
    document.body.appendChild(overlay);

    overlay.querySelector('.zoom__close').addEventListener('click', close);
    overlay.querySelector('.zoom__scroll').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) close();
    });
  }

  function open(src, alt, natural) {
    if (!overlay) build();
    var img = overlay.querySelector('.zoom__img');
    img.src = src;
    img.alt = alt || '';
    // 글자가 읽히는 폭으로 연다 — 화면의 2.5배, 단 원본 폭을 넘지 않게
    img.style.width = 'min(250vw, ' + (natural || 1920) + 'px)';
    lastFocus = document.activeElement;
    document.body.classList.add('zoom-open');
    overlay.classList.add('is-open');

    // 가로로 넘치는 경우 가운데부터 보여준다 (왼쪽 여백부터 보이면 당황스럽다)
    var sc = overlay.querySelector('.zoom__scroll');
    sc.scrollTop = 0;
    requestAnimationFrame(function () {
      sc.scrollLeft = Math.max(0, (sc.scrollWidth - sc.clientWidth) / 2);
    });

    overlay.querySelector('.zoom__close').focus();
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.classList.remove('zoom-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  Array.prototype.forEach.call(imgs, function (img) {
    img.classList.add('is-zoomable');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', (img.alt || '이미지') + ' — 눌러서 확대');

    function go() { open(img.currentSrc || img.src, img.alt, img.naturalWidth); }
    img.addEventListener('click', go);
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
    });
  });

  // 첫 이미지에만 한 번 안내 (모바일에서만 의미가 있음)
  if (window.matchMedia('(max-width: 767px)').matches) {
    var hint = document.createElement('span');
    hint.className = 'zoom-hint t-mono';
    hint.textContent = 'TAP TO ZOOM';
    var first = imgs[0];
    if (first && first.parentNode) {
      var wrap = document.createElement('span');
      wrap.className = 'zoom-hint__wrap';
      first.parentNode.insertBefore(wrap, first.nextSibling);
      wrap.appendChild(hint);
      setTimeout(function () { wrap.classList.add('is-out'); }, 4000);
    }
  }
})();
