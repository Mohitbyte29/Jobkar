import {
  IndianRupee,
  MapPin,
  Clock,
  Briefcase,
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
} from "lucide-react";
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
import Footer from "@/components/Footer.tsx";
import SplitText from "@/components/SplitText.tsx";

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
  const { jobData, total, loading } = useJobs();
  const [sortBy, setSortBy] = useState<string>("recent");
  const [saveJob, setsaveJob] = useState<SavedJob[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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

  const handleFilterChange = (name: filterName, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  useEffect(() => {
    axios
      .get("/api/me")
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleApply = async (job: Job) => {
    try {
      if (!isLoggedIn) {
        navigate(
          `/register?redirect=${encodeURIComponent(window.location.pathname)}`,
        );
        return;
      }
      navigate(`/jobs/search/${job.id}`, {
        state: job,
      });
    } catch (error) {
      console.error("Error navigating to job details:", error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response data:", error.response.data);
      }
    }
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
      if(!isLoggedIn) {
        navigate('/register?redirect=' + encodeURIComponent(window.location.pathname));
        return;
      }
      await axios.post(
        `http://localhost:4000/api/jobs/${jobId}/save`,
        {},
        { withCredentials: true },
      );
      toast.success("Job saved to your wishlist!", { icon: "✨" });
      handlegetSavedJobs();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          // use current page instead of the backend's API-route redirect (see note below)
          navigate(
            `/register?redirect=${encodeURIComponent(window.location.pathname)}`,
          );
          return;
        }
        console.error("Error response data:", error.response.data);
      }
      console.error("Error saving job:", error);
      toast.error("Failed to save job");
    }
  };

  const handleUnsaveJob = async (jobId: number) => {
    try {
      await axios.delete(`http://localhost:4000/api/jobs/${jobId}/save`, {
        withCredentials: true,
      });
      toast.success("Job removed from saved list");
      handlegetSavedJobs();
    } catch (error) {
      console.error("Error Removing job:", error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response data:", error.response.data);
      }
      toast.error("Failed to remove job");
    }
  };

  useEffect(() => {
    handlegetSavedJobs();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-[#030814] via-[#041416] to-[#030c10] text-[#F1F5F2] flex flex-col selection:bg-emerald-500 selection:text-neutral-950 font-sans relative overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0a1628",
            color: "#f8fafc",
            border: "1px solid rgba(34,197,94,0.2)",
          },
        }}
      />
      <Navbar />

      {/* Atmospheric mixed dark-green & deep blue radial glow lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Deep Green Orbs */}
        <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-600/12 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-[#22C55E]/12 blur-[150px]" />

        {/* Deep Blue & Cyan Orbs */}
        <div className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full bg-[#22C55E]/12 blur-[160px]" />
        <div className="absolute bottom-1/3 -left-32 h-[460px] w-[460px] rounded-full bg-[#22C55E]/10 blur-[150px]" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#10b98106_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_25%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <main
        ref={pageRef}
        className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        {/* Hero & Search Header */}
        <section className="mb-10">
          <div className="space-y-4 max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-950/70 to-blue-950/70 border border-[#22C55E]/30 text-[#34D399] text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>CURATED OPPORTUNITIES & CAREERS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[#34D399] font-bold">
                {total || jobData.length} Open Roles
              </span>
            </div>

            <h1 className="jobs-hero text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F5F2] leading-tight">
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
                text="Find Work That Moves You Forward"
              />
            </h1>
            <p className="text-[#9AAEA3] text-sm sm:text-base leading-relaxed">
              Explore vetted roles at leading technology companies,
              venture-backed startups, and remote teams.
            </p>
          </div>

          {/* Integrated Search Bar */}
          <div className="jobs-search p-2 sm:p-2.5 rounded-2xl bg-[#111F19]/85 border border-[#22C55E]/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-2 relative">
            <div className="flex items-center px-3.5 py-2 flex-1 w-full bg-[#111F19]/[0.03] rounded-xl border border-white/5 focus-within:border-[#22C55E]/70/40 transition-colors">
              <Search className="w-4 h-4 text-[#22C55E] mr-3 shrink-0" />
              <input
                className="w-full bg-transparent border-none outline-none text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/70 font-medium"
                placeholder="Job title, keywords, or tech stack (e.g. React, Node.js)..."
                type="text"
                value={query}
                onChange={handleChange}
                onClick={() => setLocationResults([])}
              />
            </div>

            <div className="flex items-center px-3.5 py-2 flex-1 w-full bg-[#111F19]/[0.03] rounded-xl border border-white/5 focus-within:border-[#22C55E]/70/40 transition-colors">
              <MapPin className="w-4 h-4 text-[#22C55E] mr-3 shrink-0" />
              <input
                className="w-full bg-transparent border-none outline-none text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/70 font-medium"
                placeholder="City, state, or 'Remote'..."
                value={location}
                onChange={handleLocationChange}
                onClick={() => setResults([])}
                type="text"
              />
            </div>

            <button
              disabled={!canSearch}
              className={`w-full md:w-auto px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                canSearch
                  ? "bg-gradient-to-r from-[#22C55E] to-[#34D399] hover:from-emerald-400 hover:to-cyan-300 text-neutral-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer active:scale-95"
                  : "bg-[#111F19]/[0.06] text-[#9AAEA3]/70 border border-[#20352B] cursor-not-allowed opacity-60"
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
                  navigate(
                    `/jobs/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`,
                  );
                  setResults([]);
                  setLocationResults([]);
                } else if (query.trim()) {
                  navigate(`/jobs/search?q=${encodeURIComponent(query)}`);
                  setResults([]);
                  setLocationResults([]);
                } else if (location.trim()) {
                  navigate(
                    `/jobs/search?location=${encodeURIComponent(location)}`,
                  );
                  setResults([]);
                  setLocationResults([]);
                } else {
                  toast.error("Please enter either job title or location");
                }
              }}
            >
              <span>Search Jobs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Autocomplete Dropdowns */}
          {results.length > 0 && (
            <div className="absolute z-30 mt-2 w-full max-w-2xl bg-[#0D1814] border border-[#22C55E]/30 rounded-xl shadow-2xl p-2 space-y-1">
              {Array.from(new Set(results.map((job: Job) => job.title))).map(
                (title: string) => (
                  <div
                    key={title}
                    onClick={() => {
                      setQuery(title);
                      setSelectedJob(title);
                      setResults([]);
                    }}
                    className="px-4 py-2.5 rounded-lg hover:bg-[#22C55E]/15 text-[#F1F5F2] hover:text-[#34D399] text-sm font-semibold cursor-pointer transition-colors"
                  >
                    {title}
                  </div>
                ),
              )}
            </div>
          )}

          {locationResults.length > 0 && (
            <div className="absolute z-30 mt-2 w-full max-w-3xl bg-[#0D1814] border border-[#22C55E]/30 rounded-xl shadow-2xl p-2 space-y-1">
              {Array.from(
                new Set(locationResults.map((job: Job) => job.location)),
              ).map((loc: string) => (
                <div
                  key={loc}
                  onClick={() => {
                    setLocation(loc);
                    setSelectedLocation(loc);
                    setLocationResults([]);
                  }}
                  className="px-4 py-2.5 rounded-lg hover:bg-[#22C55E]/15 text-[#F1F5F2] hover:text-[#34D399] text-sm font-semibold cursor-pointer transition-colors"
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* STICKY SIDEBAR FILTERS */}
          <aside className="jobs-sidebar lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#111F19]/85 border border-[#22C55E]/15 backdrop-blur-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-6">
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
                  className="text-xs font-semibold text-[#9AAEA3] hover:text-[#34D399] transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Job Type */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Job Type
                </span>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Remote"].map(
                    (type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2.5 cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange("type", type)}
                          className="sr-only peer"
                        />
                        <div className="w-4 h-4 rounded bg-[#111F19]/[0.05] border border-white/20 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-cyan-400 peer-checked:border-[#22C55E]/70 flex items-center justify-center transition-all">
                          {filters.type.includes(type) && (
                            <CheckCircle2 className="w-3 h-3 text-neutral-950 stroke-[3]" />
                          )}
                        </div>
                        <span className="text-xs text-[#9AAEA3]">{type}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {/* Salary Range */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Salary Range
                </span>
                <div className="space-y-2">
                  {[
                    { id: "under_500k", label: "Under ₹500k" },
                    { id: "500k_1000k", label: "₹500k - ₹1,000k" },
                    { id: "1000k_1500k", label: "₹1,000k - ₹1,500k" },
                    { id: "1500k_plus", label: "₹1,500k+" },
                  ].map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-2.5 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={filters.salaryRange.includes(range.id)}
                        onChange={() =>
                          handleFilterChange("salaryRange", range.id)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#111F19]/[0.05] border border-white/20 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-cyan-400 peer-checked:border-[#22C55E]/70 flex items-center justify-center transition-all">
                        {filters.salaryRange.includes(range.id) && (
                          <CheckCircle2 className="w-3 h-3 text-neutral-950 stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3]">
                        {range.label}
                      </span>
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
                  {["On-site", "Hybrid", "Remote"].map((mode) => (
                    <label
                      key={mode}
                      className="flex items-center gap-2.5 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={filters.mode.includes(mode)}
                        onChange={() => handleFilterChange("mode", mode)}
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#111F19]/[0.05] border border-white/20 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-cyan-400 peer-checked:border-[#22C55E]/70 flex items-center justify-center transition-all">
                        {filters.mode.includes(mode) && (
                          <CheckCircle2 className="w-3 h-3 text-neutral-950 stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3]">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discipline / Category */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] block">
                  Discipline / Category
                </span>
                <div className="space-y-2">
                  {[
                    {
                      id: "TECHNOLOGY_SOFTWARE",
                      label: "Software Engineering",
                    },
                    { id: "CREATIVE_MEDIA", label: "Design" },
                    { id: "MARKETING", label: "Marketing" },
                    { id: "HEALTHCARE", label: "Healthcare" },
                    { id: "BUSINESS_OPERATIONS", label: "Business Operations" },
                    { id: "FINANCE", label: "Finance" },
                    { id: "OTHER", label: "Other" },
                  ].map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-2.5 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={filters.category.includes(cat.id)}
                        onChange={() => handleFilterChange("category", cat.id)}
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#111F19]/[0.05] border border-white/20 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-cyan-400 peer-checked:border-[#22C55E]/70 flex items-center justify-center transition-all">
                        {filters.category.includes(cat.id) && (
                          <CheckCircle2 className="w-3 h-3 text-neutral-950 stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3]">
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filter Button */}
              <button
                onClick={applyFilters}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#34D399] hover:from-emerald-400 hover:to-cyan-300 text-neutral-950 font-extrabold text-xs tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all active:scale-95 cursor-pointer"
              >
                Apply Changes
              </button>
            </div>
          </aside>

          {/* MAIN JOBS FEED */}
          <section className="lg:col-span-9 space-y-5">
            {/* Toolbar */}
            <div className="jobs-toolbar flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#111F19]/80 border border-[#22C55E]/15 backdrop-blur-md">
              <span className="text-xs font-semibold text-[#9AAEA3]">
                Showing{" "}
                <strong className="text-[#34D399] font-extrabold">
                  {total || jobData.length}
                </strong>{" "}
                <span>{total === 1 ? "job" : "jobs"} found</span>
              </span>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-[#9AAEA3] font-medium">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#0D1814] border border-[#22C55E]/20 text-[#34D399] text-xs font-bold px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#22C55E]/70 cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="salary">Highest Salary</option>
                </select>
              </div>
            </div>

            {/* Loading Skeletons */}
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="animate-pulse rounded-2xl bg-[#111F19]/85 border border-[#20352B] p-6 sm:p-7 space-y-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#111F19]/[0.05]" />
                      <div className="space-y-2 flex-1">
                        <div className="h-5 bg-[#111F19]/[0.08] rounded-md w-1/2" />
                        <div className="h-4 bg-[#111F19]/[0.04] rounded-md w-1/3" />
                      </div>
                    </div>
                    <div className="h-4 bg-[#111F19]/[0.04] rounded-md w-3/4" />
                  </div>
                ))}
              </div>
            ) : jobData.length > 0 ? (
              <div className="space-y-4">
                {getSortedJobs().map((job: Job, idx: number) => (
                  <article
                    key={job.id}
                    className="job-card relative group rounded-2xl bg-[#111F19]/85 border border-[#20352B] hover:border-[#22C55E]/70/40 backdrop-blur-xl p-6 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(34,197,94,0.15)] transition-all duration-300"
                  >
                    {/* Top ambient highlight line on hover */}
                    <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#22C55E]/0 group-hover:via-[#22C55E]/60 to-transparent transition-all duration-300" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                      {/* Left: Logo & Details */}
                      <div className="flex items-start gap-4 flex-1">
                        {/* Company Monogram */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-950/80 via-[#071d24] to-[#081e36] border border-[#22C55E]/30 flex items-center justify-center text-[#34D399] font-extrabold text-xl shrink-0 shadow-inner group-hover:border-[#22C55E]/70/60 transition-colors">
                          {job.company?.name ? job.company.name.charAt(0) : "J"}
                        </div>

                        <div className="space-y-2 flex-1">
                          {/* Badges Bar */}
                          <div className="flex flex-wrap items-center gap-2">
                            {idx % 2 === 0 ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-orange-300 text-[11px] font-extrabold shadow-[0_0_12px_rgba(249,115,22,0.2)]">
                                <Flame className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                                <span>HOT ROLE</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 text-[#34D399] text-[11px] font-extrabold">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                                <span>NEW</span>
                              </span>
                            )}

                            <span className="px-2.5 py-0.5 rounded-full bg-[#111F19]/[0.04] border border-[#20352B] text-[#9AAEA3] text-[11px] font-semibold">
                              {toTitleCase(job.type || "Full-time")}
                            </span>

                            <span className="px-2.5 py-0.5 rounded-full bg-[#0D1814]/60 border border-[#22C55E]/30 text-[#34D399] text-[11px] font-semibold">
                              {toTitleCase(job.category || "Engineering")}
                            </span>
                          </div>

                          {/* Role Title */}
                          <h3
                            onClick={() =>
                              navigate(`/jobs/search/${job.id}`, {
                                state: job,
                              })
                            }
                            className="text-lg sm:text-xl font-bold tracking-tight text-[#F1F5F2] group-hover:text-[#34D399] transition-colors cursor-pointer"
                          >
                            {job.title}
                          </h3>

                          {/* Company Name & Verification */}
                          <div className="flex items-center gap-2 text-sm font-semibold text-[#22C55E]/90">
                            <Building2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                            <span>
                              {job.company?.name || "Vetted Tech Partner"}
                            </span>
                            <span className="text-[#9AAEA3]">•</span>
                            <span className="text-[#9AAEA3] text-xs font-normal flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>Verified Company</span>
                            </span>
                          </div>

                          {/* Metadata Pills */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D1814] border border-[#22C55E]/20 text-[#9AAEA3] text-xs font-medium">
                              <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>{job.location}</span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/30 text-[#34D399] text-xs font-bold">
                              <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>
                                {job.salaryMin / 1000}k - {job.salaryMax / 1000}
                                k / yr
                              </span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D1814] border border-[#20352B] text-[#9AAEA3] text-xs font-medium">
                              <Clock className="w-3.5 h-3.5 text-[#9AAEA3]" />
                              <span>{timeAgo(job.updatedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex md:flex-col items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#20352B] w-full md:w-auto justify-end">
                        <button
                          onClick={() => handleApply(job)}
                          className="flex-1 md:flex-none h-11 px-6 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#34D399] hover:from-emerald-400 hover:to-cyan-300 text-neutral-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(34,197,94,0.45)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </button>

                        {isSaved(job.id) ? (
                          <button
                            onClick={() => void handleUnsaveJob(job.id)}
                            aria-label="Remove saved job"
                            className="h-11 px-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#34D399] hover:bg-[#EF4444]/15 hover:border-red-500/30 hover:text-[#EF4444]/80 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
                          >
                            <BookmarkCheck className="w-4 h-4 text-[#22C55E]" />
                            <span>Saved</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => void handleSaveJob(job.id)}
                            aria-label="Save job"
                            className="h-11 px-3.5 rounded-xl bg-[#111F19]/[0.03] hover:bg-[#22C55E]/15 border border-[#20352B] hover:border-[#22C55E]/30 text-[#9AAEA3] hover:text-[#34D399] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
                          >
                            <Bookmark className="w-4 h-4" />
                            <span>Save</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="rounded-3xl bg-[#111F19]/85 border border-[#22C55E]/20 backdrop-blur-2xl p-12 text-center shadow-xl space-y-4">
                <Briefcase className="w-10 h-10 text-[#22C55E] mx-auto" />
                <h3 className="text-xl font-bold text-[#F1F5F2]">
                  No jobs match your criteria
                </h3>
                <p className="text-[#9AAEA3] text-sm">
                  Try adjusting your keywords, work mode, or salary range
                  filters to discover opportunities.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      type: [],
                      category: [],
                      salaryRange: [],
                      mode: [],
                    })
                  }
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 font-bold text-xs"
                >
                  Clear All Filters
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
