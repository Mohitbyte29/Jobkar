import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useCompanySearch } from "../../hooks/CompSearch";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import gsap from "gsap";
import AlphaCase from "../../../utils/AlphaCase";
import {
  Building2,
  MapPin,
  Search,
  Sparkles,
  ShieldCheck,
  Briefcase,
  SlidersHorizontal,
  Filter,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  RotateCcw,
  Compass,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
  jobs: {
    title: string;
    tags: string[];
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
  }[];
  _count: { jobs: number };
}

export default function CompanyCategories() {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const pageRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);
  const [searchParams] = useSearchParams();

  const searchName = searchParams.get("c") || "";
  const searchLocation = searchParams.get("location") || "";
  const searchCategory = searchParams.getAll("category") || [];

  interface Filters {
    category: string[];
  }

  const [filters, setFilters] = useState<Filters>({
    category: searchCategory,
  });

  const {
    handleChange,
    handleLocationChange,
    query,
    setQuery,
    results,
    setResults,
    location,
    setLocation,
    setLocationResults,
    locationResults,
    selectedCompany,
    setSelectedCompany,
    selectedLocation,
    setSelectedLocation,
    canSearch,
  } = useCompanySearch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        if (searchName) params.set("c", searchName);
        if (searchLocation) params.set("location", searchLocation);
        if (searchCategory.length > 0) {
          searchCategory.forEach((category) => {
            params.append("category", category);
          });
        }

        const response = await axios.get(`/api/companies/search?${params.toString()}`);
        setCompanies(response.data);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [searchName, searchLocation, JSON.stringify(searchCategory)]);

  type filterName = keyof Filters;
  const handleFilterChange = (name: filterName, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const clearFilters = () => {
    setFilters({ category: [] });
    navigate("/companies");
  };

  const applyFilters = async () => {
    try {
      const params = new URLSearchParams();
      if (searchName) params.set("c", searchName);
      if (searchLocation) params.set("location", searchLocation);

      filters.category.forEach((category) => {
        params.append("category", category);
      });

      const res = await axios.get(`/api/companies/search?${params.toString()}`, {
        withCredentials: true,
      });

      setCompanies(res.data);
      navigate(`/companies/search?${params.toString()}`);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCompanies = companies.filter((company: Company) => {
    return (
      company.name?.toLowerCase().includes(searchName?.toLowerCase() || "") &&
      company.location?.toLowerCase().includes(searchLocation?.toLowerCase() || "") &&
      (searchCategory.length === 0 || searchCategory.some((cat) => company.category?.includes(cat))) &&
      company.companyStatus === "ACTIVE"
    );
  });

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#041416",
            color: "#f1f5f9",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            backdropFilter: "blur(12px)",
          },
        }}
      />
      <Navbar />

      <main
        className="relative min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans pt-20"
        ref={pageRef}
      >
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-blue-600/12 via-cyan-500/8 to-transparent rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        {/* Hero Banner */}
        <section className="relative z-10 pt-10 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9AAEA3] mb-4">
                <Link to="/" className="hover:text-[#22C55E] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
                <Link to="/companies" className="hover:text-[#22C55E] transition-colors">
                  Companies
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
                <span className="text-[#22C55E]">Search Results</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F1F5F2] mb-3">
                Company Search:{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {searchName || searchLocation || "Filtered Directory"}
                </span>
              </h1>
              <p className="text-[#9AAEA3] text-sm sm:text-base mb-6">
                Discover matching tech organizations, engineering hubs, and startup teams.
              </p>

              {/* Integrated Search Bar */}
              <div className="relative rounded-2xl bg-[#111F19]/90 border border-[#20352B] p-2 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row gap-2">
                <div className="flex items-center flex-1 px-4 py-2 bg-[#0D1814]/90 rounded-xl border border-[#20352B]/80">
                  <Search className="w-4 h-4 text-[#22C55E] mr-3 flex-shrink-0" />
                  <input
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-[#F1F5F2] placeholder-slate-500"
                    placeholder="Search company name..."
                    onChange={handleChange}
                    type="text"
                    value={query}
                  />
                </div>
                <div className="flex items-center flex-1 px-4 py-2 bg-[#0D1814]/90 rounded-xl border border-[#20352B]/80">
                  <MapPin className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <input
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-[#F1F5F2] placeholder-slate-500"
                    placeholder="Filter by city/location..."
                    onChange={handleLocationChange}
                    type="text"
                    value={location}
                  />
                </div>
                <button
                  disabled={!canSearch}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                  onClick={() => {
                    const params = new URLSearchParams();
                    if (query.trim()) params.set("c", query);
                    if (location.trim()) params.set("location", location);
                    navigate(`/companies/search?${params.toString()}`);
                  }}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Update Search</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Filters Sidebar (4 cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 rounded-3xl bg-[#111F19]/90 border border-[#20352B] p-6 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#20352B]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#22C55E]" />
                  <h3 className="text-base font-bold text-[#F1F5F2]">Categories</h3>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-xs font-semibold text-[#9AAEA3] hover:text-[#22C55E] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              <div className="space-y-2 text-sm text-[#9AAEA3]">
                {[
                  { id: "TECHNOLOGY_SOFTWARE", label: "Software & Technology" },
                  { id: "CREATIVE_MEDIA", label: "Design & UX" },
                  { id: "MARKETING", label: "Marketing" },
                  { id: "FINANCE", label: "Finance & FinTech" },
                  { id: "HEALTHCARE", label: "Healthcare" },
                  { id: "BUSINESS_OPERATIONS", label: "Business Operations" },
                  { id: "OTHER", label: "Other Sectors" },
                ].map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 hover:border-emerald-500/30 hover:bg-[#162820] cursor-pointer transition-all select-none"
                  >
                    <span className="text-xs font-medium text-slate-200">{cat.label}</span>
                    <input
                      type="checkbox"
                      checked={filters.category.includes(cat.id)}
                      onChange={() => handleFilterChange("category", cat.id)}
                      className="w-4 h-4 rounded border-slate-700 bg-[#07110D] text-emerald-500 focus:ring-emerald-400 accent-emerald-500 cursor-pointer"
                    />
                  </label>
                ))}
              </div>

              <button
                onClick={applyFilters}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Apply Filter</span>
              </button>
            </aside>

            {/* Grid Section (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#111F19]/80 border border-[#20352B] backdrop-blur-xl">
                <p className="text-xs sm:text-sm text-[#9AAEA3]">
                  Found <strong className="text-[#22C55E] font-bold">{filteredCompanies.length}</strong> companies matching your query
                </p>
                <Link
                  to="/companies"
                  className="text-xs font-bold text-[#22C55E] hover:text-[#34D399] transition-colors"
                >
                  View All Companies →
                </Link>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-[#0D1814]/70 border border-[#20352B]/80 animate-pulse space-y-3"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-800" />
                      <div className="h-5 bg-slate-800 rounded w-1/2" />
                      <div className="h-4 bg-slate-800/60 rounded w-3/4" />
                    </div>
                  ))}
                </div>
              ) : filteredCompanies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filteredCompanies.map((company: Company) => (
                    <div
                      key={company.id}
                      className="group relative rounded-2xl bg-[#111F19]/90 border border-[#20352B] hover:border-[#22C55E]/40 p-6 backdrop-blur-xl flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1"
                    >
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-[#0D1814] border border-[#20352B] p-2 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-[#22C55E]/40 transition-colors shadow-md">
                          {company.logo ? (
                            <img
                              alt={company.name}
                              className="w-full h-full object-contain"
                              src={company.logo}
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <Building2 className="w-6 h-6 text-[#22C55E]" />
                          )}
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20">
                          {AlphaCase(company.category || "Technology")}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors mb-1">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#9AAEA3] mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#9AAEA3]/70" />
                        <span>{company.location || "India"}</span>
                      </div>

                      <p className="text-xs text-[#9AAEA3] line-clamp-2 leading-relaxed mb-6">
                        {company.description ||
                          "Leading tech organization delivering high-scale digital solutions and engineering innovation."}
                      </p>

                      <div className="mt-auto pt-4 border-t border-[#20352B] flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#111F19] text-[#22C55E] border border-[#20352B] flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {company._count?.jobs || 0} Open Roles
                        </span>

                        <button
                          onClick={() => navigate(`/company/${company.id}`, { state: company })}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0D1814] hover:bg-emerald-500 hover:text-slate-950 text-slate-200 border border-[#20352B] hover:border-emerald-500 text-xs font-bold transition-all active:scale-95 shadow-sm cursor-pointer"
                        >
                          <span>View Profile</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl bg-[#111F19]/80 border border-[#20352B] p-12 text-center backdrop-blur-xl shadow-2xl">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-950/40 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F1F5F2] mb-2">No organizations match your query</h3>
                  <p className="text-[#9AAEA3] text-sm max-w-3xl mx-auto mb-6">
                    Try adjusting your search terms or clearing industry filters to discover more tech companies.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-md cursor-pointer"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Browse All Companies</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
