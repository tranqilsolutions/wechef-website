"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section className="py-32 md:py-44 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[13px] tracking-[0.25em] uppercase text-[#FF6B5A] font-medium mb-5">
            See it in action
          </p>
          <h2
            className="text-3xl md:text-[3.2rem] font-light tracking-[-0.02em] leading-[1.1] text-[#2D2926]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            From video to recipe<br />in seconds.
          </h2>
        </motion.div>

        {/* Phone mockups — editorial arrangement */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-end gap-4 md:gap-8"
        >
          {/* Left phone — tilted */}
          <div className="hidden md:block -rotate-6 translate-y-8">
            <div className="w-[200px] rounded-[2rem] bg-[#2D2926] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
              <div className="rounded-[calc(2rem-8px)] overflow-hidden aspect-[9/19.5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center phone — hero */}
          <div className="z-10">
            <div className="w-[260px] md:w-[280px] rounded-[2.5rem] bg-[#2D2926] p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
              <div className="rounded-[calc(2.5rem-10px)] overflow-hidden aspect-[9/19.5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=560&q=80"
                  alt="WeChef recipe view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right phone — tilted */}
          <div className="hidden md:block rotate-6 translate-y-8">
            <div className="w-[200px] rounded-[2rem] bg-[#2D2926] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
              <div className="rounded-[calc(2rem-8px)] overflow-hidden aspect-[9/19.5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Minimal stats */}
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
                className="text-2xl md:text-3xl font-light tracking-tight text-[#2D2926]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-[12px] tracking-[0.15em] uppercase text-[#9C958E] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
