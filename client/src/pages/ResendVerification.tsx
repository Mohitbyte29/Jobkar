import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Mail, 
  ArrowRight, 
  ChevronLeft, 
  Loader2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "@/context/UserContext";

export default function ResendVerification() {
  const { user } = useUser();
  const [email, setEmail] = useState<string>(user?.email || "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const res = await axios.post(
        `${apiUrl}/api/auth/resend-verification`,
        { email: email.trim().toLowerCase() },
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsSent(true);
        toast.success("Verification link sent! Check your Gmail.");
      } else {
        const msg = res.data.message || "Failed to resend verification link.";
        setErrorMessage(msg);
        toast.error(msg);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data?.message || "Failed to resend verification email.";
        setErrorMessage(msg);
        toast.error(msg);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] flex flex-col selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans relative overflow-x-hidden">
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

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-[#22C55E]/10 blur-[140px]" />
        <div className="absolute top-1/2 -right-32 h-[480px] w-[480px] rounded-full bg-[#34D399]/8 blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#22C55E]/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#20352B15_1px,transparent_1px),linear-gradient(to_bottom,#20352B15_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      </div>

      {/* Header bar */}
      <header className="relative z-10 w-full h-16 border-b border-[#20352B] bg-[#07110D]/90 backdrop-blur-xl px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group text-[#9AAEA3] hover:text-[#F1F5F2] transition-colors text-sm font-medium">
          <div className="w-8 h-8 rounded-lg bg-[#0D1814] border border-[#20352B] flex items-center justify-center group-hover:border-[#22C55E]/40 group-hover:bg-[#22C55E]/10 transition-all">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span>Back to Home</span>
        </Link>
        <Link to="/" className="flex items-center gap-1.5 shrink-0">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
          <span className="text-lg font-extrabold tracking-tight text-white">
            Job<span className="text-[#22C55E]">kar</span>
          </span>
        </Link>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-3xl bg-[#0E1A15]/90 border border-[#20352B] rounded-2xl p-8 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Top card accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22C55E]/60 to-transparent " />

          {!isSent ? (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Resend Verification</h1>
                <p className="text-sm text-[#9AAEA3] mt-1.5">
                  Enter your registered email and we'll send you a fresh verification link.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9AAEA3] mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#63776C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#07110D] border border-[#20352B] rounded-xl text-sm text-white placeholder-[#63776C] focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-xl bg-[#22C55E] text-[#07110D] font-bold text-sm hover:bg-[#22C55E]/90 disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] mt-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Verification Link</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-[#20352B] text-center text-xs text-[#9AAEA3]">
                Already verified?{" "}
                <Link to="/login" className="text-[#22C55E] font-semibold hover:underline">
                  Sign In
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-16 h-16 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/50 flex items-center justify-center mx-auto mb-5 text-[#22C55E] shadow-[0_0_25px_rgba(34,197,94,0.3)]"
              >
                <CheckCircle2 className="w-9 h-9" />
              </motion.div>

              <h2 className="text-2xl font-bold text-white mb-2">Check Your Gmail</h2>
              <p className="text-sm text-[#9AAEA3] mb-5">
                We've sent a verification link to <strong className="text-white">{email}</strong>. Please check your inbox and click the link to activate your account.
              </p>

              <div className="bg-[#07110D] border border-[#20352B] rounded-xl p-3.5 mb-6 text-left text-xs text-[#9AAEA3] space-y-1.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" /> Didn't receive the email?
                </p>
                <p>• Check your Spam or Promotions folder.</p>
                <p>• Make sure the email address is spelled correctly.</p>
                <p>• The link is valid for 24 hours.</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsSent(false);
                    setErrorMessage(null);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#11241C] border border-[#20352B] text-white font-medium text-sm hover:bg-[#183327] transition-all flex items-center justify-center"
                >
                  Try Another Email
                </button>
                <Link
                  to="/login"
                  className="w-full py-3 px-4 rounded-xl bg-[#22C55E] text-[#07110D] font-bold text-sm hover:bg-[#22C55E]/90 transition-all flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                >
                  Return to Sign In
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
