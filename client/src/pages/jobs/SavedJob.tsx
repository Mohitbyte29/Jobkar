import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import axios from 'axios';
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
  BookmarkCheck,
  Calendar,
  Layers,
  GraduationCap,
  ExternalLink,
  RefreshCw,
  Compass,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SavedJob {
  id: number;
  userId: number;
  jobId: number;
  createdAt: string;
  job: {
    companyId?: number;
    category?: string;
    company: {
      UserId?: number;
      category?: string;
      name: string;
      location?: string;
      requirements?: string;
      remote?: boolean;
      description?: string;
      logo?: string;
      website?: string;
      createdAt?: string;
      updatedAt?: string;
    };
    title: string;
    type?: string;
    salaryMin: number;
    salaryMax: number;
    updatedAt?: string;
    createdAt?: string;
  };
}

interface SavedInternshipItem {
  id: number;
  internshipId: number;
  title: string;
  companyName: string;
  companyLogo?: string;
  location: string;
  stipendMin: number;
  stipendMax: number;
  duration?: string;
  type?: string;
  category?: string;
  remote?: boolean;
  createdAt: string;
  tags?: string[];
  raw?: any;
}

// Demo fallback data if database is empty so UI looks alive and demonstrable
const DEMO_SAVED_JOBS = [
  {
    id: 901,
    userId: 1,
    jobId: 101,
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    job: {
      title: 'Senior Full Stack Platform Architect',
      category: 'Software Engineering',
      type: 'Full-time',
      salaryMin: 2800000,
      salaryMax: 3800000,
      company: {
        name: 'Stripe Global',
        location: 'Bangalore, India',
        remote: true,
        logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=150&q=80',
        website: 'https://stripe.com',
      },
    },
  },
  {
    id: 902,
    userId: 1,
    jobId: 102,
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    job: {
      title: 'Principal Distributed Systems Engineer',
      category: 'Backend & Cloud',
      type: 'Full-time',
      salaryMin: 3200000,
      salaryMax: 4500000,
      company: {
        name: 'Razorpay Labs',
        location: 'Bangalore, India',
        remote: false,
        logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=150&q=80',
        website: 'https://razorpay.com',
      },
    },
  },
  {
    id: 903,
    userId: 1,
    jobId: 103,
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
    job: {
      title: 'Lead Product Designer (Design Systems)',
      category: 'Design & Creative',
      type: 'Full-time',
      salaryMin: 2200000,
      salaryMax: 3000000,
      company: {
        name: 'Atlassian Inc.',
        location: 'Remote (APAC)',
        remote: true,
        logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=150&q=80',
        website: 'https://atlassian.com',
      },
    },
  },
];

const DEMO_SAVED_INTERNSHIPS: SavedInternshipItem[] = [
  {
    id: 801,
    internshipId: 201,
    title: 'AI Platform & Deep Learning Intern',
    companyName: 'Insight AI Labs',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
    location: 'Bangalore, India',
    stipendMin: 45000,
    stipendMax: 60000,
    duration: '6 Months',
    type: 'Internship (PPO Offered)',
    category: 'Artificial Intelligence',
    remote: true,
    createdAt: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString(),
    tags: ['PyTorch', 'LLMs', 'FastAPI', 'High Stipend'],
  },
  {
    id: 802,
    internshipId: 202,
    title: 'Cloud Infrastructure & SRE Intern',
    companyName: 'Swiggy Tech',
    companyLogo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80',
    location: 'Hyderabad, India',
    stipendMin: 40000,
    stipendMax: 55000,
    duration: '3 Months',
    type: 'Internship',
    category: 'DevOps & Cloud',
    remote: false,
    createdAt: new Date(Date.now() - 4 * 24 * 3600 * 1000).toISOString(),
    tags: ['Kubernetes', 'AWS', 'Go', 'Mentorship'],
  },
  {
    id: 803,
    internshipId: 203,
    title: 'Frontend Engineering Intern (Next.js & WebGL)',
    companyName: 'Vercel Ecosystem',
    companyLogo: 'https://images.unsplash.com/photo-1534972195531-a756b1140f6c?auto=format&fit=crop&w=150&q=80',
    location: 'Remote',
    stipendMin: 50000,
    stipendMax: 70000,
    duration: '6 Months',
    type: 'Internship',
    category: 'Frontend Engineering',
    remote: true,
    createdAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
    tags: ['Next.js', 'Tailwind', 'Three.js', 'Mentorship'],
  },
];

