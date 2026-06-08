"use client";

import React from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { ShieldCheck, MessageSquare, HelpCircle } from "lucide-react";
import Calligraphy from "../ui/Caligraphy";
import { useLanguage } from "@/context/LanguageContext";
import imgKun from "../../../public/kun.png";

const Why = () => {
  const { lang } = useLanguage();

  const whyItems = [
    {
      icon: ShieldCheck,
      t: {
        BN: "এন্টারপ্রাইজ সিকিউরিটি",
        EN: "Enterprise Security",
      },
      d: {
        BN: "প্রতিষ্ঠানের সংবেদনশীল রেকর্ড ও ডেটা সুরক্ষিত রাখতে ডেটা এনক্রিপশন এবং নিরাপদ মাল্টি-টেন্যান্ট আর্কিটেকচার।",
        EN: "Data encryption and secure multi-tenant architecture to protect sensitive institutional records.",
      },
    },
    {
      icon: MessageSquare,
      t: {
        BN: "ইন্টিগ্রেটেড কমিউনিকেশন",
        EN: "Integrated Communication",
      },
      d: {
        BN: "শিক্ষার্থীদের উপস্থিতি, পরীক্ষার রেজাল্ট এবং ফি রিমাইন্ডারের জন্য স্বয়ংক্রিয় এসএমএস বা ইমেইল অ্যালার্ট।",
        EN: "Send SMS or Email alerts for attendance, results and fee reminders automatically.",
      },
    },
    {
      icon: HelpCircle,
      t: {
        BN: "লোকাল এক্সপার্ট সাপোর্ট",
        EN: "Expert Local Support",
      },
      d: {
        BN: "যেকোনো সমস্যায় সাহায্য করতে ডেডিকেটেড রিলেশনশিপ ম্যানেজার এবং বাংলা ও ইংরেজিতে ২৪/৭ টেকনিক্যাল সাপোর্ট।",
        EN: "Dedicated relationship managers and technical support available 24/7 in Bangla/English.",
      },
    },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight tracking-tight">
              {lang === "BN"
                ? "মাদরাসার উৎকর্ষতায় নির্ভরযোগ্য একটি প্ল্যাটফর্ম"
                : "Trust the platform made for Madrasha excellence"}
            </h2>

            <div className="space-y-8">
              {whyItems.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">
                      {lang === "BN" ? item.t.BN : item.t.EN}
                    </h3>
                    <p className="text-emerald-100/80 leading-relaxed text-sm md:text-base font-medium">
                      {lang === "BN" ? item.d.BN : item.d.EN}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden rotate-3 max-w-100 mx-auto shadow-2xl backdrop-blur-xs">
              <div className="text-center select-none">
                <p className="text-8xl md:text-9xl font-black mb-4 tracking-tighter text-white animate-pulse">
                  99%
                </p>
                <p className="text-sm md:text-base font-bold text-emerald-200 uppercase">
                  {lang === "BN" ? "আপটাইম গ্যারান্টি" : "Uptime Guarantee"}
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-5%] right-[-5%] lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:right-[-2%] w-40 sm:w-60 md:w-95 aspect-square pointer-events-none opacity-[0.04] lg:opacity-[0.06] z-0 select-none overflow-hidden">
        <Calligraphy
          imageSrc={imgKun.src}
          textColor="#ffffff"
          bgColor="transparent"
        />
      </div>
    </section>
  );
};

export default Why;
