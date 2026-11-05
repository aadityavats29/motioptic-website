import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {mkdtemp,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Writable} from 'node:stream';
import {handleRequest} from '../server.mjs';
import {acceptInquiry,validateInquiry} from '../contact.mjs';
import api from '../api/contact.mjs';
import {projects,services,redirects} from '../page-content.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=path=>readFileSync(join(root,path),'utf8');
async function request(url,method='GET',headers={}) {
 const chunks=[],out={headers:{}};
 const res=new Writable({write(chunk,encoding,cb){chunks.push(chunk);cb();}});
 res.setHeader=(key,value)=>{out.headers[key.toLowerCase()]=value;return res;};
 res.writeHead=(code,values={})=>{out.status=code;Object.entries(values).forEach(([k,v])=>res.setHeader(k,v));return res;};
 const finished=new Promise(resolve=>res.on('finish',resolve));
 await handleRequest({url,method,headers},res);await finished;
 return {...out,body:Buffer.concat(chunks).toString()};
}
test('every published route has content, unique metadata and one static H1',async()=>{
 const routes=JSON.parse(read('routes.json')),titles=new Set();
 for(const route of routes){const res=await request(route);assert.equal(res.status,route==='/404'?404:200,route);assert.equal((res.body.match(/<h1[ >]/g)||[]).length,1,route);assert(res.body.includes('<meta name="description"'));assert(res.body.includes('property="og:image"'));const title=res.body.match(/<title>(.*?)<\/title>/)[1];assert(!titles.has(title),title);titles.add(title);assert(!/Agencify|Bruno Anderson|Studio Vibe|Framer/i.test(res.body),route);}
 assert(existsSync(join(root,'public/media/share.png')));
});
test('seven permanent redirects preserve query strings and old files are absent',async()=>{
 assert.equal(Object.keys(redirects).length,7);
 for(const [old,next]of Object.entries(redirects))for(const suffix of ['','/']){const res=await request(old+suffix+'?source=shared');assert.equal(res.status,301);assert.equal(res.headers.location,next+'?source=shared');assert(!existsSync(join(root,'public',old,'index.html')));assert.equal((await request(next)).status,200);}
 const config=JSON.parse(read('vercel.json'));assert.deepEqual(config.redirects.map(r=>[r.source,r.destination,r.statusCode]),Object.entries(redirects).map(([a,b])=>[a,b,301]));
});
test('retired blog and arbitrary nested URLs return a usable noindex 404',async()=>{
 const retired=JSON.parse(read('content/blogs.json')).map(row=>'/blogs/'+row.Slug);
 for(const route of ['/blogs',...retired,'/nested/missing/page']){const res=await request(route);assert.equal(res.status,404,route);assert(res.body.includes('<base href="/">'));assert(res.body.includes('content="noindex"'));}
 assert(!existsSync(join(root,'public/blogs')));
});
test('all CMS assets are local and present; next/previous references remain valid',()=>{
 for(const rows of [projects,services])for(const row of rows){for(const key of ['Next','Previous'])if(row[key])assert(rows.some(r=>r.id===row[key]));for(const value of Object.values(row))if(value&&typeof value==='object'&&value.src){assert(!/^https?:/.test(value.src));assert(existsSync(join(root,'public',value.src.split('?')[0])),value.src);assert(value.alt);}}
 const media=JSON.parse(read('content/project-media.json'));for(const value of Object.values(media))for(const key of ['src','poster'])assert(existsSync(join(root,'public',value[key])));
});
const valid={firstName:'Test',lastName:'Person',email:'test@example.com',interest:'Branding',description:'Synthetic local test only.',budget:'Not sure',startDate:'Flexible'};
test('contact validates required fields and persists optional details outside public/',async()=>{
 for(const bad of [{...valid,email:'invalid'},{...valid,firstName:' '},{...valid,interest:'invalid'},{...valid,description:''},{...valid,description:'x'.repeat(8001)},{...valid,website:'spam'},null,[]])assert.throws(()=>validateInquiry(JSON.stringify(bad)));
 const dir=await mkdtemp(join(tmpdir(),'motioptic-test-'));try{await acceptInquiry(JSON.stringify(valid),dir);const record=JSON.parse(await readFile(join(dir,'inquiries.jsonl'),'utf8'));for(const [k,v]of Object.entries(valid))assert.equal(record[k],v);assert(record.receivedAt);}finally{await rm(dir,{recursive:true,force:true});}
});
test('static-host contact endpoint fails honestly without delivery configuration',async()=>{
 const old=process.env.CONTACT_WEBHOOK_URL;delete process.env.CONTACT_WEBHOOK_URL;
 const res={setHeader(){return this},status(code){this.code=code;return this},end(){return this},json(body){this.body=body;return this}};
 try{await api({method:'POST',headers:{'content-type':'application/json'},body:valid},res);assert.equal(res.code,503);assert.match(res.body.error,/email/);}finally{if(old!==undefined)process.env.CONTACT_WEBHOOK_URL=old;}
});
test('video range requests support scrubbing and HEAD does not send a body',async()=>{
 const range=await request('/media/projects/littledata.mp4','GET',{range:'bytes=0-99'});assert.equal(range.status,206);assert.equal(range.headers['content-length'],100);assert.match(range.headers['content-range'],/^bytes 0-99\//);
 const head=await request('/works','HEAD');assert.equal(head.status,200);assert.equal(head.body,'');
 const invalid=await request('/media/projects/littledata.mp4','GET',{range:'bytes=999999999-'});assert.equal(invalid.status,416);
});

test('static catalogs match the four services and seven projects',async()=>{
 const servicePage=(await request('/services')).body;
 assert.equal((servicePage.match(/<li>/g)||[]).length,4);
 assert(!servicePage.includes('./services/appui'));
 const workPage=(await request('/works')).body;
 assert.equal((workPage.match(/<li>/g)||[]).length,7);
 assert.equal((await request('/404/')).status,404);
});
test('production metadata and public contact use the confirmed domain and inbox',()=>{
 for(const route of JSON.parse(read('routes.json'))) {
  const html=read('public'+(route==='/'?'':route)+'/index.html');
  assert(html.includes('href="https://motioptic.com'+route+'"'),route);
  const project=projects.find(row=>route==='/works/'+row.Slug);
  const image=project?'media/covers/'+project.Slug+'-share.jpg':'media/share.png';
  assert(html.includes('content="https://motioptic.com/'+image+'"'),route);
  assert(existsSync(join(root,'public',image)),route);
  assert(!html.toLowerCase().includes('motioptic@gmail.com'),route);
 }
 const bundle=read('public/site.js');assert(!bundle.toLowerCase().includes('motioptic@gmail.com'));assert(bundle.includes('hyder@motioptic.com'));
 assert(read('public/robots.txt').includes('Sitemap: https://motioptic.com/sitemap.xml'));
 assert(read('public/sitemap.xml').includes('https://motioptic.com/works/elvis'));
});

test('project listings, detail images, video posters and social previews use the curated artwork',async()=>{
 const listings=await Promise.all(['/','/works'].map(async path=>(await request(path)).body));
 const videos=JSON.parse(read('content/project-media.json'));
 for(const project of projects){
  const cover=project['Cover Image'];
  const html=(await request('/works/'+project.Slug)).body;
  for(const page of [...listings,html]) assert(page.includes('src="'+cover.src+'"'),project.Slug);
  for(const candidate of cover.srcSet.split(', ')){
   const [path]=candidate.split(' ');
   assert(existsSync(join(root,'public',path)),path);
  }
  if(videos[project.Slug]) assert(html.includes('poster="'+cover.src+'"'),project.Slug);
  const social=(await request('/media/covers/'+project.Slug+'-share.jpg','HEAD'));
  assert.equal(social.status,200);
  assert.equal(social.headers['content-type'],'image/jpeg');
 }
});
