"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  [key: string]: any; // Untuk props tambahan lainnya
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className, activeClassName, exact = false, ...props }, ref) => {
    const pathname = usePathname();
    
    // Logika menentukan apakah link sedang aktif
    const isActive = exact 
      ? pathname === href 
      : pathname.startsWith(href) && (href === '/' ? pathname === '/' : true);

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };