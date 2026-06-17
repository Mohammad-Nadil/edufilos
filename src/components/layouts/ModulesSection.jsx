"use client";

import React from "react";
import Container from "../ui/Container"; 
import { useLanguage } from "@/context/LanguageContext";
import { 
  Users, 
  BookOpen, 
  CreditCard, 
  FileSpreadsheet, 
  CalendarCheck, 
  Library, 
  BarChart3 
} from "lucide-react";

export default function ModulesSection() {
  const { lang } = useLanguage();

  const modules = [
    {
      icon: Users,
      en: "Student Management",
      bn: "শিক্ষার্থী ব্যবস্থাপনা",
      descEn: "Easily manage and track student information effortlessly.",
      descBn: "সহজে এবং নিখুঁতভাবে শিক্ষার্থীদের সকল তথ্য পরিচালনা করুন।"
    },
    {
      icon: BookOpen,
      en: "Academic Management",
      bn: "একাডেমিক ম্যানেজমেন্ট",
      descEn: "Manage classes, subjects, syllabus, and academic schedule.",
      descBn: "ক্লাস, বিষয়, সিলেবাস এবং একাডেমিক সময়সূচী নিয়ন্ত্রণ করুন।"
    },
    {
      icon: CreditCard,
      en: "Fees Management",
      bn: "ফি সংগ্রহ ও ট্র্যাকিং",
      descEn: "Track fees payments, dues, and generate reports easily.",
      descBn: "ফি প্রদান, বকেয়া ট্র্যাক করুন এবং রিপোর্ট তৈরি করুন।"
    },
    {
      icon: FileSpreadsheet,
      en: "Examination System",
      bn: "পরীক্ষা নিয়ন্ত্রণ সিস্টেম",
      descEn: "Create exams, marks entry, grades, and result management.",
      descBn: "পরীক্ষা তৈরি, নম্বর এন্ট্রি, গ্রেড এবং ফলাফল প্রকাশ করুন।"
    },
    {
      icon: CalendarCheck,
      en: "Attendance Tracking",
      bn: "উপস্থিতি ট্র্যাকিং",
      descEn: "Daily attendance tracking for students and teachers.",
      descBn: "শিক্ষার্থী ও শিক্ষকদের দৈনিক হাজিরা ডিজিটাল পদ্ধতিতে ট্র্যাক করুন।"
    },
    {
      icon: BarChart3,
      en: "Reports & Analytics",
      bn: "রিপোর্ট এবং অ্যানালিটিক্স",
      descEn: "Get powerful insights with advanced analytics.",
      descBn: "অ্যাডভান্সড অ্যানালিটিক্স দিয়ে মাদরাসার সার্বিক অগ্রগতি দেখুন।"
    }
  ];

  return (
    <section id="modules" className="py-10 sm:py-24 bg-background border-t border-border-custom/30">
      <Container>       
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground ">
            {lang === "BN" ? "আপনার প্রয়োজনীয় সবকিছু, এক জায়গায়" : "Everything You Need, All in One Place"}
          </h2>
          <div className="w-70 h-1 bg-linear-to-r from-transparent via-gold to-transparent rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-4 lg:gap-5">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-1 sm:p4 md:p-6 bg-card  rounded-2xl shadow-sm hover:shadow-md shadow-gold/60 hover:border-gold/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-14 h-14 my-4 rounded-full bg-background flex items-center justify-center text-gold shadow-inner border border-gold/10 group-hover:bg-gold group-hover:text-background transition-all duration-300 mb-5 shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                
                <h3 className="text-base font-bold text-foreground/90 tracking-wide leading-snug mb-2 font-roboto min-h-10 flex items-center justify-center">
                  {lang === "BN" ? mod.bn : mod.en}
                </h3>

                <p className="text-xs text-muted font-medium leading-relaxed max-w-50">
                  {lang === "BN" ? mod.descBn : mod.descEn}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}