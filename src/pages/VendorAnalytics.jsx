import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  StarIcon,
  ChartBarIcon,
  EyeIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function VendorAnalytics() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
        .delay-400 { animation-delay:0.4s; }
      `}</style>

      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4 animate-fadeInUp">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Analytics</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-2xl font-bold text-[#2D3E50]">1,247</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <EyeIcon className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn delay-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Profile Clicks</p>
                <p className="text-2xl font-bold text-[#2D3E50]">342</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CursorArrowRaysIcon className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn delay-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <p className="text-2xl font-bold text-[#2D3E50]">24%</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <ChartBarIcon className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 5% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-scaleIn delay-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Rating</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-[#2D3E50]">4.8</p>
                  <div className="flex">
                    {[1,2,3,4,5].map(star => (
                      <StarIconSolid key={star} className="w-4 h-4 text-[#FFB347]" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 bg-[#FFB347] bg-opacity-20 rounded-lg flex items-center justify-center">
                <StarIcon className="w-5 h-5 text-[#FFB347]" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 animate-fadeInUp delay-400">
          <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Monthly Performance</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400">Analytics chart coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}