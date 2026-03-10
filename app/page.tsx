import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md text-white">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <span>Баясаа Танг ХХК вэб сайтад тавтай морил </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Facebook className="w-4 h-4" />
                <Youtube className="w-4 h-4" />
                <Instagram className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Logolpsum@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+976 91012345</span>
              </div>
            </div>
          </div>
          
          {/* White Separator */}
          <div className="border-t border-white/20"></div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-black">L</span>
              </div>
              <span className="text-xl font-bold">Logolpsum</span>
            </div>
            <div className="flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-green-400 transition-colors">НҮҮР</a>
              <a href="#" className="hover:text-green-400 transition-colors">БҮТЭЭГДЭХҮҮН</a>
              <a href="#" className="hover:text-green-400 transition-colors">БИДНИЙ ТУХАЙ</a>
              <a href="#" className="hover:text-green-400 transition-colors">ХАМТРАН АЖИЛ</a>
              <a href="#" className="hover:text-green-400 transition-colors">ХОЛБОО БАРИХ</a>
              <a href="#" className="hover:text-green-400 transition-colors">ХЭРЭГЛЭГЧИЙН ХУУДАС</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=900&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center pt-[106px]">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 leading-tight font-[family-name:var(--font-noto-serif)]">
              ТАРИАЛАНЧИДДАА ХҮЧ НЭМБЭ<br />
              — ХАМТДАА УРГАЦЫН БАЯРЫГ ҮГТАЦГААЯ!
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">ОНЦЛОХ БҮТЭЭГДЭХҮҮНҮҮД</h2>
          <div className="grid grid-cols-5 gap-6 mb-8">
            {/* Product 1 - Tractor */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Трактор</span>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop" alt="Трактор" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium hover:bg-green-700">
                Трактор
              </button>
            </div>

            {/* Product 2 - Generator */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Цахилгаан үүсгүүр</span>
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop" alt="Генератор" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium hover:bg-green-700">
                Цахилгаан үүсгүүр
              </button>
            </div>

            {/* Product 3 - Harvester */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Хураагч</span>
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=300&fit=crop" alt="Комбайн" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium hover:bg-green-700">
                Хураагч
              </button>
            </div>

            {/* Product 4 - Tractor 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Трактор</span>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop" alt="Трактор" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium hover:bg-green-700">
                Трактор
              </button>
            </div>

            {/* Product 5 - Generator 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-200 aspect-square group cursor-pointer">
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full z-10">Цахилгаан үүсгүүр</span>
              <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop" alt="Генератор" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <button className="absolute bottom-0 left-0 right-0 w-full bg-green-600 text-white py-3 font-medium hover:bg-green-700">
                Цахилгаан үүсгүүр
              </button>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
              Цааш үзэх →
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">ХАМТРАГЧ БАЙГУУЛЛАГУУД</h2>
          <div className="space-y-12">
            {/* First Row - 5 logos */}
            <div className="grid grid-cols-5 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">L</span>
                    </div>
                    <span className="text-base font-semibold">Logolpsum</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Second Row - 4 logos */}
            <div className="grid grid-cols-5 gap-8">
              {[6, 7, 8, 9].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">L</span>
                    </div>
                    <span className="text-base font-semibold">Logolpsum</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Greenhouse */}
      <section className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1600&h=600&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="text-sm font-medium mb-4 block">ДЭЛХИЙ ДАХИНЫ</span>
            <h2 className="text-4xl font-bold mb-6">
              Оюу Толгой ХХК-ийн<br />
              Мод Үржүүлгийн<br />
              Газар
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              БЗДс- Монгол улсын баялаг эрдэс<br />
              бүхий бүсэд байрладаг. Манай компани<br />
              нүүл 2026 оны 4-р улиралаас<br />
              эхэлж хүлээн авч ургуулах ажлыг<br />
              эхлүүлэх болно.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700">
              Дэлгэрэнгүй →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-12 mb-8">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">L</span>
                </div>
                <span className="text-xl font-bold">Logolpsum</span>
              </div>
              <h3 className="font-bold mb-4">БҮТЭЭГДЭХҮҮН</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600">Трактор</a></li>
                <li><a href="#" className="hover:text-green-600">Үр үс, үржүүлгийн төхөөр</a></li>
                <li><a href="#" className="hover:text-green-600">Үрийн</a></li>
                <li><a href="#" className="hover:text-green-600">Тариалангийн машин</a></li>
                <li><a href="#" className="hover:text-green-600">ХАА-н дагалдах хэрэгсэл</a></li>
                <li><a href="#" className="hover:text-green-600">Ус зайлуулах хоолой</a></li>
                <li><a href="#" className="hover:text-green-600">Хүлэмж</a></li>
              </ul>
            </div>

            {/* Column 2 - Contact */}
            <div>
              <h3 className="font-bold mb-4">САЛБАР</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Төв салбар</p>
                  <p className="text-gray-600">
                    Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Энхтайваны өргөн чөлөө, Блю Скай тауэр, 17 давхар, 1702 тоот
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Үйлдвэрийн салбар</p>
                  <p className="text-gray-600">
                    Монгол Улсын Хөвсгөл аймаг, Их Тэнгэр сум, Тэнгэрийн Хөндий
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Хятадын салбар</p>
                  <p className="text-gray-600">
                    Anhui Yinshan Agricultural Machinery Co.,LTD, Yinshan, 480088888
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 - Info */}
            <div>
              <h3 className="font-bold mb-4">ХОЛБОО БАРИХ</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube className="w-4 h-4" />
                  <span>Youtube</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Logolpsum@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+976 91012345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 text-center text-sm text-gray-600">
            <p>© 2025 "Baysaa Taa" ХХК, Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
