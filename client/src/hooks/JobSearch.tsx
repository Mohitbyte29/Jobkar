import { useJobs } from '@/context/JobsContext';
import axios from 'axios';
import React, { useState, type ChangeEvent } from 'react'

interface Job{
    id: number;
    title: string;
    company: {name: string, description: string, location: string, website: string, companyStatus: string, logo: string};
    category: string;
    location: string;
    salaryMin: number;
    salaryMax: number;
    updatedAt: string;
    type: string;
    tags: string;
  }

export const usejobSearch = () => {
    // const { userData, total } = useJobs();
    const [query, setQuery] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<string | null>("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>("");
  const [results, setResults] = useState<Job[]>([]);
  const [locationResults, setLocationResults] = useState<Job[]>([]);
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categoryResults, setCategoryResults] = useState<Job[]>([]);
  const canSearch = selectedJob !== null || selectedLocation !== null;

   const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setSelectedJob(null);
    if (!val.trim()) {
      setResults([]);
      return;
    }
    try {
      const res = await axios.get(
        `/api/jobs/search?q=${encodeURIComponent(val)}`,
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
        `/api/jobs/search?location=${encodeURIComponent(locationVal)}`,
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
        `/api/jobs/search?category=${encodeURIComponent(categoryVal)}`,
      );
      setCategoryResults(res.data);
    } catch (err) {
      console.error("Search failed:", err);
      setCategoryResults([]);
    }
  };
  return ({
      handleChange, handleLocationChange, handleCategoryChange, query, setQuery, results, setResults, location, setLocation, setLocationResults, locationResults, category, setCategory, setCategoryResults, selectedJob, setSelectedJob, selectedLocation, setSelectedLocation, canSearch
  }
  )
}

