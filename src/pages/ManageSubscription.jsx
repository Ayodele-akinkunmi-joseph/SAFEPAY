import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  CheckBadgeIcon,
  StarIcon,
  CreditCardIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function ManageSubscription() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [showCancel, setShowCancel] = useState(false)

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn { from { transform:scale(0.95); opacity:0; } to { transform:scale(1); opacity:1; } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
        .delay-100 { animation-delay:0.1s; } .delay-200 { animation-delay:0.2s; }
      `}</style>

      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4 animate-fadeInUp">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Manage Subscription</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border-2 border-[#FFB347] p-6 mb-6 animate-scaleIn">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FFB347] rounded-full flex items-center justify-center animate-pulse">
              <StarIconSolid className="w-6 h-6 text-[#2D3E50]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#2D3E50]">TP List Active</h2>
              <p className="text-sm text-gray-500">Valid until March 15, 2026</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-gray-600">Plan</span>
              <span className="font-medium">TP List Monthly</span>
            </div>
            <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-gray-600">Price</span>
              <span className="font-medium">₦5,000/month</span>
            </div>
            <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-gray-600">Next billing</span>
              <span className="font-medium">March 15, 2026</span>
            </div>
            <div className="flex justify-between text-sm p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-gray-600">Payment method</span>
              <span className="font-medium">Access Bank •••• 6789</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-3">
            <button className="w-full border border-[#0A5C5C] text-[#0A5C5C] py-3 rounded-lg font-medium hover:bg-[#0A5C5C] hover:text-white transition-all transform hover:scale-[1.02]">
              Update Payment Method
            </button>
            <button
              onClick={() => setShowCancel(true)}
              className="w-full border border-red-500 text-red-500 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-all transform hover:scale-[1.02]"
            >
              Cancel Subscription
            </button>
          </div>
        </div>

        {showCancel && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 animate-scaleIn animate-shake">
            <h3 className="font-bold text-red-700 mb-2">Cancel Subscription?</h3>
            <p className="text-sm text-red-600 mb-4">
              You will lose your TP List benefits immediately. Your current period ends March 15, 2026.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancel(false)}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Keep
              </button>
              <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors">
                Yes, Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}