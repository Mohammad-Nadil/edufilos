"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import {
  FiSearch,
  FiCalendar,
  FiSliders,
  FiMoreVertical,
  FiBookOpen,
  FiClock,
  FiAward,
  FiAlertCircle,
  FiBookmark,
} from "react-icons/fi";

function AcademicSystemContent() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const stats = useMemo(
    () => [
      {
        title: { en: "Active Subjects", bn: "মোট সক্রিয় বিষয়" },
        value: "৪২",
        icon: FiBookOpen,
        color: "text-primary bg-primary/5 border-primary/10",
      },
      {
        title: { en: "Today's Periods", bn: "আজকের মোট পিরিয়ড" },
        value: "২৪",
        icon: FiClock,
        color:
          "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/10",
      },
      {
        title: { en: "Syllabus Progress", bn: "সিলেবাস অগ্রগতি" },
        value: "৬৮%",
        icon: FiAward,
        color:
          "text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-500/10",
      },
    ],
    [],
  );

  const masterAcademic = useMemo(
    () => [
      {
        id: "ACA-101",
        subject: { en: "General Mathematics", bn: "সাধারণ গণিত" },
        class: "Class 8",
        time: "০৯:০০ AM - ০৯:৪৫ AM",
        teacher: "Mizanur Rahman",
        room: "রুম ৩০১",
      },
      {
        id: "ACA-102",
        subject: { en: "English Grammar", bn: "ইংরেজি ব্যাকরণ" },
        class: "Class 6",
        time: "০৯:৪৫ AM - ১০:৩০ AM",
        teacher: "Farhana Yasmin",
        room: "রুম ১০২",
      },
      {
        id: "ACA-103",
        subject: { en: "Bangla Literature", bn: "বাংলা সাহিত্য" },
        class: "Class 7",
        time: "১০:৪৫ AM - ১১:৩০ AM",
        teacher: "Abdul Wadud",
        room: "রুম ২০১",
      },
      {
        id: "ACA-104",
        subject: { en: "General Science", bn: "সাধারণ বিজ্ঞান" },
        class: "Class 8",
        time: "১১:৩০ AM - ১২:১৫ PM",
        teacher: "Dr. Anisur Rahman",
        room: "রুম ৩০৪",
      },
      {
        id: "ACA-105",
        subject: {
          en: "Bangladesh & Global Studies",
          bn: "বাংলাদেশ ও বিশ্বপরিচয়",
        },
        class: "Class 7",
        time: "১২:১৫ PM - ০১:০০ PM",
        teacher: "Nasrin Sultana",
        room: "রুম ২০৩",
      },
    ],
    [],
  );

  const filteredAcademic = useMemo(() => {
    return masterAcademic.filter((item) => {
      const matchesClass =
        selectedClass === "all" || item.class === selectedClass;
      const subjectText = lang === "BN" ? item.subject.bn : item.subject.en;
      const matchesSearch =
        subjectText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.teacher.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesClass && matchesSearch;
    });
  }, [searchQuery, selectedClass, masterAcademic, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-6 pb-24">
      <Container className=" space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border-custom pb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
              {lang === "BN" ? "একাডেমিক সিস্টেম" : "Academic System"}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-0.5">
              {lang === "BN"
                ? "শ্রেণি রুটিন, সময়সূচী এবং শিক্ষক বন্টন ব্যবস্থাপনা।"
                : "Manage class routines, subject schedules, rooms, and teacher assignments."}
            </p>
          </div>

          <button className="w-full sm:w-auto h-11 px-5 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:brightness-105 transition-all">
            <FiCalendar className="w-4 h-4" />
            <span>
              {lang === "BN" ? "নতুন পিরিয়ড যুক্ত করুন" : "Add New Period"}
            </span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white dark:bg-card border rounded-2xl p-4 sm:p-5 flex items-center gap-4 ${item.color} ${idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-10 sm:w-12 aspect-square rounded-xl flex items-center justify-center text-xl shrink-0 border bg-current/5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 dark:text-muted-foreground uppercase block tracking-wider">
                    {lang === "BN" ? item.title.bn : item.title.en}
                  </span>
                  <span className="text-lg sm:text-2xl font-black text-neutral-900 dark:text-white leading-none mt-1 block">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl p-3 flex flex-col md:flex-row gap-3 justify-between items-center shadow-2xs">
          <div className="relative w-full md:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-primary/30 transition-all"
              placeholder={
                lang === "BN"
                  ? "বিষয় বা শিক্ষকের নাম দিয়ে খুঁজুন..."
                  : "Search by subject or teacher name..."
              }
            />
          </div>

          <div className="w-full md:w-auto flex items-center gap-2 self-stretch md:self-auto">
            <div className="relative w-full md:w-48">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full h-11 px-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-xs font-bold text-neutral-600 dark:text-muted-foreground outline-none appearance-none cursor-pointer"
              >
                <option value="all">
                  {lang === "BN" ? "সকল ক্লাস" : "All Classes"}
                </option>
                <option value="Class 6">
                  {lang === "BN" ? "ক্লাস ৬" : "Class 6"}
                </option>
                <option value="Class 7">
                  {lang === "BN" ? "ক্লাস ৭" : "Class 7"}
                </option>
                <option value="Class 8">
                  {lang === "BN" ? "ক্লাস ৮" : "Class 8"}
                </option>
              </select>
              <FiSliders className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {filteredAcademic.length > 0 ? (
          <>
            <div className="hidden md:block bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-200/60 dark:border-border-custom/50">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "কোড" : "Code"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "বিষয়ের নাম" : "Subject Name"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "ক্লাস" : "Class"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "সময়সূচী" : "Schedule Time"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "শিক্ষক" : "Instructor"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "রুম নং" : "Room"}
                    </th>
                    <th className="p-4 text-right text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-border-custom/40">
                  {filteredAcademic.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors"
                    >
                      <td className="p-4 text-xs font-mono font-bold text-neutral-500 dark:text-muted-foreground">
                        {item.id}
                      </td>
                      <td className="p-4 text-sm font-bold text-neutral-900 dark:text-white">
                        {lang === "BN" ? item.subject.bn : item.subject.en}
                      </td>
                      <td className="p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                        {item.class}
                      </td>
                      <td className="p-4 text-xs font-bold text-primary">
                        {item.time}
                      </td>
                      <td className="p-4 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                        {item.teacher}
                      </td>
                      <td className="p-4 text-xs font-bold text-neutral-500 dark:text-muted-foreground">
                        {item.room}
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-all cursor-pointer">
                          <FiMoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="block md:hidden space-y-3">
              {filteredAcademic.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-card border border-neutral-200/50 dark:border-border-custom/50 rounded-xl p-4 flex flex-col gap-3 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-500 flex items-center justify-center border border-neutral-200/40 dark:border-border-custom/30 shrink-0">
                        <FiBookmark className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                          {lang === "BN" ? item.subject.bn : item.subject.en}
                        </h4>
                        <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
                          {item.id}
                        </span>
                      </div>
                    </div>

                    <button className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer shrink-0">
                      <FiMoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs bg-neutral-50 dark:bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-100 dark:border-border-custom/20">
                    <span className="text-neutral-800 dark:text-neutral-200 font-bold">
                      {item.class}
                    </span>
                    <span className="text-neutral-300 dark:text-border-custom">
                      •
                    </span>
                    <span className="text-primary font-bold">{item.time}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1 text-sm">
                    <div>
                      <span className="text-neutral-400 block text-xs uppercase font-bold tracking-wider mb-0.5">
                        {lang === "BN" ? "শিক্ষক" : "Instructor"}
                      </span>
                      <span className="font-semibold text-neutral-600 dark:text-neutral-300">
                        {item.teacher}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-neutral-400 block text-xs uppercase font-bold tracking-wider mb-0.5">
                        {lang === "BN" ? "স্থান" : "Location"}
                      </span>
                      <span className="inline-flex px-1.5 py-0.5 rounded font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        {item.room}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white dark:bg-card border border-dashed border-neutral-200 dark:border-border-custom/80 rounded-2xl p-12 text-center">
            <FiAlertCircle className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
              {lang === "BN"
                ? "কোনো একাডেমিক রেকর্ড মেলেনি"
                : "No Academic Records Found"}
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
              {lang === "BN"
                ? "অনুগ্রহ করে অন্য কোনো বিষয়ের নাম বা ক্লাস সিলেক্ট করে চেষ্টা করুন।"
                : "Try adjusting your search queries or change the selected class parameter."}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function AcademicSystem() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center text-xs font-bold text-neutral-400 tracking-widest">
          SYNCING ACADEMIC SCHEDULES...
        </div>
      }
    >
      <AcademicSystemContent />
    </Suspense>
  );
}
