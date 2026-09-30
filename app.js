(() => {
'use strict';
const TZ='Asia/Dubai', KEY='hq.pw', REPO='bornaxahadi/hq', API='https://api.github.com/repos/'+REPO+'/contents/';

/* ================= icons ================= */
const P={
 mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/>',
 folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
 bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 chart:'<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>',
 rocket:'<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 12a13 13 0 0 1 11-9 13 13 0 0 1-9 11l-2-2z"/><path d="M9 12H5l2-4h5M12 15v4l4-2v-5"/>',
 brief:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
 cal:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
 refresh:'<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 ai:'<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
 ar:'<path d="M4 7h16M4 12h10M4 17h7"/><path d="M17 14l3 3-3 3"/>',
 gym:'<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
 deal:'<path d="M11 17l-2 2a2 2 0 0 1-3-3l4-4a2 2 0 0 1 3 0"/><path d="M13 7l2-2a2 2 0 0 1 3 3l-4 4a2 2 0 0 1-3 0"/><path d="M8 12l4 4M12 8l4 4"/>',
 moon:'<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
 check:'<path d="M5 12l5 5L20 7"/>',
 flame:'<path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 10-1-1-2-2-2-4-2 2-2 4-2 6 0 4 4 7 8 7z"/>',
 star:'<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.3L12 17.5 6.5 20.4l1-6.3L3 9.7l6.2-.9z"/>',
 trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 heart:'<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"/>',
 msg:'<path d="M21 12a8 8 0 0 1-12 7l-5 1 1-4A8 8 0 1 1 21 12z"/>',
 users:'<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 3a4 4 0 0 1 0 8M22 21a7 7 0 0 0-5-6.7"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 alert:'<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17v.5"/>',
 edit:'<path d="M4 20h4L20 8l-4-4L4 16z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 bulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
 book:'<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
 cloud:'<path d="M7 18a5 5 0 0 1-.5-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/>',
 play:'<path d="M8 5l11 7-11 7z"/>',
 share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
 crown:'<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/>',
 gem:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18 3-18"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
 chev:'<path d="M9 6l6 6-6 6"/>',
 down:'<path d="M6 9l6 6 6-6"/>',
 spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
 money:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>',
 pin:'<path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
 key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.5 12.5L21 2M16 7l3 3M18 5l2 2"/>',
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
 youtube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>',
 facebook:'<path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h2z"/>'
};
const ic=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24">${P[n]||''}</svg>`;

/* ================= utils ================= */
let D=null, U=null, charts=[], PW=null, TOKEN=null, filter='all', tfilter='open', syncState='local', showRoutine={};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const css=v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const fmt=n=>n==null?'—':n>=1e6?(n/1e6).toFixed(1).replace('.0','')+'M':n>=1e4?Math.round(n/1e3)+'K':n>=1e3?(n/1e3).toFixed(1).replace('.0','')+'K':String(n);
const hrs=h=>h?(h%1?h.toFixed(1):h)+'h':'0h';
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
function nowD(){const p=new Intl.DateTimeFormat('en-GB',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());const g=t=>p.find(x=>x.type===t).value;return{date:`${g('year')}-${g('month')}-${g('day')}`,mins:(+g('hour')%24)*60+(+g('minute'))}}
const toMin=hm=>{const[h,m]=(hm||'0:0').split(':').map(Number);return h*60+(m||0)};
const fd=(iso,o={day:'numeric',month:'short'})=>iso?new Date(iso+(iso.length===10?'T12:00:00':'')).toLocaleDateString('en-GB',{...o,timeZone:TZ}):'';
const addDays=(iso,n)=>{const d=new Date(iso+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)};
const daysBetween=(a,b)=>Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/864e5);
function ago(iso){const s=(Date.now()-new Date(iso))/1e3;return s<90?'just now':s<3600?Math.round(s/60)+' min ago':s<86400?Math.round(s/3600)+' h ago':Math.round(s/86400)+' days ago'}
function ring(pct,size,stroke,grad='url(#lg)'){const r=(size-stroke)/2,c=2*Math.PI*r;return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${grad}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-Math.max(0,Math.min(1,pct||0)))}"/></svg>`}
const stat=(v,l,icn,d='',color='')=>`<div class="stat"><div class="l">${icn?ic(icn):''}${esc(l)}</div><div class="v" ${color?`style="color:${color}"`:''}>${v}</div>${d}</div>`;
const card=(title,icn,bg,body,aside='',cls='')=>`<div class="card ${cls}"><div class="ch"><div class="ic ${bg}">${ic(icn)}</div><h3>${title}</h3>${aside?`<span class="aside">${aside}</span>`:''}</div>${body}</div>`;
const empty=(t,icn='clock')=>`<div class="empty">${ic(icn)}${esc(t)}</div>`;
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2000)}

/* ================= crypto ================= */
const b64d=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const b64e=u=>{let s='';u.forEach(b=>s+=String.fromCharCode(b));return btoa(s)};
const keyCache={};
async function dkey(salt,iter){const k=salt+':'+iter;if(keyCache[k])return keyCache[k];
 const base=await crypto.subtle.importKey('raw',new TextEncoder().encode(PW),'PBKDF2',false,['deriveKey']);
 return keyCache[k]=await crypto.subtle.deriveKey({name:'PBKDF2',hash:'SHA-256',salt:b64d(salt),iterations:iter},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
async function dec(blob){const k=await dkey(blob.salt,blob.iter);return JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:b64d(blob.iv)},k,b64d(blob.ct))))}
let userSalt=null;
async function enc(obj,salt){salt=salt||b64e(crypto.getRandomValues(new Uint8Array(16)));const iter=600000,iv=crypto.getRandomValues(new Uint8Array(12));
 const k=await dkey(salt,iter);const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},k,new TextEncoder().encode(JSON.stringify(obj))));
 return JSON.stringify({v:1,kdf:'PBKDF2-SHA256',iter,salt,iv:b64e(iv),ct:b64e(ct)})}

/* ================= storage / github ================= */
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
async function pagesJSON(path){const r=await fetch(path+'?t='+Date.now(),{cache:'no-store'});if(r.status===404)return null;if(!r.ok)throw new Error('Load failed ('+r.status+')');return r.json()}
async function ghGet(path){const r=await fetch(API+path+'?ref=main&t='+Date.now(),{headers:{Authorization:'Bearer '+TOKEN,Accept:'application/vnd.github+json'},cache:'no-store'});
 if(r.status===404)return null;if(!r.ok)throw new Error('GitHub '+r.status);const j=await r.json();return{sha:j.sha,json:JSON.parse(atob(j.content.replace(/\s/g,'')))}}
async function ghPut(path,text,sha,msg){const r=await fetch(API+path,{method:'PUT',headers:{Authorization:'Bearer '+TOKEN,Accept:'application/vnd.github+json','Content-Type':'application/json'},
 body:JSON.stringify({message:msg,content:btoa(text),branch:'main',...(sha?{sha}:{})})});if(!r.ok){const e=new Error('GitHub '+r.status);e.status=r.status;throw e}return (await r.json()).content.sha}
const emptyU=()=>({v:1,todos:[],ctodo:{},checkins:{},deals:[],cal_requests:[],meetings:[],seen:{},feedback:[],places:[],visits:[],inbox:[],projects:[],people:[],pipe:[],txns:[],costs:[],kv:{},habits:{},updated:null});
function mergeArr(a=[],b=[]){const m={};[...a,...b].forEach(x=>{if(!x||!x.id)return;const o=m[x.id];if(!o||(x.updated||'')>(o.updated||''))m[x.id]=x});return Object.values(m)}
function mergeObj(a={},b={},f='updated'){const m={...a};Object.entries(b).forEach(([k,v])=>{if(!m[k]||(v[f]||'')>(m[k][f]||''))m[k]=v});return m}
function mergeU(r,l){r=r||emptyU();return{v:1,todos:mergeArr(r.todos,l.todos),ctodo:mergeObj(r.ctodo,l.ctodo),checkins:mergeObj(r.checkins,l.checkins,'savedAt'),deals:mergeArr(r.deals,l.deals),cal_requests:mergeArr(r.cal_requests,l.cal_requests),meetings:mergeArr(r.meetings,l.meetings),seen:mergeObj(r.seen,l.seen),feedback:mergeArr(r.feedback,l.feedback),places:mergeArr(r.places,l.places),visits:mergeArr(r.visits,l.visits).sort((a,b)=>a.at<b.at?-1:1).slice(-400),inbox:mergeArr(r.inbox,l.inbox),projects:mergeArr(r.projects,l.projects),people:mergeArr(r.people,l.people),pipe:mergeArr(r.pipe,l.pipe),txns:mergeArr(r.txns,l.txns),costs:mergeArr(r.costs,l.costs),kv:mergeObj(r.kv,l.kv),habits:mergeObj(r.habits,l.habits,'savedAt'),updated:new Date().toISOString()}}
async function loadUser(){
 let remote=null;
 try{ if(TOKEN){const g=await ghGet('user.enc');if(g){userSalt=g.json.salt;remote=await dec(g.json)}} else {const j=await pagesJSON('user.enc');if(j){userSalt=j.salt;remote=await dec(j)}} }catch(e){console.warn(e)}
 let local=null;try{const t=ls.get('hq.user');if(t)local=JSON.parse(t)}catch(e){}
 U=local?mergeU(remote,local):(remote||emptyU());U={...emptyU(),...U};
 ls.set('hq.user',JSON.stringify(U));
 if(local&&TOKEN&&JSON.stringify(local)!==JSON.stringify(remote))queueSave();
}
async function loadToken(){
 const t=ls.get('hq.tok');if(t){TOKEN=t;return}
 try{const j=await pagesJSON('key.enc');if(j){const k=await dec(j);if(k.token){TOKEN=k.token;ls.set('hq.tok',TOKEN)}}}catch(e){console.warn('key',e)}
}
let saveTimer=null,saving=false,again=false;
function queueSave(){U.updated=new Date().toISOString();ls.set('hq.user',JSON.stringify(U));
 if(!TOKEN){setSync('local');return}
 setSync('busy');clearTimeout(saveTimer);saveTimer=setTimeout(doSave,700)}
async function doSave(){if(saving){again=true;return}saving=true;
 try{for(let i=0;i<3;i++){const g=await ghGet('user.enc');let remote=null,sha=null;if(g){sha=g.sha;userSalt=g.json.salt;remote=await dec(g.json)}
   const merged=mergeU(remote,U);try{await ghPut('user.enc',await enc(merged,userSalt),sha,'Update from app');U=merged;ls.set('hq.user',JSON.stringify(U));setSync('ok');break}catch(e){if(e.status!==409&&e.status!==422)throw e}}
 }catch(e){console.warn(e);setSync('local');toast(e.status===401||e.status===403?'Saving key not valid — check Settings':'Saved on this device; will sync later')}
 saving=false;if(again){again=false;doSave()}}
function setSync(s){syncState=s;const el=$('#sync');if(!el)return;el.className='sync '+s;el.innerHTML=`<i></i>${s==='ok'?'Synced':s==='busy'?'Saving…':'This device'}`;
 const b=$('#banner');if(b)b.classList.toggle('hidden',!!TOKEN)}

/* ================= unlock ================= */
async function unlock(p,rem){PW=p;for(const k in keyCache)delete keyCache[k];const blob=await pagesJSON('data.enc');if(!blob)throw new Error('No data yet');D=await dec(blob);
 rem?ls.set(KEY,p):ls.del(KEY);await loadToken();await loadUser();hashHook();
 $('#lock').classList.add('hidden');$('#app').classList.remove('hidden');render();setSync(TOKEN?'ok':'local');checkPlace()}
$('#lockform').addEventListener('submit',async e=>{e.preventDefault();const b=$('#unlock');b.disabled=true;b.textContent='Unlocking…';$('#err').textContent='';
 try{await unlock($('#pw').value,$('#rem').checked)}catch(err){PW=null;$('#err').textContent=err.name==='OperationError'?'Wrong password.':(err.message||'Something went wrong.')}b.disabled=false;b.textContent='Unlock'});
async function reload(){try{D=await dec(await pagesJSON('data.enc'));await loadUser();render();toast('Updated '+ago(D.updated))}catch(e){toast('Could not reload')}}

/* ================= derived data ================= */
const SUBJ=[{k:'ai',n:'Claude AI',i:'ai',bg:'bg-v',c:'#8b5cf6'},{k:'arabic',n:'Arabic',i:'ar',bg:'bg-a',c:'#fbbf24'},{k:'content',n:'Content',i:'play',bg:'bg-b',c:'#60a5fa'},{k:'other',n:'Other',i:'book',bg:'bg-c',c:'#22d3ee'}];
function entries(){
 const m={};
 (D.log||[]).forEach(e=>{const w=Array.isArray(e.arabic)?e.arabic.length:(e.arabic?String(e.arabic).split(',').length:0);
  m[e.date]={date:e.date,hours:{ai:e.ai?1:0,arabic:w?0.5:0,content:0,other:0},gym:e.gym===true||(typeof e.gym==='string'&&!!e.gym&&!/^no/i.test(e.gym)),gymMin:0,met:0,opps:e.deals?1:0,words:w,score:+e.score||0,win:e.win||'',blocker:e.blocker||'',ai:e.ai||'',wordsText:Array.isArray(e.arabic)?e.arabic.join(', '):(e.arabic||''),src:'doc'}});
 Object.entries(U?.checkins||{}).forEach(([d,c])=>{const w=(c.words||'').split(/[,،\n]/).map(s=>s.trim()).filter(Boolean);
  m[d]={date:d,hours:{ai:+c.study?.ai||0,arabic:+c.study?.arabic||0,content:+c.study?.content||0,other:+c.study?.other||0},gym:(c.gymMin||0)>0,gymMin:c.gymMin||0,
   met:(c.meetings||[]).filter(x=>x.attended).length,opps:(c.opportunity||'').trim()?1:0,words:w.length,score:+c.score||0,win:c.win||'',blocker:c.blocker||'',ai:c.aiNote||'',wordsText:w.join(', '),src:'app'}});
 const gd={};(U?.visits||[]).forEach(v=>{if(!v.deleted&&/gym/i.test(v.place||''))gd[dubaiDate(v.at)]=1});
 Object.keys(gd).forEach(d=>{const g=gymMin(d);if(g<20)return;if(m[d]){if(!m[d].gym){m[d].gym=true;m[d].gymMin=g}}else m[d]={date:d,hours:{ai:0,arabic:0,content:0,other:0},gym:true,gymMin:g,met:0,opps:0,words:0,score:0,win:'',blocker:'',ai:'',wordsText:'',src:'auto'}});
 return Object.values(m).sort((a,b)=>a.date<b.date?-1:1);
}
const totalH=e=>SUBJ.reduce((a,s)=>a+(e.hours[s.k]||0),0);
function dayXP(e){return 10+Math.min(Math.round(totalH(e)*20),100)+Math.min(e.words*3,30)+(e.gym?40:0)+e.met*15+e.opps*25+(e.score>=8?20:0)}
const TITLES=['Rookie','Apprentice','Explorer','Builder','Operator','Strategist','Pro','Master','Mogul','Legend'];
function game(){
 const L=entries(),today=nowD().date;
 const doneTodos=(U?.todos||[]).filter(t=>t.done&&!t.deleted).length+Object.values(U?.ctodo||{}).filter(x=>x.done).length;
 const logged=(U?.meetings||[]).filter(m=>m.loggedAt&&m.status==='done').length;
 const xp=L.reduce((a,e)=>a+dayXP(e),0)+doneTodos*5+logged*15+habXP();
 const level=Math.floor(Math.sqrt(xp/60))+1,cur=60*(level-1)**2,nxt=60*level**2;
 const streak=f=>{let s=0,prev=null;for(let i=L.length-1;i>=0;i--){if(prev&&daysBetween(L[i].date,prev)>1)break;if(f&&!f(L[i]))break;s++;prev=L[i].date}if(L.length&&daysBetween(L[L.length-1].date,today)>1)return 0;return s};
 const words=(D.arabic_words||[]).length||L.reduce((a,e)=>a+e.words,0);
 const H={};SUBJ.forEach(s=>H[s.k]=L.reduce((a,e)=>a+(e.hours[s.k]||0),0));
 const followers=(D.social||[]).reduce((a,s)=>a+(s.followers||0),0);
 const allDeals=[...(D.deals||[]),...(U?.deals||[]).filter(d=>!d.deleted)];
 const B=[
  {n:'First step',d:'Log your first day',icn:'star',bg:'bg-a',ok:L.length>=1},
  {n:'On fire',d:'7-day check-in streak',icn:'flame',bg:'bg-o',ok:streak()>=7},
  {n:'Unstoppable',d:'30-day streak',icn:'bolt',bg:'bg-p',ok:streak()>=30},
  {n:'AI 20h',d:'Study AI for 20 hours',icn:'ai',bg:'bg-v',ok:H.ai>=20},
  {n:'Iron will',d:'12 gym sessions',icn:'gym',bg:'bg-g',ok:L.filter(e=>e.gym).length>=12},
  {n:'Arabic 50',d:'Learn 50 words',icn:'ar',bg:'bg-c',ok:words>=50},
  {n:'Healthy week',d:'7 days with 5+ habits',icn:'heart',bg:'bg-g',ok:healthyWeek()},
  {n:'Networker',d:'Attend 10 meetings',icn:'users',bg:'bg-a',ok:L.reduce((a,e)=>a+e.met,0)>=10},
  {n:'Follow-through',d:'Log 5 meeting results',icn:'check',bg:'bg-c',ok:logged>=5},
  {n:'Hunter',d:'Log 5 new opportunities',icn:'target',bg:'bg-o',ok:allDeals.length>=6},
  {n:'Deal maker',d:'Close a deal',icn:'deal',bg:'bg-g',ok:allDeals.some(d=>d.status==='Closed')},
  {n:'Finisher',d:'Complete 25 to-dos',icn:'list',bg:'bg-v',ok:doneTodos>=25},
  {n:'Audience 1K',d:'1,000 followers total',icn:'users',bg:'bg-p',ok:followers>=1000},
  {n:'Perfect day',d:'Score a 10/10 day',icn:'crown',bg:'bg-o',ok:L.some(e=>e.score>=10)},
  {n:'Level 5',d:'Reach Operator',icn:'gem',bg:'bg-v',ok:level>=5},
  {n:'Reviewed',d:'Finish a monthly test',icn:'trophy',bg:'bg-g',ok:(D.reviews||[]).length>0}];
 return{L,xp,level,cur,nxt,title:TITLES[Math.min(level-1,9)],streak:streak(),streakOf:streak,words,H,badges:B,followers,doneTodos};
}
function todos(){const c=(D.todos||[]).map(t=>({...t,claude:true,done:!!U.ctodo[t.id]?.done,doneAt:U.ctodo[t.id]?.updated}));
 return [...c,...(U.todos||[]).filter(t=>!t.deleted)].sort((a,b)=>(a.done-b.done)||((a.due||'9')<(b.due||'9')?-1:(a.due||'9')>(b.due||'9')?1:0))}
function eventsOn(date){const ms=meetings().filter(m=>m.date===date&&m.status!=='cancelled');
 const ev=(D.calendar?.events||[]).filter(e=>e.date===date&&!ms.some(m=>m.time===e.time&&(e.title||'').toLowerCase().includes((m.person||'#').split(' ')[0].toLowerCase()))).map(e=>({...e,kind:'event'}));
 ev.push(...ms.map(m=>({id:m.id,title:mName(m),time:m.time,where:m.place,notes:agendaL(m).length?agendaL(m).length+' agenda points':'',kind:'meeting'})));
 const pend=(U.cal_requests||[]).filter(r=>!r.deleted&&r.date===date&&!(D.cal_done||[]).includes(r.id)).map(r=>({...r,kind:'pending'}));
 return [...ev,...pend].sort((a,b)=>(a.time||'')<(b.time||'')?-1:1)}

/* ================= meetings & alerts ================= */
function meetings(){const m={};(D.meetings||[]).forEach(x=>m[x.id]={...x,src:'claude'});(U.meetings||[]).forEach(x=>{m[x.id]={...(m[x.id]||{}),...x}});
 return Object.values(m).filter(x=>!x.deleted&&x.date).sort((a,b)=>(a.date+(a.time||''))<(b.date+(b.time||''))?-1:1)}
const mStart=m=>new Date(`${m.date}T${m.time||'09:00'}:00+04:00`);
function mState(m){const now=Date.now(),s=mStart(m).getTime(),e=s+(m.duration||60)*6e4;
 if(m.status==='cancelled')return 'cancelled';if(m.status==='done')return 'done';if(now<s)return 'upcoming';if(now<e)return 'now';return 'needs'}
function untilTxt(m){const d=mStart(m)-Date.now();if(d<=0)return 'now';const mi=Math.round(d/6e4);if(mi<60)return `in ${mi} min`;const h=Math.floor(mi/60);const dd=daysBetween(nowD().date,m.date);
 if(h<12||dd===0)return `in ${h}h${mi%60?' '+(mi%60)+'m':''}`;return dd===1?'tomorrow':`in ${dd} days`}
