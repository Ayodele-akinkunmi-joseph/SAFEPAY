import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function FAQ() {
    useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Why should I trust Safe-Pay with my money?",
      answer: "You don't! We never touch your money. When you pay, money goes directly to Paystack (CBN licensed since 2016). Safe-Pay just controls when money releases to vendor. If we disappear, your money is still safe with Paystack."
    },
    {
      question: "How do I get my money back if vendor disappoints?",
      answer: "Open dispute in the app, upload evidence (photos, chat). We review within 24 hours. If vendor failed, we refund you 100%. No police report, no begging."
    },
    {
      question: "Do I need an account to pay a vendor?",
      answer: "No! Clients don't need account. Vendor sends payment link, you click, see bank details, transfer. Done. No signup, no password."
    },
    {
      question: "What payment methods can I use?",
      answer: "Bank transfer (recommended, fee only ₦50), USSD (dial from any phone), or QR code (scan with banking app). No card option because fees too high."
    },
    {
      question: "How long before vendor receives money?",
      answer: "After you confirm job completion, we wait 24 hours (cooling period), then money releases to vendor. If you don't confirm within 7 days, auto-release happens."
    },
    {
      question: "What if vendor forces me to confirm before job is done?",
      answer: "Even if you press confirm, money no go vendor immediately. 24-hour cooling period starts. You get 24 hours to calm down, think, or open dispute. Emergency button dey inside app."
    },
    {
      question: "How vendors make money on Safe-Pay?",
      answer: "Vendors register free. When client pays, Paystack holds money. Vendor does job, client confirms, 24hrs later money enters vendor's bank account. Vendors pay 2% fee (or 1% if TP List subscriber)."
    },
    {
      question: "What is TP List and why pay ₦5,000/month?",
      answer: "TP (Top Priority) List is optional upgrade. Vendors get blue verification badge, appear first in search, pay 1% fee instead of 2%. ₦5,000/month is cheaper than Instagram ads and brings more clients."
    },
    {
      question: "Can client and vendor just take transaction outside Safe-Pay?",
      answer: "They can try, but: (1) Client pays CBN 3% penalty for cash withdrawal, (2) Bank transfers take 48 hours to clear, (3) No dispute protection. Safe-Pay cheaper and safer."
    },
    {
      question: "How do you prevent phone number sharing and WhatsApp bypass?",
      answer: "Our chat system hides phone numbers. If anyone types digits that look like phone number, system blocks it. First warning, second suspension, third ban + forfeit pending balance."
    },
    {
      question: "What happens if network fails?",
      answer: "Virtual accounts active for 30 minutes. Client can use USSD (*894#, *737#) without data. Vendor withdrawals process automatically once network returns."
    },
    {
      question: "Is Safe-Pay registered with CAC?",
      answer: "Yes! Safe-Pay Technologies is registered with Corporate Affairs Commission. We're building properly."
    }
  ]

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
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10, 92, 92, 0.2); }
          50% { box-shadow: 0 0 20px 10px rgba(10, 92, 92, 0.1); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s infinite; }
        .animate-glow { animation: glow 3s infinite; }
        
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
            <QuestionMarkCircleIcon className="w-4 h-4 text-white" />
            <span className="text-white font-medium text-sm sm:text-base">Got questions? We got answers</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp delay-100">
            Frequently asked questions
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp delay-200">
            All the questions wey people dey ask, answered in plain English
          </p>
          
          {/* Search icon float */}
          <div className="mt-8 animate-float delay-500">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
              <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion with Animations */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
              >
                <span className="font-medium text-[#2D3E50] group-hover:text-[#0A5C5C] transition-colors">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#0A5C5C] transition-all duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  } group-hover:scale-110`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions - Animated */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#0A5C5C] to-[#084848] p-8 rounded-xl shadow-lg animate-scaleIn hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <h3 className="text-xl font-bold text-white mb-3">Still get questions?</h3>
          <p className="text-white/90 mb-6">
            No wahala. Reach us directly and we go answer sharp sharp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0A5C5C] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Contact us
            </Link>
            <a
              href="tel:018889999"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#0A5C5C] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <PhoneIcon className="w-4 h-4" />
              Call us now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}