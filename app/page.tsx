import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, ArrowUpRight, Menu } from "lucide-react";

export default function Home() {
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
            {/* Product 1 - Tractor */}
            <Link href="/product/1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Трактор</span>
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop" alt="Трактор" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium text-center">
                  Трактор
                </div>
              </div>
            </Link>

            {/* Product 2 - Generator */}
            <Link href="/product/6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Ургац хураагч</span>
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=300&fit=crop" alt="Комбайн" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium text-center">
                  Ургац хураагч
                </div>
              </div>
            </Link>

            {/* Product 3 - Seeder */}
            <Link href="/product/9">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Үрлэгч</span>
                <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=300&fit=crop" alt="Үрлэгч" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium text-center">
                  Үрлэгч
                </div>
              </div>
            </Link>

            {/* Product 4 - Tractor 2 */}
            <Link href="/product/2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Трактор</span>
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop" alt="Трактор" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium text-center">
                  Трактор
                </div>
              </div>
            </Link>

            {/* Product 5 - Soil Equipment */}
            <Link href="/product/11">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Хөрс боловсруулах</span>
                <img src="https://images.unsplash.com/photo-1591088741926-d65b2ea79f94?w=300&h=300&fit=crop" alt="Хөрс боловсруулах" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium text-center">
                  Хөрс боловсруулах
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
              Цааш үзэх →
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center">ХАМТРАГЧ БАЙГУУЛЛАГУУД</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
            {/* FMWorld */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">FM</span>
                </div>
                <span className="text-xs md:text-sm font-medium">FMWorld</span>
              </div>
            </div>
            {/* Anhui Yimutian */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">AY</span>
                </div>
                <span className="text-xs md:text-sm font-medium">Anhui Yimutian</span>
              </div>
            </div>
            {/* Massey Ferguson */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">MF</span>
                </div>
                <span className="text-xs md:text-sm font-medium">Massey Ferguson</span>
              </div>
            </div>
            {/* YTO */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">YTO</span>
                </div>
                <span className="text-xs md:text-sm font-medium">YTO</span>
              </div>
            </div>
            {/* John Deere */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">JD</span>
                </div>
                <span className="text-xs md:text-sm font-medium">John Deere</span>
              </div>
            </div>
            {/* Dongfeng */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">DF</span>
                </div>
                <span className="text-xs md:text-sm font-medium">Dongfeng</span>
              </div>
            </div>
            {/* Zoomlion */}
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs md:text-sm font-bold">ZL</span>
                </div>
                <span className="text-xs md:text-sm font-medium">Zoomlion</span>
              </div>
            </div>
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
