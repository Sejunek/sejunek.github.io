/* Google Analytics 4
 * 측정 ID만 아래에 넣으면 전 페이지에서 동작합니다.
 * analytics.google.com → 관리 → 데이터 스트림 → 웹 → 측정 ID (G-로 시작)
 * 값이 비어 있으면 아무 요청도 보내지 않습니다. */
(function () {
  'use strict';

  var MEASUREMENT_ID = 'G-2N6S5Z4K9V';

  if (!MEASUREMENT_ID) return;

  // Do Not Track을 켠 방문자는 추적하지 않습니다
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, { anonymize_ip: true });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(s);

  // 메일 주소 클릭을 이벤트로 기록합니다
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (!a) return;
    gtag('event', 'contact_email_click', {
      page_path: location.pathname,
      link_url: a.getAttribute('href')
    });
  }, true);
}());
