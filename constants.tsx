import { Initiative, CareerRole, Stat, FundingCall } from './types.ts';

export const STATS: Stat[] = [
  {
    value: "15.3%",
    label: "Abandon școlar",
    description: "Rata abandonului școlar timpuriu în România (2024) - cea mai ridicată din UE.",
    color: "#6366f1", // Indigo
    solution: "Early warning systems",
    sourceLink: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Early_leavers_from_education_and_training"
  },
  {
    value: "3x",
    label: "Diferență urban-rural",
    description: "Copiii din mediul rural au de 3 ori mai puține șanse să finalizeze liceul decât cei din urban.",
    color: "#ec4899", // Pink
    solution: "Alocare țintită de resurse",
    sourceLink: "https://www.unicef.org/romania/ro/rapoarte/analiza-sectorial%C4%83-a-educa%C8%9Biei"
  },
  {
    value: "43%",
    label: "Sub nivel minim",
    description: "Din elevii de 15 ani nu ating nivelul minim de competență în citire (PISA 2022).",
    color: "#06b6d4", // Cyan
    solution: "Evaluare formativă continuă",
    sourceLink: "https://www.oecd.org/en/publications/pisa-2022-results-volume-i_53123047-en.html"
  },
  {
    value: "45K",
    label: "Deficit de cadre",
    description: "Lipsesc ~45.000 de profesori în sistem. Datele pot prioriza recrutarea.",
    color: "#f59e0b", // Amber
    solution: "HR analytics în educație",
    sourceLink: "https://www.edupedu.ro/deficitul-de-profesori-din-romania-o-analiza-a-datelor-oficiale/"
  }
];

export const INITIATIVES: Initiative[] = [
  {
    id: 1,
    title: "Copiii colectează date în grădiniță",
    org: "EDC - Engaging Preschoolers",
    level: ["prescolar"],
    type: "cercetare",
    dataType: "Observații + Digital tool",
    decision: "design",
    tag: "Preșcolar",
    description: "Dezvoltă activități prin care copiii învață să colecteze și să 'vadă' date.",
    impact: "Educatoarele pot observa progresul în competențe numerice și științifice timpurii.",
    link: "https://edc.org/projects/engaging-preschoolers-in-data-collection-and-analysis"
  },
  {
    id: 2,
    title: "UNICEF folosește date pentru echitate",
    org: "UNICEF MICS-EAGLE",
    level: ["K-12 Global"],
    type: "ong",
    dataType: "Survey + Administrative",
    decision: "echitate",
    tag: "K-12 Global",
    description: "Ajută guvernele să identifice copiii excluși din educație și să măsoare rezultatele.",
    impact: "Alocare de resurse către comunitățile cu cele mai mari disparități.",
    link: "https://data.unicef.org/resources/mics-education-analysis-for-global-learning-and-equity/"
  },
  {
    id: 3,
    title: "PowerSchool: Decizii bazate pe date",
    org: "PowerSchool",
    level: ["K-12 US"],
    type: "edtech",
    dataType: "SIS + Dashboards",
    decision: "interventie",
    tag: "K-12 US",
    description: "Transformă datele despre note și absențe în dashboards acționabile pentru profesori.",
    impact: "Identificarea rapidă a elevilor în risc de abandon și intervenții personalizate.",
    link: "https://www.powerschool.com/blog/7-steps-for-making-data-driven-decision-in-education/"
  },
  {
    id: 4,
    title: "SoLAR: Learning Analytics Research",
    org: "Society for Learning Analytics Research",
    level: ["universitar"],
    type: "cercetare",
    dataType: "LMS + Behavioral analytics",
    decision: "design",
    tag: "Universitar",
    description: "Conectează cercetători care folosesc date pentru a optimiza învățarea online.",
    impact: "Universitățile folosesc analiza comportamentului pentru a redesena cursurile.",
    link: "https://www.solaresearch.org/events/lak/"
  },
  {
    id: 5,
    title: "LINEup: Date longitudine",
    org: "Horizon Europe",
    level: ["policy"],
    type: "ue",
    dataType: "Longitudinal data",
    decision: "echitate",
    tag: "Policy EU",
    description: "Analizează date longitudine pentru a înțelege inegalitățile educaționale.",
    impact: "Guvernele implementează politici țintite pentru grupurile vulnerabile.",
    link: "https://www.lineup-project.eu/"
  },
  {
    id: 6,
    title: "CEDS: Standarde comune",
    org: "US Dept of Education",
    level: ["policy"],
    type: "guvern",
    dataType: "Standardizare",
    decision: "resurse",
    tag: "Standardizare",
    description: "Oferă un vocabular standardizat permițând sistemelor să 'vorbească aceeași limbă'.",
    impact: "Analize comparative la scară și alocare eficientă de resurse.",
    link: "https://ceds.ed.gov/"
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "01",
    title: "Data Lead în școală",
    description: "Proiectezi instrumente de colectare, interpretezi datele și coordonezi intervenții educaționale bazate pe dovezi.",
    skills: ["Științele Educației", "Excel", "Vizualizare date", "Comunicare"],
    miniProject: "Creează un sistem de tracking pentru progresul elevilor folosind Google Sheets.",
    color: "#4f46e5"
  },
  {
    id: "02",
    title: "Coordonator M&E în ONG",
    description: "Măsori impactul programelor educaționale și raportezi către finanțatori și stakeholderi.",
    skills: ["M&E", "Indicatori", "Raportare", "Management proiecte"],
    miniProject: "Dezvoltă un framework de M&E pentru un program fictiv de tutoring.",
    color: "#0891b2"
  },
  {
    id: "03",
    title: "Learning Designer 'Analytics'",
    description: "Construiești experiențe de învățare care produc date utile pentru îmbunătățire continuă.",
    skills: ["Instructional Design", "Learning Analytics", "UX/UI", "Assessment"],
    miniProject: "Redesign o lecție tradițională pentru a include checkpoints formative digitale.",
    color: "#db2777"
  },
  {
    id: "04",
    title: "Analist în Administrație Publică",
    description: "Lucrezi cu indicatori educaționali și contribui la decizii de politici publice evidence-based.",
    skills: ["Statistică", "Indicatori", "Policy analysis", "Raportare"],
    miniProject: "Analizează date publice despre școlile din județul tău și scrie un memo de politici.",
    color: "#059669"
  }
];