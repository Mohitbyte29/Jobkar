import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useJobs } from "@/context/JobsContext";
import { useState } from "react";

interface Job {
  id: number;
  companyId: number;
  category: string;
  title: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  createdAt: string;
}

export const PostJob = () => {
  const [remote, setRemote] = useState(false);
  return (
    <div>
      <Navbar />
      <main className="mt-16 py-12 md:py-20 px-6 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Header Section */}
        <div className="lg:col-span-12 mb-8">
          <h1 className="font-h1 text-h1 text-on-background mb-2">
            Create a Job Opening
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Attract the world's best talent with a detailed job description.
          </p>
        </div>
        {/* Main Form Column */}
        <div className="lg:col-span-8 space-y-md">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
            <form className="space-y-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                {/* Your Role */}
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-background">
                    Your Company
                  </label>
                  <input
                    className="w-187 bg-white border border-outline-variant rounded-lg p-3 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none"
                    placeholder="e.g. Google"
                    type="text"
                  />
                </div>
                <br />
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-background">
                    Your Role
                  </label>
                  <input
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none"
                    placeholder="e.g. Hiring Manager"
                    type="text"
                  />
                </div>
                {/* Job Title */}
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-background">
                    Job Title
                  </label>
                  <input
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none"
                    placeholder="e.g. Senior Product Designer"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                {/* Job Category */}
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-background">
                    Job Category
                  </label>
                  <select className="w-full bg-white border border-outline-variant rounded-lg p-3 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none appearance-none">
                    <option>Select a category</option>
                    <option>Design</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
                {/* Location */}
                <div className="space-y-xs">
                  <div className="flex justify-between items-center">
                    <label className="font-label-strong text-label-strong text-on-background">
                      Location
                    </label>
                    <div className="flex items-center gap-2">
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
                  <input
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none"
                    placeholder="City, Country"
                    type="text"
                  />
                </div>
              </div>
              {/* Job Description */}
              <div className="space-y-xs">
                <label className="font-label-strong text-label-strong text-on-background">
                  Job Description
                </label>
                <div className="border border-outline-variant rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-secondary focus-within:border-secondary">
                  {/* Toolbar */}
                  <div className="bg-surface-container-low border-b border-outline-variant p-2 flex gap-2">
                    <button
                      className="p-1 hover:bg-surface-container-highest rounded transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_bold"
                      >
                        format_bold
                      </span>
                    </button>
                    <button
                      className="p-1 hover:bg-surface-container-highest rounded transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_italic"
                      >
                        format_italic
                      </span>
                    </button>
                    <button
                      className="p-1 hover:bg-surface-container-highest rounded transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_list_bulleted"
                      >
                        format_list_bulleted
                      </span>
                    </button>
                    <button
                      className="p-1 hover:bg-surface-container-highest rounded transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_list_numbered"
                      >
                        format_list_numbered
                      </span>
                    </button>
                    <div className="w-px h-6 bg-outline-variant mx-1" />
                    <button
                      className="p-1 hover:bg-surface-container-highest rounded transition-colors"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="link"
                      >
                        link
                      </span>
                    </button>
                  </div>
                  <textarea
                    className="w-full p-4 text-body-md bg-white border-none focus:ring-0 outline-none resize-none"
                    placeholder="Tell us about the role, responsibilities, and requirements..."
                    rows={12}
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Salary Range */}
              <div className="space-y-xs">
                <label className="font-label-strong text-label-strong text-on-background">
                  Salary Range (Annual USD)
                </label>
                <div className="grid grid-cols-2 gap-sm">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-md">
                      $
                    </span>
                    <input
                      className="w-full bg-white border border-outline-variant rounded-lg p-3 pl-8 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none"
                      placeholder="Min"
                      type="number"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-md">
                      $
                    </span>
                    <input
                      className="w-full bg-white border border-outline-variant rounded-lg p-3 pl-8 text-body-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none"
                      placeholder="Max"
                      type="number"
                    />
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="flex flex-col md:flex-row items-center gap-sm pt-4">
                <button
                  className="w-full md:w-auto bg-secondary text-on-secondary px-10 py-3 rounded-lg font-label-strong text-label-strong active:scale-95 transition-all shadow-lg shadow-secondary/10"
                  type="submit"
                >
                  Post Job
                </button>
                <button
                  className="w-full md:w-auto px-10 py-3 border border-secondary text-secondary rounded-lg font-label-strong text-label-strong hover:bg-secondary-container transition-all"
                  type="button"
                >
                  Save for later
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-md">
          {/* Posting Tips Card */}
          <div className="bg-surface-container-high p-6 rounded-xl space-y-md">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="lightbulb"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                lightbulb
              </span>
              <h3 className="font-h3 text-h3 text-on-background">
                Posting Tips
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-secondary-container w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-label-caps font-label-caps text-on-secondary-container">
                    1
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-label-strong text-label-strong text-on-background">
                    Specific Title
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Titles like "Senior Frontend Engineer" perform 40% better
                    than generic ones.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary-container w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-label-caps font-label-caps text-on-secondary-container">
                    2
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-label-strong text-label-strong text-on-background">
                    Define Success
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Clearly list what the candidate is expected to achieve in
                    their first 90 days.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary-container w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-label-caps font-label-caps text-on-secondary-container">
                    3
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-label-strong text-label-strong text-on-background">
                    Salary Transparency
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Jobs with salary ranges attract 3x more qualified
                    candidates.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant">
              <a
                className="text-secondary font-label-strong text-label-strong flex items-center gap-2 hover:underline"
                href="#"
              >
                Read full guide
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          {/* Ad/Promo Card */}
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <img
              alt="Team collaborating"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="professional diverse team collaborating in a bright modern office with glass walls and minimalist furniture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaWkCCxOzBLplD7v_aOg5i7Qi3NnklJUl01qCDsRpJd3qJzRsE23ecb86H9ISPzgNKyZbsVbnX-IxtvjV8h73RJC3qHItxhKNb6i3HnZef_fxPyIaIDpfwR_Tx-dw3tkRWYvZXA5unA1QvLzUwlVaFx7mpA73o0g4phzUaychh6DSHkNcK7nezGmgDQKB9UdhPpbpyIYHHYLlMuDetznMT6FQejwJ53ljlonXXfroQr_BPfOkpbgwGWoKjYtXtaOJWvFO4fapHARg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent p-6 flex flex-col justify-end">
              <span className="bg-secondary text-on-secondary px-2 py-1 rounded text-label-caps font-label-caps w-fit mb-2">
                Premium
              </span>
              <h4 className="text-white font-h3 text-h3 leading-tight mb-2">
                Hire 2x faster with JobKar Pro
              </h4>
              <p className="text-on-primary-container font-body-sm text-body-sm line-clamp-2">
                Get featured listings and advanced candidate screening tools.
              </p>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};
