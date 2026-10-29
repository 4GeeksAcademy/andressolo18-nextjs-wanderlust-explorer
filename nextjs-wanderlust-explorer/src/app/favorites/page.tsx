import type { Metadata } from "next";
import Link from "next/link";
import FavoritesList from "@/components/favorites-list";

export const metadata: Metadata = {
  title: "Mis favoritos | Wanderlust Explorer",
  description: "Encuentra las experiencias que has guardado como favoritas.",
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-1 flex-col bg-[#f7f8f2] font-sans text-[#203629]">
      <header className="border-b border-[#203629]/10 bg-white">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10"
        >
          <Link
            href="/"
            className="rounded-sm text-xl font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21] sm:text-2xl"
          >
            wanderlust<span className="text-[#63863d]">.</span>
          </Link>
          <Link
            href="/profile"
            className="rounded-sm text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            Mi perfil
          </Link>
          <Link
            href="/experiences"
            className="rounded-sm text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            Explorar experiencias
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 sm:px-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Mis favoritos
        </h1>
        <p className="mt-4 mb-10 text-lg leading-relaxed text-[#536354]">
          Tus próximas aventuras, guardadas en este navegador para volver a ellas.
        </p>
        <FavoritesList />
      </main>
      <footer className="border-t border-[#203629]/10 px-6 py-5 text-center text-sm text-[#536354]">
        Wanderlust Explorer · El mundo se vive paso a paso.
      </footer>
    </div>
  );
}
