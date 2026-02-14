import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  XMarkIcon,
  DocumentTextIcon,
  PhotoIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export default function AdminDisputeReview() {
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [dispute, setDispute] = useState({
    id: id,
    vendor: "Prime Videography",
    client: "Mr & Mrs Adebayo",
    issue: "Service not delivered",
    description: "Vendor did not show up on the wedding day. No communication, no service provided.",
    date: "2026-02-13",
    status: "open",
    amount: 350000,
    evidence: [
      { type: 'image', url: '#', description: 'Screenshot of chat' },
      { type: 'image', url: '#', description: 'Bank transfer receipt' },
    ],
    messages: [
      { from: 'client', text: 'Vendor never showed up', time: '2026-02-13 10:30' },
      { from: 'vendor', text: 'I was there but client said different venue', time: '2026-02-13 11:45' },
    ]
  })

  const handleResolve = (decision) => {
    alert(`Dispute resolved: ${decision}`)
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Review Dispute #{id}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Dispute Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#2D3E50] mb-4">Dispute Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Vendor:</span>
                  <span className="font-medium">{dispute.vendor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Client:</span>
                  <span className="font-medium">{dispute.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount:</span>
                  <span className="font-medium text-[#0A5C5C]">₦{dispute.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{dispute.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">{dispute.status}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#2D3E50] mb-4">Issue Description</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{dispute.description}</p>
            </div>
          </div>
        </div>

        {/* Evidence */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold text-[#2D3E50] mb-4">Evidence Submitted</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dispute.evidence.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md">
                <PhotoIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-600">{item.description}</p>
                <button className="text-[#0A5C5C] text-xs mt-2 hover:underline">View</button>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold text-[#2D3E50] mb-4">Communication</h3>
          <div className="space-y-4">
            {dispute.messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'client' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[70%] p-3 rounded-lg ${
                  msg.from === 'client' ? 'bg-gray-100' : 'bg-[#0A5C5C] text-white'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-[#2D3E50] mb-4">Resolution</h3>
          <div className="flex gap-3">
            <button
              onClick={() => handleResolve('refund_client')}
              className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Refund Client
            </button>
            <button
              onClick={() => handleResolve('release_vendor')}
              className="flex-1 bg-[#0A5C5C] text-white py-3 rounded-lg hover:bg-[#084848]"
            >
              Release to Vendor
            </button>
            <button
              onClick={() => handleResolve('split')}
              className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600"
            >
              Split 50/50
            </button>
          </div>
          <div className="mt-4">
            <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Message Both Parties
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}