import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HowItWorks from './pages/HowItWorks'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import PricingPage from './pages/PricingPage'
import TPListPage from './pages/TPListPage'
import VendorSignup from './pages/VendorSignup'
import VendorLogin from './pages/VendorLogin'
import VendorForgotPassword from './pages/VendorForgotPassword'
import VendorDashboard from './pages/VendorDashboard'
import VendorDirectory from './pages/VendorDirectory'
import VendorProfile from './pages/VendorProfile'
import VendorUpgrade from './pages/VendorUpgrade'
import VendorDocuments from './pages/VendorDocuments'
import PaymentPage from './pages/PaymentPage'
import PaymentSuccess from './pages/PaymentSuccess'
import ChatPage from './pages/ChatPage'
import BookingPage from './pages/BookingPage'
import AdminDashboard from './pages/AdminDashboard'

import VendorPortfolio from './pages/VendorPortfolio'
import VendorSettings from './pages/VendorSettings'
import VendorAnalytics from './pages/VendorAnalytics'
import VendorCalendar from './pages/VendorCalendar'
import ManageSubscription from './pages/ManageSubscription'
import VendorWithdraw from './pages/VendorWithdraw'
import VendorTransactions from './pages/VendorTransactions'
import Notifications from './pages/Notifications'


import AdminNotifications from './pages/AdminNotifications'
import AdminPendingApprovals from './pages/AdminPendingApprovals'
import AdminWithdrawals from './pages/AdminWithdrawals'
import AdminReports from './pages/AdminReports'
import AdminManageVendor from './pages/AdminManageVendor'
import AdminTransactions from './pages/AdminTransactions'
import AdminDisputeReview from './pages/AdminDisputeReview'
import AdminUsers from './pages/AdminUsers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/vendors/pending" element={<AdminPendingApprovals />} />
        <Route path="/admin/withdrawals" element={<AdminWithdrawals />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/vendors/manage/:id" element={<AdminManageVendor />} />
        <Route path="/admin/transactions" element={<AdminTransactions />} />
        <Route path="/admin/disputes/:id" element={<AdminDisputeReview />} />
        <Route path="/admin/users" element={<AdminUsers />} />

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
        
        {/* Vendor Routes - Authentication Required */}
        <Route path="/vendor/signup" element={<VendorSignup />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/forgot-password" element={<VendorForgotPassword />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/upgrade" element={<VendorUpgrade />} />
        <Route path="/vendor/documents" element={<VendorDocuments />} />
        
        {/* NEW Vendor Management Routes */}
        <Route path="/vendor/portfolio" element={<VendorPortfolio />} />
        <Route path="/vendor/settings" element={<VendorSettings />} />
        <Route path="/vendor/analytics" element={<VendorAnalytics />} />
        <Route path="/vendor/calendar" element={<VendorCalendar />} />
        <Route path="/vendor/tp-list/manage" element={<ManageSubscription />} />
        <Route path="/vendor/withdraw" element={<VendorWithdraw />} />
        <Route path="/vendor/transactions" element={<VendorTransactions />} />
        <Route path="/vendor/notifications" element={<Notifications />} />
        
        {/* Communication */}
        <Route path="/chat/:reference" element={<ChatPage />} />
        
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App