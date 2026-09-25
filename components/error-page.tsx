"use client";

import Link from "next/link";
import type { Locale } from "@/lib/site-content";

export function ErrorPage({ locale, reset }: { locale: Locale; reset: () => void }) {
  const isEnglish = locale === "en";

  return (
    <main className="not-found-page error-page">
      <p className="eyebrow">500 · {isEnglish ? "TEMPORARY ISSUE" : "GANGGUAN SEMENTARA"}</p>
      <h1>{isEnglish ? "We couldn’t load this page." : "Halaman belum dapat dimuat."}</h1>
      <p>
        {isEnglish
          ? "Please try again. No technical details are shown here."
          : "Silakan coba kembali. Detail teknis tidak ditampilkan di halaman ini."}
      </p>
      <div className="error-page__actions">
        <button className="button button--primary" type="button" onClick={reset}>
          {isEnglish ? "Try again" : "Coba lagi"}<span aria-hidden="true">↻</span>
        </button>
        <Link className="text-link" href={isEnglish ? "/en" : "/"}>
          {isEnglish ? "Back to Home" : "Kembali ke Beranda"}<span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
