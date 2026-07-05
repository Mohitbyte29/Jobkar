import EmployerNav from '@/components/EmployerNav'

const TeamManagement = () => {
  return (
    <div>
      <>
  <div className="flex min-h-screen">
    {/* Sidebar Navigation */}
    <EmployerNav />
    {/* Main Content Area */}
    <main className="flex-1 flex flex-col min-w-0 bg-background overflow-y-auto">
      {/* TopAppBar */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md h-16 px-8 flex justify-between items-center">
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-secondary/20 transition-all"
              placeholder="Search team members, roles, or departments..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors relative">
            <span
              className="material-symbols-outlined"
              data-icon="notifications"
            >
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white" />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
          </button>
          <div className="h-8 w-px bg-slate-200 mx-2" />
          <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-all">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-label-strong text-slate-900 leading-none">
                Alexander Thorne
              </p>
              <p className="text-xs text-slate-500 mt-1">Senior Recruiter</p>
            </div>
            <img
              className="w-9 h-9 rounded-full object-cover border border-slate-200"
              data-alt="A professional studio portrait of a business executive named Alexander Thorne, wearing a tailored charcoal suit with a crisp white shirt, against a soft-focus office background with warm lighting and a modern, high-end corporate aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3VCmOTOC-IXUNinlhhaRfTjFD_jQs0HAO523ugyEW0RhMeF0gOnTZjoTBthvea1HHlR_QHOeY8DqnHuCPRAvbB6frJg7jt3c4ej9am7Qkcjylesj8CRVX_shwQkLgVBZSIUtlYxiAsVe_jK_6-AElJ5JhhgD8t9BRbgJwLsGXI87M8LJQQPTk2o2oJdW0DbZaXa2_MFFR6qxm8JNgfMUH2v-kkg8ZujV36aE3kkrFSQbBKVKnjlhlU7V3L0Na-Qd3wYRzLrJU6Dg"
            />
          </div>
        </div>
      </header>
      {/* Page Body */}
      <div className="p-8 max-w-[1280px] mx-auto w-full space-y-8">
        {/* Page Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-h1 text-h1 text-slate-900">Team Management</h2>
            <p className="font-body-md text-slate-500 mt-1">
              Manage your recruitment team members, roles, and administrative
              permissions.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-xl font-label-strong hover:bg-on-secondary-container transition-all shadow-sm active:scale-95">
            <span className="material-symbols-outlined" data-icon="person_add">
              person_add
            </span>
            Invite Team Member
          </button>
        </div>
        {/* Dashboard Stats Row (Asymmetric Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined" data-icon="groups">
                groups
              </span>
            </div>
            <div>
              <p className="text-xs font-label-caps text-slate-400">
                TOTAL MEMBERS
              </p>
              <p className="text-2xl font-bold text-slate-900">12</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
              <span
                className="material-symbols-outlined"
                data-icon="verified_user"
              >
                verified_user
              </span>
            </div>
            <div>
              <p className="text-xs font-label-caps text-slate-400">ADMINS</p>
              <p className="text-2xl font-bold text-slate-900">2</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary-fixed-dim">
              <span className="material-symbols-outlined" data-icon="mail">
                mail
              </span>
            </div>
            <div>
              <p className="text-xs font-label-caps text-slate-400">
                PENDING INVITES
              </p>
              <p className="text-2xl font-bold text-slate-900">3</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-error-container/30 flex items-center justify-center text-error">
              <span className="material-symbols-outlined" data-icon="block">
                block
              </span>
            </div>
            <div>
              <p className="text-xs font-label-caps text-slate-400">INACTIVE</p>
              <p className="text-2xl font-bold text-slate-900">1</p>
            </div>
          </div>
        </div>
        {/* Main Layout Grid: Table + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Team List Table (Large Column) */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-h3 text-slate-900">Active Team Members</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
                  <span
                    className="material-symbols-outlined"
                    data-icon="filter_list"
                  >
                    filter_list
                  </span>
                </button>
                <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
                  <span
                    className="material-symbols-outlined"
                    data-icon="download"
                  >
                    download
                  </span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                      Member
                    </th>
                    <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-4 font-label-caps text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Member 1 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          data-alt="A sharp, detailed portrait of a female HR professional with dark hair and glasses, wearing a modern navy blazer, professional corporate headshot style with soft studio lighting."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClk7BLmRr0IbJsyq98RRTpQxX4tYC1Ac35VDW8x0Npb-BuxVJTyUwTQfM3ZD-csAOc83ly3OyD6NzYVid9mJBOygkQJFsDQjicxEibipmOOIIZItlvQINygKXTz6gua7siByEab0GJI5uCmzDVClu8OdHkWRS9v-cTw5sQQIYelXTzqmoG6di4DRtKosce7WSiz-IgLtrCGxwhzkwcNhJgviGPLeInHjq5zJtb7SfMysWQyWcip_KAwWts6XjsWuSIoO9Ndk92lJM"
                        />
                        <div>
                          <p className="font-label-strong text-slate-900">
                            Sarah Jenkins
                          </p>
                          <p className="text-xs text-slate-500">
                            sarah.j@jobkar.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-fixed text-on-primary-fixed">
                        Admin
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Operations
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Member 2 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          data-alt="A professional headshot of a diverse young man with a friendly expression, short groomed beard, wearing a light blue oxford shirt, professional LinkedIn style photography with a blurred tech office background."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0NjfNNlVKAepiFBHOt6xvKP-vIWPXuZLO7g-4lAS6yHtLpfgOHX_6BQoRxWUzVc8B3xB444ayMhJpJGBPYNBR-SZSaumv8BILjh1WPR4kJzP4buDfStxI7lqGwgOgSFHk1Cpzrjgs4FAn9pgoC8M7Q37Msc2SiNAeQNYhwSHJFp1LFRc18USTm_G1QxeLyVgZ918w0KlZCfNf-Lxw28ETpxJDlZzFIsukfaO2GVM3_dZ6G0ahLhE9jAeL99wNjNqS6sc-ZfOuYi0"
                        />
                        <div>
                          <p className="font-label-strong text-slate-900">
                            Marcus Chen
                          </p>
                          <p className="text-xs text-slate-500">
                            m.chen@jobkar.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
                        Recruiter
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Talent Acquisition
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Member 3 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          data-alt="A high-resolution corporate portrait of a middle-aged woman with blonde hair, wearing an elegant emerald green dress, sophisticated and warm aesthetic with cinematic office lighting."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsPsy64Hvyt9V6URkJPKtbez_WdZfLcOWTrRXoTLmVgeuIhHHYGE5sFvXIE98-N1B4ffXU_i0w-q59fL0OL_i66IrC92PTBfu2SINl6PUrx9ZgYY6LxfNuMb_IRr-G0PxgxBV7rgkYhmu0AOMcQJvb1ecqwf8OjCfYt8HOcuf5kEgCy59tA75Je-s1R3qjTB0Vy9DQp86I_d_ACCFz5WlJSmTB24tw-G4m6ih-X4wVaKzT5LmemR3iQCNbbGYe_XogbmlF3GY1QMI"
                        />
                        <div>
                          <p className="font-label-strong text-slate-900">
                            Elena Rodriguez
                          </p>
                          <p className="text-xs text-slate-500">
                            e.rodriguez@jobkar.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-container text-on-surface-variant">
                        Hiring Manager
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Engineering
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Member 4 */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          data-alt="A clean, minimalist portrait of a stylish creative professional with a modern haircut, wearing a black turtleneck, set against a neutral grey studio background, high-end fashion corporate style."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZyKB_SkP0U8RZyOv0i7RLP1cPtoJ0ck7dvXTnbbLv3FZUZiyc9i3mswaxKhEjbyFn02d5e-gQegkk-53iEvIQXkL2zsAn9AV26xg-tjEaHe2j3T4L87g8rbs8s2ZDTA-4JvUvwQ_N613VpFTBo685WEqvSnmAoMNtuTAd4_gQC7bUTQjjhOI0Sa4vCr_1OJ2LJLpOzROzunpezPe9mmEp6g77wavAAYhodCk74KNddMYpRw2r3uZnC5tpS_bC_ofx5rPDPwCsoIg"
                        />
                        <div>
                          <p className="font-label-strong text-slate-900">
                            Liam O'Neill
                          </p>
                          <p className="text-xs text-slate-500">
                            l.oneill@jobkar.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
                        Recruiter
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Talent Acquisition
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-error">
                        <span className="w-1.5 h-1.5 rounded-full bg-error" />
                        Inactive
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600 p-1">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex justify-center">
              <button className="text-sm font-label-strong text-slate-600 hover:text-primary transition-colors flex items-center gap-1">
                View All 12 Members
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="expand_more"
                >
                  expand_more
                </span>
              </button>
            </div>
          </div>
          {/* Sidebar Content (Small Column) */}
          <div className="lg:col-span-4 space-y-gutter">
            {/* Role Permissions Cards */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 p-6">
              <h3 className="font-h3 text-slate-900 mb-4 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="policy"
                >
                  policy
                </span>
                Role Permissions
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-label-strong text-slate-900 text-sm">
                    Admin
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Full access to billing, team management, and all job
                    settings.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-label-strong text-slate-900 text-sm">
                    Recruiter
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Can post jobs, manage applicants, and schedule interviews.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="font-label-strong text-slate-900 text-sm">
                    Hiring Manager
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Limited to viewing and rating applicants for assigned jobs.
                  </p>
                </div>
              </div>
              <button className="w-full mt-4 text-sm font-label-strong text-secondary hover:underline py-2">
                Customize Role Access
              </button>
            </div>
            {/* Invitation History Section */}
            <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-h3 text-slate-900">Pending Invites</h3>
                <span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold">
                  3 OPEN
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between group">
                  <div>
                    <p className="text-sm font-label-strong text-slate-900">
                      david.k@jobkar.com
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium">
                      SENT 2 DAYS AGO • RECRUITER
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 text-error hover:bg-error/10 rounded-lg transition-all">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="cancel"
                    >
                      cancel
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-between group">
                  <div>
                    <p className="text-sm font-label-strong text-slate-900">
                      sophia.l@jobkar.com
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium">
                      SENT 4 DAYS AGO • MANAGER
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 text-error hover:bg-error/10 rounded-lg transition-all">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="cancel"
                    >
                      cancel
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-between group">
                  <div>
                    <p className="text-sm font-label-strong text-slate-900">
                      t.harris@jobkar.com
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium">
                      SENT 1 WEEK AGO • ADMIN
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 text-error hover:bg-error/10 rounded-lg transition-all">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="cancel"
                    >
                      cancel
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-600 rounded-xl transition-all font-label-strong text-sm">
                  <span
                    className="material-symbols-outlined text-lg"
                    data-icon="link"
                  >
                    link
                  </span>
                  Copy Invite Link
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pro Tip / Atmospheric Banner */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-fixed-dim rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white font-h2 text-h2 mb-2">
              Enhance Collaboration
            </h4>
            <p className="text-slate-400 max-w-md">
              Enable "Shared Inbox" to allow multiple recruiters to manage the
              same job posting effortlessly. Streamline your hiring workflow
              today.
            </p>
          </div>
          <button className="relative z-10 bg-white text-slate-900 px-6 py-3 rounded-xl font-label-strong hover:bg-slate-100 transition-all active:scale-95 shadow-lg">
            Enable Shared Inbox
          </button>
        </div>
      </div>
      {/* Footer Meta */}
      <footer className="mt-auto py-8 px-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          © 2024 JobKar Employer Console. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            System Status
          </a>
        </div>
      </footer>
    </main>
  </div>
  {/* Micro-interactions Script */}
</>


    </div>
  )
}

export default TeamManagement
