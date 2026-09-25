import Link from "next/link";
import { siteConfig } from "@/lib/site-content";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>Halaman tidak ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak tersedia atau alamatnya telah berubah.</p>
      <Link className="button button--primary" href="/">Kembali ke Beranda <span aria-hidden="true">→</span></Link>
      <span className="not-found-page__company">{siteConfig.companyName}</span>
    </main>
  );
}
