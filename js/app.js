// SADEN Website Interactive Engine
// Dual-Theme (Dark/Light) · Bilingual (AR/EN) · Liquid Glass Interactions
// Unified Glowing Geometric Logo Loader · Series & Topic Modals · Card Expand Modals

(function () {
  "use strict";

  const ICONS = {
    story: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    archetype: `<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5v2H4v-2L12 3z"/><path d="M6 9.5v8M10 9.5v8M14 9.5v8M18 9.5v8M4 19.5h16"/></svg>`,
    vision: `<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
    mission: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>`,
    blueprint: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6M7 16h4M15 12v4h2"/></svg>`,
    layers: `<svg viewBox="0 0 24 24"><polygon points="12 3 21 8 12 13 3 8 12 3"/><polyline points="3 12.5 12 17.5 21 12.5"/><polyline points="3 17 12 22 21 17"/></svg>`,
    calculator: `<svg viewBox="0 0 24 24"><rect x="4" y="2.5" width="16" height="19" rx="2.5"/><rect x="7.5" y="6" width="9" height="3.5" rx="1"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/></svg>`,
    "search-shield": `<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/><circle cx="11.5" cy="11.5" r="2.7"/><path d="M13.5 13.5l2 2"/></svg>`,
    compass: `<svg viewBox="0 0 24 24"><circle cx="12" cy="5.5" r="2"/><path d="M10.8 7.3L5.5 20M13.2 7.3L18.5 20M7 14.5h10M12 2v1.5"/></svg>`,
    "shield-check": `<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/><polyline points="9 12 11 14 15.5 9.5"/></svg>`,
    cube: `<svg viewBox="0 0 24 24"><path d="M12 2.5L20 7v10l-8 4.5L4 17V7l8-4.5z"/><polyline points="4 7 12 11.5 20 7"/><line x1="12" y1="11.5" x2="12" y2="21.5"/></svg>`,
    "box-3d": `<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/><circle cx="12" cy="12" r="1.5"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="0.8"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>`,
    "book-open": `<svg viewBox="0 0 24 24"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H10a3 3 0 0 1 2 1 3 3 0 0 1 2-1h5.5A2.5 2.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14a2.5 2.5 0 0 0-2 1 2.5 2.5 0 0 0-2-1H3.5A1.5 1.5 0 0 1 2 18.5v-13z"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    award: `<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.8L7 21l5-2.5L17 21l-1.5-7.2"/></svg>`,
    stewardship: `<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/><path d="M12 8v8M9 11h6"/></svg>`,
    precision: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
    heritage: `<svg viewBox="0 0 24 24"><path d="M4 20h16M6 20V9l6-5 6 5v11M9.5 20v-7h5v7M12 4v3"/></svg>`,
    impact: `<svg viewBox="0 0 24 24"><polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2"/></svg>`
  };

  // International Country Dial Codes (MENA, GCC & Global)
  const COUNTRY_CODES = [
    { iso: "EG", dial: "+20",  ar: "مصر", en: "Egypt", sample: "1XX XXX XXXX" },
    { iso: "SA", dial: "+966", ar: "السعودية", en: "Saudi Arabia", sample: "5X XXX XXXX" },
    { iso: "AE", dial: "+971", ar: "الإمارات", en: "United Arab Emirates", sample: "5X XXX XXXX" },
    { iso: "KW", dial: "+965", ar: "الكويت", en: "Kuwait", sample: "5XXX XXXX" },
    { iso: "QA", dial: "+974", ar: "قطر", en: "Qatar", sample: "3XXX XXXX" },
    { iso: "BH", dial: "+973", ar: "البحرين", en: "Bahrain", sample: "3XXX XXXX" },
    { iso: "OM", dial: "+968", ar: "عُمان", en: "Oman", sample: "9XXX XXXX" },
    { iso: "JO", dial: "+962", ar: "الأردن", en: "Jordan", sample: "7X XXX XXXX" },
    { iso: "LB", dial: "+961", ar: "لبنان", en: "Lebanon", sample: "7X XXX XXX" },
    { iso: "IQ", dial: "+964", ar: "العراق", en: "Iraq", sample: "7XX XXX XXXX" },
    { iso: "MA", dial: "+212", ar: "المغرب", en: "Morocco", sample: "6XX XXX XXX" },
    { iso: "TN", dial: "+216", ar: "تونس", en: "Tunisia", sample: "2X XXX XXX" },
    { iso: "DZ", dial: "+213", ar: "الجزائر", en: "Algeria", sample: "5XX XX XX XX" },
    { iso: "LY", dial: "+218", ar: "ليبيا", en: "Libya", sample: "9X XXX XXXX" },
    { iso: "SD", dial: "+249", ar: "السودان", en: "Sudan", sample: "9X XXX XXXX" },
    { iso: "PS", dial: "+970", ar: "فلسطين", en: "Palestine", sample: "5X XXX XXXX" },
    { iso: "SY", dial: "+963", ar: "سوريا", en: "Syria", sample: "9XX XXX XXX" },
    { iso: "YE", dial: "+967", ar: "اليمن", en: "Yemen", sample: "7XX XXX XXX" },
    { iso: "TR", dial: "+90",  ar: "تركيا", en: "Turkey", sample: "5XX XXX XXXX" },
    { iso: "GB", dial: "+44",  ar: "المملكة المتحدة", en: "United Kingdom", sample: "7XXX XXXXXX" },
    { iso: "US", dial: "+1",   ar: "الولايات المتحدة", en: "United States", sample: "(XXX) XXX-XXXX" },
    { iso: "CA", dial: "+1",   ar: "كندا", en: "Canada", sample: "(XXX) XXX-XXXX" },
    { iso: "DE", dial: "+49",  ar: "ألمانيا", en: "Germany", sample: "15X XXXXXXXX" },
    { iso: "FR", dial: "+33",  ar: "فرنسا", en: "France", sample: "6 XX XX XX XX" },
    { iso: "IT", dial: "+39",  ar: "إيطاليا", en: "Italy", sample: "3XX XXX XXXX" },
    { iso: "ES", dial: "+34",  ar: "إسبانيا", en: "Spain", sample: "6XX XXX XXX" },
    { iso: "NL", dial: "+31",  ar: "هولندا", en: "Netherlands", sample: "6 XXXXXXXX" },
    { iso: "CH", dial: "+41",  ar: "سويسرا", en: "Switzerland", sample: "7X XXX XX XX" },
    { iso: "AT", dial: "+43",  ar: "النمسا", en: "Austria", sample: "6XX XXXXXXX" },
    { iso: "BE", dial: "+32",  ar: "بلجيكا", en: "Belgium", sample: "4XX XX XX XX" },
    { iso: "SE", dial: "+46",  ar: "السويد", en: "Sweden", sample: "7X XXX XX XX" },
    { iso: "GR", dial: "+30",  ar: "اليونان", en: "Greece", sample: "69X XXX XXXX" },
    { iso: "AU", dial: "+61",  ar: "أستراليا", en: "Australia", sample: "4XX XXX XXX" },
    { iso: "IN", dial: "+91",  ar: "الهند", en: "India", sample: "9XXXX XXXXX" },
    { iso: "PK", dial: "+92",  ar: "باكستان", en: "Pakistan", sample: "3XX XXXXXXX" },
    { iso: "SG", dial: "+65",  ar: "سنغافورة", en: "Singapore", sample: "8XXX XXXX" },
    { iso: "CN", dial: "+86",  ar: "الصين", en: "China", sample: "1XX XXXX XXXX" },
    { iso: "JP", dial: "+81",  ar: "اليابان", en: "Japan", sample: "90 XXXX XXXX" }
  ];

  // Safe sessionStorage helpers: preserves language/theme on refresh within the open tab,
  // and resets cleanly to English + Dark Mode whenever the site is closed and reopened
  function safeSessionGet(key, fallback) {
    try {
      const val = window.sessionStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeSessionSet(key, val) {
    try {
      window.sessionStorage.setItem(key, val);
    } catch (e) {}
  }

  // App state (Default: English + Dark Mode on every new open; preserved across refreshes via sessionStorage)
  const state = {
    lang: safeSessionGet("saden-lang", "en"),
    theme: safeSessionGet("saden-theme", "dark"),
    serviceFilter: "all",
    personaId: "developers",
    activeLayer: null,
    fullEmblemSelected: false,
    seriesModalId: null,
    topicModalState: null, // { seriesId, topicId }
    detailModalOpen: false,
    phoneCountryIso: "EG"
  };

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Escape HTML safely
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Official inline wordmarks matching exact logo shape & color (#C5994B)
  function buildInlineWordmarkEN() {
    const L = window.SADEN_LOGO;
    return `<svg class="saden-inline-wordmark saden-inline-wordmark--en" viewBox="${L.wordmarkViewBox}" fill="none" aria-label="SADEN" role="img"><path fill="#C5994B" fill-rule="evenodd" d="${L.wordmark}"/></svg>`;
  }

  function buildInlineWordmarkAR() {
    return `<img class="saden-inline-wordmark saden-inline-wordmark--ar" src="assets/saden-wordmark-ar.png" alt="سادن" />`;
  }

  // Replace every standalone "SADEN" (EN) and "سادن" (AR) with the official logo wordmark
  // Universal regex (no lookbehind) for 100% Safari / iOS / Android WebView compatibility
  // Preserves usernames/handles like "@Sir.SADEN" as plain text
  function formatBrandWordmark(text) {
    let safe = escapeHtml(text);
    if (safe.indexOf("SADEN") !== -1) {
      safe = safe.replace(/(^|[^@.\w])SADEN\b/g, "$1" + buildInlineWordmarkEN());
    }
    if (safe.indexOf("سادن") !== -1) {
      safe = safe.replace(/سادن/g, buildInlineWordmarkAR());
    }
    return safe;
  }

  function flattenLayerPaths(layersObj) {
    return Object.keys(layersObj).reduce((acc, k) => acc.concat(layersObj[k]), []);
  }

  // Render exact official SADEN SVG symbol
  function buildSymbolSVG(className = "", interactive = false) {
    const L = window.SADEN_LOGO;
    const layerOrder = ["building", "hands", "infinity", "arrow", "eye"];
    const groups = layerOrder.map((key) => {
      const pathsHtml = L.layers[key].map((d) => `<path d="${d}"/>`).join("");
      return `<g class="anatomy-layer" data-layer="${key}">${pathsHtml}</g>`;
    }).join("");
    return `<svg ${interactive ? 'id="anatomy-svg"' : ""} class="${className}" viewBox="${L.symbolViewBox}" fill="none" aria-label="SADEN Emblem" role="img"><g fill-rule="evenodd" fill="currentColor">${groups}</g></svg>`;
  }

  function buildWordmarkSVG(className = "") {
    const L = window.SADEN_LOGO;
    return `<svg class="${className}" viewBox="${L.wordmarkViewBox}" fill="none" aria-label="SADEN" role="img"><path fill="currentColor" fill-rule="evenodd" d="${L.wordmark}"/></svg>`;
  }

  function buildVerticalLockupSVG(className = "") {
    const L = window.SADEN_LOGO;
    const symPaths = flattenLayerPaths(L.layers).map((d) => `<path d="${d}"/>`).join("");
    return `<svg class="${className}" viewBox="${L.verticalViewBox}" fill="none" aria-label="SADEN" role="img"><g fill-rule="evenodd" fill="currentColor">${symPaths}<path d="${L.wordmarkInVertical}"/></g></svg>`;
  }

  // Update Header & Footer Logos cleanly per active language
  function updateBrandMarksForLanguage() {
    const isAr = state.lang === "ar";
    const navBrand = $("#nav-brand-logo");
    if (navBrand && !navBrand.querySelector(".nav-brand-symbol")) {
      navBrand.innerHTML = buildSymbolSVG("nav-brand-symbol");
    }

    const navWordmark = $("#nav-brand-wordmark");
    if (navWordmark) {
      navWordmark.innerHTML = isAr
        ? `<img class="nav-brand-wordmark-ar" src="assets/saden-wordmark-ar.png" alt="سادن" />`
        : buildWordmarkSVG();
    }

    const footerBrand = $("#footer-brand-logo");
    if (footerBrand) {
      footerBrand.innerHTML = isAr
        ? `<img class="saden-lockup-vertical-ar" src="assets/saden-logo-vertical-ar.png" alt="سادن" />`
        : buildVerticalLockupSVG("saden-lockup-vertical");
    }

    const contactBrand = $("#contact-promise-brand");
    if (contactBrand) {
      contactBrand.innerHTML = isAr ? buildInlineWordmarkAR() : buildInlineWordmarkEN();
    }
  }

  function injectBrandLogos() {
    updateBrandMarksForLanguage();
    const vitrine = $("#anatomy-vitrine");
    if (vitrine) {
      vitrine.innerHTML = buildSymbolSVG("", true);
    }
  }

  // Apply Theme (saved to sessionStorage: persists on refresh, resets to Dark Mode on close & reopen)
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    safeSessionSet("saden-theme", theme);
    updateThemeButton();
  }

  function updateThemeButton() {
    const t = window.SADEN_I18N[state.lang];
    const btn = $("#theme-toggle");
    if (!btn) return;
    const isDark = state.theme === "dark";
    btn.classList.toggle("is-right", isDark);
    btn.setAttribute("aria-checked", String(isDark));
    btn.setAttribute("aria-label", isDark ? t.nav.themeToLight : t.nav.themeToDark);
    btn.setAttribute("title", isDark ? t.nav.themeToLight : t.nav.themeToDark);
  }

  function updateLangSwitch() {
    const btn = $("#lang-toggle");
    if (!btn) return;
    const isAr = state.lang === "ar";
    btn.classList.toggle("is-right", isAr);
    btn.setAttribute("aria-checked", String(isAr));
    btn.setAttribute("aria-label", isAr ? "Switch to English" : "التبديل إلى العربية");
    btn.setAttribute("title", isAr ? "Switch to English" : "التبديل إلى العربية");
  }

  // Fine-grained element-level scroll anchor capture & zero-flicker restoration across AR <-> EN switches
  function collectScrollAnchorEntries() {
    const entries = [];
    const addBySelector = (selector) => {
      const el = $(selector);
      if (el) entries.push({ el, find: () => $(selector) });
    };
    const addByAttr = (selector, attr) => {
      $$(selector).forEach((el) => {
        const val = el.getAttribute(attr);
        if (val) entries.push({ el, find: () => $(`[${attr}="${val}"]`) });
      });
    };
    const addByIndex = (selector) => {
      $$(selector).forEach((el, idx) => {
        entries.push({ el, find: () => $$(selector)[idx] || null });
      });
    };

    // High-granularity cards, headers, and interactive blocks
    addBySelector("#hero .hero-content");
    addByIndex("#hero-metrics .metric-card");
    addByAttr("[data-about-card]", "data-about-card");
    addByIndex("#values-grid .value-card");
    addByAttr("[data-service-card]", "data-service-card");
    addBySelector(".dual-core-grid");
    addBySelector("#persona-panel");
    addBySelector(".anatomy-stage");
    addByAttr("#anatomy-list [data-layer]", "data-layer");
    addByAttr("[data-media-open]", "data-media-open");
    addBySelector("#contact .contact-info");
    addBySelector("#contact-form");
    addBySelector(".footer-grid");
    addBySelector(".footer-bottom");

    // Section headers & fallback sections
    $$("section[id]").forEach((sec) => {
      const id = sec.id;
      const header = sec.querySelector(".section-header");
      if (header) {
        entries.push({ el: header, find: () => $(`#${id} .section-header`) });
      }
      entries.push({ el: sec, find: () => $(`#${id}`) });
    });
    const footerEl = $("footer");
    if (footerEl) entries.push({ el: footerEl, find: () => $("footer") });

    return entries;
  }

  function captureScrollAnchor() {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    if (window.scrollY < 24) {
      return { atTop: true, scrollY: window.scrollY };
    }
    if (maxScroll > 0 && window.scrollY >= maxScroll - 16) {
      return { atBottom: true, scrollY: window.scrollY };
    }

    const focusY = Math.min(Math.max(window.innerHeight * 0.32, 110), 260);
    const entries = collectScrollAnchorEntries();
    let bestEntry = null;
    let bestScore = Infinity;

    for (const entry of entries) {
      const rect = entry.el.getBoundingClientRect();
      if (rect.height <= 0 || rect.width <= 0) continue;
      const isCoveringFocus = rect.top <= focusY && rect.bottom >= focusY;
      // Prefer the smallest (most specific) element covering the reading line; otherwise closest edge to focusY
      const score = isCoveringFocus
        ? rect.height * 0.01 + Math.abs(rect.top - focusY) * 0.05
        : 10000 + Math.min(Math.abs(rect.top - focusY), Math.abs(rect.bottom - focusY));
      if (score < bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }

    if (!bestEntry) {
      return { atTop: false, scrollY: window.scrollY, docRatio: maxScroll > 0 ? window.scrollY / maxScroll : 0 };
    }

    const rect = bestEntry.el.getBoundingClientRect();
    const useRatio = rect.height > window.innerHeight * 0.55;
    return {
      find: bestEntry.find,
      top: rect.top,
      focusY,
      ratio: rect.height > 0 ? (focusY - rect.top) / rect.height : 0,
      useRatio,
      scrollY: window.scrollY
    };
  }

  function applyInstantScroll(targetY) {
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, Math.max(0, Math.round(targetY)));
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevBehavior;
    });
  }

  function restoreScrollAnchor(anchor) {
    if (!anchor) return;
    if (anchor.atTop) {
      applyInstantScroll(anchor.scrollY);
      return;
    }
    if (anchor.atBottom) {
      const newMax = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      applyInstantScroll(newMax);
      return;
    }
    if (anchor.find) {
      const targetEl = anchor.find();
      if (targetEl) {
        const newRect = targetEl.getBoundingClientRect();
        let delta;
        if (anchor.useRatio && newRect.height > 0) {
          const desiredTop = anchor.focusY - anchor.ratio * newRect.height;
          delta = newRect.top - desiredTop;
        } else {
          delta = newRect.top - anchor.top;
        }
        if (Math.abs(delta) > 0.5) {
          applyInstantScroll(window.scrollY + delta);
        }
        return;
      }
    }
    if (typeof anchor.docRatio === "number") {
      const newMax = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      applyInstantScroll(anchor.docRatio * newMax);
    }
  }

  // Apply Language & Render Everything (saved to sessionStorage: persists on refresh, resets to English on close & reopen)
  function applyLang(lang, preserveScroll = false) {
    const anchor = preserveScroll ? captureScrollAnchor() : null;
    const modalScrollEl = state.seriesModalId ? $("#media-modal .modal-scroll") : null;
    const savedModalScroll = modalScrollEl ? modalScrollEl.scrollTop : 0;

    state.lang = lang;
    safeSessionSet("saden-lang", lang);
    const isAr = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";

    const t = window.SADEN_I18N[lang];
    document.title = t.meta.title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

    // Simple text keys (rendering SADEN & سادن with official wordmarks)
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), t);
      if (typeof val === "string") el.innerHTML = formatBrandWordmark(val);
    });

    // Placeholders
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), t);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    // Update Arabic / English wordmarks & footer vertical logo
    updateBrandMarksForLanguage();
    updateLangSwitch();

    // Render dynamic sections
    renderMetrics(t);
    renderValues(t);
    renderServiceTabs(t);
    renderServices(t, preserveScroll);
    renderDualCoreBullets(t);
    renderPersonaTabs(t);
    renderPersonaPanel(t);
    renderAnatomyList(t);
    renderMedia(t);
    renderFormOptions(t);
    updateThemeButton();
    bindGlassSpotlights();

    // When switching language live, keep already-reached cards & sections immediately visible without re-bouncing
    if (preserveScroll) {
      $$("#services-grid .rise-card").forEach((el) => el.classList.add("is-risen"));
    }
    observeRiseCards();

    // Re-sync open modal copy if one is currently open (preserving its internal scroll offset)
    if (state.seriesModalId) {
      populateSeriesModal(state.seriesModalId);
      if (modalScrollEl) modalScrollEl.scrollTop = savedModalScroll;
    }
    if (state.topicModalState) populateTopicModal(state.topicModalState.seriesId, state.topicModalState.topicId);

    if (preserveScroll && anchor) {
      // Snap synchronously before paint (zero flicker) + micro-correct after paint if webfonts reflow
      restoreScrollAnchor(anchor);
      revealVisibleElementsFallback();
      requestAnimationFrame(() => {
        restoreScrollAnchor(anchor);
        revealVisibleElementsFallback();
      });
    }
  }

  function renderMetrics(t) {
    const wrap = $("#hero-metrics");
    if (!wrap) return;
    wrap.innerHTML = t.hero.metrics.map((m) => `
      <div class="lg-card lg-card--interactive metric-card">
        <div class="metric-card__value">${formatBrandWordmark(m.value)}</div>
        <div class="metric-card__label">${formatBrandWordmark(m.label)}</div>
      </div>
    `).join("");
  }

  function renderValues(t) {
    const wrap = $("#values-grid");
    if (!wrap) return;
    wrap.innerHTML = t.about.values.map((v, idx) => `
      <article class="lg-card lg-card--interactive value-card rise-card" data-value-id="${v.id}" data-rise-delay="${idx * 75}" tabindex="0" role="button">
        <div class="lg-icon">${ICONS[v.id] || ICONS.precision}</div>
        <h4 class="value-card__title">${formatBrandWordmark(v.title)}</h4>
        <p class="value-card__desc">${formatBrandWordmark(v.desc)}</p>
      </article>
    `).join("");

    $$("[data-value-id]", wrap).forEach((card) => {
      const open = () => {
        const vid = card.getAttribute("data-value-id");
        const curr = window.SADEN_I18N[state.lang];
        const v = curr.about.values.find((x) => x.id === vid);
        if (!v) return;
        openDetailModal({
          icon: ICONS[v.id] || ICONS.precision,
          eyebrow: curr.about.valuesTitle,
          title: v.title,
          paragraphs: [v.desc]
        });
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
  }

  function renderServiceTabs(t) {
    const wrap = $("#service-tabs");
    if (!wrap) return;
    wrap.innerHTML = t.services.tabs.map((tab) => `
      <button type="button" class="lg-seg-btn ${state.serviceFilter === tab.id ? "active" : ""}" data-service-tab="${tab.id}">
        ${formatBrandWordmark(tab.label)}
      </button>
    `).join("");
    $$("[data-service-tab]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.serviceFilter = btn.getAttribute("data-service-tab");
        renderServiceTabs(window.SADEN_I18N[state.lang]);
        renderServices(window.SADEN_I18N[state.lang], true);
        bindGlassSpotlights();
        observeRiseCards();
      });
    });
  }

  function renderServices(t, immediateRise = false) {
    const wrap = $("#services-grid");
    if (!wrap) return;
    const filtered = state.serviceFilter === "all"
      ? t.services.items
      : t.services.items.filter((item) => item.category === state.serviceFilter);

    const arrowChar = state.lang === "ar" ? "←" : "→";

    wrap.innerHTML = filtered.map((item, idx) => {
      const catTab = t.services.tabs.find((x) => x.id === item.category);
      const catLabel = catTab ? catTab.label : "";
      return `
      <article class="lg-card lg-card--interactive service-card rise-card" data-service-card="${item.id}" data-rise-delay="${idx * 65}" tabindex="0" role="button">
        <div class="service-card__top">
          <div class="lg-icon">${ICONS[item.icon] || ICONS.blueprint}</div>
          <span class="service-card__cat">${formatBrandWordmark(catLabel)}</span>
        </div>
        <h3 class="service-card__title">${formatBrandWordmark(item.title)}</h3>
        <p class="service-card__desc">${formatBrandWordmark(item.desc)}</p>
        <div class="service-card__tags">
          ${item.tags.map((tg) => `<span class="glass-tag">${formatBrandWordmark(tg)}</span>`).join("")}
        </div>
        <button type="button" class="service-card__action" data-inquire-service="${item.id}">
          <span>${formatBrandWordmark(t.services.inquireBtn)}</span>
          <span>${arrowChar}</span>
        </button>
      </article>
    `;
    }).join("");

    // Clicking card opens Expanded Detail Modal (Point 11)
    $$("[data-service-card]", wrap).forEach((card) => {
      const openServiceModal = () => {
        const sid = card.getAttribute("data-service-card");
        const curr = window.SADEN_I18N[state.lang];
        const item = curr.services.items.find((x) => x.id === sid);
        if (!item) return;
        const catLabel = curr.services.categories[item.category] || "";
        openDetailModal({
          icon: ICONS[item.icon] || ICONS.blueprint,
          eyebrow: catLabel,
          title: item.title,
          paragraphs: [item.desc],
          tags: item.tags,
          ctaText: curr.services.inquireBtn,
          onCta: () => navigateToServiceForm(item.id)
        });
      };
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-inquire-service]")) return;
        openServiceModal();
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openServiceModal(); }
      });
    });

    // Clicking action button goes straight to form
    $$("[data-inquire-service]", wrap).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateToServiceForm(btn.getAttribute("data-inquire-service"));
      });
    });

    if (immediateRise) {
      requestAnimationFrame(() => {
        $$(".rise-card", wrap).forEach((el, idx) => {
          setTimeout(() => el.classList.add("is-risen"), idx * 55);
        });
      });
    }
  }

  function navigateToServiceForm(serviceId) {
    closeDetailModal();
    const select = $("#input-service");
    if (select && serviceId && Array.from(select.options).some((o) => o.value === serviceId)) {
      select.value = serviceId;
      select.classList.toggle("is-placeholder", select.value === "");
    }
    const contact = $("#contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  }

  function renderDualCoreBullets(t) {
    const comm = $("#core-commercial-list");
    const med = $("#core-media-list");
    if (comm) comm.innerHTML = t.model.commercial.bullets.map((b) => `<li>${formatBrandWordmark(b)}</li>`).join("");
    if (med) med.innerHTML = t.model.media.bullets.map((b) => `<li>${formatBrandWordmark(b)}</li>`).join("");
  }

  function renderPersonaTabs(t) {
    const wrap = $("#persona-tabs");
    if (!wrap) return;
    wrap.innerHTML = t.model.personas.map((p) => `
      <button type="button" class="lg-seg-btn ${state.personaId === p.id ? "active" : ""}" data-persona="${p.id}">
        ${formatBrandWordmark(p.tab)}
      </button>
    `).join("");
    $$("[data-persona]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.personaId = btn.getAttribute("data-persona");
        renderPersonaTabs(window.SADEN_I18N[state.lang]);
        renderPersonaPanel(window.SADEN_I18N[state.lang]);
      });
    });
  }

  function renderPersonaPanel(t) {
    const wrap = $("#persona-panel");
    if (!wrap) return;
    const p = t.model.personas.find((x) => x.id === state.personaId) || t.model.personas[0];
    wrap.innerHTML = `
      <div class="audience-quote-card">
        <div>
          <span class="lg-pill" style="margin-bottom: 10px;"><span class="lg-pill__dot"></span>${formatBrandWordmark(p.category)} · ${formatBrandWordmark(p.role)}</span>
          <div class="audience-quote-text">${formatBrandWordmark(p.quote)}</div>
        </div>
      </div>
      <div class="audience-detail-card">
        <h4>${formatBrandWordmark(t.model.painLabel)}</h4>
        <p>${formatBrandWordmark(p.pain)}</p>
      </div>
      <div class="audience-detail-card">
        <h4>${formatBrandWordmark(t.model.valueLabel)}</h4>
        <p>${formatBrandWordmark(p.value)}</p>
      </div>
    `;
  }

  // Section 04 — Emblem Anatomy
  function setAnatomyFocus(layerId, fullSelected = false) {
    state.activeLayer = layerId;
    state.fullEmblemSelected = Boolean(!layerId && fullSelected);

    const svg = $("#anatomy-svg");
    const resetBtn = $("#anatomy-reset");
    const capTitle = $("#anatomy-caption-title");
    const capSub = $("#anatomy-caption-sub");
    const t = window.SADEN_I18N[state.lang];

    if (svg) {
      svg.classList.toggle("has-focus", Boolean(layerId));
      svg.classList.toggle("is-full-glow", state.fullEmblemSelected);
      $$(".anatomy-layer", svg).forEach((g) => {
        g.classList.toggle("is-active", g.getAttribute("data-layer") === layerId);
      });
    }

    if (resetBtn) {
      resetBtn.classList.toggle("anatomy-btn-active", state.fullEmblemSelected);
    }

    $$(".anatomy-item").forEach((btn) => {
      const isActive = btn.getAttribute("data-layer-btn") === layerId;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-expanded", String(isActive));
    });

    if (capTitle && capSub) {
      if (!layerId) {
        capTitle.innerHTML = formatBrandWordmark(
          state.lang === "ar" ? "شعار سادن الكامل" : "Complete SADEN Emblem"
        );
        capSub.textContent = state.lang === "ar" ? "اضغط على أي رمز لاستعراض هندسته ومعناه" : "Click any layer to isolate & illuminate its geometry";
      } else {
        const found = t.identity.layers.find((l) => l.id === layerId);
        if (found) {
          capTitle.innerHTML = formatBrandWordmark(found.name);
          capSub.innerHTML = formatBrandWordmark(found.pillar);
        }
      }
    }
  }

  function renderAnatomyList(t) {
    const wrap = $("#anatomy-list");
    if (!wrap) return;
    wrap.innerHTML = t.identity.layers.map((layer, idx) => {
      const isActive = state.activeLayer === layer.id;
      return `
      <button type="button" class="lg-card lg-card--interactive anatomy-item ${isActive ? "is-active" : ""}" data-layer-btn="${layer.id}" aria-expanded="${isActive}">
        <span class="anatomy-item__num">0${idx + 1}</span>
        <div class="anatomy-item__content">
          <div class="anatomy-item__pillar">${formatBrandWordmark(layer.pillar)}</div>
          <div class="anatomy-item__title">${formatBrandWordmark(layer.name)}</div>
          <div class="anatomy-item__desc-wrap">
            <div class="anatomy-item__desc">
              <div class="anatomy-item__desc-inner">${formatBrandWordmark(layer.desc)}</div>
            </div>
          </div>
        </div>
      </button>
    `;
    }).join("");

    $$("[data-layer-btn]", wrap).forEach((btn) => {
      const id = btn.getAttribute("data-layer-btn");
      btn.addEventListener("click", () => {
        if (state.activeLayer === id) {
          setAnatomyFocus(null, false);
        } else {
          setAnatomyFocus(id, false);
        }
      });
    });

    setAnatomyFocus(state.activeLayer, state.fullEmblemSelected);
  }

  // Section 05 — Series Cards & Two-Level Series -> Topic Modals (Point 18)
  function renderMedia(t) {
    const wrap = $("#media-grid");
    if (!wrap) return;
    const arrowChar = state.lang === "ar" ? "←" : "→";
    wrap.innerHTML = t.media.pillars.map((item) => `
      <article class="lg-card lg-card--interactive media-card" data-media-open="${item.id}" tabindex="0" role="button">
        <div class="media-card__thumb">
          <img src="${item.image}" alt="${escapeHtml(item.pillar)}" loading="lazy" />
          <div class="media-card__badge-row">
            <span class="media-pill-dark">${item.num} · ${formatBrandWordmark(item.stage)}</span>
            <span class="media-pill-dark">${formatBrandWordmark(item.format)}</span>
          </div>
        </div>
        <div class="media-card__body">
          <h3 class="media-card__title">${formatBrandWordmark(item.pillar)}</h3>
          <p class="media-card__summary">${formatBrandWordmark(item.seriesBrief)}</p>
          <div class="media-card__footer">
            <span>${formatBrandWordmark(t.media.enterSeries)}</span>
            <span>${arrowChar}</span>
          </div>
        </div>
      </article>
    `).join("");

    $$("[data-media-open]", wrap).forEach((card) => {
      const open = () => openSeriesModal(card.getAttribute("data-media-open"));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function populateSeriesModal(seriesId) {
    const t = window.SADEN_I18N[state.lang];
    const series = t.media.pillars.find((p) => p.id === seriesId);
    if (!series) return false;

    const arrowChar = state.lang === "ar" ? "←" : "→";
    $("#modal-img").src = series.image;
    $("#modal-img").alt = series.pillar;
    $("#modal-pillar").innerHTML = formatBrandWordmark(`${series.num} · ${series.stage} — ${series.format}`);
    $("#modal-title").innerHTML = formatBrandWordmark(series.pillar);
    $("#modal-summary").innerHTML = formatBrandWordmark(series.seriesBrief);
    $("#modal-topics-heading").innerHTML = formatBrandWordmark(t.media.topicsHeading);
    $("#modal-close-text").textContent = t.media.close;
    const closeX = $("#modal-close-x");
    if (closeX) {
      closeX.setAttribute("aria-label", t.media.close);
      closeX.setAttribute("title", t.media.close);
    }

    const listEl = $("#modal-topics-list");
    listEl.innerHTML = (series.topics || []).map((tp, idx) => {
      const badgeText = tp.type === "video" ? t.media.videoBadge : t.media.pdfBadge;
      return `
        <button type="button" class="series-topic-item" data-topic-open="${tp.id}">
          <div class="series-topic-item__main">
            <span class="series-topic-item__meta">0${idx + 1} · ${badgeText} · ${tp.duration}</span>
            <span class="series-topic-item__title">${formatBrandWordmark(tp.title)}</span>
          </div>
          <span class="series-topic-item__arrow">${arrowChar}</span>
        </button>
      `;
    }).join("");

    $$("[data-topic-open]", listEl).forEach((btn) => {
      btn.addEventListener("click", () => {
        const topicId = btn.getAttribute("data-topic-open");
        // Show quick unified glowing logo loader before opening the second-level Topic Reader window (Point 5 & 18)
        closeSeriesModal(true);
        playLogoLoaderTransition(() => openTopicModal(series.id, topicId));
      });
    });

    return true;
  }

  // Strict background page scroll lock while any modal is open
  function lockPageScroll() {
    if (document.documentElement.classList.contains("modal-open")) return;
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
    if (sbw > 0) {
      document.body.style.paddingRight = `${sbw}px`;
      const navWrap = $(".navbar-wrap");
      if (navWrap) navWrap.style.paddingRight = `calc(clamp(10px, 3vw, 32px) + ${sbw}px)`;
    }
  }

  function unlockPageScroll() {
    if (state.seriesModalId || state.topicModalState || state.detailModalOpen) return;
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";
    const navWrap = $(".navbar-wrap");
    if (navWrap) navWrap.style.paddingRight = "";
  }

  function resetModalScroll(modalEl) {
    if (!modalEl) return;
    const targets = [
      modalEl.querySelector(".modal-scroll"),
      modalEl.querySelector(".modal-body"),
      modalEl.querySelector(".modal-dialog")
    ];
    targets.forEach((el) => {
      if (el) el.scrollTop = 0;
    });
    requestAnimationFrame(() => {
      targets.forEach((el) => {
        if (el) el.scrollTop = 0;
      });
    });
  }

  function openSeriesModal(seriesId) {
    if (!populateSeriesModal(seriesId)) return;
    state.seriesModalId = seriesId;
    const modal = $("#media-modal");
    modal.classList.add("open");
    resetModalScroll(modal);
    lockPageScroll();
  }

  function closeSeriesModal(keepLock = false) {
    state.seriesModalId = null;
    const modal = $("#media-modal");
    modal.classList.remove("open");
    if (!keepLock) unlockPageScroll();
  }

  function populateTopicModal(seriesId, topicId) {
    const t = window.SADEN_I18N[state.lang];
    const series = t.media.pillars.find((p) => p.id === seriesId);
    const topic = series && (series.topics || []).find((x) => x.id === topicId);
    if (!series || !topic) return false;

    const isVideo = topic.type === "video";
    $("#topic-modal-badge").innerHTML = `<span class="lg-pill__dot"></span>${formatBrandWordmark(series.pillar)} · ${isVideo ? t.media.videoBadge : t.media.pdfBadge}`;
    $("#topic-modal-duration").textContent = topic.duration;
    $("#topic-modal-title").innerHTML = formatBrandWordmark(topic.title);
    $("#topic-modal-details").innerHTML = formatBrandWordmark(topic.details);
    $("#topic-modal-points").innerHTML = (topic.points || []).map((pt) => `<li>${formatBrandWordmark(pt)}</li>`).join("");

    const linkBtn = $("#topic-modal-link");
    if (isVideo) {
      linkBtn.href = topic.url || "https://www.youtube.com/@sadens";
      linkBtn.dataset.linkType = "video";
      linkBtn.textContent = t.media.watchVideoBtn;
    } else {
      linkBtn.href = `viewer.html?series=${encodeURIComponent(series.id)}&topic=${encodeURIComponent(topic.id)}&lang=${state.lang}&theme=${state.theme}`;
      linkBtn.dataset.linkType = "pdf";
      linkBtn.textContent = t.media.openPdfBtn;
    }

    $("#topic-modal-back").textContent = t.media.backToSeries;
    $("#topic-modal-close").textContent = t.media.close;
    return true;
  }

  function openTopicModal(seriesId, topicId) {
    if (!populateTopicModal(seriesId, topicId)) return;
    state.topicModalState = { seriesId, topicId };
    const modal = $("#topic-modal");
    modal.classList.add("open");
    resetModalScroll(modal);
    lockPageScroll();
  }

  function closeTopicModal() {
    state.topicModalState = null;
    $("#topic-modal").classList.remove("open");
    unlockPageScroll();
  }

  // Expanded Card Detail Modal for Section 01 & Section 02 (Points 10 & 11)
  let detailModalCtaHandler = null;

  function openDetailModal({ icon, eyebrow, title, paragraphs = [], quoteBox = null, tags = [], ctaText = null, onCta = null }) {
    const t = window.SADEN_I18N[state.lang];
    $("#detail-modal-icon").innerHTML = icon || ICONS.story;
    $("#detail-modal-eyebrow").innerHTML = formatBrandWordmark(eyebrow || "");
    $("#detail-modal-title").innerHTML = formatBrandWordmark(title || "");

    const contentParts = paragraphs.map((p) => `<p>${formatBrandWordmark(p)}</p>`);
    if (quoteBox) {
      contentParts.push(`
        <div class="promise-box">
          <span class="promise-box__label">${formatBrandWordmark(quoteBox.label)}</span>
          <p class="promise-box__quote">${formatBrandWordmark(quoteBox.quote)}</p>
        </div>
      `);
    }
    $("#detail-modal-content").innerHTML = contentParts.join("");

    const tagsEl = $("#detail-modal-tags");
    tagsEl.innerHTML = tags.map((tg) => `<span class="glass-tag">${formatBrandWordmark(tg)}</span>`).join("");
    tagsEl.style.display = tags.length ? "flex" : "none";

    const ctaBtn = $("#detail-modal-cta");
    detailModalCtaHandler = onCta;
    if (ctaText && onCta) {
      ctaBtn.innerHTML = formatBrandWordmark(ctaText);
      ctaBtn.style.display = "inline-flex";
    } else {
      ctaBtn.style.display = "none";
    }

    $("#detail-modal-close").textContent = t.media.close;
    state.detailModalOpen = true;
    const modal = $("#detail-modal");
    modal.classList.add("open");
    resetModalScroll(modal);
    lockPageScroll();
  }

  function closeDetailModal() {
    state.detailModalOpen = false;
    detailModalCtaHandler = null;
    $("#detail-modal").classList.remove("open");
    unlockPageScroll();
  }

  // Bind click-to-expand on the 4 static Section 01 cards (Story, Archetype, Vision, Mission)
  function bindAboutCards() {
    $$("[data-about-card]").forEach((card) => {
      const open = () => {
        const type = card.getAttribute("data-about-card");
        const curr = window.SADEN_I18N[state.lang];
        if (type === "story") {
          openDetailModal({
            icon: ICONS.story,
            eyebrow: curr.about.eyebrow,
            title: curr.about.storyTitle,
            paragraphs: [curr.about.storyBody1, curr.about.storyBody2]
          });
        } else if (type === "archetype") {
          openDetailModal({
            icon: ICONS.archetype,
            eyebrow: curr.about.archetypeLabel,
            title: curr.about.archetypeTitle,
            paragraphs: [curr.about.archetypeBody],
            quoteBox: { label: curr.about.promiseLabel, quote: curr.about.promiseQuote }
          });
        } else if (type === "vision") {
          openDetailModal({
            icon: ICONS.vision,
            eyebrow: curr.about.eyebrow,
            title: curr.about.visionTitle,
            paragraphs: [curr.about.visionBody]
          });
        } else if (type === "mission") {
          openDetailModal({
            icon: ICONS.mission,
            eyebrow: curr.about.eyebrow,
            title: curr.about.missionTitle,
            paragraphs: [curr.about.missionBody]
          });
        }
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
  }

  // Section 06 Form Options (Exclude "edu-platform" per Point 19, with explicit placeholders)
  function syncSelectPlaceholder(el) {
    if (!el) return;
    el.classList.toggle("is-placeholder", !el.value);
  }

  function renderFormOptions(t) {
    const svc = $("#input-service");
    const scl = $("#input-scale");
    if (svc) {
      const current = svc.value;
      const selectableServices = t.services.items.filter((item) => item.id !== "edu-platform");
      const hasValid = Boolean(current && selectableServices.some((i) => i.id === current));
      svc.innerHTML =
        `<option value="" disabled ${hasValid ? "" : "selected"}>${escapeHtml(t.contact.form.servicePlaceholder)}</option>` +
        selectableServices.map((item) => `<option value="${item.id}">${escapeHtml(item.title)}</option>`).join("");
      svc.value = hasValid ? current : "";
      syncSelectPlaceholder(svc);
    }
    if (scl) {
      const currentScale = scl.value;
      const hasValidScale = currentScale !== "" && Number(currentScale) >= 0 && Number(currentScale) < t.contact.form.scales.length;
      scl.innerHTML =
        `<option value="" disabled ${hasValidScale ? "" : "selected"}>${escapeHtml(t.contact.form.scalePlaceholder)}</option>` +
        t.contact.form.scales.map((s, idx) => `<option value="${idx}">${escapeHtml(s)}</option>`).join("");
      scl.value = hasValidScale ? currentScale : "";
      syncSelectPlaceholder(scl);
    }
    renderPhoneCountryList();
    applySelectedPhoneCountry(state.phoneCountryIso, false);
  }

  // Country Dial Code Selector & Auto-Detection for Phone Input
  let autoDetectPulseTimer = null;

  function normalizeArabicDigits(str) {
    return String(str).replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
  }

  function getCountryByIso(iso) {
    return COUNTRY_CODES.find((c) => c.iso === iso) || COUNTRY_CODES[0];
  }

  function applySelectedPhoneCountry(iso, pulse = false) {
    const country = getCountryByIso(iso);
    state.phoneCountryIso = country.iso;
    const isoEl = $("#phone-code-iso");
    const dialEl = $("#phone-code-dial");
    const phoneInput = $("#input-phone");
    const btn = $("#phone-code-btn");
    if (isoEl) isoEl.textContent = country.iso;
    if (dialEl) dialEl.textContent = country.dial;
    if (phoneInput && country.sample) {
      phoneInput.setAttribute("placeholder", country.sample);
    }
    if (btn && pulse) {
      btn.classList.add("is-auto-detected");
      clearTimeout(autoDetectPulseTimer);
      autoDetectPulseTimer = setTimeout(() => btn.classList.remove("is-auto-detected"), 650);
    }
    // Highlight active option inside menu if rendered
    $$(".phone-code-option").forEach((opt) => {
      const selected = opt.getAttribute("data-iso") === country.iso;
      opt.classList.toggle("is-selected", selected);
      opt.setAttribute("aria-selected", String(selected));
    });
  }

  function renderPhoneCountryList(filter = "") {
    const listEl = $("#phone-code-list");
    if (!listEl) return;
    const q = normalizeArabicDigits(filter).trim().toLowerCase();
    const isAr = state.lang === "ar";
    const matches = COUNTRY_CODES.filter((c) => {
      if (!q) return true;
      return (
        c.ar.toLowerCase().includes(q) ||
        c.en.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q) ||
        c.dial.includes(q) ||
        c.dial.slice(1).includes(q)
      );
    });

    listEl.innerHTML = matches.map((c) => {
      const isSelected = c.iso === state.phoneCountryIso;
      const label = isAr ? c.ar : c.en;
      return `
        <button type="button" class="phone-code-option ${isSelected ? "is-selected" : ""}" role="option" aria-selected="${isSelected}" data-iso="${c.iso}">
          <span class="phone-code-option__left">
            <span class="phone-code-btn__iso">${c.iso}</span>
            <span class="phone-code-option__name">${escapeHtml(label)}</span>
          </span>
          <span class="phone-code-option__dial">${c.dial}</span>
        </button>
      `;
    }).join("");

    $$(".phone-code-option", listEl).forEach((opt) => {
      opt.addEventListener("click", () => {
        applySelectedPhoneCountry(opt.getAttribute("data-iso"), false);
        closePhoneCodeMenu();
        const phoneInput = $("#input-phone");
        if (phoneInput) phoneInput.focus();
      });
    });
  }

  function closePhoneCodeMenu() {
    const menu = $("#phone-code-menu");
    const btn = $("#phone-code-btn");
    const field = $(".form-field--phone");
    if (menu) menu.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (field) field.classList.remove("is-menu-open");
  }

  // Auto-detect country code while typing or pasting directly into the phone number field
  function autoDetectPhoneCountry(inputEl) {
    const raw = normalizeArabicDigits(inputEl.value);
    const trimmed = raw.trimStart();
    if (!trimmed) return;

    // 1. Explicit international prefix: "+" or "00"
    const intlMatch = trimmed.match(/^(\+|00)(\d+)(.*)$/);
    if (intlMatch) {
      const prefix = intlMatch[1];
      const leadingDigits = intlMatch[2];
      const restAfterDigits = intlMatch[3] || "";
      const allDigits = (leadingDigits + restAfterDigits).replace(/\D/g, "");

      // Sort unique dial codes longest-first
      const sorted = [...COUNTRY_CODES].sort((a, b) => b.dial.length - a.dial.length);
      const matched = sorted.find((c) => allDigits.startsWith(c.dial.slice(1)));

      if (matched) {
        const codeDigits = matched.dial.slice(1);
        // Check if user could still be typing a longer dial code (e.g. "+2" -> "+212", "+96" -> "+966")
        const couldBeLonger =
          allDigits.length === codeDigits.length &&
          !restAfterDigits &&
          COUNTRY_CODES.some((c) => {
            const d = c.dial.slice(1);
            return d.length > codeDigits.length && d.startsWith(allDigits);
          });

        if (!couldBeLonger) {
          if (state.phoneCountryIso !== matched.iso) {
            applySelectedPhoneCountry(matched.iso, true);
          }
          // Strip leading +code / 00code once user enters a separator or local digits
          const stripRegex = new RegExp(`^\\s*${prefix === "+" ? "\\+" : "00"}${codeDigits}[\\s\\-]*`);
          if (allDigits.length > codeDigits.length || /^[\s\-]/.test(trimmed.slice(prefix.length + codeDigits.length))) {
            inputEl.value = trimmed.replace(stripRegex, "");
          }
        }
      }
      return;
    }

    // 2. Direct typing without "+" or "00"
    const digitsOnly = trimmed.replace(/\D/g, "");
    if (digitsOnly.length < 3) return;

    // 2a. Bare 3-digit Arab/GCC international codes typed directly (e.g. 9665..., 9715..., 965..., 212...)
    const bare3Match = COUNTRY_CODES.find((c) => {
      const d = c.dial.slice(1);
      return d.length === 3 && digitsOnly.startsWith(d) && digitsOnly.length >= 4;
    });
    if (bare3Match) {
      const d = bare3Match.dial.slice(1);
      if (state.phoneCountryIso !== bare3Match.iso) {
        applySelectedPhoneCountry(bare3Match.iso, true);
      }
      inputEl.value = trimmed.replace(new RegExp(`^${d}[\\s\\-]*`), "");
      return;
    }

    // 2b. Bare Egypt international prefix "2010 / 2011 / 2012 / 2015"
    if (/^201[0125]/.test(digitsOnly) && digitsOnly.length >= 4) {
      if (state.phoneCountryIso !== "EG") {
        applySelectedPhoneCountry("EG", true);
      }
      inputEl.value = trimmed.replace(/^20[\s\-]*/, "");
      return;
    }

    // 2c. Unambiguous local mobile prefixes
    if (/^01[0125]/.test(digitsOnly)) {
      if (state.phoneCountryIso !== "EG") applySelectedPhoneCountry("EG", true);
      return;
    }
    if (/^05[39]/.test(digitsOnly)) {
      if (state.phoneCountryIso !== "SA") applySelectedPhoneCountry("SA", true);
      return;
    }
    if (/^052/.test(digitsOnly)) {
      if (state.phoneCountryIso !== "AE") applySelectedPhoneCountry("AE", true);
    }
  }

  function initPhoneDialSelector() {
    const btn = $("#phone-code-btn");
    const menu = $("#phone-code-menu");
    const search = $("#phone-code-search");
    const phoneInput = $("#input-phone");
    if (!btn || !menu) return;

    renderPhoneCountryList();
    applySelectedPhoneCountry(state.phoneCountryIso, false);

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !menu.classList.contains("open");
      menu.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
      const field = $(".form-field--phone");
      if (field) field.classList.toggle("is-menu-open", willOpen);
      if (willOpen && search) {
        search.value = "";
        renderPhoneCountryList("");
        requestAnimationFrame(() => search.focus());
      }
    });

    if (search) {
      search.addEventListener("input", () => {
        renderPhoneCountryList(search.value);
      });
      search.addEventListener("click", (e) => e.stopPropagation());
    }

    if (phoneInput) {
      phoneInput.addEventListener("input", () => autoDetectPhoneCountry(phoneInput));
    }

    document.addEventListener("click", (e) => {
      if (menu.classList.contains("open") && !menu.contains(e.target) && !btn.contains(e.target)) {
        closePhoneCodeMenu();
      }
    });
  }

  // Interactive pointer-tracking Liquid Glass specular highlight
  function bindGlassSpotlights() {
    $$(".lg-card").forEach((card) => {
      if (card.dataset.spotlightBound) return;
      card.dataset.spotlightBound = "1";
      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    });
  }

  // Scroll-from-below observer for Section 01 & Section 02 cards (Points 10 & 11)
  let riseObserver = null;
  function revealVisibleElementsFallback() {
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    $$(".reveal:not(.in-view)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 1.05 && rect.bottom > -40) {
        el.classList.add("in-view");
      }
    });
    $$(".rise-card:not(.is-risen)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 1.05 && rect.bottom > -40) {
        el.classList.add("is-risen");
      }
    });
  }

  function observeRiseCards() {
    if (typeof window.IntersectionObserver === "undefined") {
      $$(".rise-card:not(.is-risen)").forEach((el) => el.classList.add("is-risen"));
      return;
    }
    if (!riseObserver) {
      riseObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = parseInt(entry.target.getAttribute("data-rise-delay") || "0", 10);
              setTimeout(() => entry.target.classList.add("is-risen"), delay);
              riseObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px -10px 0px" }
      );
    }
    $$(".rise-card:not(.is-risen)").forEach((el, idx) => {
      if (!el.hasAttribute("data-rise-delay")) {
        el.setAttribute("data-rise-delay", String((idx % 4) * 80));
      }
      riseObserver.observe(el);
    });
    revealVisibleElementsFallback();
  }

  // Hero 180-deg Flip + Opposite Text Entrance Choreography (Point 9)
  let heroTimers = [];
  function resetHeroEntrance() {
    heroTimers.forEach(clearTimeout);
    heroTimers = [];
    const vis = $("#hero-visual");
    const txt = $("#hero-content");
    if (vis) vis.classList.remove("is-entered", "is-settled");
    if (txt) txt.classList.remove("is-entered");
  }

  function triggerHeroEntrance() {
    heroTimers.forEach(clearTimeout);
    heroTimers = [];
    const vis = $("#hero-visual");
    const txt = $("#hero-content");
    if (!vis || !txt) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      vis.classList.add("is-entered", "is-settled");
      txt.classList.add("is-entered");
      return;
    }

    requestAnimationFrame(() => {
      vis.classList.add("is-entered");
      txt.classList.add("is-entered");
      // Reveal "صورة افتراضية / Virtual Image" once the 180° flip settles in place
      heroTimers.push(setTimeout(() => {
        vis.classList.add("is-settled");
      }, 980));
    });
  }

  // Scroll Reveal + Navbar Scroll State + Active Section Highlighting
  function initScrollBehaviors() {
    const navbar = $("#navbar");
    const sections = $$("section[id]");
    const navLinks = $$(".nav-links .nav-link, #mobile-drawer .nav-link");

    const onScroll = () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 24);
      const bar = $("#scroll-progress");
      if (bar) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = maxScroll > 0 ? `${Math.min(100, (window.scrollY / maxScroll) * 100)}%` : "0%";
      }
      const scrollPos = window.scrollY + 180;
      let currentId = "";
      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop) currentId = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
      });
      revealVisibleElementsFallback();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", revealVisibleElementsFallback, { passive: true });
    onScroll();

    if (typeof window.IntersectionObserver === "undefined") {
      $$(".reveal").forEach((el) => el.classList.add("in-view"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px -10px 0px" }
      );
      $$(".reveal").forEach((el) => observer.observe(el));
    }
    observeRiseCards();
  }

  // =========================================================================
  // SIGNATURE GLOWING GEOMETRIC LOGO INTRO, REPLAY & UNIFIED LOADER (Point 5)
  // =========================================================================
  let logoIntroTimers = [];
  let isLogoAnimating = false;

  function buildIntroLogoSVG() {
    const L = window.SADEN_LOGO;
    const orderedLayers = ["building", "hands", "infinity", "arrow", "eye"];

    const strokePaths = [];
    orderedLayers.forEach((layerKey, layerIdx) => {
      L.layers[layerKey].forEach((d) => {
        strokePaths.push(`<path class="intro-stroke-path" data-seq="${layerIdx}" d="${d}"/>`);
      });
    });

    const fillPaths = flattenLayerPaths(L.layers).map((d) => `<path d="${d}"/>`).join("");

    return `
      <svg class="logo-intro-svg" viewBox="${L.symbolViewBox}" fill="none" aria-hidden="true">
        <defs>
          <filter id="saden-line-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.6" result="blur1" />
            <feGaussianBlur stdDeviation="6.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g class="intro-fill-group">
          ${fillPaths}
        </g>
        <g class="intro-stroke-group" filter="url(#saden-line-glow)">
          ${strokePaths.join("")}
        </g>
      </svg>
    `;
  }

  function finishLogoIntroImmediately(runHero = false) {
    logoIntroTimers.forEach(clearTimeout);
    logoIntroTimers = [];
    const overlay = $("#logo-intro-overlay");
    const stage = $("#logo-intro-stage");
    const navBrand = $("#nav-brand-logo");
    if (overlay) overlay.classList.remove("is-active", "is-docking");
    if (stage) {
      stage.classList.remove("is-flying");
      stage.style.transform = "";
    }
    if (navBrand) navBrand.classList.remove("is-hidden-for-intro");
    isLogoAnimating = false;
    if (runHero) triggerHeroEntrance();
  }

  // Full Intro / Header-Click Replay Animation (with Hero 180° entrance hook)
  function playLogoIntroAnimation(withHeroReplay = true) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (withHeroReplay) triggerHeroEntrance();
      return;
    }
    if (isLogoAnimating) return;

    const overlay = $("#logo-intro-overlay");
    const stage = $("#logo-intro-stage");
    const navBrand = $("#nav-brand-logo");
    const navSvg = navBrand ? navBrand.querySelector(".nav-brand-symbol") : null;
    if (!overlay || !stage || !navBrand || !navSvg) {
      if (withHeroReplay) triggerHeroEntrance();
      return;
    }

    isLogoAnimating = true;
    logoIntroTimers.forEach(clearTimeout);
    logoIntroTimers = [];
    if (withHeroReplay) resetHeroEntrance();

    stage.classList.remove("is-flying");
    stage.style.transform = "translate3d(0, 0, 0) scale(1)";
    stage.innerHTML = buildIntroLogoSVG();

    const guides = overlay.querySelector(".logo-intro-guides");
    if (guides) {
      const clone = guides.cloneNode(true);
      guides.parentNode.replaceChild(clone, guides);
    }

    overlay.classList.remove("is-docking");
    overlay.classList.add("is-active");
    navBrand.classList.add("is-hidden-for-intro");

    const strokePaths = $$(".intro-stroke-path", stage);
    strokePaths.forEach((path) => {
      let len = 360;
      try {
        len = path.getTotalLength() || 360;
      } catch (e) {}
      path.style.transition = "none";
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    });

    stage.getBoundingClientRect();

    requestAnimationFrame(() => {
      strokePaths.forEach((path) => {
        const seq = parseInt(path.getAttribute("data-seq") || "0", 10);
        const delay = seq * 130;
        path.style.transition = `stroke-dashoffset 840ms cubic-bezier(0.35, 0, 0.2, 1) ${delay}ms`;
        path.style.strokeDashoffset = "0";
      });
    });

    logoIntroTimers.push(setTimeout(() => {
      const fillGroup = stage.querySelector(".intro-fill-group");
      const strokeGroup = stage.querySelector(".intro-stroke-group");
      if (fillGroup) fillGroup.classList.add("is-visible");
      if (strokeGroup) strokeGroup.classList.add("is-faded");
    }, 980));

    logoIntroTimers.push(setTimeout(() => {
      const introSvg = stage.querySelector(".logo-intro-svg");
      const targetSvg = navBrand.querySelector(".nav-brand-symbol");
      if (!introSvg || !targetSvg) {
        finishLogoIntroImmediately(withHeroReplay);
        return;
      }

      const startRect = introSvg.getBoundingClientRect();
      const targetRect = targetSvg.getBoundingClientRect();
      if (!startRect.width || !targetRect.width) {
        finishLogoIntroImmediately(withHeroReplay);
        return;
      }

      const dx = (targetRect.left + targetRect.width / 2) - (startRect.left + startRect.width / 2);
      const dy = (targetRect.top + targetRect.height / 2) - (startRect.top + startRect.height / 2);
      const scale = targetRect.width / startRect.width;

      overlay.classList.add("is-docking");
      stage.classList.add("is-flying");
      stage.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;

      // Start Hero 180° entrance smoothly as the veil clears!
      if (withHeroReplay) {
        logoIntroTimers.push(setTimeout(() => triggerHeroEntrance(), 240));
      }
    }, 1440));

    logoIntroTimers.push(setTimeout(() => {
      navBrand.classList.remove("is-hidden-for-intro");
      overlay.classList.remove("is-active", "is-docking");
      stage.classList.remove("is-flying");
      stage.style.transform = "";
      isLogoAnimating = false;
    }, 2240));
  }

  // Quick Unified Glowing Logo Loader for in-app loading actions (form submission, opening topic views)
  function playLogoLoaderTransition(onComplete) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (onComplete) onComplete();
      return;
    }
    if (isLogoAnimating) {
      if (onComplete) onComplete();
      return;
    }

    const overlay = $("#logo-intro-overlay");
    const stage = $("#logo-intro-stage");
    if (!overlay || !stage) {
      if (onComplete) onComplete();
      return;
    }

    isLogoAnimating = true;
    logoIntroTimers.forEach(clearTimeout);
    logoIntroTimers = [];

    stage.classList.remove("is-flying");
    stage.style.transform = "translate3d(0, 0, 0) scale(0.86)";
    stage.innerHTML = buildIntroLogoSVG();

    const guides = overlay.querySelector(".logo-intro-guides");
    if (guides) {
      const clone = guides.cloneNode(true);
      guides.parentNode.replaceChild(clone, guides);
    }

    overlay.classList.remove("is-docking");
    overlay.classList.add("is-active");

    const strokePaths = $$(".intro-stroke-path", stage);
    strokePaths.forEach((path) => {
      let len = 360;
      try {
        len = path.getTotalLength() || 360;
      } catch (e) {}
      path.style.transition = "none";
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    });

    stage.getBoundingClientRect();

    requestAnimationFrame(() => {
      strokePaths.forEach((path) => {
        const seq = parseInt(path.getAttribute("data-seq") || "0", 10);
        path.style.transition = `stroke-dashoffset 480ms cubic-bezier(0.35, 0, 0.2, 1) ${seq * 55}ms`;
        path.style.strokeDashoffset = "0";
      });
    });

    logoIntroTimers.push(setTimeout(() => {
      const fillGroup = stage.querySelector(".intro-fill-group");
      const strokeGroup = stage.querySelector(".intro-stroke-group");
      if (fillGroup) fillGroup.classList.add("is-visible");
      if (strokeGroup) strokeGroup.classList.add("is-faded");
    }, 520));

    logoIntroTimers.push(setTimeout(() => {
      overlay.classList.add("is-docking");
      if (onComplete) onComplete();
    }, 820));

    logoIntroTimers.push(setTimeout(() => {
      overlay.classList.remove("is-active", "is-docking");
      stage.style.transform = "";
      isLogoAnimating = false;
    }, 1180));
  }

  // Event Bindings
  function initEvents() {
    const handleLogoReplayClick = (e) => {
      e.preventDefault();
      playLogoIntroAnimation(true);
      if (isLogoAnimating) {
        window.scrollTo(0, 0);
      } else {
        try {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
          window.scrollTo(0, 0);
        }
      }
      if (window.location.hash) {
        try {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        } catch (err) {}
      }
    };

    const navBrand = $("#nav-brand-logo");
    if (navBrand) navBrand.addEventListener("click", handleLogoReplayClick);

    const footerBrand = $("#footer-brand-logo");
    if (footerBrand) footerBrand.addEventListener("click", handleLogoReplayClick);

    // Theme toggle
    const themeBtn = $("#theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    }

    // Language toggle preserving exact viewport scroll position (Point 14)
    const langBtn = $("#lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        applyLang(state.lang === "ar" ? "en" : "ar", true);
      });
    }

    // Mobile & Tablet drawer
    const menuBtn = $("#menu-toggle");
    const drawer = $("#mobile-drawer");
    const closeDrawer = () => {
      if (!drawer || !menuBtn) return;
      drawer.classList.remove("open");
      menuBtn.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    };
    if (menuBtn && drawer) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = drawer.classList.toggle("open");
        menuBtn.classList.toggle("is-open", isOpen);
        menuBtn.setAttribute("aria-expanded", String(isOpen));
      });
      $$("a", drawer).forEach((a) => a.addEventListener("click", closeDrawer));
      document.addEventListener("click", (e) => {
        if (drawer.classList.contains("open") && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
          closeDrawer();
        }
      });
      window.addEventListener("resize", () => {
        const breakpoint = state.lang === "en" ? 1240 : 1160;
        if (window.innerWidth > breakpoint) closeDrawer();
      });
    }

    // Section 04 Show Full Emblem toggle
    const resetAnatomyBtn = $("#anatomy-reset");
    if (resetAnatomyBtn) {
      resetAnatomyBtn.addEventListener("click", () => {
        setAnatomyFocus(null, !state.fullEmblemSelected);
      });
    }

    // Series Modal events
    const mediaModal = $("#media-modal");
    if (mediaModal) {
      mediaModal.addEventListener("click", (e) => {
        if (e.target === mediaModal) closeSeriesModal();
      });
    }
    const modalCloseBtn = $("#modal-close");
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => closeSeriesModal());
    const modalCloseX = $("#modal-close-x");
    if (modalCloseX) modalCloseX.addEventListener("click", () => closeSeriesModal());

    // Prevent wheel/touch scrolling on darkened modal backdrops from ever moving the background page
    $$(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("wheel", (e) => {
        if (e.target === backdrop) e.preventDefault();
      }, { passive: false });
      backdrop.addEventListener("touchmove", (e) => {
        if (e.target === backdrop) e.preventDefault();
      }, { passive: false });
    });

    // Topic Reader Modal events
    const topicModal = $("#topic-modal");
    if (topicModal) {
      topicModal.addEventListener("click", (e) => {
        if (e.target === topicModal) closeTopicModal();
      });
    }
    const topicCloseBtn = $("#topic-modal-close");
    if (topicCloseBtn) topicCloseBtn.addEventListener("click", closeTopicModal);
    const topicBackBtn = $("#topic-modal-back");
    if (topicBackBtn) {
      topicBackBtn.addEventListener("click", () => {
        const sid = state.topicModalState ? state.topicModalState.seriesId : null;
        closeTopicModal();
        if (sid) openSeriesModal(sid);
      });
    }
    const topicLinkBtn = $("#topic-modal-link");
    if (topicLinkBtn) {
      topicLinkBtn.addEventListener("click", (e) => {
        if (topicLinkBtn.dataset.linkType === "pdf") {
          e.preventDefault();
          // Open via window.open (same-origin) so "Back to Website" cleanly closes the PDF tab and returns to this tab
          window.open(topicLinkBtn.href, "_blank");
        }
      });
    }

    // Expanded Card Detail Modal events (Section 01 & Section 02)
    const detailModal = $("#detail-modal");
    if (detailModal) {
      detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) closeDetailModal();
      });
    }
    const detailCloseBtn = $("#detail-modal-close");
    if (detailCloseBtn) detailCloseBtn.addEventListener("click", closeDetailModal);
    const detailCtaBtn = $("#detail-modal-cta");
    if (detailCtaBtn) {
      detailCtaBtn.addEventListener("click", () => {
        if (detailModalCtaHandler) detailModalCtaHandler();
      });
    }

    // Escape closes active overlays
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (state.topicModalState) closeTopicModal();
        else if (state.seriesModalId) closeSeriesModal();
        if (state.detailModalOpen) closeDetailModal();
        if (isLogoAnimating) finishLogoIntroImmediately(true);
        closePhoneCodeMenu();
        closeDrawer();
      }
    });

    // Contact form select placeholder styling & phone dial code selector
    initPhoneDialSelector();
    const scaleSelect = $("#input-scale");
    const serviceSelect = $("#input-service");
    if (scaleSelect) scaleSelect.addEventListener("change", () => syncSelectPlaceholder(scaleSelect));
    if (serviceSelect) serviceSelect.addEventListener("change", () => syncSelectPlaceholder(serviceSelect));

    // Contact form submission uses unified glowing geometric logo loader (Point 5)
    const form = $("#contact-form");
    const successBox = $("#form-success");
    const resetFormBtn = $("#form-reset");
    if (form && successBox) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        playLogoLoaderTransition(() => {
          form.style.display = "none";
          successBox.classList.add("visible");
        });
      });
    }
    if (resetFormBtn && form && successBox) {
      resetFormBtn.addEventListener("click", () => {
        form.reset();
        if (scaleSelect) { scaleSelect.value = ""; syncSelectPlaceholder(scaleSelect); }
        if (serviceSelect) { serviceSelect.value = ""; syncSelectPlaceholder(serviceSelect); }
        applySelectedPhoneCountry("EG", false);
        successBox.classList.remove("visible");
        form.style.display = "block";
      });
    }
  }

  // Boot (works whether DOMContentLoaded has already fired or not)
  function boot() {
    document.documentElement.classList.add("js-ready");
    try {
      injectBrandLogos();
      applyTheme(state.theme);
      applyLang(state.lang, false);
      bindAboutCards();
      initEvents();
      initScrollBehaviors();
      // Play signature glowing geometric logo intro & dock into header, followed by Hero 180° entrance
      requestAnimationFrame(() => playLogoIntroAnimation(true));
    } catch (err) {
      // Fail-safe: ensure page content is never hidden if an unexpected browser quirk occurs
      finishLogoIntroImmediately(true);
      $$(".reveal").forEach((el) => el.classList.add("in-view"));
      $$(".rise-card").forEach((el) => el.classList.add("is-risen"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
