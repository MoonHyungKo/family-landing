import { CheckCircle2, Users, Star, MessageSquare } from "lucide-react";

export default function TrustStats() {
  const stats = [
    { label1: "화곡동 18년 원조", label2: "전문점 운영", value: "18", suffix: "년", icon: <CheckCircle2 size={24} className="text-[#14171f]" /> },
    { label1: "누적 고객", label2: "50,000명 이상", value: "50,000+", suffix: "", icon: <Users size={24} className="text-[#14171f]" /> },
    { label1: "당근/구글 고객 만족", label2: "1,601건 후기", value: "4.9", suffix: " / 5", icon: <Star size={24} className="text-[#14171f]" /> },
    { label1: "지역 내 우수", label2: "상담업체 인증", value: "N", suffix: "", icon: <MessageSquare size={24} className="text-[#14171f]" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-[45%] text-center lg:text-left">
          <p className="text-accent font-bold text-lg mb-2">휴대폰은 사고 팔이 아닙니다.</p>
          <h2 className="text-3xl md:text-[38px] font-extrabold leading-[1.3] mb-6 tracking-tight text-primary">
            18년 동안 같은 자리에서<br/>
            판매하고, 개통 후에도 책임집니다.
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium text-[15px]">
            2008년부터 화곡동에서 한 자리에서만 운영해왔습니다.<br />
            좋은 휴대폰과 바른 정보를, 가장 좋은 조건으로 약속드립니다.<br />
            믿고 맡기시면 오래오래 함께하겠습니다.
          </p>
        </div>

        <div className="lg:w-[55%] w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center text-center border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-800 flex items-center justify-center mb-4 text-[#14171f] relative">
                {stat.icon}
                <div className="absolute -bottom-1 -right-1 bg-accent w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle2 size={10} className="text-white" />
                </div>
              </div>
              <div className="text-[24px] md:text-[28px] font-black text-primary mb-1 tracking-tighter flex items-baseline">
                {stat.value}{stat.suffix && <span className="text-xs md:text-sm font-bold ml-0.5">{stat.suffix}</span>}
              </div>
              <div className="text-[11px] md:text-xs text-gray-500 font-medium leading-snug tracking-tight">
                <span className="block whitespace-nowrap">{stat.label1}</span>
                <span className="block whitespace-nowrap">{stat.label2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
