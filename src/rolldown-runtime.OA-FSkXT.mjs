var e = Object.defineProperty, t = (e2, t2) => () => (e2 && (t2 = e2(e2 = 0)), t2), n = (t2, n2) => {
  let r2 = {};
  for (var i in t2) e(r2, i, { get: t2[i], enumerable: true });
  return n2 && e(r2, Symbol.toStringTag, { value: `Module` }), r2;
}, r = ((e2) => typeof require < `u` ? require : typeof Proxy < `u` ? new Proxy(e2, { get: (e3, t2) => (typeof require < `u` ? require : e3)[t2] }) : e2)(function(e2) {
  if (typeof require < `u`) return require.apply(this, arguments);
  throw Error('Calling `require` for "' + e2 + "\" in an environment that doesn't expose the `require` function.");
});
export {
  n,
  r,
  t
};
