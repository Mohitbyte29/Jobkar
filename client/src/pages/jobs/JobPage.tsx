import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  IndianRupee,
  MapPin,
  Clock,
  Briefcase,
  Building2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ExternalLink,
  Bookmark,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Flame,
} from 'lucide-react';
import toTitleCase from '../../../utils/titleCase';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@/context/UserContext';
import { useJobs } from '@/context/JobsContext';
import timeAgo from '../../../utils/timeAgo';
import SplitText from '@/components/SplitText';
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

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  requirements: string;
  category: string;
  tags: string[];
  description: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  company: {
    name: string;
    logo: string;
    website: string;
  };
}

const JobPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState<userDataProfile | null>(null);
  const [applicantProfile, setApplicantProfile] = useState<Applicant | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const { jobData } = useJobs();
  const userData = location.state;
  const { user } = useUser();
  const { jobId } = useParams();

  useEffect(() => {
    const handleGetuserDataProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/me/profile`, {
          withCredentials: true,
        });
        const newres = await axios.get(
          `http://localhost:4000/api/applicant/${res.data.user.id}`,
          { withCredentials: true }
        );
        const jobRes = await axios.get(`http://localhost:4000/api/jobs/${jobId}`, {
          withCredentials: true,
        });
        setProfile(res.data.user);
        setApplicantProfile(newres.data.applicant);
        setJob(jobRes.data);
      } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
          console.error('Axios Error:', err.response?.data);
        } else {
          console.error('Unexpected Error:', err);
        }
      }
    };

    handleGetuserDataProfile();
  }, [jobId]);

  const handleClick = async () => {
    try {
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
      await axios.post(
        `http://localhost:4000/api/applications`,
        {
          userId: user?.id,
          jobId: job?.id,
          applicantId: applicantProfile?.userProfileId,
        },
        { withCredentials: true }
      );
      navigate(`/jobs/application/${job?.id}`, { state: userData });
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        console.error('Axios Error:', err.response?.data);
      } else {
        console.error('Unexpected Error:', err);
      }
      navigate(`/jobs/application/${job?.id}`, { state: userData });
    }
  };

  const handleSave = async () => {
    if (!job?.id) return;
    try {
      await axios.post(
        `http://localhost:4000/api/jobs/${job.id}/save`,
        {},
        { withCredentials: true }
      );
      toast.success('Job saved to your wishlist!', { icon: '✨' });
    } catch (err) {
      toast.error('Failed to save job');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030814] via-[#041416] to-[#030c10] text-[#F1F5F2] flex flex-col selection:bg-emerald-500 selection:text-neutral-950 font-sans relative overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0a1628',
            color: '#f8fafc',
            border: '1px solid rgba(34,197,94,0.2)',
          },
        }}
      />
      <Navbar />

      {/* Atmospheric mixed dark-green & deep blue radial glow lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-emerald-600/12 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-[#22C55E]/12 blur-[150px]" />
        <div className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full bg-[#22C55E]/12 blur-[160px]" />
        <div className="absolute bottom-1/3 -left-32 h-[460px] w-[460px] rounded-full bg-[#22C55E]/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#10b98106_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_25%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <main className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header Hero Section */}
        <section className="mb-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-950/70 to-blue-950/70 border border-[#22C55E]/30 text-[#34D399] text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>VERIFIED OPPORTUNITY</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[#34D399] font-bold">{toTitleCase(job?.type || 'Full-Time')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F1F5F2] leading-tight">
            {job?.title ? (
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
                textAlign="center"
                text={job.title}
              />
            ) : (
              'Loading Opportunity Details...'
            )}
          </h1>
        </section>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Job Details Card */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl bg-[#111F19]/85 border border-[#20352B] backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">
              {/* Card Header: Company Logo & Basic Info */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-7 border-b border-[#20352B]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-950/80 via-[#071d24] to-[#081e36] border border-[#22C55E]/30 flex items-center justify-center text-[#34D399] font-extrabold text-2xl shrink-0 shadow-inner">
                    {job?.company?.name ? job.company.name.charAt(0) : 'J'}
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-2xl font-bold tracking-tight text-[#F1F5F2]">
                      {job?.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#22C55E] font-semibold">
                      <Building2 className="w-4 h-4 text-[#22C55E]" />
                      <span>{job?.company?.name || 'Insight AI'}</span>
                      <span className="text-[#9AAEA3]">•</span>
                      <span className="text-[#9AAEA3] text-xs font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span>{job?.location} (Remote Available)</span>
                      </span>
                    </div>
                  </div>
                </div>

                <span className="text-xs text-[#9AAEA3] font-medium">
                  {job?.updatedAt ? timeAgo(job.updatedAt) : 'Recently updated'}
                </span>
              </div>

              {/* Tags / Chips Section */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0D1814]/60 border border-[#22C55E]/30 text-[#34D399] text-xs font-bold flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>{toTitleCase(job?.type || 'Full-time')}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[#34D399] text-xs font-bold">
                  {toTitleCase(job?.category || 'Engineering')}
                </span>
                {job?.tags &&
                  job.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#111F19]/[0.04] border border-[#20352B] text-[#9AAEA3] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              {/* Compensation Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#061828]/50 to-blue-950/40 border border-[#22C55E]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#34D399] block mb-1">
                    ANNUAL COMPENSATION PACKAGE
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] flex items-center gap-1">
                    <IndianRupee className="w-6 h-6 text-[#22C55E]" />
                    <span>
                      {job ? `${job.salaryMin / 1000}k - ${job.salaryMax / 1000}k` : 'Competitive'}
                    </span>
                    <span className="text-sm font-normal text-[#9AAEA3]">/ year + equity</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleSave}
                    className="flex-1 sm:flex-none h-11 px-4 rounded-xl bg-[#111F19]/[0.04] hover:bg-[#22C55E]/15 border border-[#20352B] hover:border-[#22C55E]/30 text-[#9AAEA3] hover:text-[#34D399] font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Save Job</span>
                  </button>

                  <button
                    onClick={handleClick}
                    className="flex-1 sm:flex-none h-11 px-6 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#34D399] hover:from-emerald-400 hover:to-cyan-300 text-neutral-950 font-extrabold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(34,197,94,0.45)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Job Description Content */}
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-[#F1F5F2] uppercase tracking-wide">
                  Role Overview
                </h3>
                <p className="text-[#9AAEA3] text-sm sm:text-base leading-relaxed">
                  {job?.description ||
                    'Join our fast-growing engineering team designing scalable platforms, high-performance web systems, and modern AI pipelines.'}
                </p>
              </div>

              {/* Requirements */}
              {job?.requirements && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-bold text-[#F1F5F2] uppercase tracking-wide">
                    Key Requirements & Experience
                  </h3>
                  <div className="p-4 rounded-xl bg-[#111F19]/[0.03] border border-[#20352B] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    <p className="text-[#9AAEA3] text-sm leading-relaxed">{job.requirements}</p>
                  </div>
                </div>
              )}

              {/* Benefits Bento */}
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-[#F1F5F2] uppercase tracking-wide">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Competitive Equity & Bonuses', desc: 'Direct ownership stake in company growth' },
                    { label: 'Premium Health Coverage', desc: 'Comprehensive medical, dental, and wellness plans' },
                    { label: 'Remote Flexibility & Stipend', desc: 'Work from anywhere with dedicated hardware setup budget' },
                    { label: 'Continuous Learning Budget', desc: 'Annual allowance for conferences, courses, and books' },
                  ].map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-4 rounded-xl bg-[#111F19]/[0.03] border border-[#20352B] space-y-1"
                    >
                      <div className="text-sm font-bold text-[#F1F5F2] flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span>{benefit.label}</span>
                      </div>
                      <div className="text-xs text-[#9AAEA3]">{benefit.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Info & Related Jobs */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Company Info Box */}
            <div className="rounded-3xl bg-[#111F19]/85 border border-[#22C55E]/15 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#20352B]">
                <div>
                  <h4 className="text-lg font-bold text-[#F1F5F2]">
                    {job?.company?.name || 'Company Profile'}
                  </h4>
                  <p className="text-xs text-[#34D399] font-semibold">Verified Hiring Partner</p>
                </div>
                {job?.company?.website && (
                  <a
                    href={job.company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-[#111F19]/[0.04] border border-[#20352B] hover:border-[#22C55E]/40 text-[#9AAEA3] hover:text-[#34D399] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="space-y-3 text-xs text-[#9AAEA3]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#22C55E]" />
                  <span>{job?.location || 'New York, NY / Remote'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#22C55E]" />
                  <span>500 - 1,000 Employees</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                  <span>100% Vetted Employer Guarantee</span>
                </div>
              </div>

              <p className="text-xs text-[#9AAEA3] leading-relaxed pt-3 border-t border-[#20352B]">
                {job?.company?.description ||
                  'Global leader in technology innovation, building cutting-edge engineering systems and intelligent software products.'}
              </p>
            </div>

            {/* Other Live Opportunities */}
            <div className="rounded-3xl bg-[#111F19]/85 border border-[#22C55E]/15 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#22C55E] flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Other Active Openings</span>
              </h4>

              <div className="space-y-3">
                {jobData.slice(0, 3).map((otherJob) => (
                  <div
                    key={otherJob.id}
                    onClick={() => {
                      navigate(`/jobs/search/${otherJob.id}`, { state: otherJob });
                    }}
                    className="p-3.5 rounded-xl bg-[#111F19]/[0.03] border border-[#20352B] hover:border-[#22C55E]/40 transition-all cursor-pointer space-y-1.5 group"
                  >
                    <div className="text-sm font-bold text-[#F1F5F2] group-hover:text-[#34D399] transition-colors">
                      {otherJob.title}
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#9AAEA3]">
                      <span>{otherJob.company?.name}</span>
                      <span className="text-[#22C55E] font-semibold">
                        ₹{otherJob.salaryMin / 1000}k - {otherJob.salaryMax / 1000}k
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobPage;
