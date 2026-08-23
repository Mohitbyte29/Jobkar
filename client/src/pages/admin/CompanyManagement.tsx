import AdminNav from '@/components/AdminNav';
import { useCompany } from '@/context/CompanyContext';
import toTitleCase from '../../../utils/titleCase';
import AdminUpperNav from './AdminUpperNav';
import { useCompanySearch } from '@/hooks/CompSearch';
import {
  Building2,
  ShieldCheck,
  Briefcase,
  Globe,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Download,
  AlertTriangle,
} from 'lucide-react';

type CompanyWithOptionalCount = {
  _count?: { jobs: number };
  jobs?: unknown;
};

const CompanyManagement = () => {
  const { companyData } = useCompany();
  const companySearch = useCompanySearch();
  const normalizedQuery = companySearch.query.trim().toLowerCase();
  const companies = normalizedQuery
    ? companySearch.results.length > 0
      ? companySearch.results
      : companyData.filter((company) =>
          company.name.toLowerCase().includes(normalizedQuery)
        )
    : companyData;

  const getJobsCount = (company: CompanyWithOptionalCount): number => {
    if (company._count?.jobs !== undefined) {
      return company._count.jobs;
    }
    if (Array.isArray(company.jobs)) {
      return company.jobs.length;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans">
      <AdminNav />
      <AdminUpperNav searchType="companies" search={companySearch} />

      <main className="ml-72 pt-20 min-h-screen p-8">
        <div className="max-w-[1440px] mx-auto w-full space-y-8 pb-16">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Company Management
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Review, verify, and monitor enterprise partnerships across the platform.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 bg-[#111F19] hover:bg-[#162820] border border-[#20352B] text-[#F1F5F2] rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer">
                <Download className="w-4 h-4 text-[#22C55E]" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Total Companies
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2] mt-0.5">
                  {companyData.length}
                </h3>
                <p className="text-xs text-[#22C55E] font-bold mt-1">
                  ↑ 12% growth this month
                </p>
              </div>
            </div>

            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Pending Verifications
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2] mt-0.5">0</h3>
                <p className="text-xs text-[#9AAEA3] mt-1">All queues cleared</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                <Briefcase className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Active Listings
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2] mt-0.5">
                  {companyData.reduce((acc, curr) => acc + getJobsCount(curr as CompanyWithOptionalCount), 0)}
                </h3>
                <p className="text-xs text-[#22C55E] font-bold mt-1">
                  Live openings
                </p>
              </div>
            </div>
          </div>

          {/* Registered Companies Table */}
          <section className="bg-[#111F19] rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#20352B] flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold text-[#F1F5F2]">
                  Registered Companies
                </h3>
                <p className="text-xs text-[#9AAEA3]">
                  Showing {companies.length} verified corporate accounts
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0D1814] border-b border-[#20352B]">
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Company Brand
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Industry Category
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Total Jobs
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#20352B]">
                  {companies.map((company) => (
                    <tr key={company.id} className="hover:bg-[#0D1814]/70 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-[#162820] border border-[#20352B] flex items-center justify-center text-[#22C55E] font-bold text-xs shrink-0">
                            {company.name ? company.name.charAt(0) : 'C'}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#F1F5F2]">{company.name}</p>
                            <p className="text-[11px] text-[#9AAEA3]">{company.website}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-xs font-medium text-[#F1F5F2]">
                        {toTitleCase(company.category || 'Technology')}
                      </td>

                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30">
                          Active
                        </span>
                      </td>

                      <td className="px-6 py-4 text-xs font-bold text-[#F1F5F2]">
                        {getJobsCount(company as CompanyWithOptionalCount)}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-[#9AAEA3] hover:text-[#22C55E] hover:bg-[#162820] rounded-lg transition-colors cursor-pointer">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {companies.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-xs text-[#9AAEA3]">
                        No registered companies found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-[#0D1814] border-t border-[#20352B] flex items-center justify-between text-xs text-[#9AAEA3]">
              <p>Showing {companies.length} of {companyData.length} records</p>
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 border border-[#20352B] rounded-lg hover:bg-[#162820] disabled:opacity-40" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-3 py-1 bg-[#22C55E] text-[#07110D] font-bold rounded-lg">
                  1
                </button>
                <button className="p-1.5 border border-[#20352B] rounded-lg hover:bg-[#162820]">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CompanyManagement;
