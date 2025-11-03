const express = require("express");
const router = express.Router();

const facilities = [
    {
        id: 1,
        name: "চর কলাপাড়া কমিউনিটি ক্লিনিক",
        type: "কমিউনিটি ক্লিনিক",
        upazila: "গলাচিপা",
        union: "চর কলাপাড়া",
        open: "মঙ্গলবার, বৃহস্পতিবার সকাল ৯টা–১২টা",
        lat: 22.345,
        lon: 90.235
    },
    {
        id: 2,
        name: "ব্র্যাক হেলথ কর্নার",
        type: "এনজিও স্বাস্থ্যকেন্দ্র",
        upazila: "গলাচিপা",
        union: "চর মন্টাজ",
        open: "প্রতিদিন সকাল ৮টা–সন্ধ্যা ৫টা",
        lat: 22.348,
        lon: 90.240
    },
    {
        id: 3,
        name: "রফিক মেডিসিন হাউস",
        type: "ফার্মেসি",
        upazila: "গলাচিপা",
        union: "চর কলাপাড়া",
        open: "প্রতিদিন ২৪ ঘন্টা",
        lat: 22.350,
        lon: 90.245
    }
];

router.get("/", (req, res) => {
    res.json(facilities);
});

module.exports = router; 