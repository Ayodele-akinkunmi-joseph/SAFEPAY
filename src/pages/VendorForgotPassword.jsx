import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  EnvelopeIcon,
  KeyIcon,
  LockClosedIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'

export default function VendorForgotPassword() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: email, 2: otp, 3: new password
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let interval
    if (step === 2 && timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [step, timer, canResend])

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate checking if email exists
    setTimeout(() => {
      if (email === 'ade@photography.com') {
        setStep(2)
        setError('')
      } else {
        setError('Email not found. Please check and try again.')
      }
      setLoading(false)
    }, 1500)
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    const otpString = otp.join('')
    if (otpString.length !== 6) {
      setError('Please enter a valid 6-digit OTP')
      setLoading(false)
      return
    }

    // Simulate OTP verification
    setTimeout(() => {
      if (otpString === '123456') {
        setStep(3)
        setError('')
      } else {
        setError('Invalid OTP. Please try again.')
      }
      setLoading(false)
    }, 1500)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters')
      setLoading(false)
      return
    }

    // Simulate password reset
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
      
      // Redirect to login after success
      setTimeout(() => {
        navigate('/vendor/login')
      }, 2000)
    }, 1500)
  }

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleResendOtp = () => {
    setTimer(60)
    setCanResend(false)
    alert('New OTP sent to your email!')
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckBadgeIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Password Reset!</h2>
          <p className="text-gray-600 mb-4">Your password has been successfully reset.</p>
          <p className="text-sm text-gray-400">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2] py-12">
      <div className="max-w-md mx-auto px-4">
        
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={() => step === 1 ? navigate('/vendor/login') : setStep(step - 1)}
            className="inline-flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= i ? 'bg-[#0A5C5C] text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {i}
              </div>
              {i < 3 && (
                <div className={`flex-1 h-1 mx-2 transition-all ${
                  step > i ? 'bg-[#0A5C5C]' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Email */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h1 className="text-2xl font-bold text-[#2D3E50] mb-2">Forgot Password?</h1>
            <p className="text-gray-600 text-sm mb-6">
              Enter your email address and we'll send you a 6-digit OTP to reset your password.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-5">
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all"
                  placeholder="ade@photography.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A5C5C] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                    Sending OTP...
                  </span>
                ) : 'Send OTP'}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h1 className="text-2xl font-bold text-[#2D3E50] mb-2">Verify OTP</h1>
            <p className="text-gray-600 text-sm mb-6">
              Enter the 6-digit code sent to {email}
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleOtpSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-3 text-center">
                  Enter OTP
                </label>
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 text-lg font-bold"
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-[#0A5C5C] hover:underline"
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <span>Resend OTP in {timer} seconds</span>
                  )}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A5C5C] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                    Verifying...
                  </span>
                ) : 'Verify OTP'}
              </button>
            </form>
          </div>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h1 className="text-2xl font-bold text-[#2D3E50] mb-2">Reset Password</h1>
            <p className="text-gray-600 text-sm mb-6">
              Enter your new password below.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-5">
              
              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <LockClosedIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>New Password</span>
                  </div>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all pr-12"
                    placeholder="••••••••"
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0A5C5C] transition-colors"
                  >
                    {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-[#2D3E50] mb-2">
                  <div className="flex items-center gap-2">
                    <LockClosedIcon className="w-4 h-4 text-[#E67A4C]" />
                    <span>Confirm Password</span>
                  </div>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A5C5C] bg-gray-50 transition-all pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0A5C5C] transition-colors"
                  >
                    {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Password match indicator */}
              {newPassword && confirmPassword && (
                <p className={`text-xs ${newPassword === confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                  {newPassword === confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A5C5C] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                    Resetting...
                  </span>
                ) : 'Reset Password'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}