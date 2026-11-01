import { t as e } from "./rolldown-runtime.OA-FSkXT.mjs";
import { B as t, I as n, P as r, R as i, T as a, c as o, k as s, l as c, o as l } from "./react.DcLFkBVj.mjs";
import { r as u, w as d } from "./motion.BpUkXwT2.mjs";
import { A as f, Ct as p, J as m, P as h, a as g } from "./framer.BUZSVv-M.mjs";
function _({ text: e2, transition: t2, stagger: r2, reverse: i2, font: a2, color: s2, textTransform: l2, tag: u2, padding: f2 }) {
  let [p2, m2] = n(false), h2 = `rolling-text-inner-${v()}`, g2 = u2, _2 = a2?.fontSize ?? `16px`;
  a2?.letterSpacing;
  let y2 = a2?.lineHeight, b2 = a2?.fontFamily ?? `Inter`, x2 = parseInt(_2, 10) || 16, S2;
  if (typeof y2 == `number`) S2 = x2 * y2;
  else if (typeof y2 == `string` && y2.includes(`em`)) S2 = x2 * (parseFloat(y2) || 1.2);
  else if (typeof y2 == `string`) {
    let e3 = parseFloat(y2);
    S2 = isNaN(e3) ? y2 : `${e3}px`;
  } else S2 = x2 * 1.2;
  let C2 = typeof S2 == `number` ? `${S2}px` : S2, w2 = `-${C2}`, T2 = `
    .${h2} {
      --font-size: ${_2};
      --text: ${s2};
      --line-height-abs: ${C2};
      box-sizing: border-box; margin: 0; padding: 0; vertical-align: top;
      display: flex; overflow: hidden; width: max-content;
      font-family: ${b2}; font-size: ${_2};
      text-transform: ${l2}; user-select: none;
      text-shadow: 0 var(--line-height-abs) 0 var(--text);
    }
    .${h2} span {
      display: block; -webkit-backface-visibility: hidden; backface-visibility: hidden;
      white-space: pre; flex-shrink: 0;
      font-family: inherit; font-weight: inherit; font-style: inherit;
      font-size: inherit; letter-spacing: inherit;
      line-height: ${y2 ?? 1.2};
      color: var(--text);
    }
  `, E2 = { display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100%`, height: `100%`, overflow: `hidden`, padding: f2, boxSizing: `border-box` }, D2 = { initial: { y: `0%` }, hover: { y: w2 } }, O2 = typeof t2?.duration == `number` ? t2.duration : 0.5, k2 = r2 / 100;
  return c(`div`, { style: E2, onMouseEnter: () => m2(true), onMouseLeave: () => m2(false), children: [o(g2, { className: h2, children: [...e2].map((n2, r3) => {
    let s3 = i2 ? e2.length - 1 - r3 : r3, c2 = e2.length > 0 ? O2 / e2.length * s3 * k2 : 0, l3 = { display: `block`, ...a2 };
    return o(d.span, { variants: D2, initial: `initial`, animate: p2 ? `hover` : `initial`, transition: { ...t2, delay: c2 }, style: l3, children: n2 === ` ` ? `\xA0` : n2 }, r3);
  }) }), o(`style`, { children: T2 })] });
}
var v, y = e((() => {
  l(), a(), m(), u(), v = () => `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (e2) => {
    let t2 = Math.random() * 16 | 0;
    return (e2 === `x` ? t2 : t2 & 3 | 8).toString(16);
  }), _.displayName = `Rolling Text`, f(_, { text: { type: g.String, title: `Text`, defaultValue: `Rolling Text` }, font: { type: g.Font, title: `Font`, controls: `extended`, defaultValue: { fontFamily: `Inter`, fontWeight: `400`, fontSize: `16px`, fontStyle: `normal`, letterSpacing: `0px`, lineHeight: 1.2 } }, color: { type: g.Color, title: `Color`, defaultValue: `#808080` }, transition: { type: g.Transition, title: `Transition`, defaultValue: { type: `spring`, duration: 0.4, bounce: 0 } }, stagger: { title: `Stagger`, type: g.Number, min: 0, max: 100, step: 1, defaultValue: 35, unit: `%` }, padding: { title: `Padding`, type: g.Padding, defaultValue: `0px` }, reverse: { type: g.Boolean, title: `Reverse`, defaultValue: false, enabledTitle: `Yes`, disabledTitle: `No` }, textTransform: { title: `Transform`, type: g.Enum, defaultValue: `none`, options: [`none`, `uppercase`, `lowercase`, `capitalize`], optionTitles: [`None`, `Uppercase`, `Lowercase`, `Capitalize`] }, tag: { type: g.Enum, title: `Tag`, options: [`p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`], optionTitles: [`p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`], defaultValue: `p`, description: `` } });
})), b, x, S, C = e((() => {
  m(), h.loadFonts([`FS;Clash Display-semibold`, `FS;Clash Display-bold`]), b = [{ explicitInter: true, fonts: [{ family: `Clash Display`, source: `fontshare`, style: `normal`, url: window.motiRoot + "media/third-party-assets/fontshare/wf/FPDAZ2S6SW4QMSRIIKNNGTPM6VIXYMKO/5HNPQ453FRLIQWV2FNOBUU3FKTDZQVSG/Z3MGHFHX6DCTLQ55LJYRJ5MDCZPMFZU6.woff2", weight: `600` }, { family: `Clash Display`, source: `fontshare`, style: `normal`, url: window.motiRoot + "media/third-party-assets/fontshare/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2", weight: `700` }] }], x = [`.framer-BUQFC .framer-styles-preset-13g92bw:not(.rich-text-wrapper), .framer-BUQFC .framer-styles-preset-13g92bw.rich-text-wrapper p { --framer-font-family: "Clash Display", "Clash Display Placeholder", sans-serif; --framer-font-family-bold: "Clash Display", "Clash Display Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-d4ca82da-9858-4dad-acd0-b334826e1013, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`], S = `framer-BUQFC`;
}));
function w(e2, t2, n2) {
  return Math.max(e2, Math.min(t2, n2));
}
var T, E, D, O, k, A, j = e((() => {
  i(), T = class {
    constructor() {
      this.isRunning = false, this.value = 0, this.from = 0, this.to = 0, this.duration = 0, this.currentTime = 0;
    }
    advance(e2) {
      var t2;
      if (!this.isRunning) return;
      let n2 = false;
      if (this.duration && this.easing) {
        this.currentTime += e2;
        let t3 = w(0, this.currentTime / this.duration, 1);
        n2 = t3 >= 1;
        let r2 = n2 ? 1 : this.easing(t3);
        this.value = this.from + (this.to - this.from) * r2;
      } else this.lerp ? (this.value = (function(e3, t3, n3, r2) {
        return (function(e4, t4, n4) {
          return (1 - n4) * e4 + n4 * t4;
        })(e3, t3, 1 - Math.exp(-n3 * r2));
      })(this.value, this.to, 60 * this.lerp, e2), Math.round(this.value) === this.to && (this.value = this.to, n2 = true)) : (this.value = this.to, n2 = true);
      n2 && this.stop(), (t2 = this.onUpdate) == null || t2.call(this, this.value, n2);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(e2, t2, { lerp: n2, duration: r2, easing: i2, onStart: a2, onUpdate: o2 }) {
      this.from = this.value = e2, this.to = t2, this.lerp = n2, this.duration = r2, this.easing = i2, this.currentTime = 0, this.isRunning = true, a2?.(), this.onUpdate = o2;
    }
  }, E = class {
    constructor({ wrapper: e2, content: n2, autoResize: r2 = true, debounce: i2 = 250 } = {}) {
      this.width = 0, this.height = 0, this.scrollWidth = 0, this.scrollHeight = 0, this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }, this.onWrapperResize = () => {
        this.wrapper === t ? (this.width = t.innerWidth, this.height = t.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      }, this.onContentResize = () => {
        this.wrapper === t ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      }, this.wrapper = e2, this.content = n2, r2 && (this.debouncedResize = /* @__PURE__ */ (function(e3, t2) {
        let n3;
        return function() {
          let r3 = arguments, i3 = this;
          clearTimeout(n3), n3 = setTimeout((function() {
            e3.apply(i3, r3);
          }), t2);
        };
      })(this.resize, i2), this.wrapper === t ? t.addEventListener(`resize`, this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      var e2, n2;
      (e2 = this.wrapperResizeObserver) == null || e2.disconnect(), (n2 = this.contentResizeObserver) == null || n2.disconnect(), t.removeEventListener(`resize`, this.debouncedResize, false);
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  }, D = class {
    constructor() {
      this.events = {};
    }
    emit(e2, ...t2) {
      let n2 = this.events[e2] || [];
      for (let e3 = 0, r2 = n2.length; e3 < r2; e3++) n2[e3](...t2);
    }
    on(e2, t2) {
      var n2;
      return (n2 = this.events[e2]) != null && n2.push(t2) || (this.events[e2] = [t2]), () => {
        this.events[e2] = this.events[e2]?.filter(((e3) => t2 !== e3));
      };
    }
    off(e2, t2) {
      this.events[e2] = this.events[e2]?.filter(((e3) => t2 !== e3));
    }
    destroy() {
      this.events = {};
    }
  }, O = 100 / 6, k = class {
    constructor(e2, { wheelMultiplier: n2 = 1, touchMultiplier: r2 = 1 }) {
      this.lastDelta = { x: 0, y: 0 }, this.windowWidth = 0, this.windowHeight = 0, this.onTouchStart = (e3) => {
        let { clientX: t2, clientY: n3 } = e3.targetTouches ? e3.targetTouches[0] : e3;
        this.touchStart.x = t2, this.touchStart.y = n3, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e3 });
      }, this.onTouchMove = (e3) => {
        let { clientX: t2, clientY: n3 } = e3.targetTouches ? e3.targetTouches[0] : e3, r3 = -(t2 - (this.touchStart?.x ?? 0)) * this.touchMultiplier, i2 = -(n3 - (this.touchStart?.y ?? 0)) * this.touchMultiplier;
        this.touchStart.x = t2, this.touchStart.y = n3, this.lastDelta = { x: r3, y: i2 }, this.emitter.emit(`scroll`, { deltaX: r3, deltaY: i2, event: e3 });
      }, this.onTouchEnd = (e3) => {
        this.emitter.emit(`scroll`, { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e3 });
      }, this.onWheel = (e3) => {
        let { deltaX: t2, deltaY: n3, deltaMode: r3 } = e3;
        t2 *= r3 === 1 ? O : r3 === 2 ? this.windowWidth : 1, n3 *= r3 === 1 ? O : r3 === 2 ? this.windowHeight : 1, t2 *= this.wheelMultiplier, n3 *= this.wheelMultiplier, this.emitter.emit(`scroll`, { deltaX: t2, deltaY: n3, event: e3 });
      }, this.onWindowResize = () => {
        this.windowWidth = t.innerWidth, this.windowHeight = t.innerHeight;
      }, this.element = e2, this.wheelMultiplier = n2, this.touchMultiplier = r2, this.touchStart = { x: null, y: null }, this.emitter = new D(), t.addEventListener(`resize`, this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener(`wheel`, this.onWheel, { passive: false }), this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: false }), this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: false }), this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: false });
    }
    on(e2, t2) {
      return this.emitter.on(e2, t2);
    }
    destroy() {
      this.emitter.destroy(), t.removeEventListener(`resize`, this.onWindowResize, false), this.element.removeEventListener(`wheel`, this.onWheel), this.element.removeEventListener(`touchstart`, this.onTouchStart), this.element.removeEventListener(`touchmove`, this.onTouchMove), this.element.removeEventListener(`touchend`, this.onTouchEnd);
    }
  }, A = class {
    constructor({ wrapper: e2 = t, content: n2 = document.documentElement, wheelEventsTarget: r2 = e2, eventsTarget: i2 = r2, smoothWheel: a2 = true, syncTouch: o2 = false, syncTouchLerp: s2 = 0.075, touchInertiaMultiplier: c2 = 35, duration: l2, easing: u2 = ((e3) => Math.min(1, 1.001 - 2 ** (-10 * e3))), lerp: d2 = 0.1, infinite: f2 = false, orientation: p2 = `vertical`, gestureOrientation: m2 = `vertical`, touchMultiplier: h2 = 1, wheelMultiplier: g2 = 1, autoResize: _2 = true, prevent: v2, virtualScroll: y2, __experimental__naiveDimensions: b2 = false } = {}) {
      this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.onPointerDown = (e3) => {
        e3.button === 1 && this.reset();
      }, this.onVirtualScroll = (e3) => {
        if (typeof this.options.virtualScroll == `function` && false === this.options.virtualScroll(e3)) return;
        let { deltaX: t2, deltaY: n3, event: r3 } = e3;
        if (this.emitter.emit(`virtual-scroll`, { deltaX: t2, deltaY: n3, event: r3 }), r3.ctrlKey) return;
        let i3 = r3.type.includes(`touch`), a3 = r3.type.includes(`wheel`);
        if (this.isTouching = r3.type === `touchstart` || r3.type === `touchmove`, this.options.syncTouch && i3 && r3.type === `touchstart` && !this.isStopped && !this.isLocked) return void this.reset();
        let o3 = t2 === 0 && n3 === 0, s3 = this.options.gestureOrientation === `vertical` && n3 === 0 || this.options.gestureOrientation === `horizontal` && t2 === 0;
        if (o3 || s3) return;
        let c3 = r3.composedPath();
        c3 = c3.slice(0, c3.indexOf(this.rootElement));
        let l3 = this.options.prevent;
        if (c3.find(((e4) => e4 instanceof Element && (typeof l3 == `function` && l3?.(e4) || e4.hasAttribute?.call(e4, `data-lenis-prevent`) || i3 && e4.hasAttribute?.call(e4, `data-lenis-prevent-touch`) || a3 && e4.hasAttribute?.call(e4, `data-lenis-prevent-wheel`) || e4.classList?.contains(`lenis`) && !e4.classList?.contains(`lenis-stopped`))))) return;
        if (this.isStopped || this.isLocked) return void r3.preventDefault();
        if (!(this.options.syncTouch && i3 || this.options.smoothWheel && a3)) return this.isScrolling = `native`, void this.animate.stop();
        r3.preventDefault();
        let u3 = n3;
        this.options.gestureOrientation === `both` ? u3 = Math.abs(n3) > Math.abs(t2) ? n3 : t2 : this.options.gestureOrientation === `horizontal` && (u3 = t2);
        let d3 = i3 && this.options.syncTouch, f3 = i3 && r3.type === `touchend` && Math.abs(u3) > 5;
        f3 && (u3 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + u3, Object.assign({ programmatic: false }, d3 ? { lerp: f3 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
      }, this.onNativeScroll = () => {
        if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
        else if (false === this.isScrolling || this.isScrolling === `native`) {
          let e3 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e3, this.direction = Math.sign(this.animatedScroll - e3), this.isScrolling = `native`, this.emit(), this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout((() => {
            this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = false, this.emit();
          }), 400));
        }
      }, t.lenisVersion = `1.1.9`, e2 && e2 !== document.documentElement && e2 !== document.body || (e2 = t), this.options = { wrapper: e2, content: n2, wheelEventsTarget: r2, eventsTarget: i2, smoothWheel: a2, syncTouch: o2, syncTouchLerp: s2, touchInertiaMultiplier: c2, duration: l2, easing: u2, lerp: d2, infinite: f2, gestureOrientation: m2, orientation: p2, touchMultiplier: h2, wheelMultiplier: g2, autoResize: _2, prevent: v2, virtualScroll: y2, __experimental__naiveDimensions: b2 }, this.animate = new T(), this.emitter = new D(), this.dimensions = new E({ wrapper: e2, content: n2, autoResize: _2 }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = false, this.isStopped = false, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, false), this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, false), this.virtualScroll = new k(i2, { touchMultiplier: h2, wheelMultiplier: g2 }), this.virtualScroll.on(`scroll`, this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, false), this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
    }
    on(e2, t2) {
      return this.emitter.on(e2, t2);
    }
    off(e2, t2) {
      return this.emitter.off(e2, t2);
    }
    setScroll(e2) {
      this.isHorizontal ? this.rootElement.scrollLeft = e2 : this.rootElement.scrollTop = e2;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit(`scroll`, this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped && (this.isStopped = false, this.reset());
    }
    stop() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }
    raf(e2) {
      let t2 = e2 - (this.time || e2);
      this.time = e2, this.animate.advance(1e-3 * t2);
    }
    scrollTo(e2, { offset: n2 = 0, immediate: r2 = false, lock: i2 = false, duration: a2 = this.options.duration, easing: o2 = this.options.easing, lerp: s2 = this.options.lerp, onStart: c2, onComplete: l2, force: u2 = false, programmatic: d2 = true, userData: f2 = {} } = {}) {
      if (!this.isStopped && !this.isLocked || u2) {
        if (typeof e2 == `string` && [`top`, `left`, `start`].includes(e2)) e2 = 0;
        else if (typeof e2 == `string` && [`bottom`, `right`, `end`].includes(e2)) e2 = this.limit;
        else {
          let r3;
          if (typeof e2 == `string` ? r3 = document.querySelector(e2) : e2 instanceof HTMLElement && e2 != null && e2.nodeType && (r3 = e2), r3) {
            if (this.options.wrapper !== t) {
              let e3 = this.rootElement.getBoundingClientRect();
              n2 -= this.isHorizontal ? e3.left : e3.top;
            }
            let i3 = r3.getBoundingClientRect();
            e2 = (this.isHorizontal ? i3.left : i3.top) + this.animatedScroll;
          }
        }
        if (typeof e2 == `number` && (e2 += n2, e2 = Math.round(e2), this.options.infinite ? d2 && (this.targetScroll = this.animatedScroll = this.scroll) : e2 = w(0, e2, this.limit), e2 !== this.targetScroll)) {
          if (this.userData = f2, r2) return this.animatedScroll = this.targetScroll = e2, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), l2?.(this), void (this.userData = {});
          d2 || (this.targetScroll = e2), this.animate.fromTo(this.animatedScroll, e2, { duration: a2, easing: o2, lerp: s2, onStart: () => {
            i2 && (this.isLocked = true), this.isScrolling = `smooth`, c2?.(this);
          }, onUpdate: (e3, t2) => {
            this.isScrolling = `smooth`, this.lastVelocity = this.velocity, this.velocity = e3 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e3, this.setScroll(this.scroll), d2 && (this.targetScroll = e3), t2 || this.emit(), t2 && (this.reset(), this.emit(), l2?.(this), this.userData = {}, this.preventNextNativeScrollEvent());
          } });
        }
      }
    }
    preventNextNativeScrollEvent() {
      this.__preventNextNativeScrollEvent = true, requestAnimationFrame((() => {
        delete this.__preventNextNativeScrollEvent;
      }));
    }
    get rootElement() {
      return this.options.wrapper === t ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
    }
    get isHorizontal() {
      return this.options.orientation === `horizontal`;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (function(e2, t2) {
        return (e2 % t2 + t2) % t2;
      })(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(e2) {
      this.__isScrolling !== e2 && (this.__isScrolling = e2, this.updateClassName());
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(e2) {
      this.__isStopped !== e2 && (this.__isStopped = e2, this.updateClassName());
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(e2) {
      this.__isLocked !== e2 && (this.__isLocked = e2, this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === `smooth`;
    }
    get className() {
      let e2 = `lenis`;
      return this.isStopped && (e2 += ` lenis-stopped`), this.isLocked && (e2 += ` lenis-locked`), this.isScrolling && (e2 += ` lenis-scrolling`), this.isScrolling === `smooth` && (e2 += ` lenis-smooth`), e2;
    }
    updateClassName() {
      this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, ``).trim();
    }
  };
}));
function M(e2) {
  let { intensity: n2 } = e2, i2 = s(null);
  return r(() => {
    if (i2.current) try {
      i2.current.scrollTo(0, { immediate: true });
    } catch (e3) {
      console.error(`Error scrolling to top:`, e3);
    }
  }, [i2]), r(() => {
    let e3 = () => {
      try {
        let e4 = document.querySelector(`[data-frameruni-stop-scroll]`), t3 = document.documentElement, n4 = t3 && t3.style && t3.style.overflow === `hidden`;
        i2.current && (e4 || n4 ? i2.current.stop() : i2.current.start());
      } catch (e4) {
        console.error(`Error in checkForStopScroll:`, e4);
      }
    };
    e3();
    let t2, n3;
    try {
      t2 = new MutationObserver(e3), n3 = new MutationObserver(e3), document && document.documentElement && (t2.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: [`data-frameruni-stop-scroll`] }), n3.observe(document.documentElement, { attributes: true, attributeFilter: [`style`] }));
    } catch (e4) {
      console.error(`Error setting up observers:`, e4);
    }
    return () => {
      try {
        t2 && t2.disconnect(), n3 && n3.disconnect();
      } catch (e4) {
        console.error(`Error disconnecting observers:`, e4);
      }
    };
  }, []), r(() => {
    try {
      if (!document) return;
      let e3 = document.getElementsByTagName(`*`);
      for (let n3 = 0; n3 < e3.length; n3++) {
        let r2 = e3[n3];
        if (r2) try {
          let e4 = t.getComputedStyle(r2);
          e4 && e4.getPropertyValue(`overflow`) === `auto` && r2.setAttribute(`data-lenis-prevent`, `true`);
        } catch (e4) {
          console.error(`Error getting computed style:`, e4);
        }
      }
    } catch (e3) {
      console.error(`Error in overflow detection:`, e3);
    }
  }, []), r(() => {
    try {
      if (typeof A != `function`) {
        console.error(`Lenis is not available`);
        return;
      }
      i2.current = new A({ duration: (n2 || 10) / 10 });
      let e3 = (t3) => {
        if (i2.current) try {
          i2.current.raf(t3), requestAnimationFrame(e3);
        } catch (e4) {
          console.error(`Error in animation frame:`, e4);
        }
      }, t2 = requestAnimationFrame(e3);
      return () => {
        if (cancelAnimationFrame(t2), i2.current) try {
          i2.current.destroy(), i2.current = null;
        } catch (e4) {
          console.error(`Error destroying Lenis:`, e4);
        }
      };
    } catch (e3) {
      return console.error(`Error initializing Lenis:`, e3), () => {
      };
    }
  }, [n2]), r(() => {
    try {
      if (!document || !i2.current) return;
      let e3 = Array.from(document.querySelectorAll(`a[href]`) || []).filter((e4) => {
        if (!e4) return false;
        let n4 = e4;
        if (!n4.href) return false;
        let r3 = n4.href.startsWith(t.location.origin) || n4.href.startsWith(`./`) || n4.href.startsWith(`/`), i3 = n4.href.includes(`#`);
        return r3 && i3;
      }).map((e4) => {
        try {
          let n4 = e4, r3 = n4.href.includes(`#`) ? `#${n4.href.split(`#`).pop()}` : ``, i3 = r3 ? decodeURIComponent(r3) : ``, a2 = 0;
          try {
            if (i3) {
              let e5 = document.querySelector(i3);
              if (e5) {
                let n5 = t.getComputedStyle(e5).scrollMarginTop;
                a2 = n5 && parseInt(n5) || 0;
              }
            }
          } catch (e5) {
            console.error(`Error finding target element:`, e5);
          }
          return { href: r3, scrollMargin: a2, anchorElement: n4 };
        } catch (e5) {
          return console.error(`Error processing anchor:`, e5), null;
        }
      }).filter(Boolean), n3 = (e4, t2, n4) => {
        try {
          e4 && e4.preventDefault && e4.preventDefault(), i2.current && t2 && i2.current.scrollTo(t2, { offset: -(n4 || 0) });
        } catch (e5) {
          console.error(`Error in anchor click handler:`, e5);
        }
      }, r2 = e3.map(({ href: e4, scrollMargin: t2 }) => (r3) => n3(r3, e4, t2));
      return e3.forEach(({ anchorElement: e4 }, t2) => {
        e4 && r2[t2] && e4.addEventListener(`click`, r2[t2]);
      }), () => {
        e3.forEach(({ anchorElement: e4 }, t2) => {
          e4 && r2[t2] && e4.removeEventListener(`click`, r2[t2]);
        });
      };
    } catch (e3) {
      return console.error(`Error setting up anchor links:`, e3), () => {
      };
    }
  }, [i2]), o(`div`, { style: e2.style });
}
var N, P, F = e((() => {
  i(), l(), m(), j(), a(), N = p(M, [`html.lenis { height: auto; }`, `.lenis.lenis-smooth { scroll-behavior: auto !important; }`, `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`, `.lenis.lenis-stopped { overflow: hidden; }`, `.lenis.lenis-scrolling iframe { pointer-events: none; }`], ``), P = N, N.displayName = `Smooth Scroll`, f(N, { intensity: { title: `Intensity`, type: g.Number, defaultValue: 10, min: 0, description: `` } });
})), I, L, R, z = e((() => {
  m(), h.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]), I = [{ explicitInter: true, fonts: [{ family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`, url: window.motiRoot + "media/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`, url: window.motiRoot + "media/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: window.motiRoot + "media/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: window.motiRoot + "media/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`, url: window.motiRoot + "media/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`, url: window.motiRoot + "media/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`, url: window.motiRoot + "media/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`, url: window.motiRoot + "media/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`, url: window.motiRoot + "media/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+1F00-1FFF`, url: window.motiRoot + "media/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0370-03FF`, url: window.motiRoot + "media/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`, url: window.motiRoot + "media/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`, url: window.motiRoot + "media/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `normal`, unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`, url: window.motiRoot + "media/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`, url: window.motiRoot + "media/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`, url: window.motiRoot + "media/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+1F00-1FFF`, url: window.motiRoot + "media/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0370-03FF`, url: window.motiRoot + "media/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`, url: window.motiRoot + "media/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`, url: window.motiRoot + "media/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`, url: window.motiRoot + "media/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: `700` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`, url: window.motiRoot + "media/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`, url: window.motiRoot + "media/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+1F00-1FFF`, url: window.motiRoot + "media/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0370-03FF`, url: window.motiRoot + "media/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`, url: window.motiRoot + "media/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`, url: window.motiRoot + "media/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2", weight: `400` }, { family: `Inter`, source: `framer`, style: `italic`, unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`, url: window.motiRoot + "media/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: `400` }] }], L = [`.framer-ZNeQq .framer-styles-preset-h0wt6i:not(.rich-text-wrapper), .framer-ZNeQq .framer-styles-preset-h0wt6i.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-d4ca82da-9858-4dad-acd0-b334826e1013, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`], R = `framer-ZNeQq`;
}));
function B(e2, t2) {
  return { description: `Motioptic is a digital brand experience studio. Explore our design, branding and development work.`, favicon: window.motiRoot + "media/assets/4PeWVeSl4PThgQXn8BzsTRlD0.png", robots: `max-image-preview:large`, socialImage: window.motiRoot + "media/assets/ZNRBbzgb3tPpilk3N7MgP5eKg.png", title: `MOTIOPTIC` };
}
var V = e((() => {
}));
export {
  I as a,
  F as c,
  b as d,
  C as f,
  L as i,
  S as l,
  y as m,
  B as n,
  z as o,
  _ as p,
  R as r,
  P as s,
  V as t,
  x as u
};