const mName=m=>m.title||('Meeting with '+(m.person||'someone'));
const agendaL=m=>(Array.isArray(m.agenda)?m.agenda:String(m.agenda||'').split('\n')).map(s=>String(s).replace(/^[-•*\d.)\s]+/,'').trim()).filter(Boolean);
const mapUrl=p=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p+(/dubai/i.test(p)?'':', Dubai'));
const allDeals=()=>[...(D.deals||[]),...(U.deals||[]).filter(d=>!d.deleted)];
const dealName=id=>id?(allDeals().find(d=>d.id===id)||{}).name:'';
function followups(){return meetings().filter(m=>m.status==='done'&&m.followup&&!m.followDone).sort((a,b)=>a.followup<b.followup?-1:1)}
function upsertMeet(id,rec){U.meetings=U.meetings||[];const ex=U.meetings.find(x=>x.id===id);if(ex)Object.assign(ex,rec);else U.meetings.push({id,...rec})}
function inCal(m){const s=(D.meeting_sync||{})[m.id];return !!s&&s>=(m.updated||'')}
function meetCard(m,big){const st=mState(m),ag=agendaL(m),note=(D.meeting_notes||{})[m.id],dn=dealName(m.deal);
 const lbl={upcoming:untilTxt(m),now:'Happening now',needs:'Log the result',done:m.mood?m.mood:'Done',cancelled:'Cancelled'}[st];
 const pc={upcoming:'b',now:'g',needs:'w',done:'g',cancelled:'r'}[st];
 return `<div class="meet ${st} ${big?'big':''}">
  <div class="mt"><div class="when"><b>${esc(m.time||'—')}</b><small>${fd(m.date,{weekday:'short',day:'numeric',month:'short'})}</small></div>
   <div class="who"><b>${esc(m.person||mName(m))}</b><small>${esc(m.company||(m.person?'Meeting':''))}</small></div>
   <span class="pill ${pc}">${lbl}</span></div>
  <div class="meta">${m.place?`<a href="${mapUrl(m.place)}" target="_blank" rel="noopener noreferrer">${ic('pin')}${esc(m.place)}</a>`:''}${m.goal?`<span>${ic('target')}${esc(m.goal)}</span>`:''}${dn?`<span>${ic('deal')}${esc(dn)}</span>`:''}${st==='upcoming'?`<span>${ic('cal')}${inCal(m)?'In Google Calendar':'Adding to calendar…'}</span>`:''}</div>
  ${big&&ag.length&&st!=='done'?`<div class="agenda"><div class="lab">Agenda</div>${ag.map(a=>`<div class="ag">${ic('chev')}<span>${esc(a)}</span></div>`).join('')}</div>`:''}
  ${big&&!ag.length&&(st==='upcoming'||st==='now')?`<button class="addag" data-editmeet="${m.id}">${ic('plus')}Add the agenda — what do you want from this meeting?</button>`:''}
  ${note?.prep&&st!=='done'&&st!=='cancelled'?`<div class="note"><b>${ic('spark')}Claude’s prep</b>${esc(note.prep)}</div>`:''}
  ${st==='done'?`${m.outcome?`<div class="sm" style="margin-top:8px">${esc(m.outcome)}</div>`:''}${(m.next||[]).length?`<div class="agenda"><div class="lab">Next steps</div>${m.next.map(a=>`<div class="ag">${ic('chev')}<span>${esc(a)}</span></div>`).join('')}</div>`:''}${m.followup?`<div class="xs faint" style="margin-top:6px">${m.followDone?'Followed up ✓':'Follow up '+fd(m.followup)}</div>`:''}${note?.after?`<div class="note"><b>${ic('spark')}Claude</b>${esc(note.after)}</div>`:''}`:''}
  ${big||st==='needs'?`<div class="mbtns">${st==='needs'||st==='now'?`<button class="btn2 pri" data-result="${m.id}">${ic('check')} Log result</button>`:''}${st==='done'||st==='cancelled'?`<button class="btn2" data-result="${m.id}">${ic('edit')} Update result</button>`:`<button class="btn2" data-editmeet="${m.id}">${ic('edit')} Edit</button>`}</div>`:`<button class="mopen" data-${st==='done'||st==='cancelled'?'result':'editmeet'}="${m.id}" aria-label="Open">${ic('chev')}</button>`}
 </div>`}
const fuRow=m=>{const left=daysBetween(nowD().date,m.followup);return `<div class="row"><div class="ico ${left<0?'bg-r':left===0?'bg-o':'bg-a'}">${ic('bell')}</div><div class="tx"><b>${esc(m.person||mName(m))}</b><div>${left<0?`${-left}d overdue`:left===0?'Today':fd(m.followup,{weekday:'short',day:'numeric',month:'short'})} · ${esc(String((m.next||[])[0]||m.outcome||mName(m)).slice(0,90))}</div></div><button class="pill g" data-fudone="${m.id}">${ic('check')}Done</button></div>`};
function alerts(kinds){return (D.alerts||[]).filter(a=>!(U.seen||{})[a.id]&&(!kinds||kinds.includes(a.type))).slice(0,4)}
function alertRow(a){return `<div class="alert ${a.level||''}"><div class="ai ${a.level==='hot'?'bg-o':a.type==='milestone'?'bg-a':a.type==='app'?'bg-grad':'bg-v'}">${ic(a.level==='hot'?'flame':a.type==='milestone'?'trophy':a.type==='meeting'?'users':'spark')}</div><div class="tx"><b>${esc(a.title)}</b>${a.text?`<div>${esc(a.text)}</div>`:''}${a.url?`<a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a>`:''}</div><button class="x" data-seen="${a.id}" aria-label="Dismiss">${ic('x')}</button></div>`}
function isViral(p,r){const v=r.map(x=>x.views||0).filter(Boolean).sort((a,b)=>a-b);const med=v.length?v[Math.floor(v.length/2)]:0;return p.viral||((p.views||0)>=1000&&(p.views||0)>=5*Math.max(med,50))}
function parseMeet(t){const r={},n=nowD(),lw=' '+t.toLowerCase()+' ';
 if(/\btomorrow\b/.test(lw))r.date=addDays(n.date,1);else if(/\btoday\b|\btonight\b/.test(lw))r.date=n.date;
 else{const W=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];const wi=W.findIndex(w=>new RegExp('\\b('+w+'|'+w.slice(0,3)+')\\b').test(lw));
  if(wi>=0){const cur=new Date(n.date+'T12:00:00Z').getUTCDay();r.date=addDays(n.date,(wi-cur+7)%7||7)}
  const M=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];let dm=lw.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*/),day,mon;
  if(dm){day=+dm[1];mon=M.indexOf(dm[2])+1}else{dm=lw.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(\d{1,2})\b/);if(dm){day=+dm[2];mon=M.indexOf(dm[1])+1}}
  if(mon){const y=+n.date.slice(0,4);let iso=`${y}-${String(mon).padStart(2,'0')}-${String(day).padStart(2,'0')}`;if(iso<n.date)iso=(y+1)+iso.slice(4);r.date=iso}}
 const tm=lw.match(/\b(\d{1,2})(?:[:.](\d{2}))?\s*(a\.?\s?m\b\.?|p\.?\s?m\b\.?)/)||lw.match(/\b(\d{1,2}):(\d{2})\b/);
 if(tm){let h=+tm[1];const mi=+(tm[2]||0),ap=(tm[3]||'').replace(/[.\s]/g,'');if(ap==='pm'&&h<12)h+=12;if(ap==='am'&&h===12)h=0;if(h<24)r.time=`${String(h).padStart(2,'0')}:${String(mi).padStart(2,'0')}`}
 const stop='(?=\\s+(?:at|in|on|tomorrow|today|tonight|about|regarding|to discuss)\\b|\\s*[,.;]|\\s*$)';
 const w=t.match(new RegExp('\\bwith\\s+(.+?)'+stop,'i'));if(w)r.person=w[1].trim();
 const ab=t.match(/\b(?:about|regarding|to discuss)\s+(.+)$/i);if(ab)r.agenda=ab[1].trim();
 const at=t.match(new RegExp('\\b(?:at|in)\\s+([A-Za-z][^,;]*?)'+stop.replace('at|in|','with|'),'i'));if(at&&!/^(the )?(morning|evening|afternoon|night)$/i.test(at[1]))r.place=at[1].trim();
 if(!r.place){t.split(/[,;]/).map(s=>s.trim()).some(seg=>{let c=seg.split(/\bwith\b/i)[0].trim();if(/\b(meeting|tomorrow|today|tonight|have|i)\b/i.test(c)&&!/^[A-Z]/.test(c))return false;
   c=c.replace(/\b(tomorrow|today|tonight|\d{1,2}([:.]\d{2})?\s*([ap]\.?\s?m\.?)?)\b/gi,'').trim();if(/^[A-Z][\w'&-]*(\s+[\w'&-]+)*$/.test(c)&&c!==r.person){r.place=c;return true}return false})}
 return r}
function openMeeting(id,pre){const m=id?{...(meetings().find(x=>x.id===id)||{})}:{date:addDays(nowD().date,1),time:'',duration:60,...(pre||{})};const deals=allDeals();
 const qd=[[nowD().date,'Today'],[addDays(nowD().date,1),'Tomorrow'],[addDays(nowD().date,2),fd(addDays(nowD().date,2),{weekday:'short'})],[addDays(nowD().date,3),fd(addDays(nowD().date,3),{weekday:'short'})]];
 sheet(head(id?'Edit meeting':'New meeting','users','bg-o')+`<form id="mf">
  ${id?'':`<div class="fld"><label>Quick add — type it the way you’d say it</label><div class="addline"><input class="inp" id="mq" placeholder="tomorrow 2pm Daire Dubai with Rasul Hosseini" enterkeyhint="go"><button type="button" data-act="mparse" aria-label="Fill in">${ic('spark')}</button></div></div>`}
  <div class="two"><div class="fld"><label>With whom</label><input class="inp" name="person" list="plist" value="${esc(m.person||'')}" required placeholder="Name"><datalist id="plist">${people().map(p=>`<option value="${esc(p.name)}">`).join('')}</datalist></div><div class="fld"><label>Company</label><input class="inp" name="company" value="${esc(m.company||'')}" placeholder="optional"></div></div>
  <div class="fld"><label>Day</label><div class="opts qd">${qd.map(([d,l])=>`<button type="button" class="opt ${m.date===d?'on':''}" data-qd="${d}">${l}</button>`).join('')}</div></div>
  <div class="two"><div class="fld"><label>Date</label><input class="inp" type="date" name="date" value="${esc(m.date||'')}" required></div><div class="fld"><label>Time</label><input class="inp" type="time" name="time" value="${esc(m.time||'')}" required></div></div>
  <div class="fld"><label>Place</label><input class="inp" name="place" value="${esc(m.place||'')}" placeholder="Office, café, or Zoom"></div>
  <div class="fld"><label>How long</label>${optBtns('dur',[30,60,90,120],m.duration||60,v=>v<60?v+' min':(v/60)+'h')}</div>
  <div class="fld"><label>Goal — what do you want to walk out with?</label><input class="inp" name="goal" value="${esc(m.goal||'')}" placeholder="e.g. Agree price and start date"></div>
  <div class="fld"><label>Agenda — one point per line</label><textarea class="inp" name="agenda" style="min-height:96px" placeholder="Introduce my services&#10;Understand their budget&#10;Ask about timeline">${esc(agendaL(m).join('\n'))}</textarea></div>
  ${deals.length?`<div class="fld"><label>Related business</label><select class="inp" name="deal"><option value="">— none —</option>${deals.map(d=>`<option value="${esc(d.id)}" ${m.deal===d.id?'selected':''}>${esc(d.name)}</option>`).join('')}</select></div>`:''}
  <div class="xs faint" style="margin-bottom:12px;line-height:1.6">Claude adds it to your Google Calendar with a reminder, lists it in your morning briefing, sends a heads-up before it starts, and asks you afterwards how it went.</div>
  <div class="btnrow">${id?`<button type="button" class="btn2 del" data-delmeet="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">${id?'Save':'Add meeting'}</button></div></form>`);
 wireOpts();
 $$('#mf [data-qd]').forEach(b=>b.onclick=()=>{$$('#mf [data-qd]').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#mf').date.value=b.dataset.qd});
 const q=$('#mq');if(q)q.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();fillParsed()}};
 $('#mf').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString();
  const rec={person:f.person.value.trim(),company:f.company.value.trim(),date:f.date.value,time:f.time.value,place:f.place.value.trim(),duration:+($('#mf [data-name="dur"] .opt.on')?.dataset.v||60),goal:f.goal.value.trim(),agenda:f.agenda.value.trim(),deal:f.deal?.value||'',updated:now};
  if(!rec.person||!rec.date)return;{const lp=rec.person.toLowerCase(),pm=people().find(p=>p.name.toLowerCase()===lp||(p.aka||'').toLowerCase()===lp||short(p.name).toLowerCase()===lp);rec.personId=pm?pm.id:(m.personId||'')}rec.title='Meeting with '+rec.person+(rec.company?' · '+rec.company:'');
  if(id){rec.status=m.status==='cancelled'?'planned':(m.status||'planned');upsertMeet(id,rec)}else{U.meetings=U.meetings||[];U.meetings.push({id:'m-'+uid(),status:'planned',created:now,...rec})}
  queueSave();closeSheet();location.hash='business';rerender();toast(id?'Meeting saved':'Meeting added · +15 XP when you log the result')}}
function fillParsed(){const q=$('#mq');if(!q||!q.value.trim())return;const r=parseMeet(q.value),f=$('#mf');let n=0;
 ['person','date','time','place'].forEach(k=>{if(r[k]){f[k].value=r[k];n++}});if(r.agenda){f.agenda.value=r.agenda;n++}
 $$('#mf [data-qd]').forEach(x=>x.classList.toggle('on',x.dataset.qd===f.date.value));toast(n?'Filled in — check and save':'Could not read that — fill the fields below')}
function openResult(id){const m=meetings().find(x=>x.id===id);if(!m)return;const ag=agendaL(m);
 sheet(head('How did it go?','check','bg-g')+`<div class="sm muted" style="margin:-4px 0 14px">${esc(mName(m))} · ${fd(m.date,{weekday:'short',day:'numeric',month:'short'})} ${esc(m.time||'')}${m.place?' · '+esc(m.place):''}</div><form id="rf">
  <div class="fld"><label>Did it happen?</label>${optBtns('hap',['Yes','Moved','Cancelled'],m.status==='cancelled'?'Cancelled':'Yes')}</div>
  <div class="fld"><label>How did it go?</label>${optBtns('mood',['Great','Good','OK','Bad'],m.mood||'Good')}</div>
  ${ag.length?`<div class="fld"><label>Agenda — tick what you covered</label>${ag.map((a,i)=>`<label class="chk" style="margin-bottom:7px"><input type="checkbox" name="ag_${i}" ${(m.covered||[]).includes(i)?'checked':''}> ${esc(a)}</label>`).join('')}</div>`:''}
  <div class="fld"><label>Result — what was agreed?</label><textarea class="inp" name="outcome" placeholder="Decisions, price, dates, their concerns…">${esc(m.outcome||'')}</textarea></div>
  <div class="fld"><label>Next steps — one per line</label><textarea class="inp" name="next" placeholder="Send proposal&#10;Share portfolio">${esc((m.next||[]).join('\n'))}</textarea>
   <label class="chk" style="margin-top:8px"><input type="checkbox" name="mk" ${m.loggedAt?'':'checked'}> Add next steps to my to-do list</label></div>
  <div class="fld"><label>Follow up with ${esc(m.person||'them')}</label>${optBtns('fu',['none','1','3','7','14'],m.loggedAt?(m.followup?'':'none'):'3',v=>v==='none'?'Not needed':v==='1'?'Tomorrow':v+' days')}</div>
  <div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">Save result</button></div></form>`);
 wireOpts();
 $('#rf').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString(),g=nm=>$(`#rf [data-name="${nm}"] .opt.on`)?.dataset.v;const hap=g('hap');
  if(hap==='Moved'){closeSheet();openMeeting(id);toast('Pick the new date and time');return}
  const next=f.next.value.split('\n').map(s=>s.trim()).filter(Boolean),fu=g('fu');
  const rec={status:hap==='Cancelled'?'cancelled':'done',mood:hap==='Cancelled'?'':g('mood'),outcome:f.outcome.value.trim(),next,covered:ag.map((_,i)=>i).filter(i=>f['ag_'+i]?.checked),updated:now};
  if(fu==='none')rec.followup='';else if(fu)rec.followup=addDays(nowD().date,+fu);else rec.followup=m.followup||'';
  if(!m.loggedAt)rec.loggedAt=now;upsertMeet(id,rec);
  if(f.mk.checked&&rec.status==='done'){next.forEach(t=>U.todos.push({id:uid(),text:t,cat:'Business',due:rec.followup||'',note:'From '+mName(m),done:false,updated:now}));
   if(rec.followup)U.todos.push({id:uid(),text:'Follow up with '+(m.person||'them'),cat:'Business',due:rec.followup,note:mName(m),done:false,updated:now})}
  queueSave();closeSheet();rerender();toast(rec.status==='done'?(m.loggedAt?'Result updated':'Result saved · +15 XP'):'Marked as cancelled')}}
function openIdea(){const F=(U.feedback||[]).filter(x=>!x.deleted).slice().reverse(),st=D.feedback_status||{};
 sheet(head('Improve this app','bulb','bg-a')+`<div class="sm muted" style="margin:-4px 0 12px">Tell Claude what to change, add or remove. Claude reads this every day and updates the app.</div>
  <form id="if"><div class="fld"><textarea class="inp" name="t" required style="min-height:90px" placeholder="e.g. Show my meetings on the calendar in orange. Add a button to call the person."></textarea></div>
  <div class="btnrow"><button type="button" class="btn2" data-act="close">Close</button><button type="submit" class="btn2 pri">Send to Claude</button></div></form>
  ${F.length?`<div class="xs faint" style="margin:16px 0 6px;font-weight:800;letter-spacing:.07em;text-transform:uppercase">Your ideas</div>${F.map(x=>`<div class="row"><div class="ico ${st[x.id]?.state==='done'?'bg-g':'bg-a'}">${ic(st[x.id]?.state==='done'?'check':'clock')}</div><div class="tx"><b>${esc(x.text)}</b><div>${st[x.id]?esc(st[x.id].note||st[x.id].state):'Waiting for Claude'}</div></div></div>`).join('')}`:''}
  ${(D.changelog||[]).length?`<div class="xs faint" style="margin:16px 0 6px;font-weight:800;letter-spacing:.07em;text-transform:uppercase">What’s new</div>${D.changelog.slice(0,6).map(c=>`<div class="row"><div class="ico bg-grad">${ic('spark')}</div><div class="tx"><b>${fd(c.date,{day:'numeric',month:'short'})}</b><div>${(c.items||[]).map(esc).join(' · ')}</div></div></div>`).join('')}`:''}`);
 $('#if').onsubmit=e=>{e.preventDefault();const t=e.target.t.value.trim();if(!t)return;const now=new Date().toISOString();U.feedback=U.feedback||[];U.feedback.push({id:uid(),text:t,created:now,updated:now});queueSave();closeSheet();toast('Sent · Claude will work on it')}}

/* ================= places & location ================= */
const PLACE_ICON={Home:'sun',Gym:'gym',Office:'brief',Pool:'sun',Mosque:'star',Cafe:'msg'};
let HERE=null,geoBusy=false,rec=null;
function dist(a,b,c,d){const R=6371e3,t=Math.PI/180,x=(c-a)*t,y=(d-b)*t,h=Math.sin(x/2)**2+Math.cos(a*t)*Math.cos(c*t)*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(h))}
const places=()=>(U?.places||[]).filter(p=>!p.deleted);
function dubaiDate(iso){return new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(iso))}
const tm=iso=>new Date(iso).toLocaleTimeString('en-GB',{timeZone:TZ,hour:'2-digit',minute:'2-digit'});
const lastVisit=()=>(U?.visits||[]).filter(v=>!v.deleted).slice().sort((a,b)=>a.at<b.at?-1:1).pop();
function logVisit(place,type,src){U.visits=U.visits||[];const now=new Date().toISOString(),last=lastVisit();
 if(last&&last.place===place&&last.type===type)return false;
 U.visits.push({id:uid(),place,type,at:now,src,updated:now});if(U.visits.length>400)U.visits=U.visits.slice(-400);queueSave();return true}
function visitsOn(date){return (U?.visits||[]).filter(v=>!v.deleted&&dubaiDate(v.at)===date).sort((a,b)=>a.at<b.at?-1:1)}
function stays(date){const V=visitsOn(date),out=[];let cur=null;
 V.forEach(v=>{if(v.type==='arrive'){if(cur)out.push({...cur,to:v.at});cur={place:v.place,from:v.at}}else if(v.type==='leave'&&cur&&cur.place===v.place){out.push({...cur,to:v.at});cur=null}});
 if(cur)out.push({...cur,to:null});
 return out.map(x=>({...x,min:Math.max(0,Math.round(((x.to?new Date(x.to):(date===nowD().date?new Date():new Date(x.from)))-new Date(x.from))/6e4))}))}
function gymMin(date){return stays(date).filter(x=>/gym/i.test(x.place)).reduce((a,x)=>a+Math.min(x.min,240),0)}
function curPlace(){const l=lastVisit();return l&&l.type==='arrive'?l.place:null}
function checkPlace(manual){if(!navigator.geolocation||geoBusy)return;if(!manual&&(ls.get('hq.geo')!=='on'||!places().length))return;geoBusy=true;
 navigator.geolocation.getCurrentPosition(p=>{geoBusy=false;ls.set('hq.geo','on');const a=p.coords.latitude,b=p.coords.longitude,acc=p.coords.accuracy;HERE={lat:a,lng:b,acc};
  const m=places().map(x=>({x,d:dist(a,b,x.lat,x.lng)})).filter(o=>o.d<=(o.x.radius||150)+Math.min(acc,150)).sort((u,v)=>u.d-v.d)[0];
  const cp=curPlace();let ch=false;
  if(m&&m.x.name!==cp){if(cp)logVisit(cp,'leave','gps');ch=logVisit(m.x.name,'arrive','gps');if(ch)toast(`You're at ${m.x.name}`+(/gym/i.test(m.x.name)?' · gym timer started':''))}
  else if(!m&&cp){ch=logVisit(cp,'leave','gps');if(ch)toast(/gym/i.test(cp)?`Gym logged · ${gymMin(nowD().date)} min today`:`Left ${cp}`)}
  else if(manual)toast(m?`You're at ${m.x.name}`:'Not at a saved place');
  if(ch||manual)rerender()},e=>{geoBusy=false;if(manual)toast(e.code===1?'Location is blocked — allow it for this site in Safari settings':'Could not get your location')},{enableHighAccuracy:true,timeout:15000,maximumAge:manual?0:60000})}
function savePlaceHere(name){name=(name||'').trim();if(!name)return;if(!navigator.geolocation){toast('No location on this device');return}
 toast('Finding you…');navigator.geolocation.getCurrentPosition(p=>{ls.set('hq.geo','on');const now=new Date().toISOString();U.places=U.places||[];
  const ex=U.places.find(x=>!x.deleted&&x.name.toLowerCase()===name.toLowerCase());
  const r={name,lat:+p.coords.latitude.toFixed(6),lng:+p.coords.longitude.toFixed(6),radius:Math.max(120,Math.min(300,Math.round(p.coords.accuracy*1.5))),updated:now};
  if(ex)Object.assign(ex,r);else U.places.push({id:uid(),...r});const cp=curPlace();if(cp&&cp!==name)logVisit(cp,'leave','gps');logVisit(name,'arrive','gps');queueSave();openPlaces();rerender();toast(name+' saved ✓')},
  e=>toast(e.code===1?'Allow location for this site first':'Could not get your location'),{enableHighAccuracy:true,timeout:20000})}
