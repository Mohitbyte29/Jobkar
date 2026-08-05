import { useCompany } from "@/context/CompanyContext";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { IndianRupee } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Internship {
    title: string;
    category: string;
    openings: number;
    duration: number;
    workType: string;
    city: string;
    country: string;
    salaryMin: number;
    salaryMax: number;
    requirements: string;
    description: string;
    type: string;
}

const PostInternship = () => {
    const navigate = useNavigate();
    const [company, setCompany] = useState("");
    const [input, setInput] = useState("");
    const {user, setUser} = useUser();
    const [remote, setRemote] = useState(false);
    const {companyData, setCompanyData} = useCompany();
    const [tags, setTags] = useState<string[]>([]);
    const [suggestedTags] = useState([
    "JavaScript",
    "React",
    "Next Js",
    "Python",
    "UI Design",
  ]);

    const [internship, setInternship] = useState<Internship>({
        title: "",
        category: "TECHNOLOGY_SOFTWARE",
        openings: 1,
        duration: 3,
        workType: "REMOTE",
        city: "",
        country: "",
        salaryMin: 0,
        salaryMax: 0,
        requirements: "",
        description: "",
        type: "Unpaid"
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== "Enter") return;
        e.preventDefault();
        const value = input.trim();
        if (!value) return;

        if(tags.includes(value)){
            setInput("");
            return;
        }

        setTags([...tags, value]);
        setInput("");
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    }

    const addSuggestedTag = (tag: string) => {
        if(tags.includes(tag)) return;
        setTags([...tags, tag]);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInternship(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const filteredCompany = companyData?.filter(
    (comp) => comp.UserId === user?.id,
  );
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(company)
        try {
            await axios.post("/api/internships", {
                ...internship,
                tags: tags,
                companyId: Number(company),
                remote: internship.workType === "REMOTE" ? true : false
        
            }, {
                withCredentials: true
            }
                );
            navigate("/");
        } catch (err) {
            console.error(err);
            if(axios.isAxiosError(err)){
                console.log(err.response?.data);
            }
        }
    }

  return (
    <div>
        <main className="relative pt-20 bg-surface min-h-screen">
  <form className="flex flex-col w-full p-lg gap-lg" onSubmit={handleSubmit}>
    <div className="flex items-center justify-between">
      <div>
        <h1 className="font-bold text-4xl text-on-surface">Post an Internship</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Create a structured learning opportunity for rising talent.
        </p>
      </div>
      <div className="flex items-center gap-sm">
        <button className=" cursor-pointer px-md py-sm rounded-full bg-surface-container-high text-on-surface hover:bg-surface-dim transition-colors font-label-strong text-label-strong">
          Save Draft
        </button>
        <button className="cursor-pointer active:scale-95 px-md py-sm rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-colors font-label-strong text-label-strong flex items-center gap-xs" type="submit" >
          <span className="material-symbols-outlined text-[20px]">send</span>{" "}
          Publish Internship
        </button>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-gutter">
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-md">
        {/* Section 1: Basic Details */}
        <section className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col gap-md">
          <div className="flex items-center gap-sm border-b border-surface-container-high pb-sm">
            <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">
                info
              </span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">Basic Details</h2>
          </div>
          <div className="flex flex-col gap-xs relative">
            <label className="font-label-strong text-label-strong text-on-surface">
              Company Name *
            </label>
            <select
                    className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  >
                    <option value="">Select a Company</option>

                    {filteredCompany?.map((comp) => (
                      <option key={comp.id} value={comp.id}>
                        {comp.name}
                      </option>
                    ))}
                  </select>
          </div>
          <div className="flex flex-col gap-xs relative">
            <label className="font-label-strong text-label-strong text-on-surface">
              Internship Title *
            </label>
            <input
              className="w-full bg-surface p-sm rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant"
              placeholder="e.g. Software Engineering Intern"
              type="text" value={internship.title} onChange={handleInputChange} name="title"
            />
          </div>
          <div className="grid grid-cols-2 gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Category *
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-surface p-sm pr-10 rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface cursor-pointer" value={internship.category} onChange={handleInputChange} name="category">
                  <option disabled={true} value="">
                    Select category
                  </option>
                  <option value="TECHNOLOGY_SOFTWARE">Technology Software</option>
                  <option value="CREATIVE_MEDIA">Design UX</option>
                  <option value="MARKETING">Marketing</option>
                  <option value="FINANCE">Finance</option>
                  <option value="HEALTHCARE">Healthcare</option>
                  <option value="EDUCATION_GOVERNMENT">Education Government</option>
                  <option value="BUSINESS_OPERATIONS">Business Administration</option>
                  <option value="OTHER">Other</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Number of Openings
              </label>
              <input
                className="w-full bg-surface p-sm rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface"
                min={1}
                type="number"
                value={internship.openings}
                onChange={handleInputChange}
                name="openings"
              />
            </div>
            <div className="flex flex-col gap-xs relative">
            <label className="font-label-strong text-label-strong text-on-surface">
              Stipend Type
            </label>
            <select
                    className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-3 text-body-lg focus:ring-0 focus:border-primary transition-colors outline-none"
                    onChange={handleInputChange} value={internship.type} name="type"
                  >
                    <option>Paid</option>
                    <option>Unpaid</option>
                  </select>
          </div>
          </div>
        </section>
        {/* Section 2: Timeline */}
        <section className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col gap-md">
          <div className="flex items-center gap-sm border-b border-surface-container-high pb-sm">
            <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-[20px]">
                calendar_month
              </span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">Timeline</h2>
          </div>
          <div className="grid grid-cols-3 gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Duration
              </label>
              <div className="relative">
                <select onChange={handleInputChange} name="duration" className="w-full appearance-none bg-surface p-sm pr-10 rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface cursor-pointer">
                  <option value={1}>1 Month</option>
                  <option value={2}>2 Months</option>
                  <option value={3}>
                    3 Months
                  </option>
                  <option value={6}>6 Months</option>
                  <option value={12}>12 Months</option>
                  <option value={24}>24 Months</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Expected Start Date
              </label>
              <input
                className="w-full bg-surface p-sm rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface cursor-pointer"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Applications Close
              </label>
              <input
                className="w-full bg-surface p-sm rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface cursor-pointer"
                type="date"
              />
            </div>
          </div>
        </section>
        {/* Section 3: Location & Mode */}
        <section className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col gap-md">
          <div className="flex items-center gap-sm border-b border-surface-container-high pb-sm">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-[20px]">
                location_on
              </span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">
              Location &amp; Mode
            </h2>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-strong text-label-strong text-on-surface">
              Work Mode
            </label>
            <select className="flex bg-surface rounded-xl p-1 gap-1">
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">On-site</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-md">
            <div className="flex flex-col gap-xs relative">
              <label className="font-label-strong text-label-strong text-on-surface">
                City
              </label>
              <input onChange={handleInputChange} name="city" value={internship.city}
                className="w-full bg-surface p-sm rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant"
                placeholder="e.g. San Francisco"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-xs relative">
              <label className="font-label-strong text-label-strong text-on-surface">
                Country
              </label>
              <div className="relative">
                <select onChange={handleInputChange} name="country" value={internship.country} className="w-full appearance-none bg-surface p-sm pr-10 rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface cursor-pointer">
                  <option disabled={true} value="us">
                    United States
                  </option>
                  <option value="India">India</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Stipend & Perks */}
        <section className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col gap-md">
          <div className="flex items-center gap-sm border-b border-surface-container-high pb-sm">
            <div className="w-10 h-10 rounded-full bg-error-container/40 flex items-center justify-center text-on-error-container">
              <span className="material-symbols-outlined text-[20px]">
                payments
              </span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">
              Stipend &amp; Perks
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Min Stipend /mo
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-md">
                  <IndianRupee size={16} />
                </span>
                <input
                  className="w-full bg-surface p-sm pl-8 rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface"
                  placeholder="2000"
                  type="number" value={internship.salaryMin} onChange={handleInputChange} name="salaryMin"
                />
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-strong text-label-strong text-on-surface">
                Max Stipend /mo
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-md">
                  <IndianRupee size={16} />
                </span>
                <input
                  className="w-full bg-surface p-sm pl-8 rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface"
                  placeholder="4000"
                  type="number" onChange={handleInputChange} name="salaryMax" value={internship.salaryMax}
                />
              </div>
            </div>
            {/* <div className="flex flex-col gap-xs">
              <div className="relative">
                <select className="w-full appearance-none bg-surface p-sm pr-10 rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface cursor-pointer">
                  <option disabled={true} selected={true} value="usd">
                    USD
                  </option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  expand_more
                </span>
              </div>
            </div> */}
          </div>
          {/* <div className="flex flex-col gap-xs mt-sm">
            <label className="font-label-strong text-label-strong text-on-surface">
              Perks Offered
            </label>
            <div className="flex flex-wrap gap-sm mt-xs">
              <label className="flex items-center gap-xs cursor-pointer group">
                <div className="w-5 h-5 rounded bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    check
                  </span>
                </div>
                <span className="font-body-md text-body-sm text-on-surface select-none group-hover:text-primary transition-colors">
                  Certificate
                </span>
              </label>
              <label className="flex items-center gap-xs cursor-pointer group">
                <div className="w-5 h-5 rounded border border-outline-variant group-hover:border-secondary bg-surface-container-lowest flex items-center justify-center transition-colors"></div>
                <span className="font-body-md text-body-sm text-on-surface select-none group-hover:text-primary transition-colors">
                  Letter of Recommendation
                </span>
              </label>
              <label className="flex items-center gap-xs cursor-pointer group">
                <div className="w-5 h-5 rounded bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    check
                  </span>
                </div>
                <span className="font-body-md text-body-sm text-on-surface select-none group-hover:text-primary transition-colors">
                  Flexible Hours
                </span>
              </label>
              <label className="flex items-center gap-xs cursor-pointer group">
                <div className="w-5 h-5 rounded border border-outline-variant group-hover:border-secondary bg-surface-container-lowest flex items-center justify-center transition-colors"></div>
                <span className="font-body-md text-body-sm text-on-surface select-none group-hover:text-primary transition-colors">
                  Pre-Placement Offer (PPO)
                </span>
              </label>
            </div>
          </div> */}
        </section>
        {/* Section 5: Requirements & Description */}
        <section className="bg-surface-container-lowest rounded-2xl p-md shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col gap-md">
          <div className="flex items-center gap-sm border-b border-surface-container-high pb-sm">
            <div className="w-10 h-10 rounded-full bg-primary-fixed-dim/30 flex items-center justify-center text-on-primary-fixed-variant">
              <span className="material-symbols-outlined text-[20px]">
                description
              </span>
            </div>
            <h2 className="font-h3 text-h3 text-on-surface">
              Requirements &amp; Description
            </h2>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-strong text-label-strong text-on-surface">
              Skills Required
            </label>
            <div className="flex flex-wrap gap-2 p-sm bg-surface rounded-xl border-2 border-transparent focus-within:border-secondary focus-within:bg-surface-container-lowest transition-all min-h-[56px] items-center">
              {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-body-sm flex items-center gap-2"
                      >
                        {tag}
                        <button
                          className="hover:text-error transition-colors flex items-center"
                          type="button"
                          onClick={() => removeTag(tag)}
                        >
                          <span className="material-symbols-outlined text-[14px] cursor-pointer">
                            close
                          </span>
                        </button>
                      </span>
                    ))}

              <input
                className="bg-transparent outline-none flex-1 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant min-w-[120px]"
                placeholder="Type and press enter..."
                type="text" onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} name="tags" 
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
                    <span className="text-label-caps font-label-caps text-on-surface-variant tracking-wider">
                      SUGGESTED:
                    </span>
                    {suggestedTags.map((tag) => (
                      <button
                        key={tag}
                        className="bg-surface-container-low px-3 py-1.5 rounded-full text-body-sm hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                        type="button"
                        onClick={() => addSuggestedTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-strong text-label-strong text-on-surface">
               Requirements
            </label>
            <input
              className="w-full bg-surface p-sm rounded-xl outline-none focus:bg-surface-container-lowest border-2 border-transparent focus:border-secondary transition-all font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant"
              type="text"
              placeholder="e.g. Bachelor's degree in Computer Science or related field"
              onChange={handleInputChange}
              name="requirements"
              value={internship.requirements}
            />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-strong text-label-strong text-on-surface">
              Internship Description
            </label>
            <div className="border border-surface-container-highest rounded-xl overflow-hidden bg-surface-container-lowest focus-within:border-secondary focus-within:shadow-[0_0_0_2px_rgba(0,106,97,0.2)] transition-all">
              <div className="flex items-center gap-1 p-2 bg-surface-container-low border-b border-surface-container-highest">
                <button className="p-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    format_bold
                  </span>
                </button>
                <button className="p-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    format_italic
                  </span>
                </button>
                <button className="p-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    format_list_bulleted
                  </span>
                </button>
                <div className="w-px h-4 bg-outline-variant/30 mx-1" />
                <button className="p-1 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    link
                  </span>
                </button>
              </div>
              <textarea
                className="w-full bg-transparent p-sm outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant resize-y"
                placeholder="Describe the responsibilities, what the intern will learn, and expectations..."
                rows={6}
                 onChange={handleInputChange} name="description" value={internship.description}
              />
            </div>
          </div>
        </section>
      </div>
      {/* Sidebar */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-md">
        {/* Tips Card */}
        <div className="bg-primary text-on-primary p-md rounded-2xl relative overflow-hidden shadow-lg">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-on-primary/5 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -left-12 bottom-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-sm">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-secondary-fixed">
                lightbulb
              </span>
              <h3 className="font-h3 text-h3">Internship Posting Tips</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary/80 mb-xs">
              Attract the best student talent by following these guidelines:
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim mt-0.5">
                  check_circle
                </span>
                <span className="font-body-sm text-body-sm text-on-primary">
                  <strong>Be specific about learning outcomes.</strong> Students
                  value mentorship and skill acquisition above all.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim mt-0.5">
                  check_circle
                </span>
                <span className="font-body-sm text-body-sm text-on-primary">
                  <strong>State conversion potential.</strong> Clearly mention
                  if there's a PPO (Pre-Placement Offer) possibility.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim mt-0.5">
                  check_circle
                </span>
                <span className="font-body-sm text-body-sm text-on-primary">
                  <strong>Keep requirements realistic.</strong> Avoid asking for
                  3+ years of experience for an internship role.
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Premium Upgrade Card */}
        <div className="bg-surface-container-lowest p-md rounded-2xl border border-surface-container-high shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col items-center text-center gap-sm relative overflow-hidden group hover:border-tertiary-fixed-dim transition-colors">
          <div className="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary-container mb-xs group-hover:scale-110 transition-transform duration-500 ease-out">
            <span className="material-symbols-outlined text-[32px]">
              rocket_launch
            </span>
          </div>
          <h3 className="font-h3 text-h3 text-on-surface">Hire 2x Faster</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Upgrade your listing to featured status and reach top university
            talent before competitors.
          </p>
          <button className="mt-xs w-full py-sm rounded-full bg-tertiary text-on-tertiary hover:bg-tertiary/90 transition-colors font-label-strong text-label-strong shadow-md">
            Boost This Listing
          </button>
        </div>
        {/* Data visualization decoration (Subtle ambient SVG) */}
        <div className="hidden lg:flex justify-center mt-lg opacity-40 mix-blend-multiply">
          <svg
            fill="none"
            height={200}
            viewBox="0 0 200 200"
            width={200}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z"
              fill="url(#paint0_radial_decoration)"
            />
            <defs>
              <radialGradient
                cx={0}
                cy={0}
                gradientTransform="translate(100 100) rotate(90) scale(100)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_decoration"
                r={1}
              >
                <stop stopColor="#006a61" stopOpacity="0.15" />
                <stop offset={1} stopColor="#f7f9fb" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </form>
</main>

    </div>
  )
}

export default PostInternship