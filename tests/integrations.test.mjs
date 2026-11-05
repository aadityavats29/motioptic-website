import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {inquiryMessage,sendInquiryEmail,emailConfigured} from '../email.mjs';
const record={firstName:'Test ✓',lastName:'Person',email:'test@example.com',interest:'Branding',description:'Synthetic test\n<script>not HTML</script>',budget:'Not sure',startDate:'Flexible'};
test('Microsoft 365 message fixes the recipient and keeps visitor text as plain text',()=>{
 const payload=inquiryMessage(record);
 assert.equal(payload.message.toRecipients[0].emailAddress.address,'hyder@motioptic.com');
 assert.equal(payload.message.replyTo[0].emailAddress.address,'test@example.com');
 assert.equal(payload.message.body.contentType,'Text');assert(payload.message.body.content.includes(record.description));
 assert.throws(()=>inquiryMessage({...record,email:'test@example.com\r\nBcc: other@example.com'}));
});
test('Microsoft 365 delivery requests authorization and requires Graph acceptance (mock transport)',async()=>{
 const env={MS_TENANT_ID:'fake-tenant',MS_CLIENT_ID:'fake-client',MS_CLIENT_SECRET:'fake-secret'};assert(emailConfigured(env));const calls=[];
 const fetcher=async(url,opts)=>{calls.push({url,opts});return {ok:true,status:calls.length===1?200:202,json:async()=>({access_token:'fake-access'})}};
 assert.deepEqual(await sendInquiryEmail(record,{env,fetcher}),{accepted:true});assert.equal(calls.length,2);
 assert(calls[1].url.endsWith('/users/hyder%40motioptic.com/sendMail'));assert.equal(calls[1].opts.headers.Authorization,'Bearer fake-access');
 assert.equal(JSON.parse(calls[1].opts.body).message.toRecipients[0].emailAddress.address,'hyder@motioptic.com');
 await assert.rejects(()=>sendInquiryEmail(record,{env:{},fetcher}));
 await assert.rejects(()=>sendInquiryEmail(record,{env,fetcher:async()=>({ok:false})}));
 await assert.rejects(()=>sendInquiryEmail(record,{env,fetcher:async()=>({ok:true,json:async()=>({})})}));
 await assert.rejects(()=>sendInquiryEmail(record,{env,fetcher:async()=>({ok:true,status:200,json:async()=>({access_token:'fake-access'})})}));
});
test('analytics disables local tracking and strips sensitive URL data in production',async()=>{
 const script=readFileSync(new URL('../public/analytics.js',import.meta.url),'utf8');
 let fetches=0;const local={location:{protocol:'http:',hostname:'localhost'}};vm.runInNewContext(script,local);assert.equal(fetches,0);
 const appended=[],listeners={};const context={URL,location:{protocol:'https:',hostname:'example.com',origin:'https://example.com'},window:{addEventListener:(type,fn)=>{listeners[type]=fn}},document:{baseURI:'https://example.com/',createElement:()=>({dataset:{}}),head:{append:s=>appended.push(s)}},fetch:async()=>{fetches++;return {json:async()=>({analytics:{enabled:true,customEvents:true},routes:['/','/contact']})}}};
 await vm.runInNewContext(script,context);assert.equal(appended.length,1);assert.equal(appended[0].src,'/_vercel/insights/script.js');
 const filter=context.window.vaq[0][1];assert.equal(filter({url:'https://example.com/contact?email=secret@example.com#private'}).url,'https://example.com/contact');assert.equal(filter({url:'https://example.com/private-secret'}),null);
 listeners['motioptic:contact-saved']();const event=context.window.vaq[1];assert.equal(event[0],'event');assert.equal(event[1].name,'Contact enquiry');assert(!('data' in event[1]));
});
