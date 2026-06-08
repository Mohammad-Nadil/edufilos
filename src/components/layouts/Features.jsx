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
import { useLanguage } from "@/context/LanguageContext";

const Features = () => {
  const { lang } = useLanguage();

  const cards = [
    {
      icon: Users,
      title: {
        BN: "ছাত্র ব্যবস্থাপনা",
        EN: "Student Management",
      },
      desc: {
        BN: "শিক্ষার্থীদের প্রোফাইল, উপস্থিতি এবং একাডেমিক রেকর্ড ট্র্যাক করার জন্য সম্পূর্ণ অটোমেটেড ডেটাবেস সিস্টেম।",
        EN: "Complete automated registration pipeline setup for structural profiling and student database tracking.",
      },
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: GraduationCap,
      title: {
        BN: "অনলাইন এডমিশন",
        EN: "Online Admission",
      },
      desc: {
        BN: "ভর্তি ফরম কাস্টমাইজেশন এবং আবেদনকারীদের তথ্য সংগ্রহের জন্য অ্যাডভান্সড অনলাইন রেজিস্ট্রেশন ট্র্যাকিং।",
        EN: "Advanced registration tracking with custom admission forms and data collection nodes.",
      },
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: {
        BN: "ফি সংগ্রহ ও পেরোল",
        EN: "Fee Collection & Payroll",
      },
      desc: {
        BN: "ইনভয়েস জেনারেশন ও ট্রানজেকশন ট্র্যাকিং সহ প্রতিষ্ঠানের ডাইনামিক আর্থিক লেজার কন্ট্রোল সিস্টেম।",
        EN: "Dynamic structural financial ledger control backed by micro automatic transaction tracking.",
      },
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: BookOpenCheck,
      title: {
        BN: "রেজাল্ট ম্যানেজমেন্ট",
        EN: "Result Management",
      },
      desc: {
        BN: "পরীক্ষার নম্বর ইনপুট দিয়ে স্বয়ংক্রিয়ভাবে নির্ভুল রেজাল্ট শিট, ট্রান্সক্রিপ্ট এবং প্রোগ্রেস রিপোর্ট তৈরি।",
        EN: "Generate error-free result sheets, transcripts, and progress reports automatically.",
      },
      color: "text-emerald-700",
      bg: "bg-emerald-50/70",
    },
    {
      icon: Globe,
      title: {
        BN: "কাস্টম সাবডোমেন",
        EN: "Custom Subdomains",
      },
      desc: {
        BN: "প্রতিটি মাদরাসার নিজস্ব ব্র্যান্ডিং ধরে রাখতে মেইন ডোমেনের অধীনে সম্পূর্ণ আলাদা ও ইউনিক ওয়েব অ্যাড্রেস।",
        EN: "Each institution gets its own unique web address under the main domain for dedicated identity.",
      },
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: ShieldCheck,
      title: {
        BN: "রোল বেসড অ্যাক্সেস",
        EN: "Role Based Access",
      },
      desc: {
        BN: "এডমিন, শিক্ষক, শিক্ষার্থী এবং অভিভাবকদের জন্য আলাদা ফিচার সম্বলিত সম্পূর্ণ সুরক্ষিত পোর্টাল।",
        EN: "Secure and dedicated portals for Admins, Teachers, Students, and Guardians.",
      },
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: Smartphone,
      title: {
        BN: "মোবাইল রেসপন্সিভ",
        EN: "Mobile Responsive",
      },
      desc: {
        BN: "স্মার্টফোন, ট্যাবলেট বা ল্যাপটপ—যেকোনো ডিভাইসের স্ক্রিনের সাথে সামঞ্জস্যপূর্ণ চমৎকার ইউজার ইন্টারফেস।",
        EN: "Optimized user interface for all modern devices including smartphones and tablets.",
      },
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: CreditCard,
      title: {
        BN: "আর্থিক নিয়ন্ত্রণ ও পেমেন্ট",
        EN: "Financial Control",
      },
      desc: {
        BN: "বিকাশ, রকেট বা নগদের মতো লোকাল গেটওয়ে ইন্টিগ্রেশনের মাধ্যমে সরাসরি ফি আদায়ের ইনভয়েস সিস্টেম।",
        EN: "Integrated billing and invoice system with local payment gateways like bKash support.",
      },
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
          <h2 className="text-xs md:text-sm font-black text-emerald-800 uppercase mb-3 md:mb-4">
            {lang === "BN" ? "শক্তিশালী ফিচারসমূহ" : "Powerful Features"}
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
            {lang === "BN"
              ? "মাদরাসা ব্যবস্থাপনার জন্য বিশেষভাবে তৈরি"
              : "Designed Specifically for Madrasha Management"}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {lang === "BN"
              ? "ডিজিটাল অ্যাডমিশন থেকে শুরু করে ক্লাউড-বেসড অ্যাকাউন্টিং—আপনার প্রতিষ্ঠান দক্ষতার সাথে পরিচালনার সবকিছুই এখানে পাবেন।"
              : "Everything you need to run your institution efficiently, from digital admissions to cloud-based accounting."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {cards.map((f, i) => (
            <Card
              key={i}
              className="group border border-slate-200/60 shadow-sm hover:border-transparent bg-white hover:shadow-xl transition-all duration-300 p-5 sm:p-6 md:p-8 rounded-3xl cursor-default flex flex-col justify-between"
            >
              <div className="flex flex-col items-start">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <f.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight">
                  {lang === "BN" ? f.title.BN : f.title.EN}
                </h3>

                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  {lang === "BN" ? f.desc.BN : f.desc.EN}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-[-10%]  md:top-6 md:right-[-2%] translate-x-1/3 w-45 sm:w-65 md:w-100 aspect-square pointer-events-none opacity-[0.05] md:opacity-10 z-0 select-none overflow-hidden">
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
