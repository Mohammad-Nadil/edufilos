import { useLanguage } from "@/context/LanguageContext";

export default function FeatureCard({ icon: Icon, title, description }) {
  const { lang } = useLanguage();

  return (
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-2xl bg-card border border-border-custom flex items-center justify-center shrink-0 shadow-sm">
        <Icon className="w-7 h-7 text-gold" />
      </div>

      <div>
        <h3 className="font-semibold text-foreground">
          {lang === "BN" ? title.BN : title.EN}
        </h3>

        <p className="text-sm text-muted mt-1 leading-relaxed">
          {lang === "BN" ? description.BN : description.EN}
        </p>
      </div>
    </div>
  );
}
