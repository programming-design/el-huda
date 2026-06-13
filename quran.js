/* ============ Quran reader: alquran.cloud API ============ */
const QURAN_BASE = "https://api.alquran.cloud/v1";
const translationEdition = { en: "en.sahih", fr: "fr.hamidullah" };

const RECITERS_FALLBACK = [
  {identifier:"ar.alafasy", englishName:"Mishary Alafasy", name:"مشاري العفاسي"},
  {identifier:"ar.husary", englishName:"Mahmoud Al-Husary", name:"محمود الحصري"},
  {identifier:"ar.minshawi", englishName:"Mohamed Al-Minshawi", name:"محمد المنشاوي"}
];
let RECITERS = [...RECITERS_FALLBACK];
let TAFSIR_EDITIONS = [{identifier:"ar.muyassar", language:"ar", name:"التفسير الميسر", englishName:"Tafsir Al-Muyassar"}];

let surahListCache = null;
let currentSurahData = null;
let currentReciter = localStorage.getItem('elhuda_reciter') || RECITERS[0].id;
let currentMushafStyle = localStorage.getItem('elhuda_mushaf_style') || 'quran-uthmani';
let currentTafsirSource = localStorage.getItem('elhuda_tafsir_source') || 'ar.muyassar';
let fontScale = parseFloat(localStorage.getItem('elhuda_quran_font')) || 1;
let audioMode = 'ayah'; // 'ayah' | 'surah'

function qLang(){ return document.body.getAttribute('data-lang') || 'ar'; }
function pageMode(){
  const c = document.getElementById('quran-ayat');
  if(!c) return '';
  if(c.classList.contains('mode-audio')) return 'audio';
  if(c.classList.contains('mode-tafsir')) return 'tafsir';
  return 'read';
}

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

/* ---------- Reciter list (dynamic, from API) ---------- */
async function loadReciterList(){
  const select = document.getElementById('reciterSelect');
  if(!select) return;
  try{
    const res = await fetch(`${QURAN_BASE}/edition?format=audio&language=ar&type=versebyverse`);
    const json = await res.json();
    if(json.data && json.data.length) RECITERS = json.data;
  }catch(e){ /* keep fallback list */ }

  select.innerHTML = RECITERS.map(r => `<option value="${r.identifier}">${r.name || r.englishName}</option>`).join('');
  if(RECITERS.find(r=>r.identifier===currentReciter)){
    select.value = currentReciter;
  } else {
    currentReciter = RECITERS[0].identifier;
  }
  select.addEventListener('change', ()=>{
    currentReciter = select.value;
    localStorage.setItem('elhuda_reciter', currentReciter);
    if(currentSurahData) loadSurah(currentSurahData.number);
  });
}

/* ---------- Tafsir editions (dynamic, from API, multilingual) ---------- */
async function loadTafsirList(){
  const select = document.getElementById('tafsirSource');
  if(!select) return;
  try{
    const res = await fetch(`${QURAN_BASE}/edition/type/tafsir`);
    const json = await res.json();
    if(json.data && json.data.length) TAFSIR_EDITIONS = json.data;
  }catch(e){ /* keep fallback */ }

  const lang = qLang();
  const langMap = {ar:'ar', en:'en', fr:'fr'};
  const preferred = TAFSIR_EDITIONS.filter(e => e.language === langMap[lang]);
  const arabicOnes = TAFSIR_EDITIONS.filter(e => e.language === 'ar');
  const others = TAFSIR_EDITIONS.filter(e => e.language !== langMap[lang] && e.language !== 'ar');

  function optList(arr){
    return arr.map(e => `<option value="${e.identifier}">${e.name || e.englishName} (${e.language})</option>`).join('');
  }

  let html = '';
  if(preferred.length && lang !== 'ar'){
    html += `<optgroup label="${lang.toUpperCase()}">${optList(preferred)}</optgroup>`;
  }
  html += `<optgroup label="AR">${optList(arabicOnes)}</optgroup>`;
  if(others.length){
    html += `<optgroup label="${(translations[lang]||translations.ar).quran_hub_tafsir_h}">${optList(others)}</optgroup>`;
  }
  select.innerHTML = html;

  // pick a sensible default: preferred-language tafsir if available, else current/ar.muyassar
  if(preferred.length && lang !== 'ar' && !TAFSIR_EDITIONS.find(e=>e.identifier===currentTafsirSource && e.language===langMap[lang])){
    currentTafsirSource = preferred[0].identifier;
  }
  if(TAFSIR_EDITIONS.find(e=>e.identifier===currentTafsirSource)){
    select.value = currentTafsirSource;
  } else if(arabicOnes.length){
    currentTafsirSource = arabicOnes[0].identifier;
    select.value = currentTafsirSource;
  }

  select.addEventListener('change', ()=>{
    currentTafsirSource = select.value;
    localStorage.setItem('elhuda_tafsir_source', currentTafsirSource);
    if(currentSurahData) loadSurah(currentSurahData.number);
  });
}

