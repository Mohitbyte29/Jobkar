import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Link } from "react-router-dom"

const Second = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center px-6 py-lg">
  <div className="w-full max-w-2xl">
    {/* Progress Bar Container */}
    <div className="mb-lg">
      <div className="flex justify-between items-end mb-2">
        <span className="font-label-strong text-on-surface-variant">
          Profile Completion
        </span>
        <span className="font-label-strong text-secondary">50%</span>
      </div>
      <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary transition-all duration-500 ease-in-out"
          style={{ width: "50%" }}
        />
      </div>
    </div>
    {/* Content Card */}
    <div className="bg-surface-container-lowest card-shadow rounded-xl p-md md:p-lg border border-outline-variant/30">
      <div className="text-center mb-lg">
        <h1 className="font-h1 text-on-surface mb-xs">
          What's your current status?
        </h1>
        <p className="font-body-md text-on-surface-variant">
          This helps us tailor your experience.
        </p>
      </div>
      {/* Status Options */}
      <div className="space-y-sm">
        {/* Option 1 */}
        <label className="group relative flex items-center p-sm border border-outline-variant rounded-lg cursor-pointer hover:border-secondary transition-colors duration-200">
          <input
            className="hidden peer"
            name="employment_status"
            type="radio"
            defaultValue="employed"
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-secondary-container transition-colors mr-sm">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-secondary-container">
              work
            </span>
          </div>
          <div className="flex-grow">
            <span className="block font-h3 text-on-surface">
              I am currently employed
            </span>
          </div>
          <div className="w-6 h-6 border-2 border-outline-variant rounded-full peer-checked:border-secondary peer-checked:bg-secondary flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
          </div>
        </label>
        {/* Option 2 (Active/Example Selection) */}
        <label className="group relative flex items-center p-sm border-2 border-secondary bg-secondary-container/10 rounded-lg cursor-pointer transition-colors duration-200">
          <input
            defaultChecked={true}
            className="hidden peer"
            name="employment_status"
            type="radio"
            defaultValue="looking"
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container mr-sm">
            <span className="material-symbols-outlined text-on-secondary-container">
              search
            </span>
          </div>
          <div className="flex-grow">
            <span className="block font-h3 text-on-surface">
              I am looking for a new opportunity
            </span>
          </div>
          <div className="w-6 h-6 border-2 border-secondary bg-secondary flex items-center justify-center rounded-full">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </label>
        {/* Option 3 */}
        <label className="group relative flex items-center p-sm border border-outline-variant rounded-lg cursor-pointer hover:border-secondary transition-colors duration-200">
          <input
            className="hidden peer"
            name="employment_status"
            type="radio"
            defaultValue="student"
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-secondary-container transition-colors mr-sm">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-secondary-container">
              school
            </span>
          </div>
          <div className="flex-grow">
            <span className="block font-h3 text-on-surface">
              I am a student
            </span>
          </div>
          <div className="w-6 h-6 border-2 border-outline-variant rounded-full peer-checked:border-secondary peer-checked:bg-secondary flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
          </div>
        </label>
      </div>
      {/* Actions */}
      <div className="mt-lg flex flex-col sm:flex-row gap-sm">
        <Link to="/first" className="flex-1 order-2 sm:order-1 px-md py-sm rounded-lg border border-outline text-on-surface font-label-strong hover:bg-surface-container-low transition-all">
          Back
        </Link>
        <Link to="/third" className="flex-1 order-1 sm:order-2 px-md py-sm rounded-lg bg-primary text-on-primary font-label-strong hover:opacity-90 transition-all">
          Continue
        </Link>
      </div>
    </div>
    {/* Contextual Illustration/Hint */}
    <div className="mt-lg flex items-start gap-sm bg-surface-container-high/40 p-sm rounded-lg">
      <span
        className="material-symbols-outlined text-secondary"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        info
      </span>
      <p className="font-body-sm text-on-surface-variant">
        Personalizing your status helps JobKar suggest the most relevant career
        paths, from internships for students to high-impact roles for
        experienced professionals.
      </p>
    </div>
  </div>
</main>
    </div>
  )
}

export default Second
