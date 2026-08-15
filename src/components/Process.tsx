import { MessageSquareText, SearchCheck, CheckCircle2, ChevronRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <MessageSquareText size={28} className="text-gray-600" />,
      title: "빠른 상담",
      desc: "2분 상담, 요청 조건 전달\n빠르게 비교 해드립니다."
    },
    {
      icon: <SearchCheck size={28} className="text-gray-600" />,
      title: "정직한 비교",
      desc: "다양한 조건의 혜택을 비교하고,\n확실하게 조건 안내해드립니다."
    },
    {
      icon: <CheckCircle2 size={28} className="text-gray-600" />,
      title: "개통 & 사후관리",
      desc: "개통 후에도 문제 해결까지\n책임지는 든든한 사후관리."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[26px] md:text-[30px] font-bold text-[#14171f] mb-12">
          상담부터 개통까지, <span className="text-accent font-extrabold">3단계로 빠르게!</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <div className="bg-white rounded-xl p-6 flex items-start gap-4 text-left border border-gray-200 shadow-[0_2px_15px_rgba(0,0,0,0.04)] min-w-[280px] hover:-translate-y-1 transition-transform">
                <div className="mt-1">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold text-[#14171f] mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-medium whitespace-pre-line">{step.desc}</p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 ml-6">
                  <ChevronRight size={24} className="text-accent font-bold" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
