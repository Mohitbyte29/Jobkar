import AdminNav from '@/components/AdminNav'
import React from 'react'

const UserManagement = () => {
  return (
    <div>
      <>
  {/* SideNavBar Shell */}
  <AdminNav />
  {/* TopAppBar Shell */}
  <header className="fixed top-0 right-0 left-64 h-16 px-6 flex justify-between items-center z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 font-manrope text-sm shadow-none">
    <div className="flex items-center gap-4 flex-1">
      <span className="text-lg font-black text-slate-900 dark:text-slate-50">
        JobBoard Admin
      </span>
      <div className="relative w-full max-w-md ml-8">
        <span
          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg"
          data-icon="search"
        >
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:border-secondary focus:ring-0 transition-colors font-body-sm"
          placeholder="Search users, roles, or status..."
          type="text"
        />
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-4">
        <span
          className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-teal-500 cursor-pointer"
          data-icon="notifications"
        >
          notifications
        </span>
        <span
          className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-teal-500 cursor-pointer"
          data-icon="settings"
        >
          settings
        </span>
        <span
          className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-teal-500 cursor-pointer"
          data-icon="help"
        >
          help
        </span>
      </div>
      <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-label-strong text-on-surface">Admin User</p>
          <p className="text-[10px] text-on-primary-container uppercase tracking-wider">
            Super Admin
          </p>
        </div>
        <img
          alt="Administrator"
          className="w-10 h-10 rounded-full border-2 border-secondary-container object-cover"
          data-alt="A professional headshot of a corporate administrator in a modern office environment. The person is smiling confidently, wearing business casual attire. The background is a soft-focus tech office with warm sunlight streaming through large windows, maintaining a clean and professional aesthetic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi-CPNAwLqWl-3nR6stl5iGJkuQVW_d7XZSFDbmeV4HEduD2rTi_K54RRaouacfZCttdSkIXydBsfj32W-mag8gGfRx3qeXOa2dEHItTwEX57QfTxNK8CdAqNGg_FJdNPlKJ4D67itQ-BN7bDESIhRglul3QmrJXxzS88ow-K0MBtBZ9m8NIsC4JD0B7YUy_KUZiteZFcxM-7eIHjrf18wfBGn_Iss2zbw8oZDNNIkY_RJXFQRB7y720o9ShsxGSKAWx77BJ_aTEk"
        />
      </div>
    </div>
  </header>
  {/* Main Content Canvas */}
  <main className="ml-64 mt-16 p-8 min-h-screen">
    <div className="max-w-max_width mx-auto">
      {/* Header Section */}
      <div className="mb-md flex justify-between items-end">
        <div>
          <h2 className="font-h1 text-h1 text-on-surface">User Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Oversee and manage your platform's growing community of job seekers
            and employers.
          </p>
        </div>
        <div className="flex gap-sm">
          <button className="flex items-center gap-xs px-sm py-2 bg-white border border-outline-variant text-on-surface rounded-lg font-label-strong shadow-sm hover:bg-surface-container-low transition-colors">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="filter_list"
            >
              filter_list
            </span>
            Filters
          </button>
          <button className="flex items-center gap-xs px-sm py-2 bg-primary text-on-primary rounded-lg font-label-strong shadow-sm hover:opacity-90 transition-opacity">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="person_add"
            >
              person_add
            </span>
            Add New User
          </button>
        </div>
      </div>
      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
        <div className="bg-white p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-on-primary-container mb-xs">
            TOTAL USERS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-on-surface">12,842</span>
            <span className="text-secondary text-xs font-bold">+12%</span>
          </div>
        </div>
        <div className="bg-white p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-on-primary-container mb-xs">
            ACTIVE EMPLOYERS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-on-surface">1,205</span>
            <span className="text-secondary text-xs font-bold">+4%</span>
          </div>
        </div>
        <div className="bg-white p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-on-primary-container mb-xs">
            NEW SEEKERS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-on-surface">843</span>
            <span className="text-tertiary-fixed-dim text-xs font-bold">
              This month
            </span>
          </div>
        </div>
        <div className="bg-white p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-on-primary-container mb-xs">
            PENDING VERIFICATIONS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-error">24</span>
            <span className="text-outline text-xs font-medium">
              Action required
            </span>
          </div>
        </div>
      </div>
      {/* User Table Container */}
      <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] overflow-hidden border border-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-surface-container-highest">
              <tr>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  NAME
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  ROLE
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  STATUS
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  JOIN DATE
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant text-right">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {/* User Row 1 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-label-strong text-on-surface">
                        Jane Doe
                      </p>
                      <p className="text-xs text-on-primary-container font-body-sm">
                        jane.doe@example.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-caps text-[10px]">
                    JOB SEEKER
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-body-sm text-on-surface">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                  Oct 12, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary font-label-strong hover:underline decoration-2 underline-offset-4">
                    Manage
                  </button>
                </td>
              </tr>
              {/* User Row 2 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold">
                      TC
                    </div>
                    <div>
                      <p className="font-label-strong text-on-surface">
                        TechCorp Solutions
                      </p>
                      <p className="text-xs text-on-primary-container font-body-sm">
                        hr@techcorp.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-caps text-[10px]">
                    EMPLOYER
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-body-sm text-on-surface">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                  Sep 28, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary font-label-strong hover:underline decoration-2 underline-offset-4">
                    Manage
                  </button>
                </td>
              </tr>
              {/* User Row 3 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold">
                      MS
                    </div>
                    <div>
                      <p className="font-label-strong text-on-surface">
                        Mark Smith
                      </p>
                      <p className="text-xs text-on-primary-container font-body-sm">
                        m.smith@webmail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-caps text-[10px]">
                    JOB SEEKER
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-error" />
                    <span className="font-body-sm text-on-surface">
                      Suspended
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                  Nov 05, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary font-label-strong hover:underline decoration-2 underline-offset-4">
                    Manage
                  </button>
                </td>
              </tr>
              {/* User Row 4 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold">
                      AL
                    </div>
                    <div>
                      <p className="font-label-strong text-on-surface">
                        Astra Logistics
                      </p>
                      <p className="text-xs text-on-primary-container font-body-sm">
                        ops@astra.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-caps text-[10px]">
                    EMPLOYER
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-body-sm text-on-surface">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-on-surface-variant">
                  Aug 14, 2023
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary font-label-strong hover:underline decoration-2 underline-offset-4">
                    Manage
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table Pagination */}
        <div className="px-6 py-4 bg-white border-t border-surface-container flex items-center justify-between">
          <p className="font-body-sm text-on-surface-variant">
            Showing 1 to 4 of 12,842 users
          </p>
          <div className="flex gap-2">
            <button
              className="p-2 border border-outline-variant rounded hover:bg-surface-container-low disabled:opacity-50"
              disabled={true}
            >
              <span
                className="material-symbols-outlined text-lg"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
            </button>
            <button className="px-3 py-1 bg-primary text-on-primary rounded font-label-strong">
              1
            </button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low font-label-strong">
              2
            </button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low font-label-strong">
              3
            </button>
            <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low">
              <span
                className="material-symbols-outlined text-lg"
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
  {/* Contextual FAB (Suppressed as per rules for Admin/Management screens) */}
</>

    </div>
  )
}

export default UserManagement
