import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
    >
      <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  );
}

function localizePost(post, translations) {
  const translation = translations?.[post.id];
  if (!translation) return post;

  const { authorRole, ...rest } = translation;
  const localized = { ...post, ...rest };

  if (post.author && authorRole) {
    localized.author = { ...post.author, role: authorRole };
  }
  return localized;
}

export default function Blog() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Failed to load blog posts:", error));
  }, []);

  const translatedPosts = posts.map((post) => localizePost(post, t.blog.posts));

  const featured = translatedPosts.find((post) => post.featured);
  const otherPosts = translatedPosts.filter((post) => !post.featured);

  return (
    <section className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-out-cubic" data-aos-offset="30">
            <h2 className="text-balance text-4xl font-semibold leading-[1.2] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
              {t.blog.homeTitle}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{t.blog.homeDescription}</p>
          </div>

          <Link
            to="/blog"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-offset="30"
            className={`group inline-flex w-fit items-center gap-2.5 rounded-full border border-brand/40 px-5 py-2.5 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}
          >
            {t.blog.viewAll}
            <ArrowIcon />
          </Link>
        </div>

        {/* Featured post */}
        {featured && (
          <Link
            to={`/blog/${featured.id}`}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-offset="30"
            className={`group grid grid-cols-1 items-center gap-6 rounded-3xl bg-zinc-50 p-3 ring-1 ring-zinc-900/5 transition duration-300 hover:bg-zinc-100/70 sm:p-4 md:grid-cols-[1.45fr_1fr] lg:gap-10 ${focusRing}`}
          >
            <div className="aspect-3/2 overflow-hidden rounded-2xl bg-zinc-200">
              <img
                src={featured.image}
                alt={featured.title}
                className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col px-2 pb-2 sm:px-4 md:py-4 lg:pe-8">
              <h3 className="text-balance text-2xl font-semibold leading-[1.3] tracking-tight text-zinc-950 transition-colors group-hover:text-brand sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-4 text-pretty text-base leading-7 text-zinc-600">{featured.excerpt}</p>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="size-11 rounded-full object-cover ring-2 ring-white"
                  />

                  <div>
                    <p className="text-sm font-medium text-zinc-950">{featured.author.name}</p>
                    <p className="mt-0.5 text-sm text-zinc-500">{featured.author.role}</p>
                  </div>
                </div>

                <time dateTime={featured.isoDate} className="text-sm text-zinc-500">
                  {featured.date}
                </time>
              </div>
            </div>
          </Link>
        )}

        {/* Other posts */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {otherPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              data-aos-offset="30"
              className={`group flex flex-col rounded-2xl ${focusRing}`}
            >
              <div className="aspect-5/4 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-brand">
                {post.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>

              <time dateTime={post.isoDate} className="mt-auto pt-5 text-sm text-zinc-500">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
