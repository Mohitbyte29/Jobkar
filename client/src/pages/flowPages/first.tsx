import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center px-4 py-xl">
  <div className="w-full max-w-2xl">
    <div className="mb-xs">
      <div className="flex justify-between items-end mb-2">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
          Step 1 of 4
        </span>
        <span className="font-label-strong text-label-strong text-outline">
          25% Complete
        </span>
      </div>
      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
        <div className="h-full bg-secondary w-1/4 rounded-full" />
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant/30 p-8 md:p-12 mt-md">
      <div className="mb-lg">
        <h1 className="font-h1 text-h1 text-primary mb-2">
          Let's start with the basics
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          How should we address you?
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label
              className="font-label-strong text-label-strong text-on-surface"
              htmlFor="first_name"
            >
              First Name
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all font-body-md text-on-surface"
                id="first_name"
                name="first_name"
                placeholder="e.g. Alex"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="font-label-strong text-label-strong text-on-surface"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all font-body-md text-on-surface"
                id="last_name"
                name="last_name"
                placeholder="e.g. Morgan"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="pt-md">
          <Link to='/second'
            className="w-full bg-primary text-on-primary font-label-strong py-4 px-8 rounded-lg hover:bg-slate-800 transition-all flex justify-center items-center gap-2 group"
            type="submit"
          >
            Continue
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </form>
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="flex -space-x-2">
          <img
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white"
            data-alt="A professional headshot of a diverse woman with a warm, confident smile against a soft, out-of-focus office background. The lighting is bright and natural, reflecting a high-end light-mode corporate aesthetic. The overall mood is welcoming and career-focused, emphasizing professional growth and reliability within the JobKar platform."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrMj_EPmniAt4oTgCjd1vIuus6GhQu1EeN5uv8U1lH1FdkqY9Y20NNChVbjT9NzUNnthmtDMGp7uh-9l7Ve1pzrS0guUY7sicKWANyAJQ6glTswxA50jPAg-5LlUmh3HuqlsbyUbDhnR0mKOgdhIpSvUTMR7n2NuQAA3gSVDBQjXvfOi2Fge6mcYL5BrDc5uWnP_3VPErLjrYYwzGVq4Y0h48OkuxnH18CY1c14Vy8rOGaM3dqhITmcCRyplwC5gdeI6MvH0lLJnQ"
          />
          <img
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white"
            data-alt="A portrait of a professional man in a tailored blazer, looking directly into the camera with an approachable expression. The background is a minimalist, brightly lit workspace with clean lines and a white and soft blue color palette. The image captures a sense of modern professionalism and corporate excellence, aligned with a high-end SaaS recruitment tool."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRNHClvGT0qAVMq6GiJyjOv-ATbzwO7YAUxxgU0gWNox1WgTWcsyjD44PQD35Q9-cwNAze9ikGkV5BgW0_aRnZPmH18o9EyGcQxmDmMnsHx3poKF_HlzVGkNkvYlp0Tkwsqy-DaFTz999CnlQS7bDn_jsK011dRHlDIi4nJJ5NSbnXUjv8X5iPn_RPsnntJm2jWqoGS4KFLZJ-7Nip2t919qOpq6uQMsygGIeh6_tiY9IZbk5iyXIPDH6Ib2jVwxlxF05r-XWsk6s"
          />
          <img
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white"
            data-alt="A high-quality studio portrait of a smiling professional woman with sleek dark hair. The lighting is soft and high-key, creating a clean and modern look that fits perfectly with a minimalist, reliable job platform interface. The background is a neutral light gray, emphasizing the focus on human connection and professional opportunity."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLB1BxzTegpLbKLsZHM4cmuYE291reNaZ2GGaFgSM6MVDEBoUn_U4TUCrq8K-bxuspMajwg2awt1dEmMaC65tFh9YO6KAAmJpagF2MLpBfVdM22IBVNZFY6dryNGly3lSLR0Hy1kW2_OBuw9hSL0YsfxTpbuDNoULoVfXzTSCGRDLdU3WF1sHjMRgQCrwcuZAMkx0OYG1rJ8cfppfv3mb-95ZT1eCL76An_2BSMNEaShUDHqSGdO4m_UKBA3jMrRkd2IKs0OwSZfI"
          />
        </div>
        <p className="font-body-sm text-body-sm text-outline">
          Join 10k+ professionals on JobKar
        </p>
      </div>
    </div>
    <div className="mt-8 flex justify-center">
      <button className="font-label-strong text-label-strong text-slate-500 hover:text-primary transition-colors flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">lock</span>
        Your data is secure and private
      </button>
    </div>
  </div>
</main>
</div>
  )
}

export default First
