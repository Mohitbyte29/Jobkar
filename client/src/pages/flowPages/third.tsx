import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const third = () => {
  return (
    <div>
        <Navbar/>
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
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
          <button
            className="w-full md:w-auto px-8 py-4 font-label-strong text-on-primary-container hover:bg-surface-container-high rounded-lg transition-colors flex items-center justify-center gap-2"
            type="button"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              data-icon="arrow_back"
            >
              arrow_back
            </span>
            Back
          </button>
          <button
            className="w-full md:w-auto px-12 py-4 font-label-strong bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            type="submit"
          >
            Continue
            <span
              className="material-symbols-outlined text-[18px]"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
          </button>
        </div>
      </form>
    </div>
    {/* Illustrative Support Image (Background/Bento Style) */}
    <div className="mt-gutter grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="md:col-span-1 rounded-xl overflow-hidden bg-secondary-container p-6 flex flex-col justify-end min-h-[160px]">
        <span
          className="material-symbols-outlined text-on-secondary-container text-3xl mb-2"
          data-icon="verified_user"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          verified_user
        </span>
        <h3 className="font-label-strong text-on-secondary-container mb-1">
          Privacy First
        </h3>
        <p className="text-[12px] text-on-secondary-fixed-variant leading-tight">
          Your current employer won't be notified about your profile.
        </p>
      </div>
      <div className="md:col-span-2 rounded-xl overflow-hidden relative min-h-[160px]">
        <img
          className="w-full h-full object-cover"
          data-alt="A professional workspace background with a soft-focus office interior. Warm natural sunlight streams through large windows, illuminating a minimalist desk with a sleek laptop. The color palette consists of soft greys, crisp whites, and gentle teals, creating a calm, high-end professional atmosphere. The mood is ambitious and focused, representing modern career growth."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNgKhUjGduWoVanCb2kmflP0OD-2YSzjkSBXMKp6sRaeAgy3dE93o0zuCmu7qAxXgH1UcyuIdpcWA3Rr3AFGPWhEzN8eTTLjlqZ7WqolBak2fNa461vccIaCaofiOvZh6-N5EcLsMM_OQZ_ij1XquOe9ZlHUGFDWvJAyYO3VF0_4jkrvZGZcFSrdooZ50TUdwfgIllNoLzjYB9hsYOx2IHYuazJVU1DmcBInUBiueJ-09j6Rgr8MLRBp3WqWkFIeSf5mBAqaygLaI"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <p className="text-white font-body-sm italic">
            "JobKar helped me find my current role as a Senior Lead in just 3
            weeks."
          </p>
          <p className="text-white/70 text-[10px] uppercase font-label-caps mt-1">
            — Sarah J., Product Manager
          </p>
        </div>
      </div>
    </div>
  </div>
</main>
    <Footer/>
    </div>
  )
}

export default third
