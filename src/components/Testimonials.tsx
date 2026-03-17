"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Anand",
    handle: "@priyacooks",
    avatar: "priya-anand",
    text: "I used to screenshot recipes from reels and never find them again. Now I just share to WeChef and it's there whenever I need it. Life changing for a weekend cook.",
  },
  {
    name: "Marcus Chen",
    handle: "@marcuseats",
    avatar: "marcus-chen",
    text: "The AI actually gets the measurements right from video. I tested it on a Korean BBQ reel with no written recipe — it nailed every ingredient from the audio alone.",
  },
  {
    name: "Olivia Restrepo",
    handle: "@olivcooks",
    avatar: "oliv-restrepo",
    text: "Finally an app that understands how I discover recipes. I don't browse websites. I scroll TikTok. WeChef bridges that gap perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-40 bg-[#1A1A17] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-white/8 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
            What people say
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
            Loved by home cooks
            <br />
            <span className="text-white/40">who scroll and cook.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.32, 0.72, 0, 1],
              }}
              className={`${
                i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-4" : "md:col-span-3"
              }`}
            >
              <div className="rounded-[2rem] bg-white/[0.04] p-1 ring-1 ring-white/[0.06] h-full">
                <div className="rounded-[calc(2rem-4px)] p-7 md:p-8 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-[15px] text-white/70 leading-relaxed">{t.text}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <img
                      src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{t.name}</div>
                      <div className="text-xs text-white/30">{t.handle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
