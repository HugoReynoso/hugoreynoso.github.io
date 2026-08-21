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
const title = "Hugo Aldo Reynoso · Software Developer a Milano";
const description = "Portfolio personale di Hugo Aldo Reynoso, software developer a Milano con esperienza in applicazioni web e mobile, dati e intelligenza artificiale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
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
  return <html lang="it"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
