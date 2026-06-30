import { wishListContext } from "@/context/WishlistContext";
import axios from "axios";
import { IndianRupee } from "lucide-react";
import { useState, useEffect, useContext, type ChangeEvent } from "react"
import { useSearchParams } from 'react-router-dom';
import timeAgo from '../../utils/timeAgo';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


interface Job{
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
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
      job.title?.toLowerCase().includes(searchTitle.toLowerCase()) &&
      job.location?.toLowerCase().includes(searchLocation.toLowerCase()) &&
      job.category?.toLowerCase().includes(searchCategory.toLowerCase()) &&
      job.salaryMin !== null && job.salaryMax !== null
    );
  });
    
  const jobCount = filteredJobs.length;
  const [query, setQuery] = useState<string>("");
        const [results, setResults] = useState<Job[]>([]);
        const [locationResults, setLocationResults] = useState<Job[]>([]);
        const [location, setLocation] = useState<string>("");
        const [category, setCategory] = useState<string>("");
        const [categoryResults, setCategoryResults] = useState<Job[]>([]);
      
        const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
          const val = e.target.value;
          setQuery(val);
          if (!val.trim()) {
            setResults([]);
            return;
          }
      
          try {
            const res = await axios.get(`/api/jobs/search?q=${encodeURIComponent(val)}`);
            setResults(res.data);
          } catch (err) {
            console.error("Search failed:", err); 
            setResults([]);
          } 
        };
      
        const handleLocationChange = async (e: ChangeEvent<HTMLInputElement>) => {
          const locationVal = e.target.value;
          setLocation(locationVal);
          if (!locationVal.trim()) {
            setLocationResults([]);
            return;
          }
      
          try {
            const res = await axios.get(`/api/jobs/search?location=${encodeURIComponent(locationVal)}`);
            setLocationResults(res.data);
          } catch (err) {
            console.error("Search failed:", err); 
            setLocationResults([]);
          }
        };
      
        const handleCategoryChange = async(e: ChangeEvent<HTMLInputElement>) => {
          const categoryVal = e.target.value;
          setCategory(categoryVal);
          if(!categoryVal.trim()){
            setCategoryResults([]);
            return;
          }
          try {
            const res = await axios.get(`/api/jobs/search?category=${encodeURIComponent(categoryVal)}`);
            setCategoryResults(res.data);
          } catch (err) {
            console.error("Search failed:", err); 
            setCategoryResults([]);
          }
        }
      
    
    return (
        <>
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
              if(query.trim() && location.trim()){
                window.location.href = `/jobs/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
                setResults([]);
                setLocationResults([]);
              }
              else if (query.trim()) {
                window.location.href = `/jobs/search?q=${encodeURIComponent(query)}}`;
                setResults([]);
                setLocationResults([]);
              }
              else if(location.trim()){
                window.location.href = `/jobs/search?location=${encodeURIComponent(location)}`;
                setResults([]);
                setLocationResults([]);
              }
               else {
                alert('Please enter either job title or location');
              }
            }}>
                        Search 
                    </button>
    </div>
    {results.length > 0 && (
        <ul className="dropdown" style={{ color: "white", cursor: "pointer" }}>
          {Array.from(new Set(results.map((job: Job) => job.title))).map((title: string) => (
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
          {Array.from(new Set(locationResults.map((job: Job) => job.location))).map((location: string) => (
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
      <Footer/>
        </>
    )
}