import dynamic from "next/dynamic";
import Banner from "@/components/layouts/Banner";

const ModulesSection = dynamic(
  () => import("@/components/layouts/ModulesSection"),
);
const Features = dynamic(() => import("@/components/layouts/Features"));
const Pricing = dynamic(() => import("@/components/layouts/Pricing"));
const Testimonial = dynamic(() => import("@/components/layouts/Testimonial"));
const Lantern = dynamic(() => import("@/components/ui/Lantern"));
const TrustAndPayment = dynamic(
  () => import("@/components/layouts/TrustAndPayment"),
);

export default function Page() {
  return (
    <div className="h-full antialiased font-sans">
      <Banner />
      <ModulesSection />
      <Features />
      <Pricing />
      <Testimonial />
      <Lantern />
      <TrustAndPayment />
    </div>
  );
}
