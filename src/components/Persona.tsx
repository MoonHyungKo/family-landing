import { Smartphone, Users, HeartHandshake, GraduationCap } from "lucide-react";

export default function Persona() {
  const personas = [
    {
      icon: <Smartphone className="text-white" size={26} />,
      title: "최저가 플래그십",
      desc: "최신폰 최저가 시세, 꼼꼼히 비교해드려요"
    },
    {
      icon: <Users className="text-white" size={26} />,
      title: "가족결합 할인",
      desc: "온가족 통신비, 한 번에 줄여드립니다"
    },
    {
      icon: <HeartHandshake className="text-white" size={26} />,
      title: "효도폰 케어",
      desc: "복잡한 요금제·데이터 이전까지 직접 도와드려요"
    },
    {
      icon: <GraduationCap className="text-white" size={26} />,
      title: "학생·키즈·알뜰폰",
      desc: "실속있는 선택, 부담없이 안내해드립니다"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            연령·상황 상관없이,<br className="md:hidden"/> 다 여기서 해결됩니다
          </h2>
          <p className="text-text-body font-medium text-sm md:text-base">우리 가족 모두 만족하는 패밀리통신만의 맞춤 컨설팅</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {personas.map((item, idx) => (
            <div key={idx} className="group bg-base-alt rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 border border-transparent hover:border-accent/10 cursor-default flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors shadow-lg group-hover:shadow-accent/30 group-hover:-rotate-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-text-body text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
