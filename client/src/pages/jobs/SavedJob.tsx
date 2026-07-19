import Footer from "@/components/Footer"
import UserNav from "@/components/UserNav"
import axios from "axios";
import { IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";
import toast,{ Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface SavedJob {
  id: number;
  userId: number;
  jobId: number;
  createdAt: string;
  job: {
    companyId: number;
    category: string;
    company: {
      UserId: number;
      category: string;
      name: string;
      location: string;
      requirements: string;
      remote: boolean;
      description: string;
      logo: string;
      website: string;
      createdAt: string;
      updatedAt: string;
    };
    title: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    updatedAt: string;
    createdAt: string;
  };
    }
const SavedJob = () => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const navigate = useNavigate();
  
  const handleRemoveSavedJob = async (jobId: number) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/jobs/${jobId}/save`, { withCredentials: true });
      // Remove the job from the savedJobs state
      setSavedJobs((prevSavedJobs) =>
          prevSavedJobs.filter((job) => job.id !== jobId)
      );
      toast.success("Job removed from saved jobs");
    } catch (error) {
      toast.error("Error removing saved job");
      console.error("Error removing saved job:", error);
    }
  }
  useEffect(() => {
    const handlegetSavedJobs = async () => {
      try{
        const res = await axios.get(`http://localhost:4000/api/jobs/saved`, { withCredentials: true });
        setSavedJobs(res.data);
        console.log("Saved Jobs: ", savedJobs);
        // console.log(savedJobs.length);
      } catch(error){
        console.error("Error fetching saved jobs:", error);
      } 
    }
    handlegetSavedJobs();
  }, [handleRemoveSavedJob]); // Re-fetch saved jobs when a job is removed

  return (
    <>
  <Toaster/>
        <div className="min-h-screen flex flex-col">
      <UserNav />
      <div className="ml-64">
      <main className="w-full max-w-full mx-auto px-margin py-lg mt-8">
  {/* Header Section */}
  <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
    <div>
      <h1 className="font-h1 text-h1 text-primary">Saved Jobs</h1>
      <p className="text-on-surface-variant font-body-md mt-base">
        You have <span className="font-bold text-primary">{savedJobs.length}</span> jobs saved in
        your watchlist.
      </p>
    </div>
    <div className="flex gap-xs">
      <button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant rounded-lg font-label-strong text-label-strong hover:bg-surface-container-low transition-colors">
        <span className="material-symbols-outlined text-[18px]">sort</span>
        Recently Saved
      </button>
    </div>
  </div>
  <div className="flex flex-col gap-md w-full">
      {/* Job Card 1 */}
    {savedJobs.map((savedJob) => (
      <div key={savedJob.id}>
      <div className="bg-surface-container-lowest p-md md:p-lg rounded-xl card-shadow border border-surface-container flex flex-col md:flex-row gap-md hover:border-secondary transition-all group">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden border border-surface-variant">
          <img
            className="w-full h-full object-cover"
            data-alt="A minimalist logo for a tech company called 'Nova Systems', featuring sleek geometric lines and a deep indigo and electric blue color scheme. The visual style is modern, professional, and corporate, set against a clean white background with subtle depth and precision, evoking institutional stability."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDdMraPqZBEYk35BLzPMbhAPomw0rVoJs1SnoLCa5fv_9ywFQiMl1_8UGV8TdOPPIfTN7quvpaiRXm98mYMS1IWX5H5dMKNZdljwc_W4MIM1ttdYdXwO2IH6Nme4U1MfHNtzr5dUVfHz1-wErqb-Nym-Dpej6uJUpiQOOlZatQGgf2hZc-tLhzo4WqfAXzeLjBUjqil3boviVTC9ka7tISI6qAUVjbNGghjrMWdthrhJwB97RTdKfvZm0h4PM4qOICpzeKF1Gk24"
          />
        </div>
        <div className="grow">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-xs">
            <div>
              <h3 className="font-h3 text-h3 text-primary group-hover:text-secondary transition-colors">
                {savedJob.job.title}
              </h3>
              <div className="flex items-center gap-xs mt-base text-on-surface-variant font-body-sm">
                <span className="font-semibold text-on-surface">
                  {savedJob.job.company.name}
                </span>
                <span className="text-outline">•</span>
                <span className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  {savedJob.job.company.location} ({savedJob.job.company.remote ? 'Remote' : 'On-site'})
                </span>
              </div>
            </div>
            <span className="inline-flex items-center px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full text-label-caps uppercase">
              New
            </span>
          </div>
          <div className="flex flex-wrap gap-xs mt-md">
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              <div className="flex items-center gap-px">
                <IndianRupee width={16} height={16} />
                {savedJob.job.salaryMin / 1000}k -
                <IndianRupee width={16} height={16} />
               {savedJob.job.salaryMax / 1000}k
              </div>
            </span>
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              Full-time
            </span>
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              Figma, React
            </span>
          </div>
          <div className="flex items-center justify-between mt-lg pt-md border-t border-surface-container">
            <span className="text-body-sm text-outline flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">
                history
              </span>{" "}
              Saved {Math.floor((Date.now() - new Date(savedJob.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days ago
            </span>
            <div className="flex items-center gap-sm">
              <button 
                className="px-6 py-4 border border-error text-error font-label-strong rounded-lg hover:bg-error hover:text-white transition-all active:scale-95 cursor-pointer"
                onClick={() => handleRemoveSavedJob(savedJob.jobId)}
              >
                Remove 
              </button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-strong hover:bg-opacity-90 transition-all active:scale-95 cursor-pointer" onClick={() => navigate(`/jobs/search/${savedJob.job.title}`, { state: savedJob.job  })}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
  </div>
    ))}
  {/* Empty State Preview (Hidden by Default) */}
  <div
    className="hidden flex flex-col items-center justify-center py-xl text-center"
    id="empty-state"
  >
    <div className="w-48 h-48 mb-lg bg-surface-container rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined text-[80px] text-outline-variant">
        bookmark_border
      </span>
    </div>
    <h2 className="font-h2 text-h2 text-primary">No saved jobs yet</h2>
    <p className="text-on-surface-variant font-body-lg max-w-md mt-sm">
      Start exploring jobs and save the ones that catch your eye to keep track
      of your career journey.
    </p>
    <button className="mt-lg bg-primary text-on-primary px-xl py-md rounded-lg font-label-strong hover:opacity-90 transition-all">
      Find Your Next Role
    </button>
  </div>
      </div>
</main>
    <Footer/>
      </div>
        </div>     
    </>
  ) 
}

export default SavedJob
