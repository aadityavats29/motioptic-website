import { t as e } from "./rolldown-runtime.OA-FSkXT.mjs";
import { C as t, J as n, W as r } from "./framer.BUZSVv-M.mjs";
import { n as i, t as a } from "./shared-lib.CO8mX-7c.mjs";
import { i as o, t as s } from "./UcWbpW2oX.DRGswAL_.mjs";
function c(e2, t2) {
  let n2 = e2?.pUoHuoALT;
  return { breakpoints: [{ hash: `anvusg`, mediaQuery: `(min-width: 1440px)` }, { hash: `1bchax3`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` }, { hash: `7l7mni`, mediaQuery: `(max-width: 809.98px)` }], description: i(e2, t2).description, elements: {}, robots: `max-image-preview:large`, serializationId: `framer-XEQdN`, title: `${n2 === void 0 ? `{{pUoHuoALT}}` : d(n2)} - Motioptic`, viewport: `width=device-width` };
}
async function l(e2, n2) {
  let i2 = new t(), a2 = { from: { alias: `WLs0OF8B2`, data: s, type: `Collection` }, select: [{ collection: `WLs0OF8B2`, name: `pUoHuoALT`, type: `Identifier` }], where: r(e2, `WLs0OF8B2`) }, o2 = await i2.query(a2, n2);
  if (o2.length === 0) throw Error(`No data matches pathVariables`);
  let l2 = o2[0];
  return c(l2, n2);
}
async function u(e2, n2) {
  let r2 = new t(), i2 = { from: { alias: `WLs0OF8B2`, data: s, type: `Collection` }, select: [{ collection: `WLs0OF8B2`, name: `pUoHuoALT`, type: `Identifier` }] };
  for (let t2 of e2) i2.select.push({ collection: `WLs0OF8B2`, name: t2, type: `Identifier` });
  return (await r2.query(i2, n2)).map((t2) => ({ metadata: c(t2, n2), pathVariables: Object.fromEntries(e2.map((e3) => [e3, t2[e3]])) }));
}
var d, f, p, m = e((() => {
  n(), o(), a(), d = (e2) => typeof e2 == `string` ? e2 : String(e2), f = 1, p = { exports: { default: { type: `function`, annotations: { framerContractVersion: `1` } }, fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } }, fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } }, metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } }, __FramerMetadata__: { type: `variable` } } };
}));
export {
  c as a,
  m as i,
  u as n,
  f as o,
  l as r,
  p as t
};
