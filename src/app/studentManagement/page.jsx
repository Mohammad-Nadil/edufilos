"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import { 
  FiSearch, 
  FiUserPlus, 
  FiSliders, 
  FiMoreVertical, 
  FiUser, 
  FiBookOpen, 
  FiCheckCircle, 
  FiAlertCircle 
} from "react-icons/fi";

function StudentManagementContent() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const stats = useMemo(() => [
    {
      title: { en: "Total Students", bn: "মোট শিক্ষার্থী" },
      value: "1,240",
      icon: FiUser,
      color: "text-primary bg-primary/5 border-primary/10",
    },
    {
      title: { en: "Today's Attendance", bn: "আজকের উপস্থিতি" },
      value: "94.2%",
      icon: FiCheckCircle,
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/10",
    },
    {
      title: { en: "Active Classes", bn: "অ্যাক্টিভ ক্লাস" },
      value: "18",
      icon: FiBookOpen,
      color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-500/10",
    },
  ], []);

  const masterStudents = useMemo(() => [
    { id: "STU-001", name: { en: "Abdullah Al Mansur", bn: "আব্দুল্লাহ আল মনসুর" }, class: "Class 6", roll: "01", status: "active", guardian: "Md. Mansur" },
    { id: "STU-002", name: { en: "Zayd Ibn Harith", bn: "যায়দ ইবনে হারিস" }, class: "Class 7", roll: "05", status: "active", guardian: "Harith Ahmed" },
    { id: "STU-003", name: { en: "Fatima Tuj Zohra", bn: "ফাতিমা তুজ জোহরা" }, class: "Class 6", roll: "02", status: "inactive", guardian: "Abdul Karim" },
    { id: "STU-004", name: { en: "Umar Farooq", bn: "উমর ফারুক" }, class: "Class 8", roll: "12", status: "active", guardian: "Rafiqul Islam" },
    { id: "STU-005", name: { en: "Aisha Rahman", bn: "আয়েশা রহমান" }, class: "Class 7", roll: "03", status: "active", guardian: "Fazlur Rahman" },
  ], []);

  const filteredStudents = useMemo(() => {
    return masterStudents.filter((student) => {
      const matchesClass = selectedClass === "all" || student.class === selectedClass;
      const nameText = lang === "BN" ? student.name.bn : student.name.en;
      const matchesSearch = nameText.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            student.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesClass && matchesSearch;
    });
  }, [searchQuery, selectedClass, masterStudents, lang]);

  return (
    <div className="min-h-screen bg-bg-background text-neutral-800 dark:text-foreground pt-6 pb-24">
      <Container className="px-4 max-w-7xl mx-auto space-y-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200/60 dark:border-border-custom/50 pb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
              {lang === "BN" ? "শিক্ষার্থী ব্যবস্থাপনা" : "Student Management"}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-0.5">
              {lang === "BN" ? "শিক্ষার্থীদের প্রোফাইল, রোল এবং ক্লাসভিত্তিক ডাটাবেজ।" : "Manage profiles, class rosters, rolls, and institutional records."}
            </p>
          </div>
          
          <button className="w-full sm:w-auto h-11 px-5 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:brightness-105 transition-all">
            <FiUserPlus className="w-4 h-4" />
            <span>{lang === "BN" ? "নতুন শিক্ষার্থী যুক্ত করুন" : "Add New Student"}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`bg-white dark:bg-card border rounded-2xl p-4 sm:p-5 flex items-center gap-4 ${item.color} ${idx === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
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
              placeholder={lang === "BN" ? "নাম বা আইডি দিয়ে খুঁজুন..." : "Search by student name or ID..."}
            />
          </div>

          <div className="w-full md:w-auto flex items-center gap-2 self-stretch md:self-auto">
            <div className="relative w-full md:w-48">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full h-11 px-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-xs font-bold text-neutral-600 dark:text-muted-foreground outline-none appearance-none cursor-pointer"
              >
                <option value="all">{lang === "BN" ? "সকল ক্লাস" : "All Classes"}</option>
                <option value="Class 6">{lang === "BN" ? "ক্লাস ৬" : "Class 6"}</option>
                <option value="Class 7">{lang === "BN" ? "ক্লাস ৭" : "Class 7"}</option>
                <option value="Class 8">{lang === "BN" ? "ক্লাস ৮" : "Class 8"}</option>
              </select>
              <FiSliders className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {filteredStudents.length > 0 ? (
  <>
    <div className="hidden md:block bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl overflow-hidden shadow-2xs">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-200/60 dark:border-border-custom/50">
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">{lang === "BN" ? "আইডি" : "ID"}</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">{lang === "BN" ? "শিক্ষার্থীর নাম" : "Student Name"}</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">{lang === "BN" ? "ক্লাস" : "Class"}</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">{lang === "BN" ? "রোল" : "Roll"}</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">{lang === "BN" ? "অভিভাবক" : "Guardian"}</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">{lang === "BN" ? "স্ট্যাটাস" : "Status"}</th>
            <th className="p-4 text-right text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 dark:divide-border-custom/40">
          {filteredStudents.map((student) => (
            <tr key={student.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors">
              <td className="p-4 text-xs font-mono font-bold text-neutral-500 dark:text-muted-foreground">{student.id}</td>
              <td className="p-4 text-sm font-bold text-neutral-900 dark:text-white">
                {lang === "BN" ? student.name.bn : student.name.en}
              </td>
              <td className="p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-300">{student.class}</td>
              <td className="p-4 text-xs font-bold text-primary">{student.roll}</td>
              <td className="p-4 text-xs font-medium text-neutral-500 dark:text-muted-foreground">{student.guardian}</td>
              <td className="p-4">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                  student.status === "active" 
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20" 
                    : "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700"
                }`}>
                  {student.status}
                </span>
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
      {filteredStudents.map((student) => (
        <div 
          key={student.id} 
          className="bg-white dark:bg-card border border-neutral-200/50 dark:border-border-custom/50 rounded-xl p-4 flex flex-col gap-3 shadow-xs"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-bold text-xs flex items-center justify-center border border-neutral-200/40 dark:border-border-custom/30 shrink-0">
                {student.name.en.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                  {lang === "BN" ? student.name.bn : student.name.en}
                </h4>
                <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
                  {student.id}
                </span>
              </div>
            </div>

            <button className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer shrink-0">
              <FiMoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-muted-foreground font-semibold bg-neutral-50 dark:bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-100 dark:border-border-custom/20">
            <span className="text-neutral-800 dark:text-neutral-200">
              {student.class}
            </span>
            <span className="text-neutral-300 dark:text-border-custom">•</span>
            <span>
              {lang === "BN" ? `রোল: ` : `Roll: `}
              <strong className="text-primary font-bold">{student.roll}</strong>
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 pt-1 text-[11px]">
            <div className="truncate">
              <span className="text-neutral-400 block text-[9px] uppercase font-bold tracking-wider mb-0.5">
                {lang === "BN" ? "অভিভাবক" : "Guardian"}
              </span>
              <span className="font-medium text-neutral-600 dark:text-neutral-300 truncate">
                {student.guardian}
              </span>
            </div>

            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border shrink-0 ${
              student.status === "active" 
                ? "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20" 
                : "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:border-custom"
            }`}>
              {student.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </>
) : (
  /* এম্পটি স্টেট */
  <div className="bg-white dark:bg-card border border-dashed border-neutral-200 dark:border-border-custom/80 rounded-2xl p-12 text-center">
    <FiAlertCircle className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
    <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
      {lang === "BN" ? "কোনো শিক্ষার্থীর রেকর্ড মেলেনি" : "No Student Records Found"}
    </h3>
    <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
      {lang === "BN" ? "অনুগ্রহ করে অন্য কোনো নাম, আইডি অথবা ক্লাস ফিল্টার সিলেক্ট করে ট্রাই করুন।" : "Try adjusting your search queries or change the selected class parameter."}
    </p>
  </div>
)}

      </Container>
    </div>
  );
}

export default function StudentManagement() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] dark:bg-background flex items-center justify-center text-xs font-bold text-neutral-400 tracking-widest">
          INITIALIZING STUDENT DATABASE...
        </div>
      }
    >
      <StudentManagementContent />
    </Suspense>
  );
}