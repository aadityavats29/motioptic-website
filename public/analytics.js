// Vercel Web Analytics is enabled only by a production build (or explicit build flag).
(async function () {
  if(location.protocol!=='https:' || ['localhost','127.0.0.1','::1'].includes(location.hostname)) return;
  try {
    const config=await fetch(new URL('runtime-config.json',document.baseURI)).then(r=>r.json());
    if(!config.analytics.enabled) return;
    window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};
    window.va('beforeSend',event=>{
      const url=new URL(event.url,location.origin);
      if(!config.routes.includes(url.pathname.replace(/\/$/,'')||'/')||url.pathname==='/404') return null;
      url.search='';url.hash='';
      return {...event,url:url.href};
    });
    const script=document.createElement('script');
    script.defer=true;script.src='/_vercel/insights/script.js';
    document.head.append(script);
    if(config.analytics.customEvents)window.addEventListener('motioptic:contact-saved',()=>window.va('event',{name:'Contact enquiry'}));
  } catch { /* Analytics must never prevent navigation or form submission. */ }
})();
