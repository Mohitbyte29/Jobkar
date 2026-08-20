import { IndianRupee } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useJobs } from "../../context/JobsContext.tsx";
import timeAgo from "../../../utils/timeAgo.tsx";
import Navbar from "@/components/Navbar.tsx";
import { useNavigate } from "react-router-dom";
import toTitleCase from "../../../utils/titleCase.tsx";
import toast, { Toaster } from "react-hot-toast";
import { usejobSearch } from "@/hooks/JobSearch.tsx";
import axios from "axios";

interface SavedJob {
  id: number;
  jobId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface Job {
  id: number;
  title: string;
  company: {
    name: string;
    description: string;
    location: string;
    website: string;
    companyStatus: string;
    logo: string;
  };
  category: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  type: string;
  tags: string;
}

export function Jobs() {
  const { jobData, total } = useJobs();
  const [sortBy, setSortBy] = useState<string>("recent");
  const [saveJob, setsaveJob] = useState<SavedJob[]>([]);
  interface Filters{
    type: string[];
    category: string[];
    salaryRange: string[];
    mode: string[];
  }
  
  const [filters, setFilters] = useState<Filters>({
    type: [],
    category: [],
    salaryRange: [],
    mode: [],
  })

  type filterName = keyof Filters;
  const pageRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);
  const navigate = useNavigate();
  const {
    handleChange,
    handleLocationChange,
    query,
    setQuery,
    results,
    setResults,
    location,
    setLocation,
    locationResults,
    selectedJob,
    setSelectedJob,
    selectedLocation,
    setSelectedLocation,  
    canSearch,
    setLocationResults,
  } = usejobSearch();

  const handleFilterChange =  ( name: filterName, value: string ) => {
    setFilters(prev => ({ 
      ...prev,
      [name]: prev[name].includes(value) ? prev[name].filter(item => item !== value) : [...prev[name], value]
    }))
  };
  
  const applyFilters = async () => {
    try {
        const params = new URLSearchParams();

        filters.type.forEach(type => {
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
         console.log("Filters: ", filters);
        console.log("Query: ", params.toString());
        navigate(`/jobs/search?${params.toString()}`);

    } catch (error) {
        console.error(error);
    }
};

  const isSaved = (jobId: number) => {
    return saveJob.some((saved) => saved.jobId === jobId);
  };

  const handlegetSavedJobs = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/jobs/saved`, {
        withCredentials: true,
      });
      setsaveJob(res.data);
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response data:", error.response.data);
      }
    }
  };

  const getSortedJobs = () => {
    const jobs = [...jobData];
    if (sortBy === "recent") {
      return jobs.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
    } else if (sortBy === "salary") {
      return jobs.sort((a, b) => b.salaryMax - a.salaryMax);
    }
    return jobs;
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

  useEffect(() => {
    getSortedJobs();
    handlegetSavedJobs();
  }, [handleSaveJob, handleUnsaveJob]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !pageRef.current) return;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".job-card");

      if (!hasAnimatedRef.current) {
        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        timeline
          .from(".jobs-hero", { y: 16, opacity: 0, duration: 0.35 })
          .from(".jobs-search", { y: 12, opacity: 0, duration: 0.3 }, "-=0.16")
          .from(
            [".jobs-sidebar", ".jobs-toolbar"],
            { y: 12, opacity: 0, duration: 0.3, stagger: 0.05 },
            "-=0.12",
          )
          .from(
            cards,
            {
              y: 12,
              opacity: 0,
              duration: 0.32,
              stagger: 0.035,
              clearProps: "transform,opacity",
            },
            "-=0.1",
          );

        hasAnimatedRef.current = true;
        return;
      }

      gsap.from(cards, {
        y: 8,
        opacity: 0,
        duration: 0.28,
        stagger: 0.03,
        ease: "power1.out",
        clearProps: "transform,opacity",
      });
    }, pageRef);

    return () => context.revert();
  }, [sortBy, jobData.length]);

  return (
    <>
      <Toaster />
      <Navbar />
      <main
        ref={pageRef}
        className="grow max-w-7xl mx-auto w-full px-6 py-12 md:px-8 md:py-16"
      >
        <section className="mb-12">
          <h1 className="jobs-hero font-bold text-[48px] text-on-surface mb-8">
            Find your next career move
          </h1>
          <div className="jobs-search bg-white rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] p-2 flex flex-col md:flex-row items-center gap-2 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
            <div className="flex items-center px-4 py-2 flex-1 border-r border-outline-variant/30 w-full">
              <span
                className="material-symbols-outlined text-outline mr-2"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full border-none focus:ring-0 font-body-md bg-transparent"
                placeholder="Job Title or Keywords..."
                type="text"
                value={query}
                onChange={handleChange}
                onClick={() => setLocationResults([])}
              />
            </div>
            <div className="flex items-center px-4 py-2 flex-1 w-full">
              <span
                className="material-symbols-outlined text-outline mr-2"
                data-icon="location_on"
              >
                location_on
              </span>
              <input
                className="w-full border-none focus:ring-0 font-body-md bg-transparent"
                placeholder="City or remote"
                value={location}
                onChange={handleLocationChange}
                onClick={() => setResults([])}
                type="text"
              />
            </div>
            <button
              disabled={!canSearch}
              className={`w-full md:w-auto py-3 px-8 rounded-xl text-xl font-label-strong active:scale-95 transition-all ${
                canSearch
                  ? "bg-primary-container text-white cursor-pointer hover:opacity-90"
                  : "bg-gray-400 text-white cursor-not-allowed opacity-50"
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
                  navigate(`/jobs/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`);
                  setResults([]);
                  setLocationResults([]);
                } else if (query.trim()) {
                  navigate(`/jobs/search?q=${encodeURIComponent(query)}`);
                  setResults([]);
                  setLocationResults([]);
                } else if (location.trim()) {
                  navigate(`/jobs/search?location=${encodeURIComponent(location)}`);
                  setResults([]);
                  setLocationResults([]);
                } else {
                  toast.error("Please enter either job title or location");
                }
              }}
            >
              Search
            </button>
          </div>

