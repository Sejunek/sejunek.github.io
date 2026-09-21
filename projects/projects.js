/* ============================================================
   프로젝트 목록 — 이 파일이 유일한 원본입니다.

   메인 페이지(index.html)의 카드와 상세 페이지(view.html)가
   전부 여기서 읽어갑니다. 카드 HTML을 손으로 쓰지 않습니다.

   ── 이미지 넣는 법 ────────────────────────────────────────
   Figma "Claude · Content Kit" 의 슬롯 이름 = 파일 이름입니다.
   프레임을 골라 JPG 로 내보낸 뒤, 아래 폴더에 그대로 넣으세요.

     썸네일   assets/img/thumb/thumb_<slug>.jpg
     PC 상세  assets/img/<slug>/<slug>_01_main.jpg
                              <slug>_02_flow.jpg
                              <slug>_03_ui.jpg
                              <slug>_04_detail.jpg
     모바일   assets/img/<slug>/<slug>_01_main@mo.jpg   (선택)

   이름만 맞으면 자동으로 뜹니다. 없는 장은 조용히 건너뜁니다.
   코드를 고칠 필요가 없습니다.

   ── 필드 ────────────────────────────────────────────────
   slug     필수. 파일 이름의 기준. Figma 슬롯 이름과 반드시 일치
   title    필수. 화면에 크게 뜨는 영문 제목
   cat      필수. 카드/상세에 뜨는 분류 라벨
   filter   필수. "uxui" | "vr3d" | "visual"  (필터 탭 키)
   year     필수
   period   필수
   role     필수
   tool     필수
   summary  필수. 한두 문장
   shots    선택. 상세 이미지 장 목록. 생략하면 기본 4장을 찾습니다
   ============================================================ */

