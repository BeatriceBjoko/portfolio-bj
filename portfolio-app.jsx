// Beatrice Bjoko — portfolio app. Composed from the design system's components
// (window.BeatriceBjokoDesignSystem_db85ea). Content lives in content.js.
function buildApp() {
// ── CubeFaces ────────────────────────────────────────
const { ProjectVisual: PV_F, Counter: Counter_F } = window.BeatriceBjokoDesignSystem_db85ea;

function FaceChrome({ idx, route, title, children, dark = true }) {
  const c = dark ? 'var(--paper-50)' : 'var(--ink-950)';
  return (
    <div className="kit-face" style={{ color: c }}>
      {children}
      <span className="kit-face__tl bb-mono">{idx} <span style={{ opacity: .6 }}>/ 04</span></span>
      <span className="kit-face__tr bb-mono">{route}</span>
      {title && <span className="kit-face__bl">{title}</span>}
    </div>
  );
}

function FeaturedFace() {
  const p = window.BB_PROJECTS[0];
  return (
    <FaceChrome idx="01" route="Featured">
      <PV_F tone={p.tone} src={p.cover} grain />
      <div className="kit-face__scrim" />
      <div className="kit-face__bl" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span className="bb-display-3" style={{ fontSize: 'clamp(34px,5vh,58px)', textTransform: 'uppercase' }}>{p.title}</span>
        <span className="bb-mono" style={{ opacity: .8 }}>{p.type} · {p.year}</span>
      </div>
    </FaceChrome>
  );
}

function ProjectsFace() {
  const P = window.BB_PROJECTS;
  const imgs = [P[0].cover, P[1].cover, P[2].cover, 'assets/lume/mockup-zorgkring.jpg', P[4].cover, 'assets/lume/moodboard.jpg', P[5].cover, 'assets/muse/mockup-ticket.png', P[3].cover];
  return (
    <FaceChrome idx="02" route="/projects" title={<span className="bb-h3">Selected works <span style={{ opacity: .55 }}>(6)</span></span>}>
      <div style={{ position: 'absolute', inset: 0, background: '#0d0d0f' }} />
      <div className="kit-collage">{imgs.map((src, i) => <div key={i}><PV_F tone="kodo" src={src} /></div>)}</div>
    </FaceChrome>
  );
}

function AboutFace() {
  return (
    <FaceChrome idx="03" route="/about" title={<span className="bb-h3">Say hi, get to know me</span>}>
      <PV_F tone="portrait" src={window.BB_ME.portrait || undefined} />
      <div className="kit-face__scrim" />
      <span className="bb-signature" style={{ position: 'absolute', left: '10%', top: '16%', zIndex: 3, transform: 'rotate(-10deg)', fontSize: 'clamp(44px,7vh,88px)', padding: '0 .2em' }}>Beatrice</span>
    </FaceChrome>
  );
}

function ContactFace() {
  return (
    <FaceChrome idx="04" route="/contact" dark={false} title={<span className="bb-label">Available for work ●</span>}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--paper-50)' }} />
      <div className="kit-cface">
        <span className="kit-cface__dear">Dear you,</span>
        <span className="kit-cface__mail">{window.BB_ME.email}</span>
        <span className="bb-mono kit-cface__ps">P.S. I reply faster than my tea goes cold.</span>
        <span className="kit-cface__stamp" aria-hidden="true"><span className="bb-mono">BXL</span><span className="kit-cface__stampbb">HI!</span><span className="bb-mono">1000</span></span>
      </div>
    </FaceChrome>
  );
}

function TopFace() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'radial-gradient(circle at 35% 30%,#2a2a2f,#0a0a0b 70%)' }}>
      <span className="bb-display-2" style={{ fontSize: '38%', lineHeight: 1 }}>BB</span>
    </div>
  );
}

window.BB_CUBE_FACES = () => [
  { id: 'featured', label: window.BB_PROJECTS[0].title, route: 'projects', project: window.BB_PROJECTS[0].id, name: 'Featured', content: <FeaturedFace /> },
  { id: 'projects', label: '/projects', route: 'projects', name: 'Projects', content: <ProjectsFace /> },
  { id: 'about', label: '/about', route: 'about', name: 'About', content: <AboutFace /> },
  { id: 'contact', label: '/contact', route: 'contact', name: 'Contact', content: <ContactFace /> },
];
Object.assign(window, { TopFace });

// ── HomeScreen ────────────────────────────────────────
const { Cube: Cube_H, Orbit: Orbit_H, GridBackdrop: GB_H, ProjectVisual: PV_H } = window.BeatriceBjokoDesignSystem_db85ea;

function LiquidReveal({ tone = 'driftwave' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const pts = Array.from({ length: 6 }, () => ({ x: -999, y: -999 }));
    let tx = -999, ty = -999, energy = 0, raf;
    const mv = e => { const r = ref.current.getBoundingClientRect(); const nx = e.clientX - r.left, ny = e.clientY - r.top; energy = Math.min(1, energy + Math.hypot(nx - tx, ny - ty) / 120); tx = nx; ty = ny; };
    window.addEventListener('pointermove', mv);
    const tick = () => {
      energy *= .965;
      pts.forEach((p, i) => { const k = .28 - i * .04; const lead = i ? pts[i - 1] : { x: tx, y: ty }; p.x += (lead.x - p.x) * k; p.y += (lead.y - p.y) * k; });
      const r0 = 40 + energy * 150;
      const m = pts.map((p, i) => 'radial-gradient(circle ' + Math.max(8, r0 * (1 - i * .13)).toFixed(0) + 'px at ' + p.x.toFixed(0) + 'px ' + p.y.toFixed(0) + 'px,#000 35%,transparent 100%)').join(',');
      if (ref.current) { ref.current.style.webkitMaskImage = m; ref.current.style.maskImage = m; }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', mv); };
  }, []);
  return <div ref={ref} className="kit-liquid"><PV_H tone={tone} /></div>;
}

const ORBIT_ITEMS = [
  { tone: 'paper', src: 'assets/muse/meta-glasses.jpg', w: 200, h: 141, r: -.06 },
  { tone: 'paper', src: 'assets/lume/mockup-zorgkring.jpg', w: 150, h: 200, dy: -20 },
  { tone: 'paper', src: 'assets/vrb/rewards.png', w: 92, h: 220, r: .06 },
  { tone: 'paper', src: 'assets/lume/moodboard.jpg', w: 200, h: 141, dy: 20 }
];

function HomeScreen({ entering, onEnter, onChange, index, vw, vh }) {
  const faces = React.useMemo(() => window.BB_CUBE_FACES(), []);
  const mobile = vw < 768;
  const size = Math.round(mobile ? Math.min(vw * .74, vh * .42) : Math.min(vh * .5, vw * .4));
  const items = mobile ? ORBIT_ITEMS.map(i => ({ ...i, w: i.w * .6, h: i.h * .6 })) : ORBIT_ITEMS;
  return (
    <>
      <GB_H floor glows={[{ x: '18%', y: '28%', size: 260, color: 'var(--paper-50)', opacity: .18 }, { x: '84%', y: '64%', size: 220, opacity: .28 }]} vignette={false} />
      {!mobile && <LiquidReveal />}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Orbit_H items={items} rx={mobile ? vw * .5 : Math.min(vw * .4, 660)} ry={mobile ? vh * .26 : vh * .36} pivot={10} speed={.045} parallax={0} />
        <div className="kit-center" style={{ marginTop: -size * .06 }}>
          <Cube_H size={size} faces={faces} top={<TopFace />} bottom={<TopFace />} index={index} entering={entering} onChange={onChange} onEnter={(f) => onEnter(f)} />
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 180, background: 'linear-gradient(var(--bg),transparent)', pointerEvents: 'none', zIndex: 20 }} />
    </>
  );
}
Object.assign(window, { HomeScreen });

// ── Loader ────────────────────────────────────────
const { MetaLine: Meta_L, Counter: Counter_L, GridBackdrop: GB_L } = window.BeatriceBjokoDesignSystem_db85ea;

const S = 120, OX = 46, OY = -38;
const F = [[-S, -S], [S, -S], [S, S], [-S, S]], B = F.map(([x, y]) => [x + OX, y + OY]);
const EDGES = [[F[0], F[1]], [B[0], B[1]], [F[1], F[2]], [B[1], B[2]], [F[2], F[3]], [F[0], B[0]], [F[1], B[1]], [F[2], B[2]], [F[3], B[3]], [B[2], B[3]], [F[3], F[0]], [B[3], B[0]]];

function blobPoly(t, r) {
  const n = 36, pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = 1 + .18 * Math.sin(a * 3 + t * 2.1) + .1 * Math.sin(a * 5 - t * 3.3) + .07 * Math.sin(a * 9 + t * 5);
    pts.push((50 + Math.cos(a) * r * k * .62).toFixed(2) + '% ' + (50 + Math.sin(a) * r * k).toFixed(2) + '%');
  }
  return 'polygon(' + pts.join(',') + ')';
}

