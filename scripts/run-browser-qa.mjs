// Start an isolated local server and use an installed browser test library.
import {createRequire} from 'node:module';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {homedir} from 'node:os';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));process.chdir(root);
if(!process.env.PLAYWRIGHT_MODULE) {
 const require=createRequire(import.meta.url);
 for(const name of ['playwright','playwright-core']) {try{process.env.PLAYWRIGHT_MODULE=require.resolve(name);break;}catch{}}
 if(!process.env.PLAYWRIGHT_MODULE) {
  const links=join(homedir(),'Library/Caches/ms-playwright/.links');
  if(existsSync(links))for(const file of readdirSync(links)) {
   const entry=join(readFileSync(join(links,file),'utf8').trim(),'index.mjs');
   if(existsSync(entry)){process.env.PLAYWRIGHT_MODULE=entry;break;}
  }
 }
 if(!process.env.PLAYWRIGHT_MODULE)throw Error('Install the browser test dependency first: npm install --no-save --package-lock=false playwright && npx playwright install chromium');
}
process.env.HOST='127.0.0.1';process.env.PORT='0';
const {startServer}=await import('../server.mjs');const server=startServer();
try {
 await new Promise((resolve,reject)=>{server.once('listening',resolve);server.once('error',reject)});
 process.env.QA_URL='http://127.0.0.1:'+server.address().port;
 await import('./browser-qa.mjs');
} finally {await new Promise(resolve=>server.close(resolve));}
