import EmployerNav from '@/components/EmployerNav'
import React from 'react'

const JobPosting = () => {
  return (
      <>
    <div>
      <div className="bg-background text-on-background antialiased flex">
  {/* SideNavBar */}
  <EmployerNav/>
  {/* Main Content Area */}
  <main className="flex-1 min-w-0 flex flex-col">
    {/* TopAppBar */}
    <header className="w-full border-b border-slate-200 sticky top-0 z-40 bg-white/80 backdrop-blur-md h-16 flex justify-between items-center px-8">
      <div className="flex items-center bg-surface-container rounded-lg px-4 py-2 w-96">
        <span
          className="material-symbols-outlined text-outline"
          data-icon="search"
        >
          search
        </span>
        <input
          className="bg-transparent border-none focus:ring-0 text-sm font-body-sm w-full ml-2"
          placeholder="Search job postings..."
          type="text"
        />
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors relative">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
          </button>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-label-strong font-label-strong text-slate-900">
              Alexander Thorne
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              Head of Recruitment
            </p>
          </div>
          <img
            alt="Recruiter Profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            data-alt="A professional portrait of a male recruiter with a confident expression, set against a blurred office background. The lighting is bright and modern, emphasizing clarity and professionalism. The color palette is composed of soft whites and corporate blues, maintaining a high-end SaaS platform aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI94k2148NnKLaMqszYHfWcC5wf9lazxuErqygIJQXeGgxMnncDVlEEYsckwQObsBHH39ES5Pc2sqvXSfxyAayivdmsh73lqVnMBJabBEO9p960b0PekKpGrxH64a_4q5gyHFkPp7wGvrf19AVdQK0y5sX3BmVb1aIc2uGwAJ3rYUC_bYPL7UaXW9zDzlABNXwVIUSU0RfcBekkpq5tXYXSS6GucdWwPdHOz9TsXEgPHBUacK-ACrbdo30KRS1a1U5OVMbkyC2VJE"
          />
        </div>
      </div>
    </header>
    {/* Canvas */}
    <div className="p-8 max-w-[1280px] w-full mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-h1 text-h1 text-slate-900 mb-2">Job Postings</h2>
          <p className="text-body-md font-body-md text-slate-500">
            Manage and track your active recruitment cycles.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg font-label-strong text-label-strong text-slate-700 hover:bg-white hover:shadow-soft transition-all">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="filter_list"
            >
              filter_list
            </span>
            Filters
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-on-secondary rounded-lg font-label-strong text-label-strong hover:shadow-lg transition-all active:scale-95">
            <span className="material-symbols-outlined text-lg" data-icon="add">
              add
            </span>
            Post New Job
          </button>
        </div>
      </div>
      {/* Stats Overview - Bento Style */}
      <div className="grid grid-cols-4 gap-gutter mb-8">
        <div className="bg-white p-6 rounded-xl shadow-soft border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-label-caps font-label-caps text-slate-400 uppercase">
              Active Jobs
            </span>
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="bolt"
            >
              bolt
            </span>
          </div>
          <div className="text-h1 font-h1 text-slate-900">12</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-label-caps font-label-caps text-slate-400 uppercase">
              Total Applicants
            </span>
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="group"
            >
              group
            </span>
          </div>
          <div className="text-h1 font-h1 text-slate-900">428</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-label-caps font-label-caps text-slate-400 uppercase">
              Interviews Scheduled
            </span>
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="calendar_month"
            >
              calendar_month
            </span>
          </div>
          <div className="text-h1 font-h1 text-slate-900">18</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <span className="text-label-caps font-label-caps text-slate-400 uppercase">
              Avg. Time to Fill
            </span>
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="timer"
            >
              timer
            </span>
          </div>
          <div className="text-h1 font-h1 text-slate-900">24d</div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-8 border-b border-slate-200 mb-6">
        <button className="pb-4 text-label-strong font-label-strong border-b-2 border-slate-900 text-slate-900">
          All Posts (24)
        </button>
        <button className="pb-4 text-label-strong font-label-strong text-slate-400 hover:text-slate-600 transition-colors">
          Active (12)
        </button>
        <button className="pb-4 text-label-strong font-label-strong text-slate-400 hover:text-slate-600 transition-colors">
          Drafts (5)
        </button>
        <button className="pb-4 text-label-strong font-label-strong text-slate-400 hover:text-slate-600 transition-colors">
          Expired (7)
        </button>
      </div>
      {/* List View (Table Hybrid) */}
      <div className="bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-4 text-label-caps font-label-caps text-slate-500 uppercase">
                Job Title &amp; Location
              </th>
              <th className="px-6 py-4 text-label-caps font-label-caps text-slate-500 uppercase text-center">
                Status
              </th>
              <th className="px-6 py-4 text-label-caps font-label-caps text-slate-500 uppercase text-center">
                Applicants
              </th>
              <th className="px-6 py-4 text-label-caps font-label-caps text-slate-500 uppercase text-center">
                Date Posted
              </th>
              <th className="px-6 py-4 text-label-caps font-label-caps text-slate-500 uppercase text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {/* Row 1: Active */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-6">
                <div className="flex flex-col">
                  <span className="text-body-md font-h3 text-slate-900 mb-1">
                    Senior Product Designer
                  </span>
                  <span className="text-label-strong font-body-sm text-slate-500 flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    San Francisco, CA (Remote)
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-caps font-bold">
                  ACTIVE
                </span>
              </td>
              <td className="px-6 py-6 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-body-md font-bold text-slate-900">
                    84
                  </span>
                  <span className="text-[10px] text-secondary font-bold">
                    +12 new today
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center text-body-sm text-slate-500">
                Oct 12, 2023
              </td>
              <td className="px-6 py-6 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    title="View Applicants"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="visibility"
                    >
                      visibility
                    </span>
                  </button>
                  <button
                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    title="Edit Job"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="edit"
                    >
                      edit
                    </span>
                  </button>
                  <button
                    className="p-2 text-slate-400 hover:text-error hover:bg-error-container rounded transition-colors"
                    title="Close Posting"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="block"
                    >
                      block
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 2: Draft */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-6">
                <div className="flex flex-col">
                  <span className="text-body-md font-h3 text-slate-900 mb-1">
                    Lead Backend Engineer (Node.js)
                  </span>
                  <span className="text-label-strong font-body-sm text-slate-500 flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    New York, NY
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-label-caps font-bold">
                  DRAFT
                </span>
              </td>
              <td className="px-6 py-6 text-center">
                <span className="text-body-md font-bold text-slate-300">—</span>
              </td>
              <td className="px-6 py-6 text-center text-body-sm text-slate-400 italic">
                Not posted yet
              </td>
              <td className="px-6 py-6 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-3 py-1.5 bg-slate-900 text-white text-label-strong rounded hover:bg-slate-800 transition-colors">
                    Publish
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="edit"
                    >
                      edit
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 3: Expired */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-6">
                <div className="flex flex-col">
                  <span className="text-body-md font-h3 text-slate-400 line-through mb-1">
                    QA Automation Lead
                  </span>
                  <span className="text-label-strong font-body-sm text-slate-400 flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    Austin, TX
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-error-container text-on-error-container text-label-caps font-bold">
                  EXPIRED
                </span>
              </td>
              <td className="px-6 py-6 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-body-md font-bold text-slate-400">
                    156
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center text-body-sm text-slate-500">
                Aug 15, 2023
              </td>
              <td className="px-6 py-6 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-3 py-1.5 border border-slate-200 text-slate-600 text-label-strong rounded hover:bg-slate-50 transition-colors">
                    Repost
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="history"
                    >
                      history
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 4: Active */}
            <tr className="hover:bg-slate-50/30 transition-colors group">
              <td className="px-6 py-6">
                <div className="flex flex-col">
                  <span className="text-body-md font-h3 text-slate-900 mb-1">
                    Marketing Operations Manager
                  </span>
                  <span className="text-label-strong font-body-sm text-slate-500 flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px]"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    London, UK (On-site)
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-caps font-bold">
                  ACTIVE
                </span>
              </td>
              <td className="px-6 py-6 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-body-md font-bold text-slate-900">
                    42
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Steady volume
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-center text-body-sm text-slate-500">
                Nov 01, 2023
              </td>
              <td className="px-6 py-6 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    title="View Applicants"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="visibility"
                    >
                      visibility
                    </span>
                  </button>
                  <button
                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    title="Edit Job"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="edit"
                    >
                      edit
                    </span>
                  </button>
                  <button
                    className="p-2 text-slate-400 hover:text-error hover:bg-error-container rounded transition-colors"
                    title="Close Posting"
                  >
                    <span
                      className="material-symbols-outlined"
                      data-icon="block"
                    >
                      block
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50/30 flex justify-between items-center border-t border-slate-100">
          <span className="text-body-sm text-slate-500">
            Showing 1 to 10 of 24 results
          </span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded border border-slate-200 text-slate-400 hover:bg-white disabled:opacity-50"
              disabled={true}
            >
              <span
                className="material-symbols-outlined text-sm"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
            </button>
            <button className="px-3 py-1 rounded bg-slate-900 text-white text-body-sm font-bold">
              1
            </button>
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-white text-body-sm">
              2
            </button>
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-white text-body-sm">
              3
            </button>
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-white">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* FAB for quick posting (Mobile context, kept for completeness) */}
  <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform md:hidden">
    <span className="material-symbols-outlined" data-icon="add">
      add
    </span>
  </button>
  </div>
    </div>
</>

  )
}

export default JobPosting
