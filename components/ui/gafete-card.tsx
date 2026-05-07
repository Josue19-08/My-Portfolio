"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Lanyard from "@/components/ui/lanyard";
import CardTemplate, { type CardTemplateRef } from "@/components/card-template";

export function GafeteCard({ name = "Josué Araya" }: { name?: string }) {
  const [cardTextureUrl, setCardTextureUrl] = useState<string | undefined>(undefined);
  const [textureKey, setTextureKey] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardTemplateRef = useRef<CardTemplateRef>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (cardTemplateRef.current) {
        await cardTemplateRef.current.captureTexture();
      }
      setIsInitialized(true);
    }, 150);
    return () => clearTimeout(timer);
  }, [name]);

  const handleTextureReady = useCallback((dataUrl: string) => {
    setCardTextureUrl(dataUrl);
    setTextureKey((prev) => prev + 1);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none md:pointer-events-auto">
      <div className="opacity-0 absolute pointer-events-none">
        <CardTemplate
          ref={cardTemplateRef}
          userName={name}
          variant="dark"
          onTextureReady={handleTextureReady}
          city="Software Developer Fullstack"
          date=""
        />
      </div>

      {!isInitialized ? (
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        </div>
      ) : (
        <Lanyard
          key={textureKey}
          position={[0, 0, 16]}
          gravity={[0, -40, 0]}
          containerClassName="w-full h-full"
          cardTextureUrl={cardTextureUrl}
        />
      )}
    </div>
  );
}
