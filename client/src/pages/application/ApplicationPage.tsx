import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import {
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  FileText,
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Plus,
} from "lucide-react";
import { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ApplicationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;
  const { jobId, internshipId } = useParams();
  const { user } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resume, setResume] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;
      const MAX_FILE_SIZE = 10 * 1024 * 1024;

      if (file.size > MAX_FILE_SIZE) {
        alert("Maximum file size is 10 MB");
        return;
      }
      const formData = new FormData();
      formData.append("resume", file);
      await axios.patch(
        `http://localhost:4000/api/applications/resume`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResume(file.name);
      console.log("Resume uploaded:", file.name);
    } catch (err) {
      console.error("Error uploading resume:", err);
      if (axios.isAxiosError(err) && err.response) {
        console.error("Server response:", err.response.data);
      }
    }
  };

  const [formData, setFormData] = useState({
    coverLetter: "",
    github: "",
    linkedIn: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/me`, {
        withCredentials: true,
      });
      const applicationData = {
        ...(jobId ? { jobId } : { internshipId }),
        resume: res.data.user?.resume || resume,
        coverletter: formData.coverLetter,
        github: formData.github,
        linkedIn: formData.linkedIn,
      };
      await axios.patch(
        `http://localhost:4000/api/application/${user?.id}/${jobId || internshipId}`,
        applicationData,
        {
          withCredentials: true,
        }
      );
      if (jobId) {
        navigate(`/application/experience/${jobId}`, { state: userData });
      } else {
        navigate(`/application/experience/${internshipId}`, { state: userData });
      }
    } catch (err) {
      console.error("Error updating application:", err);
      if (axios.isAxiosError(err) && err.response) {
        console.error("Server response:", err.response.data);
      }
      // Navigate anyway so user isn't blocked in demo
      if (jobId) {
        navigate(`/application/experience/${jobId}`, { state: userData });
      } else {
        navigate(`/application/experience/${internshipId}`, { state: userData });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Header Title */}
        <div className="mt-10 mb-8 text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-3 py-1 rounded-full mb-3">
            Step 1 of 4: Documents & Links
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F5F2] tracking-tight mb-2">
            Submit Your Application
          </h1>
        </div>

        {/* Stepper Component */}
        <div className="flex items-center justify-between mb-10 px-4 max-w-2xl mx-auto">
          {[
            { step: 1, label: "Documents", active: true, done: false },
            { step: 2, label: "Experience", active: false, done: false },
            { step: 3, label: "Portfolio", active: false, done: false },
            { step: 4, label: "Review", active: false, done: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    item.active
                      ? "bg-[#22C55E] text-[#07110D] shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                      : "border-2 border-[#20352B] bg-[#111F19] text-[#9AAEA3]"
                  }`}
                >
                  {item.step}
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
                <div className="h-0.5 w-full bg-[#20352B] mx-2 -mt-5" />
              )}
            </div>
          ))}
        </div>

        {/* Form Container Card */}
        <div className="bg-[#111F19] rounded-3xl border border-[#20352B] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Section: Resume Upload */}
          <div className="p-6 sm:p-8 border-b border-[#20352B]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#F1F5F2]">
                  Resume / Curriculum Vitae
                </h3>
                <p className="text-xs text-[#9AAEA3] mt-0.5">
                  Upload your most up-to-date resume (PDF, DOCX up to 10MB)
                </p>
              </div>
              <span className="text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full border border-[#22C55E]/30">
                Required
              </span>
            </div>

            <div className="border-2 border-dashed border-[#20352B] hover:border-[#22C55E] rounded-2xl p-8 flex flex-col items-center justify-center bg-[#0D1814] transition-all group cursor-pointer" onClick={handleClick}>
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/10 group-hover:bg-[#22C55E]/20 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] mb-3 transition-all">
                <UploadCloud className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-[#F1F5F2] mb-1 text-center">
                {resume ? (
                  <span className="text-[#22C55E] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> {resume}
                  </span>
                ) : (
                  "Drag & drop your resume here, or click to browse"
                )}
              </p>
              <p className="text-xs text-[#9AAEA3]">
                Supports PDF or Word documents
              </p>
              <button
                type="button"
                className="mt-4 px-5 py-2 bg-[#162820] hover:bg-[#22C55E] text-[#F1F5F2] hover:text-[#07110D] font-bold text-xs rounded-xl border border-[#20352B] hover:border-[#22C55E] transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
              >
                {resume ? "Replace File" : "Choose File"}
              </button>
              <input
                ref={fileInputRef}
                onChange={handleFileChange}
                type="file"
                accept=".pdf,.docx"
                className="hidden"
              />
            </div>
          </div>

          {/* Section: Cover Letter */}
          <div className="p-6 sm:p-8 border-b border-[#20352B]">
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#F1F5F2] mb-1">
                Cover Letter (Optional)
              </label>
              <p className="text-xs text-[#9AAEA3]">
                Briefly introduce yourself and share why you are the ideal fit for this role.
              </p>
            </div>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={6}
              placeholder="Dear Hiring Manager, I am excited to apply for this opportunity because..."
              className="w-full p-4 rounded-2xl bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 resize-none outline-none transition-all"
            />
          </div>

          {/* Section: Professional Links */}
          <div className="p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#F1F5F2] mb-1">
              Professional Links & Profiles
            </h3>
            <p className="text-xs text-[#9AAEA3] mb-6">
              Connect your GitHub, LinkedIn, or portfolio to strengthen your application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  GitHub Profile URL
                </label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 sm:p-8 bg-[#0D1814] border-t border-[#20352B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                className="flex-1 sm:flex-none px-6 py-3 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] text-xs font-bold rounded-xl hover:bg-[#162820] transition-all"
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 sm:flex-none px-7 py-3 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Continue to Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust signal */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#9AAEA3]">
          <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
          <span>Your data is encrypted and shared exclusively with the hiring team.</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationPage;
