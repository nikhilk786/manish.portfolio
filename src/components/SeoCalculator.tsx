"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, CheckCircle, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

export default function SeoCalculator() {
  const [industry, setIndustry] = useState<string>("finance");
  const [currentTraffic, setCurrentTraffic] = useState<number>(2500);
  const [targetRank, setTargetRank] = useState<string>("top3");
  const [auditChecked, setAuditChecked] = useState<{ [key: string]: boolean }>({
    onpage: true,
    gbp: true,
    technical: false,
    content: true,
    backlinks: false,
  });

  // Calculate projected numbers
  const multiplier = targetRank === "top1" ? 3.5 : targetRank === "top3" ? 2.4 : 1.8;
  const projectedTraffic = Math.round(currentTraffic * multiplier);
  const trafficGain = projectedTraffic - currentTraffic;
  const leadConversionRate = industry === "finance" ? 0.03 : industry === "ecommerce" ? 0.025 : 0.04;
  const estimatedLeads = Math.round(trafficGain * leadConversionRate);

  const toggleCheck = (key: string) => {
    setAuditChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedAudits = Object.values(auditChecked).filter(Boolean).length;
  const auditScore = Math.round((completedAudits / 5) * 100);

  return (
    <section id="seo-calculator" className="py-20 bg-slate-900/70 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> Interactive Widget
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Organic Growth & <span className="text-gradient-emerald">SEO Audit Estimator</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Test your website parameters to estimate potential organic search traffic gains and review essential SEO checklist items.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Form */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" /> Estimate Traffic Potential
            </h3>

            {/* Industry Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Select Business Sector
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "finance", label: "Finance & Insurance" },
                  { id: "ecommerce", label: "E-Commerce / Store" },
                  { id: "local", label: "Local Jaipur Services" },
                  { id: "tech", label: "SaaS & Tech Tools" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIndustry(item.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border text-left ${
                      industry === item.id
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Monthly Organic Visitors Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Current Monthly Traffic
                </label>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {currentTraffic.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={currentTraffic}
                onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-slate-800"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            {/* Target Rank Position */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Target Google Rank Goal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "top5", label: "Top 5 Positions" },
                  { id: "top3", label: "Top 3 Positions" },
                  { id: "top1", label: "#1 Spot Dominance" },
                ].map((rank) => (
                  <button
                    key={rank.id}
                    onClick={() => setTargetRank(rank.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                      targetRank === rank.id
                        ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-md"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {rank.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Interactive SEO Readiness Checklist */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  SEO Audit Health Score
                </h4>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  {auditScore}% Score ({completedAudits}/5)
                </span>
              </div>

              <div className="space-y-2">
                {[
                  { key: "onpage", label: "Meta Tags, Title & H1 Tag Architecture" },
                  { key: "gbp", label: "Google Business Profile & NAP Consistency" },
                  { key: "technical", label: "Technical Sitemap & Robots.txt Config" },
                  { key: "content", label: "Keyword Intent & Blog Content Optimization" },
                  { key: "backlinks", label: "Competitor Backlink Profile Mapping" },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer p-2 rounded-lg hover:bg-slate-900/60 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={auditChecked[item.key]}
                      onChange={() => toggleCheck(item.key)}
                      className="w-4 h-4 rounded accent-emerald-500 bg-slate-900 border-slate-700 cursor-pointer"
                    />
                    <span className={auditChecked[item.key] ? "line-through text-slate-400" : ""}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Projected Results Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/30 relative overflow-hidden bg-slate-950">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-widest block">Projected Impact</span>
                  <h4 className="text-2xl font-bold text-white mt-1">SEO Growth Breakdown</h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              {/* Big Projection Stats */}
              <div className="py-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Estimated Organic Traffic</span>
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                    {projectedTraffic.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-emerald-400/90 font-medium mt-1 block">
                    +{(multiplier * 100 - 100).toFixed(0)}% Organic Surge
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Est. New Leads / Inquiries</span>
                  <div className="text-3xl font-extrabold text-teal-400 font-mono">
                    +{estimatedLeads}
                  </div>
                  <span className="text-[10px] text-teal-400/90 font-medium mt-1 block">
                    High Intent Conversions
                  </span>
                </div>
              </div>

              {/* Strategy Note */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-emerald-300 mb-0.5">Custom Strategy Recommendation:</strong>
                  For {industry === "finance" ? "Finance & Insurance" : "your selected industry"}, executing Manish Vijay&apos;s data-backed On-Page structure, Google Business Profile local mapping, and GA4 technical monitoring typically triggers indexation boosts within 4–8 weeks.
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg hover:scale-[1.02] transition-all"
                >
                  <span>Request Full Site Audit from Manish</span>
                  <CheckCircle className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
