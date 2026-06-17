import React from "react";

import Banner from "@/components/layouts/Banner";
import Features from "@/components/layouts/Features";
import Pricing from "@/components/layouts/Pricing";
import ModulesSection from "@/components/layouts/ModulesSection";
import TrustAndPayment from "@/components/layouts/TrustAndPayment";
import Lantern from "@/components/ui/Lantern";
import Testimonial from "@/components/layouts/Testimonial";

export default function page({  }) {

  return (
    <div className="h-full antialiased font-sans  ">
      <Banner />
      <ModulesSection />
      <Features />
      <Pricing  />
      <Testimonial />
      <Lantern />
      <TrustAndPayment />
    </div>
  );
}
