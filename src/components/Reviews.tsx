import { Star, ChevronRight } from "lucide-react";

export default function Reviews() {
  const reviewsData = [
    { source: "당근 후기", sourceColor: "text-orange-500", author: "이OO", date: "24.01", content: "18년 된 곳이라 확실히 다르네요.\n너무 양심적으로 상담해주셨어요. 앞으로 휴대폰은 무조건 여기입니다." },
    { source: "방문 후기", sourceColor: "text-accent", author: "박OO", date: "23.10", content: "기기변경 상담도 도움!\n제휴카드 혜택까지 알려주시고, 제가 받을 수 있는 할인 다 챙겨주셨어요! 가격 비교까지 깔끔! 강추합니다." },
    { source: "구글 리뷰", sourceColor: "text-blue-500", author: "정OO", date: "24.02", content: "성지라고 해서 찾아갔는데 대박!\n진짜 가격 저렴합니다. 친구들에게도 엄청 추천했어요. 사장님 최고!" },
    { source: "당근 후기", sourceColor: "text-orange-500", author: "유OO", date: "24.03", content: "최신 기종 제일 저렴하게 샀습니다.\n상담도 시원시원하시고 사은품도 빵빵해요! 번창하세요." },
    { source: "방문 후기", sourceColor: "text-accent", author: "강OO", date: "24.01", content: "데이터 이전부터 복잡한 앱 설정까지\n부모님 쓰시기 편하게 너무 친절하게 다 해주셨습니다. 감사합니다." },
    { source: "당근 후기", sourceColor: "text-orange-500", author: "최OO", date: "24.05", content: "여기가 정말 찐 성지네요!\n여기저기 발품 팔았는데 결국 여기서 가장 좋은 조건으로 샀습니다." },
    { source: "구글 리뷰", sourceColor: "text-blue-500", author: "조OO", date: "23.11", content: "아메리카노 마시면서 편하게 상담\n매장도 깔끔하고 사장님이 꼼꼼하셔서 믿고 개통했습니다." },
    { source: "방문 후기", sourceColor: "text-accent", author: "한OO", date: "24.04", content: "다른 매장 견적 가져갔는데\n여기가 조건이 훨씬 투명하고 좋아서 바로 개통했어요. 대만족!" },
    { source: "당근 후기", sourceColor: "text-orange-500", author: "김OO", date: "24.06", content: "휴대폰 성지 인정합니다!\n가족 폰 싹 다 여기서 바꿨어요. 사후 관리도 너무 확실하게 해주심." },
    { source: "구글 리뷰", sourceColor: "text-blue-500", author: "송OO", date: "24.07", content: "효도폰 요금제 알맞게 추천!\n부모님 폰 바꿔드렸는데 요금제도 딱 알맞게 잘 추천해주셔서 만족합니다." }
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#14171f] tracking-tight">
            실제 고객님들이 남겨주신 찐 후기
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-0">
            <a href="https://www.daangn.com/kr/local-profile/%ED%8C%A8%EB%B0%80%EB%A6%AC%ED%86%B5%EC%8B%A0-%EA%B9%8C%EC%B9%98%EC%82%B0-ee8h4zc68sz1/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-[#ff6f0f] text-white text-[13px] font-bold rounded-full hover:bg-orange-600 transition-colors shadow-sm">
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#ff6f0f] text-[12px] font-black">🥕</span>
              당근 후기 보기
            </a>
            <a href="https://share.google/HrVF9ltgpofX6cyg2" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-white border border-gray-200 text-gray-700 text-[13px] font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[12px] font-black">G</span>
              구글 리뷰 보기
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee py-4">
            {[...reviewsData, ...reviewsData].map((review, idx) => (
              <div key={idx} className="w-[320px] shrink-0 bg-white rounded-xl p-7 border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full mx-3 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-[#14171f] font-bold text-[15px] leading-relaxed mb-6 whitespace-pre-line flex-grow">
                  {review.content}
                </p>
                <div className="flex items-center text-[13px] font-bold">
                  <span className={`${review.sourceColor}`}>{review.source}</span>
                  <span className="text-gray-300 mx-2">|</span>
                  <span className="text-gray-400">{review.author} - {review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
