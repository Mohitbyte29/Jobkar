import AdminNav from '@/components/AdminNav'
import { useJobs } from '@/context/JobsContext';
import AlphaCase from '../../../utils/AlphaCase';
import { IndianRupee } from 'lucide-react';
import AdminUpperNav from './AdminUpperNav';
import { usejobSearch } from '@/hooks/JobSearch';

const JobManagement = () => {
  const {jobData, setJobData} = useJobs();
  const jobSearch = usejobSearch();
  const normalizedQuery = jobSearch.query.trim().toLowerCase();
  const jobs = normalizedQuery
    ? jobSearch.results.length > 0
      ? jobSearch.results
      : jobData.filter((job) =>
          job.title.toLowerCase().includes(normalizedQuery)
        )
    : jobData;
  return (
    <div>
      <>
  {/* Sidebar Navigation */}
  <AdminNav />
  {/* Top App Bar */}
  <AdminUpperNav 
    searchType="jobs"
    search={jobSearch}
  />
  {/* Main Content Canvas */}
  <main className="ml-64 mt-16 p-margin max-w-max_width mx-auto">
    {/* Header Section */}
    <div className="flex justify-between items-end mb-md">
      <div>
        <h2 className="font-h1 text-h1 text-on-surface">Job Moderation</h2>
        <p className="font-body-md text-on-surface-variant mt-xs">
          Manage and approve pending job listings to ensure platform quality.
        </p>
      </div>
      <div className="flex gap-sm">
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-outline-variant shadow-sm">
          <span
            className="material-symbols-outlined text-secondary"
            data-icon="pending_actions"
          >
            pending_actions
          </span>
          <span className="font-label-strong text-on-surface">24 Pending</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-outline-variant shadow-sm">
          <span
            className="material-symbols-outlined text-error"
            data-icon="report"
          >
            report
          </span>
          <span className="font-label-strong text-on-surface">3 Reported</span>
        </div>
      </div>
    </div>
    {/* Moderation Queue */}
    <div className=" grid grid-cols-1 gap-md">
      {/* Job Moderation Card 1 */}
      {jobs && jobs.map((job) => {
        return (
      <div key={job.id} className="bg-white rounded-xl p-md border border-outline-variant shadow-[0px_4px_20px_rgba(15,23,42,0.05)] flex items-center justify-between group hover:border-secondary/30 transition-all duration-300 ">
          <>
          <div className="flex items-center gap-md mb-8">
          <div className="w-16 h-16 rounded-lg bg-surface-container-low flex items-center justify-center p-3">
            <img
              alt="CloudScale Logo"
              className="w-full h-full object-contain"
              data-alt="A minimalist logo for a fictional tech company called CloudScale, featuring clean geometric shapes in a deep navy blue and teal color scheme. The aesthetic is professional and corporate, set against a pristine white background to reflect a modern software-as-a-service brand identity."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHInkMswpB0HmVEWCdQPMFZFIYUkQtftknmGhmtoNqpH1jatOpuJo5EYUg0x6YR5jsiJ_O4QszDfXkZzj4EtMoR1458IBlKSeqsKm123r8JOiJDegDic98c9xE_CYPsZFlsI7umWsjY9L8AUOvjS3pndtbdjTcvNi_dZozzUGRwpZ7ZbZZiRDpItpHshJI0VNwtoiMpTDM3LFrtdj5alb1_zahRtkfp-6zx8tZk1ZvIr1fvqAugacoLpcp2DYywVK4qARPTYok5M8"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-xs">
              <span className="font-label-caps text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                NEW POST
              </span>
              <span className="font-body-sm text-on-surface-variant">
                Posted 2h ago
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface">
              {job.title}
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {job.company.name} • {job.location} (Remote)
            </p>
            <div className="flex gap-2 mt-sm">
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                {AlphaCase(job.status)}
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                <span className="flex items-center gap-1">
                  <IndianRupee size={16} />
                  {job.salaryMin / 1000}k - <IndianRupee size={16}/>{job.salaryMax / 1000}k
                </span>
              </span>
              <span className="font-label-caps text-on-primary-container bg-primary-fixed/30 px-2 py-0.5 rounded">
                {AlphaCase(job.category)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <button className="px-md py-sm font-label-strong text-secondary border border-secondary rounded-lg hover:bg-secondary/5 transition-colors">
            Quick Approve
          </button>
          <button className="px-md py-sm font-label-strong bg-primary text-on-primary rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span>Review</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
        </>
      </div>
        )
      })}
    </div>
    {/* Batch Actions Footer */}
    <div className="fixed bottom-0 right-0 left-64 bg-gray-200 border-t border-slate-200 px-6 py-4 flex justify-between items-center z-20">
      <div className="flex items-center gap-2">
        <input
          className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          type="checkbox"
        />
        <span className="text-sm font-medium text-slate-600">
          Select All (24 items)
        </span>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-error text-error font-label-strong rounded-lg hover:bg-error/5 transition-colors">
          Reject Selected
        </button>
        <button className="px-4 py-2 bg-secondary text-white font-label-strong rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          Approve Selected
        </button>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default JobManagement
