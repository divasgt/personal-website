"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const cycle = ["system", "light", "dark"];

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the UI after mounting. Without this it will show system first and then the actual theme.
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleClick = () => {
    const current = theme ?? "system";
    const idx = cycle.indexOf(current);
    setTheme(cycle[(idx + 1) % cycle.length]);
  };

  return (
    <div className="group relative">
      <button
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-center p-1 opacity-70 transition-opacity duration-100 hover:opacity-100"
        aria-label="Theme toggle button."
      >
        {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full mb-1 right-0.75 text-xs opacity-0 transition-opacity duration-100 group-hover:opacity-100 text-tertiary tracking-wide">
        {theme || "system"}
      </span>
    </div>
  );
}
