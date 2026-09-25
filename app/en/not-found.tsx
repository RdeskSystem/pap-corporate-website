import Link from "next/link";
import { siteConfig } from "@/lib/site-content";

export default function EnglishNotFound() {
  return (
    <main className="not-found-page" lang="en">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>This page could not be found</h1>
      <p>The page may have moved or the address may be incorrect.</p>
      <Link className="button button--primary" href="/en">
        Back to Home <span aria-hidden="true">→</span>
      </Link>
      <span className="not-found-page__company">{siteConfig.companyName}</span>
    </main>
  );
}
