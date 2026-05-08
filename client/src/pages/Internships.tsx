import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Internships() {
  return (
    <>
        <Navbar />  
      <main className="max-w-[1280px] mx-auto px-8 py-md pt-16">
        {/* Search Header Section */}
        <section className="mb-lg">
          <h1 className="font-bold text-[48px] mb-md">Find your next internship</h1>
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] p-2 flex flex-col md:flex-row items-center gap-2">
            <div className="flex items-center px-4 py-2 flex-1 border-r border-outline-variant/30 w-full">
              <span
                className="material-symbols-outlined text-outline mr-2"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full border-none focus:ring-0 font-body-md bg-transparent"
                placeholder="Role, skill, or company"
                type="text"
              />
            </div>
            <div className="flex items-center px-4 py-2 flex-1 w-full">
              <span
                className="material-symbols-outlined text-outline mr-2"
                data-icon="location_on"
              >
                location_on
              </span>
              <input
                className="w-full border-none focus:ring-0 font-body-md bg-transparent"
                placeholder="City or remote"
                type="text"
              />
            </div>
            <button className="bg-secondary text-white px-xl py-3 rounded-lg font-label-strong hover:opacity-90 transition-all w-full md:w-auto">
              Search
            </button>
          </div>
        </section>
        {/* Featured Programs Carousel-style Section */}
        <section className="mb-lg">
          <div className="flex justify-between items-end mb-md">
            <div>
              <span className="text-secondary font-label-caps uppercase tracking-widest mb-2 block">
                Premium Opportunities
              </span>
              <h2 className="font-h2 text-h2">Featured Internship Programs</h2>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container-low transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="chevron_left"
                >
                  chevron_left
                </span>
              </button>
              <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container-low transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="chevron_right"
                >
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Program Card 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-primary-container h-[240px] flex flex-col justify-end p-md text-white">
              <img
                className="absolute inset-0 object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                data-alt="diverse group of young professionals collaborating in a modern glass-walled office with natural sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmrMuRM5aO0git7Qq99Gd8ngc5ySQddKsxza3y9NEzJgoWgWrtU2xQrDuPR7VGSPJZh2XdH0FFQbgNLDYuNlDBSQ6nrDc6wfwrOHBWA6nicHTAtUPAWhGjzwYfj34OyL7TXRcIc05G7oiXAc7AgJOOwDIPnaVJqUAIaBEiNGJgIJ28c7suUGuUGcUVQ5nA3NR5llZp9FwSJiqpYo80W9qLrYZ7R57ZFqFHkcFgZVYJEpsr1UIaoIjGohw5Awssenw6_KbXWN_RaTc"
              />
              <div className="relative z-10">
                <div className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-label-caps inline-block mb-2">
                  Summer 2024
                </div>
                <h3 className="font-h3 text-h3 mb-1">
                  Tech Excellence Program
                </h3>
                <p className="font-body-sm opacity-80">
                  Global Innovation Hub • 12 Weeks
                </p>
              </div>
            </div>
            {/* Program Card 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-tertiary-container h-[240px] flex flex-col justify-end p-md text-white">
              <img
                className="absolute inset-0 object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                data-alt="modern minimalist office interior with white desks, greenery, and wide windows overlooking a city skyline"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbaZs2d44cH2hMTMa8e86ClMyFi3dvrv8rLofIWhg-gSsqLL3IA8clrf_UOmCxJwxx1pnqwMpMmPjX-2krcv5Qi6QDwWR9_Inobn_3ndOgb1pP4RJzWuhaTFGYhNTS8l31cESPkdtrnYUYaYatqjKc8Y2T5QyOLndkHmAREns-ZqtyKvNfe9oxPMyTq8U8ptZRNKWFTl41gFZTIrb7MIcj6wErY5q0c7sw3dNITg60_hKBKA-1u4cQVrGcbwf2BIclXv6t3LVjRtM"
              />
              <div className="relative z-10">
                <div className="bg-tertiary text-white px-2 py-1 rounded font-label-caps inline-block mb-2">
                  Corporate
                </div>
                <h3 className="font-h3 text-h3 mb-1">
                  Future Leaders Fellowship
                </h3>
                <p className="font-body-sm opacity-80">
                  Strategic Consulting • 6 Months
                </p>
              </div>
            </div>
            {/* Program Card 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-800 h-[240px] flex flex-col justify-end p-md text-white">
              <img
                className="absolute inset-0 object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                data-alt="creative studio space with mood boards, digital devices, and bright artistic lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ZtBcAVFf2SEPG0f8WH3Rt_597GzO5xeuzCz2S4j7ePnbaAUlPQPmV-HtRX4geUpANduf9Jh77mY5Nm8boC190I9m3KC7xMFiSp-EPCXVq8aWcnAT2B_OiTXiFQxc23Nq7EegTlYVLNVe7nQdZgf8xbVrQwmv2EcRiLEuBnLfrQMgzC3KYwupTu87Vv3Cdnt42uZX4L7dMNkinu4saPugihNQwEk8iI46_DALOPAlxpU5ym_pBwqCFwd6aIA4TL4hDGSapeFGXaM"
              />
              <div className="relative z-10">
                <div className="bg-secondary text-white px-2 py-1 rounded font-label-caps inline-block mb-2">
                  Design
                </div>
                <h3 className="font-h3 text-h3 mb-1">
                  Creative Arts Internship
                </h3>
                <p className="font-body-sm opacity-80">
                  Design Collective • 3 Months
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Filters Sidebar */}
          <aside className="md:col-span-3 space-y-md">
            <div className="flex justify-between items-center mb-xs">
              <h3 className="font-label-strong text-on-surface">Filters</h3>
              <button className="text-secondary font-label-caps hover:underline">
                Clear All
              </button>
            </div>
            {/* Duration */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <p className="font-label-strong mb-sm">Duration</p>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    3 months
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    defaultChecked={true}
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    6 months
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    12 months
                  </span>
                </label>
              </div>
            </div>
            {/* Internship Type */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <p className="font-label-strong mb-sm">Internship Type</p>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group">
                  <input
                    defaultChecked={true}
                    className="text-secondary focus:ring-secondary mr-3"
                    name="type"
                    type="radio"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    Paid (Stipend)
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="text-secondary focus:ring-secondary mr-3"
                    name="type"
                    type="radio"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    Unpaid
                  </span>
                </label>
              </div>
            </div>
            {/* Academic Credit */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <p className="font-label-strong mb-sm">Academic Credit</p>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    Available
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    Not Available
                  </span>
                </label>
              </div>
            </div>
            {/* Work Mode */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <p className="font-label-strong mb-sm">Work Mode</p>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group">
                  <input
                    defaultChecked={true}
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    Remote
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    In-person
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    className="rounded border-outline-variant text-secondary focus:ring-secondary mr-3"
                    type="checkbox"
                  />
                  <span className="font-body-sm group-hover:text-secondary transition-colors">
                    Hybrid
                  </span>
                </label>
              </div>
            </div>
          </aside>
          {/* Results Column */}
          <div className="md:col-span-9 space-y-sm">
            <div className="flex justify-between items-center mb-sm">
              <p className="font-body-sm text-outline">
                Showing <span className="font-bold text-on-surface">124</span>{" "}
                internships
              </p>
              <div className="flex items-center gap-2">
                <span className="font-body-sm text-outline">Sort by:</span>
                <select className="border-none bg-transparent font-label-strong text-on-surface focus:ring-0 cursor-pointer">
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Stipend: High to Low</option>
                </select>
              </div>
            </div>
            {/* Internship Card 1 */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex gap-md items-start group hover:border-secondary border border-transparent transition-all">
              <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2">
                <img
                  className="w-full h-auto"
                  data-alt="Google company logo, colorful minimalist letter G"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9TaG1jVzAyWpXYC5fj_UcLB4H1SO_maTqyAX8KWVjRFAHeVnL2eYjNhlYswcRGvKRKFWu-mAqA1kxiVRIZep85Digvh6M1Kg5-XBr9tuzYOsJ0obvfCIdrOxzWv1_o5Xi3gQiS8UpBzt3Ee4KtOy8oNZASUQquUBJZo6QbL7yWeArmvby04S7z8LQzpfrwyRP_X9hQcg_PNupFjxWUi3QEdOsBJC_ORF_yc0LU9xlVI5YR8ERJQyBlegRfbCyYtGIKImO_lQtJUU"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-h3 text-h3 mb-1 group-hover:text-secondary transition-colors">
                      User Experience Design Intern
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-2">
                      Google • Mountain View, CA (Remote)
                    </p>
                  </div>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps">
                    NEW
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-md">
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="schedule"
                    >
                      schedule
                    </span>{" "}
                    6 Months
                  </span>
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="payments"
                    >
                      payments
                    </span>{" "}
                    $3,500/mo
                  </span>
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="school"
                    >
                      school
                    </span>{" "}
                    Credit Available
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-body-sm text-outline italic">
                    Posted 2 hours ago
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-label-strong hover:bg-secondary/5 transition-all">
                      Save
                    </button>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-label-strong hover:bg-primary/90 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Internship Card 2 */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex gap-md items-start group hover:border-secondary border border-transparent transition-all">
              <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2">
                <img
                  className="w-full h-auto"
                  data-alt="Spotify company logo, green circle with black sound waves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7bNkusbyEvpwIMpaN2jjhPKGFBK5sXfMdjeoedhqktR7GBEK27mE1HcPNGYuHINvMAi8nNHKZQCfVoelwQzRx_dRZ41ROnwyj8hHdppRxa9g3RxnvoxZS9B36IWjrejbn_j2L595-SJdna15--uEHXBkIniHkClrkI0PxFTRqEE_CTFq1wrKV-CiBNrGtQlSeVj-3u8NZNzkIongZmgrP43dkTkxaAhhpDV-tOJ4oFIvcnsSkKVPTIP5oV0eGXvHk8VLp5R24Vx8"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-h3 text-h3 mb-1 group-hover:text-secondary transition-colors">
                      Software Engineering Intern (Backend)
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-2">
                      Spotify • Stockholm, SE
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-md">
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="schedule"
                    >
                      schedule
                    </span>{" "}
                    3 Months
                  </span>
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="payments"
                    >
                      payments
                    </span>{" "}
                    Paid
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-body-sm text-outline italic">
                    Posted 1 day ago
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-label-strong hover:bg-secondary/5 transition-all">
                      Save
                    </button>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-label-strong hover:bg-primary/90 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Internship Card 3 */}
            <div className="bg-white p-md rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex gap-md items-start group hover:border-secondary border border-transparent transition-all">
              <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center p-2">
                <img
                  className="w-full h-auto"
                  data-alt="Airbnb company logo, coral colored abstract symbol"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgXyUSRQCRW2rMjm0spdpOgg2Hf0UtkyDU-VA_j9ROm0V-_JMhbx-S6qhfjVXCXaNnszJLu8v_g6gJ61DSYLlFrdbr97nxBApe8KfqZS1kuHHY1v3PpfTZQ-YruSUMKXYH1P2OavcsXDOFUYUTT0Z--DshxH_GRbjn7SZIPjvXh_OUzb8j0AW10-baDo0-qFRbT8EAYbsbW1TcAcUud85W-Bmaglox-dFz4DXf7jy0WW4lq7REmXw5Olt8VD06kxCBoRH2xrYL58"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-h3 text-h3 mb-1 group-hover:text-secondary transition-colors">
                      Product Marketing Intern
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-2">
                      Airbnb • San Francisco, CA
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-md">
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="schedule"
                    >
                      schedule
                    </span>{" "}
                    6 Months
                  </span>
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded font-label-caps flex items-center">
                    <span
                      className="material-symbols-outlined text-[16px] mr-1"
                      data-icon="payments"
                    >
                      payments
                    </span>{" "}
                    Competitive Stipend
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-body-sm text-outline italic">
                    Posted 3 days ago
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-label-strong hover:bg-secondary/5 transition-all">
                      Save
                    </button>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-label-strong hover:bg-primary/90 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-md flex justify-center">
              <button className="bg-white border border-outline-variant px-xl py-2 rounded-lg font-label-strong text-on-surface hover:bg-surface-container transition-colors">
                Load More Internships
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
