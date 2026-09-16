export type Locale = "it" | "en" | "es";

type ExperienceCopy = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  activities: string[];
};

type PortfolioCopy = {
  pageTitle: string;
  languageLabel: string;
  brandAria: string;
  navigationAria: string;
  explore: string;
  nav: string[];
  sidebarTagline: string;
  location: string;
  socialAria: string;
  hero: {
    role: string;
    city: string;
    title: string;
    introBefore: string;
    introAfter: string;
    cta: string;
    facts: Array<{ value: string; label: string }>;
  };
  experience: {
    label: string;
    title: [string, string];
    items: ExperienceCopy[];
  };
  projects: {
    label: string;
    title: [string, string];
    intro: string;
    publicLabel: string;
    descriptions: string[];
    types: string[];
    previewAlts: string[];
    allRepositories: string;
    carouselLabel: string;
    previousLabel: string;
    nextLabel: string;
  };
  skills: {
    label: string;
    title: [string, string];
    groups: string[];
    items: string[][];
  };
  education: {
    label: string;
    title: [string, string];
    items: Array<{ type: string; degree: string; school: string; details: string }>;
  };
  contact: {
    eyebrow: string;
    title: [string, string];
    copy: string;
  };
};

export const portfolioCopy: Record<Locale, PortfolioCopy> = {
  it: {
    pageTitle: "Hugo Aldo Reynoso · Senior Full-Stack Developer a Milano",
    languageLabel: "Seleziona lingua",
    brandAria: "Vai all'inizio",
    navigationAria: "Navigazione principale",
    explore: "Esplora",
    nav: ["Profilo", "Esperienza", "Progetti", "Competenze", "Formazione", "Contatti"],
    sidebarTagline: "Software, dati e AI",
    location: "Milano, Italia",
    socialAria: "Profili social",
    hero: {
      role: "Senior Full-Stack Developer",
      city: "Milano",
      title: "Software Developer",
      introBefore: "Ciao, sono",
      introAfter: "senior full-stack developer con oltre 7 anni di esperienza nello sviluppo di applicazioni web enterprise e mobile. Sono specializzato in Java, Spring Boot, Angular e Vue.js, con esperienza end-to-end, manutenzione evolutiva, refactoring e integrazione tramite REST API. Ho lavorato su progetti per Pubblica Amministrazione e clienti enterprise nei settori sicurezza, healthcare, logistica, telecomunicazioni e pagamenti.",
      cta: "Scopri il mio percorso",
      facts: [
        { value: "7+", label: "anni nello sviluppo enterprise" },
        { value: "Full-stack", label: "Java, Spring Boot, Angular e Vue.js" },
        { value: "3 lingue", label: "spagnolo, italiano e inglese" },
      ],
    },
    experience: {
      label: "Esperienza",
      title: ["Dal problema al prodotto,", "un livello alla volta."],
      items: [
        {
          period: "2023 — presente", role: "Software Developer", company: "GeneGIS GI · Tempo pieno", location: "Milano · Ibrido",
          description: "Consulenza e sviluppo full-stack per progetti enterprise della Pubblica Amministrazione e di aziende private.",
          activities: [
            "Axitea: sviluppo end-to-end di un'app mobile ibrida con Vue.js e Ionic per personale operativo, con NFC, geolocalizzazione e API REST.",
            "Axitea: nuove funzionalità, bug fixing e refactoring del front-end Vue.js, integrato con back-end e API in C#.",
            "Regione Veneto (B23B): manutenzione evolutiva e correttiva con Angular 6, Java e Spring Boot.",
            "Regione Veneto (G10): nuove evolutive, manutenzione e risoluzione anomalie con Vue.js, Java e Spring Boot.",
            "Altri progetti PA per Regione Lombardia e Provincia Autonoma di Trento: sviluppo e manutenzione con Angular 8.",
          ],
        },
        {
          period: "2018 — 2023", role: "Software Developer", company: "Idea S.r.l. · Tempo pieno", location: "Milano · Ibrido",
          description: "Sviluppo full-stack di portali web, gestionali e soluzioni custom per clienti enterprise nei settori healthcare, logistica e pagamenti.",
          activities: [
            "Progetti per Ospedale San Raffaele, SIApay, Lottomatica e TWScourier.",
            "Sviluppo front-end enterprise con Angular, TypeScript, JavaScript e Bootstrap.",
            "Sviluppo back-end con Java, Spring e Spring Boot, con integrazione tramite REST API.",
            "Soluzioni gestionali per healthcare e logistica, moduli applicativi in ambito pagamenti e database PostgreSQL, MySQL e SQL Server.",
          ],
        },
        {
          period: "2017 — 2018", role: "IT Consultant", company: "Aubay Italia S.p.A. · Cliente Vodafone Italia", location: "Milano",
          description: "Analisi dei requisiti e sviluppo di soluzioni RPA per l'automazione dei processi aziendali.",
          activities: ["Monitoraggio e ottimizzazione dei flussi operativi.", "Elaborazione dati e scripting SQL con Toad for Oracle, Automate 7 e Microsoft Excel."],
        },
        {
          period: "2017", role: "IT Consultant", company: "Everis Italia S.p.A. · Cliente Gi Group", location: "Milano",
          description: "Sviluppo di processi ETL e migrazione dati tra sistemi HR ed enterprise.",
          activities: ["Creazione di script SQL/T-SQL e pacchetti SSIS per l'integrità e la coerenza dei dati.", "Utilizzo di SQL Server, SSIS, T-SQL e Visual Basic."],
        },
      ],
    },
    projects: {
      label: "Progetti", title: ["Codice pubblico,", "apprendimento continuo."],
      intro: "Tutti i miei repository pubblici, dai giochi web mobile-first agli esperimenti su dati e Apache Spark.", publicLabel: "Pubblico",
      descriptions: [
        "Demo 3D mobile-first di uno sniper game narrativo: CAPI e il Labrador Docky indagano su un carico sospetto in una missione tattica giocabile.",
        "Web app mobile-first per connettersi a una LIVE TikTok, seguire la chat, leggere i messaggi con la sintesi vocale e visualizzare regali e classifiche in tempo reale.",
        "Gioco mobile-first in cui disegni una linea per proteggere un cane dagli attacchi: livelli rapidi, fisica semplice e comandi immediati.",
        "Gioco match-3 mobile-first: abbina simboli, usa power-up e salva re Alder in una campagna di 10 livelli, giocabile anche offline.",
        "Ruota casuale mobile-first per estrarre un nome: partecipanti, liste salvate, cronologia, temi e animazioni accessibili direttamente nel browser.",
        "Gioco arcade mobile-first dove guidi una folla attraverso portali, raccogli potenziamenti e affronti ondate di avversari.",
        "Tower defense fantasy mobile-first sviluppato con Phaser 3 e TypeScript, con 6 mappe, 40 ondate, 10 guardiani e progressione salvata localmente.",
        "Gioco PWA multilingua per riconoscere le bandiere del mondo, con modalità Classic e Sulla fronte, funzionamento offline e classifiche opzionali con Supabase.",
        "Gioco PWA mobile-first per riconoscere i loghi dei brand, con modalità Classic, Time Attack e Sulla fronte, profili locali e supporto in tre lingue.",
        "Utility mobile per salvare la posizione dell'auto e ritrovarla facilmente tramite mappa e posizione corrente.",
        "Repository dedicato allo studio e alla sperimentazione con Apache Spark e l'elaborazione distribuita dei dati.",
        "Fork con esempi pratici in Java per esplorare Apache Spark e i principali flussi di elaborazione dati.",
      ],
      types: ["Gioco", "Web app", "Gioco", "Gioco", "Utility", "Gioco", "Gioco", "PWA", "PWA", "Utility", "Dati", "Fork"],
      previewAlts: ["Anteprima del gioco CAPI: Shadow Missions", "Anteprima di TikTok Chat", "Anteprima del gioco Defend My Dog", "Anteprima del gioco Crownfall — Puzzle Rescue", "Anteprima di SpinWheel", "Anteprima del gioco Neon Bastion", "Anteprima del gioco Green Valley Guardians", "Anteprima del gioco Flag Streak", "Anteprima del gioco Logo Streak", "Anteprima di Find My Car", "", ""],
      allRepositories: "Visualizza tutti i progetti",
      carouselLabel: "Carosello dei repository GitHub",
      previousLabel: "Mostra i repository precedenti",
      nextLabel: "Mostra i repository successivi",
    },
    skills: { label: "Competenze", title: ["Un profilo trasversale,", "con solide fondamenta."], groups: ["Front-end", "Back-end", "Database & dati", "Strumenti & lingue"], items: [["Angular (2+/6+/8)", "Vue.js", "TypeScript", "JavaScript", "Ionic", "HTML5", "CSS3/SASS", "Bootstrap"], ["Java", "Spring", "Spring Boot", "REST API"], ["PostgreSQL", "MySQL", "SQL Server", "SQL", "T-SQL", "SSIS"], ["Git", "Jira", "Confluence", "Agile/Scrum", "Spagnolo · madrelingua", "Italiano · avanzato", "Inglese · intermedio"]] },
    education: {
      label: "Formazione", title: ["Curiosità continua,", "dalle basi all'AI."],
      items: [
        { type: "Università", degree: "Laurea in Informatica · in corso", school: "Università degli Studi di Milano-Bicocca", details: "Studente universitario, in corso." },
        { type: "Specializzazione", degree: "Database & Business Intelligence", school: "Philmark Informatica S.p.A. · Everis Italia S.p.A.", details: "2017 · 240 ore · SQL e PL/SQL, Data Warehouse, ETL, OLAP, Business Intelligence e fondamenti di Big Data." },
        { type: "Diploma", degree: "Diploma di Perito Informatico", school: "Istituto Tecnico Industriale Altiero Spinelli · Sesto San Giovanni", details: "Le fondamenta tecniche da cui è iniziato tutto." },
      ],
    },
    contact: { eyebrow: "Restiamo in contatto", title: ["Conosciamoci", "meglio."], copy: "Mi fa piacere entrare in contatto con professionisti, aziende e persone interessate a software, dati e intelligenza artificiale." },
  },
  en: {
    pageTitle: "Hugo Aldo Reynoso · Senior Full-Stack Developer in Milan",
    languageLabel: "Select language",
    brandAria: "Back to the top",
    navigationAria: "Main navigation",
    explore: "Explore",
    nav: ["Profile", "Experience", "Projects", "Skills", "Education", "Contact"],
    sidebarTagline: "Software, data and AI",
    location: "Milan, Italy",
    socialAria: "Social profiles",
    hero: {
      role: "Senior Full-Stack Developer", city: "Milan", title: "Software Developer", introBefore: "Hi, I'm",
      introAfter: "a senior full-stack developer with over 7 years of experience building enterprise web and mobile applications. I specialize in Java, Spring Boot, Angular and Vue.js, with end-to-end experience in maintenance, refactoring and REST API integration. I have worked on projects for public administration and enterprise clients in security, healthcare, logistics, telecommunications and payments.",
      cta: "Explore my experience",
      facts: [{ value: "7+", label: "years in enterprise development" }, { value: "Full-stack", label: "Java, Spring Boot, Angular and Vue.js" }, { value: "3 languages", label: "Spanish, Italian, English" }],
    },
    experience: {
      label: "Experience", title: ["From problem to product,", "one layer at a time."],
      items: [
        {
          period: "2023 — present", role: "Software Developer", company: "GeneGIS GI · Full-time", location: "Milan · Hybrid",
          description: "Full-stack consulting and development for public-administration and private enterprise projects.",
          activities: ["Axitea: end-to-end development of a hybrid mobile app with Vue.js and Ionic for field staff, including NFC, geolocation and REST APIs.", "Axitea: new features, bug fixes and front-end refactoring in Vue.js, integrated with C# back-end services and APIs.", "Regione Veneto (B23B): corrective and evolutionary maintenance with Angular 6, Java and Spring Boot.", "Regione Veneto (G10): new features, maintenance and issue resolution with Vue.js, Java and Spring Boot.", "Other public-administration projects for Regione Lombardia and Provincia Autonoma di Trento: development and maintenance with Angular 8."],
        },
        {
          period: "2018 — 2023", role: "Software Developer", company: "Idea S.r.l. · Full-time", location: "Milan · Hybrid",
          description: "Full-stack development of web portals, business applications and custom solutions for enterprise clients in healthcare, logistics and payments.",
          activities: ["Projects for Ospedale San Raffaele, SIApay, Lottomatica and TWScourier.", "Enterprise front-end development with Angular, TypeScript, JavaScript and Bootstrap.", "Back-end development with Java, Spring and Spring Boot, integrated through REST APIs.", "Business solutions for healthcare and logistics, payment modules and PostgreSQL, MySQL and SQL Server databases."],
        },
        {
          period: "2017 — 2018", role: "IT Consultant", company: "Aubay Italia S.p.A. · Vodafone Italy client", location: "Milan",
          description: "Requirements analysis and RPA solution development for business-process automation.",
          activities: ["Monitoring and optimization of operational workflows.", "Data processing and SQL scripting with Toad for Oracle, Automate 7 and Microsoft Excel."],
        },
        {
          period: "2017", role: "IT Consultant", company: "Everis Italia S.p.A. · Gi Group client", location: "Milan",
          description: "Development of ETL processes and data migration between HR and enterprise systems.",
          activities: ["Creation of SQL/T-SQL scripts and SSIS packages to ensure data integrity and consistency.", "Technologies: SQL Server, SSIS, T-SQL and Visual Basic."],
        },
      ],
    },
    projects: {
      label: "Projects", title: ["Public code,", "continuous learning."], intro: "All my public repositories, from mobile-first web games to data and Apache Spark experiments.", publicLabel: "Public",
      descriptions: [
        "A mobile-first 3D narrative sniper-game demo: CAPI and her Labrador Docky investigate suspicious cargo in a playable tactical mission.",
        "A mobile-first web app for connecting to a TikTok LIVE, following the chat, reading messages with text-to-speech and viewing gifts and rankings in real time.",
        "A mobile-first game where you draw a line to protect a dog from incoming attacks, with quick levels, simple physics and direct controls.",
        "A mobile-first match-3 game: match symbols, use power-ups and rescue King Alder through a 10-level campaign that also works offline.",
        "A mobile-first random name wheel with participants, saved lists, history, themes and accessible animations—all running directly in the browser.",
        "A mobile-first arcade game where you lead a crowd through gates, collect boosts and face waves of opponents.",
        "A mobile-first fantasy tower defense built with Phaser 3 and TypeScript, featuring 6 maps, 40 waves, 10 guardians and locally saved progression.",
        "A multilingual PWA for recognizing world flags, featuring Classic and Forehead modes, offline support and optional Supabase leaderboards.",
        "A mobile-first PWA for recognizing brand logos, featuring Classic, Time Attack and Forehead modes, local profiles and support for three languages.",
        "A mobile utility for saving a car's location and finding it again through a map and the current position.",
        "A repository for learning and experimenting with Apache Spark and distributed data processing.",
        "A fork containing practical Java examples for exploring Apache Spark and essential data-processing workflows.",
      ], types: ["Game", "Web app", "Game", "Game", "Utility", "Game", "Game", "PWA", "PWA", "Utility", "Data", "Fork"], previewAlts: ["CAPI: Shadow Missions game preview", "TikTok Chat preview", "Defend My Dog game preview", "Crownfall — Puzzle Rescue game preview", "SpinWheel preview", "Neon Bastion game preview", "Green Valley Guardians game preview", "Flag Streak game preview", "Logo Streak game preview", "Find My Car preview", "", ""], allRepositories: "View all projects",
      carouselLabel: "GitHub repositories carousel",
      previousLabel: "Show previous repositories",
      nextLabel: "Show next repositories",
    },
    skills: { label: "Skills", title: ["A versatile profile,", "built on solid foundations."], groups: ["Front-end", "Back-end", "Databases & data", "Tools & languages"], items: [["Angular (2+/6+/8)", "Vue.js", "TypeScript", "JavaScript", "Ionic", "HTML5", "CSS3/SASS", "Bootstrap"], ["Java", "Spring", "Spring Boot", "REST API"], ["PostgreSQL", "MySQL", "SQL Server", "SQL", "T-SQL", "SSIS"], ["Git", "Jira", "Confluence", "Agile/Scrum", "Spanish · native", "Italian · advanced", "English · intermediate"]] },
    education: {
      label: "Education", title: ["Continuous curiosity,", "from fundamentals to AI."],
      items: [
        { type: "University", degree: "BSc in Computer Science · ongoing", school: "University of Milano-Bicocca", details: "Current undergraduate student." },
        { type: "Specialization", degree: "Database & Business Intelligence", school: "Philmark Informatica S.p.A. · Everis Italia S.p.A.", details: "2017 · 240 hours · SQL and PL/SQL, Data Warehouse, ETL, OLAP, Business Intelligence and Big Data fundamentals." },
        { type: "Diploma", degree: "IT Technician Diploma", school: "Altiero Spinelli Technical Industrial Institute · Sesto San Giovanni", details: "The technical foundations where it all began." },
      ],
    },
    contact: { eyebrow: "Let's stay in touch", title: ["Let's get to know", "each other."], copy: "I am always happy to connect with professionals, companies and people interested in software, data and artificial intelligence." },
  },
  es: {
    pageTitle: "Hugo Aldo Reynoso · Senior Full-Stack Developer en Milán",
    languageLabel: "Seleccionar idioma",
    brandAria: "Volver al inicio",
    navigationAria: "Navegación principal",
    explore: "Explorar",
    nav: ["Perfil", "Experiencia", "Proyectos", "Competencias", "Formación", "Contacto"],
    sidebarTagline: "Software, datos e IA",
    location: "Milán, Italia",
    socialAria: "Perfiles sociales",
    hero: {
      role: "Senior Full-Stack Developer", city: "Milán", title: "Software Developer", introBefore: "Hola, soy",
      introAfter: "senior full-stack developer con más de 7 años de experiencia en el desarrollo de aplicaciones web empresariales y móviles. Estoy especializado en Java, Spring Boot, Angular y Vue.js, con experiencia end-to-end, mantenimiento evolutivo, refactorización e integración mediante API REST. He trabajado en proyectos para la Administración Pública y clientes empresariales de seguridad, sanidad, logística, telecomunicaciones y pagos.",
      cta: "Descubre mi experiencia",
      facts: [{ value: "7+", label: "años en desarrollo empresarial" }, { value: "Full-stack", label: "Java, Spring Boot, Angular y Vue.js" }, { value: "3 idiomas", label: "español, italiano e inglés" }],
    },
    experience: {
      label: "Experiencia", title: ["Del problema al producto,", "capa a capa."],
      items: [
        {
          period: "2023 — actualidad", role: "Desarrollador de software", company: "GeneGIS GI · Tiempo completo", location: "Milán · Híbrido",
          description: "Consultoría y desarrollo full-stack para proyectos empresariales de la Administración Pública y empresas privadas.",
          activities: ["Axitea: desarrollo end-to-end de una app móvil híbrida con Vue.js e Ionic para personal operativo, con NFC, geolocalización y API REST.", "Axitea: nuevas funcionalidades, corrección de errores y refactorización del front-end Vue.js, integrado con back-end y API en C#.", "Región del Véneto (B23B): mantenimiento evolutivo y correctivo con Angular 6, Java y Spring Boot.", "Región del Véneto (G10): nuevas evolutivas, mantenimiento y resolución de incidencias con Vue.js, Java y Spring Boot.", "Otros proyectos de Administración Pública para Región de Lombardía y Provincia Autónoma de Trento: desarrollo y mantenimiento con Angular 8."],
        },
        {
          period: "2018 — 2023", role: "Desarrollador de software", company: "Idea S.r.l. · Tiempo completo", location: "Milán · Híbrido",
          description: "Desarrollo full-stack de portales web, aplicaciones de gestión y soluciones a medida para clientes empresariales de sanidad, logística y pagos.",
          activities: ["Proyectos para Ospedale San Raffaele, SIApay, Lottomatica y TWScourier.", "Desarrollo front-end empresarial con Angular, TypeScript, JavaScript y Bootstrap.", "Desarrollo back-end con Java, Spring y Spring Boot, integrado mediante API REST.", "Soluciones de gestión para sanidad y logística, módulos de pagos y bases de datos PostgreSQL, MySQL y SQL Server."],
        },
        {
          period: "2017 — 2018", role: "Consultor de TI", company: "Aubay Italia S.p.A. · Cliente Vodafone Italia", location: "Milán",
          description: "Análisis de requisitos y desarrollo de soluciones RPA para la automatización de procesos empresariales.",
          activities: ["Monitorización y optimización de flujos operativos.", "Procesamiento de datos y scripting SQL con Toad for Oracle, Automate 7 y Microsoft Excel."],
        },
        {
          period: "2017", role: "Consultor de TI", company: "Everis Italia S.p.A. · Cliente Gi Group", location: "Milán",
          description: "Desarrollo de procesos ETL y migración de datos entre sistemas de RR. HH. y empresariales.",
          activities: ["Creación de scripts SQL/T-SQL y paquetes SSIS para garantizar la integridad y consistencia de los datos.", "Tecnologías: SQL Server, SSIS, T-SQL y Visual Basic."],
        },
      ],
    },
    projects: {
      label: "Proyectos", title: ["Código público,", "aprendizaje continuo."], intro: "Todos mis repositorios públicos, desde juegos web mobile-first hasta experimentos con datos y Apache Spark.", publicLabel: "Público",
      descriptions: [
        "Demo 3D mobile-first de un juego narrativo de francotirador: CAPI y el labrador Docky investigan una carga sospechosa en una misión táctica jugable.",
        "Aplicación web mobile-first para conectarse a un LIVE de TikTok, seguir el chat, leer mensajes con síntesis de voz y ver regalos y clasificaciones en tiempo real.",
        "Juego mobile-first en el que dibujas una línea para proteger a un perro de los ataques, con niveles rápidos, física sencilla y controles directos.",
        "Juego match-3 mobile-first: combina símbolos, usa potenciadores y salva al rey Alder en una campaña de 10 niveles que también funciona sin conexión.",
        "Ruleta aleatoria mobile-first para elegir un nombre: participantes, listas guardadas, historial, temas y animaciones accesibles directamente en el navegador.",
        "Juego arcade mobile-first en el que guías una multitud por portales, recoges mejoras y te enfrentas a oleadas de adversarios.",
        "Tower defense de fantasía mobile-first desarrollado con Phaser 3 y TypeScript, con 6 mapas, 40 oleadas, 10 guardianes y progreso guardado localmente.",
        "Juego PWA multilingüe para reconocer las banderas del mundo, con modos Clásico y En la frente, funcionamiento offline y clasificaciones opcionales con Supabase.",
        "Juego PWA mobile-first para reconocer logotipos de marcas, con modos Clásico, Contrarreloj y En la frente, perfiles locales y soporte en tres idiomas.",
        "Utilidad móvil para guardar la posición del coche y encontrarlo fácilmente mediante mapa y ubicación actual.",
        "Repositorio para aprender y experimentar con Apache Spark y el procesamiento distribuido de datos.",
        "Fork con ejemplos prácticos en Java para explorar Apache Spark y los principales flujos de procesamiento de datos.",
      ], types: ["Juego", "Aplicación web", "Juego", "Juego", "Utilidad", "Juego", "Juego", "PWA", "PWA", "Utilidad", "Datos", "Fork"], previewAlts: ["Vista previa del juego CAPI: Shadow Missions", "Vista previa de TikTok Chat", "Vista previa del juego Defend My Dog", "Vista previa del juego Crownfall — Puzzle Rescue", "Vista previa de SpinWheel", "Vista previa del juego Neon Bastion", "Vista previa del juego Green Valley Guardians", "Vista previa del juego Flag Streak", "Vista previa del juego Logo Streak", "Vista previa de Find My Car", "", ""], allRepositories: "Ver todos los proyectos",
      carouselLabel: "Carrusel de repositorios de GitHub",
      previousLabel: "Mostrar repositorios anteriores",
      nextLabel: "Mostrar repositorios siguientes",
    },
    skills: { label: "Competencias", title: ["Un perfil versátil,", "con bases sólidas."], groups: ["Front-end", "Back-end", "Bases de datos", "Herramientas e idiomas"], items: [["Angular (2+/6+/8)", "Vue.js", "TypeScript", "JavaScript", "Ionic", "HTML5", "CSS3/SASS", "Bootstrap"], ["Java", "Spring", "Spring Boot", "REST API"], ["PostgreSQL", "MySQL", "SQL Server", "SQL", "T-SQL", "SSIS"], ["Git", "Jira", "Confluence", "Agile/Scrum", "Español · nativo", "Italiano · avanzado", "Inglés · intermedio"]] },
    education: {
      label: "Formación", title: ["Curiosidad constante,", "desde las bases hasta la IA."],
      items: [
        { type: "Universidad", degree: "Grado en Informática · en curso", school: "Universidad de Milano-Bicocca", details: "Estudiante universitario en curso." },
        { type: "Especialización", degree: "Database & Business Intelligence", school: "Philmark Informatica S.p.A. · Everis Italia S.p.A.", details: "2017 · 240 horas · SQL y PL/SQL, Data Warehouse, ETL, OLAP, Business Intelligence y fundamentos de Big Data." },
        { type: "Diploma", degree: "Diploma de Técnico Informático", school: "Instituto Técnico Industrial Altiero Spinelli · Sesto San Giovanni", details: "Las bases técnicas con las que comenzó todo." },
      ],
    },
    contact: { eyebrow: "Sigamos en contacto", title: ["Conozcámonos", "mejor."], copy: "Me interesa conectar con profesionales, empresas y personas interesadas en el software, los datos y la inteligencia artificial." },
  },
};
