import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  UserCheck,
  Building2,
  HelpCircle,
  LogOut,
  Sparkles,
} from 'lucide-react';

const EmployerNav = () => {
  const location = useLocation();

  const navItems = [
    {
      to: '/employer/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      active: location.pathname === '/employer/dashboard',
    },
    {
      to: '/employer/job-postings',
      label: 'Job Postings',
      icon: Briefcase,
      active: location.pathname === '/employer/job-postings',
    },
    {
      to: '/employer/applicants',
      label: 'Applicants',
      icon: Users,
      active: location.pathname === '/employer/applicants',
    },
    {
      to: '/employer/team-management',
      label: 'Team Management',
      icon: UserCheck,
      active: location.pathname === '/employer/team-management',
    },
    {
      to: '/employer/companies',
      label: 'Company Profile',
      icon: Building2,
      active: location.pathname.startsWith('/employer/companies'),
    },
  ];

  return (
    <aside className="h-screen w-64 border-r border-[#20352B] sticky top-0 bg-[#0D1814] shadow-sm flex flex-col py-6 select-none shrink-0 z-30">
      {/* Brand Header */}
      <div className="px-6 mb-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#F1F5F2] tracking-tight">
              Job<span className="text-[#22C55E]">kar</span>
            </h1>
            <p className="text-[10px] font-extrabold text-[#22C55E] uppercase tracking-widest">
              Employer Console
            </p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.to}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                item.active
                  ? 'bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 shadow-[0_0_12px_rgba(34,197,94,0.15)] font-bold'
                  : 'text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820]'
              }`}
            >
              <Icon className={`w-4 h-4 ${item.active ? 'text-[#22C55E]' : 'text-[#9AAEA3]'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Post a Job Shortcut Box */}
      <div className="px-4 mb-4">
        <Link
          to="/postJob"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.25)] transition-all active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Post a New Job</span>
        </Link>
      </div>

      {/* Bottom Footer Actions */}
      <div className="mt-auto px-4 space-y-1 border-t border-[#20352B] pt-4">
        <Link
          to="/resources"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820] transition-colors"
        >
          <HelpCircle className="w-4 h-4 text-[#9AAEA3]" />
          <span>Help Center</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#9AAEA3] hover:text-[#EF4444] hover:bg-[#EF4444]/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default EmployerNav;