function Loader({ onDone, onReady, vw }) {
  const [pct, setPct] = React.useState(0);
  const [phase, setPhase] = React.useState('count'); // count → blob → collapse → done
  const [letters, setLetters] = React.useState(0);
  const blobRef = React.useRef([]);
  const role = window.BB_ME.role;

  React.useEffect(() => {
    let p = 0, t;
    const step = () => {
      const burst = Math.random() < .2 ? 9 + Math.random() * 12 : 1 + Math.random() * 4;
      p = Math.min(100, p + burst);
      setPct(p);
      if (p >= 100) { t = setTimeout(() => setPhase('blob'), 220); return; }
      t = setTimeout(step, 40 + Math.random() * (Math.random() < .15 ? 260 : 70));
    };
    t = setTimeout(step, 350);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (phase !== 'blob') return;
    onReady && onReady();
    let raf, t0 = performance.now();
    const tick = now => {
      const t = (now - t0) / 1000;
      const r = Math.min(95, 4 + Math.pow(Math.min(1, t / 1.3), 1.6) * 95);
      const cp = blobPoly(t, r);
      blobRef.current.forEach(el => el && (el.style.clipPath = cp));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    let i = 0;
    const lt = setInterval(() => { i++; setLetters(i); if (i >= role.length) clearInterval(lt); }, 28);
    const c = setTimeout(() => setPhase('collapse'), 1700);
    return () => { cancelAnimationFrame(raf); clearInterval(lt); clearTimeout(c); };
  }, [phase]);

  React.useEffect(() => {
    if (phase !== 'collapse') return;
    const d = setTimeout(() => { setPhase('done'); onDone(); }, 750);
    return () => clearTimeout(d);
  }, [phase]);

  const name = 'Beatrice Bjoko';
  const showPaper = phase === 'blob' || phase === 'collapse';
  const collapse = phase === 'collapse';
  const nameStyle = collapse ? { transform: 'translateY(-55%) scale(.12)', opacity: 0, filter: 'blur(4px)' } : {};
  const skip = () => { setPhase('done'); onDone(); };
  return (
    <div className={'kit-loader' + (phase === 'done' ? ' kit-loader--done' : '')} onClick={skip} data-cursor="Skip">
      <GB_L vignette={false} />
      <div className="bb-frame">
        <div className="bb-frame__slot bb-frame__tl"><Meta_L /></div>
        <div className="bb-frame__slot bb-frame__tr"><Meta_L time={false} coords /></div>
        <div className="bb-frame__slot bb-frame__bl"><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Loading portfolio — 2026 edition</span></div>
        <div className="bb-frame__slot bb-frame__br"><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Click to skip</span></div>
      </div>
      <svg className="kit-loader__wire" width="420" height="420" viewBox="-210 -210 420 420" style={{ opacity: showPaper ? 0 : 1 }}>
        {EDGES.map(([a, b], i) => {
          const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
          const seg = Math.max(0, Math.min(1, (pct / 100) * 12 - i));
          return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="var(--paper-50)" strokeWidth="1" strokeDasharray={len} strokeDashoffset={len * (1 - seg)} opacity={i % 2 ? .55 : .9} />;
        })}
        {F.concat(B).map(([x, y], i) => <text key={i} x={x + 6} y={y - 6} fill="var(--text-muted)" fontFamily="Geist Mono" fontSize="9">{pct > (i + 1) * 11 ? 'P' + String(i).padStart(2, '0') : ''}</text>)}
      </svg>
      <div style={{ position: 'absolute', left: 'var(--frame-inset)', bottom: 72, opacity: showPaper ? 0 : 1, transition: 'opacity .2s' }}>
        <Counter_L current={pct} percent size="xl" />
      </div>
      <div className="kit-loader__paper" style={{ opacity: showPaper ? 1 : 0 }}>
        <div className="kit-loader__name" style={{ color: 'var(--ink-950)', ...nameStyle }}>{name}</div>
        <div ref={el => blobRef.current[0] = el} style={{ position: 'absolute', inset: 0, background: 'var(--ink-1000)', clipPath: 'polygon(50% 50%,50% 50%,50% 50%)' }} />
        <div ref={el => blobRef.current[1] = el} style={{ position: 'absolute', inset: 0, clipPath: 'polygon(50% 50%,50% 50%,50% 50%)' }}>
          <div className="kit-loader__name kit-loader__foot" style={nameStyle}>{name}</div>
        </div>
        <div className="kit-loader__role bb-label" style={{ fontSize: 14, opacity: collapse ? 0 : 1, transition: 'opacity .3s', mixBlendMode: 'difference', color: 'var(--paper-50)' }}>
          {role.split('').map((ch, i) => <span key={i} className={i < letters ? 'on' : ''}>{ch}</span>)}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Loader });

// ── ProjectsScreen ────────────────────────────────────────
const { ProjectCard: PC_P, GlassToggle: GT_P, Counter: Counter_P, GridBackdrop: GB_P, ProjectVisual: PV_P, Icon: Icon_P } = window.BeatriceBjokoDesignSystem_db85ea;

function ArcView({ projects, onOpen, offset, setOffset, vw }) {
  const mobile = vw < 768;
  const w = mobile ? Math.min(300, vw * .78) : Math.min(520, vw * .36), h = w * .66;
  const R = mobile ? 700 : 1350, step = (w * 1.1 / R) * 180 / Math.PI;
  const drag = React.useRef(null);
  const snapT = React.useRef();
  const lastRect = React.useRef(null);
  const clamp = v => Math.max(0, Math.min(projects.length - 1, v));
  const nudge = v => { setOffset(o => clamp(o + v)); clearTimeout(snapT.current); snapT.current = setTimeout(() => setOffset(o => Math.round(o)), 220); };
  return (
    <div style={{ position: 'absolute', inset: 0 }} data-cursor="Drag"
      onWheel={e => nudge((e.deltaY + e.deltaX) / 500)}
      onPointerDown={e => { drag.current = { x: e.clientX, o: offset, moved: 0 }; }}
      onPointerMove={e => { const d = drag.current; if (!d) return; const dx = e.clientX - d.x; d.moved = Math.max(d.moved, Math.abs(dx)); if (d.moved > 4) setOffset(clamp(d.o - dx / (mobile ? 220 : 380))); }}
      onPointerUp={() => { const d = drag.current; drag.current = null; if (d && d.moved > 4) setOffset(o => Math.round(o)); }}
      onClickCapture={e => { if (drag.current && drag.current.moved > 4) e.stopPropagation(); }}>
      <div className="kit-arc">
        <div className="kit-arc__ring" style={{ transform: 'translateZ(' + R + 'px) rotateY(' + (offset * step) + 'deg)' }}>
          {projects.map((p, i) => (
            <div key={p.id} className="kit-arc__item" onPointerDownCapture={e => { const c = e.currentTarget.querySelector('.bb-pcard'); lastRect.current = c ? c.getBoundingClientRect() : null; }} style={{ transform: 'rotateY(' + (-i * step) + 'deg) translateZ(' + (-R) + 'px) translate(' + (-w / 2) + 'px,' + (-h / 2) + 'px)' }}>
              <PC_P title={p.title} subtitle={p.type + ' · ' + p.year} index={String(p.n).padStart(2, '0') + ' / 06'} tone={p.tone} src={p.cover} width={w} height={h} bend={mobile ? 20 : 26} slices={mobile ? 10 : 14} onOpen={() => { const c = document.querySelectorAll('.kit-arc__item .bb-pcard')[projects.indexOf(p)]; onOpen(p, lastRect.current || (c && c.getBoundingClientRect())); }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListView({ projects, onOpen }) {
  const [hov, setHov] = React.useState(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const prev = React.useRef(null);
  const open = (p, row) => onOpen(p, hov && prev.current ? prev.current.getBoundingClientRect() : row.getBoundingClientRect());
  return (
    <div className="kit-list" onPointerMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {projects.map(p => (
        <div key={p.id} className="kit-list__row" onMouseEnter={() => setHov(p)} onMouseLeave={() => setHov(null)} onClick={e => open(p, e.currentTarget)} data-cursor="View" role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && open(p, e.currentTarget)}>
          <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>{String(p.n).padStart(2, '0')}</span>
          <span className="kit-list__t">{p.title}</span>
          <span className="bb-small kit-hide-m" style={{ color: 'var(--text-muted)' }}>{p.type}</span>
          <span className="bb-mono kit-hide-m" style={{ color: 'var(--text-muted)' }}>{p.role}</span>
          <span className="bb-mono" style={{ textAlign: 'right' }}>{p.year}</span>
        </div>
      ))}
      <div ref={prev} className={'kit-preview' + (hov ? ' kit-preview--on' : '')} style={{ left: pos.x + 150, top: pos.y }}>{hov && <PV_P tone={hov.tone} src={hov.cover} />}</div>
    </div>
  );
}

function ProjectsScreen({ onOpen, vw }) {
  const projects = window.BB_PROJECTS;
  const [view, setView] = React.useState('Arc');
  const [offset, setOffset] = React.useState(0);
  const cur = Math.round(offset) + 1;
  return (
    <>
      <GB_P floor={view === 'Arc'} vignette={view === 'Arc'} />
      {view === 'Arc' ? <ArcView projects={projects} onOpen={onOpen} offset={offset} setOffset={setOffset} vw={vw} /> : <ListView projects={projects} onOpen={onOpen} />}
      <div style={{ position: 'absolute', top: 'calc(var(--frame-inset) - 6px)', left: '50%', transform: 'translateX(-50%)', zIndex: 45 }}>
        <GT_P options={['Arc', 'List']} value={view} onChange={setView} label="Projects view" size={vw < 768 ? 'sm' : 'md'} />
      </div>
      {view === 'Arc' && <div style={{ position: 'absolute', bottom: vw < 768 ? 86 : 'var(--frame-inset)', left: '50%', transform: 'translateX(-50%)', zIndex: 45, whiteSpace: 'nowrap' }}>
        <Counter_P current={cur} total={6} label="selected works" />
      </div>}
    </>
  );
}
Object.assign(window, { ProjectsScreen });

// ── CaseStudy (dark, WebGL-distorted, smooth-scrolled) ────────────────
const { ProjectVisual: PV_C, RoundButton: RB_C, Counter: Counter_C, PillButton: Pill_C } = window.BeatriceBjokoDesignSystem_db85ea;

// Tone palettes mirror the design-system placeholders (.bb-ph--*) so GL and DOM fallback match.
const GL_TONES = { lumen: ['#04100F', '#0D3B48', '#2FA39A'], noor: ['#B88C6C', '#EBDCCB', '#C8714B'], driftwave: ['#1A0508', '#7A1230', '#FF5A1F'], verde: ['#0B1A0E', '#5E8F3E', '#C9D9A6'], kodo: ['#0D0E10', '#3E444A', '#8E959C'], papermoon: ['#D9CFBB', '#E9E2D2', '#1A1A1A'], paper: ['#D8D3CA', '#F2F0EB', '#FFFFFF'], portrait: ['#0E0E0D', '#7E7468', '#B9AE9F'] };
const LIGHT_TONES = ['noor', 'papermoon', 'paper'];
const hex3 = h => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16) / 255);

const VERT = [
  'attribute vec2 a;',
  'uniform vec4 uRect; uniform vec2 uRes; uniform float uVel;',
  'varying vec2 vUv;',
  'void main(){',
  '  vUv = a;',
  '  vec2 p = uRect.xy + a * uRect.zw;',
  // Scroll-velocity bend: the centre of the plane leads, edges lag behind -> image "bends" like paper in wind.
  '  p.y += sin(a.x * 3.14159) * uVel;',
  '  vec2 c = p / uRes * 2.0 - 1.0; c.y = -c.y;',
  '  gl_Position = vec4(c, 0.0, 1.0);',
  '}'].join('\n');

const FRAG = [
  'precision highp float;',
  'varying vec2 vUv;',
  'uniform vec2 uSize, uMouse, uTexSize; uniform float uRadius, uTime, uVel, uHover, uAlpha, uHasTex;',
  'uniform vec3 c0, c1, c2; uniform sampler2D uTex;',
  'float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
  'float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);',
  '  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }',
  'float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i = 0; i < 3; i++){ v += a * n(p); p *= 2.03; a *= 0.5; } return v; }',
  // Procedural placeholder "footage": slow-drifting noise between the tone's three colours.
  'vec3 tone(vec2 uv){ float k = fbm(uv * 2.2 + vec2(uTime * 0.03, -uTime * 0.02));',
  '  vec3 col = mix(c0, c1, smoothstep(0.1, 0.95, uv.y * 0.7 + k * 0.6));',
  '  float b = fbm(uv * 3.0 - k + uTime * 0.05); return mix(col, c2, smoothstep(0.45, 0.85, b) * 0.9); }',
  'vec2 cov(vec2 uv){ float ra = uSize.x / uSize.y, ta = uTexSize.x / uTexSize.y;',
  '  vec2 s = ra > ta ? vec2(1.0, ta / ra) : vec2(ra / ta, 1.0); return (uv - 0.5) * s + 0.5; }',
  'vec3 img(vec2 uv){ if(uHasTex > 0.5) return texture2D(uTex, cov(uv)).rgb; return tone(uv); }',
  'void main(){',
  '  vec2 uv = vUv;',
  '  vec2 px = uv * uSize, m = uMouse * uSize;',
  '  float d = distance(px, m) / max(uSize.x, uSize.y);',
  // Hover ripple: concentric liquid wave around the cursor, decaying with distance.
  '  float rip = sin(d * 42.0 - uTime * 6.0) * exp(-d * 5.0) * 0.014 * uHover;',
  '  uv += normalize(uv - uMouse + 1e-4) * rip;',
  '  uv = (uv - 0.5) * (1.0 - 0.07 * uHover) + 0.5;',
  // RGB split grows with scroll speed and on hover.
  '  float sh = min(abs(uVel) * 0.0007, 0.03) + 0.006 * uHover;',
  '  vec3 col = sh < 0.0015 ? img(uv) : vec3(img(uv + vec2(0.0, sh)).r, img(uv).g, img(uv - vec2(0.0, sh)).b);',
  '  col *= 1.0 - (0.35 - 0.28 * uHasTex) * pow(length(vUv - 0.5) * 1.2, 2.0);',
  '  col += (h(gl_FragCoord.xy + fract(uTime) * 100.0) - 0.5) * (0.05 - 0.03 * uHasTex);',
  '  float ta = uHasTex > 0.5 ? texture2D(uTex, cov(uv)).a : 1.0;',
  // Rounded-rect alpha in pixel space so corners stay crisp at any size.
  '  vec2 q = abs(vUv * uSize - uSize * 0.5) - (uSize * 0.5 - uRadius);',
  '  float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uRadius;',
  '  float al = clamp(0.5 - sd, 0.0, 1.0) * uAlpha * ta;',
  '  gl_FragColor = vec4(col * al, al);',
  '}'].join('\n');

// One canvas draws every [data-gl] element in the case study as a distorted plane, synced to its DOM rect each frame.
function createPlanes(canvas) {
  const gl = canvas.getContext('webgl', { premultipliedAlpha: true, antialias: true, alpha: true });
  if (!gl) return null;
  const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
  gl.useProgram(pr);
  const N = 28, v = [], idx = [];
  for (let y = 0; y <= N; y++) for (let x = 0; x <= N; x++) v.push(x / N, y / N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const i = y * (N + 1) + x; idx.push(i, i + 1, i + N + 1, i + 1, i + N + 2, i + N + 1); }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(v), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = {}; ['uRect', 'uRes', 'uVel', 'uSize', 'uMouse', 'uTexSize', 'uRadius', 'uTime', 'uHover', 'uAlpha', 'uHasTex', 'c0', 'c1', 'c2', 'uTex'].forEach(k => U[k] = gl.getUniformLocation(pr, k));
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  const tex = {};
  const getTex = src => {
    if (tex[src]) return tex[src];
    const t = { t: gl.createTexture(), ready: false, w: 1, h: 1 }; tex[src] = t;
    const im = new Image(); im.crossOrigin = 'anonymous';
    im.onload = () => { gl.bindTexture(gl.TEXTURE_2D, t.t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); t.w = im.width; t.h = im.height; t.ready = true; };
    im.src = src; return t;
  };
  let dpr = 1, W = 0, H = 0;
  const resize = () => { dpr = Math.min(window.devicePixelRatio || 1, 1.5); W = window.innerWidth; H = window.innerHeight; canvas.width = W * dpr; canvas.height = H * dpr; gl.viewport(0, 0, W * dpr, H * dpr); };
  resize();
  const draw = (els, vel, time, mouse) => {
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(U.uRes, W, H); gl.uniform1f(U.uTime, time);
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > H + 100 || r.width < 2) continue;
      const inside = mouse.x > r.left && mouse.x < r.right && mouse.y > r.top && mouse.y < r.bottom;
      el._h = (el._h || 0) + ((inside ? 1 : 0) - (el._h || 0)) * 0.08;
      if (inside) el._m = [(mouse.x - r.left) / r.width, (mouse.y - r.top) / r.height];
      const m = el._m || [0.5, 0.5];
      const c = GL_TONES[el.dataset.tone] || GL_TONES.kodo;
      gl.uniform3fv(U.c0, hex3(c[0])); gl.uniform3fv(U.c1, hex3(c[1])); gl.uniform3fv(U.c2, hex3(c[2]));
      gl.uniform4f(U.uRect, r.left, r.top, r.width, r.height); gl.uniform2f(U.uSize, r.width, r.height);
      gl.uniform1f(U.uVel, Math.max(-90, Math.min(90, vel * (parseFloat(el.dataset.bend) || 1))));
      gl.uniform2f(U.uMouse, m[0], m[1]); gl.uniform1f(U.uHover, el._h);
      gl.uniform1f(U.uRadius, Math.min(parseFloat(el.style.borderRadius) || parseFloat(el.dataset.radius) || 0, r.width / 2, r.height / 2));
      gl.uniform1f(U.uAlpha, el.style.opacity === '' ? 1 : parseFloat(el.style.opacity));
      const t = el.dataset.src ? getTex(el.dataset.src) : null;
      gl.uniform1f(U.uHasTex, t && t.ready ? 1 : 0);
      if (t && t.ready) { gl.bindTexture(gl.TEXTURE_2D, t.t); gl.uniform2f(U.uTexSize, t.w, t.h); gl.uniform1i(U.uTex, 0); }
      gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);
    }
  };
  return { draw, resize, preload: getTex, isReady: src => !!(tex[src] && tex[src].ready) };
}

// One persistent canvas + compiled shader, created on idle after the intro and re-used by every case study,
// so opening a project never pays for context creation, shader compile or texture upload.
let SHARED_GL = null;
function getSharedGL() {
  if (SHARED_GL !== null) return SHARED_GL;
  const cv = document.createElement('canvas'); cv.className = 'cs__gl'; cv.setAttribute('aria-hidden', 'true');
  let p = null; try { p = createPlanes(cv); } catch (e) { p = null; }
  SHARED_GL = p ? { canvas: cv, planes: p } : false;
  return SHARED_GL;
}
function projectSrcs(p) {
  const out = []; if (p.cover) out.push(p.cover);
  (p.chapters || []).forEach(c => { (c.media || []).forEach(m => m.src && out.push(m.src)); [c.before, c.after].concat(c.items || []).forEach(m => m && m.src && out.push(m.src)); });
  return out;
}
window.BB_WARM = () => {
  const g = getSharedGL();
  window.BB_PROJECTS.forEach(p => projectSrcs(p).forEach(src => { if (g) g.planes.preload(src); else { const i = new Image(); i.src = src; } }));
};

const clamp01 = v => Math.max(0, Math.min(1, v));
const easeOut = t => 1 - Math.pow(1 - t, 3);
const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const rnd = i => { const x = Math.sin(i * 91.7 + 13.3) * 43758.5; return x - Math.floor(x); };

// Giant split title. Letters rise in on mount (CSS); with scroll they lift out quickly (driven imperatively).
function SplitTitle({ text, className, innerRef }) {
  return (
    <h1 ref={innerRef} className={className} aria-label={text}>
      {(() => { let k = 0; return text.split(' ').map((w, wi) => <React.Fragment key={wi}>{wi > 0 && <span className="cs-sp"> </span>}<span className="cs-word-wrap">{w.split('').map(ch => { const i = k++; return <span key={i} className="cs-ch-wrap" aria-hidden="true"><span className="cs-l" style={{ '--i': i }}>{ch}</span></span>; })}</span></React.Fragment>); })()}
    </h1>
  );
}

function Plane({ tone, src, label, className, style, bend, radius, children, innerRef, still }) {
  return (
    <div ref={innerRef} className={'cs-plane ' + (className || '')} style={still && radius ? { borderRadius: radius + 'px', ...style } : style} data-gl={still ? undefined : ''} data-tone={tone} data-src={src || undefined} data-bend={bend} data-radius={radius}>
      <PV_C tone={tone} src={src} />
      {label && <span className="cs-plane__label bb-mono">{label}</span>}
      {children}
    </div>
  );
}

// A figure keeps image + caption in ONE element, so any parallax moves them together.
function Fig({ m, speed, radius, className, style, capPrefix }) {
  return (
    <figure className={'cs-fig ' + (m.src && /\.png$/i.test(m.src) ? 'cs-fig--alpha ' : '') + (className || '')} data-speed={speed} style={style}>
      <div className="cs-fig__ph" style={{ aspectRatio: m.ratio || 1.4 }}>
        <Plane tone={m.src ? 'paper' : (m.tone || 'kodo')} src={m.src} label={m.src ? null : m.cap} radius={radius || '10'} still style={{ position: 'absolute', inset: 0 }} />
      </div>
      {m.cap && m.src && <figcaption className="bb-mono cs-dim">{capPrefix}{m.cap}</figcaption>}
    </figure>
  );
}

function CaseStudyView({ project, origin, onClose, onNext, land, via }) {
  const list = window.BB_PROJECTS;
  const next = list[project.n % list.length];
  const prevP = list[(project.n - 2 + list.length) % list.length];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [swap, setSwap] = React.useState(false);
  const jump = (p, opts) => { if (swap) return; setSwap(true); setTimeout(() => { onNext(p, opts); setSwap(false); }, reduce ? 0 : 420); };
  const root = React.useRef(null), glHost = React.useRef(null), content = React.useRef(null);
  const heroMedia = React.useRef(null), heroTitle = React.useRef(null), heroMeta = React.useRef(null), heroSide = React.useRef(null);
  const nextMedia = React.useRef(null), nextTitle = React.useRef(null), nextLabel = React.useRef(null);
  const growBox = React.useRef(null), bar = React.useRef(null), chapLabel = React.useRef(null), pullHint = React.useRef(null);
  const sc = React.useRef({ cur: 0, target: 0, vel: 0, pull: 0, mouse: { x: -999, y: -999 }, lock: false });
  const viaRef = React.useRef(via); viaRef.current = via;
  const [clip, setClip] = React.useState(null);
  const [glOn] = React.useState(() => !!getSharedGL());
  const [shown, setShown] = React.useState(false);
  const closing = React.useRef(false);
  const planesRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const g = getSharedGL(); if (!g) return;
    glHost.current.appendChild(g.canvas); g.planes.resize(); planesRef.current = g.planes;
    projectSrcs(project).forEach(src => g.planes.preload(src));
    return () => { g.planes.draw([], 0, 0, { x: -1, y: -1 }); g.canvas.remove(); };
  }, []);

  // Entry: the overlay is clipped to the clicked element's rect (cube face / card) and expands to full screen.
  const originClip = () => {
    const W = window.innerWidth, H = window.innerHeight;
    const r = origin || { left: W * .35, top: H * .32, right: W * .65, bottom: H * .68 };
    return 'inset(' + r.top + 'px ' + (W - r.right) + 'px ' + (H - r.bottom) + 'px ' + r.left + 'px round 18px)';
  };
  React.useLayoutEffect(() => {
    setClip(originClip());
    const t = requestAnimationFrame(() => requestAnimationFrame(() => { setClip('inset(0px 0px 0px 0px round 0px)'); setShown(true); }));
    return () => cancelAnimationFrame(t);
  }, []);
  const close = () => {
    if (closing.current) return; closing.current = true;
    setShown(false); setClip(originClip());
    setTimeout(onClose, reduce ? 0 : 820);
  };

  React.useEffect(() => {
    const s = sc.current, el = root.current;
    const planes = planesRef.current;
    let raf, last = performance.now(), t0 = last, touchY = null, touchV = 0, max = 0;
    // ── Layout cache: every offset is measured once (and on resize), never inside the frame loop.
    // Reading getBoundingClientRect every frame forces layout and was the main source of jank.
    const C = { pins: [], words: [], speeds: [], reveals: [], chaps: [] };
    const offTop = n => { let y = 0; while (n && n !== content.current) { y += n.offsetTop; n = n.offsetParent; } return y; };
    const recache = () => {
      const H = window.innerHeight;
      C.pins = [...el.querySelectorAll('[data-pin]')].map(pin => { const sec = pin.parentElement; return { pin, top: offTop(sec), len: Math.max(1, sec.offsetHeight - H) }; });
      C.words = [...el.querySelectorAll('.cs-word')].map(w => ({ w, y: offTop(w), o: -1 }));
      C.speeds = [...el.querySelectorAll('[data-speed]')].map(p => ({ p, y: offTop(p) + p.offsetHeight / 2, k: parseFloat(p.dataset.speed) || 0 }));
      C.reveals = [...el.querySelectorAll('[data-reveal]:not(.is-in)')].map(r => { const pinned = r.closest('[data-pin]'); return { r, y: pinned ? offTop(pinned.parentElement) + Math.min(offTop(r) - offTop(pinned.parentElement), H * .5) : offTop(r) }; });
      C.chaps = [...el.querySelectorAll('[data-chapter]')].map(ch => ({ y: offTop(ch), lab: ch.dataset.chapter }));
      max = Math.max(0, content.current.scrollHeight - H);
    };
    const ro = new ResizeObserver(() => { recache(); planes && planes.resize(); });
    ro.observe(content.current);

    // Reset per project: top (or land just before the "next" section when coming back up).
    el.querySelectorAll('[data-reveal]').forEach(r => r.classList.remove('is-in'));
    if (heroTitle.current) { heroTitle.current.classList.remove('cs-title--in'); requestAnimationFrame(() => heroTitle.current && heroTitle.current.classList.add('cs-title--in')); }
    recache();
    s.vel = 0; s.pull = 0; s.lock = false;
    if (land === 'end') { const nx = el.querySelector('.cs-next'); const y = nx ? Math.max(0, offTop(nx) - window.innerHeight * .35) : max; s.cur = s.target = Math.min(max, y); el.querySelectorAll('[data-reveal]').forEach(r => r.classList.add('is-in')); }
    else s.cur = s.target = 0;

    const H0 = () => window.innerHeight;
    // Clamp how far the target may run ahead of what's on screen, so a hard flick never "outruns" the page.
    const push = d => { const H = H0(); s.target = Math.max(0, Math.min(max, s.target + d)); s.target = Math.max(s.cur - H * .9, Math.min(s.cur + H * .9, s.target)); };
    const pullUp = d => {
      if (viaRef.current !== 'loop' || s.target > 1 || d >= 0) { s.pull = Math.max(0, s.pull - 30); return; }
      s.pull += -d;
      if (s.pull > 420 && !s.lock) { s.lock = true; jump(prevP, { land: 'end' }); }
    };
    const onWheel = e => { e.preventDefault(); if (s.lock) return; const k = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? H0() : 1; const d = Math.max(-240, Math.min(240, e.deltaY * k)); pullUp(d); push(d); };
    const onTS = e => { touchY = e.touches[0].clientY; touchV = 0; };
    const onTM = e => { if (touchY == null || s.lock) return; e.preventDefault(); const y = e.touches[0].clientY; touchV = (touchY - y) * 1.4; pullUp(touchV); push(touchV); touchY = y; };
    const onTE = () => { touchY = null; push(touchV * 8); };
    const onKey = e => {
      if (e.key === 'Escape') return close();
      const H = H0(), d = { ArrowDown: 90, ArrowUp: -90, PageDown: H * .85, PageUp: -H * .85, ' ': H * .85 }[e.key];
      if (d != null) { e.preventDefault(); push(d); }
      if (e.key === 'Home') s.target = 0; if (e.key === 'End') s.target = max;
    };
    const onMove = e => { s.mouse.x = e.clientX; s.mouse.y = e.clientY; };
    window.BB_CS_TO = sel => { const n = el.querySelector(sel); if (n) { s.cur = s.target = Math.min(max, offTop(n)); } };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTS, { passive: true }); el.addEventListener('touchmove', onTM, { passive: false }); el.addEventListener('touchend', onTE);
    window.addEventListener('keydown', onKey); window.addEventListener('pointermove', onMove);

    const tick = now => {
      raf = requestAnimationFrame(tick);
      if (document.hidden) { last = now; return; }
      const dt = Math.min(64, now - last); last = now;
      const W = window.innerWidth, H = window.innerHeight, time = (now - t0) / 1000, mob = W < 768;
      // Frame-rate independent smoothing (same feel at 60 / 120 Hz).
      const prev = s.cur, k = reduce ? 1 : 1 - Math.pow(1 - .095, dt / 16.67);
      s.cur += (s.target - s.cur) * k;
      if (Math.abs(s.target - s.cur) < 0.1) s.cur = s.target;
      s.vel += ((s.cur - prev) - s.vel) * 0.2;
      const cur = s.cur;
      content.current.style.transform = 'translate3d(0,' + (-cur).toFixed(2) + 'px,0)';
      if (bar.current) bar.current.style.transform = 'scaleY(' + (max ? cur / max : 0).toFixed(4) + ')';

      // Manual pinning (position:sticky can't work inside a transformed scroller).
      for (const P of C.pins) { const y = Math.max(0, Math.min(P.len, cur - P.top)); P.pin.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)'; P.pin._p = clamp01((cur - P.top) / P.len); }

      // HERO: full-bleed image shrinks to the right; on the left, title + tagline take over and fill in word by word.
      const hp = heroMedia.current ? heroMedia.current.parentElement._p || 0 : 0;
      if (heroMedia.current) {
        const e = easeInOut(clamp01(hp / .55));
        const tw = mob ? W - 36 : W * .38, th = mob ? H * .4 : H * .6;
        const w = W + (tw - W) * e, h = H + (th - H) * e;
        const x = mob ? (W - w) / 2 : (W - w) - (W - w > 1 ? 28 * e : 0), y = mob ? (H - h) - (H - h) * .18 : (H - h) * .5;
        Object.assign(heroMedia.current.style, { width: w + 'px', height: h + 'px', left: x + 'px', top: y + 'px', borderRadius: (e * 18) + 'px' });
      }
      // Title letters fall apart like they lost their grip (finished before the side text arrives).
      if (heroTitle.current) {
        const ls = heroTitle.current._ls || (heroTitle.current._ls = [...heroTitle.current.querySelectorAll('.cs-ch-wrap')]);
        ls.forEach((l, i) => {
          // Letters lose their grip and drift apart, coming to rest scattered across the screen (faint, behind the side text).
          const r = rnd(i), r2 = rnd(i + 7), f = easeOut(clamp01(hp * 2.2 - r * .35));
          const dx = (r - .5) * W * .55 + (r2 - .5) * 120, dy = -(H * .12 + r2 * H * .42) + (r - .5) * 60;
          l.style.transform = 'translate3d(' + (dx * f).toFixed(1) + 'px,' + (dy * f).toFixed(1) + 'px,0) rotate(' + ((r - .5) * 80 * f).toFixed(1) + 'deg) scale(' + (1 - f * .25).toFixed(3) + ')';
          l.style.opacity = (1 - f * .82).toFixed(3);
        });
      }
      if (heroMeta.current) heroMeta.current.style.opacity = (1 - clamp01(hp * 5)).toFixed(3);
      if (heroSide.current) {
        const a = easeOut(clamp01((hp - .3) / .25));
        heroSide.current.style.opacity = a.toFixed(3);
        heroSide.current.style.transform = 'translate3d(0,' + ((1 - a) * 50 - hp * 30).toFixed(1) + 'px,0)';
        const tw = heroSide.current._w || (heroSide.current._w = [...heroSide.current.querySelectorAll('.cs-tw')]);
        const fill = clamp01((hp - .45) / .45) * tw.length;
        tw.forEach((w, i) => { const o = (.18 + .82 * clamp01(fill - i)).toFixed(3); if (w._o !== o) { w.style.opacity = o; w._o = o; } });
      }

      // Statement words fill as they cross the lower third (cached positions).
      for (const it of C.words) { const t = it.y - cur; if (t > H + 60 || t < -60) continue; const o = Math.round((.16 + .84 * clamp01((H * .82 - t) / (H * .3))) * 100) / 100; if (o !== it.o) { it.w.style.opacity = o; it.o = o; } }
      // Gentle, capped parallax on whole figures (image + caption move together).
      for (const it of C.speeds) { const t = it.y - cur; if (t > H * 1.6 || t < -H * .6) continue; const d = Math.max(-48, Math.min(48, (t - H / 2) * it.k)); it.p.style.transform = 'translate3d(0,' + d.toFixed(2) + 'px,0)'; }
      if (C.reveals.length) C.reveals = C.reveals.filter(it => { if (it.y - cur < H * .86) { it.r.classList.add('is-in'); return false; } return true; });

      // Final UI: card grows to full-bleed.
      if (growBox.current) { const p = easeInOut(clamp01((growBox.current.parentElement._p || 0) * 1.3)); Object.assign(growBox.current.style, { width: (56 + p * 44) + '%', height: (58 + p * 42) + '%', borderRadius: (18 * (1 - p)) + 'px' }); }

      // INFINITE LOOP: next project's image rises, grows to full-bleed and its title assembles = the next hero's first frame.
      if (nextMedia.current) {
        const p = nextMedia.current.parentElement._p || 0;
        const rise = easeOut(clamp01(p / .45)), grow = easeInOut(clamp01((p - .4) / .6));
        const cw = mob ? W - 36 : W * .3, ch = mob ? H * .4 : H * .36;
        const w = cw + (W - cw) * grow, h = ch + (H - ch) * grow;
        Object.assign(nextMedia.current.style, { width: w + 'px', height: h + 'px', left: ((W - w) / 2) + 'px', top: ((H - h) / 2 + (1 - rise) * H * .7) + 'px', borderRadius: (18 * (1 - grow)) + 'px' });
        if (nextLabel.current) nextLabel.current.style.opacity = (1 - grow).toFixed(3);
        if (nextTitle.current) {
          const ls = nextTitle.current._ls || (nextTitle.current._ls = [...nextTitle.current.querySelectorAll('.cs-ch-wrap')]);
          ls.forEach((l, i) => {
            const r = rnd(i), f = 1 - easeOut(clamp01((p - .5 - r * .15) / .4));
            l.style.transform = 'translate3d(' + ((r - .5) * 160 * f).toFixed(1) + 'px,' + (-f * H * (.4 + r * .5)).toFixed(1) + 'px,0) rotate(' + ((r - .5) * 70 * f).toFixed(1) + 'deg)';
            l.style.opacity = (1 - f).toFixed(3);
          });
        }
        if (p >= .999 && !s.lock && max > 0) { s.lock = true; onNext(next, { via: 'loop' }); }
      }
      if (pullHint.current) {
        const on = viaRef.current === 'loop' && cur < 40;
        pullHint.current.style.opacity = on ? 1 : 0;
        pullHint.current.style.setProperty('--p', clamp01(s.pull / 420).toFixed(3));
        if (s.pull > 0 && !s.lock) s.pull = Math.max(0, s.pull - dt * .25);
      }
      if (chapLabel.current) {
        let lab = '00 — Intro';
        for (const ch of C.chaps) if (ch.y - cur < H * .5) lab = ch.lab;
        if (chapLabel.current.textContent !== lab) chapLabel.current.textContent = lab;
      }
      if (planes) planes.draw(el.querySelectorAll('[data-gl]'), reduce ? 0 : -s.vel * 1.4, time, s.mouse);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      el.removeEventListener('wheel', onWheel); el.removeEventListener('touchstart', onTS); el.removeEventListener('touchmove', onTM); el.removeEventListener('touchend', onTE);
      window.removeEventListener('keydown', onKey); window.removeEventListener('pointermove', onMove);
    };
  }, [project.id]);

  const pad = n => String(n).padStart(2, '0');
  const words = (txt, dim) => txt.split(' ').map((w, i) => <span key={(dim ? 'd' : 'b') + i} className={'cs-word' + (dim ? ' cs-word--dim' : '')}>{w} </span>);
  const desc = project.description, cut = desc.indexOf('. ');
  const chapters = project.chapters || (project.process || []).map(([title, text], i) => ({ title, text, layout: 'steps', steps: [] }));
  const head = (i, ch) => (
    <>
      <div className="cs-chap__head" data-reveal=""><span className="cs-num">{pad(i + 1)}</span></div>
      <div className="cs-chap__txt" data-reveal=""><span className="bb-label">{ch.title}</span><p className="bb-body-l">{ch.text}</p></div>
    </>
  );
  const ytSrc = id => 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&modestbranding=1&playsinline=1';
  const renderChapter = (ch, i) => {
    const tag = pad(i + 1) + ' — ' + ch.title;
    const body = (() => {
      switch (ch.layout) {
        case 'stats': return <div className="cs-stats">{(ch.stats || []).map(([n, l], k) => <div key={k} className="cs-stat" data-reveal="" style={{ transitionDelay: (k * 90) + 'ms' }}><span className="cs-stat__n">{n}</span><span className="bb-mono cs-dim">{l}</span></div>)}</div>;
        case 'strip':
        case 'gallery': return <div className="cs-gal">{(ch.media || []).map((m, k) => <div key={k} data-reveal="" style={{ transitionDelay: (k * 80) + 'ms' }}><Fig m={m} speed={['0', '.05', '-.04', '.06', '-.03'][k % 5]} /></div>)}</div>;
        case 'iter': {
          const B = ch.before || {}, A = ch.after || {};
          const sz = m => ({ width: 'min(100%, calc(80vh * ' + (m.ratio || 1) + '))' });
          return <div className="cs-iter"><div data-reveal="" className="cs-iter__c"><Fig m={B} speed="-.04" style={sz(B)} /></div><span className="bb-display-3 cs-arrow" aria-hidden="true">→</span><div data-reveal="" className="cs-iter__c" style={{ transitionDelay: '120ms' }}><Fig m={A} speed=".06" style={sz(A)} /></div></div>;
        }
        case 'steps': return <div className="cs-steps" style={{ gridTemplateColumns: 'repeat(' + Math.max(1, Math.min(4, (ch.steps || []).length)) + ', minmax(0,1fr))' }}>{(ch.steps || []).map(([t, d], k) => <div key={k} className="cs-step" data-reveal="" style={{ transitionDelay: (k * 90) + 'ms' }}><span className="bb-mono cs-dim">{pad(k + 1)}</span><span className="cs-step__t">{t}</span><span className="bb-body cs-dim">{d}</span></div>)}</div>;
        case 'video': return (
          <div className="cs-video" data-reveal="" style={{ aspectRatio: ch.ratio || 16 / 9 }}
            onMouseLeave={e => { const sh = e.currentTarget.querySelector('.cs-video__shield'); if (sh) sh.classList.remove('is-off'); }}>
            {ch.youtube
              ? <>
                  <iframe src={ytSrc(ch.youtube)} title={project.title + ' — ' + ch.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                  {/* The iframe swallows wheel events; this shield keeps the page scrolling until you click to play. */}
                  <button className="cs-video__shield" data-cursor="Play" aria-label={'Play ' + ch.title} onClick={e => { const sh = e.currentTarget, f = sh.parentElement.querySelector('iframe'); if (f && !f.dataset.played) { f.src = ytSrc(ch.youtube) + '&autoplay=1'; f.dataset.played = '1'; } sh.classList.add('is-off'); }}>
                    <span className="cs-video__play"><span className="bb-label">Play video</span></span>
                  </button>
                </>
              : <video src={ch.src} poster={ch.poster} controls playsInline preload="metadata" />}
          </div>
        );
        case 'palette': return <>
          <div className="cs-pal">{(ch.colors || []).map(([hex, name], k) => <div key={hex} className="cs-sw" data-reveal="" style={{ transitionDelay: (k * 60) + 'ms' }}><span className="cs-sw__c" style={{ background: hex }} /><span className="bb-mono">{name}</span><span className="bb-mono cs-dim">{hex}</span></div>)}</div>
          <div className="cs-fonts">{(ch.fonts || []).map(([n, role, fam, w]) => <div key={n} className="cs-font" data-reveal=""><span className="cs-font__s" style={{ fontFamily: fam, fontWeight: w }}>Aa — {n}</span><span className="bb-mono cs-dim">{role}</span></div>)}</div>
        </>;
        case 'wide': { const M = ch.media || []; return <div className="cs-wide" style={{ gridTemplateColumns: M.map(m => 'minmax(0,' + (m.ratio || 1.4).toFixed(3) + 'fr)').join(' ') }}>{M.map((m, k) => <div key={k} data-reveal="" style={{ transitionDelay: (k * 120) + 'ms', maxWidth: M.length === 1 ? 'calc(82vh * ' + (m.ratio || 1.4) + ')' : undefined, justifySelf: 'center', width: '100%' }}><Fig m={m} /></div>)}</div>; }
        case 'annotated': return <div className="cs-ann">{(ch.items || []).map((it, k) => (
          <div key={k} className={'cs-ann__row' + (k % 2 ? ' cs-ann__row--flip' : '')}>
            <div className="cs-ann__fig" data-reveal=""><Fig m={{ ...it, cap: null }} radius="24" /></div>
            <div className="cs-ann__txt" data-reveal=""><span className="bb-mono cs-dim">{pad(k + 1)} · {it.role}</span><span className="cs-step__t">{it.title}</span><p className="bb-body-l cs-dim" style={{ margin: 0 }}>{it.text}</p></div>
          </div>))}</div>;
        case 'trio': return <div className="cs-trio">{(ch.media || []).map((m, k) => <div key={k} data-reveal="" style={{ transitionDelay: (k * 100) + 'ms', marginTop: ['0', '8vh', '3vh'][k % 3] }}><Fig m={m} radius="28" speed={['-.05', '.07', '-.02'][k % 3]} capPrefix={pad(k + 1) + ' — '} /></div>)}</div>;
        default: return null;
      }
    })();
    if (ch.layout === 'grow') {
      const m = (ch.media && ch.media[0]) || { tone: project.tone };
      return (
        <section key={i} className="cs-grow" data-chapter={tag}>
          <div className="cs-pin cs-grow__pin" data-pin="">
            <Plane innerRef={growBox} tone={m.src ? 'paper' : project.tone} src={m.src} className="cs-grow__box" still />
            <div className="cs-grow__cap" data-reveal=""><span className="bb-label">{pad(i + 1)} — {ch.title}</span><p className="bb-body">{ch.text}</p></div>
          </div>
        </section>
      );
    }
    return <section key={i} className={'cs-chap cs-chap--' + ch.layout} data-chapter={tag}>{head(i, ch)}{body}</section>;
  };
  const tag = project.tagline || project.type;
  return (
    <div ref={root} className={'cs' + (glOn ? ' cs--gl' : '') + (shown ? ' cs--shown' : '') + (swap ? ' cs--swap' : '')} style={{ clipPath: clip || 'inset(50% 50% 50% 50%)', WebkitClipPath: clip || 'inset(50% 50% 50% 50%)' }} role="dialog" aria-label={project.title + ' case study'} data-cursor="Scroll">
      <div ref={glHost} className="cs__glhost" aria-hidden="true" />
      <div className="cs__vp">
        <div ref={content} className="cs__content">
          <section className="cs-hero" data-chapter="00 — Intro">
            <div className="cs-pin" data-pin="">
              <Plane innerRef={heroMedia} tone={project.tone} src={project.cover} className="cs-hero__media" bend="1" />
              <div className="cs-hero__scrim cs-hero__scrim--strong" />
              <div ref={heroSide} className="cs-side" style={{ opacity: 0 }}>
                <span className="bb-mono cs-dim">{pad(project.n)} / {pad(list.length)} — {project.year}</span>
                <span className="cs-side__t">{project.title}</span>
                <p className="cs-side__p">{tag.split(' ').map((w, k) => <span key={k} className="cs-tw" style={{ opacity: .18 }}>{w} </span>)}</p>
                <span className="bb-mono cs-dim">{project.role}</span>
              </div>
              <SplitTitle innerRef={heroTitle} text={project.title} className="cs-title cs-title--in" />
              <div ref={heroMeta} className="cs-meta">
                <div><span className="bb-mono cs-dim">Project</span><span className="bb-mono">{pad(project.n)} / {pad(list.length)}</span></div>
                <div><span className="bb-mono cs-dim">Role</span><span className="bb-mono">{project.role}</span></div>
                <div><span className="bb-mono cs-dim">Year</span><span className="bb-mono">{project.year}</span></div>
                <div><span className="bb-mono cs-dim">Tools</span><span className="bb-mono">{project.tools.join(' · ')}</span></div>
              </div>
            </div>
          </section>

          <section className="cs-intro">
            <span className="bb-mono cs-dim" data-reveal="">{project.type}</span>
            <p className="cs-statement">{words(cut > 0 ? desc.slice(0, cut + 1) : desc)}{cut > 0 && words(desc.slice(cut + 2), true)}</p>
            {project.awards && <div className="cs-awards" data-reveal="">
              {project.awards.map((w, k) => <div key={w} className="cs-award"><span className="bb-mono cs-dim">{pad(k + 1)} / {pad(project.awards.length)}</span><span className="cs-award__t">{w}</span></div>)}
            </div>}
            {(project.context || project.status) && <div className="cs-facts" data-reveal="">
              {project.context && <span className="bb-mono">{project.context}</span>}
              {project.status && <span className="bb-mono cs-status"><span className="cs-dot" />{project.status}</span>}
            </div>}
          </section>

          {project.features && <section className="cs-feat">
            {project.features.map(([t, d], k) => <div key={t} className="cs-feat__item" data-reveal="" style={{ transitionDelay: (k * 80) + 'ms' }}><span className="bb-mono cs-dim">{pad(k + 1)}</span><span className="bb-h3">{t}</span><span className="bb-body cs-dim">{d}</span></div>)}
          </section>}

          {chapters.map(renderChapter)}

          {project.links && <section className="cs-mag" data-chapter="Links">
            <div data-reveal="" className="cs-mag__in">
              <span className="bb-mono cs-dim">See it for yourself</span>
              <span className="cs-mag__t">{project.links.length > 1 ? 'Open the live work and dive deeper.' : 'Open the live work.'}</span>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{project.links.map(([l, h, ic], k) => <Pill_C key={l} variant={k ? 'glass' : 'paper'} icon={ic || 'arrow-up-right'} href={h} target="_blank" rel="noreferrer">{l}</Pill_C>)}</div>
            </div>
          </section>}
          {project.magazine && <section className="cs-mag" data-chapter="Magazine">
            <div data-reveal="" className="cs-mag__in">
              <span className="bb-mono cs-dim">The full story — 21 pages</span>
              <span className="cs-mag__t">Research, personas, MoSCoW, testing and documentation — all in the magazine.</span>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Pill_C variant="paper" icon="download" href={project.magazine}>Download magazine</Pill_C>
                <Pill_C variant="glass" icon="arrow-up-right" href={project.magazine}>Open in browser</Pill_C>
              </div>
            </div>
          </section>}

          <section className="cs-next" data-chapter={'Next — ' + next.title}>
            <div className="cs-pin" data-pin="">
              <Plane innerRef={nextMedia} tone={next.tone} src={next.cover} className="cs-hero__media" bend="1" />
              <div ref={nextLabel} className="cs-next__lab"><span className="bb-mono cs-dim">Next project — {pad(next.n)} / {pad(list.length)}</span><span className="bb-label">Keep scrolling ↓</span></div>
              <div className="cs-hero__scrim cs-hero__scrim--strong" />
              <SplitTitle innerRef={nextTitle} text={next.title} className="cs-title cs-title--static" />
            </div>
          </section>
        </div>
      </div>

      <div className="cs-ui">
        <div className="cs-ui__tl"><span className="bb-label">{project.title}</span><span ref={chapLabel} className="bb-mono cs-dim">00 — Intro</span></div>
        <div ref={pullHint} className="cs-pull" style={{ opacity: 0 }} aria-hidden="true"><span className="cs-pull__bar" /><span className="bb-mono">↑ Scroll up — back to {prevP.title}</span></div>
        <div className="cs-ui__tr" data-cursor="Close"><RB_C icon="x" variant="glass" label="Close case study" onClick={close} /></div>
        <div className="cs-ui__bar" aria-hidden="true"><span ref={bar} /></div>
        <nav className="cs-ui__nav" aria-label="Switch project">
          <div data-cursor={'View ' + prevP.title}><RB_C icon="arrow-left" variant="glass" label={'Previous project: ' + prevP.title} onClick={() => jump(prevP)} /></div>
          <span className="bb-mono cs-ui__count">{pad(project.n)} / {pad(list.length)}</span>
          <div data-cursor={'View ' + next.title}><Pill_C variant="glass" icon="arrow-right" onClick={() => jump(next)}>{pad(next.n)} {next.title}</Pill_C></div>
        </nav>
      </div>
    </div>
  );
}
Object.assign(window, { CaseStudyView });

