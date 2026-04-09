import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { allProducts, getCategoriesWithCounts } from "@/data/products";
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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const categories = getCategoriesWithCounts();
  const selectedCategory = params.category as ProductCategory | undefined;
  
  const filteredProducts = selectedCategory
    ? allProducts.filter(p => p.category === selectedCategory)
    : allProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[350px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1600&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">БҮТЭЭГДЭХҮҮН</h1>
              <p className="text-lg md:text-xl text-gray-200">Газар тариалангийн техник, тоног төхөөрөмж</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Horizontal Scroll */}
      <div className="bg-white border-y sticky top-[60px] md:top-[100px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            <Link 
              href="/products"
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory 
                  ? "bg-green-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
              }`}
            >
              Бүгд ({allProducts.length})
            </Link>
            {categories.map((cat) => (
              <Link 
                key={cat.category}
                href={`/products?category=${cat.category}`}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.category 
                    ? "bg-green-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {cat.labelMn} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 text-sm">{filteredProducts.length} бүтээгдэхүүн олдлоо</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  {/* Image */}
                  <div className="aspect-square bg-gray-50 relative overflow-hidden p-3">
                    <Image 
                      src={product.image} 
                      alt={product.nameMn || product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <p className="text-xs text-green-600 font-medium mb-1">{categoryLabels[product.category]}</p>
                    <p className="font-semibold text-gray-900 text-sm line-clamp-2 mb-3">{product.nameMn || product.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Дэлгэрэнгүй →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Хайж буй бүтээгдэхүүнээ олсонгүй юу?
          </h2>
          <p className="text-green-100 mb-6">Бидэнтэй холбогдож, захиалга өгөх боломжтой</p>
          <a 
            href="tel:+97691912205" 
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +976 91912205
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
