import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function Metrics() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-5 py-20 sm:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.metrics.title}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              {t.metrics.description}
            </p>
          </div>

          <Link
            to="/about"
            className={`group inline-flex w-fit items-center gap-2.5 rounded-full border border-brand/40 px-5 py-2.5 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}
          >
            {t.metrics.action}
            <svg viewBox="0 0 256 256" aria-hidden="true" className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </div>

        {/* Stats panel: one dark block, hairline dividers made with gap-px over a lighter background */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-900/10 md:grid-cols-4">
          {t.metrics.values.map((value, index) => (
            <div
              key={t.metrics.labels[index]}
              className="flex flex-col-reverse justify-between gap-10 bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] p-6 transition duration-300 hover:brightness-125 md:gap-16 md:p-8"
            >
              <dt className="text-sm leading-5 text-zinc-400">{t.metrics.labels[index]}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
