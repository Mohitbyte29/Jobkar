import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useNavigate } from "react-router-dom";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const EditProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [industry, setIndustry] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [portFolio, setPortfolio] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [institution, setInstitution] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
  const [startYear, setStartYear] = useState<number | null>(null);
  const [endYear, setEndYear] = useState<number | null>(null);
  const [grade, setGrade] = useState<number | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<any>(null);
  const [coverImage, setCoverImage] = useState<any>(null);

  interface EducationData {
    school: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number | null;
    endYear: number | null;
    grade: number | null;
  }

  const handleSaveChanges = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        "http://localhost:4000/api/me/profile",
        {
          fullName: `${firstname} ${lastname}`,
          phoneNumber,
          city,
          bio,
          country,
          linkedIn: linkedin,
          github,
          portfolio: portFolio,
          profession,
          university: institution,
          industry,
        },
        {
          withCredentials: true,
        },
      );

      const resEducation = await axios.patch(
        "http://localhost:4000/api/me/education",
        {
          school,
          institution,
          degree,
          fieldOfStudy,
          startYear,
          endYear,
          grade,
        },
        {
          withCredentials: true,
        },
      );
      console.log(resEducation.data);
    } catch (error) {
      console.error("Error updating profile:", error);
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  };

  useEffect(() => {
    const handleShowImages = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/me/profile", {
          withCredentials: true,
        });
        setProfilePhoto(res.data.user.avatar);
        setCoverImage(res.data.user.coverImage);
        console.log(profilePhoto);
        console.log(coverImage);
      } catch (err) {
        console.error("Error fetching profile images:", err);
      }
    };

    handleShowImages();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fileInputRef.current?.click();
  };
  const handleCoverClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    coverInputRef.current?.click();
  };
  
  const handleProfilePhotoChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("avatar", file);
    await axios.patch("http://localhost:4000/api/me/avatar", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(file);
    setProfilePhoto(file);
    console.log(profilePhoto);
  };
  const handleCoverImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("coverImage", file);
    await axios.patch("http://localhost:4000/api/me/cover-image", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(file);
    setCoverImage(file);
    console.log(coverImage);
  };

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };
  const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstitution(e.target.value);
  };
  const handleDegreeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDegree(e.target.value);
  };
  const handleFieldOfStudyChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFieldOfStudy(e.target.value);
  };
  const handleStartYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartYear(value === "" ? null : Number.parseInt(value, 10));
  };
  const handleEndYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEndYear(value === "" ? null : Number.parseInt(value, 10));
  };
  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGrade(value === "" ? null : Number.parseFloat(value));
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };
  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Handle bio change
    setBio(e.target.value);
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };
  const handleLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle LinkedIn change
    setLinkedin(e.target.value);
  };
  const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle GitHub change
    setGithub(e.target.value);
  };
  const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle Portfolio change
    setPortfolio(e.target.value);
  };
  const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(e.target.value);
  };
  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustry(e.target.value);
  };
  const coverRef = useRef<HTMLImageElement | null>(null); // parallax cover image
  const sectionRefs = useRef<HTMLElement[]>([]); // scroll-reveal sections
  sectionRefs.current = [];

  const addSectionRef = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Respect users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // --- Locomotive Scroll v5 setup (full-page, window-based) ---
    // v5 is a thin wrapper around Lenis and scrolls the real DOM,
    // so ScrollTrigger works against the default window scroller —
    // no scrollerProxy, data-scroll-container, or data-scroll-section needed.
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        smoothWheel: !prefersReducedMotion,
        lerp: 0.08,
      },
      // Keep GSAP's ScrollTrigger positions in sync on every Lenis scroll tick
      scrollCallback: () => ScrollTrigger.update(),
      // Drive Locomotive's render loop from GSAP's ticker so both stay perfectly in sync
      initCustomTicker: (render) => gsap.ticker.add(render),
      destroyCustomTicker: (render) => gsap.ticker.remove(render),
    });

    gsap.ticker.lagSmoothing(0);

    // --- Parallax on cover image ---
    let parallaxTween: gsap.core.Tween | undefined;
    if (coverRef.current && !prefersReducedMotion) {
      parallaxTween = gsap.fromTo(
        coverRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: coverRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }

    // --- Staggered reveal for each section ---
    const revealTweens = sectionRefs.current.map((section) =>
      gsap.fromTo(
        section,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      ),
    );

    // Let Locomotive recompute its sizing whenever ScrollTrigger recalculates
    const refreshHandler = () => locomotiveScroll.resize();
    ScrollTrigger.addEventListener("refresh", refreshHandler);
    ScrollTrigger.refresh();

    return () => {
      revealTweens.forEach((tween) => tween.scrollTrigger?.kill());
      parallaxTween?.scrollTrigger?.kill();
      ScrollTrigger.removeEventListener("refresh", refreshHandler);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <main className="max-w-max_width mx-auto px-margin py-xl">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Sidebar Navigation */}
          {/* Main Edit Content */}
          <form
            onSubmit={handleSaveChanges}
            className="flex-1 space-y-md w-full"
          >
            {/* Header / Media Section */}
            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] overflow-hidden"
            >
              <div className="relative bg-surface-container-high group overflow-hidden w-full aspect-[4/1] rounded-xl">
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                    />
                <button
                  type="button"
                  onClick={handleCoverClick}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-label-strong text-label-strong text-primary flex items-center gap-2 hover:bg-white transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    photo_camera
                  </span>
                  Edit Cover
                </button>
                <input
                  type="file"
                  ref={coverInputRef}
                  onChange={handleCoverImageChange}
                  className="hidden"
                  />
              </div>
              <div className="px-md pb-md mt-6">
                <div className="flex flex-col sm:flex-row items-end gap-md -mt-12 sm:-mt-16 mb-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl border-4 border-white overflow-hidden bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="A professional headshot of a male job seeker in a light-colored business casual outfit. He is smiling warmly against a soft-focus studio background. The visual style is crisp and modern, emphasizing clarity and reliability. The lighting is diffused and natural, highlighting a friendly yet professional demeanor."
                      src={profilePhoto}
                    />
                    <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">
                        add_a_photo
                      </span>
                    </button>
                  </div>
                  <div className="flex-1 pb-2">
                    <button
                      onClick={handleClick}
                      className="px-sm py-2 bg-primary text-on-primary rounded-lg font-label-strong text-label-strong hover:opacity-90 transition-opacity cursor-pointer active:scale-95"
                    >
                      Upload New Photo
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleProfilePhotoChange}
                      className="hidden"
                    />
                    <p className="text-on-surface-variant font-body-sm text-body-sm mt-2">
                      Recommended: Square image, at least 400x400px.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Information */}
            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-md">
                <h3 className="font-h3 text-h3 text-primary">
                  Personal Information
                </h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Manage your basic contact and identity details.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    First Name
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="John"
                    type="text"
                    onChange={handleFirstNameChange}
                    value={firstname}
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Last Name
                  </label>
                  <input
                    onChange={handleLastNameChange}
                    value={lastname}
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Email Address
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="john.doe@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Phone Number
                  </label>
                  <input
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    City
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                      location_on
                    </span>
                    <input
                      onChange={handleCityChange}
                      value={city}
                      className="w-full pl-10 pr-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                      placeholder="San Francisco"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Country
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                      public
                    </span>
                    <select
                      onChange={handleCountryChange}
                      value={country}
                      className="w-full px-9 py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all bg-white"
                    >
                      <option value="">Select Country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>India</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-xs md:col-span-2">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Industry
                  </label>
                  <select
                    onChange={handleIndustryChange}
                    value={industry}
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all bg-white"
                  >
                    <option value="">Select Industry</option>
                    <option>Technology Software</option>
                    <option>Creative Media</option>
                    <option>Marketing</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education Government</option>
                    <option>Business Operations</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Professional Summary */}
            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-md">
                <h3 className="font-h3 text-h3 text-primary">
                  Professional Summary
                </h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  A short bio to introduce yourself to potential employers.
                </p>
              </div>
              <div className="space-y-xs">
                <label className="font-label-strong text-label-strong text-on-surface">
                  About Me
                </label>
                <textarea
                  className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                  placeholder="Experienced Software Engineer with a passion for building scalable web applications..."
                  rows={5}
                  onChange={handleBioChange}
                  value={bio}
                />
              </div>
            </section>

            {/* Career Details */}
            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-md">
                <h3 className="font-h3 text-h3 text-primary">Career Details</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Help us match you with the right opportunities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <div className="space-y-xs md:col-span-3">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Profession
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="Senior Product Designer"
                    type="text"
                    onChange={handleProfessionChange}
                    value={profession}
                  />
                </div>
              </div>
            </section>

            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-md">
                <h3 className="font-h3 text-h3 text-primary">Education</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Your academic background and qualifications.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <div className="space-y-xs md:col-span-1">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    School Name
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="e.g. High School Name"
                    type="text"
                    onChange={handleSchoolChange}
                    value={school}
                  />
                </div>
                <div className="space-y-xs md:col-span-2">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    University Name
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="e.g. Stanford University"
                    type="text"
                    onChange={handleInstitutionChange}
                    value={institution}
                  />
                </div>
                <div className="space-y-xs md:col-span-1">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Degree
                  </label>
                  <select
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all bg-white"
                    onChange={handleDegreeChange}
                    value={degree}
                  >
                    <option value="">Select Degree</option>
                    <option>High School</option>
                    <option>Associate's</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-xs md:col-span-2">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Field of Study
                  </label>
                  <select
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all bg-white"
                    onChange={handleFieldOfStudyChange}
                    value={fieldOfStudy}
                  >
                    <option value="">Select Field of Study</option>
                    <option>Computer Science</option>
                    <option>Business Administration</option>
                    <option>Mechanical Engineering</option>
                    <option>Psychology</option>
                    <option>Economics</option>
                  </select>
                </div>

                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Grade / GPA
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="e.g. 3.8/4.0"
                    type="number"
                    step="0.1"
                    onChange={handleGradeChange}
                    value={grade ?? ""}
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    Start Year
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="YYYY"
                    type="number"
                    onChange={handleStartYearChange}
                    value={startYear ?? ""}
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-strong text-label-strong text-on-surface">
                    End Year
                  </label>
                  <input
                    className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                    placeholder="YYYY (or Expected)"
                    type="number"
                    onChange={handleEndYearChange}
                    value={endYear ?? ""}
                  />
                </div>
              </div>
            </section>
            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-md">
                <h3 className="font-h3 text-h3 text-primary">Projects</h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Show Your Projects and Work Samples to Potential Employers.
                </p>
              </div>
              <button className="px-sm py-2 bg-primary text-on-primary rounded-lg font-label-strong text-label-strong hover:opacity-90 transition-opacity active:scale-95 cursor-pointer">
                Add Project
              </button>
            </section>

            {/* Social Links */}
            <section
              ref={addSectionRef}
              className="bg-surface-container-lowest p-md rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="mb-md">
                <h3 className="font-h3 text-h3 text-primary">
                  Social Profiles
                </h3>
                <p className="text-on-surface-variant font-body-sm text-body-sm">
                  Where else can recruiters find your work?
                </p>
              </div>
              <div className="space-y-md">
                <div className="flex items-center gap-md">
                  <div className="w-10 flex justify-center">
                    <span className="material-symbols-outlined text-primary">
                      link
                    </span>
                  </div>
                  <div className="flex-1 space-y-xs">
                    <label className="font-label-strong text-label-strong text-on-surface">
                      LinkedIn
                    </label>
                    <input
                      onChange={handleLinkedinChange}
                      value={linkedin}
                      className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                      placeholder="https://linkedin.com/in/username"
                      type="url"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-10 flex justify-center">
                    <span className="material-symbols-outlined text-primary">
                      code
                    </span>
                  </div>
                  <div className="flex-1 space-y-xs">
                    <label className="font-label-strong text-label-strong text-on-surface">
                      GitHub
                    </label>
                    <input
                      onChange={handleGithubChange}
                      value={github}
                      className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                      placeholder="https://github.com/username"
                      type="url"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-10 flex justify-center">
                    <span className="material-symbols-outlined text-primary">
                      language
                    </span>
                  </div>
                  <div className="flex-1 space-y-xs">
                    <label className="font-label-strong text-label-strong text-on-surface">
                      Portfolio
                    </label>
                    <input
                      onChange={handlePortfolioChange}
                      value={portFolio}
                      className="w-full px-sm py-3 border border-outline-variant rounded-lg font-body-md text-body-md input-focus-ring transition-all"
                      placeholder="https://yourportfolio.com"
                      type="url"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Action Footer */}
            <div className="flex items-center justify-end gap-md pt-md border-t border-outline-variant">
              <button
                className="px-md py-3 text-on-surface-variant font-label-strong text-label-strong hover:bg-surface-container-high rounded-lg transition-all"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-xl py-3 bg-primary text-on-primary font-label-strong text-label-strong rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  check
                </span>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default EditProfile;
