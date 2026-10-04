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
  {n:'Healthy week',d:'7 days with 5+ habits',icn:'heart',bg:'bg-g',ok:healthyWeek()},{n:'Smoke-down',d:'7 days under your smoking limit',icn:'shield',bg:'bg-r',ok:smokeStats().streak>=7},
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
 sheet(head('Talk to the app','mic','bg-grad')+`<div class="sm muted" style="margin:-4px 0 12px">Say anything — a meeting, a task, a project idea, a change you want in this app, or a question. Habits (gym, swim, slept 8h…) are logged instantly. <b>Ask now</b> opens Claude for an instant answer; <b>Send</b> lets Claude act on it in your app (checked every 30 min). Messages to people come back as a ready WhatsApp button.</div>
  <div class="micwrap">${SR?`<button type="button" class="micbig" id="micbtn" aria-label="Start talking">${ic('mic')}</button><div class="xs faint" id="micst">Tap and speak</div><div class="opts" style="justify-content:center;margin-top:10px">${[['en-US','English'],['fa-IR','فارسی'],['ar-AE','عربي']].map(([l,n])=>`<button type="button" class="opt ${lang===l?'on':''}" data-lang="${l}">${n}</button>`).join('')}</div>`:`<div class="xs faint">Tip: tap the microphone key on your keyboard to dictate.</div>`}</div>
  <form id="tk"><div class="fld"><textarea class="inp" name="t" id="tktext" style="min-height:96px" placeholder="e.g. Tomorrow 4pm meeting with Ali at Business Bay about the website">${esc(pre||'')}</textarea></div>
  <div class="btnrow"><button type="button" class="btn2" data-act="tkmeet">${ic('users')} Meeting</button><button type="button" class="btn2" data-act="tktodo">${ic('list')} To-do</button><button type="button" class="btn2" data-x="asknow">${ic('msg')} Ask now</button><button type="submit" class="btn2 pri">${ic('spark')} Send</button></div></form>
  ${I.length?`<div class="xs faint" style="margin:16px 0 6px;font-weight:800;letter-spacing:.07em;text-transform:uppercase">Recent</div>${I.map(x=>{const r=st[x.id];return `<div class="row"><div class="ico ${r?'bg-g':'bg-a'}">${ic(r?'check':'clock')}</div><div class="tx"><b>${esc(x.text)}</b><div>${r?esc(r.reply||r.note||'Done')+(r&&r.wa&&safeWa(r.wa.url)?`<br><a class="pill g" href="${esc(safeWa(r.wa.url))}" target="_blank" rel="noopener" style="margin-top:6px;display:inline-flex">${ic('msg')}${esc(r.wa.label||'Send on WhatsApp')}</a>`:''):'Claude picks this up at '+nextCheck()+' — you’ll get a notification'}</div></div></div>`}).join('')}`:''}`);
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
 <div class="bizbar"><button class="bigadd alt2" data-act="project">${ic('plus')}New project</button><button class="bigadd alt3" data-act="talk">${ic('mic')}Talk to the app</button></div>
 <div class="stats" style="margin-bottom:14px">${PST.map(x=>stat(by(x).length,x,PIC[x])).join('')}</div>
 <div class="g3">${PST.filter(x=>by(x).length).map(x=>`<div class="card s3"><div class="ch"><div class="ic ${PBG[x]}">${ic(PIC[x])}</div><h3>${x}</h3><span class="aside">${by(x).length}</span></div><div class="projs">${by(x).map(p=>projCard(p,notes[p.id])).join('')}</div></div>`).join('')||`<div class="s3">${empty('Add your first project','folder')}</div>`}
  ${card('Where projects come from','share','bg-grad',`<div class="row"><div class="ico bg-grad">${ic('spark')}</div><div class="tx"><b>Claude</b><div>Claude keeps the projects from your Claude chats, memory and this assistant up to date here.</div></div></div>
   <div class="row"><div class="ico bg-g">${ic('msg')}</div><div class="tx"><b>ChatGPT</b><div>ChatGPT can't be connected directly. In ChatGPT ask: “List all my projects and ideas with status and next step”, copy the answer, and paste it into Talk to the app — Claude adds them here.</div></div></div>
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
const dueTag=due=>{if(!due)return '';const n=nowD().date;return due<n?' · <b class="due od">overdue</b>':due===n?' · <b class="due td">today</b>':' · '+fd(due)};
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
  ${d.next?`<div class="nx">${ic('chev')}<span>${esc(d.next)}${d.due?(d.due<=n?dueTag(d.due):` · <b>${fd(d.due)}</b>`):''}</span></div>`:''}</div>`}
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
 return card('Money & deals','money','bg-g',`<div class="mmini"><div><small>Expected</small><b>${aed(m.expected)}</b></div><div><small>Monthly need</small><b>${aed(m.monthlyCost)}</b></div><div><small>${m.runway!=null?'Runway':'Owed to you'}</small><b>${m.runway!=null?m.runway.toFixed(1)+' mo':aed(m.openRec.reduce((a,r)=>a+(+r.yours||0),0))}</b></div></div>`+m.open.slice().sort((a,b)=>(a.due||'9')<(b.due||'9')?-1:1).slice(0,3).map(d=>{const pc=(d.people||[]).map(personById).find(p=>p&&p.phone);return `<div class="row" data-pipe="${d.id}"><div class="ico bg-g">${ic('deal')}</div><div class="tx"><b>${esc(d.name)} · ${aed(d.value)}</b><div>${esc(d.next||d.stage)}${dueTag(d.due)}</div>${pc?`<div class="dqa"><a href="https://wa.me/${waNum(pc.phone)}" target="_blank" rel="noopener noreferrer" class="wa">${ic('msg')}${esc(short(pc.name))}</a><a href="tel:${digits(pc.phone)}">${ic('phone')}Call</a></div>`:''}</div></div>`}).join(''),`<a href="#money" class="xs" style="font-weight:800;color:var(--green)">Open →</a>`)}
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
function openMore(){sheet(head('More','list','bg-grad')+`<div class="actions">${PAGES.filter(p=>!MAIN.includes(p.id)).map(p=>`<button class="action" data-go="${p.id}"><span class="qi bg-v">${ic(p.i)}</span><b>${p.l}</b></button>`).join('')}<button class="action" data-act="talk"><span class="qi bg-grad">${ic('mic')}</span><b>Talk to the app</b></button><button class="action" data-act="settings"><span class="qi bg-c">${ic('gear')}</span><b>Settings</b></button></div>`)}
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
  ${card('Deals pipeline','deal','bg-g',pipeline().filter(d=>!['Won','Lost'].includes(d.stage)).map(d=>`<div class="row" data-pipe="${d.id}"><div class="ico bg-g">${ic('deal')}</div><div class="tx"><b>${esc(d.name)}</b><div>${esc(d.stage)} · ${aed(d.value)} · ${d.prob||0}%${d.next?' · '+esc(d.next):''}${d.due&&d.due<=nowD().date?dueTag(d.due):''}</div></div></div>`).join('')||empty('No open deals','deal'),`<a href="#money" class="xs" style="font-weight:800;color:var(--green)">Money →</a>`,'s3')}
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
 <button class="action" data-act="talk"><span class="qi bg-grad">${ic('mic')}</span><b>Talk to the app</b><small>Say it — Claude does it</small></button>
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
document.addEventListener('click',e=>{const lk=e.target.closest('a[href]');if(lk&&!lk.dataset.act&&lk.closest('[data-editproj],[data-pipe]'))return;const a=e.target.closest('[data-act],[data-tog],[data-deltodo],[data-deldeal],[data-editdeal],[data-edit-todo],[data-tf],[data-f],[data-rt],[data-seen],[data-result],[data-editmeet],[data-delmeet],[data-fudone],[data-saveplace],[data-delplace],[data-editproj],[data-delproj],[data-go],[data-person],[data-editperson],[data-delperson],[data-meetwith],[data-pipe],[data-delpipe],[data-rec],[data-recsave],[data-recpaid],[data-cost],[data-delcost],[data-txn],[data-deltxn],[data-pf]');if(!a)return;
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
function habDay(d){const h={...((D?.habit_log||{})[d]||{}),...((U?.habits||{})[d]||{})},c=(U?.checkins||{})[d];
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
 const sm=s.match(/(?:smoked|cigarettes?|cigs|sigar\S*)\D{0,8}(\d{1,2})|(\d{1,2})\s*(?:cigarettes?|cigs|sigar\S*)/);if(sm){const v=+(sm[1]||sm[2]);setHab('cigs',v);hit.push('Smoking '+v)}
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

/* ================= v9: smoking tracker · scrolling nav ================= */
function SP(){return{start:'2026-10-01',base:40,goal:10,end:'2026-12-31',price:1.25,...(D.smoke_plan||{})}}
function smokeLimit(d){const p=SP(),t=daysBetween(p.start,d||nowD().date),tot=Math.max(1,daysBetween(p.start,p.end));if(t<0)return p.base;return Math.max(p.goal,Math.ceil(p.base-(p.base-p.goal)*Math.min(1,t/tot)))}
function cigs(d){const v=habDay(d||nowD().date).cigs;return v==null?null:+v}
function smokeStats(){const p=SP(),n=nowD().date,days=[];let d=p.start;while(d<=n&&days.length<400){days.push(d);d=addDays(d,1)}
 const logged=days.filter(x=>cigs(x)!=null),avoided=logged.reduce((a,x)=>a+Math.max(0,p.base-cigs(x)),0);
 let streak=0;for(let i=days.length-1;i>=0;i--){const x=days[i];if(x===n&&cigs(x)==null)continue;if(cigs(x)!=null&&cigs(x)<=smokeLimit(x))streak++;else break}
 const wk=logged.filter(x=>x>=addDays(n,-6)),avg=wk.length?wk.reduce((a,x)=>a+cigs(x),0)/wk.length:null;
 const urges=days.reduce((a,x)=>a+(+habDay(x).urges||0),0);
 return{avoided,saved:Math.round(avoided*p.price),streak,avg,urges,week:Math.floor(daysBetween(p.start,n)/7)+1}}
const SMOKE_TIPS=['Delay your first cigarette — wait at least 30 minutes after waking, then push it later each week.','When a craving hits, use the 4 Ds: Delay 5 minutes, Deep breaths, Drink water, Do something else. Cravings pass in 3–5 minutes.','Make places smoke-free: no smoking in the car or inside the home.','Break the links: no cigarette with the first coffee or straight after meals — take a short walk instead.','Late work + smoking + little sleep = cough. Set a cut-off time for the last cigarette.','Nicotine gum, lozenges or patches can be used while cutting down — ask a pharmacist or doctor which strength fits ~40 a day.','The pool and the gym are your best craving killers — go when the urge is strongest.','Smoke only half of each cigarette this week.','Buy one pack at a time, never a carton. Leave the pack in another room.','If the cough lasts more than 2–3 weeks, or you see blood or feel chest pain or breathlessness, see a doctor.'];
function smokeTip(){const i=daysBetween('2026-01-01',nowD().date)%SMOKE_TIPS.length;return SMOKE_TIPS[(i+SMOKE_TIPS.length)%SMOKE_TIPS.length]}
function smokeCard(full){const n=nowD().date,c=cigs(n)||0,L=smokeLimit(n),pct=Math.min(1,c/L),over=c>L,S=smokeStats(),p=SP();
 const bars=Array.from({length:14},(_,j)=>{const d=addDays(n,j-13),v=cigs(d),lim=smokeLimit(d);return `<div class="sb" title="${d}: ${v??'—'} / ${lim}"><i style="height:${v==null?0:Math.min(100,v/p.base*100)}%;background:${v==null?'transparent':v<=lim?'var(--green)':'var(--red,#f87171)'}"></i><em style="bottom:${lim/p.base*100}%"></em></div>`}).join('');
 return `<div class="card ${full?'s2':''} mb smoke"><div class="ch"><div class="ic bg-r">${ic('flame')}</div><h3>Smoking</h3><span class="aside">week ${S.week} · goal ${p.goal}/day by ${fd(p.end)}</span></div>
 <div class="smrow"><div class="smbig ${over?'over':''}"><b>${c}</b><small>of ${L} today</small></div>
  <div class="smbtns"><button type="button" class="btn2 pri" data-x="cig" data-v="1">+1 smoked</button><button type="button" class="btn2" data-x="urge">${ic('shield')} Beat a craving</button><button type="button" class="btn2 ghost" data-x="cig" data-v="-1">−1</button></div></div>
 <div class="bar" style="margin:10px 0 4px"><i style="width:${pct*100}%;background:${over?'var(--red,#f87171)':'var(--green)'}"></i></div>
 <div class="xs faint">${over?`Over today’s limit by ${c-L}. Tomorrow is a new start.`:`${L-c} left for today.`} ${habDay(n).first?'First one at '+habDay(n).first+'.':''}</div>
 <div class="smstats">${stat(S.streak+' '+ic('flame'),'Days under limit','check')}${stat(S.avg==null?'—':S.avg.toFixed(1),'7-day average','chart')}${stat(S.avoided,'Not smoked','heart')}${stat('AED '+S.saved,'Saved','money')}</div>
 ${full?`<div class="sbars">${bars}</div><div class="xs faint" style="margin-top:4px">Last 14 days · line = your daily limit (slowly going from ${p.base} to ${p.goal})</div>`:''}
 <div class="note" style="margin-top:10px"><b>${ic('bulb')}Today’s tip</b>${esc(smokeTip())}</div>
 ${full?`<details class="wk"><summary>The 3-month plan</summary><div class="sm" style="line-height:1.7;margin-top:6px">${[0,2,4,6,8,10,12].map(w=>`Week ${w+1}: up to <b>${smokeLimit(addDays(p.start,w*7))}</b> a day`).join('<br>')}<br>Then hold at ${p.goal} and decide with Claude whether to go to zero.</div><div class="xs faint" style="margin-top:8px">Method: “cut down to quit” — reduce a little each week, track every cigarette, delay the first one, replace triggers, and use nicotine gum/patches if a pharmacist or doctor agrees.</div></details>`:''}</div>`}

/* nav: all pages in a swipeable bar */
function buildNav(){const b=$('#bottom');if(!b)return;b.classList.add('scroller');b.innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}<span>${p.l}</span></button>`).join('');
 $$('#bottom [data-p]').forEach(x=>x.onclick=()=>{location.hash=x.dataset.p})}
buildNav();
const _show=show;show=function(){_show();const a=$('#bottom .on');if(a)a.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'})};

/* wrappers */
const _renderToday9=renderToday;renderToday=function(G){_renderToday9(G);const t=$('#p-today .v8top');if(t){const x=document.createElement('div');x.innerHTML=smokeCard(false);t.insertBefore(x.firstElementChild,t.children[1]||null)}};
const _renderMe9=renderMe;renderMe=function(){_renderMe9();const g=$('#p-me .g3');if(!g)return;const x=document.createElement('div');x.innerHTML=`<div class="pt sub s3" style="margin:4px 0 0">Bad habits <span>track it, shrink it</span></div>`+smokeCard(true);[...x.children].forEach((c,i)=>g.insertBefore(c,g.children[1+i]||null));const h=document.createElement('div');h.className='pt sub s3';h.style.margin='0';h.innerHTML='Good habits <span>keep the streaks</span>';g.insertBefore(h,g.firstElementChild)};

document.addEventListener('click',e=>{const a=e.target.closest('[data-x]');if(!a)return;const d=a.dataset,n=nowD().date;
 if(d.x==='cig'){const c=Math.max(0,(cigs(n)||0)+(+d.v));setHab('cigs',c);if(+d.v>0&&!habDay(n).first){const t=new Intl.DateTimeFormat('en-GB',{timeZone:TZ,hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());setHab('first',t)}rerender();const L=smokeLimit(n);if(+d.v>0)toast(c>L?`${c} today — over your limit of ${L}`:c===L?`That’s your limit for today (${L})`:`${c} of ${L} today`);return}
 if(d.x==='urge'){setHab('urges',(+habDay(n).urges||0)+1);rerender();toast('Craving beaten 💪 +3 XP');return}
});
const _habXP=habXP;habXP=function(){const p=SP();let x=_habXP();Object.entries(U?.habits||{}).forEach(([d,h])=>{x+=(+h.urges||0)*3;if(h.cigs!=null&&d>=p.start&&+h.cigs<=smokeLimit(d))x+=10});return x};

/* ================= v10: Talk to the app — instant message drafts, live status ================= */
function nextCheck(){const n=nowD().mins,m=n%60,add=m<10?10-m:m<40?40-m:70-m,t=n+add;return String(Math.floor(t/60)%24).padStart(2,'0')+':'+String(t%60).padStart(2,'0')}
function safeWa(u){return /^https:\/\/wa\.me\//.test(u||'')?u:''}
function quickMsg(t){const s=t.trim(),STOP=/^(and|my|the|a|an|to|on|in|via|me|him|her|them|it|this|that|message|whatsapp|good|morning)$/i,m=[...s.matchAll(/\b(?:send|message|text|tell|whatsapp)\s+(?:to\s+)?([A-Za-z؀-ۿ]+)/gi)].find(x=>!STOP.test(x[1]));if(!m&&!/\b(send|message|text|tell|whatsapp)\b/i.test(s))return null;
 const low=s.toLowerCase(),COMMON=/^(mr|mrs|dr|the|and|from|team|magazine|final)$/i,P=people(),hit=P.find(x=>[x.name,x.aka].filter(Boolean).join(' ').toLowerCase().split(/[\s\/,().]+/).some(w=>w.length>=3&&!COMMON.test(w)&&new RegExp('\\b'+w.replace(/[^\w]/g,'')+'\\b').test(low)));
 if(!hit)return null;
 const nm=hit?'':(m?m[1]:'').toLowerCase(),p=hit||P.find(x=>[x.name,x.aka].filter(Boolean).some(v=>String(v).toLowerCase().split(/[\s\/,()]+/).includes(nm)));
 const fam=(p&&p.rel==='family')||/farnaz/i.test(nm);let body=(s.split(/\bthat\b|\bsaying\b|:/i)[1]||'').trim();
 if(!body||/good ?morning|greeting|salam|صبح/i.test(s)){body=/good ?morning|صبح/i.test(s)?(fam?'صبح بخیر عزیزم ☀️❤️ امیدوارم روز خیلی خوبی داشته باشی':'Good morning! Wishing you a great day ☀️'):(fam?'سلام عزیزم ❤️':'Hi '+(p?(/^(mr|dr)\.?$/i.test(p.name.split(' ')[0])?p.name:p.name.split(' ')[0]):'')+', warm greetings — hope you are doing well!')}
 const num=p&&typeof waNum==='function'?waNum(p.phone||''):'';const url='https://wa.me/'+(num||'')+'?text='+encodeURIComponent(body);
 return{name:p?p.name:(m?m[1]:'them'),text:body,url}}
const _sendTalk10=sendTalk;sendTalk=function(){const t=($('#tktext')?.value||'').trim();const q=t?quickMsg(t):null;_sendTalk10();
 if(q)sheet(head('Ready to send','msg','bg-g')+`<div class="note" style="margin-bottom:12px"><b>${ic('msg')}To ${esc(q.name)}</b>${esc(q.text)}</div><a class="btn2 pri wa-go" href="${q.url}" target="_blank" rel="noopener">${ic('msg')} Open WhatsApp and send</a><div class="xs faint" style="margin-top:10px">WhatsApp opens with the message ready — just tap send. Claude also got your request and will reply here.</div>`)};

/* ================= v11: new Talk to the app — chat, instant actions ================= */
const IOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
let rec11=null;
const TK_CHIPS=[['What’s next today?','sun'],['Any updates?','bell'],['Add a to-do: ','list'],['Send a WhatsApp to ','msg'],['Slept 7 hours','moon'],['I smoked 1 cigarette','flame']];
function tkThread(){const I=(U.inbox||[]).filter(x=>!x.deleted).slice(-12),st=D.inbox_status||{};
 if(!I.length)return `<div class="tk-empty">${ic('spark')}<b>Talk to me like a person.</b><span>“Meeting tomorrow 4pm with Ali at Business Bay” · “Remind me to call Yusuf” · “Send Farnaz good morning” · “What did I promise Emmanuel?”</span></div>`;
 return I.map(x=>{const r=st[x.id],wa=(r&&r.wa&&safeWa(r.wa.url))?r.wa:(x.wa&&safeWa(x.wa.url)?x.wa:null);
  const when=x.created?new Date(x.created).toLocaleTimeString('en-GB',{timeZone:TZ,hour:'2-digit',minute:'2-digit'}):'';
  const claude=r?`<div class="bub c">${esc(r.reply||r.note||'Done ✓')}</div>`:`<div class="bub c pend">${x.ack?esc(x.ack)+'<br>':''}<span>${ic('clock')} Claude finishes this by ${nextCheck()}</span></div>`;
  return `<div class="bub me">${esc(x.text)}<small>${when}</small></div>${claude}${wa?`<a class="bub wa" href="${esc(safeWa(wa.url))}" target="_blank" rel="noopener">${ic('msg')}<span><b>${esc(wa.label||'Send on WhatsApp')}</b><small>${esc(decodeURIComponent((wa.url.split('text=')[1]||'')).slice(0,90))}</small></span></a>`:''}`}).join('')}
function tkRefresh(){const t=$('#tk-thread');if(t){t.innerHTML=tkThread();t.scrollTop=t.scrollHeight}}
openTalk=function(pre){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 sheet(head('Talk to the app','spark','bg-grad')+`
 <a class="tk-direct" href="${esc(D.claude_link||'https://claude.ai/code/session_01WrLRPGYd7DhCMPBzWkg7ap')}" target="_blank" rel="noopener">${ic('spark')}<span><b>Chat with Claude now — live</b><small>Opens your Borna HQ chat in the Claude app: instant answers, and Claude can use your laptop (WhatsApp, Chrome, email)</small></span>${ic('chev')}</a>
 <div class="tk-chips">${TK_CHIPS.map(([t,i])=>`<button type="button" class="tkc" data-x="tkchip" data-t="${esc(t)}">${ic(i)}${esc(t.replace(/[: ]+$/,''))}</button>`).join('')}</div>
 <div class="tk-thread" id="tk-thread">${tkThread()}</div>
 <form id="tk11" class="tk-bar"><textarea id="tktext" class="inp" rows="1" placeholder="Type or dictate…">${esc(pre||'')}</textarea>
  <button type="button" class="tk-mic" id="tkmic" aria-label="Speak">${ic('mic')}</button><button type="submit" class="tk-send" aria-label="Send">${ic('chev')}</button></form>
 <div class="tk-hint" id="tkhint">${IOS?'Tip: tap the 🎙 key on your iPhone keyboard to dictate — it understands you best (Persian too).':''}</div>
 <div class="tk-more"><button type="button" class="btn2" data-x="asknow">${ic('msg')} Ask now (instant)</button><button type="button" class="btn2" data-act="tkmeet">${ic('users')} Meeting</button><button type="button" class="btn2" data-act="tktodo">${ic('list')} To-do</button></div>`);
 const ta=$('#tktext');tkRefresh();
 ta.addEventListener('input',()=>{ta.style.height='auto';ta.style.height=Math.min(140,ta.scrollHeight)+'px'});
 ta.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!IOS){e.preventDefault();sendTalk()}});
 $('#tk11').onsubmit=e=>{e.preventDefault();sendTalk()};
 $('#tkmic').onclick=()=>{
  if(IOS||!SR){ta.focus();$('#tkhint').innerHTML='Tap the <b>🎙 microphone key</b> on your keyboard (bottom right), speak, then tap the send arrow.';return}
  if(rec11){try{rec11.stop()}catch(e){}return}
  const R=new SR();rec11=R;R.lang=ls.get('hq.lang')||'en-US';R.interimResults=true;R.continuous=false;const pre0=ta.value.trim();
  R.onresult=e=>{let t='';for(const r of e.results)t+=r[0].transcript;ta.value=(pre0?pre0+' ':'')+t};
  R.onend=()=>{rec11=null;$('#tkmic')?.classList.remove('on')};R.onerror=()=>{rec11=null;$('#tkmic')?.classList.remove('on');$('#tkhint').textContent='Could not hear you — try again or type.'};
  try{R.start();$('#tkmic').classList.add('on');$('#tkhint').textContent='Listening… tap the mic again to stop'}catch(e){rec11=null}};
 if(!IOS)setTimeout(()=>ta.focus(),200)};
sendTalk=function(){const ta=$('#tktext'),t=(ta?.value||'').trim();if(!t)return;if(rec11){try{rec11.stop()}catch(e){}}
 const now=new Date().toISOString(),acks=[];let wa=null;
 const h=quickHabits(t);if(h)acks.push(h.replace(/ · $/,''));
 const q=quickMsg(t);if(q){wa={label:'Send to '+q.name+' on WhatsApp',url:q.url};acks.push('Message for '+q.name+' is ready below — tap to send.')}
 const td=t.match(/^(?:add (?:a )?(?:to-?do|task)|to-?do|remind me(?: to)?)[:\s]+(.+)/i);if(td){U.todos.push({id:uid(),text:td[1].trim(),cat:/deal|client|meet|call|invoice|business/i.test(td[1])?'Business':'Personal',due:nowD().date,done:false,updated:now});acks.push('Added to your To-do ✓')}
 const mm=/\b(meeting|meet)\b/i.test(t)&&typeof parseMeet==='function'?parseMeet(t):null;if(mm&&mm.date&&mm.time)acks.push(`Meeting noted for ${fd(mm.date)} ${mm.time} — Claude will add it to your calendar.`);
 U.inbox=U.inbox||[];U.inbox.push({id:uid(),text:t,created:now,updated:now,ack:acks.join(' · '),wa});queueSave();
 ta.value='';ta.style.height='auto';tkRefresh();rerender();toast(acks.length?'Done ✓ — Claude got it too':(TOKEN?'Sent to Claude ✓':'Saved — connect saving in Settings'))};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="tkchip"]');if(!a)return;const t=a.dataset.t,ta=$('#tktext');if(!ta)return;
 if(/^I smoked 1/.test(t)){setHab('cigs',(cigs(nowD().date)||0)+1);rerender();toast('Logged 1 cigarette');return}
 ta.value=t;ta.focus();if(!/[: ]$/.test(t))sendTalk()});


/* ================= v12: Talk to the app — instant answers from your data ================= */
const APPV='v13';
const AED=n=>'AED '+Math.round(+n||0).toLocaleString('en-US');
function hhmm(m){return String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0')}
function toM(t){const[a,b]=(t||'0:0').split(':');return(+a)*60+(+b||0)}
function openTodos(lim){const n=nowD().date;return todos().filter(t=>!t.done&&(!lim||!t.due||t.due<=n))}
function ansPlan(){const n=nowD(),L=[],T=D.today&&D.today.date===n.date?D.today:null;
 if(T&&T.headline)L.push('🎯 '+T.headline);
 const ev=eventsOn(n.date).filter(e=>e.kind!=='pending');
 L.push(ev.length?'📅 Today: '+ev.map(e=>(e.time?e.time+' ':'')+e.title).join(' · '):'📅 No meetings today.');
 const s=(D.schedule||[]).find(b=>toM(b.start)<=n.mins&&n.mins<toM(b.end)),nx=(D.schedule||[]).find(b=>toM(b.start)>n.mins);
 if(s)L.push('⏱ Now: '+s.block+(s.what?' — '+s.what:''));if(nx)L.push('➡️ Next at '+nx.start+': '+nx.block);
 const td=openTodos(true).slice(0,4);if(td.length)L.push('✅ Top to-dos: '+td.map(t=>t.text).join(' · '));
 return L}
function ansTodos(){const a=openTodos(true),b=openTodos(false);if(!b.length)return['No open to-dos 🎉'];
 return [`You have ${a.length} due now/overdue (${b.length} open in total):`,...a.slice(0,8).map(t=>'• '+t.text+(t.due?` (${fd(t.due)})`:''))]}
function ansMeet(){const up=meetings().filter(m=>['upcoming','now'].includes(mState(m))).slice(0,4);if(!up.length)return['No upcoming meetings. Tap “Meeting” below to add one.'];
 return up.map(m=>`• ${mName(m)} — ${fd(m.date)} ${m.time||''} (${untilTxt(m)})${m.place?' · '+m.place:''}`)}
function ansDeals(){const p=(D.pipeline||[]).filter(x=>x.stage!=='Won'&&x.stage!=='Lost');if(!p.length)return['No open deals.'];
 return p.slice(0,6).map(x=>`• ${x.name} (${x.stage}${x.prob?', '+x.prob+'%':''}) → ${x.next||'—'}`)}
function ansMoney(){const M=D.money||{},L=[];(M.costs||[]).forEach(c=>L.push(`• ${c.name}: ${AED(c.amount)}${c.paidUntil?' — paid until '+fd(c.paidUntil):''}`));
 (M.receivables||[]).slice(0,4).forEach(r=>L.push(`• Expected: ${r.label} — your share ${AED(r.yours)} (${r.prob}%)`));
 if(M.target)L.unshift('Monthly target: '+AED(M.target));return L.length?L:['No money data yet.']}
function ansSmoke(){const n=nowD().date,c=cigs(n)||0,L=smokeLimit(n);return[`🚬 ${c} of ${L} today — ${c>L?'over by '+(c-L):(L-c)+' left'}.`,'Tip: '+smokeTip()]}
function ansUpdates(){const L=[],al=alerts();al.forEach(a=>L.push('• '+a.title+(a.text?' — '+a.text:'')));
 const st=D.inbox_status||{},last=Object.values(st).filter(r=>r.reply).sort((a,b)=>(b.updated||'')<(a.updated||'')?-1:1).slice(0,2);
 last.forEach(r=>L.push('💬 '+r.reply.slice(0,160)));if(D.updated)L.push('Last update from Claude: '+new Date(D.updated).toLocaleString('en-GB',{timeZone:TZ,day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}));
 return L.length?L:['Nothing new right now.']}
function ansPerson(t){const low=t.toLowerCase(),p=people().find(x=>[x.name,x.aka].filter(Boolean).join(' ').toLowerCase().split(/[\s\/,().]+/).some(w=>w.length>=3&&!/^(mr|mrs|dr|the|and)$/.test(w)&&new RegExp('\\b'+w.replace(/[^\w]/g,'')+'\\b').test(low)));
 if(!p)return null;const L=[`👤 ${p.name}${p.role?' — '+p.role:''}`];if(p.notes)L.push(String(p.notes).slice(0,200));
 (D.pipeline||[]).filter(d=>(d.people||[]).includes(p.id)).forEach(d=>L.push(`• ${d.name}: ${d.next||d.stage}`));
 openTodos(false).filter(x=>new RegExp('\\b'+p.name.split(' ').pop()+'\\b','i').test(x.text)).slice(0,3).forEach(x=>L.push('✅ '+x.text));
 meetings().filter(m=>m.person&&m.person.includes(p.name.split(' ')[0])&&mState(m)==='upcoming').slice(0,2).forEach(m=>L.push(`📅 ${mName(m)} ${fd(m.date)} ${m.time||''}`));return L}
const HELP=['I answer instantly from your Borna HQ data. Try:','• What’s my plan today?','• My to-dos · Next meeting · Deals · Money','• Any updates?','• Tell me about Yusuf','• Add a to-do: call Emmanuel','• Send good morning to Farnaz','• Slept 7 hours · Gym done · Smoked 1','Anything else is saved for Claude.'];
function answer(t){const s=t.toLowerCase();
 if(/^(help|\?|what can you do)/.test(s))return HELP;
 if(/plan|today|schedule|what.?s next|agenda for (the )?day|برنامه/.test(s)&&!/meeting with/.test(s))return ansPlan();
 if(/to-?dos?|tasks?|what (do|should) i do|pending/.test(s)&&!/^(add|remind)/.test(s))return ansTodos();
 if(/meeting|appointment|calendar|جلسه/.test(s)&&/next|when|today|tomorrow|upcoming|my|any|\?/.test(s))return ansMeet();
 if(/deals?|pipeline|business|en590|warehouse|qatar|sudan/.test(s))return ansDeals();
 if(/money|cash|rent|budget|income|pay|salary|پول/.test(s))return ansMoney();
 if(/smok|cigar|سیگار/.test(s)&&!/smoked \d|^\+?\d/.test(s))return ansSmoke();
 if(/update|news|what.?s new|anything new|alert/.test(s))return ansUpdates();
 if(/who is|about|tell me|info on|status of/.test(s))return ansPerson(t);
 return null}
tkThread=function(){const I=(U.inbox||[]).filter(x=>!x.deleted).slice(-12),st=D.inbox_status||{},P=people();
 if(!I.length)return `<div class="tk-empty">${ic('spark')}<b>Ask me anything — I answer right away.</b><span>${HELP.slice(1,8).map(esc).join('<br>')}</span></div>`;
 return I.map(x=>{const r=st[x.id],okWa=w=>w&&safeWa(w.url)&&(r&&r.wa===w||P.some(p=>(w.label||'').includes(p.name)))?w:null,wa=okWa(r&&r.wa)||okWa(x.wa);
  const when=x.created?new Date(x.created).toLocaleTimeString('en-GB',{timeZone:TZ,hour:'2-digit',minute:'2-digit'}):'';
  let bot='';if(x.ans&&x.ans.length)bot+=`<div class="bub c">${x.ans.map(esc).join('<br>')}</div>`;
  if(r)bot+=`<div class="bub c"><small class="who">Claude</small>${esc(r.reply||r.note||'Done ✓')}</div>`;
  else if(!x.ans||!x.ans.length)bot+=`<div class="bub c pend">${x.ack?esc(x.ack)+'<br>':''}<span>${ic('clock')} Saved for Claude — answer here by ${nextCheck()}. Need it now? Tap <b>Live chat</b> above.</span></div>`;
  return `<div class="bub me">${esc(x.text)}<small>${when}</small></div>${bot}${wa?`<a class="bub wa" href="${esc(safeWa(wa.url))}" target="_blank" rel="noopener">${ic('msg')}<span><b>${esc(wa.label||'Send on WhatsApp')}</b><small>${esc(decodeURIComponent((wa.url.split('text=')[1]||'')).slice(0,90))}</small></span></a>`:''}`}).join('')};
const TK12=[['What’s my plan today?','sun'],['My to-dos','list'],['Next meeting','users'],['Deals','chart'],['Any updates?','bell'],['Add a to-do: ','plus'],['Send good morning to ','msg'],['Slept 7 hours','moon'],['I smoked 1 cigarette','flame'],['Help','spark']];
const _openTalk12=openTalk;openTalk=function(pre){_openTalk12(pre);
 const ch=$('.tk-chips');if(ch)ch.innerHTML=TK12.map(([t,i])=>`<button type="button" class="tkc" data-x="tkchip" data-t="${esc(t)}">${ic(i)}${esc(t.replace(/[: ]+$/,''))}</button>`).join('');
 const dl=$('.tk-direct');if(dl){dl.querySelector('b').textContent='Live chat with Claude';dl.querySelector('small').textContent='For WhatsApp sending, laptop & anything complex — opens Claude'}
 const ta=$('#tktext');if(ta)ta.placeholder='Ask or tell me anything…';
 const mo=$('.tk-more');if(mo){const a=mo.querySelector('[data-x="asknow"]');if(a)a.remove();mo.insertAdjacentHTML('beforeend',`<span class="xs faint tkv">App ${APPV}</span>`)}};
sendTalk=function(){const ta=$('#tktext'),t=(ta?.value||'').trim();if(!t)return;if(typeof rec11!=='undefined'&&rec11){try{rec11.stop()}catch(e){}}
 const now=new Date().toISOString(),acks=[];let wa=null;
 const h=quickHabits(t);if(h)acks.push(h.replace(/ · $/,'')+' ✓');
 const ask=/^(tell me|who is|what|info|status|how)/i.test(t),q=ask?null:quickMsg(t);if(q){wa={label:'Send to '+q.name+' on WhatsApp',url:q.url};acks.push('Message for '+q.name+' is ready — tap the green button to send.')}
 else if(!ask&&/\b(send|message|text|whatsapp)\b/i.test(t))acks.push('I couldn’t find that person in People. Add them there (with phone), or use Live chat.');
 const td=t.match(/^(?:add (?:a )?(?:to-?do|task)|to-?do|remind me(?: to)?)[:\s]+(.+)/i);if(td){U.todos.push({id:uid(),text:td[1].trim(),cat:/deal|client|meet|call|invoice|business/i.test(td[1])?'Business':'Personal',due:nowD().date,done:false,updated:now});acks.push('Added to your To-do ✓')}
 const mm=/\b(meeting|meet)\b/i.test(t)&&typeof parseMeet==='function'?parseMeet(t):null;if(mm&&mm.date&&mm.time)acks.push(`Meeting noted for ${fd(mm.date)} ${mm.time} — Claude adds it to your calendar.`);
 let ans=acks.length?acks:(answer(t)||[]);const local=ans.length>0&&!mm&&!/change|fix|add .* (page|button|feature)|research|find|check my|email|reply/i.test(t);
 U.inbox=U.inbox||[];U.inbox.push({id:uid(),text:t,created:now,updated:now,ans,ack:'',wa,local});queueSave();
 ta.value='';ta.style.height='auto';tkRefresh();rerender();if(wa)setTimeout(()=>{const b=$('#tk-thread .bub.wa:last-of-type');b&&b.classList.add('pulse')},50)};

/* ================= v14: Shopping — orders from email, deliveries, returns, spending, advice ================= */
P.bag='<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>';
P.box='<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/>';
P.truck='<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>';
PAGES.splice(PAGES.findIndex(p=>p.id==='money')+1,0,{id:'shop',l:'Shopping',i:'bag'});
buildNav();$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');$$('#tabs [data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p});
let SH=null,shLoad=null,shF={st:'all',store:'all'},shOpen={};
const SST={ordered:['On the way','b','truck'],shipped:['On the way','b','truck'],out_for_delivery:['Out for delivery','b','truck'],delivered:['Delivered','g','check'],returned_part:['Part returned','w','refresh'],return_pending:['Return in progress','w','refresh'],refunded:['Refunded','v','refresh'],cancelled:['Cancelled','r','x'],rejected:['Rejected','r','x']};
const SCOL={Amazon:'#f59e0b','Amazon Now':'#fbbf24',Temu:'#f97316',SHEIN:'#111827',noon:'#facc15',Offline:'#10b981','Lime (Uber)':'#22d3ee','Careem Quik':'#34d399','App Store':'#8b5cf6','Google Play':'#60a5fa',Anthropic:'#d97706',"Hardee's":'#ef4444'};
const AEDf=n=>'AED '+(Math.round((+n||0)*100)/100).toLocaleString('en-US',{maximumFractionDigits:2});
async function loadShop(force){if(SH&&!force&&SH.updated===(D.shop_summary||{}).updated)return SH;if(shLoad)return shLoad;
 shLoad=(async()=>{try{const j=await pagesJSON('shop.enc');if(j)SH=await dec(j)}catch(e){console.warn(e)}shLoad=null;return SH})();return shLoad}
function manual(){return(U.shop_manual||[]).filter(x=>!x.deleted)}
function shopRows(){if(!SH)return[];const r=[];(SH.orders||[]).forEach(o=>{if(o.net)r.push({d:o.date,store:o.store,amt:o.net,cat:o.cat,kind:'order'})});
 (SH.spend||[]).forEach(x=>r.push({d:x.d,store:x.store,amt:x.amt,cat:x.cat,kind:'spend'}));manual().forEach(x=>r.push({d:x.d,store:x.store||'Offline',amt:+x.amt||0,cat:x.cat||'other',kind:'manual'}));return r}
function shopSum(days){const from=addDays(nowD().date,-days);return shopRows().filter(x=>x.d>=from).reduce((a,x)=>a+x.amt,0)}
function monthSum(m){return shopRows().filter(x=>x.d.startsWith(m)).reduce((a,x)=>a+x.amt,0)}
function thumbOf(it){return it&&it.t!=null&&SH.th[it.t]?SH.th[it.t]:''}
function incoming(){return(SH?SH.orders:[]).filter(o=>['ordered','shipped','out_for_delivery'].includes(o.status))}
function orderCard(o){const st=SST[o.status]||['',''],its=o.items||[],imgs=its.filter(i=>i.t!=null).slice(0,5),more=its.length-imgs.length,rate=(U.shop_rate||{})[o.id],open=shOpen[o.id];
 return `<div class="card shop-o ${open?'open':''}" data-x="shopen" data-id="${esc(o.id)}">
  <div class="so-top"><span class="so-store" style="--sc:${SCOL[o.store]||'#888'}">${esc(o.store)}</span><span class="pill ${st[1]}">${ic(st[2]||'box')}${esc(o.label||st[0])}</span><b class="so-amt">${o.total?AEDf(o.total):''}</b></div>
  <div class="so-imgs">${imgs.map(i=>`<img src="${thumbOf(i)}" alt="" loading="lazy">`).join('')}${more>0?`<span class="so-more">+${more}</span>`:''}${!imgs.length?`<span class="so-noimg">${ic('box')}</span>`:''}</div>
  <div class="so-meta">${fd(o.date,{day:'numeric',month:'short'})} · ${its.length} item${its.length===1?'':'s'}${o.eta?` · <b>arrives by ${fd(o.eta)}</b>`:''}${o.due?` · cash ${AEDf(o.due)}`:''}${o.refund?` · refund ${AEDf(o.refund)}${o.refundPending?' (pending)':''}`:''}</div>
  ${o.note?`<div class="xs faint so-note">${esc(o.note)}</div>`:''}
  ${open?`<div class="so-items">${its.map(i=>`<div class="so-it">${i.t!=null?`<img src="${thumbOf(i)}" alt="">`:`<span class="so-noimg sm">${ic('box')}</span>`}<span>${esc(i.name)}${i.note?` <em>(${esc(i.note)})</em>`:''}</span><b>${i.price?AEDf(i.price):''}</b></div>`).join('')}
   ${(o.returned||[]).length?`<div class="xs faint" style="margin-top:8px"><b>Sent back:</b> ${o.returned.map(esc).join(' · ')}</div>`:''}
   <div class="so-act"><span class="xs faint">Quality?</span><button type="button" class="btn2 ${rate===1?'pri':''}" data-x="shrate" data-id="${esc(o.id)}" data-v="1">👍 Good</button><button type="button" class="btn2 ${rate===-1?'pri':''}" data-x="shrate" data-id="${esc(o.id)}" data-v="-1">👎 Bad</button>${o.mail?`<a class="btn2" href="${esc(o.mail)}" target="_blank" rel="noopener">${ic('msg')} Email</a>`:''}</div>`:`<div class="xs faint so-tap">Tap to see all items</div>`}
 </div>`}
function renderShop(){const el=$('#p-shop');if(!el||!D)return;
 if(SH&&D.shop_summary&&SH.updated!==D.shop_summary.updated&&!shLoad)loadShop(true).then(()=>{if(curPage()==='shop'){renderShop();draw('shop')}});
 if(!SH){el.innerHTML=`<div class="pt">Shopping <span>loading your orders…</span></div><div class="card">${ic('bag')} Reading your orders…</div>`;loadShop().then(s=>{if(s&&curPage()==='shop'){renderShop();draw('shop')}else if(!s)el.innerHTML=`<div class="pt">Shopping</div><div class="card">No shopping data yet — Claude adds it on the next check.</div>`});return}
 const I=SH.insights||{},n=nowD().date,m=n.slice(0,7),ms=monthSum(m),bud=I.budget||800,inc=incoming(),O=SH.orders||[];
 const fil=O.filter(o=>(shF.store==='all'||o.store.startsWith(shF.store))&&(shF.st==='all'||(shF.st==='way'&&inc.includes(o))||(shF.st==='done'&&o.status==='delivered')||(shF.st==='ret'&&['returned_part','return_pending','refunded'].includes(o.status))||(shF.st==='x'&&['cancelled','rejected'].includes(o.status)))).sort((a,b)=>a.date<b.date?1:-1);
 const subsM=(SH.subs||[]).reduce((a,s)=>a+(s.cycle==='year'?s.amt/12:s.amt),0),items=O.reduce((a,o)=>a+(o.items||[]).length,0),retN=O.reduce((a,o)=>a+((o.returned||[]).length||(['refunded','return_pending'].includes(o.status)?1:0)),0);
 const R=U.shop_rate||{},good=Object.values(R).filter(v=>v===1).length,bad=Object.values(R).filter(v=>v===-1).length;
 el.innerHTML=`<div class="pt">Shopping <span>from your 3 Gmail accounts · updated ${ago(SH.updated)}</span></div>
 <div class="grid g3">
 <div class="card s3 shop-verdict ${I.level||'w'}"><div class="ch"><div class="ic bg-o">${ic('bag')}</div><h3>${esc(I.verdict||'Your shopping')}</h3><span class="aside">${ic('spark')} Claude’s advice</span></div>
  <div class="sm" style="line-height:1.55">${esc(I.headline||'')}</div>
  <div class="bar" style="margin:12px 0 4px"><i style="width:${Math.min(100,ms/bud*100)}%;background:${ms>bud?'var(--red)':ms>bud*.8?'var(--amber)':'var(--green)'}"></i></div>
  <div class="xs faint">This month: <b>${AEDf(ms)}</b> of your ${AEDf(bud)} budget${ms>bud?' — over budget':ms>bud*.8?' — almost at the limit':''}${(()=>{const pm=addDays(m+'-01',-1).slice(0,7),v=monthSum(pm);return v?` · last month ${AEDf(Math.round(v))}${v>bud?' (over budget)':''}`:''})()}</div>
  ${I.should?`<div class="note"><b>${ic('bulb')}Should you keep shopping?</b>${esc(I.should)}</div>`:''}</div>
 <div class="card s3"><div class="stats">${stat(AEDf(Math.round(shopSum(30))),'Last 30 days','money')}${stat(AEDf(Math.round(shopSum(110))),'Since mid-June','chart')}${stat(items,'Items ordered','box')}${stat(retN,'Sent back / refunded','refresh')}</div></div>
 ${inc.length?`<div class="card s3"><div class="ch"><div class="ic bg-b">${ic('truck')}</div><h3>On the way</h3><span class="aside">${inc.length}</span></div>${inc.map(o=>`<div class="row"><img class="so-th" src="${thumbOf((o.items||[]).find(i=>i.t!=null))}" alt=""><div class="tx"><b>${esc(o.store)} · ${(o.items||[]).length} items</b><div class="xs faint">${o.etaFrom?fd(o.etaFrom)+'–':''}${fd(o.eta)}${o.pay?' · '+esc(o.pay):''}</div></div></div>`).join('')}</div>`:''}
 ${(I.points||[]).length?`<div class="card s3"><div class="ch"><div class="ic bg-v">${ic('spark')}</div><h3>What I see</h3></div>${I.points.map(p=>`<div class="row"><div class="tx sm">${esc(p)}</div></div>`).join('')}</div>`:''}
 <div class="card s3"><div class="ch"><div class="ic bg-a">${ic('chart')}</div><h3>Where the money goes</h3></div><div class="chartbox sm"><canvas id="c-shop-store"></canvas></div><div class="legend" id="lg-shop"></div><div class="chartbox sm" style="margin-top:12px"><canvas id="c-shop-month"></canvas></div></div>
 <div class="card s3"><div class="ch"><div class="ic bg-g">${ic('star')}</div><h3>Quality by store</h3></div>${(I.quality||[]).map(q=>`<div class="row"><span class="pill ${q.score==='good'?'g':q.score==='bad'?'r':'w'}">${esc(q.store)}</span><div class="tx sm">${esc(q.text)}</div></div>`).join('')}${good+bad?`<div class="xs faint" style="margin-top:6px">Your ratings: ${good} 👍 · ${bad} 👎</div>`:''}</div>
 <div class="pt sub s3" style="margin:6px 0 0">Orders <span>${fil.length}</span></div>
 <div class="s3 shop-f">${[['all','All'],['way','On the way'],['done','Delivered'],['ret','Returns'],['x','Cancelled']].map(([k,l])=>`<button type="button" class="tkc ${shF.st===k?'on':''}" data-x="shf" data-k="st" data-v="${k}">${l}</button>`).join('')}<span class="sep"></span>${['all','Amazon','Temu','SHEIN','noon'].map(s=>`<button type="button" class="tkc ${shF.store===s?'on':''}" data-x="shf" data-k="store" data-v="${s}">${s==='all'?'All stores':s}</button>`).join('')}</div>
 <div class="s3 shop-list">${fil.map(orderCard).join('')||'<div class="card">Nothing here.</div>'}</div>
 <div class="card s3"><div class="ch"><div class="ic bg-c">${ic('refresh')}</div><h3>Subscriptions</h3><span class="aside">≈ ${AEDf(subsM)}/month</span></div>${(SH.subs||[]).map(s=>`<div class="row"><div class="tx"><b>${esc(s.name)}</b> <span class="pill ${s.verdict==='keep'?'g':s.verdict==='cancel'?'r':'w'}">${s.verdict}</span><div class="xs faint">${AEDf(s.amt)}/${s.cycle} · via ${esc(s.via)} · next ${fd(s.next)}<br>${esc(s.why)}</div></div></div>`).join('')}${(SH.failed||[]).length?`<div class="note"><b>${ic('bell')}Payment problems</b>${SH.failed.map(esc).join('<br>')}</div>`:''}</div>
 <div class="card s3"><div class="ch"><div class="ic bg-o">${ic('money')}</div><h3>Everyday spending</h3><span class="aside">apps · rides · groceries · offline</span></div>
  ${[...manual().map(x=>({...x,store:x.store||'Offline',what:x.what,m:1})),...(SH.spend||[])].sort((a,b)=>a.d<b.d?1:-1).slice(0,14).map(x=>`<div class="row"><div class="tx"><b>${esc(x.what||x.cat)}</b><div class="xs faint">${esc(x.store)} · ${fd(x.d)} · ${esc(x.cat)}</div></div><b>${AEDf(x.amt)}</b>${x.m?`<button class="x" data-x="shdel" data-id="${x.id}" aria-label="Delete">${ic('x')}</button>`:''}</div>`).join('')}
  <button type="button" class="btn2 pri" data-x="shadd" style="margin-top:10px;width:100%">${ic('plus')} Add an offline purchase</button></div>
 ${(I.rules||[]).length?`<div class="card s3"><div class="ch"><div class="ic bg-g">${ic('shield')}</div><h3>Your shopping rules</h3></div>${I.rules.map((r,i)=>`<div class="row"><b>${i+1}</b><div class="tx sm">${esc(r)}</div></div>`).join('')}</div>`:''}
 </div>`}
function shopCharts(){if(!SH)return;const by={};shopRows().forEach(x=>{const k=x.store.startsWith('Amazon')?'Amazon':x.store;by[k]=(by[k]||0)+x.amt});const E=Object.entries(by).filter(e=>e[1]>0).sort((a,b)=>b[1]-a[1]);
 mk('c-shop-store',{type:'doughnut',data:{labels:E.map(e=>e[0]),datasets:[{data:E.map(e=>Math.round(e[1])),backgroundColor:E.map((e,i)=>SCOL[e[0]]||ACOL[i%8]),borderColor:css('--card'),borderWidth:3}]},options:{cutout:'66%'}});
 const lg=$('#lg-shop');if(lg)lg.innerHTML=E.map(e=>`<span><i style="background:${SCOL[e[0]]||'#888'}"></i>${esc(e[0])} · ${AEDf(Math.round(e[1]))}</span>`).join('');
 const M=[...new Set(shopRows().map(x=>x.d.slice(0,7)))].sort(),cats=['shopping','subscriptions & apps','daily'];const g=(m,f)=>Math.round(shopRows().filter(x=>x.d.startsWith(m)&&f(x)).reduce((a,x)=>a+x.amt,0));
 mk('c-shop-month',{type:'bar',data:{labels:M.map(m=>fd(m+'-15',{month:'short'})),datasets:[{label:'Shopping',data:M.map(m=>g(m,x=>x.kind==='order'||x.kind==='manual')),backgroundColor:'#f97316',borderRadius:6,stack:'s'},{label:'Apps & subscriptions',data:M.map(m=>g(m,x=>['subscription','games'].includes(x.cat))),backgroundColor:'#8b5cf6',borderRadius:6,stack:'s'},{label:'Rides, food & groceries',data:M.map(m=>g(m,x=>['transport','groceries','food'].includes(x.cat))),backgroundColor:'#22d3ee',borderRadius:6,stack:'s'}]},options:{plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10}}},scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:css('--line')}}}}})}
const _draw14=draw;draw=function(pg){_draw14(pg);if(pg==='shop'){if(!$('#p-shop .shop-list'))renderShop();shopCharts()}};
const _render14=render;render=function(keep){renderShop();_render14(keep)};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x]');if(!a)return;const d=a.dataset;
 if(d.x==='shopen'){if(e.target.closest('button,a'))return;shOpen[d.id]=!shOpen[d.id];renderShop();draw('shop');return}
 if(d.x==='shf'){shF[d.k]=d.v;renderShop();draw('shop');return}
 if(d.x==='shrate'){U.shop_rate=U.shop_rate||{};U.shop_rate[d.id]=U.shop_rate[d.id]===+d.v?0:+d.v;queueSave();renderShop();draw('shop');toast('Thanks — Claude uses this to judge quality');return}
 if(d.x==='shdel'){const x=(U.shop_manual||[]).find(x=>x.id===d.id);if(x){x.deleted=true;x.updated=new Date().toISOString();queueSave();renderShop();draw('shop')}return}
 if(d.x==='shadd'){sheet(head('Offline purchase','bag','bg-o')+`<form id="shf14"><div class="fld"><label>What did you buy?</label><input class="inp" name="what" required placeholder="Shoes, groceries, gift…"></div>
  <div class="fld"><label>Shop</label><input class="inp" name="store" placeholder="Dubai Mall, Carrefour…"></div>
  <div class="fld"><label>Amount (AED)</label><input class="inp" name="amt" type="number" step="0.01" inputmode="decimal" required></div>
  <div class="fld"><label>Type</label><select class="inp" name="cat">${['clothing','electronics','groceries','food','home','kids','health','gift','travel','other'].map(c=>`<option>${c}</option>`).join('')}</select></div>
  <div class="fld"><label>Date</label><input class="inp" name="d" type="date" value="${nowD().date}"></div>
  <button class="btn2 pri" style="width:100%">Save</button></form>`);
  $('#shf14').onsubmit=ev=>{ev.preventDefault();const f=Object.fromEntries(new FormData(ev.target));U.shop_manual=U.shop_manual||[];U.shop_manual.push({id:uid(),...f,amt:+f.amt,updated:new Date().toISOString()});queueSave();$('#scrim').click();renderShop();draw('shop');toast('Saved ✓')};return}
});
/* Today: deliveries card · Talk: shopping answers */
const _renderToday14=renderToday;renderToday=function(G){_renderToday14(G);const S=D.shop_summary;if(!S||!(S.incoming||[]).length)return;const t=$('#p-today .v8top');if(!t)return;const x=document.createElement('div');
 x.innerHTML=`<a class="card mb shop-today" href="#shop"><div class="ch"><div class="ic bg-b">${ic('truck')}</div><h3>Deliveries</h3><span class="aside">Shopping ›</span></div>${S.incoming.map(o=>`<div class="sm"><b>${esc(o.store)}</b> · ${esc(o.what)} · ${esc(o.when)}${o.cash?` · <b>have ${esc(o.cash)} cash</b>`:''}</div>`).join('')}</a>`;t.appendChild(x.firstElementChild)};
function ansShop(){const S=D.shop_summary||{},L=[];if(S.verdict)L.push('🛍 '+S.verdict+' — '+(S.headline||''));
 (S.incoming||[]).forEach(o=>L.push(`📦 ${o.store}: ${o.what} · ${o.when}${o.cash?' · cash '+o.cash:''}`));(S.refunds||[]).forEach(r=>L.push('↩️ '+r));
 L.push(`This month so far: ${AEDf(SH?monthSum(nowD().date.slice(0,7)):S.month||0)}`);L.push('Open Shopping for photos of everything you bought.');return L}
const _answer14=answer;answer=function(t){if(/shop|deliver|order|package|parcel|receiv|amazon|temu|shein|noon|bought|purchas|refund|return|subscription/i.test(t))return ansShop();return _answer14(t)};

/* ================= v15: speed · bell · habits redesign · live cash · more game ================= */
/* --- 1. Speed: re-render only the page you are on --- */
const PAGEFN={today:()=>renderToday(game()),me:()=>renderMe(),business:()=>renderBusiness(),money:()=>renderMoney(),people:()=>renderPeople(),tasks:()=>renderTasks(),calendar:()=>renderCalendar(),projects:()=>renderProjects(),social:()=>renderSocial(),growth:()=>renderGrowth(game()),shop:()=>renderShop()};
const DIRTY=new Set();let rafR=0;
const _render15=render;render=function(keep){
 if(!keep||!D){DIRTY.clear();_render15(keep);bellUpdate();return}
 cancelAnimationFrame(rafR);rafR=requestAnimationFrame(()=>{const pg=curPage(),y=scrollY;
  Object.keys(PAGEFN).forEach(k=>{if(k!==pg)DIRTY.add(k)});
  try{(PAGEFN[pg]||(()=>_render15(true)))()}catch(e){console.warn(e);_render15(true)}
  $('#updated').innerHTML=`${fd(nowD().date,{weekday:'short',day:'numeric',month:'short'})} · updated ${ago(D.updated)} <span id="sync" class="sync"></span>`;setSync(syncState);
  draw(pg);window.scrollTo(0,y);bellUpdate()})};
const _show15=show;show=function(){const pg=curPage();if(DIRTY.has(pg)){DIRTY.delete(pg);try{PAGEFN[pg]()}catch(e){console.warn(e)}}_show15()};

/* --- 2. Notification bell (top right, red dot) --- */
(function(){const r=$('#refresh');if(!r||$('#bell'))return;const b=document.createElement('button');b.className='iconbtn bell';b.id='bell';b.setAttribute('aria-label','Notifications');
 b.innerHTML=ic('bell')+'<i class="dot" id="belldot"></i>';r.parentNode.insertBefore(b,r);b.onclick=openBell})();
function bellUpdate(){const c=D&&U?alertsAll().length:0,dot=$('#belldot');if(dot){dot.textContent=c>9?'9+':c||'';dot.classList.toggle('on',c>0)}}
function alertsAll(){return (D.alerts||[]).filter(a=>!(U.seen||{})[a.id])}
function openBell(){const A=alertsAll();
 sheet(head('Notifications','bell','bg-o')+(A.length?`<div class="bell-list">${A.map(a=>alertRow(a).replace('class="alert','class="alert bl')).join('')}</div><button type="button" class="btn2" data-x="bellall" style="width:100%;margin-top:10px">${ic('check')} Mark all as read</button>`:`<div class="tk-empty">${ic('check')}<b>You’re all caught up</b><span>New updates from Claude appear here with a red dot.</span></div>`)+`<button type="button" class="btn2 ghost" data-act="close" onclick="setTimeout(()=>document.getElementById('refresh').click(),50)" style="width:100%;margin-top:8px">${ic('refresh')} Check for updates now</button>`)}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="bellall"]');if(!a)return;const now=new Date().toISOString();U.seen=U.seen||{};alertsAll().forEach(x=>U.seen[x.id]={updated:now});queueSave();closeSheet();bellUpdate();toast('All read ✓')});
document.addEventListener('click',e=>{const s=e.target.closest('#sheet [data-seen]');if(s)setTimeout(()=>{const l=$('#sheet .bell-list');if(l){const it=s.closest('.alert');it&&it.remove();if(!l.children.length)closeSheet()}bellUpdate()},30)},true);

/* --- 3. Habits: new look, instant taps, combo + confetti --- */
const HABX={gym:['🏋️','#10b981','#059669'],swim:['🏊','#06b6d4','#0284c7'],sleep:['😴','#8b5cf6','#6d28d9'],food:['🥗','#84cc16','#16a34a'],water:['💧','#38bdf8','#2563eb'],arabic:['🕌','#f59e0b','#d97706'],claude:['🤖','#a78bfa','#7c3aed'],post:['🎬','#fb7185','#e11d48'],family:['👨‍👩‍👧‍👧','#f472b6','#db2777']};
const MOODE=['','😞','😕','😐','🙂','🤩'];
habChips=function(d){const h=habDay(d);return `<div class="habs2">${HAB.map(x=>{const X=HABX[x.k]||['⭐','#8b5cf6','#6d28d9'],on=!!h[x.k],s=habStreak(x.k);
 return `<button type="button" class="hab2 ${on?'on':''}" data-x="hab" data-k="${x.k}" style="--a:${X[1]};--b:${X[2]}"><span class="he">${X[0]}</span><b>${x.n}</b>${s>1?`<small>🔥${s}</small>`:''}<em class="hk">✓</em></button>`}).join('')}</div>`};
moodRow=function(d){const h=habDay(d);return `<div class="mood2"><span>Mood</span>${[1,2,3,4,5].map(v=>`<button type="button" class="${+h.mood===v?'on':''}" data-x="mood" data-v="${v}" title="${MOOD[v]}">${MOODE[v]}</button>`).join('')}</div>
 <div class="mood2"><span>Energy</span>${[1,2,3,4,5].map(v=>`<button type="button" class="en ${+h.energy>=v?'on':''}" data-x="energy" data-v="${v}">⚡</button>`).join('')}</div>`};
habCard=function(){const n=nowD().date,c=habCount(n),p=c/HAB.length,R=26,C=2*Math.PI*R;
 return `<div class="card mb habcard"><div class="hc-top"><div class="hc-ring"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="${R}" class="bg"/><circle cx="32" cy="32" r="${R}" class="fg" style="stroke-dasharray:${C};stroke-dashoffset:${C*(1-p)}"/></svg><b>${c}<small>/${HAB.length}</small></b></div>
 <div class="hc-t"><h3>Daily habits</h3><div class="xs faint">${c===HAB.length?'Perfect day! 🏆 +25 XP bonus':c>=5?`Great — ${HAB.length-c} to a perfect day`:'Tap what you did · +5 XP each'}</div></div><a href="#me" class="pill g">${ic('chart')}Report</a></div>
 ${habChips(n)}${moodRow(n)}</div>`};
function xpFly(el,txt){const r=el.getBoundingClientRect(),f=document.createElement('div');f.className='xpfly';f.textContent=txt;f.style.left=(r.left+r.width/2)+'px';f.style.top=(r.top+window.scrollY)+'px';document.body.appendChild(f);setTimeout(()=>f.remove(),1100)}
function confetti(n=70){const box=document.createElement('div');box.className='confetti';const cols=['#f472b6','#fbbf24','#34d399','#60a5fa','#a78bfa','#fb923c'];
 for(let i=0;i<n;i++){const s=document.createElement('i');s.style.left=Math.random()*100+'vw';s.style.background=cols[i%cols.length];s.style.animationDelay=Math.random()*.4+'s';s.style.transform=`rotate(${Math.random()*360}deg)`;box.appendChild(s)}
 document.body.appendChild(box);setTimeout(()=>box.remove(),2600);if(navigator.vibrate)navigator.vibrate([20,40,20])}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="hab"],[data-x="mood"],[data-x="energy"]');if(!a)return;e.stopImmediatePropagation();const d=a.dataset,n=nowD().date;
 if(d.x==='hab'){const on=!habDay(n)[d.k],before=habCount(n);a.classList.toggle('on',on);setHab(d.k,on?1:0);if(navigator.vibrate)navigator.vibrate(12);
  if(on){xpFly(a,'+5 XP');const c=habCount(n);if(c===HAB.length&&before<c){setTimeout(()=>{confetti();toast('Perfect day! 🏆 +25 XP')},250)}else if(c===5&&before<5)toast('5 habits — streak alive 🔥')}
  setTimeout(()=>rerender(),180);return}
 setHab(d.x,+d.v);a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',d.x==='energy'?+b.dataset.v<=+d.v:b===a));setTimeout(()=>rerender(),180)},true);
const _habXP15=habXP;habXP=function(){let x=_habXP15();Object.keys(U?.habits||{}).forEach(d=>{if(habCount(d)===HAB.length)x+=25});const ds=(U?.kv?.daily?.v)||{};x+=Object.keys(ds).length*10;return x};

/* --- 4. Daily reward + level-up celebration --- */
function dailyStreak(){const ds=(U?.kv?.daily?.v)||{};let s=0,d=nowD().date;if(!ds[d])d=addDays(d,-1);while(ds[d]&&s<999){s++;d=addDays(d,-1)}return s}
function rewardCard(){const ds=(U?.kv?.daily?.v)||{},n=nowD().date,got=!!ds[n],st=dailyStreak();
 return `<div class="card mb reward ${got?'got':''}"><div class="rw-ic">${got?'✅':'🎁'}</div><div class="rw-t"><b>${got?'Daily reward collected':'Daily reward ready!'}</b><div class="xs faint">${got?`Come back tomorrow · 🔥 ${st}-day login streak`:`Open HQ every day · +10 XP · streak ${st} day${st===1?'':'s'}`}</div></div>${got?'':`<button type="button" class="btn2 pri" data-x="claim">Claim</button>`}</div>`}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="claim"]');if(!a)return;const n=nowD().date;U.kv=U.kv||{};const v={...((U.kv.daily||{}).v||{})};v[n]=1;U.kv.daily={v,updated:new Date().toISOString()};queueSave();xpFly(a,'+10 XP');confetti(40);setTimeout(()=>rerender(),300)});
let lastLv=+(ls.get('hq.lv')||0);function checkLevel(){if(!D||!U)return;const G=game();if(lastLv&&G.level>lastLv){setTimeout(()=>{confetti(120);sheet(`<div class="lvup"><div class="lvb">LV ${G.level}</div><h2>Level up!</h2><p>You are now <b>${esc(G.title)}</b>. Keep the streak going.</p><button class="btn2 pri" data-act="close" style="width:100%">Let’s go 🚀</button></div>`)},400)}lastLv=G.level;ls.set('hq.lv',String(G.level))}

/* --- 5. Today: alerts go to the bell; add reward card --- */
const _renderToday15=renderToday;renderToday=function(G){_renderToday15(G);const el=$('#p-today');if(!el)return;el.querySelectorAll('.alerts').forEach(x=>x.remove());
 const t=el.querySelector('.v8top');if(t){const x=document.createElement('div');x.innerHTML=rewardCard();t.insertBefore(x.firstElementChild,t.firstChild)}checkLevel()};

/* --- 6. Money: cash moves with every spend / income --- */
function liveCash(){const c=U?.kv?.cash;if(!c||c.v==null)return null;const since=c.updated||'';let v=+c.v;
 (U.txns||[]).filter(t=>!t.deleted&&(t.created||t.updated||'')>since).forEach(t=>{v+=(t.type==='out'?-1:1)*(+t.amount||0)});return Math.round(v*100)/100}
const _moneyCalc15=moneyCalc;moneyCalc=function(){const m=_moneyCalc15(),c=liveCash();if(c!=null){m.cash=c;m.runway=m.burn>0?c/m.burn:null}return m};

/* --- 7. Social: show how fresh the numbers are --- */
const _renderSocial15=renderSocial;renderSocial=function(){_renderSocial15();const el=$('#p-social .pt');if(el&&D.social_updated&&!el.querySelector('.fresh'))el.insertAdjacentHTML('beforeend',`<span class="fresh">${ic('refresh')} checked ${ago(D.social_updated)}</span>`)};

/* ================= v16: dark/light mode + accent · Watch & Play tracker ================= */
/* --- Theme --- */
const ACCENTS={violet:['#8b5cf6','#22d3ee'],ocean:['#3b82f6','#06b6d4'],sunset:['#f97316','#ec4899'],emerald:['#10b981','#84cc16'],gold:['#f59e0b','#ef4444'],rose:['#ec4899','#8b5cf6']};
function applyTheme(){const t=ls.get('hq.theme')||'auto',a=ls.get('hq.accent')||'violet',r=document.documentElement;
 if(t==='auto')r.removeAttribute('data-theme');else r.setAttribute('data-theme',t);
 const A=ACCENTS[a]||ACCENTS.violet;r.style.setProperty('--violet',A[0]);r.style.setProperty('--cyan',A[1]);r.style.setProperty('--acc1',A[0]);r.style.setProperty('--acc2',A[1]);
 const dark=t==='dark'||(t==='auto'&&!matchMedia('(prefers-color-scheme: light)').matches);let m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement('meta');m.name='theme-color';document.head.appendChild(m)}m.content=dark?'#0b0d14':'#f4f5fb'}
applyTheme();matchMedia('(prefers-color-scheme: light)').addEventListener?.('change',()=>{applyTheme();if(D)draw(curPage())});
function themeBlock(){const t=ls.get('hq.theme')||'auto',a=ls.get('hq.accent')||'violet';
 return `<div class="fld"><label>Appearance</label><div class="seg3">${[['auto','🌓 Auto'],['dark','🌙 Dark'],['light','☀️ Light']].map(([k,l])=>`<button type="button" class="${t===k?'on':''}" data-x="theme" data-v="${k}">${l}</button>`).join('')}</div></div>
 <div class="fld"><label>Accent colour</label><div class="accs">${Object.entries(ACCENTS).map(([k,c])=>`<button type="button" class="acc ${a===k?'on':''}" data-x="accent" data-v="${k}" style="background:linear-gradient(135deg,${c[0]},${c[1]})" aria-label="${k}"></button>`).join('')}</div></div>`}
const _openSettings16=openSettings;openSettings=function(){_openSettings16();const s=$('#sheet'),h=s&&s.querySelector('h2');if(h){const x=document.createElement('div');x.innerHTML=themeBlock();h.after(...x.children)}};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="theme"],[data-x="accent"]');if(!a)return;ls.set(a.dataset.x==='theme'?'hq.theme':'hq.accent',a.dataset.v);applyTheme();
 a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===a));if(D)draw(curPage());toast(a.dataset.x==='theme'?'Theme: '+a.dataset.v:'Accent changed')});
/* quick toggle: double-tap the logo */
(function(){const lg=document.querySelector('header .logo');if(lg)lg.addEventListener('dblclick',()=>{const t=(ls.get('hq.theme')||'auto'),n=t==='light'?'dark':'light';ls.set('hq.theme',n);applyTheme();if(D)draw(curPage());toast(n==='light'?'☀️ Light mode':'🌙 Dark mode')})})();

/* --- Watch & Play --- */
P.film='<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>';
PAGES.splice(PAGES.findIndex(p=>p.id==='social')+1,0,{id:'fun',l:'Watch & Play',i:'film'});
(function(){const sec=document.createElement('section');sec.className='page';sec.id='p-fun';$('#p-social')?.after(sec)})();
buildNav();$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');$$('#tabs [data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p});
const MT={movie:['🎬','Movie'],series:['📺','Series'],game:['🎮','Game']};
function media(){return((U?.kv?.media?.v)||[]).filter(x=>!x.deleted).sort((a,b)=>(b.date||'')<(a.date||'')?-1:1)}
function saveMedia(L){U.kv=U.kv||{};U.kv.media={v:L,updated:new Date().toISOString()};queueSave()}
function addMedia(it){const L=((U?.kv?.media?.v)||[]).slice();const x={id:uid(),date:nowD().date,rating:0,...it};L.push(x);saveMedia(L);fetchPoster(x);return x}
async function wikiLookup(title,type){const suf={movie:['(film)',''],series:['(TV series)',''],game:['(video game)','']}[type]||[''];
 for(const sx of suf){try{const t=(title+(sx?' '+sx:'')).trim().replace(/ /g,'_');const r=await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(t));if(!r.ok)continue;const d=await r.json();
  if(d.type!=='standard')continue;const ds=d.description||'';if(type==='game'&&!/game/i.test(ds))continue;if(type!=='game'&&!/film|series|movie|show|miniseries|sitcom|drama|animated/i.test(ds))continue;
  return{poster:(d.thumbnail||{}).source||'',genre:ds.replace(/^\d{4}\s*/,'').slice(0,60),year:(ds.match(/\b(19|20)\d\d\b/)||[''])[0],plot:(d.extract||'').slice(0,220)}}catch(e){}}return null}
async function fetchPoster(x){if(x.poster)return;const w=await wikiLookup(x.title,x.type||'movie');if(!w)return;
 const L=((U.kv.media||{}).v||[]).slice(),i=L.findIndex(y=>y.id===x.id);if(i<0)return;L[i]={...L[i],...w,poster:w.poster||L[i].poster||''};saveMedia(L);if(curPage()==='fun')renderFun()}
function stars(v,id){return `<span class="stars">${[1,2,3,4,5].map(n=>`<button type="button" data-x="mstar" data-id="${id||''}" data-v="${n}" class="${n<=v?'on':''}">★</button>`).join('')}</span>`}
function mediaStats(){const L=media(),n=nowD().date,mon=n.slice(0,7),thisM=L.filter(x=>(x.date||'').startsWith(mon));const g={};L.forEach(x=>{if(x.genre)g[x.genre]=(g[x.genre]||0)+1});
 const top=Object.entries(g).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>e[0]);const rated=L.filter(x=>x.rating),avg=rated.length?rated.reduce((a,x)=>a+x.rating,0)/rated.length:0;
 let st=0,d=n;const ds=new Set(L.map(x=>x.date));if(!ds.has(d))d=addDays(d,-1);while(ds.has(d)&&st<999){st++;d=addDays(d,-1)}
 return{L,thisM,top,avg,st,movies:L.filter(x=>x.type==='movie').length,games:L.filter(x=>x.type==='game').length,series:L.filter(x=>x.type==='series').length}}
function recCard(r){return `<div class="rec"><div class="rp">${r.poster?`<img src="${esc(r.poster)}" alt="" loading="lazy">`:`<span>${(MT[r.type]||MT.movie)[0]}</span>`}</div><div class="rt"><b>${esc(r.title)}</b><small>${esc([r.year,r.genre,r.where].filter(Boolean).join(' · '))}</small><p>${esc(r.why||'')}</p>
 <div class="ra"><button type="button" class="btn2 pri" data-x="mwatch" data-t="${esc(r.title)}" data-k="${r.type||'movie'}">${r.type==='game'?'🎮 Played it':'✓ Watched'}</button><button type="button" class="btn2" data-x="mlater" data-t="${esc(r.title)}" data-k="${r.type||'movie'}">＋ List</button></div></div></div>`}
let funTab='all';
function renderFun(){const el=$('#p-fun');if(!el||!D)return;const S=mediaStats(),R=(D.media_recs||{}),recs=(R.items||[]),wl=S.L.filter(x=>x.later),hist=S.L.filter(x=>!x.later&&(funTab==='all'||x.type===funTab));
 el.innerHTML=`<div class="pt">Watch & Play <span>your movies, series & games</span></div>
 <div class="g3">
 <div class="card s3 funhero"><div class="fh-big">🍿</div><div class="fh-t"><b>${S.thisM.filter(x=>!x.later).length} this month</b><div class="xs faint">${S.movies} movies · ${S.series} series · ${S.games} games${S.top.length?' · you love '+esc(S.top.join(', ')):''}</div>
  <div class="chips2"><span>🔥 ${S.st}-night streak</span>${S.avg?`<span>⭐ avg ${S.avg.toFixed(1)}</span>`:''}<span>+3 XP per log</span></div></div></div>
 <form class="card s3 madd" id="madd"><div class="seg3">${Object.entries(MT).map(([k,v],i)=>`<button type="button" class="${i===0?'on':''}" data-x="mtype" data-v="${k}">${v[0]} ${v[1]}</button>`).join('')}</div>
  <div class="addline"><input class="inp" name="t" placeholder="What did you watch or play tonight?" enterkeyhint="done" required><button class="btn2 pri" style="flex:0 0 auto">Add</button></div><input type="hidden" name="k" value="movie"></form>
 <div class="card s3"><div class="ch"><div class="ic bg-grad">${ic('spark')}</div><h3>Picked for you</h3><span class="aside">${R.updated?'by Claude · '+ago(R.updated):''}</span></div>
  ${recs.length?`<div class="recs">${recs.slice(0,6).map(recCard).join('')}</div>`:empty('Log a few movies or games — Claude picks new ones for you every evening','spark')}
  ${R.note?`<div class="note"><b>${ic('bulb')}Why these</b>${esc(R.note)}</div>`:''}</div>
 ${wl.length?`<div class="card s3"><div class="ch"><div class="ic bg-a">${ic('list')}</div><h3>Watch list</h3><span class="aside">${wl.length}</span></div>${wl.map(x=>`<div class="row"><div class="tx"><b>${MT[x.type]?.[0]||'🎬'} ${esc(x.title)}</b></div><button class="btn2" data-x="mdone" data-id="${x.id}">✓ Done</button></div>`).join('')}</div>`:''}
 <div class="pt sub s3" style="margin:6px 0 0">History <span>${S.L.filter(x=>!x.later).length}</span></div>
 <div class="s3 shop-f">${[['all','All'],['movie','🎬 Movies'],['series','📺 Series'],['game','🎮 Games']].map(([k,l])=>`<button type="button" class="tkc ${funTab===k?'on':''}" data-x="mtab" data-v="${k}">${l}</button>`).join('')}</div>
 <div class="s3 mgrid">${hist.map(x=>`<div class="mcard"><div class="mp">${x.poster?`<img src="${esc(x.poster)}" alt="" loading="lazy">`:`<span>${MT[x.type]?.[0]||'🎬'}</span>`}<button class="mdel" data-x="mdel" data-id="${x.id}" aria-label="Remove">×</button></div><b>${esc(x.title)}</b><small>${fd(x.date)}${x.genre?' · '+esc(x.genre):''}</small>${stars(x.rating||0,x.id)}</div>`).join('')||empty('Nothing logged yet','film')}</div>
 </div>`;
 const f=$('#madd');f.onsubmit=e=>{e.preventDefault();const t=f.t.value.trim();if(!t)return;addMedia({title:t,type:f.k.value});f.t.value='';xpFly(f.querySelector('.btn2'),'+3 XP');renderFun();toast('Logged ✓ — rate it with the stars')}}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x^="m"]');if(!a)return;const d=a.dataset;
 const upd=(id,fn)=>{const L=((U.kv.media||{}).v||[]).map(x=>x.id===id?fn({...x}):x);saveMedia(L);renderFun()};
 if(d.x==='mtype'){a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===a));$('#madd').k.value=d.v;return}
 if(d.x==='mtab'){funTab=d.v;renderFun();return}
 if(d.x==='mstar'&&d.id){upd(d.id,x=>(x.rating=+d.v,x));if(+d.v===5)confetti(30);return}
 if(d.x==='mdel'){upd(d.id,x=>(x.deleted=true,x));toast('Removed');return}
 if(d.x==='mdone'){upd(d.id,x=>(x.later=false,x.date=nowD().date,x));toast('Watched ✓ +3 XP');return}
 if(d.x==='mwatch'){const r=((D.media_recs||{}).items||[]).find(y=>y.title===d.t)||{};addMedia({title:d.t,type:d.k,poster:r.poster,genre:r.genre,year:r.year});xpFly(a,'+3 XP');renderFun();toast('Logged — rate it ⭐');return}
 if(d.x==='mlater'){addMedia({title:d.t,type:d.k,later:true});renderFun();toast('Added to your watch list');return}});
const _habXP16=habXP;habXP=function(){return _habXP16()+media().filter(x=>!x.later).length*3};
PAGEFN.fun=renderFun;
const _render16=render;render=function(keep){_render16(keep);if(!keep)renderFun()};
const _draw16=draw;draw=function(pg){_draw16(pg);if(pg==='fun'&&!$('#p-fun .mgrid'))renderFun()};
/* Today: evening nudge */
const _renderToday16=renderToday;renderToday=function(G){_renderToday16(G);const n=nowD();if(n.mins<19*60&&n.mins>4*60)return;const t=$('#p-today .v8top');if(!t)return;
 const tonight=media().some(x=>x.date===n.date&&!x.later),r=((D.media_recs||{}).items||[])[0];const x=document.createElement('div');
 x.innerHTML=`<a class="card mb movienight" href="#fun"><span class="mn-ic">${tonight?'✅':'🍿'}</span><div><b>${tonight?'Movie night logged':'Movie night?'}</b><div class="xs faint">${tonight?'Rate it and see new picks':r?'Tonight’s pick: '+esc(r.title)+(r.year?' ('+r.year+')':''):'Log what you watch or play tonight · +3 XP'}</div></div>${ic('chev')}</a>`;t.appendChild(x.firstElementChild)};
/* Talk to the app: "watched X" / "played X" */
const _answer16=answer;answer=function(t){const m=t.match(/^(?:i\s+)?(watched|watching|saw|played|playing)\s+(.+)/i);if(m){const g=/play/i.test(m[1]);addMedia({title:m[2].replace(/[.!]+$/,'').trim(),type:g?'game':'movie'});return[`${g?'🎮':'🎬'} Logged “${m[2].trim()}” in Watch & Play · +3 XP. Rate it there ⭐`]}
 if(/movie|film|what (should|to) (i )?watch|recommend|game to play/i.test(t)){const R=((D.media_recs||{}).items||[]).slice(0,3);return R.length?['🍿 Picks for you:',...R.map(r=>`• ${r.title}${r.year?' ('+r.year+')':''} — ${r.why||r.genre||''}`)]:['Log a few movies first — then I suggest new ones every evening.']}
 return _answer16(t)};

/* ================= v17: movie diary — ask, photo, rate (me + Farnaz), taste profile, badges ================= */
const REACT=[['😍','Loved it'],['🙂','Good'],['😐','OK'],['👎','Didn’t like']];
const TAGS=['Great story','Acting','Action','Twist','Funny','Emotional','Visuals','Music','Too long','Boring','Confusing','Too violent'];
function ymd(off){return addDays(nowD().date,off)}
function askCard(where){const n=nowD(),morning=n.mins<16*60,L=media().filter(x=>!x.later),y=L.filter(x=>x.date===ymd(-1)),t=L.filter(x=>x.date===n.date),unrated=L.filter(x=>!x.rating).slice(0,1)[0];
 if(unrated)return `<div class="card mb askm" data-x="mrate" data-id="${unrated.id}"><span class="am-ic">⭐</span><div><b>How was “${esc(unrated.title)}”?</b><div class="xs faint">Rate it${unrated.with==='farnaz'?' — you and Farnaz':''} · +2 XP</div></div><button class="btn2 pri" data-x="mrate" data-id="${unrated.id}">Rate</button></div>`;
 const day=morning&&!y.length?-1:(!t.length?0:null);if(day===null)return '';
 return `<div class="card mb askm"><span class="am-ic">🎬</span><div><b>What did you watch ${day===-1?'last night':'today'}?</b><div class="xs faint">Movie, series or game · add a photo · +3 XP</div></div><button class="btn2 pri" data-x="mlog" data-d="${day}">Add</button>${where==='today'&&day===-1?'':''}</div>`}
function shrinkImg(file){return new Promise(res=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const W=240,s=W/im.width,c=document.createElement('canvas');c.width=W;c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',.72))};im.src=r.result};r.readAsDataURL(file)})}
function openLog(day){day=+day||0;sheet(head('What did you watch?','film','bg-p')+`<form id="mlogf">
 <div class="fld"><label>When</label><div class="seg3">${[[-1,'Yesterday'],[0,'Today']].map(([v,l])=>`<button type="button" class="${v===day?'on':''}" data-x="mpick" data-k="d" data-v="${v}">${l}</button>`).join('')}</div></div>
 <div class="fld"><label>Type</label><div class="seg3">${Object.entries(MT).map(([k,v],i)=>`<button type="button" class="${i===0?'on':''}" data-x="mpick" data-k="k" data-v="${k}">${v[0]} ${v[1]}</button>`).join('')}</div></div>
 <div class="fld"><label>Name</label><input class="inp" name="t" required placeholder="e.g. Ford v Ferrari" autocomplete="off"></div>
 <div class="fld"><label>Who watched</label><div class="seg3">${[['me','🙋 Just me'],['farnaz','💑 With Farnaz'],['family','👨‍👩‍👧‍👧 Family']].map(([k,l],i)=>`<button type="button" class="${i===0?'on':''}" data-x="mpick" data-k="w" data-v="${k}">${l}</button>`).join('')}</div></div>
 <div class="fld"><label>Photo / poster (optional)</label><label class="mphoto"><input type="file" name="ph" accept="image/*" hidden><span id="mphprev">📷 Tap to add a photo</span></label></div>
 <input type="hidden" name="d" value="${day}"><input type="hidden" name="k" value="movie"><input type="hidden" name="w" value="me">
 <button class="btn2 pri" style="width:100%">Next: rate it ⭐</button></form>`);
 const f=$('#mlogf');let ph='';f.ph.onchange=async()=>{const fl=f.ph.files[0];if(!fl)return;ph=await shrinkImg(fl);$('#mphprev').innerHTML=`<img src="${ph}" alt="">`};
 f.onsubmit=e=>{e.preventDefault();const x=addMedia({title:f.t.value.trim(),type:f.k.value,date:ymd(+f.d.value),with:f.w.value,photo:ph});xpFly(f.querySelector('.btn2'),'+3 XP');openRate(x.id)}}
function openRate(id){const x=media().find(y=>y.id===id);if(!x)return;const two=x.with==='farnaz'||x.with==='family',sel=x.tags||[];
 const starRow=(k,v)=>`<div class="bigstars" data-k="${k}">${[1,2,3,4,5].map(n=>`<button type="button" data-x="rstar" data-k="${k}" data-v="${n}" class="${n<=v?'on':''}">★</button>`).join('')}</div>`;
 sheet(head('Rate it','star','bg-a')+`<div class="rate-top">${x.poster||x.photo?`<img src="${esc(x.photo||x.poster)}" alt="">`:`<span>${MT[x.type]?.[0]||'🎬'}</span>`}<div><b>${esc(x.title)}</b><div class="xs faint">${esc([x.year,x.genre].filter(Boolean).join(' · ')||'Looking it up online…')}</div></div></div>
 <div class="fld"><label>Your rating</label>${starRow('rating',x.rating||0)}</div>
 ${two?`<div class="fld"><label>Farnaz’s rating</label>${starRow('ratingF',x.ratingF||0)}</div>`:''}
 <div class="fld"><label>How did it feel?</label><div class="reacts">${REACT.map(([e,l])=>`<button type="button" class="${x.react===e?'on':''}" data-x="rreact" data-v="${e}">${e}<small>${l}</small></button>`).join('')}</div></div>
 <div class="fld"><label>What stood out</label><div class="mtags">${TAGS.map(t=>`<button type="button" class="tkc ${sel.includes(t)?'on':''}" data-x="rtag" data-v="${t}">${t}</button>`).join('')}</div></div>
 <div class="fld"><label>Note (optional)</label><input class="inp" id="rnote" value="${esc(x.note||'')}" placeholder="One line — what you thought"></div>
 <button type="button" class="btn2 pri" data-x="rsave" data-id="${id}" style="width:100%">Save · +2 XP</button>`);
 window.__rd={id,rating:x.rating||0,ratingF:x.ratingF||0,react:x.react||'',tags:[...sel]}}
document.addEventListener('click',async e=>{const a=e.target.closest('[data-x]');if(!a)return;const d=a.dataset;
 if(d.x==='mlog'){e.stopPropagation();openLog(d.d);return}
 if(d.x==='mrate'&&!a.closest('.stars')){e.stopPropagation();openRate(d.id);return}
 if(d.x==='mpick'){a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===a));$('#mlogf')[d.k].value=d.v;return}
 const R=window.__rd;if(!R)return;
 if(d.x==='rstar'){R[d.k]=+d.v;a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',+b.dataset.v<=+d.v));if(navigator.vibrate)navigator.vibrate(8);return}
 if(d.x==='rreact'){R.react=d.v;a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===a));return}
 if(d.x==='rtag'){const i=R.tags.indexOf(d.v);i<0?R.tags.push(d.v):R.tags.splice(i,1);a.classList.toggle('on');return}
 if(d.x==='rsave'){const L=((U.kv.media||{}).v||[]).map(x=>x.id===R.id?{...x,rating:R.rating,ratingF:R.ratingF,react:R.react,tags:R.tags,note:($('#rnote')?.value||'').trim(),ratedAt:new Date().toISOString()}:x);saveMedia(L);
  closeSheet();if(R.rating>=5)confetti(40);toast('Saved ⭐ +2 XP');window.__rd=null;const b=newBadge();if(b)setTimeout(()=>{confetti(80);toast('🏅 New badge: '+b)},600);rerender();if(curPage()==='fun')renderFun()}});
/* taste profile */
function taste(who){const k=who==='farnaz'?'ratingF':'rating',L=media().filter(x=>!x.later&&x[k]),g={};
 L.forEach(x=>{const ws=((x.genre||'')+' '+(x.tags||[]).join(' ')).toLowerCase();['action','comedy','drama','thriller','crime','sci-fi','science fiction','horror','romance','animated','documentary','racing','war','biographical','fantasy','mystery'].forEach(t=>{if(ws.includes(t)){g[t]=g[t]||[0,0];g[t][0]+=x[k];g[t][1]++}})});
 const E=Object.entries(g).map(([t,[s,c]])=>[t,s/c,c]);return{n:L.length,loves:E.filter(e=>e[1]>=4).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>e[0]),dislikes:E.filter(e=>e[1]<=2.5).sort((a,b)=>a[1]-b[1]).slice(0,3).map(e=>e[0]),top:L.filter(x=>x[k]>=5).slice(0,3).map(x=>x.title),low:L.filter(x=>x[k]<=2).slice(0,3).map(x=>x.title)}}
const MBADGES=[['🍿 First night',L=>L.length>=1],['⭐ Critic',L=>L.filter(x=>x.rating).length>=10],['💑 Date night ×5',L=>L.filter(x=>x.with==='farnaz').length>=5],['🎞 Cinephile',L=>L.filter(x=>x.type==='movie').length>=30],['🔥 7-night streak',()=>mediaStats().st>=7],['🎮 Gamer',L=>L.filter(x=>x.type==='game').length>=5],['📝 Reviewer',L=>L.filter(x=>(x.tags||[]).length).length>=10]];
function badgesNow(){const L=media().filter(x=>!x.later);return MBADGES.filter(([,f])=>f(L)).map(b=>b[0])}
function newBadge(){const have=badgesNow(),seen=JSON.parse(ls.get('hq.mb')||'[]'),nw=have.find(b=>!seen.includes(b));ls.set('hq.mb',JSON.stringify(have));return nw}
function tasteCard(){const me=taste('me'),fz=taste('farnaz'),P=D.media_profile||{},bs=badgesNow();
 const col=(name,t,p)=>`<div class="tcol"><b>${name}</b>${(p&&p.loves||t.loves).length?`<div class="xs">❤️ ${esc((p&&p.loves||t.loves).join(', '))}</div>`:''}${(p&&p.dislikes||t.dislikes).length?`<div class="xs">👎 ${esc((p&&p.dislikes||t.dislikes).join(', '))}</div>`:''}${t.top.length?`<div class="xs faint">Top: ${esc(t.top.join(', '))}</div>`:''}${!t.n?'<div class="xs faint">Rate a few to learn</div>':''}</div>`;
 return `<div class="card s3"><div class="ch"><div class="ic bg-p">${ic('heart')}</div><h3>Your taste</h3><span class="aside">${me.n} rated</span></div>
 <div class="tcols">${col('🙋 Borna',me,P.me)}${col('💁‍♀️ Farnaz',fz,P.farnaz)}</div>${P.together?`<div class="note"><b>${ic('bulb')}Together</b>${esc(P.together)}</div>`:''}
 <div class="mbadges">${MBADGES.map(([b])=>`<span class="${bs.includes(b)?'on':''}">${b}</span>`).join('')}</div></div>`}
const _renderFun17=renderFun;renderFun=function(){_renderFun17();const el=$('#p-fun .g3');if(!el)return;
 const madd=el.querySelector('#madd');if(madd){const x=document.createElement('div');x.className='s3';x.innerHTML=askCard('fun')||`<button class="btn2 pri mbig" data-x="mlog" data-d="0">🎬 Log a movie, series or game</button>`;madd.replaceWith(x)}
 const recCardEl=[...el.querySelectorAll('.card')].find(c=>c.textContent.includes('Picked for you'));const t=document.createElement('div');t.innerHTML=tasteCard();(recCardEl||el.lastElementChild).after(t.firstElementChild);
 el.querySelectorAll('.mcard').forEach((c,i)=>{const del=c.querySelector('[data-x="mdel"]');const id=del&&del.dataset.id;const x=media().find(y=>y.id===id);if(!x)return;c.dataset.x='mrate';c.dataset.id=id;
  if(x.photo){const im=c.querySelector('.mp img');if(im)im.src=x.photo;else c.querySelector('.mp').insertAdjacentHTML('afterbegin',`<img src="${x.photo}" alt="">`)}
  c.querySelector('small')?.insertAdjacentHTML('beforeend',`${x.with==='farnaz'?' · 💑':''}${x.react?' · '+x.react:''}`)})};
/* Today: ask card (morning: last night · evening: tonight) */
const _renderToday17=renderToday;renderToday=function(G){_renderToday17(G);const t=$('#p-today .v8top');if(!t)return;t.querySelectorAll('.movienight').forEach(x=>x.remove());const h=askCard('today');if(!h)return;const x=document.createElement('div');x.innerHTML=h;t.insertBefore(x.firstElementChild,t.children[1]||null)};
const _habXP17=habXP;habXP=function(){return _habXP17()+media().filter(x=>x.rating).length*2};
/* recs show who it's for */
const _recCard17=recCard;recCard=function(r){return _recCard17(r).replace('<b>',`<b>${r.for==='together'?'<span class="forT">💑 For you two</span> ':''}`)};
PAGEFN.fun=()=>renderFun();

/* ================= v18: Log my day — remove "Other", add your own activities ================= */
const SUBJ_BASE=SUBJ.filter(s=>s.k!=='other');
const SUBJ_COL=[['bg-g','#10b981'],['bg-p','#ec4899'],['bg-o','#fb923c'],['bg-c','#22d3ee'],['bg-b','#60a5fa'],['bg-a','#fbbf24']];
const SUBJ_EM=['📚','💻','🎨','🎸','✍️','📈','🧘','🗣️','🏃','🎬'];
function subjCustom(){return ((U?.kv?.subj?.v)||[]).filter(s=>!s.deleted)}
function syncSubj(){const c=subjCustom().map((s,i)=>({k:s.k,n:s.n,em:s.em||'⭐',i:'book',bg:SUBJ_COL[i%SUBJ_COL.length][0],c:SUBJ_COL[i%SUBJ_COL.length][1],custom:1}));SUBJ.length=0;SUBJ_BASE.concat(c).forEach(s=>SUBJ.push(s))}
function saveSubj(list){U.kv=U.kv||{};U.kv.subj={v:list,updated:new Date().toISOString()};queueSave();syncSubj()}
const _render18=render;render=function(k){if(U)syncSubj();return _render18(k)};
const _openCheckin18=openCheckin;openCheckin=function(date){syncSubj();_openCheckin18(date);decorateSubj()};
function decorateSubj(){const f=$('#cf .subj')?.parentElement;if(!f)return;const rows=f.querySelectorAll('.subj');
 SUBJ.forEach((s,i)=>{const r=rows[i];if(!r||!s.custom)return;r.querySelector('.qi').textContent=s.em;r.querySelector('.qi').classList.add('emq');r.querySelector('.nm').insertAdjacentHTML('beforeend',`<button type="button" class="subjx" data-x="subjdel" data-k="${s.k}" aria-label="Remove">×</button>`)});
 if(!f.querySelector('.subjadd'))f.insertAdjacentHTML('beforeend',`<button type="button" class="subjadd" data-x="subjnew">${ic('plus')} Add activity</button>`)}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="subjnew"],[data-x="subjsave"],[data-x="subjcancel"],[data-x="subjdel"],[data-x="subjem"]');if(!a)return;e.preventDefault();e.stopPropagation();const x=a.dataset.x;
 if(x==='subjnew'){a.outerHTML=`<div class="subjform"><div class="ems">${SUBJ_EM.map((m,i)=>`<button type="button" class="${i?'':'on'}" data-x="subjem">${m}</button>`).join('')}</div><input class="inp" id="subjname" maxlength="20" placeholder="e.g. Reading, Guitar, Coding"><div class="btnrow"><button type="button" class="btn2" data-x="subjcancel">Cancel</button><button type="button" class="btn2 pri" data-x="subjsave">Add</button></div></div>`;setTimeout(()=>$('#subjname')?.focus(),50);return}
 if(x==='subjem'){a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===a));return}
 if(x==='subjcancel'){a.closest('.subjform').outerHTML=`<button type="button" class="subjadd" data-x="subjnew">${ic('plus')} Add activity</button>`;return}
 const date=$('#cf [data-name="date"] .opt.on')?.dataset.v;
 if(x==='subjsave'){const n=($('#subjname').value||'').trim();if(!n){$('#subjname').focus();return}
  const all=(U?.kv?.subj?.v)||[];if(SUBJ.some(s=>s.n.toLowerCase()===n.toLowerCase())){toast('Already there');return}
  const em=a.closest('.subjform').querySelector('.ems .on')?.textContent||'⭐';saveSubj(all.concat([{k:'c_'+uid(),n,em,created:new Date().toISOString()}]));
  keepForm(()=>openCheckin(date));toast(`${em} ${n} added`);return}
 if(x==='subjdel'){const s=SUBJ.find(z=>z.k===a.dataset.k);if(!s)return;if(a.dataset.sure!=='1'){a.dataset.sure='1';a.textContent='Remove?';a.classList.add('sure');setTimeout(()=>{if(a.isConnected){a.dataset.sure='';a.textContent='×';a.classList.remove('sure')}},2500);return}
  saveSubj(((U.kv.subj||{}).v||[]).map(z=>z.k===s.k?{...z,deleted:true}:z));keepForm(()=>openCheckin(date));toast(`${s.n} removed`)}
},true);
/* keep what was already typed/selected when the form re-draws */
function keepForm(redo){const f=$('#cf');if(!f){redo();return}const sel={},val={};
 f.querySelectorAll('.opts').forEach(g=>{const o=g.querySelector('.opt.on');if(o&&g.dataset.name!=='date')sel[g.dataset.name]=o.dataset.v});
 f.querySelectorAll('input[name],textarea[name]').forEach(i=>val[i.name]=i.type==='checkbox'?i.checked:i.value);
 redo();const g=$('#cf');if(!g)return;
 Object.entries(sel).forEach(([n,v])=>{const G=g.querySelector(`.opts[data-name="${n}"]`);if(!G)return;G.querySelectorAll('.opt').forEach(b=>b.classList.toggle('on',b.dataset.v===v))});
 Object.entries(val).forEach(([n,v])=>{const i=g.querySelector(`[name="${n}"]`);if(!i||i.disabled)return;if(i.type==='checkbox')i.checked=v;else i.value=v})}

/* ================= v19: working microphone in Talk to the app (iPhone too) ================= */
const MICL=[['en-US','EN'],['fa-IR','فارسی'],['ar-AE','عربي']];
let mic19=null;
function micStop(){if(mic19){try{mic19.stop()}catch(e){}}}
function micUI(on,msg){const b=$('#tkmic');if(b){b.classList.toggle('on',on);b.innerHTML=on?'<span class="micbars"><i></i><i></i><i></i></span>':ic('mic')}if(msg!=null){const h=$('#tkhint');if(h)h.innerHTML=msg}}
function micFallback(why){const ta=$('#tktext');ta&&ta.focus();micUI(false,`${why?why+'<br>':''}Tap the <b>🎙 key</b> on your keyboard (bottom right), speak, then tap send.`)}
function micStart(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition,ta=$('#tktext');if(!ta)return;
 if(mic19){micStop();return}
 if(!SR){micFallback('Voice input isn’t supported in this browser.');return}
 let R;try{R=new SR()}catch(e){micFallback();return}
 mic19=R;R.lang=ls.get('hq.lang')||'en-US';R.interimResults=true;R.continuous=!IOS;R.maxAlternatives=1;
 const pre0=ta.value.trim();let finalT='',got=false;
 R.onstart=()=>{micUI(true,'🔴 Listening… speak now · tap the mic to stop');if(navigator.vibrate)navigator.vibrate(15)};
 R.onresult=e=>{got=true;let interim='';for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i];if(r.isFinal)finalT+=r[0].transcript+' ';else interim+=r[0].transcript}
  ta.value=((pre0?pre0+' ':'')+finalT+interim).replace(/\s+/g,' ').trimStart();ta.dispatchEvent(new Event('input'))};
 R.onerror=e=>{const c=e.error||'';mic19=null;
  if(c==='not-allowed'||c==='service-not-allowed')micFallback(IOS?'Microphone is blocked. On iPhone: Settings → Safari → Microphone → Allow, and make sure Siri & Dictation is on.':'Microphone permission was blocked — allow it in the browser’s site settings.');
  else if(c==='no-speech')micUI(false,'I didn’t hear anything — tap the mic and try again.');
  else if(c==='aborted')micUI(false,'');
  else micFallback('Voice input had a problem ('+esc(c)+').')};
 R.onend=()=>{mic19=null;micUI(false,got?'✓ Got it — check the text, then tap send.':($('#tkhint')?.textContent.startsWith('🔴')?'I didn’t hear anything — tap the mic and try again.':null))};
 try{R.start()}catch(e){mic19=null;micFallback()}}
const _openTalk19=openTalk;openTalk=function(pre){_openTalk19(pre);const b=$('#tkmic');if(!b)return;
 const nb=b.cloneNode(true);b.replaceWith(nb);nb.addEventListener('click',e=>{e.preventDefault();micStart()});
 const h=$('#tkhint');if(h){h.innerHTML='Tap the mic and speak · choose your language:';h.insertAdjacentHTML('afterend',`<div class="miclang">${MICL.map(([l,n])=>`<button type="button" class="${(ls.get('hq.lang')||'en-US')===l?'on':''}" data-x="miclang" data-l="${l}">${n}</button>`).join('')}</div>`)}
 const v=$('.tkv');if(v)v.textContent='App v19'};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="miclang"]');if(!a)return;ls.set('hq.lang',a.dataset.l);a.parentElement.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===a));if(mic19){micStop()}toast('Voice language: '+a.textContent)});
const _sendTalk19=sendTalk;sendTalk=function(){micStop();return _sendTalk19()};
const _closeSheet19=closeSheet;closeSheet=function(){micStop();return _closeSheet19.apply(this,arguments)};

/* ================= v20: always open on Today ================= */
(function(){if(location.hash&&location.hash!=='#today'&&!/[?&]keep=1/.test(location.search))history.replaceState(null,'',location.pathname+location.search+'#today');
 let hid=0;document.addEventListener('visibilitychange',()=>{if(document.hidden){hid=Date.now();return}
  if(hid&&Date.now()-hid>10*60*1000&&curPage()!=='today'){location.hash='#today';window.scrollTo(0,0)}hid=0})})();
/* ================= v21: one-tap WhatsApp to Farnaz on Today ================= */
const FZ_MSGS=[['☀️','Good morning','صبح بخیر عزیزم ☀️❤️ امیدوارم روز خیلی خوبی داشته باشی'],['👧','Kids?','سلام عزیزم ❤️ بچه‌ها چطورن؟'],['🍽','Lunch?','سلام عزیزم ❤️ ناهار چی داریم امروز؟'],['🚗','Coming home','دارم میام خونه عزیزم ❤️ چیزی لازم نداری؟'],['❤️','Love you','دوستت دارم عزیزم ❤️']];
function fzCard(){const P=people(),f=P.find(x=>x.id==='p-farnaz')||P.find(x=>/farnaz/i.test(x.name||''));if(!f)return '';
 const num=f.phone?waNum(f.phone):'',h=nowD().mins,first=h<11*60?0:h>=17*60?3:-1;
 const L=FZ_MSGS.map((m,i)=>({m,i})).sort((a,b)=>(b.i===first)-(a.i===first));
 return `<div class="card mb fzq"><div class="fzh"><b>💑 Message Farnaz</b>${num?'':`<button type="button" class="xs faint fzadd" data-person="${esc(f.id)}">Add her number ›</button>`}</div><div class="fzrow">${L.map(({m,i})=>`<a class="fzc${i===first?' on':''}" href="https://wa.me/${num}?text=${encodeURIComponent(m[2])}" target="_blank" rel="noopener">${m[0]} ${esc(m[1])}</a>`).join('')}</div></div>`}
const _renderToday21=renderToday;renderToday=function(G){_renderToday21(G);const t=$('#p-today .v8top');if(!t)return;t.querySelectorAll('.fzq').forEach(x=>x.remove());const h=fzCard();if(!h)return;const x=document.createElement('div');x.innerHTML=h;t.insertBefore(x.firstElementChild,t.children[1]||null)};
const _openTalk21=openTalk;openTalk=function(pre){_openTalk21(pre);const v=$('.tkv');if(v)v.textContent='App v21'};

/* ================= v22: Dear diary · Notes (Evernote-style) · Vault · Refresh everything ================= */
P.search=P.search||'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>';
P.lock='<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>';
P.note='<path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 12h8M8 16h6"/>';
P.copy='<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>';
P.eye2='<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>';
P.diary='<path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M8 3v18M11 8h5M11 12h5"/>';

/* ---------- storage: notes.enc (own file so the main data stays small) ---------- */
let NB=null,nbLoaded=false,nbLoading=null,nbSha=null,nbTimer=null,nbSaving=false,nbAgain=false;
const nbEmpty=()=>({v:1,notes:[],books:[{id:'b-personal',n:'Personal',e:'🗒️',updated:''},{id:'b-business',n:'Business',e:'💼',updated:''},{id:'b-ideas',n:'Ideas',e:'💡',updated:''},{id:'b-links',n:'Links',e:'🔗',updated:''}],diary:[],vault:null,updated:null});
function nbMerge(a,b){a=a||nbEmpty();b=b||nbEmpty();const va=a.vault,vb=b.vault;
 return{v:1,notes:mergeArr(a.notes,b.notes),books:mergeArr(a.books,b.books),diary:mergeArr(a.diary,b.diary),vault:(vb&&(!va||(vb.updated||'')>(va.updated||'')))?vb:(va||null),updated:(a.updated||'')>(b.updated||'')?a.updated:b.updated}}
async function nbRemote(){
 if(!TOKEN){const j=await pagesJSON('notes.enc');return j?dec(j):null}
 const h={Authorization:'Bearer '+TOKEN};
 const r=await fetch(API+'notes.enc?ref=main&t='+Date.now(),{headers:{...h,Accept:'application/vnd.github+json'},cache:'no-store'});
 if(r.status===404){nbSha=null;return null}if(!r.ok)throw new Error('GitHub '+r.status);
 const j=await r.json();nbSha=j.sha;let txt;
 if(j.content&&j.encoding==='base64')txt=atob(j.content.replace(/\s/g,''));
 else{const r2=await fetch(API+'notes.enc?ref=main&t='+Date.now(),{headers:{...h,Accept:'application/vnd.github.raw'},cache:'no-store'});txt=await r2.text()}
 return dec(JSON.parse(txt))}
function nbCache(){try{localStorage.setItem('hq.notes',JSON.stringify(NB))}catch(e){}}
function loadNB(force){if(nbLoaded&&!force)return Promise.resolve(NB);if(nbLoading)return nbLoading;
 nbLoading=(async()=>{let local=null;try{const t=ls.get('hq.notes');if(t)local=JSON.parse(t)}catch(e){}
  if(!NB)NB=local||nbEmpty();let remote=null,ok=true;try{remote=await nbRemote()}catch(e){ok=false;console.warn(e)}
  const before=JSON.stringify(remote);NB=nbMerge(remote,NB);nbLoaded=true;nbCache();
  if(ok&&TOKEN&&JSON.stringify(NB)!==before&&(NB.notes.length||NB.diary.length||NB.vault))nbQueue(true);
  nbLoading=null;return NB})();return nbLoading}
function nbQueue(keepTime){if(!keepTime)NB.updated=new Date().toISOString();nbCache();if(!TOKEN)return;clearTimeout(nbTimer);nbTimer=setTimeout(nbSave,900)}
async function nbSave(){if(nbSaving){nbAgain=true;return}nbSaving=true;
 try{for(let i=0;i<3;i++){const remote=await nbRemote();const m=nbMerge(remote,NB);
   try{nbSha=await ghPut('notes.enc',await enc(m),nbSha,'Notes from app');NB=m;nbCache();break}catch(e){if(e.status!==409&&e.status!==422)throw e}}}
 catch(e){console.warn(e);toast('Notes saved on this phone — will sync later')}
 nbSaving=false;if(nbAgain){nbAgain=false;nbSave()}}
const nid=()=>'n'+uid();
const nowISO=()=>new Date().toISOString();

/* ---------- reusable dictation (tap mic → words appear in a text box) ---------- */
let dict=null;
function dictate(btn,ta,hint){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(dict){try{dict.stop()}catch(e){}return}
 if(!SR){ta.focus();if(hint)hint.innerHTML='Tap the <b>🎙 key</b> on your keyboard and speak.';return}
 let R;try{R=new SR()}catch(e){ta.focus();return}
 dict=R;R.lang=ls.get('hq.lang')||'en-US';R.interimResults=true;R.continuous=!IOS;
 const pre=ta.value.replace(/\s+$/,'');let fin='';
 R.onstart=()=>{btn.classList.add('on');if(hint)hint.textContent='🔴 Listening… tap the mic to stop'};
 R.onresult=e=>{let im='';for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i];if(r.isFinal)fin+=r[0].transcript+' ';else im+=r[0].transcript}
  ta.value=(pre?pre+(pre.endsWith('\n')?'':' '):'')+(fin+im).trim();ta.dispatchEvent(new Event('input'))};
 R.onerror=e=>{dict=null;btn.classList.remove('on');if(hint)hint.innerHTML=(e.error==='not-allowed'||e.error==='service-not-allowed')?'Microphone is blocked — allow it in Settings, or use the 🎙 key on your keyboard.':e.error==='no-speech'?'I didn’t hear anything — tap the mic again.':''};
 R.onend=()=>{dict=null;btn.classList.remove('on');if(hint&&hint.textContent.startsWith('🔴'))hint.textContent='✓ Done — edit if needed, then save.'};
 try{R.start()}catch(e){dict=null}}
function stopDict(){if(dict){try{dict.stop()}catch(e){}}}
const micLangs=()=>`<div class="miclang sm2">${[['en-US','EN'],['fa-IR','فارسی'],['ar-AE','عربي']].map(([l,n])=>`<button type="button" class="${(ls.get('hq.lang')||'en-US')===l?'on':''}" data-x="miclang" data-l="${l}">${n}</button>`).join('')}</div>`;

/* ---------- helpers ---------- */
const linkify=t=>esc(t).replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>').replace(/\n/g,'<br>');
const snip=(t,n=140)=>{t=(t||'').replace(/\s+/g,' ').trim();return t.length>n?t.slice(0,n)+'…':t};
const PWD_RX=/\b(pass(word)?|pwd|pin|رمز|پسورد)\b\s*[:=]/i;

/* =========================================================
   DEAR DIARY
   ========================================================= */
const DMOOD=['😢','😕','😐','🙂','😄','🤩'];
function diaryOn(d){return (NB?.diary||[]).filter(x=>!x.deleted&&x.date===d).sort((a,b)=>(a.at||'').localeCompare(b.at||''))}
function diaryStreak(){const ds=new Set((NB?.diary||[]).filter(x=>!x.deleted).map(x=>x.date));let s=0,d=nowD().date;if(!ds.has(d))d=addDays(d,-1);while(ds.has(d)&&s<999){s++;d=addDays(d,-1)}return s}
let diaryDay=null;
function diaryEntryHTML(e){return `<div class="dentry" data-x="dedit" data-id="${e.id}"><div class="dmeta"><span class="dmood">${e.mood!=null?DMOOD[e.mood]:'📝'}</span><span>${esc(new Date(e.at).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}))}</span>${e.voice?'<span class="pill2">🎙 spoken</span>':''}</div>${e.photo?`<img class="dphoto" src="${e.photo}" alt="">`:''}<div class="dtext">${linkify(e.text||'')}</div></div>`}
function diaryPanel(compact){if(!NB)return `<div class="faint sm">Loading your diary…</div>`;const n=nowD().date;diaryDay=diaryDay||n;
 const days=Array.from({length:14},(_,i)=>addDays(n,-i));const E=diaryOn(diaryDay),st=diaryStreak();
 return `<div class="dstrip">${days.map(d=>{const c=diaryOn(d).length;return `<button type="button" class="dday ${d===diaryDay?'on':''} ${c?'has':''}" data-x="dday" data-d="${d}"><small>${fd(d,{weekday:'short'}).slice(0,2)}</small><b>${fd(d,{day:'numeric'})}</b><i></i></button>`}).join('')}</div>
 <div class="dhead"><b>${diaryDay===n?'Today':fd(diaryDay,{weekday:'long',day:'numeric',month:'short'})}</b>${st?`<span class="pill2 fire">🔥 ${st}-day streak</span>`:''}</div>
 ${E.length?E.map(diaryEntryHTML).join(''):`<div class="dempty">${diaryDay===n?'Nothing yet today. What was memorable?':'No entry for this day.'}</div>`}
 <div class="dbtns"><button type="button" class="btn2 pri" data-x="dnew" data-voice="1">🎙 Speak</button><button type="button" class="btn2" data-x="dnew">✍️ Write</button></div>`}
function openDiary(id,voice,date){const e=(NB.diary||[]).find(x=>x.id===id)||{date:date||diaryDay||nowD().date};let photo=e.photo||'';
 sheet(head(id?'Diary entry':'Dear diary','diary','bg-p')+`<div class="sm muted" style="margin:-6px 0 10px">${fd(e.date,{weekday:'long',day:'numeric',month:'long'})}</div>
 <div class="fld"><label>How was it?</label><div class="dmoods">${DMOOD.map((m,i)=>`<button type="button" class="${e.mood===i?'on':''}" data-x="dmood" data-v="${i}">${m}</button>`).join('')}</div></div>
 <div class="fld"><label>Write or speak</label><div class="dwrap"><textarea id="dtext" class="inp" rows="7" placeholder="Dear diary, today…">${esc(e.text||'')}</textarea><button type="button" class="tk-mic dmic" id="dmic" aria-label="Speak">${ic('mic')}</button></div><div class="tk-hint" id="dhint"></div>${micLangs()}</div>
 <div class="fld"><label>Photo (optional)</label><div class="dphrow">${photo?`<img class="dphoto sm" id="dph" src="${photo}">`:'<span id="dph"></span>'}<label class="btn2 sm">📷 Add photo<input type="file" accept="image/*" id="dfile" hidden></label></div></div>
 <div class="btnrow">${id?`<button type="button" class="btn2 danger" data-x="ddel" data-id="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="dsave">Save</button></div>`);
 const ta=$('#dtext'),mb=$('#dmic'),hint=$('#dhint');let mood=e.mood,spoke=!!e.voice;
 mb.onclick=()=>{spoke=true;dictate(mb,ta,hint)};
 $$('#sheet [data-x="dmood"]').forEach(b=>b.onclick=()=>{mood=+b.dataset.v;$$('#sheet [data-x="dmood"]').forEach(x=>x.classList.toggle('on',x===b))});
 $('#dfile').onchange=async ev=>{const f=ev.target.files[0];if(!f)return;photo=await shrinkImg(f);$('#dph').outerHTML=`<img class="dphoto sm" id="dph" src="${photo}">`};
 $('#dsave').onclick=()=>{stopDict();const text=ta.value.trim();if(!text&&!photo){ta.focus();return}const t=nowISO();
  if(id){Object.assign(e,{text,mood,photo,voice:spoke,updated:t})}else{NB.diary.push({id:nid(),date:e.date,text,mood,photo,voice:spoke,at:t,created:t,updated:t});xpFly($('#dsave'),'+3 XP')}
  nbQueue();closeSheet();refreshDiaryViews();toast(id?'Updated ✓':'Saved to your diary 📔')};
 if(voice)setTimeout(()=>mb.click(),250)}
