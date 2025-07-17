const quizzes = {
  "Hydrocarbons": [
    {
      "question": "What is the general formula of alkanes?",
      "options": [
        "CnH2n",
        "CnH2n+2",
        "CnH2n-2",
        "CnH2n+1"
      ],
      "answer": "CnH2n+2"
    },
    {
      "question": "Which hydrocarbon has a triple bond?",
      "options": [
        "Methane",
        "Ethane",
        "Ethyne",
        "Propane"
      ],
      "answer": "Ethyne"
    }
  ],
  "Alcohols, Phenols & Ethers": [
    {
      "question": "What is the functional group of alcohols?",
      "options": [
        "-COOH",
        "-CHO",
        "-OH",
        "-NH2"
      ],
      "answer": "-OH"
    },
    {
      "question": "Which compound is a phenol?",
      "options": [
        "C2H5OH",
        "CH3COOH",
        "C6H5OH",
        "CH3OH"
      ],
      "answer": "C6H5OH"
    }
  ],
  "Aldehydes, Ketones & Carboxylic Acids": [
    {
      "question": "Which functional group is found in aldehydes?",
      "options": [
        "-COOH",
        "-CHO",
        "-OH",
        "-CO-"
      ],
      "answer": "-CHO"
    },
    {
      "question": "What is the common name of ethanal?",
      "options": [
        "Formaldehyde",
        "Acetaldehyde",
        "Propionaldehyde",
        "Butanal"
      ],
      "answer": "Acetaldehyde"
    }
  ],
  "Haloalkanes & Haloarenes": [
    {
      "question": "Which halogen is most reactive in nucleophilic substitution?",
      "options": [
        "F",
        "Cl",
        "Br",
        "I"
      ],
      "answer": "I"
    },
    {
      "question": "What is the product of chlorination of methane?",
      "options": [
        "CH4Cl",
        "CH3Cl",
        "CH2Cl2",
        "CHCl3"
      ],
      "answer": "CH3Cl"
    }
  ],
  "Amines": [
    {
      "question": "What is the functional group in amines?",
      "options": [
        "-OH",
        "-NH2",
        "-CHO",
        "-COOH"
      ],
      "answer": "-NH2"
    },
    {
      "question": "Which test is used for primary amines?",
      "options": [
        "Tollen's test",
        "Carbylamine test",
        "Iodoform test",
        "Lucas test"
      ],
      "answer": "Carbylamine test"
    }
  ],
  "Organic Compounds Containing Nitrogen": [
    {
      "question": "Which compound contains nitrogen?",
      "options": [
        "Ethanol",
        "Acetamide",
        "Acetone",
        "Formic acid"
      ],
      "answer": "Acetamide"
    },
    {
      "question": "What is the functional group in nitro compounds?",
      "options": [
        "-NO2",
        "-NH2",
        "-CN",
        "-COOH"
      ],
      "answer": "-NO2"
    }
  ],
  "Biomolecules": [
    {
      "question": "Glucose is an example of a:",
      "options": [
        "Protein",
        "Carbohydrate",
        "Fat",
        "Vitamin"
      ],
      "answer": "Carbohydrate"
    },
    {
      "question": "Which vitamin is fat-soluble?",
      "options": [
        "Vitamin C",
        "Vitamin B",
        "Vitamin D",
        "Vitamin B12"
      ],
      "answer": "Vitamin D"
    }
  ],
  "Polymers": [
    {
      "question": "Which of the following is a natural polymer?",
      "options": [
        "PVC",
        "Nylon",
        "Cellulose",
        "Teflon"
      ],
      "answer": "Cellulose"
    },
    {
      "question": "Monomer of polythene is:",
      "options": [
        "Propene",
        "Styrene",
        "Ethene",
        "Vinyl chloride"
      ],
      "answer": "Ethene"
    }
  ],
  "Chemistry in Everyday Life": [
    {
      "question": "Which class of drug reduces pain?",
      "options": [
        "Antipyretics",
        "Analgesics",
        "Antibiotics",
        "Antiseptics"
      ],
      "answer": "Analgesics"
    },
    {
      "question": "Which is used as a food preservative?",
      "options": [
        "Benzaldehyde",
        "Benzoic acid",
        "Tartaric acid",
        "Urea"
      ],
      "answer": "Benzoic acid"
    }
  ],
  "Practical Organic Chemistry / Tests": [
    {
      "question": "Which compound gives a positive iodoform test?",
      "options": [
        "Ethanol",
        "Methanol",
        "Formaldehyde",
        "Ethanal"
      ],
      "answer": "Ethanol"
    },
    {
      "question": "Tollen\u2019s reagent gives silver mirror test with:",
      "options": [
        "Ketones",
        "Alcohols",
        "Aldehydes",
        "Amines"
      ],
      "answer": "Aldehydes"
    }
  ]
};


let currentChapter = "Hydrocarbons";
let currentQuiz = quizzes[currentChapter];
let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById("questionText").innerText = q.question;
  document.getElementById("options").innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(option);
    document.getElementById("options").appendChild(btn);
  });

  document.getElementById("total").innerText = currentQuiz.length;
  document.getElementById("score").innerText = score;
}

function checkAnswer(selected) {
  const correct = currentQuiz[currentIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("questionText").innerText = "🎉 Quiz Completed!";
  document.getElementById("options").innerHTML = `<p>Your final score is ${score} out of ${currentQuiz.length}.</p>`;
  document.getElementById("nextBtn").style.display = "none";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function switchChapter(chapter) {
  currentChapter = chapter;
  currentQuiz = quizzes[chapter];
  currentIndex = 0;
  score = 0;
  document.getElementById("chapterTitle").innerText = chapter;
  loadQuestion();
}

window.onload = loadQuestion;

