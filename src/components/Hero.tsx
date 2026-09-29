"use client";

import React from "react";
import Image from "next/image";
import { 
  TrendingUp, 
  Search, 
  MapPin, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  CheckCircle2, 
  Globe 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Digital Marketing & SEO Executive</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Scaling Websites to{" "}
              <span className="text-gradient-emerald">#1 Google Rankings</span>{" "}
              & Organic Traffic.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
              Hi, I&apos;m <strong className="text-slate-200">Manish Vijay</strong>, a results-driven SEO Executive based in{" "}
              <span className="text-emerald-400 inline-flex items-center gap-1 font-medium">
                <MapPin className="w-4 h-4 inline" /> Jaipur, Rajasthan
              </span>.
              Specialized in On-Page & Off-Page SEO, Local GBP Optimization, Technical Website Audits, SEMrush analysis, and Google Analytics.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/manish-vijay-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-semibold text-sm transition-all shadow-md group"
              >
                <FileText className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Stat Counters */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                  <span>100%</span>
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">SEO Strategy</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                  <span>5+</span>
                  <Search className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">Audit Campaigns</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                  <span>Top 3</span>
                  <Globe className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">GBP Visibility</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Glow Ring */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-teal-500/30 to-cyan-500/40 blur-xl opacity-70 animate-pulse-glow" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-3xl glass-card p-6 border border-slate-800 shadow-2xl text-slate-200">
                
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400/90 flex items-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5" /> GA4 / GSC Live Overview
                  </span>
                </div>

                {/* Avatar & Profile Badge */}
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-4 rounded-2xl overflow-hidden ring-4 ring-emerald-500/30 shadow-xl">
                    <Image
                      src="/avatar.jpg"
                      alt="Manish Vijay - Digital Marketing SEO Executive"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white">Manish Vijay</h2>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">SEO Executive @ U-buy Technologies</p>
                </div>

                {/* Live Performance Chips */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <span className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> HDFC ERGO Insurance SEO
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[11px]">
                      Keyword Growth ↑
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Search className="w-4 h-4 text-teal-400" /> Google Business Profile (GBP)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold text-[11px]">
                      Local Rank #1
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Sparkles className="w-4 h-4 text-cyan-400" /> Technical SEO Audits
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold text-[11px]">
                      SEMrush / Ahrefs
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
