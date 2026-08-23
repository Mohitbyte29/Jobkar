import AdminNav from '@/components/AdminNav';
import AdminUpperNav from './AdminUpperNav';
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Download,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Receipt,
} from 'lucide-react';

const Payment = () => {
  const transactions = [
    {
      id: '#TRX-892341',
      company: 'TechHub Global',
      tier: 'Enterprise Client',
      type: 'Annual Enterprise Plan',
      amount: '$2,499.00',
      date: 'Oct 24, 2024',
      status: 'SUCCESS',
    },
    {
      id: '#TRX-892342',
      company: 'BlueLight Media',
      tier: 'Growth Tier',
      type: 'Job Slot Package (3x)',
      amount: '$450.00',
      date: 'Oct 24, 2024',
      status: 'PENDING',
    },
    {
      id: '#TRX-892343',
      company: 'Skyline Marketing',
      tier: 'Enterprise Client',
      type: 'Premium Branding Addon',
      amount: '$1,200.00',
      date: 'Oct 23, 2024',
      status: 'SUCCESS',
    },
    {
      id: '#TRX-892344',
      company: 'Vanguard Networks',
      tier: 'Standard Tier',
      type: 'Annual Pro Plan',
      amount: '$2,499.00',
      date: 'Oct 23, 2024',
      status: 'FAILED',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans">
      <AdminNav />
      <AdminUpperNav />

      <main className="ml-72 pt-20 min-h-screen p-8">
        <div className="max-w-[1440px] mx-auto w-full space-y-8 pb-16">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Payment & Billing Operations
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Monitor real-time subscription revenue, invoice settlements, and dispute queues.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] rounded-xl text-xs font-extrabold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                <Download className="w-4 h-4" />
                <span>Generate Billing Report</span>
              </button>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                <DollarSign className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Total Revenue (MTD)
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2] mt-0.5">
                  $142,850.00
                </h3>
                <p className="text-xs text-[#22C55E] font-bold mt-1">
                  +12.5% vs previous month
                </p>
              </div>
            </div>

            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                <CreditCard className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Active Subscriptions
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2] mt-0.5">
                  1,204
                </h3>
                <p className="text-xs text-[#22C55E] font-bold mt-1">
                  98.2% retention
                </p>
              </div>
            </div>

            <div className="bg-[#111F19] p-6 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#EF4444]/15 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444] shrink-0">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Pending Disputes
                </p>
                <h3 className="text-3xl font-black text-[#F1F5F2] mt-0.5">0</h3>
                <p className="text-xs text-[#9AAEA3] mt-1">
                  Zero chargeback flags
                </p>
              </div>
            </div>
          </div>

          {/* Transactions Table Container */}
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#20352B] flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold text-[#F1F5F2]">
                  Recent Invoices & Transactions
                </h3>
                <p className="text-xs text-[#9AAEA3]">
                  Real-time Stripe & Gateway payment ledger
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0D1814] border-b border-[#20352B]">
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Transaction ID
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Company
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Description
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Date
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-right">
                      Receipt
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#20352B]">
                  {transactions.map((trx) => (
                    <tr key={trx.id} className="hover:bg-[#0D1814]/70 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs font-bold text-[#22C55E]">
                        {trx.id}
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-xs font-bold text-[#F1F5F2]">{trx.company}</p>
                        <p className="text-[10px] text-[#9AAEA3]">{trx.tier}</p>
                      </td>

                      <td className="px-6 py-4 text-xs font-medium text-[#9AAEA3]">
                        {trx.type}
                      </td>

                      <td className="px-6 py-4 text-xs font-extrabold text-[#F1F5F2]">
                        {trx.amount}
                      </td>

                      <td className="px-6 py-4 text-xs text-[#9AAEA3]">
                        {trx.date}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                            trx.status === 'SUCCESS'
                              ? 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30'
                              : trx.status === 'PENDING'
                              ? 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
                              : 'bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30'
                          }`}
                        >
                          {trx.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button className="text-xs font-bold text-[#22C55E] hover:underline cursor-pointer">
                          View Invoice
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 bg-[#0D1814] border-t border-[#20352B] flex items-center justify-between text-xs text-[#9AAEA3]">
              <p>Showing 1 to 4 of 128 transactions</p>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
