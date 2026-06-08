import React from "react";

import Banner from "@/components/layouts/Banner";
import Features from "@/components/layouts/Features";
import Pricing from "@/components/layouts/Pricing";
import Why from "@/components/layouts/Why";
import FAQ from "@/components/layouts/FAQ";

export default function page({ user }) {
  const language = "bn";

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans  ">
      <Banner user={user} language={language} />

      <Features language={language} />

      <Pricing language={language} />

      <Why language={language} />


      <FAQ language={language} />

      {/* 
    testimonials
    footer
     */}
    </div>
  );
}
