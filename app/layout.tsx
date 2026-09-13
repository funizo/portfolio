import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const noto = Noto_Sans_KR({
    subsets: ["latin"], // 또는 preload: false
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "김세준의 포트폴리오",
    description: "의료 IT 개발자 김세준의 포트폴리오. 전산 프로그램·웹 서비스 개발과 운영, 병원 EMR/OCS 연동, RabbitMQ 전송 구조 개선 및 협업 경험을 소개합니다.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <body className={noto.className}>{children}</body>
        </html>
    );
}
