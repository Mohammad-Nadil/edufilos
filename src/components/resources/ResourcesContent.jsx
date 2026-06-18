"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ResourcesSection from "@/components/resources/ResourcesSection";
import { masterResources } from "@/helper/resources/resourcesData";

const ResourcesContent = () => {
  const { lang } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [fileTypeFilter, setFileTypeFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  // Filter logic — search, category, file type সব এক জায়গায়
  const filteredResources = useMemo(() => {
    return masterResources.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesType =
        fileTypeFilter === "all" || item.type === fileTypeFilter;

      const textToSearch =
        `${item.title[lang === "BN" ? "bn" : "en"]} ${item.desc[lang === "BN" ? "bn" : "en"]}`.toLowerCase();
      const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [activeCategory, fileTypeFilter, searchQuery, lang]);

  return (
    <ResourcesSection
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      fileTypeFilter={fileTypeFilter}
      setFileTypeFilter={setFileTypeFilter}
      viewMode={viewMode}
      setViewMode={setViewMode}
      filteredResources={filteredResources}
    />
  );
};

export default ResourcesContent;
