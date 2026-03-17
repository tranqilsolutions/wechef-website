"use client";

import { motion } from "framer-motion";

export default function Download() {
  return (
    <section id="download" className="py-32 md:py-44 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1400&q=80"
            alt=""
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-light tracking-[-0.03em] leading-[1.1] text-[#F5F5F3] max-w-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Start building your
              <br />
              <span className="italic text-[#FF6B5A]">cookbook tonight.</span>
            </motion.h2>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-[#8A8A8A] text-[15px] max-w-sm"
            >
              Free to download. No subscriptions. Just share a link and start cooking.
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-xl px-6 py-3.5 ring-1 ring-white/[0.08] transition-all duration-300 hover:bg-white/[0.12] hover:ring-white/[0.15] active:scale-[0.98]"
              >
                <svg width="20" height="24" viewBox="0 0 28 34" fill="none">
                  <path d="M23.1 17.8c0-3.6 2.9-5.3 3-5.4-1.6-2.4-4.2-2.7-5.1-2.8-2.1-.2-4.2 1.3-5.3 1.3-1.1 0-2.8-1.2-4.6-1.2-2.4 0-4.5 1.4-5.8 3.5-2.5 4.3-.6 10.7 1.8 14.2 1.2 1.7 2.6 3.6 4.4 3.5 1.8-.1 2.5-1.2 4.6-1.2 2.1 0 2.7 1.2 4.6 1.1 1.9 0 3.1-1.7 4.3-3.5 1.3-2 1.9-3.9 1.9-4-.1 0-3.8-1.5-3.8-5.5zm-3.6-10.1C20.6 6.3 21.3 4.4 21 2.5c-1.7.1-3.8 1.2-5 2.6-1.1 1.3-2 3.2-1.8 5.1 1.9.2 3.9-1 5.3-2.5z" fill="#F5F5F3"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-[#555] uppercase tracking-wider">Download on the</div>
                  <div className="text-sm font-semibold text-[#F5F5F3] -mt-0.5">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-xl px-6 py-3.5 ring-1 ring-white/[0.08] transition-all duration-300 hover:bg-white/[0.12] hover:ring-white/[0.15] active:scale-[0.98]"
              >
                <svg width="18" height="20" viewBox="0 0 28 30" fill="none">
                  <path d="M1 1.5L16.5 15 1 28.5V1.5z" fill="#4285F4"/>
                  <path d="M21.5 12.3L16.5 15l5 2.7 4-2.2c.7-.4.7-1.4 0-1.8l-4-2.2z" fill="#FBBC04"/>
                  <path d="M1 28.5l15.5-13.5 5 2.7L1 28.5z" fill="#34A853"/>
                  <path d="M1 1.5l20.5 11L16.5 15 1 1.5z" fill="#EA4335"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-[#555] uppercase tracking-wider">Get it on</div>
                  <div className="text-sm font-semibold text-[#F5F5F3] -mt-0.5">Google Play</div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
