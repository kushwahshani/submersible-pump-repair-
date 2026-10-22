"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  Gauge,
  Cog,
  ArrowRight,
  Wrench,
  HardHat,
  Anchor,
  Wind,
  Layers,
  Award,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. HERO HEADER WITH STATS */}
      <section className="bg-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-slate-700" />
              <span>{t.about.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t.about.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {t.about.desc}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200">
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {t.about.stats.expTag}
                </span>
                <Clock className="w-4 h-4 text-slate-700" />
              </div>
              <span className="block text-xl sm:text-2xl font-bold text-slate-900">
                {t.about.stats.expVal}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                {t.about.stats.expLabel}
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {t.about.stats.copperTag}
                </span>
                <Zap className="w-4 h-4 text-slate-700" />
              </div>
              <span className="block text-xl sm:text-2xl font-bold text-slate-900">
                {t.about.stats.copperVal}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                {t.about.stats.copperLabel}
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {t.about.stats.depthTag}
                </span>
                <Anchor className="w-4 h-4 text-slate-700" />
              </div>
              <span className="block text-xl sm:text-2xl font-bold text-slate-900">
                {t.about.stats.depthVal}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                {t.about.stats.depthLabel}
              </span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {t.about.stats.teamTag}
                </span>
                <HardHat className="w-4 h-4 text-slate-700" />
              </div>
              <span className="block text-xl sm:text-2xl font-bold text-slate-900">
                {t.about.stats.teamVal}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                {t.about.stats.teamLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORY / INTRODUCTION SECTION */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual: Workshop Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <div className="relative h-60 sm:h-72 w-full bg-slate-100">
                  <img
                    src="/images/motor-rewinding.jpg"
                    alt={t.about.story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.about.story.imgBadge}</span>
                  </div>
                </div>
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs flex items-center justify-between">
                  <span className="font-bold text-slate-900">
                    {t.about.story.imgTag1}
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    {t.about.story.imgTag2}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.about.story.badge}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {t.about.story.title}
                </h2>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-800">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.about.story.point1}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.about.story.point2}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.about.story.point3}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.about.story.point4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR TWO SPECIALIZED DIVISIONS (WORKSHOP & BOREWELL) - DETAILS ONLY */}
      <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.about.divisions.tag}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t.about.divisions.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.about.divisions.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Division 1: Workshop Team */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Wrench className="w-5 h-5 text-slate-200" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      {t.about.divisions.workshopTag}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {t.about.divisions.workshopTitle}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.about.divisions.workshopDesc}
                </p>

                {/* Service Details Only (No worker numbers/names as requested) */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {t.about.divisions.workshopPoints.map((point: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/repair"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>{t.about.divisions.workshopBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Division 2: Borewell Field Team */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <HardHat className="w-5 h-5 text-slate-200" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      {t.about.divisions.borewellTag}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {t.about.divisions.borewellTitle}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.about.divisions.borewellDesc}
                </p>

                {/* Service Details Only (No worker numbers/names as requested) */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {t.about.divisions.borewellPoints.map((point: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/borewell"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>{t.about.divisions.borewellBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLETE SCOPE: 6 CATEGORIES WITH DISTINCT ICONS */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.about.scope.tag}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t.about.scope.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.about.scope.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Submersible Pumps */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">01</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  {t.about.scope.item1Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.scope.item1Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {t.about.scope.item1Pills}
              </div>
            </div>

            {/* 2. Flour Mill Motors */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Cog className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">02</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  {t.about.scope.item2Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.scope.item2Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {t.about.scope.item2Pills}
              </div>
            </div>

            {/* 3. Cooler Motors & Fans */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Wind className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">03</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  {t.about.scope.item3Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.scope.item3Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {t.about.scope.item3Pills}
              </div>
            </div>

            {/* 4. Domestic Tullu Pumps */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">04</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  {t.about.scope.item4Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.scope.item4Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {t.about.scope.item4Pills}
              </div>
            </div>

            {/* 5. Openwell & Sewage Pumps */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">05</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  {t.about.scope.item5Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.scope.item5Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {t.about.scope.item5Pills}
              </div>
            </div>

            {/* 6. Borewell 600 ft Line & Stuck Pump Fishing */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Anchor className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">06</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">
                  {t.about.scope.item6Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.scope.item6Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                {t.about.scope.item6Pills}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IN-HOUSE MACHINERY & INFRASTRUCTURE */}
      <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <img
                  src="/images/impeller-repair.jpg"
                  alt={t.about.machinery.title}
                  className="w-full h-60 sm:h-72 object-cover"
                />
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs flex items-center justify-between">
                  <span className="font-bold text-slate-900">
                    {t.about.machinery.imgTag1}
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    {t.about.machinery.imgTag2}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.about.machinery.tag}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {t.about.machinery.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.about.machinery.sub}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-slate-700" />
                    <span>{t.about.machinery.item1Title}</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    {t.about.machinery.item1Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Cog className="w-4 h-4 text-slate-700" />
                    <span>{t.about.machinery.item2Title}</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    {t.about.machinery.item2Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-slate-700" />
                    <span>{t.about.machinery.item3Title}</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    {t.about.machinery.item3Desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Anchor className="w-4 h-4 text-slate-700" />
                    <span>{t.about.machinery.item4Title}</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    {t.about.machinery.item4Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR 5-POINT QUALITY GUARANTEE */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.about.guarantee.tag}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {t.about.guarantee.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.about.guarantee.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                {t.about.guarantee.item1Title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {t.about.guarantee.item1Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                {t.about.guarantee.item2Title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {t.about.guarantee.item2Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                {t.about.guarantee.item3Title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {t.about.guarantee.item3Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                {t.about.guarantee.item4Title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {t.about.guarantee.item4Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                05
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                {t.about.guarantee.item5Title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {t.about.guarantee.item5Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM QUICK NAVIGATION NOTICE (Matching Reference Design) */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{t.about.bottomNotice.text}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0 font-bold text-slate-900">
              <Link href="/repair" className="hover:underline inline-flex items-center gap-1">
                <span>{t.about.bottomNotice.repairLink}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-slate-300">|</span>
              <Link href="/borewell" className="hover:underline inline-flex items-center gap-1">
                <span>{t.about.bottomNotice.borewellLink}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
