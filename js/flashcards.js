const flashcardsByChapter = {
  "Hydrocarbons": [
    { front: "General formula of alkanes?", back: "CnH2n+2" },
    { front: "Name CH≡CH", back: "Ethyne" },
    { front: "Hybridization in ethene?", back: "sp²" }
  ],
  "Alcohols, Phenols & Ethers": [
    { front: "Functional group of alcohols?", back: "–OH" },
    { front: "Phenol example: C6H5OH is …?", back: "Phenol" },
    { front: "Ether general formula?", back: "R–O–R" }
  ],
  "Aldehydes, Ketones & Carboxylic Acids": [
    { front: "Functional group of aldehydes?", back: "–CHO" },
    { front: "Functional group of ketones?", back: ">C=O" },
    { front: "Name CH3COOH", back: "Ethanoic acid" }
  ],
  "Haloalkanes & Haloarenes": [
    { front: "Functional group of haloalkanes?", back: "–X (halogen)" },
    { front: "Reactivity order: RI, RBr, RCl, RF?", back: "RI > RBr > RCl > RF" },
    { front: "What is chloromethane?", back: "CH3Cl" }
  ],
  "Amines": [
    { front: "Functional group of amines?", back: "–NH2, –NHR, –NR2" },
    { front: "Primary amine example: CH3NH2 is …", back: "Methylamine" },
    { front: "Test for primary amine?", back: "Carbylamine test" }
  ],
  "Organic Compounds Containing Nitrogen": [
    { front: "–NO2 functional group belongs to …", back: "Nitro compounds" },
    { front: "–CN functional group belongs to …", back: "Nitriles" },
    { front: "Acetamide formula?", back: "CH3CONH2" }
  ],
  "Biomolecules": [
    { front: "Glucose is a …", back: "Monosaccharide" },
    { front: "Basic unit of proteins?", back: "Amino acids" },
    { front: "Lipid example?", back: "Triglyceride" }
  ],
  "Polymers": [
    { front: "Natural polymer: Cellulose or PVC?", back: "Cellulose" },
    { front: "Monomer of polythene?", back: "Ethene" },
    { front: "Synthetic polymer: Nylon is a …", back: "Polyamide" }
  ],
  "Chemistry in Everyday Life": [
    { front: "Vitamin C is …", back: "Ascorbic acid" },
    { front: "Common painkiller: Paracetamol is …", back: "Analgesic" },
    { front: "Antibiotic example?", back: "Penicillin" }
  ],
  "Practical Organic Chemistry / Tests": [
    { front: "Iodoform test +ive for …", back: "Ethanol/acetone" },
    { front: "Silver mirror test = …", back: "Aldehydes" },
    { front: "Bromine water test decolorises for …", back: "Alkenes, phenols, aldehydes" }
  ]
};

let currentChapter = "Hydrocarbons";
let currentSet = flashcardsByChapter[currentChapter];
let currentCard = 0;

function loadChapter(chapter) {
  currentChapter = chapter;
  currentSet = flashcardsByChapter[chapter];
  currentCard = 0;
  showCard(0);
}

function showCard(index) {
  const front = document.getElementById("cardFront");
  const back = document.getElementById("cardBack");
  front.innerText = currentSet[index].front;
  back.innerText = currentSet[index].back;
  document.getElementById("flashcard").classList.remove("flip");
  document.getElementById("cardCounter").innerText = `${index + 1} / ${currentSet.length}`;
}

function flipCard() {
  document.getElementById("flashcard").classList.toggle("flip");
}

function nextCard() {
  currentCard = (currentCard+1) % currentSet.length;
  showCard(currentCard);
}

function prevCard() {
  currentCard = (currentCard-1+currentSet.length) % currentSet.length;
  showCard(currentCard);
}

window.onload = () => {
  loadChapter(currentChapter);
};
