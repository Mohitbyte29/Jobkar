import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Resources(){
    return (
        <>
        <Navbar />
            <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 mt-20">
  <section className="mb-lg">
    <div className="relative overflow-hidden rounded-xl bg-primary-container p-12 flex flex-col md:flex-row items-center gap-md">
      <div className="z-10 flex-1">
        <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-caps mb-sm uppercase">
          Expert Career Advice
        </span>
        <h1 className="font-display text-display text-white mb-sm">
          Elevate Your Career Path
        </h1>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mb-md">
          Discover expert-led guides on everything from perfecting your resume
          to mastering the toughest interview questions.
        </p>
        <div className="flex gap-sm">
          <div className="relative flex-grow max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-secondary text-body-md"
              placeholder="Search for guides, tips..."
              type="text"
            />
          </div>
          <button className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-strong active:scale-95 transition-transform">
            Search
          </button>
        </div>
      </div>
      <div className="hidden lg:block absolute -right-20 -bottom-20 w-1/2 h-[120%] opacity-20">
        <img
          className="w-full h-full object-cover rounded-full"
          data-alt="abstract professional background with clean lines and soft lighting representing corporate success and growth"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9EQ13Gyz5HA5_D_nplf2nJsuf3CIffkT6ErhpbSe49llyRv5kH7qAIJYLTN8ntyRbEznEkQ-9VHEAGGQSEkW28z9ZT4pUtDLXtoNr4NPoyG4QZhIB-kfnMx5CcM81sJOFBYplC3bXN-M8v0zwl77sYtzAXrIjimoP_9iL12nEzi4KhQszw9v4Btnlokd3Qu51IaZ8i6yN75is3whj9lj85h6kLcpfdh2T5M4HARbDY01ND_V37Q71jwQsqeNrjEzBi7oZ49wGxQ0"
        />
      </div>
    </div>
  </section>
  {/* Category Grid / Bento Inspiration */}
  <section className="mb-lg">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Featured Category: Career Growth */}
      <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-white shadow-[0px_4px_20px_rgba(15,23,42,0.05)] p-md border border-slate-100 transition-all hover:border-secondary hover:shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-md">
            <div className="p-3 bg-tertiary-fixed rounded-xl text-on-tertiary-fixed">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                trending_up
              </span>
            </div>
            <span className="text-label-caps text-secondary font-bold">
              128 ARTICLES
            </span>
          </div>
          <h2 className="font-h2 text-h2 mb-sm">Career Growth</h2>
          <p className="text-on-surface-variant text-body-md mb-md flex-grow">
            Strategic advice on navigating promotions, switching industries, and
            building long-term career resilience.
          </p>
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface-container-low p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
              <p className="font-label-strong text-primary">
                Negotiating Salaries
              </p>
              <span className="text-body-sm text-outline">
                Learn the art of the ask
              </span>
            </div>
            <div className="bg-surface-container-low p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
              <p className="font-label-strong text-primary">
                Leadership Skills
              </p>
              <span className="text-body-sm text-outline">
                Transitioning to management
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Category: Resume Building */}
      <div className="group relative overflow-hidden rounded-xl bg-primary text-white p-md transition-all hover:shadow-xl">
        <div className="flex flex-col h-full relative z-10">
          <div className="p-3 bg-white/10 rounded-xl text-white mb-md w-fit">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              description
            </span>
          </div>
          <h2 className="font-h2 text-h2 mb-sm">Resume Building</h2>
          <p className="text-on-primary-fixed-variant text-body-md mb-md">
            Craft a resume that passes ATS and catches the recruiter's eye every
            single time.
          </p>
          <a
            className="mt-auto flex items-center text-secondary-fixed font-label-strong gap-xs"
            href="#"
          >
            Explore Templates
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
    </div>
  </section>
  {/* Main Content Feed */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
    {/* Sidebar Filters/Categories */}
    <aside className="lg:col-span-3">
      <div className="sticky top-24 space-y-md">
        <div>
          <h3 className="font-label-strong text-label-caps text-outline mb-sm uppercase tracking-widest">
            Resources by Category
          </h3>
          <div className="space-y-1">
            <button className="w-full flex justify-between items-center px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-strong">
              All Resources <span className="text-xs">42</span>
            </button>
            <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-surface-container-low text-on-surface-variant rounded-lg font-label-strong transition-colors">
              Interview Prep <span className="text-xs text-outline">12</span>
            </button>
            <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-surface-container-low text-on-surface-variant rounded-lg font-label-strong transition-colors">
              Resume Tips <span className="text-xs text-outline">15</span>
            </button>
            <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-surface-container-low text-on-surface-variant rounded-lg font-label-strong transition-colors">
              Career Advice <span className="text-xs text-outline">8</span>
            </button>
            <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-surface-container-low text-on-surface-variant rounded-lg font-label-strong transition-colors">
              Workplace Culture <span className="text-xs text-outline">7</span>
            </button>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
          <h4 className="font-h3 text-h3 mb-xs text-primary">
            Need a Resume Review?
          </h4>
          <p className="text-body-sm text-on-surface-variant mb-md">
            Our experts can provide feedback in 48 hours.
          </p>
          <button className="w-full py-3 border-2 border-secondary text-secondary rounded-lg font-label-strong hover:bg-secondary-container transition-colors">
            Get Expert Review
          </button>
        </div>
      </div>
    </aside>
    {/* Articles Grid */}
    <div className="lg:col-span-9">
      <div className="flex justify-between items-center mb-md">
        <h3 className="font-h2 text-h2 text-primary">Latest Guides</h3>
        <div className="flex items-center gap-xs">
          <span className="text-label-caps text-outline">SORT BY</span>
          <select className="bg-transparent border-none text-label-strong text-primary focus:ring-0 cursor-pointer">
            <option>Newest First</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Article Card 1 */}
        <article className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 group">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="diverse group of professionals having a meeting in a bright modern office with natural light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN-DrZD2zJRuh4qJli-OhmtcgQTjxc4sWN_Uf4YBnEoh_l6mwakz1ttDa7c8YRQ_OVKjbj6tJvtKGQUlklhs9KTvegAF978H8bjR1DNkmP5FDh76gfa5BMsDbO77EBsY8XcpraF3z4LwbEA_7l0bFIgvd6LDlxKDSjkseENfOhfwn-LgDjijrdjNy6ee-XsKBBak9_J1a3ELqdlosG81g14S7EswqvpIS053A7XcWS94sADNCvCfmTNgcaY_-NlcKqRpEvVK7FCuE"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-caps text-primary shadow-sm">
                INTERVIEW PREP
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-h3 text-h3 mb-xs group-hover:text-secondary transition-colors cursor-pointer">
              10 Behavioral Questions and How to Answer Them
            </h3>
            <p className="text-on-surface-variant text-body-md mb-md line-clamp-2">
              Master the STAR method to confidently tackle behavior-based
              interview questions and impress recruiters.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <img
                  className="w-8 h-8 rounded-full border border-slate-100"
                  data-alt="portrait of a professional woman smiling in a corporate setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbKQdkBu07LSiJLZZWExZY1whAeBdH78icD1RRDPxfg93Apf4093qKD9Xpmp35KoqVgukU5zf8lbqgHXsVzyNSWU0I-J0--lS_LkfkUf9K-wD0Sk7YNNKhEcanYnuThVODZR_VnXBk3F5WCZMC4sMFb0kulg4oDLqUZy-S0ZPw_RvaNZNqnucuexLTHsIbPta-sNAaheai71j1jUBwoOZOen3Iv0e9kbJb2j4b4Oguh08A5HHKKI1kfRpIW3yfuUm2rT7jLjTNHkk"
                />
                <span className="text-label-strong text-primary">
                  Sarah Chen
                </span>
              </div>
              <span className="text-label-caps text-outline">8 MIN READ</span>
            </div>
          </div>
        </article>
        {/* Article Card 2 */}
        <article className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 group">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="man in a business suit working on a high-end laptop in a minimalist office environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_g2cyx8kVmQ0vOIi5WWa2jfFfU6SdXmDxIrUPCMMm8vBoPuwk8ZaQ5YNo-ZIOdg8EePzcuyQZReBWuJnDhaPFDwc6u4teUG1cK435HiNHKosPT1K1CZY53deFnKqJ9aZOCTdr_60w1AOwLB2uGqtYIbX0N4GfqGGn-AvKMCc8p_kJZo7O4mGtWYOUv2LH-kzLWp_OYyllAYFzH9RvDd88s2vt-CywOhBsF6FAU_uMeCZGS_S3VqSkTHoz2yOUZQ4aNv6BFlt1jMg"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-caps text-primary shadow-sm">
                RESUME BUILDING
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-h3 text-h3 mb-xs group-hover:text-secondary transition-colors cursor-pointer">
              The Ultimate 2024 Resume Checklist
            </h3>
            <p className="text-on-surface-variant text-body-md mb-md line-clamp-2">
              Ensure your resume is updated with the latest industry standards
              and formatting requirements for 2024.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <img
                  className="w-8 h-8 rounded-full border border-slate-100"
                  data-alt="portrait of a man in professional attire with soft neutral background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92bZzNsCkxp1i3KP65TRLfvGxr29f5odNf5JOOh0V4bF9kqQXbufU_XItMKYre6pXff92WgiBYC9-1v7DilPaA3kxzkJHge99vDpq6M3IqAd7pQgBqV70VREDfCGISJ3L2kJAb_hoqKscZldoPSnCDJki9HfB0XeNdE0dgZQiz5dTHHNrxrGirz-0-Udri3xApBy-cGkjk_9uezkBESp673008hgjwURALZYhYz_nsHnsB9QLx4BmqZAXqan1IRuf2Bd1FX7fMQc"
                />
                <span className="text-label-strong text-primary">
                  James Wilson
                </span>
              </div>
              <span className="text-label-caps text-outline">5 MIN READ</span>
            </div>
          </div>
        </article>
        {/* Article Card 3 */}
        <article className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 group">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="person pointing to data charts on a laptop screen during a presentation"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWBiv50VRHMCs9RM5tUkahm91ULVQavxclZ7--rcEwI5xJ3ZOgvLzUrYSInq9XhquSGEWrdDn_073Y5RLBKu3W2FFBmXINXy-gcvziDv9IctbmnIZ2iU_detBloTYMJQTxOrdPxOChP467-dNqwwXRUdnpUTNotz0dSChuXU94gtXheb2mnzEnRdNJJxEMnTQRryh42_Bxw16t2Z3bQzj7sHvwKFVfEEGTZclXpQ1Jwg6H5xrQGzARY48eSXCIJrLJNrl7HlUCrD8"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-caps text-primary shadow-sm">
                CAREER GROWTH
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-h3 text-h3 mb-xs group-hover:text-secondary transition-colors cursor-pointer">
              How to Network Without Feeling Awkward
            </h3>
            <p className="text-on-surface-variant text-body-md mb-md line-clamp-2">
              Simple strategies to build professional connections naturally,
              even if you're an introvert.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <img
                  className="w-8 h-8 rounded-full border border-slate-100"
                  data-alt="portrait of a professional woman with a bright smile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV6MZ4HRkUoViy5qIX6BTz1d01pa2-nsM78Za0RbMZNUOwrne7SsX_VEwnKjX2d63zS8ax8piyY51s_j1eE45s2MvzFLLJJTEHZZIMn4b8N50wqMiOLOqgTeE2vnbYSmOpBBMKW0dk3NzNNUySUwtOLubSRl20ryuL2Wg5eu0e7tj9ajThGjxdFEEyLsDZqTqwH5bOCLO6sbLYANgVazvReMIS_DIwzY0VEhZxHBiy-KPD9ND64GIoM0DEiS3_MPl8ZhPSU5jU1d4"
                />
                <span className="text-label-strong text-primary">
                  Elena Rodriguez
                </span>
              </div>
              <span className="text-label-caps text-outline">12 MIN READ</span>
            </div>
          </div>
        </article>
        {/* Article Card 4 */}
        <article className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-100 group">
          <div className="aspect-video relative overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="clean desk setup with notebook, pen, and coffee representing focused career planning"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWAj7MIc0I4OqO1MDC0WpSPBSM-3fWJmUKgNyY5FFrRi0ymyFyOFXF-zdmegpuNBMAEErP6UU1D4p_hW5WVX51Kj45Vmug-gySdPjh7Gep6er3RyoOgrjXBfUD5zU8af0fT79yb3C59yZhfcUaOd7xRMdbu1VQxrWCgEcZ5cOAtgULe9Qdh5m_pSy6MCRDBpeIHyGNKxRchiHksZMTKxq6412RIqBCNm4QnAvfKhWAWsKDCTOyF5k7s61Zh-1f60-YgEOy4iwDvzA"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-label-caps text-primary shadow-sm">
                NEGOTIATION
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-h3 text-h3 mb-xs group-hover:text-secondary transition-colors cursor-pointer">
              Beyond the Paycheck: Negotiating Perks
            </h3>
            <p className="text-on-surface-variant text-body-md mb-md line-clamp-2">
              Learn how to negotiate remote work, stock options, and
              professional development budgets.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <img
                  className="w-8 h-8 rounded-full border border-slate-100"
                  data-alt="close up headshot of recruiter expert"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrBsFtBVNDCykSFAyKXxoPjxP-pjr4HRvAd9GroGWpYAl2GvblVQtFlJr14JzUL48e6Ej8aA42h-pSjp9N1XvqTMcz2apBkK8yg1XFs_I9ZSd124AYu1vlK-FYZz8zHNoGzPXzJ3T4LsjIL7bFKCgOQRhBmsjF7bBqgFycGwRFJKd9iOIkr4-3jJhQGSx5cPBCuPeJBTfWcBSZ1bxp1rJsbdqDB_ecv-kNSYOpUB-t8UjSojFZko1JtRb1q_iT7Xz9FmLF6mLlps"
                />
                <span className="text-label-strong text-primary">
                  Sarah Chen
                </span>
              </div>
              <span className="text-label-caps text-outline">6 MIN READ</span>
            </div>
          </div>
        </article>
      </div>
      {/* Pagination */}
      <div className="mt-lg flex justify-center items-center gap-sm">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-outline hover:border-secondary hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-strong">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-primary hover:border-secondary transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-primary hover:border-secondary transition-colors">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-outline hover:border-secondary hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</main>
        <Footer />
        </>
    )
}