export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mb-6 max-w-2xl">
      <label htmlFor="experience-search" className="mb-2 block text-sm font-semibold">
        Buscar por título
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Prueba con kayak, yoga o cocina"
        aria-controls="experience-results"
        className="min-h-12 w-full rounded-lg border border-[#203629]/30 bg-white px-4 py-3 text-base text-[#203629] placeholder:text-[#536354] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#426b21]"
      />
    </div>
  );
}
