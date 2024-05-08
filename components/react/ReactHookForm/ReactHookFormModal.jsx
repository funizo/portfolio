import Image from "next/image";

export default function ReactHookFormModal({ isOpen, closeModal }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="bg-white h-svh max-h-[90%] rounded-md shadow-lg overflow-y-auto py-4 px-8 space-y-5"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-bold text-2xl mb-1 border-l-4 border-blue-500 pl-4">
                    React-Hook-Form
                </h2>
                <p className="text-sm mb-5 text-red-500">
                    ※모바일 환경에서는 전체 코드가 보이지 않습니다.
                </p>
                <div className="flex space-x-5">
                    <div className="space-y-5">
                        <p className="text-sm lg:text-base font-semibold">
                            React-Hook-Form을 사용 안할시 (137줄)
                        </p>
                        <Image
                            src="/image/react/inputForm.svg"
                            width={700}
                            height={1000}
                            alt="inputForm"
                        />
                    </div>
                    <div className="space-y-5">
                        <p className="text-sm lg:text-base font-semibold">
                            React-Hook-Form을 사용시 (80줄)
                        </p>
                        <Image
                            src="/image/react/UseReactHookForm.svg"
                            width={700}
                            height={1000}
                            alt="inputForm"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-5 rounded"
                        onClick={closeModal}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
}
