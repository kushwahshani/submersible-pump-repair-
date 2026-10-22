import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileStickyCallBar } from "@/components/ContactButtons";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { businessData } from "@/data/business";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: `${businessData.name} | समर्सिबल पंप रिपेयर और मोटर वाइंडिंग`,
    template: `%s | ${businessData.shortName}`,
  },
  description:
    "समर्सिबल पंप रिपेयर, कॉपर मोटर वाइंडिंग, बुश-शाफ्ट सेटिंग, बोरवेल से पंप निकालने और पानी का प्रेशर टेस्ट करने की भरोसेमंद वर्कशॉप।",
  keywords: [
    "समर्सिबल पंप रिपेयर",
    "submersible pump repair",
    "बोरवेल पंप रिपेयर",
    "borewell pump repair",
    "मोटर वाइंडिंग",
    "motor rewinding service",
  ],
  authors: [{ name: businessData.name }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-slate-200 selection:text-slate-900">
        <LanguageProvider>
          <ScrollToTop />
          <Header />
          <main className="flex-1 pb-16 md:pb-0 bg-white">{children}</main>
          <Footer />
          <MobileStickyCallBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
