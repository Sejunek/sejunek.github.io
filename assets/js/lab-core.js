/* ============================================================
   lab-core.js — LAB 목록/뷰어 공통 로직

   · sketches.js 가 먼저 로드되어 있어야 합니다.
   · 카드 렌더, 뷰어 조립, 제작 기록(md) 렌더를 담당합니다.
   · 새 스케치를 추가할 때 이 파일은 건드리지 않습니다.
   ============================================================ */
(function (w) {
  'use strict';

  var LAB = w.LAB = {};

  LAB.all = function () { return (w.LAB_SKETCHES || []).slice(); };

  LAB.find = function (slug) {
    var list = LAB.all();
    for (var i = 0; i < list.length; i++) if (list[i].slug === slug) return list[i];
    return null;
  };

  /* 경로는 전부 slug 에서 규칙으로 만듭니다 (lab/ 기준 상대경로) */
  LAB.paths = function (s) {
    return {
      sketch: s.sketch || ('sketches/' + s.slug + '.html'),
      card:   s.card   || ('../assets/img/lab/' + s.slug + '-card.png'),
      cover:  s.cover  || ('../assets/img/lab/' + s.slug + '-cover.png'),
      making: 'sketches/making/' + s.slug + '.md',
      view:   'view.html?s=' + encodeURIComponent(s.slug)
    };
  };

  var BY_LABEL = { ai: 'AI-MADE', pair: 'AI + HUMAN', human: '' };

  LAB.byLabel = function (s) {
    var base = BY_LABEL[s.by] || '';
    if (!base) return '';
    return s.model ? base + ' · ' + s.model.toUpperCase() : base;
  };

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }
  LAB.esc = esc;

  /* ---------- 목록 카드 ---------- */
  LAB.renderCards = function (mount) {
    var list = LAB.all();
    if (!list.length) {
      mount.innerHTML = '<p class="t-body muted">아직 등록된 스케치가 없습니다.</p>';
      return 0;
    }
    var html = list.map(function (s) {
      var p = LAB.paths(s);
      var badge = LAB.byLabel(s);
      return '' +
      '<a class="card card--wide reveal" href="' + p.view + '">' +
        '<div class="card__visual">' +
          '<img class="card__thumb" src="' + p.card + '" alt="" width="1200" height="750" loading="lazy" decoding="async" onerror="this.remove()">' +
          (badge ? '<span class="badge badge--ai t-mono">' + esc(badge) + '</span>' : '') +
          '<div class="card__panel">' +
            '<span class="t-mono">' + esc(s.tech) + '</span>' +
            '<div>' +
              '<h3 class="card__panel-title">' + esc(s.title) + '</h3>' +
              '<span class="t-mono card__view">RUN &nbsp;&rarr;</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="card__caption">' +
          '<h3 class="t-h-m">' + esc(s.title) + '</h3>' +
          '<p class="t-mono muted">' + esc(s.tech) + ' — ' + esc(s.year) + '</p>' +
        '</div>' +
      '</a>';
    }).join('');
    mount.innerHTML = html;
    return list.length;
  };

  /* ---------- 아주 작은 마크다운 렌더러 ----------
     제작 기록(making/*.md)용. 필요한 문법만 처리합니다:
     # 제목, **굵게**, `코드`, > 인용, - 목록, 1. 목록, --- 구분선, 빈 줄 = 문단
     HTML 은 전부 이스케이프하므로 md 안의 태그는 글자로 보입니다.        */
  LAB.md = function (src) {
    var lines = String(src).replace(/\r\n/g, '\n').split('\n');
    var out = [], list = null, quote = false;

    function inline(t) {
      return esc(t)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    }
    function closeList() { if (list) { out.push('</' + list + '>'); list = null; } }
    function closeQuote() { if (quote) { out.push('</blockquote>'); quote = false; } }

    for (var i = 0; i < lines.length; i++) {
      var l = lines[i], m;

      if (/^\s*$/.test(l)) { closeList(); closeQuote(); continue; }

      if (/^---+\s*$/.test(l)) { closeList(); closeQuote(); out.push('<hr>'); continue; }

      if ((m = l.match(/^(#{1,4})\s+(.*)$/))) {
        closeList(); closeQuote();
        var lv = m[1].length;
        var cls = lv <= 2 ? 't-h-m' : 't-label';
        out.push('<h' + (lv + 1) + ' class="' + cls + ' making__h">' + inline(m[2]) + '</h' + (lv + 1) + '>');
        continue;
      }

      if ((m = l.match(/^>\s?(.*)$/))) {
        closeList();
        if (!quote) { out.push('<blockquote class="making__quote">'); quote = true; }
        out.push('<p class="t-body-s">' + inline(m[1]) + '</p>');
        continue;
      }
      closeQuote();

      if ((m = l.match(/^\s*[-*]\s+(.*)$/))) {
        if (list !== 'ul') { closeList(); out.push('<ul class="making__list">'); list = 'ul'; }
        out.push('<li class="t-body-s">' + inline(m[1]) + '</li>');
        continue;
      }
      if ((m = l.match(/^\s*\d+\.\s+(.*)$/))) {
        if (list !== 'ol') { closeList(); out.push('<ol class="making__list">'); list = 'ol'; }
        out.push('<li class="t-body-s">' + inline(m[1]) + '</li>');
        continue;
      }
      closeList();

      out.push('<p class="t-body-s">' + inline(l) + '</p>');
    }
    closeList(); closeQuote();
    return out.join('\n');
  };

})(window);
