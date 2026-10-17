import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { LangContext } from "../../context/LangContext";
import brandLogo from "../../assets/images/1__2.png";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
];

// روابط القائمة المنسدلة الخاصة بالخدمات
const serviceLinks = [
  { key: "servicesOverview", href: "/services" },
  { key: "servicePolicy", href: "/service-policy" },
];

// الخلفية الغامقة (بنستخدمها في الشريط والقوائم)
const panel =
  "border border-white/10 bg-[linear-gradient(110deg,#071522_0%,#102436_55%,#111b2b_100%)] shadow-xl shadow-slate-950/25 backdrop-blur-2xl";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

// شكل الرابط: بيتلوّن لو هو الصفحة الحالية
const linkClass = (isActive, shape) =>
  `${shape} px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${focusRing} ${
    isActive ? "bg-white/10 text-white" : "text-zinc-300"
  }`;

// سهم صغير بيتقلب لما القائمة تتفتح
function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
      className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useContext(LangContext);

  const [menuOpen, setMenuOpen] = useState(false); // قائمة الموبايل
  const [servicesOpen, setServicesOpen] = useState(false); // قائمة الخدمات

  // useRef: عشان نعرف لو المستخدم دوس برا الـ Navbar
  const headerRef = useRef(null);

  // قفل القوائم عند الضغط برا الـ Navbar أو على Esc
  useEffect(() => {
    const closeAll = () => {
      setMenuOpen(false);
      setServicesOpen(false);
    };

    const handleClickOutside = (event) => {
      if (!headerRef.current.contains(event.target)) closeAll();
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") closeAll();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-3">
      <div className="relative mx-auto max-w-7xl">
        {/* توهج خفيف حوالين الشريط */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-full bg-[linear-gradient(100deg,transparent_12%,#38bdf8_50%,#7dd3fc_88%,transparent)] opacity-20 blur-xl"
        />

        <nav
          aria-label={t.nav.mainLabel}
          className={`flex h-14 items-center justify-between rounded-full ps-3 pe-2 sm:h-16 sm:ps-5 sm:pe-3 ${panel}`}
        >
          {/* اللوجو */}
          <Link to="/" aria-label="Hamo-Tech home" className={`rounded-lg ${focusRing}`}>
            <img src={brandLogo} alt="Hamo-Tech" className="h-10 w-36 rounded-lg object-cover sm:h-12 sm:w-48" />
          </Link>

          {/* ===== الروابط (شاشات كبيرة) ===== */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.key === "services" ? (
                <div key={item.key} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`${linkClass(false, "rounded-full")} flex items-center gap-1.5`}
                  >
                    {t.nav.services}
                    <Chevron open={servicesOpen} />
                  </button>

                  {servicesOpen && (
                    <div className={`absolute start-0 top-full mt-3 min-w-56 rounded-2xl p-2 ${panel}`}>
                      {serviceLinks.map((link) => (
                        <NavLink
                          key={link.key}
                          to={link.href}
                          onClick={closeAll}
                          className={({ isActive }) => `block ${linkClass(isActive, "rounded-xl")}`}
                        >
                          {t.nav[link.key]}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => linkClass(isActive, "rounded-full")}
                >
                  {t.nav[item.key]}
                </NavLink>
              ),
            )}
          </div>

          {/* ===== الأزرار ===== */}
          <div className="flex items-center gap-2">
            {/* تبديل اللغة */}
            <button
              type="button"
              dir="ltr"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              aria-label={t.nav.changeLanguage}
              className={`relative grid h-8 w-18 grid-cols-2 items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold sm:h-9 sm:w-20 ${focusRing}`}
            >
              {/* الدايرة المتحركة */}
              <span
                aria-hidden="true"
                className={`absolute inset-y-1 start-1 w-[calc(50%-4px)] rounded-full bg-brand shadow-sm shadow-brand/30 transition-transform duration-300 ease-out ${
                  lang === "ar" ? "translate-x-full" : ""
                }`}
              />
              <span className={`relative z-10 text-center transition-colors duration-300 ${lang === "en" ? "text-white" : "text-zinc-400"}`}>
                EN
              </span>
              <span className={`relative z-10 text-center transition-colors duration-300 ${lang === "ar" ? "text-white" : "text-zinc-400"}`}>
                AR
              </span>
            </button>

            {/* زر التواصل */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1 rounded-full bg-brand px-3 py-2 text-xs font-medium text-white shadow-md shadow-brand/30 transition hover:bg-brand-hover active:scale-[0.98] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              {t.nav.cta}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
                className="size-4 transition duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              >
                <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* زر قائمة الموبايل */}
            <button
              type="button"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid size-10 place-items-center rounded-full text-zinc-200 transition hover:bg-white/10 sm:size-11 lg:hidden"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="size-5 sm:size-6">
                {menuOpen ? (
                  <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 6h13M3.5 10h13M3.5 14h13" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* ===== قائمة الموبايل ===== */}
        {menuOpen && (
          <div className={`absolute inset-x-0 top-full mt-2 rounded-3xl p-2 lg:hidden ${panel}`}>
            {navItems.map((item) =>
              item.key === "services" ? (
                <div key={item.key}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`${linkClass(false, "rounded-xl")} flex w-full items-center justify-between text-start`}
                  >
                    {t.nav.services}
                    <Chevron open={servicesOpen} />
                  </button>

                  {servicesOpen && (
                    <div className="ms-3 border-s border-white/10 ps-2">
                      {serviceLinks.map((link) => (
                        <NavLink
                          key={link.key}
                          to={link.href}
                          onClick={closeAll}
                          className={({ isActive }) => `block ${linkClass(isActive, "rounded-xl")}`}
                        >
                          {t.nav[link.key]}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={closeAll}
                  className={({ isActive }) => `block ${linkClass(isActive, "rounded-xl")}`}
                >
                  {t.nav[item.key]}
                </NavLink>
              ),
            )}
          </div>
        )}
      </div>
    </header>
  );
}