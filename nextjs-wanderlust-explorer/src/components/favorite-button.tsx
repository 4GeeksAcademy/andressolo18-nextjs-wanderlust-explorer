"use client";

import type { FavoritesState } from "@/lib/use-favorites";
import type { Experience } from "@/lib/experiences";

export default function FavoriteButton({
  experience,
  favorites,
}: {
  experience: Pick<Experience, "id" | "title">;
  favorites: FavoritesState;
}) {
  const { ids, isReady, error, toggleFavorite } = favorites;
  const isFavorite = ids.includes(experience.id);

  return (
    <div className="mt-4">
      <button
        type="button"
        aria-pressed={isFavorite}
        aria-label={`${isFavorite ? "Quitar de" : "Añadir a"} favoritos: ${experience.title}`}
        disabled={!isReady}
        onClick={() => toggleFavorite(experience.id)}
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#426b21] px-4 py-2 text-sm font-semibold text-[#426b21] transition-colors hover:bg-[#edf3e3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21] disabled:cursor-wait disabled:opacity-50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill={isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 shrink-0"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
        {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      </button>
      {error && <p role="alert" className="mt-2 text-sm text-red-800">{error}</p>}
    </div>
  );
}
