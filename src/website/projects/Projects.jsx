import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

// الـ ids بتاعة المشاريع اللي تظهر في الهوم (بالترتيب ده)
const HOME_PROJECT_IDS = [1, 2, 3, 4];

export default function Projects({ onLoadingChange }) {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    onLoadingChange?.(true);

    getCollection("/projects")
      .then(setProjects)
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setLoadError(true);
      })
      .finally(() => onLoadingChange?.(false));
  }, [onLoadingChange]);

  const homeProjects = HOME_PROJECT_IDS.map((id) => projects.find((p) => String(p.id) === String(id))).filter(Boolean);

  return (
    <section id="projects" className="relative overflow-hidden bg-zinc-50 px-5 py-20 sm:py-28 md:px-10">
      <div className="relative mx-auto max-w-6xl">
        {/* العنوان + زر عرض الكل */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.projects.homeTitle}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              {t.projects.homeDescription}
            </p>
          </div>

          <Link
            to="/projects"
            className={`group inline-flex w-fit items-center gap-2.5 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand ${focusRing}`}
          >
            {t.projects.viewAll}
            <svg
              viewBox="0 0 256 256"
              aria-hidden="true"
              className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
            >
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </div>

        {loadError && (
          <p role="alert" className="mb-8 text-sm text-red-700">
            {t.projects.loadError}
          </p>
        )}

        {/* مشاريع مختارة */}
        <div className="grid gap-6 sm:grid-cols-2">
          {homeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
