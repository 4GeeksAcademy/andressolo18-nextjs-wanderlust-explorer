import { categoryLabels } from "@/lib/experience-formatters";

export default function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}) {
  return (
    <div className="mb-6 grid max-w-4xl gap-6 md:grid-cols-2">
      <div className="min-w-0">
        <label htmlFor="experience-category" className="mb-2 block text-sm font-semibold">
          Categoría
        </label>
        <select
          id="experience-category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          aria-controls="experience-results"
          className="min-h-12 w-full rounded-lg border border-[#203629]/30 bg-white px-4 py-3 text-base text-[#203629] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426b21]"
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
      <div className="min-w-0">
        <label htmlFor="experience-destination" className="mb-2 block text-sm font-semibold">
          Destino: ciudad o país
        </label>
        <input
          id="experience-destination"
          type="search"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          placeholder="Prueba con Split o Croatia"
          aria-controls="experience-results"
          className="min-h-12 w-full rounded-lg border border-[#203629]/30 bg-white px-4 py-3 text-base text-[#203629] placeholder:text-[#536354] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426b21]"
        />
      </div>
    </div>
  );
}
