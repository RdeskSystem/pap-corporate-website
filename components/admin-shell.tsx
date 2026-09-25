import Image from "next/image";
import Link from "next/link";
import { signOut } from "@/lib/auth/actions";
import type { AdminPrincipal } from "@/lib/auth/session";
import { siteConfig } from "@/lib/site-content";

const pendingModules = [
  "Halaman", "Layanan", "Industri", "Operasional", "Kepatuhan", "Karier",
  "Berita", "Media", "Pesan Kontak", "Pengaturan", "Pengguna & Peran", "Audit Log",
];

export function AdminShell({
  principal,
  children,
}: {
  principal: AdminPrincipal;
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell" lang="id">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin" aria-label={`${siteConfig.companyName} CMS`}>
          <Image src={siteConfig.logoPath} width={44} height={44} alt="" />
          <span><strong>PAP CMS</strong><small>{siteConfig.companyName}</small></span>
        </Link>
        <nav className="admin-nav" aria-label="Navigasi admin">
          <p className="admin-nav__label">WORKSPACE</p>
          <Link className="admin-nav__item is-active" href="/admin" aria-current="page">
            <span className="admin-nav__icon" aria-hidden="true">◫</span>Ringkasan
          </Link>
          <p className="admin-nav__label admin-nav__label--spaced">MODUL</p>
          {pendingModules.map((module) => (
            <span className="admin-nav__item is-disabled" key={module} aria-disabled="true">
              <span className="admin-nav__icon" aria-hidden="true">·</span>{module}<small>Segera</small>
            </span>
          ))}
        </nav>
        <div className="admin-sidebar__bottom">
          <Link href="/" target="_blank" rel="noreferrer">Lihat situs publik <span aria-hidden="true">↗</span></Link>
          <span>Konten publikasi tetap menunggu verifikasi.</span>
        </div>
      </aside>

      <div className="admin-workspace">
        <header className="admin-topbar">
          <div>
            <span className="admin-topbar__eyebrow">PAP / CMS</span>
            <strong>Ruang kerja konten</strong>
          </div>
          <div className="admin-user">
            <div className="admin-user__details"><strong>{principal.fullName}</strong><span>{principal.email}</span></div>
            <span className="admin-user__roles">{principal.roleKeys.join(" · ") || "Tanpa peran"}</span>
            <form action={signOut}><button className="admin-signout" type="submit">Keluar</button></form>
          </div>
        </header>
        <main className="admin-main">{children}</main>
      </div>
    </div>
  );
}
