let questions = [
  {
    frage: "Was bedeutet der Begriff 'Tawhid' im islamischen Glauben?",
    antworten: [
      { text_0: "Die Einheit und Einzigkeit Gottes", korrekt: true },
      { text_1: "Das Pflichtgebet der Muslime", korrekt: false },
      { text_2: "Die Pilgerfahrt nach Mekka", korrekt: false },
      { text_3: "Das islamische Gesetz (Scharia)", korrekt: false },
    ],
  },
  {
    frage:
      "Welche Stadt war die erste Qibla (Gebetsrichtung) der Muslime, bevor sie nach Mekka geändert wurde?",
    antworten: [
      { text_0: "Jerusalem (Al-Quds)", korrekt: true },
      { text_1: "Medina", korrekt: false },
      { text_2: "Kufa", korrekt: false },
      { text_3: "Damaskus", korrekt: false },
    ],
  },
  {
    frage:
      "Wie heißt die Überlieferungssammlung, die die Aussprüche und Handlungen des Propheten Muhammad enthält?",
    antworten: [
      { text_0: "Hadith", korrekt: true },
      { text_1: "Sunnah", korrekt: false },
      { text_2: "Fiqh", korrekt: false },
      { text_3: "Tafsir", korrekt: false },
    ],
  },
  {
    frage: "Welcher Engel überbrachte dem Propheten Muhammad die Offenbarung?",
    antworten: [
      { text_0: "Gabriel (Dschibril)", korrekt: true },
      { text_1: "Michael (Mika'il)", korrekt: false },
      { text_2: "Israfil", korrekt: false },
      { text_3: "Azra'il", korrekt: false },
    ],
  },
  {
    frage:
      "Wie lautet der islamische Begriff für das Gemeinschaftsgebet am Freitag?",
    antworten: [
      { text_0: "Salat al-Jumuʿah", korrekt: true },
      { text_1: "Salat al-Fajr", korrekt: false },
      { text_2: "Salat al-Isha", korrekt: false },
      { text_3: "Salat al-Maghrib", korrekt: false },
    ],
  },
  {
    frage: "Was sind die 'Fünf Säulen des Islams'?",
    antworten: [
      {
        text_0: "Glaubensbekenntnis, Gebet, Fasten, Almosen, Pilgerfahrt",
        korrekt: true,
      },
      { text_1: "Gebet, Fasten, Dschihad, Zakat, Opferfest", korrekt: false },
      { text_2: "Tauhid, Hadsch, Sunnah, Iman, Salat", korrekt: false },
      { text_3: "Nur Gebet und Fasten", korrekt: false },
    ],
  },
  {
    frage: "Welcher Monat gilt im Islam als der Fastenmonat?",
    antworten: [
      { text_0: "Ramadan", korrekt: true },
      { text_1: "Muharram", korrekt: false },
      { text_2: "Sha'ban", korrekt: false },
      { text_3: "Dhul-Hiddscha", korrekt: false },
    ],
  },
  {
    frage:
      "Wie nennt man das islamische Almosengebot, bei dem Muslime einen Teil ihres Vermögens abgeben müssen?",
    antworten: [
      { text_0: "Zakat", korrekt: true },
      { text_1: "Sadaqah", korrekt: false },
      { text_2: "Hadsch", korrekt: false },
      { text_3: "Kaffarah", korrekt: false },
    ],
  },
  {
    frage:
      "Wie heißt die islamische Glaubenslehre, die sich mit den Grundlagen des Glaubens befasst?",
    antworten: [
      { text_0: "Aqidah", korrekt: true },
      { text_1: "Fiqh", korrekt: false },
      { text_2: "Tasawwuf", korrekt: false },
      { text_3: "Shura", korrekt: false },
    ],
  },
  {
    frage: "Was bezeichnet der Begriff 'Ummah' im Islam?",
    antworten: [
      { text_0: "Die Gemeinschaft aller Muslime weltweit", korrekt: true },
      { text_1: "Die Familie des Propheten", korrekt: false },
      { text_2: "Eine Gebetsrichtung", korrekt: false },
      { text_3: "Eine bestimmte Rechtsschule", korrekt: false },
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
  document.getElementById("text_0").innerHTML = question.antworten[0].text_0;
  document.getElementById("text_1").innerHTML = question.antworten[1].text_1;
  document.getElementById("text_2").innerHTML = question.antworten[2].text_2;
  document.getElementById("text_3").innerHTML = question.antworten[3].text_3;
};

let answer = (index, Element) => {
  let question = questions[currentQuestion];
  let antwort = question.antworten[index];

  if (antwort.korrekt) {
    Element.style.backgroundColor = "lightgreen";
  } else {
    Element.style.backgroundColor = "lightcoral";

    let richtigeAntwortIndex = question.antworten.findIndex(
      (antwort) => antwort.korrekt === true
    );
    document.getElementById(
      "text_" + richtigeAntwortIndex
    ).style.backgroundColor = "lightgreen";
  }
  document.getElementById("next_button").disabled = false;
};

let nextQuestion = () => {
  for (let i = 0; i < 4; i++) {
    document.getElementById("text_" + i).style.backgroundColor = "";
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    alert("Quiz beendet!");
  }
  document.getElementById("next_button").disabled = true;
  document.getElementById("question_counter").innerHTML = currentQuestion + 1;
};
