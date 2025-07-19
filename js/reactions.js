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
  { name: "Haloform Reaction", reaction: "R–CO–CH3 + 3X2 + OH⁻ → R–COO⁻ + CHX3", mechanism: "Alpha-halogenation followed by cleavage", chapter: "Carbonyls", example: "Acetone → Acetate + Chloroform" },
  { name: "Hofmann Rearrangement", reaction: "R–CONH₂ + Br₂ + 4 NaOH → R–NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O", mechanism: "Amide reacts with Br₂/NaOH → N-bromoamide → isocyanate intermediate → hydrolysis to amine.", chapter: "Amines", example: "CH₃CONH₂ + Br₂ + NaOH → CH₃NH₂ + Na₂CO₃"},
  {
    name: "Grignard Reaction",
    reaction: "R–MgBr + R'–C=O → R'–C(OMgBr)–R → R'–C(OH)–R",
    mechanism: "Grignard reagent adds to carbonyl → forms alkoxide intermediate → protonation gives alcohol.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "CH₃MgBr + CH₃CHO → CH₃CH(OH)CH₃"
  },
{
    name: "Perkin Reaction",
    reaction: "Ar–CHO + (CH₃CO)₂O + base → Ar–CH=CH–COOH",
    mechanism: "Aldehyde condenses with anhydride in presence of base → α,β-unsaturated acid.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "C₆H₅CHO + (CH₃CO)₂O + NaOAc → C₆H₅CH=CHCOOH"
  },
{
    name: "Etard Reaction",
    reaction: "Ar–CH₃ + CrO₂Cl₂ → Ar–CHO",
    mechanism: "Oxidation of methyl group on aromatic ring to aldehyde via chromyl chloride complex.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "Toluene + CrO₂Cl₂ → Benzaldehyde"
  },
  {
    name: "Hell–Volhard–Zelinsky Reaction",
    reaction: "R–CH₂–COOH + Br₂ + PBr₃ → R–CHBr–COOH",
    mechanism: "Formation of acyl bromide → α-bromination → hydrolysis to regenerate carboxylic acid.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "CH₃CH₂COOH + Br₂ + PBr₃ → CH₃CHBrCOOH"
  },
  {
    name: "Gabriel Phthalimide Synthesis",
    reaction: "Phthalimide + R–X → R–NH₂",
    mechanism: "Phthalimide anion undergoes nucleophilic substitution with alkyl halide → hydrolysis gives primary amine.",
    chapter: "Amines",
    example: "Phthalimide + CH₃Br → CH₃NH₂"
  },
{
    name: "Carbylamine Reaction",
    reaction: "R–NH₂ + CHCl₃ + 3KOH → R–NC + 3KCl + 3H₂O",
    mechanism: "Primary amine reacts with chloroform and base → forms isocyanide (foul smell) via dichlorocarbene intermediate.",
    chapter: "Amines",
    example: "C₆H₅NH₂ + CHCl₃ + 3KOH → C₆H₅NC + 3KCl + 3H₂O"
  },
  {
    name: "Diazotization Reaction",
    reaction: "Ar–NH₂ + NaNO₂ + HCl (0–5°C) → Ar–N₂⁺Cl⁻ + 2H₂O",
    mechanism: "Aromatic primary amine forms diazonium salt via nitrous acid at low temperatures.",
    chapter: "Amines",
    example: "C₆H₅NH₂ + HNO₂ + HCl → C₆H₅N₂⁺Cl⁻ + 2H₂O"
  },
  {
    name: "Coupling Reaction",
    reaction: "Ar–N₂⁺ + Ar'–OH/Ar'–NH₂ → Ar–N=N–Ar'",
    mechanism: "Diazonium salt couples with activated aromatic compounds (phenols/anilines) → azo dyes.",
    chapter: "Amines",
    example: "C₆H₅N₂⁺Cl⁻ + C₆H₅OH → C₆H₅–N=N–C₆H₄OH"
  },
  {
    name: "Gattermann Reaction",
    reaction: "Ar–H + HCN + HCl + AlCl₃ → Ar–CHO",
    mechanism: "HCN and HCl generate electrophilic species (HCO⁺) → aromatic substitution forms benzaldehyde.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "C₆H₆ + HCN + HCl + AlCl₃ → C₆H₅CHO"
  },
  {
    name: "Gattermann–Koch Reaction",
    reaction: "Ar–H + CO + HCl + AlCl₃/CuCl → Ar–CHO",
    mechanism: "CO + HCl generate formyl cation (HCO⁺) using AlCl₃/CuCl → electrophilic substitution at aromatic ring.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "C₆H₆ + CO + HCl + AlCl₃ → C₆H₅CHO"
  },
  {
    name: "Stephen Reaction",
    reaction: "Ar–CN + SnCl₂ + HCl → Ar–CHO",
    mechanism: "Reduction of aromatic nitriles to iminium salt → hydrolysis forms aldehyde.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "C₆H₅CN + SnCl₂ + HCl → C₆H₅CHO"
  },
  {
    name: "Rosenmund Reduction",
    reaction: "R–COCl + H₂ (Pd/BaSO₄) → R–CHO",
    mechanism: "Hydrogenation of acid chloride to aldehyde using poisoned palladium catalyst.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "CH₃COCl + H₂ (Pd/BaSO₄) → CH₃CHO"
  },
  {
    name: "Acetylation Reaction",
    reaction: "Ar–OH or Ar–NH₂ + (CH₃CO)₂O → Ar–OCOCH₃ / Ar–NHCOCH₃",
    mechanism: "Nucleophilic substitution by phenol or amine on acetic anhydride → ester or amide formation.",
    chapter: "Alcohols, Phenols and Ethers / Amines",
    example: "C₆H₅NH₂ + (CH₃CO)₂O → C₆H₅NHCOCH₃ + CH₃COOH"
  },
  {
    name: "Bromination of Phenol",
    reaction: "C₆H₅OH + 3 Br₂ → 2,4,6-tribromophenol + 3 HBr",
    mechanism: "Phenol activates the ring toward electrophilic substitution → multiple bromination occurs easily.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "C₆H₅OH + Br₂ → 2,4,6-C₆H₂Br₃OH"
  },
  {
    name: "Aniline Acetylation",
    reaction: "C₆H₅NH₂ + CH₃COCl → C₆H₅NHCOCH₃ + HCl",
    mechanism: "Nucleophilic amine attacks acid chloride → forms acetanilide + HCl.",
    chapter: "Amines",
    example: "C₆H₅NH₂ + CH₃COCl → C₆H₅NHCOCH₃"
  },
{
    name: "Tollens' Test",
    reaction: "R–CHO + [Ag(NH₃)₂]⁺ + OH⁻ → R–COO⁻ + Ag↓ + NH₃ + H₂O",
    mechanism: "Aldehyde is oxidized to carboxylate; silver ions reduced to metallic silver (mirror).",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "HCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → HCOO⁻ + 2Ag↓ + 4NH₃ + 2H₂O"
  },
  {
    name: "Fehling’s Test",
    reaction: "R–CHO + 2Cu²⁺ + 5OH⁻ → R–COO⁻ + Cu₂O↓ + 3H₂O",
    mechanism: "Aldehyde reduces Cu²⁺ to Cu₂O (red ppt), itself gets oxidized to carboxylate.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "CH₃CHO + Fehling's → CH₃COOH + Cu₂O (red ppt)"
  },
  {
    name: "Iodoform Test",
    reaction: "R–COCH₃ + 3I₂ + 4OH⁻ → R–COO⁻ + CHI₃ + 3I⁻ + 3H₂O",
    mechanism: "Methyl ketones undergo halogenation and cleavage to give yellow CHI₃ ppt.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "CH₃COCH₃ + 3I₂ + 4NaOH → CHI₃ + CH₃COONa + 3NaI + 3H₂O"
  },
  {
    name: "Azo Coupling",
    reaction: "Ar–N₂⁺ + Ar'–OH/Ar'–NH₂ → Ar–N=N–Ar'",
    mechanism: "Diazonium ion electrophilically attacks activated ring of phenol/aniline → azo dye.",
    chapter: "Amines",
    example: "C₆H₅N₂⁺ + C₆H₅OH → C₆H₅–N=N–C₆H₄OH"
  },
  {
    name: "Beckmann Rearrangement",
    reaction: "Oxime + Acid → Amide",
    mechanism: "Oxime undergoes rearrangement in acid → migration of alkyl group → amide.",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    example: "Cyclohexanone oxime → ε-caprolactam (used in Nylon-6)"
  },
  {
    name: "Hinsberg Test",
    reaction: "R–NH₂ + PhSO₂Cl → R–NHSO₂Ph (soluble in base if primary amine)",
    mechanism: "Amine reacts with benzenesulfonyl chloride to form sulfonamide; solubility varies by type.",
    chapter: "Amines",
    example: "CH₃NH₂ + PhSO₂Cl → CH₃NHSO₂Ph"
  },
  {
    name: "Finkelstein Reaction",
    reaction: "R–Cl + NaI → R–I + NaCl",
    mechanism: "Halide exchange reaction in acetone; driven by precipitation of NaCl.",
    chapter: "Haloalkanes and Haloarenes",
    example: "CH₃Cl + NaI → CH₃I + NaCl"
  },
  {
    name: "Swarts Reaction",
    reaction: "R–Cl + SbF₃ → R–F + SbCl₃",
    mechanism: "Halogen exchange reaction to prepare alkyl fluorides from alkyl chlorides.",
    chapter: "Haloalkanes and Haloarenes",
    example: "CCl₄ + SbF₃ → CFCl₃ + SbCl₃"
  },
  {
    name: "Williamson Ether Synthesis",
    reaction: "R–ONa + R'–X → R–O–R' + NaX",
    mechanism: "SN2 reaction between alkoxide and primary alkyl halide → ether formation.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "C₂H₅ONa + CH₃I → C₂H₅OCH₃"
  },
  {
    name: "Hydroboration–Oxidation",
    reaction: "Alkene + BH₃ → Trialkylborane → ROH (anti-Markovnikov alcohol)",
    mechanism: "Syn-addition of BH₃ to alkene → oxidation with H₂O₂/NaOH gives alcohol.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "CH₂=CH₂ → CH₃CH₂OH"
  },
{
    name: "Baeyer Test",
    reaction: "Alkene + KMnO₄ (cold, dilute) → Glycol (–OH on both carbons)",
    mechanism: "Syn dihydroxylation of alkene via cyclic manganate intermediate.",
    chapter: "Hydrocarbons",
    example: "CH₂=CH₂ + [O] → CH₂OH–CH₂OH"
  },
  {
    name: "Markovnikov's Rule",
    reaction: "HX + Alkene → R–CHX–CH₃ (X goes to more substituted carbon)",
    mechanism: "Carbocation formation → nucleophilic attack on more stable intermediate.",
    chapter: "Hydrocarbons",
    example: "CH₂=CH₂ + HBr → CH₃–CH₂Br"
  },
  {
    name: "Anti-Markovnikov Addition (Peroxide Effect)",
    reaction: "Alkene + HBr + ROOR → R–CH₂–CH₂Br",
    mechanism: "Free radical addition of HBr in presence of peroxide → Br attaches to less substituted carbon.",
    chapter: "Hydrocarbons",
    example: "CH₂=CH₂ + HBr + ROOR → CH₃CH₂Br"
  },
  {
    name: "Kharasch Effect",
    reaction: "Alkene + HBr + ROOR → Anti-Markovnikov product",
    mechanism: "Free radical chain mechanism involving Br∙ radical attacking the alkene.",
    chapter: "Hydrocarbons",
    example: "CH₂=CHCH₃ + HBr + ROOR → CH₃CH₂CH₂Br"
  },
  {
    name: "Saytzeff’s Rule",
    reaction: "Alcohol + H₂SO₄ → Alkene (more substituted)",
    mechanism: "E1/E2 elimination favors alkene with more substituted double bond.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "2-butanol → CH₃CH=CHCH₃"
  },
  {
    name: "Hofmann Elimination",
    reaction: "Quaternary ammonium hydroxide → Alkene (less substituted)",
    mechanism: "E2 elimination → bulky leaving group forces formation of less substituted alkene.",
    chapter: "Amines",
    example: "(CH₃)₃C–N⁺(CH₃)₃ OH⁻ → (CH₃)₂C=CH₂"
  },
  {
    name: "Bakelite Formation",
    reaction: "Phenol + Formaldehyde → Bakelite (polymer)",
    mechanism: "Electrophilic substitution forms hydroxymethyl derivatives → cross-linking gives polymer.",
    chapter: "Polymers",
    example: "C₆H₅OH + HCHO → –[C₆H₄–CH₂]–ₙ"
  },
  {
    name: "Polymerization of Ethene",
    reaction: "n CH₂=CH₂ → –[CH₂–CH₂]–ₙ",
    mechanism: "Free radical polymerization or Ziegler-Natta catalysis (coordination polymerization).",
    chapter: "Polymers",
    example: "CH₂=CH₂ → Polyethene"
  },
  {
    name: "Dumas Method",
    reaction: "R–COONa + NaOH → R–H + Na₂CO₃",
    mechanism: "Decarboxylation of sodium salt of acid using soda lime.",
    chapter: "Organic Chemistry – Basic Principles and Techniques",
    example: "CH₃COONa + NaOH → CH₄ + Na₂CO₃"
  },
  {
    name: "Kjeldahl’s Method",
    reaction: "Organic N-compound + Conc. H₂SO₄ → (NH₄)₂SO₄ → NH₃",
    mechanism: "Nitrogen in organic compound converted to ammonium salt → liberated as NH₃ upon alkali treatment.",
    chapter: "Organic Chemistry – Basic Principles and Techniques",
    example: "C₂H₅NH₂ + H₂SO₄ → (NH₄)₂SO₄ → NH₃"
  },
{
    name: "Hell–Volhard–Zelinsky Reaction",
    reaction: "R–CH₂–COOH + Br₂ + PBr₃ → R–CHBr–COOH",
    mechanism: "Formation of acyl bromide → α-bromination → hydrolysis regenerates acid with α-bromo substitution.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃CH₂COOH + Br₂ + PBr₃ → CH₃CHBrCOOH"
  },
  {
    name: "Cannizzaro Reaction",
    reaction: "2 R–CHO + OH⁻ → R–COO⁻ + R–CH₂OH",
    mechanism: "Base-induced disproportionation of non-enolizable aldehydes; one molecule oxidized, one reduced.",
    chapter: "Aldehydes and Ketones",
    example: "2 HCHO + OH⁻ → HCOO⁻ + CH₃OH"
  },
  {
    name: "Perkin Reaction",
    reaction: "Aromatic aldehyde + acid anhydride + base → α,β-unsaturated acid",
    mechanism: "Enolate from acid anhydride attacks aldehyde → condensation to α,β-unsaturated acid.",
    chapter: "Aldehydes and Ketones",
    example: "C₆H₅CHO + (CH₃CO)₂O + NaOAc → C₆H₅CH=CHCOOH"
  },
  {
    name: "Claisen Condensation",
    reaction: "2 Ester + strong base → β-keto ester + alcohol",
    mechanism: "Enolate ion of ester attacks second ester molecule → intramolecular condensation forms β-keto ester.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃COOEt + CH₃COOEt + NaOEt → CH₃COCH₂COOEt + EtOH"
  },
  {
    name: "Dieckmann Condensation",
    reaction: "Diester + base → cyclic β-keto ester",
    mechanism: "Intramolecular Claisen condensation of diesters under basic conditions to form 5- or 6-membered rings.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "EtO₂C–(CH₂)₄–CO₂Et + NaOEt → cyclic β-keto ester"
  },
  {
    name: "Cannizzaro Reaction",
    reaction: "2 R–CHO + OH⁻ → R–COO⁻ + R–CH₂OH",
    mechanism: "Non-enolizable aldehyde disproportionates under basic conditions; one molecule oxidized, one reduced.",
    chapter: "Aldehydes and Ketones",
    example: "2 HCHO + OH⁻ → HCOO⁻ + CH₃OH"
  },
  {
    name: "Hell-Volhard-Zelinsky Reaction",
    reaction: "R–CH₂–COOH + Br₂ + PBr₃ → R–CHBr–COOH",
    mechanism: "α-Bromination of carboxylic acid via acyl bromide intermediate.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃CH₂COOH + Br₂ + PBr₃ → CH₃CHBrCOOH"
  },
  {
    name: "Stephen Reduction",
    reaction: "Ar–CN + SnCl₂ + HCl → Ar–CHO",
    mechanism: "Reduction of nitriles to iminium salt followed by hydrolysis to aldehyde.",
    chapter: "Aldehydes and Ketones",
    example: "C₆H₅CN + SnCl₂ + HCl → C₆H₅CHO"
  },
  {
    name: "Benzoin Condensation",
    reaction: "2 Ar–CHO + KCN → Ar–CHOH–CO–Ar",
    mechanism: "Nucleophilic attack by cyanide ion on aldehyde → formation of benzoin via coupling.",
    chapter: "Aldehydes and Ketones",
    example: "2 C₆H₅CHO + KCN → C₆H₅–CHOH–CO–C₆H₅"
  },
  {
    name: "Cannizzaro Reaction",
    reaction: "2 R–CHO + OH⁻ → R–COO⁻ + R–CH₂OH",
    mechanism: "Non-enolizable aldehydes undergo base-induced disproportionation.",
    chapter: "Aldehydes and Ketones",
    example: "2 HCHO + OH⁻ → HCOO⁻ + CH₃OH"
  },
{
    name: "Hell–Volhard–Zelinsky Reaction",
    reaction: "R–CH₂–COOH + Br₂ + PBr₃ → R–CHBr–COOH",
    mechanism: "Formation of acyl bromide → α-bromination → hydrolysis regenerates acid with α-bromo substitution.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃CH₂COOH + Br₂ + PBr₃ → CH₃CHBrCOOH"
  },
  {
    name: "Cannizzaro Reaction",
    reaction: "2 R–CHO + OH⁻ → R–COO⁻ + R–CH₂OH",
    mechanism: "Base-induced disproportionation of non-enolizable aldehydes; one molecule oxidized, one reduced.",
    chapter: "Aldehydes and Ketones",
    example: "2 HCHO + OH⁻ → HCOO⁻ + CH₃OH"
  },
  {
    name: "Perkin Reaction",
    reaction: "Aromatic aldehyde + acid anhydride + base → α,β-unsaturated acid",
    mechanism: "Enolate from acid anhydride attacks aldehyde → condensation to α,β-unsaturated acid.",
    chapter: "Aldehydes and Ketones",
    example: "C₆H₅CHO + (CH₃CO)₂O + NaOAc → C₆H₅CH=CHCOOH"
  },
  {
    name: "Claisen Condensation",
    reaction: "2 Ester + strong base → β-keto ester + alcohol",
    mechanism: "Enolate ion of ester attacks second ester molecule → intramolecular condensation forms β-keto ester.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃COOEt + CH₃COOEt + NaOEt → CH₃COCH₂COOEt + EtOH"
  },
  {
    name: "Dieckmann Condensation",
    reaction: "Diester + base → cyclic β-keto ester",
    mechanism: "Intramolecular Claisen condensation of diesters under basic conditions to form 5- or 6-membered rings.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "EtO₂C–(CH₂)₄–CO₂Et + NaOEt → cyclic β-keto ester"
  },
  {
    name: "Stephen Reduction",
    reaction: "Ar–CN + SnCl₂ + HCl → Ar–CHO",
    mechanism: "Reduction of nitriles to iminium salt followed by hydrolysis to aldehyde.",
    chapter: "Aldehydes and Ketones",
    example: "C₆H₅CN + SnCl₂ + HCl → C₆H₅CHO"
  },
  {
    name: "Benzoin Condensation",
    reaction: "2 Ar–CHO + KCN → Ar–CHOH–CO–Ar",
    mechanism: "Nucleophilic attack by cyanide ion on aldehyde → formation of benzoin via coupling.",
    chapter: "Aldehydes and Ketones",
    example: "2 C₆H₅CHO + KCN → C₆H₅–CHOH–CO–C₆H₅"
  },
  {
    name: "Wurtz Reaction",
    reaction: "2 R–X + 2Na → R–R + 2NaX",
    mechanism: "Alkyl halides react with sodium metal → coupling forms higher alkane.",
    chapter: "Haloalkanes and Haloarenes",
    example: "2 CH₃Cl + 2Na → C₂H₆ + 2NaCl"
  },
  {
    name: "Wurtz–Fittig Reaction",
    reaction: "Ar–X + R–X + 2Na → Ar–R + 2NaX",
    mechanism: "Coupling between aryl halide and alkyl halide in presence of sodium metal.",
    chapter: "Haloalkanes and Haloarenes",
    example: "C₆H₅Br + CH₃Br + 2Na → C₆H₅CH₃ + 2NaBr"
  },
  {
    name: "Reimer–Tiemann Reaction",
    reaction: "Phenol + CHCl₃ + NaOH → Ortho-hydroxybenzaldehyde",
    mechanism: "Formation of dichlorocarbene intermediate → electrophilic substitution at ortho position.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "C₆H₅OH + CHCl₃ + NaOH → C₆H₄(OH)CHO (salicylaldehyde)"
  },
{
    name: "Gabriel Phthalimide Synthesis",
    reaction: "Phthalimide + KOH → Phthalimide ion + R–X → Primary amine",
    mechanism: "Phthalimide ion attacks alkyl halide via SN2 → hydrolysis yields primary amine.",
    chapter: "Amines",
    example: "C₆H₄(CO)₂N⁻K⁺ + CH₃Br → C₆H₄(CO)₂NH–CH₃ → CH₃NH₂"
  },
  {
    name: "Hoffmann Bromamide Degradation",
    reaction: "R–CONH₂ + Br₂ + NaOH → R–NH₂ + Na₂CO₃",
    mechanism: "Bromination of amide → rearrangement with loss of CO₂ → amine formation.",
    chapter: "Amines",
    example: "CH₃CONH₂ + Br₂ + NaOH → CH₃NH₂ + Na₂CO₃"
  },
  {
    name: "Sandmeyer Reaction",
    reaction: "Ar–N₂⁺Cl⁻ + CuX → Ar–X + N₂",
    mechanism: "Replacement of diazonium group by halide via copper(I) catalysis.",
    chapter: "Aromatic Compounds",
    example: "C₆H₅N₂⁺Cl⁻ + CuCl → C₆H₅Cl + N₂"
  },
  {
    name: "Gattermann Reaction",
    reaction: "Ar–H + HCN + HCl + CuCl → Ar–CHO",
    mechanism: "Electrophilic substitution of aromatic ring by formyl group.",
    chapter: "Aromatic Compounds",
    example: "C₆H₆ + HCN + HCl + CuCl → C₆H₅CHO"
  },
  {
    name: "Gattermann–Koch Reaction",
    reaction: "Ar–H + CO + HCl + AlCl₃ + CuCl → Ar–CHO",
    mechanism: "Formylation of aromatic ring using CO and HCl catalyzed by Lewis acids.",
    chapter: "Aromatic Compounds",
    example: "C₆H₆ + CO + HCl + AlCl₃ + CuCl → C₆H₅CHO"
  },
  {
    name: "Hell–Volhard–Zelinsky Reaction",
    reaction: "R–CH₂–COOH + Br₂ + PBr₃ → R–CHBr–COOH",
    mechanism: "α-Bromination of carboxylic acid via acyl bromide intermediate.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃CH₂COOH + Br₂ + PBr₃ → CH₃CHBrCOOH"
  },
  {
    name: "Reformatsky Reaction",
    reaction: "α-Haloester + Zn + Aldehyde/Ketone → β-Hydroxyester",
    mechanism: "Formation of organozinc intermediate → nucleophilic addition to carbonyl.",
    chapter: "Aldehydes and Ketones",
    example: "BrCH₂COOEt + Zn + CH₃CHO → HOCH(CH₃)COOEt"
  },
  {
    name: "Knoevenagel Condensation",
    reaction: "Aldehyde/Ketone + Active methylene compound + base → α,β-unsaturated compound",
    mechanism: "Base deprotonates active methylene → nucleophilic attack on carbonyl → condensation.",
    chapter: "Aldehydes and Ketones",
    example: "C₆H₅CHO + CH₂(CN)₂ + base → C₆H₅CH=CH(CN)₂"
  },
  {
    name: "Clemmensen Reduction",
    reaction: "R–CO–R' + Zn(Hg) + HCl → R–CH₂–R'",
    mechanism: "Reduction of ketone to alkane using zinc amalgam and acid.",
    chapter: "Aldehydes and Ketones",
    example: "CH₃COCH₃ + Zn(Hg) + HCl → CH₃CH₂CH₃"
  },
  {
    name: "Wolff-Kishner Reduction",
    reaction: "R–CO–R' + NH₂NH₂ + KOH → R–CH₂–R'",
    mechanism: "Hydrazone formation followed by base-induced elimination of N₂ to give alkane.",
    chapter: "Aldehydes and Ketones",
    example: "CH₃COCH₃ + NH₂NH₂ + KOH → CH₃CH₂CH₃"
  },
{
    name: "Michael Addition",
    reaction: "Enolate + α,β-unsaturated carbonyl compound → 1,4-addition product",
    mechanism: "Nucleophilic 1,4-conjugate addition of enolate ion to α,β-unsaturated carbonyl.",
    chapter: "Aldehydes and Ketones",
    example: "CH₂(COCH₃)₂ + CH₂=CH–COCH₃ → 1,5-diketone"
  },
  {
    name: "Robinson Annulation",
    reaction: "Michael addition + intramolecular aldol condensation → cyclic compound",
    mechanism: "Michael addition followed by intramolecular aldol condensation forms a six-membered ring.",
    chapter: "Aldehydes and Ketones",
    example: "Methyl vinyl ketone + cyclohexanone → bicyclic compound"
  },
  {
    name: "Baeyer-Villiger Oxidation",
    reaction: "Ketone + peracid → ester or lactone",
    mechanism: "Insertion of oxygen adjacent to carbonyl carbon by peracid.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "Cyclohexanone + m-CPBA → ε-caprolactone"
  },
  {
    name: "Kolbe’s Electrolysis",
    reaction: "Carboxylate ion → alkyl radical → alkane coupling",
    mechanism: "Electrochemical decarboxylation of salts to form radicals which couple to form alkanes.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃COONa → CH₃∙ → C₂H₆"
  },
  {
    name: "Hell-Volhard-Zelinsky Reaction",
    reaction: "Carboxylic acid + Br₂ + PBr₃ → α-bromo acid",
    mechanism: "α-Bromination via acyl bromide intermediate.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "CH₃CH₂COOH + Br₂ + PBr₃ → CH₃CHBrCOOH"
  },
  {
    name: "Bamford-Stevens Reaction",
    reaction: "Tosylhydrazone + base → Alkene",
    mechanism: "Base-induced decomposition of tosylhydrazone to generate carbene intermediate → alkene formation.",
    chapter: "Aldehydes and Ketones",
    example: "Ph–CH=N–NHTs + NaOEt → Ph–CH=CH₂"
  },
  {
    name: "Wittig Reaction",
    reaction: "Aldehyde/Ketone + Ph₃P=CR₂ → Alkene + Ph₃P=O",
    mechanism: "Phosphonium ylide reacts with carbonyl to form oxaphosphetane intermediate → alkene via elimination.",
    chapter: "Aldehydes and Ketones",
    example: "Ph–CHO + Ph₃P=CH₂ → Ph–CH=CH₂ + Ph₃P=O"
  },
  {
    name: "Mannich Reaction",
    reaction: "Aldehyde + amine + ketone → β-amino carbonyl compound",
    mechanism: "Formation of iminium ion from aldehyde and amine, then nucleophilic addition of enol or enolate.",
    chapter: "Aldehydes and Ketones",
    example: "CH₂O + NH₃ + CH₃COCH₃ → β-amino ketone"
  },
  {
    name: "Clemmensen Reduction",
    reaction: "Ketone + Zn(Hg) + HCl → Alkane",
    mechanism: "Acidic reduction of ketone to alkane via zinc amalgam.",
    chapter: "Aldehydes and Ketones",
    example: "CH₃COCH₃ + Zn(Hg) + HCl → CH₃CH₂CH₃"
  },
  {
    name: "Wolff-Kishner Reduction",
    reaction: "Ketone + NH₂NH₂ + KOH → Alkane",
    mechanism: "Base-promoted hydrazone decomposition to alkane via elimination of nitrogen gas.",
    chapter: "Aldehydes and Ketones",
    example: "CH₃COCH₃ + NH₂NH₂ + KOH → CH₃CH₂CH₃"
  },
{
    name: "Hydroboration-Oxidation",
    reaction: "Alkene + BH₃, then H₂O₂/OH⁻ → Alcohol (anti-Markovnikov)",
    mechanism: "Syn-addition of BH₃ to alkene → oxidation replaces B with OH at less substituted carbon.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "CH₂=CH₂ + BH₃, then H₂O₂/OH⁻ → CH₃CH₂OH"
  },
  {
    name: "Oxymercuration-Demercuration",
    reaction: "Alkene + Hg(OAc)₂/H₂O → Alcohol (Markovnikov) without rearrangement",
    mechanism: "Mercurinium ion intermediate → water attacks more substituted carbon → NaBH₄ reduces Hg.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "CH₂=CH₂ + Hg(OAc)₂ + H₂O, then NaBH₄ → CH₃CH₂OH"
  },
  {
    name: "Tollens’ Test",
    reaction: "Aldehyde + Ag⁺(NH₃)₂ → Carboxylic acid + Ag (silver mirror)",
    mechanism: "Oxidation of aldehyde to acid by silver ion, which is reduced to metallic silver.",
    chapter: "Aldehydes and Ketones",
    example: "HCHO + Ag⁺ + OH⁻ → HCOO⁻ + Ag"
  },
  {
    name: "Fehling’s Test",
    reaction: "Aldehyde + Cu²⁺ → Carboxylate + Cu₂O (red ppt)",
    mechanism: "Cu²⁺ oxidizes aldehyde to carboxylate; Cu²⁺ is reduced to Cu₂O.",
    chapter: "Aldehydes and Ketones",
    example: "HCHO + Cu²⁺ + OH⁻ → HCOO⁻ + Cu₂O↓"
  },
  {
    name: "Lucas Test",
    reaction: "Alcohol + HCl (ZnCl₂ catalyst) → Alkyl halide (cloudy layer)",
    mechanism: "SN1 (3° alcohols) or SN2 (1° alcohols) reaction with HCl catalyzed by ZnCl₂.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "(CH₃)₃COH + HCl → (CH₃)₃CCl + H₂O"
  },
  {
    name: "Victor Meyer’s Test",
    reaction: "Alkyl halide → nitroalkane → color test to differentiate 1°, 2°, 3° alcohols",
    mechanism: "Series of conversions: halide → nitro compound → nitrolic acid → color change.",
    chapter: "Alcohols, Phenols and Ethers",
    example: "CH₃CH₂Cl → CH₃CH₂NO₂ → red color (primary alcohol)"
  },
  {
    name: "Etard Reaction",
    reaction: "Toluene + CrO₂Cl₂ → Benzaldehyde",
    mechanism: "Oxidation of benzylic methyl group using chromyl chloride.",
    chapter: "Aromatic Compounds",
    example: "C₆H₅CH₃ + CrO₂Cl₂ → C₆H₅CHO"
  },
  {
    name: "Birch Reduction",
    reaction: "Aromatic ring + Na/NH₃ + alcohol → 1,4-cyclohexadiene",
    mechanism: "Radical anion intermediates form non-conjugated diene from benzene ring.",
    chapter: "Aromatic Compounds",
    example: "C₆H₆ + Na/NH₃ → 1,4-cyclohexadiene"
  },
  {
    name: "Finkelstein Reaction",
    reaction: "R–Cl or R–Br + NaI (acetone) → R–I + NaCl/NaBr",
    mechanism: "Halide exchange reaction, SN2 mechanism favored in polar aprotic solvents.",
    chapter: "Haloalkanes and Haloarenes",
    example: "CH₃Br + NaI → CH₃I + NaBr"
  },
  {
    name: "Swarts Reaction",
    reaction: "R–Cl + SbF₃ → R–F + SbCl₃",
    mechanism: "Halogen exchange; used for preparation of alkyl fluorides.",
    chapter: "Haloalkanes and Haloarenes",
    example: "CH₃Cl + SbF₃ → CH₃F + SbCl₃"
  },
{
    name: "Heck Reaction",
    reaction: "Ar–X + Alkene + Pd catalyst → Substituted alkene",
    mechanism: "Palladium-catalyzed coupling of aryl halide with alkene via oxidative addition and reductive elimination.",
    chapter: "Haloalkanes and Haloarenes",
    example: "C₆H₅Br + CH₂=CHCOOEt + Pd → C₆H₅CH=CHCOOEt"
  },
  {
    name: "Suzuki Coupling",
    reaction: "Ar–X + Ar–B(OH)₂ + Pd(0) + Base → Biaryl",
    mechanism: "Palladium-catalyzed cross-coupling via transmetalation and reductive elimination.",
    chapter: "Haloalkanes and Haloarenes",
    example: "C₆H₅Br + C₆H₅B(OH)₂ + Pd + Base → C₆H₅–C₆H₅"
  },
  {
    name: "Diazotization Reaction",
    reaction: "Ar–NH₂ + NaNO₂ + HCl (0–5°C) → Ar–N₂⁺Cl⁻",
    mechanism: "Nitrous acid generated in situ converts amine to diazonium salt.",
    chapter: "Amines",
    example: "C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ + H₂O"
  },
  {
    name: "Coupling Reaction (Diazonium)",
    reaction: "Ar–N₂⁺ + Activated Ar–H → Azo compound",
    mechanism: "Electrophilic substitution with diazonium ion to form azo linkage (–N=N–).",
    chapter: "Amines",
    example: "C₆H₅N₂⁺ + C₆H₅OH → C₆H₅–N=N–C₆H₄OH"
  },
  {
    name: "Tschitschibabin Reaction",
    reaction: "Pyridine + NaNH₂ → 2-aminopyridine",
    mechanism: "Nucleophilic substitution of hydrogen in heteroaromatic ring.",
    chapter: "Organic Compounds Containing Nitrogen",
    example: "C₅H₅N + NaNH₂ → 2-aminopyridine"
  },
  {
    name: "Carbylamine Reaction",
    reaction: "1° amine + CHCl₃ + alc. KOH → isocyanide (foul smell)",
    mechanism: "Base-induced formation of dichlorocarbene, which reacts with amine.",
    chapter: "Amines",
    example: "CH₃NH₂ + CHCl₃ + KOH → CH₃NC + HCl + H₂O"
  },
  {
    name: "Schmidt Reaction",
    reaction: "Carboxylic acid + Hydrazoic acid → Amine + CO₂",
    mechanism: "Rearrangement reaction involving acyl azide intermediate.",
    chapter: "Carboxylic Acids and Their Derivatives",
    example: "R–COOH + HN₃ → R–NH₂ + CO₂"
  },
  {
    name: "Zaitsev’s Rule",
    reaction: "Alcohol or alkyl halide + base → More substituted alkene",
    mechanism: "E2 elimination favors formation of more stable (highly substituted) alkene.",
    chapter: "Alcohols, Haloalkanes and Haloarenes",
    example: "CH₃CHBrCH₃ + alc. KOH → CH₂=CHCH₃"
  },
  {
    name: "Saytzeff Elimination",
    reaction: "Alkyl halide/alcohol → Most substituted alkene via E1/E2",
    mechanism: "Elimination proceeds through carbocation/enolate → stable alkene (Zaitsev product).",
    chapter: "Haloalkanes and Haloarenes",
    example: "(CH₃)₂CHCH₂Br + alc. KOH → (CH₃)₂C=CH₂"
  },
  {
    name: "Markovnikov's Rule",
    reaction: "HX + unsymmetrical alkene → Major product: H to carbon with more H, X to carbon with less H",
    mechanism: "Carbocation intermediate favors more stable (3° > 2° > 1°) carbon for positive charge.",
    chapter: "Hydrocarbons",
    example: "CH₂=CHCH₃ + HBr → CH₃CHBrCH₃"
  }

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