/* ---------- Mushaf style selector ---------- */
function setupMushafStyle(){
  const select = document.getElementById('mushafStyle');
  if(!select) return;
  select.value = currentMushafStyle;
  applyMushafStyleClass();
  select.addEventListener('change', ()=>{
    currentMushafStyle = select.value;
    localStorage.setItem('elhuda_mushaf_style', currentMushafStyle);
    applyMushafStyleClass();
    if(currentSurahData) loadSurah(currentSurahData.number);
  });
}
function applyMushafStyleClass(){
  const container = document.getElementById('quran-ayat');
  if(!container) return;
  container.classList.remove('style-uthmani','style-simple','style-tajweed','style-page');
  if(currentMushafStyle === 'quran-simple') container.classList.add('style-simple');
  else if(currentMushafStyle === 'quran-tajweed') container.classList.add('style-tajweed');
  else if(currentMushafStyle === 'quran-page') container.classList.add('style-page');
  else container.classList.add('style-uthmani');

  const legend = document.getElementById('tajweedLegend');
  if(legend) legend.style.display = (currentMushafStyle === 'quran-tajweed') ? 'block' : 'none';
}

/* ---------- Tafsir source: initial setup ---------- */
function setupTafsirSource(){
  const select = document.getElementById('tafsirSource');
  if(!select) return Promise.resolve();
  return loadTafsirList();
}

/* ---------- Audio mode (manual ayah / continuous sequential) ---------- */
let sequentialPlaying = false;
function setupAudioMode(){
  const ayahBtn = document.getElementById('audioModeAyah');
  const surahBtn = document.getElementById('audioModeSurah');
  const playSurahBtn = document.getElementById('playSurahBtn');
  if(!ayahBtn || !surahBtn) return;
  function update(){
    ayahBtn.classList.toggle('active', audioMode==='ayah');
    surahBtn.classList.toggle('active', audioMode==='surah');
    document.querySelectorAll('.play-btn').forEach(b=> b.style.display = audioMode==='ayah' ? '' : 'none');
    if(playSurahBtn) playSurahBtn.style.display = audioMode==='surah' ? '' : 'none';
    if(audioMode!=='surah') stopSequential();
  }
  ayahBtn.addEventListener('click', ()=>{ audioMode='ayah'; update(); });
  surahBtn.addEventListener('click', ()=>{ audioMode='surah'; update(); });
  if(playSurahBtn){
    playSurahBtn.addEventListener('click', ()=>{
      if(sequentialPlaying) stopSequential();
      else playSequential(0);
    });
  }
  update();
}

