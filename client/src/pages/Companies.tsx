import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCompany } from "@/context/CompanyContext";
import { Link } from "react-router-dom";

interface Company{
  name: string;
  logo: string;
  description: string;
} 

export default function Companies() {
  const { companyData, total } = useCompany();
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-white border-b border-slate-200 pt-xl pb-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="font-bold text-[48px] text-primary mb-md">
                Explore Top Companies
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                Discover your next career move by browsing the world's most
                innovative organizations and their current openings.
              </p>
              {/* Multi-Input Search Bar */}
              <div className="bg-white border border-outline-variant p-2 rounded-xl flex flex-col md:flex-row gap-2 shadow-lg items-center">
                <div className="flex items-center flex-1 px-4 border-b md:border-b-0 md:border-r border-slate-100 py-2 w-full">
                  <span
                    className="material-symbols-outlined text-outline mr-2"
                    data-icon="search"
                  >
                    search
                  </span>
                  <input
                    className="w-full border-none focus:ring-0 text-body-md font-body-md placeholder:text-outline bg-transparent"
                    placeholder="Company name or industry"
                    type="text"
                  />
                </div>
                <div className="flex items-center flex-1 px-4 py-2 w-full">
                  <span
                    className="material-symbols-outlined text-outline mr-2"
                    data-icon="location_on"
                  >
                    location_on
                  </span>
                  <input
                    className="w-full border-none focus:ring-0 text-body-md font-body-md placeholder:text-outline bg-transparent"
                    placeholder="Location"
                    type="text"
                  />
                </div>
                <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-strong text-label-strong w-full md:w-auto transition-transform active:scale-95">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-xl">
          <div className="flex flex-col lg:flex-row gap-gutter">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-lg">
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Industry
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      defaultChecked={true}
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Tech &amp; Software
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Finance
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Healthcare
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Design
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Job Role
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Engineering
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Design
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Marketing
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Sales
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Job Type
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Full-time
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Part-time
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Internship
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="rounded border-outline-variant text-secondary focus:ring-secondary/20"
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      Contract
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Company Size
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      1-50 employees
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      51-200 employees
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      defaultChecked={true}
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      201-1000 employees
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="size"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      1000+ employees
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-label-strong text-label-strong text-primary mb-sm">
                  Salary Range
                </h4>
                <div className="space-y-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $50k - $80k
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $80k - $120k
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $120k - $160k
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="border-outline-variant text-secondary focus:ring-secondary/20"
                      name="salary"
                      type="radio"
                    />
                    <span className="font-body-sm text-body-sm group-hover:text-primary transition-colors">
                      $160k+
                    </span>
                  </label>
                </div>
              </div>
              <div className="pt-sm border-t border-slate-200">
                <button className="text-secondary font-label-strong text-label-strong hover:underline flex items-center">
                  Clear all filters
                </button>
              </div>
            </aside>
            {/* Grid Section */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-md">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Showing <strong>24</strong> companies
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-label-strong text-label-strong text-on-surface-variant">
                    Sort by:
                  </span>
                  <select className="border-none bg-transparent font-label-strong text-label-strong text-primary focus:ring-0 cursor-pointer">
                    <option>Most Active</option>
                    <option>Popularity</option>
                    <option>Recently Added</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Stripe Card */}
                    {companyData.map((company) => (
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">

                      <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt={company.name}
                        className="w-full h-full object-contain"
                        data-alt="Stripe minimalist company logo on a clean white background"
                        src={company.logo}
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Fintech
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">{company.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    Financial infrastructure for the internet. Millions of
                    businesses of all sizes use Stripe's software and APIs.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      42 Open Roles
                    </span>
                    <Link to={`/company/${company.name}`} className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </Link>
                  </div>
                </div>
                    ))}
                {/* Vercel Card */}
               
              </div>
              {/* Pagination */}
              <div className="mt-lg flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-strong">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50 font-label-strong">
                  12
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-on-surface hover:bg-slate-50">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
