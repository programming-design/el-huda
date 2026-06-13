/* ============ Islamic content data (AR / EN / FR) ============ */
/* Note: hadith wording is paraphrased for readability; please verify exact wording
   from a trusted hadith reference before formal use. */

const dailyQuotes = {
  ar: [
    {type:"آية", text:"«وَقُل رَّبِّ زِدْنِي عِلْمًا»", ref:"سورة طه 114"},
    {type:"حديث", text:"«من سلك طريقًا يطلب فيه علمًا سهّل الله له به طريقًا إلى الجنة»", ref:"رواه مسلم"},
    {type:"دعاء", text:"اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همي", ref:"دعاء مأثور"},
    {type:"آية", text:"«إِنَّ مَعَ الْعُسْرِ يُسْرًا»", ref:"سورة الشرح 6"},
    {type:"حديث", text:"«المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف، وفي كلٍّ خير»", ref:"رواه مسلم"},
    {type:"دعاء", text:"رب اشرح لي صدري ويسر لي أمري", ref:"سورة طه 25-26"},
    {type:"آية", text:"«وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ»", ref:"سورة الطلاق 3"},
    {type:"حديث", text:"«تبسمك في وجه أخيك صدقة»", ref:"حديث حسن"},
    {type:"دعاء", text:"اللهم لا سهل إلا ما جعلته سهلاً، وأنت تجعل الحزن إن شئت سهلاً", ref:"دعاء مأثور"},
    {type:"آية", text:"«وَبَشِّرِ الصَّابِرِينَ»", ref:"سورة البقرة 155"}
  ],
  en: [
    {type:"Ayah", text:"“And say: My Lord, increase me in knowledge”", ref:"Surah Ta-Ha 114"},
    {type:"Hadith", text:"“Whoever follows a path seeking knowledge, Allah makes a path to Paradise easy for them.”", ref:"Sahih Muslim"},
    {type:"Dua", text:"O Allah, make the Quran the spring of my heart, the light of my chest, and the remover of my sorrow.", ref:"Traditional dua"},
    {type:"Ayah", text:"“Indeed, with hardship comes ease.”", ref:"Surah Ash-Sharh 6"},
    {type:"Hadith", text:"“The strong believer is better and more beloved to Allah than the weak believer, though there is good in both.”", ref:"Sahih Muslim"},
    {type:"Dua", text:"My Lord, expand for me my chest and ease my task for me.", ref:"Surah Ta-Ha 25-26"},
    {type:"Ayah", text:"“And whoever relies upon Allah - then He is sufficient for him.”", ref:"Surah At-Talaq 3"},
    {type:"Hadith", text:"“Your smile for your brother is an act of charity.”", ref:"Hasan hadith"},
    {type:"Dua", text:"O Allah, nothing is easy except what You make easy, and You make hardship, if You will, easy.", ref:"Traditional dua"},
    {type:"Ayah", text:"“And give good tidings to the patient.”", ref:"Surah Al-Baqarah 155"}
  ],
  fr: [
    {type:"Verset", text:"« Et dis : Ô mon Seigneur, accroît mes connaissances »", ref:"Sourate Ta-Ha 114"},
    {type:"Hadith", text:"« Quiconque suit un chemin en quête de savoir, Allah lui facilite un chemin vers le Paradis. »", ref:"Sahih Muslim"},
    {type:"Invocation", text:"Ô Allah, fais du Coran le printemps de mon cœur, la lumière de ma poitrine, et l'évacuation de ma tristesse.", ref:"Invocation traditionnelle"},
    {type:"Verset", text:"« Certes, après la difficulté vient la facilité. »", ref:"Sourate Ash-Sharh 6"},
    {type:"Hadith", text:"« Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, bien qu'il y ait du bien dans les deux. »", ref:"Sahih Muslim"},
    {type:"Invocation", text:"Mon Seigneur, ouvre pour moi ma poitrine et facilite-moi ma tâche.", ref:"Sourate Ta-Ha 25-26"},
    {type:"Verset", text:"« Et quiconque place sa confiance en Allah, Il lui suffit. »", ref:"Sourate At-Talaq 3"},
    {type:"Hadith", text:"« Ton sourire envers ton frère est une aumône. »", ref:"Hadith hasan"},
    {type:"Invocation", text:"Ô Allah, rien n'est facile sauf ce que Tu rends facile, et Tu rends la difficulté facile si Tu le veux.", ref:"Invocation traditionnelle"},
    {type:"Verset", text:"« Et annonce la bonne nouvelle aux endurants. »", ref:"Sourate Al-Baqarah 155"}
  ]
};

