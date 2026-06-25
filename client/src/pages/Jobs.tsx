import { IndianRupee } from "lucide-react";
import { useState } from "react"
import {useJobs} from "../context/JobsContext.tsx";
import timeAgo from '../../utils/timeAgo';
import Navbar from "@/components/Navbar.tsx";
import { useNavigate } from "react-router-dom";
import toTitleCase from '../../utils/titleCase';

interface Job{
    id: number;
    title: string;
    company: {name: string};
    category: string;
    location: string;
    salaryMin: number;
    salaryMax: number;
    updatedAt: string;
    type: string;
    tags: string;
  }
  
  export function Jobs(){
    const { userData, setUserData, error, setError, loading, setLoading, total, setTotal } = useJobs();
    const [sortBy, setSortBy]   = useState<string>("recent");
    const navigate = useNavigate();

  
  const getSortedJobs = () => {
    const jobs = [...userData];
    if (sortBy === "recent") {
      return jobs.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    } else if (sortBy === "salary") {
      return jobs.sort((a, b) => b.salaryMax - a.salaryMax);
    }
    return jobs;
  };
  

    return (
        <>
            <Navbar/>
            <main className="grow max-w-7xl mx-auto w-full px-6 py-12 md:px-8 md:py-16">
  <section className="mb-12">
    <h1 className="font-bold text-[48px] text-on-surface mb-8">
      Find your next career move
    </h1>
    <div className="bg-white p-2 rounded-xl job-card-shadow flex flex-col md:flex-row items-center gap-2 border border-slate-100">
      <div className="grow flex items-center px-4 w-full">
        <span
          className="material-symbols-outlined text-outline"
          data-icon="search"
        >
          search
        </span>
        <input
          className="w-full border-none focus:ring-0 font-body-md text-on-surface placeholder:text-outline-variant"
          placeholder="Job title, keywords..."
          type="text"
        />
      </div>
      <div className="hidden md:block w-[1px] h-8 bg-slate-200" />
      <div className="grow flex items-center px-4 w-full">
        <span
          className="material-symbols-outlined text-outline"
          data-icon="location_on"
        >
          location_on
        </span>
        <input
          className="w-full border-none focus:ring-0 font-body-md text-on-surface placeholder:text-outline-variant"
          placeholder="City, state, or remote"
          type="text"
        />
      </div>
      <button className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-strong rounded-lg hover:opacity-90 transition-all active:scale-95">
        Search Jobs
      </button>
    </div>
  </section>
  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
    {/* Sidebar Filters */}
    <aside className="md:col-span-3 space-y-8">
      <div>
        <h3 className="font-h3 text-h3 text-on-surface mb-4">Filters</h3>
        <div className="space-y-4">
          <div>
            <span className="font-label-strong text-label-strong text-on-surface-variant block mb-2">
              Job Type
            </span>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  defaultChecked={true}
                  className="rounded border-outline-variant text-secondary focus:ring-secondary"
                  type="checkbox"
                />
                <span className="font-body-sm text-on-surface">Full-time</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="rounded border-outline-variant text-secondary focus:ring-secondary"
                  type="checkbox"
                />
                <span className="font-body-sm text-on-surface">Contract</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  className="rounded border-outline-variant text-secondary focus:ring-secondary"
                  type="checkbox"
                />
                <span className="font-body-sm text-on-surface">Remote</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
    {/* Job Feed */}
    <div className="md:col-span-9 space-y-md">
      <div className="flex justify-between items-center mb-4">
        <span className="font-body-sm text-on-surface-variant">
          Showing <strong>{total}</strong> jobs
        </span>
        <div className="flex items-center gap-2">
          <span className="font-label-strong text-label-strong text-on-surface-variant">
            Sort by:
          </span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none font-label-strong text-secondary focus:ring-0 cursor-pointer">
            <option value="recent">Most Recent</option>
            <option value="salary">Highest Salary</option>
          </select>
        </div>
      </div>
      {userData.length > 0 && (
        getSortedJobs().map((job : Job) => (
            <div key={job.id} onClick={() => navigate(`/jobs/search/${job.title}`, {state: job})} className="cursor-pointer">
              <div className="bg-white p-sm md:p-md rounded-xl job-card-shadow border border-slate-100 hover:border-secondary transition-all group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                    <span
              className="material-symbols-outlined text-3xl text-primary"
              data-icon="token"
            >
              token
            </span>
          </div>
          <div className="grow">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface group-hover:text-secondary transition-colors">
                  {job.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mt-1">
                  {job.company.name} • {job.location} 
                </p>
              </div>
              <button className="text-outline hover:text-error transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="bookmark"
                >
                  bookmark
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-caps rounded-full">
                {toTitleCase(job.type)}
              </span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps rounded-full">
                {toTitleCase(job.category)}
              </span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps rounded-full">
                Senior Level
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 pt-6 border-t border-slate-50 gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-outline text-sm"
                    data-icon="payments"
                  >
                    payments
                  </span>
                  <span className="font-label-strong text-on-surface flex items-center">
                    <IndianRupee width={15} />
                    <span>{job.salaryMin/1000}k - {job.salaryMax/1000}k</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-outline text-sm"
                    data-icon="schedule"
                  >
                    schedule
                  </span>
                  <span className="font-body-sm text-on-surface-variant">
                    {timeAgo(job.updatedAt)}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2 border border-secondary text-secondary font-label-strong rounded-lg hover:bg-secondary hover:text-white transition-all active:scale-95">
                  Save Job
                </button>
                <button className="px-6 py-2 bg-primary text-on-primary font-label-strong rounded-lg hover:opacity-90 transition-all active:scale-95">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        ))
      )}
          
      
      {/* Pagination */}
      <div className="flex flex-col items-center justify-center gap-4 pt-12 pb-8">
        <div className="animate-spin">
          <span className="material-symbols-outlined text-3xl text-secondary">
            progress_activity
          </span>
        </div>
        <span className="font-body-sm text-on-surface-variant">
          Loading more jobs...
        </span>
      </div>
    </div>
  </div>
</main>
        </>
    )
}