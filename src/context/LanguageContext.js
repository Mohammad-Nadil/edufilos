"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("BN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("app_lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === "BN" ? "EN" : "BN";
    setLang(nextLang);
    localStorage.setItem("app_lang", nextLang);
  };

  // mounted এর আগে default "BN" দাও — null return করো না
  const safeLang = mounted ? lang : "BN";

  return (
    <LanguageContext.Provider value={{ lang: safeLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
