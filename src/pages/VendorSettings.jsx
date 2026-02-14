import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

export default function VendorSettings() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  
  const [form, setForm] = useState({
    businessName: "Ade's Photography",
    email: 'ade@photography.com',
    phone: '08012345678',
    address: 'Ikeja, Lagos',
    bankName: 'Access Bank',
    accountNumber: '0123456789',
    accountName: 'Ade Photography'
  })

  const [saved, setSaved] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { transform:translateX(-20px); opacity:0; } to { transform:translateX(0); opacity:1; } }
        @keyframes scaleIn { from { transform:scale(0.95); opacity:0; } to { transform:scale(1); opacity:1; } }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-slideIn { animation: slideIn 0.4s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .delay-100 { animation-delay:0.1s; } .delay-200 { animation-delay:0.2s; } .delay-300 { animation-delay:0.3s; }
      `}</style>

      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4 animate-fadeInUp">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Account Settings</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn">
          
          {saved && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg animate-fadeInUp">
              Settings saved successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="animate-slideIn delay-100">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <BuildingOfficeIcon className="w-4 h-4 inline mr-1" />
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={(e) => setForm({...form, businessName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <EnvelopeIcon className="w-4 h-4 inline mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <PhoneIcon className="w-4 h-4 inline mr-1" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPinIcon className="w-4 h-4 inline mr-1" />
                    Address
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({...form, address: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 animate-slideIn delay-200">
              <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Bank Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                  <select
                    value={form.bankName}
                    onChange={(e) => setForm({...form, bankName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  >
                    <option>Access Bank</option>
                    <option>GTBank</option>
                    <option>UBA</option>
                    <option>First Bank</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                  <input
                    type="text"
                    value={form.accountNumber}
                    onChange={(e) => setForm({...form, accountNumber: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Name</label>
                  <input
                    type="text"
                    value={form.accountName}
                    onChange={(e) => setForm({...form, accountName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0A5C5C] transition-all"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A5C5C] text-white py-3 rounded-lg font-medium hover:bg-[#084848] transition-all transform hover:scale-[1.02] active:scale-[0.98] animate-fadeInUp delay-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}