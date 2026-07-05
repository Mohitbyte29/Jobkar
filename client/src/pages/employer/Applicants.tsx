import EmployerNav from '@/components/EmployerNav'
import React from 'react'

const Applicants = () => {
  return (
    <div className="bg-background text-on-background">
      <div className="flex min-h-screen">
  {/* SideNavBar */}
  <EmployerNav/>
  {/* Main Content Canvas */}
  <main className="flex-1 flex flex-col">
    {/* TopAppBar */}
    <header className="w-full border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex justify-between items-center px-8 py-4 h-16 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
            data-icon="search"
          >
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-secondary text-sm"
            placeholder="Search candidates..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <span
            className="material-symbols-outlined text-slate-600"
            data-icon="notifications"
          >
            notifications
          </span>
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <span
            className="material-symbols-outlined text-slate-600"
            data-icon="settings"
          >
            settings
          </span>
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ml-2">
          <img
            alt="Recruiter Profile"
            data-alt="A professional headshot of a recruitment manager in a bright, modern corporate office setting. The individual is smiling warmly, dressed in a sharp charcoal blazer over a crisp white shirt. The background is softly blurred, showing hints of architectural glass and minimalist interior design, maintaining a clean and trustworthy high-end aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0MravXAm7giP0VeomaDEEmeSx-p5cepD249OvqIglGvZNtp_joos6gfhz7XpkDZKZInhhR2zoM1OCezKdtMZLPsWlUcnZuxf--Z_w-zQXtFC_dzQf-g7-7cH-EVeZdKApZrHegh5aGKCvuGaxVP2yMf6NZ9OXqrFRXRa6cJm-vLKWUYgtNu2NDDBJLXCauh3sP2uJGY0wMy5Zu7cC7qBp5nJFCP9N4xLn2BcwBSF0ih42t_Idv4EvQgYA-ZWmE9uBEgWS-dbv7A0"
          />
        </div>
      </div>
    </header>
    {/* ATS Content Area */}
    <div className="p-8 max-w-[1440px]">
      {/* Context Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-label-caps text-on-primary-container mb-2">
            <span>JOB POSTINGS</span>
            <span
              className="material-symbols-outlined text-[10px]"
              data-icon="chevron_right"
            >
              chevron_right
            </span>
            <span className="text-primary">SENIOR PRODUCT DESIGNER</span>
          </nav>
          <h2 className="font-h1 text-h1 text-on-surface">
            Senior Product Designer{" "}
            <span className="text-outline font-normal ml-2">#3942</span>
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline rounded-xl text-label-strong hover:bg-surface-container transition-colors">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="filter_list"
            >
              filter_list
            </span>
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-xl font-label-strong hover:opacity-90 shadow-sm transition-all">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="share"
            >
              share
            </span>
            Share Job
          </button>
        </div>
      </div>
      {/* Filters Strip */}
      <div className="flex gap-4 mb-8">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
          <span className="text-label-strong text-slate-500">Experience:</span>
          <select className="bg-transparent border-none text-label-strong focus:ring-0 p-0 pr-6">
            <option>5+ Years</option>
            <option>3+ Years</option>
            <option>Any</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
          <span className="text-label-strong text-slate-500">Skills:</span>
          <div className="flex gap-1">
            <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold">
              FIGMA
            </span>
            <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold">
              REACT
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
          <span className="text-label-strong text-slate-500">Match Score:</span>
          <select className="bg-transparent border-none text-label-strong focus:ring-0 p-0 pr-6">
            <option>80% +</option>
            <option>90% +</option>
          </select>
        </div>
      </div>
      {/* Kanban Board */}
      <div className="flex gap-gutter overflow-x-auto pb-8">
        {/* Column: Applied */}
        <div className="kanban-column flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <h3 className="font-label-strong text-on-surface uppercase tracking-widest text-xs">
                Applied (12)
              </h3>
            </div>
            <button
              className="material-symbols-outlined text-outline"
              data-icon="more_horiz"
            >
              more_horiz
            </button>
          </div>
          {/* Candidate Card */}
          <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border-l-4 border-slate-300 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <img
                alt="Candidate Portrait"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A professional studio portrait of a confident female professional with a warm smile, wearing a minimalist black turtleneck. The lighting is soft and directional, casting a gentle glow on her face against a neutral, high-key white background. The image exudes professional competence and approachability, fitting a high-end corporate ATS platform."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVWSnOQYOyLNm6xEk_3vGZL6LVxN6mxvuhexkrxtuQGfU96ym944MlPHxh0hh6Z9TKDC8jWgiyqZQISumkx_52I_NgoSJiwXlZfaJG7zOqxGj_2zsjzrsKB4BUNsNoMCj4qJY_IY9OtH-V4_UwAgRlGgiIcIqFm7Gv2HaPpXvoAWMAHsBATniq4cIs96Gsx-ZjG5vhb7bby5VO3MWfSbojyjnZ6ZBGypHPfXsKr27GHd53ZeVuEArYTsoxtWv_RpMG0J-gUAmirzg"
              />
              <div className="bg-secondary-container/30 text-secondary px-2 py-1 rounded text-xs font-bold">
                92% Match
              </div>
            </div>
            <h4 className="font-h3 text-on-surface mb-1">Alexandria Chen</h4>
            <p className="text-body-sm text-outline mb-4">
              Lead Designer at Meta
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                8Y EXP
              </span>
              <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                SAN FRANCISCO
              </span>
            </div>
            <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-outline">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300" />
              </div>
              <span
                className="material-symbols-outlined text-sm"
                data-icon="calendar_today"
              >
                calendar_today
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border-l-4 border-slate-300 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <img
                alt="Candidate Portrait"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A sharp, clear professional portrait of a male executive in his mid-30s. He is wearing a slim-fit navy suit with a clean white shirt, posing against a minimalist architectural background of light-colored concrete and glass. The lighting is bright and natural, reinforcing an image of institutional stability and modern efficiency."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVEBMLdjx3X0Dh84UIlBfNWw2Vv7wlMcXu-X7oPbqc7oH1QUyfNypPUsmBTwJgKWe5Mn4D8yP6ApvvJxFK0Jh0u5lrYnkEEEVwHZ2pT621dEGtsneqynQaCH_nJuTUUPp44Z64zKedQ8BGsWCvUdiIW6hcD5IMMdoCYW9KJw3-4ztw2ngY-VzBD__igJ4ZfhvGUUbm2KvBY9wEhH1zswYESb_6xSkGQEAzp_JuyjRC__QUZmUrsp_4Qmrq0KcSICOfQe2rPBlVhtA"
              />
              <div className="bg-secondary-container/30 text-secondary px-2 py-1 rounded text-xs font-bold">
                88% Match
              </div>
            </div>
            <h4 className="font-h3 text-on-surface mb-1">Marcus Thorne</h4>
            <p className="text-body-sm text-outline mb-4">
              Senior Designer at Stripe
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                6Y EXP
              </span>
              <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                REMOTE
              </span>
            </div>
          </div>
        </div>
        {/* Column: Screening */}
        <div className="kanban-column flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <h3 className="font-label-strong text-on-surface uppercase tracking-widest text-xs">
                Screening (4)
              </h3>
            </div>
            <button
              className="material-symbols-outlined text-outline"
              data-icon="more_horiz"
            >
              more_horiz
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border-l-4 border-secondary hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <img
                alt="Candidate Portrait"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A high-quality corporate headshot of a woman of color in a modern office environment. She has a confident and welcoming expression, dressed in a contemporary emerald green blouse. The background features a high-end office lounge with warm wooden accents and soft, diffused sunlight, emphasizing professional growth and clarity."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqv2RwwvyvHI63KkazU48HWTFE5pM813hUH_UFQdIldaHVFztsElxZHA5QZ79iuwbQX_X_KA9Wc63iIGp9bgVXHd7lArzTN6XmcLMK-Xc1Ck8IygTo-rwbvNrpRjJOcJvsWCRJsImYzlLgTnO9fAPIzYV44cKOYBhEFTYsliipjTmriZgABKc4LynmjpMxhbP1VUTpIeqc2dprOr2P3NH5QXY7z4nc7YWysuaKyr6pZ2mYKUM6iX72Lr05u4cOEj6UVu9kSwmNegw"
              />
              <div className="bg-secondary-container/30 text-secondary px-2 py-1 rounded text-xs font-bold">
                95% Match
              </div>
            </div>
            <h4 className="font-h3 text-on-surface mb-1">Sienna Williams</h4>
            <p className="text-body-sm text-outline mb-4">
              Product Architect at Airbnb
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                10Y EXP
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold">
                URGENT
              </span>
            </div>
          </div>
        </div>
        {/* Column: Interview */}
        <div className="kanban-column flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary-container" />
              <h3 className="font-label-strong text-on-surface uppercase tracking-widest text-xs">
                Interview (2)
              </h3>
            </div>
            <button
              className="material-symbols-outlined text-outline"
              data-icon="more_horiz"
            >
              more_horiz
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border-l-4 border-tertiary-container hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <img
                alt="Candidate Portrait"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A clean-cut professional portrait of a young man with a focused expression, wearing a stylish light grey knit sweater. The setting is a minimalist tech workspace with white desks and vibrant indoor plants. The lighting is bright and even, creating a clean, high-contrast aesthetic that fits a modern SaaS platform."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TKO0KZpVJ41JNJ9hC3YcJosGyBUyBpIi5KaVfye7Rj9W0FIPBcvucTiATdc7w80hEpXmCWQHp0hEG4VvZ2Q4txopChC0V8iYju2eZVUW3ZTo4L-3x4OS9001JobDu66GcYvGdd-oSRg6XmL-CbuYDmW40ulNopdUO430ZaHMtBEJ2y-5UaZb3PvrKZtd1SaXHs8Or9puFu1UzlRfDi4XiouIEWnRK5fCfdRKr9IQVolDMY-1BBet0DDdCDt1NQVlCMoY1bvWqkY"
              />
              <div className="bg-secondary-container/30 text-secondary px-2 py-1 rounded text-xs font-bold">
                84% Match
              </div>
            </div>
            <h4 className="font-h3 text-on-surface mb-1">Julian Brooks</h4>
            <p className="text-body-sm text-outline mb-4">
              Senior Designer at Shopify
            </p>
            <div className="mt-4 p-3 bg-tertiary-fixed-dim/20 rounded-lg flex items-center gap-3">
              <span
                className="material-symbols-outlined text-tertiary-fixed-variant"
                data-icon="event"
              >
                event
              </span>
              <div className="text-[11px]">
                <p className="font-bold text-on-tertiary-fixed-variant">
                  Interview Scheduled
                </p>
                <p className="text-on-tertiary-fixed-variant opacity-80">
                  Tomorrow, 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Column: Offered */}
        <div className="kanban-column flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error" />
              <h3 className="font-label-strong text-on-surface uppercase tracking-widest text-xs">
                Offered (1)
              </h3>
            </div>
            <button
              className="material-symbols-outlined text-outline"
              data-icon="more_horiz"
            >
              more_horiz
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border-l-4 border-error hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <img
                alt="Candidate Portrait"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="A professional portrait of a female creative director with a stylish, modern aesthetic. She is wearing bold-rimmed glasses and a black blazer, standing in a bright, sunlit creative studio with minimalist white walls. The scene is clean and professional, using high-key lighting to emphasize clarity and sophistication."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nl33ANPShMBasH_wBxrSfuuLrAwKynXQNrFf7BOi0Sex0cMkl36IR-LOwNceEoVLhQDpGL2cY8nX5g3VpC1Lbuhl8SyU-5KCENle3GoxUrfJ19y4sIvEAHH5f_GHqVTSkP6VIEerW5tOFjNUfeZ1zxgTfLnrK8Z2DTS0Nbt2NGIVOfMcdt5VmJfU2VMiFhTO1iEih6niDWimvEWTi44t2v5F4kEzZR3kaW7aKaU7Ir2Nhj3xyDwbQBVnnY9f1FjxnG4exujNP0A"
              />
              <div className="bg-secondary-container/30 text-secondary px-2 py-1 rounded text-xs font-bold">
                98% Match
              </div>
            </div>
            <h4 className="font-h3 text-on-surface mb-1">Elena Rodriguez</h4>
            <p className="text-body-sm text-outline mb-4">
              Design Principal at Google
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px] font-bold">
                PENDING ACCEPTANCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

    </div>
  )
}

export default Applicants
