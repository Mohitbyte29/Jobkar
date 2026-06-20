import { wishListContext } from "@/context/WishlistContext";
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import { useSearchParams } from 'react-router-dom';


interface Job{
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
}

export function JobsCategory(){
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [wishList, setwishList] = useState<Job[]>([]);

  const searchTitle = searchParams.get("q") || "";
  const searchLocation = searchParams.get("location") || "";
  const searchCategory = searchParams.get("category") || "";

  const { addToWishList } = useContext(wishListContext);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/jobs/search?q=' + searchTitle + '&location=' + searchLocation + '&category=' + searchCategory);
        setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, [searchTitle, searchLocation, searchCategory]);
    
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      job.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
  });
    
  const jobCount = filteredJobs.length;
    return (
        <>
            <main className="grow max-w-7xl mx-auto w-full px-6 py-12">
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
          Showing <strong>{jobCount}</strong> jobs
        </span>
        <div className="flex items-center gap-2">
          <span className="font-label-strong text-label-strong text-on-surface-variant">
            Sort by:
          </span>
          <select className="bg-transparent border-none font-label-strong text-secondary focus:ring-0 cursor-pointer">
            <option>Most Recent</option>
            <option>Highest Salary</option>
          </select>
        </div>
      </div>

      {/* Job Card 1 */}
      {filteredJobs.length > 0 && (
        filteredJobs.map((job : Job) => (
            <div key={job.id}>
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
                  {job.company} • {job.location}
                </p>
              </div>
              <button className="text-outline hover:text-error transition-colors" onClick={() => addToWishList(job)}>
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
                Full-time
              </span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps rounded-full">
                Design
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
                  <span className="font-label-strong text-on-surface">
                    $140k - $180k
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
                    2 hours ago
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2 border border-secondary text-secondary font-label-strong rounded-lg hover:bg-secondary hover:text-white transition-all active:scale-95" onClick={() => addToWishList(job)}>
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