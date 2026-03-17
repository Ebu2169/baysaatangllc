import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[300px] md:min-h-[350px] bg-cover bg-center flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1600&h=600&fit=crop')", marginTop: "60px"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">БИДНИЙ ТУХАЙ</h1>
            <p className="text-lg md:text-xl text-gray-200">Баясаа Танг ХХК - Газар тариалангийн техникийн найдвартай түнш</p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Тариаланчдын итгэлт түнш</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Баясаа Танг" ХХК нь Монгол улсын газар тариалангийн салбарт тэргүүлэгч техник, тоног төхөөрөмж нийлүүлэгч компани юм. Бид FMWorld болон Anhui Yimutian Agricultural Machinery Co., Ltd компанийн Монгол дахь албан ёсны дилер бөгөөд дэлхийн шилдэг брэндүүдийн бүтээгдэхүүнийг харилцагчдадаа хүргэдэг.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Манай зорилго бол Монголын тариаланчдад дэлхийн чанартай техник хэрэгслийг хүртээмжтэй үнээр хүргэж, тэдний үр бүтээмжийг дээшлүүлэхэд хувь нэмрээ оруулах явдал юм.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Бид Улаанбаатар хот болон БНХАУ-д салбаруудтай бөгөөд харилцагчдадаа шуурхай, чанартай үйлчилгээ үзүүлэхийг эрхэмлэдэг.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=500&fit=crop" 
                alt="Газар тариалан"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 left-4 md:-left-6 bg-green-600 text-white p-4 md:p-6 rounded-xl shadow-lg">
                <p className="text-3xl md:text-4xl font-bold">10+</p>
                <p className="text-xs md:text-sm">Жилийн туршлага</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Бидний үнэт зүйлс</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Зорилго</h3>
              <p className="text-gray-600 text-sm">
                Монголын тариаланчдад дэлхийн чанартай техникийг хүргэх
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Чанар</h3>
              <p className="text-gray-600 text-sm">
                Дэлхийн шилдэг брэндүүдийн бүтээгдэхүүн, баталгаат чанар
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Үйлчилгээ</h3>
              <p className="text-gray-600 text-sm">
                Мэргэжлийн зөвлөгөө, борлуулалтын дараах үйлчилгээ
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Хамтын ажиллагаа</h3>
              <p className="text-gray-600 text-sm">
                Олон улсын түншлэл, өргөн сүлжээ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Хамтрагч байгууллагууд</h2>
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Бидэнтэй холбогдох</h2>
          <p className="text-lg mb-8 text-green-100">
            Та бүтээгдэхүүний талаар дэлгэрэнгүй мэдээлэл авах, үнийн санал авахыг хүсвэл бидэнтэй холбогдоорой.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+97691912205" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              +976 91912205
            </a>
            <a href="mailto:Baysaa.tang.company@gmail.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              И-мэйл илгээх
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
