import type { Metadata } from "next";
import FavoritesList from "@/components/favorites-list";

export const metadata: Metadata = {
  title: "Mis favoritos | Wanderlust Explorer",
  description: "Encuentra las experiencias que has guardado como favoritas.",
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-1 flex-col bg-[#f7f8f2] font-sans text-[#203629]">
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 sm:px-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
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
