import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplicationJob = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <main className="flex-grow pt-xl pb-xl px-4">
        <div className="max-w-[1000px] mx-auto">
          {/* Job Title Header */}
          <div className="mb-lg text-center">
            <span className="font-label-caps text-secondary tracking-widest uppercase mb-xs block">
              Engineering &amp; Design
            </span>
            <h1 className="font-h1 text-primary mb-xs">
              Senior UI/UX Designer
            </h1>
            <div className="flex items-center justify-center gap-md text-on-surface-variant font-body-sm">
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  data-original-icon="location_on"
                >
                  location_on
                </span>
                San Francisco, CA (Remote Friendly)
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                Full-time
              </span>
            </div>
          </div>
          {/* Stepper */}
          <div className="flex items-center justify-between mb-xl px-md">
            <div className="flex flex-col items-center gap-xs">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-strong text-xs">
                1
              </div>
              <span className="font-label-strong text-[10px] text-primary uppercase">
                Personal
              </span>
            </div>
            <div className="stepper-line active " />
            <div className="flex flex-col items-center gap-xs">
              <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-white text-outline flex items-center justify-center font-label-strong text-xs">
                2
              </div>
              <span className="font-label-strong text-[10px] text-outline uppercase">
                Experience
              </span>
            </div>
            <div className="stepper-line" />
            <div className="flex flex-col items-center gap-xs">
              <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-white text-outline flex items-center justify-center font-label-strong text-xs">
                3
              </div>
              <span className="font-label-strong text-[10px] text-outline uppercase">
                Portfolio
              </span>
            </div>
            <div className="stepper-line" />
            <div className="flex flex-col items-center gap-xs">
              <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-white text-outline flex items-center justify-center font-label-strong text-xs">
                4
              </div>
              <span className="font-label-strong text-[10px] text-outline uppercase">
                Review
              </span>
            </div>
          </div>
          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] overflow-hidden w-full">
            {/* Section: Personal Info */}
            
            {/* Section: Resume & Cover Letter */}
            <div className="p-lg border-b border-surface-container bg-surface-container-low">
              <h3 className="font-h3 text-primary mb-md">
                Application Documents
              </h3>
              <div className="mb-md">
                <label className="font-label-strong text-on-surface-variant mb-xs block">
                  Resume / CV
                </label>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center bg-white hover:border-secondary transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-outline mb-sm group-hover:text-secondary transition-colors">
                    cloud_upload
                  </span>
                  <p className="font-body-md text-primary font-semibold mb-1">
                    Drag and drop your resume here
                  </p>
                  <p className="font-body-sm text-outline">
                    PDF, DOCX up to 10MB
                  </p>
                  <button className="mt-md px-6 py-2 border border-outline text-primary font-semibold rounded-lg hover:bg-surface transition-colors">
                    Browse Files
                  </button>
                </div>
              </div>
              <div>
                <label className="font-label-strong text-on-surface-variant mb-xs block">
                  Cover Letter
                </label>
                <div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
                  <div className="bg-surface-container p-2 flex gap-4 border-b border-outline-variant">
                    <button className="p-1 hover:bg-white rounded">
                      <span className="material-symbols-outlined text-sm">
                        format_bold
                      </span>
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <span className="material-symbols-outlined text-sm">
                        format_italic
                      </span>
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <span className="material-symbols-outlined text-sm">
                        format_list_bulleted
                      </span>
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <span className="material-symbols-outlined text-sm">
                        link
                      </span>
                    </button>
                  </div>
                  <textarea
                    rows={6}
                    placeholder="Tell us why you are a great fit for this Senior UI/UX role..."
                    className="w-full p-4 border-none focus:ring-0 resize-none font-body-md custom-scrollbar"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/* Section: Screening Questions */}
            {/* Section: Portfolio & Social */}
            <div className="p-lg">
              <h3 className="font-h3 text-primary mb-md">
                Portfolio &amp; Links
              </h3>
              <div className="space-y-md">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-strong text-on-surface-variant">
                      GitHub
                    </label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="github.com/username"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-strong text-on-surface-variant">
                      LinkedIn
                    </label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="linkedin.com/in/username"
                      type="text"
                    />
                  </div>
                  <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        Additional Links
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Share your portfolio or any professional links.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700"
                    >
                      + Add Another Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Actions */}
            <div className="p-lg bg-surface-container flex flex-col md:flex-row justify-between items-center gap-md">
              <button className="font-label-strong text-outline hover:text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>{" "}
                Back to job description
              </button>
              <div className="flex gap-md w-full md:w-auto">
                <button className="flex-1 md:flex-none px-xl py-4 border border-outline text-primary font-bold rounded-lg hover:bg-white transition-colors">
                  Save Draft
                </button>
                <button
                  className="flex-1 md:flex-none px-xl py-4 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                  onClick={() => navigate(`/jobs/application/experience/5`)}
                >
                  <span className="flex items-center gap-2">
                    Next <ArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Trust Badge */}
          <div className="mt-lg flex items-center justify-center gap-sm text-outline-variant">
            <span className="material-symbols-outlined text-lg">
              verified_user
            </span>
            <span className="font-body-sm">
              Your data is securely processed and shared only with the hiring
              team.
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplicationJob;
