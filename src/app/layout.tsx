import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "ConnectCar System",
  description: "Sistema completo para gestão de revendas de veículos. Kanban de leads, WhatsApp integrado, estoque, DRE, nota fiscal e contratos — tudo em um só lugar.",
  icons: {
    icon: "/logodosistema.png",
    shortcut: "/logodosistema.png",
    apple: "/logodosistema.png",
  },
  openGraph: {
    title: "ConnectCar System",
    description: "Sistema completo para gestão de revendas de veículos. Kanban de leads, WhatsApp integrado, estoque, DRE, nota fiscal e contratos — tudo em um só lugar.",
    url: "https://apresentacao-connect.vercel.app",
    siteName: "ConnectCar System",
    images: [
      {
        url: "https://apresentacao-connect.vercel.app/logodosistema.png",
        width: 1200,
        height: 630,
        alt: "ConnectCar System — Gestão de Revendas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConnectCar System",
    description: "Sistema completo para gestão de revendas de veículos.",
    images: ["https://apresentacao-connect.vercel.app/logodosistema.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
