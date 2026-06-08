"use client";

import React, { useState } from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { Plus, Minus } from "lucide-react";
import Calligraphy from "../ui/Caligraphy";
import { useLanguage } from "@/context/LanguageContext";
import imgCalligraphy from "../../../public/kufik.png";

const FAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: {
        BN: "মাদ্রাসা ম্যানেজমেন্ট সিস্টেমটি ব্যবহার করতে কী কী লাগবে?",
        EN: "What is required to use this Madrasha Management System?",
      },
      a: {
        BN: "এটি একটি সম্পূর্ণ ক্লাউড-বেসড সফটওয়্যার। তাই আলাদা কোনো হাই-এন্ড ডিভাইস বা সার্ভার লাগবে না। শুধুমাত্র একটি সচল ইন্টারনেট কানেকশন এবং স্মার্টফোন, ট্যাবলেট বা কম্পিউটার থাকলেই যেকোনো জায়গা থেকে এটি ব্যবহার করা যাবে।",
        EN: "This is a completely cloud-based software. Therefore, no high-end devices or dedicated servers are required. You can access it from anywhere using just an active internet connection on any smartphone, tablet, or computer.",
      },
    },
    {
      q: {
        BN: "আমাদের ডেটা কতটা নিরাপদ থাকবে?",
        EN: "How secure will our institutional data be?",
      },
      a: {
        BN: "আমরা এন্টারপ্রাইজ-গ্রেড সিকিউরিটি এবং মাল্টি-টিন্যান্ট আর্কিটেকচার ব্যবহার করি। প্রতিটি প্রতিষ্ঠানের ডেটা সম্পূর্ণ আলাদা এবং এনক্রিপ্টেড অবস্থায় ডেটাবেজে সংরক্ষিত থাকে, যা শতভাগ নিরাপদ।",
        EN: "We implement enterprise-grade security protocols and a multi-tenant architecture. Data for each institution is completely isolated and stored in an encrypted database, ensuring maximum security.",
      },
    },
    {
      q: {
        BN: "ফি কালেকশনের পর টাকা সরাসরি আমাদের অ্যাকাউন্টে যাবে?",
        EN: "Will collected fees deposit directly into our account?",
      },
      a: {
        BN: "হ্যাঁ, সফটওয়্যারে ইন্টিগ্রেটেড পেমেন্ট গেটওয়ে (যেমন: bKash) সেটআপ করা থাকবে। অভিভাবকরা ফি পে করার সাথে সাথেই সেই টাকা সরাসরি আপনার প্রতিষ্ঠানের অফিশিয়াল মার্চেন্ট বা ব্যাংক অ্যাকাউন্টে জমা হবে।",
        EN: "Yes, integrated payment gateways (like bKash) will be configured in the software. As soon as parents clear any fees, the funds will be instantly transferred directly to your institution's official merchant or bank account.",
      },
    },
    {
      q: {
        BN: "টেকনিক্যাল কোনো সমস্যা হলে সাপোর্ট কীভাবে পাব?",
        EN: "How can we get support if we face any technical issues?",
      },
      a: {
        BN: "আপনার যেকোনো সমস্যা সমাধানে আমাদের ডেডিকেটেড রিলেশনশিপ ম্যানেজার এবং টেকনিক্যাল টিম ২৪/৭ সাপোর্ট দিতে প্রস্তুত। বাংলা এবং ইংরেজি উভয় ভাষায় আপনি আমাদের ফোন, ইমেইল বা চ্যাট সাপোর্ট পাবেন।",
        EN: "Our dedicated relationship managers and technical teams are available 24/7 to resolve any issues. You can reach out to us via phone, email, or live chat support in both Bangla and English.",
      },
    },
    {
      q: {
        BN: "ভবিষ্যতে প্ল্যান পরিবর্তন বা আপগ্রেড করা যাবে?",
        EN: "Can we change or upgrade our pricing plan in the future?",
      },
      a: {
        BN: "অবশ্যই! আপনার মাদ্রাসার ছাত্রসংখ্যা বা প্রয়োজনীয়তা বাড়লে আপনি যেকোনো সময় খুব সহজেই বর্তমান প্ল্যান থেকে উচ্চতর প্ল্যানে আপগ্রেড করে নিতে পারবেন।",
        EN: "Absolutely! As your madrasha expands in student capacity or feature requirements, you can seamlessly upgrade from your current plan to a higher tier at any time.",
      },
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <IslamicPattern variant="geometric" opacity={0.03} />

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
