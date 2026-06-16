"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";

import placeholder from "@/../public/texture.jpg";

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ChevronsLeftRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  const { lang } = useLanguage();
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: {
        en: "EduFilos has revolutionized how we manage our Madrasha. Student data, fees, and exams are now just a click away. It’s incredibly easy to use and reliable.",
        bn: "এডুফিলোস আমাদের মাদরাসার ব্যবস্থাপনায় বিপ্লব এনেছে। ছাত্র-ছাত্রীর তথ্য, ফিস এবং পরীক্ষা এখন মাত্র এক ক্লিকেই পাওয়া যায়। এটি ব্যবহার করা খুবই সহজ এবং নির্ভরযোগ্য।",
      },
      name: { en: "Maulana Abdul Karim", bn: "মাওলানা আব্দুল করিম" },
      title: {
        en: "Principal, Al-Huda Academy",
        bn: "মুহতামিম, আল-হুদা একাডেমি",
      },
      rating: 5,
    },
    {
      id: 2,
      quote: {
        en: "As an administrator, I needed a secure system for staff and finance management. EduFilos provided the perfect solution with advanced security and daily backups.",
        bn: "একজন অ্যাডমিনিস্ট্রেটর হিসেবে, আমার স্টাফ এবং ফিনান্স ম্যানেজমেন্টের জন্য একটি নিরাপদ সিস্টেম দরকার ছিল। এডুফিলোস উন্নত সিকিউরিটি এবং ডেইলি ব্যাকআপের মাধ্যমে নিখুঁত সমাধান দিয়েছে।",
      },
      name: { en: "Hafiz Muhammad Riyad", bn: "হাফিজ মুহাম্মদ রিয়াদ" },
      title: {
        en: "Admin Head, Jamiya Darul Ulum",
        bn: "প্রশাসনিক প্রধান, জামিয়া دارالعلوم",
      },
      rating: 5,
    },
    {
      id: 3,
      quote: {
        en: "Our teachers are very happy with the examination and attendance modules. It saves them a lot of time. The support team is also very responsive and helpful.",
        bn: "আমাদের শিক্ষকরা পরীক্ষা এবং হাজিরা মডিউল নিয়ে খুব খুশি। এটি তাদের অনেক সময় বাঁচায়। তাদের সাপোর্ট টিমও খুব দ্রুত রেসপন্স করে এবং সাহায্য করে।",
      },
      name: { en: "Ustadah Fatima Jannat", bn: "উস্তাদাহ ফাতিমা জান্নাত" },
      title: {
        en: "Head of Primary Section, Noor Madrasah",
        bn: "প্রধান শিক্ষিকা (প্রাথমিক শাখা), নূর মাদরাসা",
      },
      rating: 4,
    },
    {
      id: 4,
      quote: {
        en: "The student enrollment process became completely paperless. It's a huge step towards modernizing our institution while keeping Islamic values intact.",
        bn: "ছাত্র ভর্তিয়ের প্রক্রিয়া পুরোপুরি পেপারলেস হয়ে গেছে। ইসলামী মূল্যবোধ বজায় রেখে আমাদের প্রতিষ্ঠানকে আধুনিক করার পথে এটি একটি বড় পদক্ষেপ।",
      },
      name: { en: "Mufti Junaid Ahmed", bn: "মুফতি জুনায়েদ আহমেদ" },
      title: {
        en: "Director, Darus Sunnah Complex",
        bn: "পরিচালক, দারুস সুন্নাহ কমপ্লেক্স",
      },
      rating: 5,
    },
  ];

  return (
    <section className=" bg-background  select-none relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 relative">
          <ChevronsLeftRight
            className="w-10 h-10 text-gold mb-3 opacity-80"
            strokeWidth={1}
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight max-w-2xl">
            {lang === "BN"
              ? "আমাদের ব্যবহারকারীরা কি বলেন"
              : "What Our Users Say"}
          </h2>
        </div>

        <div className="absolute top-1/2 left-4 md:left-10 -translate-y-1/2 z-20 hidden md:block">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border-custom flex items-center justify-center text-gold shadow-md hover:bg-card hover:scale-105 active:scale-95 transition-all"
          >
            <FiChevronLeft className="w-7 h-7" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 z-20 hidden md:block">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border-custom flex items-center justify-center text-gold shadow-md hover:bg-card hover:scale-105 active:scale-95 transition-all"
          >
            <FiChevronRight className="w-7 h-7" />
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-16"
          style={{
            "--swiper-pagination-color": "var(--gold, #d4af37)",
            "--swiper-pagination-bullet-inactive-color": "#9ca3af",
            "--swiper-pagination-bullet-inactive-opacity": "0.4",
            "--swiper-pagination-bullet-size": "10px",
          }}
        >
          {testimonials.map((feat) => (
            <SwiperSlide key={feat.id}>
              <div className="flex flex-col gap-y-7 bg-card border border-border-custom p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex flex-col gap-y-4">
                  <FaQuoteLeft className="w-8 h-8 text-gold/30" />
                  <p className="text-sm md:text-base text-muted dark:text-muted-foreground leading-relaxed font-medium">
                    {lang === "BN" ? feat.quote.bn : feat.quote.en}
                  </p>
                </div>

                <div className="flex flex-col gap-y-5 pt-6 border-t border-border-custom/50 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-border-custom bg-muted shadow-xs">
                      <Image
                        src={placeholder}
                        alt={feat.name.en}
                        fill
                        className="object-cover saturate-50"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-bold text-foreground">
                        {lang === "BN" ? feat.name.bn : feat.name.en}
                      </h4>
                      <p className="text-[11px] font-bold text-gold uppercase tracking-wider mt-0.5">
                        {lang === "BN" ? feat.title.bn : feat.title.en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${i < feat.rating ? "text-gold" : "text-neutral-300 dark:text-border-custom"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
