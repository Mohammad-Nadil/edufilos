import React, { Suspense } from "react";
import ResourcesContent from "@/components/resources/ResourcesContent";

// Fallback — full screen loader, ResourcesContent hydrate howar age show hoy
const ResourcesFallback = () => (
  <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090f0e] flex items-center justify-center text-xs font-bold text-neutral-400 tracking-wider">
    LOADING APPLICATION DATA HUB...
  </div>
);

const ResourcesSuspense = () => {
  return (
    <Suspense fallback={<ResourcesFallback />}>
      <ResourcesContent />
    </Suspense>
  );
};

export default ResourcesSuspense;
