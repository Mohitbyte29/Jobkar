import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  company: { name: string };
  category: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  type: string;
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

}

export const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const JobsProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(true);
    const [total, setTotal]     = useState(0);
  const [userData, setUserData] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await axios.get("/api/jobs"); // ✅ fetches all active jobs
        setUserData(data.jobs);
        setTotal(data.pagination.total);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // ✅ runs once on mount

  return (
    <JobsContext.Provider value={{ userData, setUserData, error, setError, loading, setLoading, total, setTotal }}>
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
