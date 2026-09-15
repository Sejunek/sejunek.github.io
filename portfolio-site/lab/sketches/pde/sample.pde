/* ------------------------------------------------------------
   sample.pde — Processing.js 동작 확인용 예시
   예전에 만드신 .pde 파일을 이 폴더에 넣고
   _pde.html?file=파일명.pde 로 열면 그대로 실행됩니다.
   ------------------------------------------------------------ */

float t = 0;

void setup() {
  size(window.innerWidth, window.innerHeight);
  noFill();
  strokeWeight(1);
  smooth();
}

void draw() {
  background(255);
  translate(width / 2, height / 2);

  float m = dist(mouseX, mouseY, width / 2, height / 2) / max(width, height);

  stroke(45, 69, 255);
  int n = 60;
  for (int i = 0; i < n; i++) {
    float a = TWO_PI * i / n;
    float r = min(width, height) * 0.32;
    float w = sin(a * 5 + t) * (18 + m * 90);
    float x1 = cos(a) * (r + w);
    float y1 = sin(a) * (r + w);
    float x2 = cos(a + PI) * (r + w) * 0.35;
    float y2 = sin(a + PI) * (r + w) * 0.35;
    line(x1, y1, x2, y2);
  }

  noStroke();
  fill(17);
  textSize(11);
  text("PROCESSING.JS — sample.pde", -width / 2 + 20, height / 2 - 20);

  t += 0.02;
}
