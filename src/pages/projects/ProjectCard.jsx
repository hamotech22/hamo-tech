import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();
  return (
    <Link to={`/projects/${project.id}`} className={`group block rounded-3xl ${focusRing}`}>
      <div className="relative aspect-3/2 overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur-md rtl:left-auto rtl:right-4">
          {t.projects.categories[project.category] ?? project.category}
        </span>

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

      <p className="mt-3 px-1 text-sm leading-6 text-zinc-600">{project.description}</p>
    </Link>
  );
}
