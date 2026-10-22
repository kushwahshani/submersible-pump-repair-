"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  AlertTriangle,
  ArrowRight,
  HardHat,
} from "lucide-react";
import { businessData } from "@/data/business";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  // Combine localized service text with images and icon names
  const services = t.servicesList.map((svc, index) => {
    const original = businessData.services[index] || businessData.services[0];
    return {
      ...svc,
      image: original.image,
      iconName: original.iconName,
    };
  });

  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="bg-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
                <span>{t.home.hero.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {t.home.hero.headline}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {t.home.hero.subheadline}
              </p>

              {/* Call Action & Link */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  id="hero-call-now-btn"
                  href={`tel:${businessData.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-xs transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-300" />
                  <span>{t.home.hero.callCta}: {t.common.phone}</span>
                </a>

                <Link
                  href="/troubleshooting"
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
                >
                  <span>{t.common.navTroubleshooting}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.home.hero.badgeCopper}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.home.hero.badgeRig}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.home.hero.badgeTesting}</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <div className="relative h-60 sm:h-68 w-full bg-slate-100">
                  <img
                    src="/images/hero-pump.jpg"
                    alt={t.home.hero.photoBadge}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">
                      {t.home.hero.photoBadge}
                    </span>
                    <span className="text-slate-500">
                      {t.home.hero.photoSub}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-slate-700">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYMPTOMS / PROBLEM DIAGNOSTIC HELPER */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-700 font-semibold text-xs">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{t.home.symptoms.tag}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t.home.symptoms.heading}
              </h2>
              <p className="text-xs text-slate-600">
                {t.home.symptoms.sub}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-200/60">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="font-bold text-xs sm:text-sm text-slate-900">
                  {t.home.symptoms.item1Title}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.home.symptoms.item1Desc}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="font-bold text-xs sm:text-sm text-slate-900">
                  {t.home.symptoms.item2Title}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.home.symptoms.item2Desc}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="font-bold text-xs sm:text-sm text-slate-900">
                  {t.home.symptoms.item3Title}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.home.symptoms.item3Desc}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="font-bold text-xs sm:text-sm text-slate-900">
                  {t.home.symptoms.item4Title}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {t.home.symptoms.item4Desc}
                </p>
              </div>
            </div>

            <div className="mt-3.5 pt-2 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                {t.home.troubleshootGuideNotice}
              </span>
              <Link
                href="/troubleshooting"
                className="font-semibold text-slate-900 hover:underline inline-flex items-center gap-1"
              >
                <span>{t.home.readGuideLink}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SECTION 1: PUMP REPAIR & WORKSHOP SERVICES (Text Left, Image Right) */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Details (Left on desktop) */}
            <div className="lg:col-span-7 space-y-3.5 order-2 lg:order-1">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.home.repairSection.tag}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {t.home.repairSection.heading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {t.home.repairSection.desc}
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.repairSection.point1}</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.repairSection.point2}</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.repairSection.point3}</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.repairSection.point4}</span>
                </div>
              </div>
            </div>

            {/* Visual (Right on desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                  <img
                    src="/images/motor-rewinding.jpg"
                    alt={t.home.repairSection.heading}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block">
                    {t.home.repairSection.tag}
                  </span>
                  <span className="text-slate-500">
                    {t.home.repairSection.imageSub}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED SECTION 2: BOREWELL PULLING & ON-SITE SERVICE (Image Left, Text Right) */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual (Left on desktop) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                  <img
                    src="/images/borewell-installation.jpg"
                    alt={t.home.borewellSection.heading}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block">
                    {t.home.borewellSection.tag}
                  </span>
                  <span className="text-slate-500">
                    {t.home.borewellSection.imageSub}
                  </span>
                </div>
              </div>
            </div>

            {/* Details (Right on desktop) */}
            <div className="lg:col-span-7 space-y-3.5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.home.borewellSection.tag}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {t.home.borewellSection.heading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {t.home.borewellSection.desc}
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.borewellSection.point1}</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.borewellSection.point2}</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.borewellSection.point3}</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.home.borewellSection.point4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 OTHER MOTORS REPAIR (Cooler, Atta Chakki, Fans, Tullu Pump) */}
      <section className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-1 mb-6 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.home.otherMotorsSection.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.home.otherMotorsSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.home.otherMotorsSection.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-900">
                01
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {t.home.otherMotorsSection.item1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.home.otherMotorsSection.item1Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-900">
                02
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {t.home.otherMotorsSection.item2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.home.otherMotorsSection.item2Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-900">
                03
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {t.home.otherMotorsSection.item3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.home.otherMotorsSection.item3Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 hover:border-slate-300 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-900">
                04
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {t.home.otherMotorsSection.item4Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.home.otherMotorsSection.item4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW (Clean cards without individual call buttons) */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.home.services.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.home.services.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.home.services.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                keyFeatures={service.keyFeatures}
                image={service.image}
                iconName={service.iconName}
              />
            ))}
          </div>

          {/* Highlight notice below service cards */}
          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{t.home.servicesBottomNotice.text}</span>
            </div>
            <Link
              href="/repair"
              className="font-bold text-slate-900 hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>{t.home.servicesBottomNotice.linkText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US & WORK PROCESS */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.home.whyChooseUs.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.home.whyChooseUs.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.home.whyChooseUs.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.home.whyChooseUs.point1Title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-5">
                {t.home.whyChooseUs.point1Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.home.whyChooseUs.point2Title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-5">
                {t.home.whyChooseUs.point2Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.home.whyChooseUs.point3Title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-5">
                {t.home.whyChooseUs.point3Desc}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.home.whyChooseUs.point4Title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-5">
                {t.home.whyChooseUs.point4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