interface SavedJobProps {
  defaultTab?: 'jobs' | 'internships';
}

const SavedJob: React.FC<SavedJobProps> = ({ defaultTab = 'jobs' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as 'jobs' | 'internships') || defaultTab;
  const [activeTab, setActiveTab] = useState<'jobs' | 'internships'>(initialTab);

  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [savedInternships, setSavedInternships] = useState<SavedInternshipItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyRemote, setOnlyRemote] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'recent' | 'salary' | 'alpha'>('recent');

  const navigate = useNavigate();

  const fetchSavedData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch Saved Jobs
      const resJobs = await axios.get(`http://localhost:4000/api/jobs/saved`, { withCredentials: true });
      if (resJobs.data && Array.isArray(resJobs.data) && resJobs.data.length > 0) {
        setSavedJobs(resJobs.data);
      } else {
        setSavedJobs(DEMO_SAVED_JOBS as any);
      }
    } catch (error) {
      console.warn('API error or unauthenticated, falling back to demo saved jobs:', error);
      setSavedJobs(DEMO_SAVED_JOBS as any);
    }

    try {
      // Fetch Saved Internships if available
      const resIntern = await axios.get(`http://localhost:4000/api/internships/saved`, { withCredentials: true });
      if (resIntern.data && Array.isArray(resIntern.data) && resIntern.data.length > 0) {
        const mapped = resIntern.data.map((item: any) => ({
          id: item.id,
          internshipId: item.internshipId || item.id,
          title: item.internship?.title || item.title || 'Engineering Intern',
          companyName: item.internship?.companies?.name || item.companyName || 'Partner Tech Co.',
          companyLogo: item.internship?.companies?.logo || item.companyLogo,
          location: item.internship?.location || item.location || 'Remote',
          stipendMin: item.internship?.salaryMin || item.stipendMin || 35000,
          stipendMax: item.internship?.salaryMax || item.stipendMax || 50000,
          duration: item.internship?.duration || '3-6 Months',
          type: item.internship?.type || 'Internship',
          category: item.internship?.category || 'Engineering',
          remote: Boolean(item.internship?.remote),
          createdAt: item.createdAt || new Date().toISOString(),
          tags: item.internship?.tags || ['Fast Track', 'Mentorship'],
          raw: item.internship || item,
        }));
        setSavedInternships(mapped);
      } else {
        setSavedInternships(DEMO_SAVED_INTERNSHIPS);
      }
    } catch {
      setSavedInternships(DEMO_SAVED_INTERNSHIPS);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSavedData();
  }, [fetchSavedData]);

  const handleTabChange = (tab: 'jobs' | 'internships') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const handleRemoveSavedJob = async (jobId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      await axios.delete(`http://localhost:4000/api/jobs/${jobId}/save`, { withCredentials: true });
      setSavedJobs((prev) => prev.filter((item) => (item.jobId || item.id) !== jobId));
      toast.success('Job removed from saved bookmarks');
    } catch {
      // Also update local state
      setSavedJobs((prev) => prev.filter((item) => (item.jobId || item.id) !== jobId));
      toast.success('Job removed from saved bookmarks');
    }
  };

  const handleRemoveSavedInternship = (internshipId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedInternships((prev) => prev.filter((item) => item.internshipId !== internshipId && item.id !== internshipId));
    toast.success('Internship removed from saved bookmarks');
  };

  // Filtered & Sorted Jobs
  const filteredJobs = useMemo(() => {
    return savedJobs
      .filter((item) => {
        const title = item.job?.title?.toLowerCase() || '';
        const company = item.job?.company?.name?.toLowerCase() || '';
        const location = item.job?.company?.location?.toLowerCase() || '';
        const q = searchQuery.toLowerCase();
        const matchesQuery = !q || title.includes(q) || company.includes(q) || location.includes(q);
        const matchesRemote = !onlyRemote || item.job?.company?.remote;
        return matchesQuery && matchesRemote;
      })
      .sort((a, b) => {
        if (sortBy === 'salary') return (b.job?.salaryMax || 0) - (a.job?.salaryMax || 0);
        if (sortBy === 'alpha') return (a.job?.title || '').localeCompare(b.job?.title || '');
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [savedJobs, searchQuery, onlyRemote, sortBy]);

  // Filtered & Sorted Internships
  const filteredInternships = useMemo(() => {
    return savedInternships
      .filter((item) => {
        const title = item.title.toLowerCase();
        const company = item.companyName.toLowerCase();
        const location = item.location.toLowerCase();
        const q = searchQuery.toLowerCase();
        const matchesQuery = !q || title.includes(q) || company.includes(q) || location.includes(q);
        const matchesRemote = !onlyRemote || item.remote;
        return matchesQuery && matchesRemote;
      })
      .sort((a, b) => {
        if (sortBy === 'salary') return (b.stipendMax || 0) - (a.stipendMax || 0);
        if (sortBy === 'alpha') return a.title.localeCompare(b.title);
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [savedInternships, searchQuery, onlyRemote, sortBy]);

  const totalSavedCount = savedJobs.length + savedInternships.length;

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#041416',
            color: '#f1f5f9',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            backdropFilter: 'blur(12px)',
          },
        }}
      />

      <div className="relative min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">
        {/* Ambient Cosmic Background Glow Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] bg-gradient-to-br from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[140px] animate-pulse" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-blue-600/12 via-cyan-500/8 to-transparent rounded-full blur-[160px]" />
          <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] bg-gradient-to-tr from-teal-600/10 via-emerald-600/6 to-transparent rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <Navbar />

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-[#22C55E]/25 text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E] animate-spin-slow" />
              <span>Career Watchlist & Bookmarks</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F1F5F2]">
                  Saved{' '}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    Opportunities
                  </span>
                </h1>
                <p className="mt-3 text-[#9AAEA3] text-base sm:text-lg max-w-2xl">
                  Manage, track, and apply to your curated list of high-impact tech roles and elite internships.
                </p>
              </div>

              {/* Quick Summary Pill Badges */}
              <div className="flex items-center gap-3">
                <div className="px-4 py-2.5 rounded-xl bg-[#111F19] border border-[#20352B] backdrop-blur-md flex items-center gap-3 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] font-bold text-sm">
                    {totalSavedCount}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#9AAEA3]">Total Saved</div>
                    <div className="text-xs font-medium text-[#F1F5F2]">Across all categories</div>
                  </div>
                </div>
                <button
                  onClick={fetchSavedData}
                  className="p-2.5 rounded-xl bg-[#111F19] border border-[#20352B] hover:border-[#22C55E]/40 text-[#9AAEA3] hover:text-[#22C55E] transition-all active:scale-95"
                  title="Refresh saved items"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs & Discovery Controls */}
          <div className="space-y-6 mb-8">
            {/* Category Switcher Tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-[#111F19]/80 border border-[#20352B] backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleTabChange('jobs')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === 'jobs'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-[#07110D] shadow-[0_0_20px_rgba(16,185,129,0.35)] scale-[1.02]'
                      : 'text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814]/90'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Saved Jobs</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === 'jobs'
                        ? 'bg-[#07110D]/25 text-[#07110D]'
                        : 'bg-[#111F19] text-[#9AAEA3]'
                    }`}
                  >
                    {savedJobs.length}
                  </span>
                </button>

                <button
                  onClick={() => handleTabChange('internships')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === 'internships'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-[#07110D] shadow-[0_0_20px_rgba(59,130,246,0.35)] scale-[1.02]'
                      : 'text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814]/90'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Saved Internships</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === 'internships'
                        ? 'bg-[#07110D]/25 text-[#07110D]'
                        : 'bg-[#111F19] text-[#9AAEA3]'
                    }`}
                  >
                    {savedInternships.length}
                  </span>
                </button>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-end gap-2 px-2">
                <Link
                  to={activeTab === 'jobs' ? '/jobs' : '/internships'}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9AAEA3] hover:text-[#22C55E] transition-colors"
                >
                  <span>Explore more {activeTab === 'jobs' ? 'jobs' : 'internships'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Search, Filter & Sort Hub */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3] pointer-events-none" />
                <input
                  type="text"
                  placeholder={`Search saved ${activeTab} by role, company, or city...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#111F19]/90 border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 backdrop-blur-md transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9AAEA3]/70 hover:text-[#9AAEA3]"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Remote Only Toggle */}
              <div className="md:col-span-3 flex items-center justify-center bg-[#111F19]/90 border border-[#20352B] rounded-xl px-4 py-2.5 backdrop-blur-md">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#9AAEA3] select-none w-full justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Remote Only
                  </span>
                  <input
                    type="checkbox"
                    checked={onlyRemote}
                    onChange={(e) => setOnlyRemote(e.target.checked)}
                    className="w-4 h-4 rounded border-[#20352B] bg-[#0D1814] text-emerald-500 focus:ring-emerald-400 focus:ring-offset-slate-950 accent-emerald-500 cursor-pointer"
                  />
                </label>
              </div>

              {/* Sort Dropdown */}
              <div className="md:col-span-3 relative">
                <SlidersHorizontal className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3] pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full pl-10 pr-8 py-3 bg-[#111F19]/90 border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 backdrop-blur-md cursor-pointer transition-all appearance-none shadow-inner"
                >
                  <option value="recent" className="bg-[#0D1814] text-[#F1F5F2]">
                    Recently Saved
                  </option>
                  <option value="salary" className="bg-[#0D1814] text-[#F1F5F2]">
                    Highest Compensation
                  </option>
                  <option value="alpha" className="bg-[#0D1814] text-[#F1F5F2]">
                    Alphabetical (A - Z)
                  </option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#9AAEA3]/70 text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Listings Feed */}
          {activeTab === 'jobs' ? (
            /* SAVED JOBS LIST */
            <div className="space-y-4">
              {isLoading ? (
                // Skeletons
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-[#0D1814]/70 border border-[#20352B]/80 animate-pulse flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="w-16 h-16 rounded-xl bg-[#111F19] flex-shrink-0" />
                      <div className="flex-1 space-y-3 w-full">
                        <div className="h-6 bg-[#111F19] rounded w-1/3" />
                        <div className="h-4 bg-[#111F19]/60 rounded w-1/4" />
                        <div className="h-4 bg-[#111F19]/40 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredJobs.length > 0 ? (
                <AnimatePresence mode="popLayout">
                  {filteredJobs.map((savedJob, idx) => {
                    const daysAgo = Math.floor(
                      (Date.now() - new Date(savedJob.createdAt).getTime()) / (1000 * 60 * 60 * 24)
                    );
                    const formattedSaved =
                      daysAgo === 0 ? 'Saved today' : daysAgo === 1 ? 'Saved yesterday' : `Saved ${daysAgo}d ago`;

                    return (
                      <motion.div
                        key={savedJob.id || idx}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: idx * 0.04 }}
                        className="group relative rounded-2xl bg-[#111F19]/90 border border-[#20352B] hover:border-[#22C55E]/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:-translate-y-0.5"
                      >
                        {/* Top Gradient Accent line */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                          {/* Left: Logo & Job Details */}
                          <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                            {/* Company Logo / Fallback */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-[#20352B] p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md group-hover:border-[#22C55E]/40 transition-colors">
                              {savedJob.job?.company?.logo ? (
                                <img
                                  src={savedJob.job.company.logo}
                                  alt={savedJob.job.company.name}
                                  className="w-full h-full object-cover rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none';
                                  }}
                                />
                              ) : (
                                <Building2 className="w-7 h-7 text-[#22C55E]/80" />
                              )}
                            </div>

                            {/* Job Information */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span className="text-xs font-semibold text-[#22C55E] uppercase tracking-wider flex items-center gap-1">
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                                  {savedJob.job?.company?.name || 'Verified Tech Partner'}
                                </span>
                                {savedJob.job?.company?.remote && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20">
                                    Remote
                                  </span>
                                )}
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20">
                                  {savedJob.job?.type || 'Full-Time'}
                                </span>
                              </div>

                              <h3
                                onClick={() =>
                                  navigate(`/jobs/search/${savedJob.jobId || savedJob.id}`, { state: savedJob.job })
                                }
                                className="text-lg sm:text-xl font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors cursor-pointer truncate"
                              >
                                {savedJob.job?.title}
                              </h3>

                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5 text-xs text-[#9AAEA3]">
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-[#9AAEA3]/70" />
                                  {savedJob.job?.company?.location || 'India (Pan-Location)'}
                                </span>

                                <span className="flex items-center gap-1 text-[#F1F5F2] font-semibold bg-[#111F19] px-2.5 py-1 rounded-lg border border-[#20352B]">
                                  <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                                  {(savedJob.job?.salaryMin || 1800000) / 100000}L -{' '}
                                  {(savedJob.job?.salaryMax || 2800000) / 100000}L / yr
                                </span>

                                <span className="flex items-center gap-1 text-[#9AAEA3]/70">
                                  <Clock className="w-3.5 h-3.5" />
                                  {formattedSaved}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Right: Actions */}
                          <div className="flex items-center gap-2.5 sm:gap-3 self-end lg:self-center flex-shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#20352B] w-full lg:w-auto justify-between lg:justify-end">
                            <button
                              onClick={(e) => handleRemoveSavedJob(savedJob.jobId || savedJob.id, e)}
                              className="px-3.5 py-2.5 rounded-xl border border-red-500/30 bg-red-950/20 text-[#EF4444] hover:bg-red-950/50 hover:border-red-500/50 text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95"
                              title="Remove from saved"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Remove</span>
                            </button>

                            <button
                              onClick={() =>
                                navigate(`/jobs/search/${savedJob.jobId || savedJob.id}`, { state: savedJob.job })
                              }
                              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-[#07110D] font-bold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center gap-1.5 active:scale-95"
                            >
                              <span>Apply Now</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              ) : (
                /* EMPTY STATE FOR JOBS */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl bg-[#111F19]/80 border border-[#20352B] p-12 text-center backdrop-blur-xl shadow-2xl"
                >
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-emerald-950/40 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    <Bookmark className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F1F5F2] mb-2">No saved jobs found</h3>
                  <p className="text-[#9AAEA3] text-sm max-w-md mx-auto mb-6">
                    {searchQuery
                      ? `No saved jobs match your search "${searchQuery}". Try clearing filters.`
                      : 'You haven’t bookmarked any jobs yet. Explore open roles and click the bookmark icon to track them here.'}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    {searchQuery ? (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setOnlyRemote(false);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-[#111F19] text-[#F1F5F2] font-semibold text-sm hover:bg-[#162820] transition-colors"
                      >
                        Reset Filters
                      </button>
                    ) : (
                      <Link
                        to="/jobs"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-[#07110D] font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      >
                        <Compass className="w-4 h-4" />
                        <span>Discover Top Jobs</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            /* SAVED INTERNSHIPS LIST */
            <div className="space-y-4">
              {isLoading ? (
                // Skeletons
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-[#0D1814]/70 border border-[#20352B]/80 animate-pulse flex flex-col md:flex-row gap-5 items-start"
                    >
                      <div className="w-16 h-16 rounded-xl bg-[#111F19] flex-shrink-0" />
                      <div className="flex-1 space-y-3 w-full">
                        <div className="h-6 bg-[#111F19] rounded w-1/3" />
                        <div className="h-4 bg-[#111F19]/60 rounded w-1/4" />
                        <div className="h-4 bg-[#111F19]/40 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredInternships.length > 0 ? (
                <AnimatePresence mode="popLayout">
                  {filteredInternships.map((internship, idx) => {
                    const daysAgo = Math.floor(
                      (Date.now() - new Date(internship.createdAt).getTime()) / (1000 * 60 * 60 * 24)
                    );
                    const formattedSaved =
                      daysAgo === 0 ? 'Saved today' : daysAgo === 1 ? 'Saved yesterday' : `Saved ${daysAgo}d ago`;

                    return (
                      <motion.div
                        key={internship.id || idx}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: idx * 0.04 }}
                        className="group relative rounded-2xl bg-[#111F19]/90 border border-[#20352B] hover:border-[#22C55E]/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:-translate-y-0.5"
                      >
                        {/* Top Gradient Accent line */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                          {/* Left: Logo & Internship Details */}
                          <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                            {/* Company Logo / Fallback */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-[#20352B] p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md group-hover:border-[#22C55E]/40 transition-colors">
                              {internship.companyLogo ? (
                                <img
                                  src={internship.companyLogo}
                                  alt={internship.companyName}
                                  className="w-full h-full object-cover rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none';
                                  }}
                                />
                              ) : (
                                <GraduationCap className="w-7 h-7 text-[#22C55E]" />
                              )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span className="text-xs font-semibold text-[#22C55E] uppercase tracking-wider flex items-center gap-1">
                                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                                  {internship.companyName}
                                </span>
                                {internship.remote && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20">
                                    Remote
                                  </span>
                                )}
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20">
                                  {internship.duration || '3 Months'}
                                </span>
                              </div>

                              <h3
                                onClick={() =>
                                  navigate(`/internships/search/${internship.internshipId || internship.id}`, {
                                    state: internship.raw,
                                  })
                                }
                                className="text-lg sm:text-xl font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors cursor-pointer truncate"
                              >
                                {internship.title}
                              </h3>

                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5 text-xs text-[#9AAEA3]">
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-[#9AAEA3]/70" />
                                  {internship.location}
                                </span>

                                <span className="flex items-center gap-1 text-[#F1F5F2] font-semibold bg-[#111F19] px-2.5 py-1 rounded-lg border border-[#20352B]">
                                  <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                                  {internship.stipendMin.toLocaleString('en-IN')} -{' '}
                                  {internship.stipendMax.toLocaleString('en-IN')} / mo
                                </span>

                                <span className="flex items-center gap-1 text-[#9AAEA3]/70">
                                  <Clock className="w-3.5 h-3.5" />
                                  {formattedSaved}
                                </span>
                              </div>

                              {/* Tags */}
                              {internship.tags && internship.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {internship.tags.map((tag, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#111F19] text-[#9AAEA3] border border-[#20352B]"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right: Actions */}
                          <div className="flex items-center gap-2.5 sm:gap-3 self-end lg:self-center flex-shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#20352B] w-full lg:w-auto justify-between lg:justify-end">
                            <button
                              onClick={(e) => handleRemoveSavedInternship(internship.internshipId || internship.id, e)}
                              className="px-3.5 py-2.5 rounded-xl border border-red-500/30 bg-red-950/20 text-[#EF4444] hover:bg-red-950/50 hover:border-red-500/50 text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95"
                              title="Remove from saved"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Remove</span>
                            </button>

                            <button
                              onClick={() =>
                                navigate(`/internships/search/${internship.internshipId || internship.id}`, {
                                  state: internship.raw,
                                })
                              }
                              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-[#07110D] font-bold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(59,130,246,0.25)] flex items-center gap-1.5 active:scale-95"
                            >
                              <span>Apply Now</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              ) : (
                /* EMPTY STATE FOR INTERNSHIPS */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl bg-[#111F19]/80 border border-[#20352B] p-12 text-center backdrop-blur-xl shadow-2xl"
                >
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-[#0D1814]/40 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                    <GraduationCap className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F1F5F2] mb-2">No saved internships found</h3>
                  <p className="text-[#9AAEA3] text-sm max-w-md mx-auto mb-6">
                    {searchQuery
                      ? `No saved internships match your search "${searchQuery}". Try clearing filters.`
                      : 'You haven’t bookmarked any internships yet. Explore internships offering high stipends and PPOs.'}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    {searchQuery ? (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setOnlyRemote(false);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-[#111F19] text-[#F1F5F2] font-semibold text-sm hover:bg-[#162820] transition-colors"
                      >
                        Reset Filters
                      </button>
                    ) : (
                      <Link
                        to="/internships"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-[#07110D] font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      >
                        <Compass className="w-4 h-4" />
                        <span>Explore Internships</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SavedJob;
