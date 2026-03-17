"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Instagram Reels", desc: "Drop a reel link. We grab the recipe from caption and audio." },
  { title: "TikTok Videos", desc: "Works with any cooking TikTok. Even ones with no written recipe." },
  { title: "YouTube", desc: "Full-length cooking videos and shorts. We handle both." },
  { title: "Smart Timing", desc: "Cook times, rest periods, and prep steps detected automatically." },
  { title: "Unit Conversion", desc: "Switch metric and imperial. Adjust serving sizes instantly." },
  { title: "Collections", desc: "Organize by tag, folder, or mood. Your cookbook, your way." },
];

export default function Features() {
  return (
    <section id="features" className="py-32 md:py-44 bg-[#111111] border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20"
        >
          {/* Left — sticky header */}
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#FF6B5A] font-medium mb-5">
              Features
            </p>
            <h2
              className="text-3xl md:text-[3.2rem] font-light tracking-[-0.03em] leading-[1.05] text-[#F5F5F3]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Built for people
              <br />
              <span className="italic text-[#8A8A8A]">who actually cook.</span>
            </h2>
            <p className="mt-5 text-[#8A8A8A] text-[15px] leading-relaxed max-w-sm">
              Not another meal planner. WeChef is for the person who scrolls past 50 recipes and cooks the ones that stop them mid-scroll.
            </p>
          </div>

          {/* Right — feature list */}
          <div className="md:col-span-6 md:col-start-7 space-y-0">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group py-8 border-b border-white/[0.06] first:border-t"
              >
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#F5F5F3] tracking-tight group-hover:text-[#FF6B5A] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#8A8A8A] leading-relaxed max-w-xs">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="mt-1 w-6 h-6 rounded-full border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#FF6B5A]/30 group-hover:bg-[#FF6B5A]/10 transition-all duration-300">
                    <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#555] group-hover:text-[#FF6B5A] transition-colors duration-300">
                      <path d="M1 5H9M5 1L9 5L5 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
