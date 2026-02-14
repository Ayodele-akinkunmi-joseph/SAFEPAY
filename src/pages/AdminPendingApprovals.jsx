import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  CheckBadgeIcon,
  XMarkIcon,
  EyeIcon,
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function AdminPendingApprovals() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [vendors, setVendors] = useState([
    { 
      id: 1, 
      name: "Chuks Catering", 
      email: "chuks@catering.com", 
      category: "Catering", 
      date: "2026-02-13", 
      documents: {
        cac: "submitted",
        id: "submitted",
        address: "pending"
      },
      status: "pending"
    },
    { 
      id: 2, 
      name: "Biggie MC", 
      email: "biggie@mc.com", 
      category: "MC", 
      date: "2026-02-12", 
      documents: {
        cac: "submitted",
        id: "submitted",
        address: "submitted"
      },
      status: "pending"
    },
    { 
      id: 3, 
      name: "Glo Ushering", 
      email: "glo@ushering.com", 
      category: "Ushering", 
      date: "2026-02-11", 
      documents: {
        cac: "submitted",
        id: "pending",
        address: "submitted"
      },
      status: "pending"
    },
  ])

  const handleApprove = (id) => {
    if (window.confirm('Are you sure you want to approve this vendor?')) {
      setVendors(vendors.filter(v => v.id !== id))
      alert(`Vendor approved successfully`)
    }
  }

  const handleReject = (id) => {
    const reason = prompt('Please enter reason for rejection:')
    if (reason) {
      setVendors(vendors.filter(v => v.id !== id))
      alert(`Vendor rejected: ${reason}`)
    }
  }

  const filteredVendors = vendors.filter(v => {
    if (search && !v.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const getDocumentStatus = (doc) => {
    if (doc === 'submitted') {
      return <span className="text-xs text-green-600">✓</span>
    }
    return <span className="text-xs text-yellow-600">⏳</span>
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
            <h1 className="text-xl font-bold text-[#2D3E50]">Pending Approvals</h1>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vendors..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          
          {vendors.length === 0 ? (
            <div className="text-center py-12">
              <BuildingStorefrontIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No pending approvals</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredVendors.map((vendor) => (
                <div key={vendor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-[#2D3E50]">{vendor.name}</h3>
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full">
                          Pending
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{vendor.email}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">{vendor.category}</span>
                        <span className="text-gray-500">Applied: {vendor.date}</span>
                      </div>
                      
                      {/* Document Status */}
                      <div className="mt-3 flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1">
                          <DocumentTextIcon className="w-3 h-3" /> CAC: {getDocumentStatus(vendor.documents.cac)}
                        </span>
                        <span className="flex items-center gap-1">
                          <DocumentTextIcon className="w-3 h-3" /> ID: {getDocumentStatus(vendor.documents.id)}
                        </span>
                        <span className="flex items-center gap-1">
                          <DocumentTextIcon className="w-3 h-3" /> Address: {getDocumentStatus(vendor.documents.address)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/vendors/manage/${vendor.id}`}
                        className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Review
                      </Link>
                      <button
                        onClick={() => handleApprove(vendor.id)}
                        className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                      >
                        <CheckBadgeIcon className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(vendor.id)}
                        className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
                      >
                        <XMarkIcon className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}