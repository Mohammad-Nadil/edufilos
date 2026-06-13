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

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-english",
});

const notoBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bangla",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

export const metadata = {
  title: "EduFilos - Empowering Madrashas with Technology",
  description:
    "EduFilos is a comprehensive SaaS platform designed to help madrashas manage their operations efficiently. From student enrollment to fee management, our user-friendly interface and powerful features make it easy for madrashas to focus on what matters most - providing quality education.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={` ${playfair.variable} ${notoBengali.variable} ${amiri.variable} ${roboto.variable} h-full antialiased
      dark `}
    >
      <body suppressHydrationWarning className=" flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <PublicHeader />
            <main className="flex-1  ">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
