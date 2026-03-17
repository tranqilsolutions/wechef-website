"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end relative overflow-hidden">
      {/* Full-bleed food photography — the food IS the design */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF8] via-[#FFFCF8]/40 to-transparent" />
      </div>

      {/* Content at bottom — editorial style */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 pb-16 pt-40 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[13px] tracking-[0.25em] uppercase text-[#FF6B5A] font-medium mb-6"
        >
          Your personal cookbook
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-light tracking-[-0.03em] leading-[1.05] text-[#2D2926] max-w-3xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Save any recipe<br />
          from any video.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[#9C958E] text-base md:text-lg leading-relaxed max-w-md"
        >
          See something delicious on TikTok or Instagram?
          Share the link. AI pulls every ingredient and step.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-[#FF6B5A] text-white text-[13px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-[#E5554A] active:scale-[0.97] shadow-[0_8px_30px_-6px_rgba(255,107,90,0.4)]"
          >
            Download free
          </a>
          <a
            href="#how-it-works"
            className="text-[13px] font-medium text-[#9C958E] hover:text-[#2D2926] transition-colors border-b border-[#9C958E]/30 hover:border-[#2D2926]/30 pb-0.5"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
