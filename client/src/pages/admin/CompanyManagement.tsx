import AdminNav from '@/components/AdminNav'
import React from 'react'

const CompanyManagement = () => {
  return (
    <div>
      <>
  {/* Sidebar Navigation Shell */}
  <AdminNav />
  {/* Top App Bar */}
  <header className="fixed top-0 right-0 left-64 h-16 px-6 flex justify-between items-center z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 font-manrope text-sm">
    <div className="flex items-center gap-4 flex-1">
      <div className="relative w-full max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:border-secondary focus:ring-0 rounded-lg text-sm transition-all"
          placeholder="Search companies, admins, or sectors..."
          type="text"
        />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-secondary transition-colors relative">
        <span className="material-symbols-outlined">notifications</span>
        <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-secondary transition-colors">
        <span className="material-symbols-outlined">help</span>
      </button>
      <div className="h-8 w-[1px] bg-slate-200 mx-2" />
      <button className="flex items-center gap-2 px-3 py-1.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all active:scale-95 shadow-sm">
        <span className="material-symbols-outlined text-sm">add</span>
        <span className="text-xs">Add New Company</span>
      </button>
    </div>
  </header>
  {/* Main Content */}
  <main className="ml-64 pt-16 min-h-screen p-8 max-w-[1440px] mx-auto">
    {/* Page Header */}
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="font-h1 text-h1 text-slate-900">Company Management</h2>
        <p className="text-body-md text-slate-500 mt-1">
          Review, verify, and monitor enterprise partnerships across the
          platform.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-label-strong rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">filter_list</span>
          Filters
        </button>
        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-label-strong rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">download</span>
          Export CSV
        </button>
      </div>
    </div>
    {/* Stats Overview */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-8">
      <div className="bg-white p-6 rounded-xl card-shadow border border-slate-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            corporate_fare
          </span>
        </div>
        <div>
          <p className="text-label-caps text-slate-500 uppercase tracking-widest">
            Total Companies
          </p>
          <h3 className="text-h1 font-bold text-slate-900 leading-none">
            1,284
          </h3>
          <p className="text-xs text-secondary font-semibold mt-1">
            ↑ 12% from last month
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl card-shadow border border-slate-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            verified_user
          </span>
        </div>
        <div>
          <p className="text-label-caps text-slate-500 uppercase tracking-widest">
            Pending Verifications
          </p>
          <h3 className="text-h1 font-bold text-slate-900 leading-none">42</h3>
          <p className="text-xs text-amber-600 font-semibold mt-1">
            Average wait: 1.4 days
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl card-shadow border border-slate-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            list_alt
          </span>
        </div>
        <div>
          <p className="text-label-caps text-slate-500 uppercase tracking-widest">
            Active Listings
          </p>
          <h3 className="text-h1 font-bold text-slate-900 leading-none">
            8,921
          </h3>
          <p className="text-xs text-secondary font-semibold mt-1">
            94% fill rate
          </p>
        </div>
      </div>
    </div>
    {/* Data Table Container */}
    <section className="bg-white rounded-xl card-shadow border border-slate-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
        <h4 className="font-h3 text-h3 text-slate-900">Registered Companies</h4>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400">Showing 1-10 of 1,284</span>
          <div className="flex border border-slate-200 rounded-lg overflow-hidden">
            <button className="p-2 bg-slate-50 text-slate-400 cursor-not-allowed border-r border-slate-200">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 hover:bg-slate-50 text-slate-600 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                Industry
              </th>
              <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                Total Jobs
              </th>
              <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Table Row 1 */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-slate-100 bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      data-alt="Minimalist geometric logo for a tech company named NexaPath, using deep slate and teal accents, vector style on white background."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoCH-W_MoWLF_sdDLh1T-7q_u7lvu0XEOeF2zoUamD_8JhX7zqIvQp6xBtp_2VEoNOpHNcCU5sNOznYXkuTgtBDSxVX40UIsvbT8dXxuUtiAZZj1x3vDKo8r1MOkbyLoV9D4DjDtOs60RbxCaYRx55w7IVh1HYVSbWOi3dB_eCDqD0tlMk8bVbxm2DBMYOgI6u3GJ9mIBcQQpczZg0Cktk3HvEFMzN00P7ySbUgBBajcOVDbjiLHHoGfSq5Gdki3srB-AceO-ZdC0"
                    />
                  </div>
                  <div>
                    <div className="font-label-strong text-slate-900">
                      NexaPath Systems
                    </div>
                    <div className="text-xs text-slate-500">nexapath.io</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm text-slate-600">
                  Software &amp; Cloud
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider border border-green-100">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm font-semibold text-slate-700">
                  142
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-3 py-1.5 text-secondary font-semibold hover:bg-secondary/10 rounded transition-colors text-xs">
                  Manage
                </button>
              </td>
            </tr>
            {/* Table Row 2 */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-slate-100 bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      data-alt="Abstract leaf symbol logo for a renewable energy firm called GreenCurrent, professional corporate style, green and slate color scheme."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHLZQ7FVxeWNk6Cy3TxSRnQ_BK3xi5fF6vLiIYIBK6XhCIqef5tQU8d1cmfYGE2Xu0EKFTLO2lpZvy3w-kqdTKNhlITbzOaodidNOt6eQGYog6EeJyDXHTMwcrZxcz0Okjwb4e_RvO8fN2w3TMvUvDwZjtoXRuQWb89uJYL1XPl2vD5zfgOJFPX4dc2BsuuYtqqc5zglCYCMmX2vdxr8vO5svQkKDx5qQ39_xCTy45dRSqmOOoYTXwxUqX0MKwOUXZPlDOoQmSoo"
                    />
                  </div>
                  <div>
                    <div className="font-label-strong text-slate-900">
                      GreenCurrent Ltd
                    </div>
                    <div className="text-xs text-slate-500">
                      greencurrent.co
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm text-slate-600">
                  Renewable Energy
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded uppercase tracking-wider border border-amber-100">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm font-semibold text-slate-700">
                  0
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-3 py-1.5 text-secondary font-semibold hover:bg-secondary/10 rounded transition-colors text-xs">
                  Manage
                </button>
              </td>
            </tr>
            {/* Table Row 3 */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-slate-100 bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      data-alt="Modern block typography logo for a global logistics provider named VeloxLogix, bold dark blue and gray professional look."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD06R-BfPtIszqrXc_e_2z-PymjkuTC_RSldCj2sP8lYJ7o45PcUI7xKsM5cPcO7eJNSpoEsecospRZOJDZpmUi7LOQjKMpFdhr51HRIWr9VttnOeSjA9Jn-rrPxmPMQzfgPDnmY6dWwX0VIbHpc4yr9wyaVDD6YiqnlGqOUF1xu2n5HmuuzDVlbj8SJTRGYY0Xqpax5Bqnml5r_XFMmfkkUUMwTGSb0zKcpOHN4qs1Dh8Q8IknscOLs57OreD-O-UNO1tFPiV2s_g"
                    />
                  </div>
                  <div>
                    <div className="font-label-strong text-slate-900">
                      VeloxLogix Global
                    </div>
                    <div className="text-xs text-slate-500">veloxlogix.com</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm text-slate-600">Logistics</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded uppercase tracking-wider border border-slate-200">
                  Suspended
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm font-semibold text-slate-700">
                  89
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-3 py-1.5 text-secondary font-semibold hover:bg-secondary/10 rounded transition-colors text-xs">
                  Manage
                </button>
              </td>
            </tr>
            {/* Table Row 4 */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-slate-100 bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      data-alt="Creative brain icon logo for a marketing agency called MindCanvas, vibrant artistic professional design, corporate branding."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsge_5G6-IJmdA5DWgeEEaQYnW5Fjqcdj11QzaF8Taf-0ZTVW67detHjpOmRIWYtY9k_ixe_42LGPUIF-5JOpOnHIERHrcRrcjbIL_BYadGrzFyxOr4vqQIdd_YmvRDIjryzK4AIBoz1cEuuyth0EUaFnfqOmtU_fvqOJXsHe4XCjElK4gYimNdSXV77CdvH2A98CcZWNqPx5ny_Ve-q4KSAOlM0b-9CFje4jvVh9g1TeGH7PxwrvoQFPSKoAg0uvrajq0uecQ8oA"
                    />
                  </div>
                  <div>
                    <div className="font-label-strong text-slate-900">
                      MindCanvas Agency
                    </div>
                    <div className="text-xs text-slate-500">mindcanvas.com</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm text-slate-600">Marketing</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider border border-green-100">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm font-semibold text-slate-700">
                  31
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-3 py-1.5 text-secondary font-semibold hover:bg-secondary/10 rounded transition-colors text-xs">
                  Manage
                </button>
              </td>
            </tr>
            {/* Table Row 5 */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-slate-100 bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      data-alt="Sleek silver shield logo for a cybersecurity firm named AegisShield, high-tech security aesthetic, slate gray background."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO8td3GfIsdTTT60EKXj4FD3cvM8fIvZTs8ileZuaUrWQClwMDR3c7Z6QJ_iEF54y6O7CyblKBjmIeRmyRitHzfhwaP7p0-LNYCpnHOuB-aCzj8ER-bMeWWaufzy22XX8ra3073HFKRMrMhAKATNF5XhjxpSUbB3Ssbwkyuwdg3vbv2iJMt21J0jf-7kx5A42PIL835m5Ih2Cw2eFJJGd-HBELtAkfUjOFeAQzuDeEUdG2AFFn80TUZtvecGjvZj3uxfb_lCBfkwg"
                    />
                  </div>
                  <div>
                    <div className="font-label-strong text-slate-900">
                      AegisShield Security
                    </div>
                    <div className="text-xs text-slate-500">aegis.security</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm text-slate-600">
                  Cybersecurity
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider border border-green-100">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="text-body-sm font-semibold text-slate-700">
                  12
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-3 py-1.5 text-secondary font-semibold hover:bg-secondary/10 rounded transition-colors text-xs">
                  Manage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/30">
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 font-label-strong">
            Items per page
          </span>
          <select className="bg-white border-slate-200 text-xs rounded-lg py-1 px-3 focus:ring-0 focus:border-secondary">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
            1
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            3
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </section>
    {/* Dynamic Activity Overlay (Decorative/UI Hint) */}
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl card-shadow border border-slate-100">
        <h4 className="font-h3 text-h3 text-slate-900 mb-6">
          Recent Verifications
        </h4>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                Quantix Labs was verified
              </p>
              <p className="text-xs text-slate-500">
                By Admin Sarah J. • 2 hours ago
              </p>
            </div>
            <span className="text-xs font-bold text-secondary">COMPLETE</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                SkyLink Logistics uploaded documents
              </p>
              <p className="text-xs text-slate-500">
                Pending review by moderation team • 5 hours ago
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600">
              IN PROGRESS
            </span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                Nexus Health rejected verification
              </p>
              <p className="text-xs text-slate-500">
                Reason: Invalid business license • 1 day ago
              </p>
            </div>
            <span className="text-xs font-bold text-error">REJECTED</span>
          </div>
        </div>
      </div>
      {/* Quick Actions Bento */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900 text-white p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
          <span className="material-symbols-outlined text-3xl opacity-50">
            analytics
          </span>
          <div>
            <h5 className="font-bold text-lg">Platform Growth</h5>
            <p className="text-xs opacity-70">
              View company onboarding metrics
            </p>
          </div>
        </div>
        <div className="bg-secondary text-white p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
          <span className="material-symbols-outlined text-3xl opacity-50">
            mail
          </span>
          <div>
            <h5 className="font-bold text-lg">Broadcast</h5>
            <p className="text-xs opacity-70">Message all company admins</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between col-span-2 hover:bg-slate-50 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-3xl text-secondary">
              security
            </span>
            <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
          <div>
            <h5 className="font-bold text-lg text-slate-900">
              Security Audit Logs
            </h5>
            <p className="text-xs text-slate-500">
              Monitor sensitive administrative company changes
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default CompanyManagement
