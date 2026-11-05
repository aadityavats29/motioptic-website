import {emailConfigured,sendInquiryEmail} from '../email.mjs';
import {validateInquiry} from '../contact.mjs';
export default async function handler(req,res) {
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST') return res.status(405).setHeader('Allow','POST').end();
  if(!String(req.headers['content-type']||'').startsWith('application/json')) return res.status(415).end();
  let record;
  try {
    const body=typeof req.body==='string'?req.body:JSON.stringify(req.body);
    if(Buffer.byteLength(body)>131072) return res.status(413).end();
    record=validateInquiry(body);
  } catch {return res.status(400).json({error:'Check your enquiry details.'});}
  if(emailConfigured()) {
    try {return res.status(200).json(await sendInquiryEmail(record));}
    catch {return res.status(502).json({error:'Please contact us by email.'});}
  }
  if(!process.env.CONTACT_WEBHOOK_URL) return res.status(503).json({error:'Please contact us by email.'});
  try {
    const url=new URL(process.env.CONTACT_WEBHOOK_URL);
    if(url.protocol!=='https:') throw Error('HTTPS required');
    const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.CONTACT_WEBHOOK_TOKEN?{Authorization:'Bearer '+process.env.CONTACT_WEBHOOK_TOKEN}:{})},body:JSON.stringify({...record,receivedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000)});
    if(!response.ok) throw Error('Delivery failed');
    return res.status(200).json({accepted:true});
  } catch {return res.status(502).json({error:'Please contact us by email.'});}
}
