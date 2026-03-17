"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section className="py-32 md:py-44 border-t border-white/[0.04] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#FF6B5A] font-medium mb-5">
            See it in action
          </p>
          <h2
            className="text-3xl md:text-[3.5rem] font-light tracking-[-0.03em] leading-[1.05] text-[#F5F5F3]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            From video to recipe
            <br />
            <span className="italic text-[#8A8A8A]">in seconds.</span>
          </h2>
        </motion.div>

        {/* Three phones — editorial */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-end gap-3 md:gap-6"
        >
          {/* Left phone */}
          <div className="hidden md:block -rotate-6 translate-y-6 opacity-60">
            <div className="w-[180px] rounded-[1.8rem] bg-[#1C1C1C] p-2 ring-1 ring-white/[0.06]">
              <div className="rounded-[calc(1.8rem-8px)] overflow-hidden aspect-[9/19.5]">
                <img
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center phone */}
          <div className="z-10">
            <div className="w-[260px] md:w-[280px] rounded-[2.5rem] bg-[#1C1C1C] p-3 ring-1 ring-white/[0.08] shadow-[0_0_80px_-20px_rgba(255,107,90,0.15)]">
              <div className="rounded-[calc(2.5rem-12px)] overflow-hidden aspect-[9/19.5]">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=560&q=80"
                  alt="WeChef recipe view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right phone */}
          <div className="hidden md:block rotate-6 translate-y-6 opacity-60">
            <div className="w-[180px] rounded-[1.8rem] bg-[#1C1C1C] p-2 ring-1 ring-white/[0.06]">
              <div className="rounded-[calc(1.8rem-8px)] overflow-hidden aspect-[9/19.5]">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 flex justify-center gap-16 md:gap-24"
        >
          {[
            { value: "12K+", label: "Recipes saved" },
            { value: "3s", label: "Avg extraction" },
            { value: "94%", label: "Accuracy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-light tracking-tight text-[#F5F5F3]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] tracking-[0.15em] uppercase text-[#555] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
