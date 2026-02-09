const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dict = {
  en: {
    tagline: "Research • Data Science • Computational Social Science",
    contactBtn: "Contact",
    navAbout: "About",
    navResearch: "Research",
    navExperience: "Experience",
    navTeaching: "Teaching",
    navEducation: "Education",
    navSkills: "Skills",
    navPublications: "Publications",
    navCV: "CV",
    aboutTitle: "About",
    aboutBody:
      "I am an Italian researcher working at the intersection of data science, social data, text analysis, and applied economics. My work spans computational social science, media analytics, and methods for decision support.",
    focusTitle: "Current focus",
    focus1: "Text analysis & machine learning for decision support (legal and policy contexts)",
    focus2: "Media market analysis and dashboards",
    focus3: "Social media signals for public opinion & health communication",
    contactTitle: "Contact",
    contactNote: "(Tip: keep phone/address private unless you really want them public.)",
    researchTitle: "Research highlights",
    researchA: "Computational social science & public communication",
    researchABody:
      "Sentiment/classification analysis on social media to study uncertainty, disorientation, and communication effects.",
    researchB: "Media analytics & European markets",
    researchBBody:
      "Analysis of production/consumption patterns in European media markets with interactive dashboards.",
    experienceTitle: "Experience",
    exp1Title: "Postdoctoral Research Fellow — University of Palermo",
    exp1Body:
      "Just Smart project: statistical analysis of historical court data; text analysis tools to support judges’ work optimization.",
    exp2Title: "Postdoctoral Research Fellow — Ca’ Foscari University (Venice)",
    exp2Body:
      "H2020 EUMEPLAT: media market analysis across Europe; methods to anticipate spreading of anti-EU fake news.",
    exp3Title:
      "Contract Professor — Advanced Application of Computer Science for Cultural Heritage",
    exp3Body: "Interactive labs on R fundamentals and network analysis.",
    experienceNote:
      "(You can add older roles like tutoring and internship as separate entries if you want.)",
    teachingTitle: "Teaching",
    teach1: "Teaching assistant in Political Economy (University of Palermo)",
    teach2: "Senior Tutor: Statistics; Data Science & Demography (University of Catania)",
    educationTitle: "Education",
    edu1Title: "PhD — Economics, Management and Statistics",
    edu1Body: " (University of Messina & University of Catania, 2017–2020)",
    edu2Title: "Master II level — Big Data Analytics & Social Mining",
    edu2Body: " (University of Pisa, 2017–2018)",
    edu3Title: "MSc — Economics (110/110)",
    edu3Body: " (University of Pisa & Sant’Anna School of Advanced Studies, 2013–2016)",
    edu4Title: "BSc — Economics and Finance",
    edu4Body: " (University of Palermo, 2006–2012)",
    skillsTitle: "Skills",
    skillsProg: "Programming",
    skillsML: "Data / ML",
    skillsTools: "Tools",
    pubTitle: "Selected publications",
    pubNote: "Full list available in the PDF below.",
    pubPdfBtn: "Open publications PDF",
    cvTitle: "CV"
  },
  it: {
    tagline: "Ricerca • Data Science • Scienze sociali computazionali",
    contactBtn: "Contatti",
    navAbout: "Profilo",
    navResearch: "Ricerca",
    navExperience: "Esperienze",
    navTeaching: "Didattica",
    navEducation: "Formazione",
    navSkills: "Competenze",
    navPublications: "Pubblicazioni",
    navCV: "CV",
    aboutTitle: "Profilo",
    aboutBody:
      "Sono una ricercatrice italiana che lavora all’intersezione tra data science, dati sociali, text analysis ed economia applicata. Il mio lavoro include scienze sociali computazionali, media analytics e metodi di supporto alle decisioni.",
    focusTitle: "Focus attuale",
    focus1: "Text analysis & machine learning per supporto decisionale (contesti giuridici e policy)",
    focus2: "Analisi dei mercati media e dashboard",
    focus3: "Segnali dai social media per opinione pubblica e comunicazione sanitaria",
    contactTitle: "Contatti",
    contactNote: "(Consiglio: tieni privati telefono/indirizzo se non vuoi renderli pubblici.)",
    researchTitle: "Highlights di ricerca",
    researchA: "Scienze sociali computazionali & comunicazione pubblica",
    researchABody:
      "Analisi di sentiment/classificazione su social media per studiare incertezza, disorientamento ed effetti della comunicazione.",
    researchB: "Media analytics & mercati europei",
    researchBBody:
      "Analisi di pattern di produzione/consumo nei mercati media europei con dashboard interattive.",
    experienceTitle: "Esperienze",
    exp1Title: "Assegnista/Postdoc — Università di Palermo",
    exp1Body:
      "Progetto Just Smart: analisi statistica di dati storici giudiziari; strumenti di text analysis a supporto del lavoro dei magistrati.",
    exp2Title: "Assegnista/Postdoc — Università Ca’ Foscari (Venezia)",
    exp2Body:
      "H2020 EUMEPLAT: analisi dei mercati media in Europa; metodi per anticipare la diffusione di fake news anti-UE.",
    exp3Title:
      "Professore a contratto — Advanced Application of Computer Science for Cultural Heritage",
    exp3Body: "Laboratori interattivi su R e basi di network analysis.",
    experienceNote:
      "(Puoi aggiungere anche tutorati e tirocinio come voci separate, se vuoi.)",
    teachingTitle: "Didattica",
    teach1: "Cultore della materia/Teaching assistant in Economia Politica (Uni Palermo)",
    teach2: "Tutorato Senior: Statistica; Data Science e Demografia (Uni Catania)",
    educationTitle: "Formazione",
    edu1Title: "Dottorato — Economics, Management and Statistics",
    edu1Body: " (Uni Messina & Uni Catania, 2017–2020)",
    edu2Title: "Master II livello — Big Data Analytics & Social Mining",
    edu2Body: " (Uni Pisa, 2017–2018)",
    edu3Title: "Laurea Magistrale — Economics (110/110)",
    edu3Body: " (Uni Pisa & Scuola Sant’Anna, 2013–2016)",
    edu4Title: "Laurea Triennale — Economia e Finanza",
    edu4Body: " (Uni Palermo, 2006–2012)",
    skillsTitle: "Competenze",
    skillsProg: "Programmazione",
    skillsML: "Dati / ML",
    skillsTools: "Strumenti",
    pubTitle: "Pubblicazioni selezionate",
    pubNote: "Lista completa disponibile nel PDF qui sotto.",
    pubPdfBtn: "Apri PDF pubblicazioni",
    cvTitle: "CV"
  }
};

let lang = "en";
const btn = document.getElementById("langToggle");

function applyI18n() {
  document.documentElement.lang = lang;
  const map = dict[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (map[key]) el.textContent = map[key];
  });
  if (btn) btn.textContent = (lang === "en") ? "IT" : "EN";
}

if (btn) {
  btn.addEventListener("click", () => {
    lang = (lang === "en") ? "it" : "en";
    applyI18n();
  });
}

applyI18n();
