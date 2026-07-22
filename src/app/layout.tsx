import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maurellio Christopher Yonathan — Portfolio",
  description:
    "Portfolio website Maurellio Christopher Yonathan. Mahasiswa S1 Sistem Informasi Telkom University, Aspiring AI/ML Engineer, dan Chairman of MTO FRI.",
  keywords: [
    "Maurellio Christopher Yonathan",
    "Portfolio",
    "Sistem Informasi",
    "Telkom University",
    "AI/ML Engineer",
    "MTO FRI",
    "Next.js",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Maurellio Christopher Yonathan" }],
  openGraph: {
    title: "Maurellio Christopher Yonathan — Portfolio",
    description:
      "Mahasiswa S1 Sistem Informasi Telkom University | Aspiring AI/ML Engineer | Chairman of MTO FRI",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
