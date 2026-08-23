import AdminNav from '@/components/AdminNav';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminUpperNav from './AdminUpperNav';
import {
  Users,
  Building2,
  UserCheck,
  ShieldAlert,
  Search,
  Filter,
  UserPlus,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'ALL' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-[#07110D] text-[#F1F5F2] selection:bg-[#22C55E]/30 selection:text-[#34D399] font-sans">
      <AdminNav />
      <AdminUpperNav searchType={null} search={null} />

      <main className="ml-72 pt-20 min-h-screen p-8">
        <div className="max-w-[1440px] mx-auto w-full space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-black text-[#F1F5F2] tracking-tight mb-1">
                User Management
              </h1>
              <p className="text-sm text-[#9AAEA3]">
                Oversee verified job seekers, recruiters, and platform administrators.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#34D399] text-[#07110D] rounded-xl text-xs font-extrabold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all cursor-pointer active:scale-95">
                <UserPlus className="w-4 h-4" />
                <span>Invite New User</span>
              </button>
            </div>
          </div>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Total Users
                  </p>
                  <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">{users.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Active Employers
                  </p>
                  <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">
                    {users.filter((u) => u.role === 'EMPLOYER').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Job Seekers
                  </p>
                  <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">
                    {users.filter((u) => u.role !== 'EMPLOYER' && u.role !== 'ADMIN').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#111F19] p-5 rounded-3xl border border-[#20352B] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                    Pending Verification
                  </p>
                  <p className="text-2xl font-black text-[#F1F5F2] mt-0.5">0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#111F19] border border-[#20352B]">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AAEA3]" />
              <input
                type="text"
                placeholder="Filter by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0D1814] border border-[#20352B] focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-xl text-xs text-[#F1F5F2] placeholder:text-[#9AAEA3]/50 outline-none"
              />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-bold text-[#9AAEA3]">Filter Role:</span>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-1.5 bg-[#0D1814] border border-[#20352B] text-xs font-bold text-[#22C55E] rounded-xl outline-none cursor-pointer"
              >
                <option value="ALL" className="bg-[#0D1814]">All Roles</option>
                <option value="JOB_SEEKER" className="bg-[#0D1814]">Job Seeker</option>
                <option value="EMPLOYER" className="bg-[#0D1814]">Employer</option>
                <option value="ADMIN" className="bg-[#0D1814]">Admin</option>
              </select>
            </div>
          </div>

          {/* User Table Container */}
          <div className="bg-[#111F19] rounded-3xl border border-[#20352B] shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0D1814] border-b border-[#20352B]">
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      User Identity
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Role
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3]">
                      Registered Date
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#9AAEA3] text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#20352B]">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-[#0D1814]/70 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#162820] border border-[#20352B] flex items-center justify-center text-[#22C55E] font-bold text-xs shrink-0">
                            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-[#F1F5F2]">{user.name}</p>
                            <p className="text-[11px] text-[#9AAEA3]">{user.email}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${
                            user.role === 'ADMIN'
                              ? 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30'
                              : user.role === 'EMPLOYER'
                              ? 'bg-[#34D399]/15 text-[#34D399] border-[#34D399]/30'
                              : 'bg-[#162820] text-[#9AAEA3] border-[#20352B]'
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                          <span className="text-xs font-bold text-[#22C55E]">Active</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-xs text-[#9AAEA3]">
                        {new Date(user.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-[#9AAEA3] hover:text-[#22C55E] hover:bg-[#162820] rounded-lg transition-colors cursor-pointer">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-xs text-[#9AAEA3]">
                        No users match the search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-[#0D1814] border-t border-[#20352B] flex items-center justify-between text-xs text-[#9AAEA3]">
              <p>Showing {filteredUsers.length} of {users.length} total users</p>
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 border border-[#20352B] rounded-lg hover:bg-[#162820] disabled:opacity-40" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-3 py-1 bg-[#22C55E] text-[#07110D] font-bold rounded-lg">
                  1
                </button>
                <button className="p-1.5 border border-[#20352B] rounded-lg hover:bg-[#162820]">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
