import { useLayoutEffect, useMemo, useState } from "react";
import { LangContext } from "./LangContext";
import texts from "../locales/texts";

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(() => (window.localStorage.getItem("hreka-language") === "ar" ? "ar" : "en"));
  const value = useMemo(() => ({ lang, setLang, t: texts[lang] }), [lang]);

  useLayoutEffect(() => {
    window.localStorage.setItem("hreka-language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "    حمو تكنولوجي | مصمم ومطور مواقع ويب" : "hamotech | full stack web developer";
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
