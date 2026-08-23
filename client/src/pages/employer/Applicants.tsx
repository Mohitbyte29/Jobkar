import EmployerNav from "@/components/EmployerNav";
import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  Filter,
  Share2,
  ChevronRight,
  MapPin,
  Star,
  Calendar,
  CheckCircle2,
  Clock,
  Briefcase,
  SlidersHorizontal,
} from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  role: string;
  currentCompany: string;
  matchScore: number;
  experience: string;
  location: string;
  status: "applied" | "screening" | "interview" | "offered";
  skills: string[];
  appliedDate: string;
}

const Applicants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Alexandria Chen",
      role: "Lead Product Designer",
      currentCompany: "Ex-Meta",
      matchScore: 96,
      experience: "8Y EXP",
      location: "Bengaluru (Remote)",
      status: "applied",
      skills: ["Figma", "Design Systems", "User Research"],
      appliedDate: "Today",
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Senior Full-Stack Engineer",
      currentCompany: "Ex-Stripe",
      matchScore: 92,
      experience: "6Y EXP",
      location: "San Francisco, CA",
      status: "applied",
      skills: ["React", "TypeScript", "Node.js"],
      appliedDate: "Yesterday",
    },
    {
      id: 3,
      name: "Sienna Williams",
      role: "Staff Product Architect",
      currentCompany: "Ex-Airbnb",
      matchScore: 98,
      experience: "10Y EXP",
      location: "Remote (Global)",
      status: "screening",
      skills: ["Microfrontends", "Go", "AWS"],
      appliedDate: "2 days ago",
    },
    {
      id: 4,
      name: "Devon Vance",
      role: "Principal Systems Designer",
      currentCompany: "Ex-Uber",
      matchScore: 94,
      experience: "7Y EXP",
      location: "London, UK",
      status: "interview",
      skills: ["Distributed Systems", "Kubernetes"],
      appliedDate: "3 days ago",
    },
    {
      id: 5,
      name: "Kiran Patel",
      role: "Senior Frontend Lead",
      currentCompany: "Ex-Razorpay",
      matchScore: 99,
      experience: "9Y EXP",
      location: "Bengaluru, India",
      status: "offered",
      skills: ["Next.js", "WebGL", "Performance"],
      appliedDate: "1 week ago",
    },
  ];

  const columns = [
    { id: "applied", label: "Applied", color: "bg-[#9AAEA3]" },
    { id: "screening", label: "Screening", color: "bg-[#F59E0B]" },
    { id: "interview", label: "Interview", color: "bg-[#22C55E]" },
    { id: "offered", label: "Offer Extended", color: "bg-[#34D399]" },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="bg-[#07110D] text-[#F1F5F2] min-h-screen flex selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <EmployerNav />

      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* TopAppBar */}
        <header className="w-full border-b border-[#20352B] sticky top-0 z-20 bg-[#111F19]/90 backdrop-blur-md h-16 flex justify-between items-center px-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none transition-all"
                placeholder="Search candidates by name, skill, or role..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814] rounded-xl transition-colors relative cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-[#111F19]" />
            </button>
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814] rounded-xl transition-colors cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-[#20352B] mx-1" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-[#F1F5F2] leading-tight">
                  Alexander Thorne
                </p>
                <p className="text-[10px] text-[#9AAEA3] uppercase tracking-wider font-semibold">
                  Head of Recruitment
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] font-bold text-xs">
                AT
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-[1440px] w-full mx-auto overflow-y-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#22C55E] mb-2">
                <span>Job Postings</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
                <span className="text-[#F1F5F2]">Senior Product Designer (#3942)</span>
              </div>
              <h2 className="text-3xl font-black text-[#F1F5F2] tracking-tight">
                Candidate Pipeline
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111F19] hover:bg-[#162820] border border-[#20352B] rounded-xl text-xs font-bold text-[#F1F5F2] transition-colors cursor-pointer">
                <SlidersHorizontal className="w-4 h-4 text-[#22C55E]" />
                <span>Filters</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] rounded-xl text-xs font-extrabold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer active:scale-95">
                <Share2 className="w-4 h-4" />
                <span>Share Pipeline</span>
              </button>
            </div>
          </div>

          {/* Quick Filter Pill Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#111F19] rounded-xl border border-[#20352B] text-xs">
              <span className="text-[#9AAEA3] font-bold">Experience:</span>
              <select
                className="bg-transparent text-[#F1F5F2] font-semibold outline-none cursor-pointer"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option value="all" className="bg-[#111F19]">All Levels</option>
                <option value="5+" className="bg-[#111F19]">5+ Years</option>
                <option value="8+" className="bg-[#111F19]">8+ Years</option>
              </select>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-[#111F19] rounded-xl border border-[#20352B] text-xs">
              <span className="text-[#9AAEA3] font-bold">Required Skills:</span>
              <div className="flex gap-1.5">
                <span className="bg-[#22C55E]/15 text-[#22C55E] px-2 py-0.5 rounded-md text-[10px] font-bold">
                  FIGMA
                </span>
                <span className="bg-[#22C55E]/15 text-[#22C55E] px-2 py-0.5 rounded-md text-[10px] font-bold">
                  REACT
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-[#111F19] rounded-xl border border-[#20352B] text-xs">
              <span className="text-[#9AAEA3] font-bold">Match Score:</span>
              <span className="text-[#22C55E] font-bold">90%+ Affinity</span>
            </div>
          </div>

          {/* Kanban Board 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8">
            {columns.map((col) => {
              const colCandidates = filteredCandidates.filter((c) => c.status === col.id);
              return (
                <div
                  key={col.id}
                  className="bg-[#0D1814] rounded-3xl border border-[#20352B] p-4 flex flex-col gap-3 min-h-[520px]"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-[#20352B]">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#F1F5F2]">
                        {col.label}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#111F19] border border-[#20352B] text-[10px] font-bold text-[#9AAEA3]">
                      {colCandidates.length}
                    </span>
                  </div>

                  {/* Candidate Cards in Column */}
                  <div className="space-y-3 flex-1 overflow-y-auto">
                    {colCandidates.map((candidate) => (
                      <div
                        key={candidate.id}
                        className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] hover:border-[#22C55E]/50 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] space-y-3"
                      >
                        <div className="flex justify-between items-start">
                          <div className="w-10 h-10 rounded-full bg-[#162820] border border-[#20352B] flex items-center justify-center text-xs font-bold text-[#F1F5F2]">
                            {candidate.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <span className="px-2.5 py-1 bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-[11px] font-extrabold rounded-full">
                            {candidate.matchScore}% Match
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-[#F1F5F2]">
                            {candidate.name}
                          </h4>
                          <p className="text-xs text-[#9AAEA3]">
                            {candidate.role} • {candidate.currentCompany}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-[#0D1814] text-[#9AAEA3] border border-[#20352B] px-2 py-0.5 rounded-md text-[10px] font-bold">
                            {candidate.experience}
                          </span>
                          <span className="bg-[#0D1814] text-[#9AAEA3] border border-[#20352B] px-2 py-0.5 rounded-md text-[10px] font-bold">
                            {candidate.location}
                          </span>
                        </div>

                        <div className="pt-3 border-t border-[#20352B] flex justify-between items-center text-[11px] text-[#9AAEA3]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#22C55E]" />
                            {candidate.appliedDate}
                          </span>
                          <button className="text-xs font-bold text-[#22C55E] hover:underline">
                            View Profile →
                          </button>
                        </div>
                      </div>
                    ))}

                    {colCandidates.length === 0 && (
                      <div className="p-8 text-center border-2 border-dashed border-[#20352B] rounded-2xl text-xs text-[#9AAEA3]/50">
                        No candidates in this stage
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Applicants;
