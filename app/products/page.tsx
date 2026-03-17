import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const categories = [
  { id: "all", name: "Бүгд", count: 15 },
  { id: "tractor", name: "Трактор", count: 5 },
  { id: "harvester", name: "Ургац хураалтын техник", count: 3 },
  { id: "seeder", name: "Үрлэгч", count: 2 },
  { id: "soil", name: "Хөрс боловсруулах техник", count: 2 },
  { id: "sprayer", name: "Шүршигч төхөөрөмж", count: 1 },
  { id: "equipment", name: "ХАА-н дагалдах тоног төхөөрөмж", count: 1 },
  { id: "excavator", name: "Экскаватор", count: 1 },
];

const products = [
  {
    id: 1,
    name: "YTO LX904 Трактор",
    category: "tractor",
    categoryName: "Трактор",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    brand: "YTO",
  },
  {
    id: 2,
    name: "John Deere 5075E Трактор",
    category: "tractor",
    categoryName: "Трактор",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    brand: "John Deere",
  },
  {
    id: 3,
    name: "Massey Ferguson 4708 Трактор",
    category: "tractor",
    categoryName: "Трактор",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    brand: "Massey Ferguson",
  },
  {
    id: 4,
    name: "Dongfeng DF-404 Трактор",
    category: "tractor",
    categoryName: "Трактор",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    brand: "Dongfeng",
  },
  {
    id: 5,
    name: "Zoomlion RH1104 Трактор",
    category: "tractor",
    categoryName: "Трактор",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    brand: "Zoomlion",
  },
  {
    id: 6,
    name: "Комбайн хураагч CF805",
    category: "harvester",
    categoryName: "Ургац хураалтын техник",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    brand: "FMWorld",
  },
  {
    id: 7,
    name: "Үр тариа хураагч GH500",
    category: "harvester",
    categoryName: "Ургац хураалтын техник",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    brand: "Anhui Yimutian",
  },
  {
    id: 8,
    name: "Өвс хураагч машин",
    category: "harvester",
    categoryName: "Ургац хураалтын техник",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    brand: "YTO",
  },
  {
    id: 9,
    name: "Үрлэгч машин SD-12",
    category: "seeder",
    categoryName: "Үрлэгч",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    brand: "FMWorld",
  },
  {
    id: 10,
    name: "Нарийн үрлэгч PS-6",
    category: "seeder",
    categoryName: "Үрлэгч",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    brand: "Anhui Yimutian",
  },
  {
    id: 11,
    name: "Хөрс сийрүүлэгч",
    category: "soil",
    categoryName: "Хөрс боловсруулах техник",
    image: "https://images.unsplash.com/photo-1591088741926-d65b2ea79f94?w=400&h=400&fit=crop",
    brand: "YTO",
  },
  {
    id: 12,
    name: "Дискэн анжис",
    category: "soil",
    categoryName: "Хөрс боловсруулах техник",
    image: "https://images.unsplash.com/photo-1591088741926-d65b2ea79f94?w=400&h=400&fit=crop",
    brand: "Dongfeng",
  },
  {
    id: 13,
    name: "Шүршигч төхөөрөмж SP-500",
    category: "sprayer",
    categoryName: "Шүршигч төхөөрөмж",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop",
    brand: "FMWorld",
  },
  {
    id: 14,
    name: "Чиргүүл тээвэр",
    category: "equipment",
    categoryName: "ХАА-н дагалдах тоног төхөөрөмж",
    image: "https://images.unsplash.com/photo-1591088741926-d65b2ea79f94?w=400&h=400&fit=crop",
    brand: "Zoomlion",
  },
  {
    id: 15,
    name: "Мини экскаватор",
    category: "excavator",
    categoryName: "Экскаватор",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    brand: "Zoomlion",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header Section */}
      <div className="pt-[70px] md:pt-[100px] bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Бүтээгдэхүүн</h1>
          <p className="text-gray-600">Газар тариалангийн техник, тоног төхөөрөмж</p>
        </div>
      </div>

      {/* Category Filter - Horizontal Scroll */}
      <div className="bg-white border-y sticky top-[60px] md:top-[100px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <Link 
                key={cat.id}
                href={cat.id === "all" ? "/products" : `/products?category=${cat.id}`}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat.id === "all" 
                    ? "bg-green-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 text-sm">{products.length} бүтээгдэхүүн олдлоо</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  {/* Image */}
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <p className="text-xs text-green-600 font-medium mb-1">{product.categoryName}</p>
                    <p className="font-semibold text-gray-900 text-sm line-clamp-2 mb-3">{product.name}</p>
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
