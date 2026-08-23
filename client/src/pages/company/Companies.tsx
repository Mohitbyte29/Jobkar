import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCompany } from "@/context/CompanyContext";
import { Link, useNavigate } from "react-router-dom";
import { useCompanySearch } from "../../hooks/CompSearch";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {
  Building2,
  MapPin,
  Search,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Users,
  ExternalLink,
  SlidersHorizontal,
  ChevronRight,
  Filter,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  RotateCcw,
} from "lucide-react";
import AlphaCase from "../../../utils/AlphaCase";
import { motion } from "motion/react";

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
    id: number;
    title: string;
    tags: string[];
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
  }[];
  _count: { jobs: number };
}

export default function Companies() {
  const { companyData, total } = useCompany();
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

  const pageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const locationResultsRef = useRef<HTMLUListElement>(null);
  const [companies, setCompanies] = useState<Company[]>(companyData);

  interface Filters {
    category: string[];
  }

  const [filters, setFilters] = useState<Filters>({
    category: [],
  });
  const hasAnimatedRef = useRef(false);

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
    setCompanies(companyData);
  };

  const applyFilters = async () => {
    try {
      const params = new URLSearchParams();
      filters.category.forEach((category) => {
        params.append("category", category);
      });

      const res = await axios.get(`/api/companies/search?${params.toString()}`, {
        withCredentials: true,
      });

      setCompanies(res.data);
      navigate(`/companies/search?${params.toString()}`);
    } catch (error) {
      console.error("Filter error:", error);
    }
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !pageRef.current) return;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".company-card");
      if (!hasAnimatedRef.current) {
        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
        timeline
          .from(heroRef.current, { y: 16, opacity: 0, duration: 0.35 })
          .from(searchBarRef.current, { y: 12, opacity: 0, duration: 0.3 }, "-=0.16")
          .from(".company-sidebar", { y: 12, opacity: 0, duration: 0.3 }, "-=0.12")
          .from(
            cards,
            { y: 12, opacity: 0, duration: 0.32, stagger: 0.035, clearProps: "transform,opacity" },
            "-=0.1"
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
  }, [companyData.length]);

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
        {/* Ambient Cosmic Background Glow Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-blue-600/12 via-cyan-500/8 to-transparent rounded-full blur-[160px]" />
          <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] bg-gradient-to-tr from-teal-600/10 via-emerald-600/6 to-transparent rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl" ref={heroRef}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-[#22C55E]/25 text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Verified Global Employer Directory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F1F5F2] mb-4">
                Explore Top{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Tech Companies
                </span>
              </h1>
              <p className="text-[#9AAEA3] text-base sm:text-lg mb-8 max-w-2xl">
                Discover innovative unicorns, premier tech giants, and visionary startups hiring world-class engineers,
                designers, and leaders.
              </p>

              {/* Multi-Input Search Bar */}
              <div
                ref={searchBarRef}
                className="relative rounded-2xl bg-[#111F19]/90 border border-[#20352B] p-2 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row gap-2"
              >
                {/* Company Name Input */}
                <div className="flex items-center flex-1 px-4 py-2.5 bg-[#0D1814]/90 rounded-xl border border-[#20352B]/80 focus-within:border-emerald-500/50 transition-all">
                  <Search className="w-4 h-4 text-[#22C55E] mr-3 flex-shrink-0" />
                  <input
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-[#F1F5F2] placeholder-slate-500"
                    placeholder="Company name, keyword, or tech stack..."
                    onChange={handleChange}
                    onClick={() => setLocationResults([])}
                    type="text"
                    value={query}
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center flex-1 px-4 py-2.5 bg-[#0D1814]/90 rounded-xl border border-[#20352B]/80 focus-within:border-cyan-500/50 transition-all">
                  <MapPin className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <input
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-[#F1F5F2] placeholder-slate-500"
                    placeholder="Location (e.g. Bangalore, Remote)..."
                    onChange={handleLocationChange}
                    onClick={() => setResults([])}
                    type="text"
                    value={location}
                  />
                </div>

                {/* Search CTA Button */}
                <button
                  disabled={!canSearch}
                  className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 ${
                    canSearch
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "bg-slate-800 text-[#9AAEA3]/70 cursor-not-allowed"
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
                      navigate(
                        `/companies/search?c=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
                      );
                    } else if (query.trim()) {
                      navigate(`/companies/search?c=${encodeURIComponent(query)}`);
                    } else if (location.trim()) {
                      navigate(`/companies/search?location=${encodeURIComponent(location)}`);
                    } else {
                      toast.error("Please enter either company name or location");
                    }
                    setResults([]);
                    setLocationResults([]);
                  }}
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>

              {/* Autocomplete Dropdown - Company Results */}
              {results.length > 0 && (
                <ul
                  ref={resultsRef}
                  className="mt-2 rounded-xl bg-[#07110D]/95 border border-[#20352B] shadow-2xl backdrop-blur-xl overflow-hidden divide-y divide-slate-800/60 z-30 relative"
                >
                  {Array.from(new Set(results.map((c) => c.name))).map((name) => (
                    <li
                      key={name}
                      onClick={() => {
                        setQuery(name);
                        setSelectedCompany(name);
                        setResults([]);
                      }}
                      className="px-4 py-3 hover:bg-[#111F19] cursor-pointer transition-colors text-sm font-semibold text-slate-200 flex items-center justify-between group"
                    >
                      <span className="group-hover:text-[#22C55E] transition-colors">{name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9AAEA3]/70 group-hover:text-[#22C55E]" />
                    </li>
                  ))}
                </ul>
              )}

              {/* Autocomplete Dropdown - Location Results */}
              {locationResults.length > 0 && (
                <ul
                  ref={locationResultsRef}
                  className="mt-2 rounded-xl bg-[#07110D]/95 border border-[#20352B] shadow-2xl backdrop-blur-xl overflow-hidden divide-y divide-slate-800/60 z-30 relative"
                >
                  {Array.from(new Set(locationResults.map((c) => c.location))).map((loc) => (
                    <li
                      key={loc}
                      onClick={() => {
                        setLocation(loc);
                        setSelectedLocation(loc);
                        setLocationResults([]);
                      }}
                      className="px-4 py-3 hover:bg-[#111F19] cursor-pointer transition-colors text-sm font-semibold text-slate-200 flex items-center justify-between group"
                    >
                      <span className="group-hover:text-cyan-400 transition-colors">{loc}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9AAEA3]/70 group-hover:text-cyan-400" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Filters Sidebar (4 cols) */}
            <aside className="company-sidebar lg:col-span-4 lg:sticky lg:top-24 space-y-6 rounded-3xl bg-[#111F19]/90 border border-[#20352B] p-6 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#20352B]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#22C55E]" />
                  <h3 className="text-base font-bold text-[#F1F5F2]">Filter Companies</h3>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-xs font-semibold text-[#9AAEA3] hover:text-[#22C55E] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {/* Industry Categories */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Industry & Category
                </span>
                <div className="space-y-2 text-sm text-[#9AAEA3]">
                  {[
                    { id: "TECHNOLOGY_SOFTWARE", label: "Software Engineering & AI" },
                    { id: "CREATIVE_MEDIA", label: "Product Design & Media" },
                    { id: "MARKETING", label: "Growth & Digital Marketing" },
                    { id: "FINANCE", label: "FinTech & Banking" },
                    { id: "HEALTHCARE", label: "Healthcare & BioTech" },
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
                        className="w-4 h-4 rounded border-slate-700 bg-[#07110D] text-emerald-500 focus:ring-emerald-400 focus:ring-offset-slate-950 accent-emerald-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>

                <button
                  onClick={applyFilters}
                  className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Apply Category Filter</span>
                </button>
              </div>

              {/* Employer CTA Widget */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-blue-950/40 border border-[#22C55E]/20 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#22C55E] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Are you an Employer?</span>
                </div>
                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  List your organization and reach top engineers and talent across India.
                </p>
                <Link
                  to="/employer/companies/add"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F1F5F2] hover:text-[#34D399] transition-colors"
                >
                  <span>Register Company</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

            {/* Grid Section (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header count & sort */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#111F19]/80 border border-[#20352B] backdrop-blur-xl">
                <p className="text-xs sm:text-sm text-[#9AAEA3]">
                  Showing <strong className="text-[#22C55E] font-bold">{companyData.length}</strong>
                  <span>{companyData.length === 1 ? " organization" : " verified organizations"}</span>
                </p>

                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#9AAEA3]" />
                  <span className="text-xs font-semibold text-[#9AAEA3]">Sort:</span>
                  <select className="bg-[#0D1814] border border-[#20352B] rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-200 focus:outline-none focus:border-emerald-500/50 cursor-pointer">
                    <option>Most Active Openings</option>
                    <option>Alphabetical (A - Z)</option>
                    <option>Recently Added</option>
                  </select>
                </div>
              </div>

              {/* Companies Grid */}
              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {companyData.map((company: Company) => (
                  <div
                    key={company.id}
                    className="company-card group relative rounded-2xl bg-[#111F19]/90 border border-[#20352B] hover:border-[#22C55E]/40 p-6 backdrop-blur-xl flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1"
                  >
                    {/* Gradient top accent line */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Logo & Category Badge */}
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

                    {/* Company Name & Location */}
                    <h3 className="text-xl font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors mb-1">
                      {company.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#9AAEA3] mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#9AAEA3]/70" />
                      <span>{company.location || "India"}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#9AAEA3] line-clamp-2 leading-relaxed mb-6">
                      {company.description ||
                        "Leading tech organization delivering high-scale digital solutions and engineering innovation."}
                    </p>

                    {/* Bottom Actions */}
                    <div className="mt-auto pt-4 border-t border-[#20352B] flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#111F19] text-[#22C55E] border border-[#20352B] flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {company._count?.jobs || 0} Open Roles
                      </span>

                      <button
                        onClick={() => navigate(`/company/${company.id}`, { state: company })}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0D1814] hover:bg-emerald-500 hover:text-slate-950 text-slate-200 border border-[#20352B] hover:border-emerald-500 text-xs font-bold transition-all active:scale-95 shadow-sm"
                      >
                        <span>View Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
