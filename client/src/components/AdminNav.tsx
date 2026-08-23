import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  GraduationCap,
  CreditCard,
  BarChart3,
  Building2,
  ShieldCheck,
  LogOut,
} from 'lucide-react';

const AdminNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'User Management',
      path: '/admin/users',
      icon: Users,
    },
    {
      label: 'Job Moderation',
      path: '/admin/jobs',
      icon: Briefcase,
    },
    {
      label: 'Internship Moderation',
      path: '/admin/internships',
      icon: GraduationCap,
    },
    {
      label: 'Company Management',
      path: '/admin/company',
      icon: Building2,
    },
    {
      label: 'Analytics',
      path: '/admin/analytics',
      icon: BarChart3,
    },
    {
      label: 'Payments & Subscriptions',
      path: '/admin/payments',
      icon: CreditCard,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 z-40 flex flex-col bg-[#0D1814] border-r border-[#20352B] shadow-2xl">
      {/* Brand Header */}
      <div
        onClick={() => navigate('/')}
        className="p-6 border-b border-[#20352B] cursor-pointer hover:bg-[#111F19]/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-[#F1F5F2]">
              Job<span className="text-[#22C55E]">kar</span> Admin
            </h1>
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#9AAEA3]">
              Enterprise Console
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-1.5">
        <p className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-widest text-[#9AAEA3]/70">
          Management & Governance
        </p>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-[#22C55E] text-[#07110D] shadow-[0_0_20px_rgba(34,197,94,0.3)] font-extrabold'
                  : 'text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#111F19]'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#07110D]' : 'text-[#9AAEA3]'}`} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer System Status */}
      <div className="p-5 border-t border-[#20352B] bg-[#07110D]/60 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-xs font-bold text-[#F1F5F2]">System Healthy</span>
          </div>
          <span className="text-[10px] font-mono text-[#9AAEA3]">v2.4.0</span>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#111F19] hover:bg-[#162820] border border-[#20352B] text-[#9AAEA3] hover:text-[#F1F5F2] text-xs font-bold transition-all cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit to Main Site</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminNav;
