import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function AdminTransactions() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const transactions = [
    { id: 1, vendor: "Ade's Photography", client: "Mr & Mrs Adebayo", amount: 350000, date: "2026-02-13", status: "completed", reference: "TRX-001" },
    { id: 2, vendor: "Zoe's Decor", client: "Chioma E.", amount: 450000, date: "2026-02-12", status: "pending", reference: "TRX-002" },
    { id: 3, vendor: "Signature Makeup", client: "Oluwaseun A.", amount: 150000, date: "2026-02-11", status: "completed", reference: "TRX-003" },
    { id: 4, vendor: "Chuks Catering", client: "Tunde & Funke", amount: 550000, date: "2026-02-10", status: "failed", reference: "TRX-004" },
    { id: 5, vendor: "Biggie MC", client: "Emeka O.", amount: 250000, date: "2026-02-09", status: "completed", reference: "TRX-005" },
  ]

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-[#2D3E50]">All Transactions</h1>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Reference</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Vendor</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Client</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-mono">{t.reference}</td>
                  <td className="px-6 py-4">{t.vendor}</td>
                  <td className="px-6 py-4">{t.client}</td>
                  <td className="px-6 py-4 font-medium text-[#0A5C5C]">₦{t.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{t.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      t.status === 'completed' ? 'bg-green-100 text-green-700' :
                      t.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/admin/transactions/${t.id}`}
                      className="text-[#0A5C5C] hover:underline flex items-center gap-1"
                    >
                      <EyeIcon className="w-4 h-4" />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}