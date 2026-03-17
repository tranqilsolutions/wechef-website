"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section className="py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-[#7A8B6F]/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#7A8B6F]">
            See it in action
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
            From video to recipe
            <br />
            <span className="text-[#8A8175]">in seconds.</span>
          </h2>
        </motion.div>

        {/* Video embed area */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.97 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Outer shell */}
          <div className="rounded-[2.5rem] bg-zinc-900/5 p-2 ring-1 ring-zinc-200/30 max-w-4xl mx-auto">
            <div className="rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-zinc-900 aspect-video relative">
              {/* Placeholder video area */}
              <img
                src="https://picsum.photos/seed/wechef-demo-vid/1280/720"
                alt="WeChef app demonstration"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_16px_48px_-8px_rgba(0,0,0,0.3)] transition-all duration-300"
                  aria-label="Play demo video"
                >
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="ml-1">
                    <path d="M24 14L0 28V0L24 14Z" fill="#C2491D" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row below video */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center"
        >
          {[
            { value: "12K+", label: "Recipes saved" },
            { value: "3 sec", label: "Average extraction" },
            { value: "94%", label: "Accuracy rate" },
            { value: "30+", label: "Sources supported" },
          ].map((stat, i) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter text-zinc-900">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[#8A8175]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
