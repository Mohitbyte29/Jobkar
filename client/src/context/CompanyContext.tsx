import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface Company{
    name: string;
    logo: string;
    description: string;
    website: string;
    location: string;
    createdAt: string;
    updatedAt: string;
    companyStatus: string;
    jobs: { title: string};
}

interface CompanyContextType {
    companyData: Company[];
    setCompanyData: (Company: Company[]) => void;
    error: string;
    setError: (error: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    total: number;
    setTotal: (total: number) => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider = ({ children }: { children: React.ReactNode }) => {
    const [error, setError]     = useState("");
    const [loading, setLoading] = useState(true);
    const [total, setTotal]     = useState(0);
    const [companyData, setCompanyData] = useState<Company[]>([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            setError("");
            try{
                const { data } = await axios.get("/api/companies");
                setCompanyData(data.companies);
                setTotal(data.count);
                console.log(data.companies);
            } catch(err){
                setError("Failed to load companies");
            } finally {
                setLoading(false);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <CompanyContext.Provider value={{companyData, setCompanyData, error, setError, loading, setLoading, total, setTotal}}>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (context === undefined) {
        throw new Error("useCompany must be used within a CompanyProvider");
    }
    return context;
}


