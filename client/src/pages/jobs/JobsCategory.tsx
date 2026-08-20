import axios from "axios";
import { IndianRupee } from "lucide-react";
import { useState, useEffect, useContext, type ChangeEvent } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom';
import timeAgo from '../../../utils/timeAgo';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { usejobSearch } from "@/hooks/JobSearch";

interface SavedJob {
  id: number;
  jobId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface Job{
    id: number;
    title: string;
    company: {name: string, description: string, location: string, website: string, companyStatus: string, logo: string};
    category: string;
    location: string;
    salaryMin: number;
    salaryMax: number;
    updatedAt: string;
    type: string;
    tags: string;
    mode: string;
  }


  export function JobsCategory(){
  const {handleChange, handleLocationChange, handleCategoryChange, query, setQuery, results, setResults, location, setLocation, locationResults, category, setCategory, setCategoryResults, selectedJob, setSelectedJob, selectedLocation, setSelectedLocation, canSearch, setLocationResults } = usejobSearch(); 
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [saveJob, setsaveJob] = useState<SavedJob[]>([]);
  const navigate = useNavigate();

  interface Filters{
    jobType: string[];
    category: string[];
    salaryRange: string[];
    mode: string[];
  }
  
  const [filters, setFilters] = useState<Filters>({
    jobType: [],
    category: [],
    salaryRange: [],
    mode: [],
  })

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/jobs", {
          withCredentials: true,
        });
        setJobs(res.data.jobs);
      } catch (err) {
        console.error("Failed to load jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  type filterName = keyof Filters;

  const searchTitle = searchParams.get("q") || "";
  const searchLocation = searchParams.get("location") || "";
    
  const handleFilterChange =  ( name: filterName, value: string ) => {
    setFilters(prev => ({ 
      ...prev,
      [name]: prev[name].includes(value) ? prev[name].filter(item => item !== value) : [...prev[name], value]
    }))
  };
  
  const applyFilters = async () => {
    try {
        const params = new URLSearchParams();

        filters.jobType.forEach(type => {
            params.append("type", type);
        });

        filters.category.forEach(category => {
            params.append("category", category);
        });

        filters.salaryRange.forEach(range => {
            params.append("salaryRange", range);
        });

        filters.mode.forEach(mode => {
            params.append("mode", mode);
        });
         console.log("Filters:", filters);
        console.log("Query:", params.toString());
                const res = await axios.get(
            `/api/jobs/search?${params.toString()}`,
            {
                withCredentials: true
            }
        );

        console.log("Filtered jobs:", res.data);

        setJobs(res.data);

         navigate(`/jobs/search?${params.toString()}`);

    } catch (error) {
        console.error(error);
    }
  };

  const handlegetSavedJobs = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/api/jobs/saved`, {
      withCredentials: true,
    });
    // console.log("Saved Jobs: ", res.data);
    setsaveJob(res.data);
    // console.log([saveJob]);
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error response data:", error.response.data);
    }
    // toast.error("Failed to fetch saved jobs");
  }
};

 const handleSaveJob = async (jobId: number) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/jobs/${jobId}/save`,
      {},
      { withCredentials: true },
    );
    toast.success("Job saved successfully");
  } catch (error) {
    console.error("Error saving job:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error response data:", error.response.data);
    }
    toast.error("Failed to save job");
  }
};

const isSaved = (jobId: number) => {
  return saveJob.some((saved) => saved.jobId === jobId);
};

const handleUnsaveJob = async (jobId: number) => {
  try {
    const res = await axios.delete(
      `http://localhost:4000/api/jobs/${jobId}/save`,
      { withCredentials: true },
    );
    toast.success("Job Removed successfully");
  } catch (error) {
    console.error("Error Removing job:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error response data:", error.response.data);
    }
    toast.error("Failed to remove job");
  }
};

