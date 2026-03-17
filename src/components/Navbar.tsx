"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#FFFCF8]/80 backdrop-blur-2xl border-b border-[#2D2926]/[0.04]"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FF6B5A] flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-[#2D2926]">WeChef</span>
          </a>

          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[#9C958E]">
            <a href="#how-it-works" className="transition-colors duration-300 hover:text-[#2D2926]">How it works</a>
            <a href="#features" className="transition-colors duration-300 hover:text-[#2D2926]">Features</a>
            <a href="#download" className="transition-colors duration-300 hover:text-[#2D2926]">Download</a>
          </div>

          <a
            href="#download"
            className="hidden md:inline-flex text-[13px] font-semibold text-[#FF6B5A] hover:text-[#E5554A] transition-colors"
          >
            Get the app
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-[#2D2926] block origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-[#2D2926] block origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#FFFCF8] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {["How it works", "Features", "Download"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-[#2D2926]"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
