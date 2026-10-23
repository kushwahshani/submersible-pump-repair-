"use client";

import React from "react";
import { Phone, PhoneCall } from "lucide-react";
import { businessData } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

interface CallButtonProps {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export function CallButton({
  variant = "primary",
  size = "md",
  className = "",
  label,
}: CallButtonProps) {
  const { t } = useLanguage();
  const displayLabel = label || t.common.callNow;

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 active:scale-95";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-4 py-2 text-sm sm:text-base gap-2 font-semibold shadow-xs",
    lg: "px-6 py-2.5 text-base sm:text-lg gap-2 font-bold shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-slate-900 hover:bg-slate-800 text-white focus:ring-2 focus:ring-slate-400",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300",
    outline:
      "border border-slate-300 text-slate-800 hover:bg-slate-50",
    white:
      "bg-white text-slate-950 hover:bg-slate-100 shadow-sm font-semibold border border-slate-200",
  };

  return (
    <a
      id={`btn-call-${variant}`}
      href={`tel:${businessData.phoneRaw}`}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      title={`${displayLabel}: ${businessData.phone}`}
      aria-label={`${displayLabel}: ${businessData.phone}`}
    >
      <Phone className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-white" />
      <span>{displayLabel}</span>
    </a>
  );
}

export function MobileStickyCallBar() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Quick mobile contact bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">{t.common.mobileHelpPrompt}</span>
          <span className="text-sm font-bold text-slate-900 tracking-wide">{businessData.phone}</span>
        </div>
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${businessData.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all active:scale-95 shadow-sm"
          aria-label="Call Kushwah Pump Repair Now"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{t.common.callNow}</span>
        </a>
      </div>
    </aside>
  );
}
