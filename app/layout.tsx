import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = isGitHubPages
  ? "https://hugoreynoso.github.io"
  : "https://hugo-aldo-reynoso.hugoaldoreynoso.chatgpt.site";
// L'URL canonico è sempre quello pubblico su GitHub Pages, anche per la copia di anteprima.
const canonicalUrl = "https://hugoreynoso.github.io/";
const socialImage = `${canonicalUrl}og-image.jpg`;
const portraitImage = `${canonicalUrl}hugo-reynoso.jpg`;
const title = "Hugo Aldo Reynoso | Senior Full-Stack Developer Java e Angular a Milano";
const description =
  "Hugo Aldo Reynoso, Senior Full-Stack Developer a Milano con oltre 7 anni di esperienza: Java, Spring Boot, Angular, Vue.js e Ionic per applicazioni web e mobile enterprise.";

const sameAs = [
  "https://www.linkedin.com/in/hugo-aldo-reynoso/",
  "https://github.com/HugoReynoso",
  "https://www.instagram.com/hugoaldorey/",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: "Hugo Aldo Reynoso",
      alternateName: ["Hugo Reynoso", "Hugo Aldo Reynoso Portfolio"],
      description,
      inLanguage: "it-IT",
      publisher: { "@id": `${canonicalUrl}#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${canonicalUrl}#profilepage`,
      url: canonicalUrl,
      name: title,
      description,
      inLanguage: "it-IT",
      isPartOf: { "@id": `${canonicalUrl}#website` },
      mainEntity: { "@id": `${canonicalUrl}#person` },
      primaryImageOfPage: { "@type": "ImageObject", url: portraitImage },
      dateModified: "2026-09-29",
    },
    {
      "@type": "Person",
      "@id": `${canonicalUrl}#person`,
      name: "Hugo Aldo Reynoso",
      alternateName: "Hugo Reynoso",
      givenName: "Hugo Aldo",
      familyName: "Reynoso",
      url: canonicalUrl,
      image: portraitImage,
      email: "mailto:HugoAldoReynoso@gmail.com",
      jobTitle: "Senior Full-Stack Developer",
      description,
      address: { "@type": "PostalAddress", addressLocality: "Milano", addressRegion: "Lombardia", addressCountry: "IT" },
      worksFor: { "@type": "Organization", name: "GeneGIS GI" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Università degli Studi di Milano-Bicocca" },
        { "@type": "HighSchool", name: "Istituto Tecnico Industriale Altiero Spinelli" },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Full-Stack Developer",
        occupationLocation: { "@type": "City", name: "Milano" },
        skills: "Java, Spring Boot, Angular, Vue.js, TypeScript, Ionic, REST API, SQL",
      },
      knowsLanguage: ["es", "it", "en"],
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Angular",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Ionic",
        "REST API",
        "PostgreSQL",
        "SQL Server",
        "Apache Spark",
        "Sviluppo software full-stack",
        "Intelligenza artificiale",
      ],
      sameAs,
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f2f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1114" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Hugo Aldo Reynoso",
  keywords: [
    "Hugo Aldo Reynoso",
    "Hugo Reynoso",
    "Senior Full-Stack Developer Milano",
    "sviluppatore full-stack Milano",
    "Java developer Milano",
    "Spring Boot developer Milano",
    "Angular developer Milano",
    "Vue.js developer Milano",
    "sviluppatore software Milano",
  ],
  authors: [{ name: "Hugo Aldo Reynoso", url: canonicalUrl }],
  creator: "Hugo Aldo Reynoso",
  alternates: { canonical: canonicalUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title,
    description,
    type: "profile",
    url: canonicalUrl,
    siteName: "Hugo Aldo Reynoso",
    locale: "it_IT",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Hugo Aldo Reynoso – Senior Full-Stack Developer a Milano" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  // Incolla qui il codice di verifica di Google Search Console quando lo attivi:
  // verification: { google: "IL_TUO_CODICE" },
};

// Nasconde la pagina finché React non applica la lingua preferita (se diversa dall'italiano),
// così chi naviga in EN/ES non vede il testo cambiare. Timeout di sicurezza se lo script non parte.
const localeBootScript = `try{var l=localStorage.getItem("portfolio-language");if(l!=="it"&&l!=="en"&&l!=="es"){var n=(navigator.language||"").toLowerCase();l=n.indexOf("es")===0?"es":n.indexOf("en")===0?"en":"it"}if(l!=="it"){var d=document.documentElement;d.classList.add("locale-pending");setTimeout(function(){d.classList.remove("locale-pending")},1500)}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootScript }} />
        <meta property="profile:first_name" content="Hugo Aldo" />
        <meta property="profile:last_name" content="Reynoso" />
        <link rel="preload" as="image" href="/hugo-reynoso.webp" type="image/webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
