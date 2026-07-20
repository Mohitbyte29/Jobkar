import UserNav from "@/components/UserNav"
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

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
  }
} 

const defaultProfile: UserProfile = {
  user: {
    fullName: '',
    profession: '',
    city: '',
    country: '',
    industry: '',
    coverImage: '',
    github: '',
    linkedIn: '',
    portfolio: '',
    university: '',
    phoneNumber: '',
    bio: '',
    profileViews: 0,
    yearsOfExperience: 0,
    skills: '',
    avatar: '',
    achievements: '',
  }
};

const defaultEducation: Education = {
  startYear: null,
  endYear: null,
}

const defaultUser: User = { 
  gmail: ''
}

const Profile = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [education, setEducation] = useState<Education>(defaultEducation);
  const [savedJobs, setSavedJobs] = useState<string>("");
  
  useEffect(() => {
  const handleCountSavedJobs = async () => {
    try{
      const res = await axios.get('http://localhost:4000/api/jobs/saved', { withCredentials: true });
      setSavedJobs(res.data);
      console.log("Saved Jobs Count: ", savedJobs.length);
    } catch (error) {
      console.error('Error fetching saved jobs:', error);
    }
  }; 
  handleCountSavedJobs(); 
}, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/me/profile', { withCredentials: true });
        const resEducation = await axios.get('http://localhost:4000/api/me/education', { withCredentials: true });
        console.log(res.data);
        console.log(resEducation.data);
        setProfile(res.data);
        setEducation({
          startYear: resEducation.data.education.startYear,
          endYear: resEducation.data.education.endYear,
        });
        console.log(education.startYear, education.endYear);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []); // Re-fetch profile when saved jobs count changes

  return (
    <div className="flex min-h-screen">
  {/* BEGIN: Sidebar Navigation */}
    <UserNav />
  {/* END: Sidebar Navigation */}
  {/* BEGIN: Main Content Area */}
  <main className="flex-1 ml-64 p-8">
    {/* BEGIN: Top Header Bar */}
    <header
      className="flex items-center justify-end space-x-6 mb-8"
      data-purpose="top-nav"
    >
      <button className="text-slate-400 hover:text-slate-600">
        <i className="fas fa-search text-lg" />
      </button>
      <button className="relative text-slate-400 hover:text-slate-600">
        <i className="fas fa-bell text-lg" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-job-blue border-2 border-job-bg rounded-full text-[10px] text-white flex items-center justify-center">
          1
        </span>
      </button>
      <div className="flex items-center space-x-2 border-l border-job-border pl-6">
        <img
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGbIlWbeMdFWpm8cK_lenu-0vfYMb2B6crv-3KC4f1Z1ApzFPTHvG8hlcrnIJjXV-Sf5BOvQ2cgKbQkW1PbhREGKKKo0qryXWDYwmLMcw3Y1-54TsB476kJ3Z6zVLJc2Vn35u_z1VsqqIr65kGppp4aX-oM2iQ3lWdW9zL2CBM2TEg3CyTOw_KV2u8a-N2D3Z74kv4Q-Z-xW0kdhc7laRRJ48aVlbTQBjQMTxr7oYytXxG6qLEbs8YArTn7rbyp1DGlf3ZULj_TDo"
        />
        <i className="fas fa-chevron-down text-xs text-slate-400" />
      </div>
    </header>
    {/* END: Top Header Bar */}
    {/* BEGIN: Profile Header Section */}
    <section
      className="bg-white rounded-3xl border border-job-border overflow-hidden mb-8"
      data-purpose="profile-header"
    >
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            `url("${profile.user.coverImage}")`
        }}
      />
      <div className="px-8 pb-8 relative">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
          <div className="relative inline-block">
            <img
              alt={profile.user.fullName || 'User Profile'}
              className=" w-fit h-36 rounded-full border-4 border-white shadow-lg object-cover"
              src={profile.user.avatar || 'https://imgs.search.brave.com/NYqJ2WDMfTwFx2ciQ-q3hnJBECcbVOtzjNoJWuPnG7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2RlZmF1bHQt/YXZhdGFyLXByb2Zp/bGUtaWNvbi1zb2Np/YWwtbWVkaWEtdXNl/ci1pbWFnZS1ncmF5/LWF2YXRhci1pY29u/LWJsYW5rLXByb2Zp/bGUtc2lsaG91ZXR0/ZS12ZWN0b3ItaWxs/dXN0cmF0aW9uXzU2/MTE1OC0zNDg1Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA'}
            />  
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-white rounded-full" />
          </div>
          <div className="md:ml-6 mb-2 mt-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">
                {profile.user.fullName}
              </h1>
              <i className="fas fa-check-circle text-blue-500 ml-2" />
            </div>
            <p className="text-job-blue font-medium">
              {profile.user.profession}
            </p>
            <div className="flex items-center mt-1 text-slate-500 text-sm">
              <i className="fas fa-map-marker-alt mr-2" />
              <span>{profile.user.city}, {profile.user.country}</span>
              <span className="mx-3 text-slate-300">|</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5" />
                Open to Work
              </span>
            </div>
          </div>
          <div className="md:ml-auto mb-2">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center transition-all shadow-sm active:scale-95 cursor-pointer" onClick={() => {navigate('/edit-profile')}}><span className="material-symbols-outlined mr-2">edit</span> Edit Profile</button>
          </div>  
        </div>
        {/* Contact Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6 border-t border-job-border">
          <button className="flex items-center space-x-2 text-slate-100 bg-black p-2 rounded-xl  hover:text-job-blue cursor-pointer">
            <i className="fas fa-envelope text-slate-400" />
            <span className="text-xs truncate">{user?.email}</span>
          </button>
          <button className="flex items-center space-x-2 text-slate-100 bg-black p-2 rounded-xl  hover:text-job-blue cursor-pointer">
            <i className="fas fa-phone text-slate-400" />
            <span className="text-xs">{profile.user.phoneNumber}</span>
          </button>
          <button onClick={() => window.open(profile.user.portfolio, '_blank')} className="flex items-center space-x-2 text-slate-100 bg-black  p-2 rounded-xl hover:text-job-blue cursor-pointer">
            <i className="fas fa-link text-slate-400" />
            <span className="text-xs">{profile.user.portfolio}</span>
          </button>
          <button onClick={() => window.open(profile.user.github, '_blank')} className="flex items-center space-x-2 text-slate-100 bg-black p-2 rounded-xl  hover:text-job-blue cursor-pointer">
            <i className="fab fa-github text-slate-400" />
            <span className="text-xs">{profile.user.github}</span>
          </button>
          <button onClick={() => window.open(profile.user.linkedIn, '_blank')} className="flex items-center space-x-2 text-slate-100 bg-black p-2 rounded-xl  hover:text-job-blue cursor-pointer">
            <i className="fab fa-linkedin text-slate-400" />
            <span className="text-xs">{profile.user.linkedIn}</span>
          </button>
        </div>
      </div>
    </section>
    {/* END: Profile Header Section */}
    <div className="grid grid-cols-12 gap-8">
      {/* BEGIN: Left Column (About & Main Content) */}
      <div className="col-span-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          {/* BEGIN: About Me */}
          <section
            className="bg-white p-6 rounded-3xl border border-job-border h-full"
            data-purpose="about-me"
          >
            <div className="flex items-center space-x-2 mb-4">
              <i className="far fa-user text-job-blue text-lg" />
              <h3 className="font-bold text-slate-900">About Me</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {profile.user.bio || 'No bio available.'}
            </p>
          </section>
          {/* END: About Me */}
          {/* BEGIN: Profile Overview Grid */}
          <section className="grid grid-cols-3 gap-3" data-purpose="stats-grid">
            {/* Stat Card 1 */}
            <div className="bg-white p-4 rounded-2xl border border-job-border flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-2">
                <i className="fas fa-briefcase text-sm" />
              </div>
              <div className="text-lg font-bold">24</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                Jobs Applied
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-white p-4 rounded-2xl border border-job-border flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-2">
                <i className="fas fa-users text-sm" />
              </div>
              <div className="text-lg font-bold">6</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                Interviews
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-white p-4 rounded-2xl border border-job-border flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-2">
                <i className="fas fa-heart text-sm" />
              </div>
              <div className="text-lg font-bold">{savedJobs.length}</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                Saved Jobs
              </div>
            </div>
            {/* Stat Card 4 */}
            <div className="bg-white p-4 rounded-2xl border border-job-border flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-2">
                <i className="fas fa-eye text-sm" />
              </div>
              <div className="text-lg font-bold">1.4K</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                Profile Views
              </div>
            </div>
            {/* Stat Card 5 */}
            <div className="bg-white p-4 rounded-2xl border border-job-border flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-2">
                <i className="fas fa-folder text-sm" />
              </div>
              <div className="text-lg font-bold">8</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                Projects
              </div>
            </div>
            {/* Stat Card 6 */}
            <div className="bg-white p-4 rounded-2xl border border-job-border flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-2">
                <i className="fas fa-award text-sm" />
              </div>
              <div className="text-lg font-bold">2</div>
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                Years Exp.
              </div>
            </div>
          </section>
          {/* END: Profile Overview Grid */}
        </div>
        {/* BEGIN: Skills Section */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="skills"
        >
          <div className="flex items-center space-x-2 mb-6">
            <i className="fas fa-code text-job-blue text-lg" />
            <h3 className="font-bold text-slate-900">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              React
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Next.js
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Node.js
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Express.js
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Prisma
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Redux
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Git
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Docker
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              JWT
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              Postman
            </span>
            <span className="px-4 py-2 bg-blue-50 text-job-blue text-xs font-semibold rounded-lg border border-blue-100">
              MongoDB Atlas
            </span>
          </div>
        </section>
        {/* END: Skills Section */}
        {/* BEGIN: Experience Section */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="experience"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <i className="fas fa-briefcase text-job-blue text-lg" />
              <h3 className="font-bold text-slate-900">Experience</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-slate-50 border border-job-border rounded-xl flex items-center justify-center shrink-0">
                <i className="fas fa-laptop-code text-job-blue text-xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900">
                    MERN Stack Developer Intern
                  </h4>
                  <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded">
                    Present
                  </span>
                </div>
                <p className="text-job-blue text-xs font-semibold mt-0.5">
                  XYZ Technologies
                </p>
                <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-wide">
                  Jan 2024 - Present • 1 yr 3 mos
                </p>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Working on building scalable web applications using MERN
                  stack. Collaborating with a talented team to deliver
                  high-quality products.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-50 flex justify-center">
              <button className="text-job-blue font-bold text-xs hover:underline uppercase tracking-wide">
                View All Experience
              </button>
            </div>
          </div>
        </section>
        {/* END: Experience Section */}
        {/* BEGIN: Projects Grid */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="projects"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <i className="fas fa-cube text-job-blue text-lg" />
              <h3 className="font-bold text-slate-900">Projects</h3>
            </div>
            <Link to='/projects' target="_blank" className="text-job-blue text-[10px] font-bold uppercase hover:underline">
              View All Projects
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group border border-job-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-28 bg-slate-100 overflow-hidden relative">
                <img
                  alt="Project 1"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdgfCblDglEgSJA1j4mM9BGGLkoYBdqElfCKC8PQkj0ORgVTI-UnmnarKd94bln2HvLDEFfWUim4fFN4m9t8CEJgIVmhYmuuV5uuqrPesletzYowaNpXL9L4IkM26M_c0ThzUWAlSgA2kM2ZuWAsdzy2J0n2N7XdL7I4zgo9RUxXGB0Yswmd0NJ3SZYev6FVzCa01nXteCuPHuLnyqvqdabkuvf9Ryn_5OTqjHHRuFilAbrsF7oJXa11-ufG-nBR0Wl2o2szPYi9k"
                />
              </div>
              <div className="p-3">
                <h5 className="text-xs font-bold text-slate-900">
                  AI Job Portal
                </h5>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  AI-powered job portal that matches candidates with relevant
                  opportunities.
                </p>
                <div className="flex flex-wrap gap-1 mt-3 mb-3">
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    MERN
                  </span>
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    Tailwind
                  </span>
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    AI
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <i className="fab fa-github text-sm hover:text-slate-600 cursor-pointer" />
                  <i className="fas fa-link text-sm hover:text-slate-600 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group border border-job-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-28 bg-slate-100 overflow-hidden relative">
                <img
                  alt="Project 2"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnmgGC6_t1exw4wP0KrTyX87Zh3MxmyTp2rbtIUZZFH58ekEr7DCH_xQnIteep3USSCilOwqQQLZRCugNW6wHICXQZ-SFDcqzx9f8ICnXe-IjLPLjJ_rNdQy_zTN8bRsCNOIX_mP5Ud3Wve39v6TDwUMHkjtPB9X12EbtMVVXhO2ngyBV2buAqXE03SnozXyW8j9r8TSNdntbKEAomPAWS8z6i7qf4x0ZKRSmHy3vLDHYO-mJB0RYv0pfArKsm0VwMKnY5cPHpdKc"
                />
              </div>
              <div className="p-3">
                <h5 className="text-xs font-bold text-slate-900">
                  Real Estate Platform
                </h5>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  Real estate platform to buy, sell and rent properties
                  seamlessly.
                </p>
                <div className="flex flex-wrap gap-1 mt-3 mb-3">
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    MERN
                  </span>
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    Maps API
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <i className="fab fa-github text-sm hover:text-slate-600 cursor-pointer" />
                  <i className="fas fa-link text-sm hover:text-slate-600 cursor-pointer" />
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group border border-job-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-28 bg-slate-100 overflow-hidden relative">
                <img
                  alt="Project 3"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXaVTUJFvjrZv-ojLTpCusvmANIAEDXnAzwyZKaI7apddC0VpUJZ6TaWTGBGRJ8KQy-VMUU7VHTp_7Rad4lopaFPbZS8-r_QFCzsHF5qFS6vl2iWcXgzpVhBLLHm-WNwAarC2LaLpGqtt1cBFBWv2C2x_oVFNHZ84ZGjJmVm9wbXlJ52hDmHhUoCa8fNcnPshCong8wWpzyb6D8RMGo9--9V6HKojyKZOinr3TRBoe_PiSdlZRGIxStMvulZFEn3TykbGq04T-j2Y"
                />
              </div>
              <div className="p-3">
                <h5 className="text-xs font-bold text-slate-900">
                  Chat Application
                </h5>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                  Real-time chat application with private rooms and
                  authentication.
                </p>
                <div className="flex flex-wrap gap-1 mt-3 mb-3">
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    Socket.io
                  </span>
                  <span className="text-[8px] bg-slate-50 px-1.5 py-0.5 rounded text-slate-500">
                    Node.js
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <i className="fab fa-github text-sm hover:text-slate-600 cursor-pointer" />
                  <i className="fas fa-link text-sm hover:text-slate-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-1.5">
            <span className="w-1.5 h-1.5 bg-job-blue rounded-full" />
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
          </div>
        </section>
        {/* END: Projects Grid */}
        {/* BEGIN: Achievements Section */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="achievements"
        >
          <div className="flex items-center space-x-2 mb-6">
            <i className="fas fa-trophy text-yellow-500 text-lg" />
            <h3 className="font-bold text-slate-900">Achievements</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 border border-job-border rounded-2xl flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-50 text-green-500 flex items-center justify-center rounded-xl shrink-0">
                <i className="fas fa-leaf" />
              </div>
              <div>
                <div className="text-sm font-bold">300+</div>
                <div className="text-[9px] text-slate-400 font-medium">
                  LeetCode Problems
                </div>
              </div>
            </div>
            <div className="p-4 border border-job-border rounded-2xl flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-50 text-purple-500 flex items-center justify-center rounded-xl shrink-0">
                <i className="fab fa-github" />
              </div>
              <div>
                <div className="text-sm font-bold">4</div>
                <div className="text-[9px] text-slate-400 font-medium">
                  GitHub Repositories
                </div>
              </div>
            </div>
            <div className="p-4 border border-job-border rounded-2xl flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 flex items-center justify-center rounded-xl shrink-0">
                <i className="fas fa-medal" />
              </div>
              <div>
                <div className="text-sm font-bold">Top 10%</div>
                <div className="text-[9px] text-slate-400 font-medium">
                  Coding Contest
                </div>
              </div>
            </div>
            <div className="p-4 border border-job-border rounded-2xl flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-50 text-teal-500 flex items-center justify-center rounded-xl shrink-0">
                <i className="fas fa-award" />
              </div>
              <div>
                <div className="text-sm font-bold">5 ★</div>
                <div className="text-[9px] text-slate-400 font-medium">
                  HackerRank Badge
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Achievements Section */}
      </div>
      {/* END: Left Column */}
      {/* BEGIN: Right Column (Sidebars) */}
      <aside className="col-span-4 space-y-8">
        {/* BEGIN: Recent Activity */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="recent-activity"
        >
          <div className="flex items-center space-x-2 mb-6">
            <i className="fas fa-clock text-job-blue text-lg" />
            <h3 className="font-bold text-slate-900">Recent Activity</h3>
          </div>
          <div className="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[1px] before:bg-slate-100">
            {/* Activity Item 1 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-[22px] h-[22px] bg-white border border-job-border rounded-full flex items-center justify-center z-10">
                <i className="fas fa-briefcase text-[10px] text-green-500" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">
                  Applied for Frontend Developer at Google
                </h5>
                <p className="text-[10px] text-slate-400 mt-1">2 hours ago</p>
              </div>
            </div>
            {/* Activity Item 2 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-[22px] h-[22px] bg-white border border-job-border rounded-full flex items-center justify-center z-10">
                <i className="fas fa-file-alt text-[10px] text-blue-500" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">
                  Updated Resume
                </h5>
                <p className="text-[10px] text-slate-400 mt-1">1 day ago</p>
              </div>
            </div>
            {/* Activity Item 3 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-[22px] h-[22px] bg-white border border-job-border rounded-full flex items-center justify-center z-10">
                <i className="fas fa-plus text-[10px] text-purple-500" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">
                  Added New Project - AI Job Portal
                </h5>
                <p className="text-[10px] text-slate-400 mt-1">3 days ago</p>
              </div>
            </div>
            {/* Activity Item 4 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-[22px] h-[22px] bg-white border border-job-border rounded-full flex items-center justify-center z-10">
                <i className="fas fa-check text-[10px] text-orange-500" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">
                  Completed JavaScript Assessment
                </h5>
                <p className="text-[10px] text-slate-400 mt-1">5 days ago</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-2 border border-slate-100 rounded-xl text-xs font-bold text-job-blue hover:bg-slate-50 transition-colors uppercase tracking-wide">
            View All Activity
          </button>
        </section>
        {/* END: Recent Activity */}
        {/* BEGIN: Education */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="education"
        >
          <div className="flex items-center space-x-2 mb-6">
            <i className="fas fa-graduation-cap text-job-blue text-lg" />
            <h3 className="font-bold text-slate-900">Education</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                B.Tech in Information Technology
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {profile.user.university}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">
                {education.startYear || 'N/A'} - {education.endYear || 'N/A'}
              </p>
            </div>
          </div>
        </section>
        {/* END: Education */}
        {/* BEGIN: Resume Card */}
        <section
          className="bg-white p-6 rounded-3xl border border-job-border"
          data-purpose="resume"
        >
          <div className="flex items-center space-x-2 mb-6">
            <i className="fas fa-file-invoice text-job-blue text-lg" />
            <h3 className="font-bold text-slate-900">Resume</h3>
          </div>
          <div className="flex items-center space-x-4 p-4 border border-job-border rounded-2xl bg-slate-50">
            <div className="w-12 h-12 bg-white border border-job-border rounded-xl flex items-center justify-center shrink-0">
              <i className="fas fa-file-pdf text-red-500 text-xl" />
            </div>
            <div className="flex-1 overflow-hidden">
              <h5 className="text-xs font-bold text-slate-900 truncate">
                Resume.pdf
              </h5>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Updated on 12 May 2024
              </p>
            </div>
          </div>
          <button className="w-full mt-4 flex items-center justify-center space-x-2 py-3 bg-slate-50 text-job-blue text-xs font-bold rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
            <i className="fas fa-download" />
            <span>Download</span>
          </button>
        </section>
        {/* END: Resume Card */}
      </aside>
      {/* END: Right Column */}
    </div>
  </main>
  {/* END: Main Content Area */}
</div>

  )
}

export default Profile
