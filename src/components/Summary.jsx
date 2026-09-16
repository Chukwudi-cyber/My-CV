import { UserRound } from "lucide-react";

export default function Summary() {
  return (
    <section className="mt-7">
      {/* Section Heading */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-white">
          <UserRound size={15} />
        </div>

        <h2 className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
          Professional Summary
        </h2>

        <div className="h-px flex-1 bg-[#28744B]/30" />
      </div>

      {/* Summary Content */}
      <div className="pl-0">
        <p className="text-sm leading-7 text-zinc-600 sm:text-[15px]">
          Frontend Web Developer with practical experience building modern,
          responsive, and user-friendly websites and web applications.
          Skilled in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
          Bootstrap, and responsive web design. I enjoy turning ideas and
          designs into functional digital experiences while continuously
          improving my development skills through hands-on projects.
        </p>
      </div>
    </section>
  );
}