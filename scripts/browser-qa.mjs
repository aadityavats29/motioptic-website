// Run in an unrestricted terminal after npm start. No form is submitted and no email is sent.
import {mkdir,writeFile} from 'node:fs/promises';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE?pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE)).href:'playwright');
const base=process.env.QA_URL||'http://127.0.0.1:4173';
const out=resolve('qa-results');await mkdir(out,{recursive:true});
const routes=JSON.parse(readFileSync(new URL('../routes.json',import.meta.url)));
const browser=await chromium.launch();const results=[];
try {
 for(const width of [390,809,810,1024,1439,1440]) {
  const context=await browser.newContext({viewport:{width,height:900},hasTouch:width===390,isMobile:width===390});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const route of routes) {
   const failures=[];const tag=route.replaceAll('/','-')||'home';const before=errors.length;
   try {
    await page.goto(base+route,{waitUntil:'networkidle'});await page.locator('h1').first().waitFor({state:'visible'});
    if(await page.locator('h1').count()!==1)failures.push('Expected one rendered H1');
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2))failures.push('Horizontal overflow');
    await page.screenshot({path:out+'/'+width+tag+'.png',fullPage:true});
    if(route!=='/privacy') {
     const menu=page.getByRole('button',{name:'Open menu',exact:true}).filter({visible:true}).first();
     for(let i=0;i<3;i++){await menu.click();await page.locator('#studio-menu[open]').waitFor();await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('#studio-menu')?.open);}
     await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));await page.waitForTimeout(250);await page.evaluate(()=>scrollTo(0,0));await menu.click();await page.keyboard.press('Escape');
    }
    if(route==='/contact') {await page.getByRole('button',{name:'Send',exact:true}).click();if(await page.locator(':invalid').count()===0)failures.push('Empty form did not expose required fields');}
    await page.reload({waitUntil:'networkidle'});
   }catch(e){failures.push(e.message);}
   failures.push(...errors.slice(before));results.push({width,route,failures});
  }
  await context.close();
 }
}finally{await browser.close();await writeFile(out+'/results.json',JSON.stringify(results,null,2));}
const failures=results.filter(r=>r.failures.length);console.log(`${results.length} route/viewport checks; ${failures.length} with findings. See qa-results.`);if(failures.length)process.exitCode=1;
