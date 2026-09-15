/* ============================================================
   main.js — filter tabs + scroll reveal
   의존성 없음. defer 로 로드하세요.
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Filter tabs ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
  var grid = document.querySelector('[data-grid]');

  if (tabs.length && grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-category]'));

    function apply(key, push) {
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', String(t.dataset.filter === key));
      });

      var show = function () {
        cards.forEach(function (card, i) {
          var match = key === 'all' || card.dataset.category === key;
          card.classList.toggle('is-hidden', !match);
          // stagger the fade back in
          card.style.transitionDelay = match ? (i % 12) * 30 + 'ms' : '0ms';
        });
        grid.classList.remove('is-switching');
      };

      if (reduce) {
        show();
      } else {
        grid.classList.add('is-switching');
        window.setTimeout(show, 120);
      }

      if (push) {
        var url = key === 'all'
          ? window.location.pathname
          : window.location.pathname + '?filter=' + encodeURIComponent(key);
        window.history.pushState({ filter: key }, '', url);
      }
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        apply(tab.dataset.filter, true);
      });
    });

    // restore from ?filter= on load and on back/forward
    function fromUrl() {
      var q = new URLSearchParams(window.location.search).get('filter');
      return q && tabs.some(function (t) { return t.dataset.filter === q; }) ? q : 'all';
    }
    apply(fromUrl(), false);
    window.addEventListener('popstate', function () { apply(fromUrl(), false); });
  }

  /* ---------- 2. Scroll reveal (once per card) ---------- */
  var revealables = document.querySelectorAll('.reveal');
  if (!revealables.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      window.setTimeout(function () { el.classList.add('is-in'); }, i * 60);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  Array.prototype.forEach.call(revealables, function (el) { io.observe(el); });
})();
