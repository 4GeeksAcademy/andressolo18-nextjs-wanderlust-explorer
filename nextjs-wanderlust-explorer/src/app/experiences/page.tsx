import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { experiences } from "@/lib/experiences";
import ExperienceExplorer from "@/components/experience-explorer";

export const metadata: Metadata = {
  title: "Explorar experiencias | Wanderlust Explorer",
  description:
    "Explora 100 experiencias de aventura, naturaleza, cultura, gastronomía y bienestar alrededor del mundo.",
};

export default function ExperiencesPage() {
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
            href="/favorites"
            className="rounded-sm text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            Favoritos
          </Link>
          <Link
            href="/"
            className="rounded-sm text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            Volver al inicio
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 sm:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#426b21]">
            Sigue tu curiosidad
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explora experiencias
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#536354]">
            Encuentra tu próxima aventura entre montañas, ciudades y sabores
            de todo el mundo.
          </p>
        </div>
        <Suspense fallback={<p role="status">Cargando experiencias…</p>}>
          <ExperienceExplorer experiences={experiences} />
        </Suspense>
      </main>
      <footer className="border-t border-[#203629]/10 px-6 py-5 text-center text-sm text-[#536354]">
        Wanderlust Explorer · El mundo se vive paso a paso.
      </footer>
    </div>
  );
}
