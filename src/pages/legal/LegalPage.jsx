import { useEffect } from "react";
import AOS from "aos";
import useLanguage from "../../context/useLanguage";

export default function LegalPage({ documentKey }) {
  const { t } = useLanguage();
  const document = t.legal[documentKey];

  useEffect(() => {
    AOS.refresh();
  }, [documentKey]);

  return (
    <article
      className="bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="30"
    >
      <div className="mx-auto max-w-3xl">
        <header
          className="mb-12 border-b border-zinc-200 pb-8 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          data-aos-offset="30"
        >
          <p className="text-sm font-medium text-brand">{t.legal.label}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
            {document.title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {document.introduction}
          </p>
        </header>

        <div className="space-y-10">
          {document.sections.map((section, index) => (
            <section
              key={section.title}
              data-aos="fade-up"
              data-aos-duration="650"
              data-aos-delay={index * 80}
              data-aos-offset="30"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-3 space-y-4 text-base leading-7 text-zinc-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.subsections && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((subsection, subsectionIndex) => (
                    <div
                      key={subsection.title}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 80 + subsectionIndex * 40}
                      data-aos-offset="30"
                    >
                      <h3 className="text-lg font-semibold text-zinc-900">{subsection.title}</h3>
                      <p className="mt-2 text-base leading-7 text-zinc-600">{subsection.paragraph}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
