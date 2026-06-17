"use client";

import React, { useState } from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { Plus, Minus } from "lucide-react";
import Calligraphy from "../ui/Caligraphy";
import { useLanguage } from "@/context/LanguageContext";
import imgCalligraphy from "../../../public/kufik.png";
import { faqs } from "@/helper/faq";



const FAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-black text-primary uppercase tracking-[0.2em] mb-3 md:mb-4">
            {lang === "BN" ? "জিজ্ঞাসিত প্রশ্নাবলী" : "Have Questions?"}
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-black   mb-4 md:mb-6 leading-tight">
            {lang === "BN"
              ? "সাধারণ কিছু প্রশ্নের উত্তর"
              : "Frequently Asked Questions"}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {lang === "BN"
              ? "মাদ্রাসা ম্যানেজমেন্ট সিস্টেম নিয়ে সাধারণ কিছু প্রশ্নের উত্তর এখানে পেয়ে যাবেন। আরও কিছু জানার থাকলে আমাদের সাপোর্টে যোগাযোগ করুন।"
              : "Find answers to commonly asked questions about our Madrasha Management System. For further queries, feel free to contact our support team."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 bg-white  hover:border-slate-600 ${
                  isOpen
                    ? "border-primary/30 shadow-md shadow-primary/5"
                    : "border-slate-200/60 hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-start gap-4 select-none group"
                >
                  <span
                    className={`text-sm sm:text-base md:text-lg font-bold text-slate-900 transition-colors duration-200 ${isOpen ? "text-primary" : "group-hover:text-primary"}`}
                  >
                    {lang === "BN" ? faq.q.BN : faq.q.EN}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-125 border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 md:p-6 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed bg-slate-50/50 rounded-b-2xl">
                    {lang === "BN" ? faq.a.BN : faq.a.EN}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 right-0 translate-x-1/2 md:translate-y-1/2 md:translate-x-1/3 w-40 sm:w-60 md:w-100 aspect-square pointer-events-none opacity-10 z-0 select-none overflow-hidden">
        <Calligraphy
          imageSrc={imgCalligraphy.src}
          textColor="#047857"
          bgColor="transparent"
        />
      </div>
    </section>
  );
};

export default FAQ;
