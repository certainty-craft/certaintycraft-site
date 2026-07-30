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
    cat([arc(4.5, 6.5, 1.5, 1.5, 0, TAU), poly([[6, 6.5], [20, 6.5], [6, 6.5], [6, 12]]), arc(4.5, 12, 1.5, 1.5, 0, TAU), poly([[6, 12], [17, 12], [6, 12], [6, 17.5]]), arc(4.5, 17.5, 1.5, 1.5, 0, TAU), poly([[6, 17.5], [20, 17.5]])]),
    poly([[7, 4.6], [20, 12], [7, 19.4], [7, 4.6], [8.4, 5.4]]),
    cat([arc(12, 5.6, 3, 3, Math.PI, TAU), poly([[15, 5.6], [15, 10.6]]), arc(12, 10.6, 3, 3, 0, Math.PI), poly([[9, 10.6], [9, 5.6]]), arc(12, 11.4, 7, 7, Math.PI, 0), arc(12, 11.4, 7, 7, 0, Math.PI / 2), poly([[12, 18.4], [12, 21.6]])]),
    cat([arc(12, 5.8, 2.9, 2.9, Math.PI / 2, Math.PI / 2 + TAU), poly([[12, 8.7], [12, 12.2]]), arc(12, 20.2, 8, 8, -Math.PI / 2, -Math.PI), arc(12, 20.2, 8, 8, -Math.PI, 0)]),
    poly([[3.5, 20.5], [7, 20.5], [7, 13], [7, 20.5], [12, 20.5], [12, 7], [12, 20.5], [17, 20.5], [17, 10], [17, 20.5], [20.5, 20.5]]),
    cat([arc(12, 12, 9, 9, -Math.PI / 2, -Math.PI / 2 + TAU), poly([[12, 6.8], [12, 12], [16, 14.4]])]),
    cat([arc(12, 12, 4, 4, 0, TAU), poly([[16, 12], [16.8, 13.6]]), arc(12, 12, 9, 9, .33, .33 - .86 * TAU)])
  ].map(resample);
  const NAMES = ['orbit', 'layers', 'list', 'play', 'mic', 'person', 'chart', 'clock', 'loop'];
  const easeIO = (t) => (1 - Math.cos(Math.PI * t)) / 2;
  const clamp01 = (t) => Math.min(1, Math.max(0, t));
  // target choreography: expand first, then travel around the circle; springs + a length constraint give the flow
  const DUR = 1600;

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
      this._dir = 1;
      this._t0 = -1e9;
      this._lastD = '';
      this._px = SHAPES[0].map((p) => p[0]); this._py = SHAPES[0].map((p) => p[1]);
      this._vx = new Float64Array(N); this._vy = new Float64Array(N);
      this._tgx = new Array(N); this._tgy = new Array(N);
      this._rl = new Float64Array(N);
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
      this._computeDir();
      this._t0 = instant ? -1e9 : performance.now();
      if (instant) for (let i = 0; i < N; i++) { this._px[i] = SHAPES[idx][i][0]; this._py[i] = SHAPES[idx][i][1]; this._vx[i] = 0; this._vy[i] = 0; }
      this._still = false;
    }
    // pick the swing direction from the geometry: which way is the shorter trip, on average
    _computeDir() {
      const f = this._from, t = this._to; let avg = 0;
      for (let i = 0; i < N; i += 4) {
        let da = Math.atan2(t[i][1] - 12, t[i][0] - 12) - Math.atan2(f[i][1] - 12, f[i][0] - 12);
        while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU;
        avg += da;
      }
      this._dir = avg >= 0 ? 1 : -1;
    }
    _loop(ts) {
      this._raf = requestAnimationFrame(this._loop);
      if (document.hidden) { this._pt = ts; return; }
      if (this._still) return; // fully settled: no work
      const rm = this._reduced && this._reduced.matches;
      const dt = Math.min(.034, Math.max(.001, (ts - (this._pt || ts - 16)) / 1000));
      this._pt = ts;
      const from = this._from, to = this._to, cur = this._cur;
      const px = this._px, py = this._py, vx = this._vx, vy = this._vy, tgx = this._tgx, tgy = this._tgy;
      const prog = clamp01((ts - this._t0) / (rm ? 240 : DUR));
      // head departs first; expansion + one shared circular swing are conformal — strands can never tangle
      const S = .6, time = ts / 1000;
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const li = clamp01(prog * (1 + S) - u * S);
        const e = easeIO(li);
        const env = rm ? 0 : Math.sin(Math.PI * Math.pow(li, .7)); // opens early, closes gently
        let x = from[i][0] + (to[i][0] - from[i][0]) * e;
        let y = from[i][1] + (to[i][1] - from[i][1]) * e;
        if (env > 0) {
          const s = 1 + .45 * env, g = this._dir * .55 * env; // breathe outward + travel around the centre
          const cg = Math.cos(g), sg = Math.sin(g);
          const dx = (x - 12) * s, dy = (y - 12) * s;
          x = 12 + dx * cg - dy * sg; y = 12 + dx * sg + dy * cg;
          const r = Math.hypot(x - 12, y - 12) || 1;
          const w = Math.sin(u * 4 - time * 2.2) * .3 * env; // soft breath running along the line
          x += (x - 12) / r * w; y += (y - 12) / r * w;
        }
        tgx[i] = x; tgy[i] = y;
      }
      // roundness mid-flight: relax the target curve so travelling shapes are soft open loops,
      // never tight scribbles; strength fades to zero at both ends so glyphs stay exact
      const sm = rm ? 0 : Math.sin(Math.PI * clamp01(prog * 1.25)) * .55;
      if (sm > .01) for (let pass = 0; pass < 4; pass++) for (let i = 1; i < N - 1; i++) {
        tgx[i] += ((tgx[i - 1] + tgx[i + 1]) * .5 - tgx[i]) * sm;
        tgy[i] += ((tgy[i - 1] + tgy[i + 1]) * .5 - tgy[i]) * sm;
      }
      if (rm) {
        let d = '';
        for (let i = 0; i < N; i++) { px[i] = tgx[i]; py[i] = tgy[i]; vx[i] = 0; vy[i] = 0; cur[i][0] = px[i]; cur[i][1] = py[i]; d += (i ? 'L' : 'M') + px[i].toFixed(2) + ' ' + py[i].toFixed(2); }
        this._still = prog >= 1;
        if (d !== this._lastD) { this._lastD = d; this._path.setAttribute('d', d); }
        return;
      }
      // gentle spring physics: each point chases its target, coupled to its neighbours like a rope.
      // springs relax mid-flight (fluid, watery) and stiffen towards the end (a certain landing)
      const stiff = .55 + .45 * easeIO(clamp01((prog - .55) / .45));
      const K = 90 + 220 * stiff, C = 11 + 8 * stiff, KT = 110, dmp = Math.max(0, 1 - C * dt);
      let mv = 0, md = 0, d = '';
      for (let i = 0; i < N; i++) {
        let ax = (tgx[i] - px[i]) * K, ay = (tgy[i] - py[i]) * K;
        if (i > 0 && i < N - 1) {
          ax += ((px[i - 1] + px[i + 1]) * .5 - px[i]) * KT;
          ay += ((py[i - 1] + py[i + 1]) * .5 - py[i]) * KT;
        }
        vx[i] = (vx[i] + ax * dt) * dmp; vy[i] = (vy[i] + ay * dt) * dmp;
      }
      // fluid coherence: blur velocities along the rope so neighbours move together like water
      for (let i = 1; i < N - 1; i++) {
        vx[i] = (vx[i - 1] + vx[i] * 2 + vx[i + 1]) / 4;
        vy[i] = (vy[i - 1] + vy[i] * 2 + vy[i + 1]) / 4;
      }
      for (let i = 0; i < N; i++) {
        px[i] += vx[i] * dt; py[i] += vy[i] * dt;
        const sp = Math.abs(vx[i]) + Math.abs(vy[i]);
        const ds = Math.abs(to[i][0] - px[i]) + Math.abs(to[i][1] - py[i]);
        if (sp > mv) mv = sp;
        if (ds > md) md = ds;
      }
      // constrained-length feel comes from the neighbour coupling + velocity blur above; no hard
      // constraint — it can lock a crossing in place and fight the landing
      // guaranteed landing: past the choreography, ease every point straight onto the glyph
      const over = ts - this._t0 - DUR;
      if (over > 0) {
        const b = clamp01(over / 550), f = Math.min(1, dt * (3 + 14 * b) * b);
        for (let i = 0; i < N; i++) { px[i] += (to[i][0] - px[i]) * f; py[i] += (to[i][1] - py[i]) * f; vx[i] *= 1 - f; vy[i] *= 1 - f; }
      }
      // tiny landing inflation: a brief soft puff as the rope settles onto the glyph (display only)
      const puff = over > 0 && over < 380 ? 1 + .035 * Math.sin(Math.PI * over / 380) : 1;
      for (let i = 0; i < N; i++) {
        const x = 12 + (px[i] - 12) * puff, y = 12 + (py[i] - 12) * puff;
        cur[i][0] = x; cur[i][1] = y;
        d += (i ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
      }
      if (prog >= 1 && over > 400 && (over > 1300 || (mv < .06 && md < .012))) { // at rest: snap to the exact glyph and sleep
        d = '';
        for (let i = 0; i < N; i++) { px[i] = to[i][0]; py[i] = to[i][1]; vx[i] = 0; vy[i] = 0; cur[i][0] = px[i]; cur[i][1] = py[i]; d += (i ? 'L' : 'M') + px[i].toFixed(2) + ' ' + py[i].toFixed(2); }
        this._still = true;
      }
      if (d !== this._lastD) { this._lastD = d; this._path.setAttribute('d', d); }
    }
  }
  if (!customElements.get('rope-glyph')) customElements.define('rope-glyph', RopeGlyph);
})();