// ── InfoScreens ────────────────────────────────────────
const { ProjectVisual: PV_A, PillButton: Pill_A, Tag: Tag_A, GridBackdrop: GB_A, MetaLine: Meta_A } = window.BeatriceBjokoDesignSystem_db85ea;

// Dither veil: the portrait is rendered as 1-bit ordered (Bayer 8×8) dither. The cursor lifts the veil —
// a soft trail (painted into a tiny CPU canvas, uploaded as a mask texture each frame) reveals the real photo,
// with a ring of lime pixels on the veil's edge. Idle / touch: the reveal drifts on its own.
const DITHER_FS = [
  'precision mediump float;',
  'varying vec2 vUv;',
  'uniform sampler2D uImg, uMask; uniform vec2 uRes, uImgSize; uniform float uTime, uIntro, uPix;',
  'float b2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }',
  'float b4(vec2 a){ return b2(0.5 * a) * 0.25 + b2(a); }',
  'float b8(vec2 a){ return b4(0.5 * a) * 0.25 + b2(a); }',
  'vec2 cov(vec2 uv){ float ra = uRes.x / uRes.y, ta = uImgSize.x / uImgSize.y; vec2 s = ra > ta ? vec2(1.0, ta / ra) : vec2(ra / ta, 1.0); return (uv - 0.5) * s + 0.5; }',
  'void main(){',
  '  vec2 cell = floor(gl_FragCoord.xy / uPix);',
  '  vec2 cuv = (cell + 0.5) * uPix / uRes; cuv.y = 1.0 - cuv.y;',
  '  float m = texture2D(uMask, vUv).r;',
  '  vec2 w = vec2(sin(vUv.y * 14.0 + uTime * 1.3), cos(vUv.x * 12.0 - uTime)) * 0.006 * m;',
  '  vec3 full = texture2D(uImg, cov(vUv + w)).rgb;',
  '  float l = dot(texture2D(uImg, cov(cuv)).rgb, vec3(0.299, 0.587, 0.114));',
  '  l = clamp(pow(l, 0.85) * 1.12 - 0.04, 0.0, 1.0);',
  '  float intro = smoothstep(vUv.y, vUv.y + 0.12, uIntro * 1.15);',
  '  float d = step(b8(cell), l) * intro;',
  '  vec3 ink = vec3(0.039, 0.039, 0.043), paper = vec3(0.949, 0.941, 0.922), lime = vec3(0.784, 1.0, 0.18);',
  '  vec3 dc = mix(ink, paper, d);',
  '  float edge = smoothstep(0.04, 0.25, m) * (1.0 - smoothstep(0.3, 0.6, m));',
  '  dc = mix(dc, mix(ink, lime, d), edge);',
  '  gl_FragColor = vec4(mix(dc, full, smoothstep(0.38, 0.72, m)), 1.0);',
  '}'].join('\n');

