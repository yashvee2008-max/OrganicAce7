const pyqs = [
  { chapter: "Hydrocarbons", title: "CBSE Board 2021 – Hydrocarbons", url: "https://example.com/hydro2021.pdf" },
  { chapter: "Alcohols, Phenols & Ethers", title: "CBSE Board 2020 – Alcohols", url: "https://example.com/alcohols2020.pdf" },
  { chapter: "Haloalkanes & Haloarenes", title: "NCERT PYQs Haloalkanes 2014–2018", url: "https://www.scribd.com/document/627158329/..." },
  { chapter: "Alcohols, Phenols & Ethers", title: "Vedantu Chapter 12 – Important Qs", url: "https://www.vedantu.com/.../chapter-12.pdf" }
];

function filterPYQs() {
  const sel = document.getElementById("chapterSelect").value;
  const list = document.getElementById("pyqList");
  list.innerHTML = "";
  if (!sel) return;
  const filtered = pyqs.filter(p => p.chapter === sel);
  if (filtered.length === 0) {
    list.innerHTML = "<li>No PYQs available for this chapter yet.</li>";
    return;
  }
  filtered.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${p.url}" target="_blank">${p.title}</a>`;
    list.appendChild(li);
  });
}
