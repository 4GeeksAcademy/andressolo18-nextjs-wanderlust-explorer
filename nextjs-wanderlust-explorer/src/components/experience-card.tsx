import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/lib/experiences";
import {
  categoryLabels,
  priceFormatter,
  ratingFormatter,
} from "@/lib/experience-formatters";
import FavoriteButton from "@/components/favorite-button";
import type { FavoritesState } from "@/lib/use-favorites";

export default function ExperienceCard({
  experience,
  favorites,
}: {
  experience: Experience;
  favorites: FavoritesState;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#203629]/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-[#e6ebdf]">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          unoptimized
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#426b21]">
          {categoryLabels[experience.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-[#536354]">{experience.destination}</p>
        <h2 className="mt-2 text-xl leading-snug font-bold">
          <Link
            href={`/experiences/${experience.id}`}
            className="rounded-sm underline-offset-4 hover:text-[#426b21] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426b21]"
          >
            {experience.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#536354]">
          {experience.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#203629]/10 pt-4">
          <span
            aria-label={`Valoración: ${ratingFormatter.format(experience.rating)} de 5`}
            className="text-sm font-semibold"
          >
            <span aria-hidden="true" className="mr-1 text-[#8a6500]">★</span>
            {ratingFormatter.format(experience.rating)}
            <span aria-hidden="true" className="font-normal text-[#536354]">
              {" "}/ 5
            </span>
          </span>
          <p className="text-lg font-bold text-[#426b21]">
            {priceFormatter.format(experience.price)}
          </p>
        </div>
        <FavoriteButton experience={experience} favorites={favorites} />
      </div>
    </article>
  );
}
