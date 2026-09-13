import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-green-100 py-10">
            <div className="px-6 md:px-24 lg:px-48">
                <h1 className="text-[40px] font-bold text-gray-800">김세준</h1>
                <p className="text-xl font-semibold text-gray-600">의료 IT 개발자 · 시스템 개발 및 운영</p>
                <div className="mt-4 max-w-3xl space-y-2 leading-relaxed text-gray-700">
                    <p className="font-semibold">끝까지 책임지고 문제를 해결하는 협업형 개발자입니다.</p>
                    <p>전산 프로그램과 웹 서비스를 개발·운영하며 검사팀, 영업팀, 병원 사이의 요구사항을 조율해 왔습니다. 로그와 데이터를 근거로 문제의 원인을 추적하고, 해결 과정과 결과를 관련 부서에 정확히 전달합니다.</p>
                    <p className="text-sm">2024.03 개발 경력 시작 · 2024.08부터 삼광랩트리 재직 중</p>
                </div>
                <div className="mt-5 flex flex-col items-start gap-3 font-semibold text-gray-700">
                    <a href="https://github.com/funizo" className="flex items-center gap-2 hover:text-green-800">
                        <Image src="/image/other/github.png" width={24} height={24} alt="" />
                        GitHub
                    </a>
                    <a href="tel:01024587985" className="hover:text-green-800">연락처 · 010-2458-7985</a>
                    <a href="mailto:k4160621@naver.com" className="break-all hover:text-green-800">이메일 · k4160621@naver.com</a>
                </div>
            </div>
        </header>
    );
}
