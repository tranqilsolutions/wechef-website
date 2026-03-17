"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[680px]"
      >
        <div className="flex items-center justify-between rounded-full bg-white/80 backdrop-blur-2xl border border-zinc-200/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)] px-6 py-3">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C2491D] flex items-center justify-center">
              <span className="text-white text-sm font-semibold tracking-tight">W</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-zinc-900">WeChef</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#how-it-works" className="transition-colors duration-300 hover:text-zinc-900">How it works</a>
            <a href="#features" className="transition-colors duration-300 hover:text-zinc-900">Features</a>
            <a href="#download" className="transition-colors duration-300 hover:text-zinc-900">Download</a>
          </div>

          <a
            href="#download"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#C2491D] px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#A83D18] active:scale-[0.97]"
          >
            Get the app
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#FDFBF7]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["How it works", "Features", "Download"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold tracking-tight text-zinc-900 hover:text-[#C2491D] transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#download"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-[#C2491D] px-8 py-4 text-lg font-medium text-white"
            >
              Get the app
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
