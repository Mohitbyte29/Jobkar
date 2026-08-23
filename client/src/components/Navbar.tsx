import { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import { UserDropdown } from '@/components/account/UserDropdown';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = async () => {
    if (!user) return;
    try {
      const res = await axios.post(
        '/api/auth/logout',
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        setUser(null);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
      }
    }
  };

  const navLink =
    'relative text-sm font-medium text-[#9AAEA3] hover:text-[#22C55E] transition-colors duration-200 ' +
    'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-400 ' +
    'after:transition-all after:duration-200 hover:after:w-full';

  return (
    <nav
      className={
        'fixed top-0 w-full z-50 border-b backdrop-blur-md transition-all duration-300 ' +
        (scrolled
          ? 'bg-neutral-950/90 border-white/10 shadow-[0_4px_24px_-8px_rgba(16,185,129,0.15)]'
          : 'bg-neutral-950/70 border-white/5 shadow-none')
      }
    >
      <div className="flex justify-between items-center h-14 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-1.5 shrink-0">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            <span className="text-lg font-extrabold tracking-tight text-white">
              Job<span className="text-[#22C55E]">kar</span>
            </span>
          </Link>

          {/* Primary nav */}
          <div className="hidden md:flex items-center gap-7">
            {user && user.role === 'EMPLOYER' ? (
              <>
                <Link className={navLink} to="/postInternship">
                  Post Internship
                </Link>
                <Link className={navLink} to="/postJob">
                  Post Job
                </Link>
                <Link className={navLink} to="/employer/companies/add">
                  Add Company
                </Link>
              </>
            ) : (
              <>
                <Link className={navLink} to="/jobs">
                  Find Jobs
                </Link>
                <Link className={navLink} to="/internships">
                  Find Internships
                </Link>
              </>
            )}
            <Link className={navLink} to="/companies">
              Explore Companies
            </Link>

          </div>
        </div>

        {/* Right side */}
        {user ? (
          <div className="flex items-center gap-3">
            <button
              aria-label="Notifications"
              className="p-2 rounded-full text-[#9AAEA3] hover:text-[#22C55E] hover:bg-[#07110D]/5 transition-colors duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
            </button>
            <button
              aria-label="Settings"
              className="p-2 rounded-full text-[#9AAEA3] hover:text-[#22C55E] hover:bg-[#07110D]/5 transition-colors duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">
                settings
              </span>
            </button>

            <div className="h-6 w-px bg-[#07110D]/10 mx-1" />

            {user.role === 'EMPLOYER' && (
              <Link
                to="/postJob"
                className="hidden sm:inline-flex px-4 py-1.5 text-sm font-semibold rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all duration-200 active:scale-95"
              >
                Post a Job
              </Link>
            )}

            <UserDropdown onLogout={handleLogout} />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-300 hover:text-[#22C55E] transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-1.5 text-sm font-medium rounded-lg border border-white/15 text-white hover:border-emerald-400/60 hover:text-[#22C55E] transition-all duration-200 active:scale-95"
            >
              Register
            </Link>
            <Link
              to="/postJob"
              className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all duration-200 active:scale-95"
            >
              Post a Job
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}