const hadithsList = {
  ar: [
    {h:"«إنما الأعمال بالنيات»", r:"متفق عليه", t:"يُذكّرنا هذا الحديث بأن قيمة العمل تُقاس بصدق النية والإخلاص فيه لله وحده."},
    {h:"«لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه»", r:"متفق عليه", t:"دعوة إلى الإيثار ومحبة الخير للآخرين كما نحبه لأنفسنا."},
    {h:"«الطهور شطر الإيمان»", r:"رواه مسلم", t:"بيان لأهمية النظافة والطهارة في حياة المسلم كجزء من الإيمان."},
    {h:"«من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت»", r:"متفق عليه", t:"توجيه نبوي لضبط اللسان والحرص على الكلام الطيب."},
    {h:"«الكلمة الطيبة صدقة»", r:"متفق عليه", t:"حتى الكلام الحسن والابتسامة تُعد من أبواب الصدقة المتاحة لكل إنسان."},
    {h:"«من حسن إسلام المرء تركه ما لا يعنيه»", r:"حديث حسن", t:"دعوة للتركيز على ما يفيد وترك الانشغال بأمور الآخرين دون فائدة."}
  ],
  en: [
    {h:"“Actions are judged by intentions.”", r:"Agreed upon", t:"This hadith reminds us that the value of a deed is measured by sincerity of intention for Allah alone."},
    {h:"“None of you truly believes until he loves for his brother what he loves for himself.”", r:"Agreed upon", t:"A call to selflessness and wishing good for others as we wish for ourselves."},
    {h:"“Cleanliness is half of faith.”", r:"Sahih Muslim", t:"A statement on the importance of cleanliness and purity in a Muslim's life as part of faith."},
    {h:"“Whoever believes in Allah and the Last Day should speak good or remain silent.”", r:"Agreed upon", t:"Prophetic guidance on guarding the tongue and choosing good speech."},
    {h:"“A good word is charity.”", r:"Agreed upon", t:"Even kind words and a smile are a form of charity available to everyone."},
    {h:"“Part of the perfection of one's faith is leaving what does not concern him.”", r:"Hasan hadith", t:"A call to focus on what is beneficial and avoid unnecessary involvement in others' affairs."}
  ],
  fr: [
    {h:"« Les actes ne valent que par les intentions. »", r:"Hadith authentique", t:"Ce hadith nous rappelle que la valeur d'une action se mesure par la sincérité de l'intention envers Allah seul."},
    {h:"« Nul d'entre vous ne croit véritablement tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même. »", r:"Hadith authentique", t:"Un appel à l'altruisme et à souhaiter le bien aux autres comme à soi-même."},
    {h:"« La propreté est la moitié de la foi. »", r:"Sahih Muslim", t:"Une déclaration sur l'importance de la propreté et de la pureté dans la vie du musulman."},
    {h:"« Que celui qui croit en Allah et au Jour Dernier dise du bien ou se taise. »", r:"Hadith authentique", t:"Une orientation prophétique pour préserver sa langue et choisir de bonnes paroles."},
    {h:"« Une bonne parole est une aumône. »", r:"Hadith authentique", t:"Même une bonne parole ou un sourire est une forme d'aumône accessible à tous."},
    {h:"« Il fait partie de la perfection de la foi de laisser ce qui ne nous concerne pas. »", r:"Hadith hasan", t:"Un appel à se concentrer sur l'utile et à éviter de s'immiscer sans raison dans les affaires d'autrui."}
  ]
};

