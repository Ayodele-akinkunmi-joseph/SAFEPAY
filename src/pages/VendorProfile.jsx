import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { 
  StarIcon,
  MapPinIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ArrowLeftIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [vendor, setVendor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAllReviews, setShowAllReviews] = useState(false)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock data - replace with API call
  useEffect(() => {
    setTimeout(() => {
      // Find vendor by ID (mock)
      const mockVendor = {
        id: parseInt(id),
        name: id === '1' ? "Ade's Photography" : 
              id === '3' ? "Zoe's Decor" : 
              id === '6' ? "Signature Makeup" : "Ade's Photography",
        category: id === '1' ? 'Photography' : 
                  id === '3' ? 'Decor' : 
                  id === '6' ? 'Makeup' : 'Photography',
        rating: 4.9,
        totalReviews: 124,
        location: 'Ikeja, Lagos',
        price: '₦350,000 - ₦600,000',
        priceMin: 350000,
        priceMax: 600000,
        image: 'AP',
        tpList: true,
        verified: true,
        experience: '10+ years',
        specialties: ['Wedding', 'Traditional', 'Portrait'],
        eventsCompleted: 87,
        responseTime: '< 1hr',
        memberSince: '2025',
        phone: '08012345678',
        email: 'ade@photography.com',
        website: 'www.adesphotography.com',
        description: 'Professional wedding photographer with over 10 years of experience capturing beautiful moments across Nigeria. Specializing in traditional weddings, modern ceremonies, and portrait photography.',
        portfolio: [
          'https://images.unsplash.com/photo-1519741497674-611481863552',
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
          'https://images.unsplash.com/photo-1509927083803-4bd519298ac0'
        ],
        reviews: [
          { id: 1, client: 'Mr & Mrs Adebayo', rating: 5, comment: 'Ade was amazing! Captured our wedding perfectly. Very professional and easy to work with.', date: '2026-02-10' },
          { id: 2, client: 'Chioma E.', rating: 5, comment: 'Best photographer in Lagos! Highly recommend.', date: '2026-02-05' },
          { id: 3, client: 'Oluwaseun A.', rating: 4, comment: 'Great work, delivered on time. Will book again.', date: '2026-01-28' },
          { id: 4, client: 'Tunde & Funke', rating: 5, comment: 'Traditional wedding photos came out amazing!', date: '2026-01-15' }
        ],
        availability: ['Mon-Fri: 9am - 6pm', 'Sat: 10am - 4pm', 'Sun: Closed']
      }
      setVendor(mockVendor)
      setLoading(false)
    }, 500)
  }, [id])

  const handleBook = () => {
    navigate(`/book/${id}`)
  }

  const handleChat = () => {
    // Generate a mock transaction reference for chat
    const chatRef = `CHAT-${id}-${Date.now()}`
    navigate(`/chat/${chatRef}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0A5C5C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2D3E50] font-medium">Loading vendor profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#0A5C5C] transition-colors group"
            >
              <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleChat}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-[#0A5C5C]" />
                <span className="hidden sm:inline">Chat</span>
              </button>
              <Link
                to="/"
                className="flex items-center gap-2 group"
              >
                <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Vendor Header Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Vendor Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-[#0A5C5C] rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{vendor.image}</span>
              </div>
            </div>

            {/* Vendor Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-[#2D3E50]">{vendor.name}</h1>
                    {vendor.tpList && (
                      <span className="bg-[#FFB347] text-[#2D3E50] text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <StarIconSolid className="w-4 h-4" />
                        TP LIST
                      </span>
                    )}
                    {vendor.verified && (
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckBadgeIcon className="w-4 h-4" />
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-2">{vendor.category}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{vendor.location}</span>
                    <span className="mx-2">•</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>Responds {vendor.responseTime}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col items-end">
                  <div className="text-right mb-3">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <p className="text-2xl font-bold text-[#0A5C5C]">₦{vendor.priceMin.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={handleBook}
                    className="bg-[#0A5C5C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#084848] transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{vendor.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <BriefcaseIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span className="text-gray-600">Experience: {vendor.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <UserGroupIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span className="text-gray-600">{vendor.eventsCompleted}+ events</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span className="text-gray-600">Member since {vendor.memberSince}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <StarIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span className="text-gray-600">{vendor.rating} rating ({vendor.totalReviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* PORTFOLIO SECTION - RESTORED */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Portfolio</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vendor.portfolio.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-[#0A5C5C]' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </button>
                ))}
              </div>
              
              {/* Selected Image Preview */}
              {vendor.portfolio[selectedImage] && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img 
                    src={vendor.portfolio[selectedImage]} 
                    alt="Selected portfolio"
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#2D3E50]">Reviews</h2>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <StarIconSolid key={star} className={`w-4 h-4 ${star <= Math.floor(vendor.rating) ? 'text-[#FFB347]' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{vendor.rating}</span>
                  <span className="text-sm text-gray-500">({vendor.totalReviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                {(showAllReviews ? vendor.reviews : vendor.reviews.slice(0, 2)).map((review) => {
                  return (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#2D3E50]">{review.client}</span>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map((star) => (
                          <StarIconSolid key={star} className={`w-3 h-3 ${star <= review.rating ? 'text-[#FFB347]' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  )
                })}
              </div>

              {vendor.reviews.length > 2 && !showAllReviews && (
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="mt-4 text-[#0A5C5C] text-sm font-medium hover:underline"
                >
                  View all {vendor.totalReviews} reviews →
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar (1/3 width) */}
          <div className="space-y-6">
            
            {/* Contact Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0A5C5C] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-4 h-4 text-[#0A5C5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${vendor.email}`} className="text-[#2D3E50] hover:text-[#0A5C5C] transition-colors">
                      {vendor.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#E67A4C] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-4 h-4 text-[#E67A4C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${vendor.phone}`} className="text-[#2D3E50] hover:text-[#0A5C5C] transition-colors">
                      {vendor.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#FFB347] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-4 h-4 text-[#8B691B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-[#2D3E50]">{vendor.location}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleChat}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A5C5C] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#084848] transition-colors"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  Chat with vendor
                </button>
                <button
                  onClick={handleBook}
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#0A5C5C] text-[#0A5C5C] px-4 py-3 rounded-lg font-medium hover:bg-[#0A5C5C] hover:text-white transition-colors"
                >
                  <CalendarIcon className="w-5 h-5" />
                  Book now
                </button>
              </div>
            </div>

            {/* Specialties Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {vendor.specialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Availability</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {vendor.availability.map((time, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-[#0A5C5C]" />
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}