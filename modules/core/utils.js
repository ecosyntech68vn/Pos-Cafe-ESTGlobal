// ============================================================================
// utils.js — Helpers: VND formatting, date, hashing
// ============================================================================
(function (global) {
  'use strict';

  const Utils = {
    /** Format integer VND with thousands separator */
    formatVND(n) {
      if (n == null || isNaN(n)) return '0₫';
      return Math.round(Number(n)).toLocaleString('vi-VN') + '₫';
    },

    /** Round amount to nearest step (e.g. 1000) — Vietnamese cash habit */
    roundCash(n, step) {
      step = step || 1000;
      return Math.round(Number(n) / step) * step;
    },

    /** Current epoch ms */
    now() {
      return Date.now();
    },

    /** Format epoch ms to "DD/MM/YYYY HH:mm" */
    fmtDateTime(ts) {
      if (!ts) return '';
      const d = new Date(Number(ts));
      const pad = (n) => String(n).padStart(2, '0');
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    },

    /** Today's date in YYYY-MM-DD (local) */
    today() {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    },

    /** Start of day epoch ms for given Date or YYYY-MM-DD string */
    startOfDay(date) {
      const d = (typeof date === 'string') ? new Date(date + 'T00:00:00') : new Date(date);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    },

    /** End of day epoch ms */
    endOfDay(date) {
      const d = (typeof date === 'string') ? new Date(date + 'T00:00:00') : new Date(date);
      d.setHours(23, 59, 59, 999);
      return d.getTime();
    },

    /** SHA-256 hex digest (Web Crypto). Used for PIN hash. */
    async sha256(text) {
      const enc = new TextEncoder().encode(text);
      const buf = await crypto.subtle.digest('SHA-256', enc);
      return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    },

    /** PIN hash with branch salt */
    async hashPin(pin, branchId) {
      return await Utils.sha256(`${pin}:${branchId}:ecosyntech-pos`);
    },

    /** Generate human-readable order_no e.g. "2026-06-08#001" */
    nextOrderNo(seqToday) {
      return `${Utils.today()}#${String(seqToday).padStart(3, '0')}`;
    },

    /** Deep copy via JSON */
    clone(o) {
      return JSON.parse(JSON.stringify(o));
    },

    /** Safe JSON parse */
    parseJSON(s, fallback) {
      try { return JSON.parse(s); } catch (e) { return fallback; }
    },

    /** Debounce */
    debounce(fn, ms) {
      let t;
      return function () {
        const args = arguments;
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), ms);
      };
    },

    // ------------------------------------------------------------------
    // 2026-06-10 UI POLISH (CEO_THUAN): POS hiển thị 114 món seed không icon,
    // tên dính mã [DR-TH-001]. 2 helper dưới dùng chung index.html + kiosk.html.
    // ------------------------------------------------------------------

    /** Tên hiển thị POS: bỏ prefix mã hàng "[DR-TH-001] Trà chanh" → "Trà chanh" */
    displayName(name) {
      return String(name || '').replace(/^\[[^\]]+\]\s*/, '');
    },

    /** Icon thông minh suy từ tên món (ưu tiên cụm dài trước). fallback: icon category hoặc 🥤 */
    smartIcon(name, fallback) {
      const n = String(name || '').toLowerCase();
      // LƯU Ý: chỉ dùng emoji ≤ Emoji 12 (Windows 10 không render 🧋🫐 Emoji 13 → ô vuông)
      const RULES = [
        ['trà sữa', '🥛'], ['sữa chua', '🍨'], ['đá xay', '🍧'],
        ['mỳ cay', '🍜'], ['mì cay', '🍜'],
        ['cà phê', '☕'], ['cafe', '☕'], ['bạc xỉu', '☕'], ['espresso', '☕'], ['latte', '☕'],
        ['matcha', '🍵'], ['trà xanh', '🍵'], ['ô long', '🍵'], ['o long', '🍵'],
        ['socola', '🍫'], ['cacao', '🍫'], ['chocolate', '🍫'],
        ['phô mai', '🧀'], ['cheese', '🧀'],
        ['việt quất', '🍇'], ['dâu', '🍓'], ['đào', '🍑'], ['xoài', '🥭'],
        ['dưa hấu', '🍉'], ['dừa', '🥥'], ['cam ', '🍊'], ['cam,', '🍊'],
        ['chanh', '🍋'], ['ổi', '🍐'], ['nho', '🍇'], ['táo', '🍎'], ['dứa', '🍍'],
        ['sen', '🌸'], ['nhài', '🌼'], ['hoa quả', '🍹'],
        ['khoai', '🍟'], ['gà', '🍗'], ['xúc xích', '🌭'], ['bò', '🥩'],
        ['nem', '🥟'], ['há cảo', '🥟'], ['phomai que', '🧀'],
        ['kem', '🍦'], ['trân châu', '🥛'], ['thạch', '🍮'], ['pudding', '🍮'],
        ['nóng', '🔥'], ['trà', '🍵'],
      ];
      for (let i = 0; i < RULES.length; i++) {
        if (n.indexOf(RULES[i][0]) >= 0) return RULES[i][1];
      }
      return fallback || '🥤';
    },

    // ------------------------------------------------------------------
    // XOR + base64 obfuscation for localStorage secrets
    // NOT cryptographic — just avoids plain-text in DevTools
    // ------------------------------------------------------------------
    obfuscate(s, key) {
      if (!s) return '';
      const k = key || 'ecosyntech-pos-v2';
      let out = '';
      for (let i = 0; i < s.length; i++) out += String.fromCharCode(s.charCodeAt(i) ^ k.charCodeAt(i % k.length));
      return btoa(out);
    },
    deobfuscate(b64, key) {
      if (!b64) return '';
      try {
        const s = atob(b64);
        const k = key || 'ecosyntech-pos-v2';
        let out = '';
        for (let i = 0; i < s.length; i++) out += String.fromCharCode(s.charCodeAt(i) ^ k.charCodeAt(i % k.length));
        return out;
      } catch (e) { return ''; }
    },
  };

  global.Utils = Utils;
})(window);
