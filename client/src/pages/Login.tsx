import { SignIn } from '@clerk/react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      console.log('Login successful:', res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  }
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log('Email changed:', e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log('Password changed:', e.target.value);
  };

  return (
    <>
  {/* TopNavBar Suppression: Logic dictates no global nav on transactional pages. 
   However, we include a minimal branding header to maintain identity. */}
  <header className="h-16 flex items-center px-6 md:px-margin bg-white dark:bg-slate-900 shadow-sm">
    <div className="max-w-max_width w-full mx-auto flex items-center">
      <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
        JobKar
      </span>
    </div>
  </header>
  <main className="flex-grow flex flex-col items-center justify-center overflow-hidden">
    {/* Left Side: Visual Anchor (Desktop Only) */}
    {/* Right Side: Login Content */}
    <div className="w-full flex flex-grow items-center justify-center p-6 md:p-xl bg-surface">
      <div className="w-full max-w-[440px] flex flex-col">
        {/* Welcome Text */}
        <div className="mb-xl">
          <h1 className="font-h1 text-h1 text-on-background mb-base">
            Welcome Back
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Please enter your details to sign in to your account.
          </p>
        </div>
        {/* Social Sign-in Buttons */}
        <div className="grid grid-cols-1 gap-sm mb-lg">
          <button onClick={() => {
            window.open('http://localhost:4000/api/auth/google', 'http://localhost:4000/api/auth/google/callback');
          }} className="flex items-center justify-center gap-xs h-12  border border-outline-variant rounded-lg font-label-strong hover:bg-surface-container hover:text-black transition-colors active:opacity-80 bg-black text-white cursor-pointer active:scale-[0.98] ">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
        {/* Divider */}
        <div className="flex items-center gap-sm mb-lg">
          <div className="flex-grow h-[1px] bg-outline-variant" />
          <span className="font-label-caps text-outline uppercase tracking-widest">
            OR EMAIL
          </span>
          <div className="flex-grow h-[1px] bg-outline-variant" />
        </div>
        {/* Form */}
        <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-xs">
            <label
              className="font-label-strong text-on-surface"
              htmlFor="email" 
            >
              Email Address
            </label>
            <input
              className="h-12 px-sm border border-outline rounded bg-white text-on-background focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline-variant"
              id="email"
              placeholder="name@company.com"
              type="email" onChange={handleEmailChange} value={email}
            />
          </div>
          <div className="flex flex-col gap-xs">
            <div className="flex justify-between items-center">
              <label
                className="font-label-strong text-on-surface"
                htmlFor="password"
              >
                Password
              </label>
              <a
                className="font-label-strong text-secondary hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                className="w-full h-12 px-sm border border-outline rounded bg-white text-on-background focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline-variant"
                id="password"
                placeholder="••••••••"
                type="password" onChange={handlePasswordChange} value={password}
              />
              <button
                className="absolute right-sm top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                type="button"
              >
                <span className="material-symbols-outlined text-xl">
                  visibility
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-xs">
            <input
              className="w-4 h-4 rounded border-outline text-secondary focus:ring-secondary"
              id="remember"
              type="checkbox"
            />
            <label
              className="font-body-sm text-on-surface-variant"
              htmlFor="remember"
            >
              Remember for 30 days
            </label>
          </div>
          <button
            className="h-12 bg-primary text-white font-label-strong rounded hover:opacity-90 active:opacity-80 transition-all flex items-center justify-center gap-xs shadow-sm"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="mt-lg text-center">
          <p className="font-body-md text-on-surface-variant">
            Don't have an account?
            <Link
              className="font-label-strong text-secondary hover:underline"
              to="/register"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  </main>
  {/* Footer Component from JSON */}
  <footer className="bg-slate-50 dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800">
    <div className="flex flex-col md:flex-row justify-between items-center py-12 w-full max-w-[1280px] mx-auto px-6 gap-4">
      <div className="flex flex-col items-center md:items-start gap-base">
        <span className="text-lg font-bold text-slate-900 dark:text-white font-display">
          JobKar
        </span>
        <p className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400">
          © 2024 JobKar Inc. All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          href="#"
        >
          About Us
        </a>
        <a
          className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          href="#"
        >
          Help Center
        </a>
        <a
          className="font-['Manrope'] text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
</>

  )
}

