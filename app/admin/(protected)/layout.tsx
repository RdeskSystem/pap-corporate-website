import { AdminShell } from "@/components/admin-shell";
import { getAdminPrincipal } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProtectedAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const principal = await getAdminPrincipal();
  if (!principal) redirect("/admin/login");
  return <AdminShell principal={principal}>{children}</AdminShell>;
}