function stopSequential(){
  sequentialPlaying = false;
  if(audioPlayer) audioPlayer.pause();
  document.querySelectorAll('.ayah-card.playing').forEach(c=> c.classList.remove('playing'));
  const playSurahBtn = document.getElementById('playSurahBtn');
  if(playSurahBtn) playSurahBtn.textContent = (translations[qLang()]||translations.ar).play_surah;
}

function playSequential(i){
  if(!currentSurahData || !currentSurahData.audio) return;
  const ayahs = currentSurahData.audio.ayahs;
  if(i >= ayahs.length){ stopSequential(); return; }
  sequentialPlaying = true;
  const playSurahBtn = document.getElementById('playSurahBtn');
  if(playSurahBtn) playSurahBtn.textContent = '⏸ ' + (translations[qLang()]||translations.ar).play_surah.replace('▶ ','');

  document.querySelectorAll('.ayah-card.playing').forEach(c=> c.classList.remove('playing'));
  document.querySelectorAll('.page-ayah-num.playing').forEach(s=> s.classList.remove('playing'));

  if(currentMushafStyle === 'quran-page'){
    highlightPageMarker(ayahs[i].numberInSurah);
  } else {
    const card = document.querySelector(`.ayah-card[data-ayah="${ayahs[i].numberInSurah}"]`);
    if(card){
      card.classList.add('playing');
      card.scrollIntoView({behavior:'smooth', block:'center'});
    }
  }

  if(!audioPlayer) audioPlayer = new Audio();
  audioPlayer.src = ayahs[i].audio;
  audioPlayer.play();
  audioPlayer.onended = ()=>{
    if(sequentialPlaying) playSequential(i+1);
  };
}

/* ---------- Load a surah ---------- */
async function loadSurah(number){
  stopSequential();
  const container = document.getElementById('quran-ayat');
  if(!container) return;
  const lang = qLang();
  const t = translations[lang] || translations.ar;
  const mode = pageMode();
  container.innerHTML = `<p class="quran-status">${t.quran_loading}</p>`;

  const apiArabicEdition = (currentMushafStyle === 'quran-page' || mode === 'tafsir') ? 'quran-uthmani' : currentMushafStyle;
  const editionSet = [apiArabicEdition];
  if(mode === 'audio') editionSet.push(currentReciter);
  if(mode === 'tafsir') editionSet.push(currentTafsirSource, "quran-uthmani");
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
      arabic: byEdition[apiArabicEdition] || byEdition["quran-uthmani"],
      plainArabic: byEdition["quran-uthmani"],
      audio: byEdition[currentReciter],
      tafsir: byEdition[currentTafsirSource],
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
  const mode = pageMode();
  if(mode !== 'tafsir' && currentMushafStyle === 'quran-page'){
    renderMushafPage();
    return;
  }
  renderAyahCards();
}

/* ---------- Mushaf page-style continuous render ---------- */
function renderMushafPage(){
  const container = document.getElementById('quran-ayat');
  const {arabic, audio} = currentSurahData;
  const lang = qLang();
  const t = translations[lang] || translations.ar;
  const mode = pageMode();
  const surahInfo = (surahListCache || []).find(s => s.number === currentSurahData.number);
  const surahName = surahInfo ? (lang === 'ar' ? surahInfo.name : `${surahInfo.englishName} — ${surahInfo.englishNameTranslation}`) : '';

  const ayahsHtml = arabic.ayahs.map((ayah)=>{
    const audioUrl = audio && audio.ayahs[ayah.numberInSurah-1] ? audio.ayahs[ayah.numberInSurah-1].audio : '';
    const clickable = mode === 'audio' ? `onclick="playAyah('${audioUrl}', null); highlightPageMarker(${ayah.numberInSurah})"` : '';
    return `${ayah.text} <span class="page-ayah-num" id="pageayah-${ayah.numberInSurah}" ${clickable}>${toArabicDigits(ayah.numberInSurah)}</span>`;
  }).join(' ');

  container.innerHTML = `
    <div class="mushaf-page reveal in">
      <div class="mushaf-banner">${surahName}</div>
      <p class="mushaf-flow">${ayahsHtml}</p>
    </div>
  `;
}

