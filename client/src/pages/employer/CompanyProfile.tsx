import EmployerNav from '@/components/EmployerNav'
import React from 'react'

const CompanyProfile = () => {
  return (
    <div>
      <>
  <div className="flex min-h-screen">
    {/* SideNavBar */}
    <EmployerNav/>
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* TopAppBar */}
      <header className="w-full border-b border-slate-200 sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 w-full h-16 font-['Manrope'] text-sm">
          <div className="relative w-96">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-secondary/20 transition-all text-body-sm"
              placeholder="Search talent or posts..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-slate-200 pr-6">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 ease-in-out relative">
                <span
                  className="material-symbols-outlined text-slate-600"
                  data-icon="notifications"
                >
                  notifications
                </span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 ease-in-out">
                <span
                  className="material-symbols-outlined text-slate-600"
                  data-icon="settings"
                >
                  settings
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-label-strong text-slate-900">Alex Rivers</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Talent Lead
                </p>
              </div>
              <img
                alt="Recruiter Profile"
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
                data-alt="A professional headshot of a recruitment manager in a bright, modern office setting. The person is smiling warmly, dressed in business casual attire. The background is a soft-focus corporate environment with clean lines and natural lighting, consistent with a high-end SaaS platform aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhvBqFr3sRjV8kGG3OWoeQQcJzv2dt5NBgDIS1CwsJNSDkn6z9sKCjodaiGx3MTWzd0Ad2LvpA6w2K3jkNmxMx5thStoV1veT-w-usyKLi8V5CnxbkhEI-TZU4Vh7yEoabjrgyVLsbEeHmjfO8rv37oDu1ypl5SNNfXI3DSCeU0eDPJob6uFB8-mmpiEx9yuQiYLavZ8r2RzaiP2DVqTE-ARvrVKQ5DdnB3jMWjyVYv5BU4XUTsdOa9xFvVW3c_Y60ux8BxJH3low"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-[1280px] mx-auto">
          {/* Page Header */}
          <div className="mb-lg flex justify-between items-end">
            <div>
              <h2 className="font-h1 text-h1 text-primary mb-2">
                Company Profile
              </h2>
              <p className="font-body-md text-slate-500">
                Manage how your brand appears to potential candidates across the
                JobKar network.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 font-label-strong border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all active:scale-95">
                Discard Changes
              </button>
              <button className="px-6 py-2.5 font-label-strong bg-primary text-white rounded-xl hover:shadow-lg transition-all active:scale-95">
                Save Changes
              </button>
            </div>
          </div>
          {/* Layout: Bento Grid Style */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left Column: Branding */}
            <div className="col-span-12 lg:col-span-8 space-y-gutter">
              {/* General Info Card */}
              <section className="bg-white rounded-xl custom-shadow p-8 border border-slate-100">
                <h3 className="font-h3 text-h3 text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined" data-icon="info">
                    info
                  </span>
                  General Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2 flex items-center gap-8 mb-4">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer group-hover:border-secondary transition-colors overflow-hidden">
                        <img
                          alt="Company Logo"
                          className="absolute inset-0 w-full h-full object-contain p-2"
                          data-alt="A clean, minimalist company logo featuring geometric shapes in shades of deep blue and teal. The logo is centered on a white background, suggesting a modern, tech-forward corporate identity. The visual style is crisp and professional, fitting for a premium business console."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV4a2iXHA4y5FRortJER44cnxkPVJU0VjGxG7xIVs2t0A5FzENNOBVLdKPG_G11bC2WO9EBBZcZjQUkc4mM20e_jO-PEw_BfgihI4JloovTN8mXdVtt4qwI8zy5kZtMiZRudgNIGwxl8rjrk3KrHRyoOj_G2OpRRWT0WE5DF93dXNmlDzG8nLFgTaAIUgL7a8_7yY-bdoqI0WuX68LWduGLqo-RMQorTPhbRMaPzTWj5BVzr8HCHrobFDlEKL8yruTBGHC1Deqad4"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span
                            className="material-symbols-outlined text-white"
                            data-icon="upload"
                          >
                            upload
                          </span>
                        </div>
                      </div>
                      <p className="text-center mt-2 text-label-caps text-slate-400">
                        LOGO
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-label-strong text-slate-900 mb-1">
                        Company Logo
                      </p>
                      <p className="text-body-sm text-slate-500 mb-3">
                        Upload a high-resolution logo (min 400x400px). Supported
                        formats: PNG, SVG, or JPG.
                      </p>
                      <div className="flex gap-2">
                        <button className="text-label-strong text-secondary hover:underline">
                          Upload New
                        </button>
                        <span className="text-slate-300">•</span>
                        <button className="text-label-strong text-error hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-strong text-slate-700">
                      Company Name
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                      type="text"
                      defaultValue="Innovatech Solutions"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-strong text-slate-700">
                      Industry
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none appearance-none">
                      <option>Information Technology</option>
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>E-commerce</option>
                    </select>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="font-label-strong text-slate-700">
                      Website URL
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        https://
                      </span>
                      <input
                        className="w-full pl-20 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                        type="text"
                        defaultValue="innovatech.io"
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* About Us Card */}
              <section className="bg-white rounded-xl custom-shadow p-8 border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-h3 text-h3 text-primary flex items-center gap-2">
                    <span
                      className="material-symbols-outlined"
                      data-icon="description"
                    >
                      description
                    </span>
                    About Us
                  </h3>
                  <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg">
                    <button className="p-1.5 hover:bg-white rounded transition-all">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_bold"
                      >
                        format_bold
                      </span>
                    </button>
                    <button className="p-1.5 hover:bg-white rounded transition-all">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_italic"
                      >
                        format_italic
                      </span>
                    </button>
                    <button className="p-1.5 hover:bg-white rounded transition-all">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="format_list_bulleted"
                      >
                        format_list_bulleted
                      </span>
                    </button>
                    <button className="p-1.5 hover:bg-white rounded transition-all">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="link"
                      >
                        link
                      </span>
                    </button>
                  </div>
                </div>
                <textarea
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none resize-none"
                  placeholder="Write a compelling description of your company culture and mission..."
                  rows={8}
                  defaultValue={
                    "Innovatech Solutions is a global leader in cloud-native transformation. We help Fortune 500 companies modernize their infrastructure using cutting-edge AI and distributed systems. Our culture is built on transparency, rapid iteration, and technical excellence.\n\nJoin us as we build the next generation of digital infrastructure. We're looking for passionate engineers, visionary designers, and strategic thinkers who want to make a global impact."
                  }
                />
                <p className="text-right text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">
                  345 / 2000 Characters
                </p>
              </section>
            </div>
            {/* Right Column: Team & Stats */}
            <div className="col-span-12 lg:col-span-4 space-y-gutter">
              {/* Team Management Card */}
              <section className="bg-white rounded-xl custom-shadow p-8 border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-h3 text-h3 text-primary flex items-center gap-2">
                    <span
                      className="material-symbols-outlined"
                      data-icon="groups"
                    >
                      groups
                    </span>
                    Team
                  </h3>
                  <button className="p-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-all">
                    <span
                      className="material-symbols-outlined"
                      data-icon="person_add"
                    >
                      person_add
                    </span>
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Team Member */}
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <img
                      alt="Sarah Chen"
                      className="w-10 h-10 rounded-full object-cover"
                      data-alt="A portrait of a young professional woman with a friendly expression. She is wearing modern eyewear and a dark blazer. The lighting is soft and even, suggesting a bright office environment. The image is crisp with a clean, high-end feel suitable for a corporate dashboard."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbX89WthTKdZR0uWrM23U3TzXw_c7NVR0DLSD60qiGV5dOLh2nLfwHs81ikeMYUiK-UhA4Y6hiOdSV59fHi_6DGGfPDnTX2PRzvqJL84OCpur-Jg-GTJPAzL3pCf8ce0_iQInys29tohdvHMxDt2DzpqOO72t2z4g73Hvl0Kvt_bZlorIOCDenpMV1AMLmWiRxflhYyf8axQdUIEKyVo9r7QaGR7fOYKTC3vtXurEeZ54Cwxp2Dd_0wRHVF_ds4WXhuwrcDvo4WYU"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-label-strong text-slate-900 truncate">
                        Sarah Chen
                      </p>
                      <p className="text-xs text-slate-500">Admin</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:text-error transition-all">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="more_vert"
                      >
                        more_vert
                      </span>
                    </button>
                  </div>
                  {/* Team Member */}
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <img
                      alt="Marcus Wright"
                      className="w-10 h-10 rounded-full object-cover"
                      data-alt="A professional headshot of a man in his late 30s with a confident smile. He has short hair and is wearing a light gray sweater. The background is a blurred office interior with neutral tones and soft natural light. The aesthetic is modern and trustworthy."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYFL0PkhBQU7nQ8BJHRdFHguSb8R7wavud4vGdqQ-IE0Q-GZz_6qjkTJaLIFnrJ_hCYyIY1hlgHOeNdBosn2pEyIs5UNv_0k0JFp4UVlu6yErvjhoGTtKEpm3i_g-zbvSx461Jwj-t78er6qvZuX-DZLVNVeQBW97psbdoxfXY9wvV8FvUgK_NFjgi9hONCsm-jzPdBOibzXfQB-WbWzRQ3MzXyHJtQXOO3PDIjqs5A9bkH_Obv30BBnvoY5NbrOeKNrpiwBXpJgU"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-label-strong text-slate-900 truncate">
                        Marcus Wright
                      </p>
                      <p className="text-xs text-slate-500">Recruiter</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:text-error transition-all">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="more_vert"
                      >
                        more_vert
                      </span>
                    </button>
                  </div>
                  {/* Team Member */}
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group border border-dashed border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <span
                        className="material-symbols-outlined"
                        data-icon="pending"
                      >
                        pending
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-label-strong text-slate-400 truncate italic">
                        Invite Pending...
                      </p>
                      <p className="text-xs text-slate-400">
                        jane@innovatech.io
                      </p>
                    </div>
                    <button className="p-1 text-slate-400 hover:text-error">
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="close"
                      >
                        close
                      </span>
                    </button>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-slate-200 text-slate-600 font-label-strong rounded-xl hover:bg-slate-50 transition-all text-sm">
                  View All Team Members
                </button>
              </section>
              {/* Profile Strength Card */}
              <section className="bg-primary-container text-white rounded-xl p-8 border border-slate-800">
                <h3 className="font-label-caps text-on-primary-container mb-4 uppercase tracking-widest">
                  Profile Strength
                </h3>
                <div className="flex items-end justify-between mb-4">
                  <span className="text-4xl font-extrabold">85%</span>
                  <span className="text-secondary-fixed text-sm font-label-strong">
                    Almost there!
                  </span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full mb-6">
                  <div className="bg-secondary h-full rounded-full w-[85%]" />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-on-primary-container">
                    <span
                      className="material-symbols-outlined text-secondary text-sm"
                      data-icon="check_circle"
                      data-weight="fill"
                    >
                      check_circle
                    </span>
                    Company Logo uploaded
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-primary-container">
                    <span
                      className="material-symbols-outlined text-secondary text-sm"
                      data-icon="check_circle"
                      data-weight="fill"
                    >
                      check_circle
                    </span>
                    About Us description added
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="circle"
                    >
                      circle
                    </span>
                    Add 3 Company Benefits
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  {/* Contextual FAB (Hidden as per rule for Settings pages) */}
</>

    </div>
  )
}

export default CompanyProfile
