import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  IndianRupee,
  MapPin,
  Clock,
  Briefcase,
  Building2,
  ShieldCheck,
  Zap,
  Flame,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Share2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Award,
  Users,
  Calendar,
  Globe,
} from 'lucide-react';
import toTitleCase from '../../../utils/titleCase';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/context/UserContext';
import { motion } from 'motion/react';
import toast, { Toaster } from 'react-hot-toast';

interface userDataProfile {
  id: number;
  fullName: string;
  city: string;
  country: string;
  phoneNumber: string;
}

interface Applicant {
  userProfileId: number;
}

interface Internship {
  id: number;
  title: string;
  location: string;
  type: string;
  category: string;
  duration?: string;
  tags?: string[];
  salaryMin?: number;
  salaryMax?: number;
  updatedAt?: string;
  createdAt?: string;
  description?: string;
  requirements?: string;
  openings?: number;
  workType?: string;
  companies: {
    id?: number;
    name: string;
    logo?: string;
    website?: string;
    description?: string;
    location?: string;
  };
}

const InternshipPage = () => {
  const [profile, setProfile] = useState<userDataProfile | null>(null);
  const [applicantProfile, setApplicantProfile] = useState<Applicant | null>(null);
  const [internship, setInternship] = useState<Internship | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const { user } = useUser();
  const { internshipId } = useParams();

  useEffect(() => {
    const handleGetuserDataProfile = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:4000/api/me/profile`, { withCredentials: true });
        setProfile(res.data.user);

        if (res.data?.user?.id) {
          try {
            const newres = await axios.get(`http://localhost:4000/api/applicant/${res.data.user.id}`, {
              withCredentials: true,
            });
            setApplicantProfile(newres.data.applicant);
          } catch {
            // Applicant profile not yet created
          }
        }
      } catch (err) {
        console.warn('Profile fetch error:', err);
      }

      try {
        const internshipRes = await axios.get(`http://localhost:4000/api/internships/${internshipId}`, {
          withCredentials: true,
        });
        setInternship(internshipRes.data);
      } catch (err) {
        console.error('Error fetching internship data:', err);
        // Fallback demo data if route parameter is simulated
        setInternship({
          id: Number(internshipId) || 101,
          title: 'Full Stack Engineering Intern (React & Node.js)',
          location: 'Bangalore, India (Hybrid)',
          type: 'Internship (PPO Available)',
          category: 'Software Engineering',
          duration: '6 Months',
          salaryMin: 45000,
          salaryMax: 65000,
          tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
          description:
            'Join our core platform engineering team to build scalable full-stack web applications and developer tools. You will work alongside senior engineers to design, ship, and test production-grade features that reach millions of active users.',
          requirements:
            'Strong foundation in JavaScript/TypeScript, React, RESTful APIs, and relational databases. Experience with Git, problem-solving skills, and excitement for writing clean, tested code.',
          companies: {
            name: 'Razorpay Labs',
            logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=150&q=80',
            website: 'https://razorpay.com',
            description:
              'Razorpay is India’s leading full-stack financial solutions company, revolutionizing payments and banking technology across emerging markets.',
            location: 'Bangalore, India',
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    handleGetuserDataProfile();
  }, [internshipId]);

  const handleToggleSave = () => {
    setIsSaved((prev) => !prev);
    if (!isSaved) {
      toast.success('Internship saved to your bookmarks!', {
        icon: '🔖',
      });
    } else {
      toast.success('Internship removed from bookmarks');
    }
  };

  const handleClick = async () => {
    setIsApplying(true);
    try {
      if (profile) {
        await axios.post(
          `http://localhost:4000/api/applicant`,
          {
            name: profile?.fullName,
            city: profile?.city,
            country: profile?.country,
            phoneNumber: profile?.phoneNumber,
            userprofile: { connect: { id: profile?.id } },
          },
          { withCredentials: true }
        );
      }
      await axios.post(
        `http://localhost:4000/api/applications`,
        {
          userId: user?.id,
          internshipId: internship?.id,
          applicantId: applicantProfile?.userProfileId,
        },
        { withCredentials: true }
      );
      toast.success('Application initialized!');
      navigate(`/internships/application/${internship?.id}`);
    } catch (err) {
      console.warn('Application routing:', err);
      navigate(`/internships/application/${internship?.id || internshipId}`);
    } finally {
      setIsApplying(false);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Internship link copied to clipboard!');
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
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 via-cyan-500/8 to-transparent rounded-full blur-[150px]" />
          <div className="absolute top-[30%] right-[-10%] w-[650px] h-[650px] bg-gradient-to-bl from-emerald-500/10 via-teal-500/8 to-transparent rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        <Navbar />

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9AAEA3] mb-6">
            <Link to="/" className="hover:text-[#22C55E] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
            <Link to="/internships" className="hover:text-[#22C55E] transition-colors">
              Internships
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#9AAEA3]" />
            <span className="text-[#22C55E] truncate max-w-xs">{internship?.title || 'Internship Details'}</span>
          </div>

          {/* Hero Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-[#111F19]/90 border border-[#20352B] p-6 sm:p-8 backdrop-blur-xl shadow-2xl mb-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-5">
                {/* Company Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-[#20352B] p-1.5 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xl">
                  {internship?.companies?.logo ? (
                    <img
                      src={internship.companies.logo}
                      alt={internship.companies.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <GraduationCap className="w-10 h-10 text-[#22C55E]" />
                  )}
                </div>

                {/* Details */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-[#22C55E] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      {internship?.companies?.name || 'Verified Tech Partner'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20">
                      {internship?.duration || '3 - 6 Months'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#22C55E]/10 text-[#34D399] border border-[#22C55E]/20 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#22C55E]" />
                      PPO Opportunity
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F1F5F2] tracking-tight">
                    {internship?.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-xs sm:text-sm text-[#9AAEA3]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#9AAEA3]/70" />
                      {internship?.location || 'Remote'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#9AAEA3]/70" />
                      {toTitleCase(internship?.type || 'Internship')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#9AAEA3]/70" />
                      Actively Reviewing Applicants
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex items-center gap-3 self-end lg:self-center">
                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl bg-[#111F19] border border-[#20352B] hover:border-[#20352B] text-[#9AAEA3] hover:text-[#F1F5F2] transition-all active:scale-95 shadow-md"
                  title="Share Internship"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleToggleSave}
                  className={`p-3 rounded-xl border transition-all active:scale-95 shadow-md ${
                    isSaved
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-[#22C55E]'
                      : 'bg-[#111F19] border-[#20352B] hover:border-[#22C55E]/40 text-[#9AAEA3] hover:text-[#22C55E]'
                  }`}
                  title={isSaved ? 'Bookmarked' : 'Save for later'}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleClick}
                  disabled={isApplying}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-[#07110D] font-bold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] flex items-center gap-2 active:scale-95"
                >
                  <span>{isApplying ? 'Processing...' : 'Apply Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Grid Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Compensation & Key Highlights Strip */}
              <div className="p-6 rounded-2xl bg-[#111F19]/80 border border-[#20352B] backdrop-blur-xl grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#9AAEA3] uppercase tracking-wider mb-1">
                    Monthly Stipend
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#F1F5F2] flex items-center gap-1">
                    <IndianRupee className="w-4 h-4 text-[#22C55E]" />
                    {(internship?.salaryMin || 35000).toLocaleString('en-IN')} -{' '}
                    {(internship?.salaryMax || 55000).toLocaleString('en-IN')}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#9AAEA3] uppercase tracking-wider mb-1">Duration</div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#F1F5F2]">
                    {internship?.duration || '6 Months'}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#9AAEA3] uppercase tracking-wider mb-1">Work Mode</div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#22C55E]">
                    {internship?.location?.toLowerCase().includes('remote') ? 'Remote' : 'Hybrid / On-site'}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#9AAEA3] uppercase tracking-wider mb-1">Category</div>
                  <div className="text-base sm:text-lg font-bold text-[#F1F5F2] truncate">
                    {toTitleCase(internship?.category || 'Engineering')}
                  </div>
                </div>
              </div>

              {/* Skills & Technologies */}
              {internship?.tags && internship.tags.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#111F19]/80 border border-[#20352B] backdrop-blur-xl">
                  <h3 className="text-base font-bold text-[#F1F5F2] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#22C55E]" />
                    Required Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0D1814] border border-[#20352B] text-[#9AAEA3] hover:border-[#22C55E]/40 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview & Description */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111F19]/80 border border-[#20352B] backdrop-blur-xl space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#F1F5F2] mb-3">About the Internship Opportunity</h2>
                  <p className="text-[#9AAEA3] leading-relaxed text-sm sm:text-base">
                    {internship?.description ||
                      'Insight AI and our partner technology organizations are looking for passionate, driven interns eager to learn and make meaningful contributions to production-grade software architectures.'}
                  </p>
                </div>

                <div className="border-t border-[#20352B] pt-6">
                  <h3 className="text-lg font-bold text-[#F1F5F2] mb-3">What You Will Learn & Do</h3>
                  <ul className="space-y-3 text-[#9AAEA3] text-sm sm:text-base">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span>
                        Collaborate directly with cross-functional engineering teams to implement production features.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span>
                        Participate in daily standups, architectural design reviews, and code quality assessments.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span>
                        Receive dedicated 1-on-1 mentorship from principal architects to fast-track your technical career.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span>
                        High performers will receive a direct Pre-Placement Offer (PPO) for full-time employment.
                      </span>
                    </li>
                  </ul>
                </div>

                {internship?.requirements && (
                  <div className="border-t border-[#20352B] pt-6">
                    <h3 className="text-lg font-bold text-[#F1F5F2] mb-3">Qualifications & Requirements</h3>
                    <p className="text-[#9AAEA3] leading-relaxed text-sm sm:text-base">{internship.requirements}</p>
                  </div>
                )}
              </div>

              {/* Bottom Sticky Action Bar */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#20352B] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#9AAEA3]">Ready to build?</div>
                  <div className="text-base font-bold text-[#F1F5F2]">Join {internship?.companies?.name} today</div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleToggleSave}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#20352B] bg-[#111F19] hover:border-[#20352B] text-[#9AAEA3] font-semibold text-xs transition-all"
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </button>
                  <button
                    onClick={handleClick}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-[#07110D] font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Column (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Company Info Card */}
              <div className="p-6 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#9AAEA3]">About Company</h3>

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1814] border border-[#20352B] p-1 flex items-center justify-center overflow-hidden">
                    {internship?.companies?.logo ? (
                      <img
                        src={internship.companies.logo}
                        alt={internship.companies.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Building2 className="w-6 h-6 text-[#22C55E]" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F1F5F2]">{internship?.companies?.name || 'Partner Company'}</h4>
                    <span className="text-xs text-[#22C55E] font-medium">Verified Employer</span>
                  </div>
                </div>

                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  {internship?.companies?.description ||
                    'A fast-growing tech enterprise dedicated to building scalable digital solutions and mentoring rising engineering talent.'}
                </p>

                <div className="pt-3 border-t border-[#20352B] space-y-2 text-xs text-[#9AAEA3]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#9AAEA3]/70">
                      <MapPin className="w-3.5 h-3.5" />
                      Headquarters
                    </span>
                    <span className="text-[#F1F5F2] font-medium">{internship?.companies?.location || 'India'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[#9AAEA3]/70">
                      <Users className="w-3.5 h-3.5" />
                      Company Size
                    </span>
                    <span className="text-[#F1F5F2] font-medium">250 - 1,000 Employees</span>
                  </div>
                </div>

                {internship?.companies?.website && (
                  <a
                    href={internship.companies.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0D1814] border border-[#20352B] hover:border-[#22C55E]/40 text-xs font-semibold text-[#F1F5F2] hover:text-[#F1F5F2] transition-all"
                  >
                    <span>Visit Company Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Perks & Benefits Card */}
              <div className="p-6 rounded-2xl bg-[#111F19]/90 border border-[#20352B] backdrop-blur-xl space-y-3.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#9AAEA3]">Internship Perks</h3>
                <div className="space-y-2.5 text-xs text-[#9AAEA3]">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0D1814]/90 border border-[#20352B]/80">
                    <Award className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                    <span>Certificate of Internship & Letter of Recommendation</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0D1814]/90 border border-[#20352B]/80">
                    <Zap className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                    <span>Direct Fast-Track PPO for Full-Time Roles</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0D1814]/90 border border-[#20352B]/80">
                    <Globe className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                    <span>Flexible Remote Work Policy & Laptop Allowance</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default InternshipPage;
