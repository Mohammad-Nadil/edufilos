"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { MessageSquare, Ticket } from "lucide-react";

export default function TrustAndPayment() {
  const { lang } = useLanguage();

  // পিন্টারেস্ট সিডিএন থেকে রিয়েল পেমেন্ট পার্টনারদের লোগো ইমেজ ইউআরএল
  const paymentLogos = [
    { name: "Visa", url: "https://i.pinimg.com/736x/01/a2/33/01a233b664188fa632bfdfc1fc22cb15.jpg" },
    { name: "Mastercard", url: "https://i.pinimg.com/736x/aa/5b/42/aa5b42d72fb09772c676d66e74b34b7f.jpg" },
    { name: "Amex", url: "https://i.pinimg.com/736x/88/2c/b0/882cb0cb95dfcb0a40a501bf042858d4.jpg" },
    { name: "bKash", url: "https://i.pinimg.com/736x/e4/20/d1/e42011b93383a152e12e1f4866f809d3.jpg" },
    { name: "Nagad", url: "https://i.pinimg.com/736x/43/b2/87/43b287ffda4afb79a556d35706825dfa.jpg" },
    { name: "Rocket", url: "https://i.pinimg.com/736x/3a/0e/db/3a0edbe8e51b14cf605d3b145b5bcbc1.jpg" },
    { name: "Upay", url: "https://i.pinimg.com/736x/cd/66/68/cd6668798bf1218df915f03d50849641.jpg" },
    { name: "Visa DBBL", url: "https://i.pinimg.com/736x/cf/e6/24/cfe624b455b5d15c7fa377f4e91880fb.jpg" },
    { name: "Islami Bank", url: "https://i.pinimg.com/736x/f6/bc/cb/f6bccb10294e50d5402925a666e14777.jpg" },
    { name: "City Bank", url: "https://i.pinimg.com/736x/21/5c/df/215cdf605fa8617d3d0fca8fb4380e22.jpg" },
    { name: "Brac Bank", url: "https://i.pinimg.com/736x/55/9b/6c/559b6c0e86b03eb2db9f9543be88b39b.jpg" },
    { name: "CellFin", url: "https://i.pinimg.com/736x/3f/76/3e/3f763ebc0b05bdf9c40590dfbf83d81b.jpg" }
  ];

  return (
    <section className="py-16 bg-background border-t border-border-custom select-none">
      <Container>
        {/* ================= ১. টপ ৩-কলাম ইনফো গ্রিড ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-20">
          
          {/* কলাম ১: মোবাইল অ্যাপ অ্যাক্সেস */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card/40 p-6 rounded-2xl border border-border-custom/50 h-full">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "মোবাইল অ্যাপ অ্যাক্সেস" : "Mobile App Access"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                {lang === "BN" 
                  ? "যেকোনো জায়গা থেকে সহজেই আপনার মাদরাসা পরিচালনা করুন আমাদের মোবাইল অ্যাপ দিয়ে।" 
                  : "Manage your madrasha on the go with our mobile app."}
              </p>
              
              {/* স্টোর বাটন ইমেজ (Pinterest সিডিএন থেকে) */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <a href="#playstore" className="hover:opacity-90 active:scale-95 transition-all">
                  <img 
                    src="https://i.pinimg.com/736x/a2/21/80/a22180860edc7f53df7dfdf00378951b.jpg" 
                    alt="Google Play" 
                    className="h-9 object-contain rounded-lg border border-neutral-800"
                  />
                </a>
                <a href="#appstore" className="hover:opacity-90 active:scale-95 transition-all">
                  <img 
                    src="https://i.pinimg.com/736x/3a/00/3c/3a003c2006da2784775d7fc7cf7a1672.jpg" 
                    alt="App Store" 
                    className="h-9 object-contain rounded-lg border border-neutral-800"
                  />
                </a>
              </div>
            </div>
            
            {/* মোবাইল মকআপ ফ্রেম */}
            <div className="relative w-24 h-44 shrink-0 overflow-hidden rounded-[20px] shadow-lg border border-border-custom bg-neutral-900">
              <img 
                src="https://i.pinimg.com/736x/be/49/a7/be49a74421b5853b0064f7b6058be9f7.jpg" 
                alt="Mobile App View" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* কলাম ২: সিকিউর অ্যান্ড ট্রাস্টেড */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card/40 p-6 rounded-2xl border border-border-custom/50 h-full">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "নিরাপদ ও নির্ভরযোগ্য" : "Secure & Trusted"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "BN" 
                  ? "আপনার প্রতিষ্ঠানের সমস্ত ডেটা আমাদের কাছে সম্পূর্ণ নিরাপদ। আমরা ব্যবহার করি টপ-নচ ব্যাংক লেভেল সিকিউরিটি ও ডেইলি ক্লাউড ব্যাকআপ।" 
                  : "Your data is safe with us. We use top-level security and regular backups."}
              </p>
            </div>
            {/* মেহরাব থিম বা প্রিমিয়াম ৩ডি সিকিউরিটি শিল্ড */}
            <div className="w-24 h-24 shrink-0 overflow-hidden rounded-2xl border border-gold/20 shadow-inner">
              <img 
                src="https://i.pinimg.com/736x/32/38/20/32382025776d5427d142bdf5599dae3d.jpg" 
                alt="Secure Shield" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* কলাম ৩: ডেডিকেটেড সাপোর্ট */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card/40 p-6 rounded-2xl border border-border-custom/50 h-full">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "ডেডিকেটেড সাপোর্ট" : "Dedicated Support"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {lang === "BN" 
                  ? "আমাদের এক্সপার্ট সাপোর্ট টিম যেকোনো টেকনিক্যাল সমস্যায় আপনাকে সাহায্য করতে ২৪/৭ প্রস্তুত।" 
                  : "Our support team is always available to help you when needed."}
              </p>
              {/* অ্যাকশন বাটনস */}
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <button className="h-8 px-3 rounded-lg bg-[#0b241b] text-gold border border-gold/30 text-[11px] font-bold flex items-center gap-1.5 hover:bg-gold hover:text-[#0b241b] transition-all">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {lang === "BN" ? "লাইভ চ্যাট" : "Live Chat"}
                </button>
                <button className="h-8 px-3 rounded-lg bg-secondary text-foreground border border-border-custom text-[11px] font-bold flex items-center gap-1.5 hover:bg-card transition-all">
                  <Ticket className="w-3.5 h-3.5" />
                  {lang === "BN" ? "সাপোর্ট টিকিট" : "Support Ticket"}
                </button>
              </div>
            </div>
            {/* ৩ডি সাপোর্ট হেডসেট ইল্লাস্ট্রেশন */}
            <div className="w-24 h-24 shrink-0 overflow-hidden rounded-full border border-primary/20 relative shadow-md">
              <img 
                src="https://i.pinimg.com/736x/77/fc/da/77fcda89e933441a7d65b74aa68f74e6.jpg" 
                alt="Support Agent" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 right-2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
            </div>
          </div>

        </div>

        {/* ================= ২. বটম পার্ট: পেমেন্ট গেটওয়ে পার্টনার্স ================= */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-6">
            {lang === "BN" ? "আমরা সকল জনপ্রিয় পেমেন্ট মাধ্যম সাপোর্ট করি" : "We Support Multiple Payment Methods"}
          </p>
          
          {/* গেটওয়ে প্যানেল এবং SSLCommerz ভেরিফাইড ব্যাজ */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-card/20 p-6 rounded-3xl border border-border-custom/40">
            
            {/* লোকাল ব্যাংক ও ওয়ালেট লোগো গ্রিড */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 flex-1 w-full">
              {paymentLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="h-10 bg-white rounded-xl border border-neutral-200 flex items-center justify-center p-1.5 hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* ডান পাশের স্পেশাল SSLCommerz ভেরিফাইড পার্টনার প্যানেল */}
            <div className="shrink-0 flex flex-col items-center lg:items-end justify-center px-4 py-2 border-t lg:border-t-0 lg:border-l border-border-custom/60 w-full lg:w-auto">
              <span className="text-[10px] text-muted-foreground font-medium mb-2">Verified Secure by</span>
              <div className="h-10 w-36 overflow-hidden rounded-xl bg-white border border-neutral-200 p-1 flex items-center justify-center shadow-sm">
                <Image 
                  src="https://i.pinimg.com/736x/87/1a/06/871a067645f78007a1664d95b5df308a.jpg" 
                  alt="SSLCommerz Verified" 
                  fill
                  className=" object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}