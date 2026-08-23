import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  FileSearch,
  Users,
  Video,
  Clock,
  ArrowRight,
  Compass,
  LayoutDashboard,
} from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 flex flex-col items-center">
        {/* Celebration Header */}
        <div className="text-center max-w-2xl mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[#22C55E]/20 blur-xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-full bg-[#22C55E]/15 border-2 border-[#22C55E] flex items-center justify-center text-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <CheckCircle2 className="w-14 h-14" />
              </div>
            </div>
          </div>
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-3 py-1 rounded-full mb-3">
            Application Received
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F5F2] tracking-tight mb-3">
            Application Submitted Successfully!
          </h1>
          <p className="text-sm text-[#9AAEA3] leading-relaxed max-w-lg mx-auto">
            Thank you for applying. Your profile, resume, and experience details have been delivered directly to the hiring team.
          </p>
        </div>

        {/* Bento Grid: Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-10">
          {/* Step 1 */}
          <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] flex flex-col items-start gap-3 hover:border-[#22C55E]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#F1F5F2]">1. Profile Review</h3>
            <p className="text-xs text-[#9AAEA3] leading-relaxed">
              The hiring team reviews your resume, code repositories, and work highlights.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] flex flex-col items-start gap-3 hover:border-[#22C55E]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#F1F5F2]">2. Shortlisting</h3>
            <p className="text-xs text-[#9AAEA3] leading-relaxed">
              If matched, the recruiter contacts you via email for an initial quick conversation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] flex flex-col items-start gap-3 hover:border-[#22C55E]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#F1F5F2]">3. Interviews</h3>
            <p className="text-xs text-[#9AAEA3] leading-relaxed">
              Shortlisted talent moves forward to technical rounds and team alignment discussions.
            </p>
          </div>
        </div>

        {/* Timeline & Actions Card */}
        <div className="w-full max-w-xl bg-[#111F19] p-8 rounded-3xl border border-[#20352B] flex flex-col items-center text-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
            <Clock className="w-4 h-4 text-[#22C55E]" />
            <span>Estimated Response Time</span>
          </div>
          <p className="text-sm text-[#9AAEA3]">
            Most hiring teams respond within{" "}
            <strong className="text-[#F1F5F2]">3–5 business days</strong>. You can track this application's real-time status in your dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              type="button"
              onClick={() => navigate("/jobs")}
              className="flex-1 px-6 py-3.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Compass className="w-4 h-4" />
              <span>Explore More Jobs</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 px-6 py-3.5 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] hover:text-[#22C55E] font-bold text-xs rounded-xl hover:bg-[#0D1814] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Go to Home</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;