import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "패밀리통신 까치산점 | 18년 전통 화곡동 성지",
  description: "매장이 없어질까 불안하신가요? 18년 된 회사가 개통부터 사후관리까지 확실하게 책임집니다. 최저가 상담 및 방문 시 무료 필름 교체 혜택!",
  keywords: "휴대폰 성지, 패밀리통신, 까치산역 휴대폰, 화곡동 휴대폰, 스마트폰 최저가, 효도폰, 학생폰, 알뜰폰",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 애드센스 등 외부 스크립트 추가 공간 */}
      </head>
      <body className="min-h-full flex flex-col font-sans text-primary">
        {children}
      </body>
    </html>
  );
}
