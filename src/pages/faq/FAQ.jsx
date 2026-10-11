import useLanguage from "../../context/useLanguage";

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <section className="bg-zinc-100 px-5 py-20 sm:py-28 md:px-10" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
          <div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.faq.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">{t.faq.description}</p>

            <div className="mt-10 space-y-3 sm:mt-12">
              {t.faq.questions.map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-2xl bg-white ring-1 ring-zinc-900/5 transition duration-300 open:shadow-lg open:shadow-zinc-900/5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-medium text-zinc-950 sm:text-lg">{question}</span>

                    {/* Plus turns into minus when open */}
                    <span
                      aria-hidden="true"
                      className="relative grid size-9 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-600 transition duration-300 group-open:bg-brand group-open:text-white"
                    >
                      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                      <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>

                  <div className="max-w-2xl px-5 pb-6 text-base leading-7 text-zinc-600 sm:px-6">{answer}</div>
                </details>
              ))}
            </div>
          </div>

          <div
            className="relative isolate flex min-h-120 flex-col overflow-hidden rounded-3xl bg-brand p-8 shadow-2xl shadow-brand/20 ring-1 ring-inset ring-white/15 md:p-10 lg:sticky lg:top-28"
            data-aos="fade-up"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-20 -z-10 size-72 rounded-full bg-brand-glow opacity-60 blur-[80px]" />

            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=240&q=85"
              alt=""
              className="size-24 rounded-full object-cover ring-4 ring-white/30 grayscale"
            />

            <div className="mt-6">
              <h3 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
                {t.faq.consultationTitle}
              </h3>

              <p className="mt-4 max-w-md text-pretty text-base leading-7 text-white/90">
                {t.faq.emailPrompt}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <a
                href="#contact"
                className="group flex h-14 items-center justify-center gap-3 rounded-full bg-white text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t.faq.consultation}
                <svg
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                >
                  <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
