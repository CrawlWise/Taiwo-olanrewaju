'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PartnersData } from '@/site-data/home';

export default function Partners() {
  // Duplicate for seamless infinite loop
  const allPartners = [...PartnersData, ...PartnersData];

  return (
    <section
      className="brand-slider-section"
      aria-labelledby="supported-companies-heading"
    >
      {/* Decorative background glows */}
      <div className="brand-slider-bg-glow brand-slider-bg-glow--left" />
      <div className="brand-slider-bg-glow brand-slider-bg-glow--right" />

      <div className="brand-slider-inner">
        {/* Section header */}
        <div className="brand-slider-header">
          <span className="brand-slider-badge">Trusted Partners</span>
          <h2
            id="supported-companies-heading"
            className="brand-slider-title"
          >
            Companies We Work With
          </h2>
          <p className="brand-slider-description">
            We partner with Canada&apos;s leading financial institutions to
            provide you with the best coverage and investment solutions.
          </p>
        </div>

        {/* Marquee track — click anywhere to visit affiliates */}
        <Link href="/affiliates" className="brand-marquee-link">
          <div
            className="brand-marquee"
            aria-label="Supported companies carousel"
          >
            {/* Fade masks */}
            <div className="brand-marquee-fade brand-marquee-fade--left" />
            <div className="brand-marquee-fade brand-marquee-fade--right" />

            <div className="brand-marquee-track">
              {allPartners.map((company, index) => (
                <div
                  className="brand-company-card"
                  key={`${company.name}-${index}`}
                >
                  {/* Logo */}
                  <div className="brand-card-logo-wrapper">
                    <Image
                      src={company.image}
                      alt={`${company.name} logo`}
                      fill
                      sizes="112px"
                      className="brand-card-logo-img"
                    />
                  </div>
                  {/* Name below logo */}
                  <span className="brand-card-name">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
