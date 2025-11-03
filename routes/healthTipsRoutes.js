const express = require("express");
const router = express.Router();

const healthTipsData = {
  seasons: [
    {
      id: "monsoon",
      name: "বর্ষাকাল",
      nameEn: "Monsoon",
      period: "জুন-সেপ্টেম্বর",
      periodEn: "June-September",
      months: [6, 7, 8, 9],
      icon: "droplet",
      color: "#3B82F6",
      priority: "high",
      commonDiseases: [
        { name: "ডেঙ্গু", nameEn: "Dengue", severity: "high" },
        { name: "ম্যালেরিয়া", nameEn: "Malaria", severity: "medium" },
        { name: "টাইফয়েড", nameEn: "Typhoid", severity: "medium" },
        { name: "ত্বকের ছত্রাক", nameEn: "Skin Fungus", severity: "low" }
      ],
      tips: [
        {
          id: "monsoon_dengue",
          title: "ডেঙ্গু প্রতিরোধ",
          titleEn: "Dengue Prevention",
          urgent: true,
          category: "prevention",
          items: [
            "প্রতিদিন ঘরের চারপাশে জমা পানি চেক করুন (ফুলের টব, টায়ার, ভাঙা বাসন)",
            "এসি ট্রে, ফ্রিজের নিচের পানি সপ্তাহে একবার পরিষ্কার করুন",
            "ঘুমানোর সময় মশারি ব্যবহার করুন",
            "সন্ধ্যা ৬-৮টা এবং সকাল ৮-১০টা মশার সবচেয়ে সক্রিয় সময় - তখন ফুল হাতা পড়ুন",
            "জ্বর ৩ দিনের বেশি থাকলে বা শরীরে লাল দাগ দেখলে দ্রুত ডাক্তার দেখান"
          ]
        },
        {
          id: "monsoon_hygiene",
          title: "বর্ষায় স্বাস্থ্যবিধি",
          titleEn: "Monsoon Hygiene",
          urgent: false,
          category: "hygiene",
          items: [
            "রাস্তার খোলা খাবার এড়িয়ে চলুন",
            "ঘরে ফিরে সাবান দিয়ে ২০ সেকেন্ড হাত ধুয়ে নিন",
            "বৃষ্টিতে ভিজলে দ্রুত শুকনো কাপড় পরুন",
            "পায়ে ছত্রাক এড়াতে পা শুকনো রাখুন"
          ]
        }
      ]
    },
    {
      id: "winter",
      name: "শীতকাল",
      nameEn: "Winter",
      period: "ডিসেম্বর-ফেব্রুয়ারি",
      periodEn: "December-February",
      months: [12, 1, 2],
      icon: "thermometer",
      color: "#06B6D4",
      priority: "high",
      commonDiseases: [
        { name: "সর্দি-জ্বর", nameEn: "Cold & Flu", severity: "medium" },
        { name: "নিউমোনিয়া", nameEn: "Pneumonia", severity: "high" },
        { name: "হাঁপানি", nameEn: "Asthma", severity: "medium" },
        { name: "চর্মরোগ", nameEn: "Skin Diseases", severity: "low" }
      ],
      tips: [
        {
          id: "winter_cold_flu",
          title: "সর্দি-কাশি থেকে বাঁচুন",
          titleEn: "Cold & Cough Prevention",
          urgent: false,
          category: "prevention",
          items: [
            "হাঁচি-কাশির সময় টিস্যু বা কনুই দিয়ে মুখ ঢাকুন",
            "গরম পানি পান করুন এবং গার্গল করুন",
            "ভিটামিন সি সমৃদ্ধ খাবার খান (লেবু, কমলা, আমলকী)",
            "ঠান্ডা-গরম বারবার পরিবর্তন এড়িয়ে চলুন"
          ]
        },
        {
          id: "winter_children",
          title: "শিশুদের জন্য বিশেষ সতর্কতা",
          titleEn: "Special Care for Children",
          urgent: true,
          category: "children",
          items: [
            "দ্রুত শ্বাস (মিনিটে ৫০+ বার) নিউমোনিয়ার লক্ষণ হতে পারে",
            "বুকের খাঁচা ভেতরে ঢুকে গেলে জরুরি ডাক্তার দেখান",
            "শিশুকে গরম কাপড় পরান, বিশেষ করে রাতে",
            "টিকা সময়মতো দিন (নিউমোনিয়া প্রতিরোধে)"
          ]
        },
        {
          id: "winter_skin",
          title: "শুষ্ক ত্বকের যত্ন",
          titleEn: "Dry Skin Care",
          urgent: false,
          category: "skincare",
          items: [
            "গোসলে কুসুম গরম পানি ব্যবহার করুন",
            "গ্লিসারিন বা ময়েশ্চারাইজার নিয়মিত লাগান",
            "পর্যাপ্ত পানি পান করুন (দিনে ৮-১০ গ্লাস)"
          ]
        }
      ]
    },
    {
      id: "summer",
      name: "গ্রীষ্মকাল",
      nameEn: "Summer",
      period: "মার্চ-মে",
      periodEn: "March-May",
      months: [3, 4, 5],
      icon: "sun",
      color: "#F97316",
      priority: "high",
      commonDiseases: [
        { name: "ডায়রিয়া", nameEn: "Diarrhea", severity: "high" },
        { name: "হিট স্ট্রোক", nameEn: "Heat Stroke", severity: "high" },
        { name: "চোখ ওঠা", nameEn: "Conjunctivitis", severity: "medium" },
        { name: "খাদ্যে বিষক্রিয়া", nameEn: "Food Poisoning", severity: "medium" }
      ],
      tips: [
        {
          id: "summer_diarrhea",
          title: "ডায়রিয়া থেকে সুরক্ষা",
          titleEn: "Diarrhea Prevention",
          urgent: true,
          category: "prevention",
          items: [
            "পানি ১০ মিনিট ফুটিয়ে ঠান্ডা করে পান করুন",
            "খাবার ভালো করে রান্না করুন, বাসি খাবার খাবেন না",
            "ফল-সবজি ধুয়ে খান",
            "খাবার আগে ও টয়লেটের পর সাবান দিয়ে হাত ধুন",
            "ডায়রিয়া হলে খাবার স্যালাইন খান (১ লিটার পানিতে ১ প্যাকেট)"
          ]
        },
        {
          id: "summer_ors",
          title: "খাবার স্যালাইন তৈরি (ঘরে তৈরি)",
          titleEn: "Homemade ORS",
          urgent: false,
          category: "treatment",
          items: [
            "১ লিটার বিশুদ্ধ পানিতে ৬ চা-চামচ চিনি + আধা চা-চামচ লবণ",
            "প্রতি বার পাতলা পায়খানার পর ১ গ্লাস করে খান",
            "১২ ঘণ্টার বেশি পুরানো স্যালাইন ফেলে দিন",
            "শিশু দুর্বল হলে বা প্রস্রাব কমলে দ্রুত হাসপাতালে নিন"
          ]
        },
        {
          id: "summer_heat",
          title: "গরমে সুস্থ থাকুন",
          titleEn: "Stay Healthy in Heat",
          urgent: false,
          category: "prevention",
          items: [
            "দিনে ১২-১৫ গ্লাস পানি পান করুন",
            "দুপুর ১২-৩টা রোদে বের হবেন না",
            "হালকা রঙের সুতির কাপড় পরুন",
            "মাথা ঘোরালে, বমি ভাব হলে ছায়ায় বিশ্রাম নিন"
          ]
        }
      ]
    }
  ],
  yearRound: {
    id: "year_round",
    name: "সারা বছর মেনে চলুন",
    nameEn: "Year-Round Health Tips",
    icon: "calendar",
    color: "#10B981",
    tips: [
      {
        id: "handwashing",
        title: "হাত ধোয়ার সঠিক নিয়ম",
        titleEn: "Proper Handwashing",
        urgent: false,
        category: "hygiene",
        items: [
          "খাবার আগে ও পরে",
          "টয়লেট ব্যবহারের পরে",
          "বাইরে থেকে ঘরে ফিরে",
          "শিশু স্পর্শ করার আগে",
          "সাবান দিয়ে ২০ সেকেন্ড (২ বার জন্মদিনের গান গাওয়ার সময়)"
        ]
      },
      {
        id: "food_safety",
        title: "খাদ্য নিরাপত্তা",
        titleEn: "Food Safety",
        urgent: false,
        category: "food",
        items: [
          "কাঁচা ও রান্না করা খাবার আলাদা রাখুন",
          "মাংস ভালো করে সিদ্ধ করুন (৭৫°C+ তাপমাত্রা)",
          "খাবার ঢেকে রাখুন, মাছি থেকে রক্ষা করুন",
          "ফ্রিজে রাখা খাবার গরম করে খান"
        ]
      },
      {
        id: "when_doctor",
        title: "কখন দ্রুত ডাক্তার দেখাবেন",
        titleEn: "When to See a Doctor Urgently",
        urgent: true,
        category: "emergency",
        items: [
          "জ্বর ৩ দিনের বেশি বা তাপমাত্রা ১০৩°F+ হলে",
          "শ্বাস নিতে কষ্ট হলে বা বুকে ব্যথা হলে",
          "তীব্র পেট ব্যথা বা ক্রমাগত বমি",
          "রক্ত আসলে (পায়খানা, বমি, কাশিতে)",
          "শিশু খাওয়া বন্ধ করলে বা অতিরিক্ত দুর্বল হলে"
        ]
      }
    ]
  },
  emergencyContacts: {
    ambulance: "999",
    healthLine: "16263",
    poisonControl: "02-8616555"
  }
};

// Get all health tips
router.get("/", (req, res) => {
  res.json({
    success: true,
    data: healthTipsData
  });
});

// Get current season's tips based on current month
router.get("/current", (req, res) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentSeason = healthTipsData.seasons.find(season => 
    season.months.includes(currentMonth)
  );

  res.json({
    success: true,
    data: {
      currentSeason: currentSeason || healthTipsData.seasons[0],
      yearRound: healthTipsData.yearRound,
      emergencyContacts: healthTipsData.emergencyContacts
    }
  });
});

// Get specific season's tips
router.get("/season/:seasonId", (req, res) => {
  const { seasonId } = req.params;
  const season = healthTipsData.seasons.find(s => s.id === seasonId);

  if (!season) {
    return res.status(404).json({
      success: false,
      message: "Season not found"
    });
  }

  res.json({
    success: true,
    data: season
  });
});

// Get year-round tips
router.get("/year-round", (req, res) => {
  res.json({
    success: true,
    data: healthTipsData.yearRound
  });
});

// Get emergency contacts
router.get("/emergency", (req, res) => {
  res.json({
    success: true,
    data: healthTipsData.emergencyContacts
  });
});

module.exports = router;