'use strict';
const days=[
 {date:'10.30 / 周五',title:'沿着中轴线，走进北京',start:'10:00 左右出发',theme:'皇城与都市',note:'天安门广场 / La Sexta安检、步行至午门都需要时间。12:15 为计划入宫时间，请匹配实际预约时段；若排队较长，优先保证故宫入场。',end:'逛完三里屯太古里，返回永利国际休息。',stops:[
  ['上午','天安门广场','从开阔的广场开启北京之旅。为安检与前往午门预留弹性时间。','tiananmen','城市地标','地铁前往 · 安检预留时间','北京天安门广场'],
  ['12:15 左右','故宫博物院','沿中轴线看红墙与金瓦。午门入院，参观后从神武门方向离开，衔接景山。','palace','提前预约','步行至午门 · 以预约时段为准','北京故宫博物院午门'],
  ['下午','景山公园','登上万春亭，回望故宫全景。把整座皇城装进同一张照片里。','jingshan','全景机位','故宫神武门 → 景山南门 · 步行','北京景山公园南门'],
  ['18:30','同福斋晚餐','计划前往三里屯·东大桥店；门店准确地址、营业情况与订位需提前核实。',null,'晚餐时间','景山 → 同福斋 · 建议打车','北京同福斋三里屯东大桥店'],
  ['晚餐后','三里屯太古里','切换到北京的夜晚：逛街、散步，看看亮起来的城市。','sanlitun','夜间漫游','餐后前往 · 以确认后的门店位置导航','北京三里屯太古里']
 ]},
 {date:'10.31 / 周六',title:'把半天，留给湖光山色',start:'09:30 左右出发',theme:'园林与京味',note:'颐和园按北宫门进、东宫门出的方向游览。园区较大，穿舒适的鞋；中午就近补充能量，按体力安排下午逛街时长。',end:'18:30 羲和雅苑吃北京烤鸭，餐后返回酒店。',stops:[
  ['上午—午后','颐和园','北宫门进入，按现场导览游览园林与昆明湖，最后从东宫门离开。慢一点，把湖光山色看够。','summer','北进东出','酒店 → 颐和园北宫门 · 优先地铁','北京颐和园北宫门'],
  ['下午','中关村商圈','逛新中关和领展广场，喝点东西、休息一下。把下午留给轻松的购物时光。',null,'新中关 / 领展广场','颐和园东宫门 → 中关村 · 地铁优先','北京中关村新中关购物中心'],
  ['18:30','羲和雅苑 · 北京烤鸭','今晚的主角是一口北京味。提前确认具体门店与订位，再安排从商圈出发的时间。',null,'晚餐时间','中关村 → 已确认的羲和雅苑门店','北京羲和雅苑']
 ]},
 {date:'11.01 / 周日',title:'胡同里的烟火，湖边的落日',start:'09:30 左右出发',theme:'胡同与日落',note:'今天景点较多，建议约 14:30 到达恭王府，留出游览与去银锭桥的时间。16:40 是等候日落的到达计划；实际落日时刻、天气需临近出发查询。',end:'烟袋斜街之后，去烤鸦儿李记涮肉收尾。返程交通与行李安排请另留时间。',stops:[
  ['上午','南锣鼓巷','从热闹的街巷出发，感受灰瓦、院门与胡同日常，顺路挑几样喜欢的小物件。','nanluo','胡同散步','酒店 → 南锣鼓巷 · 优先地铁','北京南锣鼓巷'],
  ['午餐','方砖厂炸酱面','用一碗炸酱面补充能量。具体门店出发前确认，排队较长时适当压缩停留。',null,'午餐时间','南锣鼓巷周边 · 确认门店后步行','北京方砖厂炸酱面'],
  ['午后','北海公园','南门进、北门出。沿湖看白塔与水面，将园林的安静接进这一天。','beihai','南进北出','南锣鼓巷 → 北海南门 · 建议打车','北京北海公园南门'],
  ['建议 14:30 左右','恭王府','走过王府院落与花园。请以门票预约时段为准，提前核实 11 月开放及停止入馆时间。','gong','提前预约','北海北门 → 恭王府 · 步行','北京恭王府博物馆'],
  ['16:40 左右到达','什刹海 · 银锭桥','在银锭桥附近等一场日落，看看湖水慢慢染上暖色。此时间为到达计划，非核实的日落时刻。','shichahai','日落等候点','恭王府 → 银锭桥 · 步行','北京什刹海银锭桥'],
  ['傍晚','烟袋斜街','沿着短短的斜街慢慢逛，让灯笼与老店铺陪你走完今天的 citywalk。','yandai','老街漫游','银锭桥 → 烟袋斜街 · 步行','北京烟袋斜街'],
  ['晚餐','烤鸦儿李记涮肉','用一顿热腾腾的涮肉为三日游收尾。具体门店位置与营业情况提前确认。',null,'晚餐时间','烟袋斜街 → 餐厅 · 确认门店后导航','北京烤鸦儿李记涮肉']
 ]}
];
const sources={tiananmen:['天安门广场','https://www.lasexta.com/viajestic/destinos/plaza-tiananmen-sabias-que-plazas-publicas-mas-grandes-mundo_20260114696757e4be7ae37724c416f4.html'],palace:['故宫全景 / Trippest','https://www.trippest.com/beijing-travel-guide/jingshan-park/'],jingshan:['景山眺望 / 凤凰网','https://news.ifeng.com/c/8dNScw0Cbuq'],summer:['颐和园 / Trip.com','https://sg.trip.com/moments/detail/beijing-1-144748717/'],sanlitun:['三里屯 / 北京市政府网站','https://japanese.beijing.gov.cn/travellinginbeijing/shopping/shoppingcenters/202007/t20200727_1961721.html'],nanluo:['南锣鼓巷 / Chinatoruktour','https://www.chinatoruktour.com/index.php?a=show&c=index&catid=51&id=8&m=content'],beihai:['北海 / 北京市政府网站','https://arabic.beijing.gov.cn/specials/240tour/'],gong:['恭王府 / 北京市政府网站','https://english.beijing.gov.cn/travellinginbeijing/museums/202603/t20260320_4562523.html'],shichahai:['银锭桥 / 北京旅游网','https://s.visitbeijing.com.cn/attraction/101816'],yandai:['烟袋斜街 / 北京旅游网','https://s.visitbeijing.com.cn/gallery/9196']};
const mapURL=q=>'https://uri.amap.com/search?keyword='+encodeURIComponent(q)+'&city='+encodeURIComponent('北京');
function renderDay(i){const d=days[i];return `<div class="day-layout"><div><div class="day-summary"><h3>${d.title}</h3><span>${d.start} ↗</span></div><div class="route-list">${d.stops.map((s,n)=>`<div class="transit">↓ ${s[5]}</div><article class="stop ${s[3]?'':'meal'}">${s[3]?`<button class="stop-photo" data-image="${s[3]}" data-title="${s[1]}" aria-label="查看${s[1]}大图"><img src="assets/${s[3]}.jpg" alt="${s[1]}景点参考照片" loading="lazy"><span class="zoom-label">↗</span></button>`:`<div class="meal-icon" aria-hidden="true">${s[1].includes('商圈')?'↗':'♨'}</div>`}<div class="stop-copy"><div class="stop-meta"><span>STOP ${String(n+1).padStart(2,'0')} / ${s[0]}</span><span>${s[3]?'SIGHT':'BREAK'}</span></div><h4>${s[1]}</h4><p>${s[2]}</p><div class="stop-actions"><span>■ ${s[4]}</span><a class="map-link" href="${mapURL(s[6])}" target="_blank" rel="noopener">地图查找 ↗</a></div></div></article>`).join('')}</div><div class="day-end">⌂ ${d.end}</div></div><aside class="sidebar"><section class="side-card"><span class="card-kicker">TODAY'S ROUTE / 0${i+1}</span><h3>这一天，怎么走？</h3><ul class="route-map"><li>永利国际出发</li>${d.stops.map(s=>`<li>${s[1]}</li>`).join('')}</ul><button class="button copy-day" data-copy="${i}">复制当天行程 <span>↗</span></button></section><section class="side-card dark"><span class="card-kicker">A LITTLE REMINDER</span><h3>路上的小提醒 ✳</h3><p>${d.note}</p></section></aside></div>`}
const panel=document.getElementById('day-panel');
function selectDay(i){panel.innerHTML=renderDay(i);panel.setAttribute('aria-labelledby','tab-'+i);document.querySelectorAll('[data-day]').forEach((b,n)=>{b.setAttribute('aria-selected',String(n===i));b.tabIndex=n===i?0:-1;});}
selectDay(0);
document.querySelectorAll('[data-day]').forEach((b,i)=>{b.addEventListener('click',()=>selectDay(i));b.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%3;else if(e.key==='ArrowLeft')n=(i+2)%3;else if(e.key==='Home')n=0;else if(e.key==='End')n=2;else return;e.preventDefault();selectDay(n);document.getElementById('tab-'+n).focus()})});
let toastTimer;function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.style.display='none',3000)}
document.addEventListener('click',async e=>{const photo=e.target.closest('[data-image]');if(photo){document.getElementById('lightbox-img').src='assets/'+photo.dataset.image+'.jpg';document.getElementById('lightbox-img').alt=photo.dataset.title;document.getElementById('lightbox-title').textContent=photo.dataset.title;document.getElementById('lightbox').showModal()}const copy=e.target.closest('[data-copy]');if(copy){const d=days[Number(copy.dataset.copy)];const text=`北京三日游｜${d.date}\n${d.start}｜永利国际（工体北路21号）\n`+d.stops.map(s=>`${s[0]} ${s[1]}\n${s[5]}`).join('\n')+'\n'+d.end+'\n提醒：'+d.note;try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(text);else{const ta=document.createElement('textarea');ta.value=text;document.body.append(ta);ta.select();const ok=document.execCommand('copy');ta.remove();if(!ok)throw new Error('copy failed')}toast('当天行程已复制，可以粘贴分享。')}catch{toast('浏览器限制复制，请使用打印攻略保存行程。')}}});
const checklistItems=['故宫门票与参观时段已确认','恭王府门票与参观时段已确认','天安门广场最新入场要求已核实','餐厅门店、营业与订位已确认','身份证、充电宝、舒适步行鞋','出行天气、日落与返程时间已查询'];
let checked=[];try{const value=JSON.parse(localStorage.getItem('beijing-trip-checklist')||'[]');checked=Array.isArray(value)?value:[]}catch{}
document.getElementById('checklist').innerHTML=checklistItems.map((s,i)=>`<label><input type="checkbox" data-check="${i}" ${checked.includes(i)?'checked':''}><span>${s}</span></label>`).join('');
function progress(){const n=document.querySelectorAll('[data-check]:checked').length;document.getElementById('progress').value=n;document.getElementById('progress-label').textContent=`READY TO GO / ${n} OF 6 已准备`;}
document.querySelectorAll('[data-check]').forEach(c=>c.addEventListener('change',()=>{const v=[...document.querySelectorAll('[data-check]:checked')].map(x=>Number(x.dataset.check));try{localStorage.setItem('beijing-trip-checklist',JSON.stringify(v))}catch{toast('当前浏览器无法保存，勾选仅在本次打开有效。')}progress()}));progress();
document.getElementById('credit-links').innerHTML=Object.values(sources).map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener">${name} ↗</a>`).join('');
document.getElementById('credits-open').addEventListener('click',()=>document.getElementById('credits').showModal());
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
const printContainer=document.createElement('div');printContainer.className='print-days';printContainer.innerHTML=days.map((d,i)=>`<section class="print-day"><h2>北京三日游 · DAY 0${i+1} · ${d.date}</h2>${renderDay(i)}<p>提醒：${d.note}</p></section>`).join('');document.getElementById('itinerary').append(printContainer);
document.getElementById('print').addEventListener('click',()=>window.print());