function refreshDiaryViews(){$$('.diarybox').forEach(b=>b.innerHTML=diaryPanel());const pg=curPage();if(pg==='today')rerender();if(pg==='notes'&&nTab==='diary')renderNotes()}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="dday"],[data-x="dnew"],[data-x="dedit"],[data-x="ddel"]');if(!a)return;const x=a.dataset.x;
 if(x==='dday'){diaryDay=a.dataset.d;$$('.diarybox').forEach(b=>b.innerHTML=diaryPanel());if(curPage()==='notes')renderNotes();return}
 if(x==='dnew'){loadNB().then(()=>openDiary(null,!!a.dataset.voice));return}
 if(x==='dedit'){openDiary(a.dataset.id);return}
 if(x==='ddel'){if(a.dataset.sure!=='1'){a.dataset.sure='1';a.innerHTML='Delete?';return}const it=NB.diary.find(z=>z.id===a.dataset.id);if(it){it.deleted=true;it.updated=nowISO();nbQueue()}closeSheet();refreshDiaryViews();toast('Deleted')}});
const _habXP22=habXP;habXP=function(){let x=_habXP22();if(NB)x+=new Set((NB.diary||[]).filter(d=>!d.deleted).map(d=>d.date)).size*3;return x};

/* Calendar: Dear diary card at the top + 📔 on today */
const _renderCalendar22=renderCalendar;renderCalendar=function(){_renderCalendar22();const el=$('#p-calendar');if(!el)return;
 const pt=el.querySelector('.pt');if(pt)pt.insertAdjacentHTML('afterend',`<div class="card mb diarycard"><div class="ch"><div class="ic bg-p">${ic('diary')}</div><h3>Dear diary</h3><span class="aside xs faint">notes & memorable moments</span></div><div class="diarybox">${diaryPanel()}</div></div>`);
 if(!nbLoaded)loadNB().then(()=>$$('.diarybox').forEach(b=>b.innerHTML=diaryPanel()))};

