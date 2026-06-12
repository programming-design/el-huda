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

/* ---- Stories page ---- */
function renderStories(){
  const wrap = document.getElementById('stories-list');
  if(!wrap) return;
  const lang = currentLang();
  const list = storiesList[lang] || storiesList.ar;
  wrap.innerHTML = list.map(item => `
    <div class="card reveal-scale in">
      <div class="icon">🕊️</div>
      <h4>${item.p}</h4>
      <p>${item.s}</p>
    </div>`).join('');
}

function renderAllDynamic(){
  renderDailyQuote();
  renderHadiths();
  renderDuasDhikr();
  renderStories();
}

document.addEventListener('DOMContentLoaded', renderAllDynamic);
document.addEventListener('langchange', renderAllDynamic);
