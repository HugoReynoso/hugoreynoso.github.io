# Hugo Aldo Reynoso — Personal Website

**🌐 Sito: [hugoreynoso.github.io](https://hugoreynoso.github.io/)** · [Progetti](https://hugoreynoso.github.io/progetti/) · [LinkedIn](https://www.linkedin.com/in/hugo-aldo-reynoso/)

Personal portfolio website of **Hugo Aldo Reynoso**, Senior Full-Stack Developer in Milan (Java, Spring Boot, Angular, Vue.js).

This repository contains the source code of the site. It presents my professional background, selected projects, technical skills, and contact information, with a downloadable CV.

The website was designed to support my personal brand as a software developer in Milan and to provide recruiters, companies, and other developers with a clear overview of my experience and interests.

## Features

- Professional profile and introduction
- Work experience timeline
- Selected projects with live demos and source code
- Multilingual content (Italian, English, Spanish)
- SEO: structured data (schema.org), Open Graph, sitemap, optimized WebP images
- Technical skills grouped by area
- Downloadable CV (PDF)
- Contact links for email, LinkedIn, GitHub, and Instagram
- Responsive layout optimized for desktop, tablet, and mobile devices
- Accessible semantic structure and touch-friendly navigation

## Technologies

- **React 19** — component-based user interface
- **TypeScript** — typed application code
- **Vinext** — React framework and server-side rendering
- **Vite** — development and production build tooling
- **HTML5** — semantic page structure
- **CSS3** — custom responsive design, layout, and visual styling
- **Tailwind CSS 4** — styling utilities available in the project
- **Git and GitHub** — version control and source-code hosting

## Local Development

### Requirements

- Node.js 22.13 or newer
- npm

### Installation

```bash
git clone https://github.com/HugoReynoso/hugoreynoso.github.io.git
cd hugoreynoso.github.io
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Commands

```bash
npm run dev
npm run build
npm run start
npm run test
npm run lint
```

## Project Structure

```text
app/
  globals.css        Global styles and responsive layout
  layout.tsx         Root layout, SEO metadata and structured data
  page.tsx           Portfolio page structure and project list
  translations.ts    Italian, English and Spanish copy
public/
  progetti/          Standalone projects page (/progetti/)
  projects/          Project previews (WebP)
  sitemap.xml        Sitemap with image entries
  robots.txt
tests/
  seo.test.mjs       Checks metadata, images and translations
```

Deployment: every push to `main` is built and published to GitHub Pages by `.github/workflows/deploy-pages.yml`.

## Author

**Hugo Aldo Reynoso**  
Senior Full-Stack Developer based in Milan, Italy  
[hugoreynoso.github.io](https://hugoreynoso.github.io/)

- [LinkedIn](https://www.linkedin.com/in/hugo-aldo-reynoso/)
- [GitHub](https://github.com/HugoReynoso)
- [Instagram](https://www.instagram.com/hugoaldorey/)

## License

This project is intended for personal portfolio use. All personal content and images belong to Hugo Aldo Reynoso.
