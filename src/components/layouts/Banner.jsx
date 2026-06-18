"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import BannerImg from "@/../public/banner.png";
import MacImg from "@/../public/mac.png";
import PhoneImg from "@/../public/phone.png";
import Placeholder from "@/../public/wall.jpg";
import { CheckCircle2, ShieldCheck, Tag, Zap } from "lucide-react";
import Container from "../ui/Container";

// ── constants (component এর বাইরে — re-render এ নতুন array তৈরি হবে না) ──
const MINI_FEATURES = [
  { en: "Easy To Use", bn: "সহজ ব্যবহার", icon: CheckCircle2 },
  { en: "Secure & Reliable", bn: "নিরাপদ ও বিশ্বস্ত", icon: ShieldCheck },
  { en: "Affordable Price", bn: "সাশ্রয়ী মূল্য", icon: Tag },
  { en: "Advanced System", bn: "আধুনিক সিস্টেম", icon: Zap },
];

const VIDEO_ID = "AjeBOZXOrgs";

// ── LiteYoutube — click এর আগে কোনো YouTube resource load হবে না ──
function LiteYoutube({ videoId, title = "EduFilos Demo" }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="relative w-full h-full group cursor-pointer"
      aria-label={`Play: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 1024px) 85vw, 42vw"
        className="object-cover"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />
      {/* play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 ml-1"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

// ── main component ──
export default function Banner() {
  const { lang } = useLanguage();

  return (
    <section
      id="banner"
      className="relative w-full pt-12 sm:pt-24 2xl:pt-12 flex items-center overflow-hidden"
    >
      {/* background texture */}
      <div className="absolute inset-0 z-0 saturate-50 opacity-20 pointer-events-none dark:opacity-10 dark:saturate-0">
        <Image
          src={BannerImg}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={60}
          className="object-cover object-right"
          aria-hidden="true"
        />
      </div>

      <Container className="px-2 sm:px-4 relative z-10 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center py-4 sm:py-12">
        {/* ── left: text content ── */}
        <div className="lg:w-6/12 flex flex-col justify-center text-left gap-y-2 sm:gap-y-4 mx-auto lg:mx-0">
          {/* badge */}
          <div className="inline-flex items-center gap-2 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold w-fit">
            <span
              className="w-2 h-2 rounded-full bg-gold animate-pulse"
              aria-hidden="true"
            />
            {lang === "BN"
              ? "অল-ইন-ওয়ান মাদরাসা ম্যানেজমেন্ট সিস্টেম"
              : "All-in-One Madrasha Management System"}
          </div>

          {/* headline — hydration-safe, no trailing {" "} after <br /> */}
          <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-foreground leading-[1.2] font-en">
            {lang === "BN" ? (
              <>
                আপনার মাদরাসা পরিচালনা করুন,
                <br />
                <span className="italic font-medium text-gold">জ্ঞান</span>
                {" ছড়িয়ে দিন।"}
              </>
            ) : (
              <>
                Manage Your Madrasha.
                <br />
                {"Inspire "}
                <span className="italic font-medium text-gold">Knowledge</span>
                {"."}
              </>
            )}
          </h1>

          {/* subheadline */}
          <p className="text-primary font-bold text-xl sm:text-2xl md:text-3xl 2xl:text-5xl tracking-tight font-en">
            {lang === "BN"
              ? "গড়ে তুলুন আগামী দিনের সুন্দর ভবিষ্যৎ।"
              : "Shape a Better Tomorrow."}
          </p>

          {/* description */}
          <p className="text-base sm:text-lg text-muted font-medium max-w-xl leading-relaxed mt-5 md:mt-10">
            {lang === "BN"
              ? "EduFilos হলো ছাত্র, শিক্ষক, ফিস, পরীক্ষা ও হাজিরাসহ একটি মাদরাসার যাবতীয় প্রয়োজনীয় সবকিছু এক প্ল্যাটফর্মে সহজে ম্যানেজ করার সম্পূর্ণ সমাধান।"
              : "EduFilos is a complete solution to manage students, teachers, fees, exams, attendance and everything your madrasha needs — in one powerful and easy-to-use platform."}
          </p>

          {/* CTA buttons */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-start sm:gap-4 pt-2 w-full">
            <Link
              href="/register"
              className="h-12 px-3 sm:px-6 w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {lang === "BN" ? "শুরু করুন এখন →" : "Get Started Now →"}
            </Link>

            <Link
              href="#features"
              className="h-12 px-3 sm:px-6 w-full sm:w-auto rounded-xl bg-card border border-border-custom text-foreground font-bold text-sm shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {lang === "BN" ? "ফিচারসমূহ দেখুন ➔" : "Explore Features ➔"}
            </Link>
          </div>

          {/* mini features */}
          <div className="grid grid-cols-4 gap-2 sm:gap-6 pt-8 border-t border-border-custom/50">
            {MINI_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.en}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground/90 tracking-wide">
                    {lang === "BN" ? feat.bn : feat.en}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── right: visual ── */}
        <div className="lg:w-6/12 flex flex-col gap-y-10 items-center justify-center relative w-full aspect-square mt-8 lg:mt-0">
          {/* arabic quote */}
          <div className="flex flex-col space-y-2 mt-4 font-ar text-center gap-3">
            <h3 className="text-2xl xs:text-3xl md:text-4xl xl:text-5xl font-arabic text-gold tracking-wide leading-relaxed font-medium">
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </h3>
            <p className="text-xs sm:text-sm text-muted font-medium italic tracking-wide max-w-md font-en">
              {lang === "BN"
                ? "\u201cপাঠ করুন আপনার পালনকর্তার নামে যিনি সৃষ্টি করেছেন।\u201d \u2014 সূরা আল-আলাক: ১"
                : "\u201cRead in the name of your Lord who created.\u201d \u2014 Quran 96:1"}
            </p>
          </div>

          {/* desktop mockup + LiteYoutube */}
          <div className="relative w-full sm:w-[85%] aspect-5/3 z-10 transition-transform duration-500 hover:scale-[1.01] rounded-xl sm:rounded-3xl overflow-hidden">
            {/* mac frame — above video */}
            <Image
              src={MacImg}
              alt="EduFilos Dashboard Desktop View"
              fill
              priority
              sizes="(max-width: 1024px) 85vw, 42vw"
              className="absolute w-full h-full z-20 pointer-events-none"
            />
            {/* video inside mac frame */}
            <div className="absolute inset-0 z-10">
              <LiteYoutube
                videoId={VIDEO_ID}
                title="EduFilos Platform Overview"
              />
            </div>
          </div>

          {/* phone mockup */}
          <div className="absolute right-[2%] bottom-[5%] w-1/3 sm:w-[25%] aspect-3/6 z-20 drop-shadow-2xl transition-transform duration-500 hover:translate-y-1.5 rounded-2xl sm:rounded-3xl 2xl:rounded-4xl overflow-hidden">
            {/* phone frame */}
            <Image
              src={PhoneImg}
              alt="EduFilos Mobile View"
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 12vw"
              className="absolute w-full h-full z-40 pointer-events-none"
            />
            {/* phone screen background */}
            <Image
              src={Placeholder}
              alt=""
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 12vw"
              className="object-cover z-30"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
