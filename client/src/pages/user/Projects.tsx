import UserNav from "@/components/UserNav";
import {
  FolderGit2,
  Plus,
  ExternalLink,
  Eye,
  TrendingUp,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NexGen FinTrack Dashboard",
      description:
        "A comprehensive financial monitoring tool designed for modern SaaS businesses. Features real-time data visualization, multi-currency support, and automated reporting modules using high-performance state management.",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Production",
    },
    {
      id: 2,
      title: "SmartHome IoT Central",
      description:
        "An enterprise-grade IoT gateway facilitating seamless communication between residential smart devices. Focused on security and low-latency data transmission with a robust backend architecture.",
      tags: ["Node.js", "MQTT", "GraphQL", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Featured",
    },
    {
      id: 3,
      title: "LogiChain AI Optimizer",
      description:
        "Machine learning model for optimizing international shipping routes. Reduced fuel consumption by 18% in pilot tests by analyzing weather patterns and port congestion in real-time.",
      tags: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Production",
    },
    {
      id: 4,
      title: "CareSync Patient Portal",
      description:
        "Secure patient record management system compliant with health data regulations. Streamlines appointment scheduling and telemedicine consultations for multi-specialty clinics.",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Featured",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] flex font-sans">
      <UserNav />

      <main className="flex-1 ml-64 p-8 min-w-0">
        <div className="max-w-[1360px] mx-auto w-full space-y-8 pb-16">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111F19] border border-[#20352B] text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Candidate Portfolio</span>
              </div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight">
                Projects & Case Studies
              </h1>
              <p className="text-xs text-[#9AAEA3] mt-1">
                Showcase your technical architecture, open-source work, and live web applications.
              </p>
            </div>

            <button className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95">
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Total Projects
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">{projects.length}</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center text-[#34D399] shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Portfolio Views
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">842</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Recruiter Inquiries
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">+14%</p>
              </div>
            </div>
          </div>

          {/* Projects Grid 2 Cols */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#111F19] p-6 sm:p-7 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-[#22C55E]/40 transition-all flex flex-col justify-between space-y-5 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#162820] border border-[#20352B] flex items-center justify-center text-[#22C55E] shrink-0 font-bold">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#F1F5F2] group-hover:text-[#22C55E] transition-colors">
                          {proj.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold">
                          {proj.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#9AAEA3] leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-[#0D1814] border border-[#20352B] text-[11px] font-semibold text-[#F1F5F2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#20352B] flex items-center justify-between">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors"
                  >
                    {/* <Github className="w-4 h-4" /> */}
                    <span>Source Code</span>
                  </a>

                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#22C55E] hover:text-[#34D399] transition-colors"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;