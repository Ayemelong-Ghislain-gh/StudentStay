/* ==========================================================================
   js/shared.js
   Code shared by every StudentStay page: the language-select modal, the
   dark/light theme toggle, the floating feedback widget, and small utility
   functions (escapeHtml, showToast, formatPrice, getRoomPricing).

   Load this AFTER js/languages.js and BEFORE any page-specific <script>
   that calls the functions below:
     <script src="js/languages.js"></script>
     <script src="js/shared.js"></script>

   Pages that require login before sending feedback (admin, dashboard) opt
   in with:  <body data-feedback-auth="required">
   ========================================================================== */

/* --------------------------------------------------------------------------
   Utility: escapeHtml — prevents XSS when interpolating user content into
   innerHTML template strings.
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* --------------------------------------------------------------------------
   Utility: formatPrice — turns a number into a "12,000 FCFA" string.
   formatFCFA is kept as an alias since existing page scripts call it.
   -------------------------------------------------------------------------- */
function formatPrice(amount) {
  return `${Math.round(amount || 0).toLocaleString()} FCFA`;
}
const formatFCFA = formatPrice;

/* --------------------------------------------------------------------------
   Utility: withTimeout — races a promise against a timer so a hung request
   (e.g. a stuck network call or auth lock) fails fast with a clear error
   after `ms` milliseconds instead of leaving the UI stuck forever.
   -------------------------------------------------------------------------- */
