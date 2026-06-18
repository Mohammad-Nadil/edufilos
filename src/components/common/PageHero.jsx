"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import BannerImg from "@/../public/banner.png";
import MacImg from "@/../public/mac.png";
import PhoneImg from "@/../public/phone.png";
import Placeholder from "@/../public/wall.jpg";
import Container from "../ui/Container";
import { GoShieldCheck } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { FaSchool, FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

export default function PageHero({ badge, title, description, videoUrl }) {
  const { lang } = useLanguage();

  const statsFeatures = [
    {
      num: "500+",
      en: "Madrashas",
      bn: "মাদরাসা",
      icon: FaSchool,
    },
    {
      num: "50,000+",
      en: "Students",
      bn: "শিক্ষার্থী",
      icon: FaUser,
    },
    {
      num: "2,000+",
      en: "Teachers",
      bn: "শিক্ষক",
      icon: GiTrophyCup,
    },
    {
      num: "99.9%",
      en: "Uptime",
      bn: "আপটাইম",
      icon: GoShieldCheck,
    },
  ];

  return (
    <section
      id="banner"
      className="relative w-full pt-12 pb-16 lg:py-24 xl:py-32 flex items-center overflow-hidden bg-[#faf8f5] dark:bg-background"
    >
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-5 pointer-events-none mix-blend-multiply dark:mix-blend-normal">
        <Image
          src={BannerImg}
          alt="Islamic Pattern Texture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="px-4 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-8 items-center w-full">
        <div className="w-full lg:w-6/12 flex flex-col text-center lg:text-left items-center lg:items-start gap-y-5">
          <div className="inline-flex items-center gap-1 border border-primary/40 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-primary/90 bg-primary/5">
            <IoStar /> {lang === "BN" ? badge.bn : badge.en}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 dark:text-foreground leading-tight tracking-tight max-w-xl">
            {lang === "BN" ? (
              <>
                {title.bn.first}{" "}
                <span className="text-primary">{title.bn.highlight}</span>{" "}
                {title.bn.second}
              </>
            ) : (
              <>
                {title.en.first} {title.en.second}{" "}
                <span className="text-primary">{title.en.highlight}</span>
              </>
            )}
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-medium max-w-md text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {lang === "BN" ? description.bn : description.en}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 my-2 border-t border-b border-neutral-200/60 dark:border-border-custom/50 w-full max-w-xl">
            {statsFeatures.map((feat, idx) => {
              const Icon = feat.icon;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
                >
                  <div className="text-xl xl:text-2xl w-10 xl:w-12 aspect-square rounded-full bg-amber-500/5 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-500 mb-2 border border-amber-500/10">
                    <Icon />
                  </div>

                  <span className="text-lg md:text-xl font-black text-primary leading-none">
                    {feat.num}
                  </span>

                  <span className="text-[11px] font-bold text-neutral-500 dark:text-muted-foreground mt-1">
                    {lang === "BN" ? feat.bn : feat.en}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center lg:justify-start pt-2">
            <Link
              href="/demo"
              className="h-12 w-full sm:w-auto px-6 rounded-xl bg-primary text-white font-bold text-sm shadow-xs hover:brightness-105 transition-all flex items-center justify-center"
            >
              {lang === "BN" ? "বুক এ ডেমো →" : "Book a Demo →"}
            </Link>

            <Link
              href="/studentManagement"
              className="h-12 w-full sm:w-auto px-6 rounded-xl bg-white dark:bg-card border border-neutral-200 dark:border-border-custom text-neutral-800 dark:text-foreground font-bold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all flex items-center justify-center"
            >
              {lang === "BN" ? "ফিচারসমূহ দেখুন ➔" : "Explore Features ➔"}
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center relative mt-6 lg:mt-0 min-h-[320px] sm:min-h-[450px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full z-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-ar text-amber-700/90 dark:text-amber-500/80 tracking-wide mb-1 font-medium">
              اِقْرَأْ وَرَبُّكَ الْأَكْرَمُ
            </h3>

            <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 italic font-medium leading-relaxed">
              {lang === "BN"
                ? "“পাঠ করুন, আপনার পালনকর্তা মহা দয়ালু।”"
                : '"Read! And your Lord is the Most Generous."'}
              <span className="block text-[9px] mt-0.5 opacity-70">
                — Quran 96:3
              </span>
            </p>
          </div>

          <div className="relative w-full flex items-center justify-center z-10 mt-20 sm:mt-24">
            <div className="relative w-full sm:w-[85%] aspect-5/3 z-10 rounded-xl overflow-hidden">
              <Image
                src={MacImg}
                alt="Desktop View"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 42vw"
                className="absolute w-full h-full z-20 pointer-events-none"
              />

              <div className="w-full h-full rounded-xl z-10">
                <iframe
                  className="w-full h-full bg-neutral-900"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="absolute -right-2 sm:right-[2%] -bottom-6 w-[26%] sm:w-[22%] aspect-3/6 drop-shadow-xl z-20">
              <Image
                src={PhoneImg}
                fill
                alt="phone frame"
                sizes="(max-width: 640px) 26vw, 22vw"
                className="relative z-20 pointer-events-none"
              />
              <Image
                src={Placeholder}
                fill
                alt="phone screen wallpaper"
                sizes="(max-width: 640px) 26vw, 22vw"
                className="object-cover absolute inset-0 z-10 rounded-[10%] p-[4%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
