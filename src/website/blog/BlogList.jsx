import { useEffect, useRef, useState } from "react";
import ReactPaginateModule from "react-paginate";
import BlogCard from "./BlogCard";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import Reveal from "../../components/animation/Reveal";

// حل مشكلة الـ default export مع Vite (react-paginate بتتحمل أحيانًا ككائن)
const ReactPaginate = ReactPaginateModule.default ?? ReactPaginateModule;

// الجريد 3 أعمدة، فـ 6 = صفين كاملين
const PER_PAGE = 6;

const linkBase =
  "cursor-pointer grid size-10 place-items-center rounded-full bg-white text-sm font-medium tabular-nums text-zinc-700 ring-1 ring-zinc-900/10 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function BlogList() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [page, setPage] = useState(0); // react-paginate بيبدأ من 0

  const listRef = useRef(null);

  useEffect(() => {
    getCollection("/blogs")
      .then(setPosts)
      .catch((error) => {
        console.error("Failed to load blog posts:", error);
        setLoadError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const pageCount = Math.ceil(posts.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = posts.slice(start, start + PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setPage(selected);
    // نرجع لأول الليستة بعد تغيير الصفحة
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden px-5 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* العنوان */}
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl lg:text-6xl">
            {t.blog.listTitle}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {t.blog.listDescription}
          </p>
        </Reveal>

        {loadError && (
          <p role="alert" className="text-sm text-red-700">
            {t.blog.loadError}
          </p>
        )}

        {/* لودينج: 3 كروت رمادية */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="aspect-[4/5] animate-pulse rounded-[2rem] bg-zinc-200" />
            <div className="aspect-[4/5] animate-pulse rounded-[2rem] bg-zinc-200" />
            <div className="aspect-[4/5] animate-pulse rounded-[2rem] bg-zinc-200" />
          </div>
        )}

        {/* المقالات */}
        <div ref={listRef} className="grid scroll-mt-24 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard key={post.id} post={post} />
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
            previousLabel={t.blog.prev}
            nextLabel={t.blog.next}
            breakLabel="…"
            renderOnZeroPageCount={null}
            ariaLabelBuilder={(n) => `${t.blog.page} ${n}`}
            previousAriaLabel={t.blog.prev}
            nextAriaLabel={t.blog.next}
            containerClassName="mt-14 flex flex-wrap items-center justify-center gap-2"
            pageLinkClassName={linkBase}
            activeLinkClassName="!bg-zinc-950 !text-white !ring-zinc-950"
            previousLinkClassName={`${linkBase} !w-auto px-5`}
            nextLinkClassName={`${linkBase} !w-auto px-5`}
            breakClassName="px-1 text-zinc-400"
            disabledClassName="opacity-40 pointer-events-none"
          />
        )}
      </div>
    </section>
  );
}