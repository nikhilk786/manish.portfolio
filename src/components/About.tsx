"use client";

import React from "react";
import { GraduationCap, Award, User, Target, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/60 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" /> Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient-emerald">Manish Vijay</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Dedicated Digital Marketing Executive passionate about delivering measurable search engine ranking growth, organic traffic multiplication, and data-backed digital marketing results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Summary & Core Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Target className="w-5 h-5 text-emerald-400" /> SEO Executive & Marketing Strategist
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                I specialize in developing end-to-end SEO blueprints—from initial keyword architecture and competitor gap analysis to technical site audits, Google Business Profile (GBP) local map optimization, and high-converting link building.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                With experience in executing SEO campaigns for finance/insurance sectors (such as HDFC ERGO) as well as local businesses, I focus on turning search queries into valuable business leads.
              </p>

              {/* Core Strengths Bullet Points */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Google Analytics (GA4) & GSC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Technical & On-Page Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Local SEO & GBP Rankings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>SEMrush & Ahrefs Analysis</span>
                </div>
              </div>
            </div>

            {/* Quick Personal Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block mb-1">Location</span>
                <span className="text-sm font-semibold text-white">Jaipur, RJ</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block mb-1">Languages</span>
                <span className="text-sm font-semibold text-white">Hindi & English</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block mb-1">Role</span>
                <span className="text-sm font-semibold text-emerald-400">SEO Exec</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 block mb-1">Nationality</span>
                <span className="text-sm font-semibold text-white">Indian</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Background Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" /> Academic Background
              </h3>
              <span className="text-xs text-slate-400">Qualifications</span>
            </div>

            <div className="space-y-4">
              {/* Digi Perform Master */}
              <div className="p-5 rounded-2xl glass-card border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">Master in Digital Marketing</h4>
                    <p className="text-xs text-emerald-400 font-medium">Digi Perform – HT Media Partner</p>
                    <p className="text-xs text-slate-400 mt-1">Jaipur, Rajasthan</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3" /> Master Degree
                  </span>
                </div>
              </div>

              {/* University of Rajasthan BA */}
              <div className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">Bachelor of Arts (B.A.)</h4>
                    <p className="text-xs text-slate-300 font-medium">University of Rajasthan</p>
                    <p className="text-xs text-slate-400 mt-1">Jaipur, Rajasthan</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold">
                    Graduation
                  </span>
                </div>
              </div>

              {/* Indra Public School */}
              <div className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">Senior Secondary Education</h4>
                    <p className="text-xs text-slate-300 font-medium">Indra Public School</p>
                    <p className="text-xs text-slate-400 mt-1">Jaipur, Rajasthan</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold">
                    Higher Secondary
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
