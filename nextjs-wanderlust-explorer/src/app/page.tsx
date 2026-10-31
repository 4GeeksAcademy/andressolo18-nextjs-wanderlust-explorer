import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#f7f8f2] font-sans text-[#203629]">

      <main className="flex flex-1 flex-col">
        <section
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-[#203629] text-white"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(14, 33, 25, 0.88), rgba(14, 33, 25, 0.42)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85')",
            }}
          />
          <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d3e6b3]">
              Menos rutina. Más mundo.
            </p>
            <h1
              id="hero-title"
              className="max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Tu próxima aventura empieza aquí.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Descubre senderos, sabores y lugares que dejan huella.
              Encuentra experiencias únicas y vuelve a conectar con lo que
              te mueve.
            </p>
            <Link
              href="/experiences"
              className="mt-10 inline-flex min-h-14 items-center justify-center gap-4 rounded-lg bg-[#c4df8c] px-7 py-4 text-base font-bold text-[#203629] shadow-lg transition-colors hover:bg-[#d3e9a6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explorar experiencias
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5"
              >
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="discovery-title"
          className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 sm:px-10 md:grid-cols-2 md:items-center md:py-12"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#426b21]">
              Sigue tu curiosidad
            </p>
            <h2 id="discovery-title" className="text-2xl font-bold tracking-tight">
              Hay muchas formas de explorar.
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed text-[#536354]">
            Una caminata entre montañas, una receta compartida o un momento
            de calma al aire libre. Tu siguiente descubrimiento está más cerca
            de lo que imaginas.
          </p>
        </section>
      </main>
      <footer className="border-t border-[#203629]/10 px-6 py-5 text-center text-sm text-[#536354]">
        Wanderlust Explorer · El mundo se vive paso a paso.
      </footer>
    </div>
  );
}
