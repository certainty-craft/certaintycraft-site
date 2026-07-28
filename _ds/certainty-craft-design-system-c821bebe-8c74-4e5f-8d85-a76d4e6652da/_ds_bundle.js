/* @ds-bundle: {"format":4,"namespace":"CertaintyCraftDesignSystem_c821be","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"88e107fe6878","components/buttons/IconButton.jsx":"ce91edf8b485","components/core/Avatar.jsx":"2edcef647e93","components/core/Badge.jsx":"ac2576c53737","components/core/Card.jsx":"1e07655a624c","components/forms/Checkbox.jsx":"4578de4557de","components/forms/Input.jsx":"16fe627bd90f","components/forms/Switch.jsx":"93d8245825b2","components/navigation/Tabs.jsx":"62daf5f14e04","ui_kits/app/AppShell.jsx":"df5e695a048b","ui_kits/app/HomeScreen.jsx":"0817d2dfad3e","ui_kits/app/InsightsScreen.jsx":"ab64c2a2ee5d","ui_kits/app/MeetingRoom.jsx":"ed70a1efbec1","ui_kits/marketing-site/cc-script.js":"bd29b76180bc","ui_kits/marketing-site/cc-tweaks.jsx":"003a88134fbc","ui_kits/marketing-site/image-slot.js":"9309434cb09c","ui_kits/marketing-site/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CertaintyCraftDesignSystem_c821be = window.CertaintyCraftDesignSystem_c821be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useButtonStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-btn {
    --_bg: var(--fill-brand); --_fg: var(--text-on-brand); --_bd: transparent;
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
    font-family: var(--font-heading); font-weight: 600; line-height: 1;
    border: 1.5px solid var(--_bd); background: var(--_bg); color: var(--_fg);
    border-radius: var(--radius-pill); cursor: pointer; white-space: nowrap;
    transition: transform var(--dur-fast) var(--ease-out),
                box-shadow var(--dur-base) var(--ease-out),
                background var(--dur-fast) var(--ease-out),
                border-color var(--dur-fast) var(--ease-out);
    text-decoration: none; user-select: none;
  }
  .mp-btn:hover { transform: translateY(-1px); }
  .mp-btn:active { transform: translateY(0) scale(0.98); }
  .mp-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
  .mp-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }

  .mp-btn--sm { font-size: 13px; padding: 8px 16px; }
  .mp-btn--md { font-size: 15px; padding: 11px 22px; }
  .mp-btn--lg { font-size: 17px; padding: 15px 30px; }

  .mp-btn--primary { --_bg: var(--fill-brand); --_fg: var(--text-on-brand); }
  .mp-btn--primary:hover { --_bg: var(--fill-brand-hover); box-shadow: var(--glow-teal); }
  .mp-btn--primary:active { --_bg: var(--fill-brand-press); }

  .mp-btn--presence { --_bg: var(--presence); --_fg: #fff; }
  .mp-btn--presence:hover { --_bg: var(--blue-600); box-shadow: var(--glow-presence); }

  .mp-btn--secondary { --_bg: transparent; --_fg: var(--brand-deep); --_bd: var(--border-strong); }
  .mp-btn--secondary:hover { --_bd: var(--brand); --_fg: var(--brand); }

  .mp-btn--ghost { --_bg: transparent; --_fg: var(--text-body); --_bd: transparent; }
  .mp-btn--ghost:hover { --_bg: var(--fill-subtle); --_fg: var(--brand-deep); }

  .mp-btn--clay { --_bg: var(--brick-600); --_fg: #fff; }
  .mp-btn--clay:hover { --_bg: var(--brick-500); }
  `;
  const el = document.createElement('style');
  el.id = 'mp-btn-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft,
  iconRight,
  className = '',
  children,
  ...props
}) {
  useButtonStyles();
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `mp-btn mp-btn--${variant} mp-btn--${size} ${className}`
  }, props), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useIconButtonStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-iconbtn {
    display: inline-grid; place-items: center; cursor: pointer;
    border: 1.5px solid transparent; background: transparent; color: var(--text-body);
    border-radius: var(--radius-pill);
    transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out),
                transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .mp-iconbtn:hover { background: var(--fill-subtle); color: var(--brand-deep); }
  .mp-iconbtn:active { transform: scale(0.92); }
  .mp-iconbtn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
  .mp-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; }
  .mp-iconbtn--sm { width: 32px; height: 32px; }
  .mp-iconbtn--md { width: 40px; height: 40px; }
  .mp-iconbtn--lg { width: 48px; height: 48px; }
  .mp-iconbtn--solid { background: var(--fill-brand); color: var(--text-on-brand); }
  .mp-iconbtn--solid:hover { background: var(--fill-brand-hover); color: #fff; }
  .mp-iconbtn--outline { border-color: var(--border-strong); }
  .mp-iconbtn--outline:hover { border-color: var(--brand); background: transparent; }
  `;
  const el = document.createElement('style');
  el.id = 'mp-iconbtn-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...props
}) {
  useIconButtonStyles();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `mp-iconbtn mp-iconbtn--${variant} mp-iconbtn--${size} ${className}`,
    "aria-label": label,
    title: label
  }, props), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useAvatarStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-avatar {
    display: inline-grid; place-items: center; border-radius: 50%; overflow: hidden;
    font-family: var(--font-heading); font-weight: 600; color: #fff; flex: none;
    background: var(--teal-600); position: relative; user-select: none;
  }
  .mp-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .mp-avatar--sm { width: 28px; height: 28px; font-size: 11px; }
  .mp-avatar--md { width: 40px; height: 40px; font-size: 15px; }
  .mp-avatar--lg { width: 56px; height: 56px; font-size: 20px; }
  .mp-avatar--ring { box-shadow: 0 0 0 2px var(--surface), 0 0 0 3.5px var(--brand); }
  .mp-avatar__status {
    position: absolute; right: -1px; bottom: -1px; width: 30%; height: 30%;
    border-radius: 50%; border: 2px solid var(--surface);
  }
  .mp-avatar__status--online { background: var(--success); }
  .mp-avatar__status--away { background: var(--amber-500); }
  .mp-avatar__status--busy { background: var(--danger); }
  `;
  const el = document.createElement('style');
  el.id = 'mp-avatar-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
const TONES = ['#0d7f8c', '#1457d6', '#88150a', '#b9831a', '#06505f'];
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 'md',
  status,
  ring = false,
  className = '',
  ...props
}) {
  useAvatarStyles();
  const bg = TONES[(name.charCodeAt(0) || 0) % TONES.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `mp-avatar mp-avatar--${size} ${ring ? 'mp-avatar--ring' : ''} ${className}`,
    style: !src ? {
      background: bg
    } : undefined
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name), status && /*#__PURE__*/React.createElement("span", {
    className: `mp-avatar__status mp-avatar__status--${status}`
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useBadgeStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-badge {
    display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono);
    font-size: 11px; font-weight: 500; letter-spacing: 0.04em; line-height: 1;
    padding: 5px 10px; border-radius: var(--radius-pill); white-space: nowrap;
  }
  .mp-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  .mp-badge--neutral { background: var(--ink-100); color: var(--ink-700); }
  .mp-badge--brand { background: var(--teal-100); color: var(--teal-700); }
  .mp-badge--presence { background: var(--blue-100); color: var(--blue-700); }
  .mp-badge--success { background: var(--success-bg); color: var(--success); }
  .mp-badge--warning { background: var(--warning-bg); color: var(--warning); }
  .mp-badge--danger { background: var(--danger-bg); color: var(--danger); }
  .mp-badge--amber { background: var(--amber-100); color: var(--amber-600); }
  .mp-badge--solid { background: var(--brand); color: #fff; }
  `;
  const el = document.createElement('style');
  el.id = 'mp-badge-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Badge({
  tone = 'neutral',
  dot = false,
  className = '',
  children,
  ...props
}) {
  useBadgeStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `mp-badge mp-badge--${tone} ${className}`
  }, props), dot && /*#__PURE__*/React.createElement("span", {
    className: "mp-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useCardStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-card {
    background: var(--surface); border: 1px solid var(--border-soft);
    border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);
    padding: var(--space-6); transition: box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
  }
  .mp-card--glass {
    background: var(--glass-strong); border: 1px solid var(--glass-edge);
    backdrop-filter: blur(var(--blur-md)); -webkit-backdrop-filter: blur(var(--blur-md));
    box-shadow: var(--shadow-md);
  }
  .mp-card--cream { background: var(--surface-cream); border-color: transparent; }
  .mp-card--mint { background: var(--surface-mint); border-color: transparent; }
  .mp-card--inverse { background: var(--surface-inverse); border-color: transparent; color: var(--text-on-dark); }
  .mp-card--flat { box-shadow: none; }
  .mp-card--interactive { cursor: pointer; }
  .mp-card--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); border-color: var(--border-brand); }
  .mp-card--pad-sm { padding: var(--space-5); }
  .mp-card--pad-lg { padding: var(--space-8); }
  `;
  const el = document.createElement('style');
  el.id = 'mp-card-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Card({
  surface = 'default',
  interactive = false,
  flat = false,
  pad = 'md',
  as = 'div',
  className = '',
  children,
  ...props
}) {
  useCardStyles();
  const Tag = as;
  const surfaceClass = surface !== 'default' ? `mp-card--${surface}` : '';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `mp-card ${surfaceClass} ${interactive ? 'mp-card--interactive' : ''} ${flat ? 'mp-card--flat' : ''} ${pad !== 'md' ? 'mp-card--pad-' + pad : ''} ${className}`
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useCheckboxStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-check { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body); font-size: 14px; color: var(--text-body); user-select: none; }
  .mp-check input { position: absolute; opacity: 0; width: 0; height: 0; }
  .mp-check__box {
    width: 20px; height: 20px; border-radius: var(--radius-xs); border: 1.5px solid var(--border-strong);
    background: var(--surface); display: grid; place-items: center; flex: none;
    transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
  }
  .mp-check__box svg { width: 13px; height: 13px; stroke: #fff; stroke-width: 3.5; fill: none; opacity: 0; transition: opacity var(--dur-fast) var(--ease-out); }
  .mp-check input:checked + .mp-check__box { background: var(--brand); border-color: var(--brand); }
  .mp-check input:checked + .mp-check__box svg { opacity: 1; }
  .mp-check input:focus-visible + .mp-check__box { box-shadow: 0 0 0 3px var(--focus-ring); }
  .mp-check input:disabled + .mp-check__box { opacity: 0.45; }
  `;
  const el = document.createElement('style');
  el.id = 'mp-check-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  className = '',
  ...props
}) {
  useCheckboxStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `mp-check ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "mp-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3.5,8.5 6.5,11.5 12.5,4.5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useInputStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
  .mp-field__label { font-family: var(--font-heading); font-weight: 600; font-size: 13px; color: var(--text-strong); }
  .mp-field__hint { font-size: 12px; color: var(--text-muted); }
  .mp-field__hint--err { color: var(--danger); }
  .mp-input-wrap { position: relative; display: flex; align-items: center; }
  .mp-input-wrap__icon { position: absolute; left: 14px; display: grid; place-items: center; color: var(--text-faint); pointer-events: none; }
  .mp-input-wrap__icon [data-lucide] { width: 17px; height: 17px; }
  .mp-input {
    width: 100%; font-family: var(--font-body); font-size: 15px; color: var(--text-strong);
    background: var(--surface); border: 1.5px solid var(--border); border-radius: var(--radius-md);
    padding: 11px 14px; transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out);
  }
  .mp-input--with-icon { padding-left: 40px; }
  .mp-input::placeholder { color: var(--text-faint); }
  .mp-input:hover { border-color: var(--border-strong); }
  .mp-input:focus { outline: none; border-color: var(--presence); box-shadow: 0 0 0 3px var(--focus-ring); background: var(--white); }
  .mp-input[aria-invalid="true"] { border-color: var(--danger); }
  .mp-input[aria-invalid="true"]:focus { box-shadow: 0 0 0 3px var(--danger-bg); }
  .mp-input[disabled] { opacity: 0.55; cursor: not-allowed; background: var(--surface-sunken); }
  `;
  const el = document.createElement('style');
  el.id = 'mp-input-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  icon,
  id,
  className = '',
  ...props
}) {
  useInputStyles();
  const fieldId = id || (label ? `mp-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "mp-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "mp-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mp-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "mp-input-wrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: `mp-input ${icon ? 'mp-input--with-icon' : ''} ${className}`,
    "aria-invalid": error ? 'true' : undefined
  }, props))), error ? /*#__PURE__*/React.createElement("span", {
    className: "mp-field__hint mp-field__hint--err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "mp-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useSwitchStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-switch { display: inline-flex; align-items: center; gap: 11px; cursor: pointer; font-family: var(--font-body); font-size: 14px; color: var(--text-body); user-select: none; }
  .mp-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
  .mp-switch__track {
    position: relative; width: 44px; height: 26px; border-radius: var(--radius-pill);
    background: var(--ink-300); transition: background var(--dur-base) var(--ease-out);
    flex: none;
  }
  .mp-switch__thumb {
    position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%;
    background: #fff; box-shadow: var(--shadow-sm);
    transition: transform var(--dur-base) var(--ease-spring);
  }
  .mp-switch input:checked + .mp-switch__track { background: var(--brand); }
  .mp-switch input:checked + .mp-switch__track .mp-switch__thumb { transform: translateX(18px); }
  .mp-switch input:focus-visible + .mp-switch__track { box-shadow: 0 0 0 3px var(--focus-ring); }
  .mp-switch input:disabled + .mp-switch__track { opacity: 0.45; }
  .mp-switch--disabled { cursor: not-allowed; }
  `;
  const el = document.createElement('style');
  el.id = 'mp-switch-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  className = '',
  ...props
}) {
  useSwitchStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `mp-switch ${disabled ? 'mp-switch--disabled' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "mp-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mp-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useTabsStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .mp-tabs { display: inline-flex; gap: 4px; padding: 4px; background: var(--ink-100); border-radius: var(--radius-pill); }
  .mp-tab {
    font-family: var(--font-heading); font-weight: 600; font-size: 14px; color: var(--text-muted);
    border: none; background: transparent; padding: 8px 18px; border-radius: var(--radius-pill);
    cursor: pointer; transition: color var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out);
    display: inline-flex; align-items: center; gap: 7px; white-space: nowrap;
  }
  .mp-tab:hover { color: var(--brand-deep); }
  .mp-tab[aria-selected="true"] { background: var(--surface); color: var(--brand-deep); box-shadow: var(--shadow-sm); }
  .mp-tab:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
  .mp-tabs--underline { background: transparent; padding: 0; gap: 4px; border-bottom: 1px solid var(--border); border-radius: 0; }
  .mp-tabs--underline .mp-tab { border-radius: 0; padding: 12px 16px; position: relative; }
  .mp-tabs--underline .mp-tab[aria-selected="true"] { background: transparent; box-shadow: none; }
  .mp-tabs--underline .mp-tab[aria-selected="true"]::after {
    content: ''; position: absolute; left: 12px; right: 12px; bottom: -1px; height: 2px; background: var(--brand); border-radius: 2px;
  }
  `;
  const el = document.createElement('style');
  el.id = 'mp-tabs-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'pill',
  className = '',
  ...props
}) {
  useTabsStyles();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `mp-tabs ${variant === 'underline' ? 'mp-tabs--underline' : ''} ${className}`,
    role: "tablist"
  }, props), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    "aria-selected": active === t.id,
    className: "mp-tab",
    onClick: () => select(t.id)
  }, t.icon, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
// AppShell — sidebar + frame for the meeting place. product.
// Exposes window.MPApp.{AppShell, Sidebar, Wordmark}
const DS_SHELL = (Object.entries(window).find(([k]) => /DesignSystem_/.test(k)) || [])[1] || {};
const {
  IconButton: ShellIconButton,
  Avatar: ShellAvatar,
  Badge: ShellBadge
} = DS_SHELL;
function Wordmark({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mp-wordmark",
    style: {
      fontSize: size,
      lineHeight: 1
    }
  }, "meet", /*#__PURE__*/React.createElement("span", {
    className: "spark"
  }, "i"), "ng pl", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "a"), "ce", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."));
}
const NAV = [{
  id: 'home',
  label: 'Home',
  icon: 'house'
}, {
  id: 'meetings',
  label: 'Meetings',
  icon: 'video'
}, {
  id: 'insights',
  label: 'Insights',
  icon: 'sparkles'
}, {
  id: 'library',
  label: 'Library',
  icon: 'library'
}];
function Sidebar({
  active = 'home',
  onNav
}) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("aside", {
    className: "mpapp-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpapp-sidebar__brand"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 20
  })), /*#__PURE__*/React.createElement("nav", {
    className: "mpapp-nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: `mpapp-navitem ${active === n.id ? 'is-active' : ''}`,
    onClick: () => onNav && onNav(n.id)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": n.icon
  }), /*#__PURE__*/React.createElement("span", null, n.label)))), /*#__PURE__*/React.createElement("div", {
    className: "mpapp-sidebar__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mpapp-navitem",
    onClick: () => onNav && onNav('settings')
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings"
  }), /*#__PURE__*/React.createElement("span", null, "Settings")), /*#__PURE__*/React.createElement("div", {
    className: "mpapp-userchip"
  }, /*#__PURE__*/React.createElement(ShellAvatar, {
    name: "Sorrel Succes",
    status: "online",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mpapp-userchip__txt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpapp-userchip__name"
  }, "Sorrel Succes"), /*#__PURE__*/React.createElement("div", {
    className: "mpapp-userchip__role"
  }, "CEO \xB7 Acme")))));
}
function AppShell({
  active,
  onNav,
  children,
  bare = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `mpapp-shell ${bare ? 'mpapp-shell--bare' : ''}`
  }, !bare && /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("main", {
    className: "mpapp-main"
  }, children));
}
Object.assign(window, {
  MPApp: {
    AppShell,
    Sidebar,
    Wordmark
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
// HomeScreen — dashboard: greeting, start/join hero with the orb, upcoming + recent insights.
// Exposes window.MPHome
const DS_HOME = (Object.entries(window).find(([k]) => /DesignSystem_/.test(k)) || [])[1] || {};
const {
  Button: HBtn,
  IconButton: HIcon,
  Card: HCard,
  Badge: HBadge,
  Avatar: HAvatar,
  Input: HInput
} = DS_HOME;
const UPCOMING = [{
  id: 1,
  title: 'Weekly product sync',
  time: '10:00',
  in: 'in 25 min',
  people: ['Sorrel Succes', 'Lee Park', 'Dae Kim', 'Mara V'],
  live: true
}, {
  id: 2,
  title: 'Design critique — VR rooms',
  time: '13:30',
  in: 'today',
  people: ['Dae Kim', 'Noa B', 'Sorrel Succes']
}, {
  id: 3,
  title: 'Investor update',
  time: '16:00',
  in: 'today',
  people: ['Sorrel Succes', 'Ravi T']
}];
const RECENT = [{
  id: 1,
  title: 'Q3 strategy offsite',
  when: 'Yesterday',
  goals: 4,
  mins: 72
}, {
  id: 2,
  title: 'New Realities — ep. 12',
  when: 'Mon',
  goals: 2,
  mins: 48
}];
function HomeScreen({
  onJoin
}) {
  const [code, setCode] = React.useState('');
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "mphome"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mphome__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mp-eyebrow"
  }, "tuesday \xB7 june 11"), /*#__PURE__*/React.createElement("h1", {
    className: "mphome__greet"
  }, "good morning, Sorrel")), /*#__PURE__*/React.createElement("div", {
    className: "mphome__topright"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search meetings, people, insights"
  })), /*#__PURE__*/React.createElement(HIcon, {
    label: "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "mphome__hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__heroglow"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/orb-glow.png",
    alt: "",
    className: "mphome__orb"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mphome__herotext"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mp-eyebrow",
    style: {
      color: 'var(--teal-600)'
    }
  }, "// your room is ready"), /*#__PURE__*/React.createElement("h2", {
    className: "mphome__herottl"
  }, "inspiration takes presence."), /*#__PURE__*/React.createElement("p", {
    className: "mphome__herosub"
  }, "Step into your VR room. meeting place listens, summarizes, and tracks your goals \u2014 so you leave inspired, not buried in notes."), /*#__PURE__*/React.createElement("div", {
    className: "mphome__heroactions"
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "presence",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "orbit"
    }),
    onClick: () => onJoin && onJoin()
  }, "Start a meeting"), /*#__PURE__*/React.createElement("div", {
    className: "mphome__join"
  }, /*#__PURE__*/React.createElement(HInput, {
    placeholder: "Enter room code",
    value: code,
    onChange: e => setCode(e.target.value),
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "hash"
    })
  }), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    size: "lg",
    onClick: () => onJoin && onJoin()
  }, "Join"))))), /*#__PURE__*/React.createElement("div", {
    className: "mphome__cols"
  }, /*#__PURE__*/React.createElement("section", {
    className: "mphome__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__colhead"
  }, /*#__PURE__*/React.createElement("h3", null, "Upcoming"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mphome__seeall"
  }, "View calendar")), /*#__PURE__*/React.createElement("div", {
    className: "mphome__list"
  }, UPCOMING.map(m => /*#__PURE__*/React.createElement(HCard, {
    key: m.id,
    surface: "default",
    interactive: true,
    pad: "sm",
    onClick: () => onJoin && onJoin()
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__meet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__meettime"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mphome__hh"
  }, m.time), /*#__PURE__*/React.createElement("span", {
    className: "mphome__in"
  }, m.in)), /*#__PURE__*/React.createElement("div", {
    className: "mphome__meetbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__meetttl"
  }, m.title, m.live && /*#__PURE__*/React.createElement(HBadge, {
    tone: "presence",
    dot: true
  }, "starting")), /*#__PURE__*/React.createElement("div", {
    className: "mphome__avs"
  }, m.people.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement(HAvatar, {
    key: i,
    name: p,
    size: "sm"
  })), m.people.length > 4 && /*#__PURE__*/React.createElement("span", {
    className: "mphome__more"
  }, "+", m.people.length - 4))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    className: "mphome__chev"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "mphome__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__colhead"
  }, /*#__PURE__*/React.createElement("h3", null, "Recent insights"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mphome__seeall"
  }, "All insights")), /*#__PURE__*/React.createElement("div", {
    className: "mphome__list"
  }, RECENT.map(r => /*#__PURE__*/React.createElement(HCard, {
    key: r.id,
    surface: "mint",
    interactive: true,
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__insrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mphome__insicon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__meetttl"
  }, r.title), /*#__PURE__*/React.createElement("div", {
    className: "mphome__insmeta"
  }, r.when, " \xB7 ", r.mins, " min \xB7 ", r.goals, " goals tracked")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    className: "mphome__chev"
  })))), /*#__PURE__*/React.createElement(HCard, {
    surface: "cream",
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__insrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mphome__insicon",
    style: {
      background: 'var(--amber-100)',
      color: 'var(--amber-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "headphones"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mphome__meetttl"
  }, "New Realities is recording"), /*#__PURE__*/React.createElement("div", {
    className: "mphome__insmeta"
  }, "Your long-form conversation series \xB7 live")), /*#__PURE__*/React.createElement(HBadge, {
    tone: "danger",
    dot: true
  }, "rec")))))));
}
Object.assign(window, {
  MPHome: {
    HomeScreen
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/InsightsScreen.jsx
try { (() => {
// InsightsScreen — post-meeting summary, action items, goals tracked. Uses DS Tabs.
// Exposes window.MPInsights
const DS_INS = (Object.entries(window).find(([k]) => /DesignSystem_/.test(k)) || [])[1] || {};
const {
  Tabs: ITabs,
  Card: ICard,
  Badge: IBadge,
  Avatar: IAvatar,
  Checkbox: ICheck,
  Button: IBtn
} = DS_INS;
const PEOPLE = ['Sorrel Succes', 'Lee Park', 'Dae Kim', 'Mara V', 'Noa B'];
const ACTIONS = [{
  who: 'Dae Kim',
  text: 'Finalize the frosted toolbar spec',
  done: true
}, {
  who: 'Lee Park',
  text: 'Restrict scene palette to presence-blue',
  done: false
}, {
  who: 'Mara V',
  text: 'Draft investor-update walkthrough',
  done: false
}];
const GOALS = [{
  text: 'Lock VR room layout',
  pct: 80,
  tone: 'presence'
}, {
  text: 'Ship insights side-panel',
  pct: 60,
  tone: 'brand'
}, {
  text: 'Prep investor update',
  pct: 30,
  tone: 'amber'
}];
const MOMENTS = [{
  t: '04:12',
  text: 'Frosted glass adopted for the floating toolbar'
}, {
  t: '21:48',
  text: 'Palette locked to a single saturated accent'
}, {
  t: '38:30',
  text: 'Investor-update walkthrough scoped'
}];
function InsightsScreen({
  onHome
}) {
  const [tab, setTab] = React.useState('summary');
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "mpins"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mpins__head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mpins__back",
    onClick: () => onHome && onHome()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  }), " Home"), /*#__PURE__*/React.createElement("div", {
    className: "mpins__headmain"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mp-eyebrow"
  }, "// meeting summary \xB7 auto-generated"), /*#__PURE__*/React.createElement("h1", {
    className: "mpins__title"
  }, "Weekly product sync"), /*#__PURE__*/React.createElement("div", {
    className: "mpins__submeta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar"
  }), " Jun 11"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock"
  }), " 42 min"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "users"
  }), " 5 present"))), /*#__PURE__*/React.createElement("div", {
    className: "mpins__headactions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpins__avs"
  }, PEOPLE.map((p, i) => /*#__PURE__*/React.createElement(IAvatar, {
    key: i,
    name: p,
    size: "sm"
  }))), /*#__PURE__*/React.createElement(IBtn, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share"
    })
  }, "Share"))), /*#__PURE__*/React.createElement("div", {
    className: "mpins__tabs"
  }, /*#__PURE__*/React.createElement(ITabs, {
    tabs: [{
      id: 'summary',
      label: 'Summary'
    }, {
      id: 'transcript',
      label: 'Transcript'
    }, {
      id: 'goals',
      label: 'Goals'
    }],
    value: tab,
    onChange: setTab,
    variant: "underline"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mpins__body"
  }, tab === 'summary' && /*#__PURE__*/React.createElement("div", {
    className: "mpins__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpins__main"
  }, /*#__PURE__*/React.createElement(ICard, {
    surface: "glass"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mpins__h"
  }, "The gist"), /*#__PURE__*/React.createElement("p", {
    className: "mpins__lead"
  }, "The team locked the VR room layout ahead of the investor update. Frosted glass was adopted for the floating toolbar, and the in-scene palette was restricted to a single saturated accent \u2014 presence-blue \u2014 to keep the room calm.")), /*#__PURE__*/React.createElement(ICard, null, /*#__PURE__*/React.createElement("h3", {
    className: "mpins__h"
  }, "Action items"), /*#__PURE__*/React.createElement("div", {
    className: "mpins__actions"
  }, ACTIONS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "mpins__action",
    key: i
  }, /*#__PURE__*/React.createElement(ICheck, {
    defaultChecked: a.done
  }), /*#__PURE__*/React.createElement("span", {
    className: `mpins__actiontext ${a.done ? 'is-done' : ''}`
  }, a.text), /*#__PURE__*/React.createElement(IBadge, {
    tone: "neutral"
  }, a.who.split(' ')[0])))))), /*#__PURE__*/React.createElement("div", {
    className: "mpins__side"
  }, /*#__PURE__*/React.createElement(ICard, {
    surface: "cream"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mpins__h"
  }, "Key moments"), /*#__PURE__*/React.createElement("div", {
    className: "mpins__moments"
  }, MOMENTS.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "mpins__moment",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mpins__mt"
  }, m.t), /*#__PURE__*/React.createElement("span", null, m.text))))), /*#__PURE__*/React.createElement(ICard, {
    surface: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpins__sentiment"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mpins__sicon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "smile"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mpins__slabel"
  }, "Room sentiment"), /*#__PURE__*/React.createElement("div", {
    className: "mpins__sval"
  }, "Energized \xB7 focused")))))), tab === 'goals' && /*#__PURE__*/React.createElement("div", {
    className: "mpins__goals"
  }, GOALS.map((g, i) => /*#__PURE__*/React.createElement(ICard, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpins__goalhead"
  }, /*#__PURE__*/React.createElement("span", null, g.text), /*#__PURE__*/React.createElement(IBadge, {
    tone: g.tone
  }, g.pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "mpins__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${g.pct}%`,
      background: `var(--${g.tone === 'amber' ? 'amber-500' : g.tone === 'presence' ? 'presence' : 'brand'})`
    }
  }))))), tab === 'transcript' && /*#__PURE__*/React.createElement(ICard, {
    surface: "glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mpins__transcript"
  }, [['Sorrel', '00:04', 'The goal today is to lock the VR room layout before the investor update.'], ['Dae', '00:31', 'I pushed the floating toolbar to frosted glass — it reads much calmer over the orb.'], ['Lee', '01:02', "Agreed. Let's make presence-blue the only saturated colour in the scene."], ['Mara', '01:40', 'Can we track "ship the room layout" as a goal so it shows in the summary?']].map(([who, t, text], i) => /*#__PURE__*/React.createElement("div", {
    className: "mpins__tline",
    key: i
  }, /*#__PURE__*/React.createElement(IAvatar, {
    name: who,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mpins__twho"
  }, who, " ", /*#__PURE__*/React.createElement("span", {
    className: "mpins__tt"
  }, t)), /*#__PURE__*/React.createElement("div", {
    className: "mpins__ttext"
  }, text))))))));
}
Object.assign(window, {
  MPInsights: {
    InsightsScreen
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MeetingRoom.jsx
try { (() => {
// MeetingRoom — immersive in-VR scene: participant presence orbs, live AI transcript/insights, floating controls.
// Exposes window.MPRoom
const DS_ROOM = (Object.entries(window).find(([k]) => /DesignSystem_/.test(k)) || [])[1] || {};
const {
  IconButton: RIcon,
  Button: RBtn,
  Badge: RBadge,
  Avatar: RAvatar
} = DS_ROOM;
const PARTICIPANTS = [{
  name: 'Sorrel Succes',
  speaking: true
}, {
  name: 'Lee Park'
}, {
  name: 'Dae Kim'
}, {
  name: 'Mara V'
}, {
  name: 'Noa B'
}];
const TRANSCRIPT = [{
  who: 'Sorrel',
  t: 'Okay — so the goal today is to lock the VR room layout before the investor update.'
}, {
  who: 'Dae',
  t: 'I pushed the floating toolbar to frosted glass. It reads much calmer over the orb.'
}, {
  who: 'Lee',
  t: "Agreed. Let's make presence-blue the only saturated colour in the scene."
}, {
  who: 'Mara',
  t: 'Can we track "ship the room layout" as a goal so it shows up in the summary?'
}];
const INSIGHTS = [{
  icon: 'target',
  label: 'Goal detected',
  text: 'Lock VR room layout before investor update'
}, {
  icon: 'list-checks',
  label: 'Action item',
  text: 'Dae to finalize frosted toolbar spec'
}, {
  icon: 'lightbulb',
  label: 'Decision',
  text: 'Presence-blue is the only saturated accent in-scene'
}];
function MeetingRoom({
  onLeave
}) {
  const [muted, setMuted] = React.useState(false);
  const [cam, setCam] = React.useState(true);
  const [tab, setTab] = React.useState('insights');
  const [elapsed, setElapsed] = React.useState(42 * 60 + 18);
  const [lines, setLines] = React.useState(TRANSCRIPT.slice(0, 2));
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
    const t = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(t);
  });
  React.useEffect(() => {
    let i = 2;
    const t = setInterval(() => {
      i = (i + 1) % (TRANSCRIPT.length + 1);
      setLines(TRANSCRIPT.slice(0, Math.max(2, i)));
    }, 2600);
    return () => clearInterval(t);
  }, []);
  const fmt = s => `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor(s % 3600 / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "mproom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mproom__scene"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mproom__topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mproom__meta"
  }, /*#__PURE__*/React.createElement(RBadge, {
    tone: "presence",
    dot: true
  }, "live"), /*#__PURE__*/React.createElement("span", {
    className: "mproom__title"
  }, "Weekly product sync"), /*#__PURE__*/React.createElement("span", {
    className: "mproom__timer"
  }, fmt(elapsed))), /*#__PURE__*/React.createElement("div", {
    className: "mproom__metaright"
  }, /*#__PURE__*/React.createElement(RBadge, {
    tone: "solid"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    style: {
      width: 12,
      height: 12
    }
  }), "\xA0summarizing"))), /*#__PURE__*/React.createElement("div", {
    className: "mproom__stage"
  }, PARTICIPANTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `mproom__presence ${p.speaking ? 'is-speaking' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mproom__orbwrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/orb-glow.png",
    alt: "",
    className: "mproom__orb",
    style: {
      animationDelay: `${i * -1.6}s`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mproom__pavatar"
  }, /*#__PURE__*/React.createElement(RAvatar, {
    name: p.name,
    size: "md"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mproom__pname"
  }, p.name.split(' ')[0], p.speaking && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "audio-lines"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mproom__controls"
  }, /*#__PURE__*/React.createElement(RIcon, {
    label: muted ? 'Unmute' : 'Mute',
    variant: muted ? 'solid' : 'ghost',
    onClick: () => setMuted(m => !m)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": muted ? 'mic-off' : 'mic'
  })), /*#__PURE__*/React.createElement(RIcon, {
    label: "Camera",
    variant: cam ? 'ghost' : 'solid',
    onClick: () => setCam(c => !c)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": cam ? 'video' : 'video-off'
  })), /*#__PURE__*/React.createElement(RIcon, {
    label: "Share",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "screen-share"
  })), /*#__PURE__*/React.createElement(RIcon, {
    label: "Participants",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "users"
  })), /*#__PURE__*/React.createElement(RIcon, {
    label: "React",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "smile-plus"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mproom__divider"
  }), /*#__PURE__*/React.createElement(RBtn, {
    variant: "clay",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "phone-off"
    }),
    onClick: () => onLeave && onLeave()
  }, "Leave"))), /*#__PURE__*/React.createElement("aside", {
    className: "mproom__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mproom__paneltabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: tab === 'insights' ? 'is-active' : '',
    onClick: () => setTab('insights')
  }, "Insights"), /*#__PURE__*/React.createElement("button", {
    className: tab === 'transcript' ? 'is-active' : '',
    onClick: () => setTab('transcript')
  }, "Transcript")), tab === 'insights' ? /*#__PURE__*/React.createElement("div", {
    className: "mproom__insights"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mp-eyebrow"
  }, "// neural network \xB7 live"), INSIGHTS.map((ins, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mproom__insight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mproom__insighticon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ins.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mproom__insightlabel"
  }, ins.label), /*#__PURE__*/React.createElement("div", {
    className: "mproom__insighttext"
  }, ins.text)))), /*#__PURE__*/React.createElement("div", {
    className: "mproom__generating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mproom__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mproom__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mproom__dot"
  }), " listening for goals\u2026")) : /*#__PURE__*/React.createElement("div", {
    className: "mproom__transcript"
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mproom__line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mproom__lwho"
  }, l.who), /*#__PURE__*/React.createElement("span", {
    className: "mproom__ltext"
  }, l.t))))));
}
Object.assign(window, {
  MPRoom: {
    MeetingRoom
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MeetingRoom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/cc-script.js
try { (() => {
/* Certainty Craft — living background, journey gradient, reveals, sparks */
(function () {
  'use strict';

  var docEl = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ── tweakable state (driven by cc-tweaks.jsx) ──────────────────────────
  var state = {
    water: 0.7,
    drift: true,
    sparks: true
  };
  window.CCPage = {
    apply: function (t) {
      if (typeof t.water === 'number') state.water = Math.max(0, Math.min(1, t.water / 100));
      if (typeof t.drift === 'boolean') state.drift = t.drift;
      if (typeof t.sparks === 'boolean') state.sparks = t.sparks;
      document.body.classList.toggle('cc-no-drift', !state.drift);
      needsDraw = true;
    }
  };

  // ── journey gradient backdrop (dark water → mist) ──────────────────────
  var backdrop = document.getElementById('cc-backdrop');
  function $(s) {
    return document.querySelector(s);
  }
  function topOf(el, frac) {
    if (!el) return 0;
    var r = el.getBoundingClientRect();
    return r.top + window.scrollY + r.height * (frac || 0);
  }
  var turnMid = 2400,
    fadeStart = 1200,
    fadeEnd = 2600;
  function buildGradient() {
    var H = docEl.scrollHeight;
    var urgent = $('#urgent'),
      problem = $('#problem'),
      turn = $('#turn'),
      audit = $('#audit'),
      builds = $('#builds');
    var stops = [[0, '#0b1114'], [topOf(urgent), '#0c1d23'], [topOf(problem), '#0b2730'], [topOf(turn), '#0e3944'], [topOf(turn, 0.45), '#33707b'], [topOf(turn, 0.88), '#bdd7d9'], [topOf(audit, 0.06), '#e7edee'], [topOf(builds), '#eaeef0'], [H, '#eef2f4']];
    turnMid = topOf(turn, 0.55);
    fadeStart = topOf(problem, 0.2);
    fadeEnd = topOf(turn, 0.85);
    backdrop.style.height = H + 'px';
    backdrop.style.background = 'linear-gradient(180deg,' + stops.map(function (s) {
      return s[1] + ' ' + Math.round(s[0]) + 'px';
    }).join(',') + ')';
    needsDraw = true;
  }

  // ── nav theme flip ──────────────────────────────────────────────────────
  var nav = $('.cc-nav');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var curTheme = '';
  function onScroll() {
    var y = window.scrollY;
    var light = y > turnMid - 72;
    if (nav) {
      nav.classList.toggle('nav-scrolled', y > 40);
      nav.classList.toggle('nav-light', light);
    }
    if (themeMeta) {
      var c = light ? '#e9eef0' : '#0b1114';
      if (c !== curTheme) {
        curTheme = c;
        themeMeta.setAttribute('content', c);
      }
    }
    needsDraw = true;
  }

  // ── living water canvas ─────────────────────────────────────────────────
  var cv = document.getElementById('cc-water');
  var ctx = cv.getContext('2d');
  var W = 1,
    H = 1;
  function resize() {
    W = Math.max(1, Math.ceil(window.innerWidth / 3));
    H = Math.max(1, Math.ceil(window.innerHeight / 3));
    cv.width = W;
    cv.height = H;
    needsDraw = true;
  }
  var BLOBS = [{
    c: '6,80,95',
    a: 0.30,
    r: 0.62,
    x0: 0.30,
    y0: 0.62,
    ax: 0.16,
    ay: 0.10,
    px: 37,
    py: 29,
    ph: 0.0,
    dp: 0.4
  }, {
    c: '13,127,140',
    a: 0.22,
    r: 0.46,
    x0: 0.72,
    y0: 0.30,
    ax: 0.13,
    ay: 0.12,
    px: 23,
    py: 31,
    ph: 1.7,
    dp: 0.7
  }, {
    c: '20,87,214',
    a: 0.15,
    r: 0.36,
    x0: 0.62,
    y0: 0.66,
    ax: 0.18,
    ay: 0.09,
    px: 41,
    py: 19,
    ph: 3.1,
    dp: 1.0
  }, {
    c: '28,151,163',
    a: 0.12,
    r: 0.30,
    x0: 0.18,
    y0: 0.24,
    ax: 0.10,
    ay: 0.14,
    px: 17,
    py: 27,
    ph: 4.4,
    dp: 0.9
  }, {
    c: '76,127,230',
    a: 0.09,
    r: 0.26,
    x0: 0.46,
    y0: 0.42,
    ax: 0.20,
    ay: 0.16,
    px: 29,
    py: 23,
    ph: 5.6,
    dp: 1.3
  }, {
    c: '224,165,30',
    a: 0.045,
    r: 0.17,
    x0: 0.82,
    y0: 0.74,
    ax: 0.08,
    ay: 0.07,
    px: 19,
    py: 35,
    ph: 2.3,
    dp: 0.6
  }];
  var mx = 0,
    my = 0,
    tmx = 0,
    tmy = 0; // eased pointer parallax (-0.5..0.5)
  window.addEventListener('pointermove', function (e) {
    tmx = e.clientX / window.innerWidth - 0.5;
    tmy = e.clientY / window.innerHeight - 0.5;
  }, {
    passive: true
  });
  var t = 0,
    lastTs = null,
    needsDraw = true;
  var lastSY = window.scrollY,
    sv = 0; // scroll velocity — stirs the water
  function waterFade() {
    var y = window.scrollY;
    if (y <= fadeStart) return 1;
    if (y >= fadeEnd) return 0;
    var p = (y - fadeStart) / (fadeEnd - fadeStart);
    return 1 - p * p * (3 - 2 * p); // smoothstep out
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    var scaleA = state.water / 0.7;
    var minD = Math.min(W, H);
    for (var i = 0; i < BLOBS.length; i++) {
      var b = BLOBS[i];
      var cx = (b.x0 + b.ax * Math.sin(t / b.px * 2 * Math.PI + b.ph) + mx * b.dp * 0.05) * W;
      var cy = (b.y0 + b.ay * Math.cos(t / b.py * 2 * Math.PI + b.ph) + my * b.dp * 0.05) * H;
      var rad = Math.max(8, b.r * minD * 1.9);
      var a = Math.min(0.5, b.a * scaleA);
      if (a <= 0.002) continue;
      var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      g.addColorStop(0, 'rgba(' + b.c + ',' + a.toFixed(3) + ')');
      g.addColorStop(1, 'rgba(' + b.c + ',0)');
      ctx.fillStyle = g;
      ctx.fillRect(cx - rad, cy - rad, rad * 2, rad * 2);
    }
  }
  function loop(ts) {
    requestAnimationFrame(loop);
    if (lastTs == null) lastTs = ts;
    var dt = Math.min(0.1, (ts - lastTs) / 1000);
    lastTs = ts;
    var animate = state.drift && !reduced.matches;
    var sy = window.scrollY;
    sv += (sy - lastSY - sv) * 0.12;
    lastSY = sy;
    if (animate) t += dt * (1 + Math.min(2.2, Math.abs(sv) * 0.012));
    if (!reduced.matches) {
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
    }
    var fade = waterFade() * (state.water > 0.005 ? 1 : 0);
    cv.style.opacity = fade.toFixed(3);
    if (fade <= 0.01) return;
    if (animate || needsDraw) {
      draw();
      needsDraw = false;
    }
  }

  // ── sparks / glints ─────────────────────────────────────────────────────
  var SPARK_COLORS = ['#e0a51e', '#8aabf0', '#92ccd1'];
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function rand(a, b) {
    return a + Math.random() * (b - a);
  }
  function spark(x, y, o) {
    if (!state.sparks || reduced.matches) return null;
    o = o || {};
    var s = document.createElement('i');
    s.className = 'cc-spark' + (o.ring ? ' cc-spark--ring' : '');
    s.style.left = x + 'px';
    s.style.top = y + 'px';
    s.style.color = o.color || pick(SPARK_COLORS);
    s.style.transform = 'scale(' + (o.scale || 1) + ')';
    var dur = o.dur || 2;
    s.style.setProperty('--dur', dur + 's');
    if (o.delay) s.style.setProperty('--delay', o.delay + 's');
    if (o.dx) s.style.setProperty('--dx', o.dx.toFixed(1) + 'px');
    if (o.dy) s.style.setProperty('--dy', o.dy.toFixed(1) + 'px');
    if (o.peak) s.style.setProperty('--peak', o.peak);
    document.body.appendChild(s);
    setTimeout(function () {
      s.remove();
    }, (dur + (o.delay || 0)) * 1000 + 400);
    return s;
  }
  function thread(x1, y1, x2, y2, o) {
    if (!state.sparks || reduced.matches) return;
    o = o || {};
    var dx = x2 - x1,
      dy = y2 - y1;
    var len = Math.hypot(dx, dy),
      ang = Math.atan2(dy, dx);
    var th = document.createElement('i');
    th.className = 'cc-thread';
    th.style.left = x1 + 'px';
    th.style.top = y1 + 'px';
    th.style.width = len.toFixed(1) + 'px';
    th.style.transform = 'rotate(' + ang.toFixed(4) + 'rad)';
    th.style.color = o.color || pick(SPARK_COLORS);
    var dur = o.dur || 2.6;
    th.style.setProperty('--dur', dur + 's');
    if (o.delay) th.style.setProperty('--delay', o.delay + 's');
    document.body.appendChild(th);
    setTimeout(function () {
      th.remove();
    }, (dur + (o.delay || 0)) * 1000 + 400);
  }

  // ── spark motifs: each section's gesture echoes its argument ───────────
  var MOTIFS = {
    // hero — a lone glint, searching
    wander: function (x, y) {
      var a = rand(0, Math.PI * 2);
      spark(x, y, {
        dur: rand(3.4, 4.6),
        dx: Math.cos(a) * rand(24, 44),
        dy: Math.sin(a) * rand(10, 22),
        scale: rand(0.5, 1),
        peak: 0.8
      });
    },
    // urgent / who — two near-copies, close but never aligned
    twins: function (x, y) {
      var c = pick(SPARK_COLORS);
      spark(x, y, {
        color: c,
        dur: 2.6,
        scale: 0.9,
        dx: rand(-6, 6),
        dy: rand(-4, 4)
      });
      spark(x + rand(18, 34), y + rand(-12, 12), {
        color: c,
        dur: 2.6,
        delay: rand(0.25, 0.55),
        scale: 0.6,
        dx: rand(-6, 6),
        dy: rand(-4, 4),
        peak: 0.5
      });
    },
    // problem — truth sliding sideways as it fades
    drift: function (x, y) {
      var dir = Math.random() < 0.5 ? -1 : 1;
      spark(x, y, {
        dur: rand(3.6, 4.8),
        dx: dir * rand(46, 80),
        dy: rand(-6, 6),
        scale: rand(0.6, 1),
        peak: 0.7
      });
    },
    // turn — sinking gently, coming to rest
    settle: function (x, y) {
      spark(x, y, {
        dur: rand(3.8, 5),
        dy: rand(26, 44),
        dx: rand(-10, 10),
        scale: rand(0.5, 0.9),
        peak: 0.65
      });
    },
    // audit — inspection: a glint with a soft scan ring
    ping: function (x, y) {
      spark(x, y, {
        ring: true,
        dur: rand(2.4, 3),
        scale: rand(0.7, 1),
        peak: 0.85
      });
    },
    // core — two points briefly joined by a hairline: structure
    bond: function (x, y) {
      var ang = rand(-0.5, 0.5),
        len = rand(60, 110);
      var x2 = x + Math.cos(ang) * len,
        y2 = y + Math.sin(ang) * len;
      var c = pick(SPARK_COLORS);
      spark(x, y, {
        color: c,
        dur: 3,
        scale: 0.8
      });
      spark(x2, y2, {
        color: c,
        dur: 3,
        delay: 0.2,
        scale: 0.8
      });
      thread(x, y, x2, y2, {
        color: c,
        dur: 3,
        delay: 0.35
      });
    },
    // example — two become one
    converge: function (x, y) {
      var spread = rand(40, 70);
      var c = pick(SPARK_COLORS);
      spark(x - spread, y + rand(-14, 14), {
        color: c,
        dur: 2.6,
        dx: spread * 0.85,
        scale: 0.7,
        peak: 0.6
      });
      spark(x + spread, y + rand(-14, 14), {
        color: c,
        dur: 2.6,
        dx: -spread * 0.85,
        scale: 0.7,
        peak: 0.6
      });
      setTimeout(function () {
        spark(x, y, {
          color: c,
          dur: 2.2,
          scale: 1.25,
          peak: 0.95
        });
      }, 1900);
    },
    // builds — parts appearing in sequence along a shared line
    constellation: function (x, y) {
      var ang = rand(-0.35, 0.35),
        step = rand(34, 52);
      var c = pick(SPARK_COLORS);
      for (var i = 0; i < 3; i++) {
        spark(x + Math.cos(ang) * step * i, y + Math.sin(ang) * step * i, {
          color: c,
          dur: 2.8,
          delay: i * 0.35,
          scale: 0.75,
          peak: 0.7
        });
      }
    },
    // possible — the work gets lighter
    rise: function (x, y) {
      spark(x, y, {
        dur: rand(3.4, 4.4),
        dy: -rand(28, 48),
        dx: rand(-8, 8),
        scale: rand(0.5, 0.9),
        peak: 0.75
      });
    },
    // about — a warm, human ember
    ember: function (x, y) {
      spark(x, y, {
        color: '#e0a51e',
        dur: rand(3.6, 4.8),
        dx: rand(-10, 10),
        dy: -rand(6, 16),
        scale: rand(0.5, 0.85),
        peak: 0.6
      });
    },
    // book — glints drawn toward the CTA
    gather: function (x, y) {
      var cta = document.querySelector('#book .btn-brand');
      if (!cta) return MOTIFS.wander(x, y);
      var r = cta.getBoundingClientRect();
      var cx = window.scrollX + r.left + r.width / 2;
      var cy = window.scrollY + r.top + r.height / 2;
      var a = rand(0, Math.PI * 2),
        d = rand(90, 170);
      var sx = cx + Math.cos(a) * d,
        sy = cy + Math.sin(a) * d;
      spark(sx, sy, {
        dur: rand(2.8, 3.6),
        dx: (cx - sx) * 0.6,
        dy: (cy - sy) * 0.6,
        scale: rand(0.5, 0.85),
        peak: 0.8
      });
    }
  };
  var SECTION_MOTIFS = {
    hero: 'wander',
    urgent: 'twins',
    problem: 'drift',
    turn: 'settle',
    audit: 'ping',
    core: 'bond',
    example: 'converge',
    builds: 'constellation',
    possible: 'rise',
    who: 'twins',
    pilot: 'bond',
    about: 'ember',
    book: 'gather'
  };
  function motifFor(el) {
    var sec = el.closest ? el.closest('.cc-section') : null;
    return MOTIFS[sec && SECTION_MOTIFS[sec.id] || 'wander'];
  }
  function sparkNear(el) {
    var r = el.getBoundingClientRect();
    var x = window.scrollX + r.left + rand(0.1, 0.9) * r.width;
    var y = window.scrollY + r.top - 8 + rand(0, 24);
    motifFor(el)(x, y);
  }

  // ── scroll reveals ──────────────────────────────────────────────────────
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      el.classList.add('in');
      if (el.hasAttribute('data-spark')) {
        setTimeout(function () {
          sparkNear(el);
        }, 350);
      }
      io.unobserve(el);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });
  document.querySelectorAll('.rv').forEach(function (el) {
    io.observe(el);
  });

  // ── ambient glints: one quiet gesture in whichever section is in view ──
  var motifSections = Object.keys(SECTION_MOTIFS).map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);
  function currentSection() {
    var mid = window.innerHeight * 0.5;
    for (var i = 0; i < motifSections.length; i++) {
      var r = motifSections[i].getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) return motifSections[i];
    }
    return null;
  }
  (function ambient() {
    setTimeout(function () {
      ambient();
      if (document.hidden || !state.sparks || reduced.matches) return;
      var sec = currentSection();
      if (!sec) return;
      var r = sec.getBoundingClientRect();
      var top = Math.max(r.top, 90),
        bottom = Math.min(r.bottom, window.innerHeight - 70);
      if (bottom - top < 140) return;
      var vx = rand(0.06, 0.94);
      // bias toward the margins, away from the text column
      if (vx > 0.18 && vx < 0.72 && Math.random() < 0.6) {
        vx = Math.random() < 0.5 ? rand(0.04, 0.16) : rand(0.74, 0.95);
      }
      MOTIFS[SECTION_MOTIFS[sec.id]](window.scrollX + window.innerWidth * vx, window.scrollY + rand(top + 40, bottom - 40));
    }, rand(2600, 5200));
  })();

  // ── tap / click: the section answers with its own gesture ────────────
  var lastTap = 0;
  window.addEventListener('pointerdown', function (e) {
    if (Date.now() - lastTap < 600) return;
    if (!e.target || !e.target.closest) return;
    if (e.target.closest('a, button, input, label, image-slot, .cc-nav, .cc-menu, #cc-tweaks-root')) return;
    var sec = e.target.closest('.cc-section');
    if (!sec || !SECTION_MOTIFS[sec.id]) return;
    lastTap = Date.now();
    MOTIFS[SECTION_MOTIFS[sec.id]](e.pageX, e.pageY - 24);
  }, {
    passive: true
  });

  // ── mobile menu ──────────────────────────────────────────────────────
  var menuBtn = $('.cc-menu-btn'),
    menu = $('#cc-menu');
  function setMenu(open) {
    if (!menuBtn || !menu) return;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setMenu(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // ── wiring ──────────────────────────────────────────────────────────────
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
  window.addEventListener('resize', function () {
    resize();
    buildGradient();
  });
  resize();
  buildGradient();
  onScroll();
  requestAnimationFrame(loop);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildGradient);
  window.addEventListener('load', buildGradient);
  setTimeout(buildGradient, 800);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/cc-script.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/cc-tweaks.jsx
try { (() => {
// Certainty Craft — Tweaks wiring (uses tweaks-panel.jsx shell)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "water": 70,
  "drift": true,
  "sparks": true
} /*EDITMODE-END*/;
function CCTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    if (window.CCPage) window.CCPage.apply(t);
  }, [t]);
  return /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Living background"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Water intensity",
    value: t.water,
    min: 0,
    max: 100,
    step: 5,
    unit: "%",
    onChange: v => setTweak('water', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Ambient drift",
    value: t.drift,
    onChange: v => setTweak('drift', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Accents"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Sparks & glints",
    value: t.sparks,
    onChange: v => setTweak('sparks', v)
  }));
}
(function mountCCTweaks() {
  const el = document.getElementById('cc-tweaks-root');
  if (el) ReactDOM.createRoot(el).render(/*#__PURE__*/React.createElement(CCTweaks, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/cc-tweaks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
