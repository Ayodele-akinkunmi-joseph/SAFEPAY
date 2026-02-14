import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  BellIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  UserPlusIcon,
  ShieldExclamationIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

export default function AdminNotifications() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'vendor',
      title: 'New Vendor Registration',
      message: 'Chuks Catering applied to join the platform',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'dispute',
      title: 'New Dispute Opened',
      message: 'Dispute #123 between Prime Videography and Mr & Mrs Adebayo',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'withdrawal',
      title: 'Withdrawal Request',
      message: "Ade's Photography requested withdrawal of ₦245,000",
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'system',
      title: 'TP List Subscription',
      message: 'Zoe\'s Decor upgraded to TP List',
      time: '2 days ago',
      read: true
    }
  ])

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const getIcon = (type) => {
    switch(type) {
      case 'vendor': return <UserPlusIcon className="w-5 h-5 text-blue-600" />
      case 'dispute': return <ShieldExclamationIcon className="w-5 h-5 text-red-600" />
      case 'withdrawal': return <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
      default: return <BellIcon className="w-5 h-5 text-[#FFB347]" />
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-[#0A5C5C]">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-[#2D3E50]">Admin Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-[#0A5C5C] text-white text-xs px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <BellIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${!n.read ? 'bg-blue-50' : ''}`}
                  onClick={() => markAsRead(n.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(n.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`font-medium ${!n.read ? 'text-[#0A5C5C]' : 'text-[#2D3E50]'}`}>
                            {n.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                          <p className="text-xs text-gray-400 mt-2">{n.time}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteNotification(n.id)
                          }}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}