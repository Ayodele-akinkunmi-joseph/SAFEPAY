import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  CurrencyDollarIcon, 
  DocumentTextIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  ClipboardDocumentIcon,
  ShareIcon,
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  ChartBarIcon,
  CalendarIcon,
  Cog6ToothIcon,
  PhotoIcon,
  BellIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorDashboard() {
  const [vendor, setVendor] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  
  // Mock vendor data
  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      setVendor({
        id: 'vendor_123',
        businessName: "Ade's Photography",
        email: 'ade@photography.com',
        phone: '08012345678',
        verified: true,
        tpList: true,
        tpListExpiry: '2026-03-15',
        balance: 245000,
        pendingBalance: 520000,
        totalEarned: 1850000,
        completedJobs: 24,
        rating: 4.8,
        fee: 1,
        profileImage: 'AP',
        joinDate: 'January 2025',
        recentActivity: [
          { id: 1, type: 'payment', amount: 350000, client: 'Mr & Mrs Adebayo', date: '2026-02-13', status: 'completed' },
          { id: 2, type: 'payment', amount: 450000, client: 'Chioma E.', date: '2026-02-12', status: 'pending' },
          { id: 3, type: 'booking', client: 'Oluwaseun A.', date: '2026-02-11', status: 'confirmed' }
        ]
      })
      setLoading(false)
    }, 1000)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('vendor')
    window.location.href = '/'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-[#0A5C5C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#0A5C5C] rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-[#2D3E50] font-medium">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Top Navigation Bar - Clean, No Gradient */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:bg-[#084848] transition-colors">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-[#0A5C5C] text-lg">Safe-Pay</span>
            </Link>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              {/* Notification Bell */}
              <button className="relative p-2 text-gray-500 hover:text-[#0A5C5C] hover:bg-gray-100 rounded-lg transition-colors">
                <BellIcon className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{vendor.businessName.charAt(0)}</span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-[#2D3E50]">
                    {vendor.businessName}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1">
                    <Link to="/vendor/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Your Profile
                    </Link>
                    <Link to="/vendor/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Welcome Banner - Clean Design */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#2D3E50]">
                Welcome back, {vendor.businessName}!
              </h1>
              <p className="text-gray-600 mt-1">
                Member since {vendor.joinDate} • {vendor.completedJobs} jobs completed
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/vendor/withdraw"
                className="bg-[#0A5C5C] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#084848] transition-colors flex items-center gap-2"
              >
                <BanknotesIcon className="w-5 h-5" />
                Withdraw Funds
              </Link>
              <Link
                to="/vendor/transactions"
                className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <ClockIcon className="w-5 h-5" />
                History
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid - Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Available Balance */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Available Balance</p>
                <p className="text-2xl font-bold text-[#2D3E50]">
                  ₦{vendor.balance.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-[#0A5C5C] bg-opacity-10 rounded-lg flex items-center justify-center">
                <BanknotesIcon className="w-5 h-5 text-[#0A5C5C]" />
              </div>
            </div>
            <p className="text-xs text-gray-400">Settles today at 4pm</p>
          </div>
          
          {/* Pending Release */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending Release</p>
                <p className="text-2xl font-bold text-[#E67A4C]">
                  ₦{vendor.pendingBalance.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-[#E67A4C] bg-opacity-10 rounded-lg flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-[#E67A4C]" />
              </div>
            </div>
            <p className="text-xs text-gray-400">Awaiting client confirmation</p>
          </div>
          
          {/* Total Earned */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Earned</p>
                <p className="text-2xl font-bold text-[#2D3E50]">
                  ₦{vendor.totalEarned.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-gray-400">Lifetime earnings</p>
          </div>
          
          {/* Jobs Completed */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Jobs Completed</p>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-[#2D3E50]">{vendor.completedJobs}</p>
                  <div className="flex items-center mb-1">
                    {[1,2,3,4,5].map((star) => (
                      <StarIconSolid 
                        key={star} 
                        className={`w-4 h-4 ${star <= Math.floor(vendor.rating) ? 'text-[#FFB347]' : 'text-gray-200'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{vendor.rating}</span>
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserGroupIcon className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-gray-400">From 87 reviews</p>
          </div>
        </div>

        {/* Main Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Create Payment Link (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Create Payment Link Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <h2 className="font-semibold text-[#2D3E50]">Create New Payment Link</h2>
              </div>
              <div className="p-6">
                <CreateLinkForm vendor={vendor} />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 flex justify-between items-center">
                <h2 className="font-semibold text-[#2D3E50]">Recent Activity</h2>
                <Link to="/vendor/transactions" className="text-sm text-[#0A5C5C] hover:underline">
                  View all
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {vendor.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-[#2D3E50]">
                          {activity.type === 'payment' ? 'Payment received' : 'New booking'}
                        </p>
                        <p className="text-sm text-gray-500">{activity.client}</p>
                      </div>
                      <div className="text-right">
                        {activity.amount && (
                          <p className="font-medium text-[#0A5C5C]">₦{activity.amount.toLocaleString()}</p>
                        )}
                        <p className="text-xs text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile & Upgrades (1/3 width) */}
          <div className="space-y-6">
            
            {/* Vendor Profile Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <h2 className="font-semibold text-[#2D3E50]">Your Profile</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#0A5C5C] rounded-xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{vendor.businessName.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D3E50]">{vendor.businessName}</h3>
                    <p className="text-sm text-gray-500">{vendor.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {vendor.tpList && (
                        <span className="bg-[#FFB347] text-[#2D3E50] text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                          <StarIconSolid className="w-3 h-3" />
                          TP LIST
                        </span>
                      )}
                      {vendor.verified && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckBadgeIcon className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Fee rate</span>
                    <span className="font-medium text-[#2D3E50]">{vendor.fee}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">TP List status</span>
                    <span className="font-medium text-green-600">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Renews on</span>
                    <span className="font-medium text-[#2D3E50]">Mar 15, 2026</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    to="/vendor/profile/edit"
                    className="text-[#0A5C5C] text-sm font-medium hover:underline"
                  >
                    Edit profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* TP List Upgrade Card - Clean Design */}
            <div className="bg-white rounded-xl border-2 border-[#FFB347] overflow-hidden">
              <div className="bg-[#FFB347] px-6 py-3">
                <div className="flex items-center gap-2">
                  <StarIconSolid className="w-5 h-5 text-[#2D3E50]" />
                  <h3 className="font-semibold text-[#2D3E50]">TP List Benefits</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Blue verification badge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Featured in search results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">1% transaction fee (save 50%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Priority customer support</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-400 mb-4">
                  Your TP List is active and renews automatically.
                </p>
                <Link
                  to="/vendor/tp-list/manage"
                  className="block text-center bg-[#FFB347] text-[#2D3E50] px-4 py-2.5 rounded-lg font-medium hover:bg-[#f0a83c] transition-colors"
                >
                  Manage Subscription
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-[#2D3E50] mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/vendor/portfolio"
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <PhotoIcon className="w-5 h-5 text-[#0A5C5C]" />
                  <span className="text-sm text-gray-700">Portfolio Photos</span>
                </Link>
                <Link
                  to="/vendor/settings"
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Cog6ToothIcon className="w-5 h-5 text-[#0A5C5C]" />
                  <span className="text-sm text-gray-700">Account Settings</span>
                </Link>
                <Link
                  to="/vendor/analytics"
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <ChartBarIcon className="w-5 h-5 text-[#0A5C5C]" />
                  <span className="text-sm text-gray-700">Analytics</span>
                </Link>
                <Link
                  to="/vendor/calendar"
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <CalendarIcon className="w-5 h-5 text-[#0A5C5C]" />
                  <span className="text-sm text-gray-700">Booking Calendar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Create Link Form Component (Redesigned)
function CreateLinkForm({ vendor }) {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [generatedLink, setGeneratedLink] = useState('')
  const [copied, setCopied] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    const reference = `SP-${vendor.businessName.slice(0,3)}-${Date.now()}`
    const paymentLink = `${window.location.origin}/pay/${reference}`
    
    const transaction = {
      reference,
      vendorId: vendor.id,
      vendorName: vendor.businessName,
      vendorEmail: vendor.email,
      amount,
      description,
      clientName,
      clientEmail,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    
    localStorage.setItem(reference, JSON.stringify(transaction))
    
    setTimeout(() => {
      setGeneratedLink(paymentLink)
      setLoading(false)
    }, 1000)
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (generatedLink) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckBadgeIcon className="w-8 h-8 text-green-600" />
        </div>
        
        <h3 className="text-lg font-semibold text-[#2D3E50] mb-2">
          Payment Link Created!
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Share this link with your client
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={generatedLink}
              readOnly
              className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
            />
            <button
              onClick={handleCopy}
              className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <ClipboardDocumentIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {copied && (
            <p className="text-sm text-green-600 mt-2">✓ Copied!</p>
          )}
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setGeneratedLink('')}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Create New
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Pay me securely: ${generatedLink}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
          >
            Share on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount (₦)
        </label>
        <input
          type="number"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent"
          placeholder="500000"
        />
        <p className="mt-1 text-xs text-gray-500">
          Fee: {vendor.fee}% (₦{((amount || 0) * vendor.fee / 100).toLocaleString()})
        </p>
      </div>
      
      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent"
          placeholder="Wedding photography - 6 hours coverage"
        />
      </div>
      
      {/* Client Details */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Name
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C]"
            placeholder="Mr Adebayo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Email
          </label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C]"
            placeholder="client@example.com"
          />
        </div>
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0A5C5C] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#084848] disabled:bg-gray-400 transition-colors"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <ArrowPathIcon className="w-4 h-4 animate-spin" />
            Creating...
          </span>
        ) : (
          'Generate Payment Link'
        )}
      </button>
    </form>
  )
} 