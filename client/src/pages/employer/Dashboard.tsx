import EmployerNav from "@/components/EmployerNav";
import { useJobs } from "@/context/JobsContext";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  Settings,
  Briefcase,
  Users,
  CalendarCheck,
  TrendingUp,
  Clock,
  PlusCircle,
  Sparkles,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";

const Dashboard = () => {
  const { userData } = useJobs();

  return (
    <div className="bg-[#07110D] text-[#F1F5F2] min-h-screen flex selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      {/* SideNavBar Component */}
      <EmployerNav />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TopAppBar Header */}
        <header className="w-full border-b border-[#20352B] sticky top-0 z-20 bg-[#111F19]/90 backdrop-blur-md flex justify-between items-center px-8 py-3.5 h-16">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none transition-all"
                placeholder="Search candidates, roles, or skills..."
                type="text"
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
                  Sarah Jenkins
                </p>
                <p className="text-[10px] text-[#9AAEA3] uppercase tracking-wider font-semibold">
                  Senior Recruiter
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] font-bold text-xs">
                SJ
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 max-w-[1360px] mx-auto w-full space-y-8">
          {/* Welcome Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Recruiter Overview
              </h2>
              <p className="text-sm text-[#9AAEA3]">
                Welcome back, Sarah. Here is a real-time snapshot of your recruitment pipeline today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/postJob"
                className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post a Job</span>
              </Link>
            </div>
          </div>

          {/* Bento Grid Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] hover:border-[#22C55E]/40 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div>
                <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-2xl flex items-center justify-center mb-4 text-[#22C55E]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Active Job Postings
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2]">
                  {userData?.length || 8}
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#22C55E]">
                <TrendingUp className="w-4 h-4" />
                <span>+4 posted this month</span>
              </div>
            </div>

            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] hover:border-[#22C55E]/40 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div>
                <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-2xl flex items-center justify-center mb-4 text-[#22C55E]">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Applicants this Month
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2]">1,284</h3>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#22C55E]">
                <TrendingUp className="w-4 h-4" />
                <span>+12% in engagement rate</span>
              </div>
            </div>

            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] hover:border-[#22C55E]/40 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div>
                <div className="w-12 h-12 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-2xl flex items-center justify-center mb-4 text-[#22C55E]">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Interviews Scheduled
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2]">18</h3>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#22C55E]">
                <Clock className="w-4 h-4" />
                <span>4 scheduled for today</span>
              </div>
            </div>
          </div>

          {/* Activity Feed & Quick Actions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Recent Activity Feed */}
            <div className="lg:col-span-8 bg-[#111F19] rounded-3xl border border-[#20352B] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              <div className="px-6 py-5 border-b border-[#20352B] flex justify-between items-center">
                <div>
                  <h3 className="text-base font-bold text-[#F1F5F2]">
                    Recent Candidate Activity
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Live updates across your active postings
                  </p>
                </div>
                <Link
                  to="/employer/applicants"
                  className="text-xs font-bold text-[#22C55E] hover:text-[#34D399] hover:underline"
                >
                  View All Candidates
                </Link>
              </div>

              <div className="divide-y divide-[#20352B]">
                {[
                  {
                    name: "David Chen",
                    role: "Senior UX Designer",
                    time: "24 minutes ago",
                    badge: "New Application",
                    badgeColor: "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30",
                  },
                  {
                    name: "Emma Wilson",
                    role: "Lead Full-Stack Engineer",
                    time: "2 hours ago",
                    badge: "Interviewing",
                    badgeColor: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
                  },
                  {
                    name: "Marcus Holloway",
                    role: "Cloud Architect",
                    time: "Yesterday, 4:15 PM",
                    badge: "Offer Accepted",
                    badgeColor: "bg-[#22C55E]/20 text-[#34D399] border-[#22C55E]/40",
                  },
                  {
                    name: "Aarav Patel",
                    role: "DevOps Engineer",
                    time: "Yesterday, 11:30 AM",
                    badge: "Screening Passed",
                    badgeColor: "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 flex items-center justify-between gap-4 hover:bg-[#0D1814] transition-colors"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-[#162820] border border-[#20352B] flex items-center justify-center text-xs font-bold text-[#F1F5F2] shrink-0">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-[#F1F5F2] truncate">
                          <span className="font-bold">{item.name}</span> applied for{" "}
                          <span className="text-[#22C55E] font-semibold">{item.role}</span>
                        </p>
                        <p className="text-xs text-[#9AAEA3] mt-0.5">{item.time}</p>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 text-[11px] font-bold rounded-full border shrink-0 ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Schedule */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Actions Card */}
              <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                <h3 className="text-base font-bold text-[#F1F5F2] mb-1">
                  Quick Actions
                </h3>
                <p className="text-xs text-[#9AAEA3] mb-5">
                  Streamline hiring workflows with fast shortcuts.
                </p>

                <div className="space-y-2.5">
                  <Link
                    to="/postJob"
                    className="flex items-center justify-between p-3.5 bg-[#0D1814] hover:bg-[#162820] border border-[#20352B] hover:border-[#22C55E]/40 rounded-2xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center">
                        <PlusCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#F1F5F2]">
                        Create Job Posting
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9AAEA3] group-hover:text-[#22C55E] transition-colors" />
                  </Link>

                  <Link
                    to="/postInternship"
                    className="flex items-center justify-between p-3.5 bg-[#0D1814] hover:bg-[#162820] border border-[#20352B] hover:border-[#22C55E]/40 rounded-2xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#F1F5F2]">
                        Create Internship
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9AAEA3] group-hover:text-[#22C55E] transition-colors" />
                  </Link>

                  <Link
                    to="/employer/applicants"
                    className="flex items-center justify-between p-3.5 bg-[#0D1814] hover:bg-[#162820] border border-[#20352B] hover:border-[#22C55E]/40 rounded-2xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#F1F5F2]">
                        Review Candidates
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9AAEA3] group-hover:text-[#22C55E] transition-colors" />
                  </Link>
                </div>
              </div>

              {/* Today's Schedule Card */}
              <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-[#F1F5F2] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#22C55E]" />
                    <span>Today's Interviews</span>
                  </h4>
                  <span className="text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded-full">
                    2 Scheduled
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 bg-[#0D1814] rounded-2xl border border-[#20352B] flex items-center gap-3">
                    <div className="text-center min-w-[50px] pr-3 border-r border-[#20352B]">
                      <p className="text-xs font-black text-[#22C55E]">10:00</p>
                      <p className="text-[10px] font-bold text-[#9AAEA3]">AM</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#F1F5F2] truncate">
                        Frontend Engineer
                      </p>
                      <p className="text-[11px] text-[#9AAEA3]">with Sofia Rodriguez</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#0D1814] rounded-2xl border border-[#20352B] flex items-center gap-3">
                    <div className="text-center min-w-[50px] pr-3 border-r border-[#20352B]">
                      <p className="text-xs font-black text-[#22C55E]">02:30</p>
                      <p className="text-[10px] font-bold text-[#9AAEA3]">PM</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#F1F5F2] truncate">
                        Product Manager
                      </p>
                      <p className="text-[11px] text-[#9AAEA3]">with James Holden</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
