import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin-login-form";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Masuk ke CMS",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="admin-auth-page">
      <section className="admin-auth-panel" aria-labelledby="admin-login-title">
        <Link className="admin-auth-brand" href="/">
          <Image src={siteConfig.logoPath} width={46} height={46} alt="" />
          <span>{siteConfig.companyName}</span>
        </Link>
        <p className="eyebrow">CONTENT MANAGEMENT</p>
        <h1 id="admin-login-title">Masuk ke CMS</h1>
        <p className="admin-auth-panel__intro">Gunakan akun yang telah diberikan oleh pengelola sistem untuk melanjutkan.</p>
        <AdminLoginForm locale="id" />
        <Link className="admin-auth-panel__back" href="/">← Kembali ke situs publik</Link>
      </section>
      <aside className="admin-auth-art" aria-hidden="true">
        <div className="admin-auth-art__rings" />
        <div className="admin-auth-art__mark">PAP<span> / CONTENT WORKSPACE</span></div>
        <div className="admin-auth-art__caption">
          <span>01 — EDITORIAL</span>
          <strong>Informasi yang jelas, dikelola dengan tanggung jawab.</strong>
        </div>
      </aside>
    </main>
  );
}
