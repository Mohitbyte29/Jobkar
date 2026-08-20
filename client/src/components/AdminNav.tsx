import { Link, useNavigate } from 'react-router-dom'

const AdminNav = () => {
  const navigate = useNavigate();
  return (
    <div>
       <aside className="fixed left-0 top-0 h-screen w-64 z-40 flex flex-col bg-white border-r border-slate-200 shadow-sm">
    <div onClick={() => navigate('/')} className="p-md">
      <h1 className="text-xl font-bold text-slate-900">Admin Console</h1>
      <p className="text-on-primary-container text-xs">Manage Enterprise</p>
    </div>
    <nav className="flex-1 px-sm">
      <div className="space-y-base">
        <Link aria-current="page" className="flex items-center px-md py-sm rounded-xl transition-all group
         bg-surface-container-high text-on-surface font-label-strong" 
         data-path="dashboard" 
         to="/admin/dashboard">
          <span className="material-symbols-outlined mr-md text-[22px]">dashboard</span>
          <span className="font-label-strong text-label-strong">Dashboard</span>
          </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          to="/admin/users"
        >
          <span className="material-symbols-outlined">group</span>
          <span className="font-label-strong text-label-strong">
            User Management
          </span>
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          to="/admin/jobs"
        >
          <span className="material-symbols-outlined">rule</span>
          <span className="font-label-strong text-label-strong">
            Job Moderation
          </span>
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          to="/admin/internships"
        >
          <span className="material-symbols-outlined">rule</span>
          <span className="font-label-strong text-label-strong">
            Internship Moderation
          </span>
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          to="/admin/payments"
        >
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-strong text-label-strong">Payments</span>
        </Link>
        {/* Analytics is ACTIVE */}
        <Link
          className="flex items-center gap-3 px-4 py-3 bg-slate-50 text-secondary border-r-4 border-secondary font-semibold"
          to="/admin/analytics"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-strong text-label-strong">Analytics</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-4 py-3 bg-slate-50 text-secondary border-r-4 border-secondary font-semibold"
          to="/admin/company"
        >
          <span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
          <span className="font-label-strong text-label-strong">Company Management</span>
        </Link>
      </div>
    </nav>
    <div className="p-md mt-auto border-t border-slate-100">
      <button className="w-full flex items-center justify-center gap-2 bg-primary-container text-white py-sm rounded-lg font-label-strong text-label-strong transition-all active:scale-[0.98]">
        <span className="material-symbols-outlined text-[18px]">
          verified_user
        </span>
        System Status
      </button>
    </div>
  </aside>
    </div>
  )
}

export default AdminNav
