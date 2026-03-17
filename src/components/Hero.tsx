"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[100dvh] relative overflow-hidden flex items-end">
      {/* Full-bleed food photography */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-20 md:pb-28 pt-40">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[12px] tracking-[0.3em] uppercase text-[#FF6B5A] font-medium mb-8"
        >
          Your personal cookbook
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-light tracking-[-0.04em] leading-[0.95] text-[#F5F5F3] max-w-3xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Save any recipe
          <br />
          <span className="italic text-[#FF6B5A]">from any video.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-7 text-[#8A8A8A] text-base md:text-lg leading-relaxed max-w-md"
        >
          See something delicious on TikTok or Instagram?
          Share the link. AI pulls every ingredient and step.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#download"
            className="inline-flex items-center bg-[#FF6B5A] text-white text-[13px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-[#FF8575] active:scale-[0.97] shadow-[0_0_40px_-8px_rgba(255,107,90,0.5)]"
          >
            Download free
          </a>
          <a
            href="#how-it-works"
            className="text-[13px] font-medium text-[#555] hover:text-[#F5F5F3] transition-colors"
          >
            See how it works
          </a>
        </motion.div>

        {/* Subtle social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex items-center gap-8 text-[12px] tracking-[0.15em] uppercase text-[#555]"
        >
          <span>Instagram</span>
          <span className="w-4 h-[1px] bg-[#333]" />
          <span>TikTok</span>
          <span className="w-4 h-[1px] bg-[#333]" />
          <span>YouTube</span>
        </motion.div>
      </div>
    </section>
  );
}
