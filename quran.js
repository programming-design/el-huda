/* ============ Quran reader: alquran.cloud API ============ */
const QURAN_BASE = "https://api.alquran.cloud/v1";

const translationEdition = { en: "en.sahih", fr: "fr.hamidullah" };
const tafsirEdition = "ar.muyassar";

const RECITERS = [
  {id:"ar.alafasy", name:"مشاري العفاسي"},
  {id:"ar.husary", name:"محمود الحصري"},
  {id:"ar.minshawi", name:"محمد المنشاوي"},
  {id:"ar.abdulbasitmurattal", name:"عبد الباسط عبد الصمد"},
  {id:"ar.muhammadayyoub", name:"محمد أيوب"}
];

let surahListCache = null;
let currentSurahData = null;
let currentReciter = localStorage.getItem('elhuda_reciter') || RECITERS[0].id;
let fontScale = parseFloat(localStorage.getItem('elhuda_quran_font')) || 1;

function qLang(){ return document.body.getAttribute('data-lang') || 'ar'; }

/* ---------- Surah list ---------- */
async function loadSurahList(){
  const select = document.getElementById('surahSelect');
  if(!select) return;
  if(!surahListCache){
    try{
      const res = await fetch(`${QURAN_BASE}/surah`);
      const json = await res.json();
      surahListCache = json.data;
    }catch(e){
      select.innerHTML = `<option>—</option>`;
      return;
    }
  }
  const lang = qLang();
  const current = select.value;
  select.innerHTML = surahListCache.map(s=>{
    const label = lang === 'ar'
      ? `${s.number}. ${s.name}`
      : `${s.number}. ${s.englishName} — ${s.englishNameTranslation}`;
    return `<option value="${s.number}">${label}</option>`;
  }).join('');
  if(current) select.value = current;
}

/* ---------- Reciter list ---------- */
function loadReciterList(){
  const select = document.getElementById('reciterSelect');
  if(!select) return;
  select.innerHTML = RECITERS.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
  select.value = currentReciter;
  select.addEventListener('change', ()=>{
    currentReciter = select.value;
    localStorage.setItem('elhuda_reciter', currentReciter);
    if(currentSurahData) loadAudioEdition().then(renderAyat);
  });
}

async function loadAudioEdition(){
  if(!currentSurahData) return;
  const number = currentSurahData.number;
  try{
    const res = await fetch(`${QURAN_BASE}/surah/${number}/${currentReciter}`);
    const json = await res.json();
    currentSurahData.audio = json.data;
  }catch(e){ /* ignore */ }
}

/* ---------- Load a surah ---------- */
async function loadSurah(number){
  const container = document.getElementById('quran-ayat');
  if(!container) return;
  const lang = qLang();
  const t = translations[lang] || translations.ar;
  container.innerHTML = `<p class="quran-status">${t.quran_loading}</p>`;

  const editionSet = ["quran-uthmani", currentReciter, tafsirEdition];
  if(translationEdition[lang]) editionSet.push(translationEdition[lang]);
  const editions = [...new Set(editionSet)].join(',');

  try{
    const res = await fetch(`${QURAN_BASE}/surah/${number}/editions/${editions}`);
    const json = await res.json();
    if(json.code !== 200 || !json.data) throw new Error('API error');

    const byEdition = {};
    json.data.forEach(ed => { byEdition[ed.edition.identifier] = ed; });

    currentSurahData = {
      number,
      arabic: byEdition["quran-uthmani"],
      audio: byEdition[currentReciter],
      tafsir: byEdition[tafsirEdition],
      translation: translationEdition[lang] ? byEdition[translationEdition[lang]] : null
    };
    renderAyat();
  }catch(e){
    container.innerHTML = `<p class="quran-status">⚠️ ${e.message || e}</p>`;
  }
}

/* ---------- Render ayat ---------- */
function renderAyat(){
  const container = document.getElementById('quran-ayat');
  if(!container || !currentSurahData || !currentSurahData.arabic) return;
  const {arabic, audio, translation, tafsir} = currentSurahData;
  const lang = qLang();
  const t = translations[lang] || translations.ar;
  const bm = getBookmark();

  container.innerHTML = arabic.ayahs.map((ayah, i)=>{
    const trText = translation && translation.ayahs[i] ? translation.ayahs[i].text : '';
    const tafText = tafsir && tafsir.ayahs[i] ? tafsir.ayahs[i].text : '';
    const audioUrl = audio && audio.ayahs[i] ? audio.ayahs[i].audio : '';
    const isBm = bm && bm.surah == currentSurahData.number && bm.ayah == ayah.numberInSurah;
    return `
    <div class="ayah-card reveal-scale in ${isBm?'bookmarked':''}" data-ayah="${ayah.numberInSurah}">
      <div class="ayah-top">
        <span class="ayah-num"><span>${ayah.numberInSurah}</span></span>
        <div style="display:flex; gap:8px;">
          <button class="play-btn" onclick="playAyah('${audioUrl}', this)" title="${t.quran_play}">▶</button>
          <button class="bookmark-btn ${isBm?'active':''}" onclick="toggleBookmark(${currentSurahData.number}, ${ayah.numberInSurah}, this)">🔖</button>
        </div>
      </div>
      <p class="ayah-arabic">${ayah.text}</p>
      ${translation ? `<p class="ayah-translation"><strong>${t.quran_translation_label}:</strong> ${trText}</p>` : ''}
      <details class="ayah-tafsir">
        <summary>${t.quran_show_tafsir} — ${t.quran_tafsir_label}</summary>
        <p>${tafText || '—'}</p>
      </details>
    </div>`;
  }).join('');

  if(container.classList.contains('mode-tafsir')){
    container.querySelectorAll('.ayah-tafsir').forEach(d=> d.open = true);
  }
}

