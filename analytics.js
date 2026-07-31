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
    // On phones the sticky nav owns the top edge, so the banner sits at the
    // bottom instead of covering Quick view / Case studies / Email me.
    var mobile = window.matchMedia && matchMedia('(max-width: 980px)').matches;
    bar.style.cssText =
      'position:fixed;' +
      (mobile
        ? 'bottom:calc(14px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);width:min(430px,calc(100vw - 28px));'
        : 'top:14px;right:14px;width:min(330px,calc(100vw - 28px));') +
      'z-index:2147483000;' +
      'padding:12px 14px 12px;border-radius:16px;' +
      'background:rgba(255,255,255,.78);' +
      '-webkit-backdrop-filter:blur(12px) saturate(1.3);backdrop-filter:blur(12px) saturate(1.3);' +
      'color:var(--ink-700,#3a4b51);border:1px solid rgba(255,255,255,.65);' +
      "font:13.5px/1.45 var(--font-body,'Mulish',system-ui,sans-serif);" +
      'box-shadow:0 6px 18px rgba(13,127,140,.14),0 20px 44px rgba(22,36,42,.12)';
    var msg = document.createElement('p');
    msg.style.cssText =
      'margin:0 0 10px;text-wrap:pretty;color:var(--ink-900,#16242a);' +
      "font:300 14.5px/1.45 var(--font-display,'Jost',sans-serif)";
    msg.textContent =
      '\ud83d\udc4b All tracking requires consent, which is completely optional. ' +
      'That\u2019s how it should be. / Tout suivi exige votre consentement, ' +
      'enti\u00e8rement facultatif. Comme il se doit.';
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:8px';
    var btnCss =
      'flex:1 1 auto;padding:7px 12px;border-radius:999px;white-space:nowrap;' +
      'border:1.5px solid var(--teal-600,#0d7f8c);background:rgba(255,255,255,.6);' +
      "color:var(--ink-900,#16242a);font:600 13px var(--font-body,'Mulish',system-ui,sans-serif);" +
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
    bar.appendChild(msg);
    bar.appendChild(row);
    document.body.appendChild(bar);
    var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && bar.animate) {
      // One entrance, then still. The old infinite bob ran the compositor
      // for as long as the banner stayed on screen.
      var baseX = mobile ? 'translateX(-50%) ' : '';
      var fromY = mobile ? 'translateY(8px)' : 'translateY(-8px)';
      bar.animate(
        [{ opacity: 0, transform: baseX + fromY }, { opacity: 1, transform: baseX + 'translateY(0)' }],
        { duration: 500, easing: 'cubic-bezier(.22,.8,.28,1)' }
      );
    }
  }

  // Click tracking via delegation so it survives the prerender/hydration swap.
  document.addEventListener('click', function (ev) {
    if (!ev.target || !ev.target.closest) return;
    var chip = ev.target.closest('[data-chip]');
    if (chip) {
      gtag('event', 'filter_select', { filter_id: chip.getAttribute('data-chip') });
      return;
    }
    var a = ev.target.closest('a[href]');
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
    var cs = null;
    try { cs = new URL(a.href, location.href); } catch (e) {}
    if (cs && cs.hostname === location.hostname) {
      var cm = cs.pathname.match(/^\/case-studies\/([^/]+)\//);
      if (cm) {
        gtag('event', 'case_study_click', { project_id: cm[1] });
        return;
      }
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
