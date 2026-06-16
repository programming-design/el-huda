/* ================================================================
   lang.js — translations, setLang, theme, menu
   ================================================================ */

const translations = {
  ar: {
    brand:"الهُدى", brand_sub:"EL HUDA",
    nav_home:"الرئيسية", nav_quran:"القرآن", nav_prayer:"الصلاة",
    nav_hadiths:"أحاديث", nav_duas:"أدعية وأذكار", nav_stories:"قصص الأنبياء",
    nav_articles:"مقالات", nav_about:"من نحن", nav_tools:"أدوات", nav_ramadan:"رمضان",
    hero_eyebrow:"منصة إسلامية رقمية · 2026",
    hero_title:'نور <span>القرآن</span> ودليلك إلى الهدى',
    hero_lead:"اكتشف القرآن الكريم، مواقيت الصلاة، ومقالات إسلامية موثوقة — في تجربة عصرية، هادئة، وبثلاث لغات.",
    cta_primary:"ابدأ القراءة", cta_ghost:"مواقيت الصلاة",
    home_q_h:"القرآن الكريم", home_q_p:"تصفح، استمع، وتدبّر في تصميم هادئ ومريح.",
    home_p_h:"مواقيت الصلاة", home_p_p:"تابع أوقات الصلوات الخمس بسهولة.",
    home_a_h:"مقالات", home_a_p:"محتوى مختصر لتغذية القلب والعقل يوميًا.",
    home_about_h:"من نحن", home_about_p:"تعرّف على رسالة الهُدى وأهدافها.",
    home_hadiths_h:"أحاديث", home_hadiths_p:"أحاديث نبوية مختارة للتدبر والعمل.",
    home_duas_h:"أدعية وأذكار", home_duas_p:"أذكار وأدعية يومية من السنة.",
    home_stories_h:"قصص الأنبياء", home_stories_p:"عبر ودروس من قصص الأنبياء.",
    more:"اقرأ المزيد",
    ayah_quote:"«وَقُل رَّبِّ زِدْنِي عِلْمًا»", ayah_ref:"سورة طه - الآية 114",
    daily_label:"خاطرة اليوم",
    quran_title:"القرآن الكريم", quran_lead:"وسائل بسيطة وعصرية للتقرب من كتاب الله، بثلاث لغات.",
    quran_hub_read_h:"المصحف", quran_hub_read_p:"تصفح النص القرآني الكامل بخط واضح، مع الترجمة.",
    quran_hub_listen_h:"الاستماع للتلاوات", quran_hub_listen_p:"استمع لتلاوة كل آية بصوت الشيخ مشاري العفاسي.",
    quran_hub_tafsir_h:"التفسير الميسر", quran_hub_tafsir_p:"اقرأ تفسيرًا مبسطًا لكل آية من كتب التفسير الموثوقة.",
    quran_select_label:"اختر السورة:", quran_loading:"جاري التحميل...",
    quran_translation_label:"الترجمة", quran_tafsir_label:"التفسير الميسر",
    quran_show_tafsir:"إظهار/إخفاء التفسير", quran_play:"تشغيل الآية",
    quran_tab_read:"📖 المصحف", quran_tab_listen:"🎧 استماع", quran_tab_tafsir:"📝 التفسير",
    mushaf_style_label:"نوع الخط",
    style_uthmani:"الرسم العثماني", style_simple:"الرسم المبسط",
    style_tajweed:"تلوين التجويد", style_page:"مصحف (صفحة)",
    audio_mode_label:"طريقة الاستماع",
    audio_ayah:"آية بآية", audio_surah:"السورة كاملة",
    play_surah:"▶ تشغيل السورة كاملة",
    reciter_label:"القارئ:",
    tafsir_source_label:"مصدر التفسير",
    tafsir_muyassar:"التفسير الميسر", tafsir_jalalayn:"تفسير الجلالين",
    font_dec:"أ-", font_inc:"أ+", font_label:"حجم الخط",
    mushaf_toggle:"عرض المصحف",
    mark_label:"علامات الحفظ:",
    mark_memorize:"للحفظ", mark_review:"للمراجعة", mark_done:"تم حفظه", mark_clear:"إزالة",
    tajweed_legend_title:"دليل ألوان التجويد",
    tw_ghunnah:"غُنّة", tw_qalqalah:"قلقلة", tw_madd:"مدّ",
    tw_ikhfa:"إخفاء/إقلاب", tw_idgham:"إدغام", tw_hamzat:"همزة وصل / حروف ساكنة",
    tajweed_disclaimer:"الألوان تقريبية لمساعدة القارئ — يُرجى الرجوع لمصحف تجويد معتمد أو معلم متخصص.",
    tafsir_lang_note:"تُعرض التفاسير المتاحة بلغتك إن وُجدت، وبالعربية كخيار دائم.",
    back_quran:"← العودة إلى القرآن",
    prayer_title:"مواقيت الصلاة", prayer_lead:"أوقات تقريبية، اضبطها حسب موقعك الجغرافي.",
    p_fajr:"الفجر", p_sunrise:"الشروق", p_dhuhr:"الظهر", p_asr:"العصر", p_maghrib:"المغرب", p_isha:"العشاء",
    prayer_note:"* المواقيت تقريبية ويُفضل ضبطها حسب موقعك.",
    prayer_locating:"جاري تحديد موقعك...", prayer_location_label:"موقعك",
    prayer_allow:"يرجى السماح بالوصول للموقع لعرض المواقيت بدقة",
    prayer_next:"الصلاة القادمة",
    prayer_default_note:"يتم عرض مواقيت مكة المكرمة افتراضيًا حتى تسمح بتحديد موقعك.",
    quran_card1_h:"تصفح المصحف", quran_card1_p:"اقرأ القرآن الكريم كاملاً بخط واضح وتصميم مريح للعين.",
    quran_card2_h:"الاستماع للتلاوات", quran_card2_p:"استمع إلى تلاوات هادئة بأصوات أشهر القراء.",
    quran_card3_h:"التفسير الميسر", quran_card3_p:"شرح مبسّط للآيات من أوثق كتب التفسير.",
    articles_title:"مقالات ومواضيع", articles_lead:"محتوى مختصر لتغذية القلب والعقل يوميًا.",
    art1_h:"فضل قيام الليل", art1_p:"تعرف على أجر وثواب قيام الليل وكيفية أدائه بسهولة.",
    art2_h:"أدعية يومية", art2_p:"مجموعة من الأدعية المستحبة لكل وقت ومناسبة.",
    art3_h:"السيرة النبوية", art3_p:"قصص وأحداث من حياة النبي محمد ﷺ تلهم وتُعلّم.",
    art4_h:"الإقلاع عن الإدمان", art4_p:"دعم وإرشادات للتعافي بعون الله من العادات الضارة.",
    addictions_title:"الإقلاع عن الإدمان",
    addictions_b1:"الإدمان بكل أنواعه ابتلاء يمكن التعافي منه بالصبر والدعاء والاستعانة بالله.",
    addictions_h1:"خطوات عملية", addictions_b2:"حدد دافعك، تجنب محفزات الإدمان، استبدل العادة بنشاط مفيد، واطلب الدعم.",
    addictions_h2:"الجانب الإيماني", addictions_b3:"الإكثار من ذكر الله والمحافظة على الصلاة يقوّي القلب ويُعين على الصبر.",
    addictions_h3:"لا تيأس", addictions_b4:"باب التوبة مفتوح دائمًا، وكل خطوة للأمام محسوبة عند الله.",
    hadiths_title:"أحاديث نبوية شريفة", hadiths_lead:"مجموعة من الأحاديث الصحيحة للتدبر والعمل بها في حياتنا اليومية.",
    duasdhikr_title:"أدعية وأذكار", duasdhikr_lead:"أذكار وأدعية يومية من السنة النبوية لطمأنة القلب وحفظ اللسان.",
    dhikr_section_h:"أذكار", duas_section_h:"أدعية",
    stories_title:"قصص الأنبياء", stories_lead:"عبر ودروس من قصص الأنبياء عليهم السلام.",
    story_prev:"← السابق", story_next:"التالي →", story_back:"← كل القصص",
    about_title:"من نحن",
    about_p1:'"الهُدى" منصة إسلامية تهدف إلى تقديم محتوى موثوق من القرآن الكريم والسنة النبوية.',
    about_h1:"رسالتنا", about_p2:"نسعى لتقديم محتوى إسلامي واضح وسهل الوصول بثلاث لغات.",
    about_h2:"قيمنا", about_p3:"الدقة في المصادر، البساطة في التصميم، والاحترام لكل زائر.",
    tools_title:"أدوات إسلامية", tools_lead:"مجموعة أدوات تساعدك في عبادتك اليومية.",
    tool_asma_h:"أسماء الله الحسنى", tool_asma_p:"الأسماء الـ99 مع معانيها.",
    tool_zakat_h:"حاسبة الزكاة", tool_zakat_p:"احسب زكاة المال والذهب بسهولة.",
    tool_qibla_h:"اتجاه القبلة", tool_qibla_p:"حدد اتجاه القبلة من موقعك.",
    tool_hijri_h:"التقويم الهجري", tool_hijri_p:"التاريخ الهجري اليوم والمناسبات القادمة.",
    tool_search_h:"البحث في القرآن", tool_search_p:"ابحث عن كلمة أو آية في القرآن الكريم.",
    tool_faq_h:"أسئلة وأجوبة", tool_faq_p:"إجابات لأسئلة شائعة في العبادات.",
    tool_library_h:"مكتبة الكتب", tool_library_p:"روابط كتب إسلامية موثوقة ومجانية.",
    tool_tracker_h:"ورد القرآن", tool_tracker_p:"تتبّع تقدمك اليومي في القراءة والحفظ.",
    tool_contact_h:"تواصل معنا", tool_contact_p:"انضم لمجتمعنا على ديسكورد.",
    asma_title:"أسماء الله الحسنى", asma_lead:"الأسماء التسعة والتسعون لله سبحانه وتعالى.",
    zakat_title:"حاسبة الزكاة", zakat_lead:"احسب زكاة مالك وذهبك (2.5%).",
    zakat_cash_label:"المال النقدي (المدخرات)", zakat_gold_label:"قيمة الذهب/الفضة الحالية",
    zakat_calc_btn:"احسب الزكاة", zakat_result_label:"الزكاة المستحقة:",
    zakat_nisab_note:"ملاحظة: الزكاة تجب إذا بلغ المال نصابًا وحال عليه عام هجري. يُرجى استشارة عالم لحالتك.",
    qibla_title:"اتجاه القبلة", qibla_lead:"يحدد اتجاه القبلة (الكعبة المشرفة) من موقعك الحالي.",
    qibla_locating:"جاري تحديد موقعك...", qibla_result_label:"اتجاه القبلة من الشمال:",
    qibla_note:"وجّه الجزء العلوي من جهازك نحو الشمال ثم اتجه بالزاوية المذكورة.",
    hijri_title:"التقويم الهجري", hijri_lead:"التاريخ الهجري الحالي وأهم المناسبات الإسلامية القادمة.",
    hijri_today_label:"التاريخ الهجري اليوم:", hijri_events_h:"مناسبات إسلامية مهمة",
    hijri_ev1:"رأس السنة الهجرية", hijri_ev2:"يوم عاشوراء", hijri_ev3:"المولد النبوي الشريف",
    hijri_ev4:"بداية شهر رمضان المبارك", hijri_ev5:"عيد الفطر", hijri_ev6:"يوم عرفة وعيد الأضحى",
    search_title:"البحث في القرآن", search_lead:"ابحث عن أي كلمة أو عبارة في القرآن الكريم.",
    search_placeholder:"اكتب كلمة للبحث...", search_btn:"بحث", search_no_results:"لا توجد نتائج.",
    search_results_label:"النتائج:",
    faq_title:"أسئلة وأجوبة", faq_lead:"إجابات مبسطة لأسئلة شائعة حول العبادات اليومية.",
    library_title:"مكتبة الكتب", library_lead:"روابط لمصادر موثوقة لكتب إسلامية مجانية.",
    tracker_title:"ورد القرآن", tracker_lead:"سجّل تقدمك اليومي في قراءة أو حفظ القرآن.",
    tracker_pages_label:"عدد الصفحات/الأجزاء اليوم", tracker_add_btn:"إضافة",
    tracker_total_label:"الإجمالي:", tracker_log_h:"السجل", tracker_pages_unit:"صفحة",
    tracker_reset:"تصفير السجل",
    contact_title:"تواصل معنا", contact_lead:"انضم إلى مجتمع AL-HUDA على ديسكورد للنقاش والتعلم والدعم.",
    contact_join_btn:"الانضمام إلى السيرفر",
    ramadan_title:"عداد رمضان", ramadan_lead:"الوقت المتبقي حتى شهر رمضان المبارك.",
    ramadan_next:"رمضان القادم:", ramadan_days:"يوم", ramadan_hrs:"ساعة", ramadan_mins:"دقيقة", ramadan_secs:"ثانية",
    ramadan_in_progress:"🌙 رمضان كريم — نحن في شهر رمضان المبارك",
    share_title:"مشاركة الآية", share_copied:"تم النسخ!",
    install_pwa:"تثبيت التطبيق", install_pwa_desc:"أضف الهُدى إلى شاشتك الرئيسية",
    footer_quote:"«وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ»",
    footer_rights:"© 2026 الهُدى. جميع الحقوق محفوظة."
  },
  en: {
    brand:"El Huda", brand_sub:"GUIDANCE & LIGHT",
    nav_home:"Home", nav_quran:"Quran", nav_prayer:"Prayer",
    nav_hadiths:"Hadiths", nav_duas:"Duas & Dhikr", nav_stories:"Prophets",
    nav_articles:"Articles", nav_about:"About", nav_tools:"Tools", nav_ramadan:"Ramadan",
    hero_eyebrow:"A digital islamic platform · 2026",
    hero_title:'The light of the <span>Quran</span>, your path to guidance',
    hero_lead:"Explore the Holy Quran, prayer times, and trusted islamic articles — in a calm, modern experience, in three languages.",
    cta_primary:"Start reading", cta_ghost:"Prayer times",
    home_q_h:"The Holy Quran", home_q_p:"Read, listen, and reflect in a calm, comfortable design.",
    home_p_h:"Prayer Times", home_p_p:"Follow the five daily prayer times with ease.",
    home_a_h:"Articles", home_a_p:"Short content to nourish the heart and mind.",
    home_about_h:"About Us", home_about_p:"Learn about El Huda's mission.",
    home_hadiths_h:"Hadiths", home_hadiths_p:"Selected prophetic hadiths to reflect on.",
    home_duas_h:"Duas & Dhikr", home_duas_p:"Daily remembrances from the Sunnah.",
    home_stories_h:"Prophets' Stories", home_stories_p:"Lessons from the stories of the Prophets.",
    more:"Read more",
    ayah_quote:"\u201CAnd say: My Lord, increase me in knowledge\u201D", ayah_ref:"Surah Ta-Ha — Verse 114",
    daily_label:"Today's Reflection",
    quran_title:"The Holy Quran", quran_lead:"Simple, modern ways to connect with the book of Allah.",
    quran_hub_read_h:"Reading", quran_hub_read_p:"Browse the full Quranic text in a clear font, with translation.",
    quran_hub_listen_h:"Listen to Recitations", quran_hub_listen_p:"Listen to each verse recited by Sheikh Mishary Alafasy.",
    quran_hub_tafsir_h:"Simplified Tafsir", quran_hub_tafsir_p:"Read a simplified explanation of each verse from trusted commentaries.",
    quran_select_label:"Select Surah:", quran_loading:"Loading...",
    quran_translation_label:"Translation", quran_tafsir_label:"Simplified Tafsir",
    quran_show_tafsir:"Show/Hide Tafsir", quran_play:"Play verse",
    quran_tab_read:"📖 Reading", quran_tab_listen:"🎧 Listening", quran_tab_tafsir:"📝 Tafsir",
    mushaf_style_label:"Script style",
    style_uthmani:"Uthmani script", style_simple:"Simple script",
    style_tajweed:"Tajweed coloring", style_page:"Mushaf (page)",
    audio_mode_label:"Listening mode",
    audio_ayah:"Verse by verse", audio_surah:"Full surah",
    play_surah:"▶ Play full surah",
    reciter_label:"Reciter:",
    tafsir_source_label:"Tafsir source",
    tafsir_muyassar:"Tafsir Al-Muyassar", tafsir_jalalayn:"Tafsir Al-Jalalayn",
    font_dec:"A-", font_inc:"A+", font_label:"Font size",
    mushaf_toggle:"Mushaf view",
    mark_label:"Memorization marks:",
    mark_memorize:"To memorize", mark_review:"To review", mark_done:"Memorized", mark_clear:"Clear",
    tajweed_legend_title:"Tajweed color guide",
    tw_ghunnah:"Ghunnah (nasal)", tw_qalqalah:"Qalqalah (echo)", tw_madd:"Madd (elongation)",
    tw_ikhfa:"Ikhfa / Iqlab", tw_idgham:"Idgham (merging)", tw_hamzat:"Silent letters",
    tajweed_disclaimer:"Colors are an approximate aid — consult a certified Tajweed Mushaf or qualified teacher.",
    tafsir_lang_note:"Tafsir sources in your language are shown when available, plus Arabic as a permanent option.",
    back_quran:"\u2190 Back to Quran",
    prayer_title:"Prayer Times", prayer_lead:"Approximate times — adjust to your location.",
    p_fajr:"Fajr", p_sunrise:"Sunrise", p_dhuhr:"Dhuhr", p_asr:"Asr", p_maghrib:"Maghrib", p_isha:"Isha",
    prayer_note:"* Times are approximate, please adjust to your location.",
    prayer_locating:"Locating you...", prayer_location_label:"Your location",
    prayer_allow:"Please allow location access for accurate prayer times",
    prayer_next:"Next prayer",
    prayer_default_note:"Showing Makkah times by default until you allow location access.",
    quran_card1_h:"Read the Quran", quran_card1_p:"Read the full Quran in a clear, comfortable typeface.",
    quran_card2_h:"Listen to recitations", quran_card2_p:"Listen to calm recitations by renowned reciters.",
    quran_card3_h:"Simplified Tafsir", quran_card3_p:"Easy explanations of verses from trusted commentaries.",
    articles_title:"Articles & Topics", articles_lead:"Short content to nourish the heart and mind.",
    art1_h:"Night prayer virtues", art1_p:"Learn about the reward of night prayer.",
    art2_h:"Daily duas", art2_p:"A collection of recommended duas for every occasion.",
    art3_h:"Prophet's biography", art3_p:"Stories from the life of Prophet Muhammad \uFD3F\uFD3E.",
    art4_h:"Overcoming Addiction", art4_p:"Support and guidance for recovering from harmful habits.",
    addictions_title:"Overcoming Addiction",
    addictions_b1:"Addiction of any kind is a trial that can be overcome with patience, prayer, and reliance on Allah.",
    addictions_h1:"Practical steps", addictions_b2:"Identify your motivation, avoid triggers, replace the habit with a beneficial activity.",
    addictions_h2:"The faith dimension", addictions_b3:"Frequent remembrance of Allah and maintaining prayers strengthen the heart.",
    addictions_h3:"Don't despair", addictions_b4:"The door of repentance is always open, and every step forward counts with Allah.",
    hadiths_title:"Noble Hadiths", hadiths_lead:"A collection of authentic hadiths to reflect on and apply in daily life.",
    duasdhikr_title:"Duas & Dhikr", duasdhikr_lead:"Daily remembrances and supplications from the Sunnah.",
    dhikr_section_h:"Dhikr", duas_section_h:"Duas",
    stories_title:"Stories of the Prophets", stories_lead:"Lessons from the stories of the Prophets, peace be upon them.",
    story_prev:"\u2190 Previous", story_next:"Next \u2192", story_back:"\u2190 All stories",
    about_title:"About Us",
    about_p1:'"El Huda" is an islamic platform offering trusted content from the Quran and Sunnah.',
    about_h1:"Our Mission", about_p2:"We aim to provide clear, accessible islamic content in three languages.",
    about_h2:"Our Values", about_p3:"Accuracy, simplicity, and respect for every visitor.",
    tools_title:"Islamic Tools", tools_lead:"A set of tools to help with your daily worship.",
    tool_asma_h:"The 99 Names of Allah", tool_asma_p:"The 99 Names with their meanings.",
    tool_zakat_h:"Zakat Calculator", tool_zakat_p:"Easily calculate Zakat on money and gold.",
    tool_qibla_h:"Qibla Direction", tool_qibla_p:"Find the Qibla direction from your location.",
    tool_hijri_h:"Hijri Calendar", tool_hijri_p:"Today's Hijri date and upcoming occasions.",
    tool_search_h:"Quran Search", tool_search_p:"Search for a word or verse in the Quran.",
    tool_faq_h:"FAQ", tool_faq_p:"Answers to common questions about worship.",
    tool_library_h:"Book Library", tool_library_p:"Links to trusted free islamic books.",
    tool_tracker_h:"Quran Tracker", tool_tracker_p:"Track your daily reading/memorization progress.",
    tool_contact_h:"Contact Us", tool_contact_p:"Join our community on Discord.",
    asma_title:"The 99 Names of Allah", asma_lead:"The most beautiful names of Allah the Almighty.",
    zakat_title:"Zakat Calculator", zakat_lead:"Calculate Zakat (2.5%) on your money and gold.",
    zakat_cash_label:"Cash savings", zakat_gold_label:"Current value of gold/silver",
    zakat_calc_btn:"Calculate Zakat", zakat_result_label:"Zakat due:",
    zakat_nisab_note:"Note: Zakat is due if wealth reaches the Nisab and a lunar year has passed. Please consult a scholar.",
    qibla_title:"Qibla Direction", qibla_lead:"Find the direction of the Kaaba from your current location.",
    qibla_locating:"Locating you...", qibla_result_label:"Qibla direction from North:",
    qibla_note:"Point the top of your device towards North, then rotate by the given degrees.",
    hijri_title:"Hijri Calendar", hijri_lead:"Today's Hijri date and major upcoming islamic occasions.",
    hijri_today_label:"Today's Hijri date:", hijri_events_h:"Important islamic occasions",
    hijri_ev1:"Islamic New Year", hijri_ev2:"Day of Ashura", hijri_ev3:"Prophet's Birthday (Mawlid)",
    hijri_ev4:"Start of Ramadan", hijri_ev5:"Eid al-Fitr", hijri_ev6:"Day of Arafah & Eid al-Adha",
    search_title:"Quran Search", search_lead:"Search for any word or phrase in the Holy Quran.",
    search_placeholder:"Type a word to search...", search_btn:"Search", search_no_results:"No results found.",
    search_results_label:"Results:",
    faq_title:"FAQ", faq_lead:"Simple answers to common questions about daily worship.",
    library_title:"Book Library", library_lead:"Links to trusted sources for free islamic books.",
    tracker_title:"Quran Tracker", tracker_lead:"Log your daily Quran reading/memorization progress.",
    tracker_pages_label:"Pages/parts today", tracker_add_btn:"Add",
    tracker_total_label:"Total:", tracker_log_h:"Log", tracker_pages_unit:"pages",
    tracker_reset:"Reset log",
    contact_title:"Contact Us", contact_lead:"Join the AL-HUDA community on Discord.",
    contact_join_btn:"Join the Server",
    ramadan_title:"Ramadan Countdown", ramadan_lead:"Time remaining until the blessed month of Ramadan.",
    ramadan_next:"Next Ramadan:", ramadan_days:"days", ramadan_hrs:"hrs", ramadan_mins:"min", ramadan_secs:"sec",
    ramadan_in_progress:"\uD83C\uDF19 Ramadan Kareem — We are in the blessed month of Ramadan",
    share_title:"Share verse", share_copied:"Copied!",
    install_pwa:"Install App", install_pwa_desc:"Add El Huda to your home screen",
    footer_quote:"\u201CAnd cooperate in righteousness and piety\u201D",
    footer_rights:"© 2026 El Huda. All rights reserved."
  },
  fr: {
    brand:"El Huda", brand_sub:"GUIDANCE & LUMIÈRE",
    nav_home:"Accueil", nav_quran:"Coran", nav_prayer:"Prière",
    nav_hadiths:"Hadiths", nav_duas:"Invocations", nav_stories:"Prophètes",
    nav_articles:"Articles", nav_about:"À propos", nav_tools:"Outils", nav_ramadan:"Ramadan",
    hero_eyebrow:"Plateforme islamique digitale · 2026",
    hero_title:'La lumière du <span>Coran</span>, votre chemin vers la guidance',
    hero_lead:"Découvrez le Saint Coran, les horaires de prière et des articles islamiques fiables — dans une expérience moderne et apaisante, en trois langues.",
    cta_primary:"Commencer la lecture", cta_ghost:"Horaires de prière",
    home_q_h:"Le Saint Coran", home_q_p:"Lisez, écoutez et méditez dans un design apaisant.",
    home_p_h:"Horaires de prière", home_p_p:"Suivez facilement les cinq prières quotidiennes.",
    home_a_h:"Articles", home_a_p:"Des contenus courts pour nourrir le cœur et l'esprit.",
    home_about_h:"À propos", home_about_p:"Découvrez la mission d'El Huda.",
    home_hadiths_h:"Hadiths", home_hadiths_p:"Hadiths prophétiques choisis pour méditer.",
    home_duas_h:"Invocations & Dhikr", home_duas_p:"Rappels et invocations quotidiennes de la Sunna.",
    home_stories_h:"Histoires des Prophètes", home_stories_p:"Leçons des histoires des Prophètes.",
    more:"Lire la suite",
    ayah_quote:"« Et dis : Ô mon Seigneur, accroît mes connaissances »", ayah_ref:"Sourate Ta-Ha — Verset 114",
    daily_label:"Réflexion du jour",
    quran_title:"Le Saint Coran", quran_lead:"Des moyens simples et modernes de se rapprocher du Livre d'Allah.",
    quran_hub_read_h:"Lecture", quran_hub_read_p:"Parcourez le texte coranique complet avec traduction.",
    quran_hub_listen_h:"Écouter les récitations", quran_hub_listen_p:"Écoutez chaque verset récité par Cheikh Mishary Alafasy.",
    quran_hub_tafsir_h:"Tafsir simplifié", quran_hub_tafsir_p:"Lisez une explication simplifiée de chaque verset.",
    quran_select_label:"Choisir une sourate :", quran_loading:"Chargement...",
    quran_translation_label:"Traduction", quran_tafsir_label:"Tafsir simplifié",
    quran_show_tafsir:"Afficher/Masquer le Tafsir", quran_play:"Lire le verset",
    quran_tab_read:"📖 Lecture", quran_tab_listen:"🎧 Écoute", quran_tab_tafsir:"📝 Tafsir",
    mushaf_style_label:"Style d'écriture",
    style_uthmani:"Écriture Uthmani", style_simple:"Écriture simplifiée",
    style_tajweed:"Coloration Tajweed", style_page:"Mushaf (page)",
    audio_mode_label:"Mode d'écoute",
    audio_ayah:"Verset par verset", audio_surah:"Sourate complète",
    play_surah:"▶ Lire la sourate complète",
    reciter_label:"Récitateur :",
    tafsir_source_label:"Source du Tafsir",
    tafsir_muyassar:"Tafsir Al-Muyassar", tafsir_jalalayn:"Tafsir Al-Jalalayn",
    font_dec:"A-", font_inc:"A+", font_label:"Taille du texte",
    mushaf_toggle:"Vue Mushaf",
    mark_label:"Repères de mémorisation :",
    mark_memorize:"À mémoriser", mark_review:"À revoir", mark_done:"Mémorisé", mark_clear:"Effacer",
    tajweed_legend_title:"Guide des couleurs Tajweed",
    tw_ghunnah:"Ghunnah (son nasal)", tw_qalqalah:"Qalqalah (écho)", tw_madd:"Madd (allongement)",
    tw_ikhfa:"Ikhfa / Iqlab", tw_idgham:"Idgham (fusion)", tw_hamzat:"Lettres muettes",
    tajweed_disclaimer:"Les couleurs sont une aide approximative — consultez un Mushaf Tajweed certifié ou un enseignant.",
    tafsir_lang_note:"Les tafsirs dans votre langue sont affichés si disponibles, en plus de l'arabe.",
    back_quran:"← Retour au Coran",
    prayer_title:"Horaires de prière", prayer_lead:"Horaires approximatifs, à ajuster selon votre position.",
    p_fajr:"Fajr", p_sunrise:"Lever du soleil", p_dhuhr:"Dhuhr", p_asr:"Asr", p_maghrib:"Maghrib", p_isha:"Isha",
    prayer_note:"* Horaires approximatifs, ajustez-les selon votre position.",
    prayer_locating:"Localisation en cours...", prayer_location_label:"Votre position",
    prayer_allow:"Veuillez autoriser la localisation pour des horaires précis",
    prayer_next:"Prochaine prière",
    prayer_default_note:"Horaires de La Mecque affichés par défaut.",
    quran_card1_h:"Lire le Coran", quran_card1_p:"Lisez le Coran complet dans une police claire.",
    quran_card2_h:"Écouter les récitations", quran_card2_p:"Écoutez des récitations par de célèbres récitateurs.",
    quran_card3_h:"Tafsir simplifié", quran_card3_p:"Explications simplifiées des versets.",
    articles_title:"Articles & sujets", articles_lead:"Des contenus courts pour nourrir le cœur et l'esprit.",
    art1_h:"Mérite de la prière nocturne", art1_p:"Découvrez la récompense de la prière de nuit.",
    art2_h:"Invocations quotidiennes", art2_p:"Une collection d'invocations pour chaque moment.",
    art3_h:"Biographie du Prophète", art3_p:"Récits de la vie du Prophète Muhammad \uFD3F\uFD3E.",
    art4_h:"Surmonter une addiction", art4_p:"Soutien et conseils pour se rétablir.",
    addictions_title:"Surmonter une addiction",
    addictions_b1:"L'addiction est une épreuve dont on peut se rétablir avec patience et confiance en Allah.",
    addictions_h1:"Étapes concrètes", addictions_b2:"Identifiez votre motivation, évitez les déclencheurs, remplacez l'habitude par une activité bénéfique.",
    addictions_h2:"Dimension spirituelle", addictions_b3:"Multiplier le rappel d'Allah et maintenir les prières renforce le cœur.",
    addictions_h3:"Ne désespérez pas", addictions_b4:"La porte du repentir est toujours ouverte.",
    hadiths_title:"Hadiths Nobles", hadiths_lead:"Une collection de hadiths authentiques à méditer.",
    duasdhikr_title:"Invocations & Dhikr", duasdhikr_lead:"Rappels et invocations quotidiennes de la Sunna.",
    dhikr_section_h:"Dhikr", duas_section_h:"Invocations",
    stories_title:"Histoires des Prophètes", stories_lead:"Leçons tirées des histoires des Prophètes.",
    story_prev:"← Précédent", story_next:"Suivant →", story_back:"← Toutes les histoires",
    about_title:"À propos",
    about_p1:"« El Huda » est une plateforme islamique proposant un contenu fiable issu du Coran et de la Sunna.",
    about_h1:"Notre mission", about_p2:"Nous visons à offrir un contenu islamique clair en trois langues.",
    about_h2:"Nos valeurs", about_p3:"Rigueur des sources, simplicité du design, respect de chaque visiteur.",
    tools_title:"Outils Islamiques", tools_lead:"Un ensemble d'outils pour vous aider dans votre culte quotidien.",
    tool_asma_h:"Les 99 Noms d'Allah", tool_asma_p:"Les 99 Noms avec leurs significations.",
    tool_zakat_h:"Calculateur de Zakat", tool_zakat_p:"Calculez facilement la Zakat.",
    tool_qibla_h:"Direction de la Qibla", tool_qibla_p:"Trouvez la direction de la Qibla.",
    tool_hijri_h:"Calendrier Hégirien", tool_hijri_p:"La date hégirienne et les occasions à venir.",
    tool_search_h:"Recherche Coranique", tool_search_p:"Recherchez un mot dans le Coran.",
    tool_faq_h:"FAQ", tool_faq_p:"Réponses aux questions fréquentes sur le culte.",
    tool_library_h:"Bibliothèque", tool_library_p:"Liens vers des livres islamiques gratuits et fiables.",
    tool_tracker_h:"Suivi du Coran", tool_tracker_p:"Suivez vos progrès de lecture/mémorisation.",
    tool_contact_h:"Contactez-nous", tool_contact_p:"Rejoignez notre communauté sur Discord.",
    asma_title:"Les 99 Noms d'Allah", asma_lead:"Les plus beaux noms d'Allah le Tout-Puissant.",
    zakat_title:"Calculateur de Zakat", zakat_lead:"Calculez la Zakat (2,5%) sur votre argent et or.",
    zakat_cash_label:"Épargne en liquide", zakat_gold_label:"Valeur actuelle de l'or/argent",
    zakat_calc_btn:"Calculer la Zakat", zakat_result_label:"Zakat due :",
    zakat_nisab_note:"Remarque : la Zakat est due si la richesse atteint le Nisab et qu'une année lunaire est passée.",
    qibla_title:"Direction de la Qibla", qibla_lead:"Trouvez la direction de la Kaaba depuis votre position.",
    qibla_locating:"Localisation en cours...", qibla_result_label:"Direction de la Qibla depuis le Nord :",
    qibla_note:"Orientez le haut de votre appareil vers le Nord, puis tournez selon l'angle indiqué.",
    hijri_title:"Calendrier Hégirien", hijri_lead:"La date hégirienne et les occasions islamiques importantes.",
    hijri_today_label:"Date hégirienne d'aujourd'hui :", hijri_events_h:"Occasions islamiques importantes",
    hijri_ev1:"Nouvel An islamique", hijri_ev2:"Jour de Achoura", hijri_ev3:"Anniversaire du Prophète",
    hijri_ev4:"Début du Ramadan", hijri_ev5:"Aïd al-Fitr", hijri_ev6:"Jour d'Arafat et Aïd al-Adha",
    search_title:"Recherche Coranique", search_lead:"Recherchez n'importe quel mot dans le Saint Coran.",
    search_placeholder:"Tapez un mot à rechercher...", search_btn:"Rechercher", search_no_results:"Aucun résultat.",
    search_results_label:"Résultats :",
    faq_title:"FAQ", faq_lead:"Réponses simples aux questions fréquentes sur le culte.",
    library_title:"Bibliothèque", library_lead:"Liens vers des sources fiables de livres islamiques gratuits.",
    tracker_title:"Suivi du Coran", tracker_lead:"Enregistrez vos progrès quotidiens de lecture/mémorisation.",
    tracker_pages_label:"Pages/parties aujourd'hui", tracker_add_btn:"Ajouter",
    tracker_total_label:"Total :", tracker_log_h:"Journal", tracker_pages_unit:"pages",
    tracker_reset:"Réinitialiser",
    contact_title:"Contactez-nous", contact_lead:"Rejoignez la communauté AL-HUDA sur Discord.",
    contact_join_btn:"Rejoindre le serveur",
    ramadan_title:"Compte à rebours Ramadan", ramadan_lead:"Temps restant jusqu'au béni mois de Ramadan.",
    ramadan_next:"Prochain Ramadan :", ramadan_days:"jours", ramadan_hrs:"h", ramadan_mins:"min", ramadan_secs:"sec",
    ramadan_in_progress:"\uD83C\uDF19 Ramadan Kareem — Nous sommes dans le béni mois de Ramadan",
    share_title:"Partager le verset", share_copied:"Copié !",
    install_pwa:"Installer l'app", install_pwa_desc:"Ajouter El Huda à votre écran d'accueil",
    footer_quote:"« Et entraidez-vous dans la bonté et la piété »",
    footer_rights:"© 2026 El Huda. Tous droits réservés."
  }
};