/* ---------- Audio ---------- */
let audioPlayer = null;
function playAyah(url, btn){
  if(!url) return;
  if(!audioPlayer){ audioPlayer = new Audio(); }
  document.querySelectorAll('.play-btn').forEach(b=>b.textContent='▶');
  if(audioPlayer.src === url && !audioPlayer.paused){
    audioPlayer.pause();
    return;
  }
  audioPlayer.src = url;
  audioPlayer.play();
  if(btn){
    btn.textContent = '❙❙';
    audioPlayer.onended = ()=>{ btn.textContent='▶'; };
  }
}

/* ---------- Font size ---------- */
function applyFontScale(){
  document.documentElement.style.setProperty('--quran-font', fontScale);
  localStorage.setItem('elhuda_quran_font', fontScale);
}
function setupFontControls(){
  const dec = document.getElementById('fontDec');
  const inc = document.getElementById('fontInc');
  if(dec) dec.addEventListener('click', ()=>{ fontScale = Math.max(0.7, +(fontScale-0.1).toFixed(2)); applyFontScale(); });
  if(inc) inc.addEventListener('click', ()=>{ fontScale = Math.min(2, +(fontScale+0.1).toFixed(2)); applyFontScale(); });
  applyFontScale();
}

/* ---------- Mushaf toggle ---------- */
function setupMushafToggle(){
  const btn = document.getElementById('mushafToggle');
  const container = document.getElementById('quran-ayat');
  if(!btn || !container) return;
  const saved = localStorage.getItem('elhuda_mushaf') === '1';
  if(saved){ container.classList.add('mushaf'); btn.classList.add('active'); }
  btn.addEventListener('click', ()=>{
    container.classList.toggle('mushaf');
    const on = container.classList.contains('mushaf');
    btn.classList.toggle('active', on);
    localStorage.setItem('elhuda_mushaf', on ? '1' : '0');
  });
}

/* ---------- Bookmarks ---------- */
function getBookmark(){
  try{ return JSON.parse(localStorage.getItem('elhuda_bookmark')); }catch(e){ return null; }
}
function toggleBookmark(surah, ayah, btn){
  const bm = getBookmark();
  let status = '';
  const lang = qLang();
  const t = translations[lang] || translations.ar;
  if(bm && bm.surah == surah && bm.ayah == ayah){
    localStorage.removeItem('elhuda_bookmark');
    btn.classList.remove('active');
    btn.closest('.ayah-card').classList.remove('bookmarked');
  } else {
    localStorage.setItem('elhuda_bookmark', JSON.stringify({surah, ayah}));
    document.querySelectorAll('.ayah-card.bookmarked').forEach(c=>{
      c.classList.remove('bookmarked');
      const b = c.querySelector('.bookmark-btn'); if(b) b.classList.remove('active');
    });
    btn.classList.add('active');
    btn.closest('.ayah-card').classList.add('bookmarked');
    status = t.bookmark_saved;
  }
  const statusEl = document.getElementById('bookmarkStatus');
  if(statusEl && status){
    statusEl.textContent = status;
    setTimeout(()=> statusEl.textContent='', 2000);
  }
}
function setupBookmarkControls(){
  const saveBtn = document.getElementById('bookmarkSave');
  const goBtn = document.getElementById('bookmarkGo');
  const status = document.getElementById('bookmarkStatus');
  if(saveBtn){
    saveBtn.addEventListener('click', ()=>{
      if(!currentSurahData) return;
      // bookmark first visible ayah by default
      const firstCard = document.querySelector('.ayah-card');
      const ayahNum = firstCard ? firstCard.getAttribute('data-ayah') : 1;
      toggleBookmark(currentSurahData.number, parseInt(ayahNum,10), firstCard.querySelector('.bookmark-btn'));
    });
  }
  if(goBtn){
    goBtn.addEventListener('click', async ()=>{
      const bm = getBookmark();
      const lang = qLang();
      const t = translations[lang] || translations.ar;
      if(!bm){ if(status){ status.textContent = t.bookmark_none; setTimeout(()=>status.textContent='',2000);} return; }
      const select = document.getElementById('surahSelect');
      if(select) select.value = bm.surah;
      await loadSurah(bm.surah);
      setTimeout(()=>{
        const card = document.querySelector(`.ayah-card[data-ayah="${bm.ayah}"]`);
        if(card) card.scrollIntoView({behavior:'smooth', block:'center'});
      }, 400);
    });
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', async ()=>{
  const select = document.getElementById('surahSelect');
  if(!select) return;
  await loadSurahList();
  loadReciterList();
  select.addEventListener('change', ()=> loadSurah(select.value));
  setupFontControls();
  setupMushafToggle();
  setupBookmarkControls();
  loadSurah(1);
});

document.addEventListener('langchange', async ()=>{
  if(!document.getElementById('surahSelect')) return;
  await loadSurahList();
  const select = document.getElementById('surahSelect');
  if(currentSurahData) loadSurah(select.value);
});
