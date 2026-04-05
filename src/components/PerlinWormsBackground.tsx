"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// ─── tuneable constants ────────────────────────────────────────────────────────
const WORM_COUNT = 12;
const SPEED = 0.7; // px per frame at 60 fps — slow, calm drift
const LINE_WIDTH = 1.5;
const FADE = 0.04; // opacity removed from old trails each frame
const NOISE_SCALE = 0.0022; // spatial frequency of the flow field
const TIME_SCALE = 0.002; // how slowly the field evolves over time

// Background colours matching Tailwind's neutral-900 / neutral-100
const DARK_BG = "rgba(23,23,23,";
const LIGHT_BG = "rgba(245,245,245,";
const DARK_FG = "rgba(255,255,255,0.22)";
const LIGHT_FG = "rgba(0,0,0,0.15)";

// ─── flow-field angle using multi-octave sin/cos ──────────────────────────────
// Produces smooth, continuously-turning directions that look just like a
// Perlin noise field without any external library.
function fieldAngle(x: number, y: number, t: number): number {
  return (
    Math.sin(x * NOISE_SCALE + t * 0.6) * Math.PI * 2 +
    Math.cos(y * NOISE_SCALE * 1.4 + t * 0.35) * Math.PI * 1.5 +
    Math.sin((x - y) * NOISE_SCALE * 0.65 + t * 0.45) * Math.PI
  );
}

type Worm = { x: number; y: number };

export default function PerlinWormsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  // Keep theme ref in sync — animation loop reads this so it never needs restart.
  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let worms: Worm[] = [];
    let frameId = 0;
    let t = 0;

    const spawn = (): Worm => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    });

    const solidBg = () =>
      themeRef.current === "dark" ? "#171717" : "#f5f5f5";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Initialise to solid background to avoid transparent-canvas flicker.
      ctx.fillStyle = solidBg();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      worms = Array.from({ length: WORM_COUNT }, spawn);
    };

    resize();
    window.addEventListener("resize", resize);

    const loop = () => {
      frameId = requestAnimationFrame(loop);
      t += TIME_SCALE;

      const isDark = themeRef.current === "dark";

      // Gently dissolve old trails toward the background colour.
      ctx.fillStyle = `${isDark ? DARK_BG : LIGHT_BG}${FADE})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each worm's next step.
      ctx.lineWidth = LINE_WIDTH;
      ctx.lineCap = "round";
      ctx.strokeStyle = isDark ? DARK_FG : LIGHT_FG;

      for (const worm of worms) {
        const angle = fieldAngle(worm.x, worm.y, t);
        const nx = worm.x + Math.cos(angle) * SPEED;
        const ny = worm.y + Math.sin(angle) * SPEED;

        ctx.beginPath();
        ctx.moveTo(worm.x, worm.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        worm.x = nx;
        worm.y = ny;

        // Respawn anywhere on the canvas when a worm drifts off screen.
        if (
          worm.x < -60 ||
          worm.x > canvas.width + 60 ||
          worm.y < -60 ||
          worm.y > canvas.height + 60
        ) {
          Object.assign(worm, spawn());
        }
      }
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