function withTimeout(promise, ms = 10000, label = 'Request') {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms / 1000}s`)), ms)
    )
  ]);
}

/* --------------------------------------------------------------------------
   Utility: getRoomPricing — normalizes a room's pricing fields (monthly,
   yearly, or both) into the shape every listing/detail page renders from.
   -------------------------------------------------------------------------- */
function getRoomPricing(room) {
  const pricingType = room.pricingType || 'monthly';
  const monthlyPrice = room.monthlyPrice || room.price || 0;
  const yearlyPrice = room.yearlyPrice || Math.round(monthlyPrice * 9) || 0;
  const yearlyEquivalent = Math.round(monthlyPrice * 9);
  const savings = Math.max(0, (monthlyPrice * 12) - yearlyPrice);
  return { pricingType, monthlyPrice, yearlyPrice, yearlyEquivalent, savings };
}

/* --------------------------------------------------------------------------
   Utility: showToast — lightweight, non-blocking notification (replaces
   alert() for status messages). type: 'info' | 'success' | 'error'.
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  const colors = {
    info: '#334155',
    success: '#22C55E',
    error: '#EF4444'
  };
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:10000;display:flex;flex-direction:column;gap:8px;align-items:center;pointer-events:none;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `background:${colors[type] || colors.info};color:white;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;box-shadow:0 4px 12px rgba(0,0,0,0.3);opacity:0;transform:translateY(10px);transition:opacity 0.2s ease,transform 0.2s ease;max-width:90vw;text-align:center;`;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}

/* --------------------------------------------------------------------------
   Shared CSS: language modal, .nav-btn, and the dark/light theme rules that
   are identical on every page (base nav + mobile-menu overrides). Injected
   as a <style> tag so it only has to be maintained in one place.
   -------------------------------------------------------------------------- */
(function injectSharedStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-btn {
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s;
      font-weight: 500;
    }
    .nav-btn:hover {
      background-color: #22C55E;
      color: white !important;
    }

    body.light-mode nav,
    body.light-mode .bg-slate-900\\/90 {
      background-color: #0F172A !important;
    }
    body.light-mode nav .text-white,
    body.light-mode nav .text-slate-300,
    body.light-mode nav h1,
    body.light-mode nav p,
    body.light-mode nav a,
    body.light-mode nav button {
      color: #FFFFFF !important;
    }
    body.light-mode #mobileMenu {
      background-color: #1E293B !important;
    }
    body.light-mode #mobileMenu a,
    body.light-mode #mobileMenu button {
      color: #FFFFFF !important;
    }

    /* Language Selection Modal */
    .lang-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: all 0.3s ease;
    }
    .lang-modal {
        background: #1E293B;
        border-radius: 24px;
        padding: 32px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        border: 1px solid #334155;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: modalFadeIn 0.3s ease;
    }
    body.light-mode .lang-modal {
        background: #FFFFFF;
        border-color: #E5E7EB;
    }
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    .lang-flag {
        font-size: 48px;
        margin-bottom: 16px;
    }
    .lang-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    .lang-subtitle {
        font-size: 14px;
        color: #94A3B8;
        margin-bottom: 24px;
    }
    .lang-buttons {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .lang-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px 24px;
        background: #334155;
        border: 2px solid #475569;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 120px;
    }
    .lang-btn:hover {
        transform: translateY(-2px);
        border-color: #22C55E;
        background: #22C55E20;
    }
    .lang-btn-flag {
        font-size: 32px;
    }
    .lang-btn-text {
        font-size: 18px;
        font-weight: 600;
    }
    .lang-btn-sub {
        font-size: 12px;
        color: #94A3B8;
    }
    body.light-mode .lang-btn {
        background: #F3F4F6;
        border-color: #E5E7EB;
    }
    body.light-mode .lang-btn:hover {
        background: #22C55E10;
        border-color: #22C55E;
    }
    .hidden-modal {
        display: none !important;
    }

    /* ----------------------------------------------------------------
       Loading indicators: spinners, full-page overlay, button loading
       state, skeleton cards, and per-image upload status badges.
       ---------------------------------------------------------------- */
    @keyframes ss-spin {
      to { transform: rotate(360deg); }
    }
    .ss-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255,255,255,0.35);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: ss-spin 0.7s linear infinite;
      vertical-align: middle;
    }
    .ss-spinner.ss-spinner-dark {
      border-color: rgba(15,23,42,0.25);
      border-top-color: #0F172A;
    }
    .ss-spinner-lg {
      width: 40px;
      height: 40px;
      border-width: 4px;
    }

    /* Full page loader overlay */
    #ssPageLoader {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(2px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      z-index: 10050;
    }
    #ssPageLoader .ss-page-loader-text {
      color: #F1F5F9;
      font-size: 14px;
      font-weight: 600;
    }

    /* Button loading state */
    .ss-btn-loading {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      gap: 8px;
      opacity: 0.85;
      cursor: not-allowed !important;
      pointer-events: none;
    }

    /* Skeleton cards (mimics the .card room-card layout) */
    @keyframes ss-skeleton-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .ss-skeleton-card {
      background-color: #1E293B;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #334155;
    }
    body.light-mode .ss-skeleton-card {
      background-color: #FFFFFF;
      border-color: #E5E7EB;
    }
    .ss-skeleton-block {
      background: #334155;
      border-radius: 6px;
      animation: ss-skeleton-pulse 1.4s ease-in-out infinite;
    }
    body.light-mode .ss-skeleton-block {
      background: #E5E7EB;
    }
    .ss-skeleton-img { width: 100%; height: 192px; border-radius: 0; }
    .ss-skeleton-line { height: 14px; margin-top: 10px; }

    /* Per-image upload status badge (post-room / edit-room previews) */
    .ss-upload-overlay {
      position: absolute;
      inset: 0;
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.55);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ss-upload-overlay.ss-upload-done {
      background: rgba(34, 197, 94, 0.55);
      color: white;
      font-size: 20px;
      font-weight: 700;
    }
    .ss-upload-overlay.ss-upload-error {
      background: rgba(239, 68, 68, 0.6);
      color: white;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      padding: 4px;
    }
  `;
  document.head.appendChild(style);
})();

/* --------------------------------------------------------------------------
   Loading indicator helpers
   -------------------------------------------------------------------------- */

/* Full page loader overlay — showPageLoader('Creating room...') / hidePageLoader() */
function showPageLoader(message = 'Loading...') {
  hidePageLoader();
  const overlay = document.createElement('div');
  overlay.id = 'ssPageLoader';
  overlay.innerHTML = `
    <div class="ss-spinner ss-spinner-lg"></div>
    <div class="ss-page-loader-text">${escapeHtml(message)}</div>
  `;
  document.body.appendChild(overlay);
}

function hidePageLoader() {
  document.getElementById('ssPageLoader')?.remove();
}

/* Button loader — replaces a button's text with a spinner + label.
   setButtonLoading(btn, true, 'Logging in...') to start,
   setButtonLoading(btn, false) to restore the button's original content. */
