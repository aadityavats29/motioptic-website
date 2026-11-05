// Microsoft 365 delivery. Credentials stay server-side; the recipient comes from studio config.
import {readFileSync} from 'node:fs';
const site=JSON.parse(readFileSync(new URL('./content/site.json',import.meta.url),'utf8'));
export function emailConfigured(env=process.env) {
  return Boolean(env.MS_TENANT_ID && env.MS_CLIENT_ID && env.MS_CLIENT_SECRET);
}
export function inquiryMessage(record) {
  if(!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(record.email)) throw Error('Invalid reply address');
  const text=[`Name: ${record.firstName} ${record.lastName}`.trim(),`Email: ${record.email}`,`Service: ${record.interest}`,`Budget: ${record.budget||'Not specified'}`,`Start: ${record.startDate||'Not specified'}`,'','Project:',record.description].join('\n');
  return {message:{subject:'New Motioptic website enquiry',body:{contentType:'Text',content:text},toRecipients:[{emailAddress:{address:site.email}}],replyTo:[{emailAddress:{address:record.email}}]},saveToSentItems:true};
}
export async function sendInquiryEmail(record,{env=process.env,fetcher=fetch}={}) {
  if(!emailConfigured(env))throw Error('Email delivery is not configured');
  const message=inquiryMessage(record);
  const tokenResponse=await fetcher(`https://login.microsoftonline.com/${encodeURIComponent(env.MS_TENANT_ID)}/oauth2/v2.0/token`,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:env.MS_CLIENT_ID,client_secret:env.MS_CLIENT_SECRET,scope:'https://graph.microsoft.com/.default',grant_type:'client_credentials'}),signal:AbortSignal.timeout(5000)});
  if(!tokenResponse.ok)throw Error('Email authorization failed');
  const token=await tokenResponse.json();
  if(!token.access_token)throw Error('Email authorization failed');
  const response=await fetcher(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(site.email)}/sendMail`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+token.access_token},body:JSON.stringify(message),signal:AbortSignal.timeout(7000)});
  if(response.status!==202)throw Error('Email was not accepted');
  // Graph's 202 means accepted for processing, not confirmed inbox delivery.
  return {accepted:true};
}
