let questions = [
  {
    frage: "Was bedeutet der Begriff 'Tawhid' im islamischen Glauben?",
    antworten: [
      { text_1: "Die Einheit und Einzigkeit Gottes", korrekt: true },
      { text_2: "Das Pflichtgebet der Muslime", korrekt: false },
      { text_3: "Die Pilgerfahrt nach Mekka", korrekt: false },
      { text_4: "Das islamische Gesetz (Scharia)", korrekt: false },
    ],
  },
  {
    frage:
      "Welche Stadt war die erste Qibla (Gebetsrichtung) der Muslime, bevor sie nach Mekka geändert wurde?",
    antworten: [
      { text_1: "Jerusalem (Al-Quds)", korrekt: true },
      { text_2: "Medina", korrekt: false },
      { text_3: "Kufa", korrekt: false },
      { text_4: "Damaskus", korrekt: false },
    ],
  },
  {
    frage:
      "Wie heißt die Überlieferungssammlung, die die Aussprüche und Handlungen des Propheten Muhammad enthält?",
    antworten: [
      { text_1: "Hadith", korrekt: true },
      { text_2: "Sunnah", korrekt: false },
      { text_3: "Fiqh", korrekt: false },
      { text_4: "Tafsir", korrekt: false },
    ],
  },
  {
    frage: "Welcher Engel überbrachte dem Propheten Muhammad die Offenbarung?",
    antworten: [
      { text_1: "Gabriel (Dschibril)", korrekt: true },
      { text_2: "Michael (Mika'il)", korrekt: false },
      { text_3: "Israfil", korrekt: false },
      { text_4: "Azra'il", korrekt: false },
    ],
  },
  {
    frage:
      "Wie lautet der islamische Begriff für das Gemeinschaftsgebet am Freitag?",
    antworten: [
      { text_1: "Salat al-Jumuʿah", korrekt: true },
      { text_2: "Salat al-Fajr", korrekt: false },
      { text_3: "Salat al-Isha", korrekt: false },
      { text_4: "Salat al-Maghrib", korrekt: false },
    ],
  },
  {
    frage: "Was sind die 'Fünf Säulen des Islams'?",
    antworten: [
      {
        text_1: "Glaubensbekenntnis, Gebet, Fasten, Almosen, Pilgerfahrt",
        korrekt: true,
      },
      { text_2: "Gebet, Fasten, Dschihad, Zakat, Opferfest", korrekt: false },
      { text_3: "Tauhid, Hadsch, Sunnah, Iman, Salat", korrekt: false },
      { text_4: "Nur Gebet und Fasten", korrekt: false },
    ],
  },
  {
    frage: "Welcher Monat gilt im Islam als der Fastenmonat?",
    antworten: [
      { text_1: "Ramadan", korrekt: true },
      { text_2: "Muharram", korrekt: false },
      { text_3: "Sha'ban", korrekt: false },
      { text_4: "Dhul-Hiddscha", korrekt: false },
    ],
  },
  {
    frage:
      "Wie nennt man das islamische Almosengebot, bei dem Muslime einen Teil ihres Vermögens abgeben müssen?",
    antworten: [
      { text_1: "Zakat", korrekt: true },
      { text_2: "Sadaqah", korrekt: false },
      { text_3: "Hadsch", korrekt: false },
      { text_4: "Kaffarah", korrekt: false },
    ],
  },
  {
    frage:
      "Wie heißt die islamische Glaubenslehre, die sich mit den Grundlagen des Glaubens befasst?",
    antworten: [
      { text_1: "Aqidah", korrekt: true },
      { text_2: "Fiqh", korrekt: false },
      { text_3: "Tasawwuf", korrekt: false },
      { text_4: "Shura", korrekt: false },
    ],
  },
  {
    frage: "Was bezeichnet der Begriff 'Ummah' im Islam?",
    antworten: [
      { text_1: "Die Gemeinschaft aller Muslime weltweit", korrekt: true },
      { text_2: "Die Familie des Propheten", korrekt: false },
      { text_3: "Eine Gebetsrichtung", korrekt: false },
      { text_4: "Eine bestimmte Rechtsschule", korrekt: false },
    ],
  },
];

let init = () => {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
};

let currentQuestion = 0;

let showQuestion = () => {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["frage"];
  document.getElementById("text_1").innerHTML = question.antworten[0].text_1;
  document.getElementById("text_2").innerHTML = question.antworten[1].text_2;
  document.getElementById("text_3").innerHTML = question.antworten[2].text_3;
  document.getElementById("text_4").innerHTML = question.antworten[3].text_4;
};
