import AdminNav from '@/components/AdminNav'
import AdminUpperNav from './AdminUpperNav'
import { useJobs } from '@/context/JobsContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
  const {jobData} = useJobs();
  const [users, setUsers] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get('/api/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <>
  {/* SideNavBar */}
    <AdminNav />
  {/* TopAppBar */}
  <AdminUpperNav/>
  {/* Main Content */}
  <main className="ml-64 mt-16 p-margin max-w-max_width mx-auto">
    {/* Dashboard Header */}
    <div className="mb-lg">
      <h2 className="font-h1 text-h1 text-slate-200 mb-base">
        Platform Insights
      </h2>
      <p className="font-body-md text-body-md text-white-container">
        Real-time performance metrics for JobKar Enterprise.
      </p>
    </div>
    {/* KPI Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-lg">
      {/* KPI 1 */}
      <div className="bg-[#111827] p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-blue-600-fixed rounded-lg text-slate-200">
            <span className="material-symbols-outlined">group</span>
          </div>
          <span className="text-on-secondary-container bg-secondary-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            +12%
          </span>
        </div>
        <p className="text-white-container font-label-caps text-label-caps mb-xs">
          TOTAL USERS
        </p>
        <h3 className="font-h2 text-h2 text-slate-200">{users.length}</h3>
      </div>
      {/* KPI 2 */}
      <div className="bg-[#111827] p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-secondary-container rounded-lg text-on-secondary-container">
            <span className="material-symbols-outlined">work</span>
          </div>
          <span className="text-on-secondary-container bg-secondary-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            +5.4%
          </span>
        </div>
        <p className="text-white-container font-label-caps text-label-caps mb-xs">
          ACTIVE JOBS
        </p>
        <h3 className="font-h2 text-h2 text-slate-200">{jobData.length}</h3>
      </div>
      {/* KPI 3 */}
      <div className="bg-[#111827] p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-tertiary-fixed rounded-lg text-on-tertiary-fixed-variant">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="text-on-secondary-container bg-secondary-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            +18%
          </span>
        </div>
        <p className="text-white-container font-label-caps text-label-caps mb-xs">
          MONTHLY REVENUE
        </p>
        <h3 className="font-h2 text-h2 text-slate-200">$84,200</h3>
      </div>
      {/* KPI 4 */}
      <div className="bg-[#111827] p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-red-500-container rounded-lg text-on-error-container">
            <span className="material-symbols-outlined">analytics</span>
          </div>
          <span className="text-error bg-red-500-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            -2.1%
          </span>
        </div>
        <p className="text-white-container font-label-caps text-label-caps mb-xs">
          APPLICATION RATE
        </p>
        <h3 className="font-h2 text-h2 text-slate-200">24.5%</h3>
      </div>
    </div>
    {/* Main Chart & Stats Bento */}
    <div className="grid grid-cols-12 gap-gutter mb-lg">
      {/* Chart Section */}
      <div className="col-span-12 lg:col-span-8 bg-[#111827] p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
        <div className="flex justify-between items-center mb-lg">
          <div>
            <h3 className="font-h3 text-h3 text-slate-200">Growth Overview</h3>
            <p className="font-body-sm text-body-sm text-white-container">
              User registrations vs job postings
            </p>
          </div>
          <div className="flex gap-sm">
            <button className="px-sm py-1 border border-[#1E293B] rounded-full text-label-caps font-label-caps hover:bg-[#111827] transition-colors">
              Daily
            </button>
            <button className="px-sm py-1 bg-blue-600 text-white rounded-full text-label-caps font-label-caps">
              Monthly
            </button>
          </div>
        </div>
        {/* Visual Placeholder for Chart */}
        <div className="h-64 flex items-end justify-between px-sm relative">
          <div className="absolute inset-0 flex flex-col justify-between py-2 border-l border-b border-[#1E293B]">
            <div className="w-full border-t border-slate-50" />
            <div className="w-full border-t border-slate-50" />
            <div className="w-full border-t border-slate-50" />
            <div className="w-full border-t border-slate-50" />
          </div>
          <div className="w-12 bg-secondary rounded-t h-[30%] relative group">
            <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded">
              12k
            </div>
          </div>
          <div className="w-12 bg-secondary rounded-t h-[45%] relative group" />
          <div className="w-12 bg-secondary rounded-t h-[40%] relative group" />
          <div className="w-12 bg-secondary rounded-t h-[60%] relative group" />
          <div className="w-12 bg-secondary rounded-t h-[80%] relative group" />
          <div className="w-12 bg-secondary rounded-t h-[75%] relative group" />
          <div className="w-12 bg-secondary rounded-t h-[95%] relative group" />
          <div className="w-12 bg-secondary rounded-t h-[85%] relative group" />
        </div>
        <div className="flex justify-between mt-sm px-2 font-label-caps text-[10px] text-outline">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
          <span>JUL</span>
          <span>AUG</span>
        </div>
      </div>
      {/* Stats Highlight */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
        <div className="bg-blue-600-container text-white p-md rounded-xl flex-1 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-label-caps text-label-caps text-white-container mb-xs">
              ENTERPRISE GROWTH
            </p>
            <h3 className="font-h1 text-h1 mb-sm">+45%</h3>
            <p className="font-body-sm text-body-sm opacity-80">
              Increased subscription renewals this quarter across all premium
              tiers.
            </p>
          </div>
          {/* Abstract Background Shape */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="bg-[#111827] border border-[#1E293B] p-md rounded-xl flex-1 shadow-sm">
          <div className="flex items-center gap-sm mb-md">
            <div className="w-12 h-12 bg-[#0A0F1A] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-400">
                trending_up
              </span>
            </div>
            <div>
              <h4 className="font-label-strong text-label-strong">
                Peak Activity
              </h4>
              <p className="font-body-sm text-body-sm text-outline">
                Tuesdays, 10:00 AM
              </p>
            </div>
          </div>
          <div className="space-y-sm">
            <div className="flex justify-between items-center text-body-sm font-body-sm">
              <span className="text-white-container">Mobile App</span>
              <span className="font-semibold">68%</span>
            </div>
            <div className="w-full bg-[#111827] h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary w-[68%] h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Table Section */}
    <div className="bg-[#111827] rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] overflow-hidden">
      <div className="p-md border-b border-[#1E293B] flex justify-between items-center">
        <div>
          <h3 className="font-h3 text-h3 text-slate-200">
            Recent Platform Activity
          </h3>
          <p className="font-body-sm text-body-sm text-white-container">
            Real-time log of user and employer actions.
          </p>
        </div>
        <button className="font-label-strong text-label-strong text-on-secondary-container px-md py-sm hover:bg-secondary-container/10 transition-colors rounded-lg">
          View All Activity
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#0F172A] border-b border-[#1E293B]">
            <tr>
              <th className="px-md py-sm font-label-caps text-label-caps text-white-container">
                User/Entity
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-white-container">
                Action
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-white-container">
                Status
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-white-container">
                Date
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-white-container">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            <tr className="hover:bg-[#0F172A] transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-600-fixed flex items-center justify-center text-slate-200 font-bold text-xs">
                    AM
                  </div>
                  <div>
                    <p className="font-label-strong text-label-strong">
                      Alex Morgan
                    </p>
                    <p className="text-[11px] text-outline">Product Designer</p>
                  </div>
                </div>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm">
                Applied to "Senior UX Specialist"
              </td>
              <td className="px-md py-md">
                <span className="bg-secondary-container/20 text-on-secondary-container px-2 py-1 rounded text-[11px] font-bold uppercase">
                  Success
                </span>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm text-outline">
                Oct 12, 2:45 PM
              </td>
              <td className="px-md py-md">
                <button className="material-symbols-outlined text-outline hover:text-slate-200 transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#0F172A] transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <img
                    className="w-8 h-8 rounded bg-[#0A0F1A] object-cover"
                    data-alt="A clean, minimalist logo of a modern technology startup called TechFlow. The logo features abstract geometric lines representing connectivity and movement, using a corporate color palette of deep navy and bright teal. It is centered on a pure white, softly lit background to maintain high-end professional aesthetics."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9itbNod_nNmNCAYGKJUDJp4nSEvYic602TrHwnXjczVPmRcDuOctNElpzc9FVr9ZdFfmBmTK8VSuq73IgxwBtitRImVJ5g8KR4XhZZBRov6Drt8T5cczQpFzkyu999u0KU_zR3MD8Rky7EfPA0SSBiOypnqseJBffCTyzZgpbl9cYPBB0emAMnt5Lt5rQPXwEs43Dy1ciyIPyKwwGpoftyaUqvE-SKTWGZ87SoWw-DSBfaJz25nwopLoACs2xLje7mjFHyOcig4"
                  />
                  <div>
                    <p className="font-label-strong text-label-strong">
                      TechFlow Inc.
                    </p>
                    <p className="text-[11px] text-outline">
                      Verified Employer
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm">
                Posted 3 new job listings
              </td>
              <td className="px-md py-md">
                <span className="bg-secondary-container/20 text-on-secondary-container px-2 py-1 rounded text-[11px] font-bold uppercase">
                  Success
                </span>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm text-outline">
                Oct 12, 1:15 PM
              </td>
              <td className="px-md py-md">
                <button className="material-symbols-outlined text-outline hover:text-slate-200 transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#0F172A] transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center text-slate-300 font-bold text-xs">
                    SK
                  </div>
                  <div>
                    <p className="font-label-strong text-label-strong">
                      Sarah K. Hernandez
                    </p>
                    <p className="text-[11px] text-outline">Candidate</p>
                  </div>
                </div>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm">
                Subscription Payment Failed
              </td>
              <td className="px-md py-md">
                <span className="bg-red-500-container text-on-error-container px-2 py-1 rounded text-[11px] font-bold uppercase">
                  Error
                </span>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm text-outline">
                Oct 12, 10:30 AM
              </td>
              <td className="px-md py-md">
                <button className="material-symbols-outlined text-outline hover:text-slate-200 transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#0F172A] transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <img
                    className="w-8 h-8 rounded bg-[#0A0F1A] object-cover"
                    data-alt="A refined and modern corporate office branding element for a financial services company. The image showcases a subtle, high-key architectural detail with clean lines, soft glass reflections, and a professional neutral color palette of soft whites and cool grays, reflecting institutional stability and modern corporate growth."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dXWhwr9kGF7RjbkwYtE0VCHYLIjJINBaAq7pYABegiR8Rm9oEFy2Zhg4njnbMUF2yEWbzWFnJCJduzBC3qzrIHxXLof7X7BoUX4aFdnucQrE5axjF2OVLpbcO8StFVqlFT_J2G8sVMOS10OEPUM6m-aM7I_RTmaE3QjOdmMMD5ag09_XwsC3avbEsJ_ytnwcrGPeTZnzbCBg5L7VlHpveeEYjWx5KGR0leLQXf9QhuW8SvVk69A4oa_HCDBqu9NnntA0eOmWyEU"
                  />
                  <div>
                    <p className="font-label-strong text-label-strong">
                      Global FinServ
                    </p>
                    <p className="text-[11px] text-outline">
                      Enterprise Partner
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm">
                Renewed Annual Enterprise Plan
              </td>
              <td className="px-md py-md">
                <span className="bg-secondary-container/20 text-on-secondary-container px-2 py-1 rounded text-[11px] font-bold uppercase">
                  Renewal
                </span>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm text-outline">
                Oct 11, 4:50 PM
              </td>
              <td className="px-md py-md">
                <button className="material-symbols-outlined text-outline hover:text-slate-200 transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Analytics
