import { requirePermission } from "@/lib/auth/session";

export default async function AdminDashboardPage() {
  const principal = await requirePermission("dashboard.read");

  return (
    <div className="admin-dashboard">
      <div className="admin-page-heading">
        <div>
          <p className="eyebrow">CMS / RINGKASAN</p>
          <h1>Selamat datang, {principal.fullName}</h1>
          <p>Fondasi ruang kerja sudah tersedia. Modul konten akan dibuka setelah alur editorial dan basis data siap digunakan.</p>
        </div>
        <span className="admin-preview-badge"><i aria-hidden="true" />TAHAP PERSIAPAN</span>
      </div>

      <section className="admin-empty-panel" aria-labelledby="admin-empty-title">
        <span className="admin-empty-panel__symbol" aria-hidden="true">P</span>
        <p className="eyebrow">RUANG KERJA KONTEN</p>
        <h2 id="admin-empty-title">Belum ada konten CMS</h2>
        <p>Tidak ada angka demo atau konten perusahaan rekaan di dashboard ini. Modul akan tersedia setelah alur editorial diaktifkan.</p>
      </section>

      <div className="admin-dashboard__note">
        <span aria-hidden="true">i</span>
        <p>Informasi perusahaan yang belum diverifikasi tetap tidak dipublikasikan.</p>
      </div>
    </div>
  );
}
