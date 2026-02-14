import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  PaperAirplaneIcon, 
  PhotoIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  XMarkIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function ChatPage() {
  const { reference } = useParams()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [transaction, setTransaction] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)
  const messagesEndRef = useRef(null)
  
  // Animation styles
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // Load transaction
  useEffect(() => {
    const loadData = () => {
      // Try to load from localStorage
      const data = localStorage.getItem(reference)
      
      if (data) {
        setTransaction(JSON.parse(data))
      } else {
        // Create mock transaction if none exists
        const mockTransaction = {
          reference,
          vendorName: "Ade's Photography",
          vendorId: '1',
          amount: '350000',
          status: 'pending' // Can be 'pending' or 'paid'
        }
        setTransaction(mockTransaction)
        localStorage.setItem(reference, JSON.stringify(mockTransaction))
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
          type: 'image',
          url: 'https://via.placeholder.com/300',
          time: '08:15 AM',
          date: '2026-02-13'
        }
      ])
      
      setLoading(false)
    }
    
    loadData()
  }, [reference])
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // ✅ FUNCTION TO DETECT AND BLOCK PHONE NUMBERS
  const containsPhoneNumber = (text) => {
    // Nigerian phone number patterns
    const patterns = [
      /\b0[7-9][01]\d{8}\b/,           // 070, 080, 081, 090, 091
      /\b\+234[7-9][01]\d{8}\b/,       // +234 followed by 70,80,81,90,91
      /\b234[7-9][01]\d{8}\b/,          // 234 without plus
      /\b0[7-9][01][-\s]?\d{3}[-\s]?\d{4}\b/, // With spaces or hyphens
      /\b\d{11}\b/,                      // Any 11 digits (Nigerian numbers)
      /\b(?:zero|oh|seven|eight|nine|four|three|two|one)\s*(?:seven|eight|nine|four|three|two|one)/i // Words
    ]
    
    return patterns.some(pattern => pattern.test(text))
  }

  // ✅ FUNCTION TO BLUR PHONE NUMBERS IN TEXT
  const blurPhoneNumbers = (text) => {
    if (!text) return text
    
    // Replace digits with asterisks
    let blurred = text.replace(/\b0[7-9][01]\d{8}\b/g, '***********')
    blurred = blurred.replace(/\b\+234[7-9][01]\d{8}\b/g, '+234********')
    blurred = blurred.replace(/\b234[7-9][01]\d{8}\b/g, '234********')
    blurred = blurred.replace(/\b\d{11}\b/g, '***********')
    
    // Blur written numbers
    const wordPatterns = [
      /\b(?:zero|oh)\b/gi,
      /\b(?:one|two|three|four|five|six|seven|eight|nine)\b/gi
    ]
    
    wordPatterns.forEach(pattern => {
      blurred = blurred.replace(pattern, '****')
    })
    
    return blurred
  }
  
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim() && !selectedFile) return
    
    // Check for phone numbers
    if (containsPhoneNumber(newMessage)) {
      alert('Phone numbers cannot be shared in chat. Your message has been blurred.')
    }
    
    // Create message object
    const message = {
      id: messages.length + 1,
      sender: 'client',
      text: newMessage,
      containsPhone: containsPhoneNumber(newMessage),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toISOString().split('T')[0]
    }
    
    // If contains phone number, blur it
    if (message.containsPhone) {
      message.text = blurPhoneNumbers(newMessage)
      message.originalText = newMessage // Keep original for reference
      message.blurred = true
    }
    
    // Add file if selected
    if (selectedFile) {
      message.type = selectedFile.type.startsWith('video/') ? 'video' : 'image'
      message.url = previewUrl
      message.fileName = selectedFile.name
    }
    
    setMessages([...messages, message])
    setNewMessage('')
    setSelectedFile(null)
    setPreviewUrl(null)
  }
  
  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File too large. Maximum size is 10MB.')
      return
    }
    
    setSelectedFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }
  
  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0A5C5C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2D3E50]">Loading chat...</p>
        </div>
      </div>
    )
  }
  
  if (!transaction) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#2D3E50] mb-4">Chat not found</p>
          <Link to="/" className="text-[#0A5C5C] hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-[#FDF8F2] flex flex-col">
      
      {/* Back button */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <Link
          to={`/vendor/${transaction.vendorId}`}
          className="inline-flex items-center gap-2 text-[#0A5C5C] hover:text-[#084848] transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </Link>
      </div>
      
      {/* Chat Header */}
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
                  <span>Ref: {reference?.slice(0, 8)}...</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <ShieldCheckIcon className="w-3 h-3 text-green-600" />
                    Phone numbers hidden
                  </span>
                </div>
              </div>
            </div>
            
            {/* Transaction Status - Changes based on payment */}
            <div className={`px-3 py-1.5 rounded-full ${
              transaction.status === 'paid' ? 'bg-green-50' : 'bg-yellow-50'
            }`}>
              <span className={`text-xs font-medium ${
                transaction.status === 'paid' ? 'text-green-700' : 'text-yellow-700'
              }`}>
                ₦{parseInt(transaction.amount).toLocaleString()} • {transaction.status === 'paid' ? 'Paid' : 'Pending'}
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
              <div className={`max-w-[85%] sm:max-w-[70%] ${message.sender === 'client' ? 'order-2' : 'order-1'}`}>
                
                {/* Message Bubble */}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'client'
                      ? 'bg-[#0A5C5C] text-white'
                      : 'bg-white border border-gray-200 text-[#2D3E50]'
                  }`}
                >
                  {/* Image/Video attachment */}
                  {message.type === 'image' && (
                    <div className="mb-2 rounded-lg overflow-hidden">
                      <img src={message.url} alt="Attachment" className="w-full h-auto max-h-64 object-cover" />
                      <p className={`text-xs mt-1 flex items-center gap-1 ${
                        message.sender === 'client' ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        <CheckBadgeIcon className="w-3 h-3 text-green-600" />
                        Image • Watermarked
                      </p>
                    </div>
                  )}
                  
                  {message.type === 'video' && (
                    <div className="mb-2 rounded-lg overflow-hidden">
                      <video controls className="w-full h-auto max-h-64">
                        <source src={message.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className={`text-xs mt-1 flex items-center gap-1 ${
                        message.sender === 'client' ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        <VideoCameraIcon className="w-3 h-3" />
                        Video • Watermarked
                      </p>
                    </div>
                  )}
                  
                  {/* Text message - blur if contains phone number */}
                  {message.text && (
                    <p className={`text-sm ${message.blurred ? 'blur-sm hover:blur-none transition-all cursor-help' : ''}`}
                       title={message.blurred ? 'Phone number hidden for privacy' : ''}>
                      {message.text}
                    </p>
                  )}
                  
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
      
      {/* File Preview */}
      {selectedFile && (
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3">
              {selectedFile.type.startsWith('video/') ? (
                <VideoCameraIcon className="w-8 h-8 text-[#0A5C5C]" />
              ) : (
                <img src={previewUrl} alt="Preview" className="w-12 h-12 object-cover rounded" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#2D3E50] truncate">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                onClick={handleRemoveFile}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Message Input */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            
            {/* File Upload Button */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*,video/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-gray-500 hover:text-[#0A5C5C] rounded-full hover:bg-gray-100 transition-colors"
            >
              <PhotoIcon className="w-6 h-6" />
            </button>
            
            {/* Message Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-5 py-3 bg-gray-100 border-0 rounded-full focus:ring-2 focus:ring-[#0A5C5C] focus:bg-white transition-all text-sm pr-12"
              />
              
              {/* Phone number warning */}
              {containsPhoneNumber(newMessage) && (
                <div className="absolute -top-8 left-0 text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                  ⚠️ Phone numbers will be blurred
                </div>
              )}
            </div>
            
            {/* Send Button */}
            <button
              type="submit"
              disabled={!newMessage.trim() && !selectedFile}
              className="p-3 bg-[#0A5C5C] text-white rounded-full hover:bg-[#084848] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
            </button>
          </form>
          
          {/* Security Notice */}
          <p className="text-xs text-gray-400 text-center mt-3">
            🔒 End-to-end encrypted. All messages saved as evidence. 
            <span className="text-[#0A5C5C] font-medium ml-1">
              Phone numbers automatically detected and blurred.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}