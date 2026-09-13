import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = isGitHubPages
  ? "https://hugoreynoso.github.io"
  : "https://hugo-aldo-reynoso.hugoaldoreynoso.chatgpt.site";
const socialImage = `${siteUrl}/og-v3.png`;
const favicon = `${siteUrl}/favicon.svg`;
const title = "Hugo Aldo Reynoso | Senior Full-Stack Developer a Milano";
const description = "Hugo Aldo Reynoso è un Senior Full-Stack Developer a Milano, specializzato in Java, Spring Boot, Angular, Vue.js e applicazioni web e mobile enterprise.";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo Aldo Reynoso",
  url: "https://hugoreynoso.github.io/",
  jobTitle: "Senior Full-Stack Developer",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Milano", addressCountry: "IT" },
  sameAs: [
    "https://www.linkedin.com/in/hugo-aldo-reynoso/",
    "https://github.com/HugoReynoso",
    "https://www.instagram.com/hugoaldorey/",
  ],
  knowsAbout: ["Java", "Spring Boot", "Angular", "Vue.js", "TypeScript", "Ionic", "Software development", "Artificial intelligence"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["Hugo Aldo Reynoso", "Hugo Reynoso", "Senior Full-Stack Developer Milano", "Java developer Milano", "Angular developer Milano", "Vue.js developer Milano"],
  authors: [{ name: "Hugo Aldo Reynoso", url: siteUrl }],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: favicon, type: "image/svg+xml" }],
    shortcut: [favicon],
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: [{ url: socialImage, width: 1734, height: 908, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /></head><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
