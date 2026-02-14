import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  CurrencyDollarIcon, 
  DocumentTextIcon, 
  UserIcon,
  ArrowPathIcon,
  CheckBadgeIcon,
  ClipboardDocumentIcon,
  ShareIcon
} from '@heroicons/react/24/outline'


export default function CreateLink() {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const navigate = useNavigate()
  
  // Mock vendor - in real app, get from auth context
  const vendor = {
    id: 'vendor_123',
    businessName: "Ade's Photography",
    email: 'ade@photography.com',
    tpList: true,
    fee: 1 // 1% for TP List, 2% for free
  }
  
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
    
    // Generate unique reference
    const reference = `SP-${vendor.businessName.slice(0,3)}-${Date.now()}`
    const paymentLink = `${window.location.origin}/pay/${reference}`
    
    // Store transaction
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
      createdAt: new Date().toISOString(),
      fee: vendor.fee
    }
    
    localStorage.setItem(reference, JSON.stringify(transaction))
    setGeneratedLink(paymentLink)
    setLoading(false)
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Safe-Pay Payment Link',
        text: `Pay ${vendor.businessName} securely via Safe-Pay`,
        url: generatedLink
      })
    }
  }
  
  // If link don generate, show success
  if (generatedLink) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckBadgeIcon className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">
              Payment Link Created!
            </h2>
            <p className="text-gray-600 mb-6">
              Send this link to your client. They can pay via Bank Transfer, USSD, or QR Code.
            </p>
            
            {/* Link Display */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-xs text-gray-500 mb-2 text-left">Payment Link</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={generatedLink}
                  readOnly
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-mono"
                />
                <button
                  onClick={handleCopy}
                  className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <ClipboardDocumentIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 bg-[#0A5C5C] rounded-lg hover:bg-[#084848]"
                >
                  <ShareIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              {copied && (
                <p className="text-sm text-green-600 mt-2">✓ Copied to clipboard!</p>
              )}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setGeneratedLink('')
                  setAmount('')
                  setDescription('')
                  setClientName('')
                  setClientEmail('')
                }}
                className="flex-1 border-2 border-[#0A5C5C] text-[#0A5C5C] py-3 px-4 rounded-lg font-medium hover:bg-[#0A5C5C] hover:text-white transition-all"
              >
                Create Another Link
              </button>
              <button
                onClick={() => navigate('/vendor/dashboard')}
                className="flex-1 bg-[#0A5C5C] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#084848] transition-all"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Main form - FOR VENDORS ONLY
  return (
    <div className="min-h-screen bg-[#FDF8F2] py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/vendor/dashboard')}
            className="inline-flex items-center text-[#0A5C5C] hover:text-[#084848]"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </button>
          
          {/* TP List Badge */}
          {vendor.tpList && (
            <span className="bg-[#FFB347] text-[#2D3E50] text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              <CheckBadgeIcon className="w-4 h-4" />
              TP List • 1% fee
            </span>
          )}
        </div>
        
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#E67A4C] border-opacity-20 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A5C5C] to-[#084848] px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0A5C5C]">
                  {vendor.businessName.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Create Payment Link</h1>
                <p className="text-white text-opacity-90 text-sm">{vendor.businessName}</p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <CurrencyDollarIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Amount (₦)</span>
                </div>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">₦</span>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                  placeholder="500000"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Your fee: {vendor.fee}% (₦{((amount || 0) * vendor.fee / 100).toLocaleString()})
              </p>
            </div>
            
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <DocumentTextIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Service Description</span>
                </div>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                placeholder="Wedding photography - 6 hours coverage"
              />
            </div>
            
            {/* Client Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Client Name (optional)</span>
                  </div>
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                  placeholder="e.g. Mr Adebayo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-[#E67A4C]">📧</span>
                    <span>Client Email (optional)</span>
                  </div>
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                  placeholder="client@example.com"
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all shadow-lg text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  Creating Link...
                </span>
              ) : 'Generate Payment Link'}
            </button>
            
            {/* Payment Methods Notice */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 text-center">
                💳 Your client can pay via: <span className="font-medium text-[#0A5C5C]">Bank Transfer</span>, 
                <span className="font-medium text-[#0A5C5C]"> USSD</span>, or 
                <span className="font-medium text-[#0A5C5C]"> QR Code</span>. 
                No Paystack account needed.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}