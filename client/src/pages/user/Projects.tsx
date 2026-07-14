
const Projects = () => {
  return (
    <main className="grow w-full max-w-max_width mx-auto px-gutter py-xl">
  {/* Page Header Section */}
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md">
    <div>
      <h1 className="font-h1 text-h1 text-primary">My Projects</h1>
      <p className="text-on-surface-variant font-body-lg text-body-lg mt-base">
        Manage your professional portfolio and showcase your technical expertise
        to potential employers.
      </p>
    </div>
    <button className="inline-flex items-center gap-xs bg-secondary text-on-secondary px-md py-sm font-label-strong text-label-strong rounded-xl hover:opacity-90 transition-all shadow-sm">
      <span className="material-symbols-outlined">add</span>
      Add Project
    </button>
  </div>
  {/* Dashboard Stats or Overview (Optional but adds high-fidelity feel) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
    <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant flex items-center gap-md">
      <div className="bg-secondary-container p-sm rounded-lg">
        <span className="material-symbols-outlined text-on-secondary-container">
          folder_shared
        </span>
      </div>
      <div>
        <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
          Total Projects
        </span>
        <span className="font-h2 text-h2 text-primary">12</span>
      </div>
    </div>
    <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant flex items-center gap-md">
      <div className="bg-tertiary-fixed p-sm rounded-lg">
        <span className="material-symbols-outlined text-on-tertiary-fixed-variant">
          visibility
        </span>
      </div>
      <div>
        <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
          Profile Views
        </span>
        <span className="font-h2 text-h2 text-primary">842</span>
      </div>
    </div>
    <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant flex items-center gap-md">
      <div className="bg-primary-fixed p-sm rounded-lg">
        <span className="material-symbols-outlined text-on-primary-fixed-variant">
          trending_up
        </span>
      </div>
      <div>
        <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
          Engagement
        </span>
        <span className="font-h2 text-h2 text-primary">+14%</span>
      </div>
    </div>
  </div>
  {/* Projects Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
    {/* Project Card 1 */}
    <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant project-card-shadow flex flex-col gap-md transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              data-alt="A clean minimalist application icon for a financial technology project, featuring a geometric logo design with professional deep blue and teal accents on a crisp white background. The aesthetic is modern, corporate, and highly digital, conveying trust and efficiency."
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            />
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-primary">
              NexGen FinTrack Dashboard
            </h3>
            <div className="flex flex-wrap gap-base mt-xs">
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                React
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                TypeScript
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                Chart.js
              </span>
            </div>
          </div>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <p className="text-on-surface-variant font-body-md text-body-md">
        A comprehensive financial monitoring tool designed for modern SaaS
        businesses. Features real-time data visualization, multi-currency
        support, and automated reporting modules using high-performance state
        management.
      </p>
      <div className="flex items-center gap-md mt-auto pt-md border-t border-outline-variant">
        <a
          className="flex items-center gap-xs text-primary font-label-strong text-label-strong hover:text-secondary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-xs text-secondary font-label-strong text-label-strong hover:opacity-80 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">
            open_in_new
          </span>
          Live Preview
        </a>
      </div>
    </div>
    {/* Project Card 2 */}
    <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant project-card-shadow flex flex-col gap-md transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              data-alt="A high-end architectural visualization of a smart home mobile interface icon, emphasizing clean lines and a deep indigo color palette. The image feels technologically sophisticated and professional, with a soft ambient glow that highlights the user interface elements."
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            />
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-primary">
              SmartHome IoT Central
            </h3>
            <div className="flex flex-wrap gap-base mt-xs">
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                Node.js
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                MQTT
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                GraphQL
              </span>
            </div>
          </div>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <p className="text-on-surface-variant font-body-md text-body-md">
        An enterprise-grade IoT gateway facilitating seamless communication
        between residential smart devices. Focused on security and low-latency
        data transmission with a robust backend architecture.
      </p>
      <div className="flex items-center gap-md mt-auto pt-md border-t border-outline-variant">
        <a
          className="flex items-center gap-xs text-primary font-label-strong text-label-strong hover:text-secondary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-xs text-secondary font-label-strong text-label-strong hover:opacity-80 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">
            open_in_new
          </span>
          Live Preview
        </a>
      </div>
    </div>
    {/* Project Card 3 */}
    <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant project-card-shadow flex flex-col gap-md transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              data-alt="A professional branding icon for an AI-powered logistics platform, featuring abstract connected nodes that suggest a neural network. The visual style uses a balanced palette of slate gray and vibrant teal, set against a sterile, high-end gallery-white background to evoke a sense of corporate stability and innovation."
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            />
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-primary">
              LogiChain AI Optimizer
            </h3>
            <div className="flex flex-wrap gap-base mt-xs">
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                Python
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                TensorFlow
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                Docker
              </span>
            </div>
          </div>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <p className="text-on-surface-variant font-body-md text-body-md">
        Machine learning model for optimizing international shipping routes.
        Reduced fuel consumption by 18% in pilot tests by analyzing weather
        patterns and port congestion in real-time.
      </p>
      <div className="flex items-center gap-md mt-auto pt-md border-t border-outline-variant">
        <a
          className="flex items-center gap-xs text-primary font-label-strong text-label-strong hover:text-secondary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-xs text-secondary font-label-strong text-label-strong hover:opacity-80 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">
            open_in_new
          </span>
          Live Preview
        </a>
      </div>
    </div>
    {/* Project Card 4 */}
    <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant project-card-shadow flex flex-col gap-md transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-md">
          <div className="w-16 h-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              data-alt="A minimalist UI kit icon for a healthcare management application, showcasing a clean medical cross symbol integrated into a modern digital layout. The lighting is soft and high-key, using shades of calm teal and white to represent trust, safety, and professional excellence in the medical software industry."
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            />
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-primary">
              CareSync Patient Portal
            </h3>
            <div className="flex flex-wrap gap-base mt-xs">
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                Next.js
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                PostgreSQL
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-xs py-base font-label-caps text-label-caps rounded-full">
                Prisma
              </span>
            </div>
          </div>
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <p className="text-on-surface-variant font-body-md text-body-md">
        Secure patient record management system compliant with health data
        regulations. Streamlines appointment scheduling and telemedicine
        consultations for multi-specialty clinics.
      </p>
      <div className="flex items-center gap-md mt-auto pt-md border-t border-outline-variant">
        <a
          className="flex items-center gap-xs text-primary font-label-strong text-label-strong hover:text-secondary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-xs text-secondary font-label-strong text-label-strong hover:opacity-80 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-[18px]">
            open_in_new
          </span>
          Live Preview
        </a>
      </div>
    </div>
  </div>
</main>

  )
}

export default Projects