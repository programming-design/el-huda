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
    {p:"النبي آدم عليه السلام", s:"أول الأنبياء وأبو البشرية، خلقه الله من تراب وعلّمه الأسماء، وقصته تعلّمنا التوبة وقبول الخطأ والرجوع إلى الله."},
    {p:"النبي نوح عليه السلام", s:"دعا قومه إلى التوحيد قرونًا طويلة بصبر عجيب، حتى أنجاه الله مع المؤمنين في السفينة من الطوفان."},
    {p:"النبي يوسف عليه السلام", s:"قصته من أجمل القصص، فيها الصبر على الظلم، والعفة، والعفو عن الإخوة، وحسن التدبير."},
    {p:"النبي موسى عليه السلام", s:"تحدّى الظلم بثقته بالله، وقصته مليئة بالعبر في الصبر على الأذى ومواجهة الطغيان بالحق."}
  ],
  en: [
    {p:"Prophet Adam (peace be upon him)", s:"The first prophet and father of humanity, created from clay and taught the names of things; his story teaches repentance and returning to Allah after error."},
    {p:"Prophet Nuh / Noah (peace be upon him)", s:"He called his people to monotheism for centuries with remarkable patience, until Allah saved him and the believers from the flood in the ark."},
    {p:"Prophet Yusuf / Joseph (peace be upon him)", s:"One of the most beautiful stories — patience through injustice, chastity, forgiveness of his brothers, and wise leadership."},
    {p:"Prophet Musa / Moses (peace be upon him)", s:"He confronted tyranny with trust in Allah; his story is full of lessons in patience under hardship and standing for truth against oppression."}
  ],
  fr: [
    {p:"Le Prophète Adam (paix sur lui)", s:"Le premier prophète et père de l'humanité, créé d'argile et à qui les noms des choses furent enseignés ; son histoire enseigne le repentir et le retour vers Allah après l'erreur."},
    {p:"Le Prophète Noé (paix sur lui)", s:"Il appela son peuple au monothéisme pendant des siècles avec une patience remarquable, jusqu'à ce qu'Allah le sauve, lui et les croyants, du déluge dans l'arche."},
    {p:"Le Prophète Joseph (paix sur lui)", s:"Une des plus belles histoires — patience face à l'injustice, chasteté, pardon envers ses frères, et sagesse dans la gestion."},
    {p:"Le Prophète Moïse (paix sur lui)", s:"Il affronta la tyrannie avec confiance en Allah ; son histoire est riche en leçons de patience face à l'épreuve et de défense de la vérité face à l'oppression."}
  ]
};
