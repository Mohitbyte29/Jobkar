import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Building2,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  Zap,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';

export default function SignInPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleLogin = () => {
    window.open(
      'http://localhost:4000/api/auth/google',
      '_self'
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage('Please enter both your email and password.');
      toast.error('Please enter both your email and password.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:4000/api/auth/login',
        { email, password, rememberMe },
        { withCredentials: true }
      );
      toast.success('Welcome back to JobKar!');
      console.log('Login successful:', res.data);
      setTimeout(() => {
        navigate('/auth-success');
      }, 500);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          error.response?.data?.error ||
          'Invalid credentials. Please check your email and password.';
        setErrorMessage(message);
        toast.error(message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans relative overflow-x-hidden">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#111F19',
          color: '#F1F5F2',
          border: '1px solid #20352B',
        },
      }} />

      {/* Ambient deep-green lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-[#22C55E]/10 blur-[140px]" />
        <div className="absolute top-1/2 -right-32 h-[480px] w-[480px] rounded-full bg-[#34D399]/8 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#22C55E]/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#20352B15_1px,transparent_1px),linear-gradient(to_bottom,#20352B15_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      </div>

      {/* Minimal Top Brand Bar */}
      <header className="relative z-10 w-full h-16 border-b border-[#20352B] bg-[#07110D]/90 backdrop-blur-xl px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 group text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors text-sm font-medium"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D1814] border border-[#20352B] flex items-center justify-center group-hover:border-[#22C55E]/40 group-hover:bg-[#22C55E]/10 transition-all">
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40">
            <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_2px_rgba(34,197,94,0.7)]" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#F1F5F2] font-sans">
            Job<span className="text-[#22C55E]">kar</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="text-[#9AAEA3] hidden sm:inline">New to JobKar?</span>
          <Link
            to="/register"
            className="px-3.5 py-1.5 rounded-lg border border-[#20352B] bg-[#22C55E]/10 hover:bg-[#22C55E]/20 text-[#22C55E] font-semibold transition-all duration-200 hover:border-[#22C55E]/50"
          >
            Create Account
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-8 md:py-12 max-w-7xl mx-auto w-full">
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-[480px] relative">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#22C55E]/15 via-[#34D399]/8 to-transparent blur-xl -z-10 opacity-60" />

              {/* Main Card Surface */}
              <div className="relative mx-auto rounded-3xl bg-[#111F19] border border-[#20352B] backdrop-blur-2xl p-7 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                
                {/* Accent top border gradient highlight */}
                <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#22C55E]/80 to-transparent" />

                {/* Form Header */}
                <div className="mb-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2.5 py-0.5 rounded-full">
                      Welcome Back
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F1F5F2]">
                    Sign in to your account
                  </h2>
                  <p className="text-sm text-[#9AAEA3] mt-1.5 leading-normal">
                    Enter your credentials to access your applications, saved jobs, and career profile.
                  </p>
                </div>

                {/* Google SSO Button */}
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full h-12 px-4 rounded-xl bg-[#0D1814] hover:bg-[#162820] border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer group"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:scale-105" viewBox="0 0 24 24">
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
                    <span>Continue with Google</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="border-t border-[#20352B] w-full" />
                  <span className="bg-[#111F19] px-3 text-[11px] font-bold tracking-widest text-[#9AAEA3] uppercase shrink-0">
                    OR EMAIL SIGN IN
                  </span>
                  <div className="border-t border-[#20352B] w-full" />
                </div>

                {/* Error Banner if any */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 p-3.5 rounded-xl bg-[#EF4444]/10 border border-red-500/30 text-[#EF4444]/80 text-xs font-medium flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Form Elements */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold tracking-wide uppercase text-[#9AAEA3]"
                    >
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9AAEA3] group-focus-within:text-[#22C55E] transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 outline-none text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 text-sm font-medium transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-xs font-bold tracking-wide uppercase text-[#9AAEA3]"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toast('Password recovery instructions sent to your email.');
                        }}
                        className="text-xs font-semibold text-[#22C55E] hover:text-[#34D399] hover:underline transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9AAEA3] group-focus-within:text-[#22C55E] transition-colors">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full h-12 pl-10 pr-11 rounded-xl bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 outline-none text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 text-sm font-medium transition-all duration-200"
                      />
                      <button
                        type="button"
                        onClick={handleShowPassword}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me Toggle */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-4 h-4 rounded bg-[#0D1814] border border-[#20352B] peer-checked:bg-[#22C55E] peer-checked:border-[#22C55E] flex items-center justify-center transition-all">
                        {rememberMe && (
                          <CheckCircle2 className="w-3 h-3 text-[#07110D] stroke-[3]" />
                        )}
                      </div>
                      <span className="text-xs text-[#9AAEA3] font-medium">
                        Remember for 30 days
                      </span>
                    </label>

                    <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#9AAEA3]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>256-bit encrypted</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 rounded-xl bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(52,211,153,0.45)] transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-neutral-950" />
                          <span>Signing in...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In to Account</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Footer Switcher */}
                <div className="mt-7 text-center pt-5 border-t border-[#20352B]">
                  <p className="text-xs sm:text-sm text-[#9AAEA3]">
                    Don't have a JobKar account?{' '}
                    <Link
                      to="/register"
                      className="font-bold text-[#22C55E] hover:text-[#34D399] hover:underline transition-colors"
                    >
                      Create one now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Shared Footer */}
    </div>
  );
}
