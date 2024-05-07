import Image from "next/image";

export default function Experience() {
    return (
        <div className="px-6 md:px-24 lg:px-48">
            <h1 className="font-semibold text-2xl border-l-4 border-green-500 pl-4 my-10">
                이런 경험을 해봤습니다.
            </h1>
            <div className="space-y-5">
                <div className="flex border-b border-gray-300 pb-5">
                    <div className="mt-2">
                        <Image
                            src="/image/batal.svg"
                            width={60}
                            height={60}
                            alt="batal"
                        />
                    </div>

                    <div className="ml-4 ">
                        <p className="font-semibold text-lg">Batal</p>
                        <p className="font-semibold text-gray-500">
                            프론트엔드 개발자
                        </p>
                        <p className="font-semibold text-sm text-gray-500 mb-2">
                            2024.03 ~ 2024.05
                        </p>
                        <div className="text-gray-700">
                            <p>
                                초기 맴버로 Batal의 Motion Mvp를 개발
                                하였습니다.
                            </p>
                            <p>로직 개발과 컴포넌트 제작에 참여 하였습니다.</p>
                        </div>
                    </div>
                </div>
                <div className="flex border-b border-gray-300 pb-5">
                    <div>
                        <Image
                            src="/image/hyundai.png"
                            width={60}
                            height={60}
                            alt="hyundai"
                        />
                    </div>

                    <div className="ml-4">
                        <p className="font-semibold text-lg">현대백화점</p>
                        <p className="font-semibold text-gray-500">
                            현대백화점 식품팀
                        </p>
                        <p className="font-semibold text-sm text-gray-500">
                            2018 ~ 2024.01
                        </p>
                    </div>
                </div>
                <div className="flex border-b border-gray-300 pb-5">
                    <div>
                        <Image
                            src="/image/bag.svg"
                            width={60}
                            height={60}
                            alt="hyundai"
                        />
                    </div>

                    <div className="ml-4">
                        <p className="font-semibold text-lg">
                            일본 워킹홀리데이
                        </p>
                        <p className="font-semibold text-gray-500">
                            하코네 유넷상
                        </p>
                        <p className="font-semibold text-sm text-gray-500">
                            2017.08 ~ 2017.12
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
