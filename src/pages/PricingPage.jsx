import { Link } from 'react-router-dom'
import {  useEffect } from 'react'
import { 
  CheckBadgeIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'



export default function PricingPage() {
    useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <div className="bg-[#FDF8F2] min-h-screen">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 animate-fadeIn">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:bg-[#084848] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-[#0A5C5C] group-hover:text-[#084848] transition-colors">Safe-Pay</span>
          </Link>
          
          <Link
            to="/"
            className="text-[#0A5C5C] hover:text-[#084848] font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
          >
            <span>←</span> Back to home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0A5C5C] py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full animate-float delay-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
            Simple, transparent pricing
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp delay-100">
            No hidden fees. You only pay when you get paid.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Tier */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#0A5C5C] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-[#0A5C5C]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D3E50] mb-2">Free account</h3>
              <p className="text-gray-600">For vendors just starting out</p>
            </div>
            
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[#0A5C5C]">₦0</span>
              <span className="text-gray-500">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Receive unlimited payments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Get paid 24hrs after job</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">2% transaction fee</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Basic profile listing</span>
              </li>
            </ul>
            
            <Link
              to="/vendor/signup"
              className="block text-center border-2 border-[#0A5C5C] text-[#0A5C5C] px-4 py-3 rounded-lg font-medium hover:bg-[#0A5C5C] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Start for free
            </Link>
          </div>
          
          {/* TP List Tier */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-[#FFB347] relative animate-scaleIn delay-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFB347] text-[#2D3E50] px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>
            
            <div className="text-center mb-6 mt-4">
              <div className="w-16 h-16 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIconSolid className="w-8 h-8 text-[#FFB347]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D3E50] mb-2">TP List</h3>
              <p className="text-gray-600">For serious vendors who want more clients</p>
            </div>
            
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-[#0A5C5C]">₦5,000</span>
              <span className="text-gray-500">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Blue verification badge</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Featured in search results</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">1% transaction fee (save 50%)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600">Priority customer support</span>
              </li>
            </ul>
            
            <Link
              to="/vendor/upgrade"
              className="block text-center bg-[#FFB347] text-[#2D3E50] px-4 py-3 rounded-lg font-medium hover:bg-[#f0a83c] transition-all duration-300 transform hover:scale-105"
            >
              Upgrade to TP List
            </Link>
          </div>
        </div>

        {/* Fee Comparison */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg animate-fadeInUp delay-300">
          <h3 className="text-xl font-bold text-[#2D3E50] mb-6 text-center">How much you save with TP List</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left">Monthly transaction volume</th>
                  <th className="py-3 text-center">Free account (2% fee)</th>
                  <th className="py-3 text-center">TP List (1% fee)</th>
                  <th className="py-3 text-center text-green-600">You save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { volume: '₦500,000', free: '₦10,000', tp: '₦5,000', save: '₦5,000' },
                  { volume: '₦1,000,000', free: '₦20,000', tp: '₦10,000', save: '₦10,000' },
                  { volume: '₦2,000,000', free: '₦40,000', tp: '₦20,000', save: '₦20,000' },
                  { volume: '₦5,000,000', free: '₦100,000', tp: '₦50,000', save: '₦50,000' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 font-medium">{row.volume}</td>
                    <td className="py-3 text-center text-gray-600">{row.free}</td>
                    <td className="py-3 text-center text-[#0A5C5C] font-medium">{row.tp}</td>
                    <td className="py-3 text-center text-green-600 font-bold">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            TP List monthly fee: ₦5,000. Net savings after 1 transaction of ₦500,000!
          </p>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still get questions about pricing?</p>
          <Link
            to="/faq"
            className="text-[#0A5C5C] font-medium hover:underline inline-flex items-center gap-1 group"
          >
            Check our FAQ
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}