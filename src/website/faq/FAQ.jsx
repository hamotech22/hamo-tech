import useLanguage from "../../context/useLanguage";
import profileImage from "../../assets/images/profile.jpeg";
import Reveal from "../../components/animation/Reveal";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-zinc-50 px-5 py-20 sm:py-28 md:px-10">
      <div className="relative mx-auto max-w-6xl">
        {/* ===== العنوان فقط (خارج الأسئلة والكارد) ===== */}
        <Reveal>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 sm:mt-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
          {/* ===== الوصف + الأسئلة ===== */}
          <Reveal>
            <p className="text-base leading-7 text-zinc-600 sm:text-lg">{t.faq.description}</p>

            <div className="mt-8 space-y-3">
              {t.faq.questions.map(([question, answer]) => (
                // name="faq" يخلي سؤال واحد بس مفتوح في نفس الوقت
                <details
                  key={question}
                  name="faq"
                  className="group rounded-3xl bg-white ring-1 ring-zinc-900/5 transition duration-300 open:shadow-xl open:shadow-zinc-900/5 open:ring-brand/30
                    [interpolate-size:allow-keywords]
                    [&::details-content]:h-0
                    [&::details-content]:overflow-hidden
                    [&::details-content]:transition-[height,content-visibility]
                    [&::details-content]:duration-300
                    [&::details-content]:ease-out
                    [&::details-content]:[transition-behavior:allow-discrete]
                    open:[&::details-content]:h-auto"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-3xl px-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-medium text-zinc-950 sm:text-lg">{question}</span>

                    {/* علامة + بتتحول لـ − لما السؤال يتفتح */}
                    <span
                      aria-hidden="true"
                      className="relative grid size-10 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-600 transition duration-300 group-open:bg-brand group-open:text-white"
                    >
                      <span className="absolute h-0.5 w-4 rounded-full bg-current" />
                      <span className="absolute h-4 w-0.5 rounded-full bg-current transition duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>

                  <p className="max-w-2xl px-5 pb-6 text-base leading-7 text-zinc-600 opacity-0 transition-opacity duration-300 group-open:opacity-100 sm:px-6">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* ===== كارت الاستشارة ===== */}
          <Reveal
            as="div"
            className="relative isolate flex min-h-[30rem] flex-col overflow-hidden rounded-[2rem] bg-brand p-8 shadow-2xl shadow-brand/25 md:p-10"
          >
            <img src={profileImage} alt="" className="size-24 rounded-full object-cover ring-4 ring-white/30" />

            <div className="mt-6">
              <h3 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white lg:text-4xl">
                {t.faq.consultationTitle}
              </h3>

              <p className="mt-4 max-w-md text-pretty text-base leading-7 text-white/90">{t.faq.emailPrompt}</p>
            </div>

            <a
              href="#contact"
              className="group mt-auto flex h-14 items-center justify-center gap-3 rounded-full bg-white text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.faq.consultation}
              <svg
                viewBox="0 0 256 256"
                aria-hidden="true"
                className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              >
                <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32 11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}