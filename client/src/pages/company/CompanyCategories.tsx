import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useCompanySearch } from '../../hooks/CompSearch';
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

interface Company {
  name: string;
    logo: string;
    category: string;
    description: string;
    website: string;
    location: string;
    createdAt: string;
    updatedAt: string;
    companyStatus: string;
    jobs: { title: string};
}

export default function CompanyCategories() {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchParams] = useSearchParams();
  
  const searchName = searchParams.get("c") || "";
  const searchLocation = searchParams.get("location") || "";
  const searchCategory = searchParams.get("category") || "";

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        if (searchName) params.set("c", searchName);
        if (searchLocation) params.set("location", searchLocation);
        if (searchCategory) params.set("category", searchCategory);

        const response = await axios.get(`/api/companies/search?${params.toString()}`);
        setCompanies(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Failed to fetch companies:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCompanies();
  }, [searchName, searchLocation, searchCategory]);
  
  const filteredCompanies = companies.filter((company: Company) => {
    return (
      company.name?.toLowerCase().includes(searchName?.toLowerCase() || "") &&
      company.location?.toLowerCase().includes(searchLocation?.toLowerCase() || "") &&
      company.category?.toLowerCase().includes(searchCategory?.toLowerCase() || "") &&
      company.companyStatus === "ACTIVE"
    )
  });
  console.log(filteredCompanies.map((company: Company) => company.name));
  const companyCount = filteredCompanies.length;
  const {handleChange, handleLocationChange, handleCategoryChange, query, setQuery, results, setResults, location, setLocation, setLocationResults, locationResults, category, setCategory, setCategoryResults, selectedCompany, setSelectedCompany, selectedLocation, setSelectedLocation, canSearch} = useCompanySearch();
  const navigate = useNavigate();
  
  return (
    <>
    <Toaster/>
      <Navbar />
      <main className="pt-16">
        <section className="bg-white border-b border-slate-200 pt-xl pb-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="font-bold text-[48px] text-primary mb-md">
                Explore Top Companies
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                Discover your next career move by browsing the world's most
                innovative organizations and their current openings.
              </p>
              {/* Multi-Input Search Bar */}
              <div className="bg-white border border-outline-variant p-2 rounded-xl flex flex-col md:flex-row gap-2 shadow-lg items-center">
                <div className="flex items-center flex-1 px-4 border-b md:border-b-0 md:border-r border-slate-100 py-2 w-full">
                  <span
                    className="material-symbols-outlined text-outline mr-2"
                    data-icon="search"
                  >
                    search
                  </span>
                  <input
                    className="w-full border-none focus:ring-0 text-body-md font-body-md placeholder:text-outline bg-transparent"
                    placeholder="Company name or industry" onChange={handleChange} onClick={() => setLocationResults([])}
                    type="text" value={query} 
                  />
                </div>
                <div className="flex items-center flex-1 px-4 py-2 w-full">
                  <span
                    className="material-symbols-outlined text-outline mr-2"
                    data-icon="location_on"
                  >
                    location_on
                  </span>
                  <input
                    className="w-full border-none focus:ring-0 text-body-md font-body-md placeholder:text-outline bg-transparent"
                    placeholder="Location" onChange={handleLocationChange} onClick={() => setResults([])}
                    type="text" value={location}
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
                      window.location.href = `/companies/search?c=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else if (query.trim()) {
                      window.location.href = `/companies/search?c=${encodeURIComponent(query)}`;
                      setResults([]);
                      setLocationResults([]);
                    } else if (location.trim()) {
                      window.location.href = `/companies/search?location=${encodeURIComponent(location)}`;
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
        <ul className="dropdown" style={{ color: "white", cursor: "pointer" }}>
          {Array.from(new Set(results.map((company: Company) => company.name))).map((name: string) => (
            <li key={name} onClick={() => {
              setQuery(name)
              setSelectedCompany(name);
              setResults([]);
            }}>
              <div className="dropdown-item bg-white text-gray-900 px-4 py-2 border-2 hover:bg-gray-100 rounded">
              <strong>{name}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
        {locationResults.length > 0 && (
        <ul className="locationdropdown" style={{ color: "white", cursor: "pointer" }}>
          {Array.from(new Set(locationResults.map((company: Company) => company.location))).map((location: string) => (
            <li key={location} onClick={() => {
              setLocation(location)
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
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-xl">
          <div className="flex flex-col lg:flex-row gap-gutter">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-lg">
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Industry
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      defaultChecked={true}
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Tech &amp; Software
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Finance
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Healthcare
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Design
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Job Role
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Engineering
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Design
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Marketing
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Sales
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Job Type
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Full-time
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Part-time
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Internship
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Contract
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Company Size
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      1-50 employees
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      51-200 employees
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      defaultChecked={true}
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      201-1000 employees
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      1000+ employees
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Salary Range
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $50k - $80k
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $80k - $120k
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $120k - $160k
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $160k+
                    </span>
                  </label>
                </div>
              </div>
              <div className="pt-sm border-t border-slate-200">
                <button className="text-secondary font-label-strong text-label-strong hover:underline flex items-center">
                  Clear all filters
                </button>
              </div>
            </aside>
            {/* Grid Section */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-md">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Showing <strong>{companyCount}</strong> companies
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Stripe Card */}
                    {filteredCompanies.map((company : Company) => (
                      <div key={company.name} className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
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
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Fintech
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">{company.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    Financial infrastructure for the internet. Millions of
                    businesses of all sizes use Stripe's software and APIs.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      42 Open Roles
                    </span>
                    <div onClick={() => navigate(`/company/${company.name}`, { state : company })} className="text-primary font-label-strong text-label-strong border cursor-pointer border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </div>
                  </div>
                </div>
                    ))}
                {/* Vercel Card */}
               
              </div>
              {/* Pagination */}
              <div className="mt-lg flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-strong">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">
                  12
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
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
