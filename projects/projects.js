/* ============================================================
   프로젝트 목록 — 이 파일이 유일한 원본입니다.

   메인 페이지(index.html)의 카드와 상세 페이지(view.html)가
   전부 여기서 읽어갑니다. 카드 HTML을 손으로 쓰지 않습니다.

   ── 이미지 넣는 법 ────────────────────────────────────────
   Figma "Claude · Content Kit" 의 슬롯 이름 = 파일 이름입니다.
   프레임을 골라 JPG 로 내보낸 뒤, 아래 폴더에 그대로 넣으세요.

     썸네일   assets/img/thumb/thumb_<slug>.jpg
     PC 상세  assets/img/<slug>/<slug>_01_main.webp
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
  pages:["1","2.mp4","3","4","5","6","7.webm","8","9","10.webm","11","12","13","14.webm","15","16.webm","17.webm","18","19","20","21"],
  /* notes — 몇 번째 장 앞에 들어갈 글인지. [섹션, 소제목, 설명] */
  notes:{
    1:["ABOUT","아이의 관심사로 쉽고 재미있게 배우는 가족형 투자 학습 서비스",
       "본 프로젝트는 초등학교 고학년을 위한 가족형 금융 학습 서비스 「Finpong」의 기획·디자인 결과물이다. 부모 세대의 소극적인 투자 교육 현실에서 출발해, 아이가 관심사를 통해 쉽고 재미있게 투자 개념을 배우고 부모와 함께 성장할 수 있도록 설계하였다. 아이와 부모는 각자 기업을 탐색하며 서로의 시각에서 투자 원리를 이해하는 상호 참여형 학습 경험을 제공한다."],
    3:["Overview","투자가 필수인 시대, 우리 아이에게는 어떻게?",
       "부모가 대신 투자해준 아이, 성인이 되면 스스로 운용할 수 있을까요?\n미성년 시기에는 투자 경험이 미뤄지고, 성인이 되어 무작정 시작하는 투자는 투기로 변질되고 있습니다.\n한편 부모 세대는 자녀에게 올바른 투자를 교육할 자신이 없습니다."],
    4:["Field Research","기존의 교육과 서비스는 어떨까요?",
       "소중한 자녀들의 투자 교육은 현실에서 어떻게 이루어지고 있는지, 국내외 투자 교육과 관련된 공교육 현황과 참고문헌에서 실질적인 투자 조기 교육의 필요성을 느낄 수 있었습니다."],
    5:["User Research","실제 부모들과 투자 및 금융 전문가의 입장은?",
       "유치원 ~ 초등학교 고학년까지의 학부모들과 투자 및 금융 교육 등의 업계에 종사하고 있는 전문가들의 의견을 함께 분석하여 서비스에 필요한 인사이트를 얻을 수 있었습니다."],
    6:["Solution","자녀들을 위한 조기 투자 교육 서비스",
       "데스크 리서치와 유저 리서치 및 기존 사례들을 보완하여 아이들이 흥미를 가지고 실전적인 투자를 경험할 수 있는 서비스를 기획하였습니다."],
    9:["Use Case 01","기업 분석에 재미를 더하는 탐색",
       "평소에 좋아하고 관심 있는 제품 및 서비스와 관련된 기업과 산업을 위주로 탐색을 진행하며 단순히 글을 읽는 것보다는 재미있게 탐색할 수 있게 구성하였습니다."],
    10:["Use Case 01","관심 주제 선택",
       "선택한 주제를 기반으로 알고리즘이 아이의 관심 영역을 중심으로 구성하여, 흥미를 유도하고 자연스럽게 탐색을 이어갈 수 있도록 사전 과정을 진행합니다."],
    11:["Use Case 01","기업을 매수하기 전엔 퀴즈로 이해 점검",
       "기업에 대한 적절한 이해를 가지고 있는지 점검하기 위해 해당 기업을 매수하기 전 간단한 퀴즈를 통해 이해도를 확인합니다."],
    12:["Use Case 02","게임을 통해 부모님과 함께 배워가는",
       "부모와 아이가 함께 기업 정보를 이용하는 게임을 통해 투자 판단 과정을 간접 경험합니다. 즐거운 경쟁을 통해 자연스럽게 관심 기업에 대한 깊은 이해와 다양한 기업 정보를 접합니다."],
    13:["Use Case 02","핀퐁 플레이 시작",
       "핀퐁 플레이를 실행하게 되면 게임 인트로에서 플레이어가 튜토리얼을 통해 규칙을 익히거나 바로 게임을 시작할 수 있습니다."],
    14:["Use Case 02","캐릭터가 알려주는 튜토리얼",
       "게임 시작 전 튜토리얼 화면으로, 플레이 방식과 기업 탐색 방법을 직관적으로 안내합니다. 아이와 부모가 게임 규칙을 이해하며 투자 게임 과정을 자연스럽게 준비할 수 있습니다."],
    15:["Use Case 02","게임 결과에 따른 리워드",
       "승자는 패자의 포트폴리오 일부를 자신의 포트폴리오에 편입하며 새로운 기업을 탐색합니다. 이를 통해 자연스럽게 다양한 산업과 기업에 대한 흥미와 관심이 확장됩니다."],
    16:["Use Case 03","자산 현황과 자세한 정보 탐색",
       "홈, 프로필, 포트폴리오 페이지에서는 나의 자산 현황과 투자 성과를 한눈에 점검할 수 있습니다. 또한 기사·이슈·리포트·경제 캘린더를 통해 시장 흐름을 파악하고, 맞춤형 피드백으로 투자 역량을 성장시킵니다."],
    18:["Use Case 03","투자 스타일 점검과 피드백",
       "간단한 질문에 답하며 나의 투자 스타일을 점검하고 개인화된 피드백을 받습니다. 이를 통해 나와 유사한 투자 대가를 찾아 그의 포트폴리오와 저서를 탐색하며 투자 통찰을 확장합니다."]
  } },

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
  year:"2024", period:"2023.06 — 2023.12",
  role:"통합 환경 UX 기획 · UI 디자인 · 통합 로비 3D 모델링 · 기업 홈페이지 리뉴얼 및 영상 제작",
  tool:"Figma · Blender · Adobe Ae",
  summary:"흩어져 있던 VR 콘텐츠들을 하나의 환경으로 묶는 통합 경험을 기획했습니다. 진입 지점이 되는 통합 로비를 3D로 모델링하고, 기업 홈페이지 리뉴얼과 소개 영상 제작까지 이어서 진행했습니다.",
  pages:[7,11] },

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
  summary:"간호 술기 훈련용 VR 시뮬레이터입니다. 기존 UI를 개편하고, 술기에 쓰이는 3D 에셋을 직접 모델링·리깅하여 동작 애니메이션까지 제작했습니다.",
  pages:[1,4],
  yt:"I_f2ii4a3Bk" },

