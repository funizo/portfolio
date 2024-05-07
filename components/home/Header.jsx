"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const email = "k4160621@naver.com";
    const [message, setMessage] = useState("");

    const copyToClipboard = (text) => {
        if (navigator.clipboard) {
            // Clipboard API 사용 가능 여부 체크
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    setMessage("＊복사 되었습니다"); // 성공적으로 복사되었을 때 메시지 설정
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                    setMessage("Failed to copy email."); // 복사 실패 시 메시지 설정
                });
        } else {
            // Clipboard API가 지원되지 않는 경우
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            setMessage("＊복사 되었습니다"); // Fallback 방식의 복사 성공 메시지
        }
    };

    return (
        <div className="flex w-full  py-10 bg-green-100">
            <div className="px-6 md:px-24 lg:px-48">
                <p className="text-[40px] font-bold text-gray-800">김세준</p>
                <p className="text-xl font-semibold text-gray-500">
                    Frontend-Developer
                </p>
                <div className="mt-2  font-semibold text-gray-600 ">
                    <p>새로운 기술이 무조건 좋다고 생각하지 않습니다.</p>
                    <p>
                        때에 알맞는 코드를 사용하는것이 가장 중요하다고
                        생각합니다.
                    </p>
                </div>
                <div className="mt-5 space-y-2">
                    <div className="flex">
                        <Link href="https://github.com/funizo">
                            <Image
                                src="/image/github.png"
                                width={24}
                                height={24}
                                alt="github"
                            />
                        </Link>
                        <p className="font-semibold ml-2 ">Github</p>
                    </div>
                    <p className="font-semibold">📞 010-0000-0000</p>
                    <p
                        className="font-semibold cursor-pointer"
                        onClick={() => copyToClipboard(email)}
                    >
                        📩 {email}
                    </p>
                    {message && (
                        <p className="absolute text-sm text-green-700">
                            {message}
                        </p>
                    )}{" "}
                </div>
            </div>
        </div>
    );
}
