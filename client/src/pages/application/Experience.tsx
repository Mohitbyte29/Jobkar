import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import { useNavigate } from 'react-router-dom';

const Experience = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <main className="flex-grow flex flex-col mt-10 items-center py-lg px-margin">
  <div className="w-full max-w-[1000px]">
    {/* Stepper Component */}
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
        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-strong text-xs">
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
    {/* Header Section */}
    <div className="mb-lg">
      <h1 className="font-h1 text-h1 text-primary mb-2">Work Experience</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Share your professional journey. Start with your most recent role.
      </p>
    </div>
    {/* Form Experience Container */}
    <form className="space-y-lg" id="experience-form">
      <div className="space-y-md" id="experience-list">
        {/* Experience Card 1 */}
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-surface-container-high transition-all">
          <div className="flex justify-between items-start mb-md">
            <h3 className="font-h3 text-h3 text-primary">Experience #1</h3>
            <button
              className="text-on-surface-variant hover:text-error transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Job Title */}
            <div className="space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                Job Title
              </label>
              <input
                className="w-full bg-white border border-outline-variant rounded-lg px-md py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md"
                placeholder="e.g. Senior UI/UX Designer"
                type="text"
              />
            </div>
            {/* Company */}
            <div className="space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                Company
              </label>
              <input
                className="w-full bg-white border border-outline-variant rounded-lg px-md py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md"
                placeholder="e.g. TechFlow Solutions"
                type="text"
              />
            </div>
            {/* Location City */}
            <div className="space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                City
              </label>
              <input
                className="w-full bg-white border border-outline-variant rounded-lg px-md py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md"
                placeholder="e.g. San Francisco"
                type="text"
              />
            </div>
            {/* Location Country */}
            <div className="space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                Country
              </label>
              <input
                className="w-full bg-white border border-outline-variant rounded-lg px-md py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md"
                placeholder="e.g. United States"
                type="text"
              />
            </div>
            {/* Start Date */}
            <div className="space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                Start Date
              </label>
              <input
                className="w-full bg-white border border-outline-variant rounded-lg px-md py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md"
                type="date"
              />
            </div>
            {/* End Date */}
            <div className="space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                End Date
              </label>
              <input
                className="w-full bg-white border border-outline-variant rounded-lg px-md py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body-md disabled:bg-surface-container-low disabled:text-outline"
                id="end-date-1"
                type="date"
              />
              <div className="flex items-center gap-xs mt-base">
                <input
                  className="w-4 h-4 text-secondary border-outline-variant rounded focus:ring-secondary"
                  id="current-work-1"
                  onChange="document.getElementById('end-date-1').disabled = this.checked"
                  type="checkbox"
                />
                <label
                  className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
                  htmlFor="current-work-1"
                >
                  I currently work here
                </label>
              </div>
            </div>
            {/* Role Description */}
            <div className="md:col-span-2 space-y-base">
              <label className="font-label-strong text-label-strong text-on-surface">
                Role Description
              </label>
              <div className="border border-outline-variant rounded-lg overflow-hidden focus-within:border-secondary transition-all">
                <div className="bg-surface-container-low px-md py-2 flex items-center gap-sm border-b border-outline-variant">
                  <button
                    className="material-symbols-outlined text-on-surface-variant hover:text-primary"
                    title="Bold"
                    type="button"
                  >
                    format_bold
                  </button>
                  <button
                    className="material-symbols-outlined text-on-surface-variant hover:text-primary"
                    title="Italic"
                    type="button"
                  >
                    format_italic
                  </button>
                  <button
                    className="material-symbols-outlined text-on-surface-variant hover:text-primary"
                    title="List"
                    type="button"
                  >
                    format_list_bulleted
                  </button>
                  <button
                    className="material-symbols-outlined text-on-surface-variant hover:text-primary"
                    title="Link"
                    type="button"
                  >
                    link
                  </button>
                </div>
                <textarea
                  className="w-full bg-white border-none p-md focus:ring-0 font-body-md resize-none custom-scrollbar"
                  placeholder="Describe your key responsibilities and achievements..."
                  rows={6}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Experience Button */}
      <button
        className="w-full py-md border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant font-label-strong hover:bg-white hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-xs"
        id="add-experience"
        type="button"
      >
        <span className="material-symbols-outlined">add</span>
        <span>Add another experience</span>
      </button>
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-md pt-lg">
        <button
          className="w-full md:w-auto px-xl py-3 border border-secondary text-secondary font-label-strong rounded-lg hover:bg-secondary/5 transition-colors"
          type="button"
        >
          Back
        </button>
        <button
          className="w-full md:w-auto px-xl py-3 bg-secondary text-on-secondary font-label-strong rounded-lg shadow-lg hover:opacity-90 active:scale-[0.98] transition-all" onClick={() => navigate(`/jobs/application/portfolio/5`)}
          type="submit"
        >
          Next Step
        </button>
      </div>
    </form>
  </div>
</main>
    <Footer/>
    </div>
  )
}

export default Experience