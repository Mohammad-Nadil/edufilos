"use client";

import React, { useState } from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { Plus, Minus } from "lucide-react";
import Calligraphy from "../ui/Caligraphy";
import imgCalligraphy from "../../../public/kufik.png"; 

const FAQ = ({ language }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "মাদ্রাসা ম্যানেজমেন্ট সিস্টেমটি ব্যবহার করতে কী কী লাগবে?",
      a: "এটি একটি সম্পূর্ণ ক্লাউড-বেসড সফটওয়্যার। তাই আলাদা কোনো হাই-এন্ড ডিভাইস বা সার্ভার লাগবে না। শুধুমাত্র একটি সচল ইন্টারনেট কানেকশন এবং স্মার্টফোন, ট্যাবলেট বা কম্পিউটার থাকলেই যেকোনো জায়গা থেকে এটি ব্যবহার করা যাবে।",
    },
    {
      q: "আমাদের ডেটা কতটা নিরাপদ থাকবে?",
      a: "আমরা এন্টারপ্রাইজ-গ্রেড সিকিউরিটি এবং মাল্টি-টিন্যান্ট আর্কিটেকচার ব্যবহার করি। প্রতিটি প্রতিষ্ঠানের ডেটা সম্পূর্ণ আলাদা এবং এনক্রিপ্টেড অবস্থায় ডেটাবেজে সংরক্ষিত থাকে, যা শতভাগ নিরাপদ।",
    },
    {
      q: "ফি কালেকশনের পর টাকা সরাসরি আমাদের অ্যাকাউন্টে যাবে?",
      a: "হ্যাঁ, সফটওয়্যারে ইন্টিগ্রেটেড পেমেন্ট গেটওয়ে (যেমন: bKash) সেটআপ করা থাকবে। অভিভাবকরা ফি পে করার সাথে সাথেই সেই টাকা সরাসরি আপনার প্রতিষ্ঠানের অফিশিয়াল মার্চেন্ট বা ব্যাংক অ্যাকাউন্টে জমা হবে।",
    },
    {
      q: "টেকনিক্যাল কোনো সমস্যা হলে সাপোর্ট কীভাবে পাব?",
      a: "আপনার যেকোনো সমস্যা সমাধানে আমাদের ডেডিকেটেড রিলেশনশিপ ম্যানেজার এবং টেকনিক্যাল টিম ২৪/৭ সাপোর্ট দিতে প্রস্তুত। বাংলা এবং ইংরেজি উভয় ভাষায় আপনি আমাদের ফোন, ইমেইল বা চ্যাট সাপোর্ট পাবেন।",
    },
    {
      q: "ভবিষ্যতে প্ল্যান পরিবর্তন বা আপগ্রেড করা যাবে?",
      a: "অবশ্যই! আপনার মাদ্রাসার ছাত্রসংখ্যা বা প্রয়োজনীয়তা বাড়লে আপনি যেকোনো সময় খুব সহজেই বর্তমান প্ল্যান থেকে উচ্চতর প্ল্যানে আপগ্রেড করে নিতে পারবেন।",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <IslamicPattern variant="geometric" opacity={0.03} />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-xs md:text-sm font-black text-primary uppercase tracking-[0.2em] mb-3 md:mb-4">
            Have Questions?
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
            Frequently Asked Questions
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            মাদ্রাসা ম্যানেজমেন্ট সিস্টেম নিয়ে সাধারণ কিছু প্রশ্নের উত্তর এখানে পেয়ে যাবেন। আরও কিছু জানার থাকলে আমাদের সাপোর্টে যোগাযোগ করুন।
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 bg-white ${
                  isOpen 
                    ? "border-primary/30 shadow-md shadow-primary/5" 
                    : "border-slate-200/60 hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 select-none"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-primary">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-125 border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 md:p-6 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed bg-slate-50/50 rounded-b-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <div className="absolute top-1/2 right-[-6%] lg:right-[-2%] -translate-y-1/2 translate-x-1/3 w-40 sm:w-60 md:w-100 aspect-square pointer-events-none opacity-[0.05] md:opacity-10 z-0 select-none overflow-hidden">
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