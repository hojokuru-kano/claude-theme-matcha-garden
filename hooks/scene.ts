// Matcha garden: paper-cut plants in the window margins, swaying slowly.
// Kept in step with the preview page (matcha-preview.html).
export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<style>
.ground { fill: #EEF0E2; }
.l1 { fill: #A2B784; }
.l2 { fill: #8CA36D; }
.l3 { fill: #B5C69B; }
.stem { stroke: #7E9462; fill: none; stroke-linecap: round; }
.petal { fill: #C8604A; }
.petal2 { fill: #B04E3A; }
.sway-a { transform-box: fill-box; transform-origin: 50% 100%; animation: sway 11s ease-in-out infinite; }
.sway-b { transform-box: fill-box; transform-origin: 100% 0%; animation: sway 15s ease-in-out infinite reverse; }
.slow { animation-duration: 14s; }
@keyframes sway { 0%, 100% { transform: rotate(-1.2deg); } 50% { transform: rotate(1.4deg); } }
@media (prefers-color-scheme: dark) {
  .ground { fill: #1C2219; }
  .l1 { fill: #3F5434; }
  .l2 { fill: #4C6440; }
  .l3 { fill: #34462B; }
  .stem { stroke: #5A7148; }
  .petal { fill: #9A4A3A; }
  .petal2 { fill: #7E3B2E; }
}
</style>
<defs>
<filter id="paper" x="-10%" y="-10%" width="130%" height="130%">
<feDropShadow dx="5" dy="6" stdDeviation="0" flood-color="#5E6A4C" flood-opacity="0.3"/>
</filter>
</defs>
<rect class="ground" x="0" y="0" width="100%" height="100%"/>

<!-- left plant sits just right of the sidebar -->
<svg x="256" y="30%" width="100%" height="70%" viewBox="0 0 440 1000" preserveAspectRatio="xMinYMax meet">
<g class="sway-a" filter="url(#paper)">
<path class="stem" stroke-width="7" d="M150 1010 C 140 860, 130 700, 120 540"/>
<path class="l1" d="M122 560 C 90 520, 60 500, 30 505 C 55 540, 90 560, 122 560 Z"/>
<path class="l1" d="M126 625 C 88 590, 50 575, 18 585 C 48 620, 90 635, 126 625 Z"/>
<path class="l1" d="M131 695 C 92 662, 52 650, 20 662 C 52 695, 95 708, 131 695 Z"/>
<path class="l1" d="M137 770 C 96 740, 56 730, 22 744 C 56 776, 100 786, 137 770 Z"/>
<path class="l1" d="M143 850 C 102 822, 60 815, 26 830 C 62 860, 106 868, 143 850 Z"/>
<path class="l1" d="M148 930 C 108 905, 66 900, 32 916 C 70 944, 112 950, 148 930 Z"/>
<path class="l2" d="M124 575 C 155 535, 185 515, 215 518 C 192 555, 158 575, 124 575 Z"/>
<path class="l2" d="M128 640 C 165 605, 200 592, 232 600 C 204 636, 165 650, 128 640 Z"/>
<path class="l2" d="M133 712 C 172 680, 210 670, 242 680 C 212 714, 172 726, 133 712 Z"/>
<path class="l2" d="M139 788 C 180 760, 218 752, 250 764 C 220 796, 178 806, 139 788 Z"/>
<path class="l2" d="M145 868 C 186 842, 224 836, 256 850 C 224 880, 182 888, 145 868 Z"/>
<path class="l3" d="M120 545 C 110 505, 112 470, 124 440 C 136 470, 134 505, 120 545 Z"/>
</g>
<g class="sway-a slow" filter="url(#paper)">
<path class="l3" d="M0 1000 C 40 940, 100 915, 170 925 C 120 965, 60 995, 0 1000 Z"/>
<path class="l2" d="M60 1010 C 80 950, 120 900, 175 875 C 160 930, 120 975, 60 1010 Z"/>
</g>
</svg>

<svg x="0" y="0" width="100%" height="100%" viewBox="0 0 440 1000" preserveAspectRatio="xMaxYMin meet">
<g class="sway-b" filter="url(#paper)">
<path class="stem" stroke-width="5" d="M450 150 C 390 200, 340 300, 330 470"/>
<circle class="l1" cx="405" cy="185" r="34"/>
<circle class="l2" cx="368" cy="232" r="30"/>
<circle class="l3" cx="420" cy="255" r="27"/>
<circle class="l1" cx="345" cy="290" r="28"/>
<circle class="l2" cx="390" cy="330" r="25"/>
<circle class="l3" cx="330" cy="360" r="23"/>
<circle class="l1" cx="365" cy="400" r="21"/>
<circle class="l2" cx="332" cy="440" r="18"/>
<circle class="l1" cx="338" cy="478" r="13"/>
</g>
</svg>

<svg x="0" y="0" width="100%" height="100%" viewBox="0 0 440 1000" preserveAspectRatio="xMaxYMax meet">
<g class="sway-a" filter="url(#paper)" style="animation-duration: 13s">
<path class="l2" d="M440 1000 C 400 900, 360 830, 300 780 C 350 860, 380 930, 400 1000 Z"/>
<path class="l1" d="M440 1000 C 430 900, 420 820, 440 740 L 440 1000 Z"/>
<path class="l3" d="M380 1000 C 360 940, 330 900, 280 880 C 320 930, 345 965, 355 1000 Z"/>
</g>
<g class="sway-a" filter="url(#paper)" style="animation-duration: 12s">
<g transform="translate(345 905)">
<path class="petal" d="M0 -42 L 30 -28 L 40 4 L 22 34 L -14 40 L -40 16 L -36 -22 Z"/>
<path class="petal2" d="M0 -26 L 19 -17 L 25 3 L 14 22 L -9 25 L -25 10 L -22 -14 Z"/>
<circle class="petal" r="9"/>
<circle class="petal2" r="4"/>
</g>
</g>
</svg>
</svg>`
