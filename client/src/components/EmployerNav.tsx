import { Link } from 'react-router-dom'

const EmployerNav = () => {
  return (
    <div>
      <aside className="h-screen w-64 border-r border-slate-200 sticky top-0 bg-white shadow-sm flex flex-col py-6 font-['Manrope'] antialiased">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span
              className="material-symbols-outlined text-white"
              data-icon="business"
            >
              business
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              JobKar
            </h1>
            <p className="text-xs font-label-strong text-on-primary-container uppercase tracking-wider">
              Employer Console
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <Link
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer duration-200 active:scale-[0.98]"
          to="/employer/dashboard"
        >
          <span className="material-symbols-outlined" data-icon="dashboard">
            dashboard
          </span>
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer duration-200 active:scale-[0.98]"
          to="/employer/job-postings"
        >
          <span className="material-symbols-outlined" data-icon="work">
            work
          </span>
          Job Postings
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer duration-200 active:scale-[0.98]"
          to="/employer/applicants"
        >
          <span className="material-symbols-outlined" data-icon="group">
            group
          </span>
          Applicants
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer duration-200 active:scale-[0.98]"
          to="/employer/team-management"
        >
          <span
            className="material-symbols-outlined"
            data-icon="manage_accounts"
          >
            manage_accounts
          </span>
          Team Management
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-900 bg-slate-50 border-r-4 border-slate-900 transition-colors cursor-pointer duration-200 active:scale-[0.98]"
          to="/employer/companies"
        >
          <span className="material-symbols-outlined" data-icon="business">
            business
          </span>
          Company Profile
        </Link>
      </nav>
      <div className="mt-auto px-4 space-y-1 border-t border-slate-100 pt-6">
        <a
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer duration-200"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="help">
            help
          </span>
          Help Center
        </a>
        <a
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer duration-200"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="logout">
            logout
          </span>
          Logout
        </a>
      </div>
    </aside>
    </div>
  )
}

export default EmployerNav
