import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import profileImage from "../../assets/images/profile.jpeg";
import { resolveBlogImage } from "../../lib/projectImages";
import Reveal from "../../components/animation/Reveal";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

// الـ ids بتاعة المقالات اللي تظهر في الهوم (غير المقال المميز)
const HOME_POST_IDS = [2, 3, 4];

export default function Blog() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    getCollection("/blogs")
      .then(setPosts)
      .catch((error) => {
        console.error("Failed to load blog posts:", error);
        setLoadError(true);
      });
  }, []);

  // المقال المميز + باقي المقالات
  const featuredPost = posts.find((post) => post.featured);
  const otherPosts = HOME_POST_IDS
    .map((id) => posts.find((post) => String(post.id) === String(id)))
    .filter((post) => post && !post.featured);

  // ترجمة المقال المميز (لو موجودة)
  const translation = featuredPost ? t.blog.posts?.[featuredPost.id] : null;
  const featured = featuredPost && { ...featuredPost, ...translation };
  const authorRole = translation?.authorRole ?? featuredPost?.author?.role;

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 px-5 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        {/* العنوان + زر عرض الكل */}
        <Reveal
          className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.blog.homeTitle}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              {t.blog.homeDescription}
            </p>
          </div>

          <Link
            to="/blog"
            className={`group inline-flex w-fit items-center gap-2.5 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand ${focusRing}`}
          >
            {t.blog.viewAll}
            <svg
              viewBox="0 0 256 256"
              aria-hidden="true"
              className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
            >
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </Reveal>

        {loadError && (
          <p role="alert" className="mb-8 text-sm text-red-700">
            {t.blog.loadError}
          </p>
        )}

        {/* المقال المميز */}
        {featured && (
          <Link
            to={`/blog/${featured.id}`}
            className={`group grid gap-6 rounded-[2rem] bg-white p-3 ring-1 ring-zinc-900/5 transition duration-300 hover:shadow-2xl hover:shadow-zinc-900/10 md:grid-cols-[1.3fr_1fr] md:items-center lg:gap-10 ${focusRing}`}
          >
            <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-zinc-100">
              <img
                src={resolveBlogImage(featured.image)}
                alt={featured.title}
                className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col px-3 pb-3 md:py-4 lg:pe-8">
              <time dateTime={featured.isoDate} className="text-sm font-medium text-brand">
                {featured.date}
              </time>

              <h3 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-brand sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-4 line-clamp-4 text-pretty text-base leading-7 text-zinc-600">
                {featured.excerpt}
              </p>

              {/* الكاتب */}
              <div className="mt-8 flex items-center gap-3 border-t border-zinc-200 pt-6">
                <img
                  src={profileImage}
                  alt={featured.author.name}
                  className="size-11 rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <p className="text-sm font-medium text-zinc-950">{featured.author.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">{authorRole}</p>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* باقي المقالات */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}