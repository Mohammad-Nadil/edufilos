import React from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { ArrowRight, LayoutDashboard, Zap } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import Calligraphy from "../ui/Caligraphy";
import imgCalligraphy from "../../../public/calligraphyBg.png";
import imgBism from "../../../public/bism.png";

const Banner = ({ user, language }) => {
  const dashboardUrl = user?.role ? `/dashboard/${user.role}` : "/login";
  return (
    <section className="relative  pt-20 pb-32 overflow-hidden">
      {/* <IslamicPattern variant="geometric" opacity={0.07} /> */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {" "}
        <div
          className="mx-auto mb-6 transition-colors duration-300 w-full aspect-20/2"
          style={{
            backgroundColor: "#047850",
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <p>إدارة مدرستك بذكاء | Premium Ecosystem</p>
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          {language === "bn" ? (
            <>
              আধুনিক মাদরাসার জন্য{" "}
              <span className="text-primary italic">EduFilos</span> ERP
            </>
          ) : (
            <>
              Intelligent <span className="text-primary italic">ERP</span>
              Ecosystem for Modern Madrashas
            </>
          )}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          হিসাববিজ্ঞান, অনলাইন এডমিশন, রেজাল্ট শীট এবং অটোমেটেড রিপোর্ট
          জেনারেশনসহ আধুনিক মাদরাসার সব প্রশাসনিক কাজ এখন এক প্ল্যাটফর্মে।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {user && user.role ? (
            <Link href={dashboardUrl} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 rounded-2xl group transition-all hover:scale-105 active:scale-95 bg-primary text-white"
              >
                <LayoutDashboard className="mr-2 w-5 h-5" />
                ড্যাশবোর্ড দেখুন
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <Link href="/register-madrasha" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 rounded-2xl group transition-all hover:scale-105 active:scale-95 bg-primary text-white"
              >
                মাদরাসা রেজিস্ট্রেশন করুন
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
          <Link href="#features" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 px-8 text-lg font-bold border-slate-200 hover:bg-slate-50 rounded-2xl transition-all"
            >
              Explore Features
            </Button>
          </Link>
        </div>
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-20 pointer-events-none" />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="rounded-2xl bg-white border border-slate-100 shadow-inner overflow-hidden aspect-video relative">
              <div className="absolute top-0 inset-x-0 h-10 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="p-8 mt-6 text-left">
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-24 rounded-xl bg-slate-50 border border-slate-100 animate-pulse"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2 h-64 rounded-xl bg-slate-50 border border-slate-100 animate-pulse" />
                  <div className="h-64 rounded-xl bg-slate-50 border border-slate-100 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0  ">
        <Calligraphy
          imageSrc={imgCalligraphy.src}
          textColor="#26262605"
          className=" "
        />
      </div>
    </section>
  );
};

export default Banner;