/* Today: evening prompt */
const _renderToday22=renderToday;renderToday=function(G){_renderToday22(G);const el=$('#p-today');if(!el)return;
 if(!nbLoaded){loadNB().then(()=>{if(curPage()==='today')rerender()});return}
 const h=new Date().getHours(),n=nowD().date,E=diaryOn(n);if(h<19&&!E.length)return;
 const html=E.length?`<div class="card mb diaryask done"><div class="da-ic">📔</div><div class="da-t"><b>Diary · ${E.length} note${E.length>1?'s':''} today</b><div class="xs faint">${esc(snip(E[E.length-1].text,70))}</div></div><button type="button" class="btn2" data-x="dnew" data-voice="1">🎙 Add</button></div>`
  :`<div class="card mb diaryask"><div class="da-ic">📔</div><div class="da-t"><b>Dear diary…</b><div class="xs faint">Anything memorable today? Say it in 20 seconds.</div></div><button type="button" class="btn2 pri" data-x="dnew" data-voice="1">🎙 Speak</button></div>`;
 const t=el.querySelector('.v8top');if(t)t.insertAdjacentHTML('afterend',html);else el.insertAdjacentHTML('afterbegin',html)};

/* =========================================================
   NOTES PAGE (Evernote-style) + VAULT
   ========================================================= */
