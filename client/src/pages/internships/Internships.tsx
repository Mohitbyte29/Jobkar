import { IndianRupee } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react"
import {useInternships} from "../../context/InternshipsContext.tsx";
import timeAgo from '../../../utils/timeAgo.tsx';
import Navbar from "@/components/Navbar.tsx";
import { useNavigate } from "react-router-dom";
import toTitleCase from '../../../utils/titleCase.tsx';
import toast, { Toaster } from "react-hot-toast";
import { useInternshipsearch } from "@/hooks/InternshipSearch.tsx";
import gsap from "gsap";

interface Internship{
    id: number;
  title: string;
  companies: { name: string, description: string, location: string, website: string, companyStatus: string, logo: string };
  category: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  type: string;
  tags: string;
  }
  
  export function Internships(){
    const { internshipData, setInternshipData, total } = useInternships();
    const [sortBy, setSortBy]   = useState<string>("recent");
    const navigate = useNavigate();
    const {handleChange, handleLocationChange, handleCategoryChange, query, setQuery, results, setResults, location, setLocation, setLocationResults, locationResults, category, setCategory, setCategoryResults, selectedInternship, setSelectedInternship, selectedLocation, setSelectedLocation, canSearch} = useInternshipsearch();
    const pageRef = useRef<HTMLElement>(null);
    const hasAnimatedRef = useRef(false);
    interface Filters{
    type: string[];
    category: string[];
    salaryRange: string[];
  }
    const [filters, setFilters] = useState<Filters>({
      type: [],
      category: [],
      salaryRange: []
    });

  const getSortedInternships = () => {
    const internships = [...internshipData];
    if (sortBy === "recent") {
      return internships.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    } else if (sortBy === "salary") {
      return internships.sort((a, b) => b.salaryMax - a.salaryMax);
    }
    return internships;
  };

  type filterName = keyof Filters;
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
         console.log("Filters: ", filters);
        console.log("Query: ", params.toString());
        navigate(`/internships/search?${params.toString()}`);

    } catch (error) {
        console.error(error);
    }
};
  
  useEffect(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion || !pageRef.current) return;
  
      const context = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".internship-card");
        
        if (!hasAnimatedRef.current) {
          const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
  
          timeline
            .from(".internships-hero", { y: 16, opacity: 0, duration: 0.35 })
            .from(".internships-search", { y: 12, opacity: 0, duration: 0.3 }, "-=0.16")
            .from(
              [".internships-sidebar", ".internships-toolbar"],
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
    }, [sortBy, internshipData.length]);
    return (
        <>
            <Toaster/>
            <Navbar/>
            <main
            ref={pageRef}
             className="grow max-w-7xl mx-auto w-full px-6 py-12 md:px-8 md:py-16">
  <section className="mb-12">
    <h1 className="internships-hero font-bold text-[48px] text-on-surface mb-8">
      Find your next career move
    </h1>
    <div className="internships-search bg-white rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] p-2 flex flex-col md:flex-row items-center gap-2">
            <div className="flex items-center px-4 py-2 flex-1 border-r border-outline-variant/30 w-full">
              <span
                className="material-symbols-outlined text-outline mr-2"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full border-none focus:ring-0 font-body-md bg-transparent"
                placeholder="internship Title or Keywords..." value={query} onChange={handleChange} onClick={() => setLocationResults([])}
                type="text"
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
                placeholder="City or remote" value={location} onChange={handleLocationChange} onClick={() => setResults([])}
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
                    if (!selectedInternship && query.trim()) {
                      toast.error("Please enter a job");
                      return;
                    }

                    if (!selectedLocation && location.trim()) {
                      toast.error("Please enter a valid location");
                      return;
                    }
                    if (query.trim() && location.trim()) {
                      window.location.href = `/internships/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else if (query.trim()) {
                      window.location.href = `/internships/search?q=${encodeURIComponent(query)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else if (location.trim()) {
                      window.location.href = `/internships/search?location=${encodeURIComponent(location)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else {
                      toast.error("Please enter either internship title or location");
                    }
                  }}
                >
                  Search
                    </button>
          </div>

          {results.length > 0 && (
        <ul className="dropdown" style={{ color: "white", cursor: "pointer" }}>
          {Array.from(new Set(results.map((internship) => internship.title))).map((title: string) => (
            <li key={title} onClick={() => {
              setQuery(title)
              setSelectedInternship(title);
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
          {Array.from(new Set(locationResults.map((internship) => internship.location))).map((location: string) => (
            <li key={location} onClick={() => {
              setLocation(location);
              setSelectedLocation(location);
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
    {/* internship Feed */}
    <div className="md:col-span-9 space-y-md">
      <div className="flex justify-between items-center mb-4">
        <span className="font-body-sm text-on-surface-variant">
          Showing <strong>{total}</strong> internships
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
      {internshipData.length > 0 && (
        
        getSortedInternships().map((internship : Internship) => (
            <div key={internship.id}>
              <div className="internship-card bg-white p-sm md:p-md rounded-xl internship-card-shadow border border-slate-100 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] motion-reduce:hover:transform-none motion-reduce:transition-none transition-all duration-200 group">
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
                  {internship.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mt-1">
                  {internship.companies.name} • {internship.location} 
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
                {toTitleCase(internship.type)}
              </span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-caps rounded-full">
                {toTitleCase(internship.category)}
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
                    <span>{internship.salaryMin/1000}k - {internship.salaryMax/1000}k</span>
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
                    {timeAgo(internship.updatedAt)}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="cursor-pointer px-6 py-2 border border-secondary text-secondary font-label-strong rounded-lg hover:bg-red-600 hover:text-white transition-all active:scale-95">
                  Save internship
                </button>
                <button onClick={() => navigate(`/internships/search/${internship.id}`)} className="cursor-pointer px-6 py-2 bg-primary text-on-primary font-label-strong rounded-lg hover:opacity-90 transition-all active:scale-95">
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
      
    </div>
  </div>
</main>
        </>
    )
}