import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  CheckBadgeIcon,
  StarIcon,
  ArrowLeftIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorUpgrade() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleUpgrade = (e) => {
    e.preventDefault()
    setProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setSuccess(true)
      
      // Redirect to dashboard after success
      setTimeout(() => {
        navigate('/vendor/dashboard')
      }, 2000)
    }, 2000)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckBadgeIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Upgrade Successful!</h2>
          <p className="text-gray-600 mb-4">You are now a TP List vendor. Your benefits are active.</p>
          <div className="w-6 h-6 border-2 border-[#0A5C5C] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm text-gray-400 mt-2">Redirecting to dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FFB347] rounded-full flex items-center justify-center mx-auto mb-4">
            <StarIconSolid className="w-8 h-8 text-[#2D3E50]" />
          </div>
          <h1 className="text-2xl font-bold text-[#2D3E50] mb-2">Upgrade to TP List</h1>
          <p className="text-gray-600">Get verified, appear first, and pay less fees</p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-[#FFB347] overflow-hidden mb-8">
          
          {/* Header */}
          <div className="bg-[#FFB347] px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-[#2D3E50] text-lg">TP List Membership</h2>
              <span className="bg-white text-[#2D3E50] text-xs px-3 py-1 rounded-full font-bold">
                BEST VALUE
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            
            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-[#0A5C5C]">₦5,000<span className="text-base font-normal text-gray-500 ml-2">/month</span></p>
              <p className="text-sm text-gray-500 mt-1">Cancel anytime • No hidden fees</p>
            </div>
            
            {/* Benefits */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#2D3E50]">Blue verification badge</p>
                  <p className="text-xs text-gray-500">Stand out and build trust with clients</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#2D3E50]">Featured in search results</p>
                  <p className="text-xs text-gray-500">Appear before regular vendors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#2D3E50]">1% transaction fee</p>
                  <p className="text-xs text-gray-500">Save 50% compared to 2% fee</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#2D3E50]">Priority customer support</p>
                  <p className="text-xs text-gray-500">We pick your call first</p>
                </div>
              </div>
            </div>

            {/* Savings Calculator */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-[#2D3E50] mb-2">Your monthly savings:</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">With 1 booking of ₦500k</span>
                  <span className="font-bold text-green-600">Save ₦5,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">With 2 bookings of ₦500k</span>
                  <span className="font-bold text-green-600">Save ₦15,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">With 3 bookings of ₦500k</span>
                  <span className="font-bold text-green-600">Save ₦25,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Payment Method</h2>
          
          {/* Payment Method Toggle */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                paymentMethod === 'card' 
                  ? 'border-[#0A5C5C] bg-[#0A5C5C] bg-opacity-5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <CreditCardIcon className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-[#0A5C5C]' : 'text-gray-500'}`} />
              <span className={`text-sm font-medium ${paymentMethod === 'card' ? 'text-[#0A5C5C]' : 'text-gray-600'}`}>
                Card
              </span>
            </button>
            <button
              onClick={() => setPaymentMethod('bank')}
              className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                paymentMethod === 'bank' 
                  ? 'border-[#0A5C5C] bg-[#0A5C5C] bg-opacity-5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <BuildingLibraryIcon className={`w-5 h-5 ${paymentMethod === 'bank' ? 'text-[#0A5C5C]' : 'text-gray-500'}`} />
              <span className={`text-sm font-medium ${paymentMethod === 'bank' ? 'text-[#0A5C5C]' : 'text-gray-600'}`}>
                Bank Transfer
              </span>
            </button>
          </div>

          <form onSubmit={handleUpgrade}>
            {paymentMethod === 'card' ? (
              // Card Payment Form
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>
              </div>
            ) : (
              // Bank Transfer Details
              <div className="bg-gray-50 rounded-lg p-5">
                <p className="text-sm font-medium text-[#2D3E50] mb-3">Transfer to this account:</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Bank:</span>
                    <span className="font-medium">Wema Bank</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Account Number:</span>
                    <span className="font-medium">8123456789</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Account Name:</span>
                    <span className="font-medium">Safe-Pay / TP List</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Amount:</span>
                    <span className="font-bold text-[#0A5C5C]">₦5,000</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  After transfer, click the button below to confirm your payment.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-[#0A5C5C] text-white py-4 rounded-lg font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all duration-300 mt-6"
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <ArrowPathIcon className="w-4 h-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                paymentMethod === 'card' ? 'Pay ₦5,000 & Upgrade Now' : 'I Have Made the Transfer'
              )}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-4">
            🔒 Secure payment by Paystack • Your subscription will be activated immediately
          </p>
        </div>
      </div>
    </div>
  )
}