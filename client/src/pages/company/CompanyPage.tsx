import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AlphaCase from "../../../utils/AlphaCase";
import { useCompany } from "@/context/CompanyContext";
import {
  Building2,
  MapPin,
  Globe,
  Calendar,
  Users,
  Briefcase,
  Star,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Award,
  Clock,
  IndianRupee,
  ArrowRight,
  Heart,
  Share2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import toast, { Toaster } from "react-hot-toast";

interface Job {
  id: number;
  title: string;
  tags?: string[];
  location?: string;
  perks?: any;
  type?: string;
  salaryMin?: number;
  salaryMax?: number;
}

interface Company {
  id: number;
  name: string;
  logo: string;
  category: string;
  companySize?: any;
  foundedYear?: number;
  description: string;
  website: string;
  location: string;
  createdAt?: string;
  updatedAt?: string;
  perks?: any;
  companyStatus?: string;
  jobs?: Job[];
  _count?: { jobs: number };
}

const CompanyPage = () => {
  const location = useLocation();
  const { companyId } = useParams();
  const { companyData } = useCompany();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  // Derive company from navigation state or lookup by ID from context
  const targetId = Number(companyId);
  const companyFromState: Company | undefined = location.state;
  const companyFromContext = companyData.find((c) => c.id === targetId);

  const company: Company = companyFromState || companyFromContext || {
    id: 1,
    name: "Stripe Technologies",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=150&q=80",
    category: "TECHNOLOGY_SOFTWARE",
    companySize: "5,000+",
    foundedYear: 2010,
    description:
      "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.",
    website: "https://stripe.com",
    location: "Bangalore, India (HQ: San Francisco)",
    perks: ["Competitive Equity", "Comprehensive Health Coverage", "Remote-First Policy", "Annual Learning Stipend"],
    jobs: [
      {
        id: 101,
        title: "Senior Full Stack Platform Architect",
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        location: "Bangalore, India",
        type: "Full-Time",
        salaryMin: 2800000,
        salaryMax: 3800000,
      },
      {
        id: 102,
        title: "Staff Infrastructure & SRE Engineer",
        tags: ["Kubernetes", "AWS", "Go", "Distributed Systems"],
        location: "Remote (India)",
        type: "Full-Time",
        salaryMin: 3400000,
        salaryMax: 4800000,
      },
      {
        id: 103,
        title: "Product Design Lead (Design Systems)",
        tags: ["Figma", "UI/UX", "Design Systems"],
        location: "Hybrid (Bangalore)",
        type: "Full-Time",
        salaryMin: 2400000,
        salaryMax: 3200000,
      },
    ],
    _count: { jobs: 3 },
  };

  const handleToggleFollow = () => {
    setIsFollowing((prev) => !prev);
    if (!isFollowing) {
      toast.success(`Following ${company.name}! You'll receive updates on new job openings.`);
    } else {
      toast.success(`Unfollowed ${company.name}`);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Company profile link copied to clipboard!");
    }
  };

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

      <main className="relative min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans pt-24 pb-24">
        {/* Ambient Cosmic Background Glow Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-blue-600/12 via-cyan-500/8 to-transparent rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9AAEA3] mb-6">
            <Link to="/" className="hover:text-[#22C55E] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
            <Link to="/companies" className="hover:text-[#22C55E] transition-colors">
              Companies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
            <span className="text-[#22C55E]">{company.name}</span>
          </div>

          {/* Hero Banner Header */}
          <header className="relative mb-10">
            {/* Campus Cover Photo */}
            <div className="h-56 sm:h-72 md:h-80 w-full rounded-3xl overflow-hidden relative border border-[#20352B] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030713] via-[#030713]/50 to-transparent z-10" />
              <img
                className="w-full h-full object-cover"
                alt={`${company.name} Campus`}
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              />
            </div>

            {/* Profile Info Overlay Strip */}
            <div className="relative -mt-16 sm:-mt-20 px-4 sm:px-8 z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                {/* Company Logo */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-2.5 flex items-center justify-center border-2 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden flex-shrink-0">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <Building2 className="w-12 h-12 text-[#22C55E]" />
                  )}
                </div>

                {/* Company Details */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F1F5F2] tracking-tight">
                      {company.name}
                    </h1>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/25">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      Verified
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#22C55E]/90">
                    {AlphaCase(company.category || "Technology")} Enterprise
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#9AAEA3]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#9AAEA3]" />
                      {company.location || "India"}
                    </span>
                    <span className="flex items-center gap-1 text-[#F59E0B] font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-[#F59E0B]" />
                      4.8 (1.2k+ Reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 self-stretch sm:self-auto justify-end">
                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl bg-[#111F19] border border-[#20352B] hover:border-slate-700 text-[#9AAEA3] hover:text-[#F1F5F2] transition-all shadow-md active:scale-95"
                  title="Share profile"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleToggleFollow}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${
                    isFollowing
                      ? "bg-emerald-950/80 border border-emerald-500/50 text-[#34D399]"
                      : "bg-[#111F19] border border-[#20352B] hover:border-[#22C55E]/40 text-slate-200 hover:text-[#22C55E]"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isFollowing ? "fill-emerald-400 text-[#22C55E]" : ""}`} />
                  <span>{isFollowing ? "Following" : "Follow"}</span>
                </button>

                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-1.5 active:scale-95"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9AAEA3]">Founded</p>
                <p className="text-lg font-extrabold text-[#F1F5F2]">{company.foundedYear || 2012}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9AAEA3]">Company Size</p>
                <p className="text-lg font-extrabold text-[#F1F5F2]">
                  {typeof company.companySize === "number"
                    ? `${company.companySize}+ Employees`
                    : company.companySize || "500-1,000 Employees"}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9AAEA3]">Industry</p>
                <p className="text-sm font-bold text-[#F1F5F2] truncate">
                  {AlphaCase(company.category || "Software")}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9AAEA3]">HQ Location</p>
                <p className="text-sm font-bold text-[#F1F5F2] truncate">{company.location || "India"}</p>
              </div>
            </div>
          </div>

          {/* Detailed Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (4 cols): About & Culture */}
            <div className="lg:col-span-4 space-y-6">
              {/* About Section */}
              <section className="p-6 rounded-3xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl space-y-4 shadow-xl">
                <h2 className="text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#22C55E]" />
                  About {company.name}
                </h2>
                <p className="text-sm text-[#9AAEA3] leading-relaxed">
                  {company.description ||
                    "A leading global tech organization committed to building high-leverage products and fostering developer excellence."}
                </p>
              </section>

              {/* Benefits & Perks */}
              <section className="p-6 rounded-3xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl space-y-4 shadow-xl">
                <h2 className="text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Benefits & Perks
                </h2>
                <div className="space-y-2.5">
                  {(Array.isArray(company.perks)
                    ? company.perks
                    : [
                        "Comprehensive Health & Dental Coverage",
                        "High Equity & Generous Stock Options",
                        "Flexible Remote & Hybrid Policy",
                        "Annual Hardware & Learning Stipend",
                      ]
                  ).map((perk: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Verified Organization Guarantee */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-blue-950/40 border border-[#22C55E]/20 backdrop-blur-xl space-y-3">
                <div className="flex items-center gap-2 text-[#22C55E] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Jobkar Verified Partner</span>
                </div>
                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  All job openings listed under {company.name} are vetted for direct recruiter contact and accurate salary
                  ranges.
                </p>
              </div>
            </div>

            {/* Right Column (8 cols): Active Job Openings & Culture */}
            <div className="lg:col-span-8 space-y-8">
              {/* Active Jobs Section */}
              <section className="p-6 sm:p-8 rounded-3xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#20352B]">
                  <div>
                    <h2 className="text-xl font-bold text-[#F1F5F2]">Active Job Openings</h2>
                    <p className="text-xs text-[#9AAEA3] mt-0.5">
                      Explore current roles and engineering teams hiring now
                    </p>
                  </div>
                  <Link
                    to="/jobs"
                    className="text-xs font-bold text-[#22C55E] hover:text-[#34D399] transition-colors"
                  >
                    View All Jobs →
                  </Link>
                </div>

                {/* Jobs List */}
                <div className="space-y-4">
                  {company.jobs && company.jobs.length > 0 ? (
                    company.jobs.map((job: Job) => (
                      <div
                        key={job.id}
                        className="group p-5 rounded-2xl bg-[#0D1814]/90 hover:bg-[#162820] border border-[#20352B] hover:border-[#22C55E]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors">
                            {job.title}
                          </h3>

                          {job.tags && job.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {job.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#07110D] text-[#9AAEA3] border border-[#20352B]"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#9AAEA3]">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#9AAEA3]/70" />
                              {job.location || company.location || "Bangalore, India"}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5 text-[#9AAEA3]/70" />
                              {AlphaCase(job.type || "Full-Time")}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#20352B]">
                          {job.salaryMin && job.salaryMax ? (
                            <span className="text-sm font-bold text-[#22C55E] flex items-center">
                              <IndianRupee className="w-3.5 h-3.5" />
                              {job.salaryMin / 100000}L - {job.salaryMax / 100000}L / yr
                            </span>
                          ) : (
                            <span className="text-xs font-semibold text-[#9AAEA3]">Competitive Package</span>
                          )}

                          <button
                            onClick={() => navigate(`/jobs/search/${job.id}`, { state: job })}
                            className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center rounded-2xl bg-[#0D1814]/70 border border-[#20352B]/80">
                      <Briefcase className="w-8 h-8 text-[#9AAEA3]/70 mx-auto mb-2" />
                      <p className="text-sm text-[#9AAEA3] font-semibold">No active job openings currently</p>
                      <p className="text-xs text-[#9AAEA3]/70 mt-1">
                        Follow this company to get notified when new positions are posted.
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* Life at Company Culture Photo Cards */}
              <section className="p-6 sm:p-8 rounded-3xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl shadow-xl space-y-6">
                <h2 className="text-xl font-bold text-[#F1F5F2]">Life at {company.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group rounded-2xl overflow-hidden bg-[#0D1814]/90 border border-[#20352B] p-3 space-y-2.5">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Collaborative workspace"
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                      />
                    </div>
                    <p className="text-xs font-bold text-slate-200">Innovation Driven Culture</p>
                  </div>

                  <div className="group rounded-2xl overflow-hidden bg-[#0D1814]/90 border border-[#20352B] p-3 space-y-2.5">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Team discussion"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                      />
                    </div>
                    <p className="text-xs font-bold text-slate-200">High-Impact Engineering</p>
                  </div>

                  <div className="group rounded-2xl overflow-hidden bg-[#0D1814]/90 border border-[#20352B] p-3 space-y-2.5">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Office amenities"
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80"
                      />
                    </div>
                    <p className="text-xs font-bold text-slate-200">Global Mentorship</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Similar Companies Section */}
          <section className="mt-14">
            <div className="flex items-center justify-between mb-6 px-1">
              <div>
                <h2 className="text-xl font-bold text-[#F1F5F2]">Similar Tech Companies</h2>
                <p className="text-xs text-[#9AAEA3] mt-0.5">Explore related teams in this industry</p>
              </div>
              <Link
                to="/companies"
                className="text-xs font-bold text-[#22C55E] hover:text-[#34D399] transition-colors"
              >
                Browse All Directory →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {companyData.slice(0, 6).map((c: Company) => (
                <div
                  key={c.id}
                  onClick={() => navigate(`/company/${c.id}`, { state: c })}
                  className="p-4 rounded-2xl bg-[#111F19]/90 border border-[#20352B] hover:border-[#22C55E]/40 backdrop-blur-xl transition-all hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 mb-3 rounded-xl bg-[#0D1814] border border-[#20352B] p-1.5 flex items-center justify-center overflow-hidden">
                    {c.logo ? (
                      <img src={c.logo} alt={c.name} className="w-full h-full object-contain" />
                    ) : (
                      <Building2 className="w-6 h-6 text-[#22C55E]" />
                    )}
                  </div>
                  <p className="text-xs font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors truncate w-full">
                    {c.name}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-[#F59E0B] font-semibold">
                    <Star className="w-3 h-3 fill-amber-400 text-[#F59E0B]" />
                    <span>4.8</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CompanyPage;
