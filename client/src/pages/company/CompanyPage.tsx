import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useJobs } from "@/context/JobsContext";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AlphaCase from "../../../utils/AlphaCase";
import { useCompany } from "@/context/CompanyContext";

interface Company {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  companyStatus: string;
  jobs: { title: string, tags: string[], location: string, type: string, salaryMin: number, salaryMax: number }[];
  _count: { jobs: number };
}

interface Job {
  id: number;
  title: string;
  tags: string[];
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
}

const CompanyPage = () => {
    const location = useLocation();
    const company = location.state;
    const {companyData} = useCompany();
    const navigate = useNavigate();
    console.log(company)
  return (
    <>
      <div>
        <Navbar />
      <main className="max-w-max_width mx-auto px-margin py-md my-15">
  {/* Breadcrumbs */}
  
  {/* Hero Header */}
  <header className="relative mb-lg">
    <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
      <img
        className="w-full h-full object-cover"
        data-alt="A sprawling, ultra-modern corporate campus featuring glass-walled buildings reflecting a clear blue sky. Lush green landscaping with manicured lawns and walking paths surrounds the architecture. The scene is bright and airy, captured in a high-resolution professional architectural photography style, evoking a sense of innovation and global scale. Soft sunlight illuminates the textures of the stone and glass."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqBgyjyvHtxw_Hs_gqwibBG07gIEQfVY6iasCnhwEmBt6HaLX3FirjMfvt199yvtoQXpYic9uxgg_R8AjQN_vQkhp3M79SNyjLh9Ao-kCGzslGnr1-VU1tk6VxkwjFfU8ugKHrfr_CjSCWlFlmrlLHUva2svd1ymyVBIZsmoujEQTuP6gmTCQJkeWYDy_RULXZv2eD0JImYWf0tzZHlOOOLUuJwC6hSYZTEh7o4FUoqTpQj0U4CVXkIfSlymrOLO0gQx6PBA_5bXs"
      />
    </div>
    <div className="relative -mt-15 px-md z-20 flex flex-col md:flex-row items-end justify-between gap-md">
      <div className="flex items-end gap-md">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl shadow-lg p-base flex items-center justify-center border-4 border-surface-container-lowest">
          <img
            className="w-3/4 h-3/4 object-contain"
            data-alt="The official Google 'G' logo, rendered in its iconic four-color palette of blue, red, yellow, and green. The logo is set against a clean, brilliant white background within a rounded square container. The lighting is flat and graphic, emphasizing the bold primary colors and professional branding of a world-leading technology firm."
            src={company?.logo}
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-xs">
            <h1 className="text-amber-800 text-[2rem] font-bold">
              {company?.name}
            </h1>
            <span
              className="material-symbols-outlined text-[#4285F4]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              verified
            </span>
          </div>
          <p className="text-body-lg text-white/90 md:text-on-surface-variant">
            {AlphaCase(company?.category)} Company
          </p>
          <div className="flex items-center gap-sm mt-xs">
            <span className="flex items-center gap-base text-white md:text-on-surface-variant text-body-sm">
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>{" "}
              {company?.location}
            </span>
            <span className="flex items-center gap-base text-white md:text-on-surface-variant text-body-sm">
              <span
                className="material-symbols-outlined text-[18px] text-[#FBBC05]"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>{" "}
              4.5 (12.4K Reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-sm mb-2">

        <Link to={company?.website} target="_blank" className="bg-surface-container-lowest border border-outline-variant text-on-surface px-lg py-3 rounded-xl font-label-strong flex items-center gap-xs hover:bg-surface-container-low transition-all">
          Visit Website{" "}
          <span className="material-symbols-outlined text-[18px]">
            open_in_new
          </span>
        </Link>
      </div>
    </div>
  </header>
  {/* Metadata Cards */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-lg">
    <div className="bg-surface-container-lowest p-md rounded-xl card-shadow flex items-center gap-md">
      <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
        <span className="material-symbols-outlined text-primary">
          calendar_today
        </span>
      </div>
      <div>
        <p className="text-body-sm text-on-surface-variant">Founded</p>
        <p className="font-h3 text-h3">1998</p>
      </div>
    </div>
    <div className="bg-surface-container-lowest p-md rounded-xl card-shadow flex items-center gap-md">
      <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center">
        <span className="material-symbols-outlined text-secondary">groups</span>
      </div>
      <div>
        <p className="text-body-sm text-on-surface-variant">Employees</p>
        <p className="font-h3 text-h3">10,000+</p>
      </div>
    </div>
    <div className="bg-surface-container-lowest p-md rounded-xl card-shadow flex items-center gap-md">
      <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center">
        <span className="material-symbols-outlined text-tertiary">
          corporate_fare
        </span>
      </div>
      <div>
        <p className="text-body-sm text-on-surface-variant">Industry</p>
        <p className="font-h3 text-h3">Technology</p>
      </div>
    </div>
    <div className="bg-surface-container-lowest p-md rounded-xl card-shadow flex items-center gap-md">
      <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center">
        <span className="material-symbols-outlined text-primary">
          location_city
        </span>
      </div>
      <div>
        <p className="text-body-sm text-on-surface-variant">Headquarters</p>
        <p className="font-h3 text-h3 text-body-md leading-tight">
          {company?.location}
        </p>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
    {/* Left Column */}
    <div className="lg:col-span-4 space-y-lg">
      {/* About Section */}
      <section className="bg-surface-container-lowest p-md rounded-xl card-shadow">
        <h2 className="font-h2 text-h2 mb-md">About {company?.name}</h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          {company?.description}
        </p>
        <button className="mt-md text-secondary font-label-strong flex items-center gap-xs hover:underline">
          Show more{" "}
          <span className="material-symbols-outlined text-[18px]">
            expand_more
          </span>
        </button>
      </section>
      {/* Tech Stack */}
      <section className="bg-surface-container-lowest p-md rounded-xl card-shadow">
        <h2 className="font-h2 text-h2 mb-md">Tech Stack</h2>
        <div className="grid grid-cols-4 gap-md">
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The React.js logo, a cyan atomic symbol, presented as a clean vector graphic on a light neutral background. Minimalist design consistent with a professional tech stack listing."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrRDINu25Uva5C_2x76SpX6Hzfy3Ls-HYFy_7fKZHcvkrMtX0l19-NOpxz3CCnZgeLAuknnzEtLyb4ITD6F6CT7oUFMFJv_A387XhZ7g8u5V79nQMfZiy0n3mDcU9x0Jcla0rGKwLzKJSKvbo75sVbIkqdHGruGrEQ1uJcqoldyRu4hirR8n843wtdpC6DsmoMZ6pAicAQJu8BHSYg_ufyAJQs0Ke5c0BwpHbfB7x3udSVvKTNfmgHieDDvKhIQemtgDeSTQU77p4"
              />
            </div>
            <span className="text-label-caps font-label-caps">React</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Node.js logo, a green hexagonal icon, presented as a clean vector graphic on a light neutral background. Part of a set of technology icons."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAXUsFYq2NNvnGExBm5q3wyIS93o-_uEV5F-DTQOmmK5-nWlX-mH3Skf7UTOx1r0-rUkmoFIAhwOrcZCTytswUW7WaCjeoO0ulppThJCghEwSKWBOVVAuXPBG_BcPca4Xr37dwSgtpgyTy2adH7t_HkO6uQjUYmpqKdnJwD8pl0N4V3SgXmFekaGLe8P_kKaNgXdl6gByi7ZkrIx3AU38j0IfRLQjSsFhXQZiA6-Q1C5fuLGJjmUgQ1LIEgP5MWgK0mPtkt6iMpko"
              />
            </div>
            <span className="text-label-caps font-label-caps">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Python programming language logo, blue and yellow intertwined snakes, presented as a high-quality icon."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMnOgV6BUn-6jqi_guHQf6I8DQT_zYJib2KsjoWZnk0TlNaLFgM-yOgrjnhACV88e1VU73zKZGUfe4B8X3ca22yTUiC6Z3eZZqTSEn2n9xIp-26U8J9NMB1uzXmbWCOuAS6osYnKxm4p4zTdHvs93XZZKgerJbTMuAcSfip-1xkmpwBcPScU6DXr4uYW_2aSQEmwLxN6g01x5FYc2CeYacL1iogxTIAzTRiRf53AJueFUzc115qJva4Qf_F36ZqI6UKngHowtuPUw"
              />
            </div>
            <span className="text-label-caps font-label-caps">Python</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Java logo, a steaming coffee cup icon in red and blue tones, rendered cleanly for a UI tech stack grid."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlRegBWcYaChnQ9BZD3ZT5PyiU3gQLyMVazavL4i-ZAoqMFiDZxfhIo3PXJzMb9fBUpqY8DS6p4rU7-1cfjmX-aYaTRWTtHY_ZqwO8UFAcUIndbKfIaDAuE25lE6YaJycERuBaEc-8rrM-dtpkS1l0CEeeghHOH7iKaJNCxM_3Nr_s6chy5yQ9mrPX80yprqeAxBHKVu_MkxzaouPxNwXu-x_ZzEyw28pieSrzmUzNZfxT-ss16S5e7_1M-zNvYk422Z6bXEhnidY"
              />
            </div>
            <span className="text-label-caps font-label-caps">Java</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Amazon Web Services AWS logo in black with a yellow orange arrow, formatted for a professional tech stack display."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXp588rlIR2T5Qpz96HEMrVW0mas_OkyYs_Yd7Z57Bf2E2evIOT9Ot0i9G7v1AVrGnGSk4ORmZZslwchjC4K-mhLt7gO4xuUVykN44TaWrpPn7mYAV-XEdL4Y37_gfteyHyhUy1PfbZhP5EhyCuWpMqsqPQi3OpqFt0tY_wqKADS1MydD9wTaL1EhHaBP8ViDf-mt_XugMYuIsBDRWmV0Uq7NJPKV_1ji0kDp9zFyxORcpVtSb6Ns7y9enApd_drE0s7TMG7f55vQ"
              />
            </div>
            <span className="text-label-caps font-label-caps">AWS</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Google Cloud Platform logo, a multi-colored cloud icon, rendered for a professional dashboard listing."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTm4UClVQ0XmhniKEKG7l4IBwL4IJOseotqHP5JtCKtPWKl3bmBfutExzuBtRwBq6KX2h2kCR53_xTqaiN9AduKpgHQ2N1m6RAUHLbe5E3YCn2kjDHOAU54wDiTSNmkHcAhT-MblhGDiPsztHapBl8rqlJF7hOflNJqUl-CdOJfnFRFW9oJvrvqzhfBF6rSrlT_JAnm6CDtpB5pP4vtP4eUOAw5xbyxSZlaAQwKKOtlIbDOm-hc9eOON1GPccqZpWmFgwLW588xkA"
              />
            </div>
            <span className="text-label-caps font-label-caps">GCP</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Docker logo, a blue whale carrying containers, presented as a clean graphic icon."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4NGEDIU6-RbToTQIgdNjfZmTbrKWXcVSrSth8RhWymLJEbVXpBJjLkCjeEzOwfECm1gw9XZDq2lXJLKfV1egT55VDPoLIGRT3QZMw7bTzSAoNH8wcvD7GrE5uffcrl9o_QfRNV5N-R434d-4S3-DIdL4__HXSQGN7j6aNrqMrd922flgDrI4N8QO7VncjJIN-Lby0qZnoKXj2I5owFiSBDqDnS0HB3U_vKJG8odfHT5UQoLnoBbjmd6PkdGbaGV8MZndXlZS5iaw"
              />
            </div>
            <span className="text-label-caps font-label-caps">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <div className="w-12 h-12 p-2 bg-surface-container-low rounded-lg flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                data-alt="The Kubernetes logo, a blue heptagon wheel, presented for a technology stack overview."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMxYLoq03s67T_zNzyLikyrGn4i0z2r60UhAml-DdCinkAvf8T5mJkTTv8Oe7oFhw5_00cLiTd1gBrvPMA61lNTiNYhqw1WGaIg2fH_ecgESfWFPainnzICYpS3KjHwclgell7SvjcWibDn926jj1UQxOw17yzP8WE9slkTXb32BtSXQSizaxhiZzljfGXxChVHT4kMLGZcj3dADP4Ka30BKddbm-MFFS-0osvdrGvAMg2zX3w79NXQtZW0AxxuSdZ0Kx8l9DcSRQ"
              />
            </div>
            <span className="text-label-caps font-label-caps">Kubernetes</span>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className="bg-surface-container-lowest p-md rounded-xl card-shadow">
        <h2 className="font-h2 text-h2 mb-md">Benefits &amp; Perks</h2>
        <ul className="space-y-sm">
          <li className="flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary">
              schedule
            </span>
            <span className="text-body-md">Flexible Work Hours</span>
          </li>
          <li className="flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary">
              home_work
            </span>
            <span className="text-body-md">Remote Work</span>
          </li>
          <li className="flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary">
              health_and_safety
            </span>
            <span className="text-body-md">Health Insurance</span>
          </li>
          <li className="flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary">
              school
            </span>
            <span className="text-body-md">Learning &amp; Development</span>
          </li>
          <li className="flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary">
              restaurant
            </span>
            <span className="text-body-md">Free Food &amp; Snacks</span>
          </li>
          <li className="flex items-center gap-md">
            <span className="material-symbols-outlined text-secondary">
              payments
            </span>
            <span className="text-body-md">Annual Bonus</span>
          </li>
        </ul>
      </section>
    </div>
    {/* Right Column */}
    <div className="lg:col-span-8 space-y-lg">
      {/* Open Jobs */}
      <section className="bg-surface-container-lowest p-md rounded-xl card-shadow">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-h2 text-h2">Active Job Openings ({company?._count.jobs})</h2>
          <a
            className="text-secondary font-label-strong hover:underline"
            href="#"
          >
            View All Jobs
          </a>
        </div>
        <div className="space-y-md">
          {/* Job Item 1 */}
          {company?.jobs.map((job: Job) => {
            return (
              <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-md border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors group">
              <div className="flex gap-md">
              <div className="w-12 h-12 bg-primary-fixed/50 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">
                  code
                </span>
              </div>
              <div>
                <h3 className="font-h3 text-h3 group-hover:text-secondary transition-colors">
                  {job.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant mb-xs">
                  {job.tags.join(", ")}
                </p>
                <div className="flex items-center gap-sm text-body-sm text-on-surface-variant">
                  <span className="flex items-center gap-base">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>{" "}
                    {job.location}
                  </span>
                  <span className="flex items-center gap-base">
                    <span className="material-symbols-outlined text-[16px]">
                      work
                    </span>{" "}
                    {AlphaCase(job.type)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-md md:mt-0 flex items-center justify-between md:justify-end gap-lg">
              <span className="text-secondary font-bold font-h3">
                ₹{job.salaryMin/100000} - ₹{job.salaryMax/100000} LPA
              </span>
              <button className="bg-[#4285F4] text-white px-md py-2 rounded-lg font-label-strong hover:opacity-90">
                Apply Now
              </button>
            </div>
          </div>
            )
          })}
            
        </div>
        <button className="w-full mt-md py-3 text-secondary font-label-strong flex items-center justify-center gap-xs hover:bg-surface-container-low rounded-xl transition-all">
          View all 5 open positions{" "}
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </section>
      {/* Life at Google */}
      <section className="bg-surface-container-lowest p-md rounded-xl card-shadow">
        <h2 className="font-h2 text-h2 mb-md">Life at {company?.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="group">
            <div className="aspect-video rounded-lg overflow-hidden mb-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="A brightly lit, colorful open-plan office space at a modern tech company. Employees are seen in the background working at standing desks. In the foreground, there are comfortable lounge areas with vibrant yellow and blue sofas, potted plants, and modern art on the walls. The atmosphere is energetic and innovative, characterized by high-end interior design and warm, natural light."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqFUx1JMwHhdrRayM3GtYnheEEw89SHL7wzpsxm5iiA1ohGbZ3QsZiF6DMCpQTs0zBDD4Zsb2TndPX5k4HxFQk0zW9eHAuN2MxcsvivKAbhhMnq57vFLL4wYC8DdbkmrgLnLbKxmYDH2lmRpBPBgme4ANkleCIqORbQo8J2l-wBzqYGyjbZEg9OSEY_k58TbHLb5N8nGkQdfhG3jl8-zcBosl8DYk4JjBNxfLSlPs9axUNob_sAwY3VChNSszX4JtZ2TffDTvkDI0"
              />
            </div>
            <div className="flex items-center gap-xs text-body-sm font-semibold">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                psychology
              </span>{" "}
              Innovation driven culture
            </div>
          </div>
          <div className="group">
            <div className="aspect-video rounded-lg overflow-hidden mb-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="A diverse group of three young professionals sitting around a laptop in a bright, modern meeting space. They are smiling and engaged in a collaborative discussion. The background is slightly blurred, showing a high-tech office environment with clean lines and soft lighting. The mood is positive, focused, and professional, suggesting a rewarding work experience."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3rqp3xK2LoYA50_LSF9t8fU4y-rrZmROEAmO_WDUMpgWaLmZbYdVncd6qiaI5Jb6MakxHGi1r1YxA8_PHwRC2wXqLiHvkpZwxcL-UxFS68HFndU4ubOlsLmfxhypNqtE7lgWM1hgT55YYTxA_9xlWF-3wFNfe_ajc4-kVsukY68xfQmqXTIq3DINKHsvg544RT4Ztzx102UwtPYR50kS8E8SIaQiIAFBO8j00j9cX2P8FOKpYkIngUHwcRAVW6MrlrP7ZEJVAZ5Q"
              />
            </div>
            <div className="flex items-center gap-xs text-body-sm font-semibold">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                hub
              </span>{" "}
              Work on impactful products
            </div>
          </div>
          <div className="group">
            <div className="aspect-video rounded-lg overflow-hidden mb-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="A wide-angle shot of a communal kitchen and social area within a technology headquarters. Large windows offer a view of greenery outside. There are long wooden tables, a high-end coffee station, and employees casually interacting. The Google logo is subtly visible on a wall. The lighting is bright and inviting, showcasing a healthy work-life balance and community-focused environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWNBOGd0k5EI-fudSo25V2Kt6wWpN9kCpAFuk3l_xbx-lgWCgYNtrR3bnhQznhJ23HUylEdLbBgCBvSbn1XvXjUq_fJPg4cdqKq32pDyV4p6psymLIFt_tXdeS1I2dnvIyFy_DfjbR2dfKaQKyTw34rUauu_TZvAtEVhuBeTPqAqLw8mvD3y1HlpcjVWdKf_VteoJ8cJekDihuu2byebnP7qm6n67WJlsALlo35ke4meOrevnF5SC8iYfPqALmE1j9T2jU63Dzpy4"
              />
            </div>
            <div className="flex items-center gap-xs text-body-sm font-semibold">
              <span className="material-symbols-outlined text-secondary text-[18px]">
                diversity_3
              </span>{" "}
              Collaborative &amp; inclusive environment
            </div>
          </div>
        </div>
      </section>
      {/* Employee Review */}
      <section className="bg-surface-container-lowest p-md rounded-xl card-shadow border-l-4 border-secondary">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-h2 text-h2">Employee Reviews</h2>
          <a
            className="text-secondary font-label-strong hover:underline"
            href="#"
          >
            View All Reviews
          </a>
        </div>
        <div className="flex gap-md">
          <img
            className="w-16 h-16 rounded-full object-cover shrink-0"
            data-alt="A professional headshot of a young South Asian man in his late 20s, smiling warmly. He is wearing a clean, casual blue shirt. The background is a soft-focus office environment. The image is circular and framed with a thin white border, suggesting a trustworthy and relatable employee profile for a career platform."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzsLO-U2udRMLWHXb9SATxKOPFDoileO9x3Jvl0-l4PyJlabzoKy6V9t_DBvPOiDb4jQeidSPfRbcxaZ_xE36uigYhihdbXCDC7EaC2M17qF1xTPE7NP2gfRpyMa_L0hxVFS5-DWqEGSNCs3x5EaTkxgoQx7k_B5mUtRAUGVgZ3L48fgqWeOOMJmCAzGnQMcNSmxzx1DUKNGt4jPEn67zUxYn7xdJ-057yva5zaQ1ZefXxN0TYLpBixLZo9zO5B8-ASR1EZuDuEtY"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-xs">
              <div>
                <p className="font-label-strong text-body-md">Rahul Sharma</p>
                <p className="text-body-sm text-on-surface-variant">
                  Software Engineer • 2d ago
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-[#FBBC05]">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                  <span className="ml-sm text-on-surface font-bold text-h3">
                    5.0
                  </span>
                </div>
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant italic mb-md leading-relaxed">
              "Great work environment and amazing learning opportunities.
              Work-life balance is excellent. The scale of problems we solve
              here is truly global."
            </p>
            <div className="flex flex-wrap gap-sm">
              <span className="bg-secondary-container/20 text-secondary px-sm py-1 rounded-full text-label-caps">
                Work Culture
              </span>
              <span className="bg-secondary-container/20 text-secondary px-sm py-1 rounded-full text-label-caps">
                Learnings
              </span>
              <span className="bg-secondary-container/20 text-secondary px-sm py-1 rounded-full text-label-caps">
                Growth
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  {/* Similar Companies */}
  <section className="mt-xl">
    <div className="flex items-center justify-between mb-md px-base">
      <h2 className="font-h2 text-h2">Similar Companies</h2>
      <Link to="/companies" className="text-secondary font-label-strong hover:underline" href="#">
        View All Companies
      </Link>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-gutter" >
      {/* Microsoft */}
      {companyData.slice(0, 6).map((company : Company) => {
        return (
          <div key={company.id} onClick={() => navigate(`/company/${company.id}`, { state: company })} className="bg-surface-container-lowest p-md rounded-xl card-shadow border border-transparent hover:border-secondary transition-all flex flex-col items-center cursor-pointer">
        <div className="w-12 h-12 mb-sm flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            data-alt="Microsoft corporate logo, the four-colored square windows icon, rendered as a clean, high-resolution vector for a business directory grid."
            src={company.logo}
          />
        </div>
        <p className="font-label-strong">{company.name}</p>
        <div className="flex items-center gap-base text-body-sm text-on-surface-variant">
          <span
            className="material-symbols-outlined text-[14px] text-[#FBBC05]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>{" "}
          4.4
        </div>
      </div>
        )
      })}
          
      
      
    </div>
  </section>
</main>
    <Footer />
    </div>
    </>
  )
}

export default CompanyPage
