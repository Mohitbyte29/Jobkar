import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

interface Job {
  category: string;
    city: string;
    country: string;
  status: string;
  description: string;
  tags: string[];
  requirements: string;
  title: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
}

export const PostJob = () => {
  const [remote, setRemote] = useState(false);
  const [company, setCompany] = useState<string>("");
  const [job, setJob] = useState<Job>({
    category: "",
    title: "",
    type: "",
    salaryMin: 0,
    salaryMax: 0,
      city: "",
      country: "",
    status: "",
    description: "",
    tags: [],
    requirements: "",
  }); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
      setJob((prevJob) => ({
        ...prevJob,
        [name] : value
      }));
    }
  
  return (
    <div>
      <Navbar />
      <main className="py-8 md:py-16 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
  {/* Header Section */}
  <div className="lg:col-span-12 mb-4 md:mb-8 text-center max-w-3xl mx-auto">
    <h1 className="font-display text-4xl font-bold text-on-surface mb-6">
      Create a Job Opening
    </h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant text-xl">
      Attract the world's best talent with a detailed job description.
    </p>
  </div>
  {/* Main Form Column */}
  <div className="lg:col-span-8">
    <div className="bg-white p-8 md:p-14 rounded-[32px] shadow-[0_8px_40px_rgb(0,0,0,0.03)]">
      <form className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="font-label-strong text-label-strong text-on-surface-variant">
              Your Company 
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
              placeholder="e.g. Google"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          {/* Your Role */}
          <div className="space-y-2">
            <label className="font-label-strong text-label-strong text-on-surface-variant">
              Your Role
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
              placeholder="e.g. Hiring Manager"
              type="text"
            />
          </div>
          {/* Job Title */}
          <div className="space-y-2">
            <label className="font-label-strong text-label-strong text-on-surface-variant">
              Job Title
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
              placeholder="e.g. Senior Product Designer"
              type="text" onChange={handleInputChange} name="title" value={job.title}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Job Category */}
          <div className="space-y-2">
            <label className="font-label-strong text-label-strong text-on-surface-variant">
              Job Category
            </label>
            <select onChange={handleInputChange} name="category" value={job.category} className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none appearance-none">
              <option value="TECHNOLOGY_SOFTWARE">Technology</option>
              <option value="CREATIVE_MEDIA">Creative Media</option>
              <option value="MARKETING">Marketing</option>
              <option value="HEALTHCARE">HealthCare</option>
              <option value="FINANCE">Finance</option>
              <option value="EDUCATION_GOVERNMENT">Education</option>
              <option value="BUSINESS_OPERATIONS">Business Operations</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {/* Location */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-label-strong text-label-strong text-on-surface-variant">
                Location
              </label>
              <div className="flex items-center gap-3">
                <span className="text-label-caps font-label-caps text-on-surface-variant">
                        Remote
                      </span>
                      <button
                        onClick={() => setRemote(!remote)}
                        className={`
          w-10 h-6 rounded-full p-1 cursor-pointer
          transition
          ${remote ? "bg-blue-500" : "bg-gray-300"} 
        `} type="button"
                      >
                        <span
                          aria-hidden="true"
                          className={`
                             flex items-center h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
                            ${remote ? "translate-x-4" : "translate-x-0"}
                          `}
                        />
                      </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
                placeholder="City"
                type="text" onChange={handleInputChange} name="city" value={job.city}
              />
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
                placeholder="Country"
                type="text" onChange={handleInputChange} name="country" value={job.country}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="font-label-strong text-label-strong text-on-surface-variant">
              Job Type
            </label>
            <select onChange={handleInputChange} name="jobType" value={job.type} className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none appearance-none">
              <option value="FULL_TIME">Full-time</option>
              <option value="PART_TIME">Part-time</option>
              <option value="CONTRACT">Contract</option>
              <option value="REMOTE">Remote</option>
              <option value="INTERN">Internship</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-label-strong text-label-strong text-on-surface-variant">
              Job Status
            </label>
            <select onChange={handleInputChange} name="status" value={job.status} className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none appearance-none">
              <option value="ACTIVE">Active</option>
              <option value="DRAFT">Draft</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="space-y-4">
          <label className="font-label-strong text-label-strong text-on-surface-variant block">
            Job Description
          </label>
          <div className="bg-surface-container-low rounded-2xl p-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            {/* Toolbar */}
            <div className="p-2 flex gap-1 mb-2">
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="format_bold"
                >
                  format_bold
                </span>
              </button>
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="format_italic"
                >
                  format_italic
                </span>
              </button>
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="format_list_bulleted"
                >
                  format_list_bulleted
                </span>
              </button>
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="format_list_numbered"
                >
                  format_list_numbered
                </span>
              </button>
              <div className="w-px h-6 bg-outline-variant mx-3 my-auto" />
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="link"
                >
                  link
                </span>
              </button>
            </div>
            <textarea
              className="w-full p-4 text-body-lg bg-transparent border-none focus:ring-0 outline-none resize-none"
              placeholder="Tell us about the role, responsibilities, and requirements..."
              rows={8}
              defaultValue={""} onChange={handleInputChange} name="description" value={job.description}
            />
          </div>
        </div>
        {/* Tags */}
        <div className="space-y-4">
          <label className="font-label-strong text-label-strong text-on-surface-variant">
            Tags
          </label>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 p-3 bg-surface-container-low rounded-2xl focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-body-sm shadow-sm">
                <span className="">Next Js</span>
                <button
                  className="hover:text-error transition-colors flex items-center"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    close
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-body-sm shadow-sm">
                <span className="">UI Design</span>
                <button
                  className="hover:text-error transition-colors flex items-center"
                  type="button" 
                >
                  <span className="material-symbols-outlined text-[14px]">
                    close
                  </span>
                </button>
              </div>
              <input
                className="flex-1 min-w-[120px] bg-transparent border-none focus:ring-0 px-2 py-1.5 text-body-lg outline-none"
                placeholder="Type and press Enter..."
                type="text" onChange={handleInputChange} name="tags" value={job.tags.join(", ")}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-label-caps font-label-caps text-on-surface-variant tracking-wider">
                SUGGESTED:
              </span>
              <button
                className="px-4 py-1.5 rounded-full bg-white border border-outline-variant text-body-sm hover:border-primary hover:text-primary transition-colors"
                type="button"
              >
                JavaScript
              </button>
              <button
                className="px-4 py-1.5 rounded-full bg-white border border-outline-variant text-body-sm hover:border-primary hover:text-primary transition-colors"
                type="button"
              >
                Marketing
              </button>
              <button
                className="px-4 py-1.5 rounded-full bg-white border border-outline-variant text-body-sm hover:border-primary hover:text-primary transition-colors"
                type="button"
              >
                Python
              </button>
              <button
                className="px-4 py-1.5 rounded-full bg-white border border-outline-variant text-body-sm hover:border-primary hover:text-primary transition-colors"
                type="button"
              >
                React
              </button>
            </div>
          </div>
        </div>
        
        {/* Requirements */}
        <div className="space-y-4">
          <label className="font-label-strong text-label-strong text-on-surface-variant block">
            Requirements
          </label>
          <div className="bg-surface-container-low rounded-2xl p-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <div className="p-2 flex gap-1 mb-2">
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">
                  format_bold
                </span>
              </button>
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">
                  format_italic
                </span>
              </button>
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">
                  format_list_bulleted
                </span>
              </button>
              <div className="w-px h-6 bg-outline-variant mx-3 my-auto" />
              <button
                className="p-2 hover:bg-white rounded-lg transition-colors text-on-surface-variant"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">link</span>
              </button>
            </div>
            <textarea
              className="w-full p-4 text-body-lg bg-transparent border-none focus:ring-0 outline-none resize-none"
              placeholder="List specific candidate qualifications, skills, and experience..."
              rows={6} onChange={handleInputChange} name="requirements" value={job.requirements}
              defaultValue={""}
            />
          </div>
        </div>
        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center gap-6 pt-8 border-t border-outline-variant">
          <button
            className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-label-strong text-base hover:bg-on-surface transition-colors shadow-md"
            type="submit"
          >
            Post Job
          </button>
          <button
            className="w-full md:w-auto px-10 py-4 text-on-surface-variant hover:text-on-surface rounded-full font-label-strong text-base transition-colors"
            type="button"
          >
            Save for later
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* Sidebar Column */}
  <aside className="lg:col-span-4 space-y-8">
    {/* Posting Tips Card */}
    <div className="bg-white p-8 rounded-[32px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] space-y-8">
      <div className="flex items-center gap-4">
        <div className="bg-surface-container-low p-3 rounded-2xl">
          <span
            className="material-symbols-outlined text-on-surface text-2xl"
            data-icon="lightbulb"
          >
            lightbulb
          </span>
        </div>
        <h3 className="font-h2 text-h2 text-on-surface">Posting Tips</h3>
      </div>
      <div className="space-y-8">
        <div className="flex gap-5">
          <div className="text-on-surface-variant font-display text-2xl leading-none mt-1 opacity-50">
            01
          </div>
          <div className="space-y-2">
            <h4 className="font-label-strong text-base text-on-surface">
              Specific Title
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Titles like "Senior Frontend Engineer" perform 40% better than
              generic ones.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-on-surface-variant font-display text-2xl leading-none mt-1 opacity-50">
            02
          </div>
          <div className="space-y-2">
            <h4 className="font-label-strong text-base text-on-surface">
              Define Success
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Clearly list what the candidate is expected to achieve in their
              first 90 days.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-on-surface-variant font-display text-2xl leading-none mt-1 opacity-50">
            03
          </div>
          <div className="space-y-2">
            <h4 className="font-label-strong text-base text-on-surface">
              Salary Transparency
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Jobs with salary ranges attract 3x more qualified candidates.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <a
          className="text-on-surface font-label-strong text-base flex items-center gap-2 hover:gap-3 transition-all"
          href="#"
        >
          Read full guide
          <span
            className="material-symbols-outlined text-lg"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </a>
      </div>
    </div>
    {/* Ad/Promo Card */}
    <div className="relative h-[240px] rounded-[32px] overflow-hidden group shadow-[0_8px_40px_rgb(0,0,0,0.03)]">
      <img
        alt="Team collaborating"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        data-alt="professional diverse team collaborating in a bright modern office with glass walls and minimalist furniture"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaWkCCxOzBLplD7v_aOg5i7Qi3NnklJUl01qCDsRpJd3qJzRsE23ecb86H9ISPzgNKyZbsVbnX-IxtvjV8h73RJC3qHItxhKNb6i3HnZef_fxPyIaIDpfwR_Tx-dw3tkRWYvZXA5unA1QvLzUwlVaFx7mpA73o0g4phzUaychh6DSHkNcK7nezGmgDQKB9UdhPpbpyIYHHYLlMuDetznMT6FQejwJ53ljlonXXfroQr_BPfOkpbgwGWoKjYtXtaOJWvFO4fapHARg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-label-caps font-label-caps w-fit mb-4 border border-white/30">
          PREMIUM
        </span>
        <h4 className="text-white font-h2 text-h2 leading-tight mb-2">
          Hire 2x faster
        </h4>
        <p className="text-white/80 font-body-sm text-body-sm line-clamp-2">
          Get featured listings and advanced screening tools.
        </p>
      </div>
    </div>
  </aside>
</main>

      <Footer />
    </div>
  );
};