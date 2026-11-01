import { t as e } from "./rolldown-runtime.OA-FSkXT.mjs";
async function t(e2, t2, i2) {
  let a2 = r[e2], o = a2 ? await a2(t2, i2) : void 0, s = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t3 of n) {
    if (t3.pageIds && !t3.pageIds.has(e2)) continue;
    let n2 = t3.code(o);
    n2 && s[t3.placement].push({ ...t3, code: n2 });
  }
  return s;
}
var n, r, i, a;
e((() => {
  n = [], r = {}, i = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }, a = { exports: { snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } }, getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } }, __FramerMetadata__: { type: `variable` } } };
}))();
export {
  a as __FramerMetadata__,
  t as getSnippets,
  i as snippetsSorting
};
