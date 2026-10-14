/* @ds-bundle: {"format":4,"namespace":"BeatriceBjokoDesignSystem_db85ea","components":[{"name":"GlassToggle","sourcePath":"components/core/GlassToggle.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"PillButton","sourcePath":"components/core/PillButton.jsx"},{"name":"RoundButton","sourcePath":"components/core/RoundButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/icon-paths.js"},{"name":"Availability","sourcePath":"components/data/Availability.jsx"},{"name":"Counter","sourcePath":"components/data/Counter.jsx"},{"name":"MetaLine","sourcePath":"components/data/MetaLine.jsx"},{"name":"CornerFrame","sourcePath":"components/frame/CornerFrame.jsx"},{"name":"Cursor","sourcePath":"components/frame/Cursor.jsx"},{"name":"GridBackdrop","sourcePath":"components/frame/GridBackdrop.jsx"},{"name":"MenuButton","sourcePath":"components/frame/MenuButton.jsx"},{"name":"MobileMenu","sourcePath":"components/frame/MobileMenu.jsx"},{"name":"SlashNav","sourcePath":"components/frame/SlashNav.jsx"},{"name":"Cube","sourcePath":"components/projects/Cube.jsx"},{"name":"Orbit","sourcePath":"components/projects/Orbit.jsx"},{"name":"ProjectCard","sourcePath":"components/projects/ProjectCard.jsx"},{"name":"ProjectPanel","sourcePath":"components/projects/ProjectPanel.jsx"},{"name":"ProjectVisual","sourcePath":"components/projects/ProjectVisual.jsx"}],"sourceHashes":{"components/core/GlassToggle.jsx":"9bd5824c3472","components/core/Icon.jsx":"9023dead5160","components/core/PillButton.jsx":"3f587ff6be67","components/core/RoundButton.jsx":"72bfc27ee6fd","components/core/Tag.jsx":"661ad3339196","components/core/icon-paths.js":"10e6890c5680","components/data/Availability.jsx":"e122ad3f0ff3","components/data/Counter.jsx":"547b259dc2d0","components/data/MetaLine.jsx":"f9a93d24add4","components/frame/CornerFrame.jsx":"d24c476c43a4","components/frame/Cursor.jsx":"b93d832abae1","components/frame/GridBackdrop.jsx":"969f25197a53","components/frame/MenuButton.jsx":"d5474f6cbe52","components/frame/MobileMenu.jsx":"9347a5ec6a92","components/frame/SlashNav.jsx":"734b6d41f2d4","components/projects/Cube.jsx":"8ea3cdae88b4","components/projects/Orbit.jsx":"cca941cd14e6","components/projects/ProjectCard.jsx":"6d16010d95ea","components/projects/ProjectPanel.jsx":"5e6af2afe93c","components/projects/ProjectVisual.jsx":"b3fde981b658","scratch/dev-ns.js":"00c8e7601b75","ui_kits/portfolio/App.jsx":"611ede9f5bbf","ui_kits/portfolio/CaseStudy.jsx":"fe7956154c09","ui_kits/portfolio/CubeFaces.jsx":"0fee52f6429e","ui_kits/portfolio/HomeScreen.jsx":"b3a571ece556","ui_kits/portfolio/InfoScreens.jsx":"93212f84d172","ui_kits/portfolio/Loader.jsx":"1f279818f649","ui_kits/portfolio/ProjectsScreen.jsx":"e6cdb47d7faf","ui_kits/portfolio/data.js":"10113eabdf58"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BeatriceBjokoDesignSystem_db85ea = window.BeatriceBjokoDesignSystem_db85ea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/GlassToggle.jsx
try { (() => {
/** Frosted pill segmented control with a sliding paper thumb (ARC / LIST, RINGS / SPIRAL). */
function GlassToggle({
  options = ['Arc', 'List'],
  value,
  onChange,
  size = 'md',
  label = 'View',
  className = ''
}) {
  const ref = React.useRef(null);
  const [thumb, setThumb] = React.useState({
    left: 4,
    width: 0
  });
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const current = value ?? opts[0].value;
  React.useLayoutEffect(() => {
    const el = ref.current && ref.current.querySelector('[aria-checked="true"]');
    if (el) setThumb({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [current, options.length]);
  const onKey = e => {
    const i = opts.findIndex(o => o.value === current);
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + opts.length) % opts.length;
      onChange && onChange(opts[n].value);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "radiogroup",
    "aria-label": label,
    onKeyDown: onKey,
    className: ['bb-toggle', size === 'sm' ? 'bb-toggle--sm' : '', className].join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-toggle__thumb",
    style: {
      left: thumb.left,
      width: thumb.width
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === current,
    tabIndex: o.value === current ? 0 : -1,
    className: "bb-toggle__opt",
    onClick: () => onChange && onChange(o.value)
  }, o.label)));
}
Object.assign(__ds_scope, { GlassToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Small uppercase pill for metadata — client, year, role, tool. */
function Tag({
  children,
  variant = 'dark',
  size = 'md',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['bb-tag', 'bb-tag--' + variant, size === 'sm' ? 'bb-tag--sm' : '', className].filter(Boolean).join(' ')
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/icon-paths.js
try { (() => {
// Lucide v0.460 (ISC) inner SVG markup, copied from lucide-static
const ICON_PATHS = {
  'arrow-right': '<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',
  'arrow-up-right': '<path d="M7 7h10v10" /> <path d="M7 17 17 7" />',
  'arrow-left': '<path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />',
  'x': '<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',
  'plus': '<path d="M5 12h14" /> <path d="M12 5v14" />',
  'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <polyline points="7 10 12 15 17 10" /> <line x1="12" x2="12" y1="15" y2="3" />',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />',
  'github': '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /> <path d="M9 18c-4.51 2-5-2-7-2" />',
  'linkedin': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect width="4" height="12" x="2" y="9" /> <circle cx="4" cy="4" r="2" />',
  'dribbble': '<circle cx="12" cy="12" r="10" /> <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /> <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /> <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />',
  'arrow-down': '<path d="M12 5v14" /> <path d="m19 12-7 7-7-7" />',
  'chevron-right': '<path d="m9 18 6-6-6-6" />',
  'sun': '<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',
  'cloud': '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',
  'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />'
};
Object.assign(__ds_scope, { ICON_PATHS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/icon-paths.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Lucide glyph (copied, not CDN) rendered at 1.5 stroke to match the thin-line UI. */
function Icon({
  name = 'arrow-right',
  size = 18,
  strokeWidth = 1.5,
  className = '',
  style,
  title
}) {
  const inner = __ds_scope.ICON_PATHS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    "aria-label": title,
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/PillButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase pill with a sliding arrow. black = default on dark, glass = over imagery/3D, paper = on dark for max contrast. */
function PillButton({
  children,
  variant = 'black',
  size = 'md',
  icon = 'arrow-right',
  href,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) {
  const cls = ['bb-pill', 'bb-pill--' + variant, size === 'sm' ? 'bb-pill--sm' : '', className].filter(Boolean).join(' ');
  const iconEl = icon ? /*#__PURE__*/React.createElement("span", {
    className: "bb-pill__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null;
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      "aria-disabled": disabled || undefined,
      onClick: onClick
    }, rest), children, iconEl);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick
  }, rest), children, iconEl);
}
Object.assign(__ds_scope, { PillButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillButton.jsx", error: String((e && e.message) || e) }); }

// components/core/RoundButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular icon button — arrow links, close. */
function RoundButton({
  icon = 'arrow-up-right',
  variant = 'black',
  size = 'md',
  label,
  href,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bb-round', 'bb-round--' + variant, size !== 'md' ? 'bb-round--' + size : '', className].filter(Boolean).join(' ');
  const aria = label || (icon === 'x' ? 'Close' : 'Open');
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls,
    "data-icon": icon,
    "aria-label": aria,
    "aria-disabled": disabled || undefined,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }));
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "data-icon": icon,
    "aria-label": aria,
    disabled: disabled,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }));
}
Object.assign(__ds_scope, { RoundButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RoundButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Availability.jsx
try { (() => {
/** Status label with a pulsing accent dot — "Available for work ●". */
function Availability({
  available = true,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['bb-avail', available ? '' : 'bb-avail--off', className].join(' ')
  }, children || (available ? 'Available for work' : 'Booked until Jan'), /*#__PURE__*/React.createElement("span", {
    className: "bb-avail__dot",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Availability });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Availability.jsx", error: String((e && e.message) || e) }); }

// components/data/Counter.jsx
try { (() => {
const pad = (n, w) => String(n).padStart(w, '0');

/** Mono index / counter: "01 / 04", "03 / 06 selected works", loader "87%". */
function Counter({
  current = 1,
  total,
  label,
  size = 'md',
  pad: width = 2,
  percent = false,
  className = ''
}) {
  const cls = ['bb-count', size !== 'md' ? 'bb-count--' + size : '', className].filter(Boolean).join(' ');
  if (percent) return /*#__PURE__*/React.createElement("span", {
    className: cls + ' bb-count--pct',
    "aria-label": current + ' percent'
  }, /*#__PURE__*/React.createElement("span", null, pad(Math.round(current), 2)), /*#__PURE__*/React.createElement("span", {
    className: "bb-count__tot"
  }, "%"));
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", null, pad(current, width)), total != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "bb-count__sep"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "bb-count__tot"
  }, pad(total, width))), label && /*#__PURE__*/React.createElement("span", {
    className: "bb-count__lbl"
  }, label));
}
Object.assign(__ds_scope, { Counter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Counter.jsx", error: String((e && e.message) || e) }); }

// components/data/MetaLine.jsx
try { (() => {
function useBrusselsTime(enabled) {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    if (!enabled) return;
    const t = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(t);
  }, [enabled]);
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Brussels',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);
  let offset = 'GMT+1';
  try {
    offset = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Brussels',
      timeZoneName: 'shortOffset'
    }).formatToParts(now).find(p => p.type === 'timeZoneName').value;
  } catch (e) {}
  return {
    time,
    offset
  };
}
function useCoords(enabled) {
  const [c, setC] = React.useState({
    x: 435,
    y: 466
  });
  React.useEffect(() => {
    if (!enabled) return;
    const on = e => setC({
      x: Math.round(e.clientX),
      y: Math.round(e.clientY)
    });
    window.addEventListener('pointermove', on);
    return () => window.removeEventListener('pointermove', on);
  }, [enabled]);
  return c;
}
const p4 = n => String(Math.max(0, n)).padStart(4, '0');

/** Mono metadata line used as decoration: "GMT+2 BE 12:17 18°C", "0435 X 0466 Y". */
function MetaLine({
  time = true,
  place = 'BE',
  temp = '18°C',
  coords = false,
  items = [],
  className = ''
}) {
  const {
    time: t,
    offset
  } = useBrusselsTime(time);
  const c = useCoords(coords);
  const parts = [];
  if (time) parts.push(offset, place, t);
  if (temp && time) parts.push(temp);
  return /*#__PURE__*/React.createElement("span", {
    className: 'bb-meta ' + className
  }, time && /*#__PURE__*/React.createElement("span", null, parts.join(' ')), coords && /*#__PURE__*/React.createElement("span", null, p4(c.x), " X ", p4(c.y), " Y"), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: typeof it === 'object' && it.muted ? 'bb-meta__item--muted' : ''
  }, typeof it === 'object' ? it.text : it)));
}
Object.assign(__ds_scope, { MetaLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetaLine.jsx", error: String((e && e.message) || e) }); }

// components/frame/Cursor.jsx
try { (() => {
/** Accent dot + glass label pill that follows the pointer. Reads [data-cursor] from hovered elements. */
function Cursor({
  label,
  follow = true,
  x = 0,
  y = 0,
  hideNative = true,
  className = ''
}) {
  const ref = React.useRef(null);
  const [auto, setAuto] = React.useState(null);
  const [pressed, setPressed] = React.useState(false);
  React.useEffect(() => {
    if (!follow) return;
    const pos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      },
      tgt = {
        ...pos
      };
    let raf;
    const move = e => {
      tgt.x = e.clientX;
      tgt.y = e.clientY;
      const el = e.target.closest && e.target.closest('[data-cursor]');
      setAuto(el ? el.getAttribute('data-cursor') : null);
    };
    const down = () => setPressed(true),
      up = () => setPressed(false);
    const tick = () => {
      pos.x += (tgt.x - pos.x) * .22;
      pos.y += (tgt.y - pos.y) * .22;
      if (ref.current) ref.current.style.transform = 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)';
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    if (hideNative) document.documentElement.style.cursor = 'none';
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      if (hideNative) document.documentElement.style.cursor = '';
    };
  }, [follow, hideNative]);
  const text = label !== undefined ? label : auto;
  const words = text ? String(text).split(' ') : [];
  const cls = ['bb-cursor', follow ? '' : 'bb-cursor--static', text ? 'bb-cursor--label' : '', pressed ? 'bb-cursor--pressed' : '', className].join(' ');
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: cls,
    "aria-hidden": "true",
    style: follow ? undefined : {
      left: x,
      top: y
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-cursor__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bb-cursor__label"
  }, words[0], words.length > 1 && /*#__PURE__*/React.createElement("em", null, words.slice(1).join(' '))));
}
Object.assign(__ds_scope, { Cursor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Cursor.jsx", error: String((e && e.message) || e) }); }

// components/frame/GridBackdrop.jsx
try { (() => {
/** The technical-drawing world: dot grid, "+" crosshairs, perspective floor, halftone glows, vignette. */
function GridBackdrop({
  dots = true,
  crosses = true,
  floor = false,
  glows = [],
  vignette = true,
  light = false,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['bb-backdrop', light ? 'bb-backdrop--light' : '', className].join(' '),
    "aria-hidden": "true"
  }, dots && /*#__PURE__*/React.createElement("div", {
    className: "bb-backdrop__dots"
  }), crosses && /*#__PURE__*/React.createElement("div", {
    className: "bb-backdrop__cross"
  }), glows.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bb-backdrop__glow",
    style: {
      left: g.x,
      top: g.y,
      width: g.size || 340,
      height: g.size || 340,
      color: g.color || 'var(--accent)',
      opacity: g.opacity ?? .45,
      transform: 'translate(-50%,-50%)'
    }
  })), floor && /*#__PURE__*/React.createElement("div", {
    className: "bb-backdrop__floor"
  }), children, vignette && !light && /*#__PURE__*/React.createElement("div", {
    className: "bb-backdrop__vignette"
  }));
}
Object.assign(__ds_scope, { GridBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/GridBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/frame/MenuButton.jsx
try { (() => {
/** "MENU ::" trigger for the mobile menu. */
function MenuButton({
  label = 'Menu',
  open = false,
  onClick,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'bb-menu-btn ' + className,
    "aria-expanded": open,
    onClick: onClick
  }, open ? 'Close' : label, /*#__PURE__*/React.createElement("span", {
    className: "bb-menu-btn__dots",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}
Object.assign(__ds_scope, { MenuButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/MenuButton.jsx", error: String((e && e.message) || e) }); }

// components/frame/MobileMenu.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'about',
  label: 'About'
}, {
  id: 'contact',
  label: 'Contact'
}];

/** Full-screen menu revealed with a circular wipe from the MENU button; big display links stagger up. */
function MobileMenu({
  open = false,
  onClose,
  onNavigate,
  items = DEFAULT_ITEMS,
  current,
  contained = false,
  email = 'hello@beatricebjoko.com'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['bb-mmenu', open ? 'bb-mmenu--open' : '', contained ? 'bb-mmenu--contained' : ''].join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": !open,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-mmenu__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-frame__name"
  }, "Beatrice Bjoko"), /*#__PURE__*/React.createElement(__ds_scope.RoundButton, {
    icon: "x",
    variant: "glass",
    size: "md",
    onClick: onClose,
    label: "Close menu"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "bb-mmenu__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.id,
    className: "bb-mmenu__item"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bb-mmenu__link",
    "aria-current": current === it.id ? 'page' : undefined,
    style: {
      transitionDelay: open ? 120 + i * 70 + 'ms' : '0ms'
    },
    onClick: () => onNavigate && onNavigate(it.id)
  }, it.label, /*#__PURE__*/React.createElement("span", {
    className: "bb-mmenu__idx"
  }, String(i + 1).padStart(2, '0')))))), /*#__PURE__*/React.createElement("div", {
    className: "bb-mmenu__foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    className: "bb-h3",
    style: {
      color: 'var(--text-primary)'
    }
  }, email), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaLine, {
    temp: ""
  }), /*#__PURE__*/React.createElement(__ds_scope.Availability, null))));
}
Object.assign(__ds_scope, { MobileMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/MobileMenu.jsx", error: String((e && e.message) || e) }); }

// components/frame/SlashNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slash-prefixed uppercase links: /projects /about /contact. */
function SlashNav({
  items = ['projects', 'about', 'contact'],
  current,
  onNavigate,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: 'bb-slashnav ' + className,
    "aria-label": "Primary"
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'object' && it.href;
    const props = {
      key: id,
      className: 'bb-slashnav__a',
      'aria-current': current === id ? 'page' : undefined,
      'data-cursor': 'Go /' + label
    };
    return href ? /*#__PURE__*/React.createElement("a", _extends({}, props, {
      href: href,
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(id);
        }
      }
    }), label) : /*#__PURE__*/React.createElement("button", _extends({}, props, {
      type: "button",
      onClick: () => onNavigate && onNavigate(id)
    }), label);
  }));
}
Object.assign(__ds_scope, { SlashNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/SlashNav.jsx", error: String((e && e.message) || e) }); }

// components/frame/CornerFrame.jsx
try { (() => {
/** Four-corner UI frame. Everything else is space for the scene. Pass null to empty a corner. */
function CornerFrame({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  bottomCenter,
  topCenter,
  fixed = false,
  onHome,
  current,
  onNavigate,
  className = ''
}) {
  const tl = topLeft !== undefined ? topLeft : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bb-frame__name",
    onClick: onHome,
    "data-cursor": "Home"
  }, "Beatrice Bjoko");
  const tr = topRight !== undefined ? topRight : /*#__PURE__*/React.createElement(__ds_scope.SlashNav, {
    current: current,
    onNavigate: onNavigate
  });
  const bl = bottomLeft !== undefined ? bottomLeft : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "bb-label"
  }, "UX/UI & Front-end Developer"), /*#__PURE__*/React.createElement(__ds_scope.MetaLine, null));
  const br = bottomRight !== undefined ? bottomRight : /*#__PURE__*/React.createElement(__ds_scope.Availability, null);
  return /*#__PURE__*/React.createElement("div", {
    className: ['bb-frame', fixed ? 'bb-frame--fixed' : '', className].join(' ')
  }, tl && /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__tl"
  }, tl), topCenter && /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__tc"
  }, topCenter), tr && /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__tr"
  }, tr), bl && /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__bl"
  }, bl), bottomCenter && /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__bc"
  }, bottomCenter), br && /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__br"
  }, br));
}
Object.assign(__ds_scope, { CornerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/CornerFrame.jsx", error: String((e && e.message) || e) }); }

// components/projects/Cube.jsx
try { (() => {
const FACE_T = (i, h) => 'rotateY(' + i * 90 + 'deg) translateZ(' + h + 'px)';

/** THE CUBE — glossy 4-face navigation hero. Idle float, cursor tilt w/ spring, drag-to-rotate + snap, keyboard ← → Enter. */
function Cube({
  faces = [],
  top,
  bottom,
  size = 420,
  index = 0,
  onChange,
  onEnter,
  entering = false,
  hint = true,
  className = ''
}) {
  const stage = React.useRef(null),
    cube = React.useRef(null);
  const st = React.useRef({
    turn: index,
    y: -index * 90,
    x: -8,
    vy: 0,
    vx: 0,
    mx: 0,
    my: 0,
    drag: null,
    t0: performance.now()
  });
  const [active, setActive] = React.useState((index % 4 + 4) % 4);
  const [dragging, setDragging] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const h = size / 2;
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const goTurn = React.useCallback(turn => {
    st.current.turn = turn;
    const a = (turn % 4 + 4) % 4;
    setActive(a);
    onChange && onChange(a);
  }, [onChange]);
  React.useEffect(() => {
    let raf;
    const onMove = e => {
      st.current.mx = e.clientX / window.innerWidth * 2 - 1;
      st.current.my = e.clientY / window.innerHeight * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    const tick = now => {
      const s = st.current,
        t = (now - s.t0) / 1000;
      const idle = s.drag || reduce ? 0 : Math.sin(t * .5) * 5;
      const ty = s.drag ? s.drag.y : -s.turn * 90 + s.mx * 16 + idle;
      const tx = -8 - s.my * 12 + (reduce ? 0 : Math.sin(t * .7) * 2);
      if (s.drag || reduce) {
        s.y += (ty - s.y) * (reduce ? 1 : .35);
        s.vy = 0;
      } else {
        s.vy = (s.vy + (ty - s.y) * .045) * .84;
        s.y += s.vy;
      }
      s.vx = (s.vx + (tx - s.x) * .05) * .82;
      s.x += s.vx;
      if (cube.current) {
        cube.current.style.transform = 'rotateX(' + s.x.toFixed(3) + 'deg) rotateY(' + s.y.toFixed(3) + 'deg)';
        cube.current.style.setProperty('--bb-light-angle', 110 + s.mx * 50 + 'deg');
        cube.current.style.setProperty('--bb-iris-x', 50 + s.mx * 45 + '%');
        cube.current.style.setProperty('--bb-iris-y', 50 + s.my * 45 + '%');
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, [reduce]);
  const onDown = e => {
    st.current.drag = {
      sx: e.clientX,
      sy: e.clientY,
      y0: st.current.y,
      y: st.current.y,
      moved: 0,
      last: e.clientX,
      v: 0,
      target: e.target
    };
    stage.current.setPointerCapture && stage.current.setPointerCapture(e.pointerId);
  };
  const onMoveDrag = e => {
    const d = st.current.drag;
    if (!d) return;
    const dx = e.clientX - d.sx;
    d.moved = Math.max(d.moved, Math.abs(dx), Math.abs(e.clientY - d.sy));
    d.v = e.clientX - d.last;
    d.last = e.clientX;
    d.y = d.y0 + dx * .4;
    if (d.moved > 6 && !dragging) setDragging(true);
  };
  const onUp = () => {
    const d = st.current.drag;
    if (!d) return;
    st.current.drag = null;
    setDragging(false);
    if (d.moved < 6) {
      onEnter && onEnter(faces[active], active);
      return;
    }
    const proj = st.current.y + d.v * 6;
    goTurn(Math.round(-proj / 90));
  };
  const onKey = e => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTurn(st.current.turn + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTurn(st.current.turn - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onEnter && onEnter(faces[active], active);
    }
  };
  const face = (content, transform, key, label, i) => /*#__PURE__*/React.createElement("div", {
    key: key,
    className: 'bb-cube__face' + (hover && i === active ? ' bb-cube__face--hover' : ''),
    style: {
      transform
    },
    "data-cursor": dragging ? 'Drag' : label ? 'Enter ' + label : 'Drag'
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__content"
  }, content), /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__iris"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__edge"
  }));
  const cur = faces[active];
  return /*#__PURE__*/React.createElement("div", {
    ref: stage,
    className: ['bb-cube-stage', hover ? 'bb-cube-stage--hover' : '', entering ? 'bb-cube-stage--entering' : '', className].join(' '),
    style: {
      width: size,
      height: size
    },
    tabIndex: 0,
    role: "group",
    "aria-roledescription": "cube navigation",
    "aria-label": cur ? 'Face ' + (active + 1) + ' of ' + faces.length + ': ' + cur.label + '. Arrow keys rotate, Enter opens.' : 'Cube',
    onPointerDown: onDown,
    onPointerMove: onMoveDrag,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => setHover(false),
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__shadow",
    style: {
      top: 'calc(100% + ' + Math.round(size * .14) + 'px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-cube-fly"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-cube-float"
  }, /*#__PURE__*/React.createElement("div", {
    ref: cube,
    className: "bb-cube"
  }, faces.slice(0, 4).map((f, i) => face(f.content, FACE_T(i, h), f.id || i, f.label, i)), face(top, 'rotateX(90deg) translateZ(' + h + 'px)', 'top', null, -1), face(bottom, 'rotateX(-90deg) translateZ(' + h + 'px)', 'bottom', null, -2)))), hint && cur && /*#__PURE__*/React.createElement("div", {
    className: "bb-cube__hint"
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "glass"
  }, "Enter ", cur.label)));
}
Object.assign(__ds_scope, { Cube });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/Cube.jsx", error: String((e && e.message) || e) }); }

// components/projects/ProjectVisual.jsx
try { (() => {
/** Project imagery slot. Pass src for real work; otherwise renders an atmospheric tone placeholder with a mono label. */
function ProjectVisual({
  tone = 'kodo',
  src,
  alt = '',
  label,
  halftone = false,
  grain = false,
  className = '',
  style,
  children
}) {
  const cls = ['bb-ph', 'bb-ph--' + tone, halftone ? 'bb-ph--halftone' : '', grain ? 'bb-ph--grain' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "bb-ph__label"
  }, label), children);
}
Object.assign(__ds_scope, { ProjectVisual });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/ProjectVisual.jsx", error: String((e && e.message) || e) }); }

// components/projects/Orbit.jsx
try { (() => {
/** Project images drifting on a loose tilted ring around the center; depth-sorted around a z-index pivot so they pass behind/in front of the cube. */
function Orbit({
  items = [],
  rx = 520,
  ry = 140,
  speed = .05,
  parallax = 24,
  pivot = 10,
  tilt = -6
}) {
  const refs = React.useRef([]);
  React.useEffect(() => {
    let raf,
      a = 0,
      mx = 0,
      my = 0,
      last = performance.now();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mv = e => {
      mx = e.clientX / window.innerWidth * 2 - 1;
      my = e.clientY / window.innerHeight * 2 - 1;
    };
    window.addEventListener('pointermove', mv);
    const n = items.length;
    const tick = now => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      if (!reduce) a += speed * dt;
      for (let i = 0; i < n; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const it = items[i];
        const th = a + i / n * Math.PI * 2 + (it.jitter || 0);
        const r = 1 + (it.r || 0);
        const z = Math.sin(th);
        const depth = (z + 1) / 2;
        const x = Math.cos(th) * rx * r + mx * parallax * (0.4 + depth);
        const y = z * ry * r + (it.dy || 0) + my * parallax * .6 * (0.4 + depth) + Math.cos(th) * tilt * 6;
        const s = .55 + depth * .4;
        el.style.transform = 'translate(-50%,-50%) translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) scale(' + s.toFixed(3) + ')';
        el.style.zIndex = z > 0 ? pivot + 1 + Math.round(depth * 10) : pivot - 1 - Math.round((1 - depth) * 5);
        el.style.opacity = (.35 + depth * .65).toFixed(3);
        el.style.filter = z > 0 ? 'none' : 'blur(' + ((1 - depth) * 2.5).toFixed(2) + 'px) brightness(.7)';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', mv);
    };
  }, [items, rx, ry, speed, parallax, pivot, tilt]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bb-orbit",
    "aria-hidden": "true"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    ref: el => refs.current[i] = el,
    className: "bb-orbit__item",
    style: {
      width: it.w || 150,
      height: it.h || 100
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProjectVisual, {
    tone: it.tone,
    src: it.src
  }))));
}
Object.assign(__ds_scope, { Orbit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/Orbit.jsx", error: String((e && e.message) || e) }); }

// components/projects/ProjectCard.jsx
try { (() => {
/** Project card bent on a cylinder (CSS slices). Title bottom-left, black round arrow bottom-right. Straightens + lifts on hover. */
function ProjectCard({
  title,
  subtitle,
  index,
  tone = 'kodo',
  src,
  width = 520,
  height = 340,
  bend = 30,
  hoverBend = 12,
  slices = 14,
  radius = 28,
  onOpen,
  className = '',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const B = Math.max(2, hover ? hoverBend : bend);
  const rad = B * Math.PI / 180;
  const R = width / rad;
  const sw = width / slices;
  const face = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.ProjectVisual, {
    tone: tone,
    src: src
  }), index && /*#__PURE__*/React.createElement("span", {
    className: "bb-pcard__idx"
  }, index), /*#__PURE__*/React.createElement("span", {
    className: "bb-pcard__title"
  }, title, subtitle && /*#__PURE__*/React.createElement("span", {
    className: "bb-pcard__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    className: "bb-pcard__btn"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  })));
  const items = [];
  for (let i = 0; i < slices; i++) {
    const t = (i + .5 - slices / 2) / (slices / 2);
    const th = (i + .5 - slices / 2) * (B / slices);
    const br = i === 0 ? radius + 'px 0 0 ' + radius + 'px' : i === slices - 1 ? '0 ' + radius + 'px ' + radius + 'px 0' : 0;
    const shade = Math.pow(Math.abs(t), 1.6) * (hover ? .1 : .26);
    items.push(/*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bb-pcard__slice",
      style: {
        left: (width - sw) / 2 - .5,
        width: sw + 1,
        borderRadius: br,
        transform: 'translateZ(' + R + 'px) rotateY(' + -th + 'deg) translateZ(' + -R + 'px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bb-pcard__face",
      style: {
        left: -i * sw + .5,
        width
      }
    }, face), /*#__PURE__*/React.createElement("div", {
      className: "bb-pcard__shade",
      style: {
        background: 'linear-gradient(90deg,rgba(0,0,0,' + shade + '),rgba(0,0,0,' + shade + ')),linear-gradient(90deg,rgba(255,255,255,' + Math.max(0, .1 - Math.abs(t + .35) * .2) + '),transparent)'
      }
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: 'bb-pcard ' + className,
    style: {
      width,
      height,
      ...style
    },
    tabIndex: 0,
    role: "button",
    "aria-label": 'Open ' + title,
    "data-cursor": 'View ' + title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    onClick: onOpen,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen && onOpen();
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-pcard__curve",
    style: {
      width,
      height,
      transform: hover ? 'translateZ(40px) translateY(-8px)' : 'none'
    }
  }, items), /*#__PURE__*/React.createElement("div", {
    className: "bb-pcard__reflect"
  }));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/projects/ProjectPanel.jsx
try { (() => {
/** White rounded panel that slides up over the dark scene. Left: title, description, tags, link. Right: scrolling image column. */
function ProjectPanel({
  open = false,
  onClose,
  project = {},
  fixed = false,
  children
}) {
  const {
    title = 'Project',
    description,
    tags = [],
    url,
    index,
    total,
    shots = []
  } = project;
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['bb-panel-layer', fixed ? 'bb-panel-layer--fixed' : '', open ? 'bb-panel-layer--open' : ''].join(' '),
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-panel-scrim",
    onClick: onClose,
    "data-cursor": "Close"
  }), /*#__PURE__*/React.createElement("section", {
    className: "bb-panel bb-light",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-panel__grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__close"
  }, /*#__PURE__*/React.createElement(__ds_scope.RoundButton, {
    icon: "x",
    onClick: onClose,
    label: "Close project",
    "data-cursor": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__info"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "bb-panel__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "bb-panel__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__row"
  }, url && /*#__PURE__*/React.createElement(__ds_scope.RoundButton, {
    icon: "arrow-up-right",
    size: "sm",
    href: url,
    label: "Visit live site"
  }), tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    variant: "light"
  }, t))), index != null && /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Counter, {
    current: index,
    total: total,
    label: "selected works"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__media",
    "data-cursor": "Scroll"
  }, shots.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'bb-panel__shot' + (s.tall ? ' bb-panel__shot--tall' : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.ProjectVisual, {
    tone: s.tone,
    src: s.src,
    label: s.label
  }))), children))));
}
Object.assign(__ds_scope, { ProjectPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/ProjectPanel.jsx", error: String((e && e.message) || e) }); }

// scratch/dev-ns.js
try { (() => {
// Dev-only fallback: if _ds_bundle.js hasn't been compiled yet, build the namespace from component sources.
(function () {
  var NS = 'BeatriceBjokoDesignSystem_db85ea';
  if (window[NS]) return;
  var root = (document.currentScript.getAttribute('data-root') || '../..') + '/components/';
  var files = ['core/icon-paths.js', 'core/Icon.jsx', 'core/PillButton.jsx', 'core/RoundButton.jsx', 'core/GlassToggle.jsx', 'core/Tag.jsx', 'data/Counter.jsx', 'data/MetaLine.jsx', 'data/Availability.jsx', 'frame/SlashNav.jsx', 'frame/MenuButton.jsx', 'frame/CornerFrame.jsx', 'frame/GridBackdrop.jsx', 'frame/Cursor.jsx', 'frame/MobileMenu.jsx', 'projects/ProjectVisual.jsx', 'projects/ProjectCard.jsx', 'projects/ProjectPanel.jsx', 'projects/Cube.jsx', 'projects/Orbit.jsx'];
  var names = [],
    src = '';
  files.forEach(function (f) {
    var x = new XMLHttpRequest();
    x.open('GET', root + f, false);
    x.send();
    var c = x.responseText.replace(/^import[^\n]*\n/gm, '');
    c = c.replace(/export (function|const) ([A-Za-z_]+)/g, function (m, k, n) {
      names.push(n);
      return k + ' ' + n;
    });
    src += c + '\n';
  });
  src += 'window.' + NS + '={' + names.join(',') + '};';
  var out = Babel.transform('(function(){' + src + '})();', {
    presets: ['react']
  }).code;
  (0, eval)(out);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scratch/dev-ns.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
const {
  CornerFrame: CF,
  Counter: Counter_App,
  Cursor: Cursor_App,
  MenuButton: MB,
  MobileMenu: MM,
  ProjectPanel: PP
} = window.BeatriceBjokoDesignSystem_db85ea;
function useViewport() {
  const [v, setV] = React.useState({
    vw: window.innerWidth,
    vh: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setV({
      vw: window.innerWidth,
      vh: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  return v;
}
function App() {
  const {
    vw,
    vh
  } = useViewport();
  const mobile = vw < 768;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const skipIntro = /noloader/.test(location.hash);
  const [loaded, setLoaded] = React.useState(skipIntro);
  const [page, setPage] = React.useState(() => (location.hash.match(/page=(\w+)/) || [])[1] || 'home');
  const [entering, setEntering] = React.useState(false);
  const [face, setFace] = React.useState(0);
  const [project, setProject] = React.useState(null);
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const faces = React.useMemo(() => window.BB_CUBE_FACES(), []);
  const openProject = p => {
    setProject(p);
    setPanelOpen(true);
  };
  const go = id => {
    setMenu(false);
    setPanelOpen(false);
    if (id === page) return;
    if (page === 'home' && id !== 'home') {
      setEntering(true);
      setTimeout(() => {
        setPage(id);
        setEntering(false);
      }, 700);
    } else if (id === 'home') {
      setEntering(true);
      setPage('home');
      setTimeout(() => setEntering(false), 60);
    } else setPage(id);
  };
  const enterFace = f => {
    go(f.route);
    if (f.project) setTimeout(() => openProject(window.BB_PROJECTS[0]), 1100);
  };
  const f = faces[face];
  const pages = [['home', /*#__PURE__*/React.createElement(HomeScreen, {
    entering: entering,
    onEnter: enterFace,
    onChange: setFace,
    index: face,
    vw: vw,
    vh: vh
  })], ['projects', /*#__PURE__*/React.createElement(ProjectsScreen, {
    onOpen: openProject,
    vw: vw
  })], ['about', /*#__PURE__*/React.createElement(AboutScreen, null)], ['contact', /*#__PURE__*/React.createElement(ContactScreen, null)]];
  return /*#__PURE__*/React.createElement("div", {
    className: "kit bb-root"
  }, pages.map(([id, el]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: 'kit-page kit-page--' + id + (page === id ? ' kit-page--on' : ''),
    "data-screen-label": id
  }, (page === id || id === 'home') && el)), /*#__PURE__*/React.createElement(CF, {
    current: page === 'home' ? undefined : page,
    onHome: () => go('home'),
    onNavigate: go,
    topRight: mobile ? /*#__PURE__*/React.createElement(MB, {
      open: menu,
      onClick: () => setMenu(true)
    }) : undefined,
    bottomLeft: mobile ? page === 'home' ? null : undefined : undefined,
    bottomCenter: page === 'home' ? /*#__PURE__*/React.createElement(Counter_App, {
      current: face + 1,
      total: 4,
      label: '— ' + f.name
    }) : null,
    bottomRight: mobile && page === 'home' ? null : undefined
  }), /*#__PURE__*/React.createElement(PP, {
    open: panelOpen,
    onClose: () => setPanelOpen(false),
    project: project ? {
      ...project,
      tags: [project.role, String(project.year), ...project.tools.slice(0, 2)],
      url: '#',
      index: project.n,
      total: 6,
      shots: [{
        tone: project.tone,
        label: 'Hero · ' + project.title
      }, {
        tone: project.tone,
        label: 'Research board',
        tall: true
      }]
    } : {}
  }, project && /*#__PURE__*/React.createElement(CaseStudy, {
    project: project,
    onNext: n => setProject(n)
  })), mobile && /*#__PURE__*/React.createElement(MM, {
    open: menu,
    onClose: () => setMenu(false),
    onNavigate: go,
    current: page
  }), !loaded && /*#__PURE__*/React.createElement(Loader, {
    vw: vw,
    onDone: () => setTimeout(() => setLoaded(true), 800)
  }), fine && !mobile && /*#__PURE__*/React.createElement(Cursor_App, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const {
  ProjectVisual: PV_C,
  Counter: Counter_C
} = window.BeatriceBjokoDesignSystem_db85ea;
function scrollParent(el) {
  while (el && el !== document.body) {
    const s = getComputedStyle(el);
    if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight) return el;
    el = el.parentElement;
  }
  return null;
}
function useScrollProgress(ref, deps = []) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let sc = scrollParent(el.parentElement);
    const on = () => {
      sc = sc || scrollParent(el.parentElement);
      if (!sc) return;
      const r = el.getBoundingClientRect(),
        c = sc.getBoundingClientRect();
      const total = r.height - c.height;
      setP(Math.max(0, Math.min(1, (c.top - r.top) / Math.max(1, total))));
    };
    const target = sc || window;
    const attach = () => {
      sc = scrollParent(el.parentElement);
      (sc || window).addEventListener('scroll', on, {
        passive: true
      });
      on();
    };
    const t = setTimeout(attach, 50);
    return () => {
      clearTimeout(t);
      (sc || target).removeEventListener('scroll', on);
    };
  }, deps);
  return p;
}
function GrowImage({
  tone,
  label
}) {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref, [tone]);
  const e = 1 - Math.pow(1 - Math.min(1, p * 1.4), 3);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "kit-cs__grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-cs__growin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-cs__growbox",
    style: {
      width: 34 + e * 66 + '%',
      height: 40 + e * 60 + '%',
      borderRadius: 18 - e * 8 + 'px'
    }
  }, /*#__PURE__*/React.createElement(PV_C, {
    tone: tone,
    label: label
  }))));
}
function LoopEnd({
  next,
  onNext
}) {
  const ref = React.useRef(null);
  const p = useScrollProgress(ref, [next.id]);
  const fired = React.useRef(false);
  React.useEffect(() => {
    fired.current = false;
  }, [next.id]);
  React.useEffect(() => {
    if (p > .97 && !fired.current) {
      fired.current = true;
      onNext(next);
    }
  }, [p]);
  const s = 1 - p * .72;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "kit-loopend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-loopend__in",
    "data-cursor": "Scroll"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 14,
      opacity: Math.min(1, p * 2),
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Next \u2014 ", /*#__PURE__*/React.createElement(Counter_C, {
    current: next.n,
    total: 6
  })), /*#__PURE__*/React.createElement("span", {
    className: "bb-display-2",
    style: {
      fontSize: 'clamp(48px,7vw,120px)'
    }
  }, next.title), /*#__PURE__*/React.createElement("span", {
    className: "bb-label",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Keep scrolling \u2193")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: 'translateY(' + -p * 34 + '%) scale(' + s + ')',
      borderRadius: 18 * (1 + p * 2),
      overflow: 'hidden',
      opacity: 1 - Math.max(0, p - .8) * 5
    }
  }, /*#__PURE__*/React.createElement(PV_C, {
    tone: next.tone
  }))));
}
function CaseStudy({
  project,
  onNext
}) {
  const list = window.BB_PROJECTS;
  const next = list[project.n % list.length];
  const root = React.useRef(null);
  React.useEffect(() => {
    const sc = root.current && scrollParent(root.current.parentElement);
    const all = document.querySelectorAll('.bb-panel__media,.bb-panel__grid');
    all.forEach(a => a.scrollTop = 0);
    if (sc) sc.scrollTop = 0;
  }, [project.id]);
  return /*#__PURE__*/React.createElement("div", {
    ref: root,
    className: "kit-cs bb-light",
    style: {
      background: 'transparent'
    }
  }, project.process.map(([h, t], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-cs__sec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-on-light-muted)'
    }
  }, String(i + 1).padStart(2, '0'), " \u2014 ", h), /*#__PURE__*/React.createElement("p", {
    className: "bb-body-l",
    style: {
      margin: 0,
      maxWidth: '34em'
    }
  }, t)), i === 1 && /*#__PURE__*/React.createElement("div", {
    className: "bb-panel__shot bb-panel__shot--tall",
    style: {
      width: '62%'
    }
  }, /*#__PURE__*/React.createElement(PV_C, {
    tone: "paper",
    label: 'Wireframes · ' + project.title
  })), i === 2 && /*#__PURE__*/React.createElement(GrowImage, {
    tone: project.tone,
    label: 'Final UI · ' + project.title
  }))), /*#__PURE__*/React.createElement(LoopEnd, {
    next: next,
    onNext: onNext
  }));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CubeFaces.jsx
try { (() => {
const {
  ProjectVisual: PV_F,
  Counter: Counter_F
} = window.BeatriceBjokoDesignSystem_db85ea;
function FaceChrome({
  idx,
  route,
  title,
  children,
  dark = true
}) {
  const c = dark ? 'var(--paper-50)' : 'var(--ink-950)';
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-face",
    style: {
      color: c
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "kit-face__tl bb-mono"
  }, idx, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "/ 04")), /*#__PURE__*/React.createElement("span", {
    className: "kit-face__tr bb-mono"
  }, route), title && /*#__PURE__*/React.createElement("span", {
    className: "kit-face__bl"
  }, title));
}
function FeaturedFace() {
  const p = window.BB_PROJECTS[0];
  return /*#__PURE__*/React.createElement(FaceChrome, {
    idx: "01",
    route: "Featured"
  }, /*#__PURE__*/React.createElement(PV_F, {
    tone: p.tone,
    grain: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-face__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-face__bl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-display-3",
    style: {
      fontSize: 'clamp(34px,5vh,58px)',
      textTransform: 'uppercase'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      opacity: .8
    }
  }, p.type, " \xB7 ", p.year)));
}
function ProjectsFace() {
  const tones = ['lumen', 'noor', 'driftwave', 'verde', 'kodo', 'papermoon', 'noor', 'lumen', 'driftwave'];
  return /*#__PURE__*/React.createElement(FaceChrome, {
    idx: "02",
    route: "/projects",
    title: /*#__PURE__*/React.createElement("span", {
      className: "bb-h3"
    }, "Selected works ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .55
      }
    }, "(6)"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#0d0d0f'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-collage"
  }, tones.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(PV_F, {
    tone: t
  })))));
}
function AboutFace() {
  return /*#__PURE__*/React.createElement(FaceChrome, {
    idx: "03",
    route: "/about",
    title: /*#__PURE__*/React.createElement("span", {
      className: "bb-h3"
    }, "Hi, I\u2019m Beatrice.")
  }, /*#__PURE__*/React.createElement(PV_F, {
    tone: "portrait",
    halftone: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "bb-signature",
    style: {
      position: 'absolute',
      left: '14%',
      top: '20%',
      zIndex: 3,
      transform: 'rotate(-10deg)',
      fontSize: 'clamp(48px,8vh,96px)'
    }
  }, "Beatrice"), /*#__PURE__*/React.createElement("span", {
    className: "bb-pixel",
    style: {
      position: 'absolute',
      right: '18%',
      top: '42%',
      zIndex: 3
    }
  }));
}
function ContactFace() {
  return /*#__PURE__*/React.createElement(FaceChrome, {
    idx: "04",
    route: "/contact",
    dark: false,
    title: /*#__PURE__*/React.createElement("span", {
      className: "bb-label"
    }, "Available for work \u25CF")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--paper-50)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 18px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-display-3",
    style: {
      fontSize: 'clamp(30px,5.4vh,62px)',
      lineHeight: .9,
      letterSpacing: '-.05em',
      color: 'var(--ink-950)'
    }
  }, "hello@", /*#__PURE__*/React.createElement("br", null), "beatrice", /*#__PURE__*/React.createElement("br", null), "bjoko.com")));
}
function TopFace() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'radial-gradient(circle at 35% 30%,#2a2a2f,#0a0a0b 70%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-display-2",
    style: {
      fontSize: '38%',
      lineHeight: 1
    }
  }, "BB"));
}
window.BB_CUBE_FACES = () => [{
  id: 'featured',
  label: 'Lumen',
  route: 'projects',
  project: 'lumen',
  name: 'Featured',
  content: /*#__PURE__*/React.createElement(FeaturedFace, null)
}, {
  id: 'projects',
  label: '/projects',
  route: 'projects',
  name: 'Projects',
  content: /*#__PURE__*/React.createElement(ProjectsFace, null)
}, {
  id: 'about',
  label: '/about',
  route: 'about',
  name: 'About',
  content: /*#__PURE__*/React.createElement(AboutFace, null)
}, {
  id: 'contact',
  label: '/contact',
  route: 'contact',
  name: 'Contact',
  content: /*#__PURE__*/React.createElement(ContactFace, null)
}];
Object.assign(window, {
  TopFace
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CubeFaces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
const {
  Cube: Cube_H,
  Orbit: Orbit_H,
  GridBackdrop: GB_H,
  ProjectVisual: PV_H
} = window.BeatriceBjokoDesignSystem_db85ea;
function LiquidReveal({
  tone = 'driftwave'
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const pts = Array.from({
      length: 6
    }, () => ({
      x: -999,
      y: -999
    }));
    let tx = -999,
      ty = -999,
      energy = 0,
      raf;
    const mv = e => {
      const r = ref.current.getBoundingClientRect();
      const nx = e.clientX - r.left,
        ny = e.clientY - r.top;
      energy = Math.min(1, energy + Math.hypot(nx - tx, ny - ty) / 120);
      tx = nx;
      ty = ny;
    };
    window.addEventListener('pointermove', mv);
    const tick = () => {
      energy *= .965;
      pts.forEach((p, i) => {
        const k = .28 - i * .04;
        const lead = i ? pts[i - 1] : {
          x: tx,
          y: ty
        };
        p.x += (lead.x - p.x) * k;
        p.y += (lead.y - p.y) * k;
      });
      const r0 = 40 + energy * 150;
      const m = pts.map((p, i) => 'radial-gradient(circle ' + Math.max(8, r0 * (1 - i * .13)).toFixed(0) + 'px at ' + p.x.toFixed(0) + 'px ' + p.y.toFixed(0) + 'px,#000 35%,transparent 100%)').join(',');
      if (ref.current) {
        ref.current.style.webkitMaskImage = m;
        ref.current.style.maskImage = m;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', mv);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "kit-liquid"
  }, /*#__PURE__*/React.createElement(PV_H, {
    tone: tone
  }));
}
const ORBIT_ITEMS = [{
  tone: 'noor',
  w: 150,
  h: 110
}, {
  tone: 'driftwave',
  w: 120,
  h: 160,
  jitter: .2,
  r: .08
}, {
  tone: 'verde',
  w: 170,
  h: 110,
  jitter: -.1,
  dy: -30
}, {
  tone: 'kodo',
  w: 110,
  h: 80,
  r: -.1
}, {
  tone: 'papermoon',
  w: 130,
  h: 170,
  jitter: .15,
  dy: 20
}, {
  tone: 'lumen',
  w: 180,
  h: 120,
  r: .12
}, {
  tone: 'noor',
  w: 100,
  h: 130,
  jitter: -.2,
  dy: -20
}, {
  tone: 'driftwave',
  w: 160,
  h: 100,
  r: -.06
}, {
  tone: 'verde',
  w: 110,
  h: 140,
  jitter: .1
}, {
  tone: 'kodo',
  w: 140,
  h: 100,
  dy: 30
}];
function HomeScreen({
  entering,
  onEnter,
  onChange,
  index,
  vw,
  vh
}) {
  const faces = React.useMemo(() => window.BB_CUBE_FACES(), []);
  const mobile = vw < 768;
  const size = Math.round(mobile ? Math.min(vw * .74, vh * .42) : Math.min(vh * .5, vw * .4));
  const items = mobile ? ORBIT_ITEMS.slice(0, 6).map(i => ({
    ...i,
    w: i.w * .6,
    h: i.h * .6
  })) : ORBIT_ITEMS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GB_H, {
    floor: true,
    glows: [{
      x: '18%',
      y: '28%',
      size: 260,
      color: 'var(--paper-50)',
      opacity: .18
    }, {
      x: '84%',
      y: '64%',
      size: 220,
      opacity: .28
    }],
    vignette: false
  }), !mobile && /*#__PURE__*/React.createElement(LiquidReveal, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Orbit_H, {
    items: items,
    rx: mobile ? vw * .5 : Math.min(vw * .4, 660),
    ry: mobile ? vh * .26 : vh * .36,
    pivot: 10,
    speed: .045
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-center",
    style: {
      marginTop: -size * .06
    }
  }, /*#__PURE__*/React.createElement(Cube_H, {
    size: size,
    faces: faces,
    top: /*#__PURE__*/React.createElement(TopFace, null),
    bottom: /*#__PURE__*/React.createElement(TopFace, null),
    index: index,
    entering: entering,
    onChange: onChange,
    onEnter: f => onEnter(f)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 180,
      background: 'linear-gradient(var(--bg),transparent)',
      pointerEvents: 'none',
      zIndex: 20
    }
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/InfoScreens.jsx
try { (() => {
const {
  ProjectVisual: PV_A,
  PillButton: Pill_A,
  Tag: Tag_A,
  GridBackdrop: GB_A,
  MetaLine: Meta_A
} = window.BeatriceBjokoDesignSystem_db85ea;
function AboutScreen() {
  const me = window.BB_ME;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GB_A, {
    glows: [{
      x: '72%',
      y: '24%',
      size: 300,
      color: 'var(--paper-50)',
      opacity: .14
    }, {
      x: '28%',
      y: '70%',
      size: 200,
      opacity: .22
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll",
    "data-cursor": "Scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-portrait"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-portrait__img"
  }, /*#__PURE__*/React.createElement(PV_A, {
    tone: "portrait",
    halftone: true
  })), /*#__PURE__*/React.createElement("span", {
    className: "bb-signature"
  }, "Beatrice"), /*#__PURE__*/React.createElement("span", {
    className: "bb-pixel",
    style: {
      position: 'absolute',
      right: -24,
      top: '38%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bb-pixel",
    style: {
      position: 'absolute',
      right: 30,
      top: '62%',
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(Meta_A, null))), /*#__PURE__*/React.createElement(Pill_A, {
    icon: "download",
    href: "#"
  }, "Download CV")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "bb-statement",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-line",
    style: {
      '--i': 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "I\u2019m Beatrice, a UX/UI designer who also writes the code.")), /*#__PURE__*/React.createElement("span", {
    className: "kit-line dim",
    style: {
      '--i': 2
    }
  }, /*#__PURE__*/React.createElement("span", null, "Based in Antwerp, I turn research into calm interfaces, then build them down to the last easing curve."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, "01 \u2014 Skills"), /*#__PURE__*/React.createElement("div", {
    className: "kit-skills"
  }, me.skills.map(s => /*#__PURE__*/React.createElement(Tag_A, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)',
      display: 'block',
      marginBottom: 16
    }
  }, "02 \u2014 Experience"), me.experience.map(([y, c, r]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    className: "kit-xp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, y), /*#__PURE__*/React.createElement("span", {
    className: "bb-h3"
  }, c), /*#__PURE__*/React.createElement("span", {
    className: "bb-body",
    style: {
      color: 'var(--text-muted)'
    }
  }, r))))))));
}
function ContactScreen() {
  const me = window.BB_ME;
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(me.email);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GB_A, {
    floor: true,
    glows: [{
      x: '50%',
      y: '40%',
      size: 420,
      opacity: .16
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 var(--frame-inset)',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Say hello \u2014 I reply within two working days"), /*#__PURE__*/React.createElement("a", {
    className: "kit-email",
    href: 'mailto:' + me.email,
    "data-cursor": "Write me"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-line"
  }, /*#__PURE__*/React.createElement("span", null, me.email))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Pill_A, {
    variant: "paper",
    icon: copied ? null : 'arrow-right',
    onClick: copy
  }, copied ? 'Copied ✓' : 'Copy email'), /*#__PURE__*/React.createElement(Pill_A, {
    variant: "glass",
    icon: "arrow-up-right",
    href: "#"
  }, "Book a call")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, me.socials.map(([n, h], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "bb-label",
    style: {
      color: 'var(--text-dim)'
    }
  }, "/"), /*#__PURE__*/React.createElement("a", {
    className: "bb-label",
    href: h
  }, n)))))));
}
Object.assign(window, {
  AboutScreen,
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/InfoScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Loader.jsx
try { (() => {
const {
  MetaLine: Meta_L,
  Counter: Counter_L,
  GridBackdrop: GB_L
} = window.BeatriceBjokoDesignSystem_db85ea;
const S = 120,
  OX = 46,
  OY = -38;
const F = [[-S, -S], [S, -S], [S, S], [-S, S]],
  B = F.map(([x, y]) => [x + OX, y + OY]);
const EDGES = [[F[0], F[1]], [B[0], B[1]], [F[1], F[2]], [B[1], B[2]], [F[2], F[3]], [F[0], B[0]], [F[1], B[1]], [F[2], B[2]], [F[3], B[3]], [B[2], B[3]], [F[3], F[0]], [B[3], B[0]]];
function blobPoly(t, r) {
  const n = 56,
    pts = [];
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const k = 1 + .18 * Math.sin(a * 3 + t * 2.1) + .1 * Math.sin(a * 5 - t * 3.3) + .07 * Math.sin(a * 9 + t * 5);
    pts.push((50 + Math.cos(a) * r * k * .62).toFixed(2) + '% ' + (50 + Math.sin(a) * r * k).toFixed(2) + '%');
  }
  return 'polygon(' + pts.join(',') + ')';
}
function Loader({
  onDone,
  vw
}) {
  const [pct, setPct] = React.useState(0);
  const [phase, setPhase] = React.useState('count'); // count → blob → collapse → done
  const [letters, setLetters] = React.useState(0);
  const blobRef = React.useRef([]);
  const role = window.BB_ME.role;
  React.useEffect(() => {
    let p = 0,
      t;
    const step = () => {
      const burst = Math.random() < .2 ? 9 + Math.random() * 12 : 1 + Math.random() * 4;
      p = Math.min(100, p + burst);
      setPct(p);
      if (p >= 100) {
        t = setTimeout(() => setPhase('blob'), 220);
        return;
      }
      t = setTimeout(step, 40 + Math.random() * (Math.random() < .15 ? 260 : 70));
    };
    t = setTimeout(step, 350);
    return () => clearTimeout(t);
  }, []);
  React.useEffect(() => {
    if (phase !== 'blob') return;
    let raf,
      t0 = performance.now();
    const tick = now => {
      const t = (now - t0) / 1000;
      const r = Math.min(95, 4 + Math.pow(Math.min(1, t / 1.3), 1.6) * 95);
      const cp = blobPoly(t, r);
      blobRef.current.forEach(el => el && (el.style.clipPath = cp));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    let i = 0;
    const lt = setInterval(() => {
      i++;
      setLetters(i);
      if (i >= role.length) clearInterval(lt);
    }, 28);
    const c = setTimeout(() => setPhase('collapse'), 1700);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(lt);
      clearTimeout(c);
    };
  }, [phase]);
  React.useEffect(() => {
    if (phase !== 'collapse') return;
    const d = setTimeout(() => {
      setPhase('done');
      onDone();
    }, 750);
    return () => clearTimeout(d);
  }, [phase]);
  const name = 'Beatrice Bjoko';
  const showPaper = phase === 'blob' || phase === 'collapse';
  const collapse = phase === 'collapse';
  const nameStyle = collapse ? {
    transform: 'translateY(-55%) scale(.12)',
    opacity: 0,
    filter: 'blur(4px)'
  } : {};
  const skip = () => {
    setPhase('done');
    onDone();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'kit-loader' + (phase === 'done' ? ' kit-loader--done' : ''),
    onClick: skip,
    "data-cursor": "Skip"
  }, /*#__PURE__*/React.createElement(GB_L, {
    vignette: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "bb-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__tl"
  }, /*#__PURE__*/React.createElement(Meta_L, null)), /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__tr"
  }, /*#__PURE__*/React.createElement(Meta_L, {
    time: false,
    coords: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__bl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Loading portfolio \u2014 2026 edition")), /*#__PURE__*/React.createElement("div", {
    className: "bb-frame__slot bb-frame__br"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Click to skip"))), /*#__PURE__*/React.createElement("svg", {
    className: "kit-loader__wire",
    width: "420",
    height: "420",
    viewBox: "-210 -210 420 420",
    style: {
      opacity: showPaper ? 0 : 1
    }
  }, EDGES.map(([a, b], i) => {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const seg = Math.max(0, Math.min(1, pct / 100 * 12 - i));
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: a[0],
      y1: a[1],
      x2: b[0],
      y2: b[1],
      stroke: "var(--paper-50)",
      strokeWidth: "1",
      strokeDasharray: len,
      strokeDashoffset: len * (1 - seg),
      opacity: i % 2 ? .55 : .9
    });
  }), F.concat(B).map(([x, y], i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x + 6,
    y: y - 6,
    fill: "var(--text-muted)",
    fontFamily: "Geist Mono",
    fontSize: "9"
  }, pct > (i + 1) * 11 ? 'P' + String(i).padStart(2, '0') : ''))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--frame-inset)',
      bottom: 72,
      opacity: showPaper ? 0 : 1,
      transition: 'opacity .2s'
    }
  }, /*#__PURE__*/React.createElement(Counter_L, {
    current: pct,
    percent: true,
    size: "xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-loader__paper",
    style: {
      opacity: showPaper ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-loader__name",
    style: {
      color: 'var(--ink-950)',
      ...nameStyle
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    ref: el => blobRef.current[0] = el,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--ink-1000)',
      clipPath: 'polygon(50% 50%,50% 50%,50% 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: el => blobRef.current[1] = el,
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: 'polygon(50% 50%,50% 50%,50% 50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-loader__name kit-loader__foot",
    style: nameStyle
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "kit-loader__role bb-label",
    style: {
      fontSize: 14,
      opacity: collapse ? 0 : 1,
      transition: 'opacity .3s',
      mixBlendMode: 'difference',
      color: 'var(--paper-50)'
    }
  }, role.split('').map((ch, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i < letters ? 'on' : ''
  }, ch)))));
}
Object.assign(window, {
  Loader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Loader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectsScreen.jsx
try { (() => {
const {
  ProjectCard: PC_P,
  GlassToggle: GT_P,
  Counter: Counter_P,
  GridBackdrop: GB_P,
  ProjectVisual: PV_P,
  Icon: Icon_P
} = window.BeatriceBjokoDesignSystem_db85ea;
function ArcView({
  projects,
  onOpen,
  offset,
  setOffset,
  vw
}) {
  const mobile = vw < 768;
  const w = mobile ? Math.min(300, vw * .78) : Math.min(520, vw * .36),
    h = w * .66;
  const R = mobile ? 700 : 1350,
    step = w * 1.1 / R * 180 / Math.PI;
  const drag = React.useRef(null);
  const snapT = React.useRef();
  const clamp = v => Math.max(0, Math.min(projects.length - 1, v));
  const nudge = v => {
    setOffset(o => clamp(o + v));
    clearTimeout(snapT.current);
    snapT.current = setTimeout(() => setOffset(o => Math.round(o)), 220);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    },
    "data-cursor": "Drag",
    onWheel: e => nudge((e.deltaY + e.deltaX) / 500),
    onPointerDown: e => {
      drag.current = {
        x: e.clientX,
        o: offset,
        moved: 0
      };
    },
    onPointerMove: e => {
      const d = drag.current;
      if (!d) return;
      const dx = e.clientX - d.x;
      d.moved = Math.max(d.moved, Math.abs(dx));
      if (d.moved > 4) setOffset(clamp(d.o - dx / (mobile ? 220 : 380)));
    },
    onPointerUp: () => {
      const d = drag.current;
      drag.current = null;
      if (d && d.moved > 4) setOffset(o => Math.round(o));
    },
    onClickCapture: e => {
      if (drag.current && drag.current.moved > 4) e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-arc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-arc__ring",
    style: {
      transform: 'translateZ(' + R + 'px) rotateY(' + offset * step + 'deg)'
    }
  }, projects.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "kit-arc__item",
    style: {
      transform: 'rotateY(' + -i * step + 'deg) translateZ(' + -R + 'px) translate(' + -w / 2 + 'px,' + -h / 2 + 'px)'
    }
  }, /*#__PURE__*/React.createElement(PC_P, {
    title: p.title,
    subtitle: p.type + ' · ' + p.year,
    index: String(p.n).padStart(2, '0') + ' / 06',
    tone: p.tone,
    width: w,
    height: h,
    bend: mobile ? 20 : 26,
    slices: mobile ? 10 : 14,
    onOpen: () => onOpen(p)
  }))))));
}
function ListView({
  projects,
  onOpen
}) {
  const [hov, setHov] = React.useState(null);
  const [pos, setPos] = React.useState({
    x: 0,
    y: 0
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-list",
    onPointerMove: e => setPos({
      x: e.clientX,
      y: e.clientY
    })
  }, projects.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "kit-list__row",
    onMouseEnter: () => setHov(p),
    onMouseLeave: () => setHov(null),
    onClick: () => onOpen(p),
    "data-cursor": "View",
    role: "button",
    tabIndex: 0,
    onKeyDown: e => e.key === 'Enter' && onOpen(p)
  }, /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      color: 'var(--text-muted)'
    }
  }, String(p.n).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "kit-list__t"
  }, p.title), /*#__PURE__*/React.createElement("span", {
    className: "bb-small kit-hide-m",
    style: {
      color: 'var(--text-muted)'
    }
  }, p.type), /*#__PURE__*/React.createElement("span", {
    className: "bb-mono kit-hide-m",
    style: {
      color: 'var(--text-muted)'
    }
  }, p.role), /*#__PURE__*/React.createElement("span", {
    className: "bb-mono",
    style: {
      textAlign: 'right'
    }
  }, p.year))), /*#__PURE__*/React.createElement("div", {
    className: 'kit-preview' + (hov ? ' kit-preview--on' : ''),
    style: {
      left: pos.x + 150,
      top: pos.y
    }
  }, hov && /*#__PURE__*/React.createElement(PV_P, {
    tone: hov.tone,
    label: 'IMG · ' + hov.title
  })));
}
function ProjectsScreen({
  onOpen,
  vw
}) {
  const projects = window.BB_PROJECTS;
  const [view, setView] = React.useState('Arc');
  const [offset, setOffset] = React.useState(0);
  const cur = Math.round(offset) + 1;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GB_P, {
    floor: view === 'Arc',
    vignette: view === 'Arc'
  }), view === 'Arc' ? /*#__PURE__*/React.createElement(ArcView, {
    projects: projects,
    onOpen: onOpen,
    offset: offset,
    setOffset: setOffset,
    vw: vw
  }) : /*#__PURE__*/React.createElement(ListView, {
    projects: projects,
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(var(--frame-inset) - 6px)',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 45
    }
  }, /*#__PURE__*/React.createElement(GT_P, {
    options: ['Arc', 'List'],
    value: view,
    onChange: setView,
    label: "Projects view",
    size: vw < 768 ? 'sm' : 'md'
  })), view === 'Arc' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: vw < 768 ? 86 : 'var(--frame-inset)',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 45,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Counter_P, {
    current: cur,
    total: 6,
    label: "selected works"
  })));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
