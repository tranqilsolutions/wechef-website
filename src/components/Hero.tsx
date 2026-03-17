"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background food image — right side on desktop */}
      <div className="absolute inset-0 md:left-[45%]">
        <img
          src="https://picsum.photos/seed/wechef-hero-food/1200/900"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-[#FDFBF7]/20 md:from-[#FDFBF7] md:via-[#FDFBF7]/80 md:to-transparent" />
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-flex items-center rounded-full bg-[#C2491D]/8 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#C2491D] mb-8">
              Your personal cookbook
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-zinc-900"
          >
            Save any recipe
            <br />
            <span className="text-[#C2491D]">from any video.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="mt-6 text-lg text-[#8A8175] leading-relaxed max-w-[48ch]"
          >
            See something delicious on TikTok or Instagram? Share the link.
            WeChef uses AI to pull out every ingredient, step, and timing
            — so you can cook it tonight.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#download"
              className="inline-flex items-center gap-3 rounded-full bg-[#C2491D] pl-7 pr-5 py-3.5 text-base font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#A83D18] active:scale-[0.97] shadow-[0_8px_24px_-4px_rgba(194,73,29,0.35)]"
            >
              Download free
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowDown size={16} weight="bold" />
              </span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8A8175] hover:text-zinc-900 transition-colors py-3.5"
            >
              See how it works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="flex -space-x-2.5">
              {["chef1", "chef2", "chef3", "chef4"].map((seed, i) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/80/80`}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#FDFBF7] object-cover"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className="text-sm text-[#8A8175]">
              <span className="font-semibold text-zinc-900">2,847</span> recipes saved this week
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating phone mockup — desktop only */}
      <motion.div
        initial={{ y: 40, opacity: 0, rotate: 3 }}
        animate={{ y: 0, opacity: 1, rotate: 3 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative w-[280px]">
          {/* Phone frame */}
          <div className="rounded-[2.5rem] bg-zinc-900 p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]">
            <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
              <img
                src="https://picsum.photos/seed/wechef-app-screen/560/1218"
                alt="WeChef app showing a saved recipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-16 top-24 rounded-2xl bg-white p-4 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.1)] border border-zinc-100"
          >
            <div className="text-2xl font-bold text-[#C2491D] tracking-tight">AI</div>
            <div className="text-[11px] text-[#8A8175] mt-0.5">Recipe extraction</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
