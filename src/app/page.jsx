import React from "react";

import Banner from "@/components/layouts/Banner";
import Features from "@/components/layouts/Features";
import Pricing from "@/components/layouts/Pricing";
import Why from "@/components/layouts/Why";
import FAQ from "@/components/layouts/FAQ";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function page({ user }) {
  const language = "bn";

  return (
    <div className=" antialiased font-sans  ">
      <Banner  />
      {/* <Features language={language} />
      <Pricing language={language} />
      <Why language={language} />
      <FAQ language={language} /> */}

    </div>
  );
}
