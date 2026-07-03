import axios from 'axios';
import { useState, type ChangeEvent } from 'react'

interface Company{
    name: string;
    logo: string;
    category: string;
    description: string;
    website: string;
    location: string;
    createdAt: string;
    updatedAt: string;
    companyStatus: string;
    jobs: { title: string};
  }

export const useCompanySearch = () => {
    // const { userData, total } = useJobs();
    const [query, setQuery] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string | null>("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>("");
  const [results, setResults] = useState<Company[]>([]);
  const [locationResults, setLocationResults] = useState<Company[]>([]);
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categoryResults, setCategoryResults] = useState<Company[]>([]);
  const canSearch = selectedCompany !== null || selectedLocation !== null;

   const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setSelectedCompany(null);
    if (!val.trim()) {
      setResults([]);
      return;
    }
    try {
      const res = await axios.get(
        `/api/companies/search?c=${encodeURIComponent(val)}`,
      );
      setResults(res.data);
    } catch (err) {
      console.error("Search failed:", err);
      setResults([]);
    }
  };

   const handleLocationChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const locationVal = e.target.value;
    setLocation(locationVal);
    setSelectedLocation(null);
    if (!locationVal.trim()) {
      setLocationResults([]);
      return;
    }

    try {
      const res = await axios.get(
        `/api/companies/search?location=${encodeURIComponent(locationVal)}`,
      );
      setLocationResults(res.data);
    } catch (err) {
      console.error("Search failed:", err);
      setLocationResults([]);
    }
  };

   const handleCategoryChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const categoryVal = e.target.value;
    setCategory(categoryVal);
    if (!categoryVal.trim()) {
      setCategoryResults([]);
      return;
    }
    try {
      const res = await axios.get(
        `/api/companies/companies/search?category=${encodeURIComponent(categoryVal)}`,
      );
      setCategoryResults(res.data);
    } catch (err) {
      console.error("Search failed:", err);
      setCategoryResults([]);
    }
  };
  return ({
      handleChange, handleLocationChange, handleCategoryChange, query, setQuery, results, setResults, location, setLocation, setLocationResults, locationResults, category, setCategory, setCategoryResults, selectedCompany, setSelectedCompany, selectedLocation, setSelectedLocation, canSearch
  }
  )
}

