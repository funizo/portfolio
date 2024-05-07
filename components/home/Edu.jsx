import Image from "next/image";

export default function Edu() {
    return (
        <div className="px-6 md:px-24 lg:px-48">
            <h1 className="font-semibold text-2xl border-l-4 border-green-500 pl-4 my-10">
                학력
            </h1>
            <div className="space-y-5">
                <div className="flex border-b border-gray-300 pb-5">
                    <div className="mt-2">
                        <Image
                            src="/image/inha.jpg"
                            width={60}
                            height={60}
                            alt="Inha"
                        />
                    </div>

                    <div className="ml-4 ">
                        <p className="font-bold text-black">인하공업전문대학</p>
                        <p className="font-semibold text-sm text-gray-500 ">
                            2020.03 ~ 2023.06 (졸)
                        </p>
                        <div className="text-gray-700">
                            <p>컴퓨터정보학과</p>
                        </div>
                    </div>
                </div>
                <div className="flex border-b border-gray-300 pb-5">
                    <div className="mt-2">
                        <Image
                            src="/image/multi.webp"
                            width={60}
                            height={10}
                            alt="multi"
                        />
                    </div>

                    <div className="ml-4 ">
                        <p className="font-bold text-black">멀티캠퍼스</p>
                        <p className="font-semibold text-sm text-gray-500 ">
                            2023.08 ~ 2023.012
                        </p>
                        <div className="text-gray-700">
                            <p>React 개발 과정</p>
                            <p>프로젝트 경진 대회 우수상</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
