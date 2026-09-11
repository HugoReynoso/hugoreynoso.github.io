"use client";

import { useEffect, useRef, useState } from "react";
import { type Locale, portfolioCopy } from "./translations";

const navTargets = ["#profilo", "#esperienza", "#progetti", "#competenze", "#formazione", "#contatti"];
const locales: Locale[] = ["it", "en", "es"];

const experienceTech = [
  ["Angular 6/8", "Vue.js", "Ionic", "Java", "Spring Boot", "REST API", "C#", "SQL", "Git", "Agile/Scrum"],
  ["Angular", "TypeScript", "JavaScript", "Bootstrap", "Java", "Spring", "Spring Boot", "REST API", "PostgreSQL", "MySQL", "SQL Server"],
  ["RPA", "Automate 7", "Oracle SQL", "Toad for Oracle", "Excel"],
  ["SQL Server", "SSIS", "T-SQL", "Visual Basic"],
];

const projects = [
  { name: "Crownfall — Puzzle Rescue", path: "HugoReynoso / puzzle-rescue", language: "React · TypeScript · Phaser 3", href: "https://github.com/HugoReynoso/puzzle-rescue", preview: "/projects/crownfall-puzzle-rescue.jpg" },
  { name: "SpinWheel", path: "HugoReynoso / spin-wheel", language: "React · TypeScript", href: "https://github.com/HugoReynoso/spin-wheel", preview: "/projects/spin-wheel.jpg" },
  { name: "Neon Bastion", path: "HugoReynoso / game-sparatutto", language: "TypeScript · Phaser 3", href: "https://github.com/HugoReynoso/game-sparatutto", preview: "/projects/neon-bastion.png" },
  { name: "Green Valley Guardians", path: "HugoReynoso / game-tower-defense", language: "TypeScript · Phaser 3", href: "https://github.com/HugoReynoso/game-tower-defense", preview: "/projects/green-valley-guardians.jpg" },
  //{ name: "Personal Portfolio", path: "HugoReynoso / hugoreynoso.github.io", language: "React · TypeScript", href: "https://github.com/HugoReynoso/hugoreynoso.github.io" },
  { name: "Flag Streak", path: "HugoReynoso / game-flags", language: "Vue 3 · TypeScript", href: "https://github.com/HugoReynoso/game-flags", preview: "/projects/flag-streak.jpg" },
  { name: "Logo Streak", path: "HugoReynoso / game-logos", language: "React · TypeScript", href: "https://github.com/HugoReynoso/game-logos", preview: "/projects/logo-streak.jpg" },
  { name: "Find My Car", path: "HugoReynoso / utility-FindMyCar", language: "Flutter", href: "https://github.com/HugoReynoso/utility-FindMyCar", preview: "/projects/find-my-car.png" },
  { name: "Spark", path: "HugoReynoso / Spark", language: "Apache Spark", href: "https://github.com/HugoReynoso/Spark" },
  { name: "Spark Examples", path: "HugoReynoso / spark-examples", language: "Java · Spark", href: "https://github.com/HugoReynoso/spark-examples" },
];

