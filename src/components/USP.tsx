import { Scale, Smartphone, Gift } from "lucide-react";

export default function USP() {
  const usps = [
    {
      icon: <Scale size={32} className="text-[#14171f]" />,
      title: "타 매장 견적 비교",
      desc: "다른 곳에서 받은 견적도 가져오세요.\n조건부터 혜택까지 끝까지 비교해드립니다."
    },
    {
      icon: <Smartphone size={32} className="text-[#14171f]" />,
      title: "기준은 고객 보상",
      desc: "최저가는 조건만 맞춘 이벤트가 아닙니다.\n실제 체감 혜택 기준으로 비교합니다."
    },
    {
      icon: <Gift size={32} className="text-[#14171f]" />,
      title: "방문 고객 추가 혜택",
      desc: "방문 고객만의 악세서리 + 사은품 등\n온라인에서는 받을 수 없는 혜택을 드립니다."
    }
  ];

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#14171f] tracking-tight leading-snug">
            패밀리통신 까치산점을<br className="md:hidden"/> 선택해야 하는 3가지 이유
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {usps.map((usp, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl p-8 pt-10 text-center flex flex-col items-center border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="absolute -top-5 left-8 w-11 h-11 bg-accent text-white rounded-full flex items-center justify-center font-black text-lg border-[3px] border-white shadow-sm">
                0{idx + 1}
              </div>
              <div className="mb-5 mt-2 text-[#14171f]">
                {usp.icon}
              </div>
              <h3 className="text-[19px] font-extrabold text-[#14171f] mb-3">{usp.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed font-medium whitespace-pre-line">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
