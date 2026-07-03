import AdminNav from '@/components/AdminNav'
import React from 'react'

const JobManagement = () => {
  return (
    <div>
      <>
  {/* Sidebar Navigation */}
  <AdminNav />
  {/* Top App Bar */}
  <header className="fixed top-0 right-0 left-64 h-16 px-6 flex justify-between items-center z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div className="flex items-center gap-4">
      <h1 className="text-lg font-black text-slate-900 dark:text-slate-50 font-h2">
        JobBoard Admin
      </h1>
      <div className="relative ml-4">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
          search
        </span>
        <input
          className="pl-10 pr-4 py-1.5 bg-surface-container-low border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-secondary/20"
          placeholder="Search moderation queue..."
          type="text"
        />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button
        className="material-symbols-outlined text-slate-600 hover:text-teal-500 transition-colors"
        data-icon="notifications"
      >
        notifications
      </button>
      <button
        className="material-symbols-outlined text-slate-600 hover:text-teal-500 transition-colors"
        data-icon="settings"
      >
        settings
      </button>
      <button
        className="material-symbols-outlined text-slate-600 hover:text-teal-500 transition-colors"
        data-icon="help"
      >
        help
      </button>
      <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ml-2">
        <img
          alt="Administrator"
          data-alt="A professional headshot of a corporate administrator in a bright, modern office setting. The lighting is soft and natural, emphasizing a clean and trustworthy aesthetic. The background features blurred glass partitions and minimalist furniture in a high-end SaaS company environment, maintaining a light-mode color palette of soft greys and whites."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRnLU4Dhc7uKQjwdo8VnMgGdCAzCzrjnJ8JFatCxmWmvzM0JeK7xpD74p-L2t9QBZFvQZsptFuieukVOyg5evlXBDghh9qhaKbeNgr-5hrm2ZPxc4UVkZTeFuTV-H5AyXN1akoCPJmKewyb4uJiKTzsPYLv0HGSsgTeZBuoUPVFEkw81CkJJAFu2NGBp9GZ2B2wNSFPFqFcjDYnBEH-pcFVsnxVY4N7TY_CYf-1meFxlFrrxaIz_qNmdWlRRrsvbWO07Q8SwxNTM"
        />
      </div>
    </div>
  </header>
  {/* Main Content Canvas */}
  <main className="ml-64 mt-16 p-margin max-w-max_width mx-auto">
    {/* Header Section */}
    <div className="flex justify-between items-end mb-md">
      <div>
        <h2 className="font-h1 text-h1 text-on-surface">Job Moderation</h2>
        <p className="font-body-md text-on-surface-variant mt-xs">
          Manage and approve pending job listings to ensure platform quality.
        </p>
      </div>
      <div className="flex gap-sm">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-outline-variant shadow-sm">
          <span
            className="material-symbols-outlined text-secondary"
            data-icon="pending_actions"
          >
            pending_actions
          </span>
          <span className="font-label-strong text-on-surface">24 Pending</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-outline-variant shadow-sm">
          <span
            className="material-symbols-outlined text-error"
            data-icon="report"
          >
            report
          </span>
          <span className="font-label-strong text-on-surface">3 Reported</span>
        </div>
      </div>
    </div>
    {/* Moderation Queue */}
    <div className="grid grid-cols-1 gap-md">
      {/* Job Moderation Card 1 */}
      <div className="bg-white rounded-xl p-md border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex items-center justify-between group hover:border-secondary/30 transition-all duration-300">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center p-3">
            <img
              alt="CloudScale Logo"
              className="w-full h-full object-contain"
              data-alt="A minimalist logo for a fictional tech company called CloudScale, featuring clean geometric shapes in a deep navy blue and teal color scheme. The aesthetic is professional and corporate, set against a pristine white background to reflect a modern software-as-a-service brand identity."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHInkMswpB0HmVEWCdQPMFZFIYUkQtftknmGhmtoNqpH1jatOpuJo5EYUg0x6YR5jsiJ_O4QszDfXkZzj4EtMoR1458IBlKSeqsKm123r8JOiJDegDic98c9xE_CYPsZFlsI7umWsjY9L8AUOvjS3pndtbdjTcvNi_dZozzUGRwpZ7ZbZZiRDpItpHshJI0VNwtoiMpTDM3LFrtdj5alb1_zahRtkfp-6zx8tZk1ZvIr1fvqAugacoLpcp2DYywVK4qARPTYok5M8"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-xs">
              <span className="font-label-caps text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                NEW POST
              </span>
              <span className="font-body-sm text-on-surface-variant">
                Posted 2h ago
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface">
              Senior Product Designer
            </h3>
            <p className="font-body-md text-on-surface-variant">
              CloudScale Systems • San Francisco, CA (Remote)
            </p>
            <div className="flex gap-2 mt-sm">
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                FULL-TIME
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                $140k - $180k
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                UI/UX
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <button className="px-md py-sm font-label-strong text-secondary border border-secondary rounded-lg hover:bg-secondary/5 transition-colors">
            Quick Approve
          </button>
          <button className="px-md py-sm font-label-strong bg-primary text-on-primary rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>Review</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      {/* Job Moderation Card 2 */}
      <div className="bg-white rounded-xl p-md border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex items-center justify-between group hover:border-secondary/30 transition-all duration-300">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center p-3">
            <img
              alt="Nexus Structures Logo"
              className="w-full h-full object-contain"
              data-alt="A bold, architectural logo for an engineering firm called Nexus Structures. The mark consists of interlocking stylized lines in slate grey and vibrant teal, presented in a crisp, clean-edged vector style on a bright, professional white surface. The lighting is even and optimistic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIKT1FsNDdWQeBdXJ90qGtKrO5o6KCjx4_TPhyfco3wy1TAl_f0k2hOdNogXBZUoKRJgtp6JOsS4xfupcoAY2rAe43XnhetZGUh8w5kKyMSQfnicltwoWBDHf6VPwfqAJFk93-L5s5jun8IvdgTCwczuXc1FmZZWEfedHtzGBwsHDd23mmvsMbMqkrfh3qNKQTcdU-1Lsbvx9OkzLhSQg4TCRNhgilzK-G9L2Vzno-cpH8brXMg6UP2Ha_CW7EGOGEAKrM6tDhiDQ"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-xs">
              <span className="font-label-caps text-error bg-error-container px-2 py-0.5 rounded">
                URGENT
              </span>
              <span className="font-body-sm text-on-surface-variant">
                Posted 5h ago
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface">
              Backend Engineer (Node.js)
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Nexus Structures • London, UK
            </p>
            <div className="flex gap-2 mt-sm">
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                CONTRACT
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                £600 / DAY
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                AWS
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <button className="px-md py-sm font-label-strong text-secondary border border-secondary rounded-lg hover:bg-secondary/5 transition-colors">
            Quick Approve
          </button>
          <button className="px-md py-sm font-label-strong bg-primary text-on-primary rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>Review</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      {/* Job Moderation Card 3 */}
      <div className="bg-white rounded-xl p-md border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex items-center justify-between group hover:border-secondary/30 transition-all duration-300">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center p-3">
            <img
              alt="Aura Living Logo"
              className="w-full h-full object-contain"
              data-alt="A modern, sophisticated corporate logo for a lifestyle brand named Aura Living. The design uses elegant, minimalist typography and a subtle abstract icon in soft charcoal and teal colors. It is positioned on a clean, light-reflective white background, conveying a sense of quality and high-end professional reliability."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBna5NDlA3dONS4_yFw1S_j-omJSgn2ml08Df8c6Mfxh2aTrT5SJMl-KSrXzdAtQHAke8nC1VsGBxopPvLZKjqswc5Q1bcV5VtKAyz4-wyNQq-7IckKw1UQMQnYNjl6UI02qjv79BxtyMtu4Zi7UF4ZGY-7hi0JryaaEVbPYYjB24-eU4flVwIcXdc32w-d9yVTUCi4o_OC1HCfOAivwdfBoJwgCqY9twCutHks7UoK3ZQtsABVFAcGpjQSMsw5whPcYSGcpGE6Bk8"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-xs">
              <span className="font-label-caps text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded">
                RECURRING
              </span>
              <span className="font-body-sm text-on-surface-variant">
                Posted 1d ago
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface">
              Marketing Communications Manager
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Aura Living • Austin, TX
            </p>
            <div className="flex gap-2 mt-sm">
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                FULL-TIME
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                $110k - $135k
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                CONTENT
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <button className="px-md py-sm font-label-strong text-secondary border border-secondary rounded-lg hover:bg-secondary/5 transition-colors">
            Quick Approve
          </button>
          <button className="px-md py-sm font-label-strong bg-primary text-on-primary rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>Review</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Batch Actions Footer */}
    <div className="fixed bottom-0 right-0 left-64 bg-white border-t border-slate-200 px-6 py-4 flex justify-between items-center z-20">
      <div className="flex items-center gap-2">
        <input
          className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          type="checkbox"
        />
        <span className="text-sm font-medium text-slate-600">
          Select All (24 items)
        </span>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-error text-error font-label-strong rounded-lg hover:bg-error/5 transition-colors">
          Reject Selected
        </button>
        <button className="px-4 py-2 bg-secondary text-white font-label-strong rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          Approve Selected
        </button>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default JobManagement
