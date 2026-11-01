import {acceptInquiry} from './contact.mjs';
import http from 'node:http';
import {createReadStream,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./public',import.meta.url));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.woff2':'font/woff2','.json':'application/json'};
http.createServer(async (req,res)=>{
  try {
    const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if (path==='/api/contact' && req.method==='POST') {
      if(req.headers['content-type']!=='application/json') return res.writeHead(415).end();
      let size=0;const chunks=[];
      for await(const chunk of req){size+=chunk.length;if(size>131072)return res.writeHead(413).end();chunks.push(chunk);}
      try {await acceptInquiry(Buffer.concat(chunks).toString('utf8'),fileURLToPath(new URL('./data',import.meta.url)));res.writeHead(200).end();}
      catch {res.writeHead(400).end('Unable to save inquiry.');}return;
    }
    let file=resolve(root,'.'+path);
    if(file!==root&&!file.startsWith(root+sep))throw Error();
    let status=200;
    if(!extname(path))file=resolve(file,'index.html');
    let size;
    try {size=statSync(file).size;} catch {if(extname(path))throw Error();file=resolve(root,'404/index.html');size=statSync(file).size;status=404;}
    let start=0,end=size-1;
    const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if(range){start=Number(range[1]);end=range[2]?Math.min(Number(range[2]),end):end;if(start>end){res.writeHead(416,{'Content-Range':'bytes */'+size}).end();return;}status=206;res.setHeader('Content-Range',`bytes ${start}-${end}/${size}`);}
    res.writeHead(status,{'Content-Type':mime[extname(file)]||'application/octet-stream','Accept-Ranges':'bytes','Content-Length':end-start+1});
    if(req.method==='HEAD')res.end();else createReadStream(file,{start,end}).pipe(res);
  } catch {res.writeHead(404).end();}
}).listen(Number(process.env.PORT||4173),process.env.HOST || '127.0.0.1',()=>console.log('Motioptic preview on http://127.0.0.1:'+(process.env.PORT||4173)));
