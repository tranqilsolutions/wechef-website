"use client";

import { motion } from "framer-motion";
import { ShareNetwork, MagicWand, CookingPot } from "@phosphor-icons/react";

const steps = [
  {
    icon: ShareNetwork,
    number: "01",
    title: "Share a link",
    description:
      "Found a recipe on TikTok, Instagram, or YouTube? Hit share and send the link to WeChef. That's the only thing you do.",
    color: "#C2491D",
  },
  {
    icon: MagicWand,
    number: "02",
    title: "AI does the rest",
    description:
      "Our AI watches the video, reads the caption, and extracts every ingredient, measurement, and step. No more pausing and rewinding.",
    color: "#7A8B6F",
  },
  {
    icon: CookingPot,
    number: "03",
    title: "Cook it tonight",
    description:
      "Get a clean, structured recipe card with everything you need. Adjust servings, check off steps, and cook with confidence.",
    color: "#C2491D",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="inline-flex items-center rounded-full bg-[#7A8B6F]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#7A8B6F]">
            How it works
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
            Three taps from scroll
            <br />
            <span className="text-[#8A8175]">to your kitchen.</span>
          </h2>
        </motion.div>

        {/* Asymmetric step layout — zig-zag */}
        <div className="mt-20 space-y-16 md:space-y-0 md:grid md:grid-cols-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.32, 0.72, 0, 1],
              }}
              className={`md:col-span-4 ${
                i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""
              }`}
            >
              {/* Outer shell — double bezel */}
              <div className="rounded-[2rem] bg-white/60 p-1.5 ring-1 ring-zinc-200/30">
                <div className="rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}10` }}
                    >
                      <step.icon size={28} weight="duotone" style={{ color: step.color }} />
                    </div>
                    <span className="text-5xl font-bold tracking-tighter text-zinc-100">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-[15px] text-[#8A8175] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
