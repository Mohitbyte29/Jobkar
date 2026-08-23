import UserNav from "@/components/UserNav";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  Globe,
  Edit2,
  Users,
  Heart,
  Eye,
  FolderGit2,
  Award,
  Code2,
  Laptop,
  Trophy,
  GraduationCap,
  FileText,
  Download,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface User {
  gmail: string;
}

interface Education {
  startYear: number | null;
  endYear: number | null;
}

interface UserProfile {
  user: {
    fullName: string;
    profession: string;
    city: string;
    country: string;
    industry: string;
    coverImage: string;
    github: string;
    linkedIn: string;
    portfolio: string;
    university: string;
    phoneNumber: string;
    bio: string;
    profileViews: number;
    yearsOfExperience: number;
    skills: string;
    avatar: string;
    achievements: string;
  };
}

const defaultProfile: UserProfile = {
  user: {
    fullName: "",
    profession: "",
    city: "",
    country: "",
    industry: "",
    coverImage: "",
    github: "",
    linkedIn: "",
    portfolio: "",
    university: "",
    phoneNumber: "",
    bio: "",
    profileViews: 0,
    yearsOfExperience: 0,
    skills: "",
    avatar: "",
    achievements: "",
  },
};

const defaultEducation: Education = {
  startYear: null,
  endYear: null,
};

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [education, setEducation] = useState<Education>(defaultEducation);
  const [savedJobs, setSavedJobs] = useState<string>("");

  useEffect(() => {
    const handleCountSavedJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/jobs/saved", {
          withCredentials: true,
        });
        setSavedJobs(res.data);
      } catch (error) {
        console.error("Error fetching saved jobs:", error);
      }
    };
    handleCountSavedJobs();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/me/profile", {
          withCredentials: true,
        });
        const resEducation = await axios.get(
          "http://localhost:4000/api/me/education",
          { withCredentials: true }
        );
        if (res.data?.user) {
          setProfile(res.data);
        }
        if (resEducation.data?.education) {
          setEducation({
            startYear: resEducation.data.education.startYear,
            endYear: resEducation.data.education.endYear,
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] flex font-sans">
      <UserNav />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 min-w-0">
        
        {/* Top Header Bar */}
        <header className="flex items-center justify-between mb-8 pb-4 border-b border-[#20352B]">
          <div className="relative w-96 hidden md:block">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
            <input
              type="text"
              placeholder="Search jobs, internships, or companies..."
              className="w-full pl-10 pr-4 py-2 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] rounded-xl text-xs text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#111F19] rounded-xl transition-colors relative cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-[#07110D]" />
            </button>
            <div className="h-6 w-px bg-[#20352B]" />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#162820] border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] font-bold text-xs">
                {profile.user.fullName
                  ? profile.user.fullName.charAt(0).toUpperCase()
                  : "U"}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-[#F1F5F2] leading-tight">
                  {profile.user.fullName || user?.name || "User Profile"}
                </p>
                <p className="text-[10px] text-[#22C55E] font-semibold">
                  {profile.user.profession || "Candidate"}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Header Card */}
        <section className="bg-[#111F19] rounded-3xl border border-[#20352B] overflow-hidden mb-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div
            className="h-48 w-full bg-cover bg-center bg-[#0D1814] relative"
            style={{
              backgroundImage: profile.user.coverImage
                ? `url("${profile.user.coverImage}")`
                : "linear-gradient(to right, #111F19, #162820, #0D1814)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#111F19] via-transparent to-transparent opacity-90" />
          </div>

          <div className="px-8 pb-8 relative">
            <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6 gap-6">
              <div className="relative inline-block shrink-0">
                <img
                  alt={profile.user.fullName || "User Profile"}
                  className="w-32 h-32 rounded-3xl border-4 border-[#111F19] shadow-2xl object-cover bg-[#0D1814]"
                  src={
                    profile.user.avatar ||
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  }
                />
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#22C55E] border-2 border-[#111F19] rounded-full" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-[#F1F5F2] tracking-tight">
                    {profile.user.fullName || "Your Full Name"}
                  </h1>
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                </div>
                <p className="text-sm font-semibold text-[#22C55E] mt-0.5">
                  {profile.user.profession || "Software Developer & Designer"}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#9AAEA3]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                    {profile.user.city && profile.user.country
                      ? `${profile.user.city}, ${profile.user.country}`
                      : "Location not set"}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    Open to Work
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => navigate("/edit-profile")}
                  className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            {/* Contact / Links Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-[#20352B]">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B] text-xs text-[#F1F5F2] truncate">
                <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="truncate">{user?.email || "email@domain.com"}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B] text-xs text-[#F1F5F2] truncate">
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="truncate">{profile.user.phoneNumber || "+91 Contact"}</span>
              </div>
              <button
                onClick={() => profile.user.portfolio && window.open(profile.user.portfolio, "_blank")}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B] hover:border-[#22C55E]/40 text-xs text-[#F1F5F2] hover:text-[#22C55E] transition-colors truncate cursor-pointer"
              >
                <Globe className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="truncate">{profile.user.portfolio || "Portfolio"}</span>
              </button>
              <button
                onClick={() => profile.user.github && window.open(profile.user.github, "_blank")}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B] hover:border-[#22C55E]/40 text-xs text-[#F1F5F2] hover:text-[#22C55E] transition-colors truncate cursor-pointer"
              >
                {/* <Github className="w-4 h-4 text-[#22C55E] shrink-0" /> */}
                <span className="truncate">{profile.user.github || "GitHub"}</span>
              </button>
              <button
                onClick={() => profile.user.linkedIn && window.open(profile.user.linkedIn, "_blank")}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0D1814] border border-[#20352B] hover:border-[#22C55E]/40 text-xs text-[#F1F5F2] hover:text-[#22C55E] transition-colors truncate cursor-pointer"
              >
                {/* <Linkedin className="w-4 h-4 text-[#22C55E] shrink-0" /> */}
                <span className="truncate">{profile.user.linkedIn || "LinkedIn"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About Me & Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* About Me */}
              <section className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <h3 className="text-sm font-bold text-[#F1F5F2] mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#22C55E]" />
                  <span>About Me</span>
                </h3>
                <p className="text-xs text-[#9AAEA3] leading-relaxed">
                  {profile.user.bio ||
                    "Passionate software engineer building scalable full-stack web applications and intuitive product experiences. Excited by microservices, modern front-end frameworks, and distributed systems."}
                </p>
              </section>

              {/* Stats Grid 6 Cards */}
              <section className="grid grid-cols-3 gap-3">
                <div className="bg-[#111F19] p-3 rounded-2xl border border-[#20352B] text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-1">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-[#F1F5F2]">24</span>
                  <span className="text-[9px] font-bold text-[#9AAEA3] uppercase">Applied</span>
                </div>

                <div className="bg-[#111F19] p-3 rounded-2xl border border-[#20352B] text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-[#F1F5F2]">6</span>
                  <span className="text-[9px] font-bold text-[#9AAEA3] uppercase">Interviews</span>
                </div>

                <div className="bg-[#111F19] p-3 rounded-2xl border border-[#20352B] text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-1">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-[#F1F5F2]">{savedJobs.length || "12"}</span>
                  <span className="text-[9px] font-bold text-[#9AAEA3] uppercase">Saved</span>
                </div>

                <div className="bg-[#111F19] p-3 rounded-2xl border border-[#20352B] text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#34D399]/15 text-[#34D399] flex items-center justify-center mb-1">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-[#F1F5F2]">1.4k</span>
                  <span className="text-[9px] font-bold text-[#9AAEA3] uppercase">Views</span>
                </div>

                <div className="bg-[#111F19] p-3 rounded-2xl border border-[#20352B] text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#34D399]/15 text-[#34D399] flex items-center justify-center mb-1">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-[#F1F5F2]">8</span>
                  <span className="text-[9px] font-bold text-[#9AAEA3] uppercase">Projects</span>
                </div>

                <div className="bg-[#111F19] p-3 rounded-2xl border border-[#20352B] text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#34D399]/15 text-[#34D399] flex items-center justify-center mb-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-black text-[#F1F5F2]">2+ Yrs</span>
                  <span className="text-[9px] font-bold text-[#9AAEA3] uppercase">Exp</span>
                </div>
              </section>
            </div>

            {/* Skills Section */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-sm font-bold text-[#F1F5F2] mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#22C55E]" />
                <span>Verified Skills & Competencies</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Next.js",
                  "Express.js",
                  "PostgreSQL",
                  "MongoDB",
                  "GraphQL",
                  "Docker",
                  "Tailwind CSS",
                  "Redux Toolkit",
                  "Git & CI/CD",
                  "REST APIs",
                  "Jest",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0D1814] border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] hover:text-[#22C55E] text-xs font-semibold transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-[#F1F5F2] flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#22C55E]" />
                  <span>Work Experience</span>
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D1814] border border-[#20352B] space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-[#F1F5F2]">
                      Full-Stack Software Engineer Intern
                    </h4>
                    <p className="text-xs text-[#22C55E] font-semibold">
                      TechScale Solutions
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-bold">
                    Present
                  </span>
                </div>
                <p className="text-[11px] text-[#9AAEA3]">Jan 2024 - Present • Bengaluru (Remote)</p>
                <p className="text-xs text-[#9AAEA3] leading-relaxed pt-1">
                  Engineered performant React interfaces and Node.js microservices handling 50k+ daily transactions. Improved page load times by 32%.
                </p>
              </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-[#111F19] p-6 sm:p-8 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-sm font-bold text-[#F1F5F2] mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#F59E0B]" />
                <span>Milestones & Badges</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#0D1814] border border-[#20352B] text-center">
                  <div className="text-lg font-black text-[#22C55E]">300+</div>
                  <p className="text-[10px] text-[#9AAEA3] font-semibold mt-0.5">LeetCode Solved</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0D1814] border border-[#20352B] text-center">
                  <div className="text-lg font-black text-[#34D399]">12</div>
                  <p className="text-[10px] text-[#9AAEA3] font-semibold mt-0.5">Open Source Repos</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0D1814] border border-[#20352B] text-center">
                  <div className="text-lg font-black text-[#F59E0B]">Top 5%</div>
                  <p className="text-[10px] text-[#9AAEA3] font-semibold mt-0.5">Contest Rank</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0D1814] border border-[#20352B] text-center">
                  <div className="text-lg font-black text-[#22C55E]">5 ★</div>
                  <p className="text-[10px] text-[#9AAEA3] font-semibold mt-0.5">JS Certified</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Education Card */}
            <section className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-3">
              <h3 className="text-sm font-bold text-[#F1F5F2] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#22C55E]" />
                <span>Education</span>
              </h3>
              <div className="p-3.5 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                <h4 className="text-xs font-bold text-[#F1F5F2]">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-xs text-[#22C55E] mt-0.5">
                  {profile.user.university || "National Institute of Technology"}
                </p>
                <p className="text-[10px] text-[#9AAEA3] mt-1">
                  {education.startYear || "2021"} - {education.endYear || "2025"}
                </p>
              </div>
            </section>

            {/* Resume Card */}
            <section className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
              <h3 className="text-sm font-bold text-[#F1F5F2] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#22C55E]" />
                <span>Verified Resume</span>
              </h3>
              <div className="p-3.5 rounded-2xl bg-[#0D1814] border border-[#20352B] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0 font-bold text-xs">
                  PDF
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-[#F1F5F2] truncate">
                    {profile.user.fullName ? `${profile.user.fullName}_Resume.pdf` : "Candidate_Resume.pdf"}
                  </p>
                  <p className="text-[10px] text-[#9AAEA3]">Updated this month</p>
                </div>
              </div>

              <button className="w-full py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] text-xs font-extrabold rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </section>

            {/* Projects Link Preview Card */}
            <section className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-[#F1F5F2]">
                  Portfolio Projects
                </h3>
                <Link
                  to="/projects"
                  className="text-xs font-bold text-[#22C55E] hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                  <p className="text-xs font-bold text-[#F1F5F2]">JobKar Talent Portal</p>
                  <p className="text-[10px] text-[#9AAEA3] mt-0.5">React • Node.js • TypeScript</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#0D1814] border border-[#20352B]">
                  <p className="text-xs font-bold text-[#F1F5F2]">FinTech Ledger Engine</p>
                  <p className="text-[10px] text-[#9AAEA3] mt-0.5">Next.js • PostgreSQL • Docker</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Profile;
