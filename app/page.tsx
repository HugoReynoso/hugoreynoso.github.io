export const dynamic = "force-static";

const experience = [
  {
    period: "mar 2023 — presente",
    role: "Software Developer",
    company: "GeneGIS GI · Tempo pieno",
    location: "Milano · Ibrido",
    description: "Consulente software su progetti enterprise per la Pubblica Amministrazione e aziende private.",
    activities: [
      "Sviluppo e manutenzione di applicazioni web con Angular, Java e Spring Boot.",
      "Nuove funzionalità e refactoring di applicazioni con Vue.js e Java.",
      "Sviluppo completo di un’applicazione mobile ibrida con Vue.js e Ionic per il personale operativo sul campo.",
      "Bug fixing, ottimizzazione del software esistente e integrazione con API REST.",
    ],
    tech: ["Angular", "Vue.js", "Ionic", "Java", "Spring Boot", "REST API", "C#"],
  },
  {
    period: "mag 2018 — feb 2023",
    role: "Software Developer",
    company: "Idea Srl · Tempo pieno",
    location: "Milano, Italia",
    description: "Sviluppatore full-stack di applicazioni gestionali e portali web per aziende nei settori sanità, logistica e pagamenti. Progetti per Ospedale San Raffaele, SIApay, Lottomatica e TWScourier.",
    activities: [
      "Sviluppo front-end di portali e gestionali web.",
      "Sviluppo full-stack di applicazioni aziendali e interfacce responsive.",
      "Implementazione di API, logica back-end, database e integrazioni dati.",
    ],
    tech: ["Angular", "TypeScript", "JavaScript", "Java", "Spring Boot", "PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    period: "dic 2017 — mag 2018",
    role: "IT Consultant",
    company: "Aubay · Cliente Vodafone Italia",
    location: "Milano, Italia",
    description: "Analisi e automazione dei processi aziendali in ambito telecomunicazioni.",
    activities: [
      "Sviluppo e manutenzione di procedure di Robotic Process Automation.",
      "Analisi dei flussi operativi e gestione dei dati di processo.",
    ],
    tech: ["RPA", "Automate 7", "Toad for Oracle", "SQL", "Excel"],
  },
  {
    period: "giu 2017 — dic 2017",
    role: "External IT Consultant",
    company: "everis Italia · Cliente Gi Group",
    location: "Milano, Italia",
    description: "Consulenza su progetti di ETL, Data Migration e integrazione dei dati tra sistemi aziendali.",
    activities: [
      "Migrazione e trasformazione dei dati tra applicazioni aziendali.",
      "Sviluppo e verifica di processi ETL con SQL Server Integration Services.",
    ],
    tech: ["SQL Server 2014", "SSIS", "SQL", "T-SQL", "Visual Basic"],
  },
];

const skillGroups = [
  { title: "Front-end", skills: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"] },
  { title: "Back-end", skills: ["Java", "Spring", "Spring Boot", "REST API"] },
  { title: "Data", skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "ETL", "Spark"] },
  { title: "Workflow", skills: ["Git", "Jira", "Confluence", "Agile", "Teamwork"] },
];

const projects = [
  {
    name: "Spark",
    path: "HugoReynoso / Spark",
    description: "Repository dedicato allo studio e alla sperimentazione con Apache Spark e l'elaborazione distribuita dei dati.",
    language: "Apache Spark",
    size: "690 KB",
    href: "https://github.com/HugoReynoso/Spark",
  },
  {
    name: "spark-examples",
    path: "HugoReynoso / spark-examples",
    description: "Raccolta di esempi pratici per esplorare Spark, i flussi di elaborazione e il mondo Big Data.",
    language: "Data engineering",
    size: "140 KB",
    href: "https://github.com/HugoReynoso/spark-examples",
  },
];

const navItems = [
  ["Profilo", "#profilo"],
  ["Esperienza", "#esperienza"],
  ["Progetti", "#progetti"],
  ["Competenze", "#competenze"],
  ["Formazione", "#formazione"],
  ["Contatti", "#contatti"],
];

export default function Home() {
  return (
    <main>
      <aside className="sidebar">
        <a className="brand" href="#profilo" aria-label="Vai all'inizio"><span className="brand-mark">HR</span><span>Hugo Reynoso</span></a>
        <nav aria-label="Navigazione principale">
          <p className="nav-label">Esplora</p>
          {navItems.map(([label, href]) => <a className="nav-item" href={href} key={href}><span>{label}</span><span className="nav-chevron" aria-hidden="true" /></a>)}
        </nav>
        <div className="sidebar-footer"><span className="status-dot" /> Software, dati e AI<small>Milano, Italia</small></div>
      </aside>

      <aside className="social-rail" aria-label="Profili social">
        <span className="social-rail-label">Social</span>
        <a className="linkedin" href="https://www.linkedin.com/in/hugo-aldo-reynoso/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="social-icon" aria-hidden="true">in</span><span className="social-name">LinkedIn</span><span className="social-external" aria-hidden="true">↗</span></a>
        <a className="github" href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="social-icon" aria-hidden="true">GH</span><span className="social-name">GitHub</span><span className="social-external" aria-hidden="true">↗</span></a>
        <a className="instagram" href="https://www.instagram.com/hugoaldorey/" target="_blank" rel="noreferrer" aria-label="Instagram"><span className="social-icon instagram-icon" aria-hidden="true">◎</span><span className="social-name">Instagram</span><span className="social-external" aria-hidden="true">↗</span></a>
      </aside>

      <div className="content">
        <section className="hero" id="profilo">
          <div className="eyebrow"><span>Software Developer</span><span>·</span><span>Milano</span></div>
          <figure className="portrait-card">
            <img src="/hugo-reynoso.jpg" alt="Hugo Aldo Reynoso" />
            <figcaption><span className="status-dot" /> @hugoaldoreynoso</figcaption>
          </figure>
          <h1>Costruisco software.</h1>
          <p className="hero-copy">Ciao, sono <strong>Hugo Aldo Reynoso</strong>, software developer specializzato nella progettazione e nello sviluppo di applicazioni web e mobile. Lavoro con Angular, Vue.js, Java e Spring Boot e ho maturato esperienza in progetti complessi per Pubblica Amministrazione, telecomunicazioni, pagamenti digitali, sanità e logistica. Oggi integro il mio percorso con l&apos;intelligenza artificiale, esplorando nuovi modi per costruire software più utile, efficiente e vicino alle persone.</p>
          <div className="hero-actions">
            <a className="button primary" href="#esperienza">Scopri il mio percorso <span>↓</span></a>
            <a className="button secondary" href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
          <div className="quick-facts">
            <div><strong>9+</strong><span>anni nello sviluppo</span></div>
            <div><strong>Full-stack</strong><span>front-end, back-end e dati</span></div>
            <div><strong>3 lingue</strong><span>italiano, spagnolo, inglese</span></div>
          </div>
        </section>

        <section id="esperienza">
          <header className="section-heading"><span>Esperienza</span><h2>Dal problema al prodotto,<br />un livello alla volta.</h2></header>
          <div className="timeline">{experience.map((item) => (
            <article className="experience-card" key={item.company}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}<span>{item.location}</span></p>
                <p>{item.description}</p>
                <ul className="experience-activities">{item.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
                <div className="tags">{item.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          ))}</div>
        </section>

        <section id="progetti">
          <header className="section-heading">
            <span>Progetti</span>
            <h2>Codice pubblico,<br />apprendimento continuo.</h2>
            <p className="section-intro">Una selezione dal mio profilo GitHub: esperimenti e materiali costruiti intorno ai dati e ad Apache Spark.</p>
          </header>
          <div className="project-grid">
            {projects.map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <div className="repo-top"><span className="repo-icon">⌘</span><span>Public</span></div>
                <p className="repo-path">{project.path}</p>
                <h3>{project.name}<span>↗</span></h3>
                <p className="repo-description">{project.description}</p>
                <div className="repo-meta"><span><i />{project.language}</span><span>{project.size}</span></div>
              </a>
            ))}
          </div>
          <a className="github-profile-link" href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer">
            <span>github.com/HugoReynoso</span><span>Vedi tutti i repository ↗</span>
          </a>
        </section>

        <section id="competenze">
          <header className="section-heading"><span>Competenze</span><h2>Un profilo trasversale,<br />con solide fondamenta.</h2></header>
          <div className="skill-grid">{skillGroups.map((group) => (
            <article className="skill-card" key={group.title}><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
          ))}</div>
        </section>

        <section id="formazione">
          <header className="section-heading"><span>Formazione</span><h2>Curiosità continua,<br />dalle basi all&apos;AI.</h2></header>
          <div className="education-list">
            <article><span>Università</span><div><h3>Informatica</h3><p>Università degli Studi di Milano-Bicocca</p><small>Algoritmi, software design, database, reti, sistemi operativi e HCI.</small></div></article>
            <article><span>Specializzazione</span><div><h3>Database & Business Intelligence</h3><p>Philmark Informatica · Everis Italia</p><small>SQL, PL/SQL, Data Warehouse, ETL, OLAP e Big Data.</small></div></article>
            <article><span>Diploma</span><div><h3>Perito Informatico</h3><p>I.T.I. Altiero Spinelli · Sesto San Giovanni</p><small>Le fondamenta tecniche da cui è iniziato tutto.</small></div></article>
          </div>
        </section>

        <section className="contact" id="contatti">
          <p className="eyebrow">Restiamo in contatto</p><h2>Conosciamoci<br />meglio.</h2>
          <p className="contact-copy">Mi fa piacere entrare in contatto con professionisti, aziende e persone interessate a software, dati e intelligenza artificiale.</p>
          <a className="mail-link" href="mailto:HugoAldoReynoso@gmail.com">HugoAldoReynoso@gmail.com <span>↗</span></a>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/hugo-aldo-reynoso/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.instagram.com/hugoaldorey/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </section>
        <footer><span>© 2026 Hugo Aldo Reynoso</span></footer>
      </div>
    </main>
  );
}
