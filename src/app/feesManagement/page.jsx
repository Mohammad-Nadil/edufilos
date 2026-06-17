"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import {
  FiSearch,
  FiPlusCircle,
  FiSliders,
  FiMoreVertical,
  FiDollarSign,
  FiClock,
  FiPieChart,
  FiAlertCircle,
  FiFileText,
} from "react-icons/fi";

function FeesManagementContent() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const stats = useMemo(
    () => [
      {
        title: { en: "Total Collected", bn: "মোট সংগ্রহ" },
        value: "৳৪,৫০,০০০",
        icon: FiDollarSign,
        color:
          "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/10",
      },
      {
        title: { en: "Pending Dues", bn: "বকেয়া ফি" },
        value: "৳৭৫,২০০",
        icon: FiClock,
        color:
          "text-rose-600 bg-rose-50 dark:bg-rose-500/10 border-rose-500/10",
      },
      {
        title: { en: "Invoices (Month)", bn: "মোট ইনভয়েস (চলতি মাস)" },
        value: "৩২০",
        icon: FiPieChart,
        color: "text-primary bg-primary/5 border-primary/10",
      },
    ],
    [],
  );

  const masterFees = useMemo(
    () => [
      {
        id: "INV-2026-001",
        name: { en: "Abdullah Al Mansur", bn: "আব্দুল্লাহ আল মনসুর" },
        type: { en: "Tuition Fee", bn: "টিউশন ফি" },
        amount: "৳১,৫০০",
        date: "১০ জুন, ২০২৬",
        status: "paid",
      },
      {
        id: "INV-2026-002",
        name: { en: "Zayd Ibn Harith", bn: "যায়দ ইবনে হারিস" },
        type: { en: "Exam Fee", bn: "পরীক্ষার ফি" },
        amount: "৳৫০০",
        date: "১২ জুন, ২০২৬",
        status: "unpaid",
      },
      {
        id: "INV-2026-003",
        name: { en: "Fatima Tuj Zohra", bn: "ফাতিমা তুজ জোহরা" },
        type: { en: "Tuition Fee", bn: "টিউশন ফি" },
        amount: "৳১,৫০০",
        date: "০৮ জুন, ২০২৬",
        status: "paid",
      },
      {
        id: "INV-2026-004",
        name: { en: "Umar Farooq", bn: "উমর ফারুক" },
        type: { en: "Session Fee", bn: "সেশন ফি" },
        amount: "৳৩,০০০",
        date: "১৫ জুন, ২০২৬",
        status: "unpaid",
      },
      {
        id: "INV-2026-005",
        name: { en: "Aisha Rahman", bn: "আয়েশা রহমান" },
        type: { en: "Admission Fee", bn: "ভর্তি ফি" },
        amount: "৳৫,০০০",
        date: "০১ জুন, ۲۰২৬",
        status: "paid",
      },
    ],
    [],
  );

  const filteredFees = useMemo(() => {
    return masterFees.filter((fee) => {
      const matchesStatus =
        statusFilter === "all" || fee.status === statusFilter;
      const nameText = lang === "BN" ? fee.name.bn : fee.name.en;
      const matchesSearch =
        nameText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fee.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, statusFilter, masterFees, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-6 pb-24">
      <Container className=" space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200/60 dark:border-border-custom/50 pb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
              {lang === "BN" ? "ফি ও তহবিল ব্যবস্থাপনা" : "Fees Management"}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-0.5">
              {lang === "BN"
                ? "শিক্ষার্থীদের বেতন, পরীক্ষার ফি এবং পেমেন্ট ইনভয়েস ট্র্যাকিং।"
                : "Track tuition, admission forms, monthly collections, and dues."}
            </p>
          </div>

          <button className="w-full sm:w-auto h-11 px-5 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:brightness-105 transition-all">
            <FiPlusCircle className="w-4 h-4" />
            <span>{lang === "BN" ? "নতুন ইনভয়েস তৈরি" : "Create Invoice"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white dark:bg-card border rounded-lg sm:rounded-2xl p-3 sm:p-5 flex items-center gap-4 ${item.color} ${idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-12 aspect-square rounded-xl flex items-center justify-center text-xl shrink-0 border bg-current/5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 dark:text-muted-foreground uppercase block tracking-wider">
                    {lang === "BN" ? item.title.bn : item.title.en}
                  </span>
                  <span className=" text-xl sm:text-2xl font-black text-neutral-900 dark:text-white leading-none mt-1 block">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-border-custom/60 rounded-2xl p-3 flex flex-col md:flex-row gap-3 justify-between items-center shadow-2xs">
          <div className="relative w-full md:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-sm font-medium outline-none focus:border-primary/30 transition-all"
              placeholder={
                lang === "BN"
                  ? "শিক্ষার্থীর নাম বা ইনভয়েস আইডি..."
                  : "Search by student name or Invoice ID..."
              }
            />
          </div>

          <div className="w-full md:w-auto flex items-center gap-2 self-stretch md:self-auto">
            <div className="relative w-full md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full h-11 px-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-xs font-bold text-neutral-600 dark:text-muted-foreground outline-none appearance-none cursor-pointer"
              >
                <option value="all">
                  {lang === "BN" ? "সকল স্ট্যাটাস" : "All Status"}
                </option>
                <option value="paid">
                  {lang === "BN" ? "পরিশোধিত (Paid)" : "Paid"}
                </option>
                <option value="unpaid">
                  {lang === "BN" ? "বকেয়া (Unpaid)" : "Unpaid"}
                </option>
              </select>
              <FiSliders className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {filteredFees.length > 0 ? (
          <>
            <div className="hidden md:block bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-200/60 dark:border-border-custom/50">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "ইনভয়েস আইডি" : "Invoice ID"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "শিক্ষার্থীর নাম" : "Student Name"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "ফির ধরন" : "Fee Type"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "তারিখ" : "Date"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "পরিমাণ" : "Amount"}
                    </th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground">
                      {lang === "BN" ? "স্ট্যাটাস" : "Status"}
                    </th>
                    <th className="p-4 text-right text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-border-custom/40">
                  {filteredFees.map((fee) => (
                    <tr
                      key={fee.id}
                      className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors"
                    >
                      <td className="p-4 text-xs font-mono font-bold text-neutral-500 dark:text-muted-foreground">
                        {fee.id}
                      </td>
                      <td className="p-4 text-sm font-bold text-neutral-900 dark:text-white">
                        {lang === "BN" ? fee.name.bn : fee.name.en}
                      </td>
                      <td className="p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                        {lang === "BN" ? fee.type.bn : fee.type.en}
                      </td>
                      <td className="p-4 text-xs font-medium text-neutral-500 dark:text-muted-foreground">
                        {fee.date}
                      </td>
                      <td className="p-4 text-sm font-black text-neutral-900 dark:text-white">
                        {fee.amount}
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                            fee.status === "paid"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
                              : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20"
                          }`}
                        >
                          {fee.status}
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
              {filteredFees.map((fee) => (
                <div
                  key={fee.id}
                  className="bg-card border border-neutral-200/50 dark:border-border-custom/50 rounded-xl p-4 flex flex-col gap-2 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-500 flex items-center justify-center border border-neutral-200/40 dark:border-border-custom/30 shrink-0">
                        <FiFileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                          {lang === "BN" ? fee.name.bn : fee.name.en}
                        </h4>
                        <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
                          {fee.id}
                        </span>
                      </div>
                    </div>

                    <button className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer shrink-0">
                      <FiMoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-sm bg-neutral-50 dark:bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-100 dark:border-border-custom/20">
                    <span className="text-neutral-700 dark:text-neutral-300 font-bold">
                      {lang === "BN" ? fee.type.bn : fee.type.en}
                    </span>
                    <span className="text-sm font-black text-neutral-900 dark:text-white">
                      {fee.amount}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1 text-sm">
                    <div>
                      <span className="text-neutral-400 block text-xs uppercase font-bold tracking-wider mb-0.5">
                        {lang === "BN" ? "তারিখ" : "Issue Date"}
                      </span>
                      <span className="font-semibold text-neutral-500 dark:text-neutral-400">
                        {fee.date}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border shrink-0 ${
                        fee.status === "paid"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
                          : "bg-rose-50 text-rose-700 border-rose-200/60 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20"
                      }`}
                    >
                      {fee.status}
                    </span>
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
                ? "কোনো ইনভয়েস রেকর্ড মেলেনি"
                : "No Invoice Records Found"}
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
              {lang === "BN"
                ? "অনুগ্রহ করে অন্য কোনো নাম বা সঠিক ফিল্টার সিলেক্ট করে চেষ্টা করুন।"
                : "Try adjusting your search queries or change the selected payment status parameter."}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function FeesManagementPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] dark:bg-background flex items-center justify-center text-xs font-bold text-neutral-400 tracking-widest">
          INITIALIZING SECURE FINANCES...
        </div>
      }
    >
      <FeesManagementContent />
    </Suspense>
  );
}
