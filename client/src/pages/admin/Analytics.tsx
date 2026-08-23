import AdminNav from '@/components/AdminNav';
import AdminUpperNav from './AdminUpperNav';
import { useJobs } from '@/context/JobsContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart3,
  TrendingUp,
  Users,
  Briefcase,
  DollarSign,
  Activity,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const Analytics = () => {
  const { jobData } = useJobs();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/users');
        if (Array.isArray(data)) {
          setUsers(data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans">
      <AdminNav />
      <AdminUpperNav />

      <main className="ml-72 pt-20 min-h-screen p-8">
        <div className="max-w-[1440px] mx-auto w-full space-y-8 pb-16">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Platform Analytics & Growth
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Telemetry, hiring pipeline conversion rates, and revenue telemetry.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] rounded-xl text-xs font-extrabold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                <Download className="w-4 h-4" />
                <span>Export Dataset</span>
              </button>
            </div>
          </div>

          {/* 4 Primary KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +14.2%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Platform Users
              </p>
              <h3 className="text-2xl font-black text-[#F1F5F2] mt-1">{users.length}</h3>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +8.6%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Live Postings
              </p>
              <h3 className="text-2xl font-black text-[#F1F5F2] mt-1">{jobData.length}</h3>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +22.4%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Gross Platform GMV
              </p>
              <h3 className="text-2xl font-black text-[#F1F5F2] mt-1">$128,450</h3>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center text-[#34D399]">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-extrabold flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +4.1%
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                Placement Match Rate
              </p>
              <h3 className="text-2xl font-black text-[#F1F5F2] mt-1">94.8%</h3>
            </div>
          </div>

          {/* Main Visual Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Growth Chart (8 cols) */}
            <div className="lg:col-span-8 bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-base font-bold text-[#F1F5F2]">
                    Application Throughput
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Monthly application activity vs offers extended
                  </p>
                </div>
                <div className="flex gap-2 bg-[#0D1814] p-1 rounded-xl border border-[#20352B]">
                  <button className="px-3 py-1 bg-[#22C55E] text-[#07110D] text-xs font-bold rounded-lg">
                    Monthly
                  </button>
                  <button className="px-3 py-1 text-[#9AAEA3] hover:text-[#F1F5F2] text-xs font-bold rounded-lg transition-colors">
                    Quarterly
                  </button>
                </div>
              </div>

              {/* Bar Chart Visual */}
              <div className="h-64 flex items-end justify-between gap-3 pt-6 px-2 border-b border-[#20352B]">
                {[
                  { month: 'Jan', val: 35 },
                  { month: 'Feb', val: 48 },
                  { month: 'Mar', val: 42 },
                  { month: 'Apr', val: 65 },
                  { month: 'May', val: 80 },
                  { month: 'Jun', val: 72 },
                  { month: 'Jul', val: 95 },
                  { month: 'Aug', val: 88 },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full flex justify-center items-end h-48 bg-[#0D1814] rounded-xl p-1">
                      <div
                        style={{ height: `${item.val}%` }}
                        className="w-full bg-gradient-to-t from-[#22C55E] to-[#34D399] rounded-lg group-hover:brightness-125 transition-all shadow-[0_0_12px_rgba(34,197,94,0.2)]"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#9AAEA3]">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retention & Funnel (4 cols) */}
            <div className="lg:col-span-4 bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#F1F5F2] mb-1">
                  Candidate Pipeline Funnel
                </h3>
                <p className="text-xs text-[#9AAEA3]">Average conversion rates</p>
              </div>

              <div className="space-y-4">
                {[
                  { stage: 'Profile Views', count: '142.8k', pct: '100%', color: 'bg-[#22C55E]' },
                  { stage: 'Applications Submitted', count: '48.2k', pct: '34%', color: 'bg-[#34D399]' },
                  { stage: 'Interviews Scheduled', count: '12.4k', pct: '9%', color: 'bg-[#10B981]' },
                  { stage: 'Offers Accepted', count: '4.8k', pct: '3.4%', color: 'bg-[#059669]' },
                ].map((s, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-[#F1F5F2]">{s.stage}</span>
                      <span className="text-[#22C55E]">{s.count}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#0D1814] overflow-hidden border border-[#20352B]">
                      <div
                        className={`h-full rounded-full ${s.color}`}
                        style={{ width: s.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                <p className="text-xs font-bold text-[#22C55E] mb-0.5">ATS Velocity Index</p>
                <p className="text-[11px] text-[#9AAEA3]">
                  Average time-to-hire across verified tech employers is currently 18.4 days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
