import type { Metadata } from "next";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Tamminen Konsult AB för dialog om bygg- och projektledning samt fuktsäkerhetsfrågor.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | Tamminen Konsult AB",
    description:
      "Kontakta Tamminen Konsult AB för dialog om bygg- och projektledning samt fuktsäkerhetsfrågor.",
    url: "/kontakt",
    images: [
      {
        url: "/brand/helmet-hero.png",
        width: 1200,
        height: 630,
        alt: "Kontakt Tamminen Konsult AB",
      },
    ],
  },
};

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section kontakt-page-section">
          <div className="container">
            <div className="kontakt-page-top-copy">
              <h1>Kontakt</h1>
              <p>
                Har du ett projekt på gång eller behov av stöd i ett specifikt
                skede? Skicka ett meddelande så återkommer vi för en första
                dialog.
              </p>
            </div>

            <div className="kontakt-page-layout">
              <aside className="kontakt-page-left">
                <div className="kontakt-page-contact-list">
                  <div className="kontakt-card-email">
                    <p className="kontakt-page-contact-label">E-post</p>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                  <div>
                    <p className="kontakt-page-contact-label">Telefon</p>
                    <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
                  </div>
                  <div>
                    <p className="kontakt-page-contact-label">LinkedIn</p>
                    <a
                      href={company.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="external-link-inline"
                    >
                      LinkedIn-profil
                      <ExternalLinkIcon />
                    </a>
                  </div>
                  <div>
                    <p className="kontakt-page-contact-label">Adress</p>
                    <p>Utsiktsvägen 6</p>
                    <p>605 70 Svärtinge</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
