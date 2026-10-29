"use client";

import { experiences } from "@/lib/experiences";
import { useFavorites } from "@/lib/use-favorites";

export default function FavoritesCount() {
  const { ids, isReady, error } = useFavorites();
  const count = experiences.filter((experience) => ids.includes(experience.id)).length;

  if (!isReady) {
    return <p role="status">Cargando favoritos…</p>;
  }

  if (error) {
    return <p role="alert" className="text-sm text-red-800">{error}</p>;
  }

  return (
    <p role="status" className="text-[#536354]">
      <span className="mb-2 block text-5xl font-bold text-[#426b21]">{count}</span>
      {count === 1 ? "experiencia favorita guardada" : "experiencias favoritas guardadas"}
    </p>
  );
}
