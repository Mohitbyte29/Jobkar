import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Code,
  Coins,
  HeartPulse,
  Palette,
  Megaphone,
  GraduationCap,
  ShoppingBag,
  Cpu,
  Search,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import toast, { Toaster } from 'react-hot-toast';

const industries = [
  { id: 'tech', label: 'Technology & AI', icon: Code },
  { id: 'finance', label: 'Finance & FinTech', icon: Coins },
  { id: 'healthcare', label: 'Healthcare & Bio', icon: HeartPulse },
  { id: 'design', label: 'Design & Creative', icon: Palette },
  { id: 'marketing', label: 'Growth & Marketing', icon: Megaphone },
  { id: 'education', label: 'Education & EdTech', icon: GraduationCap },
  { id: 'retail', label: 'E-Commerce & Retail', icon: ShoppingBag },
  { id: 'engineering', label: 'Hardware & Systems', icon: Cpu },
];

const Fourth = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('tech');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const filteredIndustries = industries.filter((ind) =>
    ind.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleComplete = () => {
    toast.success('Profile completed successfully! Welcome to Jobkar.', {
      icon: '🎉',
    });
    setTimeout(() => {
      navigate('/');
    }, 1000);
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
            <span>Final Step</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 grow flex items-center justify-center px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl"
          >
            {/* Progress Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2 text-xs font-bold">
                <span className="text-[#22C55E] uppercase tracking-widest">Step 4 of 4</span>
                <span className="text-[#22C55E]">100% Ready</span>
              </div>
              <div className="h-2 w-full bg-[#0D1814] border border-[#20352B] rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#34D399] w-full rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
              </div>
            </div>

            {/* Elevated Card */}
            <div className="rounded-3xl bg-[#111F19] border border-[#20352B] p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] tracking-tight mb-2">
                  What's your preferred industry?
                </h1>
                <p className="text-[#9AAEA3] text-sm sm:text-base">
                  Select your core field to personalize curated recommendations.
                </p>
              </div>

              {/* Search input */}
              <div className="mb-6 max-w-md mx-auto relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
                <input
                  type="text"
                  placeholder="Filter industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#0D1814] border border-[#20352B] rounded-xl text-xs sm:text-sm text-[#F1F5F2] placeholder-[#9AAEA3]/50 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all"
                />
              </div>

              {/* Industry Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
                {filteredIndustries.map((ind) => {
                  const isSelected = selectedIndustry === ind.id;
                  const Icon = ind.icon;

                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all cursor-pointer group ${
                        isSelected
                          ? 'bg-[#162820] border-[#22C55E] shadow-[0_0_20px_rgba(34,197,94,0.15)] scale-[1.02]'
                          : 'bg-[#0D1814] border-[#20352B] hover:border-[#22C55E]/40 hover:bg-[#111F19]'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                          isSelected
                            ? 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30'
                            : 'bg-[#111F19] text-[#9AAEA3] border border-[#20352B] group-hover:text-[#F1F5F2]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-bold transition-colors ${
                          isSelected ? 'text-[#F1F5F2]' : 'text-[#9AAEA3] group-hover:text-[#F1F5F2]'
                        }`}
                      >
                        {ind.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* CTA Actions */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#20352B]">
                <Link
                  to="/third"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#20352B] bg-[#0D1814] hover:bg-[#162820] text-[#9AAEA3] hover:text-[#F1F5F2] text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </Link>

                <button
                  type="button"
                  onClick={handleComplete}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all flex items-center justify-center gap-2 active:scale-98 text-sm group cursor-pointer"
                >
                  <span>Complete Profile</span>
                  <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
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

export default Fourth;
