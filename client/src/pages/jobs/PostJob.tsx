import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  IndianRupee,
  Briefcase,
  Building2,
  MapPin,
  Sparkles,
  Zap,
  Plus,
  X,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCompany } from '@/context/CompanyContext';
import { useUser } from '@/context/UserContext';

interface Job {
  category: string;
  city: string;
  country: string;
  status: string;
  description: string;
  requirements: string;
  title: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
}

export const PostJob = () => {
  const [remote, setRemote] = useState(false);
  const [company, setCompany] = useState<string>('');
  const { companyData } = useCompany();
  const { user } = useUser();
  const [input, setInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Node.js']);
  const [suggestedTags] = useState([
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Tailwind CSS',
    'PostgreSQL',
    'AWS',
    'GraphQL',
    'UI/UX',
  ]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [job, setJob] = useState<Job>({
    category: 'TECHNOLOGY_SOFTWARE',
    title: '',
    type: 'FULL_TIME',
    salaryMin: 1200000,
    salaryMax: 2400000,
    city: '',
    country: '',
    status: 'ACTIVE',
    description: '',
    requirements: '',
  });

  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    if (tags.includes(value)) {
      setInput('');
      return;
    }

    setTags([...tags, value]);
    setInput('');
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const addSuggestedTag = (tag: string) => {
    if (tags.includes(tag)) return;
    setTags([...tags, tag]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const filteredCompany = companyData?.filter((comp) => comp.UserId === user?.id) || companyData;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(
        '/api/jobs',
        {
          ...job,
          remote: remote,
          companyId: Number(company) || (filteredCompany && filteredCompany[0]?.id) || 1,
          tags: tags,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Job posted successfully!', { duration: 3000 });
      navigate('/jobs');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Error posting job:', err.response?.data);
        toast.error('Failed to post job');
      } else {
        console.error('Unexpected error:', err);
        toast.error('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[150px]" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-blue-600/12 via-cyan-500/8 to-transparent rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <Navbar />

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-[#22C55E]/25 text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Employer Recruitment Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F2] tracking-tight">
              Create a{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Job Opening
              </span>
            </h1>
            <p className="mt-3 text-[#9AAEA3] text-base sm:text-lg">
              Attract and hire world-class talent with a high-impact, verified job posting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section (8 cols) */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-[#111F19]/90 border border-[#20352B] p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Select Company & Job Title */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#22C55E]" />
                        Company Profile
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all cursor-pointer"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      >
                        <option value="" className="bg-[#0D1814]">
                          Select Registered Company
                        </option>
                        {filteredCompany?.map((comp) => (
                          <option key={comp.id} value={comp.id} className="bg-[#0D1814]">
                            {comp.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#22C55E]" />
                        Job Title
                      </label>
                      <input
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all"
                        placeholder="e.g. Senior Frontend Architect"
                        type="text"
                        onChange={handleInputChange}
                        name="title"
                        value={job.title}
                        required
                      />
                    </div>
                  </div>

                  {/* Category & Remote Switch */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Job Category
                      </label>
                      <select
                        onChange={handleInputChange}
                        name="category"
                        value={job.category}
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all cursor-pointer"
                      >
                        <option value="TECHNOLOGY_SOFTWARE" className="bg-[#0D1814]">
                          Technology & Software
                        </option>
                        <option value="CREATIVE_MEDIA" className="bg-[#0D1814]">
                          Creative & UI/UX Design
                        </option>
                        <option value="MARKETING" className="bg-[#0D1814]">
                          Growth & Marketing
                        </option>
                        <option value="HEALTHCARE" className="bg-[#0D1814]">
                          HealthCare & BioTech
                        </option>
                        <option value="FINANCE" className="bg-[#0D1814]">
                          Finance & FinTech
                        </option>
                        <option value="BUSINESS_OPERATIONS" className="bg-[#0D1814]">
                          Business Operations
                        </option>
                        <option value="OTHER" className="bg-[#0D1814]">
                          Other
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                          Location & Mode
                        </label>
                        <button
                          type="button"
                          onClick={() => setRemote(!remote)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                            remote
                              ? 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40'
                              : 'bg-[#0D1814] text-[#9AAEA3] border border-[#20352B]'
                          }`}
                        >
                          <Globe className="w-3 h-3" />
                          <span>{remote ? 'Remote Allowed' : 'On-Site Only'}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all"
                          placeholder="City (e.g. Bangalore)"
                          type="text"
                          onChange={handleInputChange}
                          name="city"
                          value={job.city}
                        />
                        <input
                          className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all"
                          placeholder="Country (e.g. India)"
                          type="text"
                          onChange={handleInputChange}
                          name="country"
                          value={job.country}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Type & Status */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Employment Type
                      </label>
                      <select
                        onChange={handleInputChange}
                        name="type"
                        value={job.type}
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all cursor-pointer"
                      >
                        <option value="FULL_TIME" className="bg-[#0D1814]">
                          Full-Time
                        </option>
                        <option value="PART_TIME" className="bg-[#0D1814]">
                          Part-Time
                        </option>
                        <option value="CONTRACT" className="bg-[#0D1814]">
                          Contract
                        </option>
                        <option value="REMOTE" className="bg-[#0D1814]">
                          Remote Only
                        </option>
                        <option value="INTERN" className="bg-[#0D1814]">
                          Internship
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Listing Status
                      </label>
                      <select
                        onChange={handleInputChange}
                        name="status"
                        value={job.status}
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all cursor-pointer"
                      >
                        <option value="ACTIVE" className="bg-[#0D1814]">
                          Active (Live Now)
                        </option>
                        <option value="DRAFT" className="bg-[#0D1814]">
                          Draft
                        </option>
                        <option value="CLOSED" className="bg-[#0D1814]">
                          Closed
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Compensation Range */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                      <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                      Annual Compensation Range (INR)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3] text-xs font-bold">
                          ₹ Min
                        </span>
                        <input
                          className="w-full pl-12 pr-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all"
                          placeholder="e.g. 18,00,000"
                          type="number"
                          onChange={handleInputChange}
                          value={job.salaryMin}
                          name="salaryMin"
                          required
                        />
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3] text-xs font-bold">
                          ₹ Max
                        </span>
                        <input
                          className="w-full pl-12 pr-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all"
                          placeholder="e.g. 28,00,000"
                          type="number"
                          onChange={handleInputChange}
                          value={job.salaryMax}
                          name="salaryMax"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills / Tags */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Required Skills & Keywords
                    </label>
                    <div className="p-3 bg-[#111F19] border border-[#20352B] rounded-xl space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-950/60 border border-emerald-500/30 text-[#34D399]"
                          >
                            <span>#{tag}</span>
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="hover:text-[#EF4444] transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          className="flex-1 bg-[#111F19]/90 border border-[#20352B] rounded-lg px-3 py-2 text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]"
                          placeholder="Add custom skill (e.g. Docker, Rust) and press Enter..."
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (input.trim()) {
                              addSuggestedTag(input.trim());
                              setInput('');
                            }
                          }}
                          className="px-3.5 py-2 rounded-lg bg-[#111F19] hover:bg-[#162820] text-[#F1F5F2] text-xs font-bold flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] font-semibold text-[#9AAEA3] uppercase tracking-wider mr-1">
                          Suggested:
                        </span>
                        {suggestedTags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => addSuggestedTag(tag)}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#07110D] border border-[#20352B] text-[#9AAEA3] hover:text-[#34D399] hover:border-emerald-500/30 transition-colors"
                          >
                            +{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Detailed Role Description
                    </label>
                    <textarea
                      className="w-full p-4 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all resize-y min-h-[140px]"
                      placeholder="Outline the mission, day-to-day responsibilities, and expected deliverables for this position..."
                      rows={5}
                      onChange={handleInputChange}
                      name="description"
                      value={job.description}
                      required
                    />
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Candidate Qualifications & Experience
                    </label>
                    <textarea
                      className="w-full p-4 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all resize-y min-h-[120px]"
                      placeholder="e.g. 4+ years of React architecture, strong background in distributed systems, excellent communication..."
                      rows={4}
                      onChange={handleInputChange}
                      name="requirements"
                      value={job.requirements}
                      required
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-4 border-t border-[#20352B] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => navigate('/jobs')}
                      className="text-xs font-semibold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors"
                    >
                      Cancel & Return
                    </button>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-[#07110D] font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 active:scale-95 cursor-pointer disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Publishing...' : 'Publish Job Opening'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Posting Best Practices */}
              <div className="p-6 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F1F5F2]">Posting Best Practices</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 space-y-1">
                    <div className="font-bold text-[#22C55E]">01. Specific Role Titles</div>
                    <p className="text-[#9AAEA3] leading-relaxed">
                      Titles like "Senior Frontend Architect" attract 45% higher quality candidates than broad titles.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 space-y-1">
                    <div className="font-bold text-[#22C55E]">02. Transparent Compensation</div>
                    <p className="text-[#9AAEA3] leading-relaxed">
                      List accurate salary bands. Listings with transparent compensation receive 3x more qualified
                      applications.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 space-y-1">
                    <div className="font-bold text-[#22C55E]">03. Concrete Deliverables</div>
                    <p className="text-[#9AAEA3] leading-relaxed">
                      Specify the projects and technologies the candidate will be expected to tackle in their first 90
                      days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Employer Trust Guarantee */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-teal-950/40 border border-[#22C55E]/20 backdrop-blur-xl space-y-3">
                <div className="flex items-center gap-2 text-[#22C55E] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Jobkar Verified Partner</span>
                </div>
                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  Your job listing will be instantly distributed to thousands of active verified software engineers, UI/UX
                  designers, and engineering graduates.
                </p>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
