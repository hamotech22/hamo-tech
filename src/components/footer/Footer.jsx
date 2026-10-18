import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import brandLogo from "../../assets/images/Hamo-Tech_Footer_Logo.png";
import { getCollection } from "../../lib/api";

const navLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

const legalLinks = [
  { key: "servicePolicy", href: "/service-policy" },
  { key: "terms", href: "/terms" },
];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Footer() {
  const { t } = useLanguage();
  const [socials, setSocial] = useState([]);

  useEffect(() => {
    getCollection("/socials")
      .then(setSocial)
      .catch((error) => console.error("Failed to load socials links:", error));
  }, []);

  return (
    <footer className="relative isolate w-full overflow-hidden border-t border-white/10 bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] px-5 pt-16 sm:px-6 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,#38bdf8_35%,#7dd3fc_65%,transparent)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <Link to="/" aria-label="Hamo-Tech home" className={`rounded-lg ${focusRing}`}>
            <img src={brandLogo} alt="Hamo-Tech" className="h-16 w-64 rounded-lg object-cover" />
          </Link>

          {/* Main menu */}
          <nav aria-label={t.footer.navigation} className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className={`rounded-full px-4 py-2 text-base text-zinc-300 transition hover:bg-white/5 hover:text-white ${focusRing}`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`grid size-11 place-items-center rounded-full border border-white/10 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white ${focusRing}`}
              >
                <svg viewBox={social.viewBox ?? "0 0 256 256"} aria-hidden="true" className="size-5 fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-white/10 py-8 text-sm text-zinc-400 sm:mt-16 md:flex-row md:justify-between">
          <div className="space-y-1 text-center md:text-start">
            <p>{t.footer.copyright}</p>
            <p>
              {t.footer.credit}{" "}
              <a
                href="mailto:hamotech22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand transition hover:text-white"
              >
                {t.nav.logo}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.key} to={link.href} className="transition hover:text-white">
                {t.footer[link.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
