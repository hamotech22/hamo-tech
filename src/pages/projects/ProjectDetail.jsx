import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../context/useLanguage";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function ProjectDetail() {
  const { t } = useLanguage();
  const { id } = useParams();
  const [projects, setProjects] = useState(null);

  // رقم الصورة المعروضة حالياً في الصورة الكبيرة
  const [activeIndex, setActiveIndex] = useState(0);

  // مكان الماوس فوق الصورة الكبيرة (نسبة مئوية) عشان الزووم يتبعه
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handleZoomMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setProjects([]);
      });
  }, []);

  // لما تنتقل لمشروع تاني (من "المزيد من المشاريع") ارجع للصورة الأولى
  useEffect(() => {
    setActiveIndex(0);
  }, [id]);

  if (projects === null) {
    return <p className="px-5 py-20 text-center text-zinc-600">{t.projects.loading}</p>;
  }

  const project = projects.find((p) => String(p.id) === String(id) || p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  // المعرض: الصورة الرئيسية + باقي الصور (images في db.json)، من غير تكرار، وبحد أقصى 4
  const gallery = [...new Set([project.image, ...(project.images ?? [])].filter(Boolean))].slice(0, 4);

  return (
    <article
      className="w-full bg-surface px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="30"
    >
      <div className="mx-auto max-w-4xl">
        {/* Back to all projects */}
        <Link
          to="/projects"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
          className={`inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-zinc-500 transition-colors hover:text-brand ${focusRing}`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">←</span>
          {t.projects.back}
        </Link>

        {/* Header */}
        <span
          className="mt-8 inline-flex rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-brand/20"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          {t.projects.categories[project.category] ?? project.category}
        </span>

        <h1
          className="mt-4 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          {project.title}
        </h1>

        <p className="mt-2 text-sm text-zinc-500" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
          {project.client} · {project.year}
        </p>

        {/* Gallery: الصورة الكبيرة + الصور الصغيرة تحتها */}
        <div className="mt-10" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
          {/* الصورة الكبيرة: كل الصور فوق بعض، والنشطة بس ظاهرة. هوفر = زووم بيتبع الماوس */}
          <div
            onMouseMove={handleZoomMove}
            onMouseLeave={() => setZoomPos({ x: 50, y: 50 })}
            style={{ "--zx": `${zoomPos.x}%`, "--zy": `${zoomPos.y}%` }}
            className="group/zoom relative aspect-3/2 cursor-zoom-in overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl shadow-black/40 ring-1 ring-white/10 transition duration-500 hover:ring-brand/50"
          >
            {gallery.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 size-full origin-[var(--zx)_var(--zy)] object-cover transition-[opacity,transform] duration-500 ease-out will-change-transform group-hover/zoom:scale-[1.8] motion-reduce:group-hover/zoom:scale-100 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* أيقونة تلميح الزووم: بتختفي أول ما الماوس يدخل */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 end-4 grid size-10 place-items-center rounded-full bg-ink/70 text-zinc-900 ring-1 ring-white/10 backdrop-blur-md transition duration-300 group-hover/zoom:scale-75 group-hover/zoom:opacity-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m20 20-4-4M11 8.5v5M8.5 11h5" strokeLinecap="round" />
              </svg>
            </span>
          </div>

          {/* الصور الصغيرة (بتظهر لو في أكتر من صورة) */}
          {gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
              {gallery.map((src, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${project.title} ${index + 1}`}
                    aria-pressed={isActive}
                    className={`group relative aspect-3/2 overflow-hidden rounded-xl bg-zinc-100 transition duration-300 sm:rounded-2xl ${focusRing} ${
                      isActive
                        ? "ring-2 ring-brand ring-offset-2 ring-offset-surface"
                        : "opacity-60 ring-1 ring-white/10 hover:opacity-100 hover:ring-white/30"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <p
          className="mt-8 max-w-2xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          {t.projects.descriptions[project.id] ?? project.description}
        </p>

        {/* More projects */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-12" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{t.projects.more}</h2>

            <div className="mt-6 grid gap-x-6 gap-y-14 sm:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}