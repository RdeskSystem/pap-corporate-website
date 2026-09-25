"use client";

import { ErrorPage } from "@/components/error-page";

export default function IndonesianError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorPage locale="id" reset={reset} />;
}
