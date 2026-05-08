import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Categories() {
    return (
        <>
        <Navbar />
        <main className="pt-24 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto">
  <section className="mb-lg">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
      <div>
        <h1 className="font-bold text-[48px] text-primary mb-xs">
          Explore Industries
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Browse our comprehensive directory of professional sectors and find
          the perfect path for your career growth.
        </p>
      </div>
    </div>
    <div className="mt-md p-2 bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant flex flex-col md:flex-row items-center gap-base">
      <div className="flex items-center flex-1 px-4 w-full">
        <span
          className="material-symbols-outlined text-outline mr-sm"
          data-icon="search"
        >
          search
        </span>
        <input
          className="w-full py-3 bg-transparent border-none focus:ring-0 text-body-md"
          placeholder="Search categories or keywords..."
          type="text"
        />
      </div>
      <div className="h-8 w-px bg-outline-variant hidden md:block" />
      <div className="flex items-center px-4 w-full md:w-auto">
        <span
          className="material-symbols-outlined text-outline mr-sm"
          data-icon="location_on"
        >
          location_on
        </span>
        <select className="bg-transparent border-none focus:ring-0 text-body-md pr-8">
          <option>Global Market</option>
          <option>Remote Only</option>
          <option>North America</option>
          <option>Europe</option>
        </select>
      </div>
      <button className="w-full md:w-auto bg-primary text-on-primary px-8 py-3 rounded-lg font-label-strong hover:opacity-90 transition-all">
        Search
      </button>
    </div>
  </section>
  <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
    <div className="md:col-span-8 bg-white p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant">
      <div className="flex items-center justify-between mb-md">
        <div className="flex items-center gap-sm">
          <div className="p-2 bg-primary-fixed rounded-lg text-primary">
            <span className="material-symbols-outlined" data-icon="terminal">
              terminal
            </span>
          </div>
          <h2 className="font-h2 text-h2">Technology &amp; Software</h2>
        </div>
        <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
          2.4k Jobs
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
        <a
          className="p-sm rounded-lg hover:bg-surface-container-low transition-colors group"
          href="#"
        >
          <div className="font-label-strong text-label-strong text-primary group-hover:text-secondary mb-1">
            Frontend Development
          </div>
          <div className="text-body-sm text-on-surface-variant">
            842 Openings
          </div>
        </a>
        <a
          className="p-sm rounded-lg hover:bg-surface-container-low transition-colors group"
          href="#"
        >
          <div className="font-label-strong text-label-strong text-primary group-hover:text-secondary mb-1">
            Data Science &amp; AI
          </div>
          <div className="text-body-sm text-on-surface-variant">
            512 Openings
          </div>
        </a>
        <a
          className="p-sm rounded-lg hover:bg-surface-container-low transition-colors group"
          href="#"
        >
          <div className="font-label-strong text-label-strong text-primary group-hover:text-secondary mb-1">
            Cloud Architecture
          </div>
          <div className="text-body-sm text-on-surface-variant">
            230 Openings
          </div>
        </a>
        <a
          className="p-sm rounded-lg hover:bg-surface-container-low transition-colors group"
          href="#"
        >
          <div className="font-label-strong text-label-strong text-primary group-hover:text-secondary mb-1">
            Cybersecurity
          </div>
          <div className="text-body-sm text-on-surface-variant">
            194 Openings
          </div>
        </a>
        <a
          className="p-sm rounded-lg hover:bg-surface-container-low transition-colors group"
          href="#"
        >
          <div className="font-label-strong text-label-strong text-primary group-hover:text-secondary mb-1">
            DevOps Engineering
          </div>
          <div className="text-body-sm text-on-surface-variant">
            311 Openings
          </div>
        </a>
        <a
          className="p-sm rounded-lg hover:bg-surface-container-low transition-colors group"
          href="#"
        >
          <div className="font-label-strong text-label-strong text-primary group-hover:text-secondary mb-1">
            Mobile App Dev
          </div>
          <div className="text-body-sm text-on-surface-variant">
            405 Openings
          </div>
        </a>
      </div>
    </div>
    {/* Visual Highlight Card */}
    <div className="md:col-span-4 relative overflow-hidden rounded-xl bg-primary-container p-md flex flex-col justify-end min-h-[300px]">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        data-alt="A professional collaborative workspace with diverse team members discussing data on large screens in a sleek, high-tech office. The lighting is cool and sophisticated with deep blues and crisp whites, echoing a high-end corporate modern aesthetic. The atmosphere is energetic and focused on technological innovation and professional career advancement."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpTgI6ua2Y1IuMpQNs0xM23lbaNNnKV3aNCugwveyNtJZYHTj1ilocC1pxP591Cnv3gAbY5rQx6NsUDiAAPTGf7Y2NqyN7F0_82xD4kvE4jhUsg5_uRjFbewVPJyQXnJrqSc4DxRB7rOk3yDyFWjgPrbkxCXh55Z1rbUexzQmfL_Fg38i1nIzPLyEFtGNzGoReA4fk_2XB7K7zGqk9yWVGjA3xsoE96sCUu5X1eQ3E6MrloYx1PbCVYj1g2a98rgQO59-2MK0B6uA"
      />
      <div className="relative z-10">
        <h3 className="font-h3 text-h3 text-on-tertiary mb-xs">
          Looking for Remote Roles?
        </h3>
        <p className="text-body-sm text-on-primary-container mb-md">
          Discover over 1,200 categories offering work-from-anywhere
          opportunities.
        </p>
        <button className="bg-secondary text-white font-label-strong px-4 py-2 rounded-lg">
          View Remote Directory
        </button>
      </div>
    </div>
    {/* Healthcare Section */}
    <div className="md:col-span-4 bg-white p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant">
      <div className="flex items-center gap-sm mb-md">
        <div className="p-2 bg-tertiary-fixed rounded-lg text-on-tertiary-fixed-variant">
          <span
            className="material-symbols-outlined"
            data-icon="medical_services"
          >
            medical_services
          </span>
        </div>
        <h2 className="font-h3 text-h3">Healthcare</h2>
      </div>
      <ul className="space-y-sm">
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Nursing Services
          </span>
          <span className="text-body-sm text-outline">1.1k</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Pharmaceuticals
          </span>
          <span className="text-body-sm text-outline">450</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Mental Health
          </span>
          <span className="text-body-sm text-outline">290</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Medical Research
          </span>
          <span className="text-body-sm text-outline">120</span>
        </li>
      </ul>
    </div>
    {/* Finance Section */}
    <div className="md:col-span-4 bg-white p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant">
      <div className="flex items-center gap-sm mb-md">
        <div className="p-2 bg-primary-fixed-dim rounded-lg text-primary-container">
          <span className="material-symbols-outlined" data-icon="payments">
            payments
          </span>
        </div>
        <h2 className="font-h3 text-h3">Finance</h2>
      </div>
      <ul className="space-y-sm">
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Investment Banking
          </span>
          <span className="text-body-sm text-outline">340</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            FinTech Development
          </span>
          <span className="text-body-sm text-outline">580</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Risk Management
          </span>
          <span className="text-body-sm text-outline">190</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Accounting
          </span>
          <span className="text-body-sm text-outline">890</span>
        </li>
      </ul>
    </div>
    {/* Creative Section */}
    <div className="md:col-span-4 bg-white p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant">
      <div className="flex items-center gap-sm mb-md">
        <div className="p-2 bg-secondary-fixed-dim rounded-lg text-on-secondary-fixed-variant">
          <span className="material-symbols-outlined" data-icon="palette">
            palette
          </span>
        </div>
        <h2 className="font-h3 text-h3">Creative &amp; Media</h2>
      </div>
      <ul className="space-y-sm">
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            UI/UX Design
          </span>
          <span className="text-body-sm text-outline">410</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Content Strategy
          </span>
          <span className="text-body-sm text-outline">320</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Digital Marketing
          </span>
          <span className="text-body-sm text-outline">670</span>
        </li>
        <li className="flex justify-between items-center group cursor-pointer">
          <span className="font-body-md group-hover:text-secondary">
            Video Production
          </span>
          <span className="text-body-sm text-outline">150</span>
        </li>
      </ul>
    </div>
    {/* Education & Public Sector */}
    <div className="md:col-span-6 bg-white p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant">
      <div className="flex items-center gap-sm mb-md">
        <div className="p-2 bg-surface-container-high rounded-lg text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="school">
            school
          </span>
        </div>
        <h2 className="font-h3 text-h3">Education &amp; Government</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div>
          <h4 className="font-label-caps text-label-caps text-outline mb-sm">
            EDUCATION
          </h4>
          <ul className="space-y-sm">
            <li className="flex justify-between text-body-md">
              <span>E-Learning</span> <span className="text-outline">430</span>
            </li>
            <li className="flex justify-between text-body-md">
              <span>Higher Ed</span> <span className="text-outline">210</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-outline mb-sm">
            PUBLIC SECTOR
          </h4>
          <ul className="space-y-sm">
            <li className="flex justify-between text-body-md">
              <span>Non-Profit</span> <span className="text-outline">180</span>
            </li>
            <li className="flex justify-between text-body-md">
              <span>Public Policy</span>{" "}
              <span className="text-outline">95</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Operations Section */}
    <div className="md:col-span-6 bg-white p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant">
      <div className="flex items-center gap-sm mb-md">
        <div className="p-2 bg-surface-container-high rounded-lg text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="inventory_2">
            inventory_2
          </span>
        </div>
        <h2 className="font-h3 text-h3">Business Operations</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <div>
          <h4 className="font-label-caps text-label-caps text-outline mb-sm">
            LOGISTICS
          </h4>
          <ul className="space-y-sm">
            <li className="flex justify-between text-body-md">
              <span>Supply Chain</span>{" "}
              <span className="text-outline">320</span>
            </li>
            <li className="flex justify-between text-body-md">
              <span>Warehouse</span> <span className="text-outline">540</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-outline mb-sm">
            SALES
          </h4>
          <ul className="space-y-sm">
            <li className="flex justify-between text-body-md">
              <span>Enterprise Sales</span>{" "}
              <span className="text-outline">410</span>
            </li>
            <li className="flex justify-between text-body-md">
              <span>Account Mgmt</span>{" "}
              <span className="text-outline">280</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Featured Section CTA */}
  <section className="mt-lg bg-surface-container-lowest rounded-xl border border-outline-variant p-lg flex flex-col md:flex-row items-center justify-between gap-md">
    <div className="flex-1">
      <span className="font-label-caps text-label-caps text-secondary mb-xs block">
        PERSONALIZED OPPORTUNITIES
      </span>
      <h2 className="font-h2 text-h2 text-primary mb-sm">
        Can't find your niche?
      </h2>
      <p className="text-body-md text-on-surface-variant">
        Create a professional profile and let our AI-driven matching engine find
        the categories that best suit your unique skill set.
      </p>
    </div>
    <div className="flex gap-sm">
      <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-strong whitespace-nowrap">
        Create Profile
      </button>
      <button className="border border-primary text-primary px-8 py-3 rounded-lg font-label-strong whitespace-nowrap">
        Help Center
      </button>
    </div>
  </section>
  </main>
  <Footer/>
</>
    )
} 