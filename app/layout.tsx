import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hugo Aldo Reynoso · Software Developer a Milano",
  description: "Portfolio personale di Hugo Aldo Reynoso, software developer a Milano con esperienza in applicazioni web e mobile, dati e intelligenza artificiale.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
