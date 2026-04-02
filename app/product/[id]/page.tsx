"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ChevronRight, Check, Truck, Shield, Phone } from "lucide-react";
import { allProducts, getProductById } from "@/data/products";
import type { ProductCategory } from "@/data/types";

const categoryLabels: Record<ProductCategory, string> = {
  tractor: "Трактор",
  harvester: "Ургац хураалтын техник",
  seeder: "Үрлэгч",
  soil: "Хөрс боловсруулах техник",
  sprayer: "Шүршигч төхөөрөмж",
  equipment: "ХАА-н дагалдах тоног төхөөрөмж",
  dryer: "Үр тариа хатаах төхөөрөмж",
  hay: "Өвс, тэжээл бэлтгэх техник",
  excavator: "Экскаватор",
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get related products from same category
  const relatedProducts = product 
    ? allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  // Get all images for the product
  const productImages = product?.images || (product ? [product.image] : []);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-[70px] md:pt-[100px] flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Бүтээгдэхүүн олдсонгүй</h1>
            <Link href="/products" className="text-green-600 hover:underline">
              Бүтээгдэхүүн руу буцах
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.nameMn || product.name}
      />

      {/* Breadcrumb */}
      <div className="pt-[70px] md:pt-[100px] bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">Нүүр</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/products" className="text-gray-500 hover:text-green-600">Бүтээгдэхүүн</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.nameMn || product.name}</span>
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
                  <Image 
                    src={productImages[selectedImage]} 
                    alt={product.nameMn || product.name}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {product.brand}
                    </span>
                  </div>
                </div>
                {/* Thumbnails */}
                {productImages.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {productImages.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all relative ${
                          selectedImage === idx ? "border-green-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image src={img} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Section - 2 cols */}
              <div className="lg:col-span-2 p-6 md:p-8 flex flex-col">
                <div className="mb-2">
                  <span className="text-green-600 text-sm font-medium">{categoryLabels[product.category]}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.nameMn || product.name}</h1>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.descriptionMn || product.description}
                </p>

                {/* Features */}
                {product.featuresMn && product.featuresMn.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.featuresMn.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
              {product.specifications.map((spec, idx) => (
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
      {relatedProducts.length > 0 && (
        <section className="pb-10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Төстэй бүтээгдэхүүн</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((item) => (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.nameMn || item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-green-600 font-medium mb-1">{item.brand}</p>
                      <p className="font-semibold text-gray-900 text-sm line-clamp-2">{item.nameMn || item.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
