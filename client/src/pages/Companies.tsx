import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Companies() {
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
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt="Stripe"
                        className="w-full h-full object-contain"
                        data-alt="Stripe minimalist company logo on a clean white background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqG9SSaIwg4PQufV02_50TGkYoc4qHF-KSzcGZYQZIw1lEHjQ1wL4GEJiq459L--87aYqkCbolh8rb9JuVJlHEXrsisd338NAR5vuX3b0jBXmVIn9O5hxXPITblehfN0T9a9YgSTwkFd5qwmWTJc-P4P-DxqTmJO2rGQDnQufsjjXqPcCfNBDaO2Xv8_f_GMBpS9JQzkldlP-82EbvoF9RsFOXMBweHAsL56dyiMJY3TLllCYEmxHA4uI1pW8wAgPvsLP9JwcCj-4"
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Fintech
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">Stripe</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    Financial infrastructure for the internet. Millions of
                    businesses of all sizes use Stripe's software and APIs.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      42 Open Roles
                    </span>
                    <button className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
                {/* Vercel Card */}
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt="Vercel"
                        className="w-full h-full object-contain"
                        data-alt="Vercel minimalist company logo geometric triangle on white background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7EoMmtXQvSouzac3_YJGEzy8fVC__nALvCv-_5BMSeO_0U9KVcIl0wsToeNGGCK2JUjhb_Nr1w7SulmUGXmGSktQcD5m3Nh-iWlgBsga6N-jRGkIPXC6PTu7uHIuoBLrjwKk1G4IpsgQvYciUcIiilXUOSyaBeS87tO_gRap8Eezfi3CeeMWGc8ScC9SHY8R0fZe_yrRuSkZEEvgNNBa0GHbYUJLw7h5IiVYCh3h8zcIwnmW6RYyF35hQwzwW21fXOhU0zteauA"
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      DevTools
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">Vercel</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    The platform for frontend developers, providing the speed
                    and reliability needed to create at the moment of
                    inspiration.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      18 Open Roles
                    </span>
                    <button className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
                {/* Figma Card */}
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt="Figma"
                        className="w-full h-full object-contain"
                        data-alt="Figma company logo vibrant stylized F icon on white"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBXQOxdMe5c8vpaZbSQHEk__RRSNwm3McwwnoL7UeVAua9YKc9MJmE3fCghvXI6dS0hHVQYqrhpr-AExN8ZaGuUD-408SBTlxUO70Hfzlozk-f_hxJ-XQhoSQl-6ZZBMCXHlnjP5syjCeKuVhmmKE554we1k5tSdE5dInCJNwbRu6bzAjLacE3vcNCxF56S53z3gjjtJGxLc4XbV-7NA4GEeX1oxmUFSu_XTB3y_F5Kg_DVIwfa9r7ZfKJQcs5AbOEZjM-rzSy7U4"
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Design
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">Figma</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    Building tools that help teams create, share, test, and ship
                    better designs from start to finish.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      25 Open Roles
                    </span>
                    <button className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
                {/* Airbnb Card */}
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt="Airbnb"
                        className="w-full h-full object-contain"
                        data-alt="Airbnb company logo symbol on clean minimalist white background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfyJ9WVaLvkKsfii7yRvjdSKoLoXSQdihwirs2sfVCiY_iO6NkO6DChxwdASnCRP1CPQ6HvXGTETvJttpO32QkUnog9Pcs2z_raG1lmS10RClz3ZDC2-x3C8OP8SXDWBS3Mv5_voOX9ScEKdG1UzJ_FtyObNjUXtmZzT4CNocfFkwNy8nc98nfrSVqII9J1GKrNKfY65MtCklVlA2gTQ-r9dirUIAI2iEYg2vLyqzEJiDmVQB7Sa3qZlwz-V8JXQ4TNBAtcikGD3A"
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Travel
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">Airbnb</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    Creating a world where anyone can belong anywhere through
                    unique stays and experiences.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      12 Open Roles
                    </span>
                    <button className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
                {/* Notion Card */}
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt="Notion"
                        className="w-full h-full object-contain"
                        data-alt="Notion company N logo minimalist black and white on white card"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnGPaeP65s7g4-BkWIikANLpePqHouFQllj6HuItaK3Zjt7X1UbhhEYbhO_iRgmrMVuyiDTXGvMinYf-hsduWvvksTqDcsiS06WTLnRISPzrp1dQNvOPI7OjZ7W9SyGwvT3umadVeLnt0FLF6jpL3Bb9AkebnRJfxh-c3_E72PtOyOUJxLzWHEat0n1ZkzK95Tya8QuUlDoqn_0tFs70tVKhZiMHJYhdGLTJkwNjwj2GZewvvK-rAygrAHCIX6UjNiTkNQqfU0lC4"
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Productivity
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">Notion</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    The all-in-one workspace for your notes, tasks, wikis, and
                    databases.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      31 Open Roles
                    </span>
                    <button className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
                {/* Datadog Card */}
                <div className="bg-white p-6 rounded-xl company-card-shadow border border-slate-100 flex flex-col hover:border-secondary transition-colors group">
                  <div className="flex items-start justify-between mb-sm">
                    <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                      <img
                        alt="Datadog"
                        className="w-full h-full object-contain"
                        data-alt="Datadog company logo monitoring software brand on white background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL390zibYEkWI8pxEAothFzXnw5j3K3Fk5cWx3SbrgropIOQvNTYExflecWanehNc7Fh6TvwgIPZ5H9EGJAG7v1DjkoAciIfCo1HSgG1RQUTLvWhg6nzP9XyCBtVm8SldLpKUwbXCm5G07NN2WlTIww_eZj-rRUDFrViDeYBg_6RdcVpwmWI2CHrZdyUYYiVUWUVcSR35OZ9c8wvL--CuoGqXJv7mh4pXRHfh2mi9ztdd56aNuyjKCbGyEmwOeairX-yNws8rKNCQ"
                      />
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
                      Cloud
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3 text-primary mb-xs">
                    Datadog
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                    Monitoring and security platform for cloud applications,
                    combining traces, metrics and logs.
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-slate-50">
                    <span className="font-label-strong text-label-strong text-secondary">
                      54 Open Roles
                    </span>
                    <button className="text-primary font-label-strong text-label-strong border border-outline px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
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
