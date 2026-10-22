"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Wrench, CheckCircle2 } from "lucide-react";
import { businessData } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Business Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-white flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4 text-slate-200" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {t.common.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.common.brandTagline}
            </p>
            <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.home.hero.badgeTesting}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.common.menuTitle}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.common.navHome}
                </Link>
              </li>
              <li>
                <Link href="/repair" className="hover:text-white transition-colors">
                  {t.common.navRepair}
                </Link>
              </li>
              <li>
                <Link href="/borewell" className="hover:text-white transition-colors">
                  {t.common.navBorewell}
                </Link>
              </li>
              <li>
                <Link href="/troubleshooting" className="hover:text-white transition-colors">
                  {t.common.navTroubleshooting}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.common.navAbout}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.common.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.home.services.heading}
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {t.footerWorks.map((work, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-slate-500">•</span>
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Location */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t.contact.cards.addressTitle}
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${businessData.phoneRaw}`}
                    className="font-bold text-white hover:text-slate-200 transition-colors"
                  >
                    {t.common.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  {t.common.address}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  {t.common.workingHours}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {t.common.brandName}. {t.common.allRightsReserved}</p>
          <p>{t.common.footerNotice}</p>
        </div>
      </div>
    </footer>
  );
}
