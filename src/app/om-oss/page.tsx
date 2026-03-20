import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Om företaget",
  description:
    "Om Tamminen Konsult AB och Rebecka Tamminen, med erfarenhet inom byggledning, projektledning och fuktsäkerhet.",
  alternates: {
    canonical: "/om-oss",
  },
  openGraph: {
    title: "Om företaget | Tamminen Konsult AB",
    description:
      "Om Tamminen Konsult AB och Rebecka Tamminen, med erfarenhet inom byggledning, projektledning och fuktsäkerhet.",
    url: "/om-oss",
    images: [
      {
        url: "/brand/helmet-hero.png",
        width: 1200,
        height: 630,
        alt: "Om Tamminen Konsult AB",
      },
    ],
  },
};

export default function OmOssPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="about-page-hero">
          <div className="container">
            <div className="about-page-hero-content">
              <h1>Om företaget</h1>
              <p>
                Tamminen Konsult AB är ett enmansföretag drivet av Rebecka Tamminen.
                {` ${profile.shortSummary}`}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="homev2-about-showcase">
              <article className="homev2-about-feature about-page-feature-static">
                <Image
                  src="/brand/becca-pro.png"
                  alt="Porträtt av Rebecka Tamminen"
                  width={740}
                  height={920}
                  sizes="(max-width: 900px) 100vw, 42vw"
                  className="homev2-about-feature-image"
                />
              </article>

              <div className="homev2-about-info-grid about-page-info-grid">
                <article className="homev2-about-info-card">
                  <h3>Erfarenhet och tydlig styrning</h3>
                  <p>
                    Sedan 2007 har Rebecka arbetat som arbetsledare, byggledare,
                    projektledare och fuktsakkunnig genom hela byggprocessen. Du får
                    ett strukturerat stöd med fokus på kvalitet, samordning och
                    välgrundade beslut.
                  </p>
                </article>
                <article className="homev2-about-info-card">
                  <h3>Arbetssätt</h3>
                  <p>
                    Arbetet bygger på tydlig kommunikation, teknisk kvalitet och
                    lösningsfokus i varje skede - från planering till uppföljning.
                  </p>
                </article>
                <article className="homev2-about-info-card">
                  <h3>Roller och kompetens</h3>
                  <p>
                    {profile.roles} med fokus på tydliga underlag, riskhantering
                    och välgrundade beslut.
                  </p>
                  <div className="homev2-cta-row">
                    <a
                      href={company.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary external-link-inline"
                    >
                      LinkedIn
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </article>
              </div>
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
