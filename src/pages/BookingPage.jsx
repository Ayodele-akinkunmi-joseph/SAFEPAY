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
  
  // Mock vendor data
  const vendor = {
    id: vendorId,
    name: "Ade's Photography",
    category: 'Photography',
    rating: 4.9,
    reviews: 124,
    location: 'Ikeja, Lagos',
    price: '350,000',
    tpList: true,
    image: 'AP'
  }
  
  const [formData, setFormData] = useState({
    eventDate: '',
    eventType: 'wedding',
    location: '',
    guests: '',
    description: '',
    budget: vendor.price
  })

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
    <div className="min-h-screen bg-[#FDF8F2] py-6 md:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Back button */}
        <Link
          to={`/vendor/${vendorId}`}
          className="inline-flex items-center text-[#0A5C5C] hover:text-[#084848] mb-6 transition-colors group"
        >
          <ChevronLeftIcon className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to vendor profile
        </Link>
        
        {/* Progress Steps - Mobile Responsive */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold transition-all
                  ${step >= i 
                    ? 'bg-[#0A5C5C] text-white scale-110' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {i}
                </div>
                {i < 3 && (
                  <div className={`
                    flex-1 h-1 mx-2 transition-all
                    ${step > i ? 'bg-[#0A5C5C]' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-600">
            <span className={step >= 1 ? 'text-[#0A5C5C] font-medium' : ''}>Event details</span>
            <span className={step >= 2 ? 'text-[#0A5C5C] font-medium' : ''}>Review & confirm</span>
            <span className={step >= 3 ? 'text-[#0A5C5C] font-medium' : ''}>Payment</span>
          </div>
        </div>

        {/* Step 1: Event Details Form */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-16 h-16 bg-[#0A5C5C] rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{vendor.image}</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#2D3E50]">{vendor.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid key={i} className="w-4 h-4 text-[#FFB347]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{vendor.rating} ({vendor.reviews} reviews)</span>
                  {vendor.tpList && (
                    <span className="bg-[#FFB347] text-[#2D3E50] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckBadgeIcon className="w-3 h-3" />
                      TP LIST
                    </span>
                  )}
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-5">
              
              {/* Event Date */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Event date</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all"
                />
              </div>
              
              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <DocumentTextIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Event type</span>
                  </div>
                </label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all"
                >
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate event</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              {/* Event Location */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Event location</span>
                  </div>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all"
                  placeholder="Venue address"
                />
              </div>
              
              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Number of guests (approx)</span>
                  </div>
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all"
                  placeholder="e.g. 200"
                />
              </div>
              
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <DocumentTextIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Additional details</span>
                  </div>
                </label>
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all"
                  placeholder="Tell the vendor more about your event..."
                />
              </div>
              
              {/* Continue Button */}
              <button
                type="submit"
                className="w-full bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#084848] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Continue to review
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Review & Confirm */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#2D3E50] mb-6">Review your booking</h2>
            
            {/* Booking Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-[#2D3E50] mb-4">Event details</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Vendor</span>
                  <span className="font-medium text-[#2D3E50]">{vendor.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Event date</span>
                  <span className="font-medium">{new Date(formData.eventDate).toLocaleDateString('en-NG')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Event type</span>
                  <span className="font-medium">{formData.eventType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{formData.location}</span>
                </div>
                {formData.guests && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Price Summary */}
            <div className="bg-[#0A5C5C] bg-opacity-5 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-[#2D3E50] mb-4">Payment summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service fee</span>
                  <span className="font-medium">₦{parseInt(vendor.price).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Safe-Pay fee</span>
                  <span className="text-green-600">₦0 (paid by vendor)</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-[#2D3E50]">Total to pay</span>
                    <span className="font-bold text-[#0A5C5C] text-xl">
                      ₦{parseInt(vendor.price).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Money held by Paystack (CBN licensed). Vendor receives after you confirm job completion.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setStep(1)}
                className="border-2 border-[#0A5C5C] text-[#0A5C5C] px-6 py-3 rounded-xl font-medium hover:bg-[#0A5C5C] hover:text-white transition-all"
              >
                Edit details
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-[#0A5C5C] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
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