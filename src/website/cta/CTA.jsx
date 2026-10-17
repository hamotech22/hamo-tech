import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="scroll-mt-24 bg-white px-5 pb-20 sm:pb-28 md:px-10" data-aos="fade-up">
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 overflow-hidden rounded-3xl bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] px-7 py-10 sm:px-10 sm:py-12 md:flex-row md:items-end md:justify-between md:px-14 md:py-14">
        <div className="relative max-w-3xl">
          <span className="text-sm font-medium text-brand-light">{t.nav.contact}</span>
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight text-white after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand-accent sm:text-3xl md:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {t.cta.description}
          </p>
        </div>

        <Link
          to="/contact"
          className="group relative inline-flex h-12 shrink-0 items-center justify-center gap-2.5 rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {t.cta.action}
          <svg
            viewBox="0 0 256 256"
            aria-hidden="true"
            className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
          >
            <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
