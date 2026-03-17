"use client";

import { motion } from "framer-motion";

export default function Download() {
  return (
    <section id="download" className="py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#C2491D] to-[#8B3415] p-1 overflow-hidden">
          <div className="rounded-[calc(2.5rem-4px)] bg-gradient-to-br from-[#C2491D] to-[#9E3A16] px-8 py-20 md:px-16 md:py-28 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.04] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Text */}
              <div className="md:col-span-7">
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-white">
                    Start building your
                    <br />
                    cookbook tonight.
                  </h2>
                  <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-[44ch]">
                    Free to download. No subscriptions. No limits.
                    Just share a link and start cooking.
                  </p>
                </motion.div>

                {/* App store badges */}
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
                  className="mt-10 flex flex-col sm:flex-row items-start gap-4"
                >
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.2)]"
                  >
                    <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
                      <path d="M23.1 17.8c0-3.6 2.9-5.3 3-5.4-1.6-2.4-4.2-2.7-5.1-2.8-2.1-.2-4.2 1.3-5.3 1.3-1.1 0-2.8-1.2-4.6-1.2-2.4 0-4.5 1.4-5.8 3.5-2.5 4.3-.6 10.7 1.8 14.2 1.2 1.7 2.6 3.6 4.4 3.5 1.8-.1 2.5-1.2 4.6-1.2 2.1 0 2.7 1.2 4.6 1.1 1.9 0 3.1-1.7 4.3-3.5 1.3-2 1.9-3.9 1.9-4-.1 0-3.8-1.5-3.8-5.5zm-3.6-10.1C20.6 6.3 21.3 4.4 21 2.5c-1.7.1-3.8 1.2-5 2.6-1.1 1.3-2 3.2-1.8 5.1 1.9.2 3.9-1 5.3-2.5z" fill="#1A1A17"/>
                    </svg>
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Download on the</div>
                      <div className="text-lg font-semibold text-zinc-900 tracking-tight -mt-0.5">App Store</div>
                    </div>
                  </a>

                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.2)]"
                  >
                    <svg width="28" height="30" viewBox="0 0 28 30" fill="none">
                      <path d="M1 1.5L16.5 15 1 28.5V1.5z" fill="#4285F4"/>
                      <path d="M21.5 12.3L16.5 15l5 2.7 4-2.2c.7-.4.7-1.4 0-1.8l-4-2.2z" fill="#FBBC04"/>
                      <path d="M1 28.5l15.5-13.5 5 2.7L1 28.5z" fill="#34A853"/>
                      <path d="M1 1.5l20.5 11L16.5 15 1 1.5z" fill="#EA4335"/>
                    </svg>
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Get it on</div>
                      <div className="text-lg font-semibold text-zinc-900 tracking-tight -mt-0.5">Google Play</div>
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Phone mockup */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                className="md:col-span-5 flex justify-center"
              >
                <div className="relative w-[240px]">
                  <div className="rounded-[2.5rem] bg-zinc-950 p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
                    <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
                      <img
                        src="https://picsum.photos/seed/wechef-recipe-card/540/1170"
                        alt="WeChef recipe card view"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating notification */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-12 top-20 rounded-2xl bg-white p-3.5 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#7A8B6F]/10 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M5.5 10L2 6.5L3 5.5L5.5 8L11 2.5L12 3.5L5.5 10Z" fill="#7A8B6F"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900">Recipe saved</div>
                        <div className="text-[10px] text-zinc-400">Pad Thai from @chefmay</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
