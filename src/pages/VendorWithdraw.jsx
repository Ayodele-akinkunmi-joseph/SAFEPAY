import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  CheckBadgeIcon,
  ClockIcon,
  ArrowPathIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

export default function VendorWithdraw() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [selectedBank, setSelectedBank] = useState('')
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  // Mock data - replace with real data from backend
  const vendor = {
    balance: 245000,
    pendingBalance: 520000,
    documents: {
      id: 'verified',
      address: 'pending',
      cac: 'uploaded'
    },
    bankDetails: {
      accountNumber: '0123456789',
      accountName: "Ade's Photography"
    }
  }

  const availableBalance = vendor.balance
  const pendingBalance = vendor.pendingBalance

  // Check if all required documents are verified
  const hasRequiredDocs = vendor.documents.id === 'verified' && 
                          vendor.documents.address === 'verified'

  const banks = [
    'Access Bank',
    'GTBank',
    'UBA',
    'First Bank',
    'Zenith Bank',
    'Fidelity Bank'
  ]

  const handleWithdraw = (e) => {
    e.preventDefault()
    setProcessing(true)
    
    setTimeout(() => {
      setProcessing(false)
      setSuccess(true)
      setTimeout(() => {
        navigate('/vendor/dashboard')
      }, 2000)
    }, 2000)
  }

  // Show document requirement message if not verified
  if (!hasRequiredDocs) {
    return (
      <div className="min-h-screen bg-[#FDF8F2]">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-[#2D3E50]">Withdraw Funds</h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <InformationCircleIcon className="w-10 h-10 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#2D3E50] mb-3">Documents Required</h2>
            <p className="text-gray-600 mb-6">
              You need to upload and verify your required documents before you can withdraw funds.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-medium text-[#2D3E50] mb-3">Document Status:</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Valid ID Card</span>
                  {vendor.documents.id === 'verified' ? (
                    <span className="text-green-600 text-sm">✓ Verified</span>
                  ) : (
                    <span className="text-yellow-600 text-sm">Pending</span>
                  )}
                </li>
                <li className="flex items-center justify-between">
                  <span>Proof of Address</span>
                  {vendor.documents.address === 'verified' ? (
                    <span className="text-green-600 text-sm">✓ Verified</span>
                  ) : (
                    <span className="text-yellow-600 text-sm">Pending</span>
                  )}
                </li>
                <li className="flex items-center justify-between">
                  <span>CAC Registration</span>
                  <span className="text-gray-500 text-sm">Optional</span>
                </li>
              </ul>
            </div>

            <Link
              to="/vendor/documents"
              className="inline-block bg-[#0A5C5C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#084848] transition-colors"
            >
              Upload Documents
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckBadgeIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Withdrawal Successful!</h2>
          <p className="text-gray-600 mb-4">₦{parseInt(amount).toLocaleString()} will be sent to your bank account.</p>
          <p className="text-sm text-gray-400">Arrives in 1-2 business days</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Withdraw Funds</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        
        {/* Balance Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">Available</p>
            <p className="text-2xl font-bold text-[#0A5C5C]">₦{availableBalance.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">Pending</p>
            <p className="text-2xl font-bold text-[#E67A4C]">₦{pendingBalance.toLocaleString()}</p>
          </div>
        </div>

        {/* Withdrawal Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <form onSubmit={handleWithdraw} className="space-y-6">
            
            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount to withdraw
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">₦</span>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  max={availableBalance}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C]"
                  placeholder="0.00"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Available balance: ₦{availableBalance.toLocaleString()}
              </p>
            </div>

            {/* Bank Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select bank account
              </label>
              <select
                required
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C]"
              >
                <option value="">Choose a bank</option>
                {banks.map(bank => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
            </div>

            {/* Account Details Preview */}
            {selectedBank && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-[#2D3E50] mb-2">Account details</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">Account Number: {vendor.bankDetails.accountNumber}</p>
                  <p className="text-gray-600">Account Name: {vendor.bankDetails.accountName}</p>
                </div>
              </div>
            )}

            {/* Withdrawal Info */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Processing time: 1-2 business days</p>
                  <p className="text-xs text-blue-600 mt-1">
                    Withdrawals are processed daily at 4pm. Funds arrive in your bank within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing || !amount || parseInt(amount) > availableBalance}
              className="w-full bg-[#0A5C5C] text-white py-4 rounded-lg font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-colors"
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <ArrowPathIcon className="w-4 h-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                'Withdraw Funds'
              )}
            </button>

            {parseInt(amount) > availableBalance && (
              <p className="text-sm text-red-600 text-center">
                Amount exceeds available balance
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}