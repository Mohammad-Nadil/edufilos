import React from "react";

import Banner from "@/components/layouts/Banner";
import Features from "@/components/layouts/Features";
import Pricing from "@/components/layouts/Pricing";
import Why from "@/components/layouts/Why";
import FAQ from "@/components/layouts/FAQ";
import ModulesSection from "@/components/layouts/ModulesSection";
import TrustAndPayment from "@/components/layouts/TrustAndPayment";
import Lantern from "@/components/ui/Lantern";
import Testimonial from "@/components/layouts/Testimonial";

export default function page({ user }) {
  const language = "bn";

  return (
    <div className="h-full antialiased font-sans  ">
      <Banner />
      <ModulesSection />
      <Features />
       <Pricing language={language} />
       <Testimonial />
    {/*  <Why language={language} />
      <FAQ language={language} /> */}
      <Lantern />
      <TrustAndPayment />
    </div>
  );
}
