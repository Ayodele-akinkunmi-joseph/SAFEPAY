import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const { vendorId } = useParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    eventDate: '',
    eventType: 'wedding',
    location: '',
    guests: '',
    description: ''
  })
  
  // Mock vendor data
  const vendor = {
    id: vendorId,
    name: "Ade's Photography",
    category: 'Photography',
    rating: 4.9,
    reviews: 124,
    location: 'Ikeja, Lagos',
    price: '350000',
    tpList: true,
    image: 'AP'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Generate booking reference
    const reference = `BOOK-${vendorId}-${Date.now()}`
    
    // Store booking
    const booking = {
      reference,
      vendorId,
      vendorName: vendor.name,
      vendorPrice: vendor.price,
      ...formData,
      status: 'pending_payment',
      createdAt: new Date().toISOString()
    }
    
    localStorage.setItem(reference, JSON.stringify(booking))
    
    // Navigate to payment
    setTimeout(() => {
      navigate(`/pay/${reference}`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2] py-4 sm:py-6 md:py-12 px-3 sm:px-4">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-slideIn { animation: slideIn 0.4s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <div className="max-w-3xl mx-auto">
        
        {/* Back button with animation */}
        <Link
          to={`/vendor/${vendorId}`}
          className="inline-flex items-center text-[#0A5C5C] hover:text-[#084848] mb-4 sm:mb-6 transition-all duration-300 group animate-fadeInUp"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Back to vendor profile</span>
        </Link>
        
        {/* Progress Steps - Fully Responsive */}
        <div className="mb-6 sm:mb-8 animate-fadeInUp delay-100">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className={`
                  w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300
                  ${step >= i 
                    ? 'bg-[#0A5C5C] text-white scale-110 shadow-md' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  <span className="text-xs sm:text-sm md:text-base">{i}</span>
                </div>
                {i < 3 && (
                  <div className={`
                    flex-1 h-0.5 sm:h-1 mx-1 sm:mx-2 transition-all duration-500
                    ${step > i ? 'bg-[#0A5C5C]' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] sm:text-xs md:text-sm text-gray-600">
            <span className={step >= 1 ? 'text-[#0A5C5C] font-medium' : ''}>Event details</span>
            <span className={step >= 2 ? 'text-[#0A5C5C] font-medium' : ''}>Review</span>
            <span className={step >= 3 ? 'text-[#0A5C5C] font-medium' : ''}>Payment</span>
          </div>
        </div>

        {/* Step 1: Event Details Form */}
        {step === 1 && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 animate-scaleIn">
            
            {/* Vendor Info - Responsive */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0A5C5C] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-white">{vendor.image}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2D3E50] truncate">
                  {vendor.name}
                </h1>
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB347]" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {vendor.rating} ({vendor.reviews})
                  </span>
                  {vendor.tpList && (
                    <span className="bg-[#FFB347] text-[#2D3E50] text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-0.5 whitespace-nowrap">
                      <CheckBadgeIcon className="w-2 h-2 sm:w-3 sm:h-3" />
                      TP LIST
                    </span>
                  )}
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4 sm:space-y-5">
              
              {/* Event Date */}
              <div className="animate-slideIn delay-100">
                <label className="block text-xs sm:text-sm font-medium text-[#2D3E50] mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#E67A4C]" />
                    <span>Event date</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all hover:border-[#0A5C5C]"
                />
              </div>
              
              {/* Event Type */}
              <div className="animate-slideIn delay-200">
                <label className="block text-xs sm:text-sm font-medium text-[#2D3E50] mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <DocumentTextIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#E67A4C]" />
                    <span>Event type</span>
                  </div>
                </label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all hover:border-[#0A5C5C]"
                >
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate event</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {/* Event Location */}
              <div className="animate-slideIn delay-300">
                <label className="block text-xs sm:text-sm font-medium text-[#2D3E50] mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#E67A4C]" />
                    <span>Event location</span>
                  </div>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all hover:border-[#0A5C5C]"
                  placeholder="Venue address"
                />
              </div>
              
              {/* Number of Guests */}
              <div className="animate-slideIn delay-400">
                <label className="block text-xs sm:text-sm font-medium text-[#2D3E50] mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#E67A4C]" />
                    <span>Number of guests (approx)</span>
                  </div>
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all hover:border-[#0A5C5C]"
                  placeholder="e.g. 200"
                />
              </div>
              
              {/* Description */}
              <div className="animate-slideIn delay-500">
                <label className="block text-xs sm:text-sm font-medium text-[#2D3E50] mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <DocumentTextIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#E67A4C]" />
                    <span>Additional details</span>
                  </div>
                </label>
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all hover:border-[#0A5C5C]"
                  placeholder="Tell the vendor more about your event..."
                />
              </div>
              
              {/* Continue Button */}
              <button
                type="submit"
                className="w-full bg-[#0A5C5C] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:bg-[#084848] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm sm:text-base mt-4 sm:mt-6"
              >
                Continue to review
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Review & Confirm */}
        {step === 2 && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 animate-scaleIn">
            <h2 className="text-lg sm:text-xl font-bold text-[#2D3E50] mb-4 sm:mb-6">Review your booking</h2>
            
            {/* Booking Summary */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 animate-fadeInUp">
              <h3 className="font-semibold text-[#2D3E50] mb-3 sm:mb-4 text-sm sm:text-base">Event details</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Vendor</span>
                  <span className="font-medium text-[#2D3E50]">{vendor.name}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Event date</span>
                  <span className="font-medium">{new Date(formData.eventDate).toLocaleDateString('en-NG')}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Event type</span>
                  <span className="font-medium">{formData.eventType}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{formData.location}</span>
                </div>
                {formData.guests && (
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Price Summary */}
            <div className="bg-[#0A5C5C] bg-opacity-5 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 animate-fadeInUp delay-100">
              <h3 className="font-semibold text-[#2D3E50] mb-3 sm:mb-4 text-sm sm:text-base">Payment summary</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Service fee</span>
                  <span className="font-medium">₦{parseInt(vendor.price).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Safe-Pay fee</span>
                  <span className="text-green-600 text-xs sm:text-sm">₦0 (paid by vendor)</span>
                </div>
                <div className="border-t border-gray-200 pt-2 sm:pt-3 mt-2 sm:mt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-[#2D3E50] text-sm sm:text-base">Total to pay</span>
                    <span className="font-bold text-[#0A5C5C] text-base sm:text-lg md:text-xl">
                      ₦{parseInt(vendor.price).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
                    Money held by Paystack (CBN licensed). Vendor receives after you confirm job completion.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp delay-200">
              <button
                onClick={() => setStep(1)}
                className="w-full sm:w-auto border-2 border-[#0A5C5C] text-[#0A5C5C] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-[#0A5C5C] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Edit details
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full sm:flex-1 bg-[#0A5C5C] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                    Processing...
                  </span>
                ) : 'Confirm & proceed to payment'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}