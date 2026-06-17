"use client";

import React from "react";
import Link from "next/link";
import Container from "../ui/Container";
import LogoIcon from "../ui/LogoIcon";
import { useLanguage } from "@/context/LanguageContext";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import agencyLogo from "@/../public/devonionXLogo.png";

export default function Footer() {
  const { lang } = useLanguage();

  const socials = [
    { icon: FaFacebook, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaLinkedin, href: "#" },
  ];

  const quickLinks = [
    { href: "#home", en: "Home", bn: "হোম" },
    { href: "#features", en: "Features", bn: "ফিচারসমূহ" },
    { href: "#pricing", en: "Pricing", bn: "প্রাইসিং" },
    { href: "#modules", en: "Modules", bn: "মডিউলস" },
    { href: "#about", en: "About Us", bn: "আমাদের সম্পর্কে" },
  ];

  const resources = [
    { href: "#blog", en: "Blog", bn: "ব্লগ" },
    { href: "#help", en: "Help Center", bn: "হেল্প সেন্টার" },
    { href: "#docs", en: "Documentation", bn: "ডকুমেন্টেশন" },
    { href: "#privacy", en: "Privacy Policy", bn: "প্রাইভেসি পলিসি" },
    { href: "#terms", en: "Terms & Conditions", bn: "শর্তাবলী" },
  ];

  return (
    <footer className="relative   pt-16 pb-8   overflow-hidden select-none">
      <div className="absolute right-0 bottom-0 w-[40%] h-[90%] opacity-10 dark:opacity-5 pointer-events-none z-0 mix-blend-screen hidden md:block">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-gold"
          fill="currentColor"
        >
          <path d="M70 100 V40 Q75 30 80 40 V100 M80 100 V20 Q85 5 90 20 V100 M90 100 V50 Q95 40 100 50 V100" />
          <path d="M40 100 V60 Q55 35 70 60 V100 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-6 pb-12 border-b border-emerald-900/40">
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-sm">
                <LogoIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black  tracking-tight leading-none font-roboto">
                  EduFilos
                </span>
                <span className="text-[8px] text-primary font-medium tracking-wide mt-0.5">
                  {lang === "BN"
                    ? "মাদরাসা ম্যানেজমেন্ট সিস্টেম"
                    : "Madrasha Management System"}
                </span>
              </div>
            </Link>

            <p className="text-xs text-muted font-medium leading-relaxed max-w-55">
              {lang === "BN"
                ? "প্রযুক্তির আধুনিক ছোঁয়ায় মাদরাসা ব্যবস্থাপনায় আনুন নতুন গতি।"
                : "Empowering Madrashas with Technology for a Better Tomorrow."}
            </p>

            <div className="flex items-center gap-2 pt-2">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    className="w-7 h-7 rounded bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-primary text-muted flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold  tracking-wider uppercase border-b border-gold/20 pb-1 w-fit">
              {lang === "BN" ? "কুইক লিংকস" : "Quick Links"}
            </h4>
            <ul className="flex flex-col space-y-2 text-xs font-medium text-muted">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {lang === "BN" ? link.bn : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold  tracking-wider uppercase border-b border-gold/20 pb-1 w-fit">
              {lang === "BN" ? "রিসোর্সসমূহ" : "Resources"}
            </h4>
            <ul className="flex flex-col space-y-2 text-xs font-medium text-muted">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {lang === "BN" ? link.bn : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold  tracking-wider uppercase border-b border-gold/20 pb-1 w-fit">
              {lang === "BN" ? "যোগাযোগ" : "Contact Us"}
            </h4>
            <ul className="flex flex-col space-y-3 text-xs font-medium text-muted">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="break-all">info@edufilos.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>www.edufilos.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  123 Islamic Street, Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-2  flex flex-col items-center = justify-center text-center lg:text-right mt-6 lg:mt-0 space-y-2">
            <h3 className="text-2xl xs:text-4xl lg:text-2xl xl:text-4xl font-arabic text-gold tracking-wide leading-none font-medium font-ar">
              جَزَاكُمُ اللَّهُ خَيْرًا
            </h3>
            <p className="text-xs xs:text-sm text-muted font-medium italic tracking-wider font-en">
              "Jazakumullahu Khairan"
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-medium text-slate-500 gap-4">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="text-muted font-semibold">EduFilos</span>. All
            rights reserved.
          </span>

          <Link
            href="https://devonionx.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-gold transition-colors duration-200 group"
          >
            <span>
              {lang === "BN" ? "ডেভেলপমেন্ট পার্টনার:" : "Developed by:"}
            </span>

            <Image src={agencyLogo} alt="agency logo" className="max-w-40 contrast-0 dark:contrast-100"/>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
