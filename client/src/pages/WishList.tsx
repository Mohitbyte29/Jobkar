import React, { useContext, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bookmark,
  Building2,
  MapPin,
  Clock,
  IndianRupee,
  Briefcase,
  Trash2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Flame,
  Search,
  Filter,
  CheckCircle2,
  ArrowUpRight,
  SlidersHorizontal,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { wishListContext } from '@/context/WishlistContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface JobItem {
  id: number;
  title: string;
  company: string;
  location: string;
  category?: string;
  type?: string;
  salaryMin?: number;
  salaryMax?: number;
  stipend?: string;
  isUrgent?: boolean;
  isNew?: boolean;
  deadline?: string;
  logo?: string;
  savedAt?: string;
  tags?: string[];
}

const DEMO_SAVED_JOBS: JobItem[] = [
  {
    id: 101,
    title: 'Senior Frontend Architect (React & WebGL)',
    company: 'Stripe Global',
    location: 'Remote • Bangalore, India',
    category: 'Engineering',
    type: 'Full-Time',
    stipend: '₹28,00,000 - ₹36,00,000 / yr',
    isUrgent: true,
    isNew: true,
    deadline: 'Closing in 3 days',
    savedAt: 'Saved 2 hours ago',
    tags: ['React', 'TypeScript', 'Tailwind', 'High Equity'],
  },
  {
    id: 102,
    title: 'AI Platform & Backend Engineering Intern',
    company: 'Razorpay Labs',
    location: 'Bangalore, India (Hybrid)',
    category: 'Engineering',
    type: 'Internship',
    stipend: '₹45,000 - ₹60,000 / mo',
    isUrgent: true,
    isNew: false,
    deadline: 'Closing in 5 days',
    savedAt: 'Saved yesterday',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'PPO Offered'],
  },
  {
    id: 103,
    title: 'Product Design Lead (Systems & Mobile UI)',
    company: 'Atlassian Inc.',
    location: 'Remote (APAC)',
    category: 'Design',
    type: 'Full-Time',
    stipend: '₹32,00,000 - ₹42,00,000 / yr',
    isUrgent: false,
    isNew: true,
    deadline: 'Closing in 12 days',
    savedAt: 'Saved 3 days ago',
    tags: ['Figma', 'Design Systems', 'UX Research'],
  },
  {
    id: 104,
    title: 'Distributed Cloud Infrastructure Intern',
    company: 'Swiggy Tech',
    location: 'Hyderabad, India',
    category: 'DevOps',
    type: 'Internship',
    stipend: '₹40,000 - ₹55,000 / mo',
    isUrgent: false,
    isNew: false,
    deadline: 'Closing in 8 days',
    savedAt: 'Saved 5 days ago',
    tags: ['Kubernetes', 'AWS', 'Go', 'Mentorship'],
  },
];

