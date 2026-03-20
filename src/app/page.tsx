import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { MetricsInteractive } from "@/components/metrics-interactive";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Startsida",
  description:
    "Bygg- och projektledning med tydlig styrning och fuktsäkerhet för byggherrar, BRF:er, fastighetsägare och entreprenörer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tamminen Konsult AB",
    description:
      "Bygg- och projektledning med tydlig styrning och fuktsäkerhet för byggherrar, BRF:er, fastighetsägare och entreprenörer.",
    url: "/",
    images: [
      {
        url: "/brand/startpage-hero.png",
        width: 1200,
        height: 630,
        alt: "Tamminen Konsult AB startsida",
      },
    ],
  },
};

function ServiceIcon({ title }: { title: string }) {
  const key = title.toLowerCase();

  if (key.includes("bygg- och projektledning")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 20h18" />
        <path d="M5 20V8l7-4 7 4v12" />
        <path d="M9 20v-5h6v5" />
      </svg>
    );
  }

  if (key.includes("fuktsakkunnig")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11Z" />
        <path d="M9 14a3 3 0 0 0 6 0" />
      </svg>
    );
  }

  if (key.includes("fuktsäkerhetsansvarig")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6l-7-3Z" />
        <path d="m9.5 12 2 2 3-3.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h6" />
      <path d="M14 12h6" />
      <path d="M12 4v6" />
      <path d="M12 14v6" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export default function Home() {
  const highlightedServices = services.slice(0, 4);

  return (
    <>
      <SiteHeader ctaHref="#kontakt" />

      <main className="homev2-main">
        <section className="homev2-hero">
          <ScrollReveal>
            <div className="container homev2-hero-grid homev2-hero-grid-single">
              <div className="homev2-hero-content">
                <div className="homev2-eyebrow-row" aria-label="Kompetensområden">
                  <span className="homev2-eyebrow">Byggledning</span>
                  <span className="homev2-eyebrow">Projektledning</span>
                  <span className="homev2-eyebrow">Fuktsäkerhet</span>
                </div>
                <h1>Bygg- och projektledning med tydlig styrning och fuktsäkerhet</h1>
                <p>
                  Tamminen Konsult AB hjälper byggherrar, fastighetsägare, BRF:er och
                  entreprenörer genom hela byggprocessen. Du får ett tydligt upplägg,
                  stabil framdrift och kvalitetssäkrade beslut.
                </p>
                <div className="homev2-cta-row">
                  <a href="#kontakt" className="btn btn-primary">
                    Kontakt
                  </a>
                  <a href="#tjanster" className="btn btn-secondary">
                    Tjänster
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="section muted" id="tjanster">
          <ScrollReveal>
            <div className="container">
              <h2 className="section-title">Tjänster i korthet</h2>
              <p className="section-intro">
                Från tidiga utredningar till produktion och uppföljning. Varje uppdrag
                anpassas efter projektets omfattning, mål och kravbild.
              </p>
              <div className="homev2-services-combined">
                {highlightedServices.map((service) => (
                  <article key={service.title} className="homev2-service-cell">
                    <div className="service-heading">
                      <span className="service-icon">
                        <ServiceIcon title={service.title} />
                      </span>
                      <h3>{service.title}</h3>
                    </div>
                    <p>{service.short}</p>
                    <Link href="/tjanster" className="card-link">
                      Läs mer
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Överblick och kontroll i varje skede</h2>
            <p className="section-intro">
              Arbetssättet bygger på struktur, tydlig kommunikation och uppföljning.
              Målet är att skapa trygghet i både process och resultat.
            </p>
            <MetricsInteractive />
          </div>
        </section>

        <section className="section" id="om-oss">
          <ScrollReveal>
            <div className="container">
              <h2 className="section-title">Om företaget</h2>
              <p className="section-intro">
                Kort om verksamheten och den kompetens du får tillgång till i ditt
                projekt.
              </p>
              <div className="homev2-about-showcase">
                <Link
                  href="/om-oss"
                  className="homev2-about-feature"
                  aria-label="Gå till Om företaget"
                >
                  <Image
                    src="/brand/helmet.png"
                    alt="Vit hjälm med Tamminen-logotyp"
                    width={740}
                    height={920}
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="homev2-about-feature-image"
                  />
                  <div className="homev2-about-feature-overlay" />
                  <div className="homev2-about-feature-content">
                    <h3>Erfarenhet genom hela byggprocessen</h3>
                  </div>
                </Link>

                <div className="homev2-about-info-grid">
                  <article className="homev2-about-info-card">
                    <h3>Roller och kompetens</h3>
                    <p>
                      Diplomerad Fuktsakkunnig, Projektledare, Byggledare och
                      Byggdoktor med fokus på tydliga underlag och välgrundade beslut.
                    </p>
                  </article>
                  <article className="homev2-about-info-card">
                    <h3>Arbetssätt</h3>
                    <p>
                      Strukturerad styrning av tid, ekonomi och kvalitet med nära
                      samordning mellan beställare, projektör och entreprenör.
                    </p>
                  </article>
                  <article className="homev2-about-info-card homev2-about-info-card-wide">
                    <h3>Mer om verksamheten</h3>
                    <p>
                      Här kan du läsa mer om arbetssätt, erfarenhet och tidigare
                      roller i byggprocessens olika skeden, eller gå vidare till
                      kontakt för en första dialog om ditt uppdrag.
                    </p>
                    <div className="homev2-cta-row">
                      <Link href="/om-oss" className="btn btn-secondary">
                        Om företaget
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="section homev2-contact-cta-section" id="kontakt">
          <ScrollReveal>
            <article className="homev2-contact-cta-card">
              <div className="container">
                <h2>Kontakt</h2>
                <p>
                  Har du ett uppdrag på gång? Hör av dig så tar vi en första dialog
                  om behov, mål och nästa steg.
                </p>
                <Link href="/kontakt" className="btn btn-secondary">
                  Kontakt
                </Link>
              </div>
            </article>
          </ScrollReveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
