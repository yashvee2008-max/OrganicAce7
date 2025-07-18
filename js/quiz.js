const quizData = {
  "Hydrocarbons": [
    {
      question: "Which of the following is an alkene?",
      options: ["Ethane", "Propene", "Butane", "Methane"],
      answer: "Propene"
    },
    {
      question: "What is the general formula for alkanes?",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnH2n+1"],
      answer: "CnH2n+2"
    }
  ],
  "Biomolecules": [],
  "Polymers": []
};

const urlParams = new URLSearchParams(window.location.search);
const currentChapter = urlParams.get('chapter') || 'Hydrocarbons';
const chapterTitle = document.getElementById("chapterTitle");
if (chapterTitle) chapterTitle.textContent = currentChapter;

const currentQuiz = quizData[currentChapter];
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const scoreSpan = document.getElementById("score");
const totalSpan = document.getElementById("total");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = currentQuiz[currentQuestionIndex];
  questionText.innerText = `Q${currentQuestionIndex + 1}. ${q.question}`;
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-button");
    btn.onclick = () => checkAnswer(btn, option, q.answer);
    optionsBox.appendChild(btn);
  });

  totalSpan.innerText = currentQuiz.length;
}

function checkAnswer(button, selected, correct) {
  const buttons = document.querySelectorAll(".option-button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
    }
  });

  if (selected === correct) {
    score++;
    scoreSpan.innerText = score;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>You scored ${score} out of ${currentQuiz.length}</p>
    <a href="quiz.html">Retry</a> |
    <a href="index.html">Back to Home</a>
  `;
}

if (currentQuiz && currentQuiz.length > 0) {
  loadQuestion();
} else {
  questionText.innerText = "No questions available for this chapter.";
  nextBtn.style.display = "none";
}
