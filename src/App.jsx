/* ====== 全域：阻止內容水平位移、優化閱讀 ====== */
html, body, #root {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;              /* 防止任何區塊造成水平捲動 */
  -webkit-text-size-adjust: 100%;  /* iOS 旋轉縮放時避免字突增突減 */
}

/* 行動裝置基準字級：略放大（Tailwind 我們也用 text-[17px]/[18px] 疊加） */
@media (max-width: 640px) {
  html { font-size: 17px; }
}
@media (min-width: 640px) and (max-width: 768px) {
  html { font-size: 18px; }
}

/* 讓橫向分頁列有 iOS 慣性滑動、且不影響整頁捲動 */
.ios-momentum {
  -webkit-overflow-scrolling: touch;
}

/* 僅允許 X 軸滑動（避免垂直捲動時誤觸） */
.touch-pan-x {
  touch-action: pan-x; /* 指定單軸滑動，提升可用性，阻止非必要的手勢衝突 */
}

/* 橫向滾動時不要把整頁帶著跑 */
.overscroll-x-contain {
  overscroll-behavior-x: contain;
}

/* 隱藏水平卷軸（仍可滑動） */
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

/* 任何媒體不超出容器，避免「左右飄移」 */
img, video, canvas, svg, iframe, embed, object {
  max-width: 100% !important;
  height: auto;
}

/* 表格、程式碼、超長網址在手機上自動換行 */
table {
  width: 100%;
  border-collapse: collapse;
}
code, pre, kbd, samp {
  white-space: pre-wrap;
  word-wrap: break-word;
}
a, p, li, blockquote {
  overflow-wrap: anywhere; /* 讓極長單字/URL 也可換行 */
}

/* 卡片/容器在小螢幕不超寬 */
.container, .max-w-screen-xl, .prose, .card, .Card {
  max-width: 100%;
}

/* 提升按鈕觸控可點性（如果沒用 Tailwind 的 padding/min-w，可用這個） */
button, [role="button"], [role="tab"] {
  min-height: 44px;
  min-width: 44px;
}

/* 偏好減少動效的使用者：降低動畫以避免暈動感 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 可選：小小的「滑動提示」漸隱效果（當分頁列可以再向右捲動時顯示） */
/* 需要的話，可以在 nav 外再包一層相對定位容器，放置左右陰影。此處提供通用 class。 */
.scroll-hint {
  position: relative;
}
.scroll-hint::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0; bottom: 0;
  width: 28px;
  pointer-events: none;
  background: linear-gradient(to left, rgba(255,255,255,0.9), rgba(255,255,255,0));
}
