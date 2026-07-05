import EmployerNav from "@/components/EmployerNav"

const Dashboard = () => {
  return (
      <>
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
  {/* SideNavBar Component */}
  <EmployerNav />
  <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
    {/* TopAppBar Component */}
    <header className="w-full border-b border-slate-200 sticky top-0 z-40 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 py-4 h-16">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-md">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            data-icon="search"
          >
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-secondary text-sm"
            placeholder="Search candidates or jobs..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="material-symbols-outlined" data-icon="notifications">
            notifications
          </span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2" />
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-label-strong text-slate-900">Sarah Jenkins</p>
            <p className="text-[10px] text-slate-500 font-label-caps">
              Senior Recruiter
            </p>
          </div>
          <img
            alt="Recruiter Profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            data-alt="A professional headshot of a middle-aged female recruiter with a friendly smile, set in a brightly lit modern office with soft bokeh background. The aesthetic is clean and professional, using high-key lighting to emphasize trust and efficiency in a light-mode corporate environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2go0BT3PqV5BbrA564d-TcQ_dEWTWNYfrOvekuxWp1MCJZg1JKguvW9v2916ej-aA-higHS3BLPvpzauvksO36t_om62qhOpdG43PKGFoNyxzk7z8UUUM9CFa-Xs-m7yIZEg4zZ-N2aagFVo33U1EwR8xObC--IisDMwNlRM9WmJ3xHgDBI1T8ca5zwSTro5KpzYpa7Koamp2ZPDotp-G7P1hpeOlvrfCPakIy9c_HAm7pbqegB-0Bh7cVWx7FmsdhR7LDbvTs18"
          />
        </div>
      </div>
    </header>
    {/* Main Content */}
    <main className="flex-1 overflow-y-auto p-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-8">
        <h2 className="font-h1 text-h1 text-slate-900">Overview</h2>
        <p className="text-body-md text-slate-500">
          Welcome back, Sarah. Here's what's happening with your recruitment
          pipeline today.
        </p>
      </div>
      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg">
        <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined" data-icon="work">
                work
              </span>
            </div>
            <p className="text-label-caps text-slate-500 mb-1">
              Active Job Postings
            </p>
            <h3 className="text-display font-display text-slate-900">24</h3>
          </div>
          <div className="mt-4 flex items-center text-secondary font-label-strong text-sm">
            <span
              className="material-symbols-outlined text-sm mr-1"
              data-icon="trending_up"
            >
              trending_up
            </span>
            +4 from last month
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center mb-4 text-secondary">
              <span className="material-symbols-outlined" data-icon="group">
                group
              </span>
            </div>
            <p className="text-label-caps text-slate-500 mb-1">
              Applicants this Month
            </p>
            <h3 className="text-display font-display text-slate-900">1,284</h3>
          </div>
          <div className="mt-4 flex items-center text-secondary font-label-strong text-sm">
            <span
              className="material-symbols-outlined text-sm mr-1"
              data-icon="trending_up"
            >
              trending_up
            </span>
            +12% in engagement
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-4 text-tertiary-container">
              <span className="material-symbols-outlined" data-icon="event">
                event
              </span>
            </div>
            <p className="text-label-caps text-slate-500 mb-1">
              Interviews Scheduled
            </p>
            <h3 className="text-display font-display text-slate-900">18</h3>
          </div>
          <div className="mt-4 flex items-center text-on-primary-container font-label-strong text-sm">
            <span
              className="material-symbols-outlined text-sm mr-1"
              data-icon="schedule"
            >
              schedule
            </span>
            4 scheduled for today
          </div>
        </div>
      </div>
      {/* Dashboard Layout: Activity Feed & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-8 bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-h3 text-h3 text-slate-900">Recent Activity</h3>
            <button className="text-sm font-label-strong text-secondary hover:underline transition-all">
              View All
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {/* Activity Item */}
            <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
              <img
                alt="Applicant"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A portrait of a young professional male in a corporate setting, featuring soft natural lighting and a minimalist background. The style is modern and clean, aligning with the high-end recruitment platform's aesthetic of trust and clarity."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHQ1X7pSpsqGSjcyzHpKj5P31Py0O2lL2ruCdUL6c8VJVGRMLZ_8Sf-ilBmgA4gCA7aZz3-1jVuPjDlcJoSz_T2ZdW3yZ1j5uBIa9wOwEecd048yUqLK8kQHdKmfB0k01kGcSOTLPkuZPWGlSzQ3wYV1q6V-2PDyPc662YGoOJjaqDGaU1-wkfEbsSFuOOG5Oi7RgDULQnpKYpOWPwVhrm9AyU_ujKoTKZR73NViw-zUq5ydm76kMyYOC0ksT-a1QBWWv5yHntEk"
              />
              <div className="flex-1">
                <p className="text-body-md text-slate-900">
                  <span className="font-bold">David Chen</span> applied for{" "}
                  <span className="font-bold">Senior UX Designer</span>
                </p>
                <p className="text-body-sm text-slate-500">24 minutes ago</p>
              </div>
              <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-label-caps rounded-full">
                New Application
              </span>
            </div>
            {/* Activity Item */}
            <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined" data-icon="update">
                  update
                </span>
              </div>
              <div className="flex-1">
                <p className="text-body-md text-slate-900">
                  Application status for{" "}
                  <span className="font-bold">Emma Wilson</span> moved to{" "}
                  <span className="text-secondary font-bold">Interviewing</span>
                </p>
                <p className="text-body-sm text-slate-500">2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-label-caps rounded-full">
                Status Change
              </span>
            </div>
            {/* Activity Item */}
            <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
              <img
                alt="Applicant"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A professional woman smiling in a bright office environment, styled with high-key lighting and a soft focus background to reflect a corporate yet accessible vibe. The colors are muted and professional, emphasizing the reliability and efficiency of the job search platform."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXkZeXrTrkhFeKcEpdJxZAR2C84ApE1TiabT1x1OHcSAGDtmtmjD2F0PrNdJuI78SfT-AUacZYHosXXo9ICznPZz47XmsBV8AXWKClEukgGOYmdmqP-KBxOHyxjCjNZ8jAYZgkLDM5uyPwX9795q-VrLT8TZ4IIU_zFJbhvGVSwoQbscSMBdZaNHe8KEaiAspCJPNPBRzO0khH964i31q9dKJdCWmHnjv0a4EROFTlne5tL9gJfTd-OuZRyBujhRRp6zMJZYqOD4"
              />
              <div className="flex-1">
                <p className="text-body-md text-slate-900">
                  <span className="font-bold">Marcus Holloway</span> accepted
                  the offer for{" "}
                  <span className="font-bold">Cloud Architect</span>
                </p>
                <p className="text-body-sm text-slate-500">
                  Yesterday, 4:15 PM
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-label-caps rounded-full">
                Hired
              </span>
            </div>
          </div>
        </div>
        {/* Quick Actions Sidebar */}
        <div className="lg:col-span-4 space-y-gutter">
          {/* Quick Actions Card */}
          <div className="bg-primary-container text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-h3 text-h3 mb-2">Quick Actions</h3>
              <p className="text-body-sm text-slate-400 mb-6">
                Streamline your workflow with these shortcuts.
              </p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-lg group">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined"
                      data-icon="post_add"
                    >
                      post_add
                    </span>
                    <span className="font-label-strong">
                      Create Job Posting
                    </span>
                  </div>
                  <span
                    className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-lg group">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined"
                      data-icon="person_search"
                    >
                      person_search
                    </span>
                    <span className="font-label-strong">Talent Search</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors rounded-lg group">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined"
                      data-icon="calendar_month"
                    >
                      calendar_month
                    </span>
                    <span className="font-label-strong">Manage Schedule</span>
                  </div>
                  <span
                    className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary opacity-20 blur-3xl rounded-full" />
          </div>
          {/* Upcoming Interviews Mini-Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-label-strong text-slate-900">
                Today's Schedule
              </h4>
              <span
                className="material-symbols-outlined text-slate-400"
                data-icon="more_horiz"
              >
                more_horiz
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-center min-w-[50px]">
                  <p className="text-xs font-label-caps text-slate-400">
                    10:00
                  </p>
                  <p className="text-xs font-label-caps text-slate-400">AM</p>
                </div>
                <div className="h-10 w-1 bg-secondary rounded-full" />
                <div>
                  <p className="text-sm font-label-strong text-slate-900">
                    Frontend Engineer
                  </p>
                  <p className="text-xs text-slate-500">with Sofia Rodriguez</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center min-w-[50px]">
                  <p className="text-xs font-label-caps text-slate-400">
                    02:30
                  </p>
                  <p className="text-xs font-label-caps text-slate-400">PM</p>
                </div>
                <div className="h-10 w-1 bg-primary-fixed-dim rounded-full" />
                <div>
                  <p className="text-sm font-label-strong text-slate-900">
                    Product Manager
                  </p>
                  <p className="text-xs text-slate-500">with James Holden</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-xs font-label-strong text-slate-600 hover:bg-slate-50 transition-colors">
              Open Calendar
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  </div>
</>

    
  )
}

export default Dashboard
