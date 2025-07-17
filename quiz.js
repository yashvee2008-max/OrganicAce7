function checkQuiz() {
  const ans = document.querySelector('input[name="q1"]:checked');
  const res = document.getElementById('quizResult');

  if (!ans) {
    res.textContent = "Please select an answer!";
    res.style.color = "orange";
  } else if (ans.value === "c") {
    res.textContent = "Correct! NO₂⁺ is an electrophile.";
    res.style.color = "green";
  } else {
    res.textContent = "Wrong. Try again!";
    res.style.color = "red";
  }
}
