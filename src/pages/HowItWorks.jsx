import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { 
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  StarIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'


export default function HowItWorks() {
    useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <div className="bg-[#FDF8F2] min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:bg-[#084848] transition-colors">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-[#0A5C5C] group-hover:text-[#084848] transition-colors">Safe-Pay</span>
          </Link>
          
          <Link
            to="/"
            className="text-[#0A5C5C] hover:text-[#084848] font-medium transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#0A5C5C] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How Safe-Pay works
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Nigeria's first payment protection platform for events. 
            No more cash stress, no more debt chasing.
          </p>
        </div>
      </div>

      {/* For Clients Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-3">
              For clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How to find and pay vendors securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0A5C5C] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-8 h-8 text-[#0A5C5C]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">1. Search vendors</h3>
              <p className="text-sm text-gray-600">
                Browse categories, filter by location, compare ratings and portfolios
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E67A4C] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BanknotesIcon className="w-8 h-8 text-[#E67A4C]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">2. Pay securely</h3>
              <p className="text-sm text-gray-600">
                Pay full amount via bank transfer, USSD, or QR. Money held by Paystack (CBN licensed)
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFB347] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#8B691B]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">3. Track progress</h3>
              <p className="text-sm text-gray-600">
                Chat with vendor, receive photo updates, monitor job status
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckBadgeIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">4. Confirm & release</h3>
              <p className="text-sm text-gray-600">
                When job is done, confirm. 24hr cooling, then vendor gets paid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* For Vendors Section */}
      <div className="bg-[#FDF8F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-3">
              For vendors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How to get paid instantly, no more debt chasing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#0A5C5C] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-[#0A5C5C]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">1. Create free profile</h3>
              <p className="text-sm text-gray-600">
                Register with email, upload portfolio, set your prices. Free forever.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#E67A4C] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <StarIcon className="w-6 h-6 text-[#E67A4C]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">2. Get discovered</h3>
              <p className="text-sm text-gray-600">
                Clients find you through search. TP List vendors appear first.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-600 bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <BanknotesIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">3. Get paid instantly</h3>
              <p className="text-sm text-gray-600">
                Client pays upfront. Money held by Paystack. You receive 24hrs after job.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TP List Explanation */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FFB347] bg-opacity-10 rounded-2xl p-8 border border-[#FFB347]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-[#FFB347] rounded-full flex items-center justify-center">
                  <StarIconSolid className="w-12 h-12 text-[#2D3E50]" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#2D3E50] mb-3">
                  What is TP List?
                </h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">TP (Top Priority) List</span> is our premium vendor subscription. 
                  For ₦5,000/month, vendors get:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Blue verification badge on profile and payment links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Featured placement in search results (appear before others)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Pay only 1% transaction fee (instead of 2%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Priority customer support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/vendor/signup"
                    className="bg-[#FFB347] text-[#2D3E50] px-6 py-3 rounded-lg font-medium hover:bg-[#f0a83c] transition-colors inline-block"
                  >
                    Register for free → upgrade anytime
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0A5C5C] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vendors"
              className="bg-white text-[#0A5C5C] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Find a vendor
            </Link>
            <Link
              to="/vendor/signup"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#0A5C5C] transition-colors"
            >
              List your business
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}