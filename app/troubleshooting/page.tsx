"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Wrench,
  Search,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TroubleshootingPage() {
  const { t, language } = useLanguage();
  const [openIssue, setOpenIssue] = useState<string>("not-starting");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleIssue = (id: string) => {
    setOpenIssue(openIssue === id ? "" : id);
  };

  const filteredIssues = t.troubleshooting.issues.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.symptoms.toLowerCase().includes(query) ||
      item.solution.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. PAGE HERO HEADER */}
      <section className="bg-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
              <span>{t.troubleshooting.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t.troubleshooting.heading}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.troubleshooting.sub}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & QUICK ISSUES LIST */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-5">
        {/* Safety Warning Card */}
        <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-2">
                  <span>{t.troubleshooting.safetyBadge}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {t.troubleshooting.note}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 pl-11 sm:pl-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300/80 text-amber-950 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                {t.troubleshooting.switchOffBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.troubleshooting.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all"
          />
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map((item, index) => {
            const isOpen = openIssue === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-slate-300 bg-white shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xs"
                }`}
              >
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleIssue(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">{t.troubleshooting.symptomsLabel}</span>
                        <span>{item.symptoms}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 mt-0.5">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-900" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-3 border-t border-slate-100 space-y-4 bg-slate-50/40">
                    {/* Self Check Steps */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />
                        <span>{t.troubleshooting.selfCheckTitle}</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {item.selfCheck.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-700"
                          >
                            <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actionable Solution */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm text-emerald-950 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                        <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{t.troubleshooting.solutionTitle}</span>
                      </div>
                      <p className="leading-relaxed pl-5 text-emerald-900">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredIssues.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              {t.troubleshooting.noResults}
            </div>
          )}
        </div>

        {/* Helpful navigation notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{t.troubleshooting.bottomNoticeText}</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 font-bold text-slate-900">
            <Link href="/repair" className="hover:underline inline-flex items-center gap-1">
              <span>{t.troubleshooting.viewRepairLink}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/borewell" className="hover:underline inline-flex items-center gap-1">
              <span>{t.troubleshooting.viewBorewellLink}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
