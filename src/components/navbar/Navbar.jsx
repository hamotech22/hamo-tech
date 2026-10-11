import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";
import brandLogo from "../../assets/images/1__2.png";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
];

const desktopLink =
  "rounded-full px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const mobileLink = "block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white";

function Logo() {
  return (
    <Link to="/" aria-label="Hamo-Tech home" className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
      <img src={brandLogo} alt="Hamo-Tech" className="h-12 w-48 rounded-lg object-cover sm:h-14 sm:w-56" />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const { lang, setLang, t } = useContext(LangContext);
  const close = () => {
    setOpen(false);
    setServicesOpen(false);
    setDesktopServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-full bg-[linear-gradient(100deg,transparent_12%,#38bdf8_50%,#7dd3fc_88%,transparent)] opacity-20 blur-xl"
        />
        <nav
          aria-label={t.nav.mainLabel}
          className="relative isolate flex h-16 items-center justify-between overflow-visible rounded-full border border-white/10 bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] ps-4 pe-2 shadow-xl shadow-slate-950/20 backdrop-blur-2xl sm:ps-5"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -start-10 top-0 -z-10 size-28 rounded-full bg-brand/20 blur-3xl" />
          <span aria-hidden="true" className="pointer-events-none absolute -end-8 -top-8 -z-10 size-24 rounded-full bg-sky-300/10 blur-3xl" />

          <Logo />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.key === "services" ? (
                <div key={item.key} className="relative">
                  <button
                    type="button"
                    aria-expanded={desktopServicesOpen}
                    aria-haspopup="true"
                    onClick={() => setDesktopServicesOpen((previous) => !previous)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") setDesktopServicesOpen(false);
                    }}
                    className={`${desktopLink} flex items-center gap-1.5`}
                  >
                    {t.nav.services}
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                      className={`size-3.5 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {desktopServicesOpen && (
                    <div className="absolute start-0 top-full z-50 mt-3 min-w-56 rounded-2xl border border-white/10 bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] p-2 shadow-xl shadow-slate-950/25 backdrop-blur-2xl">
                      <Link to="/services" onClick={close} className={mobileLink}>
                        {t.nav.servicesOverview}
                      </Link>
                      <Link to="/service-policy" onClick={close} className={mobileLink}>
                        {t.nav.servicePolicy}
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.key} to={item.href} className={desktopLink}>
                  {t.nav[item.key]}
                </Link>
              ),
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              dir="ltr"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              aria-label={t.nav.changeLanguage}
              className="relative grid h-9 w-22 grid-cols-2 items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-1 start-1 w-[calc(50%-4px)] rounded-full bg-brand shadow-sm shadow-brand/30 transition-transform duration-300 ease-out ${
                  lang === "ar" ? "translate-x-full" : ""
                }`}
              />
              <span
                className={`relative z-10 text-center transition-colors duration-300 ${lang === "en" ? "text-white" : "text-zinc-400"}`}
              >
                EN
              </span>
              <span
                className={`relative z-10 text-center transition-colors duration-300 ${lang === "ar" ? "text-white" : "text-zinc-400"}`}
              >
                AR
              </span>
            </button>

            <Link
              to="/contact"
              className="group/cta inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-brand/30 transition hover:bg-brand-hover active:scale-[0.98]"
            >
              {t.nav.cta}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
                className="size-4 transition duration-200 group-hover/cta:translate-x-0.5 rtl:rotate-180 rtl:group-hover/cta:-translate-x-0.5"
              >
                <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
              className="grid size-10 place-items-center rounded-full text-zinc-200 transition hover:bg-white/10 lg:hidden"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="size-5">
                {open ? (
                  <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 6h13M3.5 10h13M3.5 14h13" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-white/10 bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] p-2 shadow-xl shadow-slate-950/25 backdrop-blur-2xl transition duration-200 lg:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          {navItems.map((item) =>
            item.key === "services" ? (
              <div key={item.key}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((previous) => !previous)}
                  className={`${mobileLink} flex w-full items-center justify-between text-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
                >
                  {t.nav.services}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                    className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ms-3 border-s border-white/10 ps-2">
                    <Link to="/services" onClick={close} className={mobileLink}>
                      {t.nav.servicesOverview}
                    </Link>
                    <Link to="/service-policy" onClick={close} className={mobileLink}>
                      {t.nav.servicePolicy}
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.key} to={item.href} onClick={close} className={mobileLink}>
                {t.nav[item.key]}
              </Link>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
