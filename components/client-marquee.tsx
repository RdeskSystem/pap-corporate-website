import Link from "next/link";
import { routeFor, type Locale } from "@/lib/site-content";

export function ClientMarquee({
  clients,
  locale,
}: {
  clients: readonly string[];
  locale: Locale;
}) {
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
          <Link className="text-link" href={routeFor(locale, "industries")}>
            {isIndonesian ? "Lihat semua klien" : "View all clients"}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="client-marquee">
        <div
          className="client-marquee__viewport"
          role="region"
          tabIndex={0}
          aria-label={isIndonesian ? "Nama klien, fokus untuk menjeda animasi" : "Client names, focus to pause animation"}
        >
          <div
            className="client-marquee__track"
            id="client-marquee-track"
          >
            {group(false)}
            {group(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
