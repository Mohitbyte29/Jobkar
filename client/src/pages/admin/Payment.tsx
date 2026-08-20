import AdminNav from '@/components/AdminNav'
import AdminUpperNav from './AdminUpperNav'

const Payment = () => {
  return (
    <div>
      <>
  {/* SideNavBar Shell */}
  <AdminNav />
  {/* TopAppBar Shell */}
  <AdminUpperNav/>
  {/* Main Content Canvas */}
  <main className="pl-64 pt-16 min-h-screen">
    <div className="max-w-[1280px] mx-auto p-margin">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-md">
        <div>
          <h2 className="font-h2 text-h2 text-primary">Payment Processing</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Review and manage recent financial activities from employers.
          </p>
        </div>
        <div className="flex gap-xs">
          <button className="px-4 py-2 border border-outline-variant text-label-strong font-label-strong rounded hover:bg-surface-container transition-colors">
            Export CSV
          </button>
          <button className="px-4 py-2 bg-primary text-white text-label-strong font-label-strong rounded hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span>{" "}
            Generate Report
          </button>
        </div>
      </div>
      {/* Dashboard Stats Grid (Bento Style) */}
      <div className="grid grid-cols-12 gap-gutter mb-md">
        <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary-container/30 rounded-lg">
              <span className="material-symbols-outlined text-secondary">
                payments
              </span>
            </div>
            <span className="text-on-secondary-container font-label-caps text-label-caps bg-secondary-container px-2 py-1 rounded">
              +12.5%
            </span>
          </div>
          <p className="text-on-surface-variant font-label-strong text-label-strong mb-1">
            Total Revenue (MTD)
          </p>
          <p className="text-h1 font-h1 text-primary">$142,850.00</p>
        </div>
        <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-on-tertiary-container/10 rounded-lg">
              <span className="material-symbols-outlined text-on-tertiary-container">
                receipt_long
              </span>
            </div>
            <span className="text-slate-500 font-label-caps text-label-caps">
              This Month
            </span>
          </div>
          <p className="text-on-surface-variant font-label-strong text-label-strong mb-1">
            Active Subscriptions
          </p>
          <p className="text-h1 font-h1 text-primary">1,204</p>
        </div>
        <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-error-container/30 rounded-lg">
              <span className="material-symbols-outlined text-error">
                error
              </span>
            </div>
            <span className="text-error font-label-caps text-label-caps">
              2 Urgent
            </span>
          </div>
          <p className="text-on-surface-variant font-label-strong text-label-strong mb-1">
            Pending Disputes
          </p>
          <p className="text-h1 font-h1 text-primary">04</p>
        </div>
      </div>
      {/* Transaction Table Container */}
      <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-slate-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-h3 text-h3 text-primary flex items-center gap-2">
            Recent Transactions
            <span className="text-xs font-normal text-on-surface-variant px-2 py-0.5 bg-surface-container-high rounded-full">
              Live Updates
            </span>
          </h3>
          <div className="flex gap-sm">
            <select className="text-xs bg-transparent border-slate-200 rounded py-1 pl-2 pr-8 focus:ring-teal-600 focus:border-teal-600">
              <option>All Statuses</option>
              <option>Success</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-slate-100">
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Transaction ID
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Company
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Type
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Amount
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Date
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Status
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-body-sm text-body-sm">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-medium text-primary">
                  #TRX-892341
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[10px]">
                      TH
                    </div>
                    <div>
                      <p className="font-semibold">TechHub Global</p>
                      <p className="text-[10px] text-on-surface-variant">
                        Enterprise Client
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Annual Subscription
                </td>
                <td className="px-6 py-4 font-semibold text-primary">
                  $2,499.00
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Oct 24, 2023
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-teal-600 hover:underline">
                    View Receipt
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-medium text-primary">
                  #TRX-892342
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[10px]">
                      BL
                    </div>
                    <div>
                      <p className="font-semibold">BlueLight Media</p>
                      <p className="text-[10px] text-on-surface-variant">
                        Standard Client
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Job Posting (3 slots)
                </td>
                <td className="px-6 py-4 font-semibold text-primary">
                  $450.00
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Oct 24, 2023
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-teal-600 hover:underline">
                    Re-process
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-medium text-primary">
                  #TRX-892343
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[10px]">
                      SM
                    </div>
                    <div>
                      <p className="font-semibold">Skyline Marketing</p>
                      <p className="text-[10px] text-on-surface-variant">
                        Enterprise Client
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Premium Branding
                </td>
                <td className="px-6 py-4 font-semibold text-primary">
                  $1,200.00
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Oct 23, 2023
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-teal-600 hover:underline">
                    View Receipt
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 font-medium text-primary">
                  #TRX-892344
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-[10px]">
                      VN
                    </div>
                    <div>
                      <p className="font-semibold">Vanguard Networks</p>
                      <p className="text-[10px] text-on-surface-variant">
                        Standard Client
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Annual Subscription
                </td>
                <td className="px-6 py-4 font-semibold text-primary">
                  $2,499.00
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  Oct 23, 2023
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-error-container text-on-error-container">
                    Failed
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-error hover:underline">
                    Review Error
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
          <p className="text-xs text-on-surface-variant font-label-strong font-label-strong">
            Showing 1 to 4 of 128 transactions
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-xs border border-slate-200 rounded bg-white hover:bg-slate-50 transition-colors disabled:opacity-50"
              disabled={true}
            >
              Previous
            </button>
            <button className="px-3 py-1 text-xs bg-primary text-white rounded">
              1
            </button>
            <button className="px-3 py-1 text-xs border border-slate-200 rounded bg-white hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 text-xs border border-slate-200 rounded bg-white hover:bg-slate-50 transition-colors">
              3
            </button>
            <button className="px-3 py-1 text-xs border border-slate-200 rounded bg-white hover:bg-slate-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Payment
