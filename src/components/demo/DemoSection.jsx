"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import DemoFormField from "./DemoFormField";
import { demoContent } from "./demoContent";

import {
  Building2,
  User,
  Mail,
  Phone,
  Calendar,
  Clock3,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

export default function DemoSection() {
  const { lang } = useLanguage();

  const t = demoContent[lang];

  const [formData, setFormData] = useState({
    madrasha: "",
    fullName: "",
    email: "",
    phone: "",
    students: "",
    date: "",
    time: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);

    /*
      BACKEND READY

      await fetch("/api/demo", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    */
  };

  const inputClass =
    "w-full h-12 rounded-xl border border-border-custom bg-background px-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  return (
    <section className="py-10">
      <Container>
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center rounded-full border border-border-custom bg-card px-4 py-2 text-xs font-semibold text-gold">
            {t.badge}
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-black text-foreground">
            {t.title}
          </h1>

          <p className="mt-4 text-muted md:text-lg">{t.subtitle}</p>
        </div>

        {/* Form */}

        <div className="max-w-4xl mx-auto">
          <div className="rounded-[32px] border border-border-custom bg-card p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <DemoFormField
                icon={<Building2 size={18} />}
                label={t.fields.madrasha}
              >
                <input
                  name="madrasha"
                  value={formData.madrasha}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.placeholders.madrasha}
                />
              </DemoFormField>

              <DemoFormField
                icon={<User size={18} />}
                label={t.fields.fullName}
              >
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.placeholders.fullName}
                />
              </DemoFormField>

              <DemoFormField icon={<Mail size={18} />} label={t.fields.email}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.placeholders.email}
                />
              </DemoFormField>

              <DemoFormField icon={<Phone size={18} />} label={t.fields.phone}>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.placeholders.phone}
                />
              </DemoFormField>

              <DemoFormField
                icon={<User size={18} />}
                label={t.fields.students}
              >
                <select
                  name="students"
                  value={formData.students}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>1 - 100</option>
                  <option>101 - 300</option>
                  <option>301 - 500</option>
                  <option>501 - 1000</option>
                  <option>1000+</option>
                </select>
              </DemoFormField>

              <div className="grid md:grid-cols-2 gap-5">
                <DemoFormField
                  icon={<Calendar size={18} />}
                  label={t.fields.date}
                >
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </DemoFormField>

                <DemoFormField
                  icon={<Clock3 size={18} />}
                  label={t.fields.time}
                >
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </DemoFormField>
              </div>

              <DemoFormField
                icon={<Megaphone size={18} />}
                label={t.fields.source}
              >
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>YouTube</option>
                  <option>Friend</option>
                  <option>Other</option>
                </select>
              </DemoFormField>

              <Button type="submit" className="w-full h-12 rounded-xl">
                {t.submit}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted text-center">
                <ShieldCheck size={16} className="text-gold shrink-0" />
                {t.trust}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
