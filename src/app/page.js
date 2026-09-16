import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 px-3 py-5 sm:px-6 sm:py-8">
      <div className="cv-container mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl">
        
        <div className="cv-layout grid md:grid-cols-[270px_1fr] lg:grid-cols-[300px_1fr]">
          
          <Sidebar />

          <div className="min-w-0 p-5 sm:p-7 lg:p-9">
            <Header />
            <Summary />
            <Experience />
            <Projects />
            <Education />

            <footer className="mt-8 border-t border-zinc-200 pt-4 text-center">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#28744B]">
                BUILD • CREATE • SOLVE • REPEAT
              </p>

              <p className="mt-1.5 text-[11px] text-zinc-400">
                Frontend Web Developer
              </p>
            </footer>
          </div>

        </div>
      </div>
    </main>
  );
}
