let questions = [
  {
    frage: "Was bedeutet der Begriff 'Tawhid' im islamischen Glauben?",
    antworten: [
      { text_0: "Das islamische Gesetz (Scharia)", korrekt: false },
      { text_1: "Die Einheit und Einzigkeit Gottes", korrekt: true },
      { text_2: "Die Pilgerfahrt nach Mekka", korrekt: false },
      { text_3: "Das Pflichtgebet der Muslime", korrekt: false },
    ],
  },
  {
    frage:
      "Welche Stadt war die erste Qibla (Gebetsrichtung) der Muslime, bevor sie nach Mekka geändert wurde?",
    antworten: [
      { text_0: "Kufa", korrekt: false },
      { text_1: "Medina", korrekt: false },
      { text_2: "Jerusalem (Al-Quds)", korrekt: true },
      { text_3: "Damaskus", korrekt: false },
    ],
  },
  {
    frage:
      "Wie heißt die Überlieferungssammlung, die die Aussprüche und Handlungen des Propheten Muhammad enthält?",
    antworten: [
      { text_0: "Fiqh", korrekt: false },
      { text_1: "Hadith", korrekt: true },
      { text_2: "Sunnah", korrekt: false },
      { text_3: "Tafsir", korrekt: false },
    ],
  },
  {
    frage: "Welcher Engel überbrachte dem Propheten Muhammad die Offenbarung?",
    antworten: [
      { text_0: "Michael (Mika'il)", korrekt: false },
      { text_1: "Gabriel (Dschibril)", korrekt: true },
      { text_2: "Azra'il", korrekt: false },
      { text_3: "Israfil", korrekt: false },
    ],
  },
  {
    frage:
      "Wie lautet der islamische Begriff für das Gemeinschaftsgebet am Freitag?",
    antworten: [
      { text_0: "Salat al-Isha", korrekt: false },
      { text_1: "Salat al-Maghrib", korrekt: false },
      { text_2: "Salat al-Jumuʿah", korrekt: true },
      { text_3: "Salat al-Fajr", korrekt: false },
    ],
  },
  {
    frage: "Was sind die 'Fünf Säulen des Islams'?",
    antworten: [
      { text_0: "Tauhid, Hadsch, Sunnah, Iman, Salat", korrekt: false },
      {
        text_1: "Glaubensbekenntnis, Gebet, Fasten, Almosen, Pilgerfahrt",
        korrekt: true,
      },
      { text_2: "Gebet, Fasten, Dschihad, Zakat, Opferfest", korrekt: false },
      { text_3: "Nur Gebet und Fasten", korrekt: false },
    ],
  },
  {
    frage: "Welcher Monat gilt im Islam als der Fastenmonat?",
    antworten: [
      { text_0: "Muharram", korrekt: false },
      { text_1: "Ramadan", korrekt: true },
      { text_2: "Sha'ban", korrekt: false },
      { text_3: "Dhul-Hiddscha", korrekt: false },
    ],
  },
  {
    frage:
      "Wie nennt man das islamische Almosengebot, bei dem Muslime einen Teil ihres Vermögens abgeben müssen?",
    antworten: [
      { text_0: "Kaffarah", korrekt: false },
      { text_1: "Zakat", korrekt: true },
      { text_2: "Sadaqah", korrekt: false },
      { text_3: "Hadsch", korrekt: false },
    ],
  },
  {
    frage:
      "Wie heißt die islamische Glaubenslehre, die sich mit den Grundlagen des Glaubens befasst?",
    antworten: [
      { text_0: "Tasawwuf", korrekt: false },
      { text_1: "Fiqh", korrekt: false },
      { text_2: "Aqidah", korrekt: true },
      { text_3: "Shura", korrekt: false },
    ],
  },
  {
    frage: "Was bezeichnet der Begriff 'Ummah' im Islam?",
    antworten: [
      { text_0: "Die Familie des Propheten", korrekt: false },
      { text_1: "Eine bestimmte Rechtsschule", korrekt: false },
      { text_2: "Die Gemeinschaft aller Muslime weltweit", korrekt: true },
      { text_3: "Eine Gebetsrichtung", korrekt: false },
    ],
  },
];

let currentQuestion = 0;
let answeredCorrect = 0;

// ---------------------------
// Initializing
// ---------------------------
function init() {
  updateTotalQuestionCounters();
  showQuestion();
}

// ---------------------------
// UI-Update Functions
// ---------------------------
function updateTotalQuestionCounters() {
  document.getElementById("all-questions").innerHTML = questions.length;
  document.getElementById("questionsLength").innerHTML = questions.length;
}

function updateProgressBar() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const bar = document.querySelector(".progress-bar");

  bar.style.width = `${progress}%`;
  bar.innerHTML = `${Math.round(progress)}%`;
}

function updateQuestionCounter() {
  document.getElementById("question_counter").innerHTML = currentQuestion + 1;
  document.getElementById("correct_questions").innerHTML = answeredCorrect;
}

function clearAnswerHighlights() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`text_${i}`).style.backgroundColor = "";
  }
}

// ---------------------------
// Show Questions
// ---------------------------
function showQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("questionText").innerHTML = question.frage;

  question.antworten.forEach((answer, index) => {
    document.getElementById(`text_${index}`).innerHTML = answer[`text_${index}`];
  });
}

// ---------------------------
// Answer-Handling
// ---------------------------
function answer(index, element) {
  const question = questions[currentQuestion];
  const clickedAnswer = question.antworten[index];

  if (clickedAnswer.korrekt) {
    handleCorrectAnswer(element);
  } else {
    handleWrongAnswer(element, question);
  }

  document.getElementById("next_button").disabled = false;
}

function handleCorrectAnswer(element) {
  element.style.backgroundColor = "lightgreen";
  answeredCorrect++;
}

function handleWrongAnswer(element, question) {
  element.style.backgroundColor = "lightcoral";

  const correctIndex = question.antworten.findIndex(a => a.korrekt);
  document.getElementById(`text_${correctIndex}`).style.backgroundColor = "lightgreen";
}

// ---------------------------
// Navigation between Questions
// ---------------------------
function nextQuestion() {
  clearAnswerHighlights();

  if (isLastQuestion()) {
    showEndScreen();
  } else {
    currentQuestion++;
    showQuestion();
  }

  updateUIAfterQuestionChange();
}

function isLastQuestion() {
  return currentQuestion >= questions.length - 1;
}

function updateUIAfterQuestionChange() {
  document.getElementById("next_button").disabled = true;
  updateQuestionCounter();
  updateProgressBar();
}

// ---------------------------
// Endscreen / Restart
// ---------------------------
function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none";
}

function restartGame() {
  resetState();
  resetProgressBar();
  resetUI();
  init();
}

function resetState() {
  currentQuestion = 0;
  answeredCorrect = 0;
}

function resetProgressBar() {
  const startProgress = (1 / questions.length) * 100;
  const bar = document.querySelector(".progress-bar");
  bar.style.width = `${startProgress}%`;
  bar.innerHTML = `${Math.round(startProgress)}%`;
}

function resetUI() {
  document.getElementById("questionBody").style = "";
  document.getElementById("endScreen").style = "display: none";
  document.getElementById("question_counter").innerHTML = 1;
}

//querySelector greift einfach auf das erste element zu in dem fall die klasse,
//get elementbyClassName würde die ganze liste nehmen