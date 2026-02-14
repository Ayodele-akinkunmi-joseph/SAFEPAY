import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  EnvelopeIcon, 
  LockClosedIcon, 
  ArrowPathIcon,
  ArrowLeftIcon,      // ✅ Back button icon
  EyeIcon,            // ✅ Eye icon for show password
  EyeSlashIcon        // ✅ Eye slash for hide password
} from '@heroicons/react/24/outline'

export default function VendorLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)  // ✅ Toggle password visibility
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    // Mock login - replace with Supabase
    setTimeout(() => {
      if (email === 'ade@photography.com' && password === 'password') {
        localStorage.setItem('vendor', JSON.stringify({
          id: 'vendor_123',
          businessName: "Ade's Photography",
          email: 'ade@photography.com',
          tpList: true
        }))
        navigate('/vendor/dashboard')
      } else {
        setError('Invalid email or password')
        setLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2] p-4">
      
      {/* ✅ Back Button - Navigate to home */}
      <div className="max-w-md mx-auto pt-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors group mb-4"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </button>
      </div>

      <div className="w-full max-w-md mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold text-[#0A5C5C]">Safe-Pay</span>
        </Link>
        
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold text-[#2D3E50] mb-2">Vendor login</h1>
          <p className="text-gray-600 text-sm mb-6">
            Access your dashboard to manage bookings and payments
          </p>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Email address</span>
                </div>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all"
                placeholder="ade@photography.com"
              />
            </div>
            
            {/* Password with Toggle */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Password</span>
                </div>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}  // ✅ Toggle between text/password
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all pr-12"
                  placeholder="••••••••"
                />
                {/* ✅ Eye button to toggle visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0A5C5C] transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Remember me - Removed forgot password link */}
            <div className="flex items-center">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-[#0A5C5C] focus:ring-[#0A5C5C]" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0A5C5C] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  Logging in...
                </span>
              ) : 'Login'}
            </button>
          </form>
          
          {/* Sign up link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/vendor/signup" className="text-[#0A5C5C] font-medium hover:underline">
              Register for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}