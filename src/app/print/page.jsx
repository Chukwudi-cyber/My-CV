import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function PrintCV() {
  return (
    <main className="print-cv">

      {/* PAGE 1 */}
      <div className="print-page">
        {/* Full Sidebar */}
        <div className="print-sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="print-content">
          <Header />
          <Summary />
          <Experience />
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="print-page">
        {/* Empty Green Sidebar */}
        <div className="print-sidebar print-sidebar-empty"></div>

        {/* Main Content */}
        <div className="print-content">
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

    </main>
  );
}