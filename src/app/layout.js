import {
  Playfair_Display,
  Noto_Serif_Bengali,
  Amiri,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import PublicHeader from "@/components/layouts/PublicHeader";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal"],
  variable: "--font-english",
  display: "swap",
  preload: false,
});

const notoBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
  preload: true,
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: {
    default: "EduFilos - মাদরাসা ম্যানেজমেন্ট সফটওয়্যার",
    template: "%s | EduFilos",
  },
  description:
    "EduFilos হলো মাদরাসার জন্য সম্পূর্ণ SaaS ম্যানেজমেন্ট প্ল্যাটফর্ম — ভর্তি, ফি, শিক্ষক ম্যানেজমেন্ট সব এক জায়গায়।",
  keywords: ["মাদরাসা সফটওয়্যার", "madrasha management", "edufilos"],
  authors: [{ name: "EduFilos" }],
  openGraph: {
    title: "EduFilos - মাদরাসা ম্যানেজমেন্ট সফটওয়্যার",
    description: "মাদরাসা পরিচালনা করুন সহজে — EduFilos দিয়ে।",
    url: "https://edufilos.vercel.app",
    siteName: "EduFilos",
    locale: "bn_BD",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      translate="no"
      suppressHydrationWarning
      className={`${playfair.variable} ${notoBengali.variable} ${amiri.variable} ${roboto.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex flex-col relative overflow-x-hidden"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <Toaster position="top-center" />
            <main className="flex flex-col min-h-screen">
              <PublicHeader />
              <div className="flex-1 h-full">{children}</div>
              <Footer />
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
