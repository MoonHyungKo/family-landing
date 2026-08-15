import { MapPin, Phone, MessageCircle, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#f8f9fa] pt-12 pb-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#14171f] rounded-[24px] overflow-hidden flex flex-col md:flex-row relative shadow-xl">
          <div className="absolute top-0 left-6 md:left-10 bg-accent text-white text-[13px] font-bold px-6 py-2 rounded-b-xl shadow-md z-10">
            오늘 문의 가능!
          </div>
          
          <div className="flex-1 p-8 md:p-12 pt-16 text-white flex flex-col justify-center relative z-20">
            <h2 className="text-2xl md:text-[28px] font-extrabold mb-2 tracking-tight">언제든 편하게 문의하세요!</h2>
            <a href="tel:01072562011" className="inline-block text-[40px] md:text-[48px] font-black text-sub-accent hover:text-white transition-colors tracking-tighter mb-6 leading-none">
              010-7256-2011
            </a>
            
            <div className="space-y-3 mb-8 text-[15px]">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-bold">상담시간 |</span>
                <span className="font-medium text-white">10:00 ~ 20:00 (연중무휴)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-gray-400 mt-0.5" />
                <span className="font-medium text-white leading-snug">
                  서울시 강서구 까치산로 92<br/>
                  <span className="text-sub-accent font-bold">패밀리통신 까치산점 (까치산역 2번출구)</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:01072562011" className="flex-1 bg-accent text-white font-extrabold text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg">
                <Phone fill="white" size={20} /> 전화 상담
              </a>
              <a href="#" className="flex-1 bg-sub-accent text-[#14171f] font-extrabold text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors shadow-lg">
                <MessageCircle fill="currentColor" size={20} /> 카카오톡 상담
              </a>
            </div>
          </div>

          <div className="flex-1 min-h-[320px] md:min-h-[380px] relative overflow-hidden rounded-b-[24px] md:rounded-r-[24px] md:rounded-bl-none border-t md:border-t-0 md:border-l border-gray-800 group">
            {/* 네이버 지도 이미지 */}
            <img 
              src="/map_bg.png" 
              alt="패밀리통신 까치산점 네이버 지도 위치" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            
            <a 
              href="https://map.naver.com/p/search/%ED%8C%A8%EB%B0%80%EB%A6%AC%ED%86%B5%EC%8B%A0%20%EA%B9%8C%EC%B9%98%EC%82%B0%EC%A0%90" 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full h-full absolute inset-0 z-20 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#03c75a] hover:bg-[#02b350] text-white px-6 py-3.5 rounded-full font-extrabold text-[15px] shadow-[0_6px_25px_rgba(3,199,90,0.6)] flex items-center gap-2 group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
                <MapPin size={20} /> 네이버 지도로 길찾기 / 위치 확인
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-[13px] font-bold text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center font-bold text-[10px]">P</span> 주차 가능
          </div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[11px]">🚶</span> 까치산역 2번출구
          </div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[11px]">📦</span> 당일 개통 가능
          </div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[11px]">📱</span> 데이터 이전 지원
          </div>
        </div>
      </div>
    </footer>
  );
}
