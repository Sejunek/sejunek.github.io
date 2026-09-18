/* ============================================================
   nav.js — 우측 상단 MENU 버튼 + 오른쪽에서 열리는 메뉴 패널

   모든 페이지에서 이 파일 하나만 불러오면 됩니다.
   버튼과 패널 HTML을 페이지마다 쓰지 않습니다 — 여기서 만들어 넣습니다.

     <script src="assets/js/nav.js" data-base="" defer></script>        ← 루트
     <script src="../assets/js/nav.js" data-base="../" defer></script>  ← 하위 폴더

   data-base 는 루트까지의 상대 경로입니다. 빠지면 자동으로 추정합니다.
   ============================================================ */
(function () {
  'use strict';

  var me = document.currentScript ||
           document.querySelector('script[src$="nav.js"]');
  var base = (me && me.getAttribute('data-base'));
  if (base == null) {
    // data-base 가 없으면 스크립트 경로에서 역산합니다
    var src = (me && me.getAttribute('src')) || '';
    base = src.slice(0, src.indexOf('assets/js/nav.js'));
  }

  var MENU = [
    { key: 'works',  no: '01', en: 'Works',  kr: '작업 모아보기', href: 'index.html' },
    { key: 'career', no: '02', en: 'Career', kr: '경력 기술',     href: 'career.html' },
    { key: 'about',  no: '03', en: 'About',  kr: '프로필 · 연혁', href: 'about.html' }
  ];

  // 현재 페이지 판별 — <body data-page="career"> 가 있으면 그걸 우선
  var current = document.body.getAttribute('data-page');
  if (!current) {
    var p = location.pathname;
    if (/career\.html$/.test(p)) current = 'career';
    else if (/about\.html$/.test(p)) current = 'about';
    else current = 'works';   // index, 프로젝트 상세, LAB 모두 Works 아래
  }

  /* ---------- 마크업 ---------- */
  var btn = document.createElement('button');
  btn.className = 'navbtn t-mono';
  btn.type = 'button';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'sitenav');
  btn.innerHTML = '<span class="navbtn__label">MENU</span>' +
                  '<span class="navbtn__icon" aria-hidden="true"><i></i><i></i></span>';

  var backdrop = document.createElement('div');
  backdrop.className = 'navdrop';
  backdrop.hidden = true;

  var panel = document.createElement('nav');
  panel.className = 'navpanel';
  panel.id = 'sitenav';
  panel.setAttribute('aria-label', '사이트 메뉴');
  panel.hidden = true;

  var html = '<div class="navpanel__top">' +
             '<button class="navclose t-mono" type="button">CLOSE &#10005;</button>' +
             '</div><ul class="navlist">';
  MENU.forEach(function (m) {
    var on = m.key === current;
    html += '<li class="navitem' + (on ? ' is-current' : '') + '">' +
              '<a href="' + base + m.href + '"' + (on ? ' aria-current="page"' : '') + '>' +
                '<span class="t-mono navitem__no">' + m.no + '</span>' +
                '<span class="navitem__text">' +
                  '<span class="navitem__en">' + m.en + '</span>' +
                  '<span class="t-body-s navitem__kr">' + m.kr + '</span>' +
                '</span>' +
              '</a></li>';
  });
  html += '</ul><div class="navpanel__foot">' +
          '<span class="t-mono muted">CONTACT</span>' +
          '<p class="t-label"><a href="mailto:lafamila325@gmail.com">lafamila325@gmail.com</a></p>' +
          '<p class="t-mono muted">' +
            '<a href="#" target="_blank" rel="noopener">BEHANCE</a> · ' +
            '<a href="#" target="_blank" rel="noopener">NOTION</a> · ' +
            '<a href="#" target="_blank" rel="noopener">LINKEDIN</a>' +
          '</p></div>';
  panel.innerHTML = html;

  document.body.appendChild(btn);
  document.body.appendChild(backdrop);
  document.body.appendChild(panel);

  /* ---------- 열고 닫기 ---------- */
  var open = false;
  var lastFocus = null;

  function setOpen(v) {
    if (v === open) return;
    open = v;

    if (v) {
      lastFocus = document.activeElement;
      backdrop.hidden = false;
      panel.hidden = false;
      // hidden 을 푼 직후 바로 클래스를 주면 트랜지션이 안 걸립니다
      requestAnimationFrame(function () {
        document.body.classList.add('nav-open');
      });
      document.addEventListener('keydown', onKey, true);
      var first = panel.querySelector('a, button');
      if (first) first.focus();
    } else {
      document.body.classList.remove('nav-open');
      document.removeEventListener('keydown', onKey, true);
      var done = function () {
        if (!open) { backdrop.hidden = true; panel.hidden = true; }
        panel.removeEventListener('transitionend', done);
      };
      panel.addEventListener('transitionend', done);
      // 트랜지션이 없는 환경(reduced-motion 등) 대비
      window.setTimeout(done, 400);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    btn.setAttribute('aria-expanded', String(v));
  }

  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); setOpen(false); return; }
    if (e.key !== 'Tab') return;
    // 포커스를 패널 안에 가둡니다
    var f = panel.querySelectorAll('a[href], button');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  btn.addEventListener('click', function () { setOpen(!open); });
  backdrop.addEventListener('click', function () { setOpen(false); });
  panel.querySelector('.navclose').addEventListener('click', function () { setOpen(false); });
})();
