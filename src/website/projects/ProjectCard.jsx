import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import { resolveProjectImage } from "../../lib/projectImages";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

// big = true يخلي الكارت أعرض (بياخد عمودين)
export default function ProjectCard({ project, big = false }) {
  const { t } = useLanguage();

  const title = t.projects.titles?.[project.id] ?? project.title;
  const category = t.projects.categories[project.category] ?? project.category;
  const description = t.projects.descriptions[project.id] ?? project.description;

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`group flex flex-col rounded-[2rem] bg-white p-3 ring-1 ring-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/10 ${focusRing} ${
        big ? "sm:col-span-2" : ""
      }`}
    >
      {/* الصورة */}
      <div
        className={`relative overflow-hidden rounded-3xl bg-zinc-100 ${
          big ? "aspect-[16/9]" : "aspect-[3/2]"
        }`}
      >
        <img
          src={resolveProjectImage(project.image)}
          alt={title}
          loading="lazy"
          className="size-full object-contain"
        />

        {/* تدرج غامق خفيف من تحت */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />

        {/* التصنيف */}
        <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-800 backdrop-blur">
          {category}
        </span>

        {/* السنة */}
        {project.year && (
          <span className="absolute bottom-4 start-4 text-sm font-medium tabular-nums text-white">
            {project.year}
          </span>
        )}

        {/* سهم */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 end-4 grid size-11 place-items-center rounded-full bg-white text-zinc-950 shadow-lg transition duration-300 group-hover:bg-brand group-hover:text-white rtl:-scale-x-100"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
            <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* النصوص */}
      <div className="px-3 pb-3 pt-5">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-brand">
          {title}
        </h3>
        {project.client && <p className="mt-1 text-sm font-medium text-brand">{project.client}</p>}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">{description}</p>
      </div>
    </Link>
  );
}
