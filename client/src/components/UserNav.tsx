import { useUser } from '@/context/UserContext';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Bookmark,
  Briefcase,
  GraduationCap,
  User,
  FileSpreadsheet,
  Settings,
  Rocket,
} from 'lucide-react';

const UserNav = () => {
  const { user } = useUser();
  const location = useLocation();

  const navLinks = [
    {
      to: '/',
      label: 'Home',
      icon: LayoutDashboard,
      active: location.pathname === '/',
    },
    {
      to: `/application/${user?.id || ''}`,
      label: 'My Applications',
      icon: FileText,
      active: location.pathname.startsWith('/application'),
    },
    {
      to: '/saved-jobs',
      label: 'Saved Jobs',
      icon: Bookmark,
      active: location.pathname === '/saved-jobs',
    },
    {
      to: '/jobs',
      label: 'Jobs',
      icon: Briefcase,
      active: location.pathname.startsWith('/jobs'),
    },
    {
      to: '/internships',
      label: 'Internships',
      icon: GraduationCap,
      active: location.pathname.startsWith('/internships'),
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: User,
      active: location.pathname === '/profile',
    },
    {
      to: '#',
      label: 'Resume',
      icon: FileSpreadsheet,
      active: false,
    },
    {
      to: '#',
      label: 'Settings',
      icon: Settings,
      active: false,
    },
  ];

  return (
    <aside
      className="w-64 bg-[#0D1814] border-r border-[#20352B] flex flex-col fixed h-full z-20"
      data-purpose="sidebar"
    >
      {/* Brand Header */}
      <div className="p-6 border-b border-[#20352B] flex items-center gap-3">
        <div className="w-9 h-9 bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-xl flex items-center justify-center text-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,0.2)]">
          <Briefcase className="w-5 h-5" />
        </div>
        <span className="text-xl font-black text-[#F1F5F2] tracking-tight">
          Job<span className="text-[#22C55E]">kar</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.to}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                item.active
                  ? 'bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 shadow-[0_0_10px_rgba(34,197,94,0.15)]'
                  : 'text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820]'
              }`}
            >
              <Icon className={`w-4 h-4 ${item.active ? 'text-[#22C55E]' : 'text-[#9AAEA3]'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Promo Card */}
      <div
        className="p-4 m-4 bg-[#111F19] rounded-2xl border border-[#20352B] text-center relative overflow-hidden"
        data-purpose="promo-card"
      >
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#22C55E]/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex items-center justify-center gap-1.5 mb-2 text-[#22C55E]">
          <Rocket className="w-4 h-4" />
          <span className="text-xs font-extrabold uppercase tracking-wider">
            Get Hired Faster
          </span>
        </div>
        <p className="text-[11px] text-[#9AAEA3] mb-3 leading-relaxed">
          Complete your profile 100% to boost your visibility to verified recruiters.
        </p>
        <div className="relative w-14 h-14 mx-auto mb-3">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              className="text-[#20352B] stroke-current"
              cx={18}
              cy={18}
              fill="transparent"
              r={15}
              strokeWidth={3}
            />
            <circle
              className="text-[#22C55E] stroke-current"
              cx={18}
              cy={18}
              fill="transparent"
              r={15}
              strokeDasharray="85, 100"
              strokeLinecap="round"
              strokeWidth={3}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-[#F1F5F2]">85%</span>
          </div>
        </div>
        <Link
          to="/profile"
          className="block w-full py-2 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] text-xs font-bold rounded-lg shadow-sm transition-all text-center"
        >
          Complete Now
        </Link>
      </div>
    </aside>
  );
};

export default UserNav;