function hashHook(){const m=location.hash.slice(1).match(/^(at|left)=(.+)$/);if(!m)return false;const place=decodeURIComponent(m[2]),cp=curPlace();
 if(m[1]==='at'){if(cp&&cp!==place)logVisit(cp,'leave','shortcut');logVisit(place,'arrive','shortcut')}else logVisit(place,'leave','shortcut');
 history.replaceState(null,'',location.pathname+'#today');setTimeout(()=>toast(m[1]==='at'?`Arrived: ${place}`:`Left: ${place}`+(/gym/i.test(place)?` · ${gymMin(nowD().date)} min gym today`:'')),600);return true}
function openPlaces(){const P=places(),n=nowD(),S=stays(n.date),base=location.origin+location.pathname;
 sheet(head('My places','pin','bg-c')+`<div class="sm muted" style="margin:-4px 0 12px">HQ notices when you arrive at or leave your places and logs your gym time by itself.</div>
 <div class="fld"><label>I'm here now — save this spot as</label><div class="opts">${['Home','Gym','Office','Pool'].map(x=>`<button type="button" class="opt" data-saveplace="${x}">${x}</button>`).join('')}</div>
  <div class="addline" style="margin-top:8px"><input class="inp" id="plname" placeholder="Other name, e.g. Mosque, Café"><button type="button" data-act="saveplace" aria-label="Save">${ic('plus')}</button></div></div>
 ${P.length?`<div class="fld"><label>Saved places</label>${P.map(p=>`<div class="row"><div class="ico bg-c">${ic(PLACE_ICON[p.name]||'pin')}</div><div class="tx"><b>${esc(p.name)}</b><div>within ${p.radius} m · <a href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan)">map</a></div></div><button class="pill r" data-delplace="${p.id}" aria-label="Delete">${ic('trash')}</button></div>`).join('')}</div>`:''}
 <div class="fld"><label>Today</label>${S.length?S.map(x=>`<div class="row"><div class="ico bg-grad">${ic(PLACE_ICON[x.place]||'pin')}</div><div class="tx"><b>${esc(x.place)}</b><div>${tm(x.from)} – ${x.to?tm(x.to):'now'} · ${x.min} min</div></div></div>`).join(''):empty('Nothing logged today','pin')}</div>
 <div class="fld"><label>Automatic when HQ is closed (iPhone)</label><div class="sm muted" style="line-height:1.6">A website can only check your location while it is open. For fully automatic logging, add iPhone Shortcuts automations: <b>Shortcuts → Automation → New → Arrive</b> (pick the place) → <b>Run Immediately</b> → action <b>Open URLs</b> with the link below. Make a second one with <b>Leave</b>.</div>
  ${P.map(p=>`<div class="code">${esc(base)}#at=${encodeURIComponent(p.name)}</div><div class="code">${esc(base)}#left=${encodeURIComponent(p.name)}</div>`).join('')||'<div class="xs faint" style="margin-top:6px">Save a place first — the links appear here.</div>'}</div>
 <div class="btnrow"><button class="btn2" data-act="geooff">Stop location</button><button class="btn2 pri" data-act="close">Done</button></div>`)}
function whereCard(){const P=places(),n=nowD(),S=stays(n.date),l=lastVisit(),here=l&&l.type==='arrive'&&dubaiDate(l.at)===n.date?l:null,g=gymMin(n.date);
 if(!P.length)return card('Where you are','pin','bg-c',`<button class="cin" data-act="places" style="margin:0"><div class="qi bg-c">${ic('pin')}</div><div><b>Set up your places</b><small>Save Home and Gym once — then HQ logs your gym time automatically</small></div><span class="go">${ic('chev')}</span></button>`);
 return card('Where you are','pin','bg-c',`<div class="here"><div class="qi bg-grad">${ic(here?(PLACE_ICON[here.place]||'pin'):'pin')}</div><div style="flex:1;min-width:0"><b>${here?esc(here.place):'On the move'}</b><small>${here?'since '+tm(here.at):'not at a saved place'}${g?` · gym ${g} min today`:''}</small></div><button class="pill v" data-act="geocheck">${ic('refresh')}Check</button></div>
  ${S.length?`<div class="stays">${S.map(x=>`<span>${ic(PLACE_ICON[x.place]||'pin')}${esc(x.place)} ${tm(x.from)}${x.to?'–'+tm(x.to):''}</span>`).join('')}</div>`:''}`,`<button class="xs" data-act="places" style="font-weight:800;color:var(--cyan)">Places</button>`)}

/* ================= talk to Claude ================= */
function openTalk(pre){const I=(U.inbox||[]).filter(x=>!x.deleted).slice(-8).reverse(),st=D.inbox_status||{},SR=window.SpeechRecognition||window.webkitSpeechRecognition,lang=ls.get('hq.lang')||'en-US';
 sheet(head('Talk to Claude','mic','bg-grad')+`<div class="sm muted" style="margin:-4px 0 12px">Say anything — a meeting, a task, a project idea, a change you want in this app, or a question. Habits (gym, swim, slept 8h…) are logged instantly. <b>Ask now</b> opens Claude for an instant answer; <b>Send</b> lets Claude act on it in your app within the hour.</div>
  <div class="micwrap">${SR?`<button type="button" class="micbig" id="micbtn" aria-label="Start talking">${ic('mic')}</button><div class="xs faint" id="micst">Tap and speak</div><div class="opts" style="justify-content:center;margin-top:10px">${[['en-US','English'],['fa-IR','فارسی'],['ar-AE','عربي']].map(([l,n])=>`<button type="button" class="opt ${lang===l?'on':''}" data-lang="${l}">${n}</button>`).join('')}</div>`:`<div class="xs faint">Tip: tap the microphone key on your keyboard to dictate.</div>`}</div>
  <form id="tk"><div class="fld"><textarea class="inp" name="t" id="tktext" style="min-height:96px" placeholder="e.g. Tomorrow 4pm meeting with Ali at Business Bay about the website">${esc(pre||'')}</textarea></div>
  <div class="btnrow"><button type="button" class="btn2" data-act="tkmeet">${ic('users')} Meeting</button><button type="button" class="btn2" data-act="tktodo">${ic('list')} To-do</button><button type="button" class="btn2" data-x="asknow">${ic('msg')} Ask now</button><button type="submit" class="btn2 pri">${ic('spark')} Send</button></div></form>
  ${I.length?`<div class="xs faint" style="margin:16px 0 6px;font-weight:800;letter-spacing:.07em;text-transform:uppercase">Recent</div>${I.map(x=>{const r=st[x.id];return `<div class="row"><div class="ico ${r?'bg-g':'bg-a'}">${ic(r?'check':'clock')}</div><div class="tx"><b>${esc(x.text)}</b><div>${r?esc(r.reply||r.note||'Done'):'Claude replies within the hour — you’ll get a notification'}</div></div></div>`}).join('')}`:''}`);
 const b=$('#micbtn');if(b)b.onclick=()=>{if(rec){try{rec.stop()}catch(e){}return}const R=new SR();rec=R;R.lang=ls.get('hq.lang')||'en-US';R.interimResults=true;R.continuous=true;const pre0=$('#tktext').value.trim();
  R.onresult=e=>{let t='';for(const r of e.results)t+=r[0].transcript;$('#tktext').value=(pre0?pre0+' ':'')+t};
  R.onend=()=>{rec=null;b.classList.remove('on');const m=$('#micst');if(m)m.textContent='Tap to talk again'};
  R.onerror=e=>{const m=$('#micst');if(m)m.textContent=e.error==='not-allowed'?'Allow the microphone for this site':'Could not hear you — try again'};
  try{R.start();b.classList.add('on');$('#micst').textContent='Listening… tap to stop'}catch(e){rec=null}};
 $$('#sheet [data-lang]').forEach(x=>x.onclick=()=>{ls.set('hq.lang',x.dataset.lang);$$('#sheet [data-lang]').forEach(y=>y.classList.toggle('on',y===x))});
 $('#tk').onsubmit=e=>{e.preventDefault();sendTalk()}}
function stopRec(){if(rec){try{rec.stop()}catch(e){}rec=null}}
function sendTalk(){const t=($('#tktext')?.value||'').trim();if(!t)return;stopRec();const now=new Date().toISOString();U.inbox=U.inbox||[];U.inbox.push({id:uid(),text:t,created:now,updated:now});queueSave();closeSheet();toast(quickHabits(t)+(TOKEN?'Sent to Claude ✓ — reply within the hour':'Saved here — connect saving in Settings so Claude receives it'))}
function talkAs(kind){const t=($('#tktext')?.value||'').trim();if(!t)return;stopRec();
 if(kind==='todo'){addTodoFrom('#tktext');closeSheet();return}
 openMeeting();const q=$('#mq');if(q){q.value=t;fillParsed()}}

/* ================= projects ================= */
const PST=['Active','Thinking','Paused','Done'],PSC={Active:'g',Thinking:'v',Paused:'w',Done:'b'},PBG={Active:'bg-g',Thinking:'bg-v',Paused:'bg-a',Done:'bg-b'},PIC={Active:'rocket',Thinking:'bulb',Paused:'clock',Done:'check'};
const AREAS=['Business','Social','Learning','Tech','Personal'];
function projects(){const m={};(D.projects||[]).forEach(p=>m[p.id]={src:'Claude',...p});(U.projects||[]).forEach(p=>m[p.id]={...(m[p.id]||{}),...p});return Object.values(m).filter(p=>!p.deleted)}
function projCard(p,nt){const pr=Math.max(0,Math.min(100,+p.progress||0)),st=p.status||'Active';
 return `<div class="proj" data-editproj="${p.id}"><div class="top"><span class="pe ${PBG[st]}">${ic(p.icon||'folder')}</span><div class="tt"><b>${esc(p.name)}</b><small>${esc([p.area,p.src==='ChatGPT'?'from ChatGPT':p.src==='Claude'?'tracked by Claude':''].filter(Boolean).join(' · '))}</small></div><span class="pill ${PSC[st]}">${esc(st)}</span></div>
  ${p.desc?`<p>${esc(p.desc)}</p>`:''}
  <div class="bar" style="margin-top:9px"><i style="width:${pr}%"></i></div>
  <div class="meta"><span>${pr}%</span>${p.next?`<span>${ic('chev')}${esc(p.next)}</span>`:''}${p.due?`<span>${ic('cal')}${fd(p.due)}</span>`:''}${p.link?`<a href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">${ic('share')}Open</a>`:''}</div>
  ${nt?`<div class="note"><b>${ic('spark')}Claude</b>${esc(nt.text||nt)}</div>`:''}</div>`}
function renderProjects(){const P=projects(),notes=D.project_notes||{},by=x=>P.filter(p=>(p.status||'Active')===x);
 $('#p-projects').innerHTML=`<div class="pt">Projects <span>what you're building and thinking about</span></div>
 <div class="bizbar"><button class="bigadd alt2" data-act="project">${ic('plus')}New project</button><button class="bigadd alt3" data-act="talk">${ic('mic')}Talk to Claude</button></div>
 <div class="stats" style="margin-bottom:14px">${PST.map(x=>stat(by(x).length,x,PIC[x])).join('')}</div>
 <div class="g3">${PST.filter(x=>by(x).length).map(x=>`<div class="card s3"><div class="ch"><div class="ic ${PBG[x]}">${ic(PIC[x])}</div><h3>${x}</h3><span class="aside">${by(x).length}</span></div><div class="projs">${by(x).map(p=>projCard(p,notes[p.id])).join('')}</div></div>`).join('')||`<div class="s3">${empty('Add your first project','folder')}</div>`}
  ${card('Where projects come from','share','bg-grad',`<div class="row"><div class="ico bg-grad">${ic('spark')}</div><div class="tx"><b>Claude</b><div>Claude keeps the projects from your Claude chats, memory and this assistant up to date here.</div></div></div>
   <div class="row"><div class="ico bg-g">${ic('msg')}</div><div class="tx"><b>ChatGPT</b><div>ChatGPT can't be connected directly. In ChatGPT ask: “List all my projects and ideas with status and next step”, copy the answer, and paste it into Talk to Claude — Claude adds them here.</div></div></div>
   <div class="row"><div class="ico bg-p">${ic('edit')}</div><div class="tx"><b>You</b><div>Tap “New project”, or tap any project to update its status, next step and progress.</div></div></div>`,'','s3')}
 </div>`}
function openProject(id){const p=id?{...(projects().find(x=>x.id===id)||{})}:{status:'Active',area:'Business',progress:0};
 sheet(head(id?'Edit project':'New project','folder','bg-v')+`<form id="pf">
  <div class="fld"><label>Name</label><input class="inp" name="name" value="${esc(p.name||'')}" required placeholder="e.g. AI automation agency"></div>
  <div class="fld"><label>Status</label>${optBtns('status',PST,p.status||'Active')}</div>
  <div class="fld"><label>Area</label>${optBtns('area',AREAS,p.area||'Business')}</div>
  <div class="fld"><label>What is it?</label><textarea class="inp" name="desc" placeholder="The idea, who it's for, how it makes money…">${esc(p.desc||'')}</textarea></div>
  <div class="fld"><label>Next step</label><input class="inp" name="next" value="${esc(p.next||'')}" placeholder="e.g. Build a landing page"></div>
  <div class="fld"><label>Progress</label>${optBtns('progress',[0,10,25,50,75,90,100],+p.progress||0,v=>v+'%')}</div>
  <div class="two"><div class="fld"><label>Target date</label><input class="inp" type="date" name="due" value="${esc(p.due||'')}"></div><div class="fld"><label>Link (optional)</label><input class="inp" name="link" value="${esc(p.link||'')}" placeholder="https://"></div></div>
  <div class="btnrow">${id?`<button type="button" class="btn2 del" data-delproj="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">${id?'Save':'Add project'}</button></div></form>`);
 wireOpts();$('#pf').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString(),g=n=>$(`#pf [data-name="${n}"] .opt.on`)?.dataset.v;
  const r={name:f.name.value.trim(),status:g('status')||'Active',area:g('area')||'',desc:f.desc.value.trim(),next:f.next.value.trim(),progress:+(g('progress')||0),due:f.due.value,link:f.link.value.trim(),updated:now};if(!r.name)return;
  U.projects=U.projects||[];const ex=U.projects.find(x=>x.id===id);if(ex)Object.assign(ex,r);else if(id)U.projects.push({id,...r});else U.projects.push({id:'p-'+uid(),src:'Me',created:now,...r});
  queueSave();closeSheet();location.hash='projects';rerender();toast(id?'Project saved':'Project added')}}

/* ================= people ================= */
const REL={family:['Family','v'],partner:['Partner','g'],team:['Team','b'],friend:['Friend','v'],buyer:['Buyer','w'],seller:['Seller','w'],client:['Client','b'],careful:['Careful','r']};
function people(){const m={};(D.people||[]).forEach(p=>m[p.id]={...p,src:'claude'});(U?.people||[]).forEach(p=>m[p.id]={...(m[p.id]||{}),...p});return Object.values(m).filter(p=>!p.deleted&&p.name).sort((a,b)=>(a.order??99)-(b.order??99)||a.name.localeCompare(b.name))}
const personById=id=>people().find(p=>p.id===id);
const initials=n=>String(n||'?').replace(/^(Mr|Dr|Mrs)\.?\s+/i,'').split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
const PCOL=['#8b5cf6','#06b6d4','#ec4899','#f59e0b','#10b981','#f97316','#3b82f6','#ef4444'];
const short=n=>String(n||'').replace(/^(Mr|Dr|Mrs)\.?\s+/i,'').split(/\s+/)[0];
function avatar(p,size=44){const c=PCOL[[...(p.id||p.name||'x')].reduce((a,ch)=>a+ch.charCodeAt(0),0)%8];return p.photo?`<span class="av" style="width:${size}px;height:${size}px"><img src="${p.photo}" alt=""></span>`:`<span class="av" style="width:${size}px;height:${size}px;background:${c};font-size:${Math.round(size*.36)}px">${esc(initials(p.name))}</span>`}
const digits=s=>String(s||'').replace(/[^\d+]/g,'');
function waNum(s){let d=digits(s).replace(/^\+/,'');if(d.startsWith('00'))d=d.slice(2);else if(d.startsWith('0'))d='971'+d.slice(1);return d}
function contactBtns(p){return `<div class="cbtns">${p.phone?`<a href="tel:${digits(p.phone)}">${ic('phone')}Call</a><a href="https://wa.me/${waNum(p.phone)}" target="_blank" rel="noopener noreferrer">${ic('msg')}WhatsApp</a>`:''}${p.email?`<a href="mailto:${esc(p.email)}">${ic('mail')}Email</a>`:''}${!p.phone?`<button data-editperson="${p.id}">${ic('plus')}Add number</button>`:''}</div>`}
function dealsOf(pid){return pipeline().filter(d=>(d.people||[]).includes(pid))}
function meetingsOf(pid,p){const f=short(p.name).toLowerCase()||'#';return meetings().filter(m=>m.personId===pid||(m.person||'').toLowerCase().includes(f))}
function personCard(p){const R=REL[p.rel]||REL.friend,ds=dealsOf(p.id).filter(d=>!['Won','Lost'].includes(d.stage));
 return `<div class="person" data-person="${p.id}">${avatar(p,46)}<div class="pt2"><b>${esc(p.name)}${p.aka?` <small>· ${esc(p.aka)}</small>`:''}</b><small>${esc(p.role||'')}</small><div class="ptags"><span class="pill ${R[1]}">${R[0]}</span>${ds.slice(0,2).map(d=>`<span class="pill">${ic('deal')}${esc(d.name)}</span>`).join('')}${p.phone?'':'<span class="pill faint">no number</span>'}</div></div>${ic('chev')}</div>`}
let pfilter='all';
function renderPeople(){const P=people(),F=[['all','All'],['family','Family'],['partner','Partners'],['team','Team'],['friend','Friends'],['buyer','Buyers & sellers'],['client','Clients'],['careful','Careful']];
 const shown=P.filter(p=>pfilter==='all'||p.rel===pfilter||(pfilter==='buyer'&&p.rel==='seller')).sort((a,b)=>(b.rel==='family')-(a.rel==='family'));
 $('#p-people').innerHTML=`<div class="pt">People <span>${P.length} contacts · family & business circle</span></div>
 <div class="addline"><input class="inp" id="psearch" placeholder="Search a name…"><button data-act="newperson" aria-label="Add contact">${ic('plus')}</button></div>
 <div class="filters">${F.filter(([k])=>k==='all'||P.some(p=>p.rel===k||(k==='buyer'&&p.rel==='seller'))).map(([k,l])=>`<button data-pf="${k}" class="${pfilter===k?'on':''}">${l}</button>`).join('')}</div>
 <div class="card"><div class="plist">${shown.map(personCard).join('')||empty('Nobody here yet','users')}</div></div>
 <div class="xs faint" style="margin:10px 4px">Tap a person to call or WhatsApp, add their photo and number, and see your deals and meetings with them.</div>`;
 const s=$('#psearch');if(s)s.oninput=()=>{const q=s.value.toLowerCase();$$('#p-people .person').forEach(el=>el.style.display=el.innerText.toLowerCase().includes(q)?'':'none')}}
function openPerson(id){const p=personById(id);if(!p)return;const R=REL[p.rel]||REL.friend,ds=dealsOf(id),ms=meetingsOf(id,p);
 sheet(head(esc(p.name),'users','bg-v')+`<div class="phead">${avatar(p,72)}<div style="min-width:0"><div class="sm">${esc(p.role||'')}</div><div class="ptags" style="margin-top:6px"><span class="pill ${R[1]}">${R[0]}</span>${p.aka?`<span class="pill">${esc(p.aka)}</span>`:''}${p.from?`<span class="pill">${ic('pin')}${esc(p.from)}</span>`:''}${p.age?`<span class="pill">~${esc(p.age)}</span>`:''}</div></div></div>
 ${contactBtns(p)}
 ${p.phone||p.email?`<div class="xs faint" style="margin:8px 0">${[p.phone,p.phone2,p.email].filter(Boolean).map(esc).join(' · ')}</div>`:''}
 ${p.notes?`<div class="note" style="margin-top:12px"><b>${ic('book')}Notes</b>${esc(p.notes)}</div>`:''}
 ${ds.length?`<div class="fld" style="margin-top:14px"><label>Deals</label>${ds.map(d=>`<div class="row" data-pipe="${d.id}"><div class="ico bg-g">${ic('deal')}</div><div class="tx"><b>${esc(d.name)}</b><div>${esc(d.stage)} · ${aed(d.value)}${d.next?' · '+esc(d.next):''}</div></div></div>`).join('')}</div>`:''}
 ${ms.length?`<div class="fld"><label>Meetings</label>${ms.slice(-4).reverse().map(m=>`<div class="row" data-editmeet="${m.id}"><div class="ico bg-o">${ic('users')}</div><div class="tx"><b>${fd(m.date,{weekday:'short',day:'numeric',month:'short'})} ${esc(m.time||'')}</b><div>${esc(m.place||'')}${m.outcome?' · '+esc(m.outcome):''}</div></div></div>`).join('')}</div>`:''}
 <div class="btnrow"><button class="btn2" data-meetwith="${id}">${ic('cal')} Meeting</button><button class="btn2 pri" data-editperson="${id}">${ic('edit')} Edit</button></div>`)}
