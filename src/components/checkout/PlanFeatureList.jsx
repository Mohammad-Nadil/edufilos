"use client";

import { FiCheckCircle } from "react-icons/fi";

export default function PlanFeatureList({ features }) {
  return (
    <ul className="space-y-3 pt-2 border-t border-muted/50">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm font-medium">
          <FiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
