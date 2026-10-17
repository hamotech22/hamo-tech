import { useEffect, useRef, useState } from "react";
import ReactPaginateModule from "react-paginate";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";

// حل مشكلة الـ default export مع Vite (react-paginate بتتحمل أحيانًا ككائن)
const ReactPaginate = ReactPaginateModule.default ?? ReactPaginateModule;

// أول كارت big بياخد عمودين، فـ 5 = كارت كبير + 4 عاديين (صفوف كاملة)
const PER_PAGE = 5;

const pageBase =
  "cursor-pointer grid size-10 place-items-center rounded-full text-sm font-medium tabular-nums transition";

export default function ProjectsList() {
  const { t } = useLanguage();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [page, setPage] = useState(0); // react-paginate بيبدأ من 0

  const listRef = useRef(null);

  useEffect(() => {
    getCollection("/projects")
      .then(setProjects)
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setLoadError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const pageCount = Math.ceil(projects.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = projects.slice(start, start + PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setPage(selected);
    // نرجع لأول الليستة بعد تغيير الصفحة
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden px-5 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* العنوان */}
        <div className="mb-12 max-w-2xl sm:mb-16" data-aos="fade-up">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand-accent sm:text-5xl lg:text-6xl">
            {t.projects.listTitle}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {t.projects.listDescription}
          </p>
        </div>

        {loadError && (
          <p role="alert" className="text-sm text-red-700">
            {t.projects.loadError}
          </p>
        )}

        {/* لودينج: كارتين رماديين */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="aspect-[3/2] animate-pulse rounded-[2rem] bg-zinc-200" />
            <div className="aspect-[3/2] animate-pulse rounded-[2rem] bg-zinc-200" />
          </div>
        )}

        {/* الكروت (أول كارت في كل صفحة أكبر) */}
        <div ref={listRef} className="grid scroll-mt-24 gap-6 sm:grid-cols-2">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} big={index === 0} />
          ))}
        </div>

        {/* الباجينيشن (مش بيظهر لو في صفحة واحدة بس) */}
        {pageCount > 1 && (
          <ReactPaginate
            forcePage={page}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            previousLabel={t.projects.prev}
            nextLabel={t.projects.next}
            breakLabel="…"
            renderOnZeroPageCount={null}
            // a11y
            ariaLabelBuilder={(n) => `${t.projects.page} ${n}`}
            nextAriaLabel={t.projects.next}
            previousAriaLabel={t.projects.prev}
            // ستايل
            containerClassName="mt-14 flex flex-wrap items-center justify-center gap-2"
            pageClassName=""
            pageLinkClassName={`${pageBase} bg-white text-zinc-700 ring-1 ring-zinc-900/10 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand`}
            activeLinkClassName="!bg-zinc-950 !text-white !ring-zinc-950"
            previousLinkClassName={`${pageBase} w-auto bg-white px-5 text-zinc-700 ring-1 ring-zinc-900/10 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand`}
            nextLinkClassName={`${pageBase} w-auto bg-white px-5 text-zinc-700 ring-1 ring-zinc-900/10 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand`}
            breakClassName="px-1 text-zinc-400"
            disabledClassName="opacity-40 pointer-events-none"
          />
        )}
      </div>
    </section>
  );
}