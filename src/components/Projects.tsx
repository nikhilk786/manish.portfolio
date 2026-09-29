"use client";

import React from "react";
import { FolderGit2, ShieldCheck, MapPin, Search, ArrowUpRight, TrendingUp, Layers } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string[];
  icon: React.ElementType;
  gradient: string;
}

const projects: ProjectItem[] = [
  {
    id: "hdfc-ergo",
    title: "HDFC ERGO SEO Campaign",
    subtitle: "Health & Travel Insurance On-Page Optimization",
    category: "Financial & Insurance SEO",
    description: "Executed high-impact On-page & Off-page SEO optimization for HDFC ERGO Health and Travel Insurance landing pages. Optimized meta tags, heading architecture, content relevancy, and high-authority directory submissions to boost rank visibility.",
    tags: ["On-Page SEO", "Insurance Niche", "Directory Submissions", "Keyword Ranking"],
    metrics: ["Substantial Keyword Visibility Surge", "Health & Travel Insurance Focus", "Directory Citations"],
    icon: ShieldCheck,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "gbp-local",
    title: "Google Business Profile (GBP) Local Ranking",
    subtitle: "Map Pack Dominance & Local Citation Audit",
    category: "Local SEO & GBP",
    description: "Complete Google Business Profile optimization for local Jaipur businesses. Standardized NAP consistency, built local directory citations, optimized service categories, and managed review workflows to capture high-intent local customer calls.",
    tags: ["GBP Optimization", "Local SEO", "GMB Map Pack", "Jaipur Businesses"],
    metrics: ["#1 Local Map Pack Target", "Increased Inbound Phone Leads", "Higher GBP Views"],
    icon: MapPin,
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "tech-audit",
    title: "Technical SEO Audit & Competitor Gap Analysis",
    subtitle: "SEMrush & Ahrefs Deep Site Health Crawl",
    category: "Technical SEO",
    description: "Conducted comprehensive technical website audits analyzing site architecture, canonical tags, XML sitemaps, page load speed, broken links, and competitor backlink gap profiles using SEMrush and Ahrefs to craft actionable roadmap reports.",
    tags: ["Technical Audit", "SEMrush", "Ahrefs", "Site Speed & Health"],
    metrics: ["Identified Critical Crawl Fixes", "Competitor Backlink Mapping", "Actionable SEO Roadmap"],
    icon: Search,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            SEO Projects & <span className="text-gradient-emerald">Case Studies</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Real-world optimization campaigns demonstrating keyword visibility growth, local map dominance, and technical site audits.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const IconComponent = proj.icon;
            return (
              <div
                key={proj.id}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
                      <Layers className="w-3 h-3" /> {proj.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 mb-4">
                    {proj.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Key Metrics Badges */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Impact Highlights:</span>
                    {proj.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-400 text-[10px] font-mono border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
