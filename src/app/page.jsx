"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import IslamicPattern from "@/components/ui/IslamicPattern";

import {
  Users,
  GraduationCap,
  TrendingUp,
  BookOpenCheck,
  Globe,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Zap,
  LayoutDashboard,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

export default function HomeClient({ user, plans: serverPlans }) {
  const language = "bn";

  const cards = [
    {
      icon: Users,
      title: "ছাত্র ব্যবস্থাপনা",
      desc: "Complete automated registration pipeline setup for structural profiling database tracking.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: GraduationCap,
      title: "অনলাইন এডমিশন",
      desc: "Advanced registration tracking with custom admission data collection nodes.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: TrendingUp,
      title: "ফি সংগ্রহ ও পেরোল",
      desc: "Dynamic structural financial ledger control backed by micro automatic transaction tracking.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: BookOpenCheck,
      title: "Result Management",
      desc: "Generate result sheets, transcripts, and progress reports automatically.",
      color: "text-(--primary)",
      bg: "bg-(--primary)/10",
    },
    {
      icon: Globe,
      title: "Custom Subdomains",
      desc: "Each institution gets its own unique web address under your domain.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Role Based Access",
      desc: "Secure portals for Admins, Teachers, Students, and Guardians.",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      desc: "Optimized for all devices including smartphones and tablets.",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
    {
      icon: CreditCard,
      title: "Financial Control",
      desc: "Integrated billing and invoice system with bKash support.",
      color: "text-slate-700",
      bg: "bg-slate-700/10",
    },
  ];
  const [plans] = useState(
    serverPlans || [
      {
        _id: "1",
        name: "Standard (القياسية)",
        code: "STANDARD",
        price: 4900,
        billingCycle: "monthly",
        features: [
          "Student records logs",
          "Faculties directory grids",
          "Basic accounting",
        ],
        limits: {
          maxStudents: 500,
          maxEmployees: 30,
          storageLimit: 2048,
        },
      },
      {
        _id: "2",
        name: "Premium (المميزة)",
        code: "PREMIUM",
        price: 9999,
        billingCycle: "monthly",
        features: [
          "Automated SMS pipelines",
          "Online admissions tracking",
          "Advanced reporting",
        ],
        limits: {
          maxStudents: 2000,
          maxEmployees: 100,
          storageLimit: 10240,
        },
      },
      {
        _id: "3",
        name: "Enterprise (المؤسسات)",
        code: "ENTERPRISE",
        price: 14999,
        billingCycle: "yearly",
        features: [
          "Multi-branch sync operations",
          "Custom institutional subdomains",
          "Dedicated manager",
        ],
        limits: {
          maxStudents: "Unlimited",
          maxEmployees: "Unlimited",
          storageLimit: "Unlimited",
        },
      },
    ],
  );
  const [loadingPlans] = useState(false);

  const dashboardUrl = user?.role ? `/dashboard/${user.role}` : "/login";

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans  ">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <IslamicPattern variant="geometric" opacity={0.07} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--primary)/10 text-(--primary) text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <p>إدارة مدرستك بذكاء | Premium Ecosystem</p>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            {language === "bn" ? (
              <>
                আধুনিক মাদরাসার জন্য{" "}
                <span className="text-(--primary) italic">EduFilos</span> ERP
              </>
            ) : (
              <>
                Intelligent <span className="text-(--primary) italic">ERP</span>{" "}
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
                  className="w-full h-14 px-8 text-lg font-bold shadow-xl shadow-(--primary)/20 rounded-2xl group transition-all hover:scale-105 active:scale-95 bg-(--primary) text-white"
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
                  className="w-full h-14 px-8 text-lg font-bold shadow-xl shadow-(--primary)/20 rounded-2xl group transition-all hover:scale-105 active:scale-95 bg-(--primary) text-white"
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
      </section>

      <section
        id="features"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <IslamicPattern variant="star" opacity={0.03} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-(--primary) uppercase tracking-[0.2em] mb-4">
              Powerful Features
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Designed specifically for Madrasha Management
            </p>
            <p className="text-lg text-slate-600">
              Everything you need to run your institution efficiently, from
              digital admissions to cloud-based accounting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((f, i) => (
              <Card
                key={i}
                className="group border-none shadow-none hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all p-8 rounded-3xl cursor-default"
              >
                <div className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 relative overflow-hidden">
        <IslamicPattern variant="floral" opacity={0.04} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-(--primary) uppercase tracking-[0.2em] mb-4">
              Flexible Pricing
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Choose the perfect plan for your institution
            </p>
            <p className="text-lg text-slate-600">
              Transparent pricing with no hidden fees. All plans include 24/7
              technical support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {loadingPlans
              ? [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-125 rounded-3xl bg-slate-50 animate-pulse border border-slate-100"
                  />
                ))
              : plans.map((plan) => (
                  <div
                    key={plan._id}
                    className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all ${plan.code === "STANDARD" ? "border-(--primary) ring-4 ring-(--primary)/5 bg-(--primary)/2 md:scale-105 z-10" : "border-slate-100"}`}
                  >
                    {plan.code === "STANDARD" && (
                      <div className="absolute top-0 right-8 -translate-y-1/2 bg-(--primary) text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border-4 border-white">
                        Most Popular
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-extrabold text-slate-900">
                          ৳{plan.price.toLocaleString()}
                        </span>
                        <span className="text-slate-500 text-sm">
                          /{plan.billingCycle}
                        </span>
                      </div>
                      <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-slate-700">
                            Max {plan.limits.maxStudents || "Unlimited"}{" "}
                            Students
                          </span>
                        </div>
                        <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-slate-700">
                            Max {plan.limits.maxEmployees || "Unlimited"} Staff
                          </span>
                        </div>
                        <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-slate-700">
                            {plan.limits.storageLimit || "Unlimited"} MB Storage
                          </span>
                        </div>
                        <div className="flex items-center gap-2 py-2 border-b border-slate-100">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-slate-700">
                            {plan.features.length} Premium Modules
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/register-madrasha?plan=${plan.code}`}
                      className="w-full mt-auto"
                    >
                      <Button
                        className={`w-full h-12 rounded-xl font-bold ${plan.code === "STANDARD" ? "bg-(--primary) text-white hover:opacity-90" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                      >
                        Choose Plan
                      </Button>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-(--primary) text-white relative overflow-hidden">
        <IslamicPattern variant="geometric" opacity={0.1} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Trust the platform made for Madrasha excellence
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: ShieldCheck,
                    t: "Enterprise Security",
                    d: "Data encryption and secure multi-tenant architecture to protect sensitive institutional records.",
                  },
                  {
                    icon: MessageSquare,
                    t: "Integrated Communication",
                    d: "Send SMS or Email alerts for attendance, results and fee reminders automatically.",
                  },
                  {
                    icon: HelpCircle,
                    t: "Expert Local Support",
                    d: "Dedicated relationship managers and technical support available 24/7 in Bangla/English.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.t}</h3>
                      <p className="text-emerald-100/70 leading-relaxed text-sm">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden rotate-3 max-w-100 mx-auto">
                <div className="text-center">
                  <p className="text-8xl font-black mb-4 tracking-tighter">
                    99%
                  </p>
                  <p className="text-xl font-medium text-emerald-200 uppercase tracking-widest">
                    Uptime Guarantee
                  </p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
