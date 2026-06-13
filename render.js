function currentLang(){
  return document.body.getAttribute('data-lang') || 'ar';
}

/* ---- Daily rotating quote (footer) ---- */
function renderDailyQuote(){
  const el = document.getElementById('daily-quote');
  if(!el) return;
  const lang = currentLang();
  const list = dailyQuotes[lang] || dailyQuotes.ar;
  const dayIndex = Math.floor(Date.now() / 86400000) % list.length;
  const item = list[dayIndex];
  el.innerHTML = `<span class="dq-type">${item.type}</span><p class="dq-text">${item.text}</p><span class="dq-ref">${item.ref}</span>`;
}

/* ---- Hadiths page ---- */
function renderHadiths(){
  const wrap = document.getElementById('hadiths-list');
  if(!wrap) return;
  const lang = currentLang();
  const list = hadithsList[lang] || hadithsList.ar;
  wrap.innerHTML = list.map(item => `
    <div class="card reveal-scale in">
      <div class="icon">📿</div>
      <p class="hadith-text">${item.h}</p>
      <span class="hadith-ref">${item.r}</span>
      <p class="hadith-note">${item.t}</p>
    </div>`).join('');
}

/* ---- Duas & Dhikr page ---- */
function renderDuasDhikr(){
  const dWrap = document.getElementById('dhikr-list');
  const uWrap = document.getElementById('duas-list');
  if(!dWrap && !uWrap) return;
  const lang = currentLang();
  if(dWrap){
    dWrap.innerHTML = (dhikrList[lang]||dhikrList.ar).map(item => `
      <div class="card reveal-scale in">
        <div class="icon">📋</div>
        <p class="hadith-text">${item.a}</p>
        <span class="hadith-ref">${item.c}</span>
        <p class="hadith-note">${item.n}</p>
      </div>`).join('');
  }
  if(uWrap){
    uWrap.innerHTML = (duasList[lang]||duasList.ar).map(item => `
      <div class="card reveal-scale in">
        <div class="icon">🤲</div>
        <h4>${item.h}</h4>
        <p class="hadith-text">${item.a}</p>
      </div>`).join('');
  }
}

const storySlugs = ["adam","idris","nuh","hud","salih","ibrahim","lut","ismail","ishaq","yaqub",
  "yusuf","ayyub","shuayb","musa","harun","dawud","sulayman","ilyas","alyasa","yunus",
  "dhulkifl","zakariya","yahya","isa","muhammad"];

/* ---- Stories page ---- */
function renderStories(){
  const wrap = document.getElementById('stories-list');
  if(!wrap) return;
  const lang = currentLang();
  const list = storiesList[lang] || storiesList.ar;
  const t = translations[lang] || translations.ar;
  wrap.innerHTML = list.map((item, i) => {
    var firstSentence = item.s.split('. ')[0];
    if(firstSentence.length < item.s.length) firstSentence += '.';
    return `
    <a class="card reveal-scale in" href="story-${storySlugs[i]}.html" style="text-decoration:none; display:block;">
      <div class="icon">🕊️</div>
      <h4>${item.p}</h4>
      <p>${firstSentence}</p>
    </a>`;
  }).join('');
}

function renderAllDynamic(){
  renderDailyQuote();
  renderHadiths();
  renderDuasDhikr();
  renderStories();
  renderStoryDetail();
}

/* called from elhudaInit */

/* ---- Story detail page ---- */
function renderStoryDetail(){
  const wrap = document.getElementById('story-detail');
  if(!wrap) return;
  const idx = parseInt(wrap.getAttribute('data-index'), 10);
  const lang = currentLang();
  const list = storiesList[lang] || storiesList.ar;
  const item = list[idx];
  if(!item) return;
  wrap.innerHTML = `
    <div class="story-icon">🕊️</div>
    <h2>${item.p}</h2>
    <p>${item.s}</p>
  `;
  // update prev/next labels
  const t = translations[lang] || translations.ar;
  document.querySelectorAll('[data-i18n="story_prev"]').forEach(el=> el.textContent = t.story_prev);
  document.querySelectorAll('[data-i18n="story_next"]').forEach(el=> el.textContent = t.story_next);
  document.querySelectorAll('[data-i18n="story_back"]').forEach(el=> el.textContent = t.story_back);
}

/* ---- Asma al-Husna ---- */
function renderAsma(){
  const wrap = document.getElementById('asma-list');
  if(!wrap) return;
  const lang = currentLang();
  if(typeof asmaList === 'undefined' || !asmaList.length) return;
  const meaning = {ar:'ar_meaning', en:'en', fr:'fr'};
  wrap.innerHTML = asmaList.map((item, i) => `
    <div class="card reveal-scale in asma-card">
      <div class="asma-num">${i+1}</div>
      <div class="asma-ar">${item.ar}</div>
      <div class="asma-tr">${item.tr}</div>
      <div class="asma-meaning">${item[meaning[lang]] || item.en}</div>
    </div>`).join('');
}

/* ---- FAQ ---- */
function renderFaq(){
  const wrap = document.getElementById('faq-list');
  if(!wrap) return;
  const lang = currentLang();
  const list = faqList[lang] || faqList.ar;
  wrap.innerHTML = list.map(item => `
    <details class="faq-item reveal in">
      <summary>${item.q}</summary>
      <p>${item.a}</p>
    </details>`).join('');
}

/* ---- Library ---- */
function renderLibrary(){
  const wrap = document.getElementById('library-list');
  if(!wrap) return;
  const lang = currentLang();
  wrap.innerHTML = libraryLinks.map(item => `
    <a class="card reveal-scale in" href="${item.url}" target="_blank" rel="noopener" style="text-decoration:none; display:block;">
      <div class="icon">🔗</div>
      <h4>${item.title}</h4>
      <p>${item.desc[lang] || item.desc.en}</p>
    </a>`).join('');
}

function renderAllDynamicExtra(){
  renderAsma();
  renderFaq();
  renderLibrary();
}

/* Single unified init — called after ALL scripts have loaded */
function elhudaInit(){
  renderAllDynamic();
  renderAllDynamicExtra();
}
document.addEventListener('DOMContentLoaded', elhudaInit);
document.addEventListener('langchange', ()=>{ renderAllDynamic(); renderAllDynamicExtra(); });
