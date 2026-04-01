// data.js - VERSION COMPLÈTE ET CORRIGÉE (Ne pas ajouter le mot "export")

const UI_DICT = {
    ar: {
        appTitle: "نعيم الذاكرين",
        home: "الرئيسية",
        quranPlayer: "القرآن الكريم (بث حي)",
        prayerTimes: "مواقيت الصلاة",
        ayahOfDay: "آية اليوم"
    },
    fr: {
        appTitle: "Naeem Al-Dhakirin",
        home: "Accueil",
        quranPlayer: "Coran (Direct)",
        prayerTimes: "Horaires de Prière",
        ayahOfDay: "Verset du Jour"
    },
    en: {
        appTitle: "Naeem Al-Dhakirin",
        home: "Home",
        quranPlayer: "Quran Player",
        prayerTimes: "Prayer Times",
        ayahOfDay: "Ayah of the Day"
    }
};

const PRAYER_COUNTRIES = [
    { id: "Algeria", nameAr: "الجزائر", nameFr: "Algérie", nameEn: "Algeria" }
];

const PRAYER_CITIES = {
    "Algeria": [
        "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة", "بشار", 
        "البليدة", "البويرة", "تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو", "الجزائر", 
        "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة", 
        "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران", "البيض", 
        "إليزي", "برج بوعريريج", "بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي", 
        "خنشلة", "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت", 
        "غرداية", "غليزان", "تيميمون"
    ]
};

const RECITERS = [
    { id: "ar.alafasy", name: "مشاري راشد العفاسي", nameFr: "Mishari Alafasy" },
    { id: "ar.abdulbasitmurattal", name: "عبد الباسط عبد الصمد", nameFr: "AbdulBaset AbdulSamad" },
    { id: "ar.sudais", name: "عبد الرحمن السديس", nameFr: "Abdur-Rahman as-Sudais" },
    { id: "ar.husary", name: "محمود خليل الحصري", nameFr: "Mahmoud Khalil Al-Husary" }
];

const DAILY_AYAHS_REF = [
    255, 286, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];