window.PROJECTS = [

{ slug:"crown", title:"Crown Haitai E-commerce", cat:"VISUAL · ECOMMERCE", filter:"visual",
  year:"2026", period:"2026.07 — 재직 중",
  role:"이커머스 전반 디자인 관리 및 제작 · 웹 상세페이지 · 영상 제작 · AI Generate Image 목업 · 제품 브랜드 비주얼 관리",
  tool:"Figma · Adobe Ps · Ai · Ae",
  summary:"이커머스 채널 전반의 디자인을 관리하고 직접 제작합니다. 웹 상세페이지와 영상을 만들고, AI 생성 이미지를 활용한 목업으로 제품 브랜드 비주얼을 관리합니다." },

{ slug:"finpong", title:"Finpong — Kids Investment Literacy", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2026", period:"졸업연구",
  role:"UX 리서치 · 서비스 기획 · UX/UI 디자인",
  tool:"Figma",
  summary:"아동 투자·금융교육 플랫폼 기획입니다. 학부모 FGI와 금융교육 관계자 인터뷰를 진행했고, 전문 투자자 자문에서 나온 상반된 의견을 반영해 투자 지식 교육이 아닌 '투자 기질 점검과 반복 실수 경고' 방향으로 기획을 좁혔습니다.",
  pages:[36,58],
  video:true },

{ slug:"kuip", title:"KU IP Character — 3D & Sculpture", cat:"VR · 3D", filter:"vr3d",
  year:"2025", period:"2025.09 — 2025.12",
  role:"고려대학교 IP 캐릭터 3D 모델링 · 170cm 대형 조형물 제작",
  tool:"Blender · 3D 조형",
  summary:"고려대학교 디자인혁신센터 혁신단에서 진행한 IP 캐릭터 작업입니다. 캐릭터를 3D로 직접 모델링했고, 이 모델을 바탕으로 높이 170cm 의 대형 조형물로 제작했습니다. 화면 안에서 끝나지 않고 실물로 세워진 작업입니다.",
  pages:[1,5] },

{ slug:"lgcx", title:"LG Electronics CX Challenge", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2025", period:"2025.03 — 2025.06",
  role:"LG전자 CX에 대한 혁신적 접근과 문제 해결 제안",
  tool:"Figma",
  summary:"LG전자 HS사업본부와 진행한 산학 과제입니다. CX 관점에서 문제를 정의하고 해결 방향을 제안했으며, Best Practice Award 를 받았습니다.",
  award:"Best Practice Award · LG전자 산학 CX 혁신 과제",
  pages:[1,30],
  video:true },

{ slug:"vrcx", title:"VR CX — Unified Environment", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2024", period:"2023.10 — 2024.08",
  role:"통합 환경 UX 기획 · UI 디자인 · 통합 로비 3D 모델링 · 기업 홈페이지 리뉴얼 및 영상 제작",
  tool:"Figma · Blender · Adobe Ae",
  summary:"흩어져 있던 VR 콘텐츠들을 하나의 환경으로 묶는 통합 경험을 기획했습니다. 진입 지점이 되는 통합 로비를 3D로 모델링하고, 기업 홈페이지 리뉴얼과 소개 영상 제작까지 이어서 진행했습니다.",
  pages:[23,35] },

{ slug:"hippocampus", title:"Hippocampus — VR Learning Data LMS", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2024", period:"2023.06 — 2024.04",
  role:"UX 기획 · UI 디자인 및 컴포넌트 제작 · 개발 외주 소통 및 일정 관리",
  tool:"Figma",
  summary:"VR 시뮬레이터의 학습 데이터를 교수자가 확인하고 관리하는 LMS를 개편했습니다. UX 기획부터 UI 컴포넌트 제작까지 맡았고, 개발 외주 업체와의 소통과 일정 관리를 담당했습니다.",
  pages:[11,22] },

{ slug:"nrp", title:"NRP — Neonatal Resuscitation VR", cat:"VR · 3D", filter:"vr3d",
  year:"2024", period:"2023.06 — 2024.04",
  role:"VR 시뮬레이터 UI 디자인 · 3D 에셋 모델링, 리깅 및 웨이트 · 3D 애니메이션 제작",
  tool:"Figma · Blender · Unity",
  summary:"신생아 소생술(NRP) 절차를 VR에서 훈련하는 시뮬레이터입니다. 시뮬레이터 UI를 디자인하고 신생아와 처치 도구의 3D 에셋을 제작했습니다." },

{ slug:"rsd", title:"RS_D — Extraoral Radiography VR", cat:"VR · 3D", filter:"vr3d",
  year:"2024", period:"2024.07 — 2024.09",
  role:"3D 에셋 리깅 및 웨이트 작업 · 3D 애니메이션 제작",
  tool:"Blender · Unity",
  summary:"구외 방사선 촬영 술기를 다루는 시뮬레이터입니다. 장비와 인체 에셋의 리깅·웨이트 작업과 동작 애니메이션 제작을 담당했습니다." },

{ slug:"nsc", title:"NS_C — Core Nursing Skills VR", cat:"VR · 3D", filter:"vr3d",
  year:"2023", period:"2023.03 — 2023.06",
  role:"VR 시뮬레이터 UI 개편 · 3D 에셋 모델링, 리깅 및 웨이트 · 3D 애니메이션 제작",
  tool:"Figma · Blender · Unity",
  summary:"간호 술기 훈련용 VR 시뮬레이터입니다. 기존 UI를 개편하고, 술기에 쓰이는 3D 에셋을 직접 모델링·리깅하여 동작 애니메이션까지 제작했습니다." },

{ slug:"ipt", title:"IP_T — Trauma Team Training", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2023", period:"2023.08 — 2023.11",
  role:"교수자 소통 담당 · UX 기획 · VR 시뮬레이터 및 Logging 시스템 UI 디자인",
  tool:"Figma",
  summary:"중증외상 상황을 여러 직군이 함께 훈련하는 연계교육 콘텐츠입니다. 교수자와 직접 소통하며 UX를 기획하고, 시뮬레이터와 훈련 기록(Logging) 시스템의 UI를 디자인했습니다." },

{ slug:"tosel", title:"TOSEL Lab — English Learning Platform", cat:"UX·UI · IA", filter:"uxui",
  year:"2023", period:"2021.10 — 2023.02",
  role:"Branding 기획 및 디자인 · 웹 LMS UX/UI 기획 및 디자인 · 홍보 자료 · 학습 콘텐츠 인터랙션 에셋 · 프로젝트 후반 리드",
  tool:"Figma · Adobe Ps · Ai · Ae",
  summary:"영어 교육 웹 LMS의 브랜딩부터 UX/UI 기획·디자인, 학습 콘텐츠 인터랙션 에셋 제작까지 담당했습니다. 프로젝트 후반에는 리드를 맡았습니다.",
  pages:[1,10] },

{ slug:"homepage", title:"Corporate Website Renewal", cat:"VISUAL DESIGN", filter:"visual",
  year:"2023", period:"2022.12 — 2023.02",
  role:"UX/UI 디자인 · 홈페이지 배너 제작",
  tool:"Figma · Adobe Ps",
  summary:"기업 홈페이지를 개편하고 운영을 이어서 맡았습니다. 화면 디자인과 함께 시즌·프로모션 배너를 지속적으로 제작했습니다." },

{ slug:"bookstore", title:"Textbook E-commerce", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2022", period:"2021.12 — 2022.04",
  role:"UX/UI 및 정책 기획 · UX/UI 디자인 · 판매 제품 목업 및 홍보 자료 제작",
  tool:"Figma · Adobe Ps · Ai",
  summary:"영어 교재를 판매하는 온라인 스토어입니다. 화면 설계뿐 아니라 판매·배송 정책까지 함께 기획했고, 판매 제품 목업과 홍보 자료도 직접 제작했습니다." },

{ slug:"erp", title:"Internal Admin / ERP", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2022", period:"2022.10 — 2022.12",
  role:"CS · ERP · 개발 팀과 커뮤니케이션 담당 및 기획 · UX/UI 디자인",
  tool:"Figma",
  summary:"사내 운영 업무를 다루는 어드민과 ERP 화면입니다. CS·ERP·개발 팀 사이의 커뮤니케이션을 담당하며 요구사항을 정리해 기획하고, UX/UI 디자인까지 진행했습니다." },

{ slug:"print", title:"Textbook & Print Design", cat:"VISUAL · PRINT", filter:"visual",
  year:"2022", period:"2021.10 — 2022.12",
  role:"영어 교재 조판 및 디자인 · 달력, 카달로그, 브로셔 등 홍보물 디자인",
  tool:"Adobe Id · Ps · Ai",
  summary:"영어 교재의 조판과 디자인을 맡았고, 달력·카달로그·브로셔 등 인쇄 홍보물을 함께 제작했습니다." },

{ slug:"coway", title:"Coway Design Challenge", cat:"VISUAL · PRODUCT", filter:"visual",
  year:"2020", period:"2020.09 — 2020.12",
  role:"신가전 컨셉 디자인 제안",
  tool:"Rhino 3D · Keyshot · Adobe Ps · Ai",
  summary:"'포스트코로나 시대를 위한 신가전 컨셉 디자인'을 주제로 한 코웨이 상품개발센터 주관 디자인 챌린지입니다. 우수상(은상)을 수상했습니다.",
  pages:[1,50],
  award:"우수상 · 코웨이 산학 디자인 챌린지 2020" }

];

