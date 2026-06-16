"use client";

import ModuleCard from "./ModuleCard";

export default function ModulesGrid({ modules }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-auto">
      {/* Student Management */}
      <ModuleCard
        {...modules[0]}
        Icon={modules[0].icon}
        className="lg:row-span-2 min-h-[496px]"
        showImage
      />

      {/* Academic Management */}
      <ModuleCard
        {...modules[2]}
        Icon={modules[2].icon}
        className="min-h-[240px]"
      />

      {/* Fees Management */}
      <ModuleCard
        {...modules[3]}
        Icon={modules[3].icon}
        className="min-h-[240px]"
      />

      {/* Examination System */}
      <ModuleCard
        {...modules[4]}
        Icon={modules[4].icon}
        className="min-h-[240px]"
      />

      {/* Attendance Tracking */}
      <ModuleCard
        {...modules[1]}
        Icon={modules[1].icon}
        className="min-h-[240px]"
      />

      {/* Reports & Analytics */}
      <ModuleCard
        {...modules[5]}
        Icon={modules[5].icon}
        className="min-h-[240px]"
      />

      {/* Communication */}
      <ModuleCard
        {...modules[6]}
        Icon={modules[6].icon}
        className="min-h-[240px]"
      />

      {/* Human Resource */}
      <ModuleCard
        {...modules[7]}
        Icon={modules[7].icon}
        className="min-h-[240px]"
      />

      {/* Library Management */}
      <ModuleCard
        {...modules[8]}
        Icon={modules[8].icon}
        horizontal
        className="lg:col-span-2"
      />

      {/* System Management */}
      <ModuleCard
        {...modules[9]}
        Icon={modules[9].icon}
        horizontal
        className="lg:col-span-1"
      />
    </div>
  );
}
