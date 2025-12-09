"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Scrollspy (active section highlight)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of navItems) {
        const sec = document.getElementById(item.id);
        if (!sec) continue;

        const rect = sec.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.25) {
          current = item.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
          pointer-events-auto
          w-full max-w-6xl
          flex items-center justify-between
          px-6 md:px-10
          py-4
          mt-6
          rounded-full
          border border-white/20 
          bg-white/10 
          backdrop-blur-xl
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          transition-all
        "
      >
        {/* Left Logo */}
        <button
          onClick={() => handleScrollTo("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/40 text-sm font-bold text-white">
            RS
          </div>
          <span className="font-medium tracking-wide text-base text-white">
            Raj Sharma
          </span>
        </button>

        {/* Right Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs md:text-sm uppercase tracking-[0.25em]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`
                  relative 
                  transition-colors
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                `}
              >
                {item.label}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[1px] bg-white transition-all
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-5 text-[12px] uppercase tracking-[0.2em]">
          {["Home", "Projects", "Contact"].map((label) => {
            const id = label.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleScrollTo(id)}
                className={`${isActive ? "text-white" : "text-gray-300"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
}
