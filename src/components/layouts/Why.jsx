import React from "react";
import IslamicPattern from "../ui/IslamicPattern";
import { ShieldCheck, MessageSquare, HelpCircle } from "lucide-react";
import Calligraphy from "../ui/Caligraphy";
import imgKun from "../../../public/kun.png";

const Why = ({ language }) => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <IslamicPattern variant="geometric" opacity={0.1} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Trust the platform made for Madrasha excellence
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: ShieldCheck,
                  t: "Enterprise Security",
                  d: "Data encryption and secure multi-tenant architecture to protect sensitive institutional records.",
                },
                {
                  icon: MessageSquare,
                  t: "Integrated Communication",
                  d: "Send SMS or Email alerts for attendance, results and fee reminders automatically.",
                },
                {
                  icon: HelpCircle,
                  t: "Expert Local Support",
                  d: "Dedicated relationship managers and technical support available 24/7 in Bangla/English.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.t}</h3>
                    <p className="text-emerald-100/70 leading-relaxed text-sm">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden rotate-3 max-w-100 mx-auto">
              <div className="text-center">
                <p className="text-8xl font-black mb-4 tracking-tighter">99%</p>
                <p className="text-xl font-medium text-emerald-200 uppercase tracking-widest">
                  Uptime Guarantee
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-5%] right-[-5%] lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:right-[-2%] w-40 sm:w-60 md:w-95 aspect-square pointer-events-none opacity-[0.04] lg:opacity-[0.06] z-0 select-none overflow-hidden">
        <Calligraphy
          imageSrc={imgKun.src}
          textColor="#ffffff"
          bgColor="transparent"
        />
      </div>
    </section>
  );
};

export default Why;
