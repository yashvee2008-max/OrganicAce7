const reactions = [
  { name: "Wurtz Reaction", reaction: "2 R–X + 2 Na → R–R + 2 NaX", mechanism: "Radical coupling via organosodium intermediate", chapter: "Hydrocarbons", example: "2 CH3Br → C2H6" },
  { name: "Reimer-Tiemann Reaction", reaction: "Phenol + CHCl3 + NaOH → o‑Hydroxybenzaldehyde", mechanism: "Dichlorocarbene insertion into aromatic ring", chapter: "Phenols", example: "Phenol → Salicylaldehyde" },
  { name: "Cannizzaro Reaction", reaction: "2 R–CHO + OH⁻ → R–COO⁻ + R–CH2OH", mechanism: "Hydride transfer between aldehydes", chapter: "Aldehydes", example: "Benzaldehyde → Benzoate + Benzyl alcohol" },
  { name: "Aldol Condensation", reaction: "2 R–CHO → R–CH(OH)–CH=O", mechanism: "Enolate formation → attack → dehydration", chapter: "Aldehydes", example: "Ethanal → Crotonaldehyde" },
  { name: "Sandmeyer Reaction", reaction: "Ar–N2⁺ + CuX → Ar–X + N2", mechanism: "Diazonium salt reacts with Cu(I) halide", chapter: "Amines", example: "Aniline → Chlorobenzene" },
  { name: "Friedel–Crafts Alkylation", reaction: "Ar–H + R–Cl + AlCl3 → Ar–R + HCl", mechanism: "Electrophilic aromatic substitution", chapter: "Aromatics", example: "Benzene + CH3Cl → Toluene" },
  { name: "Clemmensen Reduction", reaction: "R–CO–R + Zn(Hg), HCl → R–CH2–R", mechanism: "Acid reduction of ketone", chapter: "Carbonyls", example: "Acetone → Propane" },
  { name: "Wolff–Kishner Reduction", reaction: "R–CO–R + H2NNH2 + KOH → R–CH2–R", mechanism: "Base reduction via hydrazone", chapter: "Carbonyls", example: "Acetone → Propane" },
  { name: "Kolbe’s Reaction", reaction: "Phenoxide + CO2 → Salicylic acid", mechanism: "Kolbe electrolysis – carboxylation", chapter: "Phenols", example: "Na phenoxide → Salicylic acid" },
  { name: "Haloform Reaction", reaction: "R–CO–CH3 + 3X2 + OH⁻ → R–COO⁻ + CHX3", mechanism: "Alpha-halogenation followed by cleavage", chapter: "Carbonyls", example: "Acetone → Acetate + Chloroform" }
];

const list = document.getElementById("reactionList");
const input = document.getElementById("searchInput");

function display(items) {
  list.innerHTML = "";
  if (!items.length) {
    list.innerHTML = "<p>No matching reactions.</p>";
    return;
  }
  items.forEach(r => {
    const div = document.createElement("div");
    div.className = "reaction-card";
    div.innerHTML = `
      <h3>${r.name}</h3>
      <p><strong>Chapter:</strong> ${r.chapter}</p>
      <p><strong>Reaction:</strong> ${r.reaction}</p>
      <details><summary>Mechanism & Example</summary>
        <p><strong>Mechanism:</strong> ${r.mechanism}</p>
        <p><strong>Example:</strong> ${r.example}</p>
      </details>
    `;
    list.appendChild(div);
  });
}

// Initial display
display(reactions);

// Filter on search
input.addEventListener("input", () => {
  const term = input.value.toLowerCase();
  display(reactions.filter(r => r.name.toLowerCase().includes(term) || r.chapter.toLowerCase().includes(term)));
});

