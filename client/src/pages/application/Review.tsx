import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  FileText,
  Edit2,
  CheckCircle2,
  ArrowLeft,
  Send,
  Building2,
} from "lucide-react";

interface ApplicationData {
  id: number;
  applicantId: number;
  jobId: number;
  internshipId: number;
  resume: string;
  coverletter: string;
  portfolio: string;
  github: string;
  linkedIn: string;
  dribbble: string;
  behance: string;
  applicant: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}

interface ExperienceData {
  id: number;
  userId: number;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Review = () => {
  const { jobId, internshipId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  const jobData = location.state;
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(null);
  const [agreed, setAgreed] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const handlegetApplication = async () => {
      try {
        if (user?.id) {
          const response = await axios.get(
            `http://localhost:4000/api/application/${user?.id}/${jobId || internshipId}`,
            { withCredentials: true }
          );
          const experienceresponse = await axios.get(
            `http://localhost:4000/api/jobs/experience/${user?.id}`,
            { withCredentials: true }
          );
          setApplicationData(response.data.application);
          setExperienceData(experienceresponse.data.experience);
        }
      } catch (error) {
        console.error("Error fetching application data:", error);
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        }
      }
    };

    handlegetApplication();
  }, [user?.id, jobId, internshipId]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await axios.patch(
        `http://localhost:4000/api/application/${user?.id}/${jobId || internshipId}`,
        {
          status: "SUBMITTED",
        },
        { withCredentials: true }
      );
      navigate(`/application/success/${jobId || internshipId}`, { state: jobData });
    } catch (error) {
      console.error("Error submitting application:", error);
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
      navigate(`/application/success/${jobId || internshipId}`, { state: jobData });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Header Title */}
        <div className="mb-8 text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-3 py-1 rounded-full mb-3">
            Final Step: Review & Confirm
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F5F2] tracking-tight mb-2">
            Review Your Application
          </h1>
          <p className="text-sm text-[#9AAEA3] max-w-lg mx-auto">
            Please double-check all details below. Once submitted, your profile will be sent directly to the hiring team.
          </p>
        </div>

        {/* Stepper Component */}
        <div className="flex items-center justify-between mb-10 px-4 max-w-2xl mx-auto">
          {[
            { step: 1, label: "Documents", active: true, done: true },
            { step: 2, label: "Experience", active: true, done: true },
            { step: 3, label: "Portfolio", active: true, done: true },
            { step: 4, label: "Review", active: true, done: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    item.done
                      ? "bg-[#22C55E]/20 border-2 border-[#22C55E] text-[#22C55E]"
                      : "bg-[#22C55E] text-[#07110D] shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                  }`}
                >
                  {item.done ? "✓" : item.step}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#22C55E]">
                  {item.label}
                </span>
              </div>
              {idx < 3 && <div className="h-0.5 w-full mx-2 -mt-5 bg-[#22C55E]" />}
            </div>
          ))}
        </div>

        {/* Review Cards Stack */}
        <div className="space-y-6">
          
          {/* Section: Personal & Contact Information */}
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#20352B]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F1F5F2]">
                    Personal Information
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Your primary profile identity
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate(-3)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#22C55E] hover:text-[#34D399] transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Full Name
                </p>
                <p className="text-sm font-bold text-[#F1F5F2]">
                  {applicationData?.applicant?.name || user?.name || "Candidate Name"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Email Address
                </p>
                <p className="text-sm font-bold text-[#F1F5F2]">
                  {applicationData?.applicant?.email || user?.email || "candidate@example.com"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Phone Number
                </p>
                <p className="text-sm font-bold text-[#F1F5F2]">
                  {applicationData?.applicant?.phone || "+91 (Demo) 98765-43210"}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3] mb-1">
                  Location
                </p>
                <p className="text-sm font-bold text-[#F1F5F2]">
                  {applicationData?.applicant?.location || "Bengaluru, India (Remote)"}
                </p>
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#20352B]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F1F5F2]">
                    Experience & Background
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Your verified professional track record
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate(-2)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#22C55E] hover:text-[#34D399] transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1814] border border-[#20352B] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-base font-bold text-[#F1F5F2]">
                  {experienceData?.jobTitle || "Senior Software Engineer"}
                </h4>
                <span className="text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full border border-[#22C55E]/20 self-start sm:self-auto">
                  {experienceData?.companyName || "Previous Tech Company"}
                </span>
              </div>
              <p className="text-xs text-[#9AAEA3]">
                {experienceData?.startDate || "2022"} — {experienceData?.endDate || "Present"}
              </p>
              <p className="text-xs text-[#F1F5F2] leading-relaxed">
                {experienceData?.description ||
                  "Architected scalable frontend and distributed backend features, improved performance by 35%."}
              </p>
            </div>
          </div>

          {/* Section: Documents & Portfolio */}
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#20352B]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F1F5F2]">
                    Documents & Links
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Uploaded attachments and portfolio showcases
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#22C55E] hover:text-[#34D399] transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B] flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#22C55E] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Resume File
                  </p>
                  <p className="text-xs font-bold text-[#F1F5F2] truncate">
                    {applicationData?.resume || "Resume_Verified.pdf"}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B] flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#22C55E] shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Portfolio URL
                  </p>
                  <p className="text-xs font-bold text-[#22C55E] truncate">
                    {applicationData?.portfolio || "https://portfolio.dev/showcase"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Certification Checkbox */}
          <div className="p-5 rounded-2xl bg-[#0D1814] border border-[#20352B]">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded bg-[#111F19] border border-[#20352B] accent-[#22C55E] cursor-pointer"
              />
              <span className="text-xs text-[#9AAEA3] leading-relaxed">
                I certify that all information submitted is true, complete, and accurate. I understand that submitting false or misleading statements may disqualify me from consideration.
              </span>
            </label>
          </div>

          {/* Submit Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-6 py-3.5 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] hover:text-[#22C55E] text-xs font-bold rounded-xl hover:bg-[#111F19] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            <button
              type="button"
              disabled={!agreed || isSubmitting}
              onClick={handleSubmit}
              className="w-full sm:w-auto px-10 py-4 bg-[#22C55E] hover:bg-[#34D399] disabled:opacity-50 disabled:cursor-not-allowed text-[#07110D] font-extrabold text-sm rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Submitting..." : "Submit Final Application"}</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Review;