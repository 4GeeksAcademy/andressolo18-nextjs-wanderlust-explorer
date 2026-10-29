"use client";

import { usePathname, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/experience-card";
import { categoryLabels } from "@/lib/experience-formatters";
import type { Experience } from "@/lib/experiences";

function normalizeSearch(value: string) {
  return value.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function createSearchPattern(value: string) {
  return new RegExp(
    normalizeSearch(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "i",
  );
}

export default function ExperienceExplorer({
  experiences,
}: {
  experiences: Experience[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  function updateFilter(key: "q" | "category" | "destination", value: string) {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const search = params.toString();
    window.history.replaceState(
      null,
      "",
      `${pathname}${search ? `?${search}` : ""}${window.location.hash}`,
    );
  }

  const titlePattern = createSearchPattern(query);
  const destinationPattern = createSearchPattern(destination);
  const results = experiences.filter(
    (experience) =>
      (category === "" || experience.category === category) &&
      titlePattern.test(normalizeSearch(experience.title)) &&
      (destinationPattern.test(normalizeSearch(experience.destination)) ||
        destinationPattern.test(normalizeSearch(experience.country))),
  );

  return (
    <>
      <div className="mb-6 max-w-2xl">
        <label htmlFor="experience-search" className="mb-2 block text-sm font-semibold">
          Buscar por título
        </label>
        <input
          id="experience-search"
          type="search"
          value={query}
          onChange={(event) => updateFilter("q", event.target.value)}
          placeholder="Prueba con kayak, yoga o cocina"
          aria-controls="experience-results"
          className="min-h-12 w-full rounded-lg border border-[#203629]/30 bg-white px-4 py-3 text-[#203629] placeholder:text-[#536354] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426b21]"
        />
      </div>
      <div className="mb-6 max-w-2xl">
        <label htmlFor="experience-category" className="mb-2 block text-sm font-semibold">
          Categoría
        </label>
        <select
          id="experience-category"
          value={category}
          onChange={(event) => updateFilter("category", event.target.value)}
          aria-controls="experience-results"
          className="min-h-12 w-full rounded-lg border border-[#203629]/30 bg-white px-4 py-3 text-[#203629] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426b21]"
        >
          <option value="">Todas las categorías</option>
          {category !== "" && !Object.hasOwn(categoryLabels, category) && (
            <option value={category}>Categoría desconocida: {category}</option>
          )}
          {Object.entries(categoryLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      <div className="mb-6 max-w-2xl">
        <label htmlFor="experience-destination" className="mb-2 block text-sm font-semibold">
          Destino: ciudad o país
        </label>
        <input
          id="experience-destination"
          type="search"
          value={destination}
          onChange={(event) => updateFilter("destination", event.target.value)}
          placeholder="Prueba con Split o Croatia"
          aria-controls="experience-results"
          className="min-h-12 w-full rounded-lg border border-[#203629]/30 bg-white px-4 py-3 text-[#203629] placeholder:text-[#536354] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426b21]"
        />
      </div>
      <p role="status" className="mb-5 text-sm font-semibold text-[#536354]">
        {results.length} de {experiences.length} experiencias
      </p>
      <div id="experience-results">
        {results.length === 0 ? (
          <div className="rounded-2xl border border-[#203629]/10 bg-white p-8 text-center">
            <h2 className="text-xl font-bold">No se encontraron experiencias</h2>
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
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
