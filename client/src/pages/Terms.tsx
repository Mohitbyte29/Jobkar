import React from 'react'

const Terms = () => {
  return (
    <div>
      <main className="max-w-max_width mx-auto px-margin py-xl">
  {/* Hero Header */}
  <div className="mb-xl text-center md:text-left">
    <h1 className="font-h1 text-h1 text-on-surface mb-xs">Terms of Service</h1>
    <p className="font-body-md text-on-surface-variant">
      Last Updated: October 24, 2023
    </p>
  </div>
  <div className="flex flex-col lg:flex-row gap-lg">
    {/* Sidebar Table of Contents */}
    <aside className="lg:w-1/4">
      <div className="sticky-toc p-md bg-surface-container-low rounded-xl border border-outline-variant">
        <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-md uppercase tracking-wider">
          On this page
        </h4>
        <ul className="space-y-sm">
          <li>
            <a
              className="font-label-strong text-primary hover:text-secondary transition-colors flex items-center gap-xs"
              href="#acceptance"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_right_alt
              </span>{" "}
              Acceptance of Terms
            </a>
          </li>
          <li>
            <a
              className="font-label-strong text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-xs"
              href="#responsibilities"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_right_alt
              </span>{" "}
              User Responsibilities
            </a>
          </li>
          <li>
            <a
              className="font-label-strong text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-xs"
              href="#intellectual"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_right_alt
              </span>{" "}
              Intellectual Property
            </a>
          </li>
          <li>
            <a
              className="font-label-strong text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-xs"
              href="#liability"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_right_alt
              </span>{" "}
              Limitation of Liability
            </a>
          </li>
          <li>
            <a
              className="font-label-strong text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-xs"
              href="#termination"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_right_alt
              </span>{" "}
              Termination
            </a>
          </li>
        </ul>
      </div>
    </aside>
    {/* Main Document Content */}
    <article className="lg:w-3/4 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
      <div className="content-canvas space-y-lg">
        <section className="prose-section" id="introduction">
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            Welcome to JobKar. These Terms of Service ("Terms") govern your
            access to and use of our website, services, and applications. Please
            read these Terms carefully before using our platform.
          </p>
        </section>
        <hr className="border-outline-variant" />
        <section className="prose-section" id="acceptance">
          <div className="flex items-center gap-sm mb-sm">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              verified_user
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">
              1. Acceptance of Terms
            </h2>
          </div>
          <div className="font-body-md text-on-surface-variant space-y-md">
            <p>
              By accessing or using the JobKar platform, you agree to be bound
              by these Terms and our Privacy Policy. If you do not agree to
              these Terms, you may not access or use our services.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on this page
              and updating the "Last Updated" date. Your continued use of the
              platform after such changes constitutes your acceptance of the new
              Terms.
            </p>
          </div>
        </section>
        <section className="prose-section" id="responsibilities">
          <div className="flex items-center gap-sm mb-sm">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              person_pin
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">
              2. User Responsibilities
            </h2>
          </div>
          <div className="font-body-md text-on-surface-variant space-y-md">
            <p>As a user of JobKar, you agree to:</p>
            <ul className="list-disc pl-md space-y-xs">
              <li>
                Provide accurate and complete information when creating an
                account.
              </li>
              <li>
                Maintain the security of your password and accept all risks of
                unauthorized access to your account.
              </li>
              <li>
                Use the platform only for lawful purposes and in accordance with
                these Terms.
              </li>
              <li>
                Not post false, misleading, or fraudulent job listings or
                candidate profiles.
              </li>
              <li>
                Respect the privacy and intellectual property rights of other
                users.
              </li>
            </ul>
            <div className="bg-surface-container p-md rounded-lg border-l-4 border-secondary mt-md">
              <p className="font-label-strong text-on-surface mb-xs">
                Prohibited Activities
              </p>
              <p className="text-body-sm">
                You may not use any automated system, including "robots,"
                "spiders," or "offline readers," to access the platform in a
                manner that sends more request messages to our servers than a
                human can reasonably produce.
              </p>
            </div>
          </div>
        </section>
        <section className="prose-section" id="intellectual">
          <div className="flex items-center gap-sm mb-sm">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              copyright
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">
              3. Intellectual Property
            </h2>
          </div>
          <div className="font-body-md text-on-surface-variant space-y-md">
            <p>
              The platform and its original content, features, and functionality
              are and will remain the exclusive property of JobKar and its
              licensors. Our trademarks and trade dress may not be used in
              connection with any product or service without the prior written
              consent of JobKar.
            </p>
            <p>
              By posting content on JobKar, you grant us a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and display
              that content in connection with providing our services.
            </p>
          </div>
        </section>
        <section className="prose-section" id="liability">
          <div className="flex items-center gap-sm mb-sm">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              gavel
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">
              4. Limitation of Liability
            </h2>
          </div>
          <div className="font-body-md text-on-surface-variant space-y-md">
            <p>
              In no event shall JobKar, its directors, employees, or partners be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-md space-y-xs">
              <li>
                Your access to or use of or inability to access or use the
                platform.
              </li>
              <li>
                Any conduct or content of any third party on the platform.
              </li>
              <li>Any content obtained from the platform.</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content.
              </li>
            </ul>
          </div>
        </section>
        <section className="prose-section" id="termination">
          <div className="flex items-center gap-sm mb-sm">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              cancel
            </span>
            <h2 className="font-h2 text-h2 text-on-surface">5. Termination</h2>
          </div>
          <div className="font-body-md text-on-surface-variant space-y-md">
            <p>
              We may terminate or suspend your account and bar access to the
              platform immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
            <p>
              Upon termination, your right to use the platform will immediately
              cease. All provisions of the Terms which by their nature should
              survive termination shall survive termination, including ownership
              provisions, warranty disclaimers, and limitations of liability.
            </p>
          </div>
        </section>
        <div className="pt-lg border-t border-outline-variant text-center">
          <p className="font-body-md text-on-surface-variant mb-md">
            Have questions about our terms?
          </p>
          <a
            className="inline-flex items-center gap-xs px-md py-sm bg-secondary text-on-secondary rounded-lg font-label-strong hover:opacity-90 transition-opacity"
            href="mailto:legal@jobkar.com"
          >
            <span className="material-symbols-outlined">mail</span>
            Contact Legal Team
          </a>
        </div>
      </div>
    </article>
  </div>
</main>

    </div>
  )
}

export default Terms
