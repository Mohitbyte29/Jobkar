import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

interface Internship {
    id: number;
  title: string;
  companies: { name: string, description: string, location: string, website: string, companyStatus: string, logo: string };
  category: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  updatedAt: string;
  type: string;
  tags: string;
}

interface IntershipsContextType {
    internshipData: Internship[];
    setInternshipData: (internships: Internship[]) => void;
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
    const [internshipData, setInternshipData] = useState<Internship[]>([]);

    useEffect(() => {
        const fetchInternships = async() => {
            setLoading(true);
            setError("");
            try{
                const { data } = await axios.get('/api/internships');
                console.log(data.internships);
                setInternshipData(data.internships);
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
    console.log(internshipData);
    return(
        <InternshipsContext.Provider value={{internshipData, setInternshipData, loading, setLoading, error, setError, total, setTotal }}>
            {children}
        </InternshipsContext.Provider>
    );
};

export const useInternships = () => {
    const context = useContext(InternshipsContext);
    if (!context) {
    throw new Error('useInternships must be used within InternshipsProvider');
  }
  return context;
}

