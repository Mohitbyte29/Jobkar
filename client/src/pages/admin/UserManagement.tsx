import AdminNav from '@/components/AdminNav'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminUpperNav from './AdminUpperNav';

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
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get('/api/users');
        setUsers(data);
        console.log(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        if(axios.isAxiosError(error)) {
          console.error('Axios error response:', error.response?.data);
        }
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <>
  {/* SideNavBar Shell */}
  <AdminNav />
  {/* TopAppBar Shell */}
  <AdminUpperNav searchType={null} search={null} />
  {/* Main Content Canvas */}
  <main className="ml-64 mt-16 p-8 min-h-screen">
    <div className="max-w-max_width mx-auto">
      {/* Header Section */}
      <div className="mb-md flex justify-between items-end">
        <div>
          <h2 className="font-h1 text-h1 text-slate-200">User Management</h2>
          <p className="font-body-md text-body-md text-slate-200-variant mt-1">
            Oversee and manage your platform's growing community of job seekers
            and employers.
          </p>
        </div>
        <div className="flex gap-sm">
          <button className="flex items-center gap-xs px-sm py-2 bg-[#111827] border border-[#1E293B] text-slate-200 rounded-lg font-label-strong shadow-sm hover:bg-[#0F172A] transition-colors">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="filter_list"
            >
              filter_list
            </span>
            Filters
          </button>
          <button className="flex items-center gap-xs px-sm py-2 bg-blue-600 text-white rounded-lg font-label-strong shadow-sm hover:opacity-90 transition-opacity">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="person_add"
            >
              person_add
            </span>
            Add New User
          </button>
        </div>
      </div>
      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-lg">
        <div className="bg-[#111827] p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-white-container mb-xs">
            TOTAL USERS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-slate-200">{users.length}</span>
          </div>
        </div>
        <div className="bg-[#111827] p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-white-container mb-xs">
            ACTIVE EMPLOYERS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-slate-200">{users.filter((u) => u.role === 'EMPLOYER').length}</span>
          </div>
        </div>
        <div className="bg-[#111827] p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-white-container mb-xs">
            NEW SEEKERS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-slate-200">{users.length}</span>
            <span className="text-tertiary-fixed-dim text-xs font-bold">
              This month
            </span>
          </div>
        </div>
        <div className="bg-[#111827] p-sm rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-white">
          <p className="font-label-caps text-label-caps text-white-container mb-xs">
            PENDING VERIFICATIONS
          </p>
          <div className="flex items-baseline gap-xs">
            <span className="font-h2 text-h2 text-error">24</span>
            <span className="text-outline text-xs font-medium">
              Action required
            </span>
          </div>
        </div>
      </div>
      {/* User Table Container */}
      <div className="bg-[#111827] rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] overflow-hidden border border-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#0F172A] border-b border-surface-container-highest">
              <tr>
                <th className="px-6 py-4 font-label-caps text-label-caps text-slate-200-variant">
                  NAME
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-slate-200-variant">
                  ROLE
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-slate-200-variant">
                  STATUS
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-slate-200-variant">
                  JOIN DATE
                </th>
                <th className="px-6 py-4 font-label-caps text-label-caps text-slate-200-variant text-right">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
  {users.map((user) => {
    return (
      <tr
        key={user.id}
        className="hover:bg-[#0F172A] transition-colors group"
      >
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600-fixed flex items-center justify-center text-white-fixed font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="font-label-strong text-slate-200">
                {user.name}
              </p>

              <p className="text-xs text-white-container font-body-sm">
                {user.email}
              </p>
            </div>
          </div>
        </td>

        <td className="px-6 py-4">
          <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-caps text-[10px]">
            {user.role}
          </span>
        </td>

        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-body-sm text-slate-200">
              Active
            </span>
          </div>
        </td>

        <td className="px-6 py-4 font-body-sm text-slate-200-variant">
          {new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}
        </td>

        <td className="px-6 py-4 text-right">
          <button className="text-blue-400 font-label-strong hover:underline decoration-2 underline-offset-4">
            Manage
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
              
          </table>
        </div>
        {/* Table Pagination */}
        <div className="px-6 py-4 bg-[#111827] border-t border-surface-container flex items-center justify-between">
          <p className="font-body-sm text-slate-200-variant">
            Showing 1 to 4 of 12,842 users
          </p>
          <div className="flex gap-2">
            <button
              className="p-2 border border-[#1E293B] rounded hover:bg-[#0F172A] disabled:opacity-50"
              disabled={true}
            >
              <span
                className="material-symbols-outlined text-lg"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded font-label-strong">
              1
            </button>
            <button className="px-3 py-1 border border-[#1E293B] rounded hover:bg-[#0F172A] font-label-strong">
              2
            </button>
            <button className="px-3 py-1 border border-[#1E293B] rounded hover:bg-[#0F172A] font-label-strong">
              3
            </button>
            <button className="p-2 border border-[#1E293B] rounded hover:bg-[#0F172A]">
              <span
                className="material-symbols-outlined text-lg"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Contextual FAB (Suppressed as per rules for Admin/Management screens) */}
</>

    </div>
  )
}

export default UserManagement
