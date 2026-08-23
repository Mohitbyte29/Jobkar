import EmployerNav from "@/components/EmployerNav";
import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  Building2,
  Globe,
  Upload,
  UserPlus,
  MoreVertical,
  CheckCircle2,
  Circle,
  Save,
  Info,
  X,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    name: "Innovatech Solutions",
    industry: "Information Technology",
    website: "innovatech.io",
    description:
      "Innovatech Solutions is a global leader in cloud-native transformation. We help high-growth companies and startups modernize their architecture using cutting-edge AI and distributed systems.\n\nOur culture is built on transparency, rapid iteration, and technical excellence.",
  });

  const handleSave = () => {
    toast.success("Company profile changes saved!");
  };

  return (
    <div className="bg-[#07110D] text-[#F1F5F2] min-h-screen flex selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <Toaster position="top-right" />
      <EmployerNav />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TopAppBar Header */}
        <header className="w-full border-b border-[#20352B] sticky top-0 z-20 bg-[#111F19]/90 backdrop-blur-md h-16 flex justify-between items-center px-8">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none transition-all"
              placeholder="Search company settings..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814] rounded-xl transition-colors relative cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-[#111F19]" />
            </button>
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814] rounded-xl transition-colors cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-[#20352B] mx-1" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-[#F1F5F2] leading-tight">
                  Alex Rivers
                </p>
                <p className="text-[10px] text-[#9AAEA3] uppercase tracking-wider font-semibold">
                  Talent Lead
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] font-bold text-xs">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto max-w-[1360px] mx-auto w-full space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Company Profile & Branding
              </h2>
              <p className="text-sm text-[#9AAEA3]">
                Manage how your company brand appears to verified candidates across JobKar.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-5 py-2.5 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] hover:text-[#22C55E] text-xs font-bold rounded-xl hover:bg-[#111F19] transition-all cursor-pointer"
              >
                Discard
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column (8 cols): General Info + About */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* General Information Card */}
              <section className="bg-[#111F19] rounded-3xl p-6 sm:p-8 border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <h3 className="text-lg font-bold text-[#F1F5F2] mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#22C55E]" />
                  <span>General Information</span>
                </h3>

                <div className="space-y-6">
                  {/* Logo Uploader */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                    <div className="w-20 h-20 rounded-2xl bg-[#162820] border-2 border-dashed border-[#20352B] flex flex-col items-center justify-center text-[#22C55E] shrink-0">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#F1F5F2] mb-0.5">
                        Brand Logo
                      </p>
                      <p className="text-xs text-[#9AAEA3] mb-3">
                        Upload high-resolution logo (min 400x400px, PNG/SVG).
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="px-3.5 py-1.5 bg-[#22C55E]/15 border border-[#22C55E]/30 hover:bg-[#22C55E]/25 text-[#22C55E] text-xs font-bold rounded-lg transition-all cursor-pointer"
                        >
                          Upload New Logo
                        </button>
                        <button
                          type="button"
                          className="text-xs font-bold text-[#EF4444] hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Primary Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all cursor-pointer"
                      >
                        <option value="Information Technology" className="bg-[#0D1814]">
                          Information Technology
                        </option>
                        <option value="Financial Services" className="bg-[#0D1814]">
                          Financial Services & Fintech
                        </option>
                        <option value="Healthcare" className="bg-[#0D1814]">
                          Healthcare & Biotech
                        </option>
                        <option value="E-commerce" className="bg-[#0D1814]">
                          E-Commerce & Retail
                        </option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Official Website URL
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9AAEA3]">
                          https://
                        </span>
                        <input
                          type="text"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full pl-20 pr-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Us Card */}
              <section className="bg-[#111F19] rounded-3xl p-6 sm:p-8 border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#F1F5F2] mb-1">
                    About the Company & Culture
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Describe your mission, values, and engineering culture to attract top candidates.
                  </p>
                </div>

                <textarea
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-4 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-2xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all resize-none"
                />
              </section>
            </div>

            {/* Right Column (4 cols): Team & Strength Card */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Profile Strength Card */}
              <section className="bg-[#111F19] rounded-3xl p-6 border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#22C55E] mb-4">
                  Profile Completeness
                </h3>

                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-4xl font-black text-[#F1F5F2]">85%</span>
                  <span className="text-xs font-bold text-[#22C55E]">Almost Complete!</span>
                </div>

                <div className="w-full bg-[#0D1814] h-2.5 rounded-full overflow-hidden mb-6 border border-[#20352B]">
                  <div className="bg-gradient-to-r from-[#22C55E] to-[#34D399] h-full rounded-full w-[85%]" />
                </div>

                <ul className="space-y-3 text-xs">
                  <li className="flex items-center gap-2.5 text-[#F1F5F2]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Company Logo uploaded</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[#F1F5F2]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>About description added</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-[#9AAEA3]">
                    <Circle className="w-4 h-4 text-[#20352B]" />
                    <span>Add 3 company perks & benefits</span>
                  </li>
                </ul>
              </section>

              {/* Team Members Card */}
              <section className="bg-[#111F19] rounded-3xl p-6 border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#20352B]">
                  <h3 className="text-sm font-bold text-[#F1F5F2]">
                    Hiring Team (3)
                  </h3>
                  <button
                    type="button"
                    className="p-1.5 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E]/25 transition-all"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", role: "Talent Admin", initials: "SC" },
                    { name: "Marcus Wright", role: "Technical Recruiter", initials: "MW" },
                    { name: "Jane Doe", role: "Invite Pending...", initials: "JD", pending: true },
                  ].map((member, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-[#0D1814] border border-[#20352B] flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-[#162820] border border-[#20352B] flex items-center justify-center text-xs font-bold text-[#22C55E] shrink-0">
                          {member.initials}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-bold truncate ${member.pending ? 'text-[#9AAEA3] italic' : 'text-[#F1F5F2]'}`}>
                            {member.name}
                          </p>
                          <p className="text-[10px] text-[#9AAEA3]">{member.role}</p>
                        </div>
                      </div>
                      <MoreVertical className="w-4 h-4 text-[#9AAEA3] shrink-0" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompanyProfile;