function highlightPageMarker(num){
  document.querySelectorAll('.page-ayah-num.playing').forEach(s=>s.classList.remove('playing'));
  const marker = document.getElementById('pageayah-'+num);
  if(marker){
    marker.classList.add('playing');
    marker.scrollIntoView({behavior:'smooth', block:'center'});
  }
}

function toArabicDigits(n){
  const map = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'};
  return String(n).split('').map(d=>map[d]||d).join('');
}

/* ---------- Per-ayah card render (default) ---------- */
function renderAyahCards(){
  const container = document.getElementById('quran-ayat');
  if(!container || !currentSurahData || !currentSurahData.arabic) return;
  const {arabic, audio, translation, tafsir} = currentSurahData;
  const lang = qLang();
  const t = translations[lang] || translations.ar;
  const mode = pageMode();
  const marks = getMarks();

  container.innerHTML = arabic.ayahs.map((ayah, i)=>{
    const trText = translation && translation.ayahs[i] ? translation.ayahs[i].text : '';
    const tafText = tafsir && tafsir.ayahs[i] ? tafsir.ayahs[i].text : '';
    const audioUrl = audio && audio.ayahs[i] ? audio.ayahs[i].audio : '';
    const ayahText = currentMushafStyle === 'quran-tajweed' ? tajweedToHtml(ayah.text) : ayah.text;
    const markKey = `${currentSurahData.number}:${ayah.numberInSurah}`;
    const markColor = marks[markKey] || '';

    const playBtn = mode === 'audio'
      ? `<button class="play-btn" onclick="playAyah('${audioUrl}', this)" title="${t.quran_play}" style="${audioMode==='surah'?'display:none;':''}">▶</button>`
      : '';

    const markButtons = mode === 'read'
      ? `<div class="mark-dots">
          <button class="mark-dot ${markColor==='memorize'?'active':''}" style="--c:#e9c46a" onclick="setMark(${currentSurahData.number},${ayah.numberInSurah},'memorize',this)" title="${t.mark_memorize}"></button>
          <button class="mark-dot ${markColor==='review'?'active':''}" style="--c:#e76f51" onclick="setMark(${currentSurahData.number},${ayah.numberInSurah},'review',this)" title="${t.mark_review}"></button>
          <button class="mark-dot ${markColor==='done'?'active':''}" style="--c:#2a9d8f" onclick="setMark(${currentSurahData.number},${ayah.numberInSurah},'done',this)" title="${t.mark_done}"></button>
          <button class="mark-dot mark-clear-dot" onclick="setMark(${currentSurahData.number},${ayah.numberInSurah},'',this)" title="${t.mark_clear}">×</button>
        </div>`
      : '';

    const tafsirBlock = mode === 'tafsir'
      ? `<div class="ayah-translation" style="margin-top:10px;"><strong>${t.quran_tafsir_label}:</strong><br>${tafText || '—'}</div>`
      : '';

    return `
    <div class="ayah-card reveal-scale in mark-${markColor}" data-ayah="${ayah.numberInSurah}">
      <div class="ayah-top">
        <span class="ayah-num"><span>${ayah.numberInSurah}</span></span>
        ${playBtn}
      </div>
      <p class="ayah-arabic">${ayahText}</p>
      ${translation ? `<p class="ayah-translation"><strong>${t.quran_translation_label}:</strong> ${trText}</p>` : ''}
      ${tafsirBlock}
      ${markButtons}
    </div>`;
  }).join('');
}

/* ---------- Tajweed parser ----------
   The "quran-tajweed" edition returns text containing segments like:
   [h:9421[ٱ]   -> rule code "h", numeric id, marked text "ٱ"
   Segments can be nested. We iteratively unwrap the innermost
   bracket groups and wrap them in <span class="tw-XXXX"> with a
   class derived from the rule code, mapped to a tajweed category. */
