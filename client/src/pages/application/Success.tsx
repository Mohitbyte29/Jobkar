import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useNavigate } from "react-router-dom"

const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
        <main className="max-w-max_width mx-auto px-margin py-xl flex flex-col items-center">
  {/* Celebration Header */}
  <div className="text-center max-w-[720px] mb-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="mb-md flex justify-center">
      <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center success-check-pulse">
        <span
          className="material-symbols-outlined text-secondary text-[48px]"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          check_circle
        </span>
      </div>
    </div>
    <h1 className="font-h1 text-h1 text-primary mb-sm">
      Application Submitted Successfully!
    </h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant">
      Thank you for applying to the{" "}
      <span className="font-semibold text-primary">Senior UI/UX Designer</span>{" "}
      role at{" "}
      <span className="font-semibold text-primary">TechSphere Solutions</span>.
      Your application has been sent to the hiring team.
    </p>
  </div>
  {/* Success Details Layout (Bento Grid Style) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-md w-full max-w-[1000px] mb-xl">
    {/* Step 1 */}
    <div className="bento-step bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-start gap-xs">
      <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-fixed flex items-center justify-center mb-xs">
        <span className="material-symbols-outlined">description</span>
      </div>
      <h3 className="font-h3 text-h3 text-primary">Application Review</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        The hiring team will review your profile, experience, and portfolio for
        alignment.
      </p>
    </div>
    {/* Step 2 */}
    <div className="bento-step bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-start gap-xs">
      <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-xs">
        <span className="material-symbols-outlined">filter_list</span>
      </div>
      <h3 className="font-h3 text-h3 text-primary">Shortlisting</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        If your profile matches, you'll be contacted via email for an initial
        screening.
      </p>
    </div>
    {/* Step 3 */}
    <div className="bento-step bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-start gap-xs">
      <div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-xs">
        <span className="material-symbols-outlined">video_chat</span>
      </div>
      <h3 className="font-h3 text-h3 text-primary">Interview</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Selected candidates will move on to the technical and cultural interview
        rounds.
      </p>
    </div>
  </div>
  {/* Info & Actions Card */}
  <div className="w-full max-w-[600px] bg-surface-container-low p-lg rounded-xl flex flex-col items-center text-center gap-md">
    <div className="flex items-center gap-xs text-on-surface-variant">
      <span className="material-symbols-outlined text-[20px]">schedule</span>
      <span className="font-label-strong text-label-strong">
        ESTIMATED TIME
      </span>
    </div>
    <p className="font-body-md text-body-md text-on-surface-variant mb-xs">
      Expect to hear back within{" "}
      <span className="font-bold text-primary">5-7 business days</span>.
    </p>
    <div className="flex flex-col sm:flex-row gap-sm w-full">
      <button className="flex-1 bg-primary text-on-primary font-label-strong text-label-strong py-md rounded-lg hover:opacity-90 active:scale-[0.98] transition-all" onClick={() => navigate('/')}>
        Go to Dashboard
      </button>
      <button className="flex-1 border border-primary text-primary font-label-strong text-label-strong py-md rounded-lg hover:bg-surface-container-high active:scale-[0.98] transition-all" onClick={() => navigate('/jobs')}>
        Explore More Jobs
      </button>
    </div>
  </div>
</main>
    <Footer/>
    </div>
  )
}

export default Success