function setButtonLoading(button, isLoading, loadingText = 'Loading...') {
  if (!button) return;
  if (isLoading) {
    if (button.dataset.ssOriginalHtml === undefined) {
      button.dataset.ssOriginalHtml = button.innerHTML;
    }
    button.disabled = true;
    button.classList.add('ss-btn-loading');
    button.innerHTML = `<span class="ss-spinner"></span><span>${escapeHtml(loadingText)}</span>`;
  } else {
    button.disabled = false;
    button.classList.remove('ss-btn-loading');
    if (button.dataset.ssOriginalHtml !== undefined) {
      button.innerHTML = button.dataset.ssOriginalHtml;
      delete button.dataset.ssOriginalHtml;
    }
  }
}

/* Skeleton loader for room cards — getSkeletonCards(6) returns an HTML
   string of placeholder cards to drop into a rooms grid while it loads. */
function getSkeletonCards(count = 6) {
  const card = `
    <div class="ss-skeleton-card">
      <div class="ss-skeleton-block ss-skeleton-img"></div>
      <div class="p-4">
        <div class="ss-skeleton-block ss-skeleton-line" style="width:40%;"></div>
        <div class="ss-skeleton-block ss-skeleton-line" style="width:70%;"></div>
        <div class="ss-skeleton-block ss-skeleton-line" style="width:55%;"></div>
        <div class="ss-skeleton-block ss-skeleton-line" style="width:100%; height:36px; margin-top:14px;"></div>
      </div>
    </div>
  `;
  return card.repeat(count);
}

/* Per-image upload status overlay for image previews — call with the
   image's wrapper element (position:relative) and a state of
   'uploading' | 'done' | 'error' | null (null clears the overlay). */
function setImageUploadStatus(wrapperEl, state) {
  if (!wrapperEl) return;
  wrapperEl.querySelector('.ss-upload-overlay')?.remove();
  if (!state) return;
  const overlay = document.createElement('div');
  if (state === 'uploading') {
    overlay.className = 'ss-upload-overlay';
    overlay.innerHTML = '<span class="ss-spinner"></span>';
  } else if (state === 'done') {
    overlay.className = 'ss-upload-overlay ss-upload-done';
    overlay.textContent = '✓';
  } else if (state === 'error') {
    overlay.className = 'ss-upload-overlay ss-upload-error';
    overlay.textContent = 'Failed';
  }
  wrapperEl.appendChild(overlay);
}

/* --------------------------------------------------------------------------
   Language modal markup — injected at the top of <body>. selectLanguage()
   itself (and the FR/EN translation engine) lives in js/languages.js; this
   just supplies the DOM node that function operates on.
   -------------------------------------------------------------------------- */
const LANGUAGE_MODAL_HTML = `
  <div id="languageModal" class="lang-modal-overlay">
      <div class="lang-modal">
          <div class="lang-flag">🇨🇲</div>
          <h2 class="lang-title" data-i18n="modalWelcome">Welcome to StudentStay</h2>
          <p class="lang-subtitle" data-i18n="modalSubtitle">Bienvenue sur StudentStay</p>
          <div class="lang-buttons">
              <div class="lang-btn" onclick="selectLanguage('en')">
                  <div class="lang-btn-flag">🇬🇧</div>
                  <div class="lang-btn-text" data-i18n="modalEnglish">English</div>
                  <div class="lang-btn-sub" data-i18n="modalEnglishSub">Continue in English</div>
              </div>
              <div class="lang-btn" onclick="selectLanguage('fr')">
                  <div class="lang-btn-flag">🇫🇷</div>
                  <div class="lang-btn-text" data-i18n="modalFrench">Français</div>
                  <div class="lang-btn-sub" data-i18n="modalFrenchSub">Continuer en français</div>
              </div>
          </div>
      </div>
  </div>
`;

/* --------------------------------------------------------------------------
   Dark/light mode toggle — reads/writes localStorage('theme') and wires up
   #darkModeToggle / #mobileDarkModeToggle if the page has them.
   -------------------------------------------------------------------------- */
function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
}

function initDarkMode() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') setDarkMode(false);
  else setDarkMode(true);

  document.getElementById('darkModeToggle')?.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('light-mode');
    setDarkMode(!isDark);
  });
  document.getElementById('mobileDarkModeToggle')?.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('light-mode');
    setDarkMode(!isDark);
  });
}

/* --------------------------------------------------------------------------
   Feedback widget — floating 💡 button + panel that inserts a row into the
   `feedback` table. Pass requireAuth: true on pages where only logged-in
   users may submit (the panel is driven off <body data-feedback-auth>).
   -------------------------------------------------------------------------- */