function openPersonEdit(id){const p=id?{...(personById(id)||{})}:{rel:'friend'};
 sheet(head(id?'Edit contact':'New contact','users','bg-v')+`<form id="pef">
  <div class="phead" style="margin-bottom:10px"><span id="pephoto">${avatar(p,72)}</span><label class="btn2" style="flex:0 0 auto;padding:10px 14px;cursor:pointer">${ic('plus')} Photo<input type="file" accept="image/*" id="pefile" hidden></label></div>
  <div class="two"><div class="fld"><label>Name</label><input class="inp" name="name" value="${esc(p.name||'')}" required></div><div class="fld"><label>Also called</label><input class="inp" name="aka" value="${esc(p.aka||'')}"></div></div>
  <div class="fld"><label>Role / what you do together</label><input class="inp" name="role" value="${esc(p.role||'')}"></div>
  <div class="fld"><label>Relationship</label>${optBtns('rel',Object.keys(REL),p.rel||'friend',k=>REL[k][0])}</div>
  <div class="two"><div class="fld"><label>Phone</label><input class="inp" name="phone" type="tel" value="${esc(p.phone||'')}" placeholder="+971…"></div><div class="fld"><label>Email</label><input class="inp" name="email" type="email" value="${esc(p.email||'')}"></div></div>
  <div class="two"><div class="fld"><label>From</label><input class="inp" name="from" value="${esc(p.from||'')}"></div><div class="fld"><label>Age</label><input class="inp" name="age" value="${esc(p.age||'')}"></div></div>
  <div class="fld"><label>Notes</label><textarea class="inp" name="notes">${esc(p.notes||'')}</textarea></div>
  <div class="btnrow">${id?`<button type="button" class="btn2 del" data-delperson="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">Save</button></div></form>`);
 wireOpts();let photo=null;
 $('#pefile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),S=160,z=Math.min(im.width,im.height);c.width=c.height=S;c.getContext('2d').drawImage(im,(im.width-z)/2,(im.height-z)/2,z,z,0,0,S,S);photo=c.toDataURL('image/jpeg',.8);$('#pephoto').innerHTML=avatar({...p,photo},72)};im.src=r.result};r.readAsDataURL(f)};
 $('#pef').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString();const r={name:f.name.value.trim(),aka:f.aka.value.trim(),role:f.role.value.trim(),rel:$('#pef [data-name="rel"] .opt.on')?.dataset.v||'friend',phone:f.phone.value.trim(),email:f.email.value.trim(),from:f.from.value.trim(),age:f.age.value.trim(),notes:f.notes.value.trim(),updated:now};if(photo)r.photo=photo;if(!r.name)return;
  U.people=U.people||[];const nid=id||'u-'+uid();const ex=U.people.find(x=>x.id===nid);if(ex)Object.assign(ex,r);else U.people.push({id:nid,...r});queueSave();closeSheet();location.hash='people';rerender();toast('Contact saved')}}

/* ================= money ================= */
const RATE=()=>+(D.money?.rate)||3.6725;
function aed(n){if(n==null||isNaN(n))return '—';const a=Math.abs(n),s=n<0?'−':'';return 'AED '+s+(a>=1e6?(a/1e6).toFixed(2).replace(/\.?0+$/,'')+'M':a>=1e4?Math.round(a/1e3)+'K':Math.round(a).toLocaleString('en-US'))}
const STAGES=['Lead','Negotiating','Documents','Closing','Won','Lost'],STC={Lead:'v',Negotiating:'b',Documents:'w',Closing:'g',Won:'g',Lost:'r'};
function parseMoney(s){if(!s)return 0;const t=String(s).toLowerCase().replace(/,/g,'');const m=t.match(/([\d.]+)\s*(k|m)?/);if(!m)return 0;let v=+m[1]*(m[2]==='k'?1e3:m[2]==='m'?1e6:1);if(/usd|\$/.test(t))v*=RATE();return Math.round(v)}
function overlay(){const o={};(U?.pipe||[]).forEach(x=>o[x.id]=x);return o}
function pipeline(){const o=overlay();
 const c=(D.pipeline||[]).map(d=>({...d,...(o[d.id]||{}),src:'claude'}));
 const SM={'Idea':'Lead','In progress':'Negotiating','Waiting on them':'Documents','Closed':'Won'};
 const u=(U?.deals||[]).filter(d=>!d.deleted).map(d=>({...d,stage:d.stage||SM[d.status]||'Lead',value:+d.amount||parseMoney(d.value),prob:d.prob??25,people:d.people||[],src:'me'}));
 return [...c,...u].filter(d=>!d.deleted)}
function moneyCalc(){const M=D.money||{},o=overlay(),uc={};(U?.costs||[]).forEach(x=>uc[x.id]=x);
 const costs=[...(M.costs||[]).map(c=>({...c,...(uc[c.id]||{})})),...(U?.costs||[]).filter(x=>!(M.costs||[]).some(c=>c.id===x.id))].filter(c=>!c.deleted&&c.name);
 const inc=M.income||[],monthlyCost=costs.reduce((a,c)=>a+(+c.amount||0),0),monthlyIn=inc.reduce((a,c)=>a+(+c.amount||0),0);
 const P=pipeline(),open=P.filter(d=>!['Won','Lost'].includes(d.stage));
 const rec=(M.receivables||[]).map(r=>({...r,...(o[r.id]||{})})).filter(r=>!r.deleted);
 const openRec=rec.filter(r=>!r.done);
 const potential=open.reduce((a,d)=>a+(+d.value||0),0)+openRec.reduce((a,r)=>a+(+r.yours||0),0);
 const expected=open.reduce((a,d)=>a+(+d.value||0)*(+d.prob||0)/100,0)+openRec.reduce((a,r)=>a+(+r.yours||0)*(+r.prob||0)/100,0);
 const txns=[...(M.history||[]).map(t=>({...t,src:'claude'})),...(U?.txns||[]).filter(t=>!t.deleted)].sort((a,b)=>String(a.date)<String(b.date)?1:-1);
 const cash=U?.kv?.cash?.v,burn=monthlyCost-monthlyIn,runway=cash!=null&&burn>0?cash/burn:null;
 const yr=nowD().date.slice(0,4),earnedYear=txns.filter(t=>t.type!=='out'&&String(t.date).startsWith(yr)).reduce((a,t)=>a+(+t.amount||0),0);
 return{costs,inc,monthlyCost,monthlyIn,burn,P,open,rec,openRec,potential,expected,txns,cash,runway,earnedYear}}
function dealRow(d){const ps=(d.people||[]).map(personById).filter(Boolean),n=nowD().date;return `<div class="deal" data-pipe="${d.id}"><div class="top"><b>${esc(d.name)}</b><span class="pill ${STC[d.stage]||'v'}">${esc(d.stage)}</span></div>
  <div class="dv"><span class="big">${aed(d.value)}</span>${d.valueNote?`<small>${esc(d.valueNote)}</small>`:''}</div>
  <div class="prob"><div class="bar"><i style="width:${d.prob||0}%"></i></div><small>${d.prob||0}% chance · expected ${aed((d.value||0)*(d.prob||0)/100)}</small></div>
  ${ps.length?`<div class="avs">${ps.map(p=>avatar(p,26)).join('')}<small>${ps.map(p=>esc(short(p.name))).join(', ')}</small></div>`:''}
  ${d.next?`<div class="nx">${ic('chev')}<span>${esc(d.next)}${d.due?` · <b style="${d.due<n?'color:var(--red)':''}">${d.due<n?'overdue':fd(d.due)}</b>`:''}</span></div>`:''}</div>`}
function renderMoney(){const m=moneyCalc(),target=D.money?.target||25000;
 $('#p-money').innerHTML=`<div class="pt">Money <span>AED · you and Claude keep it current</span></div>
 <div class="g3">
  <div class="card s3 moneyhero"><div class="mrow">
   <button data-act="setcash"><small>Cash on hand</small><b>${m.cash!=null?aed(m.cash):'Tap to set'}</b><em>${m.runway!=null?m.runway.toFixed(1)+' months runway':'bank + cash now'}</em></button>
   <div><small>Monthly need</small><b>${aed(m.monthlyCost)}</b><em>target ${aed(target)}</em></div>
   <div><small>Regular income</small><b>${aed(m.monthlyIn)}</b><em class="${m.burn>0?'dn':'upc'}">${m.burn>0?'gap '+aed(m.burn)+'/mo':'costs covered'}</em></div>
   <div><small>Expected from deals</small><b>${aed(m.expected)}</b><em>of ${aed(m.potential)} possible</em></div></div>
   <div class="xs faint" style="margin-top:10px">Expected = what each deal pays × its chance of closing. Tap any deal to update its stage, chance or next step.</div></div>
  <div class="card s2"><div class="ch"><div class="ic bg-g">${ic('deal')}</div><h3>Deals pipeline</h3><button class="pill g" data-act="newpipe">${ic('plus')}Add</button></div>
   <div class="chartbox sm"><canvas id="c-pipe"></canvas></div>
   <div class="deals">${m.open.slice().sort((a,b)=>(b.value*b.prob)-(a.value*a.prob)).map(dealRow).join('')||empty('No open deals','deal')}</div></div>
  <div class="grid">
   ${card('Money owed to you','money','bg-a',m.rec.map(r=>{const p=personById(r.who);return `<div class="row" data-rec="${r.id}"><div class="ico ${r.done?'bg-g':'bg-a'}">${ic(r.done?'check':'clock')}</div><div class="tx"><b>${p?esc(p.name)+' · ':''}${esc(r.label)}</b><div>${r.done?'Received ✓':`Owes ${aed(r.total)} · your share ${aed(r.yours)} · ${r.prob??25}% chance`}</div></div></div>`}).join('')||empty('Nothing owed','money'))}
   ${card('Every month','cal','bg-p',m.costs.map(c=>`<div class="row" data-cost="${c.id}"><div class="ico bg-p">${ic('down')}</div><div class="tx"><b>${esc(c.name)}</b><div>${aed(c.amount)} / month${c.paidUntil?` · <span style="color:var(--green);font-weight:700">paid until ${fd(c.paidUntil)}</span>`:''}</div></div></div>`).join('')+m.inc.map(c=>`<div class="row"><div class="ico bg-g">${ic('bolt')}</div><div class="tx"><b>${esc(c.name)}</b><div>+${aed(c.amount)} / month${c.note?' · '+esc(c.note):''}</div></div></div>`).join('')+`<button class="addag" data-act="newcost">${ic('plus')}Add a monthly cost</button>`)}
  </div>
  ${card('Income & spending','book','bg-v',`<div class="mstat">Earned in ${nowD().date.slice(0,4)}: <b>${aed(m.earnedYear)}</b></div>`+m.txns.slice(0,12).map(t=>`<div class="row" ${t.src!=='claude'?`data-txn="${t.id}"`:''}><div class="ico ${t.type==='out'?'bg-r':'bg-g'}">${ic(t.type==='out'?'down':'bolt')}</div><div class="tx"><b>${t.type==='out'?'−':'+'}${aed(t.amount)} · ${esc(t.label)}</b><div>${esc(fd(String(t.date).length===7?t.date+'-15':t.date,{day:'numeric',month:'short',year:'numeric'}))}</div></div></div>`).join('')+`<div class="btnrow"><button class="btn2" data-act="txnout">${ic('down')} I spent</button><button class="btn2 pri" data-act="txnin">${ic('plus')} I received</button></div>`,'','s3')}
 </div>`}
function moneyToday(){const m=moneyCalc();
 return card('Money & deals','money','bg-g',`<div class="mmini"><div><small>Expected</small><b>${aed(m.expected)}</b></div><div><small>Monthly need</small><b>${aed(m.monthlyCost)}</b></div><div><small>${m.runway!=null?'Runway':'Owed to you'}</small><b>${m.runway!=null?m.runway.toFixed(1)+' mo':aed(m.openRec.reduce((a,r)=>a+(+r.yours||0),0))}</b></div></div>`+m.open.slice().sort((a,b)=>(a.due||'9')<(b.due||'9')?-1:1).slice(0,3).map(d=>`<div class="row" data-pipe="${d.id}"><div class="ico bg-g">${ic('deal')}</div><div class="tx"><b>${esc(d.name)} · ${aed(d.value)}</b><div>${esc(d.next||d.stage)}${d.due?' · '+fd(d.due):''}</div></div></div>`).join(''),`<a href="#money" class="xs" style="font-weight:800;color:var(--green)">Open →</a>`)}
function openPipe(id){const d=id?{...(pipeline().find(x=>x.id===id)||{})}:{stage:'Lead',prob:25,people:[]};const P=people(),sel=new Set(d.people||[]);
 sheet(head(id?'Deal':'New deal','deal','bg-g')+`<form id="dpf">
  <div class="fld"><label>Deal</label><input class="inp" name="name" value="${esc(d.name||'')}" required placeholder="e.g. EN590 to a Fujairah buyer"></div>
  <div class="fld"><label>Stage</label>${optBtns('stage',STAGES,d.stage||'Lead')}</div>
  <div class="two"><div class="fld"><label>You earn (AED)</label><input class="inp" name="value" inputmode="numeric" value="${d.value?Math.round(d.value):''}" placeholder="30000"></div><div class="fld"><label>…or in USD</label><input class="inp" name="usd" inputmode="numeric" placeholder="converts to AED"></div></div>
  ${d.valueNote?`<div class="xs faint" style="margin:-6px 0 10px">${esc(d.valueNote)}</div>`:''}
  <div class="fld"><label>Chance it closes</label>${optBtns('prob',[5,10,20,30,40,50,60,75,90],d.prob??25,v=>v+'%')}</div>
  <div class="fld"><label>People involved</label><div class="opts pick">${P.map(p=>`<button type="button" class="opt ${sel.has(p.id)?'on':''}" data-pid="${p.id}">${esc(short(p.name))}</button>`).join('')}</div></div>
  <div class="fld"><label>Next step</label><input class="inp" name="next" value="${esc(d.next||'')}" placeholder="e.g. Buyer sends documents"></div>
  <div class="two"><div class="fld"><label>Follow-up date</label><input class="inp" type="date" name="due" value="${esc(d.due||'')}"></div><div class="fld"><label>&nbsp;</label><div class="xs faint" style="padding-top:12px">Claude reminds you that day</div></div></div>
  <div class="fld"><label>Details</label><textarea class="inp" name="desc">${esc(d.desc||d.notes||'')}</textarea></div>
  ${(D.deal_notes||{})[id]?.text?`<div class="note"><b>${ic('spark')}Claude</b>${esc(D.deal_notes[id].text)}</div>`:''}
  <div class="btnrow">${id?`<button type="button" class="btn2 del" data-delpipe="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">Save</button></div></form>`);
 wireOpts();$$('#dpf .pick .opt').forEach(b=>b.onclick=()=>b.classList.toggle('on'));
 $('#dpf').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString(),g=n=>$(`#dpf [data-name="${n}"] .opt.on`)?.dataset.v;
  let v=+String(f.value.value).replace(/[^\d.]/g,'')||0;const u=+String(f.usd.value).replace(/[^\d.]/g,'')||0;if(u)v=Math.round(u*RATE());
  const r={name:f.name.value.trim(),stage:g('stage')||'Lead',prob:+(g('prob')||25),people:$$('#dpf .pick .opt.on').map(b=>b.dataset.pid),next:f.next.value.trim(),due:f.due.value,desc:f.desc.value.trim(),updated:now};if(!r.name)return;
  const wasWon=d.stage==='Won';
  if(id&&d.src==='claude'){U.pipe=U.pipe||[];const ex=U.pipe.find(x=>x.id===id),o={...r,value:v};if(ex)Object.assign(ex,o);else U.pipe.push({id,...o})}
  else{const SM={Lead:'Idea',Negotiating:'In progress',Documents:'Waiting on them',Closing:'In progress',Won:'Closed',Lost:'Closed'};const o={...r,amount:v,value:v?aed(v):'',status:SM[r.stage],with:r.people.map(x=>personById(x)?.name).filter(Boolean).join(', ')};
   const ex=(U.deals||[]).find(x=>x.id===id);if(ex)Object.assign(ex,o);else U.deals.push({id:'d-'+uid(),created:now,...o})}
  if(r.stage==='Won'&&!wasWon&&v){U.txns=U.txns||[];U.txns.push({id:uid(),type:'in',amount:v,label:r.name,date:nowD().date,deal:id||'',updated:now});toast('Deal won · added to income')}else toast('Deal saved');
  queueSave();closeSheet();rerender()}}
function openRec(id){const r=moneyCalc().rec.find(x=>x.id===id);if(!r)return;const p=personById(r.who);
 sheet(head('Money owed','money','bg-a')+`<div class="sm" style="margin-bottom:6px"><b>${p?esc(p.name):''}</b> · ${esc(r.label)}</div><div class="sm muted">Owes ${aed(r.total)} · your share ${aed(r.yours)}${r.note?' · '+esc(r.note):''}</div>
 <div class="fld" style="margin-top:14px"><label>Chance you get paid</label>${optBtns('prob',[5,10,25,50,75,90],r.prob??25,v=>v+'%')}</div>
 <div class="btnrow"><button class="btn2" data-recsave="${id}">Save</button><button class="btn2 pri" data-recpaid="${id}">${ic('check')} It's paid</button></div>`);wireOpts()}
function openCash(){sheet(head('Cash on hand','money','bg-g')+`<div class="sm muted" style="margin:-4px 0 12px">How much can you use right now (bank + cash)? Encrypted — only you see it. HQ then shows how many months you're covered.</div><form id="cf2"><div class="fld"><input class="inp" name="v" inputmode="numeric" value="${U.kv?.cash?.v??''}" placeholder="AED"></div><div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button class="btn2 pri">Save</button></div></form>`);
 $('#cf2').onsubmit=e=>{e.preventDefault();const v=+String(e.target.v.value).replace(/[^\d.]/g,'');U.kv=U.kv||{};U.kv.cash={v,updated:new Date().toISOString()};queueSave();closeSheet();rerender();toast('Saved')}}
function openCost(id){const c=id?moneyCalc().costs.find(x=>x.id===id)||{}:{};
 sheet(head(id?'Monthly cost':'New monthly cost','money','bg-p')+`<form id="cof"><div class="fld"><label>What</label><input class="inp" name="n" value="${esc(c.name||'')}" required placeholder="e.g. School fees"></div><div class="fld"><label>AED per month</label><input class="inp" name="a" inputmode="numeric" value="${c.amount||''}" required></div>
 <div class="btnrow">${id?`<button type="button" class="btn2 del" data-delcost="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button class="btn2 pri">Save</button></div></form>`);
 $('#cof').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString(),r={name:f.n.value.trim(),amount:+String(f.a.value).replace(/[^\d.]/g,''),updated:now};U.costs=U.costs||[];const nid=id||'uc-'+uid();const ex=U.costs.find(x=>x.id===nid);if(ex)Object.assign(ex,r);else U.costs.push({id:nid,...r});queueSave();closeSheet();rerender();toast('Saved')}}
function openTxn(type,id){const t=id?(U.txns||[]).find(x=>x.id===id)||{}:{type,date:nowD().date};
 sheet(head(t.type==='out'?'Money spent':'Money received','money',t.type==='out'?'bg-r':'bg-g')+`<form id="txf"><div class="two"><div class="fld"><label>AED</label><input class="inp" name="a" inputmode="numeric" value="${t.amount||''}" required></div><div class="fld"><label>Date</label><input class="inp" type="date" name="d" value="${esc(t.date||'')}"></div></div><div class="fld"><label>For</label><input class="inp" name="l" value="${esc(t.label||'')}" placeholder="${t.type==='out'?'e.g. Car service':'e.g. Mojeh – September'}"></div>
 <div class="btnrow">${id?`<button type="button" class="btn2 del" data-deltxn="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button class="btn2 pri">Save</button></div></form>`);
 $('#txf').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString(),r={type:t.type,amount:+String(f.a.value).replace(/[^\d.]/g,''),date:f.d.value||nowD().date,label:f.l.value.trim(),updated:now};U.txns=U.txns||[];if(id)Object.assign(t,r);else U.txns.push({id:uid(),...r});queueSave();closeSheet();rerender();toast('Saved')}}
function openMore(){sheet(head('More','list','bg-grad')+`<div class="actions">${PAGES.filter(p=>!MAIN.includes(p.id)).map(p=>`<button class="action" data-go="${p.id}"><span class="qi bg-v">${ic(p.i)}</span><b>${p.l}</b></button>`).join('')}<button class="action" data-act="talk"><span class="qi bg-grad">${ic('mic')}</span><b>Talk to Claude</b></button><button class="action" data-act="settings"><span class="qi bg-c">${ic('gear')}</span><b>Settings</b></button></div>`)}
function ovSet(id,o){U.pipe=U.pipe||[];const ex=U.pipe.find(x=>x.id===id);if(ex)Object.assign(ex,o);else U.pipe.push({id,...o})}

