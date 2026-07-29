/* <rope-glyph> — a single continuous line that unties and reties itself into each icon.
   Zero dependencies. Usage:
     <script src="rope-glyph.js"></script>
     <rope-glyph shape="orbit" style="width:34px;height:34px;color:#0d7f8c"></rope-glyph>
   Change shape:  el.setAttribute('shape','layers')  (or el.shape = 'layers' / an index 0-8)
   Shapes: orbit, layers, list, play, mic, person, chart, clock, loop
   Stroke follows CSS `color` (currentColor). Respects prefers-reduced-motion.
*/
(function () {
  'use strict';
  const N = 130, TAU = Math.PI * 2, D = Math.PI / 180;
  const arc = (cx, cy, rx, ry, a0, a1, rot) => {
    const o = [], n = Math.max(10, Math.ceil(Math.abs(a1 - a0) * 9)), cr = Math.cos(rot || 0), sr = Math.sin(rot || 0);
    for (let i = 0; i <= n; i++) {
      const a = a0 + (a1 - a0) * i / n, px = rx * Math.cos(a), py = ry * Math.sin(a);
      o.push([cx + px * cr - py * sr, cy + px * sr + py * cr]);
    }
    return o;
  };
  const poly = (pts) => {
    const o = [];
    for (let i = 1; i < pts.length; i++) {
      const n = Math.max(2, Math.ceil(Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]) * 2));
      for (let j = (i === 1 ? 0 : 1); j <= n; j++) o.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * j / n, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * j / n]);
    }
    return o;
  };
  const cat = (a) => a.reduce((m, s) => m.concat(s), []);
  const pill = (x1, x2, cy, r) => cat([poly([[x1, cy - r], [x2, cy - r]]), arc(x2, cy, r, r, -Math.PI / 2, Math.PI / 2), poly([[x2, cy + r], [x1, cy + r]]), arc(x1, cy, r, r, Math.PI / 2, Math.PI * 1.5)]);
  const resample = (pts) => {
    const L = [0]; let tot = 0;
    for (let i = 1; i < pts.length; i++) { tot += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); L.push(tot); }
    const out = []; let j = 0;
    for (let i = 0; i < N; i++) {
      const t = tot * i / (N - 1);
      while (j < pts.length - 2 && L[j + 1] < t) j++;
      const f = (t - L[j]) / Math.max(1e-6, L[j + 1] - L[j]);
      out.push([pts[j][0] + (pts[j + 1][0] - pts[j][0]) * f, pts[j][1] + (pts[j + 1][1] - pts[j][1]) * f]);
    }
    return out;
  };
  // each shape is ONE continuous line in a 24x24 box
  const SHAPES = [
    cat([arc(12, 12, 4.4, 4.4, -28 * D, -28 * D + TAU), arc(12, 12, 10, 4.6, 0, TAU, -28 * D)]),
    cat([pill(5.5, 13.5, 6.5, 2.5), pill(8.5, 16.5, 13, 2.5), pill(11.25, 18.75, 19.25, 2.25)]),
    cat([arc(4.5, 6.5, 1.5, 1.5, 0, TAU), poly([[6, 6.5], [20, 6.5], [6, 12]]), arc(4.5, 12, 1.5, 1.5, 0, TAU), poly([[6, 12], [17, 12], [6, 17.5]]), arc(4.5, 17.5, 1.5, 1.5, 0, TAU), poly([[6, 17.5], [20, 17.5]])]),
    poly([[7, 4.6], [20, 12], [7, 19.4], [7, 4.6], [8.4, 5.4]]),
    cat([arc(12, 5.6, 3, 3, Math.PI, TAU), poly([[15, 5.6], [15, 10.6]]), arc(12, 10.6, 3, 3, 0, Math.PI), poly([[9, 10.6], [9, 5.6]]), arc(12, 11.4, 7, 7, Math.PI, 0), arc(12, 11.4, 7, 7, 0, Math.PI / 2), poly([[12, 18.4], [12, 21.6]])]),
    cat([arc(12, 4.2, 2.6, 2.6, 2.4, 2.4 + TAU), poly([[9.9, 6.1], [4, 21], [20, 21], [14.1, 6.1]])]),
    poly([[3.5, 20.5], [7, 20.5], [7, 13], [7, 20.5], [12, 20.5], [12, 7], [12, 20.5], [17, 20.5], [17, 10], [17, 20.5], [20.5, 20.5]]),
    cat([arc(12, 12, 9, 9, -Math.PI / 2, -Math.PI / 2 + TAU), poly([[12, 6.8], [12, 12], [16, 14.4]])]),
    cat([arc(12, 12, 4, 4, 0, TAU), poly([[16, 12], [16.8, 13.6]]), arc(12, 12, 9, 9, .33, .33 - .86 * TAU)])
  ].map(resample);
  const NAMES = ['orbit', 'layers', 'list', 'play', 'mic', 'person', 'chart', 'clock', 'loop'];
  const ease = (t) => (1 - Math.cos(Math.PI * t)) / 2;
  const DUR = 1700, SETTLE = 1600;

  class RopeGlyph extends HTMLElement {
    static get observedAttributes() { return ['shape', 'stroke-width']; }
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;width:100%;height:100%;overflow:visible"><path d="M3 12 L21 12"></path></svg>';
      this._svg = root.querySelector('svg');
      this._path = root.querySelector('path');
      this._cur = SHAPES[0].map((p) => p.slice());
      this._from = SHAPES[0];
      this._to = SHAPES[0];
      this._t0 = -1e9;
      this._lastD = '';
      this._bx = new Array(N); this._by = new Array(N);
      this._loop = this._loop.bind(this);
    }
    connectedCallback() {
      if (!this.style.width && !this.getAttribute('style')) { this.style.width = '24px'; this.style.height = '24px'; }
      this.style.display = this.style.display || 'inline-block';
      this._reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
      this._syncShape(true);
      this._raf = requestAnimationFrame(this._loop);
    }
    disconnectedCallback() { cancelAnimationFrame(this._raf); }
    attributeChangedCallback(name) {
      if (name === 'stroke-width') this._svg.setAttribute('stroke-width', this.getAttribute('stroke-width') || '1.5');
      if (name === 'shape' && this._svg) this._syncShape(false);
    }
    get shape() { return this.getAttribute('shape'); }
    set shape(v) { this.setAttribute('shape', String(v)); }
    _syncShape(instant) {
      const v = this.getAttribute('shape') || '0';
      const idx = NAMES.indexOf(v) >= 0 ? NAMES.indexOf(v) : Math.max(0, Math.min(SHAPES.length - 1, parseInt(v, 10) || 0));
      if (SHAPES[idx] === this._to) return;
      this._from = instant ? SHAPES[idx] : this._cur.map((p) => p.slice());
      this._to = SHAPES[idx];
      this._t0 = instant ? -1e9 : performance.now();
    }
    _loop(ts) {
      this._raf = requestAnimationFrame(this._loop);
      if (document.hidden) return;
      const rm = this._reduced && this._reduced.matches;
      const from = this._from, to = this._to, bx = this._bx, by = this._by, cur = this._cur;
      const prog = Math.min(1, Math.max(0, (ts - this._t0) / (rm ? 260 : DUR)));
      const time = ts / 1000;
      let act = prog < 1 ? 1 : Math.min(1, Math.max(0, 1 - (ts - this._t0 - (rm ? 260 : DUR)) / SETTLE));
      act = act * act * (3 - 2 * act);
      if (rm) act = 0;
      if (!act && prog >= 1 && this._still) return; // fully settled: no work
      this._still = !act && prog >= 1;
      const gEn = rm ? 0 : Math.sin(Math.PI * prog) * act;
      const S = .8;
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const li = Math.min(1, Math.max(0, prog * (1 + S) - u * S));
        const e = rm ? li : ease(li);
        bx[i] = from[i][0] + (to[i][0] - from[i][0]) * e;
        by[i] = from[i][1] + (to[i][1] - from[i][1]) * e;
      }
      const rot = act * (.03 * Math.sin(time * .7) + gEn * .1 * Math.sin(time * 1.9));
      const scl = 1 + act * (.012 * Math.sin(time * .9) + gEn * .035);
      const cr = Math.cos(rot), sr = Math.sin(rot);
      let d = '';
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const li = Math.min(1, Math.max(0, prog * (1 + S) - u * S));
        const en = Math.sin(Math.PI * li) * act;
        const p = i > 0 ? i - 1 : i, q = i < N - 1 ? i + 1 : i;
        const tx = bx[q] - bx[p], ty = by[q] - by[p];
        const tl = Math.hypot(tx, ty) || 1;
        const nx = -ty / tl, ny = tx / tl;
        const amp = act * (.12 + en * 1.15);
        const w = Math.sin(u * 6.8 - time * 1.5) + .3 * Math.sin(u * 13 + time * 2.3);
        let x = bx[i] + nx * amp * w;
        let y = by[i] + ny * amp * w;
        if (en > 0) {
          const sw = en * .26 * Math.sin(u * Math.PI * 1.5 + time * 1.2), ca = Math.cos(sw), sa = Math.sin(sw);
          const dx0 = x - 12, dy0 = y - 12;
          x = 12 + dx0 * ca - dy0 * sa; y = 12 + dx0 * sa + dy0 * ca;
        }
        const dx = x - 12, dy = y - 12;
        x = 12 + (dx * cr - dy * sr) * scl;
        y = 12 + (dx * sr + dy * cr) * scl;
        cur[i][0] = x; cur[i][1] = y;
        d += (i ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
      }
      if (d !== this._lastD) { this._lastD = d; this._path.setAttribute('d', d); }
    }
  }
  if (!customElements.get('rope-glyph')) customElements.define('rope-glyph', RopeGlyph);
})();
