import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Globe,
  MapPin,
  UploadCloud,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

const AddCompany = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    name: "",
    website: "",
    country: "India",
    city: "",
    companyStatus: "ACTIVE",
    category: "TECHNOLOGY_SOFTWARE",
    description: "",
  });

  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;
      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds the maximum limit of 10MB.");
        return;
      }

      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
      toast.success("Logo selected successfully!");
    } catch (error) {
      console.error("Error occurred while handling logo change:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", company.name);
      formData.append("website", company.website);
      formData.append("country", company.country);
      formData.append("city", company.city);
      formData.append("companyStatus", company.companyStatus);
      formData.append("category", company.category);
      formData.append("description", company.description);
      if (logo) {
        formData.append("logo", logo);
      }

      await axios.post("http://localhost:4000/api/company", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Company profile created successfully!");
      navigate("/companies");
    } catch (err) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Failed to register company");
      } else {
        toast.error("An unexpected error occurred");
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
            background: "#111F19",
            color: "#F1F5F2",
            border: "1px solid #20352B",
          },
        }}
      />
      <Navbar />

      <main className="relative min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] overflow-x-hidden font-sans pt-28 pb-24">
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-[#22C55E]/10 rounded-full blur-[150px]" />
          <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-[#34D399]/8 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111F19] border border-[#20352B] text-[#22C55E] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Employer Onboarding</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F2] tracking-tight">
              Register a New <span className="text-[#22C55E]">Company</span>
            </h1>
            <p className="mt-3 text-[#9AAEA3] text-base sm:text-lg">
              Establish an official verified corporate profile in the Jobkar ecosystem and start publishing job openings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Form (8 cols) */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-[#111F19] border border-[#20352B] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-8"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Identity Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#22C55E] uppercase tracking-wider">
                      <Building2 className="w-4 h-4" />
                      <span>Company Identity</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                          Company Name *
                        </label>
                        <input
                          onChange={handleInputChange}
                          name="name"
                          value={company.name}
                          required
                          className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                          placeholder="e.g. Nexus Technologies"
                          type="text"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5 text-[#22C55E]" />
                          Official Website *
                        </label>
                        <input
                          className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                          placeholder="https://nexus.tech"
                          type="url"
                          onChange={handleInputChange}
                          name="website"
                          value={company.website}
                          required
                        />
                      </div>
                    </div>

                    {/* Logo Dropzone */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Company Logo
                      </label>
                      <div className="relative group border-2 border-dashed border-[#20352B] hover:border-[#22C55E] bg-[#0D1814] hover:bg-[#162820] rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer">
                        {logoPreview ? (
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-[#07110D] border border-[#22C55E]/40 p-2 flex items-center justify-center overflow-hidden">
                              <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-bold text-[#F1F5F2]">Logo selected</p>
                              <p className="text-[11px] text-[#22C55E]">Click to change file</p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] mb-3 group-hover:scale-110 transition-transform">
                              <UploadCloud className="w-6 h-6" />
                            </div>
                            <p className="text-xs font-bold text-[#F1F5F2] mb-1">Click or drag logo here to upload</p>
                            <p className="text-[11px] text-[#9AAEA3]">PNG, JPG or SVG (Max 10MB)</p>
                          </>
                        )}
                        <input
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          type="file"
                          onChange={handleLogoChange}
                          name="logo"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Operational Details Section */}
                  <div className="space-y-4 pt-4 border-t border-[#20352B]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#22C55E] uppercase tracking-wider">
                      <MapPin className="w-4 h-4" />
                      <span>Headquarters & Category</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">City</label>
                        <input
                          className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                          placeholder="e.g. Bangalore"
                          type="text"
                          onChange={handleInputChange}
                          name="city"
                          value={company.city}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">Country</label>
                        <input
                          className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                          placeholder="e.g. India"
                          type="text"
                          onChange={handleInputChange}
                          name="country"
                          value={company.country}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">Industry Category</label>
                        <select
                          onChange={handleInputChange}
                          name="category"
                          value={company.category}
                          className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all cursor-pointer"
                        >
                          <option value="TECHNOLOGY_SOFTWARE" className="bg-[#0D1814]">Technology & Software</option>
                          <option value="CREATIVE_MEDIA" className="bg-[#0D1814]">Design & UI/UX</option>
                          <option value="MARKETING" className="bg-[#0D1814]">Growth & Marketing</option>
                          <option value="HEALTHCARE" className="bg-[#0D1814]">Healthcare & BioTech</option>
                          <option value="FINANCE" className="bg-[#0D1814]">Finance & FinTech</option>
                          <option value="BUSINESS_OPERATIONS" className="bg-[#0D1814]">Business Operations</option>
                          <option value="OTHER" className="bg-[#0D1814]">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">Company Status</label>
                        <select
                          onChange={handleInputChange}
                          name="companyStatus"
                          value={company.companyStatus}
                          className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all cursor-pointer"
                        >
                          <option value="ACTIVE" className="bg-[#0D1814]">Active (Accepting Applications)</option>
                          <option value="INACTIVE" className="bg-[#0D1814]">Inactive</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Company Mission & Description
                      </label>
                      <textarea
                        className="w-full p-4 bg-[#0D1814] border border-[#20352B] rounded-2xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all resize-y min-h-[130px]"
                        placeholder="Outline your company's mission, engineering culture, and value proposition..."
                        rows={5}
                        onChange={handleInputChange}
                        name="description"
                        value={company.description}
                        required
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#20352B] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => navigate("/companies")}
                      className="text-xs font-bold text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors"
                    >
                      Cancel & Return
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2 active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Creating Profile..." : "Register Company Profile"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Guidelines (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-[#111F19] border border-[#20352B] space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 text-[#22C55E] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Profile Integrity</span>
                </div>
                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  Companies with completed profiles and verified logos receive 40% higher candidate engagement and priority
                  discovery in the directory.
                </p>
                <div className="space-y-2 pt-2 text-xs text-[#9AAEA3]">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-[#F1F5F2]">Verified employer badge eligibility</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-[#F1F5F2]">SEO-indexed brand showcase</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                    <span className="text-[#F1F5F2]">Direct applicant management dashboard</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AddCompany;