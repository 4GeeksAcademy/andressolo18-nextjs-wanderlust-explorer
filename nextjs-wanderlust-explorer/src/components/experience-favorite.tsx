"use client";

import FavoriteButton from "@/components/favorite-button";
import type { Experience } from "@/lib/experiences";
import { useFavorites } from "@/lib/use-favorites";

export default function ExperienceFavorite({
  experience,
}: {
  experience: Pick<Experience, "id" | "title">;
}) {
  const favorites = useFavorites();
  return <FavoriteButton experience={experience} favorites={favorites} />;
}