/* ================= nav ================= */
const PAGES=[{id:'today',l:'Today',i:'sun'},{id:'me',l:'Me',i:'heart'},{id:'business',l:'Business',i:'brief'},{id:'money',l:'Money',i:'money'},{id:'people',l:'People',i:'users'},{id:'tasks',l:'To-do',i:'list'},{id:'calendar',l:'Calendar',i:'cal'},{id:'projects',l:'Projects',i:'folder'},{id:'social',l:'Social',i:'chart'},{id:'growth',l:'Growth',i:'rocket'}];
const MAIN=['today','business','money','people'];
$('#bottom').innerHTML=PAGES.filter(p=>MAIN.includes(p.id)).map(p=>`<button data-p="${p.id}">${ic(p.i)}<span>${p.l}</span></button>`).join('')+`<button id="morebtn" data-act="more">${ic('list')}<span>More</span></button>`;
$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');
$$('[data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p});
$('#refresh').innerHTML=ic('refresh');$('#settings').innerHTML=ic('gear');$('#fab').innerHTML=ic('plus');
$('#refresh').onclick=reload;if($('#mic')){$('#mic').innerHTML=ic('mic');$('#mic').onclick=()=>openTalk()}$('#settings').onclick=openSettings;$('#fab').onclick=openActions;
$('#foot').innerHTML=ic('shield')+' Encrypted · only you can open this · Claude refreshes it through the day';
function curPage(){const id=(location.hash||'#today').slice(1);return PAGES.find(p=>p.id===id)?id:'today'}
function show(){const pg=curPage();$$('section.page').forEach(s=>s.classList.toggle('on',s.id==='p-'+pg));$$('[data-p]').forEach(b=>b.classList.toggle('on',b.dataset.p===pg));$('#morebtn')?.classList.toggle('on',!MAIN.includes(pg));window.scrollTo(0,0);draw(pg)}
window.addEventListener('hashchange',()=>{if(!D)return;if(hashHook())render(true);else show()});
function render(keep){$('#updated').innerHTML=`${fd(nowD().date,{weekday:'short',day:'numeric',month:'short'})} · updated ${ago(D.updated)} <span id="sync" class="sync"></span>`;setSync(syncState);
 const G=game();renderToday(G);renderTasks();renderCalendar();renderSocial();renderGrowth(G);renderBusiness();renderProjects();renderMoney();renderPeople();
 if(keep){const y=scrollY;draw(curPage());window.scrollTo(0,y)}else show()}
const rerender=()=>render(true);

/* ================= TODAY ================= */
const KIND={learn:['bg-v','ai','var(--violet)'],biz:['bg-a','brief','var(--amber)'],health:['bg-g','gym','var(--green)'],life:['bg-c','sun','var(--cyan)']};
function brRow(x,i,bg){return typeof x==='string'?`<div class="row"><div class="ico ${bg}">${ic(i)}</div><div class="tx"><b>${esc(x)}</b></div></div>`:
 `<div class="row"><div class="ico ${bg}">${ic(i)}</div><div class="tx"><b>${esc(x.from?x.from+' · ':'')}${esc(x.title||x.subject||'')}</b>${x.note?`<div>${esc(x.note)}</div>`:''}</div></div>`}
function renderToday(G){
 const t=D.today||{},br=t.briefing||{},n=nowD(),S=D.schedule||[];
 const h=Math.floor(n.mins/60),greet=h<5?'Good night':h<12?'Good morning':h<17?'Good afternoon':'Good evening';
 const cur=S.find(s=>n.mins>=toMin(s.start)&&n.mins<toMin(s.end)),next=S.find(s=>toMin(s.start)>n.mins);
 const d0=toMin(S[0]?.start||'09:00'),d1=toMin(S[S.length-1]?.end||'23:00'),dayPct=Math.max(0,Math.min(1,(n.mins-d0)/(d1-d0)));
 const views=(D.social||[]).reduce((a,s)=>a+(s.recent||[]).reduce((b,p)=>b+(p.views||0),0),0);
 const ci=U.checkins[n.date], te=G.L.find(e=>e.date===n.date);
 const T=todos(),openT=T.filter(x=>!x.done),doneToday=T.filter(x=>x.done&&(x.doneAt||'').slice(0,10)===n.date).length;
 const Q=[{n:'1h Claude AI',s:'Learn or build with Claude',i:'ai',bg:'bg-v',xp:20,ok:te&&te.hours.ai>=1},
  {n:'30 min Arabic',s:'Shadow at the pool',i:'ar',bg:'bg-a',xp:10,ok:te&&te.hours.arabic>=0.5},
  {n:'Gym',s:gymMin(n.date)?gymMin(n.date)+' min logged by location':'20:00 – 22:00',i:'gym',bg:'bg-g',xp:40,ok:te&&te.gym},
  {n:'Finish 3 to-dos',s:`${doneToday}/3 done today`,i:'list',bg:'bg-p',xp:15,ok:doneToday>=3},
  {n:'Daily check-in',s:'Log hours, meetings, deals',i:'moon',bg:'bg-c',xp:10,ok:!!ci}];
 const done=Q.filter(q=>q.ok).length;
 const k=cur?KIND[cur.kind]||KIND.life:KIND.life;
 const tonight=eventsOn(n.date).filter(e=>toMin(e.time)>=17*60);
 const MM=meetings(),nm=MM.find(m=>['upcoming','now'].includes(mState(m))&&daysBetween(n.date,m.date)<=1),needs=MM.filter(m=>mState(m)==='needs'),fuDue=followups().filter(m=>m.followup<=n.date);
 const brBlock=(title,arr,i,bg,emptyT)=>`<div style="margin-bottom:10px"><div class="xs faint" style="font-weight:800;letter-spacing:.07em;text-transform:uppercase;margin-bottom:4px">${title} · ${arr?.length||0}</div>${arr?.length?arr.map(x=>brRow(x,i,bg)).join(''):empty(emptyT,'check')}</div>`;
 $('#p-today').innerHTML=`
 <div class="banner ${TOKEN?'hidden':''}" id="banner">${ic('key')}<span>Your check-ins and to-dos are saved on this device only. Connect saving so Claude sees them.</span><button data-act="settings">Connect</button></div>
 <div class="g3">
  <div class="card hero s2">
   <div class="me"><div class="avatar">${ring((G.xp-G.cur)/(G.nxt-G.cur),74,5,'url(#warm)')}<div class="face">${D.photo?`<img src="${D.photo}" alt="Borna">`:'BA'}</div><div class="lv">LV ${G.level}</div></div>
    <div><div class="xs faint" style="font-weight:700">${greet}</div><h2>Borna Ahadi</h2><div class="title"><span class="pill v">${ic('star')}${G.title}</span><span class="pill w">${ic('flame')}${G.streak}-day streak</span></div></div></div>
   <div class="xpline"><div class="lbl"><span>${ic('bolt')} ${G.xp} XP</span><span>${G.nxt-G.xp} XP to level ${G.level+1}</span></div><div class="bar"><i style="width:${Math.round((G.xp-G.cur)/(G.nxt-G.cur)*100)}%;background:var(--grad-warm)"></i></div></div>
   <div class="chips">
    <div class="chip"><div class="v">${hrs(te?totalH(te):0)}</div><div class="l">Studied today</div></div>
    <div class="chip"><div class="v">${openT.length}</div><div class="l">Open to-dos</div></div>
    <div class="chip"><div class="v">${done}/${Q.length}</div><div class="l">Quests</div></div>
    <div class="chip"><div class="v">${fmt(G.followers)}</div><div class="l">Followers</div></div>
   </div>
  </div>
  <div class="card now">
   <div class="ch"><div class="ic ${k[0]}">${ic(cur?k[1]:'clock')}</div><h3>${cur?'Right now':'Next up'}</h3><span class="aside">${cur?cur.start+'–'+cur.end:(next?next.start:'')}</span></div>
   <div class="big">${esc(cur?cur.block:(next?next.block:'Rest well'))}</div>
   <div class="muted sm">${esc(cur?cur.what:(next?next.what:'See you tomorrow at 9:00'))}</div>
   ${cur&&next?`<div class="sm faint" style="margin-top:8px">Then ${esc(next.start)} · ${esc(next.block)}</div>`:''}
   <div class="dayline"><div class="bar"><i style="width:${Math.round(dayPct*100)}%"></i></div><div class="marks"><span>${S[0]?.start||''}</span><span>${Math.round(dayPct*100)}% of your day</span><span>${S[S.length-1]?.end||''}</span></div></div>
  </div>
  ${needs.map(m=>`<div class="s3"><button class="cin warm" data-result="${m.id}"><div class="qi bg-o">${ic('users')}</div><div><b>How did the meeting with ${esc(m.person||'')} go?</b><small>Log the result and next steps — Claude will follow up for you</small></div><span class="go">${ic('chev')}</span></button></div>`).join('')}
  ${nm?`<div class="card s3 nextm"><div class="ch"><div class="ic bg-o">${ic('users')}</div><h3>${mState(nm)==='now'?'Meeting now':'Next meeting'}</h3><span class="aside">${esc(untilTxt(nm))}</span></div>${meetCard(nm,true)}</div>`:''}
  ${alerts().length?`<div class="s3 alerts">${alerts().map(alertRow).join('')}</div>`:''}
  ${fuDue.length?card('Follow up today','bell','bg-a',fuDue.map(fuRow).join(''),`${fuDue.length}`,'s3'):''}
  <div class="s3"><button class="cin" data-act="checkin"><div class="qi bg-grad">${ic(ci?'check':'moon')}</div><div><b>${ci?'Today’s check-in saved — tap to update':'Log your day'}</b><small>${ci?`${hrs(te?totalH(te):0)} studied · score ${ci.score||'—'}/10`:'Study hours, gym, meetings, new business — takes 1 minute'}</small></div><span class="go">${ic('chev')}</span></button></div>
  ${card("Today's quests",'target','bg-grad',Q.map(q=>`<div class="quest ${q.ok?'done':''}" data-act="${q.i==='list'?'tasks':'checkin'}"><div class="qi ${q.bg}">${ic(q.i)}</div><div><b>${q.n}</b><small>${q.s}</small></div><span class="xp">+${q.xp} XP</span><span class="ok">${q.ok?ic('check'):''}</span></div>`).join(''),`${done}/${Q.length} done`)}
  ${card('To-do','list','bg-p',`<div class="addline"><input class="inp" id="qadd" placeholder="Add a task…" enterkeyhint="done"><button data-act="qadd" aria-label="Add">${ic('plus')}</button></div>${openT.slice(0,5).map(todoRow).join('')||empty('All clear','check')}${openT.length>5?`<a href="#tasks" class="xs faint" style="display:block;margin-top:8px;font-weight:700">+${openT.length-5} more →</a>`:''}`,`${openT.length} open`)}
  ${moneyToday()}
  ${whereCard()}
  ${card('Tonight','moon','bg-v',(tonight.length?tonight.map(evRow).join(''):'')+routineRows(S.filter(s=>toMin(s.start)>=17*60)),'from 17:00')}
  ${card('Morning briefing','mail','bg-b',brBlock('Important',br.important,'alert','bg-r','Nothing legal or financial')+brBlock('Friends & personal',br.friends,'heart','bg-p','No personal messages')+brBlock('Drafts for your OK',br.drafts,'edit','bg-v','No drafts waiting')+(br.note?`<div class="xs faint">${esc(br.note)}</div>`:''),t.date&&t.date!==n.date?'from '+fd(t.date):'today')}
  <div class="grid">
   ${card("Today's focus",'bulb','bg-a',`<div class="sm">${esc(t.focus||'—')}</div>`)}
   ${card('Social alerts','share','bg-ig',[...(br.instagram||[]),...(br.facebook||[])].map(x=>brRow(x,'bolt','bg-p')).join('')||empty('Nothing new'))}
  </div>
 </div>`;
 const q=$('#qadd');if(q)q.onkeydown=e=>{if(e.key==='Enter'){quickAdd()}};
}
function routineRows(arr){return arr.map(s=>{const k=KIND[s.kind]||KIND.life;return `<div class="row"><div class="ico ${k[0]}" style="opacity:.8">${ic(k[1])}</div><div class="tx"><b>${s.start} · ${esc(s.block)}</b>${s.what?`<div>${esc(s.what)}</div>`:''}</div></div>`}).join('')}
function evRow(e){return `<div class="row" ${e.kind==='meeting'?`data-editmeet="${e.id}"`:''}><div class="ico ${e.kind==='pending'?'bg-a':e.kind==='meeting'?'bg-o':'bg-grad'}">${ic(e.kind==='pending'?'clock':e.kind==='meeting'?'users':'cal')}</div><div class="tx"><b>${esc(e.time||'All day')} · ${esc(e.title)}</b><div>${e.kind==='pending'?'Adding to Google Calendar…':esc(e.where||e.notes||'')}</div></div></div>`}
function timeline(){const n=nowD();return `<div class="tl">${(D.schedule||[]).map(s=>{const a=toMin(s.start),b=toMin(s.end);const st=n.mins>=a&&n.mins<b?'now':n.mins>=b?'past':'';const k=KIND[s.kind]||KIND.life;
 return `<div class="it ${st}"><div class="t">${s.start}</div><div class="dot" style="background:${k[2]}"></div><div class="b"><b>${esc(s.block)}</b>${st==='now'?'<span class="nowtag">NOW</span>':''}${s.what?`<div>${esc(s.what)}</div>`:''}</div></div>`}).join('')}</div>`}

/* ================= TASKS ================= */
const CATS=['Personal','Business','Learning','Social'];
function todoRow(t){const n=nowD().date,over=t.due&&!t.done&&t.due<n;
 return `<div class="todo ${t.done?'done':''}"><button class="cb" data-tog="${t.id}" aria-label="Done">${ic('check')}</button>
  <div class="tt" data-edit-todo="${t.claude?'':t.id}"><b>${esc(t.text)}</b><small>${t.claude?'<span class="tag t-Claude">Claude</span>':''}<span class="tag t-${esc(t.cat||'Personal')}">${esc(t.cat||'Personal')}</span>${t.due?`<span style="${over?'color:var(--red)':''}">${ic('cal')} ${t.due===n?'Today':fd(t.due)}</span>`:''}${t.note?`<span>${esc(t.note)}</span>`:''}</small></div>
  ${t.claude?'':`<button class="x" data-deltodo="${t.id}" aria-label="Delete">${ic('x')}</button>`}</div>`}
function renderTasks(){
 const T=todos(),n=nowD().date,open=T.filter(t=>!t.done),doneT=T.filter(t=>t.done);
 const doneWeek=doneT.filter(t=>(t.doneAt||'')>=addDays(n,-6)).length;
 const show=tfilter==='open'?open:tfilter==='done'?doneT:tfilter==='today'?open.filter(t=>t.due&&t.due<=n):open.filter(t=>(t.cat||'Personal')===tfilter);
 $('#p-tasks').innerHTML=`<div class="pt">To-do <span>${open.length} open · ${doneWeek} done this week</span></div>
 <div class="g3">
  <div class="card s2">
   <div class="addline"><input class="inp" id="tadd" placeholder="What needs doing?" enterkeyhint="done"><button data-act="tadd" aria-label="Add">${ic('plus')}</button></div>
   <div class="seg">${[['open','Open'],['today','Due'],...CATS.map(c=>[c,c]),['done','Done']].map(([k,l])=>`<button class="opt ${tfilter===k?'on':''}" data-tf="${k}">${l}</button>`).join('')}</div>
   ${show.map(todoRow).join('')||empty(tfilter==='done'?'Nothing finished yet':'Nothing here — add a task above','check')}
  </div>
  <div class="grid">
   <div class="card"><div class="me"><div class="ring-sm">${ring(T.length?doneT.length/T.length:0,54,6)}<b>${T.length?Math.round(doneT.length/T.length*100):0}%</b></div><div><b>${doneT.length} of ${T.length} done</b><div class="xs muted">+5 XP for every task you finish</div></div></div></div>
   ${card('By category','chart','bg-grad',CATS.map(c=>{const all=T.filter(t=>(t.cat||'Personal')===c),d=all.filter(t=>t.done).length;return `<div style="margin-bottom:9px"><div class="xs" style="display:flex;justify-content:space-between;font-weight:700"><span><span class="tag t-${c}">${c}</span></span><span class="muted">${d}/${all.length}</span></div><div class="bar" style="margin-top:4px"><i style="width:${all.length?d/all.length*100:0}%"></i></div></div>`}).join(''))}
   ${card('Tip','bulb','bg-a','<div class="sm muted">Tap a task to edit it or set a due date. Claude adds tasks too (marked Claude) — like follow-ups from your emails and deals.</div>')}
  </div>
 </div>`;
 const i=$('#tadd');if(i)i.onkeydown=e=>{if(e.key==='Enter')addTodoFrom('#tadd')};
}
function addTodoFrom(sel,cat){const i=$(sel);const v=(i?.value||'').trim();if(!v)return;const guess=cat||(/deal|client|meet|call|kdp|business|invoice/i.test(v)?'Business':/learn|study|course|arabic|ai|cloud/i.test(v)?'Learning':/post|reel|video|instagram|youtube|facebook/i.test(v)?'Social':'Personal');
 U.todos.push({id:uid(),text:v,cat:guess,due:'',done:false,updated:new Date().toISOString()});queueSave();i.value='';rerender();toast('Task added')}
function quickAdd(){addTodoFrom('#qadd')}
function toggleTodo(id){const now=new Date().toISOString();const t=U.todos.find(x=>x.id===id);
 if(t){t.done=!t.done;t.doneAt=t.done?now:null;t.updated=now;if(t.done)toast('+5 XP ✓')}
 else{const c=U.ctodo[id]||{};U.ctodo[id]={done:!c.done,updated:now};if(!c.done)toast('+5 XP ✓')}
 queueSave();rerender()}
function delTodo(id){const t=U.todos.find(x=>x.id===id);if(!t)return;t.deleted=true;t.updated=new Date().toISOString();queueSave();rerender();toast('Deleted')}

/* ================= CALENDAR ================= */
function renderCalendar(){
 const n=nowD(),S=D.schedule||[];
 const days=Array.from({length:7},(_,i)=>addDays(n.date,i));
 const evCount=days.reduce((a,d)=>a+eventsOn(d).length,0);
 $('#p-calendar').innerHTML=`<div class="pt">Calendar <span>next 7 days · ${evCount} events</span></div>
 <div class="g3">
  <div class="card s2">
   <div class="ch"><div class="ic bg-grad">${ic('cal')}</div><h3>This week</h3><button class="pill v" data-act="event">${ic('plus')}Add event</button></div>
   ${days.map(d=>{const ev=eventsOn(d),isT=d===n.date,open=showRoutine[d];return `<div class="day ${isT?'today':''}"><h4><span class="dd">${fd(d,{day:'numeric'})}<small>${fd(d,{weekday:'short'}).toUpperCase()}</small></span>${isT?'Today':fd(d,{weekday:'long'})} <span class="xs faint">${ev.length?ev.length+' event'+(ev.length>1?'s':''):'routine day'}</span></h4>
    ${ev.map(e=>`<div class="ev ${e.kind==='pending'?'pending':''} ${e.kind==='meeting'?'mtg':''}" ${e.kind==='meeting'?`data-editmeet="${e.id}"`:''}><span class="tm">${esc(e.time||'All day')}</span><div><b>${esc(e.title)}</b><small>${e.kind==='pending'?'⏳ Claude will add this to Google Calendar':esc([e.end?'until '+e.end:'',e.where||'',e.notes||''].filter(Boolean).join(' · '))}</small></div></div>`).join('')}
    <button class="routine-toggle" data-rt="${d}">${ic(open?'down':'chev')}${open?'Hide':'Show'} daily routine (${S.length} blocks)</button>
    ${open?S.map(s=>`<div class="ev routine"><span class="tm">${s.start}</span><div><b>${esc(s.block)}</b></div></div>`).join(''):''}</div>`}).join('')}
  </div>
  <div class="grid">
   ${card('Tonight','moon','bg-v',eventsOn(n.date).filter(e=>toMin(e.time)>=17*60).map(evRow).join('')+routineRows(S.filter(s=>toMin(s.start)>=17*60)))}
   ${card('Pending for Claude','clock','bg-a',(U.cal_requests||[]).filter(r=>!r.deleted&&!(D.cal_done||[]).includes(r.id)).map(r=>`<div class="row"><div class="ico bg-a">${ic('cal')}</div><div class="tx"><b>${esc(r.title)}</b><div>${fd(r.date,{weekday:'short',day:'numeric',month:'short'})} · ${esc(r.time||'')} · added at next refresh</div></div></div>`).join('')||empty('Nothing waiting','check'))}
  </div>
  ${card('Daily routine','clock','bg-c',timeline(),'','s3')}
 </div>`;
}

/* ================= SOCIAL ================= */
const PL={instagram:{n:'Instagram',bg:'bg-ig',c:'#dd2a7b'},youtube:{n:'YouTube',bg:'bg-yt',c:'#ff2d55'},facebook:{n:'Facebook',bg:'bg-fb',c:'#1877f2'}};
const ACOL=['#8b5cf6','#22d3ee','#f472b6','#fbbf24','#34d399','#fb923c','#60a5fa','#f87171'];
const AB={instagram:'IG',youtube:'YT',facebook:'FB'};
function deltaTxt(h,days=7){if(!h||h.length<2)return '<div class="d faint">tracking started</div>';const last=h[h.length-1];const cut=addDays(last.date,-days);const past=h.filter(x=>x.date<=cut).pop()||h[0];const d=(last.followers||0)-(past.followers||0);return `<div class="d ${d>=0?'up':'down'}">${d>=0?'▲':'▼'} ${Math.abs(d)} in ${days}d</div>`}
function renderSocial(){
 const S=D.social||[];const tot=S.reduce((a,s)=>a+(s.followers||0),0);
 const allViews=S.reduce((a,s)=>a+(s.recent||[]).reduce((b,p)=>b+(p.views||0),0),0);
 const eng=S.reduce((a,s)=>a+(s.recent||[]).reduce((b,p)=>b+(p.likes||0)+(p.comments||0)+(p.shares||0),0),0);
 const best=S.flatMap(s=>s.recent||[]).sort((a,b)=>(b.views||b.likes||0)-(a.views||a.likes||0))[0];
 const counts={all:S.length};S.forEach(s=>counts[s.platform]=(counts[s.platform]||0)+1);
 const shown=S.filter(s=>filter==='all'||s.platform===filter);
 const v30=S.reduce((a,s)=>a+(s.views30||0),0);
 const top=S.filter(s=>s.platform!=='facebook').flatMap(s=>(s.recent||[]).map(p=>({...p,acct:s.name,pf:s.platform,hot:isViral(p,s.recent||[])}))).sort((a,b)=>(b.views||0)-(a.views||0)).slice(0,5);
 const tmax=Math.max(1,...top.map(p=>p.views||0));
 $('#p-social').innerHTML=`<div class="pt">Social growth <span>${S.length} accounts · 3 platforms</span></div>
 ${alerts(['viral','milestone','social']).length?`<div class="alerts" style="margin-bottom:14px">${alerts(['viral','milestone','social']).map(alertRow).join('')}</div>`:''}
 <div class="stats" style="margin-bottom:14px">
  ${stat(fmt(tot),'Followers','users')}
  ${v30?stat(fmt(v30),'Views · 30 days','eye','<div class="d faint">Instagram, all content</div>'):stat(fmt(allViews),'Views · recent posts','eye','<div class="d faint">last 10 per account</div>')}
  ${stat(fmt(eng),'Engagements','heart','<div class="d faint">likes + comments + shares</div>')}
  ${stat(best?fmt(best.views||best.likes):'—','Best post','trophy',best?`<div class="d" style="color:var(--amber)">${esc(best.title).slice(0,26)}</div>`:'','var(--amber)')}
 </div>
 <div class="g2" style="margin-bottom:14px">
  ${card('Followers by account','users','bg-grad','<div class="chartbox sm"><canvas id="c-fol"></canvas></div><div class="legend" id="lg-fol"></div>')}
  ${card('Views by account','eye','bg-p','<div class="chartbox sm"><canvas id="c-views"></canvas></div><div class="xs faint" style="margin-top:6px">Instagram & YouTube, last 10 posts. Facebook shows reactions.</div>')}
 </div>
 ${card('Top posts right now','trophy','bg-a',top.map((p,i)=>`<a class="toppost" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer"><span class="rk ${i===0?'gold':''}">${i+1}</span><div class="tt"><b>${esc(p.title)}</b><small>${AB[p.pf]} · ${esc(p.acct)} · ${fd(p.date)}${p.hot?' · <span class="fire">viral</span>':''}${p.vd?` · <span class="up">+${fmt(p.vd)} today</span>`:''}</small><div class="vbar" style="width:${Math.max(3,Math.round((p.views||0)/tmax*100))}%"></div></div><b class="vv">${fmt(p.views||0)}</b></a>`).join('')||empty('No posts yet'),'by views','s3 mb')}
 <div class="filters">${[['all','All','chart'],['instagram','Instagram','instagram'],['youtube','YouTube','youtube'],['facebook','Facebook','facebook']].map(([k,l,i])=>`<button data-f="${k}" class="${filter===k?'on':''}">${ic(i)}${l} <span class="xs" style="opacity:.8">${counts[k]||0}</span></button>`).join('')}</div>
 <div class="g2">${shown.map(acctCard).join('')}</div>`;
}
function acctCard(s){
 const p=PL[s.platform]||PL.instagram,r=s.recent||[],isFB=s.platform==='facebook',vKey=isFB?'likes':'views';
 const tv=r.reduce((a,x)=>a+(x[vKey]||0),0),avg=r.length?Math.round(tv/r.length):0;
 const engg=r.reduce((a,x)=>a+(x.likes||0)+(x.comments||0)+(x.shares||0),0),er=!isFB&&tv?((engg/tv)*100).toFixed(1)+'%':'—';
 const max=Math.max(1,...r.map(x=>x[vKey]||0)),bestP=r.slice().sort((a,b)=>(b[vKey]||0)-(a[vKey]||0))[0];
 const last=r.map(x=>x.date).sort().pop(),gap=last?daysBetween(last,nowD().date):null;
 if(s.limited)return `<div class="card acct"><div class="head ${p.bg}"><div class="pav">${ic(s.platform)}</div><div><b>${esc(s.name)}</b><small>${esc(s.topic)}</small></div></div><div class="tip">${ic('shield')}<span>${esc(s.tip)}</span></div></div>`;
 return `<div class="card acct">
  <div class="head ${p.bg}"><div class="pav">${s.avatar?`<img src="${s.avatar}" alt="">`:ic(s.platform)}</div><div style="min-width:0"><b>${esc(s.name)}</b><small>${p.n} · ${esc(s.topic||'')}</small></div><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a></div>
  <div class="stats">
   ${stat(fmt(s.followers),s.platform==='youtube'?'Subs':'Followers','users',deltaTxt(s.history))}
   ${s.platform==='youtube'?stat(fmt(s.total_views),'All views','eye'):stat(fmt(tv),isFB?'Reactions':'Views','eye','<div class="d faint">last '+r.length+'</div>')}
   ${s.views30?stat(fmt(s.views30),'Views 30d','chart'):stat(fmt(avg),isFB?'Avg react.':'Avg views','chart')}
   ${stat(gap==null?'—':gap+'d','Last post','clock',gap>4?'<div class="d down">post soon</div>':'<div class="d up">active</div>',gap>4?'var(--red)':'')}
  </div>
  <div class="posts">${r.slice(0,4).map(x=>`<a class="post" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">
   ${x.thumb?`<div class="th" data-bg="${esc(x.thumb)}"></div>`:`<div class="pi">${ic(x.type==='Carousel'?'book':x.type==='Post'?'edit':'play')}</div>`}
   <div class="tt"><b class="${x===bestP?'best':''}">${x===bestP?'★ ':''}${esc(x.title)}</b><small>${fd(x.date)} · ${esc(x.type||'')}${!isFB&&isViral(x,r)?' · <span class="fire">viral</span>':''}${x.vd?` · <span class="up">+${fmt(x.vd)}</span>`:''}</small><div class="vbar" style="width:${Math.max(2,Math.round((x[vKey]||0)/max*100))}%;${isFB?'background:var(--fb)':''}"></div></div>
   <div class="m">${isFB?'':`<span>${ic('eye')}${fmt(x.views||0)}</span>`}<span>${ic('heart')}${fmt(x.likes||0)}</span><span>${ic('msg')}${x.comments||0}</span></div></a>`).join('')||empty('No posts yet')}</div>
  ${!isFB?`<div class="xs faint" style="margin-top:6px">Engagement rate ${er}</div>`:''}
  ${s.tip?`<div class="tip">${ic('bulb')}<span>${esc(s.tip)}</span></div>`:''}
 </div>`;
}
function lazyThumbs(){const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.backgroundImage=`url("${e.target.dataset.bg}")`;io.unobserve(e.target)}}),{rootMargin:'200px'}):null;
 $$('.th[data-bg]').forEach(el=>io?io.observe(el):el.style.backgroundImage=`url("${el.dataset.bg}")`)}

/* ================= GROWTH ================= */
function renderGrowth(G){
 const n=nowD(),month=n.date.slice(0,7),L=G.L,ML=L.filter(e=>e.date.startsWith(month));
 const dim=new Date(+month.slice(0,4),+month.slice(5,7),0).getDate();
 const wk=L.filter(e=>e.date>=addDays(n.date,-6));
 const avg=ML.length?(ML.reduce((a,e)=>a+e.score,0)/ML.length).toFixed(1):'—';
 const by=Object.fromEntries(L.map(e=>[e.date,e]));
 const HC={ai:'var(--violet)',arabic:'var(--amber)',gym:'var(--green)',met:'#fb923c'};
 const hk={ai:e=>e.hours.ai>0,arabic:e=>e.hours.arabic>0||e.words>0,gym:e=>e.gym,met:e=>e.met>0};
 const heatRow=(k,l,i)=>`<div class="lb">${ic(i)}${l}</div><div class="cells">${Array.from({length:dim},(_,j)=>{const d=`${month}-${String(j+1).padStart(2,'0')}`,e=by[d];const on=e&&hk[k](e);return `<div class="cell ${d>n.date?'fut':''} ${d===n.date?'today':''}" title="${d}" ${on?`style="background:${HC[k]};border-color:${HC[k]}"`:''}></div>`}).join('')}</div>`;
 const W=D.arabic_words||[],P=D.plan||{},WK=P.weeks||[],ci=WK.findIndex(w=>n.date>=w.from&&n.date<=w.to),WC=['bg-v','bg-p','bg-c','bg-o'];
 $('#p-growth').innerHTML=`<div class="pt">Personal growth <span>${fd(month+'-01',{month:'long',year:'numeric'})}</span></div>
 <div class="g3">
  <div class="card hero">
   <div class="lvl"><div class="ringbig">${ring((G.xp-G.cur)/(G.nxt-G.cur),110,9,'url(#warm)')}<div class="c"><div><small>LEVEL</small><b>${G.level}</b></div></div></div>
    <div><div class="pill v">${ic('star')}${G.title}</div><div class="v" style="font-size:26px;font-weight:700;margin-top:8px">${G.xp} <span class="sm muted">XP</span></div><div class="xs muted">${G.nxt-G.xp} XP to ${TITLES[Math.min(G.level,9)]}</div></div></div>
   <div class="xs faint" style="margin-top:12px;line-height:1.7">XP: check-in +10 · study +20/hour · Arabic word +3 · gym +40 · meeting +15 · new opportunity +25 · to-do +5 · score 8+ +20</div>
  </div>
  <div class="card s2"><div class="ch"><div class="ic bg-grad">${ic('target')}</div><h3>Skill radar</h3><span class="aside">this month</span></div><div class="chartbox"><canvas id="c-radar"></canvas></div></div>
  ${card('Study hours','clock','bg-v',`<div class="hours">${SUBJ.map(s=>`<div class="h"><div class="v" style="color:${s.c}">${hrs(wk.reduce((a,e)=>a+(e.hours[s.k]||0),0))}</div><small>${ic(s.i)}${s.n}</small></div>`).join('')}</div>
   <div class="xs faint" style="margin:8px 0 4px">Last 7 days · all-time ${hrs(Object.values(G.H).reduce((a,b)=>a+b,0))}</div>${L.length?'<div class="chartbox"><canvas id="c-hours"></canvas></div>':empty('Log hours in your daily check-in','clock')}`,'this week','s3')}
  <div class="stats s3">
   ${stat(`${ML.length}<span class="sm muted">/${+n.date.slice(8,10)}</span>`,'Days logged','check')}
   ${stat(avg,'Avg day score','star')}
   ${stat(`${G.streak} ${ic('flame')}`,'Check-in streak','flame','','var(--orange)')}
   ${stat(G.words,'Arabic words','ar',`<div class="bar" style="margin-top:6px"><i style="width:${Math.min(100,G.words/(P.arabic?.target_words||150)*100)}%;background:var(--amber)"></i></div>`)}
  </div>
  ${card('Badges','trophy','bg-a',`<div class="badges">${G.badges.map(b=>`<div class="badge ${b.ok?'':'locked'}"><div class="bi ${b.bg}">${ic(b.ok?b.icn:'lock')}</div><b>${b.n}</b><small>${b.d}</small></div>`).join('')}</div>`,`${G.badges.filter(b=>b.ok).length}/${G.badges.length} unlocked`,'s3')}
  ${card('XP per day','bolt','bg-o',L.length?'<div class="chartbox"><canvas id="c-xp"></canvas></div>':empty('XP bars start after your first check-in','moon'),'','s2')}
  ${card('Day score','star','bg-p',L.length?'<div class="chartbox"><canvas id="c-score"></canvas></div>':empty('Score yourself 1–10 each night','moon'))}
  ${card('Habit map','flame','bg-g',`<div class="heat">${heatRow('ai','AI','ai')}${heatRow('arabic','Arabic','ar')}${heatRow('gym','Gym','gym')}${heatRow('met','Meet','users')}</div>
   <div class="legend"><span><i style="background:var(--violet)"></i>AI ${G.streakOf(e=>e.hours.ai>0)}d streak</span><span><i style="background:var(--amber)"></i>Arabic ${G.streakOf(e=>e.hours.arabic>0||e.words>0)}d</span><span><i style="background:var(--green)"></i>Gym ${G.streakOf(e=>e.gym)}d</span></div>`,'','s3')}
  ${card(`AI roadmap · ${esc(P.month||'')}`,'ai','bg-v',WK.map((w,i)=>`<div class="wk ${i===ci?'cur':''}"><div class="n ${w.done?'bg-g':WC[i%4]}">${w.done?ic('check'):i+1}</div><div style="min-width:0"><b>${esc(w.theme)} ${i===ci?'<span class="nowtag">THIS WEEK</span>':''}</b><small>${fd(w.from)} – ${fd(w.to)} · ${esc(w.detail)}</small></div></div>`).join('')+`<div class="tip">${ic('target')}<span>${esc(P.goal||'')}</span></div>`,'','s2')}
  <div class="grid">
   ${card('Claude AI','ai','bg-v',`<b class="sm">${esc(P.claude?.track||'')}</b><div class="xs muted">${esc(P.claude?.target||'')} · ${hrs(G.H.ai)} so far</div>`)}
   ${card('Arabic','ar','bg-a',`<b class="sm">${esc(P.arabic?.track||'')}</b><div class="xs muted">Goal ${esc(P.arabic?.target_words||150)} words · ${hrs(G.H.arabic)} practised</div>`)}
  </div>
  ${card('Arabic word bank','ar','bg-c',W.length?`<div class="words">${W.slice().reverse().map(w=>`<span class="word"><span class="ar" dir="rtl" lang="ar">${esc(w.ar)}</span>${esc(w.meaning)}</span>`).join('')}</div>`:empty('Words from your check-ins collect here','ar'),`${W.length} words`,'s3')}
  ${card('Daily log','book','bg-v',L.length?`<div class="tablewrap"><table><thead><tr><th>Date</th>${SUBJ.map(s=>`<th>${s.n}</th>`).join('')}<th>Gym</th><th>Meet</th><th>Win</th><th>XP</th><th>Score</th></tr></thead><tbody>${L.slice().reverse().map(e=>`<tr><td class="faint" style="white-space:nowrap">${fd(e.date)}</td>${SUBJ.map(s=>`<td class="v">${e.hours[s.k]?hrs(e.hours[s.k]):'<span class="faint">—</span>'}</td>`).join('')}<td>${e.gym?'<span class="pill g">✓</span>':'<span class="faint">—</span>'}</td><td class="v">${e.met||'—'}</td><td>${esc(e.win)}</td><td class="v" style="color:var(--amber)">+${dayXP(e)}</td><td class="v"><b>${e.score||''}</b></td></tr>`).join('')}</tbody></table></div>`:empty('Tap “Log your day” on the Today page','moon'),'','s3')}
  ${card('Monthly reviews','trophy','bg-g',(D.reviews||[]).length?D.reviews.slice().reverse().map(r=>`<div style="margin-bottom:12px"><div style="display:flex;gap:8px;align-items:center"><b>${esc(r.month)}</b><span class="pill w">${esc(r.overall??'')}/10</span></div><div class="sm muted">${esc(r.summary||'')}</div>
   ${(r.scores||[]).map(s=>`<div style="margin-top:8px"><div class="xs" style="display:flex;justify-content:space-between;font-weight:700"><span>${esc(s.area)}</span><span>${esc(s.score)}/10</span></div><div class="bar"><i style="width:${(+s.score||0)*10}%"></i></div><div class="xs faint">${esc(s.evidence||'')}</div></div>`).join('')}
   ${(r.weaknesses||[]).length?`<div class="xs faint" style="margin-top:10px;font-weight:800;text-transform:uppercase;letter-spacing:.07em">Weaknesses</div>${r.weaknesses.map(w=>`<div class="sm">• ${esc(w)}</div>`).join('')}`:''}
   ${(r.recommendations||[]).length?`<div class="xs faint" style="margin-top:10px;font-weight:800;text-transform:uppercase;letter-spacing:.07em">Next month</div>${r.recommendations.map(w=>`<div class="sm">• ${esc(w)}</div>`).join('')}`:''}</div>`).join(''):empty('Your first test and review is on 1 November','trophy'),'','s3')}
 </div>`;
}

/* ================= BUSINESS ================= */
const STATUS=['Idea','In progress','Waiting on them','Closed'],SCLS={'Idea':'v','In progress':'b','Waiting on them':'w','Closed':'g'};
function renderBusiness(){
 const n=nowD(),mine=(U.deals||[]).filter(d=>!d.deleted).sort((a,b)=>(b.updated||'')<(a.updated||'')?-1:1),U2=D.upcoming||[],notes=D.deal_notes||{};
 const all=[...(D.deals||[]),...mine];const M=meetings();
 const up=M.filter(m=>['upcoming','now'].includes(mState(m))),needs=M.filter(m=>mState(m)==='needs'),hist=M.filter(m=>['done','cancelled'].includes(mState(m))).reverse(),fu=followups();
 const nextM=up[0],wk=M.filter(m=>m.date>=n.date&&m.date<=addDays(n.date,6)&&m.status!=='cancelled').length;
 const other=U2.filter(u=>!M.some(m=>m.date===u.date&&(u.title||'').toLowerCase().includes((m.person||'#').split(' ')[0].toLowerCase())));
 const cntM=id=>M.filter(m=>m.deal===id).length;
 $('#p-business').innerHTML=`<div class="pt">Business <span>meetings · follow-ups · deals</span></div>
 <div class="bizbar"><button class="bigadd" data-act="meet">${ic('users')}New meeting</button><button class="bigadd alt" data-act="deal">${ic('deal')}New business</button></div>
 <div class="stats" style="margin-bottom:14px">
  ${stat(wk,'Meetings · 7 days','users')}
  ${stat(needs.length,'Results to log','edit',needs.length?'<div class="d down">tap below</div>':'<div class="d up">all logged</div>',needs.length?'var(--orange)':'')}
  ${stat(fu.filter(m=>m.followup<=n.date).length,'Follow-ups due','bell',`<div class="d faint">${fu.length} open</div>`)}
  ${stat(all.filter(d=>d.status!=='Closed').length,'Open deals','deal',`<div class="d faint">${all.filter(d=>d.status==='Closed').length} closed</div>`)}
 </div>
 <div class="g3">
  ${needs.length?`<div class="card s3 hot"><div class="ch"><div class="ic bg-o">${ic('alert')}</div><h3>Log the result</h3><span class="aside">${needs.length} waiting</span></div>${needs.map(m=>meetCard(m,true)).join('')}</div>`:''}
  <div class="card s2"><div class="ch"><div class="ic bg-o">${ic('users')}</div><h3>${nextM&&mState(nextM)==='now'?'Meeting now':'Next meeting'}</h3>${nextM?`<span class="aside">${esc(untilTxt(nextM))}</span>`:''}</div>
   ${nextM?meetCard(nextM,true):`<button class="cin" data-act="meet" style="margin:0"><div class="qi bg-o">${ic('plus')}</div><div><b>Add a meeting</b><small>Person, place, time and agenda — Claude reminds you and follows up</small></div></button>`}</div>
  ${card('Deals pipeline','deal','bg-g',pipeline().filter(d=>!['Won','Lost'].includes(d.stage)).map(d=>`<div class="row" data-pipe="${d.id}"><div class="ico bg-g">${ic('deal')}</div><div class="tx"><b>${esc(d.name)}</b><div>${esc(d.stage)} · ${aed(d.value)} · ${d.prob||0}%${d.next?' · '+esc(d.next):''}</div></div></div>`).join('')||empty('No open deals','deal'),`<a href="#money" class="xs" style="font-weight:800;color:var(--green)">Money →</a>`,'s3')}
  ${card('Follow-ups','bell','bg-a',fu.map(fuRow).join('')||empty('After a meeting, set a follow-up date and it shows here','bell'),fu.length?fu.length+' open':'')}
  ${card('Coming up','cal','bg-c',(up.slice(1).map(m=>meetCard(m)).join('')+other.map(m=>`<div class="row"><div class="ico bg-c">${ic('cal')}</div><div class="tx"><b>${esc(m.title)}</b><div>${fd(m.date,{weekday:'short',day:'numeric',month:'short'})}${m.time?' · '+esc(m.time):''}${m.where?' · '+esc(m.where):''} · from Google Calendar</div></div></div>`).join(''))||empty('Nothing else planned'),`${up.length+other.length} planned`,'s2')}
  ${card('Meeting history','book','bg-v',hist.slice(0,8).map(m=>meetCard(m)).join('')||empty('Results you log appear here','book'),hist.length?hist.length+' meetings':'')}
  <div class="card s3">
   <div class="ch"><div class="ic bg-g">${ic('deal')}</div><h3>My deals & opportunities</h3><button class="pill g" data-act="deal">${ic('plus')}Add</button></div>
   ${mine.length?mine.map(d=>{const left=d.due?daysBetween(n.date,d.due):null;const nt=notes[d.id];return `<div class="dealmini" data-editdeal="${d.id}"><div class="top"><b>${esc(d.name)}</b><span class="pill ${SCLS[d.status]||'v'}">${esc(d.status)}</span></div>
    ${d.desc?`<p>${esc(d.desc)}</p>`:''}
    <div class="meta">${d.with?`<span>${ic('users')}${esc(d.with)}</span>`:''}${cntM(d.id)?`<span>${ic('cal')}${cntM(d.id)} meeting${cntM(d.id)>1?'s':''}</span>`:''}${d.value?`<span>${ic('money')}${esc(d.value)}</span>`:''}${d.next?`<span>${ic('chev')}${esc(d.next)}</span>`:''}${d.due?`<span style="${left<0?'color:var(--red)':''}">${ic('cal')}${left<0?'overdue':left===0?'today':fd(d.due)}</span>`:''}</div>
    ${nt?`<div class="note"><b>${ic('spark')}Claude</b>${esc(nt.text)}</div>`:`<div class="xs faint" style="margin-top:8px">Claude will research this and suggest next steps at the next refresh.</div>`}</div>`}).join(''):`<button class="cin" data-act="deal" style="margin:0"><div class="qi bg-g">${ic('plus')}</div><div><b>Add your first business</b><small>Explain the deal and Claude will research it and plan next steps</small></div></button>`}
  </div>
  ${(D.deals||[]).map(d=>dealCard(d,n)).join('')}
 </div>`;
}
function dealCard(d,n){
 const kdp=/kdp/i.test(d.name),steps=kdp?['Terminated','Appeal sent','Executive review','Decision','Reinstated']:['Idea','In progress','Waiting','Closed'],tl=d.timeline||[];
 const curStep=kdp?(d.status==='Closed'?4:tl.some(e=>/executive|escalat/i.test(e.text))?2:tl.length>1?1:0):({'Idea':0,'In progress':1,'Waiting on them':2,'Closed':3}[d.status]??0);
 const left=d.due?daysBetween(n.date,d.due):null;
 return `<div class="card case s3">
  <div class="ch"><div class="ic bg-o">${ic(kdp?'book':'deal')}</div><h3>${esc(d.name)}</h3><span class="pill ${SCLS[d.status]||'v'}">${esc(d.status)}</span></div>
  <div class="sm muted">${esc(d.with||'')} · tracked by Claude from your email</div>
  <div class="steps">${steps.map((s,i)=>`<div class="step ${i<curStep?'done':i===curStep?'cur':''}"><div class="sd">${i<curStep?ic('check'):i===curStep?ic('clock'):''}</div>${s}</div>`).join('')}</div>
  <div class="countdown"><div class="n">${left==null?'—':left<0?'!':left}</div><div><b class="sm">${left==null?'No date set':left<0?'Overdue':left===0?'Due today':'days until follow-up'}</b><div class="sm muted">${esc(d.next||'')}</div></div></div>
  ${tl.length?`<div class="xs faint" style="margin:14px 0 8px;font-weight:800;letter-spacing:.07em;text-transform:uppercase">Timeline</div><div class="vt">${tl.map(e=>`<div class="e"><b>${fd(e.date,{day:'numeric',month:'short',year:'numeric'})}</b><div>${esc(e.text)}</div></div>`).join('')}</div>`:''}
  ${d.notes?`<div class="xs faint">${esc(d.notes)}</div>`:''}
 </div>`;
}

/* ================= SHEETS ================= */
function sheet(html){$('#sheet').innerHTML='<div class="grab"></div>'+html;$('#scrim').classList.add('on');$('#sheet').classList.add('on');$('#sheet').scrollTop=0}
function closeSheet(){stopRec();$('#scrim').classList.remove('on');$('#sheet').classList.remove('on')}
$('#scrim').onclick=closeSheet;
const head=(t,i,bg)=>`<h2><span class="ic ${bg}">${ic(i)}</span>${t}<button data-act="close" aria-label="Close">${ic('x')}</button></h2>`;
function openActions(){sheet(head('Add','plus','bg-grad')+`<div class="actions">
 <button class="action" data-act="talk"><span class="qi bg-grad">${ic('mic')}</span><b>Talk to Claude</b><small>Say it — Claude does it</small></button>
 <button class="action" data-act="meet"><span class="qi bg-o">${ic('users')}</span><b>New meeting</b><small>Who, where, when, agenda</small></button>
 <button class="action" data-act="checkin"><span class="qi bg-v">${ic('moon')}</span><b>Log my day</b><small>Hours, gym, meetings</small></button>
 <button class="action" data-act="newtask"><span class="qi bg-p">${ic('list')}</span><b>New to-do</b><small>Task with category & date</small></button>
 <button class="action" data-act="deal"><span class="qi bg-g">${ic('deal')}</span><b>New deal</b><small>What you earn + chance</small></button>
 <button class="action" data-act="event"><span class="qi bg-c">${ic('cal')}</span><b>New event</b><small>Claude adds it to Google Calendar</small></button>
 <button class="action" data-act="idea"><span class="qi bg-a">${ic('bulb')}</span><b>Improve the app</b><small>Tell Claude what to change</small></button>
 <button class="action" data-act="project"><span class="qi bg-v">${ic('folder')}</span><b>New project</b><small>Idea or work in progress</small></button>
 <button class="action" data-act="places"><span class="qi bg-c">${ic('pin')}</span><b>My places</b><small>Home, gym — auto tracking</small></button>
 <button class="action" data-act="newperson"><span class="qi bg-v">${ic('users')}</span><b>New contact</b><small>Name, number, photo</small></button>
 <button class="action" data-act="txnin"><span class="qi bg-g">${ic('money')}</span><b>Money in / out</b><small>Log what you received</small></button></div>`)}
const optBtns=(name,vals,cur,lab=v=>v)=>`<div class="opts" data-name="${name}">${vals.map(v=>`<button type="button" class="opt ${String(cur)===String(v)?'on':''}" data-v="${v}">${lab(v)}</button>`).join('')}</div>`;
function openCheckin(date){
 const n=nowD();date=date||n.date;const c=U.checkins[date]||{};const st=c.study||{};
 const mt=eventsOn(date).filter(e=>e.kind==='event'||e.kind==='meeting');
 const H=[0,0.5,1,1.5,2,3,4];
 sheet(head('Log my day','moon','bg-grad')+`<form id="cf">
  <div class="fld"><label>Day</label>${optBtns('date',[addDays(n.date,-1),n.date],date,v=>v===n.date?'Today':'Yesterday')}</div>
  <div class="fld"><label>How long did you study?</label>${SUBJ.map(s=>`<div class="subj"><span class="qi ${s.bg}">${ic(s.i)}</span><span class="nm">${s.n}</span>${optBtns('h_'+s.k,H,st[s.k]||0,v=>v===0?'0':v===4?'4+':v+'h')}</div>`).join('')}</div>
  <div class="fld"><label>What did you learn in AI? (optional)</label><input class="inp" name="aiNote" value="${esc(c.aiNote||'')}" placeholder="e.g. built an email filter with Claude"></div>
  <div class="fld"><label>New Arabic words (comma separated)</label><input class="inp" name="words" value="${esc(c.words||'')}" placeholder="shukran – thanks, yalla – let's go"></div>
  <div class="fld"><label>Gym</label>${optBtns('gym',[0,30,60,90,120],c.gymMin||[0,30,60,90,120].reduce((a,v)=>Math.abs(v-gymMin(date))<Math.abs(a-gymMin(date))?v:a,0),v=>v?v+' min':'No')}</div>
  <div class="fld"><label>Meetings</label>${mt.map((m,i)=>`<label class="chk" style="margin-bottom:8px"><input type="checkbox" name="m_${i}" data-title="${esc(m.title)}" ${(c.meetings||[]).find(x=>x.title===m.title&&x.attended)?'checked':''}> Attended: ${esc(m.time||'')} ${esc(m.title)}</label>`).join('')}
   <input class="inp" name="otherMeet" value="${esc((c.meetings||[]).filter(x=>x.other).map(x=>x.title).join(', '))}" placeholder="Other meetings you attended (who / where)"></div>
  <div class="fld"><label>New business opportunity?</label><textarea class="inp" name="opportunity" placeholder="Who, what, how big, next step…">${esc(c.opportunity||'')}</textarea>
   <label class="chk" style="margin-top:8px"><input type="checkbox" name="addDeal" ${c.dealId?'checked disabled':'checked'}> ${c.dealId?'Added to Business':'Also add it to Business'}</label></div>
  <div class="two"><div class="fld"><label>Win of the day</label><input class="inp" name="win" value="${esc(c.win||'')}"></div><div class="fld"><label>What got in the way</label><input class="inp" name="blocker" value="${esc(c.blocker||'')}"></div></div>
  <div class="fld"><label>Score your day</label><div class="score opts" data-name="score">${Array.from({length:10},(_,i)=>`<button type="button" class="opt ${+c.score===i+1?'on':''}" data-v="${i+1}">${i+1}</button>`).join('')}</div></div>
  <div class="fld"><label>Anything else for Claude?</label><textarea class="inp" name="notes" placeholder="Notes, questions, things to follow up">${esc(c.notes||'')}</textarea></div>
  <div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">Save day</button></div></form>`);
 wireOpts();
 $$('#cf [data-name="date"] .opt').forEach(b=>b.onclick=()=>openCheckin(b.dataset.v));
 $('#cf').onsubmit=e=>{e.preventDefault();const f=e.target,g=nm=>$(`#cf [data-name="${nm}"] .opt.on`)?.dataset.v;
  const study={};SUBJ.forEach(s=>study[s.k]=+(g('h_'+s.k)||0));
  const meetings=mt.map((m,i)=>({title:m.title,attended:!!f['m_'+i]?.checked}));(f.otherMeet.value||'').split(',').map(s=>s.trim()).filter(Boolean).forEach(t=>meetings.push({title:t,attended:true,other:true}));
  const rec={study,aiNote:f.aiNote.value.trim(),words:f.words.value.trim(),gymMin:+(g('gym')||0),meetings,opportunity:f.opportunity.value.trim(),win:f.win.value.trim(),blocker:f.blocker.value.trim(),score:+(g('score')||0),notes:f.notes.value.trim(),savedAt:new Date().toISOString(),dealId:c.dealId||null};
  if(rec.opportunity&&f.addDeal.checked&&!c.dealId){const id=uid();rec.dealId=id;U.deals.push({id,name:rec.opportunity.split(/[.\n]/)[0].slice(0,60),with:'',desc:rec.opportunity,status:'Idea',next:'',due:'',value:'',created:rec.savedAt,updated:rec.savedAt,from:'checkin'})}
  U.checkins[date]=rec;queueSave();closeSheet();rerender();const e2=entries().find(x=>x.date===date);toast(`Saved · +${e2?dayXP(e2):0} XP`)};
}
function wireOpts(){$$('#sheet .opts').forEach(g=>{if(g.dataset.name==='date')return;g.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{g.querySelectorAll('.opt').forEach(x=>x.classList.remove('on'));b.classList.add('on')})})}
function openTodo(id){const t=(U.todos||[]).find(x=>x.id===id)||{cat:'Personal'};
 sheet(head(id?'Edit to-do':'New to-do','list','bg-p')+`<form id="tf">
  <div class="fld"><label>Task</label><input class="inp" name="text" value="${esc(t.text||'')}" required placeholder="e.g. Call Ali about the website project"></div>
  <div class="fld"><label>Category</label>${optBtns('cat',CATS,t.cat||'Personal')}</div>
  <div class="two"><div class="fld"><label>Due date</label><input class="inp" type="date" name="due" value="${esc(t.due||'')}"></div><div class="fld"><label>Note</label><input class="inp" name="note" value="${esc(t.note||'')}"></div></div>
  <div class="btnrow">${id?`<button type="button" class="btn2 del" data-deltodo="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">${id?'Save':'Add task'}</button></div></form>`);
 wireOpts();$('#tf').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString();const rec={text:f.text.value.trim(),cat:$('#tf [data-name="cat"] .opt.on')?.dataset.v||'Personal',due:f.due.value,note:f.note.value.trim(),updated:now};
  if(!rec.text)return;if(id)Object.assign(t,rec);else U.todos.push({id:uid(),done:false,...rec});queueSave();closeSheet();rerender();toast(id?'Saved':'Task added')}}
function openDeal(id){const d=(U.deals||[]).find(x=>x.id===id)||{status:'Idea'};
 sheet(head(id?'Edit business':'New business','deal','bg-g')+`<form id="df">
  <div class="fld"><label>Name</label><input class="inp" name="name" value="${esc(d.name||'')}" required placeholder="e.g. Website redesign for Al Noor Trading"></div>
  <div class="fld"><label>With whom</label><input class="inp" name="with" value="${esc(d.with||'')}" placeholder="Person / company"></div>
  <div class="fld"><label>Explain the business</label><textarea class="inp" name="desc" style="min-height:110px" placeholder="What is it, what do they need, what's your role, any numbers…">${esc(d.desc||'')}</textarea></div>
  <div class="fld"><label>Status</label>${optBtns('status',STATUS,d.status||'Idea')}</div>
  <div class="fld"><label>Next step</label><input class="inp" name="next" value="${esc(d.next||'')}" placeholder="e.g. Send proposal"></div>
  <div class="two"><div class="fld"><label>Follow-up date</label><input class="inp" type="date" name="due" value="${esc(d.due||'')}"></div><div class="fld"><label>Value (optional)</label><input class="inp" name="value" value="${esc(d.value||'')}" placeholder="AED 20,000"></div></div>
  <div class="btnrow">${id?`<button type="button" class="btn2 del" data-deldeal="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">${id?'Save':'Add business'}</button></div></form>`);
 wireOpts();$('#df').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString();
  const rec={name:f.name.value.trim(),with:f.with.value.trim(),desc:f.desc.value.trim(),status:$('#df [data-name="status"] .opt.on')?.dataset.v||'Idea',next:f.next.value.trim(),due:f.due.value,value:f.value.value.trim(),updated:now};
  if(!rec.name)return;if(id)Object.assign(d,rec);else U.deals.push({id:uid(),created:now,...rec});queueSave();closeSheet();location.hash='business';rerender();toast(id?'Saved':'Business added · +25 XP')}}