function DitherPortrait({ src }) {
  const host = React.useRef(null), cv = React.useRef(null);
  React.useEffect(() => {
    const canvas = cv.current, gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) { host.current.classList.add('dp--fallback'); return; }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sh = (t, c) => { const o = gl.createShader(t); gl.shaderSource(o, c); gl.compileShader(o); return o; };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 a; varying vec2 vUv; void main(){ vUv = a * 0.5 + 0.5; vUv.y = 1.0 - vUv.y; gl_Position = vec4(a, 0.0, 1.0); }'));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, DITHER_FS)); gl.linkProgram(pr); gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const al = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(al); gl.vertexAttribPointer(al, 2, gl.FLOAT, false, 0, 0);
    const U = {}; ['uImg', 'uMask', 'uRes', 'uImgSize', 'uTime', 'uIntro', 'uPix'].forEach(k => U[k] = gl.getUniformLocation(pr, k));
    const mkTex = (unit) => { const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); return t; };
    const tImg = mkTex(0), tMask = mkTex(1);
    gl.uniform1i(U.uImg, 0); gl.uniform1i(U.uMask, 1);
    // Placeholder portrait (until a real photo is set in content.js)
    const ph = document.createElement('canvas'); ph.width = 400; ph.height = 500;
    const px = ph.getContext('2d'); px.fillStyle = '#0E0E0D'; px.fillRect(0, 0, 400, 500);
    const blob = (x, y, rx, ry, c) => { const g = px.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry)); g.addColorStop(0, c); g.addColorStop(1, 'rgba(0,0,0,0)'); px.save(); px.translate(x, y); px.scale(rx / Math.max(rx, ry), ry / Math.max(rx, ry)); px.translate(-x, -y); px.fillStyle = g; px.fillRect(0, 0, 400, 500); px.restore(); };
    blob(200, 190, 105, 135, '#C9BEAE'); blob(200, 520, 230, 170, '#8A8073');
    let imgW = 400, imgH = 500;
    const upload = el => { gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tImg); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, el); imgW = el.width; imgH = el.height; };
    upload(ph);
    if (src) { const im = new Image(); im.onload = () => upload(im); im.src = src; }
    const mk = document.createElement('canvas'); mk.width = 90; mk.height = 112;
    const mx = mk.getContext('2d'); mx.fillStyle = '#000'; mx.fillRect(0, 0, 90, 112);
    let W = 1, H = 1, dpr = 1;
    const size = () => { dpr = Math.min(window.devicePixelRatio || 1, 1.5); W = host.current.clientWidth; H = host.current.clientHeight; canvas.width = W * dpr; canvas.height = H * dpr; gl.viewport(0, 0, W * dpr, H * dpr); };
    size();
    const ro = new ResizeObserver(size); ro.observe(host.current);
    const ptr = { x: .5, y: .5, lx: .5, ly: .5, inside: false, last: 0 };
    const mv = e => { const r = host.current.getBoundingClientRect(); ptr.x = (e.clientX - r.left) / r.width; ptr.y = (e.clientY - r.top) / r.height; ptr.inside = ptr.x > 0 && ptr.x < 1 && ptr.y > 0 && ptr.y < 1; if (ptr.inside) ptr.last = performance.now(); };
    window.addEventListener('pointermove', mv);
    const t0 = performance.now(); let raf;
    const frame = now => {
      raf = requestAnimationFrame(frame);
      if (document.hidden || !host.current || !host.current.closest('.kit-page--on')) return;
      const t = (now - t0) / 1000;
      mx.fillStyle = 'rgba(0,0,0,' + (reduce ? .2 : .035) + ')'; mx.fillRect(0, 0, 90, 112);
      let x = ptr.x, y = ptr.y, on = ptr.inside;
      if (!on && now - ptr.last > 2200 && !reduce) { x = .5 + Math.sin(t * .45) * .3; y = .45 + Math.sin(t * .31 + 1) * .3; on = t > 1.6; }
      if (on) {
        const sp = Math.min(1, Math.hypot(x - ptr.lx, y - ptr.ly) * 18);
        const r = 14 + sp * 10, cx = x * 90, cy = y * 112;
        const g = mx.createRadialGradient(cx, cy, 0, cx, cy, r); g.addColorStop(0, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
        mx.fillStyle = g; mx.fillRect(cx - r, cy - r, r * 2, r * 2);
      }
      ptr.lx = x; ptr.ly = y;
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tMask); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mk);
      gl.uniform2f(U.uRes, W * dpr, H * dpr); gl.uniform2f(U.uImgSize, imgW, imgH);
      gl.uniform1f(U.uTime, t); gl.uniform1f(U.uIntro, reduce ? 1 : Math.min(1, Math.max(0, (t - .3) / 1.4))); gl.uniform1f(U.uPix, Math.round(3 * dpr));
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener('pointermove', mv); };
  }, [src]);
  return (
    <div ref={host} className="dp">
      <canvas ref={cv} className="dp__cv" aria-hidden="true" />
      <div className="dp__fb"><PV_A tone="portrait" halftone src={src || undefined} /></div>
    </div>
  );
}

