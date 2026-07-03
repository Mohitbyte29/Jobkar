import AdminNav from '@/components/AdminNav'
import React from 'react'

const Analytics = () => {
  return (
    <div>
      <>
  {/* SideNavBar */}
    <AdminNav />
  {/* TopAppBar */}
  <header className="fixed top-0 right-0 left-64 h-16 px-6 flex justify-between items-center z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="flex items-center gap-md w-full max-w-xl">
      <div className="relative w-full">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary/20 font-body-sm text-body-sm"
          placeholder="Search analytics..."
          type="text"
        />
      </div>
    </div>
    <div className="flex items-center gap-sm">
      <div className="flex items-center gap-xs pr-sm mr-sm border-r border-slate-200">
        <button className="p-2 hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="p-2 hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
      <div className="flex items-center gap-sm">
        <div className="text-right">
          <p className="font-label-strong text-label-strong">Admin User</p>
          <p className="text-[10px] text-outline uppercase tracking-wider">
            Super Admin
          </p>
        </div>
        <img
          alt="Administrator"
          className="w-10 h-10 rounded-full object-cover"
          data-alt="A professional studio portrait of a corporate male administrator in a tailored dark suit. He has a confident, approachable expression against a clean, softly lit gray background. The lighting is high-key and professional, embodying a corporate modern aesthetic with sharp focus and high contrast, consistent with a premium enterprise dashboard interface."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeiisg1XlPBkvhm2oVUMxMUgDDi9Z5sxWV1m9lBbOOdRXP3yCz9D2mjxOtKoelxh7D-1S4dXYSVcfEKkNNc5phDWYD1t4dnk5E75AK_yit5D9MtvwRAm6_JuVpDQOmzs0uO6R0Kj2khshuabmMR5gDwxsBMYSmbOLymyW7QmJ5s28QzXt62_KJEKSI_Qe_eonNqUbAVh8kqPsgEgA5J-ucPTPyrPrHwOY1lMB64l7sny4R9o2W4bbrCB8F_yHHdLv0dzv-5ikIHD8"
        />
      </div>
    </div>
  </header>
  {/* Main Content */}
  <main className="ml-64 mt-16 p-margin max-w-max_width mx-auto">
    {/* Dashboard Header */}
    <div className="mb-lg">
      <h2 className="font-h1 text-h1 text-on-background mb-base">
        Platform Insights
      </h2>
      <p className="font-body-md text-body-md text-on-primary-container">
        Real-time performance metrics for JobKar Enterprise.
      </p>
    </div>
    {/* KPI Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-lg">
      {/* KPI 1 */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-primary-fixed rounded-lg text-primary">
            <span className="material-symbols-outlined">group</span>
          </div>
          <span className="text-on-secondary-container bg-secondary-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            +12%
          </span>
        </div>
        <p className="text-on-primary-container font-label-caps text-label-caps mb-xs">
          TOTAL USERS
        </p>
        <h3 className="font-h2 text-h2 text-on-surface">124.8k</h3>
      </div>
      {/* KPI 2 */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-secondary-container rounded-lg text-on-secondary-container">
            <span className="material-symbols-outlined">work</span>
          </div>
          <span className="text-on-secondary-container bg-secondary-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            +5.4%
          </span>
        </div>
        <p className="text-on-primary-container font-label-caps text-label-caps mb-xs">
          ACTIVE JOBS
        </p>
        <h3 className="font-h2 text-h2 text-on-surface">12,450</h3>
      </div>
      {/* KPI 3 */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-tertiary-fixed rounded-lg text-on-tertiary-fixed-variant">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="text-on-secondary-container bg-secondary-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            +18%
          </span>
        </div>
        <p className="text-on-primary-container font-label-caps text-label-caps mb-xs">
          MONTHLY REVENUE
        </p>
        <h3 className="font-h2 text-h2 text-on-surface">$84,200</h3>
      </div>
      {/* KPI 4 */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-transparent hover:border-secondary transition-all">
        <div className="flex justify-between items-start mb-sm">
          <div className="p-xs bg-error-container rounded-lg text-on-error-container">
            <span className="material-symbols-outlined">analytics</span>
          </div>
          <span className="text-error bg-error-container/20 px-2 py-0.5 rounded-full font-label-caps text-label-caps">
            -2.1%
          </span>
        </div>
        <p className="text-on-primary-container font-label-caps text-label-caps mb-xs">
          APPLICATION RATE
        </p>
        <h3 className="font-h2 text-h2 text-on-surface">24.5%</h3>
      </div>
    </div>
    {/* Main Chart & Stats Bento */}
    <div className="grid grid-cols-12 gap-gutter mb-lg">
      {/* Chart Section */}
      <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
        <div className="flex justify-between items-center mb-lg">
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">Growth Overview</h3>
            <p className="font-body-sm text-body-sm text-on-primary-container">
              User registrations vs job postings
            </p>
          </div>
          <div className="flex gap-sm">
            <button className="px-sm py-1 border border-outline-variant rounded-full text-label-caps font-label-caps hover:bg-surface-container transition-colors">
              Daily
            </button>
            <button className="px-sm py-1 bg-primary text-white rounded-full text-label-caps font-label-caps">
              Monthly
            </button>
          </div>
        </div>
        {/* Visual Placeholder for Chart */}
        <div className="h-64 flex items-end justify-between px-sm relative">
          <div className="absolute inset-0 flex flex-col justify-between py-2 border-l border-b border-slate-100">
            <div className="w-full border-t border-slate-50" />
            <div className="w-full border-t border-slate-50" />
            <div className="w-full border-t border-slate-50" />
            <div className="w-full border-t border-slate-50" />
          </div>
          <div className="w-12 bg-secondary rounded-t h-[30%] relative group">
            <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded">
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
        <div className="bg-primary-container text-white p-md rounded-xl flex-1 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-label-caps text-label-caps text-on-primary-container mb-xs">
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
        <div className="bg-white border border-slate-200 p-md rounded-xl flex-1 shadow-sm">
          <div className="flex items-center gap-sm mb-md">
            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">
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
              <span className="text-on-primary-container">Mobile App</span>
              <span className="font-semibold">68%</span>
            </div>
            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary w-[68%] h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Table Section */}
    <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] overflow-hidden">
      <div className="p-md border-b border-slate-100 flex justify-between items-center">
        <div>
          <h3 className="font-h3 text-h3 text-on-surface">
            Recent Platform Activity
          </h3>
          <p className="font-body-sm text-body-sm text-on-primary-container">
            Real-time log of user and employer actions.
          </p>
        </div>
        <button className="font-label-strong text-label-strong text-on-secondary-container px-md py-sm hover:bg-secondary-container/10 transition-colors rounded-lg">
          View All Activity
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low border-b border-slate-100">
            <tr>
              <th className="px-md py-sm font-label-caps text-label-caps text-on-primary-container">
                User/Entity
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-on-primary-container">
                Action
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-on-primary-container">
                Status
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-on-primary-container">
                Date
              </th>
              <th className="px-md py-sm font-label-caps text-label-caps text-on-primary-container">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">
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
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <img
                    className="w-8 h-8 rounded bg-surface object-cover"
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
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">
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
                <span className="bg-error-container text-on-error-container px-2 py-1 rounded text-[11px] font-bold uppercase">
                  Error
                </span>
              </td>
              <td className="px-md py-md font-body-sm text-body-sm text-outline">
                Oct 12, 10:30 AM
              </td>
              <td className="px-md py-md">
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
                  more_horiz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-md py-md">
                <div className="flex items-center gap-sm">
                  <img
                    className="w-8 h-8 rounded bg-surface object-cover"
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
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">
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