{ slug:"ipt", title:"IP_T — Trauma Team Training", cat:"UX·UI DESIGN", filter:"uxui",
  year:"2023", period:"2023.08 — 2023.11",
  role:"교수자 소통 담당 · UX 기획 · VR 시뮬레이터 및 Logging 시스템 UI 디자인",
  tool:"Figma",
  summary:"중증외상 상황을 여러 직군이 함께 훈련하는 연계교육 콘텐츠입니다. 교수자와 직접 소통하며 UX를 기획하고, 시뮬레이터와 훈련 기록(Logging) 시스템의 UI를 디자인했습니다.",
  pages:[1,4],
  yt:"CXtCIWhphxQ" },

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
  pages:[1,51],
  award:"우수상 · 코웨이 산학 디자인 챌린지 2020" }

];

/* ---- 캡쳐용 임시 숨김 ----
   썸네일이 아직 없는 프로젝트를 목록·상세에서 전부 빼둡니다.
   썸네일이 준비되면 그 slug 만 아래 배열에서 지우면 되고,
   전부 되돌리려면 배열을 비우면 됩니다 → window.HIDDEN = []; */
window.HIDDEN = ["crown","nrp","rsd","homepage","bookstore","erp","print"];

/* ---------- 여기서부터는 공용 헬퍼 (건드리지 않아도 됩니다) ---------- */
window.PJ = {
  all: function () {
    var h = window.HIDDEN || [];
    return (window.PROJECTS || []).filter(function (p) { return h.indexOf(p.slug) < 0; });
  },
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
  //  1) 숫자 두 개 = 범위. 번호만 붙은 webp 를 순서대로 읽습니다.
  //       pages: [1, 10]      → assets/img/<slug>/1.webp … 10.webp
  //       pages: [11, 22]     → 11.webp … 22.webp  (내보낸 페이지 번호 그대로)
  //
  //  2) 목록 = 파일을 직접 나열. 중간에 짧은 영상을 끼워 넣을 때 씁니다.
  //       pages: ["36", "37", "demo.mp4", "38", "39"]
  //     확장자가 없으면 .webp 로 봅니다. 순서가 그대로 화면 순서입니다.
  //     .mp4 / .webm 은 소리 없이 자동 반복 재생됩니다.
  shots: function (p, base) {
    if (p.pages) {
      var out = [];
      var dir = (base || '') + 'assets/img/' + p.slug + '/';

      // 목록으로 준 경우
      if (p.pages.length && typeof p.pages[0] === 'string') {
        p.pages.forEach(function (item) {
          var file = /\.[a-z0-9]+$/i.test(item) ? item : (item + '.webp');
          out.push({ pc: dir + file, mo: '', name: p.slug + '_' + file.replace(/\.[^.]+$/, '') });
        });
        return out;
      }

      // 숫자 범위로 준 경우
      var from = p.pages[0], to = p.pages[1];
      for (var i = from; i <= to; i++) {
        out.push({ pc: dir + i + '.webp', mo: '', name: p.slug + '_' + i });
      }
      return out;
    }
    var names = p.shots || ['01_main', '02_flow', '03_ui', '04_detail'];
    return names.map(function (n) {
      return {
        pc: (base || '') + 'assets/img/' + p.slug + '/' + p.slug + '_' + n + '.webp',
        mo: (base || '') + 'assets/img/' + p.slug + '/' + p.slug + '_' + n + '@mo.webp',
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