PAGES.splice(PAGES.findIndex(p=>p.id==='calendar')+1,0,{id:'notes',l:'Notes',i:'note'});
(function(){if($('#p-notes'))return;const s=document.createElement('section');s.className='page';s.id='p-notes';($('#p-calendar')||$('#p-today')).after(s)})();
let nTab='notes',nBook='all',nQ='',nPwdOnly=false;
function books(){return (NB.books||[]).filter(b=>!b.deleted)}
function notesList(){return (NB.notes||[]).filter(n=>!n.deleted)}
function noteCard(n){const b=books().find(x=>x.id===n.nb);return `<div class="ncard ${n.pinned?'pin':''}" data-x="nopen" data-id="${n.id}"><div class="nt">${n.pinned?'📌 ':''}${esc(n.title||'Untitled')}</div><div class="ns">${esc(snip(n.body))}</div><div class="nm">${b?`<span>${b.e} ${esc(b.n)}</span>`:''}${(n.tags||[]).slice(0,3).map(t=>`<span class="tag">#${esc(t)}</span>`).join('')}${PWD_RX.test(n.body||'')?'<span class="tag warn">🔑</span>':''}<span class="faint">${(Date.now()-new Date(n.updated||n.created))>30*864e5?fd((n.updated||n.created).slice(0,10)):ago(n.updated||n.created)}</span></div></div>`}
function filteredNotes(){const q=nQ.toLowerCase();return notesList().filter(n=>(nBook==='all'||n.nb===nBook)&&(!nPwdOnly||PWD_RX.test(n.body||''))&&(!q||(n.title||'').toLowerCase().includes(q)||(n.body||'').toLowerCase().includes(q)||(n.tags||[]).join(' ').toLowerCase().includes(q))).sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(b.updated||'').localeCompare(a.updated||''))}
function renderNotesList(){const box=$('#nlist');if(!box)return;const L=filteredNotes();box.innerHTML=L.length?L.map(noteCard).join(''):`<div class="dempty">${nQ?'No notes match “'+esc(nQ)+'”':'No notes here yet — tap + New note.'}</div>`}
function renderNotes(){const el=$('#p-notes');if(!el||!D)return;
 if(!nbLoaded){el.innerHTML=`<div class="pt">Notes</div><div class="card"><div class="faint">Loading your notes…</div></div>`;loadNB().then(renderNotes);return}
 const N=notesList(),pw=N.filter(n=>PWD_RX.test(n.body||'')).length,vn=NB.vault?.n||0;
 el.innerHTML=`<div class="pt">Notes <span>${N.length} notes · ${books().length} notebooks</span></div>
 <div class="ntabs"><button type="button" class="${nTab==='notes'?'on':''}" data-x="ntab" data-t="notes">${ic('note')} Notes</button><button type="button" class="${nTab==='diary'?'on':''}" data-x="ntab" data-t="diary">${ic('diary')} Diary</button><button type="button" class="${nTab==='vault'?'on':''}" data-x="ntab" data-t="vault">${ic('lock')} Vault${vn?` <small>${vn}</small>`:''}</button></div>
 ${nTab==='notes'?`
  <div class="nsearch">${ic('search')}<input id="nq" class="inp" placeholder="Search all notes…" value="${esc(nQ)}"></div>
  <div class="nbooks"><button type="button" class="${nBook==='all'?'on':''}" data-x="nbook" data-b="all">All <small>${N.length}</small></button>${books().map(b=>`<button type="button" class="${nBook===b.id?'on':''}" data-x="nbook" data-b="${b.id}">${b.e} ${esc(b.n)} <small>${N.filter(n=>n.nb===b.id).length}</small></button>`).join('')}<button type="button" class="addb" data-x="nbnew">+ Notebook</button></div>
  ${pw&&!nPwdOnly?`<div class="nwarn" data-x="npwd">🔑 ${pw} note${pw>1?'s look':' looks'} like ${pw>1?'they contain':'it contains'} passwords — move them to the encrypted Vault ›</div>`:''}${nPwdOnly?`<div class="nwarn" data-x="npwd">Showing notes with passwords · tap to show all</div>`:''}
  <div class="nact"><button type="button" class="bigadd" data-x="nnew">${ic('plus')}New note</button><button type="button" class="bigadd alt2" data-x="nnew" data-voice="1">${ic('mic')}Voice note</button><label class="bigadd alt3">${ic('down')}Import Evernote<input type="file" accept=".enex,application/xml,text/xml" id="enex" hidden multiple></label></div>
  <div class="nlist" id="nlist"></div>`
 :nTab==='diary'?`<div class="card"><div class="diarybox">${diaryPanel()}</div></div>`
 :vaultHTML()}`;
 if(nTab==='notes'){renderNotesList();const q=$('#nq');q.oninput=()=>{nQ=q.value;renderNotesList()};$('#enex').onchange=ev=>importEnex(ev.target.files)}
 if(nTab==='vault')wireVault()}
PAGEFN.notes=()=>renderNotes();
const _draw22=draw;draw=function(pg){_draw22(pg);if(pg==='notes'&&!$('#p-notes .ntabs'))renderNotes()};

function openNote(id,voice){const n=(NB.notes||[]).find(x=>x.id===id)||{nb:nBook!=='all'?nBook:'b-personal',tags:[]};let nb=n.nb,pin=!!n.pinned;
 sheet(head(id?'Note':'New note','note','bg-v')+`
 <input id="ntitle" class="inp ntitle" placeholder="Title" value="${esc(n.title||'')}">
 <div class="dwrap"><textarea id="nbody" class="inp nbody" rows="12" placeholder="Write anything — text, emails, links…">${esc(n.body||'')}</textarea><button type="button" class="tk-mic dmic" id="nmic" aria-label="Dictate">${ic('mic')}</button></div><div class="tk-hint" id="nhint"></div>
 <div class="nlinks" id="nlinks"></div>
 <div class="fld"><label>Notebook</label><div class="nbooks sm2">${books().map(b=>`<button type="button" class="${nb===b.id?'on':''}" data-nb="${b.id}">${b.e} ${esc(b.n)}</button>`).join('')}</div></div>
 <div class="fld"><label>Tags</label><input id="ntags" class="inp" placeholder="e.g. travel, watches" value="${esc((n.tags||[]).join(', '))}"></div>
 <label class="chk"><input type="checkbox" id="npin" ${pin?'checked':''}> 📌 Pin to top</label>
 ${id&&PWD_RX.test(n.body||'')?`<button type="button" class="btn2" style="width:100%;margin-top:10px" data-x="n2vault" data-id="${id}">${ic('lock')} Move to Vault (encrypted)</button>`:''}
 <div class="btnrow">${id?`<button type="button" class="btn2 danger" data-x="ndel" data-id="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="nsave">Save</button></div>
 ${id?`<div class="xs faint" style="margin-top:8px;text-align:center">Created ${fd((n.created||'').slice(0,10)||nowD().date)} · edited ${ago(n.updated)}</div>`:''}`);
 const body=$('#nbody'),links=$('#nlinks');
 const showLinks=()=>{const L=(body.value.match(/https?:\/\/[^\s]+/g)||[]).slice(0,6);links.innerHTML=L.map(u=>`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">🔗 ${esc(u.replace(/^https?:\/\//,'').slice(0,40))}</a>`).join('')};showLinks();body.addEventListener('input',showLinks);
 $('#nmic').onclick=()=>dictate($('#nmic'),body,$('#nhint'));
 $$('#sheet [data-nb]').forEach(b=>b.onclick=()=>{nb=b.dataset.nb;$$('#sheet [data-nb]').forEach(x=>x.classList.toggle('on',x===b))});
 $('#nsave').onclick=()=>{stopDict();const title=$('#ntitle').value.trim(),text=body.value;if(!title&&!text.trim()){closeSheet();return}const t=nowISO();
  const tags=$('#ntags').value.split(',').map(s=>s.trim().replace(/^#/,'')).filter(Boolean);
  if(id)Object.assign(n,{title,body:text,nb,tags,pinned:$('#npin').checked,updated:t});else NB.notes.push({id:nid(),title,body:text,nb,tags,pinned:$('#npin').checked,created:t,updated:t});
  nbQueue();closeSheet();if(curPage()==='notes')renderNotes();toast('Saved ✓')};
 if(voice)setTimeout(()=>$('#nmic').click(),250);else if(!id)setTimeout(()=>$('#ntitle').focus(),200)}

document.addEventListener('click',e=>{const a=e.target.closest('[data-x^="n"]');if(!a)return;const x=a.dataset.x;
 if(x==='ntab'){nTab=a.dataset.t;renderNotes();return}
 if(x==='nbook'){nBook=a.dataset.b;renderNotes();return}
 if(x==='npwd'){nPwdOnly=!nPwdOnly;nBook='all';renderNotes();return}
 if(x==='nnew'){openNote(null,!!a.dataset.voice);return}
 if(x==='nopen'){openNote(a.dataset.id);return}
 if(x==='nbnew'){sheet(head('New notebook','note','bg-v')+`<div class="fld"><label>Emoji</label><div class="dmoods">${['📒','✈️','🏠','⌚','🐠','🎨','💰','👨‍👩‍👧','📚','🧠'].map((m,i)=>`<button type="button" class="${i?'':'on'}" data-em="${m}">${m}</button>`).join('')}</div></div><div class="fld"><label>Name</label><input id="nbname" class="inp" maxlength="24" placeholder="e.g. Travel"></div><div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="nbsave">Create</button></div>`);
  $$('#sheet [data-em]').forEach(b=>b.onclick=()=>$$('#sheet [data-em]').forEach(z=>z.classList.toggle('on',z===b)));
  $('#nbsave').onclick=()=>{const n=$('#nbname').value.trim();if(!n)return;const id='b-'+uid();NB.books.push({id,n,e:$('#sheet [data-em].on')?.dataset.em||'📒',updated:nowISO()});nbQueue();nBook=id;closeSheet();renderNotes()};return}
 if(x==='ndel'){if(a.dataset.sure!=='1'){a.dataset.sure='1';a.innerHTML='Delete?';return}const n=NB.notes.find(z=>z.id===a.dataset.id);if(n){n.deleted=true;n.updated=nowISO();nbQueue()}closeSheet();renderNotes();toast('Note deleted');return}
 if(x==='n2vault'){const n=NB.notes.find(z=>z.id===a.dataset.id);if(!n)return;if(!VK){closeSheet();nTab='vault';vPending=n.id;renderNotes();toast('Unlock the Vault first — then the note moves in');return}moveToVault(n);closeSheet();return}});

/* ---------- Evernote import (.enex export files) ---------- */
function enmlText(html){const d=new DOMParser().parseFromString('<div>'+String(html||'').replace(/<\?xml[^>]*>|<!DOCTYPE[^>]*>/gi,'').replace(/<\/?en-note[^>]*>/gi,'')+'</div>','text/html');
 d.querySelectorAll('br').forEach(b=>b.replaceWith('\n'));d.querySelectorAll('div,p,li,h1,h2,h3,tr').forEach(b=>b.append('\n'));d.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(h&&/^https?:/.test(h)&&!a.textContent.includes(h))a.append(' ('+h+')')});
 d.querySelectorAll('en-todo').forEach(t=>t.replaceWith(t.getAttribute('checked')==='true'?'☑ ':'☐ '));d.querySelectorAll('en-media').forEach(m=>m.replaceWith('[attachment]'));
 return d.body.textContent.replace(/\n{3,}/g,'\n\n').trim()}
const enDate=s=>{const m=/^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)/.exec(s||'');return m?`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z`:nowISO()};
function hashStr(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return (h>>>0).toString(36)}
async function importEnex(files){if(!files||!files.length)return;let added=0,skipped=0,pw=0;
 for(const f of files){const xml=new DOMParser().parseFromString(await f.text(),'text/xml');const bn=f.name.replace(/\.enex$/i,'').slice(0,24)||'Evernote';
  let book=books().find(b=>b.n.toLowerCase()===bn.toLowerCase());if(!book){book={id:'b-'+uid(),n:bn,e:'🐘',updated:nowISO()};NB.books.push(book)}
  xml.querySelectorAll('note').forEach(no=>{const title=no.querySelector('title')?.textContent||'Untitled',cr=enDate(no.querySelector('created')?.textContent),up=enDate(no.querySelector('updated')?.textContent||no.querySelector('created')?.textContent);
   const id='ev'+hashStr(title+cr);if(NB.notes.some(n=>n.id===id)){skipped++;return}
   let body=enmlText(no.querySelector('content')?.textContent);if(body.length>30000)body=body.slice(0,30000)+'\n…(trimmed)';
   const src=no.querySelector('note-attributes source-url')?.textContent;if(src&&!body.includes(src))body+='\n\n'+src;
   if(PWD_RX.test(body))pw++;
   NB.notes.push({id,title,body,nb:book.id,tags:[...no.querySelectorAll('tag')].map(t=>t.textContent).slice(0,8),created:cr,updated:up,from:'evernote'});added++})}
 nbQueue();nBook='all';renderNotes();
 sheet(head('Evernote import','note','bg-g')+`<div class="lvup"><div class="lvb">🐘 ${added}</div><h2>${added} notes imported</h2><p>${skipped?skipped+' already here (skipped). ':''}Pictures and attachments stay in Evernote — the text, links and tags are here.${pw?`<br><br>🔑 <b>${pw}</b> look like they contain passwords. Open them and tap <b>Move to Vault</b> so they’re locked with your own Vault password.`:''}</p><button class="btn2 pri" data-act="close" style="width:100%">Done</button></div>`);
 confetti(50)}

/* ---------- VAULT: passwords encrypted with a separate master password only you know ---------- */
let VK=null,VI=null,vTimer=null,vQ='',vPending=null;
async function vKey(pass,salt){const base=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',hash:'SHA-256',salt:b64d(salt),iterations:400000},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
async function vSeal(){const iv=crypto.getRandomValues(new Uint8Array(12));const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},VK.k,new TextEncoder().encode(JSON.stringify(VI))));
 NB.vault={salt:VK.salt,iv:b64e(iv),ct:b64e(ct),n:VI.filter(x=>!x.deleted).length,updated:nowISO()};nbQueue()}
function vLock(msg){VK=null;VI=null;clearTimeout(vTimer);if(curPage()==='notes'&&nTab==='vault')renderNotes();if(msg)toast(msg)}
function vArm(){clearTimeout(vTimer);vTimer=setTimeout(()=>vLock('Vault locked 🔒'),3*60*1000)}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&VK)vLock()});
function vaultHTML(){const V=NB.vault;
 if(!VK)return `<div class="card vlock"><div class="vl-ic">${ic('lock')}</div>${V?`<h3>Vault is locked</h3><p class="sm muted">${V.n||0} saved logins. Enter your Vault password.</p>`:`<h3>Create your Vault</h3><p class="sm muted">Store passwords, emails, PINs and links. Everything is encrypted on this phone with a <b>Vault password only you know</b> — not even Claude can read it.<br><br>⚠️ If you forget it, the Vault can’t be recovered. Pick something memorable.</p>`}
  <input type="password" id="vpw" class="inp" placeholder="Vault password" autocomplete="current-password">${V?'':'<input type="password" id="vpw2" class="inp" placeholder="Repeat Vault password" style="margin-top:8px">'}
  <div class="tk-hint" id="vmsg"></div><button type="button" class="btn2 pri" id="vgo" style="width:100%;margin-top:8px">${V?'Unlock':'Create Vault'}</button></div>`;
 const L=VI.filter(x=>!x.deleted&&(!vQ||[x.t,x.u,x.url,x.n].join(' ').toLowerCase().includes(vQ.toLowerCase()))).sort((a,b)=>(a.t||'').localeCompare(b.t||''));
 return `<div class="vbar"><div class="nsearch">${ic('search')}<input id="vq" class="inp" placeholder="Search logins…" value="${esc(vQ)}"></div><button type="button" class="btn2" data-x="vlock">${ic('lock')} Lock</button></div>
 <button type="button" class="bigadd" data-x="vnew" style="width:100%;margin-bottom:12px">${ic('plus')}Add login / secret</button>
 <div class="vlist">${L.length?L.map(x=>`<div class="vrow"><div class="vav">${esc((x.t||'?').slice(0,1).toUpperCase())}</div><div class="vtx" data-x="vedit" data-id="${x.id}"><b>${esc(x.t||'Untitled')}</b><small>${esc(x.u||x.url||'')}</small></div>${x.u?`<button type="button" class="vbtn" data-x="vcopy" data-id="${x.id}" data-f="u" title="Copy username">👤</button>`:''}${x.p?`<button type="button" class="vbtn" data-x="vcopy" data-id="${x.id}" data-f="p" title="Copy password">${ic('key')}</button>`:''}${x.url?`<a class="vbtn" href="${esc(/^https?:/.test(x.url)?x.url:'https://'+x.url)}" target="_blank" rel="noopener noreferrer">↗</a>`:''}</div>`).join(''):`<div class="dempty">${vQ?'Nothing matches.':'Empty — add your first login.'}</div>`}</div>
 <div class="xs faint" style="text-align:center;margin-top:10px">🔒 Locks automatically after 3 minutes or when you leave the app.</div>`}
function wireVault(){const go=$('#vgo');if(go){const pw=$('#vpw');pw.focus();pw.onkeydown=e=>{if(e.key==='Enter')go.click()};
  go.onclick=async()=>{const p=pw.value,msg=$('#vmsg');if(p.length<4){msg.textContent='At least 4 characters.';return}
   go.disabled=true;go.textContent='…';
   try{const V=NB.vault;if(!V){if(p!==$('#vpw2').value){msg.textContent='The two passwords don’t match.';go.disabled=false;go.textContent='Create Vault';return}
     const salt=b64e(crypto.getRandomValues(new Uint8Array(16)));VK={k:await vKey(p,salt),salt};VI=[];await vSeal();toast('Vault created 🔒')}
    else{const k=await vKey(p,V.salt);const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64d(V.iv)},k,b64d(V.ct));VI=JSON.parse(new TextDecoder().decode(pt));VK={k,salt:V.salt}}
    vArm();if(vPending){const n=NB.notes.find(z=>z.id===vPending);vPending=null;if(n){moveToVault(n);return}}renderNotes()}
   catch(e){msg.textContent='Wrong Vault password.';go.disabled=false;go.textContent='Unlock';if(navigator.vibrate)navigator.vibrate([30,40,30])}};return}
 const q=$('#vq');if(q)q.oninput=()=>{vQ=q.value;vArm();const pos=q.selectionStart;renderNotes();const q2=$('#vq');q2.focus();q2.setSelectionRange(pos,pos)}}
function genPw(n=16){const c='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?';const r=crypto.getRandomValues(new Uint32Array(n));return [...r].map(x=>c[x%c.length]).join('')}
function openVaultItem(id){vArm();const x=VI.find(z=>z.id===id)||{};
 sheet(head(id?esc(x.t||'Login'):'New login','lock','bg-o')+`
 <div class="fld"><label>Name</label><input id="vt" class="inp" value="${esc(x.t||'')}" placeholder="e.g. Gmail, Emirates NBD app, Wi-Fi"></div>
 <div class="fld"><label>Username / email</label><input id="vu" class="inp" value="${esc(x.u||'')}" autocomplete="off" autocapitalize="off"></div>
 <div class="fld"><label>Password</label><div class="vpw"><input id="vp" class="inp" type="password" value="${esc(x.p||'')}" autocomplete="off"><button type="button" class="vbtn" id="vshow">${ic('eye2')}</button><button type="button" class="vbtn" id="vgen" title="Generate">🎲</button></div></div>
 <div class="fld"><label>Website / link</label><input id="vurl" class="inp" value="${esc(x.url||'')}" autocapitalize="off" placeholder="https://"></div>
 <div class="fld"><label>Notes (PIN, security questions…)</label><textarea id="vn" class="inp" rows="3">${esc(x.n||'')}</textarea></div>
 <div class="btnrow">${id?`<button type="button" class="btn2 danger" data-x="vdel" data-id="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="vsave">Save</button></div>`);
 $('#vshow').onclick=()=>{const p=$('#vp');p.type=p.type==='password'?'text':'password'};
 $('#vgen').onclick=()=>{const p=$('#vp');p.value=genPw();p.type='text'};
 $('#vsave').onclick=async()=>{if(!VK){closeSheet();toast('Vault locked — unlock and try again');return}const t=nowISO(),o={t:$('#vt').value.trim(),u:$('#vu').value.trim(),p:$('#vp').value,url:$('#vurl').value.trim(),n:$('#vn').value,updated:t};
  if(!o.t&&!o.u&&!o.p)return;if(id)Object.assign(x,o);else VI.push({id:'v'+uid(),created:t,...o});await vSeal();closeSheet();renderNotes();toast('Saved in Vault 🔒')}}
async function moveToVault(n){VI.push({id:'v'+uid(),t:n.title||'From notes',u:'',p:'',url:((n.body||'').match(/https?:\/\/[^\s]+/)||[''])[0],n:n.body,created:nowISO(),updated:nowISO()});await vSeal();
 n.deleted=true;n.updated=nowISO();nbQueue();nTab='vault';renderNotes();toast('Moved to Vault 🔒 — removed from notes')}
document.addEventListener('click',async e=>{const a=e.target.closest('[data-x^="v"]');if(!a||!a.dataset.x)return;const x=a.dataset.x;if(!['vnew','vedit','vcopy','vlock','vdel'].includes(x))return;
 if(x==='vlock'){vLock('Vault locked 🔒');return}if(!VK){vLock();return}
 if(x==='vnew'){openVaultItem(null);return}if(x==='vedit'){openVaultItem(a.dataset.id);return}
 if(x==='vcopy'){vArm();const it=VI.find(z=>z.id===a.dataset.id);if(!it)return;try{await navigator.clipboard.writeText(it[a.dataset.f]||'');toast(a.dataset.f==='p'?'Password copied · clears in 30s':'Username copied');if(a.dataset.f==='p')setTimeout(()=>navigator.clipboard.writeText('').catch(()=>{}),30000)}catch(err){toast('Could not copy')}return}
 if(x==='vdel'){if(a.dataset.sure!=='1'){a.dataset.sure='1';a.innerHTML='Delete?';return}const it=VI.find(z=>z.id===a.dataset.id);if(it){it.deleted=true;it.updated=nowISO();await vSeal()}closeSheet();renderNotes();toast('Deleted')}});
const _closeSheet22=closeSheet;closeSheet=function(){stopDict();return _closeSheet22.apply(this,arguments)};

/* =========================================================
   REFRESH EVERYTHING (live data)
   ========================================================= */
function freshRows(){const sw=D.sweeps;const lastSweep=Array.isArray(sw)?sw.map(s=>s.at||s.date||s.time||'').sort().pop():(sw&&typeof sw==='object'?Object.values(sw).map(v=>(v&&(v.at||v.updated))||v).filter(v=>typeof v==='string').sort().pop():'');
 return [['📈','Social numbers',D.social_updated,'every 30 min'],['💬','WhatsApp & email sweep',lastSweep||D.inbox_status?.checked||D.inbox_status?.updated,'5× a day'],['🛍️','Shopping',(D.shop_summary||{}).updated,'twice a day'],['🧠','All app data',D.updated,'live']].filter(r=>r[2])}
function nextSocial(){const d=new Date(),m=d.getMinutes(),add=m<10?10-m:m<40?40-m:70-m;const t=new Date(d.getTime()+add*60000);return t.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
function openRefresh(){sheet(head('Live data','refresh','bg-grad')+`<div class="frows">${freshRows().map(([e,n,t,f])=>`<div class="frow"><span class="fe">${e}</span><div><b>${n}</b><small>checked ${ago(t)} · ${f}</small></div><i class="fdot ${(Date.now()-new Date(t))<45*60000?'g':(Date.now()-new Date(t))<4*3600000?'a':'r'}"></i></div>`).join('')}</div>
 <button type="button" class="btn2 pri" id="rfall" style="width:100%;margin-top:12px">${ic('refresh')} Refresh everything now</button>
 <div class="xs faint" style="margin-top:10px">Pulls the newest data straight from your account (no cache). Claude re-checks your social accounts every 30 minutes — next check at ${nextSocial()}. Instagram only reports <b>organic</b> views; paid (boosted) views show in the Instagram app.</div>`);
 $('#rfall').onclick=async()=>{const b=$('#rfall');b.disabled=true;b.innerHTML=ic('refresh')+' Refreshing…';await refreshAll(true);closeSheet()}}
let rfBusy=false,lastRf=Date.now();
async function refreshAll(loud){if(rfBusy)return;rfBusy=true;const before=D.updated;
 try{let blob=null;if(TOKEN){try{blob=(await ghGet('data.enc'))?.json}catch(e){}}if(!blob)blob=await pagesJSON('data.enc');
  D=await dec(blob);await loadUser();try{SH=null;if(typeof loadShop==='function')await loadShop(true)}catch(e){}try{await loadNB(true)}catch(e){}
  render();lastRf=Date.now();if(loud)toast(D.updated!==before?'Updated ✓ newest data loaded':'Already up to date ✓ · '+ago(D.updated))}
 catch(e){console.warn(e);if(loud)toast('Could not refresh — check your connection')}rfBusy=false}
(function(){const r=$('#refresh');if(r){const nb=r.cloneNode(true);r.replaceWith(nb);nb.innerHTML=ic('refresh');nb.onclick=openRefresh}})();
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&D&&Date.now()-lastRf>5*60000)refreshAll(false)});
setInterval(()=>{if(!document.hidden&&D&&Date.now()-lastRf>10*60000)refreshAll(false)},60000);
document.addEventListener('click',e=>{const s=e.target.closest('.fresh');if(s){e.preventDefault();openRefresh()}});
const _openTalk22=openTalk;openTalk=function(pre){_openTalk22(pre);const v=$('.tkv');if(v)v.textContent='App v22'};

