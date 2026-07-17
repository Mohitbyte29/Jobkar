import Footer from "@/components/Footer"
import UserNav from "@/components/UserNav"

const SavedJob = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNav />
      <div className="ml-64">
      <main className="w-full max-w-full mx-auto px-margin py-lg mt-8">
  {/* Header Section */}
  <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
    <div>
      <h1 className="font-h1 text-h1 text-primary">Saved Jobs</h1>
      <p className="text-on-surface-variant font-body-md mt-base">
        You have <span className="font-bold text-primary">5</span> jobs saved in
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
      <div className="bg-surface-container-lowest p-md md:p-lg rounded-xl card-shadow border border-surface-container flex flex-col md:flex-row gap-md hover:border-secondary transition-all group">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden border border-surface-variant">
          <img
            className="w-full h-full object-cover"
            data-alt="A minimalist logo for a tech company called 'Nova Systems', featuring sleek geometric lines and a deep indigo and electric blue color scheme. The visual style is modern, professional, and corporate, set against a clean white background with subtle depth and precision, evoking institutional stability."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDdMraPqZBEYk35BLzPMbhAPomw0rVoJs1SnoLCa5fv_9ywFQiMl1_8UGV8TdOPPIfTN7quvpaiRXm98mYMS1IWX5H5dMKNZdljwc_W4MIM1ttdYdXwO2IH6Nme4U1MfHNtzr5dUVfHz1-wErqb-Nym-Dpej6uJUpiQOOlZatQGgf2hZc-tLhzo4WqfAXzeLjBUjqil3boviVTC9ka7tISI6qAUVjbNGghjrMWdthrhJwB97RTdKfvZm0h4PM4qOICpzeKF1Gk24"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-xs">
            <div>
              <h3 className="font-h3 text-h3 text-primary group-hover:text-secondary transition-colors">
                Senior Product Designer
              </h3>
              <div className="flex items-center gap-xs mt-base text-on-surface-variant font-body-sm">
                <span className="font-semibold text-on-surface">
                  Nova Systems
                </span>
                <span className="text-outline">•</span>
                <span className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  San Francisco, CA (Remote)
                </span>
              </div>
            </div>
            <span className="inline-flex items-center px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full text-label-caps uppercase">
              New
            </span>
          </div>
          <div className="flex flex-wrap gap-xs mt-md">
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              $140k - $180k
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
              Saved 2 days ago
            </span>
            <div className="flex items-center gap-sm">
              <button className="text-label-strong text-error hover:underline transition-all">
                Remove
              </button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-strong hover:bg-opacity-90 transition-all active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Job Card 2 */}
      <div className="bg-surface-container-lowest p-md md:p-lg rounded-xl card-shadow border border-surface-container flex flex-col md:flex-row gap-md hover:border-secondary transition-all group">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden border border-surface-variant">
          <img
            className="w-full h-full object-cover"
            data-alt="A professional circular logo for 'AeroStream', characterized by fluid, aerodynamic shapes in shades of teal and slate gray. The design is elegant and corporate, representing high-speed efficiency and clarity. It is centered on a white canvas with soft ambient lighting for a high-end SaaS feel."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtpdp8z4Lh0Cv3CIwGIMCdzxvgF6vhIZeofZdQPjvDRGjFhP_rJxjS24b_ag1fcQsmm-egR9Imx0tTz_PfyLlMRvScvAa9ziI-Gey_A3MpaqVbyiWanM3dm8WLc8isoacKTn8b2ZEjjjI1Of6c6d_H7t-2zaGmTqK8EsBeiZFoq9do1dQTvOaz9qmxKupSOxA0wo8KnD-IhnHu4OT8yKSVlOtcZcUIBDuFvACGUoaYJgTUL7nA_46waubO406x_Tz9qKVXG2Awqzg"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-xs">
            <div>
              <h3 className="font-h3 text-h3 text-primary group-hover:text-secondary transition-colors">
                Backend Engineer (Go)
              </h3>
              <div className="flex items-center gap-xs mt-base text-on-surface-variant font-body-sm">
                <span className="font-semibold text-on-surface">
                  AeroStream
                </span>
                <span className="text-outline">•</span>
                <span className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  Austin, TX
                </span>
              </div>
            </div>
            <span className="inline-flex items-center px-sm py-xs bg-error-container text-on-error-container rounded-full text-label-caps uppercase">
              Closing Soon
            </span>
          </div>
          <div className="flex flex-wrap gap-xs mt-md">
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              $130k - $160k
            </span>
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              Hybrid
            </span>
          </div>
          <div className="flex items-center justify-between mt-lg pt-md border-t border-surface-container">
            <span className="text-body-sm text-outline flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">
                history
              </span>{" "}
              Saved 5 days ago
            </span>
            <div className="flex items-center gap-sm">
              <button className="text-label-strong text-error hover:underline transition-all">
                Remove
              </button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-strong hover:bg-opacity-90 transition-all active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Job Card 3 (Applied State) */}
      <div className="bg-surface-container-low p-md md:p-lg rounded-xl border border-surface-container flex flex-col md:flex-row gap-md group opacity-80">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden border border-surface-variant grayscale">
          <img
            className="w-full h-full object-cover"
            data-alt="A modern, minimalist corporate logo for 'Vertex Data', utilizing sharp angles and a sophisticated palette of deep navy and silver. The design conveys institutional stability and high-tech precision. The image follows a corporate modern aesthetic with plenty of whitespace and clear definition."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1n8jvOk1k6IvUfkfLSwhfCOemX9ZbpKogqVjRMgm5y7vvj2NIL8qrdTqKWUwuz9mUT4rTqIPmI34-92fh8KjtzUdx-7znRktYjazLg0wZ6ri5B9JfeyS0HS0znIcbT1vfNykYY-kxHWtcjIPr_ByrUmQGwG_3hri9F1CP3jT9MAwewDUWF5wVThHs1UsHIk1_6xpwdeDWq0CP48qwvJXY69OEvEiQwsHEY8ApRx260KsvDqyiHBqWgZXQT6Not7A0A5tPM6ZbGI4"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-xs">
            <div>
              <h3 className="font-h3 text-h3 text-primary">
                Senior Data Analyst
              </h3>
              <div className="flex items-center gap-xs mt-base text-on-surface-variant font-body-sm">
                <span className="font-semibold text-on-surface">
                  Vertex Data
                </span>
                <span className="text-outline">•</span>
                <span className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  New York, NY
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container-highest text-on-surface rounded-full text-label-caps uppercase font-bold">
              <span className="material-symbols-outlined text-[14px]">
                check
              </span>{" "}
              Applied
            </span>
          </div>
          <div className="flex flex-wrap gap-xs mt-md">
            <span className="bg-surface-container px-sm py-base rounded-full text-label-caps text-on-surface-variant">
              $155k - $190k
            </span>
            <span className="bg-surface-container px-sm py-base rounded-full text-label-caps text-on-surface-variant">
              Full-time
            </span>
          </div>
          <div className="flex items-center justify-between mt-lg pt-md border-t border-outline-variant">
            <span className="text-body-sm text-outline flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">
                calendar_today
              </span>{" "}
              Applied on Oct 12, 2024
            </span>
            <div className="flex items-center gap-sm">
              <button className="text-label-strong text-on-surface-variant hover:text-primary transition-all">
                View Application
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Job Card 4 */}
      <div className="bg-surface-container-lowest p-md md:p-lg rounded-xl card-shadow border border-surface-container flex flex-col md:flex-row gap-md hover:border-secondary transition-all group">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden border border-surface-variant">
          <img
            className="w-full h-full object-cover"
            data-alt="A clean and friendly corporate logo for 'BrightPath Marketing', featuring a stylized sunburst path in warm gold and deep slate. The style is professional and inviting, with a focus on growth and clarity. It is presented in a minimalist, light-mode setting with soft shadows."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM4Qh9TMtNXNtz5Mf38Y8IlKqhr8IBqgdIbGaOmabSW0mMxkqd3ucSmO_eYXsQsg3fcgSQCrH-e52jHRLPPVRKtx3w0FDyVmxwCVgcSysahQttxKDu5Q8zegapbTJ6SJ59082qYgi1-dH_drqjqDLcvRQN1ByEYrULtgSbWIbgcM9GiCnj7JT4P6FmHhZKR66z2udnjAbNkuQByKD-t0Zld6-GWoWj5lW7TipCaj8hPKCYDe3hoSEivhRO6LU4NOElCs2oEM26le8"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-xs">
            <div>
              <h3 className="font-h3 text-h3 text-primary group-hover:text-secondary transition-colors">
                Growth Marketing Manager
              </h3>
              <div className="flex items-center gap-xs mt-base text-on-surface-variant font-body-sm">
                <span className="font-semibold text-on-surface">
                  BrightPath Marketing
                </span>
                <span className="text-outline">•</span>
                <span className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  Remote
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-xs mt-md">
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              $110k - $140k
            </span>
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              Full-time
            </span>
          </div>
          <div className="flex items-center justify-between mt-lg pt-md border-t border-surface-container">
            <span className="text-body-sm text-outline flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">
                history
              </span>{" "}
              Saved 1 week ago
            </span>
            <div className="flex items-center gap-sm">
              <button className="text-label-strong text-error hover:underline transition-all">
                Remove
              </button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-strong hover:bg-opacity-90 transition-all active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Job Card 5 */}
      <div className="bg-surface-container-lowest p-md md:p-lg rounded-xl card-shadow border border-surface-container flex flex-col md:flex-row gap-md hover:border-secondary transition-all group">
        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden border border-surface-variant">
          <img
            className="w-full h-full object-cover"
            data-alt="A bold, tech-focused corporate logo for 'CoreStack Engineering', featuring interlocking blocks in charcoal and vibrant teal. The design represents stability and structural integrity in software development. The image is crisp, modern, and professional, following a high-end SaaS aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa-YsLFcMXVUL-rHyzuPXeN_MI7SZWam9qTK4DEjWK5uN-k9JQD2djW_Ubr6eue9kWRVe2ZYN8OkpUjlBKgip3taphS657v0tAngHqoq-iuo_k4QprhlGg6mNHu_IzUJGamHJQQY66pcss0jXfv1U1mpWn_VUUSBwYjbD0gvhZVkWDk7L4z2fEhmyJvAYBEOkM2clDMDbFqtTnNm2MtMDoQHBQY142SbNT771KrnjG3g34S3SIlhoCFBlkjYQpFOnJF95nW2M-wZ8"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-xs">
            <div>
              <h3 className="font-h3 text-h3 text-primary group-hover:text-secondary transition-colors">
                Lead DevOps Architect
              </h3>
              <div className="flex items-center gap-xs mt-base text-on-surface-variant font-body-sm">
                <span className="font-semibold text-on-surface">
                  CoreStack Engineering
                </span>
                <span className="text-outline">•</span>
                <span className="flex items-center gap-[2px]">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  Seattle, WA
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-xs mt-md">
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              $170k - $210k
            </span>
            <span className="bg-surface-container-low px-sm py-base rounded-full text-label-caps text-on-surface-variant border border-surface-variant">
              Contract
            </span>
          </div>
          <div className="flex items-center justify-between mt-lg pt-md border-t border-surface-container">
            <span className="text-body-sm text-outline flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">
                history
              </span>{" "}
              Saved 2 weeks ago
            </span>
            <div className="flex items-center gap-sm">
              <button className="text-label-strong text-error hover:underline transition-all">
                Remove
              </button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-strong hover:bg-opacity-90 transition-all active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
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
</main>
    <Footer/>
      </div>
    </div>
  )
}

export default SavedJob
