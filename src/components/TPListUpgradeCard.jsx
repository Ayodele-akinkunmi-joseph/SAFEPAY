import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  StarIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'



export default function TPListUpgradeCard({ vendor }) {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  const [loading, setLoading] = useState(false)
  
  const handleUpgrade = () => {
    setLoading(true)
    // Redirect to Paystack subscription page
    setTimeout(() => {
      window.location.href = '/vendor/upgrade/tp-list'
    }, 1000)
  }
  
  // If vendor already on TP List
  if (vendor?.tpList) {
    return (
      <div className="bg-gradient-to-br from-[#FFB347] to-[#FFA07A] rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <StarIconSolid className="w-6 h-6 text-[#FFB347]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">TP List Active</h3>
              <p className="text-white text-opacity-90 text-xs">
                Renews: {new Date(vendor.tpListExpiry).toLocaleDateString('en-NG')}
              </p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-white text-sm">Your fee rate</span>
              <span className="bg-white text-[#2D3E50] px-3 py-1 rounded-full text-sm font-bold">
                1%
              </span>
            </div>
          </div>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-white text-sm">
              <CheckBadgeIcon className="w-4 h-4" />
              Blue verification badge active
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <MagnifyingGlassIcon className="w-4 h-4" />
              Featured in search results
            </li>
            <li className="flex items-center gap-2 text-white text-sm">
              <CurrencyDollarIcon className="w-4 h-4" />
              Paying 1% instead of 2%
            </li>
          </ul>
          
          <Link
            to="/vendor/tp-list/manage"
            className="block w-full bg-white text-[#2D3E50] text-center py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-all"
          >
            Manage Subscription
          </Link>
        </div>
      </div>
    )
  }
  
  // If vendor is free
  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-[#FFB347] border-opacity-30 overflow-hidden">
      <div className="bg-gradient-to-r from-[#FFB347] to-[#FFA07A] px-6 py-4">
        <div className="flex items-center gap-2">
          <StarIconSolid className="w-6 h-6 text-white" />
          <h3 className="font-bold text-white">Upgrade to TP List</h3>
        </div>
      </div>
      
      <div className="px-6 py-6">
        <div className="flex items-end gap-1 mb-6">
          <span className="text-3xl font-bold text-[#2D3E50]">₦5,000</span>
          <span className="text-gray-500 mb-1">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <StarIcon className="w-3 h-3 text-[#FFB347]" />
            </div>
            <div>
              <p className="font-medium text-[#2D3E50] text-sm">Blue Verification Badge</p>
              <p className="text-xs text-gray-500">Clients trust you more</p>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <StarIcon className="w-3 h-3 text-[#FFB347]" />
            </div>
            <div>
              <p className="font-medium text-[#2D3E50] text-sm">Featured in Search</p>
              <p className="text-xs text-gray-500">Appear before 100+ other vendors</p>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <StarIcon className="w-3 h-3 text-[#FFB347]" />
            </div>
            <div>
              <p className="font-medium text-[#2D3E50] text-sm">Pay 1% Fee</p>
              <p className="text-xs text-gray-500">Instead of 2% (save 50% on fees)</p>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <StarIcon className="w-3 h-3 text-[#FFB347]" />
            </div>
            <div>
              <p className="font-medium text-[#2D3E50] text-sm">Priority Support</p>
              <p className="text-xs text-gray-500">We pick your call first</p>
            </div>
          </li>
        </ul>
        
        {/* Savings Calculator */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-xs text-gray-500 mb-2">Your savings with TP List:</p>
          <div className="flex justify-between items-center">
            <span className="text-sm">Per ₦100,000 transaction</span>
            <span className="font-bold text-green-600">Save ₦1,000</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm">10 transactions/month</span>
            <span className="font-bold text-[#0A5C5C]">Save ₦10,000</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            TP List cost: ₦5,000 → You still save ₦5,000
          </p>
        </div>
        
        <button
          onClick={handleUpgrade}
          disabled={loading}
          className="w-full bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
              Processing...
            </span>
          ) : (
            'Upgrade Now - ₦5,000/month'
          )}
        </button>
        
        <p className="text-xs text-gray-400 text-center mt-4">
          Cancel anytime. First month free? Contact us.
        </p>
      </div>
    </div>
  )
}