/* ================= v23: Notes easy to find + Evernote-style home, templates, checklists, copy ================= */
/* 1. Put Notes right after Today in the bottom bar and rebuild the bars (v22 forgot this) */
(function(){const i=PAGES.findIndex(p=>p.id==='notes');if(i>-1){const [n]=PAGES.splice(i,1);PAGES.splice(1,0,n)}
 buildNav();$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');$$('#tabs [data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p})})();
/* + sheet: New note / Voice note at the top */
if($('#fab'))$('#fab').onclick=()=>openActions();
const _openActions_n23=openActions;openActions=function(){_openActions_n23();const a=$('#sheet .actions');if(!a)return;
 a.insertAdjacentHTML('afterbegin',`<button class="action" data-x="nnew"><span class="qi bg-v">${ic('note')}</span><b>New note</b><small>Text, emails, links, lists</small></button><button class="action" data-x="dnew" data-voice="1"><span class="qi bg-p">${ic('diary')}</span><b>Dear diary</b><small>Say what happened today</small></button>`)};

/* 2. Templates */
const NTPL=[['📝','Blank','',''],['☑️','Checklist','Checklist','☐ \n☐ \n☐ '],['🤝','Meeting notes','Meeting — ','Who: \nWhere: \nGoal: \n\nNotes:\n• \n\nNext steps:\n☐ '],['💡','Idea','Idea: ','What: \nWhy it can make money: \nFirst step:\n☐ '],['🛒','Shopping list','Shopping','☐ \n☐ \n☐ '],['✈️','Travel','Trip to ','Dates: \nFlight: \nHotel: \n\nPacking:\n☐ Passport\n☐ Charger\n☐ '],['🔑','Login / account','',''],['📧','Email & contact','','Name: \nEmail: \nPhone: \nCompany: \nNotes: ']];
function openTemplates(){sheet(head('New note','note','bg-v')+`<div class="tpls">${NTPL.map((t,i)=>`<button type="button" class="tpl" data-tpl="${i}"><span>${t[0]}</span><b>${t[1]}</b></button>`).join('')}</div>`);
 $$('#sheet [data-tpl]').forEach(b=>b.onclick=()=>{const t=NTPL[+b.dataset.tpl];if(t[1]==='Login / account'){closeSheet();nTab='vault';location.hash='#notes';setTimeout(()=>{renderNotes();if(VK)openVaultItem(null)},80);return}openNote(null,false,{title:t[2],body:t[3]})})}

/* 3. Checklists + quick copy helpers */
function checkStats(b){const m=(b||'').match(/^[☐☑]/gm)||[];return m.length?{done:m.filter(x=>x==='☑').length,all:m.length}:null}
function copyChips(text){const out=[],seen=new Set();const add=(k,v,l)=>{if(!v||seen.has(v))return;seen.add(v);out.push({k,v,l})};
 (text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/g)||[]).slice(0,4).forEach(e=>add('📧',e,e));
 (text.match(/(?:pass(?:word)?|pwd|pin|رمز|پسورد)\s*[:=]\s*\S+/gi)||[]).slice(0,4).forEach(m=>{const v=m.split(/[:=]/).slice(1).join(':').trim();add('🔑',v,'••••••')});
 (text.match(/\b(?:user(?:name)?|login)\s*[:=]\s*\S+/gi)||[]).slice(0,3).forEach(m=>{const v=m.split(/[:=]/).slice(1).join(':').trim();add('👤',v,v)});
 (text.match(/\+?\d[\d\s-]{7,}\d/g)||[]).slice(0,3).forEach(p=>add('📞',p.replace(/\s+/g,' ').trim(),p.trim()));
 return out}
async function copyText(v,label){try{await navigator.clipboard.writeText(v);toast((label||'Copied')+' ✓')}catch(e){const t=document.createElement('textarea');t.value=v;document.body.appendChild(t);t.select();try{document.execCommand('copy');toast('Copied ✓')}catch(_){toast('Could not copy')}t.remove()}}

/* 4. New note editor (Evernote-like) */
openNote=function(id,voice,tpl){const n=(NB.notes||[]).find(x=>x.id===id)||{nb:nBook!=='all'?nBook:'b-personal',tags:[],title:tpl?.title||'',body:tpl?.body||''};let nb=n.nb;
 sheet(head(id?'Note':'New note','note','bg-v')+`
 <input id="ntitle" class="inp ntitle" placeholder="Title" value="${esc(n.title||'')}">
 <div class="ntool"><button type="button" data-ins="☐ " title="Checkbox">☑️</button><button type="button" data-ins="• " title="Bullet">•</button><button type="button" data-ins="# " title="Heading">H</button><button type="button" data-ins="date" title="Date">📅</button><button type="button" data-ins="---" title="Line">—</button><button type="button" id="ncopyall" title="Copy note">${ic('copy')}</button><button type="button" class="tk-mic" id="nmic" aria-label="Dictate">${ic('mic')}</button></div>
 <textarea id="nbody" class="inp nbody" rows="12" placeholder="Write anything — notes, emails, passwords, links, lists…">${esc(n.body||'')}</textarea><div class="tk-hint" id="nhint"></div>
 <div class="nchips" id="nchips"></div>
 <div class="nchk" id="nchk"></div>
 <div class="fld"><label>Notebook</label><div class="nbooks sm2">${books().map(b=>`<button type="button" class="${nb===b.id?'on':''}" data-nb="${b.id}">${b.e} ${esc(b.n)}</button>`).join('')}</div></div>
 <div class="two"><div class="fld"><label>Tags</label><input id="ntags" class="inp" placeholder="travel, watches" value="${esc((n.tags||[]).join(', '))}"></div><div class="fld"><label>⏰ Remind me</label><input id="nrem" class="inp" type="date" value="${esc(n.remind||'')}"></div></div>
 <div class="ntoggles"><label class="chk"><input type="checkbox" id="npin" ${n.pinned?'checked':''}> 📌 Pin</label><label class="chk"><input type="checkbox" id="nfav" ${n.fav?'checked':''}> ⭐ Shortcut</label></div>
 ${id&&PWD_RX.test(n.body||'')?`<button type="button" class="btn2 ghost" style="width:100%;margin-top:8px" data-x="n2vault" data-id="${id}">${ic('lock')} Lock this note in the Vault</button>`:''}
 <div class="btnrow">${id?`<button type="button" class="btn2 danger" data-x="ndel" data-id="${id}">${ic('trash')}</button><button type="button" class="btn2" data-x="ndup" data-id="${id}" title="Duplicate">⧉</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="nsave">Save</button></div>
 ${id?`<div class="xs faint" style="margin-top:8px;text-align:center">Created ${fd((n.created||nowISO()).slice(0,10))} · edited ${ago(n.updated)}</div>`:''}`);
 const body=$('#nbody');
 const refresh=()=>{const C=copyChips(body.value),L=(body.value.match(/https?:\/\/[^\s]+/g)||[]).slice(0,5);
  $('#nchips').innerHTML=C.map((c,i)=>`<button type="button" class="nchip" data-ci="${i}">${c.k} <span>${esc(c.l.length>28?c.l.slice(0,26)+'…':c.l)}</span> ${ic('copy')}</button>`).join('')+L.map(u=>`<a class="nchip lnk" href="${esc(u)}" target="_blank" rel="noopener noreferrer">🔗 <span>${esc(u.replace(/^https?:\/\/(www\.)?/,'').slice(0,30))}</span></a>`).join('');
  $$('#nchips [data-ci]').forEach(b=>b.onclick=()=>copyText(C[+b.dataset.ci].v,C[+b.dataset.ci].k==='🔑'?'Password copied':'Copied'));
  const lines=body.value.split('\n'),cl=lines.map((l,i)=>({l,i})).filter(x=>/^[☐☑]/.test(x.l));
  $('#nchk').innerHTML=cl.length?`<div class="xs faint" style="margin:6px 0 4px">Tap to tick · ${cl.filter(x=>x.l[0]==='☑').length}/${cl.length} done</div>`+cl.map(x=>`<button type="button" class="nck ${x.l[0]==='☑'?'on':''}" data-li="${x.i}"><i>${x.l[0]==='☑'?'✓':''}</i><span>${esc(x.l.slice(1).trim()||'…')}</span></button>`).join(''):'';
  $$('#nchk [data-li]').forEach(b=>b.onclick=()=>{const L2=body.value.split('\n'),k=+b.dataset.li;L2[k]=(L2[k][0]==='☑'?'☐':'☑')+L2[k].slice(1);body.value=L2.join('\n');if(navigator.vibrate)navigator.vibrate(8);refresh()})};
 refresh();body.addEventListener('input',()=>{clearTimeout(body._t);body._t=setTimeout(refresh,250)});
 $$('#sheet [data-ins]').forEach(b=>b.onclick=()=>{let ins=b.dataset.ins;if(ins==='date')ins=fd(nowD().date,{weekday:'short',day:'numeric',month:'short',year:'numeric'})+' ';if(ins==='---')ins='\n────────\n';
  const s=body.selectionStart??body.value.length,v=body.value,ls0=v.lastIndexOf('\n',s-1)+1;
  if(/^(☐ |• |# )$/.test(ins)&&s===ls0){body.value=v.slice(0,s)+ins+v.slice(s)}else if(/^(☐ |• |# )$/.test(ins)){body.value=v.slice(0,s)+'\n'+ins+v.slice(s);ins='\n'+ins}else body.value=v.slice(0,s)+ins+v.slice(s);
  body.focus();body.setSelectionRange(s+ins.length,s+ins.length);refresh()});
 body.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const s=body.selectionStart,v=body.value,ls0=v.lastIndexOf('\n',s-1)+1,cur=v.slice(ls0,s),m=cur.match(/^(☐ |☑ |• )/);if(!m)return;
  e.preventDefault();if(cur.trim()===m[1].trim()){body.value=v.slice(0,ls0)+v.slice(s);body.setSelectionRange(ls0,ls0);return}const p=m[1]==='☑ '?'☐ ':m[1];body.value=v.slice(0,s)+'\n'+p+v.slice(s);body.setSelectionRange(s+1+p.length,s+1+p.length)});
 $('#ncopyall').onclick=()=>copyText(($('#ntitle').value?$('#ntitle').value+'\n\n':'')+body.value,'Note copied');
 $('#nmic').onclick=()=>dictate($('#nmic'),body,$('#nhint'));
 $$('#sheet [data-nb]').forEach(b=>b.onclick=()=>{nb=b.dataset.nb;$$('#sheet [data-nb]').forEach(x=>x.classList.toggle('on',x===b))});
 $('#nsave').onclick=()=>{stopDict();const title=$('#ntitle').value.trim(),text=body.value;if(!title&&!text.trim()){closeSheet();return}const t=nowISO();
  const o={title,body:text,nb,tags:$('#ntags').value.split(',').map(s=>s.trim().replace(/^#/,'')).filter(Boolean),pinned:$('#npin').checked,fav:$('#nfav').checked,remind:$('#nrem').value||'',updated:t};
  if(id)Object.assign(n,o);else NB.notes.push({id:nid(),created:t,...o});nbQueue();closeSheet();if(curPage()==='notes')renderNotes();else if(curPage()==='today')rerender();toast('Saved ✓')};
 if(voice)setTimeout(()=>$('#nmic').click(),250);else if(!id)setTimeout(()=>(tpl?.body?body:$('#ntitle')).focus(),200)};

/* 5. Notes home (Evernote-style): scratch pad, shortcuts, recent, notebooks, all notes */
const _renderNotes_n23=renderNotes;renderNotes=function(){_renderNotes_n23();const el=$('#p-notes');if(!el||!nbLoaded||nTab!=='notes')return;
 const N=notesList(),fav=N.filter(n=>n.fav||n.pinned).slice(0,8),rec=N.slice().sort((a,b)=>(b.updated||'').localeCompare(a.updated||'')).slice(0,6),sp=(NB.notes||[]).find(n=>n.id==='scratch');
 const act=el.querySelector('.nact');if(act)act.innerHTML=`<button type="button" class="bigadd" data-x="ntpl">${ic('plus')}New note</button><button type="button" class="bigadd alt2" data-x="nnew" data-voice="1">${ic('mic')}Voice note</button><label class="bigadd alt3">${ic('down')}Import Evernote<input type="file" accept=".enex,application/xml,text/xml" id="enex" hidden multiple></label>`;
 const w=el.querySelector('.nwarn');if(w&&!nPwdOnly){const k=notesList().filter(n=>PWD_RX.test(n.body||'')).length;w.classList.add('soft');w.innerHTML=`🔑 ${k} note${k>1?'s have':' has'} a password — fine to keep here; for extra safety you can lock ${k>1?'them':'it'} in the Vault ›`}
 const ei=$('#enex');if(ei)ei.onchange=ev=>importEnex(ev.target.files);
 if(nQ||nBook!=='all'||nPwdOnly)return;
 const home=`<div class="nhome">
  <div class="card scratch"><div class="sch"><b>✏️ Scratch pad</b><span class="xs faint" id="spst">quick notes · saves by itself</span></div><textarea id="spad" class="inp" rows="3" placeholder="Jot anything — a number, an email, a thought…">${esc(sp?.body||'')}</textarea><div class="scbtn"><button type="button" class="btn2 sm" data-x="sp2note">Make it a note</button><button type="button" class="btn2 sm" id="spcopy">${ic('copy')} Copy</button></div></div>
  ${fav.length?`<div class="nsec">⭐ Shortcuts & pinned</div><div class="nrow">${fav.map(n=>`<button type="button" class="nmini" data-x="nopen" data-id="${n.id}"><b>${esc(n.title||'Untitled')}</b><small>${esc(snip(n.body,40))}</small></button>`).join('')}</div>`:''}
  ${rec.length?`<div class="nsec">🕘 Recent</div><div class="nrow">${rec.map(n=>{const c=checkStats(n.body);return `<button type="button" class="nmini" data-x="nopen" data-id="${n.id}"><b>${esc(n.title||'Untitled')}</b><small>${c?`☑ ${c.done}/${c.all}`:esc(snip(n.body,40))}</small></button>`}).join('')}</div>`:''}
  <div class="nsec">📚 All notes</div></div>`;
 const list=$('#nlist');if(list)list.insertAdjacentHTML('beforebegin',home);
 const spad=$('#spad');if(spad){spad.oninput=()=>{clearTimeout(spad._t);$('#spst').textContent='saving…';spad._t=setTimeout(()=>{let s=(NB.notes||[]).find(n=>n.id==='scratch');const t=nowISO();if(!s){s={id:'scratch',title:'Scratch pad',body:'',nb:'b-personal',tags:[],created:t,hidden:true};NB.notes.push(s)}s.body=spad.value;s.updated=t;nbQueue();$('#spst').textContent='saved ✓'},700)};$('#spcopy').onclick=()=>copyText(spad.value,'Copied')}};
const _notesList_n23=notesList;notesList=function(){return _notesList_n23().filter(n=>n.id!=='scratch')};
const _noteCard_n23=noteCard;noteCard=function(n){let h=_noteCard_n23(n);const c=checkStats(n.body);if(c)h=h.replace('<div class="nm">',`<div class="nm"><span class="tag ok">☑ ${c.done}/${c.all}</span>`);if(n.fav)h=h.replace('<div class="nt">','<div class="nt">⭐ ');if(n.remind)h=h.replace('<div class="nm">',`<div class="nm"><span class="tag ${n.remind<=nowD().date?'warn':''}">⏰ ${fd(n.remind,{day:'numeric',month:'short'})}</span>`);return h};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="ntpl"],[data-x="sp2note"],[data-x="ndup"]');if(!a)return;const x=a.dataset.x;
 if(x==='ntpl'){loadNB().then(openTemplates);return}
 if(x==='sp2note'){const v=($('#spad')?.value||'').trim();if(!v){toast('Scratch pad is empty');return}const s=NB.notes.find(n=>n.id==='scratch');if(s){s.body='';s.updated=nowISO()}openNote(null,false,{title:v.split('\n')[0].slice(0,50),body:v});return}
 if(x==='ndup'){const n=NB.notes.find(z=>z.id===a.dataset.id);if(!n)return;const t=nowISO();NB.notes.push({...n,id:nid(),title:(n.title||'')+' (copy)',created:t,updated:t,pinned:false});nbQueue();closeSheet();renderNotes();toast('Duplicated')}},true);
/* "+ New note" buttons elsewhere open the template picker */
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="nnew"]:not([data-voice])');if(!a)return;e.stopImmediatePropagation();loadNB().then(openTemplates)},true);

/* 6. Today: note reminders + a Notes shortcut */
const _renderToday_n23=renderToday;renderToday=function(G){_renderToday_n23(G);const el=$('#p-today');if(!el||!nbLoaded)return;const d=nowD().date;
 const due=notesList().filter(n=>n.remind&&n.remind<=d);const t=el.querySelector('.v8top');
 const html=`<div class="card mb nquick"><button type="button" class="nq1" data-x="ntpl">${ic('note')}<span><b>Notes</b><small>${notesList().length} notes${due.length?` · ⏰ ${due.length} due`:''}</small></span></button><button type="button" class="nq2" onclick="location.hash='#notes'">Open ›</button></div>`+due.slice(0,3).map(n=>`<div class="card mb nremind" data-x="nopen" data-id="${n.id}">⏰ <b>${esc(n.title||'Note')}</b><span class="xs faint">${esc(snip(n.body,60))}</span></div>`).join('');
 if(t)t.insertAdjacentHTML('afterend',html)};

/* ================= v24: auto-update · Face ID · people fix · clearer pipeline · Notes on top ================= */
/* 1. Always run the newest version: check index.html and reload when a new version is published */
const MYV_d24=+((document.querySelector('script[src*="app.js"]')?.src.match(/v=(\d+)/)||[])[1]||0);
async function checkUpdate_d24(){try{const t=await(await fetch('index.html?t='+Date.now(),{cache:'no-store'})).text();const v=+((t.match(/app\.js\?v=(\d+)/)||[])[1]||0);
 if(v&&MYV_d24&&v>MYV_d24){if($('#sheet')?.classList.contains('on')||document.activeElement?.matches?.('input,textarea'))return;toast('Updating to the new version…');setTimeout(()=>location.replace(location.pathname+'?u='+v+'#today'),700)}}catch(e){}}
setTimeout(checkUpdate_d24,4000);setInterval(()=>{if(!document.hidden)checkUpdate_d24()},5*60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkUpdate_d24()});
if(/[?&]u=\d+/.test(location.search))history.replaceState(null,'',location.pathname+'#today');

/* 2. Face ID / Touch ID login (passkey on this device; password stays encrypted with a key only Face ID can unlock) */
const FID_d24='hq.fid';
const fidInfo_d24=()=>{try{return JSON.parse(ls.get(FID_d24)||'null')}catch(e){return null}};
const rnd_d24=n=>crypto.getRandomValues(new Uint8Array(n));
const fidOK_d24=()=>!!(window.PublicKeyCredential&&navigator.credentials&&window.isSecureContext);
async function fidPlat_d24(){try{return fidOK_d24()&&await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch(e){return false}}
async function prfKey_d24(bytes){const k=await crypto.subtle.importKey('raw',bytes,'HKDF',false,['deriveKey']);return crypto.subtle.deriveKey({name:'HKDF',hash:'SHA-256',salt:new Uint8Array(16),info:new TextEncoder().encode('borna-hq-faceid')},k,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
async function fidAssert_d24(id,salt){const a=await navigator.credentials.get({publicKey:{challenge:rnd_d24(32),rpId:location.hostname,allowCredentials:[{type:'public-key',id:b64d(id),transports:['internal','hybrid']}],userVerification:'required',timeout:60000,extensions:{prf:{eval:{first:salt}}}}});
 const x=a.getClientExtensionResults?a.getClientExtensionResults():{};return x.prf&&x.prf.results&&x.prf.results.first}
async function fidEnable_d24(pw){const salt=rnd_d24(32);
 const cred=await navigator.credentials.create({publicKey:{rp:{name:'Borna HQ',id:location.hostname},user:{id:rnd_d24(16),name:'borna',displayName:'Borna'},challenge:rnd_d24(32),pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required',residentKey:'preferred'},timeout:60000,extensions:{prf:{eval:{first:salt}}}}});
 const id=b64e(new Uint8Array(cred.rawId)),x=cred.getClientExtensionResults?cred.getClientExtensionResults():{};let out=x.prf&&x.prf.results&&x.prf.results.first;
 if(!out&&x.prf&&x.prf.enabled){try{out=await fidAssert_d24(id,salt)}catch(e){}}
 const rec={id,salt:b64e(salt),created:new Date().toISOString()};
 if(out){const k=await prfKey_d24(new Uint8Array(out)),iv=rnd_d24(12);rec.prf=1;rec.iv=b64e(iv);rec.ct=b64e(new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},k,new TextEncoder().encode(pw))))}
 else{rec.prf=0;rec.pw=b64e(new TextEncoder().encode(pw))}
 ls.set(FID_d24,JSON.stringify(rec));ls.del(KEY);return rec}
async function fidUnlock_d24(){const r=fidInfo_d24();if(!r)return;const btn=$('#fidbtn'),err=$('#err');if(btn){btn.disabled=true;btn.lastChild.textContent=' Checking…'}
 try{const out=await fidAssert_d24(r.id,b64d(r.salt));let pw;
  if(r.prf){if(!out)throw new Error('nokey');pw=new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:b64d(r.iv)},await prfKey_d24(new Uint8Array(out)),b64d(r.ct)))}
  else pw=new TextDecoder().decode(b64d(r.pw));
  await unlock(pw,false)}
 catch(e){if(err)err.textContent=e.name==='NotAllowedError'?'Face ID was cancelled — tap to try again, or use your password.':'Face ID didn’t work — use your password.';if(btn){btn.disabled=false;btn.lastChild.textContent=' Unlock with Face ID'}}}
(function(){const f=$('#lockform');if(!f||!fidInfo_d24())return;
 f.insertAdjacentHTML('afterbegin','');const pw=$('#pw');pw.insertAdjacentHTML('beforebegin',`<button type="button" class="btn fidbtn" id="fidbtn"><svg viewBox="0 0 24 24" class="i"><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M9 9v1M15 9v1M12 9v4h-1M9 16s1 1 3 1 3-1 3-1"/></svg> Unlock with Face ID</button><div class="fidor">or use your password</div>`);
 pw.required=false;$('#fidbtn').onclick=fidUnlock_d24;setTimeout(()=>{if(!D)fidUnlock_d24()},350)})();
/* offer Face ID once after a password unlock */
let fidAsked_d24=false;
const _unlock_d24=unlock;unlock=async function(p,rem){await _unlock_d24(p,rem);if(fidAsked_d24||fidInfo_d24()||ls.get('hq.fidno'))return;fidAsked_d24=true;
 if(!(await fidPlat_d24()))return;setTimeout(()=>{if($('#sheet').classList.contains('on'))return;sheet(`<div class="lvup"><div class="lvb fidbig">🙂</div><h2>Open with Face ID?</h2><p>Next time Borna HQ opens with your face — no password to type. Your password is locked on this phone with Face ID.</p><button class="btn2 pri" id="fidyes" style="width:100%">Turn on Face ID</button><button class="btn2 ghost" id="fidnot" style="width:100%;margin-top:8px">Not now</button></div>`);
  $('#fidyes').onclick=async()=>{try{await fidEnable_d24(PW);closeSheet();confetti(40);toast('Face ID is on ✓')}catch(e){toast(e.name==='NotAllowedError'?'Cancelled':'Face ID not available here')}};
  $('#fidnot').onclick=()=>{ls.set('hq.fidno','1');closeSheet()}},1200)};
/* Settings switch */
const _openSettings_d24=openSettings;openSettings=function(){_openSettings_d24();const s=$('#sheet h2');if(!s)return;const on=!!fidInfo_d24();
 s.insertAdjacentHTML('afterend',`<div class="fidset"><span>🙂</span><div><b>Face ID login</b><small>${on?'On — the app opens with your face':'Open the app with Face ID instead of the password'}</small></div><button type="button" class="btn2 ${on?'':'pri'}" id="fidtog">${on?'Turn off':'Turn on'}</button></div>`);
 $('#fidtog').onclick=async()=>{if(fidInfo_d24()){const r=fidInfo_d24();ls.del(FID_d24);if(PW&&r)ls.set(KEY,PW);toast('Face ID off');closeSheet();return}
  if(!(await fidPlat_d24())){toast('Face ID isn’t available in this browser');return}try{await fidEnable_d24(PW);ls.del('hq.fidno');toast('Face ID is on ✓');closeSheet()}catch(e){toast(e.name==='NotAllowedError'?'Cancelled':'Could not turn on Face ID')}}};
$('#settings').onclick=()=>openSettings();
/* ask for Face ID again after 15 minutes away */
let hid_d24=0;document.addEventListener('visibilitychange',()=>{if(document.hidden){hid_d24=Date.now();return}if(hid_d24&&fidInfo_d24()&&D&&Date.now()-hid_d24>15*60000)location.replace(location.pathname+'#today');hid_d24=0});

/* 3. People: an empty field you never filled in must not hide a number Claude found */
people=function(){const m={};(D.people||[]).forEach(p=>m[p.id]={...p,src:'claude'});
 (U?.people||[]).forEach(p=>{const o={};Object.entries(p).forEach(([k,v])=>{if(v!==''&&v!=null)o[k]=v});m[p.id]={...(m[p.id]||{}),...o}});
 return Object.values(m).filter(p=>!p.deleted&&p.name).sort((a,b)=>(a.order??99)-(b.order??99)||a.name.localeCompare(b.name))};

/* 4. Money: deals pipeline as clear bars instead of the log chart */
const _draw_d24=draw;draw=function(pg){_draw_d24(pg);if(pg!=='money')return;const cv=$('#c-pipe');if(!cv)return;const box=cv.parentElement;
 const L=moneyCalc().open.slice().sort((a,b)=>b.value*b.prob-a.value*a.prob),mx=Math.max(1,...L.map(d=>d.value||0));
 box.style.height='auto';box.innerHTML=L.length?`<div class="pbars">${L.map(d=>{const ex=Math.round((d.value||0)*(d.prob||0)/100);return `<div class="pbar"><div class="pbt"><b>${esc(d.name)}</b><span>${aed(ex)} <small>expected</small></span></div><div class="pbtrack"><i style="width:${Math.max(2,(d.value||0)/mx*100)}%"></i><em style="width:${Math.max(1,ex/mx*100)}%"></em></div><div class="pbs">${d.prob||0}% chance · if it closes ${aed(d.value)}</div></div>`}).join('')}</div>`:empty('No open deals','brief')};

/* 5. Today: Notes & Diary shortcuts near the top */
const _renderToday_d24=renderToday;renderToday=function(G){_renderToday_d24(G);const t=$('#p-today .v8top'),q=$('#p-today .nquick');if(t&&q){const after=t.querySelector('.reward');(after||t.firstElementChild)?.after(q);
 if(!q.querySelector('.nq3'))q.insertAdjacentHTML('beforeend',`<button type="button" class="nq2 nq3" data-x="dnew" data-voice="1">📔 Diary</button>`)}};

/* ================= v25: Notes last in the bar · movies & games in the diary · share a day · Face ID fixes ================= */
/* 1. Notes button goes to the end of the bottom bar */
(function(){const i=PAGES.findIndex(p=>p.id==='notes');if(i>-1){const [n]=PAGES.splice(i,1);PAGES.push(n)}
 buildNav();$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');$$('#tabs [data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p});
 if(typeof show==='function'&&D)show()})();
/* Today: Notes card back at the bottom of the top section */
const _renderToday_d25=renderToday;renderToday=function(G){_renderToday_d25(G);const t=$('#p-today .v8top'),q=$('#p-today .nquick');if(t&&q)t.appendChild(q)};

/* 2. Movies & games you log appear in your diary automatically */
const MICON_d25={movie:'🎬',series:'📺',game:'🎮'};
function mediaDiary_d25(d){if(typeof media!=='function')return[];return media().filter(x=>!x.later&&x.date===d).map(x=>{const who=x.with==='farnaz'?' · with Farnaz 💑':x.with==='family'?' · with the family':'';const st=x.rating?' · '+'★'.repeat(x.rating):'';const verb=x.type==='game'?'Played':'Watched';
 return{id:'media-'+x.id,mid:x.id,date:d,at:(x.ratedAt||x.created||x.updated||(d+'T21:00:00')),auto:1,mood:null,photo:x.photo||x.poster||'',text:`${MICON_d25[x.type]||'🎬'} ${verb} ${x.title}${x.year?' ('+x.year+')':''}${st}${who}${x.note?'\n“'+x.note+'”':''}`}})}
const _diaryOn_d25=diaryOn;diaryOn=function(d){return _diaryOn_d25(d).concat(mediaDiary_d25(d)).sort((a,b)=>(a.at||'').localeCompare(b.at||''))};
const _diaryStreak_d25=diaryStreak;diaryStreak=function(){const ds=new Set((NB?.diary||[]).filter(x=>!x.deleted).map(x=>x.date));if(typeof media==='function')media().forEach(x=>{if(!x.later&&x.date)ds.add(x.date)});let s=0,d=nowD().date;if(!ds.has(d))d=addDays(d,-1);while(ds.has(d)&&s<999){s++;d=addDays(d,-1)}return s};
const _diaryEntryHTML_d25=diaryEntryHTML;diaryEntryHTML=function(e){if(!e.auto)return _diaryEntryHTML_d25(e);
 return `<div class="dentry auto" data-x="dmedia" data-id="${esc(e.mid)}"><div class="dmeta"><span class="dmood">${e.text.slice(0,2)}</span><span>from Watch &amp; Play</span><span class="pill2">auto</span></div>${e.photo&&/^data:|^https:/.test(e.photo)?`<img class="dphoto mini" src="${esc(e.photo)}" alt="">`:''}<div class="dtext">${linkify(e.text.slice(2).trim())}</div></div>`};
/* share a day */
const _diaryPanel_d25=diaryPanel;diaryPanel=function(c){const h=_diaryPanel_d25(c);if(!NB)return h;return h.replace(/<\/div>\s*$/,`<button type="button" class="btn2 dshare" data-x="dshare" title="Share this day">📤</button></div>`)};
function dayText_d25(d){const E=diaryOn(d);const head=`📔 ${fd(d,{weekday:'long',day:'numeric',month:'long'})}`;return head+'\n\n'+(E.length?E.map(e=>(e.mood!=null&&!e.auto?DMOOD[e.mood]+' ':'')+e.text).join('\n\n'):'(nothing written)')}
document.addEventListener('click',async e=>{const a=e.target.closest('[data-x="dmedia"],[data-x="dshare"]');if(!a)return;
 if(a.dataset.x==='dmedia'){if(typeof openRate==='function')openRate(a.dataset.id);return}
 const txt=dayText_d25(diaryDay||nowD().date);
 if(navigator.share){try{await navigator.share({title:'My day',text:txt})}catch(err){}}else{try{await navigator.clipboard.writeText(txt);toast('Copied — paste it anywhere')}catch(err){toast('Could not share')}}});
/* refresh the diary when a movie/game is saved */
const _saveMedia_d25=saveMedia;saveMedia=function(L){_saveMedia_d25(L);setTimeout(()=>$$('.diarybox').forEach(b=>b.innerHTML=diaryPanel()),50)};

/* 3. Face ID: start the system prompt directly from the tap (Safari blocks it otherwise) and show the real reason if it fails */
let fidTap_d25=false;
const isIOS_d25=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const _fidUnlock_d25=fidUnlock_d24;fidUnlock_d24=async function(){if(!fidTap_d25&&isIOS_d25){const b=$('#fidbtn');if(b)b.classList.add('pulse');return}fidTap_d25=false;return _fidUnlock_d25()};
(function(){const b=$('#fidbtn');if(!b)return;b.onclick=()=>{fidTap_d25=true;fidUnlock_d24()};const lb=$('#lockform');if(lb)lb.addEventListener('click',ev=>{if(ev.target.closest('input,button,label'))return;fidTap_d25=true;fidUnlock_d24()})})();
function fidErr_d25(e){const n=e&&e.name||'',m=(e&&e.message||'').slice(0,80);
 return n==='NotAllowedError'?'Face ID was cancelled or blocked. Make sure Face ID is set up and “Passwords / iCloud Keychain” is on in iPhone Settings, then try again.':n==='SecurityError'?'Face ID needs the app opened from bornaxahadi.github.io.':n==='InvalidStateError'?'Face ID is already set up on this phone — tap Turn off, then Turn on again.':n==='NotSupportedError'?'This browser doesn’t support Face ID login. Update iOS or open the app from the Home Screen.':'Face ID error: '+(n||'unknown')+(m?' — '+m:'')}
const _openSettings_d25=openSettings;openSettings=function(){_openSettings_d25();const t=$('#fidtog');if(!t)return;
 t.onclick=()=>{if(fidInfo_d24()){ls.del(FID_d24);if(PW)ls.set(KEY,PW);toast('Face ID off');closeSheet();return}
  if(!fidOK_d24()){toast('Face ID isn’t available in this browser — open Borna HQ from your Home Screen or Safari');return}
  if(!PW){toast('Unlock with your password first');return}
  fidEnable_d24(PW).then(()=>{ls.del('hq.fidno');closeSheet();confetti(40);toast('Face ID is on ✓ — try it: close and reopen the app')}).catch(e=>{sheet(head('Face ID','lock','bg-o')+`<p class="sm">${esc(fidErr_d25(e))}</p><button class="btn2" data-act="close" style="width:100%;margin-top:10px">OK</button>`)})}};
$('#settings').onclick=()=>openSettings();
/* same for the “Open with Face ID?” prompt after unlocking */
document.addEventListener('click',e=>{const y=e.target.closest('#fidyes');if(!y)return;e.stopImmediatePropagation();e.preventDefault();
 fidEnable_d24(PW).then(()=>{closeSheet();confetti(40);toast('Face ID is on ✓')}).catch(err=>{$('#sheet .lvup p').textContent=fidErr_d25(err)})},true);

/* ================= v26: Health — food & coffee tracker with photo calories, body & muscle progress ================= */
P.food='<path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 3c-2 0-3 2-3 5s1 4 3 4v9"/>';
P.scale='<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9a3 3 0 0 1 6 0M12 9l1.5-1.5"/>';
P.camera='<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>';

/* ---------- encrypted store for health.enc (separate file, photos inside) ---------- */
function makeStore_d26(file,lsKey,empty,merge){const S={data:null,loaded:false,loading:null,sha:null,t:null,saving:false,again:false};
 S.remote=async()=>{if(!TOKEN){const j=await pagesJSON(file);return j?dec(j):null}
  const h={Authorization:'Bearer '+TOKEN},r=await fetch(API+file+'?ref=main&t='+Date.now(),{headers:{...h,Accept:'application/vnd.github+json'},cache:'no-store'});
  if(r.status===404){S.sha=null;return null}if(!r.ok)throw new Error('GitHub '+r.status);const j=await r.json();S.sha=j.sha;let txt;
  if(j.content&&j.encoding==='base64')txt=atob(j.content.replace(/\s/g,''));else txt=await(await fetch(API+file+'?ref=main&t='+Date.now(),{headers:{...h,Accept:'application/vnd.github.raw'},cache:'no-store'})).text();
  return dec(JSON.parse(txt))};
 S.cache=()=>{try{localStorage.setItem(lsKey,JSON.stringify(S.data))}catch(e){try{const lite=JSON.parse(JSON.stringify(S.data));['meals','photos'].forEach(k=>(lite[k]||[]).forEach(x=>{if(x.img&&S.sha)delete x.img}));localStorage.setItem(lsKey,JSON.stringify(lite))}catch(_){}}};
 S.load=force=>{if(S.loaded&&!force)return Promise.resolve(S.data);if(S.loading)return S.loading;
  S.loading=(async()=>{let local=null;try{const t=ls.get(lsKey);if(t)local=JSON.parse(t)}catch(e){}if(!S.data)S.data=local||empty();
   let remote=null,ok=true;try{remote=await S.remote()}catch(e){ok=false;console.warn(e)}const before=JSON.stringify(remote);S.data=merge(remote,S.data);S.loaded=true;S.cache();
   if(ok&&TOKEN&&JSON.stringify(S.data)!==before)S.queue(true);S.loading=null;return S.data})();return S.loading};
 S.queue=keep=>{if(!keep)S.data.updated=new Date().toISOString();S.cache();if(!TOKEN)return;clearTimeout(S.t);S.t=setTimeout(S.save,900)};
 S.save=async()=>{if(S.saving){S.again=true;return}S.saving=true;
  try{for(let i=0;i<3;i++){const m=merge(await S.remote(),S.data);try{S.sha=await ghPut(file,await enc(m),S.sha,'Health from app');S.data=m;S.cache();break}catch(e){if(e.status!==409&&e.status!==422)throw e}}}
  catch(e){console.warn(e);toast('Saved on this phone — will sync later')}S.saving=false;if(S.again){S.again=false;S.save()}};
 return S}
const hEmpty_d26=()=>({v:1,meals:[],weights:[],meas:[],photos:[],prof:null,updated:null});
const HS=makeStore_d26('health.enc','hq.health',hEmpty_d26,(a,b)=>{a=a||hEmpty_d26();b=b||hEmpty_d26();const pa=a.prof,pb=b.prof;
 return{v:1,meals:mergeArr(a.meals,b.meals),weights:mergeArr(a.weights,b.weights),meas:mergeArr(a.meas,b.meas),photos:mergeArr(a.photos,b.photos),prof:(pb&&(!pa||(pb.updated||'')>(pa.updated||'')))?pb:(pa||null),updated:(a.updated||'')>(b.updated||'')?a.updated:b.updated}});
const H_=()=>HS.data||hEmpty_d26();
const hNow_d26=()=>new Date().toLocaleTimeString('en-GB',{timeZone:TZ,hour:'2-digit',minute:'2-digit',hour12:false});
const hid_d26=()=>'h'+uid();
function shrinkTo_d26(file,W=512,q=.72){return new Promise(res=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,W/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};im.onerror=()=>res('');im.src=r.result};r.readAsDataURL(file)})}

/* ---------- profile & targets ---------- */
function prof_d26(){const s=D.body_seed||{},p=H_().prof||{};const w=lastWeight_d26();return{height:+p.height||+s.height||173,age:+p.age||+s.age||42,start:+p.start||+s.start||103,goal:+p.goal||+s.goal||80,weight:w?w.kg:(+s.weight||93)}}
function lastWeight_d26(){return H_().weights.filter(x=>!x.deleted).sort((a,b)=>(a.date+a.updated).localeCompare(b.date+b.updated)).pop()}
function targets_d26(){const p=prof_d26(),bmr=10*p.weight+6.25*p.height-5*p.age+5;return{kcal:Math.round((bmr*1.5-500)/50)*50,protein:Math.round(p.goal*2),water:8}}

/* ---------- food database (typical portions) ---------- */
const FOODS_d26=[['🥗','Mexican bowl — grilled',570,52],['🥗','Mexican bowl — fried chicken',800,48],['🍳','Eggs (2)',155,13],['🍳','Omelette',220,14],['🍞','Bread slice',80,3],['🫓','Naan / lavash',160,5],['🧀','Feta / cheese',80,5],['🥣','Oats bowl',300,10],['🥛','Greek yogurt',150,15],['🍌','Banana',105,1],['🍎','Apple',95,0],['🌴','Dates (3)',70,1],['🍚','Rice (1 cup)',205,4],['🍛','Chelow rice plate',350,7],['🍗','Chicken breast',250,46],['🍢','Kebab koobideh',300,18],['🍢','Joojeh kebab',300,35],['🥘','Ghormeh sabzi',400,25],['🌯','Shawarma',550,30],['🥗','Salad',120,3],['🐟','Fish',250,35],['🥩','Steak',450,50],['🍝','Pasta plate',600,20],['🍕','Pizza slice',285,12],['🍔','Burger',550,25],['🍟','Fries',365,4],['🍣','Sushi (8)',350,14],['🥣','Soup',150,6],['🧆','Falafel (4)',330,13],['🫘','Hummus',170,8],['🥤','Protein shake',150,25],['🥜','Nuts (handful)',170,6],['🍫','Chocolate bar',230,3],['🍰','Cake slice',350,4],['🍉','Fruit bowl',120,2],['🥪','Sandwich',400,20],['🥞','Pancakes',350,8],['🧃','Fresh juice',120,1]];
const DRINKS_d26=[['💧','Water',0,0],['☕','Coffee + milk + 1 tsp sugar',60,3],['🥤','Zero soft drink',0,0],['☕','Cappuccino',120,6],['☕','Espresso',5,0],['☕','Americano',10,0],['☕','Latte',190,10],['☕','Flat white',110,6],['☕','Turkish coffee',10,0],['☕','Nescafé 3-in-1',70,1],['🍵','Tea',2,0],['🍵','Tea + sugar',35,0],['🥤','Soft drink',140,0],['🧃','Juice',120,1],['🥤','Protein shake',150,25]];
const SLOTS_d26=[['breakfast','🍳','Breakfast','07:00','11:30'],['lunch','🍛','Lunch','12:00','16:00'],['dinner','🍽','Dinner','18:00','23:00'],['snack','🍎','Snacks','',''],['drink','☕','Drinks','','']];
function slotByTime_d26(){const m=nowD().mins;return m<11*60+30?'breakfast':m<16*60?'lunch':m>=18*60?'dinner':'snack'}

/* ---------- day maths ---------- */
function est_d26(m){return (D.food_est||{})[m.id]}
function mealKcal_d26(m){if(m.skipped)return 0;if(m.kcal!=null&&m.kcal!=='')return +m.kcal;const e=est_d26(m);return e?+e.kcal||0:(m.items||[]).reduce((a,i)=>a+(i.kcal||0)*(i.q||1),0)}
function mealProt_d26(m){if(m.skipped)return 0;const it=(m.items||[]).reduce((a,i)=>a+(i.p||0)*(i.q||1),0);const e=est_d26(m);return it||(e?+e.p||0:0)}
function dayMeals_d26(d){return H_().meals.filter(x=>!x.deleted&&x.date===d).sort((a,b)=>(a.time||'').localeCompare(b.time||''))}
function daySum_d26(d){const M=dayMeals_d26(d);const coffee=M.filter(x=>x.slot==='drink'&&/coffee|espresso|americano|latte|cappuccino|flat white|nescaf/i.test(x.text||'')).reduce((a,x)=>a+(x.q||1),0);const water=M.filter(x=>x.slot==='drink'&&/water/i.test(x.text||'')).reduce((a,x)=>a+(x.q||1),0);
 const sc=M.map(x=>est_d26(x)?.score).filter(Boolean);return{M,kcal:Math.round(M.reduce((a,x)=>a+mealKcal_d26(x),0)),p:Math.round(M.reduce((a,x)=>a+mealProt_d26(x),0)),coffee,water,score:sc.length?Math.round(sc.reduce((a,b)=>a+ +b,0)/sc.length*10)/10:null,pending:M.filter(x=>x.img&&!est_d26(x)&&!x.kcal).length}}

