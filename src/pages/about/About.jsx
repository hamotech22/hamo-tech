import useLanguage from "../../context/useLanguage";

const modern = {
  "data-aos": "fade-up",
  "data-aos-duration": "900",
  "data-aos-easing": "ease-out-cubic",
  "data-aos-offset": "60",
};

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-24 sm:px-6 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 size-112 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="mx-auto max-w-4xl text-center">
          <h1
            {...modern}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white after:mx-auto after:mt-5 after:block after:h-1 after:w-16 after:rounded-full after:bg-brand sm:text-6xl"
          >
            {t.about.title}
          </h1>
          <p {...modern} className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-400">
            {t.about.intro}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div {...modern} className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
              alt={t.about.imageAlt}
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>

          <div {...modern} className="flex flex-col justify-center space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white after:mt-4 after:block after:h-1 after:w-12 after:rounded-full after:bg-brand">{t.about.storyTitle}</h2>
            <p className="text-pretty text-base leading-7 text-zinc-400">{t.about.story1}</p>
            <p className="text-pretty text-base leading-7 text-zinc-400">{t.about.story2}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
