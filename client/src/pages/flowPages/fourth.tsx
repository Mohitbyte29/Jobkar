import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'

const Fourth = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
        
      <main className="grow flex items-center justify-center px-6 pt-24 pb-12">
  <div className="max-w-4xl w-full">
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
    {/* Onboarding Card */}
    <div className="bg-white card-shadow rounded-xl p-8 md:p-12 border border-outline-variant/30">
      {/* Progress Indicator for Mobile */}
      <div className="md:hidden mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="font-label-strong text-on-surface-variant uppercase text-[10px] tracking-widest">
            Progress
          </span>
          <span className="font-label-strong text-secondary text-[10px]">
            100%
          </span>
        </div>
        <div className="w-full h-1 bg-surface-container rounded-full">
          <div className="h-full bg-secondary w-full rounded-full" />
        </div>
      </div>
      <div className="text-center mb-10">
        <h1 className="font-h1 text-primary mb-3">What's your industry?</h1>
        <p className="font-body-lg text-on-surface-variant">
          Select the field that best describes your work.
        </p>
      </div>
      {/* Industry Search/Input */}
      <div className="mb-8 max-w-xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span
              className="material-symbols-outlined text-outline group-focus-within:text-secondary transition-colors"
              data-icon="search"
            >
              search
            </span>
          </div>
          <input
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl font-body-md focus:ring-0 focus:border-secondary transition-all outline-none"
            placeholder="Search industry..."
            type="text"
          />
        </div>
      </div>
      {/* Industry Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {/* Industry Item: Technology (Selected State) */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-secondary bg-secondary-container/10 transition-all hover:bg-secondary-container/20 group">
          <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-secondary text-3xl"
              data-icon="developer_mode"
            >
              developer_mode
            </span>
          </div>
          <span className="font-label-strong text-on-secondary-container">
            Technology
          </span>
        </button>
        {/* Industry Item: Finance */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="payments"
            >
              payments
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Finance
          </span>
        </button>
        {/* Industry Item: Healthcare */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="medical_services"
            >
              medical_services
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Healthcare
          </span>
        </button>
        {/* Industry Item: Creative */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="palette"
            >
              palette
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Creative
          </span>
        </button>
        {/* Industry Item: Marketing */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="campaign"
            >
              campaign
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Marketing
          </span>
        </button>
        {/* Industry Item: Education */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="school"
            >
              school
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Education
          </span>
        </button>
        {/* Industry Item: Retail */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Retail
          </span>
        </button>
        {/* Industry Item: Engineering */}
        <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-outline-variant bg-white transition-all hover:border-secondary hover:shadow-md group">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-secondary/5 transition-colors">
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary text-3xl"
              data-icon="engineering"
            >
              engineering
            </span>
          </div>
          <span className="font-label-strong text-on-surface-variant group-hover:text-secondary">
            Engineering
          </span>
        </button>
      </div>
      {/* CTA Actions */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
        <Link to="/third" className="w-full md:w-auto px-8 py-3 font-label-strong text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2">
          <span
            className="material-symbols-outlined text-[18px]"
            data-icon="arrow_back"
          >
            arrow_back
          </span>
          Back
        </Link>
        <Link to="/" className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-xl font-label-strong hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-2 group">
          Complete Profile
          <span
            className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform"
            data-icon="check_circle"
            data-weight="fill"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check_circle
          </span>
        </Link>
      </div>
    </div>
    
  </div>
</main>
    </div>
  )
}

export default Fourth
