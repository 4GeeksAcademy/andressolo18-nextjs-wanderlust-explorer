"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/profile", label: "Mi perfil" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/experiences", label: "Experiencias" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#203629]/10 bg-white font-sans text-[#203629]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:px-10 sm:py-5">
        <Link
          href="/"
          aria-label="Wanderlust Explorer, inicio"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21] aria-[current=page]:text-[#426b21]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 40 40"
            fill="none"
            className="size-8 shrink-0 text-[#426b21] sm:size-10"
          >
            <path
              d="M3 32 16 9l8 14 5-8 9 17H3Z"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="m11 18 5 4 5-4" stroke="currentColor" strokeWidth="3" />
          </svg>
          <span className="text-xl font-bold tracking-tight sm:text-2xl">
            wanderlust<span className="text-[#63863d]">.</span>
          </span>
        </Link>
        <nav aria-label="Navegación principal" className="flex w-full flex-wrap gap-x-2 gap-y-1 sm:w-auto sm:justify-end sm:gap-4">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? (pathname === href ? "page" : "location") : undefined}
                className={`inline-flex min-h-11 items-center rounded-sm px-2 text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21] ${
                  isActive ? "bg-[#edf3e3] underline decoration-2" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
