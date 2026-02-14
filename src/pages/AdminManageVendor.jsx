import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  BuildingStorefrontIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckBadgeIcon,
  XMarkIcon,
  StarIcon,
  DocumentTextIcon,
  IdentificationIcon,
  HomeModernIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  EyeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function AdminManageVendor() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [verificationNote, setVerificationNote] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock vendor data
  const [vendor, setVendor] = useState({
    id: id,
    name: "Ade's Photography",
    email: "ade@photography.com",
    phone: "08012345678",
    category: "Photography",
    location: "Ikeja, Lagos",
    status: "active",
    tpList: true,
    rating: 4.9,
    totalBookings: 87,
    totalEarned: 1850000,
    joined: "2025-01-15",
    documents: {
      cac: {
        status: "pending", // pending, verified, rejected
        file: "cac_certificate.pdf",
        uploaded: "2026-02-10",
        notes: ""
      },
      id: {
        status: "verified",
        file: "id_card.jpg",
        uploaded: "2026-02-09",
        notes: "Valid ID provided"
      },
      address: {
        status: "pending",
        file: "utility_bill.pdf",
        uploaded: "2026-02-10",
        notes: ""
      }
    }
  })

  const handleVerifyDocument = (docType) => {
    setVendor({
      ...vendor,
      documents: {
        ...vendor.documents,
        [docType]: {
          ...vendor.documents[docType],
          status: 'verified',
          notes: verificationNote || 'Document verified'
        }
      }
    })
    setShowVerificationModal(false)
    setSelectedDoc(null)
    setVerificationNote('')
  }

  const handleRejectDocument = (docType) => {
    const reason = prompt('Enter reason for rejection:')
    if (reason) {
      setVendor({
        ...vendor,
        documents: {
          ...vendor.documents,
          [docType]: {
            ...vendor.documents[docType],
            status: 'rejected',
            notes: reason
          }
        }
      })
    }
  }

  const getDocumentStatusBadge = (status) => {
    switch(status) {
      case 'verified':
        return <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <CheckBadgeIcon className="w-3 h-3" />
          Verified
        </span>
      case 'rejected':
        return <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <XMarkIcon className="w-3 h-3" />
          Rejected
        </span>
      default:
        return <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <DocumentTextIcon className="w-3 h-3" />
          Pending
        </span>
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C] hover:text-[#084848] transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Manage Vendor</h1>
          <span className="ml-auto bg-[#0A5C5C] text-white text-xs px-3 py-1 rounded-full">
            ID: {id}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Vendor Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 animate-fadeInUp">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 bg-[#0A5C5C] rounded-xl flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{vendor.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-[#2D3E50]">{vendor.name}</h1>
                {vendor.tpList && (
                  <span className="bg-[#FFB347] text-[#2D3E50] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <StarIconSolid className="w-3 h-3" />
                    TP List
                  </span>
                )}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  vendor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {vendor.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{vendor.category}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                  <span>{vendor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <PhoneIcon className="w-4 h-4 text-gray-400" />
                  <span>{vendor.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPinIcon className="w-4 h-4 text-gray-400" />
                  <span>{vendor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <StarIcon className="w-4 h-4 text-gray-400" />
                  <span>{vendor.rating} rating • {vendor.totalBookings} bookings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'overview' 
                ? 'border-b-2 border-[#0A5C5C] text-[#0A5C5C]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'documents' 
                ? 'border-b-2 border-[#0A5C5C] text-[#0A5C5C]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Documents
            {Object.values(vendor.documents).some(d => d.status === 'pending') && (
              <span className="ml-2 bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full">
                Pending
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'transactions' 
                ? 'border-b-2 border-[#0A5C5C] text-[#0A5C5C]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Transactions
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - Stats */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Total Earned</p>
                  <p className="text-xl font-bold text-[#0A5C5C]">₦{(vendor.totalEarned / 1000000).toFixed(1)}M</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Bookings</p>
                  <p className="text-xl font-bold text-[#2D3E50]">{vendor.totalBookings}</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="text-xl font-bold text-[#2D3E50]">{vendor.joined}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <p className="font-medium">Booking #{i}</p>
                        <p className="text-xs text-gray-500">Mr & Mrs Adebayo • Wedding</p>
                      </div>
                      <span className="text-sm text-green-600">₦350,000</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Actions */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Actions</h2>
                <div className="space-y-3">
                  <button className="w-full bg-[#0A5C5C] text-white py-3 rounded-lg font-medium hover:bg-[#084848] transition-colors">
                    Message Vendor
                  </button>
                  <button 
                    onClick={() => setActiveTab('documents')}
                    className="w-full border border-green-500 text-green-500 py-3 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Verify Documents
                  </button>
                  <button className="w-full border border-yellow-500 text-yellow-500 py-3 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-colors">
                    Suspend Vendor
                  </button>
                  <button className="w-full border border-red-500 text-red-500 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>

              {/* TP List Management */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">TP List Status</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Current Status</span>
                    <span className="bg-[#FFB347] text-xs px-2 py-1 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Expires</span>
                    <span className="text-sm">Mar 15, 2026</span>
                  </div>
                  <button className="w-full border border-[#FFB347] text-[#2D3E50] py-2 rounded-lg hover:bg-[#FFB347] transition-colors">
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            
            {/* Document Verification Status */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                <DocumentCheckIcon className="w-5 h-5 text-[#0A5C5C]" />
                Verification Documents
              </h2>
              
              <div className="space-y-4">
                
                {/* CAC Document */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IdentificationIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D3E50]">CAC Registration</h3>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.cac.uploaded}</p>
                        {vendor.documents.cac.notes && (
                          <p className="text-xs text-gray-600 mt-1">Note: {vendor.documents.cac.notes}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getDocumentStatusBadge(vendor.documents.cac.status)}
                      <button 
                        onClick={() => window.open('#', '_blank')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="View Document"
                      >
                        <EyeIcon className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  {vendor.documents.cac.status === 'pending' && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedDoc('cac')
                          setShowVerificationModal(true)
                        }}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                      >
                        <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                        Verify
                      </button>
                      <button
                        onClick={() => handleRejectDocument('cac')}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
                      >
                        <XMarkIcon className="w-4 h-4 inline mr-1" />
                        Reject
                      </button>
                    </div>
                  )}
                </div>

                {/* ID Document */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <IdentificationIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D3E50]">ID Verification</h3>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.id.uploaded}</p>
                        {vendor.documents.id.notes && (
                          <p className="text-xs text-gray-600 mt-1">Note: {vendor.documents.id.notes}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getDocumentStatusBadge(vendor.documents.id.status)}
                      <button 
                        onClick={() => window.open('#', '_blank')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <EyeIcon className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Address Document */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <HomeModernIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#2D3E50]">Address Proof</h3>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.address.uploaded}</p>
                        {vendor.documents.address.notes && (
                          <p className="text-xs text-gray-600 mt-1">Note: {vendor.documents.address.notes}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getDocumentStatusBadge(vendor.documents.address.status)}
                      <button 
                        onClick={() => window.open('#', '_blank')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <EyeIcon className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  {vendor.documents.address.status === 'pending' && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedDoc('address')
                          setShowVerificationModal(true)
                        }}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                      >
                        <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                        Verify
                      </button>
                      <button
                        onClick={() => handleRejectDocument('address')}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
                      >
                        <XMarkIcon className="w-4 h-4 inline mr-1" />
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Verification Summary */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Verification Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">
                    {Object.values(vendor.documents).filter(d => d.status === 'verified').length}
                  </p>
                  <p className="text-sm text-gray-600">Verified</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">
                    {Object.values(vendor.documents).filter(d => d.status === 'pending').length}
                  </p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-2xl font-bold text-red-600">
                    {Object.values(vendor.documents).filter(d => d.status === 'rejected').length}
                  </p>
                  <p className="text-sm text-gray-600">Rejected</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Transaction History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-medium text-gray-500">ID</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Client</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Amount</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5].map((i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 text-sm">TRX-00{i}</td>
                      <td className="py-3 text-sm">Mr & Mrs Adebayo</td>
                      <td className="py-3 text-sm font-medium text-[#0A5C5C]">₦350,000</td>
                      <td className="py-3 text-sm text-gray-500">2026-02-1{i}</td>
                      <td className="py-3">
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                      </td>
                      <td className="py-3">
                        <Link to={`/admin/transactions/${i}`} className="text-[#0A5C5C] text-sm hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 animate-scaleIn">
            <h3 className="text-lg font-bold text-[#2D3E50] mb-4">Verify Document</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Preview
              </label>
              <div className="border border-gray-200 rounded-lg p-8 text-center bg-gray-50">
                <DocumentDuplicateIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">cac_certificate.pdf</p>
                <button className="text-[#0A5C5C] text-sm mt-2 hover:underline">
                  Click to view full document
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Notes (Optional)
              </label>
              <textarea
                value={verificationNote}
                onChange={(e) => setVerificationNote(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C]"
                placeholder="Add any notes about this verification..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  handleVerifyDocument(selectedDoc)
                }}
                className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Verify Document
              </button>
              <button
                onClick={() => {
                  setShowVerificationModal(false)
                  setSelectedDoc(null)
                  setVerificationNote('')
                }}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}