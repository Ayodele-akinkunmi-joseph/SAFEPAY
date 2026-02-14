import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HowItWorks from './pages/HowItWorks'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import PricingPage from './pages/PricingPage'
import TPListPage from './pages/TPListPage'
import VendorSignup from './pages/VendorSignup'
import VendorLogin from './pages/VendorLogin'
import VendorDashboard from './pages/VendorDashboard'
import VendorDirectory from './pages/VendorDirectory'
import VendorProfile from './pages/VendorProfile'
import PaymentPage from './pages/PaymentPage'
import PaymentSuccess from './pages/PaymentSuccess'
import ChatPage from './pages/ChatPage'
import BookingPage from './pages/BookingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/vendor/tp-list" element={<TPListPage />} />
        
        {/* Client Routes */}
        <Route path="/vendors" element={<VendorDirectory />} />
        <Route path="/vendor/:id" element={<VendorProfile />} />
        <Route path="/book/:vendorId" element={<BookingPage />} />
        <Route path="/pay/:reference" element={<PaymentPage />} />
        <Route path="/success/:reference" element={<PaymentSuccess />} />
        
        {/* Vendor Routes */}
        <Route path="/vendor/signup" element={<VendorSignup />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        
        {/* Communication */}
        <Route path="/chat/:reference" element={<ChatPage />} />
        
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App