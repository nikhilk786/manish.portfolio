"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "SEO Optimization Query",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" /> Direct Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let&apos;s Grow Your <span className="text-gradient-emerald">Organic Rankings</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Have an SEO project, website audit, or digital marketing opportunity? Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href="mailto:manishvijay2004@gmail.com"
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Email Address</span>
                <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  manishvijay2004@gmail.com
                </span>
                <p className="text-xs text-emerald-400/90 font-medium mt-1">Direct Mail Inquiries</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919509719405"
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Phone / WhatsApp</span>
                <span className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  +91-9509719405
                </span>
                <p className="text-xs text-teal-400/90 font-medium mt-1">Call / Voice Consultation</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Location</span>
                <span className="text-sm font-bold text-white block">
                  98, Karni Kunj 2nd, Ajmer Road
                </span>
                <span className="text-xs text-slate-300">Jaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Sparkles className="w-4 h-4" /> Available for Full-Time & Freelance Projects
              </div>
              <p>
                Open for full-time SEO Executive roles, technical site audits, Google Business Profile (GBP) ranking campaigns, and digital marketing consultations.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800 relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Manish Vijay will review your request and get back to you shortly at <strong className="text-emerald-400">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "SEO Optimization Query", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="SEO Optimization Query">SEO Optimization Query</option>
                    <option value="Google Business Profile (GBP) Local Ranking">Google Business Profile (GBP) Local Ranking</option>
                    <option value="Technical Website Audit">Technical Website Audit</option>
                    <option value="Job Opportunity / Hiring">Job Opportunity / Hiring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message / Requirement Details <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your website goals, organic traffic targets, or job opening details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message to Manish</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
