// Responsive nav toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Flashcard flip
function flipCard(card) {
  if (card) {
    card.classList.toggle("flip");
  }
}

// Placeholder for flashcard navigation
function prevCard() {
  alert("Previous card");
}

function nextCard() {
  alert("Next card");
}

// Placeholder Quiz Logic
let currentQuestion = 0;
let score = 0;

const questions = [
  {
    chapter: "Hydrocarbons",
    question: "What type of bond is in an alkyne?",
    options: ["Single bond", "Double bond", "Triple bond", "No bond"],
    answer: "Triple bond",
  }
];

function switchChapter(chapter) {
  document.getElementById("chapterTitle").innerText = chapter;
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionText").innerText = q.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("total").innerText = questions.length;
  document.getElementById("score").innerText = score;
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;
  document.getElementById("score").innerText = score;
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % questions.length;
  loadQuestion();
}

window.onload = loadQuestion;
