import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  BuildingOfficeIcon, 
  EnvelopeIcon, 
  UserIcon,
  CheckBadgeIcon,
  StarIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorSignup() {
  const navigate = useNavigate()
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    category: '',
    password: '',
    confirmPassword: ''
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordError, setPasswordError] = useState('')
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Check password strength when password field changes
    if (name === 'password') {
      checkPasswordStrength(value)
    }
  }
  
  // Password strength checker
  const checkPasswordStrength = (password) => {
    let strength = 0
    
    // Length check
    if (password.length >= 8) strength += 1
    if (password.length >= 12) strength += 1
    
    // Contains number
    if (/\d/.test(password)) strength += 1
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1
    
    // Contains special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1
    
    setPasswordStrength(strength)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match')
      return
    }
    
    // Validate password strength
    if (passwordStrength < 3) {
      setPasswordError('Password is too weak. Use at least 8 characters with numbers and symbols')
      return
    }
    
    // Validate terms agreement
    if (!agreeTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy')
      return
    }
    
    // Store in localStorage for demo (remove password before storing)
    const { password, confirmPassword, ...vendorData } = formData
    localStorage.setItem('vendor', JSON.stringify({
      ...vendorData,
      id: 'vendor_' + Date.now()
    }))
    
    // Redirect to dashboard
    navigate('/vendor/dashboard')
  }
  
  // Password strength color
  const getStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500'
    if (passwordStrength <= 4) return 'bg-yellow-500'
    return 'bg-green-500'
  }
  
  const getStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak'
    if (passwordStrength <= 4) return 'Medium'
    return 'Strong'
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2] py-12">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </button>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl border border-[#E67A4C] border-opacity-20 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A5C5C] to-[#084848] px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Register as vendor</h1>
            <p className="text-white text-opacity-90 mt-1">Free account. Pay 2% only when you get paid.</p>
          </div>
          
          {/* Free vs TP List */}
          <div className="p-8 border-b border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Free Tier */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckBadgeIcon className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D3E50]">Free Account</h3>
                    <p className="text-sm text-gray-500">Always free</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckBadgeIcon className="w-4 h-4 text-green-600" />
                    Receive unlimited payments
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckBadgeIcon className="w-4 h-4 text-green-600" />
                    Get paid 24hrs after job
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckBadgeIcon className="w-4 h-4 text-green-600" />
                    2% transaction fee
                  </li>
                </ul>
              </div>
              
              {/* TP List - Optional */}
              <div className="bg-[#FFB347] bg-opacity-10 rounded-xl p-6 border border-[#FFB347] border-opacity-30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FFB347] rounded-full flex items-center justify-center">
                    <StarIconSolid className="w-5 h-5 text-[#2D3E50]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D3E50]">TP List</h3>
                    <p className="text-sm text-[#8B691B]">₦5,000/month • Optional</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-600">
                    <StarIcon className="w-4 h-4 text-[#FFB347]" />
                    Blue verification badge
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <StarIcon className="w-4 h-4 text-[#FFB347]" />
                    Featured in directory
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <StarIcon className="w-4 h-4 text-[#FFB347]" />
                    1% transaction fee
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  Start free. Upgrade anytime.
                </p>
              </div>
            </div>
          </div>
          
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <BuildingOfficeIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Business name</span>
                </div>
              </label>
              <input
                type="text"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all"
                placeholder="e.g. Ade's Photography"
              />
            </div>
            
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
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all"
                placeholder="you@example.com"
              />
            </div>
            
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Service category</span>
                </div>
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all"
              >
                <option value="">Select category</option>
                <option value="photography">Photography</option>
                <option value="catering">Catering</option>
                <option value="decor">Decor</option>
                <option value="mc">MC</option>
                <option value="usher">Usher</option>
                <option value="venue">Venue</option>
                <option value="makeup">Makeup</option>
                <option value="videography">Videography</option>
              </select>
            </div>
            
            {/* Password */}
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
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all pr-12"
                  placeholder="Create a strong password"
                  minLength={8}
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
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-300`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {getStrengthText()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Use at least 8 characters with numbers & symbols
                  </p>
                </div>
              )}
            </div>
            
            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="w-4 h-4 text-[#E67A4C]" />
                  <span>Confirm password</span>
                </div>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all pr-12"
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0A5C5C] transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {/* Password match error */}
              {passwordError && (
                <p className="text-xs text-red-600 mt-1">{passwordError}</p>
              )}
              
              {/* Password match indicator */}
              {formData.password && formData.confirmPassword && (
                <div className="mt-1">
                  {formData.password === formData.confirmPassword ? (
                    <p className="text-xs text-green-600">✓ Passwords match</p>
                  ) : (
                    <p className="text-xs text-red-600">✗ Passwords do not match</p>
                  )}
                </div>
              )}
            </div>
            
            {/* Terms agreement */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 rounded border-gray-300 text-[#0A5C5C] focus:ring-[#0A5C5C]"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-[#0A5C5C] hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-[#0A5C5C] hover:underline">Privacy Policy</Link>
              </label>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#084848] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg text-lg"
            >
              Create free vendor account
            </button>
            
            <p className="text-xs text-gray-400 text-center">
              By registering, you agree to our Terms of Service and Privacy Policy.
              You'll pay 2% transaction fee only when you receive money.
            </p>
          </form>
        </div>
        
        {/* Link to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/vendor/login" className="text-[#0A5C5C] font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}