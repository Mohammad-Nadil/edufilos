"use client";

import { moduleData } from "@/helper/module/moduleData";
import { useLanguage } from "@/context/LanguageContext";
import ModulesGrid from "./ModulesGrid";
import Container from "../ui/Container";

export default function ModulesSection() {
  const { lang } = useLanguage();
  const data = moduleData[lang];

  return (
    <section className="py-20">
      <Container className="">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">{data.title}</h2>
          <p className="mt-3 text-muted">{data.subtitle}</p>
        </div>

        <div
          className="
            rounded-[32px]
            border
            border-border-custom
            bg-card
            p-5
            md:p-8
          "
        >
          <ModulesGrid modules={data.modules} />
        </div>
      </Container>
    </section>
  );
}
