window.motiRoot = document.baseURI;
const filePreview = location.protocol === 'file:';
window.motiRoute = () => filePreview ? document.documentElement.dataset.route : decodeURIComponent(location.pathname).replace(/\/$/, '') || '/';

if (filePreview) document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || !href.startsWith('/') && !href.startsWith('./')) return;
  const url = new URL(href, 'https://local.test' + window.motiRoute());
  if (url.pathname === window.motiRoute() && url.hash) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  location.href = new URL(url.pathname.replace(/^\//, '').replace(/\/$/, '') + (url.pathname === '/' ? '' : '/') + 'index.html' + url.hash, window.motiRoot);
}, true);
