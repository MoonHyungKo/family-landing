"use client";
import { useState } from "react";
import { ShieldCheck, CalendarCheck, FileCheck, Zap, ChevronRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="hero" className="relative w-full bg-[#14171f] overflow-hidden text-white pt-28 pb-20 md:pt-32 md:pb-32 border-b-8 border-gray-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#14171f]/85 z-10" />
        <div className="w-full h-full bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('/KakaoTalk_20260815_155904044_01.jpg')" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-8 lg:items-stretch">
        {/* Left: Copy */}
        <div className="flex-1 flex flex-col justify-center space-y-6 pt-4 lg:pr-8">
          <div className="inline-flex items-center gap-1.5 bg-accent text-white font-extrabold px-6 py-2.5 rounded-full shadow-lg text-[15px] border border-red-400 w-fit">
            우리 동네 1등 휴대폰 성지 전문점 👑
          </div>
          <h2 className="text-[40px] md:text-[54px] font-extrabold leading-[1.15] tracking-tight">
            <span className="block text-2xl md:text-3xl text-gray-300 mb-3 tracking-normal">휴대폰 성지 까치산점</span>
            대표 한 사람이 아니라<br />
            <span className="text-sub-accent">18년 된 회사</span>가 책임집니다
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
            신도림·화곡·온라인에서 받은 견적도 OK!<br />
            패밀리통신 까치산점이 꼼꼼하게 비교해드립니다.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            <div className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-xl px-4 py-3">
              <CalendarCheck size={28} className="text-gray-300" />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white">18년 전문점 운영</span>
                <span className="text-[11px] text-gray-400">오프라인 신뢰 매장</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-xl px-4 py-3">
              <FileCheck size={28} className="text-gray-300" />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white">투명한 안내</span>
                <span className="text-[11px] text-gray-400">정직한 가격·혜택</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-transparent border border-gray-600 rounded-xl px-4 py-3">
              <Zap size={28} className="text-gray-300" />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-white">초고속 신규개통</span>
                <span className="text-[11px] text-gray-400">당일 개통 & 빠른 처리</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-4">
            <div className="relative flex-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accent text-[11px] font-extrabold px-3 py-0.5 rounded-full z-10 border border-gray-200 shadow-sm">즉시 상담</div>
              <a href="tel:01072562011" className="flex items-center justify-center gap-2 w-full bg-accent text-white font-extrabold text-[17px] py-4 rounded-full hover:bg-red-700 transition-colors">
                <Phone fill="white" size={20} /> 전화 상담하기
              </a>
            </div>
            <div className="relative flex-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-sub-accent text-[11px] font-extrabold px-3 py-0.5 rounded-full z-10 border border-gray-200 shadow-sm">빠른 상담</div>
              <a href="#" className="flex items-center justify-center gap-2 w-full bg-sub-accent text-primary font-extrabold text-[17px] py-4 rounded-full hover:bg-yellow-500 transition-colors">
                <MessageCircle fill="currentColor" size={20} /> 카카오톡 상담
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full max-w-[420px] bg-white rounded-[24px] p-7 md:p-9 shadow-2xl text-primary relative mt-12 lg:mt-0 lg:ml-auto flex flex-col justify-center">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[13px] font-bold px-6 py-1.5 rounded-full shadow-md whitespace-nowrap">
            무료 견적 · 빠른 비교
          </div>
          
          <div className="text-center mb-6 mt-4">
            <h3 className="text-[22px] font-extrabold leading-snug">어떤 조건 견적도 OK!<br/>5초 만에 비교 견적 받아보세요</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="성함" required className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[15px] font-medium text-primary shadow-sm" />
            <input type="tel" placeholder="010-1234-5678 (연락처)" required className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[15px] font-medium text-primary shadow-sm" />
            <select required className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary appearance-none text-[15px] font-medium text-primary shadow-sm">
              <option value="">현재 통신사 선택</option>
              <option value="SKT">SKT</option>
              <option value="KT">KT</option>
              <option value="LG">LG U+</option>
              <option value="알뜰폰">알뜰폰</option>
            </select>
            <select className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary appearance-none text-[15px] font-medium text-primary shadow-sm">
              <option value="">관심기종 (선택)</option>
              <option value="아이폰">아이폰</option>
              <option value="갤럭시S">갤럭시 S시리즈</option>
              <option value="갤럭시Z">갤럭시 Z시리즈</option>
              <option value="효도/키즈폰">효도/키즈폰</option>
            </select>
            
            <button type="submit" className="w-full bg-accent text-white font-bold text-[18px] py-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 mt-4">
              무료 견적 비교하기 <ChevronRight size={20} />
            </button>
            <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1.5 mt-4">
              <ShieldCheck size={14} className="text-accent" /> 개인정보는 상담용으로만 사용됩니다.
            </p>
          </form>
          
          {submitted && (
            <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm rounded-[24px] flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300">
              <CheckCircle2 size={56} className="text-green-500 mb-4" />
              <h4 className="text-xl font-extrabold text-primary mb-2">신청이 완료되었습니다!</h4>
              <p className="text-sm text-gray-600 font-medium">빠른 시간 내에 최저가 조건으로<br/>연락드리겠습니다. 감사합니다.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
