import { BriefcaseBusiness, CalendarDays } from "lucide-react";

export default function Experience() {
  return (
    <section className="mt-7">
      {/* Section Heading */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-white">
          <BriefcaseBusiness size={15} />
        </div>

        <h2 className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
          Experience
        </h2>

        <div className="h-px flex-1 bg-[#28744B]/30" />
      </div>

      <div className="space-y-5">

        {/* Frontend Development */}
        <div className="border-l-2 border-[#28744B]/30 pl-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-base font-bold text-zinc-900">
                Frontend Web Developer
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#28744B]">
                Projects & Practical Experience
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-zinc-500">
              <CalendarDays size={14} />
              <span>2026 – Present</span>
            </div>
          </div>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
            <li>
              • Built responsive websites and web applications through
              hands-on frontend projects.
            </li>

            <li>
              • Developed interfaces using HTML, CSS, JavaScript, React,
              Next.js, Tailwind CSS, and Bootstrap.
            </li>

            <li>
              • Integrated APIs into web applications to retrieve and display
              dynamic data.
            </li>

            <li>
              • Used GitHub for version control and Vercel for deploying
              web projects.
            </li>

            <li>
              • Focused on clean layouts, responsive design, usability, and
              cross-device compatibility.
            </li>
          </ul>
        </div>

        {/* NYSC */}
        <div className="border-l-2 border-[#28744B]/30 pl-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-base font-bold text-zinc-900">
                Physics Teacher - NYSC
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#28744B]">
                National Youth Service Corps
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-zinc-500">
              <CalendarDays size={14} />
              <span>NYSC Service Year</span>
            </div>
          </div>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
            <li>
              • Prepared and delivered Physics lessons for secondary school
              students.
            </li>

            <li>
              • Created class exercises, tests, and examination questions
              based on the school curriculum.
            </li>

            <li>
              • Explained technical concepts clearly and adapted lessons to
              different levels of understanding.
            </li>

            <li>
              • Developed strong communication, organization, and
              problem-solving skills through classroom responsibilities.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}