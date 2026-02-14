import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  DocumentArrowDownIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline'

export default function AdminReports() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [dateRange, setDateRange] = useState('month')

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Reports</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Date Range Selector */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="bg-[#0A5C5C] text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <DocumentArrowDownIcon className="w-4 h-4" />
              Download Report
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-2xl font-bold text-[#2D3E50]">₦1.2M</p>
              </div>
              <CurrencyDollarIcon className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 15% from last {dateRange}</p>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">New Vendors</p>
                <p className="text-2xl font-bold text-[#2D3E50]">24</p>
              </div>
              <BuildingStorefrontIcon className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 8% from last {dateRange}</p>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Transactions</p>
                <p className="text-2xl font-bold text-[#2D3E50]">342</p>
              </div>
              <ChartBarIcon className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">↑ 12% from last {dateRange}</p>
          </div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
            <p className="text-gray-400">Chart will be displayed here</p>
          </div>
        </div>

        {/* Top Vendors */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-[#2D3E50] mb-4">Top Performing Vendors</h2>
          <div className="space-y-3">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-[#2D3E50]">Ade's Photography</p>
                  <p className="text-xs text-gray-500">24 bookings • ₦3.2M earned</p>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">#{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}