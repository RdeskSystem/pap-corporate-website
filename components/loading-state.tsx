import type { Locale } from "@/lib/site-content";

export function LoadingState({ locale }: { locale: Locale }) {
  return (
    <main className="loading-state" role="status" aria-live="polite" aria-busy="true">
      <span className="eyebrow">{locale === "id" ? "MEMUAT HALAMAN" : "LOADING PAGE"}</span>
      <span className="loading-state__line loading-state__line--wide" />
      <span className="loading-state__line" />
      <span className="loading-state__line loading-state__line--short" />
      <span className="visually-hidden">{locale === "id" ? "Harap tunggu" : "Please wait"}</span>
    </main>
  );
}
