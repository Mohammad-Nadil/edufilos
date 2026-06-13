"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import BannerImg from "@/../public/banner.jpeg";
import MacImg from "@/../public/mac.png";
import PhoneImg from "@/../public/phone.png";
import Placeholder from "@/../public/wall.jpg";
import { CheckCircle2, ShieldCheck, Tag, Zap } from "lucide-react";
import Container from "../ui/Container";

export default function Banner() {
  const { lang } = useLanguage();

  const miniFeatures = [
    { en: "Easy To Use", bn: "সহজ ব্যবহার পদ্ধতি", icon: CheckCircle2 },
    { en: "Secure & Reliable", bn: "নিরাপদ ও বিশ্বস্ত", icon: ShieldCheck },
    { en: "Affordable Price", bn: "সাশ্রয়ী মূল্য", icon: Tag },
    { en: "Advanced System", bn: "আধুনিক সিস্টেম", icon: Zap },
  ];

  return (
    <section
      id="banner"
      className="relative w-full pt-20 sm:pt-24  2xl:pt-12 flex items-center overflow-hidden bg-background"
    >
      {BannerImg && (
        <div className="absolute inset-0 z-0 saturate-50 opacity-20 pointer-events-none dark:opacity-10 dark:saturate-0">
          <Image
            src={BannerImg}
            alt="Banner Texture"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <Container className="  relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        {" "}
        <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4 max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold  w-fit animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {lang === "BN"
              ? "অল-ইন-ওয়ান মাদরাসা ম্যানেজমেন্ট সিস্টেম"
              : "All-in-One Madrasha Management System"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-foreground tracking-tight leading-[1.15] font-en">
            {lang === "BN" ? (
              <>
                আপনার মাদরাসা পরিচালনা করুন,{" "}
                <span className="italic font-medium text-gold">জ্ঞান</span>{" "}
                ছড়িয়ে দিন।
              </>
            ) : (
              <>
                Manage Your Madrasha. Inspire{" "}
                <span className="italic font-medium text-gold">Knowledge</span>.
              </>
            )}
          </h1>

          <p className="text-primary font-bold text-xl sm:text-2xl md:text-3xl 2xl:text-5xl tracking-tight  font-en">
            {lang === "BN"
              ? "গড়ে তুলুন আগামী দিনের সুন্দর ভবিষ্যৎ।"
              : "Shape a Better Tomorrow."}
          </p>

          <p className="text-base sm:text-lg text-muted font-medium max-w-xl leading-relaxed mt-5 md:mt-10">
            {lang === "BN"
              ? "EduFilos হলো ছাত্র, শিক্ষক, ফিস, পরীক্ষা ও হাজিরাসহ একটি মাদরাসার যাবতীয় প্রয়োজনীয় সবকিছু এক প্ল্যাটফর্মে সহজে ম্যানেজ করার সম্পূর্ণ সমাধান।"
              : "EduFilos is a complete solution to manage students, teachers, fees, exams, attendance and everything your madrasha needs — in one powerful and easy-to-use platform."}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#register"
              className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {lang === "BN" ? "শুরু করুন এখন →" : "Get Started Now →"}
            </Link>
            <Link
              href="#features"
              className="h-12 px-6 rounded-xl bg-card border border-border-custom text-foreground font-bold text-sm shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 transition-all"
            >
              {lang === "BN" ? "ফিচারসমূহ দেখুন ➔" : "Explore Features ➔"}
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-6 pt-8 border-t border-border-custom/50">
            {miniFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center sm: space-y-3 group"
                >
                  {/* আইকন কন্টেইনার - এখানে হোভার ইফেক্টও যোগ করা হয়েছে */}
                  <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* টেক্সট */}
                  <span className="text-xs sm:text-sm font-bold text-foreground/90 tracking-wide">
                    {lang === "BN" ? feat.bn : feat.en}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col gap-y-10 items-center justify-center relative w-full aspect-square mt-8 lg:mt-0">
          <div className="flex flex-col space-y-2 mt-4 font-ar text-center gap-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-arabic text-gold tracking-wide leading-relaxed font-medium animate-fade-in">
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </h3>

            <p className="text-xs sm:text-sm text-muted font-medium italic tracking-wide max-w-md font-en">
              {lang === "BN"
                ? "“পাঠ করুন আপনার পালনকর্তার নামে যিনি সৃষ্টি করেছেন।” — সূরা আল-আলাক: ১"
                : "“Read in the name of your Lord who created.” — Quran 96:1"}
            </p>
          </div>

          <div className="relative w-full sm:w-[85%]  aspect-5/3 z-10 transition-transform duration-500 hover:scale-[1.01] rounded-2xl overflow-hidden ">
            <Image
              src={MacImg}
              alt="EduFilos Dashboard Desktop View"
              fill
              priority
              className="absolute w-full h-full z-20"
            />
            <div className="object-cover w-full h-full  z-10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AjeBOZXOrgs?si=1ED7gNEh-sDoPz9X"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="absolute right-[2%] bottom-[5%] w-1/3  sm:w-[25%] aspect-3/6 z-20 drop-shadow-2xl transition-transform duration-500 hover:translate-y-1.25 rounded-3xl overflow-hidden">
            <Image
              src={PhoneImg}
              alt="EduFilos Dashboard mobile View"
              fill
              priority
              className="absolute w-full h-full z-40"
            />
            <Image
              src={Placeholder}
              alt="Calligraphy Background"
              fill
              priority
              className="object-cover  z-30"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