function AboutScreen() {
  const me = window.BB_ME;
  const scroller = React.useRef(null);
  React.useEffect(() => {
    const sc = scroller.current;
    const on = () => sc.querySelectorAll('[data-reveal]:not(.is-in)').forEach(r => { if (r.getBoundingClientRect().top < window.innerHeight * .88) r.classList.add('is-in'); });
    sc.addEventListener('scroll', on, { passive: true }); on();
    return () => sc.removeEventListener('scroll', on);
  }, []);
  const city = me.city.split(',')[0];
  return (
    <div ref={scroller} className="kit-scroll" data-cursor="Scroll">
      <section className="ab2-hero">
        <div className="ab2-copy">
          <h1 className="ab2-title">
            <span className="kit-line" style={{ '--i': 0 }}><span>Hi, I’m</span></span>
            <span className="kit-line" style={{ '--i': 1 }}><span>Beatrice</span></span>
          </h1>
          <p className="bb-statement" style={{ margin: 0, maxWidth: '22em' }}>
            <span className="kit-line" style={{ '--i': 2 }}><span>An enthusiastic UX/UI designer who also loves to code.</span></span>
            <span className="kit-line dim" style={{ '--i': 3 }}><span>When I’m not in Figma you’ll find me doing sports or with music on way too loud. I love learning from the people around me, and I’m always up for the next challenge.</span></span>
          </p>
          <div className="ab2-meta">
            <div><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Based</span><span className="bb-mono">{city}, BE</span></div>
            <div><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Focus</span><span className="bb-mono">UX/UI · Front-end</span></div>
            <div><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Status</span><span className="bb-mono">Available ●</span></div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}><Pill_A icon="download" href={me.cv || '#'}>Download CV</Pill_A></div>
        </div>
        <div className="ab2-portrait" data-cursor="Reveal">
          <DitherPortrait src={me.portrait} />
          <span className="bb-mono ab2-portrait__tl">Portrait — {city}</span>
          <span className="bb-mono ab2-portrait__br">Move to lift the veil</span>
        </div>
      </section>
      <section className="ab-body">
        <div className="ab-block" data-reveal="">
          <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>01 — A few honest facts</span>
          <div className="ab-facts">
            {[
              ['Law → layers', 'I started out studying law at the VUB. Turns out I’d rather argue for the user than in court.'],
              ['Hospitality-trained', 'Years of serving people taught me UX before I knew the word: read the room, stay calm, be fast.'],
              ['Brussels → Bangkok', 'I packed my laptop and designed a LINE app in Thailand, the first in my family to take a leap like that.'],
              ['Four languages', 'Dutch, French, English and Romanian. Figma and JavaScript don’t count, but I speak those too.']
            ].map(([t, d], k) => <div key={t} className="ab-fact"><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>{String(k + 1).padStart(2, '0')}</span><span className="bb-h3">{t}</span><span className="bb-body" style={{ color: 'var(--text-muted)' }}>{d}</span></div>)}
          </div>
        </div>
        <div className="ab-block" data-reveal="">
          <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>02 — Skills & tools</span>
          <div className="kit-skills">{me.skills.map(k => <Tag_A key={k}>{k}</Tag_A>)}</div>
        </div>
        {me.languages && <div className="ab-block" data-reveal="">
          <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>03 — Languages</span>
          <div className="kit-skills">{me.languages.map(k => <Tag_A key={k}>{k}</Tag_A>)}</div>
        </div>}
        <div className="ab-block" data-reveal="">
          <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>04 — Experience & education</span>
          <div>{me.experience.map(([y, c, r]) => (
            <div key={c} className="kit-xp"><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>{y}</span><span className="bb-h3">{c}</span><span className="bb-body" style={{ color: 'var(--text-muted)' }}>{r}</span></div>
          ))}</div>
        </div>
      </section>
    </div>
  );
}

