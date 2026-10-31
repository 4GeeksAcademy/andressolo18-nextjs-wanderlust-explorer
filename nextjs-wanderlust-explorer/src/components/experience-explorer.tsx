"use client";

import ExperienceCard from "@/components/experience-card";
import FilterBar from "@/components/filter-bar";
import SearchBar from "@/components/search-bar";
import type { Experience } from "@/lib/experiences";
import { useExperiences } from "@/lib/use-experiences";
import { useFavorites } from "@/lib/use-favorites";
import { useFilters } from "@/lib/use-filters";

export default function ExperienceExplorer({
  experiences,
}: {
  experiences: Experience[];
}) {
  const favorites = useFavorites();
  const { query, category, destination, updateFilter } = useFilters();
  const results = useExperiences(experiences, { query, category, destination });

  return (
    <>
      <SearchBar value={query} onChange={(value) => updateFilter("q", value)} />
      <FilterBar
        category={category}
        destination={destination}
        onCategoryChange={(value) => updateFilter("category", value)}
        onDestinationChange={(value) => updateFilter("destination", value)}
      />
      <p role="status" className="mb-5 text-sm font-semibold text-[#536354]">
        {results.length} de {experiences.length} experiencias
      </p>
      <div id="experience-results">
        {results.length === 0 ? (
          <div className="rounded-2xl border border-[#203629]/10 bg-white p-8 text-center">
            <h2 className="text-xl font-bold">No se encontraron resultados</h2>
            <p className="mt-3 text-[#536354]">
              Prueba con otro título, categoría o destino. Para ver todas, borra
              las búsquedas y selecciona «Todas las categorías».
            </p>
          </div>
        ) : (
          <ul
            aria-label="Experiencias disponibles"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {results.map((experience) => (
              <li key={experience.id}>
                <ExperienceCard experience={experience} favorites={favorites} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
