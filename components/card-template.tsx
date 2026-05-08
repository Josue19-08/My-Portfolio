"use client";

import { forwardRef, useImperativeHandle } from "react";

export type CardVariant = "dark" | "light";

interface CardTemplateProps {
  userName: string;
  variant: CardVariant;
  onTextureReady: (dataUrl: string) => void;
  city?: string;
  date?: string;
}

export interface CardTemplateRef {
  captureTexture: () => Promise<void>;
  exportCard: () => void;
}

const CANVAS_SIZE = 1376;
// Front face of the badge occupies the left half of the texture
const FACE_W = CANVAS_SIZE / 2; // 688
const CX = FACE_W / 2;          // 344 — horizontal center of front face

const CIRCLE_X = 0.93;

async function drawCardFace(
  ctx: CanvasRenderingContext2D,
  userName: string,
  variant: CardVariant,
  city?: string
) {
  const isDark = variant === "dark";

  // ── Full canvas background ──────────────────────────────────────────────
  ctx.fillStyle = isDark ? "#050505" : "#f5f5f5";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // ── Card face background (left half) ───────────────────────────────────
  const faceGrad = ctx.createLinearGradient(0, 0, 0, CANVAS_SIZE);
  if (isDark) {
    faceGrad.addColorStop(0, "#0d0d0d");
    faceGrad.addColorStop(1, "#111111");
  } else {
    faceGrad.addColorStop(0, "#ffffff");
    faceGrad.addColorStop(1, "#f0f0f0");
  }
  ctx.fillStyle = faceGrad;
  ctx.fillRect(0, 0, FACE_W, CANVAS_SIZE);

  // ── Top accent bar ──────────────────────────────────────────────────────
  const topBar = ctx.createLinearGradient(0, 0, FACE_W, 0);
  topBar.addColorStop(0,   "rgba(139,92,246,0)");
  topBar.addColorStop(0.3, "rgba(139,92,246,0.9)");
  topBar.addColorStop(0.7, "rgba(59,130,246,0.9)");
  topBar.addColorStop(1,   "rgba(59,130,246,0)");
  ctx.fillStyle = topBar;
  ctx.fillRect(0, 0, FACE_W, 8);

  // ── Logo / monogram ─────────────────────────────────────────────────────
  const logoY = 170;
  const logoR = 80;

  try {
    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.src = "/images/logo.png";
    await new Promise<void>((resolve) => {
      logo.onload = () => resolve();
      logo.onerror = () => resolve();
    });
    if (logo.naturalWidth > 0) {
      const lrx = logoR * CIRCLE_X;
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(CX, logoY, lrx, logoR, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(logo, CX - lrx, logoY - logoR, lrx * 2, logoR * 2);
      ctx.restore();
    } else {
      throw new Error("logo not loaded");
    }
  } catch {
    const lrx = logoR * CIRCLE_X;
    ctx.beginPath();
    ctx.ellipse(CX, logoY, lrx, logoR, 0, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
    ctx.fill();
    ctx.strokeStyle = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = isDark ? "#ffffff" : "#111111";
    ctx.font = "bold 72px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("JA", CX, logoY);
  }

  // Logo ring
  const lringX = (logoR + 4) * CIRCLE_X;
  ctx.beginPath();
  ctx.ellipse(CX, logoY, lringX, logoR + 4, 0, 0, Math.PI * 2);
  ctx.strokeStyle = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // ── Separator ───────────────────────────────────────────────────────────
  const sep1Y = 290;
  ctx.strokeStyle = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, sep1Y);
  ctx.lineTo(FACE_W - 100, sep1Y);
  ctx.stroke();

  // ── Profile photo ────────────────────────────────────────────────────────
  const photoR = 190;
  const photoCY = 560;

  try {
    const photo = new Image();
    photo.crossOrigin = "anonymous";
    photo.src = "/images/josue.jpeg";
    await new Promise<void>((resolve) => {
      photo.onload = () => resolve();
      photo.onerror = () => resolve();
    });

    if (photo.naturalWidth > 0) {
      const prx = photoR * CIRCLE_X;
      const nw = photo.naturalWidth;
      const nh = photo.naturalHeight;
      const side = Math.min(nw, nh);
      const sx = (nw - side) / 2;
      const sy = 0; // face is near the top

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(CX, photoCY, prx, photoR, 0, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(
        photo,
        sx, sy, side, side,
        CX - prx, photoCY - photoR, prx * 2, photoR * 2
      );
      ctx.restore();
    }
  } catch {
    const prx = photoR * CIRCLE_X;
    ctx.beginPath();
    ctx.ellipse(CX, photoCY, prx, photoR, 0, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? "#1a1a2e" : "#e0e0e0";
    ctx.fill();
  }

  // Photo border
  const pbrx = (photoR + 5) * CIRCLE_X;
  ctx.beginPath();
  ctx.ellipse(CX, photoCY, pbrx, photoR + 5, 0, 0, Math.PI * 2);
  ctx.strokeStyle = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)";
  ctx.lineWidth = 5;
  ctx.stroke();

  // Outer glow ring
  const pgrx = (photoR + 18) * CIRCLE_X;
  ctx.beginPath();
  ctx.ellipse(CX, photoCY, pgrx, photoR + 18, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(139,92,246,0.35)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // ── Name ─────────────────────────────────────────────────────────────────
  const name = userName || "JOSUÉ ARAYA";
  ctx.fillStyle = isDark ? "#ffffff" : "#0a0a0a";
  ctx.font = "bold 58px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name.toUpperCase(), CX, 820);

  // ── Role / city ───────────────────────────────────────────────────────────
  const role = city || "FULLSTACK DEVELOPER";
  ctx.fillStyle = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";
  ctx.font = "38px system-ui, sans-serif";
  ctx.fillText(role.toUpperCase(), CX, 900);

  // ── Bottom separator ──────────────────────────────────────────────────────
  const sep2Y = 970;
  ctx.strokeStyle = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, sep2Y);
  ctx.lineTo(FACE_W - 100, sep2Y);
  ctx.stroke();

  // ── Bottom label ──────────────────────────────────────────────────────────
  ctx.fillStyle = isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)";
  ctx.font = "28px system-ui, sans-serif";
  ctx.fillText("josue.dev", CX, 1020);

  // ── Bottom accent bar ─────────────────────────────────────────────────────
  const botBar = ctx.createLinearGradient(0, 0, FACE_W, 0);
  botBar.addColorStop(0,   "rgba(139,92,246,0)");
  botBar.addColorStop(0.3, "rgba(139,92,246,0.9)");
  botBar.addColorStop(0.7, "rgba(59,130,246,0.9)");
  botBar.addColorStop(1,   "rgba(59,130,246,0)");
  ctx.fillStyle = botBar;
  ctx.fillRect(0, CANVAS_SIZE - 8, FACE_W, 8);
}

const CardTemplate = forwardRef<CardTemplateRef, CardTemplateProps>(
  ({ userName, variant, onTextureReady, city }, ref) => {

    const captureTexture = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      await drawCardFace(ctx, userName, variant, city);
      onTextureReady(canvas.toDataURL("image/png"));
    };

    const exportCard = () => {
      const CROP_BOTTOM = 334;
      const EXPORT_H = CANVAS_SIZE - CROP_BOTTOM;

      const full = document.createElement("canvas");
      full.width = CANVAS_SIZE;
      full.height = CANVAS_SIZE;
      const fullCtx = full.getContext("2d");
      if (!fullCtx) return;

      drawCardFace(fullCtx, userName, variant, city).then(() => {
        const exp = document.createElement("canvas");
        exp.width = CANVAS_SIZE;
        exp.height = EXPORT_H;
        const expCtx = exp.getContext("2d");
        if (!expCtx) return;
        expCtx.drawImage(full, 0, 0, CANVAS_SIZE, EXPORT_H, 0, 0, CANVAS_SIZE, EXPORT_H);
        const link = document.createElement("a");
        link.download = `josue-araya-card.png`;
        link.href = exp.toDataURL("image/png", 1.0);
        link.click();
      });
    };

    useImperativeHandle(ref, () => ({ captureTexture, exportCard }));

    return null;
  }
);

CardTemplate.displayName = "CardTemplate";
export default CardTemplate;
