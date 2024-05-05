import Image from "next/image";

export default function Experience() {
    return (
        <div className="px-6 md:px-24 lg:px-48">
            <h1 className="font-semibold text-2xl border-l-4 border-green-500 pl-4 my-10">
                이런 경험을 해봤습니다.
            </h1>
            <div className="flex border-b border-gray-300 mb-48">
                <Image
                    src="/image/batal.svg"
                    width={60}
                    height={60}
                    alt="batal"
                />
                <div className="ml-4">
                    <p className="font-semibold text-lg">Batal</p>
                    <p className="font-semibold text-gray-500">
                        프론트엔드 개발자
                    </p>
                    <p className="font-semibold text-sm text-gray-500">
                        2024.03 ~ 현재
                    </p>
                </div>
            </div>
        </div>
    );
}
