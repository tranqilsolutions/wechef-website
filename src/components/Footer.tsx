"use client";

import { InstagramLogo, TiktokLogo, TwitterLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C2491D] flex items-center justify-center">
                <span className="text-white text-sm font-semibold">W</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">WeChef</span>
            </div>
            <p className="mt-4 text-sm text-[#8A8175] leading-relaxed max-w-[32ch]">
              Your personal cookbook, built from the social videos you love.
            </p>
            <div className="mt-6 flex items-center gap-4 text-zinc-400">
              <a href="#" className="hover:text-[#C2491D] transition-colors" aria-label="Instagram">
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a href="#" className="hover:text-[#C2491D] transition-colors" aria-label="TikTok">
                <TiktokLogo size={20} weight="fill" />
              </a>
              <a href="#" className="hover:text-[#C2491D] transition-colors" aria-label="Twitter">
                <TwitterLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-400 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-[#8A8175]">
              <li><a href="#how-it-works" className="hover:text-zinc-900 transition-colors">How it works</a></li>
              <li><a href="#features" className="hover:text-zinc-900 transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-zinc-900 transition-colors">Download</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-400 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[#8A8175]">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
              <li><a href="mailto:hello@wechef.ai" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-400 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-[#8A8175]">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200/50 text-center text-xs text-zinc-400">
          2026 WeChef. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
