import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export default function VendorCalendar() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [currentMonth, setCurrentMonth] = useState('March 2026')

  const bookings = [
    { date: 15, client: 'Mr & Mrs Adebayo', event: 'Wedding', status: 'confirmed' },
    { date: 22, client: 'Chioma E.', event: 'Birthday', status: 'pending' },
    { date: 28, client: 'Oluwaseun A.', event: 'Engagement', status: 'confirmed' },
  ]

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn { from { transform:scale(0.95); opacity:0; } to { transform:scale(1); opacity:1; } }
        .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
        .delay-100 { animation-delay:0.1s; } .delay-200 { animation-delay:0.2s; }
      `}</style>

      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4 animate-fadeInUp">
          <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-[#2D3E50]">Booking Calendar</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn">
          
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#2D3E50]">{currentMonth}</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-8">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            {[...Array(31)].map((_, i) => {
              const dayBookings = bookings.filter(b => b.date === i + 1)
              return (
                <div 
                  key={i} 
                  className="aspect-square border border-gray-100 rounded-lg p-2 hover:border-[#0A5C5C] transition-all hover:shadow-md group"
                >
                  <span className="text-sm">{i + 1}</span>
                  {dayBookings.map((b, idx) => (
                    <div 
                      key={idx} 
                      className={`text-[10px] mt-1 p-1 rounded truncate transition-all group-hover:scale-105 ${
                        b.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {b.client.split(' ')[0]}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>

          {/* Upcoming Bookings */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-semibold text-[#2D3E50] mb-4">Upcoming Bookings</h3>
            <div className="space-y-3">
              {bookings.map((booking, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all hover:scale-[1.01] animate-scaleIn"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div>
                    <p className="font-medium text-[#2D3E50]">{booking.client}</p>
                    <p className="text-xs text-gray-500">{booking.event}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">March {booking.date}, 2026</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}