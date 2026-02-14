import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  ShieldCheckIcon,
  CameraIcon,
  CakeIcon,
  PaintBrushIcon,
  MicrophoneIcon,
  UserGroupIcon,
  SparklesIcon,
  VideoCameraIcon,
  CalendarIcon,
  MapPinIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
  PhoneIcon,
    CurrencyDollarIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
// import { useState } from 'react'

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // ✅ useEffect correctly placed INSIDE the component
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { name: 'Photography', icon: CameraIcon, count: '124 vendors' },
    { name: 'Catering', icon: CakeIcon, count: '89 vendors' },
    { name: 'Decor', icon: PaintBrushIcon, count: '67 vendors' },
    { name: 'MC', icon: MicrophoneIcon, count: '45 vendors' },
    { name: 'Ushering', icon: UserGroupIcon, count: '38 vendors' },
    { name: 'Makeup', icon: SparklesIcon, count: '52 vendors' },
    { name: 'Videography', icon: VideoCameraIcon, count: '41 vendors' },
    { name: 'Wedding planning', icon: CalendarIcon, count: '33 vendors' }
  ]

// Add this state at the top
const [deferredPrompt, setDeferredPrompt] = useState(null)
const [showInstallButton, setShowInstallButton] = useState(false)

// Add this useEffect
useEffect(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    setDeferredPrompt(e)
    setShowInstallButton(true)
  })
}, [])

