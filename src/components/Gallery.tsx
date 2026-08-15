export default function Gallery() {
  const photos = [
    { title: "매장 외부 전경", file: "KakaoTalk_20260815_155904044_02.jpg" },
    { title: "매장 내부 전경", file: "KakaoTalk_20260815_155904044_01.jpg" },
    { title: "1:1 상담 데스크", file: "KakaoTalk_20260815_155904044_05.jpg" },
    { title: "다양한 액세서리", file: "KakaoTalk_20260815_155904044_04.jpg" },
    { title: "편리한 개통 & 사후관리", file: "KakaoTalk_20260815_155904044_03.jpg" }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#14171f] tracking-tight">
            직접 방문하시면 더 믿을 수 있습니다
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.map((photo, idx) => (
            <div key={idx} className="bg-white p-2.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                <img src={`/${photo.file}`} alt={photo.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-center font-bold text-[13px] text-gray-700 mt-3 mb-1">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
