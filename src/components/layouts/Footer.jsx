"use client";

import React from "react";
import Link from "next/link";
import Container from "../ui/Container"; // আপনার তৈরি করা কন্টেইনার কম্পোনেন্ট
import LogoIcon from "../ui/LogoIcon"; // আপনার লোগো আইকন
import { useLanguage } from "@/context/LanguageContext";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Globe, Mail, MapPin, Phone } from "lucide-react";


export default function Footer() {
  const { lang } = useLanguage();

  // সোশাল মিডিয়া লিংকসমূহ
  const socials = [
    { icon: FaFacebook, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaLinkedin, href: "#" },
  ];

  // কুইক লিংকস গ্রুপ
  const quickLinks = [
    { href: "#home", en: "Home", bn: "হোম" },
    { href: "#features", en: "Features", bn: "ফিচারসমূহ" },
    { href: "#pricing", en: "Pricing", bn: "প্রাইসিং" },
    { href: "#modules", en: "Modules", bn: "মডিউলস" },
    { href: "#about", en: "About Us", bn: "আমাদের সম্পর্কে" },
  ];

  // রিসোর্সেস গ্রুপ
  const resources = [
    { href: "#blog", en: "Blog", bn: "ব্লগ" },
    { href: "#help", en: "Help Center", bn: "হেল্প সেন্টার" },
    { href: "#docs", en: "Documentation", bn: "ডকুমেন্টেশন" },
    { href: "#privacy", en: "Privacy Policy", bn: "প্রাইভেসি পলিসি" },
    { href: "#terms", en: "Terms & Conditions", bn: "শর্তাবলী" },
  ];

  return (
    // মেইন ফুটার ব্যাকগ্রাউন্ড - আপনার থিমের ডিপ গ্রিন লাক্সারি ভাইব দিতে এখানে 'bg-[#0b241b]' ব্যবহার করা হয়েছে
    <footer className="relative bg-[#0b241b] dark:bg-[#071711] text-slate-200 pt-16 pb-8 border-t border-emerald-950 overflow-hidden select-none">
      
      {/* ================= ডান পাশের ব্যাকগ্রাউন্ড ওয়াটারমার্ক (মস্ক প্লেসহোল্ডার) ================= */}
      {/* ইমেজ ইম্পোর্ট করার আগ পর্যন্ত এই CSS ওয়াটারমার্কটি ডানপাশে প্রফেশনাল লুক ধরে রাখবে */}
      <div className="absolute right-0 bottom-0 w-[40%] h-[90%] opacity-10 dark:opacity-5 pointer-events-none z-0 mix-blend-screen hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="currentColor">
          {/* সিম্পল মসজিদ মিনারের ভেক্টর আর্ট প্লেসহোল্ডার */}
          <path d="M70 100 V40 Q75 30 80 40 V100 M80 100 V20 Q85 5 90 20 V100 M90 100 V50 Q95 40 100 50 V100" />
          <path d="M40 100 V60 Q55 35 70 60 V100 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* ৪টি মেইন কলামের গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-emerald-900/40">
          
          {/* ---------------- কলাম ১: লোগো ও সোশাল (lg:col-span-3) ---------------- */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-sm">
                <LogoIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-tight leading-none font-roboto">
                  EduFilos
                </span>
                <span className="text-[8px] text-emerald-400 font-medium tracking-wide mt-0.5">
                  {lang === "BN" ? "মাদরাসা ম্যানেজমেন্ট সিস্টেম" : "Madrasha Management System"}
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[220px]">
              {lang === "BN" 
                ? "প্রযুক্তির আধুনিক ছোঁয়ায় মাদরাসা ব্যবস্থাপনায় আনুন নতুন গতি।" 
                : "Empowering Madrashas with Technology for a Better Tomorrow."}
            </p>

            {/* ছোট স্কয়ার সোশাল বাটন আইকন সমূহ */}
            <div className="flex items-center gap-2 pt-2">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={idx} 
                    href={social.href}
                    className="w-7 h-7 rounded bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-[#0b241b] text-slate-300 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ---------------- কলাম ২: কুইক লিংকস (lg:col-span-2) ---------------- */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gold/20 pb-1 w-fit">
              {lang === "BN" ? "কুইক লিংকস" : "Quick Links"}
            </h4>
            <ul className="flex flex-col space-y-2 text-xs font-medium text-slate-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {lang === "BN" ? link.bn : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- কলাম ৩: রিসোর্সেস (lg:col-span-2) ---------------- */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gold/20 pb-1 w-fit">
              {lang === "BN" ? "রিসোর্সসমূহ" : "Resources"}
            </h4>
            <ul className="flex flex-col space-y-2 text-xs font-medium text-slate-400">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {lang === "BN" ? link.bn : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- কলাম ৪: কন্টাক্ট ইনফো (lg:col-span-2.5) ---------------- */}
          <div className="lg:col-span-2.5 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-gold/20 pb-1 w-fit">
              {lang === "BN" ? "যোগাযোগ" : "Contact Us"}
            </h4>
            <ul className="flex flex-col space-y-3 text-xs font-medium text-slate-400">
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
                <span className="leading-relaxed">123 Islamic Street, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* ---------------- কলাম ৫: জাজাকাল্লাহু খাইরান ক্যালিগ্রাফি (lg:col-span-2.5) ---------------- */}
          <div className="lg:col-span-2.5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right mt-6 lg:mt-0 space-y-2">
            {/* গোল্ডেন অ্যারাবিক ক্যালিগ্রাফি টেক্সট প্লেসহোল্ডার */}
            <h3 className="text-2xl sm:text-3xl font-arabic text-gold tracking-wide leading-none font-medium">
              جَزَاكُمُ اللَّهُ خَيْرًا
            </h3>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium italic tracking-wider font-en">
              "Jazakumullahu Khairan"
            </p>
          </div>

        </div>

        {/* ================= কপিরাইট বটম বার ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-medium text-slate-500 gap-2">
          <span>
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">EduFilos</span>. All rights reserved.
          </span>
          <span className="text-slate-600">
            {lang === "BN" ? "ডিজাইন ও ডেভেলপমেন্ট টিম EduFilos" : "Designed & Developed by EduFilos Team"}
          </span>
        </div>

      </Container>
    </footer>
  );
}