          {results.length > 0 && (
            <ul
              className="dropdown"
              style={{ color: "white", cursor: "pointer" }}
            >
              {Array.from(new Set(results.map((job: Job) => job.title))).map(
                (title: string) => (
                  <li
                    key={title}
                    onClick={() => {
                      setQuery(title);
                      setSelectedJob(title);
                      setResults([]);
                    }}
                  >
                    <div className="dropdown-item bg-white text-gray-900 px-4 py-2 border-2 hover:bg-gray-100 rounded">
                      <strong>{title}</strong>
                    </div>
                  </li>
                ),
              )}
            </ul>
          )}
          {locationResults.length > 0 && (
            <ul
              className="locationdropdown"
              style={{ color: "white", cursor: "pointer" }}
            >
              {Array.from(
                new Set(locationResults.map((job: Job) => job.location)),
              ).map((location: string) => (
                <li
                  key={location}
                  onClick={() => {
                    setLocation(location);
                    setSelectedLocation(location);
                    setLocationResults([]);
                  }}
                >
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
                        defaultChecked={true}
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        Full-time
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        Part-time
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        Contract
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
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
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        On-site
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        Hybrid
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
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
                        className="rounded border-outline-variant text-secondary focus:ring-secondary" onChange={() => handleFilterChange("category", "CREATIVE_MEDIA")}
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        Design
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      onChange={() => handleFilterChange("category", "MARKETING")} /> 
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
                        onChange={() => handleFilterChange("category", "FINANCE")}
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface">
                        Finance
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox" onChange={() => handleFilterChange("category", "OTHER")}
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
            <div className="jobs-toolbar flex justify-between items-center mb-4">
              <span className="font-body-sm text-on-surface-variant">
                Showing <strong>{total}</strong>
                <span>{total === 1 ? " job" : " jobs"} found</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="font-label-strong text-label-strong text-on-surface-variant">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none font-label-strong text-secondary focus:ring-0 cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="salary">Highest Salary</option>
                </select>
              </div>
            </div>
            {jobData.length > 0 &&
              getSortedJobs().map((job: Job) => (
                <div key={job.id}>
                  <div className="job-card will-change-transform bg-white p-sm md:p-md rounded-xl job-card-shadow border border-slate-100 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] motion-reduce:hover:transform-none motion-reduce:transition-none transition-all duration-200 group">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
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
                          <button
                            aria-label={`Save ${job.title}`}
                            className="min-h-11 min-w-11 inline-flex items-center justify-center text-outline hover:text-error transition-colors duration-200"
                          >
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
                                <span>
                                  {job.salaryMin / 1000}k -{" "}
                                  {job.salaryMax / 1000}k
                                </span>
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
              ))}

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
  );
}
