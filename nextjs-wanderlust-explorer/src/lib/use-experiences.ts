"use client";

import { useMemo } from "react";
import type { Experience } from "@/lib/experiences";
import type { ExperienceFilters } from "@/lib/use-filters";

function normalizeSearch(value: string) {
  return value.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function createSearchPattern(value: string) {
  return new RegExp(
    normalizeSearch(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "i",
  );
}

export function useExperiences(
  experiences: Experience[],
  { query, category, destination }: ExperienceFilters,
) {
  return useMemo(() => {
    const titlePattern = createSearchPattern(query);
    const destinationPattern = createSearchPattern(destination);

    return experiences.filter(
      (experience) =>
        (category === "" || experience.category === category) &&
        titlePattern.test(normalizeSearch(experience.title)) &&
        (destinationPattern.test(normalizeSearch(experience.destination)) ||
          destinationPattern.test(normalizeSearch(experience.country))),
    );
  }, [experiences, query, category, destination]);
}
