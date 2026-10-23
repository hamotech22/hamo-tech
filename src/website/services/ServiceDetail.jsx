import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Icon from "./Icon";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import { whatsappUrl } from "../../lib/contact";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function ServiceDetail() {
  const { t } = useLanguage();
  const { slug } = useParams();

  const [services, setServices] = useState(null); // null = لسه بيحمّل
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    getCollection("/services")
      .then(setServices)
      .catch((error) => {
        console.error("Failed to load services:", error);
        setLoadError(true);
        setServices([]);
      });
  }, []);

  if (services === null) {
    return <p className="px-5 py-20 text-center text-zinc-600">{t.services.loading ?? "Loading..."}</p>;
  }

  if (loadError) {
    return (
      <p role="alert" className="px-5 py-20 text-center text-sm text-red-700">
        {t.services.loadError ?? "Failed to load services."}
      </p>
    );
  }

  const index = services.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return <Navigate to="/#services" replace />;
  }

  // بيانات db.json + الترجمة (لو موجودة)
  const service = { ...services[index], ...(t.services.items?.[index] ?? {}) };

  return (
    <article className="relative w-full overflow-hidden bg-zinc-50 px-5 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-4xl">
        {/* رجوع */}
        <Link
          to="/#services"
          className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-600 ring-1 ring-zinc-900/10 transition hover:text-brand ${focusRing}`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">←</span>
          {t.services.back ?? "Back to services"}
        </Link>

        <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-zinc-900/5 ring-1 ring-zinc-900/5 sm:p-10">
          {/* الأيقونة */}
          <span className="grid size-14 place-items-center rounded-2xl bg-brand/10 text-brand">
            <Icon paths={service.iconPaths} className="size-7" />
          </span>

          <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {service.description}
          </p>

          {/* المهارات */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {service.skills?.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* التفاصيل */}
          <div className="mt-10 rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-900/5">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
              {t.services.expect ?? "What to expect"}
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600">{service.details}</p>
          </div>

          {/* زر التواصل */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group mt-8 inline-flex h-12 items-center gap-2.5 rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-hover ${focusRing}`}
          >
            {t.designPartner.action}
            <svg
              viewBox="0 0 256 256"
              aria-hidden="true"
              className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
            >
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
