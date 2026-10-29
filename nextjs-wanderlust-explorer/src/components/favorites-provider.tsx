"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { FavoritesContext } from "@/lib/use-favorites";

const storageKey = "wanderlust-favorites";

function readFavorites(): string[] {
  const value: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
  if (!Array.isArray(value) || !value.every((id) => typeof id === "string")) {
    throw new Error("Los favoritos guardados tienen un formato inválido.");
  }
  return value;
}

export default function FavoritesProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const currentIds = useRef<string[]>([]);

  useEffect(() => {
    function loadFavorites() {
      try {
        const savedIds = readFavorites();
        currentIds.current = savedIds;
        setIds(savedIds);
        setError(null);
      } catch {
        setError("No se pudieron leer los favoritos. Comprueba el almacenamiento del navegador.");
      }
      setIsReady(true);
    }

    function onStorage(event: StorageEvent) {
      if (event.key === storageKey || event.key === null) loadFavorites();
    }

    loadFavorites();
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function toggleFavorite(id: string) {
    if (!isReady) {
      setError("Espera a que se carguen los favoritos antes de modificarlos.");
      return;
    }

    const current = currentIds.current;
    const next = current.includes(id)
      ? current.filter((favoriteId) => favoriteId !== id)
      : [...current, id];

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      currentIds.current = next;
      setIds(next);
      setError(null);
    } catch {
      setError("No se pudo guardar el cambio. Comprueba el almacenamiento del navegador.");
    }
  }

  return (
    <FavoritesContext.Provider value={{ ids, isReady, error, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
