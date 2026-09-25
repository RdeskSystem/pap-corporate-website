import Link from "next/link";

export default function AdminForbiddenPage() {
  return (
    <section className="admin-forbidden">
      <p className="eyebrow">403 · AKSES DIBATASI</p>
      <h1>Izin belum tersedia</h1>
      <p>Akun Anda tidak memiliki izin untuk membuka bagian ini.</p>
      <Link className="button button--primary" href="/admin">Kembali ke ringkasan <span aria-hidden="true">→</span></Link>
    </section>
  );
}
