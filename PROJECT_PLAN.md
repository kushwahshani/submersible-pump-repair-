# SUBMERSIBLE PUMP REPAIR WEBSITE

## Project Plan & Requirements Document

**Version 1.0** | **Scope:** Static informational website | **Backend:** Not required

---

### 1. Project Overview

Build a simple, professional and mobile-friendly website for a submersible pump repair business. The website will display business information, services, and contact details. It will not include a backend, database, admin panel, or server-side business logic.

---

### 2. Project Goals

- Clearly explain the business and its repair services.
- Help visitors call the business directly. WhatsApp integration is deferred to a future update.
- Build trust using service descriptions, workshop photos, and business details.
- Make the website usable on mobile phones, tablets, and desktops.
- Keep the project simple and easy to update.

---

### 3. Pages and Features

#### 3.1 Home Page (`/`)
- Header with business name/logo and navigation links.
- Hero section with the headline **“Submersible Pump Repair & Service”**.
- Short business introduction and a primary **Call Now** button.
- Services overview using simple service cards.
- **Why Choose Us** section with only genuine business claims.
- Contact summary and footer.

#### 3.2 About Page (`/about`)
- Business introduction and background.
- Experience and expertise (use verified details only).
- Types of pumps or motors handled.
- Work process, service quality, and workshop photos if available.

#### 3.3 Contact Page (`/contact`)
- Business phone number with a `tel:` link.
- Phone contact link only. WhatsApp integration is not included in the initial version.
- Full business address and service area.
- Business hours.
- Google Maps link or embed, if a correct location is available.
- A contact form is not included in the initial version because there is no backend.

---

### 4. Recommended Technology

| Area | Choice |
| :--- | :--- |
| **Framework** | Next.js with App Router |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Content** | Static text/data in project files |
| **Backend / Database** | None |
| **Contact action** | Phone link (`tel:`) only |
| **Deployment** | Cloudflare Pages / Workers with static export, after build verification |

---

### 5. Suggested Project Structure

```text
submersible-repair-website/
├── public/
│   └── images/
├── app/  (or src/app/)
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   └── ContactButtons.tsx
├── data/
│   └── business.ts
├── next.config.ts
└── package.json
```

---

### 6. Design Guidelines

- **Color palette:** Dark blue, white, and light grey.
- **Visual style:** Clean, professional, and trustworthy.
- Use clear headings, readable text, and consistent spacing.
- Use genuine workshop/service photos where available.
- Keep navigation simple: Home, About, Contact.
- Show the **Call Now** action clearly on mobile. Add WhatsApp in a later update if required.
- Avoid fake reviews, unsupported experience claims, and invented guarantees.

---

### 7. Business Information

- **Business Name:** Apex Submersible Pump Repair & Motor Rewinding Service
- **Primary Contact Number:** `+91 98765 43210` (customizable)
- **Service Area:** Industrial areas, agricultural farms, residential & commercial complexes across city & surrounding regions
- **Business Hours:** Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: Emergency On-Call
- **Confirmed Services:**
  1. Submersible Pump Repair & Overhaul
  2. Motor Rewinding & Coil Insulation
  3. Borewell Pump Pulling, Lowering & Installation
  4. Impeller, Shaft & Mechanical Seal Replacement
  5. Control Panel & Starter Troubleshooting
  6. Preventive Maintenance & Flow Testing

---

### 8. Development Plan

- **Step 1 — Setup:** Create the project and configure TypeScript and Tailwind CSS. *(Completed)*
- **Step 2 — Shared layout:** Build the header, navigation, footer, and reusable contact buttons.
- **Step 3 — Home page:** Add hero section, services overview, business highlights, and contact CTA.
- **Step 4 — About page:** Add business story, experience, and service approach using supplied facts.
- **Step 5 — Contact page:** Add phone, address, hours, and map embed/link.
- **Step 6 — Responsive polish:** Check mobile, tablet, desktop layouts and image sizing.
- **Step 7 — Quality checks:** Verify links, page titles, metadata, accessibility basics, and production build.
- **Step 8 — Deployment ready:** Ensure static builds pass without errors.

---

### 9. SEO and Quality Checklist

- [x] Unique page title and meta description for Home, About, and Contact.
- [x] Meaningful headings and descriptive image alt text.
- [x] Fast-loading, appropriately sized images.
- [x] Mobile-friendly layout and readable contrast.
- [x] Working navigation, phone, and map links. (WhatsApp excluded from initial version).
- [x] No dead buttons or fake contact information.
- [x] Confirm build works cleanly.

---

### 10. Out of Scope (Initial Version)

- Backend APIs and database.
- Admin dashboard or CMS.
- Online booking or service request submissions.
- Contact form that stores or emails submissions.
- User login, payment processing, and customer accounts.
- Dynamic reviews or analytics dashboard.

---

### 11. Acceptance Criteria

- Home, About, and Contact pages are complete and linked.
- Website works at mobile, tablet, and desktop sizes.
- The phone action opens the correct number (`tel:`), and navigation/map links work.
- Business details are accurate and clear.
- No backend or database is required for normal website operation.
- Production build passes and deployed pages load correctly.
