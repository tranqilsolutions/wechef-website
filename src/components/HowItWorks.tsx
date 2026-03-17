"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share a link",
    description: "Found a recipe on TikTok, Instagram, or YouTube? Hit share. That's all you do.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    number: "02",
    title: "AI extracts it",
    description: "Our AI watches the video, reads the caption, and pulls every ingredient, measurement, and step.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    number: "03",
    title: "Cook tonight",
    description: "Get a clean recipe card. Adjust servings. Check off steps as you go.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 md:py-44">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <p className="text-[13px] tracking-[0.25em] uppercase text-[#FF6B5A] font-medium mb-5">
            How it works
          </p>
          <h2
            className="text-3xl md:text-[3.2rem] font-light tracking-[-0.02em] leading-[1.1] text-[#2D2926]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Three steps from<br />
            scroll to kitchen.
          </h2>
        </motion.div>

        {/* Editorial zig-zag layout */}
        <div className="space-y-28 md:space-y-40">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image — full-bleed feel */}
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src={step.image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#9C958E] font-medium">
                  Step {step.number}
                </span>
                <h3
                  className="mt-4 text-2xl md:text-3xl font-light tracking-[-0.02em] text-[#2D2926]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-[#9C958E] text-[15px] leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
