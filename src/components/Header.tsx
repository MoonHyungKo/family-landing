import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[84px] bg-[#14171f] z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="패밀리통신 로고" className="h-6 md:h-8 w-auto object-contain rounded-md bg-white p-1" />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">패밀리통신 까치산점</h1>
            <span className="text-[10px] md:text-[11px] text-sub-accent font-medium mt-0.5">18년 경력 · 믿을 수 있는 폰매장 전문점</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex space-x-10 text-[15px] font-bold text-white">
          <a href="#hero" className="hover:text-sub-accent transition-colors">가격비교</a>
          <a href="#hero" className="hover:text-sub-accent transition-colors">휴대폰 & 요금제</a>
          <a href="#gallery" className="hover:text-sub-accent transition-colors">선택 가이드</a>
          <a href="#reviews" className="hover:text-sub-accent transition-colors">고객 후기</a>
          <a href="#footer" className="hover:text-sub-accent transition-colors">오시는 길</a>
        </nav>

        <div className="relative hidden sm:block">
          <div className="absolute -top-3 right-4 bg-accent text-white text-[11px] font-bold px-2 py-0.5 rounded-full z-10 border border-[#14171f]">
            즉시상담
          </div>
          <a href="tel:01072562011" className="relative flex items-center gap-2 bg-transparent border border-gray-600 text-white px-5 py-2.5 rounded-full font-bold hover:border-white transition-colors text-sm">
            <Phone size={16} className="text-accent" fill="#E8332F" />
            <span>☎전화상담</span>
          </a>
        </div>
      </div>
    </header>
  );
}