const handleInstallClick = () => {
  if (!deferredPrompt) return
  
  deferredPrompt.prompt()
  
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt')
    }
    setDeferredPrompt(null)
    setShowInstallButton(false)
  })
}

  // TP LIST VENDORS ONLY - Verified vendors that show in this section
  const featuredVendors = [
    {
      id: 1,
      name: "Ade's Photography",
      category: 'Photography',
      rating: 4.9,
      reviews: 124,
      location: 'Ikeja, Lagos',
      price: '350k - 600k',
      image: 'AP',
      experience: '10+ years',
      specialties: ['Wedding', 'Traditional', 'Portrait']
    },
    {
      id: 2,
      name: "Zoe's Decor",
      category: 'Decor',
      rating: 4.8,
      reviews: 67,
      location: 'Lekki, Lagos',
      price: '300k - 550k',
      image: 'ZD',
      experience: '5 years',
      specialties: ['Wedding', 'Birthday', 'Corporate']
    },
    {
      id: 3,
      name: "Signature Makeup",
      category: 'Makeup',
      rating: 4.9,
      reviews: 52,
      location: 'Victoria Island, Lagos',
      price: '150k - 300k',
      image: 'SM',
      experience: '7 years',
      specialties: ['Bridal', 'Editorial', 'Traditional']
    }
  ]

  return (
    <div className="bg-[#FDF8F2] min-h-screen">
      
      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 animate-fadeIn">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:bg-[#084848] transition-colors">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-[#0A5C5C] group-hover:text-[#084848] transition-colors">Safe-Pay</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/vendors" className="text-[#2D3E50] hover:text-[#0A5C5C] font-medium transition-colors">
              Find vendors
            </Link>
            <Link to="/how-it-works" className="text-[#2D3E50] hover:text-[#0A5C5C] font-medium transition-colors">
              How it works
            </Link>
          
            <Link
              to="/vendor/signup"
              className="border border-[#0A5C5C] text-[#0A5C5C] px-4 py-2 rounded-lg hover:bg-[#0A5C5C] hover:text-white transition-colors"
            >
              List your business
            </Link>
            <Link
              to="/vendor/login"
              className="bg-[#0A5C5C] text-white px-5 py-2 rounded-lg hover:bg-[#084848] transition-colors"
            >
              Vendor login
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0A5C5C] hover:bg-[#0A5C5C] hover:text-white rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link to="/vendors" className="text-[#2D3E50] hover:text-[#0A5C5C] py-2" onClick={() => setMobileMenuOpen(false)}>
                Find vendors
              </Link>
              <Link to="/how-it-works" className="text-[#2D3E50] hover:text-[#0A5C5C] py-2" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </Link>
              
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/vendor/signup"
                  className="border border-[#0A5C5C] text-[#0A5C5C] px-4 py-2 rounded-lg text-center hover:bg-[#0A5C5C] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  List your business
                </Link>
                <Link
                  to="/vendor/login"
                  className="bg-[#0A5C5C] text-white px-4 py-2 rounded-lg text-center hover:bg-[#084848] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vendor login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Nigeria Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E67A4C] bg-opacity-10 px-4 py-2 rounded-full mb-6 animate-fadeInUp">
            <ShieldCheckIcon className="w-4 h-4 text-[#E67A4C]" />
            <span className="text-[#E67A4C] font-medium text-sm sm:text-base">
              Nigeria's #1 event vendor platform
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3E50] mb-6 leading-tight animate-fadeInUp delay-100">
            Find trusted vendors, <br />
            <span className="text-[#0A5C5C] relative">
              pay securely
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFB347] rounded-full"></span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4 animate-fadeInUp delay-200">
            No more cash stress. No more "I go pay you next week." 
            Search vendors, book instantly, pay only when job is done.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-1 sm:p-2 rounded-2xl shadow-lg max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 animate-scaleIn delay-300">
            <div className="flex-1 flex items-center px-4 py-2 sm:py-0">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for photography, catering, decor..." 
                className="w-full px-3 py-2 sm:py-3 focus:outline-none text-gray-700 placeholder:text-sm"
              />
            </div>
            <Link
              to={`/vendors?search=${searchQuery}`}
              className="bg-[#0A5C5C] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-xl sm:rounded-full hover:bg-[#084848] transition-colors font-medium flex items-center justify-center gap-2"
            >
              <MagnifyingGlassIcon className="w-5 h-5 sm:hidden" />
              <span className="sm:inline">Search</span>
            </Link>
          </div>
          
          {/* Popular Searches */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 animate-fadeInUp delay-400">
            <span className="hidden sm:inline">Popular:</span>
            <Link to="/vendors?category=photography" className="px-3 py-1 bg-white rounded-full border border-gray-200 hover:border-[#0A5C5C] hover:text-[#0A5C5C] transition-colors">
              Wedding photographer
            </Link>
            <Link to="/vendors?category=catering" className="px-3 py-1 bg-white rounded-full border border-gray-200 hover:border-[#0A5C5C] hover:text-[#0A5C5C] transition-colors">
              Catering service
            </Link>
            <Link to="/vendors?category=decor" className="px-3 py-1 bg-white rounded-full border border-gray-200 hover:border-[#0A5C5C] hover:text-[#0A5C5C] transition-colors">
              Event decor
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 animate-fadeInUp delay-500">
            <span className="flex items-center gap-1.5">
              <CheckBadgeIcon className="w-4 h-4 text-[#0A5C5C]" />
              500+ verified
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon className="w-4 h-4 text-[#0A5C5C]" />
              ₦50M+ secured
            </span>
            <span className="flex items-center gap-1.5">
              <StarIconSolid className="w-4 h-4 text-[#FFB347]" />
              4.8 rating
            </span>
          </div>
        </div>
      </div>

      {/* POPULAR CATEGORIES - NO GRADIENTS */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-3">
              Popular services clients book
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Find the perfect vendor for your event
            </p>
          </div>
          
          {/* Category Grid - Solid Colors, No Gradients */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link 
                  key={category.name}
                  to={`/vendors?category=${category.name.toLowerCase()}`}
                  className="group bg-[#FDF8F2] p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-[#0A5C5C] hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-[#0A5C5C] transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0A5C5C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="font-medium text-sm sm:text-base text-[#2D3E50] group-hover:text-[#0A5C5C] transition-colors">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-[#0A5C5C] transition-colors mt-1">
                      {category.count}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* FEATURED VENDORS - ONLY TP LIST VENDORS */}
      <div className="bg-[#FDF8F2] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-2">
                Top rated vendors
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Verified and trusted TP List vendors
              </p>
            </div>
            <Link 
              to="/vendors?tpList=true" 
              className="inline-flex items-center gap-2 bg-[#0A5C5C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#084848] transition-colors group"
            >
              View all TP List vendors
              <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Vendor Cards - Only TP List Vendors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVendors.map((vendor, index) => (
              <Link
                key={vendor.id}
                to={`/vendor/${vendor.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-[#FFB347] relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* TP List Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#FFB347] text-[#2D3E50] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <StarIconSolid className="w-4 h-4" />
                    <span className="font-bold text-sm">TP LIST</span>
                  </div>
                </div>
                
                {/* Card Header */}
                <div className="h-28 sm:h-32 bg-[#0A5C5C] relative">
                  <div className="absolute -bottom-8 left-4 sm:left-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg border-4 border-[#FFB347]">
                      <span className="text-2xl sm:text-3xl font-bold text-[#0A5C5C]">{vendor.image}</span>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="pt-12 sm:pt-14 p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl text-[#2D3E50]">
                    {vendor.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <StarIconSolid key={star} className="w-4 h-4 text-[#FFB347]" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2 font-medium">{vendor.rating}</span>
                    <span className="text-xs text-gray-500">({vendor.reviews} reviews)</span>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
                    <MapPinIcon className="w-4 h-4 text-[#0A5C5C]" />
                    <span>{vendor.location}</span>
                    <span className="mx-1">•</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">{vendor.experience}</span>
                  </div>
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {vendor.specialties.map((specialty, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500 block">Starting from</span>
                      <span className="font-bold text-[#0A5C5C] text-lg">₦{vendor.price}</span>
                    </div>
                    <span className="text-sm font-medium text-[#0A5C5C] group-hover:underline">
                      View profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-3">
              How Safe-Pay works for you
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Book vendors, pay securely, get your event stress-free
            </p>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0A5C5C] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl text-[#0A5C5C] font-bold">1</span>
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2 text-base sm:text-lg">Search & select</h3>
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Find verified vendors, compare ratings, view portfolios
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E67A4C] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl text-[#E67A4C] font-bold">2</span>
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2 text-base sm:text-lg">Book & pay</h3>
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Pay full amount securely. Money held by Paystack, CBN licensed
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB347] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl text-[#8B691B] font-bold">3</span>
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2 text-base sm:text-lg">Vendor works</h3>
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Vendor delivers service. You track progress via chat
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl text-green-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2 text-base sm:text-lg">Confirm & release</h3>
              <p className="text-xs sm:text-sm text-gray-600 px-2">
                Confirm job done. 24hrs cooling. Vendor gets paid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TP LIST BENEFITS SECTION */}
      <div className="bg-[#FDF8F2] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-3">
              TP List benefits for vendors
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Get verified, appear first, pay less fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIconSolid className="w-6 h-6 text-[#FFB347]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">Blue badge</h3>
              <p className="text-sm text-gray-600">Stand out and build trust with clients</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#FFB347]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">Featured first</h3>
              <p className="text-sm text-gray-600">Appear before 100+ other vendors</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-6 h-6 text-[#FFB347]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">Pay 1% fee</h3>
              <p className="text-sm text-gray-600">Instead of 2%, save 50% on fees</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#FFB347] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-[#FFB347]" />
              </div>
              <h3 className="font-semibold text-[#2D3E50] mb-2">Priority support</h3>
              <p className="text-sm text-gray-600">We pick your call first</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/vendor/tp-list"
              className="inline-flex items-center gap-2 bg-[#FFB347] text-[#2D3E50] px-6 py-3 rounded-lg font-medium hover:bg-[#f0a83c] transition-colors"
            >
              Learn more about TP List
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* PRICING SECTION */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3E50] mb-3">
              Simple, transparent pricing
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              No hidden fees. You only pay when you get paid.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Free Tier */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#2D3E50] mb-2">Free account</h3>
              <p className="text-sm text-gray-600 mb-4">For vendors just starting out</p>
              <div className="text-3xl font-bold text-[#0A5C5C] mb-4">₦0<span className="text-base font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Receive unlimited payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Get paid 24hrs after job</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">2% transaction fee</span>
                </li>
              </ul>
              <Link
                to="/vendor/signup"
                className="block text-center border-2 border-[#0A5C5C] text-[#0A5C5C] px-4 py-2 rounded-lg font-medium hover:bg-[#0A5C5C] hover:text-white transition-colors"
              >
                Start for free
              </Link>
            </div>
            
            {/* TP List Tier */}
            <div className="border-2 border-[#FFB347] rounded-2xl p-8 bg-white shadow-md relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFB347] text-[#2D3E50] px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-[#2D3E50] mb-2">TP List</h3>
              <p className="text-sm text-gray-600 mb-4">For serious vendors who want more clients</p>
              <div className="text-3xl font-bold text-[#0A5C5C] mb-4">₦5,000<span className="text-base font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Blue verification badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Featured in search results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">1% transaction fee (save 50%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Priority customer support</span>
                </li>
              </ul>
              <Link
                to="/vendor/upgrade"
                className="block text-center bg-[#FFB347] text-[#2D3E50] px-4 py-2 rounded-lg font-medium hover:bg-[#f0a83c] transition-colors"
              >
                Upgrade to TP List
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VENDOR CTA */}
      <div className="bg-[#0A5C5C] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Are you a vendor? Join Safe-Pay today
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-8 max-w-2xl mx-auto">
            Get verified, receive payments instantly, stop chasing clients for money.
            500+ vendors already registered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vendor/signup"
              className="bg-white text-[#0A5C5C] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Register for free →
            </Link>
            <Link
              to="/vendor/tp-list"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-[#0A5C5C] transition-colors"
            >
              Learn about TP List
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-bold">2%</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Transaction fee</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-bold">24hrs</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Settlement time</div>
            </div>
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-bold">₦5k/mo</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">TP List upgrade</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER - With all links you requested */}
      <div className="bg-white border-t border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            
            {/* Brand Column */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold text-[#0A5C5C]">Safe-Pay</span>
              </div>
              <p className="text-sm text-gray-600">
                Nigeria's trusted payment platform for events. 
                We connect clients with verified vendors and secure every transaction.
              </p>
            </div>
            
            {/* For Clients */}
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-[#2D3E50] mb-4">For clients</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/vendors" className="hover:text-[#0A5C5C] transition-colors">Find vendors</Link></li>
                <li><Link to="/how-it-works" className="hover:text-[#0A5C5C] transition-colors">How it works</Link></li>
                <li><Link to="/faq" className="hover:text-[#0A5C5C] transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-[#0A5C5C] transition-colors">Contact us</Link></li>
              </ul>
            </div>
            
            {/* For Vendors */}
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-[#2D3E50] mb-4">For vendors</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/vendor/signup" className="hover:text-[#0A5C5C] transition-colors">Register free</Link></li>
                <li><Link to="/vendor/login" className="hover:text-[#0A5C5C] transition-colors">Vendor login</Link></li>
                <li><Link to="/vendor/tp-list" className="hover:text-[#0A5C5C] transition-colors">TP List benefits</Link></li>
                <li><Link to="/pricing" className="hover:text-[#0A5C5C] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-[#2D3E50] mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span>hello@safepay.ng</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <PhoneIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span>01-888-9999</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPinIcon className="w-4 h-4 text-[#0A5C5C]" />
                  <span>Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2026 Safe-Pay. Built for Nigeria. Payments by Paystack (CBN licensed).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}