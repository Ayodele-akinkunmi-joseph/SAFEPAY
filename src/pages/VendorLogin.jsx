import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  EnvelopeIcon, 
  LockClosedIcon, 
  ArrowPathIcon,
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'

export default function VendorLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
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
      
      {/* Navigation Bar */}
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </button>
          
          <Link
            to="/vendor/tp-list"
            className="text-sm bg-[#FFB347] text-[#2D3E50] px-3 py-1 rounded-full hover:bg-[#f0a83c] transition-colors"
          >
            TP List
          </Link>
        </div>
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
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent bg-gray-50 transition-all pr-12"
                  placeholder="••••••••"
                />
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
            
            {/* Remember me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-[#0A5C5C] focus:ring-[#0A5C5C]" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link 
                to="/vendor/forgot-password" 
                className="text-sm text-[#0A5C5C] hover:underline"
              >
                Forgot password?
              </Link>
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