export default function WishList() {
  const { wishList, removeFromWishList } = useContext(wishListContext);
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState<'recent' | 'salary' | 'deadline' | 'alpha'>('recent');
  const [filterType, setFilterType] = useState<'all' | 'internship' | 'fulltime'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyRemote, setOnlyRemote] = useState<boolean>(false);
  const [localDemoList, setLocalDemoList] = useState<JobItem[]>(DEMO_SAVED_JOBS);

  const combinedList: JobItem[] = useMemo(() => {
    if (wishList && wishList.length > 0) {
      return wishList.map((item: any, idx: number) => ({
        id: item.id || idx + 1,
        title: item.title || 'Software Engineering Role',
        company: item.company || (item.companies ? item.companies.name : 'Vetted Tech Partner'),
        location: item.location || 'Remote, India',
        category: item.category || 'Technology',
        type: item.type || (item.salaryMax && item.salaryMax < 100000 ? 'Internship' : 'Full-Time'),
        stipend: item.salaryMax
          ? item.salaryMax < 100000
            ? `₹${item.salaryMin?.toLocaleString() || '25,000'} - ₹${item.salaryMax?.toLocaleString()} / mo`
            : `₹${item.salaryMin?.toLocaleString() || '12,00,000'} - ₹${item.salaryMax?.toLocaleString()} / yr`
          : 'Competitive Stipend + Benefits',
        isUrgent: idx % 2 === 0,
        isNew: idx % 3 === 0,
        deadline: 'Closing in 7 days',
        savedAt: 'Recently Saved',
        tags: item.tags ? (Array.isArray(item.tags) ? item.tags : item.tags.split(',')) : ['Featured', 'Verified'],
      }));
    }
    return localDemoList;
  }, [wishList, localDemoList]);

  const filteredAndSortedList = useMemo(() => {
    return combinedList
      .filter((item) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = item.title.toLowerCase().includes(q);
          const matchesCompany = item.company.toLowerCase().includes(q);
          const matchesLocation = item.location.toLowerCase().includes(q);
          if (!matchesTitle && !matchesCompany && !matchesLocation) return false;
        }

        if (onlyRemote && !item.location.toLowerCase().includes('remote')) {
          return false;
        }

        if (filterType === 'internship' && !item.type?.toLowerCase().includes('intern')) {
          return false;
        }

        if (filterType === 'fulltime' && item.type?.toLowerCase().includes('intern')) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'alpha') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'deadline') {
          return (a.isUrgent ? 0 : 1) - (b.isUrgent ? 0 : 1);
        }
        return b.id - a.id;
      });
  }, [combinedList, searchQuery, onlyRemote, filterType, sortBy]);

  const handleRemove = (id: number, title: string) => {
    if (wishList && wishList.length > 0) {
      removeFromWishList(id);
    } else {
      setLocalDemoList((prev) => prev.filter((item) => item.id !== id));
    }
    toast.success(`Removed "${title}" from saved list`);
  };

  const handleClearAll = () => {
    if (wishList && wishList.length > 0) {
      wishList.forEach((j: any) => removeFromWishList(j.id));
    }
    setLocalDemoList([]);
    toast('Saved list cleared', { icon: '🧹' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030814] via-[#041416] to-[#030c10] text-[#F1F5F2] flex flex-col selection:bg-emerald-500 selection:text-neutral-950 font-sans relative overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0a1628',
            color: '#f8fafc',
            border: '1px solid rgba(56,189,248,0.2)',
          },
        }}
      />
      <Navbar />

      {/* Atmospheric mixed dark-green & deep blue radial glow lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Deep Green Orbs */}
        <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-600/12 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-teal-600/12 blur-[150px]" />
        
        {/* Deep Blue & Cyan Orbs */}
        <div className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-[160px]" />
        <div className="absolute bottom-1/3 -left-32 h-[460px] w-[460px] rounded-full bg-cyan-600/10 blur-[150px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#10b98106_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_25%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Header Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#20352B]">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-950/70 to-blue-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Bookmark className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
                <span>SAVED OPPORTUNITIES & CAREERS</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[#34D399] font-bold">{filteredAndSortedList.length} Roles</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F5F2] leading-tight">
                Your Saved{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                  Career Trajectories
                </span>
              </h1>
              <p className="text-[#9AAEA3] text-sm sm:text-base leading-relaxed">
                Review your bookmarked jobs and internships, monitor application closing dates, and apply with one click.
              </p>
            </div>

            {/* Quick Actions & Clear All */}
            <div className="flex items-center gap-3 self-start md:self-end">
              {filteredAndSortedList.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="px-4 py-2.5 rounded-xl border border-red-500/20 bg-[#EF4444]/10 hover:bg-[#EF4444]/20 text-[#EF4444]/80 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Clear All</span>
                </button>
              )}
              <Link
                to="/internships"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-200"
              >
                <span>Browse More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Integrated Search & Quick Filter Bar */}
          <div className="mt-6 p-2 sm:p-2.5 rounded-2xl bg-[#06111f]/85 border border-cyan-500/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-2.5">
            <div className="relative flex-1 w-full flex items-center">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search saved by title, company, or tech stack..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#111F19]/[0.03] border border-[#20352B] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-[#F1F5F2] placeholder:text-[#9AAEA3]/70 text-sm font-medium outline-none transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                    : 'bg-[#111F19]/[0.04] text-[#9AAEA3] border border-[#20352B] hover:text-[#F1F5F2]'
                }`}
              >
                All ({combinedList.length})
              </button>
              <button
                onClick={() => setFilterType('internship')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  filterType === 'internship'
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-neutral-950 shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                    : 'bg-[#111F19]/[0.04] text-[#9AAEA3] border border-[#20352B] hover:text-[#F1F5F2]'
                }`}
              >
                Internships
              </button>
              <button
                onClick={() => setFilterType('fulltime')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  filterType === 'fulltime'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#F1F5F2] shadow-[0_0_15px_rgba(59,130,246,0.35)]'
                    : 'bg-[#111F19]/[0.04] text-[#9AAEA3] border border-[#20352B] hover:text-[#F1F5F2]'
                }`}
              >
                Full-Time
              </button>

              <button
                onClick={() => setOnlyRemote(!onlyRemote)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  onlyRemote
                    ? 'bg-blue-500/20 text-sky-300 border border-sky-500/40'
                    : 'bg-[#111F19]/[0.04] text-[#9AAEA3] border border-[#20352B] hover:text-[#F1F5F2]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Remote Only</span>
              </button>
            </div>
          </div>
        </section>

        {/* Main Grid Layout: Sidebar & Card List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* STICKY SIDEBAR: Sort & Filters */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            
            {/* Sort Hub Card */}
            <div className="rounded-2xl bg-[#06111f]/85 border border-cyan-500/15 backdrop-blur-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Sort Opportunities</span>
                </h3>
              </div>

              <div className="space-y-1.5">
                {[
                  { id: 'recent', label: 'Recently Saved', desc: 'Newest additions first' },
                  { id: 'deadline', label: 'Urgent / Closing Soon', desc: 'Prioritize upcoming deadlines' },
                  { id: 'salary', label: 'Highest Stipend / Comp', desc: 'Highest payout top' },
                  { id: 'alpha', label: 'Alphabetical', desc: 'Role title A to Z' },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setSortBy(opt.id as any)}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                      sortBy === opt.id
                        ? 'bg-gradient-to-r from-emerald-950/70 to-blue-950/70 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                        : 'bg-[#111F19]/[0.02] border-transparent hover:bg-[#111F19]/[0.05]'
                    }`}
                  >
                    <div className="mt-0.5 relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === opt.id}
                        onChange={() => setSortBy(opt.id as any)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          sortBy === opt.id
                            ? 'border-cyan-400 bg-cyan-400'
                            : 'border-slate-600 bg-[#111F19]/[0.05]'
                        }`}
                      >
                        {sortBy === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                      </div>
                    </div>
                    <div>
                      <div
                        className={`text-xs font-bold ${
                          sortBy === opt.id ? 'text-[#F1F5F2]' : 'text-[#9AAEA3]'
                        }`}
                      >
                        {opt.label}
                      </div>
                      <div className="text-[11px] text-[#9AAEA3]">{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quick Metrics & Trust Signals Card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#06111f] to-[#040c17] border border-cyan-500/15 backdrop-blur-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>JobKar Career Guarantee</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F1F5F2]">Direct Review Channels</div>
                    <div className="text-[11px] text-[#9AAEA3]">Applications route to engineering leads</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F1F5F2]">Verified Comp Ranges</div>
                    <div className="text-[11px] text-[#9AAEA3]">100% upfront salary and equity data</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CARD LIST */}
          <section className="lg:col-span-9 space-y-5">
            {filteredAndSortedList.length > 0 ? (
              <AnimatePresence>
                {filteredAndSortedList.map((job) => (
                  <motion.article
                    key={job.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative group rounded-2xl bg-[#06111f]/85 border border-[#20352B] hover:border-cyan-400/40 backdrop-blur-xl p-6 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(6,182,212,0.15)] transition-all duration-300"
                  >
                    {/* Top ambient highlight line on hover */}
                    <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-300" />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                      
                      {/* Left: Logo + Role Info */}
                      <div className="flex items-start gap-4 flex-1">
                        
                        {/* Company Logo Monogram */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-950/80 via-[#071d24] to-[#081e36] border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-extrabold text-xl shrink-0 shadow-inner group-hover:border-cyan-400/60 transition-colors">
                          {job.company.charAt(0)}
                        </div>

                        {/* Text Details & Tags */}
                        <div className="space-y-2.5 flex-1">
                          
                          {/* Badges Bar */}
                          <div className="flex flex-wrap items-center gap-2">
                            {job.isUrgent && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-orange-300 text-[11px] font-extrabold shadow-[0_0_12px_rgba(249,115,22,0.2)]">
                                <Flame className="w-3 h-3 text-orange-400 fill-orange-400 animate-pulse" />
                                <span>HOT / CLOSING SOON</span>
                              </span>
                            )}

                            {job.isNew && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 text-[#34D399] text-[11px] font-extrabold">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                                <span>NEW OPPORTUNITY</span>
                              </span>
                            )}

                            <span className="px-2.5 py-0.5 rounded-full bg-[#111F19]/[0.04] border border-[#20352B] text-[#9AAEA3] text-[11px] font-semibold">
                              {job.type || 'Full-Time'}
                            </span>

                            <span className="text-[11px] text-[#9AAEA3] ml-auto hidden sm:inline">
                              {job.savedAt}
                            </span>
                          </div>

                          {/* Role Title */}
                          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#F1F5F2] group-hover:text-cyan-300 transition-colors cursor-pointer">
                            {job.title}
                          </h2>

                          {/* Company Name & Verification */}
                          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400/90">
                            <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>{job.company}</span>
                            <span className="text-[#9AAEA3]">•</span>
                            <span className="text-[#9AAEA3] text-xs font-normal flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>Verified Employer</span>
                            </span>
                          </div>

                          {/* Metadata Pills: Location, Comp, Deadline */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#040e1a] border border-blue-500/20 text-[#9AAEA3] text-xs font-medium">
                              <MapPin className="w-3.5 h-3.5 text-sky-400" />
                              <span>{job.location}</span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/30 text-[#34D399] text-xs font-bold">
                              <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                              <span>{job.stipend}</span>
                            </div>

                            {job.deadline && (
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#040e1a] border border-[#20352B] text-[#9AAEA3] text-xs font-medium">
                                <Clock className="w-3.5 h-3.5 text-[#9AAEA3]" />
                                <span>{job.deadline}</span>
                              </div>
                            )}
                          </div>

                          {/* Tech Stack / Skill Tags */}
                          {job.tags && job.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              {job.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded-md bg-[#111F19]/[0.03] border border-[#20352B] text-[11px] font-medium text-[#9AAEA3]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex md:flex-col items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-[#20352B] w-full md:w-auto justify-end">
                        <button
                          onClick={() => {
                            toast.success(`Application portal opened for ${job.title}`);
                            navigate(`/jobs/search`);
                          }}
                          className="flex-1 md:flex-none h-11 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-neutral-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </button>

                        <button
                          onClick={() => handleRemove(job.id, job.title)}
                          aria-label="Remove from wishlist"
                          className="h-11 px-3.5 rounded-xl bg-[#111F19]/[0.03] hover:bg-[#EF4444]/15 border border-[#20352B] hover:border-red-500/30 text-[#9AAEA3] hover:text-[#EF4444]/80 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-xs font-semibold"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="md:hidden">Remove</span>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl bg-[#06111f]/85 border border-cyan-500/20 backdrop-blur-2xl p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6 max-w-xl mx-auto my-8"
              >
                <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.25)]">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-cyan-400/20" />
                  <Bookmark className="w-8 h-8 text-cyan-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#F1F5F2]">
                    No matching saved roles
                  </h3>
                  <p className="text-[#9AAEA3] text-sm max-w-md mx-auto leading-relaxed">
                    {searchQuery
                      ? 'No saved opportunities matched your search criteria. Try clearing filters.'
                      : 'You haven’t saved any jobs or internships yet. Discover curated opportunities across tech.'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  {searchQuery ? (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setFilterType('all');
                        setOnlyRemote(false);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#111F19]/[0.05] border border-[#20352B] hover:bg-[#111F19]/10 text-[#F1F5F2] font-bold text-sm transition-all"
                    >
                      Clear Search Filter
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/internships"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-neutral-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all active:scale-95 flex items-center gap-2"
                      >
                        <span>Explore Internships</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/jobs"
                        className="px-6 py-3 rounded-xl bg-[#111F19]/[0.04] border border-[#20352B] hover:border-cyan-500/40 hover:bg-cyan-500/10 text-slate-200 font-semibold text-sm transition-all"
                      >
                        Explore Jobs
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
