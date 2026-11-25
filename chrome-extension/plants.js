// Matcha garden for claude.ai: adds the paper-cut plants and keeps the left one
// clear of the sidebar, whose width the page states on <html>.
(() => {
  const LEFT = `<svg class="mg-left" viewBox="0 0 260 560" aria-hidden="true">
<g class="sway"><path class="stem" stroke-width="7" d="M150 570 C 140 420, 130 260, 120 100"/>
<path class="l1" d="M122 120 C 90 80, 60 60, 30 65 C 55 100, 90 120, 122 120 Z"/>
<path class="l1" d="M126 185 C 88 150, 50 135, 18 145 C 48 180, 90 195, 126 185 Z"/>
<path class="l1" d="M131 255 C 92 222, 52 210, 20 222 C 52 255, 95 268, 131 255 Z"/>
<path class="l1" d="M137 330 C 96 300, 56 290, 22 304 C 56 336, 100 346, 137 330 Z"/>
<path class="l1" d="M143 410 C 102 382, 60 375, 26 390 C 62 420, 106 428, 143 410 Z"/>
<path class="l1" d="M148 490 C 108 465, 66 460, 32 476 C 70 504, 112 510, 148 490 Z"/>
<path class="l2" d="M124 135 C 155 95, 185 75, 215 78 C 192 115, 158 135, 124 135 Z"/>
<path class="l2" d="M128 200 C 165 165, 200 152, 232 160 C 204 196, 165 210, 128 200 Z"/>
<path class="l2" d="M133 272 C 172 240, 210 230, 242 240 C 212 274, 172 286, 133 272 Z"/>
<path class="l2" d="M139 348 C 180 320, 218 312, 250 324 C 220 356, 178 366, 139 348 Z"/>
<path class="l2" d="M145 428 C 186 402, 224 396, 256 410 C 224 440, 182 448, 145 428 Z"/>
<path class="l3" d="M120 105 C 110 65, 112 30, 124 0 C 136 30, 134 65, 120 105 Z"/></g>
<g class="sway" style="animation-duration: 14s"><path class="l3" d="M0 560 C 40 500, 100 475, 170 485 C 120 525, 60 555, 0 560 Z"/>
<path class="l2" d="M60 570 C 80 510, 120 460, 175 435 C 160 490, 120 535, 60 570 Z"/></g></svg>`

  const RIGHT_TOP = `<svg class="mg-right-top" viewBox="280 120 180 390" aria-hidden="true">
<g class="hang"><path class="stem" stroke-width="5" d="M450 150 C 390 200, 340 300, 330 470"/>
<circle class="l1" cx="405" cy="185" r="34"/><circle class="l2" cx="368" cy="232" r="30"/>
<circle class="l3" cx="420" cy="255" r="27"/><circle class="l1" cx="345" cy="290" r="28"/>
<circle class="l2" cx="390" cy="330" r="25"/><circle class="l3" cx="330" cy="360" r="23"/>
<circle class="l1" cx="365" cy="400" r="21"/><circle class="l2" cx="332" cy="440" r="18"/>
<circle class="l1" cx="338" cy="478" r="13"/></g></svg>`

  const RIGHT = `<svg class="mg-right" viewBox="270 730 170 270" aria-hidden="true">
<g class="sway" style="animation-duration: 13s"><path class="l2" d="M440 1000 C 400 900, 360 830, 300 780 C 350 860, 380 930, 400 1000 Z"/>
<path class="l1" d="M440 1000 C 430 900, 420 820, 440 740 L 440 1000 Z"/>
<path class="l3" d="M380 1000 C 360 940, 330 900, 280 880 C 320 930, 345 965, 355 1000 Z"/></g>
<g class="sway" style="animation-duration: 12s"><g transform="translate(345 905)">
<path class="p1" d="M0 -42 L 30 -28 L 40 4 L 22 34 L -14 40 L -40 16 L -36 -22 Z"/>
<path class="p2" d="M0 -26 L 19 -17 L 25 3 L 14 22 L -9 25 L -25 10 L -22 -14 Z"/>
<circle class="p1" r="9"/><circle class="p2" r="4"/></g></g></svg>`

  const root = document.documentElement

  // Where the sidebar card ends, so the left plant starts just past it.
  function syncSidebar() {
    const sidebar = document.querySelector('.dframe-sidebar')
    const collapsed = document.querySelector('.dframe-root[data-collapsed]') !== null
    const edge = sidebar && !collapsed ? Math.round(sidebar.getBoundingClientRect().right) : 0
    root.style.setProperty('--mg-sidebar', `${edge}px`)
  }

  function mount() {
    if (document.getElementById('matcha-garden-plants') || !document.body) {
      return
    }
    const layer = document.createElement('div')
    layer.id = 'matcha-garden-plants'
    layer.innerHTML = LEFT + RIGHT_TOP + RIGHT
    document.body.appendChild(layer)
  }

  addEventListener('resize', syncSidebar)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount)
  } else {
    mount()
  }
  // The app can replace <body> content; put the plants back if they go.
  new MutationObserver(mount).observe(document.documentElement, { childList: true, subtree: false })
  setInterval(() => {
    mount()
    syncSidebar()
  }, 1000)
})()
