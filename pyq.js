async function loadQuestions() {
  const level = document.getElementById("level").value;
  const response = await fetch("pyq-data.json");
  const data = await response.json();
  const questions = data[level];
  
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  questions.forEach((q, index) => {
    const qBlock = document.createElement("div");
    qBlock.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.question}</p>
      ${q.options.map(opt => `
        <label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>
      `).join("")}
      <hr>
    `;
    container.appendChild(qBlock);
  });
}
