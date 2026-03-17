"use client";

import { motion } from "framer-motion";
import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  Timer,
  ForkKnife,
  BookmarkSimple,
  Translate,
  Scales,
} from "@phosphor-icons/react";

const features = [
  {
    icon: InstagramLogo,
    title: "Instagram reels",
    desc: "Drop a reel link. We grab the recipe from caption and audio.",
    span: "col-span-1",
  },
  {
    icon: TiktokLogo,
    title: "TikTok videos",
    desc: "Works with any cooking TikTok. Even the ones with no written recipe.",
    span: "col-span-1",
  },
  {
    icon: YoutubeLogo,
    title: "YouTube shorts & videos",
    desc: "Full-length cooking videos? We handle those too.",
    span: "col-span-1",
  },
  {
    icon: Timer,
    title: "Smart timing",
    desc: "We detect cook times, rest periods, and prep steps automatically.",
    span: "col-span-1",
  },
  {
    icon: Scales,
    title: "Unit conversion",
    desc: "Switch between metric and imperial. Adjust serving sizes on the fly.",
    span: "col-span-1",
  },
  {
    icon: BookmarkSimple,
    title: "Organize everything",
    desc: "Tag, folder, search. Build your personal cookbook the way you think.",
    span: "col-span-1",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 md:py-40 bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left column — sticky header */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-5 md:sticky md:top-40"
          >
            <span className="inline-flex items-center rounded-full bg-[#C2491D]/8 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#C2491D]">
              Features
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
              Built for people
              <br />
              who actually cook.
            </h2>
            <p className="mt-5 text-[#8A8175] text-lg leading-relaxed max-w-[40ch]">
              Not another meal planning app. WeChef is for the person
              who scrolls past 50 recipes a day and cooks the ones that
              stop them mid-scroll.
            </p>

            {/* Platform logos */}
            <div className="mt-10 flex items-center gap-6 text-zinc-300">
              <InstagramLogo size={32} weight="fill" />
              <TiktokLogo size={32} weight="fill" />
              <YoutubeLogo size={32} weight="fill" />
            </div>
          </motion.div>

          {/* Right column — feature grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="group rounded-[1.5rem] bg-white/70 p-1 ring-1 ring-zinc-200/20 hover:ring-zinc-200/50 transition-all duration-500"
              >
                <div className="rounded-[calc(1.5rem-4px)] bg-white p-6 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-500 group-hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)]">
                  <div className="w-11 h-11 rounded-xl bg-[#FDFBF7] flex items-center justify-center mb-5 transition-colors duration-500 group-hover:bg-[#C2491D]/8">
                    <feature.icon
                      size={22}
                      weight="duotone"
                      className="text-[#8A8175] transition-colors duration-500 group-hover:text-[#C2491D]"
                    />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#8A8175] leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
