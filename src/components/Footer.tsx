"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#FF6B5A] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">W</span>
              </div>
              <span className="text-[14px] font-semibold tracking-tight text-[#F5F5F3]">WeChef</span>
            </div>
            <p className="mt-4 text-[13px] text-[#555] leading-relaxed max-w-[28ch]">
              Your personal cookbook, built from the videos you love.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-[#555] font-medium mb-5">Product</h4>
            <ul className="space-y-3 text-[13px] text-[#555]">
              <li><a href="#how-it-works" className="hover:text-[#F5F5F3] transition-colors">How it works</a></li>
              <li><a href="#features" className="hover:text-[#F5F5F3] transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-[#F5F5F3] transition-colors">Download</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.15em] uppercase text-[#555] font-medium mb-5">Company</h4>
            <ul className="space-y-3 text-[13px] text-[#555]">
              <li><a href="#" className="hover:text-[#F5F5F3] transition-colors">About</a></li>
              <li><a href="mailto:hello@wechef.ai" className="hover:text-[#F5F5F3] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#F5F5F3] transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] text-[12px] text-[#333]">
          2026 WeChef. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
