"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LanyardWithControls from "@/components/lanyard-with-controls";
import { decryptLanyardData, type LanyardData } from "@/lib/utils";

function LanyardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const lanyardData = useMemo((): LanyardData | null => {
    const encrypted = searchParams.get("u");
    if (encrypted) {
      return decryptLanyardData(encrypted);
    }
    return null;
  }, [searchParams]);

  useEffect(() => {
    if (lanyardData === null) {
      router.replace("/");
    }
  }, [lanyardData, router]);

  if (lanyardData === null) {
    return (
      <main className="relative flex min-h-dvh flex-col items-center justify-center">
        <div className="flex h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <LanyardWithControls
          position={[0, 0, 18]}
          containerClassName="relative aspect-square w-full h-screen"
          defaultName={lanyardData.username}
          defaultVariant={lanyardData.variant}
        />
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="relative flex min-h-dvh flex-col items-center justify-center">
          <div className="flex h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </main>
      }
    >
      <LanyardContent />
    </Suspense>
  );
}
