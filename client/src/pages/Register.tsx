// import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

import { Link, useNavigate } from "react-router-dom";
import { useState} from 'react';
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string >("");
  const [password, setPassword] = useState<string >("");
  const [role, setRole] = useState<string>("seeker"); // Default role is "seeker" 
  const [selectedRole, setSelectedRole] = useState<string>("SEEKER"); // Default role is "seeker" 
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log('Name changed:', e.target.value);
  }; 

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log('Email changed:', e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log('Password changed:', e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value.toUpperCase());
    console.log('Selected role:', e.target.value);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Handle form submission logic here

    try{
      const res = await axios.post('http://localhost:4000/api/auth/register', { name, email, password, role: selectedRole });
      console.log('Registration successful:', res.data);
    } catch (error) {
      console.log({role: selectedRole})
      if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  }
    }
     setName("");
      setEmail("");
      setPassword("");
      setRole("seeker");
      setSelectedRole("SEEKER");
  }

    return (
        <div className="min-h-screen flex flex-col bg-surface">
 
  <header className="shrink-0 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
    <div className="flex justify-between items-center h-16 w-full max-w-[1280px] mx-auto px-6">
      <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight font-['Manrope']">
        JobKar
      </div>
      <div className="flex items-center gap-4">
        <span className="text-slate-600 dark:text-slate-400 font-['Manrope'] text-sm font-medium">
          Already have an account?
        </span>
        <Link
          className="text-teal-600 dark:text-teal-400 font-semibold font-['Manrope'] text-sm hover:text-teal-700 transition-colors"
          to="/login"
        >
          Sign In
        </Link>
      </div>
    </div>
  </header>
  <main className="flex-1 flex items-center justify-center px-6 py-12">
    <div>
      {/* Left Side: Visual/Branding */}
      {/* Right Side: Registration Form */}
      <form className="flex flex-col justify-center py-md px-md" onSubmit={handleSubmit}>
        <div className="mb-md">
          <button className="font-h2 text-h2 text-on-surface mb-xs cursor-pointer" type="submit">
            Create your account
          </button>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Start your career journey with JobKar today.
          </p>
        </div>
        {/* Social Auth */}
        <div className="flex justify-center mb-lg">
          <button onClick={() => {
            window.open('http://localhost:4000/api/auth/google', 'http://localhost:4000/api/auth/google/callback');
          }} className="flex items-center justify-center gap-xs py-sm px-md border border-outline-variant rounded-lg font-label-strong text-label-strong hover:bg-surface-container hover:text-black transition-colors active:opacity-80 bg-black text-white cursor-pointer w-full">
            
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
            Sign Up With Google
          </button>
        </div>
        <div className="relative flex items-center mb-lg">
          <div className="grow border-t border-outline-variant" />
          <span className="shrink mx-sm font-label-caps text-label-caps text-outline uppercase tracking-widest">
            Or continue with
          </span>
          <div className="grow border-t border-outline-variant" />
        </div>
        {/* Manual Form */}
        <div className="space-y-md" >
          <div className="space-y-xs mb-md">
            <label className="font-label-strong text-label-strong text-on-surface">
              I am a...
            </label>
            <div className="grid gap-sm grid-cols-3">
              <label className={`relative flex flex-col items-center justify-center p-sm border-2 border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-all ${role === "SEEKER" ? "border-2 border-secondary" : ""} `} >
                <input
                  type="radio"
                  name="role"
                  defaultValue="seeker"
                  className="hidden"
                   onClick={() => setRole("SEEKER")} checked={role === "SEEKER"} onChange={handleRoleChange}
                />
                <span className="material-symbols-outlined text-secondary mb-xs">
                  person
                </span>
                <span className="font-label-strong text-secondary">
                  Job Seeker
                </span>
              </label>
              <label className={`relative flex flex-col items-center justify-center p-sm border-2 border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-all ${role === "EMPLOYER" ? "border-2 border-secondary" : ""} `}>
                <input
                  type="radio"
                  name="role"
                  defaultValue="employer"
                  className="hidden"
                  onClick={() => setRole("EMPLOYER")} checked={role === "EMPLOYER"} onChange={handleRoleChange}
                />
                <span className="material-symbols-outlined text-outline mb-xs">
                  business_center
                </span>
                <span className="font-label-strong text-on-surface">
                  Employer
                </span>
              </label>
              <label className={`relative flex flex-col items-center justify-center p-sm border-2 border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container transition-all ${role === "ADMIN" ? "border-2 border-secondary" : ""} `}>
                <input
                  type="radio"
                  name="role"
                  defaultValue="admin"
                  className="hidden"
                  onClick={() => setRole("ADMIN")} checked={role === "ADMIN"} onChange={handleRoleChange}
                />
                <span className="material-symbols-outlined text-outline mb-xs">
                  admin_panel_settings
                </span>
                <span className="font-label-strong text-on-surface">Admin</span>
              </label>
            </div>
          </div>
          <div className="space-y-xs">
            <label
              className="font-label-strong text-label-strong text-on-surface"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md text-on-surface bg-surface-container-lowest"
              id="name"
              placeholder="John Doe"
              type="text"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="space-y-xs">
            <label
              className="font-label-strong text-label-strong text-on-surface"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md text-on-surface bg-surface-container-lowest"
              id="email"
              placeholder="john@example.com"
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="space-y-xs">
            <div className="flex justify-between items-center">
              <label
                className="font-label-strong text-label-strong text-on-surface"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <input
                className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all font-body-md text-on-surface bg-surface-container-lowest"
                id="password"
                placeholder="••••••••"
                type="password"
                onChange={handlePasswordChange}
                value={password}
              />
              <button
                className="absolute right-sm top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  visibility
                </span>
              </button>
            </div>
            <p className="font-label-caps text-[10px] text-outline mt-xs">
              Must be at least 8 characters long.
            </p>
          </div>
          <div className="flex items-start gap-sm pt-xs">
            <input
              className="mt-1 w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary"
              id="terms"
              type="checkbox"
            />
            <label
              className="font-body-sm text-body-sm text-on-surface-variant"
              htmlFor="terms"
            >
              I agree to the{" "}
              <a
                className="text-secondary font-semibold hover:underline"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-secondary font-semibold hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <button
            className="flex items-center justify-center gap-xs py-sm px-md border border-outline-variant rounded-lg font-label-strong text-label-strong hover:bg-surface-container hover:text-black transition-colors active:opacity-80 bg-black text-white cursor-pointer w-full"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <p className="mt-lg text-center font-body-sm text-body-sm text-on-surface-variant">
          Already have an account?{" "}
          <Link className="text-secondary font-semibold hover:underline" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  </main>
  {/* Footer (Shared Component) */}
  <footer className="shrink-0 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
    <div className="flex flex-col md:flex-row justify-between items-center py-12 w-full max-w-[1280px] mx-auto px-6 gap-4 font-['Manrope'] text-sm">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-slate-900 dark:text-white">
          JobKar
        </div>
        <p className="text-slate-500 dark:text-slate-400">
          © 2024 JobKar Inc. All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          href="#"
        >
          About Us
        </a>
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          href="#"
        >
          Help Center
        </a>
        <a
          className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          href="#"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
        </div>

    )
}