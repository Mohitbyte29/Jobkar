import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  IndianRupee,
  GraduationCap,
  Building2,
  MapPin,
  Sparkles,
  Zap,
  Plus,
  X,
  Calendar,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Globe,
  Award,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCompany } from '@/context/CompanyContext';
import { useUser } from '@/context/UserContext';

interface Internship {
  title: string;
  category: string;
  openings: number;
  duration: number;
  workType: string;
  city: string;
  country: string;
  salaryMin: number;
  salaryMax: number;
  requirements: string;
  description: string;
  type: string;
}

const PostInternship = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [input, setInput] = useState('');
  const { user } = useUser();
  const { companyData } = useCompany();
  const [tags, setTags] = useState<string[]>(['React', 'Python', 'FastAPI']);
  const [suggestedTags] = useState([
    'JavaScript',
    'React',
    'Next.js',
    'Python',
    'FastAPI',
    'UI Design',
    'Machine Learning',
    'PostgreSQL',
    'Docker',
    'Node.js',
  ]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [internship, setInternship] = useState<Internship>({
    title: '',
    category: 'TECHNOLOGY_SOFTWARE',
    openings: 2,
    duration: 6,
    workType: 'REMOTE',
    city: '',
    country: 'India',
    salaryMin: 35000,
    salaryMax: 55000,
    requirements: '',
    description: '',
    type: 'Paid',
  });

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
    setInternship((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredCompany = companyData?.filter((comp) => comp.UserId === user?.id) || companyData;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(
        '/api/internships',
        {
          ...internship,
          tags: tags,
          companyId: Number(company) || (filteredCompany && filteredCompany[0]?.id) || 1,
          remote: internship.workType === 'REMOTE',
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Internship opportunity published successfully!', { duration: 3000 });
      navigate('/internships');
    } catch (err) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || 'Failed to post internship');
      } else {
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

      <div className="relative min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] overflow-x-hidden font-sans">
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 via-cyan-500/8 to-transparent rounded-full blur-[150px]" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[160px]" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1814]/60 border border-[#22C55E]/25 text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>University & Early Career Talent</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F2] tracking-tight">
              Post an{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Internship
              </span>
            </h1>
            <p className="mt-3 text-[#9AAEA3] text-base sm:text-lg">
              Create structured, high-mentorship learning opportunities for rising tech talent and future leaders.
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
                  {/* Company & Title */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#22C55E]" />
                        Company Profile
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all cursor-pointer"
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
                        <GraduationCap className="w-3.5 h-3.5 text-[#22C55E]" />
                        Internship Title
                      </label>
                      <input
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                        placeholder="e.g. Software Engineering Intern"
                        type="text"
                        onChange={handleInputChange}
                        name="title"
                        value={internship.title}
                        required
                      />
                    </div>
                  </div>

                  {/* Category & Openings */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Category
                      </label>
                      <select
                        onChange={handleInputChange}
                        name="category"
                        value={internship.category}
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all cursor-pointer"
                      >
                        <option value="TECHNOLOGY_SOFTWARE" className="bg-[#0D1814]">
                          Technology Software
                        </option>
                        <option value="CREATIVE_MEDIA" className="bg-[#0D1814]">
                          Design & UI/UX
                        </option>
                        <option value="MARKETING" className="bg-[#0D1814]">
                          Marketing & Growth
                        </option>
                        <option value="FINANCE" className="bg-[#0D1814]">
                          Finance & FinTech
                        </option>
                        <option value="HEALTHCARE" className="bg-[#0D1814]">
                          Healthcare
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
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Number of Openings
                      </label>
                      <input
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                        min={1}
                        type="number"
                        value={internship.openings}
                        onChange={handleInputChange}
                        name="openings"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Duration
                      </label>
                      <select
                        onChange={handleInputChange}
                        name="duration"
                        value={internship.duration}
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all cursor-pointer"
                      >
                        <option value={1} className="bg-[#0D1814]">
                          1 Month
                        </option>
                        <option value={2} className="bg-[#0D1814]">
                          2 Months
                        </option>
                        <option value={3} className="bg-[#0D1814]">
                          3 Months
                        </option>
                        <option value={6} className="bg-[#0D1814]">
                          6 Months
                        </option>
                        <option value={12} className="bg-[#0D1814]">
                          12 Months
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Work Mode & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Work Mode
                      </label>
                      <select
                        onChange={handleInputChange}
                        name="workType"
                        value={internship.workType}
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all cursor-pointer"
                      >
                        <option value="REMOTE" className="bg-[#0D1814]">
                          Remote
                        </option>
                        <option value="HYBRID" className="bg-[#0D1814]">
                          Hybrid
                        </option>
                        <option value="ONSITE" className="bg-[#0D1814]">
                          On-site
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                        City
                      </label>
                      <input
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                        placeholder="e.g. Bangalore"
                        type="text"
                        onChange={handleInputChange}
                        name="city"
                        value={internship.city}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Country
                      </label>
                      <input
                        className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                        placeholder="e.g. India"
                        type="text"
                        onChange={handleInputChange}
                        name="country"
                        value={internship.country}
                      />
                    </div>
                  </div>

                  {/* Monthly Stipend */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                      <IndianRupee className="w-3.5 h-3.5 text-[#22C55E]" />
                      Monthly Stipend Range (INR)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3] text-xs font-bold">
                          ₹ Min / mo
                        </span>
                        <input
                          className="w-full pl-20 pr-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                          placeholder="e.g. 35,000"
                          type="number"
                          onChange={handleInputChange}
                          value={internship.salaryMin}
                          name="salaryMin"
                          required
                        />
                      </div>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3] text-xs font-bold">
                          ₹ Max / mo
                        </span>
                        <input
                          className="w-full pl-20 pr-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                          placeholder="e.g. 55,000"
                          type="number"
                          onChange={handleInputChange}
                          value={internship.salaryMax}
                          name="salaryMax"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Required Skills */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Required Skills & Keywords
                    </label>
                    <div className="p-3 bg-[#111F19] border border-[#20352B] rounded-xl space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#0D1814]/60 border border-[#22C55E]/30 text-[#34D399]"
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
                          className="flex-1 bg-[#111F19]/90 border border-[#20352B] rounded-lg px-3 py-2 text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60"
                          placeholder="Add skill tag (e.g. TypeScript, PyTorch) and press Enter..."
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
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#07110D] border border-[#20352B] text-[#9AAEA3] hover:text-[#34D399] hover:border-[#22C55E]/30 transition-colors"
                          >
                            +{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Eligibility & Candidate Requirements
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all"
                      type="text"
                      placeholder="e.g. Pursuing B.Tech / M.Tech in Computer Science or related degree, graduating in 2025/2026"
                      onChange={handleInputChange}
                      name="requirements"
                      value={internship.requirements}
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Internship Description & Learning Outcomes
                    </label>
                    <textarea
                      className="w-full p-4 bg-[#111F19] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-slate-500 focus:outline-none focus:border-[#22C55E]/60 focus:ring-1 focus:ring-[#22C55E]/40 transition-all resize-y min-h-[140px]"
                      placeholder="Describe what the intern will learn, the projects they will build, and mentorship provided..."
                      rows={5}
                      onChange={handleInputChange}
                      name="description"
                      value={internship.description}
                      required
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-4 border-t border-[#20352B] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => navigate('/internships')}
                      className="text-xs font-semibold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors"
                    >
                      Cancel & Return
                    </button>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-[#07110D] font-bold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 active:scale-95 cursor-pointer disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Publishing...' : 'Publish Internship Opportunity'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Internship Guidance */}
              <div className="p-6 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F1F5F2]">Mentorship Guidelines</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 space-y-1">
                    <div className="font-bold text-[#22C55E]">01. Highlight Learning Outcomes</div>
                    <p className="text-[#9AAEA3] leading-relaxed">
                      Students prioritize skill acquisition and mentorship. Clearly outline what they will learn.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 space-y-1">
                    <div className="font-bold text-[#22C55E]">02. State Conversion Potential</div>
                    <p className="text-[#9AAEA3] leading-relaxed">
                      Mention whether full-time Pre-Placement Offers (PPOs) are offered based on internship performance.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0D1814]/90 border border-[#20352B]/80 space-y-1">
                    <div className="font-bold text-[#22C55E]">03. Realistic Expectations</div>
                    <p className="text-[#9AAEA3] leading-relaxed">
                      Focus on fundamentals, enthusiasm, and eagerness to build rather than expecting years of commercial experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Badge Guarantee */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-950 to-blue-950/40 border border-[#22C55E]/20 backdrop-blur-xl space-y-3">
                <div className="flex items-center gap-2 text-[#22C55E] font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Campus & University Network</span>
                </div>
                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  Your internship listing will be broadcast directly to pre-screened engineering students and bootcamp
                  graduates from premier institutes.
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

export default PostInternship;