/* ---------- PAGE ---------- */
PAGES.splice(PAGES.findIndex(p=>p.id==='me')+1,0,{id:'health',l:'Health',i:'food'});
(function(){if(!$('#p-health')){const s=document.createElement('section');s.className='page';s.id='p-health';($('#p-me')||$('#p-today')).after(s)}
 buildNav();$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');$$('#tabs [data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p})})();
let hTab_d26='food',hDay_d26=null;
function ring_d26(v,max,col,label,sub){const R=34,C=2*Math.PI*R,p=Math.min(1,max?v/max:0);return `<div class="hring"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="${R}" class="bg"/><circle cx="40" cy="40" r="${R}" class="fg" style="stroke:${col};stroke-dasharray:${C};stroke-dashoffset:${C*(1-p)}"/></svg><b>${label}</b><small>${sub}</small></div>`}
function renderHealth_d26(){const el=$('#p-health');if(!el||!D)return;if(!HS.loaded){el.innerHTML='<div class="pt">Health</div><div class="card faint">Loading…</div>';HS.load().then(renderHealth_d26);return}
 el.innerHTML=`<div class="pt">Health <span>food · body · muscle</span></div>
 <div class="ntabs"><button type="button" class="${hTab_d26==='food'?'on':''}" data-x="htab" data-t="food">🍽 Food</button><button type="button" class="${hTab_d26==='body'?'on':''}" data-x="htab" data-t="body">💪 Body</button></div>
 ${hTab_d26==='food'?foodHTML_d26():bodyHTML_d26()}`}
PAGEFN.health=()=>renderHealth_d26();
const _draw_d26=draw;draw=function(pg){_draw_d26(pg);if(pg==='health'&&!$('#p-health .ntabs'))renderHealth_d26()};

/* ---------- FOOD tab ---------- */
function foodHTML_d26(){const n=nowD().date;hDay_d26=hDay_d26||n;const d=hDay_d26,S=daySum_d26(d),T=targets_d26(),tip=(D.food_day||{})[d];
 return `<div class="hday"><button type="button" data-x="hdaynav" data-v="-1">‹</button><b>${d===n?'Today':fd(d,{weekday:'long',day:'numeric',month:'short'})}</b><button type="button" data-x="hdaynav" data-v="1" ${d>=n?'disabled':''}>›</button></div>
 <div class="card mb hsum">${ring_d26(S.kcal,T.kcal,S.kcal>T.kcal?'#f43f5e':'#10b981',S.kcal,'of '+T.kcal+' kcal')}${ring_d26(S.p,T.protein,'#8b5cf6',S.p+'g','protein / '+T.protein)}
  <div class="hmini"><div><b>☕ ${S.coffee}</b><small>coffee</small></div><div><b>💧 ${S.water}/${T.water}</b><small>water</small></div><div><b>${S.score!=null?S.score+'/10':'—'}</b><small>health score</small></div></div></div>
 ${S.pending?`<div class="nwarn soft">📷 ${S.pending} photo${S.pending>1?'s':''} waiting — Claude estimates calories within the hour.</div>`:''}
 ${tip?`<div class="card mb htip">🤖 <span>${esc(tip.note||'')}</span></div>`:''}
 <button type="button" class="bigadd hsnap" data-x="hsnap">${ic('camera')} Snap your meal or drink</button>
 <div class="hdrinks"><span>Quick drink:</span>${DRINKS_d26.slice(0,10).map((x,i)=>`<button type="button" data-x="hdrink" data-i="${i}">${x[0]} ${x[1]}</button>`).join('')}</div>
 ${SLOTS_d26.map(([k,e,l])=>{const M=S.M.filter(x=>x.slot===k);return `<div class="card mb hslot"><div class="hsh"><b>${e} ${l}</b>${M.length&&k!=='drink'?`<span class="xs faint">${M.reduce((a,x)=>a+mealKcal_d26(x),0)} kcal</span>`:''}<button type="button" class="btn2 sm" data-x="hadd" data-s="${k}">+ Add</button></div>
  ${M.length?M.map(mealRow_d26).join(''):k==='drink'||k==='snack'?'<div class="xs faint">Nothing yet</div>':`<div class="hask">Did you have ${l.toLowerCase()}? <button type="button" class="btn2 sm pri" data-x="hadd" data-s="${k}">Yes — log it</button><button type="button" class="btn2 sm" data-x="hskip" data-s="${k}">Skipped</button></div>`}</div>`}).join('')}
 <div class="xs faint" style="text-align:center;margin:8px 0 20px">Targets are a general guide for losing fat while building muscle (${T.kcal} kcal, ${T.protein} g protein a day) — not medical advice.</div>`}
function mealRow_d26(m){const e=est_d26(m),k=mealKcal_d26(m);if(m.skipped)return `<div class="hmeal sk" data-x="hedit" data-id="${m.id}"><span class="ht">${esc(m.time||'')}</span><b>Skipped</b></div>`;
 const name=m.text||(m.items||[]).map(i=>(i.q>1?i.q+'× ':'')+i.n).join(', ')||(e?(e.items||[]).join(', '):'')||'Photo';
 return `<div class="hmeal" data-x="hedit" data-id="${m.id}">${m.img?`<img src="${m.img}" alt="">`:''}<div class="hmt"><b>${esc(name)}</b><small>${esc(m.time||'')}${m.q>1?' · ×'+m.q:''} · ${k?k+' kcal':m.img&&!e?'⏳ Claude is estimating…':'—'}${e?.score?` · ${e.score}/10`:''}</small>${e?.note?`<small class="hen">🤖 ${esc(e.note)}</small>`:''}</div></div>`}
function openMeal_d26(id,opt={}){const m=H_().meals.find(x=>x.id===id)||{slot:opt.slot||slotByTime_d26(),date:hDay_d26||nowD().date,time:hNow_d26(),items:[],img:opt.img||''};let slot=m.slot,img=m.img||'',items=(m.items||[]).map(x=>({...x}));const isDrink=slot==='drink';
 const L=isDrink?DRINKS_d26:FOODS_d26.concat(DRINKS_d26);
 sheet(head(id?'Edit':'Log food & drink','food','bg-g')+`
 <div class="nbooks sm2 hsl">${SLOTS_d26.map(([k,e,l])=>`<button type="button" class="${slot===k?'on':''}" data-sl="${k}">${e} ${l}</button>`).join('')}</div>
 <div class="two"><div class="fld"><label>Time</label><input id="mtime" class="inp" type="time" value="${esc(m.time||hNow_d26())}"></div><div class="fld"><label>Date</label><input id="mdate" class="inp" type="date" value="${esc(m.date)}"></div></div>
 <div class="hph">${img?`<img id="mimg" src="${img}">`:'<span id="mimg"></span>'}<label class="btn2">${ic('camera')} ${img?'Retake':'Photo'}<input type="file" accept="image/*" capture="environment" id="mfile" hidden></label><label class="btn2 ghost">🖼 Gallery<input type="file" accept="image/*" id="mfile2" hidden></label></div>
 <input id="mq" class="inp" placeholder="Search food or drink…" style="margin-top:8px"><div class="hfoods" id="hfoods"></div>
 <div class="hsel" id="hsel"></div>
 <div class="fld"><label>Or describe it</label><input id="mtext" class="inp" value="${esc(m.text||'')}" placeholder="e.g. 2 eggs, toast, black coffee"></div>
 <div class="two"><div class="fld"><label>Calories (optional)</label><input id="mkcal" class="inp" type="number" inputmode="numeric" value="${m.kcal??''}" placeholder="auto"></div><div class="fld"><label>Sugar spoons</label><input id="msug" class="inp" type="number" inputmode="numeric" value="${m.sugar||''}" placeholder="0"></div></div>
 <div class="xs faint" id="mhint"></div>
 <div class="btnrow">${id?`<button type="button" class="btn2 danger" data-x="hdel" data-id="${id}">${ic('trash')}</button>`:''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="msave">Save</button></div>`);
 const drawFoods=()=>{const q=($('#mq').value||'').toLowerCase();$('#hfoods').innerHTML=L.filter(x=>!q||x[1].toLowerCase().includes(q)).slice(0,q?20:14).map(x=>`<button type="button" data-fd="${esc(x[1])}">${x[0]} ${esc(x[1])}<small>${x[2]}</small></button>`).join('');
  $$('#hfoods [data-fd]').forEach(b=>b.onclick=()=>{const f=L.find(x=>x[1]===b.dataset.fd);const ex=items.find(i=>i.n===f[1]);if(ex)ex.q=(ex.q||1)+1;else items.push({n:f[1],e:f[0],kcal:f[2],p:f[3],q:1});drawSel()})};
 const drawSel=()=>{const tot=items.reduce((a,i)=>a+i.kcal*(i.q||1),0)+(+$('#msug').value||0)*16;$('#hsel').innerHTML=items.map((i,k)=>`<span class="hchip">${i.e||''} ${esc(i.n)} <button type="button" data-qm="${k}">−</button><b>${i.q||1}</b><button type="button" data-qp="${k}">+</button></span>`).join('')+(items.length?`<div class="xs" style="margin-top:4px">≈ <b>${tot} kcal</b></div>`:'');
  $$('#hsel [data-qm]').forEach(b=>b.onclick=()=>{const i=items[+b.dataset.qm];i.q=(i.q||1)-1;if(i.q<1)items.splice(+b.dataset.qm,1);drawSel()});$$('#hsel [data-qp]').forEach(b=>b.onclick=()=>{items[+b.dataset.qp].q++;drawSel()});
  $('#mhint').textContent=img&&!items.length&&!$('#mkcal').value&&!$('#mtext').value?'📷 Claude will look at the photo and estimate calories, protein and a health score.':img?'📷 Claude will also check the photo.':''};
 drawFoods();drawSel();$('#mq').oninput=drawFoods;$('#msug').oninput=drawSel;$('#mtext').oninput=drawSel;
 $$('#sheet [data-sl]').forEach(b=>b.onclick=()=>{slot=b.dataset.sl;$$('#sheet [data-sl]').forEach(x=>x.classList.toggle('on',x===b))});
 const onFile=async ev=>{const f=ev.target.files[0];if(!f)return;$('#mhint').textContent='Preparing photo…';img=await shrinkTo_d26(f,512,.72);$('#mimg').outerHTML=`<img id="mimg" src="${img}">`;drawSel()};$('#mfile').onchange=onFile;$('#mfile2').onchange=onFile;
 $('#msave').onclick=()=>{const t=new Date().toISOString(),text=$('#mtext').value.trim(),kc=$('#mkcal').value,sug=+$('#msug').value||0;if(!items.length&&!text&&!img&&!kc){toast('Add a food, a photo or a description');return}
  let kcal=kc!==''?+kc:null;if(kcal==null&&items.length)kcal=items.reduce((a,i)=>a+i.kcal*(i.q||1),0)+sug*16;
  const o={slot,date:$('#mdate').value||nowD().date,time:$('#mtime').value||hNow_d26(),items,text:text||(items.length?'':m.text||''),kcal:kcal??((img||text)?null:0),sugar:sug,img,skipped:false,updated:t};
  if(slot==='drink'&&items.length===1){o.text=items[0].n;o.q=items[0].q||1}
  if(id)Object.assign(m,o);else{H_().meals.push({id:hid_d26(),created:t,...o});xpFly($('#msave'),'+2 XP')}HS.queue();closeSheet();rerenderHealth_d26();toast('Logged ✓')};
 if(opt.autoCam)setTimeout(()=>$('#mfile').click(),300)}
function quickDrink_d26(i){const x=DRINKS_d26[i],t=new Date().toISOString(),d=nowD().date;
 const same=H_().meals.find(m=>!m.deleted&&m.date===d&&m.slot==='drink'&&m.text===x[1]&&!m.img);
 if(same){same.q=(same.q||1)+1;same.kcal=x[2]*same.q;same.items=[{n:x[1],e:x[0],kcal:x[2],p:x[3],q:same.q}];same.time=hNow_d26();same.updated=t}
 else H_().meals.push({id:hid_d26(),slot:'drink',date:d,time:hNow_d26(),text:x[1],q:1,items:[{n:x[1],e:x[0],kcal:x[2],p:x[3],q:1}],kcal:x[2],created:t,updated:t});
 HS.queue();rerenderHealth_d26();toast(`${x[0]} ${x[1]} +1 · ${hNow_d26()}`)}
function rerenderHealth_d26(){if(curPage()==='health')renderHealth_d26();if(curPage()==='today')rerender()}

/* ---------- BODY tab ---------- */
const MEAS_d26=[['waist','Waist (navel)'],['belly','Belly (widest)'],['chest','Chest'],['shoulders','Shoulders'],['neck','Neck'],['bicepL','Biceps L (flexed)'],['bicepR','Biceps R (flexed)'],['forearm','Forearm'],['hips','Hips'],['thighL','Thigh L'],['thighR','Thigh R'],['calf','Calf']];
const GROW_d26=new Set(['chest','shoulders','bicepL','bicepR','forearm','thighL','thighR','calf']);
const POSES_d26=[['front','Front'],['side','Side'],['back','Back'],['biceps','Biceps flex'],['belly','Belly / abs'],['legs','Legs']];
function measSeries_d26(k){return H_().meas.filter(x=>!x.deleted&&x[k]).sort((a,b)=>a.date.localeCompare(b.date)).map(x=>({d:x.date,v:+x[k]}))}
function lineSvg_d26(pts,col,unit){if(pts.length<2)return `<div class="xs faint">${pts.length?'Add one more to see the trend':'No data yet'}</div>`;const W=320,Hh=90,xs=pts.map((p,i)=>i),ys=pts.map(p=>p.v),mn=Math.min(...ys),mx=Math.max(...ys),r=mx-mn||1;
 const P=pts.map((p,i)=>[10+i*(W-20)/(pts.length-1),10+(Hh-20)*(1-(p.v-mn)/r)]);return `<svg class="hline" viewBox="0 0 ${W} ${Hh}"><polyline points="${P.map(p=>p.join(',')).join(' ')}" style="stroke:${col}"/>${P.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" style="fill:${col}"/>`).join('')}<text x="10" y="${Hh-1}">${fd(pts[0].d,{day:'numeric',month:'short'})}</text><text x="${W-10}" y="${Hh-1}" text-anchor="end">${fd(pts[pts.length-1].d,{day:'numeric',month:'short'})}</text></svg>`}
function bodyHTML_d26(){const p=prof_d26(),w=p.weight,bmi=w/((p.height/100)**2),lost=Math.round((p.start-w)*10)/10,toGo=Math.round((w-p.goal)*10)/10,W=H_().weights.filter(x=>!x.deleted).sort((a,b)=>a.date.localeCompare(b.date)).map(x=>({d:x.date,v:+x.kg}));
 const lm=H_().meas.filter(x=>!x.deleted).sort((a,b)=>a.date.localeCompare(b.date)),first=lm[0]||{},last=lm[lm.length-1]||{};
 const bf=last.waist&&last.neck&&last.waist>last.neck?Math.round((495/(1.0324-0.19077*Math.log10(last.waist-last.neck)+0.15456*Math.log10(p.height))-450)*10)/10:null;
 const pct=Math.max(0,Math.min(100,(p.start-w)/((p.start-p.goal)||1)*100)),rv=D.body_review;
 return `<div class="card mb hbody"><div class="hbt"><div><small>Weight</small><b>${w} kg</b><span class="up">▼ ${lost} kg lost</span></div><div><small>Goal</small><b>${p.goal} kg</b><span>${toGo>0?toGo+' kg to go':'reached 🎉'}</span></div><div><small>BMI</small><b>${bmi.toFixed(1)}</b><span>${p.height} cm</span></div>${bf?`<div><small>Body fat ≈</small><b>${bf}%</b><span>tape method</span></div>`:''}</div>
  <div class="hprog"><i style="width:${pct}%"></i></div><div class="xs faint">${p.start} kg start → ${p.goal} kg goal · ${Math.round(pct)}% of the way</div></div>
 <div class="hbtns"><button type="button" class="bigadd" data-x="hweigh">${ic('scale')}Weigh in</button><button type="button" class="bigadd alt2" data-x="hmeas">📏 Measure</button><button type="button" class="bigadd alt3" data-x="hphoto">${ic('camera')}Body photo</button></div>
 ${rv?`<div class="card mb htip">🤖 <span><b>Claude’s review · ${fd((rv.date||'').slice(0,10)||nowD().date)}</b><br>${esc(rv.text||'')}</span></div>`:''}
 <div class="card mb"><div class="hsh"><b>⚖️ Weight</b><span class="xs faint">${W.length} weigh-ins</span></div>${lineSvg_d26(W,'#10b981')}</div>
 <div class="card mb"><div class="hsh"><b>📏 Waist</b><span class="xs faint">belly fat goes down here first</span></div>${lineSvg_d26(measSeries_d26('waist'),'#f59e0b')}</div>
 <div class="card mb"><div class="hsh"><b>💪 Measurements</b><span class="xs faint">${lm.length?'first → latest':'tap Measure to start'}</span></div>
  ${lm.length?`<div class="hmeas">${MEAS_d26.filter(([k])=>last[k]||first[k]).map(([k,l])=>{const a=+first[k]||null,b=+last[k]||null,dd=a&&b?Math.round((b-a)*10)/10:null,good=dd==null||dd===0?'':(GROW_d26.has(k)?dd>0:dd<0)?'g':'b';return `<div><span>${l}</span><b>${b??'—'}<small> cm</small></b>${dd?`<em class="${good}">${dd>0?'+':''}${dd}</em>`:''}</div>`}).join('')}</div>`:''}</div>
 <div class="card mb"><div class="hsh"><b>📸 Progress photos</b><span class="xs faint">first vs latest</span></div><div class="hposes">${POSES_d26.map(([k,l])=>{const L=H_().photos.filter(x=>!x.deleted&&x.pose===k).sort((a,b)=>a.date.localeCompare(b.date));const a=L[0],b=L[L.length-1];
  return `<div class="hpose"><div class="hpl"><b>${l}</b><button type="button" class="btn2 sm" data-x="hphoto" data-pose="${k}">${ic('camera')}</button></div>${a?`<div class="hcmp"><figure><img src="${a.img}" data-x="hpview" data-id="${a.id}"><figcaption>${fd(a.date,{day:'numeric',month:'short'})}</figcaption></figure>${b&&b!==a?`<figure><img src="${b.img}" data-x="hpview" data-id="${b.id}"><figcaption>${fd(b.date,{day:'numeric',month:'short'})}</figcaption></figure>`:''}</div>`:'<div class="xs faint">No photo yet</div>'}</div>`}).join('')}</div>
  <div class="xs faint" style="margin-top:8px">Same place, same light, same time of day (morning) — makes the change easy to see. Photos stay encrypted in your private file.</div></div>
 <div class="card mb"><div class="hsh"><b>⚙️ Profile</b><button type="button" class="btn2 sm" data-x="hprof">Edit</button></div><div class="xs faint">Height ${p.height} cm · age ${p.age} · start ${p.start} kg · goal ${p.goal} kg</div></div>`}
function openWeigh_d26(){const p=prof_d26();sheet(head('Weigh in','scale','bg-g')+`<div class="hbigin"><input id="wkg" class="inp" type="number" step="0.1" inputmode="decimal" value="${p.weight}"><span>kg</span></div><div class="fld"><label>Date</label><input id="wdate" class="inp" type="date" value="${nowD().date}"></div><div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="wsave">Save</button></div><div class="xs faint">Best: mornings, after the toilet, before breakfast.</div>`);
 $('#wsave').onclick=()=>{const kg=+$('#wkg').value;if(!kg||kg<30||kg>250){toast('Check the number');return}const d=$('#wdate').value||nowD().date,t=new Date().toISOString(),ex=H_().weights.find(x=>!x.deleted&&x.date===d);if(ex){ex.kg=kg;ex.updated=t}else H_().weights.push({id:hid_d26(),date:d,kg,created:t,updated:t});
  HS.queue();closeSheet();const prev=lastWeightBefore_d26(d);toast(prev&&kg<prev?`▼ ${Math.round((prev-kg)*10)/10} kg — great work 💪`:'Saved ✓');if(prev&&kg<prev)confetti(40);rerenderHealth_d26()}}
function lastWeightBefore_d26(d){const L=H_().weights.filter(x=>!x.deleted&&x.date<d).sort((a,b)=>a.date.localeCompare(b.date));return L.length?L[L.length-1].kg:prof_d26().start}
function openMeas_d26(){const last=H_().meas.filter(x=>!x.deleted).sort((a,b)=>a.date.localeCompare(b.date)).pop()||{};
 sheet(head('Measurements','scale','bg-o')+`<div class="xs faint" style="margin-bottom:8px">Tape measure in cm. Fill what you can — even waist + biceps is great.</div><div class="hmform">${MEAS_d26.map(([k,l])=>`<label><span>${l}</span><input class="inp" type="number" step="0.1" inputmode="decimal" data-mk="${k}" placeholder="${last[k]||''}"></label>`).join('')}</div><div class="fld"><label>Date</label><input id="mmdate" class="inp" type="date" value="${nowD().date}"></div><div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="mmsave">Save</button></div>`);
 $('#mmsave').onclick=()=>{const o={};$$('#sheet [data-mk]').forEach(i=>{if(i.value)o[i.dataset.mk]=+i.value});if(!Object.keys(o).length){toast('Enter at least one');return}const t=new Date().toISOString();H_().meas.push({id:hid_d26(),date:$('#mmdate').value||nowD().date,...o,created:t,updated:t});HS.queue();closeSheet();toast('Measurements saved ✓');rerenderHealth_d26()}}
function openBodyPhoto_d26(pose){let sel=pose||'front';sheet(head('Body photo','camera','bg-p')+`<div class="nbooks sm2">${POSES_d26.map(([k,l])=>`<button type="button" class="${sel===k?'on':''}" data-po="${k}">${l}</button>`).join('')}</div><div class="hph" style="margin-top:10px"><label class="btn2 pri">${ic('camera')} Take photo<input type="file" accept="image/*" capture="user" id="bpcam" hidden></label><label class="btn2">🖼 Gallery<input type="file" accept="image/*" id="bpgal" hidden></label></div><div class="xs faint" style="margin-top:8px">Tip: stand 2 m from a mirror, relaxed, same pose each time.</div>`);
 $$('#sheet [data-po]').forEach(b=>b.onclick=()=>{sel=b.dataset.po;$$('#sheet [data-po]').forEach(x=>x.classList.toggle('on',x===b))});
 const on=async ev=>{const f=ev.target.files[0];if(!f)return;const img=await shrinkTo_d26(f,640,.75),t=new Date().toISOString();H_().photos.push({id:hid_d26(),date:nowD().date,pose:sel,img,created:t,updated:t});HS.queue();closeSheet();xpFly(document.body,'+5 XP');toast('Photo saved 🔒');rerenderHealth_d26()};$('#bpcam').onchange=on;$('#bpgal').onchange=on}
function openProf_d26(){const p=prof_d26();sheet(head('Body profile','heart','bg-v')+`<div class="hmform">${[['height','Height (cm)',p.height],['age','Age',p.age],['start','Starting weight (kg)',p.start],['goal','Goal weight (kg)',p.goal]].map(([k,l,v])=>`<label><span>${l}</span><input class="inp" type="number" step="0.1" data-pk="${k}" value="${v}"></label>`).join('')}</div><div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="psave">Save</button></div>`);
 $('#psave').onclick=()=>{const o={updated:new Date().toISOString()};$$('#sheet [data-pk]').forEach(i=>o[i.dataset.pk]=+i.value);H_().prof=o;HS.queue();closeSheet();rerenderHealth_d26()}}

/* ---------- clicks ---------- */
document.addEventListener('click',e=>{const a=e.target.closest('[data-x^="h"]');if(!a)return;const x=a.dataset.x;
 const map={htab:()=>{hTab_d26=a.dataset.t;renderHealth_d26()},hdaynav:()=>{const n=nowD().date;hDay_d26=addDays(hDay_d26||n,+a.dataset.v);if(hDay_d26>n)hDay_d26=n;renderHealth_d26()},
  hsnap:()=>HS.load().then(()=>openMeal_d26(null,{autoCam:true})),hadd:()=>HS.load().then(()=>openMeal_d26(null,{slot:a.dataset.s})),hedit:()=>openMeal_d26(a.dataset.id),hdrink:()=>HS.load().then(()=>quickDrink_d26(+a.dataset.i)),
  hskip:()=>HS.load().then(()=>{const t=new Date().toISOString();H_().meals.push({id:hid_d26(),slot:a.dataset.s,date:hDay_d26||nowD().date,time:hNow_d26(),skipped:true,created:t,updated:t});HS.queue();rerenderHealth_d26()}),
  hdel:()=>{if(a.dataset.sure!=='1'){a.dataset.sure='1';a.innerHTML='Delete?';return}const m=H_().meals.find(z=>z.id===a.dataset.id);if(m){m.deleted=true;m.updated=new Date().toISOString();HS.queue()}closeSheet();rerenderHealth_d26()},
  hweigh:()=>HS.load().then(openWeigh_d26),hmeas:()=>HS.load().then(openMeas_d26),hphoto:()=>HS.load().then(()=>openBodyPhoto_d26(a.dataset.pose)),hprof:()=>openProf_d26(),
  hpview:()=>{const ph=H_().photos.find(z=>z.id===a.dataset.id);if(!ph)return;sheet(head(fd(ph.date,{day:'numeric',month:'long',year:'numeric'}),'camera','bg-p')+`<img src="${ph.img}" style="width:100%;border-radius:14px"><div class="btnrow"><button type="button" class="btn2 danger" data-x="hpdel" data-id="${ph.id}">${ic('trash')} Delete</button><button type="button" class="btn2" data-act="close">Close</button></div>`)},
  hpdel:()=>{if(a.dataset.sure!=='1'){a.dataset.sure='1';a.innerHTML='Sure?';return}const ph=H_().photos.find(z=>z.id===a.dataset.id);if(ph){ph.deleted=true;delete ph.img;ph.updated=new Date().toISOString();HS.queue()}closeSheet();rerenderHealth_d26()}};
 if(map[x]){e.preventDefault();map[x]()}});

/* ---------- Today: food card with time-aware questions ---------- */
const _renderToday_d26=renderToday;renderToday=function(G){_renderToday_d26(G);const el=$('#p-today');if(!el)return;if(!HS.loaded){HS.load().then(()=>{if(curPage()==='today')rerender()});return}
 const n=nowD().date,S=daySum_d26(n),T=targets_d26(),m=nowD().mins,has=k=>S.M.some(x=>x.slot===k);
 let ask='';if(m>=10*60&&!has('breakfast'))ask=['breakfast','Did you have breakfast?'];else if(m>=15*60&&!has('lunch'))ask=['lunch','Did you have lunch?'];else if(m>=21*60&&!has('dinner'))ask=['dinner','Did you have dinner?'];
 const html=`<div class="card mb hfoodtoday"><div class="hft"><b>🍽 Food today</b><span>${S.kcal} / ${T.kcal} kcal · ${S.p} g protein · ☕ ${S.coffee}</span></div>
  ${ask?`<div class="hask">${ask[1]} <button type="button" class="btn2 sm pri" data-x="hadd" data-s="${ask[0]}">Yes — log it</button><button type="button" class="btn2 sm" data-x="hskip" data-s="${ask[0]}">Skipped</button></div>`:''}
  <div class="hftb"><button type="button" class="btn2 sm pri" data-x="hsnap">${ic('camera')} Snap meal</button><button type="button" class="btn2 sm" data-x="hdrink" data-i="1">☕ +1 coffee</button><button type="button" class="btn2 sm" data-x="hdrink" data-i="9">💧 +1 water</button><button type="button" class="btn2 sm ghost" onclick="location.hash='#health'">Open ›</button></div></div>`;
 const t=el.querySelector('.v8top');if(t){const r=t.querySelector('.reward');(r||t.firstElementChild)?.insertAdjacentHTML('afterend',html)}};
/* XP */
const _habXP_d26=habXP;habXP=function(){let x=_habXP_d26();if(HS.loaded){const h=H_();x+=h.meals.filter(m=>!m.deleted&&!m.skipped).length*2+h.weights.filter(w=>!w.deleted).length*5+h.photos.filter(p=>!p.deleted).length*5+h.meas.filter(w=>!w.deleted).length*5}return x};

/* ================= v27: edit/delete measurements & weigh-ins · body-diagram icons · sanity checks ================= */
const MLINE_d27={neck:[[17,12.5,23,12.5]],shoulders:[[7.5,15.2,32.5,15.2]],chest:[[12,19.5,28,19.5]],belly:[[10.6,25,29.4,25]],waist:[[11,28.3,29,28.3]],hips:[[10.6,33,29.4,33]],bicepL:[[28,20,33,22.5]],bicepR:[[7,22.5,12,20]],forearm:[[4.8,30,9.6,31.5]],thighL:[[24.5,41,30.5,41]],thighR:[[9.5,41,15.5,41]],calf:[[10.5,51,16.5,51],[23.5,51,29.5,51]]};
const MRANGE_d27={waist:[50,200],belly:[50,200],chest:[60,180],shoulders:[80,180],neck:[25,60],bicepL:[20,60],bicepR:[20,60],forearm:[18,50],hips:[60,180],thighL:[30,100],thighR:[30,100],calf:[25,70]};
const MHOW_d27={waist:'Around your belly button, relaxed, breathe out',belly:'Widest part of the belly',chest:'Across the nipples, arms down',shoulders:'Widest point around both shoulders',neck:'Just below the Adam’s apple',bicepL:'Left arm flexed, widest point',bicepR:'Right arm flexed, widest point',forearm:'Widest part below the elbow',hips:'Widest part of the bottom',thighL:'Left leg, just under the bottom',thighR:'Right leg, just under the bottom',calf:'Widest part of the calf'};
function micon_d27(k,big){const L=MLINE_d27[k]||[];return `<svg class="micon${big?' big':''}" viewBox="0 0 40 60" aria-hidden="true"><g class="sil"><circle cx="20" cy="7" r="4.6"/><path d="M13 14.5h14l2 18.5H11z"/><path d="M13 15.5 7.2 30 5.8 38M27 15.5 32.8 30 34.2 38M15 33l-1.2 25M25 33l1.2 25"/></g>${L.map(l=>`<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" class="hl"/>`).join('')}</svg>`}
const badM_d27=(k,v)=>{const r=MRANGE_d27[k];return r&&v!=null&&v!==''&&(+v<r[0]||+v>r[1])};

/* decorate the Body tab after it renders */
const _renderHealth_d27=renderHealth_d26;renderHealth_d26=function(){_renderHealth_d27();const el=$('#p-health');if(!el||hTab_d26!=='body')return;
 const byLabel={};MEAS_d26.forEach(([k,l])=>byLabel[l]=k);
 el.querySelectorAll('.hmeas>div').forEach(t=>{const l=t.querySelector('span')?.textContent,k=byLabel[l];if(!k)return;t.dataset.x='hmedit';t.dataset.k=k;t.classList.add('tap');t.insertAdjacentHTML('afterbegin',micon_d27(k));
  const v=+(t.querySelector('b')?.firstChild?.textContent||0);if(badM_d27(k,v)){t.classList.add('bad');t.insertAdjacentHTML('beforeend','<i class="mwarn">⚠️ check · tap to fix</i>')}});
 const wc=[...el.querySelectorAll('.card .hsh b')].find(b=>/Weight/.test(b.textContent));if(wc){const h=wc.parentElement;if(!h.querySelector('[data-x="hwedit"]'))h.insertAdjacentHTML('beforeend','<button type="button" class="btn2 sm" data-x="hwedit">Edit</button>')}
 const mc=[...el.querySelectorAll('.card .hsh b')].find(b=>/Measurements/.test(b.textContent));if(mc){const h=mc.parentElement;if(!h.querySelector('[data-x="hmall"]'))h.insertAdjacentHTML('beforeend','<button type="button" class="btn2 sm" data-x="hmall">History</button>')}};

/* edit one measurement: every value you ever entered for it */
function openMeasEdit_d27(k){const lab=(MEAS_d26.find(x=>x[0]===k)||[k,k])[1];const R=H_().meas.filter(x=>!x.deleted&&x[k]!=null&&x[k]!=='').sort((a,b)=>b.date.localeCompare(a.date));
 sheet(head(lab,'scale','bg-o')+`<div class="mhead">${micon_d27(k,true)}<div><b>${lab}</b><small>${MHOW_d27[k]||''}</small><small class="faint">Normal range ${MRANGE_d27[k]?MRANGE_d27[k].join('–')+' cm':''}</small></div></div>
 <div class="mrows">${R.map(r=>`<div class="mrow" data-id="${r.id}"><input class="inp" type="date" value="${r.date}" data-f="date"><input class="inp ${badM_d27(k,r[k])?'bad':''}" type="number" step="0.1" inputmode="decimal" value="${r[k]}" data-f="v"><span>cm</span><button type="button" class="vbtn" data-x="hmrowdel" title="Delete">${ic('trash')}</button></div>`).join('')||'<div class="xs faint">No values yet</div>'}</div>
 <div class="mrow new"><input class="inp" type="date" value="${nowD().date}" id="mnd"><input class="inp" type="number" step="0.1" inputmode="decimal" placeholder="new value" id="mnv"><span>cm</span></div>
 <div class="xs faint" id="mmsg"></div>
 <div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="mesave">Save</button></div>`);
 $$('#sheet [data-x="hmrowdel"]').forEach(b=>b.onclick=()=>{const row=b.closest('.mrow');row.classList.toggle('del');b.innerHTML=row.classList.contains('del')?'↺':ic('trash')});
 $('#mesave').onclick=()=>{const t=new Date().toISOString();let bad=null;
  $$('#sheet .mrow[data-id]').forEach(row=>{const v=row.querySelector('[data-f="v"]').value;if(!row.classList.contains('del')&&v&&badM_d27(k,v))bad=v});const nv=$('#mnv').value;if(nv&&badM_d27(k,nv))bad=nv;
  if(bad!=null&&!$('#mesave').dataset.ok){$('#mmsg').innerHTML=`⚠️ <b>${bad} cm</b> looks wrong for ${lab.toLowerCase()} (normal ${MRANGE_d27[k].join('–')} cm). Tap Save again to keep it anyway.`;$('#mesave').dataset.ok='1';return}
  $$('#sheet .mrow[data-id]').forEach(row=>{const r=H_().meas.find(x=>x.id===row.dataset.id);if(!r)return;const v=row.querySelector('[data-f="v"]').value,d=row.querySelector('[data-f="date"]').value;
   if(row.classList.contains('del')||!v){delete r[k]}else{r[k]=+v}if(d&&d!==r.date){if(MEAS_d26.filter(([kk])=>kk!==k&&r[kk]!=null).length&&!row.classList.contains('del')){const val=r[k];delete r[k];H_().meas.push({id:hid_d26(),date:d,[k]:val,created:t,updated:t})}else r.date=d}
   if(!MEAS_d26.some(([kk])=>r[kk]!=null&&r[kk]!==''))r.deleted=true;r.updated=t});
  if(nv){const d=$('#mnd').value||nowD().date,ex=H_().meas.find(x=>!x.deleted&&x.date===d);if(ex){ex[k]=+nv;ex.updated=t}else H_().meas.push({id:hid_d26(),date:d,[k]:+nv,created:t,updated:t})}
  HS.queue();closeSheet();toast('Updated ✓');rerenderHealth_d26()}}
/* all measurement entries (history) */
function openMeasAll_d27(){const R=H_().meas.filter(x=>!x.deleted).sort((a,b)=>b.date.localeCompare(a.date));
 sheet(head('Measurement history','scale','bg-o')+(R.length?R.map(r=>`<div class="mhist"><div class="mhd"><b>${fd(r.date,{weekday:'short',day:'numeric',month:'short',year:'numeric'})}</b><button type="button" class="btn2 sm danger" data-x="hmentdel" data-id="${r.id}">${ic('trash')}</button></div><div class="mhv">${MEAS_d26.filter(([k])=>r[k]!=null&&r[k]!=='').map(([k,l])=>`<button type="button" class="${badM_d27(k,r[k])?'bad':''}" data-x="hmedit" data-k="${k}">${micon_d27(k)}<span>${l.replace(/ \(.*\)/,'')}</span><b>${r[k]}</b></button>`).join('')}</div></div>`).join(''):'<div class="xs faint">Nothing yet</div>')+`<button type="button" class="btn2 pri" style="width:100%;margin-top:10px" data-x="hmeas">+ New measurements</button>`)}
/* weigh-ins */
function openWeighEdit_d27(){const R=H_().weights.filter(x=>!x.deleted).sort((a,b)=>b.date.localeCompare(a.date));
 sheet(head('Weigh-ins','scale','bg-g')+`<div class="mrows">${R.map(r=>`<div class="mrow" data-id="${r.id}"><input class="inp" type="date" value="${r.date}" data-f="date"><input class="inp" type="number" step="0.1" inputmode="decimal" value="${r.kg}" data-f="v"><span>kg</span><button type="button" class="vbtn" data-x="hmrowdel">${ic('trash')}</button></div>`).join('')||'<div class="xs faint">No weigh-ins yet</div>'}</div>
 <div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="wesave">Save</button></div>`);
 $$('#sheet [data-x="hmrowdel"]').forEach(b=>b.onclick=()=>{const row=b.closest('.mrow');row.classList.toggle('del');b.innerHTML=row.classList.contains('del')?'↺':ic('trash')});
 $('#wesave').onclick=()=>{const t=new Date().toISOString();$$('#sheet .mrow[data-id]').forEach(row=>{const r=H_().weights.find(x=>x.id===row.dataset.id);if(!r)return;const v=+row.querySelector('[data-f="v"]').value;
  if(row.classList.contains('del')||!v||v<30||v>250)r.deleted=true;else{r.kg=v;r.date=row.querySelector('[data-f="date"]').value||r.date}r.updated=t});HS.queue();closeSheet();toast('Updated ✓');rerenderHealth_d26()}}
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="hmedit"],[data-x="hmall"],[data-x="hwedit"],[data-x="hmentdel"]');if(!a)return;e.stopPropagation();const x=a.dataset.x;
 if(x==='hmedit')openMeasEdit_d27(a.dataset.k);else if(x==='hmall')openMeasAll_d27();else if(x==='hwedit')openWeighEdit_d27();
 else{if(a.dataset.sure!=='1'){a.dataset.sure='1';a.textContent='Delete?';return}const r=H_().meas.find(z=>z.id===a.dataset.id);if(r){r.deleted=true;r.updated=new Date().toISOString();HS.queue()}openMeasAll_d27();rerenderHealth_d26()}},true);

/* new-measurement form: icon + how-to + range check */
openMeas_d26=function(){const last=H_().meas.filter(x=>!x.deleted).sort((a,b)=>a.date.localeCompare(b.date)).pop()||{};
 sheet(head('Measurements','scale','bg-o')+`<div class="xs faint" style="margin-bottom:8px">Tape measure, in cm. Fill what you can — waist + biceps is already great.</div>
 <div class="mform">${MEAS_d26.map(([k,l])=>`<label class="mf">${micon_d27(k)}<div><span>${l}</span><small>${MHOW_d27[k]}</small></div><input class="inp" type="number" step="0.1" inputmode="decimal" data-mk="${k}" placeholder="${last[k]||'cm'}"></label>`).join('')}</div>
 <div class="fld"><label>Date</label><input id="mmdate" class="inp" type="date" value="${nowD().date}"></div><div class="xs" id="mmmsg"></div>
 <div class="btnrow"><button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="mmsave">Save</button></div>`);
 $$('#sheet [data-mk]').forEach(i=>i.oninput=()=>i.classList.toggle('bad',badM_d27(i.dataset.mk,i.value)));
 $('#mmsave').onclick=()=>{const o={},bad=[];$$('#sheet [data-mk]').forEach(i=>{if(i.value){o[i.dataset.mk]=+i.value;if(badM_d27(i.dataset.mk,i.value))bad.push((MEAS_d26.find(x=>x[0]===i.dataset.mk)||[])[1]+' '+i.value)}});
  if(!Object.keys(o).length){toast('Enter at least one');return}
  if(bad.length&&!$('#mmsave').dataset.ok){$('#mmmsg').innerHTML=`⚠️ These look wrong: <b>${esc(bad.join(', '))}</b> cm. Fix them, or tap Save again to keep.`;$('#mmsave').dataset.ok='1';return}
  const t=new Date().toISOString(),d=$('#mmdate').value||nowD().date,ex=H_().meas.find(x=>!x.deleted&&x.date===d);if(ex){Object.assign(ex,o);ex.updated=t}else H_().meas.push({id:hid_d26(),date:d,...o,created:t,updated:t});
  HS.queue();closeSheet();toast('Measurements saved ✓');rerenderHealth_d26()}};

/* ================= v28: outline pose guides for progress photos ================= */
const PSVG_d28={
 front:'<circle cx="30" cy="11" r="6"/><path d="M22 21h16l3 25H19z"/><path d="M22 22l-6 22M38 22l6 22M25 46l-2 29M35 46l2 29"/>',
 side:'<circle cx="30" cy="11" r="6"/><path d="M36 10.5l2.5 1.5-2.5 1"/><path d="M26 21c7 0 11 3 11 9 0 6-2 9-2 16H25c0-9-2-17 1-25z"/><path d="M30 23l2 21M28 46l-1 29M33 46l1 29"/>',
 back:'<circle cx="30" cy="11" r="6"/><path d="M22 21h16l3 25H19z"/><path d="M22 22l-6 22M38 22l6 22M25 46l-2 29M35 46l2 29"/><path d="M30 22v22M25 26c2 2 3 4 3 7M35 26c-2 2-3 4-3 7" class="acc"/>',
 biceps:'<circle cx="30" cy="11" r="6"/><path d="M23 21h14l2 24H21z"/><path d="M23 23H13l-2-12M37 23h10l2-12M24 45l-2 30M36 45l2 30"/><path d="M14 22c1-3 4-4 6-3M46 22c-1-3-4-4-6-3" class="acc"/>',
 belly:'<path d="M16 8c0 22 2 48 6 66M44 8c0 22-2 48-6 66"/><path d="M20 18c6 4 14 4 20 0"/><circle cx="30" cy="46" r="1.6" class="acc"/><path d="M24 28h12M24 36h12M30 24v28" class="acc"/>',
 legs:'<path d="M17 8h26"/><path d="M17 8c0 22 2 44 3 66h7l2-46 2 46h7c1-22 3-44 3-66"/><path d="M22 40c1 2 3 3 5 3M38 40c-1 2-3 3-5 3" class="acc"/>'};
const PHINT_d28={front:'Face the camera, arms relaxed',side:'Turn 90°, stand tall',back:'Back to the camera, arms down',biceps:'Both arms up, flex',belly:'Close-up, relaxed, no sucking in',legs:'Feet hip-width, front view'};
const picon_d28=k=>`<svg class="picon" viewBox="0 0 60 80" aria-hidden="true"><rect x="2" y="2" width="56" height="76" rx="8" class="frame"/><g>${PSVG_d28[k]||''}</g></svg>`;
const _renderHealth_d28=renderHealth_d26;renderHealth_d26=function(){_renderHealth_d28();const el=$('#p-health');if(!el||hTab_d26!=='body')return;
 el.querySelectorAll('.hpose').forEach(p=>{const btn=p.querySelector('[data-pose]');if(!btn)return;const k=btn.dataset.pose,has=!!p.querySelector('.hcmp'),name=p.querySelector('.hpl b')?.textContent||k;
  if(!has){p.classList.add('empty');p.innerHTML=`<div class="pe">${picon_d28(k)}<div><b>${esc(name)}</b><small>${PHINT_d28[k]||''}</small></div></div><button type="button" class="btn2 sm pri pbtn" data-x="hphoto" data-pose="${k}">${ic('camera')} Take photo</button>`}
  else{const h=p.querySelector('.hpl');if(h&&!h.querySelector('.picon'))h.insertAdjacentHTML('afterbegin',picon_d28(k).replace('class="picon"','class="picon sm"'))}})};
/* pose chips in the photo sheet get the same outline */
const _openBodyPhoto_d28=openBodyPhoto_d26;openBodyPhoto_d26=function(pose){_openBodyPhoto_d28(pose);$$('#sheet [data-po]').forEach(b=>{if(!b.querySelector('.picon'))b.insertAdjacentHTML('afterbegin',picon_d28(b.dataset.po).replace('class="picon"','class="picon xs"'))});
 const tip=$('#sheet .xs.faint');const upd=()=>{const on=$('#sheet [data-po].on');if(on&&tip)tip.innerHTML=`<b>${esc(on.textContent.trim())}:</b> ${PHINT_d28[on.dataset.po]||''} · stand 2 m from the camera, same place and light each time.`};upd();$$('#sheet [data-po]').forEach(b=>b.addEventListener('click',()=>setTimeout(upd,0)))};

/* ================= v29: Analyze my body · goal body (photo or preset) · progress & finish-date prediction ================= */
const GPRE_d29={lean:{e:'🏃',n:'Lean & fit',d:'Flat belly, healthy, light',bf:18,waist:88,swr:1.4,gain:0},
 athletic:{e:'⚡',n:'Athletic',d:'Visible abs outline, defined arms',bf:14,waist:84,swr:1.5,gain:2},
 muscular:{e:'💪',n:'Muscular',d:'Big chest & arms, V-shape, abs',bf:12,waist:82,swr:1.55,gain:5}};
const r1_d29=x=>Math.round(x*10)/10;
const navy_d29=(w,n,h)=>w&&n&&w>n?r1_d29(495/(1.0324-0.19077*Math.log10(w-n)+0.15456*Math.log10(h))-450):null;
function gb_d29(){return (H_().prof||{}).gb||null}
function goalPhotos_d29(){return H_().photos.filter(x=>!x.deleted&&x.pose==='goal'&&x.img).sort((a,b)=>(b.created||'').localeCompare(a.created||''))}
function goalT_d29(){const g=gb_d29();if(!g)return null;const base=GPRE_d29[g.preset]||GPRE_d29.athletic,ga=D.goal_analysis&&g.photoId&&D.goal_analysis.photoId===g.photoId?D.goal_analysis:null;
 return{...base,...(ga?{bf:+ga.bf||base.bf,waist:+ga.waist||base.waist,swr:+ga.swr||base.swr,gain:ga.gain!=null?+ga.gain:base.gain}:{}),ga,g,name:g.label||(ga?'Your goal photo':base.n)}}
function anCalc_d29(){const p=prof_d26(),w=p.weight,M=H_().meas.filter(x=>!x.deleted).sort((a,b)=>a.date.localeCompare(b.date)),f=M[0]||{},l=M[M.length-1]||{};
 const ba=D.body_analysis,bfTape=navy_d29(+l.waist,+l.neck,p.height),bfPhoto=ba&&ba.bf?+ba.bf:null,bf=bfPhoto&&bfTape?r1_d29((bfPhoto*2+bfTape)/3):(bfPhoto||bfTape||r1_d29(1.2*w/((p.height/100)**2)+0.23*p.age-16.2));
 const fat=r1_d29(w*bf/100),lean=r1_d29(w-fat),whtr=l.waist?+l.waist/p.height:null,swr=l.waist&&l.shoulders?+l.shoulders/+l.waist:null,arm=l.bicepL&&l.bicepR?r1_d29(Math.abs(l.bicepL-l.bicepR)):null;
 const W=H_().weights.filter(x=>!x.deleted).sort((a,b)=>a.date.localeCompare(b.date));let rate=0.7,rateSrc='typical safe pace on your 2,200 kcal plan';
 if(W.length>1){const days=(new Date(W[W.length-1].date)-new Date(W[0].date))/864e5;if(days>=14){const r=(W[0].kg-W[W.length-1].kg)/(days/7);if(r>0.15){rate=Math.min(1.1,Math.max(0.3,r1_d29(r)));rateSrc='your real pace from your weigh-ins'}}}
 const when=kg=>{const wk=Math.max(0,(w-kg)/rate);return{wk:Math.ceil(wk),date:addDays(nowD().date,Math.round(wk*7))}};
 const miles=[[25,'Belly clearly smaller','👕'],[20,'Good shape — flat-ish belly','😎'],[15,'Abs outline shows','🔥'],[12,'Fitness-model lean','🏆']].filter(m=>m[0]<bf).map(([b,t,e])=>{const kg=r1_d29(lean/(1-b/100));return{bf:b,t,e,kg,...when(kg)}});
 const T=goalT_d29();let goal=null;
 if(T){const tw=r1_d29((lean+T.gain)/(1-T.bf/100)),wf=Math.max(0,(w-tw)/rate),wm=T.gain/0.15,wk=Math.ceil(Math.max(wf,wm));
  const b0=(()=>{const fw=W[0]?.kg||w;return navy_d29(+f.waist,+f.neck,p.height)||bf})(),start=Math.max(p.start,w);
  const pr=(a,b,c)=>a===b?100:Math.max(0,Math.min(100,(a-c)/(a-b)*100));
  const parts=[['Weight',`${w} → ${tw} kg`,pr(start,tw,w)],['Body fat',`${bf}% → ${T.bf}%`,pr(Math.max(b0,bf),T.bf,bf)]];
  if(l.waist)parts.push(['Waist',`${l.waist} → ${T.waist} cm`,pr(Math.max(+f.waist||0,+l.waist),T.waist,+l.waist)]);
  if(swr)parts.push(['V-shape',`${swr.toFixed(2)} → ${T.swr}`,(()=>{const s0=f.waist&&f.shoulders?Math.min(f.shoulders/f.waist,swr):swr;return pr(-s0,-T.swr,-swr)})()]);
  goal={T,tw,wk,date:addDays(nowD().date,wk*7),fast:addDays(nowD().date,Math.ceil(wk/1.25)*7),slow:addDays(nowD().date,Math.ceil(wk*1.35)*7),parts,pct:Math.round(parts.reduce((a,x)=>a+x[2],0)/parts.length)}}
 return{p,w,l,bf,bfTape,bfPhoto,fat,lean,whtr,swr,arm,rate,rateSrc,miles,goal,ba,bmi:w/((p.height/100)**2)}}
const mon_d29=d=>fd(d,{month:'short',year:'numeric'});
const ring_d29=(pct,sz=64)=>{const r=26,c=2*Math.PI*r;return `<svg class="gring" viewBox="0 0 64 64" style="width:${sz}px;height:${sz}px"><circle cx="32" cy="32" r="${r}" class="bg"/><circle cx="32" cy="32" r="${r}" class="fg" stroke-dasharray="${c*pct/100} ${c}" transform="rotate(-90 32 32)"/><text x="32" y="37" text-anchor="middle">${pct}%</text></svg>`};

/* ---------- Body tab: Analyze button + goal card ---------- */
const _renderHealth_d29=renderHealth_d26;renderHealth_d26=function(){_renderHealth_d29();const el=$('#p-health');if(!el||hTab_d26!=='body')return;const hb=el.querySelector('.hbody');if(!hb||el.querySelector('.ganal'))return;
 const A=anCalc_d29(),G=A.goal,gp=goalPhotos_d29()[0];
 hb.insertAdjacentHTML('afterend',`<button type="button" class="ganal" data-x="hanal"><span>🔍</span><div><b>Analyze my body</b><small>${A.ba?'Claude’s review · '+fd(A.ba.date.slice(0,10),{day:'numeric',month:'short'})+' · body fat ≈ '+A.bf+'%':'Numbers, photos & how long it will take'}</small></div><i>›</i></button>
 ${G?`<div class="card mb gcard" data-x="hgoal">${ring_d29(G.pct)}<div class="gct"><small>🎯 Goal body</small><b>${esc(G.T.name)}</b><span>${G.wk?`≈ ${G.wk} weeks · <b>${mon_d29(G.date)}</b>`:'You’re there 🎉'}</span></div>${gp?`<img src="${gp.img}" alt="">`:`<span class="gemo">${G.T.e||'🎯'}</span>`}</div>`
  :`<button type="button" class="card mb gset" data-x="hgoal"><span class="gemo">🎯</span><div><b>Set your goal body</b><small>Upload a photo of the body you want — or pick a style. I’ll track you there.</small></div><i>›</i></button>`}`)};

/* ---------- Analysis sheet ---------- */
function openAnal_d29(){const A=anCalc_d29(),G=A.goal,ba=A.ba,pf=(H_().prof||{}),pend=pf.anReq&&(!ba||pf.anReq>ba.date);
 const lvl=(v,a,b)=>v==null?'':v<a?'g':v<b?'o':'b';
 const stat=(k,v,s,c)=>`<div class="ast ${c||''}"><small>${k}</small><b>${v}</b><span>${s}</span></div>`;
 sheet(head('Body analysis','heart','bg-v')+`
 ${G?`<div class="agoal">${ring_d29(G.pct,78)}<div><small>Progress to your goal body</small><b>${esc(G.T.name)}</b><span>Finish ≈ <b>${mon_d29(G.date)}</b> (${G.wk} weeks)<br><em>fast ${mon_d29(G.fast)} · slow ${mon_d29(G.slow)}</em></span></div></div>
  <div class="aparts">${G.parts.map(([n,v,p])=>`<div><div class="apt"><b>${n}</b><span>${v}</span></div><div class="abar"><i style="width:${Math.max(3,p)}%"></i></div></div>`).join('')}</div>`
  :`<button type="button" class="btn2 pri" data-x="hgoal" style="width:100%;margin-bottom:12px">🎯 Set your goal body to track it</button>`}
 <div class="ahd">📊 Your numbers</div>
 <div class="astats">${stat('Body fat ≈',A.bf+'%',A.bfPhoto&&A.bfTape?`photo ${A.bfPhoto}% · tape ${A.bfTape}%`:A.bfTape?'tape method':'estimate',lvl(A.bf,20,28))}
  ${stat('Fat',A.fat+' kg','to lose most of')}${stat('Lean mass',A.lean+' kg','muscle, bone, water — keep it','g')}
  ${A.whtr?stat('Waist ÷ height',A.whtr.toFixed(2),A.whtr<.5?'healthy':'healthy is under 0.50 ('+Math.round(A.p.height/2)+' cm)',lvl(A.whtr,.5,.58)):''}
  ${A.swr?stat('V-shape',A.swr.toFixed(2),'shoulders ÷ waist · aim 1.45+',A.swr>=1.45?'g':A.swr>=1.3?'o':'b'):''}
  ${A.arm!=null?stat('Arms L / R',A.l.bicepL+' / '+A.l.bicepR,A.arm>2?A.arm+' cm apart — re-measure':'balanced',A.arm>2?'o':'g'):''}</div>
 <div class="ahd">🗓 How long it takes</div><div class="xs faint" style="margin:-4px 0 8px">At ${A.rate} kg a week (${A.rateSrc}) and keeping your muscle:</div>
 <div class="amiles">${A.miles.map(m=>`<div><span>${m.e}</span><div><b>${m.t}</b><small>~${m.bf}% fat · ${m.kg} kg</small></div><em>${m.wk} wk<br><b>${mon_d29(m.date)}</b></em></div>`).join('')||'<div class="xs">You’re already lean 🔥</div>'}</div>
 <div class="ahd">🤖 Claude’s photo review ${ba?`<small>${fd(ba.date.slice(0,10),{day:'numeric',month:'short'})}</small>`:''}</div>
 ${ba?`<div class="arev"><p>${esc(ba.summary||'')}</p>${ba.strengths?.length?`<b>💪 Strong points</b><ul>${ba.strengths.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${ba.focus?.length?`<b>🎯 Work on</b><ul>${ba.focus.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${ba.plan?.length?`<b>📋 Plan</b><ul>${ba.plan.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${ba.goalNote?`<p class="xs"><b>vs your goal:</b> ${esc(ba.goalNote)}</p>`:''}</div>`:'<div class="xs faint">No review yet.</div>'}
 <button type="button" class="btn2 ${pend?'':'pri'}" data-x="hanreq" style="width:100%;margin-top:10px" ${pend?'disabled':''}>${pend?'⏳ Claude is looking at your photos — ready within the hour':'🔄 Analyze again with my latest photos'}</button>
 <div class="xs faint" style="margin-top:8px">Estimates, not a medical test. Best to weigh in weekly and update measurements + photos every 2 weeks.</div>`)}

/* ---------- Goal body sheet ---------- */
function openGoal_d29(){const g=gb_d29()||{},gp=goalPhotos_d29();let sel=g.preset||'athletic',pid=g.photoId||gp[0]?.id||null;
 const draw=()=>{const ga=D.goal_analysis&&pid&&D.goal_analysis.photoId===pid?D.goal_analysis:null;
 sheet(head('Goal body','heart','bg-o')+`
 <div class="ahd">📸 Photo of the body you want</div>
 <div class="gphotos">${gp.map(x=>`<figure class="${x.id===pid?'on':''}" data-gp="${x.id}"><img src="${x.img}" alt=""><button type="button" data-gdel="${x.id}">×</button></figure>`).join('')}<label class="gadd">＋<small>Add photo</small><input type="file" accept="image/*" id="gpin" hidden></label></div>
 ${ga?`<div class="arev xs"><b>Claude read this photo:</b> ~${ga.bf}% body fat, waist ≈ ${ga.waist} cm at your height, V-shape ${ga.swr}. ${esc(ga.notes||'')}</div>`:pid?'<div class="xs faint">Claude studies this photo within the hour and sets your exact targets from it.</div>':'<div class="xs faint">Any photo works — an athlete, an actor, or an old photo of you. It stays encrypted and private.</div>'}
 <div class="ahd">Or pick a style ${pid?'<small>(used until the photo is read)</small>':''}</div>
 <div class="gpre">${Object.entries(GPRE_d29).map(([k,v])=>`<button type="button" class="${sel===k?'on':''}" data-gpre="${k}"><span>${v.e}</span><b>${v.n}</b><small>${v.d}</small><em>${v.bf}% fat · waist ${v.waist}</em></button>`).join('')}</div>
 <div class="fld"><label>Name it (optional)</label><input id="glab" class="inp" placeholder="e.g. Summer 2027 body" value="${esc(g.label||'')}"></div>
 <div class="btnrow">${g.preset?'<button type="button" class="btn2 danger" id="gclr">Remove goal</button>':''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="gsave">Save goal</button></div>`);
 $$('#sheet [data-gpre]').forEach(b=>b.onclick=()=>{sel=b.dataset.gpre;$$('#sheet [data-gpre]').forEach(x=>x.classList.toggle('on',x===b))});
 $$('#sheet [data-gp]').forEach(f=>f.onclick=ev=>{if(ev.target.closest('[data-gdel]'))return;pid=pid===f.dataset.gp?null:f.dataset.gp;draw()});
 $$('#sheet [data-gdel]').forEach(b=>b.onclick=()=>{const ph=H_().photos.find(z=>z.id===b.dataset.gdel);if(ph){ph.deleted=true;delete ph.img;ph.updated=new Date().toISOString();HS.queue()}if(pid===b.dataset.gdel)pid=null;gp.splice(gp.findIndex(z=>z.id===b.dataset.gdel),1);draw()});
 $('#gpin').onchange=async ev=>{const f=ev.target.files[0];if(!f)return;toast('Adding…');const img=await shrinkTo_d26(f,640,.78);if(!img)return;const t=new Date().toISOString(),ph={id:hid_d26(),date:nowD().date,pose:'goal',img,created:t,updated:t};H_().photos.push(ph);gp.unshift(ph);pid=ph.id;HS.queue();draw()};
 $('#gclr')&&($('#gclr').onclick=()=>{const p=H_().prof||{};delete p.gb;p.updated=new Date().toISOString();H_().prof=p;HS.queue();closeSheet();rerenderHealth_d26()});
 $('#gsave').onclick=()=>{const t=new Date().toISOString(),p=H_().prof||{...prof_d26()};const isNew=!p.gb;p.gb={preset:sel,photoId:pid,label:$('#glab').value.trim(),set:(p.gb&&p.gb.set)||nowD().date,updated:t};
  if(pid&&!(D.goal_analysis&&D.goal_analysis.photoId===pid))p.anReq=t;p.updated=t;H_().prof=p;HS.queue();closeSheet();if(isNew){confetti(50);xpFly(document.body,'+20 XP')}toast(pid?'Goal saved 🎯 — Claude will study your goal photo':'Goal saved 🎯');rerenderHealth_d26()}};
 draw()}

/* keep goal + review request when the profile is edited */
const _openProf_d29=openProf_d26;openProf_d26=function(){_openProf_d29();const b=$('#psave');if(!b)return;const old=b.onclick;b.onclick=()=>{const keep=H_().prof||{},gb=keep.gb,ar=keep.anReq;old();const p=H_().prof;if(gb)p.gb=gb;if(ar)p.anReq=ar;HS.queue()}};

document.addEventListener('click',e=>{const a=e.target.closest('[data-x="hanal"],[data-x="hgoal"],[data-x="hanreq"]');if(!a)return;e.preventDefault();const x=a.dataset.x;
 if(x==='hanal')HS.load().then(openAnal_d29);
 else if(x==='hgoal')HS.load().then(openGoal_d29);
 else{const p=H_().prof||{...prof_d26()},t=new Date().toISOString();p.anReq=t;p.updated=t;H_().prof=p;HS.queue();a.disabled=true;a.classList.remove('pri');a.textContent='⏳ Requested — Claude will look within the hour';toast('Sent to Claude 🤖')}});


/* ================= v30: Supplements — what you take, daily check-off, streaks, history ================= */
const sEmpty_d30=()=>({v:1,items:[],logs:[],updated:null});
const SS=makeStore_d26('supps.enc','hq.supps',sEmpty_d30,(a,b)=>{a=a||sEmpty_d30();b=b||sEmpty_d30();return{v:1,items:mergeArr(a.items,b.items),logs:mergeArr(a.logs,b.logs),updated:(a.updated||'')>(b.updated||'')?a.updated:b.updated}});
const S_=()=>SS.data||sEmpty_d30();
const SWHEN_d30=[['morning','🌅 Morning'],['breakfast','🍳 With breakfast'],['pregym','🏋️ Before gym'],['postgym','💪 After gym'],['lunch','🍛 With lunch'],['evening','🌇 Evening'],['night','🌙 Before bed']];
const SFREQ_d30=[['daily','Every day'],['gym','Gym days'],['weekly','Once a week'],['cycle','On / off cycle']];
const SPRE_d30=[['☀️','Vitamin D3','IU'],['⚡','Creatine','g'],['🥤','Whey protein','scoop'],['🐟','Omega-3','capsule'],['🧲','Magnesium','mg'],['💊','Multivitamin','tablet'],['🦴','Zinc','mg'],['🌿','Ashwagandha','mg'],['☕','Pre-workout','scoop'],['🍊','Vitamin C','mg'],['🩸','Iron','mg'],['💉','Injection','IU']];
const sActive_d30=()=>S_().items.filter(x=>!x.deleted&&!x.stop).sort((a,b)=>(SWHEN_d30.findIndex(w=>w[0]===a.when)-SWHEN_d30.findIndex(w=>w[0]===b.when))||a.name.localeCompare(b.name));
const sPast_d30=()=>S_().items.filter(x=>!x.deleted&&x.stop).sort((a,b)=>(b.stop||'').localeCompare(a.stop||''));
const sLog_d30=(d,id)=>S_().logs.find(l=>l.id===d+'_'+id&&!l.deleted&&l.taken);
const sDue_d30=(it,d)=>{if(it.start&&d<it.start)return false;if(it.freq==='weekly'){const s=it.start||d;return Math.round((new Date(d)-new Date(s))/864e5)%7===0}return it.freq!=='gym'};
function sStreak_d30(it){let s=0,d=nowD().date;if(!sLog_d30(d,it.id))d=addDays(d,-1);while(sLog_d30(d,it.id)&&s<999){s++;d=addDays(d,it.freq==='weekly'?-7:-1)}return s}
function sWeek_d30(){const A=sActive_d30().filter(x=>x.freq!=='gym'&&x.freq!=='weekly');if(!A.length)return null;let due=0,ok=0;for(let i=0;i<7;i++){const d=addDays(nowD().date,-i);A.forEach(it=>{const s0=it.start||(it.created||'').slice(0,10);if(s0&&d<s0)return;due++;if(sLog_d30(d,it.id))ok++})}return due?Math.round(ok/due*100):null}
const sDays_d30=it=>{const a=it.start,b=it.stop||nowD().date;return a?Math.max(1,Math.round((new Date(b)-new Date(a))/864e5)+1):null};
function sToggle_d30(id,d){d=d||nowD().date;const k=d+'_'+id,t=new Date().toISOString();let l=S_().logs.find(x=>x.id===k);
 if(l&&l.taken&&!l.deleted){l.taken=false;l.updated=t}else{if(l){l.taken=true;l.deleted=false;l.time=hNow_d26();l.updated=t}else S_().logs.push({id:k,date:d,item:id,taken:true,time:hNow_d26(),created:t,updated:t});xpFly(document.body,'+2 XP')}
 SS.queue();const A=sActive_d30().filter(x=>sDue_d30(x,d));if(A.length&&A.every(x=>sLog_d30(d,x.id))){confetti(30);toast('All supplements done today 💊✓')}rerenderHealth_d26()}
function suppsHTML_d30(){const n=nowD().date,A=sActive_d30(),P=sPast_d30(),wk=sWeek_d30(),due=A.filter(x=>sDue_d30(x,n)),done=due.filter(x=>sLog_d30(n,x.id)).length;
 return `<div class="card mb stoday"><div class="hsh"><b>💊 Today</b><span class="xs faint">${due.length?done+' / '+due.length+' taken':'nothing due'}${wk!=null?' · this week '+wk+'%':''}</span></div>
  ${A.length?A.map(it=>{const on=!!sLog_d30(n,it.id),st=sStreak_d30(it),d=sDue_d30(it,n),l=sLog_d30(n,it.id);return `<div class="srow ${on?'on':''} ${d?'':'nd'}"><button type="button" class="scheck" data-x="stake" data-id="${it.id}">${on?'✓':''}</button><div class="sinfo" data-x="sedit" data-id="${it.id}"><b>${esc(it.emoji||'💊')} ${esc(it.name)}</b><small>${esc([it.dose?it.dose+' '+(it.unit||''):'',(SWHEN_d30.find(w=>w[0]===it.when)||['',''])[1].replace(/^\S+ /,''),it.freq==='gym'?'gym days':it.freq==='weekly'?'weekly':it.freq==='cycle'?'cycle':''].filter(Boolean).join(' · '))}${on&&l.time?' · taken '+esc(l.time):''}</small></div>${st>1?`<span class="sst">🔥${st}</span>`:''}</div>`}).join(''):'<div class="xs faint">Add what you take — tap ＋ below.</div>'}
  <button type="button" class="btn2 pri" data-x="sadd" style="width:100%;margin-top:10px">＋ Add supplement</button></div>
 ${A.length?`<div class="card mb"><div class="hsh"><b>📅 Last 14 days</b><span class="xs faint">tap a day to fix it</span></div><div class="sgrid">${A.map(it=>`<div class="sgr"><span>${esc(it.emoji||'💊')}</span><div>${Array.from({length:14},(_,i)=>{const d=addDays(n,i-13),ok=!!sLog_d30(d,it.id),pre=it.start&&d<it.start;return `<i class="${ok?'ok':''} ${pre?'pre':''}" data-x="sday" data-id="${it.id}" data-d="${d}" title="${d}"></i>`}).join('')}</div></div>`).join('')}</div></div>`:''}
 <div class="card mb"><div class="hsh"><b>🗂 Past supplements</b><span class="xs faint">${P.length} stopped</span></div>
  ${P.length?P.map(it=>`<div class="spast" data-x="sedit" data-id="${it.id}"><b>${esc(it.emoji||'💊')} ${esc(it.name)}</b><small>${esc([it.dose?it.dose+' '+(it.unit||''):'',it.start?fd(it.start,{month:'short',year:'numeric'}):'',it.stop&&it.stop!=='?'?'→ '+fd(it.stop,{month:'short',year:'numeric'}):'stopped',sDays_d30(it)&&it.start?sDays_d30(it)+' days':''].filter(Boolean).join(' · '))}${it.notes?'<br>'+esc(it.notes):''}</small></div>`).join(''):'<div class="xs faint">Supplements you stop move here, with dates — so you always know what you took and when.</div>'}</div>
 <div class="xs faint" style="margin:0 4px 12px">Your list is encrypted in its own private file. Tell your doctor what you take, especially anything injected or hormonal.</div>`}

function openSupp_d30(id){const it=id?S_().items.find(x=>x.id===id):null,v=it||{when:'morning',freq:'daily',start:nowD().date};let emo=v.emoji||'💊';
 sheet(head(it?'Edit supplement':'Add supplement','heart','bg-g')+`
 ${it?'':`<div class="spre">${SPRE_d30.map(([e,n,u],i)=>`<button type="button" data-sp="${i}">${e} ${n}</button>`).join('')}</div>`}
 <div class="hmform">
  <label class="wide"><span>Name</span><input id="sname" class="inp" value="${esc(v.name||'')}" placeholder="e.g. Vitamin D3"></label>
  <label><span>Dose</span><input id="sdose" class="inp" inputmode="decimal" value="${esc(v.dose||'')}" placeholder="5000"></label>
  <label><span>Unit</span><input id="sunit" class="inp" value="${esc(v.unit||'')}" placeholder="IU / g / mg"></label>
  <label><span>When</span><select id="swhen" class="inp">${SWHEN_d30.map(([k,l])=>`<option value="${k}" ${v.when===k?'selected':''}>${l}</option>`).join('')}</select></label>
  <label><span>How often</span><select id="sfreq" class="inp">${SFREQ_d30.map(([k,l])=>`<option value="${k}" ${v.freq===k?'selected':''}>${l}</option>`).join('')}</select></label>
  <label><span>Started</span><input id="sstart" class="inp" type="date" value="${esc(v.start&&v.start!=='?'?v.start:'')}"></label>
  <label><span>Stopped</span><input id="sstop" class="inp" type="date" value="${esc(v.stop&&v.stop!=='?'?v.stop:'')}"></label>
  <label class="wide"><span>Brand / notes</span><input id="snotes" class="inp" value="${esc(v.notes||'')}" placeholder="brand, why you take it, how you feel"></label></div>
 ${it&&!it.stop?`<button type="button" class="btn2" id="sstopnow" style="width:100%;margin-top:8px">⏹ I stopped taking it today</button>`:''}${it&&it.stop?`<button type="button" class="btn2" id="srestart" style="width:100%;margin-top:8px">▶️ I’m taking it again</button>`:''}
 <div class="btnrow">${it?'<button type="button" class="btn2 danger" id="sdel">Delete</button>':''}<button type="button" class="btn2" data-act="close">Cancel</button><button type="button" class="btn2 pri" id="ssave">Save</button></div>`);
 $$('#sheet [data-sp]').forEach(b=>b.onclick=()=>{const [e,n,u]=SPRE_d30[+b.dataset.sp];emo=e;$('#sname').value=n;$('#sunit').value=u;$$('#sheet [data-sp]').forEach(x=>x.classList.toggle('on',x===b));$('#sdose').focus()});
 const save=extra=>{const name=$('#sname').value.trim();if(!name){toast('Add a name');return}const t=new Date().toISOString(),pre=SPRE_d30.find(p=>p[1].toLowerCase()===name.toLowerCase());
  const o={...(it||{id:'s'+uid(),created:t}),name,emoji:it?.emoji||(pre?pre[0]:emo),dose:$('#sdose').value.trim(),unit:$('#sunit').value.trim(),when:$('#swhen').value,freq:$('#sfreq').value,start:$('#sstart').value||(it?.start)||'',stop:$('#sstop').value||'',notes:$('#snotes').value.trim(),updated:t,...(extra||{})};
  if(it)Object.assign(it,o);else{S_().items.push(o);xpFly(document.body,'+5 XP')}SS.queue();closeSheet();toast('Saved ✓');rerenderHealth_d26()};
 $('#ssave').onclick=()=>save();
 $('#sstopnow')&&($('#sstopnow').onclick=()=>save({stop:nowD().date}));
 $('#srestart')&&($('#srestart').onclick=()=>save({stop:'',start:nowD().date,notes:[it.notes,`taken before${it.start?' '+it.start:''} → ${it.stop}`].filter(Boolean).join(' · ')}));
 $('#sdel')&&($('#sdel').onclick=e=>{const b=e.currentTarget;if(b.dataset.sure!=='1'){b.dataset.sure='1';b.textContent='Sure?';return}it.deleted=true;it.updated=new Date().toISOString();SS.queue();closeSheet();rerenderHealth_d26()})}

/* third tab on the Health page */
const _renderHealth_d30=renderHealth_d26;renderHealth_d26=function(){_renderHealth_d30();const el=$('#p-health');if(!el)return;const tabs=el.querySelector('.ntabs');if(!tabs)return;
 if(!tabs.querySelector('[data-t="supps"]'))tabs.insertAdjacentHTML('beforeend',`<button type="button" class="${hTab_d26==='supps'?'on':''}" data-x="htab" data-t="supps">💊 Supps</button>`);
 if(hTab_d26!=='supps')return;tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.t==='supps'));const pt=el.querySelector('.pt span');if(pt)pt.textContent='food · body · supplements';
 while(tabs.nextSibling)tabs.nextSibling.remove();if(!SS.loaded){tabs.insertAdjacentHTML('afterend','<div class="card faint">Loading…</div>');SS.load().then(()=>{if(curPage()==='health'&&hTab_d26==='supps')renderHealth_d26()});return}
 tabs.insertAdjacentHTML('afterend',suppsHTML_d30())};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="stake"],[data-x="sedit"],[data-x="sadd"],[data-x="sday"],[data-x="stoday"]');if(!a)return;e.preventDefault();const x=a.dataset.x;
 SS.load().then(()=>{if(x==='stake')sToggle_d30(a.dataset.id);else if(x==='sday')sToggle_d30(a.dataset.id,a.dataset.d);else if(x==='sedit')openSupp_d30(a.dataset.id);else if(x==='sadd')openSupp_d30();else{hTab_d26='supps';location.hash='#health';setTimeout(renderHealth_d26,60)}})});

