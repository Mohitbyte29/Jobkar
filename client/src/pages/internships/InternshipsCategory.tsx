import axios from "axios";
import {
  IndianRupee,
  MapPin,
  Clock,
  GraduationCap,
  Search,
  Bookmark,
  ShieldCheck,
  Building2,
  Zap,
  Flame,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
  SlidersHorizontal,
  ArrowUpRight,
  BookmarkCheck,
  RotateCcw,
  Calendar,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import timeAgo from "../../../utils/timeAgo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { useInternshipsearch } from "@/hooks/InternshipSearch";
import gsap from "gsap";
import SplitText from "@/components/SplitText";
import toTitleCase from "../../../utils/titleCase";
import { useInternships } from "@/context/InternshipsContext";

interface SavedInternship {
  id: number;
  internshipId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface Internship {
  id: number;
  title: string;
  companies: {
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
  duration?: number;
  mode?: string;
}

export function InternshipsCategory() {
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
    selectedInternship,
    selectedLocation,
    setLocationResults,
  } = useInternshipsearch();

  const [searchParams] = useSearchParams();
  const { internshipData } = useInternships();
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [savedInternships, setSavedInternships] = useState<SavedInternship[]>([]);
  const [sortBy, setSortBy] = useState<string>("recent");
  const navigate = useNavigate();
  const pageRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  interface Filters {
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
  });

  const searchTitle = searchParams.get("q") || searchParams.get("c") || "";
  const searchLocation = searchParams.get("location") || "";
  const searchCategory = searchParams.get("category") || "";

  useEffect(() => {
    const fetchInternships = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/internships", {
          withCredentials: true,
        });
        if (res.data?.internships) {
          setInternships(res.data.internships);
        } else if (Array.isArray(res.data)) {
          setInternships(res.data);
        } else if (internshipData?.length) {
          setInternships(internshipData);
        }
      } catch (err) {
        console.error("Failed to load internships:", err);
        if (internshipData?.length) {
          setInternships(internshipData);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, [internshipData]);

  type filterName = keyof Filters;

  const handleFilterChange = (name: filterName, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const applyFilters = async () => {
    try {
      const params = new URLSearchParams();

      filters.type.forEach((type) => {
        params.append("type", type);
      });

      filters.category.forEach((category) => {
        params.append("category", category);
      });

      filters.salaryRange.forEach((range) => {
        params.append("salaryRange", range);
      });

      filters.mode.forEach((mode) => {
        params.append("mode", mode);
      });

      const res = await axios.get(`/api/internships/search?${params.toString()}`, {
        withCredentials: true,
      });

      if (res.data) {
        setInternships(Array.isArray(res.data) ? res.data : res.data.internships || []);
      }
      navigate(`/internships/search?${params.toString()}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetSavedInternships = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/internships/saved`, {
        withCredentials: true,
      });
      if (Array.isArray(res.data)) {
        setSavedInternships(res.data);
      }
    } catch (error) {
      // Graceful fallback
    }
  };

  const handleSaveInternship = async (internshipId: number) => {
    try {
      await axios.post(
        `http://localhost:4000/api/internships/${internshipId}/save`,
        {},
        { withCredentials: true }
      );
      toast.success("Internship saved to your wishlist!", { icon: "✨" });
      handleGetSavedInternships();
    } catch (error) {
      toast.error("Failed to save internship");
    }
  };

  const isSaved = (internshipId: number) => {
    return savedInternships.some((saved) => saved.internshipId === internshipId);
  };

  const handleUnsaveInternship = async (internshipId: number) => {
    try {
      await axios.delete(`http://localhost:4000/api/internships/${internshipId}/save`, {
        withCredentials: true,
      });
      toast.success("Internship removed from saved list");
      handleGetSavedInternships();
    } catch (error) {
      toast.error("Failed to remove internship");
    }
  };

  const sourceList = internships.length > 0 ? internships : internshipData;

  const filteredInternships = sourceList.filter((item: Internship) => {
    const matchesTitle =
      !searchTitle || item.title?.toLowerCase().includes(searchTitle.toLowerCase());
    const matchesLocation =
      !searchLocation || item.location?.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesCategory =
      !searchCategory || item.category?.toLowerCase().includes(searchCategory.toLowerCase());

    const matchesType =
      filters.type.length === 0 || filters.type.includes(item.type);
    const matchesCatFilter =
      filters.category.length === 0 || filters.category.includes(item.category);

    return matchesTitle && matchesLocation && matchesCategory && matchesType && matchesCatFilter;
  });

  const getSortedFilteredInternships = () => {
    const list = [...filteredInternships];
    if (sortBy === "salary") {
      return list.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
    }
    return list.sort(
      (a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime()
    );
  };

  const count = filteredInternships.length;

  useEffect(() => {
    handleGetSavedInternships();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
            "-=0.12"
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
  }, [count]);

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans relative overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111F19",
            color: "#F1F5F2",
            border: "1px solid #20352B",
          },
        }}
      />
      <Navbar />

      {/* Atmospheric deep green lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-[#22C55E]/10 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-[#34D399]/8 blur-[150px]" />
        <div className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full bg-[#22C55E]/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#20352B15_1px,transparent_1px),linear-gradient(to_bottom,#20352B15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />
      </div>

      <main
        ref={pageRef}
        className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        {/* Header Section */}
        <section className="mb-10">
          <div className="space-y-4 max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111F19] border border-[#20352B] text-[#22C55E] text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>SEARCH RESULTS & FILTERED INTERNSHIPS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              <span className="text-[#34D399] font-bold">{count} Matches</span>
            </div>

            <h1 className="internships-hero text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F5F2] leading-tight">
              <SplitText
                className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#F1F5F2] inline-block"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                text="Explore Filtered Internships"
              />
            </h1>
            <p className="text-[#9AAEA3] text-sm sm:text-base leading-relaxed">
              Discover verified student and early-career internship opportunities with top tech companies.
            </p>
          </div>

          {/* Search Box */}
          <div className="internships-search p-2 sm:p-2.5 rounded-2xl bg-[#111F19] border border-[#20352B] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-2 relative">
            <div className="flex items-center px-3.5 py-2 flex-1 w-full bg-[#0D1814] rounded-xl border border-[#20352B] focus-within:border-[#22C55E] transition-colors">
              <Search className="w-4 h-4 text-[#22C55E] mr-3 shrink-0" />
              <input
                className="w-full bg-transparent border-none outline-none text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 font-medium"
                placeholder="Internship title, keywords, tech stack..."
                value={query}
                onChange={handleChange}
                onClick={() => setLocationResults([])}
                type="text"
              />
            </div>

            <div className="flex items-center px-3.5 py-2 flex-1 w-full bg-[#0D1814] rounded-xl border border-[#20352B] focus-within:border-[#22C55E] transition-colors">
              <MapPin className="w-4 h-4 text-[#22C55E] mr-3 shrink-0" />
              <input
                className="w-full bg-transparent border-none outline-none text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 font-medium"
                placeholder="City, state, or remote"
                value={location}
                onChange={handleLocationChange}
                onClick={() => setResults([])}
                type="text"
              />
            </div>

            <button
              className={`w-full md:w-auto px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                query.trim() || location.trim()
                  ? "bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] shadow-[0_0_20px_rgba(34,197,94,0.35)] cursor-pointer active:scale-95"
                  : "bg-[#162820] text-[#9AAEA3]/60 border border-[#20352B] cursor-not-allowed opacity-60"
              }`}
              onClick={() => {
                if (!selectedInternship && query.trim()) {
                  toast.error("Please enter an internship title");
                  return;
                }

                if (!selectedLocation && location.trim()) {
                  toast.error("Please enter a valid location");
                  return;
                }
                if (query.trim() && location.trim()) {
                  navigate(
                    `/internships/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
                  );
                  setResults([]);
                  setLocationResults([]);
                } else if (query.trim()) {
                  navigate(`/internships/search?q=${encodeURIComponent(query)}`);
                  setResults([]);
                  setLocationResults([]);
                } else if (location.trim()) {
                  navigate(`/internships/search?location=${encodeURIComponent(location)}`);
                  setResults([]);
                  setLocationResults([]);
                } else {
                  toast.error("Please enter either internship title or location");
                }
              }}
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Autocomplete Dropdowns */}
          {results.length > 0 && (
            <div className="absolute z-30 mt-2 w-full max-w-xl bg-[#0D1814] border border-[#20352B] rounded-xl shadow-2xl p-2 space-y-1">
              {Array.from(new Set(results.map((item: any) => item.title))).map((title: string) => (
                <div
                  key={title}
                  onClick={() => {
                    setQuery(title);
                    setResults([]);
                  }}
                  className="px-4 py-2.5 rounded-lg hover:bg-[#22C55E]/15 text-[#F1F5F2] hover:text-[#34D399] text-sm font-semibold cursor-pointer transition-colors"
                >
                  {title}
                </div>
              ))}
            </div>
          )}

          {locationResults.length > 0 && (
            <div className="absolute z-30 mt-2 w-full max-w-xl bg-[#0D1814] border border-[#20352B] rounded-xl shadow-2xl p-2 space-y-1">
              {Array.from(new Set(locationResults.map((item: any) => item.location))).map(
                (loc: string) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setLocation(loc);
                      setLocationResults([]);
                    }}
                    className="px-4 py-2.5 rounded-lg hover:bg-[#22C55E]/15 text-[#F1F5F2] hover:text-[#34D399] text-sm font-semibold cursor-pointer transition-colors"
                  >
                    {loc}
                  </div>
                )
              )}
            </div>
          )}
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SIDEBAR FILTERS */}
          <aside className="internships-sidebar lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-[#111F19] border border-[#20352B] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-6">
              <div className="flex items-center justify-between border-b border-[#20352B] pb-3.5">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#22C55E] flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Filters & Criteria</span>
                </h3>
                <button
                  onClick={() =>
                    setFilters({
                      type: [],
                      category: [],
                      salaryRange: [],
                      mode: [],
                    })
                  }
                  className="text-xs font-semibold text-[#9AAEA3] hover:text-[#34D399] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Internship Type */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Internship Type
                </span>
                <div className="space-y-2">
                  {[
                    { id: "FULL_TIME", label: "Full-time Internship" },
                    { id: "PART_TIME", label: "Part-time Internship" },
                    { id: "REMOTE", label: "Virtual / Remote" },
                    { id: "SUMMER", label: "Summer Internship" },
                  ].map((item) => (
                    <label key={item.id} className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(item.id)}
                        onChange={() => handleFilterChange("type", item.id)}
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#0D1814] border border-[#20352B] peer-checked:bg-[#22C55E] peer-checked:border-[#22C55E] flex items-center justify-center transition-all">
                        {filters.type.includes(item.id) && (
                          <CheckCircle2 className="w-3 h-3 text-[#07110D] stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3]">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Work Mode */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Work Mode
                </span>
                <div className="space-y-2">
                  {[
                    { id: "ONSITE", label: "On-site Office" },
                    { id: "HYBRID", label: "Hybrid" },
                    { id: "REMOTE", label: "100% Remote" },
                  ].map((mode) => (
                    <label key={mode.id} className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={filters.mode.includes(mode.id)}
                        onChange={() => handleFilterChange("mode", mode.id)}
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#0D1814] border border-[#20352B] peer-checked:bg-[#22C55E] peer-checked:border-[#22C55E] flex items-center justify-center transition-all">
                        {filters.mode.includes(mode.id) && (
                          <CheckCircle2 className="w-3 h-3 text-[#07110D] stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3]">{mode.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discipline / Category */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Category
                </span>
                <div className="space-y-2">
                  {[
                    { id: "TECHNOLOGY_SOFTWARE", label: "Software Engineering" },
                    { id: "CREATIVE_MEDIA", label: "Design & UI/UX" },
                    { id: "MARKETING", label: "Growth & Marketing" },
                    { id: "HEALTHCARE", label: "Health & BioTech" },
                    { id: "BUSINESS_OPERATIONS", label: "Business Operations" },
                    { id: "FINANCE", label: "Finance & FinTech" },
                    { id: "OTHER", label: "Other Disciplines" },
                  ].map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(cat.id)}
                        onChange={() => handleFilterChange("category", cat.id)}
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#0D1814] border border-[#20352B] peer-checked:bg-[#22C55E] peer-checked:border-[#22C55E] flex items-center justify-center transition-all">
                        {filters.category.includes(cat.id) && (
                          <CheckCircle2 className="w-3 h-3 text-[#07110D] stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3]">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={applyFilters}
                className="w-full py-3 rounded-xl bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs tracking-wide shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all active:scale-95 cursor-pointer"
              >
                Apply Changes
              </button>
            </div>
          </aside>

          {/* MAIN INTERNSHIPS FEED */}
          <section className="lg:col-span-9 space-y-5">
            {/* Toolbar */}
            <div className="internships-toolbar flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#111F19] border border-[#20352B]">
              <span className="text-xs font-semibold text-[#9AAEA3]">
                Showing <strong className="text-[#34D399] font-extrabold">{count}</strong>{" "}
                <span>{count === 1 ? "internship" : "internships"} found</span>
              </span>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-[#9AAEA3] font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#0D1814] border border-[#20352B] text-[#34D399] text-xs font-bold px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#22C55E] cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="salary">Highest Stipend</option>
                </select>
              </div>
            </div>

            {/* Internship Cards */}
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="animate-pulse rounded-3xl bg-[#111F19] border border-[#20352B] p-6 sm:p-7 space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#0D1814]" />
                      <div className="space-y-2 flex-1">
                        <div className="h-5 bg-[#0D1814] rounded-md w-1/2" />
                        <div className="h-4 bg-[#0D1814] rounded-md w-1/3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredInternships.length > 0 ? (
              <div className="space-y-4">
                {getSortedFilteredInternships().map((internship: Internship, idx: number) => (
                  <article
                    key={internship.id}
                    className="internship-card relative group rounded-3xl bg-[#111F19] border border-[#20352B] hover:border-[#22C55E]/50 p-6 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(34,197,94,0.15)] transition-all duration-300"
                  >
                    <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#22C55E]/0 group-hover:via-[#22C55E]/60 to-transparent transition-all duration-300" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                      {/* Left details */}
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-14 h-14 rounded-2xl bg-[#162820] border border-[#20352B] flex items-center justify-center text-[#22C55E] font-extrabold text-xl shrink-0 group-hover:border-[#22C55E]/50 transition-colors">
                          <GraduationCap className="w-7 h-7" />
                        </div>

                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {idx % 2 === 0 ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[11px] font-extrabold">
                                <Flame className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                                <span>HOT INTERNSHIP</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#34D399] text-[11px] font-extrabold">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-ping" />
                                <span>NEW</span>
                              </span>
                            )}

                            <span className="px-2.5 py-0.5 rounded-full bg-[#0D1814] border border-[#20352B] text-[#9AAEA3] text-[11px] font-semibold">
                              {toTitleCase(internship.type || "Internship")}
                            </span>

                            <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#34D399] text-[11px] font-semibold">
                              {toTitleCase(internship.category || "Technology")}
                            </span>
                          </div>

                          <h3
                            onClick={() =>
                              navigate(`/internships/search/${internship.id}`, {
                                state: internship,
                              })
                            }
                            className="text-lg sm:text-xl font-bold tracking-tight text-[#F1F5F2] group-hover:text-[#34D399] transition-colors cursor-pointer"
                          >
                            {internship.title}
                          </h3>

                          <div className="flex items-center gap-2 text-sm font-semibold text-[#22C55E]">
                            <Building2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                            <span>{internship.companies?.name || "Vetted Tech Partner"}</span>
                            <span className="text-[#9AAEA3]">•</span>
                            <span className="text-[#9AAEA3] text-xs font-normal flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>Verified Employer</span>
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D1814] border border-[#20352B] text-[#9AAEA3] text-xs font-medium">
                              <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>{internship.location}</span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#34D399] text-xs font-bold">
                              <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>
                                {internship.salaryMin / 1000}k - {internship.salaryMax / 1000}k / mo
                              </span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D1814] border border-[#20352B] text-[#9AAEA3] text-xs font-medium">
                              <Clock className="w-3.5 h-3.5 text-[#9AAEA3]" />
                              <span>{timeAgo(internship.updatedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right actions */}
                      <div className="flex md:flex-col items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#20352B] w-full md:w-auto justify-end">
                        <button
                          onClick={() => {
                            navigate(`/internships/search/${internship.id}`, {
                              state: internship,
                            });
                          }}
                          className="flex-1 md:flex-none h-11 px-6 rounded-xl bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-sm tracking-wide shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </button>

                        {isSaved(internship.id) ? (
                          <button
                            onClick={() => void handleUnsaveInternship(internship.id)}
                            aria-label="Remove saved internship"
                            className="h-11 px-3.5 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#34D399] hover:bg-[#EF4444]/15 hover:border-[#EF4444]/30 hover:text-[#EF4444] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
                          >
                            <BookmarkCheck className="w-4 h-4 text-[#22C55E]" />
                            <span className="md:hidden">Saved</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => void handleSaveInternship(internship.id)}
                            aria-label="Save internship"
                            className="h-11 px-3.5 rounded-xl bg-[#0D1814] hover:bg-[#22C55E]/15 border border-[#20352B] hover:border-[#22C55E]/30 text-[#9AAEA3] hover:text-[#34D399] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
                          >
                            <Bookmark className="w-4 h-4" />
                            <span className="md:hidden">Save</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-[#111F19] border border-[#20352B] p-12 text-center shadow-xl space-y-4">
                <GraduationCap className="w-10 h-10 text-[#22C55E] mx-auto" />
                <h3 className="text-xl font-bold text-[#F1F5F2]">No matching internships found</h3>
                <p className="text-[#9AAEA3] text-sm">
                  We couldn’t find any internships matching "{searchTitle || searchLocation}". Try adjusting your search or filters.
                </p>
                <button
                  onClick={() => navigate("/internships")}
                  className="px-6 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-bold text-xs cursor-pointer shadow-md"
                >
                  Browse All Internships
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default InternshipsCategory;