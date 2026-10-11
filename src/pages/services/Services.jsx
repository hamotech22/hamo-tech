
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const services = [
  {
    iconPaths: ["M12 2.5 19 6v6c0 4.5-2.8 8.5-7 10.5C7.8 20.5 5 16.5 5 12V6l7-3.5Z", "M9.5 9.5h5M9.5 12.5h5M9.5 15.5h3"],
  },
  {
    iconPaths: [
      "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-11Z",
      "M4 9.5h16M9 19v-9.5h6V19",
    ],
  },
  {
    iconPaths: [
      "M16 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
      "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      "M20 20v-2a4 4 0 0 0-3-3.87M16 4.5a4 4 0 0 1 0 7.5",
    ],
  },
  {
    iconPaths: ["M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14"],
  },
];


export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-5 py-20 sm:py-28 md:px-10" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* Intro (stays in view while the cards scroll on desktop) */}
          <div className="md:sticky md:top-28 md:self-start" data-aos="fade-up">
            <h2 className="max-w-md text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.services.title}
            </h2>

            <div className="mt-6 max-w-md space-y-4 text-pretty text-base leading-7 text-zinc-600">
              <p>{t.services.intro1}</p>
              <p>{t.services.intro2}</p>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={t.services.items[index][0]}
                className="rounded-3xl border border-zinc-200/70 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5"
                data-aos="fade-up"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-5"
                  >
                    {service.iconPaths.map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </svg>
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">{t.services.items[index][0]}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">{t.services.items[index][1]}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-6 rounded-3xl bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between md:p-10"
          data-aos="fade-up"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-brand-light">{t.designPartner.badge}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-brand sm:text-3xl">{t.designPartner.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base">{t.designPartner.description}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-300">
              {[t.designPartner.tailored, t.designPartner.grows].map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2.5 self-start rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:self-center"
          >
            {t.designPartner.action}
            <svg
              viewBox="0 0 256 256"
              aria-hidden="true"
              className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            >
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
