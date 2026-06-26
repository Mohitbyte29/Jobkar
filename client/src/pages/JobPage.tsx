import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { IndianRupee } from "lucide-react";
import toTitleCase from "../../utils/titleCase";

const JobPage = () => {
    const location = useLocation();
    const user = location.state;
    console.log(user.company.website);
  return (
      <div>
        <Navbar/>
      <main className="max-w-max_width mx-auto px-margin py-xl min-h-screen">
  {/* Hero / Context Area (Asymmetric Layout) */}
        <h1 className="text-5xl font-semibold flex items-center justify-center my-5 text-center">{user.title}</h1>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg max-w-max_width mx-auto">
    {/* Main Content: Job Detail Card */}
    <div className="lg:col-span-8 space-y-md">
      {/* The High-Fidelity Job Listing Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] p-md border border-surface-variant/30">
        {/* Card Header: Company Logo & Basic Info */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-md mb-md">
          <div className="flex gap-md">
            <div className="w-16 h-16 rounded-xl bg-surface-container-high flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                alt="Insight AI Logo"
                className="w-full h-full object-cover"
                data-alt="A minimalist and high-tech corporate logo for an artificial intelligence company called Insight AI. The logo features abstract geometric patterns suggesting neural networks or data flow, set against a clean white background. The aesthetic is modern, professional, and sophisticated, reflecting institutional stability and cutting-edge technology in a bright, light-mode environment."
                src={user.company.logo}
              />
            </div>
            <div>
              <h1 className="font-h1 text-h1 text-primary mb-base">
                {user.title}
              </h1>
              <div className="flex items-center gap-xs text-on-surface-variant">
                
                <span className="flex items-center gap-1 font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    location_on
                  </span>
                  {user.location} (Remote)
                </span>
                <span className="text-outline">•</span>
                <span className="font-body-sm text-body-sm">3 hours ago</span>
              </div>
            </div>
          </div>
         
        </div>
        {/* Tags/Chips Section */}
        <div className="flex flex-wrap gap-xs mb-lg">
          <div className="bg-surface-container-high text-on-surface-variant px-sm py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">work</span>
            <span className="font-label-strong text-label-strong">
              {toTitleCase(user.type)}
            </span>
          </div>
          <div className="bg-surface-container-high text-on-surface-variant px-sm py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              psychology
            </span>
            <span className="font-label-strong text-label-strong">
              {toTitleCase(user.category)}
            </span>
          </div>
          <div className="bg-surface-container-high text-on-surface-variant px-sm py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              terminal
            </span>
            <span className="font-label-strong text-label-strong">{user.tags[0]}</span>
          </div>
          <div className="bg-surface-container-high text-on-surface-variant px-sm py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              terminal
            </span>
            <span className="font-label-strong text-label-strong">{user.tags[1]}</span>
          </div>
          <div className="bg-surface-container-high text-on-surface-variant px-sm py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              terminal
            </span>
            <span className="font-label-strong text-label-strong">{user.tags[2]}</span>
          </div>
          
        </div>
        {/* Job Description Teaser */}
        <div className="border-t border-outline-variant pt-lg mb-lg">
          <h3 className="font-h3 text-h3 text-primary mb-sm">
            Job Description
          </h3>
          <div className="space-y-md text-on-surface-variant leading-relaxed">
            <p className="">
              As a Senior Data Scientist at Insight AI, you will lead the
              development of next-generation predictive models that drive
              strategic decision-making for our global partners. You'll work at
              the intersection of big data, deep learning, and business
              intelligence to solve complex challenges in real-time.
            </p>
            <p className="">
              We are looking for a visionary leader who can bridge the gap
              between complex mathematical theory and practical business
              application. You will be responsible for architecting the data
              strategy that powers our core products, ensuring scalability and
              accuracy at every step of the pipeline.
            </p>
          </div>
          <div className="mt-lg">
            <h4 className="font-label-strong text-label-strong text-primary mb-sm uppercase tracking-wider">
              What You'll Do
            </h4>
            <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Design and implement robust ML pipelines in production
                environments using state-of-the-art orchestration tools.
              </li>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Mentor junior team members and establish best practices for data
                engineering and model governance.
              </li>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Collaborate with product leads to define data-driven product
                roadmaps and identify new opportunities for AI integration.
              </li>
              <li className="flex items-start gap-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Conduct rigorous A/B testing and statistical analysis to
                validate model performance and business impact.
              </li>
            </ul>
          </div>
          <div className="mt-lg">
            <h4 className="font-label-strong text-label-strong text-primary mb-sm uppercase tracking-wider">
              Technical Skills &amp; Requirements
            </h4>
            <div className="grid grid-cols-2 gap-sm">
              <div className="bg-surface-container-low p-sm rounded-xl">
                <span className="font-label-strong block">Languages</span>
                <span className="text-body-sm">Python, SQL, R</span>
              </div>
              <div className="bg-surface-container-low p-sm rounded-xl">
                <span className="font-label-strong block">Frameworks</span>
                <span className="text-body-sm">
                  PyTorch, TensorFlow, Scikit-learn
                </span>
              </div>
              <div className="bg-surface-container-low p-sm rounded-xl">
                <span className="font-label-strong block">Infrastructure</span>
                <span className="text-body-sm">Kubernetes, Docker, AWS</span>
              </div>
              <div className="bg-surface-container-low p-sm rounded-xl">
                <span className="font-label-strong block">Modeling</span>
                <span className="text-body-sm">
                  NLP, Computer Vision, Data Modeling
                </span>
              </div>
            </div>
          </div>
          <div className="mt-lg">
            <h4 className="font-label-strong text-label-strong text-primary mb-sm uppercase tracking-wider">
              What We Offer
            </h4>
            <p className="text-on-surface-variant mb-sm">
              We believe in taking care of our people so they can focus on
              solving the world's hardest problems.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-xs text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary">
                  payments
                </span>
                Competitive Equity Package
              </li>
              <li className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary">
                  health_and_safety
                </span>
                Premium Health Coverage
              </li>
              <li className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary">
                  flight_takeoff
                </span>
                Unlimited PTO
              </li>
              <li className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary">
                  laptop_mac
                </span>
                Latest Hardware Stipend
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Footer Area: Salary & Actions */}
        <div className="bg-surface-container-low rounded-xl p-sm flex flex-col md:flex-row justify-between items-center gap-md">
          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
              COMPENSATION
            </span>
            <span className="font-h2 text-h2 text-primary flex">
              <IndianRupee width={15}/>{user.salaryMin/1000}k - <IndianRupee width={15}/>{user.salaryMax/1000}k{" "}
              <small className="text-[1rem] font-normal text-on-surface-variant">
                / year
              </small>
            </span>
          </div>
          <div className="flex gap-sm w-full md:w-auto">
            <button className="flex-1 md:flex-none border-2 border-secondary text-secondary hover:bg-secondary/5 font-label-strong text-label-strong px-lg py-sm rounded-xl transition-all flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined">bookmark</span>
              Save Job
            </button>
            <button className="flex-1 md:flex-none bg-secondary text-on-secondary hover:opacity-90 font-label-strong text-label-strong px-xl py-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-xs">
              Apply Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bento Grid: Why Join Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-md">
        <div className="bg-surface-container-highest rounded-xl p-md flex flex-col gap-xs">
          <span className="material-symbols-outlined text-secondary text-[32px]">
            diversity_3
          </span>
          <h4 className="font-h3 text-h3">Inclusive Culture</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            We pride ourselves on a diverse environment where every voice
            contributes to our collective intelligence.
          </p>
        </div>
        <div className="bg-primary text-on-primary rounded-xl p-md flex flex-col gap-xs">
          <span className="material-symbols-outlined text-secondary-fixed text-[32px]">
            rocket_launch
          </span>
          <h4 className="font-h3 text-h3">Fast Growth</h4>
          <p className="font-body-sm text-body-sm text-on-primary-container">
            Series B funded with 300% YOY growth. Join us during our most
            exciting scaling phase.
          </p>
        </div>
      </div>
    </div>
    {/* Sidebar: Right Column */}
    <aside className="lg:col-span-4 space-y-md">
  <div className="space-y-sm">
    <h3 className="font-h3 text-h3 text-primary mb-sm px-base">
      Company Information
    </h3>
    <div className="bg-surface-container-lowest p-md rounded-xl border border-surface-variant/30 shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
      <div className="flex justify-between items-start mb-md">
        <div>
          <img
            src={user.company.logo}
            alt={user.company.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <h4 className="font-h2 text-h2 text-primary">Insight AI</h4>
          <p className="text-secondary font-label-strong text-label-strong">
            Artificial Intelligence
          </p>
        </div>
        <Link
          to={user.company.website}
          target="_blank"
          className="text-secondary hover:underline flex items-center gap-xs font-label-strong text-label-strong"
        >
          Visit Website
          <span className="material-symbols-outlined text-[18px]">
            open_in_new
          </span>
        </Link>
      </div>
      <div className="space-y-sm mb-md">
        <div className="flex items-center gap-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-[20px]">
            location_on
          </span>
          <span className="text-body-sm">New York, NY</span>
        </div>
        <div className="flex items-center gap-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-[20px]">groups</span>
          <span className="text-body-sm">500-1,000 Employees</span>
        </div>
      </div>
      <div className="pt-sm border-t border-outline-variant">
        <p className="text-body-sm text-on-surface-variant leading-relaxed">
          Insight AI is a global leader in predictive analytics and machine
          learning solutions. We help Fortune 500 companies transform their data
          into actionable intelligence through cutting-edge neural network
          architectures.
        </p>
      </div>
    </div>
  </div>
  <h3 className="font-h3 text-h3 text-primary mb-sm px-base">
    Latest Job Postings
  </h3>
  <div className="space-y-sm">
    <div className="bg-surface-container-lowest p-sm rounded-xl border border-surface-variant/30 hover:shadow-md transition-all">
      <div className="flex gap-sm mb-xs">
        <div className="w-10 h-10 rounded bg-surface-container-high flex-shrink-0" />
        <div>
          <h4 className="font-label-strong text-label-strong text-primary">
            Senior Product Designer
          </h4>
          <p className="text-body-sm text-secondary">Stripe</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-body-sm text-on-surface-variant">
          Remote • $140k - $180k
        </span>
        <a
          className="text-secondary font-label-strong text-label-strong hover:underline"
          href="#"
        >
          View
        </a>
      </div>
    </div>
    <div className="bg-surface-container-lowest p-sm rounded-xl border border-surface-variant/30 hover:shadow-md transition-all">
      <div className="flex gap-sm mb-xs">
        <div className="w-10 h-10 rounded bg-surface-container-high flex-shrink-0" />
        <div>
          <h4 className="font-label-strong text-label-strong text-primary">
            Full Stack Developer
          </h4>
          <p className="text-body-sm text-secondary">Vercel</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-body-sm text-on-surface-variant">
          Remote • $120k - $160k
        </span>
        <a
          className="text-secondary font-label-strong text-label-strong hover:underline"
          href="#"
        >
          View
        </a>
      </div>
    </div>
    <div className="bg-surface-container-lowest p-sm rounded-xl border border-surface-variant/30 hover:shadow-md transition-all">
      <div className="flex gap-sm mb-xs">
        <div className="w-10 h-10 rounded bg-surface-container-high flex-shrink-0" />
        <div>
          <h4 className="font-label-strong text-label-strong text-primary">
            Marketing Manager
          </h4>
          <p className="text-body-sm text-secondary">Airbnb</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-body-sm text-on-surface-variant">
          SF • $130k - $175k
        </span>
        <a
          className="text-secondary font-label-strong text-label-strong hover:underline"
          href="#"
        >
          View
        </a>
      </div>
    </div>
  </div>
</aside>

  </div>
</main>


    <Footer/>
    </div>
  )
}

export default JobPage
