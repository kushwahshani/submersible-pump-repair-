"use client";

import React from "react";
import { Check, Phone, Droplets, Zap, Wrench, ArrowDownUp, Cpu, Waves } from "lucide-react";
import { businessData } from "@/data/business";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  keyFeatures: string[];
  image: string;
  iconName: string;
}

export default function ServiceCard({
  title,
  shortDesc,
  keyFeatures,
  image,
  iconName,
}: ServiceCardProps) {
  const { t } = useLanguage();

  const renderIcon = () => {
    switch (iconName) {
      case "Droplets":
        return <Droplets className="w-4 h-4 text-slate-800" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-slate-800" />;
      case "Wrench":
        return <Wrench className="w-4 h-4 text-slate-800" />;
      case "ArrowDownUp":
        return <ArrowDownUp className="w-4 h-4 text-slate-800" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-slate-800" />;
      case "Waves":
        return <Waves className="w-4 h-4 text-slate-800" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-800" />;
    }
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
      {/* Photo */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs p-1.5 rounded-md shadow-xs border border-slate-200">
          {renderIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-slate-900 leading-snug">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {shortDesc}
        </p>

        {/* Feature bullets */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex-1">
          <ul className="space-y-1.5 text-xs text-slate-700">
            {keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Status Note */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          <span>{t.home.services.turnaround}</span>
        </div>
      </div>
    </article>
  );
}
