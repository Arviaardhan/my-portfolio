"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Home, Briefcase, User, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/experience", label: "Experience", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* DESKTOP NAVBAR (Tetap di atas) */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-lg tracking-tight text-foreground group">
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-primary group-hover:rotate-45 transition-transform duration-300" />
              LyArt
            </span>
          </Link>

          <div className="flex items-center gap-8 bg-secondary/50 p-1.5 px-4 rounded-full border border-border/50">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-body text-sm tracking-wide transition-colors relative px-2 py-1",
                  pathname === href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
                {pathname === href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-background rounded-md shadow-sm -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            <div className="w-px h-4 bg-border mx-1" />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-full text-foreground hover:bg-background transition-all"
            >
              {theme === "dark" ? <Sun size={16} className="text-brick-amber" /> : <Moon size={16} className="text-accent" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVBAR (Hanya muncul di mobile) */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden px-6">
        <div className="bg-background/80 backdrop-blur-2xl border border-border/50 shadow-2xl rounded-2xl flex items-center justify-around w-full max-w-md p-2 relative">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 flex-1 py-2 relative transition-all duration-300",
                  isActive ? "text-primary scale-110" : "text-muted-foreground"
                )}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium font-display uppercase tracking-wider">
                  {label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute -top-2 w-8 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Theme Toggle Mobile */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex flex-col items-center justify-center flex-1 py-2 text-muted-foreground"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span className="text-[10px] font-medium uppercase tracking-wider">Mode</span>
          </button>
        </div>
      </nav>
    </>
  );
}