import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 pb-7">
      <div className="flex items-start justify-between gap-6">
        {/* Name and Title */}
        <div>
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
            OKEKE{" "}
            <span className="text-[#28744B]">
              CHUKWUDI
            </span>
          </h1>

          <h2 className="mt-2 text-xl font-bold text-zinc-800 sm:text-2xl">
            Frontend Web Developer
          </h2>
        </div>

        {/* Top Right */}
        <div className="hidden text-right sm:block">
          <div className="flex items-center justify-end gap-3">
            <div>
              <p className="text-xs font-medium text-zinc-500">
                Better Web
              </p>

              <p className="text-xs font-medium text-zinc-500">
                A Brighter Tomorrow
              </p>
            </div>

            <span className="h-3 w-3 rounded-full bg-[#20B965]" />
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600 sm:text-base">
        Building modern, responsive and user-friendly digital
        experiences that turn ideas into functional websites.
      </p>

      {/* Skill Tags */}
      <div className="mt-5 flex flex-wrap items-center gap-0 overflow-hidden rounded-xl bg-[#F0F7F3]">
        <span className="px-4 py-2.5 text-sm font-medium text-zinc-700">
          Frontend Development
        </span>

        <span className="text-[#28744B]">|</span>

        <span className="px-4 py-2.5 text-sm font-medium text-zinc-700">
          Responsive Design
        </span>

        <span className="text-[#28744B]">|</span>

        <span className="px-4 py-2.5 text-sm font-medium text-zinc-700">
          Web Applications
        </span>
      </div>

      {/* Availability */}
      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-zinc-600">
        <span className="h-2.5 w-2.5 rounded-full bg-[#20B965]" />

        <span>
          Open to Frontend Development opportunities
        </span>

        <ArrowUpRight
          size={16}
          className="text-[#28744B]"
        />
      </div>
    </header>
  );
}