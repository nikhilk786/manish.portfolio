"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from "lucide-react";

interface RoleExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  type: string;
  projects?: string[];
  responsibilities: string[];
}

const experiences: RoleExperience[] = [
  {
    title: "Digital Marketing SEO Executive",
    company: "U-buy Technologies",
    location: "Jaipur, Rajasthan",
    period: "January 2026 – Present",
    badge: "Current Role",
    type: "Full-Time Executive",
    responsibilities: [
      "Execute comprehensive On-page and Off-page SEO strategies for diverse digital assets.",
      "Perform thorough keyword research, competitor analysis, and technical SEO site audits.",
      "Optimize Google Business Profile (GBP) listings to maximize local search map pack rankings.",
      "Monitor organic traffic metrics using Google Analytics (GA4), Search Console, and SEMrush.",
      "Drive continuous keyword rank improvements and organic search traffic growth.",
      "Coordinate seamlessly with cross-functional content and design teams for campaign execution.",
      "Prepare transparent SEO performance reports and data-driven recommendations.",
      "Handle client communication and project workflow coordination."
    ]
  },
  {
    title: "SEO Executive",
    company: "AV Technosys",
    location: "Jaipur, Rajasthan",
    period: "October 2025 – December 2025",
    badge: "Client Experience",
    type: "Full-Time Executive",
    projects: ["Morzze", "Shreshtha", "Goyal Salt"],
    responsibilities: [
      "Led end-to-end SEO strategy and execution for Morzze, Shreshtha, and Goyal Salt accounts.",
      "Optimized e-commerce architecture and product discovery for Morzze luxury bathware.",
      "Enhanced brand search presence, keyword rankings, and corporate indexation for Shreshtha.",
      "Drove enterprise SEO, SERP dominance, and keyword rank growth for Goyal Salt Ltd.",
      "Conducted competitor gap analysis, technical site health audits, and intent mapping.",
      "Delivered transparent client reporting dashboards and ongoing organic growth roadmaps."
    ]
  },
  {
    title: "Digital Marketing Intern",
    company: "EMIAC Technologies",
    location: "Vaishali Nagar, Jaipur",
    period: "16 April 2025 – 16 September 2025 (6 Months)",
    badge: "Internship Completed",
    type: "6-Month Internship",
    responsibilities: [
      "Assisted in technical On-page and Off-page SEO execution for client projects.",
      "Conducted extensive keyword discovery and intent mapping using Google Keyword Planner.",
      "Performed competitor link profile benchmarking and backlink gap analysis.",
      "Optimized blog articles and landing page copy to enhance organic search indexation.",
      "Built and structured verified Google Business Profile listings for local businesses.",
      "Created and scheduled promotional social media graphics using Canva and Buffer.",
      "Supported automated email marketing workflows via Mailchimp.",
      "Monitored Pay-Per-Click (PPC) campaigns and audited Google Analytics reporting dashboards."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-gradient-emerald">Work Experience</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Proven track record of driving organic visibility and executing SEO campaigns across agency and technology environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-800" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative sm:pl-20">
                
                {/* Timeline Node Icon */}
                <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-1.5 w-9 h-9 rounded-xl bg-slate-950 border border-emerald-500/50 items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
                  <Sparkles className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all space-y-6">
                  
                  {/* Top Bar info */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-medium">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-emerald-400 font-semibold text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                      <span className="flex items-center gap-1.5 font-medium text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Prominent Projects Badge Bar */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Key Projects Handled:
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.projects.map((proj, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-sm"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Responsibilities & Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
