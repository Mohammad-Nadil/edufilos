"use client";

import React from "react";
import { ArrowRight, LayoutDashboard, Zap } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import Calligraphy from "../ui/Caligraphy";
import imgCalligraphy from "../../../public/calligraphyBg.png";
import imgBism from "../../../public/bism.png";
import { useLanguage } from "@/context/LanguageContext";

const Banner = ({ user }) => {
  const { lang } = useLanguage();

  const dashboardUrl = user?.role ? `/dashboard/${user.role}` : "/login";

  return (
    <section
      className="relative pt-24 pb-24 md:pt-32 md:pb-36 overflow-hidden bg-white"
      id="home"
    >

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div
        
          className="mx-auto mb-6 transition-colors duration-300 w-full max-w-70 sm:max-w-90 md:max-w-100 h-12 sm:h-16"
          style={{
            backgroundColor: "#047857",
            maskImage: `url(${imgBism.src})`,
            WebkitMaskImage: `url(${imgBism.src})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 select-none">
          <Zap className="w-3.5 h-3.5 fill-current text-amber-500" />
          <p>
            {lang === "BN"
              ? "إدارة مدرستك بذكاء | প্রিমিয়াম ইকোসিস্টেম"
              : "إدارة مدرستك بذكاء | Premium Ecosystem"}
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.15] max-w-5xl mx-auto">
          {lang === "BN" ? (
            <>
              আধুনিক মাদরাসার জন্য{" "}
              <span className="text-primary italic font-black">EduFilos</span>{" "}
              ERP
            </>
          ) : (
            <>
              Intelligent{" "}
              <span className="text-primary italic font-black">ERP</span>{" "}
              Ecosystem for Modern Madrashas
            </>
          )}
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 mb-10 leading-relaxed font-medium">
          {lang === "BN"
            ? "হিসাববিজ্ঞান, অনলাইন এডমিশন, রেজাল্ট শীট এবং অটোমেটেড রিপোর্ট জেনারেশনসহ আধুনিক মাদরাসার সব প্রশাসনিক কাজ এখন এক প্ল্যাটফর্মে।"
            : "Streamline accounting, online admissions, result sheets, and automated report generation. Manage your entire institution inside a single unified cloud platform."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          {user && user.role ? (
            <Link href={dashboardUrl} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full h-14 px-8 text-base font-bold shadow-xl shadow-primary/20 rounded-2xl group transition-all hover:scale-[1.02] active:scale-95 bg-primary text-white flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-5 h-5 shrink-0" />
                <span>
                  {lang === "BN" ? "ড্যাশবোর্ড দেখুন" : "Go to Dashboard"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Button>
            </Link>
          ) : (
            <Link href="/register-madrasha" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full h-14 px-8 text-base font-bold shadow-xl shadow-primary/20 rounded-2xl group transition-all hover:scale-[1.02] active:scale-95 bg-primary text-white flex items-center justify-center gap-2"
              >
                <span>
                  {lang === "BN"
                    ? "মাদরাসা রেজিস্ট্রেশন করুন"
                    : "Register Your Madrasha"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Button>
            </Link>
          )}

          <Link href="#features" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 px-8 text-base font-bold border-slate-200 hover:bg-slate-50 rounded-2xl transition-all text-slate-700 bg-white"
            >
              {lang === "BN" ? "ফিচারসমূহ দেখুন" : "Explore Features"}
            </Button>
          </Link>
        </div>

        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto px-2 sm:px-0">
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-20 pointer-events-none bottom-0.5" />

          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-2 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="rounded-2xl bg-white border border-slate-200/60 shadow-inner overflow-hidden aspect-video relative">
              <div className="absolute top-0 inset-x-0 h-10 border-b border-slate-100 bg-slate-50 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dtxuo6JuaVw?si=o5tfsR3x53A9kyrz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none">
        <Calligraphy
          imageSrc={imgCalligraphy.src}
          textColor="#26262605"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
