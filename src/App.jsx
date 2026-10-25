import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Loading from "./components/loading/Loading";
import WebsiteRoutes from "./website/routes/WebsiteRoutes";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(location.pathname, window.location.origin).href;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 10,
      easing: "ease-out-cubic",
    });

    const timer = setTimeout(() => {
      setLoading(false);
      AOS.refresh();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="*" element={<WebsiteRoutes />} />
    </Routes>
  );
}
