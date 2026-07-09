import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'

const Third = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center pt-24 pb-12 px-6">
  <div className="w-full max-w-2xl">
    {/* Progress Section */}
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <span className="font-label-caps text-on-primary-container tracking-widest uppercase">
          Step 3 of 4
        </span>
        <span className="font-label-strong text-primary">75% Complete</span>
      </div>
      <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
        <div className="h-full bg-secondary w-3/4 rounded-full transition-all duration-500" />
      </div>
    </div>
    {/* Onboarding Card */}
    <div className="bg-surface-container-lowest border border-outline-variant card-shadow rounded-xl p-8 md:p-12">
      <div className="text-center mb-10">
        <h1 className="font-h1 text-on-background mb-4">
          Tell us about your current role
        </h1>
        <p className="font-body-lg text-on-surface-variant">
          Help us understand your expertise and professional background to match
          you with the right opportunities.
        </p>
      </div>
      <form className="space-y-gutter">
        {/* Job Title Field */}
        <div className="space-y-2">
          <label
            className="font-label-strong text-on-surface"
            htmlFor="job-title"
          >
            Job Title
          </label>
          <div className="relative group">
            <span
              className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors"
              data-icon="work"
            >
              work
            </span>
            <input
              className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50"
              id="job-title"
              placeholder="e.g. Senior Product Designer"
              type="text"
            />
          </div>
        </div>
        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="space-y-2">
            <label className="font-label-strong text-on-surface" htmlFor="city">
              City
            </label>
            <div className="relative group">
              <span
                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors"
                data-icon="location_city"
              >
                location_city
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50"
                id="city"
                placeholder="e.g. San Francisco"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="font-label-strong text-on-surface"
              htmlFor="country"
            >
              Country
            </label>
            <div className="relative group">
              <span
                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors"
                data-icon="public"
              >
                public
              </span>
              <select
                className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg font-body-md focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none appearance-none transition-all"
                id="country"
              >
                <option disabled={true} selected={true} value="">
                  Select country
                </option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="de">Germany</option>
              </select>
              <span
                className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-6">
          <Link to="/second" className="w-full md:w-auto px-8 py-4 font-label-strong text-on-primary-container hover:bg-surface-container-high rounded-lg transition-colors flex items-center justify-center gap-2" type="button">  
            <span
              className="material-symbols-outlined text-[18px]"
              data-icon="arrow_back"
            >
              arrow_back
            </span>
            Back
          </Link>
          <Link
            className="w-full md:w-auto px-12 py-4 font-label-strong bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            to="/fourth"
          >
            Continue
            <span
              className="material-symbols-outlined text-[18px]"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </form>
    </div>
    
  </div>
</main>
    </div>
  )
}

export default Third
