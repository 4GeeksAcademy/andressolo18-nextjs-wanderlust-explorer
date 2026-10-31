# andressolo18-nextjs-wanderlust-explorer

## Hooks del explorador

- [`useFilters`](./nextjs-wanderlust-explorer/src/lib/use-filters.ts): lee
  `q`, `category` y `destination` de la URL y permite actualizarlos sin recargar
  la página, conservando los demás parámetros y el fragmento.
- [`useExperiences`](./nextjs-wanderlust-explorer/src/lib/use-experiences.ts):
  recibe las experiencias y los filtros; devuelve las coincidencias por título,
  categoría y ciudad o país. Las búsquedas ignoran mayúsculas y acentos.

Ambos se utilizan en
[`ExperienceExplorer`](./nextjs-wanderlust-explorer/src/components/experience-explorer.tsx).
Los componentes que utilicen `useFilters` necesitan un límite `Suspense`, como
el que ya existe en la página de experiencias.

## Diseño responsivo

- `Navbar` se renderiza una sola vez en el layout raíz para todas las páginas.
  Usa `usePathname` para destacar la ruta activa con fondo y subrayado, y
  `aria-current` para accesibilidad. Los detalles mantienen activa la sección
  Experiencias; el logotipo identifica el inicio.
- La navegación se apila en móvil y sus enlaces tienen un alto mínimo de 44 px.
- Los filtros se apilan en móvil y usan dos columnas desde 768 px.
- Las tarjetas usan una columna en móvil, dos desde 640 px, tres desde 1024 px
  y cuatro desde 1280 px.
- El perfil y el detalle de experiencia usan dos columnas desde 1024 px.
- Los campos usan texto de 16 px y los títulos adaptan su tamaño a la pantalla.