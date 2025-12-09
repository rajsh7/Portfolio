"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        px-4 py-2 rounded-full
        border border-white/20
        bg-white/10 dark:bg-black/20
        hover:bg-white/20 dark:hover:bg-black/30
        text-xs uppercase tracking-[0.25em]
      "
    >
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  );
}
