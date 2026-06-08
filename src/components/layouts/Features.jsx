"use client";

import React from "react";
import {
  Users,
  GraduationCap,
  TrendingUp,
  BookOpenCheck,
  Globe,
  ShieldCheck,
  Smartphone,
  CreditCard,
} from "lucide-react";
import Card from "../ui/Card";
import Calligraphy from "../ui/Caligraphy";
import imgCalligraphy from "../../../public/kufik.png";

const Features = ({ language }) => {
  const cards = [
    {
      icon: Users,
      title: "ছাত্র ব্যবস্থাপনা",
      desc: "Complete automated registration pipeline setup for structural profiling database tracking.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: GraduationCap,
      title: "অনলাইন এডমিশন",
      desc: "Advanced registration tracking with custom admission data collection nodes.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "ফি সংগ্রহ ও পেরোল",
      desc: "Dynamic structural financial ledger control backed by micro automatic transaction tracking.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: BookOpenCheck,
      title: "Result Management",
      desc: "Generate result sheets, transcripts, and progress reports automatically.",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
    },
    {
      icon: Globe,
      title: "Custom Subdomains",
      desc: "Each institution gets its own unique web address under your domain.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: ShieldCheck,
      title: "Role Based Access",
      desc: "Secure portals for Admins, Teachers, Students, and Guardians.",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      desc: "Optimized for all devices including smartphones and tablets.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: CreditCard,
      title: "Financial Control",
      desc: "Integrated billing and invoice system with bKash support.",
      color: "text-slate-700",
      bg: "bg-slate-100",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <h2 className="text-xs md:text-sm font-black text-emerald-800 uppercase tracking-[0.2em] mb-3 md:mb-4">
            Powerful Features
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
            Designed specifically for Madrasha Management
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to run your institution efficiently, from
            digital admissions to cloud-based accounting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {cards.map((f, i) => (
            <Card
              key={i}
              className="group border border-slate-200/60 shadow-sm hover:border-transparent bg-white hover:shadow-xl  transition-all p-5 sm:p-6 md:p-8 rounded-3xl cursor-default"
            >
              <div className="flex flex-col items-start">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <f.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 md:top-6 md:right-[-2%] translate-x-1/2 xl:translate-x-1/5 w-45 sm:w-65 md:w-100 aspect-square pointer-events-none opacity-[0.07] md:opacity-15 z-0 select-none">
        <Calligraphy
          imageSrc={imgCalligraphy.src}
          textColor="#047857"
          bgColor="transparent"
        />
      </div>
    </section>
  );
};

export default Features;