"use client";

import Link from "next/link";
import ExperienceCard from "@/components/experience-card";
import { experiences } from "@/lib/experiences";
import { useFavorites } from "@/lib/use-favorites";

export default function FavoritesList() {
  const { ids, isReady, error } = useFavorites();
  const favorites = experiences.filter((experience) => ids.includes(experience.id));

  if (!isReady) {
    return <p role="status">Cargando tus favoritos…</p>;
  }

  if (error) {
    return <p role="alert" className="text-red-800">{error}</p>;
  }

  if (favorites.length === 0) {
    return (
      <div className="rounded-2xl border border-[#203629]/10 bg-white p-8 text-center">
        <h2 className="text-2xl font-bold">Todavía no tienes favoritos</h2>
        <p className="mt-3 text-[#536354]">
          Marca las experiencias que te gusten para encontrarlas aquí.
        </p>
        <Link
          href="/experiences"
          className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-[#426b21] px-6 py-3 font-semibold text-white hover:bg-[#34551a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
        >
          Explorar experiencias
        </Link>
      </div>
    );
  }

  return (
    <>
      <p className="mb-5 text-sm font-semibold text-[#536354]" role="status">
        {favorites.length} {favorites.length === 1 ? "experiencia favorita" : "experiencias favoritas"}
      </p>
      <ul
        aria-label="Experiencias favoritas"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {favorites.map((experience) => (
          <li key={experience.id}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </>
  );
}
