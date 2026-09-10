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
    pageTitle: "Hugo Aldo Reynoso · Software Developer a Milano",
    languageLabel: "Seleziona lingua",
    brandAria: "Vai all'inizio",
    navigationAria: "Navigazione principale",
    explore: "Esplora",
    nav: ["Profilo", "Esperienza", "Progetti", "Competenze", "Formazione", "Contatti"],
    sidebarTagline: "Software, dati e AI",
    location: "Milano, Italia",
    socialAria: "Profili social",
    hero: {
      role: "Software Developer",
      city: "Milano",
      title: "Costruisco software.",
      introBefore: "Ciao, sono",
      introAfter: "software developer specializzato nella progettazione e nello sviluppo di applicazioni web e mobile. Lavoro con Angular, Vue.js, Java e Spring Boot e ho maturato esperienza in progetti complessi per Pubblica Amministrazione, telecomunicazioni, pagamenti digitali, sanità e logistica. Oggi integro il mio percorso con l'intelligenza artificiale, esplorando nuovi modi per costruire software più utile, efficiente e vicino alle persone.",
      cta: "Scopri il mio percorso",
      facts: [
        { value: "9+", label: "anni nello sviluppo" },
        { value: "Full-stack", label: "front-end, back-end e dati" },
        { value: "3 lingue", label: "italiano, spagnolo, inglese" },
      ],
    },
    experience: {
      label: "Esperienza",
      title: ["Dal problema al prodotto,", "un livello alla volta."],
      items: [
        {
          period: "mar 2023 — presente", role: "Software Developer", company: "GeneGIS GI · Tempo pieno", location: "Milano · Ibrido",
          description: "Consulente software su progetti enterprise per la Pubblica Amministrazione e aziende private.",
          activities: [
            "Sviluppo e manutenzione di applicazioni web con Angular, Java e Spring Boot.",
            "Nuove funzionalità e refactoring di applicazioni con Vue.js e Java.",
            "Sviluppo completo di un'applicazione mobile ibrida con Vue.js e Ionic per il personale operativo sul campo.",
            "Bug fixing, ottimizzazione del software esistente e integrazione con API REST.",
          ],
        },
        {
          period: "mag 2018 — feb 2023", role: "Software Developer", company: "Idea Srl · Tempo pieno", location: "Milano, Italia",
          description: "Sviluppatore full-stack di applicazioni gestionali e portali web per aziende nei settori sanità, logistica e pagamenti. Progetti per Ospedale San Raffaele, SIApay, Lottomatica e TWScourier.",
          activities: [
            "Sviluppo front-end di portali e gestionali web.",
            "Sviluppo full-stack di applicazioni aziendali e interfacce responsive.",
            "Implementazione di API, logica back-end, database e integrazioni dati.",
          ],
        },
        {
          period: "dic 2017 — mag 2018", role: "IT Consultant", company: "Aubay · Cliente Vodafone Italia", location: "Milano, Italia",
          description: "Analisi e automazione dei processi aziendali in ambito telecomunicazioni.",
          activities: ["Sviluppo e manutenzione di procedure di Robotic Process Automation.", "Analisi dei flussi operativi e gestione dei dati di processo."],
        },
        {
          period: "giu 2017 — dic 2017", role: "External IT Consultant", company: "everis Italia · Cliente Gi Group", location: "Milano, Italia",
          description: "Consulenza su progetti di ETL, Data Migration e integrazione dei dati tra sistemi aziendali.",
          activities: ["Migrazione e trasformazione dei dati tra applicazioni aziendali.", "Sviluppo e verifica di processi ETL con SQL Server Integration Services."],
        },
      ],
    },
    projects: {
      label: "Progetti", title: ["Codice pubblico,", "apprendimento continuo."],
      intro: "Tutti i miei repository pubblici, dai giochi web mobile-first agli esperimenti su dati e Apache Spark.", publicLabel: "Pubblico",
      descriptions: [
        "Ruota casuale mobile-first per estrarre un nome: partecipanti, liste salvate, cronologia, temi e animazioni accessibili direttamente nel browser.",
        "Gioco arcade mobile-first dove guidi una folla attraverso portali, raccogli potenziamenti e affronti ondate di avversari.",
        "Tower defense fantasy mobile-first sviluppato con Phaser 3 e TypeScript, con 6 mappe, 40 ondate, 10 guardiani e progressione salvata localmente.",
        "Gioco PWA multilingua per riconoscere le bandiere del mondo, con modalità Classic e Sulla fronte, funzionamento offline e classifiche opzionali con Supabase.",
        "Gioco PWA mobile-first per riconoscere i loghi dei brand, con modalità Classic, Time Attack e Sulla fronte, profili locali e supporto in tre lingue.",
        "Utility mobile per salvare la posizione dell'auto e ritrovarla facilmente tramite mappa e posizione corrente.",
        "Repository dedicato allo studio e alla sperimentazione con Apache Spark e l'elaborazione distribuita dei dati.",
        "Fork con esempi pratici in Java per esplorare Apache Spark e i principali flussi di elaborazione dati.",
      ],
      types: ["Web app", "Gioco", "Gioco", "PWA", "PWA", "Utility", "Dati", "Fork"],
      previewAlts: ["Anteprima di SpinWheel", "Anteprima del gioco Neon Bastion", "Anteprima del gioco Green Valley Guardians", "Anteprima del gioco Flag Streak", "Anteprima del gioco Logo Streak", "Anteprima di Find My Car", "", ""],
      allRepositories: "Vedi tutti i repository",
      carouselLabel: "Carosello dei repository GitHub",
      previousLabel: "Mostra i repository precedenti",
      nextLabel: "Mostra i repository successivi",
    },
    skills: { label: "Competenze", title: ["Un profilo trasversale,", "con solide fondamenta."], groups: ["Front-end", "Back-end", "Dati", "Workflow"] },
    education: {
      label: "Formazione", title: ["Curiosità continua,", "dalle basi all'AI."],
      items: [
        { type: "Università", degree: "Informatica", school: "Università degli Studi di Milano-Bicocca", details: "Algoritmi, software design, database, reti, sistemi operativi e HCI." },
        { type: "Specializzazione", degree: "Database & Business Intelligence", school: "Philmark Informatica · Everis Italia", details: "SQL, PL/SQL, Data Warehouse, ETL, OLAP e Big Data." },
        { type: "Diploma", degree: "Perito Informatico", school: "I.T.I. Altiero Spinelli · Sesto San Giovanni", details: "Le fondamenta tecniche da cui è iniziato tutto." },
      ],
    },
    contact: { eyebrow: "Restiamo in contatto", title: ["Conosciamoci", "meglio."], copy: "Mi fa piacere entrare in contatto con professionisti, aziende e persone interessate a software, dati e intelligenza artificiale." },
  },
  en: {
    pageTitle: "Hugo Aldo Reynoso · Software Developer in Milan",
    languageLabel: "Select language",
    brandAria: "Back to the top",
    navigationAria: "Main navigation",
    explore: "Explore",
    nav: ["Profile", "Experience", "Projects", "Skills", "Education", "Contact"],
    sidebarTagline: "Software, data and AI",
    location: "Milan, Italy",
    socialAria: "Social profiles",
    hero: {
      role: "Software Developer", city: "Milan", title: "I build software.", introBefore: "Hi, I'm",
      introAfter: "a software developer specializing in the design and development of web and mobile applications. I work with Angular, Vue.js, Java and Spring Boot, with experience on complex projects for public administration, telecommunications, digital payments, healthcare and logistics. Today, I am expanding my path through artificial intelligence, exploring new ways to build software that is more useful, efficient and human-centered.",
      cta: "Explore my experience",
      facts: [{ value: "9+", label: "years in software development" }, { value: "Full-stack", label: "front-end, back-end and data" }, { value: "3 languages", label: "Italian, Spanish, English" }],
    },
    experience: {
      label: "Experience", title: ["From problem to product,", "one layer at a time."],
      items: [
        {
          period: "Mar 2023 — present", role: "Software Developer", company: "GeneGIS GI · Full-time", location: "Milan · Hybrid",
          description: "Software consultant on enterprise projects for public administration and private companies.",
          activities: ["Development and maintenance of web applications with Angular, Java and Spring Boot.", "New features and application refactoring with Vue.js and Java.", "End-to-end development of a hybrid mobile application with Vue.js and Ionic for field operations staff.", "Bug fixing, optimization of existing software and REST API integration."],
        },
        {
          period: "May 2018 — Feb 2023", role: "Software Developer", company: "Idea Srl · Full-time", location: "Milan, Italy",
          description: "Full-stack developer of business applications and web portals for companies in healthcare, logistics and payments. Projects for Ospedale San Raffaele, SIApay, Lottomatica and TWScourier.",
          activities: ["Front-end development of web portals and business applications.", "Full-stack development of enterprise applications and responsive interfaces.", "Implementation of APIs, back-end logic, databases and data integrations."],
        },
        {
          period: "Dec 2017 — May 2018", role: "IT Consultant", company: "Aubay · Vodafone Italy client", location: "Milan, Italy",
          description: "Analysis and automation of business processes in the telecommunications sector.",
          activities: ["Development and maintenance of Robotic Process Automation procedures.", "Operational flow analysis and process data management."],
        },
        {
          period: "Jun 2017 — Dec 2017", role: "External IT Consultant", company: "everis Italy · Gi Group client", location: "Milan, Italy",
          description: "Consulting on ETL, data migration and data integration projects across enterprise systems.",
          activities: ["Data migration and transformation across enterprise applications.", "Development and validation of ETL processes with SQL Server Integration Services."],
        },
      ],
    },
    projects: {
      label: "Projects", title: ["Public code,", "continuous learning."], intro: "All my public repositories, from mobile-first web games to data and Apache Spark experiments.", publicLabel: "Public",
      descriptions: [
        "A mobile-first random name wheel with participants, saved lists, history, themes and accessible animations—all running directly in the browser.",
        "A mobile-first arcade game where you lead a crowd through gates, collect boosts and face waves of opponents.",
        "A mobile-first fantasy tower defense built with Phaser 3 and TypeScript, featuring 6 maps, 40 waves, 10 guardians and locally saved progression.",
        "A multilingual PWA for recognizing world flags, featuring Classic and Forehead modes, offline support and optional Supabase leaderboards.",
        "A mobile-first PWA for recognizing brand logos, featuring Classic, Time Attack and Forehead modes, local profiles and support for three languages.",
        "A mobile utility for saving a car's location and finding it again through a map and the current position.",
        "A repository for learning and experimenting with Apache Spark and distributed data processing.",
        "A fork containing practical Java examples for exploring Apache Spark and essential data-processing workflows.",
      ], types: ["Web app", "Game", "Game", "PWA", "PWA", "Utility", "Data", "Fork"], previewAlts: ["SpinWheel preview", "Neon Bastion game preview", "Green Valley Guardians game preview", "Flag Streak game preview", "Logo Streak game preview", "Find My Car preview", "", ""], allRepositories: "View all repositories",
      carouselLabel: "GitHub repositories carousel",
      previousLabel: "Show previous repositories",
      nextLabel: "Show next repositories",
    },
    skills: { label: "Skills", title: ["A versatile profile,", "built on solid foundations."], groups: ["Front-end", "Back-end", "Data", "Workflow"] },
    education: {
      label: "Education", title: ["Continuous curiosity,", "from fundamentals to AI."],
      items: [
        { type: "University", degree: "Computer Science", school: "University of Milano-Bicocca", details: "Algorithms, software design, databases, networks, operating systems and HCI." },
        { type: "Specialization", degree: "Database & Business Intelligence", school: "Philmark Informatica · Everis Italy", details: "SQL, PL/SQL, Data Warehouse, ETL, OLAP and Big Data." },
        { type: "Diploma", degree: "IT Technician", school: "I.T.I. Altiero Spinelli · Sesto San Giovanni", details: "The technical foundations where it all began." },
      ],
    },
    contact: { eyebrow: "Let's stay in touch", title: ["Let's get to know", "each other."], copy: "I am always happy to connect with professionals, companies and people interested in software, data and artificial intelligence." },
  },
  es: {
    pageTitle: "Hugo Aldo Reynoso · Desarrollador de software en Milán",
    languageLabel: "Seleccionar idioma",
    brandAria: "Volver al inicio",
    navigationAria: "Navegación principal",
    explore: "Explorar",
    nav: ["Perfil", "Experiencia", "Proyectos", "Competencias", "Formación", "Contacto"],
    sidebarTagline: "Software, datos e IA",
    location: "Milán, Italia",
    socialAria: "Perfiles sociales",
    hero: {
      role: "Desarrollador de software", city: "Milán", title: "Creo software.", introBefore: "Hola, soy",
      introAfter: "desarrollador de software especializado en el diseño y desarrollo de aplicaciones web y móviles. Trabajo con Angular, Vue.js, Java y Spring Boot y he adquirido experiencia en proyectos complejos para la Administración Pública, telecomunicaciones, pagos digitales, sanidad y logística. Hoy amplío mi trayectoria con la inteligencia artificial, explorando nuevas formas de crear software más útil, eficiente y cercano a las personas.",
      cta: "Descubre mi experiencia",
      facts: [{ value: "9+", label: "años en desarrollo" }, { value: "Full-stack", label: "front-end, back-end y datos" }, { value: "3 idiomas", label: "italiano, español, inglés" }],
    },
    experience: {
      label: "Experiencia", title: ["Del problema al producto,", "capa a capa."],
      items: [
        {
          period: "mar 2023 — actualidad", role: "Desarrollador de software", company: "GeneGIS GI · Tiempo completo", location: "Milán · Híbrido",
          description: "Consultor de software en proyectos empresariales para la Administración Pública y empresas privadas.",
          activities: ["Desarrollo y mantenimiento de aplicaciones web con Angular, Java y Spring Boot.", "Nuevas funcionalidades y refactorización de aplicaciones con Vue.js y Java.", "Desarrollo integral de una aplicación móvil híbrida con Vue.js e Ionic para personal operativo de campo.", "Corrección de errores, optimización del software existente e integración con API REST."],
        },
        {
          period: "may 2018 — feb 2023", role: "Desarrollador de software", company: "Idea Srl · Tiempo completo", location: "Milán, Italia",
          description: "Desarrollador full-stack de aplicaciones empresariales y portales web para compañías de los sectores sanitario, logístico y de pagos. Proyectos para Ospedale San Raffaele, SIApay, Lottomatica y TWScourier.",
          activities: ["Desarrollo front-end de portales y aplicaciones empresariales web.", "Desarrollo full-stack de aplicaciones corporativas e interfaces adaptables.", "Implementación de API, lógica back-end, bases de datos e integraciones de datos."],
        },
        {
          period: "dic 2017 — may 2018", role: "Consultor de TI", company: "Aubay · Cliente Vodafone Italia", location: "Milán, Italia",
          description: "Análisis y automatización de procesos empresariales en el sector de las telecomunicaciones.",
          activities: ["Desarrollo y mantenimiento de procedimientos de automatización robótica de procesos.", "Análisis de flujos operativos y gestión de datos de procesos."],
        },
        {
          period: "jun 2017 — dic 2017", role: "Consultor externo de TI", company: "everis Italia · Cliente Gi Group", location: "Milán, Italia",
          description: "Consultoría en proyectos de ETL, migración e integración de datos entre sistemas empresariales.",
          activities: ["Migración y transformación de datos entre aplicaciones empresariales.", "Desarrollo y validación de procesos ETL con SQL Server Integration Services."],
        },
      ],
    },
    projects: {
      label: "Proyectos", title: ["Código público,", "aprendizaje continuo."], intro: "Todos mis repositorios públicos, desde juegos web mobile-first hasta experimentos con datos y Apache Spark.", publicLabel: "Público",
      descriptions: [
        "Ruleta aleatoria mobile-first para elegir un nombre: participantes, listas guardadas, historial, temas y animaciones accesibles directamente en el navegador.",
        "Juego arcade mobile-first en el que guías una multitud por portales, recoges mejoras y te enfrentas a oleadas de adversarios.",
        "Tower defense de fantasía mobile-first desarrollado con Phaser 3 y TypeScript, con 6 mapas, 40 oleadas, 10 guardianes y progreso guardado localmente.",
        "Juego PWA multilingüe para reconocer las banderas del mundo, con modos Clásico y En la frente, funcionamiento offline y clasificaciones opcionales con Supabase.",
        "Juego PWA mobile-first para reconocer logotipos de marcas, con modos Clásico, Contrarreloj y En la frente, perfiles locales y soporte en tres idiomas.",
        "Utilidad móvil para guardar la posición del coche y encontrarlo fácilmente mediante mapa y ubicación actual.",
        "Repositorio para aprender y experimentar con Apache Spark y el procesamiento distribuido de datos.",
        "Fork con ejemplos prácticos en Java para explorar Apache Spark y los principales flujos de procesamiento de datos.",
      ], types: ["Aplicación web", "Juego", "Juego", "PWA", "PWA", "Utilidad", "Datos", "Fork"], previewAlts: ["Vista previa de SpinWheel", "Vista previa del juego Neon Bastion", "Vista previa del juego Green Valley Guardians", "Vista previa del juego Flag Streak", "Vista previa del juego Logo Streak", "Vista previa de Find My Car", "", ""], allRepositories: "Ver todos los repositorios",
      carouselLabel: "Carrusel de repositorios de GitHub",
      previousLabel: "Mostrar repositorios anteriores",
      nextLabel: "Mostrar repositorios siguientes",
    },
    skills: { label: "Competencias", title: ["Un perfil versátil,", "con bases sólidas."], groups: ["Front-end", "Back-end", "Datos", "Flujo de trabajo"] },
    education: {
      label: "Formación", title: ["Curiosidad constante,", "desde las bases hasta la IA."],
      items: [
        { type: "Universidad", degree: "Informática", school: "Universidad de Milano-Bicocca", details: "Algoritmos, diseño de software, bases de datos, redes, sistemas operativos e HCI." },
        { type: "Especialización", degree: "Database & Business Intelligence", school: "Philmark Informatica · Everis Italia", details: "SQL, PL/SQL, Data Warehouse, ETL, OLAP y Big Data." },
        { type: "Diploma", degree: "Técnico informático", school: "I.T.I. Altiero Spinelli · Sesto San Giovanni", details: "Las bases técnicas con las que comenzó todo." },
      ],
    },
    contact: { eyebrow: "Sigamos en contacto", title: ["Conozcámonos", "mejor."], copy: "Me interesa conectar con profesionales, empresas y personas interesadas en el software, los datos y la inteligencia artificial." },
  },
};
