"use client";

import { usePathname, useSearchParams } from "next/navigation";

export type ExperienceFilters = {
  query: string;
  category: string;
  destination: string;
};

export function useFilters() {
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

  return { query, category, destination, updateFilter };
}
