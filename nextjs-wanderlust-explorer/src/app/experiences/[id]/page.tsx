import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ExperienceFavorite from "@/components/experience-favorite";
import { experiences, type Experience } from "@/lib/experiences";
import {
  categoryLabels,
  priceFormatter,
  ratingFormatter,
} from "@/lib/experience-formatters";

type ExperiencePageProps = {
  params: Promise<{ id: string }>;
};

function getExperience(id: string): Experience {
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  return experience;
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { id } = await params;
  const experience = getExperience(id);

  return {
    title: `${experience.title} | Wanderlust Explorer`,
    description: experience.description,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { id } = await params;
  const experience = getExperience(id);

  return (
    <div className="flex flex-1 flex-col bg-[#f7f8f2] font-sans text-[#203629]">

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 sm:px-10 sm:py-14">
        <article>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#426b21]">
            {categoryLabels[experience.category]}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
            {experience.title}
          </h1>
          <p className="mt-4 text-lg text-[#536354]">
            {experience.destination}
          </p>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-[#e6ebdf] sm:aspect-[16/7]">
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              unoptimized
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
            <section aria-labelledby="description-title">
              <h2 id="description-title" className="text-2xl font-bold">
                Acerca de esta experiencia
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#536354]">
                {experience.description}
              </p>
            </section>
            <section
              aria-labelledby="details-title"
              className="rounded-2xl border border-[#203629]/10 bg-white p-6 shadow-sm"
            >
              <h2 id="details-title" className="text-xl font-bold">
                Detalles de la experiencia
              </h2>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-sm text-[#536354]">Destino</dt>
                  <dd className="font-semibold">{experience.destination}</dd>
                </div>
                <div>
                  <dt className="text-sm text-[#536354]">País</dt>
                  <dd className="font-semibold">{experience.country}</dd>
                </div>
                <div>
                  <dt className="text-sm text-[#536354]">Categoría</dt>
                  <dd className="font-semibold">
                    {categoryLabels[experience.category]}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-[#536354]">Valoración</dt>
                  <dd className="font-semibold">
                    {ratingFormatter.format(experience.rating)} de 5
                  </dd>
                </div>
                <div className="border-t border-[#203629]/10 pt-4">
                  <dt className="text-sm text-[#536354]">Precio</dt>
                  <dd className="text-3xl font-bold text-[#426b21]">
                    {priceFormatter.format(experience.price)}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-[#536354]">Referencia</dt>
                  <dd className="text-sm">{experience.id}</dd>
                </div>
              </dl>
              <ExperienceFavorite experience={experience} />
            </section>
          </div>
        </article>
      </main>
      <footer className="border-t border-[#203629]/10 px-6 py-5 text-center text-sm text-[#536354]">
        Wanderlust Explorer · El mundo se vive paso a paso.
      </footer>
    </div>
  );
}
