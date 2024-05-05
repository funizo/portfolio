import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
    subsets: ["latin"], // 또는 preload: false
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "김세준의 포트폴리오",
    description: "감사합니다",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={noto.className}>{children}</body>
        </html>
    );
}
