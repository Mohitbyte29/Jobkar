
const Privacy = () => {
  return (
    <div>
      <main className="max-w-max_width mx-auto px-margin py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl">
  {/* Sidebar Navigation (Table of Contents) */}
  <aside className="hidden lg:block lg:col-span-3">
    <div className="sticky top-28 space-y-sm">
      <p className="font-label-caps text-outline uppercase mb-md">Contents</p>
      <nav className="flex flex-col border-l-2 border-outline-variant">
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md active"
          href="#intro"
        >
          Introduction
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#collect"
        >
          Information We Collect
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#use"
        >
          How We Use Information
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#sharing"
        >
          Data Sharing
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#cookies"
        >
          Cookies &amp; Tracking
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#rights"
        >
          Your Privacy Rights
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#security"
        >
          Security Measures
        </a>
        <a
          className="toc-link pl-md py-xs border-l-2 border-transparent -ml-[2px] transition-all hover:text-secondary font-body-md"
          href="#contact"
        >
          Contact Us
        </a>
      </nav>
    </div>
  </aside>
  {/* Privacy Content Area */}
  <div className="lg:col-span-9 max-w-3xl">
    <div className="mb-xl">
      <span className="text-secondary font-label-caps uppercase tracking-widest">
        Legal Document
      </span>
      <h1 className="font-h1 text-display mt-xs mb-sm">Privacy Policy</h1>
      <p className="text-on-surface-variant font-body-lg">
        Last Updated: October 24, 2024. Your privacy is fundamental to our
        mission at JobKar. This policy details our commitment to protecting your
        data while providing a high-caliber job-seeking experience.
      </p>
    </div>
    {/* Intro Section */}
    <section className="policy-section mb-lg" id="intro">
      <h2 className="font-h2 text-h2 mb-sm">Introduction</h2>
      <div className="font-body-md text-on-surface-variant space-y-md">
        <p>
          Welcome to JobKar. We respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>
        <p>
          By using the JobKar platform, you consent to the data practices
          described in this policy. If you do not agree with any part of this
          Privacy Policy, you must stop using our services immediately.
        </p>
      </div>
    </section>
    {/* Information We Collect */}
    <section
      className="policy-section mb-lg p-lg bg-surface-container-low rounded-xl border border-outline-variant"
      id="collect"
    >
      <h2 className="font-h2 text-h2 mb-sm flex items-center gap-xs">
        <span className="material-symbols-outlined text-secondary">
          database
        </span>
        Information We Collect
      </h2>
      <div className="space-y-md">
        <div className="bg-surface-container-lowest p-md rounded-lg shadow-sm">
          <h3 className="font-h3 text-h3 mb-xs">Personal Data</h3>
          <p className="font-body-md text-on-surface-variant">
            We collect identity data including your name, username, title, and
            date of birth. Contact data includes email address, telephone
            numbers, and physical address. Profile data includes your resume,
            skills, and employment history.
          </p>
        </div>
        <div className="bg-surface-container-lowest p-md rounded-lg shadow-sm">
          <h3 className="font-h3 text-h3 mb-xs">Usage &amp; Technical Data</h3>
          <p className="font-body-md text-on-surface-variant">
            We collect information about how you use our website, products, and
            services. This includes IP address, login data, browser type and
            version, time zone setting, browser plug-in types, operating system,
            and platform.
          </p>
        </div>
      </div>
    </section>
    {/* How We Use Information */}
    <section className="policy-section mb-lg" id="use">
      <h2 className="font-h2 text-h2 mb-sm">How We Use Your Information</h2>
      <p className="font-body-md text-on-surface-variant mb-md">
        We use your information for the following purposes based on our
        legitimate business interests:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <li className="flex items-start gap-xs p-md border border-outline-variant rounded-lg">
          <span className="material-symbols-outlined text-secondary">
            check_circle
          </span>
          <span className="font-body-md">
            Matching your profile with relevant job listings and career
            opportunities.
          </span>
        </li>
        <li className="flex items-start gap-xs p-md border border-outline-variant rounded-lg">
          <span className="material-symbols-outlined text-secondary">
            check_circle
          </span>
          <span className="font-body-md">
            Improving our website functionality and user experience through
            analytics.
          </span>
        </li>
        <li className="flex items-start gap-xs p-md border border-outline-variant rounded-lg">
          <span className="material-symbols-outlined text-secondary">
            check_circle
          </span>
          <span className="font-body-md">
            Communicating with you about your account and job applications.
          </span>
        </li>
        <li className="flex items-start gap-xs p-md border border-outline-variant rounded-lg">
          <span className="material-symbols-outlined text-secondary">
            check_circle
          </span>
          <span className="font-body-md">
            Preventing fraud and maintaining the security of our corporate
            infrastructure.
          </span>
        </li>
      </ul>
    </section>
    {/* Data Sharing */}
    <section className="policy-section mb-lg" id="sharing">
      <h2 className="font-h2 text-h2 mb-sm">Data Sharing &amp; Disclosure</h2>
      <div className="font-body-md text-on-surface-variant space-y-md">
        <p>
          We do not sell your personal data. We may share your information with:
        </p>
        <ul className="list-disc pl-md space-y-xs">
          <li>
            <strong>Employers &amp; Recruiters:</strong> When you apply for a
            job or make your profile searchable.
          </li>
          <li>
            <strong>Service Providers:</strong> IT and administration services
            who act as processors.
          </li>
          <li>
            <strong>Professional Advisers:</strong> Lawyers, bankers, auditors,
            and insurers.
          </li>
          <li>
            <strong>Legal Requirements:</strong> Regulatory authorities or law
            enforcement where required by law.
          </li>
        </ul>
      </div>
    </section>
    {/* Cookies */}
    <section
      className="policy-section mb-lg p-lg bg-primary-container text-on-primary-fixed rounded-xl overflow-hidden relative"
      id="cookies"
    >
      <div className="relative z-10">
        <h2 className="font-h2 text-h2 mb-sm flex items-center gap-xs">
          <span className="material-symbols-outlined">cookie</span>
          Cookies &amp; Tracking Technologies
        </h2>
        <p className="font-body-md opacity-90 mb-md">
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information. Cookies are files with
          small amount of data which may include an anonymous unique identifier.
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent.
        </p>
        <button className="bg-secondary text-on-secondary px-md py-xs rounded-lg font-label-strong hover:opacity-90 transition-all">
          Manage Cookie Preferences
        </button>
      </div>
      {/* Abstract Pattern Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl -mr-32 -mt-32" />
    </section>
    {/* Rights */}
    <section className="policy-section mb-lg" id="rights">
      <h2 className="font-h2 text-h2 mb-sm">Your Privacy Rights</h2>
      <div className="grid grid-cols-1 gap-sm">
        <div className="flex gap-md p-md bg-surface border-b border-outline-variant">
          <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">
              visibility
            </span>
          </div>
          <div>
            <h4 className="font-label-strong">The Right to Access</h4>
            <p className="font-body-sm text-on-surface-variant">
              You have the right to request copies of your personal data from
              JobKar.
            </p>
          </div>
        </div>
        <div className="flex gap-md p-md bg-surface border-b border-outline-variant">
          <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">
              edit
            </span>
          </div>
          <div>
            <h4 className="font-label-strong">The Right to Rectification</h4>
            <p className="font-body-sm text-on-surface-variant">
              You have the right to request that we correct any information you
              believe is inaccurate.
            </p>
          </div>
        </div>
        <div className="flex gap-md p-md bg-surface">
          <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">
              delete
            </span>
          </div>
          <div>
            <h4 className="font-label-strong">The Right to Erasure</h4>
            <p className="font-body-sm text-on-surface-variant">
              You have the right to request that we erase your personal data,
              under certain conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Security */}
    <section className="policy-section mb-lg" id="security">
      <h2 className="font-h2 text-h2 mb-sm">Security Measures</h2>
      <p className="font-body-md text-on-surface-variant mb-md">
        We have put in place appropriate security measures to prevent your
        personal data from being accidentally lost, used, or accessed in an
        unauthorized way, altered, or disclosed. These include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
        <div className="p-md bg-surface-container rounded-lg text-center">
          <span className="material-symbols-outlined text-secondary mb-xs">
            encrypted
          </span>
          <p className="font-label-strong text-xs uppercase">SSL Encryption</p>
        </div>
        <div className="p-md bg-surface-container rounded-lg text-center">
          <span className="material-symbols-outlined text-secondary mb-xs">
            admin_panel_settings
          </span>
          <p className="font-label-strong text-xs uppercase">
            Restricted Access
          </p>
        </div>
        <div className="p-md bg-surface-container rounded-lg text-center">
          <span className="material-symbols-outlined text-secondary mb-xs">
            verified_user
          </span>
          <p className="font-label-strong text-xs uppercase">Regular Audits</p>
        </div>
      </div>
    </section>
    {/* Contact Section */}
    <section
      className="policy-section mb-xl p-lg bg-surface border-2 border-primary rounded-xl"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-lg items-center">
        <div className="flex-1">
          <h2 className="font-h2 text-h2 mb-sm">Privacy Inquiries</h2>
          <p className="font-body-md text-on-surface-variant mb-md">
            If you have any questions about this Privacy Policy or our data
            practices, please contact our Data Protection Officer.
          </p>
          <div className="space-y-xs">
            <div className="flex items-center gap-xs font-label-strong">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              privacy@jobkar.com
            </div>
            <div className="flex items-center gap-xs font-label-strong">
              <span className="material-symbols-outlined text-secondary">
                location_on
              </span>
              123 Career Blvd, Tech District, SF 94105
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 bg-surface-container-high p-md rounded-lg">
          <p className="font-label-caps text-xs text-outline mb-xs">
            Average Response Time
          </p>
          <p className="font-h3 text-h3 text-secondary">2 Business Days</p>
        </div>
      </div>
    </section>
  </div>
</main>

    </div>
  )
}

export default Privacy
