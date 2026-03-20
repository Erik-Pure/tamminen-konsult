"use client";

import Image from "next/image";
import { useState } from "react";

type MetricKey = "project" | "moist" | "technical";

const metricItems = [
  {
    key: "project" as const,
    title: "Projektstyrning",
    text: "Ekonomi, tidplan och samordning hålls ihop från start till mål. Du får tydlig uppföljning och ett arbetssätt som skapar kontroll i varje beslutspunkt.",
    imageClass: "is-project",
  },
  {
    key: "moist" as const,
    title: "Fuktsäkerhet",
    text: "Risker identifieras och hanteras i rätt skede för bättre beslut. Fokus ligger på förebyggande insatser som minskar risken för kostsamma följdproblem i produktion och drift.",
    imageClass: "is-moist",
  },
  {
    key: "technical" as const,
    title: "Teknisk tydlighet",
    text: "Underlag och rekommendationer presenteras så att de går att agera på. Informationen struktureras tydligt för beställare, projektör och entreprenör.",
    imageClass: "is-technical",
  },
];

function MetricIcon({ kind }: { kind: MetricKey }) {
  if (kind === "project") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="10" width="4" height="8" rx="1" />
        <rect x="10" y="6" width="4" height="12" rx="1" />
        <rect x="16" y="3" width="4" height="15" rx="1" />
      </svg>
    );
  }

  if (kind === "moist") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6l-7-3Z" />
        <path d="m9.5 12 2 2 3-3.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 6h14" />
      <path d="M5 12h14" />
      <path d="M5 18h9" />
      <circle cx="17.5" cy="18" r="1.5" />
    </svg>
  );
}

export function MetricsInteractive() {
  const [hovered, setHovered] = useState<MetricKey | null>(null);
  const activeMetric = hovered;

  return (
    <div className="homev2-metrics-showcase">
      <article
        className={`homev2-metrics-image-card homev2-metrics-image-card-interactive ${activeMetric ? metricItems.find((item) => item.key === activeMetric)?.imageClass ?? "" : ""}`}
      >
        <div className="homev2-metrics-interactive-bg homev2-metrics-bg-project" />
        <div className="homev2-metrics-interactive-bg homev2-metrics-bg-moist" />
        <div className="homev2-metrics-interactive-bg homev2-metrics-bg-technical" />
        <Image
          src="/brand/reb-cutout.png"
          alt="Rebecka Tamminen i arbetskläder"
          width={760}
          height={1020}
          sizes="(max-width: 900px) 100vw, 42vw"
          className="homev2-metrics-cutout"
        />
      </article>

      <div className="homev2-metrics-combined homev2-metrics-vertical">
        {metricItems.map((item) => {
          const isActive = activeMetric === item.key;
          return (
            <article
              key={item.key}
              className={`homev2-metric-cell ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                type="button"
                className={`homev2-metric-trigger ${isActive ? "is-active" : ""}`}
                onFocus={() => setHovered(item.key)}
                onBlur={() => setHovered(null)}
              >
                <div className="homev2-metric-header">
                  <span className="metric-icon">
                    <MetricIcon kind={item.key} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
