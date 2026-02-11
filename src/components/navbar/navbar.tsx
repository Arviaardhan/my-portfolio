"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion"; // Pastikan framer-motion terinstal

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-primary inline-block" />
            MPA
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-body text-sm tracking-wide transition-colors relative",
                pathname === href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}

          {/* Theme Toggle yang Simpel & Smooth */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-black hover:text-black hover:bg-muted transition-all"
            aria-label="Toggle theme"
          >
            {/* Logika ikon sederhana khas Bricks */}
            {theme === "dark" ? (
              <Sun size={18} className="text-brick-amber" />
            ) : (
              <Moon size={18} className="text-accent" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}