"use client";

import { ErrorPage } from "@/components/error-page";

export default function EnglishError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorPage locale="en" reset={reset} />;
}
