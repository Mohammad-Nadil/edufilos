"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import {
  FiBookmark,
  FiDownload,
  FiFile,
  FiFolder,
  FiGrid,
  FiInfo,
  FiList,
  FiSearch,
  FiSliders,
} from "react-icons/fi";
import { BsFillCloudUploadFill } from "react-icons/bs";

// Category list — filter panel e use hoy
const CATEGORIES = [
  { id: "all", en: "All Materials", bn: "সবগুলো ম্যাটেরিয়াল" },
  { id: "academic", en: "Academic", bn: "একাডেমিক" },
  { id: "institutional", en: "Institutional", bn: "প্রাতিষ্ঠানিক" },
  { id: "guides", en: "Guides & SOPs", bn: "গাইডলাইন ও SOP" },
  { id: "assets", en: "Media & Assets", bn: "মিডিয়া ও অ্যাসেটস" },
];

// File type filter badges
const FILE_TYPES = [
  { id: "all", label: "ALL" },
  { id: "pdf", label: "PDF" },
  { id: "docx", label: "DOCX" },
  { id: "zip", label: "ZIP" },
];

const ResourcesSection = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  fileTypeFilter,
  setFileTypeFilter,
  viewMode,
  setViewMode,
  filteredResources,
}) => {
  const { lang } = useLanguage();
  const t = lang === "BN";

  return (
    <Container className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* ───────── Filter Sidebar ───────── */}
        <aside className="lg:col-span-1 border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-3 xl:p-6 shadow-xs lg:sticky top-20">
          <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 font-bold text-sm uppercase tracking-wider mb-6">
            <FiSliders className="text-primary w-4 h-4" />
            <span>{t ? "ফিল্টার প্যানেল" : "Filter Center"}</span>
          </div>

          <div className="space-y-6">
            {/* Category list */}
            <div>
              <label className="text-xs font-bold text-neutral-400 dark:text-neutral-500 block mb-2 uppercase">
                {t ? "ক্যাটাগরি" : "Categories"}
              </label>
              <div className="flex flex-col gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-primary/10 text-primary dark:bg-primary/15"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                    }`}
                  >
                    <FiFolder
                      className={`w-4 h-4 shrink-0 ${activeCategory === cat.id ? "text-primary" : "text-neutral-400"}`}
                    />
                    {t ? cat.bn : cat.en}
                  </button>
                ))}
              </div>
            </div>

            {/* File type badges */}
            <div className="pt-5 border-t border-neutral-100 dark:border-neutral-900">
              <label className="text-xs font-bold text-neutral-400 dark:text-neutral-500 block mb-2 uppercase">
                {t ? "ফাইল ফরম্যাট" : "File Extension"}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {FILE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFileTypeFilter(type.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      fileTypeFilter === type.id
                        ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black"
                        : "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:bg-neutral-200"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ───────── Main Content ───────── */}
        <main className="lg:col-span-3 space-y-6">
          {/* Search bar + view toggle */}
          <div className="bg-background border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-3 flex flex-col sm:flex-row gap-3 justify-between items-center shadow-xs">
            <div className="relative w-full sm:max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 h-10 bg-neutral-50 dark:bg-neutral-900 rounded-xl text-xs md:text-sm font-medium outline-none border border-transparent focus:border-primary/20 transition-all"
                placeholder={
                  t
                    ? "ফাইল বা টাইটেল দিয়ে সার্চ করুন..."
                    : "Search by file title or keyword..."
                }
              />
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 rounded-xl transition-all cursor-pointer ${viewMode === "grid" ? "bg-neutral-100 dark:bg-neutral-900 text-primary" : "text-neutral-400"}`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-xl transition-all cursor-pointer ${viewMode === "list" ? "bg-neutral-100 dark:bg-neutral-900 text-primary" : "text-neutral-400"}`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resource cards / empty state */}
          {filteredResources.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-3"
              }
            >
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className={`bg-white dark:bg-[#111917] border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl transition-all duration-300 hover:shadow-md ${
                    viewMode === "grid"
                      ? "p-6 flex flex-col justify-between"
                      : "p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  }`}
                >
                  <div
                    className={
                      viewMode === "list" ? "flex items-start gap-4 grow" : ""
                    }
                  >
                    {viewMode === "list" && (
                      <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <FiFile className="w-5 h-5" />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-500 uppercase tracking-wider">
                          {resource.type}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-semibold">
                          {resource.size} • {resource.downloads} downloads
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                        {t ? resource.title.bn : resource.title.en}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed max-w-xl">
                        {t ? resource.desc.bn : resource.desc.en}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 ${
                      viewMode === "grid"
                        ? "mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-900/60 w-full justify-between"
                        : "shrink-0 w-full sm:w-auto justify-end"
                    }`}
                  >
                    <button className="h-9 px-4 rounded-xl bg-primary text-white hover:bg-primary/90 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-all">
                      <FiDownload className="w-3.5 h-3.5" />
                      <span>{t ? "ডাউনলোড" : "Download"}</span>
                    </button>
                    <button className="w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 flex items-center justify-center transition-all cursor-pointer">
                      <FiBookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty state
            <div className="bg-white dark:bg-[#111917] rounded-2xl p-16 text-center border border-dashed border-neutral-200 dark:border-neutral-800">
              <FiInfo className="w-10 h-10 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
              <h5 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
                {t
                  ? "কোনো ফাইল খুঁজে পাওয়া যায়নি"
                  : "No Assets Match Your Filter"}
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                {t
                  ? "অনুগ্রহ করে অন্য কোনো ক্যাটাগরি বা কিওয়ার্ড দিয়ে চেষ্টা করুন।"
                  : "Try clearing your text filters or selecting 'All Materials'."}
              </p>
            </div>
          )}

          {/* CTA upload banner */}
          <div className="bg-primary rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/10">
                <BsFillCloudUploadFill className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm md:text-base font-extrabold">
                  {t
                    ? "নতুন রিসোর্স কন্ট্রিবিউট করতে চান?"
                    : "Want to share institutional assets?"}
                </h5>
                <p className="text-xs text-white/70 mt-0.5 font-medium">
                  {t
                    ? "আপনার তৈরি গাইডলাইন আপলোড করে অন্যান্য মাদরাসার আধুনিকায়নে অংশ নিন।"
                    : "Help other Islamic educational frameworks grow by uploading validated files."}
                </p>
              </div>
            </div>
            <button className="bg-white text-neutral-900 dark:bg-primary dark:text-white px-5 h-10 rounded-xl text-xs font-bold shadow-sm hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer">
              {t ? "আপলোড পোর্টাল" : "Upload Guidelines"}
            </button>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default ResourcesSection;
