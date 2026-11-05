// Hand-written shared UI. Keep business details in content/site.json.
import {c as jsx, l as jsxs, I as useState, P as useEffect, k as useRef} from './react.DcLFkBVj.mjs';
import site from '../content/site.json';
export function StudioFAQ() {
  if (!['/', '/contact'].includes(window.motiRoute())) return null;
  return jsxs('section', {className: 'studio-section studio-faq', 'aria-labelledby': 'faq-title', children: [
    jsx('h2', {id: 'faq-title', children: 'Questions before we start'}),
    ...site.faqs.map(([question, answer]) => jsxs('details', {children: [jsx('summary', {children: question}), jsx('p', {children: answer})]}, question)),
    jsxs('p', {children: ['Still have a question? ', jsx('a', {href: './contact', children: 'Get in touch.'})]})
  ]});
}
export function StudioFooter() {
  return jsxs('footer', {className: 'studio-section studio-footer', children: [
    jsxs('nav', {'aria-label': 'Footer', children: [
      ...[['Home','./'],['Work','./works'],['Services','./services'],['Contact','./contact'],['Privacy','./privacy']].map(([label, href]) => jsx('a', {href, children: label}, href))
    ]}),
    jsxs('div', {className: 'studio-footer-meta', children: [
      jsx('a', {href: 'mailto:'+site.email, children: site.email}),
      jsx('a', {href: site.linkedin, children: 'LinkedIn'}),
      jsx('span', {children: `© ${new Date().getFullYear()} Motioptic`}),
      jsx('a', {href: '#main', children: 'Back to top'})
    ]}),
    jsx('img', {className: 'studio-footer-wordmark', src: new URL('media/images/k7ILKZWu5lCwyfZzWBEEQ6str5Y.png', window.motiRoot).href, alt: '', loading: 'lazy', width: 2880, height: 1254})
  ]});
}
export function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  async function submit(event) {
    event.preventDefault();
    if (status === 'pending') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('pending'); setMessage('Saving your enquiry…');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(new URL('api/contact', window.motiRoot), {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(Object.fromEntries(new FormData(form))), signal: controller.signal});
      if (!response.ok) throw new Error('Request failed');
      const receipt=await response.json();
      setStatus('success'); setMessage(receipt.saved ? 'Thanks, your enquiry has been saved. You can also reach us by email.' : 'Thanks, your enquiry has been submitted. You can also reach us by email.');
      form.reset();
      window.dispatchEvent(new CustomEvent('motioptic:contact-saved'));
    } catch {
      setStatus('error'); setMessage('We could not confirm your enquiry was saved. Please email us directly, or try again.');
    } finally { clearTimeout(timeout); }
  }
  const input = (label, name, type='text', required=false, placeholder='', autoComplete) => jsxs('label', {children: [label, jsx('input', {name, type, required, placeholder, autoComplete, maxLength: name==='email'?254:120})]}, name);
  return jsxs('form', {className: 'studio-form', onSubmit: submit, children: [
    jsxs('p', {children: ['Prefer email? ', jsx('a', {href:'mailto:'+site.email, children: site.email})]}),
    jsxs('div', {className:'studio-form-row', children: [input('First name','firstName','text',true,'','given-name'),input('Last name','lastName','text',false,'','family-name')]}),
    input('Email','email','email',true,'you@example.com','email'),
    jsxs('label', {children: ['What do you need?', jsx('select', {name:'interest', required:true, defaultValue:'', children: ['', 'Branding','UI/UX design','Web development','Animation','Not sure yet'].map(value=>jsx('option',{value, disabled:!value, children:value||'Choose a service'},value))})]}),
    jsxs('div', {className:'studio-form-row', children:[input('Budget (optional; include currency)','budget','text',false,'Not sure yet'),input('When do you want to start? (optional)','startDate','text',false,'A date, month or “flexible”')]}),
    jsxs('label', {children:['Tell us about your project',jsx('textarea',{name:'description',required:true,maxLength:8000,rows:6,placeholder:'What do you do, who is it for, and what would you like to create?'})]}),
    jsx('div',{className:'studio-honeypot','aria-hidden':true,children:jsx('input',{name:'website',tabIndex:-1,autoComplete:'off'})}),
    jsxs('p',{children:['We use these details to respond to your enquiry. ',jsx('a',{href:'./privacy',children:'Privacy policy'})]}),
    jsx('button',{type:'submit',disabled:status==='pending',children:status==='pending'?'Saving…':'Send'}),
    jsx('p',{role:'status','aria-live':'polite',children:message})
  ]});
}
export function StudioLogos() {
  const logos = [['BIOV8','images/bAFlD2Ej8POIFKaCdYaNeLynjRg.png'],['Duradry','logos/duradry.png'],['Markovate','logos/markovate.svg'],['Content Army','logos/content-army.svg']];
  return jsxs('section',{className:'studio-section studio-logos',children:[jsx('h2',{children:"Brands we've worked with"}),jsx('div',{children:logos.map(([name,file])=>jsx('img',{src:new URL('media/'+file,window.motiRoot).href,alt:name,loading:'lazy'},name))})]});
}
import projectMedia from '../content/project-media.json';
export function ProjectVideo() {
  const slug=window.motiRoute().split('/').pop(), item=projectMedia[slug];
  if(!item) return null;
  return jsxs('figure',{className:'studio-project-video',children:[
    jsx('video',{controls:true,playsInline:true,preload:'none',poster:new URL(item.poster,window.motiRoot).href,src:new URL(item.src,window.motiRoot).href,'aria-label':item.label}),
    jsx('figcaption',{children:item.label})
  ]});
}
export function HeroFilm() {
  const section = useRef(null);
  const video = useRef(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.6);
  const [playing, setPlaying] = useState(false);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const el = section.current;
    const player = video.current;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let inView = false;
    let attempted = false;
    function refresh() {
      frame = 0;
      const progress = Math.min(1, Math.max(0, 1 - el.getBoundingClientRect().top / window.innerHeight));
      const sweep = reduced.matches ? 0 : progress * progress;
      el.style.setProperty('--film-margin', reduced.matches ? '0%' : ((1 - progress) * 12) + '%');
      el.style.setProperty('--film-turn', (sweep * 575) + 'deg');
      el.style.setProperty('--film-origin', (18 + 32 * progress) + '%');
      el.style.setProperty('--film-radius', (5 + 88 * sweep) + '%');
      if (inView && progress >= 0.83 && !attempted && !reduced.matches && player.dataset.userPaused !== 'true') {
        attempted = true;
        player.play().catch(() => {});
      }
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(refresh);
    }
    refresh();
    window.addEventListener('scroll', schedule, {passive:true});
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (!inView) {
        attempted = false;
        player.pause();
      } else {
        refresh();
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => { video.current.volume = volume; }, [volume]);
  function togglePlayback() {
    const player = video.current;
    player.dataset.userPaused = String(!player.paused);
    if (player.paused) player.play().catch(() => {});
    else player.pause();
  }
  function adjustVolume(event) {
    const level = Number(event.target.value);
    setMuted(level === 0);
    if (level > 0) setVolume(level);
  }
  return jsx('section', {className:'studio-hero-film', 'data-entered':entered, ref:section, 'aria-label':'Motioptic studio film', children:
    jsxs('div', {className:'studio-film-frame', children:[
      jsx('video', {ref:video, playsInline:true, loop:true, muted, preload:'metadata', 'aria-label':'Motioptic studio film',
        src:new URL('media/assets/9FY9bB8mxacI1yrU0d8kaRPJTvg.mp4',window.motiRoot).href,
        poster:new URL('media/projects/hero-poster.webp',window.motiRoot).href,
        onPlaying:()=>{setEntered(true); setPlaying(true);}, onPause:()=>setPlaying(false)}),
      !entered && jsx('button', {className:'studio-film-seal', type:'button', 'aria-label':'Play studio film',
        onClick:()=>{video.current.dataset.userPaused='false'; video.current.play().catch(()=>{});},
        children:jsxs('span',{className:'studio-film-turn',children:[
          jsx('img',{alt:'',width:439,height:439,src:new URL('media/images/tHxY30w7q6p2MyUkc6tM2wN0cUE.png',window.motiRoot).href}),
          jsx('span',{className:'studio-film-play', 'aria-hidden':true,children:'▶'})
        ]})
      }),
      jsxs('div', {className:'studio-film-controls', children:[
        jsx('button', {type:'button', onClick:togglePlayback, children:playing?'Pause':'Play'}),
        jsx('button', {type:'button', onClick:()=>setMuted(!muted), children:muted?'Unmute':'Mute'}),
        jsx('input', {type:'range', min:0, max:1, step:0.01, value:muted?0:volume, onChange:adjustVolume, 'aria-label':'Film volume'})
      ]})
    ]})
  });
}
