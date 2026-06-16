import PricingSection from "@/components/pricing/PricingSection";
import PricingTrust from "@/components/pricing/PricingTrust";

export const metadata = {
  title: "Pricing",
  description: "View EduFilos pricing plans and choose the best package for your madrasha.",
};

export default function PricingPage() {
  return(
    <>
    <PricingSection />
    <PricingTrust/>
    </>
  ) 
}