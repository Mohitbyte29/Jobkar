import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Lock,
  User,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import toast, { Toaster } from 'react-hot-toast';

const First = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName.trim()) {
      toast.error('Please enter your first name');
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(
        '/api/me',
        {
          fullName: { firstName, lastName },
        },
        { withCredentials: true }
      );
      navigate('/second');
    } catch (err) {
      console.warn('Proceeding to next step:', err);
      navigate('/second');
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

        {/* Minimal Flow Header */}
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

        {/* Main Form Center */}
        <main className="relative z-10 grow flex items-center justify-center px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl"
          >
            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2 text-xs font-bold">
                <span className="text-[#22C55E] uppercase tracking-widest">Step 1 of 4</span>
                <span className="text-[#9AAEA3]">25% Complete</span>
              </div>
              <div className="h-2 w-full bg-[#0D1814] border border-[#20352B] rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#34D399] w-1/4 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
              </div>
            </div>

            {/* Elevated Surface Card */}
            <div className="rounded-3xl bg-[#111F19] border border-[#20352B] p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] tracking-tight mb-2">
                  Let's start with the basics
                </h1>
                <p className="text-[#9AAEA3] text-sm sm:text-base">
                  What is your name? This will be displayed to recruiters on your applications.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label
                      className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3] flex items-center gap-1.5"
                      htmlFor="first_name"
                    >
                      <User className="w-3.5 h-3.5 text-[#22C55E]" />
                      First Name *
                    </label>
                    <input
                      className="w-full px-4 py-3.5 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-[#9AAEA3]/50 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all font-medium"
                      id="first_name"
                      name="first_name"
                      placeholder="e.g. Alex"
                      type="text"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label
                      className="text-xs font-bold uppercase tracking-wider text-[#9AAEA3]"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-4 py-3.5 bg-[#0D1814] border border-[#20352B] rounded-xl text-sm text-[#F1F5F2] placeholder-[#9AAEA3]/50 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all font-medium"
                      id="last_name"
                      name="last_name"
                      placeholder="e.g. Morgan"
                      type="text"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    className="w-full bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all flex justify-center items-center gap-2 active:scale-98 cursor-pointer text-sm sm:text-base group"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Saving...' : 'Continue to Next Step'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>

              {/* Social Proof Strip */}
              <div className="mt-8 pt-6 border-t border-[#20352B] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-[#111F19] object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    />
                    <img
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-[#111F19] object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    />
                    <img
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-[#111F19] object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                    />
                  </div>
                  <p className="text-xs text-[#9AAEA3]">
                    Join <span className="text-[#F1F5F2] font-semibold">10,000+</span> professionals on Jobkar
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#9AAEA3]">
                  <Lock className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Encrypted & Private</span>
                </div>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Footer info */}
        <footer className="relative z-10 text-center py-6 text-xs text-[#9AAEA3]/70">
          © {new Date().getFullYear()} Jobkar Technologies Inc. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default First;
