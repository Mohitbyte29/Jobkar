import UserNav from "@/components/UserNav";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  FileText,
  Clock,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  IndianRupee,
  Briefcase,
  ExternalLink,
  ChevronDown,
  Building2,
} from "lucide-react";

interface applicationData {
  id: number;
  applicationId: number;
  UserId: number;
  jobId: number;
  resume: string;
  internshipId: number;
  portfolio: string;
  status: string;
  github: string;
  linkedIn: string;
  job: {
    id: number;
    title: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    jobType: string;
    type: string;
    company: {
      id: number;
      name: string;
      location: string;
    };
  };
  applicant: {
    name: string;
    email: string;
    phone: string;
  };
}

const Application = () => {
  const { user } = useUser();
  const [applications, setApplications] = useState<applicationData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (!user?.id) return;
    const handleGetData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/applications/${user?.id}`,
          { withCredentials: true }
        );
        setApplications(res.data);
      } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data);
        }
      }
    };
    handleGetData();
  }, [user?.id]);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.job?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.job?.company?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.job?.location?.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && app.status?.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="flex min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <UserNav />
      <main className="flex-1 ml-64 overflow-y-auto">
        <div className="flex-1 p-8 max-w-6xl mx-auto">
          {/* Page Title & Search Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                My Applications
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Track, manage, and monitor all your active job & internship submissions.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
                <input
                  className="w-full pl-10 pr-10 py-2.5 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none transition-all"
                  placeholder="Search applications..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111F19] hover:bg-[#162820] border border-[#20352B] rounded-xl text-sm font-semibold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors cursor-pointer shrink-0">
                <SlidersHorizontal className="w-4 h-4 text-[#22C55E]" /> Filters
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4 hover:border-[#22C55E]/40 transition-all">
              <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-[#9AAEA3] tracking-wider">
                  Total Applications
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-[#F1F5F2]">
                    {applications.length || 0}
                  </span>
                  <span className="text-xs text-[#9AAEA3]">All time</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4 hover:border-[#F59E0B]/40 transition-all">
              <div className="w-12 h-12 bg-[#F59E0B]/15 border border-[#F59E0B]/30 rounded-xl flex items-center justify-center text-[#F59E0B] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-[#9AAEA3] tracking-wider">
                  Under Review
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-[#F1F5F2]">
                    {applications.filter((a) => a.status === "SUBMITTED" || a.status === "REVIEW").length || 0}
                  </span>
                  <span className="text-xs text-[#9AAEA3]">Awaiting</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4 hover:border-[#22C55E]/40 transition-all">
              <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-[#9AAEA3] tracking-wider">
                  Interviews
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-[#F1F5F2]">
                    {applications.filter((a) => a.status === "INTERVIEW").length || 0}
                  </span>
                  <span className="text-xs text-[#9AAEA3]">Upcoming</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4 hover:border-[#22C55E]/40 transition-all">
              <div className="w-12 h-12 bg-[#22C55E]/20 border border-[#22C55E]/40 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.2)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-[#9AAEA3] tracking-wider">
                  Offers
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-[#22C55E]">
                    {applications.filter((a) => a.status === "OFFER" || a.status === "ACCEPTED").length || 0}
                  </span>
                  <span className="text-xs text-[#9AAEA3]">Accepted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tabs Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#0D1814] border border-[#20352B] rounded-2xl">
              {[
                { id: "all", label: `All (${applications.length})` },
                { id: "submitted", label: "Submitted" },
                { id: "review", label: "Under Review" },
                { id: "interview", label: "Interview" },
                { id: "offer", label: "Offer" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#22C55E] text-[#07110D] shadow-[0_0_15px_rgba(34,197,94,0.25)]"
                      : "text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#9AAEA3]">
              <span>Sort by:</span>
              <button className="font-bold text-[#F1F5F2] flex items-center gap-1 hover:text-[#22C55E] transition-colors">
                Latest Applied <ChevronDown className="w-3.5 h-3.5 text-[#22C55E]" />
              </button>
            </div>
          </div>

          {/* Application Cards List */}
          <div className="space-y-4" data-purpose="application-list">
            {filteredApplications.length > 0 ? (
              filteredApplications.map((application) => (
                <div
                  key={application.id}
                  className="bg-[#111F19] p-6 rounded-2xl border border-[#20352B] hover:border-[#22C55E]/40 transition-all duration-200 shadow-sm"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#0D1814] border border-[#20352B] rounded-xl flex items-center justify-center p-2.5 shrink-0">
                        <Building2 className="w-7 h-7 text-[#22C55E]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F1F5F2] hover:text-[#22C55E] transition-colors">
                          {application.job?.title || "Role Title"}
                        </h3>
                        <p className="text-[#9AAEA3] text-sm font-medium mb-3">
                          {application.job?.company?.name || "Company"}
                        </p>
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#9AAEA3]">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                            {application.job?.location || "Remote"}
                          </span>
                          {application.job?.salaryMin && (
                            <span className="flex items-center gap-1">
                              <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                              ₹{(application.job.salaryMin / 100000).toFixed(1)} — ₹{(application.job.salaryMax / 100000).toFixed(1)} LPA
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-[#22C55E]" />
                            {application.job?.type || "Full-Time"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#20352B]">
                      <span className="px-3 py-1 bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold rounded-lg border border-[#F59E0B]/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                        {application.status || "Submitted"}
                      </span>
                      <div className="flex gap-2">
                        {application.job?.id && (
                          <Link
                            to={`/jobs/search/${application.job.id}`}
                            className="px-4 py-2 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] hover:text-[#22C55E] text-xs font-bold rounded-xl hover:bg-[#0D1814] transition-all"
                          >
                            View Job
                          </Link>
                        )}
                        <Link
                          to={`/jobs/application/review/${user?.id}/${application.job?.id || ""}`}
                          className="px-4 py-2 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] text-xs font-bold rounded-xl transition-all shadow-sm"
                        >
                          View Application
                        </Link>
                      </div>
                    </div>
                  </div>

                  {application.resume && (
                    <div className="mt-4 pt-4 border-t border-[#20352B] flex items-center justify-between text-xs text-[#9AAEA3]">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-[#22C55E]" />
                        <span className="text-[#F1F5F2] font-semibold">Resume:</span> {application.resume}
                      </span>
                      {application.portfolio && (
                        <a
                          href={application.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[#22C55E] hover:underline"
                        >
                          Portfolio <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-[#111F19] rounded-2xl border border-[#20352B] p-12 text-center">
                <FileText className="w-12 h-12 text-[#9AAEA3]/40 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#F1F5F2] mb-1">
                  No applications found
                </h3>
                <p className="text-sm text-[#9AAEA3] mb-5">
                  You haven't submitted any applications matching this filter yet.
                </p>
                <Link
                  to="/jobs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-bold text-sm rounded-xl transition-all"
                >
                  Explore Jobs & Apply
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Application;