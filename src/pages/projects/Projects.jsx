import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";



export default function Projects({ onLoadingChange }) {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    onLoadingChange?.(true);
    axios.get("http://localhost:3000/projects").then((res) => setProjects(res.data))
      .catch((error) => console.error("Failed to load projects:", error))
      .finally(() => onLoadingChange?.(false));
  }, [onLoadingChange]);

  return (
    <section id="projects" className="bg-white px-5 py-20 sm:py-28 md:px-10" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
            <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.projects.homeTitle}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              {t.projects.homeDescription}
            </p>
          </div>

          <Link to="/projects"className={`group inline-flex w-fit items-center gap-2.5 rounded-full border border-brand/40 px-5 py-2.5 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}>
            {t.projects.viewAll}
            <svg viewBox="0 0 256 256" aria-hidden="true" className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {projects.slice(-4).map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className={`group block rounded-3xl ${focusRing}`} data-aos="fade-up">
              <div className="relative aspect-3/2 overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Category chip */}
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur-md rtl:left-auto rtl:right-4">
                  {t.projects.categories[project.category] ?? project.category}
                </span>

                {/* Hover arrow */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid size-10 translate-y-1 scale-90 place-items-center rounded-full bg-white text-zinc-950 opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
                    <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{project.client}</p>
                </div>

                <span className="pt-1 text-sm tabular-nums text-zinc-500">{project.year}</span>
              </div>

              <p className="mt-3 px-1 text-sm leading-6 text-zinc-600">{t.projects.descriptions[project.id] ?? project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}