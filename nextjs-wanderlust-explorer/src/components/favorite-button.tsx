"use client";

import { useFavorites } from "@/lib/use-favorites";
import type { Experience } from "@/lib/experiences";

export default function FavoriteButton({
  experience,
}: {
  experience: Pick<Experience, "id" | "title">;
}) {
  const { ids, isReady, error, toggleFavorite } = useFavorites();
  const isFavorite = ids.includes(experience.id);

  return (
    <div className="mt-4">
      <button
        type="button"
        aria-pressed={isFavorite}
        aria-label={`${isFavorite ? "Quitar de" : "Añadir a"} favoritos: ${experience.title}`}
        disabled={!isReady}
        onClick={() => toggleFavorite(experience.id)}
        className="min-h-11 w-full rounded-lg border border-[#426b21] px-4 py-2 text-sm font-semibold text-[#426b21] transition-colors hover:bg-[#edf3e3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21] disabled:cursor-wait disabled:opacity-50"
      >
        {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      </button>
      {error && <p role="alert" className="mt-2 text-sm text-red-800">{error}</p>}
    </div>
  );
}
