import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Läs mer om tjänster inom bygg- och projektledning, Diplomerad Fuktsakkunnig, fuktsäkerhetsansvar samt byggdoktor.",
  alternates: {
    canonical: "/tjanster",
  },
  openGraph: {
    title: "Tjänster | Tamminen Konsult AB",
    description:
      "Läs mer om tjänster inom bygg- och projektledning, Diplomerad Fuktsakkunnig, fuktsäkerhetsansvar samt byggdoktor.",
    url: "/tjanster",
    images: [
      {
        url: "/brand/tjansterhero.png",
        width: 1200,
        height: 630,
        alt: "Tjänster hos Tamminen Konsult AB",
      },
    ],
  },
};

function getServiceImage(title: string) {
  const key = title.toLowerCase();

  if (key.includes("bygg- och projektledning")) {
    return "/brand/services/_0000_projekt.png";
  }

  if (key.includes("diplomerad fuktsakkunnig")) {
    return "/brand/services/_0001_diplomerad.png";
  }

  if (key.includes("fuktsäkerhetsansvarig")) {
    return "/brand/services/_0003_fuktsakerhet.png";
  }

  if (key.includes("byggdoktor")) {
    return "/brand/services/_0002_doktor.png";
  }

  return null;
}

export default function TjansterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="about-page-hero tjanster-page-hero">
          <div className="container">
            <div className="about-page-hero-content">
              <h1>Tjänster</h1>
              <p>
                Tamminen Konsult AB erbjuder kvalificerat stöd i byggprocessens olika
                skeden, med fokus på kvalitet, tydlighet och fuktsäkerhet.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid tjanster-services-grid">
              {services.map((service) => {
                const imageSrc = getServiceImage(service.title);

                return (
                  <article key={service.title} className="card tjanster-service-card">
                    <div className="tjanster-service-media" aria-hidden="true">
                      {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt=""
                        width={520}
                        height={520}
                        className="tjanster-service-media-image"
                      />
                      ) : (
                        <span>Bild</span>
                      )}
                    </div>
                    <div className="tjanster-service-content">
                      <h2>{service.title}</h2>
                      {service.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {"resourceHref" in service && service.resourceHref ? (
                        <p style={{ marginTop: "14px" }}>
                          <a
                            href={service.resourceHref}
                            target="_blank"
                            rel="noreferrer"
                            className="card-link external-link-inline"
                          >
                            {service.resourceLabel ?? "Läs mer"}
                            <ExternalLinkIcon />
                          </a>
                        </p>
                      ) : null}
                      {"points" in service && Array.isArray(service.points) ? (
                        <ul className="service-list">
                          {service.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section homev2-contact-cta-section">
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
