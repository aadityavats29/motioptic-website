import { r as e, t } from "./rolldown-runtime.OA-FSkXT.mjs";
import { A as n, B as r, C as i, E as a, F as o, I as s, L as c, M as l, N as u, P as d, R as f, T as p, c as m, d as h, f as g, g as _, j as v, k as y, l as b, o as x, s as S, u as C, w, y as T, z as E } from "./react.DcLFkBVj.mjs";
var ee, D, te, ne, re, ie, ae, oe, se, ce, le, ue, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe = t((() => {
  ee = Object.create, D = Object.defineProperty, te = Object.getOwnPropertyDescriptor, ne = Object.getOwnPropertyNames, re = Object.getPrototypeOf, ie = Object.prototype.hasOwnProperty, ae = (e2, t2) => (t2 = Symbol[e2]) ? t2 : Symbol.for(`Symbol.` + e2), oe = (e2) => {
    throw TypeError(e2);
  }, se = (e2, t2, n2) => t2 in e2 ? D(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, ce = (e2, t2) => D(e2, `name`, { value: t2, configurable: true }), le = ((t2) => e === void 0 ? typeof Proxy < `u` ? new Proxy(t2, { get: (t3, n2) => (e === void 0 ? t3 : e)[n2] }) : t2 : e)(function(t2) {
    if (e !== void 0) return e.apply(this, arguments);
    throw Error(`Dynamic require of "` + t2 + `" is not supported`);
  }), ue = (e2, t2) => function() {
    return t2 || (0, e2[ne(e2)[0]])((t2 = { exports: {} }).exports, t2), t2.exports;
  }, de = (e2, t2) => {
    for (var n2 in t2) D(e2, n2, { get: t2[n2], enumerable: true });
  }, fe = (e2, t2, n2, r2) => {
    if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of ne(t2)) !ie.call(e2, i2) && i2 !== n2 && D(e2, i2, { get: () => t2[i2], enumerable: !(r2 = te(t2, i2)) || r2.enumerable });
    return e2;
  }, pe = (e2, t2, n2) => (n2 = e2 == null ? {} : ee(re(e2)), fe(t2 || !e2 || !e2.__esModule ? D(n2, `default`, { value: e2, enumerable: true }) : n2, e2)), me = (e2) => [, , , ee(e2?.[ae(`metadata`)] ?? null)], he = [`class`, `method`, `getter`, `setter`, `accessor`, `field`, `value`, `get`, `set`], ge = (e2) => e2 !== void 0 && typeof e2 != `function` ? oe(`Function expected`) : e2, _e = (e2, t2, n2, r2, i2) => ({ kind: he[e2], name: t2, metadata: r2, addInitializer: (e3) => n2._ ? oe(`Already initialized`) : i2.push(ge(e3 || null)) }), ve = (e2, t2) => se(t2, ae(`metadata`), e2[3]), ye = (e2, t2, n2, r2) => {
    for (var i2 = 0, a2 = e2[t2 >> 1], o2 = a2 && a2.length; i2 < o2; i2++) t2 & 1 ? a2[i2].call(n2) : r2 = a2[i2].call(n2, r2);
    return r2;
  }, be = (e2, t2, n2, r2, i2, a2) => {
    var o2, s2, c2, l2, u2, d2 = t2 & 7, f2 = !!(t2 & 8), p2 = !!(t2 & 16), m2 = d2 > 3 ? e2.length + 1 : d2 ? f2 ? 1 : 2 : 0, h2 = he[d2 + 5], g2 = d2 > 3 && (e2[m2 - 1] = []), _2 = e2[m2] || (e2[m2] = []), v2 = d2 && (!p2 && !f2 && (i2 = i2.prototype), d2 < 5 && (d2 > 3 || !p2) && te(d2 < 4 ? i2 : { get [n2]() {
      return we(this, a2);
    }, set [n2](e3) {
      return Ee(this, a2, e3);
    } }, n2));
    d2 ? p2 && d2 < 4 && ce(a2, (d2 > 2 ? `set ` : d2 > 1 ? `get ` : ``) + n2) : ce(i2, n2);
    for (var y2 = r2.length - 1; y2 >= 0; y2--) l2 = _e(d2, n2, c2 = {}, e2[3], _2), d2 && (l2.static = f2, l2.private = p2, u2 = l2.access = { has: p2 ? (e3) => Ce(i2, e3) : (e3) => n2 in e3 }, d2 ^ 3 && (u2.get = p2 ? (e3) => (d2 ^ 1 ? we : De)(e3, i2, d2 ^ 4 ? a2 : v2.get) : (e3) => e3[n2]), d2 > 2 && (u2.set = p2 ? (e3, t3) => Ee(e3, i2, t3, d2 ^ 4 ? a2 : v2.set) : (e3, t3) => e3[n2] = t3)), s2 = (0, r2[y2])(d2 ? d2 < 4 ? p2 ? a2 : v2[h2] : d2 > 4 ? void 0 : { get: v2.get, set: v2.set } : i2, l2), c2._ = 1, d2 ^ 4 || s2 === void 0 ? ge(s2) && (d2 > 4 ? g2.unshift(s2) : d2 ? p2 ? a2 = s2 : v2[h2] = s2 : i2 = s2) : typeof s2 != `object` || !s2 ? oe(`Object expected`) : (ge(o2 = s2.get) && (v2.get = o2), ge(o2 = s2.set) && (v2.set = o2), ge(o2 = s2.init) && g2.unshift(o2));
    return d2 || ve(e2, i2), v2 && D(i2, n2, v2), p2 ? d2 ^ 4 ? a2 : v2 : i2;
  }, xe = (e2, t2, n2) => se(e2, typeof t2 == `symbol` ? t2 : t2 + ``, n2), Se = (e2, t2, n2) => t2.has(e2) || oe(`Cannot ` + n2), Ce = (e2, t2) => Object(t2) === t2 ? e2.has(t2) : oe(`Cannot use the "in" operator on this value`), we = (e2, t2, n2) => (Se(e2, t2, `read from private field`), n2 ? n2.call(e2) : t2.get(e2)), Te = (e2, t2, n2) => t2.has(e2) ? oe(`Cannot add the same private member more than once`) : t2 instanceof WeakSet ? t2.add(e2) : t2.set(e2, n2), Ee = (e2, t2, n2, r2) => (Se(e2, t2, `write to private field`), r2 ? r2.call(e2, n2) : t2.set(e2, n2), n2), De = (e2, t2, n2) => (Se(e2, t2, `access private method`), n2);
}));
function ke(e2, t2) {
  e2.indexOf(t2) === -1 && e2.push(t2);
}
function Ae(e2, t2) {
  let n2 = e2.indexOf(t2);
  n2 > -1 && e2.splice(n2, 1);
}
function je([...e2], t2, n2) {
  let r2 = t2 < 0 ? e2.length + t2 : t2;
  if (r2 >= 0 && r2 < e2.length) {
    let r3 = n2 < 0 ? e2.length + n2 : n2, [i2] = e2.splice(t2, 1);
    e2.splice(r3, 0, i2);
  }
  return e2;
}
function Me(e2) {
  return typeof e2 == `object` && !!e2;
}
function Ne(e2) {
  let t2;
  return () => (t2 === void 0 && (t2 = e2()), t2);
}
function Pe(e2, t2) {
  return t2 ? 1e3 / t2 * e2 : 0;
}
function Fe(e2, t2, n2, r2, i2) {
  let a2, o2, s2 = 0;
  do
    o2 = t2 + (n2 - t2) / 2, a2 = Vs(o2, r2, i2) - e2, a2 > 0 ? n2 = o2 : t2 = o2;
  while (Math.abs(a2) > Hs && ++s2 < Us);
  return o2;
}
function Ie(e2, t2, n2, r2) {
  if (e2 === t2 && n2 === r2) return L;
  let i2 = (t3) => Fe(t3, 0, 1, e2, n2);
  return (e3) => e3 === 0 || e3 === 1 ? e3 : Vs(i2(e3), t2, r2);
}
function Le(e2, t2) {
  return nc(e2) ? e2[Bs(0, e2.length, t2)] : e2;
}
function Re(e2, t2) {
  let n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set(), i2 = false, a2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { delta: 0, timestamp: 0, isProcessing: false }, c2 = 0;
  function l2(t3) {
    o2.has(t3) && (u2.schedule(t3), e2()), c2++, t3(s2);
  }
  let u2 = { schedule: (e3, t3 = false, a3 = false) => {
    let s3 = a3 && i2 ? n2 : r2;
    return t3 && o2.add(e3), s3.add(e3), e3;
  }, cancel: (e3) => {
    r2.delete(e3), o2.delete(e3);
  }, process: (e3) => {
    if (s2 = e3, i2) {
      a2 = true;
      return;
    }
    i2 = true;
    let o3 = n2;
    n2 = r2, r2 = o3, n2.forEach(l2), t2 && B.value && B.value.frameloop[t2].push(c2), c2 = 0, n2.clear(), i2 = false, a2 && (a2 = false, u2.process(e3));
  } };
  return u2;
}
function ze(e2, t2) {
  let n2 = false, r2 = true, i2 = { delta: 0, timestamp: 0, isProcessing: false }, a2 = () => n2 = true, o2 = sc.reduce((e3, n3) => (e3[n3] = Re(a2, t2 ? n3 : void 0), e3), {}), { setup: s2, read: c2, resolveKeyframes: l2, preUpdate: u2, update: d2, preRender: f2, render: p2, postRender: m2 } = o2, h2 = () => {
    let a3 = I.useManualTiming, o3 = a3 ? i2.timestamp : performance.now();
    n2 = false, a3 || (i2.delta = r2 ? 1e3 / 60 : Math.max(Math.min(o3 - i2.timestamp, cc), 1)), i2.timestamp = o3, i2.isProcessing = true, s2.process(i2), c2.process(i2), l2.process(i2), u2.process(i2), d2.process(i2), f2.process(i2), p2.process(i2), m2.process(i2), i2.isProcessing = false, n2 && t2 && (r2 = false, e2(h2));
  }, g2 = () => {
    n2 = true, r2 = true, i2.isProcessing || e2(h2);
  };
  return { schedule: sc.reduce((e3, t3) => {
    let r3 = o2[t3];
    return e3[t3] = (e4, t4 = false, i3 = false) => (n2 || g2(), r3.schedule(e4, t4, i3)), e3;
  }, {}), cancel: (e3) => {
    for (let t3 = 0; t3 < sc.length; t3++) o2[sc[t3]].cancel(e3);
  }, state: i2, steps: o2 };
}
function Be() {
  uc = void 0;
}
function Ve(e2) {
  return typeof e2 == `string` ? e2.split(`/*`)[0].includes(`var(--`) : false;
}
function He(e2) {
  return e2 == null;
}
function Ue(e2) {
  let t2 = ``, n2 = ``, r2 = ``, i2 = ``;
  return e2.length > 5 ? (t2 = e2.substring(1, 3), n2 = e2.substring(3, 5), r2 = e2.substring(5, 7), i2 = e2.substring(7, 9)) : (t2 = e2.substring(1, 2), n2 = e2.substring(2, 3), r2 = e2.substring(3, 4), i2 = e2.substring(4, 5), t2 += t2, n2 += n2, r2 += r2, i2 += i2), { red: parseInt(t2, 16), green: parseInt(n2, 16), blue: parseInt(r2, 16), alpha: i2 ? parseInt(i2, 16) / 255 : 1 };
}
function We(e2) {
  return isNaN(e2) && typeof e2 == `string` && (e2.match(xc)?.length || 0) + (e2.match(Fc)?.length || 0) > 0;
}
function Ge(e2) {
  let t2 = e2.toString(), n2 = [], r2 = { color: [], number: [], var: [] }, i2 = [], a2 = 0;
  return { values: n2, split: t2.replace(Vc, (e3) => (q.test(e3) ? (r2.color.push(a2), i2.push(Lc), n2.push(q.parse(e3))) : e3.startsWith(zc) ? (r2.var.push(a2), i2.push(Rc), n2.push(e3)) : (r2.number.push(a2), i2.push(Ic), n2.push(parseFloat(e3))), ++a2, Bc)).split(Bc), indexes: r2, types: i2 };
}
function Ke(e2) {
  return Ge(e2).values;
}
function qe({ split: e2, types: t2 }) {
  let n2 = e2.length;
  return (r2) => {
    let i2 = ``;
    for (let a2 = 0; a2 < n2; a2++) if (i2 += e2[a2], r2[a2] !== void 0) {
      let e3 = t2[a2];
      e3 === Ic ? i2 += bc(r2[a2]) : e3 === Lc ? i2 += q.transform(r2[a2]) : i2 += r2[a2];
    }
    return i2;
  };
}
function Je(e2) {
  return qe(Ge(e2));
}
function Ye(e2) {
  let t2 = Ge(e2);
  return qe(t2)(t2.values.map((e3, n2) => Uc(e3, t2.split[n2])));
}
function Xe(e2, t2, n2) {
  return n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e2 + (t2 - e2) * 6 * n2 : n2 < 1 / 2 ? t2 : n2 < 2 / 3 ? e2 + (t2 - e2) * (2 / 3 - n2) * 6 : e2;
}
function Ze({ hue: e2, saturation: t2, lightness: n2, alpha: r2 }) {
  e2 /= 360, t2 /= 100, n2 /= 100;
  let i2 = 0, a2 = 0, o2 = 0;
  if (!t2) i2 = a2 = o2 = n2;
  else {
    let r3 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, s2 = 2 * n2 - r3;
    i2 = Xe(s2, r3, e2 + 1 / 3), a2 = Xe(s2, r3, e2), o2 = Xe(s2, r3, e2 - 1 / 3);
  }
  return { red: Math.round(i2 * 255), green: Math.round(a2 * 255), blue: Math.round(o2 * 255), alpha: r2 };
}
function Qe(e2, t2) {
  return (n2) => n2 > 0 ? t2 : e2;
}
function $e(e2) {
  let t2 = Kc(e2);
  if (Ns(!!t2, `'${e2}' is not an animatable color. Use the equivalent color code instead.`, `color-not-animatable`), !t2) return false;
  let n2 = t2.parse(e2);
  return t2 === Pc && (n2 = Ze(n2)), n2;
}
function et(e2, t2) {
  return Jc.has(e2) ? (n2) => n2 <= 0 ? e2 : t2 : (n2) => n2 >= 1 ? t2 : e2;
}
function tt(e2, t2) {
  return (n2) => Y(e2, t2, n2);
}
function nt(e2) {
  return typeof e2 == `number` ? tt : typeof e2 == `string` ? hc(e2) ? Qe : q.test(e2) ? qc : Yc : Array.isArray(e2) ? rt : typeof e2 == `object` ? q.test(e2) ? qc : it : Qe;
}
function rt(e2, t2) {
  let n2 = [...e2], r2 = n2.length, i2 = e2.map((e3, n3) => nt(e3)(e3, t2[n3]));
  return (e3) => {
    for (let t3 = 0; t3 < r2; t3++) n2[t3] = i2[t3](e3);
    return n2;
  };
}
function it(e2, t2) {
  let n2 = { ...e2, ...t2 }, r2 = {};
  for (let i2 in n2) e2[i2] !== void 0 && t2[i2] !== void 0 && (r2[i2] = nt(e2[i2])(e2[i2], t2[i2]));
  return (e3) => {
    for (let t3 in r2) n2[t3] = r2[t3](e3);
    return n2;
  };
}
function at(e2, t2) {
  let n2 = [], r2 = { color: 0, var: 0, number: 0 };
  for (let i2 = 0; i2 < t2.values.length; i2++) {
    let a2 = t2.types[i2], o2 = e2.indexes[a2][r2[a2]];
    n2[i2] = e2.values[o2] ?? 0, r2[a2]++;
  }
  return n2;
}
function ot(e2, t2, n2) {
  return typeof e2 == `number` && typeof t2 == `number` && typeof n2 == `number` ? Y(e2, t2, n2) : nt(e2)(e2, t2);
}
function st(e2) {
  let t2 = 0, n2 = e2.next(t2);
  for (; !n2.done && t2 < Zc; ) t2 += 50, n2 = e2.next(t2);
  return t2 >= Zc ? 1 / 0 : t2;
}
function ct(e2, t2 = 100, n2) {
  let r2 = n2({ ...e2, keyframes: [0, t2] }), i2 = Math.min(st(r2), Zc);
  return { type: `keyframes`, ease: (e3) => r2.next(i2 * e3).value / t2, duration: z(i2) };
}
function lt(e2, t2) {
  return e2 * Math.sqrt(1 - t2 * t2);
}
function ut(e2, t2, n2) {
  let r2 = n2;
  for (let n3 = 1; n3 < Qc; n3++) r2 -= e2(r2) / t2(r2);
  return r2;
}
function dt({ duration: e2 = X.duration, bounce: t2 = X.bounce, velocity: n2 = X.velocity, mass: r2 = X.mass }) {
  let i2, a2;
  Ns(e2 <= R(X.maxDuration), `Spring duration must be 10 seconds or less`, `spring-duration-limit`);
  let o2 = 1 - t2;
  o2 = P(X.minDamping, X.maxDamping, o2), e2 = P(X.minDuration, X.maxDuration, z(e2)), o2 < 1 ? (i2 = (t3) => {
    let r3 = t3 * o2, i3 = r3 * e2, a3 = r3 - n2, s3 = lt(t3, o2), c3 = Math.exp(-i3);
    return $c - a3 / s3 * c3;
  }, a2 = (t3) => {
    let r3 = t3 * o2 * e2, a3 = r3 * n2 + n2, s3 = o2 ** 2 * t3 ** 2 * e2, c3 = Math.exp(-r3), l2 = lt(t3 ** 2, o2);
    return (-i2(t3) + $c > 0 ? -1 : 1) * ((a3 - s3) * c3) / l2;
  }) : (i2 = (t3) => {
    let r3 = Math.exp(-t3 * e2), i3 = (t3 - n2) * e2 + 1;
    return -$c + r3 * i3;
  }, a2 = (t3) => Math.exp(-t3 * e2) * ((n2 - t3) * (e2 * e2)));
  let s2 = 5 / e2, c2 = ut(i2, a2, s2);
  if (e2 = R(e2), isNaN(c2)) return { stiffness: X.stiffness, damping: X.damping, duration: e2 };
  {
    let t3 = c2 ** 2 * r2;
    return { stiffness: t3, damping: o2 * 2 * Math.sqrt(r2 * t3), duration: e2 };
  }
}
function ft(e2, t2) {
  return t2.some((t3) => e2[t3] !== void 0);
}
function pt(e2) {
  let t2 = { velocity: X.velocity, stiffness: X.stiffness, damping: X.damping, mass: X.mass, isResolvedFromDuration: false, ...e2 };
  if (!ft(e2, tl) && ft(e2, el)) if (t2.velocity = 0, e2.visualDuration) {
    let n2 = e2.visualDuration, r2 = 2 * Math.PI / (n2 * 1.2), i2 = r2 * r2, a2 = 2 * P(0.05, 1, 1 - (e2.bounce || 0)) * Math.sqrt(i2);
    t2 = { ...t2, mass: X.mass, stiffness: i2, damping: a2 };
  } else {
    let n2 = dt({ ...e2, velocity: 0 });
    t2 = { ...t2, ...n2, mass: X.mass }, t2.isResolvedFromDuration = true;
  }
  return t2;
}
function mt(e2 = X.visualDuration, t2 = X.bounce) {
  let n2 = typeof e2 == `object` ? e2 : { visualDuration: e2, keyframes: [0, 1], bounce: t2 }, { restSpeed: r2, restDelta: i2 } = n2, a2 = n2.keyframes[0], o2 = n2.keyframes[n2.keyframes.length - 1], s2 = { done: false, value: a2 }, { stiffness: c2, damping: l2, mass: u2, duration: d2, velocity: f2, isResolvedFromDuration: p2 } = pt({ ...n2, velocity: -z(n2.velocity || 0) }), m2 = f2 || 0, h2 = l2 / (2 * Math.sqrt(c2 * u2)), g2 = o2 - a2, _2 = z(Math.sqrt(c2 / u2)), v2 = Math.abs(g2) < 5;
  r2 ||= v2 ? X.restSpeed.granular : X.restSpeed.default, i2 ||= v2 ? X.restDelta.granular : X.restDelta.default;
  let y2, b2, x2, S2, C2, w2;
  if (h2 < 1) x2 = lt(_2, h2), S2 = (m2 + h2 * _2 * g2) / x2, y2 = (e3) => o2 - Math.exp(-h2 * _2 * e3) * (S2 * Math.sin(x2 * e3) + g2 * Math.cos(x2 * e3)), C2 = h2 * _2 * S2 + g2 * x2, w2 = h2 * _2 * g2 - S2 * x2, b2 = (e3) => Math.exp(-h2 * _2 * e3) * (C2 * Math.sin(x2 * e3) + w2 * Math.cos(x2 * e3));
  else if (h2 === 1) {
    y2 = (e4) => o2 - Math.exp(-_2 * e4) * (g2 + (m2 + _2 * g2) * e4);
    let e3 = m2 + _2 * g2;
    b2 = (t3) => Math.exp(-_2 * t3) * (_2 * e3 * t3 - m2);
  } else {
    let e3 = _2 * Math.sqrt(h2 * h2 - 1);
    y2 = (t4) => {
      let n4 = Math.exp(-h2 * _2 * t4), r4 = Math.min(e3 * t4, 300);
      return o2 - n4 * ((m2 + h2 * _2 * g2) * Math.sinh(r4) + e3 * g2 * Math.cosh(r4)) / e3;
    };
    let t3 = (m2 + h2 * _2 * g2) / e3, n3 = h2 * _2 * t3 - g2 * e3, r3 = h2 * _2 * g2 - t3 * e3;
    b2 = (t4) => {
      let i3 = Math.exp(-h2 * _2 * t4), a3 = Math.min(e3 * t4, 300);
      return i3 * (n3 * Math.sinh(a3) + r3 * Math.cosh(a3));
    };
  }
  let T2 = { calculatedDuration: p2 && d2 || null, velocity: (e3) => R(b2(e3)), next: (e3) => {
    if (!p2 && h2 < 1) {
      let t4 = Math.exp(-h2 * _2 * e3), n3 = Math.sin(x2 * e3), a3 = Math.cos(x2 * e3), c3 = o2 - t4 * (S2 * n3 + g2 * a3), l3 = R(t4 * (C2 * n3 + w2 * a3));
      return s2.done = Math.abs(l3) <= r2 && Math.abs(o2 - c3) <= i2, s2.value = s2.done ? o2 : c3, s2;
    }
    let t3 = y2(e3);
    if (p2) s2.done = e3 >= d2;
    else {
      let n3 = R(b2(e3));
      s2.done = Math.abs(n3) <= r2 && Math.abs(o2 - t3) <= i2;
    }
    return s2.value = s2.done ? o2 : t3, s2;
  }, toString: () => {
    let e3 = Math.min(st(T2), Zc), t3 = Xc((t4) => T2.next(e3 * t4).value, e3, 30);
    return e3 + `ms ` + t3;
  }, toTransition: () => {
  } };
  return T2;
}
function ht(e2, t2, n2) {
  let r2 = Math.max(t2 - nl, 0);
  return Pe(n2 - e2(r2), t2 - r2);
}
function gt({ keyframes: e2, velocity: t2 = 0, power: n2 = 0.8, timeConstant: r2 = 325, bounceDamping: i2 = 10, bounceStiffness: a2 = 500, modifyTarget: o2, min: s2, max: c2, restDelta: l2 = 0.5, restSpeed: u2 }) {
  let d2 = e2[0], f2 = { done: false, value: d2 }, p2 = (e3) => s2 !== void 0 && e3 < s2 || c2 !== void 0 && e3 > c2, m2 = (e3) => s2 === void 0 ? c2 : c2 === void 0 || Math.abs(s2 - e3) < Math.abs(c2 - e3) ? s2 : c2, h2 = n2 * t2, g2 = d2 + h2, _2 = o2 === void 0 ? g2 : o2(g2);
  _2 !== g2 && (h2 = _2 - d2);
  let v2 = (e3) => -h2 * Math.exp(-e3 / r2), y2 = (e3) => _2 + v2(e3), b2 = (e3) => {
    let t3 = v2(e3), n3 = y2(e3);
    f2.done = Math.abs(t3) <= l2, f2.value = f2.done ? _2 : n3;
  }, x2, S2, C2 = (e3) => {
    p2(f2.value) && (x2 = e3, S2 = mt({ keyframes: [f2.value, m2(f2.value)], velocity: ht(y2, e3, f2.value), damping: i2, stiffness: a2, restDelta: l2, restSpeed: u2 }));
  };
  return C2(0), { calculatedDuration: null, next: (e3) => {
    let t3 = false;
    return !S2 && x2 === void 0 && (t3 = true, b2(e3), C2(e3)), x2 !== void 0 && e3 >= x2 ? S2.next(e3 - x2) : (!t3 && b2(e3), f2);
  } };
}
function _t(e2, t2, n2) {
  let r2 = [], i2 = n2 || I.mix || ot, a2 = e2.length - 1;
  for (let n3 = 0; n3 < a2; n3++) {
    let a3 = i2(e2[n3], e2[n3 + 1]);
    t2 && (a3 = Ls(Array.isArray(t2) ? t2[n3] || L : t2, a3)), r2.push(a3);
  }
  return r2;
}
function vt(e2, t2, { clamp: n2 = true, ease: r2, mixer: i2 } = {}) {
  let a2 = e2.length;
  if (F(a2 === t2.length, `Both input and output ranges must be the same length`, `range-length`), a2 === 1) return () => t2[0];
  if (a2 === 2 && t2[0] === t2[1]) return () => t2[1];
  let o2 = e2[0] === e2[1];
  e2[0] > e2[a2 - 1] && (e2 = [...e2].reverse(), t2 = [...t2].reverse());
  let s2 = _t(t2, r2, i2), c2 = s2.length, l2 = (n3) => {
    if (o2 && n3 < e2[0]) return t2[0];
    let r3 = 0;
    if (c2 > 1) for (; r3 < e2.length - 2 && !(n3 < e2[r3 + 1]); r3++) ;
    let i3 = Rs(e2[r3], e2[r3 + 1], n3);
    return s2[r3](i3);
  };
  return n2 ? (t3) => l2(P(e2[0], e2[a2 - 1], t3)) : l2;
}
function yt(e2, t2) {
  let n2 = e2[e2.length - 1];
  for (let r2 = 1; r2 <= t2; r2++) {
    let i2 = Rs(0, t2, r2);
    e2.push(Y(n2, 1, i2));
  }
}
function bt(e2) {
  let t2 = [0];
  return yt(t2, e2.length - 1), t2;
}
function xt(e2, t2) {
  return e2.map((e3) => e3 * t2);
}
function St(e2, t2) {
  return e2.map(() => t2 || tc).splice(0, e2.length - 1);
}
function Ct({ duration: e2 = 300, keyframes: t2, times: n2, ease: r2 = `easeInOut` }) {
  let i2 = nc(r2) ? r2.map(oc) : oc(r2), a2 = { done: false, value: t2[0] }, o2 = vt(xt(n2 && n2.length === t2.length ? n2 : bt(t2), e2), t2, { ease: Array.isArray(i2) ? i2 : St(t2, i2) });
  return { calculatedDuration: e2, next: (t3) => (a2.value = o2(t3), a2.done = t3 >= e2, a2) };
}
function wt(e2, { repeat: t2, repeatType: n2 = `loop` }, r2, i2 = 1) {
  let a2 = e2.filter(rl), o2 = i2 < 0 || t2 && n2 !== `loop` && t2 % 2 == 1 ? 0 : a2.length - 1;
  return !o2 || r2 === void 0 ? a2[o2] : r2;
}
function Tt(e2) {
  typeof e2.type == `string` && (e2.type = al[e2.type]);
}
function Et(e2) {
  return new cl(e2);
}
function Dt(e2) {
  for (let t2 = 1; t2 < e2.length; t2++) e2[t2] ?? (e2[t2] = e2[t2 - 1]);
}
function Ot(e2) {
  return e2.includes(`scale`) ? 1 : 0;
}
function kt(e2, t2) {
  if (!e2 || e2 === `none`) return Ot(t2);
  let n2 = e2.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r2, i2;
  if (n2) r2 = gl, i2 = n2;
  else {
    let t3 = e2.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r2 = dl, i2 = t3;
  }
  if (!i2) return Ot(t2);
  let a2 = r2[t2], o2 = i2[1].split(`,`).map(At);
  return typeof a2 == `function` ? a2(o2) : o2[a2];
}
function At(e2) {
  return parseFloat(e2.trim());
}
function jt(e2) {
  let t2 = [];
  return Sl.forEach((n2) => {
    let r2 = e2.getValue(n2);
    r2 !== void 0 && (t2.push([n2, r2.get()]), r2.set(n2.startsWith(`scale`) ? 1 : 0));
  }), t2;
}
function Mt() {
  if (El) {
    let e2 = Array.from(wl).filter((e3) => e3.needsMeasurement), t2 = new Set(e2.map((e3) => e3.element)), n2 = /* @__PURE__ */ new Map();
    t2.forEach((e3) => {
      let t3 = jt(e3);
      t3.length && (n2.set(e3, t3), e3.render());
    }), e2.forEach((e3) => e3.measureInitialState()), t2.forEach((e3) => {
      e3.render();
      let t3 = n2.get(e3);
      t3 && t3.forEach(([t4, n3]) => {
        e3.getValue(t4)?.set(n3);
      });
    }), e2.forEach((e3) => e3.measureEndState()), e2.forEach((e3) => {
      e3.suspendedScrollY !== void 0 && r.scrollTo(0, e3.suspendedScrollY);
    });
  }
  El = false, Tl = false, wl.forEach((e2) => e2.complete(Dl)), wl.clear();
}
function Nt() {
  wl.forEach((e2) => {
    e2.readKeyframes(), e2.needsMeasurement && (El = true);
  });
}
function Pt() {
  Dl = true, Nt(), Mt(), Dl = false;
}
function Ft(e2, t2, n2) {
  kl(t2) ? e2.style.setProperty(t2, n2) : e2.style[t2] = n2;
}
function It(e2, t2) {
  let n2 = Ne(e2);
  return () => Al[t2] ?? n2();
}
function Lt(e2, t2) {
  if (e2) return typeof e2 == `function` ? Nl() ? Xc(e2, t2) : `ease-out` : rc(e2) ? Pl(e2) : Array.isArray(e2) ? e2.map((e3) => Lt(e3, t2) || Fl.easeOut) : Fl[e2];
}
function Rt(e2, t2, n2, { delay: r2 = 0, duration: i2 = 300, repeat: a2 = 0, repeatType: o2 = `loop`, ease: s2 = `easeOut`, times: c2 } = {}, l2 = void 0) {
  let u2 = { [t2]: n2 };
  c2 && (u2.offset = c2);
  let d2 = Lt(s2, i2);
  Array.isArray(d2) && (u2.easing = d2), B.value && dc.waapi++;
  let f2 = { delay: r2, duration: i2, easing: Array.isArray(d2) ? `linear` : d2, fill: `both`, iterations: a2 + 1, direction: o2 === `reverse` ? `alternate` : `normal` };
  l2 && (f2.pseudoElement = l2);
  let p2 = e2.animate(u2, f2);
  return B.value && p2.finished.finally(() => {
    dc.waapi--;
  }), p2;
}
function zt(e2) {
  return typeof e2 == `function` && `applyToOptions` in e2;
}
function Bt({ type: e2, ...t2 }) {
  return zt(e2) && Nl() ? e2.applyToOptions(t2) : (t2.duration ??= 300, t2.ease ??= `easeOut`, t2);
}
function Vt(e2) {
  return e2 in Ll;
}
function Ht(e2) {
  typeof e2.ease == `string` && Vt(e2.ease) && (e2.ease = Ll[e2.ease]);
}
function Ut(e2) {
  e2.duration = 0, e2.type = `keyframes`;
}
function Wt(e2) {
  for (let t2 = 0; t2 < e2.length; t2++) if (typeof e2[t2] == `string` && Vl.test(e2[t2])) return true;
  return false;
}
function Gt(e2) {
  let { motionValue: t2, name: n2, repeatDelay: r2, repeatType: i2, damping: a2, type: o2, keyframes: s2 } = e2;
  if (!(t2?.owner?.current instanceof HTMLElement)) return false;
  let { onUpdate: c2, transformTemplate: l2 } = t2.owner.getProps();
  return Ul() && n2 && (Bl.has(n2) || Hl.has(n2) && Wt(s2)) && (n2 !== `transform` || !l2) && !c2 && !r2 && i2 !== `mirror` && a2 !== 0 && o2 !== `inertia`;
}
function Kt(e2) {
  let t2 = e2[0];
  if (e2.length === 1) return true;
  for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2) return true;
}
function qt(e2, t2, n2, r2) {
  let i2 = e2[0];
  if (i2 === null) return false;
  if (t2 === `display` || t2 === `visibility`) return true;
  let a2 = e2[e2.length - 1], o2 = Wl(i2, t2), s2 = Wl(a2, t2);
  return Ns(o2 === s2, `You are trying to animate ${t2} from "${i2}" to "${a2}". "${o2 ? a2 : i2}" is not an animatable value.`, `value-not-animatable`), !o2 || !s2 ? false : Kt(e2) || (n2 === `spring` || zt(n2)) && r2;
}
function Jt(e2, t2) {
  let n2 = 0;
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2][t2];
    i2 !== null && i2 > n2 && (n2 = i2);
  }
  return n2;
}
function Yt(e2, t2, n2, r2 = 0, i2 = 1) {
  let a2 = Array.from(e2).sort((e3, t3) => e3.sortNodePosition(t3)).indexOf(t2), o2 = e2.size, s2 = (o2 - 1) * r2;
  return typeof n2 == `function` ? n2(a2, o2) : i2 === 1 ? a2 * r2 : s2 - a2 * r2;
}
function Xt(e2) {
  let t2 = Yl.exec(e2);
  if (!t2) return [,];
  let [, n2, r2, i2] = t2;
  return [`--${n2 ?? r2}`, i2];
}
function Zt(e2, t2, n2 = 1) {
  F(n2 <= Xl, `Max CSS variable fallback depth detected in property "${e2}". This may indicate a circular fallback dependency.`, `max-css-var-depth`);
  let [i2, a2] = Xt(e2);
  if (!i2) return;
  let o2 = r.getComputedStyle(t2).getPropertyValue(i2);
  if (o2) {
    let e3 = o2.trim();
    return Ps(e3) ? parseFloat(e3) : e3;
  }
  return hc(a2) ? Zt(a2, t2, n2 + 1) : a2;
}
function Qt(e2, t2) {
  if (e2?.inherit && t2) {
    let { inherit: n2, ...r2 } = e2;
    return { ...t2, ...r2 };
  }
  return e2;
}
function $t(e2, t2) {
  let n2 = e2?.[t2] ?? e2?.default ?? e2;
  return n2 === e2 ? n2 : Qt(n2, e2);
}
function en(e2) {
  for (let t2 in e2) if (!nu.has(t2)) return true;
  return false;
}
function tn(e2) {
  let t2 = [{}, {}];
  return e2?.values.forEach((e3, n2) => {
    t2[0][n2] = e3.get(), t2[1][n2] = e3.getVelocity();
  }), t2;
}
function nn(e2, t2, n2, r2) {
  if (typeof t2 == `function`) {
    let [i2, a2] = tn(r2);
    t2 = t2(n2 === void 0 ? e2.custom : n2, i2, a2);
  }
  if (typeof t2 == `string` && (t2 = e2.variants && e2.variants[t2]), typeof t2 == `function`) {
    let [i2, a2] = tn(r2);
    t2 = t2(n2 === void 0 ? e2.custom : n2, i2, a2);
  }
  return t2;
}
function rn(e2, t2, n2) {
  let r2 = e2.getProps();
  return nn(r2, t2, n2 === void 0 ? r2.custom : n2, e2);
}
function O(e2, t2) {
  return new cu(e2, t2);
}
function an(e2, t2, n2) {
  e2.hasValue(t2) ? e2.getValue(t2).set(n2) : e2.addValue(t2, O(n2));
}
function on(e2) {
  return lu(e2) ? e2[e2.length - 1] || 0 : e2;
}
function sn(e2, t2) {
  let { transitionEnd: n2 = {}, transition: r2 = {}, ...i2 } = rn(e2, t2) || {};
  for (let t3 in i2 = { ...i2, ...n2 }, i2) an(e2, t3, on(i2[t3]));
}
function cn(e2) {
  return !!(Z(e2) && e2.add);
}
function ln(e2, t2) {
  let n2 = e2.getValue(`willChange`);
  if (cn(n2)) return n2.add(t2);
  if (!n2 && I.WillChange) {
    let n3 = new I.WillChange(`auto`);
    e2.addValue(`willChange`, n3), n3.add(t2);
  }
}
function un(e2) {
  return e2.replace(/([A-Z])/g, (e3) => `-${e3.toLowerCase()}`);
}
function dn(e2) {
  return e2.props[du];
}
function fn({ protectedKeys: e2, needsAnimating: t2 }, n2) {
  let r2 = e2.hasOwnProperty(n2) && t2[n2] !== true;
  return t2[n2] = false, r2;
}
function pn(e2, t2, { delay: n2 = 0, transitionOverride: i2, type: a2 } = {}) {
  let { transition: o2, transitionEnd: s2, ...c2 } = t2, l2 = e2.getDefaultTransition();
  o2 = o2 ? Qt(o2, l2) : l2;
  let u2 = o2?.reduceMotion;
  i2 && (o2 = i2);
  let d2 = [], f2 = a2 && e2.animationState && e2.animationState.getState()[a2];
  for (let t3 in c2) {
    let i3 = e2.getValue(t3, e2.latestValues[t3] ?? null), a3 = c2[t3];
    if (a3 === void 0 || f2 && fn(f2, t3)) continue;
    let s3 = { delay: n2, ...$t(o2 || {}, t3) }, l3 = i3.get();
    if (l3 !== void 0 && !i3.isAnimating() && !Array.isArray(a3) && a3 === l3 && !s3.velocity) {
      V.update(() => i3.set(a3));
      continue;
    }
    let p2 = false;
    if (r.MotionHandoffAnimation) {
      let n3 = dn(e2);
      if (n3) {
        let e3 = r.MotionHandoffAnimation(n3, t3, V);
        e3 !== null && (s3.startTime = e3, p2 = true);
      }
    }
    ln(e2, t3);
    let m2 = u2 ?? e2.shouldReduceMotion;
    i3.start(ru(t3, i3, a3, m2 && iu.has(t3) ? { type: false } : s3, e2, p2));
    let h2 = i3.animation;
    h2 && d2.push(h2);
  }
  if (s2) {
    let t3 = () => V.update(() => {
      s2 && sn(e2, s2);
    });
    d2.length ? Promise.all(d2).then(t3) : t3();
  }
  return d2;
}
function mn(e2, t2, n2 = {}) {
  let r2 = rn(e2, t2, n2.type === `exit` ? e2.presenceContext?.custom : void 0), { transition: i2 = e2.getDefaultTransition() || {} } = r2 || {};
  n2.transitionOverride && (i2 = n2.transitionOverride);
  let a2 = r2 ? () => Promise.all(pn(e2, r2, n2)) : () => Promise.resolve(), o2 = e2.variantChildren && e2.variantChildren.size ? (r3 = 0) => {
    let { delayChildren: a3 = 0, staggerChildren: o3, staggerDirection: s3 } = i2;
    return hn(e2, t2, r3, a3, o3, s3, n2);
  } : () => Promise.resolve(), { when: s2 } = i2;
  if (s2) {
    let [e3, t3] = s2 === `beforeChildren` ? [a2, o2] : [o2, a2];
    return e3().then(() => t3());
  } else return Promise.all([a2(), o2(n2.delay)]);
}
function hn(e2, t2, n2 = 0, r2 = 0, i2 = 0, a2 = 1, o2) {
  let s2 = [];
  for (let c2 of e2.variantChildren) c2.notify(`AnimationStart`, t2), s2.push(mn(c2, t2, { ...o2, delay: n2 + (typeof r2 == `function` ? 0 : r2) + Yt(e2.variantChildren, c2, r2, i2, a2) }).then(() => c2.notify(`AnimationComplete`, t2)));
  return Promise.all(s2);
}
function gn(e2, t2, n2 = {}) {
  e2.notify(`AnimationStart`, t2);
  let r2;
  if (Array.isArray(t2)) {
    let i2 = t2.map((t3) => mn(e2, t3, n2));
    r2 = Promise.all(i2);
  } else if (typeof t2 == `string`) r2 = mn(e2, t2, n2);
  else {
    let i2 = typeof t2 == `function` ? rn(e2, t2, n2.custom) : t2;
    r2 = Promise.all(pn(e2, i2, n2));
  }
  return r2.then(() => {
    e2.notify(`AnimationComplete`, t2);
  });
}
function _n(e2) {
  let [t2, n2] = e2.slice(0, -1).split(`(`);
  if (t2 === `drop-shadow`) return e2;
  let [r2] = n2.match(xc) || [];
  if (!r2) return e2;
  let i2 = n2.replace(r2, ``), a2 = vu.has(t2) ? 1 : 0;
  return r2 !== n2 && (a2 *= 100), t2 + `(` + a2 + i2 + `)`;
}
function vn(e2, t2) {
  let n2 = Cu(e2);
  return wu.has(n2) || (n2 = J), n2.getAnimatableNone ? n2.getAnimatableNone(t2) : void 0;
}
function yn(e2) {
  return typeof e2 == `number` ? e2 === 0 : e2 === null ? true : e2 === `none` || e2 === `0` || Fs(e2);
}
function bn(e2, t2, n2) {
  let r2 = 0, i2;
  for (; r2 < e2.length && !i2; ) {
    let t3 = e2[r2];
    typeof t3 == `string` && !Tu.has(t3) && Ge(t3).values.length && (i2 = e2[r2]), r2++;
  }
  if (i2 && n2) for (let r3 of t2) e2[r3] = vn(n2, i2);
}
function xn(e2, t2, n2) {
  if (e2 == null) return [];
  if (e2 instanceof EventTarget) return [e2];
  if (typeof e2 == `string`) {
    let r2 = document;
    t2 && (r2 = t2.current);
    let i2 = n2?.[e2] ?? r2.querySelectorAll(e2);
    return i2 ? Array.from(i2) : [];
  }
  return Array.from(e2).filter((e3) => e3 != null);
}
function Sn(e2) {
  return Me(e2) && `offsetHeight` in e2 && !(`ownerSVGElement` in e2);
}
function Cn() {
  return Q.x || Q.y;
}
function wn(e2) {
  return e2 === `x` || e2 === `y` ? Q[e2] ? null : (Q[e2] = true, () => {
    Q[e2] = false;
  }) : Q.x || Q.y ? null : (Q.x = Q.y = true, () => {
    Q.x = Q.y = false;
  });
}
function Tn(e2, t2) {
  let n2 = xn(e2), r2 = new AbortController();
  return [n2, { passive: true, ...t2, signal: r2.signal }, () => r2.abort()];
}
function En(e2) {
  return !(e2.pointerType === `touch` || Cn());
}
function Dn(e2, t2, n2 = {}) {
  let [i2, a2, o2] = Tn(e2, n2);
  return i2.forEach((e3) => {
    let n3 = false, i3 = false, o3, s2 = () => {
      e3.removeEventListener(`pointerleave`, d2);
    }, c2 = (e4) => {
      o3 &&= (o3(e4), void 0), s2();
    }, l2 = (e4) => {
      n3 = false, r.removeEventListener(`pointerup`, l2), r.removeEventListener(`pointercancel`, l2), i3 && (i3 = false, c2(e4));
    }, u2 = () => {
      n3 = true, r.addEventListener(`pointerup`, l2, a2), r.addEventListener(`pointercancel`, l2, a2);
    }, d2 = (e4) => {
      if (e4.pointerType !== `touch`) {
        if (n3) {
          i3 = true;
          return;
        }
        c2(e4);
      }
    };
    e3.addEventListener(`pointerenter`, (n4) => {
      if (!En(n4)) return;
      i3 = false;
      let r2 = t2(e3, n4);
      typeof r2 == `function` && (o3 = r2, e3.addEventListener(`pointerleave`, d2, a2));
    }, a2), e3.addEventListener(`pointerdown`, u2, a2);
  }), o2;
}
function On(e2) {
  return Mu.has(e2.tagName) || e2.isContentEditable === true;
}
function kn(e2) {
  return Nu.has(e2.tagName) || e2.isContentEditable === true;
}
function An(e2) {
  return (t2) => {
    t2.key === `Enter` && e2(t2);
  };
}
function jn(e2, t2) {
  e2.dispatchEvent(new PointerEvent(`pointer` + t2, { isPrimary: true, bubbles: true }));
}
function Mn(e2) {
  return ju(e2) && !Cn();
}
function Nn(e2, t2, n2 = {}) {
  let [i2, a2, o2] = Tn(e2, n2), s2 = (e3) => {
    let i3 = e3.currentTarget;
    if (!Mn(e3) || Iu.has(e3)) return;
    Pu.add(i3), n2.stopPropagation && Iu.add(e3);
    let o3 = t2(i3, e3), s3 = (e4, t3) => {
      r.removeEventListener(`pointerup`, c2), r.removeEventListener(`pointercancel`, l2), Pu.has(i3) && Pu.delete(i3), Mn(e4) && typeof o3 == `function` && o3(e4, { success: t3 });
    }, c2 = (e4) => {
      s3(e4, i3 === r || i3 === document || n2.useGlobalTarget || Au(i3, e4.target));
    }, l2 = (e4) => {
      s3(e4, false);
    };
    r.addEventListener(`pointerup`, c2, a2), r.addEventListener(`pointercancel`, l2, a2);
  };
  return i2.forEach((e3) => {
    (n2.useGlobalTarget ? r : e3).addEventListener(`pointerdown`, s2, a2), Sn(e3) && (e3.addEventListener(`focus`, (e4) => Fu(e4, a2)), !On(e3) && !e3.hasAttribute(`tabindex`) && (e3.tabIndex = 0));
  }), o2;
}
function Pn(e2) {
  return Me(e2) && `ownerSVGElement` in e2;
}
function Fn({ target: e2, borderBoxSize: t2 }) {
  Lu.get(e2)?.forEach((n2) => {
    n2(e2, { get width() {
      return Bu(e2, t2);
    }, get height() {
      return Vu(e2, t2);
    } });
  });
}
function In(e2) {
  e2.forEach(Fn);
}
function Ln() {
  typeof ResizeObserver > `u` || (Ru = new ResizeObserver(In));
}
function Rn(e2, t2) {
  Ru || Ln();
  let n2 = xn(e2);
  return n2.forEach((e3) => {
    let n3 = Lu.get(e3);
    n3 || (n3 = /* @__PURE__ */ new Set(), Lu.set(e3, n3)), n3.add(t2), Ru?.observe(e3);
  }), () => {
    n2.forEach((e3) => {
      let n3 = Lu.get(e3);
      n3?.delete(t2), n3?.size || Ru?.unobserve(e3);
    });
  };
}
function zn() {
  Uu = () => {
    let e2 = { get width() {
      return r.innerWidth;
    }, get height() {
      return r.innerHeight;
    } };
    Hu.forEach((t2) => t2(e2));
  }, r.addEventListener(`resize`, Uu);
}
function Bn(e2) {
  return Hu.add(e2), Uu || zn(), () => {
    Hu.delete(e2), !Hu.size && typeof Uu == `function` && (r.removeEventListener(`resize`, Uu), Uu = void 0);
  };
}
function Vn(e2, t2) {
  return typeof e2 == `function` ? Bn(e2) : Rn(e2, t2);
}
function Hn(e2, t2) {
  let n2, r2 = () => {
    let { currentTime: r3 } = t2, i2 = (r3 === null ? 0 : r3.value) / 100;
    n2 !== i2 && e2(i2), n2 = i2;
  };
  return V.preUpdate(r2, true), () => H(r2);
}
function Un(e2) {
  return Pn(e2) && e2.tagName === `svg`;
}
function Wn(e2, t2) {
  if (e2 === `first`) return 0;
  {
    let n2 = t2 - 1;
    return e2 === `last` ? n2 : n2 / 2;
  }
}
function Gn(e2 = 0.1, { startDelay: t2 = 0, from: n2 = 0, ease: r2 } = {}) {
  return (i2, a2) => {
    let o2 = typeof n2 == `number` ? n2 : Wn(n2, a2), s2 = e2 * Math.abs(o2 - i2);
    if (r2) {
      let t3 = a2 * e2;
      s2 = oc(r2)(s2 / t3) * t3;
    }
    return t2 + s2;
  };
}
function Kn(...e2) {
  let t2 = !Array.isArray(e2[0]), n2 = t2 ? 0 : -1, r2 = e2[0 + n2], i2 = e2[1 + n2], a2 = e2[2 + n2], o2 = e2[3 + n2], s2 = vt(i2, a2, o2);
  return t2 ? s2(r2) : s2;
}
function qn(e2, t2, n2 = {}) {
  let r2 = e2.get(), i2 = null, a2 = r2, o2, s2 = typeof r2 == `string` ? r2.replace(/[\d.-]/g, ``) : void 0, c2 = () => {
    i2 &&= (i2.stop(), null), e2.animation = void 0;
  }, l2 = () => {
    let t3 = Yn(e2.get()), r3 = Yn(a2);
    if (t3 === r3) {
      c2();
      return;
    }
    let s3 = i2 ? i2.getGeneratorVelocity() : e2.getVelocity();
    c2(), i2 = new cl({ keyframes: [t3, r3], velocity: s3, type: `spring`, restDelta: 1e-3, restSpeed: 0.01, ...n2, onUpdate: o2 });
  }, u2 = () => {
    l2(), e2.animation = i2 ?? void 0, e2.events.animationStart?.notify(), i2?.then(() => {
      e2.animation = void 0, e2.events.animationComplete?.notify();
    });
  };
  if (e2.attach((e3, t3) => {
    a2 = e3, o2 = (e4) => t3(Jn(e4, s2)), V.postRender(u2);
  }, c2), Z(t2)) {
    let r3 = n2.skipInitialAnimation === true, i3 = t2.on(`change`, (t3) => {
      r3 ? (r3 = false, e2.jump(Jn(t3, s2), false)) : e2.set(Jn(t3, s2));
    }), a3 = e2.on(`destroy`, i3);
    return () => {
      i3(), a3();
    };
  }
  return c2;
}
function Jn(e2, t2) {
  return t2 ? e2 + t2 : e2;
}
function Yn(e2) {
  return typeof e2 == `number` ? e2 : parseFloat(e2);
}
function Xn(e2, t2, n2) {
  let r2 = () => t2.set(n2()), i2 = () => V.preRender(r2, false, true), a2 = e2.map((e3) => e3.on(`change`, i2));
  t2.on(`destroy`, () => {
    a2.forEach((e3) => e3()), H(r2);
  });
}
function Zn(e2) {
  let t2 = [];
  su.current = t2;
  let n2 = e2();
  su.current = void 0;
  let r2 = O(n2);
  return Xn(t2, r2, e2), r2;
}
function Qn(e2) {
  return typeof e2 == `object` && !!e2 && typeof e2.start == `function`;
}
function $n(e2) {
  return typeof e2 == `string` || Array.isArray(e2);
}
function er(e2) {
  return Qn(e2.animate) || Zu.some((t2) => $n(e2[t2]));
}
function tr(e2) {
  return !!(er(e2) || e2.variants);
}
function nr(e2, t2, n2) {
  for (let r2 in t2) {
    let i2 = t2[r2], a2 = n2[r2];
    if (Z(i2)) e2.addValue(r2, i2);
    else if (Z(a2)) e2.addValue(r2, O(i2, { owner: e2 }));
    else if (a2 !== i2) if (e2.hasValue(r2)) {
      let t3 = e2.getValue(r2);
      t3.liveStyle === true ? t3.jump(i2) : t3.hasAnimated || t3.set(i2);
    } else {
      let t3 = e2.getStaticValue(r2);
      e2.addValue(r2, O(t3 === void 0 ? i2 : t3, { owner: e2 }));
    }
  }
  for (let r2 in n2) t2[r2] === void 0 && e2.removeValue(r2);
  return t2;
}
function rr() {
  if ($u.current = true, ed) if (r.matchMedia) {
    let e2 = r.matchMedia(`(prefers-reduced-motion)`), t2 = () => Qu.current = e2.matches;
    e2.addEventListener(`change`, t2), t2();
  } else Qu.current = false;
}
function ir(e2) {
  nd = e2;
}
function ar() {
  return nd;
}
function or({ top: e2, left: t2, right: n2, bottom: r2 }) {
  return { x: { min: t2, max: n2 }, y: { min: e2, max: r2 } };
}
function sr({ x: e2, y: t2 }) {
  return { top: t2.min, right: e2.max, bottom: t2.max, left: e2.min };
}
function cr(e2, t2) {
  if (!t2) return e2;
  let n2 = t2({ x: e2.left, y: e2.top }), r2 = t2({ x: e2.right, y: e2.bottom });
  return { top: n2.y, left: n2.x, bottom: r2.y, right: r2.x };
}
function lr(e2) {
  return e2 === void 0 || e2 === 1;
}
function ur({ scale: e2, scaleX: t2, scaleY: n2 }) {
  return !lr(e2) || !lr(t2) || !lr(n2);
}
function dr(e2) {
  return ur(e2) || fr(e2) || e2.z || e2.rotate || e2.rotateX || e2.rotateY || e2.skewX || e2.skewY;
}
function fr(e2) {
  return pr(e2.x) || pr(e2.y);
}
function pr(e2) {
  return e2 && e2 !== `0%`;
}
function mr(e2, t2, n2) {
  return n2 + t2 * (e2 - n2);
}
function hr(e2, t2, n2, r2, i2) {
  return i2 !== void 0 && (e2 = mr(e2, i2, r2)), mr(e2, n2, r2) + t2;
}
function gr(e2, t2 = 0, n2 = 1, r2, i2) {
  e2.min = hr(e2.min, t2, n2, r2, i2), e2.max = hr(e2.max, t2, n2, r2, i2);
}
function _r(e2, { x: t2, y: n2 }) {
  gr(e2.x, t2.translate, t2.scale, t2.originPoint), gr(e2.y, n2.translate, n2.scale, n2.originPoint);
}
function vr(e2, t2, n2, r2 = false) {
  let i2 = n2.length;
  if (!i2) return;
  t2.x = t2.y = 1;
  let a2, o2;
  for (let s2 = 0; s2 < i2; s2++) {
    a2 = n2[s2], o2 = a2.projectionDelta;
    let { visualElement: i3 } = a2.options;
    i3 && i3.props.style && i3.props.style.display === `contents` || (r2 && a2.options.layoutScroll && a2.scroll && a2 !== a2.root && (k(e2.x, -a2.scroll.offset.x), k(e2.y, -a2.scroll.offset.y)), o2 && (t2.x *= o2.x.scale, t2.y *= o2.y.scale, _r(e2, o2)), r2 && dr(a2.latestValues) && xr(e2, a2.latestValues, a2.layout?.layoutBox));
  }
  t2.x < sd && t2.x > od && (t2.x = 1), t2.y < sd && t2.y > od && (t2.y = 1);
}
function k(e2, t2) {
  e2.min += t2, e2.max += t2;
}
function yr(e2, t2, n2, r2, i2 = 0.5) {
  gr(e2, t2, n2, Y(e2.min, e2.max, i2), r2);
}
function br(e2, t2) {
  return typeof e2 == `string` ? parseFloat(e2) / 100 * (t2.max - t2.min) : e2;
}
function xr(e2, t2, n2) {
  let r2 = n2 ?? e2;
  yr(e2.x, br(t2.x, r2.x), t2.scaleX, t2.scale, t2.originX), yr(e2.y, br(t2.y, r2.y), t2.scaleY, t2.scale, t2.originY);
}
function Sr(e2, t2) {
  return or(cr(e2.getBoundingClientRect(), t2));
}
function Cr(e2, t2, n2) {
  let r2 = Sr(e2, n2), { scroll: i2 } = t2;
  return i2 && (k(r2.x, i2.offset.x), k(r2.y, i2.offset.y)), r2;
}
function wr(e2, t2, n2) {
  let r2 = ``, i2 = true;
  for (let a2 = 0; a2 < ld; a2++) {
    let o2 = vl[a2], s2 = e2[o2];
    if (s2 === void 0) continue;
    let c2 = true;
    if (typeof s2 == `number`) c2 = s2 === (o2.startsWith(`scale`) ? 1 : 0);
    else {
      let e3 = parseFloat(s2);
      c2 = o2.startsWith(`scale`) ? e3 === 1 : e3 === 0;
    }
    if (!c2 || n2) {
      let e3 = Du(s2, _u[o2]);
      if (!c2) {
        i2 = false;
        let t3 = cd[o2] || o2;
        r2 += `${t3}(${e3}) `;
      }
      n2 && (t2[o2] = e3);
    }
  }
  return r2 = r2.trim(), n2 ? r2 = n2(t2, i2 ? `` : r2) : i2 && (r2 = `none`), r2;
}
function Tr(e2, t2, n2) {
  let { style: r2, vars: i2, transformOrigin: a2 } = e2, o2 = false, s2 = false;
  for (let e3 in t2) {
    let n3 = t2[e3];
    if (yl.has(e3)) {
      o2 = true;
      continue;
    } else if (pc(e3)) {
      i2[e3] = n3;
      continue;
    } else {
      let t3 = Du(n3, _u[e3]);
      e3.startsWith(`origin`) ? (s2 = true, a2[e3] = t3) : r2[e3] = t3;
    }
  }
  if (t2.transform || (o2 || n2 ? r2.transform = wr(t2, e2.transform, n2) : r2.transform &&= `none`), s2) {
    let { originX: e3 = `50%`, originY: t3 = `50%`, originZ: n3 = 0 } = a2;
    r2.transformOrigin = `${e3} ${t3} ${n3}`;
  }
}
function Er(e2, { style: t2, vars: n2 }, r2, i2) {
  let a2 = e2.style, o2;
  for (o2 in t2) a2[o2] = t2[o2];
  for (o2 in i2?.applyProjectionStyles(a2, r2), n2) a2.setProperty(o2, n2[o2]);
}
function Dr(e2, t2) {
  return t2.max === t2.min ? 0 : e2 / (t2.max - t2.min) * 100;
}
function Or(e2) {
  for (let t2 in e2) fd[t2] = e2[t2], pc(t2) && (fd[t2].isCSSVariable = true);
}
function kr(e2, { layout: t2, layoutId: n2 }) {
  return yl.has(e2) || e2.startsWith(`origin`) || (t2 || n2 !== void 0) && (!!fd[e2] || e2 === `opacity`);
}
function Ar(e2, t2, n2) {
  let r2 = e2.style, i2 = t2?.style, a2 = {};
  if (!r2) return a2;
  for (let t3 in r2) (Z(r2[t3]) || i2 && Z(i2[t3]) || kr(t3, e2) || n2?.getValue(t3)?.liveStyle !== void 0) && (a2[t3] = r2[t3]);
  return a2;
}
function jr(e2) {
  return r.getComputedStyle(e2);
}
function Mr(e2, t2) {
  return e2 in t2;
}
function Nr(e2, t2, n2 = 1, r2 = 0, i2 = true) {
  e2.pathLength = 1;
  let a2 = i2 ? hd : gd;
  e2[a2.offset] = `${-r2}`, e2[a2.array] = `${t2} ${n2}`;
}
function Pr(e2, { attrX: t2, attrY: n2, attrScale: r2, pathLength: i2, pathSpacing: a2 = 1, pathOffset: o2 = 0, ...s2 }, c2, l2, u2) {
  if (Tr(e2, s2, l2), c2) {
    e2.style.viewBox && (e2.attrs.viewBox = e2.style.viewBox);
    return;
  }
  e2.attrs = e2.style, e2.style = {};
  let { attrs: d2, style: f2 } = e2;
  d2.transform && (f2.transform = d2.transform, delete d2.transform), (f2.transform || d2.transformOrigin) && (f2.transformOrigin = d2.transformOrigin ?? `50% 50%`, delete d2.transformOrigin), f2.transform && (f2.transformBox = u2?.transformBox ?? `fill-box`, delete d2.transformBox);
  for (let e3 of _d) d2[e3] !== void 0 && (f2[e3] = d2[e3], delete d2[e3]);
  t2 !== void 0 && (d2.x = t2), n2 !== void 0 && (d2.y = n2), r2 !== void 0 && (d2.scale = r2), i2 !== void 0 && Nr(d2, i2, a2, o2, false);
}
function Fr(e2, t2, n2, r2) {
  for (let n3 in Er(e2, t2, void 0, r2), t2.attrs) e2.setAttribute(vd.has(n3) ? n3 : un(n3), t2.attrs[n3]);
}
function Ir(e2, t2, n2) {
  let r2 = Ar(e2, t2, n2);
  for (let n3 in e2) if (Z(e2[n3]) || Z(t2[n3])) {
    let t3 = vl.indexOf(n3) === -1 ? n3 : `attr` + n3.charAt(0).toUpperCase() + n3.substring(1);
    r2[t3] = e2[n3];
  }
  return r2;
}
function Lr(e2) {
  if (!e2) return;
  if (!e2.isControllingVariants) {
    let t3 = e2.parent && Lr(e2.parent) || {};
    return e2.props.initial !== void 0 && (t3.initial = e2.props.initial), t3;
  }
  let t2 = {};
  for (let n2 = 0; n2 < xd; n2++) {
    let r2 = Zu[n2], i2 = e2.props[r2];
    ($n(i2) || i2 === false) && (t2[r2] = i2);
  }
  return t2;
}
function Rr(e2, t2) {
  if (!Array.isArray(t2)) return false;
  let n2 = t2.length;
  if (n2 !== e2.length) return false;
  for (let r2 = 0; r2 < n2; r2++) if (t2[r2] !== e2[r2]) return false;
  return true;
}
function zr(e2) {
  return (t2) => Promise.all(t2.map(({ animation: t3, options: n2 }) => gn(e2, t3, n2)));
}
function Br(e2) {
  let t2 = zr(e2), n2 = Ur(), r2 = true, i2 = false, a2 = (t3) => (n3, r3) => {
    let i3 = rn(e2, r3, t3 === `exit` ? e2.presenceContext?.custom : void 0);
    if (i3) {
      let { transition: e3, transitionEnd: t4, ...r4 } = i3;
      n3 = { ...n3, ...r4, ...t4 };
    }
    return n3;
  };
  function o2(n3) {
    t2 = n3(e2);
  }
  function s2(o3) {
    let { props: s3 } = e2, c3 = Lr(e2.parent) || {}, l2 = [], u2 = /* @__PURE__ */ new Set(), d2 = {}, f2 = 1 / 0;
    for (let t3 = 0; t3 < Cd; t3++) {
      let p3 = Sd[t3], m2 = n2[p3], h2 = s3[p3] === void 0 ? c3[p3] : s3[p3], g2 = $n(h2), _2 = p3 === o3 ? m2.isActive : null;
      _2 === false && (f2 = t3);
      let v2 = h2 === c3[p3] && h2 !== s3[p3] && g2;
      if (v2 && (r2 || i2) && e2.manuallyAnimateOnMount && (v2 = false), m2.protectedKeys = { ...d2 }, !m2.isActive && _2 === null || !h2 && !m2.prevProp || Qn(h2) || typeof h2 == `boolean`) continue;
      if (p3 === `exit` && m2.isActive && _2 !== true) {
        m2.prevResolvedValues && (d2 = { ...d2, ...m2.prevResolvedValues });
        continue;
      }
      let y2 = Vr(m2.prevProp, h2), b2 = y2 || p3 === o3 && m2.isActive && !v2 && g2 || t3 > f2 && g2, x2 = false, S2 = Array.isArray(h2) ? h2 : [h2], C2 = S2.reduce(a2(p3), {});
      _2 === false && (C2 = {});
      let { prevResolvedValues: w2 = {} } = m2, T2 = { ...w2, ...C2 }, E2 = (t4) => {
        b2 = true, u2.has(t4) && (x2 = true, u2.delete(t4)), m2.needsAnimating[t4] = true;
        let n3 = e2.getValue(t4);
        n3 && (n3.liveStyle = false);
      };
      for (let e3 in T2) {
        let t4 = C2[e3], n3 = w2[e3];
        if (d2.hasOwnProperty(e3)) continue;
        let r3 = false;
        r3 = lu(t4) && lu(n3) ? !Rr(t4, n3) : t4 !== n3, r3 ? t4 == null ? u2.add(e3) : E2(e3) : t4 !== void 0 && u2.has(e3) ? E2(e3) : m2.protectedKeys[e3] = true;
      }
      m2.prevProp = h2, m2.prevResolvedValues = C2, m2.isActive && (d2 = { ...d2, ...C2 }), (r2 || i2) && e2.blockInitialAnimation && (b2 = false);
      let ee2 = v2 && y2;
      b2 && (!ee2 || x2) && l2.push(...S2.map((t4) => {
        let n3 = { type: p3 };
        if (typeof t4 == `string` && (r2 || i2) && !ee2 && e2.manuallyAnimateOnMount && e2.parent) {
          let { parent: r3 } = e2, i3 = rn(r3, t4);
          if (r3.enteringChildren && i3) {
            let { delayChildren: t5 } = i3.transition || {};
            n3.delay = Yt(r3.enteringChildren, e2, t5);
          }
        }
        return { animation: t4, options: n3 };
      }));
    }
    if (u2.size) {
      let t3 = {};
      if (typeof s3.initial != `boolean`) {
        let n3 = rn(e2, Array.isArray(s3.initial) ? s3.initial[0] : s3.initial);
        n3 && n3.transition && (t3.transition = n3.transition);
      }
      u2.forEach((n3) => {
        let r3 = e2.getBaseTarget(n3), i3 = e2.getValue(n3);
        i3 && (i3.liveStyle = true), t3[n3] = r3 ?? null;
      }), l2.push({ animation: t3 });
    }
    let p2 = !!l2.length;
    return r2 && (s3.initial === false || s3.initial === s3.animate) && !e2.manuallyAnimateOnMount && (p2 = false), r2 = false, i2 = false, p2 ? t2(l2) : Promise.resolve();
  }
  function c2(t3, r3) {
    if (n2[t3].isActive === r3) return Promise.resolve();
    e2.variantChildren?.forEach((e3) => e3.animationState?.setActive(t3, r3)), n2[t3].isActive = r3;
    let i3 = s2(t3);
    for (let e3 in n2) n2[e3].protectedKeys = {};
    return i3;
  }
  return { animateChanges: s2, setActive: c2, setAnimateFunction: o2, getState: () => n2, reset: () => {
    n2 = Ur(), i2 = true;
  } };
}
function Vr(e2, t2) {
  return typeof t2 == `string` ? t2 !== e2 : Array.isArray(t2) ? !Rr(t2, e2) : false;
}
function Hr(e2 = false) {
  return { isActive: e2, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Ur() {
  return { animate: Hr(true), whileInView: Hr(), whileHover: Hr(), whileTap: Hr(), whileDrag: Hr(), whileFocus: Hr(), exit: Hr() };
}
function Wr(e2, t2) {
  e2.min = t2.min, e2.max = t2.max;
}
function A(e2, t2) {
  Wr(e2.x, t2.x), Wr(e2.y, t2.y);
}
function Gr(e2, t2) {
  e2.translate = t2.translate, e2.scale = t2.scale, e2.originPoint = t2.originPoint, e2.origin = t2.origin;
}
function j(e2) {
  return e2.max - e2.min;
}
function Kr(e2, t2, n2) {
  return Math.abs(e2 - t2) <= n2;
}
function qr(e2, t2, n2, r2 = 0.5) {
  e2.origin = r2, e2.originPoint = Y(t2.min, t2.max, e2.origin), e2.scale = j(n2) / j(t2), e2.translate = Y(n2.min, n2.max, e2.origin) - e2.originPoint, (e2.scale >= Td && e2.scale <= Ed || isNaN(e2.scale)) && (e2.scale = 1), (e2.translate >= Od && e2.translate <= kd || isNaN(e2.translate)) && (e2.translate = 0);
}
function Jr(e2, t2, n2, r2) {
  qr(e2.x, t2.x, n2.x, r2 ? r2.originX : void 0), qr(e2.y, t2.y, n2.y, r2 ? r2.originY : void 0);
}
function Yr(e2, t2, n2, r2 = 0) {
  e2.min = (r2 ? Y(n2.min, n2.max, r2) : n2.min) + t2.min, e2.max = e2.min + j(t2);
}
function Xr(e2, t2, n2, r2) {
  Yr(e2.x, t2.x, n2.x, r2?.x), Yr(e2.y, t2.y, n2.y, r2?.y);
}
function Zr(e2, t2, n2, r2 = 0) {
  let i2 = r2 ? Y(n2.min, n2.max, r2) : n2.min;
  e2.min = t2.min - i2, e2.max = e2.min + j(t2);
}
function Qr(e2, t2, n2, r2) {
  Zr(e2.x, t2.x, n2.x, r2?.x), Zr(e2.y, t2.y, n2.y, r2?.y);
}
function $r(e2, t2, n2, r2, i2) {
  return e2 -= t2, e2 = mr(e2, 1 / n2, r2), i2 !== void 0 && (e2 = mr(e2, 1 / i2, r2)), e2;
}
function ei(e2, t2 = 0, n2 = 1, r2 = 0.5, i2, a2 = e2, o2 = e2) {
  if (G.test(t2) && (t2 = parseFloat(t2), t2 = Y(o2.min, o2.max, t2 / 100) - o2.min), typeof t2 != `number`) return;
  let s2 = Y(a2.min, a2.max, r2);
  e2 === a2 && (s2 -= t2), e2.min = $r(e2.min, t2, n2, s2, i2), e2.max = $r(e2.max, t2, n2, s2, i2);
}
function ti(e2, t2, [n2, r2, i2], a2, o2) {
  ei(e2, t2[n2], t2[r2], t2[i2], t2.scale, a2, o2);
}
function ni(e2, t2, n2, r2) {
  ti(e2.x, t2, Ad, n2 ? n2.x : void 0, r2 ? r2.x : void 0), ti(e2.y, t2, jd, n2 ? n2.y : void 0, r2 ? r2.y : void 0);
}
function ri(e2) {
  return e2.translate === 0 && e2.scale === 1;
}
function ii(e2) {
  return ri(e2.x) && ri(e2.y);
}
function ai(e2, t2) {
  return e2.min === t2.min && e2.max === t2.max;
}
function oi(e2, t2) {
  return ai(e2.x, t2.x) && ai(e2.y, t2.y);
}
function si(e2, t2) {
  return Math.round(e2.min) === Math.round(t2.min) && Math.round(e2.max) === Math.round(t2.max);
}
function ci(e2, t2) {
  return si(e2.x, t2.x) && si(e2.y, t2.y);
}
function li(e2) {
  return j(e2.x) / j(e2.y);
}
function ui(e2, t2) {
  return e2.translate === t2.translate && e2.scale === t2.scale && e2.originPoint === t2.originPoint;
}
function M(e2) {
  return [e2(`x`), e2(`y`)];
}
function di(e2, t2, n2) {
  let r2 = ``, i2 = e2.x.translate / t2.x, a2 = e2.y.translate / t2.y, o2 = n2?.z || 0;
  if ((i2 || a2 || o2) && (r2 = `translate3d(${i2}px, ${a2}px, ${o2}px) `), (t2.x !== 1 || t2.y !== 1) && (r2 += `scale(${1 / t2.x}, ${1 / t2.y}) `), n2) {
    let { transformPerspective: e3, rotate: t3, rotateX: i3, rotateY: a3, skewX: o3, skewY: s3 } = n2;
    e3 && (r2 = `perspective(${e3}px) ${r2}`), t3 && (r2 += `rotate(${t3}deg) `), i3 && (r2 += `rotateX(${i3}deg) `), a3 && (r2 += `rotateY(${a3}deg) `), o3 && (r2 += `skewX(${o3}deg) `), s3 && (r2 += `skewY(${s3}deg) `);
  }
  let s2 = e2.x.scale * t2.x, c2 = e2.y.scale * t2.y;
  return (s2 !== 1 || c2 !== 1) && (r2 += `scale(${s2}, ${c2})`), r2 || `none`;
}
function fi(e2, t2, n2, r2, i2, a2) {
  i2 ? (e2.opacity = Y(0, n2.opacity ?? 1, Id(r2)), e2.opacityExit = Y(t2.opacity ?? 1, 0, Ld(r2))) : a2 && (e2.opacity = Y(t2.opacity ?? 1, n2.opacity ?? 1, r2));
  for (let i3 = 0; i3 < Nd; i3++) {
    let a3 = Md[i3], o2 = pi(t2, a3), s2 = pi(n2, a3);
    o2 === void 0 && s2 === void 0 || (o2 ||= 0, s2 ||= 0, o2 === 0 || s2 === 0 || Fd(o2) === Fd(s2) ? (e2[a3] = Math.max(Y(Pd(o2), Pd(s2), r2), 0), (G.test(s2) || G.test(o2)) && (e2[a3] += `%`)) : e2[a3] = s2);
  }
  (t2.rotate || n2.rotate) && (e2.rotate = Y(t2.rotate || 0, n2.rotate || 0, r2));
}
function pi(e2, t2) {
  return e2[t2] === void 0 ? e2.borderRadius : e2[t2];
}
function mi(e2, t2, n2) {
  return (r2) => r2 < e2 ? 0 : r2 > t2 ? 1 : n2(Rs(e2, t2, r2));
}
function hi(e2, t2, n2) {
  let r2 = Z(e2) ? e2 : O(e2);
  return r2.start(ru(``, r2, t2, n2)), r2.animation;
}
function gi(e2, t2, n2, r2 = { passive: true }) {
  return e2.addEventListener(t2, n2, r2), () => e2.removeEventListener(t2, n2);
}
function _i(e2, t2) {
  let n2 = W.now(), r2 = ({ timestamp: i2 }) => {
    let a2 = i2 - n2;
    a2 >= t2 && (H(r2), e2(a2 - t2));
  };
  return V.setup(r2, true), () => H(r2);
}
function vi(e2) {
  return Z(e2) ? e2.get() : e2;
}
function yi(e2, t2, n2, r2) {
  let { latestValues: i2 } = t2;
  i2[e2] && (n2[e2] = i2[e2], t2.setStaticValue(e2, 0), r2 && (r2[e2] = 0));
}
function bi(e2) {
  if (e2.hasCheckedOptimisedAppear = true, e2.root === e2) return;
  let { visualElement: t2 } = e2.options;
  if (!t2) return;
  let n2 = dn(t2);
  if (r.MotionHasOptimisedAnimation(n2, `transform`)) {
    let { layout: t3, layoutId: i3 } = e2.options;
    r.MotionCancelOptimisedAnimation(n2, `transform`, V, !(t3 || i3));
  }
  let { parent: i2 } = e2;
  i2 && !i2.hasCheckedOptimisedAppear && bi(i2);
}
function xi({ attachResizeListener: e2, defaultParent: t2, measureScroll: n2, checkIsScrollRoot: i2, resetTransform: a2 }) {
  return class {
    constructor(e3 = {}, n3 = t2?.()) {
      this.id = Gd++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, B.value && (Hd.nodes = Hd.calculatedTargetDeltas = Hd.calculatedProjections = 0), this.nodes.forEach(wi), this.nodes.forEach(Ni), this.nodes.forEach(Pi), this.nodes.forEach(Ti), B.addProjectionMetrics && B.addProjectionMetrics(Hd);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e3, this.root = n3 ? n3.root || n3 : this, this.path = n3 ? [...n3.path, n3] : [], this.parent = n3, this.depth = n3 ? n3.depth + 1 : 0;
      for (let e4 = 0; e4 < this.path.length; e4++) this.path[e4].shouldResetTransform = true;
      this.root === this && (this.nodes = new zd());
    }
    addEventListener(e3, t3) {
      return this.eventHandlers.has(e3) || this.eventHandlers.set(e3, new zs()), this.eventHandlers.get(e3).add(t3);
    }
    notifyListeners(e3, ...t3) {
      let n3 = this.eventHandlers.get(e3);
      n3 && n3.notify(...t3);
    }
    hasListeners(e3) {
      return this.eventHandlers.has(e3);
    }
    mount(t3) {
      if (this.instance) return;
      this.isSVG = Pn(t3) && !Un(t3), this.instance = t3;
      let { layoutId: n3, layout: i3, visualElement: a3 } = this.options;
      if (a3 && !a3.current && a3.mount(t3), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i3 || n3) && (this.isLayoutDirty = true), e2) {
        let n4, i4 = 0, a4 = () => this.root.updateBlockedByResize = false;
        V.read(() => {
          i4 = r.innerWidth;
        }), e2(t3, () => {
          let e3 = r.innerWidth;
          e3 !== i4 && (i4 = e3, this.root.updateBlockedByResize = true, n4 && n4(), n4 = _i(a4, 250), Vd.hasAnimatedSinceResize && (Vd.hasAnimatedSinceResize = false, this.nodes.forEach(Mi)));
        });
      }
      n3 && this.root.registerSharedNode(n3, this), this.options.animate !== false && a3 && (n3 || i3) && this.addEventListener(`didUpdate`, ({ delta: e3, hasLayoutChanged: t4, hasRelativeLayoutChanged: n4, layout: r2 }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        let i4 = this.options.transition || a3.getDefaultTransition() || Kd, { onLayoutAnimationStart: o2, onLayoutAnimationComplete: s2 } = a3.getProps(), c2 = !this.targetLayout || !ci(this.targetLayout, r2), l2 = !t4 && n4;
        if (this.options.layoutRoot || this.resumeFrom || l2 || t4 && (c2 || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          let t5 = { ...$t(i4, `layout`), onPlay: o2, onComplete: s2 };
          (a3.shouldReduceMotion || this.options.layoutRoot) && (t5.delay = 0, t5.type = false), this.startAnimation(t5), this.setAnimationOrigin(e3, l2);
        } else t4 || Mi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = r2;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let e3 = this.getStack();
      e3 && e3.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), H(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Fi), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e3 } = this.options;
      return e3 && e3.getProps().transformTemplate;
    }
    willUpdate(e3 = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (r.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && bi(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let e4 = 0; e4 < this.path.length; e4++) {
        let t4 = this.path[e4];
        t4.shouldResetTransform = true, (typeof t4.latestValues.x == `string` || typeof t4.latestValues.y == `string`) && (t4.isLayoutDirty = true), t4.updateScroll(`snapshot`), t4.options.layoutRoot && t4.willUpdate(false);
      }
      let { layoutId: t3, layout: n3 } = this.options;
      if (t3 === void 0 && !n3) return;
      let i3 = this.getTransformTemplate();
      this.prevTransformTemplateValue = i3 ? i3(this.latestValues, ``) : void 0, this.updateSnapshot(), e3 && this.notifyListeners(`willUpdate`);
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        let e4 = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), e4 && this.nodes.forEach(Oi), this.nodes.forEach(Di);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ki);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(Ai), this.nodes.forEach(ji), this.nodes.forEach(Si), this.nodes.forEach(Ci)) : this.nodes.forEach(ki), this.clearAllSnapshots();
      let e3 = W.now();
      U.delta = P(0, 1e3 / 60, e3 - U.timestamp), U.timestamp = e3, U.isProcessing = true, lc.update.process(U), lc.preRender.process(U), lc.render.process(U), U.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, Ou.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ei), this.sharedNodes.forEach(Ii);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, V.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !j(this.snapshot.measuredBox.x) && !j(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let e4 = 0; e4 < this.path.length; e4++) this.path[e4].updateScroll();
      let e3 = this.layout;
      this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected ||= $(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners(`measure`, this.layout.layoutBox);
      let { visualElement: t3 } = this.options;
      t3 && t3.notify(`LayoutMeasure`, this.layout.layoutBox, e3 ? e3.layoutBox : void 0);
    }
    updateScroll(e3 = `measure`) {
      let t3 = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e3 && (t3 = false), t3 && this.instance) {
        let t4 = i2(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: e3, isRoot: t4, offset: n2(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : t4 };
      }
    }
    resetTransform() {
      if (!a2) return;
      let e3 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t3 = this.projectionDelta && !ii(this.projectionDelta), n3 = this.getTransformTemplate(), r2 = n3 ? n3(this.latestValues, ``) : void 0, i3 = r2 !== this.prevTransformTemplateValue;
      e3 && this.instance && (t3 || dr(this.latestValues) || i3) && (a2(this.instance, r2), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(e3 = true) {
      let t3 = this.measurePageBox(), n3 = this.removeElementScroll(t3);
      return e3 && (n3 = this.removeTransform(n3)), Hi(n3), { animationId: this.root.animationId, measuredBox: t3, layoutBox: n3, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      let { visualElement: e3 } = this.options;
      if (!e3) return $();
      let t3 = e3.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Wi))) {
        let { scroll: e4 } = this.root;
        e4 && (k(t3.x, e4.offset.x), k(t3.y, e4.offset.y));
      }
      return t3;
    }
    removeElementScroll(e3) {
      let t3 = $();
      if (A(t3, e3), this.scroll?.wasRoot) return t3;
      for (let n3 = 0; n3 < this.path.length; n3++) {
        let r2 = this.path[n3], { scroll: i3, options: a3 } = r2;
        r2 !== this.root && i3 && a3.layoutScroll && (i3.wasRoot && A(t3, e3), k(t3.x, i3.offset.x), k(t3.y, i3.offset.y));
      }
      return t3;
    }
    applyTransform(e3, t3 = false, n3) {
      let r2 = n3 || $();
      A(r2, e3);
      for (let e4 = 0; e4 < this.path.length; e4++) {
        let n4 = this.path[e4];
        !t3 && n4.options.layoutScroll && n4.scroll && n4 !== n4.root && (k(r2.x, -n4.scroll.offset.x), k(r2.y, -n4.scroll.offset.y)), dr(n4.latestValues) && xr(r2, n4.latestValues, n4.layout?.layoutBox);
      }
      return dr(this.latestValues) && xr(r2, this.latestValues, this.layout?.layoutBox), r2;
    }
    removeTransform(e3) {
      let t3 = $();
      A(t3, e3);
      for (let e4 = 0; e4 < this.path.length; e4++) {
        let n3 = this.path[e4];
        if (!dr(n3.latestValues)) continue;
        let r2;
        n3.instance && (ur(n3.latestValues) && n3.updateSnapshot(), r2 = $(), A(r2, n3.measurePageBox())), ni(t3, n3.latestValues, n3.snapshot?.layoutBox, r2);
      }
      return dr(this.latestValues) && ni(t3, this.latestValues), t3;
    }
    setTargetDelta(e3) {
      this.targetDelta = e3, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(e3) {
      this.options = { ...this.options, ...e3, crossfade: e3.crossfade === void 0 ? true : e3.crossfade };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== U.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(e3 = false) {
      let t3 = this.getLead();
      this.isProjectionDirty ||= t3.isProjectionDirty, this.isTransformDirty ||= t3.isTransformDirty, this.isSharedProjectionDirty ||= t3.isSharedProjectionDirty;
      let n3 = !!this.resumingFrom || this !== t3;
      if (!(e3 || n3 && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      let { layout: r2, layoutId: i3 } = this.options;
      if (!this.layout || !(r2 || i3)) return;
      this.resolvedRelativeTargetAt = U.timestamp;
      let a3 = this.getClosestProjectingParent();
      a3 && this.linkedParentVersion !== a3.layoutVersion && !a3.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== false && a3 && a3.layout ? this.createRelativeTarget(a3, this.layout.layoutBox, a3.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $(), this.targetWithTransforms = $()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Xr(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : A(this.target, this.layout.layoutBox), _r(this.target, this.targetDelta)) : A(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, this.options.layoutAnchor !== false && a3 && !!a3.resumingFrom == !!this.resumingFrom && !a3.options.layoutScroll && a3.target && this.animationProgress !== 1 ? this.createRelativeTarget(a3, this.target, a3.target) : this.relativeParent = this.relativeTarget = void 0), B.value && Hd.calculatedTargetDeltas++);
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ur(this.parent.latestValues) || fr(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(e3, t3, n3) {
      this.relativeParent = e3, this.linkedParentVersion = e3.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $(), this.relativeTargetOrigin = $(), Qr(this.relativeTargetOrigin, t3, n3, this.options.layoutAnchor || void 0), A(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e3 = this.getLead(), t3 = !!this.resumingFrom || this !== e3, n3 = true;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n3 = false), t3 && (this.isSharedProjectionDirty || this.isTransformDirty) && (n3 = false), this.resolvedRelativeTargetAt === U.timestamp && (n3 = false), n3) return;
      let { layout: r2, layoutId: i3 } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r2 || i3)) return;
      A(this.layoutCorrected, this.layout.layoutBox);
      let a3 = this.treeScale.x, o2 = this.treeScale.y;
      vr(this.layoutCorrected, this.treeScale, this.path, t3), e3.layout && !e3.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e3.target = e3.layout.layoutBox, e3.targetWithTransforms = $());
      let { target: s2 } = e3;
      if (!s2) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Gr(this.prevProjectionDelta.x, this.projectionDelta.x), Gr(this.prevProjectionDelta.y, this.projectionDelta.y)), Jr(this.projectionDelta, this.layoutCorrected, s2, this.latestValues), (this.treeScale.x !== a3 || this.treeScale.y !== o2 || !ui(this.projectionDelta.x, this.prevProjectionDelta.x) || !ui(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, s2)), B.value && Hd.calculatedProjections++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(e3 = true) {
      if (this.options.visualElement?.scheduleRender(), e3) {
        let e4 = this.getStack();
        e4 && e4.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = qu(), this.projectionDelta = qu(), this.projectionDeltaWithTransform = qu();
    }
    setAnimationOrigin(e3, t3 = false) {
      let n3 = this.snapshot, r2 = n3 ? n3.latestValues : {}, i3 = { ...this.latestValues }, a3 = qu();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t3;
      let o2 = $(), s2 = (n3 ? n3.source : void 0) !== (this.layout ? this.layout.source : void 0), c2 = this.getStack(), l2 = !c2 || c2.members.length <= 1, u2 = !!(s2 && !l2 && this.options.crossfade === true && !this.path.some(Bi));
      this.animationProgress = 0;
      let d2;
      this.mixTargetDelta = (t4) => {
        let n4 = t4 / 1e3;
        Li(a3.x, e3.x, n4), Li(a3.y, e3.y, n4), this.setTargetDelta(a3), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Qr(o2, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), zi(this.relativeTarget, this.relativeTargetOrigin, o2, n4), d2 && oi(this.relativeTarget, d2) && (this.isProjectionDirty = false), d2 ||= $(), A(d2, this.relativeTarget)), s2 && (this.animationValues = i3, fi(i3, r2, this.latestValues, n4, u2, l2)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n4;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(e3) {
      this.notifyListeners(`animationStart`), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (H(this.pendingAnimation), void 0), this.pendingAnimation = V.update(() => {
        Vd.hasAnimatedSinceResize = true, dc.layout++, this.motionValue ||= O(0), this.motionValue.jump(0, false), this.currentAnimation = hi(this.motionValue, [0, 1e3], { ...e3, velocity: 0, isSync: true, onUpdate: (t3) => {
          this.mixTargetDelta(t3), e3.onUpdate && e3.onUpdate(t3);
        }, onStop: () => {
          dc.layout--;
        }, onComplete: () => {
          dc.layout--, e3.onComplete && e3.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      let e3 = this.getStack();
      e3 && e3.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners(`animationComplete`);
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Wd), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e3 = this.getLead(), { targetWithTransforms: t3, target: n3, layout: r2, latestValues: i3 } = e3;
      if (!(!t3 || !n3 || !r2)) {
        if (this !== e3 && this.layout && r2 && Ui(this.options.animationType, this.layout.layoutBox, r2.layoutBox)) {
          n3 = this.target || $();
          let t4 = j(this.layout.layoutBox.x);
          n3.x.min = e3.target.x.min, n3.x.max = n3.x.min + t4;
          let r3 = j(this.layout.layoutBox.y);
          n3.y.min = e3.target.y.min, n3.y.max = n3.y.min + r3;
        }
        A(t3, n3), xr(t3, i3), Jr(this.projectionDeltaWithTransform, this.layoutCorrected, t3, i3);
      }
    }
    registerSharedNode(e3, t3) {
      this.sharedNodes.has(e3) || this.sharedNodes.set(e3, new Bd()), this.sharedNodes.get(e3).add(t3);
      let n3 = t3.options.initialPromotionConfig;
      t3.promote({ transition: n3 ? n3.transition : void 0, preserveFollowOpacity: n3 && n3.shouldPreserveFollowOpacity ? n3.shouldPreserveFollowOpacity(t3) : void 0 });
    }
    isLead() {
      let e3 = this.getStack();
      return e3 ? e3.lead === this : true;
    }
    getLead() {
      let { layoutId: e3 } = this.options;
      return e3 && this.getStack()?.lead || this;
    }
    getPrevLead() {
      let { layoutId: e3 } = this.options;
      return e3 ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e3 } = this.options;
      if (e3) return this.root.sharedNodes.get(e3);
    }
    promote({ needsReset: e3, transition: t3, preserveFollowOpacity: n3 } = {}) {
      let r2 = this.getStack();
      r2 && r2.promote(this, n3), e3 && (this.projectionDelta = void 0, this.needsReset = true), t3 && this.setOptions({ transition: t3 });
    }
    relegate() {
      let e3 = this.getStack();
      return e3 ? e3.relegate(this) : false;
    }
    resetSkewAndRotation() {
      let { visualElement: e3 } = this.options;
      if (!e3) return;
      let t3 = false, { latestValues: n3 } = e3;
      if ((n3.z || n3.rotate || n3.rotateX || n3.rotateY || n3.rotateZ || n3.skewX || n3.skewY) && (t3 = true), !t3) return;
      let r2 = {};
      n3.z && yi(`z`, e3, r2, this.animationValues);
      for (let t4 = 0; t4 < Ud.length; t4++) yi(`rotate${Ud[t4]}`, e3, r2, this.animationValues), yi(`skew${Ud[t4]}`, e3, r2, this.animationValues);
      for (let t4 in e3.render(), r2) e3.setStaticValue(t4, r2[t4]), this.animationValues && (this.animationValues[t4] = r2[t4]);
      e3.scheduleRender();
    }
    applyProjectionStyles(e3, t3) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e3.visibility = `hidden`;
        return;
      }
      let n3 = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, e3.visibility = ``, e3.opacity = ``, e3.pointerEvents = vi(t3?.pointerEvents) || ``, e3.transform = n3 ? n3(this.latestValues, ``) : `none`;
        return;
      }
      let r2 = this.getLead();
      if (!this.projectionDelta || !this.layout || !r2.target) {
        this.options.layoutId && (e3.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e3.pointerEvents = vi(t3?.pointerEvents) || ``), this.hasProjected && !dr(this.latestValues) && (e3.transform = n3 ? n3({}, ``) : `none`, this.hasProjected = false);
        return;
      }
      e3.visibility = ``;
      let i3 = r2.animationValues || r2.latestValues;
      this.applyTransformsToTarget();
      let a3 = di(this.projectionDeltaWithTransform, this.treeScale, i3);
      n3 && (a3 = n3(i3, a3)), e3.transform = a3;
      let { x: o2, y: s2 } = this.projectionDelta;
      for (let t4 in e3.transformOrigin = `${o2.origin * 100}% ${s2.origin * 100}% 0`, r2.animationValues ? e3.opacity = r2 === this ? i3.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i3.opacityExit : e3.opacity = r2 === this ? i3.opacity === void 0 ? `` : i3.opacity : i3.opacityExit === void 0 ? 0 : i3.opacityExit, fd) {
        if (i3[t4] === void 0) continue;
        let { correct: n4, applyTo: o3, isCSSVariable: s3 } = fd[t4], c2 = a3 === `none` ? i3[t4] : n4(i3[t4], r2);
        if (o3) {
          let t5 = o3.length;
          for (let n5 = 0; n5 < t5; n5++) e3[o3[n5]] = c2;
        } else s3 ? this.options.visualElement.renderState.vars[t4] = c2 : e3[t4] = c2;
      }
      this.options.layoutId && (e3.pointerEvents = r2 === this ? vi(t3?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((e3) => e3.currentAnimation?.stop()), this.root.nodes.forEach(Di), this.root.sharedNodes.clear();
    }
  };
}
function Si(e2) {
  e2.updateLayout();
}
function Ci(e2) {
  let t2 = e2.resumeFrom?.snapshot || e2.snapshot;
  if (e2.isLead() && e2.layout && t2 && e2.hasListeners(`didUpdate`)) {
    let { layoutBox: n2, measuredBox: r2 } = e2.layout, { animationType: i2 } = e2.options, a2 = t2.source !== e2.layout.source;
    if (i2 === `size`) M((e3) => {
      let r3 = a2 ? t2.measuredBox[e3] : t2.layoutBox[e3], i3 = j(r3);
      r3.min = n2[e3].min, r3.max = r3.min + i3;
    });
    else if (i2 === `x` || i2 === `y`) {
      let e3 = i2 === `x` ? `y` : `x`;
      Wr(a2 ? t2.measuredBox[e3] : t2.layoutBox[e3], n2[e3]);
    } else Ui(i2, t2.layoutBox, n2) && M((r3) => {
      let i3 = a2 ? t2.measuredBox[r3] : t2.layoutBox[r3], o3 = j(n2[r3]);
      i3.max = i3.min + o3, e2.relativeTarget && !e2.currentAnimation && (e2.isProjectionDirty = true, e2.relativeTarget[r3].max = e2.relativeTarget[r3].min + o3);
    });
    let o2 = qu();
    Jr(o2, n2, t2.layoutBox);
    let s2 = qu();
    a2 ? Jr(s2, e2.applyTransform(r2, true), t2.measuredBox) : Jr(s2, n2, t2.layoutBox);
    let c2 = !ii(o2), l2 = false;
    if (!e2.resumeFrom) {
      let r3 = e2.getClosestProjectingParent();
      if (r3 && !r3.resumeFrom) {
        let { snapshot: i3, layout: a3 } = r3;
        if (i3 && a3) {
          let o3 = e2.options.layoutAnchor || void 0, s3 = $();
          Qr(s3, t2.layoutBox, i3.layoutBox, o3);
          let c3 = $();
          Qr(c3, n2, a3.layoutBox, o3), ci(s3, c3) || (l2 = true), r3.options.layoutRoot && (e2.relativeTarget = c3, e2.relativeTargetOrigin = s3, e2.relativeParent = r3);
        }
      }
    }
    e2.notifyListeners(`didUpdate`, { layout: n2, snapshot: t2, delta: s2, layoutDelta: o2, hasLayoutChanged: c2, hasRelativeLayoutChanged: l2 });
  } else if (e2.isLead()) {
    let { onExitComplete: t3 } = e2.options;
    t3 && t3();
  }
  e2.options.transition = void 0;
}
function wi(e2) {
  B.value && Hd.nodes++, e2.parent && (e2.isProjecting() || (e2.isProjectionDirty = e2.parent.isProjectionDirty), e2.isSharedProjectionDirty ||= !!(e2.isProjectionDirty || e2.parent.isProjectionDirty || e2.parent.isSharedProjectionDirty), e2.isTransformDirty ||= e2.parent.isTransformDirty);
}
function Ti(e2) {
  e2.isProjectionDirty = e2.isSharedProjectionDirty = e2.isTransformDirty = false;
}
function Ei(e2) {
  e2.clearSnapshot();
}
function Di(e2) {
  e2.clearMeasurements();
}
function Oi(e2) {
  e2.isLayoutDirty = true, e2.updateLayout();
}
function ki(e2) {
  e2.isLayoutDirty = false;
}
function Ai(e2) {
  e2.isAnimationBlocked && e2.layout && !e2.isLayoutDirty && (e2.snapshot = e2.layout, e2.isLayoutDirty = true);
}
function ji(e2) {
  let { visualElement: t2 } = e2.options;
  t2 && t2.getProps().onBeforeLayoutMeasure && t2.notify(`BeforeLayoutMeasure`), e2.resetTransform();
}
function Mi(e2) {
  e2.finishAnimation(), e2.targetDelta = e2.relativeTarget = e2.target = void 0, e2.isProjectionDirty = true;
}
function Ni(e2) {
  e2.resolveTargetDelta();
}
function Pi(e2) {
  e2.calcProjection();
}
function Fi(e2) {
  e2.resetSkewAndRotation();
}
function Ii(e2) {
  e2.removeLeadSnapshot();
}
function Li(e2, t2, n2) {
  e2.translate = Y(t2.translate, 0, n2), e2.scale = Y(t2.scale, 1, n2), e2.origin = t2.origin, e2.originPoint = t2.originPoint;
}
function Ri(e2, t2, n2, r2) {
  e2.min = Y(t2.min, n2.min, r2), e2.max = Y(t2.max, n2.max, r2);
}
function zi(e2, t2, n2, r2) {
  Ri(e2.x, t2.x, n2.x, r2), Ri(e2.y, t2.y, n2.y, r2);
}
function Bi(e2) {
  return e2.animationValues && e2.animationValues.opacityExit !== void 0;
}
function Vi(e2) {
  e2.min = Jd(e2.min), e2.max = Jd(e2.max);
}
function Hi(e2) {
  Vi(e2.x), Vi(e2.y);
}
function Ui(e2, t2, n2) {
  return e2 === `position` || e2 === `preserve-aspect` && !Kr(li(t2), li(n2), 0.2);
}
function Wi(e2) {
  return e2 !== e2.root && e2.scroll?.wasRoot;
}
function Gi() {
  let e2 = /* @__PURE__ */ new Set(), t2 = /* @__PURE__ */ new WeakMap(), n2 = () => e2.forEach(Xd);
  return { add: (r2) => {
    e2.add(r2), t2.set(r2, r2.addEventListener(`willUpdate`, n2));
  }, remove: (r2) => {
    e2.delete(r2);
    let i2 = t2.get(r2);
    i2 && (i2(), t2.delete(r2)), n2();
  }, dirty: n2 };
}
function Ki(e2, t2) {
  if (typeof e2 == `function`) return e2(t2);
  e2 != null && (e2.current = t2);
}
function qi(...e2) {
  return (t2) => {
    let n2 = false, r2 = e2.map((e3) => {
      let r3 = Ki(e3, t2);
      return !n2 && typeof r3 == `function` && (n2 = true), r3;
    });
    if (n2) return () => {
      for (let t3 = 0; t3 < r2.length; t3++) {
        let n3 = r2[t3];
        typeof n3 == `function` ? n3() : Ki(e2[t3], null);
      }
    };
  };
}
function Ji(...e2) {
  return u(qi(...e2), e2);
}
function Yi({ children: e2, isPresent: t2, anchorX: r2, anchorY: i2, root: a2, pop: o2 }) {
  let s2 = T(), c2 = y(null), l2 = y({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }), { nonce: u2 } = v($d), d2 = Ji(c2, e2.props?.ref ?? e2?.ref);
  return w(() => {
    let { width: e3, height: n2, top: d3, left: f2, right: p2, bottom: m2 } = l2.current;
    if (t2 || o2 === false || !c2.current || !e3 || !n2) return;
    let h2 = r2 === `left` ? `left: ${f2}` : `right: ${p2}`, g2 = i2 === `bottom` ? `bottom: ${m2}` : `top: ${d3}`;
    c2.current.dataset.motionPopId = s2;
    let _2 = document.createElement(`style`);
    u2 && (_2.nonce = u2);
    let v2 = a2 ?? document.head;
    return v2.appendChild(_2), _2.sheet && _2.sheet.insertRule(`
          [data-motion-pop-id="${s2}"] {
            position: absolute !important;
            width: ${e3}px !important;
            height: ${n2}px !important;
            ${h2}px !important;
            ${g2}px !important;
          }
        `), () => {
      c2.current?.removeAttribute(`data-motion-pop-id`), v2.contains(_2) && v2.removeChild(_2);
    };
  }, [t2]), m(ef, { isPresent: t2, childRef: c2, sizeRef: l2, pop: o2, children: o2 === false ? e2 : n(e2, { ref: d2 }) });
}
function N(e2) {
  let t2 = y(null);
  return t2.current === null && (t2.current = e2()), t2.current;
}
function Xi() {
  return /* @__PURE__ */ new Map();
}
function Zi(e2 = true) {
  let t2 = v(Ms);
  if (t2 === null) return [true, null];
  let { isPresent: n2, onExitComplete: r2, register: i2 } = t2, a2 = T();
  d(() => {
    if (e2) return i2(a2);
  }, [e2]);
  let o2 = u(() => e2 && r2 && r2(a2), [a2, r2, e2]);
  return !n2 && r2 ? [false, o2] : [true];
}
function Qi(e2) {
  let t2 = [];
  return a.forEach(e2, (e3) => {
    g(e3) && t2.push(e3);
  }), t2;
}
function $i() {
  let e2 = y(false);
  return js(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
function ea() {
  let e2 = $i(), [t2, n2] = s(0), r2 = u(() => {
    e2.current && n2(t2 + 1);
  }, [t2]);
  return [u(() => V.postRender(r2), [r2]), t2];
}
function ta() {
  if (df) return;
  let e2 = {};
  for (let t2 in uf) e2[t2] = { isEnabled: (e3) => uf[t2].some((t3) => !!e3[t3]) };
  ir(e2), df = true;
}
function na() {
  return ta(), ar();
}
function ra(e2) {
  let t2 = na();
  for (let n2 in e2) t2[n2] = { ...t2[n2], ...e2[n2] };
  ir(t2);
}
function ia(e2) {
  return e2.startsWith(`while`) || e2.startsWith(`drag`) && e2 !== `draggable` || e2.startsWith(`layout`) || e2.startsWith(`onTap`) || e2.startsWith(`onPan`) || e2.startsWith(`onLayout`) || ff.has(e2);
}
function aa(e2) {
  typeof e2 == `function` && (pf = (t2) => t2.startsWith(`on`) ? !ia(t2) : e2(t2));
}
function oa(e2, t2, n2) {
  let r2 = {};
  for (let i2 in e2) i2 === `values` && typeof e2.values == `object` || Z(e2[i2]) || (pf(i2) || n2 === true && ia(i2) || !t2 && !ia(i2) || e2.draggable && i2.startsWith(`onDrag`)) && (r2[i2] = e2[i2]);
  return r2;
}
function sa({ children: e2, isValidProp: t2, ...n2 }) {
  t2 && aa(t2);
  let r2 = v($d);
  n2 = { ...r2, ...n2 }, n2.transition = Qt(n2.transition, r2.transition), n2.isStatic = N(() => n2.isStatic);
  let i2 = l(() => n2, [JSON.stringify(n2.transition), n2.transformPagePoint, n2.reducedMotion, n2.skipAnimations]);
  return m($d.Provider, { value: i2, children: e2 });
}
function ca({ scrapeMotionValuesFromProps: e2, createRenderState: t2 }, n2, r2, i2) {
  return { latestValues: la(n2, r2, i2, e2), renderState: t2() };
}
function la(e2, t2, n2, r2) {
  let i2 = {}, a2 = r2(e2, {});
  for (let e3 in a2) i2[e3] = vi(a2[e3]);
  let { initial: o2, animate: s2 } = e2, c2 = er(e2), l2 = tr(e2);
  t2 && l2 && !c2 && e2.inherit !== false && (o2 === void 0 && (o2 = t2.initial), s2 === void 0 && (s2 = t2.animate));
  let u2 = n2 ? n2.initial === false : false;
  u2 ||= o2 === false;
  let d2 = u2 ? s2 : o2;
  if (d2 && typeof d2 != `boolean` && !Qn(d2)) {
    let t3 = Array.isArray(d2) ? d2 : [d2];
    for (let n3 = 0; n3 < t3.length; n3++) {
      let r3 = nn(e2, t3[n3]);
      if (r3) {
        let { transitionEnd: e3, transition: t4, ...n4 } = r3;
        for (let e4 in n4) {
          let t5 = n4[e4];
          if (Array.isArray(t5)) {
            let e5 = u2 ? t5.length - 1 : 0;
            t5 = t5[e5];
          }
          t5 !== null && (i2[e4] = t5);
        }
        for (let t5 in e3) i2[t5] = e3[t5];
      }
    }
  }
  return i2;
}
function ua(e2, t2) {
  if (er(e2)) {
    let { initial: t3, animate: n2 } = e2;
    return { initial: t3 === false || $n(t3) ? t3 : void 0, animate: $n(n2) ? n2 : void 0 };
  }
  return e2.inherit === false ? {} : t2;
}
function da(e2) {
  let { initial: t2, animate: n2 } = ua(e2, v(mf));
  return l(() => ({ initial: t2, animate: n2 }), [fa(t2), fa(n2)]);
}
function fa(e2) {
  return Array.isArray(e2) ? e2.join(` `) : e2;
}
function pa(e2, t2, n2) {
  for (let r2 in t2) !Z(t2[r2]) && !kr(r2, n2) && (e2[r2] = t2[r2]);
}
function ma({ transformTemplate: e2 }, t2) {
  return l(() => {
    let n2 = _f();
    return Tr(n2, t2, e2), Object.assign({}, n2.vars, n2.style);
  }, [t2]);
}
function ha(e2, t2) {
  let n2 = e2.style || {}, r2 = {};
  return pa(r2, n2, e2), Object.assign(r2, ma(e2, t2)), r2;
}
function ga(e2, t2) {
  let n2 = {}, r2 = ha(e2, t2);
  return e2.drag && e2.dragListener !== false && (n2.draggable = false, r2.userSelect = r2.WebkitUserSelect = r2.WebkitTouchCallout = `none`, r2.touchAction = e2.drag === true ? `none` : `pan-${e2.drag === `x` ? `y` : `x`}`), e2.tabIndex === void 0 && (e2.onTap || e2.onTapStart || e2.whileTap) && (n2.tabIndex = 0), n2.style = r2, n2;
}
function _a(e2, t2, n2, r2) {
  let i2 = l(() => {
    let n3 = vf();
    return Pr(n3, t2, yd(r2), e2.transformTemplate, e2.style), { ...n3.attrs, style: { ...n3.style } };
  }, [t2]);
  if (e2.style) {
    let t3 = {};
    pa(t3, e2.style, e2), i2.style = { ...t3, ...i2.style };
  }
  return i2;
}
function va(e2) {
  return typeof e2 != `string` || e2.includes(`-`) ? false : !!(yf.indexOf(e2) > -1 || /[A-Z]/u.test(e2));
}
function ya(e2, t2, n2, { latestValues: r2 }, i2, a2 = false, s2) {
  let c2 = (s2 ?? va(e2) ? _a : ga)(t2, r2, i2, e2), u2 = oa(t2, typeof e2 == `string`, a2), d2 = e2 === o ? {} : { ...u2, ...c2, ref: n2 }, { children: f2 } = t2, p2 = l(() => Z(f2) ? f2.get() : f2, [f2]);
  return C(e2, { ...d2, children: p2 });
}
function ba(e2, t2, n2) {
  let r2 = y(n2);
  w(() => {
    r2.current = n2;
  });
  let i2 = y(null);
  return u((n3) => {
    n3 && e2.onMount?.(n3);
    let a2 = r2.current;
    if (typeof a2 == `function`) if (n3) {
      let e3 = a2(n3);
      typeof e3 == `function` && (i2.current = e3);
    } else i2.current ? (i2.current(), i2.current = null) : a2(n3);
    else a2 && (a2.current = n3);
    t2 && (n3 ? t2.mount(n3) : t2.unmount());
  }, [t2]);
}
function xa(e2) {
  return e2 && typeof e2 == `object` && Object.prototype.hasOwnProperty.call(e2, `current`);
}
function Sa(e2, t2, n2, i2, a2, o2) {
  let { visualElement: s2 } = v(mf), c2 = v(lf), l2 = v(Ms), u2 = v($d), f2 = u2.reducedMotion, p2 = u2.skipAnimations, m2 = y(null), h2 = y(false);
  i2 ||= c2.renderer, !m2.current && i2 && (m2.current = i2(e2, { visualState: t2, parent: s2, props: n2, presenceContext: l2, blockInitialAnimation: l2 ? l2.initial === false : false, reducedMotionConfig: f2, skipAnimations: p2, isSVG: o2 }), h2.current && m2.current && (m2.current.manuallyAnimateOnMount = true));
  let g2 = m2.current, _2 = v(gf);
  g2 && !g2.projection && a2 && (g2.type === `html` || g2.type === `svg`) && Ca(m2.current, n2, a2, _2);
  let b2 = y(false);
  w(() => {
    g2 && b2.current && g2.update(n2, l2);
  });
  let x2 = n2[du], S2 = y(!!x2 && r !== void 0 && !r.MotionHandoffIsComplete?.(x2) && r.MotionHasOptimisedAnimation?.(x2));
  return js(() => {
    h2.current = true, g2 && (b2.current = true, r.MotionIsMounted = true, g2.updateFeatures(), g2.scheduleRenderMicrotask(), S2.current && g2.animationState && g2.animationState.animateChanges());
  }), d(() => {
    g2 && (!S2.current && g2.animationState && g2.animationState.animateChanges(), S2.current &&= (queueMicrotask(() => {
      r.MotionHandoffMarkAsComplete?.(x2);
    }), false), g2.enteringChildren = void 0);
  }), g2;
}
function Ca(e2, t2, n2, r2) {
  let { layoutId: i2, layout: a2, drag: o2, dragConstraints: s2, layoutScroll: c2, layoutRoot: l2, layoutAnchor: u2, layoutCrossfade: d2 } = t2;
  e2.projection = new n2(e2.latestValues, t2[`data-framer-portal-id`] ? void 0 : wa(e2.parent)), e2.projection.setOptions({ layoutId: i2, layout: a2, alwaysMeasureLayout: !!o2 || s2 && xa(s2), visualElement: e2, animationType: typeof a2 == `string` ? a2 : `both`, initialPromotionConfig: r2, crossfade: d2, layoutScroll: c2, layoutRoot: l2, layoutAnchor: u2 });
}
function wa(e2) {
  if (e2) return e2.options.allowProjection === false ? wa(e2.parent) : e2.projection;
}
function Ta(e2, { forwardMotionProps: t2 = false, type: n2 } = {}, i2, a2) {
  i2 && ra(i2);
  let o2 = n2 ? n2 === `svg` : va(e2), s2 = o2 ? xf : bf;
  function c2(n3, c3) {
    let l3, u2 = { ...v($d), ...n3, layoutId: Ea(n3) }, { isStatic: d2 } = u2, f2 = da(n3), p2 = s2(n3, d2);
    if (!d2 && r !== void 0) {
      Da(u2, i2);
      let t3 = Oa(u2);
      l3 = t3.MeasureLayout, f2.visualElement = Sa(e2, p2, u2, a2, t3.ProjectionNode, o2);
    }
    return b(mf.Provider, { value: f2, children: [l3 && f2.visualElement ? m(l3, { visualElement: f2.visualElement, ...u2 }) : null, ya(e2, n3, ba(p2, f2.visualElement, c3), p2, d2, t2, o2)] });
  }
  c2.displayName = `motion.${typeof e2 == `string` ? e2 : `create(${e2.displayName ?? e2.name ?? ``})`}`;
  let l2 = _(c2);
  return l2[Sf] = e2, l2;
}
function Ea({ layoutId: e2 }) {
  let t2 = v(ks).id;
  return t2 && e2 !== void 0 ? t2 + `-` + e2 : e2;
}
function Da(e2, t2) {
  v(lf).strict;
}
function Oa(e2) {
  let { drag: t2, layout: n2 } = na();
  if (!t2 && !n2) return {};
  let r2 = { ...t2, ...n2 };
  return { MeasureLayout: t2?.isEnabled(e2) || n2?.isEnabled(e2) ? r2.MeasureLayout : void 0, ProjectionNode: r2.ProjectionNode };
}
function ka(e2, t2) {
  if (typeof Proxy > `u`) return Ta;
  let n2 = /* @__PURE__ */ new Map(), r2 = (n3, r3) => Ta(n3, r3, e2, t2);
  return new Proxy((e3, t3) => r2(e3, t3), { get: (i2, a2) => a2 === `create` ? r2 : (n2.has(a2) || n2.set(a2, Ta(a2, void 0, e2, t2)), n2.get(a2)) });
}
function Aa(e2) {
  return { point: { x: e2.pageX, y: e2.pageY } };
}
function ja(e2, t2, n2, r2) {
  return gi(e2, t2, Df(n2), r2);
}
function Ma(e2, t2) {
  let n2 = Of(e2.x, t2.x), r2 = Of(e2.y, t2.y);
  return Math.sqrt(n2 ** 2 + r2 ** 2);
}
function Na(e2, t2) {
  return t2 ? { point: t2(e2.point) } : e2;
}
function Pa(e2, t2) {
  return { x: e2.x - t2.x, y: e2.y - t2.y };
}
function Fa({ point: e2 }, t2) {
  return { point: e2, delta: Pa(e2, La(t2)), offset: Pa(e2, Ia(t2)), velocity: Ra(t2, 0.1) };
}
function Ia(e2) {
  return e2[0];
}
function La(e2) {
  return e2[e2.length - 1];
}
function Ra(e2, t2) {
  if (e2.length < 2) return { x: 0, y: 0 };
  let n2 = e2.length - 1, r2 = null, i2 = La(e2);
  for (; n2 >= 0 && (r2 = e2[n2], !(i2.timestamp - r2.timestamp > R(t2))); ) n2--;
  if (!r2) return { x: 0, y: 0 };
  r2 === e2[0] && e2.length > 2 && i2.timestamp - r2.timestamp > R(t2) * 2 && (r2 = e2[1]);
  let a2 = z(i2.timestamp - r2.timestamp);
  if (a2 === 0) return { x: 0, y: 0 };
  let o2 = { x: (i2.x - r2.x) / a2, y: (i2.y - r2.y) / a2 };
  return o2.x === 1 / 0 && (o2.x = 0), o2.y === 1 / 0 && (o2.y = 0), o2;
}
function za(e2, { min: t2, max: n2 }, r2) {
  return t2 !== void 0 && e2 < t2 ? e2 = r2 ? Y(t2, e2, r2.min) : Math.max(e2, t2) : n2 !== void 0 && e2 > n2 && (e2 = r2 ? Y(n2, e2, r2.max) : Math.min(e2, n2)), e2;
}
function Ba(e2, t2, n2) {
  return { min: t2 === void 0 ? void 0 : e2.min + t2, max: n2 === void 0 ? void 0 : e2.max + n2 - (e2.max - e2.min) };
}
function Va(e2, { top: t2, left: n2, bottom: r2, right: i2 }) {
  return { x: Ba(e2.x, n2, i2), y: Ba(e2.y, t2, r2) };
}
function Ha(e2, t2) {
  let n2 = t2.min - e2.min, r2 = t2.max - e2.max;
  return t2.max - t2.min < e2.max - e2.min && ([n2, r2] = [r2, n2]), { min: n2, max: r2 };
}
function Ua(e2, t2) {
  return { x: Ha(e2.x, t2.x), y: Ha(e2.y, t2.y) };
}
function Wa(e2, t2) {
  let n2 = 0.5, r2 = j(e2), i2 = j(t2);
  return i2 > r2 ? n2 = Rs(t2.min, t2.max - r2, e2.min) : r2 > i2 && (n2 = Rs(e2.min, e2.max - i2, t2.min)), P(0, 1, n2);
}
function Ga(e2, t2) {
  let n2 = {};
  return t2.min !== void 0 && (n2.min = t2.min - e2.min), t2.max !== void 0 && (n2.max = t2.max - e2.min), n2;
}
function Ka(e2 = Nf) {
  return e2 === false ? e2 = 0 : e2 === true && (e2 = Nf), { x: qa(e2, `left`, `right`), y: qa(e2, `top`, `bottom`) };
}
function qa(e2, t2, n2) {
  return { min: Ja(e2, t2), max: Ja(e2, n2) };
}
function Ja(e2, t2) {
  return typeof e2 == `number` ? e2 : e2[t2] || 0;
}
function Ya(e2) {
  let t2 = true;
  return () => {
    if (t2) {
      t2 = false;
      return;
    }
    e2();
  };
}
function Xa(e2, t2, n2) {
  let r2 = Vn(e2, Ya(n2)), i2 = Vn(t2, Ya(n2));
  return () => {
    r2(), i2();
  };
}
function Za(e2, t2, n2) {
  return (t2 === true || t2 === e2) && (n2 === null || n2 === e2);
}
function Qa(e2, t2 = 10) {
  let n2 = null;
  return Math.abs(e2.y) > t2 ? n2 = `y` : Math.abs(e2.x) > t2 && (n2 = `x`), n2;
}
function $a(e2) {
  let [t2, n2] = Zi(), r2 = v(ks);
  return m(Bf, { ...e2, layoutGroup: r2, switchLayoutGroup: v(gf), isPresent: t2, safeToRemove: n2 });
}
function eo(e2, t2, n2) {
  let { props: r2 } = e2;
  e2.animationState && r2.whileHover && e2.animationState.setActive(`whileHover`, n2 === `Start`);
  let i2 = r2[`onHover` + n2];
  i2 && V.postRender(() => i2(t2, Aa(t2)));
}
function to(e2, t2, n2) {
  let { props: r2 } = e2;
  if (e2.current instanceof HTMLButtonElement && e2.current.disabled) return;
  e2.animationState && r2.whileTap && e2.animationState.setActive(`whileTap`, n2 === `Start`);
  let i2 = r2[`onTap` + (n2 === `End` ? `` : n2)];
  i2 && V.postRender(() => i2(t2, Aa(t2)));
}
function no({ root: e2, ...t2 }) {
  let n2 = e2 || document;
  Kf.has(n2) || Kf.set(n2, {});
  let r2 = Kf.get(n2), i2 = JSON.stringify(t2);
  return r2[i2] || (r2[i2] = new IntersectionObserver(Jf, { root: e2, ...t2 })), r2[i2];
}
function ro(e2, t2, n2) {
  let r2 = no(t2);
  return Gf.set(e2, n2), r2.observe(e2), () => {
    Gf.delete(e2), r2.unobserve(e2);
  };
}
function io({ viewport: e2 = {} }, { viewport: t2 = {} } = {}) {
  return (n2) => e2[n2] !== t2[n2];
}
function ao(e2, t2, n2, r2) {
  let i2 = n2[t2], { length: a2, position: o2 } = ip[t2], s2 = i2.current, c2 = n2.time;
  i2.current = Math.abs(e2[`scroll${o2}`]), i2.scrollLength = e2[`scroll${a2}`] - e2[`client${a2}`], i2.offset.length = 0, i2.offset[0] = 0, i2.offset[1] = i2.scrollLength, i2.progress = Rs(0, i2.scrollLength, i2.current);
  let l2 = r2 - c2;
  i2.velocity = l2 > tp ? 0 : Pe(i2.current - s2, l2);
}
function oo(e2, t2, n2) {
  ao(e2, `x`, t2, n2), ao(e2, `y`, t2, n2), t2.time = n2;
}
function so(e2, t2) {
  let n2 = { x: 0, y: 0 }, r2 = e2;
  for (; r2 && r2 !== t2; ) if (Sn(r2)) n2.x += r2.offsetLeft, n2.y += r2.offsetTop, r2 = r2.offsetParent;
  else if (r2.tagName === `svg`) {
    let e3 = r2.getBoundingClientRect();
    r2 = r2.parentElement;
    let t3 = r2.getBoundingClientRect();
    n2.x += e3.left - t3.left, n2.y += e3.top - t3.top;
  } else if (r2 instanceof SVGGraphicsElement) {
    let { x: e3, y: t3 } = r2.getBBox();
    n2.x += e3, n2.y += t3;
    let i2 = null, a2 = r2.parentNode;
    for (; !i2; ) a2.tagName === `svg` && (i2 = a2), a2 = r2.parentNode;
    r2 = i2;
  } else break;
  return n2;
}
function co(e2, t2, n2 = 0) {
  let r2 = 0;
  if (e2 in ap && (e2 = ap[e2]), typeof e2 == `string`) {
    let t3 = parseFloat(e2);
    e2.endsWith(`px`) ? r2 = t3 : e2.endsWith(`%`) ? e2 = t3 / 100 : e2.endsWith(`vw`) ? r2 = t3 / 100 * document.documentElement.clientWidth : e2.endsWith(`vh`) ? r2 = t3 / 100 * document.documentElement.clientHeight : e2 = t3;
  }
  return typeof e2 == `number` && (r2 = t2 * e2), n2 + r2;
}
function lo(e2, t2, n2, r2) {
  let i2 = Array.isArray(e2) ? e2 : op, a2 = 0, o2 = 0;
  return typeof e2 == `number` ? i2 = [e2, e2] : typeof e2 == `string` && (e2 = e2.trim(), i2 = e2.includes(` `) ? e2.split(` `) : [e2, ap[e2] ? e2 : `0`]), a2 = co(i2[0], n2, r2), o2 = co(i2[1], t2), a2 - o2;
}
function uo(e2) {
  return `getBBox` in e2 && e2.tagName !== `svg` ? e2.getBBox() : { width: e2.clientWidth, height: e2.clientHeight };
}
function fo(e2, t2, n2) {
  let { offset: r2 = sp.All } = n2, { target: i2 = e2, axis: a2 = `y` } = n2, o2 = a2 === `y` ? `height` : `width`, s2 = i2 === e2 ? cp : so(i2, e2), c2 = i2 === e2 ? { width: e2.scrollWidth, height: e2.scrollHeight } : uo(i2), l2 = { width: e2.clientWidth, height: e2.clientHeight };
  t2[a2].offset.length = 0;
  let u2 = !t2[a2].interpolate, d2 = r2.length;
  for (let e3 = 0; e3 < d2; e3++) {
    let n3 = lo(r2[e3], l2[o2], c2[o2], s2[a2]);
    !u2 && n3 !== t2[a2].interpolatorOffsets[e3] && (u2 = true), t2[a2].offset[e3] = n3;
  }
  u2 && (t2[a2].interpolate = vt(t2[a2].offset, bt(r2), { clamp: false }), t2[a2].interpolatorOffsets = [...t2[a2].offset]), t2[a2].progress = P(0, 1, t2[a2].interpolate(t2[a2].current));
}
function po(e2, t2 = e2, n2) {
  if (n2.x.targetOffset = 0, n2.y.targetOffset = 0, t2 !== e2) {
    let r2 = t2;
    for (; r2 && r2 !== e2; ) n2.x.targetOffset += r2.offsetLeft, n2.y.targetOffset += r2.offsetTop, r2 = r2.offsetParent;
  }
  n2.x.targetLength = t2 === e2 ? t2.scrollWidth : t2.clientWidth, n2.y.targetLength = t2 === e2 ? t2.scrollHeight : t2.clientHeight, n2.x.containerLength = e2.clientWidth, n2.y.containerLength = e2.clientHeight;
}
function mo(e2, t2, n2, r2 = {}) {
  return { measure: (t3) => {
    po(e2, r2.target, n2), oo(e2, n2, t3), (r2.offset || r2.target) && fo(e2, n2, r2);
  }, notify: () => t2(n2) };
}
function ho(e2, { container: t2 = document.scrollingElement, trackContentSize: n2 = false, ...i2 } = {}) {
  if (!t2) return L;
  let a2 = dp.get(t2);
  a2 || (a2 = /* @__PURE__ */ new Set(), dp.set(t2, a2));
  let o2 = mo(t2, e2, rp(), i2);
  if (a2.add(o2), !lp.has(t2)) {
    let e3 = () => {
      for (let e4 of a2) e4.measure(U.timestamp);
      V.preUpdate(n3);
    }, n3 = () => {
      for (let e4 of a2) e4.notify();
    }, i3 = () => V.read(e3);
    lp.set(t2, i3);
    let o3 = mp(t2);
    r.addEventListener(`resize`, i3), t2 !== document.documentElement && up.set(t2, Vn(t2, i3)), o3.addEventListener(`scroll`, i3), i3();
  }
  if (n2 && !pp.has(t2)) {
    let e3 = lp.get(t2), n3 = { width: t2.scrollWidth, height: t2.scrollHeight };
    fp.set(t2, n3);
    let r2 = V.read(() => {
      let r3 = t2.scrollWidth, i3 = t2.scrollHeight;
      (n3.width !== r3 || n3.height !== i3) && (e3(), n3.width = r3, n3.height = i3);
    }, true);
    pp.set(t2, r2);
  }
  let s2 = lp.get(t2);
  return V.read(s2, false, true), () => {
    H(s2);
    let e3 = dp.get(t2);
    if (!e3 || (e3.delete(o2), e3.size)) return;
    let n3 = lp.get(t2);
    lp.delete(t2), n3 && (mp(t2).removeEventListener(`scroll`, n3), up.get(t2)?.(), r.removeEventListener(`resize`, n3));
    let i3 = pp.get(t2);
    i3 && (H(i3), pp.delete(t2)), fp.delete(t2);
  };
}
function go(e2) {
  return r === void 0 ? false : e2 ? Ml() : jl();
}
function _o(e2) {
  let t2 = e2.trim().split(/\s+/);
  if (t2.length !== 2) return;
  let n2 = gp[t2[0]], r2 = gp[t2[1]];
  if (!(n2 === void 0 || r2 === void 0)) return [n2, r2];
}
function vo(e2) {
  if (e2.length !== 2) return;
  let t2 = [];
  for (let n2 of e2) if (Array.isArray(n2)) t2.push(n2);
  else if (typeof n2 == `string`) {
    let e3 = _o(n2);
    if (!e3) return;
    t2.push(e3);
  } else return;
  return t2;
}
function yo(e2, t2) {
  let n2 = vo(e2);
  if (!n2) return false;
  for (let e3 = 0; e3 < 2; e3++) {
    let r2 = n2[e3], i2 = t2[e3];
    if (r2[0] !== i2[0] || r2[1] !== i2[1]) return false;
  }
  return true;
}
function bo(e2) {
  if (!e2) return { rangeStart: `contain 0%`, rangeEnd: `contain 100%` };
  for (let [t2, n2] of hp) if (yo(e2, t2)) return { rangeStart: `${n2} 0%`, rangeEnd: `${n2} 100%` };
}
function xo(e2) {
  let t2 = { value: 0 };
  return { currentTime: t2, cancel: ho((n2) => {
    t2.value = n2[e2.axis].progress * 100;
  }, e2) };
}
function So({ source: e2, container: t2, ...n2 }) {
  let { axis: r2 } = n2;
  e2 && (t2 = e2);
  let i2 = _p.get(t2);
  i2 || (i2 = /* @__PURE__ */ new Map(), _p.set(t2, i2));
  let a2 = n2.target ?? `self`, o2 = i2.get(a2);
  o2 || (o2 = {}, i2.set(a2, o2));
  let s2 = r2 + (n2.offset ?? []).join(`,`);
  return o2[s2] || (n2.target && go(n2.target) ? bo(n2.offset) ? o2[s2] = new ViewTimeline({ subject: n2.target, axis: r2 }) : o2[s2] = xo({ container: t2, ...n2 }) : go() ? o2[s2] = new ScrollTimeline({ source: t2, axis: r2 }) : o2[s2] = xo({ container: t2, ...n2 })), o2[s2];
}
function Co(e2, t2) {
  let n2 = So(t2), r2 = t2.target ? bo(t2.offset) : void 0, i2 = t2.target ? go(t2.target) && !!r2 : go();
  return e2.attachTimeline({ timeline: i2 ? n2 : void 0, ...r2 && i2 && { rangeStart: r2.rangeStart, rangeEnd: r2.rangeEnd }, observe: (e3) => (e3.pause(), Hn((t3) => {
    e3.time = e3.iterationDuration * t3;
  }, n2)) });
}
function wo(e2) {
  return e2.length === 2;
}
function To(e2, t2) {
  return wo(e2) ? ho((n2) => {
    e2(n2[t2.axis].progress, n2);
  }, t2) : Hn(e2, So(t2));
}
function Eo(e2, { axis: t2 = `y`, container: n2 = document.scrollingElement, ...r2 } = {}) {
  if (!n2) return L;
  let i2 = { axis: t2, container: n2, ...r2 };
  return typeof e2 == `function` ? To(e2, i2) : Co(e2, i2);
}
function Do(e2, t2, n2, r2) {
  return { factory: (i2) => Eo(i2, { ...t2, axis: e2, container: n2?.current || void 0, target: r2?.current || void 0 }), times: [0, 1], keyframes: [0, 1], ease: (e3) => e3, duration: 1 };
}
function Oo(e2, t2) {
  return r === void 0 ? false : e2 ? Ml() && !!bo(t2) : jl();
}
function ko({ container: e2, target: t2, ...n2 } = {}) {
  let r2 = N(vp);
  Oo(t2, n2.offset) && (r2.scrollXProgress.accelerate = Do(`x`, n2, e2, t2), r2.scrollYProgress.accelerate = Do(`y`, n2, e2, t2));
  let i2 = y(null), a2 = y(false), o2 = u(() => (i2.current = Eo((e3, { x: t3, y: n3 }) => {
    r2.scrollX.set(t3.current), r2.scrollXProgress.set(t3.progress), r2.scrollY.set(n3.current), r2.scrollYProgress.set(n3.progress);
  }, { ...n2, container: e2?.current || void 0, target: t2?.current || void 0 }), () => {
    i2.current?.();
  }), [e2, t2, JSON.stringify(n2.offset)]);
  return js(() => {
    if (a2.current = false, yp(e2) || yp(t2)) {
      a2.current = true;
      return;
    } else return o2();
  }, [o2]), d(() => {
    if (a2.current) return F(!yp(e2), `Container ref is defined but not hydrated`, `use-scroll-ref`), F(!yp(t2), `Target ref is defined but not hydrated`, `use-scroll-ref`), o2();
  }, [o2]), r2;
}
function Ao(e2) {
  let t2 = N(() => O(e2)), { isStatic: n2 } = v($d);
  if (n2) {
    let [, n3] = s(e2);
    d(() => t2.on(`change`, n3), []);
  }
  return t2;
}
function jo(e2, t2) {
  let n2 = Ao(t2()), r2 = () => n2.set(t2());
  return r2(), js(() => {
    let t3 = () => V.preRender(r2, false, true), n3 = e2.map((e3) => e3.on(`change`, t3));
    return () => {
      n3.forEach((e3) => e3()), H(r2);
    };
  }), n2;
}
function Mo(e2) {
  su.current = [], e2();
  let t2 = jo(su.current, e2);
  return su.current = void 0, t2;
}
function No(e2, t2, n2, r2) {
  if (typeof e2 == `function`) return Mo(e2);
  if (n2 !== void 0 && !Array.isArray(n2) && typeof t2 != `function`) return Fo(e2, t2, n2, r2);
  let i2 = typeof t2 == `function` ? t2 : Kn(t2, n2, r2), a2 = Array.isArray(e2) ? Po(e2, i2) : Po([e2], ([e3]) => i2(e3)), o2 = Array.isArray(e2) ? void 0 : e2.accelerate;
  return o2 && !o2.isTransformed && typeof t2 != `function` && Array.isArray(n2) && r2?.clamp !== false && (a2.accelerate = { ...o2, times: t2, keyframes: n2, isTransformed: true, ...r2?.ease ? { ease: r2.ease } : {} }), a2;
}
function Po(e2, t2) {
  let n2 = N(() => []);
  return jo(e2, () => {
    n2.length = 0;
    let r2 = e2.length;
    for (let t3 = 0; t3 < r2; t3++) n2[t3] = e2[t3].get();
    return t2(n2);
  });
}
function Fo(e2, t2, n2, r2) {
  let i2 = N(() => Object.keys(n2)), a2 = N(() => ({}));
  for (let o2 of i2) a2[o2] = No(e2, t2, n2[o2], r2);
  return a2;
}
function Io(e2, t2 = {}) {
  let { isStatic: n2 } = v($d), r2 = () => Z(e2) ? e2.get() : e2;
  if (n2) return No(r2);
  let i2 = Ao(r2());
  return w(() => qn(i2, e2, t2), [i2, JSON.stringify(t2)]), i2;
}
function Lo(e2, t2 = {}) {
  return Io(e2, { type: `spring`, ...t2 });
}
function Ro() {
  !$u.current && rr();
  let [e2] = s(Qu.current);
  return e2;
}
function zo() {
  let e2 = Ro(), { reducedMotion: t2 } = v($d);
  return t2 === `never` ? false : t2 === `always` ? true : e2;
}
function Bo(e2) {
  e2.values.forEach((e3) => e3.stop());
}
function Vo(e2, t2) {
  [...t2].reverse().forEach((n2) => {
    let r2 = e2.getVariant(n2);
    r2 && sn(e2, r2), e2.variantChildren && e2.variantChildren.forEach((e3) => {
      Vo(e3, t2);
    });
  });
}
function Ho(e2, t2) {
  if (Array.isArray(t2)) return Vo(e2, t2);
  if (typeof t2 == `string`) return Vo(e2, [t2]);
  sn(e2, t2);
}
function Uo() {
  let e2 = false, t2 = /* @__PURE__ */ new Set(), n2 = { subscribe(e3) {
    return t2.add(e3), () => void t2.delete(e3);
  }, start(n3, r2) {
    F(e2, `controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.`);
    let i2 = [];
    return t2.forEach((e3) => {
      i2.push(gn(e3, n3, { transitionOverride: r2 }));
    }), Promise.all(i2);
  }, set(n3) {
    return F(e2, `controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.`), t2.forEach((e3) => {
      Ho(e3, n3);
    });
  }, stop() {
    t2.forEach((e3) => {
      Bo(e3);
    });
  }, mount() {
    return e2 = true, () => {
      e2 = false, n2.stop();
    };
  } };
  return n2;
}
function Wo(e2) {
  return typeof e2 == `object` && !Array.isArray(e2);
}
function Go(e2, t2, n2, r2) {
  return e2 == null ? [] : typeof e2 == `string` && Wo(t2) ? xn(e2, n2, r2) : e2 instanceof NodeList ? Array.from(e2) : Array.isArray(e2) ? e2.filter((e3) => e3 != null) : [e2];
}
function Ko(e2, t2, n2) {
  return e2 * (t2 + 1);
}
function qo(e2, t2, n2, r2) {
  return typeof t2 == `number` ? t2 : t2.startsWith(`-`) || t2.startsWith(`+`) ? Math.max(0, e2 + parseFloat(t2)) : t2 === `<` ? n2 : t2.startsWith(`<`) ? Math.max(0, n2 + parseFloat(t2.slice(1))) : r2.get(t2) ?? e2;
}
function Jo(e2, t2, n2) {
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2];
    i2.at > t2 && i2.at < n2 && (Ae(e2, i2), r2--);
  }
}
function Yo(e2, t2, n2, r2, i2, a2) {
  Jo(e2, i2, a2);
  for (let o2 = 0; o2 < t2.length; o2++) e2.push({ value: t2[o2], at: Y(i2, a2, r2[o2]), easing: Le(n2, o2) });
}
function Xo(e2, t2) {
  for (let n2 = 0; n2 < e2.length; n2++) e2[n2] = e2[n2] / (t2 + 1);
}
function Zo(e2, t2) {
  return e2.at === t2.at ? e2.value === null ? 1 : t2.value === null ? -1 : 0 : e2.at - t2.at;
}
function Qo(e2, { defaultTransition: t2 = {}, ...n2 } = {}, r2, i2) {
  let a2 = t2.duration || 0.3, o2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map(), c2 = {}, l2 = /* @__PURE__ */ new Map(), u2 = 0, d2 = 0, f2 = 0;
  for (let n3 = 0; n3 < e2.length; n3++) {
    let o3 = e2[n3];
    if (typeof o3 == `string`) {
      l2.set(o3, d2);
      continue;
    } else if (!Array.isArray(o3)) {
      l2.set(o3.name, qo(d2, o3.at, u2, l2));
      continue;
    }
    let [p2, m2, h2 = {}] = o3;
    h2.at !== void 0 && (d2 = qo(d2, h2.at, u2, l2));
    let g2 = 0, _2 = (e3, n4, r3, o4 = 0, s3 = 0) => {
      let c3 = ts(e3), { delay: l3 = 0, times: u3 = bt(c3), type: p3 = t2.type || `keyframes`, repeat: m3, repeatType: h3, repeatDelay: _3 = 0, ...v2 } = n4, { ease: y2 = t2.ease || `easeOut`, duration: b2 } = n4, x2 = typeof l3 == `function` ? l3(o4, s3) : l3, S2 = c3.length, C2 = zt(p3) ? p3 : i2?.[p3 || `keyframes`];
      if (S2 <= 2 && C2) {
        let e4 = 100;
        if (S2 === 2 && wp(c3)) {
          let t3 = c3[1] - c3[0];
          e4 = Math.abs(t3);
        }
        let n5 = { ...t2, ...v2 };
        b2 !== void 0 && (n5.duration = R(b2));
        let r4 = ct(n5, e4, C2);
        y2 = r4.ease, b2 = r4.duration;
      }
      b2 ??= a2;
      let w2 = d2 + x2;
      u3.length === 1 && u3[0] === 0 && (u3[1] = 1);
      let T2 = u3.length - c3.length;
      if (T2 > 0 && yt(u3, T2), c3.length === 1 && c3.unshift(null), m3) {
        F(m3 < Sp, `Repeat count too high, must be less than 20`, `repeat-count-high`), b2 = Ko(b2, m3);
        let e4 = [...c3], t3 = [...u3];
        y2 = Array.isArray(y2) ? [...y2] : [y2];
        let n5 = [...y2];
        for (let r4 = 0; r4 < m3; r4++) {
          c3.push(...e4);
          for (let i3 = 0; i3 < e4.length; i3++) u3.push(t3[i3] + (r4 + 1)), y2.push(i3 === 0 ? `linear` : Le(n5, i3 - 1));
        }
        Xo(u3, m3);
      }
      let E2 = w2 + b2;
      Yo(r3, c3, y2, u3, w2, E2), g2 = Math.max(x2 + b2, g2), f2 = Math.max(E2, f2);
    };
    if (Z(p2)) {
      let e3 = $o(p2, s2);
      _2(m2, h2, es(`default`, e3));
    } else {
      let e3 = Go(p2, m2, r2, c2), t3 = e3.length;
      for (let n4 = 0; n4 < t3; n4++) {
        m2 = m2, h2 = h2;
        let r3 = e3[n4], i3 = $o(r3, s2);
        for (let e4 in m2) _2(m2[e4], ns(h2, e4), es(e4, i3), n4, t3);
      }
    }
    u2 = d2, d2 += g2;
  }
  return s2.forEach((e3, r3) => {
    for (let i3 in e3) {
      let a3 = e3[i3];
      a3.sort(Zo);
      let s3 = [], c3 = [], l3 = [];
      for (let e4 = 0; e4 < a3.length; e4++) {
        let { at: t3, value: n3, easing: r4 } = a3[e4];
        s3.push(n3), c3.push(Rs(0, f2, t3)), l3.push(r4 || `easeOut`);
      }
      c3[0] !== 0 && (c3.unshift(0), s3.unshift(s3[0]), l3.unshift(xp)), c3[c3.length - 1] !== 1 && (c3.push(1), s3.push(null)), o2.has(r3) || o2.set(r3, { keyframes: {}, transition: {} });
      let u3 = o2.get(r3);
      u3.keyframes[i3] = s3;
      let { type: d3, ...p2 } = t2;
      u3.transition[i3] = { ...p2, duration: f2, ease: l3, times: c3, ...n2 };
    }
  }), o2;
}
function $o(e2, t2) {
  return !t2.has(e2) && t2.set(e2, {}), t2.get(e2);
}
function es(e2, t2) {
  return t2[e2] || (t2[e2] = []), t2[e2];
}
function ts(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function ns(e2, t2) {
  return e2 && e2[t2] ? { ...e2, ...e2[t2] } : { ...e2 };
}
function rs(e2) {
  let t2 = { presenceContext: null, props: {}, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: {} } }, n2 = Pn(e2) && !Un(e2) ? new bd(t2) : new pd(t2);
  n2.mount(e2), Yu.set(e2, n2);
}
function is(e2) {
  let t2 = new md({ presenceContext: null, props: {}, visualState: { renderState: { output: {} }, latestValues: {} } });
  t2.mount(e2), Yu.set(e2, t2);
}
function as(e2, t2) {
  return Z(e2) || typeof e2 == `number` || typeof e2 == `string` && !Wo(t2);
}
function os(e2, t2, n2, r2) {
  let i2 = [];
  if (as(e2, t2)) i2.push(hi(e2, Wo(t2) && t2.default || t2, n2 && (n2.default || n2)));
  else {
    if (e2 == null) return i2;
    let a2 = Go(e2, t2, r2), o2 = a2.length;
    F(!!o2, `No valid elements provided.`, `no-valid-elements`);
    for (let e3 = 0; e3 < o2; e3++) {
      let r3 = a2[e3], s2 = r3 instanceof Element ? rs : is;
      Yu.has(r3) || s2(r3);
      let c2 = Yu.get(r3), l2 = { ...n2 };
      `delay` in l2 && typeof l2.delay == `function` && (l2.delay = l2.delay(e3, o2)), i2.push(...pn(c2, { ...t2, transition: l2 }, {}));
    }
  }
  return i2;
}
function ss(e2, t2, n2) {
  let r2 = [];
  return Qo(e2.map((e3) => {
    if (Array.isArray(e3) && typeof e3[0] == `function`) {
      let t3 = e3[0], n3 = O(0);
      return n3.on(`change`, t3), e3.length === 1 ? [n3, [0, 1]] : e3.length === 2 ? [n3, [0, 1], e3[1]] : [n3, e3[1], e3[2]];
    }
    return e3;
  }), t2, n2, { spring: mt }).forEach(({ keyframes: e3, transition: t3 }, n3) => {
    r2.push(...os(n3, e3, t3));
  }), r2;
}
function cs(e2) {
  return Array.isArray(e2) && e2.some(Array.isArray);
}
function ls(e2 = {}) {
  let { scope: t2, reduceMotion: n2 } = e2;
  function r2(e3, r3, i2) {
    let a2 = [], o2;
    if (cs(e3)) {
      let { onComplete: i3, ...s3 } = r3 || {};
      typeof i3 == `function` && (o2 = i3), a2 = ss(e3, n2 === void 0 ? s3 : { reduceMotion: n2, ...s3 }, t2);
    } else {
      let { onComplete: s3, ...c2 } = i2 || {};
      typeof s3 == `function` && (o2 = s3), a2 = os(e3, r3, n2 === void 0 ? c2 : { reduceMotion: n2, ...c2 }, t2);
    }
    let s2 = new Jl(a2);
    return o2 && s2.finished.then(o2), t2 && (t2.animations.push(s2), s2.finished.then(() => {
      Ae(t2.animations, s2);
    })), s2;
  }
  return r2;
}
function us() {
  let e2 = N(Uo);
  return js(e2.mount, []), e2;
}
function ds(e2) {
  return typeof e2 == `object` && !!e2 && Sf in e2;
}
function fs(e2) {
  if (ds(e2)) return e2[Sf];
}
function ps() {
  return ms;
}
function ms(e2) {
  Zd.current && (Zd.current.isUpdating = false, Zd.current.blockUpdate(), e2 && e2());
}
function hs() {
  return u(() => {
    let e2 = Zd.current;
    e2 && e2.resetTree();
  }, []);
}
function gs(e2, t2, { root: n2, margin: r2, amount: i2 = `some` } = {}) {
  let a2 = xn(e2), o2 = /* @__PURE__ */ new WeakMap(), s2 = new IntersectionObserver((e3) => {
    e3.forEach((e4) => {
      let n3 = o2.get(e4.target);
      if (e4.isIntersecting !== !!n3) if (e4.isIntersecting) {
        let n4 = t2(e4.target, e4);
        typeof n4 == `function` ? o2.set(e4.target, n4) : s2.unobserve(e4.target);
      } else typeof n3 == `function` && (n3(e4), o2.delete(e4.target));
    });
  }, { root: n2, rootMargin: r2, threshold: typeof i2 == `number` ? i2 : Dp[i2] });
  return a2.forEach((e3) => s2.observe(e3)), () => s2.disconnect();
}
function _s(e2, { root: t2, margin: n2, amount: r2, once: i2 = false, initial: a2 = false } = {}) {
  let [o2, c2] = s(a2);
  return d(() => {
    if (!e2.current || i2 && o2) return;
    let a3 = () => (c2(true), i2 ? void 0 : () => c2(false)), s2 = { root: t2 && t2.current || void 0, margin: n2, amount: r2 };
    return gs(e2.current, a3, s2);
  }, [t2, e2, n2, i2, r2]), o2;
}
function vs() {
  let [e2, t2] = ea(), n2 = ps(), r2 = y(-1);
  return d(() => {
    V.postRender(() => V.postRender(() => {
      t2 === r2.current && (I.instantAnimations = false);
    }));
  }, [t2]), (i2) => {
    n2(() => {
      I.instantAnimations = true, e2(), i2(), r2.current = t2 + 1;
    });
  };
}
function ys(e2, t2, n2, r2) {
  if (!r2) return e2;
  let i2 = e2.findIndex((e3) => e3.value === t2);
  if (i2 === -1) return e2;
  let a2 = r2 > 0 ? 1 : -1, o2 = e2[i2 + a2];
  if (!o2) return e2;
  let s2 = e2[i2], c2 = o2.layout, l2 = Y(c2.min, c2.max, 0.5);
  return a2 === 1 && s2.layout.max + n2 > l2 || a2 === -1 && s2.layout.min + n2 < l2 ? je(e2, i2, i2 + a2) : e2;
}
function bs({ children: e2, as: t2 = `ul`, axis: n2 = `y`, onReorder: r2, values: i2, ...a2 }, o2) {
  let s2 = N(() => $f[t2]), c2 = [], l2 = y(false), u2 = y(null);
  F(!!i2, `Reorder.Group must be provided a values prop`, `reorder-values`);
  let f2 = { axis: n2, groupRef: u2, registerItem: (e3, t3) => {
    let r3 = c2.findIndex((t4) => e3 === t4.value);
    r3 === -1 ? c2.push({ value: e3, layout: t3[n2] }) : c2[r3].layout = t3[n2], c2.sort(xs);
  }, updateOrder: (e3, t3, n3) => {
    if (l2.current) return;
    let a3 = ys(c2, e3, t3, n3);
    if (c2 !== a3) {
      l2.current = true;
      let e4 = [...i2];
      for (let t4 = 0; t4 < a3.length; t4++) if (c2[t4].value !== a3[t4].value) {
        let n4 = i2.indexOf(c2[t4].value), r3 = i2.indexOf(a3[t4].value);
        n4 !== -1 && r3 !== -1 && ([e4[n4], e4[r3]] = [e4[r3], e4[n4]]);
        break;
      }
      r2(e4);
    }
  } };
  d(() => {
    l2.current = false;
  });
  let p2 = (e3) => {
    u2.current = e3, typeof o2 == `function` ? o2(e3) : o2 && (o2.current = e3);
  }, h2 = { overflowAnchor: `none`, ...a2.style };
  return m(s2, { ...a2, style: h2, ref: p2, ignoreStrict: true, children: m(Ap.Provider, { value: f2, children: e2 }) });
}
function xs(e2, t2) {
  return e2.layout.min - t2.layout.min;
}
function Ss() {
  if (Lp) {
    let e2 = ws(Lp, `y`);
    e2 && (Ip.delete(e2), Fp.delete(e2));
    let t2 = ws(Lp, `x`);
    t2 && t2 !== e2 && (Ip.delete(t2), Fp.delete(t2)), Lp = null;
  }
}
function Cs(e2, t2) {
  let n2 = getComputedStyle(e2), r2 = t2 === `x` ? n2.overflowX : n2.overflowY, i2 = e2 === document.body || e2 === document.documentElement;
  return Pp.has(r2) || i2;
}
function ws(e2, t2) {
  let n2 = e2?.parentElement;
  for (; n2; ) {
    if (Cs(n2, t2)) return n2;
    n2 = n2.parentElement;
  }
  return null;
}
function Ts(e2, t2, n2) {
  let i2 = t2.getBoundingClientRect(), a2 = n2 === `x` ? Math.max(0, i2.left) : Math.max(0, i2.top), o2 = n2 === `x` ? Math.min(r.innerWidth, i2.right) : Math.min(r.innerHeight, i2.bottom), s2 = e2 - a2, c2 = o2 - e2;
  if (s2 < Mp) {
    let e3 = 1 - s2 / Mp;
    return { amount: -Np * e3 * e3, edge: `start` };
  } else if (c2 < Mp) {
    let e3 = 1 - c2 / Mp;
    return { amount: Np * e3 * e3, edge: `end` };
  }
  return { amount: 0, edge: null };
}
function Es(e2, t2, n2, i2) {
  if (!e2) return;
  Lp = e2;
  let a2 = ws(e2, n2);
  if (!a2) return;
  let { amount: o2, edge: s2 } = Ts(t2 - (n2 === `x` ? r.scrollX : r.scrollY), a2, n2);
  if (s2 === null) {
    Ip.delete(a2), Fp.delete(a2);
    return;
  }
  let c2 = Ip.get(a2), l2 = a2 === document.body || a2 === document.documentElement;
  if (c2 !== s2) {
    if (!(s2 === `start` && i2 < 0 || s2 === `end` && i2 > 0)) return;
    Ip.set(a2, s2);
    let e3 = n2 === `x` ? a2.scrollWidth - (l2 ? r.innerWidth : a2.clientWidth) : a2.scrollHeight - (l2 ? r.innerHeight : a2.clientHeight);
    Fp.set(a2, e3);
  }
  if (o2 > 0) {
    let e3 = Fp.get(a2);
    if ((n2 === `x` ? l2 ? r.scrollX : a2.scrollLeft : l2 ? r.scrollY : a2.scrollTop) >= e3) return;
  }
  n2 === `x` ? l2 ? r.scrollBy({ left: o2 }) : a2.scrollLeft += o2 : l2 ? r.scrollBy({ top: o2 }) : a2.scrollTop += o2;
}
function Ds(e2, t2 = 0) {
  return Z(e2) ? e2 : Ao(t2);
}
function Os({ children: e2, style: t2 = {}, value: n2, as: r2 = `li`, onDrag: i2, onDragEnd: a2, layout: o2 = true, ...s2 }, c2) {
  let l2 = N(() => $f[r2]), u2 = v(Ap), d2 = { x: Ds(t2.x), y: Ds(t2.y) }, f2 = No([d2.x, d2.y], ([e3, t3]) => e3 || t3 ? 1 : `unset`);
  F(!!u2, `Reorder.Item must be a child of Reorder.Group`, `reorder-item-child`);
  let { axis: p2, registerItem: h2, updateOrder: g2, groupRef: _2 } = u2;
  return m(l2, { drag: p2, ...s2, dragSnapToOrigin: true, style: { ...t2, x: d2.x, y: d2.y, zIndex: f2 }, layout: o2, onDrag: (e3, t3) => {
    let { velocity: r3, point: a3 } = t3;
    g2(n2, d2[p2].get(), r3[p2]), Es(_2.current, a3[p2], p2, r3[p2]), i2 && i2(e3, t3);
  }, onDragEnd: (e3, t3) => {
    Ss(), a2 && a2(e3, t3);
  }, onLayoutMeasure: (e3) => {
    h2(n2, e3);
  }, ref: c2, ignoreStrict: true, children: e2 });
}
var ks, As, js, Ms, P, Ns, F, I, Ps, Fs, L, Is, Ls, Rs, zs, R, z, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic, ac, oc, B, sc, cc, V, H, U, lc, uc, W, dc, fc, pc, mc, hc, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, G, K, jc, Mc, Nc, Pc, q, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, J, Y, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, X, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru, iu, au, ou, su, cu, lu, Z, uu, du, fu, pu, mu, hu, gu, _u, vu, yu, bu, xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Q, Au, ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru, zu, Bu, Vu, Hu, Uu, Wu, Gu, Ku, qu, Ju, $, Yu, Xu, Zu, Qu, $u, ed, td, nd, rd, id, ad, od, sd, cd, ld, ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Dd, Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd, Hd, Ud, Wd, Gd, Kd, qd, Jd, Yd, Xd, Zd, Qd, $d, ef, tf, nf, rf, af, of, sf, cf, lf, uf, df, ff, pf, mf, hf, gf, _f, vf, yf, bf, xf, Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf, zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, xp, Sp, Cp, wp, Tp, Ep, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp = t((() => {
  f(), Oe(), p(), x(), ks = c({}), As = r !== void 0, js = As ? i : d, Ms = c(null), P = (e2, t2, n2) => n2 > t2 ? t2 : n2 < e2 ? e2 : n2, Ns = () => {
  }, F = () => {
  }, I = {}, Ps = (e2) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e2), Fs = (e2) => /^0[^.\s]+$/u.test(e2), L = (e2) => e2, Is = (e2, t2) => (n2) => t2(e2(n2)), Ls = (...e2) => e2.reduce(Is), Rs = (e2, t2, n2) => {
    let r2 = t2 - e2;
    return r2 === 0 ? 1 : (n2 - e2) / r2;
  }, zs = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e2) {
      return ke(this.subscriptions, e2), () => Ae(this.subscriptions, e2);
    }
    notify(e2, t2, n2) {
      let r2 = this.subscriptions.length;
      if (r2) if (r2 === 1) this.subscriptions[0](e2, t2, n2);
      else for (let i2 = 0; i2 < r2; i2++) {
        let r3 = this.subscriptions[i2];
        r3 && r3(e2, t2, n2);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }, R = (e2) => e2 * 1e3, z = (e2) => e2 / 1e3, Bs = (e2, t2, n2) => {
    let r2 = t2 - e2;
    return ((n2 - e2) % r2 + r2) % r2 + e2;
  }, Vs = (e2, t2, n2) => (((1 - 3 * n2 + 3 * t2) * e2 + (3 * n2 - 6 * t2)) * e2 + 3 * t2) * e2, Hs = 1e-7, Us = 12, Ws = (e2) => (t2) => t2 <= 0.5 ? e2(2 * t2) / 2 : (2 - e2(2 * (1 - t2))) / 2, Gs = (e2) => (t2) => 1 - e2(1 - t2), Ks = Ie(0.33, 1.53, 0.69, 0.99), qs = Gs(Ks), Js = Ws(qs), Ys = (e2) => e2 >= 1 ? 1 : (e2 *= 2) < 1 ? 0.5 * qs(e2) : 0.5 * (2 - 2 ** (-10 * (e2 - 1))), Xs = (e2) => 1 - Math.sin(Math.acos(e2)), Zs = Gs(Xs), Qs = Ws(Xs), $s = Ie(0.42, 0, 1, 1), ec = Ie(0, 0, 0.58, 1), tc = Ie(0.42, 0, 0.58, 1), nc = (e2) => Array.isArray(e2) && typeof e2[0] != `number`, rc = (e2) => Array.isArray(e2) && typeof e2[0] == `number`, ic = { linear: L, easeIn: $s, easeInOut: tc, easeOut: ec, circIn: Xs, circInOut: Qs, circOut: Zs, backIn: qs, backInOut: Js, backOut: Ks, anticipate: Ys }, ac = (e2) => typeof e2 == `string`, oc = (e2) => {
    if (rc(e2)) {
      F(e2.length === 4, `Cubic bezier arrays must contain four numerical values.`, `cubic-bezier-length`);
      let [t2, n2, r2, i2] = e2;
      return Ie(t2, n2, r2, i2);
    } else if (ac(e2)) return F(ic[e2] !== void 0, `Invalid easing type '${e2}'`, `invalid-easing-type`), ic[e2];
    return e2;
  }, B = { value: null, addProjectionMetrics: null }, sc = [`setup`, `read`, `resolveKeyframes`, `preUpdate`, `update`, `preRender`, `render`, `postRender`], cc = 40, { schedule: V, cancel: H, state: U, steps: lc } = ze(typeof requestAnimationFrame < `u` ? requestAnimationFrame : L, true), W = { now: () => (uc === void 0 && W.set(U.isProcessing || I.useManualTiming ? U.timestamp : performance.now()), uc), set: (e2) => {
    uc = e2, queueMicrotask(Be);
  } }, dc = { layout: 0, mainThread: 0, waapi: 0 }, fc = (e2) => (t2) => typeof t2 == `string` && t2.startsWith(e2), pc = fc(`--`), mc = fc(`var(--`), hc = (e2) => mc(e2) ? gc.test(e2.split(`/*`)[0].trim()) : false, gc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, _c = { test: (e2) => typeof e2 == `number`, parse: parseFloat, transform: (e2) => e2 }, vc = { ..._c, transform: (e2) => P(0, 1, e2) }, yc = { ..._c, default: 1 }, bc = (e2) => Math.round(e2 * 1e5) / 1e5, xc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, Sc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Cc = (e2, t2) => (n2) => !!(typeof n2 == `string` && Sc.test(n2) && n2.startsWith(e2) || t2 && !He(n2) && Object.prototype.hasOwnProperty.call(n2, t2)), wc = (e2, t2, n2) => (r2) => {
    if (typeof r2 != `string`) return r2;
    let [i2, a2, o2, s2] = r2.match(xc);
    return { [e2]: parseFloat(i2), [t2]: parseFloat(a2), [n2]: parseFloat(o2), alpha: s2 === void 0 ? 1 : parseFloat(s2) };
  }, Tc = (e2) => P(0, 255, e2), Ec = { ..._c, transform: (e2) => Math.round(Tc(e2)) }, Dc = { test: Cc(`rgb`, `red`), parse: wc(`red`, `green`, `blue`), transform: ({ red: e2, green: t2, blue: n2, alpha: r2 = 1 }) => `rgba(` + Ec.transform(e2) + `, ` + Ec.transform(t2) + `, ` + Ec.transform(n2) + `, ` + bc(vc.transform(r2)) + `)` }, Oc = { test: Cc(`#`), parse: Ue, transform: Dc.transform }, kc = (e2) => ({ test: (t2) => typeof t2 == `string` && t2.endsWith(e2) && t2.split(` `).length === 1, parse: parseFloat, transform: (t2) => `${t2}${e2}` }), Ac = kc(`deg`), G = kc(`%`), K = kc(`px`), jc = kc(`vh`), Mc = kc(`vw`), Nc = (() => ({ ...G, parse: (e2) => G.parse(e2) / 100, transform: (e2) => G.transform(e2 * 100) }))(), Pc = { test: Cc(`hsl`, `hue`), parse: wc(`hue`, `saturation`, `lightness`), transform: ({ hue: e2, saturation: t2, lightness: n2, alpha: r2 = 1 }) => `hsla(` + Math.round(e2) + `, ` + G.transform(bc(t2)) + `, ` + G.transform(bc(n2)) + `, ` + bc(vc.transform(r2)) + `)` }, q = { test: (e2) => Dc.test(e2) || Oc.test(e2) || Pc.test(e2), parse: (e2) => Dc.test(e2) ? Dc.parse(e2) : Pc.test(e2) ? Pc.parse(e2) : Oc.parse(e2), transform: (e2) => typeof e2 == `string` ? e2 : e2.hasOwnProperty(`red`) ? Dc.transform(e2) : Pc.transform(e2), getAnimatableNone: (e2) => {
    let t2 = q.parse(e2);
    return t2.alpha = 0, q.transform(t2);
  } }, Fc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Ic = `number`, Lc = `color`, Rc = `var`, zc = `var(`, Bc = "${}", Vc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu, Hc = (e2) => typeof e2 == `number` ? 0 : q.test(e2) ? q.getAnimatableNone(e2) : e2, Uc = (e2, t2) => typeof e2 == `number` ? t2?.trim().endsWith(`/`) ? e2 : 0 : Hc(e2), J = { test: We, parse: Ke, createTransformer: Je, getAnimatableNone: Ye }, Y = (e2, t2, n2) => e2 + (t2 - e2) * n2, Wc = (e2, t2, n2) => {
    let r2 = e2 * e2, i2 = n2 * (t2 * t2 - r2) + r2;
    return i2 < 0 ? 0 : Math.sqrt(i2);
  }, Gc = [Oc, Dc, Pc], Kc = (e2) => Gc.find((t2) => t2.test(e2)), qc = (e2, t2) => {
    let n2 = $e(e2), r2 = $e(t2);
    if (!n2 || !r2) return Qe(e2, t2);
    let i2 = { ...n2 };
    return (e3) => (i2.red = Wc(n2.red, r2.red, e3), i2.green = Wc(n2.green, r2.green, e3), i2.blue = Wc(n2.blue, r2.blue, e3), i2.alpha = Y(n2.alpha, r2.alpha, e3), Dc.transform(i2));
  }, Jc = /* @__PURE__ */ new Set([`none`, `hidden`]), Yc = (e2, t2) => {
    let n2 = J.createTransformer(t2), r2 = Ge(e2), i2 = Ge(t2);
    return r2.indexes.var.length === i2.indexes.var.length && r2.indexes.color.length === i2.indexes.color.length && r2.indexes.number.length >= i2.indexes.number.length ? Jc.has(e2) && !i2.values.length || Jc.has(t2) && !r2.values.length ? et(e2, t2) : Ls(rt(at(r2, i2), i2.values), n2) : (Ns(true, `Complex values '${e2}' and '${t2}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, `complex-values-different`), Qe(e2, t2));
  }, Xc = (e2, t2, n2 = 10) => {
    let r2 = ``, i2 = Math.max(Math.round(t2 / n2), 2);
    for (let t3 = 0; t3 < i2; t3++) r2 += Math.round(e2(t3 / (i2 - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r2.substring(0, r2.length - 2)})`;
  }, Zc = 2e4, X = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, Qc = 12, $c = 1e-3, el = [`duration`, `bounce`], tl = [`stiffness`, `damping`, `mass`], mt.applyToOptions = (e2) => {
    let t2 = ct(e2, 100, mt);
    return e2.ease = t2.ease, e2.duration = R(t2.duration), e2.type = `keyframes`, e2;
  }, nl = 5, rl = (e2) => e2 !== null, il = (e2) => {
    let t2 = ({ timestamp: t3 }) => e2(t3);
    return { start: (e3 = true) => V.update(t2, e3), stop: () => H(t2), now: () => U.isProcessing ? U.timestamp : W.now() };
  }, al = { decay: gt, inertia: gt, tween: Ct, keyframes: Ct, spring: mt }, ol = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e2) => {
        this.resolve = e2;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e2, t2) {
      return this.finished.then(e2, t2);
    }
  }, sl = (e2) => e2 / 100, cl = class extends ol {
    constructor(e2) {
      super(), this.state = `idle`, this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: false, value: void 0 }, this.stop = () => {
        let { motionValue: e3 } = this.options;
        e3 && e3.updatedAt !== W.now() && this.tick(W.now()), this.isStopped = true, this.state !== `idle` && (this.teardown(), this.options.onStop?.());
      }, dc.mainThread++, this.options = e2, this.initAnimation(), this.play(), e2.autoplay === false && this.pause();
    }
    initAnimation() {
      let { options: e2 } = this;
      Tt(e2);
      let { type: t2 = Ct, repeat: n2 = 0, repeatDelay: r2 = 0, repeatType: i2, velocity: a2 = 0 } = e2, { keyframes: o2 } = e2, s2 = t2 || Ct;
      s2 !== Ct && typeof o2[0] != `number` && (this.mixKeyframes = Ls(sl, ot(o2[0], o2[1])), o2 = [0, 100]);
      let c2 = s2({ ...e2, keyframes: o2 });
      i2 === `mirror` && (this.mirroredGenerator = s2({ ...e2, keyframes: [...o2].reverse(), velocity: -a2 })), c2.calculatedDuration === null && (c2.calculatedDuration = st(c2));
      let { calculatedDuration: l2 } = c2;
      this.calculatedDuration = l2, this.resolvedDuration = l2 + r2, this.totalDuration = this.resolvedDuration * (n2 + 1) - r2, this.generator = c2;
    }
    updateTime(e2) {
      let t2 = Math.round(e2 - this.startTime) * this.playbackSpeed;
      this.holdTime === null ? this.currentTime = t2 : this.currentTime = this.holdTime;
    }
    tick(e2, t2 = false) {
      let { generator: n2, totalDuration: r2, mixKeyframes: i2, mirroredGenerator: a2, resolvedDuration: o2, calculatedDuration: s2 } = this;
      if (this.startTime === null) return n2.next(0);
      let { delay: c2 = 0, keyframes: l2, repeat: u2, repeatType: d2, repeatDelay: f2, type: p2, onUpdate: m2, finalKeyframe: h2 } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e2) : this.speed < 0 && (this.startTime = Math.min(e2 - r2 / this.speed, this.startTime)), t2 ? this.currentTime = e2 : this.updateTime(e2);
      let g2 = this.currentTime - c2 * (this.playbackSpeed >= 0 ? 1 : -1), _2 = this.playbackSpeed >= 0 ? g2 < 0 : g2 > r2;
      this.currentTime = Math.max(g2, 0), this.state === `finished` && this.holdTime === null && (this.currentTime = r2);
      let v2 = this.currentTime, y2 = n2;
      if (u2) {
        let e3 = Math.min(this.currentTime, r2) / o2, t3 = Math.floor(e3), n3 = e3 % 1;
        !n3 && e3 >= 1 && (n3 = 1), n3 === 1 && t3--, t3 = Math.min(t3, u2 + 1), t3 % 2 && (d2 === `reverse` ? (n3 = 1 - n3, f2 && (n3 -= f2 / o2)) : d2 === `mirror` && (y2 = a2)), v2 = P(0, 1, n3) * o2;
      }
      let b2;
      _2 ? (this.delayState.value = l2[0], b2 = this.delayState) : b2 = y2.next(v2), i2 && !_2 && (b2.value = i2(b2.value));
      let { done: x2 } = b2;
      !_2 && s2 !== null && (x2 = this.playbackSpeed >= 0 ? this.currentTime >= r2 : this.currentTime <= 0);
      let S2 = this.holdTime === null && (this.state === `finished` || this.state === `running` && x2);
      return S2 && p2 !== gt && (b2.value = wt(l2, this.options, h2, this.speed)), m2 && m2(b2.value), S2 && this.finish(), b2;
    }
    then(e2, t2) {
      return this.finished.then(e2, t2);
    }
    get duration() {
      return z(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e2 = 0 } = this.options || {};
      return this.duration + z(e2);
    }
    get time() {
      return z(this.currentTime);
    }
    set time(e2) {
      e2 = R(e2), this.currentTime = e2, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e2 : this.driver && (this.startTime = this.driver.now() - e2 / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = `paused`, this.holdTime = e2, this.tick(e2));
    }
    getGeneratorVelocity() {
      let e2 = this.currentTime;
      if (e2 <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e2);
      let t2 = this.generator.next(e2).value;
      return ht((e3) => this.generator.next(e3).value, e2, t2);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e2) {
      let t2 = this.playbackSpeed !== e2;
      t2 && this.driver && this.updateTime(W.now()), this.playbackSpeed = e2, t2 && this.driver && (this.time = z(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e2 = il, startTime: t2 } = this.options;
      this.driver ||= e2((e3) => this.tick(e3)), this.options.onPlay?.();
      let n2 = this.driver.now();
      this.state === `finished` ? (this.updateFinished(), this.startTime = n2) : this.holdTime === null ? this.startTime ||= t2 ?? n2 : this.startTime = n2 - this.holdTime, this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = `running`, this.driver.start();
    }
    pause() {
      this.state = `paused`, this.updateTime(W.now()), this.holdTime = this.currentTime;
    }
    complete() {
      this.state !== `running` && this.play(), this.state = `finished`, this.holdTime = null;
    }
    finish() {
      this.notifyFinished(), this.teardown(), this.state = `finished`, this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
    }
    teardown() {
      this.state = `idle`, this.stopDriver(), this.startTime = this.holdTime = null, dc.mainThread--;
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e2) {
      return this.startTime = 0, this.tick(e2, true);
    }
    attachTimeline(e2) {
      return this.options.allowFlatten && (this.options.type = `keyframes`, this.options.ease = `linear`, this.initAnimation()), this.driver?.stop(), e2.observe(this);
    }
  }, ll = (e2) => e2 * 180 / Math.PI, ul = (e2) => fl(ll(Math.atan2(e2[1], e2[0]))), dl = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (e2) => (Math.abs(e2[0]) + Math.abs(e2[3])) / 2, rotate: ul, rotateZ: ul, skewX: (e2) => ll(Math.atan(e2[1])), skewY: (e2) => ll(Math.atan(e2[2])), skew: (e2) => (Math.abs(e2[1]) + Math.abs(e2[2])) / 2 }, fl = (e2) => (e2 %= 360, e2 < 0 && (e2 += 360), e2), pl = ul, ml = (e2) => Math.sqrt(e2[0] * e2[0] + e2[1] * e2[1]), hl = (e2) => Math.sqrt(e2[4] * e2[4] + e2[5] * e2[5]), gl = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: ml, scaleY: hl, scale: (e2) => (ml(e2) + hl(e2)) / 2, rotateX: (e2) => fl(ll(Math.atan2(e2[6], e2[5]))), rotateY: (e2) => fl(ll(Math.atan2(-e2[2], e2[0]))), rotateZ: pl, rotate: pl, skewX: (e2) => ll(Math.atan(e2[4])), skewY: (e2) => ll(Math.atan(e2[1])), skew: (e2) => (Math.abs(e2[1]) + Math.abs(e2[4])) / 2 }, _l = (e2, t2) => {
    let { transform: n2 = `none` } = getComputedStyle(e2);
    return kt(n2, t2);
  }, vl = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`], yl = (() => new Set(vl))(), bl = (e2) => e2 === _c || e2 === K, xl = /* @__PURE__ */ new Set([`x`, `y`, `z`]), Sl = vl.filter((e2) => !xl.has(e2)), Cl = { width: ({ x: e2 }, { paddingLeft: t2 = `0`, paddingRight: n2 = `0`, boxSizing: r2 }) => {
    let i2 = e2.max - e2.min;
    return r2 === `border-box` ? i2 : i2 - parseFloat(t2) - parseFloat(n2);
  }, height: ({ y: e2 }, { paddingTop: t2 = `0`, paddingBottom: n2 = `0`, boxSizing: r2 }) => {
    let i2 = e2.max - e2.min;
    return r2 === `border-box` ? i2 : i2 - parseFloat(t2) - parseFloat(n2);
  }, top: (e2, { top: t2 }) => parseFloat(t2), left: (e2, { left: t2 }) => parseFloat(t2), bottom: ({ y: e2 }, { top: t2 }) => parseFloat(t2) + (e2.max - e2.min), right: ({ x: e2 }, { left: t2 }) => parseFloat(t2) + (e2.max - e2.min), x: (e2, { transform: t2 }) => kt(t2, `x`), y: (e2, { transform: t2 }) => kt(t2, `y`) }, Cl.translateX = Cl.x, Cl.translateY = Cl.y, wl = /* @__PURE__ */ new Set(), Tl = false, El = false, Dl = false, Ol = class {
    constructor(e2, t2, n2, r2, i2, a2 = false) {
      this.state = `pending`, this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e2], this.onComplete = t2, this.name = n2, this.motionValue = r2, this.element = i2, this.isAsync = a2;
    }
    scheduleResolve() {
      this.state = `scheduled`, this.isAsync ? (wl.add(this), Tl || (Tl = true, V.read(Nt), V.resolveKeyframes(Mt))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let { unresolvedKeyframes: e2, name: t2, element: n2, motionValue: r2 } = this;
      if (e2[0] === null) {
        let i2 = r2?.get(), a2 = e2[e2.length - 1];
        if (i2 !== void 0) e2[0] = i2;
        else if (n2 && t2) {
          let r3 = n2.readValue(t2, a2);
          r3 != null && (e2[0] = r3);
        }
        e2[0] === void 0 && (e2[0] = a2), r2 && i2 === void 0 && r2.set(e2[0]);
      }
      Dt(e2);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(e2 = false) {
      this.state = `complete`, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e2), wl.delete(this);
    }
    cancel() {
      this.state === `scheduled` && (wl.delete(this), this.state = `pending`);
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  }, kl = (e2) => e2.startsWith(`--`), Al = {}, jl = It(() => r.ScrollTimeline !== void 0, `scrollTimeline`), Ml = It(() => r.ViewTimeline !== void 0, `viewTimeline`), Nl = It(() => {
    try {
      document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return false;
    }
    return true;
  }, `linearEasing`), Pl = ([e2, t2, n2, r2]) => `cubic-bezier(${e2}, ${t2}, ${n2}, ${r2})`, Fl = { linear: `linear`, ease: `ease`, easeIn: `ease-in`, easeOut: `ease-out`, easeInOut: `ease-in-out`, circIn: Pl([0, 0.65, 0.55, 1]), circOut: Pl([0.55, 0, 1, 0.45]), backIn: Pl([0.31, 0.01, 0.66, -0.59]), backOut: Pl([0.33, 1.53, 0.69, 0.99]) }, Il = class extends ol {
    constructor(e2) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e2) return;
      let { element: t2, name: n2, keyframes: r2, pseudoElement: i2, allowFlatten: a2 = false, finalKeyframe: o2, onComplete: s2 } = e2;
      this.isPseudoElement = !!i2, this.allowFlatten = a2, this.options = e2, F(typeof e2.type != `string`, `Mini animate() doesn't support "type" as a string.`, `mini-spring`);
      let c2 = Bt(e2);
      this.animation = Rt(t2, n2, r2, c2, i2), c2.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !i2) {
          let e3 = wt(r2, this.options, o2, this.speed);
          this.updateMotionValue && this.updateMotionValue(e3), Ft(t2, n2, e3), this.animation.cancel();
        }
        s2?.(), this.notifyFinished();
      };
    }
    play() {
      this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {
      }
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      let { state: e2 } = this;
      e2 === `idle` || e2 === `finished` || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e2 = this.options?.element;
      !this.isPseudoElement && e2?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
      let e2 = this.animation.effect?.getComputedTiming?.().duration || 0;
      return z(Number(e2));
    }
    get iterationDuration() {
      let { delay: e2 = 0 } = this.options || {};
      return this.duration + z(e2);
    }
    get time() {
      return z(Number(this.animation.currentTime) || 0);
    }
    set time(e2) {
      let t2 = this.finishedTime !== null;
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = R(e2), t2 && this.animation.pause();
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e2) {
      e2 < 0 && (this.finishedTime = null), this.animation.playbackRate = e2;
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e2) {
      this.manualStartTime = this.animation.startTime = e2;
    }
    attachTimeline({ timeline: e2, rangeStart: t2, rangeEnd: n2, observe: r2 }) {
      return this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }), this.animation.onfinish = null, e2 && jl() ? (this.animation.timeline = e2, t2 && (this.animation.rangeStart = t2), n2 && (this.animation.rangeEnd = n2), L) : r2(this);
    }
  }, Ll = { anticipate: Ys, backInOut: Js, circInOut: Qs }, Rl = 10, zl = class extends Il {
    constructor(e2) {
      Ht(e2), Tt(e2), super(e2), e2.startTime !== void 0 && e2.autoplay !== false && (this.startTime = e2.startTime), this.options = e2;
    }
    updateMotionValue(e2) {
      let { motionValue: t2, onUpdate: n2, onComplete: r2, element: i2, ...a2 } = this.options;
      if (!t2) return;
      if (e2 !== void 0) {
        t2.set(e2);
        return;
      }
      let o2 = new cl({ ...a2, autoplay: false }), s2 = Math.max(Rl, W.now() - this.startTime), c2 = P(0, Rl, s2 - Rl), l2 = o2.sample(s2).value, { name: u2 } = this.options;
      i2 && u2 && Ft(i2, u2, l2), t2.setWithVelocity(o2.sample(Math.max(0, s2 - c2)).value, l2, c2), o2.stop();
    }
  }, Bl = /* @__PURE__ */ new Set([`opacity`, `clipPath`, `filter`, `transform`]), Vl = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/, Hl = /* @__PURE__ */ new Set([`color`, `backgroundColor`, `outlineColor`, `fill`, `stroke`, `borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`]), Ul = Ne(() => Object.hasOwnProperty.call(Element.prototype, `animate`)), Wl = (e2, t2) => t2 === `zIndex` ? false : !!(typeof e2 == `number` || Array.isArray(e2) || typeof e2 == `string` && (J.test(e2) || e2 === `0`) && !e2.startsWith(`url(`)), Gl = 40, Kl = class extends ol {
    constructor({ autoplay: e2 = true, delay: t2 = 0, type: n2 = `keyframes`, repeat: r2 = 0, repeatDelay: i2 = 0, repeatType: a2 = `loop`, keyframes: o2, name: s2, motionValue: c2, element: l2, ...u2 }) {
      super(), this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
      }, this.createdAt = W.now();
      let d2 = { autoplay: e2, delay: t2, type: n2, repeat: r2, repeatDelay: i2, repeatType: a2, name: s2, motionValue: c2, element: l2, ...u2 };
      this.keyframeResolver = new (l2?.KeyframeResolver || Ol)(o2, (e3, t3, n3) => this.onKeyframesResolved(e3, t3, d2, !n3), s2, c2, l2), this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(e2, t2, n2, r2) {
      this.keyframeResolver = void 0;
      let { name: i2, type: a2, velocity: o2, delay: s2, isHandoff: c2, onUpdate: l2 } = n2;
      this.resolvedAt = W.now();
      let u2 = true;
      qt(e2, i2, a2, o2) || (u2 = false, (I.instantAnimations || !s2) && l2?.(wt(e2, n2, t2)), e2[0] = e2[e2.length - 1], Ut(n2), n2.repeat = 0);
      let d2 = { startTime: r2 ? this.resolvedAt && this.resolvedAt - this.createdAt > Gl ? this.resolvedAt : this.createdAt : void 0, finalKeyframe: t2, ...n2, keyframes: e2 }, f2 = u2 && !c2 && Gt(d2), p2 = d2.motionValue?.owner?.current, m2;
      if (f2) try {
        m2 = new zl({ ...d2, element: p2 });
      } catch {
        m2 = new cl(d2);
      }
      else m2 = new cl(d2);
      m2.finished.then(() => {
        this.notifyFinished();
      }).catch(L), this.pendingTimeline &&= (this.stopTimeline = m2.attachTimeline(this.pendingTimeline), void 0), this._animation = m2;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e2, t2) {
      return this.finished.finally(e2).then(() => {
      });
    }
    get animation() {
      return this._animation || (this.keyframeResolver?.resume(), Pt()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e2) {
      this.animation.time = e2;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e2) {
      this.animation.speed = e2;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e2) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(e2) : this.pendingTimeline = e2, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
    }
  }, ql = class {
    constructor(e2) {
      this.stop = () => this.runAll(`stop`), this.animations = e2.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((e2) => e2.finished));
    }
    getAll(e2) {
      return this.animations[0][e2];
    }
    setAll(e2, t2) {
      for (let n2 = 0; n2 < this.animations.length; n2++) this.animations[n2][e2] = t2;
    }
    attachTimeline(e2) {
      let t2 = this.animations.map((t3) => t3.attachTimeline(e2));
      return () => {
        t2.forEach((e3, t3) => {
          e3 && e3(), this.animations[t3].stop();
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e2) {
      this.setAll(`time`, e2);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e2) {
      this.setAll(`speed`, e2);
    }
    get state() {
      return this.getAll(`state`);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      return Jt(this.animations, `duration`);
    }
    get iterationDuration() {
      return Jt(this.animations, `iterationDuration`);
    }
    runAll(e2) {
      this.animations.forEach((t2) => t2[e2]());
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  }, Jl = class extends ql {
    then(e2, t2) {
      return this.finished.finally(e2).then(() => {
      });
    }
  }, Yl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u, Xl = 4, Zl = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 }, Ql = (e2) => ({ type: `spring`, stiffness: 550, damping: e2 === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), $l = { type: `keyframes`, duration: 0.8 }, eu = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, tu = (e2, { keyframes: t2 }) => t2.length > 2 ? $l : yl.has(e2) ? e2.startsWith(`scale`) ? Ql(t2[1]) : Zl : eu, nu = /* @__PURE__ */ new Set([`when`, `delay`, `delayChildren`, `staggerChildren`, `staggerDirection`, `repeat`, `repeatType`, `repeatDelay`, `from`, `elapsed`]), ru = (e2, t2, n2, r2 = {}, i2, a2) => (o2) => {
    let s2 = $t(r2, e2) || {}, c2 = s2.delay || r2.delay || 0, { elapsed: l2 = 0 } = r2;
    l2 -= R(c2);
    let u2 = { keyframes: Array.isArray(n2) ? n2 : [null, n2], ease: `easeOut`, velocity: t2.getVelocity(), ...s2, delay: -l2, onUpdate: (e3) => {
      t2.set(e3), s2.onUpdate && s2.onUpdate(e3);
    }, onComplete: () => {
      o2(), s2.onComplete && s2.onComplete();
    }, name: e2, motionValue: t2, element: a2 ? void 0 : i2 };
    en(s2) || Object.assign(u2, tu(e2, u2)), u2.duration &&= R(u2.duration), u2.repeatDelay &&= R(u2.repeatDelay), u2.from !== void 0 && (u2.keyframes[0] = u2.from);
    let d2 = false;
    if ((u2.type === false || u2.duration === 0 && !u2.repeatDelay) && (Ut(u2), u2.delay === 0 && (d2 = true)), (I.instantAnimations || I.skipAnimations || i2?.shouldSkipAnimations) && (d2 = true, Ut(u2), u2.delay = 0), u2.allowFlatten = !s2.type && !s2.ease, d2 && !a2 && t2.get() !== void 0) {
      let e3 = wt(u2.keyframes, s2);
      if (e3 !== void 0) {
        V.update(() => {
          u2.onUpdate(e3), u2.onComplete();
        });
        return;
      }
    }
    return s2.isSync ? new cl(u2) : new Kl(u2);
  }, iu = /* @__PURE__ */ new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...vl]), au = 30, ou = (e2) => !isNaN(parseFloat(e2)), su = { current: void 0 }, cu = class {
    constructor(e2, t2 = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e3) => {
        let t3 = W.now();
        if (this.updatedAt !== t3 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e3), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e4 of this.dependents) e4.dirty();
      }, this.hasAnimated = false, this.setCurrent(e2), this.owner = t2.owner;
    }
    setCurrent(e2) {
      this.current = e2, this.updatedAt = W.now(), this.canTrackVelocity === null && e2 !== void 0 && (this.canTrackVelocity = ou(this.current));
    }
    setPrevFrameValue(e2 = this.current) {
      this.prevFrameValue = e2, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e2) {
      return this.on(`change`, e2);
    }
    on(e2, t2) {
      this.events[e2] || (this.events[e2] = new zs());
      let n2 = this.events[e2].add(t2);
      return e2 === `change` ? () => {
        n2(), V.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : n2;
    }
    clearListeners() {
      for (let e2 in this.events) this.events[e2].clear();
    }
    attach(e2, t2) {
      this.passiveEffect = e2, this.stopPassiveEffect = t2;
    }
    set(e2) {
      this.passiveEffect ? this.passiveEffect(e2, this.updateAndNotify) : this.updateAndNotify(e2);
    }
    setWithVelocity(e2, t2, n2) {
      this.set(t2), this.prev = void 0, this.prevFrameValue = e2, this.prevUpdatedAt = this.updatedAt - n2;
    }
    jump(e2, t2 = true) {
      this.updateAndNotify(e2), this.prev = e2, this.prevUpdatedAt = this.prevFrameValue = void 0, t2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e2) {
      this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e2);
    }
    removeDependent(e2) {
      this.dependents && this.dependents.delete(e2);
    }
    get() {
      return su.current && su.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e2 = W.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e2 - this.updatedAt > au) return 0;
      let t2 = Math.min(this.updatedAt - this.prevUpdatedAt, au);
      return Pe(parseFloat(this.current) - parseFloat(this.prevFrameValue), t2);
    }
    start(e2) {
      return this.stop(), new Promise((t2) => {
        this.hasAnimated = true, this.animation = e2(t2), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }, lu = (e2) => Array.isArray(e2), Z = (e2) => !!(e2 && e2.getVelocity), uu = `framerAppearId`, du = `data-` + un(uu), fu = (e2) => (t2) => t2.test(e2), pu = [_c, K, G, Ac, Mc, jc, { test: (e2) => e2 === `auto`, parse: (e2) => e2 }], mu = (e2) => pu.find(fu(e2)), hu = { rotate: Ac, rotateX: Ac, rotateY: Ac, rotateZ: Ac, scale: yc, scaleX: yc, scaleY: yc, scaleZ: yc, skew: Ac, skewX: Ac, skewY: Ac, distance: K, translateX: K, translateY: K, translateZ: K, x: K, y: K, z: K, perspective: K, transformPerspective: K, opacity: vc, originX: Nc, originY: Nc, originZ: K }, gu = { ..._c, transform: Math.round }, _u = { borderWidth: K, borderTopWidth: K, borderRightWidth: K, borderBottomWidth: K, borderLeftWidth: K, borderRadius: K, borderTopLeftRadius: K, borderTopRightRadius: K, borderBottomRightRadius: K, borderBottomLeftRadius: K, width: K, maxWidth: K, height: K, maxHeight: K, top: K, right: K, bottom: K, left: K, inset: K, insetBlock: K, insetBlockStart: K, insetBlockEnd: K, insetInline: K, insetInlineStart: K, insetInlineEnd: K, padding: K, paddingTop: K, paddingRight: K, paddingBottom: K, paddingLeft: K, paddingBlock: K, paddingBlockStart: K, paddingBlockEnd: K, paddingInline: K, paddingInlineStart: K, paddingInlineEnd: K, margin: K, marginTop: K, marginRight: K, marginBottom: K, marginLeft: K, marginBlock: K, marginBlockStart: K, marginBlockEnd: K, marginInline: K, marginInlineStart: K, marginInlineEnd: K, fontSize: K, backgroundPositionX: K, backgroundPositionY: K, ...hu, zIndex: gu, fillOpacity: vc, strokeOpacity: vc, numOctaves: gu }, vu = /* @__PURE__ */ new Set([`brightness`, `contrast`, `saturate`, `opacity`]), yu = /\b([a-z-]*)\(.*?\)/gu, bu = { ...J, getAnimatableNone: (e2) => {
    let t2 = e2.match(yu);
    return t2 ? t2.map(_n).join(` `) : e2;
  } }, xu = { ...J, getAnimatableNone: (e2) => {
    let t2 = J.parse(e2);
    return J.createTransformer(e2)(t2.map((e3) => typeof e3 == `number` ? 0 : typeof e3 == `object` ? { ...e3, alpha: 1 } : e3));
  } }, Su = { ..._u, color: q, backgroundColor: q, outlineColor: q, fill: q, stroke: q, borderColor: q, borderTopColor: q, borderRightColor: q, borderBottomColor: q, borderLeftColor: q, filter: bu, WebkitFilter: bu, mask: xu, WebkitMask: xu }, Cu = (e2) => Su[e2], wu = /* @__PURE__ */ new Set([bu, xu]), Tu = /* @__PURE__ */ new Set([`auto`, `none`, `0`]), Eu = class extends Ol {
    constructor(e2, t2, n2, r2, i2) {
      super(e2, t2, n2, r2, i2, true);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e2, element: t2, name: n2 } = this;
      if (!t2 || !t2.current) return;
      super.readKeyframes();
      for (let n3 = 0; n3 < e2.length; n3++) {
        let r3 = e2[n3];
        if (typeof r3 == `string` && (r3 = r3.trim(), hc(r3))) {
          let i3 = Zt(r3, t2.current);
          i3 !== void 0 && (e2[n3] = i3), n3 === e2.length - 1 && (this.finalKeyframe = r3);
        }
      }
      if (this.resolveNoneKeyframes(), !iu.has(n2) || e2.length !== 2) return;
      let [r2, i2] = e2, a2 = mu(r2), o2 = mu(i2);
      if (Ve(r2) !== Ve(i2) && Cl[n2]) {
        this.needsMeasurement = true;
        return;
      }
      if (a2 !== o2) if (bl(a2) && bl(o2)) for (let t3 = 0; t3 < e2.length; t3++) {
        let n3 = e2[t3];
        typeof n3 == `string` && (e2[t3] = parseFloat(n3));
      }
      else Cl[n2] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e2, name: t2 } = this, n2 = [];
      for (let t3 = 0; t3 < e2.length; t3++) (e2[t3] === null || yn(e2[t3])) && n2.push(t3);
      n2.length && bn(e2, n2, t2);
    }
    measureInitialState() {
      let { element: e2, unresolvedKeyframes: t2, name: n2 } = this;
      if (!e2 || !e2.current) return;
      n2 === `height` && (this.suspendedScrollY = r.pageYOffset), this.measuredOrigin = Cl[n2](e2.measureViewportBox(), r.getComputedStyle(e2.current)), t2[0] = this.measuredOrigin;
      let i2 = t2[t2.length - 1];
      i2 !== void 0 && e2.getValue(n2, i2).jump(i2, false);
    }
    measureEndState() {
      let { element: e2, name: t2, unresolvedKeyframes: n2 } = this;
      if (!e2 || !e2.current) return;
      let i2 = e2.getValue(t2);
      i2 && i2.jump(this.measuredOrigin, false);
      let a2 = n2.length - 1, o2 = n2[a2];
      n2[a2] = Cl[t2](e2.measureViewportBox(), r.getComputedStyle(e2.current)), o2 !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o2), this.removedTransforms?.length && this.removedTransforms.forEach(([t3, n3]) => {
        e2.getValue(t3).set(n3);
      }), this.resolveNoneKeyframes();
    }
  }, Du = (e2, t2) => t2 && typeof e2 == `number` ? t2.transform(e2) : e2, { schedule: Ou, cancel: ku } = ze(queueMicrotask, false), Q = { x: false, y: false }, Au = (e2, t2) => t2 ? e2 === t2 ? true : Au(e2, t2.parentElement) : false, ju = (e2) => e2.pointerType === `mouse` ? typeof e2.button != `number` || e2.button <= 0 : e2.isPrimary !== false, Mu = /* @__PURE__ */ new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]), Nu = /* @__PURE__ */ new Set([`INPUT`, `SELECT`, `TEXTAREA`]), Pu = /* @__PURE__ */ new WeakSet(), Fu = (e2, t2) => {
    let n2 = e2.currentTarget;
    if (!n2) return;
    let r2 = An(() => {
      if (Pu.has(n2)) return;
      jn(n2, `down`);
      let e3 = An(() => {
        jn(n2, `up`);
      });
      n2.addEventListener(`keyup`, e3, t2), n2.addEventListener(`blur`, () => jn(n2, `cancel`), t2);
    });
    n2.addEventListener(`keydown`, r2, t2), n2.addEventListener(`blur`, () => n2.removeEventListener(`keydown`, r2), t2);
  }, Iu = /* @__PURE__ */ new WeakSet(), Lu = /* @__PURE__ */ new WeakMap(), zu = (e2, t2, n2) => (r2, i2) => i2 && i2[0] ? i2[0][e2 + `Size`] : Pn(r2) && `getBBox` in r2 ? r2.getBBox()[t2] : r2[n2], Bu = zu(`inline`, `width`, `offsetWidth`), Vu = zu(`block`, `height`, `offsetHeight`), Hu = /* @__PURE__ */ new Set(), Wu = [...pu, q, J], Gu = (e2) => Wu.find(fu(e2)), Ku = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), qu = () => ({ x: Ku(), y: Ku() }), Ju = () => ({ min: 0, max: 0 }), $ = () => ({ x: Ju(), y: Ju() }), Yu = /* @__PURE__ */ new WeakMap(), Xu = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`], Zu = [`initial`, ...Xu], Qu = { current: null }, $u = { current: false }, ed = r !== void 0, td = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`], nd = {}, rd = class {
    scrapeMotionValuesFromProps(e2, t2, n2) {
      return {};
    }
    constructor({ parent: e2, props: t2, presenceContext: n2, reducedMotionConfig: r2, skipAnimations: i2, blockInitialAnimation: a2, visualState: o2 }, s2 = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ol, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify(`Update`, this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let e3 = W.now();
        this.renderScheduledAt < e3 && (this.renderScheduledAt = e3, V.render(this.render, false, true));
      };
      let { latestValues: c2, renderState: l2 } = o2;
      this.latestValues = c2, this.baseTarget = { ...c2 }, this.initialValues = t2.initial ? { ...c2 } : {}, this.renderState = l2, this.parent = e2, this.props = t2, this.presenceContext = n2, this.depth = e2 ? e2.depth + 1 : 0, this.reducedMotionConfig = r2, this.skipAnimationsConfig = i2, this.options = s2, this.blockInitialAnimation = !!a2, this.isControllingVariants = er(t2), this.isVariantNode = tr(t2), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e2 && e2.current);
      let { willChange: u2, ...d2 } = this.scrapeMotionValuesFromProps(t2, {}, this);
      for (let e3 in d2) {
        let t3 = d2[e3];
        c2[e3] !== void 0 && Z(t3) && t3.set(c2[e3]);
      }
    }
    mount(e2) {
      if (this.hasBeenMounted) for (let e3 in this.initialValues) this.values.get(e3)?.jump(this.initialValues[e3]), this.latestValues[e3] = this.initialValues[e3];
      this.current = e2, Yu.set(e2, this), this.projection && !this.projection.instance && this.projection.mount(e2), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e3, t2) => this.bindToMotionValue(t2, e3)), this.reducedMotionConfig === `never` ? this.shouldReduceMotion = false : this.reducedMotionConfig === `always` ? this.shouldReduceMotion = true : ($u.current || rr(), this.shouldReduceMotion = Qu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      for (let e2 in this.projection && this.projection.unmount(), H(this.notifyUpdate), H(this.render), this.valueSubscriptions.forEach((e3) => e3()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[e2].clear();
      for (let e2 in this.features) {
        let t2 = this.features[e2];
        t2 && (t2.unmount(), t2.isMounted = false);
      }
      this.current = null;
    }
    addChild(e2) {
      this.children.add(e2), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e2);
    }
    removeChild(e2) {
      this.children.delete(e2), this.enteringChildren && this.enteringChildren.delete(e2);
    }
    bindToMotionValue(e2, t2) {
      if (this.valueSubscriptions.has(e2) && this.valueSubscriptions.get(e2)(), t2.accelerate && Bl.has(e2) && this.current instanceof HTMLElement) {
        let { factory: n3, keyframes: r2, times: i3, ease: a3, duration: o2 } = t2.accelerate, s2 = new Il({ element: this.current, name: e2, keyframes: r2, times: i3, ease: a3, duration: R(o2) }), c2 = n3(s2);
        this.valueSubscriptions.set(e2, () => {
          c2(), s2.cancel();
        });
        return;
      }
      let n2 = yl.has(e2);
      n2 && this.onBindTransform && this.onBindTransform();
      let i2 = t2.on(`change`, (t3) => {
        this.latestValues[e2] = t3, this.props.onUpdate && V.preRender(this.notifyUpdate), n2 && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
      }), a2;
      r !== void 0 && r.MotionCheckAppearSync && (a2 = r.MotionCheckAppearSync(this, e2, t2)), this.valueSubscriptions.set(e2, () => {
        i2(), a2 && a2(), t2.owner && t2.stop();
      });
    }
    sortNodePosition(e2) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e2.type ? 0 : this.sortInstanceNodePosition(this.current, e2.current);
    }
    updateFeatures() {
      let e2 = `animation`;
      for (e2 in nd) {
        let t2 = nd[e2];
        if (!t2) continue;
        let { isEnabled: n2, Feature: r2 } = t2;
        if (!this.features[e2] && r2 && n2(this.props) && (this.features[e2] = new r2(this)), this.features[e2]) {
          let t3 = this.features[e2];
          t3.isMounted ? t3.update() : (t3.mount(), t3.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $();
    }
    getStaticValue(e2) {
      return this.latestValues[e2];
    }
    setStaticValue(e2, t2) {
      this.latestValues[e2] = t2;
    }
    update(e2, t2) {
      (e2.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e2, this.prevPresenceContext = this.presenceContext, this.presenceContext = t2;
      for (let t3 = 0; t3 < td.length; t3++) {
        let n2 = td[t3];
        this.propEventSubscriptions[n2] && (this.propEventSubscriptions[n2](), delete this.propEventSubscriptions[n2]);
        let r2 = e2[`on` + n2];
        r2 && (this.propEventSubscriptions[n2] = this.on(n2, r2));
      }
      this.prevMotionValues = nr(this, this.scrapeMotionValuesFromProps(e2, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e2) {
      return this.props.variants ? this.props.variants[e2] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(e2) {
      let t2 = this.getClosestVariantNode();
      if (t2) return t2.variantChildren && t2.variantChildren.add(e2), () => t2.variantChildren.delete(e2);
    }
    addValue(e2, t2) {
      let n2 = this.values.get(e2);
      t2 !== n2 && (n2 && this.removeValue(e2), this.bindToMotionValue(e2, t2), this.values.set(e2, t2), this.latestValues[e2] = t2.get());
    }
    removeValue(e2) {
      this.values.delete(e2);
      let t2 = this.valueSubscriptions.get(e2);
      t2 && (t2(), this.valueSubscriptions.delete(e2)), delete this.latestValues[e2], this.removeValueFromRenderState(e2, this.renderState);
    }
    hasValue(e2) {
      return this.values.has(e2);
    }
    getValue(e2, t2) {
      if (this.props.values && this.props.values[e2]) return this.props.values[e2];
      let n2 = this.values.get(e2);
      return n2 === void 0 && t2 !== void 0 && (n2 = O(t2 === null ? void 0 : t2, { owner: this }), this.addValue(e2, n2)), n2;
    }
    readValue(e2, t2) {
      let n2 = this.latestValues[e2] !== void 0 || !this.current ? this.latestValues[e2] : this.getBaseTargetFromProps(this.props, e2) ?? this.readValueFromInstance(this.current, e2, this.options);
      return n2 != null && (typeof n2 == `string` && (Ps(n2) || Fs(n2)) ? n2 = parseFloat(n2) : !Gu(n2) && J.test(t2) && (n2 = vn(e2, t2)), this.setBaseTarget(e2, Z(n2) ? n2.get() : n2)), Z(n2) ? n2.get() : n2;
    }
    setBaseTarget(e2, t2) {
      this.baseTarget[e2] = t2;
    }
    getBaseTarget(e2) {
      let { initial: t2 } = this.props, n2;
      if (typeof t2 == `string` || typeof t2 == `object`) {
        let r3 = nn(this.props, t2, this.presenceContext?.custom);
        r3 && (n2 = r3[e2]);
      }
      if (t2 && n2 !== void 0) return n2;
      let r2 = this.getBaseTargetFromProps(this.props, e2);
      return r2 !== void 0 && !Z(r2) ? r2 : this.initialValues[e2] !== void 0 && n2 === void 0 ? void 0 : this.baseTarget[e2];
    }
    on(e2, t2) {
      return this.events[e2] || (this.events[e2] = new zs()), this.events[e2].add(t2);
    }
    notify(e2, ...t2) {
      this.events[e2] && this.events[e2].notify(...t2);
    }
    scheduleRenderMicrotask() {
      Ou.render(this.render);
    }
  }, id = class extends rd {
    constructor() {
      super(...arguments), this.KeyframeResolver = Eu;
    }
    sortInstanceNodePosition(e2, t2) {
      return e2.compareDocumentPosition(t2) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e2, t2) {
      let n2 = e2.style;
      return n2 ? n2[t2] : void 0;
    }
    removeValueFromRenderState(e2, { vars: t2, style: n2 }) {
      delete t2[e2], delete n2[e2];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: e2 } = this.props;
      Z(e2) && (this.childSubscription = e2.on(`change`, (e3) => {
        this.current && (this.current.textContent = `${e3}`);
      }));
    }
  }, ad = class {
    constructor(e2) {
      this.isMounted = false, this.node = e2;
    }
    update() {
    }
  }, od = 0.999999999999, sd = 1.0000000000001, cd = { x: `translateX`, y: `translateY`, z: `translateZ`, transformPerspective: `perspective` }, ld = vl.length, ud = { correct: (e2, t2) => {
    if (!t2.target) return e2;
    if (typeof e2 == `string`) if (K.test(e2)) e2 = parseFloat(e2);
    else return e2;
    return `${Dr(e2, t2.target.x)}% ${Dr(e2, t2.target.y)}%`;
  } }, dd = { correct: (e2, { treeScale: t2, projectionDelta: n2 }) => {
    let r2 = e2, i2 = J.parse(e2);
    if (i2.length > 5) return r2;
    let a2 = J.createTransformer(e2), o2 = typeof i2[0] == `number` ? 0 : 1, s2 = n2.x.scale * t2.x, c2 = n2.y.scale * t2.y;
    i2[0 + o2] /= s2, i2[1 + o2] /= c2;
    let l2 = Y(s2, c2, 0.5);
    return typeof i2[2 + o2] == `number` && (i2[2 + o2] /= l2), typeof i2[3 + o2] == `number` && (i2[3 + o2] /= l2), a2(i2);
  } }, fd = { borderRadius: { ...ud, applyTo: [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomLeftRadius`, `borderBottomRightRadius`] }, borderTopLeftRadius: ud, borderTopRightRadius: ud, borderBottomLeftRadius: ud, borderBottomRightRadius: ud, boxShadow: dd }, pd = class extends id {
    constructor() {
      super(...arguments), this.type = `html`, this.renderInstance = Er;
    }
    readValueFromInstance(e2, t2) {
      if (yl.has(t2)) return this.projection?.isProjecting ? Ot(t2) : _l(e2, t2);
      {
        let n2 = jr(e2), r2 = (pc(t2) ? n2.getPropertyValue(t2) : n2[t2]) || 0;
        return typeof r2 == `string` ? r2.trim() : r2;
      }
    }
    measureInstanceViewportBox(e2, { transformPagePoint: t2 }) {
      return Sr(e2, t2);
    }
    build(e2, t2, n2) {
      Tr(e2, t2, n2.transformTemplate);
    }
    scrapeMotionValuesFromProps(e2, t2, n2) {
      return Ar(e2, t2, n2);
    }
  }, md = class extends rd {
    constructor() {
      super(...arguments), this.type = `object`;
    }
    readValueFromInstance(e2, t2) {
      if (Mr(t2, e2)) {
        let n2 = e2[t2];
        if (typeof n2 == `string` || typeof n2 == `number`) return n2;
      }
    }
    getBaseTargetFromProps() {
    }
    removeValueFromRenderState(e2, t2) {
      delete t2.output[e2];
    }
    measureInstanceViewportBox() {
      return $();
    }
    build(e2, t2) {
      Object.assign(e2.output, t2);
    }
    renderInstance(e2, { output: t2 }) {
      Object.assign(e2, t2);
    }
    sortInstanceNodePosition() {
      return 0;
    }
  }, hd = { offset: `stroke-dashoffset`, array: `stroke-dasharray` }, gd = { offset: `strokeDashoffset`, array: `strokeDasharray` }, _d = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`], vd = /* @__PURE__ */ new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]), yd = (e2) => typeof e2 == `string` && e2.toLowerCase() === `svg`, bd = class extends id {
    constructor() {
      super(...arguments), this.type = `svg`, this.isSVGTag = false, this.measureInstanceViewportBox = $;
    }
    getBaseTargetFromProps(e2, t2) {
      return e2[t2];
    }
    readValueFromInstance(e2, t2) {
      if (yl.has(t2)) {
        let e3 = Cu(t2);
        return e3 && e3.default || 0;
      }
      return t2 = vd.has(t2) ? t2 : un(t2), e2.getAttribute(t2);
    }
    scrapeMotionValuesFromProps(e2, t2, n2) {
      return Ir(e2, t2, n2);
    }
    build(e2, t2, n2) {
      Pr(e2, t2, this.isSVGTag, n2.transformTemplate, n2.style);
    }
    renderInstance(e2, t2, n2, r2) {
      Fr(e2, t2, n2, r2);
    }
    mount(e2) {
      this.isSVGTag = yd(e2.tagName), super.mount(e2);
    }
  }, xd = Zu.length, Sd = [...Xu].reverse(), Cd = Xu.length, wd = 1e-4, Td = 1 - wd, Ed = 1 + wd, Dd = 0.01, Od = 0 - Dd, kd = 0 + Dd, Ad = [`x`, `scaleX`, `originX`], jd = [`y`, `scaleY`, `originY`], Md = [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomLeftRadius`, `borderBottomRightRadius`], Nd = Md.length, Pd = (e2) => typeof e2 == `string` ? parseFloat(e2) : e2, Fd = (e2) => typeof e2 == `number` || K.test(e2), Id = mi(0, 0.5, Zs), Ld = mi(0.5, 0.95, L), Rd = (e2, t2) => e2.depth - t2.depth, zd = class {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(e2) {
      ke(this.children, e2), this.isDirty = true;
    }
    remove(e2) {
      Ae(this.children, e2), this.isDirty = true;
    }
    forEach(e2) {
      this.isDirty && this.children.sort(Rd), this.isDirty = false, this.children.forEach(e2);
    }
  }, Bd = class {
    constructor() {
      this.members = [];
    }
    add(e2) {
      ke(this.members, e2);
      for (let t2 = this.members.length - 1; t2 >= 0; t2--) {
        let n2 = this.members[t2];
        if (n2 === e2 || n2 === this.lead || n2 === this.prevLead) continue;
        let r2 = n2.instance;
        (!r2 || r2.isConnected === false) && !n2.snapshot && (Ae(this.members, n2), n2.unmount());
      }
      e2.scheduleRender();
    }
    remove(e2) {
      if (Ae(this.members, e2), e2 === this.prevLead && (this.prevLead = void 0), e2 === this.lead) {
        let e3 = this.members[this.members.length - 1];
        e3 && this.promote(e3);
      }
    }
    relegate(e2) {
      for (let t2 = this.members.indexOf(e2) - 1; t2 >= 0; t2--) {
        let e3 = this.members[t2];
        if (e3.isPresent !== false && e3.instance?.isConnected !== false) return this.promote(e3), true;
      }
      return false;
    }
    promote(e2, t2) {
      let n2 = this.lead;
      if (e2 !== n2 && (this.prevLead = n2, this.lead = e2, e2.show(), n2)) {
        n2.updateSnapshot(), e2.scheduleRender();
        let { layoutDependency: r2 } = n2.options, { layoutDependency: i2 } = e2.options;
        (r2 === void 0 || r2 !== i2) && (e2.resumeFrom = n2, t2 && (n2.preserveOpacity = true), n2.snapshot && (e2.snapshot = n2.snapshot, e2.snapshot.latestValues = n2.animationValues || n2.latestValues), e2.root?.isUpdating && (e2.isLayoutDirty = true)), e2.options.crossfade === false && n2.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e2) => {
        e2.options.onExitComplete?.(), e2.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((e2) => e2.instance && e2.scheduleRender(false));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  }, Vd = { hasAnimatedSinceResize: true, hasEverUpdated: false }, Hd = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }, Ud = [``, `X`, `Y`, `Z`], Wd = 1e3, Gd = 0, Kd = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, qd = (e2) => E !== void 0 && E.userAgent && E.userAgent.toLowerCase().includes(e2), Jd = qd(`applewebkit/`) && !qd(`chrome/`) ? Math.round : L, Yd = xi({ attachResizeListener: (e2, t2) => gi(e2, `resize`, t2), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0, y: document.documentElement.scrollTop || document.body?.scrollTop || 0 }), checkIsScrollRoot: () => true }), Xd = (e2) => !e2.isLayoutDirty && e2.willUpdate(false), Zd = { current: void 0 }, Qd = xi({ measureScroll: (e2) => ({ x: e2.scrollLeft, y: e2.scrollTop }), defaultParent: () => {
    if (!Zd.current) {
      let e2 = new Yd({});
      e2.mount(r), e2.setOptions({ layoutScroll: true }), Zd.current = e2;
    }
    return Zd.current;
  }, resetTransform: (e2, t2) => {
    e2.style.transform = t2 === void 0 ? `none` : t2;
  }, checkIsScrollRoot: (e2) => r.getComputedStyle(e2).position === `fixed` }), sc.reduce((e2, t2) => (e2[t2] = (e3) => H(e3), e2), {}), $d = c({ transformPagePoint: (e2) => e2, isStatic: false, reducedMotion: `never` }), ef = class extends h {
    getSnapshotBeforeUpdate(e2) {
      let t2 = this.props.childRef.current;
      if (Sn(t2) && e2.isPresent && !this.props.isPresent && this.props.pop !== false) {
        let e3 = t2.offsetParent, n2 = Sn(e3) && e3.offsetWidth || 0, r2 = Sn(e3) && e3.offsetHeight || 0, i2 = getComputedStyle(t2), a2 = this.props.sizeRef.current;
        a2.height = parseFloat(i2.height), a2.width = parseFloat(i2.width), a2.top = t2.offsetTop, a2.left = t2.offsetLeft, a2.right = n2 - a2.width - a2.left, a2.bottom = r2 - a2.height - a2.top;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }, tf = ({ children: e2, initial: t2, isPresent: n2, onExitComplete: r2, custom: i2, presenceAffectsLayout: a2, mode: o2, anchorX: s2, anchorY: c2, root: u2 }) => {
    let f2 = N(Xi), p2 = T(), h2 = true, g2 = l(() => (h2 = false, { id: p2, initial: t2, isPresent: n2, custom: i2, onExitComplete: (e3) => {
      f2.set(e3, true);
      for (let e4 of f2.values()) if (!e4) return;
      r2 && r2();
    }, register: (e3) => (f2.set(e3, false), () => f2.delete(e3)) }), [n2, f2, r2]);
    return a2 && h2 && (g2 = { ...g2 }), l(() => {
      f2.forEach((e3, t3) => f2.set(t3, false));
    }, [n2]), d(() => {
      !n2 && !f2.size && r2 && r2();
    }, [n2]), e2 = m(Yi, { pop: o2 === `popLayout`, isPresent: n2, anchorX: s2, anchorY: c2, root: u2, children: e2 }), m(Ms.Provider, { value: g2, children: e2 });
  }, nf = (e2) => e2.key || ``, rf = ({ children: e2, custom: t2, initial: n2 = true, onExitComplete: r2, presenceAffectsLayout: i2 = true, mode: a2 = `sync`, propagate: o2 = false, anchorX: c2 = `left`, anchorY: u2 = `top`, root: d2 }) => {
    let [f2, p2] = Zi(o2), h2 = l(() => Qi(e2), [e2]), g2 = o2 && !f2 ? [] : h2.map(nf), _2 = y(true), b2 = y(h2), x2 = N(() => /* @__PURE__ */ new Map()), C2 = y(/* @__PURE__ */ new Set()), [w2, T2] = s(h2), [E2, ee2] = s(h2);
    js(() => {
      _2.current = false, b2.current = h2;
      for (let e3 = 0; e3 < E2.length; e3++) {
        let t3 = nf(E2[e3]);
        g2.includes(t3) ? (x2.delete(t3), C2.current.delete(t3)) : x2.get(t3) !== true && x2.set(t3, false);
      }
    }, [E2, g2.length, g2.join(`-`)]);
    let D2 = [];
    if (h2 !== w2) {
      let e3 = [...h2];
      for (let t3 = 0; t3 < E2.length; t3++) {
        let n3 = E2[t3], r3 = nf(n3);
        g2.includes(r3) || (e3.splice(t3, 0, n3), D2.push(n3));
      }
      return a2 === `wait` && D2.length && (e3 = D2), ee2(Qi(e3)), T2(h2), null;
    }
    let { forceRender: te2 } = v(ks);
    return m(S, { children: E2.map((e3) => {
      let s2 = nf(e3), l2 = o2 && !f2 ? false : h2 === E2 || g2.includes(s2);
      return m(tf, { isPresent: l2, initial: !_2.current || n2 ? void 0 : false, custom: t2, presenceAffectsLayout: i2, mode: a2, root: d2, onExitComplete: l2 ? void 0 : () => {
        if (C2.current.has(s2)) return;
        if (x2.has(s2)) C2.current.add(s2), x2.set(s2, true);
        else return;
        let e4 = true;
        x2.forEach((t3) => {
          t3 || (e4 = false);
        }), e4 && (te2?.(), ee2(b2.current), o2 && p2?.(), r2 && r2());
      }, anchorX: c2, anchorY: u2, children: e3 }, s2);
    }) });
  }, af = c(null), of = (e2) => e2 === true, sf = (e2) => of(e2 === true) || e2 === `id`, cf = ({ children: e2, id: t2, inherit: n2 = true }) => {
    let r2 = v(ks), i2 = v(af), [a2, o2] = ea(), s2 = y(null), c2 = r2.id || i2;
    s2.current === null && (sf(n2) && c2 && (t2 = t2 ? c2 + `-` + t2 : c2), s2.current = { id: t2, group: of(n2) && r2.group || Gi() });
    let u2 = l(() => ({ ...s2.current, forceRender: a2 }), [o2]);
    return m(ks.Provider, { value: u2, children: e2 });
  }, lf = c({ strict: false }), uf = { animation: [`animate`, `variants`, `whileHover`, `whileTap`, `exit`, `whileInView`, `whileFocus`, `whileDrag`], exit: [`exit`], drag: [`drag`, `dragControls`], focus: [`whileFocus`], hover: [`whileHover`, `onHoverStart`, `onHoverEnd`], tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`], pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`], inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`], layout: [`layout`, `layoutId`] }, df = false, ff = new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`)), pf = (e2) => !ia(e2);
  try {
    aa(le(`@emotion/is-prop-valid`).default);
  } catch {
  }
  mf = c({}), hf = (e2) => (t2, n2) => {
    let r2 = v(mf), i2 = v(Ms), a2 = () => ca(e2, t2, r2, i2);
    return n2 ? a2() : N(a2);
  }, gf = c({}), _f = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }), vf = () => ({ ..._f(), attrs: {} }), yf = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`], bf = hf({ scrapeMotionValuesFromProps: Ar, createRenderState: _f }), xf = hf({ scrapeMotionValuesFromProps: Ir, createRenderState: vf }), Sf = Symbol.for(`motionComponentSymbol`), Cf = class extends ad {
    constructor(e2) {
      super(e2), e2.animationState ||= Br(e2);
    }
    updateAnimationControlsSubscription() {
      let { animate: e2 } = this.node.getProps();
      Qn(e2) && (this.unmountControls = e2.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e2 } = this.node.getProps(), { animate: t2 } = this.node.prevProps || {};
      e2 !== t2 && this.updateAnimationControlsSubscription();
    }
    unmount() {
      this.node.animationState.reset(), this.unmountControls?.();
    }
  }, wf = 0, Tf = class extends ad {
    constructor() {
      super(...arguments), this.id = wf++, this.isExitComplete = false;
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e2, onExitComplete: t2 } = this.node.presenceContext, { isPresent: n2 } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e2 === n2) return;
      if (e2 && n2 === false) {
        if (this.isExitComplete) {
          let { initial: e3, custom: t3 } = this.node.getProps();
          if (typeof e3 == `string`) {
            let n3 = rn(this.node, e3, t3);
            if (n3) {
              let { transition: e4, transitionEnd: t4, ...r3 } = n3;
              for (let e5 in r3) this.node.getValue(e5)?.jump(r3[e5]);
            }
          }
          this.node.animationState.reset(), this.node.animationState.animateChanges();
        } else this.node.animationState.setActive(`exit`, false);
        this.isExitComplete = false;
        return;
      }
      let r2 = this.node.animationState.setActive(`exit`, !e2);
      t2 && !e2 && r2.then(() => {
        this.isExitComplete = true, t2(this.id);
      });
    }
    mount() {
      let { register: e2, onExitComplete: t2 } = this.node.presenceContext || {};
      t2 && t2(this.id), e2 && (this.unmount = e2(this.id));
    }
    unmount() {
    }
  }, Ef = { animation: { Feature: Cf }, exit: { Feature: Tf } }, Df = (e2) => (t2) => ju(t2) && e2(t2, Aa(t2)), Of = (e2, t2) => Math.abs(e2 - t2), kf = (e2, t2) => t2.isSVG ?? va(e2) ? new bd(t2) : new pd(t2, { allowProjection: e2 !== o }), Af = ({ current: e2 }) => e2 ? e2.ownerDocument.defaultView : null, jf = /* @__PURE__ */ new Set([`auto`, `scroll`]), Mf = class {
    constructor(e2, t2, { transformPagePoint: n2, contextWindow: i2 = r, dragSnapToOrigin: a2 = false, distanceThreshold: o2 = 3, element: s2 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = r, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e3) => {
        this.handleScroll(e3.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(r);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Na(this.lastRawMoveEventInfo, this.transformPagePoint));
        let e3 = Fa(this.lastMoveEventInfo, this.history), t3 = this.startEvent !== null, n3 = Ma(e3.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!t3 && !n3) return;
        let { point: r2 } = e3, { timestamp: i3 } = U;
        this.history.push({ ...r2, timestamp: i3 });
        let { onStart: a3, onMove: o3 } = this.handlers;
        t3 || (a3 && a3(this.lastMoveEvent, e3), this.startEvent = this.lastMoveEvent), o3 && o3(this.lastMoveEvent, e3);
      }, this.handlePointerMove = (e3, t3) => {
        this.lastMoveEvent = e3, this.lastRawMoveEventInfo = t3, this.lastMoveEventInfo = Na(t3, this.transformPagePoint), V.update(this.updatePoint, true);
      }, this.handlePointerUp = (e3, t3) => {
        this.end();
        let { onEnd: n3, onSessionEnd: r2, resumeAnimation: i3 } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && i3 && i3(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let a3 = Fa(e3.type === `pointercancel` ? this.lastMoveEventInfo : Na(t3, this.transformPagePoint), this.history);
        this.startEvent && n3 && n3(e3, a3), r2 && r2(e3, a3);
      }, !ju(e2)) return;
      this.dragSnapToOrigin = a2, this.handlers = t2, this.transformPagePoint = n2, this.distanceThreshold = o2, this.contextWindow = i2 || r;
      let c2 = Na(Aa(e2), this.transformPagePoint), { point: l2 } = c2, { timestamp: u2 } = U;
      this.history = [{ ...l2, timestamp: u2 }];
      let { onSessionStart: d2 } = t2;
      d2 && d2(e2, Fa(c2, this.history)), this.removeListeners = Ls(ja(this.contextWindow, `pointermove`, this.handlePointerMove), ja(this.contextWindow, `pointerup`, this.handlePointerUp), ja(this.contextWindow, `pointercancel`, this.handlePointerUp)), s2 && this.startScrollTracking(s2);
    }
    startScrollTracking(e2) {
      let t2 = e2.parentElement;
      for (; t2; ) {
        let e3 = getComputedStyle(t2);
        (jf.has(e3.overflowX) || jf.has(e3.overflowY)) && this.scrollPositions.set(t2, { x: t2.scrollLeft, y: t2.scrollTop }), t2 = t2.parentElement;
      }
      this.scrollPositions.set(r, { x: r.scrollX, y: r.scrollY }), r.addEventListener(`scroll`, this.onElementScroll, { capture: true }), r.addEventListener(`scroll`, this.onWindowScroll), this.removeScrollListeners = () => {
        r.removeEventListener(`scroll`, this.onElementScroll, { capture: true }), r.removeEventListener(`scroll`, this.onWindowScroll);
      };
    }
    handleScroll(e2) {
      let t2 = this.scrollPositions.get(e2);
      if (!t2) return;
      let n2 = e2 === r, i2 = n2 ? { x: r.scrollX, y: r.scrollY } : { x: e2.scrollLeft, y: e2.scrollTop }, a2 = { x: i2.x - t2.x, y: i2.y - t2.y };
      a2.x === 0 && a2.y === 0 || (n2 ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += a2.x, this.lastMoveEventInfo.point.y += a2.y) : this.history.length > 0 && (this.history[0].x -= a2.x, this.history[0].y -= a2.y), this.scrollPositions.set(e2, i2), V.update(this.updatePoint, true));
    }
    updateHandlers(e2) {
      this.handlers = e2;
    }
    end() {
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), H(this.updatePoint);
    }
  }, Nf = 0.35, Pf = /* @__PURE__ */ new WeakMap(), Ff = class {
    constructor(e2) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = $(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e2;
    }
    start(e2, { snapToCursor: t2 = false, distanceThreshold: n2 } = {}) {
      let { presenceContext: r2 } = this.visualElement;
      if (r2 && r2.isPresent === false) return;
      let i2 = (e3) => {
        t2 && this.snapToCursor(Aa(e3).point), this.stopAnimation();
      }, a2 = (e3, t3) => {
        let { drag: n3, dragPropagation: r3, onDragStart: i3 } = this.getProps();
        if (n3 && !r3 && (this.openDragLock && this.openDragLock(), this.openDragLock = wn(n3), !this.openDragLock)) return;
        this.latestPointerEvent = e3, this.latestPanInfo = t3, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), M((e4) => {
          let t4 = this.getAxisMotionValue(e4).get() || 0;
          if (G.test(t4)) {
            let { projection: n4 } = this.visualElement;
            if (n4 && n4.layout) {
              let r4 = n4.layout.layoutBox[e4];
              r4 && (t4 = j(r4) * (parseFloat(t4) / 100));
            }
          }
          this.originPoint[e4] = t4;
        }), i3 && V.update(() => i3(e3, t3), false, true), ln(this.visualElement, `transform`);
        let { animationState: a3 } = this.visualElement;
        a3 && a3.setActive(`whileDrag`, true);
      }, o2 = (e3, t3) => {
        this.latestPointerEvent = e3, this.latestPanInfo = t3;
        let { dragPropagation: n3, dragDirectionLock: r3, onDirectionLock: i3, onDrag: a3 } = this.getProps();
        if (!n3 && !this.openDragLock) return;
        let { offset: o3 } = t3;
        if (r3 && this.currentDirection === null) {
          this.currentDirection = Qa(o3), this.currentDirection !== null && i3 && i3(this.currentDirection);
          return;
        }
        this.updateAxis(`x`, t3.point, o3), this.updateAxis(`y`, t3.point, o3), this.visualElement.render(), a3 && V.update(() => a3(e3, t3), false, true);
      }, s2 = (e3, t3) => {
        this.latestPointerEvent = e3, this.latestPanInfo = t3, this.stop(e3, t3), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, c2 = () => {
        let { dragSnapToOrigin: e3 } = this.getProps();
        (e3 || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      }, { dragSnapToOrigin: l2 } = this.getProps();
      this.panSession = new Mf(e2, { onSessionStart: i2, onStart: a2, onMove: o2, onSessionEnd: s2, resumeAnimation: c2 }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: l2, distanceThreshold: n2, contextWindow: Af(this.visualElement), element: this.visualElement.current });
    }
    stop(e2, t2) {
      let n2 = e2 || this.latestPointerEvent, r2 = t2 || this.latestPanInfo, i2 = this.isDragging;
      if (this.cancel(), !i2 || !r2 || !n2) return;
      let { velocity: a2 } = r2;
      this.startAnimation(a2);
      let { onDragEnd: o2 } = this.getProps();
      o2 && V.postRender(() => o2(n2, r2));
    }
    cancel() {
      this.isDragging = false;
      let { projection: e2, animationState: t2 } = this.visualElement;
      e2 && (e2.isAnimationBlocked = false), this.endPanSession();
      let { dragPropagation: n2 } = this.getProps();
      !n2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t2 && t2.setActive(`whileDrag`, false);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), this.panSession = void 0;
    }
    updateAxis(e2, t2, n2) {
      let { drag: r2 } = this.getProps();
      if (!n2 || !Za(e2, r2, this.currentDirection)) return;
      let i2 = this.getAxisMotionValue(e2), a2 = this.originPoint[e2] + n2[e2];
      this.constraints && this.constraints[e2] && (a2 = za(a2, this.constraints[e2], this.elastic[e2])), i2.set(a2);
    }
    resolveConstraints() {
      let { dragConstraints: e2, dragElastic: t2 } = this.getProps(), n2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout, r2 = this.constraints;
      e2 && xa(e2) ? this.constraints ||= this.resolveRefConstraints() : e2 && n2 ? this.constraints = Va(n2.layoutBox, e2) : this.constraints = false, this.elastic = Ka(t2), r2 !== this.constraints && !xa(e2) && n2 && this.constraints && !this.hasMutatedConstraints && M((e3) => {
        this.constraints !== false && this.getAxisMotionValue(e3) && (this.constraints[e3] = Ga(n2.layoutBox[e3], this.constraints[e3]));
      });
    }
    resolveRefConstraints() {
      let { dragConstraints: e2, onMeasureDragConstraints: t2 } = this.getProps();
      if (!e2 || !xa(e2)) return false;
      let n2 = e2.current;
      F(n2 !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", `drag-constraints-ref`);
      let { projection: r2 } = this.visualElement;
      if (!r2 || !r2.layout) return false;
      let i2 = Cr(n2, r2.root, this.visualElement.getTransformPagePoint()), a2 = Ua(r2.layout.layoutBox, i2);
      if (t2) {
        let e3 = t2(sr(a2));
        this.hasMutatedConstraints = !!e3, e3 && (a2 = or(e3));
      }
      return a2;
    }
    startAnimation(e2) {
      let { drag: t2, dragMomentum: n2, dragElastic: r2, dragTransition: i2, dragSnapToOrigin: a2, onDragTransitionEnd: o2 } = this.getProps(), s2 = this.constraints || {}, c2 = M((o3) => {
        if (!Za(o3, t2, this.currentDirection)) return;
        let c3 = s2 && s2[o3] || {};
        (a2 === true || a2 === o3) && (c3 = { min: 0, max: 0 });
        let l2 = r2 ? 200 : 1e6, u2 = r2 ? 40 : 1e7, d2 = { type: `inertia`, velocity: n2 ? e2[o3] : 0, bounceStiffness: l2, bounceDamping: u2, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i2, ...c3 };
        return this.startAxisValueAnimation(o3, d2);
      });
      return Promise.all(c2).then(o2);
    }
    startAxisValueAnimation(e2, t2) {
      let n2 = this.getAxisMotionValue(e2);
      return ln(this.visualElement, e2), n2.start(ru(e2, n2, 0, t2, this.visualElement, false));
    }
    stopAnimation() {
      M((e2) => this.getAxisMotionValue(e2).stop());
    }
    getAxisMotionValue(e2) {
      let t2 = `_drag${e2.toUpperCase()}`, n2 = this.visualElement.getProps();
      return n2[t2] || this.visualElement.getValue(e2, (n2.initial ? n2.initial[e2] : void 0) || 0);
    }
    snapToCursor(e2) {
      M((t2) => {
        let { drag: n2 } = this.getProps();
        if (!Za(t2, n2, this.currentDirection)) return;
        let { projection: r2 } = this.visualElement, i2 = this.getAxisMotionValue(t2);
        if (r2 && r2.layout) {
          let { min: n3, max: a2 } = r2.layout.layoutBox[t2], o2 = i2.get() || 0;
          i2.set(e2[t2] - Y(n3, a2, 0.5) + o2);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e2, dragConstraints: t2 } = this.getProps(), { projection: n2 } = this.visualElement;
      if (!xa(t2) || !n2 || !this.constraints) return;
      this.stopAnimation();
      let r2 = { x: 0, y: 0 };
      M((e3) => {
        let t3 = this.getAxisMotionValue(e3);
        if (t3 && this.constraints !== false) {
          let n3 = t3.get();
          r2[e3] = Wa({ min: n3, max: n3 }, this.constraints[e3]);
        }
      });
      let { transformTemplate: i2 } = this.visualElement.getProps();
      this.visualElement.current.style.transform = i2 ? i2({}, ``) : `none`, n2.root && n2.root.updateScroll(), n2.updateLayout(), this.constraints = false, this.resolveConstraints(), M((t3) => {
        if (!Za(t3, e2, null)) return;
        let n3 = this.getAxisMotionValue(t3), { min: i3, max: a2 } = this.constraints[t3];
        n3.set(Y(i3, a2, r2[t3]));
      }), this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Pf.set(this.visualElement, this);
      let e2 = this.visualElement.current, t2 = ja(e2, `pointerdown`, (t3) => {
        let { drag: n3, dragListener: r2 = true } = this.getProps(), i3 = t3.target, a3 = i3 !== e2 && kn(i3);
        n3 && r2 && !a3 && this.start(t3);
      }), n2, i2 = () => {
        let { dragConstraints: t3 } = this.getProps();
        xa(t3) && t3.current && (this.constraints = this.resolveRefConstraints(), n2 ||= Xa(e2, t3.current, () => this.scalePositionWithinConstraints()));
      }, { projection: a2 } = this.visualElement, o2 = a2.addEventListener(`measure`, i2);
      a2 && !a2.layout && (a2.root && a2.root.updateScroll(), a2.updateLayout()), V.read(i2);
      let s2 = gi(r, `resize`, () => this.scalePositionWithinConstraints()), c2 = a2.addEventListener(`didUpdate`, ({ delta: e3, hasLayoutChanged: t3 }) => {
        this.isDragging && t3 && (M((t4) => {
          let n3 = this.getAxisMotionValue(t4);
          n3 && (this.originPoint[t4] += e3[t4].translate, n3.set(n3.get() + e3[t4].translate));
        }), this.visualElement.render());
      });
      return () => {
        s2(), t2(), o2(), c2 && c2(), n2 && n2();
      };
    }
    getProps() {
      let e2 = this.visualElement.getProps(), { drag: t2 = false, dragDirectionLock: n2 = false, dragPropagation: r2 = false, dragConstraints: i2 = false, dragElastic: a2 = Nf, dragMomentum: o2 = true } = e2;
      return { ...e2, drag: t2, dragDirectionLock: n2, dragPropagation: r2, dragConstraints: i2, dragElastic: a2, dragMomentum: o2 };
    }
  }, If = class extends ad {
    constructor(e2) {
      super(e2), this.removeGroupControls = L, this.removeListeners = L, this.controls = new Ff(e2);
    }
    mount() {
      let { dragControls: e2 } = this.node.getProps();
      e2 && (this.removeGroupControls = e2.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || L;
    }
    update() {
      let { dragControls: e2 } = this.node.getProps(), { dragControls: t2 } = this.node.prevProps || {};
      e2 !== t2 && (this.removeGroupControls(), e2 && (this.removeGroupControls = e2.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }, Lf = (e2) => (t2, n2) => {
    e2 && V.update(() => e2(t2, n2), false, true);
  }, Rf = class extends ad {
    constructor() {
      super(...arguments), this.removePointerDownListener = L;
    }
    onPointerDown(e2) {
      this.session = new Mf(e2, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: Af(this.node) });
    }
    createPanHandlers() {
      let { onPanSessionStart: e2, onPanStart: t2, onPan: n2, onPanEnd: r2 } = this.node.getProps();
      return { onSessionStart: Lf(e2), onStart: Lf(t2), onMove: Lf(n2), onEnd: (e3, t3) => {
        delete this.session, r2 && V.postRender(() => r2(e3, t3));
      } };
    }
    mount() {
      this.removePointerDownListener = ja(this.node.current, `pointerdown`, (e2) => this.onPointerDown(e2));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }, zf = false, Bf = class extends h {
    componentDidMount() {
      let { visualElement: e2, layoutGroup: t2, switchLayoutGroup: n2, layoutId: r2 } = this.props, { projection: i2 } = e2;
      i2 && (t2.group && t2.group.add(i2), n2 && n2.register && r2 && n2.register(i2), zf && i2.root.didUpdate(), i2.addEventListener(`animationComplete`, () => {
        this.safeToRemove();
      }), i2.setOptions({ ...i2.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), Vd.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(e2) {
      let { layoutDependency: t2, visualElement: n2, drag: r2, isPresent: i2 } = this.props, { projection: a2 } = n2;
      return a2 ? (a2.isPresent = i2, e2.layoutDependency !== t2 && a2.setOptions({ ...a2.options, layoutDependency: t2 }), zf = true, r2 || e2.layoutDependency !== t2 || t2 === void 0 || e2.isPresent !== i2 ? a2.willUpdate() : this.safeToRemove(), e2.isPresent !== i2 && (i2 ? a2.promote() : a2.relegate() || V.postRender(() => {
        let e3 = a2.getStack();
        (!e3 || !e3.members.length) && this.safeToRemove();
      })), null) : null;
    }
    componentDidUpdate() {
      let { visualElement: e2, layoutAnchor: t2 } = this.props, { projection: n2 } = e2;
      n2 && (n2.options.layoutAnchor = t2, n2.root.didUpdate(), Ou.postRender(() => {
        !n2.currentAnimation && n2.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let { visualElement: e2, layoutGroup: t2, switchLayoutGroup: n2 } = this.props, { projection: r2 } = e2;
      zf = true, r2 && (r2.scheduleCheckAfterUnmount(), t2 && t2.group && t2.group.remove(r2), n2 && n2.deregister && n2.deregister(r2));
    }
    safeToRemove() {
      let { safeToRemove: e2 } = this.props;
      e2 && e2();
    }
    render() {
      return null;
    }
  }, Vf = { pan: { Feature: Rf }, drag: { Feature: If, ProjectionNode: Qd, MeasureLayout: $a } }, Hf = class extends ad {
    mount() {
      let { current: e2 } = this.node;
      e2 && (this.unmount = Dn(e2, (e3, t2) => (eo(this.node, t2, `Start`), (e4) => eo(this.node, e4, `End`))));
    }
    unmount() {
    }
  }, Uf = class extends ad {
    constructor() {
      super(...arguments), this.isActive = false;
    }
    onFocus() {
      let e2 = false;
      try {
        e2 = this.node.current.matches(`:focus-visible`);
      } catch {
        e2 = true;
      }
      !e2 || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, true), this.isActive = true);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive(`whileFocus`, false), this.isActive = false);
    }
    mount() {
      this.unmount = Ls(gi(this.node.current, `focus`, () => this.onFocus()), gi(this.node.current, `blur`, () => this.onBlur()));
    }
    unmount() {
    }
  }, Wf = class extends ad {
    mount() {
      let { current: e2 } = this.node;
      if (!e2) return;
      let { globalTapTarget: t2, propagate: n2 } = this.node.props;
      this.unmount = Nn(e2, (e3, t3) => (to(this.node, t3, `Start`), (e4, { success: t4 }) => to(this.node, e4, t4 ? `End` : `Cancel`)), { useGlobalTarget: t2, stopPropagation: n2?.tap === false });
    }
    unmount() {
    }
  }, Gf = /* @__PURE__ */ new WeakMap(), Kf = /* @__PURE__ */ new WeakMap(), qf = (e2) => {
    let t2 = Gf.get(e2.target);
    t2 && t2(e2);
  }, Jf = (e2) => {
    e2.forEach(qf);
  }, Yf = { some: 0, all: 1 }, Xf = class extends ad {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e2 = {} } = this.node.getProps(), { root: t2, margin: n2, amount: r2 = `some`, once: i2 } = e2, a2 = { root: t2 ? t2.current : void 0, rootMargin: n2, threshold: typeof r2 == `number` ? r2 : Yf[r2] };
      this.stopObserver = ro(this.node.current, a2, (e3) => {
        let { isIntersecting: t3 } = e3;
        if (this.isInView === t3 || (this.isInView = t3, i2 && !t3 && this.hasEnteredView)) return;
        t3 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive(`whileInView`, t3);
        let { onViewportEnter: n3, onViewportLeave: r3 } = this.node.getProps(), a3 = t3 ? n3 : r3;
        a3 && a3(e3);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e2, prevProps: t2 } = this.node;
      [`amount`, `margin`, `root`].some(io(e2, t2)) && this.startObserver();
    }
    unmount() {
      this.stopObserver?.(), this.hasEnteredView = false, this.isInView = false;
    }
  }, Zf = { inView: { Feature: Xf }, tap: { Feature: Wf }, focus: { Feature: Uf }, hover: { Feature: Hf } }, Qf = { layout: { ProjectionNode: Qd, MeasureLayout: $a } }, $f = ka({ ...Ef, ...Zf, ...Vf, ...Qf }, kf), ep = { renderer: kf, ...Ef, ...Zf }, { ...ep, ...Vf, ...Qf }, { ...Ef }, tp = 50, np = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }), rp = () => ({ time: 0, x: np(), y: np() }), ip = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }, ap = { start: 0, center: 0.5, end: 1 }, op = [0, 0], sp = { Enter: [[0, 1], [1, 1]], Exit: [[0, 0], [1, 0]], Any: [[1, 0], [0, 1]], All: [[0, 0], [1, 1]] }, cp = { x: 0, y: 0 }, lp = /* @__PURE__ */ new WeakMap(), up = /* @__PURE__ */ new WeakMap(), dp = /* @__PURE__ */ new WeakMap(), fp = /* @__PURE__ */ new WeakMap(), pp = /* @__PURE__ */ new WeakMap(), mp = (e2) => e2 === document.scrollingElement ? r : e2, hp = [[sp.Enter, `entry`], [sp.Exit, `exit`], [sp.Any, `cover`], [sp.All, `contain`]], gp = { start: 0, end: 1 }, _p = /* @__PURE__ */ new Map(), vp = () => ({ scrollX: O(0), scrollY: O(0), scrollXProgress: O(0), scrollYProgress: O(0) }), yp = (e2) => e2 ? !e2.current : false, bp = class extends cu {
    constructor() {
      super(...arguments), this.isEnabled = false;
    }
    add(e2) {
      (yl.has(e2) || Bl.has(e2)) && (this.isEnabled = true, this.update());
    }
    update() {
      this.set(this.isEnabled ? `transform` : `auto`);
    }
  }, xp = `easeInOut`, Sp = 20, Cp = (e2) => typeof e2 == `number`, wp = (e2) => e2.every(Cp), Tp = ls(), Ep = us, Dp = { some: 0, all: 1 }, Op = () => ({}), hf({ scrapeMotionValuesFromProps: Op, createRenderState: Op }), kp = {}, de(kp, { Group: () => jp, Item: () => Rp }), Ap = c(null), jp = _(bs), Mp = 50, Np = 25, Pp = /* @__PURE__ */ new Set([`auto`, `scroll`]), Fp = /* @__PURE__ */ new WeakMap(), Ip = /* @__PURE__ */ new WeakMap(), Lp = null, Rp = _(Os);
})), Bp = t((() => {
  zp();
}));
function Vp(e2) {
  for (var t2 = 0, n2, r2 = 0, i2 = e2.length; i2 >= 4; ++r2, i2 -= 4) n2 = 255 & e2.charCodeAt(r2) | (255 & e2.charCodeAt(++r2)) << 8 | (255 & e2.charCodeAt(++r2)) << 16 | (255 & e2.charCodeAt(++r2)) << 24, n2 = 1540483477 * (65535 & n2) + (59797 * (n2 >>> 16) << 16), n2 ^= n2 >>> 24, t2 = 1540483477 * (65535 & n2) + (59797 * (n2 >>> 16) << 16) ^ 1540483477 * (65535 & t2) + (59797 * (t2 >>> 16) << 16);
  switch (i2) {
    case 3:
      t2 ^= (255 & e2.charCodeAt(r2 + 2)) << 16;
    case 2:
      t2 ^= (255 & e2.charCodeAt(r2 + 1)) << 8;
    case 1:
      t2 ^= 255 & e2.charCodeAt(r2), t2 = 1540483477 * (65535 & t2) + (59797 * (t2 >>> 16) << 16);
  }
  return t2 ^= t2 >>> 13, t2 = 1540483477 * (65535 & t2) + (59797 * (t2 >>> 16) << 16), ((t2 ^ t2 >>> 15) >>> 0).toString(36);
}
var Hp = t((() => {
}));
export {
  De as $,
  Gn as A,
  Ro as B,
  ia as C,
  vi as D,
  du as E,
  _s as F,
  No as G,
  hs as H,
  ps as I,
  be as J,
  Yu as K,
  vs as L,
  Zn as M,
  fs as N,
  Eo as O,
  Ep as P,
  we as Q,
  Ao as R,
  Z as S,
  O as T,
  ko as U,
  zo as V,
  Lo as W,
  me as X,
  ve as Y,
  Te as Z,
  V as _,
  cf as a,
  vt as b,
  I as c,
  gf as d,
  Ee as et,
  bp as f,
  H as g,
  Et as h,
  rf as i,
  Oe as it,
  Kn as j,
  mt as k,
  cu as l,
  Tp as m,
  Vp as n,
  ye as nt,
  sa as o,
  Or as p,
  ue as q,
  Bp as r,
  pe as rt,
  $d as s,
  Hp as t,
  xe as tt,
  Ms as u,
  gs as v,
  $f as w,
  ds as x,
  zp as y,
  Zi as z
};
