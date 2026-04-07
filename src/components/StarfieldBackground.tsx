"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// ─── tuneable constants ────────────────────────────────────────────────────────
const STAR_DENSITY = 12000; // one star per N viewport pixels
const SHOOT_MIN_MS = 8000; // min ms between shooting stars
const SHOOT_MAX_MS = 20000; // max ms between shooting stars
const MAX_SHOOTS = 2; // max simultaneous shooting stars

const DARK_BG = "#050505";
const LIGHT_BG = "#f5f5f5"; // Tailwind neutral-100

interface Star {
  x: number;
  y: number;
  r: number; // radius px
  baseAlpha: number; // resting opacity
  phase: number; // twinkle phase (radians)
  freq: number; // twinkle speed (rad/frame)
}

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
  speed: number;
  trailLen: number;
  life: number; // frames elapsed
  maxLife: number; // total lifespan in frames
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  // Keep theme ref current so the loop never needs to restart on toggle.
  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let shoots: ShootingStar[] = [];
    let frameId = 0;
    let frame = 0;
    let nextShootAt = 0; // timestamp (ms)

    // ── build star field ────────────────────────────────────────────────────
    const buildStars = () => {
      const count = Math.max(
        80,
        Math.floor((canvas.width * canvas.height) / STAR_DENSITY),
      );
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Power distribution biases toward smaller stars (more realistic)
        r: 0.2 + Math.pow(Math.random(), 1.8) * 1.6,
        baseAlpha: 0.3 + Math.random() * 0.65,
        phase: Math.random() * Math.PI * 2,
        freq: 0.005 + Math.random() * 0.025,
      }));
    };

    // ── spawn a single shooting star ────────────────────────────────────────
    const spawnShoot = (): ShootingStar => {
      const fromTop = Math.random() > 0.5;
      const x = fromTop
        ? Math.random() * canvas.width * 1.5
        : canvas.width + 30;
      const y = fromTop ? -10 : Math.random() * canvas.height * 0.5;
      return {
        x,
        y,
        // Diagonal, towards bottom-left
        angle: Math.PI * 0.7 + Math.random() * Math.PI * 0.1,
        speed: 4 + Math.random() * 3,
        trailLen: 40 + Math.random() * 60,
        life: 0,
        maxLife: 100 + Math.floor(Math.random() * 80),
      };
    };

    // ── resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildStars();
    };

    resize();
    window.addEventListener("resize", resize);

    // ── main loop ───────────────────────────────────────────────────────────
    const loop = (ts: number) => {
      frameId = requestAnimationFrame(loop);
      frame++;

      const isDark = themeRef.current === "dark";

      // Fill background (opaque, erases previous frame cleanly)
      ctx.fillStyle = isDark ? DARK_BG : LIGHT_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!isDark) return; // no stars in light mode

      // ── draw stars ────────────────────────────────────────────────────────
      for (const s of stars) {
        // Drift slowly top-right based on size (parallax)
        s.x += 0.02 + s.r * 0.05;
        s.y -= 0.02 + s.r * 0.05;

        // Wrap around
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;

        const alpha =
          s.baseAlpha * (0.8 + 0.2 * Math.sin(frame * s.freq + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.fill();
      }

      // ── schedule shooting stars ───────────────────────────────────────────
      if (shoots.length < MAX_SHOOTS && ts >= nextShootAt) {
        shoots.push(spawnShoot());
        nextShootAt =
          ts + SHOOT_MIN_MS + Math.random() * (SHOOT_MAX_MS - SHOOT_MIN_MS);
      }

      // ── draw shooting stars ───────────────────────────────────────────────
      for (const sh of shoots) {
        sh.life++;
        const progress = sh.life / sh.maxLife;

        // Envelope: fade in over first 20%, full brightness until 60%, fade out
        const opacity =
          progress < 0.2
            ? progress / 0.2
            : progress > 0.6
              ? 1 - (progress - 0.6) / 0.4
              : 1;

        const hx = sh.x;
        const hy = sh.y;
        const tx = hx - Math.cos(sh.angle) * sh.trailLen;
        const ty = hy - Math.sin(sh.angle) * sh.trailLen;

        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(
          0.5,
          `rgba(200,225,255,${(opacity * 0.25).toFixed(3)})`,
        );
        grad.addColorStop(1, `rgba(255,255,255,${(opacity * 0.9).toFixed(3)})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();

        sh.x += Math.cos(sh.angle) * sh.speed;
        sh.y += Math.sin(sh.angle) * sh.speed;
      }

      // Cull finished or off-screen shooting stars (accounting for bottom-left direction)
      shoots = shoots.filter(
        (sh) =>
          sh.life < sh.maxLife && sh.x > -200 && sh.y < canvas.height + 200,
      );
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
