"use client";

import React from "react";
import { Search, ArrowUp, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Search className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-wide">
                MANISH <span className="text-emerald-400">VIJAY</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Results-driven Digital Marketing & SEO Executive based in Jaipur, Rajasthan. Focused on keyword rankings, local GBP optimization, GA4 reporting, and technical audits.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400/90">
              <Sparkles className="w-3.5 h-3.5" /> 
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About & Qualifications</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Core Skills & Tools</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">SEO Case Studies</a></li>
              <li><a href="#seo-calculator" className="hover:text-emerald-400 transition-colors">Interactive SEO Tool</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Get In Touch</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400" /> manishvijay2004@gmail.com
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91-9509719405
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Manish Vijay. All rights reserved. Designed for Next.js & Vercel.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
