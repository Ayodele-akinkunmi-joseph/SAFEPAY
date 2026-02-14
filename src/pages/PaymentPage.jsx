import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ShieldCheckIcon, 
  BuildingLibraryIcon, 
  DevicePhoneMobileIcon,
  QrCodeIcon,
  CheckBadgeIcon,
  DocumentDuplicateIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function PaymentPage() {
  const { reference } = useParams()
  const navigate = useNavigate()
  const [transaction, setTransaction] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('bank')
  const [copied, setCopied] = useState('')
  const [processing, setProcessing] = useState(false)
  const [paid, setPaid] = useState(false)
  
  // Load transaction from localStorage
  useEffect(() => {
     window.scrollTo(0, 0)
    const data = localStorage.getItem(reference)
    if (data) {
      setTransaction(JSON.parse(data))
    } else {
      // Mock data for demo
      setTransaction({
        reference,
        vendorId: 'vendor_123',
        vendorName: "Ade's Photography",
        vendorEmail: 'ade@photography.com',
        amount: '350000',
        description: 'Wedding Photography - Full Day Coverage',
        clientName: 'Mr & Mrs Adebayo',
        status: 'pending',
        createdAt: new Date().toISOString()
      })
    }
  }, [reference])
  
  // Mock vendor data (would come from API)
  const vendor = {
    name: "Ade's Photography",
    verified: true,
    tpList: true,
    eventsCompleted: 24,
    rating: 4.8,
    memberSince: '2025'
  }
  
  // Mock virtual account details
  const virtualAccount = {
    bankName: 'Wema Bank',
    accountNumber: '8123456789',
    accountName: 'Safe-Pay / Ade Photography',
    amount: transaction?.amount,
    expiresIn: '30 minutes',
    reference: reference
  }
  
  // Mock USSD code
  const ussdCode = `*945*8123456789*${transaction?.amount || 0}#`
  
  // Mock QR code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${reference}`
  
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }
  
  const handleConfirmBankTransfer = () => {
    setProcessing(true)
    
    setTimeout(() => {
      const updatedTransaction = {
        ...transaction,
        status: 'paid',
        paidAt: new Date().toISOString(),
        paymentMethod: 'bank_transfer'
      }
      localStorage.setItem(reference, JSON.stringify(updatedTransaction))
      setPaid(true)
      
      setTimeout(() => {
        navigate(`/success/${reference}`)
      }, 2000)
    }, 1500)
  }
  
  const handleUSSDConfirm = () => {
    setProcessing(true)
    setTimeout(() => {
      const updatedTransaction = {
        ...transaction,
        status: 'paid',
        paidAt: new Date().toISOString(),
        paymentMethod: 'ussd'
      }
      localStorage.setItem(reference, JSON.stringify(updatedTransaction))
      setPaid(true)
      
      setTimeout(() => {
        navigate(`/success/${reference}`)
      }, 2000)
    }, 1500)
  }
  
  const handleQRConfirm = () => {
    setProcessing(true)
    setTimeout(() => {
      const updatedTransaction = {
        ...transaction,
        status: 'paid',
        paidAt: new Date().toISOString(),
        paymentMethod: 'qr'
      }
      localStorage.setItem(reference, JSON.stringify(updatedTransaction))
      setPaid(true)
      
      setTimeout(() => {
        navigate(`/success/${reference}`)
      }, 2000)
    }, 1500)
  }
  
  if (!transaction) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#0A5C5C] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-[#2D3E50]">Loading payment details...</p>
        </div>
      </div>
    )
  }
  
  if (paid) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#2D3E50] mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Your money is now held securely by Paystack.</p>
            <div className="animate-spin w-8 h-8 border-4 border-[#0A5C5C] border-t-transparent rounded-full mx-auto"></div>
            <p className="text-sm text-gray-500 mt-4">Redirecting to confirmation page...</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-[#FDF8F2] py-12">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Payment Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#E67A4C] border-opacity-20 overflow-hidden">
          
          {/* Vendor Header */}
          <div className="bg-gradient-to-r from-[#0A5C5C] to-[#084848] px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#0A5C5C]">
                    {transaction.vendorName?.charAt(0) || 'V'}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{transaction.vendorName}</h1>
                  <p className="text-white text-opacity-90 text-sm">{transaction.vendorEmail}</p>
                  
                  {/* TP List Badge */}
                  {vendor.tpList && (
                    <div className="flex items-center gap-2 mt-2">
                      <StarIconSolid className="w-4 h-4 text-[#FFB347]" />
                      <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
                        TP List Vendor • {vendor.eventsCompleted} events
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">Secured</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Details */}
          <div className="p-8">
            
            {/* Amount */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2">Amount to pay</p>
              <p className="text-5xl font-bold text-[#2D3E50]">
                ₦{parseInt(transaction.amount).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Reference: <span className="font-mono">{reference}</span>
              </p>
              {transaction.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {transaction.description}
                </p>
              )}
            </div>
            
            {/* Payment Methods - NO CARD! Only 3 options */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Select payment method:</h3>
              <div className="grid grid-cols-3 gap-3">
                
                {/* Bank Transfer */}
                <button
                  onClick={() => setPaymentMethod('bank')}
                  className={`border-2 rounded-xl p-4 text-center transition-all ${
                    paymentMethod === 'bank'
                      ? 'border-[#0A5C5C] bg-[#0A5C5C] bg-opacity-5'
                      : 'border-gray-200 hover:border-[#0A5C5C]'
                  }`}
                >
                  <BuildingLibraryIcon className={`w-6 h-6 mx-auto mb-1 ${
                    paymentMethod === 'bank' ? 'text-[#0A5C5C]' : 'text-gray-600'
                  }`} />
                  <span className={`text-xs ${
                    paymentMethod === 'bank' ? 'text-[#0A5C5C] font-medium' : 'text-gray-600'
                  }`}>Bank Transfer</span>
                  <span className="block text-[10px] text-green-600 mt-1">✓ Recommended</span>
                </button>
                
                {/* USSD */}
                <button
                  onClick={() => setPaymentMethod('ussd')}
                  className={`border-2 rounded-xl p-4 text-center transition-all ${
                    paymentMethod === 'ussd'
                      ? 'border-[#0A5C5C] bg-[#0A5C5C] bg-opacity-5'
                      : 'border-gray-200 hover:border-[#0A5C5C]'
                  }`}
                >
                  <DevicePhoneMobileIcon className={`w-6 h-6 mx-auto mb-1 ${
                    paymentMethod === 'ussd' ? 'text-[#0A5C5C]' : 'text-gray-600'
                  }`} />
                  <span className={`text-xs ${
                    paymentMethod === 'ussd' ? 'text-[#0A5C5C] font-medium' : 'text-gray-600'
                  }`}>USSD</span>
                  <span className="block text-[10px] text-gray-500 mt-1">No data needed</span>
                </button>
                
                {/* QR Code */}
                <button
                  onClick={() => setPaymentMethod('qr')}
                  className={`border-2 rounded-xl p-4 text-center transition-all ${
                    paymentMethod === 'qr'
                      ? 'border-[#0A5C5C] bg-[#0A5C5C] bg-opacity-5'
                      : 'border-gray-200 hover:border-[#0A5C5C]'
                  }`}
                >
                  <QrCodeIcon className={`w-6 h-6 mx-auto mb-1 ${
                    paymentMethod === 'qr' ? 'text-[#0A5C5C]' : 'text-gray-600'
                  }`} />
                  <span className={`text-xs ${
                    paymentMethod === 'qr' ? 'text-[#0A5C5C] font-medium' : 'text-gray-600'
                  }`}>QR Code</span>
                  <span className="block text-[10px] text-gray-500 mt-1">Scan & pay</span>
                </button>
              </div>
            </div>
            
            {/* BANK TRANSFER - SHOW ACCOUNT DETAILS */}
            {paymentMethod === 'bank' && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                  <BuildingLibraryIcon className="w-5 h-5 text-[#0A5C5C]" />
                  Transfer to this account
                </h3>
                
                <div className="space-y-4">
                  {/* Bank Name */}
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Bank</p>
                      <p className="font-medium text-[#2D3E50]">{virtualAccount.bankName}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(virtualAccount.bankName, 'bank')}
                      className="text-gray-400 hover:text-[#0A5C5C] p-2"
                    >
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Account Number */}
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Account Number</p>
                      <p className="font-bold text-lg text-[#2D3E50]">{virtualAccount.accountNumber}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(virtualAccount.accountNumber, 'number')}
                      className="text-gray-400 hover:text-[#0A5C5C] p-2"
                    >
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Account Name */}
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Account Name</p>
                      <p className="font-medium text-[#2D3E50]">{virtualAccount.accountName}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(virtualAccount.accountName, 'name')}
                      className="text-gray-400 hover:text-[#0A5C5C] p-2"
                    >
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Amount */}
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Amount</p>
                      <p className="font-bold text-[#0A5C5C]">₦{parseInt(transaction.amount).toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(transaction.amount, 'amount')}
                      className="text-gray-400 hover:text-[#0A5C5C] p-2"
                    >
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Copy All Button */}
                <button
                  onClick={() => {
                    const allDetails = `Bank: ${virtualAccount.bankName}\nAccount Number: ${virtualAccount.accountNumber}\nAccount Name: ${virtualAccount.accountName}\nAmount: ₦${transaction.amount}`
                    handleCopy(allDetails, 'all')
                  }}
                  className="w-full mt-4 bg-[#0A5C5C] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#084848] transition-all"
                >
                  Copy All Details
                </button>
                
                {copied && (
                  <p className="text-sm text-green-600 mt-3 text-center">
                    ✓ {copied === 'all' ? 'All details copied!' : `${copied} copied!`}
                  </p>
                )}
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 flex items-start gap-2">
                    <span>⏱️</span>
                    <span>This virtual account expires in {virtualAccount.expiresIn}. Transfer the exact amount shown for automatic confirmation.</span>
                  </p>
                </div>
                
                {/* I HAVE TRANSFERRED BUTTON */}
                <button
                  onClick={handleConfirmBankTransfer}
                  disabled={processing}
                  className="w-full mt-6 bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400 transition-all shadow-lg"
                >
                  {processing ? (
                    <span className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="w-5 h-5 animate-spin" />
                      Confirming Payment...
                    </span>
                  ) : (
                    'I Have Transferred'
                  )}
                </button>
                
                <p className="text-xs text-gray-400 text-center mt-4">
                  Payment will be confirmed automatically once we receive the transfer.
                </p>
              </div>
            )}
            
            {/* USSD - SHOW USSD CODE */}
            {paymentMethod === 'ussd' && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                  <DevicePhoneMobileIcon className="w-5 h-5 text-[#0A5C5C]" />
                  Pay with USSD
                </h3>
                
                <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                  <p className="text-sm text-gray-600 mb-3">Dial this code on your phone:</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-2xl font-bold text-[#2D3E50] font-mono bg-gray-100 px-4 py-2 rounded-lg">
                      {ussdCode}
                    </p>
                    <button
                      onClick={() => handleCopy(ussdCode, 'ussd')}
                      className="p-2 text-gray-400 hover:text-[#0A5C5C]"
                    >
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                  </div>
                  {copied === 'ussd' && (
                    <p className="text-sm text-green-600 mt-2">✓ USSD code copied!</p>
                  )}
                </div>
                
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <span className="text-[#0A5C5C] font-bold">1.</span>
                    Dial the code from your registered mobile number
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#0A5C5C] font-bold">2.</span>
                    Enter your PIN when prompted
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#0A5C5C] font-bold">3.</span>
                    Confirm the payment
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#0A5C5C] font-bold">4.</span>
                    You'll receive SMS confirmation
                  </p>
                </div>
                
                <button
                  onClick={handleUSSDConfirm}
                  disabled={processing}
                  className="w-full mt-6 bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all"
                >
                  {processing ? (
                    <span className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="w-5 h-5 animate-spin" />
                      Confirming...
                    </span>
                  ) : (
                    'I Have Completed USSD Payment'
                  )}
                </button>
              </div>
            )}
            
            {/* QR CODE - SHOW QR */}
            {paymentMethod === 'qr' && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-[#2D3E50] mb-4 flex items-center gap-2">
                  <QrCodeIcon className="w-5 h-5 text-[#0A5C5C]" />
                  Scan QR Code
                </h3>
                
                <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                  <div className="w-48 h-48 mx-auto bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                    <img src={qrCodeUrl} alt="QR Code" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Scan with your banking app to pay
                  </p>
                </div>
                
                <button
                  onClick={handleQRConfirm}
                  disabled={processing}
                  className="w-full mt-6 bg-[#0A5C5C] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#084848] disabled:bg-gray-400 transition-all"
                >
                  {processing ? (
                    <span className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="w-5 h-5 animate-spin" />
                      Confirming...
                    </span>
                  ) : (
                    'I Have Scanned and Paid'
                  )}
                </button>
              </div>
            )}
            
            {/* Security Message */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
              <ShieldCheckIcon className="w-4 h-4 text-green-600" />
              <span>Funds held by Paystack (CBN licensed). Safe-Pay never touches your money.</span>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-[#2D3E50] mb-4">After payment:</h3>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="w-10 h-10 bg-[#0A5C5C] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#0A5C5C] font-bold">1</span>
              </div>
              <p className="text-sm text-gray-600">Vendor does the job</p>
            </div>
            <div className="text-[#E67A4C] text-xl">→</div>
            <div className="flex-1 text-center">
              <div className="w-10 h-10 bg-[#E67A4C] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#E67A4C] font-bold">2</span>
              </div>
              <p className="text-sm text-gray-600">You confirm completion</p>
            </div>
            <div className="text-[#E67A4C] text-xl">→</div>
            <div className="flex-1 text-center">
              <div className="w-10 h-10 bg-[#FFB347] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#8B691B] font-bold">3</span>
              </div>
              <p className="text-sm text-gray-600">Vendor paid in 24hrs</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            24-hour cooling period protects both parties. If no confirmation in 7 days, auto-release.
          </p>
        </div>
      </div>
    </div>
  )
}