/* Today: supplements reminder inside the food card */
const _renderToday_d30=renderToday;renderToday=function(G){_renderToday_d30(G);const c=$('#p-today .hfoodtoday');if(!c)return;if(!SS.loaded){SS.load().then(()=>{if(curPage()==='today')rerender()});return}
 const n=nowD().date,due=sActive_d30().filter(x=>sDue_d30(x,n));if(!due.length)return;const left=due.filter(x=>!sLog_d30(n,x.id));
 c.querySelector('.hftb')?.insertAdjacentHTML('beforebegin',`<div class="stline">${left.length?`<span>💊 Still to take:</span>${left.map(x=>`<button type="button" class="btn2 sm" data-x="stake" data-id="${x.id}">${esc(x.emoji||'💊')} ${esc(x.name)}</button>`).join('')}`:`<span>💊 All ${due.length} supplements taken ✓</span>`}</div>`)};
/* XP for supplements */
const _habXP_d30=habXP;habXP=function(){let x=_habXP_d30();if(SS.loaded)x+=S_().logs.filter(l=>l.taken&&!l.deleted).length*2;return x};

window.addEventListener('hashchange',()=>{if(curPage()==='today'&&SS.loaded&&D)setTimeout(rerender,40)});


/* ================= v31: Borna Circle — who is close to you, as a living orbit ================= */
const RINGS_d31=[[1,'Inner circle','❤️','#f43f5e'],[2,'Close','💜','#a855f7'],[3,'Friends & partners','🤝','#3b82f6'],[4,'Business','💼','#06b6d4'],[5,'Occasional','🌙','#64748b']];
const RDEF_d31={family:1,friend:3,partner:3,team:3,client:4,buyer:4,seller:4,careful:5};
const ringOf_d31=p=>p.circle===0?0:(+p.circle||RDEF_d31[p.rel]||4);
const short_d31=n=>String(n||'').replace(/^(Mr|Dr|Mrs|Ms|Haj)\.?\s+/i,'').split(/\s+/)[0];
const isNew_d31=p=>p.auto&&!p.circleOk&&p.added&&(new Date(nowD().date)-new Date(p.added))/864e5<=7;
const recent_d31=p=>{const a=(D.circle_activity||{})[p.id];return a&&a.last&&(new Date(nowD().date)-new Date(a.last))/864e5<=2};
function setCircle_d31(id,patch){U.people=U.people||[];const t=new Date().toISOString(),ex=U.people.find(x=>x.id===id);if(ex)Object.assign(ex,patch,{updated:t});else U.people.push({id,...patch,updated:t});queueSave()}
function circleHTML_d31(){const P=people(),inC=P.filter(p=>ringOf_d31(p)>0),R=[0,15.5,24.5,32.5,39.5,45.5],AV=[0,8.8,7.8,7,6.3,5.7];
 const byR={};inC.forEach(p=>(byR[ringOf_d31(p)]=byR[ringOf_d31(p)]||[]).push(p));
 let nodes='',lines='';const placed=[];Object.entries(byR).sort((a,b)=>a[0]-b[0]).forEach(([r,L])=>{r=+r;L.sort((a,b)=>(a.order??99)-(b.order??99)||a.name.localeCompare(b.name));
  const pos=o=>L.map((_,i)=>{const g=(o+i*360/L.length-90)*Math.PI/180;return[50+R[r]*Math.cos(g),50+R[r]*Math.sin(g)]});let best=0,bs=-1;
  for(let o=0;o<360/L.length;o+=3){const P=pos(o);const md=Math.min(99,...P.flatMap(([x,y])=>placed.map(([a,b])=>Math.hypot(x-a,y-b))));if(md>bs){bs=md;best=o}}
  const prev=placed,step=360/L.length,PP=L.map((_,i)=>{let bx=null,bd=-1;for(let d=-step*0.4;d<=step*0.4;d+=2){const g=(best+i*step+d-90)*Math.PI/180,x=50+R[r]*Math.cos(g),y=50+R[r]*Math.sin(g),md=Math.min(99,...prev.map(([a,b])=>Math.hypot(x-a,y-b*1.0)+(Math.abs(y-b)<4&&Math.hypot(x-a,y-b)<14?-2:0)));if(md>bd+0.5){bd=md;bx=[x,y]}}placed.push(bx);return bx});
  L.forEach((p,i)=>{const [x,y]=PP[i],col=RINGS_d31[r-1][3],sz=AV[r];
   lines+=`<line x1="50" y1="50" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" style="stroke:${col};opacity:${(0.62-r*0.1).toFixed(2)}"/>`;
   nodes+=`<button type="button" class="cnode r${r} ${isNew_d31(p)?'nw':''} ${recent_d31(p)?'hot':''}" data-cp="${p.id}" style="left:${x}%;top:${y}%;--sz:${sz}%;--c:${col};animation-delay:${(i*0.35+r*0.2).toFixed(2)}s"><span class="cav">${p.photo?`<img src="${p.photo}" alt="">`:`<i>${esc((p.emoji)||initials(p.name))}</i>`}</span><em>${esc(short_d31(p.name))}</em></button>`})});
 const todo=P.filter(p=>!p.circleOk&&ringOf_d31(p)>0).length;
 return `<div class="bcircle"><div class="bch"><div><b>◉ Borna Circle</b><small>${inC.length} people · closer = more important</small></div><button type="button" class="btn2 sm bcint" data-cx="interview">🎙 Interview${todo?` <span>${todo}</span>`:''}</button></div>
 <div class="bcsky"><div class="bcstars"></div><svg viewBox="0 0 100 100" class="bcsvg" aria-hidden="true"><defs><radialGradient id="bcg_d31"><stop offset="0" stop-color="#8b5cf6" stop-opacity=".55"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></radialGradient></defs>
  <circle cx="50" cy="50" r="22" fill="url(#bcg_d31)"/>${RINGS_d31.map(([r,,,c])=>`<circle cx="50" cy="50" r="${R[r]}" class="bring" style="stroke:${c}"/><circle cx="50" cy="50" r="${R[r]}" class="bscan" style="stroke:${c};animation-duration:${14+r*7}s;animation-direction:${r%2?'normal':'reverse'}"/>`).join('')}
  <g class="blines">${lines}</g></svg>
  <div class="bcore" data-cx="me">${D.photo?`<img src="${D.photo}" alt="Borna">`:''}<b>BORNA</b></div>${nodes}</div>
 <div class="bleg">${RINGS_d31.map(([r,n,e,c])=>`<span style="--c:${c}"><i></i>${n} · ${(byR[r]||[]).length}</span>`).join('')}</div>
 <div class="xs faint" style="margin-top:6px">Tap someone to move them closer or further. ✨ = new — Claude added them from WhatsApp or email. Glowing = you talked in the last 2 days.</div></div>`}
