export default function PainPoints() {
  const painPoints = [
    {
      quote: "“성지라고 해서 샀는데\n몇 달 뒤 매장이 사라졌어요”",
      reason: "약속했던 페이백이나 사후 혜택을 못 받고 발만 동동 구르는 경우"
    },
    {
      quote: "“안 쓰는 고가 요금제와\n부가서비스를 몇 달씩 유지하래요”",
      reason: "기기값 깎아주는 척하며 매달 나가는 통신비는 더 비싸지는 상술"
    },
    {
      quote: "“제휴카드니 반납조건이니\n말장난에 속은 것 같아요”",
      reason: "실제 할부원금은 안 알려주고 월 청구금액만 낮아 보이게 하는 눈속임"
    }
  ];

  return (
    <section className="w-full bg-[#0b1329] py-14 sm:py-18 md:py-24 text-white relative overflow-hidden">
      {/* 배경 장식 은은한 빛 효과 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* 상단 타이틀 영역 */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#ff7a66] text-[13.5px] sm:text-[15px] md:text-[17px] font-bold tracking-tight mb-2 md:mb-3">
            그동안 겪으셨을 불안, 저희도 압니다
          </p>
          <h2 className="text-[22px] sm:text-[30px] md:text-[42px] font-extrabold text-white leading-[1.3] tracking-tight">
            핸드폰 하나 바꿀 때마다<br />
            왜 이렇게 불안하고 복잡할까요?
          </h2>
        </div>

        {/* 3대 문제점 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-6">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121c35]/90 border border-[#233354] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:border-[#3b558c] hover:bg-[#162242] transition-all duration-300 shadow-xl group"
            >
              <div>
                <h3 className="text-white text-[17px] sm:text-[18px] md:text-[20px] font-bold leading-snug whitespace-pre-line tracking-tight mb-4 md:mb-6">
                  {item.quote}
                </h3>
              </div>

              <div className="pt-3.5 md:pt-4 border-t border-[#1f2e4d]">
                <p className="text-[#ff7a66] text-[12.5px] md:text-[13px] font-extrabold mb-1.5 md:mb-2 tracking-tight">
                  ― 진짜 이유는
                </p>
                <p className="text-[#94a3b8] text-[13.5px] sm:text-[14px] md:text-[15px] leading-relaxed font-normal">
                  {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
