import {readFileSync} from 'node:fs';
const read = name => JSON.parse(readFileSync(new URL('./content/'+name+'.json',import.meta.url),'utf8'));
export const projects = read('works');
export const services = read('services');
export const site = read('site');
export const redirects = read('redirects');
const projectMedia=read('project-media');
export const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const h = escapeHTML;
const links = `<nav aria-label="Main"><a href="./">Home</a><a href="./works">Work</a><a href="./services">Services</a><a href="./contact">Contact</a></nav>`;
const paragraphs = texts => texts.filter(Boolean).map(text=>`<p>${h(text)}</p>`).join('');
const faq = () => `<section><h2>Questions before we start</h2>${site.faqs.map(([q,a])=>`<details><summary>${h(q)}</summary><p>${h(a)}</p></details>`).join('')}</section>`;
const projectList = () => `<ul class="studio-project-list">${projects.map(row=>`<li><a href="./works/${h(row.Slug)}"><img src="${h(row['Cover Image'].src)}" srcset="${h(row['Cover Image'].srcSet)}" sizes="(max-width: 700px) 100vw, 560px" width="1920" height="1080" alt="" loading="lazy">${h(row.Title)}</a> — ${h([1,2,3].map(n=>row['Tag '+n]).filter(Boolean).join(', '))}</li>`).join('')}</ul>`;
const serviceList = () => `<ul>${services.filter(row=>row.Slug!=='appui').map(row=>`<li><a href="./services/${h(row.Slug)}">${h(row.Title)}</a><p>${h(row['Short Description'])}</p></li>`).join('')}</ul>`;
export function pageContent(route) {
  let title, description, body;
  if (route==='/') {
    title='Motioptic — Branding, web and motion studio'; description='We design brands, websites and animation for startups and growing businesses.';
    body=`<h1>Motioptic — Branding, web and motion studio</h1>${paragraphs([description])}<p><a href="./works">See our work</a> · <a href="./contact">Start a project</a></p><h2>Services</h2>${serviceList()}<h2>Selected projects</h2>${projectList()}<h2>A small team of designers and animators</h2><p>We help brands look right and move well, from the logo to the website to the launch video.</p>${faq()}`;
  } else if (route==='/works') {
    title='Work — Motioptic'; description='Selected projects across branding, web and motion.'; body=`<h1>Work</h1><p>${description}</p>${projectList()}`;
  } else if (route==='/services') {
    title='Services — Motioptic'; description='Branding, UI/UX design, web development and animation. Four things we do well, on their own or as one project.'; body=`<h1>Services</h1><p>${description}</p>${serviceList()}`;
  } else if (route==='/contact') {
    title='Contact — Motioptic'; description='Tell us about your project. Send a few lines about what you need.'; body=`<h1>Contact</h1><p>${description}</p><p>Email <a href="mailto:${h(site.email)}">${h(site.email)}</a> to discuss your project.</p>${faq()}`;
  } else if (route==='/privacy') {
    title='Privacy — Motioptic'; description='How Motioptic handles project enquiries submitted through this website.';
    body=`<h1>Privacy</h1><p>Updated 4 November 2026.</p><h2>Project enquiries</h2><p>If you use our form, we collect your name, email, chosen service and project description, along with any budget and start-date details you choose to share. Please do not include sensitive personal information.</p><p>We use these details to review and respond to your enquiry. Enquiries may be sent to our Microsoft 365 business inbox or stored by the receiving service used for this website so we can respond. Submitting this form does not sign you up to a mailing list.</p><h2>Website operation</h2><p>The site loads its fonts and media locally. When enabled on our production website, we use Vercel Web Analytics to understand page visits. We may record that an enquiry was submitted, but we do not include form contents in analytics. Our analytics integration removes query strings and fragments from page URLs. No advertising script is installed. Hosting providers may keep technical access logs to operate the service.</p><h2>Your information</h2><p>To ask about, correct or request deletion of information you have sent us, contact <a href="mailto:${h(site.email)}">${h(site.email)}</a>. We will discuss your request and any information needed to identify your enquiry.</p><h2>Other websites</h2><p>Links to LinkedIn and other external sites are governed by those sites' own privacy practices.</p>`;
  } else {
    const project=projects.find(row=>route==='/works/'+row.Slug), service=services.find(row=>route==='/services/'+row.Slug), row=project||service;
    if(row){title=row.Title+' — Motioptic';description=project?`${row.Title}: ${[1,2,3].map(n=>row['Tag '+n]).filter(Boolean).join(', ')}. A selected Motioptic project.`:row['Short Description'];body=`<h1>${h(row.Title)}</h1><p>${h(description)}</p>`;
      if(project) body+=`<dl><dt>Client</dt><dd>${h(row.Title)}</dd><dt>Services</dt><dd>${h(row['List Title 2'])}</dd></dl>`;
      else for(let n=1;n<=3;n++){body+=`<h2>${h(row['Heading '+n])}</h2>${paragraphs(n===1?[row['Description 1']]:n===2?[row['Description 2'],row['Description 3']]:[row['Description 4'],row['Description 5']])}`;}
      if(row['Cover Image']) body+=`<img src="${h(row['Cover Image'].src)}" alt="${h(row['Cover Image'].alt)}"${project?' srcset="'+h(row['Cover Image'].srcSet)+'" sizes="(max-width: 1200px) 100vw, 1200px" width="1920" height="1080"':''}>`;
      if(projectMedia[row.Slug]) {const media=projectMedia[row.Slug];body+=`<figure><video controls playsinline preload="none" poster="${h(media.poster)}" src="${h(media.src)}" aria-label="${h(media.label)}"></video><figcaption>${h(media.label)}</figcaption></figure>`;}
    } else {title='Page not found — Motioptic';description='This page does not exist.';body='<h1>Page not found</h1><p>This page doesn’t exist.</p><a href="./">Back to the homepage</a>';}
  }
  return {title,description,html:`<div class="studio-static">${links}${body}<footer><p><a href="./contact">Start a project</a> · <a href="./privacy">Privacy</a> · <a href="${h(site.linkedin)}">LinkedIn</a></p><p>© ${new Date().getFullYear()} Motioptic</p></footer></div>`};
}
