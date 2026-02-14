import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'



export default function Contact() {
    useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, send to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="bg-[#FDF8F2] min-h-screen">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s infinite; }
        .animate-bounce { animation: bounce 2s infinite; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 animate-fadeIn">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#0A5C5C] rounded-lg flex items-center justify-center group-hover:bg-[#084848] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-[#0A5C5C] group-hover:text-[#084848] transition-colors">Safe-Pay</span>
          </Link>
          
          <Link
            to="/"
            className="text-[#0A5C5C] hover:text-[#084848] font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
          >
            <span>←</span> Back to home
          </Link>
        </div>
      </div>

      {/* Hero with Animation */}
      <div className="bg-[#0A5C5C] py-12 sm:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeInUp">
            <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
            <span className="text-white font-medium text-sm sm:text-base">We dey here for you 24/7</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp delay-100">
            Contact us
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Get in touch. We dey here to help.
          </p>
          
          {/* Floating envelope icon */}
          <div className="mt-8 animate-bounce">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
              <EnvelopeIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info - Left Column with Animations */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Get in touch card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slideInLeft">
              <h3 className="font-bold text-[#2D3E50] mb-4 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0A5C5C] rounded-full"></span>
                Get in touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-[#0A5C5C] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <EnvelopeIcon className="w-4 h-4 text-[#0A5C5C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:hello@safepay.ng" className="text-[#2D3E50] hover:text-[#0A5C5C] transition-colors font-medium">
                      hello@safepay.ng
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-[#E67A4C] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-4 h-4 text-[#E67A4C]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:018889999" className="text-[#2D3E50] hover:text-[#0A5C5C] transition-colors font-medium">
                      01-888-9999
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-[#FFB347] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPinIcon className="w-4 h-4 text-[#8B691B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Office</p>
                    <p className="text-[#2D3E50] font-medium">Lagos, Nigeria</p>
                    <p className="text-xs text-gray-400 mt-1">Remote first, meet by appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ClockIcon className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Response time</p>
                    <p className="text-[#2D3E50] font-medium">Within 2 hours</p>
                    <p className="text-xs text-gray-400 mt-1">24/7 for urgent issues</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick FAQ card */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slideInLeft delay-200">
              <h3 className="font-bold text-[#2D3E50] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#E67A4C] rounded-full"></span>
                Quick answers
              </h3>
              <div className="space-y-2 text-sm">
                <Link to="/faq" className="block text-gray-600 hover:text-[#0A5C5C] transition-all duration-300 hover:translate-x-2">
                  → How do I get refund?
                </Link>
                <Link to="/faq" className="block text-gray-600 hover:text-[#0A5C5C] transition-all duration-300 hover:translate-x-2">
                  → What is TP List?
                </Link>
                <Link to="/faq" className="block text-gray-600 hover:text-[#0A5C5C] transition-all duration-300 hover:translate-x-2">
                  → How vendors get paid?
                </Link>
                <Link to="/faq" className="block text-gray-600 hover:text-[#0A5C5C] transition-all duration-300 hover:translate-x-2">
                  → Do clients need account?
                </Link>
              </div>
              <Link to="/faq" className="mt-4 text-[#0A5C5C] text-sm font-medium hover:underline inline-flex items-center gap-1 group">
                View all FAQs
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          {/* Contact Form - Right Column with Animation */}
          <div className="lg:col-span-2 animate-fadeInUp delay-300">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 sm:p-8">
              <h3 className="font-bold text-[#2D3E50] mb-6 text-xl flex items-center gap-2">
                <span className="w-1 h-8 bg-[#0A5C5C] rounded-full"></span>
                Send us a message
              </h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-scaleIn">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckBadgeIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-[#2D3E50] text-lg mb-2">Message sent!</h4>
                  <p className="text-gray-600">
                    We go reply within 2 hours. Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-[#2D3E50] mb-2 transition-colors group-focus-within:text-[#0A5C5C]">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent transition-all duration-300 hover:border-[#0A5C5C]"
                      placeholder="e.g. Adebayo John"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-[#2D3E50] mb-2 transition-colors group-focus-within:text-[#0A5C5C]">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent transition-all duration-300 hover:border-[#0A5C5C]"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-[#2D3E50] mb-2 transition-colors group-focus-within:text-[#0A5C5C]">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent transition-all duration-300 hover:border-[#0A5C5C]"
                      placeholder="What you want to talk about?"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-[#2D3E50] mb-2 transition-colors group-focus-within:text-[#0A5C5C]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] focus:border-transparent transition-all duration-300 hover:border-[#0A5C5C]"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#0A5C5C] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#084848] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <PaperAirplaneIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Send message
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    We go respond within 2 hours. For urgent matters, call 01-888-9999.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}