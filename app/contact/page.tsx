"use client";

import React from "react";
import {
  Phone,
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Navigation,
  Info,
} from "lucide-react";
import { businessData } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. PAGE HEADER - Clean White Background */}
      <section className="bg-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.contact.hero.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t.contact.hero.heading}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.contact.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY CONTACT CARDS */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Direct Phone Call */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.cards.phoneTitle}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    {t.common.phone}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.contact.cards.phoneSub}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  id="contact-call-btn-main"
                  href={`tel:${businessData.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-300" />
                  <span>{t.contact.cards.callBtn}: {t.common.phone}</span>
                </a>
              </div>
            </div>

            {/* Card 2: Workshop Address */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.cards.addressTitle}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    {t.common.brandName}
                  </h2>
                  <address className="not-italic text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {t.common.address}
                  </address>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  href={businessData.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-colors border border-slate-200"
                >
                  <Navigation className="w-3.5 h-3.5 text-slate-700" />
                  <span>{t.contact.cards.mapsBtn}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Card 3: Business Hours */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.cards.hoursTitle}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    {t.common.timing}
                  </h2>
                  <div className="mt-2 text-xs sm:text-sm text-slate-600">
                    <p>{t.common.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span>{t.contact.cards.emergencySub}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREA & COVERAGE */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-xl p-5 sm:p-7 border border-slate-200">
            <div className="max-w-2xl space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {t.contact.coverage.tag}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {t.contact.coverage.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {t.contact.coverage.sub}
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {businessData.serviceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{area}</span>
                </div>
              ))}
            </div>

            {/* Direct Phone Reason Notice */}
            <div className="mt-6 p-3.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
              <Info className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-slate-900">{t.contact.coverage.adviceTitle}</strong>
                <p className="text-slate-600 mt-0.5">
                  {t.contact.coverage.adviceDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAP EMBED SECTION */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.contact.map.heading}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.contact.map.sub}
                </p>
              </div>
              <a
                href={businessData.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium px-3.5 py-1.5 rounded-lg text-xs transition-colors"
              >
                <span>{t.contact.map.directionsBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>

            <div className="relative h-72 sm:h-80 w-full bg-slate-100">
              <iframe
                title="Workshop Location Map"
                src="https://maps.google.com/maps?q=Industrial+Area+Phase+1+Submersible+Pump+Repair&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
