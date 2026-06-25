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

