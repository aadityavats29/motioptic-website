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

// Keep document metadata correct after client-side navigation and browser history.
let metadata;
async function updateDocument() {
  try {
    metadata ||= await fetch(new URL('page-metadata.json', window.motiRoot)).then(response=>response.json());
    const route = window.motiRoute();
    const page = metadata[route] || metadata['/404'];
    document.title = page.title;
    for (const [selector,content] of [['meta[name="description"]',page.description],['meta[property="og:title"]',page.title],['meta[property="og:description"]',page.description]]) document.querySelector(selector)?.setAttribute('content',content);
    for (const node of document.querySelectorAll('link[rel="canonical"],meta[property="og:url"]')) {
      const attr=node.tagName==='LINK'?'href':'content';
      const url=new URL(node.getAttribute(attr)); url.pathname=route; node.setAttribute(attr,url.href);
    }
    const ogImage=document.querySelector('meta[property="og:image"]');
    if(ogImage && page.shareImage) ogImage.content=new URL('/'+page.shareImage,ogImage.content).href;
    let robots=document.querySelector('meta[name="robots"]');
    if(!metadata[route]||route==='/404') {if(!robots){robots=document.createElement('meta');robots.name='robots';document.head.append(robots);}robots.content='noindex';}else robots?.remove();
    document.querySelectorAll('a').forEach(link=>{if(link.textContent.replace(/\s/g,'').toUpperCase()==='CONTACT')link.setAttribute('aria-label','Contact');});
  } catch { /* Keep the statically generated metadata if fetch is unavailable. */ }
}
window.addEventListener('motioptic:route',updateDocument);
window.addEventListener('popstate',updateDocument);
window.addEventListener('pageshow',updateDocument);
