"use client";

import React from "react";
import Link from "next/link";
import {
  HardHat,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowRight,
  UserCheck,
  Sparkles,
  Anchor,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BorewellPage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <HardHat className="w-3.5 h-3.5 text-slate-700" />
              <span>{t.borewellPage.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t.borewellPage.heading}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.borewellPage.sub}
            </p>
          </div>
        </div>
      </section>

      {/* 2. FIELD RIG & TWO CORE TASKS BANNER */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xs bg-white">
                <img
                  src="/images/borewell-installation.jpg"
                  alt={t.borewellPage.heading}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-3 bg-white border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">
                    {t.borewellPage.imageCaption}
                  </span>
                  <span className="text-emerald-700 font-medium">{t.borewellPage.imageBadge}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.borewellPage.rigBadge}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t.borewellPage.rigTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.borewellPage.rigDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                {t.borewellPage.rigPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FIELD SERVICES DETAIL */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="space-y-1 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Anchor className="w-3.5 h-3.5 text-slate-700" />
            <span>{t.borewellPage.scopeTag}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.borewellPage.featuresTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.borewellPage.scopeDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.borewellPage.features.map((feature, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all space-y-2.5 shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOREWELL FIELD CREW */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="space-y-1 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-slate-700" />
            <span>{t.borewellPage.teamTag}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.borewellPage.teamTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.borewellPage.teamSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.borewellPage.workers.map((worker, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 space-y-3.5 shadow-2xs hover:bg-white hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-slate-900">
                    {worker.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700">
                    {worker.role}
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 text-emerald-800 shrink-0">
                  {worker.exp}
                </span>
              </div>

              <div className="text-xs text-slate-600 border-t border-slate-200/80 pt-2.5">
                <span className="font-semibold text-slate-800 block mb-0.5">
                  {t.borewellPage.specialtyLabel}
                </span>
                <p className="leading-relaxed">{worker.specialty}</p>
              </div>

              <div className="pt-1">
                <a
                  href={`tel:${worker.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.borewellPage.callWorkerPrefix}{worker.phone}{t.borewellPage.callWorkerSuffix ? ` ${t.borewellPage.callWorkerSuffix}` : ""}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HELPFUL FOOTER NOTICE */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{t.borewellPage.bottomNoticeText}</span>
            </div>
            <Link
              href="/troubleshooting"
              className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>{t.borewellPage.bottomNoticeLink}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
