import AdminNav from '@/components/AdminNav'
import { useCompany } from '@/context/CompanyContext';
import { useInternships } from '@/context/InternshipsContext';
import { useJobs } from '@/context/JobsContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import timeAgo from '../../../utils/timeAgo';
import AdminUpperNav from './AdminUpperNav';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface Application {
  id: number;
  userId: string;
}

const AdminDashboard = () => {
    const {companyData, setCompanyData} = useCompany();
    const {jobData, setJobData} = useJobs();
    const {internshipData, setInternshipData} = useInternships();
    const [users, setUsers] = useState<User[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);

    const formatDate = (date: string): string => {
      const newDate = new Date(date);
      const formattedDate = newDate.toLocaleDateString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return formattedDate;
    }

    const fetchUsers = async() => {
      try {
        const {data} = await axios.get('/api/users', {withCredentials: true});
        const response = await axios.get('/api/applications', {withCredentials: true});
        setUsers(data);
        console.log(response.data)
        console.log(users)
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        if(axios.isAxiosError(error)) {
          console.error('Axios error response:', error.response?.data);
        }
      }
    };
    useEffect(() => {
      fetchUsers();
    }, []);

  return (
    <div>
      <AdminUpperNav search={null} searchType={null} />
      <AdminNav />
      <main className="ml-64 relative pt-20 min-h-screen bg-surface">
  <div className="flex flex-col w-full px-lg py-md gap-lg bg-surface min-h-[calc(100vh-80px)]">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
      <div>
        <h1 className="font-h1 text-on-surface">Overview</h1>
        <p className="font-body-sm text-on-surface-variant mt-xs">
          Welcome back, here's what's happening today.
        </p>
      </div>
      <div className="flex items-center gap-sm">
        <div className="relative">
          <select className="appearance-none bg-surface-container-low text-on-surface font-label-strong px-md py-sm rounded-lg border-none shadow-sm pr-10 focus:ring-2 focus:ring-primary-container outline-none cursor-pointer">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>This Year</option>
          </select>
          <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
            expand_more
          </span>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-on-primary font-label-strong px-md py-sm rounded-lg shadow-sm flex items-center gap-xs transition-colors">
          <span className="material-symbols-outlined text-[18px]">
            download
          </span>
          Export Report
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-md">
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
        <div className="flex justify-between items-start mb-md relative z-10">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary-container">
              group
            </span>
          </div>
          <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-md font-label-caps flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            12%
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-on-surface-variant font-label-strong mb-xs">
            Total Users
          </p>
          <p className="font-h1 text-on-surface">{users.length}</p>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
        <div className="flex justify-between items-start mb-md relative z-10">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-container">
              domain
            </span>
          </div>
          <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-md font-label-caps flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            8%
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-on-surface-variant font-label-strong mb-xs">
            Total Companies
          </p>
          <p className="font-h1 text-on-surface">{companyData.length}</p>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-fixed/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
        <div className="flex justify-between items-start mb-md relative z-10">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">
              work
            </span>
          </div>
          <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-md font-label-caps flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            5%
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-on-surface-variant font-label-strong mb-xs">
            Active Jobs
          </p>
          <p className="font-h1 text-on-surface">{jobData.length}</p>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
        <div className="flex justify-between items-start mb-md relative z-10">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary-container">
              description
            </span>
          </div>
          <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-md font-label-caps flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            15%
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-on-surface-variant font-label-strong mb-xs">
            Total Applications
          </p>
          <p className="font-h1 text-on-surface">{applications.length}</p>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />
        <div className="flex justify-between items-start mb-md relative z-10">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-container">
              school
            </span>
          </div>
          <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-md font-label-caps flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            10%
          </span>
        </div>
        <div className="relative z-10">
          <p className="text-on-surface-variant font-label-strong mb-xs">
            Active Internships
          </p>
          <p className="font-h1 text-on-surface">{internshipData.length}</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
      <div className="lg:col-span-2 bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col">
        <div className="flex justify-between items-center mb-md">
          <h2 className="font-h3 text-on-surface">
            User Growth &amp; Postings
          </h2>
          <div className="flex gap-sm">
            <div className="flex items-center gap-xs">
              <div className="w-3 h-3 rounded-full bg-tertiary-container" />
              <span className="font-label-caps text-on-surface-variant">
                Users
              </span>
            </div>
            <div className="flex items-center gap-xs">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="font-label-caps text-on-surface-variant">
                Jobs
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-[300px] w-full relative flex items-end">
          <svg
            className="w-full h-[80%] mt-auto"
            preserveAspectRatio="none"
            viewBox="0 0 100 50"
          >
            <path
              d="M0,50 L0,40 Q10,35 20,42 T40,30 T60,25 T80,15 T100,5 L100,50 Z"
              fill="rgba(7,0,108,0.05)"
            />
            <path
              className="text-tertiary-container"
              d="M0,40 Q10,35 20,42 T40,30 T60,25 T80,15 T100,5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M0,50 L0,45 Q15,48 25,40 T45,35 T65,38 T85,28 T100,20 L100,50 Z"
              fill="rgba(0,106,97,0.05)"
            />
            <path
              className="text-secondary"
              d="M0,45 Q15,48 25,40 T45,35 T65,38 T85,28 T100,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-on-surface-variant font-label-caps mt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col">
        <h2 className="font-h3 text-on-surface mb-md">Category Distribution</h2>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 mb-md">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx={50}
                cy={50}
                fill="none"
                r={40}
                stroke="rgba(19, 27, 46, 0.1)"
                strokeWidth={20}
              />
              <circle
                className="text-tertiary-container transition-all duration-1000 ease-out"
                cx={50}
                cy={50}
                fill="none"
                r={40}
                stroke="currentColor"
                strokeDasharray="251.2"
                strokeDashoffset="100.48"
                strokeWidth={20}
              />
              <circle
                className="text-secondary transform origin-center rotate-[216deg] transition-all duration-1000 ease-out delay-100"
                cx={50}
                cy={50}
                fill="none"
                r={40}
                stroke="currentColor"
                strokeDasharray="251.2"
                strokeDashoffset="175.84"
                strokeWidth={20}
              />
              <circle
                className="text-primary-fixed-dim transform origin-center rotate-[324deg] transition-all duration-1000 ease-out delay-200"
                cx={50}
                cy={50}
                fill="none"
                r={40}
                stroke="currentColor"
                strokeDasharray="251.2"
                strokeDashoffset="200.96"
                strokeWidth={20}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-h2 text-on-surface">100%</span>
              <span className="font-label-caps text-on-surface-variant">
                Active
              </span>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-tertiary-container" />
                <span className="text-on-surface">Software</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                60%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-on-surface">Design</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                30%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                <span className="text-on-surface">Marketing</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                10%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                <span className="text-on-surface">Finance</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                10%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                <span className="text-on-surface">Healthcare</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                10%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                <span className="text-on-surface">Education</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                10%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                <span className="text-on-surface">Business</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                10%
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
                <span className="text-on-surface">Other</span>
              </div>
              <span className="font-label-strong text-on-surface-variant">
                10%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-md">
      <div className="lg:col-span-3 bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] overflow-x-auto">
        <div className="flex justify-between items-center mb-md">
          <h2 className="font-h3 text-on-surface">Recent Job Postings</h2>
          <button className="text-tertiary-container font-label-strong hover:bg-tertiary-fixed/30 px-sm py-xs rounded-md transition-colors">
            View All
          </button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-label-caps text-on-surface-variant border-b border-surface-container-high">
              <th className="pb-sm font-label-caps">Role</th>
              <th className="pb-sm font-label-caps">Company</th>
              <th className="pb-sm font-label-caps">Date Posted</th>
              <th className="pb-sm font-label-caps">Status</th>
              <th className="pb-sm font-label-caps text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-body-sm">
            {jobData.slice(0, 3).map((job) => {
              return (
            <tr className="group hover:bg-surface-container-low transition-colors">
              <td className="py-sm">
                <p className="font-label-strong text-on-surface">
                  {job.title}
                </p>
                <p className="text-on-surface-variant text-xs">{job.mode}, {job.location}</p>
              </td>
              <td className="py-sm">{job.company.name}</td>
              <td className="py-sm text-on-surface-variant">{formatDate(`${job.createdAt}`)}</td>
              <td className="py-sm">
                <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-1 rounded-full text-xs font-label-strong">
                  {job.status}
                </span>
              </td>
              <td className="py-sm text-right">
                <button className="text-on-surface-variant hover:text-on-surface p-1 rounded-md hover:bg-surface-container">
                  <span className="material-symbols-outlined text-[20px]">
                    more_vert
                  </span>
                </button>
              </td>
            </tr>
              )
            })}
            
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-md">
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col justify-between items-start relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-5 text-tertiary-container">
            <span className="material-symbols-outlined text-[120px]">
              pending_actions
            </span>
          </div>
          <div className="relative z-10 w-full">
            <p className="text-on-surface-variant font-label-strong mb-sm">
              Pending Approvals
            </p>
            <div className="flex items-end gap-sm mb-md">
              <span className="font-display text-on-surface leading-none">
                42
              </span>
              <span className="text-body-sm text-on-surface-variant mb-1">
                items require attention
              </span>
            </div>
            <button className="w-full bg-tertiary-container hover:bg-tertiary-container/90 text-on-tertiary-container font-label-strong py-sm rounded-lg transition-colors">
              Review Now
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex-1">
          <h2 className="font-h3 text-on-surface mb-md">
            Recent Registrations
          </h2>
          <div className="space-y-sm">
            {users.slice(0, 3).map((user: User) => {
              return (
              <div key={user.id} className="flex items-center gap-sm">
              <div className="w-10 h-10 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Professional headshot of a young woman smiling warmly in a well-lit office setting, modern corporate aesthetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNVuWQoZ4T1Oxqnl05SdX01jVF1_oRG6ioN190aEEdFWlal66z1HfCGnd-0UiKl9kwDYaSJCpw3vo_5GFjf0o6EIX3mNUf2334aaHjkCY1w0uwW_jE2TssVyyz0q-Vmk0IXCO4tb1ixcEdk--BnK8py21ZUImaZzPyjwU1vAEw-1MBUBUey47cpNEX6J4kJ8Htg8qRzbw7CYhUUzlC0QeSeX1ALH21vRuPvK1KzInkCfhCcJM37W_a"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-label-strong text-on-surface truncate">
                  {user.name}
                </p>
                <p className="text-[12px] text-on-surface-variant truncate">
                  {user.role}
                </p>
              </div>
              <span className="text-[11px] text-on-surface-variant whitespace-nowrap">
                {timeAgo(user.createdAt)} 
              </span>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default AdminDashboard