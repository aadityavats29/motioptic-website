import {readFileSync, writeFileSync, mkdirSync, readdirSync} from 'node:fs';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('.', import.meta.url)));
const entry = 'app.mjs';
execFileSync(process.env.ESBUILD_BINARY || './node_modules/.bin/esbuild', ['src/'+entry,'--bundle','--format=iife','--target=es2022','--outfile=public/site.js','--log-level=error'], {stdio:'inherit'});
const routes = ['/', '/404', '/contact'];
for (const section of ['blogs', 'services', 'works']) {
  const rows = JSON.parse(readFileSync('content/'+section+'.json', 'utf8'));
  routes.push('/'+section, ...rows.map(row => '/'+section+'/'+row.Slug));
}
writeFileSync('routes.json', JSON.stringify(routes.sort(), null, 2)+'\n');
for (const route of routes) {
  const directory = join('public', route);
  mkdirSync(directory, {recursive:true});
  const base = '../'.repeat(route.split('/').filter(Boolean).length) || './';
  writeFileSync(join(directory,'index.html'), `<!doctype html>
<html lang="en" data-route="${route}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<base href="${base}"><title>MOTIOPTIC</title><link rel="stylesheet" href="site.css">
</head><body><div id="main"></div>
<script src="local.js"></script><script src="site.js"></script>
</body></html>`);
}
