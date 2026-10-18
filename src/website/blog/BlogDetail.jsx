import { useEffect, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import profileImage from "../../assets/images/profile.jpeg";
import { resolveBlogImage } from "../../lib/projectImages";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function BlogDetail() {
  const { t } = useLanguage();
  const { id } = useParams();

  const [posts, setPosts] = useState(null); // null = لسه بيحمّل
  const [loadError, setLoadError] = useState(false);

  // useRef: شريط تقدم القراءة، بنغيّر عرضه مباشرة من غير re-render
  const progressRef = useRef(null);

  useEffect(() => {
    getCollection("/blogs")
      .then(setPosts)
      .catch((error) => {
        console.error("Failed to load blog posts:", error);
        setLoadError(true);
        setPosts([]);
      });
  }, []);

  // تحديث الشريط مع السكرول
  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      if (progressRef.current) {
        progressRef.current.style.width = `${percent}%`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (posts === null) {
    return <p className="px-5 py-20 text-center text-zinc-600">{t.blog.loading}</p>;
  }

  if (loadError) {
    return (
      <p role="alert" className="px-5 py-20 text-center text-sm text-red-700">
        {t.blog.loadError}
      </p>
    );
  }

  const foundPost = posts.find((p) => String(p.id) === String(id));

  if (!foundPost) {
    return <Navigate to="/blog" replace />;
  }

  const post = { ...foundPost, ...(t.blog.posts?.[foundPost.id] ?? {}) };

  return (
    <article className="relative w-full overflow-hidden px-5 py-20 sm:py-28 md:px-10 lg:px-16">
      {/* شريط تقدم القراءة */}
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <div ref={progressRef} className="h-full w-0 bg-brand-accent" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* رجوع */}
        <Link
          to="/blog"
          className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-600 ring-1 ring-zinc-900/10 transition hover:text-brand ${focusRing}`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">←</span>
          {t.blog.back}
        </Link>

        {/* العنوان */}
        <header className="mt-8" data-aos="fade-up">
          <time
            dateTime={post.isoDate}
            className="inline-flex rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand ring-1 ring-brand/20"
          >
            {post.date}
          </time>

          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-950 after:mt-5 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand-accent sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {post.excerpt}
          </p>

          {/* الكاتب */}
          {post.author && (
            <div className="mt-8 flex items-center gap-3">
              <img
                src={profileImage}
                alt={post.author.name}
                className="size-12 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <p className="text-sm font-medium text-zinc-950">{post.author.name}</p>
                <p className="mt-0.5 text-sm text-zinc-500">{post.authorRole ?? post.author.role}</p>
              </div>
            </div>
          )}
        </header>

        {/* الصورة */}
        <div className="mt-10 aspect-[5/3] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
          <img src={resolveBlogImage(post.image)} alt={post.title} className="size-full object-cover" />
        </div>

        {/* محتوى المقال (HTML جاي من الـ API) */}
        <div
          className="mt-8 rounded-[2rem] bg-white p-6 text-base leading-7 text-zinc-700 ring-1 ring-zinc-900/5 sm:p-10 sm:text-lg sm:leading-8 [&_a]:text-brand [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-950 sm:[&_h2]:text-2xl [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-950 [&_li]:mb-2 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:ps-6 [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:ps-6 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
