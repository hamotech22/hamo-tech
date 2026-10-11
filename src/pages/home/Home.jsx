import { useState } from "react";
import About from "../about/About";
import Blog from "../blog/Blog";
import ContactUs from "../contact/ContactUs";
import FAQ from "../faq/FAQ";
import Hero from "../hero/Hero";
import Loading from "../../components/loading/Loading";
// import Metrics from "../metrics/Metrics";
import Projects from "../projects/Projects";
import Services from "../services/Services";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Hero />
      <About />
      <Projects onLoadingChange={setLoading} />
      {/* <Metrics /> */}
      <Services />
      <Blog />
      <FAQ />
      <ContactUs />

      {loading && (
        <div className="fixed inset-0 z-[9999]">
          <Loading />
        </div>
      )}
    </>
  );
}
