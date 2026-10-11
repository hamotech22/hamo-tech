import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand";

export default function BlogPost() {
  const { t } = useLanguage();
  const { id } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error("Failed to load blog posts:", error);
        setPosts([]);
      });
  }, []);

  if (posts === null) {
    return <p className="px-5 py-20 text-center text-zinc-600">{t.blog.loading}</p>;
  }

  const foundPost = posts.find((p) => String(p.id) === String(id));

  if (!foundPost) {
    return <Navigate to="/blog" replace />;
  }
  const post = { ...foundPost, ...(t.blog.posts?.[foundPost.id] ?? {}) };

  return (
    <article
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="30"
    >
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
          className={`inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-brand ${focusRing} rounded-md`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">
            ←
          </span>
          {t.blog.back}
        </Link>

        <div className="mt-8" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
          <time dateTime={post.isoDate} className="text-sm text-zinc-500">
            {post.date}
          </time>

          <h1 className="mt-3 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{post.excerpt}</p>
        </div>

        <div
          className="mt-10 aspect-5/3 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          <img src={post.image} alt={post.title} className="size-full object-cover" />
        </div>

        <div
          className="prose prose-zinc mt-10 max-w-none text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 [&_p]:mb-5 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-950"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
