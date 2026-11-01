import { t as e } from "./rolldown-runtime.OA-FSkXT.mjs";
import { A as t, B as n, C as r, E as i, F as a, I as o, L as s, M as c, N as l, O as u, P as d, R as f, S as p, T as m, _ as h, a as g, c as _, d as v, f as y, g as b, h as x, i as S, j as C, k as w, l as T, m as E, o as D, s as O, u as k, v as A, w as j, x as ee, y as te, z as ne } from "./react.DcLFkBVj.mjs";
import { $ as M, A as re, C as ie, D as ae, E as oe, G as se, H as ce, I as le, J as N, K as ue, L as de, M as fe, N as pe, O as me, P as he, Q as P, R as ge, S as _e, T as ve, U as ye, V as be, W as xe, X as F, Y as Se, Z as Ce, _ as we, a as Te, b as Ee, c as De, d as Oe, et as ke, f as Ae, g as je, h as Me, i as Ne, it as Pe, j as Fe, k as Ie, l as Le, m as Re, nt as ze, o as Be, p as Ve, q as He, rt as Ue, s as We, tt as I, u as Ge, v as Ke, w as qe, x as Je, y as Ye, z as Xe } from "./motion.BpUkXwT2.mjs";
function Ze(e2) {
  return typeof e2 == `function`;
}
function Qe(e2) {
  return typeof e2 == `boolean`;
}
function L(e2) {
  return typeof e2 == `string`;
}
function R(e2) {
  return Number.isFinite(e2);
}
function $e(e2) {
  return Array.isArray(e2);
}
function z(e2) {
  return typeof e2 == `object` && !!e2 && !$e(e2);
}
function et(e2) {
  for (let t2 in e2) return false;
  return true;
}
function tt(e2) {
  return e2 === void 0;
}
function nt(e2) {
  return e2 === null;
}
function rt(e2) {
  return e2 == null;
}
function it(e2) {
  return e2 instanceof Date && !Number.isNaN(e2.getTime());
}
function at(e2) {
  return z(e2) && Ze(e2.return);
}
function ot(e2) {
  return z(e2) && Ze(e2.then);
}
function st(e2) {
  return e2 instanceof Promise;
}
function ct(e2) {
  return `url('${lt(e2)}')`;
}
function lt(e2) {
  return `data:image/svg+xml,${e2.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ut(e2, t2) {
  let n2 = t2 instanceof Error ? t2.stack ?? t2.message : t2;
  return `${e2 ? `${e2}
` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n2 ? `:
${n2}` : `.`}`;
}
function dt() {
  if (!Yh) return;
  let e2 = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t2 of e2) {
    let e3 = t2.getAttribute(`data-framer-lazy`), n2 = t2.getAttribute(`href`);
    if (!e3 || !n2) continue;
    let r2 = import(n2).then((t3) => (ng.set(e3, t3), t3)).catch((t3) => {
      throw ng.delete(e3), console.warn(`Failed to import lazy module: ${n2}`, t3), t3;
    });
    r2.catch(Jh), ng.set(e3, r2);
  }
}
function ft(e2) {
  return typeof e2 == `object` && !!e2 && !y(e2) && ig in e2;
}
function pt(e2, t2) {
  if (t2 in e2) return e2[t2];
  throw Error(`Module does not contain export '${t2}'`);
}
function mt(e2, t2 = `default`, n2) {
  let r2, i2, a2, o2 = () => {
    if (i2 || !n2 || !ng.has(n2)) return;
    let e3 = ng.get(n2);
    st(e3) ? s2(() => e3) : i2 = pt(e3, t2);
  }, s2 = (e3) => i2 ? Promise.resolve(i2) : (r2 ||= e3().then((e4) => {
    let n3 = pt(e4, t2);
    return i2 = n3, n3;
  }).catch((e4) => {
    a2 = e4;
  }), r2), c2 = false, l2 = b(function(t3, r3) {
    if (d(() => {
      c2 = true;
    }, []), a2) throw a2;
    if (o2(), n2 !== void 0 && rg !== void 0 && rg.add(n2), !i2) throw s2(e2);
    return _(i2, { ref: r3, ...t3 });
  });
  return l2.preload = () => (o2(), s2(e2)), l2.getStatus = () => ({ hasLoaded: i2 !== void 0, hasRendered: c2 }), l2;
}
function ht(e2, t2) {
  return Object.prototype.hasOwnProperty.call(e2, t2);
}
function gt(e2) {
  return e2 === null || !(og in e2) ? false : typeof e2.equals == `function`;
}
function _t(e2, t2) {
  return e2 === t2 ? true : e2 !== e2 && t2 !== t2;
}
function vt(e2, t2) {
  let n2 = e2.length;
  if (n2 !== t2.length) return false;
  for (let r2 = n2; r2-- !== 0; ) if (!_t(e2[r2], t2[r2])) return false;
  return true;
}
function yt(e2, t2) {
  let n2 = e2.length;
  if (n2 !== t2.length) return false;
  for (let r2 = n2; r2-- !== 0; ) if (!Tt(e2[r2], t2[r2], true)) return false;
  return true;
}
function bt(e2, t2) {
  if (e2.size !== t2.size) return false;
  for (let [n2, r2] of e2.entries()) if (!_t(r2, t2.get(n2))) return false;
  return true;
}
function xt(e2, t2) {
  if (e2.size !== t2.size) return false;
  for (let [n2, r2] of e2.entries()) if (!Tt(r2, t2.get(n2), true)) return false;
  return true;
}
function St(e2, t2) {
  if (e2.size !== t2.size) return false;
  for (let n2 of e2.keys()) if (!t2.has(n2)) return false;
  return true;
}
function Ct(e2, t2) {
  let n2 = ag(e2);
  if (n2.length !== ag(t2).length) return false;
  for (let r2 of n2) if (!ht(t2, r2) || !(r2 === `_owner` && ht(e2, `$$typeof`) && e2.$$typeof) && !_t(e2[r2], t2[r2])) return false;
  return true;
}
function wt(e2, t2) {
  let n2 = ag(e2);
  if (n2.length !== ag(t2).length) return false;
  for (let r2 of n2) if (!ht(t2, r2) || !(r2 === `_owner` && ht(e2, `$$typeof`) && e2.$$typeof) && !Tt(e2[r2], t2[r2], true)) return false;
  return true;
}
function Tt(e2, t2, n2) {
  if (e2 === t2) return true;
  if (!e2 || !t2) return e2 !== e2 && t2 !== t2;
  let r2 = typeof e2;
  if (r2 !== typeof t2 || r2 !== `object`) return false;
  let i2 = Array.isArray(e2), a2 = Array.isArray(t2);
  if (i2 && a2) return n2 ? yt(e2, t2) : vt(e2, t2);
  if (i2 !== a2) return false;
  let o2 = e2 instanceof Map, s2 = t2 instanceof Map;
  if (o2 && s2) return n2 ? xt(e2, t2) : bt(e2, t2);
  if (o2 !== s2) return false;
  let c2 = e2 instanceof Set, l2 = t2 instanceof Set;
  if (c2 && l2) return St(e2, t2);
  if (c2 !== l2) return false;
  let u2 = e2 instanceof Date, d2 = t2 instanceof Date;
  if (u2 && d2) return e2.getTime() === t2.getTime();
  if (u2 !== d2) return false;
  let f2 = e2 instanceof RegExp, p2 = t2 instanceof RegExp;
  return f2 && p2 ? e2.toString() === t2.toString() : f2 === p2 ? gt(e2) && gt(t2) ? e2.equals(t2) : n2 ? wt(e2, t2) : Ct(e2, t2) : false;
}
function Et(e2, t2, n2 = true) {
  try {
    return Tt(e2, t2, n2);
  } catch (e3) {
    if (e3 instanceof Error && /stack|recursion/iu.exec(e3.message)) return console.warn(`Warning: isEqual does not handle circular references.`, e3.name, e3.message), false;
    throw e3;
  }
}
function Dt(e2) {
  return p.useCallback((t2) => e2[t2], [e2]);
}
function Ot({ api: e2, children: t2 }) {
  return _(sg.Provider, { value: e2, children: t2 });
}
function kt() {
  return p.useContext(sg);
}
function At({ routes: e2, children: t2 }) {
  let n2 = Dt(e2), r2 = c(() => ({ getRoute: n2 }), [n2]);
  return _(sg.Provider, { value: r2, children: t2 });
}
function jt() {
  let e2 = kt(), t2 = C(cg), n2 = t2?.routeId ?? e2.currentRouteId, r2 = t2?.routeId ? t2.pathVariables : e2.currentPathVariables, i2 = n2 ? e2.getRoute?.(n2) : void 0;
  return c(() => {
    if (!(!n2 || !i2)) return { ...i2, id: n2, pathVariables: r2 };
  }, [n2, r2, i2]);
}
function Mt() {
  let e2 = jt();
  if (e2) return `${e2.id}-${JSON.stringify(e2.pathVariables)}`;
}
function Nt(e2) {
  let t2 = jt(), n2 = p.useRef(t2);
  Et(n2.current, t2) || !t2 || (n2.current = t2, e2(t2));
}
function Pt(e2) {
  let t2 = kt();
  if (e2) return t2.getRoute?.(e2);
}
function Ft(e2, t2) {
  if (t2 && e2) return e2.elements && t2 in e2.elements ? e2.elements[t2] : t2;
}
function It(e2) {
  let t2 = [`pointerdown`, `pointerup`, `keydown`, `keyup`], n2 = (e3) => {
    let n3 = e3.type;
    t2.includes(n3) && performance.mark(`framer-navigation-input`, { detail: { type: n3 } });
  };
  for (let r2 = 0; r2 < t2.length; r2++) document.addEventListener(t2[r2], n2, { signal: e2 });
  return () => {
    for (let e3 = 0; e3 < t2.length; e3++) document.removeEventListener(t2[e3], n2);
  };
}
function Lt(e2, t2) {
  let n2 = jt(), r2 = Pt(t2) ?? n2;
  return p.useMemo(() => r2 ? Ft(r2, e2) : e2, [e2, r2]);
}
function Rt() {
  return jt()?.pathVariables;
}
function B(e2, ...t2) {
  if (e2) return;
  let n2 = Error(`Assertion Error` + (t2.length > 0 ? `: ` + t2.join(` `) : ``));
  if (n2.stack) try {
    let e3 = n2.stack.split(`
`);
    e3[1]?.includes(`assert`) ? (e3.splice(1, 1), n2.stack = e3.join(`
`)) : e3[0]?.includes(`assert`) && (e3.splice(0, 1), n2.stack = e3.join(`
`));
  } catch {
  }
  throw n2;
}
function V(e2, t2) {
  throw t2 instanceof Error ? t2 : t2 === void 0 ? Error(e2 ? `Unexpected value: ${e2}` : `Application entered invalid state`) : Error(String(t2));
}
function zt(e2) {
  return Object(e2) !== e2;
}
function Bt(e2) {
  let t2 = Object.getPrototypeOf(e2);
  return t2 === Object.prototype || t2 === null || Object.getPrototypeOf(t2) === null || Object.getOwnPropertyNames(t2).sort().join(`\0`) === _g;
}
function Vt(e2) {
  return Object.prototype.toString.call(e2).slice(8, -1);
}
function Ht(e2) {
  switch (e2) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e2 < ` ` ? `\\u${e2.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Ut(e2) {
  let t2 = ``, n2 = 0, r2 = e2.length;
  for (let i2 = 0; i2 < r2; i2 += 1) {
    let r3 = e2[i2], a2 = Ht(r3);
    a2 && (t2 += e2.slice(n2, i2) + a2, n2 = i2 + 1);
  }
  return `"${n2 === 0 ? e2 : t2 + e2.slice(n2)}"`;
}
function Wt(e2) {
  return Object.getOwnPropertySymbols(e2).filter((t2) => Object.getOwnPropertyDescriptor(e2, t2).enumerable);
}
function Gt(e2) {
  return vg.test(e2) ? `.` + e2 : `[` + JSON.stringify(e2) + `]`;
}
function Kt(e2) {
  if (e2.length === 0 || e2.length > 1 && e2.charCodeAt(0) === 48) return false;
  for (let t3 = 0; t3 < e2.length; t3++) {
    let n2 = e2.charCodeAt(t3);
    if (n2 < 48 || n2 > 57) return false;
  }
  let t2 = +e2;
  return !(t2 >= 2 ** 32 - 1 || t2 < 0);
}
function qt(e2) {
  let t2 = Object.keys(e2);
  for (var n2 = t2.length - 1; n2 >= 0 && !Kt(t2[n2]); n2--) ;
  return t2.length = n2 + 1, t2;
}
function Jt(e2) {
  let t2 = new DataView(e2), n2 = ``;
  for (let r2 = 0; r2 < e2.byteLength; r2++) n2 += String.fromCharCode(t2.getUint8(r2));
  return Zt(n2);
}
function Yt(e2) {
  let t2 = Xt(e2), n2 = new ArrayBuffer(t2.length), r2 = new DataView(n2);
  for (let e3 = 0; e3 < n2.byteLength; e3++) r2.setUint8(e3, t2.charCodeAt(e3));
  return n2;
}
function Xt(e2) {
  e2.length % 4 == 0 && (e2 = e2.replace(/==?$/, ``));
  let t2 = ``, n2 = 0, r2 = 0;
  for (let i2 = 0; i2 < e2.length; i2++) n2 <<= 6, n2 |= yg.indexOf(e2[i2]), r2 += 6, r2 === 24 && (t2 += String.fromCharCode((n2 & 16711680) >> 16), t2 += String.fromCharCode((n2 & 65280) >> 8), t2 += String.fromCharCode(n2 & 255), n2 = r2 = 0);
  return r2 === 12 ? (n2 >>= 4, t2 += String.fromCharCode(n2)) : r2 === 18 && (n2 >>= 2, t2 += String.fromCharCode((n2 & 65280) >> 8), t2 += String.fromCharCode(n2 & 255)), t2;
}
function Zt(e2) {
  let t2 = ``;
  for (let n2 = 0; n2 < e2.length; n2 += 3) {
    let r2 = [void 0, void 0, void 0, void 0];
    r2[0] = e2.charCodeAt(n2) >> 2, r2[1] = (e2.charCodeAt(n2) & 3) << 4, e2.length > n2 + 1 && (r2[1] |= e2.charCodeAt(n2 + 1) >> 4, r2[2] = (e2.charCodeAt(n2 + 1) & 15) << 2), e2.length > n2 + 2 && (r2[2] |= e2.charCodeAt(n2 + 2) >> 6, r2[3] = e2.charCodeAt(n2 + 2) & 63);
    for (let e3 = 0; e3 < r2.length; e3++) r2[e3] === void 0 ? t2 += `=` : t2 += yg[r2[e3]];
  }
  return t2;
}
function Qt(e2, t2) {
  return $t(JSON.parse(e2), t2);
}
function $t(e2, t2) {
  if (typeof e2 == `number`) return a2(e2, true);
  if (!Array.isArray(e2) || e2.length === 0) throw Error(`Invalid input`);
  let n2 = e2, r2 = Array(n2.length), i2 = null;
  function a2(e3, o2 = false) {
    if (e3 === bg) return;
    if (e3 === Sg) return NaN;
    if (e3 === Cg) return 1 / 0;
    if (e3 === wg) return -1 / 0;
    if (e3 === Tg) return -0;
    if (o2 || typeof e3 != `number`) throw Error(`Invalid input`);
    if (e3 in r2) return r2[e3];
    let s2 = n2[e3];
    if (!s2 || typeof s2 != `object`) r2[e3] = s2;
    else if (Array.isArray(s2)) if (typeof s2[0] == `string`) {
      let o3 = s2[0], c2 = t2 && Object.hasOwn(t2, o3) ? t2[o3] : void 0;
      if (c2) {
        let t3 = s2[1];
        if (typeof t3 != `number` && (t3 = n2.push(s2[1]) - 1), i2 ??= /* @__PURE__ */ new Set(), i2.has(t3)) throw Error(`Invalid circular reference`);
        return i2.add(t3), r2[e3] = c2(a2(t3)), i2.delete(t3), r2[e3];
      }
      switch (o3) {
        case `Date`:
          r2[e3] = new Date(s2[1]);
          break;
        case `Set`:
          let t3 = /* @__PURE__ */ new Set();
          r2[e3] = t3;
          for (let e4 = 1; e4 < s2.length; e4 += 1) t3.add(a2(s2[e4]));
          break;
        case `Map`:
          let i3 = /* @__PURE__ */ new Map();
          r2[e3] = i3;
          for (let e4 = 1; e4 < s2.length; e4 += 2) i3.set(a2(s2[e4]), a2(s2[e4 + 1]));
          break;
        case `RegExp`:
          r2[e3] = new RegExp(s2[1], s2[2]);
          break;
        case `Object`:
          let c3 = Object(s2[1]);
          if (Object.hasOwn(c3, `__proto__`)) throw Error("Cannot parse an object with a `__proto__` property");
          r2[e3] = c3;
          break;
        case `BigInt`:
          r2[e3] = BigInt(s2[1]);
          break;
        case `null`:
          let l2 = /* @__PURE__ */ Object.create(null);
          r2[e3] = l2;
          for (let e4 = 1; e4 < s2.length; e4 += 2) {
            if (s2[e4] === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
            l2[s2[e4]] = a2(s2[e4 + 1]);
          }
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          if (n2[s2[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
          let t4 = globalThis[o3], i4 = new t4(a2(s2[1]));
          r2[e3] = s2[2] === void 0 ? i4 : i4.subarray(s2[2], s2[3]);
          break;
        }
        case `ArrayBuffer`: {
          let t4 = s2[1];
          if (typeof t4 != `string`) throw Error(`Invalid ArrayBuffer encoding`);
          r2[e3] = Yt(t4);
          break;
        }
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`: {
          let t4 = o3.slice(9);
          r2[e3] = Temporal[t4].from(s2[1]);
          break;
        }
        case `URL`:
          r2[e3] = new URL(s2[1]);
          break;
        case `URLSearchParams`:
          r2[e3] = new URLSearchParams(s2[1]);
          break;
        default:
          throw Error(`Unknown type ${o3}`);
      }
    } else if (s2[0] === Eg) {
      let t3 = s2[1];
      if (!Number.isInteger(t3) || t3 < 0) throw Error(`Invalid input`);
      let n3 = Array(t3);
      r2[e3] = n3;
      for (let e4 = 2; e4 < s2.length; e4 += 2) {
        let r3 = s2[e4];
        if (!Number.isInteger(r3) || r3 < 0 || r3 >= t3) throw Error(`Invalid input`);
        n3[r3] = a2(s2[e4 + 1]);
      }
    } else {
      let t3 = Array(s2.length);
      r2[e3] = t3;
      for (let e4 = 0; e4 < s2.length; e4 += 1) {
        let n3 = s2[e4];
        n3 !== xg && (t3[e4] = a2(n3));
      }
    }
    else {
      let t3 = {};
      r2[e3] = t3;
      for (let e4 of Object.keys(s2)) {
        if (e4 === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n3 = s2[e4];
        t3[e4] = a2(n3);
      }
    }
    return r2[e3];
  }
  return a2(0);
}
function en(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Map(), i2 = [];
  if (t2) for (let e3 of Object.getOwnPropertyNames(t2)) i2.push({ key: e3, fn: t2[e3] });
  let a2 = [], o2 = 0;
  function s2(t3) {
    if (t3 === void 0) return bg;
    if (Number.isNaN(t3)) return Sg;
    if (t3 === 1 / 0) return Cg;
    if (t3 === -1 / 0) return wg;
    if (t3 === 0 && 1 / t3 < 0) return Tg;
    if (r2.has(t3)) return r2.get(t3);
    let c3 = o2++;
    r2.set(t3, c3);
    for (let { key: e3, fn: r3 } of i2) {
      let i3 = r3(t3);
      if (i3) return n2[c3] = `["${e3}",${s2(i3)}]`, c3;
    }
    if (typeof t3 == `function`) throw new gg(`Cannot stringify a function`, a2, t3, e2);
    let l2 = ``;
    if (zt(t3)) l2 = tn(t3);
    else {
      let n3 = Vt(t3);
      switch (n3) {
        case `Number`:
        case `String`:
        case `Boolean`:
          l2 = `["Object",${tn(t3)}]`;
          break;
        case `BigInt`:
          l2 = `["BigInt",${t3}]`;
          break;
        case `Date`:
          l2 = `["Date","${isNaN(t3.getDate()) ? `` : t3.toISOString()}"]`;
          break;
        case `URL`:
          l2 = `["URL",${Ut(t3.toString())}]`;
          break;
        case `URLSearchParams`:
          l2 = `["URLSearchParams",${Ut(t3.toString())}]`;
          break;
        case `RegExp`:
          let { source: r3, flags: i3 } = t3;
          l2 = i3 ? `["RegExp",${Ut(r3)},"${i3}"]` : `["RegExp",${Ut(r3)}]`;
          break;
        case `Array`: {
          let e3 = false;
          l2 = `[`;
          for (let n4 = 0; n4 < t3.length; n4 += 1) if (n4 > 0 && (l2 += `,`), Object.hasOwn(t3, n4)) a2.push(`[${n4}]`), l2 += s2(t3[n4]), a2.pop();
          else if (e3) l2 += xg;
          else {
            let n5 = qt(t3), r4 = n5.length, i4 = String(t3.length).length;
            if ((t3.length - r4) * 3 > 4 + i4 + r4 * (i4 + 1)) {
              l2 = `[` + Eg + `,` + t3.length;
              for (let e4 = 0; e4 < n5.length; e4++) {
                let r5 = n5[e4];
                a2.push(`[${r5}]`), l2 += `,` + r5 + `,` + s2(t3[r5]), a2.pop();
              }
              break;
            } else e3 = true, l2 += xg;
          }
          l2 += `]`;
          break;
        }
        case `Set`:
          l2 = `["Set"`;
          for (let e3 of t3) l2 += `,${s2(e3)}`;
          l2 += `]`;
          break;
        case `Map`:
          l2 = `["Map"`;
          for (let [e3, n4] of t3) a2.push(`.get(${zt(e3) ? tn(e3) : `...`})`), l2 += `,${s2(e3)},${s2(n4)}`, a2.pop();
          l2 += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let e3 = t3;
          l2 = `["` + n3 + `",` + s2(e3.buffer);
          let r4 = t3.byteOffset, i4 = r4 + t3.byteLength;
          if (r4 > 0 || i4 !== e3.buffer.byteLength) {
            let e4 = /(\d+)/.exec(n3)[1] / 8;
            l2 += `,${r4 / e4},${i4 / e4}`;
          }
          l2 += `]`;
          break;
        }
        case `ArrayBuffer`:
          l2 = `["ArrayBuffer","${Jt(t3)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          l2 = `["${n3}",${Ut(t3.toString())}]`;
          break;
        default:
          if (!Bt(t3)) throw new gg(`Cannot stringify arbitrary non-POJOs`, a2, t3, e2);
          if (Wt(t3).length > 0) throw new gg(`Cannot stringify POJOs with symbolic keys`, a2, t3, e2);
          if (Object.getPrototypeOf(t3) === null) {
            l2 = `["null"`;
            for (let n4 of Object.keys(t3)) {
              if (n4 === `__proto__`) throw new gg(`Cannot stringify objects with __proto__ keys`, a2, t3, e2);
              a2.push(Gt(n4)), l2 += `,${Ut(n4)},${s2(t3[n4])}`, a2.pop();
            }
            l2 += `]`;
          } else {
            l2 = `{`;
            let n4 = false;
            for (let r4 of Object.keys(t3)) {
              if (r4 === `__proto__`) throw new gg(`Cannot stringify objects with __proto__ keys`, a2, t3, e2);
              n4 && (l2 += `,`), n4 = true, a2.push(Gt(r4)), l2 += `${Ut(r4)}:${s2(t3[r4])}`, a2.pop();
            }
            l2 += `}`;
          }
      }
    }
    return n2[c3] = l2, c3;
  }
  let c2 = s2(e2);
  return c2 < 0 ? `${c2}` : `[${n2.join(`,`)}]`;
}
function tn(e2) {
  let t2 = typeof e2;
  return t2 === `string` ? Ut(e2) : e2 instanceof String ? Ut(e2.toString()) : e2 === void 0 ? bg.toString() : e2 === 0 && 1 / e2 < 0 ? Tg.toString() : t2 === `bigint` ? `["BigInt","${e2}"]` : String(e2);
}
function nn(e2, t2, n2 = `lazy`) {
  switch (G.__framer_events?.push([e2, t2, n2]), e2) {
    case `published_site_click`: {
      let { trackingId: e3, href: n3 } = t2;
      e3 && document.dispatchEvent(new CustomEvent(`framer:click`, { detail: { trackingId: e3, href: n3 } }));
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e3 } = t2;
      e3 && document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e3 } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e3 } = t2;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e3 } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e3 } = t2;
      e3 && document.dispatchEvent(new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e3 } }));
      break;
    }
  }
}
function rn(e2) {
  return L(e2) && (e2 === `` || Og.test(e2));
}
function an() {
  return { [kg.QueryCache]: /* @__PURE__ */ new Map(), [kg.CollectionUtilsCache]: /* @__PURE__ */ new Map() };
}
function on() {
  if (!Yh) return;
  if (Ag !== void 0) return Ag;
  let e2 = document.getElementById(`__framer__handoverData`);
  if (e2) {
    try {
      Ag = Qt(e2.text) ?? an();
    } catch (e3) {
      Ag = an(), console.warn(`Failed to parse handover data. Falling back to network.`, e3);
    }
    return Qh(() => {
      e2?.remove(), e2 = null;
    }), Ag;
  }
}
function sn(e2, t2) {
  if (console.warn(ut(`Failed to resolve raw query result from DOM during hydration for: ${t2}. This might make the page load slightly slower.`)), Math.random() < 0.01) {
    let t3 = e2 instanceof Error && typeof e2.stack == `string` ? e2.stack : null;
    nn(`published_site_load_error`, { message: String(e2), stack: t3 });
  }
}
function cn(e2, t2) {
  let n2 = on();
  return n2 ? n2[e2].has(t2) : false;
}
function ln(e2, t2) {
  let n2 = on();
  if (!n2) return;
  let r2 = n2[e2];
  if (!r2.has(t2)) return;
  let i2 = r2.get(t2);
  return r2.delete(t2), i2;
}
function un(e2) {
  return e2?.id ?? pg;
}
function dn(e2, t2, n2, r2) {
  return `${e2}|${t2}|${n2}|${r2}`;
}
function fn(e2) {
  return (t2) => {
    if (!e2) return;
    let n2 = e2[t2];
    if (!n2) return;
    if (Pg.has(n2)) return Pg.get(n2);
    let r2 = new Ig(n2, t2);
    return Pg.set(n2, r2), r2;
  };
}
function pn({ children: e2, collectionUtils: t2 }) {
  let n2 = c(() => ({ get: fn(t2) }), [t2]);
  return _(Fg.Provider, { value: n2, children: e2 });
}
function mn() {
  return C(Fg);
}
function hn() {
  for (let e2 of zg) e2();
  zg.clear();
}
function gn(e2) {
  return new Promise((t2) => {
    if (zg.add(t2), document.hidden) {
      hn();
      return;
    }
    document.addEventListener(`visibilitychange`, hn), document.addEventListener(`pagehide`, hn), we.read(() => {
      vn(e2).then(() => {
        zg.delete(t2), !e2?.signal?.aborted && t2();
      });
    });
  });
}
function _n(e2) {
  return new Promise((t2) => {
    setTimeout(t2, 100), we.read(() => {
      vn(e2).then(t2);
    }, false, true);
  });
}
function vn(e2) {
  let t2 = e2?.priority;
  return Lg || Rg ? t2 === `background` ? new Promise((e3) => {
    setTimeout(e3, 1);
  }) : Lg ? G.scheduler.yield(e2).catch(Jh) : G.scheduler.postTask(() => {
  }, e2).catch(Jh) : t2 === `user-blocking` ? Promise.resolve() : new Promise((e3) => {
    setTimeout(e3, t2 === `background` ? 1 : 0);
  });
}
function yn(e2) {
  let { continueAfter: t2, ensureContinueBeforeUnload: n2, ...r2 } = e2 ?? {};
  return n2 ? gn(r2) : t2 === `paint` ? _n(r2) : vn(r2);
}
function bn() {
  let e2 = mn(), { autobahnNavigation: t2 } = fg(), { getRoute: n2 } = kt();
  return l((r2, i2, a2 = true, o2 = true) => {
    if (!r2 || !n2) return;
    let s2 = n2(r2), { pathVariables: c2, locale: l2 } = i2;
    return Sn(s2, { routeId: r2, pathVariables: c2, locale: l2, collectionUtils: e2 }, a2, o2 && t2);
  }, [n2, e2, t2]);
}
function xn(e2, t2 = true) {
  let n2 = bn();
  d(() => {
    if (!(!t2 || !Bg)) for (let t3 of e2) n2(t3, {});
  }, [e2, t2, n2]);
}
async function Sn(e2, t2, n2 = true, r2 = true) {
  if (!Bg || !e2) return;
  let i2 = e2.page;
  if (!(!i2 || !ft(i2))) {
    n2 && await yn();
    try {
      let e3 = await i2.preload();
      r2 && t2 && e3 && await Cn(e3, t2);
    } catch {
    }
  }
}
async function Cn(e2, t2) {
  let n2 = e2.loader;
  if (!n2?.load) return;
  let r2 = { signal: t2.signal ?? new AbortController().signal, pathVariables: t2.pathVariables ?? {}, routeId: t2.routeId, locale: t2.locale, collectionUtils: t2.collectionUtils };
  try {
    await n2.load({}, r2);
  } catch {
  }
}
function wn(e2, t2) {
  if (!e2.startsWith(`/`) || !t2.startsWith(`/`)) throw Error(`from/to paths are expected to be absolute`);
  let [n2] = Tn(e2), [r2, i2] = Tn(t2), a2 = En(n2, r2);
  return a2 === `` && (a2 = `.`), !a2.startsWith(`.`) && !a2.startsWith(`/`) && (a2 = `./` + a2), a2 + `/` + i2;
}
function Tn(e2) {
  let t2 = e2.lastIndexOf(`/`);
  return [e2.substring(0, t2 + 1), e2.substring(t2 + 1)];
}
function En(e2, t2) {
  if (e2 === t2 || (e2 = `/` + Dn(e2), t2 = `/` + Dn(t2), e2 === t2)) return ``;
  let n2 = e2.length, r2 = n2 - 1, i2 = t2.length - 1, a2 = r2 < i2 ? r2 : i2, o2 = -1, s2 = 0;
  for (; s2 < a2; s2++) {
    let n3 = Ug(e2, 1 + s2);
    if (n3 !== Ug(t2, 1 + s2)) break;
    n3 === Hg && (o2 = s2);
  }
  if (s2 === a2) if (i2 > a2) {
    if (Ug(t2, 1 + s2) === Hg) return Gg(t2, 1 + s2 + 1);
    if (s2 === 0) return Gg(t2, 1 + s2);
  } else r2 > a2 && (Ug(e2, 1 + s2) === Hg ? o2 = s2 : s2 === 0 && (o2 = 0));
  let c2 = ``;
  for (s2 = 1 + o2 + 1; s2 <= n2; ++s2) (s2 === n2 || Ug(e2, s2) === Hg) && (c2 += c2.length === 0 ? `..` : `/..`);
  return `${c2}${Gg(t2, 1 + o2)}`;
}
function Dn(e2) {
  let t2 = ``, n2 = 0, r2 = -1, i2 = 0, a2 = 0;
  for (let o2 = 0; o2 <= e2.length; ++o2) {
    if (o2 < e2.length) a2 = Ug(e2, o2);
    else if (Jg(a2)) break;
    else a2 = Hg;
    if (Jg(a2)) {
      if (!(r2 === o2 - 1 || i2 === 1)) if (i2 === 2) {
        if (t2.length < 2 || n2 !== 2 || Ug(t2, t2.length - 1) !== Vg || Ug(t2, t2.length - 2) !== Vg) {
          if (t2.length > 2) {
            let e3 = Wg(t2, qg);
            e3 === -1 ? (t2 = ``, n2 = 0) : (t2 = Gg(t2, 0, e3), n2 = t2.length - 1 - Wg(t2, qg)), r2 = o2, i2 = 0;
            continue;
          } else if (t2.length !== 0) {
            t2 = ``, n2 = 0, r2 = o2, i2 = 0;
            continue;
          }
        }
        Kg && (t2 += t2.length > 0 ? `${qg}..` : `..`, n2 = 2);
      } else t2.length > 0 ? t2 += `${qg}${Gg(e2, r2 + 1, o2)}` : t2 = Gg(e2, r2 + 1, o2), n2 = o2 - r2 - 1;
      r2 = o2, i2 = 0;
    } else a2 === Vg && i2 !== -1 ? ++i2 : i2 = -1;
  }
  return t2;
}
function On(e2, t2) {
  return e2.replace(Xg, (e3, n2) => {
    let r2 = t2[n2];
    return typeof r2 != `string` || r2.length === 0 ? e3 : encodeURIComponent(r2);
  });
}
function kn(e2, t2 = false) {
  let r2 = ``;
  if (n !== void 0) if (t2) r2 = n.location.search;
  else {
    let e3 = n.history?.state?.queryParamBackAnchorSearch;
    r2 = e3 === void 0 ? n.location.search : e3 === `` ? `` : `?${e3}`;
  }
  return r2 ? An(r2, e2) : e2;
}
function An(e2, t2) {
  let n2 = t2.indexOf(`#`), r2 = n2 === -1 ? t2 : t2.substring(0, n2), i2 = n2 === -1 ? `` : t2.substring(n2), a2 = r2.indexOf(`?`), o2 = a2 === -1 ? r2 : r2.substring(0, a2), s2 = a2 === -1 ? `` : r2.substring(a2), c2 = new URLSearchParams(s2), l2 = new URLSearchParams(e2);
  for (let [e3, t3] of l2) c2.has(e3) || e3 !== Zg && c2.append(e3, t3);
  let u2 = c2.toString();
  return u2 === `` ? r2 + i2 : o2 + `?` + u2 + i2;
}
async function jn(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = e2, c2 = false, l2 = { ...a2 }, u2 = Array.from(s2.matchAll(Xg)), d2 = await Promise.all(u2.map(async (e3) => {
    let s3 = e3?.[0], u3 = e3?.[1];
    if (!s3 || !u3) throw Error(`Failed to replace path variables: unexpected regex match group`);
    let d3 = a2[u3];
    if (!d3 || !L(d3)) throw Error(`No slug found for path variable ${u3}`);
    let f3 = o2?.get(i2);
    if (!f3 || !t2) return d3;
    let p3 = f3.getRecordIdBySlug(d3, t2), m3 = st(p3) ? await p3 : p3;
    if (!m3) return d3;
    let h2 = f3.getSlugByRecordId(m3, n2), g2 = st(h2) ? await h2 : h2;
    if (!g2) {
      c2 = true;
      let e4 = f3.getSlugByRecordId(m3, r2), t3 = st(e4) ? await e4 : e4;
      return t3 && (l2[u3] = t3), t3 ?? d3;
    }
    return l2[u3] = g2, g2;
  })), f2 = 0, p2 = ``, m2 = false;
  for (let e3 = 0; e3 < u2.length; e3++) {
    let t3 = u2[e3], n3 = d2[e3];
    !t3 || !n3 || (p2 += s2.substring(f2, t3.index), f2 = (t3.index ?? 0) + (t3[0]?.length ?? 0), p2 += d2[e3], m2 = true);
  }
  return m2 && (p2 += s2.substring(f2), s2 = p2), { path: s2, pathVariables: l2, isMissingInLocale: c2 };
}
async function Mn({ currentLocale: e2, nextLocale: t2, defaultLocale: n2, route: r2, pathVariables: i2, collectionUtils: a2, preserveQueryParams: o2 }) {
  let { path: s2, pathLocalized: c2 } = r2, l2 = c2?.[t2.id] ?? s2, u2 = { path: l2, pathVariables: i2, isMissingInLocale: false };
  if (!l2) return u2;
  if (i2 && r2.collectionId) try {
    u2 = await jn(l2, e2, t2, n2, r2.collectionId, i2, a2);
  } catch {
  }
  return t2.slug && (u2.path = `/` + t2.slug + u2.path), o2 && u2.path && (u2.path = kn(u2.path, true)), u2;
}
function Nn(e2) {
  if (!e2) return ``;
  let t2;
  try {
    t2 = new URL(e2);
  } catch {
    return ``;
  }
  return t2.pathname === `/` || n.location.origin !== t2.origin ? `` : t2.pathname.endsWith(`/`) ? t2.pathname.slice(0, -1) : t2.pathname;
}
function Pn({ children: e2, value: t2 }) {
  return _(Qg.Provider, { value: t2, children: e2 });
}
function Fn() {
  return p.useContext(Qg);
}
function In(e2, t2, { global: n2, routes: r2 }) {
  return r2[e2]?.[t2] || n2;
}
function Ln(e2) {
  let t2 = $g, n2 = e2.next(0), r2 = [n2.value];
  for (; !n2.done && t2 < e_; ) n2 = e2.next(t2), r2.push(n2.value), t2 += $g;
  return r2.length === 1 && r2.push(n2.value), { easing: `linear(${r2.join(`,`)})`, duration: t2 - $g };
}
function Rn(e2) {
  return [parseFloat(e2), e2.endsWith(`px`) ? `px` : `%`];
}
function zn(e2) {
  let { innerWidth: t2, innerHeight: r2 } = n, [i2, a2] = Rn(e2.x), [o2, s2] = Rn(e2.y);
  return { x: a2 === `px` ? i2 : i2 / 100 * t2, y: s2 === `px` ? o2 : o2 / 100 * r2 };
}
function Bn(e2, t2, n2, r2) {
  let i2 = `
      opacity: ${e2.opacity};
      transform: translate(${e2.x}, ${e2.y}) scale(${e2.scale}) rotateX(${e2.rotateX}deg) rotateY(${e2.rotateY}deg) rotateZ(${e2.rotate}deg);
    `;
  return e2.mask && (i2 += r2?.makeKeyframe?.(e2.mask, t2, n2) || ``), i2;
}
function Vn(e2) {
  return e2 ? n_[e2] : void 0;
}
function Hn(e2, { transition: t2, ...n2 }) {
  let r2 = `view-transition-` + e2, i2 = { duration: `0s`, easing: `linear` };
  if (t2.type === `tween`) i2.duration = t2.duration + `s`, i2.easing = `cubic-bezier(${t2.ease.join(`,`)})`;
  else if (Un(t2)) {
    let { easing: e3, duration: n3 } = Ln(Ie({ keyframes: [0, 1], ...Wn(t2), restDelta: 1e-3, restSpeed: 1e-4 }));
    i2.duration = n3 + `ms`, i2.easing = e3;
  }
  let a2 = Vn(n2?.mask?.type), o2 = Bn(n2, `start`, e2, a2), s2 = Bn({ ...r_, mask: n2.mask }, `end`, e2, a2);
  return e2 === `exit` && ([o2, s2] = [s2, o2]), `
        ${n2.mask && a2?.makePropertyRules ? a2.makePropertyRules(n2.mask) : ``}

        @keyframes ${r2} {
            0% {
                ${o2}
            }

            100% {
                ${s2}
            }
        }

        ::view-transition-${e2 === `enter` ? `new` : `old`}(root) {
            animation-name: ${r2};
            animation-duration: ${i2.duration};
            animation-delay: ${t2.delay}s;
            animation-timing-function: ${i2.easing};
            animation-fill-mode: both;
            ${n2.mask && a2?.makeStyles ? a2.makeStyles(n2.mask, e2) : ``}
        }
    `;
}
function Un(e2) {
  return e2.type === `spring`;
}
function Wn(e2) {
  return e2.durationBasedSpring ? { duration: e2.duration * 1e3, bounce: e2.bounce } : { stiffness: e2.stiffness, damping: e2.damping, mass: e2.mass };
}
function Gn({ exit: e2 = a_, enter: t2 }) {
  let n2 = document.createElement(`style`);
  n2.id = i_;
  let r2 = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e2.mask || t2.mask || e2.opacity || t2.opacity || e2.transition.delay || t2.transition.delay) && (r2 += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `), r2 += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `, r2 += Hn(`exit`, e2), r2 += Hn(`enter`, t2), n2.textContent = r2, document.head.appendChild(n2);
}
function Kn() {
  Qh(() => {
    we.render(() => {
      performance.mark(`framer-vt-remove`);
      let e2 = document.getElementById(i_);
      e2 && document.head.removeChild(e2);
    });
  });
}
function qn() {
  return !!document.startViewTransition;
}
function Jn(e2) {
  return new Promise((t2) => {
    we.render(() => {
      performance.mark(`framer-vt-style`), Gn(e2), t2();
    });
  });
}
async function Yn(e2, t2, n2) {
  if (!qn()) {
    e2();
    return;
  }
  if (await Jn(t2), n2?.aborted) return;
  performance.mark(`framer-vt`);
  let r2 = document.startViewTransition(async () => {
    performance.mark(`framer-vt-freeze`), !n2?.aborted && (n2?.addEventListener(`abort`, () => r2.skipTransition()), await e2());
  });
  return r2.updateCallbackDone.then(() => {
    performance.mark(`framer-vt-unfreeze`);
  }).catch(o_), Promise.all([r2.ready, r2.finished]).then(() => {
    performance.mark(`framer-vt-finished`), Kn();
  }).catch(o_), r2;
}
function Xn() {
  let e2 = Fn(), t2 = w(void 0);
  return d(() => {
    t2.current &&= (t2.current(), void 0);
  }), l((n2, r2, i2, a2) => {
    let o2 = In(n2, r2, e2);
    if (o2) {
      let e3 = new Promise((e4) => {
        t2.current = e4;
      });
      return Yn(async () => {
        i2(), await e3;
      }, o2, a2);
    }
    i2();
  }, [e2]);
}
function Zn(e2, t2) {
  Qh(() => {
    let n2 = document.querySelector(`link[rel='canonical']`);
    if (!n2) return;
    let r2 = new URL(e2, t2);
    r2.search = ``, n2.setAttribute(`href`, r2.toString());
  });
}
function Qn(e2, t2, n2, i2 = r) {
  i2(() => {
    let t3 = async (e3) => (await yn({ ...n2, continueAfter: `paint` }), e3()), r2 = t3(e2);
    return () => {
      (async () => {
        let e3 = await r2;
        e3 && t3(e3);
      })();
    };
  }, t2);
}
function $n(e2) {
  let t2 = w(void 0);
  return Qn(() => {
    t2.current &&= (t2.current(), void 0);
  }, void 0, { priority: `user-blocking` }), l((n2) => {
    let r2 = new Promise((e3) => {
      t2.current = e3;
    });
    if (!e2) return { promise: r2, measureDetail: n2, ignore: null };
    let i2 = `${e2}-start`, a2 = `${e2}-end`, o2 = false;
    return performance.mark(i2), r2.finally(() => {
      o2 || (performance.mark(a2), performance.measure(e2, { start: i2, end: a2, detail: n2 }));
    }).catch((e3) => {
      console.error(e3);
    }), { promise: r2, measureDetail: n2, ignore: () => {
      o2 = true, t2.current?.(), t2.current = void 0;
    } };
  }, [e2]);
}
async function er(e2, t2, { currentRoutePath: r2, currentRoutePathLocalized: i2, currentPathVariables: a2, hash: o2, pathVariables: s2, localeId: c2, preserveQueryParams: l2, siteCanonicalURL: u2 }, d2 = false) {
  let { path: f2 } = t2;
  if (!f2) return;
  let p2 = sr(t2, { currentRoutePath: r2, currentRoutePathLocalized: i2, currentPathVariables: a2, hash: o2, pathVariables: s2, preserveQueryParams: l2, siteCanonicalURL: u2, localeId: c2 }), m2 = r2 !== void 0 && r2 === f2, h2 = tr(n.history.state) ? n.history.state : void 0, g2 = m2 ? h2?.queryParamBackAnchorSearch : void 0;
  try {
    return await rr({ routeId: e2, hash: o2, pathVariables: s2, localeId: c2, queryParamBackAnchorSearch: g2 }, p2, d2);
  } catch {
  }
}
function tr(e2) {
  return z(e2) && L(e2.routeId);
}
function nr(e2, t2, r2 = false) {
  performance.mark(`framer-history-replace`), t2 && Zn(t2, n.location.href), (r2 ? n.history.__proto__.replaceState : n.history.replaceState).call(n.history, e2, ``, t2);
}
async function rr(e2, t2, r2 = false) {
  if (performance.mark(`framer-history-push`), Zn(t2, n.location.href), !r2) {
    n.history.pushState(e2, ``, t2);
    return;
  }
  let i2 = false, a2;
  l_ && (a2 = () => {
    if (i2 = true, u_) return;
    let e3 = `Popstate called after intercept(). Please report this to the Framer team.`;
    console.error(e3), nn(`published_site_load_recoverable_error`, { message: e3 });
  }, n.addEventListener(`popstate`, a2, { once: true })), u_ && l_ ? n.history.__proto__.pushState.call(n.history, e2, ``, t2) : n.history.pushState(e2, ``, t2), l_ && queueMicrotask(() => {
    i2 || (l_ = false, n.removeEventListener(`popstate`, a2));
  });
}
function ir({ disabled: e2, routeId: t2, initialPathVariables: i2, initialLocaleId: a2 }) {
  r(() => {
    if (e2) return;
    performance.mark(`framer-history-set-initial-state`);
    let r2 = z(n.history.state) ? n.history.state : {}, o2 = n.location.hash ? n.location.hash.slice(1) : void 0;
    nr({ ...r2, routeId: t2, hash: o2, pathVariables: i2, localeId: a2 }, void 0, true);
  }, []);
}
function ar(e2, t2) {
  let r2 = Xn(), i2 = $n(`framer-route-change`), a2 = w(void 0), o2 = l(async ({ state: o3 }) => {
    if (n.navigation?.transition && n.navigation?.transition?.navigationType !== `traverse` || !z(o3)) return;
    let { routeId: s3, hash: c2, pathVariables: l2, localeId: u2 } = o3;
    if (!L(s3)) return;
    let d2 = i2({ popstate: true }), f2 = It();
    d2.promise.finally(f2);
    let p2 = await r2(e2.current, s3, () => {
      t2(s3, L(u2) ? u2 : void 0, L(c2) ? c2 : void 0, n.location.pathname + n.location.search + n.location.hash, z(l2) ? l2 : void 0, true, d2, false);
    }), m2 = n.navigation?.transition;
    await (p2?.updateCallbackDone ?? Promise.resolve()).then(a2.current?.resolve).catch(a2.current?.reject), await d2.promise;
    try {
      await m2?.finished;
    } catch (e3) {
      console.warn(`Popstate transition failed`, e3);
    }
    c_(), Zn(n.location.href);
  }, [e2, i2, t2, r2]), s2 = l((e3) => {
    e3.navigationType !== `traverse` || !e3.canIntercept || e3.intercept({ async handler() {
      await new Promise((e4, t3) => {
        a2.current = { resolve: e4, reject: t3 };
      }), a2.current = void 0;
    }, scroll: `after-transition` });
  }, []);
  d(() => (n.addEventListener(`popstate`, o2), d_ && n.navigation.addEventListener(`navigate`, s2), () => {
    n.removeEventListener(`popstate`, o2), d_ && n.navigation.removeEventListener(`navigate`, s2);
  }), [o2, s2]);
}
function or(e2, t2, n2) {
  let r2 = Ft(t2, e2);
  if (!r2) return;
  let i2 = Object.assign({}, t2?.elements, n2);
  return r2.replace(Xg, (e3, t3) => i2[t3] ?? e3);
}
function sr(e2, { currentRoutePath: t2, currentRoutePathLocalized: r2, currentPathVariables: i2, hash: a2, pathVariables: o2, hashVariables: s2, relative: c2 = true, preserveQueryParams: l2, onlyHash: u2 = false, siteCanonicalURL: d2, localeId: f2 }) {
  let p2 = or(a2, e2, s2);
  if (u2) return p2 ?? ``;
  let m2 = t2 ?? `/`;
  r2 && f2 && (m2 = r2[f2] ?? m2), i2 && (m2 = m2.replace(Xg, (e3, t3) => String(i2[t3] || e3)));
  let h2 = (f2 ? e2?.pathLocalized?.[f2] : void 0) ?? e2?.path ?? `/`;
  o2 && (h2 = h2.replace(Xg, (e3, t3) => String(o2[t3] || e3)));
  let g2 = !!(m2 === h2 && p2), _2 = !g2 && o2 !== void 0 && t2 !== void 0 && e2?.path !== void 0 && t2 === e2.path && m2 !== h2;
  if (c2) if (Yg.has(m2) && n !== void 0) {
    let e3 = Nn(d2);
    h2 = wn(n.location.pathname, e3 + h2);
  } else h2 = wn(m2, h2);
  let v2 = g2 || _2;
  return (l2 || v2) && (h2 = kn(h2, v2)), p2 && (h2 = `${h2}#${p2}`), h2;
}
async function cr(e2, t2, r2) {
  if (!e2.path || !t2) return false;
  let i2 = `${r2.slug ? `/${r2.slug}` : ``}${On(e2.path, t2)}`;
  return (await fetch(i2, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` ? (n.location.href = n.location.origin + i2, true) : false;
}
function lr() {
  let e2 = mn();
  return l((t2) => ur({ ...t2, collectionUtils: e2 }), [e2]);
}
async function ur(e2) {
  let t2 = await Mn(e2);
  if (t2) {
    try {
      localStorage.preferredLocale = e2.nextLocale.code;
    } catch {
    }
    try {
      if (!L(t2.path)) throw Error(`Expected result.path to be a string`);
      if (t2.isMissingInLocale && await cr(e2.route, t2.pathVariables, e2.nextLocale)) return;
    } catch {
    }
    return t2;
  }
}
function dr(e2, t2) {
  try {
    let r2 = n.history.state;
    if (!tr(r2)) return;
    let i2 = r2?.paginationInfo === void 0 || r2.paginationInfo[e2] === void 0, a2 = { ...r2.paginationInfo, [e2]: t2 };
    nr({ ...r2, paginationInfo: a2 }, void 0, i2);
  } catch {
  }
}
function fr() {
  let e2 = w(Promise.resolve()), t2 = w(), r2 = l((n2) => {
    if (n2.navigationType === `traverse` || !n2.canIntercept) return;
    let r3 = t2.current;
    r3?.signal.addEventListener(`abort`, () => {
      r3.abort(`user aborted`);
    }), n2.intercept({ handler: () => e2.current });
  }, []);
  return l((i2, a2, o2) => {
    if (!d_) {
      a2();
      return;
    }
    e2.current = i2, t2.current = o2, n.navigation.addEventListener(`navigate`, r2), a2(true), i2.finally(() => {
      n.navigation.removeEventListener(`navigate`, r2);
    });
  }, [r2]);
}
function pr(e2) {
  let t2 = 0, n2 = e2.length;
  for (; t2 < n2 && e2[t2] === `-`; ) t2++;
  for (; n2 > t2 && e2[n2 - 1] === `-`; ) n2--;
  return e2.slice(t2, n2);
}
function mr(e2) {
  return pr(e2.trim().toLowerCase().replace(f_, `-`));
}
function hr({ children: e2, value: t2 }) {
  return _(m_.Provider, { value: t2, children: e2 });
}
function gr() {
  return C(m_);
}
function _r(e2, t2) {
  let n2 = o(() => ({ inputs: t2, result: e2() }))[0], r2 = w(true), i2 = w(n2), a2 = r2.current || t2 && i2.current.inputs && Et(t2, i2.current.inputs, false) ? i2.current : { inputs: t2, result: e2() };
  return d(() => {
    r2.current = false, i2.current = a2;
  }, [a2]), a2.result;
}
function vr(e2, t2) {
  return _r(() => e2, t2);
}
function yr() {
  return p.useContext(__);
}
function br() {
  return yr().activeLocale?.code ?? `en-US`;
}
function xr() {
  return n.location.search;
}
function Sr() {
  return ``;
}
function Cr(e2) {
  return y_.add(e2), n.addEventListener(`popstate`, e2), () => {
    y_.delete(e2), n.removeEventListener(`popstate`, e2);
  };
}
function wr() {
  for (let e2 of y_) e2();
}
function Tr({ children: e2 }) {
  let t2 = gr() === `preview`, [r2, i2] = o(``), a2 = u(ee(Cr, xr, Sr));
  kt();
  let s2 = t2 ? r2 : a2, c2 = l(async (e3) => {
    if (t2) {
      h(() => {
        i2((t3) => e3(new URLSearchParams(t3)).toString());
      });
      return;
    }
    await yn({ continueAfter: `paint` });
    let r3 = n.history.state, a3 = new URL(n.location.href), o2 = e3(a3.searchParams).toString();
    a3.search = o2;
    let s3 = r3?.queryParamBackAnchorSearch, c3 = n.location.search.slice(1), l2 = s3 === void 0 && o2 !== c3, u2 = s3 !== void 0 && o2 === s3, d3 = { ...r3, queryParamBackAnchorSearch: u2 ? void 0 : s3 ?? (l2 ? c3 : void 0) }, f2 = a3.toString();
    l2 || u2 ? await rr(d3, f2) : nr(d3, f2), wr();
  }, [t2]), d2 = _r(() => ({ urlSearchParams: new URLSearchParams(s2), replaceSearchParams: c2 }), [s2, c2]);
  return _(b_.Provider, { value: d2, children: e2 });
}
function Er() {
  let e2 = new Event(`change`, { bubbles: true });
  return e2[x_] = 1, e2;
}
function Dr() {
  let e2 = new MouseEvent(`click`, { bubbles: true });
  return e2[x_] = 1, e2;
}
function Or(e2) {
  return e2 instanceof HTMLInputElement && (e2.type === `checkbox` || e2.type === `radio`) ? `checked` : `value`;
}
function kr(e2) {
  return x_ in e2 && e2[x_] === 1;
}
function Ar(e2) {
  return S_ in e2.nativeEvent && e2.nativeEvent[S_] === 1;
}
function jr(e2) {
  let t2 = w(false), n2 = w(null), r2 = ee($h, tg, C_);
  return d(() => {
    if (!r2) return;
    let i2 = n2.current;
    if (t2.current || !i2) return;
    t2.current = true;
    let a2 = Or(i2), o2 = i2[a2];
    if (o2 === e2) return;
    if (i2.type === `radio` && o2 === true) {
      i2.checked = false, i2.dispatchEvent(Dr());
      return;
    }
    if (a2 === `checked`) {
      let e3 = Dr();
      e3[S_] = 1, i2.dispatchEvent(e3), i2.dispatchEvent(Dr());
      return;
    }
    if (i2.nodeName === `SELECT`) {
      i2.dispatchEvent(Er());
      return;
    }
    let s2 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i2), a2)?.set;
    if (!s2) return;
    s2.call(i2, ``);
    let c2 = Er();
    c2[S_] = 1, i2.dispatchEvent(c2), queueMicrotask(() => {
      s2.call(i2, o2), i2.dispatchEvent(Er());
    });
  }, [r2]), n2;
}
function Mr() {
  if (!w_) return;
  E_ = true, performance.mark(`framer-react-event-handling-start`);
  let e2 = { capture: true }, t2 = document.body;
  w_.forEach((n2) => t2.addEventListener(n2, T_, e2));
}
function Nr() {
  return d(() => {
    if (!E_ || !w_) return;
    let e2 = { capture: true }, t2 = document.body;
    w_.forEach((n2) => t2.removeEventListener(n2, T_, e2)), w_ = void 0, performance.mark(`framer-react-event-handling-end`);
  }, []), null;
}
function Pr(e2) {
  let t2 = false;
  return function(...n2) {
    if (!t2) return t2 = true, e2.apply(this, n2);
  };
}
function Fr(e2, t2, n2) {
  try {
    performance.measure(e2, t2, n2);
  } catch (t3) {
    console.warn(`Could not measure ${e2}`, t3);
  }
}
function Ir() {
  K_ = new G_(), K_.render.markStart();
}
function Lr() {
  j(() => {
    K_?.useInsertionEffects.markRouterStart();
  }, []), r(() => {
    K_?.useLayoutEffects.markRouterStart();
  }, []), d(() => {
    K_?.useEffects.markRouterStart();
  }, []);
}
function Rr() {
  j(() => {
    K_?.render.markEnd(), K_?.useInsertionEffects.markStart();
  }, []), r(() => {
    if (K_?.useLayoutEffects.markStart(), document.visibilityState !== `visible`) {
      q_ = true;
      return;
    }
    we.read(() => {
      K_?.browserRendering.requestAnimationFrame.markStart(), K_?.unattributedHydrationOverhead.measure();
    });
  }, []), d(() => {
    K_?.useEffects.markStart(), K_?.browserRendering.hasStarted || (K_?.mutationEffects.measure(), K_?.useEffects.markAreSynchronous());
  }, []);
}
function zr() {
  j(() => {
    K_?.useInsertionEffects.markEnd();
  }, []), r(() => {
    K_?.useLayoutEffects.markEnd(), !(q_ || document.visibilityState !== `visible`) && we.read(() => {
      K_?.browserRendering.requestAnimationFrame.markEnd(), yn().then(() => {
        K_?.browserRendering.layoutStylePaint.markEnd();
      });
    });
  }, []), d(() => {
    K_?.useEffects.markEnd();
  }, []);
}
function Br() {
  return Rr(), null;
}
function Vr() {
  return zr(), null;
}
function Hr(e2, t2) {
  let n2 = { style: t2, "data-framer-root": `` };
  return p.isValidElement(e2) ? p.cloneElement(e2, n2) : _(e2, { ...n2 });
}
function Ur() {
  return Z_;
}
function Wr(e2) {
  if (Q_?.lastRoutes !== e2) {
    let t2 = {}, n2 = {}, r2 = [], i2 = {}, a2 = e2;
    for (let r3 in e2) {
      let i3 = e2[r3];
      B(i3, `route must be defined`);
      let { path: a3, pathLocalized: o2 } = i3;
      if (a3 && (t2[a3] = { path: a3, depth: qr(a3), routeId: r3 }, o2)) for (let e3 in o2) {
        let t3 = o2[e3];
        B(t3, `localizedPath must be defined`);
        let i4 = qr(t3), a4 = n2[e3] ||= {};
        a4[t3] = { path: t3, depth: i4, routeId: r3 };
      }
    }
    for (let e3 in r2 = Object.values(t2), r2.sort(({ depth: e4 }, { depth: t3 }) => t3 - e4), n2) {
      let t3 = n2[e3];
      if (!t3) continue;
      let r3 = Object.values(t3);
      r3.sort(({ depth: e4 }, { depth: t4 }) => t4 - e4), i2[e3] = r3;
    }
    Q_ = { pathRoutes: t2, pathRoutesLocalized: n2, paths: r2, pathsLocalized: i2, lastRoutes: a2 };
  }
  return { pathRoutes: Q_.pathRoutes, paths: Q_.paths, pathRoutesLocalized: Q_.pathRoutesLocalized, pathsLocalized: Q_.pathsLocalized };
}
function Gr(e2, t2, n2 = true, r2 = Ur()) {
  return Kr(e2, t2, r2, n2);
}
function Kr(e2, t2, n2, r2 = true) {
  let { pathRoutes: i2, paths: a2, pathRoutesLocalized: o2, pathsLocalized: s2 } = Wr(e2), c2, l2, u2 = false;
  if (n2.length > 0) {
    let e3 = t2.split(`/`).find(Boolean);
    if (e3 && (c2 = n2.find(({ slug: t3 }) => t3 === e3), c2 && (l2 = c2.id, t2 = t2.substring(c2.slug.length + 1), u2 = true)), !l2) {
      let e4 = n2.find(({ slug: e5 }) => e5 === ``);
      e4 && (l2 = e4.id);
    }
  }
  if (l2 && u2) {
    let e3 = o2[l2], n3 = e3 ? e3[t2] : void 0;
    if (n3) {
      let e4 = Jr(t2, n3.path);
      if (e4.isMatch) return { routeId: n3.routeId, localeId: l2, pathVariables: e4.pathVariables };
    }
  }
  let d2 = i2[t2];
  if (d2) {
    let e3 = Jr(t2, d2.path);
    if (e3.isMatch) return { routeId: d2.routeId, localeId: l2, pathVariables: e3.pathVariables };
  }
  if (l2 && u2) {
    let e3 = s2[l2];
    if (e3) for (let { path: n3, routeId: r3 } of e3) {
      let e4 = Jr(t2, n3);
      if (e4.isMatch) return { routeId: r3, localeId: l2, pathVariables: e4.pathVariables };
    }
  }
  for (let { path: e3, routeId: n3 } of a2) {
    let r3 = Jr(t2, e3);
    if (r3.isMatch) return { routeId: n3, localeId: l2, pathVariables: r3.pathVariables };
  }
  if (!r2) throw Error(`No exact match found for path`);
  let f2 = i2[`/`];
  if (f2) return { routeId: f2.routeId, localeId: l2 };
  let p2 = Object.keys(e2)[0];
  if (!p2) throw Error(`Router should not have undefined routes`);
  return { routeId: p2, localeId: l2 };
}
function qr(e2) {
  let t2 = e2.replace(/^\/|\/$/gu, ``);
  return t2 === `` ? 0 : t2.split(`/`).length;
}
function Jr(e2, t2) {
  let n2 = [], r2 = Yr(t2).replace(Xg, (e3, t3) => (n2.push(t3), `([^/]+)`)), i2 = RegExp(r2 + `$`), a2 = e2.match(i2);
  if (!a2) return { isMatch: false };
  if (a2.length === 1) return { isMatch: true };
  let o2 = {}, s2 = a2.slice(1);
  for (let e3 = 0; e3 < n2.length; ++e3) {
    let t3 = n2[e3];
    if (t3 === void 0) continue;
    let r3 = s2[e3], i3 = o2[t3];
    if (i3) {
      if (i3 !== r3) return { isMatch: false };
      continue;
    }
    if (r3 === void 0) throw Error(`Path variable values cannot be undefined`);
    o2[t3] = r3;
  }
  return { isMatch: true, pathVariables: o2 };
}
function Yr(e2) {
  return e2.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Xr() {
  if (`PerformanceServerTiming` in n) {
    let e2 = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e2 || e2.length === 0) return new URLSearchParams();
    let t2 = e2.find((e3) => e3.name === `abtests`);
    return t2 ? new URLSearchParams(t2.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Zr(e2, t2, n2) {
  let r2 = e2[n2];
  if (!r2) return;
  let i2 = r2.abTestingParentId ?? n2;
  if (!e2[i2]) return;
  let { abTestingParentId: a2, ...o2 } = r2, s2 = e2[i2].elements || r2.elements ? { ...e2[i2].elements, ...r2.elements } : void 0;
  e2[i2] = { ...o2, elements: s2, abTestingVariantId: n2, abTestId: t2 };
}
function Qr(e2, t2) {
  for (let [n2, r2] of t2) Zr(e2, n2, r2);
}
function $r(e2) {
  for (let t2 in e2) e2[t2]?.abTestingParentId && delete e2[t2];
}
function ei(e2, t2) {
  if (!e2[t2] || !e2[t2].abTestingParentId) return;
  let n2 = e2[t2].abTestingParentId, { abTestingParentId: r2, ...i2 } = e2[t2], a2 = e2[n2]?.elements || i2.elements ? { ...e2[n2]?.elements, ...i2.elements } : void 0;
  e2[n2] = { ...i2, elements: a2, abTestingVariantId: t2 };
}
function ti(e2, t2) {
  if (n === void 0) return t2;
  let r2 = t2;
  if (t2) {
    ei(e2, t2);
    let n2 = e2[t2]?.abTestingParentId;
    n2 && (r2 = n2);
  }
  return Qr(e2, Xr()), $r(e2), r2;
}
function ni(e2) {
  d(() => {
    if (e2.robots) {
      let t2 = document.querySelector(`meta[name="robots"]`);
      t2 ? t2.setAttribute(`content`, e2.robots) : (t2 = document.createElement(`meta`), t2.setAttribute(`name`, `robots`), t2.setAttribute(`content`, e2.robots), document.head.appendChild(t2));
    }
  }, [e2.robots]), j(() => {
    document.title = e2.title || ``, e2.viewport && document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e2.viewport);
  }, [e2.title, e2.viewport]);
}
function ri(e2, ...t2) {
  $_.has(e2) || ($_.add(e2), console.warn(e2, ...t2));
}
function ii(e2, t2, n2) {
  ri(`Deprecation warning: ${e2} will be removed in version ${t2}${n2 ? `, use ${n2} instead` : ``}.`);
}
function ai(e2) {
  return typeof e2 == `object` && !!e2 && nv in e2 && e2[nv] instanceof Function && rv in e2 && e2[rv] instanceof Function;
}
function oi(e2, t2) {
  return { interpolate(e3, n2) {
    let r2 = e3.get(), i2 = n2.get(), a2 = tv(r2);
    return (e4) => {
      let n3 = t2.interpolate(r2, i2)(e4);
      return a2.set(n3), a2;
    };
  }, difference(e3, n2) {
    let r2 = e3.get();
    return t2.difference(r2, n2.get());
  } };
}
function si(e2, t2) {
  let n2 = 10 ** Math.round(Math.abs(t2));
  return Math.round(e2 * n2) / n2;
}
function ci(e2, t2) {
  return t2 === 0 ? Math.round(e2) : (t2 -= t2 | 0, t2 < 0 && (t2 = 1 - t2), Math.round(e2 - t2) + t2);
}
function li(e2) {
  return Math.round(e2 * 2) / 2;
}
function ui(e2, t2) {
  return { x: e2, y: t2 };
}
function di(e2, t2, n2, r2 = false) {
  let [i2, a2] = t2, [o2, s2] = n2, c2 = a2 - i2;
  if (c2 === 0) return (s2 + o2) / 2;
  let l2 = s2 - o2;
  if (l2 === 0) return o2;
  let u2 = o2 + (e2 - i2) / c2 * l2;
  if (r2 === true) if (o2 < s2) {
    if (u2 < o2) return o2;
    if (u2 > s2) return s2;
  } else {
    if (u2 > o2) return o2;
    if (u2 < s2) return s2;
  }
  return u2;
}
function fi(e2) {
  return !Number.isNaN(e2) && Number.isFinite(e2);
}
function pi(e2) {
  let t2 = mi(e2);
  return t2 === void 0 ? 0 : e2.includes(`%`) ? t2 / 100 : t2;
}
function mi(e2) {
  let t2 = /\d?\.?\d+/u.exec(e2);
  return t2 ? Number(t2[0]) : void 0;
}
function hi(e2, t2, n2) {
  return ov.rgb_r = e2 / 255, ov.rgb_g = t2 / 255, ov.rgb_b = n2 / 255, ov.rgbToHsluv(), { h: ov.hsluv_h, s: ov.hsluv_s, l: ov.hsluv_l };
}
function gi(e2, t2, n2, r2 = 1) {
  return ov.hsluv_h = e2, ov.hsluv_s = t2, ov.hsluv_l = n2, ov.hsluvToRgb(), { r: ov.rgb_r * 255, g: ov.rgb_g * 255, b: ov.rgb_b * 255, a: r2 };
}
function _i(e2, t2, n2, r2) {
  let i2 = Math.round(e2), a2 = Math.round(t2 * 100), o2 = Math.round(n2 * 100);
  return r2 === void 0 || r2 === 1 ? `hsv(` + i2 + `, ` + a2 + `%, ` + o2 + `%)` : `hsva(` + i2 + `, ` + a2 + `%, ` + o2 + `%, ` + r2 + `)`;
}
function vi(e2, t2, n2) {
  return { r: fi(e2) ? Ti(e2, 255) * 255 : 0, g: fi(t2) ? Ti(t2, 255) * 255 : 0, b: fi(n2) ? Ti(n2, 255) * 255 : 0 };
}
function yi(e2, t2, n2, r2) {
  let i2 = [Oi(Math.round(e2).toString(16)), Oi(Math.round(t2).toString(16)), Oi(Math.round(n2).toString(16))];
  return r2 && i2[0].charAt(0) === i2[0].charAt(1) && i2[1].charAt(0) === i2[1].charAt(1) && i2[2].charAt(0) === i2[2].charAt(1) ? i2[0].charAt(0) + i2[1].charAt(0) + i2[2].charAt(0) : i2.join(``);
}
function bi(e2, t2, n2) {
  let r2, i2, a2 = Ti(e2, 255), o2 = Ti(t2, 255), s2 = Ti(n2, 255), c2 = Math.max(a2, o2, s2), l2 = Math.min(a2, o2, s2), u2 = i2 = r2 = (c2 + l2) / 2;
  if (c2 === l2) u2 = i2 = 0;
  else {
    let e3 = c2 - l2;
    switch (i2 = r2 > 0.5 ? e3 / (2 - c2 - l2) : e3 / (c2 + l2), c2) {
      case a2:
        u2 = (o2 - s2) / e3 + (o2 < s2 ? 6 : 0);
        break;
      case o2:
        u2 = (s2 - a2) / e3 + 2;
        break;
      case s2:
        u2 = (a2 - o2) / e3 + 4;
        break;
    }
    u2 /= 6;
  }
  return { h: u2 * 360, s: i2, l: r2 };
}
function xi(e2, t2, n2) {
  return n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e2 + (t2 - e2) * 6 * n2 : n2 < 1 / 2 ? t2 : n2 < 2 / 3 ? e2 + (t2 - e2) * (2 / 3 - n2) * 6 : e2;
}
function Si(e2, t2, n2) {
  let r2, i2, a2;
  if (e2 = Ti(e2, 360), t2 = Ti(t2 * 100, 100), n2 = Ti(n2 * 100, 100), t2 === 0) r2 = i2 = a2 = n2;
  else {
    let o2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, s2 = 2 * n2 - o2;
    r2 = xi(s2, o2, e2 + 1 / 3), i2 = xi(s2, o2, e2), a2 = xi(s2, o2, e2 - 1 / 3);
  }
  return { r: r2 * 255, g: i2 * 255, b: a2 * 255 };
}
function Ci(e2, t2, n2) {
  e2 = Ti(e2, 255), t2 = Ti(t2, 255), n2 = Ti(n2, 255);
  let r2 = Math.max(e2, t2, n2), i2 = Math.min(e2, t2, n2), a2 = r2 - i2, o2 = 0, s2 = r2 === 0 ? 0 : a2 / r2, c2 = r2;
  if (r2 === i2) o2 = 0;
  else {
    switch (r2) {
      case e2:
        o2 = (t2 - n2) / a2 + (t2 < n2 ? 6 : 0);
        break;
      case t2:
        o2 = (n2 - e2) / a2 + 2;
        break;
      case n2:
        o2 = (e2 - t2) / a2 + 4;
        break;
    }
    o2 /= 6;
  }
  return { h: o2, s: s2, v: c2 };
}
function wi(e2, t2, n2) {
  e2 = Ti(e2, 360) * 6, t2 = Ti(t2 * 100, 100), n2 = Ti(n2 * 100, 100);
  let r2 = Math.floor(e2), i2 = e2 - r2, a2 = n2 * (1 - t2), o2 = n2 * (1 - i2 * t2), s2 = n2 * (1 - (1 - i2) * t2), c2 = r2 % 6, l2 = [n2, o2, a2, a2, s2, n2][c2], u2 = [s2, n2, n2, o2, a2, a2][c2], d2 = [a2, a2, s2, n2, n2, o2][c2];
  return { r: l2 * 255, g: u2 * 255, b: d2 * 255 };
}
function Ti(e2, t2) {
  let n2, r2;
  if (n2 = typeof t2 == `string` ? parseFloat(t2) : t2, typeof e2 == `string`) {
    Ei(e2) && (e2 = `100%`);
    let t3 = Di(e2);
    r2 = Math.min(n2, Math.max(0, parseFloat(e2))), t3 && (r2 = Math.floor(r2 * n2) / 100);
  } else r2 = e2;
  return Math.abs(r2 - n2) < 1e-6 ? 1 : r2 % n2 / n2;
}
function Ei(e2) {
  return typeof e2 == `string` && e2.includes(`.`) && parseFloat(e2) === 1;
}
function Di(e2) {
  return typeof e2 == `string` && e2.includes(`%`);
}
function Oi(e2) {
  return e2.length === 1 ? `0` + e2 : `` + e2;
}
function ki(e2) {
  if (e2.includes(`gradient(`) || e2.includes(`var(`)) return false;
  let t2 = e2.replace(/^[\s,#]+/u, ``).trimEnd().toLowerCase(), n2 = av[t2];
  if (n2 && (t2 = n2), t2 === `transparent`) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r2;
  return (r2 = sv.rgb.exec(t2)) ? { r: parseInt(r2[1] ?? ``), g: parseInt(r2[2] ?? ``), b: parseInt(r2[3] ?? ``), a: 1, format: `rgb` } : (r2 = sv.rgba.exec(t2)) ? { r: parseInt(r2[1] ?? ``), g: parseInt(r2[2] ?? ``), b: parseInt(r2[3] ?? ``), a: parseFloat(r2[4] ?? ``), format: `rgb` } : (r2 = sv.hsl.exec(t2)) ? { h: parseInt(r2[1] ?? ``), s: pi(r2[2] ?? ``), l: pi(r2[3] ?? ``), a: 1, format: `hsl` } : (r2 = sv.hsla.exec(t2)) ? { h: parseInt(r2[1] ?? ``), s: pi(r2[2] ?? ``), l: pi(r2[3] ?? ``), a: parseFloat(r2[4] ?? ``), format: `hsl` } : (r2 = sv.hsv.exec(t2)) ? { h: parseInt(r2[1] ?? ``), s: pi(r2[2] ?? ``), v: pi(r2[3] ?? ``), a: 1, format: `hsv` } : (r2 = sv.hsva.exec(t2)) ? { h: parseInt(r2[1] ?? ``), s: pi(r2[2] ?? ``), v: pi(r2[3] ?? ``), a: parseFloat(r2[4] ?? ``), format: `hsv` } : (r2 = sv.hex8.exec(t2)) ? { r: Ai(r2[1] ?? ``), g: Ai(r2[2] ?? ``), b: Ai(r2[3] ?? ``), a: ji(r2[4] ?? ``), format: n2 ? `name` : `hex` } : (r2 = sv.hex6.exec(t2)) ? { r: Ai(r2[1] ?? ``), g: Ai(r2[2] ?? ``), b: Ai(r2[3] ?? ``), a: 1, format: n2 ? `name` : `hex` } : (r2 = sv.hex4.exec(t2)) ? { r: Ai(`${r2[1]}${r2[1]}`), g: Ai(`${r2[2]}${r2[2]}`), b: Ai(`${r2[3]}${r2[3]}`), a: ji(r2[4] + `` + r2[4]), format: n2 ? `name` : `hex` } : (r2 = sv.hex3.exec(t2)) ? { r: Ai(`${r2[1]}${r2[1]}`), g: Ai(`${r2[2]}${r2[2]}`), b: Ai(`${r2[3]}${r2[3]}`), a: 1, format: n2 ? `name` : `hex` } : false;
}
function Ai(e2) {
  return parseInt(e2, 16);
}
function ji(e2) {
  return Ai(e2) / 255;
}
function Mi(e2) {
  let t2 = cv.exec(e2);
  if (!t2) return null;
  let { r: n2 = `0`, g: r2 = `0`, b: i2 = `0`, a: a2 } = t2.groups ?? {};
  return { r: parseFloat(n2), g: parseFloat(r2), b: parseFloat(i2), a: a2 ? parseFloat(a2) : 1 };
}
function Ni(e2 = 0) {
  let t2 = Math.abs(e2);
  return t2 <= 0.04045 ? e2 / 12.92 : (Math.sign(e2) || 1) * ((t2 + 0.055) / 1.055) ** 2.4;
}
function Pi({ r: e2, g: t2, b: n2, a: r2 }) {
  return { r: Ni(e2), g: Ni(t2), b: Ni(n2), a: r2 };
}
function Fi(e2 = 0) {
  let t2 = Math.abs(e2);
  return t2 > 31308e-7 ? (Math.sign(e2) || 1) * (1.055 * t2 ** (1 / 2.4) - 0.055) : e2 * 12.92;
}
function Ii({ r: e2, g: t2, b: n2, a: r2 }) {
  return { r: Fi(e2), g: Fi(t2), b: Fi(n2), a: r2 };
}
function Li({ r: e2, g: t2, b: n2, a: r2 }) {
  let i2 = Math.max(e2, t2, n2), a2 = Math.min(e2, t2, n2), o2 = { h: 0, s: i2 === 0 ? 0 : 1 - a2 / i2, v: i2, a: r2 };
  return i2 - a2 !== 0 && (o2.h = (i2 === e2 ? (t2 - n2) / (i2 - a2) + (t2 < n2 ? 6 : 0) : i2 === t2 ? (n2 - e2) / (i2 - a2) + 2 : (e2 - t2) / (i2 - a2) + 4) * 60), o2;
}
function Ri(e2) {
  return (e2 %= 360) < 0 ? e2 + 360 : e2;
}
function zi({ h: e2 = 0, s: t2 = 0, v: n2 = 0, a: r2 = 1 }) {
  let i2 = Ri(e2), a2 = Math.abs(i2 / 60 % 2 - 1);
  switch (Math.floor(i2 / 60)) {
    case 0:
      return { r: n2, g: n2 * (1 - t2 * a2), b: n2 * (1 - t2), a: r2 };
    case 1:
      return { r: n2 * (1 - t2 * a2), g: n2, b: n2 * (1 - t2), a: r2 };
    case 2:
      return { r: n2 * (1 - t2), g: n2, b: n2 * (1 - t2 * a2), a: r2 };
    case 3:
      return { r: n2 * (1 - t2), g: n2 * (1 - t2 * a2), b: n2, a: r2 };
    case 4:
      return { r: n2 * (1 - t2 * a2), g: n2 * (1 - t2), b: n2, a: r2 };
    case 5:
      return { r: n2, g: n2 * (1 - t2), b: n2 * (1 - t2 * a2), a: r2 };
    default:
      return { r: n2 * (1 - t2), g: n2 * (1 - t2), b: n2 * (1 - t2), a: r2 };
  }
}
function Bi(e2) {
  return fv(dv(e2));
}
function Vi(e2) {
  return uv(lv(e2));
}
function Hi(e2, t2, n2, r2 = 1) {
  let i2;
  return typeof e2 == `number` && !Number.isNaN(e2) && typeof t2 == `number` && !Number.isNaN(t2) && typeof n2 == `number` && !Number.isNaN(n2) ? i2 = Gi({ r: e2, g: t2, b: n2, a: r2 }) : typeof e2 == `string` ? i2 = Ui(e2) : typeof e2 == `object` && (i2 = e2.hasOwnProperty(`r`) && e2.hasOwnProperty(`g`) && e2.hasOwnProperty(`b`) ? Gi(e2) : Ki(e2)), i2;
}
function Ui(e2) {
  let t2 = ki(e2);
  if (t2) return t2.format === `hsl` ? Ki(t2) : t2.format === `hsv` ? Wi(t2) : Gi(t2);
}
function Wi(e2) {
  let t2 = wi(e2.h, e2.s, e2.v);
  return { ...bi(t2.r, t2.g, t2.b), ...t2, format: `rgb`, a: e2.a === void 0 ? 1 : qi(e2.a) };
}
function Gi(e2) {
  let t2 = vi(e2.r, e2.g, e2.b);
  return { ...bi(t2.r, t2.g, t2.b), ...t2, format: `rgb`, a: e2.a === void 0 ? 1 : qi(e2.a) };
}
function Ki(e2) {
  let t2, n2, r2, i2 = { r: 0, g: 0, b: 0 }, a2 = { h: 0, s: 0, l: 0 };
  return t2 = fi(e2.h) ? e2.h : 0, t2 = (t2 + 360) % 360, n2 = fi(e2.s) ? e2.s : 1, typeof e2.s == `string` && (n2 = mi(e2.s)), r2 = fi(e2.l) ? e2.l : 0.5, typeof e2.l == `string` && (r2 = mi(e2.l)), i2 = Si(t2, n2, r2), a2 = { h: t2, s: n2, l: r2 }, { ...i2, ...a2, a: e2.a === void 0 ? 1 : e2.a, format: `hsl` };
}
function qi(e2) {
  return e2 = parseFloat(e2), e2 < 0 && (e2 = 0), (Number.isNaN(e2) || e2 > 1) && (e2 = 1), e2;
}
function Ji({ children: e2 }) {
  if (C(Ev).top) return _(O, { children: e2 });
  let t2 = w({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}, count: { byId: {}, byName: {} } }), n2 = w({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }), r2 = w(/* @__PURE__ */ new Set()).current, i2 = w({ getLayoutId: l(({ id: e3, name: i3, duplicatedFrom: a2 }) => {
    if (!e3) return null;
    let o2 = i3 ? `byName` : `byId`, s2 = t2.current[o2][e3];
    if (s2) return s2;
    let c2 = i3 || e3;
    if (!a2 && !r2.has(c2) && (!t2.current.byLayoutId[c2] || t2.current.byLayoutId[c2] === c2)) return t2.current.count[o2][c2] === void 0 && (t2.current.count[o2][c2] = 0, t2.current.byLayoutId[c2] = c2, n2.current[o2][e3] = c2), r2.add(c2), c2;
    let l2;
    if (a2?.length) for (let s3 = a2.length - 1; s3 >= 0; s3--) {
      let c3 = a2[s3];
      B(!!c3, `duplicatedId must be defined`);
      let u3 = t2.current[o2][c3], d3 = t2.current.byLastId[c3];
      if (d3 && !l2) {
        let e4 = t2.current.byLayoutId[d3], n3 = !e4 || e4 === i3;
        d3 && !r2.has(d3) && (!i3 || n3) && (l2 = [d3, c3]);
      }
      let f3 = u3 ? t2.current.byLayoutId[u3] : void 0, p3 = !f3 || f3 === i3;
      if (u3 && !r2.has(u3) && (!i3 || p3)) return n2.current[o2][e3] = u3, n2.current.byLastId[c3] = u3, r2.add(u3), u3;
    }
    let u2 = t2.current.byLastId[e3];
    if (u2 && !r2.has(u2)) return r2.add(u2), n2.current.byId[e3] = u2, u2;
    if (l2) {
      let [t3, i4] = l2;
      return n2.current[o2][e3] = t3, n2.current.byLastId[i4] = t3, r2.add(t3), t3;
    }
    let d2 = t2.current.byPossibleId[e3];
    if (d2 && !r2.has(d2)) return r2.add(d2), n2.current.byId[e3] = d2, d2;
    let f2 = a2?.[0], p2 = i3 || f2 || e3, { layoutId: m2, value: h2 } = Yi(p2, (t2.current.count[o2][p2] ?? -1) + 1, r2);
    if (t2.current.count[o2][p2] = h2, n2.current[o2][e3] = m2, a2?.length && !i3) {
      let e4 = a2[a2.length - 1];
      if (e4 && (n2.current.byLastId[e4] = m2), a2.length > 1) for (let e5 = 0; e5 < a2.length - 1; e5++) {
        let t3 = a2[e5];
        t3 !== void 0 && (n2.current.byPossibleId[t3] || (n2.current.byPossibleId[t3] = m2));
      }
    }
    return n2.current.byLayoutId[m2] = c2, r2.add(m2), m2;
  }, []), persistLayoutIdCache: l(() => {
    t2.current = { byId: { ...t2.current.byId, ...n2.current.byId }, byLastId: { ...t2.current.byLastId, ...n2.current.byLastId }, byPossibleId: { ...t2.current.byPossibleId, ...n2.current.byPossibleId }, byName: { ...t2.current.byName, ...n2.current.byName }, byLastName: { ...t2.current.byLastName, ...n2.current.byLastName }, byLayoutId: { ...t2.current.byLayoutId, ...n2.current.byLayoutId }, count: { ...t2.current.count, byName: {} } }, n2.current = { byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }, r2.clear();
  }, []), top: true, enabled: true }).current;
  return _(Ev.Provider, { value: i2, children: e2 });
}
function Yi(e2, t2, n2) {
  let r2 = t2, i2 = r2 ? `${e2}-${r2}` : e2;
  for (; n2.has(i2); ) r2++, i2 = `${e2}-${r2}`;
  return { layoutId: i2, value: r2 };
}
function Xi({ enabled: e2 = true, ...t2 }) {
  let n2 = C(Ev), r2 = c(() => ({ ...n2, enabled: e2 }), [e2]);
  return _(Ev.Provider, { ...t2, value: r2 });
}
function Zi(e2) {
  let t2 = w(null);
  return t2.current === null && (t2.current = e2()), t2.current;
}
function Qi(e2) {
  let { error: t2, file: n2 } = e2, r2 = n2 ? `Error in ${$i(n2)}` : `Error`, i2 = t2 instanceof Error ? t2.message : `` + t2;
  return T(`div`, { style: Ov, children: [_(`div`, { className: `text`, style: Av, children: r2 }), i2 && _(`div`, { className: `text`, style: jv, children: i2 })] });
}
function $i(e2) {
  return e2.startsWith(`./`) ? e2.replace(`./`, ``) : e2;
}
function H(e2) {
  return Number.isFinite(e2);
}
function ea(e2) {
  return !e2 || !Object.keys(e2).length && e2.constructor === Object;
}
function ta(e2) {
  return typeof e2 != `string` && typeof e2 != `number`;
}
function na(e2) {
  return e2 != null && typeof e2 != `boolean` && !ea(e2);
}
function ra(e2) {
  return e2 * (Math.PI / 180);
}
function ia(e2) {
  return tt(e2) ? false : e2 === 2 || e2 === 5;
}
function aa(e2) {
  if (typeof e2 == `string`) {
    let t2 = e2.trim();
    if (t2 === `auto`) return 2;
    if (t2.endsWith(`fr`)) return 3;
    if (t2.endsWith(`%`)) return 1;
    if (t2.endsWith(`vw`) || t2.endsWith(`vh`)) return 4;
  }
  return 0;
}
function oa(e2, t2, n2, r2) {
  if (typeof t2 == `string`) {
    if (t2.endsWith(`%`) && n2) switch (e2) {
      case `maxWidth`:
      case `minWidth`:
        return parseFloat(t2) / 100 * n2.width;
      case `maxHeight`:
      case `minHeight`:
        return parseFloat(t2) / 100 * n2.height;
      default:
        break;
    }
    if (t2.endsWith(`vh`)) {
      if (!r2) return sa(e2);
      switch (e2) {
        case `maxWidth`:
        case `minWidth`:
          return parseFloat(t2) / 100 * r2.width;
        case `maxHeight`:
        case `minHeight`:
          return parseFloat(t2) / 100 * r2.height;
        default:
          break;
      }
    }
    return parseFloat(t2);
  }
  return t2;
}
function sa(e2) {
  switch (e2) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e2, `unknown constraint key`);
  }
}
function ca(e2, t2, n2, r2) {
  return t2.minHeight && (e2 = Math.max(oa(`minHeight`, t2.minHeight, n2, r2), e2)), t2.maxHeight && (e2 = Math.min(oa(`maxHeight`, t2.maxHeight, n2, r2), e2)), e2;
}
function la(e2, t2, n2, r2) {
  return t2.minWidth && (e2 = Math.max(oa(`minWidth`, t2.minWidth, n2, r2), e2)), t2.maxWidth && (e2 = Math.min(oa(`maxWidth`, t2.maxWidth, n2, r2), e2)), e2;
}
function ua(e2, t2, n2, r2, i2) {
  let a2 = la(H(e2) ? e2 : Iv, n2, r2, i2), o2 = ca(H(t2) ? t2 : Lv, n2, r2, i2);
  return H(n2.aspectRatio) && n2.aspectRatio > 0 && (H(n2.left) && H(n2.right) ? o2 = a2 / n2.aspectRatio : H(n2.top) && H(n2.bottom) || n2.widthType === 0 ? a2 = o2 * n2.aspectRatio : o2 = a2 / n2.aspectRatio), { width: a2, height: o2 };
}
function da(e2, t2) {
  return !H(e2) || !H(t2) ? null : e2 + t2;
}
function fa(e2) {
  return typeof e2.right == `string` || typeof e2.bottom == `string` || typeof e2.left == `string` && (!e2.center || e2.center === `y`) || typeof e2.top == `string` && (!e2.center || e2.center === `x`);
}
function pa(e2) {
  return !e2._constraints || fa(e2) ? false : e2._constraints.enabled;
}
function ma(e2) {
  let { size: t2 } = e2, { width: n2, height: r2 } = e2;
  return H(t2) && (n2 === void 0 && (n2 = t2), r2 === void 0 && (r2 = t2)), H(n2) && H(r2) ? { width: n2, height: r2 } : null;
}
function ha(e2) {
  let t2 = ma(e2);
  if (t2 === null) return null;
  let { left: n2, top: r2 } = e2;
  return H(n2) && H(r2) ? { x: n2, y: r2, ...t2 } : null;
}
function ga(e2, t2, n2 = true) {
  if (e2.positionFixed || e2.positionAbsolute) return null;
  let r2 = t2 === 1 || t2 === 2;
  if (!pa(e2) || r2) return ha(e2);
  let i2 = _a(e2), a2 = va(t2), o2 = a2 ? { sizing: a2, positioning: a2, viewport: null } : null;
  return Fv.toRect(i2, o2, null, n2, null);
}
function _a(e2) {
  let { left: t2, right: n2, top: r2, bottom: i2, center: a2, _constraints: o2, size: s2 } = e2, { width: c2, height: l2 } = e2;
  c2 === void 0 && (c2 = s2), l2 === void 0 && (l2 = s2);
  let { aspectRatio: u2, autoSize: d2 } = o2, f2 = Pv.quickfix({ left: H(t2), right: H(n2), top: H(r2), bottom: H(i2), widthType: aa(c2), heightType: aa(l2), aspectRatio: u2 || null, fixedSize: d2 === true }), p2 = null, m2 = null, h2 = 0, g2 = 0;
  if (f2.widthType !== 0 && typeof c2 == `string`) {
    let e3 = parseFloat(c2);
    c2.endsWith(`fr`) ? (h2 = 3, p2 = e3) : c2 === `auto` ? h2 = 2 : (h2 = 1, p2 = e3 / 100);
  } else c2 !== void 0 && typeof c2 != `string` && (p2 = c2);
  if (f2.heightType !== 0 && typeof l2 == `string`) {
    let e3 = parseFloat(l2);
    l2.endsWith(`fr`) ? (g2 = 3, m2 = e3) : l2 === `auto` ? g2 = 2 : (g2 = 1, m2 = parseFloat(l2) / 100);
  } else l2 !== void 0 && typeof l2 != `string` && (m2 = l2);
  let _2 = 0.5, v2 = 0.5;
  return (a2 === true || a2 === `x`) && (f2.left = false, typeof t2 == `string` && (_2 = parseFloat(t2) / 100)), (a2 === true || a2 === `y`) && (f2.top = false, typeof r2 == `string` && (v2 = parseFloat(r2) / 100)), { left: f2.left ? t2 : null, right: f2.right ? n2 : null, top: f2.top ? r2 : null, bottom: f2.bottom ? i2 : null, widthType: h2, heightType: g2, width: p2, height: m2, aspectRatio: f2.aspectRatio || null, centerAnchorX: _2, centerAnchorY: v2, minHeight: e2.minHeight, maxHeight: e2.maxHeight, minWidth: e2.minWidth, maxWidth: e2.maxWidth };
}
function va(e2) {
  return e2 === 0 || e2 === 1 || e2 === 2 ? null : e2;
}
function ya() {
  return p.useContext(Rv).parentSize;
}
function ba(e2) {
  return typeof e2 == `object`;
}
function xa(e2) {
  return ba(e2) ? e2.width : e2;
}
function Sa(e2) {
  return ba(e2) ? e2.height : e2;
}
function Ca(e2, t2) {
  return _(zv, { parentSize: t2, children: e2 });
}
function wa(e2) {
  return ga(e2, ya(), true);
}
function Ta({ width: e2, height: t2 }) {
  return e2 === `auto` || e2 === `min-content` || t2 === `auto` || t2 === `min-content`;
}
function Ea() {
  return ne === void 0 ? void 0 : ne;
}
function Da() {
  let e2 = Ea();
  return e2 ? Vv.test(e2.platform) : false;
}
function Oa() {
  let e2 = Ea();
  return e2 ? Hv.test(e2.platform) ? true : Uv.test(e2.platform) && e2.maxTouchPoints != null && e2.maxTouchPoints > 2 : false;
}
function ka() {
  return Da() || Oa();
}
function Aa() {
  let e2 = Ea();
  return e2 ? Wv.test(e2.userAgent) : false;
}
function ja() {
  let e2 = Ea();
  return e2 ? Gv.test(e2.userAgent) && Kv.test(e2.vendor) && !Aa() : false;
}
function Ma() {
  let e2 = Ea();
  return e2 ? qv.test(e2.userAgent) && Jv.test(e2.vendor) : false;
}
function Na() {
  let e2 = Ea();
  return e2 ? Yv.test(e2.userAgent) : false;
}
function Pa() {
  return typeof document == `object`;
}
function Fa() {
  let e2 = Ea();
  return e2 ? Xv.test(e2.userAgent) : false;
}
function Ia() {
  return false;
}
function La() {
  let e2 = Ea();
  return e2 && Zv.test(e2.userAgent) ? `tablet` : e2 && Qv.test(e2.userAgent) ? `phone` : `desktop`;
}
function Ra() {
  return La() === `desktop`;
}
function za(e2) {
  return ka() ? e2.metaKey : e2.ctrlKey;
}
function Ba(e2, t2, n2 = ey) {
  if (!(!e2 || n2.has(e2) || typeof document > `u`)) {
    if (n2.add(e2), !t2) {
      if (!ty) {
        let e3 = document.createElement(`style`);
        if (e3.setAttribute(`type`, `text/css`), e3.setAttribute(`data-framer-css`, `true`), !document.head) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if (document.head.appendChild(e3), e3.sheet) ty = e3.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e3);
          return;
        }
      }
      t2 = ty;
    }
    try {
      t2.insertRule(e2, t2.cssRules.length);
    } catch {
    }
  }
}
function Va() {
  if (cy !== void 0) return cy;
  let e2 = document.createElement(`div`);
  Object.assign(e2.style, { position: `absolute`, display: `flex`, flexDirection: `column`, rowGap: `1px` }), e2.appendChild(document.createElement(`div`)), e2.appendChild(document.createElement(`div`)), document.body.appendChild(e2);
  let t2 = e2.scrollHeight === 1;
  return e2.parentNode && e2.parentNode.removeChild(e2), cy = t2, t2;
}
function Ha() {
  uy || (uy = true, !Va() && document.body.classList.add(ly));
}
function Ua(e2) {
  return typeof e2 == `number` ? e2 : e2.startsWith(`--`) ? X.variable(e2) : e2 === `` ? `""` : e2;
}
function Wa(e2) {
  return e2 !== xy && e2 !== Sy;
}
function Ga(e2) {
  for (let t2 in e2) if (Wa(t2) && e2?.[t2] === true) return true;
  return false;
}
function Ka(e2, t2, n2, r2, i2) {
  let a2 = p.useRef(null), o2 = p.useCallback((e3) => {
    t2 && a2.current !== false && (a2.current = false, e3.currentTarget.setCustomValidity(` `), e3.currentTarget.reportValidity(), t2(e3));
  }, [t2]), s2 = p.useCallback((r3) => {
    if (n2?.(r3), !t2 && !e2) return;
    let i3 = r3.target.validity;
    a2.current === false && !Ga(i3) && (r3.currentTarget.setCustomValidity(``), r3.target.reportValidity(), a2.current = true, e2?.());
  }, [t2, e2, n2]), c2 = p.useCallback((e3) => {
    if (!t2) {
      r2?.(e3);
      return;
    }
    if (a2.current === false) return;
    let n3 = e3.currentTarget.validity;
    if (Ga(n3)) {
      o2(e3);
      return;
    }
    r2?.(e3);
  }, [o2, r2, t2]);
  return p.useMemo(() => ({ onInvalid: o2, onChange: s2, onBlur: c2, onFocus: i2 }), [o2, s2, c2, i2]);
}
function qa(e2, t2) {
  return X.variable(...e2.flatMap((e3) => [`${e3}-rgb`, e3]), t2);
}
function Ja(e2, t2) {
  return `${e2} > ${t2}, ${e2} > .ssr-variant > ${t2}`;
}
function Ya() {
  return q.current() === q.preview ? bb : yb;
}
function Xa(e2) {
  return ay(e2, Ya, `framer-lib-combinedCSSRules`);
}
function Za(e2) {
  return z(e2) || Ze(e2);
}
function Qa(e2) {
  return !!e2 && xb in e2 && e2[xb] === true;
}
function $a(e2) {
  try {
    switch (e2.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return L(e2.defaultValue) ? e2.defaultValue : void 0;
      case `boolean`:
        return Qe(e2.defaultValue) ? e2.defaultValue : void 0;
      case `enum`:
        return tt(e2.defaultValue) ? void 0 : e2.options.includes(e2.defaultValue) ? e2.defaultValue : void 0;
      case `fusednumber`:
      case `number`:
        return R(e2.defaultValue) ? e2.defaultValue : void 0;
      case `transition`:
        return z(e2.defaultValue) ? e2.defaultValue : void 0;
      case `border`:
        return z(e2.defaultValue) ? e2.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e2.defaultValue) ? e2.defaultValue : void 0;
      case `linkrelvalues`:
        return $e(e2.defaultValue) ? e2.defaultValue : void 0;
      case `multicollectionreference`:
        return $e(e2.defaultValue) ? e2.defaultValue : void 0;
      case `object`: {
        let t2 = z(e2.defaultValue) ? e2.defaultValue : {};
        return z(e2.controls) && eo(t2, e2.controls), t2;
      }
      case `array`:
        return $e(e2.defaultValue) ? e2.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function eo(e2, t2) {
  for (let n2 in t2) {
    let r2 = t2[n2];
    if (!r2) continue;
    let i2 = e2[n2];
    if (!tt(i2) || Qa(r2)) continue;
    let a2 = $a(r2);
    tt(a2) || (e2[n2] = a2);
  }
}
function to(e2) {
  if (z(e2.defaultProps)) return e2.defaultProps;
  let t2 = {};
  return e2.defaultProps = t2, t2;
}
function no(e2, t2) {
  Za(e2) && eo(to(e2), t2);
}
function ro(e2, t2) {
  Object.assign(e2, { propertyControls: t2 }), no(e2, t2);
}
function io(e2) {
  return e2.propertyControls;
}
function ao() {
  let e2 = q.current();
  return e2 === q.canvas || e2 === q.export;
}
function oo() {
  let [e2] = o(() => ao());
  return e2;
}
function so(e2) {
  let t2 = Object.create(Object.prototype);
  return (n2) => (t2[n2] === void 0 && (t2[n2] = e2(n2)), t2[n2]);
}
function co(e2, t2) {
  if (e2 === void 0 || t2 === void 0) return;
  let n2 = e2, r2 = t2, i2 = 0;
  t2 > e2 && (n2 = t2, r2 = e2, i2 = 1);
  let a2 = n2 / r2, o2 = [];
  for (let e3 of Mb) {
    if (n2 <= e3) return o2;
    o2.push({ maxSideSize: e3, width: i2 === 0 ? e3 : Math.trunc(e3 / a2) });
  }
  return o2;
}
function lo(e2, t2) {
  try {
    let n2 = new URL(e2);
    return t2 ? n2.searchParams.set(`scale-down-to`, `${t2}`) : n2.searchParams.delete(`scale-down-to`), n2.toString();
  } catch {
    return e2;
  }
}
function uo(e2, t2, n2) {
  if (!n2 || n2.length === 0 || !t2.pixelWidth) return;
  let r2 = [];
  for (let t3 of n2) {
    if (t3.width < Nb) continue;
    let n3 = lo(e2, t3.maxSideSize);
    r2.push(`${n3} ${t3.width}w`);
  }
  return r2.push(`${lo(e2, null)} ${t2.pixelWidth}w`), r2.join(`, `) || void 0;
}
function fo(e2, t2, n2) {
  if (!t2.pixelWidth || !t2.pixelHeight || !n2?.width || !n2?.height) return;
  let r2 = [], i2 = Math.max(t2.pixelWidth, t2.pixelHeight), a2 = Math.max(n2.width / t2.pixelWidth, n2.height / t2.pixelHeight);
  for (let t3 of jb) {
    let n3 = lo(e2, Math.round(i2 * t3 * a2));
    r2.push({ src: n3, scale: t3 });
  }
  return r2;
}
function po(e2, t2, n2) {
  if (![`auto`, `lossless`].includes(t2.preferredSize ?? ``)) return { src: n2, srcSet: void 0 };
  if (e2) {
    let r2 = fo(n2, t2, e2);
    if (!r2?.length) return { src: n2, srcSet: void 0 };
    let [i2, ...a2] = r2;
    return { src: i2?.src, srcSet: a2.map(({ src: e3, scale: t3 }) => `${e3} ${t3}x`).join(`, `) };
  } else return { src: n2, srcSet: uo(n2, t2, co(t2.pixelWidth, t2.pixelHeight)) };
}
function mo() {
  return { backgroundRepeat: `repeat`, backgroundPosition: `left top`, backgroundSize: `64px auto`, backgroundImage: ct(kb.imagePlaceholderSvg) };
}
function ho(e2) {
  switch (e2) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function go(e2, t2) {
  let n2 = e2 ?? `center`, r2 = t2 ?? `center`;
  return n2 === `center` && r2 === `center` ? `center` : n2 + ` ` + r2;
}
function _o(e2) {
  return { display: `block`, width: `100%`, height: `100%`, ...Ab, objectPosition: go(e2.positionX, e2.positionY), objectFit: ho(e2.fit) };
}
function vo(e2) {
  let t2 = p.useRef(e2 ? `auto` : `async`), n2 = l((e3) => {
    t2.current = `auto`, e3.decoding = `auto`;
  }, []), r2 = l((e3) => {
    n2(e3.currentTarget);
  }, [n2]), i2 = l((e3) => {
    e3?.complete && n2(e3);
  }, [n2]);
  return { decoding: t2.current, onImageLoad: r2, onImageMount: i2 };
}
function yo({ image: e2, containerSize: t2, nodeId: n2, alt: r2, draggable: i2, avoidAsyncDecoding: a2 }) {
  let o2 = kb.useImageSource(e2, t2, n2), s2 = _o(e2), { decoding: c2, onImageLoad: l2, onImageMount: u2 } = vo(a2), { srcSet: d2, src: f2 } = `srcSet` in e2 ? { src: o2, srcSet: e2.srcSet } : po(e2.nodeFixedSize, e2, o2);
  return _(`img`, { suppressHydrationWarning: true, ref: u2, decoding: c2, fetchpriority: e2.fetchPriority, loading: e2.loading, width: e2.pixelWidth, height: e2.pixelHeight, sizes: d2 ? e2.sizes : void 0, srcSet: d2, src: f2, onLoad: l2, alt: r2 ?? e2.alt ?? ``, style: s2, draggable: i2 });
}
function bo({ image: e2, containerSize: t2, nodeId: n2 }) {
  let r2 = p.useRef(null), i2 = kb.useImageElement(e2, t2, n2), a2 = _o(e2);
  return p.useLayoutEffect(() => {
    let e3 = r2.current;
    if (e3 !== null) return e3.appendChild(i2), () => {
      e3.removeChild(i2);
    };
  }, [i2]), Object.assign(i2.style, a2), _(`div`, { ref: r2, style: { display: `contents`, ...Ab } });
}
function xo({ nodeId: e2, image: t2, containerSize: n2 }) {
  let r2 = p.useRef(null), i2 = kb.useImageSource(t2, n2, e2);
  return p.useLayoutEffect(() => {
    let n3 = r2.current;
    if (n3 === null) return;
    let a2 = _o(t2);
    kb.renderOptimizedCanvasImage(n3, i2, a2, e2);
  }, [e2, t2, i2]), _(`div`, { ref: r2, style: { display: `contents`, ...Ab } });
}
function So({ layoutId: e2, image: t2, ...n2 }) {
  e2 && (e2 += `-background`);
  let r2 = null, i2 = !!e2, a2 = null;
  if (L(t2.src)) if (t2.fit === `tile` && t2.pixelWidth && t2.pixelHeight) {
    let e3 = R(t2.backgroundSize) ? t2.backgroundSize : 1, n3 = { width: Math.round(e3 * t2.pixelWidth), height: Math.round(e3 * t2.pixelHeight) }, o3 = li(e3 * (t2.pixelWidth / 2)), s2 = kb.useImageSource(t2, n3);
    r2 = { ...Pb, backgroundImage: `url(${s2})`, backgroundRepeat: `repeat`, backgroundPosition: go(t2.positionX, t2.positionY), opacity: void 0, border: 0, backgroundSize: `${o3}px auto` }, a2 = null, i2 = true;
  } else a2 = q.current() === q.canvas ? kb.canRenderOptimizedCanvasImage(kb.useImageSource(t2)) ? _(xo, { image: t2, ...n2 }) : _(bo, { image: t2, ...n2 }) : _(yo, { image: t2, avoidAsyncDecoding: q.current() === q.export, ...n2 });
  let o2 = a2 ? Pb : r2 ?? { ...Pb, ...mo() };
  return i2 ? _(qe.div, { layoutId: e2, style: o2, "data-framer-background-image-wrapper": true, children: a2 }) : _(`div`, { style: o2, "data-framer-background-image-wrapper": true, children: a2 });
}
function Co(e2, t2, n2 = true) {
  let { borderWidth: r2, borderStyle: i2, borderColor: a2 } = e2;
  if (!r2) return;
  let o2, s2, c2, l2;
  if (typeof r2 == `number` ? o2 = s2 = c2 = l2 = r2 : (o2 = r2.top || 0, s2 = r2.bottom || 0, c2 = r2.left || 0, l2 = r2.right || 0), !(o2 === 0 && s2 === 0 && c2 === 0 && l2 === 0)) {
    if (n2 && o2 === s2 && o2 === c2 && o2 === l2) {
      t2.border = `${o2}px ${i2} ${a2}`;
      return;
    }
    t2.borderStyle = e2.borderStyle, t2.borderColor = e2.borderColor, t2.borderTopWidth = `${o2}px`, t2.borderBottomWidth = `${s2}px`, t2.borderLeftWidth = `${c2}px`, t2.borderRightWidth = `${l2}px`;
  }
}
function wo(e2) {
  let t2 = e2.layoutId ? `${e2.layoutId}-border` : void 0;
  if (!e2.borderWidth) return null;
  let n2 = { position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, ...Ab, pointerEvents: `none` };
  return e2.border ? (n2.border = e2.border, _(qe.div, { style: n2 })) : (Co(e2, n2, false), _(qe.div, { "data-frame-border": true, style: n2, layoutId: t2 }));
}
function To(e2, t2) {
  let { _forwardedOverrideId: n2, _forwardedOverrides: r2, id: i2 } = t2, a2 = n2 ?? i2, o2 = r2 && a2 ? r2[a2] : void 0;
  return o2 && typeof o2 == `string` && (e2 = { ...e2, src: o2 }), e2;
}
function Eo(e2) {
  let { background: t2, image: n2 } = e2;
  if (n2 !== void 0 && t2 && !Ib.isImageObject(t2)) return;
  let r2 = null;
  if (r2 = L(n2) ? { alt: ``, src: n2 } : tv.get(t2, null), Ib.isImageObject(r2)) return To(r2, e2);
}
function Do(e2) {
  if (e2) {
    if (e2.pixelHeight && e2.pixelWidth) return { width: e2.pixelWidth, height: e2.pixelHeight };
    if (e2.src === void 0) return { width: 1, height: 1 };
  }
}
function Oo(e2) {
  return e2 && e2 !== `search` && e2 !== `slot` && e2 !== `template` ? qe[e2] : qe.div;
}
function ko(e2, t2) {
  e2[`data-framer-layout-hint-center-x`] = t2 === true || t2 === `x` ? true : void 0, e2[`data-framer-layout-hint-center-y`] = t2 === true || t2 === `y` ? true : void 0;
}
function Ao(e2) {
  let t2 = {};
  return !e2 || !Lb || q.current() !== q.canvas || ko(t2, e2), t2;
}
function jo(e2) {
  return e2.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Mo(e2, t2) {
  if (!t2 && (t2 = e2.children, !t2)) return { props: e2, children: t2 };
  let n2 = e2._forwardedOverrides;
  return n2 && (t2 = p.Children.map(t2, (e3) => p.isValidElement(e3) ? p.cloneElement(e3, { _forwardedOverrides: n2 }) : e3)), { props: e2, children: t2 };
}
function No(e2) {
  return (t2, n2) => e2 === true ? `translate(-50%, -50%) ${n2}` : e2 === `x` ? `translateX(-50%) ${n2}` : e2 === `y` ? `translateY(-50%) ${n2}` : n2 || `none`;
}
function Po(e2, { specificLayoutId: t2, postfix: n2 } = {}) {
  let { name: r2, layoutIdKey: i2, duplicatedFrom: a2, __fromCodeComponentNode: o2 = false, drag: s2 } = e2, { getLayoutId: l2, enabled: u2 } = C(Ev);
  return c(() => {
    if (!u2) return e2.layoutId;
    let c2 = t2 || e2.layoutId;
    if (!c2 && (s2 || !i2 || o2)) return;
    let d2 = c2 || l2({ id: i2, name: r2, duplicatedFrom: a2 });
    if (d2) return n2 ? `${d2}-${n2}` : d2;
  }, [u2]);
}
function Fo() {
  let [e2, t2] = p.useState(0);
  return p.useCallback(() => t2((e3) => e3 + 1), []);
}
function Io(e2) {
  let t2 = Fo();
  d(() => {
    let n2 = e2?.current;
    if (n2) return Vb?.observeElementWithCallback(e2.current, t2), () => {
      Vb?.unobserve(n2);
    };
  }, [e2, t2]);
}
function Lo(e2) {
  return [...e2.firstElementChild && e2.firstElementChild.hasAttribute(Hb) ? e2.firstElementChild.children : e2.children].filter(Ro).map(zo);
}
function Ro(e2) {
  return e2 instanceof HTMLBaseElement || e2 instanceof HTMLHeadElement || e2 instanceof HTMLLinkElement || e2 instanceof HTMLMetaElement || e2 instanceof HTMLScriptElement || e2 instanceof HTMLStyleElement || e2 instanceof HTMLTitleElement ? false : e2 instanceof HTMLElement || e2 instanceof SVGElement;
}
function zo(e2) {
  if (!(e2 instanceof HTMLElement) || e2.children.length === 0 || e2.style.display !== `contents`) return e2;
  let t2 = [...e2.children].find(Ro);
  return t2 ? zo(t2) : e2;
}
function Bo(e2, t2, n2 = () => [], r2 = {}) {
  let { id: i2, visible: a2, _needsMeasure: o2 } = e2, { skipHook: s2 = false } = r2, c2 = C(zb), l2 = q.current() === q.canvas;
  Rb(() => {
    !l2 || c2 || s2 || t2.current && i2 && a2 && o2 && kb.queueMeasureRequest(jo(i2), t2.current, n2(t2.current));
  });
}
function Vo(e2) {
  let t2 = e2.closest(`[data-framer-component-container]`);
  t2 && kb.queueMeasureRequest(jo(t2.id), t2, Lo(t2));
}
function Ho(e2) {
  e2.willChange = `transform`;
  let t2 = q.current() === q.canvas;
  Gb && t2 && (e2.translateZ = Ub);
}
function Uo(e2) {
  e2.willChange = `transform`, Wo(e2, true);
}
function Wo(e2, t2) {
  let n2 = q.current() === q.canvas;
  if (!Gb || !n2) return;
  let r2 = L(e2.transform) && e2.transform || ``;
  t2 ? r2.includes(Wb) || (e2.transform = r2 + Wb) : e2.transform = r2.replace(Wb, ``);
}
function Go(e2, t2, n2, r2 = true) {
  if (!e2) return;
  let i2 = Sb(e2.style), a2 = n2 || i2[t2], o2 = () => {
    Ko(a2) && (i2[t2] = a2);
  };
  i2[t2] = null, r2 ? Promise.resolve().then(o2) : setTimeout(o2, 0);
}
function Ko(e2) {
  return L(e2) || R(e2) || nt(e2);
}
function qo(e2, t2) {
  if (e2.size < t2) return;
  let n2 = Math.round(Math.random());
  for (let t3 of e2.keys()) (++n2 & 1) != 1 && e2.delete(t3);
}
function Jo(e2, t2, n2, r2) {
  let i2 = t2.get(n2);
  if (i2) return i2;
  qo(t2, e2);
  let a2 = r2(n2);
  return t2.set(n2, a2), a2;
}
function Yo(e2, t2) {
  let n2 = [e2, t2];
  return Yb.test(e2) ? e2 : Jo(1e3, Xb, n2, () => Jb.multiplyAlpha(e2, t2));
}
function Xo(e2, t2 = 1) {
  let n2;
  return n2 = `stops` in e2 ? e2.stops : [{ value: e2.start, position: 0 }, { value: e2.end, position: 1 }], t2 === 1 ? n2 : n2.map((e3) => ({ ...e3, value: Yo(e3.value, t2) }));
}
function Zo(e2, t2) {
  let n2 = 0;
  return Xo(e2, t2).forEach((e3) => {
    n2 ^= qb(e3.value) ^ e3.position;
  }), n2;
}
function Qo(e2) {
  return e2 && Zb.every((t2) => t2 in e2);
}
function $o(e2) {
  return e2 && Qb.every((t2) => t2 in e2);
}
function es({ background: e2, backgroundColor: t2 }, n2) {
  t2 ? typeof t2 == `string` || hv(t2) ? n2.backgroundColor = t2 : K.isColorObject(e2) && (n2.backgroundColor = e2.initialValue || K.toRgbString(e2)) : e2 && (e2 = tv.get(e2, null), typeof e2 == `string` || hv(e2) ? n2.background = e2 : ex.isLinearGradient(e2) ? n2.background = ex.toCSS(e2) : nx.isRadialGradient(e2) ? n2.background = nx.toCSS(e2) : K.isColorObject(e2) && (n2.backgroundColor = e2.initialValue || K.toRgbString(e2)));
}
function U(e2, t2, n2, r2) {
  if (r2 === void 0 && (r2 = t2), e2[t2] !== void 0) {
    n2[r2] = e2[t2];
    return;
  }
}
function ts(e2) {
  return e2 ? e2.left !== void 0 && e2.right !== void 0 : false;
}
function ns(e2) {
  return e2 ? e2.top !== void 0 && e2.bottom !== void 0 : false;
}
function rs(e2) {
  if (!e2) return {};
  let t2 = {};
  e2.preserve3d === true ? t2.transformStyle = `preserve-3d` : e2.preserve3d === false && (t2.transformStyle = `flat`), e2.backfaceVisible === true ? t2.backfaceVisibility = `visible` : e2.backfaceVisible === false && (t2.backfaceVisibility = `hidden`), t2.backfaceVisibility && (t2.WebkitBackfaceVisibility = t2.backfaceVisibility), e2.perspective !== void 0 && (t2.perspective = t2.WebkitPerspective = e2.perspective), e2.__fromCanvasComponent || (e2.center === true ? (t2.left = `50%`, t2.top = `50%`) : e2.center === `x` ? t2.left = `50%` : e2.center === `y` && (t2.top = `50%`));
  let { cornerShape: n2 } = e2;
  return _e(n2) ? t2.cornerShape = fe(() => `superellipse(${n2.get()})`) : n2 !== void 0 && (t2.cornerShape = `superellipse(${n2})`), U(e2, `size`, t2), U(e2, `width`, t2), U(e2, `height`, t2), U(e2, `minWidth`, t2), U(e2, `minHeight`, t2), U(e2, `top`, t2), U(e2, `right`, t2), U(e2, `bottom`, t2), U(e2, `left`, t2), U(e2, `position`, t2), U(e2, `overflow`, t2), U(e2, `opacity`, t2), (!e2._border || !e2._border.borderWidth) && U(e2, `border`, t2), U(e2, `borderRadius`, t2), U(e2, `radius`, t2, `borderRadius`), U(e2, `color`, t2), U(e2, `shadow`, t2, `boxShadow`), U(e2, `x`, t2), U(e2, `y`, t2), U(e2, `z`, t2), U(e2, `rotate`, t2), U(e2, `rotateX`, t2), U(e2, `rotateY`, t2), U(e2, `rotateZ`, t2), U(e2, `scale`, t2), U(e2, `scaleX`, t2), U(e2, `scaleY`, t2), U(e2, `skew`, t2), U(e2, `skewX`, t2), U(e2, `skewY`, t2), U(e2, `originX`, t2), U(e2, `originY`, t2), U(e2, `originZ`, t2), es(e2, t2), t2;
}
function is(e2) {
  for (let t2 in e2) if (t2 === `drag` || t2.startsWith(`while`) || typeof Sb(e2)[t2] == `function` && t2.startsWith(`on`) && !t2.includes(`Animation`)) return true;
  return false;
}
function as(e2) {
  if (e2.drag) return `grab`;
  for (let t2 in e2) if (ix.has(t2)) return `pointer`;
}
function os(e2) {
  return ss(e2) ? true : e2.style ? !!ss(e2.style) : false;
}
function ss(e2) {
  return ax in e2 && (e2[ax] === `scroll` || e2[ax] === `auto`);
}
function cs(e2) {
  let { left: t2, top: n2, bottom: r2, right: i2, width: a2, height: o2, center: s2, _constraints: c2, size: l2, widthType: u2, heightType: d2, positionFixed: f2, positionAbsolute: p2 } = e2, m2 = ae(e2.minWidth), h2 = ae(e2.minHeight), g2 = ae(e2.maxWidth), _2 = ae(e2.maxHeight);
  return { top: ae(n2), left: ae(t2), bottom: ae(r2), right: ae(i2), width: ae(a2), height: ae(o2), size: ae(l2), center: s2, _constraints: c2, widthType: u2, heightType: d2, positionFixed: f2, positionAbsolute: p2, minWidth: m2, minHeight: h2, maxWidth: g2, maxHeight: _2 };
}
function ls(e2) {
  let t2 = C(zb), { style: n2, _initialStyle: r2, __fromCanvasComponent: i2, size: a2 } = e2, o2 = cs(e2), s2 = wa(o2), c2 = { display: `block`, flex: n2?.flex ?? `0 0 auto`, userSelect: q.current() === q.preview ? void 0 : `none` };
  e2.__fromCanvasComponent || (c2.backgroundColor = e2.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l2 = !is(e2) && !e2.__fromCanvasComponent && !os(e2), u2 = e2.style ? !(`pointerEvents` in e2.style) : true;
  l2 && u2 && (c2.pointerEvents = `none`);
  let d2 = p.Children.count(e2.children) > 0 && p.Children.toArray(e2.children).every((e3) => typeof e3 == `string` || typeof e3 == `number`) && { display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center` }, f2 = rs(e2);
  a2 === void 0 && !i2 && (ts(f2) || (c2.width = ox.width), ns(f2) || (c2.height = ox.height)), o2.minWidth !== void 0 && (c2.minWidth = o2.minWidth), o2.minHeight !== void 0 && (c2.minHeight = o2.minHeight);
  let m2 = {};
  pa(o2) && s2 && !Ta(e2) && (m2 = { left: s2.x, top: s2.y, width: s2.width, height: s2.height, right: void 0, bottom: void 0 }), Object.assign(c2, d2, r2, f2, m2, n2), Object.assign(c2, { overflowX: c2.overflowX ?? c2.overflow, overflowY: c2.overflowY ?? c2.overflow, overflow: void 0 }), Kb.applyWillChange(e2, c2, true);
  let h2 = c2;
  c2.transform || (h2 = { x: 0, y: 0, ...c2 });
  let g2 = ao();
  return e2.positionSticky ? (!g2 || kb.isOnPageCanvas || t2) && (h2.position = `sticky`, h2.willChange = `transform`, h2.top = e2.positionStickyTop, h2.right = e2.positionStickyRight, h2.bottom = e2.positionStickyBottom, h2.left = e2.positionStickyLeft) : g2 && (e2.positionFixed ? h2.position = kb.isOnPageCanvas ? `fixed` : `absolute` : e2.positionAbsolute && (h2.position = `absolute`)), `rotate` in h2 && h2.rotate === void 0 && delete h2.rotate, [h2, s2];
}
function us(e2) {
  let t2 = {};
  for (let n2 in e2) (ie(n2) || wb(n2)) && !sx.has(n2) ? t2[n2] = Sb(e2)[n2] : (n2 === `positionTransition` || n2 === `layoutTransition`) && (t2.layout = true, typeof Sb(e2)[n2] != `boolean` && !e2.transition && (t2.transition = Sb(e2)[n2]));
  return t2;
}
function ds(e2) {
  return `data-framer-name` in e2;
}
function fs(e2, t2, n2, r2) {
  if (r2) return n2 ? { width: n2.width, height: n2.height } : 1;
  let { _usesDOMRect: i2 } = e2, { widthType: a2 = 0, heightType: o2 = 0, width: s2, height: c2 } = t2;
  return n2 && !i2 ? n2 : a2 === 0 && o2 === 0 && typeof s2 == `number` && typeof c2 == `number` ? { width: s2, height: c2 } : i2 || e2.positionFixed || e2.positionAbsolute ? 2 : 0;
}
function ps(e2) {
  return _(qe.div, { layoutId: ux, style: px, children: e2.children });
}
function ms(e2, t2) {
  Ze(e2) ? e2(t2) : hs(e2) && (e2.current = t2);
}
function hs(e2) {
  return z(e2) && `current` in e2;
}
function gs() {
  let e2 = Zi(() => /* @__PURE__ */ new Set()), t2 = Zi(() => /* @__PURE__ */ new Map());
  return Zi(() => (n2, r2) => ({ get current() {
    return n2.current;
  }, set current(i2) {
    if (i2 !== n2.current) {
      if (n2.current = i2, r2 && r2(i2), t2.forEach((e3, t3) => {
        e3 ? e3() : t3(null);
      }), i2 === null) {
        t2.clear(), e2.clear();
        return;
      }
      e2.forEach((e3) => {
        let n3 = e3(i2);
        t2.set(e3, n3);
      });
    }
  }, observe(r3) {
    e2.add(r3);
    let i2 = n2.current;
    if (i2) {
      let e3 = r3(i2);
      t2.set(r3, e3);
    }
  }, unobserve(n3) {
    if (!n3 || (e2.delete(n3), !t2.has(n3))) return;
    let r3 = t2.get(n3);
    r3 ? r3() : n3(null), t2.delete(n3);
  } }));
}
function _s(e2) {
  let t2 = w(null), n2 = gs();
  return Zi(() => hs(e2) ? n2(e2) : Ze(e2) ? n2(t2, e2) : n2(t2));
}
function vs(e2, t2, n2) {
  let r2 = w(), i2 = w();
  _r(() => {
    i2.current !== void 0 && (i2.current = true);
  }, n2 ?? [{}]), e2 && i2.current !== false && (i2.current = false, e2.unobserve(r2.current), e2.observe(t2), r2.current = t2);
}
function ys(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = e2.get(t2);
  return (!s2 || s2.root !== r2?.current) && (s2 = new mx({ root: r2?.current, rootMargin: a2, threshold: o2 }), e2.set(t2, s2)), s2.observeElementWithCallback(n2, i2), () => {
    s2.unobserve(n2);
  };
}
function bs(e2, t2, n2) {
  let r2 = Zi(() => `${n2.rootMargin}`), i2 = C(hx), { enabled: a2, root: o2, rootMargin: s2, threshold: c2 } = n2;
  vs(e2, (e3) => {
    if (a2 && e3 !== null) return ys(i2, r2, e3, o2, t2, s2, c2);
  }, [a2, t2, o2, s2, c2]);
}
function xs(e2, t2, n2) {
  let r2 = p.useRef({ isInView: false, hasAnimatedOnce: false }), { enabled: i2, animateOnce: a2, threshold: o2, rootMargin: s2 = `0px 0px 0px 0px` } = n2;
  gx(e2, p.useCallback((e3) => {
    let { isInView: n3, hasAnimatedOnce: i3 } = r2.current, s3 = Cs(e3, o2?.y ?? 0);
    if (s3 && !n3) {
      if (a2 && i3) return;
      r2.current.hasAnimatedOnce = true, r2.current.isInView = true, t2(true);
      return;
    }
    if (!s3 && n3) {
      if (r2.current.isInView = false, a2) return;
      t2(false);
      return;
    }
  }, [a2, o2?.y, t2]), { threshold: _x, rootMargin: s2, enabled: i2 ?? true });
}
function Ss(e2, t2) {
  return t2.height === 0 ? 0 : e2.height / Math.min(t2.height, G.innerHeight);
}
function Cs({ boundingClientRect: e2, intersectionRect: t2, isIntersecting: n2 }, r2) {
  return e2.height === 0 ? n2 : n2 && Ss(t2, e2) >= r2;
}
function ws() {
  return C(xx);
}
function Ts() {
  return /* @__PURE__ */ new Map();
}
function Es() {
  return Zi(Ts);
}
function Ds(e2, t2 = []) {
  let { register: n2, deregister: r2 } = C(Sx);
  d(() => {
    if (e2) return n2(e2), () => r2(e2);
  }, [n2, r2, ...t2]);
}
function Os(e2, t2) {
  return !(t2.isCurrent === void 0 || e2.isCurrent !== t2.isCurrent || e2.isPrevious !== t2.isPrevious || t2.isCurrent && e2.isOverlayed !== t2.isOverlayed);
}
function ks(e2, t2, n2) {
  let r2 = { ...e2 };
  return t2 && (H(t2.originX) && (r2.originX = t2.originX), H(t2.originY) && (r2.originY = t2.originY), H(t2.originZ) && (r2.originZ = t2.originZ)), n2 && (H(n2.originX) && (r2.originX = n2.originX), H(n2.originY) && (r2.originY = n2.originY), H(n2.originZ) && (r2.originZ = n2.originZ)), r2;
}
function As(e2) {
  if (!e2 || !(`rotateX` in e2 || `rotateY` in e2 || `z` in e2)) return false;
  let t2 = e2.rotateX !== 0 || e2.rotateY !== 0 || e2.z !== 0, n2 = e2?.transition?.rotateX.from !== 0 || e2?.transition?.rotateY.from !== 0 || e2?.transition?.z.from !== 0;
  return t2 || n2;
}
function js(e2) {
  switch (e2 && e2.appearsFrom ? e2.appearsFrom : `right`) {
    case `right`:
      return Ox.PushLeft;
    case `left`:
      return Ox.PushRight;
    case `bottom`:
      return Ox.PushUp;
    case `top`:
      return Ox.PushDown;
  }
}
function Ms(e2) {
  switch (e2 && e2.appearsFrom ? e2.appearsFrom : `bottom`) {
    case `right`:
      return Ox.OverlayLeft;
    case `left`:
      return Ox.OverlayRight;
    case `bottom`:
      return Ox.OverlayUp;
    case `top`:
      return Ox.OverlayDown;
  }
}
function Ns(e2) {
  switch (e2 && e2.appearsFrom ? e2.appearsFrom : `bottom`) {
    case `right`:
      return Ox.FlipLeft;
    case `left`:
      return Ox.FlipRight;
    case `bottom`:
      return Ox.FlipUp;
    case `top`:
      return Ox.FlipDown;
  }
}
function Ps(e2, t2) {
  switch (t2.type) {
    case `addOverlay`:
      return Is(e2, t2.transition, t2.component);
    case `removeOverlay`:
      return Ls(e2);
    case `add`:
      return Rs(e2, t2.key, t2.transition, t2.component);
    case `remove`:
      return Vs(e2);
    case `update`:
      return Fs(e2, t2.key, t2.component);
    case `back`:
      return zs(e2);
    case `forward`:
      return Bs(e2);
    default:
      return;
  }
}
function Fs(e2, t2, n2) {
  return { ...e2, containers: { ...e2.containers, [t2]: n2 } };
}
function Is(e2, t2, n2) {
  let r2 = e2.overlayStack[e2.currentOverlay];
  if (r2 && r2.component === n2) return;
  let i2 = e2.overlayItemId + 1, a2 = [...e2.overlayStack, { key: `stack-${i2}`, component: n2, transition: t2 }];
  return { ...e2, overlayStack: a2, overlayItemId: i2, currentOverlay: Math.max(0, Math.min(e2.currentOverlay + 1, a2.length - 1)), previousOverlay: e2.currentOverlay };
}
function Ls(e2) {
  return { ...e2, overlayStack: [], currentOverlay: -1, previousOverlay: e2.currentOverlay };
}
function Rs(e2, t2, n2, r2) {
  e2.containers[t2] || (e2.containers[t2] = r2), e2.history = e2.history.slice(0, e2.current + 1), e2.visualIndex = Math.max(e2.history.length, 0);
  let i2 = e2.history[e2.history.length - 1], a2 = i2 && i2.key === t2;
  if (e2.overlayStack = [], a2 && e2.currentOverlay > -1) return { ...e2, currentOverlay: -1, previousOverlay: e2.currentOverlay };
  if (a2) return;
  let o2 = e2.containerVisualIndex[t2], s2 = e2.containerIsRemoved[t2], c2 = i2?.key && n2.withMagicMotion ? Ks(t2, o2, s2, e2.history) : true;
  e2.history.push({ key: t2, transition: n2, visualIndex: c2 ? Math.max(e2.visualIndex, 0) : e2.containerVisualIndex[t2] });
  let l2 = e2.current + 1, u2 = e2.current;
  for (let t3 in e2.containerIndex) e2.containerIndex[t3] === l2 && (e2.containerIndex[t3] = Ws(t3, e2.history));
  e2.containerIndex[t2] = l2;
  let { containerVisualIndex: d2, containerIsRemoved: f2 } = Hs(e2, t2, c2), p2 = Gs(l2, u2, e2.history, e2.containerIndex, e2.transitionForContainer);
  return { ...e2, current: l2, previous: u2, containerVisualIndex: d2, containerIsRemoved: f2, transitionForContainer: p2, previousTransition: null, currentOverlay: -1, historyItemId: e2.historyItemId + 1, previousOverlay: e2.currentOverlay };
}
function zs(e2) {
  let t2 = { ...e2.containers }, n2 = Vs(e2);
  if (n2) return n2.containers = t2, n2;
}
function Bs(e2) {
  let t2 = e2.history[e2.current + 1];
  if (!t2) return;
  let { key: n2, transition: r2, component: i2 } = t2, a2 = [...e2.history], o2 = Rs(e2, n2, r2, i2);
  if (o2) return o2.history = a2, o2;
}
function Vs(e2) {
  let t2 = [...e2.history.slice(0, e2.current + 1)];
  if (t2.length === 1) return;
  let n2 = t2.pop();
  if (!n2) return;
  let r2 = t2[t2.length - 1];
  B(r2, `The navigation history must have at least one component`), e2.containerIndex[r2.key] = t2.length - 1, t2.every((e3) => e3.key !== n2.key) && delete e2.containers[n2.key];
  let i2 = e2.current - 1, a2 = e2.current, { containerIsRemoved: o2, containerVisualIndex: s2, previousTransition: c2, visualIndex: l2 } = Us(e2, r2, n2), u2 = Gs(i2, a2, e2.history, e2.containerIndex, e2.transitionForContainer);
  return { ...e2, current: i2, previous: a2, containerIsRemoved: o2, containerVisualIndex: s2, previousTransition: c2, visualIndex: l2, transitionForContainer: u2 };
}
function Hs(e2, t2, n2) {
  let r2 = { containerVisualIndex: { ...e2.containerVisualIndex }, containerIsRemoved: { ...e2.containerIsRemoved } };
  if (n2) r2.containerVisualIndex[t2] = e2.history.length - 1, r2.containerIsRemoved[t2] = false;
  else {
    let n3 = e2.containerVisualIndex[t2];
    for (let [t3, i2] of Object.entries(e2.containerVisualIndex)) n3 !== void 0 && i2 > n3 && (r2.containerIsRemoved[t3] = true);
  }
  return r2;
}
function Us(e2, t2, n2) {
  let r2 = [t2.key, n2.key], i2 = e2.history[e2.history.length - 2], a2 = e2.previousTransition === null ? null : { ...e2.previousTransition }, o2 = { containerIsRemoved: { ...e2.containerIsRemoved }, containerVisualIndex: { ...e2.containerVisualIndex }, previousTransition: a2, visualIndex: e2.visualIndex };
  i2 && r2.push(i2.key);
  let s2 = e2.containerVisualIndex[t2.key], c2 = e2.containerVisualIndex[n2.key], l2 = s2 !== void 0 && c2 !== void 0 && s2 <= c2 || t2.visualIndex !== void 0 && t2.visualIndex < e2.history.length - 1, u2 = t2.visualIndex;
  return l2 ? (o2.containerIsRemoved[n2.key] = true, o2.containerVisualIndex[t2.key] = u2 === void 0 ? e2.history.length - 1 : u2) : (o2.visualIndex = e2.visualIndex + 1, o2.containerVisualIndex[t2.key] = e2.visualIndex + 1), n2.transition.withMagicMotion && (o2.previousTransition = n2.transition || null), e2.containerIsRemoved[t2.key] = false, o2;
}
function Ws(e2, t2) {
  for (let n2 = t2.length; n2 > t2.length; n2--) if (t2[n2]?.key === e2) return n2;
  return -1;
}
function Gs(e2, t2, n2, r2, i2) {
  let a2 = { ...i2 };
  for (let [i3, o2] of Object.entries(r2)) {
    let r3 = qs(o2, { current: e2, previous: t2, history: n2 });
    r3 && (a2[i3] = r3);
  }
  return a2;
}
function Ks(e2, t2, n2, r2) {
  return n2 || t2 === void 0 ? true : t2 === 0 ? false : r2.slice(t2, r2.length).findIndex((t3) => t3.key === e2) > -1 ? true : !(r2.slice(0, t2 - 1).findIndex((t3) => t3.key === e2) > -1);
}
function qs(e2, t2) {
  let { current: n2, previous: r2, history: i2 } = t2;
  if (!(e2 !== n2 && e2 !== r2)) {
    if (e2 === n2 && n2 > r2) {
      let t3 = i2[e2];
      return Js(`enter`, t3?.transition.enter, t3?.transition.animation);
    }
    if (e2 === r2 && n2 > r2) {
      let t3 = i2[e2 + 1];
      return Js(`exit`, t3?.transition.exit, t3?.transition.animation);
    }
    if (e2 === n2 && n2 < r2) {
      let t3 = i2[e2 + 1];
      return Js(`enter`, t3?.transition.exit, t3?.transition.animation);
    }
    if (e2 === r2 && n2 < r2) {
      let t3 = i2[e2];
      return Js(`exit`, t3?.transition.enter, t3?.transition.animation);
    }
  }
}
function Js(e2, t2, n2) {
  let r2 = {}, i2 = {};
  return Ax.forEach((e3) => {
    r2[e3] = Tx[e3], i2[e3] = { ...n2, from: Tx[e3] };
  }), t2 && Object.keys(t2).forEach((a2) => {
    if (t2[a2] === void 0) return;
    let o2 = t2[a2], s2 = typeof t2[a2] == `string` ? `${Sb(Tx)[a2]}%` : Sb(Tx)[a2];
    Sb(r2)[a2] = e2 === `enter` ? s2 : o2, i2[a2] = { ...n2, from: e2 === `enter` ? o2 : s2, velocity: 0 };
  }), { ...r2, transition: { ...i2 } };
}
function Ys(e2) {
  let t2, n2;
  return e2.current === -1 ? n2 = e2.history[e2.previous] : t2 = e2.history[e2.current], { currentOverlayItem: t2, previousOverlayItem: n2 };
}
function Xs({ currentOverlayItem: e2 }) {
  return e2 && e2.transition.exit;
}
function Zs({ currentOverlayItem: e2, previousOverlayItem: t2 }) {
  return e2 && e2.transition.animation ? e2.transition.animation : t2 && t2.transition.animation ? t2.transition.animation : Px;
}
function Qs({ currentOverlayItem: e2, previousOverlayItem: t2 }) {
  return e2 ? e2.transition.backfaceVisible : t2 && t2.transition.backfaceVisible;
}
function $s(e2) {
  if (e2.backdropColor) return e2.backdropColor;
  if (e2.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function ec(e2, t2) {
  let { current: n2, history: r2 } = t2;
  if (e2 === n2) {
    let t3 = r2[e2];
    return t3 && t3.transition ? t3.transition.backfaceVisible : true;
  } else if (e2 < n2) {
    let t3 = r2[e2 + 1];
    return t3 && t3.transition ? t3.transition.backfaceVisible : true;
  } else {
    let t3 = r2[e2];
    return t3 && t3.transition ? t3.transition.backfaceVisible : true;
  }
}
function tc(e2, t2) {
  let n2 = t2.history[e2];
  if (n2) return n2.transition.enter;
}
function nc(e2, t2) {
  let { current: n2, previous: r2, history: i2 } = t2;
  return e2 === r2 && n2 > r2 || e2 === n2 && n2 < r2 ? i2[e2 + 1]?.transition?.backfaceVisible : i2[e2]?.transition?.backfaceVisible;
}
function rc(e2, t2) {
  let { current: n2, history: r2 } = t2;
  if (e2 !== n2) if (e2 < n2) {
    let t3 = r2[e2 + 1];
    if (t3 && t3.transition) return t3.transition.exit;
  } else {
    let t3 = r2[e2];
    if (t3 && t3.transition) return t3.transition.enter;
  }
}
function ic(e2, t2) {
  let { current: n2, previous: r2, history: i2 } = t2, a2 = r2 > n2 ? r2 : n2;
  if (e2 < a2) {
    let t3 = i2[e2 + 1];
    if (t3 && t3.transition.animation) return t3.transition.animation;
  } else if (e2 !== a2) {
    let t3 = i2[e2];
    if (t3 && t3.transition.animation) return t3.transition.animation;
  } else {
    let t3 = i2[e2];
    if (t3?.transition.animation) return t3.transition.animation;
  }
  return Px;
}
function ac(e2, t2, n2) {
  let { current: r2, previous: i2, history: a2 } = t2;
  return !!(n2 && a2.length > 1 || e2 !== i2 && e2 !== r2 || r2 === i2);
}
function oc(e2, t2) {
  let { current: n2, previous: r2 } = t2;
  return e2 > n2 && e2 > r2 ? false : e2 === n2;
}
function sc(e2) {
  return p.Children.map(e2.component, (t2) => {
    if (!na(t2) || !ta(t2) || !t2.props) return t2;
    let n2 = { style: t2.props.style ?? {} }, r2 = e2?.transition?.position, i2 = !r2 || r2.left !== void 0 && r2.right !== void 0, a2 = !r2 || r2.top !== void 0 && r2.bottom !== void 0, o2 = `style` in t2.props ? z(t2.props.style) : true;
    return i2 && (`width` in t2.props && (n2.width = `100%`), o2 && (n2.style.width = `100%`)), a2 && (`height` in t2.props && (n2.height = `100%`), o2 && (n2.style.height = `100%`)), p.cloneElement(t2, n2);
  });
}
function cc(e2, t2) {
  if (e2.goBackOnTapOutside !== false) return t2;
}
function lc(e2) {
  let t2 = ce(), n2 = le();
  return _(Nx, { ...e2, resetProjection: t2, skipLayoutAnimation: n2, children: e2.children });
}
function uc(e2) {
  return Vx in e2;
}
function dc(e2, t2) {
  if (!uc(e2)) return;
  let n2 = tv.getNumber(e2.opacity);
  n2 !== 1 && (t2.opacity = n2);
}
function fc(e2) {
  let t2 = [];
  if (e2 && e2.length) {
    let n2 = e2.map((e3) => `drop-shadow(${e3.x}px ${e3.y}px ${e3.blur}px ${e3.color})`);
    t2.push(...n2);
  }
  return t2;
}
function pc(e2, t2) {
  if (!e2.shadows || e2.shadows.length === 0) return;
  let n2 = e2.shadows.map((e3) => `${e3.x}px ${e3.y}px ${e3.blur}px ${e3.color}`).join(`, `);
  n2 && (t2.textShadow = n2);
}
function mc(e2, t2) {
  let n2 = [];
  H(e2.brightness) && n2.push(`brightness(${e2.brightness / 100})`), H(e2.contrast) && n2.push(`contrast(${e2.contrast / 100})`), H(e2.grayscale) && n2.push(`grayscale(${e2.grayscale / 100})`), H(e2.hueRotate) && n2.push(`hue-rotate(${e2.hueRotate}deg)`), H(e2.invert) && n2.push(`invert(${e2.invert / 100})`), H(e2.saturate) && n2.push(`saturate(${e2.saturate / 100})`), H(e2.sepia) && n2.push(`sepia(${e2.sepia / 100})`), H(e2.blur) && n2.push(`blur(${e2.blur}px)`), e2.dropShadows && n2.push(...fc(e2.dropShadows)), n2.length !== 0 && (t2.filter = t2.WebkitFilter = n2.join(` `));
}
function hc(e2, t2) {
  H(e2.backgroundBlur) && (t2.backdropFilter = t2.WebkitBackdropFilter = `blur(${e2.backgroundBlur}px)`);
}
function gc(e2, t2) {
  hc(e2, t2), mc(e2, t2);
}
function _c(e2, t2) {
  let n2, r2 = (...r3) => {
    G.clearTimeout(n2), n2 = G.setTimeout(e2, t2, ...r3);
  };
  return r2.cancel = () => {
    G.clearTimeout(n2);
  }, r2;
}
function vc(...e2) {
  return e2.filter(Boolean).join(` `);
}
function yc(e2) {
  if (e2.startsWith(Kx)) return e2.substr(qx);
}
function bc(e2, n2, r2) {
  let a2 = i.map(e2, (e3) => y(e3) ? t(e3, n2) : e3);
  return r2 ? a2 : _(O, { children: a2 });
}
function xc(e2) {
  let t2 = Zi(() => Sc(e2));
  return t2.useSetup(e2), t2.cloneAsElement;
}
function Sc(e2) {
  let n2 = { forwardedRef: e2, childRef: null, ref: null };
  n2.ref = Cc(n2);
  let r2 = (e3, t2) => {
    if (!n2.forwardedRef && n2.forwardedRef === e3) {
      n2.ref = t2;
      return;
    }
    let r3 = false;
    n2.childRef !== t2 && (n2.childRef = t2, r3 = true), n2.forwardedRef !== e3 && (n2.forwardedRef = e3, r3 = true), r3 && (n2.ref = Cc(n2));
  }, a2 = false;
  function o2(o3, s3) {
    if (a2) throw ReferenceError(`useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`);
    return a2 = true, i.count(o3) > 1 && e2 && (n2.forwardedRef = void 0, n2.ref = n2.childRef), i.map(o3, (e3) => {
      if (y(e3)) {
        let i2 = `ref` in e3 ? e3.ref : void 0;
        r2(n2.forwardedRef, i2);
        let a3 = Ze(s3) ? s3(e3.props) : s3;
        return t(e3, n2.ref === i2 ? a3 : { ...a3, ref: n2.ref });
      }
      return e3;
    });
  }
  let s2 = function(e3, t2) {
    return _(O, { children: o2(e3, t2) });
  };
  return s2.cloneAsArray = o2, { useSetup: (e3) => {
    a2 = false, r2(e3, n2.childRef);
  }, cloneAsElement: s2 };
}
function Cc(e2) {
  if (!e2.forwardedRef) return e2.childRef;
  let { forwardedRef: t2, childRef: n2 } = e2;
  return (e3) => {
    ms(n2, e3), ms(t2, e3);
  };
}
function wc(e2, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = p.Children.toArray(t2), l2 = c2[0];
  if (c2.length !== 1 || !p.isValidElement(l2)) return console.warn(`PropertyOverrides: expected exactly one React element for a child`, t2), o2(t2, n2);
  let u2 = [], d2 = [];
  for (let [t3] of Object.entries(r2)) {
    if (t3 === i2) continue;
    let n3 = e2[t3];
    if (!n3 || !Oc(l2.props, n3)) {
      d2.push(t3);
      continue;
    }
    let r3 = Dc([t3], a2);
    r3.length && u2.push({ variants: r3, propOverrides: n3 });
  }
  if (u2.length === 0) return o2(l2, n2);
  let f2 = Dc([i2, ...d2], a2);
  f2.length && u2.unshift({ variants: f2 });
  let m2 = [];
  for (let { variants: e3, propOverrides: t3 } of u2) {
    if (s2 && !e3.includes(s2)) continue;
    let c3 = e3.join(`+`), d3 = _(Yx.Provider, { value: { primaryVariantId: i2, variants: new Set(e3) }, children: o2(l2, t3 ? { ...n2, ...t3 } : n2) }, c3), f3 = Ec(e3, a2, r2);
    f3.length ? (B(u2.length > 1, `Must branch out when there are hiddenClassNames`), d3 = _(`div`, { className: `${Xx} ${f3.join(` `)}`, suppressHydrationWarning: true, children: d3 }, c3)) : B(u2.length === 1, `Cannot branch out when hiddenClassNames is empty`), m2.push(d3);
  }
  return B(!s2 || m2.length === 1, `Must render exactly one branch when activeVariantId is given`), s2 ? m2 : [...m2, _(`div`, { className: Zx }, `property-overrides-separator`)];
}
function Tc(e2) {
  return e2.split(`-`)[2];
}
function Ec(e2, t2, n2) {
  let r2 = [];
  for (let [i2, a2] of Object.entries(n2)) {
    let n3 = t2 && !t2.has(i2);
    e2.includes(i2) || n3 || r2.push(`hidden-${Tc(a2)}`);
  }
  return r2;
}
function Dc(e2, t2) {
  return t2 ? e2.filter((e3) => t2.has(e3)) : e2;
}
function Oc(e2, t2) {
  for (let n2 of Object.keys(t2)) if (!Et(e2[n2], t2[n2], true)) return true;
  return false;
}
function kc(e2, t2, n2) {
  return !n2 || !e2 ? t2 : { ...t2, ...n2[e2] };
}
function Ac(e2) {
  return p.forwardRef(({ optimized: t2, ...n2 }, r2) => {
    let i2 = p.useContext(Jx), a2 = p.useContext(Yx)?.variants, o2 = n2[oS];
    o2 && !Pa() && iS.setAll(o2, a2, t2 ? n2 : null, i2);
    let s2 = cS(n2);
    return _(e2, { ref: r2, ...n2, ...s2 });
  });
}
function jc(e2) {
  return L(e2) || Array.isArray(e2);
}
function Mc(e2) {
  return e2 in dS;
}
function Nc(e2, t2) {
  let n2 = Zi(() => ({ values: uS(t2 ? e2 : void 0) }));
  return p.useEffect(() => {
    if (!t2) for (let e3 of lS) {
      let t3 = dS[e3];
      tt(t3) || n2.values[e3].set(t3);
    }
  }, [t2]), n2;
}
function Pc({ loopEffectEnabled: e2, loopRepeatDelay: t2, loopTransition: n2, loopRepeatType: r2, loop: i2, loopPauseOffscreen: a2 }, s2) {
  let u2 = be(), f2 = Zi(uS), p2 = w(false), m2 = hS(), g2 = w(null), _2 = l(async () => {
    if (!i2) return;
    let e3 = n2 || void 0, t3 = p2.current && r2 === `mirror`, a3 = t3 ? dS : i2, o2 = t3 ? i2 : dS;
    return p2.current = !p2.current, g2.current = Promise.all(lS.map((t4) => {
      if (!(u2 && t4 !== `opacity`)) return f2[t4].jump(o2[t4] ?? dS[t4]), new Promise((n3) => {
        let r3 = { ...e3, onComplete: () => n3() }, i3 = a3[t4] ?? o2[t4];
        typeof i3 == `number` && Re(f2[t4], i3, r3);
      });
    })), g2.current;
  }, [i2, r2, n2, u2]), [v2, y2] = o(false), b2 = w(false), x2 = l(async () => {
    !e2 || !b2.current || (await _2(), await m2(t2 ?? 0), x2());
  }, [_2, m2, e2, t2]), S2 = l(() => {
    b2.current || (b2.current = true, h(() => y2(true)), x2());
  }, [x2]), C2 = l((e3 = true) => {
    lS.forEach((e4) => {
      f2[e4].stop();
    }), lS.forEach((e4) => {
      f2[e4].set(dS[e4]);
    }), p2.current = false, e3 && (b2.current = false, h(() => y2(false)));
  }, []), T2 = e2 && i2, E2 = l(() => {
    document.hidden ? C2(false) : b2.current && (b2.current = false, S2());
  }, [S2, C2]);
  d(() => {
    if (T2) return document.addEventListener(`visibilitychange`, E2), () => {
      document.removeEventListener(`visibilitychange`, E2);
    };
  }, [T2, E2]), d(() => {
    T2 && a2 || (T2 ? S2() : C2());
  }, [S2, C2, a2, T2]), d(() => () => C2(), [C2]);
  let D2 = w(false), O2 = l(async () => {
    g2.current && (await g2.current, !D2.current && C2());
  }, [C2]);
  gx(s2, l((e3) => {
    e3.isIntersecting ? (D2.current = true, S2()) : (D2.current = false, O2());
  }, [S2, O2]), { enabled: T2 && a2 });
  let k2 = v2 || !a2;
  return c(() => ({ values: f2, style: T2 && k2 ? fS : pS }), [T2, k2]);
}
function Fc(e2, t2, n2, r2, i2) {
  let a2 = n2 / 100 - 1;
  return (i2 ? (t2 - r2) * a2 : 0) + -e2 * a2;
}
function Ic(e2, t2, n2) {
  let { speed: r2 = 100, offset: i2 = 0, adjustPosition: a2 = false, parallaxTransformEnabled: o2 } = e2, s2 = p.useRef(null), c2 = be(), l2 = p.useCallback((e3) => s2.current === null || r2 === 100 ? 0 : Fc(e3, s2.current, r2, i2, a2), [r2, i2, a2]), { scrollY: u2 } = ye(), d2 = se(u2, l2), f2 = ge(a2 && s2.current === null ? `hidden` : n2), m2 = ge(0), h2 = C(hx);
  return vs(t2, (e3) => {
    if (e3 === null || !o2) return;
    let t3 = ys(h2, `undefined`, e3, null, (e4) => {
      s2.current = e4.boundingClientRect.top, we.update(() => {
        d2.set(l2(u2.get())), a2 && f2.set(n2 ?? `initial`);
      }), t3();
    });
    return t3;
  }, [a2, o2]), Nt(() => {
    o2 && d2.set(0);
  }), { values: { y: c2 || !o2 ? m2 : d2 }, style: o2 ? { ...fS, visibility: f2 } : pS };
}
function Lc(e2) {
  return typeof e2 == `object` && !!e2;
}
function Rc(e2) {
  if (Lc(e2)) return e2?.transition;
}
function zc(e2, t2, n2, r2, i2, a2) {
  let o2 = Rc(e2);
  return Promise.all(lS.map((s2) => new Promise((c2) => {
    if (n2 && s2 !== `opacity`) return c2();
    let l2 = t2.values[s2];
    l2.stop();
    let u2 = Lc(e2) ? e2?.[s2] ?? dS[s2] : dS[s2];
    if (_e(u2) && (u2 = u2.get()), !R(u2)) return c2();
    let d2 = ue.get(r2.current);
    d2 && d2.setBaseTarget(s2, u2);
    let f2;
    if (L(i2) && !l2?.hasAnimated && G.MotionHandoffAnimation) {
      let e3 = G.MotionHandoffAnimation(i2, s2, we);
      e3 && (f2 = e3);
    }
    a2 ? l2.set(u2) : Re(l2, u2, { ...o2, velocity: 0, startTime: f2, onComplete: () => c2() });
  })));
}
function Bc({ initial: e2, animate: t2, exit: n2, presenceInitial: r2, presenceAnimate: i2, presenceExit: a2 }, o2, s2, l2, u2) {
  let d2 = r2 ?? e2, f2 = i2 ?? t2, p2 = a2 ?? n2, [m2, h2] = Xe(), g2 = w({ lastPresence: false, lastAnimate: f2, hasMounted: false, running: false }), _2 = Zi(() => {
    let e3 = d2 ?? l2;
    if (!z(e3)) return { values: uS() };
    let t3 = {};
    for (let n3 in e3) {
      let r3 = z(e3) ? e3[n3] : void 0;
      R(r3) && (t3[n3] = r3);
    }
    return { values: uS(t3) };
  });
  vs(o2, (e3) => {
    let { hasMounted: t3 } = g2.current;
    if (t3 && f2) return;
    let n3 = ue.get(e3);
    if (n3) for (let e4 in Object.assign(g2.current, { hasMounted: true }), _2.values) {
      if (!Mc(e4)) continue;
      let t4 = l2?.[e4];
      n3.setBaseTarget(e4, R(t4) ? t4 : dS[e4]);
    }
  }, [f2]);
  let v2 = be();
  vs(o2, (e3) => {
    if (!s2) {
      h2?.();
      return;
    }
    if (e3 === null) return;
    if (m2 !== g2.current.lastPresence) {
      Object.assign(g2.current, { lastPresence: m2 }), m2 ? d2 && f2 && (Object.assign(g2.current, { running: true }), zc(f2, _2, v2, o2, u2).then(() => Object.assign(g2.current, { running: false }))) : p2 ? (Object.assign(g2.current, { running: true }), zc(p2, _2, v2, o2, u2).then(() => Object.assign(g2.current, { running: false })).then(() => h2())) : h2();
      return;
    }
    let { lastAnimate: t3, running: n3 } = g2.current;
    Et(f2, t3) || !f2 || (Object.assign(g2.current, { lastAnimate: f2 }), zc(f2, _2, v2, o2, u2, !n3).then(() => Object.assign(g2.current, { running: false })));
  });
  let y2 = s2 && f2;
  return c(() => ({ values: _2.values, style: y2 ? fS : pS }), [y2]);
}
function Vc(e2, t2) {
  let n2 = 0, r2 = e2;
  for (; r2 && r2 !== t2 && r2 instanceof HTMLElement; ) n2 += r2.offsetTop, r2 = r2.offsetParent;
  return n2;
}
function Hc(e2, t2 = 0, n2) {
  let r2 = [], i2 = [];
  for (let a2 = e2.length; a2 >= 0; a2--) {
    let { ref: o2, offset: s2 } = e2[a2] ?? {};
    if (!o2 || !o2.current) continue;
    let c2 = Vc(o2.current, document.documentElement) - vS - (s2 ?? 0) - t2, l2 = o2.current?.clientHeight ?? 0, u2 = r2[r2.length - 1], d2 = Math.max(c2 + l2, 0);
    r2.push(c2), i2.unshift(Math.max(c2, 0), u2 === void 0 ? d2 : Math.min(d2, Math.max(u2 - 1, 0))), n2?.(a2);
  }
  return i2;
}
function Uc(e2, t2 = 0) {
  return e2 < t2 ? `up` : `down`;
}
function Wc(e2, t2, n2 = {}) {
  let { direction: r2, target: i2 } = e2 ?? {}, { repeat: a2 = true, enabled: o2 = true } = n2, s2 = Mt();
  p.useEffect(() => {
    if (!r2 || !o2) return;
    let e3, n3 = 0, s3, c2;
    return me((o3, { y: l2 }) => {
      if (!a2 && c2 === i2 || l2.current > l2.scrollLength || l2.current < 0) return;
      let u2 = Uc(l2.current, e3);
      e3 = l2.current;
      let d2 = u2 !== s3;
      if (s3 = u2, d2) n3 = l2.current;
      else {
        if (Math.abs(l2.current - n3) < yS) return;
        let e4 = u2 === r2 ? i2 : void 0;
        e4 !== c2 && t2(e4), c2 = e4;
      }
    });
  }, [s2, r2, a2, i2, o2, t2]);
}
function Gc(e2, t2, n2) {
  let r2 = Hc(e2, t2), i2 = [...xS], a2 = r2[0];
  if (!R(a2)) return SS;
  if (a2 > 1 && (r2.unshift(0, a2 - 1), i2.unshift(`initial`, `initial`)), n2) {
    let e3 = r2[r2.length - 1];
    if (!R(e3)) return SS;
    r2.push(e3 + 1), i2.push(`exit`);
  }
  return { inputRange: r2, outputRange: i2 };
}
function Kc(e2) {
  return { x: e2?.x ?? dS.x, y: e2?.y ?? dS.y, scale: e2?.scale ?? dS.scale, opacity: e2?.opacity ?? dS.opacity, transformPerspective: e2?.transformPerspective ?? dS.transformPerspective, rotate: e2?.rotate ?? dS.rotate, rotateX: e2?.rotateX ?? dS.rotateX, rotateY: e2?.rotateY ?? dS.rotateY, skewX: e2?.skewX ?? dS.skewX, skewY: e2?.skewY ?? dS.skewY, transition: e2?.transition ?? void 0 };
}
function qc({ opacity: e2, targetOpacity: t2, perspective: n2, enter: r2, exit: i2, animate: a2, ...o2 }) {
  return p.useMemo(() => ({ initial: r2 ?? Kc({ ...o2, opacity: e2 ?? t2 ?? 1, transformPerspective: n2 }), animate: a2 ?? Kc({ opacity: t2 }), exit: i2 ?? Kc() }), [a2, o2, r2, i2, e2, t2, n2]);
}
function Jc(e2, t2) {
  let n2 = be(), r2 = qc(e2), i2 = e2.styleAppearEffectEnabled, a2 = Nc(i2 ? r2.initial : r2.animate, i2), o2 = p.useRef({ isPlaying: false, scheduledAppearState: void 0, lastAppearState: !e2.styleAppearEffectEnabled }), s2 = Mt(), l2 = p.useRef(), u2 = p.useCallback(async ({ transition: i3, ...o3 }, s3) => {
    let c2 = i3 ?? r2.animate.transition ?? e2.transition;
    await l2.current;
    let u3 = ue.get(t2.current);
    l2.current = Promise.all(lS.map((e3) => {
      s3 && a2.values[e3].set(r2.initial[e3] ?? dS[e3]);
      let t3 = o3[e3] ?? dS[e3];
      return u3 && typeof t3 != `object` && u3.setBaseTarget(e3, t3), new Promise((r3) => {
        if (n2 && e3 !== `opacity`) R(t3) && a2.values[e3].set(t3), r3();
        else {
          let n3 = { restDelta: e3 === `scale` ? 1e-3 : void 0, ...c2, onComplete: () => r3() };
          typeof t3 == `number` && Re(a2.values[e3], t3, n3);
        }
      });
    }));
  }, []), d2 = e2.animateOnce && o2.current.lastAppearState === true;
  xs(t2, (e3) => {
    let { isPlaying: t3, lastAppearState: n3 } = o2.current;
    if (t3) {
      o2.current.scheduledAppearState = e3;
      return;
    }
    o2.current.scheduledAppearState = void 0, o2.current.lastAppearState = e3, n3 !== e3 && u2(e3 ? r2.animate : r2.exit, e3);
  }, { enabled: !e2.targets && e2.styleAppearEffectEnabled && !e2.scrollDirection && !d2, animateOnce: !!e2.animateOnce, threshold: { y: e2.threshold } });
  let f2 = e2.targets && i2 && !e2.scrollDirection;
  return p.useEffect(() => {
    if (!f2) return;
    let t3 = { initial: true }, n3 = `initial`;
    return me((i3, { y: a3 }) => {
      let { targets: o3 } = e2;
      if (!o3 || !o3[0] || o3[0].ref && !o3[0].ref.current) return;
      let { inputRange: s3, outputRange: c2 } = Gc(o3, (e2.threshold ?? 0) * a3.containerLength, !!e2.exit);
      if (s3.length === 0 || s3.length !== c2.length) return;
      let l3 = Fe(a3.current, s3, c2);
      if (e2.animateOnce && t3[l3] || (t3[l3] = true, n3 === l3)) return;
      n3 = l3;
      let d3 = Sb(r2)[l3];
      d3 && u2(d3);
    });
  }, [s2, f2]), Wc(e2.scrollDirection, (e3) => void u2(e3 ?? r2.animate), { enabled: i2, repeat: !e2.animateOnce }), Nt(() => {
    if (i2 && !(!e2.targets && !e2.scrollDirection)) for (let e3 of lS) a2.values[e3].set(r2.initial?.[e3] ?? dS[e3]);
  }), c(() => ({ values: a2.values, style: i2 ? fS : pS }), [i2]);
}
function Yc(e2, t2) {
  let n2 = p.useRef({});
  p.useEffect(() => {
    if (t2 !== void 0) for (let r2 of ag(e2)) {
      let i2 = function() {
        let e3 = n2.current[r2];
        e3 && e3.stop(), n2.current[r2] = Me({ keyframes: [a2.get(), s2], velocity: a2.getVelocity(), ...t2, restDelta: 1e-3, onUpdate: o2 });
      }, a2 = e2[r2], o2, s2;
      a2.attach((e3, t3) => (s2 = e3, o2 = t3, we.postRender(i2), a2.get()));
    }
  }, [JSON.stringify(t2)]);
}
function Xc(e2, t2) {
  let n2 = TS();
  return { inputRange: Hc(e2, t2, (t3) => {
    let r2 = e2[t3 - 1]?.target, i2 = e2[t3]?.target;
    for (let e3 of lS) n2[e3]?.unshift(r2?.[e3] ?? 0, i2?.[e3] ?? 0);
  }), effectKeyOutputRange: n2 };
}
function Zc(e2) {
  let t2 = TS();
  for (let { target: n2 } of e2) for (let e3 of lS) t2[e3]?.push(n2[e3]);
  return t2;
}
function Qc({ transformTrigger: e2, styleTransformEffectEnabled: t2, transformTargets: n2, spring: i2, transformViewportThreshold: a2 = 0 }, o2) {
  let s2 = be(), c2 = Nc(wS(n2, s2), t2), l2 = !t2 || !n2, u2 = e2 === `onScrollTarget`, d2 = Mt();
  return r(() => {
    if (!(l2 || !u2)) return me((e3, { y: t3 }) => {
      if (!n2[0] || n2[0].ref && !n2[0].ref.current) return;
      let { inputRange: r2, effectKeyOutputRange: i3 } = Xc(n2, a2 * t3.containerLength);
      if (r2.length !== 0) for (let e4 of lS) s2 && e4 !== `opacity` || r2.length === i3[e4].length && i3[e4][0] !== void 0 && c2.values[e4].set(Fe(t3.current, r2, i3[e4]));
    });
  }, [s2, u2, a2, n2, l2]), vs(o2, (t3) => {
    if (l2 || u2 || t3 === null) return;
    let r2 = Zc(n2);
    return me((e3, { y: t4 }) => {
      for (let e4 of lS) s2 && e4 !== `opacity` || ES.length === r2[e4].length && r2[e4][0] !== void 0 && c2.values[e4].set(Fe(t4.progress, ES, r2[e4]));
    }, e2 === `onInView` ? { target: t3 ?? void 0, offset: [`start end`, `end end`] } : void 0);
  }, [d2, s2, e2, u2, n2, l2]), Yc(c2.values, i2), Nt(() => {
    if (l2) return;
    let e3 = wS(n2, s2);
    for (let t3 of lS) c2.values[t3].set(e3?.[t3] ?? dS[t3]);
  }), p.useMemo(() => ({ values: c2.values, style: t2 ? fS : pS }), [t2]);
}
function $c(e2, t2, n2) {
  return !(e2 in n2) && t2 in n2 || n2[e2] === true;
}
function el(e2) {
  let t2 = { parallax: {}, styleAppear: {}, styleTransform: {}, presence: { animate: e2.animate, initial: e2.initial, exit: e2.exit }, loop: {}, forwardedProps: {}, targetOpacityValue: e2.__targetOpacity, withPerspective: e2.__perspectiveFX, inSmartComponent: e2.__smartComponentFX };
  for (let n2 in e2) {
    if (n2 === `__targetOpacity` || n2 === `__perspectiveFX` || n2 === `__smartComponentFX`) continue;
    let r2 = yc(n2);
    if (r2) {
      for (let i2 of OS) if (DS[i2]?.has(r2)) {
        t2[i2][r2] = Sb(e2)[n2];
        break;
      }
    } else t2.forwardedProps[n2] = Sb(e2)[n2];
  }
  return t2.parallax.parallaxTransformEnabled = $c(`parallaxTransformEnabled`, `speed`, t2.parallax), t2.styleAppear.styleAppearEffectEnabled = $c(`styleAppearEffectEnabled`, `animateOnce`, t2.styleAppear), t2;
}
function tl(e2) {
  return z(e2) && jS in e2;
}
function nl(e2, t2) {
  if (!e2 || !z(e2)) return t2;
  for (let n2 in e2) {
    let r2 = e2[n2];
    !_e(r2) || !Mc(n2) || R(r2.get()) && t2[n2].push(r2);
  }
}
function rl(e2) {
  return L(e2) || Array.isArray(e2);
}
function il({ componentIdentifier: e2, children: t2 }) {
  return t2(C(NS)[e2] ?? {});
}
function al() {
  return p.useContext(PS);
}
function ol(e2) {
  return e2 instanceof Error && (e2.message.includes(`A component suspended while responding to synchronous input.`) || e2.message.includes(`Minified React error #426`));
}
function sl() {
  if (n === void 0 || LS) return _(`div`, { hidden: true, dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` } });
  throw zS;
}
function cl({ children: e2 }) {
  return C(VS) ? _(O, { children: e2 }) : _(E, { fallback: BS, children: e2 });
}
function ll() {
  return _(`div`, { hidden: true, dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` } });
}
function ul(e2, t2) {
  if (!Yh || Math.random() > 0.01) return;
  let n2 = e2 instanceof Error && typeof e2.stack == `string` ? e2.stack : null, r2 = t2?.componentStack;
  nn(`published_site_load_recoverable_error`, { message: String(e2), stack: n2, componentStack: n2 ? void 0 : r2 });
}
function dl(...e2) {
  console.error(...e2);
}
function fl() {
  return q.current() !== q.canvas;
}
function pl({ getErrorMessage: e2, fallback: t2, children: n2 }) {
  return fl() ? _(ml, { fallback: t2, children: _(US, { fallback: t2, getErrorMessage: e2, children: n2 }) }) : n2;
}
function ml({ children: e2, fallback: t2 = HS }) {
  return n === void 0 ? _(E, { fallback: t2, children: e2 }) : _(cl, { children: e2 });
}
function hl() {
  return p.useContext(GS);
}
function gl() {
  let e2 = hl();
  return p.useMemo(() => {
    if (!e2) return;
    let t2 = e2;
    for (; t2.parent && t2.parent.level > 0; ) t2 = t2.parent;
    return t2;
  }, [e2]);
}
function _l({ children: e2, scopeId: t2, nodeId: n2 }) {
  let r2 = hl(), i2 = p.useMemo(() => ({ level: (r2?.level ?? 0) + 1, scopeId: t2, nodeId: n2, parent: r2 }), [t2, n2, r2]);
  return _(GS.Provider, { value: i2, children: e2 });
}
function vl(e2, t2) {
  return `${KS}${e2}:${t2}`;
}
function yl(e2, t2) {
  return xl(`component`, e2, t2);
}
function bl(e2, t2) {
  return xl(`override`, e2, t2);
}
function xl(e2, t2, n2) {
  return `A code ${e2} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${vl(t2, n2)} \u2192 click \u201CShow Layer\u201D.`;
}
function Sl(e2, t2, n2, r2, i2, a2) {
  let o2 = wl(e2, t2, n2, a2);
  return o2 && !i2 && r2 || o2 && i2;
}
function Cl(e2, t2, n2, r2) {
  return wl(e2, t2, n2, r2);
}
function wl(e2, t2, n2, r2) {
  return !!(tt(n2) || n2 === 1 && r2 && e2 === t2);
}
function Tl(e2, t2, n2, r2, i2, a2) {
  let o2 = hl(), { disableCustomCode: s2 } = fg();
  return tt(t2) || tt(n2) ? _(WS, { children: e2 }) : s2 && r2 ? _(`div`, { style: { padding: `12px 16px`, borderWidth: 1, borderRadius: 6, borderStyle: `solid`, borderColor: `rgba(149, 149, 149, 0.15)`, backgroundColor: `rgba(149, 149, 149, 0.1)`, fontSize: 12, color: `#a5a5a5` }, children: `Code component disabled` }) : (Sl(t2, o2?.scopeId, o2?.level, r2 ?? false, i2 ?? false, a2 ?? false) && (e2 = _(pl, { getErrorMessage: yl.bind(null, t2, n2), fallback: null, children: e2 })), i2 && (e2 = _(_l, { scopeId: t2, nodeId: n2, children: e2 })), e2);
}
function El(e2, t2, n2) {
  let r2 = {};
  for (let [, i2] of e2) for (let e3 of i2) {
    let i3 = r2[e3] ?? t2[e3] ?? n2[e3];
    i3 && (r2[e3] = i3);
  }
  return r2;
}
function Dl(e2) {
  return !(!e2 || e2.placement || e2.alignment);
}
function Ol(e2) {
  switch (e2) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e2);
  }
}
function kl(e2, t2 = `center`) {
  switch (e2) {
    case `top`:
      return `${Ol(t2)}, -100%`;
    case `right`:
      return `0%, ${Ol(t2)}`;
    case `bottom`:
      return `${Ol(t2)}, 0%`;
    case `left`:
      return `-100%, ${Ol(t2)}`;
    default:
      return `-50%, -50%`;
  }
}
function Al(e2, t2) {
  let n2 = document.elementFromPoint(e2, t2);
  for (; n2; ) {
    if (n2 === document.body) return;
    let e3 = n2.getAttribute(`data-framer-cursor`);
    if (e3) return e3;
    if (n2.hasAttribute(tC)) {
      let e4 = n2.getAttribute(tC);
      n2 = n2.parentElement, e4 && (n2 = document.getElementById(e4) ?? n2);
    } else n2 = n2.parentElement;
  }
}
function jl(e2) {
  let { registerCursors: t2 } = C(YS), n2 = Zi(() => e2), i2 = te();
  r(() => t2(n2, i2), [t2, i2]);
}
function Ml(e2) {
  return !!(e2 && typeof e2 == `object` && rC in e2);
}
function Nl(e2) {
  return `${e2.scopeId}:${e2.nodeId}:${e2.furthestExternalComponent?.scopeId}:${e2.furthestExternalComponent?.nodeId}`;
}
function Pl() {
  return q.current() === q.canvas;
}
function Fl(e2) {
  return e2 === void 0 ? false : !!(e2.startsWith(`#`) || e2.startsWith(`/`) || e2.startsWith(`.`));
}
function Il(e2, t2) {
  try {
    return !!new URL(e2).protocol;
  } catch {
  }
  return t2;
}
function Ll(e2, t2, n2, r2) {
  if (L(e2)) {
    let i3 = Fl(e2);
    if (!t2.routes || !t2.getRoute || !n2 || !i3) return;
    let [a2] = e2.split(`#`, 2);
    if (a2 === void 0) return;
    let [o2] = a2.split(`?`, 2);
    if (o2 === void 0) return;
    let { routeId: s2 } = Gr(t2.routes, o2, void 0, r2);
    return t2.getRoute(s2);
  }
  let { webPageId: i2 } = e2;
  return t2.getRoute?.(i2);
}
function Rl(e2) {
  return L(e2) && e2.startsWith(`data:${uC}`);
}
function zl(e2) {
  if (Rl(e2)) try {
    let t2 = new URL(e2), n2 = t2.pathname.substring(uC.length), r2 = t2.searchParams, i2 = r2.has(oC) ? r2.get(oC) : void 0, a2, o2 = r2.get(sC), s2 = r2.get(cC), c2 = r2.get(lC);
    return o2 && s2 && c2 && (a2 = { collection: o2, collectionItemId: s2, pathVariables: Object.fromEntries(new URLSearchParams(c2).entries()) }), { target: n2 === `none` ? null : n2, element: i2 === `none` ? void 0 : i2, collectionItem: a2 };
  } catch {
    return;
  }
}
function Bl(e2, t2, n2) {
  let r2 = t2.getAttribute(`data-framer-page-link-target`), i2, a2;
  if (r2) {
    i2 = t2.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e3 = t2.getAttribute(`data-framer-page-link-path-variables`);
    e3 && (a2 = Object.fromEntries(new URLSearchParams(e3).entries()));
  } else {
    let e3 = t2.getAttribute(`href`);
    if (!e3) return false;
    let n3 = zl(e3);
    if (!n3 || !n3.target) return false;
    r2 = n3.target, i2 = n3.element ?? void 0, a2 = n3.collectionItem?.pathVariables;
  }
  let o2 = i2 ? t2.dataset.framerSmoothScroll !== void 0 : void 0;
  return e2(r2, i2, Object.assign({}, n2, a2), o2), true;
}
function Vl(e2) {
  if (!Rl(e2)) return e2;
  let t2 = zl(e2);
  if (!t2) return;
  let { target: n2, element: r2, collectionItem: i2 } = t2;
  if (n2) return { webPageId: n2, hash: r2 ?? void 0, pathVariables: Hl(i2) };
}
function Hl(e2) {
  if (!e2) return;
  let t2 = {};
  for (let n2 in e2.pathVariables) {
    let r2 = e2.pathVariables[n2];
    r2 && (t2[n2] = r2);
  }
  return t2;
}
function Ul(e2, t2, n2, r2, a2, o2) {
  let s2 = C(dC), u2 = gl(), d2 = c(() => ({ scopeId: t2, nodeId: n2, furthestExternalComponent: u2 }), [t2, n2, u2]), f2 = kt(), p2 = jt(), { locales: m2 } = yr(), h2 = c(() => {
    let e3 = Ml(r2) ? r2 : Vl(r2);
    if (e3) return Ll(e3, f2, p2, m2);
  }, [p2, r2, f2, m2]), g2 = !!(!Pl() && s2?.nodeId && d2.nodeId), v2 = l((e3) => {
    if (a2.href) {
      if (e3.preventDefault(), e3.stopPropagation(), za(e3)) {
        Kl(a2.href, ``, `_blank`);
        return;
      }
      h2 ? a2.navigate?.() : Kl(a2.href, a2.rel, a2.target);
    }
  }, [a2, h2]), y2 = l((e3) => {
    a2.href && (e3.preventDefault(), e3.stopPropagation(), Kl(a2.href, ``, `_blank`));
  }, [a2]), b2 = l((e3) => {
    a2.href && e3.key === `Enter` && (e3.preventDefault(), e3.stopPropagation(), h2 ? a2.navigate?.() : Kl(a2.href, a2.rel, a2.target));
  }, [a2, h2]);
  vs(o2, (e3) => {
    e3 !== null && g2 && (e3.dataset.hydrated = `true`);
  }, [g2]);
  let x2 = e2;
  return g2 && (i.forEach(e2, (e3) => {
    Gl(e3) && (B(Wl(s2), "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"), B(Wl(d2), "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"), aC.collectNestedLink(s2, d2));
  }), x2 = i.map(e2, (e3) => {
    if (!Gl(e3)) return e3;
    let t3 = ql(e3.type), { children: n3, ...r3 } = e3.props, i2 = { ...r3, "data-nested-link": true, role: `link`, tabIndex: 0, onClick: v2, onAuxClick: y2, onKeyDown: b2, as: r3.as && ql(r3.as) }, a3 = `ref` in e3 ? e3.ref : void 0;
    return k(t3, { ...i2, ref: a3 }, n3);
  })), _(dC.Provider, { value: d2, children: x2 });
}
function Wl(e2) {
  return !tt(e2?.nodeId);
}
function Gl(e2) {
  return y(e2) && (ql(e2.type) !== e2.type || ql(e2.props.as) !== e2.props.as);
}
function Kl(e2, t2, n2) {
  let r2 = document.createElement(`a`);
  r2.href = e2, t2 && (r2.rel = t2), n2 && (r2.target = n2), document.body.appendChild(r2), r2.click(), r2.remove();
}
function ql(e2) {
  return e2 === `a` ? `span` : Je(e2) && pe(e2) === `a` ? qe.span : e2;
}
function Jl(e2, t2) {
  return e2 instanceof HTMLAnchorElement ? e2 : e2 instanceof Element ? e2 === t2 ? null : Jl(e2.parentElement, t2) : null;
}
function Yl({ children: e2 }) {
  return _(cl, { children: e2 });
}
function Xl(e2) {
  return b(function(t2, n2) {
    return _(Yl, { children: _(e2, { ...t2, ref: n2 }) });
  });
}
function Zl(e2, t2, n2, r2, i2, a2) {
  let { webPageId: o2, hash: s2, pathVariables: c2, hashVariables: l2 } = n2;
  return $l(e2, t2, o2, s2, a2, c2, l2, i2, r2);
}
function Ql(e2, t2, n2, r2) {
  if (!(!e2.routes || !e2.getRoute) && Fl(t2)) try {
    let [i2, a2] = t2.split(`#`, 2);
    B(i2 !== void 0, `A href must have a defined pathname.`);
    let [o2] = i2.split(`?`, 2);
    B(o2 !== void 0, `A href must have a defined pathname.`);
    let { routeId: s2, pathVariables: c2, localeId: l2 } = Gr(e2.routes, o2, void 0, r2), u2 = e2.getRoute(s2);
    if (u2) return { routeId: s2, route: u2, href: t2, elementId: a2, pathVariables: Object.assign({}, n2, c2), locale: l2 ? r2?.find(({ id: e3 }) => e3 === l2) : void 0 };
  } catch {
  }
}
function $l(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = { ...i2, ...a2, ...s2?.path }, u2 = { ...i2, ...o2, ...s2?.hash }, d2 = e2.getRoute?.(n2), f2 = sr(d2, { currentRoutePath: t2?.path, currentRoutePathLocalized: t2?.pathLocalized, currentPathVariables: t2?.pathVariables, hash: r2, pathVariables: l2, hashVariables: u2, preserveQueryParams: e2.preserveQueryParams, siteCanonicalURL: e2.siteCanonicalURL, localeId: c2?.id });
  return { routeId: n2, route: d2, href: f2, elementId: f2.split(`#`, 2)[1], pathVariables: l2, locale: c2 ?? void 0 };
}
function eu() {
  let e2 = C(_C), t2 = jt()?.pathVariables;
  return e2 || t2;
}
function tu(e2, { webPageId: t2, hash: n2, pathVariables: r2 }, i2) {
  if (t2 !== e2.id || n2) return false;
  if (e2.path && e2.pathVariables) {
    let t3 = Object.assign({}, i2, r2);
    for (let [, n3] of e2.path.matchAll(gC)) if (!n3 || e2.pathVariables[n3] !== t3[n3]) return false;
  }
  return true;
}
function nu() {
  let e2 = ne.connection || ne.mozConnection || ne.webkitConnection || {}, t2 = ne.deviceMemory && ne.deviceMemory > bC, n2, r2, i2;
  function a2() {
    n2 = e2.effectiveType || ``, r2 = e2.saveData || n2.includes(`2g`), i2 = n2 === `3g` || t2 ? xC : SC;
  }
  e2.addEventListener?.(`change`, a2), a2();
  let o2 = new IntersectionObserver(l2, { threshold: yC }), s2 = 0;
  async function c2(e3, t3) {
    if (r2) return;
    let { id: n3, preload: i3 } = e3, a3 = TC.get(n3);
    if (!a3?.size || wC.has(n3)) return;
    ++s2, wC.add(n3);
    let c3 = i3()?.catch(() => {
    });
    o2.unobserve(t3), CC.delete(t3);
    for (let e4 of a3) o2.unobserve(e4), CC.delete(e4);
    a3.clear(), TC.delete(n3), await c3, --s2;
  }
  function l2(e3) {
    for (let t3 of e3) {
      let e4 = t3.target, n3 = CC.get(e4);
      if (!n3 || wC.has(n3.id)) {
        o2.unobserve(e4), CC.delete(e4);
        continue;
      }
      let r3 = n3.id, a3 = TC.get(r3), l3 = TC.get(r3)?.size ?? 0;
      if (t3.isIntersecting) {
        if (s2 >= i2) continue;
        a3 ? a3.add(e4) : TC.set(r3, /* @__PURE__ */ new Set([e4])), setTimeout(c2, vC, n3, e4);
      } else a3 && a3.delete(e4), l3 <= 1 && TC.delete(r3);
    }
  }
  return (e3, t3, n3) => {
    if (!wC.has(n3)) return CC.set(e3, { id: n3, preload: t3 }), o2.observe(e3), () => {
      CC.delete(e3), o2.unobserve(e3);
    };
  };
}
function ru(e2, t2) {
  let n2 = Fl(e2), r2 = { href: e2 === `` || Il(e2, n2) ? e2 : `https://${e2}`, target: iu(t2?.openInNewTab, n2), rel: n2 ? void 0 : au(`noopener`, t2?.rel) };
  return t2?.preserveParams && (r2.href = kn(r2.href ?? e2), r2[`data-framer-preserve-params`] = true), t2?.trackLinkClick && (r2.onClick = () => {
    t2.trackLinkClick(e2);
  }), r2;
}
function iu(e2, t2) {
  return e2 === void 0 ? t2 ? void 0 : `_blank` : e2 ? `_blank` : void 0;
}
function au(e2, t2) {
  if (e2 && !t2) return e2;
  if (!e2 && t2) return t2;
  if (e2 && t2) return `${e2} ${t2}`;
}
function ou(e2, t2) {
  console.warn(ut(`Failed to resolve slug: ${e2 instanceof Error ? e2.message : t2 ?? `Unknown error`}`));
}
function su(e2, t2, n2) {
  try {
    let r2 = t2?.get(e2.collectionId);
    if (!r2) return ou(void 0, `Couldn't find collection utils for collection id: "${e2.collectionId}"`);
    let i2 = r2.getSlugByRecordId(e2.collectionItemId, n2 ?? void 0);
    return st(i2) ? i2.catch(ou) : i2;
  } catch (e3) {
    ou(e3);
  }
}
async function cu(e2, t2, n2, r2) {
  async function i2(e3) {
    if (!e3) return {};
    let t3 = {};
    for (let i3 in e3) {
      let a3 = e3[i3];
      B(a3, `unresolvedSlug should be defined`);
      let o3 = su(a3, r2, n2), s2 = st(o3) ? await o3 : o3;
      s2 && (t3[i3] = s2);
    }
    return t3;
  }
  let [a2, o2] = await Promise.allSettled([i2(e2), i2(t2)]);
  return { path: a2.status === `fulfilled` ? a2.value : void 0, hash: o2.status === `fulfilled` ? o2.value : void 0 };
}
function lu(e2, t2, n2, r2, i2 = []) {
  function a2(e3) {
    if (!e3) return;
    let t3 = {};
    for (let a3 in e3) {
      let o3 = e3[a3];
      if (!o3) continue;
      let s2 = su(o3, r2, n2);
      st(s2) ? i2.push(s2) : s2 && (t3[a3] = s2);
    }
    return t3;
  }
  let o2 = { path: a2(e2), hash: a2(t2) };
  return i2.length > 0 ? Promise.allSettled(i2) : o2;
}
function uu() {
  let e2 = mn();
  return l((t2, n2, r2, i2 = []) => lu(t2, n2, r2, e2, i2), [e2]);
}
function du({ nodeId: e2, clickTrackingId: t2, router: n2, href: r2, activeLocale: i2 }) {
  let a2 = mn();
  return l(async (o2) => {
    if (!n2.pageviewEventData?.current) return;
    let s2 = n2.pageviewEventData.current instanceof Promise ? await n2.pageviewEventData.current : n2.pageviewEventData.current, c2 = Ml(r2) ? r2 : Vl(r2);
    if (!Ml(c2)) return nn(`published_site_click`, { ...s2, href: o2 ? fu(o2) : null, nodeId: e2 ?? null, trackingId: t2 || null, targetRoutePath: null, targetWebPageId: null, targetCollectionItemId: null }, `eager`);
    let l2 = c2.webPageId, u2 = n2?.getRoute?.(l2), d2 = u2?.path ?? null, f2 = null;
    if (u2?.collectionId && c2.pathVariables) {
      let e3 = a2?.get(u2.collectionId);
      if (!e3) return;
      let [t3] = Object.values(c2.pathVariables);
      if (L(t3)) {
        let n3 = e3.getRecordIdBySlug(t3, i2 || void 0);
        f2 = (st(n3) ? await n3 : n3) ?? null;
      }
    }
    return nn(`published_site_click`, { ...s2, href: o2 ? fu(o2) : null, nodeId: e2 ?? null, trackingId: t2 ?? null, targetRoutePath: d2, targetWebPageId: l2, targetCollectionItemId: f2 }, `eager`);
  }, [e2, t2, n2, r2, i2, a2]);
}
function fu(e2) {
  try {
    let t2 = new URL(e2, G.document.baseURI);
    return t2.origin === G.location.origin ? t2.pathname + t2.search + t2.hash : t2.href;
  } catch {
    return e2;
  }
}
function pu(e2, t2, n2, r2, i2, a2, o2) {
  n2(), e2.navigate?.(t2, r2, i2, a2, o2);
}
function mu(e2, t2, n2) {
  return async (r2) => {
    let i2 = za(r2), a2 = Jl(r2.target), o2 = !a2 || a2.getAttribute(`target`) === `_blank`, s2 = !i2 && !o2, c2 = () => void t2(e2);
    if (!s2) {
      await yn({ priority: `user-blocking`, ensureContinueBeforeUnload: true, continueAfter: `paint` }), c2();
      return;
    }
    r2.preventDefault(), n2(c2);
  };
}
function hu(e2, t2, n2, r2, i2, a2, o2, s2) {
  if (!n2) return ru(e2, r2);
  let c2 = Ql(t2, e2, s2, o2);
  if (!c2) return ru(e2, r2);
  let { routeId: l2, route: u2, elementId: d2, pathVariables: f2, locale: p2 } = c2;
  if (!u2) return ru(e2, r2);
  let m2 = sr(u2, { currentRoutePath: n2.path, currentRoutePathLocalized: n2.pathLocalized, currentPathVariables: n2.pathVariables, hash: d2, pathVariables: f2, preserveQueryParams: t2.preserveQueryParams && !Xh, siteCanonicalURL: t2.siteCanonicalURL, localeId: a2 }), h2 = iu(r2.openInNewTab, true), g2 = h2 === `_blank`, _2 = { pathVariables: f2, locale: p2 }, v2 = (e3) => pu(t2, l2, () => i2(l2, _2, false, !g2), d2, f2, r2.smoothScroll, e3);
  return { href: m2, target: h2, onClick: mu(m2, r2.trackLinkClick, v2), navigate: v2, "data-framer-page-link-current": n2 && tu(n2, { webPageId: l2, hash: d2, pathVariables: f2 }, s2) || void 0, preload: () => i2(l2, _2, true, !g2), _routeId: l2, _pathVariables: f2, _locale: p2 };
}
function gu(e2, t2, n2) {
  let r2 = _u(e2.style, t2.style), i2 = { ...e2, ...t2, ...r2 && { style: r2 }, ref: n2 }, { onTap: a2, onClick: o2 } = t2;
  if (!a2 && !o2) return i2;
  let { onClick: s2, onTap: c2 } = e2;
  return { ...i2, onClick: o2 || s2 ? (e3) => {
    Ze(s2) && s2?.(e3), o2?.(e3);
  } : void 0, onTap: a2 || c2 ? (e3, t3) => {
    Ze(c2) && c2?.(e3, t3), a2?.(e3, t3);
  } : void 0 };
}
function _u(e2, t2) {
  let n2 = z(e2) ? e2 : void 0, r2 = n2 && !et(n2), i2 = t2 && !et(t2);
  if (!(!r2 && !i2)) return { ...n2, ...t2 };
}
function vu(e2, t2, n2) {
  if (!(t2 && Oa())) return e2;
  let { onClick: r2, ...i2 } = e2;
  return r2 ? n2 ? { ...i2, onTap: r2, onClick: yu } : { ...i2, onTap: r2 } : e2;
}
function yu(e2) {
  let t2 = Jl(e2.target);
  !t2 || t2.getAttribute(`target`) === `_blank` || e2.preventDefault();
}
function bu(e2, t2, n2, r2, i2, a2) {
  let o2 = Ml(e2) ? e2 : Vl(e2);
  if (!Ml(o2)) return L(e2) ? ru(e2).href : void 0;
  if (!t2.getRoute || !t2.currentRouteId) return;
  let s2 = t2.getRoute(t2.currentRouteId), { webPageId: c2, hash: l2, pathVariables: u2, hashVariables: d2, unresolvedHashSlugs: f2, unresolvedPathSlugs: p2 } = o2, m2 = t2.getRoute(c2), h2 = p2 || f2 ? a2?.(p2, f2) : void 0;
  if (st(h2)) return;
  let g2 = Object.assign({}, t2.currentPathVariables, n2, u2, h2?.path), _2 = Object.assign({}, t2.currentPathVariables, n2, d2, h2?.hash), v2 = sr(m2, { currentRoutePath: s2?.path, currentRoutePathLocalized: s2?.pathLocalized, currentPathVariables: t2.currentPathVariables, hash: l2, pathVariables: g2, hashVariables: _2, relative: false, preserveQueryParams: t2.preserveQueryParams, onlyHash: r2, siteCanonicalURL: t2.siteCanonicalURL, localeId: i2?.id });
  return r2 ? v2 : (i2?.slug ? `/${i2.slug}` : ``) + v2;
}
function xu() {
  return (function() {
    async function e2(e3) {
      let t3 = new TextEncoder().encode(e3), n2 = await crypto.subtle.digest(`SHA-256`, t3);
      return Array.from(new Uint8Array(n2)).map((e4) => e4.toString(16).padStart(2, `0`)).join(``);
    }
    function t2(e3) {
      let t3 = ``;
      for (let n2 = 0; n2 < e3; n2++) t3 += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(Math.floor(Math.random() * 62));
      return t3;
    }
    addEventListener(`message`, async (n2) => {
      let { salt: r2, difficulty: i2, tokenLength: a2, maxTime: o2 } = n2.data, s2 = `0`.repeat(i2), c2 = performance.now(), l2 = true;
      for (; l2; ) {
        if (performance.now() - c2 > o2) {
          l2 = false, postMessage({ success: false });
          return;
        }
        let n3 = t2(a2), i3 = `${Date.now()}:${n3}`, u2 = await e2(r2 + i3);
        if (u2.startsWith(s2)) {
          postMessage({ success: true, secret: i3, hash: u2 });
          return;
        }
      }
    });
  }).toString();
}
async function Su() {
  return new Promise((e2, t2) => {
    let n2 = URL.createObjectURL(new Blob([`(`, xu(), `)()`], { type: `application/javascript` })), r2 = new Worker(n2);
    r2.onmessage = (t3) => {
      r2.terminate(), URL.revokeObjectURL(n2), t3.data.success ? e2({ secret: t3.data.secret, hash: t3.data.hash }) : e2(void 0);
    }, r2.onerror = (e3) => {
      r2.terminate(), URL.revokeObjectURL(n2), t2(e3);
    }, r2.postMessage({ salt: OC, difficulty: kC, tokenLength: AC, maxTime: jC });
  });
}
function Cu(e2) {
  return Array.from(e2.keys()).map(encodeURIComponent).join(`,`);
}
function wu(e2, t2) {
  try {
    let n2 = t2.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n2 !== null && n2[2]) {
      let t3 = JSON.parse(decodeURIComponent(n2[2]));
      if (!t3 || typeof t3 != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach((n3) => {
        typeof t3[n3] == `string` && e2.append(n3, t3[n3]);
      });
    }
  } catch {
  }
}
function Tu(e2) {
  let t2 = p.useContext(qC), n2 = p.useMemo(() => e2 ? PC.map((e3) => ({ inputRef: p.createRef(), originalName: e3, methodsUsed: { setAttribute: false, valueProperty: false } })) : [], [e2]);
  return { states: n2, convertHoneypotFieldsForSubmission: p.useCallback(() => {
    n2.forEach((e3) => {
      let t3 = e3.inputRef.current;
      t3 && (t3.name = `${NC}_${e3.originalName}`);
    });
  }, [n2]), replaceHoneypotWithMetadata: p.useCallback((r2) => {
    if (!e2) return;
    let i2 = n2.length, a2 = 0, o2 = [];
    n2.forEach((e3) => {
      let t3 = e3.inputRef.current;
      if (t3) {
        let n3 = t3.name, i3 = t3.value;
        if (i3) {
          a2++;
          let t4 = { [IC.name]: e3.originalName, [IC.value]: i3, [IC.setAttribute]: e3.methodsUsed.setAttribute, [IC.valueProperty]: e3.methodsUsed.valueProperty, [IC.isInputEventTrusted]: e3.methodsUsed.isInputEventTrusted, [IC.inputChangeTimeSinceModuleLoad]: e3.methodsUsed.inputChangeTimeSinceModuleLoad, [IC.wasFilledBeforeHydration]: e3.methodsUsed.wasFilledBeforeHydration };
          o2.push(JSON.stringify(t4));
        }
        r2.delete(n3), t3.name = e3.originalName;
      }
    }), r2.append(`${NC}_${LC.fieldData}`, `[${o2.join(`,`)}]`), r2.append(`${NC}_${LC.fieldCount}`, i2.toString()), r2.append(`${NC}_${LC.fieldFilledCount}`, a2.toString()), r2.append(`${NC}_${LC.hpVersion}`, MC), r2.append(`${NC}_${LC.siteId}`, t2 || ``), r2.append(`${NC}_${LC.timeToSubmissionSinceModuleLoad}`, RC());
  }, [e2, n2, t2]) };
}
function Eu({ states: e2 }) {
  return _(O, { children: e2.map((e3) => _(zC, { inputStateRef: e3 }, `hp_${e3.originalName}`)) });
}
function Du({ router: e2, nodeId: t2, submitTrackingId: n2 }) {
  e2?.pageviewEventData?.current && (e2.pageviewEventData.current instanceof Promise ? e2.pageviewEventData.current.then((e3) => {
    Ou(e3, t2, n2);
  }) : Ou(e2.pageviewEventData.current, t2, n2));
}
function Ou(e2, t2, n2) {
  return nn(`published_site_form_submit`, { ...e2, nodeId: t2 ?? null, trackingId: n2 || null }, `eager`);
}
function ku(e2) {
  return `${BC}?render=${encodeURIComponent(e2)}&badge=bottomleft`;
}
function Au(e2) {
  let t2 = VC.get(e2);
  if (t2) return t2;
  let n2 = ku(e2);
  if (document.querySelector(`script[src="${n2}"]`)) {
    let t3 = Promise.resolve();
    return VC.set(e2, t3), t3;
  }
  let r2 = new Promise((t3, r3) => {
    let i2 = document.createElement(`script`);
    i2.src = n2, i2.onload = () => t3(), i2.onerror = () => {
      VC.delete(e2), i2.remove(), r3(Error(`Failed to load captcha script`));
    }, document.head.appendChild(i2);
  });
  return VC.set(e2, r2), r2;
}
function ju(e2, t2) {
  return new Promise((t3, r2) => {
    let { grecaptcha: i2 } = n;
    if (!i2) {
      r2(Error(`Captcha script not available`));
      return;
    }
    i2.ready(() => {
      i2.execute(e2).then(t3, r2);
    });
  });
}
function Mu({ provider: e2, siteKey: t2 }) {
  return p.useEffect(() => {
    e2 === `recaptcha_v3` && t2 && Qh(() => {
      Au(t2).catch(() => {
      });
    });
  }, [e2, t2]), { executeChallenge: p.useCallback(async (n2) => {
    if (!(e2 !== `recaptcha_v3` || !t2)) return await Au(t2), ju(t2, n2);
  }, [e2, t2]) };
}
function Nu({ state: e2 }, { type: t2 }) {
  switch (t2) {
    case `complete`:
      return e2 === `error` ? KC : GC;
    case `incomplete`:
      return e2 === `error` ? KC : WC;
    case `submit`:
      return HC;
    case `success`:
      return UC;
    case `error`:
      return KC;
    default:
      V(t2);
  }
}
function Pu({ state: e2 }) {
  return e2 === `incomplete` || e2 === `complete`;
}
function Fu(e2) {
  e2.preventDefault();
}
function Iu(e2, t2) {
  let n2 = Il(e2, false) ? e2 : `https://${e2}`, r2 = document.createElement(`a`);
  r2.href = n2, r2.target = `_self`, r2.style.display = `none`, `current` in t2 && t2.current && (t2.current.appendChild(r2), r2.click(), r2.remove());
}
function Lu(e2) {
  if (e2.children.length === 0) return false;
  for (let t2 of e2.children) if (t2 instanceof HTMLInputElement || t2 instanceof HTMLTextAreaElement || t2 instanceof HTMLSelectElement) {
    if (t2.required && t2.value === ``) return true;
  } else if (Lu(t2)) return true;
  return false;
}
async function Ru(action, form) {
  if (location.protocol === "file:") throw Error("Start the local server to receive inquiries.");
  const [firstName = "", lastName = ""] = form.getAll("Name");
  const response = await fetch(action, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ firstName, lastName, email: form.get("Email") || "", interest: form.get("Interest") || "", description: form.get("Description") || "" }) });
  if (!response.ok) throw Error("Unable to save inquiry.");
  return response;
}
function zu(e2) {
  return typeof e2 == `object` && !!e2 && `error` in e2 && z(e2.error) && `message` in e2.error && typeof e2.error.message == `string`;
}
function Bu({ EditorBar: e2, fast: t2 = false }) {
  let n2 = fg(), r2 = C(qC), i2 = ee($h, t2 ? ZC : QC, tg), a2 = c(() => {
    let e3 = {}, t3;
    for (t3 in n2) n2.hasOwnProperty(t3) && (t3.startsWith(`editorBar`) || t3.startsWith(`onPage`)) && (e3[t3] = n2[t3]);
    return e3;
  }, [n2]);
  return !e2 || !r2 || !i2 ? null : _(XC, { children: _(E, { children: _(e2, { framerSiteId: r2, features: a2 }) }) });
}
function Vu({ currentRoutePath: e2, routerAPI: t2, children: n2 }) {
  let r2 = w(), i2 = w(), a2 = w(t2), s2 = w(null);
  a2.current = t2, d(() => {
    e2 && (r2.current ??= /* @__PURE__ */ new Set(), r2.current.add(e2), i2.current?.(e2));
  }, [e2]);
  let [c2] = o(() => ({ getInitialState: () => ({ visitedPages: r2.current ?? /* @__PURE__ */ new Set(), getCurrentRoutePath: () => a2.current ? Uu(a2.current, a2.current.currentRouteId, a2.current.currentPathVariables) : ``, resolveRoute: (e3) => a2.current ? Uu(a2.current, e3.webPageId, e3.pathVariables) : ``, setRouteChangeHandler: (e3) => {
    i2.current = e3;
  }, sendTrackingEvent: async (e3) => {
    a2.current && Hu(a2.current.pageviewEventData.current, e3);
  } }), triggerStateRef: s2 }));
  return _($C.Provider, { value: c2, children: n2 });
}
async function Hu(e2, t2) {
  if (!rn(t2.trackingId)) return;
  let n2 = e2 instanceof Promise ? await e2 : e2;
  n2 && nn(`published_site_trigger_invoke`, { ...n2, ...t2, trackingId: t2.trackingId || null }, `lazy`);
}
function Uu(e2, t2, n2) {
  let r2 = e2.getRoute(t2);
  return !r2 || !r2.path ? `` : n2 ? On(r2.path, n2) : r2.path;
}
function Wu({ children: e2, loadSnippetsModule: t2 }) {
  return _(uw.Provider, { value: t2, children: e2 });
}
function Gu() {
  return p.useContext(uw);
}
function Ku(e2) {
  return { start: `<!-- Snippet: ${e2} -->`, end: `<!-- SnippetEnd: ${e2} -->` };
}
async function qu(e2, t2, n2 = `beforeend`) {
  let r2, i2;
  switch (n2) {
    case `beforebegin`:
      B(t2.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`), r2 = t2.parentNode, i2 = t2;
      break;
    case `afterend`:
      B(t2.parentNode, `Can't use 'afterend' with a referenceNode at the top level`), r2 = t2.parentNode, i2 = t2.nextSibling;
      break;
    case `afterbegin`:
      r2 = t2, i2 = t2.firstChild;
      break;
    case `beforeend`:
      r2 = t2, i2 = null;
      break;
    default:
      V(n2);
  }
  let a2 = document.createRange();
  a2.selectNodeContents(r2), await Ju(a2.createContextualFragment(e2), r2, i2);
}
async function Ju(e2, t2, n2) {
  for (let r2 = e2.firstChild; r2; r2 = r2.nextSibling) {
    if (r2 instanceof HTMLScriptElement) {
      let e4 = Yu(r2, t2, n2);
      e4 !== void 0 && await e4;
      continue;
    }
    let e3 = r2.cloneNode(false);
    t2.insertBefore(e3, n2), r2.firstChild && await Ju(r2, e3, null);
  }
}
function Yu(e2, t2, n2) {
  let r2 = e2.cloneNode(true);
  if (!e2.hasAttribute(`src`) || e2.hasAttribute(`async`) || e2.hasAttribute(`defer`) || e2.getAttribute(`type`)?.toLowerCase() === `module`) t2.insertBefore(r2, n2);
  else return Xu(r2, t2, n2);
}
function Xu(e2, t2, n2) {
  return new Promise((r2) => {
    e2.onload = e2.onerror = r2, t2.insertBefore(e2, n2);
  });
}
function Zu(e2) {
  let t2, n2;
  switch (e2) {
    case `bodyStart`:
      t2 = ow, n2 = sw;
      break;
    case `bodyEnd`:
      t2 = cw, n2 = lw;
      break;
    case `headStart`:
      t2 = nw, n2 = rw;
      break;
    case `headEnd`:
      t2 = iw, n2 = aw;
      break;
  }
  let r2 = e2 === `bodyStart` || e2 === `bodyEnd` ? document.body : document.head, i2 = null, a2 = null;
  for (let e3 of r2.childNodes) {
    if (e3.nodeType !== Node.COMMENT_NODE) continue;
    let r3 = `<!--${e3.nodeValue}-->`;
    r3 === t2 ? i2 = e3 : r3 === n2 && (a2 = e3);
  }
  return { start: i2, end: a2 };
}
function Qu(e2, t2, n2) {
  if (!t2 || !n2) return { start: null, end: null };
  let r2 = null, i2 = null, { start: a2, end: o2 } = Ku(e2), s2 = t2.nextSibling;
  for (; s2 && s2 !== n2; ) {
    if (s2.nodeType !== Node.COMMENT_NODE) {
      s2 = s2.nextSibling;
      continue;
    }
    let e3 = `<!--${s2.nodeValue}-->`;
    if (e3 === a2) r2 = s2;
    else if (e3 === o2) {
      i2 = s2;
      break;
    }
    s2 = s2.nextSibling;
  }
  return { start: r2, end: i2 };
}
async function $u(e2, t2, n2) {
  if (t2.length === 0) return;
  let { start: r2, end: i2 } = Zu(e2), a2 = e2 === `bodyStart` || e2 === `bodyEnd` ? document.body : document.head;
  for (let e3 of t2) {
    let { start: t3, end: o2 } = Qu(e3.id, r2, i2), s2 = t3 && o2;
    if (s2 && e3.loadMode === `once`) continue;
    if (ed(t3, o2), s2) {
      await qu(e3.code, o2, `beforebegin`);
      continue;
    }
    let { start: c2, end: l2 } = Ku(e3.id), u2 = `${c2}
${e3.code}
${l2}`, d2 = nd(e3.id, n2, r2, i2);
    d2 ? await qu(u2, d2, `afterend`) : await qu(u2, r2 ?? a2, r2 ? `afterend` : `beforeend`);
  }
}
function ed(e2, t2) {
  if (!e2 || !t2) return;
  let n2 = e2.nextSibling;
  for (; n2 && n2 !== t2; ) {
    let e3 = n2.nextSibling;
    td(n2) && n2.remove(), n2 = e3;
  }
}
function td(e2) {
  if (e2.nodeType !== Node.ELEMENT_NODE) return true;
  if (e2.nodeName === `SCRIPT`) {
    let t2 = e2.type;
    if (!t2 || t2 === `text/javascript` || t2 === `module`) return false;
  }
  return true;
}
function nd(e2, t2, n2, r2) {
  let i2 = t2.indexOf(e2) - 1;
  if (i2 < 0) return null;
  for (let e3 = i2; e3 >= 0; e3--) {
    let i3 = t2[e3];
    if (!i3) continue;
    let a2 = Qu(i3, n2, r2).end;
    if (a2) return a2;
  }
  return null;
}
function rd() {
  let e2 = Gu();
  return l(async (t2, n2, r2, i2) => {
    if (!e2) return;
    let a2 = document.getElementById(ew), o2 = a2 && a2.dataset[tw] !== void 0;
    if (i2 && o2) return;
    let { getSnippets: s2, snippetsSorting: c2 } = await e2.readMaybeAsync(), l2 = await s2(t2, n2, r2);
    for (let e3 in l2) {
      let t3 = e3, n3 = l2[t3], r3 = c2[t3];
      await $u(t3, n3, r3);
    }
  }, [e2]);
}
function id(e2, t2) {
  if (e2.routeId !== t2.routeId) return false;
  if (e2.pathVariables === t2.pathVariables) return true;
  let n2 = e2.pathVariables || {}, r2 = t2.pathVariables || {};
  return n2.length === r2.length && Object.keys(n2).every((e3) => n2[e3] === r2[e3]);
}
function ad() {
  let e2 = Intl.DateTimeFormat().resolvedOptions();
  dw = e2.timeZone, fw = e2.locale;
}
function od() {
  let [e2, t2] = p.useState(0);
  return [e2, p.useCallback(() => t2((e3) => e3 + 1), [])];
}
function sd(e2, t2, r2) {
  let i2 = e2 && document.getElementById(e2);
  if (i2) {
    pd(i2, t2);
    return;
  }
  r2 || n.scrollTo(0, 0);
}
function cd(e2) {
  let t2 = w([]);
  return r(() => {
    t2.current?.length && (t2.current.forEach((e3) => e3()), t2.current = []);
  }, [e2]), l((e3) => {
    t2.current.push(e3);
  }, []);
}
function ld(e2) {
  if (!e2) return Jh;
  let t2 = false;
  return () => {
    t2 || (t2 = true, e2?.());
  };
}
function ud() {
  let e2 = fr(), t2 = w(void 0);
  return l(async (r2, i2, a2, o2 = true) => {
    let s2 = a2 !== void 0;
    t2.current?.abort();
    let c2 = o2 ? new AbortController() : void 0;
    t2.current = c2;
    let l2 = c2?.signal, u2 = It(l2);
    if (i2.promise.finally(u2), !s2) return t2.current = void 0, r2(l2), i2.promise;
    r2(l2);
    let d2;
    if (e2(new Promise((e3, t3) => {
      d2 = e3, l2?.addEventListener(`abort`, t3);
    }).catch(Jh), a2, c2), await i2.promise, l2?.aborted) return;
    let f2 = n.navigation?.transition;
    d2();
    try {
      await f2?.finished;
    } catch (e3) {
      console.error(`Navigation transition failed`, e3);
    }
    l2?.aborted || c_();
  }, [e2]);
}
function dd({ defaultPageStyle: e2, disableHistory: t2, initialPathVariables: i2, initialRoute: o2, notFoundPage: s2, collectionUtils: u2, routes: f2, initialLocaleId: p2, initialCollectionItemId: m2, locales: g2 = lg, preserveQueryParams: v2 = false, LayoutTemplate: y2, EditorBar: b2, siteCanonicalURL: x2, adaptLayoutToTextDirection: S2 }) {
  Lr(), ir({ disabled: t2, routeId: o2, initialPathVariables: i2, initialLocaleId: p2 });
  let C2 = Xn(), [E2, D2] = od(), O2 = cd(E2), k2 = ud(), A2 = $n(`framer-route-change`), { synchronousNavigationOnDesktop: j2 } = fg(), ee2 = c(() => !j2 || !Ra() ? h : (e3) => e3(), [j2]), te2 = rd(), ne2 = w(true), M2 = w(), re2 = w(o2), ie2 = w(i2), ae2 = w(p2), oe2 = ae2.current, se2 = c(() => g2.find(({ id: e3 }) => oe2 ? e3 === oe2 : e3 === pg) ?? null, [oe2, g2]), ce2 = se2?.textDirection ?? `ltr`, le2 = S2 ? ce2 : `ltr`;
  r(() => {
    S2 && document.documentElement.setAttribute(`dir`, ce2);
  }, [ce2, S2]);
  let N2 = lr(), ue2 = c(() => ({ activeLocale: se2, locales: g2, setLocale: async (e3) => {
    let t3 = A2({ localized: true });
    await yn({ priority: `user-blocking`, continueAfter: `paint` });
    let r2;
    L(e3) ? r2 = e3 : z(e3) && (r2 = e3.id);
    let i3 = g2.find(({ id: e4 }) => e4 === pg), a2 = g2.find(({ id: e4 }) => e4 === r2);
    if (!a2) return;
    let o3 = re2.current, s3 = f2[o3];
    if (s3) try {
      let e4 = await N2({ currentLocale: se2, nextLocale: a2, route: s3, routeId: o3, defaultLocale: i3, pathVariables: ie2.current, preserveQueryParams: v2 });
      if (!e4) return;
      let r3 = tr(n.history.state) ? n.history.state.paginationInfo : void 0, c2 = e4.path;
      ne2.current = false, ie2.current = e4.pathVariables, ae2.current = a2.id, k2(() => {
        C2(o3, o3, () => ee2(D2));
      }, t3, async (t4 = false) => {
        if (c2) return rr({ routeId: o3, pathVariables: e4.pathVariables, localeId: a2.id, paginationInfo: r3 }, c2, t4);
      }, false);
    } catch {
    }
  } }), [se2, D2, g2, v2, f2, k2, C2, A2, ee2, N2]), de2 = l((e3, t3, n2, r2, i3, a2, o3, s3 = false, c2) => {
    ne2.current = false;
    let l2 = re2.current;
    if (re2.current = e3, ie2.current = i3, ae2.current = t3, M2.current = r2, O2(() => {
      sd(n2, s3, a2);
    }), a2) {
      ee2(D2);
      return;
    }
    k2((t4) => {
      C2(l2, e3, () => ee2(D2), t4);
    }, o3, c2, true);
  }, [D2, O2, k2, C2, ee2]);
  ar(re2, de2);
  let fe2 = l(async (e3, r2, i3, a2, o3) => {
    let s3 = f2[e3], c2 = ft(s3?.page) ? s3.page.getStatus() : void 0, l2 = c2?.hasRendered, u3 = A2({ cached: l2, preloaded: l2 ? void 0 : c2?.hasLoaded }), d2 = ld(o3);
    if (yn({ priority: `background`, ensureContinueBeforeUnload: true, continueAfter: `paint` }).then(d2), await yn({ priority: `user-blocking`, continueAfter: `paint` }), i3) {
      let e4 = /* @__PURE__ */ new Set(), t3 = s3?.path ?? `/`;
      for (let n2 of t3.matchAll(Xg)) {
        let t4 = n2[1];
        if (t4 === void 0) throw Error(`A matching path variable should not be undefined`);
        e4.add(t4);
      }
      i3 = Object.fromEntries(Object.entries(i3).filter(([t4]) => e4.has(t4)));
    }
    let p3 = Ft(s3, r2), m3 = ie2.current, h2 = ae2.current;
    if (id({ routeId: re2.current, pathVariables: m3 }, { routeId: e3, pathVariables: i3 })) {
      u3.ignore?.();
      let o4 = f2[e3];
      n.history.state?.hash !== r2 && !t2 && o4 && (d2(), await er(e3, o4, { currentRoutePath: o4.path, currentPathVariables: m3, pathVariables: i3, hash: r2, localeId: h2, preserveQueryParams: v2, siteCanonicalURL: x2, currentRoutePathLocalized: o4.pathLocalized })), sd(p3, a2, false);
      return;
    }
    if (!s3) return;
    let g3 = f2[re2.current];
    de2(e3, h2, p3, Nn(x2) + sr(s3, { currentRoutePath: g3?.path, currentRoutePathLocalized: g3?.pathLocalized, currentPathVariables: m3, hash: r2, pathVariables: i3, localeId: h2, preserveQueryParams: v2, siteCanonicalURL: x2, relative: false }), i3, false, u3, a2, t2 ? void 0 : async (t3 = false) => (d2(), er(e3, s3, { currentRoutePath: g3?.path, currentPathVariables: m3, currentRoutePathLocalized: g3?.pathLocalized, hash: r2, pathVariables: i3, localeId: h2, preserveQueryParams: v2, siteCanonicalURL: x2 }, t3)));
  }, [f2, de2, t2, v2, x2, A2]), pe2 = Dt(f2), me2 = re2.current, he2 = M2.current, P2 = ie2.current, ge2 = f2[me2], _e2 = ge2?.path, ve2 = pw(ge2, me2, he2, P2, se2, m2), ye2 = ne2.current;
  d(() => {
    te2(me2, P2 ?? {}, ue2.activeLocale, ye2);
  }, [te2, me2, P2, ue2, ye2]);
  let be2 = c(() => ({ navigate: fe2, getRoute: pe2, currentRouteId: me2, currentPathVariables: P2, routes: f2, collectionUtils: u2, preserveQueryParams: v2, pageviewEventData: ve2, siteCanonicalURL: x2, isInitialNavigation: ye2 }), [fe2, pe2, me2, P2, f2, u2, v2, x2, ve2, ye2]);
  if (!ge2) throw Error(`Router cannot find route for ${me2}`);
  let xe2 = !se2 || !ge2.includedLocales || ge2.includedLocales.includes(se2.id), F2 = _e2 && P2 ? On(_e2, P2) : _e2, Se2 = String(oe2) + F2, Ce2 = Zi(() => ({ ...e2, display: `contents` }));
  return _(Ot, { api: be2, children: _(__.Provider, { value: ue2, children: _(v_.Provider, { value: le2, children: _($S, { children: _(Tr, { children: T(Vu, { currentRoutePath: F2, routerAPI: be2, children: [b2 && _(Bu, { EditorBar: b2, fast: true }), _(RS, { children: T(cl, { children: [T(X_, { notFoundPage: s2, defaultPageStyle: e2, forceUpdateKey: E2, children: [_(J_.Start, {}), _(fd, { LayoutTemplate: y2, webPageId: ge2?.abTestingVariantId ?? me2, style: e2, children: (t3) => _(a, { children: xe2 ? Hr(ge2.page, t3 ? Ce2 : e2) : s2 && Hr(s2, e2) }, Se2) })] }), b2 && _(Bu, { EditorBar: b2 }), _(Nr, {}), _(J_.End, {})] }) })] }) }) }) }) }) });
}
function fd({ LayoutTemplate: e2, webPageId: t2, style: n2, children: r2 }) {
  return e2 ? _(e2, { webPageId: t2, style: n2, children: r2 }) : r2(false);
}
function pd(e2, t2) {
  let n2 = t2 ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e2.scrollIntoView(n2);
}
function md(e2) {
  return new Promise((t2, n2) => {
    try {
      new URL(e2);
      let r2 = new Image();
      r2.onload = () => t2(), r2.onerror = n2, r2.src = e2;
    } catch (e3) {
      n2(e3);
    }
  });
}
function hd(e2) {
  return typeof e2 == `object` && !!e2;
}
function gd(e2, t2) {
  if (t2 === ``) return e2;
  let n2 = t2.split(/[.[\]]+/u).filter((e3) => e3.length > 0), r2 = e2;
  for (let e3 of n2) {
    if (!hd(r2)) return;
    r2 = r2[e3];
  }
  return r2;
}
function _d(e2) {
  return `${e2.credentials}:${e2.url}`;
}
function vd(e2) {
  return L(e2) && !Number.isNaN(Number(e2));
}
function yd(e2, t2) {
  switch (e2) {
    case `string`:
      return L(t2) || R(t2);
    case `color`:
      return L(t2);
    case `boolean`:
      return Qe(t2);
    case `number`:
      return R(t2) || vd(t2);
    case `link`:
    case `image`:
      return L(t2) && Il(t2, false);
    default:
      return false;
  }
}
function bd(e2, t2) {
  if (e2.status === `loading`) return t2.fallbackValue;
  if (e2.status === `error`) throw e2.error;
  let n2 = gd(e2.data, t2.resultKeyPath);
  if (tt(n2)) throw Error(`Key '${t2.resultKeyPath}' not found in response`);
  if (!yd(t2.resultOutputType, n2)) throw Error(`Resolved value '${n2}' is not valid for type '${t2.resultOutputType}'`);
  return n2;
}
function xd(e2, t2) {
  if (q.current() === q.canvas) return false;
  let n2 = Math.max(t2 * 1e3, hw);
  return Date.now() >= e2 + n2;
}
function Sd(e2) {
  let { RootComponent: t2, isWebsite: n2, environment: r2, routeId: i2, framerSiteId: a2, pathVariables: o2, routes: s2, collectionUtils: c2, notFoundPage: l2, isReducedMotion: u2 = false, skipAnimations: d2 = false, includeDataObserver: f2 = false, localeId: m2, locales: h2, preserveQueryParams: g2, EditorBar: v2, defaultPageStyle: y2, disableHistory: b2, LayoutTemplate: x2, siteCanonicalURL: S2, adaptLayoutToTextDirection: C2, loadSnippetsModule: w2, initialCollectionItemId: T2 } = e2;
  return p.useEffect(() => {
    n2 || Cv.start();
  }, []), n2 ? _(hr, { value: r2 ?? `preview`, children: _(Be, { reducedMotion: d2 ? `always` : u2 ? `user` : `never`, skipAnimations: d2, children: _(pn, { collectionUtils: c2, children: _(Dw, { children: _(qC.Provider, { value: a2, children: _(Wu, { loadSnippetsModule: w2, children: _(dd, { initialRoute: i2, initialPathVariables: o2, initialLocaleId: m2, initialCollectionItemId: T2, routes: s2, collectionUtils: c2, notFoundPage: l2, locales: h2, defaultPageStyle: y2 ?? { minHeight: `100vh`, width: `auto` }, preserveQueryParams: g2, EditorBar: v2, disableHistory: b2, LayoutTemplate: x2, siteCanonicalURL: S2, adaptLayoutToTextDirection: C2 }) }) }) }) }) }) }) : _(f2 ? Gx : p.Fragment, { children: _(At, { routes: s2, children: _(Fx, { children: p.isValidElement(t2) ? t2 : p.createElement(t2, { key: i2 }) }) }) });
}
function Cd(e2) {
  return { trace(...t2) {
    return kb.getLogger(e2)?.trace(...t2);
  }, debug(...t2) {
    return kb.getLogger(e2)?.debug(...t2);
  }, info(...t2) {
    return kb.getLogger(e2)?.info(...t2);
  }, warn(...t2) {
    return kb.getLogger(e2)?.warn(...t2);
  }, error(...t2) {
    return kb.getLogger(e2)?.error(...t2);
  }, get enabled() {
    return kb.getLogger(e2) !== void 0;
  } };
}
function wd(e2) {
  let t2 = e2.next();
  return B(t2.done, `Generator must not yield`), t2.value;
}
async function Td(e2, t2 = e2.next()) {
  for (; !t2.done; ) {
    let n2 = await t2.value;
    t2 = e2.next(n2);
  }
  return t2.value;
}
function Ed(e2) {
  let t2 = e2.next();
  return t2.done ? t2.value : Td(e2, t2);
}
function* Dd(e2) {
  let t2 = {}, n2 = Object.keys(e2), r2 = [];
  for (let i2 of n2) {
    let n3 = e2[i2];
    if (at(n3)) {
      let e3 = n3.next();
      e3.done ? t2[i2] = e3.value : r2.push(Td(n3, e3).then((e4) => {
        t2[i2] = e4;
      }));
    } else t2[i2] = n3;
  }
  return r2.length > 0 && (yield Promise.all(r2)), t2;
}
function* Od(e2) {
  let t2 = [], n2 = e2.keys(), r2 = [];
  for (let i2 of n2) {
    let n3 = e2[i2];
    if (at(n3)) {
      let e3 = n3.next();
      e3.done ? t2[i2] = e3.value : r2.push(Td(n3, e3).then((e4) => {
        t2[i2] = e4;
      }));
    } else t2[i2] = n3;
  }
  return r2.length > 0 && (yield Promise.all(r2)), t2;
}
function kd(e2) {
  return Md(e2) || Fd(e2);
}
function Ad(e2) {
  return $e(e2) && e2.every(z);
}
function jd(e2) {
  return z(e2) && Ze(e2.read) && Ze(e2.preload);
}
function Md(e2) {
  return Ad(e2) || jd(e2);
}
function Nd(e2) {
  return z(e2) && z(e2.schema);
}
function Pd(e2) {
  return z(e2) && z(e2.collectionByLocaleId);
}
function Fd(e2) {
  return Nd(e2) || Pd(e2);
}
function Id(e2, t2, n2) {
  let r2 = e2.value.length, i2 = t2.value.length;
  if (r2 < i2) return -1;
  if (r2 > i2) return 1;
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = e2.value[i3], a2 = t2.value[i3], o2 = ff(r3, a2, n2);
    if (o2 !== 0) return o2;
  }
  return 0;
}
function Ld(e2, t2) {
  switch (e2?.type) {
    case `array`:
      return { type: `array`, value: e2.value.map((e3) => kw.cast(e3, t2.definition)) };
  }
  return null;
}
function Rd(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function zd(e2) {
  switch (e2?.type) {
    case `boolean`:
      return e2;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e2.value };
  }
  return null;
}
function Bd(e2) {
  return zd(e2)?.value ?? false;
}
function Vd(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function Hd(e2) {
  switch (e2?.type) {
    case `color`:
      return e2;
  }
  return null;
}
function Ud(e2, t2) {
  let n2 = new Date(e2.value), r2 = new Date(t2.value);
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function Wd(e2) {
  switch (e2?.type) {
    case `date`:
      return e2;
    case `number`:
    case `string`: {
      let t2 = new Date(e2.value);
      return it(t2) ? { type: `date`, value: t2.toISOString() } : null;
    }
  }
  return null;
}
function Gd(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function Kd(e2) {
  switch (e2?.type) {
    case `enum`:
      return e2;
    case `string`:
      return { type: `enum`, value: e2.value };
  }
  return null;
}
function qd(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function Jd(e2) {
  switch (e2?.type) {
    case `file`:
      return e2;
  }
  return null;
}
function Yd(e2, t2) {
  let n2 = JSON.stringify(e2.value), r2 = JSON.stringify(t2.value);
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function Xd(e2) {
  switch (e2?.type) {
    case `link`:
      return e2;
    case `string`:
      try {
        let { protocol: t2 } = new URL(e2.value);
        return t2 === `http:` || t2 === `https:` ? { type: `link`, value: e2.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Zd(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function Qd(e2) {
  switch (e2?.type) {
    case `number`:
    case `string`: {
      let t2 = Number(e2.value);
      return Number.isFinite(t2) ? { type: `number`, value: t2 } : null;
    }
  }
  return null;
}
function $d(e2) {
  return Qd(e2)?.value ?? null;
}
function ef(e2, t2, n2) {
  let r2 = Object.keys(e2.value).sort(), i2 = Object.keys(t2.value).sort();
  if (r2.length < i2.length) return -1;
  if (r2.length > i2.length) return 1;
  for (let a2 = 0; a2 < r2.length; a2++) {
    let o2 = r2[a2], s2 = i2[a2];
    if (o2 < s2) return -1;
    if (o2 > s2) return 1;
    let c2 = ff(e2.value[o2] ?? null, t2.value[s2] ?? null, n2);
    if (c2 !== 0) return c2;
  }
  return 0;
}
function tf(e2, t2) {
  switch (e2?.type) {
    case `object`: {
      let n2 = {}, r2 = Object.entries(t2.definitions);
      for (let [t3, i2] of r2) {
        let r3 = e2.value[t3] ?? null;
        n2[t3] = kw.cast(r3, i2);
      }
      return { type: `object`, value: n2 };
    }
  }
  return null;
}
function nf(e2, t2) {
  let n2 = JSON.stringify(e2.value), r2 = JSON.stringify(t2.value);
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function rf(e2) {
  switch (e2?.type) {
    case `responsiveimage`:
      return e2;
  }
  return null;
}
function af(e2, t2) {
  let n2 = e2.value, r2 = t2.value;
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function of(e2) {
  switch (e2?.type) {
    case `richtext`:
      return e2;
  }
  return null;
}
function sf(e2, t2) {
  let n2 = e2.value, r2 = t2.value;
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function cf(e2) {
  switch (e2?.type) {
    case `vectorsetitem`:
      return e2;
  }
  return null;
}
function lf(e2, t2, n2) {
  let r2 = e2.value, i2 = t2.value;
  return n2.type === 0 && (r2 = e2.value.toLowerCase(), i2 = t2.value.toLowerCase()), r2 < i2 ? -1 : r2 > i2 ? 1 : 0;
}
function uf(e2) {
  switch (e2?.type) {
    case `string`:
      return e2;
    case `number`:
      return { type: `string`, value: String(e2.value) };
  }
  return null;
}
function df(e2) {
  return uf(e2)?.value ?? null;
}
function ff(e2, t2, n2) {
  if (nt(e2) || nt(t2)) return B(e2 === t2), 0;
  switch (e2.type) {
    case `array`:
      return B(e2.type === t2.type), Id(e2, t2, n2);
    case `boolean`:
      return B(e2.type === t2.type), Rd(e2, t2);
    case `color`:
      return B(e2.type === t2.type), Vd(e2, t2);
    case `date`:
      return B(e2.type === t2.type), Ud(e2, t2);
    case `enum`:
      return B(e2.type === t2.type), Gd(e2, t2);
    case `file`:
      return B(e2.type === t2.type), qd(e2, t2);
    case `link`:
      return B(e2.type === t2.type), Yd(e2, t2);
    case `number`:
      return B(e2.type === t2.type), Zd(e2, t2);
    case `object`:
      return B(e2.type === t2.type), ef(e2, t2, n2);
    case `responsiveimage`:
      return B(e2.type === t2.type), nf(e2, t2);
    case `richtext`:
      return B(e2.type === t2.type), af(e2, t2);
    case `vectorsetitem`:
      return B(e2.type === t2.type), sf(e2, t2);
    case `string`:
      return B(e2.type === t2.type), lf(e2, t2, n2);
    default:
      V(e2);
  }
}
async function pf(e2, t2) {
  return jd(e2) ? (await e2.preload(t2), e2.read(t2)) : e2;
}
function mf(e2) {
  return e2.includes(Pw);
}
function hf(e2) {
  if (!Fd(e2) || !e2.id) return;
  let t2 = Mw.get(e2.id);
  if (!t2) return Mw.set(e2.id, new WeakRef(e2)), e2.id;
  if (t2.deref() === e2) return e2.id;
}
function gf(e2) {
  let t2 = hf(e2);
  if (t2) return t2;
  let n2 = Nw.get(e2);
  if (n2) return n2;
  let r2 = `${Pw}${Math.random().toString(16).slice(2)}`;
  return Nw.set(e2, r2), r2;
}
function _f(e2, t2) {
  if (Md(e2)) {
    let n2 = gf(e2) + (t2?.id ?? pg), r2 = Fw.get(n2);
    if (r2) return r2;
    let i2 = new jw(e2, t2);
    return Fw.set(n2, i2), i2;
  }
  if (Nd(e2)) return e2;
  if (Pd(e2)) {
    for (; t2; ) {
      let n2 = e2.collectionByLocaleId[t2.id];
      if (n2) return n2;
      t2 = t2.fallback;
    }
    return e2.collectionByLocaleId.default;
  }
  V(e2, `Unsupported collection type`);
}
function vf() {
  return 25;
}
function yf() {
  return 12500;
}
function bf(e2) {
  return e2;
}
function xf(e2) {
  return e2;
}
function Sf(e2) {
  return z(e2) && Ze(e2.getHash);
}
function W(e2, ...t2) {
  return xf(`${e2}(${t2.map((e3) => (B(!(e3 instanceof Ww), `Pass CollectionMetadata.id instead`), B(!(e3 instanceof qw), `Pass FieldMetadata.id instead`), B(!(e3 instanceof Gw), `Pass IndexMetadata.id instead`), B(!(e3 instanceof Bw), `Pass RelationalNode.group.id instead`), B(!(e3 instanceof Lw), `Pass Group.id instead`), Sf(e3) ? e3.getHash() : JSON.stringify(e3))).join(`, `)})`);
}
function Cf(e2, t2) {
  return { collectionId: gf(e2), pointer: t2 };
}
function wf(e2) {
  return z(e2) && L(e2.collectionId);
}
function Tf(e2, t2) {
  return { collectionId: gf(e2), pointer: t2 };
}
function Ef(e2) {
  return z(e2) && L(e2.collectionId);
}
function Df(e2, t2) {
  let n2 = /* @__PURE__ */ new Map();
  function r2(e3) {
    if (z(e3)) if (e3.type === `Collection` && kd(e3.data)) {
      let r3 = _f(e3.data, t2), i2 = gf(r3);
      n2.set(i2, r3);
    } else for (let t3 in e3) {
      let n3 = e3[t3];
      r2(n3);
    }
    else if ($e(e3)) for (let t3 of e3) r2(t3);
  }
  return r2(e2), n2;
}
function Of(e2) {
  return e2;
}
function kf(e2) {
  return e2;
}
function Af(e2) {
  return e2;
}
function jf(e2) {
  return Array(e2).fill({ type: `All` });
}
function Mf(e2, ...t2) {
  if (e2) return;
  let n2 = Error(`Assertion Error` + (t2.length > 0 ? `: ` + t2.join(` `) : ``));
  if (n2.stack) try {
    let e3 = n2.stack.split(`
`);
    e3[1]?.includes(`assert`) ? (e3.splice(1, 1), n2.stack = e3.join(`
`)) : e3[0]?.includes(`assert`) && (e3.splice(0, 1), n2.stack = e3.join(`
`));
  } catch {
  }
  throw n2;
}
function Nf(e2) {
  let t2 = /* @__PURE__ */ new Set();
  if (!e2) return t2;
  Mf(e2.type === `array`, `ScalarIntersection expects an array, got:`, e2.type);
  for (let n2 of e2.value) n2 && (Mf(n2.type === `string`, `ScalarIntersection expects an array of strings, got an array with:`, n2.type), t2.add(n2.value));
  return t2;
}
function Pf(e2) {
  return e2.collection ? `"${e2.collection}"."${e2.name}"` : `"${e2.name}"`;
}
function Ff(e2) {
  return typeof e2.value == `string` ? `'${e2.value}'` : e2.value;
}
function If(e2) {
  return `${e2.functionName}(${e2.arguments.map((e3) => Vf(e3)).join(`, `)})`;
}
function Lf(e2) {
  let t2 = `CASE`;
  e2.value && (t2 += ` ${Vf(e2.value)}`);
  for (let n2 of e2.conditions) t2 += ` WHEN ${Vf(n2.when)} THEN ${Vf(n2.then)}`;
  return e2.else && (t2 += ` ELSE ${Vf(e2.else)}`), t2 += ` END`, t2;
}
function Rf(e2) {
  let t2 = Vf(e2.value);
  return `${e2.operator.toUpperCase()} ${t2}`;
}
function zf(e2) {
  let t2 = Vf(e2.left), n2 = Vf(e2.right);
  return `${t2} ${e2.operator.toUpperCase()} ${n2}`;
}
function Bf(e2) {
  return `CAST(${Vf(e2.value)} as ${e2.dataType})`;
}
function Vf(e2) {
  switch (e2.type) {
    case `Identifier`:
      return Pf(e2);
    case `LiteralValue`:
      return Ff(e2);
    case `FunctionCall`:
      return If(e2);
    case `Case`:
      return Lf(e2);
    case `UnaryOperation`:
      return Rf(e2);
    case `BinaryOperation`:
      return zf(e2);
    case `TypeCast`:
      return Bf(e2);
    case `Select`:
      return `${Kf(e2)}`;
    default:
      V(e2);
  }
}
function Hf(e2) {
  return Nd(e2.data) ? `Collection` : e2.alias ? `"${e2.data.displayName}" AS "${e2.alias}"` : `"${e2.data.displayName}"`;
}
function Uf(e2) {
  let t2 = `${Wf(e2.left)} LEFT JOIN ${Wf(e2.right)}`;
  return e2.constraint && (t2 += ` ON ${Vf(e2.constraint)}`), t2;
}
function Wf(e2) {
  switch (e2.type) {
    case `Collection`:
      return Hf(e2);
    case `LeftJoin`:
      return Uf(e2);
    default:
      V(e2);
  }
}
function Gf(e2) {
  let t2 = ``;
  return e2.split(/\s+/u).forEach((e3) => {
    e3 !== `` && ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e3) ? t2 += `
${e3}` : [`AND`, `OR`].includes(e3) ? t2 += `
	${e3}` : t2 += ` ${e3}`);
  }), t2.trim();
}
function Kf(e2) {
  let t2 = ``;
  return t2 += `SELECT ${e2.select.map((e3) => {
    let t3 = Vf(e3);
    return e3.alias ? `${t3} AS "${e3.alias}"` : t3;
  }).join(`, `)}`, t2 += ` FROM ${Wf(e2.from)}`, e2.where && (t2 += ` WHERE ${Vf(e2.where)}`), e2.orderBy && (t2 += ` ORDER BY ${e2.orderBy.map((e3) => `${Vf(e3)} ${e3.direction ?? `asc`}`).join(`, `)}`), e2.limit && (t2 += ` LIMIT ${Vf(e2.limit)}`), e2.offset && (t2 += ` OFFSET ${Vf(e2.offset)}`), Gf(t2);
}
function qf(e2) {
  return z(e2) && e2.type === `Collection`;
}
function Jf(e2, t2) {
  return qf(t2) && kd(t2.data) ? gf(t2.data) : t2;
}
function Yf(e2, t2) {
  let n2 = t2?.id ?? `default`;
  return JSON.stringify(e2, Jf) + n2;
}
function Xf(e2) {
  let { activeLocale: t2 } = yr();
  return iE.get(e2, t2).use();
}
function Zf(e2) {
  return Xf({ ...e2, select: [] }).length;
}
function Qf(e2, t2) {
  let n2 = Object.entries(e2 ?? {}).filter(([, e3]) => !(tt(e3) || z(e3))).map(([e3, n3]) => ({ type: `BinaryOperation`, operator: `==`, left: { type: `TypeCast`, value: { type: `Identifier`, name: e3, collection: t2 }, dataType: `STRING` }, right: { type: `LiteralValue`, value: String(n3) } }));
  return n2.length === 0 ? { type: `LiteralValue`, value: false } : n2.reduce((e3, t3) => ({ type: `BinaryOperation`, operator: `and`, left: e3, right: t3 }));
}
function $f(e2) {
  let t2 = w(e2);
  return j(() => {
    t2.current = e2;
  }, [e2]), vr((...e3) => {
    let n2 = t2.current;
    return n2(...e3);
  }, []);
}
function ep(e2, t2) {
  e2.forEach((e3) => clearTimeout(e3)), e2.clear(), t2.forEach((e3) => e3?.(`Callback cancelled by variant change`)), t2.clear();
}
function tp() {
  return /* @__PURE__ */ new Set();
}
function np(e2) {
  let t2 = Zi(tp), n2 = Zi(tp);
  return Ds(() => () => ep(n2, t2)), d(() => () => ep(n2, t2), []), d(() => {
    ep(n2, t2);
  }, [e2]), w({ activeVariantCallback: (e3) => async (...n3) => new Promise((r2, i2) => {
    t2.add(i2), e3(...n3).then(r2);
  }).catch(() => {
  }), delay: async (e3, t3) => {
    await new Promise((e4) => {
      n2.add(globalThis.setTimeout(() => e4(true), t3));
    }), e3();
  } }).current;
}
function rp(e2, t2, n2) {
  return p.useCallback((r2) => !n2 || !e2 ? {} : t2 ? Object.assign({}, n2[e2]?.[r2], n2[t2]?.[r2]) : n2[e2]?.[r2] || {}, [e2, t2, n2]);
}
function ip(e2) {
  for (let [t2, n2] of Object.entries(e2)) if (G.matchMedia(n2).matches) return t2;
}
function ap(e2) {
  let t2 = [];
  for (let { hash: n3, mediaQuery: r2 } of e2) r2 && G.matchMedia(r2).matches && t2.push(n3);
  if (t2.length > 0) return t2;
  let n2 = e2[0]?.hash;
  if (n2) return [n2];
}
function op(e2, t2, n2 = true) {
  let r2 = C(Mx), i2 = oo(), a2 = w(!i2 && Pa() ? ip(t2) ?? e2 : e2), o2 = w(n2 && r2 ? e2 : a2.current), s2 = Fo(), c2 = de(), u2 = l((e3) => {
    if (e3 !== a2.current || e3 !== o2.current) {
      let t3 = function() {
        a2.current = o2.current = e3, h(() => {
          s2();
        });
      };
      i2 ? t3() : c2(() => {
        t3();
      });
    }
  }, [c2, s2, i2]);
  return Rb(() => {
    i2 && u2(e2);
  }, [e2, i2, u2]), Rb(() => {
    !n2 || r2 !== true || u2(a2.current);
  }, []), d(() => {
    let e3 = [];
    for (let [n3, r3] of Object.entries(t2)) {
      let t3 = G.matchMedia(r3), i3 = (e4) => {
        e4.matches && u2(n3);
      };
      sp(t3, i3), e3.push([t3, i3]);
    }
    return () => e3.forEach(([e4, t3]) => cp(e4, t3));
  }, [t2, u2]), [a2.current, o2.current];
}
function sp(e2, t2) {
  e2.addEventListener ? e2.addEventListener(`change`, t2) : e2.addListener(t2);
}
function cp(e2, t2) {
  e2.removeEventListener ? e2.removeEventListener(`change`, t2) : e2.removeListener(t2);
}
function lp(e2) {
  setTimeout(e2, 1);
}
function up(e2) {
  let t2 = /* @__PURE__ */ new Set(), n2 = ap(e2);
  if (n2) for (let e3 of n2) for (let n3 of document.querySelectorAll(`.hidden-` + e3)) dp(n3.previousSibling) && t2.add(n3.previousSibling), n3.parentNode?.removeChild(n3);
  (Zh ? G.requestIdleCallback : lp)(() => {
    document.querySelector(aE)?.remove();
  });
  for (let e3 of document.querySelectorAll(`.ssr-variant:empty`)) dp(e3.previousSibling) && t2.add(e3.previousSibling), e3.parentNode?.removeChild(e3);
  for (let e3 of t2) fp(e3.nextSibling) && (e3.parentNode?.removeChild(e3.nextSibling), e3.parentNode?.removeChild(e3));
}
function dp(e2) {
  return e2?.nodeType === Node.COMMENT_NODE && e2.textContent === `$`;
}
function fp(e2) {
  return e2?.nodeType === Node.COMMENT_NODE && e2.textContent === `/$`;
}
function pp(e2, t2) {
  e2 !== false && we.render(() => {
    let e3 = document.documentElement.style;
    t2 ? e3.setProperty(`overflow`, `hidden`) : e3.removeProperty(`overflow`);
  });
}
function mp({ blockDocumentScrolling: e2 = true, dismissWithEsc: t2 = false } = {}) {
  let [n2, r2] = p.useState(false), i2 = p.useCallback(async (t3) => {
    await yn({ priority: `user-blocking`, continueAfter: `paint` }), h(() => r2(t3)), pp(e2, t3);
  }, [e2]);
  return p.useEffect(() => () => {
    yn({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
      pp(e2, false);
    });
  }, [e2]), p.useEffect(() => {
    if (!t2) return;
    let e3 = (e4) => {
      e4.key === `Escape` && (e4.preventDefault(), e4.stopPropagation(), i2(false));
    };
    return G.addEventListener(`keydown`, e3), () => G.removeEventListener(`keydown`, e3);
  }, [t2, i2]), [n2, i2];
}
function hp(e2) {
  return z(e2) && oE in e2 && e2.page !== void 0;
}
function gp(e2, t2, n2, r2 = false) {
  let [i2, a2] = A(), s2 = Math.ceil(e2 / t2), [u2, f2] = o(globalThis?.history?.state?.paginationInfo?.[n2]?.currentPage ?? 1), p2 = w(u2), m2 = c(() => ({ currentPage: u2, totalPages: s2, isLoading: i2 }), [u2, s2, i2]);
  d(() => {
    dr(n2, m2);
  }, [n2, m2]);
  let g2 = Pl();
  return { paginationInfo: m2, loadMore: l(async () => g2 || p2.current >= s2 || (await yn({ priority: `user-blocking`, continueAfter: `paint` }), p2.current >= s2) ? void 0 : ((e3) => {
    e3(() => {
      f2((e4) => {
        let t3 = Math.min(e4 + 1, s2);
        return p2.current = t3, t3;
      });
    });
  })(r2 ? a2 : h), [s2, r2]) };
}
function _p(e2, t2, n2) {
  let { paginationInfo: r2, loadMore: i2 } = gp(Zf(e2), t2, n2, true);
  return { paginatedQuery: c(() => {
    let n3 = t2 * r2.currentPage;
    if (e2.limit) {
      if (e2.limit.type !== `LiteralValue` || typeof e2.limit.value != `number`) throw Error(`Unexpected type for query limit`);
      n3 = Math.min(n3, e2.limit.value);
    }
    return { ...e2, limit: { type: `LiteralValue`, value: n3 } };
  }, [e2, t2, r2]), paginationInfo: r2, loadMore: i2 };
}
function vp(e2, t2) {
  return `${e2}-${t2}`;
}
function yp(e2, t2) {
  let n2 = e2.indexOf(t2) + 1;
  n2 >= e2.length && (n2 = 0);
  let r2 = e2[n2];
  return B(r2 !== void 0, `nextVariant should be defined`), r2;
}
function bp(e2, t2) {
  if (e2) {
    if (t2) {
      let n2 = e2[t2];
      if (n2) return n2;
    }
    return e2.default;
  }
}
function xp(e2, t2, n2, r2, i2) {
  let { hover: a2, pressed: o2, loading: s2, error: c2 } = e2 || {};
  if (c2 && i2) return `error`;
  if (s2 && r2) return `loading`;
  if (o2 && n2) return `pressed`;
  if (a2 && t2) return `hover`;
}
function Sp(e2, t2) {
  return t2[e2] || `framer-v-${e2}`;
}
function Cp(e2, t2, n2) {
  return e2 && n2.has(e2) ? e2 : t2;
}
function wp() {
  let e2 = w(), t2 = w(), n2 = l(() => {
    e2.current && (document.removeEventListener(`visibilitychange`, e2.current), e2.current = void 0, t2.current = void 0);
  }, []);
  return d(() => () => {
    n2();
  }, [n2]), l((r2) => {
    if (!document.hidden) {
      r2(), n2();
      return;
    }
    if (t2.current = r2, e2.current) return;
    let i2 = () => {
      document.hidden || (t2.current?.(), n2());
    };
    e2.current = i2, document.addEventListener(`visibilitychange`, i2);
  }, [n2]);
}
function Tp() {
  let e2 = w(), t2 = w(false), n2 = w(), r2 = C(hx);
  return d(() => () => {
    e2.current?.(), n2.current = void 0, e2.current = void 0;
  }, []), l((i2, a2) => {
    if (!a2?.current || t2.current) {
      i2();
      return;
    }
    if (n2.current = i2, e2.current) return;
    let o2 = false;
    e2.current = ys(r2, `undefined`, a2.current, null, (e3) => {
      t2.current = e3.isIntersecting, !o2 && (o2 = true, queueMicrotask(() => {
        o2 = false, t2.current && n2.current?.();
      }));
    });
  }, [r2]);
}
function Ep(e2) {
  let t2 = wp(), n2 = Tp();
  return l((r2, i2 = false) => {
    if (Xh) {
      r2();
      return;
    }
    t2(i2 && e2 ? () => n2(r2, e2) : r2);
  }, [t2, n2, e2]);
}
async function Dp() {
  return new Promise((e2) => {
    let t2 = e2;
    setTimeout(() => {
      t2 && (performance.mark(`wait-for-click-fallback`), t2());
    }, 150), lE = () => {
      e2(), t2 = void 0;
    };
  });
}
function Op(e2) {
  e2.button === 0 && (performance.mark(`pointerdown-listener`), cE = Dp());
}
function kp() {
  performance.mark(`click-received-listener`), cE = void 0, lE?.(), lE = void 0;
}
function Ap(e2 = false) {
  d(() => {
    e2 && (document.addEventListener(`pointerup`, Op, true), document.__proto__.addEventListener.call(document, `click`, kp, true));
  }, [e2]);
}
function jp({ variant: e2, defaultVariant: t2, transitions: n2, enabledGestures: r2, cycleOrder: i2 = [], variantProps: a2 = {}, variantClassNames: o2 = {}, ref: s2 }) {
  let u2 = Fo(), d2 = Pl(), f2 = Zi(() => new Set(i2)), { yieldOnTap: p2 } = fg();
  Ap(p2);
  let m2 = Ep(s2), g2 = w({ isHovered: false, isHoveredHasUpdated: false, isPressed: false, isPressedHasUpdated: false, isError: false, hasPressedVariants: true, baseVariant: Cp(e2, t2, f2), lastVariant: e2, gestureVariant: void 0, loadedBaseVariant: {}, defaultVariant: t2, enabledGestures: r2, cycleOrder: i2, transitions: n2 }), _2 = l((e3) => {
    let { isHovered: t3, isPressed: n3, isError: r3, enabledGestures: i3, defaultVariant: a3 } = g2.current, o3 = Cp(e3, a3, f2), s3 = xp(i3?.[o3], t3, n3, false, r3);
    return [o3, s3 ? vp(o3, s3) : void 0];
  }, []), v2 = l(async (e3, t3, n3, r3, i3 = false, a3 = false) => {
    let [o3, s3] = _2(r3);
    if (o3 === e3 && s3 === t3) return;
    a3 && (g2.current.isError = false), g2.current.baseVariant = o3 || n3, g2.current.gestureVariant = s3;
    let c2 = p2 && g2.current.isPressedHasUpdated;
    c2 && cE && (performance.mark(`wait-for-tap-start`), await cE, performance.measure(`wait-for-tap`, `wait-for-tap-start`)), c2 && (performance.mark(`yield-on-tap-start`), await yn({ priority: `user-blocking`, continueAfter: `paint` }), performance.measure(`yield-on-tap`, `yield-on-tap-start`));
    let { isHovered: l2, isPressed: d3, isHoveredHasUpdated: f3, isPressedHasUpdated: v3 } = g2.current;
    if (l2 || f3 || d3 || v3) {
      h(u2);
      return;
    }
    m2(() => h(u2), i3);
  }, [_2, u2, m2, p2]), y2 = l(({ isHovered: e3, isPressed: t3, isError: n3 }) => {
    let r3 = t3 !== g2.current.isPressed, i3 = e3 !== g2.current.isHovered;
    e3 !== void 0 && (g2.current.isHovered = e3), t3 !== void 0 && (g2.current.isPressed = t3), n3 !== void 0 && (g2.current.isError = n3);
    let { baseVariant: a3, gestureVariant: o3, defaultVariant: s3 } = g2.current;
    g2.current.isPressedHasUpdated = r3, g2.current.isHoveredHasUpdated = i3, v2(a3, o3, s3, a3, false);
  }, [v2]), b2 = l((e3, t3 = false) => {
    let { defaultVariant: n3, cycleOrder: r3, baseVariant: i3, gestureVariant: a3 } = g2.current;
    v2(i3, a3, n3, e3 === sE ? yp(r3 || [], i3 || n3) : e3, t3, true);
  }, [v2]), x2 = l(() => {
    let { baseVariant: e3 } = g2.current;
    g2.current.loadedBaseVariant[e3] = true, m2(() => h(u2), true);
  }, [u2, m2]);
  if (e2 !== g2.current.lastVariant) {
    let [t3, n3] = _2(e2);
    g2.current.lastVariant = t3, (t3 !== g2.current.baseVariant || n3 !== g2.current.gestureVariant) && (g2.current.baseVariant = t3, g2.current.gestureVariant = n3);
  }
  let { baseVariant: S2, gestureVariant: C2, defaultVariant: T2, enabledGestures: E2, isHovered: D2, isPressed: O2, isError: k2, loadedBaseVariant: A2 } = g2.current, j2 = rp(g2.current.baseVariant, g2.current.gestureVariant, a2);
  return c(() => {
    let e3 = [];
    S2 !== T2 && e3.push(S2);
    let t3 = E2?.[S2]?.loading, n3 = !k2 && !d2 && !!t3 && !A2[S2], r3 = n3 ? vp(S2, `loading`) : C2;
    r3 && e3.push(r3);
    let i3 = E2?.[S2], a3 = { onMouseEnter: () => y2({ isHovered: true }), onMouseLeave: () => y2({ isHovered: false }) };
    return i3?.pressed && Object.assign(a3, { onTapStart: () => y2({ isPressed: true }), onTapCancel: () => y2({ isPressed: false }), onTap: () => y2({ isPressed: false }) }), { variants: e3, baseVariant: S2, gestureVariant: r3, isLoading: n3, transition: bp(g2.current.transitions, S2), setVariant: b2, setGestureState: y2, clearLoadingGesture: x2, addVariantProps: j2, gestureHandlers: a3, classNames: vc(Sp(S2, o2), xp(i3, D2, O2, n3, k2)) };
  }, [S2, C2, D2, O2, A2, j2, b2, T2, E2, y2, x2, o2]);
}
function Mp(e2, { scopeId: t2, nodeId: n2, override: r2, inComponentSlot: i2 }) {
  if (!fl()) return r2(e2);
  let a2 = Np(e2, r2), o2 = false;
  function s2(r3, s3) {
    let { disableCustomCode: c2 } = fg(), l2 = hl();
    if (c2) return _(e2, { ...r3, ref: s3 });
    if (Cl(t2, l2?.scopeId, l2?.level, i2 ?? false)) return a2.status === `success` ? _(p_.Provider, { value: n2, children: _(pl, { getErrorMessage: bl.bind(null, t2, n2), fallback: _(e2, { ...r3, ref: s3 }), children: _(a2.Component, { ...r3, ref: s3 }) }) }) : (o2 ||= (dl(a2.error), dl(bl(t2, n2)), ul(a2.error), true), _(e2, { ...r3, ref: s3 }));
    if (a2.status === `success`) return _(p_.Provider, { value: n2, children: _(a2.Component, { ...r3, ref: s3 }) });
    throw a2.error;
  }
  return p.forwardRef(s2);
}
function Np(e2, t2) {
  try {
    return { status: `success`, Component: t2(e2) };
  } catch (e3) {
    return { status: `error`, error: e3 };
  }
}
function Pp(e2) {
  return e2.weight !== void 0 && e2.style !== void 0;
}
function Fp(e2, t2) {
  let n2 = t2 === `normal` ? `Regular` : `Italic`;
  return e2 === 400 ? n2 : t2 === `normal` ? `${vE[e2]}` : `${vE[e2]} ${n2}`;
}
function Ip() {
  return n === void 0 ? {} : bE || (bE = Lp(), bE);
}
function Lp() {
  let e2 = n.location, t2 = n?.bootstrap?.services;
  if (t2) return t2;
  let r2;
  try {
    if (r2 = n.top.location.origin, t2 = n.top?.bootstrap?.services, t2) return t2;
  } catch {
  }
  if (r2 && r2 !== e2.origin) throw Error(`Unexpectedly embedded by ${r2} (expected ${e2.origin})`);
  if (e2.origin.endsWith(`framer.com`) || e2.origin.endsWith(`framer.dev`)) throw Error(`ServiceMap data was not provided in document`);
  try {
    let n2 = new URLSearchParams(e2.search).get(`services`) || new URLSearchParams(e2.hash.substring(1)).get(`services`);
    n2 && (t2 = JSON.parse(n2));
  } catch {
  }
  if (t2 && typeof t2 == `object` && t2.api) return t2;
  throw Error(`ServiceMap requested but not available`);
}
function Rp(e2) {
  return e2.key + e2.extension;
}
function zp(e2) {
  return `${Ip().userContent}/assets/${e2}`;
}
function Bp(e2) {
  return zp(Rp(e2));
}
function Vp(e2, t2) {
  return t2 ? `${e2} ${xE}` : e2;
}
function Hp(e2, t2) {
  switch (t2) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Vp(e2.name, e2.isVariable);
  }
}
function Up(e2) {
  return !!(e2 && Array.isArray(e2));
}
function Wp(e2) {
  if (!e2 || !Array.isArray(e2)) return;
  let t2 = [];
  for (let n2 of e2) Kp(n2) && t2.push({ tag: n2.tag, name: n2.name, minValue: n2.minValue, maxValue: n2.maxValue, defaultValue: n2.defaultValue });
  return t2;
}
function Gp(e2) {
  return !(typeof e2 != `object` || !e2 || !(`tag` in e2) || typeof e2.tag != `string` || `coverage` in e2 && e2.coverage !== void 0 && !Array.isArray(e2.coverage));
}
function Kp(e2) {
  return !(typeof e2 != `object` || !e2 || !(`tag` in e2) || typeof e2.tag != `string` || `name` in e2 && typeof e2.name != `string` || !(`minValue` in e2) || typeof e2.minValue != `number` || !(`maxValue` in e2) || typeof e2.maxValue != `number` || !(`defaultValue` in e2) || typeof e2.defaultValue != `number`);
}
function qp(e2) {
  return wE[Jp(e2)];
}
function Jp(e2) {
  return e2.toLowerCase().replace(/\s+/gu, `-`);
}
function Yp(e2) {
  return e2 = e2.toLowerCase(), e2.includes(`italic`) || e2.includes(`oblique`) || e2.includes(`slanted`) ? `italic` : `normal`;
}
function Xp(e2, t2) {
  return { ...Zp(e2, t2), ...Qp(e2, t2) };
}
function Zp(e2, t2) {
  if (t2.length === 0) return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n2, style: r2 } = e2, i2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map();
  for (let r3 of t2) r3.isVariable === e2.isVariable && (i2.set(`${r3.weight}-${r3.style}`, r3), !(r3.weight <= n2) && (a2.has(r3.style) || a2.set(r3.style, r3)));
  let o2 = a2.get(r2), s2 = a2.get(`italic`), c2 = e2.weight;
  c2 <= 300 ? (o2 = i2.get(`400-${r2}`) ?? o2, s2 = i2.get(`400-italic`) ?? s2) : c2 <= 500 ? (o2 = i2.get(`700-${r2}`) ?? o2, s2 = i2.get(`700-italic`) ?? s2) : (o2 = i2.get(`900-${r2}`) ?? o2, s2 = i2.get(`900-italic`) ?? s2);
  let l2 = i2.get(`${n2}-italic`);
  return { variantBold: o2, variantItalic: l2, variantBoldItalic: s2 };
}
function Qp(e2, t2) {
  if (t2.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n2, r2, i2, a2;
  for (let o2 of t2) {
    if (!o2.isVariable) continue;
    let t3 = o2.weight === e2.weight, s2 = o2.weight === 400;
    o2.style === `normal` ? t3 ? n2 = o2 : s2 ? i2 = o2 : i2 ||= o2 : o2.style === `italic` && (t3 ? r2 = o2 : s2 ? a2 = o2 : a2 ||= o2);
  }
  return { variantVariable: n2 ?? i2, variantVariableItalic: r2 ?? a2 };
}
function $p(e2) {
  return !!e2.variationAxes;
}
function em(e2) {
  return tm(e2) || nm(e2);
}
function tm(e2) {
  return e2.startsWith(DE);
}
function nm(e2) {
  return e2.startsWith(EE);
}
function rm(e2, t2) {
  for (let n2 = 0; n2 < e2.length; n2++) {
    let r2 = e2[n2];
    if (r2) {
      if (r2.owner !== t2.owner && r2.file === t2.file) return { existingFont: r2, index: n2, projectDuplicate: true };
      if (r2 && r2.selector === t2.selector) return { existingFont: r2, index: n2, projectDuplicate: false };
    }
  }
}
function im(e2) {
  let { font: t2 } = e2, n2 = t2.fontFamily, r2 = Array.isArray(t2.variationAxes);
  if (r2 && n2.toLowerCase().includes(`variable`)) return n2;
  let i2 = r2 ? xE : t2.fontSubFamily.trim();
  return i2 === `` ? n2 : `${n2} ${i2}`;
}
function am({ fontFamily: e2, fontSubFamily: t2, variationAxes: n2, faceDescriptors: r2 }) {
  let i2 = t2.trim() || `Regular`, a2 = i2.toLocaleLowerCase().includes(`variable`), o2 = Wp(n2) && !a2 ? `Variable ${i2}` : i2, s2 = `normal`, c2 = 400;
  return r2 && (c2 = r2.weight, s2 = r2.italic || r2.oblique ? `italic` : `normal`), { family: e2, variant: o2, weight: c2, style: s2 };
}
function om(e2) {
  if (!(!e2.weight || !e2.style)) return { weight: e2.weight, style: e2.style, isVariable: $p(e2), selector: e2.selector };
}
function sm(e2) {
  let t2 = e2.fonts.map((e3) => om(e3)).filter((e3) => e3 !== void 0);
  for (let n2 of e2.fonts) {
    let e3 = om(n2);
    if (!e3) continue;
    let r2 = Xp(e3, t2);
    n2.selectorVariable = r2.variantVariable?.selector, n2.selectorVariableItalic = r2.variantVariableItalic?.selector, n2.selectorBold = r2.variantBold?.selector, n2.selectorBoldItalic = r2.variantBoldItalic?.selector, n2.selectorItalic = r2.variantItalic?.selector;
  }
}
function cm(e2) {
  return e2.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function lm(e2) {
  switch (e2) {
    case `google`:
      return (await import("./google-3SZHWBC6.BkvhXKxV.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-B2QLD7YB.EpdL8WtK.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e2}`);
  }
}
async function um(e2) {
  switch (e2) {
    case `google`:
      return (await import("./google-3FCAKCAC.jp1RYtyB.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-4THNDPMZ.3AGM9UZa.mjs")).default;
    case `framer`:
      return (await import("./framer-font-45AI7UCZ.CERJXcX0.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e2}`);
  }
}
function dm(e2) {
  return e2.split(`,`).map((e3) => e3.trim().toLowerCase()).filter(fm);
}
function fm(e2) {
  return kE.includes(e2);
}
function pm(e2) {
  let t2 = { serif: `serif`, sans: `sans-serif`, slab: `slab`, display: `display`, handwritten: `handwriting`, script: `handwriting` }, n2 = dm(e2)[0];
  return n2 && t2[n2];
}
function mm(e2) {
  let t2 = { serif: `serif`, "sans-serif": `sans-serif`, display: `display`, handwriting: `handwriting`, monospace: `monospace` };
  if (e2) return t2[e2];
}
function hm(e2, t2) {
  return e2.reduce((e3, n2) => (e3[t2(n2)] = n2, e3), {});
}
async function gm(e2, t2, n2 = 0) {
  let { family: r2, url: i2, stretch: a2, unicodeRange: o2 } = e2, s2 = e2.weight, c2 = e2.style || `normal`, l2 = `${r2}-${c2}-${s2}-${i2}`;
  if (!GE.has(l2) || n2 > 0) {
    let u2 = new FontFace(r2, `url(${i2})`, { weight: L(s2) ? s2 : s2?.toString(), style: c2, stretch: a2, unicodeRange: o2 }), d2 = u2.load().then(() => (t2.fonts.add(u2), _m(r2, c2, s2))).catch((l3) => {
      if (l3.name !== `NetworkError`) throw l3;
      if (n2 < UE) return gm(e2, t2, n2 + 1);
      throw new WE(`Font loading failed after ${n2} retries due to network error: ${JSON.stringify({ family: r2, style: c2, weight: s2, url: i2, stretch: a2, unicodeRange: o2 })}`);
    });
    GE.set(l2, d2);
  }
  await GE.get(l2);
}
async function _m(e2, t2, n2) {
  let r2 = `${e2}-${t2}-${n2}`;
  if (!KE.has(r2)) {
    let i2 = new VE.default(e2, { style: t2, weight: n2 }).load(null, HE);
    KE.set(r2, i2);
  }
  try {
    await KE.get(r2);
  } catch {
    throw new WE(`Failed to check if font is ready (${HE}ms timeout exceeded): ${JSON.stringify({ family: e2, style: t2, weight: n2 })}`);
  }
}
function vm(e2) {
  try {
    if (e2 === `framer`) return ym(JE) ? JE : void 0;
    {
      let t2 = (async () => {
        switch (e2) {
          case `google`:
            return (await import("./google-GXDJLGJB.D-kqaIqp.mjs")).default;
          case `fontshare`:
            return (await import("./fontshare-O22OBJ3D.Di-ZmtsR.mjs")).default;
          default:
            V(e2);
        }
      })();
      return ym(t2) ? t2 : void 0;
    }
  } catch (e3) {
    console.error(e3);
    return;
  }
}
function ym(e2) {
  return z(e2) && Object.values(e2).every(xm);
}
function bm(e2) {
  return z(e2) && L(e2.tag);
}
function xm(e2) {
  return Array.isArray(e2) && e2.every(bm);
}
function Sm(e2, t2, n2, r2 = ZE) {
  let [i2, a2] = p.useState(e2), [o2, s2] = p.useState(e2);
  return t2 && e2 !== o2 && (s2(e2), a2(e2)), [i2, a2, p.useCallback((e3) => {
    Ar(e3) || (t2 && a2(r2(e3)), n2 && p.startTransition(() => {
      n2(e3);
    }));
  }, [r2, n2, t2])];
}
function Cm(e2, t2) {
  return !e2 || t2 !== `date` ? e2 : e2.includes(`T`) ? e2.split(`T`)[0] : e2;
}
function wm() {
  return _(`svg`, { xmlns: `http://www.w3.org/2000/svg`, width: `8`, height: `8`, viewBox: `0 0 8 8`, "aria-hidden": `true`, children: _(`path`, { d: `m1.5 6.5 5-5M6.5 6.5l-5-5`, fill: `none`, stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round` }) });
}
function Tm(e2) {
  return e2 === void 0 ? `__undefined__` : R(e2) ? String(e2) : e2 === `` ? `__empty__` : e2;
}
function Em(e2, t2) {
  d(() => {
    function r2(n2) {
      n2.key === `Escape` && e2 && (n2.preventDefault(), n2.stopPropagation(), t2());
    }
    return n.addEventListener(`keyup`, r2), () => n.removeEventListener(`keyup`, r2);
  }, [e2, t2]);
}
function Dm(e2, t2, r2, i2) {
  let a2 = n.innerHeight - i2, o2 = Math.min(n.innerWidth - r2, t2), s2 = a2 / e2;
  return Math.min(o2, s2);
}
function Om(e2, { width: t2, height: r2 }) {
  if (!e2.src || !e2.srcSet) return;
  let i2 = new n.Image();
  return i2.src = e2.src, i2.srcset = e2.srcSet, i2.sizes = e2.sizes || ``, i2.width = t2, i2.height = r2, i2.decode();
}
function km() {
  return document.getElementById(pC) ?? document.getElementById(fC) ?? document.body;
}
function Am(e2, t2) {
  return R(e2) ? e2 : t2 ?? 0;
}
function jm(e2) {
  return Am(e2?.paddingTop, e2?.padding) + Am(e2?.paddingBottom, e2?.padding);
}
function Mm(e2) {
  return Am(e2?.paddingLeft, e2?.padding) + Am(e2?.paddingRight, e2?.padding);
}
function Nm(e2, t2) {
  if (!e2 || !t2 || !t2.src) return t2;
  let n2 = new URL(t2.src);
  return n2.searchParams.delete(`scale-down-to`), n2.searchParams.delete(`lossless`), { ...t2, sizes: `min(100vw, ${e2.maxWidth - Mm(e2)}px)`, srcSet: po(t2.nodeFixedSize, t2, t2.src).srcSet };
}
function Pm(e2) {
  if (!e2) return false;
  for (let t2 in e2) {
    if (!(t2 in pD)) continue;
    let n2 = pD[t2], r2 = e2[t2];
    if (!(!R(n2) || !R(r2)) && n2 !== r2) return true;
  }
  return false;
}
function Fm(e2) {
  let t2 = ue.get(e2.current);
  if (!t2) return false;
  if (Pm(t2.projection?.latestValues)) return true;
  let n2 = t2.projection?.path;
  if (!n2 || n2.length === 0) return false;
  for (let e3 of n2) if (Pm(e3.latestValues)) return true;
  return false;
}
function Im(e2) {
  return b(function({ lightbox: t2, lightboxClassName: n2, onClick: r2, ...i2 }, s2) {
    let u2 = C(We), f2 = C(uE), p2 = !!f2, m2 = w(null), g2 = s2 ?? m2, v2 = w(), y2 = c(() => Nm(t2, i2.background), [t2, i2.background]), [b2, x2] = o(false), [E2, D2] = o(), k2 = l(() => {
      if (t2) {
        if (b2) {
          h(() => {
            x2(true);
          });
          return;
        }
        we.read(() => {
          if (!g2.current) return;
          let e3 = getComputedStyle(g2.current), n3 = g2.current.getAttribute(`data-border`) === `true` ? getComputedStyle(g2.current, `::after`) : void 0, r3 = g2.current.offsetWidth ?? 1, i3 = g2.current.offsetHeight ?? 1, a2 = Fm(g2) || p2 ? { duration: 0 } : t2.transition;
          h(() => {
            D2({ borderRadius: e3.borderRadius, aspectRatio: r3 / (i3 || 1), borderTop: n3?.borderTopWidth, borderRight: n3?.borderRightWidth, borderBottom: n3?.borderBottomWidth, borderLeft: n3?.borderLeftWidth, borderStyle: n3?.borderStyle, borderColor: n3?.borderColor, transition: a2, imageRendering: e3.imageRendering, filter: e3.filter }), x2(true), f2?.stop();
          });
        });
      }
    }, [t2, b2, g2, f2?.stop, p2]), A2 = E2?.aspectRatio ?? 1, j2 = $f(() => {
      if (!t2 || !y2 || !y2.src) return;
      let e3 = v2.current?.[y2.src];
      if (e3) return e3;
      let n3 = Dm(A2, t2.maxWidth, Mm(t2), jm(t2)), r3 = Om(y2, { width: n3, height: n3 * A2 });
      return v2.current = { [y2.src]: r3 }, r3;
    }), ee2 = l(async (e3) => {
      r2?.(e3), !(b2 || !t2 || !y2) && (await j2(), k2());
    }, [r2, k2, b2, y2, t2, j2]), ne2 = l((e3) => {
      e3?.stopPropagation(), h(() => {
        x2(false);
      });
    }, []);
    Em(b2, ne2), d(() => {
      if (!t2) return;
      let e3;
      function n3() {
        e3 = setTimeout(() => {
          j2();
        }, 50);
      }
      function r3() {
        clearTimeout(e3);
      }
      let i3 = g2.current;
      return i3?.addEventListener(`mouseenter`, n3), i3?.addEventListener(`mouseleave`, r3), i3?.addEventListener(`pointerdown`, j2), () => {
        r3(), i3?.removeEventListener(`mouseenter`, n3), i3?.removeEventListener(`mouseleave`, r3), i3?.removeEventListener(`pointerdown`, j2);
      };
    }, [j2, g2, t2]);
    let M2 = te(), re2 = E2?.transition ?? i2.transition ?? u2.transition, ie2 = E2?.borderRadius, ae2 = E2?.imageRendering, oe2 = E2?.filter, se2 = E2?.borderTop, ce2 = E2?.borderRight, le2 = E2?.borderBottom, N2 = E2?.borderLeft, ue2 = E2?.borderStyle, de2 = E2?.borderColor, fe2 = !!(se2 || ce2 || le2 || N2 || ue2 || de2), pe2 = fe2 ? { "--border-top-width": se2, "--border-right-width": ce2, "--border-bottom-width": le2, "--border-left-width": N2, "--border-style": ue2, "--border-color": de2 } : void 0, me2 = { [tC]: i2.id }, he2 = Am(t2?.paddingTop, t2?.padding), P2 = Am(t2?.paddingBottom, t2?.padding), ge2 = Am(t2?.paddingLeft, t2?.padding), _e2 = Am(t2?.paddingRight, t2?.padding), ve2 = E2?.borderRadius ? { ...i2.style, borderRadius: E2.borderRadius } : i2.style, ye2 = b2 ? i2.layoutDependency ? `${i2.layoutDependency}-open` : `open` : i2.layoutDependency, be2 = p2 && b2 ? void 0 : i2.layoutId ?? (t2 ? M2 : void 0);
    return T(O, { children: [_(e2, { ...i2, style: ve2, onClick: ee2, layoutId: be2, ref: g2, layoutDependency: ye2, transition: re2 }), _(Ne, { onExitComplete: () => {
      h(() => {
        D2(void 0), f2?.start();
      });
    }, children: b2 && t2 && y2 && _(a, { children: S(T(O, { children: [_(qe.div, { ...me2, className: n2, onClick: ne2, style: { position: `fixed`, inset: 0, zIndex: t2.zIndex, backgroundColor: t2.backdrop ?? `transparent` }, transition: re2, initial: mD, animate: hD, exit: mD }), _(qe.div, { ...me2, className: n2, style: { alignItems: `center`, display: `flex`, inset: `${he2}px ${_e2}px ${P2}px ${ge2}px`, justifyContent: `center`, pointerEvents: `none`, position: `fixed`, zIndex: t2.zIndex }, children: _(`div`, { style: { alignItems: `center`, aspectRatio: A2, display: `flex`, justifyContent: `center`, maxHeight: `100%`, position: `relative`, width: `100%`, maxWidth: t2.maxWidth }, children: _(qe.div, { layoutId: be2, transition: re2, onClick: k2, className: `framer-lightbox-container`, "data-border": fe2, style: { aspectRatio: A2, borderRadius: ie2, bottom: 0, position: `absolute`, top: 0, userSelect: `none`, imageRendering: ae2, filter: oe2, ...pe2 }, children: _(So, { image: y2, alt: y2.alt, draggable: i2.draggable }) }) }) })] }), km()) }, `backdrop`) })] });
  });
}
function Lm(e2, t2) {
  return vD && !t2 ? Document.parseHTMLUnsafe(e2) : (_D ??= new DOMParser(), _D.parseFromString(e2, t2 ?? `text/html`));
}
function Rm(e2) {
  return e2.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`).replaceAll(`"`, `&quot;`).replaceAll(`'`, `&#39;`);
}
function zm(e2, t2, n2, r2) {
  return e2.replace(yD, (e3, i2, a2, o2, s2, c2, l2) => {
    if (a2.toLowerCase() !== `a`) return e3;
    let u2 = s2 || c2, d2 = zl(u2.replace(/&amp;/gu, `&`));
    if (!d2 || !d2.target) return e3;
    let f2 = t2(d2.target);
    if (!hp(f2) || !hp(n2)) return e3;
    let p2 = f2.path, m2 = n2.path;
    if (!p2 || !m2) return e3;
    let h2 = ` data-framer-page-link-target="${d2.target}"`, g2 = Ft(f2, d2.element ?? void 0);
    g2 && (h2 += ` data-framer-page-link-element="${d2.element}"`);
    let _2 = Vl(u2);
    if (!_2 || L(_2)) return e3;
    tu(n2, _2, r2) && (h2 += ` data-framer-page-link-current`);
    let v2 = p2, y2 = Object.assign({}, r2, d2.collectionItem?.pathVariables);
    if (Object.keys(y2).length > 0 && (v2 = v2.replace(gC, (e4, t3) => `` + y2[t3])), d2.collectionItem?.pathVariables) {
      let e4 = new URLSearchParams(d2.collectionItem.pathVariables);
      h2 += ` data-framer-page-link-path-variables="${e4}"`;
    }
    return v2 = wn(m2, v2), i2 + o2 + `"${Rm(v2 + (g2 ? `#${g2}` : ``))}"` + h2 + l2;
  });
}
function Bm(e2, t2) {
  return e2.length === t2.length && e2.every((e3, n2) => e3 === t2[n2]);
}
function Vm(e2) {
  switch (e2) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Hm(e2, t2, n2) {
  let r2 = w([]);
  Bm(r2.current, e2) || (r2.current = e2, XE.loadFonts(e2).then(({ newlyLoadedFontCount: e3 }) => {
    !t2 || !n2.current || q.current() !== q.canvas || e3 > 0 && Vo(n2.current);
  }));
}
function Um() {
  return { current: null };
}
async function Wm(e2, t2) {
  let n2 = e2.current;
  if (n2) return n2;
  let r2, i2 = new Promise((e3, n3) => {
    r2 = e3, t2.signal.addEventListener(`abort`, () => n3());
  });
  return Object.defineProperty(e2, `current`, { get() {
    return n2;
  }, set(e3) {
    if (n2 = e3, e3 === null) {
      t2.abort();
      return;
    }
    r2(e3);
  }, configurable: true }), i2;
}
function Gm(e2) {
  return e2 in CD;
}
function Km(e2, t2) {
  let n2 = {};
  for (let r2 in e2) {
    if (!Gm(r2)) continue;
    let i2 = e2[r2], a2 = CD[r2];
    tt(i2) || tt(a2) || t2 && r2 !== `opacity` || (n2[r2] = [i2, a2]);
  }
  return n2;
}
function qm(e2, t2 = `character`, n2, r2, i2) {
  if (r2) {
    let t3 = Um();
    return n2.add(t3), _(`span`, { ref: t3, style: i2, children: e2 });
  }
  switch (t2) {
    case `character`:
    case `line`: {
      let t3 = e2.split(` `), r3 = t3.length - 1;
      return t3.map((e3, t4) => {
        let o2 = t4 === r3;
        return T(a, { children: [_(`span`, { style: { whiteSpace: e3.length <= 12 ? `nowrap` : `unset` }, children: e3.match(wD)?.map((e4, t5) => {
          let r4 = Um();
          return n2.add(r4), _(`span`, { ref: r4, style: i2, children: e4 }, e4 + t5);
        }) }), o2 ? null : ` `] }, e3 + t4 + o2);
      });
    }
    case `word`: {
      let t3 = e2.split(` `), r3 = t3.length - 1;
      return t3.map((e3, t4) => {
        let o2 = t4 === r3, s2 = Um();
        return n2.add(s2), T(a, { children: [_(`span`, { ref: s2, style: i2, children: e3 }), o2 ? null : ` `] }, e3 + t4 + o2);
      });
    }
    case `element`:
    default:
      return e2;
  }
}
function Jm(e2) {
  let t2 = e2.type;
  switch (t2) {
    case `appear`:
      return e2.tokenization ?? `character`;
    default:
      V(t2);
  }
}
function Ym(e2) {
  let t2 = [];
  return R(e2.x) && t2.push(`translateX(${e2.x}px)`), R(e2.y) && t2.push(`translateY(${e2.y}px)`), R(e2.scale) && t2.push(`scale(${e2.scale})`), R(e2.rotate) && t2.push(`rotate(${e2.rotate}deg)`), R(e2.rotateX) && t2.push(`rotateX(${e2.rotateX}deg)`), R(e2.rotateY) && t2.push(`rotateY(${e2.rotateY}deg)`), R(e2.skewX) && t2.push(`skewX(${e2.skewX}deg)`), R(e2.skewY) && t2.push(`skewY(${e2.skewY}deg)`), t2.join(` `);
}
function Xm(e2, t2, n2, r2) {
  if (!n2 || !n2.effect) return;
  let i2 = n2.type;
  switch (i2) {
    case `appear`:
      switch (n2.tokenization) {
        case `element`:
          return !e2 || !t2 ? void 0 : { opacity: n2.effect.opacity, filter: r2 ? void 0 : n2.effect.filter, transform: r2 ? void 0 : Ym(n2.effect) };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e2 || !t2 ? { display: `inline-block` } : { display: `inline-block`, opacity: n2.effect.opacity, filter: r2 ? void 0 : n2.effect.filter, transform: r2 ? void 0 : Ym(n2.effect) };
      }
    default:
      V(i2);
  }
}
function Zm(e2, t2, n2) {
  let r2 = Zi(() => /* @__PURE__ */ new Set()), i2 = ao(), a2 = n2 || !i2, o2 = be(), s2 = w({ hasMounted: false, hasAnimatedOnce: false, isAnimating: false, effect: e2 });
  s2.current.effect = e2;
  let l2 = e2?.trigger ?? `onMount`, u2 = e2?.target, f2 = e2?.threshold;
  d(() => {
    if (!a2 || n2) return;
    s2.current.hasMounted = true;
    function e3() {
      let { effect: e4 } = s2.current;
      if (!a2 || !e4 || e4?.repeat !== true && s2.current.hasAnimatedOnce || e4?.type === `appear` && s2.current.isAnimating) return;
      Object.assign(s2.current, { hasAnimatedOnce: true, isAnimating: true });
      let t3 = e4.type;
      switch (t3) {
        case `appear`: {
          let { transition: t4, startDelay: n3, repeat: i3, tokenization: a3 } = e4, c2 = { current: void 0 };
          return $m(a3, e4.effect, r2, t4, n3, i3, o2, () => {
            Object.assign(s2.current, { isAnimating: false });
          }, c2), () => c2.current?.();
        }
        default:
          V(t3);
      }
    }
    switch (l2) {
      case `onMount`:
        e3();
        return;
      case `onInView`: {
        let n3 = t2?.current;
        return n3 ? Ke(n3, e3, { amount: f2 ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t3 = u2?.ref?.current;
        return t3 ? Ke(t3, e3, { amount: f2 ?? 0, root: document, margin: u2?.offset ? `${u2.offset}px 0px 0px 0px` : void 0 }) : void 0;
      }
      default:
        V(l2);
    }
  }, [a2, r2, n2, t2, u2, f2, l2]);
  let p2 = !!e2, m2 = e2 ? Jm(e2) : void 0;
  return c(() => ({ getTokenizer: () => {
    if (r2.clear(), !p2) return;
    let { hasMounted: e3, hasAnimatedOnce: t3, effect: i3 } = s2.current, c2 = Xm(a2, n2 || Qm(e3, t3, i3), s2.current.effect, o2);
    return { text: (e4) => qm(e4, m2, r2, o2, c2), props: (e4) => {
      if (i3?.tokenization !== `element`) return;
      let t4 = Um();
      return r2.add(t4), { ref: t4, style: { ...e4, ...c2 } };
    } };
  }, play: () => {
    let { effect: e3 } = s2.current;
    if (!e3) return;
    let t3 = e3.type;
    switch (t3) {
      case `appear`: {
        let { transition: t4, startDelay: n3 } = e3;
        $m(m2, e3.effect, r2, t4, n3, false, o2);
        break;
      }
      default:
        V(t3);
    }
  } }), [a2, p2, r2, n2, m2]);
}
function Qm(e2, t2, n2) {
  return !(e2 && n2?.trigger === `onMount` || t2 && !n2?.repeat && (n2?.trigger === `onInView` || n2?.trigger === `onScrollTarget`));
}
async function $m(e2 = `character`, t2, n2, r2, i2 = 0, a2 = false, o2, s2, c2) {
  let l2 = Km(t2, o2), u2 = new AbortController();
  switch (c2 && (c2.current = () => u2.abort()), e2) {
    case `character`:
    case `element`:
    case `word`: {
      let e3 = await eh(n2, u2);
      if (e3 === null || (Re(e3, l2, { ...r2, restDelta: 1e-3, delay: re(r2?.delay ?? 0, { startDelay: i2 }) }).then(() => s2?.()), !a2 || !c2)) return;
      c2.current = () => {
        Re(e3, o2 ? { opacity: t2.opacity } : t2, { ...r2, restDelta: 1e-3, delay: re(r2?.delay ?? 0, { startDelay: i2 }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e4 of n2) await Wm(e4, u2);
      } catch {
        return;
      }
      let e3;
      if (we.read(() => {
        e3 = th(n2), e3.length !== 0 && we.update(() => {
          let t3 = e3.map((e4, t4) => Re(e4, l2, { ...r2, restDelta: 1e-3, delay: i2 + t4 * (r2?.delay ?? 0) }));
          Promise.all(t3).then(() => s2?.());
        });
      }), !a2 || !c2) return;
      c2.current = () => {
        if (e3.length === 0) return;
        let n3 = o2 ? { opacity: t2.opacity } : t2;
        e3.forEach((e4, t3) => {
          Re(e4, n3, { ...r2, restDelta: 1e-3, delay: i2 + t3 * (r2?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e2);
  }
}
async function eh(e2, t2) {
  if (e2.size === 0) return null;
  let n2 = [];
  for (let r2 of e2) try {
    let e3 = await Wm(r2, t2);
    e3 && n2.push(e3);
  } catch {
    return null;
  }
  return n2;
}
function th(e2) {
  let t2 = [], n2 = [], r2 = null;
  for (let i2 of e2) {
    if (!i2.current) continue;
    let e3 = i2.current.offsetTop, a2 = i2.current.offsetHeight;
    !a2 || r2 === null || e3 === r2 ? n2.push(i2.current) : (t2.push(n2), n2 = [i2.current]), a2 && (r2 = e3);
  }
  return t2.push(n2), t2;
}
function nh(e2) {
  let t2 = {};
  for (let n2 in e2) (ie(n2) || wb(n2)) && (t2[n2] = e2[n2]);
  return t2;
}
function rh(e2) {
  return e2.type === a;
}
function ih(e2) {
  return e2.type === `br`;
}
function ah(e2, n2, r2, a2, o2 = {}, s2, c2 = rh(e2) ? -1 : 0) {
  let l2 = i.toArray(e2.props.children);
  tt(r2) || (l2 = l2.slice(0, 1));
  let u2 = true;
  l2 = l2.map((e3) => {
    if ((!y(e3) || !ih(e3)) && (u2 = false), y(e3)) return ah(e3, n2, r2, a2, o2, s2, c2 + 1);
    let t2 = tt(r2) ? e3 : r2;
    return L(t2) && s2 ? s2.text(t2) : t2;
  });
  let { "data-preset-tag": d2, ...f2 } = e2.props;
  if (L(e2.type) || Je(e2.type)) {
    let t2 = pe(e2.type) || e2.type, r3 = d2 || t2, i2 = L(r3) ? n2?.[r3] : void 0;
    f2.className = vc(`framer-text`, f2.className, i2), s2 && c2 === 0 && !u2 && Object.assign(f2, s2.props(f2.style));
    let p2 = t2 === `h1` || t2 === `h2` || t2 === `h3` || t2 === `h4` || t2 === `h5` || t2 === `h6`, m2 = n2?.anchor;
    if (p2 && m2) {
      let e3 = oh(l2, o2);
      f2.id = e3;
      let t3 = vc(`framer-text`, m2), n3 = _(`a`, { href: `#${e3}`, className: t3, children: l2 });
      f2.style = { ...f2.style ?? {}, scrollMarginTop: a2 }, l2 = [n3];
    }
  }
  return t(e2, f2, ...l2);
}
function oh(e2, t2) {
  let n2 = mr(e2.map(sh).join(``)), r2 = t2[n2] ?? 0;
  return r2 > 0 && (n2 += `-${r2}`), t2[n2] = r2 + 1, n2;
}
function sh(e2) {
  return L(e2) || R(e2) ? e2.toString() : y(e2) ? sh(e2.props.children) : Array.isArray(e2) ? e2.map(sh).join(``) : ``;
}
function ch(e2) {
  let t2 = e2 * Math.PI / 180, n2 = { x: -Math.sin(t2) * 100, y: Math.cos(t2) * 100 }, r2 = ui(n2.x, n2.y), i2 = Mv(ui(0.5, 0.5), r2), a2 = J.points({ x: 0, y: 0, width: 1, height: 1 }), o2 = a2.map((e3) => ({ point: e3, distance: ui.distance(r2, e3) })).sort((e3, t3) => e3.distance - t3.distance), s2 = o2[0]?.point, c2 = o2[1]?.point;
  B(s2 && c2, `linearGradientLine: Must have 2 closest points.`);
  let [l2, u2] = a2.filter((e3) => !ui.isEqual(e3, s2) && !ui.isEqual(e3, c2));
  B(l2 && u2, `linearGradientLine: Must have 2 opposing points.`);
  let d2 = Mv.intersection(i2, Mv(s2, c2)), f2 = Mv.intersection(i2, Mv(l2, u2));
  return B(d2 && f2, `linearGradientLine: Must have a start and end point.`), Mv(d2, f2);
}
function lh(e2, t2) {
  let n2 = ch(e2.angle), r2 = Xo(e2), i2 = r2[0]?.position ?? 0, a2 = r2[r2.length - 1]?.position ?? 1, o2 = Mv.pointAtPercentDistance(n2, i2), s2 = Mv.pointAtPercentDistance(n2, a2), c2 = Ee([i2, a2], [0, 1]);
  return { id: `id${t2}g${ex.hash(e2)}`, x1: o2.x, y1: o2.y, x2: s2.x, y2: s2.y, stops: r2.map((t3) => ({ color: t3.value, alpha: Jb.getAlpha(t3.value) * e2.alpha, position: c2(t3.position) })) };
}
function uh(e2, t2) {
  return { id: `id${t2}g${nx.hash(e2)}`, widthFactor: e2.widthFactor, heightFactor: e2.heightFactor, centerAnchorX: e2.centerAnchorX, centerAnchorY: e2.centerAnchorY, stops: Xo(e2).map((t3) => ({ color: t3.value, alpha: Jb.getAlpha(t3.value) * e2.alpha, position: t3.position })) };
}
function dh(e2) {
  if (!L(e2) || e2.charAt(e2.length - 1) !== `%`) return false;
  let t2 = e2.slice(0, -1);
  return R(parseFloat(t2));
}
function fh(e2) {
  let t2 = e2.slice(0, -1), n2 = parseFloat(t2);
  return R(n2) ? n2 : 50;
}
function ph(e2) {
  return dh(e2) ? fh(e2) / 100 : e2 === `left` ? 0 : e2 === `right` ? 1 : 0.5;
}
function mh(e2) {
  return dh(e2) ? fh(e2) / 100 : e2 === `top` ? 0 : e2 === `bottom` ? 1 : 0.5;
}
function hh(e2, t2, n2, r2) {
  if (e2 = tv.get(e2, `#09F`), !Ib.isImageObject(e2) || !e2.pixelWidth || !e2.pixelHeight) return;
  let i2 = e2.pixelWidth, a2 = e2.pixelHeight, o2, { fit: s2 } = e2, c2 = 1, l2 = 1, u2 = 0, d2 = 0;
  if (s2 === `fill` || s2 === `fit` || s2 === `tile` || !s2) {
    let n3 = 1, f2 = 1, p2 = i2 / a2, m2 = t2.height * p2, h2 = t2.width / p2, g2 = m2 / t2.width, _2 = h2 / t2.height;
    if (s2 === `tile`) {
      e2.backgroundSize ??= 1, c2 = Math.round(e2.backgroundSize * (i2 / 2)), l2 = Math.round(e2.backgroundSize * (a2 / 2));
      let n4 = t2.x ?? 0, s3 = t2.y ?? 0, f3 = 0, p3 = 0;
      r2 && (f3 = n4, p3 = s3), u2 = (t2.width - c2) * ph(e2.positionX) + f3, d2 = (t2.height - l2) * mh(e2.positionY) + p3, o2 = `translate(${u2 + n4}, ${d2 + s3})`;
    } else (s2 === `fill` || !s2 ? _2 > g2 : _2 < g2) ? (f2 = _2, d2 = (1 - _2) * mh(e2.positionY)) : (n3 = g2, u2 = (1 - g2) * ph(e2.positionX)), o2 = `translate(${u2}, ${d2}) scale(${n3}, ${f2})`;
  }
  return { id: `id${n2}g-fillImage`, path: e2.src ?? ``, transform: o2, width: c2, height: l2, offsetX: u2, offsetY: d2 };
}
function gh(e2) {
  return e2.startsWith(`data:${MD}`);
}
function _h(e2, t2) {
  if (/^\w+:/u.test(e2) && !gh(e2)) return e2;
  t2 = typeof t2 == `number` ? t2 <= 512 ? 512 : t2 <= 1024 ? 1024 : t2 <= 2048 ? 2048 : 4096 : void 0;
  let n2 = q.current() === q.export;
  return kb.assetResolver(e2, { pixelSize: t2, isExport: n2 }) ?? ``;
}
function vh(e2, t2) {
  return d(() => RD.subscribeToTemplate(e2), [e2]), RD.template(e2, t2);
}
function yh(e2) {
  try {
    let t2 = Lm(e2).getElementsByTagName(`svg`)[0];
    if (!t2) throw Error(`no svg element found`);
    return t2;
  } catch {
    return;
  }
}
function bh(e2, t2) {
  Sh(e2, xh(t2));
}
function xh(e2) {
  return e2.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Sh(e2, t2) {
  Ch(e2, t2), Array.from(e2.children).forEach((e3) => {
    Sh(e3, t2);
  });
}
function Ch(e2, t2) {
  e2.getAttributeNames().forEach((n2) => {
    let r2 = e2.getAttribute(n2);
    if (!r2) return;
    if (n2 === `id` && e2.setAttribute(n2, `${t2}_${r2}`), n2 === `href` || n2 === `xlink:href`) {
      let [i3, a2] = r2.split(`#`);
      if (i3) return;
      e2.setAttribute(n2, `#${t2}_${a2}`);
      return;
    }
    let i2 = `url(#`;
    if (r2.includes(i2)) {
      let a2 = r2.replace(i2, `${i2}${t2}_`);
      e2.setAttribute(n2, a2);
    }
  });
}
function wh(e2) {
  if (!e2) return;
  let t2 = /(-?[\d.]+)([a-z%]*)/u.exec(e2);
  if (!(t2?.[1] === void 0 || t2?.[2] === void 0) && !t2[2]?.startsWith(`%`)) return Math.round(parseFloat(t2[1]) * (zD[t2[2]] || 1));
}
function Th(e2) {
  let t2 = wh(e2.getAttribute(`width`)), n2 = wh(e2.getAttribute(`height`));
  if (!(typeof t2 != `number` || typeof n2 != `number`) && !(t2 <= 0 || n2 <= 0)) return { width: t2, height: n2 };
}
function Eh(e2) {
  return e2.indexOf(`image`) >= 0;
}
function Dh(e2) {
  return e2.indexOf(`var(--`) >= 0;
}
function Oh(e2) {
  return !!(e2.borderRadius || e2.borderBottomLeftRadius || e2.borderBottomRightRadius || e2.borderTopLeftRadius || e2.borderTopRightRadius);
}
function kh(e2, t2) {
  let n2 = e2.current;
  if (!n2) return;
  let r2 = t2.providedWindow ?? G, i2 = n2.firstElementChild;
  if (!i2 || !(i2 instanceof r2.SVGSVGElement)) return;
  if (!i2.getAttribute(`viewBox`)) {
    let e3 = RD.getViewBox(t2.svg);
    e3 && i2.setAttribute(`viewBox`, e3);
  }
  let { withExternalLayout: a2, parentSize: o2 } = t2;
  if (!a2 && pa(t2) && o2 !== 1 && o2 !== 2) return;
  let { intrinsicWidth: s2, intrinsicHeight: c2, _constraints: l2 } = t2;
  i2.viewBox?.baseVal?.width === 0 && i2.viewBox?.baseVal?.height === 0 && H(s2) && H(c2) && i2.setAttribute(`viewBox`, `0 0 ${s2} ${c2}`), l2 && l2.aspectRatio ? i2.setAttribute(`preserveAspectRatio`, ``) : i2.setAttribute(`preserveAspectRatio`, `none`), i2.setAttribute(`width`, `100%`), i2.setAttribute(`height`, `100%`);
}
function Ah(e2) {
  return e2 > WD ? `lazy` : void 0;
}
function jh(e2, t2, n2) {
  let r2 = Ph(t2);
  !n2?.supportsExplicitInterCodegen && !r2.some((e3) => e3.explicitInter === false) && r2.push({ explicitInter: false, fonts: [] }), Object.assign(e2, { fonts: r2 });
}
function Mh(e2) {
  return e2 ? e2.fonts ?? Ur() : Ur();
}
function Nh(e2) {
  return e2.length === 0 ? [{ explicitInter: false, fonts: [] }] : Ph(e2);
}
function Ph(e2) {
  let t2 = { explicitInter: false, fonts: [] }, n2 = [];
  for (let r2 of e2) Fh(r2) ? n2.push({ explicitInter: r2.explicitInter, fonts: r2.fonts.map(Ih) }) : t2.fonts.push(Ih(r2));
  return t2.fonts.length > 0 && n2.push(t2), n2;
}
function Fh(e2) {
  return GD in e2;
}
function Ih(e2) {
  let t2 = Lh(e2) || Rh(e2) ? e2 : zh(e2);
  return Rh(t2) ? t2 : Bh(t2);
}
function Lh(e2) {
  return `source` in e2;
}
function Rh(e2) {
  return `cssFamilyName` in e2;
}
function zh(e2) {
  let t2;
  return t2 = e2.url.startsWith(window.motiRoot + "vendor/fonts.gstatic.com/s/") ? `google` : e2.url.startsWith(window.motiRoot + "media/third-party-assets/fontshare/") ? `fontshare` : `custom`, { ...e2, source: t2 };
}
function Bh(e2) {
  let { family: t2, ...n2 } = e2, r2 = e2.variationAxes && e2.source !== `custom` ? `${t2} ${xE}` : t2;
  return { ...n2, uiFamilyName: t2, cssFamilyName: r2 };
}
function Vh(e2, t2) {
  let n2 = `${e2}-start`;
  performance.mark(n2), t2();
  let r2 = `${e2}-end`;
  performance.mark(r2), performance.measure(e2, n2, r2);
}
var Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, G, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_, M_, N_, P_, F_, I_, L_, R_, z_, B_, V_, H_, U_, W_, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, K, hv, gv, _v, vv, yv, bv, xv, Sv, Cv, wv, q, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, J, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, Y, py, my, hy, gy, X, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx, wx, Tx, Ex, Dx, Ox, kx, Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC, PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC, YC, XC, ZC, QC, $C, ew, tw, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, pw, mw, hw, gw, _w, vw, yw, bw, xw, Sw, Cw, ww, Tw, Ew, Dw, Ow, kw, Aw, jw, Mw, Nw, Pw, Fw, Iw, Z, Lw, Rw, zw, Bw, Vw, Hw, Uw, Ww, Gw, Kw, qw, Q, Jw, Yw, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT, cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT, ST, CT, wT, TT, ET, DT, OT, kT, AT, jT, MT, NT, PT, FT, IT, LT, RT, zT, BT, VT, HT, UT, WT, GT, KT, qT, JT, YT, XT, ZT, QT, $T, eE, tE, nE, rE, iE, aE, oE, sE, cE, lE, uE, dE, fE, pE, mE, hE, gE, _E, vE, yE, bE, xE, SE, CE, wE, TE, EE, DE, OE, kE, AE, jE, ME, NE, PE, FE, IE, LE, RE, zE, BE, VE, HE, UE, WE, GE, KE, qE, JE, YE, XE, ZE, QE, $E, $, eD, tD, nD, rD, iD, aD, oD, sD, cD, lD, uD, dD, fD, pD, mD, hD, gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD, MD, ND, PD, FD, ID, LD, RD, zD, BD, VD, HD, UD, WD, GD, KD = e((() => {
  f(
    //! Credit to Astro | MIT License
    /**
    * @license Emotion v11.0.0
    * MIT License
    *
    * Copyright (c) Emotion team and other contributors
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to deal
    * in the Software without restriction, including without limitation the rights
    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    * copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in all
    * copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    * SOFTWARE.
    */
    /*! Bundled license information:
    
    react-is/cjs/react-is.production.min.js:
    (** @license React v16.13.1
    * react-is.production.min.js
    *
    * Copyright (c) Facebook, Inc. and its affiliates.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *)
    */
  ), Ye(), Pe(), m(), D(), g(), Hh = He({ "../../../node_modules/hsluv/dist/hsluv.cjs"(e2) {
    Object.defineProperty(e2, `__esModule`, { value: true }), e2.Hsluv = void 0;
    var t2 = class e3 {
      constructor() {
        this.hex = `#000000`, this.rgb_r = 0, this.rgb_g = 0, this.rgb_b = 0, this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0, this.luv_l = 0, this.luv_u = 0, this.luv_v = 0, this.lch_l = 0, this.lch_c = 0, this.lch_h = 0, this.hsluv_h = 0, this.hsluv_s = 0, this.hsluv_l = 0, this.hpluv_h = 0, this.hpluv_p = 0, this.hpluv_l = 0, this.r0s = 0, this.r0i = 0, this.r1s = 0, this.r1i = 0, this.g0s = 0, this.g0i = 0, this.g1s = 0, this.g1i = 0, this.b0s = 0, this.b0i = 0, this.b1s = 0, this.b1i = 0;
      }
      static fromLinear(e4) {
        return e4 <= 31308e-7 ? 12.92 * e4 : 1.055 * e4 ** (1 / 2.4) - 0.055;
      }
      static toLinear(e4) {
        return e4 > 0.04045 ? ((e4 + 0.055) / 1.055) ** 2.4 : e4 / 12.92;
      }
      static yToL(t3) {
        return t3 <= e3.epsilon ? t3 / e3.refY * e3.kappa : 116 * (t3 / e3.refY) ** (1 / 3) - 16;
      }
      static lToY(t3) {
        return t3 <= 8 ? e3.refY * t3 / e3.kappa : e3.refY * ((t3 + 16) / 116) ** 3;
      }
      static rgbChannelToHex(t3) {
        let n2 = Math.round(t3 * 255), r2 = n2 % 16, i2 = (n2 - r2) / 16 | 0;
        return e3.hexChars.charAt(i2) + e3.hexChars.charAt(r2);
      }
      static hexToRgbChannel(t3, n2) {
        let r2 = e3.hexChars.indexOf(t3.charAt(n2)), i2 = e3.hexChars.indexOf(t3.charAt(n2 + 1));
        return (r2 * 16 + i2) / 255;
      }
      static distanceFromOriginAngle(e4, t3, n2) {
        let r2 = t3 / (Math.sin(n2) - e4 * Math.cos(n2));
        return r2 < 0 ? 1 / 0 : r2;
      }
      static distanceFromOrigin(e4, t3) {
        return Math.abs(t3) / Math.sqrt(e4 ** 2 + 1);
      }
      static min6(e4, t3, n2, r2, i2, a2) {
        return Math.min(e4, Math.min(t3, Math.min(n2, Math.min(r2, Math.min(i2, a2)))));
      }
      rgbToHex() {
        this.hex = `#`, this.hex += e3.rgbChannelToHex(this.rgb_r), this.hex += e3.rgbChannelToHex(this.rgb_g), this.hex += e3.rgbChannelToHex(this.rgb_b);
      }
      hexToRgb() {
        this.hex = this.hex.toLowerCase(), this.rgb_r = e3.hexToRgbChannel(this.hex, 1), this.rgb_g = e3.hexToRgbChannel(this.hex, 3), this.rgb_b = e3.hexToRgbChannel(this.hex, 5);
      }
      xyzToRgb() {
        this.rgb_r = e3.fromLinear(e3.m_r0 * this.xyz_x + e3.m_r1 * this.xyz_y + e3.m_r2 * this.xyz_z), this.rgb_g = e3.fromLinear(e3.m_g0 * this.xyz_x + e3.m_g1 * this.xyz_y + e3.m_g2 * this.xyz_z), this.rgb_b = e3.fromLinear(e3.m_b0 * this.xyz_x + e3.m_b1 * this.xyz_y + e3.m_b2 * this.xyz_z);
      }
      rgbToXyz() {
        let t3 = e3.toLinear(this.rgb_r), n2 = e3.toLinear(this.rgb_g), r2 = e3.toLinear(this.rgb_b);
        this.xyz_x = 0.41239079926595 * t3 + 0.35758433938387 * n2 + 0.18048078840183 * r2, this.xyz_y = 0.21263900587151 * t3 + 0.71516867876775 * n2 + 0.072192315360733 * r2, this.xyz_z = 0.019330818715591 * t3 + 0.11919477979462 * n2 + 0.95053215224966 * r2;
      }
      xyzToLuv() {
        let t3 = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z, n2 = 4 * this.xyz_x, r2 = 9 * this.xyz_y;
        t3 === 0 ? (n2 = NaN, r2 = NaN) : (n2 /= t3, r2 /= t3), this.luv_l = e3.yToL(this.xyz_y), this.luv_l === 0 ? (this.luv_u = 0, this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (n2 - e3.refU), this.luv_v = 13 * this.luv_l * (r2 - e3.refV));
      }
      luvToXyz() {
        if (this.luv_l === 0) {
          this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0;
          return;
        }
        let t3 = this.luv_u / (13 * this.luv_l) + e3.refU, n2 = this.luv_v / (13 * this.luv_l) + e3.refV;
        this.xyz_y = e3.lToY(this.luv_l), this.xyz_x = 0 - 9 * this.xyz_y * t3 / ((t3 - 4) * n2 - t3 * n2), this.xyz_z = (9 * this.xyz_y - 15 * n2 * this.xyz_y - n2 * this.xyz_x) / (3 * n2);
      }
      luvToLch() {
        this.lch_l = this.luv_l, this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v), this.lch_c < 1e-8 ? this.lch_h = 0 : (this.lch_h = Math.atan2(this.luv_v, this.luv_u) * 180 / Math.PI, this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
      }
      lchToLuv() {
        let e4 = this.lch_h / 180 * Math.PI;
        this.luv_l = this.lch_l, this.luv_u = Math.cos(e4) * this.lch_c, this.luv_v = Math.sin(e4) * this.lch_c;
      }
      calculateBoundingLines(t3) {
        let n2 = (t3 + 16) ** 3 / 1560896, r2 = n2 > e3.epsilon ? n2 : t3 / e3.kappa, i2 = r2 * (284517 * e3.m_r0 - 94839 * e3.m_r2), a2 = r2 * (838422 * e3.m_r2 + 769860 * e3.m_r1 + 731718 * e3.m_r0), o2 = r2 * (632260 * e3.m_r2 - 126452 * e3.m_r1), s2 = r2 * (284517 * e3.m_g0 - 94839 * e3.m_g2), c2 = r2 * (838422 * e3.m_g2 + 769860 * e3.m_g1 + 731718 * e3.m_g0), l2 = r2 * (632260 * e3.m_g2 - 126452 * e3.m_g1), u2 = r2 * (284517 * e3.m_b0 - 94839 * e3.m_b2), d2 = r2 * (838422 * e3.m_b2 + 769860 * e3.m_b1 + 731718 * e3.m_b0), f2 = r2 * (632260 * e3.m_b2 - 126452 * e3.m_b1);
        this.r0s = i2 / o2, this.r0i = a2 * t3 / o2, this.r1s = i2 / (o2 + 126452), this.r1i = (a2 - 769860) * t3 / (o2 + 126452), this.g0s = s2 / l2, this.g0i = c2 * t3 / l2, this.g1s = s2 / (l2 + 126452), this.g1i = (c2 - 769860) * t3 / (l2 + 126452), this.b0s = u2 / f2, this.b0i = d2 * t3 / f2, this.b1s = u2 / (f2 + 126452), this.b1i = (d2 - 769860) * t3 / (f2 + 126452);
      }
      calcMaxChromaHpluv() {
        let t3 = e3.distanceFromOrigin(this.r0s, this.r0i), n2 = e3.distanceFromOrigin(this.r1s, this.r1i), r2 = e3.distanceFromOrigin(this.g0s, this.g0i), i2 = e3.distanceFromOrigin(this.g1s, this.g1i), a2 = e3.distanceFromOrigin(this.b0s, this.b0i), o2 = e3.distanceFromOrigin(this.b1s, this.b1i);
        return e3.min6(t3, n2, r2, i2, a2, o2);
      }
      calcMaxChromaHsluv(t3) {
        let n2 = t3 / 360 * Math.PI * 2, r2 = e3.distanceFromOriginAngle(this.r0s, this.r0i, n2), i2 = e3.distanceFromOriginAngle(this.r1s, this.r1i, n2), a2 = e3.distanceFromOriginAngle(this.g0s, this.g0i, n2), o2 = e3.distanceFromOriginAngle(this.g1s, this.g1i, n2), s2 = e3.distanceFromOriginAngle(this.b0s, this.b0i, n2), c2 = e3.distanceFromOriginAngle(this.b1s, this.b1i, n2);
        return e3.min6(r2, i2, a2, o2, s2, c2);
      }
      hsluvToLch() {
        this.hsluv_l > 99.9999999 ? (this.lch_l = 100, this.lch_c = 0) : this.hsluv_l < 1e-8 ? (this.lch_l = 0, this.lch_c = 0) : (this.lch_l = this.hsluv_l, this.calculateBoundingLines(this.hsluv_l), this.lch_c = this.calcMaxChromaHsluv(this.hsluv_h) / 100 * this.hsluv_s), this.lch_h = this.hsluv_h;
      }
      lchToHsluv() {
        if (this.lch_l > 99.9999999) this.hsluv_s = 0, this.hsluv_l = 100;
        else if (this.lch_l < 1e-8) this.hsluv_s = 0, this.hsluv_l = 0;
        else {
          this.calculateBoundingLines(this.lch_l);
          let e4 = this.calcMaxChromaHsluv(this.lch_h);
          this.hsluv_s = this.lch_c / e4 * 100, this.hsluv_l = this.lch_l;
        }
        this.hsluv_h = this.lch_h;
      }
      hpluvToLch() {
        this.hpluv_l > 99.9999999 ? (this.lch_l = 100, this.lch_c = 0) : this.hpluv_l < 1e-8 ? (this.lch_l = 0, this.lch_c = 0) : (this.lch_l = this.hpluv_l, this.calculateBoundingLines(this.hpluv_l), this.lch_c = this.calcMaxChromaHpluv() / 100 * this.hpluv_p), this.lch_h = this.hpluv_h;
      }
      lchToHpluv() {
        if (this.lch_l > 99.9999999) this.hpluv_p = 0, this.hpluv_l = 100;
        else if (this.lch_l < 1e-8) this.hpluv_p = 0, this.hpluv_l = 0;
        else {
          this.calculateBoundingLines(this.lch_l);
          let e4 = this.calcMaxChromaHpluv();
          this.hpluv_p = this.lch_c / e4 * 100, this.hpluv_l = this.lch_l;
        }
        this.hpluv_h = this.lch_h;
      }
      hsluvToRgb() {
        this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
      }
      hpluvToRgb() {
        this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
      }
      hsluvToHex() {
        this.hsluvToRgb(), this.rgbToHex();
      }
      hpluvToHex() {
        this.hpluvToRgb(), this.rgbToHex();
      }
      rgbToHsluv() {
        this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv();
      }
      rgbToHpluv() {
        this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv();
      }
      hexToHsluv() {
        this.hexToRgb(), this.rgbToHsluv();
      }
      hexToHpluv() {
        this.hexToRgb(), this.rgbToHpluv();
      }
    };
    e2.Hsluv = t2, t2.hexChars = `0123456789abcdef`, t2.refY = 1, t2.refU = 0.19783000664283, t2.refV = 0.46831999493879, t2.kappa = 903.2962962, t2.epsilon = 0.0088564516, t2.m_r0 = 3.240969941904521, t2.m_r1 = -1.537383177570093, t2.m_r2 = -0.498610760293, t2.m_g0 = -0.96924363628087, t2.m_g1 = 1.87596750150772, t2.m_g2 = 0.041555057407175, t2.m_b0 = 0.055630079696993, t2.m_b1 = -0.20397695888897, t2.m_b2 = 1.056971514242878;
  } }), Uh = He({ "../../../node_modules/eventemitter3/index.js"(e2, t2) {
    var n2 = Object.prototype.hasOwnProperty, r2 = `~`;
    function i2() {
    }
    Object.create && (i2.prototype = /* @__PURE__ */ Object.create(null), new i2().__proto__ || (r2 = false));
    function a2(e3, t3, n3) {
      this.fn = e3, this.context = t3, this.once = n3 || false;
    }
    function o2(e3, t3, n3, i3, o3) {
      if (typeof n3 != `function`) throw TypeError(`The listener must be a function`);
      var s3 = new a2(n3, i3 || e3, o3), c3 = r2 ? r2 + t3 : t3;
      return e3._events[c3] ? e3._events[c3].fn ? e3._events[c3] = [e3._events[c3], s3] : e3._events[c3].push(s3) : (e3._events[c3] = s3, e3._eventsCount++), e3;
    }
    function s2(e3, t3) {
      --e3._eventsCount === 0 ? e3._events = new i2() : delete e3._events[t3];
    }
    function c2() {
      this._events = new i2(), this._eventsCount = 0;
    }
    c2.prototype.eventNames = function() {
      var e3 = [], t3, i3;
      if (this._eventsCount === 0) return e3;
      for (i3 in t3 = this._events) n2.call(t3, i3) && e3.push(r2 ? i3.slice(1) : i3);
      return Object.getOwnPropertySymbols ? e3.concat(Object.getOwnPropertySymbols(t3)) : e3;
    }, c2.prototype.listeners = function(e3) {
      var t3 = r2 ? r2 + e3 : e3, n3 = this._events[t3];
      if (!n3) return [];
      if (n3.fn) return [n3.fn];
      for (var i3 = 0, a3 = n3.length, o3 = Array(a3); i3 < a3; i3++) o3[i3] = n3[i3].fn;
      return o3;
    }, c2.prototype.listenerCount = function(e3) {
      var t3 = r2 ? r2 + e3 : e3, n3 = this._events[t3];
      return n3 ? n3.fn ? 1 : n3.length : 0;
    }, c2.prototype.emit = function(e3, t3, n3, i3, a3, o3) {
      var s3 = r2 ? r2 + e3 : e3;
      if (!this._events[s3]) return false;
      var c3 = this._events[s3], l2 = arguments.length, u2, d2;
      if (c3.fn) {
        switch (c3.once && this.removeListener(e3, c3.fn, void 0, true), l2) {
          case 1:
            return c3.fn.call(c3.context), true;
          case 2:
            return c3.fn.call(c3.context, t3), true;
          case 3:
            return c3.fn.call(c3.context, t3, n3), true;
          case 4:
            return c3.fn.call(c3.context, t3, n3, i3), true;
          case 5:
            return c3.fn.call(c3.context, t3, n3, i3, a3), true;
          case 6:
            return c3.fn.call(c3.context, t3, n3, i3, a3, o3), true;
        }
        for (d2 = 1, u2 = Array(l2 - 1); d2 < l2; d2++) u2[d2 - 1] = arguments[d2];
        c3.fn.apply(c3.context, u2);
      } else {
        var f2 = c3.length, p2;
        for (d2 = 0; d2 < f2; d2++) switch (c3[d2].once && this.removeListener(e3, c3[d2].fn, void 0, true), l2) {
          case 1:
            c3[d2].fn.call(c3[d2].context);
            break;
          case 2:
            c3[d2].fn.call(c3[d2].context, t3);
            break;
          case 3:
            c3[d2].fn.call(c3[d2].context, t3, n3);
            break;
          case 4:
            c3[d2].fn.call(c3[d2].context, t3, n3, i3);
            break;
          default:
            if (!u2) for (p2 = 1, u2 = Array(l2 - 1); p2 < l2; p2++) u2[p2 - 1] = arguments[p2];
            c3[d2].fn.apply(c3[d2].context, u2);
        }
      }
      return true;
    }, c2.prototype.on = function(e3, t3, n3) {
      return o2(this, e3, t3, n3, false);
    }, c2.prototype.once = function(e3, t3, n3) {
      return o2(this, e3, t3, n3, true);
    }, c2.prototype.removeListener = function(e3, t3, n3, i3) {
      var a3 = r2 ? r2 + e3 : e3;
      if (!this._events[a3]) return this;
      if (!t3) return s2(this, a3), this;
      var o3 = this._events[a3];
      if (o3.fn) o3.fn === t3 && (!i3 || o3.once) && (!n3 || o3.context === n3) && s2(this, a3);
      else {
        for (var c3 = 0, l2 = [], u2 = o3.length; c3 < u2; c3++) (o3[c3].fn !== t3 || i3 && !o3[c3].once || n3 && o3[c3].context !== n3) && l2.push(o3[c3]);
        l2.length ? this._events[a3] = l2.length === 1 ? l2[0] : l2 : s2(this, a3);
      }
      return this;
    }, c2.prototype.removeAllListeners = function(e3) {
      var t3;
      return e3 ? (t3 = r2 ? r2 + e3 : e3, this._events[t3] && s2(this, t3)) : (this._events = new i2(), this._eventsCount = 0), this;
    }, c2.prototype.off = c2.prototype.removeListener, c2.prototype.addListener = c2.prototype.on, c2.prefixed = r2, c2.EventEmitter = c2, t2 !== void 0 && (t2.exports = c2);
  } }), Wh = He({ "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(e2) {
    var t2 = typeof Symbol == `function` && Symbol.for, n2 = t2 ? Symbol.for(`react.element`) : 60103, r2 = t2 ? Symbol.for(`react.portal`) : 60106, i2 = t2 ? Symbol.for(`react.fragment`) : 60107, a2 = t2 ? Symbol.for(`react.strict_mode`) : 60108, o2 = t2 ? Symbol.for(`react.profiler`) : 60114, s2 = t2 ? Symbol.for(`react.provider`) : 60109, c2 = t2 ? Symbol.for(`react.context`) : 60110, l2 = t2 ? Symbol.for(`react.async_mode`) : 60111, u2 = t2 ? Symbol.for(`react.concurrent_mode`) : 60111, d2 = t2 ? Symbol.for(`react.forward_ref`) : 60112, f2 = t2 ? Symbol.for(`react.suspense`) : 60113, p2 = t2 ? Symbol.for(`react.suspense_list`) : 60120, m2 = t2 ? Symbol.for(`react.memo`) : 60115, h2 = t2 ? Symbol.for(`react.lazy`) : 60116, g2 = t2 ? Symbol.for(`react.block`) : 60121, _2 = t2 ? Symbol.for(`react.fundamental`) : 60117, v2 = t2 ? Symbol.for(`react.responder`) : 60118, y2 = t2 ? Symbol.for(`react.scope`) : 60119;
    function b2(e3) {
      if (typeof e3 == `object` && e3) {
        var t3 = e3.$$typeof;
        switch (t3) {
          case n2:
            switch (e3 = e3.type, e3) {
              case l2:
              case u2:
              case i2:
              case o2:
              case a2:
              case f2:
                return e3;
              default:
                switch (e3 &&= e3.$$typeof, e3) {
                  case c2:
                  case d2:
                  case h2:
                  case m2:
                  case s2:
                    return e3;
                  default:
                    return t3;
                }
            }
          case r2:
            return t3;
        }
      }
    }
    function x2(e3) {
      return b2(e3) === u2;
    }
    e2.AsyncMode = l2, e2.ConcurrentMode = u2, e2.ContextConsumer = c2, e2.ContextProvider = s2, e2.Element = n2, e2.ForwardRef = d2, e2.Fragment = i2, e2.Lazy = h2, e2.Memo = m2, e2.Portal = r2, e2.Profiler = o2, e2.StrictMode = a2, e2.Suspense = f2, e2.isAsyncMode = function(e3) {
      return x2(e3) || b2(e3) === l2;
    }, e2.isConcurrentMode = x2, e2.isContextConsumer = function(e3) {
      return b2(e3) === c2;
    }, e2.isContextProvider = function(e3) {
      return b2(e3) === s2;
    }, e2.isElement = function(e3) {
      return typeof e3 == `object` && !!e3 && e3.$$typeof === n2;
    }, e2.isForwardRef = function(e3) {
      return b2(e3) === d2;
    }, e2.isFragment = function(e3) {
      return b2(e3) === i2;
    }, e2.isLazy = function(e3) {
      return b2(e3) === h2;
    }, e2.isMemo = function(e3) {
      return b2(e3) === m2;
    }, e2.isPortal = function(e3) {
      return b2(e3) === r2;
    }, e2.isProfiler = function(e3) {
      return b2(e3) === o2;
    }, e2.isStrictMode = function(e3) {
      return b2(e3) === a2;
    }, e2.isSuspense = function(e3) {
      return b2(e3) === f2;
    }, e2.isValidElementType = function(e3) {
      return typeof e3 == `string` || typeof e3 == `function` || e3 === i2 || e3 === u2 || e3 === o2 || e3 === a2 || e3 === f2 || e3 === p2 || typeof e3 == `object` && !!e3 && (e3.$$typeof === h2 || e3.$$typeof === m2 || e3.$$typeof === s2 || e3.$$typeof === c2 || e3.$$typeof === d2 || e3.$$typeof === _2 || e3.$$typeof === v2 || e3.$$typeof === y2 || e3.$$typeof === g2);
    }, e2.typeOf = b2;
  } }), Gh = He({ "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e2, t2) {
    t2.exports = Wh();
  } }), Kh = He({ "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e2, t2) {
    var n2 = Gh(), r2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, i2 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, a2 = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, o2 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, s2 = {};
    s2[n2.ForwardRef] = a2, s2[n2.Memo] = o2;
    function c2(e3) {
      return n2.isMemo(e3) ? o2 : s2[e3.$$typeof] || r2;
    }
    var l2 = Object.defineProperty, u2 = Object.getOwnPropertyNames, d2 = Object.getOwnPropertySymbols, f2 = Object.getOwnPropertyDescriptor, p2 = Object.getPrototypeOf, m2 = Object.prototype;
    function h2(e3, t3, n3) {
      if (typeof t3 != `string`) {
        if (m2) {
          var r3 = p2(t3);
          r3 && r3 !== m2 && h2(e3, r3, n3);
        }
        var a3 = u2(t3);
        d2 && (a3 = a3.concat(d2(t3)));
        for (var o3 = c2(e3), s3 = c2(t3), g2 = 0; g2 < a3.length; ++g2) {
          var _2 = a3[g2];
          if (!i2[_2] && !(n3 && n3[_2]) && !(s3 && s3[_2]) && !(o3 && o3[_2])) {
            var v2 = f2(t3, _2);
            try {
              l2(e3, _2, v2);
            } catch {
            }
          }
        }
      }
      return e3;
    }
    t2.exports = h2;
  } }), qh = He({ "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e2, t2) {
    (function() {
      function e3(e4, t3) {
        document.addEventListener ? e4.addEventListener(`scroll`, t3, false) : e4.attachEvent(`scroll`, t3);
      }
      function r2(e4) {
        document.body ? e4() : document.addEventListener ? document.addEventListener(`DOMContentLoaded`, function t3() {
          document.removeEventListener(`DOMContentLoaded`, t3), e4();
        }) : document.attachEvent(`onreadystatechange`, function t3() {
          (document.readyState == `interactive` || document.readyState == `complete`) && (document.detachEvent(`onreadystatechange`, t3), e4());
        });
      }
      function i2(e4) {
        this.g = document.createElement(`div`), this.g.setAttribute(`aria-hidden`, `true`), this.g.appendChild(document.createTextNode(e4)), this.h = document.createElement(`span`), this.i = document.createElement(`span`), this.m = document.createElement(`span`), this.j = document.createElement(`span`), this.l = -1, this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`, this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`, this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`, this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`, this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i);
      }
      function a2(e4, t3) {
        e4.g.style.cssText = `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` + t3 + `;`;
      }
      function o2(e4) {
        var t3 = e4.g.offsetWidth, n2 = t3 + 100;
        return e4.j.style.width = n2 + `px`, e4.i.scrollLeft = n2, e4.h.scrollLeft = e4.h.scrollWidth + 100, e4.l === t3 ? false : (e4.l = t3, true);
      }
      function s2(t3, n2) {
        function r3() {
          var e4 = i3;
          o2(e4) && e4.g.parentNode !== null && n2(e4.l);
        }
        var i3 = t3;
        e3(t3.h, r3), e3(t3.i, r3), o2(t3);
      }
      function c2(e4, t3, r3) {
        t3 ||= {}, r3 ||= n, this.family = e4, this.style = t3.style || `normal`, this.weight = t3.weight || `normal`, this.stretch = t3.stretch || `normal`, this.context = r3;
      }
      var l2 = null, u2 = null, d2 = null, f2 = null;
      function p2(e4) {
        return u2 === null && (m2(e4) && /Apple/.test(n.navigator.vendor) ? (e4 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(n.navigator.userAgent), u2 = !!e4 && 603 > parseInt(e4[1], 10)) : u2 = false), u2;
      }
      function m2(e4) {
        return f2 === null && (f2 = !!e4.document.fonts), f2;
      }
      function h2(e4, t3) {
        var n2 = e4.style, r3 = e4.weight;
        if (d2 === null) {
          var i3 = document.createElement(`div`);
          try {
            i3.style.font = `condensed 100px sans-serif`;
          } catch {
          }
          d2 = i3.style.font !== ``;
        }
        return [n2, r3, d2 ? e4.stretch : ``, `100px`, t3].join(` `);
      }
      c2.prototype.load = function(e4, t3) {
        var o3 = this, c3 = e4 || `BESbswy`, u3 = 0, d3 = t3 || 3e3, f3 = (/* @__PURE__ */ new Date()).getTime();
        return new Promise(function(e5, t4) {
          if (m2(o3.context) && !p2(o3.context)) {
            var g2 = new Promise(function(e6, t5) {
              function n2() {
                (/* @__PURE__ */ new Date()).getTime() - f3 >= d3 ? t5(Error(`` + d3 + `ms timeout exceeded`)) : o3.context.document.fonts.load(h2(o3, `"` + o3.family + `"`), c3).then(function(t6) {
                  1 <= t6.length ? e6() : setTimeout(n2, 25);
                }, t5);
              }
              n2();
            }), _2 = new Promise(function(e6, t5) {
              u3 = setTimeout(function() {
                t5(Error(`` + d3 + `ms timeout exceeded`));
              }, d3);
            });
            Promise.race([_2, g2]).then(function() {
              clearTimeout(u3), e5(o3);
            }, t4);
          } else r2(function() {
            function r3() {
              var t5;
              (t5 = v2 != -1 && y2 != -1 || v2 != -1 && b2 != -1 || y2 != -1 && b2 != -1) && ((t5 = v2 != y2 && v2 != b2 && y2 != b2) || (l2 === null && (t5 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(n.navigator.userAgent), l2 = !!t5 && (536 > parseInt(t5[1], 10) || parseInt(t5[1], 10) === 536 && 11 >= parseInt(t5[2], 10))), t5 = l2 && (v2 == x2 && y2 == x2 && b2 == x2 || v2 == S2 && y2 == S2 && b2 == S2 || v2 == C2 && y2 == C2 && b2 == C2)), t5 = !t5), t5 && (w2.parentNode !== null && w2.parentNode.removeChild(w2), clearTimeout(u3), e5(o3));
            }
            function p3() {
              if ((/* @__PURE__ */ new Date()).getTime() - f3 >= d3) w2.parentNode !== null && w2.parentNode.removeChild(w2), t4(Error(`` + d3 + `ms timeout exceeded`));
              else {
                var e6 = o3.context.document.hidden;
                (true === e6 || e6 === void 0) && (v2 = m3.g.offsetWidth, y2 = g3.g.offsetWidth, b2 = _3.g.offsetWidth, r3()), u3 = setTimeout(p3, 50);
              }
            }
            var m3 = new i2(c3), g3 = new i2(c3), _3 = new i2(c3), v2 = -1, y2 = -1, b2 = -1, x2 = -1, S2 = -1, C2 = -1, w2 = document.createElement(`div`);
            w2.dir = `ltr`, a2(m3, h2(o3, `sans-serif`)), a2(g3, h2(o3, `serif`)), a2(_3, h2(o3, `monospace`)), w2.appendChild(m3.g), w2.appendChild(g3.g), w2.appendChild(_3.g), o3.context.document.body.appendChild(w2), x2 = m3.g.offsetWidth, S2 = g3.g.offsetWidth, C2 = _3.g.offsetWidth, p3(), s2(m3, function(e6) {
              v2 = e6, r3();
            }), a2(m3, h2(o3, `"` + o3.family + `",sans-serif`)), s2(g3, function(e6) {
              y2 = e6, r3();
            }), a2(g3, h2(o3, `"` + o3.family + `",serif`)), s2(_3, function(e6) {
              b2 = e6, r3();
            }), a2(_3, h2(o3, `"` + o3.family + `",monospace`));
          });
        });
      }, typeof t2 == `object` ? t2.exports = c2 : (n.FontFaceObserver = c2, n.FontFaceObserver.prototype.load = c2.prototype.load);
    })();
  } }), Jh = () => {
  }, Yh = n !== void 0, Xh = (() => Yh && (ne.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(ne.userAgent)))(), Zh = Yh && typeof n.requestIdleCallback == `function`, Qh = (() => Zh ? n.requestIdleCallback : setTimeout)(), $h = () => () => {
  }, eg = () => true, tg = () => false, ng = /* @__PURE__ */ new Map(), rg = Yh ? void 0 : /* @__PURE__ */ new Set(), ig = `preload`, ag = Object.keys, og = `equals`, sg = (() => p.createContext({}))(), cg = (() => p.createContext({}))(), lg = [], ug = p.createContext(void 0), ug.displayName = `LibraryFeaturesContext`, dg = (() => ug.Provider)(), fg = () => p.useContext(ug) ?? {}, pg = `default`, mg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }, hg = class e2 {
    constructor(e3, t2) {
      this.resolver = e3, this.cacheHash = t2, I(this, `promiseState`, mg.Pending), I(this, `preloadPromise`), I(this, `value`), I(this, `reason`), I(this, `read`, () => {
        if (this.promiseState === mg.Fulfilled) return this.value;
        throw this.promiseState === mg.Rejected ? this.reason : Error(`Need to call preload() before read()`);
      });
    }
    static is(t2) {
      return t2 instanceof e2;
    }
    get status() {
      return this.preload(), this.state;
    }
    get state() {
      return this.promiseState;
    }
    then(e3, t2) {
      return this.promiseState === mg.Fulfilled ? Promise.resolve(this.value).then(e3, t2) : this.promiseState === mg.Rejected ? Promise.reject(this.reason).then(e3, t2) : this.readAsync().then(e3, t2);
    }
    preload() {
      if (this.promiseState !== mg.Pending) return;
      if (this.preloadPromise) return this.preloadPromise;
      this.cacheHash !== void 0 && rg !== void 0 && rg.add(this.cacheHash);
      let e3 = (e4) => {
        this.promiseState = mg.Fulfilled, this.value = e4;
      }, t2 = (e4) => {
        this.promiseState = mg.Rejected, this.reason = e4;
      }, n2;
      try {
        n2 = this.cacheHash && ng.has(this.cacheHash) ? ng.get(this.cacheHash) : this.resolver();
      } catch (e4) {
        t2(e4);
        return;
      }
      if (!st(n2)) {
        e3(n2);
        return;
      }
      let r2 = n2.then(e3, t2);
      return this.preloadPromise = r2, r2;
    }
    async readAsync() {
      return this.readMaybeAsync();
    }
    readMaybeAsync() {
      let e3 = this.preload();
      return e3 ? e3.then(this.read) : this.read();
    }
    use() {
      let e3 = this.preload();
      if (e3) throw e3;
      return this.read();
    }
  }, gg = class extends Error {
    constructor(e2, t2, n2, r2) {
      super(e2), this.name = `DevalueError`, this.path = t2.join(``), this.value = n2, this.root = r2;
    }
  }, _g = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`), vg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/, yg = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, bg = -1, xg = -2, Sg = -3, Cg = -4, wg = -5, Tg = -6, Eg = -7, G = Yh ? n : { addEventListener: () => {
  }, removeEventListener: () => {
  }, dispatchEvent: () => false, ResizeObserver: void 0, onpointerdown: false, onpointermove: false, onpointerup: false, ontouchstart: false, ontouchmove: false, ontouchend: false, onmousedown: false, onmousemove: false, onmouseup: false, devicePixelRatio: 1, scrollX: 0, scrollY: 0, location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` }, document: { baseURI: ``, cookie: ``, referrer: null }, setTimeout: () => 0, clearTimeout: () => {
  }, setInterval: () => 0, clearInterval: () => {
  }, requestAnimationFrame: () => 0, cancelAnimationFrame: () => {
  }, requestIdleCallback: () => 0, getSelection: () => null, matchMedia: (e2) => ({ matches: false, media: e2, onchange: () => {
  }, addEventListener: () => {
  }, removeEventListener: () => {
  }, addListener: () => {
  }, removeListener: () => {
  }, dispatchEvent: () => false }), innerHeight: 0, innerWidth: 0, SVGSVGElement: {}, scheduler: void 0, open: function(e2, t2, n2) {
  }, __framer_events: [] }, Dg = 2, Og = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u, kg = { QueryCache: 0, CollectionUtilsCache: 1 }, jg = class {
    constructor() {
      I(this, `payload`, an()), I(this, `isEmpty`, true);
    }
    set(e2, t2, n2) {
      this.payload[e2].set(t2, n2), this.isEmpty = false;
    }
    has(e2, t2) {
      return this.payload[e2].has(t2);
    }
    get(e2, t2) {
      return this.payload[e2].get(t2);
    }
    toString() {
      if (!this.isEmpty) try {
        return en(this.payload);
      } catch (e2) {
        console.error(`Failed to serialize handover data.`, e2);
        return;
      }
    }
    clear() {
      for (let e2 of Object.values(this.payload)) e2.clear();
      this.isEmpty = true;
    }
  }, Mg = (() => Yh ? void 0 : new jg())(), Ng = (() => kg.CollectionUtilsCache)(), Pg = /* @__PURE__ */ new WeakMap(), Fg = s(void 0), Ig = class {
    constructor(e2, t2) {
      this.collectionId = t2, I(this, `module`), I(this, `cacheMap`, /* @__PURE__ */ new Map()), this.module = new hg(async () => {
        try {
          let t3 = await e2();
          return B(t3, `Couldn't find CollectionUtils`), t3;
        } catch (e3) {
          console.error(ut(`Failed to import collection module.`, e3));
          return;
        }
      });
    }
    callUtilsMethod(e2, t2, n2) {
      let r2 = un(n2), i2 = dn(e2, this.collectionId, r2, t2);
      if (this.cacheMap.has(i2)) {
        let e3 = this.cacheMap.get(i2)?.readMaybeAsync();
        if (Mg !== void 0) {
          if (st(e3)) return e3.then((e4) => (Mg.set(Ng, i2, e4), e4));
          Mg.set(Ng, i2, e3);
        }
        return e3;
      }
      if (cn(Ng, i2)) {
        let e3 = ln(Ng, i2);
        return this.cacheMap.set(i2, new hg(() => e3)), e3;
      }
      let a2 = this.module.readMaybeAsync(), o2 = st(a2), s2;
      try {
        s2 = o2 ? a2.then((r3) => r3?.[e2](t2, n2)) : a2?.[e2](t2, n2);
      } catch (e3) {
        console.error(ut(`Failed to call CollectionUtils method.`, e3)), s2 = void 0;
      }
      if (s2 === void 0) {
        Mg !== void 0 && Mg.set(Ng, i2, s2), this.cacheMap.set(i2, s2);
        return;
      }
      let c2 = new hg(() => s2.then((e3) => (Mg !== void 0 && Mg.set(Ng, i2, e3), e3)).catch((e3) => {
        console.error(ut(`Failed to call CollectionUtils method.`, e3));
      }));
      return this.cacheMap.set(i2, c2), c2.readMaybeAsync();
    }
    getSlugByRecordId(e2, t2) {
      return this.callUtilsMethod(`getSlugByRecordId`, e2, t2);
    }
    getRecordIdBySlug(e2, t2) {
      return this.callUtilsMethod(`getRecordIdBySlug`, e2, t2);
    }
  }, Lg = (() => G.scheduler && `yield` in G.scheduler)(), Rg = (() => G.scheduler && `postTask` in G.scheduler)(), zg = /* @__PURE__ */ new Set(), Bg = !Xh, Vg = 46, Hg = 47, Ug = (e2, t2) => e2.charCodeAt(t2), Wg = (e2, t2) => e2.lastIndexOf(t2), Gg = (e2, t2, n2) => e2.slice(t2, n2), Kg = false, qg = `/`, Jg = (e2) => e2 === Hg, Yg = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`]), Xg = RegExp(`:([a-z]\\w*)`, `gi`), Zg = `framer_variant`, Qg = p.createContext({ global: void 0, routes: {} }), $g = 10, e_ = 1e4, t_ = (e2) => `--view-transition-${e2}`, n_ = { circle: { makeKeyframe: (e2, t2) => {
    let { x: r2, y: i2 } = zn(e2);
    return t2 === `start` ? `clip-path: circle(0 at ${r2}px ${i2}px);` : `clip-path: circle(${Math.hypot(Math.max(r2, n.innerWidth - r2), Math.max(i2, n.innerHeight - i2))}px at ${r2}px ${i2}px);`;
  } }, conic: { makeKeyframe: (e2, t2, n2) => {
    let r2 = 0;
    return (n2 === `exit` && e2.angularDirection === `clockwise` && t2 === `start` || n2 === `exit` && e2.angularDirection === `counter-clockwise` && t2 === `end` || n2 === `enter` && e2.angularDirection === `counter-clockwise` && t2 === `start` || n2 === `enter` && e2.angularDirection === `clockwise` && t2 === `end`) && (r2 = e2.sweepAngle / 360 * 100), `${t_(`conic-offset`)}: ${r2}%;`;
  }, makeStyles: (e2, t2) => {
    let n2 = `var(${t_(`conic-offset`)})`, r2 = t2 === `exit` && e2.angularDirection === `clockwise` || t2 === `enter` && e2.angularDirection === `counter-clockwise`, i2 = r2 ? `transparent` : `black`, a2 = r2 ? `black` : `transparent`, o2 = `conic-gradient(from `;
    return o2 += `${e2.angle}deg at ${e2.x} ${e2.y}, `, o2 += `${i2} 0%, ${i2} ${n2}, `, o2 += `${a2} ${n2}, ${a2} 100%)`, `mask-image: ${o2}; -webkit-mask-image: ${o2};`;
  }, makePropertyRules: () => `
        @property ${t_(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    ` }, inset: { makeKeyframe: (e2, t2) => {
    let { x: r2, y: i2 } = zn(e2), a2 = n.innerHeight - i2, o2 = n.innerWidth - r2;
    return t2 === `start` ? `clip-path: inset(${i2}px ${o2}px ${a2}px ${r2}px round ${e2.round}px);` : `clip-path: inset(0 round 0);`;
  } }, blinds: { makeKeyframe: (e2, t2, n2) => {
    let [, r2] = Rn(e2.width), i2 = `0${r2}`;
    return (t2 === `start` && n2 === `exit` || t2 === `end` && n2 === `enter`) && (i2 = e2.width), `${t_(`blinds-width`)}: ${i2};`;
  }, makeStyles: (e2, t2) => {
    let n2 = `var(${t_(`blinds-width`)})`, r2 = t2 === `exit` ? `transparent` : `black`, i2 = t2 === `exit` ? `black` : `transparent`, a2 = `repeating-linear-gradient(`;
    return a2 += e2.angle + 90 + `deg, `, a2 += `${r2} 0px, ${r2} ${n2}, `, a2 += `${i2} ${n2}, ${i2} ${e2.width})`, `mask-image: ${a2}; -webkit-mask-image: ${a2};`;
  }, makePropertyRules: () => `
            @property ${t_(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        ` }, wipe: { makeKeyframe: (e2, t2, n2) => {
    let r2 = t2 === `start` && n2 === `exit` || t2 === `end` && n2 === `enter` ? 1 : 0;
    return `${t_(`wipe-offset`)}: ${r2};`;
  }, makeStyles: (e2, t2) => {
    let n2 = `var(${t_(`wipe-offset`)})`, r2 = t2 === `exit` ? `transparent` : `black`, i2 = t2 === `exit` ? `black` : `transparent`, a2 = `linear-gradient(`;
    return a2 += e2.angle + 90 + `deg, `, a2 += `${r2} calc(calc(0% - ${e2.width}) + calc(calc(100% + ${e2.width}) * ${n2})), `, a2 += `${i2} calc(calc(100% + ${e2.width}) * ${n2}))`, `mask-image: ${a2}; -webkit-mask-image: ${a2};`;
  }, makePropertyRules: () => `
            @property ${t_(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        ` } }, r_ = { opacity: 1, x: `0px`, y: `0px`, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, mask: void 0 }, i_ = `view-transition-styles`, a_ = { x: `0px`, y: `0px`, scale: 1, opacity: 1, rotate3d: false, rotate: 0, rotateX: 0, rotateY: 0, mask: void 0, transition: { type: `tween`, delay: 0, duration: 0.2, ease: [0.27, 0, 0.51, 1], stiffness: 400, damping: 30, mass: 1 } }, o_ = () => {
  }, c_ = () => {
    s_ || (s_ = document.createElement(`div`), s_.setAttribute(`aria-live`, `assertive`), s_.setAttribute(`aria-atomic`, `true`), s_.style.position = `absolute`, s_.style.transform = `scale(0)`, document.body.append(s_)), setTimeout(() => {
      s_.textContent = document.title;
    }, 60);
  }, l_ = true, u_ = (() => {
    if (ne === void 0) return false;
    let e2 = ne.userAgent, t2 = e2.indexOf(`Chrome/`), n2 = +e2.slice(t2 + 7, e2.indexOf(`.`, t2));
    return n2 > 101 && n2 < 128;
  })(), d_ = (() => Yh && typeof n.navigation?.back == `function`)(), f_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu, p_ = p.createContext(null), m_ = (() => {
    let e2 = s(`preview`);
    return e2.displayName = `RenderTargetEnvironmentContext`, e2;
  })(), h_ = async () => {
  }, g_ = { activeLocale: null, locales: [], setLocale: h_ }, __ = (() => {
    let e2 = p.createContext(g_);
    return e2.displayName = `LocaleInfoContext`, e2;
  })(), v_ = (() => {
    let e2 = p.createContext(`ltr`);
    return e2.displayName = `LayoutDirectionContext`, e2;
  })(), y_ = /* @__PURE__ */ new Set(), b_ = (() => {
    let e2 = s({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {
    } });
    return e2.displayName = `URLSearchParamsContext`, e2;
  })(), x_ = `__f_replay`, S_ = `__f_replay_ignore`, C_ = () => Yh, w_ = `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(`.`), T_ = (e2) => {
    e2.target?.closest?.(`#main`) && (kr(e2) || (e2.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
  }, E_ = false, U_ = [Pr], H_ = [Pr], V_ = [Pr], B_ = [Pr], z_ = [Pr], R_ = [Pr], L_ = [Pr], I_ = [Pr], F_ = [Pr], P_ = [Pr], N_ = [Pr], M_ = [Pr], j_ = [Pr], A_ = [Pr], k_ = [Pr], O_ = [Pr], D_ = [Pr], G_ = class {
    constructor() {
      ze(W_, 5, this), I(this, `render`, { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() }), I(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }), I(this, `useInsertionEffects`, { markStart: () => this.markUseInsertionEffectsStart(), markRouterStart: () => this.markUseInsertionEffectRouterStart(), markEnd: () => this.markUseInsertionEffectsEnd() }), I(this, `useLayoutEffects`, { markStart: () => this.markUseLayoutEffectsStart(), markRouterStart: () => this.markRouterUseLayoutEffectStart(), markEnd: () => this.markUseLayoutEffectsEnd() }), I(this, `useEffects`, { markStart: () => this.markUseEffectsStart(), markRouterStart: () => this.markUseEffectsRouterStart(), markEnd: () => this.markUseEffectsEnd(), markAreSynchronous: () => this.markUseEffectsAreSynchronous() }), I(this, `browserRendering`, { hasStarted: false, requestAnimationFrame: { markStart: () => this.markRafStart(), markEnd: () => this.markRafEnd() }, layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() } }), I(this, `unattributedHydrationOverhead`, { measure: () => this.measureUnattributedHydrationOverhead() });
    }
    markRenderStart() {
      performance.mark(`framer-hydration-start`);
    }
    markRenderEnd() {
      performance.mark(`framer-hydration-render-end`), Fr(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`);
    }
    markUseInsertionEffectsStart() {
      performance.mark(`framer-hydration-insertion-effects-start`);
    }
    markUseInsertionEffectRouterStart() {
      performance.mark(`framer-hydration-router-insertion-effect`);
    }
    markUseInsertionEffectsEnd() {
      performance.mark(`framer-hydration-insertion-effects-end`), Fr(`framer-hydration-insertion-effects`, `framer-hydration-insertion-effects-start`, `framer-hydration-insertion-effects-end`);
    }
    markUseLayoutEffectsStart() {
      performance.mark(`framer-hydration-layout-effects-start`);
    }
    markRouterUseLayoutEffectStart() {
      performance.mark(`framer-hydration-router-layout-effect`);
    }
    markUseLayoutEffectsEnd() {
      performance.mark(`framer-hydration-layout-effects-end`), Fr(`framer-hydration-layout-effects`, `framer-hydration-layout-effects-start`, `framer-hydration-layout-effects-end`);
    }
    markUseEffectsStart() {
      performance.mark(`framer-hydration-effects-start`);
    }
    markUseEffectsRouterStart() {
      performance.mark(`framer-hydration-router-effect`);
    }
    markUseEffectsAreSynchronous() {
      performance.mark(`framer-hydration-effects-sync`);
    }
    markUseEffectsEnd() {
      performance.mark(`framer-hydration-effects-end`), Fr(`framer-hydration-effects`, performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ?? performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name, `framer-hydration-effects-end`);
    }
    markRafStart() {
      this.browserRendering.hasStarted = true, performance.mark(`framer-hydration-browser-render-start`);
    }
    markRafEnd() {
      performance.mark(`framer-hydration-browser-raf-end`), Fr(`framer-hydration-raf`, `framer-hydration-browser-render-start`, `framer-hydration-browser-raf-end`);
    }
    markLayoutStylePaintEnd() {
      performance.mark(`framer-hydration-first-paint`), Fr(`framer-hydration-time-to-first-paint`, `framer-hydration-start`, `framer-hydration-first-paint`), Fr(`framer-hydration-browser-render`, `framer-hydration-browser-raf-end`, `framer-hydration-first-paint`);
    }
    measureMutationEffects() {
      Fr(`framer-hydration-commit`, `framer-hydration-layout-effects-end`, `framer-hydration-effects-start`);
    }
    measureUnattributedHydrationOverhead() {
      Fr(`framer-hydration-uho`, performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ?? performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name, `framer-hydration-browser-render-start`);
    }
  }, W_ = F(null), N(W_, 1, `markRenderStart`, U_, G_), N(W_, 1, `markRenderEnd`, H_, G_), N(W_, 1, `markUseInsertionEffectsStart`, V_, G_), N(W_, 1, `markUseInsertionEffectRouterStart`, B_, G_), N(W_, 1, `markUseInsertionEffectsEnd`, z_, G_), N(W_, 1, `markUseLayoutEffectsStart`, R_, G_), N(W_, 1, `markRouterUseLayoutEffectStart`, L_, G_), N(W_, 1, `markUseLayoutEffectsEnd`, I_, G_), N(W_, 1, `markUseEffectsStart`, F_, G_), N(W_, 1, `markUseEffectsRouterStart`, P_, G_), N(W_, 1, `markUseEffectsAreSynchronous`, N_, G_), N(W_, 1, `markUseEffectsEnd`, M_, G_), N(W_, 1, `markRafStart`, j_, G_), N(W_, 1, `markRafEnd`, A_, G_), N(W_, 1, `markLayoutStylePaintEnd`, k_, G_), N(W_, 1, `measureMutationEffects`, O_, G_), N(W_, 1, `measureUnattributedHydrationOverhead`, D_, G_), Se(W_, G_), q_ = false, J_ = { Start: Br, End: Vr }, Y_ = class extends Error {
  }, X_ = class extends v {
    constructor(e2) {
      super(e2), this.state = { error: void 0, forceUpdateKey: e2.forceUpdateKey };
    }
    static getDerivedStateFromError(e2) {
      return { error: e2 };
    }
    static getDerivedStateFromProps(e2, t2) {
      if (e2.forceUpdateKey !== t2.forceUpdateKey) {
        let n2 = { forceUpdateKey: e2.forceUpdateKey };
        return t2.error && (n2.error = void 0), n2;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof Y_)) throw this.state.error;
      let { notFoundPage: e2, defaultPageStyle: t2 } = this.props;
      if (!e2) throw this.state.error;
      return Hr(e2, t2);
    }
  }, Z_ = Object.freeze([]), $_ = /* @__PURE__ */ new Set(), ev = class {
    constructor() {
      I(this, `observers`, /* @__PURE__ */ new Set()), I(this, `transactions`, {});
    }
    add(e2) {
      this.observers.add(e2);
      let t2 = false;
      return () => {
        t2 || (t2 = true, this.remove(e2));
      };
    }
    remove(e2) {
      this.observers.delete(e2);
    }
    notify(e2, t2) {
      if (t2) {
        let n2 = this.transactions[t2] || e2;
        n2.value = e2.value, this.transactions[t2] = n2;
      } else this.callObservers(e2);
    }
    finishTransaction(e2) {
      let t2 = this.transactions[e2];
      return delete this.transactions[e2], this.callObservers(t2, e2);
    }
    callObservers(e2, t2) {
      let n2 = [];
      return new Set(this.observers).forEach((r2) => {
        typeof r2 == `function` ? r2(e2, t2) : (r2.update(e2, t2), n2.push(r2.finish));
      }), n2;
    }
  }, tv = (() => {
    function e2(e3) {
      return ii(`Animatable()`, `2.0.0`, `the new animation API (https://www.framer.com/api/animation/)`), ai(e3) ? e3 : new iv(e3);
    }
    return e2.transaction = (e3) => {
      let t2 = Math.random(), n2 = /* @__PURE__ */ new Set();
      e3((e4, r3) => {
        e4.set(r3, t2), n2.add(e4);
      }, t2);
      let r2 = [];
      n2.forEach((e4) => {
        r2.push(...e4.finishTransaction(t2));
      }), r2.forEach((e4) => {
        e4(t2);
      });
    }, e2.getNumber = (t2, n2 = 0) => e2.get(t2, n2), e2.get = (e3, t2) => e3 == null ? t2 : ai(e3) ? e3.get() : e3, e2.objectToValues = (e3) => {
      if (!e3) return e3;
      let t2 = {};
      for (let n2 in e3) {
        let r2 = e3[n2];
        ai(r2) ? t2[n2] = r2.get() : t2[n2] = r2;
      }
      return t2;
    }, e2;
  })(), nv = `onUpdate`, rv = `finishTransaction`, iv = class {
    constructor(e2) {
      this.value = e2, I(this, `observers`, new ev());
    }
    static interpolationFor(e2, t2) {
      if (ai(e2)) return oi(e2, t2);
    }
    get() {
      return this.value;
    }
    set(e2, t2) {
      let n2 = this.value;
      ai(e2) && (e2 = e2.get()), this.value = e2;
      let r2 = { value: e2, oldValue: n2 };
      this.observers.notify(r2, t2);
    }
    finishTransaction(e2) {
      return this.observers.finishTransaction(e2);
    }
    onUpdate(e2) {
      return this.observers.add(e2);
    }
  }, ((e2) => {
    e2.isQuadrilateralPoints = (e3) => e3?.length === 4, e2.add = (...e3) => e3.reduce((e4, t3) => ({ x: e4.x + t3.x, y: e4.y + t3.y }), { x: 0, y: 0 }), e2.subtract = (e3, t3) => ({ x: e3.x - t3.x, y: e3.y - t3.y }), e2.multiply = (e3, t3) => ({ x: e3.x * t3, y: e3.y * t3 }), e2.divide = (e3, t3) => ({ x: e3.x / t3, y: e3.y / t3 }), e2.absolute = (e3) => ({ x: Math.abs(e3.x), y: Math.abs(e3.y) }), e2.reverse = (e3) => ({ x: e3.x * -1, y: e3.y * -1 }), e2.pixelAligned = (e3, t3 = { x: 0, y: 0 }) => ({ x: ci(e3.x, t3.x), y: ci(e3.y, t3.y) }), e2.distance = (e3, t3) => {
      let n3 = Math.abs(e3.x - t3.x), r3 = Math.abs(e3.y - t3.y);
      return Math.sqrt(n3 * n3 + r3 * r3);
    }, e2.angle = (e3, t3) => Math.atan2(t3.y - e3.y, t3.x - e3.x) * 180 / Math.PI - 90, e2.angleFromX = (e3, t3) => Math.atan2(t3.y - e3.y, t3.x - e3.x) * 180 / Math.PI, e2.isEqual = (e3, t3) => e3.x === t3.x && e3.y === t3.y, e2.rotationNormalizer = () => {
      let e3;
      return (t3) => {
        typeof e3 != `number` && (e3 = t3);
        let n3 = e3 - t3, r3 = Math.abs(n3) + 180, i2 = Math.floor(r3 / 360);
        return n3 < 180 && (t3 -= i2 * 360), n3 > 180 && (t3 += i2 * 360), e3 = t3, t3;
      };
    };
    function t2(e3, t3) {
      return { x: (e3.x + t3.x) / 2, y: (e3.y + t3.y) / 2 };
    }
    e2.center = t2;
    function n2(e3) {
      let t3 = 0, n3 = 0;
      return e3.forEach((e4) => {
        t3 += e4.x, n3 += e4.y;
      }), { x: t3 / e3.length, y: n3 / e3.length };
    }
    e2.centroid = n2;
    function r2(t3) {
      let n3 = e2.centroid(t3), r3 = /* @__PURE__ */ new Map();
      for (let e3 = 0; e3 < t3.length; e3++) {
        let i2 = t3[e3];
        i2 && r3.set(i2, Math.atan2(i2.y - n3.y, i2.x - n3.x));
      }
      return t3.sort((e3, t4) => (r3.get(e3) ?? 0) - (r3.get(t4) ?? 0));
    }
    e2.sortClockwise = r2;
  })(ui ||= {}), av = { aliceblue: `f0f8ff`, antiquewhite: `faebd7`, aqua: `0ff`, aquamarine: `7fffd4`, azure: `f0ffff`, beige: `f5f5dc`, bisque: `ffe4c4`, black: `000`, blanchedalmond: `ffebcd`, blue: `00f`, blueviolet: `8a2be2`, brown: `a52a2a`, burlywood: `deb887`, burntsienna: `ea7e5d`, cadetblue: `5f9ea0`, chartreuse: `7fff00`, chocolate: `d2691e`, coral: `ff7f50`, cornflowerblue: `6495ed`, cornsilk: `fff8dc`, crimson: `dc143c`, cyan: `0ff`, darkblue: `00008b`, darkcyan: `008b8b`, darkgoldenrod: `b8860b`, darkgray: `a9a9a9`, darkgreen: `006400`, darkgrey: `a9a9a9`, darkkhaki: `bdb76b`, darkmagenta: `8b008b`, darkolivegreen: `556b2f`, darkorange: `ff8c00`, darkorchid: `9932cc`, darkred: `8b0000`, darksalmon: `e9967a`, darkseagreen: `8fbc8f`, darkslateblue: `483d8b`, darkslategray: `2f4f4f`, darkslategrey: `2f4f4f`, darkturquoise: `00ced1`, darkviolet: `9400d3`, deeppink: `ff1493`, deepskyblue: `00bfff`, dimgray: `696969`, dimgrey: `696969`, dodgerblue: `1e90ff`, firebrick: `b22222`, floralwhite: `fffaf0`, forestgreen: `228b22`, fuchsia: `f0f`, gainsboro: `dcdcdc`, ghostwhite: `f8f8ff`, gold: `ffd700`, goldenrod: `daa520`, gray: `808080`, green: `008000`, greenyellow: `adff2f`, grey: `808080`, honeydew: `f0fff0`, hotpink: `ff69b4`, indianred: `cd5c5c`, indigo: `4b0082`, ivory: `fffff0`, khaki: `f0e68c`, lavender: `e6e6fa`, lavenderblush: `fff0f5`, lawngreen: `7cfc00`, lemonchiffon: `fffacd`, lightblue: `add8e6`, lightcoral: `f08080`, lightcyan: `e0ffff`, lightgoldenrodyellow: `fafad2`, lightgray: `d3d3d3`, lightgreen: `90ee90`, lightgrey: `d3d3d3`, lightpink: `ffb6c1`, lightsalmon: `ffa07a`, lightseagreen: `20b2aa`, lightskyblue: `87cefa`, lightslategray: `789`, lightslategrey: `789`, lightsteelblue: `b0c4de`, lightyellow: `ffffe0`, lime: `0f0`, limegreen: `32cd32`, linen: `faf0e6`, magenta: `f0f`, maroon: `800000`, mediumaquamarine: `66cdaa`, mediumblue: `0000cd`, mediumorchid: `ba55d3`, mediumpurple: `9370db`, mediumseagreen: `3cb371`, mediumslateblue: `7b68ee`, mediumspringgreen: `00fa9a`, mediumturquoise: `48d1cc`, mediumvioletred: `c71585`, midnightblue: `191970`, mintcream: `f5fffa`, mistyrose: `ffe4e1`, moccasin: `ffe4b5`, navajowhite: `ffdead`, navy: `000080`, oldlace: `fdf5e6`, olive: `808000`, olivedrab: `6b8e23`, orange: `ffa500`, orangered: `ff4500`, orchid: `da70d6`, palegoldenrod: `eee8aa`, palegreen: `98fb98`, paleturquoise: `afeeee`, palevioletred: `db7093`, papayawhip: `ffefd5`, peachpuff: `ffdab9`, peru: `cd853f`, pink: `ffc0cb`, plum: `dda0dd`, powderblue: `b0e0e6`, purple: `800080`, rebeccapurple: `663399`, red: `f00`, rosybrown: `bc8f8f`, royalblue: `4169e1`, saddlebrown: `8b4513`, salmon: `fa8072`, sandybrown: `f4a460`, seagreen: `2e8b57`, seashell: `fff5ee`, sienna: `a0522d`, silver: `c0c0c0`, skyblue: `87ceeb`, slateblue: `6a5acd`, slategray: `708090`, slategrey: `708090`, snow: `fffafa`, springgreen: `00ff7f`, steelblue: `4682b4`, tan: `d2b48c`, teal: `008080`, thistle: `d8bfd8`, tomato: `ff6347`, turquoise: `40e0d0`, violet: `ee82ee`, wheat: `f5deb3`, white: `fff`, whitesmoke: `f5f5f5`, yellow: `ff0`, yellowgreen: `9acd32` }, ov = new ((() => Hh().Hsluv)())(), sv = (() => {
    let e2 = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`, t2 = `[\\s|\\(]+(` + e2 + `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`, n2 = `[\\s|\\(]+(` + e2 + `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
    return { rgb: RegExp(`rgb` + t2), rgba: RegExp(`rgba` + n2), hsl: RegExp(`hsl` + t2), hsla: RegExp(`hsla` + n2), hsv: RegExp(`hsv` + t2), hsva: RegExp(`hsva` + n2), hex3: /^([\da-f])([\da-f])([\da-f])$/iu, hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu, hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu, hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu };
  })(), cv = /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u, lv = (e2) => {
    let { r: t2, g: n2, b: r2, a: i2 } = Pi(e2);
    return { x: 0.486570948648216 * t2 + 0.265667693169093 * n2 + 0.1982172852343625 * r2, y: 0.2289745640697487 * t2 + 0.6917385218365062 * n2 + 0.079286914093745 * r2, z: 0 * t2 + 0.0451133818589026 * n2 + 1.043944368900976 * r2, a: i2 };
  }, uv = ({ x: e2 = 0, y: t2 = 0, z: n2 = 0, a: r2 = 1 }) => Ii({ r: e2 * 3.2409699419045226 - t2 * 1.537383177570094 - 0.4986107602930034 * n2, g: e2 * -0.9692436362808796 + t2 * 1.8759675015077204 + 0.0415550574071756 * n2, b: e2 * 0.0556300796969936 - t2 * 0.2039769588889765 + 1.0569715142428784 * n2, a: r2 }), dv = (e2) => {
    let { r: t2, g: n2, b: r2, a: i2 } = Pi(e2);
    return { x: 0.4123907992659593 * t2 + 0.357584339383878 * n2 + 0.1804807884018343 * r2, y: 0.2126390058715102 * t2 + 0.715168678767756 * n2 + 0.0721923153607337 * r2, z: 0.0193308187155918 * t2 + 0.119194779794626 * n2 + 0.9505321522496607 * r2, a: i2 };
  }, fv = ({ x: e2 = 0, y: t2 = 0, z: n2 = 0, a: r2 = 1 }) => Ii({ r: e2 * 2.4934969119414263 - t2 * 0.9313836179191242 - 0.402710784450717 * n2, g: e2 * -0.8294889695615749 + t2 * 1.7626640603183465 + 0.0236246858419436 * n2, b: e2 * 0.0358458302437845 - t2 * 0.0761723892680418 + 0.9568845240076871 * n2, a: r2 }), pv = class e2 {
    constructor(e3) {
      I(this, `format`, `p3`), I(this, `r`), I(this, `g`), I(this, `b`), I(this, `a`), this.r = e3.r ?? 0, this.g = e3.g ?? 0, this.b = e3.b ?? 0, this.a = e3.a ?? 1;
    }
    hsv() {
      return Li(this);
    }
    rgb() {
      return Vi(this);
    }
    hsl() {
      return bi(this.r, this.g, this.b);
    }
    toString(e3 = `p3`, t2) {
      switch (e3) {
        case `p3`: {
          let e4 = t2?.r ?? this.r, n2 = t2?.g ?? this.g, r2 = t2?.b ?? this.b, i2 = t2?.a ?? this.a;
          return i2 === 1 ? `color(display-p3 ${e4} ${n2} ${r2})` : `color(display-p3 ${e4} ${n2} ${r2} / ${i2})`;
        }
        case `srgb`: {
          let e4 = this.rgb(), n2 = Math.round(Math.max(0, Math.min(e4.r, 1)) * 100) / 100, r2 = Math.round(Math.max(0, Math.min(e4.g, 1)) * 100) / 100, i2 = Math.round(Math.max(0, Math.min(e4.b, 1)) * 100) / 100, a2 = t2?.r ?? n2 * 255, o2 = t2?.g ?? r2 * 255, s2 = t2?.b ?? i2 * 255, c2 = t2?.a ?? e4.a ?? 1;
          return c2 === 1 ? `rgb(${a2}, ${o2}, ${s2})` : `rgba(${a2}, ${o2}, ${s2}, ${c2})`;
        }
      }
    }
    static isP3String(e3) {
      return e3.startsWith(`color(display-p3`);
    }
    static fromHSV(t2, n2 = `p3`) {
      switch (n2) {
        case `p3`:
          return new e2(zi(t2));
        case `srgb`:
          return new e2(Bi(zi(t2)));
      }
    }
    static fromRGB(t2) {
      return new e2(Bi({ r: Math.round(t2.r / 255 * 1e4) / 1e4, g: Math.round(t2.g / 255 * 1e4) / 1e4, b: Math.round(t2.b / 255 * 1e4) / 1e4, a: t2.a ?? 1 }));
    }
    static fromRGBString(t2) {
      let n2 = K(t2);
      if (n2) return e2.fromRGB(n2);
    }
    static fromString(t2) {
      if (!e2.isP3String(t2)) return;
      let n2 = Mi(t2);
      if (n2) return new e2({ r: n2.r, g: n2.g, b: n2.b, a: n2.a });
    }
    static srgbFromValue(t2) {
      if (!L(t2) || !K.isP3String(t2)) return t2;
      let n2 = e2.fromString(t2);
      return n2 ? n2.toString(`srgb`) : t2;
    }
    static multiplyAlpha(t2, n2) {
      return new e2({ r: t2.r, g: t2.g, b: t2.b, a: t2.a * n2 });
    }
  }, mv = /* @__PURE__ */ new Map(), K = (() => {
    function e2(n3, r3, i3, a2) {
      if (typeof n3 == `string`) {
        let r4 = mv.get(n3);
        return r4 || (r4 = t2(n3), r4 === void 0 ? { ...e2(`black`), isValid: false } : (mv.set(n3, r4), r4));
      }
      let o2 = t2(n3, r3, i3, a2);
      return o2 === void 0 ? { ...e2(`black`), isValid: false } : o2;
    }
    function t2(t3, n3, r3, i3) {
      if (t3 === ``) return;
      let a2 = Hi(t3, n3, r3, i3);
      if (a2) {
        let n4 = { r: a2.r, g: a2.g, b: a2.b, a: a2.a, h: a2.h, s: a2.s, l: a2.l, initialValue: typeof t3 == `string` && a2.format !== `hsv` ? t3 : void 0, roundA: Math.round(100 * a2.a) / 100, format: a2.format, mix: e2.mix, toValue: () => e2.toRgbString(n4) };
        return n4;
      } else return;
    }
    let n2 = { isRGB(e3) {
      return e3 === `rgb` || e3 === `rgba`;
    }, isHSL(e3) {
      return e3 === `hsl` || e3 === `hsla`;
    } };
    e2.inspect = (e3, t3) => e3.format === `hsl` ? `<${e3.constructor.name} h:${e3.h} s:${e3.s} l:${e3.l} a:${e3.a}>` : e3.format === `hex` || e3.format === `name` ? `<${e3.constructor.name} "${t3}">` : `<${e3.constructor.name} r:${e3.r} g:${e3.g} b:${e3.b} a:${e3.a}>`, e2.isColor = (t3) => typeof t3 == `string` ? e2.isColorString(t3) : e2.isColorObject(t3), e2.isColorString = (e3) => typeof e3 == `string` ? ki(e3) !== false : false, e2.isColorObject = (e3) => z(e3) && typeof e3.r == `number` && typeof e3.g == `number` && typeof e3.b == `number` && typeof e3.h == `number` && typeof e3.s == `number` && typeof e3.l == `number` && typeof e3.a == `number` && typeof e3.roundA == `number` && typeof e3.format == `string`, e2.toString = (t3) => e2.toRgbString(t3), e2.toHex = (e3, t3 = false) => yi(e3.r, e3.g, e3.b, t3), e2.toHexString = (t3, n3 = false) => `#${e2.toHex(t3, n3)}`, e2.isP3String = (e3) => typeof e3 == `string` ? pv.isP3String(e3) : false, e2.toRgbString = (e3) => e3.a === 1 ? `rgb(` + Math.round(e3.r) + `, ` + Math.round(e3.g) + `, ` + Math.round(e3.b) + `)` : `rgba(` + Math.round(e3.r) + `, ` + Math.round(e3.g) + `, ` + Math.round(e3.b) + `, ` + e3.roundA + `)`, e2.toHusl = (e3) => ({ ...hi(e3.r, e3.g, e3.b), a: e3.roundA }), e2.toHslString = (t3) => {
      let n3 = e2.toHsl(t3), r3 = Math.round(n3.h), i3 = Math.round(n3.s * 100), a2 = Math.round(n3.l * 100);
      return t3.a === 1 ? `hsl(` + r3 + `, ` + i3 + `%, ` + a2 + `%)` : `hsla(` + r3 + `, ` + i3 + `%, ` + a2 + `%, ` + t3.roundA + `)`;
    }, e2.toHsv = (e3) => {
      let t3 = Ci(e3.r, e3.g, e3.b);
      return { h: t3.h * 360, s: t3.s, v: t3.v, a: e3.a };
    }, e2.toHsvString = (e3) => {
      let t3 = Ci(e3.r, e3.g, e3.b), n3 = Math.round(t3.h * 360), r3 = Math.round(t3.s * 100), i3 = Math.round(t3.v * 100);
      return e3.a === 1 ? `hsv(` + n3 + `, ` + r3 + `%, ` + i3 + `%)` : `hsva(` + n3 + `, ` + r3 + `%, ` + i3 + `%, ` + e3.roundA + `)`;
    }, e2.toName = (e3) => {
      if (e3.a === 0) return `transparent`;
      if (e3.a < 1) return false;
      let t3 = yi(e3.r, e3.g, e3.b, true);
      for (let e4 of Object.keys(av)) if (av[e4] === t3) return e4;
      return false;
    }, e2.toHsl = (e3) => ({ h: Math.round(e3.h), s: e3.s, l: e3.l, a: e3.a }), e2.toRgb = (e3) => ({ r: Math.round(e3.r), g: Math.round(e3.g), b: Math.round(e3.b), a: e3.a }), e2.brighten = (t3, n3 = 10) => {
      let r3 = e2.toRgb(t3);
      return r3.r = Math.max(0, Math.min(255, r3.r - Math.round(255 * -(n3 / 100)))), r3.g = Math.max(0, Math.min(255, r3.g - Math.round(255 * -(n3 / 100)))), r3.b = Math.max(0, Math.min(255, r3.b - Math.round(255 * -(n3 / 100)))), e2(r3);
    }, e2.lighten = (t3, n3 = 10) => {
      let r3 = e2.toHsl(t3);
      return r3.l += n3 / 100, r3.l = Math.min(1, Math.max(0, r3.l)), e2(r3);
    }, e2.darken = (t3, n3 = 10) => {
      let r3 = e2.toHsl(t3);
      return r3.l -= n3 / 100, r3.l = Math.min(1, Math.max(0, r3.l)), e2(r3);
    }, e2.saturate = (t3, n3 = 10) => {
      let r3 = e2.toHsl(t3);
      return r3.s += n3 / 100, r3.s = Math.min(1, Math.max(0, r3.s)), e2(r3);
    }, e2.desaturate = (t3, n3 = 10) => {
      let r3 = e2.toHsl(t3);
      return r3.s -= n3 / 100, r3.s = Math.min(1, Math.max(0, r3.s)), e2(r3);
    }, e2.grayscale = (t3) => e2.desaturate(t3, 100), e2.hueRotate = (t3, n3) => {
      let r3 = e2.toHsl(t3);
      return r3.h += n3, r3.h = r3.h > 360 ? r3.h - 360 : r3.h, e2(r3);
    }, e2.alpha = (t3, n3 = 1) => e2({ r: t3.r, g: t3.g, b: t3.b, a: n3 }), e2.transparent = (t3) => e2.alpha(t3, 0), e2.multiplyAlpha = (t3, n3 = 1) => e2({ r: t3.r, g: t3.g, b: t3.b, a: t3.a * n3 }), e2.alphaComposite = (t3, n3) => {
      if (t3.a === 1) return t3;
      if (n3.a < 1) throw Error("Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`");
      return t3.a === 0 ? n3 : e2({ r: Math.round(t3.r * t3.a + n3.r * (1 - t3.a)), g: Math.round(t3.g * t3.a + n3.g * (1 - t3.a)), b: Math.round(t3.b * t3.a + n3.b * (1 - t3.a)), a: 1 });
    }, e2.interpolate = (t3, n3, r3 = `rgb`) => {
      if (!e2.isColorObject(t3) || !e2.isColorObject(n3)) throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
      return (i3) => e2.mixAsColor(t3, n3, i3, false, r3);
    }, e2.mix = (t3, n3, { model: r3 = `rgb` } = {}) => {
      let i3 = typeof t3 == `string` ? e2(t3) : t3, a2 = e2.interpolate(i3, n3, r3);
      return (t4) => e2.toRgbString(a2(t4));
    }, e2.mixAsColor = (t3, r3, i3 = 0.5, a2 = false, o2 = `rgb`) => {
      let s2 = null;
      if (n2.isRGB(o2)) s2 = e2({ r: di(i3, [0, 1], [t3.r, r3.r], a2), g: di(i3, [0, 1], [t3.g, r3.g], a2), b: di(i3, [0, 1], [t3.b, r3.b], a2), a: di(i3, [0, 1], [t3.a, r3.a], a2) });
      else {
        let c2, l2;
        n2.isHSL(o2) ? (c2 = e2.toHsl(t3), l2 = e2.toHsl(r3)) : (c2 = e2.toHusl(t3), l2 = e2.toHusl(r3)), c2.s === 0 ? c2.h = l2.h : l2.s === 0 && (l2.h = c2.h);
        let u2 = c2.h, d2 = l2.h, f2 = d2 - u2;
        f2 > 180 ? f2 = d2 - 360 - u2 : f2 < -180 && (f2 = d2 + 360 - u2);
        let p2 = { h: di(i3, [0, 1], [u2, u2 + f2], a2), s: di(i3, [0, 1], [c2.s, l2.s], a2), l: di(i3, [0, 1], [c2.l, l2.l], a2), a: di(i3, [0, 1], [t3.a, r3.a], a2) };
        s2 = n2.isHSL(o2) ? e2(p2) : e2(gi(p2.h, p2.s, p2.l, p2.a));
      }
      return s2;
    }, e2.random = (t3 = 1) => {
      function n3() {
        return Math.floor(Math.random() * 255);
      }
      return e2(`rgba(` + n3() + `, ` + n3() + `, ` + n3() + `, ` + t3 + `)`);
    }, e2.grey = (t3 = 0.5, n3 = 1) => (t3 = Math.floor(t3 * 255), e2(`rgba(` + t3 + `, ` + t3 + `, ` + t3 + `, ` + n3 + `)`)), e2.gray = e2.grey, e2.rgbToHsl = (e3, t3, n3) => bi(e3, t3, n3), e2.isValidColorProperty = (t3, n3) => !!((t3.toLowerCase().slice(-5) === `color` || t3 === `fill` || t3 === `stroke`) && typeof n3 == `string` && e2.isColorString(n3)), e2.difference = (e3, t3) => {
      let n3 = (e3.r + t3.r) / 2, r3 = e3.r - t3.r, i3 = e3.g - t3.g, a2 = e3.b - t3.b, o2 = r3 ** 2, s2 = i3 ** 2, c2 = a2 ** 2;
      return Math.sqrt(2 * o2 + 4 * s2 + 3 * c2 + n3 * (o2 - c2) / 256);
    }, e2.equal = (e3, t3, n3 = 0.1) => !(Math.abs(e3.r - t3.r) >= n3 || Math.abs(e3.g - t3.g) >= n3 || Math.abs(e3.b - t3.b) >= n3 || Math.abs(e3.a - t3.a) * 256 >= n3);
    let r2 = Ee([0, 255], [0, 1]);
    function i2(e3) {
      e3 = r2(e3);
      let t3 = Math.abs(e3);
      return t3 < 0.04045 ? e3 / 12.92 : (Math.sign(e3) || 1) * ((t3 + 0.055) / 1.055) ** 2.4;
    }
    return e2.luminance = (t3) => {
      let { r: n3, g: r3, b: a2 } = e2.toRgb(t3);
      return 0.2126 * i2(n3) + 0.7152 * i2(r3) + 0.0722 * i2(a2);
    }, e2.contrast = (t3, n3) => {
      let r3 = e2.luminance(t3), i3 = e2.luminance(n3);
      return (Math.max(r3, i3) + 0.05) / (Math.min(r3, i3) + 0.05);
    }, e2;
  })(), hv = (e2) => e2 instanceof Le, gv = (() => Uh().EventEmitter)(), _v = class {
    constructor() {
      I(this, `_emitter`, new gv());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e2 = {};
      for (let t2 of this._emitter.eventNames()) e2[t2] = this._emitter.listeners(t2);
      return e2;
    }
    on(e2, t2) {
      this.addEventListener(e2, t2, false, false, this);
    }
    off(e2, t2) {
      this.removeEventListeners(e2, t2);
    }
    once(e2, t2) {
      this.addEventListener(e2, t2, true, false, this);
    }
    unique(e2, t2) {
      this.addEventListener(e2, t2, false, true, this);
    }
    addEventListener(e2, t2, n2, r2, i2) {
      if (r2) {
        for (let e3 of this._emitter.eventNames()) if (t2 === this._emitter.listeners(e3)) return;
      }
      n2 === true ? this._emitter.once(e2, t2, i2) : this._emitter.addListener(e2, t2, i2);
    }
    removeEventListeners(e2, t2) {
      e2 ? this._emitter.removeListener(e2, t2) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e2) {
      if (e2) return this._emitter.listeners(e2).length;
      {
        let e3 = 0;
        for (let t2 of this._emitter.eventNames()) e3 += this._emitter.listeners(t2).length;
        return e3;
      }
    }
    emit(e2, ...t2) {
      this._emitter.emit(e2, ...t2);
    }
  }, vv = (e2) => {
    setTimeout(e2, 1 / 60);
  }, yv = (() => G.requestAnimationFrame || vv)(), bv = (e2) => yv(e2), xv = (() => 1 / 60)(), Sv = class extends _v {
    constructor(e2 = false) {
      super(), I(this, `_started`, false), I(this, `_frame`, 0), I(this, `_frameTasks`, []), I(this, `tick`, () => {
        this._started && (bv(this.tick), this.emit(`update`, this._frame, xv), this.emit(`render`, this._frame, xv), this._processFrameTasks(), this._frame++);
      }), e2 && this.start();
    }
    addFrameTask(e2) {
      this._frameTasks.push(e2);
    }
    _processFrameTasks() {
      let e2 = this._frameTasks, t2 = e2.length;
      if (t2 !== 0) {
        for (let n2 = 0; n2 < t2; n2++) e2[n2]?.();
        e2.length = 0;
      }
    }
    static set TimeStep(e2) {
      xv = e2;
    }
    static get TimeStep() {
      return xv;
    }
    start() {
      return this._started ? this : (this._frame = 0, this._started = true, bv(this.tick), this);
    }
    stop() {
      return this._started = false, this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * xv;
    }
  }, Cv = new Sv(), wv = { target: G.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`, zoom: 1 }, q = { canvas: `CANVAS`, export: `EXPORT`, thumbnail: `THUMBNAIL`, preview: `PREVIEW`, current: () => wv.target, hasRestrictions: () => {
    let e2 = wv.target;
    return e2 === `CANVAS` || e2 === `EXPORT`;
  } }, Tv = (e2) => ({ correct: (t2, { projectionDelta: n2, treeScale: r2 }) => {
    if (typeof t2 == `string` && (t2 = parseFloat(t2)), t2 === 0) return `0px`;
    let i2 = t2;
    return n2 && r2 && (i2 = Math.round(t2 / n2[e2].scale / r2[e2]), i2 = Math.max(i2, 1)), i2 + `px`;
  } }), Ve({ borderTopWidth: Tv(`y`), borderLeftWidth: Tv(`x`), borderRightWidth: Tv(`x`), borderBottomWidth: Tv(`y`) }), Ev = p.createContext({ getLayoutId: (e2) => null, persistLayoutIdCache: () => {
  }, top: false, enabled: true }), Dv = { background: void 0, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`, lineHeight: `1.4em`, textOverflow: `ellipsis`, overflow: `hidden`, minHeight: 0, width: `100%`, height: `100%` }, Ov = (() => ({ ...Dv, border: `1px solid rgba(149, 149, 149, 0.15)`, borderRadius: 6, fontSize: `12px`, backgroundColor: `rgba(149, 149, 149, 0.1)`, color: `#a5a5a5` }))(), kv = { overflow: `hidden`, whiteSpace: `nowrap`, textOverflow: `ellipsis`, maxWidth: `100%`, flexShrink: 0, padding: `0 10px` }, Av = (() => ({ ...kv, fontWeight: 500 }))(), jv = (() => ({ ...kv, whiteSpace: `pre`, maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`, WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)` }))(), Mv = (() => {
    function e2(e3, t2) {
      return { a: e3, b: t2 };
    }
    return e2.offset = (t2, n2) => {
      let r2 = ra(ui.angleFromX(t2.a, t2.b)), i2 = n2 * Math.sin(r2), a2 = n2 * Math.cos(r2);
      return e2({ x: t2.a.x + i2, y: t2.a.y - a2 }, { x: t2.b.x + i2, y: t2.b.y - a2 });
    }, e2.intersection = (e3, t2, n2) => {
      let r2 = e3.a.x, i2 = e3.a.y, a2 = e3.b.x, o2 = e3.b.y, s2 = t2.a.x, c2 = t2.a.y, l2 = t2.b.x, u2 = t2.b.y, d2 = (l2 - s2) * (c2 - i2) - (u2 - c2) * (s2 - r2), f2 = (l2 - s2) * (o2 - i2) - (u2 - c2) * (a2 - r2), p2 = (a2 - r2) * (c2 - i2) - (o2 - i2) * (s2 - r2);
      if (d2 === 0 && f2 === 0 || f2 === 0) return null;
      let m2 = d2 / f2, h2 = p2 / f2;
      return n2 && (m2 < 0 || m2 > 1 || h2 < 0 || h2 > 1) ? null : { x: r2 + m2 * (a2 - r2), y: i2 + m2 * (o2 - i2) };
    }, e2.intersectionAngle = (e3, t2) => {
      let n2 = e3.b.x - e3.a.x, r2 = e3.b.y - e3.a.y, i2 = t2.b.x - t2.a.x, a2 = t2.b.y - t2.a.y;
      return Math.atan2(n2 * a2 - r2 * i2, n2 * i2 + r2 * a2) * (180 / Math.PI);
    }, e2.isOrthogonal = (e3) => e3.a.x === e3.b.x || e3.a.y === e3.b.y, e2.perpendicular = (t2, n2) => {
      let r2 = t2.a.x - t2.b.x, i2 = t2.a.y - t2.b.y;
      return e2(ui(n2.x - i2, n2.y + r2), n2);
    }, e2.projectPoint = (t2, n2) => {
      let r2 = e2.perpendicular(t2, n2);
      return e2.intersection(t2, r2);
    }, e2.pointAtPercentDistance = (t2, n2) => {
      let r2 = e2.distance(t2), i2 = n2 * r2 / r2;
      return { x: i2 * t2.b.x + (1 - i2) * t2.a.x, y: i2 * t2.b.y + (1 - i2) * t2.a.y };
    }, e2.distance = (e3) => ui.distance(e3.a, e3.b), e2;
  })(), J = { equals: function(e2, t2) {
    return e2 === t2 ? true : !e2 || !t2 ? false : e2.x === t2.x && e2.y === t2.y && e2.width === t2.width && e2.height === t2.height;
  }, from: (e2) => ({ x: e2.x, y: e2.y, width: e2.width, height: e2.height }), atOrigin: (e2) => ({ x: 0, y: 0, width: e2.width, height: e2.height }), fromTwoPoints: (e2, t2) => ({ x: Math.min(e2.x, t2.x), y: Math.min(e2.y, t2.y), width: Math.abs(e2.x - t2.x), height: Math.abs(e2.y - t2.y) }), fromRect: (e2) => ({ x: e2.left, y: e2.top, width: e2.right - e2.left, height: e2.bottom - e2.top }), multiply: (e2, t2) => ({ x: e2.x * t2, y: e2.y * t2, width: e2.width * t2, height: e2.height * t2 }), divide: (e2, t2) => J.multiply(e2, 1 / t2), offset: (e2, t2) => {
    let n2 = typeof t2.x == `number` ? t2.x : 0, r2 = typeof t2.y == `number` ? t2.y : 0;
    return { ...e2, x: e2.x + n2, y: e2.y + r2 };
  }, inflate: (e2, t2) => {
    if (t2 === 0) return e2;
    let n2 = 2 * t2;
    return { x: e2.x - t2, y: e2.y - t2, width: e2.width + n2, height: e2.height + n2 };
  }, pixelAligned: (e2) => {
    let t2 = Math.round(e2.x), n2 = Math.round(e2.y), r2 = Math.round(e2.x + e2.width), i2 = Math.round(e2.y + e2.height);
    return { x: t2, y: n2, width: Math.max(r2 - t2, 0), height: Math.max(i2 - n2, 0) };
  }, halfPixelAligned: (e2) => {
    let t2 = Math.round(e2.x * 2) / 2, n2 = Math.round(e2.y * 2) / 2, r2 = Math.round((e2.x + e2.width) * 2) / 2, i2 = Math.round((e2.y + e2.height) * 2) / 2;
    return { x: t2, y: n2, width: Math.max(r2 - t2, 1), height: Math.max(i2 - n2, 1) };
  }, round: (e2, t2 = 0) => ({ x: si(e2.x, t2), y: si(e2.y, t2), width: si(e2.width, t2), height: si(e2.height, t2) }), roundToOutside: (e2) => {
    let t2 = Math.floor(e2.x), n2 = Math.floor(e2.y), r2 = Math.ceil(e2.x + e2.width), i2 = Math.ceil(e2.y + e2.height);
    return { x: t2, y: n2, width: Math.max(r2 - t2, 0), height: Math.max(i2 - n2, 0) };
  }, minX: (e2) => e2.x, maxX: (e2) => e2.x + e2.width, minY: (e2) => e2.y, maxY: (e2) => e2.y + e2.height, positions: (e2) => ({ minX: e2.x, midX: e2.x + e2.width / 2, maxX: J.maxX(e2), minY: e2.y, midY: e2.y + e2.height / 2, maxY: J.maxY(e2) }), center: (e2) => ({ x: e2.x + e2.width / 2, y: e2.y + e2.height / 2 }), boundingRectFromPoints: (e2) => {
    let t2 = 1 / 0, n2 = -1 / 0, r2 = 1 / 0, i2 = -1 / 0;
    for (let a2 = 0; a2 < e2.length; a2++) {
      let o2 = e2[a2];
      t2 = Math.min(t2, o2.x), n2 = Math.max(n2, o2.x), r2 = Math.min(r2, o2.y), i2 = Math.max(i2, o2.y);
    }
    return { x: t2, y: r2, width: n2 - t2, height: i2 - r2 };
  }, fromPoints: (e2) => {
    let [t2, n2, r2, i2] = e2, { x: a2, y: o2 } = t2;
    return { x: a2, y: o2, width: ui.distance(t2, n2), height: ui.distance(t2, i2) };
  }, merge: (...e2) => {
    let t2 = { x: Math.min(...e2.map(J.minX)), y: Math.min(...e2.map(J.minY)) }, n2 = { x: Math.max(...e2.map(J.maxX)), y: Math.max(...e2.map(J.maxY)) };
    return J.fromTwoPoints(t2, n2);
  }, intersection: (e2, t2) => {
    let n2 = Math.max(e2.x, t2.x), r2 = Math.min(e2.x + e2.width, t2.x + t2.width), i2 = Math.max(e2.y, t2.y), a2 = Math.min(e2.y + e2.height, t2.y + t2.height);
    return { x: n2, y: i2, width: r2 - n2, height: a2 - i2 };
  }, points: (e2) => [{ x: J.minX(e2), y: J.minY(e2) }, { x: J.minX(e2), y: J.maxY(e2) }, { x: J.maxX(e2), y: J.minY(e2) }, { x: J.maxX(e2), y: J.maxY(e2) }], pointsAtOrigin: (e2) => [{ x: 0, y: 0 }, { x: e2.width, y: 0 }, { x: e2.width, y: e2.height }, { x: 0, y: e2.height }], transform: (e2, t2) => {
    let { x: n2, y: r2 } = t2.transformPoint({ x: e2.x, y: e2.y }), { x: i2, y: a2 } = t2.transformPoint({ x: e2.x + e2.width, y: e2.y }), { x: o2, y: s2 } = t2.transformPoint({ x: e2.x + e2.width, y: e2.y + e2.height }), { x: c2, y: l2 } = t2.transformPoint({ x: e2.x, y: e2.y + e2.height }), u2 = Math.min(n2, i2, o2, c2), d2 = Math.max(n2, i2, o2, c2) - u2, f2 = Math.min(r2, a2, s2, l2);
    return { x: u2, y: f2, width: d2, height: Math.max(r2, a2, s2, l2) - f2 };
  }, containsPoint: (e2, t2) => !(t2.x < J.minX(e2) || t2.x > J.maxX(e2) || t2.y < J.minY(e2) || t2.y > J.maxY(e2) || Number.isNaN(e2.x) || Number.isNaN(e2.y)), containsRect: (e2, t2) => {
    for (let n2 of J.points(t2)) if (!J.containsPoint(e2, n2)) return false;
    return true;
  }, toCSS: (e2) => ({ display: `block`, transform: `translate(${e2.x}px, ${e2.y}px)`, width: `${e2.width}px`, height: `${e2.height}px` }), inset: (e2, t2) => ({ x: e2.x + t2, y: e2.y + t2, width: Math.max(0, e2.width - 2 * t2), height: Math.max(0, e2.height - 2 * t2) }), intersects: (e2, t2) => !(t2.x >= J.maxX(e2) || J.maxX(t2) <= e2.x || t2.y >= J.maxY(e2) || J.maxY(t2) <= e2.y), overlapHorizontally: (e2, t2) => {
    let n2 = J.maxX(e2), r2 = J.maxX(t2);
    return n2 > t2.x && r2 > e2.x;
  }, overlapVertically: (e2, t2) => {
    let n2 = J.maxY(e2), r2 = J.maxY(t2);
    return n2 > t2.y && r2 > e2.y;
  }, doesNotIntersect: (e2, t2) => t2.find((t3) => J.intersects(t3, e2)) === void 0, isEqual: (e2, t2) => J.equals(e2, t2), cornerPoints: (e2) => {
    let t2 = e2.x, n2 = e2.x + e2.width, r2 = e2.y, i2 = e2.y + e2.height;
    return [{ x: t2, y: r2 }, { x: n2, y: r2 }, { x: n2, y: i2 }, { x: t2, y: i2 }];
  }, midPoints: (e2) => {
    let t2 = e2.x, n2 = e2.x + e2.width / 2, r2 = e2.x + e2.width, i2 = e2.y, a2 = e2.y + e2.height / 2, o2 = e2.y + e2.height;
    return [{ x: n2, y: i2 }, { x: r2, y: a2 }, { x: n2, y: o2 }, { x: t2, y: a2 }];
  }, pointDistance: (e2, t2) => {
    let n2 = 0, r2 = 0;
    return t2.x < e2.x ? n2 = e2.x - t2.x : t2.x > J.maxX(e2) && (n2 = t2.x - J.maxX(e2)), t2.y < e2.y ? r2 = e2.y - t2.y : t2.y > J.maxY(e2) && (r2 = t2.y - J.maxY(e2)), ui.distance({ x: n2, y: r2 }, { x: 0, y: 0 });
  }, delta: (e2, t2) => {
    let n2 = { x: J.minX(e2), y: J.minY(e2) }, r2 = { x: J.minX(t2), y: J.minY(t2) };
    return { x: n2.x - r2.x, y: n2.y - r2.y };
  }, withMinSize: (e2, t2) => {
    let { width: n2, height: r2 } = t2, i2 = e2.width - n2, a2 = e2.height - r2;
    return { width: Math.max(e2.width, n2), height: Math.max(e2.height, r2), x: e2.width < n2 ? e2.x + i2 / 2 : e2.x, y: e2.height < r2 ? e2.y + a2 / 2 : e2.y };
  }, anyPointsOutsideRect: (e2, t2) => {
    let n2 = J.minX(e2), r2 = J.minY(e2), i2 = J.maxX(e2), a2 = J.maxY(e2);
    for (let e3 of t2) if (e3.x < n2 || e3.x > i2 || e3.y < r2 || e3.y > a2) return true;
    return false;
  }, edges: (e2) => {
    let [t2, n2, r2, i2] = J.cornerPoints(e2);
    return [Mv(t2, n2), Mv(n2, r2), Mv(r2, i2), Mv(i2, t2)];
  }, rebaseRectOnto: (e2, t2, n2, r2) => {
    let i2 = { ...e2 };
    switch (n2) {
      case `bottom`:
      case `top`:
        switch (r2) {
          case `start`:
            i2.x = t2.x;
            break;
          case `center`:
            i2.x = t2.x + t2.width / 2 - e2.width / 2;
            break;
          case `end`:
            i2.x = t2.x + t2.width - e2.width;
            break;
          default:
            V(r2);
        }
        break;
      case `left`:
        i2.x = t2.x - e2.width;
        break;
      case `right`:
        i2.x = t2.x + t2.width;
        break;
      default:
        V(n2);
    }
    switch (n2) {
      case `left`:
      case `right`:
        switch (r2) {
          case `start`:
            i2.y = t2.y;
            break;
          case `center`:
            i2.y = t2.y + t2.height / 2 - e2.height / 2;
            break;
          case `end`:
            i2.y = t2.y + t2.height - e2.height;
            break;
          default:
            V(r2);
        }
        break;
      case `top`:
        i2.y = t2.y - e2.height;
        break;
      case `bottom`:
        i2.y = t2.y + t2.height;
        break;
      default:
        V(n2);
    }
    return i2;
  }, constrain: (e2, t2) => {
    if (!t2) return e2;
    let n2 = Math.max(e2.y, t2.y);
    n2 = Math.min(n2, t2.y + t2.height - e2.height);
    let r2 = Math.max(e2.x, t2.x);
    return r2 = Math.min(r2, t2.x + t2.width - e2.width), { x: r2, y: n2, width: e2.width, height: e2.height };
  }, closestEdge: (e2, t2) => {
    let n2 = Mv(t2, J.center(e2)), r2 = J.edges(e2);
    for (let e3 = 0; e3 < r2.length; e3++) {
      let t3 = r2[e3];
      if (t3 && Mv.intersection(n2, t3, true)) {
        let n3 = Nv[e3];
        return B(n3, `Invalid edge name`, Nv), { edge: t3, name: n3 };
      }
    }
  }, closestRect: (e2, t2) => {
    let n2 = 0, r2 = e2[0];
    B(r2, `Rect array is empty`);
    let i2 = J.pointDistance(r2, t2);
    for (let a2 = 1; a2 < e2.length; a2 += 1) {
      let o2 = e2[a2];
      B(o2);
      let s2 = J.pointDistance(o2, t2);
      if (s2 < i2 && (n2 = a2, r2 = o2, i2 = s2), i2 === 0) break;
    }
    return { rect: r2, index: n2 };
  } }, Nv = [`top`, `right`, `bottom`, `left`], Pv = { quickfix: (e2) => ((ia(e2.widthType) || ia(e2.heightType)) && (e2.aspectRatio = null), H(e2.aspectRatio) && (e2.left && e2.right && (e2.widthType = 0), e2.top && e2.bottom && (e2.heightType = 0), e2.left && e2.right && e2.top && e2.bottom && (e2.bottom = false), e2.widthType !== 0 && e2.heightType !== 0 && (e2.heightType = 0)), e2.left && e2.right && ((e2.fixedSize || ia(e2.widthType) || H(e2.maxWidth)) && (e2.right = false), e2.widthType = 0), e2.top && e2.bottom && ((e2.fixedSize || ia(e2.heightType) || H(e2.maxHeight)) && (e2.bottom = false), e2.heightType = 0), e2) }, Fv = { fromProperties: (e2) => {
    let { left: t2, right: n2, top: r2, bottom: i2, width: a2, height: o2, centerX: s2, centerY: c2, aspectRatio: l2, autoSize: u2 } = e2, d2 = Pv.quickfix({ left: H(t2) || ai(t2), right: H(n2) || ai(n2), top: H(r2) || ai(r2), bottom: H(i2) || ai(i2), widthType: aa(a2), heightType: aa(o2), aspectRatio: l2 || null, fixedSize: u2 === true }), f2 = null, p2 = null, m2 = 0, h2 = 0;
    if (d2.widthType !== 0 && typeof a2 == `string`) {
      let e3 = parseFloat(a2);
      a2.endsWith(`fr`) ? (m2 = 3, f2 = e3) : a2 === `auto` ? m2 = 2 : (m2 = 1, f2 = e3 / 100);
    } else a2 !== void 0 && typeof a2 != `string` && (f2 = tv.getNumber(a2));
    if (d2.heightType !== 0 && typeof o2 == `string`) {
      let e3 = parseFloat(o2);
      o2.endsWith(`fr`) ? (h2 = 3, p2 = e3) : o2 === `auto` ? h2 = 2 : (h2 = 1, p2 = parseFloat(o2) / 100);
    } else o2 !== void 0 && typeof o2 != `string` && (p2 = tv.getNumber(o2));
    let g2 = 0.5, _2 = 0.5;
    return s2 && (g2 = parseFloat(s2) / 100), c2 && (_2 = parseFloat(c2) / 100), { left: d2.left ? tv.getNumber(t2) : null, right: d2.right ? tv.getNumber(n2) : null, top: d2.top ? tv.getNumber(r2) : null, bottom: d2.bottom ? tv.getNumber(i2) : null, widthType: m2, heightType: h2, width: f2, height: p2, aspectRatio: d2.aspectRatio || null, centerAnchorX: g2, centerAnchorY: _2 };
  }, toSize: (e2, t2, n2, r2) => {
    let i2 = null, a2 = null, o2 = t2?.sizing ? tv.getNumber(t2?.sizing.width) : null, s2 = t2?.sizing ? tv.getNumber(t2?.sizing.height) : null, c2 = da(e2.left, e2.right);
    if (o2 && H(c2)) i2 = o2 - c2;
    else if (n2 && ia(e2.widthType)) i2 = n2.width;
    else if (H(e2.width)) switch (e2.widthType) {
      case 0:
        i2 = e2.width;
        break;
      case 3:
        i2 = r2 ? r2.freeSpaceInParent.width / r2.freeSpaceUnitDivisor.width * e2.width : null;
        break;
      case 1:
      case 4:
        o2 && (i2 = o2 * e2.width);
        break;
      case 2:
      case 5:
        break;
      default:
        V(e2.widthType);
    }
    let l2 = da(e2.top, e2.bottom);
    if (s2 && H(l2)) a2 = s2 - l2;
    else if (n2 && ia(e2.heightType)) a2 = n2.height;
    else if (H(e2.height)) switch (e2.heightType) {
      case 0:
        a2 = e2.height;
        break;
      case 3:
        a2 = r2 ? r2.freeSpaceInParent.height / r2.freeSpaceUnitDivisor.height * e2.height : null;
        break;
      case 1:
      case 4:
        s2 && (a2 = s2 * e2.height);
        break;
      case 2:
      case 5:
        break;
      default:
        V(e2.heightType);
    }
    return ua(i2, a2, e2, { height: s2 ?? 0, width: o2 ?? 0 }, t2?.viewport);
  }, toRect: (e2, t2 = null, n2 = null, r2 = false, i2 = null) => {
    let a2 = e2.left || 0, o2 = e2.top || 0, { width: s2, height: c2 } = Fv.toSize(e2, t2, n2, i2), l2 = t2?.positioning ?? null, u2 = l2 ? tv.getNumber(l2.width) : null, d2 = l2 ? tv.getNumber(l2.height) : null;
    e2.left === null ? u2 && e2.right !== null ? a2 = u2 - e2.right - s2 : u2 && (a2 = e2.centerAnchorX * u2 - s2 / 2) : a2 = e2.left, e2.top === null ? d2 && e2.bottom !== null ? o2 = d2 - e2.bottom - c2 : d2 && (o2 = e2.centerAnchorY * d2 - c2 / 2) : o2 = e2.top;
    let f2 = { x: a2, y: o2, width: s2, height: c2 };
    return r2 ? J.pixelAligned(f2) : f2;
  } }, Iv = 200, Lv = 200, Rv = p.createContext({ parentSize: 0 }), zv = (e2) => {
    let t2 = ya(), { parentSize: n2, children: r2 } = e2, i2 = p.useMemo(() => ({ parentSize: n2 }), [xa(n2), Sa(n2)]);
    return t2 === 1 ? r2 ? _(O, { children: r2 }) : null : _(Rv.Provider, { value: i2, children: r2 });
  }, Bv = ((e2) => (e2.Boolean = `boolean`, e2.Number = `number`, e2.String = `string`, e2.RichText = `richtext`, e2.FusedNumber = `fusednumber`, e2.Enum = `enum`, e2.SegmentedEnum = `segmentedenum`, e2.Color = `color`, e2.Image = `image`, e2.ResponsiveImage = `responsiveimage`, e2.File = `file`, e2.ComponentInstance = `componentinstance`, e2.Slot = `slot`, e2.Array = `array`, e2.EventHandler = `eventhandler`, e2.ChangeHandler = `changehandler`, e2.Transition = `transition`, e2.BoxShadow = `boxshadow`, e2.Link = `link`, e2.Date = `date`, e2.Object = `object`, e2.Font = `font`, e2.PageScope = `pagescope`, e2.ScrollSectionRef = `scrollsectionref`, e2.CustomCursor = `customcursor`, e2.Border = `border`, e2.Cursor = `cursor`, e2.Padding = `padding`, e2.BorderRadius = `borderradius`, e2.Gap = `gap`, e2.CollectionReference = `collectionreference`, e2.MultiCollectionReference = `multicollectionreference`, e2.TrackingId = `trackingid`, e2.VectorSetItem = `vectorsetitem`, e2.LinkRelValues = `linkrelvalues`, e2.Location = `location`, e2))(Bv || {}), Vv = /Mac/u, Hv = /iPhone|iPod|iPad/iu, Uv = /MacIntel/iu, Wv = /Edg\//u, Gv = /Chrome/u, Kv = /Google Inc/u, qv = /Safari/u, Jv = /Apple Computer/u, Yv = /Firefox\/\d+\.\d+$/u, Xv = /FramerX/u, Zv = /tablet|iPad|Nexus 9/iu, Qv = /mobi/iu, $v = p.createContext(void 0), ey = /* @__PURE__ */ new Set(), ny = `style[data-framer-css-ssr-minified]`, ry = (() => {
    if (!Pa()) return /* @__PURE__ */ new Set();
    let e2 = document.querySelector(ny)?.getAttribute(`data-framer-components`);
    return e2 ? new Set(e2.split(` `)) : /* @__PURE__ */ new Set();
  })(), iy = `data-framer-css-ssr`, ay = (e2, t2, n2) => p.forwardRef((r2, i2) => {
    let { sheet: a2, cache: o2 } = p.useContext($v) ?? {}, s2 = n2;
    if (!Pa()) {
      Ze(t2) && (t2 = t2(q.current(), r2));
      let e3 = Array.isArray(t2) ? t2.join(`
`) : t2;
      sy.add(e3, s2);
    }
    return j(() => {
      s2 && ry.has(s2) || (Ze(t2) ? t2(q.current(), r2) : Array.isArray(t2) ? t2 : t2.split(`
`)).forEach((e3) => e3 && Ba(e3, a2, o2));
    }, []), _(e2, { ...r2, ref: i2 });
  }), oy = class {
    constructor() {
      I(this, `styles`, /* @__PURE__ */ new Set()), I(this, `componentIds`, /* @__PURE__ */ new Set());
    }
    add(e2, t2) {
      this.styles.add(e2), t2 && this.componentIds.add(t2);
    }
    getStyles() {
      return this.styles;
    }
    getComponentIds() {
      return this.componentIds;
    }
    clear() {
      this.styles.clear(), this.componentIds.clear();
    }
  }, sy = new oy(), ly = `flexbox-gap-not-supported`, uy = false, dy = [`[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`, `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`, `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`, `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`, `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`, `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`, `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`, `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`, `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`, `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`, `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`, `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`, `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`, `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`, `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`], fy = ((e2) => (e2.Padding = `--framer-input-padding`, e2.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`, e2.BorderRadiusTopRight = `--framer-input-border-radius-top-right`, e2.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`, e2.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`, e2.CornerShape = `--framer-input-corner-shape`, e2.BorderColor = `--framer-input-border-color`, e2.BorderTopWidth = `--framer-input-border-top-width`, e2.BorderRightWidth = `--framer-input-border-right-width`, e2.BorderBottomWidth = `--framer-input-border-bottom-width`, e2.BorderLeftWidth = `--framer-input-border-left-width`, e2.BorderStyle = `--framer-input-border-style`, e2.Background = `--framer-input-background`, e2.FontFamily = `--framer-input-font-family`, e2.FontWeight = `--framer-input-font-weight`, e2.FontSize = `--framer-input-font-size`, e2.FontColor = `--framer-input-font-color`, e2.FontStyle = `--framer-input-font-style`, e2.FontLetterSpacing = `--framer-input-font-letter-spacing`, e2.FontTextAlignment = `--framer-input-font-text-alignment`, e2.FontLineHeight = `--framer-input-font-line-height`, e2.FontOpenType = `--framer-input-font-open-type-features`, e2.FontVariationAxes = `--framer-input-font-variation-axes`, e2.PlaceholderColor = `--framer-input-placeholder-color`, e2.BoxShadow = `--framer-input-box-shadow`, e2.FocusedBorderColor = `--framer-input-focused-border-color`, e2.FocusedBorderWidth = `--framer-input-focused-border-width`, e2.FocusedBorderStyle = `--framer-input-focused-border-style`, e2.FocusedBackground = `--framer-input-focused-background`, e2.FocusedBoxShadow = `--framer-input-focused-box-shadow`, e2.FocusedTransition = `--framer-input-focused-transition`, e2.BooleanCheckedBackground = `--framer-input-boolean-checked-background`, e2.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`, e2.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`, e2.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`, e2.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`, e2.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`, e2.InvalidTextColor = `--framer-input-invalid-text-color`, e2.IconBackgroundImage = `--framer-input-icon-image`, e2.IconMaskImage = `--framer-input-icon-mask-image`, e2.IconColor = `--framer-input-icon-color`, e2.IconContent = `--framer-input-icon-content`, e2.WrapperHeight = `--framer-input-wrapper-height`, e2))(fy || {}), Y = fy, py = `framer-form-input`, my = `framer-form-input-wrapper`, hy = `framer-form-input-empty`, gy = `framer-form-input-forced-focus`, X = (() => {
    function e2(e3, t2) {
      let n2 = ` `;
      for (let e4 in t2) {
        let r2 = t2[e4];
        B(r2 !== void 0, "Encountered `undefined` in CSSDeclaration"), n2 += `${e4.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Ua(r2)}; `;
      }
      return e3 + ` {` + n2 + `}`;
    }
    return e2.variable = (...e3) => {
      let t2 = e3[e3.length - 1];
      B(t2 !== void 0, "Zero variables passed to `css.variable`");
      let n2 = t2.startsWith(`--`) ? `var(${t2})` : t2;
      for (let t3 = e3.length - 2; t3 >= 0; t3--) n2 = `var(${e3[t3]}, ${n2})`;
      return n2;
    }, e2;
  })(), _y = (() => [X(`.${py}`, { padding: X.variable(Y.Padding), background: `transparent`, fontFamily: X.variable(Y.FontFamily), fontWeight: X.variable(Y.FontWeight), fontSize: X.variable(Y.FontSize), fontStyle: X.variable(Y.FontStyle), color: X.variable(Y.FontColor), fontFeatureSettings: X.variable(Y.FontOpenType), fontVariationSettings: X.variable(Y.FontVariationAxes), border: `none`, textOverflow: `ellipsis`, whiteSpace: `nowrap`, overflow: `hidden`, width: `100%`, height: X.variable(Y.WrapperHeight, `100%`), letterSpacing: X.variable(Y.FontLetterSpacing), textAlign: X.variable(Y.FontTextAlignment), lineHeight: X.variable(Y.FontLineHeight) }), X(`.${py}:focus-visible`, { outline: `none` })])(), vy = (() => [X(`.${my}`, { overflow: `hidden` })])(), yy = `var(${Y.BorderTopWidth}) var(${Y.BorderRightWidth}) var(${Y.BorderBottomWidth}) var(${Y.BorderLeftWidth})`, by = (() => [`.${my}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Y.BorderRadiusTopLeft});
        border-top-right-radius: var(${Y.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Y.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Y.BorderRadiusBottomLeft});
        corner-shape: var(${Y.CornerShape});
        border-color: var(${Y.BorderColor});
        border-top-width: var(${Y.BorderTopWidth});
        border-right-width: var(${Y.BorderRightWidth});
        border-bottom-width: var(${Y.BorderBottomWidth});
        border-left-width: var(${Y.BorderLeftWidth});
        border-style: var(${Y.BorderStyle});
        transition: var(${Y.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`])(), xy = `customError`, Sy = `valid`, Cy = 10, wy = 8, Ty = 16, Ey = (() => ({ backgroundRepeat: `no-repeat`, backgroundSize: `${Ty}px`, maskRepeat: `no-repeat`, maskSize: `${Ty}px`, backgroundColor: X.variable(Y.IconColor) }))(), Dy = (() => ({ content: ``, display: `block`, position: `absolute`, right: 0, top: 0, bottom: 0, width: `${Ty}px`, boxSizing: `content-box`, padding: X.variable(Y.Padding), border: `none`, pointerEvents: `none`, ...Ey }))(), Oy = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }, ky = { display: `inline-block` }, Ay = { display: `block` }, jy = (() => [`
        [data-framer-component-type="RichTextContainer"] {
            display: ${Oy.display};
            flex-direction: ${Oy.flexDirection};
            justify-content: ${Oy.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `, `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${qa([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${qa([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${qa([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `, `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: ${ky.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${qa([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `, `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${qa([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${qa([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${qa([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `, `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`, `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${qa([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `, `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${qa([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${qa([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${qa([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${qa([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${qa([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${qa([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${qa([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${qa([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${qa([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${qa([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${qa([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${qa([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${qa([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${qa([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `, `
        .framer-image.framer-text {
            display: ${Ay.display};
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `, `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "\u2022";
        }
    `, `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `, `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `, `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `, `
        ${Ja(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `])(), My = `--text-truncation-display-inline-for-safari-16`, Ny = `--text-truncation-display-none-for-safari-16`, Py = `--text-truncation-line-break-for-safari-16`, Fy = [`div.framer-text`, `p.framer-text`, `h1.framer-text`, `h2.framer-text`, `h3.framer-text`, `h4.framer-text`, `h5.framer-text`, `h6.framer-text`, `ol.framer-text`, `ul.framer-text`, `li.framer-text`, `blockquote.framer-text`, `.framer-text.framer-image`], Iy = `(background: -webkit-named-image(i))`, Ly = `(contain-intrinsic-size: inherit)`, Ry = (() => [`@supports ${Iy} and (not ${Ly}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Fy.join(`, `)} { display: var(${My}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Fy.map((e2) => `${e2}::after`).join(`, `)} { content: var(${Py}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Ny}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${My}, ${ky.display}) }
    }`])(), zy = [`[data-framer-component-type] { position: absolute; }`], By = [`[data-framer-component-type="Text"] { cursor: inherit; }`, `[data-framer-component-text-autosized] * { white-space: pre; }`, `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`, `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`, `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`, `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`, `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`, `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`, `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`, `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`], Vy = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`, Hy = (() => [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${ly} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`])(), Uy = (() => `
.${ly} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(), Wy = (() => `
.${ly}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${ly}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(), Gy = (() => `
.${ly}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${ly}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(), Ky = (() => [Vy, Uy, ...Hy, Wy, Gy])(), qy = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`], Jy = [`[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`, `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`], Yy = [`[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`, `[data-framer-component-type="NativeScroll"] > * { position: relative; }`, `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`, `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`, `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`], Xy = [`[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`], Zy = [`[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`], Qy = [`[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`], $y = [`.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`], eb = [`[data-framer-cursor="pointer"] { cursor: pointer; }`, `[data-framer-cursor="grab"] { cursor: grab; }`, `[data-framer-cursor="grab"]:active { cursor: grabbing; }`], tb = [`[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`, `[data-framer-generated] * { pointer-events: unset }`], nb = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`], rb = [`[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`, `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`, `[data-hide-scrollbars="true"] { scrollbar-width: none; }`], ib = `--framer-will-change-override`, ab = `--framer-will-change-effect-override`, ob = `--framer-will-change-filter-override`, sb = `(background: -webkit-named-image(i))`, cb = `(grid-template-rows: subgrid)`, lb = `(position-area: top right)`, ub = (e2) => e2 ? [`body { ${ib}: none; }`, `@supports ${sb} and (not ${cb}) { body { ${ib}: transform; } }`] : [`body { ${ib}: none; ${ab}: none; }`], db = (e2) => e2 ? [`body { ${ob}: none; }`, `@supports ${sb} and (not ${lb}) { body { ${ob}: filter; } }`] : [`body { ${ob}: none; }`], fb = (e2) => e2 ? tb : [], pb = [`.svgContainer svg { display: block; }`], mb = `--overflow-clip-fallback`, hb = (() => [`@supports (not (overflow: clip)) {
        :root { ${mb}: hidden; }
    }`])(), gb = `--one-if-corner-shape-supported`, _b = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${gb}: 1 } }`])(), vb = (e2) => [...ub(e2), ...db(e2), ...zy, ...By, ...jy, ...dy, ...Ky, ...qy, ...Jy, ...Yy, ...Zy, ...Xy, ...Qy, ...eb, ...fb(e2), ...pb, ...nb, ...rb, ...hb, ...$y, ...Ry, ..._b], yb = vb(false), bb = vb(true), xb = `optional`, Sb = (e2) => e2, Cb = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u, wb = so((e2) => Cb.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91), Tb = (e2) => () => {
    ri(e2);
  }, Eb = () => () => {
  }, Db = { imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`, useImageSource(e2) {
    return e2.src ?? ``;
  }, useImageElement(e2, t2, n2) {
    let r2 = kb.useImageSource(e2, t2, n2);
    return c(() => {
      let t3 = new Image();
      return t3.src = r2, e2.srcSet && (t3.srcset = e2.srcSet), t3;
    }, [r2, e2.srcSet]);
  }, canRenderOptimizedCanvasImage() {
    return false;
  }, isOnPageCanvas: false }, Ob = false, kb = new Proxy(Db, { get(e2, t2, n2) {
    return Reflect.has(e2, t2) ? Reflect.get(e2, t2, n2) : [`getLogger`].includes(String(t2)) ? Eb() : Tb(Ob ? `${String(t2)} is not available in this version of Framer.` : `${String(t2)} is only available inside of Framer. https://www.framer.com/`);
  } }), Ab = { borderRadius: `inherit`, cornerShape: `inherit` }, jb = [1, 2, 2.2], Mb = [512, 1024, 2048, 4096], Nb = 512, Pb = (() => ({ position: `absolute`, ...Ab, top: 0, right: 0, bottom: 0, left: 0 }))(), Fb = `src`, Ib = { isImageObject: function(e2) {
    return !e2 || typeof e2 == `string` ? false : typeof e2 == `object` && Fb in e2;
  } }, Lb = ja(), Rb = typeof document < `u` ? r : d, zb = p.createContext(false), Bb = class {
    constructor() {
      I(this, `sharedResizeObserver`), I(this, `callbacks`, /* @__PURE__ */ new WeakMap()), this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e2) {
      for (let t2 of e2) {
        let e3 = this.callbacks.get(t2.target);
        e3 && e3(t2.contentRect);
      }
    }
    observeElementWithCallback(e2, t2) {
      this.sharedResizeObserver.observe(e2), this.callbacks.set(e2, t2);
    }
    unobserve(e2) {
      this.sharedResizeObserver.unobserve(e2), this.callbacks.delete(e2);
    }
  }, Vb = (() => Pa() ? new Bb() : void 0)(), Hb = `data-framer-size-compatibility-wrapper`, Ub = `0.000001px`, Wb = (() => ` translateZ(${Ub})`)(), Gb = (() => Fa() || Ma() || Ia())(), Kb = (() => {
    class e2 extends v {
      constructor() {
        super(...arguments), I(this, `layerElement`, null), I(this, `setLayerElement`, (e3) => {
          this.layerElement = e3;
        });
      }
      static applyWillChange(e3, t2, n2) {
        e3.willChangeTransform && (n2 ? Ho(t2) : Uo(t2));
      }
      shouldComponentUpdate(e3, t2) {
        return e3._needsMeasure || this.state !== t2 || !Et(this.props, e3);
      }
      componentDidUpdate(e3) {
        Sb(this.props).clip && Sb(this.props).radius === 0 && Sb(e3).radius !== 0 && Go(this.layerElement, `overflow`, `hidden`, false);
      }
    }
    return I(e2, `defaultProps`, {}), e2;
  })(), qb = (e2) => {
    let t2 = 0, n2, r2;
    if (e2.length === 0) return t2;
    for (n2 = 0; n2 < e2.length; n2++) r2 = e2.charCodeAt(n2), t2 = (t2 << 5) - t2 + r2, t2 |= 0;
    return t2;
  }, Jb = { hueRotate: (e2, t2) => K.toHslString(K.hueRotate(K(e2), t2)), setAlpha: (e2, t2) => K.toRgbString(K.alpha(K(e2), t2)), getAlpha: (e2) => {
    let t2 = ki(e2);
    return t2 ? t2.a : 1;
  }, multiplyAlpha: (e2, t2) => K.toRgbString(K.multiplyAlpha(K(e2), t2)), toHexValue: (e2) => K.toHex(K(e2)).toUpperCase(), toHex: (e2) => K.toHexString(K(e2)).toUpperCase(), toRgb: (e2) => K.toRgb(K(e2)), toRgbString: (e2) => K.toRgbString(K(e2)), toHSV: (e2) => K.toHsv(K(e2)), toHSL: (e2) => K.toHsl(K(e2)), toHslString: (e2) => K.toHslString(K(e2)), toHsvString: (e2) => K.toHsvString(K(e2)), hsvToHSLString: (e2) => K.toHslString(K(_i(e2.h, e2.s, e2.v, e2.a))), hsvToHexValue: (e2) => K.toHex(K(_i(e2.h, e2.s, e2.v, e2.a))).toUpperCase(), hsvToHex: (e2) => K.toHexString(K(_i(e2.h, e2.s, e2.v, e2.a))).toUpperCase(), hsvToRgbString: (e2) => K.toRgbString(K(_i(e2.h, e2.s, e2.v, e2.a))), hsvToString: (e2) => _i(e2.h, e2.s, e2.v), rgbaToString: (e2) => K.toRgbString(K(e2)), rgbToHexValue: (e2) => K.toHex(K(e2)), rgbToHexString: (e2) => K.toHexString(K(e2)), hslToString: (e2) => K.toHslString(K(e2)), hslToRgbString: (e2) => K.toRgbString(K(e2)), toColorPickerSquare: (e2) => K.toRgbString(K({ h: e2, s: 1, l: 0.5, a: 1 })), isValid: (e2) => K(e2).isValid !== false, equals: (e2, t2) => K.isP3String(e2) || K.isP3String(t2) ? e2 === t2 : (typeof e2 == `string` && (e2 = K(e2)), typeof t2 == `string` && (t2 = K(t2)), K.equal(e2, t2)), toHexOrRgbaString: (e2) => {
    let t2 = K(e2);
    return t2.a === 1 ? K.toHexString(t2) : K.toRgbString(t2);
  }, toFormatString: (e2) => K.isP3String(e2) ? e2 : K.toRgbString(K(e2)) }, Yb = /var\(.+\)/u, Xb = /* @__PURE__ */ new Map(), Zb = [`stops`], Qb = [`start`, `end`], $b = [`angle`, `alpha`], ex = { isLinearGradient: (e2) => z(e2) && $b.every((t2) => t2 in e2) && ($o(e2) || Qo(e2)), hash: (e2) => e2.angle ^ Zo(e2, e2.alpha), toCSS: (e2, t2, n2) => {
    let r2 = Xo(e2, e2.alpha), i2 = t2 === void 0 ? e2.angle : t2;
    return `linear-gradient(${Math.round(i2)}deg, ${r2.map((e3) => `${n2?.(e3.value) ?? e3.value} ${e3.position * 100}%`).join(`, `)})`;
  } }, tx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`], nx = { isRadialGradient: (e2) => z(e2) && tx.every((t2) => t2 in e2) && ($o(e2) || Qo(e2)), hash: (e2) => e2.centerAnchorX ^ e2.centerAnchorY ^ e2.widthFactor ^ e2.heightFactor ^ Zo(e2, e2.alpha), toCSS: (e2, t2) => {
    let { alpha: n2, widthFactor: r2, heightFactor: i2, centerAnchorX: a2, centerAnchorY: o2 } = e2, s2 = Xo(e2, n2), c2 = s2.map((e3, n3) => {
      let r3 = s2[n3 + 1], i3 = e3.position === 1 && r3?.position === 1 ? e3.position - 1e-4 : e3.position;
      return `${t2?.(e3.value) ?? e3.value} ${i3 * 100}%`;
    });
    return `radial-gradient(${r2 * 100}% ${i2 * 100}% at ${a2 * 100}% ${o2 * 100}%, ${c2.join(`, `)})`;
  } }, rx = [`onClick`, `onDoubleClick`, `onMouse`, `onMouseDown`, `onMouseUp`, `onTapDown`, `onTap`, `onTapUp`, `onPointer`, `onPointerDown`, `onPointerUp`, `onTouch`, `onTouchDown`, `onTouchUp`], ix = (() => /* @__PURE__ */ new Set([...rx, ...rx.map((e2) => `${e2}Capture`)]))(), ax = `overflow`, ox = { x: 0, y: 0, width: 200, height: 200 }, sx = /* @__PURE__ */ new Set([`width`, `height`, `opacity`, `overflow`, `radius`, `background`, `color`, `x`, `y`, `z`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `scale`, `scaleX`, `scaleY`, `skew`, `skewX`, `skewY`, `originX`, `originY`, `originZ`]), cx = b(function(e2, t2) {
    let { name: n2, center: r2, border: i2, _border: a2, __portal: o2 } = e2, { props: s2, children: c2 } = Mo(e2), l2 = us(s2), u2 = Po(e2), d2 = as(e2), f2 = w(null), p2 = t2 ?? f2, m2 = { "data-framer-component-type": e2.componentType ?? `Frame`, "data-framer-cursor": d2, "data-framer-highlight": d2 === `pointer` ? true : void 0, "data-layoutid": u2, "data-framer-offset-parent-id": Sb(e2)[`data-framer-offset-parent-id`] };
    !ds(e2) && n2 && (Sb(m2)[`data-framer-name`] = n2);
    let [h2, g2] = ls(s2), v2 = cs(s2), y2 = Ta(v2);
    r2 && !(g2 && !y2 && pa(v2)) ? (l2.transformTemplate ||= No(r2), Object.assign(m2, Ao(r2))) : l2.transformTemplate ||= void 0, Bo(e2, p2);
    let b2 = Eo(e2), x2 = fs(s2, v2, g2, C(zb)), S2 = Ca(T(O, { children: [b2 ? _(So, { alt: e2.alt ?? ``, image: b2, containerSize: g2 ?? void 0, nodeId: e2.id && jo(e2.id), layoutId: u2 }) : null, c2, _(wo, { ...a2, border: i2, layoutId: u2 })] }), x2), E2 = Oo(e2.as), D2 = Do(b2);
    return e2.fitImageDimension && D2 && (h2[e2.fitImageDimension] = `auto`, h2.aspectRatio = D2.width / D2.height), T(E2, { ...m2, ...l2, layoutId: u2, style: h2, ref: p2, children: [S2, o2] });
  }), lx = Xa(b(function(e2, t2) {
    let { visible: n2 = true } = e2;
    return n2 ? _(cx, { ...e2, ref: t2 }) : null;
  })), ux = `__LAYOUT_TREE_ROOT`, dx = p.createContext({ schedulePromoteTree: () => {
  }, scheduleProjectionDidUpdate: () => {
  }, initLead: () => {
  } }), fx = class extends v {
    constructor() {
      super(...arguments), I(this, `shouldAnimate`, false), I(this, `transition`), I(this, `lead`), I(this, `follow`), I(this, `scheduledPromotion`, false), I(this, `scheduledDidUpdate`, false), I(this, `scheduleProjectionDidUpdate`, () => {
        this.scheduledDidUpdate = true;
      }), I(this, `schedulePromoteTree`, (e2, t2, n2) => {
        this.follow = this.lead, this.shouldAnimate = n2, this.lead = e2, this.transition = t2, this.scheduledPromotion = true;
      }), I(this, `initLead`, (e2, t2) => {
        this.follow = this.lead, this.lead = e2, this.follow && t2 && (this.follow.layoutMaybeMutated = true);
      }), I(this, `sharedLayoutContext`, { schedulePromoteTree: this.schedulePromoteTree, scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate, initLead: this.initLead });
    }
    getSnapshotBeforeUpdate() {
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let e2 = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
      return this.lead.projectionNodes.forEach((t2) => {
        t2?.promote({ needsReset: e2, transition: this.shouldAnimate ? this.transition : void 0, preserveFollowOpacity: t2.options.layoutId === ux && !this.follow?.isExiting });
      }), this.shouldAnimate ? this.follow.layoutMaybeMutated = true : this.scheduleProjectionDidUpdate(), this.lead.layoutMaybeMutated = false, this.transition = void 0, this.scheduledPromotion = false, null;
    }
    componentDidUpdate() {
      if (!this.lead) return null;
      this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), false);
    }
    render() {
      return _(dx.Provider, { value: this.sharedLayoutContext, children: this.props.children });
    }
  }, px = { width: `100%`, height: `100%`, backgroundColor: `none` }, mx = class {
    constructor(e2) {
      I(this, `sharedIntersectionObserver`), I(this, `callbacks`, /* @__PURE__ */ new WeakMap()), this.sharedIntersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this), e2);
    }
    intersectionObserverCallback(e2, t2) {
      for (let n2 of e2) {
        let e3 = this.callbacks.get(n2.target);
        e3 && e3(n2, t2);
      }
    }
    observeElementWithCallback(e2, t2) {
      this.sharedIntersectionObserver && (this.sharedIntersectionObserver.observe(e2), this.callbacks.set(e2, t2));
    }
    unobserve(e2) {
      this.sharedIntersectionObserver && (this.sharedIntersectionObserver.unobserve(e2), this.callbacks.delete(e2));
    }
    get root() {
      return this.sharedIntersectionObserver?.root;
    }
  }, hx = s(/* @__PURE__ */ new Map()), gx = typeof IntersectionObserver > `u` ? Jh : bs, _x = Array(100).fill(void 0).map((e2, t2) => t2 * 0.01), vx = p.createContext(null), yx = class extends v {
    constructor() {
      super(...arguments), I(this, `layoutMaybeMutated`, false), I(this, `projectionNodes`, /* @__PURE__ */ new Map()), I(this, `rootProjectionNode`), I(this, `isExiting`), I(this, `shouldPreserveFollowOpacity`, (e2) => e2.options.layoutId === ux && !this.props.isExiting), I(this, `switchLayoutGroupContext`, { register: (e2) => this.addChild(e2), deregister: (e2) => this.removeChild(e2), transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0, shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity });
    }
    componentDidMount() {
      this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
    }
    shouldComponentUpdate(e2) {
      let { isLead: t2, isExiting: n2, isOverlayed: r2, animatesLayout: i2, transition: a2, sharedLayoutContext: o2 } = e2;
      if (this.isExiting = n2, t2 === void 0) return true;
      let s2 = !this.props.isLead && t2, c2 = this.props.isExiting && !n2, l2 = s2 || c2, u2 = !!this.props.isLead && !t2, d2 = this.props.isOverlayed !== r2;
      return (l2 || u2) && this.projectionNodes.forEach((e3) => e3?.willUpdate()), l2 ? o2.schedulePromoteTree(this, a2, !!i2) : d2 && o2.scheduleProjectionDidUpdate(), !!l2 && !!i2;
    }
    addChild(e2) {
      let t2 = e2.options.layoutId;
      t2 && (this.projectionNodes.set(t2, e2), this.setRootChild(e2));
    }
    setRootChild(e2) {
      if (!this.rootProjectionNode) return this.rootProjectionNode = e2;
      this.rootProjectionNode = this.rootProjectionNode.depth < e2.depth ? this.rootProjectionNode : e2;
    }
    removeChild(e2) {
      let t2 = e2.options.layoutId;
      t2 && this.projectionNodes.delete(t2);
    }
    render() {
      return _(Oe.Provider, { value: this.switchLayoutGroupContext, children: this.props.children });
    }
  }, bx = (e2) => {
    let t2 = p.useContext(dx);
    return _(yx, { ...e2, sharedLayoutContext: t2 });
  }, xx = p.createContext(true), Sx = s({ register: () => {
  }, deregister: () => {
  } }), Cx = ({ isCurrent: e2, isOverlayed: t2, children: n2 }) => {
    let r2 = Es(), i2 = w({ register: l((e3) => {
      if (r2.has(e3)) {
        console.warn(`NavigationTargetWrapper: already registered`);
        return;
      }
      r2.set(e3, void 0);
    }, [r2]), deregister: l((e3) => {
      r2.get(e3)?.(), r2.delete(e3);
    }, [r2]) }).current;
    return d(() => (r2.forEach((n3, i3) => {
      let a2 = i3(e2, t2);
      r2.set(i3, Ze(a2) ? a2 : void 0);
    }), () => {
      r2.forEach((e3, t3) => {
        e3 && (e3(), r2.set(t3, void 0));
      });
    }), [e2, t2, r2]), _(Sx.Provider, { value: i2, children: n2 });
  }, wx = p.memo(function({ isLayeredContainer: e2, isCurrent: t2, isPrevious: n2, isOverlayed: r2 = false, visible: i2, transitionProps: a2, children: o2, backdropColor: s2, onTapBackdrop: c2, backfaceVisible: l2, exitBackfaceVisible: u2, animation: f2, exitAnimation: p2, instant: m2, initialProps: h2, exitProps: g2, position: v2 = { top: 0, right: 0, bottom: 0, left: 0 }, withMagicMotion: y2, index: b2, areMagicMotionLayersPresent: x2, id: S2, isInitial: E2 }) {
    let D2 = he(), O2 = C(Ge), { persistLayoutIdCache: k2 } = C(Ev), A2 = w({ wasCurrent: void 0, wasPrevious: false, wasBeingRemoved: false, wasReset: true, origins: ks({}, h2, a2) }), j2 = w(null), ee2 = O2 !== null && !O2.isPresent;
    t2 && A2.current.wasCurrent === void 0 && k2(), d(() => {
      if (e2 || !D2) return;
      if (ee2) {
        A2.current = { ...A2.current, wasBeingRemoved: ee2 };
        return;
      }
      let { wasPrevious: r3, wasCurrent: i3 } = A2.current, o3 = t2 && !i3 || !ee2 && A2.current.wasBeingRemoved && t2, s3 = n2 && !r3, c3 = ks(A2.current.origins, h2, a2), l3 = A2.current.wasReset;
      o3 || s3 ? (D2.stop(), D2.start({ zIndex: b2, ...c3, ...a2 }), l3 = false) : l3 === false && (D2.stop(), D2.set({ zIndex: b2, ...Tx, opacity: 0 }), l3 = true), A2.current = { wasCurrent: !!t2, wasPrevious: !!n2, wasBeingRemoved: false, wasReset: l3, origins: c3 };
    }, [t2, n2, ee2]);
    let te2 = m2 ? { type: false } : `velocity` in f2 ? { ...f2, velocity: 0 } : f2, ne2 = m2 ? { type: false } : p2 || f2, M2 = { ...v2 };
    (M2.left === void 0 || M2.right === void 0) && (M2.width = `auto`), (M2.top === void 0 || M2.bottom === void 0) && (M2.height = `auto`);
    let re2 = (As(a2) || As(h2)) && (e2 || t2 || n2) ? 1200 : void 0, ie2 = { ...Tx, ...A2.current.origins }, ae2 = e2 ? { initial: { ...ie2, ...h2 }, animate: { ...ie2, ...a2, transition: te2 }, exit: { ...ie2, ...g2, transition: f2 } } : { animate: D2, exit: { ...ie2, ...g2, transition: ne2 } }, oe2 = !(ee2 || x2 === false), se2 = !!t2 && oe2, ce2 = t2 && E2;
    return T(lx, { "data-framer-component-type": `NavigationContainerWrapper`, width: `100%`, height: `100%`, style: { position: `absolute`, transformStyle: `flat`, backgroundColor: `transparent`, overflow: `hidden`, zIndex: e2 || ee2 || t2 && y2 ? b2 : void 0, pointerEvents: void 0, visibility: i2 ? `visible` : `hidden`, perspective: re2 }, children: [e2 && _(lx, { width: `100%`, height: `100%`, "data-framer-component-type": `NavigationContainerBackdrop`, transition: f2, initial: { opacity: m2 && i2 ? 1 : 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, backgroundColor: s2 || `transparent`, onTap: ee2 ? void 0 : c2 }), _(lx, { ...M2, ...ae2, transition: { default: te2, originX: { type: false }, originY: { type: false }, originZ: { type: false } }, backgroundColor: `transparent`, backfaceVisible: ee2 ? u2 : l2, "data-framer-component-type": `NavigationContainer`, "data-framer-is-current-navigation-target": !!t2, style: { pointerEvents: void 0, opacity: ce2 || e2 || t2 && y2 ? 1 : 0 }, "data-is-present": oe2 ? void 0 : false, ref: j2, children: _(vx.Provider, { value: j2, children: _(xx.Provider, { value: se2, children: _(Cx, { isCurrent: se2, isOverlayed: r2, children: _(bx, { isLead: t2, animatesLayout: !!y2, transition: te2, isExiting: !oe2, isOverlayed: r2, id: S2, children: o2 }) }) }) }) })] });
  }, Os), Tx = { x: 0, y: 0, z: 0, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: 0.5, originY: 0.5, originZ: 0, opacity: 1 }, Ex = class {
    constructor() {
      I(this, `warning`, () => {
        ri(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
      }), I(this, `goBack`, () => this.warning()), I(this, `instant`, () => this.warning()), I(this, `fade`, () => this.warning()), I(this, `push`, () => this.warning()), I(this, `modal`, () => this.warning()), I(this, `overlay`, () => this.warning()), I(this, `flip`, () => this.warning()), I(this, `customTransition`, () => this.warning()), I(this, `magicMotion`, () => this.warning());
    }
  }, Dx = s(new Ex()), Ox = { Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } }, PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } }, PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } }, PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } }, PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } }, Instant: { animation: { type: false }, enter: { opacity: 0 } }, Modal: { overCurrentContext: true, goBackOnTapOutside: true, position: { center: true }, enter: { opacity: 0, scale: 1.2 } }, OverlayLeft: { overCurrentContext: true, goBackOnTapOutside: true, position: { right: 0, top: 0, bottom: 0 }, enter: { x: `100%` } }, OverlayRight: { overCurrentContext: true, goBackOnTapOutside: true, position: { left: 0, top: 0, bottom: 0 }, enter: { x: `-100%` } }, OverlayUp: { overCurrentContext: true, goBackOnTapOutside: true, position: { bottom: 0, left: 0, right: 0 }, enter: { y: `100%` } }, OverlayDown: { overCurrentContext: true, goBackOnTapOutside: true, position: { top: 0, left: 0, right: 0 }, enter: { y: `-100%` } }, FlipLeft: { backfaceVisible: false, exit: { rotateY: -180 }, enter: { rotateY: 180 } }, FlipRight: { backfaceVisible: false, exit: { rotateY: 180 }, enter: { rotateY: -180 } }, FlipUp: { backfaceVisible: false, exit: { rotateX: 180 }, enter: { rotateX: -180 } }, FlipDown: { backfaceVisible: false, exit: { rotateX: -180 }, enter: { rotateX: 180 } }, MagicMotion: { withMagicMotion: true } }, kx = () => ({ current: -1, previous: -1, currentOverlay: -1, previousOverlay: -1, visualIndex: 0, overlayItemId: 0, historyItemId: 0, history: [], overlayStack: [], containers: {}, containerIndex: {}, containerVisualIndex: {}, containerIsRemoved: {}, transitionForContainer: {}, previousTransition: null }), Ax = ag(Tx), jx = p.createContext(void 0), Mx = p.createContext(void 0), Nx = (() => {
    var e2, t2, n2, r2, i2, a2, o2;
    return t2 = class extends v {
      constructor(t3) {
        super(t3), Ce(this, n2), Ce(this, e2, null), I(this, `state`, kx()), Ce(this, a2, (e3) => {
          if (!this.props.enabled && this.state.history.length > 0) return;
          let t4 = Ps(this.state, e3);
          if (!t4) return;
          let { skipLayoutAnimation: n3 } = this.props, r4 = t4.history[t4.current], i3 = e3.type === `add` && e3.transition.withMagicMotion || e3.type === `forward` && r4?.transition.withMagicMotion || e3.type === `remove` && !!t4.previousTransition, a3 = () => {
            this.setState(t4), r4?.key && this.context?.(r4.key);
          };
          n3 && !i3 ? n3(a3) : a3();
        }), I(this, `goBack`, () => {
          if (!M(this, n2, i2).call(this)) return ke(this, e2, globalThis.event?.timeStamp || null), this.state.currentOverlay === -1 ? P(this, a2).call(this, { type: `remove` }) : P(this, a2).call(this, { type: `removeOverlay` });
        });
        let r3 = this.props.children;
        if (!r3 || !na(r3) || !ta(r3)) return;
        let o3 = { ...Ox.Instant }, s2 = { type: `add`, key: r3.key?.toString() || `stack-${this.state.historyItemId + 1}`, transition: o3, component: r3 }, c2 = Ps(this.state, s2);
        c2 && (this.state = c2);
      }
      componentDidMount() {
        let e3 = this.state.history[this.state.current];
        e3 && this.context?.(e3.key);
      }
      UNSAFE_componentWillReceiveProps(e3) {
        let t3 = e3.children;
        if (!na(t3) || !ta(t3)) return;
        let r3 = t3.key?.toString();
        r3 && (this.state.history.length === 0 ? M(this, n2, o2).call(this, t3, Ox.Instant) : P(this, a2).call(this, { type: `update`, key: r3, component: t3 }));
      }
      componentWillUnmount() {
        this.props.resetProjection?.();
      }
      instant(e3) {
        M(this, n2, o2).call(this, e3, Ox.Instant, void 0);
      }
      fade(e3, t3) {
        M(this, n2, o2).call(this, e3, Ox.Fade, t3);
      }
      push(e3, t3) {
        M(this, n2, o2).call(this, e3, js(t3), t3);
      }
      modal(e3, t3) {
        M(this, n2, o2).call(this, e3, Ox.Modal, t3);
      }
      overlay(e3, t3) {
        M(this, n2, o2).call(this, e3, Ms(t3), t3);
      }
      flip(e3, t3) {
        M(this, n2, o2).call(this, e3, Ns(t3), t3);
      }
      magicMotion(e3, t3) {
        M(this, n2, o2).call(this, e3, Ox.MagicMotion, t3);
      }
      customTransition(e3, t3) {
        M(this, n2, o2).call(this, e3, t3);
      }
      render() {
        let e3 = M(this, n2, r2).call(this, { overCurrentContext: false }), t3 = M(this, n2, r2).call(this, { overCurrentContext: true }), i3 = Ys(t3), a3 = t3.current > -1, o3 = this.state.history.length === 1, s2 = [];
        for (let [t4, n3] of Object.entries(this.state.containers)) {
          let r3 = this.state.containerIndex[t4];
          B(r3 !== void 0, `Container's index must be registered`);
          let i4 = this.state.containerVisualIndex[t4];
          B(i4 !== void 0, `Container's visual index must be registered`);
          let c3 = this.state.containerIsRemoved[t4], l2 = this.state.history[r3], u2 = this.state.transitionForContainer[t4], d2 = r3 === this.state.current, f2 = r3 === this.state.previous, p2 = d2 ? false : c3, m2 = l2?.transition?.withMagicMotion || d2 && !!this.state.previousTransition;
          s2.push(_(wx, { id: t4, index: i4, isInitial: o3, isCurrent: d2, isPrevious: f2, isOverlayed: a3, visible: d2 || f2, position: l2?.transition?.position, instant: ac(r3, e3), transitionProps: u2, animation: ic(r3, e3), backfaceVisible: nc(r3, e3), exitAnimation: l2?.transition?.animation, exitBackfaceVisible: l2?.transition?.backfaceVisible, exitProps: l2?.transition?.enter, withMagicMotion: m2, areMagicMotionLayersPresent: p2 ? false : void 0, children: _(ps, { children: sc({ component: n3, transition: l2?.transition }) }) }, t4));
        }
        let c2 = this.state.overlayStack.map((e4, n3) => _(wx, { isLayeredContainer: true, isCurrent: n3 === this.state.currentOverlay, position: e4.transition.position, initialProps: tc(n3, t3), transitionProps: rc(n3, t3), instant: ac(n3, t3, true), animation: ic(n3, t3), exitProps: e4.transition.enter, visible: oc(n3, t3), backdropColor: $s(e4.transition), backfaceVisible: ec(n3, t3), onTapBackdrop: cc(e4.transition, this.goBack), index: this.state.current + 1 + n3, children: sc({ component: e4.component, transition: e4.transition }) }, e4.key));
        return _(lx, { "data-framer-component-type": `NavigationRoot`, top: 0, left: 0, width: `100%`, height: `100%`, position: `relative`, style: { overflow: `hidden`, backgroundColor: `unset`, pointerEvents: void 0, ...this.props.style }, children: _(Dx.Provider, { value: this, children: T(Mx.Provider, { value: o3, children: [_(wx, { isLayeredContainer: true, position: void 0, initialProps: {}, instant: false, transitionProps: Xs(i3), animation: Zs(i3), backfaceVisible: Qs(i3), visible: true, backdropColor: void 0, onTapBackdrop: void 0, index: 0, children: _(Ji, { children: _(fx, { children: _(Ne, { presenceAffectsLayout: false, children: s2 }) }) }) }), _(Ne, { children: c2 })] }) }) });
      }
    }, e2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakSet(), r2 = function(e3) {
      let { current: t3, previous: n3, currentOverlay: r3, previousOverlay: i3 } = this.state;
      return e3.overCurrentContext ? { current: r3, previous: i3, history: this.state.overlayStack } : { current: t3, previous: n3, history: this.state.history };
    }, i2 = function() {
      return globalThis.event ? P(this, e2) === globalThis.event.timeStamp : false;
    }, a2 = /* @__PURE__ */ new WeakMap(), o2 = function(t3, r3, o3) {
      if (M(this, n2, i2).call(this) || (ke(this, e2, globalThis.event?.timeStamp || null), !t3 || !na(t3) || !ta(t3))) return;
      let s2 = { ...r3, ...o3 };
      if (s2.overCurrentContext) return P(this, a2).call(this, { type: `addOverlay`, transition: s2, component: t3 });
      let c2 = t3.key?.toString() || `stack-${this.state.historyItemId + 1}`;
      P(this, a2).call(this, { type: `add`, key: c2, transition: s2, component: t3 });
    }, I(t2, `defaultProps`, { enabled: true }), I(t2, `contextType`, jx), t2;
  })(), Px = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }, Fx = Xa(lc), Ue(Kh(), 1), Ue(Kh(), 1), Ue(Kh(), 1), Ix = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), Lx = Symbol(`private`), Rx = (() => {
    function e2(e3 = {}, t2 = false, n2 = true) {
      let r2 = { [Lx]: { makeAnimatables: t2, observeAnimatables: n2, observers: new ev(), reset() {
        for (let t3 in i2) if (Ix(i2, t3)) {
          let n3 = Ix(e3, t3) ? Sb(e3)[t3] : void 0;
          n3 === void 0 ? delete i2[t3] : i2[t3] = n3;
        }
      }, transactions: /* @__PURE__ */ new Set() } }, i2 = new Proxy(r2, Bx);
      return Object.assign(i2, e3), i2;
    }
    return e2.resetObject = (e3) => e3[Lx].reset(), e2.addObserver = (e3, t2) => e3[Lx].observers.add(t2), e2;
  })(), zx = class {
    constructor() {
      I(this, `set`, (e2, t2, n2, r2) => {
        if (t2 === Lx) return false;
        let i2 = e2[Lx], a2, o2;
        if (ai(n2) ? (a2 = n2, o2 = a2.get()) : o2 = n2, i2.makeAnimatables && typeof n2 != `function` && typeof n2 != `object` && !a2 && (a2 = tv(n2)), i2.observeAnimatables && a2) {
          let e3 = i2.transactions;
          a2.onUpdate({ update: (t3, n3) => {
            n3 && e3.add(n3), i2.observers.notify({ value: r2 }, n3);
          }, finish: (t3) => {
            e3.delete(t3) && i2.observers.finishTransaction(t3);
          } });
        }
        let s2 = false, c2 = true, l2 = Sb(e2)[t2];
        if (l2 !== void 0) {
          ai(l2) ? (c2 = l2.get() !== o2, l2.set(o2)) : (c2 = l2 !== o2, Sb(e2)[t2] = o2);
          let n3 = typeof o2 == `object` && !!o2;
          (Array.isArray(o2) || n3) && (c2 = true), s2 = true;
        } else a2 && (n2 = a2), s2 = Reflect.set(e2, t2, n2);
        return c2 && i2.observers.notify({ value: r2 }), s2;
      }), I(this, `get`, (e2, t2, n2) => {
        if (t2 === Lx) return Sb(e2)[t2];
        let r2 = Reflect.get(e2, t2, n2);
        return typeof r2 == `function` ? r2.bind(n2) : r2;
      });
    }
    deleteProperty(e2, t2) {
      let n2 = Reflect.deleteProperty(e2, t2);
      return e2[Lx].observers.notify({ value: e2 }), n2;
    }
    ownKeys(e2) {
      let t2 = Reflect.ownKeys(e2), n2 = t2.indexOf(Lx);
      return n2 !== -1 && t2.splice(n2, 1), t2;
    }
    getOwnPropertyDescriptor(e2, t2) {
      if (t2 !== Lx) return Reflect.getOwnPropertyDescriptor(e2, t2);
    }
  }, Bx = new zx(), Vx = `opacity`, Hx = (() => {
    function e2(t2 = {}) {
      let n2 = Rx(t2, false, false);
      return e2.addData(n2), n2;
    }
    return e2._stores = [], e2.addData = (t2) => {
      e2._stores.push(t2);
    }, e2.reset = () => {
      e2._stores.forEach((e3) => Rx.resetObject(e3));
    }, e2.addObserver = (e3, t2) => Rx.addObserver(e3, t2), e2;
  })(), Ux = { update: 0 }, Wx = p.createContext({ update: NaN }), Gx = class extends v {
    constructor() {
      super(...arguments), I(this, `observers`, []), I(this, `state`, Ux), I(this, `taskAdded`, false), I(this, `frameTask`, () => {
        this.setState({ update: this.state.update + 1 }), this.taskAdded = false;
      }), I(this, `observer`, () => {
        this.taskAdded || (this.taskAdded = true, Cv.addFrameTask(this.frameTask));
      });
    }
    componentWillUnmount() {
      this.observers.map((e2) => e2()), Hx.reset();
    }
    render() {
      let { children: e2 } = this.props;
      return this.observers.map((e3) => e3()), this.observers = [], Hx._stores.forEach((e3) => {
        let t2 = Hx.addObserver(e3, this.observer);
        this.observers.push(t2);
      }), _(Wx.Provider, { value: { ...this.state }, children: e2 });
    }
  }, Ue(Kh(), 1), Kx = `__framer__`, qx = (() => Kx.length)(), Jx = p.createContext(void 0), Yx = p.createContext(void 0), Xx = `ssr-variant`, Zx = `ssr-variant-group-separator`, Qx = p.forwardRef(function(e2, t2) {
    let n2 = xc(t2), r2 = p.useContext(Yx), i2 = p.useSyncExternalStore($h, tg, eg), a2 = Zi(() => i2 ? Pa() ? 1 : 2 : 0), o2 = p.useContext(Jx);
    return _r(() => {
      let { breakpoint: t3, overrides: i3, children: s2, ...c2 } = e2;
      if (!o2) return console.warn(`PropertyOverrides is missing GeneratedComponentContext`), n2(s2, c2);
      let { primaryVariantId: l2, variantClassNames: u2 } = o2, d2 = r2?.primaryVariantId === l2 ? r2?.variants : void 0;
      switch (a2) {
        case 0:
          return n2(s2, kc(t3, c2, i3));
        case 1:
          return wc(i3, s2, c2, u2, l2, d2, n2, t3);
        case 2:
          return wc(i3, s2, c2, u2, l2, d2, bc, void 0);
        default:
          V(a2);
      }
    }, [o2, r2, n2, e2]);
  }), $x = (() => ay(Qx, `.${Xx} { display: contents }`, `PropertyOverrides`))(), eS = `default`, tS = /* @__PURE__ */ new Set([eS]), rS = class {
    constructor() {
      I(this, `entries`, /* @__PURE__ */ new Map()), Ce(this, nS, {});
    }
    set(e2, t2, n2, r2) {
      switch (t2) {
        case `transformTemplate`:
          B(typeof n2 == `string`, `transformTemplate must be a string, received: ${n2}`), this.setHash(e2, r2, { transformTemplate: n2, legacy: true });
          break;
        case `initial`:
        case `animate`:
          B(typeof n2 == `object`, `${t2} must be a valid object, received: ${n2}`), this.setHash(e2, r2, { [t2]: n2, legacy: true });
          break;
        default:
          break;
      }
    }
    setHash(e2, t2 = eS, n2) {
      let r2 = this.entries.get(e2) ?? {}, i2 = r2[t2] ?? {};
      r2[t2] = n2 === null ? null : { ...i2, ...n2 }, this.entries.set(e2, r2);
    }
    variantHash(e2, t2) {
      if (e2 === t2?.primaryVariantId) return eS;
      let n2 = P(this, nS)[e2];
      if (n2) return n2;
      let r2 = t2?.variantClassNames[e2];
      return r2 ? P(this, nS)[e2] = Tc(r2) : eS;
    }
    setAll(e2, t2 = tS, n2, r2) {
      if (n2 === null) {
        for (let n3 of t2) this.setHash(e2, this.variantHash(n3, r2), null);
        return;
      }
      let i2 = Ze(n2.transformTemplate) ? n2.transformTemplate?.({}, aS) : void 0, a2 = n2.__framer__presenceInitial ?? n2.initial, o2 = n2.__framer__presenceAnimate ?? n2.animate, s2 = { initial: z(a2) ? a2 : void 0, animate: z(o2) ? o2 : void 0, transformTemplate: L(i2) ? i2 : void 0 };
      for (let n3 of t2) this.setHash(e2, this.variantHash(n3, r2), s2);
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  }, nS = /* @__PURE__ */ new WeakMap(), iS = new rS(), aS = `__Appear_Animation_Transform__`, oS = `data-framer-appear-id`, sS = `data-framer-appear-animation`, cS = (e2) => {
    if (ao()) return { animate: jc(e2.animate) ? e2.animate : void 0, initial: jc(e2.initial) ? e2.initial : void 0, exit: void 0 };
  }, lS = [`opacity`, `x`, `y`, `scale`, `rotate`, `rotateX`, `rotateY`, `skewX`, `skewY`, `transformPerspective`], uS = (e2) => ({ x: ve(e2?.x ?? 0), y: ve(e2?.y ?? 0), opacity: ve(e2?.opacity ?? 1), scale: ve(e2?.scale ?? 1), rotate: ve(e2?.rotate ?? 0), rotateX: ve(e2?.rotateX ?? 0), rotateY: ve(e2?.rotateY ?? 0), skewX: ve(e2?.skewX ?? 0), skewY: ve(e2?.skewY ?? 0), transformPerspective: ve(e2?.transformPerspective ?? 0) }), dS = { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0, transformPerspective: 0 }, fS = { willChange: `transform` }, Object.freeze(fS), pS = {}, Object.freeze(pS), mS = /* @__PURE__ */ new Set([`loopEffectEnabled`, `loopTransition`, `loop`, `loopRepeatType`, `loopRepeatDelay`, `loopPauseOffscreen`]), hS = () => {
    let e2 = w();
    return d(() => () => {
      clearTimeout(e2.current);
    }, []), async (t2) => new Promise((n2) => {
      e2.current = setTimeout(() => {
        n2(true);
      }, t2 * 1e3);
    });
  }, gS = /* @__PURE__ */ new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`]), _S = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`]), vS = 1, yS = 4, bS = /* @__PURE__ */ new Set([`threshold`, `animateOnce`, `opacity`, `targetOpacity`, `x`, `y`, `scale`, `transition`, `rotate`, `rotateX`, `rotateY`, `perspective`, `enter`, `exit`, `animate`, `styleAppearEffectEnabled`, `targets`, `scrollDirection`]), xS = [`animate`, `animate`], SS = { inputRange: [], outputRange: [] }, CS = /* @__PURE__ */ new Set([`transformViewportThreshold`, `styleTransformEffectEnabled`, `transformTargets`, `spring`, `transformTrigger`]), wS = (e2, t2) => {
    let n2 = e2?.[0]?.target;
    return t2 ? { opacity: n2?.opacity ?? 1 } : n2;
  }, TS = () => ({ opacity: [], x: [], y: [], scale: [], rotate: [], rotateX: [], rotateY: [], skewX: [], skewY: [], transformPerspective: [] }), ES = [0, 1], DS = { parallax: gS, styleAppear: bS, styleTransform: CS, loop: mS, presence: _S }, OS = ag(DS), kS = (e2) => e2.reduce((e3, t2) => e3 += t2, 0), AS = (e2) => e2.reduce((e3, t2) => e3 *= t2, 1), jS = `current`, MS = (e2) => p.forwardRef((t2, n2) => {
    if (t2.__withFX) return _(e2, { ...t2, animate: void 0, initial: void 0, exit: void 0, ref: n2 });
    let r2 = cS(t2);
    if (r2) return _(e2, { ...t2, ...r2, ref: n2 });
    let { parallax: i2 = {}, styleAppear: a2 = {}, styleTransform: o2 = {}, presence: s2 = {}, loop: c2 = {}, forwardedProps: l2, targetOpacityValue: u2, withPerspective: d2, inSmartComponent: f2 = false } = el(t2), m2 = _s(n2), { values: h2, style: g2 } = Bc(s2, m2, f2, t2.style, t2[oe]), { values: v2, style: y2 } = Ic(i2, m2, t2.style?.visibility), { values: b2, style: x2 } = Qc(o2, m2), { values: S2, style: C2 } = Jc(a2, m2), { values: w2, style: T2 } = Pc(c2, m2), E2 = p.useMemo(() => {
      let e3 = new Le(u2 ?? 1);
      return { scale: [S2.scale, w2.scale, h2.scale, b2.scale], opacity: [S2.opacity, w2.opacity, h2.opacity, e3, b2.opacity], x: [S2.x, w2.x, h2.x, b2.x], y: [S2.y, w2.y, v2.y, h2.y, b2.y], rotate: [S2.rotate, w2.rotate, h2.rotate, b2.rotate], rotateX: [S2.rotateX, w2.rotateX, h2.rotateX, b2.rotateX], rotateY: [S2.rotateY, w2.rotateY, h2.rotateY, b2.rotateY], skewX: [S2.skewX, w2.skewX, h2.skewX, b2.skewX], skewY: [S2.skewY, w2.skewY, h2.skewY, b2.skewY], transformPerspective: [b2.transformPerspective, S2.transformPerspective] };
    }, [u2, b2, v2, S2, w2, h2]);
    nl(t2.style, E2);
    let D2 = se(E2.scale, AS), O2 = se(E2.opacity, AS), k2 = se(E2.x, kS), A2 = se(E2.y, kS), j2 = se(E2.rotate, kS), ee2 = se(E2.rotateX, kS), te2 = se(E2.rotateY, kS), ne2 = se(E2.skewX, kS), M2 = se(E2.skewY, kS), re2 = se(E2.transformPerspective, kS), { drag: ie2, dragConstraints: ae2 } = l2;
    Io(ie2 && tl(ae2) ? ae2 : void 0);
    let ce2 = { opacity: O2, scale: D2, x: k2, y: A2, rotate: j2, rotateX: ee2, rotateY: te2, skewX: ne2, skewY: M2 };
    tt(d2) && (ce2.transformPerspective = re2);
    let le2 = rl(t2.animate) ? t2.animate : void 0, N2 = rl(t2.initial) ? t2.initial : void 0, ue2 = rl(t2.exit) ? t2.exit : void 0, de2 = f2 && !s2.presenceInitial ? { initial: N2, animate: le2, exit: ue2 } : {};
    return _(e2, { ...l2, ...de2, __withFX: true, style: { ...t2.style, ...y2, ...x2, ...T2, ...ce2, ...C2, ...g2 }, values: h2, ref: m2 });
  }), NS = s({}), PS = p.createContext({}), FS = p.forwardRef(function({ width: e2, height: t2, y: n2, children: r2, ...i2 }, a2) {
    let o2 = p.useMemo(() => ({ width: e2, height: t2, y: n2 }), [e2, t2, n2]), s2 = xc(a2);
    return _(PS.Provider, { value: o2, children: s2(r2, i2) });
  }), IS = (e2) => p.forwardRef((t2, n2) => _(e2, { layoutId: Po(t2), ...t2, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n2 })), LS = false, RS = class extends v {
    constructor() {
      super(...arguments), I(this, `state`, { error: void 0 });
    }
    static getDerivedStateFromError(e2) {
      return { error: e2 };
    }
    componentDidCatch(e2, t2) {
      if (!ol(e2)) return;
      let n2 = t2?.componentStack;
      console.error(`Caught an error in SynchronousSuspenseErrorBoundary:

`, e2, `

Component stack:
`, n2, `

This error indicates a state update wasn\u2019t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` + ut(`If you are the author of this website, update external components and check recently added custom code or code overrides.`));
      let r2 = e2 instanceof Error && typeof e2.stack == `string` ? e2.stack : void 0;
      nn(`published_site_load_recoverable_error`, { message: String(e2), stack: r2, componentStack: r2 ? void 0 : n2 });
    }
    render() {
      let e2 = this.state.error;
      if (e2 === void 0) return this.props.children;
      if (!ol(e2)) throw e2;
      return LS = true, this.props.children;
    }
  }, zS = (() => n === void 0 ? null : new Promise(() => {
  }))(), BS = _(sl, {}), VS = s(false), VS.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`, HS = _(ll, {}), US = class extends v {
    constructor() {
      super(...arguments), I(this, `state`, { hasError: false });
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(e2, t2) {
      dl(this.props.getErrorMessage(), t2?.componentStack), ul(e2, t2);
    }
    render() {
      let { children: e2, fallback: t2 = HS } = this.props, { hasError: n2 } = this.state;
      return n2 ? t2 : e2;
    }
  }, WS = class extends v {
    constructor() {
      super(...arguments), I(this, `state`, { hasError: false });
    }
    componentDidCatch(e2, t2) {
      let n2 = t2?.componentStack;
      console.error(`Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`, n2), this.setState({ hasError: true }), ul(e2, t2);
    }
    render() {
      let { children: e2 } = this.props, { hasError: t2 } = this.state;
      return t2 ? null : e2;
    }
  }, GS = (() => p.createContext(void 0))(), KS = `code-crash:`, qS = IS(p.forwardRef(function({ children: e2, layoutId: t2, as: n2, scopeId: r2, nodeId: i2, isAuthoredByUser: a2, isModuleExternal: o2, inComponentSlot: s2, ...c2 }, l2) {
    let u2 = Zi(() => t2 ? `${t2}-container` : void 0), d2 = Oo(n2), f2 = Tl(p.Children.map(e2, (e3) => p.isValidElement(e3) ? p.cloneElement(e3, { layoutId: t2 }) : e3), r2, i2, a2, o2, s2);
    return _(d2, { layoutId: u2, ...c2, ref: l2, children: _(zb.Provider, { value: true, children: _(p_.Provider, { value: i2 ?? null, children: _(Xi, { enabled: false, children: _(Te, { id: t2 ?? ``, inherit: c2.layout ? true : `id`, children: f2 }) }) }) }) });
  })), JS = p.forwardRef(function(e2, t2) {
    let { as: n2, children: r2, scopeId: i2, nodeId: a2, isAuthoredByUser: o2, rendersWithMotion: s2, isModuleExternal: c2, inComponentSlot: l2, ...u2 } = e2, d2 = Tl(r2, i2, a2, o2, c2, l2), f2 = e2.as ?? `div`;
    if (e2.rendersWithMotion) {
      let n3 = Oo(f2);
      return _(p_.Provider, { value: a2 ?? null, children: _(n3, { ...u2, ref: t2, style: e2.style, children: d2 }) });
    } else {
      let n3 = f2, { layoutId: r3, layoutDependency: i3, ...o3 } = u2;
      return _(p_.Provider, { value: a2 ?? null, children: _(n3, { ...o3, ref: t2, style: e2.style, children: d2 }) });
    }
  }), YS = s({ onRegisterCursors: () => () => {
  }, registerCursors: () => {
  } }), XS = `framer-cursor-none`, ZS = `framer-pointer-events-none`, QS = x(function({ children: e2 }) {
    let t2 = Zi(() => {
      let e3 = /* @__PURE__ */ new Set(), t3 = {}, n3 = /* @__PURE__ */ new Map();
      return { onRegisterCursors: (n4) => (n4(t3), e3.add(n4), () => e3.delete(n4)), registerCursors: (r2, i2) => {
        n3.set(i2, Object.keys(r2)), t3 = El(n3, t3, r2);
        for (let n4 of e3) n4(t3);
        return () => {
          n3.delete(i2);
        };
      } };
    }), n2 = be();
    return T(YS.Provider, { value: t2, children: [e2, !n2 && _(nC, {})] });
  }), $S = (() => ay(QS, [`.${XS}, .${XS} * { cursor: none !important; }`, `.${ZS}, .${ZS} * { pointer-events: none !important; }`], `framer-lib-cursors-host`))(), eC = /* @__PURE__ */ (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))(), tC = `data-framer-portal-id`, nC = x(function() {
    let { onRegisterCursors: e2 } = C(YS), [t2, n2] = o(false), i2 = ge(0), a2 = ge(0), s2 = ge(0), c2 = w(null), u2 = w({ cursors: {}, cursorHash: void 0 }), f2 = Fo();
    r(() => {
      let e3 = G.matchMedia(`(any-hover: none)`);
      function t3(e4) {
        e4.matches ? h(() => n2(false)) : n2(true);
      }
      return e3.addEventListener(`change`, t3), e3.matches || n2(true), () => {
        e3.removeEventListener(`change`, t3);
      };
    }, []), d(() => {
      if (!t2) return;
      let e3 = 0, n3 = 0;
      function r2() {
        i2.set(e3), a2.set(n3), Re(s2, 1, { type: `tween`, duration: 0.2 });
      }
      let o2 = () => {
        if (et(u2.current.cursors)) return;
        let t3 = Al(e3, n3);
        t3 !== u2.current.cursorHash && (u2.current.cursorHash = t3, we.update(() => f2()));
      };
      function l2(t3) {
        if (t3.pointerType === `touch`) {
          je(o2);
          return;
        }
        we.read(o2, true), e3 = t3.clientX, n3 = t3.clientY, we.update(r2);
      }
      function d2(e4) {
        if (e4.target === c2.current || !c2.current) return;
        let t3 = new PointerEvent(e4.type, { bubbles: true, cancelable: e4.cancelable, pointerType: e4.pointerType, pointerId: e4.pointerId, composed: e4.composed, isPrimary: e4.isPrimary, buttons: e4.buttons, button: e4.button });
        we.update(() => {
          c2.current?.dispatchEvent(t3);
        });
      }
      return G.addEventListener(`pointermove`, l2), document.addEventListener(`pointerdown`, d2), document.addEventListener(`pointerup`, d2), we.read(o2, true), () => {
        G.removeEventListener(`pointermove`, l2), document.removeEventListener(`pointerdown`, d2), document.removeEventListener(`pointerup`, d2), je(o2);
      };
    }, [s2, i2, a2, f2, t2]), d(() => {
      if (!t2) return;
      function e3() {
        Re(s2, 0, { type: `tween`, duration: 0.2 });
      }
      return document.addEventListener(`mouseleave`, e3), G.addEventListener(`blur`, e3), () => {
        document.removeEventListener(`mouseleave`, e3), G.removeEventListener(`blur`, e3);
      };
    }, [s2, t2]), r(() => {
      function t3(e3) {
        u2.current.cursors = e3, u2.current.cursorHash = et(e3) ? null : Al(i2.get(), a2.get()), f2();
      }
      let n3 = e2(t3);
      return () => {
        n3(), document.body.classList.toggle(XS, false);
      };
    }, [i2, a2, e2, f2]);
    let { cursors: p2, cursorHash: m2 } = u2.current, g2 = m2 ? p2[m2] : null, v2 = Dl(g2);
    r(() => {
      t2 && document.body.classList.toggle(XS, v2);
    }, [v2, t2]);
    let y2 = g2?.component, b2 = g2?.transition ?? { duration: 0 }, x2 = b2.duration === void 0 ? b2 : { ...b2, duration: b2.duration * 1e3 }, S2 = xe(i2, x2), T2 = xe(a2, x2), D2 = se(() => S2.get() + (g2?.offset?.x ?? 0)), O2 = se(() => T2.get() + (g2?.offset?.y ?? 0)), k2 = g2?.alignment, A2 = g2?.placement, j2 = l((e3, t3) => `translate(${kl(A2, k2)}) ${t3}`, [k2, A2]);
    return !t2 || !g2 || !y2 ? null : _(E, { children: _(y2, { transformTemplate: j2, style: { ...eC, x: D2, y: O2, opacity: s2 }, globalTapTarget: true, variant: g2?.variant, ref: c2, className: ZS }) });
  }), rC = `webPageId`, iC = class {
    constructor() {
      I(this, `collectedLinks`, /* @__PURE__ */ new Map()), I(this, `nestingInfo`, /* @__PURE__ */ new Map());
    }
    clear() {
      this.collectedLinks.clear(), this.nestingInfo.clear();
    }
    getLinks() {
      let e2 = /* @__PURE__ */ new Map();
      for (let [t2, n2] of this.nestingInfo) {
        let r2 = this.collectedLinks.get(t2);
        B(r2, `Outer link not found: ${t2}`);
        let i2 = Array.from(n2).map((e3) => {
          let t3 = this.collectedLinks.get(e3);
          return B(t3, `Inner link not found: ${e3}`), t3;
        });
        e2.set(r2, i2);
      }
      return e2;
    }
    collectNestedLink(e2, t2) {
      if (Yh && !Ia() || !e2.nodeId || !t2.nodeId) return;
      this.collectedLinks.set(Nl(e2), e2), this.collectedLinks.set(Nl(t2), t2);
      let n2 = this.nestingInfo.get(Nl(e2)) ?? /* @__PURE__ */ new Set();
      n2.add(Nl(t2)), this.nestingInfo.set(Nl(e2), n2);
    }
  }, aC = new iC(), oC = `element`, sC = `collection`, cC = `collectionItemId`, lC = `pathVariables`, uC = `framer/page-link,`, dC = s(void 0), fC = `overlay`, pC = `template-overlay`, mC = p.forwardRef(function({ Component: e2, ...t2 }, n2) {
    return e2 ? _(e2, { ...t2, ref: n2 }) : null;
  }), hC = class extends v {
    constructor() {
      super(...arguments), I(this, `state`, { error: void 0 }), I(this, `message`, `Made UI non-interactive due to an error.`), I(this, `messageFatal`, `Fatal error.`);
    }
    static getDerivedStateFromError(e2) {
      return { error: e2 };
    }
    componentDidCatch(e2) {
      if (n.__framer_hadFatalError = true, `cause` in e2 && (e2 = e2.cause), console.error(ut(Xh ? this.message : this.messageFatal, e2)), Math.random() > 0.5) return;
      let t2 = e2 instanceof Error && typeof e2.stack == `string` ? e2.stack : null;
      nn(`published_site_load_error`, { message: String(e2), stack: t2 });
    }
    render() {
      let e2 = this.state.error;
      if (!e2) return this.props.children;
      let t2 = `cause` in e2 ? e2.cause : e2, n2 = /-->/gu, r2 = Xh && document.getElementById(`main`)?.innerHTML || ``;
      return _(`div`, { style: { display: `contents` }, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t2.message.replace(n2, `--!>`)}". ${ut()}: --><!-- Stack: ${e2.stack?.replace(n2, `--!>`)} -->` + r2 } });
    }
  }, gC = /:([a-z]\w*)/gi, _C = s(void 0), vC = 500, yC = 0.9, bC = 1.7, xC = 4, SC = 1 / 0, CC = /* @__PURE__ */ new WeakMap(), wC = /* @__PURE__ */ new Set(), TC = /* @__PURE__ */ new Map(), EC = !Bg || typeof IntersectionObserver > `u` ? null : nu(), DC = Xl(b(function({ children: e2, href: t2, openInNewTab: n2, smoothScroll: r2, clickTrackingId: i2, relValues: a2, preserveParams: o2, nodeId: s2, scopeId: l2, motionChild: u2, ...d2 }, f2) {
    let p2 = kt(), m2 = jt(), h2 = eu(), { activeLocale: g2, locales: _2 } = yr(), v2 = uu(), b2 = bn(), x2 = Pl(), S2 = du({ nodeId: s2, clickTrackingId: i2, router: p2, href: t2, activeLocale: g2 }), C2 = c(() => {
      if (!t2) return {};
      let e3 = Ml(t2) ? t2 : Vl(t2);
      if (!e3) return {};
      if (L(e3)) return hu(e3, p2, m2, { openInNewTab: n2, trackLinkClick: S2, rel: a2?.join(` `), preserveParams: o2, smoothScroll: r2 }, b2, g2?.id, _2, h2);
      let { unresolvedPathSlugs: i3, unresolvedHashSlugs: s3 } = e3, c2 = v2(i3, s3, g2);
      if (st(c2)) throw c2;
      let { routeId: l3, href: u3, elementId: d3, pathVariables: f3, locale: y2 } = Zl(p2, m2, e3, g2, c2, h2), x3 = iu(n2, true), C3 = x3 === `_blank`, w3 = { pathVariables: f3, locale: y2 }, T3 = (e4) => pu(p2, l3, () => b2(l3, w3, false, !C3), d3, f3, r2, e4);
      return { href: u3, target: x3, onClick: mu(u3, S2, T3), "data-framer-page-link-current": m2 && tu(m2, e3, h2) || void 0, navigate: T3, preload: () => b2(l3, w3, true, !C3), _routeId: l3, _pathVariables: f3, _locale: y2 };
    }, [t2, p2, g2, h2, n2, m2, r2, S2, a2, _2, o2, v2, b2]), w2 = _s(y(e2) && `ref` in e2 ? e2.ref : void 0), { navigate: T2, preload: E2, _routeId: D2, _pathVariables: O2, _locale: k2, ...A2 } = C2;
    vs(w2, (e3) => {
      if (!(e3 === null || !D2 || !E2 || x2)) return EC?.(e3, E2, `${D2}:${k2?.id}:${JSON.stringify(O2)}`);
    }, [E2, D2, O2, k2]);
    let j2 = !!T2;
    return Ul(xc(f2).cloneAsArray(e2, (e3) => gu(e3, { ...d2, ...vu(A2, u2, j2) }, w2)), l2, s2, t2, C2, w2);
  })), OC = `framer`, kC = 3, AC = 30, jC = 1e4, MC = `3`, NC = `__framer`, PC = [`website`, `company`, `message`, `subject`, `title`, `description`, `feedback`, `notes`, `details`, `remarks`, `comments`], FC = (() => Date.now())(), IC = { name: 0, value: 1, setAttribute: 2, valueProperty: 3, isInputEventTrusted: 4, inputChangeTimeSinceModuleLoad: 5, wasFilledBeforeHydration: 6 }, LC = { fieldData: 0, fieldCount: 1, fieldFilledCount: 2, hpVersion: 3, siteId: 4, timeToSubmissionSinceModuleLoad: 5 }, RC = () => ((Date.now() - FC) / 1e3).toFixed(2), zC = ({ inputStateRef: e2 }) => {
    let { inputRef: t2, originalName: n2 } = e2;
    return p.useLayoutEffect(() => {
      let n3 = t2.current;
      if (!n3) return;
      let r2 = e2.methodsUsed;
      n3.value && (r2.wasFilledBeforeHydration = true);
    }, [t2, e2]), p.useEffect(() => {
      let n3 = t2.current;
      if (!n3) return;
      let r2 = e2.methodsUsed, i2 = Element.prototype.setAttribute, a2 = i2.bind(n3);
      n3.setAttribute = function(e3, t3) {
        e3 === `value` && (r2.setAttribute = true, r2.inputChangeTimeSinceModuleLoad = RC()), a2(e3, t3);
      };
      let o2 = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
      o2 && Object.defineProperty(n3, `value`, { configurable: true, enumerable: true, get: function() {
        return o2.get?.call(this) ?? ``;
      }, set: function(e3) {
        r2.valueProperty = true, r2.inputChangeTimeSinceModuleLoad = RC(), o2.set?.call(this, e3);
      } });
      let s2 = (e3) => {
        r2.isInputEventTrusted = e3.isTrusted, r2.inputChangeTimeSinceModuleLoad = RC();
      };
      return n3.addEventListener(`input`, s2), () => {
        n3.setAttribute = i2.bind(n3), o2 && Object.defineProperty(n3, `value`, o2), n3.removeEventListener(`input`, s2);
      };
    }, [t2, e2]), _(`input`, { ref: t2, type: `text`, name: n2, suppressHydrationWarning: true, tabIndex: -1, autoComplete: `one-time-code`, "aria-hidden": `true`, style: { position: `absolute`, transform: `scale(0)` }, defaultValue: ``, "data-1p-ignore": true, "data-lpignore": `true`, "data-form-type": `other`, "data-bwignore": true });
  }, BC = `https://www.google.com/recaptcha/api.js`, VC = /* @__PURE__ */ new Map(), HC = { state: `pending` }, UC = { state: `success` }, WC = { state: `incomplete` }, GC = { state: `complete` }, KC = { state: `error` }, qC = p.createContext(void 0), JC = p.forwardRef(function({ action: e2, children: t2, redirectUrl: n2, onSuccess: r2, onError: i2, onLoading: a2, submitTrackingId: o2, nodeId: s2, formCaptchaProvider: c2, formCaptchaSiteKey: l2, ...u2 }, d2) {
    let f2 = p.useRef(null), m2 = d2 ?? f2, g2 = !(c2 && l2), { states: v2, convertHoneypotFieldsForSubmission: y2, replaceHoneypotWithMetadata: b2 } = Tu(g2), x2 = kt(), S2 = jt(), w2 = eu(), E2 = mn(), { executeChallenge: D2 } = Mu({ provider: c2, siteKey: l2 }), [O2, k2] = p.useReducer(Nu, WC), { activeLocale: A2, locales: j2 } = yr(), ee2 = C(qC), te2 = p.useRef({ onSuccess: r2, onError: i2, onLoading: a2 });
    te2.current = { onSuccess: r2, onError: i2, onLoading: a2 };
    let ne2 = p.useRef(false);
    async function M2(e3) {
      if (L(e3)) {
        let t4 = Ql(x2, e3, w2, j2);
        if (!t4) {
          Iu(e3, m2);
          return;
        }
        let { routeId: n4, elementId: r4, pathVariables: i3 } = t4;
        x2.navigate?.(n4, r4, i3);
        return;
      }
      B(Ml(e3), `Expected link to be either a LinkToWebPage or a string`, e3);
      let { routeId: t3, elementId: n3, pathVariables: r3 } = Zl(x2, S2, e3, A2, await cu(e3.unresolvedPathSlugs, e3.unresolvedHashSlugs, A2, E2), w2);
      x2.navigate?.(t3, n3, r3);
    }
    let re2 = async (t3) => {
      if (t3.preventDefault(), !e2 || !ee2 || ne2.current) return;
      ne2.current = true, y2();
      let r3 = new FormData(t3.currentTarget);
      await yn({ priority: `user-visible`, continueAfter: `paint` }), b2(r3), h(() => k2({ type: `submit` })), wu(r3, G.document);
      for (let [e3, t4] of r3) t4 instanceof File && r3.delete(e3);
      try {
        te2.current.onLoading?.(), Du({ router: x2, nodeId: s2, submitTrackingId: o2, activeLocale: A2 }), await Ru(e2, r3, ee2, D2), h(() => k2({ type: `success` })), te2.current.onSuccess?.(), n2 && await M2(n2);
      } catch (e3) {
        h(() => k2({ type: `error` })), te2.current.onError?.(), console.error(e3);
      }
      ne2.current = false;
    }, ie2 = (e3) => {
      let { target: t3, currentTarget: n3, key: r3 } = e3;
      t3 instanceof HTMLTextAreaElement || r3 === `Enter` && n3.checkValidity() && (e3.preventDefault(), re2(e3));
    }, ae2 = async (e3) => {
      let t3 = e3.currentTarget;
      await yn({ priority: `background`, continueAfter: `paint` }), h(() => k2({ type: Lu(t3) ? `incomplete` : `complete` }));
    };
    return T(qe.form, { ...u2, onSubmit: Pu(O2) ? re2 : Fu, onKeyDown: ie2, onChange: ae2, ref: m2, children: [t2(O2), g2 && _(Eu, { states: v2 })] });
  }), YC = `__framer_force_showing_editorbar_since`, XC = class extends v {
    constructor() {
      super(...arguments), I(this, `state`, { error: void 0 });
    }
    static getDerivedStateFromError(e2) {
      return { error: e2 };
    }
    render() {
      return this.state.error ? null : this.props.children;
    }
  }, ZC = () => {
    try {
      return !!localStorage[YC];
    } catch {
      return false;
    }
  }, QC = () => !ZC(), $C = (() => {
    let e2 = s(void 0);
    return e2.displayName = `TriggerStateContext`, e2;
  })(), ew = `main`, tw = `framerGeneratedPage`, nw = `<!-- Start of headStart -->`, rw = `<!-- End of headStart -->`, iw = `<!-- Start of headEnd -->`, aw = `<!-- End of headEnd -->`, ow = `<!-- Start of bodyStart -->`, sw = `<!-- End of bodyStart -->`, cw = `<!-- Start of bodyEnd -->`, lw = `<!-- End of bodyEnd -->`, uw = (() => p.createContext(void 0))(), dw = null, fw = null, Qh(ad), pw = (e2, t2, r2, i2, a2, o2) => {
    let s2 = C(qC), c2 = w(), l2 = mn(), u2 = w(true);
    return d(() => {
      function d2() {
        (!dw || !fw) && ad();
        let n2 = r2 ? new URL(G.location.origin + r2) : G.location, c3 = { version: Dg, abTestId: e2?.abTestId, framerSiteId: s2 ?? null, webPageId: e2?.abTestingVariantId ?? t2, routePath: e2?.path || `/`, collectionItemId: null, framerLocale: a2?.code || null, referrer: null, url: n2.href, hostname: n2.hostname, pathname: n2.pathname, search: n2.search || null, hash: n2.hash || null, timezone: dw, locale: fw }, d3 = u2.current && o2 !== void 0 ? o2 : void 0;
        return e2?.collectionId && i2 ? (async () => {
          let t3 = d3 ?? null;
          if (d3 === void 0) {
            let n3 = e2.collectionId && l2?.get(e2.collectionId), [r3] = Object.values(i2);
            if (n3 && L(r3)) {
              let e3 = n3.getRecordIdBySlug(r3, a2 || void 0);
              t3 = (st(e3) ? await e3 : e3) ?? null;
            }
          }
          return { ...c3, collectionItemId: t3 };
        })() : c3;
      }
      (async () => {
        let e3 = c2.current = d2(), t3 = e3 instanceof Promise ? await e3 : e3;
        c2.current = t3, u2.current ? u2.current = false : nn(`published_site_pageview`, t3, `eager`);
      })();
      let f2 = async (e3) => {
        if (e3.persisted) {
          let e4 = c2.current = d2(), t3 = e4 instanceof Promise ? await e4 : e4;
          c2.current = t3, nn(`published_site_pageview`, t3, `eager`);
        }
      };
      return n.addEventListener(`pageshow`, f2), () => {
        n.removeEventListener(`pageshow`, f2);
      };
    }, [e2, t2, r2, i2, a2, s2, l2, o2]), c2;
  }, mw = { status: `loading`, data: void 0 }, hw = 5e3, gw = () => {
  }, Cw = class e2 {
    constructor() {
      I(this, `responseValues`, /* @__PURE__ */ new Map()), Ce(this, _w, /* @__PURE__ */ new Map()), Ce(this, vw, /* @__PURE__ */ new Set()), Ce(this, yw, /* @__PURE__ */ new Map()), Ce(this, bw, /* @__PURE__ */ new Map()), Ce(this, xw, /* @__PURE__ */ new Map()), Ce(this, Sw, /* @__PURE__ */ new Map()), I(this, `persistCache`, _c(() => {
        let t2 = {};
        for (let [e3, n2] of this.responseValues) {
          if (!n2 || n2.status !== `success`) continue;
          let r2 = P(this, yw).get(e3);
          if (!r2 || r2 === 0) continue;
          let i2 = P(this, bw).get(e3);
          i2 && (i2 && xd(i2, r2) || (t2[e3] = [i2, r2, n2.data]));
        }
        try {
          localStorage.setItem(e2.cacheKey, JSON.stringify(t2));
        } catch {
        }
      }, 500));
    }
    unmount() {
      for (let [e3, t2] of P(this, Sw)) clearInterval(t2), P(this, Sw).delete(e3);
    }
    stopQueryRefetching(e3) {
      let t2 = _d(e3), n2 = P(this, Sw).get(t2);
      n2 && (clearInterval(n2), P(this, Sw).delete(t2));
    }
    startQueryRefetching(e3) {
      let t2 = _d(e3), n2 = P(this, Sw).get(t2), r2 = P(this, yw).get(t2);
      if (n2 || !r2) return;
      let i2 = G.setInterval(() => {
        if (document.visibilityState === `hidden`) return;
        let n3 = P(this, bw).get(t2);
        !r2 || !n3 || this.fetchWithCache({ ...e3, cacheDuration: r2 });
      }, r2);
      P(this, Sw).set(t2, i2);
    }
    hydrateCache() {
      try {
        let t2 = localStorage.getItem(e2.cacheKey);
        if (!t2) return;
        let n2 = JSON.parse(t2);
        if (typeof n2 != `object`) throw Error(`Invalid cache data`);
        for (let e3 in n2) {
          let t3 = n2[e3];
          if (!Array.isArray(t3) || t3.length !== 3) throw Error(`Invalid cache data`);
          let [r2, i2, a2] = t3;
          xd(r2, i2) || (P(this, bw).set(e3, r2), P(this, yw).set(e3, i2), this.responseValues.set(e3, { status: `success`, data: a2 }));
        }
      } catch {
        try {
          localStorage.removeItem(e2.cacheKey);
        } catch {
        }
      }
    }
    setResponseValue(e3, t2) {
      this.responseValues.set(e3, t2), this.persistCache();
      let n2 = P(this, _w).get(e3);
      if (n2) for (let e4 of n2) e4();
    }
    async prefetch(e3) {
      if (!Pa() || !Il(e3.url, false)) return;
      let t2 = _d(e3);
      P(this, vw).add(t2), await this.fetchWithCache(e3);
      let n2 = this.getValue(t2);
      if (!n2 || n2.status === `loading`) throw Error(`Unexpected result status for prefetch`);
      let r2 = P(this, _w).get(t2);
      for (let e4 of r2 ?? []) e4();
      let i2 = bd(n2, e3);
      return e3.resultOutputType === `image` && L(i2) && await md(i2).catch(gw), i2;
    }
    async fetchWithCache(e3) {
      if (!Pa()) return;
      let t2 = _d(e3), n2 = P(this, xw).get(t2);
      if (n2) return n2;
      let r2 = P(this, bw).get(t2), i2 = r2 && xd(r2, e3.cacheDuration);
      if (this.responseValues.has(t2) && !i2) return;
      this.responseValues.get(t2) || this.setResponseValue(t2, mw);
      let a2 = (async () => {
        try {
          let n3 = await fetch(e3.url, { method: `GET`, credentials: e3.credentials });
          if (!n3.ok) {
            this.setResponseValue(t2, { status: `error`, error: Error(`Invalid Response Status`), data: void 0 });
            return;
          }
          let r3 = await n3.json();
          this.setResponseValue(t2, { status: `success`, data: r3 }), P(this, bw).set(t2, Date.now());
        } catch (e4) {
          this.setResponseValue(t2, { status: `error`, error: e4, data: void 0 });
        }
      })();
      return P(this, xw).set(t2, a2), a2.finally(() => {
        P(this, xw).delete(t2);
      }), a2;
    }
    getValue(e3, t2 = false) {
      if (!(t2 && !P(this, vw).has(e3))) return this.responseValues.get(e3);
    }
    subscribe(e3, t2, n2 = false) {
      let { url: r2, cacheDuration: i2 } = e3;
      if (!Il(r2, false)) return gw;
      let a2 = _d(e3), o2 = P(this, yw).get(a2);
      (!o2 || i2 < o2) && P(this, yw).set(a2, i2), n2 || (this.startQueryRefetching(e3), this.fetchWithCache(e3));
      let s2 = P(this, _w).get(a2) ?? /* @__PURE__ */ new Set();
      return s2.add(t2), P(this, _w).set(a2, s2), () => {
        let n3 = P(this, _w).get(a2);
        n3 && (n3.delete(t2), n3.size === 0 && P(this, _w).delete(a2), P(this, _w).size === 0 && this.stopQueryRefetching(e3));
      };
    }
  }, _w = /* @__PURE__ */ new WeakMap(), vw = /* @__PURE__ */ new WeakMap(), yw = /* @__PURE__ */ new WeakMap(), bw = /* @__PURE__ */ new WeakMap(), xw = /* @__PURE__ */ new WeakMap(), Sw = /* @__PURE__ */ new WeakMap(), I(Cw, `cacheKey`, `framer-fetch-client-cache`), ww = Cw, Tw = s(void 0), Ew = s(true), Dw = ({ children: e2, client: t2 }) => {
    let [n2] = o(() => t2 ?? new ww()), [r2, i2] = o(true);
    return d(() => (n2.hydrateCache(), h(() => {
      i2(false);
    }), () => n2.unmount()), [n2]), _(Ew.Provider, { value: r2, children: _(Tw.Provider, { value: n2, children: e2 }) });
  }, De.WillChange = Ae, Ow = Xl(b(function({ links: e2, children: t2, ...n2 }, r2) {
    let i2 = kt(), { activeLocale: a2 } = yr(), o2 = xc(r2), s2 = uu(), c2 = [], l2 = e2.map((e3) => {
      if (e3) return L(e3) ? bu(e3, i2, void 0, void 0, a2) : bu(e3.href, i2, e3.implicitPathVariables, e3.refKey, a2, (e4, t3) => s2(e4, t3, a2, c2));
    });
    if (c2.length > 0) throw Promise.allSettled(c2);
    return o2(t2(l2), n2);
  })), kw = { cast(e2, t2) {
    switch (t2.type) {
      case `array`:
        return Ld(e2, t2);
      case `boolean`:
        return zd(e2);
      case `color`:
        return Hd(e2);
      case `date`:
        return Wd(e2);
      case `enum`:
        return Kd(e2);
      case `file`:
        return Jd(e2);
      case `link`:
        return Xd(e2);
      case `number`:
        return Qd(e2);
      case `object`:
        return tf(e2, t2);
      case `responsiveimage`:
        return rf(e2);
      case `richtext`:
        return of(e2);
      case `string`:
        return uf(e2);
      case `vectorsetitem`:
        return cf(e2);
      case `unknown`:
        return e2;
      default:
        V(t2, `Unsupported cast`);
    }
  }, parse(e2) {
    return Qe(e2) ? { type: `boolean`, value: e2 } : it(e2) ? { type: `date`, value: e2.toISOString() } : R(e2) ? { type: `number`, value: e2 } : L(e2) ? { type: `string`, value: e2 } : $e(e2) ? { type: `array`, value: e2.map(kw.parse) } : null;
  }, equal(e2, t2, n2) {
    return e2?.type === t2?.type ? ff(e2, t2, n2) === 0 : false;
  }, lessThan(e2, t2, n2) {
    return e2?.type === t2?.type ? ff(e2, t2, n2) < 0 : false;
  }, lessThanOrEqual(e2, t2, n2) {
    return e2?.type === t2?.type ? ff(e2, t2, n2) <= 0 : false;
  }, greaterThan(e2, t2, n2) {
    return e2?.type === t2?.type ? ff(e2, t2, n2) > 0 : false;
  }, greaterThanOrEqual(e2, t2, n2) {
    return e2?.type === t2?.type ? ff(e2, t2, n2) >= 0 : false;
  }, in(e2, t2, n2) {
    return t2?.type === `array` ? t2.value.some((t3) => kw.equal(t3, e2, n2)) : false;
  }, indexOf(e2, t2, n2) {
    return e2?.type === `array` ? e2.value.findIndex((e3) => kw.equal(e3, t2, n2)) : -1;
  }, contains(e2, t2, n2) {
    let r2 = df(e2), i2 = df(t2);
    return nt(r2) || nt(i2) ? false : (n2.type === 0 && (r2 = r2.toLowerCase(), i2 = i2.toLowerCase()), r2.includes(i2));
  }, startsWith(e2, t2, n2) {
    let r2 = df(e2), i2 = df(t2);
    return nt(r2) || nt(i2) ? false : (n2.type === 0 && (r2 = r2.toLowerCase(), i2 = i2.toLowerCase()), r2.startsWith(i2));
  }, endsWith(e2, t2, n2) {
    let r2 = df(e2), i2 = df(t2);
    return nt(r2) || nt(i2) ? false : (n2.type === 0 && (r2 = r2.toLowerCase(), i2 = i2.toLowerCase()), r2.endsWith(i2));
  }, length(e2) {
    switch (e2?.type) {
      case `array`:
        return e2.value.length;
    }
    return 0;
  }, stringify(e2) {
    if (e2 === null) return `null`;
    switch (e2.type) {
      case `array`:
        return `[${e2.value.map(kw.stringify).join(`, `)}]`;
      case `boolean`:
      case `number`:
        return String(e2.value);
      case `string`:
        return `'${e2.value}'`;
      case `enum`:
        return `'${e2.value}' /* Enum */`;
      case `color`:
        return `'${e2.value}' /* Color */`;
      case `date`:
        return `'${e2.value}' /* Date */`;
      case `richtext`:
        return `RichText`;
      case `vectorsetitem`:
        return `VectorSetItem`;
      case `responsiveimage`:
        return `ResponsiveImage`;
      case `file`:
        return `File`;
      case `link`:
        return L(e2.value) ? `'${e2.value}' /* Link */` : `Link`;
      case `object`:
        return `Object`;
      default:
        V(e2);
    }
  } }, Aw = { type: `unknown`, isNullable: true }, jw = class {
    constructor(e2, t2) {
      this.collection = e2, this.locale = t2, I(this, `schema`), I(this, `indexes`, []);
      let n2 = io(e2);
      B(n2, `Collection does not have properties`);
      let r2 = { id: { type: `string`, isNullable: false } }, i2 = Object.entries(n2);
      for (let [e3, t3] of i2) {
        if (!t3) continue;
        let n3 = t3.type;
        B(n3 !== `array`, `Array properties are not supported`), B(n3 !== `object`, `Object properties are not supported`), r2[e3] = { type: n3, isNullable: true };
      }
      this.schema = r2;
    }
    getDatabaseItem(e2, t2) {
      let n2 = {}, r2 = Number(t2);
      for (let t3 in this.schema) {
        let i2 = e2[t3];
        if (rt(i2)) continue;
        let a2 = this.schema[t3];
        if (!tt(a2)) {
          if (B(a2.type !== `unknown`, `Invalid definition type`), a2.type === `richtext`) {
            n2[t3] = { type: a2.type, value: { itemIndex: r2, key: t3 } };
            continue;
          }
          n2[t3] = { type: a2.type, value: i2 };
        }
      }
      return { pointer: t2, data: n2 };
    }
    async resolveRichText(e2) {
      let { itemIndex: t2, key: n2 } = e2, r2 = (await pf(this.collection, this.locale))[t2]?.[n2];
      return hg.is(r2) ? r2.readMaybeAsync() : r2;
    }
    async scanItems() {
      return (await pf(this.collection, this.locale)).map((e2, t2) => {
        let n2 = String(t2);
        return this.getDatabaseItem(e2, n2);
      });
    }
    async resolveItems(e2) {
      let t2 = await pf(this.collection, this.locale);
      return e2.map((e3) => {
        let n2 = t2[Number(e3)];
        return B(n2, `Can't find collection item`), this.getDatabaseItem(n2, e3);
      });
    }
    compareItems(e2, t2) {
      return Number(e2.pointer) - Number(t2.pointer);
    }
  }, Mw = /* @__PURE__ */ new Map(), Nw = /* @__PURE__ */ new WeakMap(), Pw = `$r_`, Fw = /* @__PURE__ */ new Map(), Iw = 1e3, Z = class e2 {
    constructor(e3) {
      this.network = e3;
    }
    static estimate(t2, n2) {
      let r2 = vf(), i2 = yf();
      return new e2(t2 * r2 + n2 / i2);
    }
    static max(t2, n2) {
      return new e2(Math.max(t2.network, n2.network));
    }
    static compare(e3, t2) {
      return e3.network < t2.network ? -1 : e3.network > t2.network ? 1 : 0;
    }
    add(e3) {
      return this.network += e3.network, this;
    }
    toString() {
      return `${this.network}ms`;
    }
  }, Lw = class {
    constructor(e2, t2) {
      this.id = e2, this.relational = t2, I(this, `nodes`, []), I(this, `winners`, /* @__PURE__ */ new Map());
    }
    addNode(e2) {
      this.nodes.push(e2), e2.setGroup(this);
    }
    getWinner(e2) {
      let t2 = e2.getHash(), n2 = this.winners.get(t2);
      if (n2) return n2;
      let r2 = new Rw();
      return this.winners.set(t2, r2), r2;
    }
    getOptimized(e2) {
      let t2 = this.getWinner(e2);
      B(t2.node, `Group not optimized`);
      let n2 = t2.node.getOptimized(e2);
      return n2.setGroup(this), n2;
    }
  }, Rw = class {
    constructor() {
      I(this, `node`), I(this, `cost`, new Z(1 / 0)), I(this, `nodes`, []);
    }
    update(e2, t2) {
      this.nodes.push(e2), Z.compare(t2, this.cost) < 0 && (this.node = e2, this.cost = t2);
    }
  }, zw = class {
    constructor(e2) {
      this.isSynchronous = e2;
    }
  }, Bw = class extends zw {
    constructor() {
      super(...arguments), I(this, `group`);
    }
    getGroup() {
      return B(this.group, `Node must be in a group`), this.group;
    }
    setGroup(e2) {
      B(!this.group, `Node is already in a group`), this.group = e2;
    }
    evaluateSync() {
      return wd(this.evaluate(void 0));
    }
    evaluateAsync() {
      return Td(this.evaluate(void 0));
    }
  }, Vw = class {
    constructor(e2, t2, n2 = {}) {
      this.options = n2, I(this, `collections`), I(this, `richTextCache`, /* @__PURE__ */ new WeakMap()), I(this, `vectorSetItemCache`, /* @__PURE__ */ new WeakMap()), this.collections = Df(e2, t2);
    }
    *resolveArrayValue(e2) {
      return yield* Od(e2.value.map((e3) => this.resolveValue(e3)));
    }
    *resolveObjectValue(e2) {
      let t2 = {};
      for (let n2 in e2.value) {
        let r2 = e2.value[n2];
        t2[n2] = this.resolveValue(r2);
      }
      return yield* Dd(t2);
    }
    loadRichTextValue(e2) {
      let t2 = e2.value;
      B(wf(t2), `Rich text pointer must be wrapped`);
      let n2 = this.collections.get(t2.collectionId);
      B(n2, `Can't find collection for rich text pointer`);
      let r2 = this.richTextCache.get(n2) ?? /* @__PURE__ */ new Map();
      this.richTextCache.set(n2, r2);
      let i2 = r2.get(t2.pointer);
      if (i2) return i2;
      let a2 = this.options.richTextMode === `raw` ? t2.pointer : n2.resolveRichText(t2.pointer);
      return r2.set(t2.pointer, a2), a2;
    }
    preloadRichTextValue(e2) {
      this.loadRichTextValue(e2);
    }
    *resolveRichTextValue(e2) {
      let t2 = this.loadRichTextValue(e2);
      return ot(t2) ? yield t2 : t2;
    }
    loadVectorSetItemValue(e2) {
      let t2 = e2.value;
      B(Ef(t2), `Vector set item pointer must be wrapped`);
      let n2 = this.collections.get(t2.collectionId);
      B(n2, `Can't find collection for vector set item pointer`), B(n2.resolveVectorSetItem, `Can't resolve vector set item pointer`);
      let r2 = this.vectorSetItemCache.get(n2) ?? /* @__PURE__ */ new Map();
      this.vectorSetItemCache.set(n2, r2);
      let i2 = r2.get(t2.pointer);
      if (i2) return i2;
      let a2 = n2.resolveVectorSetItem(t2.pointer);
      return r2.set(t2.pointer, a2), a2;
    }
    preloadVectorSetItemValue(e2) {
      this.loadVectorSetItemValue(e2);
    }
    *resolveVectorSetItemValue(e2) {
      let t2 = this.loadVectorSetItemValue(e2);
      return ot(t2) ? yield t2 : t2;
    }
    *resolveValue(e2) {
      switch (e2?.type) {
        case `array`:
          return yield* this.resolveArrayValue(e2);
        case `object`:
          return yield* this.resolveObjectValue(e2);
        case `richtext`:
          return yield* this.resolveRichTextValue(e2);
        case `vectorsetitem`:
          return yield* this.resolveVectorSetItemValue(e2);
      }
      return e2?.value ?? null;
    }
  }, Hw = `index`, Uw = class extends Set {
    merge(e2) {
      for (let t2 of e2) this.add(t2);
    }
    equals(e2) {
      if (this === e2) return true;
      if (this.size !== e2.size) return false;
      for (let t2 of this) if (!e2.has(t2)) return false;
      return true;
    }
    subsetOf(e2) {
      if (this === e2) return true;
      if (this.size > e2.size) return false;
      for (let t2 of this) if (!e2.has(t2)) return false;
      return true;
    }
    getHash() {
      let e2 = [];
      for (let t2 of this) e2.push(t2.id);
      return e2.sort((e3, t2) => e3 - t2), W(this.name, ...e2);
    }
  }, Ww = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.name = t2, this.data = n2, I(this, `indexes`, new Kw()), I(this, `fields`, new Q());
    }
  }, Gw = class {
    constructor(e2, t2, n2, r2, i2, a2) {
      for (let o2 in this.id = e2, this.data = t2, this.collection = n2, this.lookupNodes = r2, this.constraint = i2, this.ordering = a2, I(this, `resolvedFields`, new Q()), t2.schema) for (let e3 of n2.fields) e3.name === o2 && this.resolvedFields.add(e3);
    }
  }, Kw = class extends Uw {
    constructor() {
      super(...arguments), I(this, `name`, `Indexes`);
    }
  }, qw = class {
    constructor(e2, t2, n2, r2) {
      this.id = e2, this.name = t2, this.definition = n2, this.collection = r2;
    }
    getValue(e2) {
      B(this.name, `Can only get value of field with a name`);
      let t2 = e2.data[this.name];
      switch (t2?.type) {
        case `richtext`:
          return B(this.collection, `Rich text field must have a collection`), { type: `richtext`, value: Cf(this.collection.data, t2.value) };
        case `vectorsetitem`:
          return B(this.collection, `Vector set item field must have a collection`), { type: `vectorsetitem`, value: Tf(this.collection.data, t2.value) };
      }
      return t2 ?? null;
    }
  }, Q = class extends Uw {
    constructor() {
      super(...arguments), I(this, `name`, `Fields`);
    }
  }, Jw = class {
    constructor(e2, t2 = `asc`) {
      this.field = e2, this.direction = t2;
    }
    getHash() {
      return W(`OrderingField`, this.field.id, this.direction);
    }
  }, Yw = class {
    constructor(e2) {
      I(this, `fields`, []), e2 && this.merge(e2);
    }
    get length() {
      return this.fields.length;
    }
    getHash() {
      return W(`Ordering`, ...this.fields);
    }
    push(e2) {
      this.fields.push(e2);
    }
    merge(e2) {
      this.fields.push(...e2.fields);
    }
    equals(e2) {
      return this === e2 ? true : this.length === e2.length ? this.getHash() === e2.getHash() : false;
    }
    providedByFields(e2) {
      for (let { field: t2 } of this.fields) if (!e2.has(t2) && t2.name !== Hw) return false;
      return true;
    }
  }, Xw = class {
    constructor(e2, t2) {
      this.ordering = e2, this.resolvedFields = t2;
    }
    getHash() {
      return W(`RequiredProps`, this.ordering, this.resolvedFields);
    }
    get isMinimal() {
      return this.ordering.length === 0 && this.resolvedFields.size === 0;
    }
    canProvide(e2) {
      return this.canProvideOrdering(e2) && this.canProvideResolvedFields(e2);
    }
    canProvideOrdering(e2) {
      return this.ordering.length === 0 ? true : e2.canProvideOrdering(this.ordering);
    }
    canProvideResolvedFields(e2) {
      return this.resolvedFields.size === 0 ? true : e2.canProvideResolvedFields(this.resolvedFields);
    }
  }, Zw = class e2 {
    constructor(e3) {
      this.parent = e3, I(this, `node`), I(this, `ordering`), I(this, `fields`, []);
    }
    takeNode() {
      let e3 = this.node;
      return B(e3, `Node is missing`), this.node = void 0, e3;
    }
    setNode(e3) {
      B(!this.node, `Node already set`), this.node = e3;
    }
    setOrdering(e3) {
      this.ordering = e3;
    }
    push() {
      return new e2(this);
    }
    replace() {
      return new e2(this.parent);
    }
    addField(e3) {
      this.fields.push(e3);
    }
    addFieldsFromScope(e3) {
      for (let t2 of e3.fields) this.addField(t2);
    }
    resolveField(e3, t2) {
      let n2 = [];
      for (let r2 of this.fields) r2.name === e3 && (t2 && r2.collectionName !== t2 || n2.push(r2));
      if (n2.length === 1) return n2[0];
      if (n2.length > 1) throw Error(`Ambiguous fields`);
      return this.parent?.resolveField(e3, t2);
    }
    has(e3) {
      return this.fields.includes(e3) ? true : this.parent?.has(e3) ?? false;
    }
    getRequiredOrdering() {
      return this.ordering ?? new Yw();
    }
    getRequiredResolvedFields() {
      let e3 = new Q();
      for (let { field: t2 } of this.fields) t2.collection && e3.add(t2);
      return e3;
    }
    getRequiredProps() {
      return new Xw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
    }
    getNamedFields() {
      let e3 = {};
      for (let { name: t2, field: n2 } of this.fields) e3[t2] = n2;
      return e3;
    }
    getSingleField() {
      B(this.fields.length === 1, `Scope must contain exactly one field`);
      let e3 = this.fields[0];
      return B(e3, `Field must exist`), e3.field;
    }
  }, Qw = class {
    constructor() {
      I(this, `pointers`, /* @__PURE__ */ new Map()), I(this, `values`, /* @__PURE__ */ new Map());
    }
    getKey() {
      let e2 = [];
      for (let [t2, n2] of this.pointers) e2.push(`${t2.id}-${n2}`);
      return e2.sort().join(`-`);
    }
    addValue(e2, t2) {
      this.values.set(e2, t2);
    }
    getValue(e2) {
      return this.values.get(e2) ?? null;
    }
    mergeValues(e2) {
      for (let [t2, n2] of e2.values) this.addValue(t2, n2);
    }
    addPointer(e2, t2) {
      this.pointers.set(e2, t2);
    }
    getPointer(e2) {
      return this.pointers.get(e2);
    }
    mergePointers(e2) {
      for (let [t2, n2] of e2.pointers) this.addPointer(t2, n2);
    }
    merge(e2) {
      this.mergeValues(e2), this.mergePointers(e2);
    }
  }, $w = class e2 {
    constructor(e3, t2 = []) {
      this.fields = e3, this.tuples = t2;
    }
    push(e3) {
      this.tuples.push(e3);
    }
    filter(t2) {
      let n2 = this.tuples.filter(t2);
      return new e2(this.fields, n2);
    }
    map(t2, n2) {
      return new e2(t2, this.tuples.map(n2));
    }
    sort(t2) {
      let n2 = Array.from(this.tuples).sort(t2);
      return new e2(this.fields, n2);
    }
    slice(t2, n2) {
      let r2 = this.tuples.slice(t2, n2);
      return new e2(this.fields, r2);
    }
    union(t2) {
      let n2 = new Q();
      for (let e3 of this.fields) t2.fields.has(e3) && n2.add(e3);
      let r2 = /* @__PURE__ */ new Set(), i2 = new e2(n2);
      for (let e3 of this.tuples) {
        let t3 = e3.getKey();
        r2.add(t3), i2.push(e3);
      }
      for (let e3 of t2.tuples) {
        let t3 = e3.getKey();
        r2.has(t3) || i2.push(e3);
      }
      return i2;
    }
    intersection(t2) {
      let n2 = new Q();
      for (let e3 of this.fields) t2.fields.has(e3) && n2.add(e3);
      let r2 = /* @__PURE__ */ new Set(), i2 = new e2(n2);
      for (let e3 of this.tuples) {
        let t3 = e3.getKey();
        r2.add(t3);
      }
      for (let e3 of t2.tuples) {
        let t3 = e3.getKey();
        r2.has(t3) && i2.push(e3);
      }
      return i2;
    }
  }, eT = class {
    constructor(e2, t2) {
      this.input = e2, this.field = t2;
    }
    getHash() {
      return W(`ProjectionField`, this.input, this.field.id);
    }
  }, tT = class e2 extends Bw {
    constructor(e3, t2, n2) {
      let r2 = e3.isSynchronous;
      for (let e4 of t2) r2 &&= e4.input.isSynchronous;
      super(r2), this.input = e3, this.projections = t2, this.passthrough = n2, I(this, `inputGroup`), this.inputGroup = e3.getGroup();
    }
    getHash() {
      return W(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
    }
    getOutputFields() {
      let e3 = new Q();
      e3.merge(this.passthrough);
      for (let t2 of this.projections) e3.add(t2.field);
      return e3;
    }
    canProvideOrdering(e3) {
      let t2 = new Q();
      for (let e4 of this.projections) t2.add(e4.field);
      for (let { field: n2 } of e3.fields) if (t2.has(n2)) return false;
      return true;
    }
    canProvideResolvedFields() {
      return true;
    }
    getInputRequiredProps(e3) {
      let t2 = new Q(e3.resolvedFields);
      for (let e4 of this.projections) t2.merge(e4.input.referencedFields), t2.delete(e4.field);
      return new Xw(e3.ordering, t2);
    }
    optimize(e3, t2) {
      let n2 = this.getInputRequiredProps(t2), r2 = e3.optimizeGroup(this.inputGroup, n2), i2 = new Z(0);
      for (let t3 of this.projections) {
        let n3 = t3.input.optimize(e3);
        i2 = Z.max(i2, n3);
      }
      return new Z(0).add(Z.max(r2, i2));
    }
    getOptimized(t2) {
      let n2 = this.getInputRequiredProps(t2);
      return new e2(this.inputGroup.getOptimized(n2), this.projections.map((e3) => new eT(e3.input.getOptimized(), e3.field)), this.passthrough);
    }
    *evaluate(e3) {
      let t2 = this.getOutputFields(), n2 = yield* this.input.evaluate(e3), r2 = yield* Od(n2.tuples.map((t3) => Od(this.projections.map((n3) => Dd({ field: n3.field, value: n3.input.evaluate(e3, t3) })))));
      return n2.map(t2, (e4, t3) => {
        let n3 = new Qw();
        n3.mergePointers(e4);
        for (let t4 of this.passthrough) {
          let r3 = e4.getValue(t4);
          n3.addValue(t4, r3);
        }
        let i2 = r2[t3];
        B(i2, `Projections must exist`);
        for (let { field: e5, value: t4 } of i2) n3.addValue(e5, t4);
        return n3;
      });
    }
  }, nT = { type: 0 }, rT = class extends zw {
    constructor(e2, t2, n2) {
      super(n2), this.referencedFields = e2, this.referencedOuterFields = t2, this.isSynchronous = n2;
    }
    evaluateSync() {
      return wd(this.evaluate(void 0, void 0));
    }
    evaluateAsync() {
      return Td(this.evaluate(void 0, void 0));
    }
  }, iT = { type: 0 }, aT = class {
    constructor(e2, t2) {
      this.when = e2, this.then = t2;
    }
    getHash() {
      return W(`CaseCondition`, this.when, this.then);
    }
  }, oT = class e2 extends rT {
    constructor(e3, t2, n2) {
      let r2 = new Q(), i2 = new Q(), a2 = true;
      e3 && (r2.merge(e3.referencedFields), i2.merge(e3.referencedOuterFields), a2 &&= e3.isSynchronous);
      for (let { when: e4, then: n3 } of t2) r2.merge(e4.referencedFields), i2.merge(e4.referencedOuterFields), a2 &&= e4.isSynchronous, r2.merge(n3.referencedFields), i2.merge(n3.referencedOuterFields), a2 &&= n3.isSynchronous;
      n2 && (r2.merge(n2.referencedFields), i2.merge(n2.referencedOuterFields), a2 &&= n2.isSynchronous), super(r2, i2, a2), this.input = e3, this.conditions = t2, this.otherwise = n2, I(this, `definition`, { type: `unknown`, isNullable: true });
    }
    getHash() {
      return W(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
    }
    optimize(e3) {
      this.input?.optimize(e3);
      for (let t2 of this.conditions) t2.when.optimize(e3), t2.then.optimize(e3);
      return this.otherwise?.optimize(e3), new Z(0);
    }
    getOptimized() {
      let t2 = this.input?.getOptimized(), n2 = this.conditions.map((e3) => new aT(e3.when.getOptimized(), e3.then.getOptimized())), r2 = this.otherwise?.getOptimized();
      return new e2(t2, n2, r2);
    }
    *evaluate(e3, t2) {
      let { input: n2, conditions: r2, otherwise: i2 } = yield* Dd({ input: this.input?.evaluate(e3, t2) ?? null, conditions: Od(this.conditions.map((n3) => Dd({ when: n3.when.evaluate(e3, t2), then: n3.then.evaluate(e3, t2) }))), otherwise: this.otherwise?.evaluate(e3, t2) ?? null });
      if (this.input) {
        for (let { when: e4, then: t3 } of r2) if (kw.equal(n2, e4, iT)) return t3;
      } else for (let { when: e4, then: t3 } of r2) if (Bd(e4)) return t3;
      return i2;
    }
  }, sT = class {
    constructor(e2, t2, n2) {
      this.normalizer = e2, this.query = t2, this.locale = n2, I(this, `collectionId`, 0), I(this, `indexId`, 0), I(this, `fieldId`, 0), I(this, `subqueries`, []);
    }
    build() {
      let e2 = new Zw();
      return this.buildQuery(e2, this.query);
    }
    buildQuery(e2, t2) {
      let n2 = { type: `Select`, ...t2 };
      return this.buildSelect(e2, n2);
    }
    buildSelect(e2, t2) {
      let n2 = this.buildFrom(e2, t2.from), r2 = n2.getRequiredOrdering();
      if (t2.where) {
        let e3 = n2.takeNode(), r3 = this.buildExpression(n2, t2.where), i3 = this.normalizer.newRelationalFilter(e3, r3);
        n2.setNode(i3);
      }
      let i2 = [], a2 = new Q(), o2;
      if (t2.orderBy) {
        o2 = new Yw();
        for (let e3 of t2.orderBy) if (e3.type === `Identifier`) {
          let t3 = n2.resolveField(e3.name, e3.collection);
          if (tt(t3)) continue;
          a2.add(t3.field);
          let r3 = new Jw(t3.field, e3.direction);
          o2.push(r3);
        } else {
          let t3 = this.buildExpression(n2, e3), r3 = new qw(Af(this.fieldId++), void 0, t3.definition, void 0), a3 = new eT(t3, r3);
          i2.push(a3);
          let s3 = new Jw(r3, e3.direction);
          o2.push(s3);
        }
        o2.merge(r2);
      } else o2 = r2;
      let s2 = this.buildSelectList(n2, t2.select, a2, i2);
      if (s2.setOrdering(o2), t2.offset) {
        let n3 = s2.takeNode(), r3 = this.buildExpression(e2, t2.offset), i3 = this.normalizer.newRelationalOffset(n3, r3, o2);
        s2.setNode(i3);
      }
      if (t2.limit) {
        let n3 = s2.takeNode(), r3 = this.buildExpression(e2, t2.limit), i3 = this.normalizer.newRelationalLimit(n3, r3, o2);
        s2.setNode(i3);
      }
      return s2;
    }
    buildSelectList(e2, t2, n2, r2) {
      let i2 = e2.push(), a2 = new Q(n2), o2 = [...r2];
      for (let n3 of t2) if (n3.type === `Identifier`) {
        let t3 = e2.resolveField(n3.name, n3.collection);
        if (tt(t3)) continue;
        a2.add(t3.field), i2.addField({ ...t3, name: n3.alias ?? t3.name });
      } else {
        let t3 = this.buildExpression(e2, n3);
        B(n3.alias, `Subqueries should have an alias`);
        let r3 = Af(this.fieldId++), a3 = n3.alias, s3 = new qw(r3, a3, t3.definition, void 0), c3 = new eT(t3, s3);
        o2.push(c3), i2.addField({ field: s3, name: a3 });
      }
      let s2 = e2.takeNode(), c2 = this.normalizer.newRelationalProject(s2, o2, a2);
      return i2.setNode(c2), i2;
    }
    buildFrom(e2, t2) {
      switch (t2.type) {
        case `Collection`:
          return this.buildCollection(e2, t2);
        case `LeftJoin`:
          return this.buildJoin(e2, t2);
        default:
          V(t2, `Unsupported from type`);
      }
    }
    buildCollection(e2, t2) {
      let n2 = e2.push(), r2 = _f(t2.data, this.locale), i2 = t2.alias, a2 = new Ww(Of(this.collectionId++), i2, r2);
      for (let [e3, t3] of Object.entries(r2.schema)) {
        let r3 = new qw(Af(this.fieldId++), e3, t3, a2);
        n2.addField({ field: r3, name: e3, collectionName: i2 }), a2.fields.add(r3);
      }
      {
        let e3 = new qw(Af(this.fieldId++), Hw, { type: `number`, isNullable: false }, a2);
        n2.addField({ field: e3, name: Hw, collectionName: i2 });
        let t3 = new Yw(), r3 = new Jw(e3);
        t3.push(r3), n2.setOrdering(t3);
      }
      for (let e3 of r2.indexes) {
        let t3 = [];
        for (let r4 of e3.fields) {
          let e4 = this.buildExpression(n2, r4);
          t3.push(e4);
        }
        let r3;
        e3.where && (r3 = this.buildExpression(n2, e3.where));
        let i3 = new Yw(), o3 = new Gw(kf(this.indexId++), e3, a2, t3, r3, i3);
        a2.indexes.add(o3);
      }
      let o2 = this.normalizer.newRelationalScan(a2);
      return n2.setNode(o2), n2;
    }
    buildJoin(e2, t2) {
      let n2 = this.buildFrom(e2, t2.left), r2 = this.buildFrom(e2, t2.right), i2 = new Yw(), a2 = n2.getRequiredOrdering();
      i2.merge(a2);
      let o2 = r2.getRequiredOrdering();
      i2.merge(o2);
      let s2 = e2.push();
      s2.addFieldsFromScope(n2), s2.addFieldsFromScope(r2), s2.setOrdering(i2);
      let c2 = this.buildExpression(s2, t2.constraint), l2 = n2.takeNode(), u2 = r2.takeNode(), d2;
      switch (t2.type) {
        case `LeftJoin`:
          d2 = this.normalizer.newRelationalLeftJoin(l2, u2, c2);
          break;
        default:
          V(t2.type, `Unsupported join type`);
      }
      return s2.setNode(d2), s2;
    }
    buildExpression(e2, t2) {
      switch (t2.type) {
        case `Identifier`:
          return this.buildIdentifier(e2, t2);
        case `LiteralValue`:
          return this.buildLiteralValue(t2);
        case `FunctionCall`:
          return this.buildFunctionCall(e2, t2);
        case `Case`:
          return this.buildCase(e2, t2);
        case `UnaryOperation`:
          return this.buildUnaryOperation(e2, t2);
        case `BinaryOperation`:
          return this.buildBinaryOperation(e2, t2);
        case `TypeCast`:
          return this.buildTypeCast(e2, t2);
        case `Select`:
          throw Error(`Subqueries are only supported inside subquery function calls`);
        default:
          V(t2, `Unsupported expression`);
      }
    }
    buildIdentifier(e2, t2) {
      let n2 = e2.resolveField(t2.name, t2.collection);
      if (n2) {
        let e3 = false;
        for (let t3 of this.subqueries) e3 ? t3.referencedOuterFields.add(n2.field) : (e3 = t3.inScope.has(n2), e3 && t3.referencedFields.add(n2.field));
        return this.normalizer.newScalarVariable(n2.field, e3);
      }
      return this.normalizer.newScalarConstant(Aw, null);
    }
    buildLiteralValue(e2) {
      let t2 = kw.parse(e2.value);
      return this.normalizer.newScalarConstant(Aw, t2);
    }
    buildFunctionCall(e2, t2) {
      let n2 = (n3) => {
        let r3 = t2.arguments[n3];
        return B(r3, `Missing argument`), this.buildExpression(e2, r3);
      }, r2 = t2.functionName;
      switch (r2) {
        case `CONTAINS`: {
          let e3 = n2(0), t3 = n2(1);
          return this.normalizer.newScalarContains(e3, t3);
        }
        case `STARTS_WITH`: {
          let e3 = n2(0), t3 = n2(1);
          return this.normalizer.newScalarStartsWith(e3, t3);
        }
        case `ENDS_WITH`: {
          let e3 = n2(0), t3 = n2(1);
          return this.normalizer.newScalarEndsWith(e3, t3);
        }
        case `LENGTH`: {
          let e3 = n2(0);
          return this.normalizer.newScalarLength(e3);
        }
        case `INDEX_OF`: {
          let e3 = n2(0), t3 = n2(1);
          return this.normalizer.newScalarIndexOf(e3, t3);
        }
        case `ARRAY`: {
          let n3 = t2.arguments[0];
          return B(n3, `Missing argument`), B(n3.type === `Select`, `Subqueries require a select expression`), this.buildSubqueryArray(e2, n3);
        }
        case `FLAT_ARRAY`: {
          let n3 = t2.arguments[0];
          return B(n3, `Missing argument`), B(n3.type === `Select`, `Subqueries require a select expression`), this.buildSubqueryFlatArray(e2, n3);
        }
        case `INTERSECT`: {
          let e3 = n2(0), t3 = n2(1);
          return this.normalizer.newScalarIntersection(e3, t3);
        }
        default:
          V(r2, `Unsupported function name`);
      }
    }
    buildSubqueryArray(e2, t2) {
      try {
        let n2 = new cT(e2);
        this.subqueries.push(n2);
        let r2 = this.buildSelect(e2, t2), i2 = r2.takeNode(), a2 = r2.getNamedFields(), o2 = r2.getRequiredOrdering(), s2 = n2.referencedFields, c2 = n2.referencedOuterFields;
        return this.normalizer.newScalarArray(i2, a2, o2, s2, c2);
      } finally {
        this.subqueries.pop();
      }
    }
    buildSubqueryFlatArray(e2, t2) {
      try {
        let n2 = new cT(e2);
        this.subqueries.push(n2);
        let r2 = this.buildSelect(e2, t2), i2 = r2.takeNode(), a2 = r2.getSingleField(), o2 = r2.getRequiredOrdering(), s2 = n2.referencedFields, c2 = n2.referencedOuterFields;
        return this.normalizer.newScalarFlatArray(i2, a2, o2, s2, c2);
      } finally {
        this.subqueries.pop();
      }
    }
    buildCase(e2, t2) {
      let n2;
      t2.value && (n2 = this.buildExpression(e2, t2.value));
      let r2 = t2.conditions.map((t3) => new aT(this.buildExpression(e2, t3.when), this.buildExpression(e2, t3.then))), i2;
      return t2.else && (i2 = this.buildExpression(e2, t2.else)), this.normalizer.newScalarCase(n2, r2, i2);
    }
    buildUnaryOperation(e2, t2) {
      let n2 = this.buildExpression(e2, t2.value);
      switch (t2.operator) {
        case `not`:
          return this.normalizer.newScalarNot(n2);
        default:
          V(t2.operator, `Unsupported unary operator`);
      }
    }
    buildBinaryOperation(e2, t2) {
      let n2 = this.buildExpression(e2, t2.left), r2 = this.buildExpression(e2, t2.right);
      switch (t2.operator) {
        case `and`:
          return this.normalizer.newScalarAnd(n2, r2);
        case `or`:
          return this.normalizer.newScalarOr(n2, r2);
        case `==`:
          return this.normalizer.newScalarEquals(n2, r2);
        case `!=`:
          return this.normalizer.newScalarNotEquals(n2, r2);
        case `<`:
          return this.normalizer.newScalarLessThan(n2, r2);
        case `<=`:
          return this.normalizer.newScalarLessThanOrEqual(n2, r2);
        case `>`:
          return this.normalizer.newScalarGreaterThan(n2, r2);
        case `>=`:
          return this.normalizer.newScalarGreaterThanOrEqual(n2, r2);
        case `in`:
          return this.normalizer.newScalarIn(n2, r2);
        default:
          V(t2.operator, `Unsupported binary operator`);
      }
    }
    buildTypeCast(e2, t2) {
      let n2 = this.buildExpression(e2, t2.value);
      switch (t2.dataType) {
        case `BOOLEAN`:
          return this.normalizer.newScalarCast(n2, { type: `boolean`, isNullable: true });
        case `DATE`:
          return this.normalizer.newScalarCast(n2, { type: `date`, isNullable: true });
        case `NUMBER`:
          return this.normalizer.newScalarCast(n2, { type: `number`, isNullable: true });
        case `STRING`:
          return this.normalizer.newScalarCast(n2, { type: `string`, isNullable: true });
        default:
          throw Error(`Unsupported data type`);
      }
    }
  }, cT = class {
    constructor(e2) {
      this.inScope = e2, I(this, `referencedFields`, new Q()), I(this, `referencedOuterFields`, new Q());
    }
  }, lT = class e2 extends Bw {
    constructor(e3, t2) {
      super(e3.isSynchronous && t2.isSynchronous), this.input = e3, this.predicate = t2, I(this, `inputGroup`), this.inputGroup = e3.getGroup();
    }
    getHash() {
      return W(`RelationalFilter`, this.inputGroup.id, this.predicate);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering() {
      return true;
    }
    canProvideResolvedFields() {
      return true;
    }
    getInputRequiredProps(e3) {
      let t2 = new Q(e3.resolvedFields);
      return t2.merge(this.predicate.referencedFields), new Xw(e3.ordering, t2);
    }
    optimize(e3, t2) {
      let n2 = this.getInputRequiredProps(t2), r2 = e3.optimizeGroup(this.inputGroup, n2), i2 = this.predicate.optimize(e3);
      return new Z(0).add(Z.max(r2, i2));
    }
    getOptimized(t2) {
      let n2 = this.getInputRequiredProps(t2);
      return new e2(this.inputGroup.getOptimized(n2), this.predicate.getOptimized());
    }
    *evaluate(e3) {
      let t2 = yield* this.input.evaluate(e3), n2 = yield* Od(t2.tuples.map((t3) => this.predicate.evaluate(e3, t3)));
      return t2.filter((e4, t3) => Bd(n2[t3] ?? null));
    }
  }, uT = class e2 extends Bw {
    constructor(e3, t2) {
      super(false), this.index = e3, this.query = t2;
    }
    getHash() {
      return W(`RelationalIndexLookup`, this.index.id, ...this.query);
    }
    getOutputFields() {
      return this.index.collection.fields;
    }
    canProvideOrdering(e3) {
      return e3.equals(this.index.ordering);
    }
    canProvideResolvedFields(e3) {
      return e3.subsetOf(this.index.resolvedFields);
    }
    optimize() {
      let e3 = this.query.every((e4) => e4.type === `All`);
      return Z.estimate(1, e3 ? 100 * Iw : 50 * Iw);
    }
    getOptimized() {
      return new e2(this.index, this.query);
    }
    *evaluate() {
      let e3 = this.index, t2 = e3.collection;
      return new $w(this.getOutputFields(), (yield e3.data.lookupItems(this.query)).map((n2) => {
        let r2 = new Qw();
        for (let i2 of e3.resolvedFields) {
          let e4 = i2.getValue(n2);
          r2.addPointer(t2, n2.pointer), r2.addValue(i2, e4);
        }
        return r2;
      }));
    }
  }, dT = class e2 extends Bw {
    constructor(e3, t2) {
      super(e3.isSynchronous && t2.isSynchronous), this.left = e3, this.right = t2, I(this, `leftGroup`), I(this, `rightGroup`), this.leftGroup = e3.getGroup(), this.rightGroup = t2.getGroup();
    }
    getHash() {
      return W(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
    }
    getOutputFields() {
      let e3 = new Q(), t2 = this.leftGroup.relational.outputFields, n2 = this.rightGroup.relational.outputFields;
      for (let r2 of t2) n2.has(r2) && e3.add(r2);
      return e3;
    }
    canProvideOrdering() {
      return false;
    }
    canProvideResolvedFields() {
      return true;
    }
    getChildRequiredProps(e3) {
      return new Xw(new Yw(), e3.resolvedFields);
    }
    optimize(e3, t2) {
      let n2 = this.getChildRequiredProps(t2), r2 = e3.optimizeGroup(this.leftGroup, n2), i2 = this.getChildRequiredProps(t2), a2 = e3.optimizeGroup(this.rightGroup, i2);
      return Z.max(r2, a2);
    }
    getOptimized(t2) {
      let n2 = this.getChildRequiredProps(t2), r2 = this.leftGroup.getOptimized(n2), i2 = this.getChildRequiredProps(t2);
      return new e2(r2, this.rightGroup.getOptimized(i2));
    }
    *evaluate(e3) {
      let { left: t2, right: n2 } = yield* Dd({ left: this.left.evaluate(e3), right: this.right.evaluate(e3) });
      return t2.intersection(n2);
    }
  }, fT = class e2 extends Bw {
    constructor(e3) {
      super(false), this.collection = e3;
    }
    getHash() {
      return W(`RelationalScan`, this.collection.id);
    }
    getOutputFields() {
      return this.collection.fields;
    }
    canProvideOrdering() {
      return false;
    }
    canProvideResolvedFields(e3) {
      return e3.subsetOf(this.collection.fields);
    }
    optimize() {
      return Z.estimate(1, 200 * Iw);
    }
    getOptimized() {
      return new e2(this.collection);
    }
    *evaluate() {
      let e3 = this.collection, t2 = this.getOutputFields();
      return new $w(t2, (yield e3.data.scanItems()).map((n2) => {
        let r2 = new Qw();
        for (let i2 of t2) {
          let t3 = i2.getValue(n2);
          r2.addPointer(e3, n2.pointer), r2.addValue(i2, t3);
        }
        return r2;
      }));
    }
  }, pT = class e2 extends Bw {
    constructor(e3, t2) {
      super(e3.isSynchronous && t2.isSynchronous), this.left = e3, this.right = t2, I(this, `leftGroup`), I(this, `rightGroup`), this.leftGroup = e3.getGroup(), this.rightGroup = t2.getGroup();
    }
    getHash() {
      return W(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
    }
    getOutputFields() {
      let e3 = new Q(), t2 = this.leftGroup.relational.outputFields, n2 = this.rightGroup.relational.outputFields;
      for (let r2 of t2) n2.has(r2) && e3.add(r2);
      return e3;
    }
    canProvideOrdering() {
      return false;
    }
    canProvideResolvedFields() {
      return true;
    }
    getChildRequiredProps(e3) {
      return new Xw(new Yw(), e3.resolvedFields);
    }
    optimize(e3, t2) {
      let n2 = this.getChildRequiredProps(t2), r2 = e3.optimizeGroup(this.leftGroup, n2), i2 = this.getChildRequiredProps(t2), a2 = e3.optimizeGroup(this.rightGroup, i2);
      return Z.max(r2, a2);
    }
    getOptimized(t2) {
      let n2 = this.getChildRequiredProps(t2), r2 = this.leftGroup.getOptimized(n2), i2 = this.getChildRequiredProps(t2);
      return new e2(r2, this.rightGroup.getOptimized(i2));
    }
    *evaluate(e3) {
      let { left: t2, right: n2 } = yield* Dd({ left: this.left.evaluate(e3), right: this.right.evaluate(e3) });
      return t2.union(n2);
    }
  }, mT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarAnd`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: Bd(n2) && Bd(r2) };
    }
  }, hT = class extends rT {
    constructor(e2, t2) {
      let n2 = new Q(), r2 = new Q();
      super(n2, r2, true), this.definition = e2, this.value = t2;
    }
    getHash() {
      return W(`ScalarConstant`, this.definition, this.value);
    }
    optimize() {
      return new Z(0);
    }
    getOptimized() {
      return this;
    }
    *evaluate() {
      return this.value;
    }
  }, gT = { type: 0 }, _T = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.source = e3, this.target = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarContains`, this.source, this.target);
    }
    optimize(e3) {
      let t2 = this.source.optimize(e3), n2 = this.target.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.source.getOptimized(), this.target.getOptimized());
    }
    *evaluate(e3, t2) {
      let { source: n2, target: r2 } = yield* Dd({ source: this.source.evaluate(e3, t2), target: this.target.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.contains(n2, r2, gT) };
    }
  }, vT = { type: 0 }, yT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.source = e3, this.target = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarEndsWith`, this.source, this.target);
    }
    optimize(e3) {
      let t2 = this.source.optimize(e3), n2 = this.target.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.source.getOptimized(), this.target.getOptimized());
    }
    *evaluate(e3, t2) {
      let { source: n2, target: r2 } = yield* Dd({ source: this.source.evaluate(e3, t2), target: this.target.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.endsWith(n2, r2, vT) };
    }
  }, bT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarEquals`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.equal(n2, r2, nT) };
    }
  }, xT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarGreaterThan`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.greaterThan(n2, r2, nT) };
    }
  }, ST = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarGreaterThanOrEqual`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.greaterThanOrEqual(n2, r2, nT) };
    }
  }, CT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarLessThan`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.lessThan(n2, r2, nT) };
    }
  }, wT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarLessThanOrEqual`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.lessThanOrEqual(n2, r2, nT) };
    }
  }, TT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarNotEquals`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: !kw.equal(n2, r2, nT) };
    }
  }, ET = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarOr`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: Bd(n2) || Bd(r2) };
    }
  }, DT = { type: 0 }, OT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.source = e3, this.target = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarStartsWith`, this.source, this.target);
    }
    optimize(e3) {
      let t2 = this.source.optimize(e3), n2 = this.target.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.source.getOptimized(), this.target.getOptimized());
    }
    *evaluate(e3, t2) {
      let { source: n2, target: r2 } = yield* Dd({ source: this.source.evaluate(e3, t2), target: this.target.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.startsWith(n2, r2, DT) };
    }
  }, kT = class {
    constructor(e2) {
      this.normalizer = e2, I(this, `memo`), this.memo = e2.memo;
    }
    explore(e2) {
      let t2 = e2.getGroup();
      if (e2 instanceof lT) {
        if (e2.predicate instanceof mT) {
          let n2 = new dT(this.normalizer.newRelationalFilter(e2.input, e2.predicate.left), this.normalizer.newRelationalFilter(e2.input, e2.predicate.right));
          this.memo.addRelational(n2, t2);
        }
        if (e2.predicate instanceof ET) {
          let n2 = new pT(this.normalizer.newRelationalFilter(e2.input, e2.predicate.left), this.normalizer.newRelationalFilter(e2.input, e2.predicate.right));
          this.memo.addRelational(n2, t2);
        }
      }
      if (e2 instanceof fT) for (let n2 of e2.collection.indexes) {
        if (n2.constraint) continue;
        let e3 = new uT(n2, jf(n2.lookupNodes.length));
        this.memo.addRelational(e3, t2);
      }
      if (e2 instanceof lT) {
        for (let n2 of e2.inputGroup.nodes) if (n2 instanceof fT) for (let r2 of n2.collection.indexes) {
          if (e2.predicate instanceof bT && e2.predicate.left === r2.lookupNodes[0] && e2.predicate.right instanceof hT && r2.data.supportedLookupTypes.includes(`Equals`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `Equals`, value: e2.predicate.right.value };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof TT && e2.predicate.left === r2.lookupNodes[0] && e2.predicate.right instanceof hT && r2.data.supportedLookupTypes.includes(`NotEquals`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `NotEquals`, value: e2.predicate.right.value };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof CT && e2.predicate.left === r2.lookupNodes[0] && e2.predicate.right instanceof hT && r2.data.supportedLookupTypes.includes(`LessThan`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `LessThan`, value: e2.predicate.right.value, inclusive: false };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof wT && e2.predicate.left === r2.lookupNodes[0] && e2.predicate.right instanceof hT && r2.data.supportedLookupTypes.includes(`LessThan`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `LessThan`, value: e2.predicate.right.value, inclusive: true };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof xT && e2.predicate.left === r2.lookupNodes[0] && e2.predicate.right instanceof hT && r2.data.supportedLookupTypes.includes(`GreaterThan`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `GreaterThan`, value: e2.predicate.right.value, inclusive: false };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof ST && e2.predicate.left === r2.lookupNodes[0] && e2.predicate.right instanceof hT && r2.data.supportedLookupTypes.includes(`GreaterThan`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `GreaterThan`, value: e2.predicate.right.value, inclusive: true };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof _T && e2.predicate.source === r2.lookupNodes[0] && e2.predicate.target instanceof hT && r2.data.supportedLookupTypes.includes(`Contains`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `Contains`, value: e2.predicate.target.value };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof OT && e2.predicate.source === r2.lookupNodes[0] && e2.predicate.target instanceof hT && r2.data.supportedLookupTypes.includes(`StartsWith`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `StartsWith`, value: e2.predicate.target.value };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
          if (e2.predicate instanceof yT && e2.predicate.source === r2.lookupNodes[0] && e2.predicate.target instanceof hT && r2.data.supportedLookupTypes.includes(`EndsWith`)) {
            let n3 = jf(r2.lookupNodes.length);
            n3[0] = { type: `EndsWith`, value: e2.predicate.target.value };
            let i2 = new uT(r2, n3);
            this.memo.addRelational(i2, t2);
          }
        }
      }
    }
  }, AT = class {
    constructor(e2) {
      this.outputFields = e2;
    }
    isCompatible(e2) {
      return this.outputFields.equals(e2.outputFields);
    }
  }, jT = class {
    constructor() {
      I(this, `nodes`, /* @__PURE__ */ new Map()), I(this, `groups`, []);
    }
    addGroup(e2) {
      let t2 = new Lw(bf(this.groups.length), e2);
      return this.groups.push(t2), t2;
    }
    addRelational(e2, t2) {
      let n2 = e2.getHash(), r2 = this.nodes.get(n2);
      if (r2) return r2;
      this.nodes.set(n2, e2);
      let i2 = new AT(e2.getOutputFields());
      return t2 ??= this.addGroup(i2), t2.addNode(e2), B(i2.isCompatible(t2.relational), `Group has inconsistent relational props`), e2;
    }
    addScalar(e2) {
      let t2 = e2.getHash();
      return this.nodes.get(t2) || (this.nodes.set(t2, e2), e2);
    }
  }, MT = class e2 extends Bw {
    constructor(e3, t2, n2) {
      super(e3.isSynchronous && t2.isSynchronous && n2.isSynchronous), this.left = e3, this.right = t2, this.constraint = n2, I(this, `leftGroup`), I(this, `rightGroup`), this.leftGroup = e3.getGroup(), this.rightGroup = t2.getGroup();
    }
    getHash() {
      return W(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
    }
    getOutputFields() {
      let e3 = new Q();
      return e3.merge(this.leftGroup.relational.outputFields), e3.merge(this.rightGroup.relational.outputFields), e3;
    }
    canProvideOrdering() {
      return false;
    }
    canProvideResolvedFields() {
      return true;
    }
    getChildRequiredProps(e3, t2) {
      let n2 = new Q(), r2 = e3.relational.outputFields;
      for (let e4 of t2.resolvedFields) r2.has(e4) && n2.add(e4);
      for (let e4 of this.constraint.referencedFields) r2.has(e4) && n2.add(e4);
      return new Xw(new Yw(), n2);
    }
    optimize(e3, t2) {
      let n2 = this.getChildRequiredProps(this.leftGroup, t2), r2 = e3.optimizeGroup(this.leftGroup, n2), i2 = this.getChildRequiredProps(this.rightGroup, t2), a2 = e3.optimizeGroup(this.rightGroup, i2), o2 = this.constraint.optimize(e3);
      return Z.max(Z.max(r2, a2), o2);
    }
    getOptimized(t2) {
      let n2 = this.getChildRequiredProps(this.leftGroup, t2), r2 = this.leftGroup.getOptimized(n2), i2 = this.getChildRequiredProps(this.rightGroup, t2);
      return new e2(r2, this.rightGroup.getOptimized(i2), this.constraint.getOptimized());
    }
    *evaluateScalarEquals(e3, t2, n2, r2, i2) {
      let a2 = /* @__PURE__ */ new Map();
      for (let e4 of t2.tuples) {
        let t3 = yield* r2.evaluate(i2, e4), n3 = JSON.stringify(t3?.value ?? null), o3 = a2.get(n3) ?? [];
        o3.push(e4), a2.set(n3, o3);
      }
      let o2 = new $w(this.getOutputFields());
      for (let t3 of e3.tuples) {
        let e4 = yield* n2.evaluate(i2, t3), r3 = JSON.stringify(e4?.value ?? null), s2 = a2.get(r3) ?? [];
        if (s2.length === 0) o2.push(t3);
        else for (let e5 of s2) {
          let n3 = new Qw();
          n3.merge(t3), n3.merge(e5), o2.push(n3);
        }
      }
      return o2;
    }
    *evaluate(e3) {
      let { left: t2, right: n2 } = yield* Dd({ left: this.left.evaluate(e3), right: this.right.evaluate(e3) });
      if (this.constraint instanceof bT) {
        if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(t2, n2, this.constraint.left, this.constraint.right, e3);
        if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(t2, n2, this.constraint.right, this.constraint.left, e3);
      }
      let r2 = new $w(this.getOutputFields());
      for (let i2 of t2.tuples) {
        let t3 = false;
        for (let a2 of n2.tuples) {
          let n3 = new Qw();
          n3.merge(i2), n3.merge(a2), Bd(yield* this.constraint.evaluate(e3, n3)) && (r2.push(n3), t3 = true);
        }
        t3 || r2.push(i2);
      }
      return r2;
    }
  }, NT = class e2 extends Bw {
    constructor(e3, t2, n2) {
      super(e3.isSynchronous && t2.isSynchronous), this.input = e3, this.limit = t2, this.ordering = n2, I(this, `inputGroup`), this.inputGroup = e3.getGroup();
    }
    getHash() {
      return W(`RelationalLimit`, this.inputGroup.id, this.limit);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e3) {
      return e3.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return true;
    }
    getInputRequiredProps(e3) {
      let t2 = new Q(e3.resolvedFields);
      return t2.merge(this.limit.referencedFields), new Xw(this.ordering, t2);
    }
    optimize(e3, t2) {
      let n2 = this.getInputRequiredProps(t2), r2 = e3.optimizeGroup(this.inputGroup, n2), i2 = this.limit.optimize(e3);
      return new Z(0).add(Z.max(r2, i2));
    }
    getOptimized(t2) {
      let n2 = this.getInputRequiredProps(t2);
      return new e2(this.inputGroup.getOptimized(n2), this.limit.getOptimized(), this.ordering);
    }
    *evaluate(e3) {
      let { input: t2, limit: n2 } = yield* Dd({ input: this.input.evaluate(e3), limit: this.limit.evaluate(e3, void 0) }), r2 = $d(n2) ?? 1 / 0;
      return r2 === 1 / 0 ? t2 : t2.slice(0, r2);
    }
  }, PT = class e2 extends Bw {
    constructor(e3, t2, n2) {
      super(e3.isSynchronous && t2.isSynchronous), this.input = e3, this.offset = t2, this.ordering = n2, I(this, `inputGroup`), this.inputGroup = e3.getGroup();
    }
    getHash() {
      return W(`RelationalOffset`, this.inputGroup.id, this.offset);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e3) {
      return e3.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return true;
    }
    getInputRequiredProps(e3) {
      let t2 = new Q(e3.resolvedFields);
      return t2.merge(this.offset.referencedFields), new Xw(this.ordering, t2);
    }
    optimize(e3, t2) {
      let n2 = this.getInputRequiredProps(t2), r2 = e3.optimizeGroup(this.inputGroup, n2), i2 = this.offset.optimize(e3);
      return new Z(0).add(Z.max(r2, i2));
    }
    getOptimized(t2) {
      let n2 = this.getInputRequiredProps(t2);
      return new e2(this.inputGroup.getOptimized(n2), this.offset.getOptimized(), this.ordering);
    }
    *evaluate(e3) {
      let { input: t2, offset: n2 } = yield* Dd({ input: this.input.evaluate(e3), offset: this.offset.evaluate(e3, void 0) }), r2 = $d(n2) ?? 0;
      return r2 === 0 ? t2 : t2.slice(r2);
    }
  }, FT = class e2 extends rT {
    constructor(e3, t2, n2, r2, i2) {
      super(r2, i2, e3.isSynchronous), this.input = e3, this.namedFields = t2, this.ordering = n2, this.referencedFields = r2, this.referencedOuterFields = i2, I(this, `inputGroup`), I(this, `definition`), this.inputGroup = e3.getGroup();
      let a2 = {}, o2 = Object.entries(t2);
      for (let [e4, t3] of o2) a2[e4] = t3.definition;
      this.definition = { type: `array`, isNullable: false, definition: { type: `object`, isNullable: false, definitions: a2 } };
    }
    getHash() {
      let e3 = {}, t2 = Object.entries(this.namedFields);
      for (let [n2, r2] of t2) e3[n2] = r2.id;
      return W(`ScalarArray`, this.inputGroup.id, e3, this.ordering, this.referencedFields, this.referencedOuterFields);
    }
    getInputRequiredProps() {
      let e3 = new Q(), t2 = Object.values(this.namedFields);
      for (let n2 of t2) tt(n2.collection) || e3.add(n2);
      return new Xw(this.ordering, e3);
    }
    optimize(e3) {
      let t2 = this.getInputRequiredProps(), n2 = e3.optimizeGroup(this.inputGroup, t2);
      return new Z(0).add(n2);
    }
    getOptimized() {
      let t2 = this.getInputRequiredProps();
      return new e2(this.inputGroup.getOptimized(t2), this.namedFields, this.ordering, this.referencedFields, this.referencedOuterFields);
    }
    *evaluate(e3, t2) {
      let n2 = new Qw();
      e3 && n2.merge(e3), t2 && n2.merge(t2);
      let r2 = yield* this.input.evaluate(n2), i2 = Object.entries(this.namedFields);
      return { type: `array`, value: r2.tuples.map((e4) => {
        let t3 = {};
        for (let [n3, r3] of i2) t3[n3] = e4.getValue(r3);
        return { type: `object`, value: t3 };
      }) };
    }
  }, IT = class e2 extends rT {
    constructor(e3, t2) {
      super(e3.referencedFields, e3.referencedOuterFields, e3.isSynchronous), this.input = e3, this.definition = t2, B(t2.isNullable, `Unsupported non-nullable cast`);
    }
    getHash() {
      return W(`ScalarCast`, this.input, this.definition);
    }
    optimize(e3) {
      return this.input.optimize(e3);
    }
    getOptimized() {
      return new e2(this.input.getOptimized(), this.definition);
    }
    *evaluate(e3, t2) {
      let n2 = yield* this.input.evaluate(e3, t2);
      return kw.cast(n2, this.definition);
    }
  }, LT = class e2 extends rT {
    constructor(e3, t2, n2, r2, i2) {
      super(r2, i2, e3.isSynchronous), this.input = e3, this.field = t2, this.ordering = n2, this.referencedFields = r2, this.referencedOuterFields = i2, I(this, `inputGroup`), I(this, `definition`), this.inputGroup = e3.getGroup(), this.definition = { type: `array`, isNullable: false, definition: t2.definition };
    }
    getHash() {
      return W(`ScalarFlatArray`, this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields);
    }
    getInputRequiredProps() {
      let e3 = new Q();
      return tt(this.field.collection) || e3.add(this.field), new Xw(this.ordering, e3);
    }
    optimize(e3) {
      let t2 = this.getInputRequiredProps(), n2 = e3.optimizeGroup(this.inputGroup, t2);
      return new Z(0).add(n2);
    }
    getOptimized() {
      let t2 = this.getInputRequiredProps();
      return new e2(this.inputGroup.getOptimized(t2), this.field, this.ordering, this.referencedFields, this.referencedOuterFields);
    }
    *evaluate(e3, t2) {
      let n2 = new Qw();
      return e3 && n2.merge(e3), t2 && n2.merge(t2), { type: `array`, value: (yield* this.input.evaluate(n2)).tuples.map((e4) => e4.getValue(this.field)) };
    }
  }, RT = { type: 0 }, zT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarIn`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: kw.in(n2, r2, RT) };
    }
  }, BT = { type: 1 }, VT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.source = e3, this.target = t2, I(this, `definition`, { type: `number`, isNullable: false });
    }
    getHash() {
      return W(`ScalarIndexOf`, this.source, this.target);
    }
    optimize(e3) {
      let t2 = this.source.optimize(e3), n2 = this.target.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.source.getOptimized(), this.target.getOptimized());
    }
    *evaluate(e3, t2) {
      let { source: n2, target: r2 } = yield* Dd({ source: this.source.evaluate(e3, t2), target: this.target.evaluate(e3, t2) });
      return { type: `number`, value: kw.indexOf(n2, r2, BT) };
    }
  }, HT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `array`, definition: { type: `string`, isNullable: false }, isNullable: false });
    }
    getHash() {
      return W(`ScalarIntersection`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) }), i2 = Nf(n2), a2 = Nf(r2), o2 = [], s2 = i2.size < a2.size ? i2 : a2, c2 = s2 === i2 ? a2 : i2;
      for (let e4 of s2) c2.has(e4) && o2.push({ type: `string`, value: e4 });
      return { type: `array`, value: o2 };
    }
  }, UT = class e2 extends rT {
    constructor(e3) {
      super(e3.referencedFields, e3.referencedOuterFields, e3.isSynchronous), this.input = e3, I(this, `definition`, { type: `number`, isNullable: false });
    }
    getHash() {
      return W(`ScalarLength`, this.input);
    }
    optimize(e3) {
      return this.input.optimize(e3);
    }
    getOptimized() {
      return new e2(this.input.getOptimized());
    }
    *evaluate(e3, t2) {
      let n2 = yield* this.input.evaluate(e3, t2);
      return { type: `number`, value: kw.length(n2) };
    }
  }, WT = class e2 extends rT {
    constructor(e3) {
      super(e3.referencedFields, e3.referencedOuterFields, e3.isSynchronous), this.input = e3, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarNot`, this.input);
    }
    optimize(e3) {
      return this.input.optimize(e3);
    }
    getOptimized() {
      return new e2(this.input.getOptimized());
    }
    *evaluate(e3, t2) {
      return { type: `boolean`, value: !Bd(yield* this.input.evaluate(e3, t2)) };
    }
  }, GT = { type: 0 }, KT = class e2 extends rT {
    constructor(e3, t2) {
      let n2 = new Q();
      n2.merge(e3.referencedFields), n2.merge(t2.referencedFields);
      let r2 = new Q();
      r2.merge(e3.referencedOuterFields), r2.merge(t2.referencedOuterFields);
      let i2 = e3.isSynchronous && t2.isSynchronous;
      super(n2, r2, i2), this.left = e3, this.right = t2, I(this, `definition`, { type: `boolean`, isNullable: false });
    }
    getHash() {
      return W(`ScalarNotIn`, this.left, this.right);
    }
    optimize(e3) {
      let t2 = this.left.optimize(e3), n2 = this.right.optimize(e3);
      return Z.max(t2, n2);
    }
    getOptimized() {
      return new e2(this.left.getOptimized(), this.right.getOptimized());
    }
    *evaluate(e3, t2) {
      let { left: n2, right: r2 } = yield* Dd({ left: this.left.evaluate(e3, t2), right: this.right.evaluate(e3, t2) });
      return { type: `boolean`, value: !kw.in(n2, r2, GT) };
    }
  }, qT = class extends rT {
    constructor(e2, t2) {
      B(e2.name !== Hw, `Invalid field name`);
      let n2 = new Q(), r2 = new Q();
      t2 ? r2.add(e2) : n2.add(e2), super(n2, r2, true), this.field = e2, this.isOuterField = t2, I(this, `definition`), this.definition = e2.definition;
    }
    getHash() {
      return W(`ScalarVariable`, this.field.id, this.isOuterField);
    }
    optimize() {
      return new Z(0);
    }
    getOptimized() {
      return this;
    }
    *evaluate(e2, t2) {
      return this.isOuterField ? (B(e2, `Context must exist`), e2.getValue(this.field)) : (B(t2, `Tuple must exist`), t2.getValue(this.field));
    }
  }, JT = class {
    constructor(e2) {
      this.memo = e2;
    }
    finishRelational(e2) {
      return this.memo.addRelational(e2);
    }
    newRelationalScan(e2) {
      let t2 = new fT(e2);
      return this.finishRelational(t2);
    }
    newRelationalIndexLookup(e2, t2) {
      let n2 = new uT(e2, t2);
      return this.finishRelational(n2);
    }
    newRelationalLeftJoin(e2, t2, n2) {
      let r2 = new MT(e2, t2, n2);
      return this.finishRelational(r2);
    }
    newRelationalRightJoin(e2, t2, n2) {
      return this.newRelationalLeftJoin(t2, e2, n2);
    }
    newRelationalFilter(e2, t2) {
      if (t2 instanceof hT && t2.value?.type === `boolean` && t2.value.value === true) return e2;
      if (e2 instanceof MT && t2.referencedFields.subsetOf(e2.leftGroup.relational.outputFields)) {
        let n3 = this.newRelationalFilter(e2.left, t2);
        return this.newRelationalLeftJoin(n3, e2.right, e2.constraint);
      }
      let n2 = new lT(e2, t2);
      return this.finishRelational(n2);
    }
    newRelationalProject(e2, t2, n2) {
      let r2 = new tT(e2, t2, n2);
      return this.finishRelational(r2);
    }
    newRelationalLimit(e2, t2, n2) {
      if (e2 instanceof tT && t2.referencedFields.subsetOf(e2.inputGroup.relational.outputFields) && n2.providedByFields(e2.inputGroup.relational.outputFields)) {
        let r3 = this.newRelationalLimit(e2.input, t2, n2);
        return this.newRelationalProject(r3, e2.projections, e2.passthrough);
      }
      let r2 = new NT(e2, t2, n2);
      return this.finishRelational(r2);
    }
    newRelationalOffset(e2, t2, n2) {
      let r2 = new PT(e2, t2, n2);
      return this.finishRelational(r2);
    }
    finishScalar(e2) {
      if (!(e2 instanceof hT) && e2.isSynchronous && e2.referencedFields.size === 0 && e2.referencedOuterFields.size === 0) {
        let t2 = e2.evaluateSync();
        return this.newScalarConstant(e2.definition, t2);
      }
      return this.memo.addScalar(e2);
    }
    removeUnknown(e2, t2) {
      if (e2.definition.type !== `unknown` || t2.type === `unknown`) return e2;
      let n2 = { ...t2, isNullable: true };
      return this.newScalarCast(e2, n2);
    }
    newScalarVariable(e2, t2) {
      let n2 = new qT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarConstant(e2, t2) {
      let n2 = new hT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarNot(e2) {
      if (e2 instanceof WT) return e2.input.definition.type === `boolean` ? e2.input : this.newScalarCast(e2.input, { type: `boolean`, isNullable: true });
      if (e2 instanceof bT) return this.newScalarNotEquals(e2.left, e2.right);
      if (e2 instanceof TT) return this.newScalarEquals(e2.left, e2.right);
      if (e2 instanceof CT) return this.newScalarGreaterThanOrEqual(e2.left, e2.right);
      if (e2 instanceof wT) return this.newScalarGreaterThan(e2.left, e2.right);
      if (e2 instanceof xT) return this.newScalarLessThanOrEqual(e2.left, e2.right);
      if (e2 instanceof ST) return this.newScalarLessThan(e2.left, e2.right);
      if (e2 instanceof mT) {
        let t3 = this.newScalarNot(e2.left), n2 = this.newScalarNot(e2.right);
        return this.newScalarOr(t3, n2);
      }
      if (e2 instanceof ET) {
        let t3 = this.newScalarNot(e2.left), n2 = this.newScalarNot(e2.right);
        return this.newScalarAnd(t3, n2);
      }
      let t2 = new WT(e2);
      return this.finishScalar(t2);
    }
    newScalarAnd(e2, t2) {
      if (t2 instanceof hT && t2.value?.type === `boolean` && t2.value.value === true) return e2;
      if (e2 instanceof hT && e2.value?.type === `boolean` && e2.value.value === true || t2 instanceof hT && t2.value?.type === `boolean` && t2.value.value === false) return t2;
      if (e2 instanceof hT && e2.value?.type === `boolean` && e2.value.value === false) return e2;
      let n2 = new mT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarOr(e2, t2) {
      if (t2 instanceof hT && t2.value?.type === `boolean` && t2.value.value === true) return t2;
      if (e2 instanceof hT && e2.value?.type === `boolean` && e2.value.value === true || t2 instanceof hT && t2.value?.type === `boolean` && t2.value.value === false) return e2;
      if (e2 instanceof hT && e2.value?.type === `boolean` && e2.value.value === false) return t2;
      let n2 = new ET(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarEquals(e2, t2) {
      let n2 = e2 instanceof qT;
      if (t2 instanceof qT && !n2) return this.newScalarEquals(t2, e2);
      e2 = this.removeUnknown(e2, t2.definition), t2 = this.removeUnknown(t2, e2.definition);
      let r2 = new bT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarNotEquals(e2, t2) {
      let n2 = e2 instanceof qT;
      if (t2 instanceof qT && !n2) return this.newScalarNotEquals(t2, e2);
      e2 = this.removeUnknown(e2, t2.definition), t2 = this.removeUnknown(t2, e2.definition);
      let r2 = new TT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarLessThan(e2, t2) {
      let n2 = e2 instanceof qT;
      if (t2 instanceof qT && !n2) return this.newScalarGreaterThan(t2, e2);
      e2 = this.removeUnknown(e2, t2.definition), t2 = this.removeUnknown(t2, e2.definition);
      let r2 = new CT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarLessThanOrEqual(e2, t2) {
      let n2 = e2 instanceof qT;
      if (t2 instanceof qT && !n2) return this.newScalarGreaterThanOrEqual(t2, e2);
      e2 = this.removeUnknown(e2, t2.definition), t2 = this.removeUnknown(t2, e2.definition);
      let r2 = new wT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarGreaterThan(e2, t2) {
      let n2 = e2 instanceof qT;
      if (t2 instanceof qT && !n2) return this.newScalarLessThan(t2, e2);
      e2 = this.removeUnknown(e2, t2.definition), t2 = this.removeUnknown(t2, e2.definition);
      let r2 = new xT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarGreaterThanOrEqual(e2, t2) {
      let n2 = e2 instanceof qT;
      if (t2 instanceof qT && !n2) return this.newScalarLessThanOrEqual(t2, e2);
      e2 = this.removeUnknown(e2, t2.definition), t2 = this.removeUnknown(t2, e2.definition);
      let r2 = new ST(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarIn(e2, t2) {
      t2.definition.type === `array` && (e2 = this.removeUnknown(e2, t2.definition.definition));
      let n2 = { type: `array`, isNullable: true, definition: e2.definition };
      t2 = this.removeUnknown(t2, n2);
      let r2 = new zT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarNotIn(e2, t2) {
      t2.definition.type === `array` && (e2 = this.removeUnknown(e2, t2.definition.definition));
      let n2 = { type: `array`, isNullable: true, definition: e2.definition };
      t2 = this.removeUnknown(t2, n2);
      let r2 = new KT(e2, t2);
      return this.finishScalar(r2);
    }
    newScalarCase(e2, t2, n2) {
      if (e2) {
        let n3 = [];
        for (let { when: r3, then: i2 } of t2) {
          let t3 = new aT(this.removeUnknown(r3, e2.definition), i2);
          n3.push(t3);
        }
        t2 = n3;
      }
      let r2 = new oT(e2, t2, n2);
      return this.finishScalar(r2);
    }
    newScalarContains(e2, t2) {
      let n2 = new _T(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarStartsWith(e2, t2) {
      let n2 = new OT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarEndsWith(e2, t2) {
      let n2 = new yT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarLength(e2) {
      let t2 = new UT(e2);
      return this.finishScalar(t2);
    }
    newScalarIndexOf(e2, t2) {
      let n2 = new VT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarArray(e2, t2, n2, r2, i2) {
      let a2 = new FT(e2, t2, n2, r2, i2);
      return this.finishScalar(a2);
    }
    newScalarFlatArray(e2, t2, n2, r2, i2) {
      let a2 = new LT(e2, t2, n2, r2, i2);
      return this.finishScalar(a2);
    }
    newScalarIntersection(e2, t2) {
      let n2 = new HT(e2, t2);
      return this.finishScalar(n2);
    }
    newScalarCast(e2, t2) {
      if (e2.definition.type === t2.type) return e2;
      let n2 = new IT(e2, t2);
      return this.finishScalar(n2);
    }
  }, YT = class extends Bw {
  }, XT = class e2 extends YT {
    constructor(e3, t2, n2) {
      super(false), this.input = e3, this.fields = t2, this.resolver = n2, I(this, `inputGroup`), this.inputGroup = e3.getGroup();
    }
    getHash() {
      return W(`EnforcerResolve`, this.inputGroup.id, this.fields);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering() {
      return true;
    }
    canProvideResolvedFields(e3) {
      return e3.subsetOf(this.fields);
    }
    getInputRequiredProps(e3) {
      let t2 = new Q();
      return new Xw(e3.ordering, t2);
    }
    optimize(e3, t2) {
      let n2 = this.getInputRequiredProps(t2), r2 = e3.optimizeGroup(this.inputGroup, n2);
      return Z.estimate(0, 100 * Iw).add(r2);
    }
    getOptimized(t2) {
      let n2 = this.getInputRequiredProps(t2);
      return new e2(this.inputGroup.getOptimized(n2), this.fields, this.resolver);
    }
    *evaluate(e3) {
      let t2 = yield* this.input.evaluate(e3);
      B(this.fields.subsetOf(t2.fields), `Fields can't be resolved`);
      let n2 = /* @__PURE__ */ new Set();
      for (let e4 of this.fields) B(e4.collection, `Collection required to resolve field`), n2.add(e4.collection);
      for (let e4 of t2.tuples) for (let t3 of this.fields) {
        let n3 = e4.getValue(t3);
        n3?.type === `richtext` ? this.resolver.preloadRichTextValue(n3) : n3?.type === `vectorsetitem` && this.resolver.preloadVectorSetItemValue(n3);
      }
      let r2 = yield Promise.all(Array.from(n2).map(async (e4) => {
        let n3 = [];
        for (let r4 of t2.tuples) {
          let t3 = r4.getPointer(e4);
          t3 && n3.push(t3);
        }
        let r3 = await e4.data.resolveItems(n3);
        return B(r3.length === n3.length, `Invalid number of items`), [e4, r3];
      }));
      return t2.map(t2.fields, (e4) => {
        let t3 = new Qw();
        t3.merge(e4);
        for (let [n3, i2] of r2) {
          let r3 = e4.getPointer(n3);
          if (!r3) continue;
          let a2 = i2.shift();
          B(a2, `Item not found`), B(a2.pointer === r3, `Pointer mismatch`);
          for (let e5 of n3.fields) {
            let n4 = e5.getValue(a2);
            t3.addValue(e5, n4);
          }
        }
        return t3;
      });
    }
  }, ZT = { type: 0 }, QT = class e2 extends YT {
    constructor(e3, t2) {
      super(e3.isSynchronous), this.input = e3, this.ordering = t2, I(this, `inputGroup`), this.inputGroup = e3.getGroup();
    }
    getHash() {
      return W(`EnforcerSort`, this.inputGroup.id, this.ordering);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e3) {
      return e3.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return true;
    }
    getInputRequiredProps(e3) {
      let t2 = new Q(e3.resolvedFields);
      for (let { field: e4 } of this.ordering.fields) e4.name !== Hw && (tt(e4.collection) || t2.add(e4));
      return new Xw(new Yw(), t2);
    }
    optimize(e3, t2) {
      let n2 = this.getInputRequiredProps(t2), r2 = e3.optimizeGroup(this.inputGroup, n2);
      return new Z(0).add(r2);
    }
    getOptimized(t2) {
      let n2 = this.getInputRequiredProps(t2);
      return new e2(this.inputGroup.getOptimized(n2), this.ordering);
    }
    *evaluate(e3) {
      return (yield* this.input.evaluate(e3)).sort((e4, t2) => {
        for (let { field: n2, direction: r2 } of this.ordering.fields) {
          let i2 = r2 === `asc`;
          if (n2.name === Hw) {
            let r3 = n2.collection;
            B(r3, `Collection required for sorting`);
            let a3 = e4.getPointer(r3);
            B(a3, `Pointer required for sorting`);
            let o3 = { pointer: a3, data: {} }, s2 = t2.getPointer(r3);
            B(s2, `Pointer required for sorting`);
            let c2 = { pointer: s2, data: {} }, l2 = r3.data.compareItems(o3, c2);
            return i2 ? l2 : -l2;
          }
          let a2 = e4.getValue(n2), o2 = t2.getValue(n2);
          if (!kw.equal(a2, o2, ZT)) {
            if (nt(a2) || kw.lessThan(a2, o2, ZT)) return i2 ? -1 : 1;
            if (nt(o2) || kw.greaterThan(a2, o2, ZT)) return i2 ? 1 : -1;
            throw Error(`Invalid comparison`);
          }
        }
        return 0;
      });
    }
  }, $T = class {
    constructor(e2, t2, n2) {
      this.query = e2, this.locale = t2, this.resolver = n2, I(this, `memo`, new jT()), I(this, `normalizer`, new JT(this.memo)), I(this, `explorer`, new kT(this.normalizer));
    }
    optimize() {
      let e2 = new sT(this.normalizer, this.query, this.locale).build(), t2 = e2.takeNode().getGroup(), n2 = e2.getRequiredProps();
      return this.optimizeGroup(t2, n2), [t2.getOptimized(n2), e2.getNamedFields()];
    }
    optimizeGroup(e2, t2) {
      let n2 = e2.getWinner(t2);
      if (n2.node) return n2.cost;
      let r2 = e2.nodes[0];
      B(r2, `Normalized node not found`), this.createEnforcer(n2, r2, t2);
      for (let r3 of e2.nodes) {
        if (t2.canProvide(r3)) {
          let e3 = r3.optimize(this, t2);
          n2.update(r3, e3);
        }
        t2.isMinimal && this.explorer.explore(r3);
      }
      return n2.cost;
    }
    createEnforcer(e2, t2, n2) {
      if (n2.resolvedFields.size > 0) {
        let r2 = new XT(t2, n2.resolvedFields, this.resolver), i2 = r2.optimize(this, n2);
        e2.update(r2, i2);
      }
      if (n2.ordering.length > 0) {
        let r2 = new QT(t2, n2.ordering), i2 = r2.optimize(this, n2);
        e2.update(r2, i2);
      }
    }
  }, eE = Cd(`query-engine`), tE = class {
    async evalQuery(e2, t2, n2, r2 = {}) {
      eE.enabled && eE.debug(`Query:
${Kf(e2)}`);
      let i2 = new Vw(e2, t2, r2), [a2, o2] = new $T(e2, t2, i2).optimize(), s2 = await a2.evaluateAsync(), c2 = Object.entries(o2), l2 = [], u2 = Ed(Od(s2.tuples.map((e3) => {
        let t3 = {}, r3 = {};
        for (let [a3, o3] of c2) {
          let s3 = e3.getValue(o3);
          t3[a3] = i2.resolveValue(s3), n2 && (r3[a3] = s3);
        }
        return n2 && l2.push(r3), Dd(t3);
      })));
      return n2 ? [st(u2) ? await u2 : u2, l2] : u2;
    }
    async serializeableQuery(e2, t2) {
      return this.evalQuery(e2, t2, true);
    }
    async query(e2, t2, n2) {
      return this.evalQuery(e2, t2, false, n2);
    }
    resolveSerializableQueryResult(e2, t2, n2) {
      let r2 = new Vw(t2, n2);
      return Ed(Od(e2.map((e3) => {
        let t3 = {}, n3;
        for (n3 in e3) {
          let i2 = e3[n3];
          t3[n3] = r2.resolveValue(i2);
        }
        return Dd(t3);
      })));
    }
  }, nE = (() => kg.QueryCache)(), rE = class {
    constructor(e2, t2 = 1 / 0) {
      this.queryEngine = e2, this.maxSize = t2, I(this, `cache`, /* @__PURE__ */ new Map()), I(this, `serializedCache`, Mg === void 0 ? void 0 : /* @__PURE__ */ new Map());
    }
    prune() {
      if (!(this.cache.size <= this.maxSize)) for (let [e2, t2] of this.cache) {
        if (this.cache.size <= this.maxSize) break;
        t2.state !== `pending` && (this.cache.delete(e2), this.serializedCache?.delete(e2));
      }
    }
    get(e2, t2) {
      let n2 = Yf(e2, t2), r2 = this.cache.get(n2);
      if (r2) {
        if (this.cache.delete(n2), this.cache.set(n2, r2), Mg !== void 0 && this.serializedCache !== void 0 && !mf(n2) && r2.state === `fulfilled`) {
          let e3 = this.serializedCache.get(n2);
          e3 !== void 0 && Mg.set(nE, n2, e3);
        }
        return r2;
      }
      let i2 = new hg(() => {
        let r3 = mf(n2), i3 = r3 ? void 0 : ln(nE, n2);
        if (i3) try {
          return this.queryEngine.resolveSerializableQueryResult(i3, e2, t2);
        } catch (e3) {
          sn(e3, n2);
        }
        return Mg !== void 0 && !r3 ? this.queryEngine.serializeableQuery(e2, t2).then(([e3, t3]) => (this.serializedCache?.set(n2, t3), Mg.set(nE, n2, t3), e3)) : this.queryEngine.query(e2, t2);
      });
      return this.cache.set(n2, i2), this.prune(), i2;
    }
  }, iE = new rE(new tE()), aE = `style[data-framer-breakpoint-css]`, oE = `page`, sE = Symbol(`cycle`), uE = (() => {
    let e2 = s(void 0);
    return e2.displayName = `TickerContext`, e2;
  })(), dE = p.createContext(void 0), fE = () => p.useContext(dE), pE = { Arial: { Regular: { selector: `Arial`, weight: void 0 }, Black: { selector: `Arial-Black`, weight: void 0 }, Narrow: { selector: `Arial Narrow`, weight: void 0 }, "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 } }, Avenir: { Book: { selector: `Avenir`, weight: void 0 }, Light: { selector: `Avenir-Light`, weight: void 0 }, Medium: { selector: `Avenir-Medium`, weight: void 0 }, Heavy: { selector: `Avenir-Heavy`, weight: void 0 }, Black: { selector: `Avenir-Black`, weight: void 0 } }, "Avenir Next": { Regular: { selector: `Avenir Next`, weight: void 0 }, "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 }, Medium: { selector: `AvenirNext-Medium`, weight: void 0 }, "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 }, Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 } }, "Avenir Next Condensed": { Regular: { selector: `Avenir Next Condensed`, weight: void 0 }, "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 }, Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 }, "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 }, Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 } }, Baskerville: { Regular: { selector: `Baskerville`, weight: void 0 }, "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 } }, "Bodoni 72": { Book: { selector: `Bodoni 72`, weight: void 0 }, Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 }, Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 } }, Courier: { Regular: { selector: `Courier`, weight: void 0 } }, "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } }, Futura: { Medium: { selector: `Futura`, weight: void 0 }, Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 }, "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 } }, Georgia: { Regular: { selector: `Georgia`, weight: void 0 } }, "Gill Sans": { Regular: { selector: `Gill Sans`, weight: void 0 }, Light: { selector: `GillSans-Light`, weight: void 0 }, SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 }, UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 } }, Helvetica: { Regular: { selector: `Helvetica`, weight: void 0 }, Light: { selector: `Helvetica-Light`, weight: void 0 }, Bold: { selector: `Helvetica-Bold`, weight: void 0 }, Oblique: { selector: `Helvetica-Oblique`, weight: void 0 }, "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 }, "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 } }, "Helvetica Neue": { Regular: { selector: `Helvetica Neue`, weight: void 0 }, UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 }, Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 }, Light: { selector: `HelveticaNeue-Light`, weight: void 0 }, Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 }, Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 }, Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 }, "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 }, "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 }, "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 }, "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 }, "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 }, "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 }, "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 } }, "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } }, Impact: { Regular: { selector: `Impact`, weight: void 0 } }, "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } }, Menlo: { Regular: { selector: `Menlo`, weight: void 0 } }, Monaco: { Regular: { selector: `Monaco`, weight: void 0 } }, Optima: { Regular: { selector: `Optima`, weight: void 0 }, ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 } }, Palatino: { Regular: { selector: `Palatino`, weight: void 0 } }, "SF Pro Display": { Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 }, Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 }, Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 }, Light: { selector: `__SF-UI-Display-Light__`, weight: 300 }, Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 }, Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 }, Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 }, Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 }, Black: { selector: `__SF-UI-Display-Black__`, weight: 900 }, Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 }, "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 }, "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 }, "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 }, "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 }, "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 }, "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 }, "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 }, "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 } }, "SF Pro Display Condensed": { Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 }, Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 }, Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 }, Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 }, Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 }, Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 }, Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 }, Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 }, Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 } }, "SF Pro Text": { Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 }, Light: { selector: `__SF-UI-Text-Light__`, weight: 200 }, Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 }, Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 }, Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 }, Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 }, Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 }, "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 }, "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 }, "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 }, "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 }, "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 } }, "SF Pro Text Condensed": { Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 }, Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 }, Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 }, Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 }, Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 }, Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 } }, Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } }, Times: { Regular: { selector: `Times`, weight: void 0 } }, "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } }, Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } }, Verdana: { Regular: { selector: `Verdana`, weight: void 0 } } }, mE = { "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`, "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`, "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`, "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`, "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`, "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`, "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`, "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`, "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`, "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`, "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`, "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`, "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`, "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`, "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`, "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`, "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`, "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`, "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`, "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`, "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`, "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`, "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`, "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`, "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`, "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`, "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`, "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`, "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`, "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`, "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`, "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`, "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`, "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`, "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`, "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`, "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`, "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`, "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`, "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`, "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`, "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`, "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`, "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`, "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`, "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`, "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`, "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`, "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`, "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`, "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`, "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`, "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`, "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`, "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`, "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`, "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`, "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`, "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`, "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`, "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`, "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`, "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`, "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`, "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`, "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`, "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`, "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`, "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`, "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`, "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`, "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`, "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`, "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`, "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black` }, hE = pE, gE = `System Default`, _E = class {
    constructor() {
      I(this, `name`, `local`), I(this, `fontFamilies`, []), I(this, `byFamilyName`, /* @__PURE__ */ new Map()), I(this, `fontAliasBySelector`, /* @__PURE__ */ new Map()), I(this, `fontAliases`, /* @__PURE__ */ new Map());
    }
    getFontFamilyByName(e2) {
      return this.byFamilyName.get(e2) ?? null;
    }
    createFontFamily(e2) {
      let t2 = { name: e2, fonts: [], source: this.name };
      return this.addFontFamily(t2), t2;
    }
    addFontFamily(e2) {
      this.fontFamilies.push(e2), this.byFamilyName.set(e2.name, e2);
    }
    importFonts() {
      let e2 = [];
      for (let t3 of Object.keys(hE)) {
        let n3 = hE[t3];
        if (!n3) continue;
        let r2 = this.createFontFamily(t3);
        for (let e3 of Object.keys(n3)) {
          let t4 = n3[e3];
          if (!t4) continue;
          let { selector: i2, weight: a2 } = t4, o2 = { variant: e3, selector: i2, weight: a2, family: r2, cssFamilyName: r2.name };
          r2.fonts.push(o2);
        }
        e2.push(...r2.fonts);
      }
      for (let [e3, t3] of Object.entries(mE)) this.addFontAlias(e3, t3);
      let { fontFamily: t2, aliases: n2 } = this.getSystemFontFamily();
      this.addFontFamily(t2);
      for (let [e3, t3] of n2) this.addFontAlias(e3, t3);
      return e2.push(...t2.fonts), e2;
    }
    addFontAlias(e2, t2) {
      this.fontAliases.set(e2, t2), this.fontAliasBySelector.set(t2, e2);
    }
    getSystemFontFamily() {
      let e2 = { name: gE, fonts: [], source: this.name }, t2 = /* @__PURE__ */ new Map(), n2 = [400, 100, 200, 300, 500, 600, 700, 800, 900];
      for (let r2 of [`normal`, `italic`]) for (let i2 of n2) {
        let n3 = Fp(i2, r2), a2 = `__SystemDefault-${i2}-${r2}__`, o2 = { variant: n3, selector: a2, style: r2, weight: i2, family: e2, cssFamilyName: e2.name };
        e2.fonts.push(o2), t2.set(a2, `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`);
      }
      return { fontFamily: e2, aliases: t2 };
    }
    getFontAliasBySelector(e2) {
      return this.fontAliasBySelector.get(e2) || null;
    }
    getFontSelectorByAlias(e2) {
      return this.fontAliases.get(e2) || null;
    }
    isFontFamilyAlias(e2) {
      return !!(e2 && /^__.*__$/u.exec(e2));
    }
  }, vE = { 100: `Thin`, 200: `Extra Light`, 300: `Light`, 400: `Normal`, 500: `Medium`, 600: `Semi Bold`, 700: `Bold`, 800: `Extra Bold`, 900: `Black` }, yE = class extends Map {
    constructor() {
      super(...arguments), I(this, `_hash`, 0);
    }
    get hash() {
      return this._hash;
    }
    set(e2, t2) {
      return this._hash++, super.set(e2, t2);
    }
    delete(e2) {
      return this._hash++, super.delete(e2);
    }
    clear() {
      return this._hash++, super.clear();
    }
  }, xE = `Variable`, SE = `BI;`, CE = class {
    constructor() {
      I(this, `name`, `builtIn`), I(this, `fontFamilies`, []), I(this, `byFamilyName`, /* @__PURE__ */ new Map()), I(this, `assetByKey`, /* @__PURE__ */ new Map());
    }
    importFonts(e2) {
      this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetByKey.clear();
      let t2 = [];
      for (let n2 of e2) {
        if (!this.isValidBuiltInFont(n2)) continue;
        let { properties: e3 } = n2, r2 = e3.font.fontFamily, i2 = this.createFontFamily(r2, e3.font.foundryName, e3.font.fontVersion), a2 = e3.font.openTypeData, o2 = e3.font.variationAxes, s2 = Array.isArray(o2), c2 = s2 ? `variable` : e3.font.fontSubFamily || `regular`, l2 = Bp(n2), u2 = { assetKey: n2.key, family: i2, selector: this.createSelector(r2, c2, e3.font.fontVersion), variant: c2, file: l2, hasOpenTypeFeatures: Up(a2), variationAxes: Wp(o2), category: e3.font.fontCategory, weight: qp(c2), style: Yp(c2), cssFamilyName: Vp(r2, s2) };
        i2.fonts.push(u2), this.assetByKey.set(n2.key, n2), t2.push(u2);
      }
      for (let e3 of this.fontFamilies) e3.fonts.sort((e4, t3) => {
        let n2 = qp(e4.variant), r2 = qp(t3.variant);
        return !n2 || !r2 ? 1 : n2 - r2;
      });
      return t2;
    }
    static parseVariant(e2) {
      return { weight: wE[Jp(e2)], style: Yp(e2) };
    }
    getFontBySelector(e2) {
      let t2 = this.parseSelector(e2);
      if (!t2) return;
      let n2 = this.getFontFamilyByName(t2.name);
      if (n2) return n2.fonts.find((t3) => t3.selector === e2);
    }
    getFontFamilyByName(e2) {
      return this.byFamilyName.get(e2) ?? null;
    }
    createFontFamily(e2, t2, n2) {
      let r2 = this.byFamilyName.get(e2);
      if (r2 && r2.version === n2) return r2;
      let i2 = { source: this.name, name: e2, fonts: [], foundryName: t2, version: n2 };
      return this.addFontFamily(i2), i2;
    }
    getOpenTypeFeatures(e2) {
      B(e2.assetKey, `Font must have an asset key`);
      let t2 = this.assetByKey.get(e2.assetKey)?.properties?.font?.openTypeData;
      return Up(t2) ? t2?.map((e3) => {
        if (Gp(e3)) return { tag: e3.tag, coverage: e3.coverage };
      }) : [];
    }
    isValidBuiltInFont(e2) {
      return !e2.mimeType.startsWith(`font/`) || e2.properties?.kind !== `font` || !e2.properties.font || !e2.properties.font.fontVersion || !e2.properties.font.fontFamily ? false : `fontFamily` in e2.properties.font;
    }
    createSelector(e2, t2, n2) {
      return `${SE}${e2}/${t2}/${n2}`;
    }
    parseSelector(e2) {
      if (!e2.startsWith(SE)) return null;
      let [t2, n2] = e2.split(SE);
      if (n2 === void 0) return null;
      let [r2, i2, a2] = n2.split(`/`);
      return !r2 || !i2 || !a2 ? null : { name: r2, variant: i2, source: this.name, isVariable: i2.toLowerCase().includes(`variable`) };
    }
    addFontFamily(e2) {
      this.fontFamilies.push(e2), this.byFamilyName.set(e2.name, e2);
    }
  }, wE = { ultralight: 100, "ultralight-italic": 100, thin: 200, "thin-italic": 200, demi: 200, light: 300, "light-italic": 300, normal: 350, base: 400, regular: 400, classic: 400, "regular-slanted": 400, italic: 400, oblique: 400, dense: 400, brukt: 300, book: 400, "book-italic": 400, text: 400, "text-italic": 400, medium: 500, solid: 500, "medium-oblique": 500, "medium-italic": 500, mittel: 500, semibold: 600, "semibold-italic": 600, bold: 700, "bold-italic": 700, "bold-oblique": 700, fett: 700, ultrabold: 800, "ultrabold-italic": 800, extrabold: 800, "extrabold-italic": 800, black: 900, extralight: 100, "extralight-italic": 100, "black-italic": 900, "extra-italic": 900, "extra-italic-bold": 900, satt: 900, heavy: 900, "heavy-italic": 900, serif: 100, school: 200, expanded: 300, gothique: 500, "dense-light": 200, "dense-regular": 300, "dense-medium": 400, "dense-bold": 500, "solid-light": 600, "solid-regular": 700, "solid-medium": 800, "solid-bold": 900, 53: 400, 55: 600, "narrow-regular": 350, "narrow-black": 850, variable: 1e3, "variable-italic": 1e3 }, TE = Cd(`custom-font-source`), EE = `CUSTOM;`, DE = `CUSTOMV2;`, OE = class e2 {
    constructor() {
      I(this, `name`, `custom`), I(this, `fontFamilies`, []), I(this, `byFamilyName`, /* @__PURE__ */ new Map()), I(this, `assetsByKey`, /* @__PURE__ */ new Map());
    }
    deprecatedImportFonts(t2) {
      this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetsByKey.clear();
      let n2 = [];
      for (let r2 of t2) {
        if (!this.isValidCustomFontAsset(r2)) continue;
        let t3 = r2.properties?.font.variationAxes, i2 = Array.isArray(t3), a2 = im(r2.properties), o2 = this.createFontFamily(a2), s2 = r2.properties?.font.openTypeData, c2 = i2 ? `variable` : this.inferVariantName(a2), l2 = Bp(r2), u2 = e2.createLegacySelector(a2), { family: d2, variant: f2 } = am(r2.properties.font), p2 = e2.createSelector(d2, f2), m2 = { assetKey: r2.key, family: o2, selector: u2, variant: c2, file: l2, hasOpenTypeFeatures: Up(s2), variationAxes: Wp(t3), owner: cm(r2), cssFamilyName: e2.cssFontFamilyFromSelector(u2), alternativeSelectors: { [p2]: { variant: f2, cssFamilyName: e2.cssFontFamilyFromSelector(p2) } } };
        o2.fonts.push(m2), this.assetsByKey.set(r2.key, r2), n2.push(...o2.fonts);
      }
      return n2;
    }
    importFonts(t2, n2) {
      if (!n2) return this.deprecatedImportFonts(t2);
      this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetsByKey.clear();
      let r2 = {};
      for (let n3 of t2) {
        if (!this.isValidCustomFontAsset(n3)) continue;
        let { family: t3, variant: i2, weight: a2, style: o2 } = am(n3.properties.font), s2 = n3.properties.font.variationAxes, c2 = Array.isArray(s2), l2 = n3.properties.font.openTypeData, u2 = Bp(n3), d2 = cm(n3), f2 = im(n3.properties), p2 = e2.createLegacySelector(f2), m2 = this.createFontFamily(t3), h2 = e2.createSelector(m2.name, i2), g2 = { assetKey: n3.key, family: m2, selector: h2, variant: i2, weight: a2, style: o2, file: u2, hasOpenTypeFeatures: Up(l2), variationAxes: Wp(s2), owner: d2, alternativeSelectors: { [p2]: { variant: c2 ? `variable` : this.inferVariantName(f2), cssFamilyName: e2.cssFontFamilyFromSelector(p2) } }, cssFamilyName: e2.cssFontFamilyFromSelector(h2) }, _2 = rm(m2.fonts, g2);
        if (_2?.projectDuplicate) g2.owner === `project` && (m2.fonts[_2.index] = g2, r2[h2] = g2);
        else if (_2) {
          TE.debug(`Duplicate font found for:`, g2, `with existing font:`, _2.existingFont);
          let e3 = _2.existingFont, t4 = g2.file?.endsWith(`.woff2`) ?? false, n4 = e3.file?.endsWith(`.woff2`) ?? false;
          t4 && !n4 && (m2.fonts[_2.index] = g2, r2[h2] = g2);
        } else m2.fonts.push(g2), r2[h2] = g2;
        this.assetsByKey.set(n3.key, n3);
      }
      for (let e3 of this.fontFamilies) e3.fonts.length > 0 && sm(e3);
      return Object.values(r2);
    }
    static createSelector(e3, t2) {
      return `${DE}${e3}${t2 ? ` ${t2}` : ``}`;
    }
    static createLegacySelector(e3) {
      return `${EE}${e3}`;
    }
    static cssFontFamilyFromSelector(e3) {
      return B(em(e3), `Selector must be a custom font selector`), nm(e3) ? e3.slice(EE.length) : e3.slice(DE.length);
    }
    isValidCustomFontAsset(e3) {
      return !e3.mimeType.startsWith(`font/`) || e3.properties?.kind !== `font` || !e3.properties.font ? false : `fontFamily` in e3.properties.font;
    }
    getOpenTypeFeatures(e3) {
      B(e3.assetKey, `Font must have an asset key`);
      let t2 = this.assetsByKey.get(e3.assetKey)?.properties?.font?.openTypeData;
      return Up(t2) ? t2?.map((e4) => {
        if (Gp(e4)) return { tag: e4.tag, coverage: e4.coverage };
      }) : [];
    }
    inferVariantName(e3) {
      let t2 = [`thin`, `ultra light`, `extra light`, `light`, `normal`, `medium`, `semi bold`, `bold`, `extra bold`, `black`], n2 = [...t2.map((e4) => `${e4} italic`), ...t2], r2 = e3.toLowerCase(), i2 = [...r2.split(` `), ...r2.split(`-`), ...r2.split(`_`)], a2 = n2.find((e4) => i2.includes(e4) || i2.includes(e4.replace(/\s+/gu, ``)));
      return a2 ? a2.replace(/^\w|\s\w/gu, (e4) => e4.toUpperCase()) : `Regular`;
    }
    createFontFamily(e3) {
      let t2 = this.byFamilyName.get(e3);
      if (t2) return t2;
      let n2 = { source: this.name, name: e3, fonts: [] };
      return this.addFontFamily(n2), n2;
    }
    addFontFamily(e3) {
      this.fontFamilies.push(e3), this.byFamilyName.set(e3.name, e3);
    }
    getFontFamilyByName(e3) {
      return this.byFamilyName.get(e3) || null;
    }
  }, kE = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`], AE = `FS;`, jE = { thin: 100, hairline: 100, extralight: 200, light: 300, regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, ultra: 800, black: 900, heavy: 900 }, ME = Object.keys(jE), NE = (() => RegExp(`^(?:${[...ME, `italic`, `variable`].join(`|`)})`, `u`))(), PE = class e2 {
    constructor() {
      I(this, `name`, `fontshare`), I(this, `fontFamilies`, []), I(this, `byFamilyName`, /* @__PURE__ */ new Map());
    }
    getFontFamilyByName(e3) {
      return this.byFamilyName.get(e3) ?? null;
    }
    static parseVariant(e3) {
      let t2 = e3.toLowerCase().split(` `), n2 = ME.find((e4) => t2.includes(e4)), r2 = e3.toLowerCase().includes(`italic`) ? `italic` : `normal`;
      return { weight: n2 && jE[n2] || 400, style: r2 === `italic` ? r2 : `normal` };
    }
    parseSelector(e3) {
      if (!e3.startsWith(AE)) return null;
      let t2 = e3.split(`-`);
      if (t2.length !== 2) return null;
      let [n2, r2] = t2;
      return !n2 || !r2 ? null : { name: n2.replace(AE, ``), variant: r2, source: this.name, isVariable: r2.toLowerCase().includes(`variable`) };
    }
    static createSelector(e3, t2) {
      return `${AE}${e3}-${t2.toLowerCase()}`;
    }
    static createMetadataSelector(e3) {
      return `${AE}${e3}`;
    }
    addFontFamily(e3) {
      this.fontFamilies.push(e3), this.byFamilyName.set(e3.name, e3);
    }
    async importFonts(t2, n2) {
      this.fontFamilies.length = 0, this.byFamilyName.clear();
      let r2 = await lm(`fontshare`), i2 = [];
      for (let a2 of t2) {
        let t3 = a2.font_styles.filter((e3) => {
          let t4 = e3.name.toLowerCase();
          return !(!NE.exec(t4) || t4.split(` `).includes(`wide`));
        }).map((t4) => ({ ...e2.parseVariant(t4.name), selector: e2.createSelector(a2.name, t4.name), isVariable: t4.is_variable, fontshareVariantName: t4.name, file: t4.file })), o2 = e2.createMetadataSelector(a2.name), s2 = n2?.[o2], c2 = a2.name, l2 = this.getFontFamilyByName(c2);
        l2 || (l2 = { name: c2, fonts: [], source: this.name }, this.addFontFamily(l2));
        let u2 = r2[e2.createMetadataSelector(a2.name)];
        for (let e3 of t3) {
          let { variantBold: n3, variantBoldItalic: r3, variantItalic: o3, variantVariable: c3, variantVariableItalic: d2 } = Xp(e3, t3), f2 = { family: l2, variant: e3.fontshareVariantName.toLowerCase(), selector: e3.selector, selectorBold: n3?.selector, selectorBoldItalic: r3?.selector, selectorItalic: o3?.selector, selectorVariable: c3?.selector, selectorVariableItalic: d2?.selector, weight: e3.weight, style: e3.style, file: e3.file, category: pm(a2.category), hasOpenTypeFeatures: u2, variationAxes: e3.isVariable ? s2 : void 0, cssFamilyName: Vp(l2.name, e3.isVariable) };
          l2.fonts.push(f2), i2.push(f2);
        }
      }
      return i2;
    }
    async getOpenTypeFeatures(t2) {
      return (await um(`fontshare`))[e2.createMetadataSelector(t2.family.name)];
    }
  }, FE = `Inter`, IE = `FR;`, LE = { Thin: 100, ExtraLight: 200, Light: 300, "": 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 }, RE = class e2 {
    constructor() {
      I(this, `name`, `framer`), I(this, `fontFamilies`, []), I(this, `byFamilyName`, /* @__PURE__ */ new Map());
    }
    getFontFamilyByName(e3) {
      return this.byFamilyName.get(e3) ?? null;
    }
    addFontFamily(e3) {
      let t2 = { name: e3, fonts: [], source: this.name };
      return this.fontFamilies.push(t2), this.byFamilyName.set(t2.name, t2), t2;
    }
    static getDraftFontPropertiesBySelector(e3) {
      if (!e3.startsWith(IE) && !e3.startsWith(FE)) return null;
      let [t2, n2 = ``] = e3.split(`-`);
      if (!t2) return null;
      let r2 = n2.includes(`Italic`) ? `italic` : `normal`, i2 = n2.replace(`Italic`, ``);
      return { cssFamilyName: t2, style: r2, weight: i2 && LE[i2] || 400, source: `framer`, variant: void 0, category: `sans-serif` };
    }
    static createMetadataSelector(e3) {
      return `${IE}${e3}`;
    }
    importFonts(t2, n2) {
      this.fontFamilies.length = 0, this.byFamilyName.clear();
      let r2 = [];
      return t2.forEach((t3) => {
        let { uiFamilyName: i2, ...a2 } = t3, o2 = e2.createMetadataSelector(t3.uiFamilyName), s2 = n2?.[o2], c2 = this.getFontFamilyByName(i2);
        c2 ||= this.addFontFamily(i2);
        let l2 = t3.selector === t3.selectorVariable || t3.selector === t3.selectorVariableItalic, u2 = { ...a2, family: c2, variationAxes: l2 ? s2 : void 0 };
        c2.fonts.push(u2), r2.push(u2);
      }), r2;
    }
    async getOpenTypeFeatures(t2) {
      return (await um(`framer`))[e2.createMetadataSelector(t2.family.name)];
    }
  }, zE = `GF;`, BE = class e2 {
    constructor() {
      I(this, `name`, `google`), I(this, `fontFamilies`, []), I(this, `byFamilyName`, /* @__PURE__ */ new Map());
    }
    getFontFamilyByName(e3) {
      return this.byFamilyName.get(e3) ?? null;
    }
    static parseVariant(e3) {
      if (e3 === `regular`) return { style: `normal`, weight: 400 };
      let t2 = /(\d*)(normal|italic)?/u.exec(e3);
      return t2 ? { weight: parseInt(t2[1] || `400`), style: t2[2] === `italic` ? `italic` : `normal` } : {};
    }
    parseSelector(e3) {
      if (!e3.startsWith(zE)) return null;
      let t2 = e3.includes(`-variable-`), n2 = t2 ? e3.split(`-variable-`) : e3.split(`-`);
      if (n2.length !== 2) return null;
      let [r2, i2] = n2;
      return !r2 || !i2 ? null : { name: r2.replace(zE, ``), variant: i2, source: this.name, isVariable: t2 };
    }
    static createSelector(e3, t2, n2) {
      return `${zE}${e3}-${n2 ? `variable-` : ``}${t2}`;
    }
    static createMetadataSelector(e3) {
      return `${zE}${e3}`;
    }
    addFontFamily(e3) {
      let t2 = { name: e3, fonts: [], source: this.name };
      return this.fontFamilies.push(t2), this.byFamilyName.set(t2.name, t2), t2;
    }
    async importFonts(t2, n2, r2) {
      this.fontFamilies.length = 0, this.byFamilyName.clear();
      let i2 = await lm(`google`), a2 = [], o2 = hm(t2, (e3) => e3.family), s2 = hm(n2, (e3) => e3.family);
      for (let t3 in o2) {
        let n3 = o2[t3];
        if (!n3) continue;
        let c2 = this.getFontFamilyByName(n3.family);
        c2 ||= this.addFontFamily(n3.family);
        let l2 = n3.variants.map((r3) => ({ ...e2.parseVariant(r3), googleFontsVariantName: r3, selector: e2.createSelector(t3, r3, false), isVariable: false, file: n3.files[r3] })), u2 = s2[t3], d2 = u2?.axes ? u2.variants.map((n4) => ({ ...e2.parseVariant(n4), googleFontsVariantName: n4, selector: e2.createSelector(t3, n4, true), isVariable: true, file: u2.files[n4] })) : [], f2 = e2.createMetadataSelector(n3.family), p2 = r2?.[f2], m2 = [...l2, ...d2], h2 = m2.filter(Pp), g2 = i2[e2.createMetadataSelector(t3)];
        for (let e3 of m2) {
          let { weight: t4, style: r3, selector: i3, googleFontsVariantName: o3 } = e3, { variantBold: s3, variantItalic: l3, variantBoldItalic: u3, variantVariable: d3, variantVariableItalic: f3 } = (Pp(e3) ? Xp(e3, h2) : void 0) ?? {}, m3 = { family: c2, variant: o3, selector: i3, selectorBold: s3?.selector, selectorBoldItalic: u3?.selector, selectorItalic: l3?.selector, selectorVariable: d3?.selector, selectorVariableItalic: f3?.selector, weight: t4, style: r3, category: mm(n3.category), file: e3.file?.replace(`http://`, `https://`), variationAxes: e3.isVariable ? p2 : void 0, hasOpenTypeFeatures: g2, cssFamilyName: Vp(c2.name, e3.isVariable) };
          c2.fonts.push(m3), a2.push(m3);
        }
      }
      return a2;
    }
    async getOpenTypeFeatures(t2) {
      return (await um(`google`))[e2.createMetadataSelector(t2.family.name)];
    }
  }, VE = Ue(qh(), 1), HE = 5e3, UE = 3, WE = class extends Error {
    constructor(e2) {
      super(e2), this.name = `FontLoadingError`;
    }
  }, GE = /* @__PURE__ */ new Map(), KE = /* @__PURE__ */ new Map(), qE = (e2, t2) => gm(e2, t2), JE = { "FR;Inter": [{ tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` }, { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` }] }, YE = class {
    constructor() {
      I(this, `enabled`, false), I(this, `bySelector`, new yE()), I(this, `loadedSelectors`, /* @__PURE__ */ new Set()), I(this, `getGoogleFontsListPromise`), I(this, `getFontshareFontsListPromise`), I(this, `getBuiltInFontsListPromise`), I(this, `customFontsImportPromise`, new Promise((e2) => {
        this.resolveCustomFontsImportPromise = e2;
      })), I(this, `local`), I(this, `google`), I(this, `fontshare`), I(this, `builtIn`), I(this, `framer`), I(this, `custom`), I(this, `bySelectorValuesCache`), I(this, `testing`, { addFont: this.addFont.bind(this) }), this.local = new _E(), this.google = new BE(), this.fontshare = new PE(), this.framer = new RE(), this.custom = new OE(), this.builtIn = new CE(), this.importLocalFonts();
    }
    get hash() {
      return this.bySelector.hash;
    }
    addFont(e2) {
      if (this.bySelector.set(e2.selector, e2), e2.alternativeSelectors) for (let t2 of Object.keys(e2.alternativeSelectors)) this.bySelector.set(t2, e2);
    }
    getAvailableFonts() {
      if (!this.bySelectorValuesCache || this.bySelectorValuesCache.hash !== this.bySelector.hash) {
        let e2 = /* @__PURE__ */ new Map();
        for (let t2 of this.bySelector.values()) e2.set(t2, true);
        this.bySelectorValuesCache = { result: Array.from(e2.keys()), hash: this.bySelector.hash };
      }
      return this.bySelectorValuesCache.result;
    }
    importLocalFonts() {
      for (let e2 of this.local.importFonts()) this.addFont(e2), this.loadFont(e2.selector);
    }
    async importGoogleFonts() {
      return this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
        let { staticFonts: e2, variableFonts: t2 } = await kb.fetchGoogleFontsList(), n2 = await vm(`google`);
        for (let r2 of await this.google.importFonts(e2, t2, n2)) this.addFont(r2);
        return { staticFonts: e2, variableFonts: t2 };
      }), this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = kb.fetchFontshareFontsList();
        let e2 = await this.getFontshareFontsListPromise, t2 = await vm(`fontshare`);
        for (let n2 of await this.fontshare.importFonts(e2, t2)) this.addFont(n2);
      }
      return this.getFontshareFontsListPromise;
    }
    async importAllWebFonts() {
      await Promise.all([this.importGoogleFonts(), this.importFontshareFonts(), this.importBuiltInFonts()]);
    }
    async importBuiltInFonts() {
      if (!this.getBuiltInFontsListPromise) {
        this.getBuiltInFontsListPromise = kb.fetchBuiltInFontsList();
        let e2 = await this.getBuiltInFontsListPromise;
        for (let t2 of await this.builtIn.importFonts(e2)) this.addFont(t2);
      }
      return this.getBuiltInFontsListPromise;
    }
    importFramerFonts(e2) {
      let t2 = vm(`framer`);
      this.framer.importFonts(e2, t2).forEach((e3) => {
        this.addFont(e3);
      });
    }
    importCustomFonts(e2, t2) {
      this.bySelector.forEach((e3, t3) => {
        em(t3) && this.bySelector.delete(t3);
      });
      let n2 = this.custom.importFonts(e2, t2);
      for (let e3 of n2) this.addFont(e3);
      this.resolveCustomFontsImportPromise();
    }
    getCustomFontsImportPromise() {
      return this.customFontsImportPromise;
    }
    getFontFamily(e2) {
      return this[e2.source].getFontFamilyByName(e2.name);
    }
    getFontBySelector(e2) {
      if (!e2) return;
      let t2;
      if (t2 = this.bySelector.get(e2), t2) return t2.alternativeSelectors && e2 in t2.alternativeSelectors ? { ...t2, ...t2.alternativeSelectors[e2] } : t2;
    }
    getDraftPropertiesBySelector(e2) {
      let t2 = this.getFontBySelector(e2);
      if (t2) return { style: t2.style, weight: t2.weight, variant: t2.variant, cssFamilyName: t2.cssFamilyName, source: t2.family.source, category: t2.category };
      let n2 = this.google.parseSelector(e2);
      if (n2) {
        let e3 = BE.parseVariant(n2.variant);
        if (Pp(e3)) return { style: e3.style, weight: e3.weight, variant: n2.variant, cssFamilyName: Hp(n2, `google`), source: `google`, category: void 0 };
      }
      let r2 = this.fontshare.parseSelector(e2);
      if (r2) {
        let e3 = PE.parseVariant(r2.variant);
        if (Pp(e3)) return { style: e3.style, weight: e3.weight, variant: r2.variant, cssFamilyName: Hp(r2, `fontshare`), source: `fontshare`, category: void 0 };
      }
      let i2 = this.builtIn.parseSelector(e2);
      if (i2) {
        let e3 = CE.parseVariant(i2.variant);
        if (Pp(e3)) return { style: e3.style, weight: e3.weight, variant: i2.variant, cssFamilyName: Hp(i2, `builtIn`), source: `builtIn`, category: void 0 };
      }
      return RE.getDraftFontPropertiesBySelector(e2) || null;
    }
    isSelectorLoaded(e2) {
      return this.loadedSelectors.has(e2);
    }
    async loadFont(e2) {
      let t2 = this.getFontBySelector(e2);
      if (!t2) return 2;
      if (this.loadedSelectors.has(e2)) return 0;
      let n2 = t2.cssFamilyName, r2 = t2.family.source, i2 = $p(t2);
      switch (r2) {
        case `local`:
          return this.loadedSelectors.add(e2), 1;
        case `framer`:
          if (Ia() || await _m(t2.family.name, t2.style, t2.weight), i2) {
            if (!t2.file) return Promise.reject(`Unable to load font: ${e2}`);
            await qE({ family: n2, url: t2.file, weight: t2.weight, style: t2.style }, document);
          }
          return this.loadedSelectors.add(e2), 1;
        case `google`:
        case `fontshare`:
        case `builtIn`:
        case `custom`:
          return t2.file ? (await qE({ family: n2, url: t2.file, weight: t2.weight, style: t2.style }, document), this.loadedSelectors.add(e2), 1) : Promise.reject(`Unable to load font: ${e2}`);
        default:
          V(r2);
      }
    }
    async loadFontsFromSelectors(e2) {
      if (!this.enabled) return [];
      let t2 = [];
      e2.some((e3) => e3.startsWith(AE)) && t2.push(this.importFontshareFonts().catch((e3) => {
        ri(`Failed to load Fontshare fonts:`, e3);
      })), e2.some((e3) => e3.startsWith(zE)) && t2.push(this.importGoogleFonts().catch((e3) => {
        ri(`Failed to load Google fonts:`, e3);
      })), e2.some((e3) => e3.startsWith(SE)) && t2.push(this.importBuiltInFonts().catch((e3) => {
        ri(`Failed to load built-in fonts:`, e3);
      })), e2.some(em) && t2.push(this.customFontsImportPromise.catch((e3) => {
        ri(`Failed to load custom fonts:`, e3);
      })), t2.length > 0 && await Promise.all(t2);
      let n2 = [];
      for (let t3 of e2) n2.push(this.loadFont(t3));
      return Promise.allSettled(n2);
    }
    async loadFonts(e2) {
      return { newlyLoadedFontCount: (await this.loadFontsFromSelectors(e2)).filter((e3) => e3.status === `fulfilled` && e3.value === 1).length };
    }
    async loadMissingFonts(e2, t2) {
      let n2 = e2.filter((e3) => !XE.loadedSelectors.has(e3));
      n2.length !== 0 && (await XE.loadWebFontsFromSelectors(n2), n2.every((e3) => XE.loadedSelectors.has(e3)) && t2 && t2());
    }
    async loadWebFontsFromSelectors(e2) {
      return this.loadFontsFromSelectors(e2);
    }
    get defaultFont() {
      let e2 = this.getFontBySelector(`Inter`);
      return B(e2, `Can\u2019t find Inter font`), e2;
    }
  }, XE = new YE(), ZE = (e2) => e2.target.value, QE = { "data-1p-ignore": true, "data-lpignore": true, "data-form-type": `other`, autocomplete: `off` }, $E = b(function(e2, t2) {
    let { autoFocus: n2, className: r2, inputName: i2, max: a2, min: o2, placeholder: s2, required: c2, step: u2, style: d2, type: f2, maxLength: p2, value: m2, defaultValue: g2, autofillEnabled: v2, onChange: y2, onBlur: b2, onInvalid: x2, onFocus: S2, onValid: C2, onClear: w2, ...E2 } = e2, D2 = Cm(m2 ?? g2, f2), [O2, k2, A2] = Sm(D2 ?? ``, true, y2), j2 = jr(D2), ee2 = l(() => {
      k2(``), w2 && h(() => w2());
    }, [w2, k2]), te2 = Ka(C2, x2, A2, b2, S2), ne2 = l((e3) => {
      e3.target === e3.currentTarget && j2.current?.focus();
    }, [j2]);
    if (f2 === `hidden`) return _(qe.input, { type: `hidden`, name: i2, defaultValue: g2 });
    let M2 = v2 === false ? QE : void 0, re2 = !!O2, ie2 = !!w2 && re2, ae2 = vc($, my, r2, f2 === `text` && eD, f2 === `textarea` && tD);
    return T(qe.div, { ref: t2, onClick: ne2, style: d2, className: ae2, ...E2, children: [f2 === `textarea` ? _(qe.textarea, { ref: j2, ...M2, ...te2, required: c2, autoFocus: n2, name: i2, placeholder: s2, className: py, value: O2, maxLength: p2 }) : _(qe.input, { ref: j2, ...M2, ...te2, type: f2, required: c2, autoFocus: n2, name: i2, placeholder: s2, className: vc(py, !re2 && hy), value: O2, min: o2, max: a2, step: u2, maxLength: p2 }), ie2 && _(`button`, { type: `button`, className: nD, onClick: ee2, "aria-label": `Clear`, children: _(wm, {}) })] });
  }), $ = `framer-form-text-input`, eD = `framer-form-text-input-type`, tD = `framer-form-textarea-input-type`, nD = `framer-form-text-input-clear`, rD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`, iD = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`, aD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`, oD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`, sD = ay($E, (() => [..._y, ...by, ...vy, X(`.${my}`, { boxShadow: X.variable(`--framer-input-box-shadow`), borderTopLeftRadius: X.variable(`--framer-input-border-radius-top-left`), borderTopRightRadius: X.variable(`--framer-input-border-radius-top-right`), borderBottomRightRadius: X.variable(`--framer-input-border-radius-bottom-right`), borderBottomLeftRadius: X.variable(`--framer-input-border-radius-bottom-left`), cornerShape: X.variable(`--framer-input-corner-shape`), background: X.variable(`--framer-input-background`), transition: X.variable(`--framer-input-focused-transition`), transitionProperty: `background, box-shadow` }), X(`.${$} .${py}::placeholder`, { color: X.variable(`--framer-input-placeholder-color`) }), X(`.${$}`, { display: `flex`, alignItems: `center`, padding: X.variable(`--framer-input-padding`) }), X(`.${$} .${py}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }), X(`.${$}.${tD}`, { padding: 0 }), X(`.${$}.${tD} textarea.${py}`, { width: `100%`, padding: X.variable(`--framer-input-padding`) }), X(`.${$} .${py}[type="date"], .${$} .${py}[type="time"]`, { "-webkit-appearance": `none`, appearance: `none` }), X(`.${$} .${py}::-webkit-date-and-time-value`, { textAlign: `start` }), X(`.${$} textarea`, { display: `flex`, resize: X.variable(`--framer-textarea-resize`), overflowY: `auto`, minHeight: `inherit`, maxHeight: `inherit`, whiteSpace: `break-spaces` }), X(`.${$} textarea::-webkit-resizer`, { background: `no-repeat ${ct(rD)}` }), X(`.${$}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${ct(iD)}` }), X(`.${$} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }), X(`.${$} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }), X(`.${$} textarea::-webkit-scrollbar-corner`, { background: `none`, backgroundColor: `transparent`, outline: `none` }), X(`.${$} .${py}::-webkit-datetime-edit`, { height: X.variable(`--framer-input-font-line-height`) }), X(`.${$} .${py}.${hy}::-webkit-datetime-edit`, { color: X.variable(`--framer-input-placeholder-color`), "-webkit-text-fill-color": X.variable(`--framer-input-placeholder-color`), overflow: `visible` }), X(`.${$}.${eD}::before`, { content: X.variable(`--framer-input-icon-content`, `none`), display: `block`, flexShrink: 0, width: `${Ty}px`, height: `${Ty}px`, marginRight: `${wy}px`, ...Ey, backgroundPosition: `center`, maskPosition: `center`, maskImage: X.variable(`--framer-input-icon-mask-image`), backgroundImage: X.variable(`--framer-input-icon-image`) }), X(`.${$} .${py}[type="date"]::before, .${$} .${py}[type="time"]::before`, { ...Dy, paddingLeft: `${Cy}px`, maskPosition: `${Cy}px center`, backgroundPosition: `${Cy}px center` }), X(`.${$} .${py}[type="date"]::before`, { maskImage: X.variable(`--framer-input-icon-mask-image`, ct(aD)), backgroundImage: X.variable(`--framer-input-icon-image`) }), X(`.${$} .${py}[type="time"]::before`, { maskImage: X.variable(`--framer-input-icon-mask-image`, ct(oD)), backgroundImage: X.variable(`--framer-input-icon-image`) }), X(`.${$} .${py}::-webkit-calendar-picker-indicator`, { opacity: 0, position: `absolute`, right: 0, top: 0, bottom: 0, padding: X.variable(`--framer-input-padding`), paddingTop: 0, paddingBottom: 0, width: `${Ty}px`, height: `100%` }), X(`.${$}:focus-within, .${$}.${gy}`, { boxShadow: X.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`), background: X.variable(`--framer-input-focused-background`, `--framer-input-background`) }), X(`.${$}:focus-within::after, .${$}.${gy}::after`, { borderColor: X.variable(`--framer-input-focused-border-color`, `--framer-input-border-color`), borderStyle: X.variable(`--framer-input-focused-border-style`, `--framer-input-border-style`), borderWidth: X.variable(`--framer-input-focused-border-width`, yy) }), X(`.${nD}`, { display: `flex`, order: 2, alignItems: `center`, justifyContent: `center`, flexShrink: 0, width: `${Ty}px`, height: `${Ty}px`, marginLeft: `${wy}px`, padding: 0, border: `none`, background: `transparent`, cursor: `pointer`, color: X.variable(`--framer-input-placeholder-color`), transition: `color 0.15s ease`, outline: `none` }), X(`.${nD}:hover, .${nD}:focus-visible`, { color: X.variable(`--framer-input-font-color`) })])(), `framer-lib-form-plain-text-input`), cD = p.forwardRef(function(e2, t2) {
    let { autoFocus: n2, className: r2, inputName: i2, required: a2, hidden: o2, defaultValue: s2, value: c2, selectOptions: l2, style: u2, onValid: d2, onChange: f2, onBlur: p2, onInvalid: m2, onFocus: h2, ...g2 } = e2, v2 = Pl(), y2 = !v2 && c2 !== void 0, b2 = c2 ?? ``, [x2, , S2] = Sm(b2, y2, f2), C2 = jr(y2 ? b2 : s2), w2 = Ka(d2, m2, S2, p2, h2);
    return o2 ? _(qe.input, { type: `hidden`, name: i2, defaultValue: s2 }) : _(qe.div, { ref: t2, style: u2, className: vc(my, lD, r2), ...g2, children: _(qe.select, { ref: C2, name: i2, autoFocus: n2, required: a2, className: py, defaultValue: s2, value: y2 ? x2 : void 0, ...w2, children: l2?.map((e3, t3) => {
      switch (e3.type) {
        case `divider`:
          return _(`hr`, {}, t3);
        case `option`:
          return _(`option`, { value: e3.value ?? e3.title, disabled: e3.disabled, children: e3.title ?? e3.value }, t3);
        default:
          return V(e3);
      }
    }) }, v2 ? Tm(s2) : void 0) });
  }), lD = `framer-form-select-wrapper`, uD = 16, dD = (() => `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${uD}" height="${uD}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`)(), fD = ay(cD, (() => [..._y, ...by, ...vy, X(`.${lD}`, { padding: X.variable(`--framer-input-padding`), paddingTop: 0, paddingBottom: 0, paddingLeft: 0, background: X.variable(`--framer-input-background`), borderTopLeftRadius: X.variable(`--framer-input-border-radius-top-left`), borderTopRightRadius: X.variable(`--framer-input-border-radius-top-right`), borderBottomRightRadius: X.variable(`--framer-input-border-radius-bottom-right`), borderBottomLeftRadius: X.variable(`--framer-input-border-radius-bottom-left`), cornerShape: X.variable(`--framer-input-corner-shape`), boxShadow: X.variable(`--framer-input-box-shadow`), transition: X.variable(`--framer-input-focused-transition`), transitionProperty: `background, box-shadow` }), X(`.${lD} select`, { appearance: `none`, "-webkit-appearance": `none`, padding: X.variable(`--framer-input-padding`), background: `transparent` }), X(`.${lD}::before`, { ...Dy, paddingLeft: `${Cy}px`, backgroundPosition: `${Cy}px center`, maskPosition: `${Cy}px center`, backgroundImage: X.variable(`--framer-input-icon-image`), maskImage: X.variable(`--framer-input-icon-mask-image`, `url('${dD}')`) }), X(`.${lD} select:required:invalid`, { color: X.variable(`--framer-input-invalid-text-color`) }), X(`.${lD}:focus-within, .${lD}.${gy}`, { background: X.variable(`--framer-input-focused-background`, `--framer-input-background`), boxShadow: X.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`) }), X(`.${lD}:focus-within::after, .${lD}.${gy}::after`, { borderColor: X.variable(`--framer-input-focused-border-color`, `--framer-input-border-color`), borderStyle: X.variable(`--framer-input-focused-border-style`, `--framer-input-border-style`), borderWidth: X.variable(`--framer-input-focused-border-width`, yy) }), X(`.${lD} select option`, { color: `#000` }), X(`.${lD} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` })])(), `framer-lib-form-select`), pD = /* @__PURE__ */ (() => ({ x: void 0, y: void 0, z: 0, translateX: void 0, translateY: void 0, translateZ: 0, rotate: void 0, rotateX: 0, rotateY: 0, rotateZ: void 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: void 0, originY: void 0, originZ: void 0, perspective: 0, transformPerspective: 0 }))(), mD = { opacity: 0 }, hD = { opacity: 1 }, gD = Im(p.forwardRef(function(e2, t2) {
    let { background: n2, children: r2, alt: i2, draggable: a2, fitImageDimension: s2, style: l2, ...u2 } = e2, d2 = { ...l2 }, f2 = c(() => Do(n2), [n2]), [m2, h2] = o();
    p.useLayoutEffect(() => {
      if (!n2?.src || !s2 || f2) return;
      let e3 = document.createElement(`img`);
      e3.onload = () => {
        e3.naturalWidth && e3.naturalHeight && h2({ width: e3.naturalWidth, height: e3.naturalHeight });
      }, e3.src = n2.src;
    }, [n2?.src, s2, f2]);
    let g2 = f2 ?? m2;
    return s2 && g2 && (d2[s2] = `auto`, d2.aspectRatio = g2.width / g2.height), n2 && delete d2.background, T(Oo(e2.as), { ...u2, style: d2, ref: t2, draggable: a2, children: [n2 && _(So, { image: n2, alt: i2, draggable: a2 }), r2] });
  })), vD = (() => !Na() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)(), yD = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi, bD = `{{ text-placeholder }}`, xD = `rich-text-wrapper`, SD = Xa(b(function(e2, t2) {
    let { id: n2, name: r2, html: i2, htmlFromDesign: a2, text: o2, textFromDesign: s2, fonts: l2 = [], width: u2, height: f2, left: p2, right: m2, top: h2, bottom: g2, center: v2, className: y2, stylesPresetsClassName: b2, visible: x2 = true, opacity: S2, rotation: T2 = 0, verticalAlignment: E2 = `top`, isEditable: D2 = false, environment: O2 = q.current, withExternalLayout: k2 = false, positionSticky: A2, positionStickyTop: j2, positionStickyRight: ee2, positionStickyBottom: te2, positionStickyLeft: ne2, __htmlStructure: M2, __fromCanvasComponent: re2 = false, _forwardedOverrideId: ie2, _forwardedOverrides: ae2, _usesDOMRect: oe2, children: se2, ...ce2 } = e2, le2 = ya(), N2 = Po(e2), ue2 = w(null), de2 = t2 ?? ue2, { navigate: fe2, getRoute: pe2 } = kt(), me2 = jt();
    xn(e2.preload ?? []), Bo(e2, de2);
    let he2 = C(zb), P2 = Pl(), ge2 = o2, _e2 = ie2 ?? n2;
    if (_e2 && ae2) {
      let e3 = ae2[_e2];
      typeof e3 == `string` && (ge2 = e3);
    }
    let ve2 = ``;
    if (ge2) {
      let e3 = Rm(ge2);
      ve2 = M2 ? M2.replace(bD, e3) : `<p>${e3}</p>`;
    } else if (i2) ve2 = i2;
    else if (s2) {
      let e3 = Rm(s2);
      ve2 = M2 ? M2.replace(bD, e3) : `<p>${e3}</p>`;
    } else a2 && (ve2 = a2);
    let ye2 = eu(), be2 = c(() => P2 || !pe2 || !me2 ? ve2 : zm(ve2, pe2, me2, ye2), [ve2, pe2, me2, ye2]);
    if (d(() => {
      let e3 = de2.current;
      if (e3 === null) return;
      function t3(e4) {
        let t4 = Jl(e4.target, de2.current);
        za(e4) || !fe2 || !t4 || t4.getAttribute(`target`) === `_blank` || Bl(fe2, t4, ye2) && e4.preventDefault();
      }
      return e3.addEventListener(`click`, t3), () => {
        e3.removeEventListener(`click`, t3);
      };
    }, [fe2, ye2]), Hm(l2, re2, de2), !x2) return null;
    let xe2 = D2 && O2() === q.canvas, F2 = { outline: `none`, display: `flex`, flexDirection: `column`, justifyContent: Vm(E2), opacity: xe2 ? 0 : S2, flexShrink: 0 }, Se2 = q.hasRestrictions(), Ce2 = ga(e2, le2 || 0, false), we2 = oe2 && (u2 === `auto` || f2 === `auto`), Te2 = e2.transformTemplate || !Ce2 || !Se2 || re2 || we2 ? e2.transformTemplate ?? No(v2) : void 0;
    if (!k2) {
      if (Ce2 && Se2 && !we2) {
        let e3 = tv.getNumber(T2).toFixed(4);
        F2.transform = `translate(${Ce2.x}px, ${Ce2.y}px) rotate(${e3}deg)`, F2.width = Ce2.width, F2.minWidth = Ce2.width, F2.height = Ce2.height;
      } else F2.left = p2, F2.right = m2, F2.top = h2, F2.bottom = g2, F2.width = u2, F2.height = f2, F2.rotate = T2;
      A2 ? (!P2 || he2) && (F2.position = `sticky`, F2.willChange = `transform`, F2.top = j2, F2.right = ee2, F2.bottom = te2, F2.left = ne2) : P2 && (e2.positionFixed || e2.positionAbsolute) && (F2.position = `absolute`);
    }
    return gc(e2, F2), pc(e2, F2), Object.assign(F2, e2.style), _(qe.div, { id: n2, ref: de2, ...ce2, style: F2, layoutId: N2, "data-framer-name": r2, "data-framer-component-type": `DeprecatedRichText`, "data-center": v2, className: vc(y2, b2, xD), transformTemplate: Te2, dangerouslySetInnerHTML: { __html: be2 } });
  })), CD = { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0, filter: `none` }, wD = (() => RegExp(`\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`, `gu`))(), TD = b(function(e2, t2) {
    return _(`svg`, { ...e2, ref: t2, children: e2.children });
  }), ED = qe.create(TD), DD = b(function({ viewBoxScale: e2, viewBox: t2, children: n2, ...r2 }, i2) {
    return _(ED, { ...r2, ref: i2, viewBox: t2, children: _(qe.foreignObject, { width: `100%`, height: `100%`, className: `framer-fit-text`, transform: `scale(${e2})`, style: { overflow: `visible`, transformOrigin: `center center` }, children: n2 }) });
  }), OD = [], kD = `RichTextContainer`, AD = b(function(e2, t2) {
    let { __fromCanvasComponent: n2 = false, _forwardedOverrideId: r2, _forwardedOverrides: i2, _usesDOMRect: a2, anchorLinkOffsetY: o2, as: s2, bottom: l2, center: u2, children: d2, environment: f2 = q.current, fonts: p2 = OD, height: m2, isEditable: h2 = false, left: g2, name: v2, opacity: y2, positionSticky: b2, positionStickyBottom: x2, positionStickyLeft: S2, positionStickyRight: T2, positionStickyTop: E2, right: D2, rotation: O2 = 0, style: k2, _initialStyle: A2, stylesPresetsClassNames: j2, text: ee2, top: te2, verticalAlignment: ne2 = `top`, visible: M2 = true, width: re2, withExternalLayout: ie2 = false, viewBox: ae2, viewBoxScale: oe2 = 1, effect: se2, ...ce2 } = e2, le2 = ya(), N2 = f2() === q.canvas, ue2 = C(zb), de2 = Po(e2), fe2 = w(null), pe2 = t2 ?? fe2;
    Bo(e2, pe2), Hm(p2, n2, pe2);
    let me2 = Zm(se2, pe2), he2 = c(() => {
      if (d2) return ah(d2, j2, ee2, o2, void 0, me2.getTokenizer());
    }, [d2, j2, ee2, o2, me2]);
    if (!M2) return null;
    let P2 = { opacity: h2 && N2 ? 0 : y2 }, ge2 = Vm(ne2);
    ge2 !== Oy.justifyContent && (P2.justifyContent = ge2);
    let _e2 = {}, ve2 = q.hasRestrictions(), ye2 = ga(e2, le2 || 0, false), be2 = a2 && (re2 === `auto` || m2 === `auto`), xe2 = e2.transformTemplate || !ye2 || !ve2 || n2 || be2 ? e2.transformTemplate ?? No(u2) : void 0;
    ie2 || (ye2 && ve2 && !be2 ? (_e2.x = ye2.x + (R(k2?.x) ? k2.x : 0), _e2.y = ye2.y + (R(k2?.y) ? k2.y : 0), _e2.left = 0, _e2.top = 0, P2.rotate = tv.getNumber(O2), P2.width = ye2.width, P2.minWidth = ye2.width, P2.height = ye2.height) : (P2.left = g2, P2.right = D2, P2.top = te2, P2.bottom = l2, P2.width = re2, P2.height = m2, P2.rotate = O2), b2 ? (!N2 || ue2) && (P2.position = `sticky`, P2.willChange = `transform`, P2.top = E2, P2.right = T2, P2.bottom = x2, P2.left = S2) : N2 && (e2.positionFixed || e2.positionAbsolute) && (P2.position = `absolute`)), gc(e2, P2), pc(e2, P2), Object.assign(P2, A2, k2, _e2), de2 && (ce2.layout = `preserve-aspect`);
    let F2 = Oo(e2.as), Se2 = ce2[`data-framer-name`] ?? v2, Ce2 = N2 ? nh(Sb(ce2)) : ce2;
    return L(e2.viewBox) ? e2.as === void 0 ? _(DD, { ...Ce2, ref: pe2, style: P2, layoutId: de2, viewBox: ae2, viewBoxScale: oe2, transformTemplate: xe2, "data-framer-name": Se2, "data-framer-component-type": kD, children: he2 }) : _(F2, { ...Ce2, ref: pe2, style: P2, layoutId: de2, transformTemplate: xe2, "data-framer-name": Se2, "data-framer-component-type": kD, children: _(DD, { viewBox: ae2, viewBoxScale: oe2, style: { width: `100%`, height: `100%` }, children: he2 }) }) : _(F2, { ...Ce2, ref: pe2, style: P2, layoutId: de2, transformTemplate: xe2, "data-framer-name": Se2, "data-framer-component-type": kD, children: he2 });
  }), jD = Xa(b(function({ children: e2, html: t2, htmlFromDesign: n2, ...r2 }, i2) {
    let a2 = t2 || e2 || n2;
    if (L(a2)) {
      !r2.stylesPresetsClassName && z(r2.stylesPresetsClassNames) && (r2.stylesPresetsClassName = Object.values(r2.stylesPresetsClassNames).join(` `));
      let e3 = { [L(t2) ? `html` : `htmlFromDesign`]: a2 };
      return _(SD, { ...r2, ...e3, ref: i2 });
    }
    if (!r2.stylesPresetsClassNames && L(r2.stylesPresetsClassName)) {
      let [e3, t3, n3, i3, a3] = r2.stylesPresetsClassName.split(` `);
      e3 === void 0 || t3 === void 0 || n3 === void 0 || i3 === void 0 || a3 === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r2.stylesPresetsClassNames}`) : r2.stylesPresetsClassNames = { h1: e3, h2: t3, h3: n3, p: i3, a: a3 };
    }
    return _(AD, { ...r2, ref: i2, children: y(a2) ? a2 : void 0 });
  })), MD = `framer/asset-reference,`, ND = ({ id: e2, path: t2, transform: n2, repeat: r2, width: i2, height: a2, offsetX: o2, offsetY: s2 }) => {
    let c2 = _h(t2);
    return _(`pattern`, { id: e2, width: r2 ? i2 : `100%`, height: r2 ? a2 : `100%`, patternContentUnits: r2 ? void 0 : `objectBoundingBox`, patternUnits: r2 ? `userSpaceOnUse` : void 0, x: r2 ? o2 : void 0, y: r2 ? s2 : void 0, children: _(`image`, { width: r2 ? i2 : 1, height: r2 ? a2 : 1, href: c2, preserveAspectRatio: `none`, transform: r2 ? void 0 : n2, x: r2 ? 0 : void 0, y: r2 ? 0 : void 0 }, c2) });
  }, PD = Pa(), FD = class {
    constructor(e2, t2, n2, r2, i2 = 0) {
      this.id = e2, this.svg = t2, this.innerHTML = n2, this.viewBox = r2, this.count = i2;
    }
  }, ID = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`, LD = class {
    constructor() {
      I(this, `entries`, /* @__PURE__ */ new Map()), I(this, `vectorSetItems`, /* @__PURE__ */ new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e2, t2, n2, r2) {
      if (!e2 || e2 === ``) return ``;
      let i2 = this.entries.get(e2);
      if (!i2) {
        n2 ||= `svg${String(qb(e2))}_${String(e2.length)}`;
        let a2 = e2, o2, s2 = yh(e2);
        s2 && (t2 && bh(s2, n2), s2.id = n2, o2 = Th(s2), s2.removeAttribute(`xmlns`), s2.removeAttribute(`xlink`), s2.removeAttribute(`xmlns:xlink`), a2 = s2.outerHTML), i2 = this.createDOMElementFor(a2, n2, o2, r2), this.entries.set(e2, i2);
      }
      return i2.count += 1, i2.innerHTML;
    }
    getViewBox(e2) {
      if (!(!e2 || e2 === ``)) return this.entries.get(e2)?.viewBox;
    }
    unsubscribe(e2) {
      if (!e2 || e2 === ``) return;
      let t2 = this.entries.get(e2);
      t2 && (--t2.count, !(t2.count > 0) && setTimeout(() => this.maybeRemoveEntry(e2), 5e3));
    }
    maybeRemoveEntry(e2) {
      let t2 = this.entries.get(e2);
      t2 && (t2.count > 0 || (this.entries.delete(e2), this.removeDOMElement(t2)));
    }
    removeDOMElement(e2) {
      PD && document?.getElementById(e2.id)?.remove();
    }
    getOrCreateTemplateContainer() {
      let e2 = document.getElementById(`svg-templates`);
      if (e2) return e2;
      let t2 = document.createElement(`div`);
      return t2.id = `svg-templates`, t2.ariaHidden = `true`, t2.style.cssText = ID, document.body.appendChild(t2), t2;
    }
    maybeAppendTemplate(e2, t2) {
      if (document.getElementById(e2)) return;
      let n2 = document.createElement(`div`);
      n2.innerHTML = t2;
      let r2 = n2.firstElementChild;
      r2 && (r2.id = e2, this.getOrCreateTemplateContainer().appendChild(r2));
    }
    createDOMElementFor(e2, t2, n2, r2) {
      PD && this.maybeAppendTemplate(t2, e2);
      let i2 = n2 ? `0 0 ${n2.width} ${n2.height}` : void 0, a2 = i2 ? ` viewBox="${i2}"` : ``;
      return new FD(t2, e2, `<svg style="width:100%;height:100%;${r2 ? `overflow: visible;` : ``}"${a2}><use href="#${t2}"/></svg>`, i2);
    }
    template(e2, t2) {
      return this.vectorSetItems.get(e2) || (this.vectorSetItems.set(e2, { svg: t2, count: 0 }), !PD) || this.maybeAppendTemplate(e2, t2), `#${e2}`;
    }
    subscribeToTemplate(e2) {
      let t2 = this.vectorSetItems.get(e2);
      if (t2) return t2.count++, () => {
        let t3 = this.vectorSetItems.get(e2);
        t3 && (t3.count--, !(t3.count > 0) && setTimeout(() => {
          this.vectorSetItems.get(e2)?.count || (this.vectorSetItems.delete(e2), PD && document?.getElementById(e2)?.remove());
        }, 5e3));
      };
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e2 = [];
      return e2.push(`<div id="svg-templates" style="${ID}" aria-hidden="true">`), this.entries.forEach((t2) => e2.push(t2.svg)), this.vectorSetItems.forEach((t2) => e2.push(t2.svg)), e2.push(`</div>`), e2.join(`
`);
    }
  }, RD = new LD(), zD = (() => ({ cm: 96 / 2.54, mm: 96 / 2.54 / 10, Q: 96 / 2.54 / 40, in: 96, pc: 96 / 6, pt: 96 / 72, px: 1, em: 16, ex: 8, ch: 8, rem: 16 }))(), BD = b(function(e2, t2) {
    let n2 = ya(), r2 = Po(e2), i2 = p.useRef(null), a2 = t2 ?? i2, o2 = fE();
    return Bo(e2, i2), _(HD, { ...e2, innerRef: a2, parentSize: n2, layoutId: r2, providedWindow: o2 });
  }), VD = 5e4, HD = (() => {
    var e2;
    return e2 = class extends Kb {
      constructor() {
        super(...arguments), I(this, `container`, p.createRef()), I(this, `svgElement`, null), I(this, `setSVGElement`, (e3) => {
          this.svgElement = e3, this.setLayerElement(e3);
        }), I(this, `previouslyRenderedSVG`, ``), I(this, `unmountedSVG`, ``);
      }
      static frame(e3) {
        return ga(e3, e3.parentSize || 0);
      }
      get frame() {
        return ga(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: e3 } = this.props, t2 = e3 ? `svg${e3}` : null;
          RD.subscribe(this.unmountedSVG, !e3, t2), this.previouslyRenderedSVG = this.unmountedSVG;
        }
        this.props.svgContentId || kh(this.container, this.props);
      }
      componentWillUnmount() {
        RD.unsubscribe(this.previouslyRenderedSVG), this.unmountedSVG = this.previouslyRenderedSVG, this.previouslyRenderedSVG = ``;
      }
      componentDidUpdate(e3) {
        if (super.componentDidUpdate(e3), this.props.svgContentId) return;
        let { fill: t2 } = this.props;
        Ib.isImageObject(t2) && Ib.isImageObject(e3.fill) && t2.src !== e3.fill.src && Go(this.svgElement, `fill`, null, false), kh(this.container, this.props);
      }
      collectLayout(e3, t2) {
        if (this.props.withExternalLayout) {
          t2.width = `100%`, t2.height = `100%`, t2.aspectRatio = `inherit`;
          return;
        }
        let n2 = this.frame, { rotation: r2, intrinsicWidth: i2, intrinsicHeight: a2, width: o2, height: s2 } = this.props, c2 = tv.getNumber(r2);
        if (e3.opacity = H(this.props.opacity) ? this.props.opacity : 1, q.hasRestrictions() && n2) {
          Object.assign(e3, { transform: `translate(${n2.x}px, ${n2.y}px) rotate(${c2.toFixed(4)}deg)`, width: `${n2.width}px`, height: `${n2.height}px` }), pa(this.props) && (e3.position = `absolute`);
          let r3 = n2.width / (i2 || 1), o3 = n2.height / (a2 || 1);
          t2.transformOrigin = `top left`;
          let { zoom: s3, target: l3 } = wv;
          if (l3 === q.export) {
            let e4 = s3 > 1 ? s3 : 1;
            t2.transform = `scale(${r3 * e4}, ${o3 * e4})`, t2.zoom = 1 / e4;
          } else t2.transform = `scale(${r3}, ${o3})`;
          i2 && a2 && (t2.width = i2, t2.height = a2);
          return;
        }
        let { left: l2, right: u2, top: d2, bottom: f2 } = this.props;
        Object.assign(e3, { left: l2, right: u2, top: d2, bottom: f2, width: o2, height: s2, rotate: c2 }), Object.assign(t2, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` });
      }
      render() {
        let { id: e3, visible: t2, style: n2, fill: r2, svg: i2, intrinsicHeight: a2, intrinsicWidth: o2, title: s2, description: c2, layoutId: l2, className: u2, variants: d2, withExternalLayout: f2, innerRef: p2, svgContentId: m2, height: h2, opacity: g2, width: v2, requiresOverflowVisible: y2, ...b2 } = this.props;
        if (!f2 && (!t2 || !e3)) return null;
        let x2 = e3 ?? l2 ?? `svg`, S2 = this.frame, C2 = S2 || { width: o2 || 100, height: a2 || 100 }, w2 = { ...n2, imageRendering: `pixelated`, flexShrink: 0 }, E2 = {};
        this.collectLayout(w2, E2), dc(this.props, w2), gc(this.props, w2), Kb.applyWillChange(this.props, w2, false);
        let D2 = null;
        if (typeof r2 == `string` || K.isColorObject(r2)) {
          let e4 = K.isColorObject(r2) ? r2.initialValue || K.toRgbString(r2) : r2;
          w2.fill = e4, w2.color = e4;
        } else if (ex.isLinearGradient(r2)) {
          let t3 = r2, n3 = `${encodeURI(e3 || ``)}g${ex.hash(t3)}`;
          w2.fill = `url(#${n3})`;
          let { stops: i3, x1: a3, x2: o3, y1: s3, y2: c3 } = lh(t3, x2);
          D2 = _(`svg`, { ref: this.setSVGElement, width: `100%`, height: `100%`, style: { position: `absolute` }, role: `presentation`, children: _(`linearGradient`, { id: n3, x1: a3, x2: o3, y1: s3, y2: c3, children: i3.map((e4, t4) => _(`stop`, { offset: e4.position, stopColor: e4.color, stopOpacity: e4.alpha }, t4)) }) });
        } else if (nx.isRadialGradient(r2)) {
          let t3 = r2, n3 = `${encodeURI(e3 || ``)}g${nx.hash(t3)}`;
          w2.fill = `url(#${n3})`;
          let i3 = uh(t3, x2);
          D2 = _(`svg`, { ref: this.setSVGElement, width: `100%`, height: `100%`, style: { position: `absolute` }, role: `presentation`, children: _(`radialGradient`, { id: n3, cy: t3.centerAnchorY, cx: t3.centerAnchorX, r: t3.widthFactor, children: i3.stops.map((e4, t4) => _(`stop`, { offset: e4.position, stopColor: e4.color, stopOpacity: e4.alpha }, t4)) }) });
        } else if (Ib.isImageObject(r2)) {
          let e4 = hh(r2, C2, x2);
          e4 && (w2.fill = `url(#${e4.id})`, D2 = _(`svg`, { ref: this.setSVGElement, width: `100%`, height: `100%`, style: { position: `absolute` }, role: `presentation`, children: _(`defs`, { children: _(ND, { ...e4 }) }) }));
        }
        let k2 = { "data-framer-component-type": `SVG` }, A2 = !S2;
        A2 && Object.assign(k2, Ao(this.props.center));
        let j2 = !y2 && !D2 && !w2.fill && !w2.background && !w2.backgroundImage && i2.length < VD && !Eh(i2) && !Dh(i2), ee2 = null;
        if (j2) w2.backgroundSize = `100% 100%`, w2.backgroundImage = ct(i2), RD.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = ``;
        else {
          let e4 = m2 ? `svg${m2}` : null, t3 = RD.subscribe(i2, !m2, e4, y2);
          RD.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = i2, Oh(w2) && (w2.overflow = `hidden`), ee2 = T(O, { children: [D2, _(`div`, { className: `svgContainer`, style: E2, ref: this.container, dangerouslySetInnerHTML: { __html: t3 } }, Ib.isImageObject(r2) ? r2.src : ``)] });
        }
        let te2 = Oo(this.props.as), { href: ne2, target: M2, rel: re2, onClick: ie2, onTap: ae2 } = this.props, oe2 = s2 || c2;
        return _(te2, { ...k2, ...b2, layoutId: l2, transformTemplate: A2 ? No(this.props.center) : void 0, id: e3, ref: p2, style: w2, className: u2, variants: d2, tabIndex: this.props.tabIndex, role: oe2 ? `img` : void 0, "aria-label": s2, "aria-description": c2, "aria-hidden": oe2 ? void 0 : `true`, onTap: ae2, onClick: ie2, href: ne2, target: M2, rel: re2, children: ee2 });
      }
    }, I(e2, `supportsConstraints`, true), I(e2, `defaultSVGProps`, { left: void 0, right: void 0, top: void 0, bottom: void 0, style: void 0, _constraints: { enabled: true, aspectRatio: null }, parentSize: 0, rotation: 0, visible: true, svg: ``, shadows: [] }), I(e2, `defaultProps`, { ...Kb.defaultProps, ...e2.defaultSVGProps }), e2;
  })(), UD = Xa(BD), WD = 1e3, GD = `explicitInter`, Le.prototype.addChild = function({ transformer: e2 = (e3) => e3 }) {
    let t2 = ve(e2(this.get()));
    return this.onChange((n2) => t2.set(e2(n2))), t2;
  };
}));
export {
  aC as $,
  ro as A,
  Mh as B,
  tE as C,
  ay as Ct,
  UD as D,
  Vh as Dt,
  jD as E,
  Ac as Et,
  sS as F,
  Mg as G,
  Ah as H,
  iS as I,
  KD as J,
  Gr as K,
  oS as L,
  sy as M,
  vc as N,
  JS as O,
  yn as Ot,
  XE as P,
  Ir as Q,
  aS as R,
  rE as S,
  jp as St,
  Ow as T,
  MS as Tt,
  io as U,
  Nh as V,
  Qf as W,
  mt as X,
  Ha as Y,
  rg as Z,
  Y_ as _,
  mp as _t,
  Bv as a,
  np as at,
  _C as b,
  kt as bt,
  sD as c,
  jt as ct,
  hC as d,
  ws as dt,
  ti as et,
  gD as f,
  Pl as ft,
  DC as g,
  ni as gt,
  dg as h,
  yr as ht,
  qS as i,
  Mr as it,
  bb as j,
  jh as k,
  fD as l,
  jl as lt,
  hg as m,
  br as mt,
  il as n,
  up as nt,
  Qi as o,
  al as ot,
  mC as p,
  _p as pt,
  dt as q,
  FS as r,
  RD as rt,
  JC as s,
  Rt as st,
  Yl as t,
  iE as tt,
  Jx as u,
  op as ut,
  Pn as v,
  Xf as vt,
  q as w,
  Mp as wt,
  $x as x,
  vh as xt,
  Sd as y,
  Lt as yt,
  iy as z
};
