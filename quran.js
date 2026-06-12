/* ============ Quran reader: alquran.cloud API ============ */
const QURAN_BASE = "https://api.alquran.cloud/v1";

const translationEdition = { ar: "ar.muyassar", en: "en.sahih", fr: "fr.hamidullah" };
const audioEdition = "ar.alafasy";
const tafsirEdition = "ar.muyassar";

let surahListCache = null;
let currentSurahData = null;

function qLang(){ return document.body.getAttribute('data-lang') || 'ar'; }

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
  select.innerHTML = surahListCache.map(s=>{
    const label = lang === 'ar'
      ? `${s.number}. ${s.name}`
      : `${s.number}. ${s.englishName} — ${s.englishNameTranslation}`;
    return `<option value="${s.number}">${label}</option>`;
  }).join('');
}

async function loadSurah(number){
  const container = document.getElementById('quran-ayat');
  if(!container) return;
  const lang = qLang();
  container.innerHTML = `<p class="quran-status" data-i18n="quran_loading">${(translations[lang]||translations.ar).quran_loading}</p>`;

  const editions = ["quran-uthmani", audioEdition, translationEdition[lang] || translationEdition.en, tafsirEdition].join(',');
  try{
    const res = await fetch(`${QURAN_BASE}/surah/${number}/editions/${editions}`);
    const json = await res.json();
    const [arabic, audio, translation, tafsir] = json.data;
    currentSurahData = {arabic, audio, translation, tafsir};
    renderAyat();
  }catch(e){
    container.innerHTML = `<p class="quran-status">⚠️ ${e}</p>`;
  }
}

function renderAyat(){
  const container = document.getElementById('quran-ayat');
  if(!container || !currentSurahData) return;
  const {arabic, audio, translation, tafsir} = currentSurahData;
  const lang = qLang();
  const t = translations[lang] || translations.ar;

  container.innerHTML = arabic.ayahs.map((ayah, i)=>{
    const trText = translation.ayahs[i] ? translation.ayahs[i].text : '';
    const tafText = tafsir.ayahs[i] ? tafsir.ayahs[i].text : '';
    const audioUrl = audio.ayahs[i] ? audio.ayahs[i].audio : '';
    return `
    <div class="ayah-card reveal-scale in">
      <div class="ayah-top">
        <span class="ayah-num">${ayah.numberInSurah}</span>
        <button class="play-btn" onclick="playAyah('${audioUrl}')" title="${t.quran_play}">▶</button>
      </div>
      <p class="ayah-arabic">${ayah.text}</p>
      ${lang !== 'ar' ? `<p class="ayah-translation"><strong>${t.quran_translation_label}:</strong> ${trText}</p>` : ''}
      <details class="ayah-tafsir">
        <summary>${t.quran_show_tafsir} — ${t.quran_tafsir_label}</summary>
        <p>${tafText}</p>
      </details>
    </div>`;
  }).join('');
}

let audioPlayer = null;
function playAyah(url){
  if(!url) return;
  if(!audioPlayer){
    audioPlayer = new Audio();
  }
  audioPlayer.src = url;
  audioPlayer.play();
}

document.addEventListener('DOMContentLoaded', async ()=>{
  const select = document.getElementById('surahSelect');
  if(!select) return;
  await loadSurahList();
  select.addEventListener('change', ()=> loadSurah(select.value));
  loadSurah(1);
});

document.addEventListener('langchange', async ()=>{
  if(!document.getElementById('surahSelect')) return;
  await loadSurahList();
  if(currentSurahData){
    // reload translation for new language
    const select = document.getElementById('surahSelect');
    loadSurah(select.value);
  }
});
