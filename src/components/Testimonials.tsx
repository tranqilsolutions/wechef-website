"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Anand",
    text: "I used to screenshot recipes from reels and never find them again. Now I just share to WeChef and it's there whenever I need it.",
  },
  {
    name: "Marcus Chen",
    text: "The AI actually gets the measurements right from video. I tested it on a Korean BBQ reel with no written recipe, and it nailed every ingredient.",
  },
  {
    name: "Olivia Restrepo",
    text: "Finally an app that understands how I discover recipes. I don't browse websites. I scroll TikTok. WeChef bridges that gap.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-44 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[12px] tracking-[0.3em] uppercase text-[#FF6B5A] font-medium mb-20 md:mb-28"
        >
          What people say
        </motion.p>

        <div className="space-y-20 md:space-y-28">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-12 ${
                i % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div className={`md:col-span-9 ${i % 2 === 1 ? "md:col-start-4" : ""}`}>
                <p
                  className="text-xl md:text-[1.75rem] font-light leading-[1.5] text-[#F5F5F3]/80 tracking-[-0.01em]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-6 text-[12px] tracking-[0.15em] uppercase text-[#555] font-medium">
                  {t.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