/* ── setLang ── */
function setLang(lang){
  const dict = translations[lang] || translations.ar;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  document.body.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('#langSelect').forEach(sel=>{ sel.value = lang; });
  document.querySelectorAll('.theme-option').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-theme') === (document.documentElement.getAttribute('data-theme')||'dark'));
  });
  localStorage.setItem('elhuda_lang', lang);
  document.dispatchEvent(new CustomEvent('langchange', {detail:{lang}}));
}

/* ── setTheme ── */
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('elhuda_theme', theme);
  document.querySelectorAll('.theme-option').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-theme') === theme);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', ()=>{
  /* Language select */
  document.querySelectorAll('#langSelect').forEach(sel=>{
    sel.addEventListener('change', ()=> setLang(sel.value));
  });

  /* Theme */
  const savedTheme = localStorage.getItem('elhuda_theme') || 'dark';
  setTheme(savedTheme);
  document.querySelectorAll('.theme-toggle').forEach(toggle=>{
    const panel = toggle.nextElementSibling;
    if(!panel || !panel.classList.contains('theme-panel')) return;
    toggle.addEventListener('click', (e)=>{
      e.stopPropagation();
      document.querySelectorAll('.theme-panel.open').forEach(p=>{ if(p!==panel) p.classList.remove('open'); });
      panel.classList.toggle('open');
    });
    panel.querySelectorAll('.theme-option').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        setTheme(btn.getAttribute('data-theme'));
        panel.classList.remove('open');
      });
    });
  });
  document.addEventListener('click', ()=> document.querySelectorAll('.theme-panel.open').forEach(p=>p.classList.remove('open')));

  /* Mobile nav */
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if(toggle && navLinks){
    toggle.addEventListener('click', (e)=>{
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=> navLinks.classList.remove('open'));
    });
    document.addEventListener('click', (e)=>{
      if(!toggle.contains(e.target) && !navLinks.contains(e.target)){
        navLinks.classList.remove('open');
      }
    });
  }

  /* PWA */
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault(); deferredPrompt = e;
    const btn = document.getElementById('pwaInstallBtn');
    if(btn){
      btn.classList.add('show');
      btn.querySelector('.btn').addEventListener('click', ()=>{
        deferredPrompt.prompt(); deferredPrompt=null; btn.classList.remove('show');
      });
    }
  });

  /* Apply saved language AFTER all scripts are parsed */
  const savedLang = localStorage.getItem('elhuda_lang');
  if(savedLang && translations[savedLang]){
    setLang(savedLang);
  }
});
