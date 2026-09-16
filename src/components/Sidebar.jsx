import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Sidebar() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Design",
  ];

  const tools = [
    {
      name: "VS Code",
      icon: VscVscode,
      color: "text-blue-400",
    },
    
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-white",
    },

    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
    },
    
  ];

  return (
    <aside className="bg-[#12372A] p-6 text-white sm:p-8">

      {/* Profile */}
      <div className="text-center">
        <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-green-400/80 bg-white">
          <img
            src="/profile/profile.jpg"
            alt="Okeke Chukwudi"
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="mt-5 text-xl font-bold">
          Okeke Chukwudi
        </h2>

        <p className="mt-1 text-sm text-green-200">
          Frontend Web Developer
        </p>
      </div>

      {/* Contact */}
      <div className="mt-10">
        <h3 className="mb-4 border-b border-green-300/40 pb-2 text-sm font-bold uppercase tracking-widest">
          Contact
        </h3>

        <div className="space-y-4 text-sm">

          <a
            href="mailto:okekechukwudi2001@gmail.com"
            className="flex items-center gap-3 transition hover:text-green-200"
          >
            <Mail
              size={18}
              className="shrink-0 text-green-300"
            />

            <span className="break-all">
              okekechukwudi2001@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-3">
            <Phone
              size={18}
              className="shrink-0 text-green-300"
            />

            <span>
              Phone available on request
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={18}
              className="shrink-0 text-green-300"
            />

            <span>
              Nigeria
            </span>
          </div>

          <a
            href="https://kudi-tech-portfolio-e7x5.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-green-200"
          >
            <Globe
              size={18}
              className="shrink-0 text-green-300"
            />

            <span>
              Portfolio
            </span>
          </a>

          <a
            href="https://github.com/Chukwudi-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-green-200"
          >
            <FaGithub
              size={18}
              className="shrink-0 text-green-300"
            />

            <span>
              GitHub
            </span>
          </a>

        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-10">
        <h3 className="mb-4 border-b border-green-300/40 pb-2 text-sm font-bold uppercase tracking-widest">
          Technical Skills
        </h3>

        <div className="space-y-3 text-sm">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-3"
            >
              {/* Small green triangle */}
              <span className="h-0 w-0 shrink-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-green-400" />

              <span>
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mt-10">
        <h3 className="mb-4 border-b border-green-300/40 pb-2 text-sm font-bold uppercase tracking-widest">
          Tools & Platforms
        </h3>

        <div className="grid grid-cols-4 gap-2">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                title={tool.name}
                className="flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/15"
              >
                <Icon
                  size={25}
                  className={tool.color}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote */}
      <div className="mt-10 border-t border-white/20 pt-6">
        <p className="text-sm italic leading-6 text-green-100">
          “Build with purpose. Create with passion. Keep learning.”
        </p>

        <p className="mt-3 text-xs font-semibold tracking-widest text-green-300">
          BUILD • CREATE • SOLVE • REPEAT
        </p>
      </div>

    </aside>
  );
}