const dhikrList = {
  ar: [
    {a:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", c:"100 مرة", n:"تُكفّر الذنوب وتُثقل الميزان."},
    {a:"لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ", c:"10 مرات", n:"من أفضل الذكر، يعدل عتق رقاب."},
    {a:"أَسْتَغْفِرُ اللَّهَ", c:"100 مرة", n:"سبب لمغفرة الذنوب وتيسير الأمور."},
    {a:"لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", c:"كثيرًا", n:"من خزائن الجنة، تُعين على تفويض الأمر لله."},
    {a:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", c:"كثيرًا", n:"الصلاة على النبي ﷺ سبب لقربه منا يوم القيامة."}
  ],
  en: [
    {a:"Glory and praise be to Allah (SubhanAllahi wa bihamdih)", c:"100 times", n:"Erases sins and weighs heavily on the scale of good deeds."},
    {a:"There is no god but Allah, alone, without partner (La ilaha illallah wahdahu la sharika lah)", c:"10 times", n:"One of the best forms of remembrance, equal in reward to freeing slaves."},
    {a:"I seek Allah's forgiveness (Astaghfirullah)", c:"100 times", n:"A cause for forgiveness of sins and ease in affairs."},
    {a:"There is no power nor strength except with Allah (La hawla wa la quwwata illa billah)", c:"Often", n:"A treasure from Paradise, helps in trusting one's affairs to Allah."},
    {a:"O Allah, send blessings and peace upon our Prophet Muhammad", c:"Often", n:"Sending blessings upon the Prophet ﷺ brings us closer to him on the Day of Judgment."}
  ],
  fr: [
    {a:"Gloire et louange à Allah (SubhanAllahi wa bihamdih)", c:"100 fois", n:"Efface les péchés et pèse lourd dans la balance des bonnes actions."},
    {a:"Il n'y a de divinité qu'Allah, Seul, sans associé (La ilaha illallah wahdahu la sharika lah)", c:"10 fois", n:"L'une des meilleures formes de rappel, équivalente en récompense à affranchir des esclaves."},
    {a:"Je demande pardon à Allah (Astaghfirullah)", c:"100 fois", n:"Une cause de pardon des péchés et de facilité dans les affaires."},
    {a:"Il n'y a de force ni de puissance qu'avec Allah (La hawla wa la quwwata illa billah)", c:"Souvent", n:"Un trésor du Paradis, aide à confier ses affaires à Allah."},
    {a:"Ô Allah, prie et accorde la paix sur notre Prophète Muhammad", c:"Souvent", n:"Prier sur le Prophète ﷺ nous rapproche de lui le Jour du Jugement."}
  ]
};

const duasList = {
  ar: [
    {h:"دعاء الاستخارة", a:"اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم..."},
    {h:"دعاء عند الكرب", a:"لَا إِلٰهَ إِلَّا اللَّهُ العَظِيمُ الحَلِيمُ، لَا إِلٰهَ إِلَّا اللَّهُ رَبُّ العَرْشِ العَظِيمِ"},
    {h:"دعاء الرزق", a:"اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمن سواك"},
    {h:"دعاء تيسير الأمور", a:"اللهم لا سهل إلا ما جعلته سهلاً، وأنت تجعل الحزن إن شئت سهلاً"},
    {h:"دعاء العافية", a:"اللهم إني أسألك العافية في الدنيا والآخرة"}
  ],
  en: [
    {h:"Dua for guidance (Istikharah)", a:"O Allah, I seek Your guidance through Your knowledge, and I seek ability through Your power, and I ask You of Your great bounty..."},
    {h:"Dua in times of distress", a:"There is no god but Allah, the Mighty, the Wise. There is no god but Allah, Lord of the Mighty Throne."},
    {h:"Dua for sustenance", a:"O Allah, suffice me with what is lawful, away from what is unlawful, and enrich me by Your bounty away from dependence on others."},
    {h:"Dua for ease in affairs", a:"O Allah, nothing is easy except what You make easy, and You make hardship, if You will, easy."},
    {h:"Dua for wellbeing", a:"O Allah, I ask You for wellbeing in this life and the next."}
  ],
  fr: [
    {h:"Invocation de consultation (Istikharah)", a:"Ô Allah, je Te demande de me guider par Ta science, je Te demande la force par Ta puissance, et je Te demande de Ta grande faveur..."},
    {h:"Invocation en cas de détresse", a:"Il n'y a de divinité qu'Allah, le Magnifique, le Clément. Il n'y a de divinité qu'Allah, Seigneur du Trône immense."},
    {h:"Invocation pour la subsistance", a:"Ô Allah, suffis-moi par Ton licite loin de Ton illicite, et enrichis-moi par Ta faveur loin de dépendre d'autrui."},
    {h:"Invocation pour faciliter les affaires", a:"Ô Allah, rien n'est facile sauf ce que Tu rends facile, et Tu rends la difficulté facile si Tu le veux."},
    {h:"Invocation pour le bien-être", a:"Ô Allah, je Te demande le bien-être dans cette vie et dans l'au-delà."}
  ]
};

const storiesList = {
  ar: [
    {p:"آدم عليه السلام", s:"أول الأنبياء وأبو البشرية، خلقه الله من تراب وأسجد له الملائكة وعلّمه الأسماء كلها. أسكنه الله الجنة مع زوجه حواء، فوسوس له الشيطان حتى أكل من الشجرة المنهية، فتاب إلى الله فتاب الله عليه. أُنزل إلى الأرض ليكون أول إنسان وأول نبي، وقصته تعلّمنا أن باب التوبة مفتوح دائمًا."},
    {p:"إدريس عليه السلام", s:"نبي ذكره القرآن ووصفه بالصدق وعلو المنزلة. عُرف بكثرة العبادة والصبر والشكر. رفعه الله إلى مكانة عالية تكريمًا له، وهو رمز للعلم والاجتهاد في طاعة الله."},
    {p:"نوح عليه السلام", s:"دعا قومه إلى توحيد الله نحو 950 عامًا بصبر عجيب، فلم يستجب له إلا قليل. أمره الله ببناء السفينة، وحين جاء الطوفان أنجى الله فيها نوحًا والمؤمنين معه، وهلك الكافرون. قصته آية في الصبر على الدعوة والثقة بوعد الله."},
    {p:"هود عليه السلام", s:"أُرسل إلى قوم عاد الذين كانوا أقوياء البنية لكنهم عبدوا الأصنام واستكبروا. دعاهم إلى التوحيد فأنكروا وتحدّوه، فأرسل الله عليهم ريحًا عاتية دمّرتهم، ونجا هود والمؤمنون معه. عبرة في عاقبة الكبر والطغيان."},
    {p:"صالح عليه السلام", s:"أُرسل إلى قوم ثمود، وأعطاهم الله آية الناقة كدليل على صدقه. عقروا الناقة رغم التحذير، فأخذتهم صيحة عظيمة أهلكتهم في ثلاثة أيام. قصته تذكير بخطورة التكذيب بآيات الله."},
    {p:"إبراهيم عليه السلام", s:"خليل الله وأبو الأنبياء، كسر الأصنام ودعا قومه للتوحيد فألقوه في النار فنجاه الله. ابتُلي بذبح ابنه إسماعيل فصبر وسلّم لأمر الله ففداه الله بكبش. بنى الكعبة مع ابنه إسماعيل، وهو قدوة في التوحيد والتسليم لله."},
    {p:"لوط عليه السلام", s:"عاش في زمن إبراهيم وأُرسل إلى قرى قوم انتشرت فيهم الفواحش. دعاهم إلى الاستقامة فلم يستجيبوا، فأنجى الله لوطًا وأهله المؤمنين وأهلك القرى بعذاب شديد. عبرة في عاقبة الانغماس في الفواحش."},
    {p:"إسماعيل عليه السلام", s:"ابن إبراهيم، صبر مع والده على أمر الذبح استجابةً لأمر الله. أعانه الله على بناء الكعبة مع أبيه، وهو أصل النسل الذي جاء منه النبي محمد ﷺ. قصته مثال في الطاعة والتسليم."},
    {p:"إسحاق عليه السلام", s:"ابن إبراهيم الآخر، بشّر الله إبراهيم به وهو كبير السن. كان نبيًا صالحًا، ومنه استمرت سلسلة الأنبياء في بني إسرائيل عبر ابنه يعقوب. قصته من آيات استجابة الدعاء."},
    {p:"يعقوب عليه السلام", s:"ابن إسحاق، اشتد حزنه على فقد ابنه يوسف سنين طويلة دون أن يفقد الأمل في رحمة الله. عاد إليه بصره عند لقاء يوسف بعد الفراق الطويل. قصته في الصبر والرجاء بالله."},
    {p:"يوسف عليه السلام", s:"من أجمل القصص في القرآن؛ رمى به إخوته في البئر حسدًا، فبيع عبدًا في مصر، ثم ابتُلي بالسجن بعد عفته عن الفتنة. منحه الله العلم والحكم فأصبح عزيزًا لمصر، وعفا عن إخوته عند لقائهم. قصته في الصبر والعفة والعفو."},
    {p:"أيوب عليه السلام", s:"ابتُلي بفقدان المال والأهل والصحة سنين طويلة فصبر وحمد الله. دعا ربه بتذلل فاستجاب له وردّ له الصحة والأهل وزاده. قصته رمز خالد للصبر على البلاء."},
    {p:"شعيب عليه السلام", s:"أُرسل إلى مدين الذين كانوا يغشون في الميزان والمكيال. دعاهم إلى العدل في التجارة وتوحيد الله فكذّبوه، فأخذتهم عقوبة شديدة. قصته تذكير بأهمية الصدق والعدل في المعاملات."},
    {p:"موسى عليه السلام", s:"كليم الله، نشأ في بيت فرعون ثم أرسله الله لإنقاذ بني إسرائيل من ظلم فرعون. أيده الله بالمعجزات كالعصا واليد، وأنزل عليه التوراة بعد نجاة بني إسرائيل من البحر. قصته أطول قصص القرآن وفيها عبر في الصبر على الطغيان والثقة بنصر الله."},
    {p:"هارون عليه السلام", s:"أخو موسى ومعينه في الدعوة إلى فرعون. كان فصيح اللسان فطلب موسى من الله أن يكون وزيرًا له. ساعده في قيادة بني إسرائيل وقت غياب موسى لميقات ربه."},
    {p:"داود عليه السلام", s:"نبي وملك آتاه الله الحكمة والقوة، وهزم جالوت في صباه بثقته بالله. سخّر الله له الحديد فكان يصنع الدروع، وكان كثير التوبة والذكر. قصته في اجتماع الملك مع التواضع والعبادة."},
    {p:"سليمان عليه السلام", s:"ابن داود، آتاه الله ملكًا عظيمًا وسخّر له الريح والجن وعلّمه منطق الطير. عُرف بحكمته الفائقة في القضاء وحواره مع ملكة سبأ. قصته في شكر النعمة واستخدام الملك في طاعة الله."},
    {p:"إلياس عليه السلام", s:"أُرسل إلى قوم عبدوا 'بعل' من دون الله. دعاهم إلى التوحيد بثبات وصبر رغم تكذيبهم. من الأنبياء الذين أثنى الله عليهم في القرآن بالصلاح."},
    {p:"اليسع عليه السلام", s:"ذُكر في القرآن من الصالحين المهديين. اتصف بالصبر والاستقامة على أمر الله. سار على نهج الأنبياء قبله في الدعوة إلى التوحيد."},
    {p:"يونس عليه السلام", s:"غضب على قومه وتركهم قبل أن يأمره الله، فابتلعه الحوت في البحر. دعا ربه في ظلمة بطن الحوت بكلمات التوحيد والتسليم فنجاه الله. قصته في أهمية الصبر والرجوع إلى الله في الشدائد."},
    {p:"ذو الكفل عليه السلام", s:"ذُكر في القرآن مع الصابرين من الصالحين. عُرف بالعدل والوفاء بما تكفّل به. اسمه يدل على وفائه الكبير بعهوده."},
    {p:"زكريا عليه السلام", s:"دعا ربه أن يرزقه ولدًا في كبره فاستجاب الله له بيحيى. كان قيّمًا على مريم عليها السلام في المحراب. قصته آية في حسن الدعاء واليقين بقدرة الله."},
    {p:"يحيى عليه السلام", s:"وُلد استجابة لدعاء أبيه زكريا، وآتاه الله الحكمة منذ صغره. وُصف بالبر بوالديه والزهد والتقوى. من الأنبياء الذين أوتوا العلم في الصبا."},
    {p:"عيسى عليه السلام", s:"وُلد بمعجزة من غير أب لمريم العذراء، وآتاه الله الإنجيل وأيده بمعجزات كإحياء الموتى وإبراء المرضى بإذن الله. دعا بني إسرائيل إلى توحيد الله، ورفعه الله إليه ولم يُقتل ولم يُصلب كما يعتقد المسلمون. قصته آية في قدرة الله وتأكيد التوحيد."},
    {p:"محمد ﷺ", s:"خاتم الأنبياء والرسل، وُلد في مكة ونشأ يتيمًا معروفًا بالصدق والأمانة. بدأت الرسالة بنزول الوحي في غار حراء، فدعا الناس إلى توحيد الله بالحكمة والصبر على الأذى حتى انتشر الإسلام. سيرته ﷺ مصدر هداية شاملة في العبادة والأخلاق والمعاملات لكل زمان ومكان."}
  ],
  en: [
    {p:"Adam (peace be upon him)", s:"The first prophet and father of humanity, created by Allah from clay; the angels were commanded to bow to him and he was taught the names of all things. He and his wife Hawwa (Eve) lived in Paradise until Satan tempted them to eat from the forbidden tree; they repented sincerely and Allah accepted their repentance. They were sent down to earth, and Adam's story teaches that the door of repentance is always open."},
    {p:"Idris / Enoch (peace be upon him)", s:"A prophet mentioned in the Quran and described as truthful and of an exalted station. He was known for his devotion, patience, and gratitude to Allah. He was raised to a high and honored station, a symbol of knowledge and diligence in worship."},
    {p:"Nuh / Noah (peace be upon him)", s:"He called his people to monotheism for about 950 years with extraordinary patience, yet only a few believed. Allah commanded him to build an ark, and when the flood came, Allah saved Nuh and the believers while the disbelievers perished. His story is a sign of patience in calling to truth and trust in Allah's promise."},
    {p:"Hud (peace be upon him)", s:"Sent to the people of 'Ad, a physically powerful nation who worshipped idols and grew arrogant. He called them to monotheism but they denied and challenged him, so Allah sent a violent windstorm that destroyed them, while Hud and the believers were saved. A lesson on the consequences of arrogance and tyranny."},
    {p:"Salih (peace be upon him)", s:"Sent to the people of Thamud; Allah gave them the she-camel as a sign of his truthfulness. They killed the camel despite the warning, and a tremendous blast destroyed them within three days. His story warns against denying the signs of Allah."},
    {p:"Ibrahim / Abraham (peace be upon him)", s:"The close friend of Allah and father of many prophets; he broke the idols and called his people to monotheism, was thrown into a fire, and Allah saved him unharmed. He was tested with the command to sacrifice his son Ismail, submitted fully, and Allah replaced the sacrifice with a ram. Together with Ismail he built the Kaaba, and he remains a model of monotheism and submission to Allah."},
    {p:"Lut / Lot (peace be upon him)", s:"A contemporary of Ibrahim, sent to towns where immorality had become widespread. He called the people to righteousness, but they refused, so Allah saved Lut and the believers while destroying the towns with a severe punishment. A warning about the consequences of immorality."},
    {p:"Ismail / Ishmael (peace be upon him)", s:"The son of Ibrahim who showed patient submission when his father was commanded to sacrifice him. He helped his father build the Kaaba, and his lineage led to Prophet Muhammad ﷺ. His story is an example of obedience and trust in Allah."},
    {p:"Ishaq / Isaac (peace be upon him)", s:"The other son of Ibrahim, given as glad tidings to his parents in their old age. He was a righteous prophet, and through his son Yaqub the line of prophets among the Children of Israel continued. His birth is a sign of Allah answering sincere prayer."},
    {p:"Yaqub / Jacob (peace be upon him)", s:"The son of Ishaq, who grieved deeply for many years over the loss of his son Yusuf without ever losing hope in Allah's mercy. His sight was restored upon reuniting with Yusuf after the long separation. His story teaches patience and hope in Allah."},
    {p:"Yusuf / Joseph (peace be upon him)", s:"One of the most beautiful stories in the Quran; thrown into a well by his jealous brothers, sold into slavery in Egypt, and later imprisoned after resisting temptation. Allah granted him knowledge and authority, making him a trusted minister of Egypt, and he forgave his brothers when they were reunited. His story is a lesson in patience, chastity, and forgiveness."},
    {p:"Ayyub / Job (peace be upon him)", s:"He was tested with the loss of wealth, family, and health for many years, yet remained patient and grateful to Allah. He humbly prayed to his Lord, who restored his health, family, and blessed him further. His story is an enduring symbol of patience through hardship."},
    {p:"Shuayb (peace be upon him)", s:"Sent to the people of Madyan, who cheated in weights and measures. He called them to fairness in trade and to monotheism, but they rejected him and were struck by a severe punishment. A reminder of the importance of honesty and justice in dealings."},
    {p:"Musa / Moses (peace be upon him)", s:"The prophet to whom Allah spoke directly; raised in Pharaoh's household, then sent to free the Children of Israel from Pharaoh's oppression. Allah supported him with miracles such as the staff and his glowing hand, and revealed the Torah to him after Israel's deliverance through the sea. His is the longest story in the Quran, full of lessons on patience under tyranny and trust in Allah's victory."},
    {p:"Harun / Aaron (peace be upon him)", s:"The brother of Musa and his helper in calling Pharaoh to faith. He was eloquent in speech, so Musa asked Allah to appoint him as his minister. He helped lead the Children of Israel during Musa's absence on the mountain."},
    {p:"Dawud / David (peace be upon him)", s:"A prophet and king granted wisdom and strength by Allah, who defeated Goliath in his youth through trust in Allah. Allah made iron pliable for him so he could craft armor, and he was known for his frequent repentance and remembrance of Allah. His story combines kingship with humility and worship."},
    {p:"Sulayman / Solomon (peace be upon him)", s:"The son of Dawud, granted a vast kingdom and command over the wind and the jinn, and taught to understand the speech of birds. He was known for his extraordinary wisdom in judgment and his dialogue with the Queen of Sheba. His story teaches gratitude for blessings and using power in obedience to Allah."},
    {p:"Ilyas / Elijah (peace be upon him)", s:"Sent to a people who worshipped an idol called 'Ba'al' instead of Allah. He called them to monotheism with firmness and patience despite their denial. He is among the prophets praised by Allah in the Quran for his righteousness."},
    {p:"Al-Yasa / Elisha (peace be upon him)", s:"Mentioned in the Quran among the righteous and rightly-guided. He was characterized by patience and steadfastness in following Allah's command. He continued the path of the prophets before him in calling to monotheism."},
    {p:"Yunus / Jonah (peace be upon him)", s:"He left his people in anger before Allah commanded him to, and was swallowed by a great fish at sea. In the darkness of the fish's belly, he called upon Allah with words of monotheism and submission, and Allah saved him. His story highlights the importance of patience and turning back to Allah in times of distress."},
    {p:"Dhul-Kifl (peace be upon him)", s:"Mentioned in the Quran among the patient and righteous. He was known for his justice and for fulfilling what he pledged to undertake. His name reflects his great faithfulness to his commitments."},
    {p:"Zakariya / Zechariah (peace be upon him)", s:"He prayed to Allah for a child in his old age, and Allah answered him with Yahya. He was the guardian of Maryam (Mary) in the sanctuary. His story is a sign of sincere supplication and certainty in Allah's power."},
    {p:"Yahya / John (peace be upon him)", s:"Born in answer to his father Zakariya's prayer, and granted wisdom from a young age. He was described as devoted to his parents, humble, and God-fearing. He is among the prophets given knowledge in childhood."},
    {p:"Isa / Jesus (peace be upon him)", s:"Born miraculously without a father to the Virgin Mary, given the Gospel, and supported with miracles such as healing the sick and, by Allah's permission, raising the dead. He called the Children of Israel to the oneness of Allah, and Muslims believe Allah raised him up and that he was neither killed nor crucified. His story is a sign of Allah's power and an affirmation of monotheism."},
    {p:"Muhammad ﷺ", s:"The final prophet and messenger, born in Makkah, raised as an orphan known for his honesty and trustworthiness. His mission began with the revelation in the cave of Hira, after which he called people to the oneness of Allah with wisdom and patience through hardship until Islam spread widely. His life ﷺ is a comprehensive source of guidance in worship, character, and dealings for all times."}
  ],
  fr: [
    {p:"Adam (paix sur lui)", s:"Le premier prophète et père de l'humanité, créé par Allah à partir d'argile ; les anges reçurent l'ordre de se prosterner devant lui et il reçut la connaissance des noms de toutes choses. Lui et son épouse Hawwa (Ève) vivaient au Paradis jusqu'à ce que Satan les pousse à manger de l'arbre interdit ; ils se repentirent sincèrement et Allah accepta leur repentir. Ils furent envoyés sur terre, et l'histoire d'Adam enseigne que la porte du repentir est toujours ouverte."},
    {p:"Idriss / Énoch (paix sur lui)", s:"Un prophète mentionné dans le Coran, décrit comme véridique et d'un rang élevé. Il était connu pour sa dévotion, sa patience et sa gratitude envers Allah. Il fut élevé à un rang noble et honoré, symbole de savoir et d'assiduité dans l'adoration."},
    {p:"Noé (paix sur lui)", s:"Il appela son peuple au monothéisme pendant environ 950 ans avec une patience extraordinaire, mais seuls quelques-uns crurent. Allah lui ordonna de construire une arche, et lorsque le déluge survint, Allah sauva Noé et les croyants tandis que les mécréants périrent. Son histoire est un signe de patience dans l'appel à la vérité et de confiance en la promesse d'Allah."},
    {p:"Houd (paix sur lui)", s:"Envoyé au peuple de 'Ad, une nation physiquement puissante qui adorait des idoles et devint arrogante. Il les appela au monothéisme, mais ils le renièrent et le défièrent, alors Allah envoya une tempête de vent violente qui les détruisit, tandis que Houd et les croyants furent sauvés. Une leçon sur les conséquences de l'orgueil et de la tyrannie."},
    {p:"Salih (paix sur lui)", s:"Envoyé au peuple de Thamoud ; Allah leur donna la chamelle comme signe de sa véracité. Ils tuèrent la chamelle malgré l'avertissement, et un cri terrible les détruisit en trois jours. Son histoire met en garde contre le rejet des signes d'Allah."},
    {p:"Abraham (paix sur lui)", s:"L'ami intime d'Allah et père de nombreux prophètes ; il brisa les idoles et appela son peuple au monothéisme, fut jeté dans un feu, et Allah le sauva indemne. Il fut éprouvé par l'ordre de sacrifier son fils Ismaël, s'y soumit pleinement, et Allah remplaça le sacrifice par un bélier. Avec Ismaël, il construisit la Kaaba, et il demeure un modèle de monothéisme et de soumission à Allah."},
    {p:"Loth (paix sur lui)", s:"Contemporain d'Abraham, envoyé à des cités où l'immoralité s'était répandue. Il appela les habitants à la droiture, mais ils refusèrent, alors Allah sauva Loth et les croyants tandis que les cités furent détruites par un châtiment sévère. Un avertissement sur les conséquences de l'immoralité."},
    {p:"Ismaël (paix sur lui)", s:"Le fils d'Abraham qui fit preuve d'une soumission patiente lorsque son père reçut l'ordre de le sacrifier. Il aida son père à construire la Kaaba, et sa descendance mena au Prophète Muhammad ﷺ. Son histoire est un exemple d'obéissance et de confiance en Allah."},
    {p:"Isaac (paix sur lui)", s:"L'autre fils d'Abraham, annoncé comme une bonne nouvelle à ses parents âgés. Il fut un prophète vertueux, et par son fils Jacob la lignée des prophètes parmi les Enfants d'Israël se poursuivit. Sa naissance est un signe qu'Allah répond aux invocations sincères."},
    {p:"Jacob (paix sur lui)", s:"Le fils d'Isaac, qui s'affligea profondément pendant de longues années de la perte de son fils Joseph sans jamais perdre espoir en la miséricorde d'Allah. Sa vue lui fut rendue lors de ses retrouvailles avec Joseph après la longue séparation. Son histoire enseigne la patience et l'espoir en Allah."},
    {p:"Joseph (paix sur lui)", s:"Une des plus belles histoires du Coran ; jeté dans un puits par ses frères jaloux, vendu en esclavage en Égypte, puis emprisonné après avoir résisté à la tentation. Allah lui accorda savoir et autorité, faisant de lui un ministre de confiance en Égypte, et il pardonna à ses frères lors de leurs retrouvailles. Son histoire est une leçon de patience, de chasteté et de pardon."},
    {p:"Job (paix sur lui)", s:"Il fut éprouvé par la perte de ses biens, de sa famille et de sa santé pendant de longues années, mais resta patient et reconnaissant envers Allah. Il invoqua humblement son Seigneur, qui lui rendit la santé, la famille, et le combla davantage. Son histoire est un symbole durable de patience dans l'épreuve."},
    {p:"Chouaib (paix sur lui)", s:"Envoyé au peuple de Madyan, qui trichait sur les poids et mesures. Il les appela à l'équité dans le commerce et au monothéisme, mais ils le rejetèrent et furent frappés d'un châtiment sévère. Un rappel de l'importance de l'honnêteté et de la justice dans les transactions."},
    {p:"Moïse (paix sur lui)", s:"Le prophète à qui Allah parla directement ; élevé dans la maison de Pharaon, puis envoyé pour libérer les Enfants d'Israël de l'oppression de Pharaon. Allah le soutint par des miracles tels que le bâton et sa main lumineuse, et lui révéla la Torah après la délivrance d'Israël par la mer. C'est la plus longue histoire du Coran, riche en leçons sur la patience face à la tyrannie et la confiance dans la victoire d'Allah."},
    {p:"Aaron (paix sur lui)", s:"Le frère de Moïse et son soutien dans l'appel de Pharaon à la foi. Il était éloquent, c'est pourquoi Moïse demanda à Allah de le désigner comme son ministre. Il aida à diriger les Enfants d'Israël pendant l'absence de Moïse sur la montagne."},
    {p:"David (paix sur lui)", s:"Un prophète et roi à qui Allah accorda sagesse et force, et qui vainquit Goliath dans sa jeunesse grâce à sa confiance en Allah. Allah rendit le fer malléable pour lui afin qu'il fabrique des armures, et il était connu pour son repentir fréquent et son rappel constant d'Allah. Son histoire allie royauté, humilité et adoration."},
    {p:"Salomon (paix sur lui)", s:"Le fils de David, à qui fut accordé un vaste royaume et l'autorité sur le vent et les djinns, et qui apprit à comprendre le langage des oiseaux. Il était connu pour sa sagesse extraordinaire dans le jugement et son dialogue avec la Reine de Saba. Son histoire enseigne la gratitude pour les bienfaits et l'usage du pouvoir dans l'obéissance à Allah."},
    {p:"Élie (paix sur lui)", s:"Envoyé à un peuple qui adorait une idole appelée 'Baal' au lieu d'Allah. Il les appela au monothéisme avec fermeté et patience malgré leur rejet. Il est parmi les prophètes louangés par Allah dans le Coran pour sa droiture."},
    {p:"Élisée (paix sur lui)", s:"Mentionné dans le Coran parmi les vertueux et bien-guidés. Il se distinguait par sa patience et sa constance dans l'obéissance à Allah. Il poursuivit la voie des prophètes qui l'avaient précédé dans l'appel au monothéisme."},
    {p:"Jonas (paix sur lui)", s:"Il quitta son peuple en colère avant qu'Allah ne le lui ordonne, et fut englouti par un grand poisson en mer. Dans l'obscurité du ventre du poisson, il invoqua Allah avec des paroles de monothéisme et de soumission, et Allah le sauva. Son histoire souligne l'importance de la patience et du retour vers Allah dans les moments de détresse."},
    {p:"Dhul-Kifl (paix sur lui)", s:"Mentionné dans le Coran parmi les endurants et les vertueux. Il était connu pour sa justice et pour tenir ses engagements. Son nom reflète sa grande fidélité à ses promesses."},
    {p:"Zacharie (paix sur lui)", s:"Il invoqua Allah pour avoir un enfant dans sa vieillesse, et Allah lui répondit en lui accordant Yahya (Jean). Il était le gardien de Marie dans le sanctuaire. Son histoire est un signe d'invocation sincère et de certitude dans le pouvoir d'Allah."},
    {p:"Jean (Yahya) (paix sur lui)", s:"Né en réponse à l'invocation de son père Zacharie, et doté de sagesse dès son jeune âge. Il fut décrit comme pieux envers ses parents, humble et craignant Allah. Il est parmi les prophètes ayant reçu la connaissance dès l'enfance."},
    {p:"Jésus (paix sur lui)", s:"Né miraculeusement sans père de la Vierge Marie, il reçut l'Évangile et fut soutenu par des miracles tels que guérir les malades et, par la permission d'Allah, ressusciter les morts. Il appela les Enfants d'Israël à l'unicité d'Allah, et les musulmans croient qu'Allah l'éleva vers Lui et qu'il ne fut ni tué ni crucifié. Son histoire est un signe de la puissance d'Allah et une affirmation du monothéisme."},
    {p:"Muhammad ﷺ", s:"Le dernier prophète et messager, né à La Mecque, élevé orphelin et connu pour son honnêteté et sa fiabilité. Sa mission commença avec la révélation dans la grotte de Hira, après quoi il appela les gens à l'unicité d'Allah avec sagesse et patience face aux épreuves, jusqu'à ce que l'Islam se répande largement. Sa vie ﷺ est une source complète de guidance dans l'adoration, le comportement et les relations humaines, pour toutes les époques."}
  ]
};
