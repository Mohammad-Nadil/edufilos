import { Amiri, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import PublicHeader from "@/components/layouts/PublicHeader";
import {} from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
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
      className={`${amiri.variable} ${hindSiliguri.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PublicHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
