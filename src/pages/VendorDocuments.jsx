import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  DocumentTextIcon,
  IdentificationIcon,
  HomeModernIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  XMarkIcon,
  CloudArrowUpIcon,
  EyeIcon,
  TrashIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorDocuments() {
  const navigate = useNavigate()
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalType, setModalType] = useState('success') // success, error, warning

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock vendor data
  const [vendor, setVendor] = useState({
    id: 'vendor_123',
    businessName: "Ade's Photography",
    email: 'ade@photography.com',
    verified: false,
    profileImage: null,
    documents: {
      cac: {
        required: false, // Changed to false - optional
        status: 'pending',
        file: null,
        fileName: '',
        uploadedAt: null,
        notes: ''
      },
      id: {
        required: true,
        status: 'uploaded',
        file: 'id_card.jpg',
        fileName: 'id_card.jpg',
        uploadedAt: '2026-02-10',
        notes: ''
      },
      address: {
        required: true,
        status: 'pending',
        file: null,
        fileName: '',
        uploadedAt: null,
        notes: ''
      },
      businessLicense: {
        required: false,
        status: 'pending',
        file: null,
        fileName: '',
        uploadedAt: null,
        notes: ''
      }
    }
  })

  const showMessage = (message, type = 'success') => {
    setModalMessage(message)
    setModalType(type)
    setShowModal(true)
    setTimeout(() => setShowModal(false), 3000)
  }

  const handleFileUpload = (docType, file) => {
    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      showMessage('File too large. Maximum size is 10MB.', 'error')
      return
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      showMessage('Only JPG, PNG, and PDF files are allowed.', 'error')
      return
    }

    setUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    setTimeout(() => {
      clearInterval(interval)
      setVendor({
        ...vendor,
        documents: {
          ...vendor.documents,
          [docType]: {
            ...vendor.documents[docType],
            status: 'uploaded',
            file: file,
            fileName: file.name,
            uploadedAt: new Date().toISOString().split('T')[0]
          }
        }
      })
      setUploading(false)
      setUploadProgress(0)
      showMessage(`${getDocumentTitle(docType)} uploaded successfully!`)
    }, 2000)
  }

  const handleDelete = (docType) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      setVendor({
        ...vendor,
        documents: {
          ...vendor.documents,
          [docType]: {
            ...vendor.documents[docType],
            status: 'pending',
            file: null,
            fileName: '',
            uploadedAt: null
          }
        }
      })
      showMessage('Document deleted', 'warning')
    }
  }

  const handleSubmitAll = () => {
    const requiredPending = Object.entries(vendor.documents)
      .filter(([_, doc]) => doc.required && doc.status !== 'uploaded' && doc.status !== 'verified')
    
    if (requiredPending.length > 0) {
      showMessage(`Please upload all required documents first`, 'error')
      return
    }

    showMessage('Documents submitted for verification! You can now withdraw funds.', 'success')
    setTimeout(() => navigate('/vendor/dashboard'), 2000)
  }

  const handleProfileImageUpload = (file) => {
    if (!file) return
    
    if (file.size > 5 * 1024 * 1024) {
      showMessage('Profile image too large. Max 5MB.', 'error')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setVendor({
        ...vendor,
        profileImage: e.target.result
      })
      showMessage('Profile picture updated!', 'success')
    }
    reader.readAsDataURL(file)
  }

  const getStatusBadge = (status) => {
    switch(status) {
      case 'verified':
        return <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <CheckBadgeIcon className="w-3 h-3" />
          Verified
        </span>
      case 'uploaded':
        return <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <DocumentTextIcon className="w-3 h-3" />
          Uploaded
        </span>
      case 'rejected':
        return <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <XMarkIcon className="w-3 h-3" />
          Rejected
        </span>
      default:
        return <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <InformationCircleIcon className="w-3 h-3" />
          Pending
        </span>
    }
  }

  const getDocumentIcon = (docType) => {
    switch(docType) {
      case 'cac': return <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
      case 'id': return <IdentificationIcon className="w-8 h-8 text-purple-600" />
      case 'address': return <HomeModernIcon className="w-8 h-8 text-green-600" />
      default: return <DocumentTextIcon className="w-8 h-8 text-gray-600" />
    }
  }

  const getDocumentTitle = (docType) => {
    switch(docType) {
      case 'cac': return 'CAC Registration (Optional)'
      case 'id': return 'Valid ID Card'
      case 'address': return 'Proof of Address'
      case 'businessLicense': return 'Business License (Optional)'
      default: return docType
    }
  }

  const getDocumentDescription = (docType) => {
    switch(docType) {
      case 'cac':
        return 'Optional - Upload your CAC certificate if you have one'
      case 'id':
        return 'National ID, International Passport, or Driver\'s License'
      case 'address':
        return 'Utility bill, Bank statement, or Tenancy agreement (not older than 3 months)'
      case 'businessLicense':
        return 'Any additional business permits or licenses'
      default:
        return ''
    }
  }

  const pendingCount = Object.values(vendor.documents).filter(d => d.required && d.status === 'pending').length
  const uploadedCount = Object.values(vendor.documents).filter(d => d.status === 'uploaded' || d.status === 'verified').length
  const totalRequired = Object.values(vendor.documents).filter(d => d.required).length

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowModal(false)}></div>
          <div className={`bg-white rounded-xl p-6 max-w-sm w-full relative z-10 animate-scaleIn ${
            modalType === 'success' ? 'border-green-500' : 
            modalType === 'error' ? 'border-red-500' : 'border-yellow-500'
          } border-2`}>
            <div className="text-center">
              {modalType === 'success' && <CheckBadgeIcon className="w-12 h-12 text-green-500 mx-auto mb-3" />}
              {modalType === 'error' && <XMarkIcon className="w-12 h-12 text-red-500 mx-auto mb-3" />}
              {modalType === 'warning' && <InformationCircleIcon className="w-12 h-12 text-yellow-500 mx-auto mb-3" />}
              <p className="text-gray-800">{modalMessage}</p>
            </div>
          </div>
        </div>
      )}

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
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C] hover:text-[#084848]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Verification Documents</h1>
          <span className="ml-auto bg-[#0A5C5C] text-white text-xs px-3 py-1 rounded-full">
            {uploadedCount}/{totalRequired} Required
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Progress Banner */}
        {pendingCount > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex items-start gap-3 animate-fadeInUp">
            <InformationCircleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-800">
                <span className="font-bold">{pendingCount} required document(s) pending</span> - 
                You need to upload required documents to withdraw funds and get verified.
              </p>
              <p className="text-xs text-yellow-600 mt-1">
                Optional documents can be uploaded anytime to build more trust.
              </p>
            </div>
          </div>
        )}

        {/* Vendor Info Card with Profile Picture */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 animate-scaleIn">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 bg-[#0A5C5C] rounded-xl flex items-center justify-center overflow-hidden">
                {vendor.profileImage ? (
                  <img src={vendor.profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-white">{vendor.businessName.charAt(0)}</span>
                )}
              </div>
              <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <CloudArrowUpIcon className="w-6 h-6 text-white" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleProfileImageUpload(e.target.files[0])}
                />
              </label>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-bold text-[#2D3E50]">{vendor.businessName}</h2>
              <p className="text-sm text-gray-600">{vendor.email}</p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {vendor.verified ? 'Verified' : 'Not Verified'}
                </span>
                <span className="text-xs text-[#0A5C5C]">Click avatar to upload profile picture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload Sections */}
        <div className="space-y-6">
          
          {/* CAC Document - Optional */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn delay-100">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                {getDocumentIcon('cac')}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-[#2D3E50]">{getDocumentTitle('cac')}</h3>
                    <p className="text-xs text-gray-500 mt-1">{getDocumentDescription('cac')}</p>
                  </div>
                  {getStatusBadge(vendor.documents.cac.status)}
                </div>

                {vendor.documents.cac.status === 'uploaded' || vendor.documents.cac.status === 'verified' ? (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">{vendor.documents.cac.fileName}</p>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.cac.uploadedAt}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4 text-gray-600" />
                      </button>
                      <button 
                        onClick={() => handleDelete('cac')}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <TrashIcon className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <label className="block">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0A5C5C] transition-colors cursor-pointer">
                        <CloudArrowUpIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Click to upload (optional)</p>
                        <p className="text-xs text-gray-400">PDF, JPG, PNG (Max 10MB)</p>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('cac', e.target.files[0])}
                        />
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ID Document - Required */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn delay-200">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                {getDocumentIcon('id')}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-[#2D3E50]">{getDocumentTitle('id')}</h3>
                    <p className="text-xs text-gray-500 mt-1">{getDocumentDescription('id')}</p>
                  </div>
                  {getStatusBadge(vendor.documents.id.status)}
                </div>

                {vendor.documents.id.status === 'uploaded' || vendor.documents.id.status === 'verified' ? (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">{vendor.documents.id.fileName}</p>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.id.uploadedAt}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4 text-gray-600" />
                      </button>
                      <button 
                        onClick={() => handleDelete('id')}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <TrashIcon className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <label className="block">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0A5C5C] transition-colors cursor-pointer">
                        <CloudArrowUpIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Click to upload (required)</p>
                        <p className="text-xs text-gray-400">PDF, JPG, PNG (Max 10MB)</p>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('id', e.target.files[0])}
                        />
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Address Document - Required */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn delay-300">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                {getDocumentIcon('address')}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-[#2D3E50]">{getDocumentTitle('address')}</h3>
                    <p className="text-xs text-gray-500 mt-1">{getDocumentDescription('address')}</p>
                  </div>
                  {getStatusBadge(vendor.documents.address.status)}
                </div>

                {vendor.documents.address.status === 'uploaded' || vendor.documents.address.status === 'verified' ? (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">{vendor.documents.address.fileName}</p>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.address.uploadedAt}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4 text-gray-600" />
                      </button>
                      <button 
                        onClick={() => handleDelete('address')}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <TrashIcon className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <label className="block">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0A5C5C] transition-colors cursor-pointer">
                        <CloudArrowUpIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Click to upload (required)</p>
                        <p className="text-xs text-gray-400">PDF, JPG, PNG (Max 10MB)</p>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('address', e.target.files[0])}
                        />
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Business License - Optional */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn delay-400">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-bold text-[#2D3E50]">{getDocumentTitle('businessLicense')}</h3>
                    <p className="text-xs text-gray-500 mt-1">{getDocumentDescription('businessLicense')}</p>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Optional</span>
                </div>

                {vendor.documents.businessLicense.status === 'uploaded' ? (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">{vendor.documents.businessLicense.fileName}</p>
                        <p className="text-xs text-gray-500">Uploaded: {vendor.documents.businessLicense.uploadedAt}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDelete('businessLicense')}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <TrashIcon className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <label className="block">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-[#0A5C5C] transition-colors cursor-pointer">
                        <CloudArrowUpIcon className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Click to upload (optional)</p>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('businessLicense', e.target.files[0])}
                        />
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Upload Progress Bar */}
        {uploading && (
          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-4 animate-scaleIn">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#2D3E50]">Uploading...</p>
              <p className="text-sm text-[#0A5C5C]">{uploadProgress}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#0A5C5C] h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSubmitAll}
            className="flex-1 bg-[#0A5C5C] text-white py-4 rounded-xl font-semibold hover:bg-[#084848] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Documents for Verification
          </button>
          <Link
            to="/vendor/dashboard"
            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all text-center"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Info Note */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 font-medium">Important Notes:</p>
              <ul className="text-xs text-blue-600 mt-2 space-y-1 list-disc list-inside">
                <li>Required documents must be uploaded before you can withdraw funds</li>
                <li>Optional documents help build trust with clients</li>
                <li>Documents are securely stored and never shared without consent</li>
                <li>Verification usually takes 24-48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}