const filteredJobs = jobs.filter((job: Job) => {
  return (
    job.title?.toLowerCase().includes(searchTitle.toLowerCase()) &&
    job.location?.toLowerCase().includes(searchLocation.toLowerCase()) 
  );
});
  
  const jobCount = filteredJobs.length;     
    return (
        <>
        <Toaster/>
            <Navbar />
            <main className="grow max-w-7xl mx-auto w-full px-6 py-12 mt-4">
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
          placeholder="Job title, keywords..." value={query} onChange={handleChange} onClick={() => setLocationResults([])}
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
          placeholder="City, state, or remote" value={location} onChange={handleLocationChange} onClick={() => setResults([])}
          type="text"
        />
      </div>
      <button
            className={`w-full md:w-auto py-3 px-8 rounded-xl text-xl font-label-strong active:scale-95 transition-all ${
              query.trim() || location.trim()
                ? 'bg-primary-container text-white cursor-pointer hover:opacity-90' 
                : 'bg-gray-400 text-white cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              if (!selectedJob && query.trim()) {
                      toast.error("Please enter a job");
                      return;
                    }

                    if (!selectedLocation && location.trim()) {
                      toast.error("Please enter a valid location");
                      return;
                    }
                    if (query.trim() && location.trim()) {
                      window.location.href = `/jobs/search?c=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else if (query.trim()) {
                      window.location.href = `/jobs/search?c=${encodeURIComponent(query)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else if (location.trim()) {
                      window.location.href = `/jobs/search?location=${encodeURIComponent(location)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else {
                      toast.error("Please enter either job title or location");
                    }
            }}>
                        Search 
                    </button>
    </div>
    {results.length > 0 && (
        <ul className="dropdown" style={{ color: "white", cursor: "pointer" }}>
          {Array.from(new Set(results.map(job => job.title))).map((title: string) => (
            <li key={title} onClick={() => {
              setQuery(title)
              setResults([]);
            }}>
              <div className="dropdown-item bg-white text-gray-900 px-4 py-2 border-2 hover:bg-gray-100 rounded">
              <strong>{title}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
        {locationResults.length > 0 && (
        <ul className="locationdropdown" style={{ color: "white", cursor: "pointer" }}>
          {Array.from(new Set(locationResults.map(job=> job.location))).map((location: string) => (
            <li key={location} onClick={() => {
              setLocation(location)
              setLocationResults([]);
            }}>
              <div className="dropdown-item bg-white text-gray-900 px-4 py-2 border-2 hover:bg-gray-100 rounded">
              <strong>{location}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
  </section>
  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
    {/* Sidebar Filters */}
    <aside className="md:col-span-3 space-y-8">
            <div>
              <h3 className="font-h3 text-h3 text-on-surface mb-4">Filters</h3>
              <button className="text-sm text-secondary hover:underline mb-4 block">
                Clear All
              </button>
              <div className="space-y-4">
                <div>
                  <span className="font-label-strong text-label-strong text-on-surface-variant block mb-2">
                    Job Type
                  </span> 
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("jobType", "FULL_TIME")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Full-time
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("jobType", "PART_TIME")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Part-time
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("jobType", "CONTRACT")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Contract
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("jobType", "REMOTE")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Remote
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="font-label-strong text-label-strong text-on-surface-variant block mb-2 mt-6">
                    Salary Range
                  </span>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface flex items-center gap-1">
                        Under 
                      <span className="flex items-center">
                        <IndianRupee size={16} />500k
                      </span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        <span className="flex items-center gap-1">
                        <IndianRupee size={16} />500k - <IndianRupee size={16} />1000k
                        </span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        <span className="flex items-center ">
                          <IndianRupee size={16} />1000k - <IndianRupee size={16} />1500k
                        </span>
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        <span className="flex items-center">
                          <IndianRupee size={16} />1500k+
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <span className="font-label-strong text-label-strong text-on-surface-variant block mb-2 mt-6">
                    Work Mode
                  </span>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("mode", "ONSITE")}
                      />
                      <span className="font-body-sm text-on-surface">
                        On-site
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("mode", "HYBRID")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Hybrid
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("mode", "REMOTE")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Remote
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <span className="font-label-strong text-label-strong text-on-surface-variant block mb-2 mt-6">
                    Category
                  </span>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary "
                        type="checkbox" onChange={() => handleFilterChange("category", "TECHNOLOGY_SOFTWARE")}
                      />
                      <span className="font-body-sm text-on-surface" >
                        Software Engineering
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "CREATIVE_MEDIA")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Design
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "MARKETING")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Marketing
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "HEALTHCARE")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Healthcare
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "BUSINESS_OPERATIONS")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Business Operations
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "FINANCE")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Finance
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "EDUCATION")}
                      />
                      <span className="font-body-sm text-on-surface">
                        Other
                      </span>
                    </label>
                    <button onClick={applyFilters} className="w-full py-3 px-8 rounded-xl text-l font-label-strong active:scale-95 transition-all bg-primary-container text-white cursor-pointer hover:opacity-90 mt-4">
                      Apply Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
    {/* Job Feed */}
    <div className="md:col-span-9 space-y-md">
      <div className="flex justify-between items-center mb-4">
        <span className="font-body-sm text-on-surface-variant">
          Showing <strong>{jobCount}</strong> 
          <span>
            {jobCount === 1 ? " job" : " jobs"} found
          </span>
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
                  {job.company?.name ?? "Unknown company"} • {job.location}
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
                            {isSaved(job.id) ? (
                              <button
                                className="px-6 py-2 border border-error text-error font-label-strong rounded-lg hover:bg-error hover:text-white transition-all active:scale-95 cursor-pointer"
                                onClick={() => void handleUnsaveJob(job.id)}
                              >
                                Remove
                              </button>
                            ) : (
                              <button
                                className="px-6 py-2 border border-error text-error font-label-strong rounded-lg hover:bg-error hover:text-white transition-all active:scale-95 cursor-pointer"
                                onClick={() => void handleSaveJob(job.id)}
                              >
                                Save Job
                              </button>
                            )}
                            <button
                              onClick={() => {
                                // setCurrentJob(job);
                                navigate(`/jobs/search/${job.id}`, {
                                  state: job,
                                });
                              }}
                              className="cursor-pointer px-6 py-2 bg-primary text-on-primary font-label-strong rounded-lg hover:opacity-90 transition-all active:scale-95"
                            >
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
      <Footer/>
        </>
    )
}