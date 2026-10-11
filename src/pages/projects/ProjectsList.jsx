import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../context/useLanguage";

export default function ProjectsList() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Failed to load projects:", error));
  }, []);

  return (
    <section
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-5xl">
            {t.projects.listTitle}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {t.projects.listDescription}
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
