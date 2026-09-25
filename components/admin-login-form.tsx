"use client";

import { useActionState } from "react";
import { signIn } from "@/lib/auth/actions";
import type { Locale } from "@/lib/site-content";

export function AdminLoginForm({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";
  const [state, formAction, pending] = useActionState(signIn, { message: null });

  return (
    <form className="admin-login-form" action={formAction}>
      <input type="hidden" name="locale" value={locale} />
      <label htmlFor="admin-email">{isEnglish ? "Work email" : "Email kerja"}</label>
      <input
        id="admin-email"
        name="email"
        type="email"
        autoComplete="username"
        maxLength={254}
        required
      />
      <label htmlFor="admin-password">{isEnglish ? "Password" : "Kata sandi"}</label>
      <input
        id="admin-password"
        name="password"
        type="password"
        autoComplete="current-password"
        maxLength={128}
        required
      />
      {state.message && (
        <p className="admin-login-form__error" role="alert" aria-live="assertive">
          {state.message}
        </p>
      )}
      <button className="button button--primary admin-login-form__submit" type="submit" disabled={pending}>
        {pending ? (isEnglish ? "Signing in…" : "Memverifikasi…") : (isEnglish ? "Sign in" : "Masuk")}
        <span aria-hidden="true">→</span>
      </button>
      <p className="admin-login-form__help">
        {isEnglish
          ? "Admin access is provisioned by the system owner."
          : "Akses admin diberikan oleh pengelola sistem."}
      </p>
    </form>
  );
}
