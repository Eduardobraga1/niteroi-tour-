import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { Destinations } from "@/components/destinations";
import { NiteroiTours } from "@/components/niteroi-tours";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Destinations />
        <NiteroiTours />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}


