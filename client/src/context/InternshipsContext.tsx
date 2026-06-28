import axios from 'axios';
import { Children, createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface Internship{
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

interface IntershipsContextType {
    userData: Internship[];
    setUserData: (internships: Internship[]) => void;
    error: string;
    setError: (error: string) => void;
    loading: boolean;
  setLoading: (loading: boolean) => void;
    total: number;
    setTotal: (total: number) => void;
}

export const InternshipsContext = createContext<IntershipsContextType | undefined>(undefined);

export const InternshipsProvider = ({children} : {children : React.ReactNode}) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [userData, setUserData] = useState<Internship[]>([]);

    useEffect(() => {
        const fetchInternships = async() => {
            setLoading(true);
            setError("");
            try{
                const { data } = await axios.get('/api/internships');
                setUserData(data.internships);
                setTotal(data.total);
            }
            catch(err){
                setError("Failed to get Internships");
            }
            finally{
                setLoading(false);
            }
        };
        fetchInternships();
    }, []);

    return(
        <InternshipsContext.Provider value={{userData, setUserData, loading, setLoading, error, setError, total, setTotal }}>
            {children}
        </InternshipsContext.Provider>
    );
};

export const useInternships = () => {
    const context = useContext(InternshipsContext);
    if (!context) {
    throw new Error('useJobs must be used within JobsProvider');
  }
  return context;
}