function openEvent(){const n=nowD();
 sheet(head('New event','cal','bg-c')+`<form id="ef">
  <div class="fld"><label>Title</label><input class="inp" name="title" required placeholder="e.g. Coffee with Ahmed"></div>
  <div class="two"><div class="fld"><label>Date</label><input class="inp" type="date" name="date" value="${n.date}" required></div><div class="fld"><label>Time</label><input class="inp" type="time" name="time" value="18:00" required></div></div>
  <div class="two"><div class="fld"><label>Length</label><select class="inp" name="dur"><option value="30">30 min</option><option value="60" selected>1 hour</option><option value="90">1.5 hours</option><option value="120">2 hours</option></select></div><div class="fld"><label>Where</label><input class="inp" name="where" placeholder="Café / office"></div></div>
  <div class="fld"><label>Notes</label><textarea class="inp" name="notes"></textarea></div>
  <div class="xs faint" style="margin-bottom:12px">Claude adds this to your Google Calendar at the next refresh (within about 3 hours) with a reminder.</div>
  <div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="submit" class="btn2 pri">Add event</button></div></form>`);
 $('#ef').onsubmit=e=>{e.preventDefault();const f=e.target,now=new Date().toISOString();U.cal_requests.push({id:uid(),title:f.title.value.trim(),date:f.date.value,time:f.time.value,duration:+f.dur.value,where:f.where.value.trim(),notes:f.notes.value.trim(),updated:now});queueSave();closeSheet();location.hash='calendar';rerender();toast('Event queued for Google Calendar')}}
