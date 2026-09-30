(() => {
'use strict';
const TZ='Asia/Dubai', KEY='hq.pw', REPO='bornaxahadi/hq', API='https://api.github.com/repos/'+REPO+'/contents/';

/* ================= icons ================= */
const P={
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
const emptyU=()=>({v:1,todos:[],ctodo:{},checkins:{},deals:[],cal_requests:[],updated:null});
function mergeArr(a=[],b=[]){const m={};[...a,...b].forEach(x=>{if(!x||!x.id)return;const o=m[x.id];if(!o||(x.updated||'')>(o.updated||''))m[x.id]=x});return Object.values(m)}
function mergeObj(a={},b={},f='updated'){const m={...a};Object.entries(b).forEach(([k,v])=>{if(!m[k]||(v[f]||'')>(m[k][f]||''))m[k]=v});return m}
function mergeU(r,l){r=r||emptyU();return{v:1,todos:mergeArr(r.todos,l.todos),ctodo:mergeObj(r.ctodo,l.ctodo),checkins:mergeObj(r.checkins,l.checkins,'savedAt'),deals:mergeArr(r.deals,l.deals),cal_requests:mergeArr(r.cal_requests,l.cal_requests),updated:new Date().toISOString()}}
async function loadUser(){
 let remote=null;
 try{ if(TOKEN){const g=await ghGet('user.enc');if(g){userSalt=g.json.salt;remote=await dec(g.json)}} else {const j=await pagesJSON('user.enc');if(j){userSalt=j.salt;remote=await dec(j)}} }catch(e){console.warn(e)}
 let local=null;try{const t=ls.get('hq.user');if(t)local=JSON.parse(t)}catch(e){}
 U=local?mergeU(remote,local):(remote||emptyU());
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
 rem?ls.set(KEY,p):ls.del(KEY);await loadToken();await loadUser();
 $('#lock').classList.add('hidden');$('#app').classList.remove('hidden');render();setSync(TOKEN?'ok':'local')}
$('#lockform').addEventListener('submit',async e=>{e.preventDefault();const b=$('#unlock');b.disabled=true;b.textContent='Unlocking…';$('#err').textContent='';
 try{await unlock($('#pw').value,$('#rem').checked)}catch(err){PW=null;$('#err').textContent=err.name==='OperationError'?'Wrong password.':(err.message||'Something went wrong.')}b.disabled=false;b.textContent='Unlock'});
async function reload(){try{D=await dec(await pagesJSON('data.enc'));await loadUser();render();toast('Updated '+ago(D.updated))}catch(e){toast('Could not reload')}}

/* ================= derived data ================= */
const SUBJ=[{k:'ai',n:'AI',i:'ai',bg:'bg-v',c:'#8b5cf6'},{k:'arabic',n:'Arabic',i:'ar',bg:'bg-a',c:'#fbbf24'},{k:'cloud',n:'Cloud',i:'cloud',bg:'bg-b',c:'#60a5fa'},{k:'other',n:'Other',i:'book',bg:'bg-c',c:'#22d3ee'}];
function entries(){
 const m={};
 (D.log||[]).forEach(e=>{const w=Array.isArray(e.arabic)?e.arabic.length:(e.arabic?String(e.arabic).split(',').length:0);
  m[e.date]={date:e.date,hours:{ai:e.ai?1:0,arabic:w?0.5:0,cloud:0,other:0},gym:e.gym===true||(typeof e.gym==='string'&&!!e.gym&&!/^no/i.test(e.gym)),gymMin:0,met:0,opps:e.deals?1:0,words:w,score:+e.score||0,win:e.win||'',blocker:e.blocker||'',ai:e.ai||'',wordsText:Array.isArray(e.arabic)?e.arabic.join(', '):(e.arabic||''),src:'doc'}});
 Object.entries(U?.checkins||{}).forEach(([d,c])=>{const w=(c.words||'').split(/[,،\n]/).map(s=>s.trim()).filter(Boolean);
  m[d]={date:d,hours:{ai:+c.study?.ai||0,arabic:+c.study?.arabic||0,cloud:+c.study?.cloud||0,other:+c.study?.other||0},gym:(c.gymMin||0)>0,gymMin:c.gymMin||0,
   met:(c.meetings||[]).filter(x=>x.attended).length,opps:(c.opportunity||'').trim()?1:0,words:w.length,score:+c.score||0,win:c.win||'',blocker:c.blocker||'',ai:c.aiNote||'',wordsText:w.join(', '),src:'app'}});
 return Object.values(m).sort((a,b)=>a.date<b.date?-1:1);
}
const totalH=e=>SUBJ.reduce((a,s)=>a+(e.hours[s.k]||0),0);
function dayXP(e){return 10+Math.min(Math.round(totalH(e)*20),100)+Math.min(e.words*3,30)+(e.gym?40:0)+e.met*15+e.opps*25+(e.score>=8?20:0)}
const TITLES=['Rookie','Apprentice','Explorer','Builder','Operator','Strategist','Pro','Master','Mogul','Legend'];
function game(){
 const L=entries(),today=nowD().date;
 const doneTodos=(U?.todos||[]).filter(t=>t.done&&!t.deleted).length+Object.values(U?.ctodo||{}).filter(x=>x.done).length;
 const xp=L.reduce((a,e)=>a+dayXP(e),0)+doneTodos*5;
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
  {n:'Cloud 10h',d:'10 hours of cloud',icn:'cloud',bg:'bg-b',ok:H.cloud>=10},
  {n:'Networker',d:'Attend 10 meetings',icn:'users',bg:'bg-a',ok:L.reduce((a,e)=>a+e.met,0)>=10},
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
function eventsOn(date){const ev=(D.calendar?.events||[]).filter(e=>e.date===date).map(e=>({...e,kind:'event'}));
 const pend=(U.cal_requests||[]).filter(r=>!r.deleted&&r.date===date&&!(D.cal_done||[]).includes(r.id)).map(r=>({...r,kind:'pending'}));
 return [...ev,...pend].sort((a,b)=>(a.time||'')<(b.time||'')?-1:1)}

/* ================= nav ================= */
const PAGES=[{id:'today',l:'Today',i:'sun'},{id:'tasks',l:'To-do',i:'list'},{id:'calendar',l:'Calendar',i:'cal'},{id:'social',l:'Social',i:'chart'},{id:'growth',l:'Growth',i:'rocket'},{id:'business',l:'Business',i:'brief'}];
$('#bottom').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}<span>${p.l}</span></button>`).join('');
$('#tabs').innerHTML=PAGES.map(p=>`<button data-p="${p.id}">${ic(p.i)}${p.l}</button>`).join('');
$$('[data-p]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.p});
$('#refresh').innerHTML=ic('refresh');$('#settings').innerHTML=ic('gear');$('#fab').innerHTML=ic('plus');
$('#refresh').onclick=reload;$('#settings').onclick=openSettings;$('#fab').onclick=openActions;
$('#foot').innerHTML=ic('shield')+' Encrypted · only you can open this · Claude refreshes it through the day';
function curPage(){const id=(location.hash||'#today').slice(1);return PAGES.find(p=>p.id===id)?id:'today'}
function show(){const pg=curPage();$$('section.page').forEach(s=>s.classList.toggle('on',s.id==='p-'+pg));$$('[data-p]').forEach(b=>b.classList.toggle('on',b.dataset.p===pg));window.scrollTo(0,0);draw(pg)}
window.addEventListener('hashchange',()=>D&&show());
function render(keep){$('#updated').innerHTML=`${fd(nowD().date,{weekday:'short',day:'numeric',month:'short'})} · updated ${ago(D.updated)} <span id="sync" class="sync"></span>`;setSync(syncState);
 const G=game();renderToday(G);renderTasks();renderCalendar();renderSocial();renderGrowth(G);renderBusiness();
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
 const Q=[{n:'1h+ of AI',s:'Study or build with AI',i:'ai',bg:'bg-v',xp:20,ok:te&&te.hours.ai>=1},
  {n:'30 min Arabic',s:'Shadow at the pool',i:'ar',bg:'bg-a',xp:10,ok:te&&te.hours.arabic>=0.5},
  {n:'Gym',s:'20:00 – 22:00',i:'gym',bg:'bg-g',xp:40,ok:te&&te.gym},
  {n:'Finish 3 to-dos',s:`${doneToday}/3 done today`,i:'list',bg:'bg-p',xp:15,ok:doneToday>=3},
  {n:'Daily check-in',s:'Log hours, meetings, deals',i:'moon',bg:'bg-c',xp:10,ok:!!ci}];
 const done=Q.filter(q=>q.ok).length;
 const k=cur?KIND[cur.kind]||KIND.life:KIND.life;
 const tonight=eventsOn(n.date).filter(e=>toMin(e.time)>=17*60);
 const brBlock=(title,arr,i,bg,emptyT)=>`<div style="margin-bottom:10px"><div class="xs faint" style="font-weight:800;letter-spacing:.07em;text-transform:uppercase;margin-bottom:4px">${title} · ${arr?.length||0}</div>${arr?.length?arr.map(x=>brRow(x,i,bg)).join(''):empty(emptyT,'check')}</div>`;
 $('#p-today').innerHTML=`
 <div class="banner ${TOKEN?'hidden':''}" id="banner">${ic('key')}<span>Your check-ins and to-dos are saved on this device only. Connect saving so Claude sees them.</span><button data-act="settings">Connect</button></div>
 <div class="g3">
  <div class="card hero s2">
   <div class="me"><div class="avatar">${ring((G.xp-G.cur)/(G.nxt-G.cur),74,5,'url(#warm)')}<div class="face">BA</div><div class="lv">LV ${G.level}</div></div>
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
  <div class="s3"><button class="cin" data-act="checkin"><div class="qi bg-grad">${ic(ci?'check':'moon')}</div><div><b>${ci?'Today’s check-in saved — tap to update':'Log your day'}</b><small>${ci?`${hrs(te?totalH(te):0)} studied · score ${ci.score||'—'}/10`:'Study hours, gym, meetings, new business — takes 1 minute'}</small></div><span class="go">${ic('chev')}</span></button></div>
  ${card("Today's quests",'target','bg-grad',Q.map(q=>`<div class="quest ${q.ok?'done':''}" data-act="${q.i==='list'?'tasks':'checkin'}"><div class="qi ${q.bg}">${ic(q.i)}</div><div><b>${q.n}</b><small>${q.s}</small></div><span class="xp">+${q.xp} XP</span><span class="ok">${q.ok?ic('check'):''}</span></div>`).join(''),`${done}/${Q.length} done`)}
  ${card('To-do','list','bg-p',`<div class="addline"><input class="inp" id="qadd" placeholder="Add a task…" enterkeyhint="done"><button data-act="qadd" aria-label="Add">${ic('plus')}</button></div>${openT.slice(0,5).map(todoRow).join('')||empty('All clear','check')}${openT.length>5?`<a href="#tasks" class="xs faint" style="display:block;margin-top:8px;font-weight:700">+${openT.length-5} more →</a>`:''}`,`${openT.length} open`)}
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
function evRow(e){return `<div class="row"><div class="ico ${e.kind==='pending'?'bg-a':'bg-grad'}">${ic(e.kind==='pending'?'clock':'cal')}</div><div class="tx"><b>${esc(e.time||'All day')} · ${esc(e.title)}</b><div>${e.kind==='pending'?'Adding to Google Calendar…':esc(e.where||e.notes||'')}</div></div></div>`}
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
    ${ev.map(e=>`<div class="ev ${e.kind==='pending'?'pending':''}"><span class="tm">${esc(e.time||'All day')}</span><div><b>${esc(e.title)}</b><small>${e.kind==='pending'?'⏳ Claude will add this to Google Calendar':esc([e.end?'until '+e.end:'',e.where||'',e.notes||''].filter(Boolean).join(' · '))}</small></div></div>`).join('')}
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
 $('#p-social').innerHTML=`<div class="pt">Social growth <span>${S.length} accounts · 3 platforms</span></div>
 <div class="stats" style="margin-bottom:14px">
  ${stat(fmt(tot),'Followers','users')}
  ${stat(fmt(allViews),'Views · recent posts','eye','<div class="d faint">last 10 per account</div>')}
  ${stat(fmt(eng),'Engagements','heart','<div class="d faint">likes + comments + shares</div>')}
  ${stat(best?fmt(best.views||best.likes):'—','Best post','trophy',best?`<div class="d" style="color:var(--amber)">${esc(best.title).slice(0,26)}</div>`:'','var(--amber)')}
 </div>
 <div class="g2" style="margin-bottom:14px">
  ${card('Followers by account','users','bg-grad','<div class="chartbox sm"><canvas id="c-fol"></canvas></div><div class="legend" id="lg-fol"></div>')}
  ${card('Views by account','eye','bg-p','<div class="chartbox sm"><canvas id="c-views"></canvas></div><div class="xs faint" style="margin-top:6px">Instagram & YouTube, last 10 posts. Facebook shows reactions.</div>')}
 </div>
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
  <div class="head ${p.bg}"><div class="pav">${ic(s.platform)}</div><div style="min-width:0"><b>${esc(s.name)}</b><small>${p.n} · ${esc(s.topic||'')}</small></div><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a></div>
  <div class="stats">
   ${stat(fmt(s.followers),s.platform==='youtube'?'Subs':'Followers','users',deltaTxt(s.history))}
   ${s.platform==='youtube'?stat(fmt(s.total_views),'All views','eye'):stat(fmt(tv),isFB?'Reactions':'Views','eye','<div class="d faint">last '+r.length+'</div>')}
   ${stat(fmt(avg),isFB?'Avg react.':'Avg views','chart')}
   ${stat(gap==null?'—':gap+'d','Last post','clock',gap>4?'<div class="d down">post soon</div>':'<div class="d up">active</div>',gap>4?'var(--red)':'')}
  </div>
  <div class="posts">${r.slice(0,4).map(x=>`<a class="post" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">
   ${x.thumb?`<div class="th" data-bg="${esc(x.thumb)}"></div>`:`<div class="pi">${ic(x.type==='Carousel'?'book':x.type==='Post'?'edit':'play')}</div>`}
   <div class="tt"><b class="${x===bestP?'best':''}">${x===bestP?'★ ':''}${esc(x.title)}</b><small>${fd(x.date)} · ${esc(x.type||'')}</small><div class="vbar" style="width:${Math.max(2,Math.round((x[vKey]||0)/max*100))}%;${isFB?'background:var(--fb)':''}"></div></div>
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
   ${card('Cloud','cloud','bg-b',`<b class="sm">${esc(P.cloud?.track||'')}</b><div class="xs muted">${esc(P.cloud?.target||'')} · ${hrs(G.H.cloud)} so far</div>`)}
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
 const all=[...(D.deals||[]),...mine];const cnt=s=>all.filter(d=>d.status===s).length;
 $('#p-business').innerHTML=`<div class="pt">Business <span>${all.length} deals & opportunities</span></div>
 <div class="stats" style="margin-bottom:14px">${STATUS.map((s,i)=>stat(cnt(s),s,['bulb','bolt','clock','check'][i])).join('')}</div>
 <div class="g3">
  <div class="card s2">
   <div class="ch"><div class="ic bg-g">${ic('deal')}</div><h3>My deals & opportunities</h3><button class="pill g" data-act="deal">${ic('plus')}Add business</button></div>
   ${mine.length?mine.map(d=>{const left=d.due?daysBetween(n.date,d.due):null;const nt=notes[d.id];return `<div class="dealmini" data-editdeal="${d.id}"><div class="top"><b>${esc(d.name)}</b><span class="pill ${SCLS[d.status]||'v'}">${esc(d.status)}</span></div>
    ${d.desc?`<p>${esc(d.desc)}</p>`:''}
    <div class="meta">${d.with?`<span>${ic('users')}${esc(d.with)}</span>`:''}${d.value?`<span>${ic('money')}${esc(d.value)}</span>`:''}${d.next?`<span>${ic('chev')}${esc(d.next)}</span>`:''}${d.due?`<span style="${left<0?'color:var(--red)':''}">${ic('cal')}${left<0?'overdue':left===0?'today':fd(d.due)}</span>`:''}</div>
    ${nt?`<div class="note"><b>${ic('spark')}Claude</b>${esc(nt.text)}</div>`:`<div class="xs faint" style="margin-top:8px">Claude will research this and suggest next steps at the next refresh.</div>`}</div>`}).join(''):`<button class="cin" data-act="deal" style="margin:0"><div class="qi bg-g">${ic('plus')}</div><div><b>Add your first business</b><small>Explain the deal and Claude will research it and plan next steps</small></div></button>`}
  </div>
  ${card('Upcoming meetings','cal','bg-c',U2.length?U2.map(m=>`<div class="row"><div class="ico bg-c">${ic('users')}</div><div class="tx"><b>${esc(m.title)}</b><div>${fd(m.date,{weekday:'short',day:'numeric',month:'short'})}${m.time?' · '+esc(m.time):''}${m.where?' · '+esc(m.where):''}</div></div></div>`).join(''):empty('No meetings this week'),'next 7 days')}
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
function closeSheet(){$('#scrim').classList.remove('on');$('#sheet').classList.remove('on')}
$('#scrim').onclick=closeSheet;
const head=(t,i,bg)=>`<h2><span class="ic ${bg}">${ic(i)}</span>${t}<button data-act="close" aria-label="Close">${ic('x')}</button></h2>`;
function openActions(){sheet(head('Add','plus','bg-grad')+`<div class="actions">
 <button class="action" data-act="checkin"><span class="qi bg-v">${ic('moon')}</span><b>Log my day</b><small>Hours, gym, meetings</small></button>
 <button class="action" data-act="newtask"><span class="qi bg-p">${ic('list')}</span><b>New to-do</b><small>Task with category & date</small></button>
 <button class="action" data-act="deal"><span class="qi bg-g">${ic('deal')}</span><b>New business</b><small>Deal or opportunity</small></button>
 <button class="action" data-act="event"><span class="qi bg-c">${ic('cal')}</span><b>New event</b><small>Claude adds it to Google Calendar</small></button></div>`)}
const optBtns=(name,vals,cur,lab=v=>v)=>`<div class="opts" data-name="${name}">${vals.map(v=>`<button type="button" class="opt ${String(cur)===String(v)?'on':''}" data-v="${v}">${lab(v)}</button>`).join('')}</div>`;
function openCheckin(date){
 const n=nowD();date=date||n.date;const c=U.checkins[date]||{};const st=c.study||{};
 const mt=eventsOn(date).filter(e=>e.kind==='event');
 const H=[0,0.5,1,1.5,2,3,4];
 sheet(head('Log my day','moon','bg-grad')+`<form id="cf">
  <div class="fld"><label>Day</label>${optBtns('date',[addDays(n.date,-1),n.date],date,v=>v===n.date?'Today':'Yesterday')}</div>
  <div class="fld"><label>How long did you study?</label>${SUBJ.map(s=>`<div class="subj"><span class="qi ${s.bg}">${ic(s.i)}</span><span class="nm">${s.n}</span>${optBtns('h_'+s.k,H,st[s.k]||0,v=>v===0?'0':v===4?'4+':v+'h')}</div>`).join('')}</div>
  <div class="fld"><label>What did you learn in AI? (optional)</label><input class="inp" name="aiNote" value="${esc(c.aiNote||'')}" placeholder="e.g. built an email filter with Claude"></div>
  <div class="fld"><label>New Arabic words (comma separated)</label><input class="inp" name="words" value="${esc(c.words||'')}" placeholder="shukran – thanks, yalla – let's go"></div>
  <div class="fld"><label>Gym</label>${optBtns('gym',[0,30,60,90,120],c.gymMin||0,v=>v?v+' min':'No')}</div>
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
 <div class="btnrow" style="margin-top:14px">${TOKEN?'<button class="btn2" data-act="forget">Disconnect this device</button>':''}<button class="btn2" data-act="lock">${ic('lock')} Lock</button></div>`)}
async function saveToken(){const t=($('#tokin')?.value||'').trim();if(!t)return;TOKEN=t;
 try{const r=await fetch('https://api.github.com/repos/'+REPO,{headers:{Authorization:'Bearer '+t}});const j=await r.json();if(!r.ok||!j.permissions?.push)throw new Error('This key cannot write to the hq repo');
  let sha=null;try{const g=await fetch(API+'key.enc?ref=main',{headers:{Authorization:'Bearer '+t}});if(g.ok)sha=(await g.json()).sha}catch(e){}
  await ghPut('key.enc',await enc({token:t}),sha,'Connect app');ls.set('hq.tok',t);toast('Connected ✓');closeSheet();await doSave();rerender()}
 catch(e){TOKEN=null;toast(e.message||'Could not connect')}}

/* ================= events ================= */
document.addEventListener('click',e=>{const a=e.target.closest('[data-act],[data-tog],[data-deltodo],[data-deldeal],[data-editdeal],[data-edit-todo],[data-tf],[data-f],[data-rt]');if(!a)return;
 const d=a.dataset;
 if(d.tog){toggleTodo(d.tog);return}
 if(d.deltodo){delTodo(d.deltodo);closeSheet();return}
 if(d.deldeal){const x=U.deals.find(z=>z.id===d.deldeal);if(x){x.deleted=true;x.updated=new Date().toISOString();queueSave();closeSheet();rerender();toast('Deleted')}return}
 if(d.editdeal){openDeal(d.editdeal);return}
 if(d.editTodo!==undefined){if(d.editTodo)openTodo(d.editTodo);return}
 if(d.tf){tfilter=d.tf;rerender();return}
 if(d.f){filter=d.f;renderSocial();draw('social');return}
 if(d.rt){showRoutine[d.rt]=!showRoutine[d.rt];renderCalendar();return}
 switch(d.act){case 'close':closeSheet();break;case 'checkin':openCheckin();break;case 'newtask':openTodo();break;case 'deal':openDeal();break;case 'event':openEvent();break;
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
window.addEventListener('load',()=>{if(D)draw(curPage())});
setInterval(()=>{if(D&&!$('#sheet').classList.contains('on')&&['today','calendar'].includes(curPage())){const y=scrollY;renderToday(game());renderCalendar();window.scrollTo(0,y)}},60000);
const saved=ls.get(KEY);if(saved){$('#pw').value=saved;unlock(saved,true).catch(()=>{ls.del(KEY);$('#pw').value='';PW=null})}
})();
