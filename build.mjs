import {readFileSync, writeFileSync, mkdirSync, rmSync} from 'node:fs';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {pageContent,projects,services,site,redirects,escapeHTML as h} from './page-content.mjs';
process.chdir(fileURLToPath(new URL('.', import.meta.url)));
const routes = ['/', '/404', '/contact', '/privacy', '/services', '/works', ...projects.map(r=>'/works/'+r.Slug), ...services.map(r=>'/services/'+r.Slug)].sort();
const metadata=Object.fromEntries(routes.map(route=>{const {title,description}=pageContent(route);const project=projects.find(row=>route==='/works/'+row.Slug);
  const shareImage=project?'media/covers/'+project.Slug+'-share.jpg':'media/share.png';
  return [route,{title,description,shareImage}]}));
writeFileSync('content/metadata.json',JSON.stringify(metadata,null,2)+'\n');
writeFileSync('public/page-metadata.json',JSON.stringify(metadata)+'\n');
execFileSync(process.env.ESBUILD_BINARY || './node_modules/.bin/esbuild',['src/app.mjs','--bundle','--format=iife','--target=es2022','--outfile=public/site.js','--log-level=error'],{stdio:'inherit'});
rmSync('public/blogs',{recursive:true,force:true});
for(const route of Object.keys(redirects))rmSync(join('public',route),{recursive:true,force:true});
writeFileSync('routes.json',JSON.stringify(routes,null,2)+'\n');
const analyticsEnabled=process.env.ANALYTICS_ENABLED==='true'||(process.env.VERCEL_ENV==='production'&&process.env.ANALYTICS_ENABLED!=='false');
writeFileSync('public/runtime-config.json',JSON.stringify({analytics:{enabled:analyticsEnabled,customEvents:process.env.ANALYTICS_CUSTOM_EVENTS==='true'},routes})+'\n');
const origin=(process.env.SITE_URL||site.url).replace(/\/$/,'');
if(origin&&!/^https?:\/\/[^/]+$/.test(origin))throw Error('SITE_URL must be an HTTP(S) origin without a path.');
for(const route of routes){
 const directory=join('public',route);mkdirSync(directory,{recursive:true});
 const base='../'.repeat(route.split('/').filter(Boolean).length)||'./';
 const {title,description,html}=pageContent(route);
 writeFileSync(join(directory,'index.html'),`<!doctype html>
<html lang="en" data-route="${route}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<base href="${base}"><link rel="icon" type="image/png" href="favicon.png"><title>${h(title)}</title><meta name="description" content="${h(description)}">
<meta property="og:type" content="website"><meta property="og:title" content="${h(title)}"><meta property="og:description" content="${h(description)}"><meta property="og:image" content="${h(origin+'/'+metadata[route].shareImage)}"><meta name="twitter:card" content="summary_large_image">
${origin?`<link rel="canonical" href="${h(origin+route)}"><meta property="og:url" content="${h(origin+route)}">`:''}${route==='/404'?'<meta name="robots" content="noindex">':''}
<link rel="stylesheet" href="site.css"></head><body><a class="studio-skip" href="#main">Skip to content</a><main id="main" tabindex="-1">${html}</main>
<script src="local.js"></script><script defer src="analytics.js"></script>${route==='/privacy'?'':'<script src="site.js"></script>'}
</body></html>`);
}
writeFileSync('public/404.html',readFileSync('public/404/index.html','utf8').replace('<base href="../">','<base href="/">'));
// Netlify-compatible static redirects. Node reads the same source map.
writeFileSync('public/_redirects',Object.entries(redirects).flatMap(([from,to])=>[`${from} ${to} 301`,`${from}/ ${to} 301`]).join('\n')+'\n');
writeFileSync('public/robots.txt',`User-agent: *\nAllow: /\n${origin?'Sitemap: '+origin+'/sitemap.xml\n':''}`);
if(origin)writeFileSync('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.filter(r=>r!=='/404').map(route=>`<url><loc>${h(origin+route)}</loc></url>`).join('')}</urlset>`);else rmSync('public/sitemap.xml',{force:true});