const FEEDBACK_WIDGET_HTML = `
<div id="feedbackWidget">
  <button id="feedbackFab" aria-label="Suggest an idea" style="position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background:#22C55E;color:white;border:none;box-shadow:0 4px 12px rgba(0,0,0,0.3);font-size:24px;cursor:pointer;z-index:9998;display:flex;align-items:center;justify-content:center;">💡</button>
  <div id="feedbackPanel" style="display:none;position:fixed;bottom:88px;right:20px;width:300px;max-width:calc(100vw - 40px);background:#1e293b;border:1px solid #334155;border-radius:12px;padding:16px;box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:9999;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
      <span style="color:white;font-weight:600;font-size:14px;">Got an idea?</span>
      <button id="feedbackClose" aria-label="Close" style="background:none;border:none;color:#94a3b8;font-size:18px;cursor:pointer;line-height:1;">&times;</button>
    </div>
    <p style="color:#94a3b8;font-size:12px;margin:0 0 10px;">Tell the developers what would make this app better.</p>
    <textarea id="feedbackText" rows="4" placeholder="Your suggestion..." style="width:100%;background:#0f172a;border:1px solid #334155;color:white;border-radius:8px;padding:8px;font-size:13px;resize:none;box-sizing:border-box;"></textarea>
    <button id="feedbackSubmit" style="width:100%;margin-top:8px;background:#22C55E;color:white;border:none;border-radius:8px;padding:10px;font-size:13px;font-weight:600;cursor:pointer;">Send suggestion</button>
    <div id="feedbackMsg" style="display:none;color:#4ade80;font-size:12px;margin-top:8px;text-align:center;">Thanks! Your idea was sent.</div>
  </div>
</div>
`;

function initFeedbackWidget(options = {}) {
  document.body.insertAdjacentHTML('beforeend', FEEDBACK_WIDGET_HTML);

  const requireAuth = !!options.requireAuth;
  const fab = document.getElementById('feedbackFab');
  const panel = document.getElementById('feedbackPanel');
  const closeBtn = document.getElementById('feedbackClose');
  const submitBtn = document.getElementById('feedbackSubmit');
  const textarea = document.getElementById('feedbackText');
  const msg = document.getElementById('feedbackMsg');

  fab.onclick = () => { panel.style.display = panel.style.display === 'none' ? 'block' : 'none'; };
  closeBtn.onclick = () => { panel.style.display = 'none'; };

  submitBtn.onclick = async () => {
    const message = textarea.value.trim();
    if (!message) return;

    // Feedback rows require a real user_id on pages where anonymous
    // submissions are rejected client-side and by the `feedback` table's
    // RLS policy (admin/dashboard opt in via requireAuth).
    if (requireAuth && !window.currentUser) {
      alert('Please log in to send feedback.');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    try {
      const { error } = await sb.from('feedback').insert({
        user_id: requireAuth ? window.currentUser.id : (window.currentUser ? window.currentUser.id : null),
        message: message
      });
      if (error) throw error;
      textarea.value = '';
      msg.style.display = 'block';
      setTimeout(() => {
        panel.style.display = 'none';
        msg.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send suggestion';
      }, 1800);
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send suggestion';
      alert('Could not send right now — try again in a moment.');
    }
  };
}

/* --------------------------------------------------------------------------
   Bootstrap: everything above that touches the DOM waits for it to be
   ready, since this script is loaded from <head>.
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  // Only show the language modal on a visitor's very first page — once
  // they've picked English or French it's saved to localStorage('language')
  // by languages.js, and every page after that should just use it silently.
  // (Previously this inserted the modal unconditionally on every page and
  // relied on languages.js's own DOMContentLoaded handler to hide it again
  // — but languages.js loads first, so it ran its "hide if already chosen"
  // check before this handler had even inserted the modal into the DOM,
  // meaning the modal always flashed regardless of a saved preference.)
  if (!localStorage.getItem('language')) {
    document.body.insertAdjacentHTML('afterbegin', LANGUAGE_MODAL_HTML);
  }

  initDarkMode();

  document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.toggle('hidden');
  });

  initFeedbackWidget({ requireAuth: document.body.dataset.feedbackAuth === 'required' });
});
