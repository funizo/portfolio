import Image from "next/image";

export default function Edu() {
    return (
        <section aria-labelledby="education-title" className="px-6 pb-16 md:px-24 lg:px-48">
            <h2 id="education-title" className="my-10 border-l-4 border-green-500 pl-4 text-2xl font-semibold">학력</h2>
            <div className="space-y-5">
                <article className="flex items-start gap-4 border-b border-gray-300 pb-5">
                    <Image src="/image/other/inha.jpg" width={60} height={60} alt="" className="shrink-0" />
                    <div>
                        <h3 className="font-bold">인하공업전문대학</h3>
                        <p className="mt-1 text-sm font-semibold text-gray-500">2020.03 ~ 2023.06</p>
                        <p className="mt-2 text-gray-700">컴퓨터정보학과 · 편입 / 졸업</p>
                        <p className="text-sm text-gray-600">학점 3.1 / 4.5</p>
                    </div>
                </article>
                <article className="border-b border-gray-300 pb-5 md:pl-[76px]">
                    <h3 className="font-bold">경동고등학교</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-500">2013.03 ~ 2015.02</p>
                    <p className="mt-2 text-gray-700">문과계열 · 졸업</p>
                </article>
            </div>
            <h2 className="my-10 border-l-4 border-green-500 pl-4 text-2xl font-semibold">교육 · 활동 · 수상</h2>
            <div className="space-y-5">
                <article className="flex items-start gap-4 border-b border-gray-300 pb-5">
                    <Image src="/image/other/multi.webp" width={60} height={60} alt="" className="h-auto shrink-0" />
                    <div>
                        <h3 className="font-bold">멀티캠퍼스</h3>
                        <p className="mt-1 text-sm font-semibold text-gray-500">2023.08 ~ 2023.12</p>
                        <p className="mt-2 leading-relaxed text-gray-700">프론트엔드 개발 교육 수료. 팀 프로젝트를 통해 개발자·다른 직군과의 협업 방식 및 소통 방법을 학습했습니다.</p>
                        <p className="mt-2 font-semibold text-green-800">프로젝트 경진대회 우수상 · 2023.12 · 멀티캠퍼스</p>
                    </div>
                </article>
                <article className="flex items-start gap-4 border-b border-gray-300 pb-5">
                    <Image src="/image/other/bag.svg" width={60} height={60} alt="" className="shrink-0" />
                    <div>
                        <h3 className="font-bold">하코네 유넷상 · 일본 워킹홀리데이</h3>
                        <p className="mt-1 text-sm font-semibold text-gray-500">2017.09 ~ 2018.02</p>
                        <p className="mt-2 leading-relaxed text-gray-700">일본 전통 료칸 근무를 통한 해외 현장 커뮤니케이션 경험</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
