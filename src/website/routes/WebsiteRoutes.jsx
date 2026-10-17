import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BackToTop from "../../components/backToTop/BackToTop";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import About from "../about/About";
import BlogDetail from "../blog/BlogDetail";
import BlogList from "../blog/BlogList";
import CTA from "../cta/CTA";
import Home from "../home/Home";
import LegalPage from "../legal/LegalPage";
import ProjectDetail from "../projects/ProjectDetail";
import ProjectsList from "../projects/ProjectsList";
import Services from "../services/Services";

export default function WebsiteRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<ProjectsList />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Navigate to="/service-policy" replace />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/service-policy" element={<LegalPage documentKey="servicePolicy" />} />
        <Route path="/terms" element={<LegalPage documentKey="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}