function openSettings(){sheet(head('Settings','gear','bg-v')+`
 <div class="fld"><label>Saving</label><div class="row" style="border:0"><div class="ico ${TOKEN?'bg-g':'bg-a'}">${ic(TOKEN?'check':'key')}</div><div class="tx"><b>${TOKEN?'Connected — your changes sync to all your devices and Claude':'Not connected — changes stay on this device'}</b><div>${TOKEN?'Encrypted with your password before upload.':'Needs a one-time GitHub key (2 minutes).'}</div></div></div></div>
 ${TOKEN?'':`<div class="fld"><label>Connect saving</label><ol class="sm muted" style="padding-left:18px;line-height:1.7;margin-bottom:10px">
  <li>Open <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener" style="color:var(--violet);font-weight:700">GitHub → new fine-grained token</a></li>
  <li>Name: <b>HQ app</b> · Expiration: 1 year</li><li>Repository access: <b>Only select repositories → hq</b></li><li>Permissions → Repository → <b>Contents: Read and write</b></li><li>Generate, copy, paste below</li></ol>
  <input class="inp" id="tokin" placeholder="github_pat_…" autocomplete="off"><div class="btnrow"><button class="btn2 pri" data-act="savetok">Connect</button></div></div>`}
 <button class="cin" data-act="places" style="margin-top:6px"><div class="qi bg-c">${ic('pin')}</div><div><b>My places & location</b><small>Home, gym, office — automatic gym logging</small></div><span class="go">${ic('chev')}</span></button>
 <button class="cin" data-act="idea" style="margin-top:6px"><div class="qi bg-a">${ic('bulb')}</div><div><b>Improve this app</b><small>Ideas, what’s new, and what Claude changed</small></div><span class="go">${ic('chev')}</span></button>
 <div class="btnrow" style="margin-top:14px">${TOKEN?'<button class="btn2" data-act="forget">Disconnect this device</button>':''}<button class="btn2" data-act="lock">${ic('lock')} Lock</button></div>`)}
async function saveToken(){const t=($('#tokin')?.value||'').trim();if(!t)return;TOKEN=t;
 try{const r=await fetch('https://api.github.com/repos/'+REPO,{headers:{Authorization:'Bearer '+t}});const j=await r.json();if(!r.ok||!j.permissions?.push)throw new Error('This key cannot write to the hq repo');
  let sha=null;try{const g=await fetch(API+'key.enc?ref=main',{headers:{Authorization:'Bearer '+t}});if(g.ok)sha=(await g.json()).sha}catch(e){}
  await ghPut('key.enc',await enc({token:t}),sha,'Connect app');ls.set('hq.tok',t);toast('Connected ✓');closeSheet();await doSave();rerender()}
 catch(e){TOKEN=null;toast(e.message||'Could not connect')}}

/* ================= events ================= */
document.addEventListener('click',e=>{const lk=e.target.closest('a[href]');if(lk&&!lk.dataset.act&&lk.closest('[data-editproj]'))return;const a=e.target.closest('[data-act],[data-tog],[data-deltodo],[data-deldeal],[data-editdeal],[data-edit-todo],[data-tf],[data-f],[data-rt],[data-seen],[data-result],[data-editmeet],[data-delmeet],[data-fudone],[data-saveplace],[data-delplace],[data-editproj],[data-delproj],[data-go],[data-person],[data-editperson],[data-delperson],[data-meetwith],[data-pipe],[data-delpipe],[data-rec],[data-recsave],[data-recpaid],[data-cost],[data-delcost],[data-txn],[data-deltxn],[data-pf]');if(!a)return;
 const d=a.dataset;
 if(d.tog){toggleTodo(d.tog);return}
 const now=new Date().toISOString();
 if(d.seen){U.seen=U.seen||{};U.seen[d.seen]={updated:now};queueSave();rerender();return}
 if(d.result){openResult(d.result);return}
 if(d.saveplace){savePlaceHere(d.saveplace);return}
 if(d.delplace){const p=(U.places||[]).find(x=>x.id===d.delplace);if(p){p.deleted=true;p.updated=now;queueSave();openPlaces();rerender()}return}
 if(d.editproj){openProject(d.editproj);return}
 if(d.go){closeSheet();location.hash=d.go;return}
 if(d.pf){pfilter=d.pf;renderPeople();return}
 if(d.person){openPerson(d.person);return}
 if(d.editperson){openPersonEdit(d.editperson);return}
 if(d.delperson){U.people=U.people||[];const ex=U.people.find(x=>x.id===d.delperson);if(ex)Object.assign(ex,{deleted:true,updated:now});else U.people.push({id:d.delperson,deleted:true,updated:now});queueSave();closeSheet();rerender();toast('Contact removed');return}
 if(d.meetwith){const p=personById(d.meetwith);closeSheet();openMeeting(null,{person:p?.name||'',personId:d.meetwith});return}
 if(d.pipe){openPipe(d.pipe);return}
 if(d.delpipe){const x=pipeline().find(z=>z.id===d.delpipe);if(x&&x.src==='claude')ovSet(d.delpipe,{deleted:true,updated:now});else{const ex=(U.deals||[]).find(z=>z.id===d.delpipe);if(ex)Object.assign(ex,{deleted:true,updated:now})}queueSave();closeSheet();rerender();toast('Deal removed');return}
 if(d.rec){openRec(d.rec);return}
 if(d.recsave){ovSet(d.recsave,{prob:+($('#sheet [data-name="prob"] .opt.on')?.dataset.v||25),updated:now});queueSave();closeSheet();rerender();toast('Saved');return}
 if(d.recpaid){const r=moneyCalc().rec.find(x=>x.id===d.recpaid);ovSet(d.recpaid,{done:true,updated:now});if(r){U.txns=U.txns||[];U.txns.push({id:uid(),type:'in',amount:+r.yours||0,label:r.label,date:nowD().date,updated:now})}queueSave();closeSheet();rerender();toast('Marked paid · added to income');return}
 if(d.cost){openCost(d.cost);return}
 if(d.delcost){U.costs=U.costs||[];const ex=U.costs.find(x=>x.id===d.delcost);if(ex)Object.assign(ex,{deleted:true,updated:now});else U.costs.push({id:d.delcost,deleted:true,updated:now});queueSave();closeSheet();rerender();return}
 if(d.txn){openTxn(null,d.txn);return}
 if(d.deltxn){const ex=(U.txns||[]).find(x=>x.id===d.deltxn);if(ex)Object.assign(ex,{deleted:true,updated:now});queueSave();closeSheet();rerender();return}
 if(d.delproj){U.projects=U.projects||[];const ex=U.projects.find(x=>x.id===d.delproj);if(ex)Object.assign(ex,{deleted:true,updated:now});else U.projects.push({id:d.delproj,deleted:true,updated:now});queueSave();closeSheet();rerender();toast('Project removed');return}
 if(d.editmeet){openMeeting(d.editmeet);return}
 if(d.delmeet){upsertMeet(d.delmeet,{deleted:true,status:'cancelled',updated:now});queueSave();closeSheet();rerender();toast('Meeting removed');return}
 if(d.fudone){upsertMeet(d.fudone,{followDone:true,updated:now});queueSave();rerender();toast('Follow-up done ✓');return}
 if(d.deltodo){delTodo(d.deltodo);closeSheet();return}
 if(d.deldeal){const x=U.deals.find(z=>z.id===d.deldeal);if(x){x.deleted=true;x.updated=new Date().toISOString();queueSave();closeSheet();rerender();toast('Deleted')}return}
 if(d.editdeal){openPipe(d.editdeal);return}
 if(d.editTodo!==undefined){if(d.editTodo)openTodo(d.editTodo);return}
 if(d.tf){tfilter=d.tf;rerender();return}
 if(d.f){filter=d.f;renderSocial();draw('social');return}
 if(d.rt){showRoutine[d.rt]=!showRoutine[d.rt];renderCalendar();return}
 switch(d.act){case 'close':closeSheet();break;case 'checkin':openCheckin();break;case 'newtask':openTodo();break;case 'deal':openPipe();break;case 'event':openEvent();break;case 'meet':openMeeting();break;case 'mparse':fillParsed();break;case 'idea':openIdea();break;case 'talk':openTalk();break;case 'places':openPlaces();break;case 'project':openProject();break;case 'newperson':openPersonEdit();break;case 'newpipe':openPipe();break;case 'setcash':openCash();break;case 'newcost':openCost();break;case 'txnin':openTxn('in');break;case 'txnout':openTxn('out');break;case 'more':openMore();break;case 'saveplace':savePlaceHere($('#plname')?.value);break;case 'geocheck':checkPlace(true);break;case 'geooff':ls.del('hq.geo');closeSheet();toast('Location checks off on this device');break;case 'tkmeet':talkAs('meet');break;case 'tktodo':talkAs('todo');break;
  case 'settings':openSettings();break;case 'savetok':saveToken();break;case 'forget':ls.del('hq.tok');TOKEN=null;closeSheet();rerender();setSync('local');toast('Disconnected on this device');break;
  case 'lock':ls.del(KEY);location.hash='';location.reload();break;case 'qadd':quickAdd();break;case 'tadd':addTodoFrom('#tadd');break;case 'tasks':location.hash='tasks';break}
});

/* ================= charts ================= */
function killCharts(){charts.forEach(c=>c.destroy());charts=[]}
function mk(id,cfg){const el=document.getElementById(id);if(!el||!window.Chart)return;Chart.defaults.font.family='"Plus Jakarta Sans", sans-serif';Chart.defaults.color=css('--muted');Chart.defaults.font.size=11;
 cfg.options=Object.assign({responsive:true,maintainAspectRatio:false,animation:{duration:600},plugins:{legend:{display:false},tooltip:{backgroundColor:css('--card2'),titleColor:css('--text'),bodyColor:css('--text'),borderColor:css('--line2'),borderWidth:1,padding:10,cornerRadius:10}}},cfg.options||{});charts.push(new Chart(el,cfg))}
