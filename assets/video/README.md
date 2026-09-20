# assets/video

프로젝트 상세 페이지 맨 위에 붙는 영상입니다.

## 파일 이름
    assets/video/<slug>.mp4      영상 본체 (필수)
    assets/video/<slug>.jpg      표지 이미지 (선택, 없으면 첫 프레임)

`<slug>` 은 projects/projects.js 의 slug 와 같습니다. 예: finpong.mp4

## 연결
projects.js 의 해당 항목에 한 줄만 더합니다.

    video: true          → assets/video/<slug>.mp4 를 씁니다
    video: "abc.mp4"     → 파일 이름을 직접 지정할 때

영상은 이미지보다 **먼저** 나옵니다. 파일이 없으면 조용히 건너뜁니다.

## 권장 사양
- 코덱 H.264 (mp4), 오디오 AAC — 안 쓰면 아예 빼세요
- 1080p (1920x1080) 또는 720p
- **15MB 이하**를 권장합니다. 아래 "용량" 참고

## 용량 — 왜 작게 만들어야 하나
- GitHub 는 파일 하나가 **100MB 를 넘으면 아예 거부**하고, 50MB 부터 경고합니다
- GitHub Pages 는 사이트 전체 **1GB**, 트래픽 월 **100GB** 가 한도입니다
- Git LFS 는 쓰면 안 됩니다 — **Pages 가 LFS 파일을 서빙하지 않아** 영상이 깨집니다
- 한 번 커밋하면 히스토리에 영원히 남습니다. 지워도 저장소는 안 줄어듭니다
- 이 저장소는 이미 .git 이 100MB 를 넘었고, 41MB 를 푸시하다 끊긴 적이 있습니다

### 줄이는 법 (ffmpeg)
    # 1080p, 약 3Mbps — 1분에 대략 22MB
    ffmpeg -i 원본.mov -vcodec libx264 -crf 24 -preset slow \
           -vf scale=1920:-2 -an finpong.mp4

    # 720p, 더 가볍게 — 1분에 대략 9MB
    ffmpeg -i 원본.mov -vcodec libx264 -crf 26 -preset slow \
           -vf scale=1280:-2 -an finpong.mp4

`-an` 은 소리를 빼는 옵션입니다. 소리가 필요하면 빼고 `-c:a aac -b:a 96k` 를 붙이세요.

---

## 이미지 사이에 움직이는 화면을 넣고 싶을 때

**소리 없는 mp4 를 씁니다. GIF 는 쓰지 않습니다** — 같은 화면이 10~20배 무겁습니다.

    ffmpeg -i 화면녹화.mov -vf "scale=1280:-2,fps=24" \
           -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p \
           -movflags +faststart -an flow.mp4

`assets/img/<slug>/` 에 넣고 `pages: ["36", "flow.mp4", "37"]` 처럼 적습니다.
소리 없이 자동 반복되고 컨트롤은 안 나옵니다.
