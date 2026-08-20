import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCompany } from "@/context/CompanyContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCompanySearch } from '../../hooks/CompSearch';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { IndianRupee } from "lucide-react";
import AlphaCase  from "../../../utils/AlphaCase";

interface Company {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  companyStatus: string;
  jobs: { id: number, title: string, tags: string[], location: string, type: string, salaryMin: number, salaryMax: number }[];
  _count: { jobs: number };
}
export default function Companies() {
  const { companyData, total } = useCompany();
  const {
    handleChange, handleLocationChange, query, setQuery,
    results, setResults, location, setLocation, setLocationResults, locationResults, selectedCompany, setSelectedCompany,
    selectedLocation, setSelectedLocation, canSearch
  } = useCompanySearch();
  const navigate = useNavigate();

  const pageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const locationResultsRef = useRef<HTMLUListElement>(null);
  const [companies, setCompanies] = useState<Company[]>(companyData);

  interface Filters{
      category: string[];
    }
    
    const [filters, setFilters] = useState<Filters>({
      category: [],
    })
  

  // Small helper for the button press/hover micro-interaction
 const handleSearchClick = () => {
  if (!selectedCompany && query.trim()) {
    toast.error("Please enter a company name or industry");
    return;
  }

  if (!selectedLocation && location.trim()) {
    toast.error("Please enter a valid location");
    return;
  }

  const params = new URLSearchParams();
  if (query.trim()) params.set("c", query);
  if (location.trim()) params.set("location", location);

  if (!query.trim() && !location.trim()) {
    toast.error("Please enter either company name or location");
    return;
  };
}
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

        filters.category.forEach(category => {
            params.append("category", category);
        });
         console.log("Filters:", filters);
        console.log("Query:", params.toString());
                const res = await axios.get(
            `/api/companies/search?${params.toString()}`,
            {
                withCredentials: true
            }
        );

        console.log("Filtered companies:", res.data);

        setCompanies(res.data);

         navigate(`/companies/search?${params.toString()}`);

    } catch (error) {
        console.error(error);
    }
  };
  return (
    <>
      <Toaster />
      <Navbar />
      <main className="pt-16" ref={pageRef}>
        <section className="bg-white border-b border-slate-200 pt-xl pb-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl" ref={heroRef}>
              <h1 className="font-bold text-[48px] text-primary mb-md">
                Explore Top Companies
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                Discover your next career move by browsing the world's most
                innovative organizations and their current openings.
              </p>

              {/* Multi-Input Search Bar */}
              <div
                ref={searchBarRef}
                className="bg-white border border-outline-variant p-2 rounded-xl flex flex-col md:flex-row gap-2 shadow-lg items-center"
              >
                <div className="flex items-center flex-1 px-4 border-b md:border-b-0 md:border-r border-slate-100 py-2 w-full">
                  <span className="material-symbols-outlined text-outline mr-2" data-icon="search">
                    search
                  </span>
                  <input
                    className="w-full border-none focus:ring-0 text-body-md font-body-md placeholder:text-outline bg-transparent"
                    placeholder="Company name or industry"
                    onChange={handleChange}
                    onClick={() => setLocationResults([])}
                    type="text"
                    value={query}
                  />
                </div>
                <div className="flex items-center flex-1 px-4 py-2 w-full">
                  <span className="material-symbols-outlined text-outline mr-2" data-icon="location_on">
                    location_on
                  </span>
                  <input
                    className="w-full border-none focus:ring-0 text-body-md font-body-md placeholder:text-outline bg-transparent"
                    placeholder="Location"
                    onChange={handleLocationChange}
                    onClick={() => setResults([])}
                    type="text"
                    value={location}
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
                    if (!selectedCompany && query.trim()) {
                      toast.error("Please enter a company name or industry");
                      return;
                    }

                    if (!selectedLocation && location.trim()) {
                      toast.error("Please enter a valid location");
                      return;
                    }
                    if (query.trim() && location.trim()) {
                      navigate(`/companies/search?c=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`);
                      setResults([]);
                      setLocationResults([]);
                    } else if (query.trim()) {
                      navigate(`/companies/search?c=${encodeURIComponent(query)}`);
                      setResults([]);
                      setLocationResults([]);
                    } else if (location.trim()) {
                      navigate(`/companies/search?location=${encodeURIComponent(location)}`);
                      setResults([]);
                      setLocationResults([]);
                    } else {
                      toast.error("Please enter either company name or location");
                    }
                  }}
                >
                  Search
                </button>
              </div>

              {results.length > 0 && (
                <ul ref={resultsRef} className="dropdown" style={{ color: "white", cursor: "pointer" }}>
                  {Array.from(new Set(results.map((company) => company.name))).map((name) => (
                    <li
                      key={name}
                      onClick={() => {
                        setQuery(name);
                        setSelectedCompany(name);
                        setResults([]);
                      }}
                    >
                      <div className="dropdown-item bg-white text-gray-900 px-4 py-2 border-2 hover:bg-gray-100 rounded">
                        <strong>{name}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {locationResults.length > 0 && (
                <ul ref={locationResultsRef} className="locationdropdown" style={{ color: "white", cursor: "pointer" }}>
                  {Array.from(new Set(locationResults.map((company) => company.location))).map((loc) => (
                    <li
                      key={loc}
                      onClick={() => {
                        setLocation(loc);
                        setSelectedLocation(loc);
                        setLocationResults([]);
                      }}
                    >
                      <div className="dropdown-item bg-white text-gray-900 px-4 py-2 border-2 hover:bg-gray-100 rounded">
                        <strong>{loc}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-xl">
          <div className="flex flex-col lg:flex-row gap-gutter">
            {/* Filters Sidebar (unchanged) */}
            <aside className="md:col-span-3 space-y-8">
            <div>
              <h3 className="font-h3 text-h3 text-on-surface mb-4">Filters</h3>
              <button className="text-sm text-secondary hover:underline mb-4 block">
                Clear All
              </button>
              <div className="space-y-4">
                
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

            {/* Grid Section */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-md">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Showing <strong>{total}</strong>
                  <span>{total === 1 ? " company" : " companies"} found</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-label-strong text-label-strong text-on-surface-variant">
                    Sort by:
                  </span>
                  <select className="border-none bg-transparent font-label-strong text-label-strong text-primary focus:ring-0 cursor-pointer">
                    <option>Most Active</option>
                    <option>Popularity</option>
                    <option>Recently Added</option>
                  </select>
                </div>
              </div>

              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {companyData.map((company: Company) => (
                  <div
                    key={company.id}
                    className="company-card bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group"
                    onMouseEnter={(e) =>
                      gsap.to(e.currentTarget, { y: -4, duration: 0.25, ease: "power2.out" })
                    }
                    onMouseLeave={(e) =>
                      gsap.to(e.currentTarget, { y: 0, duration: 0.25, ease: "power2.out" })
                    }
                  >
                    {company.name}
                    <div className="flex items-start justify-between mb-sm">
                      <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                        <img
                          alt={company.name}
                          className="w-full h-full object-contain"
                          data-alt="Stripe minimalist company logo on a clean white background"
                          src={company.logo}
                        />
                      </div>
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps tracking-wider">
                        {AlphaCase(company.category)}
                      </span>
                    </div>
                    <h3 className="font-h3 text-h3 text-primary mb-xs">{company.name}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                      {company.description}
                    </p>
                    <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                      <span className="font-label-strong text-label-strong text-secondary">
                        {company._count.jobs} Open Roles
                      </span>
                      <div
                        onClick={() => navigate(`/company/${company.id}`, { state: company })}
                        className="text-primary font-label-strong text-label-strong border cursor-pointer border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all"
                      >
                        View Profile
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination (unchanged) */}
              <div className="mt-lg flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50">
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-strong">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">3</button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
