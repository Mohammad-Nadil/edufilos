import { authFeatures } from "@/constants/authFeatures";
import FeatureCard from "./FeatureCard";

export default function FeatureList() {
  return (
    <div className="mt-10 space-y-6">
      {authFeatures.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </div>
  );
}