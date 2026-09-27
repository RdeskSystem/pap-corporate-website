"use client";

import Link from "next/link";
import { useState } from "react";
import { routeFor, type Locale } from "@/lib/site-content";

export function ClientMarquee({
  clients,
  locale,
}: {
  clients: readonly string[];
  locale: Locale;
}) {
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const isIndonesian = locale === "id";
  const group = (isDuplicate: boolean) => (
    <ul
      className="client-marquee__group"
      aria-label={isDuplicate ? undefined : (isIndonesian ? "Daftar klien PAP" : "PAP client list")}
      aria-hidden={isDuplicate || undefined}
    >
      {clients.map((client) => (
        <li className="client-marquee__item" key={client}>
          <span className="client-logo-box">{client}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="profile-home-clients section-pad content-width" aria-labelledby="client-marquee-title">
      <div className="section-heading section-heading--split client-marquee__heading">
        <div>
          <p className="eyebrow">{isIndonesian ? "KLIEN KAMI" : "OUR CLIENTS"}</p>
          <h2 id="client-marquee-title">
            {isIndonesian ? "Kolaborasi bersama berbagai mitra." : "Working together with our partners."}
          </h2>
        </div>
        <div className="client-marquee__actions">
          <button
            className="client-marquee__toggle"
            type="button"
            aria-controls="client-marquee-track"
            aria-pressed={manuallyPaused}
            aria-label={isIndonesian
              ? (manuallyPaused ? "Lanjutkan animasi logo klien" : "Jeda animasi logo klien")
              : (manuallyPaused ? "Resume client logo animation" : "Pause client logo animation")}
            onClick={() => setManuallyPaused((paused) => !paused)}
          >
            <span aria-hidden="true">{manuallyPaused ? "▶" : "Ⅱ"}</span>
            {isIndonesian ? (manuallyPaused ? "Lanjutkan" : "Jeda animasi") : (manuallyPaused ? "Resume" : "Pause animation")}
          </button>
          <Link className="text-link" href={routeFor(locale, "industries")}>
            {isIndonesian ? "Lihat semua klien" : "View all clients"}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={`client-marquee${manuallyPaused ? " is-paused" : ""}`}>
        <div className="client-marquee__viewport">
          <div
            className="client-marquee__track"
            id="client-marquee-track"
          >
            {group(false)}
            {group(true)}
          </div>
        </div>
      </div>
      <p className="client-marquee__hint">
        {isIndonesian
          ? "Arahkan kursor ke nama klien untuk menjeda."
          : "Hover over a client name to pause."}
      </p>
    </section>
  );
}
