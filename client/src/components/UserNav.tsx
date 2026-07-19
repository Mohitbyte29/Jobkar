import { Link } from 'react-router'

const UserNav = () => {
  return (
    <div>
      <aside
    className="w-64 bg-white border-r border-job-border flex flex-col fixed h-full z-10"
    data-purpose="sidebar"
  >
    <div className="p-6 border-b border-job-border flex items-center space-x-2">
      <div className="w-8 h-8 bg-job-blue rounded-lg flex items-center justify-center">
        <i className="fas fa-briefcase text-white text-sm" />
      </div>
      <span className="text-xl font-bold text-slate-900">Jobkar</span>
    </div>
    <nav className="flex-1 p-4 space-y-1">
      <Link
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
        to="/"
      >
        <i className="fas fa-th-large w-5" />
        <span className="text-sm font-medium">Home</span>
      </Link>
      <a
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
        href="#"
      >
        <i className="fas fa-file-alt w-5" />
        <span className="text-sm font-medium">My Applications</span>
      </a>
      <Link
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
        to="/saved-jobs"
      >
        <i className="fas fa-heart w-5" />
        <span className="text-sm font-medium">Saved Jobs</span>
      </Link>
      <Link
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
        to="/jobs"
      >
        <i className="fas fa-calendar-check w-5" />
        <span className="text-sm font-medium">Jobs</span>
      </Link>
      <a
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
        href="#"
      >
        <i className="fas fa-comment-dots w-5" />
        <span className="text-sm font-medium">Messages</span>
      </a>
      <Link
        className="flex items-center space-x-3 p-3 rounded-xl bg-blue-50 text-job-blue transition-colors"
        to="/profile"
      >
        <i className="fas fa-user w-5" />
        <span className="text-sm font-semibold">Profile</span>
      </Link>
      <a
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
        href="#"
      >
        <i className="fas fa-file-invoice w-5" />
        <span className="text-sm font-medium">Resume</span>
      </a>
      <a
        className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors mt-auto"
        href="#"
      >
        <i className="fas fa-cog w-5" />
        <span className="text-sm font-medium">Settings</span>
      </a>
    </nav>
    {/* Sidebar Promo Card */}
    <div
      className="p-4 m-4 bg-slate-50 rounded-2xl border border-job-border text-center"
      data-purpose="promo-card"
    >
      <div className="mb-2">
        <i className="fas fa-rocket text-job-blue" />
        <span className="text-xs font-bold ml-1 uppercase">
          Get Hired Faster
        </span>
      </div>
      <p className="text-[10px] text-slate-500 mb-4 leading-tight">
        Complete your profile 100% to increase your visibility to recruiters.
      </p>
      <div className="relative w-16 h-16 mx-auto mb-4">
        {/* Circular Progress Simulation */}
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <circle
            className="text-slate-200 stroke-current"
            cx={18}
            cy={18}
            fill="transparent"
            r={16}
            strokeWidth={3}
          />
          <circle
            className="text-job-blue stroke-current"
            cx={18}
            cy={18}
            fill="transparent"
            r={16}
            strokeDasharray="85, 100"
            strokeLinecap="round"
            strokeWidth={3}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-job-blue">85%</span>
        </div>
      </div>
      <button className="w-full py-2 bg-black text-white text-xs font-bold rounded-lg shadow-sm hover:bg-blue-600 transition-colors cursor-pointer">
        Complete Now
      </button>
    </div>
  </aside>
    </div>
  )
}

export default UserNav
