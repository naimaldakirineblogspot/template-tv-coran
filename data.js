// data.js
const UI_DICT = {
    ar: {
        appTitle: "نعيم الذاكرين",
        home: "الرئيسية",
        quranPlayer: "القرآن الكريم (بث حي)",
        prayerTimes: "مواقيت الصلاة",
        // ... (gardez tout le reste de votre contenu ici)
    },
    fr: { /* ... */ },
    en: { /* ... */ }
};

const PRAYER_COUNTRIES = [
    { id: "Algeria", nameAr: "الجزائر", nameFr: "Algérie", nameEn: "Algeria" },
    // ... (gardez tout le reste de votre contenu ici)
];

const PRAYER_CITIES = {
    "Algeria": ["أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة", "بشار", "البليدة", "البويرة", "تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو", "الجزائر", "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة", "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران", "البيض", "إليزي", "برج بوعريريج", "بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة", "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت", "غرداية", "غليزان", "تيميمون"],
    // ... (gardez tout le reste de votre contenu ici)
};

const RECITERS = [
    { id: "ar.alafasy", name: "مشاري راشد العفاسي", nameFr: "Mishari Alafasy" },
    // ... (gardez tout le reste de votre contenu ici)
];

// Si vous avez d'autres constantes en bas de votre fichier comme DAILY_AYAHS_REF ou DAILY_DUAS, 
// assurez-vous de bien les déclarer avec "const" et SANS le mot "export".
// Exemple : const DAILY_AYAHS_REF = [ ... ];
