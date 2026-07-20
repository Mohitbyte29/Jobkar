import UserNav from "@/components/UserNav"

const Application = () => {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
    <UserNav />
    <main className="flex-1 ml-64 overflow-y-auto">
  {/* BEGIN: ApplicationDashboard */}
  <div className="flex-1 p-8">
    {/* Page Title */}
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">My Applications</h1>
        <p className="text-sm text-slate-500">
          Track and manage all your job applications in one place.
        </p>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            className="pl-9 pr-12 py-2 bg-white border border-brand-border rounded-lg text-sm w-64"
            placeholder="Search applications..."
            type="text"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-mono">
            ⌘K
          </span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-border rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
          <i className="fa-solid fa-sliders" /> Filters
        </button>
      </div>
    </div>
    {/* Stats Row */}
    <div className="grid grid-cols-4 gap-4 mb-8">
      {/* Stat Card 1 */}
      <div className="bg-white p-4 rounded-xl border border-brand-border flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-brand-primary">
          <i className="fa-solid fa-file-invoice fa-lg" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Total Applications
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">24</span>
            <span className="text-[10px] text-slate-400">All time</span>
          </div>
        </div>
      </div>
      {/* Stat Card 2 */}
      <div className="bg-white p-4 rounded-xl border border-brand-border flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500">
          <i className="fa-solid fa-clock-rotate-left fa-lg" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Under Review
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">10</span>
            <span className="text-[10px] text-slate-400">
              Awaiting response
            </span>
          </div>
        </div>
      </div>
      {/* Stat Card 3 */}
      <div className="bg-white p-4 rounded-xl border border-brand-border flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
          <i className="fa-solid fa-calendar-check fa-lg" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Interviews
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">3</span>
            <span className="text-[10px] text-slate-400">
              Upcoming interviews
            </span>
          </div>
        </div>
      </div>
      {/* Stat Card 4 */}
      <div className="bg-white p-4 rounded-xl border border-brand-border flex items-center gap-4">
        <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500">
          <i className="fa-solid fa-circle-check fa-lg" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Offers
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">1</span>
            <span className="text-[10px] text-slate-400">Congratulations!</span>
          </div>
        </div>
      </div>
    </div>
    {/* Filter Bar */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-2 p-1 bg-white border border-brand-border rounded-xl">
        <button className="px-4 py-1.5 bg-[#635bff] text-white text-sm font-medium rounded-lg">
          All (24)
        </button>
        <button className="px-4 py-1.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-50">
          Submitted (10)
        </button>
        <button className="px-4 py-1.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-50">
          Under Review (10)
        </button>
        <button className="px-4 py-1.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-50">
          Interview (3)
        </button>
        <button className="px-4 py-1.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-50">
          Offer (1)
        </button>
        <button className="px-4 py-1.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-50">
          Rejected (0)
        </button>
        <button className="px-4 py-1.5 text-slate-500 text-sm font-medium rounded-lg hover:bg-slate-50">
          Withdrawn (0)
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <span>Sort by:</span>
        <button className="font-medium text-slate-800 flex items-center gap-1">
          Latest Applied <i className="fa-solid fa-chevron-down text-[10px]" />
        </button>
      </div>
    </div>
    {/* Application Cards List */}
    <div className="space-y-4" data-purpose="application-list">
      {/* Card 1: Google */}
      <div className="bg-white p-5 rounded-xl border border-brand-border hover:shadow-sm transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-14 h-14 border border-slate-100 rounded-lg flex items-center justify-center p-2">
              <img
                alt="Google"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-0UVqfn2AqpCZyNr-YxBEipPiHfLza3kqJx2aHEBIwVDe6YU7W1CGR48RdDFPqA1ToKlPHK72ucewlh0vEZpDfZpEqNzFEARX01g7SNZtGgTAZmgG7tckp7HZJcocptnCE6nsmcRShdY0sgHia4gPIrA-zbTv4oTOO2tZDPfy0QXM30vS4grXE4EzW0xpdZgAgDGD2n6q1BxjddL3oPS72CBxUbS1or-0VkKtVwx6HrRhHW9v286w5OJRZYxaKTexDq-QFRzpdWY"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">Frontend Developer</h3>
              <p className="text-slate-600 text-sm mb-2">Google</p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot" /> Bangalore,
                  Karnataka
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-sack-dollar" /> ₹12 — 18 LPA
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-briefcase" /> Full Time
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-md border border-amber-100 flex items-center gap-1.5">
                <i className="fa-solid fa-circle text-[6px]" /> Under Review
              </span>
              <button className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-brand-border text-brand-primary text-xs font-semibold rounded-lg hover:bg-slate-50">
                View Job
              </button>
              <button className="px-4 py-1.5 bg-[#635bff] text-white text-xs font-semibold rounded-lg hover:bg-brand-secondary">
                View Application
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex gap-6">
            <span>Applied on 19 July 2026</span>
            <span>
              <i className="fa-solid fa-file-pdf mr-1" /> Resume:
              Mohit_Verma_Resume.pdf
            </span>
          </div>
        </div>
      </div>
      {/* Card 2: Adobe */}
      <div className="bg-white p-5 rounded-xl border border-brand-border hover:shadow-sm transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-14 h-14 border border-slate-100 rounded-lg flex items-center justify-center p-2">
              <img
                alt="Adobe"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt_KJ-jYUhSEEIKEJr7IiAfhuN-H7dw8-o71gXEcL7-mq9PjuMOvj6uii0qv0ovNYWle8LhebPTpKsq92SODD5jLXeQepGzax3CnTsnP18WolRwrfk937sCHxSUIuqlxG-MIQ1iKebDkcivAW08aMofOmcNdgXzhyMoemPBUz0tSnLf4OOB6w6-0nNEF3aJRGZrHV084TLHlQqiYHxMzeGyWsDjSQ1z_JjJ9YwIXBdRD2Fh0rgLlNW7Hk2mr0lWoZ0hbm0kWKtNL4"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">UI/UX Designer</h3>
              <p className="text-slate-600 text-sm mb-2">Adobe</p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot" /> Noida, Uttar
                  Pradesh
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-sack-dollar" /> ₹8 — 12 LPA
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-briefcase" /> Full Time
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-md border border-indigo-100 flex items-center gap-1.5">
                <i className="fa-solid fa-calendar text-[10px]" /> Interview
                Scheduled
              </span>
              <button className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-brand-border text-brand-primary text-xs font-semibold rounded-lg hover:bg-slate-50">
                View Job
              </button>
              <button className="px-4 py-1.5 bg-[#635bff] text-white text-xs font-semibold rounded-lg hover:bg-[#4f46e5]">
                View Application
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex gap-6">
            <span>Applied on 18 July 2026</span>
            <span>
              <i className="fa-solid fa-file-pdf mr-1" /> Resume:
              Mohit_Verma_Resume.pdf
            </span>
          </div>
        </div>
      </div>
      {/* Card 3: Microsoft */}
      <div className="bg-white p-5 rounded-xl border border-brand-border hover:shadow-sm transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-14 h-14 border border-slate-100 rounded-lg flex items-center justify-center p-2">
              <img
                alt="Microsoft"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-dYz3JRlgOs8SPJy9wzD73KP-4dIiouHIy0rtVJNObsxiOnPNTzD3FRaHp9-I01eRwYFi8H2ZoaH0jedwe9zZVA4xqEFU2qUQRwf0TkUjSwt_hM49DhMLdhipdsarO7PVDfIvfWXGUPSwzYxcbdz6gRtQweHGWBXokUl18NyANWMjzoiadi9awOq8FNm0q9aBF0mgWk1EpM3IIiGhw0l7lQZ4ANO5RPk6qEooq1p9dxFCQTpwEWqr1NH3a_qg3vWsuOY8JRx8ui4"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">Backend Developer</h3>
              <p className="text-slate-600 text-sm mb-2">Microsoft</p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot" /> Hyderabad,
                  Telangana
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-sack-dollar" /> ₹15 — 22 LPA
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-briefcase" /> Full Time
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md border border-blue-100 flex items-center gap-1.5">
                <i className="fa-solid fa-star text-[10px]" /> Shortlisted
              </span>
              <button className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-brand-border text-brand-primary text-xs font-semibold rounded-lg hover:bg-slate-50">
                View Job
              </button>
              <button className="px-4 py-1.5 bg-[#635bff] text-white text-xs font-semibold rounded-lg hover:bg-brand-secondary">
                View Application
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex gap-6">
            <span>Applied on 15 July 2026</span>
            <span>
              <i className="fa-solid fa-file-pdf mr-1" /> Resume:
              Mohit_Verma_Resume.pdf
            </span>
          </div>
        </div>
      </div>
      {/* Card 4: Amazon */}
      <div className="bg-white p-5 rounded-xl border border-brand-border hover:shadow-sm transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-14 h-14 border border-slate-100 rounded-lg flex items-center justify-center p-2">
              <img
                alt="Amazon"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_daJl04aR9mGOR8TKvK70-dO2PL5iEzMhZrQEShofE6GaE8GY-lx0m_Q8PeKY8cFrtELUNMktQjG45LJ8Gsky0Z6-HH9meqlFR10aVJFU5Aeh1VyuMD81RVQdYqHyQDRVyDzAB9JOtXvsfkR07ilsTiu_QMqSQw-MJSCdhvcmU14CjRIMa2RLVNWLyqfuJQK2KnURoLBO35f-_lPVdaX13fpfF94tynyalLHXtS0bQ53wrjIc_a1Tyl6ccWf6BCOe9XMWgD3jiwg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">Full Stack Engineer</h3>
              <p className="text-slate-600 text-sm mb-2">Amazon</p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot" /> Bangalore,
                  Karnataka
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-sack-dollar" /> ₹18 — 28 LPA
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-briefcase" /> Full Time
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 flex items-center gap-1.5">
                <i className="fa-solid fa-paper-plane text-[10px]" /> Submitted
              </span>
              <button className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-brand-border text-brand-primary text-xs font-semibold rounded-lg hover:bg-slate-50">
                View Job
              </button>
              <button className="px-4 py-1.5 bg-[#635bff] text-white text-xs font-semibold rounded-lg hover:bg-brand-secondary">
                View Application
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex gap-6">
            <span>Applied on 10 July 2026</span>
            <span>
              <i className="fa-solid fa-file-pdf mr-1" /> Resume:
              Mohit_Verma_Resume.pdf
            </span>
          </div>
        </div>
      </div>
      {/* Card 5: Flipkart */}
      <div className="bg-white p-5 rounded-xl border border-brand-border hover:shadow-sm transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="w-14 h-14 border border-slate-100 rounded-lg flex items-center justify-center p-2">
              <img
                alt="Flipkart"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAQKI-w0r3sl9ovq9DBXE32_ArxDWlIvu3PEH9-gviPTfNksJNqokNzmdPAs5CQix4GJUAiqw0xLMHzPCMrSKNXr-c-ybG-yUlV5sikTcwtG9W4vl9zmUQaMl50eDBlkx_SzPQlbZjeNU4vyVBstERzhll5EMHjcGLl4t9op4GjyAse-vVmmHe-KOMiw_mOg7WbMvhjJKq0yZMXjN5kCeNc6sDL9raB1k76Iz575byaOnzsttxMC1AVnvzp7MykFlZQeCoALO1TWY"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-400">
                Product Analyst
              </h3>
              <p className="text-slate-400 text-sm mb-2">Flipkart</p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot" /> Bangalore,
                  Karnataka
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-sack-dollar" /> ₹10 — 16 LPA
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-briefcase" /> Full Time
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-md border border-red-100 flex items-center gap-1.5">
                <i className="fa-solid fa-xmark text-[10px]" /> Rejected
              </span>
              <button className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-brand-border text-brand-primary text-xs font-semibold rounded-lg hover:bg-slate-50">
                View Job
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex gap-6">
            <span>Applied on 05 July 2026</span>
            <span>
              <i className="fa-solid fa-file-pdf mr-1" /> Resume:
              Mohit_Verma_Resume.pdf
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END: ApplicationDashboard */}
  {/* BEGIN: RightSidebar */}
  
</main>
    </div>
  )
}

export default Application