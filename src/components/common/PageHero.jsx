"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import BannerImg from "@/../public/banner.jpeg";
import MacImg from "@/../public/mac.png";
import PhoneImg from "@/../public/phone.png";
import Placeholder from "@/../public/wall.jpg";
import Container from "../ui/Container";
import { GoShieldCheck } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { FaSchool, FaUser } from "react-icons/fa";

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
      className="relative w-full pt-24 pb-16 lg:py-32 flex items-center overflow-hidden bg-[#faf8f5] dark:bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-5 pointer-events-none mix-blend-multiply dark:mix-blend-normal">
        <Image
          src={BannerImg}
          alt="Islamic Pattern Texture"
          fill
          priority
          className="object-cover"
        />
      </div>

      <Container className="px-4 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
        {/* LEFT */}
        <div className="w-full lg:w-6/12 flex flex-col text-center lg:text-left items-center lg:items-start gap-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/50 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-primary/80">
            ✦ {lang === "BN" ? badge.bn : badge.en}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 dark:text-foreground leading-tight tracking-tight max-w-xl">
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

          {/* Description */}
          <p className="text-sm sm:text-base font-medium max-w-md leading-relaxed">
            {lang === "BN" ? description.bn : description.en}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 sm:gap-6 py-6 my-2 border-t border-b border-neutral-200/60 dark:border-border-custom/50 w-full max-w-xl">
            {statsFeatures.map((feat, idx) => {
              const Icon = feat.icon;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="text-2xl xl:text-3xl w-10 xl:w-14 aspect-square rounded-full bg-amber-500/5 dark:bg-amber-500/10 flex items-center justify-center text-gold mb-2 border border-amber-500/10 shadow-2xs">
                    <Icon />
                  </div>

                  <span className="sm:text-lg md:text-xl font-black text-primary leading-none">
                    {feat.num}
                  </span>

                  <span className="text-[11px] font-bold text-neutral-500 dark:text-muted-foreground mt-1">
                    {lang === "BN" ? feat.bn : feat.en}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 w-full justify-center lg:justify-start pt-2">
            <Link
              href="/demo"
              className="h-12 px-6 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {lang === "BN" ? "বুক এ ডেমো →" : "Book a Demo →"}
            </Link>

            <Link
              href="#features"
              className="h-12 px-6 rounded-xl bg-white dark:bg-card border border-neutral-200 dark:border-border-custom text-neutral-800 dark:text-foreground font-bold text-sm shadow-2xs hover:bg-neutral-50 transition-all flex items-center justify-center gap-2"
            >
              {lang === "BN" ? "ফিচারসমূহ দেখুন ➔" : "Explore Features ➔"}
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center relative mt-8 lg:mt-0 min-h-100 sm:min-h-125">
          {/* Quran Quote */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-center w-full">
            <h3 className="text-3xl md:text-4xl font-ar text-amber-700/90 dark:text-gold tracking-wide mb-2 font-medium">
              اِقْرَأْ وَرَبُّكَ الْأَكْرَمُ
            </h3>

            <p className="text-[10px] sm:text-xs text-muted italic font-medium leading-relaxed">
              {lang === "BN"
                ? "“পাঠ করুন, আপনার পালনকর্তা মহা দয়ালু।”"
                : '"Read! And your Lord is the Most Generous."'}

              <span className="block text-[9px] mt-0.5 opacity-70">
                — Quran 96:3
              </span>
            </p>
          </div>

          {/* Mac */}
          <div className="relative w-full flex items-center justify-center z-10 mt-24 sm:mt-28">
            <div className="relative w-full sm:w-[85%] aspect-5/3 z-10 rounded-xl sm:rounded-3xl overflow-hidden">
              <Image
                src={MacImg}
                alt="Desktop View"
                fill
                priority
                className="absolute w-full h-full z-20"
              />

              <div className="object-cover w-full h-full z-10">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Phone */}
            <div className="absolute -right-2 sm:right-[2%] -bottom-8 w-[28%] sm:w-[24%] aspect-3/6 drop-shadow-2xl z-20">
              <Image
                src={PhoneImg}
                fill
                alt="phone"
                className="relative z-20"
              />

              <Image
                src={Placeholder}
                fill
                alt="placeholder"
                className="object-cover absolute inset-0 z-10 rounded-4xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
