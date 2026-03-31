// data.js - Base de données de l'application
window.NaimData = {
    UI_DICT: {
        ar: {
            appTitle: "نعيم الذاكرين", home: "الرئيسية", quranPlayer: "القرآن الكريم (بث حي)", prayerTimes: "مواقيت الصلاة",
            privacyPolicy: "سياسة الخصوصية", blogLanguage: "لغة المنصة", aboutUs: "من نحن", aboutTitle: "من نحن",
            aboutText1: '"نعيم الذاكرين" هي منصة قرآنية إبداعية مصممة لتوفير تجربة استماع وتدبر غامرة.',
            aboutText2: 'نقدم تلاوات لأكثر من 50 قارئاً، مع توفير تراجم بـ 10 لغات. نسأل الله أن يجعل هذا العمل خالصاً لوجهه الكريم.',
            country: "البلد", city: "المدينة / الولاية", updateLocation: "تحديث", ayahOfDay: "آية اليوم",
            duaOfDay: "دعاء اليوم", tafsirTitle: "التفسير:", loading: "جاري التحميل...", searchSurah: "ابحث عن سورة...",
            translation: "الترجمة", privacyTitle: "سياسة الخصوصية", privacyText: "نحن في نعيم الذاكرين نحترم خصوصيتك. لا نقوم بجمع أو تخزين أي بيانات شخصية.",
            quranSearch: "البحث في القرآن", searchPlaceholder: "أدخل كلمة للبحث عنها...", searchResults: "نتائج البحث",
            noResults: "لا توجد نتائج مطابقة لبحثك.", listenAyah: "استماع للآية"
        },
        fr: {
            appTitle: "Naimaldakirine", home: "Accueil", quranPlayer: "TV Coranique", prayerTimes: "Horaires de Prière",
            privacyPolicy: "Confidentialité", blogLanguage: "Langue", aboutUs: "À propos", aboutTitle: "À propos",
            aboutText1: '"Naeim Al-Thakireen" est une plateforme coranique créative.', aboutText2: 'Nous proposons des récitations avec traductions et exégèses.',
            country: "Pays", city: "Ville / Wilaya", updateLocation: "Mise à jour", ayahOfDay: "Verset du Jour",
            duaOfDay: "Invocation du Jour", tafsirTitle: "Exégèse (Tafsir):", loading: "Chargement...", searchSurah: "Chercher une sourate...",
            translation: "Traduction", privacyTitle: "Confidentialité", privacyText: "Nous ne collectons aucune donnée personnelle.",
            quranSearch: "Recherche Coranique", searchPlaceholder: "Entrez un mot...", searchResults: "Résultats",
            noResults: "Aucun résultat trouvé.", listenAyah: "Écouter"
        }
    },
    RECITERS: [
        { id: "ar.alafasy", name: "مشاري راشد العفاسي" },
        { id: "ar.mahermuaiqly", name: "ماهر المعيقلي" },
        { id: "ar.sudais", name: "عبد الرحمن السديس" },
        { id: "ar.shuraym", name: "سعود الشريم" },
        { id: "ar.minshawi", name: "محمد صديق المنشاوي" },
        { id: "ar.husary", name: "محمود خليل الحصري" },
        { id: "ar.ahmedajamy", name: "أحمد بن علي العجمي" },
        { id: "ar.yasserdossari", name: "ياسر الدوسari" }
        // Ajoutez les autres ici...
    ],
    PRAYER_COUNTRIES: [
        { id: "Algeria", nameAr: "الجزائر", nameFr: "Algérie", nameEn: "Algeria" },
        { id: "Morocco", nameAr: "المغرب", nameFr: "Maroc", nameEn: "Morocco" },
        { id: "France", nameAr: "فرنسا", nameFr: "France", nameEn: "France" }
    ],
    PRAYER_CITIES: {
        "Algeria": ["الجزائر", "تيزي وزو", "بجاية", "عنابة", "وهران", "سطيف", "تلمسان", "قسنطينة"],
        "Morocco": ["Casablanca", "Rabat", "Marrakech"],
        "France": ["Paris", "Marseille", "Lyon"]
    },
    DAILY_AYAHS_REF: ["2:255", "2:286", "3:8", "24:35", "112:1"],
    DAILY_DUAS: [
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
        "اللَّهُمَّ يَامُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ."
    ],
    SURAH_VIRTUES: {
        1: "أعظم سورة في القرآن.", 18: "نور ما بين الجمعتين.", 67: "المانعة من عذاب القبر."
    }
};
