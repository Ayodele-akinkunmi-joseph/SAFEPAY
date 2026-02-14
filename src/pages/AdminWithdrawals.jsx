import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  FunnelIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function AdminUsers() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const users = [
    { 
      id: 1, 
      name: "Mr & Mrs Adebayo", 
      email: "adebayo@gmail.com", 
      phone: "08012345678", 
      type: "client", 
      joined: "2026-01-15", 
      bookings: 2,
      totalSpent: 750000,
      status: "active"
    },
    { 
      id: 2, 
      name: "Chioma E.", 
      email: "chioma@yahoo.com", 
      phone: "08023456789", 
      type: "client", 
      joined: "2026-01-20", 
      bookings: 1,
      totalSpent: 350000,
      status: "active"
    },
    { 
      id: 3, 
      name: "Oluwaseun A.", 
      email: "seun@gmail.com", 
      phone: "08034567890", 
      type: "client", 
      joined: "2026-01-25", 
      bookings: 3,
      totalSpent: 1250000,
      status: "active"
    },
    { 
      id: 4, 
      name: "Tunde & Funke", 
      email: "tunde@yahoo.com", 
      phone: "08045678901", 
      type: "client", 
      joined: "2026-02-01", 
      bookings: 1,
      totalSpent: 450000,
      status: "inactive"
    },
    { 
      id: 5, 
      name: "Emeka O.", 
      email: "emeka@gmail.com", 
      phone: "08056789012", 
      type: "client", 
      joined: "2026-02-05", 
      bookings: 2,
      totalSpent: 650000,
      status: "active"
    },
  ]

  const filteredUsers = users.filter(u => {
    if (search && !u.name.toLowerCase().includes(search.toLowerCase())) return false
    if (filter !== 'all' && u.status !== filter) return false
    return true
  })

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Active</span>
      : <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Inactive</span>
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-[#2D3E50]">Users</h1>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">All Users</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">User</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Contact</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Joined</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Bookings</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Total Spent</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm">{user.email}</p>
                    <p className="text-xs text-gray-500">{user.phone}</p>
                  </td>
                  <td className="px-6 py-4 text-sm">{user.joined}</td>
                  <td className="px-6 py-4 text-sm font-medium">{user.bookings}</td>
                  <td className="px-6 py-4 text-sm font-medium text-[#0A5C5C]">
                    ₦{user.totalSpent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(user.status)}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/admin/users/${user.id}`}
                      className="text-[#0A5C5C] hover:underline flex items-center gap-1"
                    >
                      <EyeIcon className="w-4 h-4" />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <UserIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No users found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}