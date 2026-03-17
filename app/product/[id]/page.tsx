"use client";

import { useState, use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ChevronRight, Check, Truck, Shield, Phone } from "lucide-react";

const products: { [key: string]: any } = {
  "1": {
    id: 1,
    name: "YTO LX904 Трактор",
    category: "tractor",
    categoryName: "Трактор",
    brand: "YTO",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    ],
    description: "YTO LX904 трактор нь хүчирхэг, найдвартай ажиллагаатай, газар тариалангийн бүх төрлийн ажилд тохиромжтой. Хятадын YTO брэндийн шилдэг загвар бөгөөд Монгол орны нөхцөлд туршигдсан.",
    specs: [
      { label: "Хөдөлгүүр", value: "YTO 4-цилиндр дизель" },
      { label: "Чадал", value: "90 л.с (66 кВт)" },
      { label: "Хурдны хайрцаг", value: "8F+4R синхрон" },
      { label: "Түлшний багтаамж", value: "120 л" },
      { label: "Жин", value: "3,850 кг" },
      { label: "Хэмжээ (У×Ө×Д)", value: "4,200×1,950×2,750 мм" },
      { label: "Дугуй (урд)", value: "9.5-24" },
      { label: "Дугуй (хойд)", value: "14.9-30" },
    ],
    features: ["Хүчирхэг дизель хөдөлгүүр", "Бүх төрлийн газарт тохиромжтой", "Түлш хэмнэлттэй", "Засвар үйлчилгээ хялбар"],
  },
  "2": {
    id: 2,
    name: "John Deere 5075E Трактор",
    category: "tractor",
    categoryName: "Трактор",
    brand: "John Deere",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    ],
    description: "John Deere 5075E трактор нь дэлхийд алдартай John Deere брэндийн найдвартай, хэмнэлттэй загвар юм. Жижиг болон дунд оврын фермерүүдэд тохиромжтой.",
    specs: [
      { label: "Хөдөлгүүр", value: "John Deere PowerTech" },
      { label: "Чадал", value: "75 л.с (56 кВт)" },
      { label: "Хурдны хайрцаг", value: "9F+3R" },
      { label: "Түлшний багтаамж", value: "90 л" },
      { label: "Жин", value: "2,950 кг" },
    ],
    features: ["Дэлхийд алдартай брэнд", "Хэмнэлттэй", "Жижиг фермерүүдэд тохиромжтой", "Урт хугацааны баталгаа"],
  },
};

const defaultProduct = {
  id: 1,
  name: "Бүтээгдэхүүн",
  category: "general",
  categoryName: "Техник",
  brand: "Баясаа Танг",
  images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"],
  description: "Газар тариалангийн техник хэрэгсэл",
  specs: [{ label: "Мэдээлэл", value: "Удахгүй нэмэгдэнэ" }],
  features: ["Чанартай", "Найдвартай"],
};

const relatedProducts = [
  { id: 3, name: "Massey Ferguson 4708", categoryName: "Трактор", brand: "Massey Ferguson", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop" },
  { id: 4, name: "Dongfeng DF-404", categoryName: "Трактор", brand: "Dongfeng", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop" },
  { id: 5, name: "Zoomlion RH1104", categoryName: "Трактор", brand: "Zoomlion", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop" },
  { id: 6, name: "Комбайн хураагч CF805", categoryName: "Ургац хураагч", brand: "FMWorld", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop" },
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products[id] || defaultProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.name}
      />

      {/* Breadcrumb */}
      <div className="pt-[70px] md:pt-[100px] bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">Нүүр</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/products" className="text-gray-500 hover:text-green-600">Бүтээгдэхүүн</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Image Section - 3 cols */}
              <div className="lg:col-span-3 p-6 md:p-8 bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-inner mb-4">
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {product.brand}
                    </span>
                  </div>
                </div>
                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {product.images.map((img: string, idx: number) => (
                      <button 
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === idx ? "border-green-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Section - 2 cols */}
              <div className="lg:col-span-2 p-6 md:p-8 flex flex-col">
                <div className="mb-2">
                  <span className="text-green-600 text-sm font-medium">{product.categoryName}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(product.features || []).map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Хүргэлт</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Баталгаат</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">24/7 Дэмжлэг</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all hover:shadow-lg"
                  >
                    Үнийн санал авах
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Бид 2 цагийн дотор эргэн холбогдоно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Техникийн үзүүлэлт</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specs.map((spec: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{spec.label}</span>
                  <span className="text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Төстэй бүтээгдэхүүн</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <Link href={`/product/${item.id}`} key={item.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-green-600 font-medium mb-1">{item.brand}</p>
                    <p className="font-semibold text-gray-900 text-sm line-clamp-2">{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
