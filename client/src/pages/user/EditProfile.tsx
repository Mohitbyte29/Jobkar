import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNav from "@/components/UserNav";
import {
  Camera,
  Upload,
  User,
  Phone,
  MapPin,
  Globe,
  Building2,
  GraduationCap,
  Check,
  ArrowLeft,
  Briefcase,
  Sparkles,
  Save,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const EditProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [industry, setIndustry] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("India");
  const [linkedin, setLinkedin] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [portFolio, setPortfolio] = useState<string>("");

  const [school, setSchool] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
  const [startYear, setStartYear] = useState<number | null>(null);
  const [endYear, setEndYear] = useState<number | null>(null);
  const [grade, setGrade] = useState<number | null>(null);

  const [profilePhoto, setProfilePhoto] = useState<any>(null);
  const [coverImage, setCoverImage] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchExistingProfile = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/me/profile", {
          withCredentials: true,
        });
        if (res.data?.user) {
          const u = res.data.user;
          const names = (u.fullName || "").split(" ");
          setFirstName(names[0] || "");
          setLastName(names.slice(1).join(" ") || "");
          setPhoneNumber(u.phoneNumber || "");
          setBio(u.bio || "");
          setCity(u.city || "");
          setCountry(u.country || "India");
          setProfession(u.profession || "");
          setIndustry(u.industry || "");
          setLinkedin(u.linkedIn || "");
          setGithub(u.github || "");
          setPortfolio(u.portfolio || "");
          setProfilePhoto(u.avatar || null);
          setCoverImage(u.coverImage || null);
        }

        const resEd = await axios.get("http://localhost:4000/api/me/education", {
          withCredentials: true,
        });
        if (resEd.data?.education) {
          const ed = resEd.data.education;
          setSchool(ed.school || "");
          setInstitution(ed.institution || "");
          setDegree(ed.degree || "");
          setFieldOfStudy(ed.fieldOfStudy || "");
          setStartYear(ed.startYear || null);
          setEndYear(ed.endYear || null);
          setGrade(ed.grade || null);
        }
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    fetchExistingProfile();
  }, []);

  const handleSaveChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await axios.patch(
        "http://localhost:4000/api/me/profile",
        {
          fullName: `${firstname} ${lastname}`.trim(),
          phoneNumber,
          city,
          bio,
          country,
          linkedIn: linkedin,
          github,
          portfolio: portFolio,
          profession,
          university: institution,
          industry,
        },
        { withCredentials: true }
      );

      await axios.patch(
        "http://localhost:4000/api/me/education",
        {
          school,
          institution,
          degree,
          fieldOfStudy,
          startYear,
          endYear,
          grade,
        },
        { withCredentials: true }
      );

      toast.success("Profile and education updated successfully!");
      setTimeout(() => navigate("/profile"), 600);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile changes");
    } finally {
      setIsSaving(false);
    }
  };

  const handleProfilePhotoChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      await axios.patch("http://localhost:4000/api/me/avatar", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfilePhoto(URL.createObjectURL(file));
      toast.success("Avatar updated!");
    } catch (err) {
      toast.error("Failed to upload avatar");
    }
  };

  const handleCoverImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("coverImage", file);
      await axios.patch("http://localhost:4000/api/me/cover-image", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCoverImage(URL.createObjectURL(file));
      toast.success("Cover image updated!");
    } catch (err) {
      toast.error("Failed to upload cover image");
    }
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] flex font-sans">
      <Toaster position="top-right" />
      <UserNav />

      <main className="flex-1 ml-64 p-8 min-w-0">
        <div className="max-w-[1000px] mx-auto w-full space-y-8 pb-20">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#9AAEA3] hover:text-[#22C55E] mb-2 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Profile</span>
              </button>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight">
                Edit Candidate Profile
              </h1>
              <p className="text-xs text-[#9AAEA3] mt-0.5">
                Update your professional credentials, resume links, and verified education.
              </p>
            </div>
          </div>

          <form onSubmit={handleSaveChanges} className="space-y-8">
            {/* Media: Cover & Avatar Card */}
            <section className="bg-[#111F19] rounded-3xl border border-[#20352B] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div className="relative bg-[#162820] w-full h-44 sm:h-52 overflow-hidden">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#111F19] via-[#162820] to-[#0D1814]" />
                )}

                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-[#0D1814]/90 hover:bg-[#0D1814] border border-[#20352B] backdrop-blur-md rounded-xl text-xs font-bold text-[#F1F5F2] flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <Camera className="w-4 h-4 text-[#22C55E]" />
                  <span>Update Cover Photo</span>
                </button>
                <input
                  type="file"
                  ref={coverInputRef}
                  onChange={handleCoverImageChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>

              <div className="px-8 pb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-14 mb-4">
                  <div className="relative w-28 h-28 rounded-3xl border-4 border-[#111F19] bg-[#0D1814] overflow-hidden shadow-2xl shrink-0">
                    <img
                      src={
                        profilePhoto ||
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                      }
                      alt="Avatar preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-[#22C55E]/15 hover:bg-[#22C55E]/25 border border-[#22C55E]/30 text-[#22C55E] rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Change Avatar
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleProfilePhotoChange}
                      className="hidden"
                      accept="image/*"
                    />
                    <p className="text-[11px] text-[#9AAEA3] mt-2">
                      Square format recommended (min 400x400px, PNG or JPG).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Information */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                  <User className="w-5 h-5 text-[#22C55E]" />
                  <span>Personal Information</span>
                </h3>
                <p className="text-xs text-[#9AAEA3] mt-0.5">
                  Manage your basic contact and identity details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Primary Profession / Title
                  </label>
                  <input
                    type="text"
                    placeholder="Senior Full-Stack Engineer"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Bengaluru"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all cursor-pointer"
                  >
                    <option value="India" className="bg-[#0D1814]">India</option>
                    <option value="United States" className="bg-[#0D1814]">United States</option>
                    <option value="United Kingdom" className="bg-[#0D1814]">United Kingdom</option>
                    <option value="Canada" className="bg-[#0D1814]">Canada</option>
                    <option value="Germany" className="bg-[#0D1814]">Germany</option>
                    <option value="Singapore" className="bg-[#0D1814]">Singapore</option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Primary Industry Sector
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all cursor-pointer"
                  >
                    <option value="" className="bg-[#0D1814]">Select Industry Sector</option>
                    <option value="Technology Software" className="bg-[#0D1814]">Technology & Software</option>
                    <option value="Creative Media" className="bg-[#0D1814]">Creative & Design</option>
                    <option value="Marketing" className="bg-[#0D1814]">Growth & Marketing</option>
                    <option value="Healthcare" className="bg-[#0D1814]">Healthcare & Biotech</option>
                    <option value="Finance" className="bg-[#0D1814]">Finance & FinTech</option>
                    <option value="Business Operations" className="bg-[#0D1814]">Business Operations</option>
                  </select>
                </div>
              </div>
            </section>

            {/* About / Bio */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#F1F5F2]">Professional Bio</h3>
                <p className="text-xs text-[#9AAEA3] mt-0.5">
                  Highlight your experience, architectural skills, and what you’re looking for in your next role.
                </p>
              </div>

              <textarea
                rows={5}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Experienced Software Engineer with a passion for building scalable web applications and distributed systems..."
                className="w-full p-4 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-2xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/40 outline-none transition-all resize-none"
              />
            </section>

            {/* Education Section */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#22C55E]" />
                  <span>Education & Academics</span>
                </h3>
                <p className="text-xs text-[#9AAEA3] mt-0.5">
                  Your university degree, field of study, and graduation timeline.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    University / College Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Stanford University or National Institute of Technology"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Degree
                  </label>
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all cursor-pointer"
                  >
                    <option value="" className="bg-[#0D1814]">Select Degree</option>
                    <option value="Bachelor's" className="bg-[#0D1814]">Bachelor's (B.Tech / B.E / B.Sc)</option>
                    <option value="Master's" className="bg-[#0D1814]">Master's (M.Tech / M.S / MBA)</option>
                    <option value="PhD" className="bg-[#0D1814]">PhD / Doctorate</option>
                    <option value="Associate's" className="bg-[#0D1814]">Associate Degree</option>
                    <option value="High School" className="bg-[#0D1814]">High School Diploma</option>
                  </select>
                </div>

                <div className="sm:col-span-3 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Field of Study / Major
                  </label>
                  <input
                    type="text"
                    placeholder="Computer Science & Engineering"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Start Year
                  </label>
                  <input
                    type="number"
                    placeholder="2021"
                    value={startYear ?? ""}
                    onChange={(e) => setStartYear(e.target.value ? Number(e.target.value) : null)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    End Year (or Expected)
                  </label>
                  <input
                    type="number"
                    placeholder="2025"
                    value={endYear ?? ""}
                    onChange={(e) => setEndYear(e.target.value ? Number(e.target.value) : null)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                    CGPA / Grade
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="8.8"
                    value={grade ?? ""}
                    onChange={(e) => setGrade(e.target.value ? Number(e.target.value) : null)}
                    className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Social & Portfolio Links */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#22C55E]" />
                  <span>Online Profiles & Links</span>
                </h3>
                <p className="text-xs text-[#9AAEA3] mt-0.5">
                  Connect your live portfolio and open-source contributions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0D1814] border border-[#20352B] flex items-center justify-center text-[#22C55E] shrink-0">
                    {/* <Linkedin className="w-5 h-5" /> */}
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-xs text-[#F1F5F2] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0D1814] border border-[#20352B] flex items-center justify-center text-[#22C55E] shrink-0">
                    {/* <Github className="w-5 h-5" /> */}
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/username"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-xs text-[#F1F5F2] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0D1814] border border-[#20352B] flex items-center justify-center text-[#22C55E] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Personal Portfolio / Website
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourportfolio.dev"
                      value={portFolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-xs text-[#F1F5F2] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Action Footer */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#20352B]">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 border border-[#20352B] hover:border-[#22C55E]/40 text-[#9AAEA3] hover:text-[#F1F5F2] rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-8 py-3 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? "Saving Changes..." : "Save Profile Changes"}</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
