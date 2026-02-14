import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { 
  CheckBadgeIcon,
  StarIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function TPListPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Simple Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:bg-[#084848] transition-colors">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-lg font-bold text-[#0A5C5C]">Safe-Pay</span>
            </Link>
            
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section - Clean */}
      <div className="bg-[#0A5C5C] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB347] text-[#2D3E50] px-4 py-2 rounded-full mb-6">
            <SparklesIcon className="w-4 h-4" />
            <span className="font-semibold text-sm">TOP PRIORITY LIST</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get more clients, <br className="hidden sm:block" />
            <span className="text-[#FFB347]">pay less fees</span>
          </h1>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            TP List helps verified vendors stand out and grow their business
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Blue Badge */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0A5C5C] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckBadgeIcon className="w-6 h-6 text-[#0A5C5C]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3E50] mb-2">Blue verification badge</h3>
                <p className="text-sm text-gray-600">
                  Stand out from competitors. Clients trust verified vendors more. Your badge shows on profile and all payment links.
                </p>
              </div>
            </div>
          </div>
          
          {/* Featured First */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E67A4C] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#E67A4C]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3E50] mb-2">Featured in search</h3>
                <p className="text-sm text-gray-600">
                  TP List vendors appear before regular vendors in search results. More visibility = more bookings.
                </p>
              </div>
            </div>
          </div>
          
          {/* Lower Fee */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3E50] mb-2">Pay 1% fee</h3>
                <p className="text-sm text-gray-600">
                  Instead of 2% for free vendors, TP List members pay only 1% per transaction. Save 50% on fees.
                </p>
              </div>
            </div>
          </div>
          
          {/* Priority Support */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FFB347] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-6 h-6 text-[#FFB347]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3E50] mb-2">Priority support</h3>
                <p className="text-sm text-gray-600">
                  Your messages and disputes get handled first. We pick your call before others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card - Centered */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#FFB347] overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#FFB347] px-6 py-4 text-center">
              <h3 className="text-xl font-bold text-[#2D3E50]">TP List Membership</h3>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              
              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-[#0A5C5C]">₦5,000<span className="text-base font-normal text-gray-500 ml-1">/month</span></p>
                <p className="text-sm text-gray-500 mt-1">Cancel anytime</p>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Blue verification badge on your profile</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Featured placement in search results</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">1% transaction fee (instead of 2%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Priority customer support</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/vendor/upgrade"
                className="block w-full bg-[#0A5C5C] text-white text-center py-4 rounded-xl font-semibold hover:bg-[#084848] transition-colors"
              >
                Upgrade to TP List
              </Link>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                First month free for new vendors • Secure payment by Paystack
              </p>
            </div>
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-16">
          <h3 className="text-xl font-semibold text-[#2D3E50] text-center mb-6">See how much you save</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 text-left text-sm font-medium text-gray-600">Monthly volume</th>
                  <th className="py-3 text-center text-sm font-medium text-gray-600">Free account</th>
                  <th className="py-3 text-center text-sm font-medium text-gray-600">TP List</th>
                  <th className="py-3 text-center text-sm font-medium text-green-600">You save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { volume: '₦500,000', free: '₦10,000', tp: '₦5,000', save: '₦5,000' },
                  { volume: '₦1,000,000', free: '₦20,000', tp: '₦10,000', save: '₦10,000' },
                  { volume: '₦2,000,000', free: '₦40,000', tp: '₦20,000', save: '₦20,000' },
                  { volume: '₦5,000,000', free: '₦100,000', tp: '₦50,000', save: '₦50,000' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 text-sm font-medium text-[#2D3E50]">{row.volume}</td>
                    <td className="py-3 text-sm text-center text-gray-600">{row.free}</td>
                    <td className="py-3 text-sm text-center text-[#0A5C5C] font-medium">{row.tp}</td>
                    <td className="py-3 text-sm text-center text-green-600 font-bold">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-xs text-gray-400 text-center mt-4">
            *Based on 2% fee for free accounts, 1% for TP List. TP List monthly fee: ₦5,000.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[#2D3E50] text-center mb-8">What TP List vendors say</h3>
          
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
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="w-4 h-4 text-[#FFB347]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">"{testimonial.quote}"</p>
                <p className="font-medium text-[#2D3E50]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#0A5C5C] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to grow your business?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join TP List today and start getting more clients while paying less fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vendor/signup"
              className="bg-white text-[#0A5C5C] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Register for free
            </Link>
            <Link
              to="/vendor/upgrade"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0A5C5C] transition-colors"
            >
              Upgrade to TP List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}