window.BB_PROJECTS = [{
  id: 'lumen',
  n: 1,
  title: 'Lumen',
  type: 'Banking app redesign',
  role: 'UX/UI Design',
  year: 2026,
  tone: 'lumen',
  tools: ['Figma', 'Protopie'],
  description: 'A calmer banking app for people who dread opening theirs. Fewer numbers on screen, clearer next steps, and onboarding cut from nine screens to three.',
  process: [['Research', '14 interviews and a diary study showed people check balances out of anxiety, not curiosity. The home screen now answers one question: am I okay this week?'], ['Wireframes', 'Three directions tested on paper, then in grey boxes. The card-stack idea lost; a single weekly summary won by a wide margin.'], ['Iterations', 'Four rounds of usability tests. Task time for "send money to a friend" dropped from 48s to 19s.'], ['Final UI', 'Soft teal, big type, almost no charts. Built as a Figma library with 140 components handed over to the in-house team.']]
}, {
  id: 'noor',
  n: 2,
  title: 'Atelier Noor',
  type: 'E-commerce for a ceramics studio',
  role: 'UI Design & Front-end',
  year: 2025,
  tone: 'noor',
  tools: ['Figma', 'React', 'Shopify'],
  description: 'An online shop for a two-person ceramics studio in Ghent. Slow and tactile to browse, quick to check out.',
  process: [['Research', 'Studio visits and a review of 30 craft shops online.'], ['Wireframes', 'Product pages built around one large photo and the maker’s note.'], ['Iterations', 'Checkout reduced to a single page.'], ['Final UI', 'Headless Shopify front-end in React, 98 Lighthouse score.']]
}, {
  id: 'driftwave',
  n: 3,
  title: 'Driftwave',
  type: 'Music festival website, WebGL',
  role: 'Front-end Development',
  year: 2025,
  tone: 'driftwave',
  tools: ['Three.js', 'GSAP', 'React'],
  description: 'A festival site where the line-up floats on a shader sea that reacts to the music. Built to survive 40k visitors at ticket launch.',
  process: [['Research', 'Audit of last year’s site and ticket funnel.'], ['Wireframes', 'Mobile-first line-up and timetable.'], ['Iterations', 'Shader tuned to hold 60fps on mid-range phones.'], ['Final UI', 'Three.js scene, GSAP choreography, static fallback for reduced motion.']]
}, {
  id: 'verde',
  n: 4,
  title: 'Verde Mobility',
  type: 'Bike-sharing app, research + prototype',
  role: 'UX Research & UI',
  year: 2025,
  tone: 'verde',
  tools: ['Figma', 'Maze'],
  description: 'Field research with commuters in Antwerp and a clickable prototype for unlocking a bike in under ten seconds.',
  process: [['Research', 'Street intercepts with 40 riders.'], ['Wireframes', 'Map-first versus scan-first.'], ['Iterations', 'Scan-first won.'], ['Final UI', 'Prototype tested with 18 users.']]
}, {
  id: 'kodo',
  n: 5,
  title: 'Kōdo',
  type: 'Design system for a SaaS dashboard',
  role: 'Design Systems',
  year: 2024,
  tone: 'kodo',
  tools: ['Figma', 'Storybook', 'React'],
  description: 'Tokens, 60 components and the documentation to keep a 12-person product team consistent.',
  process: [['Research', 'Inventory of 400 screens.'], ['Wireframes', 'Token architecture first.'], ['Iterations', 'Three releases in six months.'], ['Final UI', 'Figma library + Storybook in sync.']]
}, {
  id: 'papermoon',
  n: 6,
  title: 'Paper Moon',
  type: 'Editorial magazine site',
  role: 'UI Design & Front-end',
  year: 2024,
  tone: 'papermoon',
  tools: ['Figma', 'Astro', 'GSAP'],
  description: 'A long-read magazine that feels like print without pretending to be it. Big type, quiet motion, very fast pages.',
  process: [['Research', 'Reading habits survey with 300 subscribers.'], ['Wireframes', 'Article template first.'], ['Iterations', 'Type scale reworked twice.'], ['Final UI', 'Astro site, page weight under 200kb.']]
}];
window.BB_ME = {
  name: 'Beatrice Bjoko',
  role: 'UX/UI & Front-end Developer',
  city: 'Antwerp, Belgium',
  email: 'hello@beatricebjoko.com',
  socials: [['LinkedIn', '#'], ['GitHub', '#'], ['Dribbble', '#'], ['Behance', '#']],
  skills: ['User research', 'Interaction design', 'Design systems', 'Prototyping', 'React', 'Three.js / R3F', 'GSAP', 'Accessibility'],
  experience: [['2024 — now', 'Studio Halvar', 'UX/UI Designer & Front-end'], ['2022 — 2024', 'Freelance', 'Designer / Developer'], ['2021 — 2022', 'Nordlicht Agency', 'Junior Front-end Developer'], ['2020', 'KASK Ghent', 'BA Interaction Design']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.GlassToggle = __ds_scope.GlassToggle;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PillButton = __ds_scope.PillButton;

__ds_ns.RoundButton = __ds_scope.RoundButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Availability = __ds_scope.Availability;

__ds_ns.Counter = __ds_scope.Counter;

__ds_ns.MetaLine = __ds_scope.MetaLine;

__ds_ns.CornerFrame = __ds_scope.CornerFrame;

__ds_ns.Cursor = __ds_scope.Cursor;

__ds_ns.GridBackdrop = __ds_scope.GridBackdrop;

__ds_ns.MenuButton = __ds_scope.MenuButton;

__ds_ns.MobileMenu = __ds_scope.MobileMenu;

__ds_ns.SlashNav = __ds_scope.SlashNav;

__ds_ns.Cube = __ds_scope.Cube;

__ds_ns.Orbit = __ds_scope.Orbit;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ProjectPanel = __ds_scope.ProjectPanel;

__ds_ns.ProjectVisual = __ds_scope.ProjectVisual;

})();
