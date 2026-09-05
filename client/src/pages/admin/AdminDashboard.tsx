import AdminNav from '@/components/AdminNav';
import { useCompany } from '@/context/CompanyContext';
import { useInternships } from '@/context/InternshipsContext';
import { useJobs } from '@/context/JobsContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import timeAgo from '../../../utils/timeAgo';
import AdminUpperNav from './AdminUpperNav';
import {
  Users,
  Building2,
  Briefcase,
  GraduationCap,
  FileText,
  TrendingUp,
  Download,
  CheckCircle2,
  Clock,
  ChevronDown,
  MoreVertical,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import LineMultiple from '@/components/charts/line-multiple';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface Application {
  id: number;
  userId: string;
}

const AdminDashboard = () => {
  const { companyData } = useCompany();
  const { jobData } = useJobs();
  const { internshipData } = useInternships();
  const [users, setUsers] = useState<User[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [timeRange, setTimeRange] = useState('Last 30 Days');

  const formatDate = (date: string): string => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('/api/users', { withCredentials: true });
      const response = await axios.get('/api/applications', { withCredentials: true });
      setUsers(data);
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchStats = async() => {
  const result = await axios.get("/api/monthly-stats");
  return result.data;
}

useEffect(() => {
  fetchStats().then((data) => {
    console.log("Monthly Stats:", data);
  }).catch((error) => {
    console.error("Error fetching monthly stats:", error);
    if(axios.isAxiosError(error)) {
      console.error("Axios error details:", error.message);
    }
  });
}, []);


  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans">
      <AdminUpperNav search={null} searchType={null} />
      <AdminNav />

      <main className="ml-72 pt-20 min-h-screen">
        <div className="p-8 max-w-[1500px] mx-auto w-full space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Enterprise Overview
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Live telemetry and moderation metrics across all platform entities.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2.5 bg-[#0D1814] text-[#F1F5F2] border border-[#20352B] rounded-xl text-xs font-bold focus:border-[#22C55E] outline-none cursor-pointer pr-10"
                >
                  <option className="bg-[#0D1814]">Last 30 Days</option>
                  <option className="bg-[#0D1814]">Last 7 Days</option>
                  <option className="bg-[#0D1814]">This Year</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#9AAEA3] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <button className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] text-xs font-extrabold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* 5 Stat Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* Total Users */}
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#22C55E]/40 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Total Users
              </p>
              <p className="text-2xl font-black text-[#F1F5F2] mt-1">{users.length}</p>
            </div>

            {/* Total Companies */}
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#22C55E]/40 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +8%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Total Companies
              </p>
              <p className="text-2xl font-black text-[#F1F5F2] mt-1">{companyData.length}</p>
            </div>

            {/* Active Jobs */}
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#22C55E]/40 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +5%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Active Jobs
              </p>
              <p className="text-2xl font-black text-[#F1F5F2] mt-1">{jobData.length}</p>
            </div>

            {/* Total Applications */}
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#22C55E]/40 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +15%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Applications
              </p>
              <p className="text-2xl font-black text-[#F1F5F2] mt-1">{applications.length}</p>
            </div>

            {/* Active Internships */}
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#22C55E]/40 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +10%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Internships
              </p>
              <p className="text-2xl font-black text-[#F1F5F2] mt-1">{internshipData.length}</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Growth Chart (2 cols) */}
            <div className="lg:col-span-2 bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-base font-bold text-[#F1F5F2]">
                    Candidate & Posting Trajectory
                  </h2>
                  <p className="text-xs text-[#9AAEA3]">Monthly acquisition trends</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
                    <span className="text-[#F1F5F2]">Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#34D399]" />
                    <span className="text-[#9AAEA3]">Jobs</span>
                  </div>
                </div>
              </div>
              <LineMultiple />
            
            </div>

            {/* Category Breakdown (1 col) */}
            <div className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <h2 className="text-base font-bold text-[#F1F5F2] mb-1">
                Category Distribution
              </h2>
              <p className="text-xs text-[#9AAEA3] mb-4">Postings by sector</p>

              <div className="space-y-3.5">
                {[
                  { name: 'Software & Tech', pct: '55%', color: 'bg-[#22C55E]' },
                  { name: 'Design & UX', pct: '20%', color: 'bg-[#34D399]' },
                  { name: 'Marketing & Growth', pct: '12%', color: 'bg-[#10B981]' },
                  { name: 'Finance & Operations', pct: '8%', color: 'bg-[#059669]' },
                  { name: 'Healthcare / Other', pct: '5%', color: 'bg-[#047857]' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-[#F1F5F2]">{item.name}</span>
                      <span className="text-[#22C55E]">{item.pct}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0D1814] overflow-hidden border border-[#20352B]">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tables & Moderation Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Recent Postings Table (8 cols) */}
            <div className="lg:col-span-8 bg-[#111F19] rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#20352B] flex justify-between items-center">
                <div>
                  <h2 className="text-base font-bold text-[#F1F5F2]">
                    Recent Open Requisitions
                  </h2>
                  <p className="text-xs text-[#9AAEA3]">Live job posts on platform</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#0D1814] border-b border-[#20352B]">
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Role & Mode
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Company
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Posted
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#20352B]">
                    {jobData.slice(0, 4).map((job) => (
                      <tr key={job.id} className="hover:bg-[#0D1814]/60 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-xs font-bold text-[#F1F5F2]">{job.title}</p>
                          <p className="text-[11px] text-[#9AAEA3]">
                            {job.mode || 'Remote'} • {job.location}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-[#F1F5F2]">
                          {job.company?.name || 'Enterprise'}
                        </td>
                        <td className="px-6 py-4 text-xs text-[#9AAEA3]">
                          {formatDate(String(job.createdAt))}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                            {job.status || 'Active'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar (4 cols): Pending Approvals + Registrations */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Approvals */}
              <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Pending Moderation</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black text-[#F1F5F2]">18</span>
                  <span className="text-xs text-[#9AAEA3]">items require review</span>
                </div>
                <button className="w-full py-2.5 bg-[#F59E0B]/15 hover:bg-[#F59E0B]/25 border border-[#F59E0B]/30 text-[#F59E0B] rounded-xl text-xs font-bold transition-all cursor-pointer">
                  Review Pending Queue
                </button>
              </div>

              {/* Registrations */}
              <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
                <h3 className="text-xs font-bold text-[#F1F5F2] uppercase tracking-wider">
                  Recent User Signups
                </h3>

                <div className="space-y-3">
                  {users.slice(0, 4).map((u) => (
                    <div key={u.id} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-[#162820] border border-[#20352B] flex items-center justify-center text-xs font-bold text-[#22C55E] shrink-0">
                          {u.name ? u.name.charAt(0) : 'U'}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#F1F5F2] truncate">{u.name}</p>
                          <p className="text-[10px] text-[#9AAEA3] truncate">{u.role}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#9AAEA3] shrink-0">
                        {timeAgo(u.createdAt)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard