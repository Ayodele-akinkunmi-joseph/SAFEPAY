import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  PhotoIcon,
  ArrowLeftIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

export default function VendorPortfolio() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552', title: 'Wedding 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', title: 'Wedding 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', title: 'Event 1' },
    { id: 4, url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac0', title: 'Portrait' },
  ])

  const handleDelete = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id))
  }

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
          <h1 className="text-xl font-bold text-[#2D3E50]">Portfolio Photos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 animate-scaleIn">
          
          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center hover:border-[#0A5C5C] transition-colors group">
            <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-3 group-hover:text-[#0A5C5C] transition-colors" />
            <p className="text-gray-600 mb-2">Drag and drop or click to upload</p>
            <p className="text-xs text-gray-400 mb-4">JPG, PNG up to 10MB</p>
            <button className="bg-[#0A5C5C] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#084848] transition-colors">
              <PlusIcon className="w-4 h-4 inline mr-1" />
              Add Photos
            </button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="relative group animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={photo.url} alt={photo.title} className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform" />
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}