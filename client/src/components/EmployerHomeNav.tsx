import { useUser } from '@/context/UserContext';
import { UserDropdown } from '@/components/account/UserDropdown';
import { Link } from 'react-router-dom';
import { Briefcase, Sparkles, Bell, Settings } from 'lucide-react';

export default function EmployerHomeNav() {
  const { user } = useUser();

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-[#07110D]/90 backdrop-blur-xl border-[#20352B] shadow-sm">
      <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,0.2)]">
              <Briefcase className="w-4 h-4" />
            </div>
            <span className="text-xl font-black tracking-tight text-[#F1F5F2]">
              Job<span className="text-[#22C55E]">kar</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              className="text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors duration-200"
              to="/jobs"
            >
              Hire Talents
            </Link>
            <Link
              className="text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors duration-200"
              to="/postJob"
            >
              Post Job
            </Link>
            <Link
              className="text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors duration-200"
              to="/companies"
            >
              Companies
            </Link>
            <Link
              className="text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors duration-200"
              to="/resources"
            >
              Resources
            </Link>
          </div>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#111F19] rounded-xl transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#111F19] rounded-xl transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <div className="h-6 w-px bg-[#20352B] mx-1" />
            <UserDropdown />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-xs font-bold text-[#F1F5F2] hover:text-[#22C55E] transition-colors"
            >
              Sign In
            </Link>
            <Link
              className="px-4 py-2 text-xs font-extrabold bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all active:scale-95"
              to="/postJob"
            >
              Post a Job
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
