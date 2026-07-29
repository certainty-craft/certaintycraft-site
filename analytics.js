/* GA4 (G-TN297WEGKR) with Consent Mode v2 and a Law 25 consent banner.
   Vanilla, no dependencies. The gtag network script is only injected on the
   production hostname; everywhere else events still flow into the local
   dataLayer so behavior stays testable without any calls to Google. */
(function () {
  'use strict';

  var GA_ID = 'G-TN297WEGKR';
  var host = location.hostname;
  var isProd = !(
    host === 'localhost' ||
    host === '127.0.0.1' ||
    /\.netlify\.app$/.test(host)
  );

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  // Consent Mode v2 defaults, set before gtag.js can load.
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  gtag('js', new Date());
  gtag('config', GA_ID);

  var stored = null;
  try { stored = localStorage.getItem('cc-consent'); } catch (e) {}
  if (stored === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  var loaded = false;
  function loadGtag() {
    if (loaded || !isProd) return;
    loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  // No choice or a no means gtag never loads: zero data leaves the browser.
  if (stored === 'granted') loadGtag();

  function setConsent(choice) {
    try { localStorage.setItem('cc-consent', choice); } catch (e) {}
    if (choice === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
      loadGtag();
    }
    var el = document.getElementById('cc-consent-banner');
    if (el) el.remove();
  }

  function showBanner() {
    if (document.getElementById('cc-consent-banner')) return;
    var bar = document.createElement('div');
    bar.id = 'cc-consent-banner';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-live', 'polite');
    bar.setAttribute('aria-label', 'Consent to anonymous analytics / Consentement aux statistiques anonymes');
    bar.style.cssText =
      'position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;' +
      'max-width:640px;margin:0 auto;padding:20px 22px;border-radius:14px;' +
      'background:#fff;color:var(--ink-700,#3a4b51);border:1px solid var(--hairline,rgba(36,52,58,.12));' +
      "font:14px/1.6 var(--font-body,'Mulish',system-ui,sans-serif);" +
      'box-shadow:0 12px 30px rgba(13,127,140,.12)';
    var head = document.createElement('div');
    head.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:8px';
    if (window.customElements && customElements.get('rope-glyph')) {
      var glyph = document.createElement('rope-glyph');
      glyph.setAttribute('shape', 'loop');
      glyph.setAttribute('aria-hidden', 'true');
      glyph.style.cssText = 'width:22px;height:22px;color:var(--teal-600,#0d7f8c);flex:none';
      head.appendChild(glyph);
    }
    var msg = document.createElement('p');
    msg.style.cssText =
      'margin:0;text-wrap:pretty;color:var(--ink-900,#16242a);' +
      "font:300 17px/1.5 var(--font-display,'Jost',sans-serif)";
    msg.textContent =
      'All tracking requires consent, which is completely optional. ' +
      'That\u2019s how it should be. / Tout suivi exige votre consentement, ' +
      'enti\u00e8rement facultatif. Comme il se doit.';
    head.appendChild(msg);
    head.style.marginBottom = '14px';
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap';
    var btnCss =
      'flex:1 1 150px;padding:10px 16px;border-radius:999px;' +
      'border:1.5px solid var(--teal-600,#0d7f8c);background:transparent;' +
      "color:var(--ink-900,#16242a);font:600 14px var(--font-body,'Mulish',system-ui,sans-serif);" +
      'cursor:pointer';
    var accept = document.createElement('button');
    accept.type = 'button';
    accept.style.cssText = btnCss;
    accept.textContent = 'Sure / Bien s\u00fbr';
    accept.addEventListener('click', function () { setConsent('granted'); });
    var refuse = document.createElement('button');
    refuse.type = 'button';
    refuse.style.cssText = btnCss;
    refuse.textContent = 'No thanks / Non merci';
    refuse.addEventListener('click', function () { setConsent('denied'); });
    row.appendChild(accept);
    row.appendChild(refuse);
    bar.appendChild(head);
    bar.appendChild(row);
    document.body.appendChild(bar);
  }

  // Click tracking via delegation so it survives the prerender/hydration swap.
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('mailto:') === 0) {
      gtag('event', 'contact_click', { method: 'mailto' });
      return;
    }
    var hostOf = '';
    try { hostOf = new URL(a.href, location.href).hostname; } catch (e) {}
    if (a.hasAttribute('download') || /\.(pdf|docx)(\?|#|$)/i.test(href)) {
      gtag('event', 'resume_download', { link_url: a.href });
      return;
    }
    if (/(^|\.)linkedin\.com$/.test(hostOf)) {
      gtag('event', 'outbound_linkedin', { link_url: a.href });
      return;
    }
    if (/(^|\.)github\.com$/.test(hostOf)) {
      gtag('event', 'outbound_github', { link_url: a.href });
    }
  }, true);

  // project_view: detail pages fire on load; index sections on 50% visibility.
  var seen = {};
  function view(id) {
    if (seen[id]) return;
    seen[id] = true;
    gtag('event', 'project_view', { project_id: id });
  }
  var m = location.pathname.match(/^\/case-studies\/([^/]+)\//);
  if (m) view(m[1]);

  var SECTIONS = { s2: 'featured-work', s3: 'more-work' };
  var observer = null;
  function armSections() {
    if (!('IntersectionObserver' in window)) return;
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) view(SECTIONS[en.target.dataset.ccSection || en.target.id]);
      });
    }, { threshold: 0.5 });
    Object.keys(SECTIONS).forEach(function (id) {
      var el = document.getElementById(id);
      // Tall sections can never hit 50% visibility; watch the heading instead.
      var target = el && (el.querySelector('h2, h3') || el);
      if (target) { target.dataset.ccSection = id; observer.observe(target); }
    });
  }

  function start() {
    if (stored !== 'granted' && stored !== 'denied') showBanner();
    armSections();
    // Re-arm once the hydration swap replaces the prerendered sections.
    var pre = document.getElementById('dc-prerender');
    if (pre) {
      new MutationObserver(function (muts, mo) {
        if (!document.getElementById('dc-prerender')) {
          mo.disconnect();
          armSections();
        }
      }).observe(document.body, { childList: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
