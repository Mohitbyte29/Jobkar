import EmployerNav from "@/components/EmployerNav";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  Plus,
  Filter,
  MapPin,
  Eye,
  Edit2,
  XCircle,
  Briefcase,
  Users,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const JobPosting = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const jobPostings = [
    {
      id: 1,
      title: "Senior Product Designer",
      location: "Bengaluru, India (Remote)",
      status: "ACTIVE",
      applicants: 84,
      newApplicants: 12,
      postedDate: "Oct 12, 2024",
    },
    {
      id: 2,
      title: "Lead Backend Engineer (Node.js & Go)",
      location: "San Francisco, CA (Remote)",
      status: "ACTIVE",
      applicants: 142,
      newApplicants: 28,
      postedDate: "Oct 18, 2024",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Architect",
      location: "Bengaluru / Mumbai (Hybrid)",
      status: "DRAFT",
      applicants: 0,
      newApplicants: 0,
      postedDate: "Not posted yet",
    },
    {
      id: 4,
      title: "Full-Stack React & Python Developer",
      location: "London, UK (Remote)",
      status: "ACTIVE",
      applicants: 67,
      newApplicants: 9,
      postedDate: "Nov 01, 2024",
    },
    {
      id: 5,
      title: "QA Automation & Reliability Lead",
      location: "Remote (Global)",
      status: "EXPIRED",
      applicants: 156,
      newApplicants: 0,
      postedDate: "Aug 15, 2024",
    },
  ];

  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "active") return matchesSearch && job.status === "ACTIVE";
    if (activeTab === "drafts") return matchesSearch && job.status === "DRAFT";
    if (activeTab === "expired") return matchesSearch && job.status === "EXPIRED";
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
                placeholder="Search job postings by role or location..."
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

        {/* Canvas Body */}
        <div className="p-8 max-w-[1360px] w-full mx-auto overflow-y-auto space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Job Postings
              </h2>
              <p className="text-sm text-[#9AAEA3]">
                Manage, publish, and track all your active recruitment opportunities.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/postJob"
                className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Post New Job</span>
              </Link>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Active Jobs
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">12</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Total Applicants
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">428</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Interviews
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">18</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Avg. Time to Fill
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">24d</p>
              </div>
            </div>
          </div>

          {/* Filter Tabs Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#0D1814] border border-[#20352B] rounded-2xl w-fit">
            {[
              { id: "all", label: `All Posts (${jobPostings.length})` },
              { id: "active", label: "Active (3)" },
              { id: "drafts", label: "Drafts (1)" },
              { id: "expired", label: "Expired (1)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#22C55E] text-[#07110D] shadow-[0_0_12px_rgba(34,197,94,0.25)]"
                    : "text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table Container */}
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#0D1814] border-b border-[#20352B]">
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Job Title & Location
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-center">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-center">
                      Applicants
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-center">
                      Date Posted
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#20352B]">
                  {filteredJobs.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-[#0D1814]/70 transition-colors group"
                    >
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#F1F5F2] mb-1 group-hover:text-[#22C55E] transition-colors">
                            {job.title}
                          </span>
                          <span className="text-xs text-[#9AAEA3] flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                            {job.location}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                            job.status === "ACTIVE"
                              ? "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30"
                              : job.status === "DRAFT"
                              ? "bg-[#162820] text-[#9AAEA3] border-[#20352B]"
                              : "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30"
                          }`}
                        >
                          {job.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-sm font-bold text-[#F1F5F2]">
                            {job.applicants}
                          </span>
                          {job.newApplicants > 0 && (
                            <span className="text-[10px] text-[#22C55E] font-bold">
                              +{job.newApplicants} new
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5 text-center text-xs text-[#9AAEA3]">
                        {job.postedDate}
                      </td>

                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          <Link
                            to="/employer/applicants"
                            className="p-2 text-[#9AAEA3] hover:text-[#22C55E] hover:bg-[#162820] rounded-lg transition-colors"
                            title="View Applicants"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            to="/postJob"
                            className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820] rounded-lg transition-colors"
                            title="Edit Job"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Link>
                          <button
                            className="p-2 text-[#9AAEA3] hover:text-[#EF4444] hover:bg-[#EF4444]/10 rounded-lg transition-colors"
                            title="Close Posting"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-[#0D1814] flex justify-between items-center border-t border-[#20352B] text-xs text-[#9AAEA3]">
              <span>Showing 1 to {filteredJobs.length} of {jobPostings.length} postings</span>
              <div className="flex items-center gap-1.5">
                <button className="p-2 rounded-lg border border-[#20352B] hover:bg-[#162820] disabled:opacity-40">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#22C55E] text-[#07110D] font-bold">
                  1
                </button>
                <button className="p-2 rounded-lg border border-[#20352B] hover:bg-[#162820]">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobPosting;