function grad(ctx,a,b){const g=ctx.createLinearGradient(0,0,0,220);g.addColorStop(0,a);g.addColorStop(1,b);return g}
function draw(pg){killCharts();
 if(pg==='social'){lazyThumbs();const S=(D.social||[]).filter(s=>!s.limited),lab=S.map(s=>AB[s.platform]+' · '+s.name);
  mk('c-fol',{type:'doughnut',data:{labels:lab,datasets:[{data:S.map(s=>s.followers||0),backgroundColor:S.map((_,i)=>ACOL[i%8]),borderColor:css('--card'),borderWidth:3,hoverOffset:6}]},options:{cutout:'68%'}});
  const lg=$('#lg-fol');if(lg)lg.innerHTML=S.map((s,i)=>`<span><i style="background:${ACOL[i%8]}"></i>${esc(lab[i])} · ${fmt(s.followers)}</span>`).join('');
  const V=S.map(s=>(s.recent||[]).reduce((a,p)=>a+(s.platform==='facebook'?(p.likes||0):(p.views||0)),0));
  const vb=$('#c-views');if(vb)vb.parentElement.style.height=(S.length*30+40)+'px';
  mk('c-views',{type:'bar',data:{labels:S.map(s=>AB[s.platform]+' '+(s.name.length>10?s.name.slice(0,9)+'…':s.name)),datasets:[{data:V.map(v=>Math.max(v,1)),backgroundColor:S.map(s=>PL[s.platform]?.c||'#8b5cf6'),borderRadius:8,maxBarThickness:34}]},options:{indexAxis:'y',scales:{x:{type:'logarithmic',grid:{color:css('--line')},ticks:{maxRotation:0,autoSkip:false,callback:v=>[10,100,1000,10000].includes(v)?fmt(v):''}},y:{grid:{display:false}}}}});
 }
 if(pg==='money'){const m=moneyCalc(),L=m.open.slice().sort((a,b)=>b.value-a.value);const el=$('#c-pipe');if(el)el.parentElement.style.height=(L.length*38+60)+'px';
  mk('c-pipe',{type:'bar',data:{labels:L.map(d=>d.name.length>18?d.name.slice(0,17)+'…':d.name),datasets:[{label:'Expected',data:L.map(d=>Math.max(1,Math.round(d.value*d.prob/100))),backgroundColor:'#10b981',borderRadius:6,maxBarThickness:16},{label:'If it closes',data:L.map(d=>Math.max(1,d.value)),backgroundColor:'rgba(16,185,129,.28)',borderRadius:6,maxBarThickness:16}]},options:{indexAxis:'y',plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,boxHeight:10,usePointStyle:true}},tooltip:{callbacks:{label:c=>c.dataset.label+': '+aed(c.raw)}}},scales:{x:{type:'logarithmic',min:1000,grid:{color:css('--line')},ticks:{autoSkip:false,maxRotation:0,callback:v=>[1e3,1e4,1e5,1e6].includes(v)?aed(v).replace('AED ',''):''}},y:{grid:{display:false}}}}})}
 if(pg==='growth'){const G=game(),n=nowD(),month=n.date.slice(0,7),ML=G.L.filter(e=>e.date.startsWith(month)),st=ML.length?(ML[0].date>month+'-01'?ML[0].date:month+'-01'):n.date,el=Math.max(1,daysBetween(st,n.date)+1);
  const L=G.L.slice(-14);
  const pc=f=>Math.min(100,Math.round(ML.filter(f).length/el*100));
  const vals=[Math.min(100,Math.round(ML.reduce((a,e)=>a+e.hours.ai,0)/(1.5*el)*100)),Math.min(100,Math.round(ML.reduce((a,e)=>a+e.hours.arabic,0)/(0.5*el)*100)),pc(e=>e.gym),Math.min(100,Math.round(ML.reduce((a,e)=>a+e.met+e.opps,0)/Math.max(1,el/2)*100)),pc(()=>true)];
  mk('c-radar',{type:'radar',data:{labels:['AI','Arabic','Fitness','Business','Consistency'],datasets:[{data:vals,backgroundColor:'rgba(139,92,246,.25)',borderColor:'#8b5cf6',pointBackgroundColor:['#8b5cf6','#fbbf24','#34d399','#fb923c','#22d3ee'],pointRadius:5,borderWidth:2}]},options:{scales:{r:{min:0,max:100,ticks:{display:false,stepSize:25},grid:{color:css('--line')},angleLines:{color:css('--line')},pointLabels:{font:{size:12,weight:'700'},color:css('--text')}}}}});
  mk('c-hours',{type:'bar',data:{labels:L.map(e=>fd(e.date)),datasets:SUBJ.map(s=>({label:s.n,data:L.map(e=>e.hours[s.k]||0),backgroundColor:s.c,borderRadius:4,maxBarThickness:26}))},options:{plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,boxHeight:10,usePointStyle:true}}},scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:css('--line')},beginAtZero:true,ticks:{callback:v=>v+'h'}}}}});
  const c=$('#c-xp');if(c)mk('c-xp',{type:'bar',data:{labels:L.map(e=>fd(e.date)),datasets:[{data:L.map(dayXP),backgroundColor:grad(c.getContext('2d'),'#fbbf24','#f472b6'),borderRadius:6,maxBarThickness:22}]},options:{scales:{x:{grid:{display:false}},y:{grid:{color:css('--line')},beginAtZero:true}}}});
  const c2=$('#c-score');if(c2)mk('c-score',{type:'line',data:{labels:L.map(e=>fd(e.date)),datasets:[{data:L.map(e=>e.score||null),borderColor:'#f472b6',backgroundColor:grad(c2.getContext('2d'),'rgba(244,114,182,.35)','rgba(244,114,182,0)'),fill:true,tension:.35,pointRadius:3,pointBackgroundColor:'#f472b6'}]},options:{scales:{y:{min:0,max:10,grid:{color:css('--line')}},x:{grid:{display:false},ticks:{maxTicksLimit:6}}}}});
 }
}

/* ================= v8: Me · habits · skills · settings · live ================= */
const HAB=[
 {k:'gym',n:'Gym',i:'gym',bg:'bg-g'},
 {k:'swim',n:'Swim',i:'bolt',bg:'bg-c'},
 {k:'sleep',n:'Slept 7h+',i:'moon',bg:'bg-v'},
 {k:'food',n:'Healthy food',i:'heart',bg:'bg-p'},
 {k:'water',n:'Water 2L+',i:'spark',bg:'bg-b'},
 {k:'arabic',n:'Arabic 30 min',i:'ar',bg:'bg-a'},
 {k:'claude',n:'Claude AI 1h',i:'ai',bg:'bg-v'},
 {k:'post',n:'Posted content',i:'play',bg:'bg-o'},
 {k:'family',n:'Family time',i:'users',bg:'bg-g'}];
const MOOD=['','Low','Meh','OK','Good','Great'];
function habDay(d){const h={...((U?.habits||{})[d]||{})},c=(U?.checkins||{})[d];
 if(h.gym==null&&(gymMin(d)>=20||(c&&c.gymMin>0)))h.gym=1;
 if(h.claude==null&&c&&+(c.study?.ai||0)>=1)h.claude=1;
 if(h.arabic==null&&c&&+(c.study?.arabic||0)>=0.5)h.arabic=1;
 return h}
function habCount(d){const h=habDay(d);return HAB.filter(x=>h[x.k]).length}
function habStreak(k){let s=0,d=nowD().date;if(!habDay(d)[k])d=addDays(d,-1);while(habDay(d)[k]&&s<999){s++;d=addDays(d,-1)}return s}
function habXP(){return Object.keys(U?.habits||{}).reduce((a,d)=>a+habCount(d)*5,0)}
function healthyWeek(){let s=0,d=addDays(nowD().date,-1);while(habCount(d)>=5&&s<99){s++;d=addDays(d,-1)}return s>=7}
function setHab(k,v,d){d=d||nowD().date;U.habits=U.habits||{};const h={...(U.habits[d]||{})};h[k]=v;h.savedAt=new Date().toISOString();U.habits[d]=h;queueSave()}
function habWeek(){const n=nowD().date,days=Array.from({length:7},(_,i)=>addDays(n,i-6));
 const per=HAB.map(x=>({...x,c:days.filter(d=>habDay(d)[x.k]).length}));
 const tot=per.reduce((a,x)=>a+x.c,0),pct=Math.round(tot/(7*HAB.length)*100);
 const moods=days.map(d=>+(habDay(d).mood||0)).filter(Boolean),mood=moods.length?(moods.reduce((a,b)=>a+b,0)/moods.length):0;
 const srt=per.slice().sort((a,b)=>b.c-a.c);return{days,per,pct,best:srt[0],weak:srt[srt.length-1],mood}}
function habChips(d){const h=habDay(d);return `<div class="habs">${HAB.map(x=>`<button type="button" class="hab ${h[x.k]?'on':''}" data-x="hab" data-k="${x.k}"><span class="qi ${x.bg}">${ic(h[x.k]?'check':x.i)}</span><b>${x.n}</b>${habStreak(x.k)>1?`<small>${ic('flame')}${habStreak(x.k)}</small>`:''}</button>`).join('')}</div>`}
function moodRow(d){const h=habDay(d);return `<div class="moodrow"><span class="xs faint">Mood</span>${[1,2,3,4,5].map(v=>`<button type="button" class="opt ${+h.mood===v?'on':''}" data-x="mood" data-v="${v}">${MOOD[v]}</button>`).join('')}</div>
 <div class="moodrow"><span class="xs faint">Energy</span>${[1,2,3,4,5].map(v=>`<button type="button" class="opt ${+h.energy===v?'on':''}" data-x="energy" data-v="${v}">${v}</button>`).join('')}</div>`}
function habCard(){const n=nowD().date,c=habCount(n);
 return card('Daily habits','heart','bg-g',`<div class="xs faint" style="margin:-4px 0 10px">Tap what you did today · +5 XP each · ${c}/${HAB.length} done</div>${habChips(n)}${moodRow(n)}`,`<a href="#me" class="pill g">${ic('chart')}Report</a>`,'mb')}

/* social plan */
const WD=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
function todayWD(){return WD[new Date(nowD().date+'T12:00:00Z').getUTCDay()]}
function socialToday(){const SP=D.social_plan||{};return (SP.week||{})[todayWD()]||[]}
function planRows(items,d){const h=habDay(d||nowD().date);return items.map((x,i)=>`<div class="row"><div class="ico ${x.acct==='X Species'?'bg-c':'bg-a'}">${ic(x.icon||'play')}</div><div class="tx"><b>${esc(x.time?x.time+' · ':'')}${esc(x.what)}</b><div>${esc(x.acct)}${x.where?' · '+esc(x.where):''}</div></div></div>`).join('')+(items.length?`<button class="addag" data-x="posted">${ic(h.post?'check':'plus')}${h.post?'Posted today ✓':'Mark today’s post done (+5 XP)'}</button>`:'')}
function socialTodayCard(){const it=socialToday();if(!it.length)return'';return card('Post today','play','bg-o',planRows(it),`<a href="#social" class="pill w">Plan</a>`,'mb')}
function planCard(){const SP=D.social_plan;if(!SP)return'';const td=todayWD();
 return `<div class="card mb"><div class="ch"><div class="ic bg-grad">${ic('rocket')}</div><h3>Growth plan</h3><span class="aside">${esc(SP.focus||'')}</span></div>
 ${SP.goal?`<div class="sm" style="margin-bottom:10px">${esc(SP.goal)}</div>`:''}
 <div class="xs faint" style="font-weight:800;letter-spacing:.07em;text-transform:uppercase;margin:6px 0 4px">Today · ${td}</div>${planRows(socialToday())||empty('Rest day — reply to comments','check')}
 <details class="wk"><summary>Whole week</summary>${WD.slice(1).concat('Sun').map(d=>`<div class="wkd ${d===td?'on':''}"><b>${d}</b>${((SP.week||{})[d]||[]).map(x=>`<div class="xs">${esc(x.time?x.time+' ':'')}${esc(x.acct)}: ${esc(x.what)}</div>`).join('')||'<div class="xs faint">Rest</div>'}</div>`).join('')}</details>
 ${(SP.rules||[]).length?`<div class="note" style="margin-top:10px"><b>${ic('spark')}Rules that grow the account</b>${SP.rules.map(r=>'• '+esc(r)).join('<br>')}</div>`:''}</div>`}

/* Me page */
function renderMe(){const el=$('#p-me');if(!el||!D)return;const M=D.me||{},n=nowD().date,W=habWeek();
 const grid=`<div class="heat hgrid">${HAB.map(x=>`<div class="lb">${ic(x.i)}${x.n}</div><div class="cells">${Array.from({length:14},(_,j)=>{const d=addDays(n,j-13),on=habDay(d)[x.k];return `<div class="cell ${d===n?'today':''}" title="${d}" ${on?'style="background:var(--green);border-color:var(--green)"':''}></div>`}).join('')}</div>`).join('')}</div>`;
 el.innerHTML=`<div class="pt">Me <span>health · habits · skills</span></div>
 <div class="g3">
  <div class="card s2"><div class="ch"><div class="ic bg-g">${ic('heart')}</div><h3>Today</h3><span class="aside">${habCount(n)}/${HAB.length} habits</span></div>${habChips(n)}${moodRow(n)}
   <div class="moodrow"><span class="xs faint">Sleep</span>${[5,6,7,8,9].map(v=>`<button type="button" class="opt ${+habDay(n).sleepH===v?'on':''}" data-x="sleepH" data-v="${v}">${v}h${v===9?'+':''}</button>`).join('')}</div></div>
  <div class="card"><div class="ch"><div class="ic bg-grad">${ic('chart')}</div><h3>This week</h3></div>
   <div class="wkpct"><div class="ringbig">${ring(W.pct/100,96,8,'url(#warm)')}<div class="c"><b>${W.pct}%</b></div></div>
   <div class="sm"><div>Best: <b>${esc(W.best.n)}</b> ${W.best.c}/7</div><div>Needs love: <b>${esc(W.weak.n)}</b> ${W.weak.c}/7</div>${W.mood?`<div>Avg mood: <b>${MOOD[Math.round(W.mood)]}</b></div>`:''}</div></div>
   <div class="xs faint" style="margin-top:8px">Claude reads this and sends your weekly report on Sunday.</div></div>
  ${card('Last 14 days','cal','bg-v',grid,'','s3')}
  ${card('Health','shield','bg-g',`<div class="sm" style="margin-bottom:8px">${esc(M.health?.baseline||'')}</div>${(M.health?.habits||[]).map(h=>`<div class="row"><div class="ico bg-g">${ic('check')}</div><div class="tx"><b>${esc(h)}</b></div></div>`).join('')}`)}
  ${card('Languages','msg','bg-a',(M.languages||[]).map(l=>`<div class="lang"><b>${esc(l.n)}</b><span class="pill ${l.lvl==='Learning'?'w':l.lvl==='Basic'?'b':'g'}">${esc(l.lvl)}</span><div class="bar"><i style="width:${l.p||50}%"></i></div></div>`).join(''))}
  ${card('Skills','star','bg-v',(M.skills||[]).map(s=>`<div class="row"><div class="ico bg-v">${ic(s.i||'star')}</div><div class="tx"><b>${esc(s.n)}</b>${s.d?`<div>${esc(s.d)}</div>`:''}</div></div>`).join(''))}
  ${card('Made money online','money','bg-o',(M.online||[]).map(s=>`<div class="row"><div class="ico bg-o">${ic(s.i||'bolt')}</div><div class="tx"><b>${esc(s.n)}</b>${s.d?`<div>${esc(s.d)}</div>`:''}</div></div>`).join(''),'','s2')}
  ${card('Background','book','bg-c',(M.background||[]).map(s=>`<div class="row"><div class="ico bg-c">${ic('check')}</div><div class="tx"><b>${esc(s)}</b></div></div>`).join(''))}
 </div>`}

/* Talk: instant actions */
function quickHabits(t){const s=t.toLowerCase(),hit=[];const on=(k,re)=>{if(re.test(s)&&!/\b(no|not|didn'?t|skip)\b/.test(s)){setHab(k,1);hit.push(HAB.find(x=>x.k===k).n)}};
 on('gym',/\bgym|workout|trained\b/);on('swim',/swim|pool/);on('food',/healthy (food|meal|eat)/);on('water',/water/);on('family',/family|kids|daughters/);on('claude',/claude|learned ai|studied ai/);on('arabic',/arabic/);
 const sl=s.match(/slept (\d+(\.\d)?)/);if(sl){setHab('sleepH',Math.round(+sl[1]));if(+sl[1]>=7){setHab('sleep',1);hit.push('Sleep')}}
 if(hit.length)rerender();return hit.length?'Logged '+hit.join(', ')+' ✓ · ':''}
function askNow(){const t=($('#tktext')?.value||'').trim();const ctx='(I am Borna, using my Borna HQ app.) ';window.open('https://claude.ai/new?q='+encodeURIComponent(ctx+(t||'Help me plan my day')),'_blank','noopener')}

/* settings */
function prefs(){return{morning:1,meetings:1,followups:1,habits:1,social:1,viral:1,quiet:1,start:'today',...((U?.kv||{}).prefs||{})}}
function setPref(k,v){U.kv=U.kv||{};const p={...prefs(),[k]:v,updated:new Date().toISOString()};U.kv.prefs=p;queueSave()}
function settingsExtra(){const p=prefs(),tg=(k,t,s)=>`<label class="tgl"><div><b>${t}</b><small>${s}</small></div><input type="checkbox" data-x="pref" data-k="${k}" ${p[k]?'checked':''}><i></i></label>`;
 return `<div class="fld" style="margin-top:14px"><label>Notifications</label>
  <div class="sm muted" style="margin-bottom:8px">Alerts come to the <b>ntfy</b> app on your phone. Nothing private is written in them.</div>
  ${tg('morning','Morning briefing','09:15 · your day, meetings, follow-ups')}
  ${tg('meetings','Meeting reminders','2 hours and 30 minutes before')}
  ${tg('followups','Deal follow-ups','When a deal or person needs a reply')}
  ${tg('habits','Evening habit check','21:30 if habits are not logged')}
  ${tg('social','Post reminder','19:00 · what to post today')}
  ${tg('viral','Viral post alerts','When a post takes off')}
  ${tg('quiet','Quiet hours','No alerts 23:00 – 07:00')}
  <div class="btnrow"><button type="button" class="btn2" data-x="testnote">${ic('bell')} Send a test now</button>${D.notify?.topic?`<a class="btn2" href="https://ntfy.sh/${esc(D.notify.topic)}" target="_blank" rel="noopener">${ic('share')} Open in ntfy</a>`:''}</div></div>
 <div class="fld"><label>Start page</label><div class="opts">${[['today','Today'],['me','Me'],['business','Business'],['money','Money'],['social','Social']].map(([k,l])=>`<button type="button" class="opt ${p.start===k?'on':''}" data-x="start" data-v="${k}">${l}</button>`).join('')}</div></div>
 <div class="fld"><label>Voice language</label><div class="opts">${[['en-US','English'],['fa-IR','فارسی'],['ar-AE','عربي'],['tr-TR','Türkçe']].map(([k,l])=>`<button type="button" class="opt ${(ls.get('hq.lang')||'en-US')===k?'on':''}" data-x="vlang" data-v="${k}">${l}</button>`).join('')}</div></div>
 <div class="fld"><label>Data</label><div class="btnrow" style="margin-top:0"><button type="button" class="btn2" data-x="pull">${ic('refresh')} Get latest now</button><button type="button" class="btn2" data-x="backup">${ic('down')} Download backup</button></div>
  <div class="xs faint" style="margin-top:6px">The app checks for Claude’s updates every 5 minutes while it’s open. Version 8 · ${esc(ago(D.updated))} last update.</div></div>`}

/* live updates */
let lastPull=Date.now(),pulling=false;
async function softPull(force){if(!D||pulling)return;if(!force&&$('#sheet').classList.contains('on'))return;pulling=true;
 try{const j=await pagesJSON('data.enc');if(j){const nd=await dec(j);if(nd.updated!==D.updated){D=nd;rerender();toast('New update from Claude ✓')}else if(force)toast('Already up to date')}lastPull=Date.now()}catch(e){if(force)toast('Could not check')}pulling=false}
setInterval(()=>{if(document.visibilityState==='visible')softPull()},300000);
document.addEventListener('visibilitychange',()=>{if(D&&document.visibilityState==='visible'&&Date.now()-lastPull>120000)softPull()});

/* wrappers */
const _renderToday=renderToday;renderToday=function(G){_renderToday(G);const el=$('#p-today'),g=el&&el.querySelector('.g3');if(!g)return;const x=document.createElement('div');x.className='v8top';x.innerHTML=habCard()+socialTodayCard();el.insertBefore(x,g)};
const _renderSocial=renderSocial;renderSocial=function(){_renderSocial();const el=$('#p-social'),pt=el&&el.querySelector('.pt');if(!pt)return;const x=document.createElement('div');x.innerHTML=planCard();pt.after(x)};
let startDone=false;
const _render=render;render=function(keep){if(!startDone){startDone=true;const st=prefs().start;if(!location.hash&&st&&st!=='today'&&PAGES.some(p=>p.id===st))history.replaceState(null,'','#'+st)}renderMe();_render(keep)};
const _openSettings=openSettings;openSettings=function(){_openSettings();const s=$('#sheet'),rows=s.querySelectorAll('.btnrow'),last=rows[rows.length-1];const x=document.createElement('div');x.innerHTML=settingsExtra();s.insertBefore(x,last)};
$('#settings').onclick=()=>openSettings();

document.addEventListener('click',e=>{const a=e.target.closest('[data-x]');if(!a)return;const d=a.dataset,n=nowD().date;
 if(d.x==='hab'){const on=!habDay(n)[d.k];setHab(d.k,on?1:0);rerender();if(on)toast(HAB.find(x=>x.k===d.k).n+' ✓ +5 XP');return}
 if(d.x==='mood'||d.x==='energy'||d.x==='sleepH'){setHab(d.x,+d.v);if(d.x==='sleepH')setHab('sleep',+d.v>=7?1:0);rerender();return}
 if(d.x==='posted'){setHab('post',1);rerender();toast('Posted ✓ +5 XP');return}
 if(d.x==='asknow'){askNow();return}
 if(d.x==='pref'){setPref(d.k,a.checked?1:0);toast('Saved');return}
 if(d.x==='start'){setPref('start',d.v);$$('#sheet [data-x="start"]').forEach(y=>y.classList.toggle('on',y===a));toast('Start page saved');return}
 if(d.x==='vlang'){ls.set('hq.lang',d.v);$$('#sheet [data-x="vlang"]').forEach(y=>y.classList.toggle('on',y===a));return}
 if(d.x==='pull'){softPull(true);return}
 if(d.x==='backup'){const b=new Blob([JSON.stringify(U,null,1)],{type:'application/json'}),u=URL.createObjectURL(b),l=document.createElement('a');l.href=u;l.download='borna-hq-backup-'+n+'.json';l.click();setTimeout(()=>URL.revokeObjectURL(u),2000);return}
 if(d.x==='testnote'){const t=D.notify?.topic;if(!t){toast('Notifications not set up yet');return}
  fetch('https://ntfy.sh/',{method:'POST',body:JSON.stringify({topic:t,title:'Borna HQ',message:'Test from your app — notifications work ✓',tags:['white_check_mark'],click:location.origin+location.pathname})}).then(r=>toast(r.ok?'Sent — check your phone':'Could not send')).catch(()=>toast('Could not send'));return}
});

window.addEventListener('load',()=>{if(D)draw(curPage())});
setInterval(()=>{if(D&&!$('#sheet').classList.contains('on')&&['today','calendar','business'].includes(curPage())){const y=scrollY;renderToday(game());renderCalendar();renderBusiness();window.scrollTo(0,y)}},60000);
const saved=ls.get(KEY);if(saved){$('#pw').value=saved;unlock(saved,true).catch(()=>{ls.del(KEY);$('#pw').value='';PW=null})}
setInterval(()=>{if(D&&document.visibilityState==='visible')checkPlace()},180000);document.addEventListener('visibilitychange',()=>{if(D&&document.visibilityState==='visible')checkPlace()});
})();

