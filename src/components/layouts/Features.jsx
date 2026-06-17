"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { useLanguage } from "@/context/LanguageContext";
import MosqueImg from "@/../public/wall.jpg";
import { FaCheck, FaCloud, FaUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiSchoolLine } from "react-icons/ri";
import BackgroundImg from "@/../public/texture.jpg";

export default function Features() {
  const { lang } = useLanguage();

  const features = [
    { en: "Cloud Based & Secure", bn: "ক্লাউড বেসড এবং সম্পূর্ণ নিরাপদ" },
    { en: "Multi-User Access & Roles", bn: "মাল্টি-ইউজার অ্যাক্সেস এবং রোলস" },
    { en: "Regular Backup & Updates", bn: "নিয়মিত ব্যাকআপ এবং অটো আপডেট" },
    { en: "Works on All Devices", bn: "মোবাইল, ট্যাব ও কম্পিউটার ফ্রেন্ডলি" },
  ];

  const stats = [
    {
      icon: RiSchoolLine,
      count: "500+",
      en: "Madrashas Trust Us",
      bn: "৫০০+ মাদরাসার বিশ্বস্ত পার্টনার",
    },
    {
      icon: HiOutlineUserGroup,
      count: "50,000+",
      en: "Students Managed",
      bn: "৫০,০০০+ শিক্ষার্থী পরিচালিত",
    },
    {
      icon: GrGroup,
      count: "2,000+",
      en: "Teachers & Staff",
      bn: "২,০০০+ শিক্ষক ও স্টাফ",
    },
    {
      icon: IoShieldCheckmarkOutline,
      count: "99.9%",
      en: "Uptime & Security",
      bn: "৯৯.৯% আপটাইম ও সিকিউরিটি",
    },
  ];

  return (
    <section
      id="features"
      className="py-10 xl:py-0  relative overflow-hidden select-none"
    >
      {BackgroundImg && (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:brightness-50 dark:opacity-10">
          <Image
            src={BackgroundImg}
            alt="Background Texture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>
      )}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="xl:col-span-5 flex flex-col space-y-6">
            <div className="text-xs font-bold text-primary uppercase tracking-widest border-b border-gold/20 pb-1 w-fit">
              {lang === "BN"
                ? "পাওয়ারফুল • সিম্পল • বিশ্বস্ত"
                : "Powerful • Simple • Reliable"}
            </div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {lang === "BN" ? (
                <>
                  আধুনিক প্রযুক্তির সাথে <br />
                  <span className="text-gold">অ্যাডভান্সড সিস্টেম</span>
                </>
              ) : (
                <>
                  Advanced System with <br />
                  <span className="text-gold">Modern Technology</span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed max-w-md">
              {lang === "BN"
                ? "EduFilos তৈরি হয়েছে লেটেস্ট টেকনোলজি দিয়ে, যা আপনার মাদরাসা পরিচালনাকে করবে দ্রুত ও নিরাপদ। যেকোনো স্থান থেকে যেকোনো ডিভাইসে অ্যাক্সেস করুন নির্বিঘ্নে।"
                : "EduFilos is built with modern technology to deliver a fast, secure and reliable experience. Access your madrasha data anytime, anywhere."}
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheck
                    className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-xs sm:text-sm font-bold text-foreground/80">
                    {lang === "BN" ? item.bn : item.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden  xl:col-span-3 xl:flex justify-center items-center relative aspect-3/5 w-full mx-auto">
            <svg className="absolute w-0 h-0" width="0" height="0">
              <defs>
                <clipPath id="mihrab-arch" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0.5 0 
                 C 0.43 0.05, 0.30 0.08, 0.20 0.14 
                 C 0.08 0.22, 0 0.33, 0 0.48 
                 L 0 1 
                 L 1 1 
                 L 1 0.48 
                 C 1 0.33, 0.92 0.22, 0.80 0.14 
                 C 0.70 0.08, 0.57 0.05, 0.5 0"
                  />
                </clipPath>
              </defs>
            </svg>
            <div
              className="relative w-full h-full bg-linear-to-b from-gold via-gold/60 to-gold/20 p-[2.5px] shadow-2xl group transition-all duration-500"
              style={{ clipPath: "url(#mihrab-arch)" }}
            >
              <div
                className="relative w-full h-full bg-[#0b241b] overflow-hidden"
                style={{ clipPath: "url(#mihrab-arch)" }}
              >
                {MosqueImg ? (
                  <Image
                    src={MosqueImg}
                    alt="Islamic Mosque Architecture View"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-b from-amber-950/20 via-background to-background flex items-center justify-center text-center p-4">
                    <span className="text-xs text-muted-foreground">
                      Mosque Frame Image
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-10" />
              </div>
            </div>
            <div className="absolute -left-10 bottom-[30%] flex items-center justify-center drop-shadow-md z-20 animate-bounce [animation-duration:3s]">
              <FaCloud className="text-8xl text-primary" />
              <FaUser className="text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </div>
          <div className="xl:col-span-4 ">
            <div className="bg-primary dark:bg-primary/50 border border-border-custom rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col space-y-8">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="text-4xl p-1 rounded-xl  flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-foreground transition-all duration-300 shrink-0 drop-shadow-md">
                      <Icon className="" strokeWidth={1.8} />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold text-gold  tracking-tight leading-none mb-1 font-mono">
                        {stat.count}
                      </span>
                      <span className="text-xs font-semibold text-muted tracking-wide">
                        {lang === "BN" ? stat.bn : stat.en}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
