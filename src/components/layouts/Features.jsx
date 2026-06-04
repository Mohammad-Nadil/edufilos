import React from "react";

import {
  Users,
  GraduationCap,
  TrendingUp,
  BookOpenCheck,
  Globe,
  ShieldCheck,
  Smartphone,
  CreditCard,
} from "lucide-react";
import IslamicPattern from "../ui/IslamicPattern";
import Card from "../ui/Card";

const Features = ({ language }) => {
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
      color: "text-primary",
      bg: "bg-primary/10",
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
  return (
    <section
      id="features"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <IslamicPattern variant="star" opacity={0.03} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
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
  );
};

export default Features;
