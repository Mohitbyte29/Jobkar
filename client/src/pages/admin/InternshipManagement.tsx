import AdminNav from '@/components/AdminNav';
import AlphaCase from '../../../utils/AlphaCase';
import { IndianRupee, GraduationCap, Building2, MapPin, CheckCircle2, XCircle } from 'lucide-react';
import { useInternships } from '@/context/InternshipsContext';
import AdminUpperNav from './AdminUpperNav';
import { useInternshipsearch } from '@/hooks/InternshipSearch';
import toast, { Toaster } from 'react-hot-toast';

const InternshipManagement = () => {
  const { internshipData } = useInternships();
  const internshipSearch = useInternshipsearch();
  const normalizedQuery = internshipSearch.query.trim().toLowerCase();
  const internships = normalizedQuery
    ? internshipSearch.results.length > 0
      ? internshipSearch.results
      : internshipData.filter((internship) =>
          internship.title.toLowerCase().includes(normalizedQuery)
        )
    : internshipData;

  const handleApprove = (title: string) => {
    toast.success(`Internship "${title}" approved for publication!`);
  };

  const handleReject = (title: string) => {
    toast.error(`Internship "${title}" rejected.`);
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans">
      <Toaster position="top-right" />
      <AdminNav />
      <AdminUpperNav searchType="internships" search={internshipSearch} />

      <main className="ml-72 pt-20 min-h-screen p-8">
        <div className="max-w-[1440px] mx-auto w-full space-y-8 pb-20">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Internship Moderation
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Validate student and early-career internship opportunities across verified employers.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111F19] rounded-xl border border-[#20352B] text-xs">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span className="text-[#F1F5F2] font-bold">{internships.length} Internships</span>
              </div>
            </div>
          </div>

          {/* Moderation Queue */}
          <div className="space-y-4">
            {internships && internships.length > 0 ? (
              internships.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-[#111F19] rounded-3xl p-6 sm:p-7 border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#22C55E]/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-[#162820] border border-[#20352B] flex items-center justify-center text-[#22C55E] font-bold text-xl shrink-0">
                      <GraduationCap className="w-7 h-7" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-[10px] font-extrabold">
                          {AlphaCase(internship.internshipStatus || 'ACTIVE')}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0D1814] border border-[#20352B] text-[#9AAEA3] text-[10px] font-semibold">
                          {AlphaCase(internship.category || 'Technology')}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#F1F5F2] tracking-tight">
                        {internship.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-[#9AAEA3]">
                        <Building2 className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span className="font-semibold text-[#F1F5F2]">
                          {internship.companies?.name || 'Company Partner'}
                        </span>
                        <span>•</span>
                        <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span>{internship.location}</span>
                      </div>

                      <div className="flex items-center gap-2 pt-1 text-xs">
                        <span className="inline-flex items-center gap-1 text-[#22C55E] font-bold">
                          <IndianRupee className="w-3.5 h-3.5" />
                          {internship.salaryMin / 1000}k - {internship.salaryMax / 1000}k / mo
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                    <button
                      onClick={() => handleReject(internship.title)}
                      className="px-4 py-2.5 border border-[#EF4444]/30 hover:bg-[#EF4444]/15 text-[#EF4444] text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApprove(internship.title)}
                      className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] text-xs font-extrabold rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center bg-[#111F19] rounded-3xl border border-[#20352B] space-y-2">
                <GraduationCap className="w-10 h-10 text-[#22C55E] mx-auto" />
                <h3 className="text-base font-bold text-[#F1F5F2]">No internships found</h3>
                <p className="text-xs text-[#9AAEA3]">Try clearing search filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternshipManagement;