// "Stop it at the right moment": the BB tile glides back and forth; stop it inside the outline.
// Score = horizontal overlap with the target. Each round gets a little faster. Best score in localStorage.
function PerfectStop() {
  const stage = React.useRef(null), tile = React.useRef(null);
  const st = React.useRef({ x: 0, dir: 1, speed: .55, run: false, t: 0 });
  const [res, setRes] = React.useState(null); // { score, msg }
  const [running, setRunning] = React.useState(false);
  const [round, setRound] = React.useState(1);
  const [best, setBest] = React.useState(() => +(localStorage.getItem('bb-game-best') || 0));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const place = () => { const W = stage.current.clientWidth, T = tile.current.offsetWidth; const x = st.current.x * (W - T); tile.current.style.transform = 'translate3d(' + x.toFixed(1) + 'px,-50%,0) rotate(' + ((st.current.x - .5) * 24).toFixed(1) + 'deg)'; };
  React.useEffect(() => {
    let raf, last = performance.now();
    const loop = now => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(48, now - last) / 1000; last = now;
      const S = st.current; if (!S.run) return;
      S.x += S.dir * S.speed * dt;
      if (S.x > 1) { S.x = 1; S.dir = -1; } if (S.x < 0) { S.x = 0; S.dir = 1; }
      place();
    };
    raf = requestAnimationFrame(loop); place();
    return () => cancelAnimationFrame(raf);
  }, []);
  const start = () => { const S = st.current; S.run = true; S.speed = (reduce ? .3 : .55) + (round - 1) * .12; setRes(null); setRunning(true); };
  const stop = () => {
    const S = st.current; if (!S.run) return; S.run = false; setRunning(false);
    const W = stage.current.clientWidth, T = tile.current.offsetWidth;
    const off = Math.abs(S.x * (W - T) - (W - T) / 2);
    const score = Math.max(0, Math.round(100 - off / T * 100));
    const msg = score >= 97 ? 'Pixel-perfect. You clearly care about details — let’s work together.'
      : score >= 85 ? 'So close. Designers call that “one more iteration”.'
      : score >= 60 ? 'Not bad at all. Again, a bit faster this time?'
      : 'Oops — even the best flows need user testing. Try again!';
    setRes({ score, msg }); setRound(r => Math.min(r + 1, 8));
    if (score > best) { setBest(score); localStorage.setItem('bb-game-best', String(score)); }
  };
  const act = () => (st.current.run ? stop() : start());
  React.useEffect(() => {
    const k = e => { if (e.code === 'Space' && stage.current && stage.current.getBoundingClientRect().top < window.innerHeight * .8) { e.preventDefault(); act(); } };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  });
  return (
    <section className="ct-game" data-screen-label="Contact game">
      <div className="ct-game__head">
        <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Mini game — round {String(round).padStart(2, '0')}</span>
        <h2 className="ct-game__t">Stop it at the right moment</h2>
        <p className="bb-body" style={{ margin: 0, color: 'var(--text-muted)', maxWidth: '34em' }}>Tap the stage (or press space) to freeze the cube right inside the outline. It gets faster every round.</p>
      </div>
      <div ref={stage} className={'ct-stage' + (running ? ' ct-stage--run' : '')} onPointerDown={act} role="button" tabIndex={0} aria-label={running ? 'Stop the cube' : 'Start the game'} data-cursor={running ? 'Stop' : 'Play'}>
        <div className="ct-stage__target" aria-hidden="true" />
        <div ref={tile} className="ct-tile" aria-hidden="true"><span>BB</span></div>
        {!running && !res && <span className="bb-label ct-stage__cta">Tap to start</span>}
        {res && <div className="ct-stage__res" aria-live="polite"><span className="ct-score">{res.score}%</span><span className="bb-body">{res.msg}</span><span className="bb-label">Tap to play again</span></div>}
      </div>
      <div className="ct-game__foot"><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Best score — {best}%</span><span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Score 97%+ and mention it in your email ●</span></div>
    </section>
  );
}

