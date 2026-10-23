import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import { resolveProjectImage } from "../../lib/projectImages";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function ProjectDetail() {
  const { t } = useLanguage();
  const { id } = useParams();

  const [projects, setProjects] = useState(null); // null = لسه بيحمّل
  const [loadError, setLoadError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getCollection("/projects")
      .then(setProjects)
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setLoadError(true);
        setProjects([]);
      });
  }, []);

  if (projects === null) {
    return <p className="px-5 py-20 text-center text-zinc-600">{t.projects.loading}</p>;
  }

  if (loadError) {
    return (
      <p role="alert" className="px-5 py-20 text-center text-sm text-red-700">
        {t.projects.loadError}
      </p>
    );
  }

  const project = projects.find((p) => String(p.id) === String(id) || p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // مشروعين تانيين
  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);
  const projectTitle = t.projects.titles?.[project.id] ?? project.title;
  const projectDetails = t.projects.details?.[project.id];

  // الصورة الرئيسية + باقي الصور (بدون تكرار، 8 كحد أقصى)
  const gallery = [...new Set([project.image, ...(project.images ?? [])].filter(Boolean))].slice(0, 8).map(resolveProjectImage);
  const current = activeIndex < gallery.length ? activeIndex : 0;

  return (
    <article className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        {/* رجوع */}
        <Link
          to="/projects"
          className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-600 ring-1 ring-zinc-900/10 transition hover:text-brand ${focusRing}`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">
            ←
          </span>
          {t.projects.back}
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          {/* ===== المعرض ===== */}
          <div>
            {/* الصورة الكبيرة */}
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <img src={gallery[current]} alt={projectTitle} className="size-full object-contain" />
            </div>

            {/* الصور الصغيرة */}
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
                {gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${projectTitle} ${index + 1}`}
                    aria-pressed={index === current}
                    className={`aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 transition duration-300 ${focusRing} ${
                      index === current ? "ring-2 ring-brand ring-offset-2 ring-offset-zinc-50" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" loading="lazy" className="size-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ===== بيانات المشروع ===== */}
          <aside className="rounded-[2rem] bg-white p-6 shadow-xl shadow-zinc-900/5 ring-1 ring-zinc-900/5 sm:p-8 lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-brand/20">
              {t.projects.categories[project.category] ?? project.category}
            </span>

            <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-4xl">
              {projectTitle}
            </h1>

            {(project.client || project.year) && (
              <div className="mt-5 flex items-center gap-3 text-sm text-zinc-500">
                {project.client && <span className="font-medium text-zinc-800">{project.client}</span>}
                {project.client && project.year && <span aria-hidden="true">•</span>}
                {project.year && <span className="tabular-nums">{project.year}</span>}
              </div>
            )}

            <p className="mt-6 border-t border-zinc-200 pt-6 text-pretty text-base leading-7 text-zinc-600">
              {t.projects.descriptions[project.id] ?? project.description}
            </p>

            {projectDetails && (
              <div className="mt-6 space-y-6 border-t border-zinc-200 pt-6">
                {projectDetails.components && (
                  <section>
                    <h2 className="text-sm font-semibold text-zinc-950">{t.projects.componentsTitle}</h2>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                      {projectDetails.components.map((component) => (
                        <li key={component} className="flex gap-2">
                          <span aria-hidden="true" className="text-brand">
                            •
                          </span>
                          <span>{component}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {projectDetails.features && (
                  <section>
                    <h2 className="text-sm font-semibold text-zinc-950">
                      {projectDetails.components ? t.projects.projectBenefitsTitle : t.projects.featuresTitle}
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                      {projectDetails.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span aria-hidden="true" className="text-brand">
                            •
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {projectDetails.services && (
                  <section>
                    <h2 className="text-sm font-semibold text-zinc-950">{t.projects.servicesTitle}</h2>
                    <ul className="mt-3 space-y-4 text-sm leading-6 text-zinc-600">
                      {projectDetails.services.map((service) => (
                        <li key={service.title}>
                          <h3 className="font-medium text-zinc-800">{service.title}</h3>
                          <p>{service.description}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {projectDetails.bookingSteps && (
                  <section>
                    <h2 className="text-sm font-semibold text-zinc-950">{t.projects.bookingStepsTitle}</h2>
                    <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-6 text-zinc-600">
                      {projectDetails.bookingSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </section>
                )}

                {projectDetails.technologies && (
                  <section>
                    <h2 className="text-sm font-semibold text-zinc-950">{t.projects.technologiesTitle}</h2>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {projectDetails.technologies.map((technology) => (
                        <li key={technology} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}
          </aside>
        </div>

        {/* مشاريع أخرى */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-zinc-200 pt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{t.projects.more}</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
