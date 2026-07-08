"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, Close } from "./Icons";
import { nav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container-tcp flex h-16 items-center justify-between">
        <Logo dark />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-brand"
                    : "text-navy-800 hover:text-brand"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/contact/" className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex">
            Hire Me
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-800 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-tcp flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-2 py-3 text-sm font-semibold uppercase tracking-wide ${
                    isActive(item.href)
                      ? "bg-brand/10 text-brand"
                      : "text-navy-800 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-2 pt-2">
              <Link href="/contact/" className="btn-primary w-full">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
