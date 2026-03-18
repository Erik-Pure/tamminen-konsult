"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navItems } from "@/lib/content";

type SiteHeaderProps = {
  ctaHref?: string;
};

export function SiteHeader({ ctaHref = "/kontakt" }: SiteHeaderProps) {
  const pathname = usePathname();
  const visibleNavItems = navItems.filter(
    (item) => item.href !== "/" && item.href !== "/kontakt",
  );
  const mobileNavItems = navItems;

  const iconForHref = (href: string) => {
    if (href === "/") {
      return (
        <svg viewBox="0 0 51.278 70.418" aria-hidden="true" className="mobile-brand-icon">
          <path d="M20.594 70.418V26.081H0v-9.173h51.278v9.173H30.684v44.337H20.594Z" />
          <circle cx="26.095" cy="5.838" r="5.838" />
        </svg>
      );
    }

    if (href === "/tjanster") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="7" width="17" height="12" rx="2" />
          <path d="M9 7V5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V7" />
          <path d="M3.5 12h17" />
        </svg>
      );
    }

    if (href === "/om-oss") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <Image
              src="/brand/tamminen-logo.svg"
              alt={`${company.name} logotyp`}
              width={220}
              height={36}
              priority
            />
          </Link>
          <nav className="nav" aria-label="Huvudnavigation">
            {visibleNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={ctaHref} className="nav-cta">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobil navigation">
        <div className="mobile-bottom-nav-inner">
          {mobileNavItems.map((item) => (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className={`mobile-nav-link ${pathname === item.href ? "is-active" : ""}`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span className="mobile-nav-icon">{iconForHref(item.href)}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
