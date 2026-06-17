"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { MessageSquare, Ticket, ShieldCheck, Headphones } from "lucide-react";
import visaImg from "@/../public/visaLogo.png";
import mastercardImg from "@/../public/masterLogo.png";
import americanImg from "@/../public/americalLogo.png";
import bracImg from "@/../public/bracLogo.png";
import dutchImg from "@/../public/dutchLogo.png";
import cityImg from "@/../public/cityLogo.png";
import islamiImg from "@/../public/islamiLogo.png";
import abImg from "@/../public/abLogo.png";
import qcashImg from "@/../public/qcashLogo.png";
import fastImg from "@/../public/fastLogo.png";
import bkashImg from "@/../public/bkashLogo.png";
import rocketImg from "@/../public/rocketLogo.png";
import myImg from "@/../public/myLogo.jpg";
import upayImg from "@/../public/upayLogo.webp";
import ssl from "@/../public/sslLogo.png";
import Image from "next/image";
import phoneImg from "@/../public/phone.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import placeholder from "@/../public/main.jpg";

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
    <section className="py-16 bg-background select-none">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 items-stretch mb-20">
          <div className="flex flex-row items-center gap-6 bg-card text-card-foreground p-4 sm:p-6 rounded-2xl border border-border-custom shadow-sm h-full">
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {lang === "BN" ? "মোবাইল অ্যাপ অ্যাক্সেস" : "Mobile App Access"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                {lang === "BN"
                  ? "যেকোনো জায়গা থেকে সহজেই আপনার মাদরাসা পরিচালনা করুন আমাদের mobile অ্যাপ দিয়ে।"
                  : "Manage your madrasha on the go with our mobile app."}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
                <a
                  href="#"
                  className="bg-neutral-900 hover:bg-black text-white px-3 py-1.5 rounded  sm:rounded-xl flex items-center gap-2 border border-neutral-800 transition-colors shadow-xs group/btn"
                >
                  <FaGooglePlay className="w-4 h-4 text-neutral-300 group-hover/btn:text-white transition-colors" />
                  <div className="text-left">
                    <p className="text-[7px] font-medium leading-none uppercase tracking-wider text-neutral-400">
                      Get it on
                    </p>
                    <p className="text-[10px] font-semibold leading-none mt-0.5 tracking-tight">
                      Google Play
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="bg-neutral-900 hover:bg-black text-white px-3 py-1.5 rounded  sm:rounded-xl flex items-center gap-2 border border-neutral-800 transition-colors shadow-xs group/btn"
                >
                  <FaApple className="w-4 h-4 text-neutral-300 group-hover/btn:text-white transition-colors" />
                  <div className="text-left">
                    <p className="text-[7px] font-medium leading-none uppercase tracking-wider text-neutral-400">
                      Download on the
                    </p>
                    <p className="text-[10px] font-semibold leading-none mt-0.5 tracking-tight">
                      App Store
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative w-1/7 sm:w-1/6 aspect-1/2">
              <Image
                src={phoneImg}
                fill
                alt="phone"
                sizes="(max-width: 640px) 14vw, 17vw"
                className="relative z-20"
              />
              <Image
                src={placeholder}
                fill
                alt="placeholder"
                sizes="(max-width: 640px) 14vw, 17vw"
                className="object-cover absolute inset-0 z-10 rounded sm:rounded-xl md:rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 bg-card text-card-foreground p-4 sm:p-6 rounded-2xl border border-border-custom shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                {lang === "BN" ? "নিরাপদ ও নির্ভরযোগ্য" : "Secure & Trusted"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                {lang === "BN"
                  ? "আপনার প্রতিষ্ঠানের সমস্ত ডেটা আমাদের কাছে সম্পূর্ণ নিরাপদ। আমরা ব্যবহার করি টপ-নচ ব্যাংক লেভেল সিকিউরিটি ও DAILY ক্লাউড ব্যাকআপ।"
                  : "Your data is safe with us. We use top-level security and regular backups."}
              </p>
            </div>
            <div className=" w-16 sm:w-20 aspect-square shrink-0 rounded-2xl bg-linear-to-br from-amber-500/10 to-transparent dark:from-amber-500/5 border border-amber-500/20 flex items-center justify-center shadow-inner relative group">
              <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <ShieldCheck
                className="w-10 h-10 text-amber-500 motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 bg-card text-card-foreground p-4 sm:p-6 rounded-2xl border border-border-custom shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                {lang === "BN" ? "ডেডিকেটেড সাপোর্ট" : "Dedicated Support"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5 max-w-xs">
                {lang === "BN"
                  ? "আমাদের এক্সপার্ট সাপোর্ট টিম যেকোনো টেকনিক্যাল সমস্যায় আপনাকে সাহায্য করতে ২৪/৭ প্রস্তুত।"
                  : "Our support team is always available to help you when needed."}
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
                <button className="h-8.5 px-3.5 rounded  sm:rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50 text-[11px] font-semibold flex items-center gap-1.5 hover:bg-emerald-900 hover:text-emerald-300 transition-all shadow-xs cursor-pointer">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {lang === "BN" ? "লাইভ চ্যাট" : "Live Chat"}
                </button>
                <button className="h-8.5 px-3.5 rounded  sm:rounded-xl bg-secondary text-secondary-foreground border border-border-custom text-[11px] font-semibold flex items-center gap-1.5 hover:bg-muted transition-all shadow-xs cursor-pointer">
                  <Ticket className="w-3.5 h-3.5" />
                  {lang === "BN" ? "সাপোর্ট টিকিট" : "Support Ticket"}
                </button>
              </div>
            </div>

            <div className="w-16 sm:w-20 aspect-square shrink-0 rounded-full bg-linear-to-tr from-primary/10 to-transparent border border-primary/20 flex items-center justify-center relative shadow-inner group">
              <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              <Headphones
                className="w-10 h-10 text-primary"
                strokeWidth={1.5}
              />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-card" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
            {lang === "BN"
              ? "আমরা সকল জনপ্রিয় পেমেন্ট মাধ্যম সাপোর্ট করি"
              : "We Support Multiple Payment Methods"}
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8  ">
            <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3.5 flex-1 w-full">
              {paymentLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-16 bg-card dark:bg-foreground/50 rounded sm:rounded-xl border border-border-custom flex items-center justify-center p-1.5 hover:scale-105 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative group"
                  title={logo.name}
                >
                  <Image
                    src={logo.img}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 640px) 20vw, (max-width: 1024px) 10vw, 100px"
                    className="object-contain p-1.5 filter contrast-[1.02]"
                    priority={index < 5}
                  />
                  <span className="hidden text-[10px] font-bold text-neutral-500 font-mono text-center truncate px-1">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="shrink-0 flex flex-col items-center lg:items-end justify-center px-6 py-2 border-t lg:border-t-0 lg:border-l border-border-custom/60 w-full lg:w-auto">
              <span className="text-[10px] text-muted-foreground font-semibold mb-2 uppercase tracking-wider">
                Verified Secure Gateway
              </span>
              <div className=" p-2 rounded  sm:rounded-xl flex flex-col items-center justify-center shadow-sm  w-full max-w-45">
                <img
                  src={ssl.src || ssl}
                  alt="SSLCommerz"
                  width={140}
                  height={50}
                  style={{ width: "100%", height: "auto" }}
                  className="max-w-35 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