// Background music — official YouTube embed, loaded only after the visitor presses play.
const NIGHTCALL = 'MV_3Dpw-BRY';
function MusicToggle() {
  const [on, setOn] = React.useState(false);
  const frame = React.useRef(null), loaded = React.useRef(false);
  const cmd = f => frame.current && frame.current.contentWindow && frame.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: f, args: [] }), '*');
  const toggle = () => {
    if (!loaded.current) { loaded.current = true; frame.current.src = 'https://www.youtube-nocookie.com/embed/' + NIGHTCALL + '?autoplay=1&loop=1&playlist=' + NIGHTCALL + '&controls=0&enablejsapi=1&playsinline=1'; setOn(true); return; }
    cmd(on ? 'pauseVideo' : 'playVideo'); setOn(!on);
  };
  return (
    <>
      <button className={'kit-music' + (on ? ' kit-music--on' : '')} onClick={toggle} aria-pressed={on} aria-label={on ? 'Pause music' : 'Play music: Nightcall by Kavinsky'} data-cursor={on ? 'Pause' : 'Play'}>
        <span className="bb-mono kit-music__lab">{on ? 'Nightcall — Kavinsky' : 'Play music'}</span>
      </button>
      <iframe ref={frame} className="kit-music__yt" title="Nightcall — Kavinsky" allow="autoplay; encrypted-media" tabIndex={-1} aria-hidden="true" />
    </>
  );
}

