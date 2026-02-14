import { Link } from 'react-router-dom'
import {  useEffect } from 'react'
import { 
  CheckBadgeIcon,
  StarIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'



export default function TPListPage() {
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s infinite; }
        
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
      <div className="bg-gradient-to-r from-[#0A5C5C] to-[#084848] py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full animate-float delay-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFB347] text-[#2D3E50] px-4 py-2 rounded-full mb-6 animate-fadeInUp">
            <StarIconSolid className="w-4 h-4" />
            <span className="font-bold">TOP PRIORITY LIST</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp delay-100">
            Get more clients, pay less fees
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp delay-200">
            TP List helps verified vendors stand out and grow their business
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Blue Badge */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#0A5C5C] bg-opacity-10 rounded-full flex items-center justify-center">
                <CheckBadgeIcon className="w-6 h-6 text-[#0A5C5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50]">Blue verification badge</h3>
            </div>
            <p className="text-gray-600">
              Stand out from competitors. Clients trust verified vendors more. Your badge shows on profile and all payment links.
            </p>
          </div>
          
          {/* Featured First */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn delay-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#E67A4C] bg-opacity-10 rounded-full flex items-center justify-center">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#E67A4C]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50]">Featured in search</h3>
            </div>
            <p className="text-gray-600">
              TP List vendors appear before regular vendors in search results. More visibility = more bookings.
            </p>
          </div>
          
          {/* Lower Fee */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn delay-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-600 bg-opacity-10 rounded-full flex items-center justify-center">
                <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50]">Pay 1% fee</h3>
            </div>
            <p className="text-gray-600">
              Instead of 2% for free vendors, TP List members pay only 1% per transaction. Save 50% on fees.
            </p>
          </div>
          
          {/* Priority Support */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn delay-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#FFB347] bg-opacity-10 rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6 text-[#FFB347]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50]">Priority support</h3>
            </div>
            <p className="text-gray-600">
              Your messages and disputes get handled first. We pick your call before others.
            </p>
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="mt-16 bg-[#FFB347] bg-opacity-10 rounded-2xl p-8 border border-[#FFB347] animate-fadeInUp">
          <h3 className="text-2xl font-bold text-[#2D3E50] mb-6 text-center">Calculate your savings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-[#2D3E50] mb-4">Free account</h4>
              <p className="text-3xl font-bold text-gray-700 mb-2">2% fee</p>
              <p className="text-sm text-gray-500">On every transaction</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>₦500,000 transaction</span>
                  <span className="font-medium">Pay ₦10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>₦1,000,000 transaction</span>
                  <span className="font-medium">Pay ₦20,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FFB347] p-6 rounded-xl">
              <h4 className="font-semibold text-[#2D3E50] mb-4">TP List</h4>
              <p className="text-3xl font-bold text-[#2D3E50] mb-2">1% fee</p>
              <p className="text-sm text-[#2D3E50]">Plus ₦5,000/month</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-[#2D3E50]">
                  <span>₦500,000 transaction</span>
                  <span className="font-medium">Pay ₦5,000</span>
                </div>
                <div className="flex justify-between text-[#2D3E50]">
                  <span>₦1,000,000 transaction</span>
                  <span className="font-medium">Pay ₦10,000</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-6 text-sm text-gray-600">
            With just one ₦500,000 transaction per month, you save ₦5,000 — covering your TP List subscription!
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#2D3E50] mb-8 text-center">What TP List vendors say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ade's Photography",
                quote: "Since joining TP List, my bookings increased by 40%. Clients see the badge and trust me immediately.",
                rating: 5
              },
              {
                name: "Zoe's Decor",
                quote: "The 1% fee saves me over ₦20,000 every month. Worth every kobo!",
                rating: 5
              },
              {
                name: "Signature Makeup",
                quote: "I appear first in search now. New clients find me easily. Best decision I made.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIconSolid key={i} className="w-4 h-4 text-[#FFB347]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">"{testimonial.quote}"</p>
                <p className="font-medium text-[#2D3E50]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0A5C5C] to-[#084848] rounded-2xl p-12 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to grow your business?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join TP List today and start getting more clients while paying less fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vendor/signup"
              className="bg-white text-[#0A5C5C] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Register for free first
            </Link>
            <Link
              to="/vendor/upgrade"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0A5C5C] transition-all duration-300 transform hover:scale-105"
            >
              Upgrade to TP List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}