function preferredLocale(): Locale {
  const saved = window.localStorage.getItem("portfolio-language");
  if (saved === "it" || saved === "en" || saved === "es") return saved;
  const browserLocale = window.navigator.language.toLowerCase();
  if (browserLocale.startsWith("es")) return "es";
  if (browserLocale.startsWith("en")) return "en";
  return "it";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("it");
  const [isLanguageReady, setIsLanguageReady] = useState(false);
  const [firstVisibleProject, setFirstVisibleProject] = useState(0);
  const [canScrollProjectsBack, setCanScrollProjectsBack] = useState(false);
  const [canScrollProjectsForward, setCanScrollProjectsForward] = useState(true);
  const projectTrackRef = useRef<HTMLDivElement>(null);
  const copy = portfolioCopy[locale];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLocale(preferredLocale());
      setIsLanguageReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLanguageReady) return;
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
    window.localStorage.setItem("portfolio-language", locale);
  }, [copy.pageTitle, isLanguageReady, locale]);

  const updateProjectPosition = () => {
    const track = projectTrackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".project-card");
    if (!track || !firstCard) return;
    const step = firstCard.offsetWidth + 16;
    setFirstVisibleProject(Math.min(projects.length - 1, Math.round(track.scrollLeft / step)));
    setCanScrollProjectsBack(track.scrollLeft > 2);
    setCanScrollProjectsForward(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateProjectPosition);
    window.addEventListener("resize", updateProjectPosition);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateProjectPosition);
    };
  }, []);

  const scrollProjects = (direction: -1 | 1) => {
    const track = projectTrackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".project-card");
    if (!track || !firstCard) return;
    track.scrollBy({ left: direction * (firstCard.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <main>
      <aside className="sidebar">
        <div className="sidebar-top">
          <a className="brand" href="#profilo" aria-label={copy.brandAria}><span className="brand-mark">HR</span><span>Hugo Reynoso</span></a>
          <div className="language-switcher" role="group" aria-label={copy.languageLabel}>
            {locales.map((language) => (
              <button type="button" lang={language} aria-pressed={locale === language} className={locale === language ? "active" : ""} onClick={() => setLocale(language)} key={language}>
                {language.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <nav aria-label={copy.navigationAria}>
          <p className="nav-label">{copy.explore}</p>
          {copy.nav.map((label, index) => <a className="nav-item" href={navTargets[index]} key={navTargets[index]}><span>{label}</span><span className="nav-chevron" aria-hidden="true" /></a>)}
        </nav>
        <div className="sidebar-footer"><span className="status-dot" /> {copy.sidebarTagline}<small>{copy.location}</small></div>
      </aside>

      <aside className="social-rail" aria-label={copy.socialAria}>
        <span className="social-rail-label">Social</span>
        <a className="linkedin" href="https://www.linkedin.com/in/hugo-aldo-reynoso/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="social-icon" aria-hidden="true">in</span><span className="social-name">LinkedIn</span><span className="social-external" aria-hidden="true">↗</span></a>
        <a className="github" href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="social-icon" aria-hidden="true">GH</span><span className="social-name">GitHub</span><span className="social-external" aria-hidden="true">↗</span></a>
        <a className="instagram" href="https://www.instagram.com/hugoaldorey/" target="_blank" rel="noreferrer" aria-label="Instagram"><span className="social-icon instagram-icon" aria-hidden="true">◎</span><span className="social-name">Instagram</span><span className="social-external" aria-hidden="true">↗</span></a>
      </aside>

      <div className="content">
        <section className="hero" id="profilo">
          <div className="eyebrow"><span>{copy.hero.role}</span><span>·</span><span>{copy.hero.city}</span></div>
          <div className="hero-heading">
            <figure className="portrait-card">
              <img src="/hugo-reynoso.jpg" alt="Hugo Aldo Reynoso" />
              <figcaption><span className="status-dot" /> @hugoaldoreynoso</figcaption>
            </figure>
            <h1>{copy.hero.title}</h1>
          </div>
          <p className="hero-copy">{copy.hero.introBefore} <strong>Hugo Aldo Reynoso</strong>, {copy.hero.introAfter}</p>
          <div className="hero-actions">
            <a className="button primary" href="#esperienza">{copy.hero.cta} <span>↓</span></a>
            <a className="button secondary" href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
          <div className="quick-facts">
            {copy.hero.facts.map((fact) => <div key={fact.value}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
          </div>
        </section>

        <section id="esperienza">
          <header className="section-heading"><span>{copy.experience.label}</span><h2>{copy.experience.title[0]}<br />{copy.experience.title[1]}</h2></header>
          <div className="timeline">{copy.experience.items.map((item, index) => (
            <article className="experience-card" key={`${item.company}-${item.period}`}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}<span>{item.location}</span></p>
                <p>{item.description}</p>
                <ul className="experience-activities">{item.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
                <div className="tags">{experienceTech[index].map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          ))}</div>
        </section>

        <section id="progetti">
          <header className="section-heading">
            <span>{copy.projects.label}</span>
            <h2>{copy.projects.title[0]}<br />{copy.projects.title[1]}</h2>
            <p className="section-intro">{copy.projects.intro}</p>
          </header>
          <div className="project-carousel-controls">
            <span className="project-counter" aria-live="polite">{firstVisibleProject + 1} / {projects.length}</span>
            <button type="button" onClick={() => scrollProjects(-1)} disabled={!canScrollProjectsBack} aria-label={copy.projects.previousLabel}>←</button>
            <button type="button" onClick={() => scrollProjects(1)} disabled={!canScrollProjectsForward} aria-label={copy.projects.nextLabel}>→</button>
          </div>
          <div
            className="project-track"
            ref={projectTrackRef}
            onScroll={updateProjectPosition}
            role="region"
            aria-label={copy.projects.carouselLabel}
          >
            {projects.map((project, index) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                {project.preview && <img className="project-preview" src={project.preview} alt={copy.projects.previewAlts[index]} width="1200" height="675" loading="lazy" decoding="async" />}
                <div className="repo-top"><span className="repo-icon">⌘</span><span>{copy.projects.publicLabel}</span></div>
                <p className="repo-path">{project.path}</p>
                <h3>{project.name}<span>↗</span></h3>
                <p className="repo-description">{copy.projects.descriptions[index]}</p>
                <div className="repo-meta"><span><i />{project.language}</span><span>{copy.projects.types[index]}</span></div>
              </a>
            ))}
          </div>
          <a className="github-profile-link" href="https://github.com/HugoReynoso" target="_blank" rel="noreferrer">
            <span>github.com/HugoReynoso</span><span>{copy.projects.allRepositories} ↗</span>
          </a>
        </section>

        <section id="competenze">
          <header className="section-heading"><span>{copy.skills.label}</span><h2>{copy.skills.title[0]}<br />{copy.skills.title[1]}</h2></header>
          <div className="skill-grid">{copy.skills.groups.map((title, index) => (
            <article className="skill-card" key={title}><h3>{title}</h3><ul>{copy.skills.items[index].map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
          ))}</div>
        </section>

        <section id="formazione">
          <header className="section-heading"><span>{copy.education.label}</span><h2>{copy.education.title[0]}<br />{copy.education.title[1]}</h2></header>
          <div className="education-list">
            {copy.education.items.map((item) => <article key={item.type}><span>{item.type}</span><div><h3>{item.degree}</h3><p>{item.school}</p><small>{item.details}</small></div></article>)}
          </div>
        </section>

        <section className="contact" id="contatti">
          <p className="eyebrow">{copy.contact.eyebrow}</p><h2>{copy.contact.title[0]}<br />{copy.contact.title[1]}</h2>
          <p className="contact-copy">{copy.contact.copy}</p>
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
