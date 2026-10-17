import { useEffect, useState } from "react";
import Icon from "./Icon";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import { whatsappUrl } from "../../lib/contact";

export default function Services() {
  const { t } = useLanguage();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    getCollection("/services")
      .then(setServices)
      .catch((error) => {
        console.error("Failed to load services:", error);
        setLoadError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="services" className="bg-white px-5 py-20 sm:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* المقدمة (بتفضل ثابتة وقت السكرول في الشاشات الكبيرة) */}
          <div className="md:sticky md:top-28 md:self-start" data-aos="fade-up">
            <h2 className="max-w-md text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand-accent sm:text-5xl">
              {t.services.title}
            </h2>

            <div className="mt-6 max-w-md space-y-4 text-pretty text-base leading-7 text-zinc-600">
              <p>{t.services.intro1}</p>
              <p>{t.services.intro2}</p>
            </div>
          </div>

          {/* كروت الخدمات */}
          <div>
            {loadError && (
              <p role="alert" className="mb-4 text-sm text-red-700">
                {t.services.loadError ?? "Failed to load services."}
              </p>
            )}

            {/* لودينج: كروت رمادية */}
            {loading && (
              <div className="grid gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-64 animate-pulse rounded-[2rem] bg-zinc-100" />
                ))}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => {
                // لو فيه ترجمة في ملف اللغة بنستخدمها، وإلا بنستخدم بيانات db.json
                const item = { ...service, ...(t.services.items?.[index] ?? {}) };

                return (
                  <article
                    key={service.id}
                    className="flex flex-col rounded-[2rem] bg-zinc-50 p-6 ring-1 ring-zinc-900/5"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-accent/15 text-amber-700">
                      <Icon paths={service.iconPaths} />
                    </span>

                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.skills?.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* بانر التواصل */}
        <div
          className="mt-12 flex flex-col gap-6 rounded-[2rem] bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between md:p-10"
          data-aos="fade-up"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-brand-light">{t.designPartner.badge}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-brand-accent sm:text-2xl">
              {t.designPartner.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base">{t.designPartner.description}</p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-300">
              {[t.designPartner.tailored, t.designPartner.grows].map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-accent" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2.5 self-start rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:self-center"
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
    </section>
  );
}
