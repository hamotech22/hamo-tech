import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import { resolveBlogImage } from "../../lib/projectImages";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function BlogCard({ post }) {
  const { t } = useLanguage();

  // ندمج الترجمة (لو موجودة) مع بيانات المقال
  const item = { ...post, ...(t.blog.posts?.[post.id] ?? {}) };

  return (
    <Link
      to={`/blog/${item.id}`}
      className={`group flex flex-col rounded-[2rem] bg-white p-3 ring-1 ring-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/10 ${focusRing}`}
    >
      {/* الصورة */}
      <div className="aspect-[5/4] overflow-hidden rounded-3xl bg-zinc-100">
        <img
          src={resolveBlogImage(item.image)}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* النصوص */}
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <time dateTime={item.isoDate} className="text-xs font-medium text-brand">
          {item.date}
        </time>

        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-brand">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">{item.excerpt}</p>

        {/* سهم */}
        <div className="mt-auto flex justify-end pt-5">
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-full bg-zinc-100 text-zinc-700 transition duration-300 group-hover:bg-brand group-hover:text-white rtl:-scale-x-100"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
              <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
