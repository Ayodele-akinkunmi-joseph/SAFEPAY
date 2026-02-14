import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  MapPinIcon,
  CameraIcon,
  CakeIcon,
  PaintBrushIcon,
  MicrophoneIcon,
  UserGroupIcon,
  SparklesIcon,
  VideoCameraIcon,
  CalendarIcon,
  XMarkIcon,
  CheckBadgeIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorDirectory() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [sortBy, setSortBy] = useState('recommended')
  const [showSortMenu, setShowSortMenu] = useState(false)

  // FIX 1: Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { name: 'All', icon: null },
    { name: 'Photography', icon: CameraIcon },
    { name: 'Catering', icon: CakeIcon },
    { name: 'Decor', icon: PaintBrushIcon },
    { name: 'MC', icon: MicrophoneIcon },
    { name: 'Ushering', icon: UserGroupIcon },
    { name: 'Makeup', icon: SparklesIcon },
    { name: 'Videography', icon: VideoCameraIcon },
    { name: 'Wedding planning', icon: CalendarIcon }
  ]

  const locations = ['All', 'Ikeja', 'Lekki', 'Victoria Island', 'Surulere', 'Yaba', 'Ajah', 'GRA']

  // All vendors data
  const allVendors = [
    // TP LIST VENDORS (These go show FIRST)
    {
      id: 1,
      name: "Ade's Photography",
      category: 'Photography',
      rating: 4.9,
      reviews: 124,
      location: 'Ikeja, Lagos',
      price: '350k - 600k',
      priceMin: 350000,
      priceMax: 600000,
      image: 'AP',
      tpList: true,
      verified: true,
      experience: '10+ years',
      specialties: ['Wedding', 'Traditional', 'Portrait'],
      eventsCompleted: 87,
      responseTime: '< 1hr'
    },
    {
      id: 3,
      name: "Zoe's Decor",
      category: 'Decor',
      rating: 4.8,
      reviews: 67,
      location: 'Lekki, Lagos',
      price: '300k - 550k',
      priceMin: 300000,
      priceMax: 550000,
      image: 'ZD',
      tpList: true,
      verified: true,
      experience: '5 years',
      specialties: ['Wedding', 'Birthday', 'Corporate'],
      eventsCompleted: 45,
      responseTime: '< 2hrs'
    },
    {
      id: 6,
      name: "Signature Makeup",
      category: 'Makeup',
      rating: 4.9,
      reviews: 52,
      location: 'Victoria Island, Lagos',
      price: '150k - 300k',
      priceMin: 150000,
      priceMax: 300000,
      image: 'SM',
      tpList: true,
      verified: true,
      experience: '7 years',
      specialties: ['Bridal', 'Editorial', 'Traditional'],
      eventsCompleted: 112,
      responseTime: '< 30min'
    },
    
    // REGULAR VENDORS (Free account)
    {
      id: 2,
      name: "Chuks Catering",
      category: 'Catering',
      rating: 4.7,
      reviews: 89,
      location: 'Surulere, Lagos',
      price: '250k - 450k',
      priceMin: 250000,
      priceMax: 450000,
      image: 'CC',
      tpList: false,
      verified: true,
      experience: '7 years',
      specialties: ['Nigerian', 'Intercontinental', 'BBQ'],
      eventsCompleted: 56,
      responseTime: '< 2hrs'
    },
    {
      id: 4,
      name: "Biggie MC",
      category: 'MC',
      rating: 4.6,
      reviews: 45,
      location: 'Victoria Island, Lagos',
      price: '200k - 400k',
      priceMin: 200000,
      priceMax: 400000,
      image: 'BM',
      tpList: false,
      verified: true,
      experience: '12 years',
      specialties: ['Wedding', 'Corporate', 'Parties'],
      eventsCompleted: 134,
      responseTime: '< 3hrs'
    },
    {
      id: 5,
      name: "Glo Ushering",
      category: 'Ushering',
      rating: 4.5,
      reviews: 38,
      location: 'Yaba, Lagos',
      price: '150k - 250k',
      priceMin: 150000,
      priceMax: 250000,
      image: 'GU',
      tpList: false,
      verified: true,
      experience: '4 years',
      specialties: ['Wedding', 'Conference', 'Events'],
      eventsCompleted: 23,
      responseTime: '< 1hr'
    },
    {
      id: 7,
      name: "Prime Videography",
      category: 'Videography',
      rating: 4.7,
      reviews: 41,
      location: 'Ikeja, Lagos',
      price: '300k - 550k',
      priceMin: 300000,
      priceMax: 550000,
      image: 'PV',
      tpList: false,
      verified: true,
      experience: '6 years',
      specialties: ['Wedding film', 'Highlights', 'Documentary'],
      eventsCompleted: 48,
      responseTime: '< 2hrs'
    },
    {
      id: 8,
      name: "Elegant Planning",
      category: 'Wedding planning',
      rating: 4.8,
      reviews: 33,
      location: 'Lekki, Lagos',
      price: '500k - 1.2M',
      priceMin: 500000,
      priceMax: 1200000,
      image: 'EP',
      tpList: false,
      verified: true,
      experience: '8 years',
      specialties: ['Full planning', 'Coordination', 'Design'],
      eventsCompleted: 41,
      responseTime: '< 2hrs'
    }
  ]

  // Filter vendors
  const filteredVendors = allVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(search.toLowerCase()) ||
                         vendor.category.toLowerCase().includes(search.toLowerCase()) ||
                         vendor.specialties.some(s => s.toLowerCase().includes(search.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory
    const matchesLocation = selectedLocation === 'All' || vendor.location.includes(selectedLocation)
    return matchesSearch && matchesCategory && matchesLocation
  })

  // SORT VENDORS - TP LIST FIRST, THEN BY RATING
  const sortedVendors = [...filteredVendors].sort((a, b) => {
    // TP List vendors on top
    if (a.tpList && !b.tpList) return -1
    if (!a.tpList && b.tpList) return 1
    
    // Then sort by rating
    if (sortBy === 'rating') {
      return b.rating - a.rating
    }
    // Then by price low to high
    if (sortBy === 'price_low') {
      return a.priceMin - b.priceMin
    }
    // Then by price high to low
    if (sortBy === 'price_high') {
      return b.priceMax - a.priceMax
    }
    // Default: recommended (rating + reviews)
    return (b.rating * b.reviews) - (a.rating * a.reviews)
  })

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      
      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 179, 71, 0.4); }
          50% { box-shadow: 0 0 20px 10px rgba(255, 179, 71, 0.2); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-glowPulse {
          animation: glowPulse 2s infinite;
        }
        
        .tp-list-card {
          animation: glowPulse 3s infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-[#0A5C5C] hidden sm:block">Safe-Pay</span>
            </Link>
            
            {/* Search Bar - Mobile Optimized */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search vendors or services..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden p-2.5 text-gray-600 hover:text-[#0A5C5C] hover:bg-gray-100 rounded-lg transition-all"
              >
                <FunnelIcon className="w-5 h-5" />
              </button>
              <Link
                to="/vendor/login"
                className="hidden md:block border border-[#0A5C5C] text-[#0A5C5C] px-4 py-2 rounded-lg hover:bg-[#0A5C5C] hover:text-white transition-all transform hover:scale-105"
              >
                Vendor login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal - FIXED: Now scrollable! */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden animate-fadeInUp">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col">
            
            {/* Fixed Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="font-bold text-lg text-[#2D3E50]">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Scrollable Content - FIXED! */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-[#2D3E50] mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => {
                      const Icon = cat.icon
                      return (
                        <button
                          key={cat.name}
                          onClick={() => {
                            setSelectedCategory(cat.name)
                            setShowFilters(false)
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                            selectedCategory === cat.name
                              ? 'bg-[#0A5C5C] text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{cat.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                
                {/* Location Filter */}
                <div>
                  <h4 className="font-medium text-[#2D3E50] mb-3">Location</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc)
                          setShowFilters(false)
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                          selectedLocation === loc
                            ? 'bg-[#0A5C5C] text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* TP List Filter */}
                <div className="border-t border-gray-200 pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-[#0A5C5C] focus:ring-[#0A5C5C]" />
                    <span className="text-sm text-gray-700">Show TP List only</span>
                  </label>
                </div>
                
                {/* Apply Button */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-[#0A5C5C] text-white py-3 rounded-lg font-medium hover:bg-[#084848] transition-colors mt-4"
                >
                  Apply filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 animate-fadeInUp">
              <h3 className="font-bold text-lg text-[#2D3E50] mb-4">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-[#2D3E50] mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    return (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          selectedCategory === cat.name
                            ? 'bg-[#0A5C5C] text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        <span>{cat.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
              
              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-[#2D3E50] mb-3">Location</h4>
                <div className="space-y-2">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        selectedLocation === loc
                          ? 'bg-[#0A5C5C] text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* TP List Filter */}
              <div className="border-t border-gray-200 pt-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#0A5C5C] focus:ring-[#0A5C5C]" />
                  <span className="text-sm text-gray-700">Show TP List vendors only</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">
                  Verified & trusted vendors
                </p>
              </div>
            </div>
          </div>
          
          {/* Vendor Grid */}
          <div className="flex-1">
            
            {/* Results Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="font-bold text-[#0A5C5C] text-lg">{sortedVendors.length}</span> vendors found
                {selectedCategory !== 'All' && <span className="ml-1">in <span className="font-medium">{selectedCategory}</span></span>}
              </p>
              
              {/* Sort Dropdown */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="w-full sm:w-auto bg-white border border-gray-200 px-4 py-2 rounded-lg flex items-center justify-between gap-2 hover:border-[#0A5C5C] transition-all"
                >
                  <span className="text-sm text-gray-700">
                    Sort by: <span className="font-medium">
                      {sortBy === 'recommended' && 'Recommended'}
                      {sortBy === 'rating' && 'Highest rated'}
                      {sortBy === 'price_low' && 'Price: Low to High'}
                      {sortBy === 'price_high' && 'Price: High to Low'}
                    </span>
                  </span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} />
                </button>
                
                {showSortMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-30 animate-fadeInUp">
                    {[
                      { value: 'recommended', label: 'Recommended' },
                      { value: 'rating', label: 'Highest rated' },
                      { value: 'price_low', label: 'Price: Low to High' },
                      { value: 'price_high', label: 'Price: High to Low' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value)
                          setShowSortMenu(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                          sortBy === option.value ? 'bg-[#0A5C5C] text-white hover:bg-[#084848]' : ''
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Vendor Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {sortedVendors.map((vendor, index) => (
                <Link
                  key={vendor.id}
                  to={`/vendor/${vendor.id}`}
                  className={`group animate-fadeInUp ${vendor.tpList ? 'tp-list-card' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* TP LIST VENDOR - PREMIUM DESIGN */}
                  {vendor.tpList ? (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#FFB347] relative h-full">
                      
                      {/* Gold Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFB347] to-[#FFD700] rounded-2xl opacity-30 blur group-hover:opacity-60 transition-opacity"></div>
                      
                      <div className="relative bg-white h-full">
                        
                        {/* TP List Badge - Prominent */}
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-gradient-to-r from-[#FFB347] to-[#FFA07A] text-[#2D3E50] px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                            <StarIconSolid className="w-4 h-4" />
                            <span className="font-bold text-sm">TP LIST</span>
                          </div>
                        </div>
                        
                        {/* Verified Badge */}
                        {vendor.verified && (
                          <div className="absolute top-4 left-4 z-20">
                            <div className="bg-green-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs shadow-lg">
                              <CheckBadgeIcon className="w-3 h-3" />
                              <span>Verified</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Header with Gradient */}
                        <div className="h-32 bg-gradient-to-r from-[#0A5C5C] to-[#084848] relative">
                          <div className="absolute -bottom-8 left-6">
                            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-xl border-4 border-[#FFB347] transform group-hover:rotate-12 transition-transform duration-500">
                              <span className="text-3xl font-bold text-[#0A5C5C]">{vendor.image}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="pt-14 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-xl text-[#2D3E50] group-hover:text-[#0A5C5C] transition-colors">
                                {vendor.name}
                              </h3>
                              <p className="text-sm text-gray-500">{vendor.category}</p>
                            </div>
                            <span className="bg-[#FFB347] bg-opacity-20 text-[#8B691B] text-xs px-2 py-1 rounded-full font-medium">
                              {vendor.responseTime}
                            </span>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-1 mt-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <StarIconSolid
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(vendor.rating)
                                      ? 'text-[#FFB347]'
                                      : 'text-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-bold text-[#2D3E50] ml-1">{vendor.rating}</span>
                            <span className="text-xs text-gray-500">({vendor.reviews} reviews)</span>
                          </div>
                          
                          {/* Location */}
                          <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
                            <MapPinIcon className="w-4 h-4 text-[#0A5C5C]" />
                            <span>{vendor.location}</span>
                            <span className="mx-1">•</span>
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{vendor.experience}</span>
                          </div>
                          
                          {/* Specialties */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {vendor.specialties.slice(0, 3).map((specialty, i) => (
                              <span key={i} className="text-xs bg-[#FFB347] bg-opacity-10 text-[#8B691B] px-2 py-1 rounded-full">
                                {specialty}
                              </span>
                            ))}
                            {vendor.specialties.length > 3 && (
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                +{vendor.specialties.length - 3}
                              </span>
                            )}
                          </div>
                          
                          {/* Events Completed */}
                          <div className="mt-3 text-xs text-gray-500">
                            <span className="font-medium">{vendor.eventsCompleted}</span> events completed
                          </div>
                          
                          {/* Price and CTA */}
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <div>
                              <span className="text-xs text-gray-500 block">Starting from</span>
                              <span className="font-bold text-[#0A5C5C] text-xl">₦{vendor.priceMin.toLocaleString()}</span>
                            </div>
                            <div className="bg-[#0A5C5C] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#084848] transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                              Book now
                              <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* REGULAR VENDOR - Normal Design */
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="h-28 bg-gradient-to-r from-gray-700 to-gray-800 relative">
                        <div className="absolute -bottom-7 left-6">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border-4 border-white">
                            <span className="text-2xl font-bold text-gray-700">{vendor.image}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-10 p-5">
                        <h3 className="font-bold text-lg text-[#2D3E50]">{vendor.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{vendor.category}</p>
                        
                        <div className="flex items-center gap-1 mt-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIconSolid
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(vendor.rating) ? 'text-[#FFB347]' : 'text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium ml-1">{vendor.rating}</span>
                          <span className="text-xs text-gray-500">({vendor.reviews})</span>
                        </div>
                        
                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                          <MapPinIcon className="w-3 h-3" />
                          <span>{vendor.location}</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                          <span className="font-bold text-gray-700">₦{vendor.priceMin.toLocaleString()}+</span>
                          <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-xs hover:bg-gray-200 transition-all">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
            
            {/* No Results */}
            {sortedVendors.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center animate-fadeInUp">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#2D3E50] mb-2">No vendors found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedLocation('All')
                    setSearch('')
                  }}
                  className="bg-[#0A5C5C] text-white px-6 py-2 rounded-lg hover:bg-[#084848] transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}