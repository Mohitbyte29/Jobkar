import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import bgVideo from "../assets/videos/video.mp4";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState, type ChangeEvent } from "react";
import { IndianRupee, MapPin, Search } from "lucide-react";
import axios from 'axios';
import { useJobs } from "@/context/JobsContext";
import timeAgo from "../../utils/timeAgo";

interface Job{
  id: number;
  title: string;
  category: string;
  location: string;
  updatedAt: string;
}

export default function Home() {
  const { userData } = useJobs();
  const heroRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const jobsRef = useRef<HTMLElement>(null);
  const employerRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  
  // Get jobs from context
  
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
      const res = await axios.get(`/api/jobs/search?locations=${encodeURIComponent(locationVal)}`);
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

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap")["default"]["context"]> | null = null;
    let cancelled = false;

    // Lazy-load GSAP + ScrollTrigger only when component mounts
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ─── Hero Section Animations (fast & snappy) ───
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl.from(
          ".hero-video-wrapper",
          { scale: 1.1, opacity: 0, duration: 0.8 },
          0
        );

        heroTl
          .from(".hero-badge", { y: 15, opacity: 0, duration: 0.5 }, 0.15)
          .from(".hero-title", { y: 30, opacity: 0, duration: 0.65 }, 0.25)
          .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.55 }, 0.38)
          .from(
            ".hero-search",
            { y: 25, opacity: 0, scale: 0.97, duration: 0.55 },
            0.45
          )
          .from(
            ".hero-tags span",
            { y: 10, opacity: 0, stagger: 0.07, duration: 0.4 },
            0.8
          )
          .from(
            ".hero-floating-card",
            { y: 20, opacity: 0, scale: 0.9, duration: 0.55, ease: "back.out(1.2  )" },
            0.58
          );

        // Floating animation for the stats card
        gsap.to(".hero-floating-card", {
          y: -8,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // ─── Scroll-triggered sections (lazy — only animate when visible) ───

        // Categories
        ScrollTrigger.batch(".categories-heading", {
          start: "top 80%",
          onEnter: (batch) =>
            gsap.from(batch, { y: 25, opacity: 0, duration: 0.75, ease: "power3.out" }),
          once: true,
        });

        ScrollTrigger.batch(".category-card", {
          start: "top 88%",
          interval: 0.08,
          onEnter: (batch) =>
            gsap.from(batch, { y: 30, opacity: 0, duration: 0.75, ease: "power3.out" }),
          once: true,
        });

        // Latest Jobs
        ScrollTrigger.batch(".jobs-heading", {
          start: "top 80%",
          onEnter: (batch) =>
            gsap.from(batch, { y: 20, opacity: 0, duration: 0.75, ease: "power3.out" }),
          once: true,
        });

        ScrollTrigger.batch(".job-card", {
          start: "top 80%",
          interval: 0.1,
          onEnter: (batch) =>
            gsap.from(batch, { x: -30, opacity: 0,  duration: 0.75, ease: "power3.out" }),
          once: true,
        });

        ScrollTrigger.batch(".jobs-cta", {
          start: "top 92%",
          onEnter: (batch) =>
            gsap.from(batch, { y: 15, opacity: 0, duration: 2.0, ease: "power3.out" }),
          once: true,
        });

        // Employer Section
        ScrollTrigger.batch(".employer-text", {
          start: "top 78%",
          onEnter: (batch) =>
            gsap.from(batch, { x: -40, opacity: 0, duration: 0.75, ease: "power3.out" }),
          once: true,
        });

        ScrollTrigger.batch(".employer-stat", {
          start: "top 88%",
          interval: 0.08,
          onEnter: (batch) =>
            gsap.from(batch, { y: 25, opacity: 0, scale: 0.95, stagger: 0.13, duration: 0.75, ease: "back.out(1.2)" }),
          once: true,
        });

        // Testimonials
        ScrollTrigger.batch(".testimonials-heading", {
          start: "top 88%",
          onEnter: (batch) =>
            gsap.from(batch, { y: 20, opacity: 0, duration: 0.75, ease: "power3.out" }),
          once: true,
        });

        ScrollTrigger.batch(".testimonial-card", {
          start: "top 90%",
          interval: 0.1,
          onEnter: (batch) =>
            gsap.from(batch, { y: 30, opacity: 0,  duration: 0.7, ease: "power3.out" }),
          once: true,
        });

        // ─── Smooth parallax on employer bg blobs ───
        gsap.to(".blob-teal", {
          scrollTrigger: {
            trigger: employerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.5,
          },
          y: -40,
          x: 20,
          ease: "none",
        });

        gsap.to(".blob-indigo", {
          scrollTrigger: {
            trigger: employerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.5,
          },
          y: 40,
          x: -20,
          ease: "none",
        });
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <>
      <Navbar />
      <header ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-width background video */}
        <div className="hero-video-wrapper absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuC9feLsxOZM1tSK99nku01xpkVb9FEyct9edJpLuZKOoUJyIRKme88HnamJ454pIeC6zyuwNN6EnnJ8TIZIlckU-_hN1UHz75moYKDXNbSh3yUS1EA2yJM8-BtoZmG6Crj_eM2ETxGZOy86d-2eKHous0t54tCh5_Twk55sdt5sAuIB7c_2Jfbj5rfM7wgnOexII0z_40bHwBcqKi0cj8sCCD5tXe5mhsfkroTImr6omCVk4QUmVEKN6p87Zui9mWhITYuO-F6Znt4"
          >
            <source
              src={bgVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/60 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <span className="hero-badge inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-label-caps mb-6 backdrop-blur-sm border border-white/20">
              NOW HIRING IN 45 COUNTRIES
            </span>
            <h1 className="hero-title font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Find Your Next Career Move
            </h1>
            <p className="hero-subtitle font-body-lg text-lg text-white/80 mb-10 max-w-3xl">
              Connect with industry-leading companies looking for top talent.
              JobKar is the premier destination for ambitious professionals.
            </p>
            {/* Search Interface */}
            <div className="hero-search flex-1 flex items-center gap-3 px-4 py-2 w-full" style={{ color: "white"}}>
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input className="w-full bg-white pl-8 p-2 rounded-xl border-none focus:ring-0 font-body-sm text-xl placeholder:text-outline text-gray-900" placeholder="Job title or keyword" type="text" value={query}
        onChange={handleChange} onClick={() => setLocationResults([])}/>
              <MapPin className="absolute right-92 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input className="w-full bg-white pl-8 p-2 rounded-xl border-none focus:ring-0 font-body-sm text-xl placeholder:text-outline text-gray-900" placeholder="Location" type="text" value={location}
        onChange={handleLocationChange} onClick={() => setResults([])}/>
          
            <button
            className={`w-full md:w-auto py-3 px-8 rounded-xl text-xl font-label-strong active:scale-95 transition-all ${
              query.trim() || location.trim()
                ? 'bg-primary-container text-white cursor-pointer hover:opacity-90' 
                : 'bg-gray-400 text-white cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              if(query.trim() && location.trim()){
                window.location.href = `/jobs/search?q=${encodeURIComponent(query)}&locations=${encodeURIComponent(location)}`;
                setResults([]);
                setLocationResults([]);
              }
              else if (query.trim()) {
                window.location.href = `/jobs/search?q=${encodeURIComponent(query)}}`;
                setResults([]);
                setLocationResults([]);
              }
              else if(location.trim()){
                window.location.href = `/jobs/search?locations=${encodeURIComponent(location)}`;
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
      
      {/* </div> */}
            <div className="hero-tags mt-6 flex flex-wrap gap-3 items-center">
              <span className="text-body-sm text-white/60">Popular:</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-body-sm text-white/80 hover:bg-white/20 transition-colors cursor-pointer border border-white/10" onClick={() => setQuery("Product Designer")}>
                Product Design
              </span> 
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-body-sm text-white/80 hover:bg-white/20 transition-colors cursor-pointer border border-white/10" onClick={() => setQuery("Software Engineer")}>
                Software Engineer
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-body-sm text-white/80 hover:bg-white/20 transition-colors cursor-pointer border border-white/10" onClick={() => setQuery("Marketing")}>
                Marketing
              </span>
            </div>
          </div>

          {/* Floating stats card */}
          <div className="hero-floating-card absolute bottom-12 right-12 z-20 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
              </div>
              <div>
                <p className="font-label-strong text-white">
                  1.2k+ New Jobs
                </p>
                <p className="text-xs text-white/60">Posted this week</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ FEATURED CATEGORIES ══════════ */}
      <section
        ref={categoriesRef}
        className="bg-surface-container-low py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="categories-heading flex justify-between items-end mb-12">
            <div>
              <h2 className="font-bold text-3xl text-on-surface mb-2">
                Explore by Category
              </h2>
              <p className="text-body-md text-on-surface-variant">
                Find the role that matches your expertise
              </p>
            </div>
            <Link
              to="/categories"
              className="text-secondary font-label-strong flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all{" "}
              <span
                className="material-symbols-outlined"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tech */}
            <div className="category-card bg-white p-8 rounded-xl border border-transparent hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group" onClick={() => window.location.href = `/jobs/search?category=${encodeURIComponent("TECHNOLOGY_SOFTWARE")}`} onChange={handleCategoryChange}>
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-container group-hover:scale-110 transition-all duration-300">
                <span
                  className="material-symbols-outlined text-primary-container"
                  data-icon="code"
                >
                  code
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-2">Technology</h3>
              <p className="text-body-sm text-outline mb-4">
                452 Open Positions
              </p>
              <span className="text-xs font-label-caps text-secondary">
                Explore Roles
              </span>
            </div>
            {/* Design */}
            <div className="category-card bg-white p-8 rounded-xl border border-transparent hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group" onClick={() => window.location.href = `/jobs/search?category=${encodeURIComponent("CREATIVE_MEDIA")}`} onChange={handleCategoryChange} >
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-fixed group-hover:scale-110 transition-all duration-300">
                <span
                  className="material-symbols-outlined text-on-secondary-container"
                  data-icon="palette"
                >
                  palette
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-2">Design</h3>
              <p className="text-body-sm text-outline mb-4">
                128 Open Positions
              </p>
              <span className="text-xs font-label-caps text-secondary">
                Explore Roles
              </span>
            </div>
            {/* Marketing */}
            <div className="category-card bg-white p-8 rounded-xl border border-transparent hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group" onClick={() => window.location.href = `/jobs/search?category=${encodeURIComponent("MARKETING")}`} onChange={handleCategoryChange} >
              <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-container group-hover:scale-110 transition-all duration-300">
                <span
                  className="material-symbols-outlined text-on-tertiary-fixed-variant"
                  data-icon="campaign"
                >
                  campaign
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-2">Marketing</h3>
              <p className="text-body-sm text-outline mb-4">
                310 Open Positions
              </p>
              <span className="text-xs font-label-caps text-secondary">
                Explore Roles
              </span>
            </div>
            {/* Finance */}
            <div className="category-card bg-white p-8 rounded-xl border border-transparent hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group" onClick={() => window.location.href = `/jobs/search?category=${encodeURIComponent("FINANCE")}`} onChange={handleCategoryChange} >
              <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-container group-hover:scale-110 transition-all duration-300">
                <span
                  className="material-symbols-outlined text-on-surface"
                  data-icon="payments"
                >
                  payments
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-2">Finance</h3>
              <p className="text-body-sm text-outline mb-4">
                185 Open Positions
              </p>
              <span className="text-xs font-label-caps text-secondary">
                Explore Roles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LATEST JOBS ══════════ */}
      <section ref={jobsRef} className="py-24 px-6 max-w-7xl mx-auto">
        <div className="jobs-heading text-center mb-16">
          <h2 className="font-bold text-3xl mb-4">Latest Opportunities</h2>
          <p className="text-body-md text-on-surface-variant">
            Hand-picked roles from trusted partners
          </p>
        </div>
        <div className="space-y-4">
          {userData && userData.length > 0 ? (
            userData.slice(0, 3).map((job: any) => (
              <div key={job.id} className="job-card bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-secondary hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                    <span
                      className="material-symbols-outlined text-3xl text-primary"
                      data-icon="token"
                    >
                      token
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-h3 text-h3">{job.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="text-body-sm font-label-strong text-slate-900">
                        {job.company?.name || 'Unknown Company'}
                      </span>
                      <div className="flex items-center gap-1 text-outline text-body-sm">
                        <span
                          className="material-symbols-outlined text-sm"
                          data-icon="location_on"
                        >
                          location_on
                        </span>
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1 text-outline text-body-sm">
                        <span
                          className="material-symbols-outlined text-sm"
                          data-icon="schedule"
                        >
                          schedule
                        </span>
                        {timeAgo(job.updatedAt)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-3">
                    {job.salaryMin && job.salaryMax && (
                      <p className="font-h3 text-secondary flex items-center gap-1">
                        <IndianRupee width={16} height={16} />
                        {(job.salaryMin / 100000).toFixed(1)}L - ${(job.salaryMax / 100000).toFixed(1)}L
                      </p>
                    )}
                    <button className="px-6 py-2 bg-primary-container text-white rounded-lg font-label-strong hover:bg-slate-800 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-on-surface-variant">No jobs available at the moment</p>
            </div>
          )}
        </div>
        <div className="jobs-cta mt-12 text-center">
          <Link
            to="/jobs"
            className="px-10 py-4 border-2 border-primary-container text-primary-container font-label-strong rounded-lg hover:bg-primary-container hover:text-white transition-all"
          >
            Browse All 2,500+ Jobs
          </Link>
        </div>
      </section>

      <section ref={employerRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-primary-container text-white relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="blob-teal absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-[100px]" />
            <div className="blob-indigo absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 lg:p-24 items-center relative z-10">
            <div className="employer-text">
              <h2 className="font-display text-display mb-6">
                Reach the world's best talent.
              </h2>
              <p className="text-body-lg text-on-primary-container mb-10">
                Join 10,000+ companies using JobKar to scale their teams with
                the most qualified candidates in tech, design, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-secondary text-white rounded-lg font-label-strong active:scale-95 transition-all">
                  Post a Job Now
                </button>
                <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-label-strong backdrop-blur-sm hover:bg-white/20 transition-all">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="employer-stat bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                  <h4 className="font-h3 text-h3 mb-2">95%</h4>
                  <p className="text-sm text-on-primary-container">
                    Placement rate for premium listings
                  </p>
                </div>
                <div className="employer-stat bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                  <h4 className="font-h3 text-h3 mb-2">24h</h4>
                  <p className="text-sm text-on-primary-container">
                    Average time to first application
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="employer-stat bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                  <h4 className="font-h3 text-h3 mb-2">1M+</h4>
                  <p className="text-sm text-on-primary-container">
                    Monthly active job seekers
                  </p>
                </div>
                <div className="employer-stat bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                  <h4 className="font-h3 text-h3 mb-2">4.9/5</h4>
                  <p className="text-sm text-on-primary-container">
                    Average employer satisfaction rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section
        ref={testimonialsRef}
        className="bg-surface-container-low py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="testimonials-heading text-center mb-16">
            <h2 className="font-bold text-3xl text-on-surface mb-4">
              Expert Career Insights
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Trusted by industry leaders and career coaches as the premier
              platform for professional growth and top-tier talent acquisition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert 1 */}
            <div className="testimonial-card bg-white p-8 rounded-2xl border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100">
                  <img
                    alt="Expert Headshot"
                    className="w-full h-full object-cover"
                    data-alt="Professional headshot of a female HR Director, smiling, corporate attire."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqB1Ea-E5E3m_3X9V7v2y-8_v1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1"
                  />
                </div>
                <div>
                  <h4 className="font-h3 text-base text-on-surface">
                    Sarah Jenkins
                  </h4>
                  <p className="text-xs text-outline font-label-strong uppercase tracking-wider">
                    HR Director at TechFlow
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-body-md text-on-surface-variant italic">
                "JobKar has revolutionized how we source senior design talent.
                The quality of applicants is consistently higher than any other
                platform we've used."
              </p>
            </div>
            {/* Expert 2 */}
            <div className="testimonial-card bg-white p-8 rounded-2xl border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100">
                  <img
                    alt="Expert Headshot"
                    className="w-full h-full object-cover"
                    data-alt="Professional headshot of a male Executive Career Coach, confident look."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqB1Ea-E5E3m_3X9V7v2y-8_v1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1"
                  />
                </div>
                <div>
                  <h4 className="font-h3 text-base text-on-surface">
                    David Chen
                  </h4>
                  <p className="text-xs text-outline font-label-strong uppercase tracking-wider">
                    Executive Career Coach
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-body-md text-on-surface-variant italic">
                "I always recommend JobKar to my clients. It's the only site
                where the user experience for the candidate matches the
                high-end nature of the roles being offered."
              </p>
            </div>
            {/* Expert 3 */}
            <div className="testimonial-card bg-white p-8 rounded-2xl border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100">
                  <img
                    alt="Expert Headshot"
                    className="w-full h-full object-cover"
                    data-alt="Professional headshot of a female Talent Acquisition Lead."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqB1Ea-E5E3m_3X9V7v2y-8_v1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1"
                  />
                </div>
                <div>
                  <h4 className="font-h3 text-base text-on-surface">
                    Marcus Rodriguez
                  </h4>
                  <p className="text-xs text-outline font-label-strong uppercase tracking-wider">
                    Talent Lead at InnovateX
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                ))}
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: '"FILL" 0.5' }}
                >
                  star_half
                </span>
              </div>
              <p className="text-body-md text-on-surface-variant italic">
                "The matching algorithm is incredibly accurate. We find that
                the 'Latest Opportunities' section consistently surfaces the
                exact profiles we are looking for."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
