import useLanguage from "../../context/useLanguage";
import Reveal from "../../components/animation/Reveal";

export default function LegalPage({ documentKey }) {
  const { t } = useLanguage();
  const document = t.legal[documentKey];

  return (
    <Reveal
      as="article"
      duration={0.7}
      offset={30}
      className="bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal
          as="header"
          duration={0.7}
          offset={30}
          className="mb-12 border-b border-zinc-200 pb-8 sm:mb-14"
          delay={0.1}
        >
          <p className="text-sm font-medium text-brand">{t.legal.label}</p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-4xl lg:text-5xl">
            {document.title}
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {document.introduction}
          </p>
        </Reveal>

        <div className="space-y-10">
          {document.sections.map((section, index) => (
            <Reveal
              as="section"
              key={section.title}
              duration={0.65}
              offset={30}
              delay={index * 0.08}
            >
              <h2 className="text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl lg:text-2xl">
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
                    <Reveal
                      key={subsection.title}
                      duration={0.6}
                      offset={30}
                      delay={index * 0.08 + subsectionIndex * 0.04}
                    >
                      <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">{subsection.title}</h3>
                      <p className="mt-2 text-base leading-7 text-zinc-600">{subsection.paragraph}</p>
                    </Reveal>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
