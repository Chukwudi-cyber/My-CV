import { ExternalLink, FolderCode } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "KudiShop",
      type: "E-Commerce Web Application",
      image: "/projects/kudishop.png",
      description:
        "A multi-vendor e-commerce marketplace with product browsing, search, categories, product details, cart functionality, wishlist, and checkout interface.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      link: "https://kudishop-kyfx.vercel.app",
    },
    {
      title: "CinPage",
      type: "Movie Discovery Web Application",
      image: "/projects/cinpage.png",
      description:
        "A movie discovery application using the TMDB API to display popular movies, search for specific movies, and provide movie trailer previews.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TMDB API"],
      link: "https://cin-page-mt2l.vercel.app",
    },
    {
      title: "KudiTech Portfolio",
      type: "Personal Portfolio Website",
      image: "/projects/kuditech-portfolio.png",
      description:
        "A responsive personal portfolio website created to showcase frontend development skills, services, projects, and professional information.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      link: "https://kudi-tech-portfolio-e7x5.vercel.app",
    },
  ];

  return (
    <section className="mt-8">
      {/* Section Heading */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-white">
          <FolderCode size={15} />
        </div>

        <h2 className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
          Featured Projects
        </h2>

        <div className="h-px flex-1 bg-[#28744B]/30" />
      </div>

      {/* Project Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[#28744B]/40 hover:shadow-sm"
          >
            {/* Project Image */}
            <div className="h-36 overflow-hidden bg-zinc-100">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#28744B]">
                {project.type}
              </p>

              <div className="mt-1 flex items-start justify-between gap-3">
                <h3 className="text-base font-bold text-zinc-900">
                  {project.title}
                </h3>

              </div>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#F0F7F3] px-2.5 py-1 text-[10px] font-semibold text-[#28744B]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#28744B] transition-all hover:gap-2.5"
              >
                View Project
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}