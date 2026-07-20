import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useNavigate } from "react-router-dom";

const Review = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <main className="grow py-xl px-margin">
  <div className="max-w-250 mx-auto">
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
      <div className="stepper-line active" />
      <div className="flex flex-col items-center gap-xs">
        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-strong text-xs">
          4
        </div>
        <span className="font-label-strong text-[10px] text-primary uppercase">
          Review
        </span>
      </div>
    </div>
    {/* Page Title */}
    <div className="mb-lg text-center">
      <h1 className="font-h1 text-h1 text-primary mb-xs">
        Review Your Application
      </h1>
      <p className="font-body-md text-on-surface-variant">
        Please double-check your information before submitting. Once submitted,
        your application for the Senior UI/UX Designer role will be finalized.
      </p>
    </div>
    {/* Review Content */}
    <div className="space-y-md">
      {/* Section: Personal Information */}
      <section className="review-card bg-surface-container-lowest p-md rounded-lg border border-transparent">
        <div className="flex justify-between items-start mb-md">
          <div>
            <h2 className="font-h3 text-h3 text-primary">
              Personal Information
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Your contact and basic profile details.
            </p>
          </div>
          <button className="flex items-center gap-xs text-secondary font-label-strong hover:underline">
            <span className="material-symbols-outlined text-[18px]">edit</span>{" "}
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div>
            <p className="font-label-caps text-on-surface-variant mb-1">
              FULL NAME
            </p>
            <p className="font-body-md text-on-surface">Alex Thompson</p>
          </div>
          <div>
            <p className="font-label-caps text-on-surface-variant mb-1">
              EMAIL ADDRESS
            </p>
            <p className="font-body-md text-on-surface">
              alex.thompson@design.io
            </p>
          </div>
          <div>
            <p className="font-label-caps text-on-surface-variant mb-1">
              PHONE NUMBER
            </p>
            <p className="font-body-md text-on-surface">+1 (555) 0123-4567</p>
          </div>
          <div>
            <p className="font-label-caps text-on-surface-variant mb-1">
              LOCATION
            </p>
            <p className="font-body-md text-on-surface">
              San Francisco, CA (Remote)
            </p>
          </div>
        </div>
      </section>
      {/* Section: Experience */}
      <section className="review-card bg-surface-container-lowest p-md rounded-lg border border-transparent">
        <div className="flex justify-between items-start mb-md">
          <div>
            <h2 className="font-h3 text-h3 text-primary">
              Experience &amp; Education
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Professional background and skills.
            </p>
          </div>
          <button className="flex items-center gap-xs text-secondary font-label-strong hover:underline">
            <span className="material-symbols-outlined text-[18px]">edit</span>{" "}
            Edit
          </button>
        </div>
        <div className="space-y-md">
          <div className="flex gap-md">
            <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-outline">
                business
              </span>
            </div>
            <div>
              <p className="font-label-strong text-primary">
                Senior Product Designer
              </p>
              <p className="font-body-sm text-on-surface-variant">
                TechSphere Solutions • 2020 — Present
              </p>
              <p className="font-body-sm mt-xs">
                Leading design for core SaaS platforms, improving user retention
                by 22% through systematic UI overhauls.
              </p>
            </div>
          </div>
          <div className="border-t border-surface-container-high" />
          <div>
            <p className="font-label-caps text-on-surface-variant mb-xs">
              CORE SKILLS
            </p>
            <div className="flex flex-wrap gap-xs">
              <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-label-caps rounded-full">
                DESIGN SYSTEMS
              </span>
              <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-label-caps rounded-full">
                PROTOTYPING
              </span>
              <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-label-caps rounded-full">
                UX RESEARCH
              </span>
              <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-label-caps rounded-full">
                FIGMA
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Portfolio */}
      <section className="review-card bg-surface-container-lowest p-md rounded-lg border border-transparent">
        <div className="flex justify-between items-start mb-md">
          <div>
            <h2 className="font-h3 text-h3 text-primary">
              Portfolio &amp; Links
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Evidence of your professional work.
            </p>
          </div>
          <button className="flex items-center gap-xs text-secondary font-label-strong hover:underline">
            <span className="material-symbols-outlined text-[18px]">edit</span>{" "}
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded">
            <span className="material-symbols-outlined text-secondary">
              language
            </span>
            <div>
              <p className="font-label-caps text-on-surface-variant">
                PORTFOLIO URL
              </p>
              <p className="font-body-md text-on-surface">
                alexthompson.design
              </p>
            </div>
          </div>
          <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded">
            <span className="material-symbols-outlined text-secondary">
              description
            </span>
            <div>
              <p className="font-label-caps text-on-surface-variant">RESUME</p>
              <p className="font-body-md text-on-surface">
                Alex_Resume_2024.pdf
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final Agreement */}
      <section className="mt-lg">
        <label className="flex items-start gap-md cursor-pointer group">
          <div className="relative flex items-center justify-center mt-1">
            <input
              className="peer h-6 w-6 rounded border-outline text-secondary focus:ring-secondary cursor-pointer"
              type="checkbox"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-body-md text-on-surface">
              I certify that all information provided is accurate and I agree to
              the{" "}
              <a className="text-secondary underline" href="#">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a className="text-secondary underline" href="#">
                Privacy Policy
              </a>
              .
            </span>
          </div>
        </label>
      </section>
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-md pt-lg">
        <button className="flex-grow order-2 md:order-1 px-lg py-md rounded-lg border border-outline text-on-surface font-label-strong hover:bg-surface-container-high transition-all">
          Back to Portfolio
        </button>
        <button className="flex-[2] order-1 md:order-2 px-lg py-md rounded-lg bg-primary text-on-primary font-h3 hover:opacity-90 active:scale-[0.98] transition-all shadow-md" onClick={() => navigate(`/jobs/application/success/5`)}>
          Submit Application
        </button>
      </div>
    </div>
  </div>
</main>
    <Footer/>
    </div>
  )
}

export default Review