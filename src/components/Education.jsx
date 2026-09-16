import { GraduationCap, CalendarDays } from "lucide-react";

export default function Education() {
  return (
    <section className="mt-8">
      {/* Section Heading */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-white">
          <GraduationCap size={15} />
        </div>

        <h2 className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
          Education
        </h2>

        <div className="h-px flex-1 bg-[#28744B]/30" />
      </div>

      {/* Education Items */}
      <div className="space-y-5">

        {/* University */}
        <div className="border-l-2 border-[#28744B]/30 pl-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-base font-bold text-zinc-900">
                Bachelor&apos;s Degree
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#28744B]">
                Rivers State University
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-zinc-500">
              <CalendarDays size={14} />

              <span>2024</span>
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Rivers State University, Nkpolu-Oroworukwo, Port Harcourt,
            Rivers State, Nigeria.
          </p>
        </div>

        {/* Frontend Training */}
        <div className="border-l-2 border-[#28744B]/30 pl-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-base font-bold text-zinc-900">
                Frontend Web Development Training
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#28744B]">
                Professional Training
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-zinc-500">
              <CalendarDays size={14} />

              <span>2026 - Present</span>
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Practical training in HTML, CSS, JavaScript, Bootstrap,
            Tailwind CSS, responsive web design, React, and Next.js.
          </p>
        </div>

      </div>
    </section>
  );
}