const TAJWEED_CODE_MAP = {
  h: 'ham_wasl',      // hamzat al-wasl / silent
  s: 'ham_wasl',      // silent letters
  l: 'ham_wasl',      // lam shamsiyyah (silent)
  n: 'ghunnah',       // ghunnah / noon & meem mushaddad
  g: 'ghunnah',
  q: 'qalqalah',      // qalqalah letters
  m: 'madd_normal',   // madd (generic)
  d: 'idgham',        // idgham
  i: 'ikhfa',         // ikhfa / iqlab
  k: 'ikhfa',
  t: 'qalqalah'
};

function tajweedToHtml(text){
  if(!text || text.indexOf('[') === -1) return text;
  let out = text;
  let safety = 0;
  // Repeatedly resolve the innermost [code:id[content]] groups
  const re = /\[([a-zA-Z]+):?[^\[\]]*\[([^\[\]]*)\]/;
  while(re.test(out) && safety < 200){
    out = out.replace(re, (m, code, content) => {
      const cls = TAJWEED_CODE_MAP[code.toLowerCase()] || 'other';
      return `<span class="tw-${cls}">${content}</span>`;
    });
    safety++;
  }
  // remove any leftover stray brackets that weren't matched
  out = out.replace(/[\[\]]/g, '');
  return out;
}

/* ---------- Audio ---------- */
let audioPlayer = null;
function playAyah(url, btn){
  if(!url) return;
  if(!audioPlayer){ audioPlayer = new Audio(); }
  document.querySelectorAll('.play-btn, #playSurahBtn').forEach(b=>{ if(b!==btn) b.textContent = b.id==='playSurahBtn' ? (translations[qLang()]||translations.ar).play_surah : '▶'; });
  if(audioPlayer.src === url && !audioPlayer.paused){
    audioPlayer.pause();
    return;
  }
  audioPlayer.src = url;
  audioPlayer.play();
  const playingLabel = btn && btn.id === 'playSurahBtn' ? '❙❙' : '❙❙';
  if(btn){
    btn.textContent = playingLabel;
    audioPlayer.onended = ()=>{
      btn.textContent = btn.id === 'playSurahBtn' ? (translations[qLang()]||translations.ar).play_surah : '▶';
    };
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

/* ---------- Memorization color marks ---------- */
function getMarks(){
  try{ return JSON.parse(localStorage.getItem('elhuda_marks')) || {}; }catch(e){ return {}; }
}
function setMark(surah, ayah, color, btn){
  const marks = getMarks();
  const key = `${surah}:${ayah}`;
  if(color) marks[key] = color; else delete marks[key];
  localStorage.setItem('elhuda_marks', JSON.stringify(marks));
  const card = btn.closest('.ayah-card');
  card.className = card.className.replace(/mark-\S*/g, '').trim() + ' mark-' + color;
  card.querySelectorAll('.mark-dot').forEach(d=> d.classList.remove('active'));
  if(color){
    const target = card.querySelector(`.mark-dot[onclick*="'${color}'"]`);
    if(target) target.classList.add('active');
  }
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', async ()=>{
  const select = document.getElementById('surahSelect');
  if(!select) return;
  await loadSurahList();
  await loadReciterList();
  setupMushafStyle();
  await setupTafsirSource();
  setupAudioMode();
  select.addEventListener('change', ()=> loadSurah(select.value));
  setupFontControls();
  const legend = document.getElementById('marksLegend');
  if(legend) legend.style.display = 'flex';
  loadSurah(1);
});

document.addEventListener('langchange', async ()=>{
  if(!document.getElementById('surahSelect')) return;
  await loadSurahList();
  if(document.getElementById('tafsirSource')) await loadTafsirList();
  const select = document.getElementById('surahSelect');
  if(currentSurahData) loadSurah(select.value);
});