/* ---------- 여기서부터는 공용 헬퍼 (건드리지 않아도 됩니다) ---------- */
window.PJ = {
  all: function () { return window.PROJECTS || []; },
  find: function (slug) { return this.all().filter(function (p) { return p.slug === slug; })[0] || null; },
  index: function (slug) {
    var a = this.all();
    for (var i = 0; i < a.length; i++) if (a[i].slug === slug) return i;
    return -1;
  },
  next: function (slug) {
    var a = this.all(), i = this.index(slug);
    return i < 0 ? null : a[(i + 1) % a.length];
  },
  thumb: function (p, base) {
    return (base || '') + 'assets/img/thumb/thumb_' + p.slug + '.jpg';
  },
  // 상세 페이지 맨 위 영상. video: true 이거나 파일 이름을 직접 적으면 씁니다.
  // 파일이 없으면 뷰어가 조용히 건너뜁니다.
  video: function (p, base) {
    if (!p.video) return null;
    var file = (p.video === true) ? (p.slug + '.mp4') : p.video;
    return {
      src:    (base || '') + 'assets/video/' + file,
      poster: (base || '') + 'assets/video/' + p.slug + '.jpg'
    };
  },
  // 기본 4장 + 모바일 짝. 실제로 없는 파일은 화면에서 조용히 사라집니다.
  //
  // pages 쓰는 법 — 두 가지입니다.
  //
  //  1) 숫자 두 개 = 범위. 번호만 붙은 jpg 를 순서대로 읽습니다.
  //       pages: [1, 10]      → assets/img/<slug>/1.jpg … 10.jpg
  //       pages: [11, 22]     → 11.jpg … 22.jpg  (내보낸 페이지 번호 그대로)
  //
  //  2) 목록 = 파일을 직접 나열. 중간에 짧은 영상을 끼워 넣을 때 씁니다.
  //       pages: ["36", "37", "demo.mp4", "38", "39"]
  //     확장자가 없으면 .jpg 로 봅니다. 순서가 그대로 화면 순서입니다.
  //     .mp4 / .webm 은 소리 없이 자동 반복 재생됩니다.
  shots: function (p, base) {
    if (p.pages) {
      var out = [];
      var dir = (base || '') + 'assets/img/' + p.slug + '/';

      // 목록으로 준 경우
      if (p.pages.length && typeof p.pages[0] === 'string') {
        p.pages.forEach(function (item) {
          var file = /\.[a-z0-9]+$/i.test(item) ? item : (item + '.jpg');
          out.push({ pc: dir + file, mo: '', name: p.slug + '_' + file.replace(/\.[^.]+$/, '') });
        });
        return out;
      }

      // 숫자 범위로 준 경우
      var from = p.pages[0], to = p.pages[1];
      for (var i = from; i <= to; i++) {
        out.push({ pc: dir + i + '.jpg', mo: '', name: p.slug + '_' + i });
      }
      return out;
    }
    var names = p.shots || ['01_main', '02_flow', '03_ui', '04_detail'];
    return names.map(function (n) {
      return {
        pc: (base || '') + 'assets/img/' + p.slug + '/' + p.slug + '_' + n + '.jpg',
        mo: (base || '') + 'assets/img/' + p.slug + '/' + p.slug + '_' + n + '@mo.jpg',
        name: p.slug + '_' + n
      };
    });
  },
  counts: function () {
    var c = { all: 0, uxui: 0, vr3d: 0, visual: 0 };
    this.all().forEach(function (p) { c.all++; if (c[p.filter] !== undefined) c[p.filter]++; });
    return c;
  },
  pad: function (n) { return (n < 10 ? '0' : '') + n; }
};
