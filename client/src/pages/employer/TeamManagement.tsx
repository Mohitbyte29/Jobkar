import EmployerNav from "@/components/EmployerNav";
import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  UserPlus,
  Users,
  ShieldCheck,
  Mail,
  MoreVertical,
  Download,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronDown,
  Lock,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Recruiter" | "Hiring Manager";
  department: string;
  status: "Active" | "Inactive";
}

const TeamManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Recruiter");

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Sarah Jenkins",
      email: "sarah.j@jobkar.com",
      role: "Admin",
      department: "People & Talent",
      status: "Active",
    },
    {
      id: 2,
      name: "Marcus Chen",
      email: "m.chen@jobkar.com",
      role: "Recruiter",
      department: "Technical Recruitment",
      status: "Active",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      email: "e.rodriguez@jobkar.com",
      role: "Hiring Manager",
      department: "Engineering",
      status: "Active",
    },
    {
      id: 4,
      name: "Liam O'Neill",
      email: "l.oneill@jobkar.com",
      role: "Recruiter",
      department: "University Hiring",
      status: "Inactive",
    },
  ]);

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    toast.success(`Invite sent to ${inviteEmail}!`);
    setShowInviteModal(false);
    setInviteEmail("");
  };

  const filteredMembers = teamMembers.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#07110D] text-[#F1F5F2] min-h-screen flex selection:bg-[#22C55E]/30 selection:text-[#34D399]">
      <Toaster position="top-right" />
      <EmployerNav />

      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* TopAppBar */}
        <header className="w-full border-b border-[#20352B] sticky top-0 z-20 bg-[#111F19]/90 backdrop-blur-md h-16 flex justify-between items-center px-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none transition-all"
                placeholder="Search team members, emails, or departments..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814] rounded-xl transition-colors relative cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22C55E] rounded-full ring-2 ring-[#111F19]" />
            </button>
            <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#0D1814] rounded-xl transition-colors cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-[#20352B] mx-1" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-[#F1F5F2] leading-tight">
                  Alexander Thorne
                </p>
                <p className="text-[10px] text-[#9AAEA3] uppercase tracking-wider font-semibold">
                  Admin
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] font-bold text-xs">
                AT
              </div>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <div className="p-8 max-w-[1360px] mx-auto w-full overflow-y-auto space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                Team & Permissions
              </h2>
              <p className="text-sm text-[#9AAEA3]">
                Manage team members, assign hiring roles, and monitor invite statuses.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowInviteModal(true)}
              className="px-6 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <UserPlus className="w-4 h-4" />
              <span>Invite Team Member</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Total Members
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">12</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Administrators
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">2</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Pending Invites
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">3</p>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-2xl border border-[#20352B] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#EF4444] flex items-center justify-center shrink-0">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Inactive
                </p>
                <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">1</p>
              </div>
            </div>
          </div>

          {/* Main Grid: Table (8 cols) + Role Permissions (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Active Members Table */}
            <div className="lg:col-span-8 bg-[#111F19] rounded-3xl border border-[#20352B] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div className="px-6 py-5 border-b border-[#20352B] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#F1F5F2]">
                    Active Team Roster
                  </h3>
                  <p className="text-xs text-[#9AAEA3]">
                    Users with active access to this employer console
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820] rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#0D1814] border-b border-[#20352B]">
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Member
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Role
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Department
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#20352B]">
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-[#0D1814]/70 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#162820] border border-[#20352B] flex items-center justify-center text-xs font-bold text-[#22C55E]">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-[#F1F5F2]">
                                {member.name}
                              </p>
                              <p className="text-xs text-[#9AAEA3]">{member.email}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                              member.role === "Admin"
                                ? "bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30"
                                : "bg-[#162820] text-[#9AAEA3] border-[#20352B]"
                            }`}
                          >
                            {member.role}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-xs font-medium text-[#9AAEA3]">
                          {member.department}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`flex items-center gap-1.5 text-xs font-bold ${
                              member.status === "Active"
                                ? "text-[#22C55E]"
                                : "text-[#EF4444]"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                member.status === "Active"
                                  ? "bg-[#22C55E]"
                                  : "bg-[#EF4444]"
                              }`}
                            />
                            {member.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <button className="p-1.5 text-[#9AAEA3] hover:text-[#F1F5F2] hover:bg-[#162820] rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column (4 cols): Roles & Invites */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Role Permissions Card */}
              <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
                <h3 className="text-sm font-bold text-[#F1F5F2] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#22C55E]" />
                  <span>Role Access Levels</span>
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 bg-[#0D1814] rounded-2xl border border-[#20352B]">
                    <p className="text-xs font-bold text-[#22C55E] mb-0.5">Admin</p>
                    <p className="text-[11px] text-[#9AAEA3]">
                      Full management of team members, billing, API keys, and job postings.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#0D1814] rounded-2xl border border-[#20352B]">
                    <p className="text-xs font-bold text-[#F1F5F2] mb-0.5">Recruiter</p>
                    <p className="text-[11px] text-[#9AAEA3]">
                      Can post/edit jobs, manage candidate screening, and schedule interviews.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#0D1814] rounded-2xl border border-[#20352B]">
                    <p className="text-xs font-bold text-[#F1F5F2] mb-0.5">Hiring Manager</p>
                    <p className="text-[11px] text-[#9AAEA3]">
                      Read & review access to candidate profiles for assigned open requisitions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pending Invites Card */}
              <div className="bg-[#111F19] rounded-3xl border border-[#20352B] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#20352B]">
                  <h3 className="text-sm font-bold text-[#F1F5F2]">
                    Pending Invitations
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-[10px] font-bold">
                    3 Open
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { email: "david.k@jobkar.com", role: "Recruiter", time: "2 days ago" },
                    { email: "sophia.l@jobkar.com", role: "Manager", time: "4 days ago" },
                  ].map((invite, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#0D1814] rounded-2xl border border-[#20352B] flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#F1F5F2] truncate">
                          {invite.email}
                        </p>
                        <p className="text-[10px] text-[#9AAEA3]">
                          {invite.role} • Sent {invite.time}
                        </p>
                      </div>
                      <button className="text-xs text-[#EF4444] hover:underline font-semibold shrink-0">
                        Revoke
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111F19] border border-[#20352B] rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#F1F5F2] mb-1">
                Invite Team Member
              </h3>
              <p className="text-xs text-[#9AAEA3]">
                An invitation email will be sent with onboarding instructions.
              </p>
            </div>

            <form onSubmit={handleSendInvite} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="colleague@company.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9AAEA3]">
                  Assigned Role
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-sm text-[#F1F5F2] outline-none cursor-pointer"
                >
                  <option value="Recruiter" className="bg-[#0D1814]">Recruiter</option>
                  <option value="Hiring Manager" className="bg-[#0D1814]">Hiring Manager</option>
                  <option value="Admin" className="bg-[#0D1814]">Admin</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 py-3 border border-[#20352B] hover:border-[#22C55E]/40 text-[#F1F5F2] text-xs font-bold rounded-xl hover:bg-[#162820] transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] text-xs font-extrabold rounded-xl shadow-md transition-all"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
