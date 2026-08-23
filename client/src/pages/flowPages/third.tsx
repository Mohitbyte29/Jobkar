import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Globe,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import toast, { Toaster } from 'react-hot-toast';

const Third = () => {
  const navigate = useNavigate();
  const [profession, setProfession] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('India');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!profession.trim()) {
      toast.error('Please enter your primary profession / role');
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.patch(
        'http://localhost:4000/api/me/profile',
        { profession, city, country },
        { withCredentials: true }
      );
      navigate('/fourth');
    } catch (error) {
      console.warn('Navigating to next step:', error);
      navigate('/fourth');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111F19',
            color: '#F1F5F2',
            border: '1px solid #20352B',
          },
        }}
      />

      <div className="relative min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] overflow-x-hidden font-sans flex flex-col justify-between">
        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[20%] w-[550px] h-[550px] bg-[#22C55E]/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#34D399]/8 rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#20352B15_1px,transparent_1px),linear-gradient(to_bottom,#20352B15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />
        </div>

        {/* Header */}
        <header className="relative z-10 max-w-4xl w-full mx-auto px-6 pt-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#111F19] border border-[#20352B] flex items-center justify-center text-[#22C55E] group-hover:border-[#22C55E]/50 transition-colors shadow-lg">
              <Sparkles className="w-5 h-5 text-[#22C55E]" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#F1F5F2]">
              Job<span className="text-[#22C55E]">kar</span>
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111F19] border border-[#20352B] text-xs font-semibold text-[#9AAEA3]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Profile Setup</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 grow flex items-center justify-center px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl"
          >
            {/* Progress Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2 text-xs font-bold">
                <span className="text-[#22C55E] uppercase tracking-widest">Step 3 of 4</span>
                <span className="text-[#9AAEA3]">75% Complete</span>
              </div>
              <div className="h-2 w-full bg-[#0D1814] border border-[#20352B] rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#34D399] w-3/4 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
              </div>
            </div>

            {/* Elevated Card */}
            <div className="rounded-3xl bg-[#111F19] border border-[#20352B] p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] tracking-tight mb-2">
                  Tell us about your current role
                </h1>
                <p className="text-[#9AAEA3] text-sm sm:text-base">
                  Help us understand your technical expertise and location preferences.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Job Title Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#22C55E]" />
                    Current or Desired Role *
                  </label>
                  <input
                    className="w-full px-4 py-3.5 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-[#9AAEA3]/50 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all font-medium"
                    placeholder="e.g. Senior Frontend Architect, ML Intern, Product Designer"
                    type="text"
                    onChange={(e) => setProfession(e.target.value)}
                    value={profession}
                    required
                  />
                </div>

                {/* Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                      City
                    </label>
                    <input
                      className="w-full px-4 py-3.5 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-[#9AAEA3]/50 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all font-medium"
                      placeholder="e.g. Bangalore, Mumbai"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#22C55E]" />
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all font-medium cursor-pointer"
                    >
                      <option value="India" className="bg-[#111F19]">India</option>
                      <option value="United States" className="bg-[#111F19]">United States</option>
                      <option value="United Kingdom" className="bg-[#111F19]">United Kingdom</option>
                      <option value="Canada" className="bg-[#111F19]">Canada</option>
                      <option value="Germany" className="bg-[#111F19]">Germany</option>
                      <option value="Singapore" className="bg-[#111F19]">Singapore</option>
                      <option value="Remote / Worldwide" className="bg-[#111F19]">Remote / Worldwide</option>
                    </select>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#20352B]">
                  <Link
                    to="/second"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#20352B] bg-[#0D1814] hover:bg-[#162820] text-[#9AAEA3] hover:text-[#F1F5F2] text-sm font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </Link>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all flex items-center justify-center gap-2 active:scale-98 text-sm group cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Saving...' : 'Continue'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 text-center py-6 text-xs text-[#9AAEA3]/70">
          © {new Date().getFullYear()} Jobkar Technologies Inc. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Third;