const _renderPeople_d31=renderPeople;renderPeople=function(){_renderPeople_d31();const el=$('#p-people');if(!el||el.querySelector('.bcircle'))return;el.querySelector('.pt')?.insertAdjacentHTML('afterend',circleHTML_d31())};

function openCP_d31(id){const p=personById(id);if(!p)return;const r=ringOf_d31(p),a=(D.circle_activity||{})[id];
 sheet(`<div class="cps"><div class="cph">${avatar(p,64)}<div><b>${esc(p.name)}</b><small>${esc(p.role||'')}</small>${p.auto?`<small class="cpa">✨ Added by Claude${p.source?' from '+esc(p.source):''}${p.added?' · '+fd(p.added,{day:'numeric',month:'short'}):''}</small>`:''}${a&&a.last?`<small>Last talk ${(()=>{const n=Math.round((new Date(nowD().date)-new Date(a.last))/864e5);return n<=0?'today':n===1?'yesterday':n+' days ago'})()}${a.n7?' · '+a.n7+' chats this week':''}</small>`:''}</div></div>
 ${p.notes&&p.auto?`<div class="xs" style="margin:6px 0 10px;opacity:.8">${esc(p.notes)}</div>`:''}
 <div class="ahd">How close is ${esc(short_d31(p.name))}?</div><div class="cpr">${RINGS_d31.map(([k,n,e,c])=>`<button type="button" class="${k===r?'on':''}" data-ring="${k}" style="--c:${c}"><span>${e}</span>${n}</button>`).join('')}</div>
 <div class="btnrow"><button type="button" class="btn2" data-ring="0">Hide from circle</button>${p.auto&&!p.circleOk?'<button type="button" class="btn2 danger" id="cprem">Remove person</button>':''}<button type="button" class="btn2 pri" id="cpopen">Open contact</button></div></div>`);
 $$('#sheet [data-ring]').forEach(b=>b.onclick=()=>{const k=+b.dataset.ring;setCircle_d31(id,{circle:k,circleOk:1});closeSheet();rerender();toast(k?`${short_d31(p.name)} → ${RINGS_d31[k-1][1]}`:'Hidden from your circle')});
 $('#cpopen').onclick=()=>{closeSheet();setTimeout(()=>openPerson(id),60)};
 $('#cprem')&&($('#cprem').onclick=()=>{setCircle_d31(id,{deleted:true});closeSheet();rerender();toast('Removed — Claude won’t add them again')})}

/* interview: one person at a time, then "who else?" */
function interview_d31(){const L=people().filter(p=>!p.circleOk&&ringOf_d31(p)>0);let i=0;
 const step=()=>{if(i>=L.length)return askNew();const p=L[i];
  sheet(`<div class="civ"><div class="xs faint">Interview · ${i+1} / ${L.length}</div><div class="civp">${avatar(p,84)}<b>${esc(p.name)}</b><small>${esc(p.role||'')}</small></div><h3>How close is ${esc(short_d31(p.name))} to you?</h3>
   <div class="cpr">${RINGS_d31.map(([k,n,e,c])=>`<button type="button" class="${k===ringOf_d31(p)?'sug':''}" data-ring="${k}" style="--c:${c}"><span>${e}</span>${n}</button>`).join('')}</div>
   <div class="btnrow"><button type="button" class="btn2" data-ring="0">Not in my circle</button><button type="button" class="btn2" id="civskip">Skip</button><button type="button" class="btn2" data-act="close">Stop</button></div></div>`);
  $$('#sheet [data-ring]').forEach(b=>b.onclick=()=>{setCircle_d31(p.id,{circle:+b.dataset.ring,circleOk:1});xpFly(document.body,'+2 XP');i++;step()});$('#civskip').onclick=()=>{i++;step()}};
 const askNew=()=>{sheet(`<div class="civ"><div class="civp"><span class="cbig">🌌</span></div><h3>Who else is close to you?</h3><div class="xs faint" style="margin-bottom:10px">Add anyone missing — family, a friend, someone you work with.</div>
   <div class="fld"><input id="cnn" class="inp" placeholder="Name"></div><div class="cpr">${RINGS_d31.map(([k,n,e,c])=>`<button type="button" data-nr="${k}" style="--c:${c}" class="${k===2?'on':''}"><span>${e}</span>${n}</button>`).join('')}</div>
   <div class="btnrow"><button type="button" class="btn2" data-act="close">Done</button><button type="button" class="btn2 pri" id="cnadd">Add</button></div></div>`);let nr=2;
  $$('#sheet [data-nr]').forEach(b=>b.onclick=()=>{nr=+b.dataset.nr;$$('#sheet [data-nr]').forEach(x=>x.classList.toggle('on',x===b))});
  $('#cnadd').onclick=()=>{const n=$('#cnn').value.trim();if(!n){closeSheet();rerender();return}U.people=U.people||[];U.people.push({id:'u-'+uid(),name:n,rel:nr===1?'family':nr<=3?'friend':'partner',circle:nr,circleOk:1,updated:new Date().toISOString()});queueSave();toast(n+' added ✓');askNew()};
  if(!L.length)return;confetti(40)};
 step()}
document.addEventListener('click',e=>{const a=e.target.closest('[data-cp],[data-cx]');if(!a)return;e.preventDefault();e.stopPropagation();
 if(a.dataset.cp)openCP_d31(a.dataset.cp);else if(a.dataset.cx==='interview')interview_d31();else if(a.dataset.cx==='me'){const b=$('.bcsky');b&&b.classList.remove('pulse');void b?.offsetWidth;b?.classList.add('pulse')}},true);


/* ================= v32: people profiles from the interview · ready-to-send messages · circle links ================= */
const MSGP_d32={omid:'p-omid',fereshte:'p-fereshte',ibrahim:'p-ibrahim',yusuf:'p-yusuf',ancel:'p-ansel'};
const TRUST_d32=['','Careful','Low','OK','High','Total'];
function msgFor_d32(pid){return (D.alerts||[]).filter(a=>a.type==='msg'&&!(U.seen||{})[a.id]).find(a=>{const k=(a.id.match(/^al-([a-z]+)-/)||[])[1];return MSGP_d32[k]===pid})}
const trustHTML_d32=t=>t?`<span class="trust t${t}" title="Trust: ${TRUST_d32[t]}">${'●'.repeat(t)}${'○'.repeat(5-t)}<em>${TRUST_d32[t]} trust</em></span>`:'';
function profileHTML_d32(p){const L=(p.links||[]).map(personById).filter(Boolean),m=msgFor_d32(p.id),r=ringOf_d31(p),R=RINGS_d31[r-1];
 return `<div class="pprof">${R?`<span class="pring" style="--c:${R[3]}">${R[2]} ${R[1]}</span>`:''}${trustHTML_d32(p.trust)}
 ${p.story?`<p class="pstory">${esc(p.story)}</p>`:''}
 ${p.biz?`<div class="pline"><b>💼 Business</b><span>${esc(p.biz)}</span></div>`:''}
 ${p.warn?`<div class="pwarn">⚠️ ${esc(p.warn)}</div>`:''}
 ${L.length?`<div class="plinks"><b>Knows</b>${L.map(x=>`<button type="button" data-plink="${x.id}">${avatar(x,22)}${esc(short_d31(x.name))}</button>`).join('')}</div>`:''}
 ${m?`<a class="pmsg" href="${esc(m.url)}" target="_blank" rel="noopener noreferrer" data-msgsent="${m.id}"><span>💬 Today’s message is ready</span><q dir="auto">${esc(m.text)}</q><b>Send on WhatsApp ↗</b></a>`:''}</div>`}
/* person sheet */
const _openPerson_d32=openPerson;openPerson=function(id){_openPerson_d32(id);const p=personById(id);if(!p)return;const h=$('#sheet .phead');if(h&&!$('#sheet .pprof'))h.insertAdjacentHTML('afterend',profileHTML_d32(p))};
/* circle sheet */
const _openCP_d32=openCP_d31;openCP_d31=function(id){_openCP_d32(id);const p=personById(id);if(!p)return;const h=$('#sheet .cph');if(h&&!$('#sheet .pprof'))h.insertAdjacentHTML('afterend',profileHTML_d32(p).replace('<div class="pprof">','<div class="pprof sm">'))};
/* person cards: trust dots + ring colour */
const _personCard_d32=personCard;personCard=function(p){const r=ringOf_d31(p),R=RINGS_d31[r-1];return _personCard_d32(p).replace('<div class="ptags">',`<div class="ptags">${R?`<span class="pill" style="border-color:${R[3]};color:${R[3]}">${R[2]} ${R[1]}</span>`:''}${p.trust?`<span class="pill tdots t${p.trust}">${'●'.repeat(p.trust)}</span>`:''}`)};
document.addEventListener('click',e=>{const a=e.target.closest('[data-plink],[data-msgsent]');if(!a)return;
 if(a.dataset.plink){e.preventDefault();e.stopPropagation();closeSheet();setTimeout(()=>openPerson(a.dataset.plink),80);return}
 const id=a.dataset.msgsent;setTimeout(()=>{U.seen=U.seen||{};U.seen[id]={updated:new Date().toISOString()};queueSave();toast('Marked as sent ✓');if(curPage()==='today')rerender()},600)},true);

/* Today: messages ready to send, one tap each */
const _renderToday_d32=renderToday;renderToday=function(G){_renderToday_d32(G);const el=$('#p-today');if(!el||el.querySelector('.msgready'))return;
 const M=(D.alerts||[]).filter(a=>a.type==='msg'&&!(U.seen||{})[a.id]);if(!M.length)return;
 const html=`<div class="card mb msgready"><div class="hsh"><b>💬 Ready to send</b><span class="xs faint">${M.length} message${M.length>1?'s':''} · tap → WhatsApp → send</span></div>
  ${M.map(a=>{const k=(a.id.match(/^al-([a-z]+)-/)||[])[1],p=personById(MSGP_d32[k]);return `<div class="mr32">${p?avatar(p,38):'<span class="av" style="width:38px;height:38px">💬</span>'}<div class="mt32"><b>${esc(p?short_d31(p.name):a.title)}</b><q dir="auto">${esc(a.text||'')}</q></div><a class="btn2 sm pri" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer" data-msgsent="${a.id}">Send ↗</a><button type="button" class="x" data-seen="${a.id}" aria-label="Skip">${ic('x')}</button></div>`}).join('')}</div>`;
 const t=el.querySelector('.v8top');if(t){const r=t.querySelector('.reward');(r||t.firstElementChild)?.insertAdjacentHTML('afterend',html)}else el.insertAdjacentHTML('afterbegin',html)};
/* bell: msg alerts get a proper send button */
const _alertRow_d32=alertRow;alertRow=function(a){const h=_alertRow_d32(a);return a.type==='msg'?h.replace('>Open ↗</a>',` data-msgsent="${a.id}">Send on WhatsApp ↗</a>`).replace(`<div>${esc(a.text)}</div>`,`<div dir="auto">${esc(a.text)}</div>`):h};

/* circle: tap & hold the core to show who knows whom */
document.addEventListener('click',e=>{const a=e.target.closest('[data-cx="links"]');if(!a)return;e.preventDefault();const s=$('.bcsky');if(s)s.classList.toggle('showlinks')},true);
const _circleHTML_d32=circleHTML_d31;circleHTML_d31=function(){let h=_circleHTML_d32();const P=people(),pos={};
 [...h.matchAll(/data-cp="([^"]+)" style="left:([\d.]+)%;top:([\d.]+)%/g)].forEach(m=>pos[m[1]]=[+m[2],+m[3]]);const seen=new Set();let L='';
 P.forEach(p=>(p.links||[]).forEach(q=>{const k=[p.id,q].sort().join('|');if(seen.has(k)||!pos[p.id]||!pos[q])return;seen.add(k);const bad=(p.beef||[]).includes(q)||(personById(q)?.beef||[]).includes(p.id);L+=`<line x1="${pos[p.id][0]}" y1="${pos[p.id][1]}" x2="${pos[q][0]}" y2="${pos[q][1]}" class="${bad?'beef':''}"/>`}));
 h=h.replace('<g class="blines">',`<g class="xlinks">${L}</g><g class="blines">`);
 return h.replace('<div class="bleg">','<div class="bleg"><button type="button" class="bclink" data-cx="links">🕸 Who knows whom</button>')};


/* ================= v33: type any food (no photo needed) · your usual meals · eating-pattern insights ================= */
const DISH_d33=[[/mexican|burrito bowl|my bowl/i,'🥗',570,52],[/spag|pasta|macaroni|ماکارونی|lasagn/i,'🍝',650,28],[/meat ?ball|کوفته/i,'🧆',250,18],[/burger|همبرگر/i,'🍔',650,30],[/pizza|پیتزا/i,'🍕',700,28],[/shawarma|شاورما/i,'🌯',550,30],[/koobideh|kubideh|kabab|kebab|کباب/i,'🍢',600,35],[/joojeh|jujeh|جوجه/i,'🍗',550,45],[/ghormeh|قورمه/i,'🍲',650,25],[/gheymeh|قیمه/i,'🍲',650,22],[/zereshk|زرشک/i,'🍛',700,40],[/biryani|بریانی/i,'🍛',700,30],[/(^|\s)rice|polo|chelo|برنج|پلو|چلو/i,'🍚',350,7],[/chicken|مرغ/i,'🍗',350,40],[/steak|beef|گوشت/i,'🥩',450,40],[/fish|salmon|ماهی/i,'🐟',350,35],[/sushi/i,'🍣',450,20],[/salad|سالاد/i,'🥗',200,5],[/sandwich|ساندویچ/i,'🥪',450,20],[/fries|سیب زمینی/i,'🍟',400,4],[/soup|آش|سوپ/i,'🥣',250,8],[/egg|omelet|تخم/i,'🍳',220,14],[/bread|nan|نان/i,'🫓',160,5],[/yogurt|ماست/i,'🥛',150,12],[/fruit|میوه|apple|banana/i,'🍎',100,1],[/cake|کیک|sweet|شیرینی|chocolate/i,'🍰',400,5],[/dates|خرما/i,'🌴',140,1],[/nuts|آجیل/i,'🥜',300,9],[/protein|whey/i,'🥤',150,25]];
function guess_d33(t){t=String(t||'');let k=0,p=0,e='🍽',hit=0;DISH_d33.forEach(([re,em,kc,pr])=>{if(re.test(t)){k+=kc;p+=pr;if(!hit)e=em;hit++}});const n=+((t.match(/(\d+)\s*(x|×|pieces|portion|plate)/i)||[])[1]||1);return hit?{kcal:Math.round(k*Math.min(n,4)),p:Math.round(p*Math.min(n,4)),e}:null}
const mealName_d33=m=>(m.items&&m.items.length?m.items.map(i=>(i.q>1?i.q+'× ':'')+i.n).join(' + '):(m.text||'')).trim();
const mealKcal_d33=m=>{const e=(D.food_est||{})[m.id];return e&&e.kcal?e.kcal:(m.kcal||null)};
function usual_d33(slot){const from=addDays(nowD().date,-60),G={};H_().meals.filter(m=>!m.deleted&&!m.skipped&&m.date>=from&&(!slot||m.slot===slot)).forEach(m=>{const n=mealName_d33(m);if(!n)return;const k=n.toLowerCase();const g=G[k]||(G[k]={n,c:0,last:m,kc:[]});g.c++;if((m.date+m.time)>(g.last.date+g.last.time))g.last=m;const kc=mealKcal_d33(m);if(kc)g.kc.push(kc)});
 return Object.values(G).sort((a,b)=>b.c-a.c||(b.last.date).localeCompare(a.last.date)).slice(0,8).map(g=>({...g,kcal:g.kc.length?Math.round(g.kc.reduce((a,b)=>a+b,0)/g.kc.length):null}))}

const _openMeal_d33=openMeal_d26;openMeal_d26=function(id,opt={}){_openMeal_d33(id,opt);const q=$('#mq'),tx=$('#mtext'),kc=$('#mkcal');if(!q||!tx)return;
 q.placeholder='Type what you ate — e.g. spaghetti with meatballs';
 /* typed food that isn't in the list → one tap to use it */
 const useTyped=()=>{const v=q.value.trim();if(!v)return;tx.value=tx.value.trim()?tx.value.trim()+', '+v:v;const g=guess_d33(tx.value);if(g&&!kc.value&&!$('#hsel .hchip'))kc.value=g.kcal;q.value='';q.dispatchEvent(new Event('input'));tx.dispatchEvent(new Event('input'));hint()};
 const hint=()=>{const g=guess_d33(tx.value);const h=$('#mhint');if(h&&tx.value&&!$('#hsel .hchip'))h.innerHTML=g?`≈ <b>${g.kcal} kcal</b> · ${g.p} g protein (quick guess) — Claude will check it.`:'Claude will estimate the calories within the hour.'};
 const addBtn=()=>{const v=q.value.trim(),box=$('#hfoods');if(!box)return;box.querySelector('.huse')?.remove();if(!v)return;const g=guess_d33(v);
  box.insertAdjacentHTML('afterbegin',`<button type="button" class="huse">${g?g.e:'➕'} Use “${esc(v)}”${g?`<small>≈${g.kcal}</small>`:''}</button>`);box.querySelector('.huse').onclick=useTyped};
 q.addEventListener('input',()=>setTimeout(addBtn,0));q.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();useTyped()}});tx.addEventListener('input',hint);
 /* your usual meals for this slot */
 const slotNow=()=>$('#sheet [data-sl].on')?.dataset.sl||'lunch';
 const drawUsual=()=>{$('#husual')?.remove();const U=usual_d33(slotNow()).filter(u=>u.c>=1).slice(0,6);if(!U.length)return;
  q.insertAdjacentHTML('beforebegin',`<div id="husual"><div class="hul">⭐ Your usual ${esc((SLOTS_d26.find(s=>s[0]===slotNow())||[])[2]||'')}</div><div class="husl">${U.map((u,i)=>`<button type="button" data-us="${i}">${esc(u.n.length>34?u.n.slice(0,32)+'…':u.n)}<small>${u.c>1?u.c+'× · ':''}${u.kcal?u.kcal+' kcal':''}</small></button>`).join('')}</div></div>`);
  $$('#husual [data-us]').forEach(b=>b.onclick=()=>{const u=U[+b.dataset.us],m=u.last;
   if(m.items&&m.items.length&&m.items.every(it=>$(`#hfoods [data-fd="${CSS.escape(it.n)}"]`)||true)){let ok=true;q.value='';q.dispatchEvent(new Event('input'));
    m.items.forEach(it=>{for(let k=0;k<(it.q||1);k++){q.value=it.n;q.dispatchEvent(new Event('input'));const fb=[...$$('#hfoods [data-fd]')].find(x=>x.dataset.fd===it.n);if(fb)fb.click();else ok=false}});q.value='';q.dispatchEvent(new Event('input'));
    if(!ok){tx.value=u.n;if(u.kcal)kc.value=u.kcal}}
   else{tx.value=m.text||u.n;if(u.kcal)kc.value=u.kcal;tx.dispatchEvent(new Event('input'))}
   b.classList.add('on');toast('Added: '+u.n.slice(0,40))})};
 drawUsual();$$('#sheet [data-sl]').forEach(b=>b.addEventListener('click',()=>setTimeout(drawUsual,0)));
 /* save: typed-but-not-added text counts too */
 const sv=$('#msave'),orig=sv.onclick;sv.onclick=ev=>{if(q.value.trim())useTyped();if(!kc.value&&tx.value.trim()&&!$('#hsel .hchip')){/* leave kcal empty → Claude estimates */}return orig(ev)};
 if(tx.value)hint()};

/* Food tab: what you really eat */
function patternHTML_d33(){const from=addDays(nowD().date,-13),M=H_().meals.filter(m=>!m.deleted&&!m.skipped&&m.date>=from);if(M.length<3)return '';
 const days=new Set(M.map(m=>m.date)).size,T={};M.filter(m=>m.slot!=='drink').forEach(m=>{(m.items&&m.items.length?m.items.map(i=>i.n):[m.text]).filter(Boolean).forEach(n=>{const k=n.trim().toLowerCase();T[k]=T[k]||{n:n.trim(),c:0};T[k].c++})});
 const top=Object.values(T).sort((a,b)=>b.c-a.c).slice(0,6),avgT=s=>{const L=M.filter(m=>m.slot===s&&m.time).map(m=>{const[h,mi]=m.time.split(':');return +h*60+ +mi});if(!L.length)return null;const a=Math.round(L.reduce((x,y)=>x+y,0)/L.length);return String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')};
 const coffee=M.filter(m=>m.slot==='drink'&&/coffee|espresso|latte|cappuccino|americano|flat|nescaf|turkish/i.test(m.text||'')).reduce((a,m)=>a+(m.q||1),0),late=M.filter(m=>m.time&&m.time>='22:00'&&m.slot!=='drink').length;
 const kc=[...new Set(M.map(m=>m.date))].map(d=>M.filter(m=>m.date===d).reduce((a,m)=>a+(mealKcal_d33(m)||0),0)).filter(Boolean),avgK=kc.length?Math.round(kc.reduce((a,b)=>a+b,0)/kc.length):null;
 const tips=[];if(top[0]&&top[0].c>=Math.max(3,days*0.6))tips.push(`You eat ${top[0].n.toLowerCase()} almost every day — I’ll keep it one tap away.`);if(coffee/days>=3)tips.push(`About ${Math.round(coffee/days)} coffees a day — try to stop after 4 pm for better sleep.`);if(late>=2)tips.push(`${late} late meals (after 10 pm) in 2 weeks — late eating slows belly-fat loss.`);if(avgK&&avgK>targets_d26().kcal+150)tips.push(`Average ≈ ${avgK} kcal a day — about ${avgK-targets_d26().kcal} over your target.`);
 return `<div class="card mb hpat"><div class="hsh"><b>🧠 Your eating pattern</b><span class="xs faint">last 14 days · ${days} day${days>1?'s':''} logged</span></div>
  <div class="hpt">${[['🍳 Breakfast',avgT('breakfast')],['🍛 Lunch',avgT('lunch')],['🍽 Dinner',avgT('dinner')],['☕ Coffee/day',days?(Math.round(coffee/days*10)/10):0],['🔥 Avg kcal',avgK||'—']].map(([l,v])=>`<div><small>${l}</small><b>${v??'—'}</b></div>`).join('')}</div>
  ${top.length?`<div class="hptop">${top.map(t=>`<span>${esc(t.n)} <b>×${t.c}</b></span>`).join('')}</div>`:''}
  ${tips.length?`<ul class="hptips">${tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:''}</div>`}
const _renderHealth_d33=renderHealth_d26;renderHealth_d26=function(){_renderHealth_d33();const el=$('#p-health');if(!el||hTab_d26!=='food'||el.querySelector('.hpat'))return;const h=patternHTML_d33();if(!h)return;const s=el.querySelector('.hslot');(s||el.lastElementChild)?.insertAdjacentHTML('beforebegin',h)};


/* ================= v34: Vault — passwords that really match (show/hide, no autofill mix-ups) ================= */
const _wireVault_d34=wireVault;wireVault=function(){_wireVault_d34();const pw=$('#vpw'),go=$('#vgo');if(!pw||!go)return;const pw2=$('#vpw2'),creating=!!pw2;
 [pw,pw2].filter(Boolean).forEach(i=>{i.setAttribute('autocomplete',creating?'new-password':'current-password');i.setAttribute('autocapitalize','off');i.setAttribute('autocorrect','off');i.setAttribute('spellcheck','false')});
 if(!$('#vshow'))(pw2||pw).insertAdjacentHTML('afterend',`<label class="vshow"><input type="checkbox" id="vshow"> Show password${creating?'s':''}</label>`);
 $('#vshow').onchange=e=>[pw,pw2].filter(Boolean).forEach(i=>i.type=e.target.checked?'text':'password');
 const clean=v=>String(v||'').normalize('NFC').replace(/[​-‍﻿]/g,'').trim();
 const live=()=>{if(!pw2)return;const a=clean(pw.value),b=clean(pw2.value),m=$('#vmsg');if(!b){m.textContent='';return}m.textContent=a===b?'✓ Passwords match':(a.startsWith(b)||b.startsWith(a))?`Keep typing… (${b.length}/${a.length})`:`Not the same yet (${a.length} vs ${b.length} characters) — tap “Show passwords” to check`;m.style.color=a===b?'#10b981':''};
 pw.addEventListener('input',live);pw2&&pw2.addEventListener('input',live);pw2&&(pw2.onkeydown=e=>{if(e.key==='Enter')go.click()});
 go.addEventListener('click',()=>{pw.value=clean(pw.value);if(pw2)pw2.value=clean(pw2.value)},true)};


/* ================= v35: Notes — no Evernote import; quick Checklist button instead ================= */
function fixNact_d35(){const l=document.querySelector('#p-notes .nact label.alt3');if(!l||!l.querySelector('#enex'))return;
 l.outerHTML=`<button type="button" class="bigadd alt3" data-x="nchk_d35">☑️ Checklist</button>`}
new MutationObserver(()=>fixNact_d35()).observe(document.body,{childList:true,subtree:true});
document.addEventListener('click',e=>{const a=e.target.closest('[data-x="nchk_d35"]');if(!a)return;e.preventDefault();e.stopPropagation();
 openNote(null);setTimeout(()=>{const t=$('#ntitle'),b=$('#nbody');if(t&&!t.value)t.value='Checklist';if(b&&!b.value){b.value='☐ \n☐ \n☐ ';b.focus();b.setSelectionRange(2,2)}},80)},true);


/* ================= v36: Vault — stop iPhone "Strong Password" autofill; Show passwords really shows them ================= */
const _wireVault_d36=wireVault;wireVault=function(){const P=[$('#vpw'),$('#vpw2')].filter(Boolean);
 P.forEach(i=>{i.type='text';i.classList.add('vmask');i.value='';['autocomplete','off','autocapitalize','off','autocorrect','off','spellcheck','false','data-lpignore','true','data-1p-ignore','true','name','vault-'+Math.random().toString(36).slice(2)].reduce((a,v,k,arr)=>{if(k%2===0)i.setAttribute(v,arr[k+1]);return a},0)});
 _wireVault_d36();
 P.forEach(i=>{i.type='text';i.setAttribute('autocomplete','off')});
 const s=$('#vshow');if(s){s.onchange=e=>P.forEach(i=>i.classList.toggle('vmask',!e.target.checked));s.checked=false}};

/* ================= v38: one-tap WhatsApp on meetings — Confirm before, Follow up after ================= */
function mPerson_d1003(m){const s=String(m.person||'').toLowerCase().trim();if(!s)return null;const P=people().filter(p=>p.phone);
 const names=p=>[p.name,...(Array.isArray(p.aka)?p.aka:p.aka?String(p.aka).split(/[,;]/):[])].map(n=>String(n||'').toLowerCase().trim()).filter(n=>n.length>2);
 return P.find(p=>names(p).includes(s))||P.find(p=>names(p).some(n=>s.includes(n)))||null}
function mWaText_d1003(m,st,p){const n=p?short(p.name):'',hi='Hi'+(n?' '+n:'');
 if(st==='upcoming'||st==='now'){const dd=daysBetween(nowD().date,m.date);const when=dd===0?'today':dd===1?'tomorrow':'on '+fd(m.date,{weekday:'long',day:'numeric',month:'short'});
  return `${hi}, just confirming our meeting ${when}${m.time?' at '+m.time:''}${m.place?' — '+m.place:''}. See you there 🙏`}
 const nx=(m.next||[])[0];return `${hi}, thank you again for our meeting${m.date?' on '+fd(m.date,{weekday:'long',day:'numeric',month:'short'}):''}. Following up on ${nx?nx:'what we discussed'} — any update from your side?`}
function mWaLink_d1003(m){try{const st=mState(m);if(st==='cancelled'||(st==='done'&&m.followDone))return null;const p=mPerson_d1003(m);if(!p)return null;
 return {p,st,url:`https://wa.me/${waNum(p.phone)}?text=${encodeURIComponent(mWaText_d1003(m,st,p))}`,lbl:st==='upcoming'||st==='now'?'Confirm':'Follow up'}}catch(e){return null}}
const _meetCard_d1003=meetCard;meetCard=function(m,big){const h=_meetCard_d1003(m,big);const w=mWaLink_d1003(m);if(!w)return h;
 const a=cls=>`<a class="${cls} wa38" href="${esc(w.url)}" target="_blank" rel="noopener noreferrer">${ic('msg')}${w.lbl}${cls?'':' with '+esc(short(w.p.name))+' on WhatsApp'}</a>`;
 if(h.includes('<div class="mbtns">'))return h.replace('<div class="mbtns">','<div class="mbtns">'+a('btn2'));
 const i=h.lastIndexOf('</div>');return i<0?h:h.slice(0,i)+`<div class="wa38row">${a('')}</div>`+h.slice(i)};
function fuWa_d1003(){try{$$('[data-fudone]').forEach(b=>{if(b.parentNode.querySelector('.wa38f'))return;const m=meetings().find(x=>x.id===b.dataset.fudone);const w=m&&mWaLink_d1003(m);if(!w)return;
 b.insertAdjacentHTML('beforebegin',`<a class="pill wa38f" href="${esc(w.url)}" target="_blank" rel="noopener noreferrer" aria-label="Follow up on WhatsApp">${ic('msg')}WhatsApp</a>`)})}catch(e){}}
const _renderToday_d1003=renderToday;renderToday=function(...a){const r=_renderToday_d1003.apply(this,a);fuWa_d1003();return r};
const _renderBusiness_d1003=renderBusiness;renderBusiness=function(...a){const r=_renderBusiness_d1003.apply(this,a);fuWa_d1003();return r};

/* ================= v39: one-tap WhatsApp on deals — ask partners for an update ================= */
function dWa_d1004(d){try{if(!d||['Won','Lost'].includes(d.stage))return [];const nm=String(d.name||'').replace(/^[^\w(]+/,'').replace(/\s+[—-]\s+AED.*$/i,'').trim();
 return (d.people||[]).map(personById).filter(p=>p&&p.phone).map(p=>({p,url:`https://wa.me/${waNum(p.phone)}?text=${encodeURIComponent(`Hi ${short(p.name)}, quick follow-up on ${nm||'our deal'} — any update from your side? What's the next step? 🙏`)}`}))}catch(e){return []}}
function dWaBtns_d1004(d,cls){return dWa_d1004(d).map(w=>`<a class="${cls} wa38" href="${esc(w.url)}" target="_blank" rel="noopener noreferrer">${ic('msg')}${esc(short(w.p.name))}</a>`).join('')}
const _dealRow_d1004=dealRow;dealRow=function(d){const h=_dealRow_d1004(d),b=dWaBtns_d1004(d,'');if(!b)return h;const i=h.lastIndexOf('</div>');return i<0?h:h.slice(0,i)+`<div class="wa39row">${b}</div>`+h.slice(i)};
const _openPipe_d1004=openPipe;openPipe=function(id){const r=_openPipe_d1004(id);try{if(id){const d=pipeline().find(x=>x.id===id),b=dWaBtns_d1004(d,'');const br=$('#dpf .btnrow');if(b&&br)br.insertAdjacentHTML('beforebegin',`<div class="fld"><label>Ask for an update on WhatsApp</label><div class="wa39row">${b}</div></div>`)}}catch(e){}return r};

window.addEventListener('load',()=>{if(D)draw(curPage())});
setInterval(()=>{if(D&&!$('#sheet').classList.contains('on')&&['today','calendar','business'].includes(curPage())){const y=scrollY;renderToday(game());renderCalendar();renderBusiness();window.scrollTo(0,y)}},60000);
const saved=ls.get(KEY);if(saved){$('#pw').value=saved;unlock(saved,true).catch(()=>{ls.del(KEY);$('#pw').value='';PW=null})}
setInterval(()=>{if(D&&document.visibilityState==='visible')checkPlace()},180000);document.addEventListener('visibilitychange',()=>{if(D&&document.visibilityState==='visible')checkPlace()});
})();

