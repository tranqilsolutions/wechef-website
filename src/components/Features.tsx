"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Instagram Reels",
    desc: "Drop a reel link. We grab the recipe from caption and audio.",
  },
  {
    title: "TikTok Videos",
    desc: "Works with any cooking TikTok. Even the ones with no written recipe.",
  },
  {
    title: "YouTube",
    desc: "Full-length cooking videos and shorts. We handle both.",
  },
  {
    title: "Smart Timing",
    desc: "Cook times, rest periods, and prep steps detected automatically.",
  },
  {
    title: "Unit Conversion",
    desc: "Switch metric and imperial. Adjust serving sizes instantly.",
  },
  {
    title: "Collections",
    desc: "Organize by tag, folder, or mood. Your cookbook, your way.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 md:py-44 bg-[#2D2926]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <p className="text-[13px] tracking-[0.25em] uppercase text-[#FF6B5A] font-medium mb-5">
            Features
          </p>
          <h2
            className="text-3xl md:text-[3.2rem] font-light tracking-[-0.02em] leading-[1.1] text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Built for people<br />
            who actually cook.
          </h2>
          <p className="mt-5 text-[#9C958E] text-base leading-relaxed max-w-md">
            Not another meal planner. WeChef is for the person who
            scrolls past 50 recipes and cooks the ones that stop them mid-scroll.
          </p>
        </motion.div>

        {/* Minimal grid — no cards, no borders, just text and space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="w-8 h-[1px] bg-[#FF6B5A]/40 mb-6 group-hover:w-12 group-hover:bg-[#FF6B5A] transition-all duration-500" />
              <h3 className="text-[15px] font-semibold text-white tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[#9C958E] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
