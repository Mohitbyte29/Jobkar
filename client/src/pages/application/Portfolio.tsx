import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Globe,
  Link as LinkIcon,
  Plus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Info,
} from "lucide-react";

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobId, internshipId } = useParams();
  const [portfolio, setPortfolio] = useState<string>("");
  const { user } = useUser();
  const jobData = location.state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolio(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/api/application/${user?.id}`,
        {
          portfolio,
          jobId: jobId ? parseInt(jobId) : null,
          internshipId: internshipId ? parseInt(internshipId) : null,
        },
        { withCredentials: true }
      );
      if (jobId) {
        navigate(`/jobs/application/review/${jobId}`, { state: jobData });
      } else {
        navigate(`/internships/application/review/${internshipId}`, { state: jobData });
      }
    } catch (error) {
      console.error("Error submitting portfolio:", error);
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
      if (jobId) {
        navigate(`/jobs/application/review/${jobId}`, { state: jobData });
      } else {
        navigate(`/internships/application/review/${internshipId}`, { state: jobData });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Header Title */}
        <div className="mb-8 text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-3 py-1 rounded-full mb-3">
            Step 3 of 4: Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F5F2] tracking-tight mb-2">
            Showcase Your Work
          </h1>
          <p className="text-sm text-[#9AAEA3] max-w-lg mx-auto">
            Provide links to your live projects, personal website, or case studies.
          </p>
        </div>

        {/* Stepper Component */}
        <div className="flex items-center justify-between mb-10 px-4 max-w-2xl mx-auto">
          {[
            { step: 1, label: "Documents", active: true, done: true },
            { step: 2, label: "Experience", active: true, done: true },
            { step: 3, label: "Portfolio", active: true, done: false },
            { step: 4, label: "Review", active: false, done: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    item.done
                      ? "bg-[#22C55E]/20 border-2 border-[#22C55E] text-[#22C55E]"
                      : item.active
                      ? "bg-[#22C55E] text-[#07110D] shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                      : "border-2 border-[#20352B] bg-[#111F19] text-[#9AAEA3]"
                  }`}
                >
                  {item.done ? "✓" : item.step}
                </div>
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    item.active ? "text-[#22C55E]" : "text-[#9AAEA3]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {idx < 3 && (
                <div
                  className={`h-0.5 w-full mx-2 -mt-5 ${
                    item.done ? "bg-[#22C55E]" : "bg-[#20352B]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <form
          className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-8"
          onSubmit={handleSubmit}
        >
          {/* Main Portfolio URL */}
          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-[#F1F5F2]"
              htmlFor="portfolio_url"
            >
              Primary Portfolio Website / Link
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9AAEA3] group-focus-within:text-[#22C55E] transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                id="portfolio_url"
                placeholder="https://yourportfolio.dev or https://behance.net/username"
                required
                type="url"
                value={portfolio}
                onChange={handleChange}
              />
            </div>
            <p className="text-xs text-[#9AAEA3]">
              Link to your personal website, GitHub portfolio, Dribbble, or Behance.
            </p>
          </div>

          {/* Project Highlights Section */}
          <div className="space-y-4 pt-4 border-t border-[#20352B]">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-[#F1F5F2]">
                  Key Project Highlights
                </h3>
                <p className="text-xs text-[#9AAEA3]">
                  Specific case studies or deployed live projects you are most proud of.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 text-xs font-bold text-[#22C55E] hover:bg-[#22C55E]/20 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>

            {/* Project Card 1 */}
            <div className="p-4 bg-[#0D1814] rounded-2xl border border-[#20352B] grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] block mb-1">
                  Project Title
                </label>
                <input
                  className="w-full bg-[#111F19] border border-[#20352B] rounded-lg px-3 py-2 text-xs text-[#F1F5F2] focus:border-[#22C55E] outline-none"
                  placeholder="e.g. Distributed Task Orchestrator"
                  type="text"
                  defaultValue="Full-Stack SaaS Platform"
                />
              </div>
              <div className="md:col-span-6">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] block mb-1">
                  Live URL or Repository
                </label>
                <input
                  className="w-full bg-[#111F19] border border-[#20352B] rounded-lg px-3 py-2 text-xs text-[#22C55E] focus:border-[#22C55E] outline-none"
                  placeholder="https://..."
                  type="url"
                  defaultValue="https://github.com/developer/saas-dashboard"
                />
              </div>
              <div className="md:col-span-1 flex justify-end">
                <button
                  type="button"
                  className="p-2 text-[#9AAEA3] hover:text-[#EF4444] rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="p-4 bg-[#0D1814] rounded-2xl border border-[#20352B] grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] block mb-1">
                  Project Title
                </label>
                <input
                  className="w-full bg-[#111F19] border border-[#20352B] rounded-lg px-3 py-2 text-xs text-[#F1F5F2] focus:border-[#22C55E] outline-none"
                  placeholder="e.g. Real-Time Chat Engine"
                  type="text"
                  defaultValue="High-Performance API Gateway"
                />
              </div>
              <div className="md:col-span-6">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] block mb-1">
                  Live URL or Repository
                </label>
                <input
                  className="w-full bg-[#111F19] border border-[#20352B] rounded-lg px-3 py-2 text-xs text-[#22C55E] focus:border-[#22C55E] outline-none"
                  placeholder="https://..."
                  type="url"
                  defaultValue="https://gateway-demo.app"
                />
              </div>
              <div className="md:col-span-1 flex justify-end">
                <button
                  type="button"
                  className="p-2 text-[#9AAEA3] hover:text-[#EF4444] rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Tip Box */}
          <div className="p-4 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
            <p className="text-xs text-[#F1F5F2] leading-relaxed">
              <strong className="text-[#22C55E]">Pro Tip:</strong> Candidates who include links with verifiable source code and deployed previews receive up to <strong>3x faster interview invitations</strong>.
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#20352B]">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3.5 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] hover:text-[#22C55E] text-xs font-bold rounded-xl hover:bg-[#111F19] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Review Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;