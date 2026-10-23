export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  image: string;
  iconName: string;
}

export interface BusinessData {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  phone: string;
  phoneRaw: string;
  repairWorkerPhone: string;
  repairWorkerPhoneRaw: string;
  borewellWorkerPhone: string;
  borewellWorkerPhoneRaw: string;
  address: {
    line1: string;
    line2: string;
    cityStateZip: string;
    googleMapsUrl: string;
    mapEmbedQuery: string;
  };
  serviceAreas: string[];
  businessHours: {
    days: string;
    hours: string;
  }[];
  services: ServiceItem[];
  pumpTypes: {
    name: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  workProcess: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const businessData: BusinessData = {
  name: "Kushwah Submersible Pump Repair & Motor Rewinding",
  shortName: "Kushwah Pump Repair",
  tagline: "Professional Submersible Pump Repair & Precision Motor Rewinding",
  headline: "Submersible Pump Repair & Service",
  subheadline:
    "Expert troubleshooting, copper motor rewinding, shaft realignment, and borewell pump restoration for agricultural, industrial, and domestic water systems.",
  phone: "+91 97136 12298",
  phoneRaw: "+919713612298",
  repairWorkerPhone: "+91 97136 12298",
  repairWorkerPhoneRaw: "+919713612298",
  borewellWorkerPhone: "+91 96170 91462",
  borewellWorkerPhoneRaw: "+919617091462",
  address: {
    line1: "Plot No. 42, Industrial Area Phase 1",
    line2: "Near Water Works & Grain Market Bypass",
    cityStateZip: "Industrial Belt, Pin: 140001",
    googleMapsUrl: "https://maps.google.com/?q=Submersible+Pump+Repair+Industrial+Area",
    mapEmbedQuery: "Submersible+Pump+Repair+Workshop",
  },
  serviceAreas: [
    "Industrial plants & manufacturing units",
    "Agricultural borewells & irrigation farms",
    "Residential societies & high-rise apartments",
    "Commercial water supply & cooling towers",
    "Construction dewatering & sump drainage sites",
  ],
  businessHours: [
    { days: "Monday – Sunday", hours: "8:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "Emergency On-Call Service" },
  ],
  services: [
    {
      id: "borewell-pump-repair",
      title: "Submersible Borewell Pump Repair",
      shortDesc:
        "Full overhaul of 4-inch, 6-inch, and 8-inch deep-well submersible pumps including staging, bearing replacement, and flow restoration.",
      fullDesc:
        "We diagnose and repair issues such as low water discharge, abnormal vibration, tripping starters, and jammed pump assemblies. Complete mechanical checkups with precision alignment.",
      keyFeatures: [
        "4\", 6\", 8\" and 10\" deep-well pumps",
        "Diffuser and stage chamber refurbishing",
        "Thrust bearing inspection & clearance tuning",
        "Flow pressure benchmarking after overhaul",
      ],
      image: "/images/hero-pump.jpg",
      iconName: "Droplets",
    },
    {
      id: "motor-rewinding",
      title: "Precision Copper Motor Rewinding",
      shortDesc:
        "Heavy-duty rewinding for single-phase and three-phase submersible motors using high-grade electrolytic copper wire and dual insulation.",
      fullDesc:
        "When water leakage or electrical spikes burn out motor coils, our workshop strips, cleans, and rewinds stators using genuine pure copper gauge and submarine winding wire.",
      keyFeatures: [
        "100% EC grade copper winding wire",
        "Submersible water-proof winding cables",
        "Megger insulation & winding resistance testing",
        "Vacuum varnish & thermal protection check",
      ],
      image: "/images/motor-rewinding.jpg",
      iconName: "Zap",
    },
    {
      id: "impeller-seal-service",
      title: "Impeller, Shaft & Mechanical Seal Replacement",
      shortDesc:
        "Machining, dynamic shaft balancing, precision bushing fitting, and carbon-ceramic mechanical seal installation to stop leakage.",
      fullDesc:
        "Sand, silt, and cavitation damage impellers and carbon seals. We replace worn stainless steel and bronze impellers, true-up bent shafts, and pressure-test water seal integrity.",
      keyFeatures: [
        "SS-304 & Noryl impeller replacement",
        "Lathe truing for rotor shaft run-out",
        "High-pressure mechanical seal replacements",
        "Sand-guard & slinger ring servicing",
      ],
      image: "/images/impeller-repair.jpg",
      iconName: "Wrench",
    },
    {
      id: "borewell-pulling-installation",
      title: "Borewell Pulling, Lowering & Installation",
      shortDesc:
        "On-site tripod and winch rig assistance to pull stuck or failed pumps from deep borewells and safely lower repaired units.",
      fullDesc:
        "Specialized field extraction for tube-wells up to 600 feet. We inspect riser pipes, column pipes, check valves, and waterproof power cable joints before lowering.",
      keyFeatures: [
        "Tripod and mechanical winch lowering rig",
        "Waterproof 3-core vulcanized cable jointing",
        "Non-return valve (NRV) testing & replacement",
        "Column pipe inspection and torque tightening",
      ],
      image: "/images/borewell-installation.jpg",
      iconName: "ArrowDownUp",
    },
    {
      id: "control-panel-troubleshooting",
      title: "Control Panel & Starter Diagnostics",
      shortDesc:
        "Troubleshooting DOL and Star-Delta starter panels, overload relay calibration, contactor replacement, and capacitor bank testing.",
      fullDesc:
        "A pump motor is only as safe as its control panel. We diagnose single phasing, phase reversal, dry-run protection, and burnt contractor points to prevent motor burnout.",
      keyFeatures: [
        "Single-phase and 3-phase starter repairs",
        "Running & starting capacitor bank checks",
        "Thermal overload relay calibration",
        "Dry-run & high/low voltage cut-off setup",
      ],
      image: "/images/hero-pump.jpg",
      iconName: "Cpu",
    },
    {
      id: "openwell-monoblock-service",
      title: "Openwell Submersible & Monoblock Service",
      shortDesc:
        "Complete servicing for farm openwell pumps, sump pumps, and monoblocks operating submerged in open sumps and canals.",
      fullDesc:
        "Routine overhaul for horizontal and vertical openwell submersible pumps. Gasket resealing, oil/water chamber refilling, and impeller clearing for silt and debris.",
      keyFeatures: [
        "Horizontal and vertical openwell units",
        "Chamber seal leak inspection",
        "Anti-corrosive priming and casing seals",
        "Direct sump installation verification",
      ],
      image: "/images/borewell-installation.jpg",
      iconName: "Waves",
    },
  ],
  pumpTypes: [
    {
      name: "Borewell Submersible Pumps (V4, V6, V8, V10)",
      description: "Multi-stage deep tube-well pumps for farms, waterworks, and industries.",
    },
    {
      name: "Openwell Submersible Pumps",
      description: "Horizontal & vertical water-filled or oil-filled units for open wells and tanks.",
    },
    {
      name: "Sewage & Dewatering Submersible Pumps",
      description: "Vortex and cutter impeller pumps for basements, construction sumps, and drainage.",
    },
    {
      name: "Centrifugal & Monoblock Motors",
      description: "Surface agricultural irrigation pumps and high-head commercial boosters.",
    },
  ],
  whyChooseUs: [
    {
      title: "Genuine Workshop & Dedicated Testing Rig",
      description:
        "We are an established repair workshop with dedicated coil rewinding tables, lathe equipment, and water test tanks—not an unverified middleman.",
    },
    {
      title: "Pure Electrolytic Copper Winding",
      description:
        "We use only calibrated, grade-A insulated copper wire that withstands high heat, avoiding cheap aluminum or undersized sub-standard wire.",
    },
    {
      title: "Pressure & Insulation Testing Before Handover",
      description:
        "Every repaired pump is megger insulation tested and checked for electrical balance and amp draw before it leaves our workshop.",
    },
    {
      title: "Transparent Assessment & Honest Pricing",
      description:
        "We clearly explain what components need replacement (bushings, seals, windings, or impellers) with upfront itemized costs.",
    },
  ],
  workProcess: [
    {
      step: "01",
      title: "Initial Inspection & Intake",
      desc: "We test winding continuity, insulation resistance (Megger), shaft rotation, and physical casing condition.",
    },
    {
      step: "02",
      title: "Complete Disassembly & Diagnosis",
      desc: "Pump stages, impellers, thrust bearing, rotor shaft, and stator coils are carefully disassembled and inspected.",
    },
    {
      step: "03",
      title: "Precision Rewinding & Component Overhaul",
      desc: "Motor coils are stripped and rewound with pure copper; impellers, mechanical seals, and sleeve bearings are replaced or trued.",
    },
    {
      step: "04",
      title: "Water Chamber Sealing & Test Run",
      desc: "Waterproof chamber seals are re-pressurized. The unit undergoes electric current and discharge pressure testing before handover.",
    },
  ],
};
