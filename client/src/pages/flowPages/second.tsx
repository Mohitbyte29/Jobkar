import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Search,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

const Second = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('looking');
  const navigate = useNavigate();

  const options = [
    {
      id: 'employed',
      label: 'I am currently employed',
      description: 'Looking for a step up or open to stealth high-impact roles.',
      icon: Briefcase,
    },
    {
      id: 'looking',
      label: 'I am actively looking for opportunities',
      description: 'Ready for immediate interviews and offers.',
      icon: Search,
    },
    {
      id: 'student',
      label: 'I am a student or recent graduate',
      description: 'Seeking internships, entry-level engineering, or PPO roles.',
      icon: GraduationCap,
    },
  ];

  return (
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
              <span className="text-[#22C55E] uppercase tracking-widest">Step 2 of 4</span>
              <span className="text-[#9AAEA3]">50% Complete</span>
            </div>
            <div className="h-2 w-full bg-[#0D1814] border border-[#20352B] rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#34D399] w-2/4 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
            </div>
          </div>

          {/* Elevated Card */}
          <div className="rounded-3xl bg-[#111F19] border border-[#20352B] p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F2] tracking-tight mb-2">
                What's your current status?
              </h1>
              <p className="text-[#9AAEA3] text-sm sm:text-base">
                This helps our matching algorithm recommend the most relevant high-impact roles.
              </p>
            </div>

            {/* Status Options */}
            <div className="space-y-4 mb-8">
              {options.map((opt) => {
                const isSelected = selectedStatus === opt.id;
                const Icon = opt.icon;

                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedStatus(opt.id)}
                    className={`group relative flex items-center p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#162820] border-[#22C55E] shadow-[0_0_20px_rgba(34,197,94,0.15)] scale-[1.01]'
                        : 'bg-[#0D1814] border-[#20352B] hover:border-[#22C55E]/50 hover:bg-[#111F19]'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40'
                          : 'bg-[#111F19] border border-[#20352B] text-[#9AAEA3] group-hover:text-[#F1F5F2]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-grow">
                      <span
                        className={`block text-base font-bold transition-colors ${
                          isSelected ? 'text-[#F1F5F2]' : 'text-[#F1F5F2]/90'
                        }`}
                      >
                        {opt.label}
                      </span>
                      <span className="text-xs text-[#9AAEA3] mt-0.5 block">{opt.description}</span>
                    </div>

                    {/* Radio Indicator */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 transition-colors ${
                        isSelected ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#20352B] bg-[#07110D]'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#07110D]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Actions */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#20352B]">
              <Link
                to="/first"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#20352B] bg-[#0D1814] hover:bg-[#162820] text-[#9AAEA3] hover:text-[#F1F5F2] text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Link>

              <Link
                to="/third"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all flex items-center justify-center gap-2 active:scale-98 text-sm group"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Context Hint */}
          <div className="mt-6 flex items-start gap-3 bg-[#111F19]/80 border border-[#20352B] p-4 rounded-2xl">
            <Info className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#9AAEA3] leading-relaxed">
              Personalizing your employment status enables Jobkar to highlight direct hiring opportunities, pre-placement offers (PPOs), and salary brackets suited to your career trajectory.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-xs text-[#9AAEA3]/70">
        © {new Date().getFullYear()} Jobkar Technologies Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Second;
