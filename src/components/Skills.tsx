"use client";

import React, { useState } from "react";
import { Wrench, Search, LineChart, Megaphone, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  category: "seo" | "tools" | "marketing";
  level: number; // percentage
  tag: string;
}

const skillsData: SkillItem[] = [
  // SEO Core Skills
  { name: "Search Engine Optimization (SEO)", category: "seo", level: 95, tag: "Expert" },
  { name: "Google Business Profile (GBP)", category: "seo", level: 92, tag: "High Impact" },
  { name: "Local SEO Strategy", category: "seo", level: 90, tag: "Top Rank" },
  { name: "On-Page SEO Optimization", category: "seo", level: 94, tag: "Core" },
  { name: "Off-Page & Link Building", category: "seo", level: 88, tag: "Authority" },
  { name: "Technical SEO Audit", category: "seo", level: 90, tag: "Site Health" },
  { name: "Keyword Research & Mapping", category: "seo", level: 95, tag: "Intent Targeted" },
  { name: "Competitor & Backlink Analysis", category: "seo", level: 92, tag: "Growth Gap" },
  { name: "Content Optimization", category: "seo", level: 90, tag: "Engagement" },

  // Tools & Analytics
  { name: "SEMrush", category: "tools", level: 92, tag: "SEO Suite" },
  { name: "Ahrefs", category: "tools", level: 90, tag: "Backlinks" },
  { name: "Google Search Console", category: "tools", level: 95, tag: "Essential" },
  { name: "Google Analytics (GA4)", category: "tools", level: 92, tag: "Traffic Audit" },
  { name: "Google Keyword Planner", category: "tools", level: 94, tag: "Research" },

  // Marketing & Productivity
  { name: "Canva & Graphics Design", category: "marketing", level: 88, tag: "Creatives" },
  { name: "Buffer Social Management", category: "marketing", level: 85, tag: "Automation" },
  { name: "Mailchimp Email Marketing", category: "marketing", level: 85, tag: "Campaigns" },
  { name: "Client Communication", category: "marketing", level: 92, tag: "Reporting" },
  { name: "MS Excel / Data Sheets", category: "marketing", level: 90, tag: "Reporting" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "seo" | "tools" | "marketing">("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Core Competencies & <span className="text-gradient-emerald">SEO Tools</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Comprehensive skill set honed through full-time executive experience, technical website audits, and industry-standard marketing toolsets.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            All Competencies ({skillsData.length})
          </button>
          <button
            onClick={() => setActiveTab("seo")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "seo"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Search className="w-3.5 h-3.5" /> SEO Strategy
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "tools"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <LineChart className="w-3.5 h-3.5" /> SEO Tools & Analytics
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "marketing"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" /> Marketing & Productivity
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 hover:scale-[1.01] transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-bold text-slate-100">{skill.name}</h3>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-mono border border-slate-700">
                  {skill.tag}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 mt-4">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
