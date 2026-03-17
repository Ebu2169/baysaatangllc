import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Column 1 - Products */}
          <div>
            <h3 className="font-bold mb-4 text-green-400">БҮТЭЭГДЭХҮҮН</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products?category=tractor" className="hover:text-green-400 transition-colors">Трактор</Link></li>
              <li><Link href="/products?category=harvester" className="hover:text-green-400 transition-colors">Ургац хураалтын техник</Link></li>
              <li><Link href="/products?category=seeder" className="hover:text-green-400 transition-colors">Үрлэгч</Link></li>
              <li><Link href="/products?category=soil" className="hover:text-green-400 transition-colors">Хөрс боловсруулах техник</Link></li>
              <li><Link href="/products?category=sprayer" className="hover:text-green-400 transition-colors">Шүршигч төхөөрөмж</Link></li>
              <li><Link href="/products?category=equipment" className="hover:text-green-400 transition-colors">ХАА-н дагалдах тоног төхөөрөмж</Link></li>
              <li><Link href="/products?category=dryer" className="hover:text-green-400 transition-colors">Үр тариа хатаах төхөөрөмж</Link></li>
              <li><Link href="/products?category=hay" className="hover:text-green-400 transition-colors">Өвс, тэжээл бэлтгэх техник</Link></li>
              <li><Link href="/products?category=excavator" className="hover:text-green-400 transition-colors">Экскаватор</Link></li>
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
  );
}
