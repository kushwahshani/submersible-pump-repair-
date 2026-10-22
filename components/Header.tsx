"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Wrench, Globe } from "lucide-react";
import { businessData } from "@/data/business";
import { CallButton } from "./ContactButtons";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.common.navHome, href: "/" },
    { label: t.common.navRepair, href: "/repair" },
    { label: t.common.navBorewell, href: "/borewell" },
    { label: t.common.navAbout, href: "/about" },
    { label: t.common.navTroubleshooting, href: "/troubleshooting" },
    { label: t.common.navContact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Business Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 mr-2 md:flex-initial md:mr-4 lg:mr-8 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Wrench className="w-4 h-4 text-slate-200" />
            </div>
            <div className="min-w-0">
              <span className="block text-sm sm:text-base font-bold text-slate-900 leading-tight truncate">
                {t.common.brandName}
              </span>
              <span className="block text-[10px] sm:text-xs text-slate-500 font-normal truncate">
                {t.common.brandTagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Actions with clear spacing */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
            {/* Desktop Nav Links */}
            <nav className="flex items-center gap-3 lg:gap-4.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs lg:text-sm font-medium transition-colors py-1 whitespace-nowrap ${
                      isActive
                        ? "text-slate-950 font-semibold border-b-2 border-slate-900"
                        : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher & Call Action with dedicated gap and border divider */}
            <div className="flex items-center gap-2.5 lg:gap-3 pl-4 lg:pl-5 border-l border-slate-200 shrink-0">
              {/* Language Switcher */}
              <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage("hi")}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    language === "hi"
                      ? "bg-white text-slate-950 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  aria-label="Switch language to Hindi"
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    language === "en"
                      ? "bg-white text-slate-950 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  aria-label="Switch language to English"
                >
                  English
                </button>
              </div>

              <CallButton variant="primary" size="sm" label={t.common.callNow} />
            </div>
          </div>

          {/* Mobile Right Bar: Language + Menu */}
          <div className="flex items-center gap-1.5 shrink-0 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="inline-flex items-center bg-slate-100 rounded-md p-0.5 border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
                className="px-2 py-1 font-semibold text-slate-800 flex items-center gap-1 text-[11px]"
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3 text-slate-500" />
                <span>{language === "hi" ? "ENG" : "हिन्दी"}</span>
              </button>
            </div>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-md">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive ? "bg-slate-100 text-slate-900 font-semibold" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">{t.common.languageSelectLabel}:</span>
            <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                className={`px-3 py-1 rounded-md font-medium ${
                  language === "hi" ? "bg-white text-slate-900 font-bold shadow-xs" : "text-slate-600"
                }`}
              >
                {t.common.langHindi}
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md font-medium ${
                  language === "en" ? "bg-white text-slate-900 font-bold shadow-xs" : "text-slate-600"
                }`}
              >
                {t.common.langEnglish}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
