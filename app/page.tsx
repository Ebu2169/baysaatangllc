import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, ArrowUpRight, Menu } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
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

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 5);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md text-white">
        <div className="container mx-auto px-4">
          {/* Top Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+976 91912205</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Baysaa.tang.company@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* White Separator - Hidden on mobile */}
          <div className="hidden md:block border-t border-white/20"></div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between py-3 md:py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold text-white">БТ</span>
              </div>
              <span className="text-lg md:text-xl font-bold">Баясаа Танг</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium">
              <a href="/" className="hover:text-green-400 transition-colors">НҮҮР</a>
              <a href="/products" className="hover:text-green-400 transition-colors">БҮТЭЭГДЭХҮҮН</a>
              <a href="/about" className="hover:text-green-400 transition-colors">БИДНИЙ ТУХАЙ</a>
            </div>
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=900&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center pt-[60px] md:pt-[106px]">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-[family-name:var(--font-noto-serif)]">
              Тариаланчиддаа хүч нэмье<br />
              – хамтдаа ургацын баярыг угтацгаая!
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-12">ОНЦЛОХ БҮТЭЭГДЭХҮҮНҮҮД</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-8">
            {featuredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-100 aspect-square group cursor-pointer p-3">
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">
                    {categoryLabels[product.category]}
                  </span>
                  <Image 
                    src={product.image} 
                    alt={product.nameMn || product.name} 
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-50" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium text-center text-sm">
                    {product.nameMn || product.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
              Цааш үзэх →
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center">ХАМТРАГЧ БАЙГУУЛЛАГУУД</h2>
        </div>
        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                <a href="https://www.fmworldagri.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/fmworldlogo.jpeg" alt="FMWorld" width={150} height={60} className="object-contain max-h-full max-w-full" />
                </a>
                <div className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/anhuilogo.jpeg" alt="Anhui Yimutian" width={150} height={60} className="object-contain max-h-full max-w-full" />
                </div>
                <a href="https://www.masseyferguson.com/en.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/fergielogo.png" alt="Massey Ferguson" width={150} height={60} className="object-contain max-h-full max-w-full" />
                </a>
                <a href="http://www.ytocorp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/ytologo.jpeg" alt="YTO" width={180} height={80} className="object-contain max-h-[90%] max-w-[90%] scale-125" />
                </a>
                <a href="https://www.deere.com/en/index.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/JDlogo.png" alt="John Deere" width={150} height={60} className="object-contain max-h-full max-w-full" />
                </a>
                <a href="https://www.dongfeng-global.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/Dongfenglogo.png" alt="Dongfeng" width={150} height={60} className="object-contain max-h-full max-w-full" />
                </a>
                <a href="https://en.zoomlion.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 transition-all duration-300 w-[160px] md:w-[220px] h-[70px] md:h-[100px]">
                  <Image src="/partner_logos/zoomlionlogo.png" alt="Zoomlion" width={150} height={60} className="object-contain max-h-full max-w-full" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section - Greenhouse */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1600&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="text-xs md:text-sm font-medium mb-2 md:mb-4 block">ДЭЛХИЙ ДАХИНЫ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Оюу Толгой ХХК-ийн<br />
              Мод Үржүүлгийн<br />
              Газар
            </h2>
            <p className="mb-4 md:mb-6 text-sm md:text-lg leading-relaxed">
              БЗДс- Монгол улсын баялаг эрдэс<br className="hidden md:block" />
              бүхий бүсэд байрладаг. Манай компани<br className="hidden md:block" />
              нүүл 2026 оны 4-р улиралаас<br className="hidden md:block" />
              эхэлж хүлээн авч ургуулах ажлыг<br className="hidden md:block" />
              эхлүүлэх болно.
            </p>
            <button className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-green-700 text-sm md:text-base">
              Дэлгэрэнгүй →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Column 1 - Products */}
            <div>
              <h3 className="font-bold mb-4 text-green-400">БҮТЭЭГДЭХҮҮН</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Трактор</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Ургац хураалтын техник</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Үрлэгч</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Хөрс боловсруулах техник</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Шүршигч төхөөрөмж</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">ХАА-н дагалдах тоног төхөөрөмж</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Үр тариа хатаах төхөөрөмж</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Өвс, тэжээл бэлтгэх техник</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Экскаватор</a></li>
              </ul>
            </div>

            {/* Column 2 - Branches */}
            <div>
              <h3 className="font-bold mb-4 text-green-400">САЛБАР</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-medium mb-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-green-400" />
                    Улаанбаатар
                  </p>
                  <p className="text-gray-400 ml-5">
                    СХД, Моносын уулзвараас 22-ын товчоо чиглэлд 600 метр, Чандмань Бар худалдааны төв
                  </p>
                  <p className="text-gray-400 ml-5">Утас: 91912205</p>
                </div>
                <div>
                  <p className="font-medium mb-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-green-400" />
                    БНХАУ – Эрээн хот
                  </p>
                  <p className="text-gray-400 ml-5">
                    Их уул тариалан техникийн борлуулалтын төв
                  </p>
                  <p className="text-gray-400 ml-5">Утас: 1754896652</p>
                </div>
                <div>
                  <p className="font-medium mb-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-green-400" />
                    БНХАУ – Анхуй муж
                  </p>
                  <p className="text-gray-400 ml-5">
                    Anhui Yimutian Agricultural Machinery Co.,LTD
                  </p>
                  <p className="text-gray-400 ml-5">Утас: 1835682899</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h3 className="font-bold mb-4 text-green-400">ХОЛБОО БАРИХ</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>+976 91912205</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>Baysaa.tang.company@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-center text-sm text-gray-400 mb-2">
              FMWorld болон Anhui Yimutian Agricultural Machinery Co., Ltd компанийн Монгол дахь албан ёсны дилер
            </p>
            <p className="text-center text-sm text-gray-400">
              © 2026 "Баясаа Танг" ХХК. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
