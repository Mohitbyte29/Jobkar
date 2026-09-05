import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  ChevronLeft 
} from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useUser } from "@/context/UserContext";

type VerificationStatus = "verifying" | "success" | "already_verified" | "error";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [status, setStatus] = useState<VerificationStatus>("verifying");
  const [message, setMessage] = useState<string>("");
  const [expiredEmail, setExpiredEmail] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(4);

  // Guards against React 18 StrictMode double-invoking this effect in dev,
  // which would otherwise fire the verify call twice and flip a real
  // success into a false "invalid token" error on the second (now-stale) call.
  const hasVerified = useRef(false);

  useEffect(() => {
    if (hasVerified.current) return;
    hasVerified.current = true;

    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("No verification token found in the URL. Please check your verification email link.");
      return;
    }

    const verify = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "";
        const res = await axios.get(
          `/api/auth/verify-email?token=${encodeURIComponent(token)}`,
          { withCredentials: true }
        );
        const data = res.data;

        if (data.success) {
          if (data.alreadyVerified) {
            setStatus("already_verified");
            setMessage(data.message || "Your email is already verified.");
          } else {
            setStatus("success");
            setMessage(data.message || "Email verified successfully!");
          }

          // Refresh current user in context if available
          try {
            const meRes = await axios.get(`${apiUrl}/api/me`, { withCredentials: true });
            if (meRes.data.success && meRes.data.user) {
              setUser(meRes.data.user);
            }
          } catch {
            // Ignored if user not currently in cookie session
          }
        } else {
          setStatus("error");
          setMessage(data.message || "Email verification failed. The link may have expired.");
          if (data.email) setExpiredEmail(data.email);
        }
      } catch (err: unknown) {
        setStatus("error");
        if (axios.isAxiosError(err)) {
          const errMsg = err.response?.data?.message || "Invalid or expired verification token.";
          setMessage(errMsg);
          // Backend returns `email` on the expired-token case specifically, so
          // the resend flow below can carry it forward without asking the
          // user to retype it.
          if (err.response?.data?.email) setExpiredEmail(err.response.data.email);
        } else {
          setMessage("Something went wrong while verifying your email. Please try again.");
        }
      }
    };

    verify();
  }, [searchParams, setUser]);

  // Auto-redirect countdown on success
  useEffect(() => {
    if (status === "success" || status === "already_verified") {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status, navigate]);

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

      {/* Center card */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-3xl bg-[#0E1A15]/90 border border-[#20352B] rounded-2xl p-8 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] text-center relative overflow-hidden"
        >
          {/* Subtle top card accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22C55E]/60 to-transparent" />

          {/* VERIFYING STATE */}
          {status === "verifying" && (
            <div className="py-8 flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center">
                  <Loader2 className="w-10 h-10 text-[#22C55E] animate-spin" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#22C55E]/20 animate-ping -z-10" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Verifying Your Email</h2>
              <p className="text-sm text-[#9AAEA3] max-w-xs mx-auto">
                Please wait while we validate your security token...
              </p>
            </div>
          )}

          {/* SUCCESS STATE */}
          {(status === "success" || status === "already_verified") && (
            <div className="py-4 flex flex-col items-center max-w-full">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/50 flex items-center justify-center mb-6 text-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                <CheckCircle2 className="w-11 h-11" />
              </motion.div>
                 
              <h2 className="text-2xl font-bold text-white mb-2">
                {status === "already_verified" ? "Already Verified!" : "Email Verified!"}
              </h2>
              <p className="text-sm text-[#9AAEA3] mb-6 max-w-3xl mx-auto">
                {message || "Your email address has been successfully confirmed. You now have full access to JobKar."}
              </p>

              <div className="w-full bg-[#07110D] border border-[#20352B] rounded-xl p-3 mb-6 flex items-center justify-between text-xs text-[#9AAEA3]">
                <span className="flex items-center gap-1.5 text-[#34D399]">
                  <ShieldCheck className="w-4 h-4" /> Account Active
                </span>
                <span>Redirecting in <strong className="text-white">{countdown}s</strong></span>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/")}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#22C55E] text-[#07110D] font-bold text-sm hover:bg-[#22C55E]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                >
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/jobs"
                  className="py-3 px-4 rounded-xl bg-[#11241C] border border-[#20352B] text-white font-medium text-sm hover:bg-[#183327] transition-all flex items-center justify-center"
                >
                  Browse Jobs
                </Link>
              </div>
            </div>
          )}

          {/* ERROR STATE */}
          {status === "error" && (
            <div className="py-4 flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 rounded-full bg-red-500/15 border border-red-500/50 flex items-center justify-center mb-6 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
              >
                <XCircle className="w-11 h-11" />
              </motion.div>

              <h2 className="text-2xl font-bold text-white mb-2">Verification Failed</h2>
              <p className="text-sm text-red-300/90 mb-6 max-w-2xl mx-auto">
                {message || "The verification link is invalid, expired, or has already been used."}
              </p>

              <div className="w-full space-y-3">
                {expiredEmail ? (
                  // We know which email this expired link belonged to, so send
                  // the user straight to the check-email/resend page with it
                  // pre-filled instead of a route that doesn't collect it.
                  <Link
                    to="/check-email"
                    state={{ email: expiredEmail }}
                    className="w-full py-3 px-4 rounded-xl bg-[#22C55E] text-[#07110D] font-bold text-sm hover:bg-[#22C55E]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                  >
                    <RefreshCw className="w-4 h-4" /> Request New Link
                  </Link>
                ) : (
                  // No email available (e.g. missing/garbled token) — send them
                  // back to register rather than a resend page with nothing to resend to.
                  <Link
                    to="/register"
                    className="w-full py-3 px-4 rounded-xl bg-[#22C55E] text-[#07110D] font-bold text-sm hover:bg-[#22C55E]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                  >
                    <RefreshCw className="w-4 h-4" /> Register Again
                  </Link>
                )}
                <Link
                  to="/login"
                  className="w-full py-3 px-4 rounded-xl bg-[#11241C] border border-[#20352B] text-[#9AAEA3] hover:text-white font-medium text-sm hover:bg-[#183327] transition-all flex items-center justify-center gap-2"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}