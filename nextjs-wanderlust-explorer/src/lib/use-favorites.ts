"use client";

import { useMemo, useState, useSyncExternalStore } from "react";

const storageKey = "wanderlust-favorites";
const changeEvent = "wanderlust-favorites-change";
const storageError = "storage-unavailable";

function subscribe(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === storageKey || event.key === null) onChange();
  }

  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, onChange);
  };
}

function getSnapshot(): string {
  try {
    return window.localStorage.getItem(storageKey) ?? "[]";
  } catch {
    return storageError;
  }
}

function getServerSnapshot(): null {
  return null;
}

function parseFavorites(snapshot: string): string[] {
  if (snapshot === storageError) {
    throw new Error("No se puede acceder a los favoritos de este navegador.");
  }

  let value: unknown;
  try {
    value = JSON.parse(snapshot);
  } catch {
    throw new Error("Los favoritos guardados tienen un formato inválido.");
  }

  if (!Array.isArray(value) || !value.every((id) => typeof id === "string")) {
    throw new Error("Los favoritos guardados tienen un formato inválido.");
  }

  return value;
}

export function useFavorites() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [writeError, setWriteError] = useState<string | null>(null);
  const { ids, readError } = useMemo<{
    ids: string[];
    readError: string | null;
  }>(() => {
    try {
      return {
        ids: snapshot === null ? [] : parseFavorites(snapshot),
        readError: null,
      };
    } catch (error) {
      return {
        ids: [],
        readError: error instanceof Error ? error.message : "No se pudieron leer los favoritos.",
      };
    }
  }, [snapshot]);

  function toggleFavorite(id: string) {
    try {
      const current = parseFavorites(getSnapshot());
      const next = current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id];
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      setWriteError(null);
      window.dispatchEvent(new Event(changeEvent));
    } catch {
      setWriteError(
        "No se pudo guardar el cambio. Comprueba que el almacenamiento del navegador esté disponible.",
      );
    }
  }

  return {
    ids,
    isReady: snapshot !== null,
    error: readError ?? writeError,
    toggleFavorite,
  };
}
