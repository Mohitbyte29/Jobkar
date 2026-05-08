import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Navbar />
  <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-caps mb-4">
          NOW HIRING IN 45 COUNTRIES
        </span>
        <h1 className="font-bold text-[48px] text-on-surface mb-6">
          Find Your Next Career Move
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
          Connect with industry-leading companies looking for top talent. JobKar
          is the premier destination for ambitious professionals.
        </p>
        {/* Search Interface */}
        <div className="p-2 glass-card rounded-xl border border-outline-variant max-w-3xl flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
            <span
              className="material-symbols-outlined text-outline"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-transparent border-none focus:ring-0 font-body-md placeholder:text-outline"
              placeholder="Job title or keyword"
              type="text"
            />
          </div>
          <div className="hidden md:block h-8 w-px bg-outline-variant" />
          <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
            <span
              className="material-symbols-outlined text-outline"
              data-icon="location_on"
            >
              location_on
            </span>
            <input
              className="w-full bg-transparent border-none focus:ring-0 font-body-md placeholder:text-outline"
              placeholder="Location"
              type="text"
            />
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-primary-container text-white rounded-lg font-label-strong active:scale-95 transition-all">
            Search Jobs
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <span className="text-body-sm text-outline">Popular:</span>
          <span className="px-3 py-1 bg-surface-container rounded-full text-body-sm hover:bg-secondary-container transition-colors cursor-pointer">
            Product Design
          </span>
          <span className="px-3 py-1 bg-surface-container rounded-full text-body-sm hover:bg-secondary-container transition-colors cursor-pointer">
            Software Engineer
          </span>
          <span className="px-3 py-1 bg-surface-container rounded-full text-body-sm hover:bg-secondary-container transition-colors cursor-pointer">
            Marketing
          </span>
        </div>
      </div>
      <div className="lg:col-span-5 relative hidden lg:block">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-4/5">
          <img
            alt="Professional working"
            className="w-full h-full object-cover"
            data-alt="Modern office setting with a professional woman confidently using a laptop, soft morning light, corporate chic aesthetic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9feLsxOZM1tSK99nku01xpkVb9FEyct9edJpLuZKOoUJyIRKme88HnamJ454pIeC6zyuwNN6EnnJ8TIZIlckU-_hN1UHz75moYKDXNbSh3yUS1EA2yJM8-BtoZmG6Crj_eM2ETxGZOy86d-2eKHous0t54tCh5_Twk55sdt5sAuIB7c_2Jfbj5rfM7wgnOexII0z_40bHwBcqKi0cj8sCCD5tXe5mhsfkroTImr6omCVk4QUmVEKN6p87Zui9mWhITYuO-F6Znt4"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 z-20 glass-card p-4 rounded-xl border border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-secondary-fixed"
                data-icon="trending_up"
              >
                trending_up
              </span>
            </div>
            <div>
              <p className="font-label-strong text-slate-900">1.2k+ New Jobs</p>
              <p className="text-xs text-outline">Posted this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Featured Categories */}
  <section className="bg-surface-container-low py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface mb-2">
            Explore by Category
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Find the role that matches your expertise
          </p>
        </div>
        <Link to="/categories" className="text-secondary font-label-strong flex items-center gap-1 hover:gap-2 transition-all" >
          View all{" "}
          <span className="material-symbols-outlined" data-icon="arrow_forward">
            arrow_forward
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tech */}
        <div className="bg-white p-8 rounded-xl border border-transparent hover:border-secondary transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
            <span
              className="material-symbols-outlined text-primary-container"
              data-icon="code"
            >
              code
            </span>
          </div>
          <h3 className="font-h3 text-h3 mb-2">Technology</h3>
          <p className="text-body-sm text-outline mb-4">452 Open Positions</p>
          <span className="text-xs font-label-caps text-secondary">
            Explore Roles
          </span>
        </div>
        {/* Design */}
        <div className="bg-white p-8 rounded-xl border border-transparent hover:border-secondary transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
            <span
              className="material-symbols-outlined text-on-secondary-container"
              data-icon="palette"
            >
              palette
            </span>
          </div>
          <h3 className="font-h3 text-h3 mb-2">Design</h3>
          <p className="text-body-sm text-outline mb-4">128 Open Positions</p>
          <span className="text-xs font-label-caps text-secondary">
            Explore Roles
          </span>
        </div>
        {/* Marketing */}
        <div className="bg-white p-8 rounded-xl border border-transparent hover:border-secondary transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
            <span
              className="material-symbols-outlined text-on-tertiary-fixed-variant"
              data-icon="campaign"
            >
              campaign
            </span>
          </div>
          <h3 className="font-h3 text-h3 mb-2">Marketing</h3>
          <p className="text-body-sm text-outline mb-4">310 Open Positions</p>
          <span className="text-xs font-label-caps text-secondary">
            Explore Roles
          </span>
        </div>
        {/* Finance */}
        <div className="bg-white p-8 rounded-xl border border-transparent hover:border-secondary transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
            <span
              className="material-symbols-outlined text-on-surface"
              data-icon="payments"
            >
              payments
            </span>
          </div>
          <h3 className="font-h3 text-h3 mb-2">Finance</h3>
          <p className="text-body-sm text-outline mb-4">185 Open Positions</p>
          <span className="text-xs font-label-caps text-secondary">
            Explore Roles
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* Latest Jobs */}
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-h2 text-h2 mb-4">Latest Opportunities</h2>
      <p className="text-body-md text-on-surface-variant">
        Hand-picked roles from trusted partners
      </p>
    </div>
    <div className="space-y-4">
      {/* Job Card 1 */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-secondary transition-all group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
            <img
              alt="Stripe logo"
              className="w-full h-full object-contain"
              data-alt="Minimalist technology company logo on a clean background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo60z3zhhRIeuYbud3hBFmWgWfol3zkaundoJxbICOoOJwFdiDPWS-r7kRHhYEd-SbSHiuy3XVfyUMUK9x3guBP2OSkX8hPoyceWm_7aJIIpQD9VzLKCu1pUE-DZmEPOGOBoTuwv2_VBA3dB-x8ztRMjWn6Skj4AIu45xPYerGYkKhw5XhdkT3DRuDeTXfOttoRfT-wbXbU2vMWOUfYU1cYU8l1MgGshaMJem30dKScl32gVBg9NzrFkBCOjtpeqRGhGnsdIXypOw"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-h3 text-h3">Senior UX Designer</h3>
              <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-label-caps rounded">
                URGENT
              </span>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-body-sm font-label-strong text-slate-900">
                Stripe
              </span>
              <div className="flex items-center gap-1 text-outline text-body-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="location_on"
                >
                  location_on
                </span>
                Remote, US
              </div>
              <div className="flex items-center gap-1 text-outline text-body-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="schedule"
                >
                  schedule
                </span>
                Full-time
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-end gap-3">
            <p className="font-h3 text-secondary">$140k - $190k</p>
            <button className="px-6 py-2 bg-primary-container text-white rounded-lg font-label-strong hover:bg-slate-800 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* Job Card 2 */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-secondary transition-all group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
            <img
              alt="Vercel logo"
              className="w-full h-full object-contain"
              data-alt="Clean corporate logo for a modern cloud platform company"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLQeclaSZgrgxqyZlimw6wJp86ohfLcZIn9XsN7MXR7zzPedoqKkSX5iHW5p-YOnsoXzuUBXfGefj32RalQ_eKcHuAI7jaizZUrMpMgjk_gG80xZhcKylIhCqA6rqe0d43afQLkOGsfA9hn-AM8n5T9CHLBno2RIQa_sIEgAk0uqnGCziY030XKgyg90gdzpfHQiW7hRenvmCe3SUUI5n9VSeEvAD9XadOMg4RQRVGkbfZRfylKcIHh-AfhjhwOzktgM37Y5EjPds"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-h3 text-h3">Frontend Engineer (Next.js)</h3>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed-variant text-[10px] font-label-caps rounded">
                NEW
              </span>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-body-sm font-label-strong text-slate-900">
                Vercel
              </span>
              <div className="flex items-center gap-1 text-outline text-body-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="location_on"
                >
                  location_on
                </span>
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1 text-outline text-body-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="schedule"
                >
                  schedule
                </span>
                Full-time
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-end gap-3">
            <p className="font-h3 text-secondary">$160k - $220k</p>
            <button className="px-6 py-2 bg-primary-container text-white rounded-lg font-label-strong hover:bg-slate-800 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* Job Card 3 */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:border-secondary transition-all group">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
            <img
              alt="Airbnb logo"
              className="w-full h-full object-contain"
              data-alt="Well-known hospitality brand logo on soft background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB13K92n5YYMsI8ayGSMo8qyUhKam1ZUeNmwnFurzRF88ooTo0JFA3qAwfKYcg0uL9Bwoq_UmgmTtcBhgDoxM7rDIQIPtjeK5fwff4pPnSuay7v_VOiQqeRz1jQhkG5hN-7FWvpTuF2ke1FARFbNeI6rm9J-3DIkQhMYOo_bt3KDdV45ZuW4LCPHegRiFOa3bhbxhxLehual_8sVjPa24qD962kggHjqXexz2ukcESS6PFHMjIYxK8AMZfq_4MBuUuxCAwJ1D5qiDw"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-h3 text-h3">Marketing Manager</h3>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-body-sm font-label-strong text-slate-900">
                Airbnb
              </span>
              <div className="flex items-center gap-1 text-outline text-body-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="location_on"
                >
                  location_on
                </span>
                New York, NY
              </div>
              <div className="flex items-center gap-1 text-outline text-body-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="schedule"
                >
                  schedule
                </span>
                Contract
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-end gap-3">
            <p className="font-h3 text-secondary">$90k - $130k</p>
            <button className="px-6 py-2 bg-primary-container text-white rounded-lg font-label-strong hover:bg-slate-800 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center">
      <button className="px-10 py-4 border-2 border-primary-container text-primary-container font-label-strong rounded-lg hover:bg-primary-container hover:text-white transition-all">
        Browse All 2,500+ Jobs
      </button>
    </div>
  </section>
  {/* Employer Section */}
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-primary-container text-white relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 lg:p-24 items-center relative z-10">
        <div>
          <h2 className="font-display text-display mb-6">
            Reach the world's best talent.
          </h2>
          <p className="text-body-lg text-on-primary-container mb-10">
            Join 10,000+ companies using JobKar to scale their teams with the
            most qualified candidates in tech, design, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-secondary text-white rounded-lg font-label-strong active:scale-95 transition-all">
              Post a Job Now
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-label-strong backdrop-blur-sm hover:bg-white/20 transition-all">
              View Pricing
            </button>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h4 className="font-h3 text-h3 mb-2">95%</h4>
              <p className="text-sm text-on-primary-container">
                Placement rate for premium listings
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h4 className="font-h3 text-h3 mb-2">24h</h4>
              <p className="text-sm text-on-primary-container">
                Average time to first application
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h4 className="font-h3 text-h3 mb-2">1M+</h4>
              <p className="text-sm text-on-primary-container">
                Monthly active job seekers
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h4 className="font-h3 text-h3 mb-2">4.9/5</h4>
              <p className="text-sm text-on-primary-container">
                Average employer satisfaction rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer / >
  </>
  )
}
