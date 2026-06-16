/* ================================================================
   render.js — dynamic content rendering, timing-safe
   ================================================================ */

function currentLang(){
  return (document.body && document.body.getAttribute('data-lang')) || 'ar';
}

/* ── Shared: attach IntersectionObserver to dynamically created cards ── */
function revealCards(container){
  if(!container) return;
  const cards = container.querySelectorAll('.anim-card');
  if(!cards.length) return;
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach((e,i)=>{
        if(e.isIntersecting){
          setTimeout(()=> e.target.classList.add('in'), i * 30);
          obs.unobserve(e.target);
        }
      });
    },{threshold:.06, rootMargin:'0px 0px -10px 0px'});
    cards.forEach(c=> obs.observe(c));
  } else {
    cards.forEach(c=> c.classList.add('in'));
  }
}

/* ── Daily Quote ── */
function renderDailyQuote(){
  const el = document.getElementById('daily-quote');
  if(!el || typeof dailyQuotes==='undefined') return;
  const lang = currentLang();
  const list = dailyQuotes[lang] || dailyQuotes.ar;
  const idx = Math.floor(Date.now()/86400000) % list.length;
  const item = list[idx];
  el.innerHTML = `<span class="dq-type">${item.type}</span><p class="dq-text">${item.text}</p><span class="dq-ref">${item.ref}</span>`;
}

/* ── Hadiths ── */
function renderHadiths(){
  const wrap = document.getElementById('hadiths-list');
  if(!wrap || typeof hadithsList==='undefined') return;
  const lang = currentLang();
  const list = hadithsList[lang] || hadithsList.ar;
  wrap.innerHTML = list.map(item=>`
    <div class="card anim-card">
      <div class="icon">📿</div>
      <p class="hadith-text">${item.h}</p>
      <span class="hadith-ref">${item.r}</span>
      <p class="hadith-note">${item.t}</p>
    </div>`).join('');
  revealCards(wrap);
}

/* ── Duas & Dhikr ── */
function renderDuasDhikr(){
  const dWrap = document.getElementById('dhikr-list');
  const uWrap = document.getElementById('duas-list');
  if(typeof dhikrList==='undefined') return;
  const lang = currentLang();
  if(dWrap){
    dWrap.innerHTML = (dhikrList[lang]||dhikrList.ar).map(item=>`
      <div class="card anim-card">
        <div class="icon">📋</div>
        <p class="hadith-text">${item.a}</p>
        <span class="hadith-ref">${item.c}</span>
        <p class="hadith-note">${item.n}</p>
      </div>`).join('');
    revealCards(dWrap);
  }
  if(uWrap){
    uWrap.innerHTML = (duasList[lang]||duasList.ar).map(item=>`
      <div class="card anim-card">
        <div class="icon">🤲</div>
        <h4>${item.h}</h4>
        <p class="hadith-text">${item.a}</p>
      </div>`).join('');
    revealCards(uWrap);
  }
}

/* ── FAQ ── */
function renderFaq(){
  const wrap = document.getElementById('faq-list');
  if(!wrap || typeof faqList==='undefined') return;
  const lang = currentLang();
  const list = faqList[lang] || faqList.ar;
  wrap.innerHTML = list.map(item=>`
    <details class="faq-item">
      <summary>${item.q}</summary>
      <p>${item.a}</p>
    </details>`).join('');
}

/* ── Library ── */
function renderLibrary(){
  const wrap = document.getElementById('library-list');
  if(!wrap || typeof libraryLinks==='undefined') return;
  const lang = currentLang();
  wrap.innerHTML = libraryLinks.map(item=>`
    <a class="card anim-card" href="${item.url}" target="_blank" rel="noopener" style="text-decoration:none;display:block;">
      <div class="icon">🔗</div>
      <h4>${item.title}</h4>
      <p>${item.desc[lang]||item.desc.en}</p>
    </a>`).join('');
  revealCards(wrap);
}

/* ── Story detail ── */
function renderStoryDetail(){
  const wrap = document.getElementById('story-detail');
  if(!wrap || typeof storiesList==='undefined') return;
  const idx = parseInt(wrap.getAttribute('data-index'),10);
  const lang = currentLang();
  const list = storiesList[lang]||storiesList.ar;
  const item = list[idx];
  if(!item) return;
  const t = (typeof translations!=='undefined')?(translations[lang]||translations.ar):{};
  wrap.innerHTML = `<div class="story-icon">🕊️</div><h2>${item.p}</h2><p>${item.s}</p>`;
  document.querySelectorAll('[data-i18n="story_prev"]').forEach(el=>{if(t.story_prev)el.textContent=t.story_prev;});
  document.querySelectorAll('[data-i18n="story_next"]').forEach(el=>{if(t.story_next)el.textContent=t.story_next;});
  document.querySelectorAll('[data-i18n="story_back"]').forEach(el=>{if(t.story_back)el.textContent=t.story_back;});
  document.querySelectorAll('[data-i18n="back_articles"]').forEach(el=>{if(t.story_back)el.textContent=t.story_back;});
}

/* ── Master render ── */
function renderAll(){
  renderDailyQuote();
  renderHadiths();
  renderDuasDhikr();
  renderFaq();
  renderLibrary();
  renderStoryDetail();
}

/* ── Init ── */
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', renderAll);
} else {
  renderAll();
}
document.addEventListener('langchange', renderAll);
