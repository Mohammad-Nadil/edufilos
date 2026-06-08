"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiExternalLink, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import techfilos from "../../../public/techfilos.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
export default function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickNav = [
    { label: { BN: "হোম", EN: "Home" }, href: "#home" },
    { label: { BN: "ফিচারসমূহ", EN: "Features" }, href: "#features" },
    { label: { BN: "প্রাইসিং প্ল্যান", EN: "Pricing" }, href: "#pricing" },
    { label: { BN: "আমাদের সম্পর্কে", EN: "About Us" }, href: "#" },
    { label: { BN: "যোগাযোগ", EN: "Contact" }, href: "#" },
  ];

  const solutions = [
    { BN: "ছাত্র ব্যবস্থাপনা", EN: "Student Management" },
    { BN: "অনলাইন এডমিশন", EN: "Online Admission" },
    { BN: "পেরোল সিস্টেম", EN: "Payroll System" },
    { BN: "রেজাল্ট ম্যানেজমেন্ট", EN: "Result Management" },
    { BN: "অ্যাকাউন্টস লেজার", EN: "Account Ledger" },
  ];

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-100">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-sm shadow-emerald-600/20 select-none">
                E
              </div>
              <span className="font-black text-2xl text-slate-900 tracking-tight">
                EduFilos
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              {lang === "BN"
                ? "আধুনিক যুগের উপযোগী ইন্টেলিজেন্ট ইআরপি সল্যুশনের মাধ্যমে ইসলামিক শিক্ষাপ্রতিষ্ঠানসমূহকে ক্ষমতায়ন করা। সম্পূর্ণ পেশাদার, নিরাপদ এবং স্কেলযোগ্য।"
                : "Empowering Islamic educational institutions with intelligent ERP solutions designed for the modern age. Professional, secure, and scalable."}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-all border border-slate-100"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900  font-black uppercase  mb-6">
              {lang === "BN" ? "সহজ নেভিগেশন" : "Quick Navigation"}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {quickNav.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2 group">
                  <GoDotFill className="text-[8px] text-slate-200 group-hover:text-emerald-600 transition-colors shrink-0" />
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {lang === "BN" ? link.label.BN : link.label.EN}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase  mb-6">
              {lang === "BN" ? "আমাদের সেবাসমূহ" : "Our Solutions"}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {solutions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 group text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <FiExternalLink className="text-xs text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                  <span>{lang === "BN" ? item.BN : item.EN}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900  font-black uppercase  mb-6">
              {lang === "BN" ? "যোগাযোগ ও সাপোর্ট" : "Contact & Support"}
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <FiPhone className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 leading-none mb-1">
                    {lang === "BN" ? "কল করুন" : "Call Us"}
                  </p>
                  <a
                    href="tel:+8801700000000"
                    className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                  >
                    +880 1700-000000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <FiMail className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 leading-none mb-1">
                    {lang === "BN" ? "ইমেইল করুন" : "Mail Us"}
                  </p>
                  <a
                    href="mailto:hello@edufilos.com"
                    className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                  >
                    hello@edufilos.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-amber-500 shrink-0">
                  <FiMapPin className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 leading-none mb-1">
                    {lang === "BN" ? "অফিস ঠিকানা" : "Visit Us"}
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {lang === "BN" ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-semibold text-slate-400">
          <div className="order-3 lg:order-1 text-center lg:text-start">
            &copy; {currentYear} EduFilos.{" "}
            {lang === "BN" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </div>

          <div className="order-1 lg:order-2 flex items-center gap-1.5 text-[10px]  font-black uppercase text-slate-400">
            <span>
              {lang === "BN" ? "সার্বিক তত্ত্বাবধানে" : "Provided By"}
            </span>
            <Image
              src={techfilos}
              alt="TechFilos"
              className="w-30 h-auto object-contain"
            />
          </div>

          <div className="order-2 lg:order-3 flex items-center gap-6 font-black tracking-wider uppercase text-[10px]">
            <Link
              href="/privacy"
              className="hover:text-slate-900 transition-colors"
            >
              {lang === "BN" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-900 transition-colors"
            >
              {lang === "BN" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
