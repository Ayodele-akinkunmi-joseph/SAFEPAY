import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { 
  PaperAirplaneIcon, 
  PhotoIcon,
  ShieldCheckIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function ChatPage() {
  const { reference } = useParams()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [transaction, setTransaction] = useState(null)
  const messagesEndRef = useRef(null)
  
  // Mock data - replace with Supabase realtime
  useEffect(() => {
     window.scrollTo(0, 0)
    // Load transaction
    const data = localStorage.getItem(reference)
    if (data) {
      setTransaction(JSON.parse(data))
    }
    
    // Mock messages
    setMessages([
      {
        id: 1,
        sender: 'vendor',
        text: 'Good morning! I will arrive at the venue by 8am.',
        time: '09:23 AM',
        date: '2026-02-12'
      },
      {
        id: 2,
        sender: 'client',
        text: 'Okay, thank you. I will be there.',
        time: '09:45 AM',
        date: '2026-02-12'
      },
      {
        id: 3,
        sender: 'vendor',
        text: '📸 I don reach venue. Work don start.',
        image: 'https://via.placeholder.com/300',
        time: '08:15 AM',
        date: '2026-02-13'
      }
    ])
  }, [reference])
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    
    const message = {
      id: messages.length + 1,
      sender: 'client', // or 'vendor' based on who is logged in
      text: newMessage,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toISOString().split('T')[0]
    }
    
    setMessages([...messages, message])
    setNewMessage('')
  }
  
  if (!transaction) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#0A5C5C] border-t-transparent rounded-full"></div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-[#FDF8F2] flex flex-col">
      
      {/* Chat Header - Shows transaction info, phone numbers HIDDEN */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A5C5C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">
                  {transaction.vendorName?.charAt(0) || 'V'}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-[#2D3E50]">{transaction.vendorName}</h2>
                  <span className="bg-[#FFB347] text-[#2D3E50] text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                    <StarIconSolid className="w-3 h-3" />
                    TP List
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Ref: {reference}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <ShieldCheckIcon className="w-3 h-3 text-green-600" />
                    Phone numbers hidden
                  </span>
                </div>
              </div>
            </div>
            
            {/* Transaction Status */}
            <div className="bg-green-50 px-3 py-1.5 rounded-full">
              <span className="text-xs font-medium text-green-700">
                ₦{parseInt(transaction.amount).toLocaleString()} • Paid
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-6 overflow-y-auto">
        <div className="space-y-6">
          
          {/* Date Separator */}
          <div className="text-center">
            <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
              Today
            </span>
          </div>
          
          {/* Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${message.sender === 'client' ? 'order-2' : 'order-1'}`}>
                
                {/* Message Bubble */}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'client'
                      ? 'bg-[#0A5C5C] text-white'
                      : 'bg-white border border-gray-200 text-[#2D3E50]'
                  }`}
                >
                  {/* Image attachment */}
                  {message.image && (
                    <div className="mb-2 rounded-lg overflow-hidden">
                      <img src={message.image} alt="Vendor work" className="w-full h-auto" />
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <CheckBadgeIcon className="w-3 h-3 text-green-600" />
                        Watermarked with transaction ID
                      </p>
                    </div>
                  )}
                  
                  {/* Text message */}
                  <p className="text-sm">{message.text}</p>
                  
                  {/* Time */}
                  <p className={`text-xs mt-1 ${message.sender === 'client' ? 'text-white/70' : 'text-gray-400'}`}>
                    {message.time}
                  </p>
                </div>
                
                {/* Sender name (only for vendor) */}
                {message.sender === 'vendor' && (
                  <p className="text-xs text-gray-500 mt-1 ml-2">{transaction.vendorName}</p>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message Input - NO PHONE NUMBERS ALLOWED */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            
            {/* Photo Upload Button */}
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-[#0A5C5C] rounded-full hover:bg-gray-100"
            >
              <PhotoIcon className="w-6 h-6" />
            </button>
            
            {/* Message Input - Block phone numbers */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-5 py-3 bg-gray-100 border-0 rounded-full focus:ring-2 focus:ring-[#0A5C5C] focus:bg-white transition-all"
                onKeyDown={(e) => {
                  // Block phone numbers
                  if (e.key.match(/[0-9]/) && newMessage.length > 0) {
                    // Allow numbers in words but detect if it looks like phone
                    const potentialNumber = newMessage + e.key
                    if (potentialNumber.replace(/\D/g, '').length >= 10) {
                      e.preventDefault()
                      alert('Phone numbers cannot be shared in chat. Please use Safe-Pay messaging only.')
                    }
                  }
                }}
              />
              
              {/* Warning for phone numbers */}
              {newMessage.match(/\d{10,}/) && (
                <p className="absolute -top-6 left-0 text-xs text-red-600">
                  ⚠️ Phone numbers not allowed
                </p>
              )}
            </div>
            
            {/* Send Button */}
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-3 bg-[#0A5C5C] text-white rounded-full hover:bg-[#084848] disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
            </button>
          </form>
          
          {/* Security Notice */}
          <p className="text-xs text-gray-400 text-center mt-3">
            🔒 End-to-end encrypted. All messages saved as evidence for disputes. 
            <span className="text-[#0A5C5C] font-medium"> No phone numbers allowed.</span>
          </p>
        </div>
      </div>
    </div>
  )
}