import { useUser } from '@/context/UserContext';
import { UserDropdown } from '@/components/account/UserDropdown';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const {user, setUser} = useUser();
  const navigate = useNavigate();
  const handleLogout = async () => {
    if (!user) return;
    try {
      // const token = localStorage.getItem('token');
      // console.log(token);
      // if (token) {
      const res = await axios.post('/api/auth/logout',{}, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // }
        withCredentials: true,
        }); 
        if (res.data.success) {
          // localStorage.removeItem('token');
          setUser(null);
          navigate('/');
        }
      // }
    } catch (err) {
      console.log(err);
      if(axios.isAxiosError(err)){
        console.log(err.response?.data);
      }
    }
  };

  // console.log(user);
    return (
  <nav className="fixed top-0 w-full z-50 border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
    <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        <Link to='/' className="text-xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
          JobKar
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            className="font-h3 text-sm text-slate-900 dark:text-slate-400 hover:text-teal-600 transition-colors duration-200"
            to="/jobs"
          >
            Find Jobs
          </Link>
          <Link
            className="font-h3 text-sm text-slate-900 dark:text-slate-400 hover:text-teal-600 transition-colors duration-200"
            to="/internships"
          >
            Find Internships
          </Link>
          <Link
            className="font-h3 text-sm text-slate-900 dark:text-slate-400 hover:text-teal-600 transition-colors duration-200"
            to="/companies"
          >
            Companies
          </Link>
          
          <Link
            className="font-h3 text-sm text-slate-900 dark:text-slate-400 hover:text-teal-600 transition-colors duration-200"
            to="/resources"
          >
            Resources
          </Link>
        </div>
      </div>
      {user ? (
        <>
          <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-surface-container rounded-full transition-colors active:scale-95">
          <span className="material-symbols-outlined" data-icon="notifications">
            notifications
          </span>
        </button>
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-surface-container rounded-full transition-colors active:scale-95">
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
        </button>
      </div>
      <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2" />
      < UserDropdown />
    </div>
        </>
      ) : (
        <>
        <div className="flex items-center gap-4">
        <Link to="/register" className="px-4 py-2 text-sm font-label-strong bg-primary-container text-white rounded-lg active:scale-95 transitLion-all">
          Sign In
        </Link>
        <Link className="px-4 py-2 text-sm font-label-strong bg-primary-container text-white rounded-lg active:scale-95 transitLion-all" to="/postJob">
          Post a Job
        </Link>
      </div>
      </>
      ) }
    </div>
  </nav>
    )
}

