import type { Metadata } from "next";
import Link from "next/link";
import FavoritesCount from "@/components/favorites-count";

export const metadata: Metadata = {
  title: "Mi perfil | Wanderlust Explorer",
  description: "Tu perfil de demostración y tus experiencias favoritas guardadas.",
};

const demoUser = {
  name: "Alex Explorador",
  initials: "AE",
  email: "alex@example.com",
  bio: "Siempre buscando nuevos senderos, sabores locales y aventuras para recordar.",
};

export default function ProfilePage() {
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
            href="/experiences"
            className="rounded-sm text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            Explorar experiencias
          </Link>
          <Link
            href="/favorites"
            className="rounded-sm text-sm font-semibold text-[#426b21] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            Favoritos
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 sm:px-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Mi perfil</h1>
        <p className="mt-4 mb-10 text-lg text-[#536354]">
          Un espacio para tus próximas aventuras.
        </p>
        <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
          <section
            aria-labelledby="user-name"
            className="rounded-2xl border border-[#203629]/10 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-5">
              <div
                aria-hidden="true"
                className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#e6ebdf] text-2xl font-bold text-[#426b21]"
              >
                {demoUser.initials}
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-[#426b21]">
                  Perfil de demostración
                </p>
                <h2 id="user-name" className="text-2xl font-bold">{demoUser.name}</h2>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-[#536354]">{demoUser.bio}</p>
            <dl className="mt-6 border-t border-[#203629]/10 pt-5">
              <dt className="text-sm text-[#536354]">Correo electrónico simulado</dt>
              <dd className="mt-1 break-all font-semibold">{demoUser.email}</dd>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-[#536354]">
              Este usuario es ficticio y no requiere iniciar sesión. Tus favoritos
              se guardan únicamente en este navegador, no en una cuenta.
            </p>
          </section>
          <section
            aria-labelledby="favorites-title"
            className="rounded-2xl border border-[#203629]/10 bg-white p-6 sm:p-8"
          >
            <h2 id="favorites-title" className="mb-6 text-xl font-bold">
              Tus favoritos
            </h2>
            <FavoritesCount />
            <Link
              href="/favorites"
              className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-[#426b21] px-6 py-3 font-semibold text-white hover:bg-[#34551a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
            >
              Ver mis favoritos
            </Link>
          </section>
        </div>
      </main>
      <footer className="border-t border-[#203629]/10 px-6 py-5 text-center text-sm text-[#536354]">
        Wanderlust Explorer · El mundo se vive paso a paso.
      </footer>
    </div>
  );
}