function ContactScreen() {
  const me = window.BB_ME;
  const [copied, setCopied] = React.useState(false);
  const copy = () => { try { navigator.clipboard.writeText(me.email); } catch (e) {} setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return (
    <>
      <GB_A floor glows={[{ x: '50%', y: '40%', size: 420, opacity: .16 }]} />
      <div className="kit-scroll" data-cursor="Scroll">
      <div className="ct-hero">
        <span className="bb-mono" style={{ color: 'var(--text-muted)' }}>Say hello. I reply within 1 working day</span>
        <a className="kit-email" href={'mailto:' + me.email} data-cursor="Write me">
          <span className="kit-line"><span>{me.email.replace('@', '@\u200B')}</span></span>
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Pill_A variant="paper" icon={copied ? null : 'arrow-right'} onClick={copy}>{copied ? 'Copied ✓' : 'Copy email'}</Pill_A>
          </div>
          <nav style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {me.socials.map(([n, h], i) => <React.Fragment key={n}>{i > 0 && <span className="bb-label" style={{ color: 'var(--text-dim)' }}>/</span>}<a className="bb-label" href={h} target="_blank" rel="noreferrer">{n}</a></React.Fragment>)}
          </nav>
        </div>
        <span className="bb-mono ct-hint">Waiting for my reply? Play a game ↓</span>
      </div>
      <PerfectStop />
      </div>
    </>
  );
}
Object.assign(window, { AboutScreen, ContactScreen });

// ── App ────────────────────────────────────────
const { CornerFrame: CF, Counter: Counter_App, Cursor: Cursor_App, MenuButton: MB, MobileMenu: MM } = window.BeatriceBjokoDesignSystem_db85ea;

function useViewport() {
  const [v, setV] = React.useState({ vw: window.innerWidth, vh: window.innerHeight });
  React.useEffect(() => { const r = () => setV({ vw: window.innerWidth, vh: window.innerHeight }); window.addEventListener('resize', r); return () => window.removeEventListener('resize', r); }, []);
  return v;
}

function App() {
  const { vw, vh } = useViewport();
  const mobile = vw < 768;
  const fine = window.matchMedia('(pointer: fine)').matches;
  // Repeat visits in the same session skip the intro (sessionStorage)
  const skipIntro = /noloader/.test(location.hash) || (!window.BB_ALWAYS_INTRO && sessionStorage.getItem('bb-intro-seen') === '1');
  const [loaded, setLoaded] = React.useState(skipIntro);
  const [homeOn, setHomeOn] = React.useState(skipIntro);
  React.useEffect(() => { if (!homeOn) return; const w = () => window.BB_WARM && window.BB_WARM(); const id = window.requestIdleCallback ? requestIdleCallback(w, { timeout: 2500 }) : setTimeout(w, 1200); return () => (window.cancelIdleCallback ? cancelIdleCallback(id) : clearTimeout(id)); }, [homeOn]);
  const [page, setPage] = React.useState(() => (location.hash.match(/page=(\w+)/) || [])[1] || 'home');
  // Pages stay mounted once visited, and all are pre-mounted on idle after the intro, so switching never pays for a mount.
  const [mounted, setMounted] = React.useState(() => ({ [page]: true }));
  React.useEffect(() => { setMounted(m => (m[page] ? m : { ...m, [page]: true })); }, [page]);
  React.useEffect(() => { if (!homeOn) return; const all = () => setMounted({ home: true, projects: true, about: true, contact: true }); const id = window.requestIdleCallback ? requestIdleCallback(all, { timeout: 3000 }) : setTimeout(all, 1500); return () => (window.cancelIdleCallback ? cancelIdleCallback(id) : clearTimeout(id)); }, [homeOn]);
  const [entering, setEntering] = React.useState(false);
  const [face, setFace] = React.useState(0);
  const [cs, setCs] = React.useState(null); // { project, origin }
  const [menu, setMenu] = React.useState(false);
  const faces = React.useMemo(() => window.BB_CUBE_FACES(), []);

  const openProject = (p, origin) => setCs({ project: p, origin: origin || null });
  React.useEffect(() => { window.BB_OPEN = id => openProject(window.BB_PROJECTS.find(p => p.id === id)); }, []);
  const go = id => {
    setMenu(false); setCs(null);
    if (id === page) return;
    if (page === 'home' && id !== 'home') {
      setEntering(true);
      setPage(id); setTimeout(() => setEntering(false), 450);
    } else if (id === 'home') {
      setEntering(true); setPage('home');
      setTimeout(() => setEntering(false), 60);
    } else setPage(id);
  };
  // Featured face: no page switch — the case study expands straight out of the cube's on-screen rect.
  const enterFace = f => {
    if (f.project) { const el = document.querySelector('.bb-cube-stage'); openProject(window.BB_PROJECTS.find(p => p.id === f.project) || window.BB_PROJECTS[0], el ? el.getBoundingClientRect() : null); return; }
    go(f.route);
  };
  const f = faces[face];
  const pages = [
    ['home', <HomeScreen entering={entering} onEnter={enterFace} onChange={setFace} index={face} vw={vw} vh={vh} />],
    ['projects', <ProjectsScreen onOpen={openProject} vw={vw} />],
    ['about', <AboutScreen />],
    ['contact', <ContactScreen />],
  ];
  return (
    <div className="kit bb-root">
      {pages.map(([id, el]) => (
        <div key={id} className={'kit-page kit-page--' + id + (page === id ? ' kit-page--on' : '')} data-screen-label={id}>{(page === id || (id === 'home' ? homeOn : mounted[id])) && el}</div>
      ))}
      <CF current={page === 'home' ? undefined : page} onHome={() => go('home')} onNavigate={go}
        topRight={mobile ? <MB open={menu} onClick={() => setMenu(true)} /> : undefined}
        bottomLeft={mobile ? (page === 'home' ? null : undefined) : undefined}
        bottomCenter={page === 'home' ? <Counter_App current={face + 1} total={4} label={'— ' + f.name} /> : null}
        bottomRight={mobile && page === 'home' ? null : undefined} />
      {cs && <CaseStudyView key="cs" project={cs.project} origin={cs.origin} onClose={() => setCs(null)} land={cs.land} via={cs.via} onNext={(n, o) => setCs(c => ({ ...c, project: n, land: o && o.land, via: o && o.via }))} />}
      {mobile && <MM open={menu} onClose={() => setMenu(false)} onNavigate={go} current={page} />}
      {!loaded && <Loader vw={vw} onReady={() => setHomeOn(true)} onDone={() => { sessionStorage.setItem('bb-intro-seen', '1'); setHomeOn(true); setTimeout(() => setLoaded(true), 800); }} />}
      <MusicToggle />
      {fine && !mobile && <Cursor_App />}
    </div>
  );
}
return App;

}

// Waits for the design-system bundle + content.js (loaded in <helmet>) before building.
function Portfolio(props) {
  if (window.BB_CONTENT && window.BB_CONTENT.projects && window.BB_CONTENT.me) ['BB_PROJECTS', 'projects', 'BB_ME', 'me'].forEach((k, i, a) => { if (i % 2) return; const key = a[i + 1]; Object.defineProperty(window, k, { configurable: true, get: () => window.BB_CONTENT[key], set() {} }); });
  window.BB_ALWAYS_INTRO = props.alwaysIntro !== false;
  // content.js writes window.BB_CONTENT; the design-system bundle ships demo data under BB_PROJECTS/BB_ME,
  // so we copy our content over it only once both scripts have run (script order isn't guaranteed).
  const ready = () => {
    if (!(window.BeatriceBjokoDesignSystem_db85ea && window.BB_CONTENT && window.BB_CONTENT.projects && window.BB_CONTENT.me)) return false;
    // Lock the globals to our content so any late demo-data assignment is ignored.
    ['BB_PROJECTS', 'projects', 'BB_ME', 'me'].forEach((k, i, a) => { if (i % 2) return; const key = a[i + 1]; Object.defineProperty(window, k, { configurable: true, get: () => window.BB_CONTENT[key], set() {} }); });
    return true;
  };
  const [App, setApp] = React.useState(() => (ready() ? buildApp() : null));
  React.useEffect(() => {
    if (App) return;
    const t = setInterval(() => { if (ready()) { clearInterval(t); setApp(() => buildApp()); } }, 30);
    return () => clearInterval(t);
  }, []);
  return App ? React.createElement(App) : null;
}
module.exports = { Portfolio };
