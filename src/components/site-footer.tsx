import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { company, navItems, services } from "@/lib/content";

export function SiteFooter() {
  const footerNavItems = navItems.filter((item) => item.href !== "/");
  const companyNavItems = footerNavItems;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <p className="footer-title">Tjänster</p>
            <nav className="footer-list" aria-label="Tjänster i footer">
              {services.map((service) => (
                <Link key={`service-${service.title}`} href="/tjanster">
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <p className="footer-title">Företaget</p>
            <nav className="footer-list" aria-label="Företagslänkar i footer">
              {companyNavItems.map((item) => (
                <Link key={`company-${item.href}`} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <p className="footer-title">Kontakt</p>
            <div className="footer-list">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
              <a
                href={company.linkedin}
                target="_blank"
                rel="noreferrer"
                className="external-link-inline"
              >
                LinkedIn
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-title">Adress</p>
            <div className="footer-list">
              <p>Utsiktsvägen 6</p>
              <p>605 70 Svärtinge</p>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-title">Juridik</p>
            <div className="footer-list">
              <p>Tamminen Konsult AB</p>
              <p>Org.nr 559125-8933</p>
              <p>F-skattsedel: Ja</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-brand-mark">
            <Image
              src="/brand/tamminen-icon-white.svg"
              alt="Tamminen ikon"
              width={34}
              height={34}
            />
          </div>
          <div className="footer-chips" aria-label="Kompetensområden i footer">
            <span>Byggledning</span>
            <span>Projektledning</span>
            <span>Fuktsäkerhet</span>
            <span>Byggdoktor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
