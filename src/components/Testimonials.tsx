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
    <section className="py-32 md:py-44 border-t border-[#2D2926]/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[13px] tracking-[0.25em] uppercase text-[#FF6B5A] font-medium mb-20 md:mb-28"
        >
          What people say
        </motion.p>

        {/* Editorial testimonial layout — large quotes, generous space */}
        <div className="space-y-20 md:space-y-28">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${
                i % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              <div className={`md:col-span-8 ${i % 2 === 1 ? "md:col-start-5" : ""}`}>
                <p
                  className="text-xl md:text-[1.75rem] font-light leading-relaxed text-[#2D2926] tracking-[-0.01em]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-6 text-[13px] text-[#9C958E] font-medium tracking-wide">
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
