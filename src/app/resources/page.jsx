import PageHero from "@/components/common/PageHero";
import ResourcesSuspense from "@/components/resources/ResourcesSuspense";
import { heroData } from "@/helper/resources/heroData";

const page = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090f0e] text-on-background pb-32 selection:bg-primary/20">
      <PageHero {...heroData} />
      <ResourcesSuspense />
    </div>
  );
};

export default page;
