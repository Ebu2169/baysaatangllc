"use client";

import { useState } from "react";
import { X, Mail, Phone, Globe } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function QuoteModal({ isOpen, onClose, productName }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Таны хүсэлт амжилттай илгээгдлээ!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Info */}
          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Үнийн санал авах</h2>
            <p className="text-gray-600 mb-8">
              Таны бөглөсөн мэдээллийн дагуу манай борлуулалт хариуцсан ажилтан маань 2 цагийн дотор эргүүлэн холбогдох болно. Танд амжилт хүсье.
            </p>

            {/* Product being requested */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
              <p className="text-sm text-green-700 font-medium">Сонгосон бүтээгдэхүүн:</p>
              <p className="text-green-800 font-bold">{productName}</p>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Худалдааны зөвлөхтэй холбогдох</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>Baysaa.tang.company@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+976 91912205</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+976 1754896652 (БНХАУ)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-gray-50 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Байгууллагын нэр"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Овог, нэр *"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Имэйл хаяг"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Холбогдох утас *"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Нэмэлт шаардлагатай хүсэлт"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                ХҮСЭЛТ ИЛГЭЭХ
              </button>
              <p className="text-xs text-gray-500 text-center">
                Бид таны илгээсэн мэдээллийг бусад зориулалтаар ашиглахгүй, мөн гуравдагч этгээдэд хуваалцахгүй болно.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
