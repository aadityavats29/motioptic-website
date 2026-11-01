import rows from "../content/works.json";
import { recordsCollection } from "./records.mjs";
import { t as e } from "./rolldown-runtime.OA-FSkXT.mjs";
import { B as t, F as n, R as r, T as i, c as a, f as o, o as s, u as c } from "./react.DcLFkBVj.mjs";
import { w as l } from "./motion.BpUkXwT2.mjs";
import { A as u, C as d, J as f, a as p, g as ee, n as te } from "./framer.BUZSVv-M.mjs";
function m(e2) {
  return new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
}
function h(e2, ...t2) {
  if (!e2) throw Error(`Assertion Error` + (t2.length > 0 ? `: ` + t2.join(` `) : ``));
}
function g(e2) {
  throw Error(`Unexpected value: ${e2}`);
}
function _(e2, t2, n2, r2) {
  h(e2 >= t2, e2, `outside lower bound for`, r2), h(e2 <= n2, e2, `outside upper bound for`, r2);
}
function v(e2) {
  return typeof e2 == `string`;
}
function y(e2) {
  return Number.isFinite(e2);
}
function b(e2) {
  return e2 === null;
}
function x(e2) {
  if (b(e2)) return 0;
  switch (e2.type) {
    case p.Array:
      return 1;
    case p.Boolean:
      return 2;
    case p.Color:
      return 3;
    case p.Date:
      return 4;
    case p.Enum:
      return 5;
    case p.File:
      return 6;
    case p.ResponsiveImage:
      return 10;
    case p.Link:
      return 7;
    case p.Number:
      return 8;
    case p.Object:
      return 9;
    case p.RichText:
      return 11;
    case p.String:
      return 12;
    case p.VectorSetItem:
      return 13;
    default:
      g(e2);
  }
}
function ne(e2) {
  let t2 = e2.readUint16(), n2 = [];
  for (let r2 = 0; r2 < t2; r2++) {
    let t3 = w.read(e2);
    n2.push(t3);
  }
  return { type: p.Array, value: n2 };
}
function re(e2, t2) {
  for (let n2 of (e2.writeUint16(t2.value.length), t2.value)) w.write(e2, n2);
}
function ie(e2, t2, n2) {
  let r2 = e2.value.length, i2 = t2.value.length;
  if (r2 < i2) return -1;
  if (r2 > i2) return 1;
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = e2.value[i3], a2 = t2.value[i3], o2 = w.compare(r3, a2, n2);
    if (o2 !== 0) return o2;
  }
  return 0;
}
function ae(e2) {
  return { type: p.Boolean, value: e2.readUint8() !== 0 };
}
function oe(e2, t2) {
  e2.writeUint8(t2.value ? 1 : 0);
}
function se(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function ce(e2) {
  return { type: p.Color, value: e2.readString() };
}
function le(e2, t2) {
  e2.writeString(t2.value);
}
function ue(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function de(e2) {
  let t2 = e2.readInt64(), n2 = new Date(t2);
  return { type: p.Date, value: n2.toISOString() };
}
function fe(e2, t2) {
  let n2 = new Date(t2.value).getTime();
  e2.writeInt64(n2);
}
function pe(e2, t2) {
  let n2 = new Date(e2.value), r2 = new Date(t2.value);
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function me(e2) {
  return { type: p.Enum, value: e2.readString() };
}
function he(e2, t2) {
  e2.writeString(t2.value);
}
function ge(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function _e(e2) {
  return { type: p.File, value: e2.readString() };
}
function ve(e2, t2) {
  e2.writeString(t2.value);
}
function ye(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function be(e2) {
  return { type: p.Link, value: e2.readJson() };
}
function xe(e2, t2) {
  e2.writeJson(t2.value);
}
function Se(e2, t2) {
  let n2 = JSON.stringify(e2.value), r2 = JSON.stringify(t2.value);
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function Ce(e2) {
  return { type: p.Number, value: e2.readFloat64() };
}
function we(e2, t2) {
  e2.writeFloat64(t2.value);
}
function Te(e2, t2) {
  return e2.value < t2.value ? -1 : e2.value > t2.value ? 1 : 0;
}
function Ee(e2) {
  let t2 = e2.readUint16(), n2 = {};
  for (let r2 = 0; r2 < t2; r2++) {
    let t3 = e2.readString();
    n2[t3] = w.read(e2);
  }
  return { type: p.Object, value: n2 };
}
function De(e2, t2) {
  let n2 = Object.entries(t2.value);
  for (let [t3, r2] of (e2.writeUint16(n2.length), n2)) e2.writeString(t3), w.write(e2, r2);
}
function Oe(e2, t2, n2) {
  let r2 = Object.keys(e2.value).sort(), i2 = Object.keys(t2.value).sort();
  if (r2.length < i2.length) return -1;
  if (r2.length > i2.length) return 1;
  for (let a2 = 0; a2 < r2.length; a2++) {
    let o2 = r2[a2], s2 = i2[a2];
    if (o2 < s2) return -1;
    if (o2 > s2) return 1;
    let c2 = e2.value[o2] ?? null, l2 = t2.value[s2] ?? null, u2 = w.compare(c2, l2, n2);
    if (u2 !== 0) return u2;
  }
  return 0;
}
function ke(e2) {
  return { type: p.ResponsiveImage, value: e2.readJson() };
}
function Ae(e2, t2) {
  e2.writeJson(t2.value);
}
function je(e2, t2) {
  let n2 = JSON.stringify(e2.value), r2 = JSON.stringify(t2.value);
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
function Me(e2) {
  let t2 = e2.readInt8();
  if (t2 === 0) return { type: p.RichText, value: e2.readUint32() };
  if (t2 === 1) return { type: p.RichText, value: e2.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ne(e2, t2) {
  if (y(t2.value)) {
    e2.writeInt8(0), e2.writeUint32(t2.value);
    return;
  }
  if (v(t2.value)) {
    e2.writeInt8(1), e2.writeString(t2.value);
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Pe(e2, t2) {
  let n2 = e2.value, r2 = t2.value;
  if (y(n2) && y(r2) || v(n2) && v(r2)) return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Fe(e2) {
  return { type: p.String, value: e2.readString() };
}
function Ie(e2, t2) {
  e2.writeString(t2.value);
}
function Le(e2, t2, n2) {
  let r2 = e2.value, i2 = t2.value;
  return n2.type === 0 && (r2 = e2.value.toLowerCase(), i2 = t2.value.toLowerCase()), r2 < i2 ? -1 : r2 > i2 ? 1 : 0;
}
function Re(e2) {
  return { type: p.VectorSetItem, value: e2.readUint32() };
}
function ze(e2, t2) {
  e2.writeUint32(t2.value);
}
function Be(e2, t2) {
  let n2 = e2.value, r2 = t2.value;
  return n2 < r2 ? -1 : n2 > r2 ? 1 : 0;
}
async function Ve(e2) {
  let t2 = Math.floor(W * (Math.random() + 1) * 2 ** (e2 - 1));
  await new Promise((e3) => {
    setTimeout(e3, t2);
  });
}
async function S(e2, t2) {
  let n2 = He(t2), r2 = [], i2 = 0;
  for (let e3 of n2) r2.push(`${e3.from}-${e3.to - 1}`), i2 += e3.to - e3.from;
  let a2 = new URL(e2), o2 = r2.join(`,`);
  a2.searchParams.set(`range`, o2);
  let s2 = await G(a2);
  if (s2.status !== 200) throw Error(`Request failed: ${s2.status} ${s2.statusText}`);
  let c2 = await s2.arrayBuffer(), l2 = new Uint8Array(c2);
  if (l2.length !== i2) throw Error(`Request failed: Unexpected response length`);
  let u2 = new Xe(), d2 = 0;
  for (let e3 of n2) {
    let t3 = e3.to - e3.from, n3 = d2 + t3, r3 = l2.subarray(d2, n3);
    u2.write(e3.from, r3), d2 = n3;
  }
  return t2.map((e3) => u2.read(e3.from, e3.to - e3.from));
}
function C(e2, t2) {
  let n2 = e2.length + t2.length, r2 = new Uint8Array(n2);
  return r2.set(e2, 0), r2.set(t2, e2.length), r2;
}
function He(e2) {
  h(e2.length > 0, `Must have at least one range`);
  let t2 = [...e2].sort((e3, t3) => e3.from - t3.from), n2 = [];
  for (let e3 of t2) {
    let t3 = n2.length - 1, r2 = n2[t3];
    r2 && e3.from <= r2.to ? n2[t3] = { from: r2.from, to: Math.max(r2.to, e3.to) } : n2.push(e3);
  }
  return n2;
}
var w, T, E, D, O, k, A, j, M, N, Ue, P, We, F, I, Ge, Ke, L, R, z, B, V, qe, H, Je, U, W, Ye, G, Xe, K, q, Ze, Qe, $e = e((() => {
  r(), f(), T = Object.create, E = Object.defineProperty, D = Object.getOwnPropertyDescriptor, O = Object.getOwnPropertyNames, k = Object.getPrototypeOf, A = Object.prototype.hasOwnProperty, j = (e2, t2, n2) => t2 in e2 ? E(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, M = (e2, t2) => function() {
    return t2 || (0, e2[O(e2)[0]])((t2 = { exports: {} }).exports, t2), t2.exports;
  }, N = (e2, t2, n2, r2) => {
    if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let i2 of O(t2)) A.call(e2, i2) || i2 === n2 || E(e2, i2, { get: () => t2[i2], enumerable: !(r2 = D(t2, i2)) || r2.enumerable });
    return e2;
  }, Ue = (e2, t2, n2) => (n2 = e2 == null ? {} : T(k(e2)), N(!t2 && e2 && e2.__esModule ? n2 : E(n2, `default`, { value: e2, enumerable: true }), e2)), P = (e2, t2, n2) => j(e2, typeof t2 == `symbol` ? t2 : t2 + ``, n2), We = Ue(M({ "../../../node_modules/dataloader/index.js"(e2, t2) {
    var n2, r2 = (function() {
      function e3(e4, t4) {
        if (typeof e4 != `function`) throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` + e4 + `.`);
        this._batchLoadFn = e4, this._maxBatchSize = (function(e5) {
          if (!(!e5 || false !== e5.batch)) return 1;
          var t5 = e5 && e5.maxBatchSize;
          if (t5 === void 0) return 1 / 0;
          if (typeof t5 != `number` || t5 < 1) throw TypeError(`maxBatchSize must be a positive number: ` + t5);
          return t5;
        })(t4), this._batchScheduleFn = (function(e5) {
          var t5 = e5 && e5.batchScheduleFn;
          if (t5 === void 0) return i2;
          if (typeof t5 != `function`) throw TypeError(`batchScheduleFn must be a function: ` + t5);
          return t5;
        })(t4), this._cacheKeyFn = (function(e5) {
          var t5 = e5 && e5.cacheKeyFn;
          if (t5 === void 0) return function(e6) {
            return e6;
          };
          if (typeof t5 != `function`) throw TypeError(`cacheKeyFn must be a function: ` + t5);
          return t5;
        })(t4), this._cacheMap = (function(e5) {
          if (!(!e5 || false !== e5.cache)) return null;
          var t5 = e5 && e5.cacheMap;
          if (t5 === void 0) return /* @__PURE__ */ new Map();
          if (t5 !== null) {
            var n3 = [`get`, `set`, `delete`, `clear`].filter(function(e6) {
              return t5 && typeof t5[e6] != `function`;
            });
            if (n3.length !== 0) throw TypeError(`Custom cacheMap missing methods: ` + n3.join(`, `));
          }
          return t5;
        })(t4), this._batch = null, this.name = t4 && t4.name ? t4.name : null;
      }
      var t3 = e3.prototype;
      return t3.load = function(e4) {
        if (e4 == null) throw TypeError(`The loader.load() function must be called with a value, but got: ` + String(e4) + `.`);
        var t4 = (function(e5) {
          var t5 = e5._batch;
          if (t5 !== null && !t5.hasDispatched && t5.keys.length < e5._maxBatchSize) return t5;
          var n4 = { hasDispatched: false, keys: [], callbacks: [] };
          return e5._batch = n4, e5._batchScheduleFn(function() {
            (function(e6, t6) {
              var n5;
              if (t6.hasDispatched = true, t6.keys.length === 0) {
                o2(t6);
                return;
              }
              try {
                n5 = e6._batchLoadFn(t6.keys);
              } catch (n6) {
                return a2(e6, t6, TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` + String(n6) + `.`));
              }
              if (!n5 || typeof n5.then != `function`) return a2(e6, t6, TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` + String(n5) + `.`));
              n5.then(function(e7) {
                if (!s2(e7)) throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` + String(e7) + `.`);
                if (e7.length !== t6.keys.length) throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` + String(t6.keys) + `

Values:
` + String(e7));
                o2(t6);
                for (var n6 = 0; n6 < t6.callbacks.length; n6++) {
                  var r4 = e7[n6];
                  r4 instanceof Error ? t6.callbacks[n6].reject(r4) : t6.callbacks[n6].resolve(r4);
                }
              }).catch(function(n6) {
                a2(e6, t6, n6);
              });
            })(e5, n4);
          }), n4;
        })(this), n3 = this._cacheMap, r3 = this._cacheKeyFn(e4);
        if (n3) {
          var i3 = n3.get(r3);
          if (i3) {
            var c2 = t4.cacheHits ||= [];
            return new Promise(function(e5) {
              c2.push(function() {
                e5(i3);
              });
            });
          }
        }
        t4.keys.push(e4);
        var l2 = new Promise(function(e5, n4) {
          t4.callbacks.push({ resolve: e5, reject: n4 });
        });
        return n3 && n3.set(r3, l2), l2;
      }, t3.loadMany = function(e4) {
        if (!s2(e4)) throw TypeError(`The loader.loadMany() function must be called with Array<key> but got: ` + e4 + `.`);
        for (var t4 = [], n3 = 0; n3 < e4.length; n3++) t4.push(this.load(e4[n3]).catch(function(e5) {
          return e5;
        }));
        return Promise.all(t4);
      }, t3.clear = function(e4) {
        var t4 = this._cacheMap;
        if (t4) {
          var n3 = this._cacheKeyFn(e4);
          t4.delete(n3);
        }
        return this;
      }, t3.clearAll = function() {
        var e4 = this._cacheMap;
        return e4 && e4.clear(), this;
      }, t3.prime = function(e4, t4) {
        var n3 = this._cacheMap;
        if (n3) {
          var r3, i3 = this._cacheKeyFn(e4);
          n3.get(i3) === void 0 && (t4 instanceof Error ? (r3 = Promise.reject(t4)).catch(function() {
          }) : r3 = Promise.resolve(t4), n3.set(i3, r3));
        }
        return this;
      }, e3;
    })(), i2 = typeof process == `object` && typeof process.nextTick == `function` ? function(e3) {
      n2 ||= Promise.resolve(), n2.then(function() {
        process.nextTick(e3);
      });
    } : typeof setImmediate == `function` ? function(e3) {
      setImmediate(e3);
    } : function(e3) {
      setTimeout(e3);
    };
    function a2(e3, t3, n3) {
      o2(t3);
      for (var r3 = 0; r3 < t3.keys.length; r3++) e3.clear(t3.keys[r3]), t3.callbacks[r3].reject(n3);
    }
    function o2(e3) {
      if (e3.cacheHits) for (var t3 = 0; t3 < e3.cacheHits.length; t3++) e3.cacheHits[t3]();
    }
    function s2(e3) {
      return typeof e3 == `object` && !!e3 && typeof e3.length == `number` && (e3.length === 0 || e3.length > 0 && Object.prototype.hasOwnProperty.call(e3, e3.length - 1));
    }
    t2.exports = r2;
  } })()), F = { Uint8: 1, Uint16: 2, Uint32: 4, BigUint64: 8, Int8: 1, Int16: 2, Int32: 4, BigInt64: 8, Float32: 4, Float64: 8 }, I = class {
    getOffset() {
      return this.offset;
    }
    ensureLength(e2) {
      let t2 = this.bytes.length;
      if (!(this.offset + e2 <= t2)) throw Error(`Reading out of bounds`);
    }
    readUint8() {
      let e2 = F.Uint8;
      this.ensureLength(e2);
      let t2 = this.view.getUint8(this.offset);
      return this.offset += e2, t2;
    }
    readUint16() {
      let e2 = F.Uint16;
      this.ensureLength(e2);
      let t2 = this.view.getUint16(this.offset);
      return this.offset += e2, t2;
    }
    readUint32() {
      let e2 = F.Uint32;
      this.ensureLength(e2);
      let t2 = this.view.getUint32(this.offset);
      return this.offset += e2, t2;
    }
    readUint64() {
      let e2 = this.readBigUint64();
      return Number(e2);
    }
    readBigUint64() {
      let e2 = F.BigUint64;
      this.ensureLength(e2);
      let t2 = this.view.getBigUint64(this.offset);
      return this.offset += e2, t2;
    }
    readInt8() {
      let e2 = F.Int8;
      this.ensureLength(e2);
      let t2 = this.view.getInt8(this.offset);
      return this.offset += e2, t2;
    }
    readInt16() {
      let e2 = F.Int16;
      this.ensureLength(e2);
      let t2 = this.view.getInt16(this.offset);
      return this.offset += e2, t2;
    }
    readInt32() {
      let e2 = F.Int32;
      this.ensureLength(e2);
      let t2 = this.view.getInt32(this.offset);
      return this.offset += e2, t2;
    }
    readInt64() {
      let e2 = this.readBigInt64();
      return Number(e2);
    }
    readBigInt64() {
      let e2 = F.BigInt64;
      this.ensureLength(e2);
      let t2 = this.view.getBigInt64(this.offset);
      return this.offset += e2, t2;
    }
    readFloat32() {
      let e2 = F.Float32;
      this.ensureLength(e2);
      let t2 = this.view.getFloat32(this.offset);
      return this.offset += e2, t2;
    }
    readFloat64() {
      let e2 = F.Float64;
      this.ensureLength(e2);
      let t2 = this.view.getFloat64(this.offset);
      return this.offset += e2, t2;
    }
    readBytes(e2) {
      let t2 = this.offset, n2 = t2 + e2, r2 = this.bytes.subarray(t2, n2);
      return this.offset = n2, r2;
    }
    readString() {
      let e2 = this.readUint32(), t2 = this.readBytes(e2);
      return window.motiLocalize(this.decoder.decode(t2));
    }
    readJson() {
      let e2 = this.readString();
      return JSON.parse(e2);
    }
    constructor(e2) {
      this.bytes = e2, P(this, `offset`, 0), P(this, `view`), P(this, `decoder`, new TextDecoder()), this.view = m(this.bytes);
    }
  }, t !== void 0 && t.requestIdleCallback, Ge = 1024, Ke = 1.5, L = (e2) => 2 ** e2 - 1, R = (e2) => -(2 ** (e2 - 1)), z = (e2) => 2 ** (e2 - 1) - 1, B = { Uint8: 0, Uint16: 0, Uint32: 0, Uint64: 0, BigUint64: 0, Int8: R(8), Int16: R(16), Int32: R(32), Int64: -(2 ** 53 - 1), BigInt64: -(BigInt(2) ** BigInt(63)) }, V = { Uint8: L(8), Uint16: L(16), Uint32: L(32), Uint64: 2 ** 53 - 1, BigUint64: BigInt(2) ** BigInt(64) - BigInt(1), Int8: z(8), Int16: z(16), Int32: z(32), Int64: 2 ** 53 - 1, BigInt64: BigInt(2) ** BigInt(63) - BigInt(1) }, qe = class {
    getOffset() {
      return this.offset;
    }
    slice(e2 = 0, t2 = this.offset) {
      return this.bytes.slice(e2, t2);
    }
    subarray(e2 = 0, t2 = this.offset) {
      return this.bytes.subarray(e2, t2);
    }
    ensureLength(e2) {
      let t2 = this.bytes.length;
      if (this.offset + e2 <= t2) return;
      let n2 = new Uint8Array(Math.ceil(t2 * Ke) + e2);
      n2.set(this.bytes), this.bytes = n2, this.view = m(n2);
    }
    writeUint8(e2) {
      _(e2, B.Uint8, V.Uint8, `Uint8`);
      let t2 = F.Uint8;
      this.ensureLength(t2), this.view.setUint8(this.offset, e2), this.offset += t2;
    }
    writeUint16(e2) {
      _(e2, B.Uint16, V.Uint16, `Uint16`);
      let t2 = F.Uint16;
      this.ensureLength(t2), this.view.setUint16(this.offset, e2), this.offset += t2;
    }
    writeUint32(e2) {
      _(e2, B.Uint32, V.Uint32, `Uint32`);
      let t2 = F.Uint32;
      this.ensureLength(t2), this.view.setUint32(this.offset, e2), this.offset += t2;
    }
    writeUint64(e2) {
      _(e2, B.Uint64, V.Uint64, `Uint64`);
      let t2 = BigInt(e2);
      this.writeBigUint64(t2);
    }
    writeBigUint64(e2) {
      _(e2, B.BigUint64, V.BigUint64, `BigUint64`);
      let t2 = F.BigUint64;
      this.ensureLength(t2), this.view.setBigUint64(this.offset, e2), this.offset += t2;
    }
    writeInt8(e2) {
      _(e2, B.Int8, V.Int8, `Int8`);
      let t2 = F.Int8;
      this.ensureLength(t2), this.view.setInt8(this.offset, e2), this.offset += t2;
    }
    writeInt16(e2) {
      _(e2, B.Int16, V.Int16, `Int16`);
      let t2 = F.Int16;
      this.ensureLength(t2), this.view.setInt16(this.offset, e2), this.offset += t2;
    }
    writeInt32(e2) {
      _(e2, B.Int32, V.Int32, `Int32`);
      let t2 = F.Int32;
      this.ensureLength(t2), this.view.setInt32(this.offset, e2), this.offset += t2;
    }
    writeInt64(e2) {
      _(e2, B.Int64, V.Int64, `Int64`);
      let t2 = BigInt(e2);
      this.writeBigInt64(t2);
    }
    writeBigInt64(e2) {
      _(e2, B.BigInt64, V.BigInt64, `BigInt64`);
      let t2 = F.BigInt64;
      this.ensureLength(t2), this.view.setBigInt64(this.offset, e2), this.offset += t2;
    }
    writeFloat32(e2) {
      let t2 = F.Float32;
      this.ensureLength(t2), this.view.setFloat32(this.offset, e2), this.offset += t2;
    }
    writeFloat64(e2) {
      let t2 = F.Float64;
      this.ensureLength(t2), this.view.setFloat64(this.offset, e2), this.offset += t2;
    }
    writeBytes(e2) {
      let t2 = e2.length;
      this.ensureLength(t2), this.bytes.set(e2, this.offset), this.offset += t2;
    }
    encodeString(e2) {
      let t2 = this.encodedStrings.get(e2);
      if (t2) return t2;
      let n2 = this.encoder.encode(e2);
      return this.encodedStrings.set(e2, n2), n2;
    }
    writeString(e2) {
      let t2 = this.encodeString(e2), n2 = t2.length;
      this.writeUint32(n2), this.writeBytes(t2);
    }
    writeJson(e2) {
      let t2 = JSON.stringify(e2);
      this.writeString(t2);
    }
    constructor() {
      P(this, `offset`, 0), P(this, `bytes`, new Uint8Array(Ge)), P(this, `view`, m(this.bytes)), P(this, `encoder`, new TextEncoder()), P(this, `encodedStrings`, /* @__PURE__ */ new Map());
    }
  }, H = class e2 {
    static fromString(t2) {
      let [n2, r2, i2] = t2.split(`/`).map(Number);
      return h(y(n2), `Invalid chunkId`), h(y(r2), `Invalid offset`), h(y(i2), `Invalid length`), new e2(n2, r2, i2);
    }
    toString() {
      return `${this.chunkId}/${this.offset}/${this.length}`;
    }
    static read(t2) {
      return new e2(t2.readUint16(), t2.readUint32(), t2.readUint32());
    }
    write(e3) {
      e3.writeUint16(this.chunkId), e3.writeUint32(this.offset), e3.writeUint32(this.length);
    }
    compare(e3) {
      return this.chunkId < e3.chunkId ? -1 : this.chunkId > e3.chunkId ? 1 : this.offset < e3.offset ? -1 : this.offset > e3.offset ? 1 : (h(this.length === e3.length), 0);
    }
    constructor(e3, t2, n2) {
      this.chunkId = e3, this.offset = t2, this.length = n2;
    }
  }, ((e2) => {
    e2.read = function(e3) {
      let t2 = e3.readUint8();
      switch (t2) {
        case 0:
          return null;
        case 1:
          return ne(e3);
        case 2:
          return ae(e3);
        case 3:
          return ce(e3);
        case 4:
          return de(e3);
        case 5:
          return me(e3);
        case 6:
          return _e(e3);
        case 7:
          return be(e3);
        case 8:
          return Ce(e3);
        case 9:
          return Ee(e3);
        case 10:
          return ke(e3);
        case 11:
          return Me(e3);
        case 12:
          return Fe(e3);
        case 13:
          return Re(e3);
        default:
          g(t2);
      }
    }, e2.write = function(e3, t2) {
      let n2 = x(t2);
      if (e3.writeUint8(n2), !b(t2)) switch (t2.type) {
        case p.Array:
          return re(e3, t2);
        case p.Boolean:
          return oe(e3, t2);
        case p.Color:
          return le(e3, t2);
        case p.Date:
          return fe(e3, t2);
        case p.Enum:
          return he(e3, t2);
        case p.File:
          return ve(e3, t2);
        case p.Link:
          return xe(e3, t2);
        case p.Number:
          return we(e3, t2);
        case p.Object:
          return De(e3, t2);
        case p.ResponsiveImage:
          return Ae(e3, t2);
        case p.RichText:
          return Ne(e3, t2);
        case p.VectorSetItem:
          return ze(e3, t2);
        case p.String:
          return Ie(e3, t2);
        default:
          g(t2);
      }
    }, e2.compare = function(e3, t2, n2) {
      let r2 = x(e3), i2 = x(t2);
      if (r2 < i2) return -1;
      if (r2 > i2) return 1;
      if (b(e3) || b(t2)) return 0;
      switch (e3.type) {
        case p.Array:
          return h(t2.type === p.Array), ie(e3, t2, n2);
        case p.Boolean:
          return h(t2.type === p.Boolean), se(e3, t2);
        case p.Color:
          return h(t2.type === p.Color), ue(e3, t2);
        case p.Date:
          return h(t2.type === p.Date), pe(e3, t2);
        case p.Enum:
          return h(t2.type === p.Enum), ge(e3, t2);
        case p.File:
          return h(t2.type === p.File), ye(e3, t2);
        case p.Link:
          return h(t2.type === p.Link), Se(e3, t2);
        case p.Number:
          return h(t2.type === p.Number), Te(e3, t2);
        case p.Object:
          return h(t2.type === p.Object), Oe(e3, t2, n2);
        case p.ResponsiveImage:
          return h(t2.type === p.ResponsiveImage), je(e3, t2);
        case p.RichText:
          return h(t2.type === p.RichText), Pe(e3, t2);
        case p.VectorSetItem:
          return h(t2.type === p.VectorSetItem), Be(e3, t2);
        case p.String:
          return h(t2.type === p.String), Le(e3, t2, n2);
        default:
          g(e3);
      }
    };
  })(w ||= {}), Je = class e2 {
    sortEntries() {
      this.entries.sort((e3, t2) => {
        for (let n2 = 0; n2 < this.fieldNames.length; n2++) {
          let r2 = e3.values[n2], i2 = t2.values[n2], a2 = w.compare(r2, i2, this.options.collation);
          if (a2 !== 0) return a2;
        }
        return e3.pointer.compare(t2.pointer);
      });
    }
    static deserialize(t2) {
      let n2 = new I(t2), r2 = n2.readJson(), i2 = n2.readUint8(), a2 = [];
      for (let e3 = 0; e3 < i2; e3++) {
        let e4 = n2.readString();
        a2.push(e4);
      }
      let o2 = new e2(a2, { collation: r2 }), s2 = n2.readUint32();
      for (let e3 = 0; e3 < s2; e3++) {
        let e4 = [];
        for (let t4 = 0; t4 < i2; t4++) {
          let t5 = w.read(n2);
          e4.push(t5);
        }
        let t3 = H.read(n2);
        o2.entries.push({ values: e4, pointer: t3 });
      }
      return o2;
    }
    serialize() {
      let e3 = new qe();
      for (let t2 of (e3.writeJson(this.options.collation), e3.writeUint8(this.fieldNames.length), this.fieldNames)) e3.writeString(t2);
      for (let t2 of (this.sortEntries(), e3.writeUint32(this.entries.length), this.entries)) {
        let { values: n2, pointer: r2 } = t2;
        for (let t3 of n2) w.write(e3, t3);
        r2.write(e3);
      }
      return e3.subarray();
    }
    addItem(e3, t2) {
      let n2 = this.fieldNames.map((t3) => e3.getField(t3) ?? null);
      this.entries.push({ values: n2, pointer: t2 });
    }
    constructor(e3, t2) {
      this.fieldNames = e3, this.options = t2, P(this, `entries`, []);
    }
  }, U = 3, W = 250, Ye = [408, 429, 500, 502, 503, 504], G = async (e2, t2) => {
    let n2 = 0;
    for (; ; ) {
      try {
        let r2 = await fetch(e2, t2);
        if (!Ye.includes(r2.status) || ++n2 > U) return r2;
      } catch (e3) {
        if (t2?.signal?.aborted || ++n2 > U) throw e3;
      }
      await Ve(n2);
    }
  }, Xe = class {
    read(e2, t2) {
      for (let n2 of this.chunks) {
        if (e2 < n2.start) break;
        if (e2 > n2.end) continue;
        if (e2 + t2 > n2.end) break;
        let r2 = e2 - n2.start, i2 = r2 + t2;
        return n2.data.slice(r2, i2);
      }
      throw Error(`Missing data`);
    }
    write(e2, t2) {
      let n2 = e2, r2 = n2 + t2.length, i2 = 0, a2 = this.chunks.length;
      for (; i2 < a2; i2++) {
        let e3 = this.chunks[i2];
        if (h(e3, `Missing chunk`), !(n2 > e3.end)) {
          if (n2 > e3.start) {
            let r3 = n2 - e3.start;
            t2 = C(e3.data.subarray(0, r3), t2), n2 = e3.start;
          }
          break;
        }
      }
      for (; a2 > i2; a2--) {
        let e3 = this.chunks[a2 - 1];
        if (h(e3, `Missing chunk`), !(r2 < e3.start)) {
          if (r2 < e3.end) {
            let n3 = r2 - e3.start, i3 = e3.data.subarray(n3);
            t2 = C(t2, i3), r2 = e3.end;
          }
          break;
        }
      }
      let o2 = { start: n2, end: r2, data: t2 }, s2 = a2 - i2;
      this.chunks.splice(i2, s2, o2);
    }
    constructor() {
      P(this, `chunks`, []);
    }
  }, K = class {
    async loadModel() {
      let [e2] = await S(this.options.url, [this.options.range]);
      return h(e2, `Failed to load model`), Je.deserialize(e2);
    }
    async getModel() {
      return this.modelPromise ??= this.loadModel(), this.model ??= await this.modelPromise, this.model;
    }
    async lookupItems(e2) {
      h(e2.length === this.fields.length, `Invalid query length`);
      let t2 = await this.getModel(), n2 = e2.reduce((e3, t3, n3) => e3.flatMap((e4) => {
        switch (t3.type) {
          case `All`:
            return [e4];
          case `Equals`:
            return this.queryEquals(e4, t3, n3);
          case `NotEquals`:
            return this.queryNotEquals(e4, t3, n3);
          case `LessThan`:
            return this.queryLessThan(e4, t3, n3);
          case `GreaterThan`:
            return this.queryGreaterThan(e4, t3, n3);
          case `Contains`:
            return this.queryContains(e4, t3, n3);
          case `StartsWith`:
            return this.queryStartsWith(e4, t3, n3);
          case `EndsWith`:
            return this.queryEndsWith(e4, t3, n3);
          default:
            g(t3);
        }
      }), [t2.entries]), r2 = [];
      for (let e3 of n2) for (let t3 of e3) {
        let e4 = {};
        for (let n3 = 0; n3 < this.options.fieldNames.length; n3++) {
          let r3 = this.options.fieldNames[n3];
          e4[r3] = t3.values[n3];
        }
        r2.push({ pointer: t3.pointer.toString(), data: e4 });
      }
      return r2;
    }
    queryEquals(e2, t2, n2) {
      let r2 = this.getLeftMost(e2, n2, t2.value), i2 = this.getRightMost(e2, n2, t2.value), a2 = e2.slice(r2, i2 + 1);
      return a2.length > 0 ? [a2] : [];
    }
    queryNotEquals(e2, t2, n2) {
      let r2 = this.getLeftMost(e2, n2, t2.value), i2 = this.getRightMost(e2, n2, t2.value), a2 = [], o2 = e2.slice(0, r2);
      o2.length > 0 && a2.push(o2);
      let s2 = e2.slice(i2 + 1);
      return s2.length > 0 && a2.push(s2), a2;
    }
    queryLessThan(e2, t2, n2) {
      let r2 = this.getRightMost(e2, n2, null);
      if (e2 = e2.slice(r2 + 1), t2.inclusive) {
        let r3 = this.getRightMost(e2, n2, t2.value), i3 = e2.slice(0, r3 + 1);
        return i3.length > 0 ? [i3] : [];
      }
      let i2 = this.getLeftMost(e2, n2, t2.value), a2 = e2.slice(0, i2);
      return a2.length > 0 ? [a2] : [];
    }
    queryGreaterThan(e2, t2, n2) {
      let r2 = this.getRightMost(e2, n2, null);
      if (e2 = e2.slice(r2 + 1), t2.inclusive) {
        let r3 = this.getLeftMost(e2, n2, t2.value), i3 = e2.slice(r3);
        return i3.length > 0 ? [i3] : [];
      }
      let i2 = this.getRightMost(e2, n2, t2.value), a2 = e2.slice(i2 + 1);
      return a2.length > 0 ? [a2] : [];
    }
    queryContains(e2, t2, n2) {
      return this.findItems(e2, n2, (e3) => {
        if (e3?.type !== p.String || t2.value?.type !== p.String) return false;
        let n3 = e3.value, r2 = t2.value.value;
        return this.collation.type === 0 && (n3 = n3.toLowerCase(), r2 = r2.toLowerCase()), n3.includes(r2);
      });
    }
    queryStartsWith(e2, t2, n2) {
      return this.findItems(e2, n2, (e3) => {
        if (e3?.type !== p.String || t2.value?.type !== p.String) return false;
        let n3 = e3.value, r2 = t2.value.value;
        return this.collation.type === 0 && (n3 = n3.toLowerCase(), r2 = r2.toLowerCase()), n3.startsWith(r2);
      });
    }
    queryEndsWith(e2, t2, n2) {
      return this.findItems(e2, n2, (e3) => {
        if (e3?.type !== p.String || t2.value?.type !== p.String) return false;
        let n3 = e3.value, r2 = t2.value.value;
        return this.collation.type === 0 && (n3 = n3.toLowerCase(), r2 = r2.toLowerCase()), n3.endsWith(r2);
      });
    }
    getLeftMost(e2, t2, n2) {
      let r2 = 0, i2 = e2.length;
      for (; r2 < i2; ) {
        let a2 = r2 + i2 >> 1, o2 = e2[a2].values[t2];
        0 > w.compare(o2, n2, this.collation) ? r2 = a2 + 1 : i2 = a2;
      }
      return r2;
    }
    getRightMost(e2, t2, n2) {
      let r2 = 0, i2 = e2.length;
      for (; r2 < i2; ) {
        let a2 = r2 + i2 >> 1, o2 = e2[a2].values[t2];
        w.compare(o2, n2, this.collation) > 0 ? i2 = a2 : r2 = a2 + 1;
      }
      return i2 - 1;
    }
    findItems(e2, t2, n2) {
      let r2 = [], i2 = 0;
      for (let a2 = 0; a2 < e2.length; a2++) {
        let o2 = e2[a2].values[t2];
        if (!n2(o2)) {
          if (i2 < a2) {
            let t3 = e2.slice(i2, a2);
            r2.push(t3);
          }
          i2 = a2 + 1;
        }
      }
      if (i2 < e2.length) {
        let t3 = e2.slice(i2);
        r2.push(t3);
      }
      return r2;
    }
    constructor(e2) {
      this.options = e2, P(this, `schema`), P(this, `fields`), P(this, `supportedLookupTypes`, [`All`, `Equals`, `NotEquals`, `LessThan`, `GreaterThan`, `Contains`, `StartsWith`, `EndsWith`]), P(this, `modelPromise`), P(this, `model`), P(this, `collation`);
      let t2 = {}, n2 = [];
      for (let e3 of this.options.fieldNames) {
        let r2 = this.options.collectionSchema[e3];
        h(r2, `Missing definition for field`, e3), t2[e3] = r2, n2.push({ type: `Identifier`, name: e3 });
      }
      this.schema = t2, this.fields = n2, this.collation = this.options.collation;
    }
  }, q = class e2 {
    static read(t2) {
      let n2 = new e2(), r2 = t2.readUint16();
      for (let e3 = 0; e3 < r2; e3++) {
        let e4 = t2.readString(), r3 = w.read(t2);
        n2.setField(e4, r3);
      }
      return n2;
    }
    write(e3) {
      for (let [t2, n2] of (e3.writeUint16(this.fields.size), this.fields)) e3.writeString(t2), w.write(e3, n2);
    }
    getData() {
      let e3 = {};
      for (let [t2, n2] of this.fields) e3[t2] = n2;
      return e3;
    }
    setField(e3, t2) {
      this.fields.set(e3, t2);
    }
    getField(e3) {
      return this.fields.get(e3);
    }
    constructor() {
      P(this, `fields`, /* @__PURE__ */ new Map());
    }
  }, Ze = class {
    scanItems() {
      return this.itemsPromise ??= G(this.url).then(async (e2) => {
        if (!e2.ok) throw Error(`Request failed: ${e2.status} ${e2.statusText}`);
        let t2 = await e2.arrayBuffer(), n2 = new I(new Uint8Array(t2)), r2 = [], i2 = n2.readUint32();
        for (let e3 = 0; e3 < i2; e3++) {
          let e4 = n2.getOffset(), t3 = q.read(n2), i3 = n2.getOffset() - e4, a2 = new H(this.id, e4, i3).toString(), o2 = { pointer: a2, data: t3.getData() };
          this.itemLoader.prime(a2, o2), r2.push(o2);
        }
        return r2;
      }), this.itemsPromise;
    }
    resolveItem(e2) {
      return this.itemLoader.load(e2);
    }
    constructor(e2, t2) {
      this.id = e2, this.url = t2, P(this, `itemsPromise`), P(this, `itemLoader`, new We.default(async (e3) => {
        let t3 = e3.map((e4) => {
          let t4 = H.fromString(e4);
          return { from: t4.offset, to: t4.offset + t4.length };
        });
        return (await S(this.url, t3)).map((t4, n2) => {
          let r2 = new I(t4), i2 = q.read(r2), a2 = e3[n2];
          return h(a2, `Missing pointer`), { pointer: a2, data: i2.getData() };
        });
      }));
    }
  }, Qe = class {
    async scanItems() {
      return (await Promise.all(this.chunks.map(async (e2) => e2.scanItems()))).flat();
    }
    resolveItems(e2) {
      return Promise.all(e2.map((e3) => {
        let t2 = H.fromString(e3), n2 = this.chunks[t2.chunkId];
        return h(n2, `Missing chunk`), n2.resolveItem(e3);
      }));
    }
    compareItems(e2, t2) {
      let n2 = H.fromString(e2.pointer), r2 = H.fromString(t2.pointer);
      return n2.compare(r2);
    }
    compareValues(e2, t2, n2) {
      return w.compare(e2, t2, n2);
    }
    constructor(e2) {
      this.options = e2, P(this, `id`), P(this, `schema`), P(this, `indexes`), P(this, `resolveRichText`), P(this, `resolveVectorSetItem`), P(this, `chunks`), this.chunks = this.options.chunks.map((e3, t2) => new Ze(t2, e3)), this.schema = e2.schema, this.indexes = e2.indexes, this.resolveRichText = e2.resolveRichText, this.resolveVectorSetItem = e2.resolveVectorSetItem, this.id = e2.id;
    }
  };
}));
function et(e2) {
  return typeof e2 == `object` && !!e2 && !o(e2) && rt in e2;
}
function tt(e2, ...t2) {
  if (!e2) throw Error(`Assertion Error` + (t2.length > 0 ? `: ` + t2.join(` `) : ``));
}
function nt(e2) {
  let t2 = /* @__PURE__ */ new Map();
  return (r2) => {
    let i2 = t2.get(r2);
    if (i2) return i2;
    let o2 = (function t3(r3) {
      switch (r3[0]) {
        case 1: {
          let [, ...e3] = r3;
          return c(n, void 0, ...e3.map(t3));
        }
        case 2: {
          let [, e3, ...n2] = r3;
          return c(ee, e3, ...n2.map(t3));
        }
        case 3: {
          let [, n2, i3, o3] = r3;
          for (let e3 of o3) {
            let n3 = i3[e3];
            n3 && (i3[e3] = t3(n3));
          }
          let s2 = e2[n2];
          return tt(s2, `Module not found`), et(s2) && s2.preload(), a(te, { componentIdentifier: n2, children: (e3) => a(s2, { ...e3, ...i3 }) });
        }
        case 4: {
          let [, e3, n2, ...i3] = r3, a2 = i3.map(t3);
          return c(e3 === `a` ? l.a : e3, n2, ...a2);
        }
        case 5: {
          let [, e3] = r3;
          return e3;
        }
      }
    })(JSON.parse(r2));
    return t2.set(r2, o2), o2;
  };
}
var J, rt, it, at = e((() => {
  r(), s(), f(), i(), t !== void 0 && t.requestIdleCallback, rt = `preload`, it = ((J = it || {})[J.Fragment = 1] = `Fragment`, J[J.Link = 2] = `Link`, J[J.Module = 3] = `Module`, J[J.Tag = 4] = `Tag`, J[J.Text = 5] = `Text`, J);
})), Y, ot, X, st, ct, lt, ut, dt, Z, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, Q, $, It, Lt, Rt, zt, Bt = e((() => {
  f(), $e(), at(), Y = { bdUmP3uDu: { isNullable: true, type: p.String }, BXB57XQsa: { isNullable: true, type: p.String }, createdAt: { isNullable: true, type: p.Date }, CxKh9KQbJ: { isNullable: true, type: p.String }, DO9aekb2c: { isNullable: true, type: p.String }, e8cSi32aA: { isNullable: true, type: p.String }, EPBvlJIcP: { isNullable: true, type: p.ResponsiveImage }, FqXanvpX5: { isNullable: true, type: p.String }, H8rgyFyZY: { isNullable: true, type: p.String }, Ha3RQdXm7: { isNullable: true, type: p.String }, Hs7jsGfdD: { isNullable: true, type: p.String }, id: { isNullable: false, type: p.String }, JBYwxjGF4: { isNullable: true, type: p.ResponsiveImage }, JsOqc3mxP: { isNullable: true, type: p.String }, kEYUjnjEZ: { isNullable: true, type: p.String }, Mn0IBRXvx: { isNullable: true, type: p.Link }, nextItemId: { isNullable: true, type: p.String }, nwUvxnaYS: { isNullable: true, type: p.ResponsiveImage }, poF0kbdXB: { isNullable: true, type: p.String }, previousItemId: { isNullable: true, type: p.String }, QF04XtOqX: { isNullable: true, type: p.String }, updatedAt: { isNullable: true, type: p.Date }, vcvU8M3f9: { isNullable: true, type: p.String }, vS6K0tFTc: { isNullable: true, type: p.String }, xiCI7vhC_: { isNullable: true, type: p.String }, xONEH8tdU: { isNullable: true, type: p.ResponsiveImage }, XPyR5q4iP: { isNullable: true, type: p.String } }, ot = [`id`], X = { type: 1 }, st = [`previousItemId`], ct = [`nextItemId`], lt = [`id`, `FqXanvpX5`], ut = [`FqXanvpX5`, `id`], dt = [`XPyR5q4iP`], Z = { type: 0 }, ft = [`FqXanvpX5`], pt = [`QF04XtOqX`], mt = [`BXB57XQsa`], ht = [`vcvU8M3f9`], gt = [`JBYwxjGF4`], _t = [`DO9aekb2c`], vt = [`xiCI7vhC_`], yt = [`Ha3RQdXm7`], bt = [`bdUmP3uDu`], xt = [`H8rgyFyZY`], St = [`CxKh9KQbJ`], Ct = [`poF0kbdXB`], wt = [`Hs7jsGfdD`], Tt = [`vS6K0tFTc`], Et = [`xONEH8tdU`], Dt = [`EPBvlJIcP`], Ot = [`JsOqc3mxP`], kt = [`kEYUjnjEZ`], At = [`e8cSi32aA`], jt = [`Mn0IBRXvx`], Mt = [`nwUvxnaYS`], Nt = [], Pt = (e2) => {
    let t2 = Nt[e2];
    if (t2) return t2().then((e3) => e3.default);
  }, Ft = nt({}), Q = new d(), $ = { collectionByLocaleId: { default: recordsCollection(rows, {"Title": "XPyR5q4iP", "Slug": "FqXanvpX5", "Tag 1": "QF04XtOqX", "Tag 2": "BXB57XQsa", "Tag 3": "vcvU8M3f9", "Cover Image": "JBYwxjGF4", "List Title 1": "DO9aekb2c", "List SubTitle 1": "xiCI7vhC_", "List Title 2": "Ha3RQdXm7", "List SubTitle 2": "bdUmP3uDu", "Heading 1": "H8rgyFyZY", "Description 1": "CxKh9KQbJ", "Heading 2": "poF0kbdXB", "Description 2": "Hs7jsGfdD", "Description 3": "vS6K0tFTc", "Detail Image 1": "xONEH8tdU", "Detail Image 2": "EPBvlJIcP", "Heading 3": "JsOqc3mxP", "Description 4": "kEYUjnjEZ", "Button Text": "e8cSi32aA", "Button Link": "Mn0IBRXvx", "Banner Image": "nwUvxnaYS", "Created": "createdAt", "Updated": "updatedAt", "Previous": "previousItemId", "Next": "nextItemId"}, new Qe({ chunks: [], indexes: [], schema: Y, resolveRichText: Ft, resolveVectorSetItem: Pt })) }, displayName: `Work Single`, id: `012b5d66-8d9f-4f0c-9a3a-8c185973c282` }, It = $, u($, { XPyR5q4iP: { defaultValue: ``, title: `Title`, type: p.String }, FqXanvpX5: { preventLocalization: false, title: `Slug`, type: p.String }, QF04XtOqX: { defaultValue: ``, title: `Tag 1`, type: p.String }, BXB57XQsa: { defaultValue: ``, title: `Tag 2`, type: p.String }, vcvU8M3f9: { defaultValue: ``, title: `Tag 3`, type: p.String }, JBYwxjGF4: { title: `Cover Image`, type: p.ResponsiveImage }, DO9aekb2c: { defaultValue: ``, title: `List Title 1`, type: p.String }, xiCI7vhC_: { defaultValue: ``, title: `List SubTitle 1`, type: p.String }, Ha3RQdXm7: { defaultValue: ``, title: `List Title 2`, type: p.String }, bdUmP3uDu: { defaultValue: ``, title: `List SubTitle 2`, type: p.String }, H8rgyFyZY: { defaultValue: ``, title: `Heading 1`, type: p.String }, CxKh9KQbJ: { defaultValue: ``, displayTextArea: true, title: `Decription 1`, type: p.String }, poF0kbdXB: { defaultValue: ``, title: `Heading 2`, type: p.String }, Hs7jsGfdD: { defaultValue: ``, displayTextArea: true, title: `Decription 2`, type: p.String }, vS6K0tFTc: { defaultValue: ``, displayTextArea: true, title: `Decription 3`, type: p.String }, xONEH8tdU: { title: `Detail Image 1`, type: p.ResponsiveImage }, EPBvlJIcP: { title: `Detail Image 2`, type: p.ResponsiveImage }, JsOqc3mxP: { defaultValue: ``, title: `Heading 3`, type: p.String }, kEYUjnjEZ: { defaultValue: ``, displayTextArea: true, title: `Decription 4`, type: p.String }, e8cSi32aA: { defaultValue: ``, title: `Button Text`, type: p.String }, Mn0IBRXvx: { title: `Button Link`, type: p.Link }, nwUvxnaYS: { title: `Banner Image`, type: p.ResponsiveImage }, createdAt: { title: `Created`, type: p.Date }, updatedAt: { title: `Updated`, type: p.Date }, previousItemId: { dataIdentifier: `local-module:collection/Q1V1DlgrJ:default`, title: `Previous`, type: p.CollectionReference }, nextItemId: { dataIdentifier: `local-module:collection/Q1V1DlgrJ:default`, title: `Next`, type: p.CollectionReference } }), Lt = {}, Rt = { async getSlugByRecordId(e2, t2) {
    let [n2] = await Q.query({ from: { data: $, type: `Collection` }, limit: { type: `LiteralValue`, value: 1 }, select: [{ name: `FqXanvpX5`, type: `Identifier` }], where: { left: { name: `id`, type: `Identifier` }, operator: `==`, right: { type: `LiteralValue`, value: e2 }, type: `BinaryOperation` } }, t2);
    return n2?.FqXanvpX5;
  }, async getRecordIdBySlug(e2, t2) {
    let [n2] = await Q.query({ from: { data: $, type: `Collection` }, limit: { type: `LiteralValue`, value: 1 }, select: [{ name: `id`, type: `Identifier` }], where: { left: { name: `FqXanvpX5`, type: `Identifier` }, operator: `==`, right: { type: `LiteralValue`, value: e2 }, type: `BinaryOperation` } }, t2);
    return n2?.id;
  } }, zt = { exports: { enumToDisplayNameFunctions: { type: `variable`, annotations: { framerContractVersion: `1` } }, utils: { type: `variable`, annotations: { framerContractVersion: `1` } }, default: { type: `data`, name: `data`, annotations: { framerCollectionUtils: `1`, framerRecordIdKey: `id`, framerData: `true`, framerColorSyntax: `false`, framerAutoSizeImages: `true`, framerCollectionId: `Q1V1DlgrJ`, framerEnumToDisplayNameUtils: `2`, framerContractVersion: `1`, framerSlug: `FqXanvpX5` } }, __FramerMetadata__: { type: `variable` } } };
}));
export {
  Rt as a,
  Bt as i,
  zt as n,
  Lt as r,
  It as t
};
