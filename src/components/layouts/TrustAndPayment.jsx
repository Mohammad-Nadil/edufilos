"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import {
  MessageSquare,
  Ticket,
  ShieldCheck,
  Headphones,
  Smartphone,
} from "lucide-react";
import visaImg from "@/../public/visaLogo.png";
import mastercardImg from "@/../public/masterLogo.png";
import americanImg from "@/../public/americalLogo.png";
import bracImg from "@/../public/bracLogo.jpg";
import dutchImg from "@/../public/dutchLogo.jpg";
import cityImg from "@/../public/cityLogo.png";
import islamiImg from "@/../public/islamiLogo.png";
import abImg from "@/../public/abLogo.png";
import qcashImg from "@/../public/qcashLogo.jpg";
import fastImg from "@/../public/fastLogo.png";
import bkashImg from "@/../public/bkashLogo.jpg";
import rocketImg from "@/../public/rocketLogo.png";
import myImg from "@/../public/myLogo.jpg";
import upayImg from "@/../public/upayLogo.webp";
import ssl from "@/../public/sslLogo.png";

export default function TrustAndPayment() {
  const { lang } = useLanguage();

  const paymentLogos = [
    { name: "Visa", img: visaImg },
    { name: "Mastercard", img: mastercardImg },
    { name: "American Express", img: americanImg },
    { name: "Brac", img: bracImg },
    { name: "Dutch", img: dutchImg },
    { name: "City", img: cityImg },
    { name: "Islami", img: islamiImg },
    { name: "AB", img: abImg },
    { name: "Qcash", img: qcashImg },
    { name: "Fast", img: fastImg },
    { name: "Bkash", img: bkashImg },
    { name: "Rocket", img: rocketImg },
    { name: "My", img: myImg },
    { name: "Upay", img: upayImg },
  ];

  return (
    <section className="py-16 bg-background border-t border-border-custom select-none">
      <Container>
        {/* ================= ১. টপ ৩-কলাম ইনফো গ্রিড ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {/* কলাম ১: মোবাইল অ্যাপ অ্যাক্সেস */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card text-card-foreground p-6 rounded-2xl border border-border-custom shadow-sm h-full">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "মোবাইল অ্যাপ অ্যাক্সেস" : "Mobile App Access"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                {lang === "BN"
                  ? "যেকোনো জায়গা থেকে সহজেই আপনার মাদরাসা পরিচালনা করুন আমাদের mobile অ্যাপ দিয়ে।"
                  : "Manage your madrasha on the go with our mobile app."}
              </p>

              {/* অফিশিয়াল স্টোর ব্যাজ */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <div className="bg-black text-white px-3 py-1.5 rounded-xl flex items-center gap-2 border border-neutral-800 cursor-pointer shadow-sm">
                  <span className="text-[14px]">🤖</span>
                  <div className="text-left">
                    <p className="text-[7px] leading-none uppercase text-gray-400">Get it on</p>
                    <p className="text-[10px] font-bold leading-none mt-0.5">Google Play</p>
                  </div>
                </div>
                <div className="bg-black text-white px-3 py-1.5 rounded-xl flex items-center gap-2 border border-neutral-800 cursor-pointer shadow-sm">
                  <span className="text-[14px]">🍏</span>
                  <div className="text-left">
                    <p className="text-[7px] leading-none uppercase text-gray-400">Download on the</p>
                    <p className="text-[10px] font-bold leading-none mt-0.5">App Store</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ৩ডি স্টাইল মোবাইল মকআপ উইজেট */}
            <div className="w-24 h-40 shrink-0 rounded-2xl border-4 border-neutral-800 bg-[#0b241b]/10 dark:bg-[#0b241b]/30 relative flex flex-col items-center justify-center shadow-md p-2">
              <div className="w-8 h-2 bg-neutral-800 rounded-full absolute top-1" />
              <Smartphone className="w-10 h-10 text-primary mb-1 animate-pulse" strokeWidth={1.5} />
              <span className="text-[9px] font-black tracking-widest text-primary font-mono">EMIS</span>
              <div className="w-12 h-1 bg-neutral-300 dark:bg-neutral-800 rounded-full mt-2" />
              <div className="w-8 h-1 bg-neutral-300 dark:bg-neutral-800 rounded-full mt-1" />
            </div>
          </div>

          {/* কলাম ২: সিকিউর অ্যান্ড ট্রাস্টেড */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card text-card-foreground p-6 rounded-2xl border border-border-custom shadow-sm h-full">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "নিরাপদ ও নির্ভরযোগ্য" : "Secure & Trusted"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "BN"
                  ? "আপনার প্রতিষ্ঠানের সমস্ত ডেটা আমাদের কাছে সম্পূর্ণ নিরাপদ। আমরা ব্যবহার করি টপ-নচ ব্যাংক লেভেল সিকিউরিটি ও DAILY ক্লাউড ব্যাকআপ।"
                  : "Your data is safe with us. We use top-level security and regular backups."}
              </p>
            </div>
            <div className="w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-12 h-12 text-gold animate-bounce [animation-duration:4s]" strokeWidth={1.5} />
            </div>
          </div>

          {/* কলাম ৩: ডেডিকেটেড সাপোর্ট */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card text-card-foreground p-6 rounded-2xl border border-border-custom shadow-sm h-full">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "ডেডিকেটেড সাপোর্ট" : "Dedicated Support"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {lang === "BN"
                  ? "আমাদের এক্সপার্ট সাপোর্ট টিম যেকোনো টেকনিক্যাল সমস্যায় আপনাকে সাহায্য করতে ২৪/৭ প্রস্তুত।"
                  : "Our support team is always available to help you when needed."}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <button className="h-8 px-3 rounded-lg bg-[#0b241b] text-gold border border-gold/30 text-[11px] font-bold flex items-center gap-1.5 hover:bg-gold hover:text-[#0b241b] transition-all shadow-sm">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {lang === "BN" ? "লাইভ চ্যাট" : "Live Chat"}
                </button>
                <button className="h-8 px-3 rounded-lg bg-secondary text-foreground border border-border-custom text-[11px] font-bold flex items-center gap-1.5 hover:bg-card transition-all shadow-sm">
                  <Ticket className="w-3.5 h-3.5" />
                  {lang === "BN" ? "সাপোর্ট টিকিট" : "Support Ticket"}
                </button>
              </div>
            </div>
            <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent border border-primary/20 flex items-center justify-center relative shadow-md">
              <Headphones className="w-12 h-12 text-primary" strokeWidth={1.5} />
              <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-ping" />
            </div>
          </div>
        </div>

        {/* ================= ২. বটম পার্ট: পেমেন্ট গেটওয়ে পার্টনার্স ================= */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
            {lang === "BN"
              ? "আমরা সকল জনপ্রিয় পেমেন্ট মাধ্যম সাপোর্ট করি"
              : "We Support Multiple Payment Methods"}
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-card/60 ">
            
            {/* রেসপন্সিভ বড় লোগো গ্রিড (h-16 এবং অপ্টিমাইজড প্যাডিং) */}
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3.5 flex-1 w-full">
              {paymentLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-16 bg-background dark:bg-foreground/60  rounded-xl border border-neutral-200/80 flex items-center justify-center p-1.5 hover:scale-105 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative group"
                  title={logo.name}
                >
                  <img
                    src={logo.img?.src || logo.img}
                    alt={logo.name}
                    className="h-full w-full object-contain filter contrast-[1.02]"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-[10px] font-bold text-neutral-500 font-mono text-center truncate px-1">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>

            {/* ডান পাশের আপগ্রেডেড SSLCommerz ভেরিফাইড পার্টনার প্যানেল */}
            <div className="shrink-0 flex flex-col items-center lg:items-end justify-center px-6 py-2 border-t lg:border-t-0 lg:border-l border-border-custom/60 w-full lg:w-auto">
              <span className="text-[10px] text-muted-foreground font-semibold mb-2 uppercase tracking-wider">
                Verified Secure Gateway
              </span>
              <div className=" p-2 rounded-xl flex flex-col items-center justify-center shadow-sm  w-full max-w-45">
                <img 
                  src={ssl.src} 
                  alt="SSLCommerz" 
                  className="h-auto w-full max-w-35 object-contain" 
                />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}