import Navbar from "@/components/Navbar"
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddCompany = () => {
    const navigate = useNavigate();
    const [company, setCompany] = useState({
        name: '',
        website: '',
        country: '',
        city: '',
        companyStatus: 'ACTIVE',
        category: '',
        description: '',
    });

    const [logo, setLogo] = useState<File | null>(null);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCompany((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    

    const handleLogoChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        try{
            const file = e.target.files?.[0];
            if(!file) return;
            const MAX_FILE_SIZE = 10 * 1024 * 1024; // 5MB

            if(file.size > MAX_FILE_SIZE){
                alert('File size exceeds the maximum limit of 10MB.');
                return;
            }
            console.log(file);
            setLogo(file);
        } catch (error) {
            console.error('Error occurred while handling logo change:', error);
        }
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        try{
            const formData = new FormData();
            formData.append('name', company.name);
            formData.append('website', company.website);
            formData.append('country', company.country);
            formData.append('city', company.city);
            formData.append('companyStatus', company.companyStatus);
            formData.append('category', company.category);
            formData.append('description', company.description);
            console.log(logo)
            if(logo){
                formData.append('logo', logo);
            }
            const res = await axios.post(
      "http://localhost:4000/api/company",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
    }
);

    navigate('/');
    console.log(res.data);
        } catch(err){
            console.log(err);
            if(axios.isAxiosError(err)){
                console.log(err.response?.data);
            }
        }
    }

  return (
    <>
  <Navbar/>
  <main className="relative pt-20 bg-surface min-h-screen">
    <div className="flex flex-col w-full max-w-max_width mx-auto px-gutter py-xl">
      {/* Header Section with Decorative Element */}
      <div className="relative mb-lg">
        <div className="absolute -left-8 -top-8 w-24 h-24 bg-secondary/5 rounded-full blur-3xl" />
        <div className="relative flex flex-col gap-xs">
          <span className="text-label-caps font-label-caps text-secondary tracking-[0.2em] uppercase">
            Organization Directory
          </span>
          <h1 className="text-display font-display text-primary">
            Add New Company
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            Establish a new corporate profile in the JobKar ecosystem. Provide
            accurate details to enhance recruitment credibility.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-lg items-start">
        {/* Main Form Card */}
        <div className="col-span-12 lg:col-span-8">
          <form className="bg-surface-container-lowest rounded-xl shadow-md p-lg space-y-lg" onSubmit={handleSubmit}>
            {/* Form Section: Identity */}
            <section className="space-y-md">
              <div className="flex items-center gap-sm mb-sm">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-label-strong font-label-strong">
                  01
                </span>
                <h2 className="text-h2 font-h2 text-primary">
                  Company Identity
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-label-strong font-label-strong text-on-surface">
                    Company Name
                  </label>
                  <input onChange={handleInputChange} name="name" value={company.name}
                    className="w-full px-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md"
                    placeholder="e.g. Nexus Technologies"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-label-strong font-label-strong text-on-surface">
                    Website URL
                  </label>
                  <div className="relative">
                    <span className="absolute left-sm top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[18px]">
                      language
                    </span>
                    <input
                      className="w-full pl-10 pr-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md"
                      placeholder="https://www.nexus.io"
                      type="url" onChange={handleInputChange} name="website" value={company.website}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-strong font-label-strong text-on-surface">
                  Logo Upload
                </label>
                <div
                  className="relative group cursor-pointer border-2 border-dashed border-outline-variant hover:border-secondary hover:bg-secondary/5 rounded-xl p-xl flex flex-col items-center justify-center transition-all"
                  id="dropzone"
                >
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-[32px]">
                      cloud_upload
                    </span>
                  </div>
                  <p className="text-label-strong font-label-strong text-primary">
                    Drag and drop company logo
                  </p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                    PNG, JPG or SVG (Max 5MB)
                  </p>
                  <input
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    type="file" onChange={handleLogoChange} name="logo" 
                  />
                </div>
              </div>
            </section>
            {/* Form Section: Details */}
            <section className="space-y-md pt-md">
              <div className="flex items-center gap-sm mb-sm">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-label-strong font-label-strong">
                  02
                </span>
                <h2 className="text-h2 font-h2 text-primary">
                  Operating Details
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-label-strong font-label-strong text-on-surface">
                    Country
                  </label>
                  <div className="relative">
                    <span className="absolute left-sm top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[18px]">
                      location_on
                    </span>
                    <input
                      className="w-full pl-10 pr-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md"
                      placeholder="e.g. Germany"
                      type="text" onChange={handleInputChange} name="country" value={company.country}
                    />
                    
                  </div>
                  <label className="text-label-strong font-label-strong text-on-surface">
                    City
                  </label>
                  <div className="relative">
                    <span className="absolute left-sm top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[18px]">
                      location_on
                    </span>
                    <input
                      className="w-full pl-10 pr-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md"
                      placeholder="e.g. Berlin"
                      type="text" onChange={handleInputChange} name="city" value={company.city}
                    />
                    
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-label-strong font-label-strong text-on-surface">
                    Company Status
                  </label>
                  <select onChange={handleInputChange} name="status" value={company.companyStatus} className="w-full px-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md appearance-none">
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Inactive</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-label-strong font-label-strong text-on-surface">
                    Category
                  </label>
                  <select onChange={handleInputChange} name="category" value={company.category} className="w-full px-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md appearance-none">
                    <option value="TECHNOLOGY_SOFTWARE">Technology</option>
                    <option value="CREATIVE_MEDIA">Finance</option>
                    <option value="MARKETING">Marketing</option>
                    <option value="HEALTHCARE">Healthcare</option>
                    <option value="EDUCATION_GOVERNMENT">Education</option>
                    <option value="BUSINESS_OPERATIONS">Business Operations</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-strong font-label-strong text-on-surface">
                  Company Description
                </label>
                <textarea
                  className="w-full px-sm py-3 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-colors text-body-md resize-none"
                  placeholder="Describe the company's mission, values, and culture..."
                  rows={6}
                  defaultValue={""}
                  onChange={handleInputChange}
                  name="description"
                  value={company.description}
                />
              </div>
            </section>
            {/* Form Actions */}
            <div className="flex items-center justify-end gap-md pt-lg">
              <button className="px-lg py-3 text-label-strong font-label-strong text-on-surface-variant hover:text-on-surface transition-colors">
                Cancel
              </button>
              <button className="relative overflow-hidden px-xl py-3 bg-primary text-on-primary rounded-full text-label-strong font-label-strong shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all group">
                <span className="relative z-10">Save Company</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
            </div>
          </form>
        </div>
        {/* Sidebar Info/Guidelines */}
        <div className="col-span-12 lg:col-span-4 space-y-md">
          <div className="bg-primary-container text-on-primary-container p-lg rounded-xl flex flex-col gap-md">
            <h3 className="text-h3 font-h3">Profile Integrity</h3>
            <p className="text-body-sm font-body-sm opacity-80">
              Companies with completed profiles and high-resolution logos
              receive 40% more application engagement on average.
            </p>
            <ul className="space-y-sm">
              <li className="flex gap-xs items-start">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                <span className="text-label-strong font-label-strong">
                  Verified badge eligibility
                </span>
              </li>
              <li className="flex gap-xs items-start">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                <span className="text-label-strong font-label-strong">
                  SEO-optimized listing
                </span>
              </li>
              <li className="flex gap-xs items-start">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                <span className="text-label-strong font-label-strong">
                  Custom branding tools
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container p-lg rounded-xl border border-outline-variant/30">
            <h3 className="text-label-strong font-label-strong text-on-surface mb-md">
              PREVIEW LISTING
            </h3>
            <div className="bg-surface-container-lowest p-sm rounded-lg shadow-sm flex items-center gap-sm">
              <div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">
                  business
                </span>
              </div>
              <div className="flex flex-col">
                <div className="w-24 h-3 bg-surface-variant rounded-full mb-1" />
                <div className="w-16 h-2 bg-surface-variant/50 rounded-full" />
              </div>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-md italic">
              This is how your company card will appear in the directory search
              results.
            </p>
          </div>
          {/* Live Location Preview Placeholder */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <div
              className="w-full h-48 bg-cover bg-center flex items-end p-sm"
              data-location="Silicon Valley, California"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArMtEFPPkKwnNg8P47xXzoJn7dQAN-NcEa4mTui0cBdr0s8ssY8u-Ek886gmkgmpczzzCjARBVMdMQJHSW9QwCevxYAhIVssBUWnUUV8cvhU5tn55RwGvp3qDW8G0yNJmXuP_uZhgr6FzLr7QYO6BinXJy13ni8EGCugVVbl3hXudp5REOEsrHQrq7txxh1zqMDtITVxYA9uN0q3vsSXLxsR5OnuniBV2WMTM0kseCMwgBHLfHbchL")'
              }}
            >
              <div className="bg-surface/90 backdrop-blur px-sm py-1 rounded text-label-caps font-label-caps text-primary shadow-sm">
                HQ VISUALIZATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</>

  )
}

export default AddCompany