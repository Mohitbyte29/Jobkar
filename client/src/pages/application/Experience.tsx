import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const location = useLocation();
  const { jobId, internshipId } = useParams();
  const jobData = location.state;

  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    city: "",
    country: "",
    roleDescription: "",
    startDate: "",
    endDate: "",
    currentWork: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddExperience = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.jobTitle && formData.company) {
        await axios.post(
          `/api/experience/${user?.id}`,
          {
            ...formData,
            startDate: formData.startDate ? new Date(formData.startDate).toISOString() : new Date().toISOString(),
            endDate: formData.endDate ? new Date(formData.endDate).toISOString() : new Date().toISOString(),
            userId: user?.id,
          },
          { withCredentials: true }
        );
      }
      if (jobId) {
        navigate(`/jobs/application/portfolio/${jobId}`, { state: jobData });
      } else {
        navigate(`/internships/application/portfolio/${internshipId}`, { state: jobData });
      }
    } catch (err) {
      console.error("Error adding experience:", err);
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);
      }
      if (jobId) {
        navigate(`/jobs/application/portfolio/${jobId}`, { state: jobData });
      } else {
        navigate(`/internships/application/portfolio/${internshipId}`, { state: jobData });
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
            Step 2 of 4: Experience
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F5F2] tracking-tight mb-2">
            Work Experience
          </h1>
          <p className="text-sm text-[#9AAEA3] max-w-lg mx-auto">
            Share your professional background, past roles, and notable achievements.
          </p>
        </div>

        {/* Stepper Component */}
        <div className="flex items-center justify-between mb-10 px-4 max-w-2xl mx-auto">
          {[
            { step: 1, label: "Documents", active: true, done: true },
            { step: 2, label: "Experience", active: true, done: false },
            { step: 3, label: "Portfolio", active: false, done: false },
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

        {/* Experience Form Container */}
        <form
          className="space-y-6"
          id="experience-form"
          onSubmit={handleAddExperience}
        >
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#20352B]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#F1F5F2]">
                  Most Recent Role
                </h3>
              </div>
              <button
                type="button"
                className="p-2 text-[#9AAEA3] hover:text-[#EF4444] rounded-lg hover:bg-[#162820] transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Job Title */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Job Title
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                  placeholder="e.g. Senior Software Engineer"
                  type="text"
                  name="jobTitle"
                  onChange={handleChange}
                  value={formData.jobTitle}
                  required
                />
              </div>

              {/* Company Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Company Name
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                  placeholder="e.g. Acme Corp"
                  type="text"
                  name="company"
                  onChange={handleChange}
                  value={formData.company}
                  required
                />
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  City
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                  placeholder="e.g. Bengaluru / Remote"
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>

              {/* Country */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Country
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all"
                  placeholder="e.g. India"
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>

              {/* Start Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Start Date
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  type="date"
                  name="startDate"
                  onChange={handleChange}
                  value={formData.startDate}
                />
              </div>

              {/* End Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  End Date
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  id="end-date-input"
                  type="date"
                  name="endDate"
                  disabled={formData.currentWork}
                  onChange={handleChange}
                  value={formData.endDate}
                />
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="current-work-check"
                    name="currentWork"
                    checked={formData.currentWork}
                    onChange={handleChange}
                    className="w-4 h-4 rounded bg-[#0D1814] border border-[#20352B] accent-[#22C55E] cursor-pointer"
                  />
                  <label
                    htmlFor="current-work-check"
                    className="text-xs text-[#9AAEA3] cursor-pointer select-none"
                  >
                    I currently work in this role
                  </label>
                </div>
              </div>

              {/* Role Description */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Responsibilities & Key Achievements
                </label>
                <textarea
                  className="w-full p-4 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-2xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all resize-none"
                  placeholder="Describe your core responsibilities, team size, tools used, and key business outcomes..."
                  rows={5}
                  name="roleDescription"
                  onChange={handleChange}
                  value={formData.roleDescription}
                />
              </div>
            </div>
          </div>

          {/* Add Another Experience Button */}
          <button
            type="button"
            className="w-full py-4 border-2 border-dashed border-[#20352B] hover:border-[#22C55E] rounded-2xl text-xs font-bold text-[#9AAEA3] hover:text-[#22C55E] hover:bg-[#111F19] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Another Experience</span>
          </button>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
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
              <span>Continue to Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;