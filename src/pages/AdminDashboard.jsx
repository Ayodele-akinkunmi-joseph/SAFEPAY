import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  UsersIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  ChartBarIcon,
  BellIcon,
  ArrowPathIcon,
  CheckBadgeIcon,
  XMarkIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [showSidebar, setShowSidebar] = useState(true)
  const [unreadNotifications, setUnreadNotifications] = useState(3)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  // Mock data
  const stats = {
    totalUsers: 1247,
    totalVendors: 342,
    totalTransactions: 892,
    totalVolume: 45200000,
    pendingDisputes: 8,
    pendingWithdrawals: 12,
    tpListVendors: 56
  }

  const recentTransactions = [
    { id: 1, vendor: "Ade's Photography", client: "Mr & Mrs Adebayo", amount: 350000, date: "2026-02-13", status: "completed" },
    { id: 2, vendor: "Zoe's Decor", client: "Chioma E.", amount: 450000, date: "2026-02-12", status: "pending" },
    { id: 3, vendor: "Signature Makeup", client: "Oluwaseun A.", amount: 150000, date: "2026-02-11", status: "completed" },
    { id: 4, vendor: "Chuks Catering", client: "Tunde & Funke", amount: 550000, date: "2026-02-10", status: "failed" },
  ]

  const pendingVendors = [
    { id: 1, name: "Chuks Catering", email: "chuks@catering.com", category: "Catering", date: "2026-02-13" },
    { id: 2, name: "Biggie MC", email: "biggie@mc.com", category: "MC", date: "2026-02-12" },
    { id: 3, name: "Glo Ushering", email: "glo@ushering.com", category: "Ushering", date: "2026-02-11" },
  ]

  const disputes = [
    { id: 1, vendor: "Prime Videography", client: "Mr & Mrs Adebayo", issue: "Service not delivered", date: "2026-02-13", status: "open" },
    { id: 2, vendor: "Elegant Planning", client: "Chioma E.", issue: "Poor quality", date: "2026-02-12", status: "open" },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0A5C5C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2D3E50] font-medium">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-slideIn { animation: slideIn 0.4s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-[#0A5C5C]">Safe-Pay Admin</span>
              </Link>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/admin/notifications" 
                className="relative p-2 text-gray-500 hover:text-[#0A5C5C] hover:bg-gray-100 rounded-lg transition-colors"
              >
                <BellIcon className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="hidden sm:block text-sm font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        
        {/* Sidebar */}
        <div className={`bg-white border-r border-gray-200 w-64 min-h-screen transition-all duration-300 ${showSidebar ? 'block' : 'hidden'} md:block`}>
          <div className="p-4">
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'overview' ? 'bg-[#0A5C5C] text-white' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <ChartBarIcon className="w-5 h-5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('vendors')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'vendors' ? 'bg-[#0A5C5C] text-white' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <BuildingStorefrontIcon className="w-5 h-5" />
                <span>Vendors</span>
                <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">3</span>
              </button>
              <Link
                to="/admin/users"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-all"
              >
                <UsersIcon className="w-5 h-5" />
                <span>Users</span>
              </Link>
              <Link
                to="/admin/transactions"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-all"
              >
                <CurrencyDollarIcon className="w-5 h-5" />
                <span>Transactions</span>
              </Link>
              <button
                onClick={() => setActiveTab('disputes')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'disputes' ? 'bg-[#0A5C5C] text-white' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <ShieldExclamationIcon className="w-5 h-5" />
                <span>Disputes</span>
                <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">2</span>
              </button>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="text-xs font-medium text-gray-400 px-4 mb-2">QUICK ACTIONS</h3>
              <div className="space-y-1">
                <Link to="/admin/vendors/pending" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Pending Approvals</span>
                  <span className="ml-auto bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full">3</span>
                </Link>
                <Link to="/admin/withdrawals" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Withdrawals</span>
                  <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">12</span>
                </Link>
                <Link to="/admin/reports" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Reports</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-[#0A5C5C] to-[#084848] rounded-2xl p-8 text-white animate-fadeInUp">
                <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
                <p className="text-white/90">Here's what's happening with your platform today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <Link to="/admin/users" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Users</p>
                      <p className="text-3xl font-bold text-[#2D3E50]">{stats.totalUsers.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <UsersIcon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-2">↑ 12% this month</p>
                </Link>
                
                <Link to="/admin/vendors" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn delay-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Vendors</p>
                      <p className="text-3xl font-bold text-[#2D3E50]">{stats.totalVendors.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <BuildingStorefrontIcon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-2">↑ 8% this month</p>
                </Link>
                
                <Link to="/admin/transactions" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn delay-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Transaction Volume</p>
                      <p className="text-3xl font-bold text-[#2D3E50]">₦{(stats.totalVolume / 1000000).toFixed(1)}M</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CurrencyDollarIcon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-2">↑ 15% this month</p>
                </Link>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn delay-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">TP List Vendors</p>
                      <p className="text-3xl font-bold text-[#2D3E50]">{stats.tpListVendors}</p>
                    </div>
                    <div className="w-12 h-12 bg-[#FFB347] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <StarIconSolid className="w-6 h-6 text-[#FFB347]" />
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-2">↑ 5 this month</p>
                </div>
              </div>

              {/* Alerts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6 animate-slideIn">
                  <h3 className="font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                    <ShieldExclamationIcon className="w-5 h-5 text-red-500" />
                    Pending Actions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-red-700">Disputes to Review</p>
                        <p className="text-xs text-red-500">{stats.pendingDisputes} pending</p>
                      </div>
                      <Link 
                        to="/admin/disputes"
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors"
                      >
                        Review
                      </Link>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-medium text-yellow-700">Withdrawals to Process</p>
                        <p className="text-xs text-yellow-500">{stats.pendingWithdrawals} pending</p>
                      </div>
                      <Link 
                        to="/admin/withdrawals"
                        className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-600 transition-colors"
                      >
                        Process
                      </Link>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-700">Vendor Approvals</p>
                        <p className="text-xs text-blue-500">3 pending</p>
                      </div>
                      <Link 
                        to="/admin/vendors/pending"
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                      >
                        Review
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 animate-slideIn delay-200">
                  <h3 className="font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                    <ChartBarIcon className="w-5 h-5 text-[#0A5C5C]" />
                    Quick Stats
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Platform Revenue</span>
                        <span className="font-medium">₦1.2M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#0A5C5C] h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">TP List Conversion</span>
                        <span className="font-medium">16%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#FFB347] h-2 rounded-full" style={{ width: '16%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Dispute Resolution</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 animate-fadeInUp">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-[#2D3E50]">Recent Transactions</h3>
                  <Link to="/admin/transactions" className="text-sm text-[#0A5C5C] hover:underline">
                    View all
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-sm font-medium text-gray-500">Vendor</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-500">Client</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-500">Amount</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-500">Date</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((t, i) => (
                        <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-3 text-sm">{t.vendor}</td>
                          <td className="py-3 text-sm">{t.client}</td>
                          <td className="py-3 text-sm font-medium">₦{t.amount.toLocaleString()}</td>
                          <td className="py-3 text-sm text-gray-500">{t.date}</td>
                          <td className="py-3">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              t.status === 'completed' ? 'bg-green-100 text-green-700' :
                              t.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Vendors Tab */}
          {activeTab === 'vendors' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#2D3E50]">Vendors</h2>
                <div className="flex gap-3">
                  <div className="relative">
                    <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search vendors..."
                      className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    <FunnelIcon className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>

              {/* Pending Approvals */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Pending Approvals
                </h3>
                <div className="space-y-3">
                  {pendingVendors.map((vendor, i) => (
                    <div key={vendor.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <p className="font-medium text-[#2D3E50]">{vendor.name}</p>
                        <p className="text-xs text-gray-500">{vendor.email} • {vendor.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors">
                          Approve
                        </button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors">
                          Reject
                        </button>
                        <Link 
                          to={`/admin/vendors/manage/${vendor.id}`}
                          className="border border-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Vendors */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-[#2D3E50] mb-4">All Vendors</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3">Business</th>
                        <th className="text-left py-3">Category</th>
                        <th className="text-left py-3">Status</th>
                        <th className="text-left py-3">TP List</th>
                        <th className="text-left py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3">Ade's Photography</td>
                        <td className="py-3">Photography</td>
                        <td className="py-3"><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Active</span></td>
                        <td className="py-3"><span className="bg-[#FFB347] text-xs px-2 py-1 rounded-full">TP List</span></td>
                        <td className="py-3">
                          <Link to="/admin/vendors/manage/1" className="text-[#0A5C5C] text-sm hover:underline">
                            Manage
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Disputes Tab */}
          {activeTab === 'disputes' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3E50]">Disputes</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="space-y-4">
                  {disputes.map((dispute, i) => (
                    <div key={dispute.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-[#2D3E50]">Dispute #{dispute.id}</h3>
                          <p className="text-sm text-gray-600">{dispute.vendor} vs {dispute.client}</p>
                        </div>
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Open</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3"><span className="font-medium">Issue:</span> {dispute.issue}</p>
                      <div className="flex gap-3">
                        <Link 
                          to={`/admin/disputes/${dispute.id}`}
                          className="bg-[#0A5C5C] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#084848] transition-colors"
                        >
                          Review Evidence
                        </Link>
                        <Link 
                          to={`/admin/disputes/${dispute.id}/chat`}
                          className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                        >
                          Message Parties
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}   