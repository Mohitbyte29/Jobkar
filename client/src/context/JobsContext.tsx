import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  company: { name: string, description: string, location: string, website: string, companyStatus: string, logo: string };
  category: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  type: string;
  tags: string;
}

interface JobsContextType {
  userData: Job[];
  setUserData: (jobs: Job[]) => void;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  total: number;
  setTotal: (total: number) => void;
  currentJob: Job | null;
  setCurrentJob: (job: Job | null) => void;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const JobsProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(true);
    const [total, setTotal]     = useState(0);
  const [userData, setUserData] = useState<Job[]>([]);
  const [currentJob, setCurrentJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await axios.get("/api/jobs"); // ✅ fetches all active jobs
        setUserData(data.jobs);
        setCurrentJob(data.jobs);
        setTotal(data.pagination.total);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []); // ✅ runs once on mount
  console.log(userData)
  console.log(currentJob)
  return (
    <JobsContext.Provider value={{ userData, setUserData, error, setError, loading, setLoading, total, setTotal, currentJob, setCurrentJob }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobs must be used within JobsProvider');
  }
  return context;
};
