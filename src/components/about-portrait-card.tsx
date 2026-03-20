"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AboutPortraitCard() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const squareScaleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <article ref={containerRef} className="homev2-about-feature about-page-feature-static about-page-portrait-card">
      <motion.div
        className="about-page-portrait-square"
        style={{ scaleY: squareScaleY }}
        aria-hidden="true"
      />
      <Image
        src="/brand/reb-portrait-cutout.png"
        alt="Porträtt av Rebecka Tamminen"
        width={740}
        height={920}
        sizes="(max-width: 900px) 100vw, 42vw"
        className="homev2-about-feature-image about-page-portrait-image"
      />
    </article>
  );
}
