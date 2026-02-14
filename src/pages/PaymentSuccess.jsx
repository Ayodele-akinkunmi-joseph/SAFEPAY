import { Link, useParams } from 'react-router-dom'
import { CheckCircleIcon, ShareIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export default function PaymentSuccess() {
  const { reference } = useParams()
  const [transaction, setTransaction] = useState(null)
  const [copied, setCopied] = useState(false)
  
  useEffect(() => {
     window.scrollTo(0, 0)
    const data = localStorage.getItem(reference)
    if (data) {
      setTransaction(JSON.parse(data))
    }
  }, [reference])
  
  const handleCopy = () => {
    navigator.clipboard.writeText(reference)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Safe-Pay Payment',
        text: `Payment successful! Reference: ${reference}`,
      })
    }
  }
  
  return (
    <div className="min-h-screen bg-[#FDF8F2] py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#E67A4C] border-opacity-20 overflow-hidden text-center">
          
          {/* Success Icon */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-12">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mt-6">Payment Successful!</h1>
            <p className="text-white text-opacity-90 mt-2">
              Your money is now held securely by Paystack
            </p>
          </div>
          
          {/* Transaction Details */}
          <div className="p-8">
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#2D3E50]">Transaction Details</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Payment confirmed
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Reference</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">{reference}</span>
                    <button 
                      onClick={handleCopy}
                      className="text-gray-400 hover:text-[#0A5C5C]"
                    >
                      <DocumentDuplicateIcon className="w-4 h-4" />
                    </button>
                    {copied && <span className="text-xs text-green-600">Copied!</span>}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-bold text-[#0A5C5C] text-xl">
                    ₦{parseInt(transaction?.amount || 0).toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Vendor</span>
                  <span className="font-medium">{transaction?.vendorEmail}</span>
                </div>
                
                {transaction?.description && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Description</span>
                    <span className="font-medium">{transaction.description}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Next Steps */}
            <div className="mb-8">
              <h3 className="font-semibold text-[#2D3E50] mb-4 text-left">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0A5C5C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D3E50]">Vendor gets notified</p>
                    <p className="text-sm text-gray-600">We've sent payment confirmation to your vendor.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E67A4C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D3E50]">Vendor delivers service</p>
                    <p className="text-sm text-gray-600">They'll contact you to schedule and complete the work.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FFB347] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#2D3E50] text-xs">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D3E50]">Confirm & release</p>
                    <p className="text-sm text-gray-600">
                      After job is done, log in to confirm. Money releases to vendor after 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-4">
              <Link
                to="/"
                className="flex-1 bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#084848] transition-all"
              >
                Go to dashboard
              </Link>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 border-2 border-[#0A5C5C] text-[#0A5C5C] py-4 px-6 rounded-xl font-medium hover:bg-[#0A5C5C] hover:text-white transition-all"
              >
                <ShareIcon className="w-5 h-5" />
                Share
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-6">
              Need help? Contact support@safe-pay.ng • Reference: {reference}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}