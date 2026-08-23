import { Link } from "react-router";

  export default function Footer() {
  return (
  <footer className="bg-[#0d1c2d] border-t border-[#20352B] dark:border-slate-800">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6 max-w-7xl mx-auto">
      <div className="col-span-1 md:col-span-1">
        <span className="text-lg font-bold text-gray-200 dark:text-white block mb-4">
          JobKar
        </span>
        <p className="font-['Manrope'] text-sm text-slate-500 dark:text-[#9AAEA3] leading-relaxed mb-6">
          Elevating the standard of hiring since 2026. Your gateway to elite
          professional opportunities.
        </p>
        <div className="flex gap-4">
          <span
            className="material-symbols-outlined text-[#9AAEA3] hover:text-teal-600 cursor-pointer"
            data-icon="language"
          >
            language
          </span>
          <span
            className="material-symbols-outlined text-[#9AAEA3] hover:text-teal-600 cursor-pointer"
            data-icon="share"
          >
            share
          </span>
        </div>
      </div>
      <div>
        <h4 className="font-label-strong mb-4 text-[#F1F5F2] dark:text-white">
          Candidates
        </h4>
        <ul className="space-y-3 font-['Manrope'] text-sm text-slate-500 dark:text-[#9AAEA3]">
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            <Link to="/jobs">Browse Jobs</Link>
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Career Advice
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Job Alerts
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Help Center
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-label-strong mb-4 text-[#F1F5F2] dark:text-white">
          Employers
        </h4>
        <ul className="space-y-3 font-['Manrope'] text-sm text-slate-500 dark:text-[#9AAEA3]">
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Post a Job
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Talent Solutions
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Resources
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-label-strong mb-4 text-[#F1F5F2] dark:text-white">
          Legal
        </h4>
        <ul className="space-y-3 font-['Manrope'] text-sm text-slate-500 dark:text-[#9AAEA3]">
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Terms of Service
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Cookie Policy
          </li>
          <li className="hover:text-[#F1F5F2] dark:hover:text-white transition-colors cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-[#20352B] dark:border-slate-800 py-6 text-center">
      <p className="font-['Manrope'] text-sm text-slate-500 dark:text-[#9AAEA3]">
        © 2026 JobKar Inc. All rights reserved.
      </p>
    </div>
  </footer>
  );
}
