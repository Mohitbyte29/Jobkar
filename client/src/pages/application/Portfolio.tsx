import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <main className="grow flex flex-col items-center py-xl px-margin">
  <div className="max-w-250 w-full">
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
        <span className="font-label-strong text-[10px] text-primary uppercase">
          Experience
        </span>
      </div>
      <div className="stepper-line active" />
      <div className="flex flex-col items-center gap-xs">
        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-strong text-xs">
          3
        </div>
        <span className="font-label-strong text-[10px] text-primary uppercase">
          Portfolio
        </span>
      </div>
      <div className="stepper-line" />
      <div className="flex flex-col items-center gap-xs">
        <div className="w-8 h-8 rounded-full border-2 border-outline-variant bg-white text-outline flex items-center justify-center font-label-strong text-xs">
          4
        </div>
        <span className="font-label-strong text-[10px] text-primary uppercase">
          Review
        </span>
      </div>
    </div>
    {/* Page Title */}
    <div className="mb-lg text-center">
      <h1 className="font-h1 text-h1 text-primary mb-xs">Showcase Your Work</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Help employers understand your design process and visual excellence.
      </p>
    </div>
    {/* Application Form */}
    <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container-high p-lg space-y-md">
      {/* Section: Main Portfolio */}
      <section>
        <label
          className="block font-label-strong text-label-strong text-on-surface mb-xs"
          htmlFor="portfolio_url"
        >
          Portfolio Website
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">
              language
            </span>
          </div>
          <input
            className="block w-full pl-lg pr-md py-sm bg-surface border border-outline-variant rounded-lg font-body-md focus:focused-input transition-all outline-none"
            id="portfolio_url"
            placeholder="https://yourname.design"
            required=""
            type="url"
          />
        </div>
        <p className="mt-base font-body-sm text-body-sm text-on-surface-variant">
          Link to your professional site, Behance, or Adobe Portfolio.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      </div>
      {/* Section: Project Highlights */}
      <section className="pt-sm">
        <div className="flex justify-between items-end mb-sm">
          <div>
            <h3 className="font-h3 text-h3 text-primary">Project Highlights</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Specific case studies you're proud of.
            </p>
          </div>
          <button
            className="text-secondary font-label-strong text-label-strong flex items-center gap-xs hover:underline"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>{" "}
            Add Project
          </button>
        </div>
        <div className="space-y-sm">
          {/* Project 1 */}
          <div className="p-sm bg-surface rounded-lg border border-surface-container-high grid grid-cols-1 md:grid-cols-12 gap-sm items-center">
            <div className="md:col-span-5">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-[2px] block">
                Project Title
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary"
                placeholder="e.g. Fintech Mobile App Redesign"
                type="text"
                defaultValue="Global SaaS Dashboard"
              />
            </div>
            <div className="md:col-span-6">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-[2px] block">
                Project Link
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-secondary"
                placeholder="URL to case study"
                type="url"
                defaultValue="https://yourname.design/projects/saas-dashboard"
              />
            </div>
            <div className="md:col-span-1 flex justify-end">
              <button className="material-symbols-outlined text-outline hover:text-error transition-colors">
                delete
              </button>
            </div>
          </div>
          {/* Project 2 */}
          <div className="p-sm bg-surface rounded-lg border border-surface-container-high grid grid-cols-1 md:grid-cols-12 gap-sm items-center">
            <div className="md:col-span-5">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-[2px] block">
                Project Title
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-primary"
                placeholder="e.g. E-commerce Checkout Flow"
                type="text"
                defaultValue="Healthcare Accessibility Audit"
              />
            </div>
            <div className="md:col-span-6">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-[2px] block">
                Project Link
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-secondary"
                placeholder="URL to case study"
                type="url"
                defaultValue="https://yourname.design/projects/healthcare"
              />
            </div>
            <div className="md:col-span-1 flex justify-end">
              <button className="material-symbols-outlined text-outline hover:text-error transition-colors">
                delete
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Buttons */}
      <div className="pt-md flex items-center justify-between border-t border-surface-container-high">
        <button className="px-md py-sm rounded-lg border border-secondary text-secondary font-label-strong text-label-strong hover:bg-secondary-container transition-all">
          Back to Experience
        </button>
        <button className="px-lg py-sm rounded-lg bg-primary text-on-primary font-label-strong text-label-strong hover:opacity-90 active:scale-[0.98] transition-all shadow-md" onClick={() => navigate(`/jobs/application/review/5`)}>
          Review Application
        </button>
      </div>
    </div>
    {/* Help Tip */}
    <div className="mt-md flex items-start gap-sm bg-secondary-container/20 p-md rounded-xl border border-secondary-container/40">
      <span className="material-symbols-outlined text-secondary">info</span>
      <p className="font-body-sm text-body-sm text-on-secondary-container">
        <strong>Tip:</strong> Senior candidates who provide direct links to 2+
        complex case studies see a 45% higher response rate. Ensure your links
        are public or provide passwords if needed in your resume.
      </p>
    </div>
  </div>
</main>
    <Footer/>
    </div>
  )
}

export default Portfolio